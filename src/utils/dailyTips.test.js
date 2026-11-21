import { iceRiskMorning, carSnowTip, localNowKey } from "./dailyTips";
import { aqiLevelIndex, pollenLevel, parseAirQuality, buildAirQualityUrl } from "./airQuality";

// Години доби від 2026-11-21T12 до 2026-11-22T11 з типовими значеннями
const hours = (overrides = (i) => ({})) =>
  Array.from({ length: 24 }, (_, i) => {
    const t = new Date(Date.UTC(2026, 10, 21, 12 + i));
    const iso = t.toISOString().slice(0, 13) + ":00";
    return {
      fullTime: iso,
      time: iso.slice(11, 16),
      tempNum: 3,
      precipitation: 0,
      weather_code: 3,
      relative_humidity_2m: 60,
      cloud_cover: 90,
      snow_depth: 0,
      soil_temperature_0cm: 2,
      ...overrides(i, iso),
    };
  });

describe("iceRiskMorning", () => {
  const now = "2026-11-21T16";
  it("ясно й сухо — ожеледиці немає", () => {
    expect(iceRiskMorning(hours(), now).level).toBe("no");
  });
  it("мокро, а вранці мороз — дуже ймовірна", () => {
    const h = hours((i, iso) => ({ precipitation: i < 6 ? 0.5 : 0, tempNum: iso.slice(11, 13) <= "09" && iso.startsWith("2026-11-22") ? -2 : 2 }));
    expect(iceRiskMorning(h, now).level).toBe("likely");
  });
  it("крижаний дощ — ймовірна", () => {
    const h = hours((i) => (i === 16 ? { weather_code: 66 } : {}));
    expect(iceRiskMorning(h, now).level).toBe("likely");
  });
  it("біля нуля при високій вологості — можлива", () => {
    const h = hours((i, iso) => (iso.startsWith("2026-11-22") ? { tempNum: 0, relative_humidity_2m: 92 } : {}));
    expect(iceRiskMorning(h, now).level).toBe("possible");
  });
  it("без даних — null", () => {
    expect(iceRiskMorning([], now)).toBeNull();
  });
});

describe("carSnowTip", () => {
  const now = "2026-11-21T16";
  it("сніг із опадами — чистити", () => {
    const h = hours((i) => (i >= 4 && i < 10 ? { weather_code: 73, precipitation: 0.6, tempNum: -2 } : {}));
    const r = carSnowTip(h, { snow_depth: 0 }, now);
    expect(r.verdict).toBe("yes");
    expect(r.cm).toBeGreaterThanOrEqual(3);
  });
  it("мороз, волого й ясно — іній на склі", () => {
    const h = hours((i, iso) => (iso.startsWith("2026-11-22") ? { tempNum: -3, relative_humidity_2m: 90, cloud_cover: 20 } : {}));
    expect(carSnowTip(h, { snow_depth: 0 }, now).verdict).toBe("frost");
  });
  it("тепло й сухо — ні", () => {
    expect(carSnowTip(hours(), { snow_depth: 0 }, now).verdict).toBe("no");
  });
});

describe("localNowKey", () => {
  it("враховує зсув міста", () => {
    expect(localNowKey(7200, Date.UTC(2026, 10, 21, 14, 30))).toBe("2026-11-21T16");
  });
});

describe("airQuality", () => {
  it("рівні EAQI", () => {
    expect([10, 30, 50, 70, 90, 150].map(aqiLevelIndex)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(aqiLevelIndex(null)).toBeNull();
  });
  it("рівні пилку", () => {
    expect(pollenLevel("birch", 0)).toBe(0);
    expect(pollenLevel("birch", 5)).toBe(1);
    expect(pollenLevel("birch", 50)).toBe(2);
    expect(pollenLevel("birch", 500)).toBe(3);
  });
  it("розбирає відповідь і сортує пилок", () => {
    const r = parseAirQuality({ current: { european_aqi: 28, pm2_5: 6.7, pm10: 9.5, birch_pollen: 100, grass_pollen: 6, alder_pollen: 0 } });
    expect(r.level).toBe(1);
    expect(r.pollen.map((p) => p.type)).toEqual(["birch", "grass"]);
    expect(parseAirQuality({})).toBeNull();
  });
  it("адреса містить пилок", () => {
    expect(buildAirQualityUrl(50, 30)).toContain("birch_pollen");
  });
});
