/**
 * ruleBasedForecast.js
 * Автономний експертний рушій погодного прогнозу на основі набору функцій,
 * метеорологічних умов та евристичних збігів (без виклику ШІ та без сторонніх запитів).
 * Тексти позбавлені сирих емодзі задля використання нативних React-іконок.
 */

import { toGenitive } from "./genitive";
import { isSnowCode, isRainCode } from "./weatherText.js";

import i18n from "../i18n/i18n.js";
// Теги бейджів (rain, wind, rise, drop, night): логіка й іконки дивляться на них, а не на текст,
// тож бейджі можна перекладати будь-якою мовою
const BADGE_TAGS = new Map();
const badge = (tags, text) => {
  BADGE_TAGS.set(text, tags.split(" ").filter(Boolean));
  return text;
};
export const badgeHas = (text, tag) => Boolean(text) && (BADGE_TAGS.get(text) || []).includes(tag);

// Допоміжна функція парсингу числових значень
const parseNum = (val, fallback = 0) => {
  if (val === null || val === undefined) return fallback;
  if (typeof val === "number") return isNaN(val) ? fallback : val;
  const match = String(val).match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : fallback;
};

// Локальна дата "YYYY-MM-DD"
const toIsoDate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

// Дні прогнозу від сьогодні: минулі дні (fullDate раніше за сьогодні) відкидаються
export const upcomingDays = (daily16 = [], now = new Date()) => {
  const today = toIsoDate(now);
  return daily16.filter((d) => !(d?.fullDate && d.fullDate < today));
};

// Форматування температури із знаком
const formatTempWithSign = (val, unit = "C") => {
  const num = parseNum(val, null);
  if (num === null) return "—";
  let displayNum;
  let symbol = "°C";

  if (unit === "F") {
    displayNum = Math.round((num * 9) / 5 + 32);
    symbol = "°F";
  } else if (unit === "K") {
    displayNum = Math.round((num + 273.15) * 10) / 10;
    symbol = "K";
  } else {
    displayNum = Math.round(num * 10) / 10;
  }

  const sign = displayNum > 0 ? "+" : "";
  return `${sign}${displayNum}${symbol}`;
};

/**
 * 1. Аналіз балансу "день vs ніч" та добової амплітуди
 */
export const analyzeDayNightContrast = (current, todayDaily, unit = "C") => {
  const currentTemp = parseNum(current?.temp, 0);
  const feelsLike = parseNum(current?.feels_like, currentTemp);
  const dayTemp = parseNum(todayDaily?.temp_day, currentTemp);
  const nightTemp = parseNum(todayDaily?.temp_night, currentTemp - 4);

  const delta = Math.round((dayTemp - nightTemp) * 10) / 10;
  const feelsDiff = Math.round((feelsLike - currentTemp) * 10) / 10;

  let message;
  let dnBadge = null;

  if (delta >= 11) {
    dnBadge = badge("night", i18n.t("newsWeather.ruleBasedForecast.kontrastDenNichC", { delta: delta }));
    message = i18n.t("newsWeather.ruleBasedForecast.sohodniVdenOchikuietsiaBlyzko", { v0: formatTempWithSign(dayTemp, unit), v1: formatTempWithSign(nightTemp, unit), delta: delta });
  } else if (delta >= 7) {
    dnBadge = badge("drop", i18n.t("newsWeather.ruleBasedForecast.pomirnyiSpadDoNochi"));
    message = i18n.t("newsWeather.ruleBasedForecast.dennaTemperaturaStanovytymeBlyzko", { v0: formatTempWithSign(dayTemp, unit), v1: formatTempWithSign(nightTemp, unit), delta: delta });
  } else if (delta <= 3 && delta >= -1) {
    dnBadge = badge("", i18n.t("newsWeather.ruleBasedForecast.rivnaDoba"));
    message = i18n.t("newsWeather.ruleBasedForecast.doboviKolyvanniaMinimalniVden", { v0: formatTempWithSign(dayTemp, unit), v1: formatTempWithSign(nightTemp, unit) });
  } else {
    message = i18n.t("newsWeather.ruleBasedForecast.sohodniTemperaturnyiHrafikVden", { v0: formatTempWithSign(dayTemp, unit), v1: formatTempWithSign(nightTemp, unit) });
  }

  // Додаємо аналіз відчуття (вітер / вологість)
  if (feelsDiff <= -3) {
    message += " " + i18n.t("newsWeather.ruleBasedForecast.cherezPoryvyVitruTa", { Math: Math.abs(feelsDiff), v1: formatTempWithSign(feelsLike, unit) });
  } else if (feelsDiff >= 3) {
    message += " " + i18n.t("newsWeather.ruleBasedForecast.cherezVysokuVolohistVidchuvaietsia", { v0: formatTempWithSign(feelsLike, unit) });
  }

  let warning = null;
  // Попередження про заморозки/ожеледь
  if (nightTemp <= 0 && dayTemp > 0) {
    warning = i18n.t("newsWeather.ruleBasedForecast.uvahaVnochiMozhlyviPrymorozky");
    message += ` ${warning}`;
  }

  return {
    dayTemp,
    nightTemp,
    delta,
    feelsLike,
    badge: dnBadge,
    message,
    warning,
  };
};

