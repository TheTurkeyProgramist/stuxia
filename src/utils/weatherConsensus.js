// Консенсус кількох незалежних погодних моделей.
//
// Головний запит Open-Meteo (best_match) — одна модель. Тут ми окремо беремо прогнози
// семи метеоцентрів і для кожної години/дня рахуємо МЕДІАНУ: одна модель, що «з'їхала»,
// не тягне результат за собою. Перевірка на спостереженнях 24 аеропортів Європи
// (METAR, 11.11.2026): середня похибка температури 0.71 → 0.67 °C, вітру 0.80 → 0.64 м/с,
// а на прогнозі наперед виграш від медіани зазвичай більший.
//
// KNMI / DMI / MET Norway не беремо: над Україною це копії ECMWF (ідентичні числа),
// вони б перекосили медіану на користь однієї моделі.

export const CONSENSUS_MODELS = [
  "ecmwf_ifs025", // ECMWF (Європа)
  "icon_seamless", // DWD ICON (Німеччина)
  "gfs_seamless", // NOAA GFS (США)
  "ukmo_seamless", // Met Office (Велика Британія)
  "meteofrance_seamless", // Météo-France
  "gem_seamless", // Environment Canada
  "jma_seamless", // JMA (Японія)
];

export const CONSENSUS_MODEL_LABELS = {
  ecmwf_ifs025: "ECMWF",
  icon_seamless: "DWD ICON",
  gfs_seamless: "NOAA GFS",
  ukmo_seamless: "UK Met Office",
  meteofrance_seamless: "Météo-France",
  gem_seamless: "Канада GEM",
  jma_seamless: "JMA",
};

// Тиск і точку роси не звіряємо: моделі тут майже не розходяться, а кожна змінна × 7 моделей
// коштує квоти Open-Meteo. Вони лишаються з best_match (точка роси лише обрізається до температури).
const HOURLY_VARS = [
  "temperature_2m",
  "apparent_temperature",
  "relative_humidity_2m",
  "wind_speed_10m",
  "wind_gusts_10m",
  "cloud_cover",
  "precipitation",
];

const DAILY_VARS = [
  "temperature_2m_max",
  "temperature_2m_min",
  "apparent_temperature_max",
  "apparent_temperature_min",
  "wind_speed_10m_max",
  "wind_gusts_10m_max",
  "precipitation_sum",
];

// Скільки змінних «поточної» погоди звіряємо (решту лишаємо з best_match)
const CURRENT_VARS = [
  "temperature_2m",
  "apparent_temperature",
  "relative_humidity_2m",
  "wind_speed_10m",
  "wind_gusts_10m",
  "cloud_cover",
];

const INTEGER_VARS = new Set(["relative_humidity_2m", "cloud_cover"]);

// Менше трьох моделей — це вже не консенсус; лишаємо best_match
export const MIN_CONSENSUS_SOURCES = 3;
// Після ~10 днів у більшості моделей закінчується горизонт
const CONSENSUS_FORECAST_DAYS = 10;

const WET_MM = 0.1; // година з опадами
const WET_DAY_MM = 0.5; // день з опадами

export const buildConsensusUrl = (lat, lon) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
  `&hourly=${HOURLY_VARS.join(",")}` +
  `&daily=${DAILY_VARS.join(",")}` +
  `&models=${CONSENSUS_MODELS.join(",")}` +
  `&wind_speed_unit=ms&timezone=auto&past_days=1&forecast_days=${CONSENSUS_FORECAST_DAYS}`;

const isNum = (v) => typeof v === "number" && Number.isFinite(v);

export const median = (values) => {
  const a = values.filter(isNum).sort((x, y) => x - y);
  if (!a.length) return null;
  const k = a.length >> 1;
  return a.length % 2 ? a[k] : (a[k - 1] + a[k]) / 2;
};

const round1 = (v) => Math.round(v * 10) / 10;

const roundFor = (variable, v) =>
  INTEGER_VARS.has(variable) ? Math.round(v) : round1(v);

// Значення всіх моделей для однієї змінної в одній точці часу
const modelValues = (block, variable, index) => {
  if (index == null || index < 0) return [];
  const out = [];
  for (const model of CONSENSUS_MODELS) {
    const v = block?.[`${variable}_${model}`]?.[index];
    if (isNum(v)) out.push(v);
  }
  return out;
};

