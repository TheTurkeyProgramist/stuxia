import { useSyncExternalStore } from "react";
import "./animationsPref.css";

// Налаштування «Вимкнути анімації»: зберігається в localStorage і вмикає
// атрибут data-animations-off на <html> (див. animationsPref.css)

const STORAGE_KEY = "animations_disabled";
const EVENT = "animationsPrefChanged";

const read = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

const apply = (disabled) => {
  if (typeof document === "undefined") return;
  document.documentElement.toggleAttribute("data-animations-off", disabled);
};

// Застосовуємо збережений вибір одразу під час завантаження
apply(read());

export const isAnimationsDisabled = read;

export const setAnimationsDisabled = (disabled) => {
  try {
    localStorage.setItem(STORAGE_KEY, disabled ? "true" : "false");
  } catch {}
  apply(disabled);
  window.dispatchEvent(new Event(EVENT));
};

const subscribe = (callback) => {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
};

export const useAnimationsDisabled = () => useSyncExternalStore(subscribe, read, () => false);
