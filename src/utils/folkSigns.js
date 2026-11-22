// Народні прикмети для Смарт-прогнозу.
// Ідея: «сьогодні так-то → народ каже, що завтра буде так-то», і поруч чесна звірка
// з прогнозом моделей (погоджуються / ні / не видно чіткої зміни).
// Чисті функції без i18n — тексти підставляє Weather.jsx (ключі newsWeather.folkSigns.*).
// Дати свят — за новим церковним календарем (з 2023 року).

const SNOW_CODES = [71, 73, 75, 77, 85, 86];
const RAIN_CODES = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
const STORM_CODES = [95, 96, 99];
const FOG_CODES = [45, 48];

const num = (v, d = null) => {
  if (v === null || v === undefined || v === "") return d;
  const n = typeof v === "number" ? v : parseFloat(String(v));
  return Number.isFinite(n) ? n : d;
};
const avg = (arr) => (arr.length ? arr.reduce((s, x) => s + x, 0) / arr.length : null);
const addDays = (dateStr, n) => new Date(Date.parse(`${dateStr}T00:00:00Z`) + n * 86400000).toISOString().slice(0, 10);
const hourKey = (h) => String(h?.fullTime || "").slice(0, 13);
const dateOf = (h) => String(h?.fullTime || "").slice(0, 10);
const hourOf = (h) => Number(String(h?.fullTime || "").slice(11, 13));

// Вітер «звідки дме» (метеорологічний напрям) → сектор
const isSouthWind = (deg) => deg >= 135 && deg <= 247.5;
const isNorthWind = (deg) => deg >= 315 || deg <= 45;

/** Зібрати все потрібне для прикмет з картки. nowKey — "YYYY-MM-DDTHH" у часі міста. */
export const buildFolkContext = (card, nowKey) => {
  if (!card || !nowKey) return null;
  const hourly = Array.isArray(card.hourly) ? card.hourly : [];
  const from = Math.max(0, hourly.findIndex((h) => hourKey(h) >= nowKey));
  const ahead = hourly.slice(from);
  const today = nowKey.slice(0, 10);
  const tomorrow = addDays(today, 1);
  const cur = card.current || {};

  const temp = num(cur.tempNum, num(cur.temp));
  const pressure = num(cur.pressure);
  const p6 = num(ahead[6]?.pressure_msl);
  const daily = Array.isArray(card.daily16) ? card.daily16 : [];
  const day = (date) => daily.find((d) => d?.fullDate === date) || null;

  // Ніч: найближчі години з 22:00 до 06:00
  const night = ahead.slice(0, 18).filter((h) => hourOf(h) >= 22 || hourOf(h) <= 6);

  return {
    today,
    tomorrow,
    month: Number(today.slice(5, 7)),
    mmdd: today.slice(5),
    temp,
    humidity: num(cur.humidity),
    pressure,
    pressureTrend6h: pressure !== null && p6 !== null ? p6 - pressure : null,
    windDir: num(cur.wind_direction_10m),
    wind: num(cur.windNum, 0),
    cloud: num(cur.cloud_cover),
    dewPoint: num(cur.dew_point_2m),
    code: num(cur.weather_code, 0),
    snowDepth: num(cur.snow_depth, 0),
    next3: ahead.slice(0, 3),
    next24: ahead.slice(0, 24),
    next36: ahead.slice(0, 36),
    next48: ahead.slice(0, 48),
    night,
    todayHours: hourly.filter((h) => dateOf(h) === today),
    tomorrowHours: hourly.filter((h) => dateOf(h) === tomorrow),
    todayDay: day(today),
    tomorrowDay: day(tomorrow),
    day,
  };
};

const WINTER = [11, 12, 1, 2, 3];
const COLD_HALF = [10, 11, 12, 1, 2, 3];
const WARM_HALF = [4, 5, 6, 7, 8, 9];
const SUMMER = [5, 6, 7, 8, 9];

const snowingSoon = (c) => SNOW_CODES.includes(c.code) || c.next3.some((h) => SNOW_CODES.includes(h.weather_code));

