/**
 * Спільне сховище карток, прикріплених до ШІ-асистента (погода й новини).
 *
 * Aihelp монтується лише коли відкрита ШІ-модалка, тож картки не можна тримати
 * в його локальному стані: прикріплення при закритій модалці губились би,
 * а Hero не зміг би показати лічильник. Слухач події живе тут, на рівні модуля.
 */
import { useSyncExternalStore } from "react";
import toast from "react-hot-toast";

import i18n from "../../i18n/i18n.js";
export const MAX_AI_ATTACHMENTS = 4;

let cards = [];
const listeners = new Set();

const emit = () => listeners.forEach((fn) => fn());

const setCards = (next) => {
  cards = next;
  emit();
};

export const addAiAttachment = (card) => {
  if (!card) return;
  if (cards.some((c) => c.id === card.id)) {
    toast.error(i18n.t("ui.aiAttachments.tsiuKartkuVzhePrykripleno"));
    return;
  }
  if (cards.length >= MAX_AI_ATTACHMENTS) {
    toast.error(i18n.t("ui.aiAttachments.maksymumPrykriplennia", { MAX_AI_ATTACHMENTS: MAX_AI_ATTACHMENTS }));
    return;
  }
  toast.success(i18n.t("ui.aiAttachments.prykripleno", { title: card.title }));
  setCards([...cards, card]);
};

export const removeAiAttachment = (index) =>
  setCards(cards.filter((_, i) => i !== index));

export const clearAiAttachments = () => {
  if (cards.length) setCards([]);
};

const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const getSnapshot = () => cards;

/** Масив прикріплених карток (оновлюється в усіх компонентах одразу). */
export const useAiAttachments = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

// Погода й новини надсилають картки подією — ловимо її глобально
// (попередній слухач знімаємо, щоб гаряче перезавантаження Vite не дублювало його)
if (typeof window !== "undefined") {
  if (window.__aiAttachHandler) {
    window.removeEventListener("attachCardToAiHelp", window.__aiAttachHandler);
  }
  window.__aiAttachHandler = (e) => addAiAttachment(e.detail);
  window.addEventListener("attachCardToAiHelp", window.__aiAttachHandler);
}
