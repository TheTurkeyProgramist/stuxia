// Шари «Карти Стихії» — спільні для карти й скрипта scripts/weather-map/build.mjs,
// тож без імпортів. Значення кодуються в один байт каналу PNG.

// Підняти, якщо змінюється склад файлів чи кодування: карта попросить перезібрати дані
export const DATA_VERSION = 7;

export const WIND_RANGE = [-102.4, 101.6]; // м/с, складові u та v; крок 0.8, тож нуль точний

// file + channel — де лежить шар; sqrt — більша точність для малих значень;
// stops: [значення, R, G, B, непрозорість 0–1]
// lightBase — крізь шар видно світлу підкладку, тож частинки вітру малюються темними
const TEMPERATURE_STOPS = [
  [-50, 120, 40, 140], [-30, 70, 60, 190], [-15, 40, 120, 230], [0, 90, 200, 230], [8, 90, 200, 130],
  [16, 200, 220, 80], [24, 250, 180, 50], [32, 235, 90, 40], [42, 140, 20, 40],
];

// Висоти, крім приземної. Це ізобаричні рівні GFS: висота приблизна й рахується від рівня моря.
// Файл h<метри> має ту саму будову, що field: u, v, температура
export const ALTITUDES = [
  { meters: 750, mb: 925 },
  { meters: 1500, mb: 850 },
  { meters: 3000, mb: 700 },
  { meters: 4000, mb: 600 },
  { meters: 5500, mb: 500 },
  { meters: 9000, mb: 300 },
];
// Шари, які мають значення на висоті
export const ALTITUDE_LAYERS = new Set(["temperature", "windSpeed"]);

export const LAYERS = [
  { id: "temperature", file: "field", channel: 2, range: [-70, 55], unit: "°C", stops: TEMPERATURE_STOPS },
  // Рахується під час збирання з температури, вологості й вітру (extra, канал 2)
  { id: "feelsLike", file: "extra", channel: 2, range: [-70, 55], unit: "°C", stops: TEMPERATURE_STOPS },
  {
    id: "precipitation", file: "water", channel: 0, range: [0, 60], sqrt: true, unitKey: "unitRain", lightBase: true,
    stops: [
      [0, 90, 170, 255, 0], [0.1, 120, 190, 255, 0.25], [0.5, 70, 150, 250, 0.75], [2, 40, 90, 220], [5, 40, 170, 80],
      [10, 240, 200, 40], [20, 230, 70, 40], [40, 160, 30, 140],
    ],
  },
  {
    id: "clouds", file: "water", channel: 1, range: [0, 100], unit: "%",
    stops: [[0, 120, 130, 150, 0], [25, 120, 130, 150, 0.25], [60, 100, 108, 128, 0.65], [100, 70, 76, 96, 0.95]],
  },
  {
    id: "pressure", file: "water", channel: 2, range: [940, 1060], unitKey: "unitPressure",
    // Ізобари через кожні 4 гПа (styxiaIsolines.js)
    isolines: { step: 4 },
    stops: [
      [970, 90, 40, 140], [990, 50, 100, 210], [1005, 90, 190, 200], [1013, 200, 220, 170], [1022, 240, 180, 70],
      [1040, 190, 50, 40],
    ],
  },
  {
    id: "humidity", file: "air", channel: 0, range: [0, 100], unit: "%",
    stops: [[0, 170, 100, 40], [30, 225, 185, 100], [50, 210, 220, 160], [70, 90, 190, 170], [100, 30, 70, 170]],
  },
  {
    // Швидкість рахується з u та v, окремого каналу не має
    id: "windSpeed", file: "field", fromWind: true, range: [0, 100], unitKey: "windUnit",
    stops: [
      [0, 80, 100, 190], [3, 70, 160, 210], [6, 80, 190, 120], [10, 220, 210, 60], [15, 240, 140, 40],
      [22, 220, 50, 60], [35, 140, 30, 150],
    ],
  },
  {
    id: "gusts", file: "air", channel: 1, range: [0, 75], unitKey: "windUnit",
    stops: [
      [0, 80, 100, 190], [5, 70, 160, 210], [10, 80, 190, 120], [15, 220, 210, 60], [20, 240, 140, 40],
      [30, 220, 50, 60], [45, 140, 30, 150],
    ],
  },
  {
    id: "snow", file: "air", channel: 2, range: [0, 300], sqrt: true, unitKey: "unitSnow", lightBase: true,
    stops: [
      [0, 200, 160, 240, 0], [1, 200, 160, 240, 0.6], [5, 170, 110, 230], [20, 130, 70, 200], [50, 100, 40, 160],
      [150, 70, 15, 110],
    ],
  },
  {
    id: "storm", file: "extra", channel: 0, range: [0, 5000], sqrt: true, unitKey: "unitStorm", lightBase: true,
    // Пояснення в панелі: рівні й колір позначки (тексти — climateMap.styxia.info.storm.*)
    info: {
      levels: [
        { key: "low", from: 0, to: 300, color: [250, 230, 90] },
        { key: "normal", from: 300, to: 1000, color: [250, 175, 50] },
        { key: "high", from: 1000, to: null, color: [220, 40, 50] },
      ],
    },
    stops: [
      [0, 250, 230, 90, 0], [100, 250, 230, 90, 0.2], [500, 250, 200, 50, 0.8], [1000, 245, 130, 40],
      [2000, 220, 40, 50], [3500, 150, 20, 140],
    ],
  },
  {
    id: "visibility", file: "extra", channel: 1, range: [0, 25], unitKey: "unitVisibility", lightBase: true,
    // Що гірша видимість, то помітніше; ясно — прозоро
    stops: [[0, 90, 40, 120], [1, 190, 60, 60], [4, 240, 150, 50], [10, 240, 220, 110, 0.5], [20, 240, 240, 200, 0]],
  },
];

export const encodeValue = (value, { range: [min, max], sqrt }) => {
  const k = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return Math.round((sqrt ? Math.sqrt(k) : k) * 255);
};

export const decodeValue = (byte, { range: [min, max], sqrt }) => {
  const k = byte / 255;
  return min + (sqrt ? k * k : k) * (max - min);
};

/** [R, G, B, A 0–255] для значення за шкалою шару. */
export const colorFor = (value, { stops }) => {
  let i = 1;
  while (i < stops.length - 1 && value > stops[i][0]) i += 1;
  const a = stops[i - 1];
  const b = stops[i];
  const k = Math.max(0, Math.min(1, (value - a[0]) / (b[0] - a[0])));
  const mix = (from, to) => Math.round(from + (to - from) * k);
  return [mix(a[1], b[1]), mix(a[2], b[2]), mix(a[3], b[3]), mix((a[4] ?? 1) * 255, (b[4] ?? 1) * 255)];
};

/** Підпис значення шару для датчика під курсором: «+7.3 °C», «1013 гПа». До 10 — один знак після коми. */
export const formatLayerValue = (value, layerId, unit) => {
  const rounded = Math.abs(value) < 10 ? (Math.round(value * 10) / 10).toFixed(1) : String(Math.round(value));
  const text = rounded === "-0.0" ? "0.0" : rounded;
  return `${layerId === "temperature" && value >= 0.05 ? "+" : ""}${text} ${unit}`.trim();
};
