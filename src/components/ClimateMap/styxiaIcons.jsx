// Іконки Карти Стихії: погода біля точок міст (малюються в картинки для MapLibre) і значки шарів.
// Лише react-icons — без емодзі.
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FiMap } from "react-icons/fi";
import {
  WiBarometer, WiCloud, WiCloudy, WiDayCloudy, WiDaySunny, WiFog, WiHumidity, WiLightning, WiNightAltCloudy,
  WiNightClear, WiRain, WiShowers, WiSleet, WiSnow, WiSprinkle, WiStrongWind, WiThermometer, WiThermometerExterior, WiThunderstorm, WiWindy,
} from "react-icons/wi";

// Значок кожного шару в панелі
export const LAYER_ICONS = {
  temperature: WiThermometer,
  feelsLike: WiThermometerExterior,
  precipitation: WiRain,
  clouds: WiCloud,
  pressure: WiBarometer,
  humidity: WiHumidity,
  windSpeed: WiStrongWind,
  gusts: WiWindy,
  snow: WiSnow,
  storm: WiLightning,
  visibility: WiFog,
  none: FiMap,
};

// Ключ із iconKey() (styxiaPoints.js) → [іконка, колір круга]. Колір підказує погоду ще до того,
// як розгледиш значок: сонце — бурштиновий, дощ — синій, сніг — бірюзовий, гроза — фіолетовий
const WEATHER_ICONS = {
  "clear-day": [WiDaySunny, "#f59e0b"],
  "clear-night": [WiNightClear, "#4338ca"],
  "partly-day": [WiDayCloudy, "#f97316"],
  "partly-night": [WiNightAltCloudy, "#475569"],
  cloudy: [WiCloudy, "#64748b"],
  fog: [WiFog, "#94a3b8"],
  drizzle: [WiSprinkle, "#0ea5e9"],
  showers: [WiShowers, "#1d4ed8"],
  rain: [WiRain, "#2563eb"],
  sleet: [WiSleet, "#0e7490"],
  snow: [WiSnow, "#06b6d4"],
  storm: [WiThunderstorm, "#7c3aed"],
};

const SIZE = 64;

const drawIcon = async (Icon, color) => {
  const svg = renderToStaticMarkup(<Icon size={52} color="#ffffff" />);
  const image = new Image();
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  await image.decode();
  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  // Кольорове коло з білою обводкою: видно на будь-якому шарі, білий значок — на будь-якому кольорі
  ctx.beginPath();
  ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2 - 3, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
  ctx.drawImage(image, (SIZE - 52) / 2, (SIZE - 52) / 2, 52, 52);
  return { data: ctx.getImageData(0, 0, SIZE, SIZE), url: canvas.toDataURL("image/png") };
};

// Намальовані іконки живуть, доки живе сторінка: нова карта бере готові
const RENDERED = new Map(); // ключ → { data, url }

// Колір кружечка іконки кожного шару — біля міст, коли вибрано цей шар (ключ картинки — layer-<id>)
const LAYER_COLORS = {
  precipitation: "#2563eb", clouds: "#64748b", pressure: "#7c3aed", humidity: "#0e7490", windSpeed: "#0d9488",
  gusts: "#0f766e", snow: "#06b6d4", storm: "#d97706", visibility: "#6b7280",
};
const ALL_ICONS = {
  ...WEATHER_ICONS,
  ...Object.fromEntries(Object.entries(LAYER_COLORS).map(([id, color]) => [`layer-${id}`, [LAYER_ICONS[id], color]])),
};

/** Адреса картинки іконки (для картки-тултіпа); null, поки іконки не намальовано. */
export const weatherIconUrl = (key) => RENDERED.get(key)?.url || null;

/** Додає в стиль карти картинку на кожен тип погоди (ім’я = ключ іконки). */
export const addWeatherIcons = async (map) => {
  await Promise.all(
    Object.entries(ALL_ICONS).map(async ([key, [Icon, color]]) => {
      if (!RENDERED.has(key)) RENDERED.set(key, await drawIcon(Icon, color));
      if (!map.hasImage(key)) map.addImage(key, RENDERED.get(key).data, { pixelRatio: 2 });
    }),
  );
};
