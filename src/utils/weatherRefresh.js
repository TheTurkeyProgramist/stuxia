import i18n from "../i18n/i18n.js";
// Як часто й наскільки повно оновлювати картки погоди — щоб не їсти квоту Open-Meteo.
//
// Open-Meteo рахує «виклики» за кількістю змінних (×моделі), а не за кількістю годин:
// max(1, змінні/10 × max(1, дні/14)) на кожне місце. Виміряно X-RateLimit-Cost (17.11.2026):
//   повне оновлення: основний прогноз 3,64 + консенсус 7 моделей 5,6 = 9,24;
//   легке (лише блок `current`): 1,0.
// Моделі оновлюються раз на 3–6 год, тож щогодини повністю перекачувати прогноз немає сенсу:
// раз на FULL_REFRESH_MS — повне, між ними щогодини — легке «зараз».
// І лише для карток, які людина бачить (активна в каруселі + коротка погода під пошуком);
// решта оновлюється, коли до неї догортають.

// 2:55, а не рівно 3 год: щогодинний таймер на третій годині має вже вважати дані старими
export const FULL_REFRESH_MS = 3 * 60 * 60 * 1000 - 5 * 60 * 1000;
// 55 хв: на межі години (таймер) дані віком 59:59 мають оновитися
export const LIGHT_REFRESH_MS = 55 * 60 * 1000;
// Не смикати ту саму картку частіше (поки йде запит або після помилки)
export const REFRESH_RETRY_MS = 2 * 60 * 1000;

// 9 змінних, 1 доба → вага 1,0 (мінімальна)
export const LIGHT_CURRENT_VARS = [
  "temperature_2m",
  "relative_humidity_2m",
  "apparent_temperature",
  "weather_code",
  "wind_speed_10m",
  "wind_direction_10m",
  "wind_gusts_10m",
  "cloud_cover",
  "is_day",
];

export const buildLightCurrentUrl = (lat, lon) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
  `&current=${LIGHT_CURRENT_VARS.join(",")}&wind_speed_unit=ms&timezone=auto&forecast_days=1`;

/** «Вчора» в часовому поясі міста (перший день картки — завжди вчора, past_days=1). */
export const cityYesterday = (card, now = Date.now()) => {
  const offset = Number.isFinite(card?.utcOffsetSeconds) ? card.utcOffsetSeconds : null;
  if (offset === null) {
    const d = new Date(now - 86400000);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  return new Date(now + offset * 1000 - 86400000).toISOString().slice(0, 10);
};

/**
 * Що робити з карткою зараз: "full" — повний прогноз, "light" — лише «зараз», null — нічого.
 * Повне — якщо даних немає, вони старші за FULL_REFRESH_MS, настала нова доба в місті
 * або картку збережено ще з вітром у км/год.
 */
export const pickRefreshKind = (card, now = Date.now()) => {
  if (!card) return null;
  const fetchedAt = Number(card.fetchedAt) || 0;
  if (!card.current || !fetchedAt || now - fetchedAt >= FULL_REFRESH_MS) return "full";
  if (card.windUnit !== "ms") return "full";
  const firstDay = card.daily16?.[0]?.fullDate;
  if (firstDay && firstDay !== cityYesterday(card, now)) return "full";
  const updatedAt = Math.max(fetchedAt, Number(card.updatedAt) || 0);
  if (now - updatedAt >= LIGHT_REFRESH_MS) return "light";
  return null;
};

const isNum = (v) => typeof v === "number" && Number.isFinite(v);

// Повільні величини «зараз» беремо з погодинного прогнозу картки на поточну годину
const SLOW_FROM_HOURLY = [
  "visibility",
  "dew_point_2m",
  "snow_depth",
  "evapotranspiration",
  "freezing_level_height",
  "soil_temperature_0cm",
];

/**
 * Нова картка після легкого оновлення: свіжі «зараз» з Open-Meteo (уже змішані з консенсусом),
 * повільні величини — з погодинного прогнозу картки на цю годину. Прогноз на години й дні
 * не чіпаємо. `decorate(code, isDay)` додає іконки й опис (вони живуть у App.jsx).
 * Нічого не мутує.
 */
export const applyLightCurrent = (card, current, { now = Date.now(), tempSpread, decorate } = {}) => {
  if (!card?.current || !current || !isNum(current.temperature_2m)) return card;
  const hourKey = `${String(current.time || "").slice(0, 13)}:00`;
  const hour = (card.hourly || []).find((h) => h?.fullTime === hourKey);
  const prev = card.current;
  const next = {
    ...prev,
    temp: `${Math.round(current.temperature_2m)}°C`,
    tempNum: Math.round(current.temperature_2m),
    feels_like: isNum(current.apparent_temperature) ? `${Math.round(current.apparent_temperature)}°C` : prev.feels_like,
    humidity: isNum(current.relative_humidity_2m) ? `${current.relative_humidity_2m}%` : prev.humidity,
    wind_speed: i18n.t("newsWeather.weatherRefresh.mS", { v0: current.wind_speed_10m ?? 0 }),
    windNum: current.wind_speed_10m ?? 0,
    wind_direction_10m: current.wind_direction_10m ?? prev.wind_direction_10m,
    wind_gusts_10m: current.wind_gusts_10m ?? prev.wind_gusts_10m,
    cloud_cover: current.cloud_cover ?? prev.cloud_cover,
    weather_code: current.weather_code ?? prev.weather_code,
    is_day: current.is_day ?? prev.is_day,
    description: i18n.t("newsWeather.weatherRefresh.zaKodom", { v0: current.weather_code ?? prev.weather_code }),
  };
  if (hour) {
    SLOW_FROM_HOURLY.forEach((key) => {
      if (hour[key] != null) next[key] = hour[key];
    });
    if (isNum(hour.pressure_msl)) next.pressure = `${Math.round(hour.pressure_msl)} hPa`;
  }
  if (typeof decorate === "function") Object.assign(next, decorate(next.weather_code, next.is_day));
  return {
    ...card,
    current: next,
    updatedAt: now,
    accuracy:
      card.accuracy && tempSpread !== undefined ? { ...card.accuracy, tempSpread } : card.accuracy,
  };
};
