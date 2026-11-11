import {
  CONSENSUS_MODELS,
  blendWithConsensus,
  median,
  reconcileWeatherCode,
} from "./weatherConsensus";

const TIMES = ["2026-11-11T12:00", "2026-11-11T13:00"];

// Консенсус, де кожна модель має свої значення (функція від індексу моделі)
const makeConsensus = (hourlyByVar, dailyByVar = {}) => {
  const hourly = { time: TIMES };
  Object.entries(hourlyByVar).forEach(([variable, perModel]) => {
    CONSENSUS_MODELS.forEach((model, m) => {
      hourly[`${variable}_${model}`] = perModel(m);
    });
  });
  const daily = { time: ["2026-11-11"] };
  Object.entries(dailyByVar).forEach(([variable, perModel]) => {
    CONSENSUS_MODELS.forEach((model, m) => {
      daily[`${variable}_${model}`] = perModel(m);
    });
  });
  return { hourly, daily };
};

const primary = () => ({
  current: { time: "2026-11-11T12:30", temperature_2m: 10, wind_speed_10m: 3, wind_gusts_10m: 5, weather_code: 61 },
  hourly: {
    time: TIMES,
    temperature_2m: [10, 11],
    wind_speed_10m: [3, 3],
    wind_gusts_10m: [5, 5],
    precipitation: [1.2, 1.2],
    rain: [1.2, 1.2],
    cloud_cover: [100, 100],
    weather_code: [61, 61],
    precipitation_probability: [80, 80],
  },
  daily: {
    time: ["2026-11-11"],
    temperature_2m_max: [11],
    temperature_2m_min: [9],
    precipitation_sum: [5],
    rain_sum: [5],
    weather_code: [61],
  },
});

describe("median", () => {
  it("ignores missing values and handles even counts", () => {
    expect(median([3, null, 1, 2])).toBe(2);
    expect(median([1, 2, 3, 10])).toBe(2.5);
    expect(median([])).toBeNull();
  });
});

describe("blendWithConsensus", () => {
  it("returns primary untouched when consensus is missing", () => {
    const p = primary();
    const { data, accuracy } = blendWithConsensus(p, null);
    expect(data).toBe(p);
    expect(accuracy).toBeNull();
  });

  it("uses the median so one outlier model cannot drag the forecast", () => {
    // 6 моделей кажуть 4°, одна — 30°
    const c = makeConsensus({
      temperature_2m: (m) => (m === 0 ? [30, 30] : [4, 5]),
      precipitation: () => [1, 1],
    });
    const p = primary();
    const { data, accuracy } = blendWithConsensus(p, c);
    expect(data.hourly.temperature_2m).toEqual([4, 5]);
    expect(accuracy.models).toHaveLength(CONSENSUS_MODELS.length);
    // оригінал не змінено
    expect(p.hourly.temperature_2m).toEqual([10, 11]);
  });

  it("removes rain when most models are dry", () => {
    const c = makeConsensus({
      temperature_2m: () => [10, 10],
      precipitation: (m) => (m === 0 ? [2, 2] : [0, 0]),
      cloud_cover: () => [30, 30],
    });
    const { data } = blendWithConsensus(primary(), c);
    expect(data.hourly.precipitation).toEqual([0, 0]);
    expect(data.hourly.rain).toEqual([0, 0]);
    expect(data.hourly.weather_code).toEqual([1, 1]);
    expect(data.current.weather_code).toBe(1);
    // ймовірність: (80 + 1/7·100) / 2
    expect(data.hourly.precipitation_probability[0]).toBe(47);
  });

  it("keeps gusts not weaker than wind and keeps the daily max consistent", () => {
    const c = makeConsensus(
      {
        temperature_2m: () => [12, 13],
        wind_speed_10m: () => [8, 8],
        wind_gusts_10m: () => [6, 6],
      },
      { temperature_2m_max: () => [12.5], temperature_2m_min: () => [8] },
    );
    const { data } = blendWithConsensus(primary(), c);
    expect(data.hourly.wind_gusts_10m).toEqual([8, 8]);
    expect(data.daily.temperature_2m_max).toEqual([12.5]);
    expect(data.daily.temperature_2m_min).toEqual([8]);
  });

  it("blends the current value from interpolated models plus best_match", () => {
    const c = makeConsensus({ temperature_2m: () => [2, 4] });
    const { data, accuracy } = blendWithConsensus(primary(), c);
    // моделі на 12:30 → 3°, best_match каже 10°: медіана з 8 голосів = 3
    expect(data.current.temperature_2m).toBe(3);
    expect(accuracy.tempSpread).toBe(0);
  });

  it("falls back to best_match when fewer than 3 models have data", () => {
    const c = makeConsensus({ temperature_2m: (m) => (m < 2 ? [0, 0] : [null, null]) });
    const { data, accuracy } = blendWithConsensus(primary(), c);
    expect(data.hourly.temperature_2m).toEqual([10, 11]);
    expect(accuracy).toBeNull();
  });
});

describe("reconcileWeatherCode", () => {
  it("never removes a thunderstorm", () => {
    expect(reconcileWeatherCode(95, { wetShare: 0, precip: 0, cloud: 10 })).toBe(95);
  });
  it("adds snow when most models agree on precipitation below zero", () => {
    expect(reconcileWeatherCode(3, { wetShare: 0.86, precip: 0.6, cloud: 100, temp: -2 })).toBe(71);
  });
});
