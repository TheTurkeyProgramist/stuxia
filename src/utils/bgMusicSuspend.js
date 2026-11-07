// Тимчасове призупинення фонової музики (напр. на час титрів).
// Фонова музика в App.jsx плавно затихає, поки є хоча б одне призупинення,
// і так само плавно повертається, коли всі призупинення знято.
import { useSyncExternalStore } from "react";

const EVENT = "bgMusicSuspendChange";
let suspendCount = 0;

const notify = () => window.dispatchEvent(new Event(EVENT));

export const isBgMusicSuspended = () => suspendCount > 0;

/**
 * Призупиняє фонову музику. Повертає функцію, що знімає призупинення
 * (безпечно викликати кілька разів — спрацює лише перший виклик).
 */
export const suspendBgMusic = () => {
  suspendCount += 1;
  notify();
  let released = false;
  return () => {
    if (released) return;
    released = true;
    suspendCount = Math.max(0, suspendCount - 1);
    notify();
  };
};

const subscribe = (callback) => {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
};

export const useBgMusicSuspended = () =>
  useSyncExternalStore(subscribe, isBgMusicSuspended, () => false);
