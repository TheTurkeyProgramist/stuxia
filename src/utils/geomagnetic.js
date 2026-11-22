// Магнітні бурі: планетарний Kp-індекс від NOAA SWPC (безкоштовно, CORS дозволений).
// - noaa-planetary-k-index-forecast.json — Kp кожні 3 год: тиждень спостережень + 3 доби прогнозу;
// - 27-day-outlook.txt — найбільший Kp на кожен день на 27 днів уперед.
// Дані однакові для всієї планети, тож кешуємо один раз на всі картки.

const KP_URL = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json";
const OUTLOOK_URL = "https://services.swpc.noaa.gov/text/27-day-outlook.txt";
const CACHE_KEY = "stuxia.kp.v1";
const TTL_MS = 60 * 60 * 1000; // NOAA оновлює прогноз кілька разів на добу — година достатньо

const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

/** Рівень за шкалою NOAA: 0 — спокійно (Kp<4), 1 — збурено (Kp 4), 2..6 — бурі G1..G5 (Kp 5..9). */
export const kpLevel = (kp) => {
  if (!Number.isFinite(kp)) return null;
  if (kp >= 9) return 6;
  if (kp >= 8) return 5;
  if (kp >= 7) return 4;
  if (kp >= 6) return 3;
  if (kp >= 5) return 2;
  if (kp >= 4) return 1;
  return 0;
};
export const KP_LEVEL_KEYS = ["quiet", "unsettled", "g1", "g2", "g3", "g4", "g5"];
export const KP_LEVEL_COLORS = ["#3ddc84", "#ffd93b", "#ff9f1c", "#ff6b35", "#ff3b30", "#d6006f", "#8b00ff"];

/** JSON NOAA (масив об'єктів або старий формат «масив масивів» із заголовком) → [{ time, kp, kind }]. */
export const parseKpForecast = (json) => {
  if (!Array.isArray(json)) return [];
  let rows = json;
  if (Array.isArray(json[0])) {
    const [head, ...rest] = json;
    const idx = (name) => head.indexOf(name);
    rows = rest.map((r) => ({ time_tag: r[idx("time_tag")], kp: r[idx("kp")], observed: r[idx("observed")] }));
  }
  return rows
    .map((r) => ({
      time: `${String(r.time_tag).replace(" ", "T").slice(0, 16)}Z`,
      kp: Number(r.kp),
      kind: String(r.observed || "predicted"), // observed | estimated | predicted
    }))
    .filter((r) => Number.isFinite(r.kp) && !Number.isNaN(Date.parse(r.time)));
};

/** Текст 27-денного прогнозу → [{ date: "YYYY-MM-DD", ap, kpMax }]. */
export const parseOutlook = (text) => {
  if (typeof text !== "string") return [];
  const out = [];
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*(\d{4})\s+([A-Z][a-z]{2})\s+(\d{1,2})\s+\d+\s+(\d+)\s+(\d+)\s*$/);
    if (!m || !MONTHS[m[2]]) continue;
    const date = `${m[1]}-${String(MONTHS[m[2]]).padStart(2, "0")}-${m[3].padStart(2, "0")}`;
    out.push({ date, ap: Number(m[4]), kpMax: Number(m[5]) });
  }
  return out;
};

/**
 * Зведення для плитки: Kp зараз, найбільший Kp на кожну добу (UTC) далі і найближча буря.
 * now — мс; series — з parseKpForecast; outlook — з parseOutlook.
 */
export const summarizeKp = (series, outlook = [], now = Date.now()) => {
  const past = series.filter((r) => Date.parse(r.time) <= now);
  const current = past[past.length - 1] || series[0] || null;
  const todayUtc = new Date(now).toISOString().slice(0, 10);

  const byDay = new Map();
  for (const r of series) {
    const d = r.time.slice(0, 10);
    if (d < todayUtc) continue;
    byDay.set(d, Math.max(byDay.get(d) ?? 0, r.kp));
  }
  // Детальний 3-добовий прогноз точніший; далі — 27-денний
  for (const o of outlook) {
    if (o.date >= todayUtc && !byDay.has(o.date)) byDay.set(o.date, o.kpMax);
  }
  const days = [...byDay.entries()]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([date, kp]) => ({ date, kp: Math.round(kp * 10) / 10, level: kpLevel(kp) }));

  const nextStorm = days.find((d) => d.kp >= 5) || null;
  return {
    current: current ? { kp: Math.round(current.kp * 10) / 10, level: kpLevel(current.kp), time: current.time, kind: current.kind } : null,
    today: days[0] || null,
    days,
    nextStorm,
  };
};

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && Date.now() - parsed.at < TTL_MS ? parsed : null;
  } catch {
    return null;
  }
};

let inflight = null;

/** Kp-ряд і 27-денний прогноз з кешем на годину (один запит на всі картки). */
export const fetchGeomagnetic = async () => {
  const cached = readCache();
  if (cached) return { series: cached.series, outlook: cached.outlook };
  if (inflight) return inflight;
  inflight = (async () => {
    const [kpRes, outlookRes] = await Promise.allSettled([
      fetch(KP_URL).then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))),
      fetch(OUTLOOK_URL).then((r) => (r.ok ? r.text() : Promise.reject(new Error(`HTTP ${r.status}`)))),
    ]);
    const series = kpRes.status === "fulfilled" ? parseKpForecast(kpRes.value) : [];
    const outlook = outlookRes.status === "fulfilled" ? parseOutlook(outlookRes.value) : [];
    if (!series.length && !outlook.length) throw new Error("NOAA SWPC недоступний");
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), series, outlook }));
    } catch {
      /* приватний режим або повне сховище — просто без кешу */
    }
    return { series, outlook };
  })();
  try {
    return await inflight;
  } finally {
    inflight = null;
  }
};
