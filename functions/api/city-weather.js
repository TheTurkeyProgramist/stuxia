// Cloudflare Pages Function: /api/city-weather?slug=kyiv&part=forecast|now|seasonal
//
// Погода для «серверних» міст (src/utils/serverCities.js — усі міста бази). Сервер ходить до
// Open-Meteo сам, а відвідувачі беруть готове — їхній ліміт Open-Meteo не витрачається.
// У Cloudflare Workers Open-Meteo рахує ліміт за заголовком CF-Worker (наш домен), а не за
// спільними IP — тож у нас окремий лічильник 10 000 «викликів» на добу.
//
//   forecast — основний прогноз + консенсус 7 моделей (9,24): раз на 3 год (fast) / 6 год (slow);
//   now      — блок «зараз» для ВСІХ міст одним запитом (1 на місто): раз на 55 хв;
//   seasonal — сезонний на ~210 днів (1,51): раз на добу.
// Оновлюємо лише на запит і лише застаріле: місто, яке ніхто не дивиться, нічого не коштує.
//
// Сховище — Workers KV (прив'язка CITY_WEATHER, див. wrangler.toml). Безкоштовно — 1 000
// записів на добу; у найгіршому разі тут ~550. Без прив'язки функція відповідає 503,
// і сайт сам іде до Open-Meteo, як раніше.

import {
  serverCityBySlug,
  SERVER_CITIES,
  SERVER_FULL_TTL_MS,
  SERVER_NOW_TTL_MS,
  SERVER_SEASONAL_TTL_MS,
} from "../../src/utils/serverCities.js";
// Лише openMeteoUrls.js: weatherConsensus.js / weatherRefresh.js тягнуть i18n, а він ламає Worker
import {
  buildForecastUrl,
  buildSeasonalUrl,
  buildConsensusUrl,
  LIGHT_CURRENT_VARS,
} from "../../src/utils/openMeteoUrls.js";

const FETCH_TIMEOUT_MS = 15000;
const EDGE_CACHE_SECONDS = { forecast: 300, now: 300, seasonal: 3600 };

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const respond = (body, status = 200, extra = {}) =>
  new Response(typeof body === "string" ? body : JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json; charset=utf-8", ...extra },
  });

