import { useSyncExternalStore } from "react";
import { getPref, setPref } from "./prefsStore.js";

// Прокрутка до секції карти й тривог (#map):
//  • автопрокрутка після завантаження: "off" (за замовчуванням) | "on" | "except-search"
//    («except-search» — не крутити, якщо вхід через пошукову картку: адреса міста чи ?q=…)
//  • плаваюча кнопка «До карти» — можна приховати

const AUTO_KEY = "map_autoscroll";
const BUTTON_HIDDEN_KEY = "map_scroll_button_hidden";
const EVENT = "mapScrollPrefChanged";
export const MAP_AUTOSCROLL_MODES = ["off", "on", "except-search"];

export const getMapAutoscroll = () => {
  try {
    const v = getPref(AUTO_KEY);
    return MAP_AUTOSCROLL_MODES.includes(v) ? v : "off";
  } catch {
    return "off";
  }
};

export const isMapScrollButtonHidden = () => {
  try {
    return getPref(BUTTON_HIDDEN_KEY) === "true";
  } catch {
    return false;
  }
};

export const setMapAutoscroll = (mode) => {
  try {
    setPref(AUTO_KEY, MAP_AUTOSCROLL_MODES.includes(mode) ? mode : "off");
  } catch {}
  window.dispatchEvent(new Event(EVENT));
};

export const setMapScrollButtonHidden = (hidden) => {
  try {
    setPref(BUTTON_HIDDEN_KEY, hidden ? "true" : "false");
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

export const useMapAutoscroll = () => useSyncExternalStore(subscribe, getMapAutoscroll, () => "off");
export const useMapScrollButtonHidden = () =>
  useSyncExternalStore(subscribe, isMapScrollButtonHidden, () => false);
