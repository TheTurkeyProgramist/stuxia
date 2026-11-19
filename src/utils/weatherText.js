// Підписи погоди за кодом WMO і дати мовою сайту.
// Дані картки зберігаються з кодом погоди та ISO-датою, тож підписи можна перебудувати
// будь-коли (наприклад, після зміни мови) — див. relocalizeCard.
import i18n from "../i18n/i18n.js";

let forcedLng = null;
const t = (key) => i18n.t(`weatherText.${key}`, forcedLng ? { lng: forcedLng } : undefined);

// Опис конкретною мовою (наприклад, українською для українських голосів озвучення)
export const getWeatherSummaryTextIn = (lng, code, isDay = 1) => {
  forcedLng = lng;
  try {
    return getWeatherSummaryText(code, isDay);
  } finally {
    forcedLng = null;
  }
};

// Мова для Intl: "uk", "en"… Невідому мову Intl сам замінить найближчою.
export const dateLocale = () => String(i18n.language || "uk").split("-")[0];

export const getWeatherSummaryText = (code, isDay = 1) => {
  if (code === 0) return isDay ? t("sunny") : t("moonlit");
  if (code >= 1 && code <= 3) return isDay ? t("partlyCloudy") : t("partlyCloudyNight");
  if (code >= 45 && code <= 48) return t("foggy");
  if (code >= 51 && code <= 55) return t("drizzle");
  if (code >= 56 && code <= 57) return t("freezingDrizzle");
  if (code >= 61 && code <= 65) return t("rain");
  if (code >= 66 && code <= 67) return t("freezingRain");
  if (code >= 71 && code <= 75) return t("snow");
  if (code === 77) return t("snowGrains");
  if (code >= 80 && code <= 82) return t("rainShowers");
  if (code >= 85 && code <= 86) return t("snowShowers");
  if (code >= 95 && code <= 99) return t("thunderstorm");
  return t("cloudy");
};

// Підпис з емодзі для іконки ("🌤️ Мінлива хмарність")
export const getWeatherIcon = (code, isDay = 1) => {
  if (code === 0) return isDay ? `☀️ ${t("sunny")}` : `🌙 ${t("moonlit")}`;
  if (code >= 1 && code <= 3) return `${isDay ? "🌤️" : "☁️"} ${t("partlyCloudy")}`;
  if (code >= 45 && code <= 48) return `☁️ ${t("fog")}`;
  if (code >= 51 && code <= 55) return `🌧️ ${t("drizzle")}`;
  if (code >= 56 && code <= 57) return `🌧️ ${t("freezingDrizzle")}`;
  if (code >= 61 && code <= 65) return `🌧️ ${t("rain")}`;
  if (code >= 66 && code <= 67) return `🌧️ ${t("freezingRain")}`;
  if (code >= 71 && code <= 75) return `❄️ ${t("snowfall")}`;
  if (code === 77) return `❄️ ${t("snowGrains")}`;
  if (code >= 80 && code <= 82) return `🌦️ ${t("rainShowers")}`;
  if (code >= 85 && code <= 86) return `❄️ ${t("snowShowers")}`;
  if (code >= 95 && code <= 99) return `⛈️ ${t("thunderstorm")}`;
  return `☁️ ${t("cloudy")}`;
};

// Опади/сніг за кодом — для логіки, що не залежить від мови
export const isSnowCode = (code) => (code >= 71 && code <= 77) || code === 85 || code === 86;
export const isRainCode = (code) =>
  (code >= 51 && code <= 67) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99);

// ISO "YYYY-MM-DD" → Date опівдні (щоб часовий пояс не зсунув день)
const isoNoon = (iso) => new Date(`${String(iso).slice(0, 10)}T12:00:00`);

export const formatShortDate = (iso) =>
  isoNoon(iso).toLocaleDateString(dateLocale(), { day: "numeric", month: "2-digit" });
export const formatWeekdayShort = (iso) =>
  isoNoon(iso).toLocaleDateString(dateLocale(), { weekday: "short" });
export const formatDayMonth = (date) =>
  date.toLocaleDateString(dateLocale(), { day: "2-digit", month: "2-digit" });

// Вихідний за датою (сб/нд), незалежно від мови підпису
export const isWeekendIso = (iso) => {
  if (!iso) return false;
  const day = isoNoon(iso).getDay();
  return day === 0 || day === 6;
};

// "DD.MM" з ISO-дати — ключ для свят і днів народження
export const ddmmFromIso = (iso) => {
  if (!iso) return null;
  const [, m, d] = String(iso).slice(0, 10).split("-");
  return m && d ? `${d}.${m}` : null;
};

const relocalizeItem = (item) => {
  if (!item || typeof item !== "object") return item;
  const next = { ...item };
  if (item.weather_code !== undefined && item.weather_code !== null) {
    const isDay = item.is_day ?? 1;
    if (item.iconPlaceholder !== undefined) next.iconPlaceholder = getWeatherIcon(item.weather_code, isDay);
    if (item.description !== undefined) {
      // «За кодом: 3» у поточній погоді лишається підписом із кодом
      next.description = /\d+\s*$/.test(item.description || "")
        ? i18n.t("newsWeather.weatherRefresh.zaKodom", { v0: item.weather_code })
        : getWeatherSummaryText(item.weather_code, isDay);
    }
  }
  if (item.fullDate && /^\d{4}-\d{2}-\d{2}/.test(item.fullDate)) {
    if (item.date !== undefined) next.date = formatShortDate(item.fullDate);
    if (item.day !== undefined) next.day = formatWeekdayShort(item.fullDate);
  }
  if (item.fullTime && item.dateLabel !== undefined) {
    next.dateLabel = formatDayMonth(new Date(item.fullTime));
  }
  return next;
};

// Перебудувати всі підписи картки поточною мовою
export const relocalizeCard = (card) => {
  if (!card || typeof card !== "object") return card;
  return {
    ...card,
    current: card.current ? relocalizeItem(card.current) : card.current,
    hourly: Array.isArray(card.hourly) ? card.hourly.map(relocalizeItem) : card.hourly,
    daily16: Array.isArray(card.daily16) ? card.daily16.map(relocalizeItem) : card.daily16,
    seasonal: Array.isArray(card.seasonal) ? card.seasonal.map(relocalizeItem) : card.seasonal,
  };
};
