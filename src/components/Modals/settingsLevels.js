// Режими «Параметрів»: скільки налаштувань показувати.
// Зрозуміле слово дає сенс («Простий» < «Середній» < «Професійний»), космічна назва — характер.
// Порядок «за вагою»: зоря Бетельгейзе → квазар TON 618 → галактика Андромеда.
//
// Розмітка: елемент із data-level="medium" | "pro" ховається, коли обраний режим легший
// (CSS у MainContent). Без атрибута — «Простий», тобто видно завжди.
// Під час пошуку видно все, а налаштування з «важчого» режиму отримують підказку з кнопкою «Перемкнути».

import { useSyncExternalStore } from "react";
import { getPref, setPref, subscribePrefs } from "../../utils/prefsStore.js";

// story — коротка «космічна» історія режиму, about — що в ньому є (також підказка на кнопці).
// count — скільки налаштувань видно в режимі разом із легшими (картки верхнього рівня в UserSettingsModal).
// Додали чи прибрали картку — оновіть число.
export const SETTINGS_LEVELS = [
  {
    key: "simple",
    label: "Простий",
    star: "Бетельгейзе",
    story: "Одна зоря — скромно в масштабах Всесвіту, зате нічого зайвого. Ідеально для початку.",
    about: "Лише основне: час, тема, анімації, сповіщення.",
    count: 15,
    color: "#fb923c",
  },
  {
    key: "medium",
    label: "Середній",
    star: "TON 618",
    story:
      "Велика зоря з часом стає чорною дірою — так і ви вже набралися досвіду. " +
      "Для тих, хто кілька днів у Стихії й освоїв Бетельгейзе: почувайтеся як удома.",
    about: "Ще новини, секції, акцентний колір, фільтри та музика.",
    count: 33,
    color: "#60cdff",
  },
  {
    key: "pro",
    label: "Професійний",
    star: "Андромеда",
    story:
      "Галактика — зорі й чорні діри разом, тож Андромеда — це вся Стихія, і безкоштовно. " +
      "Тиждень-другий з нами і в TON 618 тісно? Час підняти планку.",
    about: "Декоратор, шрифти, фони, правила новин, жести та бета-функції.",
    count: 58,
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
export const levelReleaseName = (key) => `Стихія ${STYKHIIA_VERSION} · ${levelFullName(key)}`;

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
  if (mod10 === 1 && mod100 !== 11) return "налаштування";
  return mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? "налаштування" : "налаштувань";
};

/** «43 налаштування» — скільки налаштувань у режимі (для гостя без «Безпеки») */
export const levelCountLabel = (key, isGuest = false) => {
  const n = getLevelInfo(key).count - (isGuest ? GUEST_HIDDEN_COUNT : 0);
  return `${n} ${pluralSettings(n)}`;
};