/**
 * 2. Годинний аналіз доби: чи піде дощ з другої половини дня, коли пік тепла, вітер
 */
export const analyzeHourlyTimeline = (hourly = [], unit = "C") => {
  if (!Array.isArray(hourly) || hourly.length === 0) {
    return {
      rainWindowText: i18n.t("newsWeather.ruleBasedForecast.daniProHodynnyiHrafik"),
      peakTempText: "",
      windTrendText: "",
      badges: [],
      windWarning: null,
    };
  }

  const next24 = hourly.slice(0, 24);
  const badges = [];

  // Парсинг годин для аналізу частин доби
  const itemsWithHour = next24.map((item) => {
    let hourNum = 12;
    if (item.time) {
      const match = item.time.match(/(\d{1,2})/);
      if (match) hourNum = parseInt(match[1], 10);
    }
    const temp = parseNum(item.tempNum ?? item.temp, 0);
    // Поле з Open-Meteo — precipitation_probability; pop лишено для старих даних
    const pop = parseNum(item.precipitation_probability ?? item.pop, 0);
    const precip = parseNum(item.precipitation, 0);
    const wind = parseNum(item.windNum ?? item.wind_speed, 0);
    const gust = parseNum(item.wind_gusts_10m ?? item.wind_gusts, 0);
    const visibility = item.visibility == null ? null : parseNum(item.visibility, null);
    const desc = (item.description || item.iconPlaceholder || "").toLowerCase();
    const code = item.weather_code;
    const hasCode = code !== undefined && code !== null;
    const isSnow = hasCode ? isSnowCode(code) : desc.includes("сніг") || desc.includes("snow");
    const isRain =
      pop >= 40 ||
      precip >= 0.3 ||
      (hasCode && isRainCode(code)) ||
      desc.includes("дощ") ||
      desc.includes("злива") ||
      desc.includes("мряка") ||
      desc.includes("rain") ||
      desc.includes("гроза");
    return { ...item, hourNum, temp, pop, precip, wind, gust, visibility, isRain, isSnow, desc };
  });

  // Пошук опадів: перша половина дня (до 14:00) vs друга половина дня (14:00 - 22:00)
  const morningRain = itemsWithHour.filter(
    (h) => h.hourNum >= 6 && h.hourNum < 14 && h.isRain
  );
  const afternoonRain = itemsWithHour.filter(
    (h) => h.hourNum >= 14 && h.hourNum <= 22 && h.isRain
  );
  const nightRain = itemsWithHour.filter(
    (h) => (h.hourNum < 6 || h.hourNum > 22) && h.isRain
  );

  let rainWindowText;

  if (afternoonRain.length > 0 && morningRain.length === 0) {
    const firstRainHour = afternoonRain[0].time || `${afternoonRain[0].hourNum}:00`;
    badges.push(badge("rain", i18n.t("newsWeather.ruleBasedForecast.zDruhoiPolovynyDnia")));
    rainWindowText = i18n.t("newsWeather.ruleBasedForecast.zDruhoiPolovynyDnia2", { firstRainHour: firstRainHour, v1: afternoonRain[0].pop || 65 });
  } else if (morningRain.length > 0 && afternoonRain.length === 0) {
    badges.push(badge("rain", i18n.t("newsWeather.ruleBasedForecast.doshchUPershiiPolovyni")));
    rainWindowText = i18n.t("newsWeather.ruleBasedForecast.osnovniOpadyZoseredzheniV");
  } else if (morningRain.length > 0 && afternoonRain.length > 0) {
    badges.push(badge("rain", i18n.t("newsWeather.ruleBasedForecast.zatiazhniOpady")));
    rainWindowText = i18n.t("newsWeather.ruleBasedForecast.opadyOchikuiutsiaIakU");
  } else if (nightRain.length > 0) {
    badges.push(badge("rain night", i18n.t("newsWeather.ruleBasedForecast.nichnyiDoshch")));
    rainWindowText = i18n.t("newsWeather.ruleBasedForecast.vdenSuttievykhOpadivNe");
  } else {
    badges.push(badge("", i18n.t("newsWeather.ruleBasedForecast.bezOpadivProtiahomDnia")));
    rainWindowText = i18n.t("newsWeather.ruleBasedForecast.uNaiblyzhchi24Hodyny");
  }

  // Пік тепла та похолодання
  let maxItem = itemsWithHour[0];
  let minItem = itemsWithHour[0];
  itemsWithHour.forEach((it) => {
    if (it.temp > maxItem.temp) maxItem = it;
    if (it.temp < minItem.temp) minItem = it;
  });

  const peakTempText = i18n.t("newsWeather.ruleBasedForecast.dobovyiMaksymumOchikuietsiaO", { v0: maxItem.time || `${maxItem.hourNum}:00`, v1: formatTempWithSign(maxItem.temp, unit), v2: formatTempWithSign(minItem.temp, unit), v3: minItem.time || `${minItem.hourNum}:00` });

  // Аналіз вітру: середня швидкість і пориви окремо
  const maxWindItem = itemsWithHour.reduce((prev, curr) =>
    curr.wind > prev.wind ? curr : prev, itemsWithHour[0]
  );
  const maxGustItem = itemsWithHour.reduce((prev, curr) =>
    curr.gust > prev.gust ? curr : prev, itemsWithHour[0]
  );

  let windTrendText;
  let windWarning = null;
  const roundedWind = Math.round(maxWindItem.wind);
  const roundedGust = Math.round(maxGustItem.gust);
  const isWindStrong = roundedWind >= 10 || roundedGust >= 15;

  if (isWindStrong) {
    const peak = roundedGust >= 15 ? maxGustItem : maxWindItem;
    if (roundedGust >= 15) badges.push(badge("wind", i18n.t("newsWeather.ruleBasedForecast.poryvyVitruDoM", { roundedGust: roundedGust })));
    else badges.push(badge("wind", i18n.t("newsWeather.ruleBasedForecast.sylnyiViterDoM", { roundedWind: roundedWind })));
    const gustPart = roundedGust > roundedWind ? i18n.t("newsWeather.ruleBasedForecast.poryvyDoMS", { roundedGust: roundedGust }) : "";
    windWarning = i18n.t("newsWeather.ruleBasedForecast.uvahaSylnyiViterDo", { roundedWind: roundedWind, gustPart: gustPart, v2: peak.time || `${peak.hourNum}:00` });
    windTrendText = windWarning;
  } else if (roundedWind >= 6 || roundedGust >= 10) {
    windTrendText = i18n.t("newsWeather.ruleBasedForecast.vitrovyiRezhymPomirnyiDo", { roundedWind: roundedWind, v1: roundedGust > roundedWind ? i18n.t("newsWeather.ruleBasedForecast.poryvyDoMS", { roundedGust: roundedGust }) : "" });
  } else {
    windTrendText = i18n.t("newsWeather.ruleBasedForecast.viterSpokiinyiTaSlabkyi", { v0: roundedWind || 2 });
  }

  // Ожеледиця: опади при температурі близько нуля
  const iceRisk = itemsWithHour.some(
    (h) => (h.isRain || h.isSnow) && h.temp >= -3 && h.temp <= 2
  );
  if (iceRisk) badges.push(badge("", i18n.t("newsWeather.ruleBasedForecast.ryzykOzheledytsi")));

  // Туман: перша година з видимістю менше 1 км
  const fogItem = itemsWithHour.find((h) => h.visibility !== null && h.visibility < 1000) || null;
  if (fogItem) badges.push(badge("", i18n.t("newsWeather.ruleBasedForecast.tuman")));

  const snowLikely = itemsWithHour.some((h) => h.isSnow);

  return {
    rainWindowText,
    peakTempText,
    windTrendText,
    windWarning,
    maxWind: roundedWind,
    maxGust: roundedGust,
    isWindStrong,
    iceRisk,
    snowLikely,
    fog: fogItem
      ? { time: fogItem.time || `${fogItem.hourNum}:00`, visibilityKm: Math.round(fogItem.visibility / 100) / 10 }
      : null,
    badges,
  };
};

