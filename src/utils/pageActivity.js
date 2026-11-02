import { useSyncExternalStore } from "react";
import "./pageActivity.css";

// Чи «активна» сторінка для фонового відео:
// вкладка видима, вікно у фокусі (а не інша програма поверх сайту)
// і жодна модалка не перекриває екран.
//
// Поки відкрита модалка, сторінка під нею «засинає»: усі CSS-анімації й відео
// поза модалкою стають на паузу (див. pageActivity.css). Профіль показав, що саме
// вони — SVG-анімації хіро, відео завантажувача мапи — щокадру перераховували
// стилі й розкладку, і через це лагала прокрутка в модалках.

// Яку частку вікна має закривати фіксований шар, щоб вважатися модалкою
const COVER_RATIO = 0.6;
const CHECK_DELAY_MS = 150;
const OVERLAY_ATTR = "data-active-overlay";

const listeners = new Set();
let active = true;
let overlay = null;
// Відео, які ми самі поставили на паузу, — лише їх і відновлюємо
const pausedVideos = new Set();

// Модалку шукаємо загально, без реєстрації кожної: елемент у центрі екрана
// лежить у великому position: fixed шарі. Фонові шари хіро позначені data-page-bg.
const findOverlay = () => {
  const dialog = document.querySelector('[aria-modal="true"]');
  if (dialog) return dialog;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let node = document.elementFromPoint(vw / 2, vh / 2);
  for (; node && node !== document.body; node = node.parentElement) {
    if (node.hasAttribute("data-page-bg")) return null;
    if (getComputedStyle(node).position !== "fixed") continue;
    const rect = node.getBoundingClientRect();
    if (rect.width * rect.height >= vw * vh * COVER_RATIO) return node;
  }
  return null;
};

const setOverlay = (next) => {
  if (next === overlay) return;
  overlay?.removeAttribute(OVERLAY_ATTR);
  overlay = next;
  const root = document.documentElement;
  if (overlay) {
    overlay.setAttribute(OVERLAY_ATTR, "");
    root.setAttribute("data-overlay-open", "");
    document.querySelectorAll("video").forEach((video) => {
      if (!video.paused && !overlay.contains(video)) {
        video.pause();
        pausedVideos.add(video);
      }
    });
  } else {
    root.removeAttribute("data-overlay-open");
    pausedVideos.forEach((video) => {
      if (video.isConnected) video.play()?.catch(() => {});
    });
    pausedVideos.clear();
  }
};

const update = () => {
  const nextOverlay = findOverlay();
  setOverlay(nextOverlay);
  // document.hasFocus() лишається true, коли фокус в iframe (наприклад, у кліматичній мапі)
  const next = !document.hidden && document.hasFocus() && !nextOverlay;
  if (next === active) return;
  active = next;
  listeners.forEach((fn) => fn());
};

const start = () => {
  let timer = null;
  const schedule = () => {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      update();
    }, CHECK_DELAY_MS);
  };

  // Модалки монтуються/розмонтовуються — це зміни childList. Атрибути не слухаємо:
  // styled-components міняють класи постійно, і кожна перевірка змушувала браузер
  // перераховувати розкладку (elementFromPoint).
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });

  document.addEventListener("visibilitychange", update);
  window.addEventListener("focus", update);
  // Під час blur фокус ще не перейшов в iframe — перевіряємо наступним тиком
  window.addEventListener("blur", schedule);
  window.addEventListener("resize", schedule);

  update();
};

// Стежимо з першого завантаження модуля, щоб пауза працювала для всієї сторінки
if (typeof document !== "undefined") {
  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start, { once: true });
}

const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

const getSnapshot = () => active;
const getServerSnapshot = () => true;

export const usePageActive = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