/**
 * Прикмети за погодою. predicts — що обіцяє народ на найближчу добу-півтори:
 * warmer, colder, rain, dry, snow, thaw, frost, storm, clear.
 */
export const WEATHER_SIGNS = [
  {
    id: "smokeDown",
    predicts: "rain",
    check: (c) =>
      c.pressure !== null &&
      ((c.pressure <= 1008 && (c.pressureTrend6h ?? 0) <= -1) || (c.pressure <= 1010 && (c.humidity ?? 0) >= 85)),
  },
  {
    id: "smokeUp",
    predicts: "dry",
    check: (c) => c.pressure !== null && c.pressure >= 1020 && c.wind <= 3 && (c.humidity ?? 100) < 80,
  },
  {
    id: "southWind",
    months: WINTER,
    predicts: "thaw",
    check: (c) => c.temp !== null && c.temp <= 1 && c.windDir !== null && isSouthWind(c.windDir) && c.wind >= 3,
  },
  {
    id: "northWind",
    predicts: "colder",
    check: (c) => c.windDir !== null && isNorthWind(c.windDir) && c.wind >= 4,
  },
  {
    id: "starryFrost",
    months: WINTER,
    predicts: "clear",
    check: (c) => {
      if (c.night.length < 4) return false;
      const cloud = avg(c.night.map((h) => num(h.cloud_cover, 100)));
      const min = Math.min(...c.night.map((h) => num(h.tempNum, 99)));
      return cloud <= 30 && min <= -3;
    },
  },
  {
    id: "cloudyNight",
    months: WINTER,
    predicts: "warmer",
    check: (c) => {
      if (c.night.length < 4) return false;
      const cloud = avg(c.night.map((h) => num(h.cloud_cover, 0)));
      const min = Math.min(...c.night.map((h) => num(h.tempNum, 99)));
      return cloud >= 85 && min <= 0;
    },
  },
  {
    id: "bigFlakes",
    months: COLD_HALF,
    predicts: "thaw",
    check: (c) => snowingSoon(c) && c.temp !== null && c.temp >= -2 && c.temp <= 1,
  },
  {
    id: "fineSnow",
    months: COLD_HALF,
    predicts: "colder",
    check: (c) => snowingSoon(c) && c.temp !== null && c.temp <= -7,
  },
  {
    id: "rime",
    months: COLD_HALF,
    predicts: "clear",
    check: (c) => c.temp !== null && c.temp <= -2 && (c.humidity ?? 0) >= 85 && (c.cloud ?? 100) <= 40,
  },
  {
    id: "frostCalm",
    months: WINTER,
    predicts: "clear",
    check: (c) => c.temp !== null && c.temp <= -10 && c.wind <= 2,
  },
  {
    id: "fog",
    predicts: "dry",
    check: (c) =>
      (FOG_CODES.includes(c.code) || c.next3.some((h) => FOG_CODES.includes(h.weather_code))) &&
      (c.pressure ?? 0) >= 1012,
  },
  {
    id: "stuffy",
    months: SUMMER,
    predicts: "storm",
    check: (c) => c.temp !== null && c.temp >= 27 && (c.dewPoint ?? 0) >= 17,
  },
  {
    id: "swallows",
    months: WARM_HALF,
    predicts: "rain",
    check: (c) => (c.humidity ?? 0) >= 80 && c.pressure !== null && c.pressure <= 1008 && (c.temp ?? 0) >= 8,
  },
];

const frosty = (c) => c.temp !== null && c.temp <= 0;
const dayPrecip = (d) => num(d?.precipitation_sum, 0) >= 0.5;
const dayFrost = (d) => num(d?.temp_night, 99) <= 0;

/**
 * Народний календар. На свято показуємо прикмету за погодою цього дня.
 * predicts: "far" — далека перспектива (не перевірити), "compare" — порівняти з днем compareWith.
 */
