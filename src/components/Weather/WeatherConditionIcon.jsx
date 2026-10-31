import React from "react";
import styled, { keyframes } from "styled-components";

// Власні анімовані SVG-іконки погоди. Замінюють react-icons/емодзі,
// які раніше "ламалися" в емодзі після збереження карток у сховище.

const SUN = "#ffc933";
const MOON = "#f4e9c1";
const RAIN = "#4da6ff";
const SNOW = "#d6ecff";
const BOLT = "#ffd700";

const CLOUD = "M7 20a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 12.5 3.8 3.8 0 0 1 17.5 20z";
const MOON_PATH = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z";
const SMALL_CLOUD = "translate(3 -1) scale(.75)";

const rotate = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const pulse = keyframes`0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); }`;
const driftA = keyframes`from { transform: translateX(-1.4px); } to { transform: translateX(1.4px); }`;
const driftB = keyframes`from { transform: translateX(1.6px); } to { transform: translateX(-1.6px); }`;
// Хмара в масштабі .5: зсув 2x, тож починаємо і закінчуємо за межами іконки.
const run = keyframes`
  0% { transform: translateX(-26px); opacity: 0; }
  10%, 90% { opacity: 1; }
  100% { transform: translateX(50px); opacity: 0; }
`;
const fall = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  15% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: translateY(6px); opacity: 0; }
`;
const flake = keyframes`
  0% { transform: translate(-1px, 0); opacity: 0; }
  15% { opacity: 1; }
  50% { transform: translate(1px, 3px); }
  100% { transform: translate(-1px, 7px); opacity: 0; }
`;
const flash = keyframes`
  0%, 55%, 100% { opacity: 0.25; }
  60%, 70% { opacity: 1; }
  65% { opacity: 0.4; }
`;
const twinkle = keyframes`0%, 100% { opacity: 0.25; } 50% { opacity: 1; }`;

const Svg = styled.svg`
  overflow: hidden;
  vertical-align: -0.125em;
  .rays { animation: ${rotate} 16s linear infinite; }
  .pulse { animation: ${pulse} 3s ease-in-out infinite; }
  .driftA { animation: ${driftA} 5s ease-in-out infinite alternate; }
  .driftB { animation: ${driftB} 6.5s ease-in-out infinite alternate; }
  .run { animation: ${run} 9s linear infinite; }
  .drop { animation: ${fall} 1s linear infinite; }
  .drop.fast { animation-duration: 0.7s; }
  .drop.slow { animation-duration: 1.7s; }
  .flake { animation: ${flake} 2.4s linear infinite; }
  .bolt { animation: ${flash} 2.6s linear infinite; }
  .star { animation: ${twinkle} 2.2s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; }
  }
