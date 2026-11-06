import { aggregateHourlyByDay, isFoggy } from "./dailyAggregates";

describe("aggregateHourlyByDay", () => {
  it("averages cloud cover and takes minimum visibility per day", () => {
    const result = aggregateHourlyByDay({
      time: ["2026-11-04T00:00", "2026-11-04T01:00", "2026-11-05T00:00"],
      cloud_cover: [40, 61, 100],
      visibility: [24000, 800, 15000],
    });
    expect(result["2026-11-04"]).toEqual({ cloudCoverMean: 51, visibilityMin: 800 });
    expect(result["2026-11-05"]).toEqual({ cloudCoverMean: 100, visibilityMin: 15000 });
  });

  it("returns null values when data is missing", () => {
    const result = aggregateHourlyByDay({ time: ["2026-11-04T00:00"] });
    expect(result["2026-11-04"]).toEqual({ cloudCoverMean: null, visibilityMin: null });
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
