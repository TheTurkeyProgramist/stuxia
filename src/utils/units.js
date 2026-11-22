import i18n from "../i18n/i18n.js";
import { dateLocale } from "./weatherText.js";
// Одиниці виміру. Усі дані в картках зберігаються в SI-подібних базових одиницях:
// °C, м/с, гПа, км (видимість), мм (опади), см (сніг), м (висота).

export const DEFAULT_UNITS = {
  temp: "C",
  wind: "ms",
  pressure: "hpa",
  distance: "km",
  precip: "mm",
  date: "num", // підпис дня: "num" — 22.11, "month" — 22 лист
};

export const METRIC_UNITS = { ...DEFAULT_UNITS };
export const IMPERIAL_UNITS = {
  temp: "F",
  wind: "mph",
  pressure: "inhg",
  distance: "mi",
  precip: "in",
};

// Система (метрична/імперська) — лише за одиницями виміру; формат дати на неї не впливає
const MEASURE_KEYS = ["temp", "wind", "pressure", "distance", "precip"];
const sameUnits = (a, b) => MEASURE_KEYS.every((k) => a?.[k] === b[k]);

// ---- Дата в підписах днів (вхід ISO "YYYY-MM-DD") ----
// "num" — 22.11, "month" — 22 лист (місяць словом мовою сайту, без крапки скорочення)
export const formatDateLabel = (iso, mode = "num") => {
  if (!iso || !/^\d{4}-\d{2}-\d{2}/.test(iso)) return "";
  const d = new Date(`${String(iso).slice(0, 10)}T12:00:00`);
  if (mode === "month") {
    return d.toLocaleDateString(dateLocale(), { day: "numeric", month: "short" }).replace(/\.$/, "");
  }
  return d.toLocaleDateString(dateLocale(), { day: "numeric", month: "2-digit" });
};
const todayIso = () => {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
};

// "metric" | "imperial" | "custom" — визначається за поточним набором одиниць
export const detectSystem = (units) =>
  sameUnits(units, METRIC_UNITS) ? "metric" : sameUnits(units, IMPERIAL_UNITS) ? "imperial" : "custom";

