// Одиниці «Карти Стихії» — ті самі, що в картках погоди (utils/units.js). Дані моделі лишаються в °C, м/с,
// гПа, мм, см і км; тут лише перерахунок для показу.
import {
  tempLabel, convertTemp, windLabel, convertWind, pressureLabel, convertPressure, precipLabel, convertPrecip,
  snowLabel, convertSnow, visibilityLabel, convertVisibility,
} from "../../utils/units.js";

const same = (value) => value;

/**
 * Для шару: convert(значення моделі) → у вибрані одиниці; label — підпис одиниці; digits — скільки знаків
 * після коми потрібно (null — як звично). baseLabel — підпис шару в одиницях за замовчуванням.
 */
export const layerUnit = (layerId, units, baseLabel = "") => {
  const keep = { convert: same, label: baseLabel, digits: null };
  switch (layerId) {
    case "temperature":
    case "feelsLike":
      return { convert: (v) => convertTemp(v, units.temp), label: tempLabel(units.temp), digits: null };
    case "windSpeed":
    case "gusts":
      return units.wind === "ms" ? keep : { convert: (v) => convertWind(v, units.wind), label: windLabel(units.wind), digits: null };
    case "pressure":
      return units.pressure === "hpa"
        ? keep
        : { convert: (v) => convertPressure(v, units.pressure), label: pressureLabel(units.pressure), digits: { inhg: 2, kpa: 1 }[units.pressure] ?? null };
    case "precipitation":
      return units.precip === "in" ? { convert: (v) => convertPrecip(v, "in"), label: `${precipLabel("in")}/h`, digits: 2 } : keep;
    case "snow":
      return units.precip === "in" ? { convert: (v) => convertSnow(v, "in"), label: snowLabel("in"), digits: 1 } : keep;
    case "visibility":
      return units.distance === "mi" ? { convert: (v) => convertVisibility(v, "mi"), label: visibilityLabel("mi"), digits: null } : keep;
    default:
      return keep;
  }
};

/** «+3°», «−270°»: коротка температура біля міста. У кельвінах плюс не потрібен. */
export const shortTemp = (celsius, unit) => {
  const value = convertTemp(celsius, unit);
  if (value === null) return "";
  const rounded = Math.round(value) || 0;
  return `${rounded > 0 && unit !== "K" ? "+" : ""}${rounded}°`;
};
