import { LAYERS, encodeValue, decodeValue, colorFor, formatLayerValue } from "./styxiaLayers.js";

describe("шари Карти Стихії", () => {
  test("шкали зростають і вміщаються в діапазон кодування", () => {
    for (const layer of LAYERS) {
      const values = layer.stops.map((s) => s[0]);
      expect(values).toEqual([...values].sort((a, b) => a - b));
      expect(values[0] >= layer.range[0] && values.at(-1) <= layer.range[1]).toBe(true);
    }
  });

  test("два шари не ділять один канал", () => {
    const used = LAYERS.filter((l) => !l.fromWind).map((l) => `${l.file}:${l.channel}`);
    expect(new Set(used).size).toBe(used.length);
  });

  test("кодування в байт і назад, слабкі опади не губляться", () => {
    const rain = LAYERS.find((l) => l.id === "precipitation");
    expect(Math.abs(decodeValue(encodeValue(0.5, rain), rain) - 0.5) < 0.1).toBe(true);
    expect(encodeValue(0, rain)).toBe(0);
    expect(encodeValue(999, rain)).toBe(255);
  });

  test("підпис значення під курсором: знак, знаки після коми, одиниці", () => {
    expect(formatLayerValue(7.26, "temperature", "°C")).toBe("+7.3 °C");
    expect(formatLayerValue(-4.4, "temperature", "°C")).toBe("-4.4 °C");
    expect(formatLayerValue(-0.04, "temperature", "°C")).toBe("0.0 °C");
    expect(formatLayerValue(0.01, "temperature", "°C")).toBe("0.0 °C");
    expect(formatLayerValue(1013.4, "pressure", "гПа")).toBe("1013 гПа");
    expect(formatLayerValue(45.2, "clouds", "%")).toBe("45 %");
    expect(formatLayerValue(2.04, "precipitation", "мм/год")).toBe("2.0 мм/год");
    expect(formatLayerValue(12, "windSpeed", "")).toBe("12");
  });

  test("без опадів шар прозорий", () => {
    expect(colorFor(0, LAYERS.find((l) => l.id === "precipitation"))[3]).toBe(0);
    expect(colorFor(10, LAYERS.find((l) => l.id === "temperature"))[3]).toBe(255);
  });
});
