// Одиниці виміру. Усі дані в картках зберігаються в SI-подібних базових одиницях:
// °C, м/с, гПа, км (видимість), мм (опади), см (сніг), м (висота).

export const DEFAULT_UNITS = {
  temp: "C",
  wind: "ms",
  pressure: "hpa",
  distance: "km",
  precip: "mm",
};

export const METRIC_UNITS = { ...DEFAULT_UNITS };
export const IMPERIAL_UNITS = {
  temp: "F",
  wind: "mph",
  pressure: "inhg",
  distance: "mi",
  precip: "in",
};

const sameUnits = (a, b) => Object.keys(DEFAULT_UNITS).every((k) => a?.[k] === b[k]);

// "metric" | "imperial" | "custom" — визначається за поточним набором одиниць
export const detectSystem = (units) =>
  sameUnits(units, METRIC_UNITS) ? "metric" : sameUnits(units, IMPERIAL_UNITS) ? "imperial" : "custom";

export const UNIT_GROUPS = [
  {
    key: "temp",
    title: "Температура",
    options: [
      { key: "C", label: "°C", hint: "Цельсій (рекомендовано)" },
      { key: "K", label: "K", hint: "Кельвіни" },
      { key: "F", label: "°F", hint: "Фаренгейти" },
    ],
  },
  {
    key: "wind",
    title: "Швидкість вітру",
    options: [
      { key: "ms", label: "м/с", hint: "Метри за секунду" },
      { key: "kmh", label: "км/год", hint: "Кілометри за годину" },
      { key: "mph", label: "миль/год", hint: "Милі за годину" },
      { key: "kn", label: "вуз.", hint: "Вузли" },
    ],
  },
  {
    key: "pressure",
    title: "Атмосферний тиск",
    options: [
      { key: "hpa", label: "гПа", hint: "Гектопаскалі" },
      { key: "mmhg", label: "мм рт. ст.", hint: "Міліметри ртутного стовпа" },
      { key: "inhg", label: "inHg", hint: "Дюйми ртутного стовпа" },
      { key: "kpa", label: "кПа", hint: "Кілопаскалі" },
    ],
  },
  {
    key: "distance",
    title: "Відстань і висота",
    options: [
      { key: "km", label: "км / м", hint: "Кілометри та метри" },
      { key: "mi", label: "милі / фути", hint: "Милі та фути" },
    ],
  },
  {
    key: "precip",
    title: "Опади, сніг, випаровування",
    options: [
      { key: "mm", label: "мм / см", hint: "Міліметри та сантиметри" },
      { key: "in", label: "дюйми", hint: "Дюйми" },
    ],
  },
];

const num = (v) => {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : null;
};

const round = (n, d = 1) => {
  const p = 10 ** d;
  return Math.round(n * p) / p;
};

// ---- Температура (вхід °C) ----
export const tempLabel = (u) => (u === "K" ? "K" : u === "F" ? "°F" : "°C");
export const convertTemp = (c, u) => {
  const n = num(c);
  if (n === null) return null;
  if (u === "F") return (n * 9) / 5 + 32;
  if (u === "K") return n + 273.15;
  return n;
};

// ---- Вітер (вхід м/с) ----
const WIND_FACTOR = { ms: 1, kmh: 3.6, mph: 2.236936, kn: 1.943844 };
const WIND_LABEL = { ms: "м/с", kmh: "км/год", mph: "миль/год", kn: "вуз." };
export const windLabel = (u) => WIND_LABEL[u] || "м/с";
export const convertWind = (ms, u) => {
  const n = num(ms);
  return n === null ? null : n * (WIND_FACTOR[u] ?? 1);
};

// ---- Тиск (вхід гПа) ----
const PRESSURE_FACTOR = { hpa: 1, kpa: 0.1, mmhg: 0.750062, inhg: 0.02953 };
const PRESSURE_LABEL = { hpa: "гПа", kpa: "кПа", mmhg: "мм рт. ст.", inhg: "inHg" };
export const pressureLabel = (u) => PRESSURE_LABEL[u] || "гПа";
export const convertPressure = (hpa, u) => {
  const n = num(hpa);
  return n === null ? null : n * (PRESSURE_FACTOR[u] ?? 1);
};

// ---- Опади (вхід мм) / сніг (вхід см) ----
export const precipLabel = (u) => (u === "in" ? "in" : "мм");
export const snowLabel = (u) => (u === "in" ? "in" : "см");
export const convertPrecip = (mm, u) => {
  const n = num(mm);
  return n === null ? null : u === "in" ? n / 25.4 : n;
};
export const convertSnow = (cm, u) => {
  const n = num(cm);
  return n === null ? null : u === "in" ? n / 2.54 : n;
};

// ---- Видимість (вхід км) / висота (вхід м) ----
export const visibilityLabel = (u) => (u === "mi" ? "миль" : "км");
export const heightLabel = (u) => (u === "mi" ? "ft" : "м");
export const convertVisibility = (km, u) => {
  const n = num(km);
  return n === null ? null : u === "mi" ? n * 0.621371 : n;
};
export const convertHeight = (m, u) => {
  const n = num(m);
  return n === null ? null : u === "mi" ? n * 3.28084 : n;
};

const out = (value, label, digits, space = true) =>
  value === null ? "—" : `${round(value, digits)}${space ? " " : ""}${label}`;

// Форматери для відображення. Приймають базове значення (число або рядок із одиницею).
export const makeFormatters = (units) => {
  const u = { ...DEFAULT_UNITS, ...(units || {}) };
  return {
    units: u,
    temp: (c) => {
      const v = convertTemp(c, u.temp);
      return v === null ? "—" : u.temp === "F" ? `${Math.round(v)}°F` : out(v, tempLabel(u.temp), 1, false);
    },
    wind: (ms, digits = 1) => out(convertWind(ms, u.wind), windLabel(u.wind), digits),
    pressure: (hpa) => {
      const d = u.pressure === "inhg" ? 2 : u.pressure === "kpa" ? 1 : 0;
      return out(convertPressure(hpa, u.pressure), pressureLabel(u.pressure), d);
    },
    precip: (mm, digits = 1) => out(convertPrecip(mm, u.precip), precipLabel(u.precip), u.precip === "in" ? 2 : digits),
    snow: (cm, digits = 1) => out(convertSnow(cm, u.precip), snowLabel(u.precip), u.precip === "in" ? 2 : digits),
    visibility: (km) => out(convertVisibility(km, u.distance), visibilityLabel(u.distance), 1),
    height: (m) => out(convertHeight(m, u.distance), heightLabel(u.distance), 0),
    // числові значення для графіків
    windValue: (ms) => round(convertWind(ms, u.wind) ?? 0, 1),
    windAxis: `Вітер (${windLabel(u.wind)})`,
  };
};