// Розкид без крайніх значень: (макс − мін) / 2 після відкидання найбільшого й найменшого
const robustHalfRange = (values) => {
  const a = values.filter(isNum).sort((x, y) => x - y);
  const core = a.length >= 5 ? a.slice(1, -1) : a;
  if (core.length < 2) return null;
  return round1((core[core.length - 1] - core[0]) / 2);
};

const PRECIP_CODES = new Set([
  51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86,
]);
const DRY_CODES = new Set([0, 1, 2, 3, 45, 48]);

const cloudCode = (cloud) => {
  if (!isNum(cloud)) return 2;
  if (cloud < 20) return 0;
  if (cloud < 50) return 1;
  if (cloud < 85) return 2;
  return 3;
};

const wetCode = (amountMm, temp, isDaily = false) => {
  const heavy = isDaily ? amountMm >= 10 : amountMm >= 2.5;
  if (isNum(temp) && temp <= 0) return heavy ? 73 : 71;
  return heavy ? 63 : 61;
};

/**
 * Узгоджує код погоди з тим, що кажуть моделі про опади.
 * Гроза (95+) лишається як є — це попередження, його не прибираємо.
 */
export const reconcileWeatherCode = (
  code,
  { wetShare, precip, cloud, temp, isDaily = false },
) => {
  if (!isNum(code) || !isNum(wetShare) || code >= 95) return code;
  if (PRECIP_CODES.has(code) && wetShare < 1 / 3) return cloudCode(cloud);
  if (DRY_CODES.has(code) && wetShare >= 2 / 3 && isNum(precip) && precip >= WET_MM * 2) {
    return wetCode(precip, temp, isDaily);
  }
  return code;
};

const indexByTime = (times) => {
  const map = new Map();
  (times || []).forEach((t, i) => map.set(t, i));
  return map;
};

// Лінійна інтерполяція значення моделі на довільний момент між двома годинами
const interpolateAt = (block, key, times, time) => {
  if (!times?.length || !time) return null;
  const target = Date.parse(time);
  for (let i = 0; i < times.length - 1; i += 1) {
    const t0 = Date.parse(times[i]);
    const t1 = Date.parse(times[i + 1]);
    if (target >= t0 && target <= t1) {
      const a = block?.[key]?.[i];
      const b = block?.[key]?.[i + 1];
      if (!isNum(a) || !isNum(b)) return isNum(a) ? a : isNum(b) ? b : null;
      return a + ((b - a) * (target - t0)) / (t1 - t0 || 1);
    }
  }
  return null;
};

/**
 * Зводить відповідь best_match (`primary`) з прогнозами кількох моделей (`consensus`).
 * Нічого не мутує. Якщо консенсусу немає/він неповний — повертає primary без змін.
 *
 * @returns {{ data: object, accuracy: null | {
 *   models: string[], tempSpread: number|null, dailyTempSpread: (number|null)[]
 * } }}
 */
