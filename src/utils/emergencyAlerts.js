import localforage from "localforage";
import { getPref, setPref } from "./prefsStore.js";

import i18n from "../i18n/i18n.js";
// Екстрені сповіщення: пауза між ними, ліміт на добу та попередження про небезпечну погоду.
// Ті самі пороги й правила повторює сервер (firebase-functions/index.js) — тримайте синхронно.

const readJson = (key, fallback) => {
  try {
    const raw = getPref(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

// ───────────── Пауза й ліміт ─────────────

export const ALERT_PAUSE_OPTIONS = [30, 60, 120, 240, 480]; // хвилин
export const ALERT_PAUSE_DEFAULT = 120;
export const ALERT_DAILY_MIN = 1;
export const ALERT_DAILY_MAX = 20;
export const ALERT_DAILY_DEFAULT = 5;

const PAUSE_KEY = "alerts_pause_minutes";
const DAILY_KEY = "alerts_daily_limit";
const WEATHER_ENABLED_KEY = "weather_alerts_enabled";
const WEATHER_OFF_CARDS_KEY = "weather_alerts_off_cards";

export const getAlertPause = () => {
  const n = Number(getPref(PAUSE_KEY));
  return ALERT_PAUSE_OPTIONS.includes(n) ? n : ALERT_PAUSE_DEFAULT;
};
export const setAlertPause = (minutes) => setPref(PAUSE_KEY, String(minutes));

export const getAlertDailyLimit = () => {
  const n = Number(getPref(DAILY_KEY));
  return Number.isInteger(n) && n >= ALERT_DAILY_MIN && n <= ALERT_DAILY_MAX
    ? n
    : ALERT_DAILY_DEFAULT;
};
export const setAlertDailyLimit = (n) =>
  setPref(DAILY_KEY, String(Math.min(ALERT_DAILY_MAX, Math.max(ALERT_DAILY_MIN, Math.round(n)))));

// ───────────── Небезпечна погода: загальний перемикач і окремі картки ─────────────

export const isWeatherAlertsEnabled = () => getPref(WEATHER_ENABLED_KEY) === "true";
export const setWeatherAlertsEnabled = (enabled) =>
  setPref(WEATHER_ENABLED_KEY, enabled ? "true" : "false");

const getOffCards = () => {
  const saved = readJson(WEATHER_OFF_CARDS_KEY, []);
  return Array.isArray(saved) ? saved.map(String) : [];
};
/** Для кожної картки сповіщення увімкнені, доки їх не вимкнули в її меню. */
export const isCardWeatherAlertsOn = (cardId) => !getOffCards().includes(String(cardId));
export const setCardWeatherAlerts = (cardId, on) => {
  const id = String(cardId);
  const rest = getOffCards().filter((x) => x !== id);
  setPref(WEATHER_OFF_CARDS_KEY, JSON.stringify(on ? rest : [...rest, id]));
};

// ───────────── Ранковий прогноз о 7:00 (лише push: сайт о сьомій ранку зазвичай закритий) ─────────────

export const MORNING_BRIEF_HOUR = 7;
export const MORNING_ENABLED_KEY = "morning_brief_enabled";
// Картка, для якої рахувати зведення; не обрано або її видалили — перша картка в списку
export const MORNING_CARD_KEY = "morning_brief_card";

export const isMorningBriefEnabled = () => getPref(MORNING_ENABLED_KEY) === "true";
export const setMorningBriefEnabled = (enabled) =>
  setPref(MORNING_ENABLED_KEY, enabled ? "true" : "false");
export const getMorningCardId = () => getPref(MORNING_CARD_KEY) || "";
export const setMorningCardId = (cardId) => setPref(MORNING_CARD_KEY, String(cardId));

// Зміна цих налаштувань має оновити профіль push на сервері
export const ALERT_PREF_KEYS = new Set([
  PAUSE_KEY,
  DAILY_KEY,
  WEATHER_ENABLED_KEY,
  WEATHER_OFF_CARDS_KEY,
  MORNING_ENABLED_KEY,
  MORNING_CARD_KEY,
]);

// ───────────── Небезпечні явища ─────────────

export const WEATHER_ALERT_HOURS = 6;
export const GUST_STORM_MS = 20; // штормовий вітер
export const GUST_HURRICANE_MS = 32.7; // ураганний вітер (12 балів Бофорта)

// Коди WMO з Open-Meteo → явище. Порядок — від найнебезпечнішого
const CODE_HAZARDS = [
  { type: "hail", get label() { return i18n.t("ui.emergencyAlerts.hrozaZHradom"); }, codes: [96, 99] },
  { type: "thunder", get label() { return i18n.t("ui.emergencyAlerts.hroza"); }, codes: [95] },
  { type: "ice", get label() { return i18n.t("ui.emergencyAlerts.kryzhanyiDoshchOzheled"); }, codes: [66, 67] },
  { type: "snow", get label() { return i18n.t("ui.emergencyAlerts.sylnyiSnihopad"); }, codes: [75, 86] },
  { type: "rain", get label() { return i18n.t("ui.emergencyAlerts.sylnaZlyva"); }, codes: [65, 82] },
];

/**
 * Небезпечні явища в найближчі WEATHER_ALERT_HOURS годин.
 * hourly — відповідь Open-Meteo (time, weather_code, wind_gusts_10m у м/с),
 * utcOffsetSeconds — зсув часового поясу з тієї ж відповіді.
 */
export const detectWeatherHazards = (hourly, utcOffsetSeconds = 0, now = Date.now()) => {
  const times = hourly?.time || [];
  const codes = hourly?.weather_code || [];
  const gusts = hourly?.wind_gusts_10m || [];
  const from = now - 60 * 60 * 1000; // поточна година теж рахується
  const to = now + WEATHER_ALERT_HOURS * 60 * 60 * 1000;
  const found = new Map();
  let maxGust = 0;

  times.forEach((t, i) => {
    // Час без поясу ("2026-11-10T14:00") — місцевий для точки; переводимо в UTC
    const at = Date.parse(`${t}Z`) - utcOffsetSeconds * 1000;
    if (Number.isNaN(at) || at < from || at > to) return;
    const hazard = CODE_HAZARDS.find((h) => h.codes.includes(codes[i]));
    if (hazard && !found.has(hazard.type)) found.set(hazard.type, { ...hazard, at });
    const gust = Number(gusts[i]) || 0;
    if (gust > maxGust) maxGust = gust;
  });

  if (maxGust >= GUST_HURRICANE_MS) {
    found.set("hurricane", { type: "hurricane", label: i18n.t("ui.emergencyAlerts.urahannyiViterPoryvyDo", { Math: Math.round(maxGust) }) });
  } else if (maxGust >= GUST_STORM_MS) {
    found.set("storm", { type: "storm", label: i18n.t("ui.emergencyAlerts.shtormovyiViterPoryvyDo", { Math: Math.round(maxGust) }) });
  }
  // Гроза з градом уже містить грозу
  if (found.has("hail")) found.delete("thunder");
  return [...found.values()];
};

/** Текст сповіщення — однаковий на пристрої й на сервері. */
export const formatWeatherAlert = (placeName, hazards) => {
  const labels = hazards.map((h) => h.label);
  const first = labels[0].charAt(0).toUpperCase() + labels[0].slice(1);
  return {
    title: `⚠ ${first} — ${placeName}`.slice(0, 120),
    body: i18n.t("ui.emergencyAlerts.naiblyzhchiHod", { WEATHER_ALERT_HOURS: WEATHER_ALERT_HOURS, labels: labels.join("; ") }),
  };
};

// ───────────── Локальні сповіщення (поки Стихія відкрита) ─────────────

// Журнал сповіщень: { at, kind, via }. via "local" — показала сторінка,
// "push" — прийшло з сервера (записує Service Worker, public/sw-notifications.js).
// Тому пауза й ліміт на добу — спільні для обох шляхів.
const LOG_KEY = "alerts_sent_log";
const WEATHER_SENT_KEY = "weather_alerts_sent"; // { "картка|явище": час }
const WEATHER_REPEAT_MS = 12 * 60 * 60 * 1000; // те саме явище для тієї ж картки — не частіше

// Доба за Києвом — як на сервері, щоб ліміт скидався однаково
export const kyivDayKey = (ms = Date.now()) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Kyiv" }).format(new Date(ms));

const readLog = async () => {
  const log = await localforage.getItem(LOG_KEY).catch(() => null);
  return Array.isArray(log) ? log.filter((e) => e && Number.isFinite(e.at)) : [];
};

/**
 * Чи можна зараз показати ще одне сповіщення на цьому пристрої.
 * Новини чекають паузу; погода — ні (її не можна відкладати), але теж рахується в ліміт.
 */
export const canSendLocalAlert = async (kind) => {
  const log = await readLog();
  const today = kyivDayKey();
  if (log.filter((e) => kyivDayKey(e.at) === today).length >= getAlertDailyLimit()) return false;
  if (kind === "weather") return true;
  const last = Math.max(0, ...log.map((e) => e.at));
  return Date.now() - last >= getAlertPause() * 60 * 1000;
};

export const recordLocalAlert = async (kind) => {
  const log = await readLog();
  const dayAgo = Date.now() - 2 * 24 * 60 * 60 * 1000;
  const next = [...log.filter((e) => e.at > dayAgo), { at: Date.now(), kind, via: "local" }];
  await localforage.setItem(LOG_KEY, next).catch(() => {});
  // Сервер теж має знати про локальні сповіщення, щоб разом не вийти за ліміт
  const today = kyivDayKey();
  const localToday = next.filter((e) => e.via === "local" && kyivDayKey(e.at) === today).length;
  import("./pushNotifications.js")
    .then((m) => m.reportLocalAlerts(localToday))
    .catch(() => {});
};

/** Показ системного сповіщення: на Android `new Notification` не працює — там через Service Worker. */
export const showSystemNotification = async (title, { body, tag, url }) => {
  const registration = await navigator.serviceWorker?.getRegistration?.().catch(() => null);
  const options = { body, icon: "/favicon.ico", tag, data: { url } };
  if (registration?.showNotification) {
    await registration.showNotification(title, options);
    return;
  }
  const notification = new Notification(title, options);
  notification.onclick = () => {
    window.focus();
    if (url) window.open(url, "_blank", "noopener");
    notification.close();
  };
};

/**
 * Перевіряє прогноз картки й сповіщає про небезпечну погоду.
 * skip — коли цю картку вже стереже сервер (push), щоб не дублювати.
 */
export const notifyWeatherHazardsLocal = async ({ cardId, placeName, hourly, utcOffsetSeconds, skip = false }) => {
  if (skip || !isWeatherAlertsEnabled() || !isCardWeatherAlertsOn(cardId)) return;
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted") return;

  const sent = (await localforage.getItem(WEATHER_SENT_KEY).catch(() => null)) || {};
  const now = Date.now();
  const hazards = detectWeatherHazards(hourly, utcOffsetSeconds, now).filter(
    (h) => now - (sent[`${cardId}|${h.type}`] || 0) >= WEATHER_REPEAT_MS,
  );
  if (hazards.length === 0) return;
  if (!(await canSendLocalAlert("weather"))) return;

  const { title, body } = formatWeatherAlert(placeName || i18n.t("ui.emergencyAlerts.vashaLokatsiia"), hazards);
  try {
    await showSystemNotification(title, { body, tag: `weather-${cardId}`, url: "/" });
  } catch (err) {
    console.warn("Не вдалося показати попередження про погоду:", err);
    return;
  }
  hazards.forEach((h) => {
    sent[`${cardId}|${h.type}`] = now;
  });
  // Старі записи прибираємо
  Object.keys(sent).forEach((k) => {
    if (now - sent[k] > WEATHER_REPEAT_MS * 2) delete sent[k];
  });
  await localforage.setItem(WEATHER_SENT_KEY, sent).catch(() => {});
  await recordLocalAlert("weather");
};
