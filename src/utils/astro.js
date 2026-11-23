import * as SunCalc from "suncalc";
import i18n from "../i18n/i18n.js";

const at = (key, params) => i18n.t(`astro.${key}`, params);

// Астрономічні дані дня (Сонце, сутінки, Місяць) — спільні для детального прогнозу та блоків

const DEFAULT_LAT = 50.45;
const DEFAULT_LON = 30.52;

export const formatClock = (value) => {
  if (!value) return "—";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "—";
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};

export const getMoonData = (dateStr, lat = DEFAULT_LAT, lon = DEFAULT_LON) => {
  try {
    const date = new Date(dateStr || Date.now());
    const illum = SunCalc.getMoonIllumination(date);
    const moonTimes = SunCalc.getMoonTimes(date, lat || DEFAULT_LAT, lon || DEFAULT_LON);
    const phase = illum.phase;
    let phaseText = "";
    if (phase === 0) phaseText = `🌑 ${at("newMoon")}`;
    else if (phase < 0.25) phaseText = `🌒 ${at("waxingCrescent")}`;
    else if (phase === 0.25) phaseText = `🌓 ${at("firstQuarter")}`;
    else if (phase < 0.5) phaseText = `🌔 ${at("waxingGibbous")}`;
    else if (phase === 0.5) phaseText = `🌕 ${at("fullMoon")}`;
    else if (phase < 0.75) phaseText = `🌖 ${at("waningGibbous")}`;
    else if (phase === 0.75) phaseText = `🌗 ${at("lastQuarter")}`;
    else phaseText = `🌘 ${at("waningCrescent")}`;

    const rise = moonTimes.rise ? formatClock(moonTimes.rise) : at("noRise");
    const set = moonTimes.set ? formatClock(moonTimes.set) : at("noSet");

    return { phaseText, rise, set };
  } catch (e) {
    return { phaseText: "—", rise: "—", set: "—" };
  }
};

export const getTwilightData = (dateStr, lat = DEFAULT_LAT, lon = DEFAULT_LON) => {
  try {
    const date = new Date(dateStr || Date.now());
    const times = SunCalc.getTimes(date, lat || DEFAULT_LAT, lon || DEFAULT_LON);
    return {
      civilDawn: formatClock(times.dawn),
      civilDusk: formatClock(times.dusk),
      nauticalDawn: formatClock(times.nauticalDawn),
      nauticalDusk: formatClock(times.nauticalDusk),
      astroDawn: formatClock(times.nightEnd),
      astroDusk: formatClock(times.night),
    };
  } catch (e) {
    return { civilDawn: "—", civilDusk: "—", nauticalDawn: "—", nauticalDusk: "—", astroDawn: "—", astroDusk: "—" };
  }
};

const MAJOR_PHASES = [
  { at: 0, key: "newMoon" },
  { at: 0.25, key: "firstQuarter" },
  { at: 0.5, key: "fullMoon" },
  { at: 0.75, key: "lastQuarter" },
];

const phaseName = (phase) => {
  if (phase < 0.02 || phase > 0.98) return at("newMoon");
  if (phase < 0.23) return at("waxingCrescent");
  if (phase < 0.27) return at("firstQuarter");
  if (phase < 0.48) return at("waxingGibbous");
  if (phase < 0.52) return at("fullMoon");
  if (phase < 0.73) return at("waningGibbous");
  if (phase < 0.77) return at("lastQuarter");
  return at("waningCrescent");
};

// Найближча головна фаза (молодик, чверті, повня) після дати — пошук кроком 3 год
const findNextMajorPhase = (from) => {
  const STEP = 3 * 3600000;
  let prev = SunCalc.getMoonIllumination(from).phase;
  for (let t = from.getTime() + STEP; t < from.getTime() + 31 * 86400000; t += STEP) {
    const cur = SunCalc.getMoonIllumination(new Date(t)).phase;
    for (const target of MAJOR_PHASES) {
      const crossed =
        target.at === 0 ? cur < prev : prev < target.at && cur >= target.at;
      if (crossed) return { name: at(target.key), date: new Date(t) };
    }
    prev = cur;
  }
  return null;
};

