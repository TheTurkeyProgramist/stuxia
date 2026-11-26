// Погода міст за даними моделі GFS — спільне для скрипта збирання (scripts/weather-map/build.mjs)
// і карти, тож без імпортів. Так закордонні міста (де в нас немає власного сервера погоди)
// отримують температуру й іконку на будь-який кадр повзунка, безкоштовно й без ліміту запитів.

export const KINDS = ["clear", "partly", "cloudy", "fog", "drizzle", "showers", "rain", "sleet", "snow", "storm"];

/**
 * Тип погоди з полів моделі: temp °C, precip мм/год, clouds %, cape Дж/кг, visibility км.
 * Пороги грубі: модель з кроком 50 км не бачить окремої хмари, але зливу, сніг чи грозу показує чесно.
 */
export const weatherKind = ({ temp, precip, clouds, cape, visibility }) => {
  const rain = Number.isFinite(precip) ? precip : 0;
  if ((cape >= 800 && rain >= 0.2) || (cape >= 2500 && rain >= 0.05)) return "storm";
  if (rain >= 0.1) {
    if (temp <= -1) return "snow";
    if (temp <= 1.5) return "sleet";
    if (rain >= 4) return "showers";
    if (rain >= 0.5) return "rain";
    return "drizzle";
  }
  if (visibility < 1) return "fog";
  if (!Number.isFinite(clouds) || clouds < 20) return "clear";
  if (clouds < 60) return "partly";
  return "cloudy";
};

/** Ключ іконки карти (styxiaIcons.jsx): ясно й мінливу хмарність показуємо окремо вдень і вночі. */
export const kindIcon = (kind, isDay) => {
  if (kind === "clear") return isDay ? "clear-day" : "clear-night";
  if (kind === "partly") return isDay ? "partly-day" : "partly-night";
  return kind;
};

/**
 * Значення сітки GFS (рядки з півночі на південь, довгота від 0°) у точці — білінійно.
 * Над морем бітмапні поля дають NaN: тоді беремо найближчу точку.
 */
export const sampleGrid = (values, width, height, lon, lat) => {
  const fx = (((lon % 360) + 360) % 360) * (width / 360);
  const fy = Math.max(0, Math.min(height - 1.0001, (90 - lat) * ((height - 1) / 180)));
  const x0 = Math.floor(fx) % width;
  const x1 = (x0 + 1) % width;
  const y0 = Math.floor(fy);
  const dx = fx - Math.floor(fx);
  const dy = fy - y0;
  const a = values[y0 * width + x0];
  const b = values[y0 * width + x1];
  const c = values[(y0 + 1) * width + x0];
  const d = values[(y0 + 1) * width + x1];
  if ([a, b, c, d].some(Number.isNaN)) return values[Math.round(fy) * width + (Math.round(fx) % width)];
  return (a * (1 - dx) + b * dx) * (1 - dy) + (c * (1 - dx) + d * dx) * dy;
};

/**
 * Відчутна температура, °C (формула Бюро метеорології Австралії): температура повітря, вологість (%) і вітер (м/с).
 * Вітер охолоджує, волога спека відчувається спекотнішою.
 */
export const apparentTemperature = (temp, humidity, wind) => {
  const vapor = (humidity / 100) * 6.105 * Math.exp((17.27 * temp) / (237.7 + temp));
  return temp + 0.33 * vapor - 0.7 * wind - 4;
};