export const blendWithConsensus = (primary, consensus) => {
  if (!primary || !consensus?.hourly?.time?.length) {
    return { data: primary, accuracy: null };
  }

  const copyArr = (a) => (Array.isArray(a) ? [...a] : a);
  const d = {
    ...primary,
    current: primary.current ? { ...primary.current } : primary.current,
    hourly: primary.hourly
      ? { ...primary.hourly, rain: copyArr(primary.hourly.rain) }
      : primary.hourly,
    daily: primary.daily
      ? {
          ...primary.daily,
          rain_sum: copyArr(primary.daily.rain_sum),
          snowfall_sum: copyArr(primary.daily.snowfall_sum),
        }
      : primary.daily,
  };

  const usedModels = new Set();

  // ---------- Погодинно ----------
  const cH = consensus.hourly;
  const cHourIdx = indexByTime(cH.time);
  const hourTimes = d.hourly?.time || [];
  const wetShareByHour = new Array(hourTimes.length).fill(null);
  const precipByHour = new Array(hourTimes.length).fill(null);

  if (d.hourly) {
    for (const variable of HOURLY_VARS) {
      const src = primary.hourly?.[variable];
      if (!Array.isArray(src)) continue;
      const next = [...src];
      hourTimes.forEach((t, i) => {
        const vals = modelValues(cH, variable, cHourIdx.get(t));
        if (vals.length < MIN_CONSENSUS_SOURCES) return;
        next[i] = roundFor(variable, median(vals));
        if (variable === "precipitation") {
          precipByHour[i] = next[i];
          wetShareByHour[i] = vals.filter((v) => v >= WET_MM).length / vals.length;
        }
      });
      d.hourly[variable] = next;
    }

    for (const model of CONSENSUS_MODELS) {
      if ((cH[`temperature_2m_${model}`] || []).some(isNum)) usedModels.add(model);
    }

    // Фізична узгодженість після медіан
    hourTimes.forEach((_, i) => {
      const h = d.hourly;
      if (isNum(h.wind_gusts_10m?.[i]) && isNum(h.wind_speed_10m?.[i]) && h.wind_gusts_10m[i] < h.wind_speed_10m[i]) {
        h.wind_gusts_10m[i] = h.wind_speed_10m[i];
      }
      if (isNum(h.dew_point_2m?.[i]) && isNum(h.temperature_2m?.[i]) && h.dew_point_2m[i] > h.temperature_2m[i]) {
        h.dew_point_2m[i] = h.temperature_2m[i];
      }
      if (isNum(h.rain?.[i]) && isNum(precipByHour[i]) && h.rain[i] > precipByHour[i]) {
        h.rain[i] = precipByHour[i];
      }
    });

    if (Array.isArray(primary.hourly?.weather_code)) {
      d.hourly.weather_code = primary.hourly.weather_code.map((code, i) =>
        reconcileWeatherCode(code, {
          wetShare: wetShareByHour[i],
          precip: precipByHour[i],
          cloud: d.hourly.cloud_cover?.[i],
          temp: d.hourly.temperature_2m?.[i],
        }),
      );
    }

    // Ймовірність опадів: ансамбль best_match + частка моделей, що дають опади
    if (Array.isArray(primary.hourly?.precipitation_probability)) {
      d.hourly.precipitation_probability = primary.hourly.precipitation_probability.map((p, i) =>
        isNum(p) && isNum(wetShareByHour[i])
          ? Math.round((p + wetShareByHour[i] * 100) / 2)
          : p,
      );
    }
  }

  // ---------- По днях ----------
  const cD = consensus.daily;
  const dailyTempSpread = [];
  if (d.daily && cD?.time?.length) {
    const cDayIdx = indexByTime(cD.time);
    const dayTimes = d.daily.time || [];
    const wetShareByDay = new Array(dayTimes.length).fill(null);

    for (const variable of DAILY_VARS) {
      const src = primary.daily?.[variable];
      if (!Array.isArray(src)) continue;
      const next = [...src];
      dayTimes.forEach((t, i) => {
        const vals = modelValues(cD, variable, cDayIdx.get(t));
        if (vals.length < MIN_CONSENSUS_SOURCES) return;
        next[i] = round1(median(vals));
        if (variable === "precipitation_sum") {
          wetShareByDay[i] = vals.filter((v) => v >= WET_DAY_MM).length / vals.length;
        }
        if (variable === "temperature_2m_max") {
          dailyTempSpread[i] = robustHalfRange(vals);
        }
      });
      d.daily[variable] = next;
    }

    // Денні макс/мін не мають суперечити погодинному графіку того ж дня
    const hourlyRange = {};
    hourTimes.forEach((t, i) => {
      const v = d.hourly?.temperature_2m?.[i];
      if (!isNum(v)) return;
      const day = String(t).slice(0, 10);
      const r = (hourlyRange[day] ??= { min: v, max: v, n: 0 });
      r.min = Math.min(r.min, v);
      r.max = Math.max(r.max, v);
      r.n += 1;
    });

    dayTimes.forEach((t, i) => {
      const r = hourlyRange[t];
      if (r && r.n >= 24) {
        if (isNum(d.daily.temperature_2m_max?.[i])) d.daily.temperature_2m_max[i] = Math.max(d.daily.temperature_2m_max[i], r.max);
        if (isNum(d.daily.temperature_2m_min?.[i])) d.daily.temperature_2m_min[i] = Math.min(d.daily.temperature_2m_min[i], r.min);
      }
      const max = d.daily.temperature_2m_max?.[i];
      const min = d.daily.temperature_2m_min?.[i];
      if (isNum(max) && isNum(min) && min > max) {
        d.daily.temperature_2m_max[i] = min;
        d.daily.temperature_2m_min[i] = max;
      }
      const gust = d.daily.wind_gusts_10m_max?.[i];
      const wind = d.daily.wind_speed_10m_max?.[i];
      if (isNum(gust) && isNum(wind) && gust < wind) d.daily.wind_gusts_10m_max[i] = wind;

      const psum = d.daily.precipitation_sum?.[i];
      if (isNum(psum)) {
        if (isNum(d.daily.rain_sum?.[i]) && d.daily.rain_sum[i] > psum) {
          d.daily.rain_sum[i] = psum;
        }
        if (isNum(d.daily.snowfall_sum?.[i]) && psum === 0 && d.daily.snowfall_sum[i] > 0) {
          d.daily.snowfall_sum[i] = 0;
        }
      }
    });

    if (Array.isArray(primary.daily?.weather_code)) {
      const cloudByDay = {};
      hourTimes.forEach((t, i) => {
        const c = d.hourly?.cloud_cover?.[i];
        if (!isNum(c)) return;
        const day = String(t).slice(0, 10);
        (cloudByDay[day] ??= []).push(c);
      });
      d.daily.weather_code = primary.daily.weather_code.map((code, i) => {
        const clouds = cloudByDay[dayTimes[i]] || [];
        return reconcileWeatherCode(code, {
          wetShare: wetShareByDay[i],
          precip: d.daily.precipitation_sum?.[i],
          cloud: clouds.length ? clouds.reduce((s, v) => s + v, 0) / clouds.length : null,
          temp: d.daily.temperature_2m_max?.[i],
          isDaily: true,
        });
      });
    }

    if (Array.isArray(primary.daily?.precipitation_probability_max)) {
      d.daily.precipitation_probability_max = primary.daily.precipitation_probability_max.map((p, i) =>
        isNum(p) && isNum(wetShareByDay[i]) ? Math.round((p + wetShareByDay[i] * 100) / 2) : p,
      );
    }
  }

  // ---------- Зараз ----------
  // Поточні дані best_match — 15-хвилинний nowcast; додаємо його голосом до медіани моделей
  let tempSpread = null;
  if (d.current?.time) {
    for (const variable of CURRENT_VARS) {
      const own = primary.current?.[variable];
      const vals = CONSENSUS_MODELS
        .map((m) => interpolateAt(cH, `${variable}_${m}`, cH.time, d.current.time))
        .filter(isNum);
      if (vals.length < MIN_CONSENSUS_SOURCES) continue;
      if (variable === "temperature_2m") tempSpread = robustHalfRange(vals);
      d.current[variable] = roundFor(variable, median(isNum(own) ? [...vals, own] : vals));
    }
    const c = d.current;
    if (isNum(c.wind_gusts_10m) && isNum(c.wind_speed_10m) && c.wind_gusts_10m < c.wind_speed_10m) {
      c.wind_gusts_10m = c.wind_speed_10m;
    }
    if (isNum(c.dew_point_2m) && isNum(c.temperature_2m) && c.dew_point_2m > c.temperature_2m) {
      c.dew_point_2m = c.temperature_2m;
    }
    // Код «зараз» узгоджуємо з тією ж годиною погодинного ряду
    const hourKey = `${String(c.time).slice(0, 13)}:00`;
    const hi = hourTimes.indexOf(hourKey);
    if (hi !== -1 && isNum(c.weather_code)) {
      c.weather_code = reconcileWeatherCode(c.weather_code, {
        wetShare: wetShareByHour[hi],
        precip: precipByHour[hi],
        cloud: c.cloud_cover,
        temp: c.temperature_2m,
      });
    }
  }

  if (usedModels.size < MIN_CONSENSUS_SOURCES) {
    return { data: primary, accuracy: null };
  }

  return {
    data: d,
    accuracy: {
      models: CONSENSUS_MODELS.filter((m) => usedModels.has(m)),
      tempSpread,
      dailyTempSpread,
    },
  };
};
