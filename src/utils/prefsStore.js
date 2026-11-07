import localforage from "localforage";

// Дрібні налаштування цього браузера (раніше лежали в localStorage).
// Зберігаються в localforage, а читаються синхронно з кешу в пам'яті,
// який заповнюється один раз перед стартом застосунку (див. index.jsx).
// Значення — рядки, як і в localStorage.

const store = localforage.createInstance({ name: "stykhiia", storeName: "prefs" });
const CHANGE_EVENT = "prefs-change";
const MIGRATED_KEY = "__migrated_from_localStorage";
const HYDRATE_TIMEOUT_MS = 1500;

// Ключі, які сайт колись писав у localStorage, — їх переносимо при першому запуску
const LEGACY_KEYS = new Set([
  "i18nextLng",
  "animations_disabled",
  "headerAccentColor",
  "scene_decor_enabled",
  "site_context_menu_enabled",
  "ad_antiheader_enabled",
  "settings_filters_preview",
  "settings_filters_preview_percent",
  "saved_google_avatar",
  "ai_help_sidebar_collapsed",
  "weatherNotificationLastSentAt",
  "bg_music_downloaded_tracks",
  "bg_music_soft_deleted_ids",
  "news_filter_enabled",
  "news_filter_soft_mode",
  "news_filter_categories",
  "news_filter_custom_words",
  "news_filter_sync_pending",
  "stykhia_support_nudge_v1",
]);
const LEGACY_PREFIXES = ["stykhia_supporter_"];

const isLegacyKey = (key) =>
  LEGACY_KEYS.has(key) || LEGACY_PREFIXES.some((prefix) => key.startsWith(prefix));

const cache = new Map();

// Інші вкладки сайту дізнаються про зміни через BroadcastChannel (замість події storage)
const channel =
  typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("stykhiia-prefs") : null;

const notify = (key) => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { key } }));
};

if (channel) {
  channel.onmessage = ({ data }) => {
    if (!data?.key) return;
    if (data.value === null) cache.delete(data.key);
    else cache.set(data.key, data.value);
    notify(data.key);
  };
}

const migrateFromLocalStorage = async () => {
  if (cache.has(MIGRATED_KEY)) return;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !isLegacyKey(key) || cache.has(key)) continue;
      const value = localStorage.getItem(key);
      if (value === null) continue;
      cache.set(key, value);
      await store.setItem(key, value);
    }
    cache.set(MIGRATED_KEY, "1");
    await store.setItem(MIGRATED_KEY, "1");
  } catch {
    // localStorage або IndexedDB недоступні — спробуємо при наступному запуску
  }
};

const loadAll = async () => {
  try {
    await store.iterate((value, key) => {
      cache.set(key, value);
    });
  } catch {
    // Сховище недоступне (приватний режим) — працюємо з кешем до перезавантаження
  }
  await migrateFromLocalStorage();
};

/** Заповнює кеш зі сховища. Викликається один раз перед рендером. */
export const hydratePrefs = () =>
  Promise.race([
    loadAll(),
    new Promise((resolve) => setTimeout(resolve, HYDRATE_TIMEOUT_MS)),
  ]);

export const getPref = (key) => (cache.has(key) ? cache.get(key) : null);

export const setPref = (key, value) => {
  const next = String(value);
  cache.set(key, next);
  store.setItem(key, next).catch(() => {});
  channel?.postMessage({ key, value: next });
  notify(key);
};

export const removePref = (key) => {
  cache.delete(key);
  store.removeItem(key).catch(() => {});
  channel?.postMessage({ key, value: null });
  notify(key);
};

/** Підписка на зміни (у цій та інших вкладках). Повертає функцію відписки. */
export const subscribePrefs = (callback) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
};
