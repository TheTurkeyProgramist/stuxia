import { useSyncExternalStore } from "react";
import { getPref, setPref } from "./prefsStore.js";

// Назви міст: короткі за замовчуванням, повні — перемикачем у «Параметрах»
const FULL_NAMES_KEY = "full_place_names";
const EVENT = "placeNamePrefChanged";

// «Пекін, Beijing, Beijing Shi (CN)» → «Пекін (CN)»
export const shortPlace = (label = "") => {
  // «(Вінницька обл., Україна)» — це область, а не позначка: прибираємо цілком
  const text = String(label).replace(/\s*\([^()]*,[^()]*\)/g, "");
  // Хвіст із позначками в дужках — «(CN)», «(GPS)», «(без GPS)» — лишаємо
  const tail = text.match(/(\s*[(（][^()（）]*[)）])*$/)[0];
  const head = text.slice(0, text.length - tail.length).split(",")[0].trim();
  return `${head}${tail}`;
};

// Назва для показу; якщо в списку дві скоротилися б однаково — лишаємо повну
export const displayPlace = (label, short, allLabels = []) => {
  if (!short || !label) return label;
  const result = shortPlace(label);
  return allLabels.filter((other) => shortPlace(other) === result).length > 1 ? label : result;
};

const getShort = () => {
  try {
    return getPref(FULL_NAMES_KEY) !== "true";
  } catch {
    return true;
  }
};

export const setShortPlaceNames = (short) => {
  try {
    setPref(FULL_NAMES_KEY, short ? "false" : "true");
  } catch {}
  window.dispatchEvent(new Event(EVENT));
};

const subscribe = (cb) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener("prefs-change", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("prefs-change", cb);
  };
};

export const useShortPlaceNames = () => useSyncExternalStore(subscribe, getShort, () => true);
