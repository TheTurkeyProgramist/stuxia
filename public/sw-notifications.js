// Підключається до Service Worker (vite.config.mjs → workbox.importScripts).

// Журнал сповіщень у тій самій базі, що й у сторінки (localforage → IndexedDB
// «localforage» / «keyvaluepairs», ключ alerts_sent_log). Сторінка рахує за ним паузу
// й ліміт на добу — тож серверні push теж ураховуються, і разом їх не більше ліміту.
const LOG_DB = "localforage";
const LOG_STORE = "keyvaluepairs";
const LOG_KEY = "alerts_sent_log";

const logPush = (kind) =>
  new Promise((resolve) => {
    let request;
    try {
      request = indexedDB.open(LOG_DB);
    } catch {
      resolve();
      return;
    }
    // Бази ще немає — сторінка створить її сама, тут нічого не робимо
    request.onupgradeneeded = () => request.transaction.abort();
    request.onerror = () => resolve();
    request.onsuccess = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(LOG_STORE)) {
        db.close();
        resolve();
        return;
      }
      const tx = db.transaction(LOG_STORE, "readwrite");
      const store = tx.objectStore(LOG_STORE);
      const get = store.get(LOG_KEY);
      get.onsuccess = () => {
        const log = Array.isArray(get.result) ? get.result : [];
        const cutoff = Date.now() - 2 * 24 * 60 * 60 * 1000;
        store.put(
          [...log.filter((e) => e && e.at > cutoff), { at: Date.now(), kind, via: "push" }],
          LOG_KEY,
        );
      };
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = tx.onabort = () => {
        db.close();
        resolve();
      };
    };
  });

// Push від Firebase Cloud Messaging (Cloud Function sendAlerts).
// Сервер надсилає лише data, тож сповіщення показуємо самі — так воно однакове
// в усіх браузерах і не дублює те, що показала відкрита сторінка (спільний tag).
self.addEventListener("push", (event) => {
  let payload;
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    return;
  }
  const data = payload.data || payload;
  const title = data.title || payload.notification?.title;
  if (!title) return;
  event.waitUntil(
    Promise.all([
      self.registration.showNotification(title, {
        body: data.body || payload.notification?.body || "",
        icon: "/favicon.ico",
        tag: data.tag || undefined,
        data: { url: data.url },
      }),
      logPush(data.kind === "weather" ? "weather" : "news"),
    ]),
  );
});

// Натискання на сповіщення відкриває саму новину
self.addEventListener("notificationclick", (event) => {
  const url = event.notification?.data?.url;
  event.notification.close();
  if (!url) return;
  event.waitUntil(self.clients.openWindow(url));
});
