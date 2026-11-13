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
