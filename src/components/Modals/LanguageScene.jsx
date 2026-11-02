import { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CITY_SVGS from '../Hero/citySvgs.js';
import { HEAT_TILE, FOG_TILE } from '../Hero/CityScene.jsx';
import { Lanterns, Petals } from '../Hero/SceneParticles.jsx';
import {
  LANGUAGE_SCENES,
  LANGUAGE_CITY_SVGS,
  DAWN_LANGUAGES,
  NIGHT_LANGUAGES,
  LANGUAGE_CLIMATES,
  LANGUAGE_CITY_RECOLOR,
} from './languageScenes.js';

// Статична сцена без руху сонця: день, світанок або (для Китаю) ніч
const SKIES = {
  night: { top: '#050816', bot: '#1c2a4a', shade: '#070b1c', night: 0.62, winOn: '#ffd36b', winOff: '#262f48' },
  day: { top: '#4f9bf2', bot: '#bfe3ff', shade: '#1a2340', night: 0, winOn: '#bfe6f7', winOff: '#bfe6f7' },
  dawn: { top: '#f39ac0', bot: '#ffa25c', shade: '#5a2a4a', night: 0.22, winOn: '#dcddb7', winOff: '#7a94a8' },
};

// Зимове небо світліше й сіріше
const SNOW_SKY = { top: '#8fb4d8', bot: '#e4eef7' };

const SUN = {
  day: { x: 345, y: 42, core: '#ffe066' },
  dawn: { x: 320, y: 160, core: '#ff8a3d' },
};

const STARS = [
  [24, 18, 1.1], [62, 44, 0.8], [96, 14, 1.3], [138, 36, 0.7], [176, 12, 1],
  [214, 50, 0.9], [252, 22, 1.2], [296, 58, 0.7], [338, 16, 1], [372, 42, 1.3],
  [118, 66, 0.8], [232, 80, 0.7], [44, 84, 0.9], [356, 88, 0.8],
];

// Ліхтарики — у китайській нічній сцені, пелюстки сакури — в японській
const PARTICLES = { zh: Lanterns, ja: Petals };

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const mixHex = (a, b, t) => {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return `rgb(${ca.map((v, i) => Math.round(v + (cb[i] - v) * t)).join(',')})`;
};

// Сцену «запікаємо» в один <img>: тисячі SVG-вузлів із color-mix() і CSS-змінними
// браузер раніше перераховував і перемальовував під час прокрутки. Тепер кольори
// рахуються тут один раз, а картинка растеризується й далі лише зсувається.
const sceneCache = new Map();

const buildSceneSrc = (code) => {
  if (sceneCache.has(code)) return sceneCache.get(code);

  const phase = NIGHT_LANGUAGES.has(code) ? 'night' : DAWN_LANGUAGES.has(code) ? 'dawn' : 'day';
  const sky = SKIES[phase];
  const climate = LANGUAGE_CLIMATES[code];
  let markup =
    LANGUAGE_SCENES[code] ??
    CITY_SVGS[`./images/timezones/${LANGUAGE_CITY_SVGS[code]}.svg`] ??
    '';
  for (const [from, to] of Object.entries(LANGUAGE_CITY_RECOLOR[code] ?? {})) {
    markup = markup.replaceAll(from, to);
  }
  markup = markup
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/color-mix\(in srgb,(#[0-9a-f]{6}),var\(--shade\) var\(--night\)\)/gi, (_, c) =>
      mixHex(c, sky.shade, sky.night),
    );

  let lights = '';
  if (phase === 'night') {
    lights =
      `<g fill="#fff" opacity=".9">${STARS.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>` +
      '<circle cx="62" cy="40" r="26" fill="url(#g)" opacity=".45"/><circle cx="62" cy="40" r="12" fill="#f4f1de"/>' +
      '<circle cx="58" cy="37" r="2.6" fill="#d9d4bb"/><circle cx="66" cy="44" r="1.8" fill="#d9d4bb"/>';
  } else if (climate !== 'snow') {
    const sun = SUN[phase];
    lights = `<circle cx="${sun.x}" cy="${sun.y}" r="34" fill="url(#g)" opacity=".8"/><circle cx="${sun.x}" cy="${sun.y}" r="15" fill="${sun.core}"/>`;
  }

  // Дерева на вітрі хитаються кроками (кілька перемальовувань на секунду, а не 60)
  const swayCss =
    climate === 'wind'
      ? '.sway{transform-box:fill-box;transform-origin:50% 100%;animation:s 3.6s steps(6) infinite alternate}' +
        '@keyframes s{from{transform:rotate(-3deg)}to{transform:rotate(5deg)}}' +
        '@media (prefers-reduced-motion:reduce){.sway{animation:none}}'
      : '';

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice">' +
    `<style>.win{fill:${sky.winOn}}.win.off{fill:${sky.winOff}}${swayCss}</style>` +
    '<defs><radialGradient id="g"><stop offset="0" stop-color="#fff6c8" stop-opacity=".9"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></radialGradient></defs>' +
    lights +
    markup +
    '</svg>';

  const src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  sceneCache.set(code, src);
  return src;
};

// Легші за тайли часових поясів: більший тайл і менше елементів
const WIND_TILE = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'><g fill='none' stroke='#fff' stroke-width='1.6' stroke-linecap='round' opacity='.5'><path d='M14 28h50q10 0 10 -6'/><path d='M170 80h60'/><path d='M60 132h40q8 0 8 6'/></g></svg>",
)}")`;
const SNOW_TILE = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><g fill='#fff' opacity='.9'><circle cx='18' cy='22' r='2'/><circle cx='86' cy='12' r='1.5'/><circle cx='56' cy='72' r='2.3'/><circle cx='118' cy='96' r='1.7'/><circle cx='30' cy='118' r='1.5'/></g></svg>",
)}")`;

