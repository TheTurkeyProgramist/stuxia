// Режими «Параметрів»: скільки налаштувань показувати.
// Зрозуміле слово дає сенс («Простий» < «Середній» < «Професійний»), космічна назва — характер.
// Порядок «за вагою»: зоря Бетельгейзе → квазар TON 618 → галактика Андромеда.
//
// Розмітка: елемент із data-level="medium" | "pro" ховається, коли обраний режим легший
// (CSS у MainContent). Без атрибута — «Простий», тобто видно завжди.
// Під час пошуку видно все, а налаштування з «важчого» режиму отримують підказку з кнопкою «Перемкнути».

import { useSyncExternalStore } from "react";
import { getPref, setPref, subscribePrefs } from "../../utils/prefsStore.js";

import i18n from "../../i18n/i18n.js";
// story — коротка «космічна» історія режиму, about — що в ньому є (також підказка на кнопці).
// count — скільки налаштувань видно в режимі разом із легшими (картки верхнього рівня в UserSettingsModal).
// Додали чи прибрали картку — оновіть число.
export const SETTINGS_LEVELS = [
  {
    key: "simple",
    get label() { return i18n.t("modals.settingsLevels.prostyi"); },
    get star() { return i18n.t("modals.settingsLevels.betelheize"); },
    get story() { return i18n.t("modals.settingsLevels.odnaZoriaSkromnoV"); },
    get about() { return i18n.t("modals.settingsLevels.lysheOsnovneChasTema"); },
    count: 19,
    color: "#fb923c",
  },
  {
    key: "medium",
    get label() { return i18n.t("modals.settingsLevels.serednii"); },
    star: "TON 618",
    get story() { return i18n.t("modals.settingsLevels.velykaZoriaZChasom"); },
    get about() { return i18n.t("modals.settingsLevels.shcheNovynySektsiiAktsentnyi"); },
    count: 38,
    color: "#60cdff",
  },
  {
    key: "pro",
    get label() { return i18n.t("modals.settingsLevels.profesiinyi"); },
    get star() { return i18n.t("modals.settingsLevels.andromeda"); },
    get story() { return i18n.t("modals.settingsLevels.halaktykaZoriIChorni"); },
    get about() { return i18n.t("modals.settingsLevels.dekoratorShryftyFonyPravyla"); },
    count: 62,
    color: "#a78bfa",
  },
];

export const SETTINGS_LEVEL_KEY = "settings_level";
export const DEFAULT_SETTINGS_LEVEL = "simple";

/** 0 — Простий, 1 — Середній, 2 — Професійний. Невідомий / порожній рівень = Простий. */
export const levelRank = (key) => Math.max(0, SETTINGS_LEVELS.findIndex((l) => l.key === key));

export const getLevelInfo = (key) => SETTINGS_LEVELS[levelRank(key)];

/** «Простий · Бетельгейзе» */
export const levelFullName = (key) => {
  const { label, star } = getLevelInfo(key);
  return `${label} · ${star}`;
};

export const maxLevel = (a, b) => (levelRank(a) >= levelRank(b) ? a : b);

const readLevel = () => {
  const value = getPref(SETTINGS_LEVEL_KEY);
  return SETTINGS_LEVELS.some((l) => l.key === value) ? value : DEFAULT_SETTINGS_LEVEL;
};

export const setSettingsLevel = (key) => setPref(SETTINGS_LEVEL_KEY, key);

export const useSettingsLevel = () =>
  useSyncExternalStore(subscribePrefs, readLevel, () => DEFAULT_SETTINGS_LEVEL);

// Версія Стихії в назві режиму: «Стихія 1.0 · Простий · Бетельгейзе».
// Змінюйте разом із великим оновленням.
export const STYKHIIA_VERSION = "1.0";

/** «Стихія 1.0 · Простий · Бетельгейзе» */
export const levelReleaseName = (key) => i18n.t("modals.settingsLevels.stykhiia", { STYKHIIA_VERSION: STYKHIIA_VERSION, v1: levelFullName(key) });

/** Чи людина вже обирала режим (інакше при першому відкритті «Параметрів» показуємо вибір). */
export const useSettingsLevelChosen = () =>
  useSyncExternalStore(
    subscribePrefs,
    () => getPref(SETTINGS_LEVEL_KEY) !== null,
    () => true,
  );

// Вкладка «Безпека» (3 картки, режим «Простий») є лише в зареєстрованих
const GUEST_HIDDEN_COUNT = 3;

const pluralSettings = (n) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return i18n.t("modals.settingsLevels.nalashtuvannia");
  return mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? i18n.t("modals.settingsLevels.nalashtuvannia") : i18n.t("modals.settingsLevels.nalashtuvan");
};

/** «43 налаштування» — скільки налаштувань у режимі (для гостя без «Безпеки») */
export const levelCountLabel = (key, isGuest = false) => {
  const n = getLevelInfo(key).count - (isGuest ? GUEST_HIDDEN_COUNT : 0);
  return `${n} ${pluralSettings(n)}`;
};
