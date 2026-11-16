import React from "react";
import styled, { keyframes } from "styled-components";

// Білий індик біля версії «розпускає хвіст» туди-назад: 1 → 3 → 5 → 7 → 5 → 3 пір'їн.
// Лише CSS: кожна пара пір'їн — окремий шар, який вмикається через opacity (steps),
// тож анімацію веде компоновщик браузера без React-стану й таймерів.
const TURKEY_SIZE = 29; // px
const TAIL_CYCLE = "0.9s"; // 6 кадрів × 150 мс
const FEATHER_SPREAD = 14; // градусів між пір'їнами
const TAIL_TILT = -25; // віяло нахилене назад (індик у профіль, дивиться праворуч)
const TAIL_PIVOT = "4.5 7.6"; // точка кріплення хвоста на спині

// Кадри циклу (по 16.667%): 0 → 1 пір'їна, 1 → 3, 2 → 5, 3 → 7, 4 → 5, 5 → 3
const tailLayer1 = keyframes`
  0% { opacity: 0; }
  16.667%, 100% { opacity: 1; }
`;
const tailLayer2 = keyframes`
  0% { opacity: 0; }
  33.333% { opacity: 1; }
  83.333%, 100% { opacity: 0; }
`;
const tailLayer3 = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  66.667%, 100% { opacity: 0; }
`;

const TurkeyCell = styled.div`
  position: relative;
  flex: none;
  width: ${TURKEY_SIZE}px;
  height: ${TURKEY_SIZE}px;

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill: #fff;
  }

  .tail-1 {
    animation: ${tailLayer1} ${TAIL_CYCLE} step-end infinite;
  }
  .tail-2 {
    animation: ${tailLayer2} ${TAIL_CYCLE} step-end infinite;
  }
  .tail-3 {
    animation: ${tailLayer3} ${TAIL_CYCLE} step-end infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none !important;
    }
  }
`;

// Пір'їна: від точки кріплення вгору, повернута на кут side
const Feather = ({ side }) => (
  <ellipse
    cx="4.5"
    cy="5"
    rx="0.75"
    ry="2.2"
    opacity="0.85"
    transform={`rotate(${TAIL_TILT + side * FEATHER_SPREAD} ${TAIL_PIVOT})`}
  />
);

export function TurkeyDot({ size = TURKEY_SIZE, className, style }) {
  return (
    <TurkeyCell aria-hidden="true" className={className} style={{ width: size, height: size, ...style }}>
      {[1, 2, 3].map((k) => (
        <svg key={k} className={`tail-${k}`} viewBox="0 0 12 12">
          <Feather side={-k} />
          <Feather side={k} />
        </svg>
      ))}
      <svg viewBox="0 0 12 12">
        <Feather side={0} />
        {/* тулуб */}
        <ellipse cx="6" cy="8" rx="2.9" ry="2.1" />
        {/* шия і голова, піднята вперед-праворуч */}
        <path d="M7.6 7.4L9 5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="9.2" cy="4.6" r="0.95" />
        {/* дзьоб, «сопля» над ним і борідка під ним */}
        <polygon points="10,4.35 11.1,4.75 10,5.05" />
        <ellipse cx="10.25" cy="5.35" rx="0.25" ry="0.6" />
        <ellipse cx="9.35" cy="5.75" rx="0.4" ry="0.65" />
        {/* око й лінія крила — показують, куди він дивиться */}
        <circle cx="9.45" cy="4.4" r="0.28" fill="#121212" />
        <path d="M4.6 7.7Q6.2 6.9 7.5 8.3" fill="none" stroke="#121212" strokeOpacity="0.45" strokeWidth="0.4" />
        {/* лапи */}
        <path d="M5.4 9.9L5.2 11.7M6.7 9.9L6.9 11.7" stroke="#fff" strokeWidth="0.55" strokeLinecap="round" />
      </svg>
    </TurkeyCell>
  );
}

export default TurkeyDot;