export const CALENDAR_SIGNS = [
  { id: "pokrovaCold", date: "10-01", predicts: "far", check: (c) => frosty(c) || snowingSoon(c) },
  { id: "pokrovaWarm", date: "10-01", predicts: "far", check: (c) => !(frosty(c) || snowingSoon(c)) },
  {
    id: "mykhailaFog",
    date: "11-08",
    predicts: "thaw",
    check: (c) => FOG_CODES.includes(c.code) || (c.humidity ?? 0) >= 95,
  },
  { id: "vvedenniaFrost", date: "11-21", predicts: "far", check: (c) => frosty(c) },
  { id: "vvedenniaWarm", date: "11-21", predicts: "far", check: (c) => !frosty(c) },
  { id: "katerynyCompare", date: "11-24", predicts: "compare", compareWith: "12-06", check: () => true },
  { id: "andriiaSnow", date: "11-30", predicts: "far", check: (c) => snowingSoon(c) || c.snowDepth > 0 },
  { id: "mykolaiaSnow", date: "12-06", predicts: "far", check: (c) => snowingSoon(c) || c.snowDepth > 0 },
  { id: "rizdvoWarm", date: "12-25", predicts: "far", check: (c) => c.temp !== null && c.temp > 0 },
  { id: "rizdvoFrost", date: "12-25", predicts: "far", check: (c) => c.temp !== null && c.temp <= -5 },
  {
    id: "vodokhreshcheClear",
    date: "01-06",
    predicts: "far",
    check: (c) => c.temp !== null && c.temp <= -3 && (c.cloud ?? 100) <= 40,
  },
  { id: "vodokhreshcheSnow", date: "01-06", predicts: "far", check: (c) => snowingSoon(c) },
  { id: "stritenniaWarm", date: "02-02", predicts: "far", check: (c) => c.temp !== null && c.temp > 0 },
  { id: "stritenniaCold", date: "02-02", predicts: "far", check: (c) => c.temp !== null && c.temp <= 0 },
  { id: "blahovishchennia", date: "03-25", predicts: "far", check: () => true },
];

/**
 * Звірити народний прогноз із моделями.
 * Повертає { verdict: "agree" | "disagree" | "neutral" | "far", detail: { kind, ...числа } }.
 * Температури в °C — у компоненті переводяться в одиниці користувача.
 */
