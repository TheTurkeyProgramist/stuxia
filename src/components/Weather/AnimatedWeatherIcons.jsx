import React, { useId } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp, FaArrowDown, FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";

const svgProps = { width: "1em", height: "1em", viewBox: "0 0 24 24", "aria-hidden": true };

// 5 станів: 0 — порожньо, 1–4 — чверті склянки.
export const getHumidityLevel = (humidity) => {
  const h = parseFloat(humidity);
  if (!Number.isFinite(h) || h <= 0) return 0;
  return Math.min(4, Math.ceil(h / 25));
};

// 5 станів від найхолоднішого до найспекотнішого.
export const getTempLevel = (temp) => {
  const t = parseFloat(temp);
  if (!Number.isFinite(t)) return 3;
  if (t < -10) return 1;
  if (t < 5) return 2;
  if (t < 18) return 3;
  if (t <= 28) return 4;
  return 5;
};

// 5 позицій стрілки: низький → високий тиск (гПа).
export const getPressureLevel = (pressure) => {
  const p = parseFloat(pressure);
  if (!Number.isFinite(p)) return 2;
  if (p < 995) return 0;
  if (p < 1008) return 1;
  if (p < 1018) return 2;
  if (p < 1030) return 3;
  return 4;
};

const WAVE_PATH = "M-12 0 q3 -1.6 6 0 t6 0 t6 0 t6 0 t6 0 t6 0 t6 0 V20 H-12 Z";

export const HumidityGlass = ({ humidity, waterColor = "#4da6ff" }) => {
  const level = getHumidityLevel(humidity);
  const clipId = useId();
  const top = 4;
  const bottom = 21;
  const waterY = bottom - ((bottom - top) * level) / 4;
  return (
    <svg {...svgProps}>
      <defs>
        <clipPath id={clipId}>
          <path d="M6 4h12l-1.6 17H7.6z" />
        </clipPath>
      </defs>
      {level > 0 && (
        <g clipPath={`url(#${clipId})`}>
          <g transform={`translate(0 ${waterY})`}>
            <path d={WAVE_PATH} fill={waterColor}>
              <animateTransform attributeName="transform" type="translate" from="0 0" to="12 0" dur="2.4s" repeatCount="indefinite" />
            </path>
            <path d={WAVE_PATH} fill={waterColor} opacity="0.45" transform="translate(0 1.2)">
              <animateTransform attributeName="transform" type="translate" from="12 1.2" to="0 1.2" dur="3.6s" repeatCount="indefinite" />
            </path>
          </g>
        </g>
      )}
      <path d="M5 3h14l-1.8 18.2a1 1 0 0 1-1 .8H7.8a1 1 0 0 1-1-.8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
};

export const TempThermometer = ({ temp, mercuryColor = "#ff9d3b" }) => {
  const level = getTempLevel(temp);
  const tubeTop = 4;
  const tubeBottom = 15;
  const mercuryTop = tubeBottom - ((tubeBottom - tubeTop) * level) / 5;
  return (
    <svg {...svgProps}>
      <rect x="10.2" y={mercuryTop} width="3.6" height={tubeBottom - mercuryTop + 2} fill={mercuryColor} />
      <circle cx="12" cy="18" r="2.9" fill={mercuryColor} />
      <path d="M9 14.2V4.5a3 3 0 0 1 6 0v9.7a5 5 0 1 1-6 0z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="17.2" x2={i % 2 ? "18.6" : "19.8"} y1={tubeTop + 1 + i * 2.4} y2={tubeTop + 1 + i * 2.4} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      ))}
    </svg>
  );
};

const NEEDLE_ANGLES = [-70, -35, 0, 35, 70];

export const PressureGauge = ({ pressure }) => {
  const level = getPressureLevel(pressure);
  return (
    <svg {...svgProps}>
      <path d="M2.5 18a9.5 9.5 0 0 1 19 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {NEEDLE_ANGLES.map((a) => (
        <line key={a} x1="12" y1="9.4" x2="12" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" transform={`rotate(${a} 12 18)`} />
      ))}
      <g style={{ transform: `rotate(${NEEDLE_ANGLES[level]}deg)`, transformOrigin: "12px 18px", transition: "transform 0.9s cubic-bezier(.34,1.56,.64,1)" }}>
        <line x1="12" y1="18" x2="12" y2="10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <circle cx="12" cy="18" r="1.9" fill="currentColor" />
      <line x1="3" y1="21.5" x2="21" y2="21.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};

const FOG_LINES = [
  { y: 15.5, x1: 4, x2: 20, dx: 1.6, dur: "3.2s" },
  { y: 18.5, x1: 6, x2: 22, dx: -1.6, dur: "4s" },
  { y: 21.5, x1: 3, x2: 17, dx: 1.6, dur: "3.6s" },
];

