import { getPref, setPref, removePref, subscribePrefs } from "./prefsStore.js";
import { fcmVapidKey, turnstileSiteKey } from "../firebaseConfig.js";
import {
  isUrgentNotifyEnabled,
  getUrgentWords,
  URGENT_NOTIFY_KEY,
  URGENT_WORDS_KEY,
} from "./newsPersonal.js";
import {
  isWeatherAlertsEnabled,
  isCardWeatherAlertsOn,
  getAlertPause,
  getAlertDailyLimit,
  ALERT_PREF_KEYS,
} from "./emergencyAlerts.js";

// Справжні push-сповіщення через Firebase Cloud Messaging: приходять навіть тоді,
// коли Стихія закрита. Розсилає їх Cloud Function sendAlerts (firebase-functions/).
//
// Пристрій реєструє через Cloud Function savePushProfile свій токен і «профіль
// сповіщень»: які сповіщення хоче, паузу, ліміт на добу, слова термінових новин і
// округлені до ~10 км координати карток погоди. Без входу в акаунт.
// Перед кожним викликом сторінка проходить Cloudflare Turnstile (безкоштовна перевірка
// від ботів). Firebase Messaging і Turnstile вантажимо лише тоді, коли сповіщення справді ввімкнено.

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY || fcmVapidKey;
// Локально можна підставити тестовий ключ Cloudflare (завжди проходить): 1x00000000000000000000AA
const TURNSTILE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || turnstileSiteKey;
const FUNCTIONS_REGION = "europe-west1";
const TOKEN_KEY = "news_push_token";
const REFRESHED_AT_KEY = "news_push_refreshed_at";
const PROFILE_KEY = "news_push_profile"; // останній записаний профіль — щоб не писати зайве
// Сервер видаляє токени, які не оновлювались 60 днів, — оновлюємо щотижня
const REFRESH_EVERY_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_PLACES = 10;
const SYNC_DELAY_MS = 3000;

const sha256Hex = async (text) =>
  [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)))]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

/** Чи може цей браузер отримувати push (iPhone — лише сайт, доданий на екран «Додому»). */
export const isPushSupported = () =>
  Boolean(VAPID_KEY) &&
  Boolean(TURNSTILE_KEY) &&
  typeof window !== "undefined" &&
  "serviceWorker" in navigator &&
  "PushManager" in window &&
  "Notification" in window;

export const isPushSubscribed = () => Boolean(getPref(TOKEN_KEY));

/** Чи хоче користувач хоч якісь екстрені сповіщення. */
export const wantsPush = () => isUrgentNotifyEnabled() || isWeatherAlertsEnabled();

// Картки погоди передає App.jsx (setPushPlaces) — сервер стереже їх від небезпечної погоди
let knownPlaces = [];

const round1 = (n) => Math.round(Number(n) * 10) / 10;

const buildProfile = () => {
  const weatherAlerts = isWeatherAlertsEnabled();
  return {
    newsAlerts: isUrgentNotifyEnabled(),
    weatherAlerts,
    pauseMinutes: getAlertPause(),
    dailyLimit: getAlertDailyLimit(),
    urgentWords: getUrgentWords().slice(0, 20),
    places: weatherAlerts
      ? knownPlaces
          .filter((p) => isCardWeatherAlertsOn(p.id))
          .filter((p) => Number.isFinite(Number(p.lat)) && Number.isFinite(Number(p.lon)))
          .slice(0, MAX_PLACES)
          .map((p) => ({
            lat: round1(p.lat),
            lon: round1(p.lon),
            name: String(p.name || "Ваша локація").slice(0, 60),
          }))
      : [],
  };
};

const loadFirebase = async () => {
  // firebase.js ініціалізує застосунок за замовчуванням — getMessaging() його підхопить
  const [messaging, { db }, firestore] = await Promise.all([
    import("firebase/messaging"),
    import("../firebase.js"),
    import("firebase/firestore"),
  ]);
  return { ...messaging, db, ...firestore };
};

