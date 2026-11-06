import React from "react";
import styled, { keyframes } from "styled-components";

// Анімовані іконки та шкали Сонця/Місяця для блокового режиму прогнозу

const blow = keyframes`
  0%, 100% { transform: translateX(-1px) skewX(0deg); }
  50% { transform: translateX(3px) skewX(-8deg); }
`;
const spin = keyframes`
  to { transform: rotate(360deg); }
`;
const rise = keyframes`
  0%, 100% { transform: translateY(1px); }
  50% { transform: translateY(-2px); }
`;
const hourglassFlip = keyframes`
  0%, 75% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`;
const twinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 0 transparent); }
  50% { opacity: 0.45; transform: scale(0.85); filter: drop-shadow(0 0 4px currentColor); }
`;
const needle = keyframes`
  0%, 100% { transform: rotate(-18deg); }
  50% { transform: rotate(18deg); }
`;

const Anim = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & > svg {
    animation: ${(p) => p.$kf} ${(p) => p.$dur} ${(p) => p.$ease || "ease-in-out"} infinite;
    transform-origin: center;
  }
  @media (prefers-reduced-motion: reduce) {
    & > svg {
      animation: none;
    }
  }
`;

export const AnimWind = ({ children }) => <Anim $kf={blow} $dur="1.8s">{children}</Anim>;
export const AnimSpin = ({ children }) => <Anim $kf={spin} $dur="12s" $ease="linear">{children}</Anim>;
export const AnimRise = ({ children }) => <Anim $kf={rise} $dur="2.6s">{children}</Anim>;
export const AnimHourglass = ({ children }) => <Anim $kf={hourglassFlip} $dur="3s">{children}</Anim>;
export const AnimTwinkle = ({ children }) => <Anim $kf={twinkle} $dur="2.2s">{children}</Anim>;
export const AnimCompass = ({ children }) => <Anim $kf={needle} $dur="2.4s">{children}</Anim>;

/**
 * Іконка фази Місяця: освітлена частина малюється за фазою SunCalc (0 — молодик, 0.5 — повня).
 * Зростаючий Місяць освітлений праворуч (північна півкуля).
 */
export const MoonPhaseIcon = ({ phase = 0, size = 22 }) => {
  const r = 10;
  const c = 12;
  const k = Math.cos(2 * Math.PI * phase);
  const rx = Math.abs(k) * r;
  const waxing = phase < 0.5;
  const outerSweep = waxing ? 1 : 0;
  const innerSweep = waxing ? (k > 0 ? 0 : 1) : k > 0 ? 1 : 0;
  const isNew = phase < 0.015 || phase > 0.985;
  const litPath = `M ${c} ${c - r} A ${r} ${r} 0 0 ${outerSweep} ${c} ${c + r} A ${rx} ${r} 0 0 ${innerSweep} ${c} ${c - r} Z`;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx={c} cy={c} r={r} fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
      {!isNew && (
        <path d={litPath} fill="#f3ead2" style={{ filter: "drop-shadow(0 0 3px rgba(243,234,210,0.6))" }} />
      )}
    </svg>
  );
};

const ScaleTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  margin-top: 2px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font-size: 11px;
  line-height: 1.3;
`;
const ScaleHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 12px;
  svg {
    font-size: 22px;
    flex-shrink: 0;
  }
`;
const ScaleTimes = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.85;
`;
const Track = styled.div`
  position: relative;
  height: 3px;
  margin: 4px 4px 2px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.18);
`;
const TrackFill = styled.div`
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 2px;
  background: ${(p) => p.$color};
`;
const TrackDot = styled.div`
  position: absolute;
  top: 50%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: ${(p) => p.$color};
  box-shadow: 0 0 8px ${(p) => p.$color};
`;
const ScaleFoot = styled.div`
  font-size: 10px;
  opacity: 0.7;
`;

/** Шкала як на Метеофорі: схід → захід із поточним положенням світила */
export const AstroScale = ({ icon, title, riseLabel, setLabel, progress, isActive, color, footer }) => (
  <ScaleTile>
    <ScaleHead>
      {icon}
      <span>{title}</span>
    </ScaleHead>
    <ScaleTimes>
      <span>Схід — {riseLabel}</span>
      <span>Захід — {setLabel}</span>
    </ScaleTimes>
    {progress !== null && (
      <Track>
        <TrackFill $color={color} style={{ width: `${progress * 100}%` }} />
        {isActive && <TrackDot $color={color} style={{ left: `${progress * 100}%` }} />}
      </Track>
    )}
    {footer && <ScaleFoot>{footer}</ScaleFoot>}
  </ScaleTile>
);
