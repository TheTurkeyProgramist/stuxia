import React, { useState, useCallback, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import i18n from "../../i18n/i18n.js";
import { Tooltip } from "../Tooltip/Tooltip";
import { useAnimationsDisabled } from "../../utils/animationsPref";
import { inferCode, inferIsDay, ICON_HALO_FILTER } from "./WeatherConditionIcon.jsx";

// Доміно — білий індик-талісман сайту. Живе в шапці картки погоди
// й змінюється разом із погодою: окуляри на сонці, парасолька в дощ, шарф на морозі…

const INK = "rgba(0, 0, 0, 0.42)";
const RED = "#ff4d6d";
const BEAK = "#ffc24d";
const ACCENT = "#00eeff";

/** Настрій індика з поточної погоди (WMO-код, день/ніч, температура °C, вітер м/с). */
export const getTurkeyMood = (item) => {
  if (!item) return "cloudy";
  const code = Number(item.weather_code ?? inferCode(item));
  const day = inferIsDay(item);
  const temp = parseFloat(item.temp);
  const wind = parseFloat(item.windNum ?? item.wind_speed);
  if (code >= 95) return "storm";
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "rain";
  if (code === 45 || code === 48) return "fog";
  if (Number.isFinite(wind) && wind >= 10) return "wind";
  if (!day) return "night";
  if (Number.isFinite(temp) && temp <= 0) return "cold";
  if (Number.isFinite(temp) && temp >= 28) return "hot";
  if (code <= 1) return "sunny";
  return "cloudy";
};

/* Хода на місці: тулуб ледь підскакує на кожен крок (2 кроки за цикл ніг),
   без ковзання вбік — раніше alternate-дрейф виглядав як «місячна хода» */
const walk = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-0.7px); }
`;
const step = keyframes`0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); }`;
/* Голова на кожен крок різко «виштовхується» вперед і тримається — як у справжніх птахів */
const thrust = keyframes`
  0% { transform: translateX(-0.9px); }
  30%, 100% { transform: translateX(0.9px); }
`;
/* Прогулянка: рівномірно йде вперед, розвертається і йде назад (обличчям за напрямком).
   Лише зсув і розворот — без гойдання тулуба */
const roam = keyframes`
  0% { transform: translateX(-4px) scaleX(1); }
  44% { transform: translateX(4px) scaleX(1); }
  50% { transform: translateX(4px) scaleX(-1); }
  94% { transform: translateX(-4px) scaleX(-1); }
  100% { transform: translateX(-4px) scaleX(1); }
`;
/* Клювання: довга пауза, швидкий удар униз аж до землі, коротке «довбання», підйом */
const peck = keyframes`
  0%, 60%, 100% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.5, 0, 1, 1); }
  66% { transform: rotate(112deg); animation-timing-function: linear; }
  70% { transform: rotate(104deg); animation-timing-function: linear; }
  74% { transform: rotate(112deg); animation-timing-function: cubic-bezier(0, 0, 0.3, 1); }
  84% { transform: rotate(0deg); }
`;
const bob = keyframes`0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1.2px); }`;
const strut = keyframes`0%, 100% { transform: scale(0.97); } 50% { transform: scale(1.03); }`;
const sway = keyframes`0%, 100% { transform: rotate(-6deg); } 50% { transform: rotate(6deg); }`;
const lean = keyframes`0%, 100% { transform: rotate(-7deg); } 50% { transform: rotate(-11deg); }`;
const shiver = keyframes`0%, 100% { transform: translateX(-0.5px); } 50% { transform: translateX(0.5px); }`;
const breathe = keyframes`0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.04); }`;
const blink = keyframes`0%, 92%, 100% { transform: scaleY(1); } 95% { transform: scaleY(0.1); }`;
const wobble = keyframes`0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); }`;
const fall = keyframes`
  0% { transform: translateY(-4px); opacity: 0; }
  15%, 75% { opacity: 1; }
  100% { transform: translateY(14px); opacity: 0; }
`;
const flake = keyframes`
  0% { transform: translate(-1.5px, -4px); opacity: 0; }
  20% { opacity: 1; }
  50% { transform: translate(1.5px, 5px); }
  100% { transform: translate(-1.5px, 15px); opacity: 0; }
