// ─────────────────────────────────────────────────────────────
//  Підтримка Стихії: витрати, місячна ціль, донатери.
//  Усе, що треба оновлювати руками, — в цьому файлі.
// ─────────────────────────────────────────────────────────────

export const DONATE_URL = "https://donatello.to/TheTurkeyStudio";

// Комісія платформи донатів (Donatello) — частка, яка не доходить до проєкту
export const DONATION_FEE = 0.1;

// Статті витрат. `hidden: true` — поки не показуємо на сайті
// (ліміти ще не перевищені або послугу ще не оформлено).
// Коли стаття стане реальною — просто приберіть `hidden`.
export const COSTS = [
  { id: "ai", label: "Підписка на ШІ-помічника для розробки", price: "1 100 грн/міс", monthly: 1100 },
  { id: "domain", label: "Домен .com", price: "1 000 грн/рік", monthly: 83 },
  { id: "firebase", label: "Firebase", price: "400 грн/міс", monthly: 400, hidden: true },
  { id: "cloudflare", label: "Cloudflare", price: "$15/міс", monthly: 675, hidden: true },
  { id: "apple", label: "Apple Developer", price: "4 500 грн/рік", monthly: 375, hidden: true },
  { id: "trademark", label: "Торгова марка", price: "9 000 грн / 10 років", monthly: 75, hidden: true },
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

// Донатери, які отримують значок «Друг індиків».
// Додавайте Firebase UID (не email — він потрапить у публічний бандл).
// UID видно в Firebase Console → Authentication.
export const SUPPORTER_UIDS = [];

export const isSupporter = (user) =>
  !!user && (user.isSupporter === true || SUPPORTER_UIDS.includes(user.uid));

export const formatUah = (n) => `${Math.round(n).toLocaleString("uk-UA")} грн`;
