// Поправка на неправильно виставлений годинник пристрою (наприклад, не той
// часовий пояс у Windows + час, підкручений вручну): беремо справжній час
// із заголовка Date відповіді нашого ж сервера.
let offsetMs = 0;
let syncPromise = null;

// Менші розбіжності ігноруємо: заголовок Date має точність лише до секунди
const MIN_OFFSET_MS = 30_000;

export const syncClock = () => {
  syncPromise ??= (async () => {
    try {
      const sentAt = Date.now();
      const res = await fetch(`${import.meta.env.BASE_URL}?clock=${sentAt}`, {
        method: "HEAD",
        cache: "no-store",
      });
      const receivedAt = Date.now();
      const serverTime = Date.parse(res.headers.get("date"));
      if (Number.isFinite(serverTime)) {
        const diff = serverTime + 500 - (sentAt + receivedAt) / 2;
        if (Math.abs(diff) > MIN_OFFSET_MS) offsetMs = diff;
      }
    } catch {
      // Офлайн — лишаємо системний час
    }
    return offsetMs;
  })();
  return syncPromise;
};

export const getNow = () => new Date(Date.now() + offsetMs);