// ───────────── Cloudflare Turnstile (безкоштовна перевірка від ботів) ─────────────
// Скрипт вантажимо лише тут — коли людина вмикає сповіщення або раз на тиждень.
// Віджет невидимий; віконце з'являється, лише якщо Cloudflare потрібна дія людини.

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const TURNSTILE_TIMEOUT_MS = 60000;
let turnstileLoading = null;

const loadTurnstile = () => {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!turnstileLoading) {
    turnstileLoading = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = TURNSTILE_SCRIPT;
      script.async = true;
      script.onload = () => resolve(window.turnstile);
      script.onerror = () => {
        turnstileLoading = null;
        reject(new Error("Turnstile не завантажився"));
      };
      document.head.appendChild(script);
    });
  }
  return turnstileLoading;
};

/** Одноразовий токен Turnstile (живе 5 хвилин, сервер перевіряє його один раз). */
const getCaptchaToken = async () => {
  const turnstile = await loadTurnstile();
  const box = document.createElement("div");
  // Якщо знадобиться «Я не робот» — показуємо внизу по центру, поверх усього
  box.style.cssText =
    "position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483647;";
  document.body.appendChild(box);
  let widgetId;
  try {
    return await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Turnstile: час вийшов")), TURNSTILE_TIMEOUT_MS);
      widgetId = turnstile.render(box, {
        sitekey: TURNSTILE_KEY,
        action: "push", // сервер приймає лише цю дію
        appearance: "interaction-only",
        callback: (token) => {
          clearTimeout(timer);
          resolve(token);
        },
        "error-callback": () => {
          clearTimeout(timer);
          reject(new Error("Turnstile: перевірку не пройдено"));
        },
        "timeout-callback": () => {
          clearTimeout(timer);
          reject(new Error("Turnstile: час вийшов"));
        },
      });
    });
  } finally {
    if (widgetId !== undefined) turnstile.remove(widgetId);
    box.remove();
  }
};

// Причина останньої невдачі: "limit" — денні ліміти сервера, "captcha" — перевірка
// від ботів, "error" — інше
let lastPushError = null;
export const getLastPushError = () => lastPushError;

const writeTokenDoc = async (token, profile) => {
  const [{ getApp }, { getFunctions, httpsCallable }] = await Promise.all([
    import("firebase/app"),
    import("firebase/functions"),
    import("../firebase.js"), // ініціалізує застосунок за замовчуванням
  ]);
  let captcha;
  try {
    captcha = await getCaptchaToken();
  } catch (err) {
    err.code = "captcha";
    throw err;
  }
  const save = httpsCallable(getFunctions(getApp(), FUNCTIONS_REGION), "savePushProfile");
  await save({ token, profile, captcha });
  setPref(PROFILE_KEY, JSON.stringify(profile));
  setPref(REFRESHED_AT_KEY, String(Date.now()));
};

const rememberError = (err) => {
  lastPushError =
    err?.code === "functions/resource-exhausted"
      ? "limit"
      : err?.code === "captcha" || err?.code === "functions/permission-denied"
        ? "captcha"
        : "error";
};

/**
 * Підписує пристрій на push. Повертає true, якщо вдалося.
 * Дозвіл на сповіщення має бути вже наданий.
 */
export const subscribePush = async () => {
  lastPushError = null;
  if (!isPushSupported() || Notification.permission !== "granted") return false;
  try {
    const { isSupported, getMessaging, getToken, db, doc, deleteDoc } = await loadFirebase();
    if (!(await isSupported())) return false;
    // Той самий Service Worker, що й для офлайну: у ньому обробник push (sw-notifications.js)
    const registration = await navigator.serviceWorker.ready;
    const token = await getToken(getMessaging(), {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    });
    if (!token) return false;

    const previous = getPref(TOKEN_KEY);
    await writeTokenDoc(token, buildProfile());
    // Токен змінився — старий запис більше не потрібен
    if (previous && previous !== token) {
      await deleteDoc(doc(db, "push_tokens", await sha256Hex(previous))).catch(() => {});
    }
    setPref(TOKEN_KEY, token);
    return true;
  } catch (err) {
    rememberError(err);
    console.warn("Не вдалося підписатися на push-сповіщення:", err);
    return false;
  }
};

