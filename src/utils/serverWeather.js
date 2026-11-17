// Погода «серверних» міст із нашого сервера (functions/api/city-weather.js) — без витрати
// ліміту Open-Meteo відвідувача. Будь-яка невдача → null, і App.jsx іде до Open-Meteo сам.

const TIMEOUT_MS = 6000;

// На stuxia.com — відносна адреса; локально, у застосунку Android (Capacitor) і на
// прев'ю-доменах — повна (сервер дозволяє CORS)
const apiUrl = (query) => {
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const base = host === "stuxia.com" || host === "www.stuxia.com" ? "" : "https://stuxia.com";
  return `${base}/api/city-weather?${query}`;
};

// Сервер недоступний цілком (503 — сховище не налаштоване, або немає мережі) —
// 10 хв не смикаємо його для кожної картки, одразу йдемо до Open-Meteo
const PAUSE_AFTER_OUTAGE_MS = 10 * 60 * 1000;
let pausedUntil = 0;

const getJson = async (query) => {
  if (Date.now() < pausedUntil) return null;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(apiUrl(query), { signal: controller.signal });
    if (res.status === 503) pausedUntil = Date.now() + PAUSE_AFTER_OUTAGE_MS;
    if (!res.ok || !(res.headers.get("content-type") || "").includes("json")) return null;
    return await res.json();
  } catch {
    pausedUntil = Date.now() + PAUSE_AFTER_OUTAGE_MS;
    return null;
  } finally {
    clearTimeout(timer);
  }
};

/** { fetchedAt, main, consensus } — ті самі відповіді Open-Meteo, що запитує картка. */
export const fetchServerForecast = async (slug) => {
  const data = await getJson(`slug=${encodeURIComponent(slug)}&part=forecast`);
  return data?.main?.hourly?.time?.length && data.main.current ? data : null;
};

/** Блок `current` Open-Meteo (для легкого оновлення «зараз»). */
export const fetchServerNow = async (slug) => {
  const data = await getJson(`slug=${encodeURIComponent(slug)}&part=now`);
  return data?.current && typeof data.current.temperature_2m === "number" ? data.current : null;
};

/** Відповідь seasonal-api Open-Meteo. */
export const fetchServerSeasonal = async (slug) => {
  const data = await getJson(`slug=${encodeURIComponent(slug)}&part=seasonal`);
  return data?.daily?.time?.length ? data : null;
};
