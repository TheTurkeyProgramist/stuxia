// Щоб на «Карті Стихії» не було двох міток одного міста, а власні картки показували той самий час, що й карта.
import { placeWeather } from "./styxiaPlaces.js";

const NEAR_KM = 5;
// Те саме ім'я трохи далі — теж те саме місто (GPS-картка на околиці, інший геокодер)
const SAME_NAME_KM = 30;

const km = ([lon1, lat1], [lon2, lat2]) => {
  const x = (lon2 - lon1) * Math.cos((((lat1 + lat2) / 2) * Math.PI) / 180);
  return Math.hypot(x, lat2 - lat1) * 111.2;
};

// «Київ (Україна)» і «Київ» — одна назва
const baseName = (name) => String(name || "").split(/ \(|,/)[0].trim().toLowerCase();

const isSame = (a, b) => {
  const distance = km(a.geometry.coordinates, b.geometry.coordinates);
  const sameName = baseName(a.properties.name) === baseName(b.properties.name);
  return sameName ? distance <= SAME_NAME_KM : distance <= NEAR_KM;
};

/** Дві картки одного міста (напр. GPS і додана вручну) — одна мітка; перша має перевагу. */
export const uniquePoints = (features) =>
  features.filter((feature, i) => !features.slice(0, i).some((other) => isSame(other, feature)));

/** Фільтр: true, якщо цього міста ще немає серед власних карток. */
export const notDuplicate = (own) => (feature) => !own.some((card) => isSame(card, feature));

/**
 * Власні картки на кадр прогнозу: погода з моделі в їхніх координатах.
 * Поки поля кадру не завантажені (grids = null) — без значень, щоб не показувати «зараз» під іншим часом.
 */
export const atFrame = (features, grids, date) =>
  features.map((feature) => {
    const [lon, lat] = feature.geometry.coordinates;
    const weather = grids ? placeWeather(grids, lon, lat, date) : null;
    return {
      ...feature,
      properties: {
        ...feature.properties,
        temp: weather?.temp ?? null,
        wind: weather?.wind ?? null,
        icon: weather?.icon ?? null,
        short: weather ? `${weather.temp > 0 ? "+" : ""}${weather.temp}°` : "",
      },
    };
  });
