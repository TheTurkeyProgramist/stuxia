import { useSyncExternalStore } from "react";
import { getPref, setPref, subscribePrefs } from "./prefsStore.js";

// Живі шпалери — сцени міст часових поясів як фон Hero.
// Фон зберігається як звичайний src, але з префіксом: "scene:Europe/Kyiv".
// Час доби й пора року налаштовуються окремо для кожного міста
// (зберігаються лише в цьому браузері); за замовчуванням — автоматично.

export const WALLPAPER_PREFIX = "scene:";

export const isWallpaperSrc = (src) => typeof src === "string" && src.startsWith(WALLPAPER_PREFIX);

export const toWallpaperSrc = (timezoneValue) => `${WALLPAPER_PREFIX}${timezoneValue}`;

export const WALLPAPER_TIMES = [
  { value: "auto", label: "Авто — сонце рухається" },
  { value: "morning", label: "Ранок" },
  { value: "day", label: "День" },
  { value: "evening", label: "Вечір" },
  { value: "night", label: "Ніч" },
];

// Весна й літо на малюнках однакові (рідна зелень), тож це один пункт
export const WALLPAPER_SEASONS = [
  { value: "auto", label: "Авто — за датою" },
  { value: "summer", label: "Весна · Літо" },
  { value: "autumn", label: "Осінь" },
  { value: "winter", label: "Зима" },
];

// Анімації сцени: дерева, хвилі, дощ, сніг, пелюстки, рух сонця
export const WALLPAPER_ANIMATIONS = [
  { value: "on", label: "Увімкнено" },
  { value: "off", label: "Вимкнено" },
];

const SETTINGS_KEY = "wallpaper_settings";
const EMPTY = {};

const pick = (options, value, fallback = "auto") =>
  options.some((option) => option.value === value) ? value : fallback;

// Розбираємо JSON лише коли рядок змінився — useSyncExternalStore потребує сталого знімка
let lastRaw = null;
let lastParsed = EMPTY;
const readAll = () => {
  const raw = getPref(SETTINGS_KEY);
  if (raw !== lastRaw) {
    lastRaw = raw;
    try {
      const parsed = raw ? JSON.parse(raw) : EMPTY;
      lastParsed = parsed && typeof parsed === "object" ? parsed : EMPTY;
    } catch {
      lastParsed = EMPTY;
    }
  }
  return lastParsed;
};

/** Налаштування всіх міст: { "Europe/Kyiv": { time, season }, ... } */
export const useWallpaperSettingsMap = () => useSyncExternalStore(subscribePrefs, readAll, () => EMPTY);

/** Налаштування однієї шпалери з перевіркою значень */
export const getWallpaperSettings = (map, id) => ({
  time: pick(WALLPAPER_TIMES, map?.[id]?.time),
  season: pick(WALLPAPER_SEASONS, map?.[id]?.season),
  animations: pick(WALLPAPER_ANIMATIONS, map?.[id]?.animations, "on"),
});

/** Змінює налаштування однієї шпалери або одразу кількох (масив id) */
export const setWallpaperSettings = (ids, patch) => {
  const all = { ...readAll() };
  for (const id of Array.isArray(ids) ? ids : [ids]) {
    all[id] = { ...all[id], ...patch };
  }
  setPref(SETTINGS_KEY, JSON.stringify(all));
};
