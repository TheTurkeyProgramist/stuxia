// Архів погоди: помісячні підсумки за останні ~14 місяців.
// Джерело — безкоштовний архів Open-Meteo (реаналіз ERA5), ключ не потрібен.
// Один запит на місто; результат кешуємо в localStorage, бо архів за минулі місяці не змінюється.
//
// Файл імпортується і з тестів, тому тут нічого не тягнемо (ні i18n, ні React).

export const ARCHIVE_MONTHS = 14;
// Дані ERA5 з'являються із запізненням у кілька діб — останні дні просимо не завжди.
const ARCHIVE_LAG_DAYS = 3;
const CACHE_TTL_MS = 12 * 60 * 60 * 1000;
const CACHE_PREFIX = "weather_archive_v2_";

const DAILY_VARS = [
  "temperature_2m_max",
  "temperature_2m_min",
  "precipitation_sum",
  "rain_sum",
  "cloud_cover_mean",
  "wind_speed_10m_mean",
  "relative_humidity_2m_mean",
  "pressure_msl_mean",
];

const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

// Межі запиту: перше число місяця (ARCHIVE_MONTHS-1) тому … сьогодні мінус кілька діб
export const archiveRange = (today = new Date()) => {
  const start = new Date(today.getFullYear(), today.getMonth() - (ARCHIVE_MONTHS - 1), 1);
  const end = new Date(today);
  end.setDate(end.getDate() - ARCHIVE_LAG_DAYS);
  // Початок місяця може випасти пізніше за «кінець з відступом» — тоді береться попередній місяць
  if (end < start) start.setMonth(start.getMonth() - 1);
  return { start: ymd(start), end: ymd(end) };
};

export const buildArchiveUrl = (lat, lon, today = new Date()) => {
  const { start, end } = archiveRange(today);
  return (
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}` +
    `&start_date=${start}&end_date=${end}&daily=${DAILY_VARS.join(",")}` +
    "&wind_speed_unit=ms&timezone=auto"
  );
};

const mean = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null);
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const nums = (arr) => arr.filter((v) => typeof v === "number" && Number.isFinite(v));

// Денний ряд Open-Meteo → масив місяців (від старого до нового)
export const aggregateMonths = (daily) => {
  const time = daily?.time || [];
  const byMonth = new Map();
  time.forEach((day, i) => {
    const key = day.slice(0, 7);
    if (!byMonth.has(key)) byMonth.set(key, []);
    byMonth.get(key).push(i);
  });
  const pick = (name, idx) => nums(idx.map((i) => daily[name]?.[i]));

  return [...byMonth.entries()].map(([key, idx]) => {
    const [year, month] = key.split("-").map(Number);
    const precip = pick("precipitation_sum", idx);
    const rain = pick("rain_sum", idx);
    const precipTotal = precip.length ? sum(precip) : null;
    // Різниця між усіма опадами та дощем — це сніг (у водному еквіваленті) і змішані опади
    const rainTotal = rain.length ? Math.min(sum(rain), precipTotal ?? Infinity) : null;
    const dayMax = pick("temperature_2m_max", idx);
    const dayMin = pick("temperature_2m_min", idx);
    return {
      key,
      year,
      month, // 1–12
      days: idx.length,
      tMax: mean(dayMax),
      tMin: mean(dayMin),
      tAbsMax: dayMax.length ? Math.max(...dayMax) : null,
      tAbsMin: dayMin.length ? Math.min(...dayMin) : null,
      cloud: mean(pick("cloud_cover_mean", idx)),
      precip: precipTotal,
      rain: rainTotal,
      snow: precipTotal !== null && rainTotal !== null ? Math.max(0, precipTotal - rainTotal) : null,
      wetDays: precip.filter((v) => v >= 1).length,
      wind: mean(pick("wind_speed_10m_mean", idx)),
      humidity: mean(pick("relative_humidity_2m_mean", idx)),
      pressure: mean(pick("pressure_msl_mean", idx)),
    };
  });
};

const cacheKey = (lat, lon) => `${CACHE_PREFIX}${Number(lat).toFixed(2)}_${Number(lon).toFixed(2)}`;

const readCache = (lat, lon, now) => {
  try {
    const raw = JSON.parse(localStorage.getItem(cacheKey(lat, lon)) || "null");
    if (raw && now - raw.at < CACHE_TTL_MS && Array.isArray(raw.months)) return raw.months;
  } catch {
    /* сховище недоступне — просто йдемо в мережу */
  }
  return null;
};

const writeCache = (lat, lon, months, now) => {
  try {
    localStorage.setItem(cacheKey(lat, lon), JSON.stringify({ at: now, months }));
  } catch {
    /* переповнене сховище — не критично */
  }
};

export const fetchArchiveMonths = async (lat, lon, { signal, now = Date.now() } = {}) => {
  const cached = readCache(lat, lon, now);
  if (cached) return cached;
  const res = await fetch(buildArchiveUrl(lat, lon, new Date(now)), { signal });
  if (!res.ok) throw new Error(`archive ${res.status}`);
  const json = await res.json();
  const months = aggregateMonths(json.daily);
  if (!months.length) throw new Error("archive empty");
  writeCache(lat, lon, months, now);
  return months;
};
