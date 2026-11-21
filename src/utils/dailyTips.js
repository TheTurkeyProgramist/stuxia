// Зимові підказки з погодинного прогнозу картки: ожеледиця вранці, сніг на машині.
// Чисті функції без i18n — тексти підставляє компонент DailyTips.
// Години — локальні для міста: fullTime виду "2026-11-21T07:00", «зараз» передаємо ключем "2026-11-21T16".

const FREEZING_RAIN_CODES = [56, 57, 66, 67];
const SNOW_CODES = [71, 73, 75, 77, 85, 86];

export const localNowKey = (utcOffsetSeconds, now = Date.now()) => {
  const offset = Number.isFinite(utcOffsetSeconds) ? utcOffsetSeconds : -new Date(now).getTimezoneOffset() * 60;
  return new Date(now + offset * 1000).toISOString().slice(0, 13);
};

const addDay = (dateStr) => new Date(Date.parse(`${dateStr}T00:00:00Z`) + 86400000).toISOString().slice(0, 10);
const hourOf = (h) => Number(String(h.fullTime).slice(11, 13));
const dateOf = (h) => String(h.fullTime).slice(0, 10);
const num = (v, d = null) => (Number.isFinite(Number(v)) && v !== null && v !== "" ? Number(v) : d);

/**
 * Ожеледиця вранці (до 10:00 найближчого ранку).
 * likely — крижаний дощ або мокра поверхня + мороз (особливо після відлиги);
 * possible — температура біля нуля при вологості/опадах до того.
 * Це евристика: температура в годинних даних — повітря на 2 м, а не поверхні дороги.
 */
export const iceRiskMorning = (hourly, nowKey) => {
  if (!Array.isArray(hourly) || !nowKey) return null;
  const today = nowKey.slice(0, 10);
  const nowHour = Number(nowKey.slice(11, 13));
  const targetDate = nowHour < 10 ? today : addDay(today);
  const window = hourly.filter((h) => dateOf(h) === targetDate && hourOf(h) <= 9 && String(h.fullTime).slice(0, 13) >= nowKey);
  if (!window.length) return null;

  const startIdx = hourly.indexOf(window[0]);
  const before = hourly.slice(Math.max(0, startIdx - 12), startIdx);
  const span = [...before, ...window];

  const temps = window.map((h) => num(h.tempNum, num(h.temp))).filter((t) => t !== null);
  if (!temps.length) return null;
  const minTemp = Math.min(...temps);
  const maxBefore = Math.max(...before.map((h) => num(h.tempNum, -99)), -99);
  const soilMin = Math.min(...window.map((h) => num(h.soil_temperature_0cm, 99)), 99);

  const freezingRain = span.some((h) => FREEZING_RAIN_CODES.includes(h.weather_code));
  const wetBefore = span.reduce((s, h) => s + num(h.precipitation, 0), 0) >= 0.2;
  const humid = window.some((h) => num(h.relative_humidity_2m, 0) >= 85);

  let level = "no";
  if (freezingRain || (wetBefore && minTemp <= 0 && (maxBefore >= 1 || minTemp >= -3))) level = "likely";
  else if ((minTemp <= 1 && minTemp >= -5 && (humid || wetBefore)) || (soilMin <= 0 && minTemp <= 2 && wetBefore)) level = "possible";

  return { level, minTemp, now: nowHour < 10 };
};

/**
 * Чи чистити машину від снігу: сніг у найближчі 14 годин.
 * Кількість: 1 мм опадів у снігових годинах ≈ 1 см снігу (щільність ~100 кг/м³),
 * або приріст снігового покриву — що більше.
 * frost — снігу немає, але вранці мороз при вологому ясному небі (іній на склі).
 */
export const carSnowTip = (hourly, current, nowKey) => {
  if (!Array.isArray(hourly) || !nowKey) return null;
  const from = hourly.findIndex((h) => String(h.fullTime).slice(0, 13) >= nowKey);
  if (from === -1) return null;
  const horizon = hourly.slice(from, from + 14);
  if (!horizon.length) return null;

  const snowy = horizon.filter((h) => SNOW_CODES.includes(h.weather_code) || (num(h.precipitation, 0) > 0 && num(h.tempNum, 5) <= 0 && ![56, 57, 66, 67].includes(h.weather_code) && h.weather_code >= 51));
  const precipCm = snowy.reduce((s, h) => s + num(h.precipitation, 0), 0);
  const depthNow = num(current?.snow_depth, 0);
  const depthGainCm = Math.max(0, Math.max(...horizon.map((h) => num(h.snow_depth, 0))) - depthNow) * 100;
  const cm = Math.round(Math.max(precipCm, depthGainCm) * 10) / 10;

  if (snowy.length && cm >= 0.5) {
    return { verdict: "yes", cm, until: snowy[snowy.length - 1].time };
  }
  const frost = horizon.some(
    (h) => hourOf(h) >= 4 && hourOf(h) <= 9 && num(h.tempNum, 5) <= 0 && num(h.relative_humidity_2m, 0) >= 80 && num(h.cloud_cover, 100) <= 60,
  );
  return { verdict: frost ? "frost" : "no", cm: 0, until: null };
};
