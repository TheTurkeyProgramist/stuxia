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
    if (!byDay[day]) byDay[day] = { clouds: [], visibility: [], pressure: [], humidity: [], dew: [], snow: [], freezing: [], soil: [] };
    const cloud = hourly.cloud_cover?.[i];
    const vis = hourly.visibility?.[i];
    if (typeof cloud === "number") byDay[day].clouds.push(cloud);
    if (typeof vis === "number") byDay[day].visibility.push(vis);
    const push = (list, v) => typeof v === "number" && list.push(v);
    push(byDay[day].pressure, hourly.pressure_msl?.[i]);
    push(byDay[day].humidity, hourly.relative_humidity_2m?.[i]);
    push(byDay[day].dew, hourly.dew_point_2m?.[i]);
    push(byDay[day].snow, hourly.snow_depth?.[i]);
    push(byDay[day].freezing, hourly.freezing_level_height?.[i]);
    push(byDay[day].soil, hourly.soil_temperature_0cm?.[i]);
  });

  const result = {};
  const avg1 = (list) => (list.length ? Math.round(average(list) * 10) / 10 : null);
  Object.entries(byDay).forEach(([day, { clouds, visibility, pressure, humidity, dew, snow, freezing, soil }]) => {
    const mean = average(clouds);
    result[day] = {
      pressureMean: avg1(pressure),
      humidityMean: humidity.length ? Math.round(average(humidity)) : null,
      dewPointMean: avg1(dew),
      snowDepthMax: snow.length ? Math.max(...snow) : null,
      freezingMean: freezing.length ? Math.round(average(freezing)) : null,
      soilMean: avg1(soil),
      cloudCoverMean: mean === null ? null : Math.round(mean),
      visibilityMin: visibility.length ? Math.min(...visibility) : null,
    };
  });
  return result;
};

// Туман: видимість менше 1 км або код погоди «туман» (45, 48)
export const isFoggy = (visibilityMin, weatherCode) =>
  weatherCode === 45 || weatherCode === 48 || (typeof visibilityMin === "number" && visibilityMin < 1000);