`;

const Cloud = ({ transform, cls, opacity, outline }) => (
  <g transform={transform} opacity={opacity}>
    <g className={cls}>
      <path d={CLOUD} fill="currentColor" stroke={outline ? "rgba(0,0,0,0.5)" : "none"} strokeWidth="0.9" paintOrder="stroke" />
    </g>
  </g>
);

const Sun = ({ cx, cy, r, ray = 1.3, len = 1.6 }) => (
  <g>
    <g className="rays" style={{ transformOrigin: `${cx}px ${cy}px` }}>
      {Array.from({ length: 8 }, (_, i) => (
        <line
          key={i}
          x1={cx}
          x2={cx}
          y1={cy - r - ray}
          y2={cy - r - ray - len}
          stroke={SUN}
          strokeWidth={r > 4 ? 1.6 : 1.2}
          strokeLinecap="round"
          transform={`rotate(${i * 45} ${cx} ${cy})`}
        />
      ))}
    </g>
    <circle className="pulse" cx={cx} cy={cy} r={r} fill={SUN} style={{ transformOrigin: `${cx}px ${cy}px` }} />
  </g>
);

const Moon = ({ transform }) => <path d={MOON_PATH} fill={MOON} transform={transform} />;

const Drops = ({ xs, cls = "", width = 1.6, color = RAIN }) =>
  xs.map((x, i) => (
    <line
      key={x}
      className={`drop ${cls}`}
      x1={x}
      y1="15.5"
      x2={x - 0.9}
      y2="18"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      style={{ animationDelay: `${(i * 0.37) % 1}s` }}
    />
  ));

const Dots = ({ xs }) =>
  xs.map((x, i) => (
    <circle key={x} className="drop slow" cx={x} cy="16" r="0.8" fill={RAIN} style={{ animationDelay: `${i * 0.55}s` }} />
  ));

const Flakes = ({ xs }) =>
  xs.map((x, i) => (
    <circle key={x} className="flake" cx={x} cy="15.5" r="1.05" fill={SNOW} style={{ animationDelay: `${i * 0.8}s` }} />
  ));

const FOG_LINES = [
  { y: 15.5, x1: 5, x2: 19, cls: "driftA" },
  { y: 18.5, x1: 7, x2: 21, cls: "driftB" },
  { y: 21.5, x1: 4, x2: 17, cls: "driftA" },
];

// Код WMO -> тип іконки.
export const getWeatherKind = (code) => {
  if (code === 0) return "clear";
  if (code >= 1 && code <= 3) return "partly";
  if (code >= 45 && code <= 48) return "fog";
  if (code >= 51 && code <= 55) return "drizzle";
  if ((code >= 56 && code <= 57) || (code >= 66 && code <= 67)) return "sleet";
  if (code >= 61 && code <= 65) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "showers";
  if (code >= 85 && code <= 86) return "snow";
  if (code >= 95 && code <= 99) return "thunder";
  return "overcast";
};

// Для карток, збережених раніше без weather_code: відновлюємо з тексту.
const inferCode = (item) => {
  const text = `${item?.description || ""} ${item?.iconPlaceholder || ""}`.toLowerCase();
  if (/сонячно|місячно/.test(text)) return 0;
  if (/мінлива/.test(text)) return 2;
  if (/туман/.test(text)) return 45;
  if (/мряка з/.test(text)) return 56;
  if (/мряка/.test(text)) return 51;
  if (/дощ з снігом/.test(text)) return 66;
  if (/зливовий дощ/.test(text)) return 80;
  if (/дощ/.test(text)) return 61;
  if (/сніж|сніг/.test(text)) return 71;
  if (/гроза/.test(text)) return 95;
  return 3.5;
};

const inferIsDay = (item) => {
  if (item?.is_day !== undefined && item?.is_day !== null) return Number(item.is_day) ? 1 : 0;
  const text = `${item?.description || ""} ${item?.iconPlaceholder || ""}`;
  if (/місячно|нічна|🌙/i.test(text)) return 0;
  if (/мінлива/i.test(text) && text.includes("☁")) return 0;
  const hour = parseInt(item?.time, 10);
  if (Number.isFinite(hour)) return hour >= 6 && hour < 21 ? 1 : 0;
  return 1;
};

// Прибирає емодзі на початку підпису ("🌤️ Мінлива хмарність" -> "Мінлива хмарність").
export const stripEmoji = (str) => (str || "").replace(/^[^\p{L}]+/u, "").trim();

export const WeatherIcon = ({ item, code, isDay }) => {
  const resolvedCode = code ?? item?.weather_code ?? inferCode(item);
  const day = isDay ?? inferIsDay(item);
  const kind = getWeatherKind(resolvedCode);

  let body;
  switch (kind) {
    case "clear":
      body = day ? (
        <Sun cx={12} cy={12} r={4.6} ray={1.6} len={2.2} />
      ) : (
        <>
          <Moon />
          {[[18.5, 5], [20.5, 9.5], [15.5, 2.5]].map(([x, y], i) => (
            <circle key={i} className="star" cx={x} cy={y} r="0.8" fill={MOON} style={{ animationDelay: `${i * 0.7}s` }} />
          ))}
        </>
      );
      break;
    case "partly":
      body = (
        <>
          {day ? <Sun cx={16} cy={8} r={3.3} ray={1.2} len={1.5} /> : <Moon transform="translate(10.5 0.5) scale(.5)" />}
          <Cloud transform="translate(0 7.5) scale(.5)" cls="run" opacity="0.55" />
          <Cloud transform="translate(2 5) scale(.82)" cls="driftA" outline />
        </>
      );
      break;
    case "fog":
      body = (
        <>
          <Cloud transform={SMALL_CLOUD} cls="driftA" />
          {FOG_LINES.map((l) => (
            <g key={l.y} className={l.cls}>
              <line x1={l.x1} x2={l.x2} y1={l.y} y2={l.y} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
            </g>
          ))}
        </>
      );
      break;
    case "drizzle":
      body = (
        <>
          <Cloud transform={SMALL_CLOUD} cls="driftA" />
          <Dots xs={[8.5, 12, 15.5]} />
        </>
      );
      break;
    case "rain":
      body = (
        <>
          <Cloud transform={SMALL_CLOUD} cls="driftA" />
          <Drops xs={[8.5, 12, 15.5]} />
        </>
      );
      break;
    case "showers":
      body = (
        <>
          <Cloud transform={SMALL_CLOUD} cls="driftB" />
          <Drops xs={[7.5, 10.5, 13.5, 16.5]} cls="fast" width={1.9} />
        </>
      );
      break;
    case "sleet":
      body = (
        <>
          <Cloud transform={SMALL_CLOUD} cls="driftA" />
          <Drops xs={[8.5, 15.5]} />
          <Flakes xs={[12]} />
        </>
      );
      break;
    case "snow":
      body = (
        <>
          <Cloud transform={SMALL_CLOUD} cls="driftB" />
          <Flakes xs={[8.5, 12, 15.5]} />
        </>
      );
      break;
    case "thunder":
      body = (
        <>
          <Cloud transform={SMALL_CLOUD} cls="driftA" />
          <path className="bolt" d="M13 13.5 9.2 19H12l-1 4.5 4.3-6H12.6z" fill={BOLT} />
        </>
      );
      break;
    default:
      body = (
        <>
          <Cloud transform="translate(6 -2.5) scale(.6)" cls="driftB" opacity="0.55" />
          <Cloud transform="translate(1 3.5) scale(.88)" cls="driftA" outline />
        </>
      );
  }

  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true">
      {body}
    </Svg>
  );
};
