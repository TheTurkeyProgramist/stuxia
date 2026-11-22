// Після нового деплою старі чанки (assets/*-ХЕШ.js) зникають, а Cloudflare Pages
// на неіснуючу адресу віддає index.html зі статусом 200 — import() такого файлу падає.
// Відкрита до деплою вкладка (або старий код із кешу service worker) тоді лишається
// без файлу мови й показує ключі замість тексту. Лікується одним перезавантаженням:
// нова сторінка посилається на нові хеші.
const KEY = 'staleBuildReloadAt';
// Не частіше ніж раз на хвилину — щоб справжня відсутність мережі не дала нескінченний цикл
const MIN_INTERVAL_MS = 60 * 1000;

export const reloadOnceForStaleBuild = () => {
  if (typeof window === 'undefined') return false;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
  try {
    const last = Number(sessionStorage.getItem(KEY) || 0);
    if (Date.now() - last < MIN_INTERVAL_MS) return false;
    sessionStorage.setItem(KEY, String(Date.now()));
  } catch {
    return false; // без sessionStorage запобіжника немає — краще не перезавантажувати
  }
  window.location.reload();
  return true;
};
