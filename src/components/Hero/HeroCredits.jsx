import React, { useCallback, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiBun, SiGithub, SiCloudflare, SiWikimediacommons } from "react-icons/si";
import { TbBrandVite, TbBrandWindy } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiGeminiFill } from "react-icons/ri";
import hostingerLogo from "../../media/_unused/logos/logo-iq.webp";
import { CREDITS_HIDDEN_UNTIL_KEY, LOADER_POWERED_BY_KEY, usePrefValue } from "../../utils/betaFeatures";
import { getPref, setPref } from "../../utils/prefsStore";
import { useAnimationsDisabled } from "../../utils/animationsPref";

import i18n from "../../i18n/i18n.js";
// Колись це була заставка завантаження (Loader). Заставку прибрали — вона на кілька секунд
// закривала сайт, — а версію з індиком і блок «Працює на базі» перенесли на головну (Hero)

const TECH_STACK = [
  { Icon: TbBrandVite, color: "#646CFF", title: "Vite" },
  { Icon: TbBrandWindy, color: "#00c6ff", title: "Windy API" },
  { Icon: TiWeatherPartlySunny, color: "#FFB300", title: "WeatherAPI" },
  { Icon: RiGeminiFill, color: "#8E75FF", title: "Gemini AI" },
  { Icon: SiWikimediacommons, color: "#339966", title: "Wikimedia Commons" },
  { Icon: SiBun, color: "#FBF0DF", title: "Bun" },
  { Icon: SiGithub, color: "#FFFFFF", title: "GitHub" },
  { Icon: SiCloudflare, color: "#F38020", title: "Cloudflare" },
  { Icon: IoLogoFirebase, color: "#FFCA28", title: "Firebase" },
  { Icon: BiLogoVisualStudio, color: "#1F9CF0", title: "VS Code" },
  { src: hostingerLogo, title: "HostIQ" },
];

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
  html[data-animations-off] & svg {
    animation: none !important;
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

function TurkeyDot() {
  return (
    <TurkeyCell aria-hidden="true">
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

// На телефоні в правому куті Hero стоїть логотип «Стихія» (HeroDecors), тож там
// версія переїжджає в рядок «Працює на базі» під Hero
const PHONE_QUERY = "(max-width: 560px)";

// Версія з індиком висить BADGE_SHOW_MS, потім за BADGE_SLIDE_MS з'їжджає вправо й прибирається
const BADGE_SHOW_MS = 3000;
const BADGE_SLIDE_MS = 450;

const badgeSlideOut = keyframes`
  from { transform: none; opacity: 1; }
  to { transform: translateX(calc(100% + 24px)); opacity: 0; }
`;

const VersionBadgeBox = styled.div`
  animation: ${(p) => (p.$hiding ? badgeSlideOut : "none")} ${BADGE_SLIDE_MS}ms ease-in both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  html[data-animations-off] & {
    animation: none;
  }
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  pointer-events: none;

  > span {
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: right;
  }

  @media (max-width: 380px) {
    > span {
      font-size: 11px;
    }
  }
`;

// ПК і планшет: праворуч унизу Hero (вгорі тепер одразу починається панель пошуку)
const HeroCornerBadge = styled(VersionBadgeBox)`
  position: absolute;
  bottom: 8px;
  right: 4px;
  z-index: 2;

  @media ${PHONE_QUERY} {
    display: none;
  }
`;

// Телефон: та сама версія, але в рядку під Hero
const InlineBadge = styled(VersionBadgeBox)`
  display: none;

  @media ${PHONE_QUERY} {
    display: flex;
  }

  /* $gone — з'їхала і схована, але місце в картці лишається: інакше картка ставала нижчою
     й стрибала (зсув макета). Індик при цьому не анімується */
  ${(p) =>
    p.$gone &&
    css`
      visibility: hidden;
      opacity: 0;
      svg {
        animation: none !important;
      }
    `}
`;

// Скільки картка «Працює на базі» висить на екрані, і скільки триває її з'їжджання вниз
const CREDITS_SHOW_MS = 6000;
// Натиснули на картку — не показуємо її тиждень
const CREDITS_HIDE_FOR_MS = 7 * 24 * 60 * 60 * 1000;

// Налаштування вже в пам'яті до старту застосунку (prefsStore), тож картка не блимає
const isHiddenForWeek = () => Number(getPref(CREDITS_HIDDEN_UNTIL_KEY)) > Date.now();
const CREDITS_SLIDE_MS = 600;

const creditsSlideIn = keyframes`
  from { transform: translateY(calc(100% + 40px)); opacity: 0; }
  to { transform: none; opacity: 1; }
`;
const creditsSlideOut = keyframes`
  from { transform: none; opacity: 1; }
  to { transform: translateY(calc(100% + 40px)); opacity: 0; }
`;

// Плаває збоку внизу екрана (position: fixed) — тож не лишає проміжку в сторінці
// і однаково видна і в звичайному, і в липкому режимі фону.
// ПК: лівий нижній кут (праворуч унизу — підказка Доміно).
// Телефон: на всю ширину, над смужкою Доміно
const CreditsCard = styled.div`
  position: fixed;
  left: 12px;
  bottom: 12px;
  z-index: 9000;
  width: min(380px, calc(100vw - 24px));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
  text-align: center;
  color: #fff;
  animation: ${(p) => (p.$hiding ? creditsSlideOut : creditsSlideIn)} ${CREDITS_SLIDE_MS}ms
    ${(p) => (p.$hiding ? "ease-in" : "ease-out")} both;
  pointer-events: ${(p) => (p.$hiding ? "none" : "auto")};
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
  }
  &:focus-visible {
    outline: 2px solid #00c6ff;
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    left: 10px;
    right: 10px;
    width: auto;
    bottom: calc(76px + env(safe-area-inset-bottom));

    /* Поки людина друкує (клавіатура відкрита), картка не закриває підказки міст */
    :root:has(input:focus, textarea:focus) & {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  html[data-animations-off] & {
    animation: none;
  }
`;

const PoweredByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  > span {
    font-size: 15px;
    letter-spacing: 1.5px;
    color: #fff;
    font-weight: 700;
  }
`;

const IconsGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;

  img,
  svg {
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

const PhraseText = styled.div`
  font-size: 12px;
  color: #00c6ff;
  line-height: 1.5;
  font-weight: 900;
  font-style: italic;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const CopyrightText = styled.p`
  margin: 0;
  color: #fff;
  font-size: 10px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`;

const HideHint = styled.span`
  font-size: 10px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.6);
`;

const VERSION_TEXT = () => (i18n.t("ui.HeroCredits.v100"));

// Показати → через showMs почати з'їжджати → через slideMs прибрати зовсім (не рендериться).
// hide() — сховати раніше (напр. після прокрутки). З вимкненими анімаціями зникає одразу
function useTimedExit(showMs, slideMs) {
  const animationsDisabled = useAnimationsDisabled();
  // shown → hiding (їде) → gone
  const [phase, setPhase] = useState("shown");
  const hide = useCallback(() => setPhase((prev) => (prev === "shown" ? "hiding" : prev)), []);

  useEffect(() => {
    if (phase !== "shown") return undefined;
    const timer = setTimeout(hide, showMs);
    return () => clearTimeout(timer);
  }, [phase, showMs, hide]);

  useEffect(() => {
    if (phase !== "hiding") return undefined;
    const timer = setTimeout(() => setPhase("gone"), animationsDisabled ? 0 : slideMs);
    return () => clearTimeout(timer);
  }, [phase, animationsDisabled, slideMs]);

  return [phase, hide];
}

// Версія з індиком у правому верхньому куті Hero (на телефоні схована — див. HeroCredits)
export function HeroVersionBadge() {
  const [phase] = useTimedExit(BADGE_SHOW_MS, BADGE_SLIDE_MS);
  if (phase === "gone") return null;
  return (
    <HeroCornerBadge $hiding={phase === "hiding"}>
      <span>{VERSION_TEXT()}</span>
      <TurkeyDot />
    </HeroCornerBadge>
  );
}

// Та сама версія всередині картки на телефоні. Після з'їжджання не видаляється, а лише
// ховається на своєму місці ($gone) — щоб картка не міняла висоту
function InlineVersionBadge() {
  const [phase] = useTimedExit(BADGE_SHOW_MS, BADGE_SLIDE_MS);
  const gone = phase === "gone";
  return (
    <InlineBadge $hiding={phase === "hiding"} $gone={gone} aria-hidden={gone || undefined}>
      <span>{VERSION_TEXT()}</span>
      <TurkeyDot />
    </InlineBadge>
  );
}

// Картка «Працює на базі» з фразою дня і копірайтом (на телефоні ще й версія з індиком).
// З'являється при відкритті сайту, а через CREDITS_SHOW_MS або щойно Hero прокрутили
// більш ніж наполовину — плавно з'їжджає вниз за край екрана й прибирається зовсім
// (індик і фраза з іскрами далі не анімуються). До перезавантаження сторінки не повертається
export default function HeroCredits({ randomPhrase }) {
  // «Працює на базі»: повністю, лише іконки або сховано (Параметри → Режими та застосунки)
  const poweredBy = usePrefValue(LOADER_POWERED_BY_KEY, "full");
  const showTitle = poweredBy === "full";
  const showIcons = poweredBy === "full" || poweredBy === "icons";
  // "off" — картку вимкнено зовсім (Параметри → Режими та застосунки);
  // або її сховали натисканням менш ніж тиждень тому (перевіряємо раз — при відкритті сайту)
  const [hiddenForWeek] = useState(isHiddenForWeek);
  const isOff = poweredBy === "off" || hiddenForWeek;
  const [phase, hide] = useTimedExit(CREDITS_SHOW_MS, CREDITS_SLIDE_MS);

  // Прокрутили Hero більш ніж наполовину — ховаємо, не чекаючи таймера
  useEffect(() => {
    if (phase !== "shown" || isOff) return undefined;
    const hero = document.getElementById("hero");
    let observer;
    if (hero && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio < 0.5) hide();
        },
        { threshold: [0, 0.5] },
      );
      observer.observe(hero);
    }
    return () => observer?.disconnect();
  }, [phase, isOff, hide]);

  if (phase === "gone" || isOff) return null;

  // Натискання (чи Enter / пробіл) ховає картку одразу й на тиждень наперед
  const hideForWeek = () => {
    setPref(CREDITS_HIDDEN_UNTIL_KEY, String(Date.now() + CREDITS_HIDE_FOR_MS));
    hide();
  };

  return (
    <CreditsCard
      $hiding={phase === "hiding"}
      role="button"
      tabIndex={0}
      aria-label={i18n.t("ui.HeroCredits.pratsiuieNaBaziNatysnit")}
      onClick={hideForWeek}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          hideForWeek();
        }
      }}
    >
        <InlineVersionBadge />
        {(showIcons || randomPhrase) && (
          <PoweredByWrapper>
            {showTitle && <span>{i18n.t("ui.HeroCredits.pratsiuieNaBazi")}</span>}
            {showIcons && (
              <IconsGrid>
                {TECH_STACK.map(({ Icon, src, color, title }) =>
                  src ? (
                    <img key={title} src={src} alt={title} title={title} />
                  ) : (
                    <Icon key={title} style={{ color }} title={title} />
                  ),
                )}
              </IconsGrid>
            )}
            {randomPhrase && <PhraseText>{randomPhrase}</PhraseText>}
          </PoweredByWrapper>
        )}
        <CopyrightText>
          {i18n.t("ui.HeroCredits.2026StuxiaVsiPrava")}
        </CopyrightText>
        <HideHint>{i18n.t("ui.HeroCredits.natysnitShchobPrykhovatyNa")}</HideHint>
    </CreditsCard>
  );
}
