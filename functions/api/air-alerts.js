// Cloudflare Pages Function: /api/air-alerts — повітряні тривоги для «Карти Стихії».
// ubilling.net.ua (неофіційний агрегатор) не віддає CORS, тож по дані ходить сервер.
// Кеш дата-центру на 30 с: скільки б не було відвідувачів, агрегатор смикаємо зрідка.
// Якщо він не відповідає — віддаємо останню копію, але не старшу за 5 хвилин: стара тривога гірша за помилку.
// У dev те саме робить плагін airAlertsPlugin у vite.config.mjs.
/* global Response, Request, URL, fetch, AbortSignal, caches */

const UPSTREAM = "https://ubilling.net.ua/aerialalerts/";
const FRESH_MS = 30_000;
const STALE_MS = 5 * 60_000;

const respond = (body, status = 200) =>
  new Response(body, {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

export async function onRequest({ request, waitUntil }) {
  if (request.method !== "GET") return respond(JSON.stringify({ error: "Method not allowed" }), 405);

  const cache = typeof caches !== "undefined" ? caches.default : null;
  const key = new Request(`${new URL(request.url).origin}/api/air-alerts`);
  const hit = cache ? await cache.match(key) : null;
  const age = hit ? Date.now() - Number(hit.headers.get("X-Fetched-At")) : Infinity;
  if (age < FRESH_MS) return respond(await hit.text());

  try {
    const upstream = await fetch(UPSTREAM, { signal: AbortSignal.timeout(10_000) });
    if (!upstream.ok) throw new Error(`ubilling ${upstream.status}`);
    const body = await upstream.text();
    if (typeof JSON.parse(body)?.states !== "object") throw new Error("ubilling: unexpected response");
    if (cache) {
      waitUntil(
        cache.put(
          key,
          new Response(body, {
            headers: { "Cache-Control": `public, max-age=${STALE_MS / 1000}`, "X-Fetched-At": String(Date.now()) },
          }),
        ),
      );
    }
    return respond(body);
  } catch (error) {
    if (age < STALE_MS) return respond(await hit.text());
    return respond(JSON.stringify({ error: String(error.message || error) }), 502);
  }
}
