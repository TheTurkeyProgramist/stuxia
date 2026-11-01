import React, { memo, useLayoutEffect, useMemo, useRef } from "react";
import * as SunCalc from "suncalc";
import styled from "styled-components";

// SVG-мальки міст: небо прозоре, кольори суші змішуються з --shade на --night,
// вікна мають клас "win" ("win off" — вночі не світиться).
// Лежать прямо в бандлі (~17 КБ gzip), тож міста є вже в першому кадрі модалки.
const CITY_SVGS = import.meta.glob("./images/timezones/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Клімат міста: спека (марево вдень), дощ (вночі злива), сніг (вночі заметіль), туман
const CLIMATES = {
  asia_dubai: "heat",
  asia_kolkata: "heat",
  asia_bangkok: "heat",
  america_mexico_city: "heat",
  pacific_guadalcanal: "rain",
  pacific_fiji: "rain",
  pacific_pago_pago: "rain",
  america_caracas: "rain",
  america_sao_paulo: "rain",
  america_anchorage: "snow",
  atlantic_south_georgia: "snow",
  asia_almaty: "snow",
  europe_london: "fog",
};

const tile = (w, h, body) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>${body}</svg>`,
  )}")`;

const RAIN_TILE = tile(
  60,
  60,
  "<g stroke='#d6e6ff' stroke-width='1.2' stroke-linecap='round' opacity='.75'><path d='M10 0l-3 12M40 20l-3 12M25 38l-3 12M54 46l-3 12M4 48l-2 8'/></g>",
);
const DOWNPOUR_TILE = tile(
  40,
  40,
  "<g stroke='#c9dcff' stroke-width='1.4' stroke-linecap='round' opacity='.85'><path d='M6 0l-4 16M26 8l-4 16M16 22l-4 16M36 26l-4 16M30 -10l-4 16'/></g>",
);
const SNOW_TILE = tile(
  80,
  80,
  "<g fill='#fff' opacity='.9'><circle cx='10' cy='12' r='2'/><circle cx='50' cy='6' r='1.4'/><circle cx='34' cy='34' r='2.4'/><circle cx='68' cy='42' r='1.6'/><circle cx='18' cy='58' r='1.5'/><circle cx='56' cy='70' r='2.1'/></g>",
);
const BLIZZARD_TILE = tile(
  60,
  60,
  "<g fill='#fff' opacity='.95'><circle cx='6' cy='8' r='1.6'/><circle cx='30' cy='4' r='1.2'/><circle cx='48' cy='18' r='1.8'/><circle cx='20' cy='28' r='1.3'/><circle cx='40' cy='40' r='1.6'/><circle cx='8' cy='48' r='1.2'/><circle cx='54' cy='54' r='1.4'/></g><g stroke='#fff' stroke-width='1' opacity='.55' stroke-linecap='round'><path d='M12 18l8 -6M36 30l8 -6M24 50l8 -6'/></g>",
);
const HEAT_TILE = tile(
  120,
  60,
  "<g fill='none' stroke='#fff' stroke-width='3' opacity='.14' stroke-linecap='round'><path d='M0 15q15 -6 30 0t30 0t30 0t30 0'/><path d='M0 45q15 -6 30 0t30 0t30 0t30 0'/></g>",
);
const FOG_TILE = tile(
  400,
  220,
  "<defs><radialGradient id='f'><stop offset='0' stop-color='#e8ecf0' stop-opacity='.85'/><stop offset='1' stop-color='#e8ecf0' stop-opacity='0'/></radialGradient></defs><g fill='url(#f)'><ellipse cx='110' cy='150' rx='105' ry='32'/><ellipse cx='290' cy='132' rx='105' ry='28'/><ellipse cx='200' cy='186' rx='195' ry='36'/></g>",
);

// Сонце/місяць стоять на місці й раз на ORBIT_STEP_HOURS плавно перекочуються далі
const ORBIT_STEP_HOURS = 2;
const ORBIT_ANIM_MS = 4000;

// Орбіта у координатах viewBox 0 0 400 220 (горизонт на y = 170)
const ORBIT = { cx: 200, cy: 170, rx: 168, ry: 128 };
const HOUR = 60 * 60 * 1000;

const SKY_KEYS = [
  // e — висота сонця (cos кута): 1 зеніт, 0 горизонт, -1 надир
  { e: -1, top: "#050816", bot: "#111a35", shade: "#070b1c", night: 68, lit: 1, stars: 1 },
  { e: -0.35, top: "#0b1026", bot: "#1c2a4a", shade: "#0b1030", night: 62, lit: 1, stars: 1 },
  { e: -0.12, top: "#2a2358", bot: "#c0587a", shade: "#2a1d45", night: 45, lit: 0.9, stars: 0.35 },
  { e: 0.05, top: "#f39ac0", bot: "#ffa25c", shade: "#5a2a4a", night: 25, lit: 0.45, stars: 0 },
  { e: 0.3, top: "#5aa9f5", bot: "#bfe3ff", shade: "#1a2340", night: 0, lit: 0, stars: 0 },
  { e: 1, top: "#2f86f0", bot: "#9fd4ff", shade: "#1a2340", night: 0, lit: 0, stars: 0 },
];

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const lerp = (a, b, t) => a + (b - a) * t;
const lerpColor = (a, b, t) => {
  const [ra, ga, ba] = hexToRgb(a);
  const [rb, gb, bb] = hexToRgb(b);
  return `rgb(${Math.round(lerp(ra, rb, t))}, ${Math.round(lerp(ga, gb, t))}, ${Math.round(lerp(ba, bb, t))})`;
};

const getSkyState = (e) => {
  let i = 0;
  while (i < SKY_KEYS.length - 2 && e > SKY_KEYS[i + 1].e) i++;
  const a = SKY_KEYS[i];
  const b = SKY_KEYS[i + 1];
  const t = Math.min(1, Math.max(0, (e - a.e) / (b.e - a.e)));
  return {
    top: lerpColor(a.top, b.top, t),
    bot: lerpColor(a.bot, b.bot, t),
    shade: lerpColor(a.shade, b.shade, t),
    night: lerp(a.night, b.night, t),
    lit: lerp(a.lit, b.lit, t),
    stars: lerp(a.stars, b.stars, t),
  };
};

// Кут сонця на орбіті (0° — зеніт, -90° — схід зліва, 90° — захід справа, 180° — надир).
// День і ніч діляться на рівні кроки ~ORBIT_STEP_HOURS, тож схід і захід завжди
// потрапляють точно на горизонт (і небо встигає побути рожево-помаранчевим).
const getOrbitAngle = (timezone, now) => {
  const t = now.getTime();
  const events = [-1, 0, 1]
    .flatMap((d) => {
      const times = SunCalc.getTimes(new Date(t + d * 24 * HOUR), timezone.lat, timezone.lon);
      return [
        { type: "rise", at: times.sunrise.getTime() },
        { type: "set", at: times.sunset.getTime() },
      ];
    })
    .filter((ev) => Number.isFinite(ev.at))
    .sort((a, b) => a.at - b.at);

  const prev = events.filter((ev) => ev.at <= t).pop();
  const next = events.find((ev) => ev.at > t);

  if (prev && next && prev.type !== next.type) {
    const span = next.at - prev.at;
    const steps = Math.max(1, Math.round(span / (ORBIT_STEP_HOURS * HOUR)));
    const step = Math.floor(((t - prev.at) / span) * steps);
    return (prev.type === "rise" ? -90 : 90) + (180 * step) / steps;
  }

  // Полярний день/ніч — просто за годинником
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", { hour: "numeric", hourCycle: "h23", timeZone: timezone.value }).format(now),
  );
  const steppedHour = Math.floor(hour / ORBIT_STEP_HOURS) * ORBIT_STEP_HOURS;
  return (steppedHour / 24) * 360 - 180;
};

