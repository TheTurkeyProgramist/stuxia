// Де Стихія навмисно недоступна: Яндекс Браузер, застосунок Яндекса та проксі Яндекса
// (наприклад, сторінки, перекладені через Яндекс Перекладач, — вони відкриваються на домені turbopages.org).
// Перевірка йде ще до запуску застосунку — решта коду там не вантажиться.
// Причина: Яндекс перебуває під санкціями України (Указ Президента № 133/2017).

export const isBlockedBrowser = (ua = typeof navigator !== "undefined" ? navigator.userAgent : "") =>
  /YaBrowser|Yowser|YaApp_|YaSearchBrowser|YandexSearch/i.test(ua || "");

export const isBlockedHost = (host = typeof location !== "undefined" ? location.hostname : "") =>
  /(^|\.)turbopages\.org$|yandex|yastatic|yandexcloud/i.test(host || "");

export const isBlockedEnvironment = () => isBlockedBrowser() || isBlockedHost();

const MESSAGES = {
  uk: {
    title: "Стихія недоступна в цьому браузері",
    text: "Стихія — український сервіс, а Яндекс перебуває під санкціями України, тому сайт не працює в Яндекс Браузері та через сервіси Яндекса. Відкрийте stuxia.com у Chrome, Firefox, Edge, Safari чи іншому браузері.",
  },
  be: {
    title: "Стыхія недаступная ў гэтым браўзеры",
    text: "Стыхія — украінскі сэрвіс, а Яндэкс знаходзіцца пад санкцыямі Украіны, таму сайт не працуе ў Яндэкс Браўзеры і праз сэрвісы Яндэкса. Адкрыйце stuxia.com у Chrome, Firefox, Edge, Safari ці іншым браўзеры.",
  },
  en: {
    title: "Stykhiia isn't available in this browser",
    text: "Stykhiia is a Ukrainian service, and Yandex is under Ukrainian sanctions, so the site doesn't work in Yandex Browser or through Yandex services. Open stuxia.com in Chrome, Firefox, Edge, Safari or another browser.",
  },
};

/** Замість застосунку — коротке повідомлення мовою браузера (укр / біл / англ). */
export const renderBlockedScreen = () => {
  const lang = String(navigator.language || "en").toLowerCase();
  const key = lang.startsWith("uk") ? "uk" : lang.startsWith("be") || lang === "ru-by" ? "be" : "en";
  const msg = MESSAGES[key];
  const root = document.getElementById("root") || document.body;
  document.documentElement.lang = key;
  document.title = msg.title;
  root.innerHTML = "";
  const box = document.createElement("div");
  box.style.cssText =
    "min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;" +
    "gap:12px;padding:24px;box-sizing:border-box;text-align:center;background:#111418;color:#f2f2f2;" +
    "font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif";
  const h = document.createElement("h1");
  h.textContent = msg.title;
  h.style.cssText = "margin:0;font-size:22px;font-weight:700";
  const p = document.createElement("p");
  p.textContent = msg.text;
  p.style.cssText = "margin:0;max-width:460px;font-size:15px;line-height:1.5;color:#c9cdd3";
  box.append(h, p);
  root.append(box);
};