/**
 * 3. Тижневий аналіз динаміки: "підйом різко підніметься", похолодання, хвилі тепла
 */
export const analyzeWeeklyTrends = (daily16 = [], unit = "C") => {
  if (!Array.isArray(daily16) || daily16.length < 3) {
    return {
      trendText: i18n.t("newsWeather.ruleBasedForecast.nedostatnoDanykhDliaDovhostrokovoho"),
      jumpBadge: null,
      weekSummaryText: "",
    };
  }

  const days = daily16.slice(0, 10).map((d, idx) => ({
    index: idx,
    date: d.date || d.day || i18n.t("newsWeather.ruleBasedForecast.den", { v0: idx + 1 }),
    dayName: d.day || d.dayName || "",
    tempDay: parseNum(d.temp_day, 0),
    tempNight: parseNum(d.temp_night, 0),
    pop: parseNum(d.precipitation_probability_max ?? d.pop, 0),
    desc: (d.description || "").toLowerCase(),
    code: d.weather_code,
  }));

  const startTemp = days[0].tempDay;
  let maxJump = 0;
  let jumpDay = null;
  let maxDrop = 0;
  let dropDay = null;

  for (let i = 1; i < days.length; i++) {
    const diff = days[i].tempDay - startTemp;
    if (diff > maxJump) {
      maxJump = diff;
      jumpDay = days[i];
    }
    if (diff < maxDrop) {
      maxDrop = diff;
      dropDay = days[i];
    }
  }

  let trendText;
  let jumpBadge;

  if (maxJump >= 5 && jumpDay) {
    jumpBadge = badge("rise", i18n.t("newsWeather.ruleBasedForecast.rizkyiPidiomC", { Math: Math.round(maxJump) }));
    trendText = i18n.t("newsWeather.ruleBasedForecast.naTyzhniOchikuietsiaRizkyi", { v0: jumpDay.dayName || jumpDay.date, v1: formatTempWithSign(jumpDay.tempDay, unit), Math: Math.round(maxJump) });
  } else if (maxDrop <= -5 && dropDay) {
    jumpBadge = badge("drop", i18n.t("newsWeather.ruleBasedForecast.rizkyiSpadC", { Math: Math.round(maxDrop) }));
    trendText = i18n.t("newsWeather.ruleBasedForecast.naZminuTepliiPohodi", { v0: dropDay.dayName || dropDay.date, v1: formatTempWithSign(dropDay.tempDay, unit), Math: Math.abs(Math.round(maxDrop)) });
  } else {
    jumpBadge = badge("", i18n.t("newsWeather.ruleBasedForecast.stabilnyiTyzhden"));
    trendText = i18n.t("newsWeather.ruleBasedForecast.naNaiblyzhchyiTyzhdenRizkykh", { v0: formatTempWithSign(Math.min(...days.map((d) => d.tempDay)), unit), v1: formatTempWithSign(Math.max(...days.map((d) => d.tempDay)), unit) });
  }

  // Кількість дощових днів
  const rainyDaysCount = days.filter(
    (d) => d.pop >= 45 || (d.code !== undefined && d.code !== null ? isRainCode(d.code) : d.desc.includes("дощ") || d.desc.includes("злив"))
  ).length;

  let weekSummaryText;
  if (rainyDaysCount >= 4) {
    weekSummaryText = i18n.t("newsWeather.ruleBasedForecast.zahalomTyzhdenBudeVolohym", { rainyDaysCount: rainyDaysCount, length: days.length });
  } else if (rainyDaysCount === 0) {
    weekSummaryText = i18n.t("newsWeather.ruleBasedForecast.popereduSukhyiTaSpryiatlyvyi");
  } else {
    weekSummaryText = i18n.t("newsWeather.ruleBasedForecast.opadyMatymutPeriodychnyiAbo", { rainyDaysCount: rainyDaysCount });
  }

  return {
    trendText,
    jumpBadge,
    weekSummaryText,
  };
};

