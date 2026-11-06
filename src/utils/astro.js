import * as SunCalc from "suncalc";

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
    if (phase === 0) phaseText = "🌑 Молодик";
    else if (phase < 0.25) phaseText = "🌒 Зростаючий серп";
    else if (phase === 0.25) phaseText = "🌓 Перша чверть";
    else if (phase < 0.5) phaseText = "🌔 Зростаючий місяць";
    else if (phase === 0.5) phaseText = "🌕 Повня";
    else if (phase < 0.75) phaseText = "🌖 Спадаючий місяць";
    else if (phase === 0.75) phaseText = "🌗 Остання чверть";
    else phaseText = "🌘 Спадаючий серп";

    const rise = moonTimes.rise ? formatClock(moonTimes.rise) : "Не сходить";
    const set = moonTimes.set ? formatClock(moonTimes.set) : "Не заходить";

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
  { at: 0, name: "Молодик" },
  { at: 0.25, name: "Перша чверть" },
  { at: 0.5, name: "Повня" },
  { at: 0.75, name: "Остання чверть" },
];

const phaseName = (phase) => {
  if (phase < 0.02 || phase > 0.98) return "Молодик";
  if (phase < 0.23) return "Зростаючий серп";
  if (phase < 0.27) return "Перша чверть";
  if (phase < 0.48) return "Зростаючий місяць";
  if (phase < 0.52) return "Повня";
  if (phase < 0.73) return "Спадаючий місяць";
  if (phase < 0.77) return "Остання чверть";
  return "Спадаючий серп";
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
      if (crossed) return { name: target.name, date: new Date(t) };
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
      rise: times.rise ? formatClock(times.rise) : "Не сходить",
      set: times.set ? formatClock(times.set) : "Не заходить",
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
  return `${hrs}г ${mins}хв`;
};
