// Колір лінії правої осі за значенням: «спокійний» → «небезпечний/інтенсивний».
// Стопи задані в канонічних одиницях (вітер — м/с, видимість — км), а на графік
// переводяться тими самими функціями, що й дані (conv), тож збігаються з віссю.
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

export const METRIC_STOPS = {
  wind: [[0, "#00beeb"], [7, "#00beeb"], [10, "#ffd93b"], [15, "#ff9a1f"], [20, "#ff3b30"], [28, "#a0001c"]],
  uv: [[0, "#3ddc84"], [2, "#3ddc84"], [4, "#ffd93b"], [6, "#ff9a1f"], [8, "#ff3b30"], [11, "#b026ff"]],
  precip: [[0, "#14b8a6"], [50, "#3b82f6"], [100, "#6d28d9"]],
  // Архів: вологість — від сухого жовтого до вологого синього; тиск (гПа) — низький червоний, високий синій
  humidity: [[0, "#ffd93b"], [50, "#3ddc84"], [100, "#3b82f6"]],
  pressure: [[980, "#ff3b30"], [1000, "#ff9a1f"], [1013, "#3ddc84"], [1025, "#00beeb"], [1045, "#6d28d9"]],
  clouds: [[0, "#ffd93b"], [50, "#9ca3af"], [100, "#4b5563"]],
  // низька видимість — небезпека, тож червоний зліва
  visibility: [[0, "#ff3b30"], [0.2, "#ff3b30"], [0.5, "#ff9a1f"], [2, "#ffd93b"], [5, "#7dd3fc"], [10, "#7dd3fc"]],
};

const build = (metric, conv) =>
  (METRIC_STOPS[metric] || []).map(([v, c]) => [conv ? Number(conv(v)) : v, hex(c)]);

const colorAt = (stops, v) => {
  if (!stops.length || !Number.isFinite(v)) return null;
  const asc = stops[0][0] <= stops[stops.length - 1][0] ? stops : [...stops].reverse();
  if (v <= asc[0][0]) return asc[0][1];
  if (v >= asc[asc.length - 1][0]) return asc[asc.length - 1][1];
  for (let i = 1; i < asc.length; i++) {
    if (v <= asc[i][0]) {
      const [v0, c0] = asc[i - 1];
      const [v1, c1] = asc[i];
      const k = v1 === v0 ? 1 : (v - v0) / (v1 - v0);
      return c0.map((x, j) => Math.round(x + (c1[j] - x) * k));
    }
  }
  return null;
};

const rgba = ([r, g, b], a) => `rgba(${r}, ${g}, ${b}, ${a})`;

// Колір точки за значенням (у одиницях осі)
export const metricPointColor = (metric, conv, v, alpha, fallback) => {
  const c = colorAt(build(metric, conv), v);
  return c ? rgba(c, alpha) : fallback;
};

const cache = new WeakMap();

// Scriptable borderColor: вертикальний градієнт за значенням на осі y1
export const metricGradient = (metric, conv, alpha, fallback) => (ctx) => {
  const chart = ctx.chart;
  const area = chart?.chartArea;
  const scale = chart?.scales?.y1;
  if (!area || !scale) return fallback;

  const key = `${metric}|${alpha}|${area.top}|${area.bottom}|${scale.min}|${scale.max}|${conv ? conv(1) : 1}`;
  const perChart = cache.get(chart) || {};
  const hit = perChart[ctx.datasetIndex];
  if (hit && hit.key === key) return hit.gradient;

  const stops = build(metric, conv);
  const span = area.bottom - area.top || 1;
  const gradient = chart.ctx.createLinearGradient(0, area.top, 0, area.bottom);
  const edge = (px) => colorAt(stops, scale.getValueForPixel(px)) || hex("#9ca3af");

  const inner = stops
    .map(([v, c]) => [(scale.getPixelForValue(v) - area.top) / span, c])
    .filter(([o]) => o > 0 && o < 1)
    .sort((a, b) => a[0] - b[0]);

  gradient.addColorStop(0, rgba(edge(area.top), alpha));
  inner.forEach(([o, c]) => gradient.addColorStop(o, rgba(c, alpha)));
  gradient.addColorStop(1, rgba(edge(area.bottom), alpha));

  perChart[ctx.datasetIndex] = { key, gradient };
  cache.set(chart, perChart);
  return gradient;
};

// Точки шкали для підпису під графіком (v — у одиницях осі)
export const metricScale = (metric, conv) =>
  build(metric, conv).map(([v, c]) => ({ v: Math.round(v * 10) / 10, css: rgba(c, 1) }));
