// Cloudflare Pages Function: /api/support-progress
//
// Повертає, скільки зібрано на Donatello за поточний місяць (за київським часом):
//   { raised, target, month, count, updatedAt }
//
// Змінні оточення (Cloudflare Pages → Settings → Variables and Secrets):
//   DONATELLO_TOKEN — API-токен з панелі Donatello (секрет, у браузер не потрапляє)
//   ZBIR_TARGET     — ціль на місяць у гривнях, напр. 1400 (необов'язково)
//
// Назовні віддаємо лише суми — ні імен донатерів, ні повідомлень.

const API_BASE = "https://donatello.to/api/v1";
const PAGE_SIZE = 100;
const MAX_PAGES = 10; // до 1000 донатів за місяць — з запасом
const FETCH_TIMEOUT_MS = 10000;
const CACHE_SECONDS = 300; // 5 хв: смужка «жива», але Donatello не смикаємо на кожен візит
const TIME_ZONE = "Europe/Kyiv";

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

// "2026-11" у київському часі
const monthKeyOf = (date) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
  }).formatToParts(date);
  const y = parts.find((p) => p.type === "year")?.value;
  const m = parts.find((p) => p.type === "month")?.value;
  return `${y}-${m}`;
};

// Donatello віддає дату рядком на кшталт "2026-11-07 14:03:12" (київський час).
// Якщо формат інший — пробуємо розібрати як звичайну дату.
const donationMonth = (raw) => {
  if (typeof raw === "string" && /^\d{4}-\d{2}/.test(raw)) return raw.slice(0, 7);
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? null : monthKeyOf(d);
};

const toNumber = (v) => {
  const n = typeof v === "string" ? Number(v.replace(",", ".").replace(/\s/g, "")) : Number(v);
  return Number.isFinite(n) ? n : 0;
};

const fetchPage = async (token, page) => {
  const res = await fetch(`${API_BASE}/donates?page=${page}&size=${PAGE_SIZE}`, {
    headers: { "X-Token": token, Accept: "application/json" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) {
    const err = new Error(`Donatello HTTP ${res.status}`);
    err.status = res.status === 401 || res.status === 403 ? 502 : 504;
    err.upstream = res.status;
    throw err;
  }
  return res.json();
};

const collectMonth = async (token, month) => {
  let raised = 0;
  let count = 0;

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const data = await fetchPage(token, page);
    const items = data?.content ?? data?.donates ?? data?.items;
    if (!Array.isArray(items)) {
      // Формат відповіді змінився — повертаємо лише назви полів, без даних донатерів
      const err = new Error("Unexpected Donatello response");
      err.status = 502;
      err.keys = data && typeof data === "object" ? Object.keys(data) : typeof data;
      throw err;
    }
    if (!items.length) break;

    let sawThisMonth = false;
    for (const d of items) {
      if (donationMonth(d.createdAt ?? d.created_at ?? d.date) !== month) continue;
      sawThisMonth = true;
      const currency = (d.currency || "UAH").toUpperCase();
      if (currency !== "UAH") continue; // інші валюти поки не рахуємо
      raised += toNumber(d.amount ?? d.sum);
      count += 1;
    }

    // Донати йдуть від нових до старих: сторінка без жодного донату цього місяця — далі лише старші
    if (!sawThisMonth || data.last === true) break;
  }

  return { raised: Math.round(raised), count };
};

export async function onRequest({ request, env, waitUntil }) {
  if (request.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });
  if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);

  const token = env.DONATELLO_TOKEN;
  if (!token) return json({ error: "DONATELLO_TOKEN is not configured" }, 500);

  const month = monthKeyOf(new Date());
  const cache = caches.default;
  // Місяць у ключі кешу — 1-го числа сума одразу починається з нуля
  const cacheKey = new Request(`${new URL(request.url).origin}/api/support-progress?m=${month}`);

  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const targetRaw = Number(env.ZBIR_TARGET);
  const target = Number.isFinite(targetRaw) && targetRaw > 0 ? Math.round(targetRaw) : null;

  try {
    const { raised, count } = await collectMonth(token, month);
    const response = json(
      { raised, target, month, count, updatedAt: new Date().toISOString() },
      200,
      { "Cache-Control": `public, max-age=${CACHE_SECONDS}` },
    );
    waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (err) {
    console.error("support-progress:", err.message, err.upstream ?? "", err.keys ?? "");
    return json(
      { error: "Donatello unavailable", ...(err.keys ? { keys: err.keys } : {}) },
      err.status || 502,
      { "Cache-Control": "no-store" },
    );
  }
}
