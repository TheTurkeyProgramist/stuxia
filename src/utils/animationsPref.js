import { useSyncExternalStore } from "react";
import "./animationsPref.css";
import { getPref, setPref } from "./prefsStore.js";

// Налаштування «Вимкнути анімації та розмиття»: зберігається в localforage (prefsStore) і вмикає
// атрибут data-animations-off на <html> (див. animationsPref.css).
// Поки користувач сам нічого не обрав — на слабких пристроях вмикається автоматично.

const STORAGE_KEY = "animations_disabled";
const EVENT = "animationsPrefChanged";

// Слабкий пристрій: ≤ 3 ГБ пам'яті (deviceMemory є лише в Chromium; Safari/Firefox його не дають),
// ≤ 2 ядра, або ≤ 4 ядра на телефоні/планшеті (бюджетні Android). Звичайні ноутбуки з 4 потоками не чіпаємо.
const detectWeakDevice = () => {
  if (typeof navigator === "undefined") return false;
  try {
    const memory = navigator.deviceMemory;
    if (typeof memory === "number" && memory > 0 && memory <= 3) return true;
    const cores = navigator.hardwareConcurrency;
    if (typeof cores === "number" && cores > 0) {
      if (cores <= 2) return true;
      const isMobile =
        navigator.userAgentData?.mobile ?? /Android|Mobi|iPhone|iPad/i.test(navigator.userAgent);
      if (cores <= 4 && isMobile) return true;
    }
  } catch {}
  return false;
};

const weakDevice = detectWeakDevice();

const readStored = () => {
  try {
    return getPref(STORAGE_KEY);
  } catch {
    return null;
  }
};

const read = () => {
  const stored = readStored();
  if (stored === "true") return true;
  if (stored === "false") return false;
  return weakDevice;
};

const apply = (disabled) => {
  if (typeof document === "undefined") return;
  document.documentElement.toggleAttribute("data-animations-off", disabled);
};

// Застосовуємо збережений (або автоматичний) вибір одразу під час завантаження
apply(read());

export const isAnimationsDisabled = read;

/** true, якщо зараз вимкнено автоматично (слабкий пристрій, користувач нічого не обирав). */
export const isAnimationsAutoDisabled = () => readStored() === null && weakDevice;

export const setAnimationsDisabled = (disabled) => {
  try {
    setPref(STORAGE_KEY, disabled ? "true" : "false");
  } catch {}
  apply(disabled);
  window.dispatchEvent(new Event(EVENT));
};

const subscribe = (callback) => {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
};

export const useAnimationsDisabled = () => useSyncExternalStore(subscribe, read, () => false);

export const useAnimationsAutoDisabled = () =>
  useSyncExternalStore(subscribe, isAnimationsAutoDisabled, () => false);
