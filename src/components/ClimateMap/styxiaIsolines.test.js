import { isobarFeatures } from "./styxiaIsolines.js";
import { LAYERS, encodeValue } from "./styxiaLayers.js";

const pressure = LAYERS.find((l) => l.id === "pressure");

// Сітка 60 × 31: гора тиску посередині, 1013 гПа по краях
const width = 60;
const height = 31;
const plane = new Uint8Array(width * height);
for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const d2 = (x - 30) ** 2 + ((y - 15) * 2) ** 2;
    plane[y * width + x] = encodeValue(1013 + 30 * Math.exp(-d2 / 150), pressure);
  }
}

describe("ізобари", () => {
  const { features } = isobarFeatures(plane, pressure, width, height);

  test("рівні кратні кроку й не виходять за межі даних", () => {
    const levels = [...new Set(features.map((f) => f.properties.level))].sort((a, b) => a - b);
    expect(levels.length).toBeGreaterThan(5);
    expect(levels.every((level) => level % 4 === 0)).toBe(true);
    expect(levels[0]).toBeGreaterThanOrEqual(1016);
    expect(levels.at(-1)).toBeLessThanOrEqual(1043);
  });

  test("кожен рівень навколо піку — одна замкнена лінія", () => {
    const rings = features.filter((f) => f.properties.level === 1024);
    expect(rings.length).toBe(1);
    const coordinates = rings[0].geometry.coordinates;
    expect(coordinates[0]).toEqual(coordinates.at(-1));
    expect(coordinates.length).toBeGreaterThan(8);
  });

  test("вищі рівні — менші кільця всередині нижчих", () => {
    const span = (level) => {
      const line = features.find((f) => f.properties.level === level).geometry.coordinates;
      const lons = line.map(([lon]) => lon);
      return Math.max(...lons) - Math.min(...lons);
    };
    expect(span(1036)).toBeLessThan(span(1024));
    expect(span(1024)).toBeLessThan(span(1016));
  });

  test("підпис і ознака «головної» лінії (кожна п'ята: 1020, 1040)", () => {
    const byLevel = (level) => features.find((f) => f.properties.level === level).properties;
    expect(byLevel(1020)).toMatchObject({ label: "1020", major: true });
    expect(byLevel(1024).major).toBe(false);
  });

  test("координати в градусах: довгота від −180°, широта від 90° до −90°", () => {
    for (const { geometry } of features) {
      for (const [lon, lat] of geometry.coordinates) {
        expect(lon).toBeGreaterThanOrEqual(-180);
        expect(lon).toBeLessThanOrEqual(180);
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
      }
    }
  });

  test("рівна сітка не дає ліній", () => {
    const flat = new Uint8Array(width * height).fill(encodeValue(1013, pressure));
    expect(isobarFeatures(flat, pressure, width, height).features).toEqual([]);
  });
});
