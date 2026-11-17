// Ефекти натискання Декоратора: з точки кліку вилітають зірки, конфеті, сердечка тощо.
// Частинки — звичайні DOM-елементи з Web Animations API: без канви й без бібліотек,
// після анімації одразу видаляються.

export const CLICK_EFFECTS = [
  { id: "stars", label: "Зірочки", hint: "Чотирикутні зірки розлітаються навсібіч" },
  { id: "confetti", label: "Конфеті", hint: "Різнобарвні клаптики злітають і падають" },
  { id: "sparks", label: "Іскри", hint: "Короткі промені, як від бенгальського вогню" },
  { id: "hearts", label: "Сердечка", hint: "Сердечка спливають угору" },
  { id: "ripple", label: "Хвиля", hint: "Кільце розходиться від місця натиску" },
  { id: "bubbles", label: "Бульбашки", hint: "Бульбашки здіймаються й лопаються" },
  { id: "snow", label: "Сніжинки", hint: "Сніжинки розлітаються й повільно падають" },
];

const PALETTES = {
  stars: ["#ffd166", "#fff3b0", "#ffb36c"],
  confetti: ["#ef4444", "#facc15", "#22c55e", "#60cdff", "#a855f7", "#ffb36c"],
  sparks: ["#ffd166", "#ffb36c", "#fff"],
  hearts: ["#ff4d6d", "#ff8fa3", "#ffb3c1"],
  ripple: ["#60cdff"],
  bubbles: ["#60cdff", "#a5f3fc"],
  snow: ["#ffffff", "#dbeafe"],
};

const SVG = {
  star: (c) =>
    `<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="${c}" d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"/></svg>`,
  heart: (c) =>
    `<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="${c}" d="M12 21s-7.5-4.6-10-9.3C.3 8.4 2.3 4 6.3 4c2.3 0 3.9 1.3 5.7 3.3C13.8 5.3 15.4 4 17.7 4c4 0 6 4.4 4.3 7.7C19.5 16.4 12 21 12 21z"/></svg>`,
  snow: (c) =>
    `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2"/></svg>`,
};

let layer = null;
const getLayer = () => {
  if (layer?.isConnected) return layer;
  layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.setAttribute("data-decorator-ignore", "true");
  Object.assign(layer.style, {
    position: "fixed",
    inset: "0",
    pointerEvents: "none",
    zIndex: "2147483646",
    overflow: "hidden",
  });
  document.body.appendChild(layer);
  return layer;
};

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];

const particle = (x, y, size, html, extra = {}) => {
  const el = document.createElement("div");
  Object.assign(el.style, {
    position: "absolute",
    left: `${x - size / 2}px`,
    top: `${y - size / 2}px`,
    width: `${size}px`,
    height: `${size}px`,
    willChange: "transform, opacity",
    ...extra,
  });
  if (html) el.innerHTML = html;
  getLayer().appendChild(el);
  return el;
};

const fly = (el, frames, options) => {
  const anim = el.animate(frames, { fill: "forwards", ...options });
  anim.onfinish = () => el.remove();
  anim.oncancel = () => el.remove();
};

const burst = (count, fn) => {
  for (let i = 0; i < count; i++) fn(i, (i / count) * Math.PI * 2 + rand(-0.3, 0.3));
};