export const UNIT_GROUPS = [
  {
    key: "temp",
    get title() { return i18n.t("ui.units.temperatura"); },
    options: [
      { key: "C", label: "°C", get hint() { return i18n.t("ui.units.tselsiiRekomendovano"); } },
      { key: "K", label: "K", get hint() { return i18n.t("ui.units.kelviny"); } },
      { key: "F", label: "°F", get hint() { return i18n.t("ui.units.farenheity"); } },
    ],
  },
  {
    key: "wind",
    get title() { return i18n.t("ui.units.shvydkistVitru"); },
    options: [
      { key: "ms", get label() { return i18n.t("ui.units.mS"); }, get hint() { return i18n.t("ui.units.metryZaSekundu"); } },
      { key: "kmh", get label() { return i18n.t("ui.units.kmHod"); }, get hint() { return i18n.t("ui.units.kilometryZaHodynu"); } },
      { key: "mph", get label() { return i18n.t("ui.units.mylHod"); }, get hint() { return i18n.t("ui.units.myliZaHodynu"); } },
      { key: "kn", get label() { return i18n.t("ui.units.vuz"); }, get hint() { return i18n.t("ui.units.vuzly"); } },
    ],
  },
  {
    key: "pressure",
    get title() { return i18n.t("ui.units.atmosfernyiTysk"); },
    options: [
      { key: "hpa", get label() { return i18n.t("ui.units.hpa"); }, get hint() { return i18n.t("ui.units.hektopaskali"); } },
      { key: "mmhg", get label() { return i18n.t("ui.units.mmRtSt"); }, get hint() { return i18n.t("ui.units.milimetryRtutnohoStovpa"); } },
      { key: "inhg", label: "inHg", get hint() { return i18n.t("ui.units.diuimyRtutnohoStovpa"); } },
      { key: "kpa", get label() { return i18n.t("ui.units.kpa"); }, get hint() { return i18n.t("ui.units.kilopaskali"); } },
    ],
  },
  {
    key: "distance",
    get title() { return i18n.t("ui.units.vidstanIVysota"); },
    options: [
      { key: "km", get label() { return i18n.t("ui.units.kmM"); }, get hint() { return i18n.t("ui.units.kilometryTaMetry"); } },
      { key: "mi", get label() { return i18n.t("ui.units.myliFuty"); }, get hint() { return i18n.t("ui.units.myliTaFuty"); } },
    ],
  },
  {
    key: "precip",
    get title() { return i18n.t("ui.units.opadySnihVyparovuvannia"); },
    options: [
      { key: "mm", get label() { return i18n.t("ui.units.mmSm"); }, get hint() { return i18n.t("ui.units.milimetryTaSantymetry"); } },
      { key: "in", get label() { return i18n.t("ui.units.diuimy"); }, get hint() { return i18n.t("ui.units.diuimy2"); } },
    ],
  },
  {
    key: "date",
    get title() { return i18n.t("ui.units.data"); },
    options: [
      { key: "num", get label() { return formatDateLabel(todayIso(), "num"); }, get hint() { return i18n.t("ui.units.dataCyframy"); } },
      { key: "month", get label() { return formatDateLabel(todayIso(), "month"); }, get hint() { return i18n.t("ui.units.dataMisiatsSlovom"); } },
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
const WIND_LABEL = { get ms() { return i18n.t("ui.units.mS"); }, get kmh() { return i18n.t("ui.units.kmHod"); }, get mph() { return i18n.t("ui.units.mylHod"); }, get kn() { return i18n.t("ui.units.vuz"); } };
export const windLabel = (u) => WIND_LABEL[u] || i18n.t("ui.units.mS");
export const convertWind = (ms, u) => {
  const n = num(ms);
  return n === null ? null : n * (WIND_FACTOR[u] ?? 1);
};

// ---- Тиск (вхід гПа) ----
const PRESSURE_FACTOR = { hpa: 1, kpa: 0.1, mmhg: 0.750062, inhg: 0.02953 };
const PRESSURE_LABEL = { get hpa() { return i18n.t("ui.units.hpa"); }, get kpa() { return i18n.t("ui.units.kpa"); }, get mmhg() { return i18n.t("ui.units.mmRtSt"); }, inhg: "inHg" };
export const pressureLabel = (u) => PRESSURE_LABEL[u] || i18n.t("ui.units.hpa");
export const convertPressure = (hpa, u) => {
  const n = num(hpa);
  return n === null ? null : n * (PRESSURE_FACTOR[u] ?? 1);
};

// ---- Опади (вхід мм) / сніг (вхід см) ----
export const precipLabel = (u) => (u === "in" ? "in" : i18n.t("ui.units.mm"));
export const snowLabel = (u) => (u === "in" ? "in" : i18n.t("ui.units.sm"));
export const convertPrecip = (mm, u) => {
  const n = num(mm);
  return n === null ? null : u === "in" ? n / 25.4 : n;
};
export const convertSnow = (cm, u) => {
  const n = num(cm);
  return n === null ? null : u === "in" ? n / 2.54 : n;
};

// ---- Видимість (вхід км) / висота (вхід м) ----
export const visibilityLabel = (u) => (u === "mi" ? i18n.t("ui.units.myl") : i18n.t("ui.units.km"));
export const heightLabel = (u) => (u === "mi" ? "ft" : i18n.t("ui.units.m"));
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
    date: (iso) => formatDateLabel(iso, u.date),
    // числові значення для графіків
    windValue: (ms) => round(convertWind(ms, u.wind) ?? 0, 1),
    windAxis: i18n.t("ui.units.viter", { v0: windLabel(u.wind) }),
  };
};