export const verifyPrediction = (predicts, c, sign = null) => {
  if (predicts === "far") return { verdict: "far", detail: null };

  if (predicts === "compare") {
    const year = c.today.slice(0, 4);
    let target = `${year}-${sign.compareWith}`;
    if (target < c.today) target = `${Number(year) + 1}-${sign.compareWith}`;
    const d = c.day(target);
    const t = c.todayDay;
    if (!d || !t) return { verdict: "far", detail: null };
    const same = dayPrecip(d) === dayPrecip(t) && dayFrost(d) === dayFrost(t);
    return {
      verdict: same ? "agree" : "disagree",
      detail: { kind: "compare", date: target, desc: d.description || "", max: num(d.temp_day), min: num(d.temp_night) },
    };
  }

  if (predicts === "warmer" || predicts === "colder") {
    const mean = (d, hours) => {
      const hs = hours.map((h) => num(h.tempNum)).filter((x) => x !== null);
      if (hs.length >= 12) return avg(hs);
      const mx = num(d?.temp_day);
      const mn = num(d?.temp_night);
      return mx !== null && mn !== null ? (mx + mn) / 2 : null;
    };
    const a = mean(c.todayDay, c.todayHours.length >= 12 ? c.todayHours : []);
    const b = mean(c.tomorrowDay, c.tomorrowHours);
    if (a === null || b === null) return { verdict: "neutral", detail: null };
    const delta = Math.round((b - a) * 10) / 10;
    const signed = predicts === "warmer" ? delta : -delta;
    return {
      verdict: signed >= 1 ? "agree" : signed <= -1 ? "disagree" : "neutral",
      detail: { kind: "temp", delta },
    };
  }

  if (predicts === "rain" || predicts === "dry") {
    const mm = Math.round(c.next24.reduce((s, h) => s + num(h.precipitation, 0), 0) * 10) / 10;
    const rainyHours = c.next24.filter((h) => RAIN_CODES.includes(h.weather_code) || SNOW_CODES.includes(h.weather_code)).length;
    const prob = Math.max(0, ...c.next24.map((h) => num(h.precipitation_probability, 0)));
    const wet = mm >= 0.5 || (rainyHours >= 2 && prob >= 60);
    const dry = mm < 0.2 && prob < 40;
    const rainVerdict = wet ? "agree" : dry ? "disagree" : "neutral";
    const verdict = predicts === "rain" ? rainVerdict : rainVerdict === "agree" ? "disagree" : rainVerdict === "disagree" ? "agree" : "neutral";
    return { verdict, detail: { kind: "precip", mm, prob: Math.round(prob) } };
  }

  if (predicts === "snow") {
    const n = c.next36.filter((h) => SNOW_CODES.includes(h.weather_code)).length;
    const warm = c.next36.every((h) => num(h.tempNum, 0) > 2);
    return { verdict: n > 0 ? "agree" : warm ? "disagree" : "neutral", detail: { kind: "snow", n } };
  }

  if (predicts === "thaw" || predicts === "frost") {
    const ts = c.next48.map((h) => num(h.tempNum)).filter((x) => x !== null);
    if (!ts.length) return { verdict: "neutral", detail: null };
    const min = Math.min(...ts);
    const max = Math.max(...ts);
    const verdict =
      predicts === "thaw"
        ? max > 0 ? "agree" : max <= -2 ? "disagree" : "neutral"
        : min <= -3 ? "agree" : min >= 0 ? "disagree" : "neutral";
    return { verdict, detail: { kind: "range", min, max } };
  }

  if (predicts === "storm") {
    const n = c.next36.filter((h) => STORM_CODES.includes(h.weather_code)).length;
    const gust = Math.max(0, ...c.next36.map((h) => num(h.wind_gusts_10m, 0)));
    return {
      verdict: n > 0 || gust >= 17 ? "agree" : gust < 10 ? "disagree" : "neutral",
      detail: { kind: "storm", n, gust: Math.round(gust * 10) / 10 },
    };
  }

  if (predicts === "clear") {
    const dayHours = c.tomorrowHours.filter((h) => hourOf(h) >= 9 && hourOf(h) <= 17);
    const cc = avg(dayHours.map((h) => num(h.cloud_cover)).filter((x) => x !== null));
    if (cc === null) return { verdict: "neutral", detail: null };
    return {
      verdict: cc <= 40 ? "agree" : cc >= 75 ? "disagree" : "neutral",
      detail: { kind: "cloud", c: Math.round(cc) },
    };
  }

  return { verdict: "neutral", detail: null };
};

/**
 * Прикмети, що спрацювали сьогодні: спершу свято з народного календаря, далі погодні.
 * Однакові передбачення не повторюємо (дим і ластівки разом — це один «дощ»).
 */
export const getFolkSigns = (card, nowKey, { limit = 3 } = {}) => {
  const c = buildFolkContext(card, nowKey);
  if (!c) return { calendar: [], weather: [], checked: 0, today: null };

  const calendar = CALENDAR_SIGNS.filter((s) => s.date === c.mmdd && s.check(c)).map((s) => ({
    id: s.id,
    type: "calendar",
    predicts: s.predicts,
    ...verifyPrediction(s.predicts, c, s),
  }));

  const seen = new Set();
  const weather = [];
  const applicable = WEATHER_SIGNS.filter((s) => !s.months || s.months.includes(c.month));
  for (const s of applicable) {
    if (weather.length + calendar.length >= limit) break;
    if (seen.has(s.predicts) || !s.check(c)) continue;
    seen.add(s.predicts);
    weather.push({ id: s.id, type: "weather", predicts: s.predicts, ...verifyPrediction(s.predicts, c, s) });
  }

  return { calendar, weather, checked: applicable.length, today: c.today };
};
