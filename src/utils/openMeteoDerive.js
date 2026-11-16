// Дані, які ми рахуємо самі з погодинного ряду Open-Meteo замість окремих змінних у запиті.
// Open-Meteo враховує в квоті кожну змінну (понад 10 — це вже кілька «викликів»),
// а денні максимуми/суми й «зараз» для повільних величин — це те саме погодинне,
// лише інакше згорнуте.
import * as SunCalc from "suncalc";

const isNum = (v) => typeof v === "number" && Number.isFinite(v);

// ---------- «Зараз» ----------

// Змінюються повільно, і погодинний ряд їх уже має — «зараз» = поточна година.
// pressure_msl: тиск, приведений до рівня моря (як і в погодинному списку).
const CURRENT_FROM_HOURLY = [
  "visibility",
  "dew_point_2m",
  "snow_depth",
  "et0_fao_evapotranspiration",
  "freezing_level_height",
  "soil_temperature_0cm",
  "pressure_msl",
];

const fillCurrent = (data) => {
  const c = data.current;
  const h = data.hourly;
  if (!c?.time) return c;
  const i = h.time.indexOf(`${String(c.time).slice(0, 13)}:00`);
  if (i === -1) return c;
  const current = { ...c };
  for (const v of CURRENT_FROM_HOURLY) {
    // Старий кеш ще має ці поля з `current` — їх не чіпаємо
    if (current[v] == null && h[v]?.[i] != null) current[v] = h[v][i];
  }
  return current;
};

// ---------- По днях ----------

const max = (vals) => {
  const a = vals.filter(isNum);
  return a.length ? Math.max(...a) : null;
};
const min = (vals) => {
  const a = vals.filter(isNum);
  return a.length ? Math.min(...a) : null;
};
const sum = (vals) => {
  const a = vals.filter(isNum);
  return a.length ? Math.round(a.reduce((s, v) => s + v, 0) * 100) / 100 : null;
};

// Переважний напрямок: векторне середнє, зважене швидкістю (як у Open-Meteo через u/v)
const dominantDirection = (dirs, speeds) => {
  let u = 0;
  let v = 0;
  dirs.forEach((dir, k) => {
    const s = speeds[k];
    if (!isNum(dir) || !isNum(s)) return;
    const rad = (dir * Math.PI) / 180;
    u += s * Math.sin(rad);
    v += s * Math.cos(rad);
  });
  if (u === 0 && v === 0) return null;
  return Math.round(((Math.atan2(u, v) * 180) / Math.PI + 360) % 360);
};

// Перевірено на 5 містах × 17 днів (15.11.2026): збіг з денними даними API до 0.01–0.04
// (суми), 1° (напрямок) і 1 хв (схід/захід). Денний код — найсуворіший за добу, як в API.
// temperature_2m_max/min НЕ рахуємо: API бере їх із точніших за погодинні даних
// (розбіжність до 1.8 °C), тому вони лишаються в запиті. Тут — лише запасний варіант.
const DAILY_RULES = {
  temperature_2m_max: (h) => max(h.temperature_2m),
  temperature_2m_min: (h) => min(h.temperature_2m),
  apparent_temperature_max: (h) => max(h.apparent_temperature),
  apparent_temperature_min: (h) => min(h.apparent_temperature),
  uv_index_max: (h) => max(h.uv_index),
  wind_speed_10m_max: (h) => max(h.wind_speed_10m),
  wind_gusts_10m_max: (h) => max(h.wind_gusts_10m),
  wind_direction_10m_dominant: (h) => dominantDirection(h.wind_direction_10m, h.wind_speed_10m),
  precipitation_probability_max: (h) => max(h.precipitation_probability),
  precipitation_sum: (h) => sum(h.precipitation),
  rain_sum: (h) => sum(h.rain),
  et0_fao_evapotranspiration: (h) => sum(h.et0_fao_evapotranspiration),
  weather_code: (h) => max(h.weather_code),
};

