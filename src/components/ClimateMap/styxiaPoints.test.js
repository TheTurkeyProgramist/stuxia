import { ownFeatures, serverFeatures, iconKey, conditionKey, forecastFor, worldFeatures, compactValue, applyLayerValues } from "./styxiaPoints.js";
import { LAYERS, encodeValue } from "./styxiaLayers.js";
import { SERVER_CITIES } from "../../utils/serverCities.js";

describe("точки Карти Стихії", () => {
  test("власні картки стають точками, картки без координат пропускаються", () => {
    const features = ownFeatures([
      { lat: "50.45", lon: 30.52, locationName: "Дім", current: { tempNum: 3, windNum: 4.26 } },
      { locationName: "Без координат" },
      { lat: null, lon: null },
    ]);
    expect(features.length).toBe(1);
    expect(features[0].geometry.coordinates).toEqual([30.52, 50.45]);
    expect(features[0].properties).toMatchObject({ text: "Дім", short: "+3°", gps: false });
    expect(features[0].properties.wind).toBe(4.3);
  });

  test("GPS-картка позначена в підписі й у властивостях", () => {
    const [point] = ownFeatures([{ lat: 50, lon: 30, locationName: "Конотоп", isMain: true, current: { tempNum: 0 } }]);
    expect(point.properties).toMatchObject({ gps: true, text: "Конотоп (GPS)" });
  });

  test("поки GPS вимкнено, головна картка без позначки GPS", () => {
    const cards = [{ lat: 50, lon: 30, locationName: "Київ", isMain: true, current: { tempNum: 7 } }];
    const [point] = ownFeatures(cards, { gps: false });
    expect(point.properties).toMatchObject({ gps: false, text: "Київ", short: "+7°" });
    expect(ownFeatures(cards, { gps: true })[0].properties).toMatchObject({ gps: true, text: "Київ (GPS)" });
    // без параметра — як раніше
    expect(ownFeatures(cards)[0].properties.gps).toBe(true);
  });

  test("картка ще без погоди показується лише з назвою", () => {
    const [point] = ownFeatures([{ lat: 49, lon: 31, locationName: "Місце" }]);
    expect(point.properties.temp).toBe(null);
    expect(point.properties).toMatchObject({ text: "Місце", short: "" });
  });

  test("іконка погоди за кодом WMO, день і ніч", () => {
    expect(iconKey(0, 1)).toBe("clear-day");
    expect(iconKey(0, 0)).toBe("clear-night");
    expect(iconKey(2, 0)).toBe("partly-night");
    expect(iconKey(63)).toBe("rain");
    expect(iconKey(67)).toBe("sleet");
    expect(iconKey(73)).toBe("snow");
    expect(iconKey(81)).toBe("showers");
    expect(iconKey(96)).toBe("storm");
    expect(iconKey(undefined)).toBe(null);
  });

  test("власна картка отримує іконку, а довга назва скорочується для підпису", () => {
    const [point] = ownFeatures([
      { lat: 25.2, lon: 55.3, locationName: "Дубай, Dubai, Dubayy", current: { tempNum: 25, weather_code: 0, is_day: 1 } },
    ]);
    expect(point.properties.icon).toBe("clear-day");
    expect(point.properties).toMatchObject({ text: "Дубай", short: "+25°" });
    expect(point.properties.name).toBe("Дубай, Dubai, Dubayy");
  });

  test("кожна іконка має текст стану погоди", () => {
    for (const code of [0, 2, 3, 45, 53, 63, 67, 73, 81, 96]) {
      expect(conditionKey(iconKey(code, 1))).toMatch(/^newsWeather\.QuickWeather\./);
    }
    expect(conditionKey(null)).toBe(null);
  });

  test("прогноз міст з файлу: температура, вітер, іконка день/ніч", () => {
    const data = {
      cities: [
        { id: "w1", n: "Cairo", l: { uk: "Каїр" }, lat: 30, lon: 31.2, tier: 0 },
        { id: "w2", n: "Oslo", lat: 59.9, lon: 10.7, tier: 1 },
        { id: "kyiv", n: "Київ", lat: 50.4, lon: 30.5, tier: "s" },
      ],
      // [температура ×10, індекс типу, вітер ×10] на кожне місто
      frames: [[255, 0, 34, -42, 8, 120, -9999, 6, 0]],
    };
    const noon = Date.UTC(2026, 5, 21, 12, 0);
    const forecast = forecastFor(data, 0, noon);
    expect(forecast.get("w1")).toEqual({ temp: 26, wind: 3.4, icon: "clear-day" });
    expect(forecast.get("w2")).toEqual({ temp: -4, wind: 12, icon: "snow" });
    expect(forecast.get("kyiv").temp).toBe(null);
    // той самий Каїр опівночі — ніч
    expect(forecastFor(data, 0, Date.UTC(2026, 5, 21, 23, 0)).get("w1").icon).toBe("clear-night");
    expect(forecastFor(data, 5, noon)).toBe(null);

    const world = worldFeatures(data, forecast, "uk");
    expect(world.map((f) => f.properties.name)).toEqual(["Каїр", "Oslo"]);
    expect(world[0].properties).toMatchObject({ kind: "world", order: 3, text: "Каїр", short: "+26°" });
    expect(world[1].properties.order).toBe(4);
  });

  test("серверні міста беруть прогноз моделі, коли його передано", () => {
    const forecast = new Map([[SERVER_CITIES[0].slug, { temp: 7, wind: 2, icon: "rain" }]]);
    const [first, second] = serverFeatures("uk", forecast);
    expect(first.properties).toMatchObject({ temp: 7, icon: "rain" });
    expect(second.properties.icon).toBe(null);
  });

  test("центри областей, зокрема окупованих, у першому ряду; решта міст — у другому", () => {
    const byName = new Map(serverFeatures("uk").map((f) => [f.properties.name, f.properties.order]));
    for (const name of ["Київ", "Харків", "Донецьк", "Луганськ", "Сімферополь"]) expect(byName.get(name)).toBe(1);
    expect(byName.get("Мелітополь")).toBe(2);
  });

  test("короткий підпис значення: градуси, відсотки, число", () => {
    expect(compactValue(7.4, "temperature")).toBe("+7°");
    expect(compactValue(-0.3, "feelsLike")).toBe("0°");
    expect(compactValue(45.2, "clouds")).toBe("45%");
    expect(compactValue(1013.4, "pressure")).toBe("1013");
    expect(compactValue(0.44, "precipitation")).toBe("0.4");
    expect(compactValue(NaN, "pressure")).toBe("");
  });

  test("біля міст — значення вибраного шару, а справжня погода лишається для тултіпа", () => {
    const meta = { width: 8, height: 5 };
    const layer = (id) => LAYERS.find((l) => l.id === id);
    const planeOf = (id, value) => new Uint8Array(40).fill(encodeValue(value, layer(id)));
    const city = [{ type: "Feature", geometry: { type: "Point", coordinates: [31, 50] }, properties: { icon: "rain", short: "+3°" } }];

    const rain = applyLayerValues(city, layer("precipitation"), planeOf("precipitation", 2), meta)[0].properties;
    expect(rain).toMatchObject({ short: "2.0", icon: "layer-precipitation", weatherIcon: "rain" });

    // «Відчувається як» міняє лише число, іконка погоди та сама
    const feels = applyLayerValues(city, layer("feelsLike"), planeOf("feelsLike", -7.4), meta)[0].properties;
    expect(feels.short).toBe("-7°");
    expect(feels.icon).toBe("rain");

    // Температура й «без шару» — без змін
    expect(applyLayerValues(city, layer("temperature"), planeOf("temperature", 5), meta)).toBe(city);
    expect(applyLayerValues(city, null, null, meta)).toBe(city);
  });

  test("усі серверні міста є на карті ще до завантаження погоди", () => {
    expect(serverFeatures("uk").length).toBe(SERVER_CITIES.length);
  });
});
