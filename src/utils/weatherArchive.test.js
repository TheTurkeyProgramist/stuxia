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

describe("рекорди архіву", () => {
  test("найспекотніший, найхолодніший день і найдощовіший повний місяць", async () => {
    const { aggregateMonths, getArchiveRecords } = await import("./weatherArchive.js");
    const time = [];
    const tmax = [];
    const tmin = [];
    const pr = [];
    for (let d = 1; d <= 31; d++) { time.push(`2026-07-${String(d).padStart(2, "0")}`); tmax.push(d === 10 ? 35 : 25); tmin.push(15); pr.push(1); }
    for (let d = 1; d <= 28; d++) { time.push(`2026-02-${String(d).padStart(2, "0")}`); tmax.push(0); tmin.push(d === 3 ? -20 : -5); pr.push(0.5); }
    for (let d = 1; d <= 5; d++) { time.push(`2026-08-0${d}`); tmax.push(20); tmin.push(10); pr.push(50); }
    const months = aggregateMonths({ time, temperature_2m_max: tmax, temperature_2m_min: tmin, precipitation_sum: pr });
    const r = getArchiveRecords(months);
    expect(r.hottest).toEqual({ value: 35, day: "2026-07-10" });
    expect(r.coldest).toEqual({ value: -20, day: "2026-02-03" });
    expect(r.wettest.month).toBe(7); // серпень неповний — не рахується
    expect(getArchiveRecords([])).toBeNull();
  });
});

test("без опадів плитки «найдощовіший місяць» немає", async () => {
  const { getArchiveRecords } = await import("./weatherArchive.js");
  const r = getArchiveRecords([{ year: 2025, month: 10, days: 31, precip: 0, tAbsMax: 10, tAbsMaxDay: "2025-10-01", tAbsMin: 1, tAbsMinDay: "2025-10-02" }]);
  expect(r.wettest).toBeNull();
});