// Положення на шкалі від start до end (0..1) і чи «зараз» усередині проміжку
export const getScaleProgress = (start, end, now = Date.now()) => {
  const s = start ? new Date(start).getTime() : NaN;
  const e = end ? new Date(end).getTime() : NaN;
  if (isNaN(s) || isNaN(e) || e <= s) return { progress: null, isActive: false };
  if (now <= s) return { progress: 0, isActive: false };
  if (now >= e) return { progress: 1, isActive: false };
  return { progress: (now - s) / (e - s), isActive: true };
};

// Сонце для шкали: різниця тривалості дня з учорашнім днем (у хвилинах)
export const getDayLengthDiff = (dateStr, lat = DEFAULT_LAT, lon = DEFAULT_LON) => {
  try {
    const date = new Date(dateStr || Date.now());
    const lengthOf = (d) => {
      const t = SunCalc.getTimes(d, lat || DEFAULT_LAT, lon || DEFAULT_LON);
      return (t.sunset - t.sunrise) / 60000;
    };
    const diff = Math.round(lengthOf(date) - lengthOf(new Date(date.getTime() - 86400000)));
    return isNaN(diff) ? null : diff;
  } catch (e) {
    return null;
  }
};

// Полярна ніч / полярний день на дату: Сонце цілу добу під горизонтом / над ним.
// Повертає { type: "night" | "day", days, endDate } — скільки діб лишилось до першої звичайної доби,
// або null, якщо Сонце сьогодні сходить і заходить.
export const getPolarInfo = (dateStr, lat = DEFAULT_LAT, lon = DEFAULT_LON) => {
  try {
    if (lat == null || lon == null || Math.abs(lat) < 60) return null;
    const date = new Date(dateStr || Date.now());
    date.setHours(12, 0, 0, 0);
    const isNormal = (d) => {
      const t = SunCalc.getTimes(d, lat, lon);
      // suncalc 2.x віддає null, коли Сонце не сходить/не заходить (старіші — Invalid Date)
      return !!t.sunrise && !!t.sunset && !isNaN(t.sunrise.getTime()) && !isNaN(t.sunset.getTime());
    };
    if (isNormal(date)) return null;
    const noon = SunCalc.getTimes(date, lat, lon).solarNoon;
    const type = SunCalc.getPosition(noon, lat, lon).altitude < 0 ? "night" : "day";
    for (let i = 1; i <= 200; i++) {
      const next = new Date(date.getTime() + i * 86400000);
      if (isNormal(next)) return { type, days: i, endDate: next };
    }
    return { type, days: null, endDate: null };
  } catch (e) {
    return null;
  }
};

// Місяць для шкали: фаза, освітленість, схід/захід і наступна головна фаза
export const getMoonDetails = (dateStr, lat = DEFAULT_LAT, lon = DEFAULT_LON) => {
  try {
    const date = new Date(dateStr || Date.now());
    const { phase, fraction } = SunCalc.getMoonIllumination(date);
    const times = SunCalc.getMoonTimes(date, lat || DEFAULT_LAT, lon || DEFAULT_LON);
    return {
      phase,
      fraction,
      name: phaseName(phase),
      riseDate: times.rise || null,
      setDate: times.set || null,
      rise: times.rise ? formatClock(times.rise) : at("noRise"),
      set: times.set ? formatClock(times.set) : at("noSet"),
      nextPhase: findNextMajorPhase(date),
    };
  } catch (e) {
    return null;
  }
};

export const getDayLength = (riseStr, setStr) => {
  if (!riseStr || !setStr) return "—";
  const r = new Date(riseStr);
  const s = new Date(setStr);
  if (isNaN(r.getTime()) || isNaN(s.getTime())) return "—";
  const diffMs = s - r;
  if (diffMs < 0) return "—";
  const hrs = Math.floor(diffMs / 3600000);
  const mins = Math.floor((diffMs % 3600000) / 60000);
  return at("dayLength", { h: hrs, m: mins });
};
