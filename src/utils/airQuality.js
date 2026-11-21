// Якість повітря й пилок — безкоштовний air-quality API Open-Meteo (CAMS).
// Пилок є лише для Європи й лише в сезон, поза нею/взимку значення 0 або null.
// Тут жодного i18n: рівні повертаються ключами, а тексти підставляє компонент.

export const POLLEN_TYPES = ["birch", "alder", "grass", "mugwort", "ragweed"];

export const buildAirQualityUrl = (lat, lon) =>
  `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}` +
  `&current=european_aqi,pm2_5,pm10,${POLLEN_TYPES.map((t) => `${t}_pollen`).join(",")}&timezone=auto`;

// Європейський індекс EAQI: 0–20 добре, 20–40 прийнятне, 40–60 помірне, 60–80 погане,
// 80–100 дуже погане, понад 100 — небезпечне
export const AQI_LEVELS = ["good", "fair", "moderate", "poor", "veryPoor", "hazard"];
export const AQI_COLORS = ["#3ddc84", "#a3e635", "#ffd93b", "#ff9a1f", "#ff3b30", "#b026ff"];

export const aqiLevelIndex = (aqi) => {
  if (!Number.isFinite(aqi)) return null;
  if (aqi <= 20) return 0;
  if (aqi <= 40) return 1;
  if (aqi <= 60) return 2;
  if (aqi <= 80) return 3;
  if (aqi <= 100) return 4;
  return 5;
};

// Група порад: 0–1 → good, 2 → moderate, 3 → poor, 4–5 → hazard
export const aqiAdviceKey = (levelIndex) =>
  levelIndex <= 1 ? "adviceGood" : levelIndex === 2 ? "adviceModerate" : levelIndex === 3 ? "advicePoor" : "adviceHazard";

// Межі «низький / помірний / високий» у зернах/м³ (орієнтовні, за шкалами європейських станцій)
const POLLEN_LIMITS = {
  birch: [15, 90],
  alder: [15, 90],
  grass: [5, 20],
  mugwort: [10, 50],
  ragweed: [6, 20],
};

// 0 — немає, 1 — низький, 2 — помірний, 3 — високий
export const pollenLevel = (type, value) => {
  if (!Number.isFinite(value) || value <= 0) return 0;
  const [mid, high] = POLLEN_LIMITS[type] || [10, 50];
  if (value < mid) return 1;
  if (value < high) return 2;
  return 3;
};

export const parseAirQuality = (json) => {
  const c = json?.current;
  if (!c) return null;
  const num = (v) => (Number.isFinite(v) ? v : null);
  const pollen = POLLEN_TYPES.map((type) => ({ type, value: num(c[`${type}_pollen`]), level: pollenLevel(type, c[`${type}_pollen`]) }))
    .filter((p) => p.level > 0)
    .sort((a, b) => b.level - a.level || b.value - a.value);
  const aqi = num(c.european_aqi);
  return { aqi, level: aqiLevelIndex(aqi), pm25: num(c.pm2_5), pm10: num(c.pm10), pollen };
};

const CACHE_TTL_MS = 30 * 60 * 1000;
const cache = new Map();

export const fetchAirQuality = async (lat, lon, signal) => {
  const key = `${Number(lat).toFixed(2)},${Number(lon).toFixed(2)}`;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.data;
  const res = await fetch(buildAirQualityUrl(lat, lon), { signal });
  if (!res.ok) throw new Error(`air-quality ${res.status}`);
  const data = parseAirQuality(await res.json());
  if (data) cache.set(key, { at: Date.now(), data });
  return data;
};
