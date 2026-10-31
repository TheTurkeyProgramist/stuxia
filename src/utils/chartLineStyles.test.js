import { DEFAULT_LINE_STYLES, mergeLineStyles, lineStyleProps } from "./chartLineStyles";

describe("mergeLineStyles", () => {
  it("returns defaults when nothing is saved", () => {
    expect(mergeLineStyles(null)).toEqual(DEFAULT_LINE_STYLES);
  });

  it("keeps saved values and fills missing lines with defaults", () => {
    const merged = mergeLineStyles({ daily: { day: { dash: "dotted", width: 5 } } });
    expect(merged.daily.day).toMatchObject({ dash: "dotted", width: 5, curve: "smooth" });
    expect(merged.daily.night).toEqual(DEFAULT_LINE_STYLES.daily.night);
    expect(merged.hourly).toEqual(DEFAULT_LINE_STYLES.hourly);
  });

  it("replaces invalid values with defaults and clamps width", () => {
    const merged = mergeLineStyles({ hourly: { temp: { curve: "zigzag", dash: "???", width: 99 } } });
    expect(merged.hourly.temp.curve).toBe("smooth");
    expect(merged.hourly.temp.dash).toBe("solid");
    expect(merged.hourly.temp.width).toBe(8);
  });

  it("clamps dimOpacity and adds it to old saved styles", () => {
    const merged = mergeLineStyles({ daily: { day: { dimOpacity: 5 }, night: { dimOpacity: -1 }, right: { width: 2 } } });
    expect(merged.daily.day.dimOpacity).toBe(0.9);
    expect(merged.daily.night.dimOpacity).toBe(0);
    expect(merged.daily.right.dimOpacity).toBe(0.3);
    expect(merged.daily.trendDay.dimOpacity).toBeUndefined();
  });
});

describe("lineStyleProps", () => {
  it("maps curve and dash to chart.js props", () => {
    const base = { curve: "smooth", dash: "solid", width: 3, fill: false, points: true };
    expect(lineStyleProps(base, { tension: 0.3 })).toMatchObject({ tension: 0.3, borderDash: [], borderWidth: 3 });
    expect(lineStyleProps({ ...base, curve: "straight" })).toMatchObject({ tension: 0 });
    expect(lineStyleProps({ ...base, curve: "stepped" })).toMatchObject({ tension: 0, stepped: "middle" });
    expect(lineStyleProps({ ...base, curve: "monotone" })).toMatchObject({ cubicInterpolationMode: "monotone" });
    expect(lineStyleProps({ ...base, dash: "dotted" })).toMatchObject({ borderDash: [1, 6], borderCapStyle: "round" });
  });

  it("uses automatic fill when fill is null", () => {
    expect(lineStyleProps({ fill: null }, { fill: true }).fill).toBe(true);
    expect(lineStyleProps({ fill: false }, { fill: true }).fill).toBe(false);
  });

  it("hides points including hover when points are off", () => {
    expect(lineStyleProps({ points: false }, { pointRadius: 12 })).toMatchObject({ pointRadius: 0, pointHoverRadius: 0 });
    expect(lineStyleProps({ points: true }, { pointRadius: 12 })).toMatchObject({ pointRadius: 12 });
  });

  it("does not touch curve/fill/points for trend lines", () => {
    const props = lineStyleProps({ dash: "dashed", width: 2 }, { pointRadius: 0 });
    expect(props).toEqual({ borderWidth: 2, borderDash: [8, 5], borderCapStyle: "butt" });
  });
});
