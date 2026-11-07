// Коли показувати плашку «Стихія живе завдяки вам».
// Ніяких спливаючих вікон: лише тиха плашка, яку можна закрити.
//
//  • monthly — раз на 30 днів, і лише якщо людина користується сайтом уже ≥ 3 днів
//  • cards   — після додавання 3-ї (і далі) картки погоди, не частіше ніж раз на 14 днів
//  • bg      — після першої зміни фону, лише один раз за весь час
//
// Додатково: будь-яка плашка — не частіше ніж раз на 3 дні,
// а після кліку «Підтримати» — тиша на 60 днів.

import { getPref, setPref } from "../../utils/prefsStore.js";

const KEY = "stykhia_support_nudge_v1";
const DAY = 24 * 60 * 60 * 1000;

export const SUPPORT_EVENT = "stykhia:support-moment";

const RULES = {
  monthly: { every: 30 * DAY },
  cards: { every: 14 * DAY },
  bg: { once: true },
};

const GLOBAL_COOLDOWN = 3 * DAY;
const AFTER_DONATE_QUIET = 60 * DAY;
const MIN_ACCOUNT_AGE = 3 * DAY;

const read = () => {
  try {
    return JSON.parse(getPref(KEY)) || {};
  } catch {
    return {};
  }
};

const write = (state) => {
  try {
    setPref(KEY, JSON.stringify(state));
  } catch {
    /* приватний режим — просто не запам'ятовуємо */
  }
};

// Запам'ятовуємо перший візит, щоб не просити в новачків
export const markFirstVisit = () => {
  const s = read();
  if (!s.firstSeen) write({ ...s, firstSeen: Date.now() });
};

export const canShow = (reason, now = Date.now()) => {
  const rule = RULES[reason];
  if (!rule) return false;
  const s = read();
  const shown = s.shown || {};

  if (s.donatedAt && now - s.donatedAt < AFTER_DONATE_QUIET) return false;
  if (s.lastAny && now - s.lastAny < GLOBAL_COOLDOWN) return false;
  if (rule.once && shown[reason]) return false;
  if (rule.every && shown[reason] && now - shown[reason] < rule.every) return false;
  if (reason === "monthly" && (!s.firstSeen || now - s.firstSeen < MIN_ACCOUNT_AGE)) return false;
  return true;
};

export const markShown = (reason, now = Date.now()) => {
  const s = read();
  write({ ...s, lastAny: now, shown: { ...(s.shown || {}), [reason]: now } });
};

export const markDonateClicked = () => {
  write({ ...read(), donatedAt: Date.now() });
};

// Викликається з будь-якого місця сайту після «приємного моменту»
export const notifySupportMoment = (reason) => {
  try {
    window.dispatchEvent(new CustomEvent(SUPPORT_EVENT, { detail: { reason } }));
  } catch {
    /* SSR / старий браузер */
  }
};
