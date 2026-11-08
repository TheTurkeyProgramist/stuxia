// Іконки погоди для точок Chart.js.
// Малюємо ті самі react-icons, що й на картках, але векторно (Path2D) у canvas,
// з окремим кольором для кожного типу погоди — щоб хмарність не плутати з дощем.
import {
  FaSun,
  FaCloud,
  FaCloudSun,
  FaCloudMoon,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudMoonRain,
  FaSmog,
} from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { GiSnowing } from "react-icons/gi";
import { IoThunderstorm, IoRainy } from "react-icons/io5";
import { TbNavigationFilled } from "react-icons/tb";

// Для графіка — лише суцільні іконки, у кожного типу погоди своя форма
const pickIcon = (code, isDay) => {
  if (code === 0) return isDay ? FaSun : BsMoonStarsFill;
  if (code === 1 || code === 2) return isDay ? FaCloudSun : FaCloudMoon;
  if (code === 3) return FaCloud;
  if (code >= 45 && code <= 48) return FaSmog;
  if (code >= 51 && code <= 57) return IoRainy;
  if (code === 65 || code === 82) return FaCloudShowersHeavy;
  if (code === 80 || code === 81) return isDay ? FaCloudSunRain : FaCloudMoonRain;
  if (code >= 61 && code <= 67) return FaCloudRain;
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return GiSnowing;
  if (code >= 95 && code <= 99) return IoThunderstorm;
  return FaCloud;
};

// Емодзі зі старих збережених даних → приблизний код WMO
const EMOJI_TO_CODE = [
  ["⛈", 95],
  ["🌦", 80],
  ["🌧", 61],
  ["❄", 71],
  ["🌤", 2],
  ["☀", 0],
  ["🌙", 0],
  ["☁", 3],
];

const resolveCode = (item) => {
  const raw = item?.weather_code;
  if (raw !== undefined && raw !== null && Number.isFinite(Number(raw))) return Number(raw);
  const text = String(item?.iconPlaceholder ?? "");
  if (/туман/i.test(text)) return 45;
  if (/мряка/i.test(text)) return 51;
  const hit = EMOJI_TO_CODE.find(([emoji]) => text.includes(emoji));
  return hit ? hit[1] : 3;
};

// color — основний колір іконки, accent — другий шлях (блискавка, зірки), ring — обідок
const paletteFor = (code, isDay) => {
  if (code === 0) {
    return isDay
      ? { color: "#FFC21A", ring: "#FFC21A" }
      : { color: "#FDE68A", accent: "#FFFFFF", ring: "#FDE68A" };
  }
  if (code === 1 || code === 2) return { color: "#E5EAF1", ring: "#94A3B8" };
  if (code === 3) return { color: "#AAB5C3", ring: "#64748B" };
  if (code >= 45 && code <= 48) return { color: "#9AA6B6", ring: "#64748B" };
  if (code >= 51 && code <= 57) return { color: "#7DD3FC", ring: "#7DD3FC" };
  if (code === 66 || code === 67) return { color: "#67E8F9", ring: "#67E8F9" };
  if ((code >= 61 && code <= 65) || (code >= 80 && code <= 82)) {
    return { color: "#3D9DFF", ring: "#3D9DFF" };
  }
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) {
    return { color: "#F0FBFF", ring: "#22D3EE" };
  }
  if (code >= 95 && code <= 99) return { color: "#C4A5FF", accent: "#FFD43B", ring: "#A78BFA" };
  return { color: "#D5DCE6", ring: "#94A3B8" };
};

// Дістаємо viewBox і шляхи прямо з дерева react-icons (без react-dom/server)
const iconDataCache = new Map();
const getIconData = (code, isDay) =>
  getComponentIconData(`${code}|${isDay ? 1 : 0}`, pickIcon(code, isDay));

const getComponentIconData = (key, IconComponent) => {
  if (iconDataCache.has(key)) return iconDataCache.get(key);
  let data = null;
  try {
    const base = IconComponent({});
    const viewBox = String(base?.props?.attr?.viewBox ?? "0 0 512 512")
      .split(/[\s,]+/)
      .map(Number);
    const children = [].concat(base?.props?.children ?? []).flat(Infinity);
    const paths = children
      .map((child) => child?.props?.d)
      .filter((d) => typeof d === "string" && d.length > 0);
    if (paths.length && viewBox.length === 4 && viewBox.every(Number.isFinite)) {
      data = { viewBox, paths };
    }
  } catch {
    data = null;
  }
  iconDataCache.set(key, data);
  return data;
};

export const getChartIconKey = (item) => {
  const code = resolveCode(item);
  const isDay = item?.is_day === undefined ? 1 : Number(item.is_day) ? 1 : 0;
  return `${code}|${isDay}`;
};

