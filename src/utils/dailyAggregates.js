// Денні показники, яких немає в daily-відповіді Open-Meteo, рахуємо з погодинних:
// середня хмарність і найгірша видимість за кожен день.

const average = (values) =>
  values.length ? values.reduce((sum, v) => sum + v, 0) / values.length : null;

/**
 * @param {{ time?: string[], cloud_cover?: number[], visibility?: number[] }} hourly — сирий hourly з Open-Meteo
 * @returns {Record<string, { cloudCoverMean: number|null, visibilityMin: number|null }>} ключ — "YYYY-MM-DD"
 */
export const aggregateHourlyByDay = (hourly) => {
  const byDay = {};
  (hourly?.time || []).forEach((time, i) => {
    const day = String(time).slice(0, 10);
    if (!byDay[day]) byDay[day] = { clouds: [], visibility: [] };
    const cloud = hourly.cloud_cover?.[i];
    const vis = hourly.visibility?.[i];
    if (typeof cloud === "number") byDay[day].clouds.push(cloud);
    if (typeof vis === "number") byDay[day].visibility.push(vis);
  });

  const result = {};
  Object.entries(byDay).forEach(([day, { clouds, visibility }]) => {
    const mean = average(clouds);
    result[day] = {
      cloudCoverMean: mean === null ? null : Math.round(mean),
      visibilityMin: visibility.length ? Math.min(...visibility) : null,
    };
  });
  return result;
};

// Туман: видимість менше 1 км або код погоди «туман» (45, 48)
export const isFoggy = (visibilityMin, weatherCode) =>
  weatherCode === 45 || weatherCode === 48 || (typeof visibilityMin === "number" && visibilityMin < 1000);