/**
 * 4. Аналіз атмосфери, тиску, вологості та комфорту людини
 */
export const analyzeAtmosphereAndHealth = (current) => {
  const pressure = parseNum(current?.pressure, 1013);
  const humidity = parseNum(current?.humidity, 50);
  const uvi = parseNum(current?.uv_index ?? current?.uvi, 0);

  const items = [];

  // Тиск
  if (pressure < 1005) {
    items.push({
      type: "pressure_low",
      title: i18n.t("newsWeather.ruleBasedForecast.znyzhenyiAtmosfernyiTysk"),
      text: i18n.t("newsWeather.ruleBasedForecast.tyskStanovytHpaShcho", { pressure: pressure }),
    });
  } else if (pressure > 1022) {
    items.push({
      type: "pressure_high",
      title: i18n.t("newsWeather.ruleBasedForecast.vysokyiAtmosfernyiTysk"),
      text: i18n.t("newsWeather.ruleBasedForecast.barometrychnyiTyskPidvyshchenyiHpa", { pressure: pressure }),
    });
  }

  // Вологість
  if (humidity >= 85) {
    items.push({
      type: "humidity",
      title: i18n.t("newsWeather.ruleBasedForecast.vysokaVolohistPovitria"),
      text: i18n.t("newsWeather.ruleBasedForecast.volohistPosyliuietsiaVidchuttiaVohkosti", { humidity: humidity }),
    });
  } else if (humidity < 35) {
    items.push({
      type: "humidity",
      title: i18n.t("newsWeather.ruleBasedForecast.sukhePovitria"),
      text: i18n.t("newsWeather.ruleBasedForecast.volohistZnyzhenaPyiteBilshe", { humidity: humidity }),
    });
  }

  // УФ-індекс
  if (uvi >= 6) {
    items.push({
      type: "uvi",
      title: i18n.t("newsWeather.ruleBasedForecast.pidvyshchenyiUfIndeks"),
      text: i18n.t("newsWeather.ruleBasedForecast.ufIndeksSiahaieZ", { uvi: uvi }),
    });
  }

  return items;
};

