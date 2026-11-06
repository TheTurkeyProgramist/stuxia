import { useSyncExternalStore } from "react";

// Декор карток (малюнки міст і країн, небо, сніг, туман тощо) у виборі
// часового поясу та мови. Можна вимкнути для економії продуктивності.
// Одне налаштування на обидві модалки; зберігається лише в цьому браузері.

const STORAGE_KEY = "scene_decor_enabled";
const listeners = new Set();

const read = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  } catch {
    return true;
  }
};

let enabled = typeof window === "undefined" ? true : read();

export const setSceneDecorEnabled = (next) => {
  enabled = next;
  try {
    localStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    // Приватний режим чи заблоковане сховище — працює до перезавантаження
  }
  listeners.forEach((fn) => fn());
};

const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const useSceneDecor = () =>
  useSyncExternalStore(subscribe, () => enabled, () => true);
