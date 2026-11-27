import { groupDays, closestFrame, calendarWeeks, dayKey } from "./styxiaDays.js";

const at = (day, hour) => new Date(2026, 10, day, hour);

describe("дні шкали часу", () => {
  const dates = [at(26, 22), at(26, 23), at(27, 0), at(27, 3), at(27, 6), at(28, 0)];

  test("кадри групуються за місцевими датами", () => {
    expect(groupDays(dates).map((day) => day.frames)).toEqual([[0, 1], [2, 3, 4], [5]]);
  });

  test("година без кадру веде на найближчий кадр того ж дня", () => {
    const [, second] = groupDays(dates);
    expect(closestFrame(second, dates, 2)).toBe(3);
    expect(closestFrame(second, dates, 23)).toBe(4);
  });

  test("календар — повні тижні з понеділка", () => {
    const weeks = calendarWeeks(at(26, 22), new Date(2026, 11, 13, 9));
    expect(weeks).toHaveLength(3);
    expect(weeks[0][0].getDay()).toBe(1);
    expect(dayKey(weeks[0][0])).toBe("2026-11-23");
    expect(dayKey(weeks[2][6])).toBe("2026-12-13");
  });
});
