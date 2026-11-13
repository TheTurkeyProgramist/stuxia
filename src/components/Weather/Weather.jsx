import React, { useState, useEffect, useCallback, useRef, useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import daynight from "../../media/thumbs/day-night-clock.webp";
import daysthunders from "../../media/thumbs/night-river-burnt-tree.webp";
import localforage from "localforage";
import {
  BiCog,
  BiEdit,
  BiImageAlt,
  BiLineChart,
  BiCurrentLocation,
  BiTrash,
  BiFullscreen,
  BiDownload,
  BiCheck,
  BiX,
  BiTable,
  BiGridAlt,
  BiTrendingUp,
  BiPalette,
  BiChevronDown,
  BiLowVision,
  BiVolumeFull,
  BiStopCircle,
  BiSidebar,
} from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";
import {
  useBeta,
  usePrefValue,
  togglePrefFlag,
  CITY_SIDEBAR_HIDDEN_KEY,
  CAROUSEL_ARROWS_HIDDEN_KEY,
  CAROUSEL_NUMBERS_HIDDEN_KEY,
} from "../../utils/betaFeatures";
import { setPref } from "../../utils/prefsStore";
import { useAnimationsDisabled } from "../../utils/animationsPref";
import { buildForecastSpeech, getVoiceSettings, speak, stopSpeaking } from "../../utils/weatherSpeech";
import {
  removeCustomDay,
  addCustomDay,
} from "../../features/counter/Counter.js";
import { getHourlyForecastDetailGroups } from "../../utils/hourlyForecast";
import { generateRuleBasedForecast } from "../../utils/ruleBasedForecast";
import { DEFAULT_BGS } from "../Hero/defaultBgs";
import { getWindDirectionText } from "../../utils/windUtils";
import { linearTrend } from "../../utils/chartTrend";
import { DEFAULT_LINE_STYLES, DEFAULT_DIM, mergeLineStyles, lineStyleProps } from "../../utils/chartLineStyles";
import ChartStyleModal from "../Modals/ChartStyleModal";
import ForecastReportModal from "../Modals/ForecastReportModal";
import CardSettingsModal from "../Modals/CardSettingsModal";
import WeatherBgModal from "../Modals/WeatherBgModal";
import {
  FaCalendarPlus,
  FaClock,
  FaDroplet,
  FaCloudRain,
  FaCalendarDays,
  FaMoon,
  FaPlantWilt,
  FaCloud,
  FaUmbrella,
  FaShirt,
  FaCar,
  FaPersonWalking,
  FaHouse,
  FaLightbulb,
  FaGaugeHigh,
} from "react-icons/fa6";
import CustomDatesModal from "../Modals/CustomDatesModal";
import UnitsModal from "../Modals/UnitsModal";
import { loadCardUnits, isUnitsEventForCard, cardUnitsKey, UNITS_GLOBAL_KEY, UNITS_USE_GLOBAL_KEY } from "../../utils/unitsStorage";
import { DEFAULT_UNITS, UNIT_GROUPS, makeFormatters, tempLabel, windLabel, pressureLabel, visibilityLabel, convertVisibility } from "../../utils/units.js";
import { CONSENSUS_MODEL_LABELS } from "../../utils/weatherConsensus";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import { PiThermometerFill } from "react-icons/pi"; //Нормальна температура
import { BsThermometerSnow, BsThermometerSun, BsMoonStarsFill, BsClockHistory, BsHourglassSplit, BsBuildings, BsCompass, BsStars } from "react-icons/bs"; //Холодна температура / Ніч / Астрономія
import { formatClock, getTwilightData, getDayLength, getMoonDetails, getDayLengthDiff, getScaleProgress } from "../../utils/astro";
import { isFoggy } from "../../utils/dailyAggregates";
import { AnimWind, AnimSpin, AnimHourglass, AnimTwinkle, AnimCompass, MoonPhaseIcon, AstroScale } from "./BlockAstroIcons.jsx";
import { HumidityGlass, TempThermometer, PressureGauge, VisibilityFog, UvSun, CloudWithTrend, getCloudTrend, getSnowStyle } from "./AnimatedWeatherIcons.jsx"; //Анімовані іконки
import { WeatherIcon, stripEmoji } from "./WeatherConditionIcon.jsx"; //Власні іконки погоди
import { BiWind } from "react-icons/bi"; //Пориви Вітру
import { GiGrassMushroom } from "react-icons/gi"; //Точка роси
import { MdOutlineSpeed, MdClose, MdStraighten, MdNotificationsActive, MdNotificationsOff } from "react-icons/md"; //Тиск
import { isWeatherAlertsEnabled, isCardWeatherAlertsOn, setCardWeatherAlerts } from "../../utils/emergencyAlerts";
import { FaSnowflake, FaSun, FaExclamationTriangle } from "react-icons/fa"; //Іконки
import { GiSunRadiations, GiSnowing, GiWaterRecycling, GiIceCube } from "react-icons/gi";//Сонячна радіація
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,                 
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,  
  FloatingArrow,         
} from "@floating-ui/react";
import { MirrorFloatingPortal, MirrorText } from "../Tooltip/MirrorSafe";
import { createChartWeatherIcon, getChartIconKey, createChartWindArrow, valueLabelsPlugin } from "../../utils/chartWeatherIcon";

// Кеш canvas-іконок для точок графіків: картка рендериться щосекунди, і без кешу
// десятки іконок (з емодзі) малювались заново, а графік бачив «нові» дані
const chartCanvasCache = new Map();
const rememberChartCanvas = (key, canvas) => {
  if (chartCanvasCache.size > 400) chartCanvasCache.clear();
  chartCanvasCache.set(key, canvas);
};

const LazyLineChart = lazy(() => import("./WeatherLineChart.jsx"));
const Line = (props) => (
  <Suspense fallback={null}>
    <LazyLineChart {...props} />
  </Suspense>
);
const TooltipBox = styled.div`
  background-color: ${(props) => (props.$isDarkMode ? "#0c0c0cbf" : "#fdff98bb")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${(props) => (props.$isDarkMode ? "0.5" : "0.15")});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`;

export const Tooltip = ({
  content,
  children,
  placement = "bottom",
  isDarkMode = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    strategy: "fixed",
    transform: false, 
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });
  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: {
      opacity: 0,
      transform: "scale(0.9)",
    },
    open: {
      opacity: 1,
      transform: "scale(1)",
    },
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  if (!content) return children;

  const bgTheme = isDarkMode ? "#111111" : "#ffffff";
  const borderTheme = "#00acb9";

  return (
    <>
      <span
        ref={refs.setReference}
        {...getReferenceProps({
          onMouseLeave: () => setIsOpen(false),
          onClick: () => setIsOpen(false),
        })}
        style={{ display: "inline-flex" }}
      >
        {children}
      </span>
      {isMounted && (
        <MirrorFloatingPortal>
          <TooltipBox
            ref={refs.setFloating}
            $isDarkMode={isDarkMode}
            style={{ ...floatingStyles, ...transitionStyles }}
            {...getFloatingProps()}
          >
            <MirrorText>{content}</MirrorText>
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={bgTheme}
              stroke={borderTheme}
              strokeWidth={1}
            />
          </TooltipBox>
        </MirrorFloatingPortal>
      )}
    </>
  );
};
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const CustomTimersDisplay = ({ customDays, cardId }) => {
  const [now, setNow] = useState(new Date());
  const myEvents = customDays.filter(d => d.cardId === 'all' || d.cardId === cardId);
  const hasEvents = myEvents.length > 0;
  useEffect(() => {
    if (!hasEvents) return undefined;
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, [hasEvents]);

  if (!hasEvents) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "10px", marginTop: "10px" }}>
      {myEvents.map(ev => {
        const evStart = new Date(`${ev.date}T${ev.time}:00`);
        const evEnd = new Date(evStart.getTime());
        if (ev.durationUnit === "days") evEnd.setDate(evEnd.getDate() + ev.duration);
        else evEnd.setHours(evEnd.getHours() + ev.duration);
        
        const diffToStart = evStart - now;
        const diffToEnd = evEnd - now;

        if (diffToEnd <= 0) return null; // past event, auto delete could be handled here or redux

        const formatDiff = (ms) => {
          const d = Math.floor(ms / (1000 * 60 * 60 * 24));
          const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
          const m = Math.floor((ms / 1000 / 60) % 60);
          const s = Math.floor((ms / 1000) % 60);
          return `${d}дні:${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        };

        return (
          <div key={ev.id} style={{
            background: "rgba(0,0,0,0.4)",
            color: "#00eaff",
            padding: "8px",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center"
          }}>
            {ev.reason}: {diffToStart > 0 ? `До події: ${formatDiff(diffToStart)}` : `Подія триватиме ще: ${formatDiff(diffToEnd)}`}
          </div>
        );
      })}
    </div>
  );
};

// Анімація для модалки деталей (плавне розгортання зверху вниз)
const expandDown = keyframes`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;
const menuSlideDown = keyframes`
  from { clip-path: inset(0 0 100% 0); }
  to { clip-path: inset(0 0 0 0); }
`;

const menuSlideUp = keyframes`
  from { clip-path: inset(0 0 0 0); }
  to { clip-path: inset(0 0 100% 0); }
`;

export const AihelpTitle = styled.div`
  font-size: 20px;
  text-align: center;
  z-index: 400;
  width: 100px;
  margin-left: auto;
  padding: 5px 14px;
  position: relative;
    margin-bottom: 4px;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "white" : "#000")};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
    background: ${(props) => (props.$isDarkMode ? " rgba(0, 0, 0, 0.93)" : "rgb(255, 255, 255)")};
     border: ${(props) => (props.$isDarkMode ? "2px solid rgba(0, 255, 229, 0.6)" : "2px solid rgba(0, 0, 0, 0.2)")};
    `;

const WeatherCard = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#0000009e" : "#f5f5f5aa")};
  position: relative;
  color: #fff;
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  min-width: 0;
  z-index: 100;
  max-width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: ${(props) =>
    props.$isMain ? "1.5px solid #004cff" : "1.5px solid #00fbff"};
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
  }
`;
//
const CardHeader = styled.div`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgb(0, 238, 255);
  overflow: visible;
  h3 {
    margin: 0;
    font-size: 13px;
    color: ${(props) => (props.$isMain ? "#008cff" : "skyblue")};
  }
`;

const ActionButtons = styled.div`
  position: relative;
  display: flex;
  align-self: stretch;
  align-items: stretch;
  gap: 4px;
  button {
    background: #333;
    color: #fff;
    border: none;
    padding: 3px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      background: #555;
    }
  }
`;
const CurrentWeatherBanner = styled.div`
  gap: 4px;
  padding: 1px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  @media (min-width: 768px) {
    /* Заповнює рівно доступну висоту вкладки, без прокрутки */
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const DesktopLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    /* Права колонка меню вузька: іконки стоять над заголовками, а не збоку */
    grid-template-columns: minmax(0, 1fr) 190px;
    gap: 8px;
    padding: 10px;
    height: 570px;
    box-sizing: border-box;
    background: ${(props) => (props.$isDarkMode ? "rgba(10, 10, 18, 0.6)" : "rgba(240, 244, 248, 0.8)")};
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 190px;
    height: 595px;
  }
`;

const MainBannerArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  background: ${(props) =>
    props.$image
      ? `linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.55)), url(${props.$image}) center/cover no-repeat`
      : "transparent"};
  /* Телефон: однакова висота для всіх карток і вкладок */
  @media (max-width: 767px) {
    height: 620px;
  }
  @media (min-width: 768px) {
    height: 542px;
    padding: 0;
    overflow: hidden;
  }
`;

/* Вміст вкладки займає решту висоти картки; на телефоні зайве прокручується всередині */
const TabContentArea = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    /* Активна вкладка розтягується на всю висоту і не стискається */
    & > * {
      flex: 1 0 auto;
    }
  }
  /* Планшет і комп'ютер: вміст вкладки не обрізається, а прокручується вертикально */
  @media (min-width: 768px) {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
  }
`;

const SideCardsColumn = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    height: 542px;
  }
`;
/* Плитка меню праворуч: іконка зверху посередині, під нею заголовок і підпис (колонка вузька) */
const SIDE_CARD_INNER_STYLE = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  gap: "3px",
  width: "100%",
  minWidth: 0,
};
const SIDE_CARD_ICON_STYLE = { fontSize: "24px", lineHeight: 1, display: "inline-flex" };
const SIDE_CARD_TEXT_STYLE = {
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minWidth: 0,
};

/* Плитка «Налаштування»: шестерня різко обертається і перетворюється на іконку одного
   з налаштувань (підпис теж міняється), потім так само повертається в шестерню */
const settingsSpinIn = keyframes`
  0% { transform: rotate(-300deg) scale(0.3); opacity: 0; }
  70% { transform: rotate(15deg) scale(1.12); opacity: 1; }
  100% { transform: rotate(0deg) scale(1); opacity: 1; }
`;
const settingsTextIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
`;
const SettingsCycleIcon = styled.span`
  display: inline-flex;
  animation: ${settingsSpinIn} 0.55s cubic-bezier(0.2, 0.9, 0.3, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const SettingsCycleText = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: ${settingsTextIn} 0.35s ease both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// Скільки стоїть шестерня і скільки — іконка налаштування
const SETTINGS_GEAR_MS = 3500;
const SETTINGS_STEP_MS = 2200;

/** Вміст плитки «Налаштування». Окремий компонент: таймер перемальовує лише плитку,
    а не всю картку. Крутиться, тільки поки плитку видно і меню закрите */
const SettingsTileContent = ({ active, steps }) => {
  const animationsDisabled = useAnimationsDisabled();
  const iconRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // -1 — шестерня, інакше номер налаштування в steps
  const [stepIndex, setStepIndex] = useState(-1);
  const nextStepRef = useRef(0);

  useEffect(() => {
    const el = iconRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const isCycling = isVisible && !active && !animationsDisabled && !reducedMotion && steps.length > 0;

  useEffect(() => {
    if (!isCycling) {
      setStepIndex(-1);
      return undefined;
    }
    const timer = setTimeout(
      () => {
        if (stepIndex === -1) {
          const next = nextStepRef.current % steps.length;
          nextStepRef.current = next + 1;
          setStepIndex(next);
        } else {
          setStepIndex(-1);
        }
      },
      stepIndex === -1 ? SETTINGS_GEAR_MS : SETTINGS_STEP_MS,
    );
    return () => clearTimeout(timer);
  }, [isCycling, stepIndex, steps.length]);

  const step = stepIndex >= 0 ? steps[stepIndex] : null;
  const Icon = step ? step.Icon : BiCog;

  return (
    <div style={SIDE_CARD_INNER_STYLE}>
      <div ref={iconRef} style={{ ...SIDE_CARD_ICON_STYLE, color: step ? step.color : "#a78bfa" }}>
        <SettingsCycleIcon key={stepIndex}>
          <Icon />
        </SettingsCycleIcon>
      </div>
      <div style={SIDE_CARD_TEXT_STYLE}>
        <NameCardItem $active={active}>Налаштування</NameCardItem>
        <SubNameCardItem $active={active}>
          <SettingsCycleText key={stepIndex}>{step ? step.text : "Усі налаштування картки"}</SettingsCycleText>
        </SubNameCardItem>
      </div>
    </div>
  );
};

/* Довгий текст у вузькій плитці обрізається трьома крапками, а не ламає висоту */
const NameCardItem = styled.div`
font-size: 15px;
font-weight: 700;
line-height: 1.2;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 100%;
color: ${(props) => (props.$active ? "#00eeff" : "#fff")};
`;
const SubNameCardItem = styled.div`
font-size: 13px;
line-height: 1.2;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 100%;
color: ${(props) => (props.$active ? "#00eeff" : "#fff")};
`;
const SideCardItem = styled.div`
  position: relative;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: ${(props) => (props.$active ? "2px solid #00eeff" : "1px solid rgba(255, 255, 255, 0.15)")};
  box-shadow: ${(props) => (props.$active ? "0 0 12px rgba(0, 238, 255, 0.5)" : "0 2px 6px rgba(0, 0, 0, 0.3)")};
  background: ${(props) =>
    props.$bgImg
      ? `linear-gradient(rgba(0, 0, 0, 0.69), rgba(0,0,0,0.7)), url(${props.$bgImg}) center/cover no-repeat`
      : props.$active
        ? "linear-gradient(135deg, rgba(0, 238, 255, 0.25), rgba(15, 25, 45, 0.9))"
        : "rgba(20, 20, 30, 0.7)"};
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  padding: 8px 12px;

  @media (min-width: 768px) {
    /* Картки ділять висоту колонки порівну — скільки б їх не було */
    height: auto;
    flex: 1 1 0;
    min-height: 0;
    /* Менші відступи: іконка + заголовок + підпис мають влізти навіть коли плиток шість */
    padding: 6px 10px;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => (props.$active ? "#00eeff" : "rgba(0, 238, 255, 0.6)")};
  }
`;

const DesktopTwoRowIndicators = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  gap: 2px;
  width: 100%;
  height: 84%;
  padding: 1px;
  box-sizing: border-box;
  @media (max-width: 767px) {
    height: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    gap: 3px;
    padding: 4px;
  }
`;
const IndicatorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: ${props => props.$pad || "2px"};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

const IconBox = styled.div`
  font-size: ${props => props.$size || "24px"};
  line-height: ${props => props.$lh || "normal"};
  color: ${props => props.$color || "inherit"};
  opacity: ${props => props.$opacity ?? 1};
  transform: ${props => props.$rotate ? `rotate(${props.$rotate}deg)` : "none"};
  display: ${props => props.$rotate ? "inline-block" : "block"};
  @media (min-width: 1200px) {
    font-size: 44px;
  }
       @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const TextContent = styled.div`
  margin-top: ${props => props.$mt || "5px"};
  font-size: ${props => props.$size || "12px"};
  font-weight: ${props => props.$weight || "bold"};
  text-align: center;
  line-height: ${props => props.$lh || "normal"};
    @media (min-width: 1200px) {
    font-size: 16px;
  }
       @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const SubText = styled.div`
  font-size: ${props => props.$size || "10px"};
  font-weight: ${props => props.$weight || "normal"};
  opacity: ${props => props.$opacity || 0.8};
   @media (min-width: 1200px) {
    font-size: 14px;
  }
     @media (min-width: 768px) {
    font-size: 12px;
  }
`;
const MobileTabBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid rgb(0, 238, 255);
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CurrentWeatherBanne = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: 100%;
  width: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  align-self: stretch;
`;

const ChartScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 10px;
  }
`;

const ChartInnerContainer = styled.div`
  width: ${(props) =>
    typeof props.$width === "number" ? `${props.$width}px` : props.$width};
  height: ${(props) => props.$height || "200px"};
`;

const chartActionButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "28px",
  padding: 0,
  border: "1px solid rgba(0, 190, 235, 0.7)",
  borderRadius: "4px",
  background: "rgba(0, 0, 0, 0.35)",
  color: "#00bfff",
  cursor: "pointer",
};

const AiSummaryBox = styled(motion.div)`
  /* Під тему: темна — чорний фон, світла — білий; рамка нейтральна */
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 0.92)")};
  border: 2px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)")};
  padding: 14px;
  font-size: 15px;
  line-height: 1.6;
  color: ${(props) => (props.$isDarkMode ? "#efefff" : "#2a2a2a")};
  width: 100%;
  height: 497px;
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  /* Телефон: без власної прокрутки — прокручується вся вкладка */
  @media (max-width: 767px) {
    padding: 0 3px 3px;
    height: auto;
    overflow: visible;
  }
`;

/* Верхня панель «Смарт» */
const SmartTopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)")};
  @media (max-width: 767px) {
    margin-bottom: 10px;
    padding-top: 8px;
  }
`;

/* Кнопки «Скопіювати» / «Повний звіт»; «Повний звіт» лише на планшеті й комп'ютері */
const SmartTopActions = styled.div`
  display: flex;
  gap: 6px;
  @media (max-width: 767px) {
    .smart-full-report {
      display: none;
    }
  }
`;

/* Стрілка розгортання розділу «Смарт» на телефоні */
const RuleChevron = styled(BiChevronDown)`
  margin-left: auto;
  font-size: 18px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.$open ? "180deg" : "0deg")});
`;




const ModePillButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: ${(props) =>
    props.$active
      ? "1.5px solid #00f0ff"
      : props.$isDarkMode
        ? "1px solid rgba(255, 255, 255, 0.2)"
        : "1px solid rgba(0, 0, 0, 0.15)"};
  background: ${(props) =>
    props.$active
      ? props.$isDarkMode
        ? "linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(138, 43, 226, 0.35))"
        : "linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(138, 43, 226, 0.2))"
      : props.$isDarkMode
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.04)"};
  color: ${(props) =>
    props.$active
      ? props.$isDarkMode
        ? "#00f0ff"
        : "#0066cc"
      : props.$isDarkMode
        ? "#bbb"
        : "#555"};
  transition: all 0.2s ease;
  &:hover {
    color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
    border-color: #00f0ff;
    transform: translateY(-1px);
  }
`;

const RuleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 238, 255, 0.12)" : "rgba(0, 180, 220, 0.15)")};
  color: ${(props) => (props.$isDarkMode ? "#00eeff" : "#007a99")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(0, 238, 255, 0.35)" : "rgba(0, 180, 220, 0.35)")};
`;

const RuleSectionCard = styled.div`
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.06)" : "rgba(245, 248, 252, 0.85)"};
  border: 1px solid ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
  border-left: 3.5px solid ${(props) => props.$accent || "#00eeff"};
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 767px) {
    padding: 6px 8px;
    margin-bottom: 0;
  }
`;

const RuleSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 1.25;
    gap: 8px;
    user-select: none;
    /* Іконка розділу більша, текст компактніший */
    & > svg:first-child {
      font-size: 20px !important;
      flex-shrink: 0;
    }
  }
`;

const RuleSectionBody = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => (props.$isDarkMode ? "#ddd" : "#333")};
  white-space: pre-line;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 1.4;
  }
`;



const ViewToggleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)")};
  padding: 3px;
  gap: 2px;
  border: 2px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.95)" : "rgb(255, 253, 253)")};
`;

const ViewToggleButton = styled.button`
  background: ${(props) => (props.$active ? (props.$isDarkMode ? "#8a2be2" : "#7000df") : "transparent")};
  color: ${(props) => (props.$active ? "#ffffff" : props.$isDarkMode ? "#cccccc" : "#f9f3f3")};
  border: none;
  padding: 4px 14px;
  font-size: 15px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;
  box-shadow: ${(props) => (props.$active ? "0 2px 8px rgba(138, 43, 226, 0.4)" : "none")};
`;

const SettingsDropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  background: ${(props) => (props.$isDarkMode ? "#222" : "#fff")};
  border: 1px solid #ffb36c;
  border-radius: 8px 8px 0 0;
  display: grid;
  flex-direction: column;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  animation: ${(props) => (props.$isClosing ? menuSlideUp : menuSlideDown)} 0.35s
    ease forwards;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(522px - 100% - 6px);
grid-template-columns: repeat(2, 1fr);
  /* Перший ряд («Одиниці виміру» + «Прикріпити до ШІ») за висотою вмісту,
     решта ділять простір порівну */
  grid-template-rows: auto;
  grid-auto-rows: 1fr;
  /* Останній пункт, що лишився сам у ряду, розтягується на всю ширину */
  & > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
  @media (max-width: 767px) {
    /* Висота за вмістом, щоб усі пункти було видно; прокрутка лише на дуже низьких екранах */
    height: auto;
    max-height: 90vh;
    grid-template-columns: repeat(2, 1fr);
    overflow-y: auto;
    /* Рядки за висотою вмісту, щоб пояснення не обрізались */
    grid-auto-rows: auto;
  }
`;
/* Шестерня й хрестик лежать одне на одному і плавно змінюють одне одного */
const SettingsIconSwap = styled.span`
  position: relative;
  display: inline-flex;
  font-size: 28px;
  width: 1em;
  height: 1em;

  & > svg {
    position: absolute;
    inset: 0;
    width: 1em;
    height: 1em;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  & > svg:first-child {
    opacity: ${(props) => (props.$open ? 0 : 1)};
    transform: rotate(${(props) => (props.$open ? "-90deg" : "0deg")});
  }
  & > svg:last-child {
    opacity: ${(props) => (props.$open ? 1 : 0)};
    transform: rotate(${(props) => (props.$open ? "0deg" : "90deg")});
  }
`;
const SettingsDropdownItem = styled.button`
 text-align: center;
 padding:8px 5px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  background: transparent;
  font-size: 16px;
 gap: 6px;
  color: ${(props) => (props.$isDarkMode ? "#020202" : "#f1eeee")};
border: 1px solid ${(props) => (props.$isDarkMode ? "#020202" : "#f1eeee")};
  @media (max-width: 767px) {
    padding: 6px 4px;
    gap: 3px;
    font-size: 14px;
    line-height: 1.2;
  }
  @media (min-width: 768px) {
     padding:6px 20px;
      gap: 4px;
  }
svg {
    font-size: 24px;
    flex-shrink: 0;
   @media (max-width: 767px) {
    font-size: 20px;
  }
   @media (min-width: 768px) {
    font-size: 30px;
  }
}
`;
// Фон картки погоди за замовчуванням
export const DEFAULT_CARD_BG =
  DEFAULT_BGS.find((bg) => bg.name === "Туманний ліс")?.src || DEFAULT_BGS[0].src;
// Подія «у картки змінився фон» — щоб бокова панель міст одразу оновила фото
export const CARD_BG_CHANGE_EVENT = "weather-card-bg-change";

/* Дрібне пояснення під назвою пункту налаштувань */
const SettingsItemHint = styled.span`
  font-size: 11px;
  line-height: 1.25;
  font-weight: 400;
  opacity: 0.65;
  @media (max-width: 767px) {
    font-size: 10px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
/* Підказка під назвою головної картки, коли показано Київ замість GPS-локації */
const LocationHintText = styled.p`
  display: flex;
  align-items: center;
  gap: 3px;
  margin: 2px 0 0;
  font-size: 11px;
  color: #fcfcfc;
  opacity: 0.85;
  svg {
    font-size: 13px;
    flex-shrink: 0;
  }
`;
const LocationHint = () => (
  <LocationHintText>
    Натисніть <BiCog aria-label="шестерню" /> для своєї локації
  </LocationHintText>
);
/* Плитки блокового режиму (годинний / 16 днів) */
const BlockStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
  /* Планшет і комп'ютер: плитки по 4 в ряд; неповний останній ряд розтягується на всю ширину */
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    & > :last-child:nth-child(4n + 1) {
      grid-column: 1 / -1;
    }
    & > :nth-last-child(2):nth-child(4n + 1),
    & > :last-child:nth-child(4n + 2) {
      grid-column: span 2;
    }
    & > :last-child:nth-child(4n + 3) {
      grid-column: span 2;
    }
  }
`;
const BlockStatTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-width: 0;
  min-height: 56px;
  padding: 5px 4px;
  box-sizing: border-box;
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  svg {
    font-size: 22px;
    flex-shrink: 0;
    margin-bottom: 2px;
  }
`;
const BlockStatLabel = styled.div`
  font-size: 10px;
  line-height: 1.2;
  opacity: 0.75;