/**
 * 5. Практичні поради щодо одягу та активностей
 */
export const generateActionableAdvice = (current, todayDaily, hourlyAnalysis) => {
  const currentTemp = parseNum(current?.temp, 15);
  // Одяг підбираємо за температурою «відчувається» — вона враховує вітер і вологість
  const feels = parseNum(current?.feels_like, currentTemp);
  const dayMax = parseNum(todayDaily?.temp_day, currentTemp);
  const dayMin = parseNum(todayDaily?.temp_night, currentTemp);
  const snowToday = parseNum(todayDaily?.snowfall_sum, 0) > 0 || Boolean(hourlyAnalysis.snowLikely);
  const isRainLikely = hourlyAnalysis.badges.some((b) => badgeHas(b, "rain"));
  const isWindStrong = hourlyAnalysis.isWindStrong ?? hourlyAnalysis.maxWind >= 10;
  const items = [];

  if (isWindStrong) {
    const gust = hourlyAnalysis.maxGust;
    items.push({
      type: "wind_warning",
      title: gust > hourlyAnalysis.maxWind
        ? i18n.t("newsWeather.ruleBasedForecast.uvahaSylnyiViterPoryvy", { gust: gust })
        : i18n.t("newsWeather.ruleBasedForecast.uvahaSylnyiViterDo2", { maxWind: hourlyAnalysis.maxWind }),
      text: i18n.t("newsWeather.ruleBasedForecast.vdiahaiteVitrozakhysnuKurtkuZ"),
    });
  }

  if (hourlyAnalysis.iceRisk) {
    items.push({
      type: "ice",
      title: i18n.t("newsWeather.ruleBasedForecast.ozheledytsia"),
      text: i18n.t("newsWeather.ruleBasedForecast.opadyPryTemperaturiBlyzko"),
    });
  }

  // Одяг
  let clothText;
  if (feels < -10) {
    clothText = i18n.t("newsWeather.ruleBasedForecast.sylnyiMorozTeplyiPukhovyk");
  } else if (feels < 0) {
    clothText = i18n.t("newsWeather.ruleBasedForecast.zymovyiTeplyiPukhovykShapka");
  } else if (feels < 8) {
    clothText = i18n.t("newsWeather.ruleBasedForecast.shchilnaDemisezonnaKurtkaAbo");
  } else if (feels < 16) {
    clothText = i18n.t("newsWeather.ruleBasedForecast.lehkaKurtkaTolstovkaChy");
  } else if (feels < 23) {
    clothText = i18n.t("newsWeather.ruleBasedForecast.lehkyiKardyhanSorochkaZ");
  } else {
    clothText = i18n.t("newsWeather.ruleBasedForecast.maksymalnoLehkyiLitniiOdiah");
  }
  if (Math.round(feels) !== Math.round(currentTemp)) {
    clothText += " " + i18n.t("newsWeather.ruleBasedForecast.vidchuvaietsiaIak", { v0: formatTempWithSign(Math.round(feels)) });
  }
  if (dayMax - dayMin >= 8) {
    clothText += " " + i18n.t("newsWeather.ruleBasedForecast.zaDobuVidDo", { v0: formatTempWithSign(dayMin), v1: formatTempWithSign(dayMax) });
  }
  items.push({ type: "cloth", title: i18n.t("newsWeather.ruleBasedForecast.harderob"), text: clothText });

  if (snowToday) {
    items.push({
      type: "snow",
      title: i18n.t("newsWeather.ruleBasedForecast.snih"),
      text: i18n.t("newsWeather.ruleBasedForecast.ochikuietsiaSnihZymoveVzuttia"),
    });
  }

  if (dayMin <= 0 && dayMax > 0) {
    items.push({
      type: "frost",
      title: i18n.t("newsWeather.ruleBasedForecast.zamorozkyVnochi"),
      text: i18n.t("newsWeather.ruleBasedForecast.vnochiDoNakryiteChutlyvi", { v0: formatTempWithSign(dayMin) }),
    });
  }

  if (isRainLikely) {
    items.push({
      type: "umbrella",
      title: i18n.t("newsWeather.ruleBasedForecast.parasolia"),
      text: i18n.t("newsWeather.ruleBasedForecast.oboviazkovoVizmitIzSoboiu"),
    });
  }

  if (hourlyAnalysis.fog) {
    items.push({
      type: "fog",
      title: i18n.t("newsWeather.ruleBasedForecast.tuman"),
      text: i18n.t("newsWeather.ruleBasedForecast.blyzkoVydymistZnyzytsiaDo", { time: hourlyAnalysis.fog.time, visibilityKm: hourlyAnalysis.fog.visibilityKm }),
    });
  }

  if (isRainLikely && !hourlyAnalysis.iceRisk) {
    items.push({
      type: "car",
      title: i18n.t("newsWeather.ruleBasedForecast.avtomobilistam"),
      text: i18n.t("newsWeather.ruleBasedForecast.zvazhaiteNaMokreDorozhnie"),
    });
  }

  // Відпочинок — порада залежить від погоди
  if (isWindStrong || isRainLikely || hourlyAnalysis.iceRisk || feels < -10) {
    items.push({
      type: "home",
      title: i18n.t("newsWeather.ruleBasedForecast.vidpochynok"),
      text: i18n.t("newsWeather.ruleBasedForecast.pohodaNeDliaDovhykh"),
    });
  } else if (feels > 30) {
    items.push({
      type: "sport",
      title: i18n.t("newsWeather.ruleBasedForecast.vidpochynok"),
      text: i18n.t("newsWeather.ruleBasedForecast.spekaHuliaiteZrankuAbo"),
    });
  } else {
    items.push({
      type: "sport",
      title: i18n.t("newsWeather.ruleBasedForecast.vidpochynok"),
      text: i18n.t("newsWeather.ruleBasedForecast.chudovyiChasDliaProhulianok"),
    });
  }

  return items;
};