`;
const zzz = keyframes`
  0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
  25% { opacity: 1; }
  100% { transform: translate(5px, -12px) scale(1.1); opacity: 0; }
`;
const drift = keyframes`
  0% { transform: translateX(-10px); opacity: 0; }
  30%, 70% { opacity: 0.85; }
  100% { transform: translateX(10px); opacity: 0; }
`;
const gust = keyframes`
  0% { transform: translateX(-12px); opacity: 0; }
  30% { opacity: 1; }
  100% { transform: translateX(14px); opacity: 0; }
`;
const flash = keyframes`0%, 55%, 100% { opacity: 0; } 60%, 70% { opacity: 1; } 65% { opacity: 0.3; }`;
const drip = keyframes`
  0%, 40% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(9px); opacity: 0; }
`;
const hop = keyframes`
  0%, 100% { transform: translateY(0); }
  35% { transform: translateY(-7px); }
  60% { transform: translateY(0); }
  75% { transform: translateY(-2.5px); }
`;

const Btn = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 10px;
  color: #fff;
  ${(p) => !p.$isDarkMode && `filter: ${ICON_HALO_FILTER};`}
  &:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 2px; }
`;

const Svg = styled.svg`
  display: block;
  overflow: visible;
  g, path, circle, ellipse, line, text {
    transform-box: view-box;
  }
  .hopper.hop { animation: ${hop} 0.6s ease-out; }
  /* Усе прив'язано до одного ритму: цикл ніг 0.9s = 2 кроки по 0.45s */
  .roam { transform-origin: 36px 40px; animation: ${roam} 6.3s linear infinite; }
  .walker { animation: ${walk} 0.45s ease-in-out infinite; }
  .legL { transform-origin: 28px 49px; animation: ${step} 0.9s ease-in-out infinite; }
  .legR { transform-origin: 34px 49px; animation: ${step} 0.9s ease-in-out infinite reverse; }
  .head { transform-origin: 39px 36px; }
  .head.thrust { animation: ${thrust} 0.45s ease-out infinite; }
  .head.peck { animation: ${peck} 3s infinite; }
  .head.bob { animation: ${bob} 1.6s ease-in-out infinite; }
  .head.sleep { transform: rotate(18deg); }
  .tail { transform-origin: 24px 38px; }
  .tail.strut { animation: ${strut} 2.4s ease-in-out infinite; }
  .tail.sway { animation: ${sway} 0.8s ease-in-out infinite; }
  .tail.puff { transform: scale(1.12); }
  .tail.low { transform: scale(0.72) rotate(-20deg); }
  .whole { transform-origin: 30px 58px; }
  .whole.lean { animation: ${lean} 1.1s ease-in-out infinite; }
  .whole.shiver { animation: ${shiver} 0.18s linear infinite; }
  .whole.shiver.slow { animation-duration: 0.32s; }
  .whole.breathe { animation: ${breathe} 3.2s ease-in-out infinite; }
  .eye { transform-origin: 45.2px 18px; animation: ${blink} 4.5s linear infinite; }
  .umbrella { transform-origin: 30px 30px; animation: ${wobble} 2.8s ease-in-out infinite; }
  .drop { animation: ${fall} 0.9s linear infinite; }
  .flake { animation: ${flake} 2.6s linear infinite; }
  .z { animation: ${zzz} 3s ease-out infinite; }
  .fog { animation: ${drift} 4.5s ease-in-out infinite; }
  .gust { animation: ${gust} 1.2s linear infinite; }
  .bolt { animation: ${flash} 2.2s linear infinite; }
  .sweat { animation: ${drip} 2s ease-in infinite; }

  &.still * { animation: none !important; }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; }
  }
`;

const TAIL_ANGLES = [-66, -44, -22, 0, 22, 44, 66];

const MOOD_KEYS = {
  sunny: "sunny",
  hot: "hot",
  night: "night",
  cloudy: "cloudy",
  fog: "fog",
  rain: "rain",
  snow: "snow",
  cold: "cold",
  storm: "storm",
  wind: "wind",
};

