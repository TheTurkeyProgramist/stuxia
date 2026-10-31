import localforage from "localforage";
import { DEFAULT_UNITS } from "./units.js";

// Одиниці бувають спільні для всіх карток ("units_settings")
// або окремі для картки ("units_settings_<id>"), перемикач — "units_useGlobal".
export const UNITS_GLOBAL_KEY = "units_settings";
export const UNITS_USE_GLOBAL_KEY = "units_useGlobal";
export const cardUnitsKey = (cardId) => `units_settings_${cardId}`;

export const loadCardUnits = async (cardId) => {
  // За замовчуванням (ключа ще немає) одиниці спільні, як і раніше
  const useGlobal = (await localforage.getItem(UNITS_USE_GLOBAL_KEY)) !== false;
  if (!useGlobal && cardId !== undefined) {
    const own = await localforage.getItem(cardUnitsKey(cardId));
    if (own) return { useGlobal, units: { ...DEFAULT_UNITS, ...own } };
  }
  const saved = await localforage.getItem(UNITS_GLOBAL_KEY);
  if (saved) return { useGlobal, units: { ...DEFAULT_UNITS, ...saved } };
  // міграція зі старого ключа лише для температури
  const legacyTemp = await localforage.getItem("temp_unit");
  return { useGlobal, units: legacyTemp ? { ...DEFAULT_UNITS, temp: legacyTemp } : { ...DEFAULT_UNITS } };
};

/**
 * Подія "unitsChanged": detail = { units, useGlobal, cardId? }.
 * cardId є лише коли змінено одиниці однієї картки — інші картки її ігнорують.
 */
export const isUnitsEventForCard = (detail, cardId) =>
  !!detail?.units && (detail.cardId === undefined || detail.cardId === cardId);