// Відповідь Open-Meteo як текст — без розбору JSON (менше процесорного часу Worker)
const fetchText = async (url) => {
  const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  const text = await res.text();
  if (!res.ok || (!text.startsWith("{") && !text.startsWith("["))) {
    throw new Error(`Open-Meteo HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
  return { text, cost: Number(res.headers.get("x-ratelimit-cost")) || 0 };
};

/**
 * Значення з KV, якщо воно свіже; інакше — оновлюємо через load() і записуємо.
 * Не вдалося оновити — віддаємо старе (краще, ніж нічого), а немає й старого — кидаємо помилку.
 */
const getFresh = async (env, waitUntil, key, ttlMs, load) => {
  const { value, metadata } = await env.CITY_WEATHER.getWithMetadata(key);
  const fetchedAt = Number(metadata?.fetchedAt) || 0;
  if (value && Date.now() - fetchedAt < ttlMs) return { value, fetchedAt, refreshed: false };
  try {
    const now = Date.now();
    const { body, cost } = await load(now);
    waitUntil(env.CITY_WEATHER.put(key, body, { metadata: { fetchedAt: now } }));
    return { value: body, fetchedAt: now, refreshed: true, cost };
  } catch (err) {
    if (value) return { value, fetchedAt, refreshed: false, stale: true };
    throw err;
  }
};

const loadForecast = (city) => async (now) => {
  const [main, consensus] = await Promise.all([
    fetchText(buildForecastUrl(city.lat, city.lon)),
    // Консенсус необов'язковий: без нього картка лишиться на best_match
    fetchText(buildConsensusUrl(city.lat, city.lon)).catch(() => null),
  ]);
  return {
    body: `{"fetchedAt":${now},"main":${main.text},"consensus":${consensus ? consensus.text : "null"}}`,
    cost: main.cost + (consensus?.cost || 0),
  };
};

// «Зараз» для всіх міст одним запитом: вага — 1 на місто, але один запис у KV на годину
const loadNowBundle = async (now) => {
  const lats = SERVER_CITIES.map((c) => c.lat).join(",");
  const lons = SERVER_CITIES.map((c) => c.lon).join(",");
  const { text, cost } = await fetchText(
    `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}` +
      `&current=${LIGHT_CURRENT_VARS.join(",")}&wind_speed_unit=ms&timezone=auto&forecast_days=1`,
  );
  const list = JSON.parse(text);
  const current = {};
  (Array.isArray(list) ? list : [list]).forEach((entry, i) => {
    if (entry?.current && SERVER_CITIES[i]) current[SERVER_CITIES[i].slug] = entry.current;
  });
  return { body: JSON.stringify({ fetchedAt: now, current }), cost };
};

const loadSeasonal = (city) => async () => {
  const { text, cost } = await fetchText(buildSeasonalUrl(city.lat, city.lon));
  return { body: text, cost };
};

export async function onRequest({ request, env, waitUntil }) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS_HEADERS });
  if (request.method !== "GET") return respond({ error: "Method not allowed" }, 405, { Allow: "GET, OPTIONS" });

  const url = new URL(request.url);
  const city = serverCityBySlug(url.searchParams.get("slug"));
  const part = url.searchParams.get("part") || "forecast";
  if (!city) return respond({ error: "Unknown city" }, 404, { "Cache-Control": "public, max-age=86400" });
  if (!EDGE_CACHE_SECONDS[part]) return respond({ error: "Unknown part" }, 400);
  if (!env.CITY_WEATHER) {
    return respond({ error: "City weather storage is not configured" }, 503, { "Cache-Control": "no-store" });
  }

  // Кеш дата-центру Cloudflare перед KV: менше читань KV (безкоштовно — 100 тис. на добу)
  const cache = typeof caches !== "undefined" ? caches.default : null;
  const cacheKey = new Request(`${url.origin}/api/city-weather?slug=${city.slug}&part=${part}`);
  if (cache) {
    const hit = await cache.match(cacheKey);
    if (hit) return hit;
  }

  try {
    let result;
    let body;
    if (part === "forecast") {
      result = await getFresh(env, waitUntil, `fc:${city.slug}`, SERVER_FULL_TTL_MS[city.tier], loadForecast(city));
      body = result.value;
    } else if (part === "now") {
      result = await getFresh(env, waitUntil, "now:all", SERVER_NOW_TTL_MS, loadNowBundle);
      const bundle = JSON.parse(result.value);
      const current = bundle.current?.[city.slug];
      if (!current) throw new Error("No current weather for this city");
      body = JSON.stringify({ fetchedAt: bundle.fetchedAt, current });
    } else {
      result = await getFresh(env, waitUntil, `se:${city.slug}`, SERVER_SEASONAL_TTL_MS, loadSeasonal(city));
      body = result.value;
    }
    const headers = {
      "Cache-Control": `public, max-age=${EDGE_CACHE_SECONDS[part]}`,
      "X-Fetched-At": String(result.fetchedAt),
    };
    if (result.stale) headers["X-Stale"] = "1";
    // У кеш — без X-Open-Meteo-Cost: копія з кешу нічого не коштувала
    if (cache && !result.stale) waitUntil(cache.put(cacheKey, respond(body, 200, headers)));
    // Скільки «викликів» Open-Meteo коштувала САМЕ ця відповідь (0 — з KV або кешу)
    return respond(body, 200, { ...headers, "X-Open-Meteo-Cost": String(result.refreshed ? result.cost ?? "" : 0) });
  } catch (err) {
    // Сайт тоді сам піде до Open-Meteo (з лімітом відвідувача), як для звичайних міст
    return respond({ error: "City weather is temporarily unavailable", details: String(err).slice(0, 200) }, 502, {
      "Cache-Control": "no-store",
    });
  }
}
