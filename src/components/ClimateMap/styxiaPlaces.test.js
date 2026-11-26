import { collectPlaces, buildGrids, placeWeather, createTaken, placeFeatures, MAX_PLACES } from "./styxiaPlaces.js";
import { LAYERS, encodeValue } from "./styxiaLayers.js";

const point = (cls, name, lon, lat, extra = {}) => ({
  type: "Feature",
  properties: { class: cls, name, ...extra },
  geometry: { type: "Point", coordinates: [lon, lat] },
});

describe("усі міста й села з плиток підкладки", () => {
  test("дублі на стику плиток зливаються, назва — мовою сайту", () => {
    const places = collectPlaces(
      [
        point("city", "Kharkiv", 36.23, 49.99, { "name:uk": "Харків", name_en: "Kharkiv" }),
        point("city", "Kharkiv", 36.2304, 49.9902, { "name:uk": "Харків", name_en: "Kharkiv" }),
        point("city", "Poltava", 34.55, 49.59, { name_en: "Poltava" }),
      ],
      "uk",
      6,
    );
    expect(places.map((p) => p.name)).toEqual(["Харків", "Poltava"]);
  });

  test("клас показується від свого масштабу: село — від 9, хутір — від 11", () => {
    const features = [point("town", "Миргород", 33.6, 49.97), point("village", "Сорочинці", 33.9, 50.0), point("hamlet", "Хутір", 33.5, 50.1)];
    expect(collectPlaces(features, "uk", 7).map((p) => p.name)).toEqual(["Миргород"]);
    expect(collectPlaces(features, "uk", 9.5).map((p) => p.name)).toEqual(["Миргород", "Сорочинці"]);
    expect(collectPlaces(features, "uk", 11.5).length).toBe(3);
  });

  test("не місця (країни, області, околиці без назви) пропускаються, а важливіші йдуть першими", () => {
    const features = [
      point("village", "Село", 30, 50),
      point("country", "Країна", 30, 50),
      point("state", "Область", 30, 50),
      point("city", "", 31, 51),
      point("city", "Місто", 32, 52),
    ];
    expect(collectPlaces(features, "uk", 10).map((p) => p.name)).toEqual(["Місто", "Село"]);
  });

  test("більше за ліміт не тримаємо, спершу відкидаємо найдрібніші", () => {
    const many = Array.from({ length: MAX_PLACES + 50 }, (_, i) => point("village", `V${i}`, 30 + i * 0.01, 50));
    many.push(point("city", "Велике місто", 31, 51));
    const places = collectPlaces(many, "uk", 10);
    expect(places.length).toBe(MAX_PLACES);
    expect(places[0].name).toBe("Велике місто");
  });

  test("погода в точці береться з полів кадру: температура, іконка день/ніч", () => {
    const temperature = LAYERS.find((l) => l.id === "temperature");
    const width = 8;
    const height = 5;
    const size = width * height;
    // Три файли кадру: у field — u, v, температура; у water — опади, хмари, тиск; в extra — гроза, видимість
    const filled = (channels) => {
      const rgba = new Uint8ClampedArray(size * 4);
      for (let i = 0; i < size; i += 1) channels.forEach((byte, c) => (rgba[i * 4 + c] = byte));
      return rgba;
    };
    const grids = buildGrids(
      { width, height },
      {
        field: filled([128, 128, encodeValue(21, temperature)]),
        water: filled([0, 0, 128]),
        extra: filled([0, 255]),
      },
    );
    const noon = new Date(Date.UTC(2026, 5, 21, 12, 0));
    const weather = placeWeather(grids, 31, 50, noon);
    expect(weather.temp).toBe(21);
    expect(weather.icon).toBe("clear-day");
    expect(weather.wind).toBeLessThan(0.5);
    expect(placeWeather(grids, 31, 50, new Date(Date.UTC(2026, 5, 21, 0, 0))).icon).toBe("clear-night");
  });

  test("місце, що вже є серед готових точок, пропускається; сусіднє село — ні", () => {
    const existing = [point("city", "Київ", 30.52, 50.45)].map((f) => ({ ...f, properties: { name: "Київ" } }));
    const taken = createTaken(existing, 0.05);
    expect(taken({ name: "київ", lon: 30.6, lat: 50.5 })).toBe(true); // те саме ім'я поруч
    expect(taken({ name: "Інше", lon: 30.53, lat: 50.46 })).toBe(true); // впритул
    expect(taken({ name: "Село", lon: 31.5, lat: 51.5 })).toBe(false);
  });

  test("точки отримують текст «назва + температура» і порядок за важливістю", () => {
    const temperature = LAYERS.find((l) => l.id === "temperature");
    const rgba = new Uint8ClampedArray(8 * 5 * 4);
    for (let i = 0; i < 40; i += 1) {
      rgba[i * 4] = 128;
      rgba[i * 4 + 1] = 128;
      rgba[i * 4 + 2] = encodeValue(-4, temperature);
      rgba[i * 4 + 3] = 255;
    }
    const zeros = new Uint8ClampedArray(8 * 5 * 4);
    const grids = buildGrids({ width: 8, height: 5 }, { field: rgba, water: zeros, extra: zeros });
    const [feature] = placeFeatures([{ name: "Сорочинці", lon: 33.9, lat: 50, sort: 2 }], grids, new Date(Date.UTC(2026, 5, 21, 12)), () => false);
    expect(feature.properties).toMatchObject({ kind: "place", order: 6, sort: 2, text: "Сорочинці", short: "-4°" });
    expect(placeFeatures([{ name: "Зайняте", lon: 1, lat: 1, sort: 0 }], grids, new Date(), () => true)).toEqual([]);
  });
});
