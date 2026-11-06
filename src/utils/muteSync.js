// Синхронізація заглушених новин між пристроями.
// Ліміт: не більше MUTE_SYNC_DAILY_LIMIT синхронізованих дій на добу.
// Дією вважається і «Заглушити», і «Розглушити».
// Дії понад ліміт зберігаються лише на цьому пристрої (pending) і потрапляють
// у хмару разом з повним списком під час наступної синхронізованої дії.
// Сервер (firestore.rules) перевіряє ліміт сам: лічильник лише росте за день,
// а час ставить сервер (muteSyncAt = serverTimestamp()).

export const MUTE_SYNC_DAILY_LIMIT = 30;
// Скільки заглушених новин зберігаємо в хмарі (старіші відкидаються)
export const MUTED_NEWS_MAX = 1000;

export const MUTE_PENDING_KEY = "muted_news_pending";
export const MUTE_COUNTER_KEY = "muted_news_sync_counter";

// День за UTC — так само рахує сервер у правилах Firestore (request.time.date())
export const getTodayKey = () => new Date().toISOString().slice(0, 10);

// День (UTC) з хмарного поля: Timestamp з Firestore SDK, Date або рядок
export const toDayKey = (value) => {
  if (!value) return null;
  if (typeof value.toDate === "function") return value.toDate().toISOString().slice(0, 10);
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value.slice(0, 10);
  return null;
};

export const emptyPending = () => ({ mute: [], unmute: [] });

// Додає несинхронізовану дію: протилежна дія з тим самим посиланням скасовується
export const addPendingOp = (pending, link, op) => {
  const base = pending || emptyPending();
  const opposite = op === "mute" ? "unmute" : "mute";
  return {
    ...base,
    [op]: [...new Set([...(base[op] || []), link])],
    [opposite]: (base[opposite] || []).filter((l) => l !== link),
  };
};

// Хмарний список + локальні несинхронізовані зміни
export const applyPending = (list, pending) => {
  const unmute = new Set(pending?.unmute || []);
  return [...new Set([...(list || []), ...(pending?.mute || [])])].filter(
    (l) => !unmute.has(l),
  );
};

// Скільки синхронізованих дій уже використано сьогодні
export const countForToday = (counter, uid) => {
  if (!counter || toDayKey(counter.date) !== getTodayKey()) return 0;
  if (uid && counter.uid && counter.uid !== uid) return 0;
  return Number(counter.count) || 0;
};

export const isPermissionDenied = (err) =>
  err?.code === "permission-denied" || /permission/i.test(err?.message || "");
