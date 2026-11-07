// Cloudflare Pages Function: /api/support-progress
//
// GET  → скільки зібрано на Donatello за поточний місяць (київський час):
//        { raised, target, month, count, updatedAt }
// POST → перевірка донату для значка «Друг індиків»
//        тіло { name, amount } → { ok: true } або { ok: false }
//
// Змінні оточення (Cloudflare Pages → Settings → Variables and Secrets):
//   DONATELLO_TOKEN — API-токен з панелі Donatello (секрет, у браузер не потрапляє)
//   ZBIR_TARGET     — ціль на місяць у гривнях, напр. 1400 (необов'язково)
//
// Назовні не віддаємо ні імен донатерів, ні повідомлень. Навіть у кеші
// зберігаються лише хеші «ім'я + сума», а не самі імена.

const API_BASE = "https://donatello.to/api/v1";
const PAGE_SIZE = 100;
const MAX_PAGES = 10; // до 1000 останніх донатів
const FETCH_TIMEOUT_MS = 10000;
const DONATIONS_CACHE_SECONDS = 120; // список донатів — 2 хв (новий донат видно швидко)
const PROGRESS_CACHE_SECONDS = 120;
const CLAIM_WINDOW_DAYS = 90; // значок можна отримати за донат за останні 90 днів
const AMOUNT_TOLERANCE = 1; // грн — на випадок копійок і округлення
const TIME_ZONE = "Europe/Kyiv";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

class ApiError extends Error {
  constructor(message, status = 502, extra = {}) {
    super(message);
    this.status = status;
    Object.assign(this, extra);
  }
}

// ───────────── Дати ─────────────

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
// Для порівнянь «старше 90 днів» точність у кілька годин неважлива.
const parseDate = (raw) => {
  if (typeof raw === "string" && /^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}/.test(raw)) {
    const d = new Date(`${raw.replace(" ", "T").slice(0, 19)}+02:00`);
    if (!Number.isNaN(d.getTime())) return d;
  }
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? null : d;
};

const monthOfRaw = (raw) => {
  if (typeof raw === "string" && /^\d{4}-\d{2}/.test(raw)) return raw.slice(0, 7);
  const d = parseDate(raw);
  return d ? monthKeyOf(d) : null;
};

// ───────────── Нормалізація та хеш ─────────────

const toNumber = (v) => {
  const n = typeof v === "string" ? Number(v.replace(",", ".").replace(/\s/g, "")) : Number(v);
  return Number.isFinite(n) ? n : 0;
};

const normName = (s) =>
  String(s || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s ]+/g, " ")
    .trim();

const sha256 = async (text) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

// ───────────── Donatello ─────────────

