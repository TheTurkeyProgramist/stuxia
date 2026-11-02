import { memo } from "react";
import styled, { keyframes } from "styled-components";

// Частинки поверх сцен: ліхтарики нерухомо висять у небі, пелюстки падають
// (лише transform/opacity — це рахує відеокарта, прокрутка не страждає).

const fall = keyframes`
  0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate3d(var(--drift), 250px, 0) rotate(var(--spin)); opacity: 0; }
`;

const Layer = styled.span`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const Lantern = styled.span`
  position: absolute;
  width: 9px;
  height: 12px;
  border-radius: 45% 45% 40% 40%;
  background: radial-gradient(circle at 50% 60%, #ffe08a 0%, #ff9a3d 45%, #e8562a 100%);
  box-shadow: 0 0 10px 3px rgba(255, 150, 60, 0.55);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: #ffe9a8;
  }
`;

const Petal = styled.span`
  position: absolute;
  top: -12px;
  width: 7px;
  height: 5px;
  border-radius: 70% 0 70% 0;
  background: linear-gradient(135deg, #ffd3e2, #f49ac0);
  will-change: transform, opacity;
  animation: ${fall} var(--dur) linear var(--delay) infinite;
`;

// Сталі «випадкові» позиції, щоб сцена не мінялась між рендерами
// Ліхтарики висять у верхній половині неба (x, y — у відсотках сцени)
const LANTERNS = [
  { x: 9, y: 34 },
  { x: 24, y: 18 },
  { x: 38, y: 40 },
  { x: 55, y: 22 },
  { x: 71, y: 36 },
  { x: 86, y: 16 },
];

const PETALS = [
  { x: 12, dur: 12, delay: 0, drift: -60, spin: 300 },
  { x: 35, dur: 14, delay: -5, drift: -70, spin: -260 },
  { x: 58, dur: 13, delay: -9, drift: -50, spin: 320 },
  { x: 80, dur: 15, delay: -3, drift: -80, spin: -300 },
  { x: 96, dur: 12.5, delay: -7, drift: -65, spin: 280 },
];

const vars = (p) => ({
  left: `${p.x}%`,
  "--dur": `${p.dur}s`,
  "--delay": `${p.delay}s`,
  "--drift": `${p.drift}px`,
  "--spin": `${p.spin}deg`,
});

export const Lanterns = memo(({ className }) => (
  <Layer className={className} aria-hidden="true">
    {LANTERNS.map((p, i) => (
      <Lantern key={i} style={{ left: `${p.x}%`, top: `${p.y}%` }} />
    ))}
  </Layer>
));

export const Petals = memo(({ className }) => (
  <Layer className={className} aria-hidden="true">
    {PETALS.map((p, i) => (
      <Petal key={i} className="particle" style={vars(p)} />
    ))}
  </Layer>
));
