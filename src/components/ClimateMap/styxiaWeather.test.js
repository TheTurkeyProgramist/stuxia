import { KINDS, weatherKind, kindIcon, sampleGrid, apparentTemperature } from "./styxiaWeather.js";

const base = { temp: 10, precip: 0, clouds: 0, cape: 0, visibility: 20 };

describe("погода за даними моделі", () => {
  test("опади: мряка, дощ, злива, мокрий сніг і сніг залежать від сили й температури", () => {
    expect(weatherKind({ ...base, precip: 0.2 })).toBe("drizzle");
    expect(weatherKind({ ...base, precip: 1.5 })).toBe("rain");
    expect(weatherKind({ ...base, precip: 6 })).toBe("showers");
    expect(weatherKind({ ...base, temp: 0.5, precip: 1 })).toBe("sleet");
    expect(weatherKind({ ...base, temp: -5, precip: 1 })).toBe("snow");
  });

  test("гроза потребує і запасу енергії, і опадів", () => {
    expect(weatherKind({ ...base, cape: 1500, precip: 1 })).toBe("storm");
    expect(weatherKind({ ...base, cape: 1500, precip: 0 })).toBe("clear");
    expect(weatherKind({ ...base, cape: 3000, precip: 0.1 })).toBe("storm");
  });

  test("без опадів: туман, ясно, мінлива хмарність, хмарно", () => {
    expect(weatherKind({ ...base, visibility: 0.5 })).toBe("fog");
    expect(weatherKind({ ...base, clouds: 10 })).toBe("clear");
    expect(weatherKind({ ...base, clouds: 40 })).toBe("partly");
    expect(weatherKind({ ...base, clouds: 90 })).toBe("cloudy");
  });

  test("кожен тип має іконку, а день і ніч розрізняються лише для ясно й мінливо", () => {
    expect(kindIcon("clear", true)).toBe("clear-day");
    expect(kindIcon("clear", false)).toBe("clear-night");
    expect(kindIcon("partly", false)).toBe("partly-night");
    for (const kind of KINDS.filter((k) => k !== "clear" && k !== "partly")) expect(kindIcon(kind, false)).toBe(kind);
  });

  test("білінійна вибірка сітки, довгота обертається через 360°", () => {
    // 4 × 3: довгота кожні 90°, широта 90°, 0°, −90°
    const values = [0, 10, 20, 30, 100, 110, 120, 130, 200, 210, 220, 230];
    expect(sampleGrid(values, 4, 3, 0, 90)).toBe(0);
    expect(sampleGrid(values, 4, 3, 45, 90)).toBe(5);
    expect(sampleGrid(values, 4, 3, 0, 45)).toBeCloseTo(50, 3);
    expect(sampleGrid(values, 4, 3, 315, 90)).toBeCloseTo(15, 3); // між 270° (30) і 360° = 0° (0)
    expect(sampleGrid(values, 4, 3, -90, 90)).toBe(sampleGrid(values, 4, 3, 270, 90));
  });

  test("відчутна температура: вітер холодить, волога спека спекотніша", () => {
    expect(apparentTemperature(0, 80, 10)).toBeLessThan(-8);
    expect(apparentTemperature(30, 70, 0)).toBeGreaterThan(34);
    expect(apparentTemperature(20, 0, 0)).toBeCloseTo(16, 5);
  });

  test("над морем (NaN) береться найближча точка", () => {
    const values = [NaN, NaN, 7, 7, NaN, NaN, 7, 7, NaN, NaN, 7, 7];
    expect(sampleGrid(values, 4, 3, 10, 0)).toBeNaN();
    expect(sampleGrid(values, 4, 3, 190, 0)).toBe(7);
  });
});