/**
 * ГОЛОВНА ЕКСПОРТНА ФУНКЦІЯ:
 * Об'єднує всі правила, комбінації та умови в цілісний експертний прогноз без ШІ
 */
export const generateRuleBasedForecast = (
  card,
  { unit = "C", currentTimeString = "", now = new Date() } = {}
) => {
  if (!card) return null;

  const current = card.current || {};
  // Вчорашній день є в даних, але аналіз починається від сьогодні
  const daily16 = upcomingDays(card.daily16 || [], now);
  const todayDaily = daily16[0] || {};
  const hourly = card.hourly || [];
  const locationName = card.locationName || i18n.t("newsWeather.ruleBasedForecast.vasheMisto");
  // «Прогноз для Києва», «Прогноз для вашої локації»
  const locationNameGenitive = toGenitive(locationName);

  // Виклики спеціалізованих блоків
  const dayNight = analyzeDayNightContrast(current, todayDaily, unit);
  const hourlyData = analyzeHourlyTimeline(hourly, unit);
  const weeklyData = analyzeWeeklyTrends(daily16, unit);
  const atmosphereNotes = analyzeAtmosphereAndHealth(current);
  const lifestyleAdvice = generateActionableAdvice(current, todayDaily, hourlyData);

  // Формування бейджів
  const allBadges = [];
  if (dayNight.badge) allBadges.push(dayNight.badge);
  hourlyData.badges.forEach((b) => allBadges.push(b));
  if (weeklyData.jumpBadge) allBadges.push(weeklyData.jumpBadge);

  // Формування короткого заголовка
  let headline = i18n.t("newsWeather.ruleBasedForecast.prohnozDlia", { locationNameGenitive: locationNameGenitive }) + " ";
  if (allBadges.some((b) => badgeHas(b, "rain"))) {
    headline += i18n.t("newsWeather.ruleBasedForecast.ochikuiutsiaOpadyDenVymahatyme");
  } else if (badgeHas(weeklyData.jumpBadge, "rise")) {
    headline += i18n.t("newsWeather.ruleBasedForecast.popereduRizkePoteplinniaTa");
  } else if (badgeHas(weeklyData.jumpBadge, "drop")) {
    headline += i18n.t("newsWeather.ruleBasedForecast.nasuvaietsiaKhvyliaPokholodannia");
  } else {
    headline += i18n.t("newsWeather.ruleBasedForecast.stiikaTaKomfortnaPohoda");
  }

  // Текст без емодзі для чистого експорту
  const fullText = [
    i18n.t("newsWeather.ruleBasedForecast.prohnozDlia2", { locationNameGenitive: locationNameGenitive }),
    i18n.t("newsWeather.ruleBasedForecast.chas", { v0: currentTimeString || i18n.t("newsWeather.ruleBasedForecast.nowLower") }),
    "",
    i18n.t("newsWeather.ruleBasedForecast.dobovyiBalans"),
    dayNight.message,
    "",
    i18n.t("newsWeather.ruleBasedForecast.pohodynniZminy"),
    hourlyData.rainWindowText,
    hourlyData.peakTempText,
    hourlyData.windTrendText,
    "",
    i18n.t("newsWeather.ruleBasedForecast.tyzhnevyiTrend"),
    weeklyData.trendText,
    weeklyData.weekSummaryText,
    "",
    ...(atmosphereNotes.length > 0
      ? [i18n.t("newsWeather.ruleBasedForecast.atmosferniFaktory"), ...atmosphereNotes.map((n) => `• ${n.title}: ${n.text}`), ""]
      : []),
    i18n.t("newsWeather.ruleBasedForecast.rekomendatsiiTaHarderob"),
    ...lifestyleAdvice.map((a) => `• ${a.title} ${a.text}`),
  ].join("\n");

  return {
    locationName,
    locationNameGenitive,
    headline,
    allBadges: Array.from(new Set(allBadges)),
    dayNight,
    hourlyData,
    weeklyData,
    atmosphereNotes,
    lifestyleAdvice,
    fullText,
    generatedAt: Date.now(),
  };
};