// "YYYY-MM-DDTHH:MM" у часовому поясі міста — той самий формат, що віддає Open-Meteo
const localIso = (date, timeZone, offsetSeconds) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return null;
  try {
    // sv-SE форматує як "2026-11-15 07:12"
    const s = new Intl.DateTimeFormat("sv-SE", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).format(date);
    return s.replace(" ", "T");
  } catch {
    return new Date(date.getTime() + (offsetSeconds || 0) * 1000).toISOString().slice(0, 16);
  }
};

const sunTimes = (day, lat, lon, timeZone, offsetSeconds) => {
  const [y, m, d] = day.split("-").map(Number);
  // Полудень за місцевим часом — щоб suncalc узяв саме цю добу
  const noon = new Date(Date.UTC(y, m - 1, d, 12) - (offsetSeconds || 0) * 1000);
  const t = SunCalc.getTimes(noon, lat, lon);
  return {
    sunrise: localIso(t.sunrise, timeZone, offsetSeconds),
    sunset: localIso(t.sunset, timeZone, offsetSeconds),
  };
};

const buildDaily = (data) => {
  const h = data.hourly;
  const daily = { ...(data.daily || {}) };

  // Погодинні індекси, згруповані за місцевою датою
  const byDay = new Map();
  h.time.forEach((t, i) => {
    const day = String(t).slice(0, 10);
    if (!byDay.has(day)) byDay.set(day, []);
    byDay.get(day).push(i);
  });
  const days = daily.time?.length ? daily.time : [...byDay.keys()];
  daily.time = days;

  const slice = (idx) =>
    new Proxy(
      {},
      { get: (_, key) => (Array.isArray(h[key]) ? idx.map((i) => h[key][i]) : []) },
    );

  for (const [field, rule] of Object.entries(DAILY_RULES)) {
    if (Array.isArray(daily[field])) continue; // старий кеш — вже є від API
    daily[field] = days.map((day) => rule(slice(byDay.get(day) || [])));
  }

  if (!Array.isArray(daily.sunrise) || !Array.isArray(daily.sunset)) {
    const lat = Number(data.latitude);
    const lon = Number(data.longitude);
    const times = days.map((day) =>
      sunTimes(day, lat, lon, data.timezone, data.utc_offset_seconds),
    );
    daily.sunrise = times.map((t) => t.sunrise);
    daily.sunset = times.map((t) => t.sunset);
  }

  return daily;
};

// ---------- Точка роси ----------

// Формула Магнуса з температури й вологості. Звірено з API (6 міст, 2448 годин,
// 15.11.2026): у середньому 0.04 °C, до 1.2 °C лише в дуже сухому повітрі
// (API віддає вологість цілими відсотками).
export const dewPoint = (t, rh) => {
  if (!isNum(t) || !isNum(rh)) return null;
  const a = 17.625;
  const b = 243.04;
  const g = Math.log(Math.max(rh, 1) / 100) + (a * t) / (b + t);
  return Math.round(((b * g) / (a - g)) * 10) / 10;
};

const withDewPoint = (hourly) => {
  if (Array.isArray(hourly.dew_point_2m)) return hourly; // старий кеш
  const t = hourly.temperature_2m || [];
  const rh = hourly.relative_humidity_2m || [];
  return { ...hourly, dew_point_2m: hourly.time.map((_, i) => dewPoint(t[i], rh[i])) };
};

/** Доповнює відповідь Open-Meteo тим, що ми не запитуємо окремо. Нічого не мутує. */
export const deriveFromHourly = (data) => {
  if (!data || !Array.isArray(data.hourly?.time) || !data.hourly.time.length) return data;
  const withHourly = { ...data, hourly: withDewPoint(data.hourly) };
  return { ...withHourly, current: fillCurrent(withHourly), daily: buildDaily(withHourly) };
};
