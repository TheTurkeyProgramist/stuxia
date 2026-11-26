// Міста для карти: серверні (з бази сайту) і міста світу з Natural Earth (суспільне надбання).
// Назви — мовами сайту, які є в Natural Earth; решта мов показує англійську.
/* global fetch, AbortSignal */
import { SERVER_CITIES } from "../../src/utils/serverCities.js";

const NE_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_populated_places.geojson";
const LANGS = ["ar", "de", "el", "es", "fa", "fr", "hu", "it", "ja", "ko", "nl", "pl", "pt", "sv", "tr", "uk", "zh"];
const SKIP = /Scientific station|Historic place|Meteorological Station/i;
const round = (value) => Math.round(value * 1000) / 1000;

/**
 * [{ id, n (англ.), l?: { мова: назва }, lat, lon, tier }]; tier: "s" — серверне місто,
 * 0 — мегаполіс (8 млн+), 1 — столиця чи 4 млн+, 2 — решта від 2 млн.
 */
export const loadCities = async () => {
  const res = await fetch(NE_URL, { signal: AbortSignal.timeout(120000) });
  if (!res.ok) throw new Error("Natural Earth " + res.status);
  const { features } = await res.json();

  const world = [];
  for (const { properties: p } of features) {
    // Україну покривають серверні міста; станції й історичні місця не потрібні
    if (p.ADM0NAME === "Ukraine" || SKIP.test(p.FEATURECLA)) continue;
    const capital = String(p.FEATURECLA).startsWith("Admin-0 capital");
    const pop = Number(p.POP_MAX) || 0;
    if (!capital && pop < 2e6) continue;
    const l = {};
    for (const lang of LANGS) {
      const name = p["NAME_" + lang.toUpperCase()];
      if (name && name !== p.NAME_EN) l[lang] = name;
    }
    world.push({
      id: "w" + (p.WIKIDATAID || world.length),
      n: p.NAME_EN || p.NAME,
      ...(Object.keys(l).length ? { l } : {}),
      lat: round(p.LATITUDE),
      lon: round(p.LONGITUDE),
      tier: pop >= 8e6 ? 0 : capital || pop >= 4e6 ? 1 : 2,
      pop,
    });
  }

  // Natural Earth іноді має дві точки одного міста — лишаємо більшу
  world.sort((a, b) => b.pop - a.pop);
  const kept = [];
  for (const city of world) {
    if (!kept.some((other) => Math.abs(other.lat - city.lat) < 0.2 && Math.abs(other.lon - city.lon) < 0.2)) kept.push(city);
  }

  return [
    ...SERVER_CITIES.map((c) => ({ id: c.slug, n: c.name, lat: c.lat, lon: c.lon, tier: "s" })),
    ...kept.map((city) => {
      delete city.pop; // населення потрібне лише для відбору
      return city;
    }),
  ];
};
