import localforage from "localforage";

// Бази IndexedDB, які сайт точно створює — на випадок браузерів
// без indexedDB.databases() (старіший Firefox)
const KNOWN_DATABASES = ["localforage", "stykhiia", "firebaseLocalStorageDb"];

const deleteDatabase = (name) =>
  new Promise((resolve) => {
    try {
      const req = indexedDB.deleteDatabase(name);
      req.onsuccess = req.onerror = req.onblocked = () => resolve();
    } catch {
      resolve();
    }
  });

/**
 * Скидання сайту до заводських на ЦЬОМУ пристрої:
 * вихід з акаунта, усі локальні дані (localforage, prefs, localStorage,
 * sessionStorage, кеш браузера, IndexedDB) і перезавантаження сторінки.
 * Хмарні дані акаунта не чіпає — після повторного входу вони повернуться.
 * @param {() => Promise<void>} [signOut] вихід з Firebase, якщо він уже завантажений
 */
export async function factoryReset(signOut) {
  if (signOut) await signOut().catch(() => {});

  await Promise.allSettled([
    localforage.clear(),
    localforage.createInstance({ name: "stykhiia", storeName: "prefs" }).clear(),
  ]);
  try { localStorage.clear(); } catch { /* недоступно */ }
  try { sessionStorage.clear(); } catch { /* недоступно */ }

  if ("caches" in window) {
    const keys = await caches.keys().catch(() => []);
    await Promise.allSettled(keys.map((key) => caches.delete(key)));
  }

  if ("indexedDB" in window) {
    let names = KNOWN_DATABASES;
    if (indexedDB.databases) {
      const dbs = await indexedDB.databases().catch(() => []);
      names = [...new Set([...names, ...dbs.map((db) => db.name).filter(Boolean)])];
    }
    // Відкрите з'єднання може заблокувати видалення — не чекаємо довше 1.5 с
    await Promise.race([
      Promise.allSettled(names.map(deleteDatabase)),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);
  }

  window.location.reload();
}
