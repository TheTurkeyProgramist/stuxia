// Синхронізація налаштувань сайту (тема, порядок і видимість секцій, фони)
// з акаунтом: не більше SETTINGS_SYNC_DAILY_LIMIT записів на добу.
// Зміни понад ліміт зберігаються лише на пристрої (позначка pending) і
// потрапляють в акаунт при наступному вході або зміні вже в межах ліміту.
// Сервер (firestore.rules) перевіряє ліміт сам: settingsSyncCount лише росте
// протягом дня (UTC), а settingsSyncAt ставить сервер (serverTimestamp()).
export { getTodayKey, countForToday, toDayKey, isPermissionDenied } from "./muteSync";

export const SETTINGS_SYNC_DAILY_LIMIT = 100;
export const SETTINGS_SYNC_COUNTER_KEY = "settings_sync_counter";
export const SETTINGS_SYNC_PENDING_KEY = "settings_sync_pending";
// Швидкі зміни поспіль (перетягування секцій, перемикачі) — один запис
export const SETTINGS_SYNC_DEBOUNCE_MS = 2000;

// JSON з відсортованими ключами: однакові налаштування дають однаковий рядок,
// незалежно від порядку полів (Firestore повертає їх у своєму порядку)
export const stableStringify = (value) =>
  JSON.stringify(value, (_key, val) =>
    val && typeof val === "object" && !Array.isArray(val)
      ? Object.keys(val)
          .sort()
          .reduce((acc, key) => {
            acc[key] = val[key];
            return acc;
          }, {})
      : val,
  );

// Firestore не приймає undefined — прибираємо такі поля
export const toFirestoreSafe = (value) => JSON.parse(JSON.stringify(value));