const fetchPage = async (token, page) => {
  const res = await fetch(`${API_BASE}/donates?page=${page}&size=${PAGE_SIZE}`, {
    headers: { "X-Token": token, Accept: "application/json" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new ApiError(`Donatello HTTP ${res.status}`, res.status === 401 || res.status === 403 ? 502 : 504, { upstream: res.status });
  return res.json();
};

// Останні донати у «знеособленому» вигляді: { m: місяць, t: час, a: сума, c: валюта, h: хеш імені }
const loadDonations = async (token) => {
  const cutoff = Date.now() - CLAIM_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const list = [];

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const data = await fetchPage(token, page);
    const items = data?.content ?? data?.donates ?? data?.items;
    if (!Array.isArray(items)) {
      // Формат відповіді змінився — повертаємо лише назви полів, без даних донатерів
      throw new ApiError("Unexpected Donatello response", 502, {
        keys: data && typeof data === "object" ? Object.keys(data) : typeof data,
      });
    }
    if (!items.length) break;

    let reachedOld = false;
    for (const d of items) {
      const rawDate = d.createdAt ?? d.created_at ?? d.date;
      const date = parseDate(rawDate);
      if (date && date.getTime() < cutoff) {
        reachedOld = true;
        continue;
      }
      list.push({
        m: monthOfRaw(rawDate),
        t: date ? date.getTime() : null,
        a: toNumber(d.amount ?? d.sum),
        c: String(d.currency || "UAH").toUpperCase(),
        h: await sha256(normName(d.clientName ?? d.name ?? d.nickname)),
      });
    }

    // Донати йдуть від нових до старих: дійшли до старих — далі не гортаємо
    if (reachedOld || data.last === true) break;
  }
  return list;
};

// Кеш на рівні Cloudflare, щоб не смикати Donatello на кожен запит
const cached = async (ctx, key, seconds, producer) => {
  const cache = caches.default;
  const cacheKey = new Request(`${new URL(ctx.request.url).origin}/__support-cache/${key}`);
  const hit = await cache.match(cacheKey);
  if (hit) return hit.json();

  const value = await producer();
  const res = new Response(JSON.stringify(value), {
    headers: { "Content-Type": "application/json", "Cache-Control": `public, max-age=${seconds}` },
  });
  ctx.waitUntil(cache.put(cacheKey, res));
  return value;
};

const getDonations = (ctx) =>
  cached(ctx, "donations-v1", DONATIONS_CACHE_SECONDS, () => loadDonations(ctx.env.DONATELLO_TOKEN));

// ───────────── Обробники ─────────────

const handleProgress = async (ctx) => {
  const month = monthKeyOf(new Date());
  const targetRaw = Number(ctx.env.ZBIR_TARGET);
  const target = Number.isFinite(targetRaw) && targetRaw > 0 ? Math.round(targetRaw) : null;

  const donations = await getDonations(ctx);
  const thisMonth = donations.filter((d) => d.m === month && d.c === "UAH"); // інші валюти поки не рахуємо
  const raised = Math.round(thisMonth.reduce((sum, d) => sum + d.a, 0));

  return json(
    { raised, target, month, count: thisMonth.length, updatedAt: new Date().toISOString() },
    200,
    { "Cache-Control": `public, max-age=${PROGRESS_CACHE_SECONDS}` },
  );
};

// Захист від перебору «чи донатив Х на суму Y»: до 10 спроб за 10 хв з однієї IP.
// Кеш Cloudflare локальний для дата-центру — для такого захисту цього достатньо.
const CLAIM_LIMIT = 10;
const CLAIM_WINDOW_SECONDS = 600;

const tooManyClaims = async (ctx) => {
  const ip = ctx.request.headers.get("CF-Connecting-IP") || "unknown";
  const cache = caches.default;
  const key = new Request(
    `${new URL(ctx.request.url).origin}/__support-cache/claims/${await sha256(ip)}`,
  );
  const hit = await cache.match(key);
  const count = hit ? Number(await hit.text()) || 0 : 0;
  if (count >= CLAIM_LIMIT) return true;
  ctx.waitUntil(
    cache.put(
      key,
      new Response(String(count + 1), {
        headers: { "Cache-Control": `public, max-age=${CLAIM_WINDOW_SECONDS}` },
      }),
    ),
  );
  return false;
};

const handleClaim = async (ctx) => {
  let body;
  try {
    body = await ctx.request.json();
  } catch {
    return json({ ok: false, error: "Bad JSON" }, 400);
  }

  const name = normName(body?.name);
  const amount = toNumber(body?.amount);
  if (!name || name.length > 80 || !(amount > 0) || amount > 1_000_000) {
    return json({ ok: false, error: "Вкажіть ім'я з Donatello і суму донату" }, 400);
  }

  if (await tooManyClaims(ctx)) {
    return json({ ok: false, error: "Забагато спроб. Спробуйте за 10 хвилин." }, 429);
  }

  const nameHash = await sha256(name);
  const donations = await getDonations(ctx);
  const match = donations.find(
    (d) => d.h === nameHash && Math.abs(d.a - amount) <= AMOUNT_TOLERANCE,
  );

  // Відповідь лише «так/ні» — без дат, сум чи інших донатів
  return json({ ok: !!match }, 200, { "Cache-Control": "no-store" });
};

export async function onRequest(ctx) {
  const { request, env } = ctx;
  if (request.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });
  if (!env.DONATELLO_TOKEN) return json({ error: "DONATELLO_TOKEN is not configured" }, 500);

  try {
    if (request.method === "GET") return await handleProgress(ctx);
    if (request.method === "POST") return await handleClaim(ctx);
    return json({ error: "Method not allowed" }, 405);
  } catch (err) {
    console.error("support-progress:", err.message, err.upstream ?? "", err.keys ?? "");
    return json(
      { error: "Donatello unavailable", ...(err.keys ? { keys: err.keys } : {}) },
      err.status || 502,
      { "Cache-Control": "no-store" },
    );
  }
}
