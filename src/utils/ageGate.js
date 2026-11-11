import { getPref, setPref } from "./prefsStore.js";

// Підтвердження віку для окремих функцій (ключ Gemini — 18+, фільтр новин — 18+,
// казино та ставки й вимкнення фільтра — 22+). Зберігаємо найбільший підтверджений вік на цьому пристрої;
// «Скинути сайт» його очищає.
const KEY = "age_confirmed";

// Однаковий текст для всіх місць, де використовується ключ Gemini
export const GEMINI_MIN_AGE = 18;

// Казино та ставки — свідомо суворіше за законні 21: 22+.
// Вимкнений фільтр новин теж показує казино, тому і він — 22+.
export const GAMBLING_MIN_AGE = 22;
export const GEMINI_AGE_TEXT =
  "Ключ Gemini видає Google, і за умовами Gemini API користуватися ним можна лише з 18 років.";

export const getConfirmedAge = () => {
  try {
    return Number(getPref(KEY)) || 0;
  } catch {
    return 0;
  }
};

export const isAgeConfirmed = (age) => getConfirmedAge() >= age;

export const confirmAge = (age) => {
  if (isAgeConfirmed(age)) return;
  try {
    setPref(KEY, String(age));
  } catch {
    /* сховище недоступне — спитаємо ще раз наступного разу */
  }
};