/** Відписує пристрій: видаляє токен і в FCM, і в Firestore. */
export const unsubscribePush = async () => {
  const token = getPref(TOKEN_KEY);
  removePref(TOKEN_KEY);
  removePref(REFRESHED_AT_KEY);
  removePref(PROFILE_KEY);
  if (!token) return;
  try {
    const { isSupported, getMessaging, deleteToken, db, doc, deleteDoc } = await loadFirebase();
    await deleteDoc(doc(db, "push_tokens", await sha256Hex(token))).catch(() => {});
    if (await isSupported()) await deleteToken(getMessaging()).catch(() => {});
  } catch (err) {
    console.warn("Не вдалося відписатися від push-сповіщень:", err);
  }
};

/**
 * Сторінка показала локальне сповіщення (власні стрічки чи погода, поки Стихія відкрита) —
 * повідомляємо сервер, щоб пауза й ліміт на добу були спільними. Правила дозволяють
 * пристрою змінювати лише ці три поля — і це впливає тільки на його власні сповіщення.
 */
export const reportLocalAlerts = async (localCountToday) => {
  const token = getPref(TOKEN_KEY);
  if (!token || localCountToday < 1) return;
  try {
    const [{ db }, { doc, updateDoc, serverTimestamp }, { kyivDayKey }] = await Promise.all([
      import("../firebase.js"),
      import("firebase/firestore"),
      import("./emergencyAlerts.js"),
    ]);
    await updateDoc(doc(db, "push_tokens", await sha256Hex(token)), {
      localDay: kyivDayKey(),
      localCount: Math.min(40, Math.round(localCountToday)),
      localLastAt: serverTimestamp(),
    });
  } catch (err) {
    console.warn("Не вдалося передати серверу лічильник сповіщень:", err);
  }
};

/** Записує профіль на сервер, лише якщо він змінився (або давно не підтверджувався). */
const syncProfile = async ({ force = false } = {}) => {
  const token = getPref(TOKEN_KEY);
  if (!token) return;
  const profile = buildProfile();
  const stale = Date.now() - Number(getPref(REFRESHED_AT_KEY) || 0) >= REFRESH_EVERY_MS;
  if (!force && !stale && getPref(PROFILE_KEY) === JSON.stringify(profile)) return;
  try {
    await writeTokenDoc(token, profile);
  } catch (err) {
    rememberError(err);
    console.warn("Не вдалося оновити налаштування push-сповіщень:", err);
  }
};

let syncTimer = null;
/** Відкладене оновлення: кілька змін поспіль — один запис. */
export const schedulePushSync = () => {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(async () => {
    if (!isPushSubscribed()) return; // підписка — лише за явною дією користувача (дозвіл)
    if (!wantsPush()) {
      await unsubscribePush();
      return;
    }
    await syncProfile();
  }, SYNC_DELAY_MS);
};

/** App.jsx передає актуальні картки погоди. */
export const setPushPlaces = (cards) => {
  knownPlaces = (cards || []).map((c) => ({
    id: c.id,
    lat: c.lat,
    lon: c.lon,
    name: c.locationName,
  }));
  schedulePushSync();
};

/**
 * Запуск застосунку: перевіряємо дозвіл, раз на тиждень підтверджуємо токен
 * і стежимо за налаштуваннями, щоб сервер знав актуальний профіль.
 */
export const initPushNotifications = () => {
  const watched = new Set([URGENT_NOTIFY_KEY, URGENT_WORDS_KEY, ...ALERT_PREF_KEYS]);
  const unsubscribe = subscribePrefs((e) => {
    if (watched.has(e.detail?.key)) schedulePushSync();
  });
  (async () => {
    if (!isPushSubscribed() || !isPushSupported()) return;
    if (Notification.permission !== "granted") {
      // Користувач заборонив сповіщення в браузері — прибираємо підписку
      await unsubscribePush();
      return;
    }
    const stale = Date.now() - Number(getPref(REFRESHED_AT_KEY) || 0) >= REFRESH_EVERY_MS;
    // Раз на тиждень беремо токен заново: FCM міг його змінити
    if (stale) await subscribePush();
  })();
  return unsubscribe;
};
