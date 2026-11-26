// Ізобари: лінії однакового тиску з даних шару тиску (метод marching squares).
// Лінії складаються у довгі полілінії — інакше підписи вздовж лінії нікуди було б поставити.
import { decodeValue } from "./styxiaLayers.js";

// Згладжуємо 3×3: тиск у даних закодовано одним байтом (крок ≈ 0,5 гПа) — без цього лінії були б сходинками
const blur = (source, width, height) => {
  const out = new Float32Array(source.length);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let sum = 0;
      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          sum += source[Math.min(height - 1, Math.max(0, y + dy)) * width + Math.min(width - 1, Math.max(0, x + dx))];
        }
      }
      out[y * width + x] = sum / 9;
    }
  }
  return out;
};

// Пари сторін комірки (T — верх, R — право, B — низ, L — ліво), які з'єднує лінія, за кутами,
// що вищі за рівень: tl = 8, tr = 4, br = 2, bl = 1. Сідлові 5 й 10 розв'язуються окремо
const SEGMENTS = {
  1: [["L", "B"]], 2: [["B", "R"]], 3: [["L", "R"]], 4: [["T", "R"]], 6: [["T", "B"]], 7: [["T", "L"]],
  8: [["T", "L"]], 9: [["T", "B"]], 11: [["T", "R"]], 12: [["L", "R"]], 13: [["B", "R"]], 14: [["L", "B"]],
};

const contourLevel = (values, cellMin, cellMax, width, height, level) => {
  const points = new Map();
  const adjacency = new Map();
  const ends = [];
  // Перетин сторони: вона спільна для двох комірок, тож ідентифікатор і точка в них однакові
  const edgeId = (vertical, x, y) => (y * width + x) * 2 + vertical;
  const crossing = (id, ax, ay, bx, by) => {
    if (!points.has(id)) {
      const va = values[ay * width + ax];
      const vb = values[by * width + bx];
      const k = (level - va) / (vb - va);
      points.set(id, [ax + (bx - ax) * k, ay + (by - ay) * k]);
    }
    return id;
  };
  const link = (a, b) => {
    const index = ends.length / 2;
    ends.push(a, b);
    for (const id of [a, b]) {
      if (!adjacency.has(id)) adjacency.set(id, []);
      adjacency.get(id).push(index);
    }
  };

  for (let y = 0; y < height - 1; y += 1) {
    for (let x = 0; x < width - 1; x += 1) {
      const cell = y * (width - 1) + x;
      if (cellMin[cell] > level || cellMax[cell] <= level) continue;
      const a = values[y * width + x];
      const b = values[y * width + x + 1];
      const c = values[(y + 1) * width + x + 1];
      const d = values[(y + 1) * width + x];
      const edges = {
        T: () => crossing(edgeId(0, x, y), x, y, x + 1, y),
        B: () => crossing(edgeId(0, x, y + 1), x, y + 1, x + 1, y + 1),
        L: () => crossing(edgeId(1, x, y), x, y, x, y + 1),
        R: () => crossing(edgeId(1, x + 1, y), x + 1, y, x + 1, y + 1),
      };
      const bits = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
      let pairs = SEGMENTS[bits];
      if (bits === 5 || bits === 10) {
        // Сідло: центр вищий за рівень чи ні — від цього залежить, як з'єднано лінії
        const centerAbove = (a + b + c + d) / 4 > level;
        const diagonalTopLeft = bits === 5 ? centerAbove : !centerAbove;
        pairs = diagonalTopLeft ? [["T", "L"], ["B", "R"]] : [["T", "R"], ["L", "B"]];
      }
      for (const [from, to] of pairs || []) link(edges[from](), edges[to]());
    }
  }

  const count = ends.length / 2;
  const used = new Uint8Array(count);
  const nextAt = (id) => {
    for (const index of adjacency.get(id) || []) if (!used[index]) return index;
    return -1;
  };
  const other = (index, id) => (ends[index * 2] === id ? ends[index * 2 + 1] : ends[index * 2]);

  const lines = [];
  for (let s = 0; s < count; s += 1) {
    if (used[s]) continue;
    used[s] = 1;
    const forward = [ends[s * 2], ends[s * 2 + 1]];
    for (;;) {
      const next = nextAt(forward[forward.length - 1]);
      if (next < 0) break;
      used[next] = 1;
      forward.push(other(next, forward[forward.length - 1]));
      if (forward[forward.length - 1] === forward[0]) break; // замкнулась
    }
    const backward = [];
    if (forward[forward.length - 1] !== forward[0]) {
      let start = forward[0];
      for (;;) {
        const next = nextAt(start);
        if (next < 0) break;
        used[next] = 1;
        start = other(next, start);
        backward.push(start);
      }
    }
    const ids = [...backward.reverse(), ...forward];
    if (ids.length >= 4) lines.push(ids.map((id) => points.get(id)));
  }
  return lines;
};

/**
 * Ізобари шару `layer` (з полем isolines.step, гПа) як GeoJSON-лінії в градусах.
 * plane — байти шару (ширина × висота, рядки з півночі, довгота від −180°).
 */
export const isobarFeatures = (plane, layer, width, height) => {
  const raw = new Float32Array(plane.length);
  for (let i = 0; i < plane.length; i += 1) raw[i] = decodeValue(plane[i], layer);
  const values = blur(raw, width, height);

  const cellMin = new Float32Array((width - 1) * (height - 1));
  const cellMax = new Float32Array((width - 1) * (height - 1));
  let min = Infinity;
  let max = -Infinity;
  for (let y = 0; y < height - 1; y += 1) {
    for (let x = 0; x < width - 1; x += 1) {
      const a = values[y * width + x];
      const b = values[y * width + x + 1];
      const c = values[(y + 1) * width + x];
      const d = values[(y + 1) * width + x + 1];
      const low = Math.min(a, b, c, d);
      const high = Math.max(a, b, c, d);
      cellMin[y * (width - 1) + x] = low;
      cellMax[y * (width - 1) + x] = high;
      if (low < min) min = low;
      if (high > max) max = high;
    }
  }

  const { step } = layer.isolines;
  const lonStep = 360 / width;
  const latStep = 180 / (height - 1);
  const features = [];
  for (let level = Math.ceil(min / step) * step; level <= max; level += step) {
    for (const line of contourLevel(values, cellMin, cellMax, width, height, level)) {
      features.push({
        type: "Feature",
        properties: { level, label: String(level), major: level % (step * 5) === 0 },
        geometry: { type: "LineString", coordinates: line.map(([x, y]) => [-180 + x * lonStep, 90 - y * latStep]) },
      });
    }
  }
  return { type: "FeatureCollection", features };
};
