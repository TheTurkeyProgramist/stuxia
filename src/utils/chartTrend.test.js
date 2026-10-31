import { linearTrend } from "./chartTrend";

describe("linearTrend", () => {
  it("returns exact line for linear data", () => {
    const trend = linearTrend([1, 3, 5, 7]);
    expect(trend.slope).toBeCloseTo(2);
    expect(trend.intercept).toBeCloseTo(1);
    expect(trend.data).toEqual([1, 3, 5, 7]);
  });

  it("skips NaN values but keeps output length", () => {
    const trend = linearTrend([0, NaN, 2, 3]);
    expect(trend.slope).toBeCloseTo(1);
    expect(trend.data).toHaveLength(4);
  });

  it("returns null when there are not enough points", () => {
    expect(linearTrend([5])).toBeNull();
    expect(linearTrend([])).toBeNull();
    expect(linearTrend(undefined)).toBeNull();
  });
});
