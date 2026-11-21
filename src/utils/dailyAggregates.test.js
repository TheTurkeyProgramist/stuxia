import { aggregateHourlyByDay, isFoggy } from "./dailyAggregates";

describe("aggregateHourlyByDay", () => {
  it("averages cloud cover and takes minimum visibility per day", () => {
    const result = aggregateHourlyByDay({
      time: ["2026-11-04T00:00", "2026-11-04T01:00", "2026-11-05T00:00"],
      cloud_cover: [40, 61, 100],
      visibility: [24000, 800, 15000],
    });
    expect(result["2026-11-04"]).toMatchObject({ cloudCoverMean: 51, visibilityMin: 800 });
    expect(result["2026-11-05"]).toMatchObject({ cloudCoverMean: 100, visibilityMin: 15000 });
  });

  it("averages pressure, humidity, dew point and soil, takes max snow depth", () => {
    const result = aggregateHourlyByDay({
      time: ["2026-11-04T00:00", "2026-11-04T01:00"],
      pressure_msl: [1000, 1010],
      relative_humidity_2m: [80, 91],
      dew_point_2m: [1, 2],
      snow_depth: [0.1, 0.3],
      freezing_level_height: [1000, 1500],
      soil_temperature_0cm: [3, 4],
    });
    expect(result["2026-11-04"]).toMatchObject({
      pressureMean: 1005,
      humidityMean: 86,
      dewPointMean: 1.5,
      snowDepthMax: 0.3,
      freezingMean: 1250,
      soilMean: 3.5,
    });
  });

  it("returns null values when data is missing", () => {
    const result = aggregateHourlyByDay({ time: ["2026-11-04T00:00"] });
    expect(result["2026-11-04"]).toMatchObject({ cloudCoverMean: null, visibilityMin: null, pressureMean: null });
  });
});

describe("isFoggy", () => {
  it("detects fog by visibility or weather code", () => {
    expect(isFoggy(800, 3)).toBe(true);
    expect(isFoggy(20000, 45)).toBe(true);
    expect(isFoggy(20000, 3)).toBe(false);
    expect(isFoggy(null, 3)).toBe(false);
  });
});
