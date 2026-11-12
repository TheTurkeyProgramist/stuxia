// Cloudflare Pages Function: /api/news-bundle
//
// Готовий набір новин вбудованих стрічок (по 3 з кожної, уже перекладені українською).
// Його кожні 10 хв збирає Firebase-функція refreshNewsBundle у документ global/newsBundle,
// а тут ми лише віддаємо його з кешем Cloudflare — тож Firestore читається кілька разів
// на 5 хв (на кожен дата-центр), а не на кожного відвідувача.
//
// Відповідь: { updatedAt: <мс>, items: [{ link, title, description, titleUk, descriptionUk,
//   pubDate, sourceName, image }] }

const PROJECT_ID = "stuxia-5b535";
// Публічний ключ веб-застосунку (той самий, що в src/firebaseConfig.js) — не секрет
const API_KEY = "AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk";
const DOC_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/global/newsBundle?key=${API_KEY}`;
const CACHE_SECONDS = 300;
const FETCH_TIMEOUT_MS = 8000;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (data, status = 200, extraHeaders = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });

export async function onRequest({ request, waitUntil }) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (request.method !== "GET") {
    return json({ error: "Method not allowed" }, 405, { Allow: "GET, OPTIONS" });
  }

  // Ключ кешу без параметрів: усі отримують той самий набір
  const cache = typeof caches !== "undefined" ? caches.default : null;
  const cacheKey = new Request(new URL("/api/news-bundle", request.url).toString(), {
    method: "GET",
  });
  if (cache) {
    const cached = await cache.match(cacheKey);
    if (cached) return cached;
  }

  try {
    const res = await fetch(DOC_URL, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
    if (!res.ok) throw new Error(`Firestore HTTP ${res.status}`);
    const doc = await res.json();
    const fields = doc.fields || {};
    const items = JSON.parse(fields.json?.stringValue || "[]");
    const updatedAt = Number(fields.updatedAt?.integerValue ?? fields.updatedAt?.doubleValue) || 0;
    if (!Array.isArray(items) || items.length === 0) throw new Error("Empty bundle");

    const result = json({ updatedAt, items }, 200, {
      "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
    });
    if (cache && waitUntil) waitUntil(cache.put(cacheKey, result.clone()));
    return result;
  } catch {
    // Сайт тоді сам завантажить стрічки по одній, як раніше
    return json({ error: "News bundle is temporarily unavailable" }, 502, {
      "Cache-Control": "no-store",
    });
  }
}