`;
const BlockStatValue = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: anywhere;
  /* 4 плитки в ряд — значення трохи менші, щоб вміщались */
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
// Плагіни Chart.js для основних графіків (стабільний масив — щоб графік не перестворювався)
const CHART_PLUGINS = [valueLabelsPlugin];

// Підказка над графіком: як читати стрілки вітру й підписи біля точок
// Підказка-компас стоїть у рядку легенди між кнопками, тож висоту графіка не забирає
const WindCompassHint = ({ isDarkMode, windUnit, tempSuffix, gusts, showLabels = true }) => {
  const text = isDarkMode ? "#e5f6ff" : "#0f172a";
  const muted = isDarkMode ? "rgba(229, 246, 255, 0.7)" : "rgba(15, 23, 42, 0.7)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        boxSizing: "border-box",
        height: "34px",
        // Стискається першою (текст обрізається трикрапкою), щоб легенда не переносилась
        flex: "0 100 auto",
        minWidth: 0,
        margin: "0 auto",
        padding: "0 8px 0 1px",
        overflow: "hidden",
        borderRadius: "10px",
        background: isDarkMode ? "rgba(8, 12, 20, 0.75)" : "rgba(255, 255, 255, 0.85)",
        border: "1px solid rgba(56, 189, 248, 0.35)",
        fontSize: "11px",
        color: muted,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 54 54" role="img" aria-label="Компас: північ угорі, південь унизу, схід праворуч, захід ліворуч" style={{ flexShrink: 0 }}>
        <circle cx="27" cy="27" r="16" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.2" />
        <path d="M27 13 L30 27 L27 24 L24 27 Z" fill="#ef4444" />
        <path d="M27 41 L30 27 L27 30 L24 27 Z" fill={isDarkMode ? "#cbd5e1" : "#64748b"} />
        <circle cx="27" cy="27" r="1.6" fill={text} />
        <g fontSize="11.5" fontWeight="800" fill={text} textAnchor="middle" fontFamily="system-ui, sans-serif">
          <text x="27" y="10">Пн</text>
          <text x="27" y="53.5">Пд</text>
          <text x="46.5" y="31">Сх</text>
          <text x="7.5" y="31">Зх</text>
        </g>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px", lineHeight: 1.2, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        <span style={{ color: text, fontWeight: 700 }}>Стрілка показує, куди дме вітер</span>
        {showLabels ? (
          <span>
            Під стрілкою — {gusts ? "пориви" : "швидкість"}, {windUnit} · біля точок — температура, {tempSuffix}
          </span>
        ) : (
          <span>Вітер — {windUnit} · цифри біля точок вмикає кнопка «123»</span>
        )}
      </div>
    </div>
  );
};

const WeatherCardComponent = ({
  user,
  card,
  isDarkMode,
  isLocationEnabled,
  isExtremeTemp,
  isExtremeWind,
  isExtremeUV,
  index,
  totalCards,
  handleRefreshCard,
  handleDeleteCard,
  handleRenameCard,
  moveWeatherCard,
  setIsLocationEnabled,
  customHolidayName,
  currentTimeString,
  layout,
}) => {
  const dispatch = useDispatch();
  const { registerRef } = useTutorial?.() || { registerRef: () => {} };
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(card.locationName);

  // Бета «Озвучення прогнозу»
  const isVoiceBeta = useBeta("voiceForecast");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const handleSpeakForecast = async () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    const { engine } = getVoiceSettings();
    let progressToastShown = false;
    try {
      await speak(buildForecastSpeech(card), {
        // Перший запуск Piper качає модель — показуємо хід завантаження
        onProgress: ({ loaded, total }) => {
          if (engine !== "piper" || !total || loaded >= total) return;
          progressToastShown = true;
          toast.loading(`Завантаження голосу… ${Math.round((loaded / total) * 100)}%`, {
            id: "voice-model-download",
          });
        },
      });
    } catch (err) {
      console.error("Forecast speech failed:", err);
      toast.error("Не вдалося озвучити прогноз. Спробуйте інший голос у Параметри → Бета-функції.", {
        id: "voice-error",
      });
    } finally {
      if (progressToastShown) toast.dismiss("voice-model-download");
      setIsSpeaking(false);
    }
  };
  // Картку прибрали з екрана (карусель, видалення) — замовкаємо, але лише якщо говорила саме вона
  const isSpeakingRef = useRef(false);
  isSpeakingRef.current = isSpeaking;
  useEffect(
    () => () => {
      if (isSpeakingRef.current) stopSpeaking();
    },
    [],
  );

  const [selectedDay, setSelectedDay] = useState(null);
  const [copiedForecast, setCopiedForecast] = useState(false);
  const [selectedHourlyDay, setSelectedHourlyDay] = useState(0);
  const [hourlyViewMode, setHourlyViewMode] = useState("charts");
  const [dailyViewMode, setDailyViewMode] = useState("charts");
  const [isNarrowScreen, setIsNarrowScreen] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );
  useEffect(() => {
    const onResize = () => setIsNarrowScreen(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  // Картка на комп'ютері має фіксовану висоту (542px): 350px — щоб під графіком вміщався скролбар
  const defaultChartHeight = isNarrowScreen ? "250px" : "350px";
  // Розділи «Смарт» на телефоні згортаються; спочатку відкритий лише перший
  const [openRuleSections, setOpenRuleSections] = useState(["dayNight"]);
  const isRuleSectionOpen = (key) => !isNarrowScreen || openRuleSections.includes(key);
  const toggleRuleSection = (key) =>
    setOpenRuleSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  const ruleHeaderProps = (key) =>
    isNarrowScreen
      ? {
          role: "button",
          tabIndex: 0,
          "aria-expanded": isRuleSectionOpen(key),
          onClick: () => toggleRuleSection(key),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleRuleSection(key);
            }
          },
          style: { cursor: "pointer" },
        }
      : {};
  const renderRuleChevron = (key) =>
    isNarrowScreen ? <RuleChevron $open={isRuleSectionOpen(key)} /> : null;
  const [units, setUnits] = useState(DEFAULT_UNITS);
  const [unitsGlobal, setUnitsGlobal] = useState(true); // одиниці спільні для всіх карток
  const unit = units.temp; // "C", "K", "F"
  const fmt = makeFormatters(units);
  const [isUnitsModalOpen, setIsUnitsModalOpen] = useState(false);

  // currentTimeString змінюється щосекунди (годинник), тому для прогнозу
  // беремо "заморожений" час і оновлюємо його раз на 33 хв.
  const [forecastTimeString, setForecastTimeString] = useState(currentTimeString);
  const latestTimeStringRef = useRef(currentTimeString);
  latestTimeStringRef.current = currentTimeString;
  useEffect(() => {
    const timer = setInterval(
      () => setForecastTimeString(latestTimeStringRef.current),
      33 * 60 * 1000
    );
    return () => clearInterval(timer);
  }, []);

  const ruleForecast = useMemo(() => {
    return generateRuleBasedForecast(card, { unit, currentTimeString: forecastTimeString });
  }, [card, unit, forecastTimeString]);

  // Минулий день (вчора) у 16-денному прогнозі показується лише з чекбоксом
  const [showPastDay, setShowPastDay] = useState(false);
  const now = new Date();
  const todayIso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const isPastDay = (d) => Boolean(d?.fullDate) && d.fullDate < todayIso;
  const dailyList = useMemo(() => {
    const all = card.daily16 || card.daily || [];
    return showPastDay ? all : all.filter((d) => !(d?.fullDate && d.fullDate < todayIso));
  }, [card.daily16, card.daily, showPastDay, todayIso]);

  // Астрономія для блоків 16-денного прогнозу (рахується лише при зміні даних картки)
  const dailyAstro = useMemo(
    () =>
      dailyList.map((d) => ({
        twilight: getTwilightData(d.fullDate, card.lat, card.lon),
        moon: getMoonDetails(d.fullDate, card.lat, card.lon),
        dayDiff: getDayLengthDiff(d.fullDate, card.lat, card.lon),
      })),
    [dailyList, card.lat, card.lon],
  );

  const [cityImage, setCityImage] = useState(card.cityImage || "");
  const [bgMode, setBgMode] = useState(DEFAULT_CARD_BG);
  const isCitySidebarHidden = usePrefValue(CITY_SIDEBAR_HIDDEN_KEY, "false") === "true";
  const carouselArrowsOn = usePrefValue(CAROUSEL_ARROWS_HIDDEN_KEY, "false") !== "true";
  const carouselNumbersOn = usePrefValue(CAROUSEL_NUMBERS_HIDDEN_KEY, "false") !== "true";
  const [isBgModalOpen, setIsBgModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClosing, setIsDropdownClosing] = useState(false);
  const [hasGeminiKey, setHasGeminiKey] = useState(false);

  useEffect(() => {
    loadCardUnits(card.id).then(({ useGlobal, units: loaded }) => {
      setUnitsGlobal(useGlobal);
      setUnits(loaded);
    });
    const handleUnitsChange = (e) => {
      const detail = e.detail;
      if (!isUnitsEventForCard(detail, card.id)) return;
      const next = { ...DEFAULT_UNITS, ...detail.units };
      setUnits(next);
      setUnitsGlobal(detail.useGlobal);
      // Вимкнули "для всіх карток": кожна картка зберігає поточні одиниці як власні
      if (!detail.useGlobal && detail.cardId === undefined) {
        localforage.setItem(cardUnitsKey(card.id), next);
      }
    };
    window.addEventListener("unitsChanged", handleUnitsChange);
    return () => window.removeEventListener("unitsChanged", handleUnitsChange);
  }, [card.id]);

  const changeUnits = (next) => {
    if (unitsGlobal) {
      localforage.setItem(UNITS_GLOBAL_KEY, next);
      window.dispatchEvent(new CustomEvent("unitsChanged", { detail: { units: next, useGlobal: true } }));
      return;
    }
    localforage.setItem(cardUnitsKey(card.id), next);
    window.dispatchEvent(
      new CustomEvent("unitsChanged", { detail: { units: next, useGlobal: false, cardId: card.id } }),
    );
  };

  // Увімкнення: одиниці цієї картки стають спільними для всіх
  const toggleUnitsGlobal = (enabled) => {
    localforage.setItem(UNITS_USE_GLOBAL_KEY, enabled);
    if (enabled) localforage.setItem(UNITS_GLOBAL_KEY, units);
    window.dispatchEvent(new CustomEvent("unitsChanged", { detail: { units, useGlobal: enabled } }));
  };

  const formatTemp = (tempVal) => {
    if (tempVal === null || tempVal === undefined || tempVal === "—") return "—";
    if (isNaN(parseFloat(tempVal))) return tempVal;
    return fmt.temp(tempVal);
  };

  useEffect(() => {
    localforage.getItem("gemini_api_key").then((val) => setHasGeminiKey(!!val));
    const onKeyChange = (e) => setHasGeminiKey(!!e.detail);
    window.addEventListener("geminiKeyChanged", onKeyChange);
    return () => window.removeEventListener("geminiKeyChanged", onKeyChange);
  }, []);


  const handleCloseDropdown = () => {
    setIsDropdownClosing(true);
    setTimeout(() => {
      setIsDropdownOpen(false);
      setIsDropdownClosing(false);
    }, 350);
  };
  const [isCustomDatesModalOpen, setIsCustomDatesModalOpen] = useState(false);
  const [newCustomDate, setNewCustomDate] = useState({ date: "", time: "", reason: "", duration: 1, durationUnit: "hours", targetCard: "all" });
  const [isCardSettingsOpen, setIsCardSettingsOpen] = useState(false);
  // Сповіщення про небезпечну погоду саме для цієї картки (загальний перемикач — у Налаштуваннях)
  const [cardAlertsOn, setCardAlertsOn] = useState(() => isCardWeatherAlertsOn(card.id));
  const toggleCardAlerts = () => {
    const next = !cardAlertsOn;
    setCardAlertsOn(next);
    setCardWeatherAlerts(card.id, next);
  };
  const [activeTab, setActiveTab] = useState("current");
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    // Only main card responds to tutorial
    if (!card.isMain) return;
    const openSettings = () => setIsCardSettingsOpen(true);
    const closeSettings = () => setIsCardSettingsOpen(false);
    window.addEventListener('domino-open-weather-settings', openSettings);
    window.addEventListener('domino-close-weather-settings', closeSettings);
    return () => {
      window.removeEventListener('domino-open-weather-settings', openSettings);
      window.removeEventListener('domino-close-weather-settings', closeSettings);
    };
  }, [card.isMain]);


  const [useGlobalLayout, setUseGlobalLayout] = useState(true);
  const [localLayout, setLocalLayout] = useState([
    { key: "current", visible: true },
    { key: "ai", visible: true },
    { key: "hourly", visible: true },
    { key: "daily", visible: true },
  ]);
  const hourlyChartPanelRef = useRef(null);
  const hourlyChartInstanceRef = useRef(null);
  const dailyChartRef = useRef(null);
  const dailyChartPanelRef = useRef(null);
  const dailyChartInstanceRef = useRef(null);
  const [fullscreenChart, setFullscreenChart] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  
  // Легенда та видимість датасетів. Вимкнена лінія стає напівпрозорою,
  // а рівень прозорості береться зі стилю лінії (dimOpacity)
  const [hiddenSeries, setHiddenSeries] = useState({
    day: false,
    night: false,
    wind: false,
  });
  const [legendFontSize, setLegendFontSize] = useState(12);
  const [lineStyles, setLineStyles] = useState(DEFAULT_LINE_STYLES); // стиль кожної лінії окремо
  const [globalLineStyles, setGlobalLineStyles] = useState(false); // спільні стилі для всіх карток
  const [styleModalChart, setStyleModalChart] = useState(null); // "hourly" | "daily" | null
  const [showDailyTrend, setShowDailyTrend] = useState(false);
  const [rightMetric, setRightMetric] = useState("wind"); // "wind" | "uv" | "precip" | "clouds" | "visibility"
  const RIGHT_METRICS = {
    wind: { label: "Вітер", axis: fmt.windAxis, color: "#0099ff", rgb: "0, 153, 255", icon: <BiWind /> },
    uv: { label: "УФ-індекс", axis: "УФ-індекс", color: "#a855f7", rgb: "168, 85, 247", icon: <FaSun /> },
    precip: { label: "Опади", axis: "Опади (%)", color: "#14b8a6", rgb: "20, 184, 166", icon: <FaCloudRain /> },
    clouds: { label: "Хмарність", axis: "Хмарність (%)", color: "#9ca3af", rgb: "156, 163, 175", icon: <FaCloud /> },
    visibility: {
      label: "Видимість",
      axis: `Видимість (${visibilityLabel(units.distance)})`,
      color: "#7dd3fc",
      rgb: "125, 211, 252",
      icon: <BiLowVision />,
    },
  };
  const rightMeta = RIGHT_METRICS[rightMetric];
  const isPercentMetric = rightMetric === "precip" || rightMetric === "clouds";
  // Значення правої осі (крім вітру) для години (daily=false) або дня (daily=true)
  const rightValue = (item, daily) => {
    switch (rightMetric) {
      case "uv":
        return parseFloat(item.uv_index) || 0;
      case "precip":
        return parseFloat(daily ? item.precipitation_probability_max : item.precipitation_probability) || 0;
      case "clouds": {
        const v = daily ? item.cloud_cover_mean : item.cloud_cover;
        return v == null ? null : v;
      }
      case "visibility": {
        const m = daily ? item.visibility_min : item.visibility;
        return m == null ? null : Math.round(convertVisibility(m / 1000, units.distance) * 10) / 10;
      }
      default:
        return 0;
    }
  };
  // Підказка графіка для правої осі (крім вітру)
  const rightTooltip = (value) => {
    if (rightMetric === "uv") return `УФ-індекс: ${(value || 0).toFixed(1)}`;
    if (rightMetric === "precip") return `Ймовірність опадів: ${Math.round(value || 0)}%`;
    if (rightMetric === "clouds") return `Хмарність: ${Math.round(value || 0)}%`;
    if (rightMetric === "visibility") return `Видимість: ${value ?? "—"} ${visibilityLabel(units.distance)}`;
    return "";
  };
  // Маленькі підписи біля точок правої осі (одиниці — як на осі)
  const rightLabelText = (value) => {
    if (value === null || value === undefined || !Number.isFinite(Number(value))) return "";
    if (rightMetric === "uv") return `${Math.round(value * 10) / 10}`;
    if (isPercentMetric) return `${Math.round(value)}%`;
    return `${value}`;
  };
  // Підпис під стрілкою вітру — у вибраних одиницях (м/с, км/год…)
  const windLabelText = (ms) =>
    ms === null || ms === undefined || !Number.isFinite(Number(ms)) ? "" : String(fmt.windValue(Number(ms)));

  const toggleDatasetVisibility = (datasetKey) => {
    setHiddenSeries((prev) => ({ ...prev, [datasetKey]: !prev[datasetKey] }));
  };

  // Ключ легенди → лінія у стилях графіка
  const LEGEND_TO_LINE = {
    hourly: { day: "temp", wind: "right" },
    daily: { day: "day", night: "night", wind: "right" },
  };
  const seriesOpacity = (chartKey) =>
    Object.fromEntries(
      Object.entries(hiddenSeries).map(([key, hidden]) => {
        const lineStyle = lineStyles[chartKey][LEGEND_TO_LINE[chartKey][key]];
        return [key, hidden ? lineStyle?.dimOpacity ?? DEFAULT_DIM : 1];
      }),
    );
  const hourlyOpacity = seriesOpacity("hourly");
  const dailyOpacity = seriesOpacity("daily");

  const handleLegendSizeChange = async (newSize) => {
    const finalSize = Math.max(8, Math.min(20, newSize));
    setLegendFontSize(finalSize);
    await localforage.setItem(`legendFontSize_${card.id}`, finalSize);
  };

  const saveLineStyles = (next) => {
    if (globalLineStyles) {
      // Решта карток підхопить зміни через подію (як і одиниці виміру)
      localforage.setItem("chartLineStyles_global", next);
      window.dispatchEvent(new CustomEvent("chartLineStylesChanged", { detail: { useGlobal: true, styles: next } }));
      return;
    }
    setLineStyles(next);
    localforage.setItem(`chartLineStyles_${card.id}`, next);
  };

  // Увімкнення: стилі цієї картки стають спільними для всіх.
  // Вимкнення: кожна картка зберігає поточні спільні стилі як власні.
  const toggleGlobalLineStyles = (enabled) => {
    localforage.setItem("chartLineStyles_useGlobal", enabled);
    if (enabled) localforage.setItem("chartLineStyles_global", lineStyles);
    window.dispatchEvent(new CustomEvent("chartLineStylesChanged", { detail: { useGlobal: enabled, styles: lineStyles } }));
  };

  const changeLineStyle = (chartKey, lineKey, patch) => {
    saveLineStyles({
      ...lineStyles,
      [chartKey]: { ...lineStyles[chartKey], [lineKey]: { ...lineStyles[chartKey][lineKey], ...patch } },
    });
  };

  // Застосувати до всіх ліній графіка (форму — лише звичайним лініям, не трендам)
  const applyLineStyleToAll = (chartKey, patch) => {
    const lines = Object.fromEntries(
      Object.entries(lineStyles[chartKey]).map(([k, s]) => [
        k,
        { ...s, ...Object.fromEntries(Object.entries(patch).filter(([field]) => field in s)) },
      ]),
    );
    saveLineStyles({ ...lineStyles, [chartKey]: lines });
  };

  const resetLineStyles = (chartKey) => {
    saveLineStyles({ ...lineStyles, [chartKey]: DEFAULT_LINE_STYLES[chartKey] });
  };

  const toggleDailyTrend = () => {
    const next = !showDailyTrend;
    setShowDailyTrend(next);
    localforage.setItem(`dailyTrend_${card.id}`, next);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenChart(null);
        return;
      }

      requestAnimationFrame(() => {
        const chartInstance =
          fullscreenChart === "hourly"
            ? hourlyChartInstanceRef.current
            : dailyChartInstanceRef.current;
        chartInstance?.resize();
        chartInstance?.update("none");
      });
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [fullscreenChart]);

  useEffect(() => {
    if (!fullscreenChart) return undefined;
    const timer = setTimeout(() => {
      const chartInstance =
        fullscreenChart === "hourly"
          ? hourlyChartInstanceRef.current
          : dailyChartInstanceRef.current;
      chartInstance?.resize();
      chartInstance?.update("none");
    }, 100);
    return () => clearTimeout(timer);
  }, [fullscreenChart]);

  const toggleChartFullscreen = async (chartKey, panelRef) => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (!panelRef.current?.requestFullscreen) return;
    setFullscreenChart(chartKey);
    await panelRef.current.requestFullscreen();
  };

  const createChartImage = async (panelRef, targetWidth = undefined, targetHeight = undefined) => {
    if (!panelRef.current) return null;
    const { default: html2canvas } = await import("html2canvas");
    return html2canvas(panelRef.current, {
      backgroundColor: isDarkMode ? "#000000" : "#f5f5f5",
      scale: 2,
      useCORS: true,
      allowTaint: true,
      windowWidth: targetWidth || window.innerWidth,
      windowHeight: targetHeight || window.innerHeight,
    });
  };

  const captureFullChart = async (chartKey, panelRef) => {
    setIsCapturing(true);
    const wasChartFullscreen = fullscreenChart === chartKey;
    const el = panelRef.current;
    if (!el) {
      setIsCapturing(false);
      return null;
    }

    let clone = null;
    let placeholder = null;

    if (!wasChartFullscreen) {
      // Створюємо візуальний клон графіка, щоб користувач не помітив жодних змін (блимання або зникнення)
      const rect = el.getBoundingClientRect();
      clone = el.cloneNode(true);
      const originalCanvases = el.querySelectorAll('canvas');
      const clonedCanvases = clone.querySelectorAll('canvas');
      originalCanvases.forEach((canvas, i) => {
        if (clonedCanvases[i]) {
          clonedCanvases[i].getContext('2d').drawImage(canvas, 0, 0);
        }
      });
      
      clone.style.position = "fixed";
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.margin = "0";
      clone.style.zIndex = "99998";
      clone.style.pointerEvents = "none";
      document.body.appendChild(clone);

      // Створюємо "пустишку", щоб картка не схлопнулась по висоті
      placeholder = document.createElement("div");
      placeholder.style.width = `${rect.width}px`;
      placeholder.style.height = `${rect.height}px`;
      el.parentElement.insertBefore(placeholder, el);
      
      // Вмикаємо повноекранний режим під капотом
      setFullscreenChart(chartKey);
      await new Promise((r) => setTimeout(r, 100)); // чекаємо рендер React
    }

    const origCss = el.style.cssText;
    const targetWidth = Math.max(el.scrollWidth, window.innerWidth, chartKey === "hourly" ? hourlyChartWidth : 900);
    const targetHeight = Math.max(el.scrollHeight, window.innerHeight, 600);
    
    if (!wasChartFullscreen) {
      el.style.cssText += `
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        width: ${targetWidth}px !important;
        height: ${targetHeight}px !important;
        min-height: ${targetHeight}px !important;
        max-width: none !important;
        max-height: none !important;
        z-index: -9999 !important;
        background: ${isDarkMode ? "#000" : "#f5f5f5"} !important;
      `;
    } else {
      // Якщо вже у повноекранному - просто фіксуємо розміри для ідеального знімку
      el.style.cssText += `
        width: ${targetWidth}px !important;
        height: ${targetHeight}px !important;
        min-height: ${targetHeight}px !important;
        max-width: none !important;
        max-height: none !important;
      `;
    }
    
    await new Promise((r) => setTimeout(r, 100));

    let canvas;
    try {
      canvas = await createChartImage(panelRef, targetWidth, targetHeight);
    } finally {
      el.style.cssText = origCss;

      if (!wasChartFullscreen) {
        setFullscreenChart(null);
      }

      setIsCapturing(false);

      // Чекаємо, поки React поверне оригінальний вигляд, і тільки потім прибираємо клон
      if (clone) {
        await new Promise((r) => setTimeout(r, 100));
        clone.remove();
        if (placeholder) placeholder.remove();
      }
    }

    return canvas;
  };

  const downloadChartScreenshot = async (chartKey, panelRef) => {
    const canvas = await captureFullChart(chartKey, panelRef);
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${card.locationName}-${chartKey}-chart.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const renderChartActions = (chartKey, panelRef) => (
    <div
      style={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <Tooltip content="Стиль ліній графіка" isDarkMode={isDarkMode}>
      <button
        type="button"
        onClick={() => setStyleModalChart(chartKey)}
        aria-label="Стиль ліній графіка"
        style={chartActionButtonStyle}
      >
        <BiPalette size={16} />
      </button>
      </Tooltip>
      {(() => {
        // Швидко ввімкнути/вимкнути цифри біля точок для всіх ліній цього графіка
        const labelsOn = Object.values(lineStyles[chartKey]).some((s) => s.labels === true);
        return (
          <Tooltip content={labelsOn ? "Сховати цифри біля точок" : "Показати цифри біля точок"} isDarkMode={isDarkMode}>
            <button
              type="button"
              onClick={() => applyLineStyleToAll(chartKey, { labels: !labelsOn })}
              aria-label={labelsOn ? "Сховати цифри біля точок" : "Показати цифри біля точок"}
              aria-pressed={labelsOn}
              style={{
                ...chartActionButtonStyle,
                width: "auto",
                padding: "0 6px",
                fontSize: "11px",
                fontWeight: "bold",
                textDecoration: labelsOn ? "none" : "line-through",
                background: labelsOn ? "rgba(0, 190, 235, 0.25)" : chartActionButtonStyle.background,
              }}
            >
              123
            </button>
          </Tooltip>
        );
      })()}
      {chartKey === "daily" && (
        <Tooltip content={showDailyTrend ? `Сховати лінію тренду. ${dailyTrendText}` : "Показати лінію тренду температури"} isDarkMode={isDarkMode}>
        <button
          type="button"
          onClick={toggleDailyTrend}
          aria-label={showDailyTrend ? "Сховати лінію тренду" : "Показати лінію тренду"}
          aria-pressed={showDailyTrend}
          style={{
            ...chartActionButtonStyle,
            width: "auto",
            gap: "4px",
            padding: "0 6px",
            fontSize: "11px",
            fontWeight: "bold",
            background: showDailyTrend ? "rgba(0, 190, 235, 0.25)" : chartActionButtonStyle.background,
          }}
        >
          <BiTrendingUp size={16} />
          {showDailyTrend && dailyTrendBadge}
        </button>
        </Tooltip>
      )}
      <Tooltip content={fullscreenChart === chartKey ? "Вийти з повного екрана" : "На весь екран"} isDarkMode={isDarkMode}>
      <button
        type="button"
        onClick={() => toggleChartFullscreen(chartKey, panelRef)}
        aria-label={fullscreenChart === chartKey ? "Вийти з повного екрана" : "На весь екран"}
        style={chartActionButtonStyle}
      >
        <BiFullscreen size={16} />
      </button>
      </Tooltip>
      <Tooltip content="Завантажити скріншот повноекранного графіка" isDarkMode={isDarkMode}>
      <button
        type="button"
        onClick={() => downloadChartScreenshot(chartKey, panelRef)}
        aria-label="Завантажити скріншот повноекранного графіка"
        style={chartActionButtonStyle}
      >
        <BiDownload size={16} />
      </button>
      </Tooltip>
    </div>
  );

  const renderChartLegend = (items) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        fontSize: `${Math.max(10, legendFontSize - 1)}px`,
        alignItems: "center",
      }}
    >
      {items.map((item) => item.key === "wind" ? (
        <span
          key={item.key}
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: `1px solid ${rightMeta.color}`,
            borderRadius: "4px",
            background: isDarkMode ? "#222" : "#fff",
            color: rightMeta.color,
            opacity: hiddenSeries.wind ? 0.45 : 1,
            fontWeight: "bold",
          }}
        >
          <Tooltip content={`Натисніть, щоб ${!hiddenSeries.wind ? "сховати" : "показати"} шкалу графіка`} isDarkMode={isDarkMode}>
            <button
              type="button"
              onClick={() => toggleDatasetVisibility("wind")}
              aria-label="Сховати або показати праву шкалу"
              style={{ display: "inline-flex", alignItems: "center", padding: "3px 4px 3px 6px", border: "none", background: "transparent", color: "inherit", cursor: "pointer", fontSize: "14px" }}
            >
              {rightMeta.icon}
            </button>
          </Tooltip>
          <select
            value={rightMetric}
            onChange={(e) => setRightMetric(e.target.value)}
            aria-label="Показник правої осі графіка"
            style={{ padding: "3px 2px", border: "none", background: "transparent", color: "inherit", fontSize: "inherit", fontWeight: "bold", cursor: "pointer", outline: "none" }}
          >
            {Object.entries(RIGHT_METRICS).map(([k, m]) => (
              <option key={k} value={k} style={{ color: "#000" }}>{m.label}</option>
            ))}
          </select>
        </span>
      ) : (
       <Tooltip key={item.key} content={`Натисніть, щоб ${!hiddenSeries[item.key] ? "сховати" : "показати"} шкалу графіка ${item.label.toLowerCase()}`} isDarkMode={isDarkMode}>
        <button
          type="button"
          onClick={() => toggleDatasetVisibility(item.key)}
          aria-label={`Натисніть, щоб ${!hiddenSeries[item.key] ? "сховати" : "показати"} шкалу графіка ${item.label.toLowerCase()}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            padding: "3px 6px",
            border: `1px solid ${item.color}`,
            borderRadius: "4px",
            background: isDarkMode ? "#222" : "#fff",
            color: item.color,
            cursor: "pointer",
            opacity: hiddenSeries[item.key] ? 0.45 : 1,
            fontSize: "inherit",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: item.color,
            }}
          />
          {item.icon && <span style={{ display: "inline-flex", alignItems: "center", fontSize: "14px" }}>{item.icon}</span>}
          {item.label}
        </button>
        </Tooltip>
      ))}
    </div>
  );

  // Легенда + кнопки дій — один рядок
  // middle — необов'язковий вміст між легендою й кнопками (підказка-компас)
  const renderChartHeader = (chartKey, panelRef, items, middle = null) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        flexWrap: "nowrap",
        marginBottom: "4px",
      }}
    >
      {renderChartLegend(items)}
      {middle}
      {renderChartActions(chartKey, panelRef)}
    </div>
  );

  // Підказка-компас у рядку легенди (лише коли на правій осі вітер)
  const renderWindHint = (chartKey) =>
    rightMetric === "wind" ? (
      <WindCompassHint
        isDarkMode={isDarkMode}
        windUnit={windLabel(units.wind)}
        tempSuffix={tempSuffix}
        gusts={lineStyles[chartKey].right.windLabel === "gusts"}
        showLabels={lineStyles[chartKey].right.labels}
      />
    ) : null;

  useEffect(() => {
    if (dailyChartRef.current) {
      const timer = setTimeout(() => {
        if (dailyChartRef.current) {
          // Scroll to index 2 (today)
          dailyChartRef.current.scrollLeft = (1300 / 18) * 2;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [card.id, useGlobalLayout, localLayout]);

  useEffect(() => {
    const loadCardLayoutSettings = async () => {
      const savedUseGlobal = await localforage.getItem(
        `useGlobalLayout_${card.id}`,
      );
      if (savedUseGlobal !== null) setUseGlobalLayout(savedUseGlobal);
      const savedLayout = await localforage.getItem(`localLayout_${card.id}`);
      if (savedLayout) setLocalLayout(savedLayout);
    };
    loadCardLayoutSettings();
  }, [card.id]);
  useEffect(() => {
    const loadBgMode = async () => {
      const savedBg = await localforage.getItem(`bgMode_${card.id}`);
      // Старе значення "wiki" (фото з Вікіпедії) більше не підтримується
      if (savedBg && savedBg !== "wiki") {
        setBgMode(savedBg);
      }
    };
    loadBgMode();
  }, [card.id]);

  useEffect(() => {
    const loadLegendSize = async () => {
      const savedSize = await localforage.getItem(`legendFontSize_${card.id}`);
      if (savedSize) {
        setLegendFontSize(savedSize);
      }
    };
    loadLegendSize();
  }, [card.id]);

  useEffect(() => {
    const loadChartStyle = async () => {
      const useGlobal = (await localforage.getItem("chartLineStyles_useGlobal")) === true;
      const savedStyles = await localforage.getItem(
        useGlobal ? "chartLineStyles_global" : `chartLineStyles_${card.id}`,
      );
      setGlobalLineStyles(useGlobal);
      setLineStyles(mergeLineStyles(savedStyles));
      const savedTrend = await localforage.getItem(`dailyTrend_${card.id}`);
      if (savedTrend !== null) setShowDailyTrend(savedTrend);
    };
    loadChartStyle();

    const handleLineStylesChange = (e) => {
      const { useGlobal, styles } = e.detail || {};
      const merged = mergeLineStyles(styles);
      setGlobalLineStyles(useGlobal);
      setLineStyles(merged);
      if (!useGlobal) localforage.setItem(`chartLineStyles_${card.id}`, merged);
    };
    window.addEventListener("chartLineStylesChanged", handleLineStylesChange);
    return () => window.removeEventListener("chartLineStylesChanged", handleLineStylesChange);
  }, [card.id]);

  const handleChangeBackground = (newMode) => {
    setBgMode(newMode);
    localforage.setItem(`bgMode_${card.id}`, newMode);
    window.dispatchEvent(
      new CustomEvent(CARD_BG_CHANGE_EVENT, { detail: { id: card.id, src: newMode } }),
    );
    setIsBgModalOpen(false);
  };

  const handleGpsToggle = () => {
    const nextEnabled = !isLocationEnabled;
    setIsLocationEnabled(nextEnabled);
    handleCloseDropdown();
    // App.jsx має useEffect(() => { getInitialLocation(); }, [getInitialLocation])
    // який автоматично спрацює після зміни isLocationEnabled
    // (getInitialLocation перестворюється через useCallback з [isLocationEnabled])
  };

  useEffect(() => {
    setCityImage(bgMode);
  }, [bgMode]);

  useEffect(() => {
    return () => {};
  }, []);



  const [isEditingReason, setIsEditingReason] = useState(false);
  const [tempReason, setTempReason] = useState("");

  useEffect(() => {
    setIsEditingReason(false);
  }, [selectedDay]);

  // item — погодинний/денний запис (потрібні weather_code та is_day)
  const createIconCanvas = (item, size = 28, dangerColor = null, opacity = 1) => {
    // Однакові іконки не малюємо заново: той самий canvas — і графік не бачить змін
    const cacheKey = `wicon|${getChartIconKey(item)}|${size}|${dangerColor}|${opacity}`;
    const cached = chartCanvasCache.get(cacheKey);
    if (cached) return cached;
    const canvas = createChartWeatherIcon(item, size, dangerColor, opacity);
    rememberChartCanvas(cacheKey, canvas);
    return canvas;
  };
// Стрілка вітру (react-icons, векторно): показує, КУДИ дме вітер — як ⬇ у блоках прогнозу
const createDirectionArrowCanvas = (degrees, size = 22, opacity = 1, strong = false) => {
  // Кут з кроком 5° — точно, але варіантів небагато, тож кешуємо
  const snapped = (Math.round(((((Number(degrees) || 0) % 360) + 360) % 360) / 5) * 5) % 360;
  const cacheKey = `arrow2|${snapped}|${size}|${opacity}|${strong ? 1 : 0}`;
  const cached = chartCanvasCache.get(cacheKey);
  if (cached) return cached;
  const canvas = createChartWindArrow(snapped, size, opacity, strong);
  rememberChartCanvas(cacheKey, canvas);
  return canvas;
};

// Короткий підпис значення біля точки графіка
const formatChartTempLabel = (value, suffix) => {
  if (value === null || value === undefined || !Number.isFinite(Number(value))) return "";
  return suffix === "K" ? `${value}K` : suffix === "°F" ? `${value}°F` : `${value}°`;
};
  const getWindDirectionLabel = (degrees) => {
    const normalizedDegrees = ((Number(degrees) || 0) % 360 + 360) % 360;
    const snappedDegrees = Math.round(normalizedDegrees / 45) * 45;
    return getWindDirectionText(snappedDegrees % 360);
  };

  const handleRenameSubmit = () => {
    if (newName.trim()) {
      handleRenameCard(card.id, newName);
      setIsEditing(false);
    }
  };

  const hourlyDayGroups = getHourlyForecastDetailGroups(card.hourly || []);
  const visibleHourly = hourlyDayGroups[selectedHourlyDay]?.items || [];
  const hourlyChartAvailable = hourlyDayGroups[selectedHourlyDay]?.chartAvailable !== false;
  // Графіки на телефонах заблоковані — показуємо блоки
  const canShowHourlyChart = hourlyChartAvailable && !isNarrowScreen;
  const effectiveHourlyViewMode =
    hourlyViewMode === "charts" && !canShowHourlyChart ? "blocks" : hourlyViewMode;
  const effectiveDailyViewMode =
    dailyViewMode === "charts" && isNarrowScreen ? "blocks" : dailyViewMode;
  const chartBlockedTitle = "Графіки недоступні на телефоні";
  const hourlyChartWidth = Math.max(873, (visibleHourly?.length || 24) * 35);
  const tempSuffix = unit === "F" ? "°F" : unit === "K" ? "K" : "°C";
  const toDisplayTemp = (c) => {
    if (!Number.isFinite(c)) return c;
    if (unit === "F") return Math.round(((c * 9) / 5 + 32) * 10) / 10;
    if (unit === "K") return Math.round((c + 273.15) * 10) / 10;
    return c;
  };
  const hourlyChartData = {
    labels: visibleHourly?.map((h) => h.time) || [],
    datasets: [
      {
        label: `Температура (${tempSuffix})`,
        data: visibleHourly?.map((h) => toDisplayTemp(h.tempNum ?? 0)) || [],
        backgroundColor: `rgba(255, 179, 108, ${hourlyOpacity.day * 0.2})`,
        borderColor: `rgba(255, 179, 108, ${hourlyOpacity.day})`,
        hidden: hourlyOpacity.day === 0,
        pointStyle: visibleHourly?.map((h) => {
          let danger = null;
          if ((h.tempNum ?? 0) > 30) danger = "#ff0000";
          else if ((h.tempNum ?? 0) < -30) danger = "#004cff";
          else if ((h.windNum ?? 0) > 10) danger = "#ff6a00";
          return createIconCanvas(h, 26, danger, hourlyOpacity.day);
        }),
        valueLabels: lineStyles.hourly.temp.labels
          ? visibleHourly?.map((h) => formatChartTempLabel(toDisplayTemp(h.tempNum ?? 0), tempSuffix))
          : null,
        valueLabelOffset: -15,
        valueLabelColor: "#ffd2a6",
        valueLabelOpacity: hourlyOpacity.day,
        ...lineStyleProps(lineStyles.hourly.temp, { tension: 0.4, pointRadius: 12, fill: true }),
        yAxisID: "y",
      },
      rightMetric === "wind"
        ? {
            label: fmt.windAxis,
            data: visibleHourly?.map((h) => fmt.windValue(h.windNum ?? 0)) || [],
            borderColor: `rgba(0, 190, 235, ${hourlyOpacity.wind})`,
            backgroundColor: `rgba(0, 190, 235, ${hourlyOpacity.wind * 0.1})`,
            hidden: hourlyOpacity.wind === 0,
            pointBackgroundColor:
              visibleHourly?.map((h) =>
                (h.windNum ?? 0) > 10 ? "#ff6a00" : `rgba(0, 190, 235, ${hourlyOpacity.wind})`,
              ) || [],
            pointStyle: visibleHourly?.map((h) =>
              createDirectionArrowCanvas(h.wind_direction_10m, 22, hourlyOpacity.wind, (h.windNum ?? 0) > 10),
            ) || [],
            valueLabels: lineStyles.hourly.right.labels
              ? visibleHourly?.map((h) =>
                  windLabelText(lineStyles.hourly.right.windLabel === "gusts" ? h.wind_gusts_10m : h.windNum ?? 0),
                )
              : null,
            valueLabelOffset: 13,
            valueLabelColor: "#9be3ff",
            valueLabelOpacity: hourlyOpacity.wind,
            ...lineStyleProps(lineStyles.hourly.right, { tension: 0.4, pointRadius: 11, fill: false }),
            yAxisID: "y1",
          }
        : {
            label: rightMeta.axis,
            data:
              visibleHourly?.map((h) => rightValue(h, false)) || [],
            borderColor: `rgba(${rightMeta.rgb}, ${hourlyOpacity.wind})`,
            backgroundColor: `rgba(${rightMeta.rgb}, ${hourlyOpacity.wind * 0.15})`,
            hidden: hourlyOpacity.wind === 0,
            pointStyle: "circle",
            pointBackgroundColor: `rgba(${rightMeta.rgb}, ${hourlyOpacity.wind})`,
            valueLabels: lineStyles.hourly.right.labels
              ? visibleHourly?.map((h) => rightLabelText(rightValue(h, false)))
              : null,
            valueLabelOffset: 8,
            valueLabelColor: rightMeta.color,
            valueLabelOpacity: hourlyOpacity.wind,
            ...lineStyleProps(lineStyles.hourly.right, { tension: 0.4, pointRadius: 4, fill: rightMetric === "precip" }),
            yAxisID: "y1",
          },
    ],
  };

  const getWeatherDescription = (code) => {
    if (code === 0) return "Ясно";
    if (code >= 1 && code <= 3) return "Частково хмарно";
    if (code >= 45 && code <= 48) return "Туман";
    if (code >= 51 && code <= 55) return "Дрібна сяка";
    if (code >= 61 && code <= 65) return "Дощ";
    if (code >= 71 && code <= 77) return "Сніг";
    if (code >= 80 && code <= 82) return "Шквальний дощ";
    if (code >= 95 && code <= 99) return "Гроза";
    return "Хмарно";
  };
// Реєстр свят 2027
const HOLIDAYS_2027 = {
  // Січень
  "01.01": "Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)",
  "06.01": "Богоявлення / Водохреще (новий стиль)",
  "07.01": "Різдво Христове (старий стиль)",
  "12.01": "1 серія 'Реальної містики'. Ціла епоха розкриття містифікацій у 12 сезонів!",
  "14.01": "Василя / Обрізання Господнє (старий стиль)",
  "19.01": "Богоявлення / Водохреще (старий стиль)",

  // Лютий
  "02.02": "Стрітення Господнє (новий стиль)",
  "14.02": "З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!",
  "15.02": "Стрітення Господнє (старий стиль)",

  // Березень
  "08.03": "Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)",
  "20.03": "Весняне рівнодення. Сонце встало на сході, а індики вже на заході :)",
  "25.03": "Благовіщення Пресвятої Богородиці (новий стиль)",

  // Квітень
  "01.04": "Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)",
  "07.04": "Благовіщення Пресвятої Богородиці (старий стиль)",
  "23.04": "День святого Юрія / Георгія (новий стиль)",

  // Травень
  "01.05": "День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!",
  "02.05": "З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)",
  "06.05": "День святого Юрія / Георгія (старий стиль)",
  "08.05": "День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм. Один не багатьох випадків коли я кажу про політику добре...",
  "09.05": "День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.",
  "27.05": "Випуск Dragon Village 3. Скачаєш? :)",
  "29.05": "Особисте свято у цей день... Пробач, я теж маю секрети :)",

  // Червень
  "10.06": "Вознесіння Господнє",
  "20.06": "Трійця / П'ятдесятниця",
  "21.06": "Просто літнє сонцестояння. Купив собі ескімо? :)",
  "24.06": "Різдво Івана Хрестителя / Купала (новий стиль)",
  "28.06": "День Конституції України",
  "29.06": "Святих апостолів Петра і Павла (новий стиль)",

  // Липень
  "07.07": "Різдво Івана Хрестителя / Івана Купала (старий стиль)",
  "12.07": "Святих апостолів Петра і Павла (старий стиль)",

  // Серпень
  "01.08": "День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(",
  "06.08": "Преображення Господнє / Спас (новий стиль)",
  "15.08": "Успіння Пресвятої Богородиці (новий стиль)",
  "19.08": "Преображення Господнє / Спас (старий стиль)",
  "24.08": "День Незалежності України",
  "28.08": "Успіння Пресвятої Богородиці (старий стиль)",

  // Вересень
  "01.09": "День знань. Цей день усі ненавидять, бо термін відпустки закінчився :(",
  "08.09": "Різдво Пресвятої Богородиці (новий стиль)",
  "11.09": "Випуск 1-ї серії м/с 'Динофроз'. Легенда...",
  "14.09": "Воздвиження Хреста Господнього (новий стиль)",
  "20.09": "Всесвітній день прибирання!",
  "21.09": "Різдво Пресвятої Богородиці (старий стиль)",
  "23.09": "Осіннє рівнодення. Древніус = Даркніс :)",
  "27.09": "Воздвиження Хреста Господнього (старий стиль)",

  // Жовтень
  "01.10": "Покрова Пресвятої Богородиці та День козацтва (новий стиль)",
  "14.10": "Покрова Пресвятої Богородиці та День козацтва (старий стиль)",
  "24.10": "Почався ретроградний Меркурій. Якщо синоптики помилилися з дощем — винні зірки, а не ми! :)",
  "27.10": "День української писемності та мови. Напиши по максимуму каліграфічний лист.",

  // Листопад
  "19.11": "Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)",
  "21.11": "Введення в храм Пресвятої Богородиці (новий стиль)",
  "30.11": "День святого Андрія Первозванного (новий стиль)",

  // Грудень
  "04.12": "Введення в храм Пресвятої Богородиці (старий стиль)",
  "06.12": "День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)",
  "13.12": "День святого Андрія Первозванного (старий стиль)",
  "19.12": "День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)",
  "22.12": "Зимове сонцестояння. Найтемніший день. Як очі Марти...",
  "25.12": "Різдво Христове (новий стиль)",
};
  const isWeekend = (dayName) => {
    const name = dayName.toLowerCase();
    return name.includes("сб") || name.includes("нд");
  };

  const isBirthday = (dateStr) => {
    if (!user?.birthDate || !dateStr) return false;
    // user.birthDate: YYYY-MM-DD, dateStr: DD.MM
    const [, uMonth, uDay] = user.birthDate.split("-");
    const [dDay, dMonth] = dateStr.split(".");
    return (
      parseInt(uDay) === parseInt(dDay) && parseInt(uMonth) === parseInt(dMonth)
    );
  };

  const getDateType = (dateStr, dayName, fullDate) => {
    const holidayName = HOLIDAYS_2027[dateStr];
    const isWknd = isWeekend(dayName);
    const isBday = isBirthday(dateStr);
    const customDay = customDays.find((d) => d.date === fullDate);

    // Пріоритет: Свято > День народження > Custom > Вихідний
    if (holidayName) {
      return {
        type: "holiday",
        color: "#ff6666",
        label: holidayName + (isWknd ? " + Вихідний" : ""),
      };
    }
    if (isBday) {
      return {
        type: "birthday",
        color: "#e066ff", 
        label: "З Днем Народження! 🎉",
        isRainbow: true,
      };
    }
    if (customDay) {
      return { type: "custom", color: "#00bfff", label: customDay.reason };
    }
    if (isWknd) {
      return {
        type: "weekend",
        color: "#ff9966",
        label: "Вихідний",
      };
    }
    return { type: "regular", color: null, label: "" };
  };

  const calculateCountdown = (fullDate) => {
    const now = new Date();
    const target = new Date(fullDate);
    target.setHours(0, 0, 0, 0); // Початок дня події

    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) return `⏳ Залишилось: ${days}д ${hours}г`;
    return `⏳ Почнеться за ${hours}г`;
  };

  const getHolidayMessage = (dateStr, dayName, fullDate) => {
    const customDay = customDays.find((d) => d.date === fullDate);
    const countdown = calculateCountdown(fullDate);

    if (customDay) {
      return countdown ? [`💙 Ваша подія: ${customDay.reason}`, `(${countdown})`] : [`💙 Ваша подія: ${customDay.reason}`];
    }
    if (isBirthday(dateStr)) {
      return countdown ? [`🎂 Вітаємо, ${user?.firstName}! З Днем Народження! 🌈`, `(${countdown})`] : [`🎂 Вітаємо, ${user?.firstName}! З Днем Народження! 🌈`];
    }
    const holiday = HOLIDAYS_2027[dateStr];
    if (holiday) {
      return countdown ? [`✨ Вітаємо зі святом: ${holiday}!`, `(${countdown})`] : [`✨ Вітаємо зі святом: ${holiday}!`];
    }
    return null;
  };

  // Лінія тренду (як в Excel) для денної та нічної температури за 16 днів
  const dailyDayTemps = dailyList?.map((d) => toDisplayTemp(parseInt(d.temp_day))) || [];
  const dailyNightTemps = dailyList?.map((d) => toDisplayTemp(parseInt(d.temp_night))) || [];
  const dailyDayTrend = linearTrend(dailyDayTemps);
  const dailyNightTrend = linearTrend(dailyNightTemps);
  const fmtSlope = (trend) => {
    if (!trend) return "—";
    const v = Math.round(trend.slope * 10) / 10;
    return `${v > 0 ? "+" : ""}${v}°`;
  };
  const dailyTrendText = `Тренд: день ${fmtSlope(dailyDayTrend)}/день, ніч ${fmtSlope(dailyNightTrend)}/день`;
  const dailyTrendBadge = `${fmtSlope(dailyDayTrend)} / ${fmtSlope(dailyNightTrend)}`;
  const trendDataset = (label, trend, rgb, opacity, style) => ({
    label,
    data: trend.data,
    isTrend: true,
    borderColor: `rgba(${rgb}, ${opacity * 0.9})`,
    hidden: opacity === 0,
    pointRadius: 0,
    pointHoverRadius: 0,
    fill: false,
    tension: 0,
    ...lineStyleProps(style),
    yAxisID: "y",
  });
  const dailyTrendDatasets = showDailyTrend
    ? [
        dailyDayTrend && trendDataset("Тренд (день)", dailyDayTrend, "255, 179, 108", dailyOpacity.day, lineStyles.daily.trendDay),
        dailyNightTrend && trendDataset("Тренд (ніч)", dailyNightTrend, "255, 20, 147", dailyOpacity.night, lineStyles.daily.trendNight),
      ].filter(Boolean)
    : [];

  const dailyChartData = {
    labels: dailyList?.map((d) => `${d.date}\n${d.day}`) || [],
    datasets: [
      {
        label: `День (${tempSuffix})`,
        data: dailyDayTemps,
        borderColor: `rgba(255, 179, 108, ${dailyOpacity.day})`,
        backgroundColor: `rgba(255, 179, 108, ${dailyOpacity.day * 0.5})`,
        hidden: dailyOpacity.day === 0,
        pointStyle: dailyList?.map((d) =>
          createIconCanvas(d, 28, null, dailyOpacity.day),
        ),
        pointBorderColor: dailyList?.map((d) => {
          const dateType = getDateType(d.date, d.day, d.fullDate);
          const color = dateType.color || "#ffb36c";
          return color;
        }),
        pointBorderWidth: dailyList?.map((d) => {
          const dateType = getDateType(d.date, d.day, d.fullDate);
          return dateType.color ? 3 : 2;
        }),
        valueLabels: lineStyles.daily.day.labels
          ? dailyDayTemps.map((v) => formatChartTempLabel(v, tempSuffix))
          : null,
        valueLabelOffset: -16,
        valueLabelColor: "#ffd2a6",
        valueLabelOpacity: dailyOpacity.day,
        ...lineStyleProps(lineStyles.daily.day, { tension: 0.3, pointRadius: 12, fill: false }),
        yAxisID: "y",
      },
      {
        label: `Ніч (${tempSuffix})`,
        data: dailyNightTemps,
        borderColor: `rgba(255, 20, 147, ${dailyOpacity.night})`,
        backgroundColor: `rgba(255, 20, 147, ${dailyOpacity.night * 0.2})`,
        hidden: dailyOpacity.night === 0,
        pointStyle: "circle",
        valueLabels: lineStyles.daily.night.labels
          ? dailyNightTemps.map((v) => formatChartTempLabel(v, tempSuffix))
          : null,
        valueLabelOffset: 8,
        valueLabelColor: "#ff8fd0",
        valueLabelOpacity: dailyOpacity.night,
        ...lineStyleProps(lineStyles.daily.night, { tension: 0.3, pointRadius: 4, fill: false }),
        yAxisID: "y",
      },
      rightMetric === "wind"
        ? {
            label: fmt.windAxis,
            data: dailyList?.map((d) => fmt.windValue(parseFloat(d.wind_speed) || 0)) || [],
            borderColor: `rgba(0, 153, 255, ${dailyOpacity.wind})`,
            backgroundColor: `rgba(0, 153, 255, ${dailyOpacity.wind * 0.2})`,
            hidden: dailyOpacity.wind === 0,
            pointStyle: dailyList?.map((d) =>
              createDirectionArrowCanvas(d.wind_direction_10m, 22, dailyOpacity.wind, parseFloat(d.wind_speed) > 10),
            ),
            pointBorderColor: "#ffffff",
            pointBorderWidth: 1.5,
            pointBackgroundColor: dailyList?.map((d) =>
              parseFloat(d.wind_speed) > 10 ? "#ff6a00" : "#0099ff",
            ),
            valueLabels: lineStyles.daily.right.labels
              ? dailyList?.map((d) =>
                  windLabelText(
                    lineStyles.daily.right.windLabel === "gusts" ? d.wind_gusts_max : parseFloat(d.wind_speed) || 0,
                  ),
                )
              : null,
            valueLabelOffset: 13,
            valueLabelColor: "#9be3ff",
            valueLabelOpacity: dailyOpacity.wind,
            ...lineStyleProps(lineStyles.daily.right, { tension: 0.3, pointRadius: 11, fill: false }),
            yAxisID: "y1",
          }
        : {
            label: rightMeta.axis,
            data:
              dailyList?.map((d) => rightValue(d, true)) || [],
            borderColor: `rgba(${rightMeta.rgb}, ${dailyOpacity.wind})`,
            backgroundColor: `rgba(${rightMeta.rgb}, ${dailyOpacity.wind * 0.2})`,
            hidden: dailyOpacity.wind === 0,
            pointStyle: "circle",
            pointBackgroundColor: `rgba(${rightMeta.rgb}, ${dailyOpacity.wind})`,
            valueLabels: lineStyles.daily.right.labels
              ? dailyList?.map((d) => rightLabelText(rightValue(d, true)))
              : null,
            valueLabelOffset: 8,
            valueLabelColor: rightMeta.color,
            valueLabelOpacity: dailyOpacity.wind,
            ...lineStyleProps(lineStyles.daily.right, { tension: 0.3, pointRadius: 4, fill: false }),
            yAxisID: "y1",
          },
      ...dailyTrendDatasets,
    ],
  };

  const chartOptions = {
    animation: isCapturing ? false : undefined,
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false, // Вимкнути вбудовану легенду - створимо свою липку
      },
      tooltip: {
        enabled: false,
        mode: "index",
        intersect: false,
        external: externalTooltipHandler,
        filter: (item) => !item.dataset.isTrend, // лінії тренду не показуємо в підказці
        callbacks: {
          title: (items) => `⏰ Час: ${items[0].label}`,
          label: (context) => {
            if (context.datasetIndex === 0) {
              // Температура
              const temp = visibleHourly?.[context.dataIndex]?.tempNum ?? 0;
              let label = `Температура: ${formatTemp(temp)}`;

              let dangers = [];
              if (temp > 30) dangers.push("СПЕКА ☀️");
              if (temp < -30) dangers.push("МОРОЗ ❄️");

              if (dangers.length > 0) {
                label += ` ⚠️ ${dangers.join(", ")}`;
              }
              return label;
            } else if (context.datasetIndex === 1 && rightMetric !== "wind") {
              return ` ${rightTooltip(context.parsed.y)}`;
            } else if (context.datasetIndex === 1) {
              const wind = visibleHourly?.[context.dataIndex]?.windNum ?? 0;
              let label = ` Вітер: ${fmt.wind(wind)}`;
              if (wind > 10) label += ` ⚠️ СИЛЬНИЙ ВІТЕР`;
              const hourlyData = visibleHourly?.[context.dataIndex];
              if (hourlyData) {
                label += ` | ${getWindDirectionLabel(hourlyData.wind_direction_10m)} (${Math.round(hourlyData.wind_direction_10m || 0)}°)`;
              }
              return label;
            }
            return "";
          },
          afterBody: (contextItems) => {
            if (contextItems.length === 0) return "";
            const firstContext = contextItems[0];
            const hourlyData = visibleHourly?.[firstContext.dataIndex];
            if (!hourlyData) return "";
            const desc = hourlyData.description || getWeatherDescription(hourlyData.weather_code) || stripEmoji(hourlyData.iconPlaceholder) || "Погода";
            return `Стан погоди: ${desc}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: { display: true, text: `Температура (${tempSuffix})`, color: "#ffb36c" },
        ticks: { color: isDarkMode ? "#aaa" : "#888", font: { size: 10 } },
        grid: {
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(128, 128, 128, 0.1)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        beginAtZero: true,
        ...(isPercentMetric ? { max: 100 } : {}),
        title: {
          display: true,
          text: rightMeta.axis,
          color: rightMetric === "wind" ? "rgba(0, 190, 235, 1)" : rightMeta.color,
        },
        ticks: { color: rightMetric === "wind" ? "rgba(0, 190, 235, 1)" : rightMeta.color, font: { size: 10 } },
        grid: { drawOnChartArea: false },
      },
      x: {
        offset: true,
        ticks: { color: "#fff", font: { size: 10 } },
        grid: { display: false },
      },
    },
  };

  const dailyChartOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      legend: {
        display: false, // Вимкнути вбудовану легенду - створимо свою липку
      },
      tooltip: {
        ...chartOptions.plugins.tooltip,
        enabled: false,
        external: externalTooltipHandler,
        callbacks: {
          title: (items) => {
            const daily = dailyList?.[items[0].dataIndex];
            if (!daily) return items[0].label;
            const dateType = getDateType(daily.date, daily.day, daily.fullDate);
            const holidayMsg = getHolidayMessage(
              daily.date,
              daily.day,
              daily.fullDate,
            );
            const compactLabel = `${daily.date}${daily.day.toLowerCase()}${dateType.label ? ` [${dateType.label}]` : ""}`;
            return holidayMsg ? [...holidayMsg, compactLabel] : compactLabel;
          },
          label: (context) => {
            const isDay = context.datasetIndex === 0;
            const isNight = context.datasetIndex === 1;
            const isWind = context.datasetIndex === 2;
            if (isDay) {
              return `☀️ День: ${formatTemp(parseInt(dailyList?.[context.dataIndex]?.temp_day))}`;
            } else if (isNight) {
              return `🌙 Ніч: ${formatTemp(parseInt(dailyList?.[context.dataIndex]?.temp_night))}`;
            } else if (isWind && rightMetric !== "wind") {
              return rightTooltip(context.parsed.y);
            } else if (isWind) {
              const daily = dailyList?.[context.dataIndex];
              const direction = daily?.wind_direction_10m || 0;
              return `🌬️ Вітер: ${fmt.wind(parseFloat(daily?.wind_speed) || 0)} | ${getWindDirectionLabel(direction)} (${Math.round(direction)}°)`;
            }
            return "";
          },
          afterBody: (contextItems) => {
            if (contextItems.length === 0) return "";
            const firstContext = contextItems[0];
            const daily = dailyList?.[firstContext.dataIndex];
            if (!daily) return "";
            const desc = daily.description || getWeatherDescription(daily.weather_code) || stripEmoji(daily.iconPlaceholder) || "—";
            return `Стан погоди: ${desc}`;
          },
        },
      },
    },
    scales: {
      ...chartOptions.scales,
      y: {
        beginAtZero: false,
        title: { display: true, text: `Температура (${tempSuffix})`, color: "#ffb36c" },
        ticks: { color: isDarkMode ? "#aaa" : "#888", font: { size: 10 } },
        grid: {
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(128, 128, 128, 0.1)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        beginAtZero: true,
        ...(isPercentMetric ? { max: 100 } : {}),
        title: {
          display: true,
          text: rightMeta.axis,
          color: rightMeta.color,
        },
        ticks: { color: rightMeta.color, font: { size: 10 } },
        grid: { drawOnChartArea: false },
      },
      x: {
        ...chartOptions.scales.x,
        ticks: {
          ...chartOptions.scales.x.ticks,
          color: (ctx) => {
            if (!dailyList || ctx.index >= dailyList.length) {
              return "#fff";
            }
            const daily = dailyList[ctx.index];
            const dateType = getDateType(daily.date, daily.day, daily.fullDate);
            return dateType.color || "#fff";
          },
          font: {
            ...chartOptions.scales.x.ticks.font,
            weight: (ctx) => {
              if (!dailyList || ctx.index >= dailyList.length)
                return "normal";
              const daily = dailyList[ctx.index];
              const dateType = getDateType(
                daily.date,
                daily.day,
                daily.fullDate,
              );
              return dateType.color ? "bold" : "normal";
            },
          },
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const daily = dailyList[index];
        const dateType = getDateType(daily.date, daily.day, daily.fullDate);
        if (dateType.type === "holiday" || dateType.type === "birthday") {
          setSelectedDay(daily);
        } else if (dateType.type === "custom") {
          setSelectedDay(daily);
          setTempReason(dateType.label);
        } else {
          if (customHolidayName.trim()) {
            if (customHolidayName.trim().length > 12) {
              alert("Назва свята занадто довга (макс. 12 символів)!");
              return;
            }
            dispatch(
              addCustomDay({
                date: daily.fullDate,
                reason: customHolidayName.trim(),
              }),
            );
          } else {
            setSelectedDay(daily);
          }
        }
      }
    },
  };
  function externalTooltipHandler(context) {
    // Отримуємо об'єкт тултіпа та графік
    const { chart, tooltip } = context;

    // Визначаємо контейнер (fullscreen або body)
    const fsEl = document.fullscreenElement;
    const container = fsEl || document.body;

    // Шукаємо або створюємо DOM-елемент тултіпа в правильному контейнері
    let tooltipEl = container.querySelector("#chartjs-external-tooltip");

    if (!tooltipEl) {
      // Видаляємо старий тултіп з іншого контейнера (якщо є)
      const old = document.getElementById("chartjs-external-tooltip");
      if (old) old.remove();

      tooltipEl = document.createElement("div");
      tooltipEl.id = "chartjs-external-tooltip";
      tooltipEl.style.position = "fixed";
      tooltipEl.style.zIndex = "2147483647";
      tooltipEl.style.maxWidth = "min(280px, calc(100vw - 24px))";
      tooltipEl.style.boxSizing = "border-box";
      tooltipEl.style.whiteSpace = "pre-line";
      tooltipEl.style.background = "rgba(15, 15, 25, 0.92)";
      tooltipEl.style.color = "#fff";
      tooltipEl.style.borderRadius = "8px";
      tooltipEl.style.padding = "8px 12px";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.transition = "all 0.1s ease";
      tooltipEl.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
      tooltipEl.style.border = "1px solid rgba(255, 179, 108, 0.4)";
      tooltipEl.style.fontSize = "12px";
      tooltipEl.style.backdropFilter = "blur(6px)";
      tooltipEl.setAttribute("role", "dialog");
      container.appendChild(tooltipEl);
    }

    // Ховаємо тултіп, якщо курсор вийшов за межі точок або за межі графіка
    if (tooltip.opacity === 0 || !chart.isPointInArea({ x: tooltip.caretX, y: tooltip.caretY })) {
      tooltipEl.style.opacity = "0";
      return;
    }

    // Наповнюємо вмістом
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map((b) => b.lines);
      const afterLines = tooltip.afterBody || [];

      let html = "";

      // Заголовок
      titleLines.forEach((title) => {
        html += `<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${title}</div>`;
      });

      // Основні рядки (температура, вітер)
      bodyLines.forEach((body) => {
        html += `<div style="margin-bottom: 2px;">${body}</div>`;
      });

      // Додаткові рядки (іконка / опис)
      afterLines.forEach((after) => {
        html += `<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${after}</div>`;
      });

      tooltipEl.innerHTML = html;
    }

    // Позиціонування — getBoundingClientRect() дає viewport-координати навіть у fullscreen
    const position = chart.canvas.getBoundingClientRect();
    const tooltipWidth = tooltipEl.offsetWidth;
    const tooltipHeight = tooltipEl.offsetHeight;
    const vw = fsEl ? fsEl.clientWidth : window.innerWidth;
    const vh = fsEl ? fsEl.clientHeight : window.innerHeight;
    const left = Math.min(
      Math.max(12, position.left + tooltip.caretX + 10),
      vw - tooltipWidth - 12,
    );
    const top = Math.min(
      Math.max(12, position.top + tooltip.caretY - tooltipHeight - 10),
      vh - tooltipHeight - 12,
    );

    tooltipEl.style.opacity = "1";
    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.top = `${top}px`;
  }

  const [isBannerHovered, setIsBannerHovered] = useState(false);

  useEffect(() => {
    if (isBannerHovered) return;
    const interval = setInterval(() => {
      if (window.innerWidth >= 768) {
        setActiveTab((prev) => {
          const order = ["current", "hourly", "daily", "ai"];
          const nextIndex = (order.indexOf(prev) + 1) % order.length;
          return order[nextIndex];
        });
      }
    }, 6500);
    return () => clearInterval(interval);
  }, [isBannerHovered]);

  const renderHourlyTable = () => {
    if (!visibleHourly || visibleHourly.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          Немає даних годинного прогнозу.
        </div>
      );
    }

    return (
      <div style={{ marginTop: "12px", width: "100%", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "3px", paddingBottom: "10px", minWidth: "min-content" }}>
          {visibleHourly.map((item, idx) => {
            const windDeg = item.wind_direction_10m || 0;
            const windText = getWindDirectionText(windDeg);
            const tempVal = parseInt(item.temp);
            const tempColor = tempVal > 25 ? "#ff4d4d" : tempVal < 5 ? "#4da6ff" : "#ffb36c";
            return (
              <div
                key={idx}
                style={{
                  flex: "0 0 120px",
                  background: isDarkMode ? "rgba(25, 25, 35, 0.88)" : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "7px",
                  padding: "4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: "bold", opacity: 0.85, color: "#fff" }}>
                  {item.time || item.label || `${idx}:00`}
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2px 0" }}>
                  <div style={{ fontSize: "24px" }}>
                    <WeatherIcon item={item} />
                  </div>
                  <TextContent $size="11px" $lh="1.2">
                    {item.description || getWeatherDescription(item.weather_code) || stripEmoji(item.iconPlaceholder) || "Погода"}
                  </TextContent>
                </div>

                <div style={{ fontSize: "16px", fontWeight: "800", color: tempColor }}>
                  {formatTemp(item.tempNum ?? item.temp)}
                </div>

                {item.feels_like && (
                  <div style={{ fontSize: "10px", opacity: 0.75 }}>
                    Відчувається: {formatTemp(item.feels_like)}
                  </div>
                )}
                <div style={{ width: "80%", height: "1px", background: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", margin: "4px 0" }} />

                <div style={{ fontSize: "10px", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: "700", color: "#0099ff" }}>
                   Сила вітру: <span>{fmt.wind(item.windNum ?? item.wind_speed ?? item.windSpeed ?? 0)}</span>
                  </div>
                  <div style={{ fontSize: "9px", opacity: 0.8 }}>
                    Напрямок: <span style={{ display: "inline-block", transform: `rotate(${windDeg}deg)`, fontSize: "12px" }}>⬇</span>
                  </div>
                   <div style={{ fontSize: "9px", opacity: 0.8 }}> {windText} ({Math.round(windDeg)}°)</div>
                  {(item.wind_gusts_10m || item.wind_gusts) && parseFloat(item.wind_gusts_10m || item.wind_gusts) > 0 && (
                    <div style={{ fontSize: "9px", color: "#ff9900", fontWeight: "600" }}>
                      Пориви: {fmt.wind(item.wind_gusts_10m || item.wind_gusts)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Значення з % (дані можуть уже містити знак %)
  const formatPercent = (val) =>
    val === undefined || val === null || val === "" ? "—" : `${String(val).replace(/%/g, "")}%`;

  // Сітка плиток у блоковому режимі — як плитки вкладки «Зараз»
  const renderBlockStats = (stats) => (
    <BlockStatGrid>
      {stats.map(({ icon, label, value, sub }) => (
        <BlockStatTile key={label}>
          {icon}
          <BlockStatLabel>{label}</BlockStatLabel>
          <BlockStatValue>{value}</BlockStatValue>
          {sub && <BlockStatLabel>{sub}</BlockStatLabel>}
        </BlockStatTile>
      ))}
    </BlockStatGrid>
  );

  const renderHourlyBlocks = () => {
    if (!visibleHourly || visibleHourly.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          Немає даних годинного прогнозу.
        </div>
      );
    }

    return (
      <div style={{ marginTop: "6px", width: "100%", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "10px", paddingBottom: "2px", minWidth: isNarrowScreen ? "min-content" : undefined }}>
          {visibleHourly.map((item, idx) => {
            const windDeg = item.wind_direction_10m || 0;
            const windText = getWindDirectionText(windDeg);
            const isPolarNight = card.current?.isPolarNight || item.isPolarNight;
            const isPolarDay = card.current?.isPolarDay || item.isPolarDay;

            return (
              <div
                key={idx}
                style={{
                  // Планшет і комп'ютер: блок у 1.6 раза ширший за третину області (~1.9 блока видно)
                  flex: isNarrowScreen ? "0 0 200px" : "0 0 calc((100% - 20px) / 3 * 1.6)",
                  boxSizing: "border-box",
                  background: isDarkMode ? "rgba(20, 20, 30, 0.92)" : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  border: isDarkMode ? "1px solid rgba(0, 238, 255, 0.3)" : "1px solid rgba(0, 140, 255, 0.3)",
                  borderRadius: "10px",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  color: isDarkMode ? "#fff" : "#1a1a1a",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                  fontSize: "11px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: "bold", textAlign: "center", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                  <FaClock /> {item.time || item.label || `${idx}:00`}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                  <span style={{ fontSize: "24px" }}><WeatherIcon item={item} /></span>
                  <span style={{ fontSize: "11px", fontWeight: "600", opacity: 0.9 }}>
                    {item.description || getWeatherDescription(item.weather_code) || stripEmoji(item.iconPlaceholder) || "Погода"}
                  </span>
                </div>

                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "8px", padding: "6px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  {!isPolarNight && (
                    <div style={{ fontWeight: "800", fontSize: "14px", color: "#ff9d3b" }}>
                      Температура: {formatTemp(item.tempNum ?? item.temp)}
                    </div>
                  )}
                  {item.feels_like && (
                    <div style={{ fontSize: "10px", opacity: 0.8 }}>
                      Відчувається: {formatTemp(item.feels_like)}
                    </div>
                  )}
                  {isPolarNight && (
                    <div style={{ fontSize: "10px", color: "#4da6ff", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <BsMoonStarsFill /> Полярна ніч
                    </div>
                  )}
                  {isPolarDay && (
                    <div style={{ fontSize: "10px", color: "#ffd700", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaSun /> Полярний день
                    </div>
                  )}
                </div>

                {renderBlockStats([
                  { icon: <AnimWind><BiWind style={{ color: "#00eeff" }} /></AnimWind>, label: "Вітер", value: fmt.wind(item.windNum ?? item.wind_speed ?? item.windSpeed ?? 0), sub: windText },
                  { icon: <AnimWind><BiWind style={{ color: "#ff9900" }} /></AnimWind>, label: "Пориви", value: item.wind_gusts_10m ? fmt.wind(item.wind_gusts_10m) : "—" },
                  { icon: <FaDroplet style={{ color: "#4da6ff" }} />, label: "Вологість", value: formatPercent(item.relative_humidity_2m ?? item.humidity) },
                  { icon: <GiGrassMushroom style={{ color: "#00ffcc" }} />, label: "Точка роси", value: item.dew_point_2m !== undefined ? formatTemp(item.dew_point_2m) : "—" },
                  { icon: <FaCloudRain style={{ color: "#3399ff" }} />, label: "Опади", value: fmt.precip(item.precipitation ?? 0) },
                  { icon: <FaSnowflake style={{ color: "#80d4ff" }} />, label: "Сніговий покрив", value: fmt.snow((item.snow_depth ?? 0) * 100) },
                  { icon: <GiIceCube style={{ color: "#00cdff" }} />, label: "Ґрунт", value: item.soil_temperature_0cm !== undefined ? formatTemp(item.soil_temperature_0cm) : "—" },
                  { icon: <PiThermometerFill style={{ color: "#ff9d3b" }} />, label: "Рівень 0°C", value: item.freezing_level_height !== undefined ? fmt.height(item.freezing_level_height) : "—" },
                  { icon: <GiWaterRecycling style={{ color: "#00eeff" }} />, label: "Випаровування", value: item.evapotranspiration !== undefined ? fmt.precip(item.evapotranspiration, 2) : "—" },
                  { icon: <MdOutlineSpeed style={{ color: "#ffb36c" }} />, label: "Тиск", value: fmt.pressure(item.pressure_msl ?? item.pressure ?? card.current?.pressure) },
                  { icon: <FaCloud style={{ color: "#aaa" }} />, label: "Хмари", value: formatPercent(item.cloud_cover ?? card.current?.cloud_cover) },
                ])}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderDailyBlocks = () => {
    const list = dailyList;
    if (!list || list.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          Немає даних 16-денного прогнозу.
        </div>
      );
    }

    return (
      <div style={{ marginTop: "6px", width: "100%", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "10px", paddingBottom: "2px", minWidth: isNarrowScreen ? "min-content" : undefined }}>
          {list.map((d, idx) => {
            const dateType = getDateType(d.date, d.day, d.fullDate);
            const windDeg = d.wind_direction_10m || 0;
            const windText = getWindDirectionText(windDeg);
            const isPolarNight = d.isPolarNight || card.current?.isPolarNight;
            const isPolarDay = d.isPolarDay || card.current?.isPolarDay;
            const isPolarEndDay = d.isPolarEndDay;
            const { twilight, moon, dayDiff } = dailyAstro[idx] || {};
            const sunScale = getScaleProgress(d.sunrise, d.sunset);
            const moonScale = getScaleProgress(moon?.riseDate, moon?.setDate);
            const rainChance = Number(d.precipitation_probability_max ?? d.pop);

            return (
              <div
                key={idx}
                style={{
                  // Планшет і комп'ютер: блок у 1.6 раза ширший за третину області (~1.9 блока видно)
                  flex: isNarrowScreen ? "0 0 210px" : "0 0 calc((100% - 20px) / 3 * 1.6)",
                  // Минулий день (вчора) — повністю чорно-білий
                  filter: isPastDay(d) ? "grayscale(1)" : "none",
                  boxSizing: "border-box",
                  background: isDarkMode ? "rgba(25, 25, 38, 0.92)" : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  border: dateType.color ? `2px solid ${dateType.color}` : isDarkMode ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  color: isDarkMode ? "#fff" : "#1a1a1a",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                  fontSize: "11px",
                }}
              >
                {/* Дата й опис погоди — в один ряд */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", alignItems: "center", gap: "6px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "bold", color: dateType.color || "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <FaCalendarDays /> {d.date} {d.day}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", minWidth: 0 }}>
                    <span style={{ fontSize: "26px", flexShrink: 0 }}><WeatherIcon item={d} /></span>
                    <span style={{ fontSize: "11px", fontWeight: "600" }}>
                      {d.description || getWeatherDescription(d.weather_code) || stripEmoji(d.iconPlaceholder) || "Погода"}
                    </span>
                  </div>
                </div>

                {/* День і ніч — в один ряд; полярні примітки на всю ширину */}
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "8px", padding: "6px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", gap: "2px 8px", fontSize: "13px" }}>
                  {!isPolarNight && (
                    <div style={{ fontWeight: "800", color: "#ff9d3b", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaSun /> День: {formatTemp(d.temp_day || d.temp)}
                      {d.feels_like_max != null && (
                        <span style={{ fontSize: "10px", fontWeight: 600, opacity: 0.8 }}>
                          (відч. {formatTemp(Math.round(d.feels_like_max))})
                        </span>
                      )}
                    </div>
                  )}
                  {!isPolarDay && (
                    <div style={{ fontWeight: "700", color: "#ff3399", display: "flex", alignItems: "center", gap: "4px" }}>
                      <BsMoonStarsFill /> Ніч: {formatTemp(d.temp_night || d.nightTemp)}
                      {d.feels_like_min != null && (
                        <span style={{ fontSize: "10px", fontWeight: 600, opacity: 0.8 }}>
                          (відч. {formatTemp(Math.round(d.feels_like_min))})
                        </span>
                      )}
                    </div>
                  )}
                  {isPolarNight && (
                    <div style={{ flexBasis: "100%", justifyContent: "center", fontSize: "10px", color: "#4da6ff", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <BsMoonStarsFill /> Полярна ніч (день не показується)
                    </div>
                  )}
                  {isPolarDay && (
                    <div style={{ flexBasis: "100%", justifyContent: "center", fontSize: "10px", color: "#ffd700", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaSun /> Полярний день (ніч не показується)
                    </div>
                  )}
                  {isPolarEndDay && (
                    <div style={{ flexBasis: "100%", justifyContent: "center", fontSize: "10px", color: "#00eeff", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaExclamationTriangle /> Закінчення полярного періоду
                    </div>
                  )}
                </div>

                {renderBlockStats([
                  {
                    icon: <AnimWind><BiWind style={{ color: "#00eeff" }} /></AnimWind>,
                    label: "Вітер",
                    value: fmt.wind(d.wind_speed ?? 0),
                    sub: (
                      <>
                        {windText}
                        {d.wind_gusts_max != null && (
                          <div style={{ color: "#ff9900", fontWeight: 600, opacity: 1 }}>Пориви: {fmt.wind(d.wind_gusts_max)}</div>
                        )}
                      </>
                    ),
                  },
                  { icon: <AnimSpin><FaSun style={{ color: "#ffd700" }} /></AnimSpin>, label: "УФ-індекс", value: d.uv_index ?? "—" },
                  {
                    // Чим вища ймовірність опадів, тим насиченіша крапля
                    icon: <FaDroplet style={{ color: "#4da6ff", opacity: isNaN(rainChance) ? 0.4 : 0.2 + 0.8 * Math.min(rainChance, 100) / 100 }} />,
                    label: "Ймовірність опадів",
                    value: formatPercent(d.precipitation_probability_max ?? d.pop),
                  },
                  { icon: <FaCloudRain style={{ color: "#3399ff" }} />, label: "Дощ", value: fmt.precip(d.rain_sum ?? d.rain ?? 0) },
                  { icon: <FaSnowflake style={{ color: "#80d4ff" }} />, label: "Сніг", value: d.snowfall_sum != null ? fmt.snow(d.snowfall_sum) : "—" },
                  { icon: <FaCloud style={{ color: "#c3cfdc" }} />, label: "Хмарність", value: formatPercent(d.cloud_cover_mean) },
                  {
                    // Найгірша видимість за день; менше 1 км або код «туман» — це туман
                    icon: (
                      <span style={{ display: "inline-flex", color: isFoggy(d.visibility_min, d.weather_code) ? "#ff9900" : "#9fb3c8" }}>
                        <VisibilityFog />
                      </span>
                    ),
                    label: isFoggy(d.visibility_min, d.weather_code) ? "Туман, видимість" : "Видимість",
                    value: d.visibility_min != null ? fmt.visibility(d.visibility_min / 1000) : "—",
                  },
                  { icon: <GiWaterRecycling style={{ color: "#00eeff" }} />, label: "Випаровування", value: d.evapotranspiration !== undefined ? fmt.precip(d.evapotranspiration, 2) : "—" },
                  { icon: <BsBuildings style={{ color: "#ffb36c" }} />, label: "Цивільні сутінки", value: twilight ? `${twilight.civilDawn} — ${twilight.civilDusk}` : "—" },
                  { icon: <AnimCompass><BsCompass style={{ color: "#be90d4" }} /></AnimCompass>, label: "Навігаційні сутінки", value: twilight ? `${twilight.nauticalDawn} — ${twilight.nauticalDusk}` : "—" },
                  { icon: <AnimTwinkle><BsStars style={{ color: "#a855f7" }} /></AnimTwinkle>, label: "Астрономічні сутінки", value: twilight ? `${twilight.astroDawn} — ${twilight.astroDusk}` : "—" },
                ])}
                <AstroScale
                  icon={<AnimHourglass><BsHourglassSplit style={{ color: "#3498db" }} /></AnimHourglass>}
                  title={`Тривалість дня: ${getDayLength(d.sunrise, d.sunset)}`}
                  riseLabel={formatClock(d.sunrise)}
                  setLabel={formatClock(d.sunset)}
                  progress={sunScale.progress}
                  isActive={sunScale.isActive}
                  color="#ffd700"
                  footer={
                    dayDiff === null || dayDiff === undefined
                      ? null
                      : dayDiff === 0
                        ? "Тривалість дня як учора"
                        : `День на ${Math.abs(dayDiff)} хв ${dayDiff > 0 ? "довший" : "коротший"}, ніж учора`
                  }
                />
                {moon && (
                  <AstroScale
                    icon={<MoonPhaseIcon phase={moon.phase} />}
                    title={`${moon.name}: ${(moon.fraction * 100).toFixed(1).replace(".", ",")}%`}
                    riseLabel={moon.rise}
                    setLabel={moon.set}
                    progress={moonScale.progress}
                    isActive={moonScale.isActive}
                    color="#9fb3c8"
                    footer={
                      moon.nextPhase
                        ? `${moon.nextPhase.name} — ${moon.nextPhase.date.toLocaleDateString("uk", { day: "numeric", month: "long" })}`
                        : null
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const renderDailyTable = () => {
    const list = dailyList;
    if (!list || list.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          Немає даних 16-денного прогнозу.
        </div>
      );
    }
    return (
      <div style={{ marginTop: "12px", width: "100%", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "5px", minWidth: "min-content" }}>
          {list.map((d, idx) => {
            const isPast = isPastDay(d) || d.isPast;
            const dateType = getDateType(d.date, d.day, d.fullDate);
            const isWeekend = d.day === "Сб" || d.day === "Нд" || dateType.type === "weekend";
            const windDeg = d.wind_direction_10m || 0;
            const windText = getWindDirectionText(windDeg);
            const dayTemp = parseInt(d.temp_day || d.temp);
            const nightTemp = parseInt(d.temp_night || d.nightTemp);
            const isPolarNight = d.isPolarNight || card.current?.isPolarNight;
            const isPolarDay = d.isPolarDay || card.current?.isPolarDay;

            let headerColor = "#fff";
            let borderColor = isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)";
            let badge = null;

            if (isPast) {
              headerColor = "#888";
              borderColor = "rgba(140, 140, 140, 0.35)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(120,120,120,0.3)", color: "#bbb", padding: "1px 6px", borderRadius: "4px" }}>
                Минулі дні
                </span>
              );
            } else if (dateType.type === "holiday") {
              headerColor = "#ff4d4d";
              borderColor = "rgba(255, 77, 77, 0.7)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(255, 77, 77, 0.25)", color: "#ff4d4d", padding: "1px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                 Вітаю зі святом!
                </span>
              );
            } else if (dateType.type === "custom") {
              headerColor = "#00bfff";
              borderColor = "rgba(0, 191, 255, 0.7)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(0, 191, 255, 0.25)", color: "#00bfff", padding: "1px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                  Ваша подія
                </span>
              );
            } else if (dateType.type === "birthday") {
              headerColor = "#e066ff";
              borderColor = "rgba(224, 102, 255, 0.7)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(224, 102, 255, 0.25)", color: "#e066ff", padding: "1px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                  Вітаємо з днем народження!
                </span>
              );
            } else if (isWeekend) {
              headerColor = "#ffb36c";
              borderColor = "rgba(255, 179, 108, 0.7)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(255, 179, 108, 0.25)", color: "#ffb36c", padding: "1px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                  Вихідний день
                </span>
              );
            }

            return (
              <div
                key={idx}
                style={{
                  flex: "0 0 125px",
                  background: isPast
                    ? (isDarkMode ? "rgba(20, 20, 26, 0.85)" : "rgba(230, 230, 235, 0.85)")
                    : (isDarkMode ? "rgba(25, 25, 35, 0.88)" : "rgba(255, 255, 255, 0.95)"),
                  backdropFilter: "blur(8px)",
                  border: isPast ? "1px dashed rgba(140, 140, 140, 0.4)" : `2px solid ${borderColor}`,
                  borderRadius: "14px",
                  padding: "12px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  textAlign: "center",
                  color: isDarkMode ? "#fff" : "#1a1a1a",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                  filter: isPast ? "grayscale(100%)" : "none",
                  opacity: isPast ? 0.75 : 1,
                  transition: "all 0.2s ease",
                }}
              >
                {badge}

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: "bold", color: headerColor }}>
                    {d.date} {d.day}
                  </span> 
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <div style={{ fontSize: "28px" }}>
                    <WeatherIcon item={d} />
                  </div>
                  <div style={{ fontSize: "10px", lineHeight: 1.3, opacity: 0.8, color: headerColor, fontWeight: 600 }}>
                    {d.description || getWeatherDescription(d.weather_code ?? 0) || "Погода"}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2px", width: "100%" }}>
                  {!isPolarNight && (
                    <div style={{
                      background: "rgba(255, 179, 108, 0.15)",
                      borderRadius: "6px",
                      padding: "2px 4px",
                      fontSize: "14px",
                      fontWeight: "800",
                      color: "#ff9d3b",
                    }}>
                      День: {formatTemp(dayTemp)}
                    </div>
                  )}
                  {!isPolarDay && (
                    <div style={{
                      background: "rgba(255, 20, 147, 0.12)",
                      borderRadius: "6px",
                      padding: "2px 4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#ff3399",
                    }}>
                      Ніч: {formatTemp(nightTemp)}
                    </div>
                  )}
                </div>

                <div style={{ width: "85%", height: "1px", background: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", margin: "4px 0" }} />

                <div style={{ fontSize: "11px", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: "700", color: "#0099ff" }}>
                    Напрямок: <span style={{ display: "inline-block", transform: `rotate(${windDeg}deg)`, fontSize: "13px" }}>⬇</span>
                  </div>
                  <div style={{ fontSize: "10px" }}><span>Сила вітру: {d.wind_speed || "0"}</span></div>
                  <div style={{ fontSize: "10px" }}>
                    {windText} ({Math.round(windDeg)}°)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (

    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* data-weather-card: по цій рамці бокова панель міст підганяє свою висоту */}
      <WeatherCard $isMain={card.isMain} $isDarkMode={isDarkMode} data-weather-card="">
        <DesktopLayoutWrapper
          $isDarkMode={isDarkMode}
          onMouseEnter={() => setIsBannerHovered(true)}
          onMouseLeave={() => setIsBannerHovered(false)}
        >
          {/* data-weather-card-main: у низ цієї частини на планшеті/ПК стають номери карток 1, 2, 3… */}
          <MainBannerArea $image={cityImage || card.cityImage} data-weather-card-main="">
        <CardHeader
          $isMain={card.isMain}
          style={{
            position: "relative",
            zIndex: 300,
            background: isDarkMode ? "#040404" : "rgb(246, 246, 246)",
          }}
        >
          <div>
            {isEditing ? (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleRenameSubmit();
                    } else if (e.key === "Escape") {
                      setIsEditing(false);
                    }
                  }}
                  autoFocus
                  style={{
                    padding: "4px 10px",
                    fontSize: "13px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    border: "1.5px solid #00eeff",
                    background: isDarkMode ? "rgba(10, 15, 25, 0.9)" : "#ffffff",
                    color: isDarkMode ? "#ffffff" : "#1a1a1a",
                    outline: "none",
                    boxShadow: "0 0 12px rgba(0, 238, 255, 0.4)",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleRenameSubmit}
                  title="Зберегти (Enter)"
                  aria-label="Зберегти"
                  style={{
                    background: "linear-gradient(135deg, #00eeff 0%, #008cff 100%)",
                    color: "#000000",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    padding: "5px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0, 238, 255, 0.4)",
                  }}
                >
                  <BiCheck size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsEditing(false)}
                  title="Скасувати (Esc)"
                  aria-label="Скасувати"
                  style={{
                    background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    padding: "5px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(255, 65, 108, 0.4)",
                  }}
                >
                  <BiX size={18} />
                </motion.button>
              </motion.div>
            ) : (
              <Tooltip content="Двічі клацніть, щоб змінити назву" isDarkMode={isDarkMode}>
                <h3
                  onDoubleClick={() => setIsEditing(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    margin: 0,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <span style={{ color: isDarkMode ? "white" : "black", fontWeight: 900 }}>
                    #{index}
                  </span>
                  <span style={{ color: isDarkMode ? "white" : "black", fontWeight: 900 }}>{card.locationName}</span>
                </h3>
              </Tooltip>
            )}
            {card.isMain && card.isFallbackLocation && <LocationHint />}
            <p style={{ fontSize: "10px", color: "#fcfcfc" }}>
              Широта: {card.lat?.toFixed(2)}, Довгота: {card.lon?.toFixed(2)}
            </p>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flex: 1,
              minWidth: 0,
            }}
          >
            <ActionButtons style={{ position: "relative", zIndex: 2 }}>
              {isVoiceBeta && (
                <Tooltip content={isSpeaking ? "Зупинити озвучення" : "Озвучити прогноз (бета)"} isDarkMode={isDarkMode}>
                  <button
                    type="button"
                    onClick={handleSpeakForecast}
                    aria-label={isSpeaking ? "Зупинити озвучення" : "Озвучити прогноз"}
                    aria-pressed={isSpeaking}
                    style={{
                      padding: "5px",
                      display: "inline-flex",
                      height: "100%",
                      boxSizing: "border-box",
                      alignItems: "center",
                      fontSize: "18px",
                      color: isSpeaking ? "#facc15" : isDarkMode ? "rgb(251, 251, 251)" : "rgb(3, 3, 3)",
                    }}
                  >
                    {isSpeaking ? <BiStopCircle /> : <BiVolumeFull />}
                  </button>
                </Tooltip>
              )}
              <Tooltip content="Налаштування картки" isDarkMode={isDarkMode}>
              <button
                ref={(el) => { if (card.isMain && registerRef) registerRef('weatherGear', el); }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('domino-weather-gear-clicked'));
                  if (isDropdownOpen) handleCloseDropdown();
                  else setIsDropdownOpen(true);
                }}
                aria-label="Налаштування картки"
                style={{
                  padding: "5px",
                  display: "inline-flex",
                  height: "100%",
                  boxSizing: "border-box",
                  color: `${isDarkMode ? "rgb(251, 251, 251)" : "rgb(3, 3, 3)"}`,
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <SettingsIconSwap $open={isDropdownOpen && !isDropdownClosing}>
                  <BiCog />
                  <MdClose />
                </SettingsIconSwap>
              </button>
              </Tooltip>
            </ActionButtons>
          </div>
          {(isDropdownOpen || isDropdownClosing) && (
            <SettingsDropdownMenu
              $isDarkMode={isDarkMode}
              $isClosing={isDropdownClosing}
            >
                <SettingsDropdownItem
                  isDarkMode={isDarkMode}
                  onClick={() => setIsUnitsModalOpen(true)}
                  aria-label="Змінити одиниці виміру"
                  style={{ padding: "4px 12px", gap: "0" }}
                >
                  <MdStraighten style={{ color: "#ffb36c" }} />
                  <span>Одиниці виміру</span>
                  <span style={{ fontSize: "12px", opacity: 0.65 }}>
                    {tempLabel(units.temp)} · {windLabel(units.wind)} · {pressureLabel(units.pressure)}
                  </span>
                </SettingsDropdownItem>
                {/* У першому ряду поруч з «Одиниці виміру» */}
                <SettingsDropdownItem
                  onClick={() => {
                    handleCloseDropdown();
                    if (!hasGeminiKey) return;
                    window.dispatchEvent(
                      new CustomEvent("attachCardToAiHelp", {
                        detail: {
                          id: `weather-${card.id}`,
                          type: "weather",
                          title: card.locationName,
                          details: `Місто: ${card.locationName}. Координати: ${card.lat?.toFixed(2)}, ${card.lon?.toFixed(2)}. Температура: ${card.current?.temp}°C, відчувається: ${card.current?.feels_like}°C. Вітер: ${card.current?.wind_speed} м/с. Вологість: ${card.current?.humidity}%. Тиск: ${card.current?.pressure} гПа.`,
                        },
                      })
                    );
                  }}
                  style={{
                    textAlign: "center",
                    padding: "4px 12px",
                    gap: "0",
                    background: hasGeminiKey
                      ? "linear-gradient(135deg, #5c1d3c, #62123d)"
                      : "rgba(120,120,120,0.3)",
                    cursor: hasGeminiKey ? "pointer" : "default",
                  }}
                >
                  <FiPlus style={{ transform: "scale(1.2)" }} /> Прикріпити до ШІ
                  <SettingsItemHint>
                    {hasGeminiKey ? "Запитати ШІ про цю погоду" : "Потрібен ключ Gemini"}
                  </SettingsItemHint>
                </SettingsDropdownItem>
                {!isEditing && (
                  <SettingsDropdownItem
                    isDarkMode={isDarkMode}
                    onClick={() => {
                      setIsEditing(true);
                      handleCloseDropdown();
                    }}
                  >
                    <BiEdit/> Змінити назву
                    <SettingsItemHint>Своя назва для цієї картки</SettingsItemHint>
                  </SettingsDropdownItem>
                )}
                <SettingsDropdownItem
                 isDarkMode={isDarkMode}
                  onClick={() => {
                    setIsBgModalOpen(true);
                      handleCloseDropdown();
                    }}
                  >
                    <BiImageAlt  /> Змінити фон
                    <SettingsItemHint>Картинка позаду погоди</SettingsItemHint>
                  </SettingsDropdownItem>
                <SettingsDropdownItem
                  isDarkMode={isDarkMode}
                  onClick={() => {
                    setIsCustomDatesModalOpen(true);
                    handleCloseDropdown();
                  }}
                >
                  <FaCalendarPlus /> Встановити дати
                  <SettingsItemHint>Свої свята й події в прогнозі</SettingsItemHint>
                </SettingsDropdownItem>
                <SettingsDropdownItem
                  isDarkMode={isDarkMode}
                  role="switch"
                  aria-checked={cardAlertsOn}
                  onClick={toggleCardAlerts}
                >
                  {cardAlertsOn ? (
                    <MdNotificationsActive style={{ color: "#facc15" }} />
                  ) : (
                    <MdNotificationsOff style={{ opacity: 0.6 }} />
                  )}
                  Сповіщення про небезпеку: {cardAlertsOn ? "увімк." : "вимк."}
                  <SettingsItemHint>
                    {isWeatherAlertsEnabled()
                      ? "Гроза, ураган, злива, ожеледь для цієї картки"
                      : "Спершу увімкніть у Налаштуваннях → Секції та новини"}
                  </SettingsItemHint>
                </SettingsDropdownItem>
                {/* Кнопки гортання карток — спільні для всіх карток, вмикаються окремо */}
                {totalCards > 1 && (
                  <>
                    <SettingsDropdownItem
                      isDarkMode={isDarkMode}
                      role="switch"
                      aria-checked={carouselArrowsOn}
                      onClick={() => togglePrefFlag(CAROUSEL_ARROWS_HIDDEN_KEY)}
                    >
                      <span aria-hidden="true" style={{ opacity: carouselArrowsOn ? 1 : 0.6 }}>
                        ◀▶
                      </span>
                      Стрілки гортання: {carouselArrowsOn ? "увімк." : "вимк."}
                      <SettingsItemHint>Кнопки ◀ ▶ по боках карток</SettingsItemHint>
                    </SettingsDropdownItem>
                    <SettingsDropdownItem
                      isDarkMode={isDarkMode}
                      role="switch"
                      aria-checked={carouselNumbersOn}
                      onClick={() => togglePrefFlag(CAROUSEL_NUMBERS_HIDDEN_KEY)}
                    >
                      <span aria-hidden="true" style={{ opacity: carouselNumbersOn ? 1 : 0.6 }}>
                        123
                      </span>
                      Номери карток: {carouselNumbersOn ? "увімк." : "вимк."}
                      <SettingsItemHint>Кнопки 1, 2, 3… внизу карток</SettingsItemHint>
                    </SettingsDropdownItem>
                  </>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "4px",
                    padding: "6px",
                    minWidth: 0,
                  borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.98)' : 'rgb(0, 0, 0)'}`,
                 }}
                >
                  <button
                    disabled={index === 0}
                    onClick={() => {
                      handleCloseDropdown();
                      moveWeatherCard(card.id, -1);
                    }}
                    style={{
                      flex: 1,
                      background: "transparent",
                      color:
                        index === 0 ? "grey" : isDarkMode ? "#fff" : "#000",
                      fontSize: "13px",
                      cursor: index === 0 ? "default" : "pointer",
                    }}
                  >
                    Зробити вище картку
                  </button>
                  <button
                    disabled={index === totalCards - 1}
                    onClick={() => {
                      handleCloseDropdown();
                      moveWeatherCard(card.id, 1);
                    }}
                    style={{
                      flex: 1,
                      background: "transparent",
                      color:
                        index === totalCards - 1
                          ? "grey"
                          : isDarkMode
                            ? "#fff"
                            : "#000",
                      fontSize: "13px",
                      cursor: index === totalCards - 1 ? "default" : "pointer",
                    }}
                  >
                    Зробити нижче картку
                  </button>
                </div>
                {card.isMain ? (
                  <SettingsDropdownItem
                    onClick={handleGpsToggle}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      handleGpsToggle();
                    }}
                    title={isLocationEnabled ? "Вимкнути GPS (зараз увімкнено)" : "Увімкнути GPS (зараз вимкнено)"}
                    style={{
                      background: isLocationEnabled
                        ? "rgba(0,200,80,0.12)"
                        : "rgba(180,0,0,0.08)",
                      border: `1px solid ${isLocationEnabled ? "#00c84d" : "#b30000"}`,
                      color: isLocationEnabled ? "#00c84d" : "#b30000",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <BiCurrentLocation style={{ transform: "scale(1.12)" }} />{" "}
                    {isLocationEnabled ? "GPS Увімк." : "GPS Вимк."}
                    <SettingsItemHint>
                      {isLocationEnabled
                        ? "Погода там, де ви зараз"
                        : "Увімкніть, щоб бачити свою локацію"}
                    </SettingsItemHint>
                  </SettingsDropdownItem>
                ) : (
                  <SettingsDropdownItem
                    onClick={() => {
                      handleDeleteCard(card.id);
                    }}
                    style={{
                      background: "transparent",
                      color: "red",
                    }}
                  >
                    <BiTrash style={{ transform: "scale(1.08)" }} /> Видалити
                    <SettingsItemHint>Прибрати цю картку</SettingsItemHint>
                  </SettingsDropdownItem>
                )}
              </SettingsDropdownMenu>
            )}
        </CardHeader>
        <CustomTimersDisplay customDays={customDays} cardId={card.id} />
        <MobileTabBar>
          {[
            { key: "current", label: "Зараз" },
            { key: "hourly",  label: "Годинна" },
            { key: "daily",   label: "Місячна" },
            { key: "ai",      label: "Смарт" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() =>
                setActiveTab(tab.key)
              }
              style={{
                padding: "4px 2px",
                border: "none",
                borderBottom: activeTab === tab.key ? "2px solid #00eeff" : "2px solid transparent",
                background: "transparent",
                color: activeTab === tab.key ? "#00eeff" : isDarkMode ? "#aaa" : "#555",
                fontWeight: activeTab === tab.key ? 700 : 400,
                fontSize: "11px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </MobileTabBar>

        <TabContentArea>

          {activeTab === "current" && (
            <CurrentWeatherBanner
              style={{ borderRadius: 0 }}
            >
              <CurrentWeatherBanne
                style={{
                  position: "relative",
                  borderRadius: 0,
                  padding: "2px",
                  background: "rgba(0, 0, 0, 0.43)",
                }}
              >
                <DesktopTwoRowIndicators>
  <IndicatorCard aria-label={card.current.iconPlaceholder}>
    <IconBox $size="32px" $lh="1"><WeatherIcon item={card.current} /></IconBox>
    <TextContent $size="11px" $lh="1.2">
      {stripEmoji(card.current.iconPlaceholder) || "Мінлива хмарність"}
    </TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label="Температура / Відчувається як">
    <IconBox $color={parseFloat(card.current.temp) < 5 ? "#4da6ff" : parseFloat(card.current.temp) > 25 ? "#ff4d4d" : "#ffb36c"}>
      <TempThermometer
        temp={card.current.temp}
        mercuryColor={parseFloat(card.current.temp) < 5 ? "#4da6ff" : parseFloat(card.current.temp) > 25 ? "#ff4d4d" : "#ff9d3b"}
      />
    </IconBox>
    <TextContent $mt="0px">
      {formatTemp(card.current.temp)}
      <SubText $size="9px">Відчувається: {formatTemp(card.current.feels_like)}</SubText>
      {card.accuracy?.models?.length > 0 && (
        <SubText
          $size="9px"
          title={`Медіана прогнозів: ${card.accuracy.models.map((m) => CONSENSUS_MODEL_LABELS[m] || m).join(", ")}`}
        >
          Звірено {card.accuracy.models.length} моделей
          {typeof card.accuracy.tempSpread === "number" &&
            ` · ±${(units.temp === "F" ? card.accuracy.tempSpread * 1.8 : card.accuracy.tempSpread).toFixed(1)}${units.temp === "F" ? "°F" : units.temp === "K" ? "K" : "°C"}`}
        </SubText>
      )}
    </TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label="Відносна вологість">
    <IconBox $color="#a8d8ff">
      <HumidityGlass humidity={card.current.humidity} />
    </IconBox>
    <TextContent $mt="10px">Вологість: {card.current.humidity ?? "—"}</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label={`Вітер: ${card.current.wind_speed}, Напрямок: ${card.current.wind_direction_10m}° (${getWindDirectionText(card.current.wind_direction_10m)}), Пориви: ${card.current.wind_gusts_10m} м/с`}>
    <IconBox $size="28px" $color="#00eeff" $rotate={Math.round((card.current.wind_direction_10m || 0) / 45) * 45 % 360}>⬇</IconBox>
    <TextContent $mt="-5px">
      Швидкість вітру: {fmt.wind(card.current.windNum ?? card.current.wind_speed)}
      <SubText>{card.current.wind_direction_10m}° {getWindDirectionText(card.current.wind_direction_10m)}</SubText>
      <SubText $weight="bold" $opacity={0.9} style={{ color: isExtremeWind ? "#ff4d4d" : "inherit" }}>
        Пориви: {fmt.wind(card.current.wind_gusts_10m)}
      </SubText>
    </TextContent>
  </IndicatorCard>

  <Tooltip content="Точка роси (температура, при якій утворюється роса)" isDarkMode={isDarkMode}>
    <IndicatorCard aria-label="Точка роси (температура, при якій утворюється роса)">
      <IconBox $color="#00ffcc"><GiGrassMushroom /></IconBox>
      <TextContent>Точка роси: {formatTemp(card.current.dew_point_2m)}</TextContent>
    </IndicatorCard>
  </Tooltip>

  <IndicatorCard aria-label="Атмосферний тиск" $pad="10px">
    <IconBox $color={parseFloat(card.current.pressure) < 1000 ? "#4da6ff" : parseFloat(card.current.pressure) > 1020 ? "#ff4d4d" : "#ffb36c"}>
      <PressureGauge pressure={card.current.pressure} />
    </IconBox>
    <TextContent>Атмосферний тиск: {fmt.pressure(card.current.pressure)}</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label="Хмарність">
    <IconBox $color="#c3cfdc">
      <CloudWithTrend cloudCover={card.current.cloud_cover} trend={getCloudTrend(card.current.cloud_cover, card.hourly)} />
    </IconBox>
    <TextContent $size="11px">Хмарність: {card.current.cloud_cover}%</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label="Видимість" $pad="0px">
    <IconBox 
      $opacity={Math.min(1, Math.max(0.3, (card.current.visibility || 10000) / 10000))}
      $color={(card.current.visibility || 10000) < 2000 ? "#ff4d4d" : "#9fb3c8"}
    >
      <VisibilityFog />
    </IconBox>
    <TextContent $size="10px">Видимість: {card.current.visibility !== undefined ? fmt.visibility(card.current.visibility / 1000) : "—"}</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label="УФ-індекс / Сонячна радіація" $pad="10px">
    <IconBox $color={(card.current.uv_index || 0) > 5 ? "#ff4d4d" : (card.current.uv_index || 0) > 2 ? "#ff9900" : "#ffd700"}>
      <UvSun uv={card.current.uv_index} />
    </IconBox>
    <TextContent $size="10px">УФ-індекс: {card.current.uv_index ?? 0}</TextContent>
  </IndicatorCard>

  <Tooltip content="Товщина снігового покриву (см)" isDarkMode={isDarkMode}>
    <IndicatorCard aria-label="Сніговий покрив">
      <IconBox $color={getSnowStyle((card.current.snow_depth || 0) * 100).color} $opacity={getSnowStyle((card.current.snow_depth || 0) * 100).opacity}>
        <FaSnowflake />
      </IconBox>
      <TextContent $size="10px">
        Сніг: {fmt.snow((card.current.snow_depth || 0) * 100)}
      </TextContent>
    </IndicatorCard>
  </Tooltip>

  <Tooltip content="Температура ґрунту (0 см) та рівень 0°C ізотерми (висота замерзання)" isDarkMode={isDarkMode}>
    <IndicatorCard aria-label="Замерзання та температура ґрунту">
      <IconBox $color={card.current.soil_temperature_0cm <= 0 ? "#4da6ff" : "#00cdff"}>
        <GiIceCube />
      </IconBox>
      <TextContent $size="10px">
        Ґрунт: {card.current.soil_temperature_0cm !== undefined ? formatTemp(card.current.soil_temperature_0cm) : "—"}
        <SubText $size="9px">Рівень 0°C: {card.current.freezing_level_height != null ? fmt.height(card.current.freezing_level_height) : "—"}</SubText>
      </TextContent>
    </IndicatorCard>
  </Tooltip>

  <Tooltip content="Випаровування (ET0, мм). Показує швидкість втрати вологи з ґрунту та рослин. Важливо для поливу саду/городу, оцінки висихання білизни та комфорту." isDarkMode={isDarkMode}>
    <IndicatorCard aria-label="Випаровування">
      <IconBox $color={card.current.evapotranspiration > 3 ? "#ff9900" : "#00eeff"}>
        <GiWaterRecycling />
      </IconBox>
      <TextContent $size="10px">
        Випаровування: {fmt.precip(card.current.evapotranspiration ?? 0, 2)}
      </TextContent>
    </IndicatorCard>
  </Tooltip>
</DesktopTwoRowIndicators>
              </CurrentWeatherBanne>
            </CurrentWeatherBanner>
          )}


          {/* Годинний прогноз */}
          {activeTab === "hourly" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                <h4 style={{ margin: 0, fontSize: "14px" }}>Годинний прогноз</h4>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <ViewToggleGroup $isDarkMode={isDarkMode}>
                    <ViewToggleButton
                      $active={effectiveHourlyViewMode === "charts"}
                      $isDarkMode={isDarkMode}
                      onClick={() => canShowHourlyChart && setHourlyViewMode("charts")}
                      disabled={!canShowHourlyChart}
                      style={!canShowHourlyChart ? { opacity: 0.35, cursor: "not-allowed" } : undefined}
                      title={
                        isNarrowScreen
                          ? chartBlockedTitle
                          : hourlyChartAvailable
                            ? "Графіки"
                            : "Графік доступний лише на перші 72 год"
                      }
                    >
                      <BiLineChart size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveHourlyViewMode === "table"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setHourlyViewMode("table")}
                      title="Таблиця"
                    >
                      <BiTable size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveHourlyViewMode === "blocks"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setHourlyViewMode("blocks")}
                      title="Блоки"
                    >
                      <BiGridAlt size={18} />
                    </ViewToggleButton>
                  </ViewToggleGroup>
                </div>
              </div>

              {hourlyDayGroups.length > 1 && (
                <div style={{ marginTop: "8px", marginBottom: "8px" }}>
                  <select
                    value={selectedHourlyDay}
                    onChange={(event) => setSelectedHourlyDay(Number(event.target.value))}
                    aria-label="День погодинного прогнозу"
                    style={{
                      width: "100%",
                      maxWidth: "260px",
                      padding: "8px 10px",
                      borderRadius: "8px",
                      border: isDarkMode ? "1px solid #555" : "1px solid #ccc",
                      background: isDarkMode ? "#1f1f1f" : "#fff",
                      color: isDarkMode ? "#fff" : "#000",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {hourlyDayGroups.map((group, index) => (
                      <option key={group.label} value={index}>
                        {group.title || group.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {effectiveHourlyViewMode === "charts" ? (
                visibleHourly && visibleHourly.length > 0 && (
                  <div
                    ref={hourlyChartPanelRef}
                    style={{
                      position: "relative",
                      width: "100%",
                      minHeight: fullscreenChart === "hourly" ? (isCapturing ? `${window.innerHeight}px` : "100vh") : undefined,
                      padding: fullscreenChart === "hourly" ? "16px" : undefined,
                      boxSizing: "border-box",
                      background: fullscreenChart === "hourly"
                        ? isDarkMode ? "#000" : "#f5f5f5"
                        : "transparent",
                    }}
                  >
                    {renderChartHeader("hourly", hourlyChartPanelRef, [
                      { key: "day", label: "Температура", color: "#ffb36c", icon: <BsThermometerSun /> },
                      { key: "wind", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon },
                    ], renderWindHint("hourly"))}
                    <div style={{ position: "relative", width: "100%" }}>
                      <ChartScrollWrapper>
                        <ChartInnerContainer
                          $width={fullscreenChart === "hourly" ? `max(100%, ${hourlyChartWidth}px)` : hourlyChartWidth}
                          $height={fullscreenChart === "hourly" ? (isCapturing ? `${window.innerHeight - 90}px` : "calc(100vh - 90px)") : defaultChartHeight}
                        >
                          <Line
                            key={`hourly-${fullscreenChart || "normal"}`}
                            ref={hourlyChartInstanceRef}
                            options={chartOptions}
                            data={hourlyChartData}
                            plugins={CHART_PLUGINS}
                          />
                        </ChartInnerContainer>
                      </ChartScrollWrapper>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "50px",
                          height: "calc(100% - 29px)",
                          background: isDarkMode ? "#000" : "#f5f5f5",
                          overflow: "hidden",
                          pointerEvents: "none",
                          display: fullscreenChart === "hourly" ? "none" : "block",
                        }}
                      >
                        <ChartInnerContainer $width={hourlyChartWidth} $height={defaultChartHeight}>
                          <Line
                            options={{ ...chartOptions, plugins: { ...chartOptions.plugins, tooltip: { ...chartOptions.plugins.tooltip, enabled: true } } }}
                            data={hourlyChartData}
                          />
                        </ChartInnerContainer>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "50px",
                          height: "calc(100% - 29px)",
                          background: isDarkMode ? "#000" : "#f5f5f5",
                          overflow: "hidden",
                          pointerEvents: "none",
                          display: fullscreenChart === "hourly" ? "none" : "block",
                        }}
                      >
                        <div style={{ position: "absolute", top: 0, right: 0, width: `${hourlyChartWidth}px`, height: defaultChartHeight }}>
                          <ChartInnerContainer $width={hourlyChartWidth} $height={defaultChartHeight}>
                            <Line
                              options={{ ...chartOptions, plugins: { ...chartOptions.plugins, tooltip: { ...chartOptions.plugins.tooltip, enabled: true } } }}
                              data={hourlyChartData}
                            />
                          </ChartInnerContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ) : effectiveHourlyViewMode === "table" ? (
                renderHourlyTable()
              ) : (
                renderHourlyBlocks()
              )}
            </div>
          )}

          {/* Прогноз на 16 днів */}
          {activeTab === "daily" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <h4 style={{ margin: 0, fontSize: "14px" }}>Прогноз на 16 днів</h4>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer", userSelect: "none", opacity: 0.9 }}>
                    <input
                      type="checkbox"
                      checked={showPastDay}
                      onChange={(e) => setShowPastDay(e.target.checked)}
                      style={{ cursor: "pointer", accentColor: "#00eeff" }}
                    />
                    Показати вчора
                  </label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <ViewToggleGroup $isDarkMode={isDarkMode}>
                    <ViewToggleButton
                      $active={effectiveDailyViewMode === "charts"}
                      $isDarkMode={isDarkMode}
                      onClick={() => !isNarrowScreen && setDailyViewMode("charts")}
                      disabled={isNarrowScreen}
                      style={isNarrowScreen ? { opacity: 0.35, cursor: "not-allowed" } : undefined}
                      title={isNarrowScreen ? chartBlockedTitle : "Графіки"}
                    >
                      <BiLineChart size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveDailyViewMode === "table"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setDailyViewMode("table")}
                      title="Таблиця"
                    >
                      <BiTable size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveDailyViewMode === "blocks"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setDailyViewMode("blocks")}
                      title="Блоки"
                    >
                      <BiGridAlt size={18} />
                    </ViewToggleButton>
                  </ViewToggleGroup>
                </div>
              </div>

              {effectiveDailyViewMode === "charts" ? (
                <>
                  <div style={{
                    position: "sticky",
                    top: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    padding: "6px 8px",
                    background: isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(4px)",
                    borderBottom: "1px solid #ffb36c",
                    zIndex: 10,
                  }}>
                    {renderChartLegend([
                      { key: "day", label: "День", color: "#ffb36c", icon: <FaSun /> },
                      { key: "night", label: "Ніч", color: "#ff1493", icon: <BsMoonStarsFill /> },
                      { key: "wind", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon },
                    ])}
                    {renderWindHint("daily")}
                    {renderChartActions("daily", dailyChartPanelRef)}
                  </div>
                  <div
                    ref={dailyChartPanelRef}
                    style={{
                      position: "relative",
                      width: "100%",
                      minHeight: fullscreenChart === "daily" ? (isCapturing ? `${window.innerHeight}px` : "100vh") : undefined,
                      padding: fullscreenChart === "daily" ? "16px" : undefined,
                      boxSizing: "border-box",
                      background: fullscreenChart === "daily"
                        ? isDarkMode ? "#000" : "#f5f5f5"
                        : "transparent",
                    }}
                  >
                    {fullscreenChart === "daily" && renderChartHeader("daily", dailyChartPanelRef, [
                      { key: "day", label: "День", color: "#ffb36c", icon: <FaSun /> },
                      { key: "night", label: "Ніч", color: "#ff1493", icon: <BsMoonStarsFill /> },
                      { key: "wind", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon },
                    ], renderWindHint("daily"))}
                    <div style={{ position: "relative", width: "100%" }}>
                      <ChartScrollWrapper ref={dailyChartRef}>
                        <ChartInnerContainer
                          $width={fullscreenChart === "daily" ? "max(100%, 900px)" : 900}
                          $height={fullscreenChart === "daily" ? (isCapturing ? `${window.innerHeight - 120}px` : "calc(100vh - 120px)") : defaultChartHeight}
                        >
                          <Line
                            key={`daily-${fullscreenChart || "normal"}`}
                            ref={dailyChartInstanceRef}
                            options={dailyChartOptions}
                            data={dailyChartData}
                            plugins={CHART_PLUGINS}
                          />
                        </ChartInnerContainer>
                      </ChartScrollWrapper>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "50px",
                          height: "calc(100% - 29px)",
                          background: isDarkMode ? "#000" : "#f5f5f5",
                          overflow: "hidden",
                          pointerEvents: "none",
                          display: fullscreenChart === "daily" ? "none" : "block",
                        }}
                      >
                        <ChartInnerContainer $width={1300} $height={defaultChartHeight}>
                          <Line
                            options={{ ...dailyChartOptions, plugins: { ...dailyChartOptions.plugins, tooltip: { ...dailyChartOptions.plugins.tooltip, enabled: true } } }}
                            data={dailyChartData}
                          />
                        </ChartInnerContainer>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "50px",
                          height: "calc(100% - 29px)",
                          background: isDarkMode ? "#000" : "#f5f5f5",
                          overflow: "hidden",
                          pointerEvents: "none",
                          display: fullscreenChart === "daily" ? "none" : "block",
                        }}
                      >
                        <div style={{ position: "absolute", top: 0, right: 0, width: "1300px", height: defaultChartHeight }}>
                          <ChartInnerContainer $width={1300} $height={defaultChartHeight}>
                            <Line
                              options={{ ...dailyChartOptions, plugins: { ...dailyChartOptions.plugins, tooltip: { ...dailyChartOptions.plugins.tooltip, enabled: true } } }}
                              data={dailyChartData}
                            />
                          </ChartInnerContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : effectiveDailyViewMode === "table" ? (
                renderDailyTable()
              ) : (
                renderDailyBlocks()
              )}
            </div>
          )}

          {/* Смарт-прогноз (експертні правила) */}
          {activeTab === "ai" && (
            <AiSummaryBox $isDarkMode={isDarkMode} layout>
              <SmartTopBar $isDarkMode={isDarkMode}>
                <div
                  style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", fontWeight: 700, color: isDarkMode ? "#00eeff" : "#0066aa" }}
                  title="Аналіз на базі умов, збігів та фізичних параметрів без ШІ та інтернету"
                >
                  <BiLineChart style={{ fontSize: "14px" }} />
                  <span>Системні повідомлення</span>
                </div>

                <SmartTopActions>
                    <button
                      onClick={() => {
                        if (ruleForecast?.fullText) {
                          navigator.clipboard?.writeText(ruleForecast.fullText);
                          setCopiedForecast(true);
                          setTimeout(() => setCopiedForecast(false), 2000);
                        }
                      }}
                      style={{
                        background: copiedForecast
                          ? "rgba(0, 255, 150, 0.25)"
                          : isDarkMode
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.08)",
                        border: copiedForecast
                          ? "1px solid #00ff96"
                          : isDarkMode
                            ? "1px solid rgba(255, 255, 255, 0.2)"
                            : "1px solid rgba(0, 0, 0, 0.15)",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "11px",
                        color: copiedForecast
                          ? "#00ff96"
                          : isDarkMode
                            ? "#fff"
                            : "#222",
                        padding: "4px 8px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        transition: "all 0.2s",
                      }}
                      title="Скопіювати текст прогнозу"
                    >
                      <BiCheck style={{ fontSize: "14px" }} />
                      <span>{copiedForecast ? "Скопійовано!" : "Скопіювати"}</span>
                    </button>
                    <button
                      className="smart-full-report"
                      onClick={() => setIsAiModalOpen(true)}
                      style={{
                        background: "rgba(0, 238, 255, 0.15)",
                        border: "1px solid rgba(0, 238, 255, 0.5)",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "11px",
                        color: isDarkMode ? "#00eeff" : "#007a99",
                        padding: "4px 8px",
                        transition: "all 0.2s",
                      }}
                    >
                      Повний звіт
                    </button>
                  </SmartTopActions>
              </SmartTopBar>

              {/* Експертні правила без ШІ */}
                <div style={{ display: "flex", flexDirection: "column", gap: isNarrowScreen ? "4px" : "10px" }}>
                  {/* Головний статус та бейджі збігів */}
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 800,
                        color: isDarkMode ? "#00eeff" : "#0066aa",
                        marginBottom: "6px",
                      }}
                    >
                      {ruleForecast?.headline}
                    </div>
                    {ruleForecast?.allBadges && ruleForecast.allBadges.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "8px" }}>
                        {ruleForecast.allBadges.map((badge, bIdx) => (
                          <RuleBadge key={bIdx} $isDarkMode={isDarkMode}>
                            {badge.toLowerCase().includes("дощ") && <FaCloudRain style={{ marginRight: "4px" }} />}
                            {badge.toLowerCase().includes("вітер") && <BiWind style={{ marginRight: "4px" }} />}
                            {badge.toLowerCase().includes("підйом") && <BiLineChart style={{ marginRight: "4px" }} />}
                            {badge.toLowerCase().includes("спад") && <BsThermometerSnow style={{ marginRight: "4px" }} />}
                            {(badge.toLowerCase().includes("контраст") || badge.toLowerCase().includes("ніч")) && (
                              <BsMoonStarsFill style={{ marginRight: "4px" }} />
                            )}
                            <span>{badge}</span>
                          </RuleBadge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 1. Блок: Добовий хід (день / ніч) */}
                  <RuleSectionCard $isDarkMode={isDarkMode} $accent="#ffb300">
                    <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("dayNight")}>
                      <BsMoonStarsFill style={{ color: "#facc15", fontSize: "14px" }} />
                      <span>Добовий контраст (день vs ніч)</span>
                      {renderRuleChevron("dayNight")}
                    </RuleSectionHeader>
                    {isRuleSectionOpen("dayNight") && (
                      <RuleSectionBody $isDarkMode={isDarkMode}>
                        {ruleForecast?.dayNight?.message}
                      </RuleSectionBody>
                    )}
                  </RuleSectionCard>

                  {/* 2. Блок: Погодинні події, опади у 2-й половині дня, пік тепла */}
                  <RuleSectionCard $isDarkMode={isDarkMode} $accent="#00bfff">
                    <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("hourly")}>
                      <BsClockHistory style={{ color: "#00bfff", fontSize: "14px" }} />
                      <span>Динаміка доби (опади, пік тепла, вітер)</span>
                      {renderRuleChevron("hourly")}
                    </RuleSectionHeader>
                    {isRuleSectionOpen("hourly") && (
                    <RuleSectionBody $isDarkMode={isDarkMode}>
                      <div style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                        <FaCloudRain style={{ color: "#38bdf8", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                        <span>{ruleForecast?.hourlyData?.rainWindowText}</span>
                      </div>
                      <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginTop: "4px" }}>
                        <PiThermometerFill style={{ color: "#f97316", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                        <span>{ruleForecast?.hourlyData?.peakTempText}</span>
                      </div>
                      <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginTop: "4px" }}>
                        <BiWind style={{ color: "#00eeff", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                        <span>{ruleForecast?.hourlyData?.windTrendText}</span>
                      </div>
                    </RuleSectionBody>
                    )}
                  </RuleSectionCard>

                  {/* 3. Блок: Тижневий тренд (різкий підйом або спад) */}
                  <RuleSectionCard $isDarkMode={isDarkMode} $accent="#a855f7">
                    <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("weekly")}>
                      <BiLineChart style={{ color: "#a855f7", fontSize: "14px" }} />
                      <span>Тижневий тренд та динаміка</span>
                      {renderRuleChevron("weekly")}
                    </RuleSectionHeader>
                    {isRuleSectionOpen("weekly") && (
                      <RuleSectionBody $isDarkMode={isDarkMode}>
                        <div>{ruleForecast?.weeklyData?.trendText}</div>
                        <div style={{ marginTop: "4px", opacity: 0.9 }}>
                          {ruleForecast?.weeklyData?.weekSummaryText}
                        </div>
                      </RuleSectionBody>
                    )}
                  </RuleSectionCard>

                  {/* 4. Блок: Рекомендації та гардероб */}
                  {ruleForecast?.lifestyleAdvice && ruleForecast.lifestyleAdvice.length > 0 && (
                    <RuleSectionCard $isDarkMode={isDarkMode} $accent="#10b981">
                      <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("advice")}>
                        <FaLightbulb style={{ color: "#10b981", fontSize: "14px" }} />
                        <span>Поради та гардероб</span>
                        {renderRuleChevron("advice")}
                      </RuleSectionHeader>
                      {isRuleSectionOpen("advice") && (
                      <RuleSectionBody $isDarkMode={isDarkMode}>
                        {ruleForecast.lifestyleAdvice.map((adv, aIdx) => {
                          if (adv.type === "wind_warning") {
                            return (
                              <div
                                key={aIdx}
                                style={{
                                  display: "flex",
                                  gap: "8px",
                                  alignItems: "flex-start",
                                  background: isDarkMode ? "rgba(255, 179, 0, 0.15)" : "rgba(255, 179, 0, 0.12)",
                                  border: "1px solid rgba(255, 179, 0, 0.45)",
                                  borderRadius: "8px",
                                  padding: "8px 10px",
                                  marginTop: aIdx > 0 ? "5px" : 0,
                                }}
                              >
                                <FaExclamationTriangle
                                  style={{ color: "#ffb300", fontSize: "16px", flexShrink: 0, marginTop: "2px" }}
                                />
                                <div style={{ fontSize: "12px", lineHeight: "1.5" }}>
                                  <strong style={{ color: isDarkMode ? "#ffd166" : "#b45309" }}>{adv.title}</strong>{" "}
                                  <span>{adv.text}</span>
                                </div>
                              </div>
                            );
                          }

                          return (
                            <div
                              key={aIdx}
                              style={{
                                display: "flex",
                                gap: "8px",
                                alignItems: "flex-start",
                                marginTop: aIdx > 0 ? "4px" : 0,
                              }}
                            >
                              {adv.type === "cloth" && (
                                <FaShirt style={{ color: "#10b981", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "umbrella" && (
                                <FaUmbrella style={{ color: "#00bfff", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "car" && (
                                <FaCar style={{ color: "#f59e0b", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "sport" && (
                                <FaPersonWalking style={{ color: "#10b981", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "home" && (
                                <FaHouse style={{ color: "#a3a3a3", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "ice" && (
                                <GiIceCube style={{ color: "#7dd3fc", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "snow" && (
                                <FaSnowflake style={{ color: "#80d4ff", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "frost" && (
                                <BsThermometerSnow style={{ color: "#4da6ff", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              {adv.type === "fog" && (
                                <BiLowVision style={{ color: "#9fb3c8", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                              )}
                              <div>
                                <strong>{adv.title}:</strong> {adv.text}
                              </div>
                            </div>
                          );
                        })}
                      </RuleSectionBody>
                      )}
                    </RuleSectionCard>
                  )}

                  {/* 5. Блок: Атмосфера та самопочуття */}
                  {ruleForecast?.atmosphereNotes && ruleForecast.atmosphereNotes.length > 0 && (
                    <RuleSectionCard $isDarkMode={isDarkMode} $accent="#ec4899">
                      <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("atmosphere")}>
                        <FaGaugeHigh style={{ color: "#ec4899", fontSize: "14px" }} />
                        <span>Атмосферний тиск та фактори</span>
                        {renderRuleChevron("atmosphere")}
                      </RuleSectionHeader>
                      {isRuleSectionOpen("atmosphere") && (
                      <RuleSectionBody $isDarkMode={isDarkMode}>
                        {ruleForecast.atmosphereNotes.map((note, nIdx) => (
                          <div
                            key={nIdx}
                            style={{
                              display: "flex",
                              gap: "8px",
                              alignItems: "flex-start",
                              marginTop: nIdx > 0 ? "4px" : 0,
                            }}
                          >
                            {(note.type === "pressure_low" || note.type === "pressure_high") && (
                              <FaGaugeHigh style={{ color: "#ec4899", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                            )}
                            {note.type === "humidity" && (
                              <FaDroplet style={{ color: "#38bdf8", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                            )}
                            {note.type === "uvi" && (
                              <GiSunRadiations style={{ color: "#eab308", fontSize: "14px", flexShrink: 0, marginTop: "2px" }} />
                            )}
                            <div>
                              <strong>{note.title}:</strong> {note.text}
                            </div>
                          </div>
                        ))}
                      </RuleSectionBody>
                      )}
                    </RuleSectionCard>
                  )}
                </div>
            </AiSummaryBox>
          )}

        </TabContentArea>
          </MainBannerArea>

          <SideCardsColumn>
            <SideCardItem
              $active={activeTab === "current"}
              $bgImg={cityImage || card.cityImage}
              onClick={() => setActiveTab("current")}
            >
              <div style={SIDE_CARD_INNER_STYLE}>
                {/* Погодна іконка трохи більша, щоб на око була як інші;
                    від'ємний відступ не дає плитці вирости */}
                <div style={{ ...SIDE_CARD_ICON_STYLE, fontSize: "30px", margin: "-3px 0" }}>
                  <WeatherIcon item={card.current} />
                </div>
                <div style={SIDE_CARD_TEXT_STYLE}>
                  <NameCardItem $active={activeTab === "current"}>Зараз: {formatTemp(card.current?.temp)}</NameCardItem>
                  <SubNameCardItem $active={activeTab === "current"}>Відчувається: {formatTemp(card.current?.feels_like)}</SubNameCardItem>
                </div>
              </div>
            </SideCardItem>
            <SideCardItem
              $active={activeTab === "hourly"}
               $bgImg={daynight}
              onClick={() => setActiveTab("hourly")}
            >
              <div style={SIDE_CARD_INNER_STYLE}>
                <div style={{ ...SIDE_CARD_ICON_STYLE, color: "#ffb36c" }}><BiLineChart /></div>
                <div style={SIDE_CARD_TEXT_STYLE}>
                  <NameCardItem $active={activeTab === "hourly"}>Годинна(72г)</NameCardItem>
                  <SubNameCardItem $active={activeTab === "hourly"}>Детально 72г, далі до 7 днів</SubNameCardItem>
                </div>
              </div>
            </SideCardItem>

            <SideCardItem
              $active={activeTab === "daily"}
              onClick={() => setActiveTab("daily")}
              $bgImg={daysthunders}
            >
              <div style={SIDE_CARD_INNER_STYLE}>
                <div style={{ ...SIDE_CARD_ICON_STYLE, color: "#ff1493" }}><FaCalendarPlus /></div>
                <div style={SIDE_CARD_TEXT_STYLE}>
                  <NameCardItem $active={activeTab === "daily"}>Прогноз на 16 днів</NameCardItem>
                  <SubNameCardItem $active={activeTab === "daily"}>Бундючий графік</SubNameCardItem>
                </div>
              </div>
            </SideCardItem>

            <SideCardItem
              $active={activeTab === "ai"}
              $bgImg="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop"
              onClick={() => setActiveTab("ai")}
            >
              <div style={SIDE_CARD_INNER_STYLE}>
                <div style={{ ...SIDE_CARD_ICON_STYLE, color: "#00eeff" }}>
                  <BiLineChart />
                </div>
                <div style={SIDE_CARD_TEXT_STYLE}>
                  <NameCardItem $active={activeTab === "ai"}>
                    Смарт-прогноз
                  </NameCardItem>
                  <SubNameCardItem $active={activeTab === "ai"}>
                    Експертні правила
                  </SubNameCardItem>
                </div>
              </div>
            </SideCardItem>

            {/* Налаштування — відкриває те саме меню, що й шестерня вгорі */}
            <SideCardItem
              $active={isDropdownOpen && !isDropdownClosing}
              role="button"
              aria-label="Налаштування картки"
              onClick={() => {
                if (isDropdownOpen) handleCloseDropdown();
                else setIsDropdownOpen(true);
              }}
            >
              <SettingsTileContent
                active={isDropdownOpen && !isDropdownClosing}
                steps={[
                  {
                    Icon: MdStraighten,
                    color: "#ffb36c",
                    text: `Одиниці: ${tempLabel(units.temp)} · ${windLabel(units.wind)}`,
                  },
                  { Icon: BiImageAlt, color: "#7dd3fc", text: "Змінити фон" },
                  { Icon: FaCalendarPlus, color: "#ff1493", text: "Свої дати й свята" },
                  { Icon: BiEdit, color: "#a3e635", text: "Змінити назву" },
                  {
                    Icon: cardAlertsOn ? MdNotificationsActive : MdNotificationsOff,
                    color: "#facc15",
                    text: `Сповіщення: ${cardAlertsOn ? "увімк." : "вимк."}`,
                  },
                ]}
              />
            </SideCardItem>

            {/* Сховати/показати бокову панель міст (вона є лише коли карток більше однієї) */}
            {totalCards > 1 && (
              <SideCardItem
                $active={!isCitySidebarHidden}
                role="button"
                aria-pressed={!isCitySidebarHidden}
                aria-label={isCitySidebarHidden ? "Показати панель міст" : "Сховати панель міст"}
                onClick={() =>
                  setPref(CITY_SIDEBAR_HIDDEN_KEY, isCitySidebarHidden ? "false" : "true")
                }
              >
                <div style={SIDE_CARD_INNER_STYLE}>
                  <div style={{ ...SIDE_CARD_ICON_STYLE, color: "#fc7a00" }}>
                    <BiSidebar />
                  </div>
                  <div style={SIDE_CARD_TEXT_STYLE}>
                    <NameCardItem $active={!isCitySidebarHidden}>
                      {isCitySidebarHidden ? "Показати панель" : "Сховати панель"}
                    </NameCardItem>
                    <SubNameCardItem $active={!isCitySidebarHidden}>
                      Список міст зліва
                    </SubNameCardItem>
                  </div>
                </div>
              </SideCardItem>
            )}
          </SideCardsColumn>
        </DesktopLayoutWrapper>
      </WeatherCard>

      {isAiModalOpen && (
        <ForecastReportModal
          ruleForecast={ruleForecast}
          forecastTimeString={forecastTimeString}
          isDarkMode={isDarkMode}
          onClose={() => setIsAiModalOpen(false)}
        />
      )}


      {isCustomDatesModalOpen && (
        <CustomDatesModal
          isDarkMode={isDarkMode}
          currentCardId={card.id}
          onClose={() => setIsCustomDatesModalOpen(false)}
        />
      )}

      {styleModalChart && (
        <ChartStyleModal
          title={styleModalChart === "hourly" ? "Стиль ліній: погодинний графік" : "Стиль ліній: графік на 16 днів"}
          lines={
            styleModalChart === "hourly"
              ? [
                  { key: "temp", label: "Температура", color: "#ffb36c", icon: <BsThermometerSun /> },
                  { key: "right", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon, autoFill: rightMetric === "precip", wind: rightMetric === "wind" },
                ]
              : [
                  { key: "day", label: "День", color: "#ffb36c", icon: <FaSun /> },
                  { key: "night", label: "Ніч", color: "#ff1493", icon: <BsMoonStarsFill /> },
                  { key: "right", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon, wind: rightMetric === "wind" },
                  { key: "trendDay", label: "Тренд дня", color: "#ffb36c", icon: <BiTrendingUp />, trend: true },
                  { key: "trendNight", label: "Тренд ночі", color: "#ff1493", icon: <BiTrendingUp />, trend: true },
                ]
          }
          styles={lineStyles[styleModalChart]}
          onChange={(lineKey, patch) => changeLineStyle(styleModalChart, lineKey, patch)}
          onApplyAll={(patch) => applyLineStyleToAll(styleModalChart, patch)}
          onReset={() => resetLineStyles(styleModalChart)}
          allCards={globalLineStyles}
          onToggleAllCards={toggleGlobalLineStyles}
          isDarkMode={isDarkMode}
          onClose={() => setStyleModalChart(null)}
        />
      )}

      {isUnitsModalOpen && (
        <UnitsModal
          units={units}
          onChange={changeUnits}
          allCards={unitsGlobal}
          onToggleAllCards={toggleUnitsGlobal}
          isDarkMode={isDarkMode}
          onClose={() => setIsUnitsModalOpen(false)}
        />
      )}

      {isCardSettingsOpen && (
        <CardSettingsModal
          isDarkMode={isDarkMode}
          onClose={() => setIsCardSettingsOpen(false)}
          contentRef={(el) => { if (card.isMain && registerRef) registerRef('weatherModal', el); }}
        />
      )}

      {isBgModalOpen && (
        <WeatherBgModal
          locationName={card.locationName}
          bgMode={bgMode}
          onSelect={handleChangeBackground}
          onClose={() => setIsBgModalOpen(false)}
        />
      )}
    </div>
  );
};
export default WeatherCardComponent;
