// «Усі міста й села»: самі населені пункти беремо з векторних плиток підкладки (OpenStreetMap через
// OpenFreeMap, шар place), а погоду в кожному рахуємо з даних моделі GFS у його координатах.
// Так працює для будь-якого населеного пункту, що є на карті, — безкоштовно й без ліміту запитів.
// Чесне застереження: сітка моделі ≈ 50 км, тож сусідні села мають близькі значення.
import * as SunCalc from "suncalc";
import { LAYERS, WIND_RANGE, decodeValue } from "./styxiaLayers.js";
import { kindIcon, sampleGrid, weatherKind } from "./styxiaWeather.js";

// Клас місця в плитках → з якого масштабу показуємо й наскільки воно важливе при тісноті (менше = важливіше)
export const PLACE_CLASSES = {
  city: { minzoom: 3, sort: 0 },
  town: { minzoom: 6, sort: 1 },
  village: { minzoom: 9, sort: 2 },
  hamlet: { minzoom: 11, sort: 3 },
};

// Більше за це на екрані не тримаємо: решту обрізаємо, спершу найдрібніші
export const MAX_PLACES = 1500;

const nameOf = (properties, lang) => properties[`name:${lang}`] || properties.name_en || properties.name || "";

/**
 * Населені пункти з об'єктів плиток (map.querySourceFeatures): без дублів на стику плиток,
 * лише ті класи, що доречні на цьому масштабі, найважливіші першими. bounds — { west, south, east, north }:
 * що за межами екрана (з запасом), відсікається ще до ліміту.
 */
export const collectPlaces = (features, lang, zoom, bounds = null) => {
  const seen = new Set();
  const places = [];
  for (const feature of features) {
    const properties = feature.properties || {};
    const spec = PLACE_CLASSES[properties.class];
    if (!spec || zoom < spec.minzoom || feature.geometry?.type !== "Point") continue;
    const name = nameOf(properties, lang);
    if (!name) continue;
    const [lon, lat] = feature.geometry.coordinates;
    if (bounds && (lon < bounds.west || lon > bounds.east || lat < bounds.south || lat > bounds.north)) continue;
    // Те саме місце в сусідніх плитках має трохи різні координати — округляємо до ~1 км
    const key = `${properties.class}|${name}|${lon.toFixed(2)}|${lat.toFixed(2)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    places.push({ name, lon, lat, sort: spec.sort });
  }
  return places.sort((a, b) => a.sort - b.sort).slice(0, MAX_PLACES);
};

const decodePlane = (rgba, channel, encoding) => {
  const plane = new Float32Array(rgba.length / 4);
  for (let i = 0; i < plane.length; i += 1) plane[i] = decodeValue(rgba[i * 4 + channel], encoding);
  return plane;
};

/** Декодовані (у °C, мм/год, %…) поля кадру з трьох файлів field, water, extra. */
export const buildGrids = ({ width, height }, files) => {
  const byId = (id) => {
    const layer = LAYERS.find((l) => l.id === id);
    return decodePlane(files[layer.file], layer.channel, layer);
  };
  const wind = { range: WIND_RANGE };
  return {
    width,
    height,
    temp: byId("temperature"),
    precip: byId("precipitation"),
    clouds: byId("clouds"),
    cape: byId("storm"),
    visibility: byId("visibility"),
    u: decodePlane(files.field, 0, wind),
    v: decodePlane(files.field, 1, wind),
  };
};

/** Погода в точці: { temp, wind, icon } або null, якщо даних немає. Сітка кадру починається з −180°. */
export const placeWeather = (grids, lon, lat, date) => {
  const at = (key) => sampleGrid(grids[key], grids.width, grids.height, lon + 180, lat);
  const temp = at("temp");
  if (!Number.isFinite(temp)) return null;
  const kind = weatherKind({ temp, precip: at("precip"), clouds: at("clouds"), cape: at("cape"), visibility: at("visibility") });
  return {
    temp: Math.round(temp),
    wind: Math.round(Math.hypot(at("u"), at("v")) * 10) / 10,
    icon: kindIcon(kind, SunCalc.getPosition(date, lat, lon).altitude > 0),
  };
};

/**
 * Чи місце вже є серед готових точок: те саме ім'я поруч (до 0,3°) або будь-яка точка ближче за radius°.
 * Так «Київ» із плиток не дублює серверний «Київ», а село біля великого міста лишається видно.
 */
export const createTaken = (features, radius) => {
  const cells = new Set();
  const byName = new Map();
  const cell = (value) => Math.floor(value / radius);
  for (const { geometry, properties } of features) {
    const [lon, lat] = geometry.coordinates;
    cells.add(`${cell(lon)}|${cell(lat)}`);
    const name = String(properties.name || "").toLowerCase();
    if (!byName.has(name)) byName.set(name, []);
    byName.get(name).push([lon, lat]);
  }
  return ({ lon, lat, name }) => {
    const same = byName.get(name.toLowerCase());
    if (same?.some(([x, y]) => Math.abs(x - lon) < 0.3 && Math.abs(y - lat) < 0.3)) return true;
    for (let dx = -1; dx <= 1; dx += 1) {
      for (let dy = -1; dy <= 1; dy += 1) if (cells.has(`${cell(lon) + dx}|${cell(lat) + dy}`)) return true;
    }
    return false;
  };
};

/** GeoJSON-точки населених пунктів із погодою на момент date. */
export const placeFeatures = (places, grids, date, taken) =>
  places.flatMap((place) => {
    if (taken(place)) return [];
    const weather = placeWeather(grids, place.lon, place.lat, date);
    if (!weather) return [];
    return [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [place.lon, place.lat] },
        properties: {
          kind: "place",
          name: place.name,
          temp: weather.temp,
          wind: weather.wind,
          icon: weather.icon,
          text: place.name,
          short: `${weather.temp > 0 ? "+" : ""}${weather.temp}°`,
          order: 6,
          sort: place.sort,
        },
      },
    ];
  });
