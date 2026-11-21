// Райдужна шкала температури (°C → колір) для ліній графіків.
// Градієнт будується по осі Y, тож колір лінії відповідає значенню на осі.
const STOPS = [
  [-30, [255, 122, 200]], // рожевий — екстремальний холод
  [-20, [155, 89, 255]], // фіолетовий — дуже холодно
  [-10, [47, 107, 255]], // синій — холодно
  [0, [41, 197, 246]], // голубий — прохолодно
  [10, [61, 220, 132]], // зелений — нормально
  [20, [255, 217, 59]], // жовтий — тепло
  [28, [255, 154, 31]], // оранжевий — дуже тепло
  [35, [255, 59, 48]], // червоний — спека
  [42, [139, 74, 43]], // коричневий — екстремальна спека
  [50, [58, 28, 16]], // майже чорний — пекло
];

export const tempColorRgb = (c) => {
  if (!Number.isFinite(c)) return STOPS[4][1];
  if (c <= STOPS[0][0]) return STOPS[0][1];
  const last = STOPS[STOPS.length - 1];
  if (c >= last[0]) return last[1];
  for (let i = 1; i < STOPS.length; i++) {
    const [t1, c1] = STOPS[i];
    if (c <= t1) {
      const [t0, c0] = STOPS[i - 1];
      const k = (c - t0) / (t1 - t0);
      return c0.map((v, j) => Math.round(v + (c1[j] - v) * k));
    }
  }
  return last[1];
};

const toC = (v, unit) => (unit === "F" ? ((v - 32) * 5) / 9 : unit === "K" ? v - 273.15 : v);
const toUnit = (c, unit) => (unit === "F" ? (c * 9) / 5 + 32 : unit === "K" ? c + 273.15 : c);
const rgba = ([r, g, b], a) => `rgba(${r}, ${g}, ${b}, ${a})`;

const cache = new WeakMap();

// Scriptable borderColor для Chart.js: повертає вертикальний градієнт за температурою.
export const tempGradient = (unit, alpha, fallback) => (ctx) => {
  const chart = ctx.chart;
  const area = chart?.chartArea;
  const scale = chart?.scales?.y;
  if (!area || !scale) return fallback;

  const key = `${unit}|${alpha}|${area.top}|${area.bottom}|${scale.min}|${scale.max}`;
  const perChart = cache.get(chart) || {};
  const hit = perChart[ctx.datasetIndex];
  if (hit && hit.key === key) return hit.gradient;

  const gradient = chart.ctx.createLinearGradient(0, area.top, 0, area.bottom);
  const span = area.bottom - area.top || 1;
  const topC = toC(scale.getValueForPixel(area.top), unit);
  const botC = toC(scale.getValueForPixel(area.bottom), unit);

  gradient.addColorStop(0, rgba(tempColorRgb(topC), alpha));
  // стопи від гарячих до холодних, щоб зміщення зростали
  for (let i = STOPS.length - 1; i >= 0; i--) {
    const off = (scale.getPixelForValue(toUnit(STOPS[i][0], unit)) - area.top) / span;
    if (off > 0 && off < 1) gradient.addColorStop(off, rgba(STOPS[i][1], alpha));
  }
  gradient.addColorStop(1, rgba(tempColorRgb(botC), alpha));

  perChart[ctx.datasetIndex] = { key, gradient };
  cache.set(chart, perChart);
  return gradient;
};

// Горизонтальний CSS-градієнт тієї ж шкали — для легенди (від холодного до гарячого).
export const TEMP_LEGEND_GRADIENT = `linear-gradient(90deg, ${STOPS.map(
  ([, c], i) => `${rgba(c, 1)} ${Math.round((i / (STOPS.length - 1)) * 100)}%`,
).join(", ")})`;

// Найспекотніша ділянка (майже чорна) отримує червону обводку, щоб не зливатись з темним фоном.
export const HOT_OUTLINE_C = 45;

export const hotOutlinePlugin = {
  id: "hotOutline",
  beforeDatasetDraw(chart, args) {
    const ds = chart.data.datasets[args.index];
    const cfg = ds?.hotOutline;
    if (!cfg || !args.meta.visible || ds.hidden) return;
    const pts = args.meta.data;
    const ctx = chart.ctx;
    ctx.save();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = `rgba(255, 30, 30, ${cfg.alpha ?? 1})`;
    ctx.lineWidth = (ds.borderWidth ?? 3) + 4;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const va = toC(ds.data[i - 1], cfg.unit);
      const vb = toC(ds.data[i], cfg.unit);
      if (!(Math.max(va, vb) >= HOT_OUTLINE_C) || a.skip || b.skip) continue;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.bezierCurveTo(a.cp2x ?? a.x, a.cp2y ?? a.y, b.cp1x ?? b.x, b.cp1y ?? b.y, b.x, b.y);
      ctx.stroke();
    }
    ctx.restore();
  },
};

// Точки шкали температури для підпису під графіком (v — у вибраних одиницях)
export const tempScale = (toDisplay) =>
  STOPS.map(([c, rgb]) => ({ v: Math.round(toDisplay(c) * 10) / 10, css: rgba(rgb, 1) }));
