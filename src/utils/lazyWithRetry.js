import { lazy } from "react";

// Ліниві модалки: файл модалки може не завантажитись (слабкий інтернет, офлайн, новий деплой).
// Без цього React.lazy один раз падає — і без запобіжника гасить увесь сайт.

const RELOAD_KEY = "lazy-chunk-reload-at";
const RELOAD_COOLDOWN_MS = 60 * 1000;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Офлайн — не марнуємо спроби, а чекаємо, поки повернеться зв'язок
const waitForOnline = () =>
  typeof navigator === "undefined" || navigator.onLine !== false
    ? Promise.resolve()
    : new Promise((resolve) => window.addEventListener("online", resolve, { once: true }));

const isChunkLoadError = (err) =>
  /dynamically imported module|Importing a module script failed|Failed to fetch|error loading dynamically|ChunkLoadError/i.test(
    String(err?.message || err),
  );

/** import() з повторними спробами: 1 с, потім 2 с; офлайн — чекає на зв'язок. */
export const retryImport = async (factory, retries = 2, delay = 1000) => {
  try {
    await waitForOnline();
    return await factory();
  } catch (err) {
    if (retries <= 0) throw err;
    await wait(delay);
    return retryImport(factory, retries - 1, delay * 2);
  }
};

/**
 * React.lazy з повторними спробами. Якщо файл так і не знайшовся (після нового деплою старі
 * файли з хешем зникають) — один раз перезавантажуємо сторінку, щоб підтягнути свіжі.
 */
export const lazyWithRetry = (factory) =>
  lazy(() =>
    retryImport(factory).catch((err) => {
      if (isChunkLoadError(err) && navigator.onLine !== false) {
        let last;
        try {
          last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
        } catch {
          last = Date.now(); // сховище недоступне — не ризикуємо нескінченним перезавантаженням
        }
        if (Date.now() - last > RELOAD_COOLDOWN_MS) {
          try {
            sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
          } catch {
            /* без запису — все одно перезавантажуємо один раз */
          }
          window.location.reload();
          return new Promise(() => {}); // сторінка перезавантажується — нічого не рендеримо
        }
      }
      throw err;
    }),
  );
