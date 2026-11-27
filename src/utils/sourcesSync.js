// Власні стрічки новин і власні фрейми карти в акаунті (поля customFeeds і customFrames
// у config/{uid}). Ліміт спільний із налаштуваннями сайту (settingsSyncCount, firestore.rules).
// News і ClimateMap лише пишуть у localforage й кличуть markSourcesChanged();
// в акаунт відправляє App.
import localforage from "localforage";
import { stableStringify, toFirestoreSafe } from "./settingsSync";

export const SOURCES_CHANGED_EVENT = "stuxia:sources-changed"; // змінили на цьому пристрої
export const SOURCES_SYNCED_EVENT = "stuxia:sources-synced"; // прийшли з акаунта

const STORAGE_KEYS = { customFeeds: "custom_news_sources", customFrames: "climate_custom_user_frames" };
const PENDING_KEY = "sources_sync_pending";
const OWNER_KEY = "sources_sync_owner"; // з чиїм акаунтом пристрій уже синхронізувався
const MAX_ITEMS = 30; // стільки ж приймають firestore.rules

export const markSourcesChanged = async () => {
  await localforage.setItem(PENDING_KEY, true).catch(() => {});
  window.dispatchEvent(new Event(SOURCES_CHANGED_EVENT));
};

export const readLocalSources = async () => {
  const data = {};
  for (const [field, key] of Object.entries(STORAGE_KEYS)) {
    const list = await localforage.getItem(key);
    data[field] = toFirestoreSafe(Array.isArray(list) ? list.slice(0, MAX_ITEMS) : []);
  }
  return data;
};

export const clearSourcesPending = () => localforage.removeItem(PENDING_KEY).catch(() => {});

const union = (cloud, local) => {
  const urls = new Set((cloud || []).map((item) => item.url));
  return [...(cloud || []), ...local.filter((item) => !urls.has(item.url))].slice(0, MAX_ITEMS);
};

/**
 * Після читання акаунта:
 *  • перший раз на цьому пристрої — об'єднуємо обидва списки, щоб нічого не загубити;
 *  • є невідправлені зміни — локальні новіші, їх і треба відправити;
 *  • інакше беремо списки з акаунта (так доходять і видалення з інших пристроїв).
 * @returns {Promise<boolean>} true — локальне треба відправити в акаунт
 */
export const mergeSourcesFromCloud = async (uid, cloudData) => {
  const [local, owner, pending] = await Promise.all([
    readLocalSources(),
    localforage.getItem(OWNER_KEY),
    localforage.getItem(PENDING_KEY),
  ]);
  const firstTime = owner !== uid;
  let push = false;
  let changed = false;
  for (const [field, key] of Object.entries(STORAGE_KEYS)) {
    const cloud = cloudData?.[field];
    let next = local[field];
    if (firstTime) next = union(cloud, local[field]);
    else if (!pending && cloud) next = cloud;

    if (stableStringify(next) !== stableStringify(local[field])) {
      await localforage.setItem(key, next);
      changed = true;
    }
    if (stableStringify(next) !== stableStringify(cloud || [])) push = true;
  }
  await localforage.setItem(OWNER_KEY, uid);
  if (push) await localforage.setItem(PENDING_KEY, true);
  else await clearSourcesPending();
  if (changed) window.dispatchEvent(new Event(SOURCES_SYNCED_EVENT));
  return push;
};
