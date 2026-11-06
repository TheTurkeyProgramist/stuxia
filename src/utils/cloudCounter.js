// Запис у config/{uid} з добовим лічильником, який перевіряють правила Firestore
// (firestore.rules → counterOk): за добу (UTC) лічильник лише росте, не більше
// за ліміт, а час запису (atKey) ставить сервер. Обійти ліміт з браузера не можна.
import localforage from "localforage";
import { loadFirebase } from "../firebaseLazy";
import { getTodayKey, toDayKey, isPermissionDenied } from "./muteSync";

export const CLOUD_LIMITS = {
  settings: { countKey: "settingsSyncCount", atKey: "settingsSyncAt", limit: 100 },
  cards: { countKey: "cardsSyncCount", atKey: "cardsSyncAt", limit: 100 },
  mute: { countKey: "muteSyncCount", atKey: "muteSyncAt", limit: 30 },
  cardAdditions: { countKey: "cardAdditionsCount", atKey: "cardAdditionsAt", limit: 40 },
  reports: { countKey: "reportCount", atKey: "reportAt", limit: 20 },
};

// Скільки вже використано сьогодні за даними з хмари
export const usedTodayFromCloud = (cloudData, { countKey, atKey }) =>
  toDayKey(cloudData?.[atKey]) === getTodayKey() ? Number(cloudData?.[countKey]) || 0 : 0;

// counterRef.current = { date, count } — лічильник на цьому пристрої
export const usedToday = (counterRef) =>
  counterRef.current?.date === getTodayKey() ? counterRef.current.count : 0;

/**
 * Записує data в config/{uid} разом з лічильником.
 * Якщо сервер відхилив запис (інший пристрій уже збільшив лічильник) —
 * перечитує лічильник з хмари й пробує ще раз.
 * @returns {Promise<{ok: boolean, reason?: "limit", count?: number}>}
 */
export const writeWithDailyCounter = async ({
  uid,
  data,
  limitConfig,
  counterRef,
  storageKey,
}) => {
  const { countKey, atKey, limit } = limitConfig;
  const today = getTodayKey();
  const used = usedToday(counterRef);
  if (used >= limit) return { ok: false, reason: "limit", count: used };

  const { db, doc, setDoc, getDoc, serverTimestamp } = await loadFirebase();
  const ref = doc(db, "config", uid);
  const attempt = async (count) => {
    counterRef.current = { date: today, count };
    if (storageKey) {
      localforage.setItem(storageKey, { uid, date: today, count }).catch(() => {});
    }
    await setDoc(
      ref,
      { ...data, [countKey]: count, [atKey]: serverTimestamp() },
      { merge: true },
    );
    return { ok: true, count };
  };

  try {
    return await attempt(used + 1);
  } catch (err) {
    if (!isPermissionDenied(err)) throw err;
    const snap = await getDoc(ref);
    const cloudUsed = usedTodayFromCloud(snap.exists() ? snap.data() : {}, limitConfig);
    counterRef.current = { date: today, count: cloudUsed };
    if (cloudUsed >= limit) return { ok: false, reason: "limit", count: cloudUsed };
    return attempt(cloudUsed + 1);
  }
};
