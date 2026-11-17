// «Серверні» міста: погоду для них готує сервер Стихії (functions/api/city-weather.js),
// тож картка такого міста не витрачає ліміт Open-Meteo відвідувача. Це всі міста бази
// (ті самі, що мають сторінки /pohoda/<slug>/). У пошуку їх позначає блискавка.
//
// Бюджет сервера (у Cloudflare окремий лічильник Open-Meteo — 10 000 «викликів» на добу):
//   23 найбільші міста — повне оновлення (9,24) раз на 3 год: 8 × 9,24 ≈ 74 на добу;
//   решта 63 — раз на 6 год: 4 × 9,24 ≈ 37;
//   «зараз» для всіх 86 — одним запитом щогодини: 86 × 24 = 2 064;
//   сезонний — раз на добу: 86 × 1,51 ≈ 130.
//   Разом не більше ~6 200 на добу, і лише якщо кожне місто хтось дивиться: сервер оновлює
//   місто тільки тоді, коли його запитали, а дані застаріли.

import { UKRAINE_CITIES_40, getCitySlug } from "./citiesDatabase.js";

// Київ, обласні центри (крім окупованих) і Конотоп — найпопулярніші, оновлюються частіше
const FAST_CITY_NAMES = new Set([
  "Київ", "Конотоп", "Вінниця", "Луцьк", "Дніпро", "Житомир", "Ужгород", "Запоріжжя",
  "Івано-Франківськ", "Кропивницький", "Львів", "Миколаїв", "Одеса", "Полтава", "Рівне",
  "Суми", "Тернопіль", "Харків", "Херсон", "Хмельницький", "Черкаси", "Чернівці", "Чернігів",
]);

export const SERVER_FULL_TTL_MS = {
  fast: 3 * 60 * 60 * 1000,
  slow: 6 * 60 * 60 * 1000,
};
export const SERVER_NOW_TTL_MS = 55 * 60 * 1000;
export const SERVER_SEASONAL_TTL_MS = 24 * 60 * 60 * 1000;
// GPS-картка ближче цієї відстані до серверного міста бере його дані (сітка моделей — 7–11 км)
export const SERVER_SNAP_KM = 5;

export const SERVER_CITIES = UKRAINE_CITIES_40.map((city) => ({
  slug: getCitySlug(city),
  name: city.name,
  lat: city.lat,
  lon: city.lon,
  tier: FAST_CITY_NAMES.has(city.name) ? "fast" : "slow",
})).filter((c) => c.slug);

const BY_SLUG = new Map(SERVER_CITIES.map((c) => [c.slug, c]));

export const serverCityBySlug = (slug) => BY_SLUG.get(String(slug || "")) || null;

const distanceKm = (aLat, aLon, bLat, bLon) => {
  const rad = Math.PI / 180;
  const dLat = (bLat - aLat) * rad;
  const dLon = (bLon - aLon) * rad;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(aLat * rad) * Math.cos(bLat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};

/** Найближче серверне місто в межах maxKm або null. */
export const findServerCity = (lat, lon, maxKm = SERVER_SNAP_KM) => {
  const la = Number(lat);
  const lo = Number(lon);
  if (!Number.isFinite(la) || !Number.isFinite(lo)) return null;
  let best = null;
  let bestKm = maxKm;
  for (const city of SERVER_CITIES) {
    // Грубий відсів: 0,1° широти ≈ 11 км
    if (Math.abs(city.lat - la) > 0.1 || Math.abs(city.lon - lo) > 0.2) continue;
    const km = distanceKm(la, lo, city.lat, city.lon);
    if (km <= bestKm) {
      best = city;
      bestKm = km;
    }
  }
  return best;
};
