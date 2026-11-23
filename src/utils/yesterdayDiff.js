// «Порівняно з учора»: різниця температури зараз і вчора о цій же годині (у °C, ціле число).
// Учорашні 24 години беремо з погодинного ряду, який уже є у відповіді (past_days=1) —
// нових запитів немає. Файл чистий (без React та i18n), щоб його можна було тестувати.

// Година в місті (0–23): зсув часового поясу картки, а без нього — локальний час пристрою
const cityHour = (card, now) => {
  const offset = card?.utcOffsetSeconds;
  return Number.isFinite(offset) ? new Date(now + offset * 1000).getUTCHours() : new Date(now).getHours();
};

// 24 температури учорашньої доби за годинами (null, де даних немає)
export const buildYesterdayTemps = (hourly, yesterdayDate) => {
  if (!hourly?.time || !Array.isArray(hourly.temperature_2m) || !yesterdayDate) return null;
  const temps = Array(24).fill(null);
  hourly.time.forEach((t, i) => {
    if (typeof t !== "string" || !t.startsWith(yesterdayDate)) return;
    const v = hourly.temperature_2m[i];
    if (typeof v === "number" && Number.isFinite(v)) temps[Number(t.slice(11, 13))] = v;
  });
  return temps.some((v) => v !== null) ? temps : null;
};

export const getYesterdayDiff = (card, now = Date.now()) => {
  const temps = card?.yesterdayTemps;
  const nowTemp = Number(card?.current?.tempNum);
  if (!Array.isArray(temps) || !Number.isFinite(nowTemp)) return null;
  const before = temps[cityHour(card, now)];
  if (typeof before !== "number") return null;
  return Math.round(nowTemp - before);
};
