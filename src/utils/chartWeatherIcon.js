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
const getIconData = (code, isDay) => {
  const key = `${code}|${isDay ? 1 : 0}`;
  if (iconDataCache.has(key)) return iconDataCache.get(key);
  let data = null;
  try {
    const base = pickIcon(code, isDay)({});
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