const WeatherTurkey = ({ item, isDarkMode = true, size = 46 }) => {
  const still = useAnimationsDisabled();
  const mood = getTurkeyMood(item);
  const [hopping, setHopping] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onHop = useCallback(() => {
    clearTimeout(timer.current);
    setHopping(false);
    requestAnimationFrame(() => setHopping(true));
    timer.current = setTimeout(() => setHopping(false), 650);
  }, []);

  const label = i18n.t(`newsWeather.WeatherTurkey.${MOOD_KEYS[mood]}`);

  const walking = mood === "sunny" || mood === "cloudy" || mood === "hot";
  const wholeCls =
    mood === "wind" ? "lean" :
    mood === "storm" ? "shiver" :
    mood === "cold" || mood === "snow" ? "shiver slow" :
    mood === "night" ? "breathe" : "";
  const headCls =
    mood === "night" ? "sleep" :
    mood === "cloudy" ? "peck" :
    walking ? "thrust" : "bob";
  const tailCls =
    mood === "sunny" || mood === "hot" ? "strut" :
    mood === "wind" ? "sway" :
    mood === "storm" ? "puff" :
    mood === "night" || mood === "rain" ? "low" : "";
  const shades = mood === "sunny" || mood === "hot";
  const scarf = mood === "cold" || mood === "snow";

  return (
    <Tooltip content={label} isDarkMode={isDarkMode}>
    <Btn type="button" onClick={onHop} aria-label={label} $isDarkMode={isDarkMode}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className={still ? "still" : undefined}
        aria-hidden="true"
        data-mood={mood}
      >
        {/* Погода навколо */}
        {mood === "storm" && (
          <path className="bolt" d="M9 2 L4 12 H8 L5 20 L13 9 H9 L12 2z" fill="#ffd700" />
        )}
        {mood === "fog" && (
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
            <path className="fog" d="M6 30 H24" />
            <path className="fog" d="M30 46 H54" style={{ animationDelay: "-1.5s" }} />
            <path className="fog" d="M14 56 H40" style={{ animationDelay: "-3s" }} />
          </g>
        )}
        {mood === "wind" && (
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.85">
            <path className="gust" d="M2 14 H14 q3 0 3 -3" />
            <path className="gust" d="M0 26 H11" style={{ animationDelay: "-0.4s" }} />
            <path className="gust" d="M4 52 H16 q3 0 3 3" style={{ animationDelay: "-0.8s" }} />
          </g>
        )}
        {mood === "snow" && (
          <g fill="currentColor">
            {[[8, 6, 0], [54, 4, -0.9], [58, 24, -1.7], [12, 22, -1.2], [36, 2, -2.1]].map(([x, y, d]) => (
              <circle key={`${x}-${y}`} className="flake" cx={x} cy={y} r="1.5" style={{ animationDelay: `${d}s` }} />
            ))}
          </g>
        )}
        {mood === "night" && (
          <g fill="currentColor" fontWeight="900" fontFamily="sans-serif">
            <text className="z" x="50" y="14" fontSize="7">z</text>
            <text className="z" x="50" y="14" fontSize="9" style={{ animationDelay: "-1.5s" }}>z</text>
          </g>
        )}

        <g className={`hopper${hopping ? " hop" : ""}`}>
          <g className={`whole ${wholeCls}`}>
            <g className={walking ? "roam" : undefined}>
            <g className={walking ? "walker" : undefined}>
              {/* Хвіст-віяло */}
              <g className={`tail ${tailCls}`}>
                {TAIL_ANGLES.map((a) => (
                  <ellipse
                    key={a}
                    cx="24"
                    cy="24"
                    rx="4.4"
                    ry="13"
                    transform={`rotate(${a} 24 38)`}
                    fill="currentColor"
                    stroke={INK}
                    strokeWidth="0.8"
                  />
                ))}
                {TAIL_ANGLES.map((a) => (
                  <circle key={`t${a}`} cx="24" cy="14" r="1.3" transform={`rotate(${a} 24 38)`} fill={INK} />
                ))}
              </g>

              {/* Лапи */}
              <g stroke={BEAK} strokeWidth="1.8" strokeLinecap="round" fill="none">
                <g className={walking ? "legL" : undefined}>
                  <path d="M28 48 L27 58 M24.5 58.5 H30" />
                </g>
                <g className={walking ? "legR" : undefined}>
                  <path d="M34 48 L35 58 M32.5 58.5 H38" />
                </g>
              </g>

              {/* Тулуб і крило */}
              <ellipse cx="30" cy="40" rx="13" ry="10" fill="currentColor" stroke={INK} strokeWidth="0.8" />
              <path d="M21 38 q8 -6 16 1.5 q-6 7 -16 -1.5z" fill="none" stroke={INK} strokeWidth="1" />
              <path d="M24 40.5 q5 2 9 0.5" fill="none" stroke={INK} strokeWidth="0.8" />

              {/* Шия та голова */}
              <g className={`head ${headCls}`}>
                <path d="M37 37 C42 33 40.5 26 43 21" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" fill="none" />
                <circle cx="44.5" cy="19" r="4.4" fill="currentColor" stroke={INK} strokeWidth="0.8" />
                <path d="M48.3 17.8 L52.6 19.8 L48.3 21.2z" fill={BEAK} />
                <path d="M48 16.8 q2 2.2 0.6 5.6" stroke={RED} strokeWidth="1.4" strokeLinecap="round" fill="none" />
                <path d="M46.4 22 q1.2 4 -1.6 5.4" stroke={RED} strokeWidth="2.2" strokeLinecap="round" fill="none" />
                {mood === "night" ? (
                  <path d="M44 18.2 q1.2 1 2.4 0" stroke="#111" strokeWidth="0.9" strokeLinecap="round" fill="none" />
                ) : (
                  <circle className="eye" cx="45.2" cy="18" r="0.95" fill="#111" />
                )}
                {shades && (
                  <g>
                    <path d="M40.4 17.4 H43" stroke="#111" strokeWidth="0.8" />
                    <rect x="43" y="16.4" width="4.4" height="2.8" rx="1.1" fill="#111" />
                    <path d="M43.6 17.2 l1.2 -0.4" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
                  </g>
                )}
                {mood === "hot" && (
                  <path className="sweat" d="M41.5 14 q1.3 2 0 2.8 q-1.3 -0.8 0 -2.8z" fill="#7fd8ff" />
                )}
                {scarf && (
                  <g stroke={ACCENT} strokeLinecap="round" fill="none">
                    <path d="M37.8 30.6 q3.4 2.2 6.4 -1" strokeWidth="3" />
                    <path d="M39.4 32 l-2.2 6" strokeWidth="2.2" />
                  </g>
                )}
              </g>
            </g>
            </g>
          </g>
        </g>

        {/* Парасолька — над індиком, не гойдається разом із ним */}
        {mood === "rain" && (
          <g>
            <g fill="#4dc8ff">
              {[[6, 16, 0], [56, 20, -0.3], [61, 34, -0.6], [3, 34, -0.45], [9, 46, -0.75], [58, 46, -0.15]].map(([x, y, d]) => (
                <path key={`${x}-${y}`} className="drop" d={`M${x} ${y} q1.9 3 0 4.3 q-1.9 -1.3 0 -4.3z`} style={{ animationDelay: `${d}s` }} />
              ))}
            </g>
            {/* Зменшена й опущена, щоб купол не впирався у верх шапки */}
            <g transform="translate(30 32) scale(0.84) translate(-30 -32)">
            <g className="umbrella">
              <path d="M30 9 V30 q0 2.4 2.2 2.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
              <path
                d="M12 12 Q30 -4 48 12 Q43.5 9.4 39 12 Q34.5 9.4 30 12 Q25.5 9.4 21 12 Q16.5 9.4 12 12z"
                fill="currentColor"
                stroke={INK}
                strokeWidth="0.8"
              />
              <path d="M30 2.2 Q25 6 21 12 M30 2.2 Q35 6 39 12" stroke={INK} strokeWidth="0.7" fill="none" />
            </g>
            </g>
          </g>
        )}
      </Svg>
    </Btn>
    </Tooltip>
  );
};

export default React.memo(WeatherTurkey);
