/*
 * Дзеркальність сайту (по горизонталі / вертикалі).
 *
 * transform на <html> робить його containing block для всіх position: fixed
 * елементів. Якщо html має висоту всього документа, модалки, тости, оверлеї
 * «прилипають» до документа, а не до екрана, і з'їжджають/обрізаються.
 *
 * Тому в дзеркальному режимі html фіксується на висоту вікна (overflow: hidden),
 * а скролиться body (див. .site-mirrored у App.css). Тоді fixed-елементи
 * позиціонуються відносно вікна, а центр трансформації — центр екрана.
 *
 * Перемикання анімується як 3D-переворот дошки (rotateY / rotateX на 180°).
 * Після анімації лишається плаский scale(±1, ±1) — візуально те саме,
 * але без 3D-шару, тож текст не розмивається.
 */

const MIRROR_CLASS = "site-mirrored";
const FLIPPING_CLASS = "site-flipping";
const FLIP_MS = 900;
const FLIP_EASING = "cubic-bezier(0.65, 0, 0.35, 1)";
// Наскільки «дошка» відходить углиб на середині повороту
const FLIP_MID_SCALE = 0.82;

let flipToken = 0;
let currentAnimation = null;

export const getSiteMirror = () => {
  const root = document.documentElement;
  return {
    x: root.dataset.mirrorX === "true",
    y: root.dataset.mirrorY === "true",
  };
};

export const isSiteMirrored = () =>
  document.documentElement.classList.contains(MIRROR_CLASS);

/** Елемент, який зараз скролить сторінку (window або body в дзеркальному режимі). */
export const getPageScroller = () => (isSiteMirrored() ? document.body : window);

/*
 * Тултіпи / меню (floating-ui, Radix) беруть координати з getBoundingClientRect —
 * вони вже «візуальні», тобто віддзеркалені. Якщо поставити такий елемент усередину
 * дзеркального <html>, його позиція віддзеркалиться вдруге й він опиниться навпроти.
 * Цей шар на весь екран має той самий scale, що й <html>, тож всередині нього
 * дзеркальність скасовується і координати збігаються з реальними екранними.
 */
const UNMIRROR_LAYER_ID = "site-unmirror-layer";

const getUnmirrorLayer = () => {
  let layer = document.getElementById(UNMIRROR_LAYER_ID);
  if (!layer) {
    layer = document.createElement("div");
    layer.id = UNMIRROR_LAYER_ID;
    layer.className = "site-unmirror-layer";
    document.body.appendChild(layer);
  }
  return layer;
};

/** Корінь порталу для плаваючих елементів: шар-компенсатор у дзеркальному режимі, інакше body. */
export const getFloatingRoot = () => (isSiteMirrored() ? getUnmirrorLayer() : undefined);

const prefersNoMotion = () => {
  const root = document.documentElement;
  if (root.hasAttribute("data-animations-off")) return true;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

const flatTransform = (x, y) => `scale(${x ? -1 : 1}, ${y ? -1 : 1})`;

const flipFrame = (angleY, angleX, scale) =>
  `perspective(1600px) rotateY(${angleY}deg) rotateX(${angleX}deg) scale(${scale})`;

/** Анімує 3D-переворот від стану from до стану to. Повертає Promise, що завершується після анімації. */
const animateFlip = (from, to) => {
  const root = document.documentElement;
  if (currentAnimation) currentAnimation.cancel();
  if (prefersNoMotion() || typeof root.animate !== "function") return Promise.resolve();

  const fromY = from.x ? 180 : 0;
  const fromX = from.y ? 180 : 0;
  const toY = to.x ? 180 : 0;
  const toX = to.y ? 180 : 0;

  root.classList.add(FLIPPING_CLASS);
  const animation = root.animate(
    [
      { transform: flipFrame(fromY, fromX, 1) },
      { transform: flipFrame((fromY + toY) / 2, (fromX + toX) / 2, FLIP_MID_SCALE), offset: 0.5 },
      { transform: flipFrame(toY, toX, 1) },
    ],
    { duration: FLIP_MS, easing: FLIP_EASING },
  );
  currentAnimation = animation;

  return animation.finished
    .catch(() => {}) // cancel() відхиляє finished — це нормально
    .finally(() => {
      if (currentAnimation === animation) {
        currentAnimation = null;
        root.classList.remove(FLIPPING_CLASS);
      }
    });
};

export const applySiteMirror = (mirrorX, mirrorY) => {
  const root = document.documentElement;
  const body = document.body;
  const prev = getSiteMirror();
  const next = { x: Boolean(mirrorX), y: Boolean(mirrorY) };
  const wasMirrored = isSiteMirrored();
  const shouldMirror = next.x || next.y;

  if (prev.x === next.x && prev.y === next.y && wasMirrored === shouldMirror) return;

  const token = ++flipToken;

  root.dataset.mirrorX = String(next.x);
  root.dataset.mirrorY = String(next.y);
  root.style.setProperty("--site-mirror-x", next.x ? "-1" : "1");
  root.style.setProperty("--site-mirror-y", next.y ? "-1" : "1");

  if (!shouldMirror) {
    if (!wasMirrored) return;
    root.style.transform = "";
    // Клас site-mirrored лишаємо до кінця анімації, щоб дошка крутилась навколо центру екрана
    animateFlip(prev, next).then(() => {
      if (token !== flipToken) return; // за час анімації дзеркальність знову ввімкнули
      const top = body.scrollTop;
      const left = body.scrollLeft;
      root.classList.remove(MIRROR_CLASS);
      root.style.transformOrigin = "";
      window.scrollTo(left, top);
    });
    return;
  }

  if (!wasMirrored) {
    const top = window.scrollY;
    const left = window.scrollX;
    root.classList.add(MIRROR_CLASS);
    body.scrollTop = top;
    body.scrollLeft = left;
  }

  root.style.transformOrigin = "50% 50%";
  root.style.transform = flatTransform(next.x, next.y);
  animateFlip(prev, next);
};
