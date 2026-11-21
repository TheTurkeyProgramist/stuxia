import { aggregateMonths, archiveRange, buildArchiveUrl, estimateUvMax, dayLengthSeconds } from "./weatherArchive.js";

describe("weatherArchive", () => {
  test("межі запиту: 14 місяців, кінець з відступом", () => {
    const { start, end } = archiveRange(new Date(2026, 10, 21));
    expect(start).toBe("2025-10-01");
    expect(end).toBe("2026-11-18");
  });

  test("адреса архіву містить координати й змінні", () => {
    const url = buildArchiveUrl(51.24, 33.2, new Date(2026, 10, 21));
    expect(url).toContain("archive-api.open-meteo.com/v1/archive");
    expect(url).toContain("latitude=51.24&longitude=33.2");
    expect(url).toContain("cloud_cover_mean");
  });

  test("агрегація по місяцях", () => {
    const daily = {
      time: ["2026-01-30", "2026-01-31", "2026-02-01"],
      temperature_2m_max: [2, 4, 10],
      temperature_2m_min: [-4, -2, 0],
      precipitation_sum: [3, 0, 5],
      rain_sum: [1, 0, 5],
      cloud_cover_mean: [80, 60, 20],
      wind_speed_10m_mean: [2, 4, 3],
      relative_humidity_2m_mean: [90, 80, 70],
      pressure_msl_mean: [1000, 1010, 1020],
    };
    const [jan, feb] = aggregateMonths(daily);
    expect(jan.key).toBe("2026-01");
    expect(jan.days).toBe(2);
    expect(jan.tMax).toBe(3);
    expect(jan.tMin).toBe(-3);
    expect(jan.tAbsMin).toBe(-4);
    expect(jan.precip).toBe(3);
    expect(jan.rain).toBe(1);
    expect(jan.snow).toBe(2);
    expect(jan.wetDays).toBe(1);
    expect(jan.cloud).toBe(70);
    expect(jan.humidity).toBe(85);
    expect(jan.pressure).toBe(1005);
    expect(feb.snow).toBe(0);
  });

  test("оцінка УФ за радіацією: літо Києва ≈ 8, зима близько нуля", () => {
    const summer = estimateUvMax(28.9, 51.2, "2026-07-01");
    expect(summer).toBeGreaterThan(6);
    expect(summer).toBeLessThan(10);
    expect(estimateUvMax(1.5, 51.2, "2026-12-21")).toBeLessThan(1);
    expect(estimateUvMax(null, 51.2, "2026-07-01")).toBeNull();
    expect(dayLengthSeconds(51.2, "2026-06-21") / 3600).toBeGreaterThan(16);
    expect(dayLengthSeconds(80, "2026-12-21")).toBe(0);
  });

  test("пропуски (null) не ламають середні", () => {
    const [m] = aggregateMonths({
      time: ["2026-03-01", "2026-03-02"],
      temperature_2m_max: [null, 6],
      temperature_2m_min: [null, null],
      precipitation_sum: [null, null],
      rain_sum: [null, null],
      cloud_cover_mean: [null, null],
      wind_speed_10m_mean: [null, null],
    });
    expect(m.tMax).toBe(6);
    expect(m.tMin).toBeNull();
    expect(m.precip).toBeNull();
    expect(m.snow).toBeNull();
  });
});
