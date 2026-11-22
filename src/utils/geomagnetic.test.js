import { kpLevel, parseKpForecast, parseOutlook, summarizeKp } from "./geomagnetic";

const OUTLOOK = `:Product: 27-day Space Weather Outlook Table 27DO.txt
#   UTC      Radio Flux   Planetary   Largest
#  Date       10.7 cm      A Index    Kp Index
2026 Nov 22     95           8          3
2026 Nov 23     95           5          2
2026 Nov 27    110          25          5
`;

describe("geomagnetic", () => {
  it("рівні за шкалою NOAA", () => {
    expect([2, 4, 4.67, 5, 6, 7, 8, 9].map(kpLevel)).toEqual([0, 1, 1, 2, 3, 4, 5, 6]);
    expect(kpLevel(NaN)).toBe(null);
  });

  it("парсить обидва формати JSON", () => {
    const objects = parseKpForecast([{ time_tag: "2026-11-22T03:00:00", kp: 2.33, observed: "observed" }]);
    const arrays = parseKpForecast([
      ["time_tag", "kp", "observed", "noaa_scale"],
      ["2026-11-22 03:00:00", "2.33", "observed", null],
    ]);
    expect(objects).toEqual([{ time: "2026-11-22T03:00Z", kp: 2.33, kind: "observed" }]);
    expect(arrays).toEqual(objects);
  });

  it("парсить 27-денний прогноз", () => {
    expect(parseOutlook(OUTLOOK)).toEqual([
      { date: "2026-11-22", ap: 8, kpMax: 3 },
      { date: "2026-11-23", ap: 5, kpMax: 2 },
      { date: "2026-11-27", ap: 25, kpMax: 5 },
    ]);
  });

  it("зведення: поточний Kp, максимум за добу і найближча буря", () => {
    const series = parseKpForecast([
      { time_tag: "2026-11-21T21:00:00", kp: 6, observed: "observed" },
      { time_tag: "2026-11-22T09:00:00", kp: 3, observed: "estimated" },
      { time_tag: "2026-11-22T12:00:00", kp: 4.33, observed: "predicted" },
      { time_tag: "2026-11-23T00:00:00", kp: 2, observed: "predicted" },
    ]);
    const s = summarizeKp(series, parseOutlook(OUTLOOK), Date.parse("2026-11-22T10:00:00Z"));
    expect(s.current).toMatchObject({ kp: 3, level: 0, kind: "estimated" });
    expect(s.days.map((d) => [d.date, d.kp])).toEqual([
      ["2026-11-22", 4.3],
      ["2026-11-23", 2],
      ["2026-11-27", 5],
    ]);
    expect(s.nextStorm).toEqual({ date: "2026-11-27", kp: 5, level: 2 });
  });

  it("порожні дані не ламають зведення", () => {
    expect(summarizeKp([], [])).toEqual({ current: null, today: null, days: [], nextStorm: null });
  });
});
