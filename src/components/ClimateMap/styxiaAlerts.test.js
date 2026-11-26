import { REGION_NAMES, regionsWithAlerts, alertSummary, sinceLabel, durationMinutes, alertLabels, regionLabelPoint } from "./styxiaAlerts.js";

const regions = {
  features: [
    { type: "Feature", properties: { iso: "UA-32", name: "Kyiv Oblast" }, geometry: null },
    { type: "Feature", properties: { iso: "UA-46", name: "Lviv Oblast" }, geometry: null },
    { type: "Feature", properties: { iso: "UA-43", name: "Crimea" }, geometry: null },
  ],
};
const states = {
  "Київська область": { alertnow: true, changed: "2026-11-26 14:58:20" },
  "Львівська область": { alertnow: false, changed: "2026-11-26 15:21:34" },
};

describe("тривоги на карті", () => {
  test("області отримують стан: тривога, спокій або «немає даних»", () => {
    const [kyiv, lviv, crimea] = regionsWithAlerts(regions, states).features.map((f) => f.properties);
    expect(kyiv).toMatchObject({ name: "Київська область", alert: true, since: "2026-11-26 14:58:20" });
    expect(lviv.alert).toBe(false);
    expect(crimea.alert).toBe(null);
  });

  test("підсумок рахує лише області з даними", () => {
    expect(alertSummary(states)).toEqual({ total: 2, active: 1 });
    expect(alertSummary(undefined)).toEqual({ total: 0, active: 0 });
  });

  test("час початку: сьогодні — година, раніше — дата", () => {
    expect(sinceLabel("2026-11-26 14:58:20", "2026-11-26 15:21:03")).toBe("14:58");
    expect(sinceLabel("2022-12-11 00:22:00", "2026-11-26 15:21:03")).toBe("11.12.2022");
    expect(sinceLabel("", "")).toBe("");
  });

  test("тривалість тривоги в хвилинах", () => {
    expect(durationMinutes("2026-11-26 14:58:20", "2026-11-26 15:34:03")).toBe(36);
    expect(durationMinutes("2026-11-25 23:00:00", "2026-11-26 01:30:00")).toBe(150);
    expect(durationMinutes("", "2026-11-26 01:30:00")).toBe(null);
  });

  test("центр області — всередині найбільшої частини", () => {
    const square = (x, y, size) => [[[x, y], [x + size, y], [x + size, y + size], [x, y + size], [x, y]]];
    const point = regionLabelPoint({ type: "MultiPolygon", coordinates: [square(0, 0, 1), square(10, 10, 4)] });
    expect(point[0]).toBeCloseTo(12, 5);
    expect(point[1]).toBeCloseTo(12, 5);
  });

  test("підписи є лише в областей із тривогою, а тривала (з 2022-го) позначена окремо", () => {
    const geometry = { type: "Polygon", coordinates: [[[0, 0], [2, 0], [2, 2], [0, 2], [0, 0]]] };
    const withGeometry = {
      features: [
        { type: "Feature", properties: { iso: "UA-32" }, geometry },
        { type: "Feature", properties: { iso: "UA-46" }, geometry },
        { type: "Feature", properties: { iso: "UA-09" }, geometry },
      ],
    };
    const now = "2026-11-26 15:34:03";
    const labels = alertLabels(
      withGeometry,
      { ...states, "Луганська область": { alertnow: true, changed: "2022-04-04 19:45:39" } },
      now,
      ({ since, minutes, long }) => (long ? `з ${since}` : `з ${since} · ${minutes} хв`),
    ).features;
    expect(labels.map((f) => f.properties.text)).toEqual(["з 14:58 · 36 хв", "з 04.04.2022"]);
    expect(labels.map((f) => f.properties.long)).toEqual([false, true]);
    const regionsStyled = regionsWithAlerts(withGeometry, { "Луганська область": { alertnow: true, changed: "2022-04-04 19:45:39" } }, now);
    expect(regionsStyled.features[2].properties.long).toBe(true);
  });

  test("усі 27 областей geoBoundaries мають назву", () => {
    expect(Object.keys(REGION_NAMES).length).toBe(27);
  });
});
