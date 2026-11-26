// Межі областей України для шару тривог: geoBoundaries ADM1 (дані OpenStreetMap, ODbL).
// Спрощуємо до ~1 км, щоб файл був малим: оригінал ~4 МБ, 138 тис. точок.
/* global fetch, AbortSignal, console */
import { writeFile } from "node:fs/promises";

const API = "https://www.geoboundaries.org/api/current/gbOpen/UKR/ADM1/";
const TOLERANCE = 0.01; // градуси
const PRECISION = 1e4;

// Дуглас — Пекер без рекурсії (кільця можуть бути довгими)
const simplifyLine = (points, tolerance) => {
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [first, last] = stack.pop();
    const [ax, ay] = points[first];
    const [bx, by] = points[last];
    const dx = bx - ax;
    const dy = by - ay;
    const length = Math.hypot(dx, dy) || 1e-12;
    let far = -1;
    let max = tolerance;
    for (let i = first + 1; i < last; i += 1) {
      const distance = Math.abs(dy * (points[i][0] - ax) - dx * (points[i][1] - ay)) / length;
      if (distance > max) {
        max = distance;
        far = i;
      }
    }
    if (far !== -1) {
      keep[far] = 1;
      stack.push([first, far], [far, last]);
    }
  }
  return points.filter((_, i) => keep[i]);
};

const simplifyRing = (ring) => {
  const line = simplifyLine(ring.slice(0, -1), TOLERANCE);
  if (line.length < 3) return null; // острівець зник
  const round = ([x, y]) => [Math.round(x * PRECISION) / PRECISION, Math.round(y * PRECISION) / PRECISION];
  const out = line.map(round);
  return [...out, out[0]];
};

const simplifyPolygon = (rings) => {
  const outer = simplifyRing(rings[0]);
  if (!outer) return null;
  return [outer, ...rings.slice(1).map(simplifyRing).filter(Boolean)];
};

export const buildRegions = async (outDir) => {
  const info = await (await fetch(API, { signal: AbortSignal.timeout(30000) })).json();
  const res = await fetch(info.gjDownloadURL, { signal: AbortSignal.timeout(120000) });
  if (!res.ok) throw new Error(`geoBoundaries ${res.status}`);
  const source = await res.json();
  const features = source.features.flatMap((feature) => {
    const { type, coordinates } = feature.geometry;
    const polygons = (type === "Polygon" ? [coordinates] : coordinates).map(simplifyPolygon).filter(Boolean);
    if (!polygons.length) return [];
    return [
      {
        type: "Feature",
        properties: { iso: feature.properties.shapeISO, name: feature.properties.shapeName },
        geometry: polygons.length === 1 ? { type: "Polygon", coordinates: polygons[0] } : { type: "MultiPolygon", coordinates: polygons },
      },
    ];
  });
  // .txt, щоб Vite не обгортав у модуль
  await writeFile(`${outDir}regions.txt`, JSON.stringify({ type: "FeatureCollection", features }));
  console.log(`Межі областей: ${features.length} (geoBoundaries, OSM)`);
};