/**
 * Малює чітку іконку погоди. Повертає canvas, який Chart.js показує
 * розміром size×size CSS-пікселів, а всередині має щільність ×scale.
 */
export const createChartWeatherIcon = (item, size = 28, dangerColor = null, opacity = 1) => {
  const code = resolveCode(item);
  const isDay = item?.is_day === undefined ? 1 : Number(item.is_day) ? 1 : 0;
  const palette = paletteFor(code, isDay);
  const data = getIconData(code, isDay);

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  // Мінімум ×2 — щоб і при експорті/зумі іконки лишались різкими
  const scale = Math.min(4, Math.max(2, Math.ceil(dpr)));
  const canvas = document.createElement("canvas");
  canvas.width = size * scale;
  canvas.height = size * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.globalAlpha = opacity;

  // Темний круглий фон + кольоровий обідок (колір = тип погоди)
  const c = size / 2;
  ctx.beginPath();
  ctx.arc(c, c, c - 1, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(8, 12, 20, 0.82)";
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = palette.ring;
  ctx.globalAlpha = opacity * 0.85;
  ctx.stroke();
  ctx.globalAlpha = opacity;

  if (data) {
    const [vx, vy, vw, vh] = data.viewBox;
    const box = size * 0.66;
    const k = box / Math.max(vw, vh);
    const ox = c - (vw * k) / 2 - vx * k;
    const oy = c - (vh * k) / 2 - vy * k;
    ctx.save();
    ctx.translate(ox, oy);
    ctx.scale(k, k);
    // Легка тінь — відділяє іконку від фону
    ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
    ctx.shadowBlur = 2 / k;
    data.paths.forEach((d, i) => {
      // У грози перший шлях — блискавка/краплі, у місяця другий — зірки
      let fill = palette.color;
      if (palette.accent) {
        if (code >= 95 && i === 0) fill = palette.accent;
        if (code === 0 && i > 0) fill = palette.accent;
      }
      ctx.fillStyle = fill;
      try {
        ctx.fill(new Path2D(d));
      } catch {
        /* Path2D недоступний — пропускаємо шлях */
      }
    });
    ctx.restore();
  }

  if (dangerColor) {
    const r = size * 0.19;
    ctx.beginPath();
    ctx.arc(size - r, r, r, 0, Math.PI * 2);
    ctx.fillStyle = dangerColor;
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${Math.round(r * 1.6)}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("!", size - r, r + 0.5);
  }

  // Chart.js малює картинку розміром style.width × style.height.
  // Підміняємо лише ці JS-властивості — сам бітмап лишається великим і різким.
  Object.defineProperty(canvas, "width", { value: size, configurable: true });
  Object.defineProperty(canvas, "height", { value: size, configurable: true });
  return canvas;
};

const createHiDpiCanvas = (size) => {
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const scale = Math.min(4, Math.max(2, Math.ceil(dpr)));
  const canvas = document.createElement("canvas");
  canvas.width = size * scale;
  canvas.height = size * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  return { canvas, ctx };
};

const WIND_COLORS = {
  normal: { fill: "#38BDF8", ring: "#0EA5E9", glow: "rgba(56, 189, 248, 0.55)" },
  strong: { fill: "#FF8A1F", ring: "#FF6A00", glow: "rgba(255, 106, 0, 0.6)" },
};

/**
 * Стрілка вітру для точок Chart.js (react-icons TbNavigationFilled, векторно).
 * degrees — метеорологічний напрямок (звідки дме), стрілка показує, КУДИ дме вітер,
 * так само як ⬇ у блоках прогнозу. strong — сильний вітер (помаранчева).
 */
export const createChartWindArrow = (degrees, size = 22, opacity = 1, strong = false) => {
  const { canvas, ctx } = createHiDpiCanvas(size);
  const colors = strong ? WIND_COLORS.strong : WIND_COLORS.normal;
  const c = size / 2;
  ctx.globalAlpha = opacity;

  // Темний диск з кольоровим обідком — як у іконок погоди, щоб графік виглядав однаково
  ctx.beginPath();
  ctx.arc(c, c, c - 1, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(8, 12, 20, 0.85)";
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = colors.ring;
  ctx.stroke();

  const data = getComponentIconData("wind-arrow", TbNavigationFilled);
  if (data) {
    const [vx, vy, vw, vh] = data.viewBox;
    const box = size * 0.62;
    const k = box / Math.max(vw, vh);
    const angle = ((((Number(degrees) || 0) + 180) % 360) * Math.PI) / 180;
    ctx.save();
    ctx.translate(c, c);
    ctx.rotate(angle);
    ctx.scale(k, k);
    ctx.translate(-(vx + vw / 2), -(vy + vh / 2));
    ctx.shadowColor = colors.glow;
    ctx.shadowBlur = 3 / k;
    data.paths.forEach((d) => {
      try {
        const path = new Path2D(d);
        ctx.fillStyle = colors.fill;
        ctx.fill(path);
        ctx.shadowBlur = 0;
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
        ctx.stroke(path);
      } catch {
        /* Path2D недоступний — пропускаємо */
      }
    });
    ctx.restore();
  }

  Object.defineProperty(canvas, "width", { value: size, configurable: true });
  Object.defineProperty(canvas, "height", { value: size, configurable: true });
  return canvas;
};

const LABEL_FONT_PX = 10;
const LABEL_FONT = `bold ${LABEL_FONT_PX}px system-ui, -apple-system, 'Segoe UI', sans-serif`;
const LABEL_HEIGHT = LABEL_FONT_PX + 2;
// Запасні відстані від точки, якщо на основному місці підпис на щось налазить
const LABEL_EXTRA_STEPS = [0, 8, 16];

const boxesOverlap = (a, b) =>
  a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

// Прямокутник, який займає точка (іконка-картинка або кружечок)
const pointBox = (point) => {
  const style = point.options?.pointStyle;
  const isImage = style && typeof style === "object" && "width" in style;
  const halfW = isImage ? style.width / 2 : (point.options?.radius ?? 3) + 1;
  const halfH = isImage ? style.height / 2 : (point.options?.radius ?? 3) + 1;
  return { left: point.x - halfW, right: point.x + halfW, top: point.y - halfH, bottom: point.y + halfH };
};

/**
 * Плагін Chart.js: маленькі підписи значень біля точок.
 * Набір даних задає valueLabels (масив рядків) і valueLabelOffset
 * (px від центру точки: + під точкою, − над нею), valueLabelColor, valueLabelOpacity.
 * Підписи не накладаються ні один на одного, ні на іконки й стрілки інших ліній:
 * якщо на своєму місці тісно, підпис переходить на інший бік або трохи далі,
 * а коли місця немає зовсім — не малюється.
 */
export const valueLabelsPlugin = {
  id: "valueLabels",
  afterDatasetsDraw(chart) {
    const { ctx, chartArea } = chart;
    ctx.save();
    ctx.font = LABEL_FONT;

    // 1. Усі видимі точки — перешкоди для підписів
    const obstacles = [];
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      if (!chart.isDatasetVisible(datasetIndex) || dataset.isTrend) return;
      chart.getDatasetMeta(datasetIndex).data.forEach((point, i) => {
        if (point.skip || !(point.options?.radius > 0)) return;
        obstacles.push({ datasetIndex, i, box: pointBox(point) });
      });
    });

    // 2. Розставляємо підписи по черзі ліній, перевіряючи вже поставлені
    const placed = [];
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const labels = dataset.valueLabels;
      if (!Array.isArray(labels) || !chart.isDatasetVisible(datasetIndex)) return;
      const opacity = dataset.valueLabelOpacity ?? 1;
      if (opacity <= 0) return;
      const offset = dataset.valueLabelOffset ?? 14;
      const distance = Math.abs(offset);
      const preferBelow = offset >= 0;

      chart.getDatasetMeta(datasetIndex).data.forEach((point, i) => {
        const text = labels[i];
        if (text === null || text === undefined || text === "" || point.skip) return;
        const x = point.x;
        if (x < chartArea.left - 20 || x > chartArea.right + 20) return;
        const halfW = ctx.measureText(text).width / 2 + 2;

        let spot = null;
        for (const extra of LABEL_EXTRA_STEPS) {
          for (const below of [preferBelow, !preferBelow]) {
            const y = point.y + (below ? distance + extra : -(distance + extra));
            const box = below
              ? { left: x - halfW, right: x + halfW, top: y, bottom: y + LABEL_HEIGHT }
              : { left: x - halfW, right: x + halfW, top: y - LABEL_HEIGHT, bottom: y };
            if (box.top < chartArea.top || box.bottom > chartArea.bottom) continue;
            const hitsPoint = obstacles.some(
              (o) => !(o.datasetIndex === datasetIndex && o.i === i) && boxesOverlap(box, o.box),
            );
            if (hitsPoint || placed.some((p) => boxesOverlap(box, p.box))) continue;
            spot = { x, y, below, box };
            break;
          }
          if (spot) break;
        }
        if (!spot) return; // місця немає — краще без підпису, ніж каша

        placed.push({
          ...spot,
          text,
          opacity,
          color: dataset.valueLabelColor || "#ffffff",
        });
      });
    });

    // 3. Малюємо
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.85)";
    placed.forEach(({ x, y, below, text, opacity, color }) => {
      ctx.globalAlpha = opacity;
      ctx.textBaseline = below ? "top" : "bottom";
      ctx.fillStyle = color;
      ctx.strokeText(text, x, y);
      ctx.fillText(text, x, y);
    });
    ctx.restore();
  },
};
