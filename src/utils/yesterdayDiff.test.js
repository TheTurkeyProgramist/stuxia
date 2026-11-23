import { buildYesterdayTemps, getYesterdayDiff } from "./yesterdayDiff.js";

const hourly = {
  time: Array.from({ length: 48 }, (_, i) => `${i < 24 ? "2026-11-22" : "2026-11-23"}T${String(i % 24).padStart(2, "0")}:00`),
  temperature_2m: Array.from({ length: 48 }, (_, i) => (i < 24 ? i - 5 : 100)),
};

describe("порівняно з учора", () => {
  test("бере лише вчорашню добу за годинами", () => {
    const temps = buildYesterdayTemps(hourly, "2026-11-22");
    expect(temps[0]).toBe(-5);
    expect(temps[15]).toBe(10);
  });
  test("різниця з учорашньою годиною міста", () => {
    const temps = buildYesterdayTemps(hourly, "2026-11-22");
    // 15:00 UTC, зсув 0 → вчора о 15:00 було +10
    const now = Date.UTC(2026, 10, 23, 15, 0);
    expect(getYesterdayDiff({ yesterdayTemps: temps, utcOffsetSeconds: 0, current: { tempNum: 14 } }, now)).toBe(4);
    expect(getYesterdayDiff({ yesterdayTemps: temps, utcOffsetSeconds: 0, current: { tempNum: 7 } }, now)).toBe(-3);
  });
  test("без даних — null", () => {
    expect(buildYesterdayTemps({}, "2026-11-22")).toBeNull();
    expect(getYesterdayDiff({ current: { tempNum: 3 } })).toBeNull();
  });
});
