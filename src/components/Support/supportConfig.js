// ─────────────────────────────────────────────────────────────
//  Підтримка Стихії: витрати, місячна ціль, донатери.
//  Усе, що треба оновлювати руками, — в цьому файлі.
// ─────────────────────────────────────────────────────────────

import { getPref, setPref } from "../../utils/prefsStore.js";

import i18n from "../../i18n/i18n.js";
export const DONATE_URL = "https://donatello.to/TheTurkeyStudio";

// Комісія платформи донатів (Donatello) — частка, яка не доходить до проєкту
export const DONATION_FEE = 0.1;

// Статті витрат. `hidden: true` — поки не показуємо на сайті
// (ліміти ще не перевищені або послугу ще не оформлено).
// Коли стаття стане реальною — просто приберіть `hidden`.
export const COSTS = [
  { id: "ai", get label() { return i18n.t("ui.supportConfig.pidpyskaNaShiPomichnyka"); }, get price() { return i18n.t("ui.supportConfig.1100HrnMis"); }, monthly: 1100 },
  { id: "domain", get label() { return i18n.t("ui.supportConfig.domenCom"); }, get price() { return i18n.t("ui.supportConfig.1000HrnRik"); }, monthly: 83 },
  { id: "firebase", label: "Firebase", get price() { return i18n.t("ui.supportConfig.400HrnMis"); }, monthly: 400, hidden: true },
  { id: "cloudflare", label: "Cloudflare", get price() { return i18n.t("ui.supportConfig.15Mis"); }, monthly: 675, hidden: true },
  { id: "apple", label: "Apple Developer", get price() { return i18n.t("ui.supportConfig.4500HrnRik"); }, monthly: 375, hidden: true },
  { id: "trademark", get label() { return i18n.t("ui.supportConfig.torhovaMarka"); }, get price() { return i18n.t("ui.supportConfig.9000Hrn10"); }, monthly: 75, hidden: true },
];

export const VISIBLE_COSTS = COSTS.filter((c) => !c.hidden);

// Скільки реально коштує місяць
export const MONTHLY_TOTAL = VISIBLE_COSTS.reduce((sum, c) => sum + c.monthly, 0);

// Ціль з урахуванням комісії, округлена до сотні вгору
export const MONTHLY_GOAL = Math.ceil(MONTHLY_TOTAL / (1 - DONATION_FEE) / 100) * 100;

// Зібрано за місяць — оновлюйте вручну з кабінету Donatello.
// Якщо `month` не збігається з поточним місяцем, смужка показує 0,
// щоб стара сума не висіла як нова.
export const RAISED = { month: "2026-11", amount: 0 };

export const getRaisedThisMonth = (now = new Date()) => {
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return RAISED.month === key ? RAISED.amount : 0;
};

// Значок «Друг індиків» видається автоматично: людина натискає «Я задонатив»,
// сервер (/api/support-progress) знаходить її донат на Donatello.
// Сюди можна вручну дописати Firebase UID (не email — він потрапить у публічний бандл),
// якщо хтось не зміг отримати значок сам. UID видно в Firebase Console → Authentication.
export const SUPPORTER_UIDS = [];

const supporterKey = (uid) => `stykhia_supporter_${uid}`;

// Запам'ятати значок у цьому браузері (на випадок, якщо об'єкт user перезапишеться при вході)
export const rememberSupporter = (uid) => {
  if (!uid) return;
  try {
    setPref(supporterKey(uid), String(Date.now()));
  } catch {
    /* приватний режим */
  }
};

const isRememberedSupporter = (uid) => {
  if (!uid) return false;
  try {
    return !!getPref(supporterKey(uid));
  } catch {
    return false;
  }
};

export const isSupporter = (user) =>
  !!user &&
  (user.isSupporter === true ||
    SUPPORTER_UIDS.includes(user.uid) ||
    isRememberedSupporter(user.uid));

export const formatUah = (n) => i18n.t("ui.supportConfig.hrn", { v0: Math.round(n).toLocaleString("uk-UA") });