const SceneRoot = styled.span`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
  contain: strict;
  background: linear-gradient(180deg, var(--sky-top), var(--sky-bot));

  /* Затемнення лише в лівому верхньому куті під підписом — білий текст читається
     й на світлому небі, а сонце праворуч лишається яскравим */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    background: radial-gradient(ellipse 85% 55% at 0 0, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.25) 55%, transparent);
  }

  > img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Тайловий шар зсувається на ціле число тайлів — цикл безшовний.
     Анімується лише transform (на GPU), поза екраном усе на паузі. */
  .fx {
    position: absolute;
    top: calc(var(--dy) * -1);
    left: calc(var(--dx) * -1);
    right: calc(var(--dx) * -1);
    bottom: 0;
    background-repeat: repeat;
    animation: lang-scene-drift var(--dur) linear infinite;
  }

  .fx-snow {
    background-image: ${SNOW_TILE};
    --dx: 140px;
    --dy: 140px;
    --dur: 16s;
  }

  .fx-wind {
    background-image: ${WIND_TILE};
    --dx: 320px;
    --dy: 0px;
    --dur: 6s;
    animation-direction: reverse;
  }

  .fx-fog {
    background-image: ${FOG_TILE};
    background-size: 400px 100%;
    --dx: 400px;
    --dy: 0px;
    --dur: 45s;
    animation-direction: reverse;
  }

  .fx-fog.slow {
    --dur: 80s;
    background-position: 170px 18px;
    animation-direction: normal;
    opacity: 0.8;
  }

  /* Марево — хвилі повітря піднімаються вгору */
  .fx-heat {
    --dx: 0px;
    --dy: 60px;
    --dur: 8s;
    background-image: ${HEAT_TILE};
    animation-direction: reverse;
    -webkit-mask-image: linear-gradient(transparent 35%, #000 75%);
    mask-image: linear-gradient(transparent 35%, #000 75%);
  }

  &[data-paused] .fx,
  &[data-paused] .particle {
    animation-play-state: paused;
  }

  /* Сніг: трохи білої пелени */
  &[data-climate='snow']::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(rgba(235, 242, 250, 0.1), rgba(235, 242, 250, 0.35));
  }

  @keyframes lang-scene-drift {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(var(--dx), var(--dy));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fx {
      animation: none !important;
    }
  }
`;

const LanguageScene = ({ code }) => {
  const phase = NIGHT_LANGUAGES.has(code) ? 'night' : DAWN_LANGUAGES.has(code) ? 'dawn' : 'day';
  const climate = LANGUAGE_CLIMATES[code];
  const Particles = PARTICLES[code];
  const animated = Boolean(climate || Particles);
  const sky = { ...SKIES[phase], ...(climate === 'snow' ? SNOW_SKY : null) };
  const rootRef = useRef(null);

  // Анімації крутяться лише в картках, які зараз видно на екрані
  useEffect(() => {
    const root = rootRef.current;
    if (!animated || !root) return undefined;
    root.dataset.paused = '';
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) delete root.dataset.paused;
      else root.dataset.paused = '';
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <SceneRoot
      ref={rootRef}
      aria-hidden="true"
      data-climate={climate}
      style={{ '--sky-top': sky.top, '--sky-bot': sky.bot }}
    >
      <img src={buildSceneSrc(code)} alt="" decoding="async" draggable={false} />
      {Particles && <Particles />}
      {climate === 'heat' && <span className="fx fx-heat" />}
      {climate === 'wind' && <span className="fx fx-wind" />}
      {climate === 'snow' && <span className="fx fx-snow" />}
      {climate === 'fog' && (
        <>
          <span className="fx fx-fog slow" />
          <span className="fx fx-fog" />
        </>
      )}
    </SceneRoot>
  );
};

export default memo(LanguageScene);