const EFFECTS = {
  stars: (x, y, colors) =>
    burst(6, (i, a) => {
      const dist = rand(36, 70);
      const el = particle(x, y, rand(10, 18), SVG.star(pick(colors)));
      fly(
        el,
        [
          { transform: "translate(0,0) scale(0.2) rotate(0deg)", opacity: 1 },
          { transform: `translate(${Math.cos(a) * dist}px, ${Math.sin(a) * dist}px) scale(1) rotate(${rand(90, 200)}deg)`, opacity: 1, offset: 0.6 },
          { transform: `translate(${Math.cos(a) * dist * 1.2}px, ${Math.sin(a) * dist * 1.2}px) scale(0) rotate(${rand(220, 320)}deg)`, opacity: 0 },
        ],
        { duration: rand(550, 750), easing: "cubic-bezier(.2,.7,.3,1)" },
      );
    }),
  confetti: (x, y, colors) =>
    burst(14, (i, a) => {
      const dist = rand(40, 90);
      const dx = Math.cos(a) * dist;
      const dy = Math.sin(a) * dist - 30;
      const el = particle(x, y, 8, "", { background: pick(colors), height: "5px", borderRadius: "1px" });
      fly(
        el,
        [
          { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) rotate(${rand(180, 360)}deg)`, opacity: 1, offset: 0.45 },
          { transform: `translate(${dx * 1.15}px, ${dy + 90}px) rotate(${rand(400, 720)}deg)`, opacity: 0 },
        ],
        { duration: rand(900, 1200), easing: "cubic-bezier(.25,.6,.4,1)" },
      );
    }),
  sparks: (x, y, colors) =>
    burst(10, (i, a) => {
      const deg = (a * 180) / Math.PI + 90;
      const dist = rand(28, 50);
      const el = particle(x, y, 2, "", { height: "12px", top: `${y - 6}px`, background: pick(colors), borderRadius: "2px" });
      fly(
        el,
        [
          { transform: `rotate(${deg}deg) translateY(0) scaleY(1)`, opacity: 1 },
          { transform: `rotate(${deg}deg) translateY(${-dist}px) scaleY(0.3)`, opacity: 0 },
        ],
        { duration: rand(350, 500), easing: "ease-out" },
      );
    }),
  hearts: (x, y, colors) =>
    burst(5, () => {
      const el = particle(x + rand(-14, 14), y, rand(14, 22), SVG.heart(pick(colors)));
      const drift = rand(-30, 30);
      fly(
        el,
        [
          { transform: "translate(0,0) scale(0.3)", opacity: 0 },
          { transform: `translate(${drift / 2}px, -30px) scale(1)`, opacity: 1, offset: 0.3 },
          { transform: `translate(${drift}px, -${rand(70, 110)}px) scale(0.8)`, opacity: 0 },
        ],
        { duration: rand(900, 1200), easing: "ease-out", delay: rand(0, 120) },
      );
    }),
  ripple: (x, y, colors) => {
    const el = particle(x, y, 90, "", { border: `2px solid ${colors[0]}`, borderRadius: "50%" });
    fly(
      el,
      [
        { transform: "scale(0.1)", opacity: 0.9 },
        { transform: "scale(1)", opacity: 0 },
      ],
      { duration: 550, easing: "cubic-bezier(.2,.7,.3,1)" },
    );
  },
  bubbles: (x, y, colors) =>
    burst(6, () => {
      const size = rand(8, 18);
      const el = particle(x + rand(-16, 16), y, size, "", {
        border: `1.5px solid ${pick(colors)}`,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.08)",
      });
      fly(
        el,
        [
          { transform: "translate(0,0) scale(0.4)", opacity: 0.9 },
          { transform: `translate(${rand(-20, 20)}px, -${rand(50, 90)}px) scale(1)`, opacity: 0.9, offset: 0.85 },
          { transform: `translate(${rand(-20, 20)}px, -${rand(90, 110)}px) scale(1.5)`, opacity: 0 },
        ],
        { duration: rand(900, 1300), easing: "ease-out", delay: rand(0, 150) },
      );
    }),
  snow: (x, y, colors) =>
    burst(8, (i, a) => {
      const dist = rand(24, 50);
      const el = particle(x, y, rand(10, 16), SVG.snow(pick(colors)));
      const dx = Math.cos(a) * dist;
      fly(
        el,
        [
          { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
          { transform: `translate(${dx}px, ${Math.sin(a) * dist}px) rotate(90deg)`, opacity: 1, offset: 0.35 },
          { transform: `translate(${dx + rand(-15, 15)}px, ${Math.sin(a) * dist + 70}px) rotate(220deg)`, opacity: 0 },
        ],
        { duration: rand(1300, 1700), easing: "ease-out" },
      );
    }),
};

const reducedMotion = () =>
  document.documentElement.hasAttribute("data-animations-off") ||
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// color — свій колір частинок (інакше — палітра ефекту)
export const playClickEffect = (id, x, y, color) => {
  const effect = EFFECTS[id];
  if (!effect || typeof document === "undefined" || !document.body.animate) return;
  if (reducedMotion()) return;
  effect(x, y, color ? [color] : PALETTES[id]);
};