// Сніг: мало — прозоріше, дуже багато — червоніше.
export const getSnowStyle = (snowCm) => {
  const cm = Math.max(0, Number(snowCm) || 0);
  const opacity = 0.3 + 0.7 * Math.min(cm / 10, 1);
  const t = Math.min(1, Math.max(0, (cm - 30) / 50));
  const g = Math.round(255 + (77 - 255) * t);
  return { opacity, color: t === 0 ? "inherit" : `rgb(255, ${g}, ${g})` };
};

const uvRotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const uvPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
`;

const SunSvg = styled.svg`
  .sun-outer {
    transform-origin: 12px 12px;
    animation: ${uvRotate} ${(p) => p.$dur}s linear infinite;
  }
  .sun-core {
    transform-origin: 12px 12px;
    animation: ${uvPulse} 2.6s ease-in-out infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .sun-outer, .sun-core { animation: none; }
  }
`;

const sunRays = (count, offset, r1, r2, halfWidth) =>
  Array.from({ length: count }, (_, i) => {
    const a = ((i * 360) / count + offset) * (Math.PI / 180);
    const [cx, cy] = [Math.sin(a), -Math.cos(a)];
    const [px, py] = [-cy, cx];
    const pt = (r, w) => `${(12 + cx * r + px * w).toFixed(2)} ${(12 + cy * r + py * w).toFixed(2)}`;
    return `M${pt(r1, -halfWidth)}L${pt(r2, 0)}L${pt(r1, halfWidth)}Z`;
  }).join("");

const OUTER_RAYS = sunRays(8, 22.5, 8.6, 11.8, 1.1);
const INNER_RAYS = sunRays(8, 0, 6, 9, 1.4);

export const UvSun = ({ uv }) => {
  const v = Number(uv) || 0;
  const dur = v <= 0 ? 30 : Math.max(4, 20 - v * 2);
  return (
    <SunSvg {...svgProps} $dur={dur}>
      <path className="sun-outer" d={OUTER_RAYS} fill="currentColor" opacity="0.7" />
      <g className="sun-core">
        <path d={INNER_RAYS} fill="currentColor" />
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      </g>
    </SunSvg>
  );
};

// Хмарність: середнє за найближчі години порівнюємо з поточним значенням.
export const getCloudTrend = (current, hourly, hours = 4, threshold = 20) => {
  const cur = parseFloat(current);
  const next = (hourly || [])
    .slice(1, hours + 1)
    .map((h) => parseFloat(h?.cloud_cover))
    .filter(Number.isFinite);
  if (!Number.isFinite(cur) || !next.length) return 0;
  const diff = next.reduce((a, b) => a + b, 0) / next.length - cur;
  return diff >= threshold ? 1 : diff <= -threshold ? -1 : 0;
};

const arrowBlink = keyframes`
  0%, 40%, 100% { opacity: 0; }
  10%, 30% { opacity: 1; }
  20% { opacity: 0.2; }
`;

const CloudWrap = styled.span`
  position: relative;
  display: inline-flex;
`;

const TrendArrow = styled.span`
  position: absolute;
  top: -4px;
  right: -8px;
  font-size: 0.45em;
  color: ${(p) => p.$color};
  opacity: 0;
  animation: ${arrowBlink} 4s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export const CloudWithTrend = ({ cloudCover, trend }) => (
  <CloudWrap>
    {parseFloat(cloudCover) < 50 ? <FaCloudDownloadAlt /> : <FaCloudUploadAlt />}
    {trend !== 0 && (
      <TrendArrow $color={trend > 0 ? "#4da6ff" : "#ffd700"} title={trend > 0 ? "Хмарність зросте" : "Хмарність спадатиме"}>
        {trend > 0 ? <FaArrowUp /> : <FaArrowDown />}
      </TrendArrow>
    )}
  </CloudWrap>
);

export const VisibilityFog = () => (
  <svg {...svgProps}>
    <path d="M7 12.5a3.6 3.6 0 0 1-.4-7.2A5 5 0 0 1 16 6a3.3 3.3 0 0 1 .8 6.5z" fill="currentColor" />
    {FOG_LINES.map((l) => (
      <line key={l.y} x1={l.x1} x2={l.x2} y1={l.y} y2={l.y} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <animateTransform attributeName="transform" type="translate" values={`${-l.dx} 0;${l.dx} 0;${-l.dx} 0`} dur={l.dur} repeatCount="indefinite" />
      </line>
    ))}
  </svg>
);
