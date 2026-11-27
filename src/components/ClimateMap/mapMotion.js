// Плавні відкриття й закриття на кліматичній мапі (framer-motion): разом з AnimatePresence елемент
// спершу догасає і лише потім зникає. «Зменшити рух» і вимкнені анімації враховує MotionConfig в App.jsx.
const transition = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };
const hidden = (rest) => ({ initial: rest, animate: Object.fromEntries(Object.keys(rest).map((key) => [key, key === "opacity" || key === "scale" ? 1 : 0])), exit: rest, transition });

/** Лише прозорість — для елементів, які вже мають власний transform (центровані підказки). */
export const fade = hidden({ opacity: 0 });
/** Знизу догори: картки й попередження. */
export const riseIn = hidden({ opacity: 0, y: 12 });
/** Збоку праворуч: стовпчик висоти. */
export const sideIn = hidden({ opacity: 0, x: 18 });
/** Збільшення: вікно міні-плеєра. */
export const popIn = hidden({ opacity: 0, scale: 0.9 });

// Налаштування: затемнення гасне, а панель при цьому з'їжджає вгору — через variants, щоб рухалися разом.
// Закриття має власну криву: з кривою відкриття (різкий старт) панель майже зникала за першу ~0,1 с
const opening = { ...transition, duration: 0.45 };
const closing = { duration: 0.4, ease: [0.4, 0, 0.6, 1] };
export const overlayMotion = {
  initial: "closed",
  animate: "open",
  exit: "closed",
  variants: { open: { opacity: 1, transition: opening }, closed: { opacity: 0, transition: closing } },
};
export const panelMotion = {
  variants: { open: { y: 0, scale: 1, transition: opening }, closed: { y: -40, scale: 0.94, transition: closing } },
};