/**
 * Очищення тексту ШІ від капслоку, зірочок множення/форматування та емодзі
 */
export const cleanAiText = (raw) => {
  if (!raw || typeof raw !== "string") return "";

  let text = raw;

  // 1. Прибираємо сирі емодзі (знаки небезпеки, погодні значки тощо)
  text = text.replace(
    /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}]/gu,
    ""
  );
  text = text.replace(/[︀-️]/g, "");

  // 2. Прибираємо markdown-заголовки з дієзами (## Заголовок -> Заголовок)
  text = text.replace(/^[ \t]*#{1,6}\s+/gm, "");

  // 3. Замінюємо початкові маркери списку із зірочок на красиве тире
  text = text.replace(/^[ \t]*\*\s+/gm, "— ");

  // 4. Знімаємо маркдаун-жирний/курсив зірочками (**текст** -> текст, *текст* -> текст)
  text = text.replace(/\*{1,3}(.*?)\*{1,3}/g, "$1");

  // 5. Повністю видаляємо будь-які залишкові зірочки (зірочки множення / asterisks)
  text = text.replace(/\*/g, "");

  // 6. Видаляємо зворотні лапки (бектіки)
  text = text.replace(/`/g, "");

  // 7. Перетворюємо суцільний капслок (СЛОВА ВЕЛИКИМИ ЛІТЕРАМИ) на звичайний регістр речень
  const allowedAcronyms = new Set(["ШІ", "УФ", "API", "AI", "GPS", "США", "ЄС", "UV", "USA", "EU"]);
  text = text.replace(
    /((?:[A-ZА-ЯІЇЄҐ](?:['’]?[A-ZА-ЯІЇЄҐ])+)(?:\s+[A-ZА-ЯІЇЄҐ]['’]?[A-ZА-ЯІЇЄҐ]*)*)/gu,
    (match, p1, offset, full) => {
      const trimmed = match.trim();
      if (allowedAcronyms.has(trimmed)) return match;

      const before = full.slice(0, offset).trim();
      const lastChar = before.slice(-1);
      // Якщо на початку тексту, рядка або після розділових знаків кінця речення / двокрапки / тире
      const isStart = !lastChar || /[.!?:\n—-]/.test(lastChar);

      const lower = match.toLowerCase();
      if (isStart) {
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
      return lower;
    }
  );

  // 8. Очищення зайвих пробілів та пустих рядків
  text = text
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter((line, i, arr) => line !== "" || (i > 0 && arr[i - 1] !== ""))
    .join("\n")
    .trim();

  return text;
};

