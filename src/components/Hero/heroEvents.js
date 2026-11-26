// Події, якими інші частини сайту (напр. налаштування) відкривають модалки Hero
export const OPEN_BG_MODAL_EVENT = "hero-open-bg-modal";
export const OPEN_TIMEZONE_EVENT = "hero-open-timezone";

// «Вибрати на мапі»: замість модалки Hero переносить на Карту Стихії, де людина показує точку.
// Карта підключена лише там, де вона вже є на сторінці (поки — localhost); решта користується модалкою.
export const STYXIA_MAP_AVAILABLE = Boolean(import.meta.env?.DEV);
export const START_MAP_PICK_EVENT = "styxia-start-map-pick";
export const MAP_PICKED_EVENT = "styxia-map-picked";

// Запит міг прийти, коли карту ще не змонтовано (вона вантажиться, лише коли до неї доскролили) — тримаємо його тут
let pendingPick = false;

/** Просить Карту Стихії увімкнути режим створення. */
export const requestMapPick = () => {
  pendingPick = true;
  window.dispatchEvent(new Event(START_MAP_PICK_EVENT));
};

/** Забирає запит, що чекав на карту: true лише один раз. */
export const takePendingMapPick = () => {
  const wasPending = pendingPick;
  pendingPick = false;
  return wasPending;
};

/** Карта повідомляє вибрану точку; Hero шукає там найближчі населені пункти й створює картку. */
export const reportMapPick = (lat, lon) => {
  window.dispatchEvent(new CustomEvent(MAP_PICKED_EVENT, { detail: { lat, lon } }));
};
