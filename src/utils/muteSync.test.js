import {
  addPendingOp,
  applyPending,
  countForToday,
  getTodayKey,
  emptyPending,
} from "./muteSync";

describe("muteSync", () => {
  test("протилежна дія скасовує відкладену", () => {
    let p = addPendingOp(emptyPending(), "a", "mute");
    expect(p).toEqual({ mute: ["a"], unmute: [] });
    p = addPendingOp(p, "a", "unmute");
    expect(p).toEqual({ mute: [], unmute: ["a"] });
  });

  test("applyPending накладає локальні зміни на хмарний список", () => {
    const pending = { mute: ["c"], unmute: ["a"] };
    expect(applyPending(["a", "b"], pending)).toEqual(["b", "c"]);
    expect(applyPending(["a"], null)).toEqual(["a"]);
  });

  test("лічильник рахується лише за сьогодні і для того ж акаунта", () => {
    const today = getTodayKey();
    expect(countForToday({ date: today, count: 12, uid: "u1" }, "u1")).toBe(12);
    expect(countForToday({ date: today, count: 12, uid: "u2" }, "u1")).toBe(0);
    expect(countForToday({ date: "2000-01-01", count: 30 }, "u1")).toBe(0);
    expect(countForToday(null, "u1")).toBe(0);
  });
});
