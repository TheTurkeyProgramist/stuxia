// Дні 17–28: субсезонний ансамбль ECMWF EC46 через безкоштовне Seasonal API Open-Meteo.
// Звичайний прогноз Open-Meteo обмежений 16 днями; EC46 рахується щодня на 46 днів уперед
// (50 членів ансамблю + контрольний). Точність після 2 тижнів — це тенденція, а не точна
// погода, тому дні позначаємо extended і показуємо розкид (10–90 % ансамблю).

export const EXTENDED_TOTAL_DAYS = 28;
const CACHE_PREFIX = "stuxia.ec46.v1:";
const TTL_MS = 6 * 60 * 60 * 1000; // EC46 оновлюється раз на добу

const VARS = [
  "temperature_2m_max",
  "temperature_2m_min",
  "precipitation_sum",
  "snowfall_sum",
  "weather_code",
  "wind_speed_10m_max",
  "wind_gusts_10m_max",
];

export const buildExtendedUrl = (lat, lon) =>
  `https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${lat}&longitude=${lon}` +
  `&models=ecmwf_ec46&daily=${VARS.join(",")}&wind_speed_unit=ms&timezone=auto&forecast_days=30`;

const quantile = (sorted, q) => {
  if (!sorted.length) return null;
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
};
const r1 = (v) => (v === null ? null : Math.round(v * 10) / 10);

// Код погоди за медіанами, а не «найчастіший у членів»: інакше сніг/дощ одного-двох
// членів перетворював би кожен далекий день на опади
const codeFromStats = ({ precip, precipProb, snow, tmax }) => {
  if (precip >= 1 && precipProb >= 50) {
    if (snow >= 0.7 || tmax <= 0) return precip >= 5 ? 73 : 71;
    return precip >= 8 ? 63 : precip >= 3 ? 61 : 80;
  }
  if (precipProb >= 35) return 3;
  return precipProb >= 15 ? 2 : 1;
};

/** Відповідь Seasonal API → [{ fullDate, tmax, tmin, tmaxLo, tmaxHi, tminLo, tminHi, precip, precipProb, snow, wind, gusts, code }]. */
export const parseEc46 = (json) => {
  const d = json?.daily;
  if (!d || !Array.isArray(d.time)) return [];
  const keys = Object.keys(d);
  const membersOf = (v) => keys.filter((k) => k === v || k.startsWith(`${v}_member`));
  const cols = Object.fromEntries(VARS.map((v) => [v, membersOf(v)]));

  return d.time.map((date, i) => {
    const vals = (v) =>
      cols[v]
        .map((k) => d[k]?.[i])
        .filter((x) => Number.isFinite(x))
        .sort((a, b) => a - b);
    const tmax = vals("temperature_2m_max");
    const tmin = vals("temperature_2m_min");
    const precip = vals("precipitation_sum");
    const snow = vals("snowfall_sum");
    const stats = {
      fullDate: date,
      tmax: r1(quantile(tmax, 0.5)),
      tmin: r1(quantile(tmin, 0.5)),
      tmaxLo: r1(quantile(tmax, 0.1)),
      tmaxHi: r1(quantile(tmax, 0.9)),
      tminLo: r1(quantile(tmin, 0.1)),
      tminHi: r1(quantile(tmin, 0.9)),
      precip: r1(quantile(precip, 0.5)),
      precipProb: precip.length ? Math.round((precip.filter((x) => x >= 1).length / precip.length) * 100) : null,
      snow: r1(quantile(snow, 0.5)),
      wind: r1(quantile(vals("wind_speed_10m_max"), 0.5)),
      gusts: r1(quantile(vals("wind_gusts_10m_max"), 0.5)),
      members: tmax.length,
    };
    return { ...stats, code: stats.tmax === null ? null : codeFromStats({ ...stats, precip: stats.precip ?? 0, precipProb: stats.precipProb ?? 0, snow: stats.snow ?? 0 }) };
  }).filter((x) => x.tmax !== null && x.tmin !== null);
};

/**
 * Дні, яких бракує після звичайного прогнозу: від дня після lastDate до today + total − 1.
 * today — "YYYY-MM-DD" (місцевий для міста).
 */
export const pickExtensionDays = (ext, lastDate, today, total = EXTENDED_TOTAL_DAYS) => {
  const end = new Date(Date.parse(`${today}T00:00:00Z`) + (total - 1) * 86400000).toISOString().slice(0, 10);
  return ext.filter((x) => (!lastDate || x.fullDate > lastDate) && x.fullDate <= end);
};

const cacheKey = (lat, lon) => `${CACHE_PREFIX}${Number(lat).toFixed(2)},${Number(lon).toFixed(2)}`;

/** Ансамбль EC46 для точки (кеш 6 год у localStorage, бо однакова точка — однакові дані). */
export const fetchExtendedDays = async (lat, lon, signal) => {
  const key = cacheKey(lat, lon);
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Date.now() - parsed.at < TTL_MS && Array.isArray(parsed.days)) return parsed.days;
    }
  } catch {
    /* без кешу */
  }
  const res = await fetch(buildExtendedUrl(lat, lon), { signal });
  if (!res.ok) throw new Error(`EC46 HTTP ${res.status}`);
  const days = parseEc46(await res.json());
  try {
    localStorage.setItem(key, JSON.stringify({ at: Date.now(), days }));
  } catch {
    /* сховище повне або приватний режим */
  }
  return days;
};
