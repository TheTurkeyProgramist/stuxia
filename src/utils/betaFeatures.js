import { useSyncExternalStore } from "react";
import { getPref, setPref, subscribePrefs } from "./prefsStore.js";

// Бета-функції: прапорці живуть у prefsStore (цей браузер), читаються синхронно
// й оновлюються в усіх відкритих вкладках.

export const BETA_KEYS = {
  hideGpsCard: "beta_hide_gps_card",
  dragCards: "beta_drag_cards",
  voiceForecast: "beta_voice_forecast",
};

export const isBetaOn = (feature) => getPref(BETA_KEYS[feature]) === "true";

export const setBetaOn = (feature, on) => setPref(BETA_KEYS[feature], on ? "true" : "false");

export const useBeta = (feature) =>
  useSyncExternalStore(subscribePrefs, () => isBetaOn(feature), () => false);

/** Бокова панель міст зліва від карток (планшет/ПК): "true" — схована. */
export const CITY_SIDEBAR_HIDDEN_KEY = "city_sidebar_hidden";

/** Карусель карток погоди: "true" — сховати стрілки ◀ ▶ / номери 1, 2, 3… (окремо). */
export const CAROUSEL_ARROWS_HIDDEN_KEY = "carousel_arrows_hidden";
export const CAROUSEL_NUMBERS_HIDDEN_KEY = "carousel_numbers_hidden";

/** Автоперемикання вкладок картки погоди (Зараз → Годинна → 16 днів → Смарт).
    Значення — рядок "on:30" / "off:30" (увімк./вимк. + секунди, щоб після вимкнення
    пам'ятати частоту). Загальне + необов'язкове своє для кожної картки. */
export const TAB_AUTOPLAY_KEY = "tab_autoplay_seconds";
export const tabAutoplayCardKey = (cardId) => `tab_autoplay_seconds_card_${cardId}`;
// Кроки шкали: від 10 с до 5 хв (довгі — щоб встигнути детально роздивитись вкладку)
export const TAB_AUTOPLAY_STEPS = [10, 15, 20, 30, 45, 60, 90, 120, 180, 240, 300];
// За замовчуванням вимкнено: на сенсорних екранах немає наведення, яке ставить
// на паузу, і вкладка могла перемкнутись посеред читання прогнозу.
export const TAB_AUTOPLAY_DEFAULT = { on: false, seconds: 10 };

const nearestAutoplayStep = (seconds) =>
  TAB_AUTOPLAY_STEPS.reduce((best, s) => (Math.abs(s - seconds) < Math.abs(best - seconds) ? s : best));

/** Рядок із prefsStore → { on, seconds } або null (не задано). Розуміє й старі числа ("0", "7"). */
export const parseTabAutoplay = (raw) => {
  if (raw === null || raw === undefined || raw === "") return null;
  const match = /^(on|off):(\d+)$/.exec(String(raw));
  if (match) return { on: match[1] === "on", seconds: nearestAutoplayStep(Number(match[2])) };
  const n = Number(raw);
  if (!Number.isFinite(n)) return null;
  return n > 0
    ? { on: true, seconds: nearestAutoplayStep(n) }
    : { on: false, seconds: TAB_AUTOPLAY_DEFAULT.seconds };
};

export const serializeTabAutoplay = ({ on, seconds }) => `${on ? "on" : "off"}:${seconds}`;

/** 45 → «45 с», 90 → «1 хв 30 с», 300 → «5 хв» */
export const formatTabAutoplay = (seconds) => {
  const s = Number(seconds) || 0;
  if (s < 60) return `${s} с`;
  const min = Math.floor(s / 60);
  const rest = s % 60;
  return rest ? `${min} хв ${rest} с` : `${min} хв`;
};

/** Блок «Працює на базі» на заставці завантаження: "full" | "icons" | "hidden". */
export const LOADER_POWERED_BY_KEY = "loader_powered_by";

/** Перемикач «true»/«false» налаштування з prefsStore. */
export const togglePrefFlag = (key) =>
  setPref(key, getPref(key) === "true" ? "false" : "true");

/** Будь-яке рядкове налаштування з prefsStore як React-стан. */
export const usePrefValue = (key, fallback = null) =>
  useSyncExternalStore(
    subscribePrefs,
    () => getPref(key) ?? fallback,
    () => fallback,
  );
