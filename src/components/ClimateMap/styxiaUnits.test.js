import { layerUnit, shortTemp } from "./styxiaUnits.js";
import { DEFAULT_UNITS, IMPERIAL_UNITS } from "../../utils/units.js";

describe("одиниці Карти Стихії", () => {
  test("за замовчуванням значення не міняються", () => {
    for (const id of ["windSpeed", "pressure", "precipitation", "snow", "visibility", "clouds"]) {
      const unit = layerUnit(id, DEFAULT_UNITS, "база");
      expect(unit.convert(10)).toBe(10);
      expect(unit.label).toBe("база");
    }
  });

  test("імперські одиниці перераховуються", () => {
    expect(layerUnit("temperature", IMPERIAL_UNITS).convert(0)).toBe(32);
    expect(layerUnit("windSpeed", IMPERIAL_UNITS).convert(10)).toBeCloseTo(22.37, 2);
    expect(layerUnit("pressure", IMPERIAL_UNITS).convert(1013)).toBeCloseTo(29.91, 2);
    expect(layerUnit("snow", IMPERIAL_UNITS).convert(2.54)).toBeCloseTo(1, 6);
  });

  test("коротка температура біля міста", () => {
    expect(shortTemp(2.4, "C")).toBe("+2°");
    expect(shortTemp(-0.3, "C")).toBe("0°");
    expect(shortTemp(0, "F")).toBe("+32°");
    expect(shortTemp(0, "K")).toBe("273°");
    expect(shortTemp(null, "C")).toBe("");
  });
});
