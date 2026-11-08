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

/** Будь-яке рядкове налаштування з prefsStore як React-стан. */
export const usePrefValue = (key, fallback = null) =>
  useSyncExternalStore(
    subscribePrefs,
    () => getPref(key) ?? fallback,
    () => fallback,
  );