const easeInOut = (p) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);

const seededStars = (seedText) => {
  let seed = [...seedText].reduce((acc, ch) => acc * 31 + ch.charCodeAt(0), 7) >>> 0;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  return Array.from({ length: 34 }, () => ({
    x: rnd() * 400,
    y: rnd() * 140,
    r: 0.5 + rnd() * 1.1,
    d: (rnd() * 3).toFixed(2),
  }));
};

const SceneRoot = styled.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(180deg, var(--sky-top, #2f86f0), var(--sky-bot, #9fd4ff));

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.35), transparent 38%);
  }

  svg {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  .stars {
    opacity: var(--stars, 0);
  }

  .stars circle {
    animation: city-scene-twinkle 3s ease-in-out infinite alternate;
  }

  .win {
    fill: var(--win-on, #bfe6f7);
  }

  .win.off {
    fill: var(--win-off, #bfe6f7);
  }

  /* Погода: тайловий шар зсувається на ціле число тайлів, тому цикл безшовний.
     Поки шар прихований, анімація на паузі. */
  .fx {
    position: absolute;
    inset: -240px -120px;
    opacity: 0;
    background-repeat: repeat;
    transition: opacity 1.5s ease;
    animation: city-scene-drift var(--dur) linear infinite paused;
  }

  .fx-rain {
    background-image: ${RAIN_TILE};
    --dx: -60px;
    --dy: 240px;
    --dur: 0.9s;
  }

  .fx-downpour {
    background-image: ${DOWNPOUR_TILE};
    --dx: -40px;
    --dy: 160px;
    --dur: 0.35s;
  }

  .fx-snow {
    background-image: ${SNOW_TILE};
    --dx: 80px;
    --dy: 160px;
    --dur: 9s;
  }

  .fx-blizzard {
    background-image: ${BLIZZARD_TILE};
    --dx: 120px;
    --dy: 120px;
    --dur: 1.1s;
  }

  .fx-heat {
    inset: 0;
    background-image: ${HEAT_TILE};
    filter: blur(1.5px);
    animation: city-scene-rise 5s linear infinite paused;
    -webkit-mask-image: linear-gradient(transparent 35%, #000 75%);
    mask-image: linear-gradient(transparent 35%, #000 75%);
  }

  .fx-fog {
    background-image: ${FOG_TILE};
    background-size: 400px 100%;
    inset: 0 -400px 0 0;
    --dx: -400px;
    --dy: 0px;
    --dur: 45s;
  }

  .fx-fog.slow {
    --dur: 80s;
    background-position: 170px 18px;
    animation-direction: reverse;
  }

  .fx-veil {
    inset: 0;
    animation: none;
  }

  .fx-veil.blizzard {
    background: linear-gradient(rgba(215, 225, 238, 0.15), rgba(215, 225, 238, 0.45));
  }

  .fx-veil.storm {
    background: rgba(20, 28, 48, 0.3);
  }

  &[data-climate="rain"] .fx-rain,
  &[data-climate="snow"] .fx-snow,
  &[data-climate="fog"] .fx-fog,
  &[data-climate="heat"][data-phase="day"] .fx-heat,
  &[data-phase="night"] .fx-downpour,
  &[data-phase="night"] .fx-blizzard,
  &[data-phase="night"] .fx-veil {
    opacity: 1;
    animation-play-state: running;
  }

  &[data-phase="night"] .fx-rain,
  &[data-phase="night"] .fx-snow {
    opacity: 0;
    animation-play-state: paused;
  }

  &[data-phase="night"] .fx-fog {
    opacity: 0.55;
  }

  /* Спека: вдень далекий план трохи «пливе» */
  &[data-climate="heat"][data-phase="day"] .city-layer {
    filter: var(--heat-filter);
  }

  @keyframes city-scene-twinkle {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.35;
    }
  }

  /* Анімовані деталі всередині SVG міст (класи ставить генератор) */
  .anim-wheel {
    transform-box: view-box;
    transform-origin: 310px 112px;
    animation: city-scene-spin 60s linear infinite;
  }

  .anim-cabin {
    transform-box: fill-box;
    transform-origin: center;
    animation: city-scene-spin 60s linear infinite reverse;
  }

  @keyframes city-scene-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes city-scene-rise {
    to {
      background-position: 0 -60px;
    }
  }

  @keyframes city-scene-drift {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(var(--dx), var(--dy));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .stars circle,
    .fx,
    .anim-wheel,
    .anim-cabin {
      animation: none;
    }
    &[data-climate="heat"][data-phase="day"] .city-layer {
      filter: none;
    }
  }
`;

const CityLayer = styled.span`
  position: absolute;
  inset: 0;
`;

const CityScene = ({ timezone, now }) => {
  const rootRef = useRef(null);
  const sunRef = useRef(null);
  const sunCoreRef = useRef(null);
  const moonRef = useRef(null);
  const angleRef = useRef(null);
  const slug = timezone.value.toLowerCase().replace(/\//g, "_");
  const svgKey = `./images/timezones/${slug}.svg`;
  const climate = CLIMATES[slug];
  const cityMarkup = CITY_SVGS[svgKey] ?? "";
  const cityHtml = useMemo(() => ({ __html: cityMarkup }), [cityMarkup]);
  const stars = useMemo(() => seededStars(slug), [slug]);
  const targetAngle = getOrbitAngle(timezone, now);

  // Layout-ефект: небо й сонце на місці вже в першому кадрі, без блимання
  useLayoutEffect(() => {
    const paint = (angle) => {
      const rad = (angle * Math.PI) / 180;
      const e = Math.cos(rad);
      const sky = getSkyState(e);
      const root = rootRef.current;
      if (!root) return;

      root.style.setProperty("--sky-top", sky.top);
      root.style.setProperty("--sky-bot", sky.bot);
      root.style.setProperty("--shade", sky.shade);
      root.style.setProperty("--night", `${sky.night.toFixed(1)}%`);
      root.style.setProperty("--stars", sky.stars.toFixed(2));
      root.style.setProperty("--win-on", lerpColor("#bfe6f7", "#ffd36b", sky.lit));
      root.style.setProperty("--win-off", lerpColor("#bfe6f7", "#262f48", sky.lit));
      root.dataset.phase = e > 0.15 ? "day" : e < -0.12 ? "night" : "twilight";

      const sunX = ORBIT.cx + ORBIT.rx * Math.sin(rad);
      const sunY = ORBIT.cy - ORBIT.ry * e;
      sunRef.current?.setAttribute("transform", `translate(${sunX.toFixed(1)} ${sunY.toFixed(1)})`);
      sunCoreRef.current?.setAttribute("fill", lerpColor("#ff7a3d", "#ffe066", Math.min(1, Math.max(0, e * 2.5))));
      moonRef.current?.setAttribute(
        "transform",
        `translate(${(2 * ORBIT.cx - sunX).toFixed(1)} ${(2 * ORBIT.cy - sunY).toFixed(1)})`,
      );
    };

    const from = angleRef.current;
    if (from === null) {
      angleRef.current = targetAngle;
      paint(targetAngle);
      return undefined;
    }

    // Завжди крутимо вперед: після 23:00 сонце йде далі під землею, а не назад
    const delta = (((targetAngle - from) % 360) + 360) % 360;
    if (delta < 0.01) return undefined;

    let frame;
    const start = performance.now();
    const tick = (time) => {
      const p = Math.min(1, (time - start) / ORBIT_ANIM_MS);
      angleRef.current = from + delta * easeInOut(p);
      paint(angleRef.current);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [targetAngle]);

  return (
    <SceneRoot
      ref={rootRef}
      aria-hidden="true"
      data-climate={climate}
      style={climate === "heat" ? { "--heat-filter": `url(#heat-${slug})` } : undefined}
    >
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice">
        <defs>
          <radialGradient id={`glow-${slug}`}>
            <stop offset="0%" stopColor="#fff6c8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff6c8" stopOpacity="0" />
          </radialGradient>
          {climate === "heat" && (
            <filter id={`heat-${slug}`} x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="1" seed="3">
                <animate
                  attributeName="baseFrequency"
                  dur="4s"
                  values="0.012 0.06;0.013 0.066;0.012 0.06"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="3" />
            </filter>
          )}
        </defs>
        <g className="stars" fill="#fff">
          {stars.map((star, i) => (
            <circle key={i} cx={star.x} cy={star.y} r={star.r} style={{ animationDelay: `${star.d}s` }} />
          ))}
        </g>
        <g ref={moonRef}>
          <circle r="26" fill={`url(#glow-${slug})`} opacity="0.45" />
          <circle r="12" fill="#f4f1de" />
          <circle cx="-4" cy="-3" r="2.6" fill="#d9d4bb" />
          <circle cx="4" cy="4" r="1.8" fill="#d9d4bb" />
          <circle cx="3" cy="-5" r="1.2" fill="#d9d4bb" />
        </g>
        <g ref={sunRef}>
          <circle r="34" fill={`url(#glow-${slug})`} opacity="0.8" />
          <circle ref={sunCoreRef} r="15" fill="#ffe066" />
        </g>
      </svg>
      {cityMarkup && <CityLayer className="city-layer" dangerouslySetInnerHTML={cityHtml} />}
      {climate === "heat" && <span className="fx fx-heat" />}
      {climate === "rain" && (
        <>
          <span className="fx fx-veil storm" />
          <span className="fx fx-rain" />
          <span className="fx fx-downpour" />
        </>
      )}
      {climate === "snow" && (
        <>
          <span className="fx fx-veil blizzard" />
          <span className="fx fx-snow" />
          <span className="fx fx-blizzard" />
        </>
      )}
      {climate === "fog" && (
        <>
          <span className="fx fx-fog slow" />
          <span className="fx fx-fog" />
        </>
      )}
    </SceneRoot>
  );
};

export default memo(CityScene);
