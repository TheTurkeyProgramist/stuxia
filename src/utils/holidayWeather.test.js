import {
  orthodoxEaster,
  holidayPageRange,
  holidayPageYears,
  mergeHolidayPages,
  pickHolidayWeather,
  rankYearsByTemp,
  nextHolidayRefresh,
  isHolidayCacheFresh,
} from "./holidayWeather.js";

describe("оновлення кешу свят — лише після нового важливого дня + 5 діб", () => {
  test("наступний день оновлення", () => {
    expect(nextHolidayRefresh("2026-11-19")).toBe("2026-12-06"); // 1 грудня + 5
    expect(nextHolidayRefresh("2026-12-01")).toBe("2026-12-30"); // 25 грудня + 5
    expect(nextHolidayRefresh("2026-12-26")).toBe("2027-01-06"); // 1 січня + 5
    expect(nextHolidayRefresh("2027-01-01")).toBe("2027-01-12"); // 7 січня + 5
    expect(nextHolidayRefresh("2027-03-05")).toBe("2027-05-07"); // Великдень 2 травня + 5
  });

  test("свіжість кешу", () => {
    const raw = { at: Date.UTC(2026, 10, 24), lastDay: "2026-11-19", data: {} };
    expect(isHolidayCacheFresh(raw, new Date(2026, 11, 5, 12).getTime())).toBe(true);
    expect(isHolidayCacheFresh(raw, new Date(2026, 11, 6, 12).getTime())).toBe(false);
    // Щойно пробували — до завтра не смикаємо, навіть якщо день оновлення настав
    expect(isHolidayCacheFresh({ ...raw, at: new Date(2026, 11, 6, 10).getTime() }, new Date(2026, 11, 6, 12).getTime())).toBe(true);
    expect(isHolidayCacheFresh(null)).toBe(false);
  });
});

describe("погода на свята", () => {
  test("православний Великдень", () => {
    expect(orthodoxEaster(2023)).toBe("2023-04-16");
    expect(orthodoxEaster(2024)).toBe("2024-05-05");
    expect(orthodoxEaster(2025)).toBe("2025-04-20");
    expect(orthodoxEaster(2026)).toBe("2026-04-12");
  });

  test("сторінки по 10 років", () => {
    const today = new Date(2026, 10, 24);
    expect(holidayPageRange(0, today)).toEqual({ start: "2017-01-01", end: "2026-11-19" });
    expect(holidayPageRange(1, today)).toEqual({ start: "2007-01-01", end: "2016-12-31" });
    expect(holidayPageYears(8, today)).toEqual({ from: 1940, to: 1946 }); // архів з 1940
    expect(holidayPageYears(9, today)).toBeNull();
  });

  test("злиття сторінок без повторів, найновіші першими", () => {
    const p0 = { newYear: [{ year: 2026 }, { year: 2025 }] };
    const p1 = { newYear: [{ year: 2016 }, { year: 2025 }] };
    expect(mergeHolidayPages([p0, p1]).newYear.map((x) => x.year)).toEqual([2026, 2025, 2016]);
  });

  test("роки від найхолоднішого", () => {
    const list = [
      { year: 2024, tMax: 2, tMin: -4 },
      { year: 2023, tMax: 6, tMin: 0 },
      { year: 2022, tMax: -5, tMin: -11 },
    ];
    expect(rankYearsByTemp(list).map((x) => x.year)).toEqual([2022, 2024, 2023]);
  });

  test("бере лише дні свят, найновіші роки першими", () => {
    const time = ["2025-01-01", "2025-04-20", "2025-12-25", "2026-01-01", "2026-04-12", "2026-06-01"];
    const daily = {
      time,
      temperature_2m_max: [1, 15, -2, 3, 12, 25],
      temperature_2m_min: [-4, 5, -8, -1, 4, 15],
      precipitation_sum: [0, 2, 5, 0, 0, 0],
      snowfall_sum: [0, 0, 3.5, 0, 0, 0],
      weather_code: [3, 61, 73, 2, 1, 0],
    };
    const r = pickHolidayWeather(daily);
    expect(r.newYear.map((x) => x.year)).toEqual([2026, 2025]);
    expect(r.christmasDec).toEqual([{ year: 2025, date: "2025-12-25", tMax: -2, tMin: -8, precip: 5, snow: 3.5, code: 73 }]);
    expect(r.christmasJan).toEqual([]);
    expect(r.easter.map((x) => x.date)).toEqual(["2026-04-12", "2025-04-20"]);
  });

  test("порожні дані", () => {
    const empty = pickHolidayWeather({});
    expect(Object.keys(empty)).toHaveLength(8);
    expect(Object.values(empty).every((list) => list.length === 0)).toBe(true);
  });
});
