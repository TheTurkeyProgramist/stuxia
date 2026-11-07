// Синхронізація налаштувань фільтра новин між пристроями (поле newsFilter у config/{uid}).
// Вмикається тим самим перемикачем, що й синхронізація заглушених новин,
// і рахується в той самий добовий ліміт (MUTE_SYNC_DAILY_LIMIT, перевіряє firestore.rules).
// Зміни в налаштуваннях відправляються з затримкою, тож серія кліків = одна дія.
// Якщо ліміт вичерпано, налаштування лишаються на пристрої з позначкою «pending»
// і відправляються при наступній можливості.
import localforage from "localforage";
import toast from "react-hot-toast";
import { CLOUD_LIMITS, writeWithDailyCounter } from "./cloudCounter";
import { MUTE_COUNTER_KEY, MUTE_SYNC_DAILY_LIMIT, countForToday, getTodayKey } from "./muteSync";
import { applyNewsFilterPrefs, getNewsFilterPrefs } from "./contentFilter";
import { getPref, removePref, setPref } from "./prefsStore.js";

const PENDING_KEY = "news_filter_sync_pending";
const DEBOUNCE_MS = 2500;

let timer = null;
let timerUid = null;

const setPending = (value) => {
  try {
    if (value) setPref(PENDING_KEY, "true");
    else removePref(PENDING_KEY);
  } catch {}
};

const isPending = () => {
  try {
    return getPref(PENDING_KEY) === "true";
  } catch {
    return false;
  }
};

/** Відправляє поточні налаштування фільтра в хмару (1 дія з добового ліміту). */
export const pushNewsFilterToCloud = async (uid) => {
  if (!uid) return { ok: false };
  let localCounter = null;
  try {
    localCounter = await localforage.getItem(MUTE_COUNTER_KEY);
  } catch {}
  const counterRef = {
    current: { date: getTodayKey(), count: countForToday(localCounter, uid) },
  };
  try {
    const result = await writeWithDailyCounter({
      uid,
      data: { newsFilter: getNewsFilterPrefs() },
      limitConfig: CLOUD_LIMITS.mute,
      counterRef,
      storageKey: MUTE_COUNTER_KEY,
    });
    setPending(!result.ok);
    if (!result.ok) {
      toast(
        `Ліміт синхронізації вичерпано (${MUTE_SYNC_DAILY_LIMIT}/${MUTE_SYNC_DAILY_LIMIT} за добу). Налаштування фільтра збережено лише на цьому пристрої.`,
        { id: "news-filter-sync-limit", duration: 4500 },
      );
    }
    return result;
  } catch (err) {
    console.warn("Не вдалося синхронізувати фільтр новин", err);
    setPending(true);
    return { ok: false };
  }
};

/** Викликати після кожної зміни налаштувань фільтра: відправка з затримкою. */
export const scheduleNewsFilterSync = (uid) => {
  if (!uid) return;
  setPending(true);
  timerUid = uid;
  clearTimeout(timer);
  timer = setTimeout(() => {
    timer = null;
    pushNewsFilterToCloud(uid);
  }, DEBOUNCE_MS);
};

/** Відправити відкладені зміни одразу (напр. при закритті налаштувань). */
export const flushNewsFilterSync = () => {
  if (!timer) return;
  clearTimeout(timer);
  timer = null;
  pushNewsFilterToCloud(timerUid);
};

/**
 * Під час завантаження з хмари:
 *  • є несинхронізовані локальні зміни — відправляємо їх;
 *  • у хмарі ще нічого немає — відправляємо локальні налаштування;
 *  • інакше беремо налаштування з хмари.
 * @returns {Promise<boolean>} true, якщо локальні налаштування змінилися
 */
export const mergeNewsFilterFromCloud = async (uid, cloudData) => {
  if (!uid) return false;
  const cloudFilter = cloudData?.newsFilter;
  if (isPending() || !cloudFilter) {
    await pushNewsFilterToCloud(uid);
    return false;
  }
  const before = JSON.stringify(getNewsFilterPrefs());
  applyNewsFilterPrefs(cloudFilter);
  return before !== JSON.stringify(getNewsFilterPrefs());
};
