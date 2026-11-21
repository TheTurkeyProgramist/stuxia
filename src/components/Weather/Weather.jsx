import React, { useState, useEffect, useCallback, useRef, useMemo, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { lazyWithRetry } from "../../utils/lazyWithRetry.js";
import { ModalSuspense } from "../Loader/ModalLoading.jsx";
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
  BiExitFullscreen,
  BiDownload,
  BiCheck,
  BiX,
  BiTable,
  BiGridAlt,
  BiTrendingUp,
  BiPalette,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiHistory,
  BiLowVision,
  BiVolumeFull,
  BiStopCircle,
  BiSidebar,
  BiListUl,
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
  TAB_AUTOPLAY_KEY,
  TAB_AUTOPLAY_DEFAULT,
  tabAutoplayCardKey,
  parseTabAutoplay,
  serializeTabAutoplay,
} from "../../utils/betaFeatures";
import TabAutoplayControl from "./TabAutoplayControl";
import WeatherArchive from "./WeatherArchive";
import { setPref, removePref, subscribePrefs } from "../../utils/prefsStore";
import { useAnimationsDisabled } from "../../utils/animationsPref";
import { buildForecastSpeech, getVoiceSettings, speak, stopSpeaking } from "../../utils/weatherSpeech";
import {
  removeCustomDay,
  addCustomDay,
} from "../../features/counter/Counter.js";
import { getHourlyForecastDetailGroups } from "../../utils/hourlyForecast";
import { generateRuleBasedForecast, badgeHas } from "../../utils/ruleBasedForecast";
import { ddmmFromIso, isWeekendIso, dateLocale } from "../../utils/weatherText.js";
import { DEFAULT_CARD_BG, CARD_BG_CHANGE_EVENT } from "./weatherShared";
import { getWindDirectionText, getWindDirectionShort } from "../../utils/windUtils";
import { linearTrend } from "../../utils/chartTrend";
import { DEFAULT_LINE_STYLES, DEFAULT_DIM, mergeLineStyles, lineStyleProps } from "../../utils/chartLineStyles";
import { fadePlugin } from "../../utils/chartFade";
import { syncAndroidWidget } from "../../utils/androidWidget";
import { metricGradient, metricPointColor, metricScale } from "../../utils/metricColors";
import { tempScale, tempGradient, hotOutlinePlugin, TEMP_LEGEND_GRADIENT } from "../../utils/tempColors";
import CardSettingsModal from "../Modals/CardSettingsModal";
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
// Модалки картки вантажаться лише при відкритті, а не на старті
const ChartStyleModal = lazyWithRetry(() => import("../Modals/ChartStyleModal"));
const ForecastReportModal = lazyWithRetry(() => import("../Modals/ForecastReportModal"));
const WeatherBgModal = lazyWithRetry(() => import("../Modals/WeatherBgModal"));
const CustomDatesModal = lazyWithRetry(() => import("../Modals/CustomDatesModal"));
const UnitsModal = lazyWithRetry(() => import("../Modals/UnitsModal"));
import { loadCardUnits, isUnitsEventForCard, cardUnitsKey, UNITS_GLOBAL_KEY, UNITS_USE_GLOBAL_KEY } from "../../utils/unitsStorage";
import { DEFAULT_UNITS, UNIT_GROUPS, makeFormatters, tempLabel, windLabel, pressureLabel, visibilityLabel, convertVisibility, precipLabel, convertTemp, convertWind, convertPrecip, convertPressure, convertSnow } from "../../utils/units.js";
import WeatherRows, { windCellStyle, uvCellStyle, precipCellStyle, chanceColor, tempColor } from "./WeatherRows.jsx";
import { CONSENSUS_MODEL_LABELS } from "../../utils/weatherConsensus";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import { PiThermometerFill } from "react-icons/pi"; //Нормальна температура
import { BsThermometerSnow, BsThermometerSun, BsMoonStarsFill, BsClockHistory, BsHourglassSplit, BsBuildings, BsCompass, BsStars } from "react-icons/bs"; //Холодна температура / Ніч / Астрономія
import { formatClock, getTwilightData, getDayLength, getMoonDetails, getDayLengthDiff, getScaleProgress } from "../../utils/astro";
import { isFoggy } from "../../utils/dailyAggregates";
import { AnimWind, AnimSpin, AnimHourglass, AnimTwinkle, AnimCompass, MoonPhaseIcon, AstroScale } from "./BlockAstroIcons.jsx";
import { HumidityGlass, TempThermometer, PressureGauge, VisibilityFog, UvSun, CloudWithTrend, WindArrow, getCloudTrend, getSnowStyle } from "./AnimatedWeatherIcons.jsx"; //Анімовані іконки
import { WeatherIcon, stripEmoji, ICON_HALO_FILTER } from "./WeatherConditionIcon.jsx"; //Власні іконки погоди
import DailyTips from "./DailyTips.jsx"; // Повітря, ожеледиця вранці, сніг на машині
import WeatherTurkey from "./WeatherTurkey.jsx"; //Доміно — індик-талісман, що реагує на погоду
import { BiWind } from "react-icons/bi"; //Пориви Вітру
import { GiGrassMushroom } from "react-icons/gi"; //Точка роси
import { MdOutlineSpeed, MdClose, MdStraighten, MdNotificationsActive, MdNotificationsOff, MdAutorenew, MdWbTwilight } from "react-icons/md"; //Тиск
import {
  isWeatherAlertsEnabled,
  isCardWeatherAlertsOn,
  setCardWeatherAlerts,
  isMorningBriefEnabled,
  getMorningCardId,
  setMorningCardId,
  MORNING_CARD_KEY,
  MORNING_ENABLED_KEY,
  MORNING_BRIEF_HOUR,
} from "../../utils/emergencyAlerts";
import { FaSnowflake, FaSun, FaExclamationTriangle } from "react-icons/fa"; //Іконки
import { GiSunRadiations, GiSnowing, GiWaterRecycling, GiIceCube } from "react-icons/gi";//Сонячна радіація
import { Tooltip } from "../Tooltip/Tooltip";
import { createChartWeatherIcon, getChartIconKey, createChartWindArrow, valueLabelsPlugin } from "../../utils/chartWeatherIcon";

import i18n from "../../i18n/i18n.js";
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
          return i18n.t("newsWeather.Weather.dni", { d: d, v1: String(h).padStart(2,'0'), v2: String(m).padStart(2,'0'), v3: String(s).padStart(2,'0') });
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
            {ev.reason}: {diffToStart > 0 ? i18n.t("newsWeather.Weather.doPodii", { v0: formatDiff(diffToStart) }) : i18n.t("newsWeather.Weather.podiiaTryvatymeShche", { v0: formatDiff(diffToEnd) })}
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

// AihelpTitle, DEFAULT_CARD_BG, CARD_BG_CHANGE_EVENT — у weatherShared.js (App бере їх
// без завантаження всієї картки); тут лише реекспорт для сумісності
export { AihelpTitle, DEFAULT_CARD_BG, CARD_BG_CHANGE_EVENT } from "./weatherShared";

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
    background: ${(props) => (props.$isDarkMode === false ? "#e5e7eb" : "#333")};
    color: #fff;
    border: none;
    padding: 3px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    transition: background 0.2s ease;
    &:hover {
      background: ${(props) => (props.$isDarkMode === false ? "#d1d5db" : "#555")};
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
    /* Планшет: вузька права колонка, щоб графіку лишалось більше місця */
    grid-template-columns: minmax(0, 1fr) 150px;
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
  /* Власний вертикальний скролбар стоїть на темному фото-фоні картки — завжди білий.
     Вкладеним (горизонтальні в білих картках) — колір під тему з App.css */
  scrollbar-color: rgba(255, 255, 255, 0.85) transparent;
  & > * {
    scrollbar-color: var(--inner-scroll-thumb) transparent;
  }
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
    /* Стрілка гортання ◀ висить над лівим краєм картки — відсуваємо вміст, щоб не закривала текст */
    ${(props) => props.$arrowsGap && "padding-left: 34px;"}
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
        <NameCardItem $active={active}>{i18n.t("newsWeather.Weather.nalashtuvannia")}</NameCardItem>
        <SubNameCardItem $active={active}>
          <SettingsCycleText key={stepIndex}>{step ? step.text : i18n.t("newsWeather.Weather.usiNalashtuvanniaKartky")}</SettingsCycleText>
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
/* Планшет: колонка вузька (150px) — дрібніший шрифт */
@media (min-width: 768px) and (max-width: 1023px) {
  font-size: 13px;
}
`;
const SubNameCardItem = styled.div`
font-size: 13px;
line-height: 1.2;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 100%;
color: ${(props) => (props.$active ? "#00eeff" : "#fff")};
@media (min-width: 768px) and (max-width: 1023px) {
  font-size: 11px;
}
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
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 4px 6px;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => (props.$active ? "#00eeff" : "rgba(0, 238, 255, 0.6)")};
  }
`;

const DesktopTwoRowIndicators = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(8, minmax(0, 1fr));
  gap: 2px;
  width: 100%;
  height: 84%;
  padding: 1px;
  box-sizing: border-box;
  @media (max-width: 767px) {
    height: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    gap: 3px;
    padding: 4px;
    /* Останній тайл заповнює порожні клітинки свого рядка (13–15 тайлів у 4 колонках) */
    & > :nth-child(4n + 1):last-child { grid-column: span 4; }
    & > :nth-child(4n + 2):last-child { grid-column: span 3; }
    & > :nth-child(4n + 3):last-child { grid-column: span 2; }
  }
  @media (max-width: 767px) {
    & > :nth-child(odd):last-child { grid-column: span 2; }
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
  overflow: hidden;
`;

const IconBox = styled.div`
  font-size: ${props => props.$size || "24px"};
  line-height: ${props => props.$lh || "normal"};
  color: ${props => props.$color || "inherit"};
  opacity: ${props => props.$opacity ?? 1};
  transform: ${props => props.$rotate ? `rotate(${props.$rotate}deg)` : "none"};
  display: ${props => props.$rotate ? "inline-block" : "block"};
  @media (min-width: 1200px) {
    font-size: 40px;
  }
       @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const TextContent = styled.div`
  margin-top: ${props => props.$mt || "5px"};
  font-size: ${props => props.$size || "12px"};
  font-weight: ${props => props.$weight || "bold"};
  text-align: center;
  line-height: ${props => props.$lh || "normal"};
    @media (min-width: 1200px) {
    font-size: 14px;
  }
       @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const SubText = styled.div`
  font-size: ${props => props.$size || "10px"};
  font-weight: ${props => props.$weight || "normal"};
  opacity: ${props => props.$opacity || 0.8};
   @media (min-width: 1200px) {
    font-size: 12px;
  }
     @media (min-width: 768px) {
    font-size: 10px;
  }
`;
const MobileTabBar = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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

// Кнопки дій графіка: стиль, цифри, тренд, повний екран, скріншот.
// aria-pressed="true" — увімкнений перемикач (суцільна блакитна заливка).
// Світла тема — білі, як чипи легенди («Температура», «Вітер»); темна — темне скло.
const chartBtnTheme = (dark) =>
  dark
    ? {
        bg: "rgba(8, 14, 22, 0.55)",
        border: "rgba(0, 190, 235, 0.45)",
        color: "#5fd4ff",
        hoverBg: "rgba(0, 190, 235, 0.18)",
        hoverBorder: "rgba(0, 190, 235, 0.95)",
        hoverColor: "#a6ecff",
        offColor: "rgba(95, 212, 255, 0.6)",
        glow: "rgba(0, 191, 255, 0.45)",
      }
    : {
        bg: "#ffffff",
        border: "rgba(0, 150, 210, 0.55)",
        color: "#0778b0",
        hoverBg: "#e8f6fd",
        hoverBorder: "#0aa0e0",
        hoverColor: "#05628f",
        offColor: "rgba(7, 120, 176, 0.55)",
        glow: "rgba(0, 150, 210, 0.3)",
      };

const ChartActionBtn = styled.button`
  --btn-bg: ${(p) => chartBtnTheme(p.$isDarkMode).bg};
  --btn-border: ${(p) => chartBtnTheme(p.$isDarkMode).border};
  --btn-color: ${(p) => chartBtnTheme(p.$isDarkMode).color};
  --btn-hover-bg: ${(p) => chartBtnTheme(p.$isDarkMode).hoverBg};
  --btn-hover-border: ${(p) => chartBtnTheme(p.$isDarkMode).hoverBorder};
  --btn-hover-color: ${(p) => chartBtnTheme(p.$isDarkMode).hoverColor};
  --btn-off-color: ${(p) => chartBtnTheme(p.$isDarkMode).offColor};
  --btn-glow: ${(p) => chartBtnTheme(p.$isDarkMode).glow};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  /* Висота як у підказки вітру (WindCompassHint) — один рівень у рядку легенди */
  box-sizing: border-box;
  height: 34px;
  min-width: 34px;
  padding: ${(props) => (props.$wide ? "0 8px" : "0")};
  border: 1px solid var(--btn-border);
  border-radius: 8px;
  background: var(--btn-bg);
  color: var(--btn-color);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.3px;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease, transform 0.1s ease;

  svg {
    width: 17px;
    height: 17px;
    max-width: none;
    flex: none;
  }

  &:hover {
    background: var(--btn-hover-bg);
    border-color: var(--btn-hover-border);
    color: var(--btn-hover-color);
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.9);
  }

  /* вимкнений перемикач — приглушений, щоб різниця з увімкненим була очевидна */
  &[aria-pressed="false"] {
    color: var(--btn-off-color);
  }

  &[aria-pressed="true"] {
    background: #00bfff;
    border-color: #00bfff;
    color: #04202b;
    box-shadow: 0 0 10px var(--btn-glow);
  }

  &[aria-pressed="true"]:hover {
    background: #3fd0ff;
    border-color: #3fd0ff;
  }
`;

const AiSummaryBox = styled(motion.div)`
  /* Під тему: темна — чорний фон, світла — білий; рамка нейтральна */
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 0.92)")};
  border: 2px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)")};
  padding: 8px;
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

/* Колонка секцій смарт-прогнозу. На телефоні «розчиняється» (display: contents),
   і блоки йдуть одним списком; на планшеті/ПК — окремий стовпчик, де останній
   блок розтягується до низу, щоб обидві колонки закінчувались на одному рівні */
const RuleSectionsColumn = styled.div`
  display: contents;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    & > :last-child {
      flex: 1 1 auto;
    }
  }
`;

/* Список секцій смарт-прогнозу: телефон — одна колонка, планшет/ПК — дві явні
   колонки однакової висоти (без порожнечі під коротшою). Усе, що не колонка
   (заголовок із бейджами), — на всю ширину */
const RuleSectionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
    gap: 6px;
    & > :not(${RuleSectionsColumn}) {
      grid-column: 1 / -1;
    }
  }
`;

const RuleSectionCard = styled.div`
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.06)" : "rgba(245, 248, 252, 0.85)"};
  border: 1px solid ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
  border-left: 3.5px solid ${(props) => props.$accent || "#00eeff"};
  border-radius: 8px;
  padding: 7px 9px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media (max-width: 767px) {
    padding: 6px 8px;
    margin-bottom: 0;
    /* На телефоні зберігаємо початковий порядок блоків */
    order: ${(props) => (props.$mobileLast ? 1 : 0)};
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
  /* Однакова висота для кнопок-іконок і кнопок із текстом («Усі», «2 дні») */
  height: 28px;
  box-sizing: border-box;
  line-height: 1;
  padding: 0 12px;
  font-size: 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;
  box-shadow: ${(props) => (props.$active ? "0 2px 8px rgba(138, 43, 226, 0.4)" : "none")};
`;

// Вибір дня погодинного прогнозу — у парі з перемикачем вигляду (та сама висота й акцент)
const DaySelect = styled.select`
  flex: 1 1 150px;
  min-width: 0;
  max-width: 240px;
  height: 33px;
  box-sizing: border-box;
  padding: 0 6px 0 3px;
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.2)")};
  background-color: ${(p) => (p.$isDarkMode ? "rgba(20, 20, 28, 0.85)" : "rgba(255, 255, 255, 0.92)")};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a970ff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  color: ${(p) => (p.$isDarkMode ? "#fff" : "#111")};
  font-size: 13px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #a970ff;
  }
  &:focus-visible {
    border-color: #8a2be2;
    box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.35);
  }
  option {
    color: #000;
    background: #fff;
  }
`;

/* Чекбокс-«пігулка» (напр. «Показати вчора») — висота й акцент як у вибору дня та перемикача вигляду */
const PillCheckbox = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  box-sizing: border-box;
  padding: 0 12px 0 8px;
  border: 1px solid
    ${(p) => (p.$checked ? "#a970ff" : p.$isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.2)")};
  background: ${(p) =>
    p.$checked
      ? "linear-gradient(135deg, rgba(138, 43, 226, 0.35), rgba(138, 43, 226, 0.12))"
      : p.$isDarkMode
        ? "rgba(20, 20, 28, 0.85)"
        : "rgba(255, 255, 255, 0.92)"};
  color: ${(p) => (p.$isDarkMode ? "#fff" : "#111")};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #a970ff;
  }
  &:focus-within {
    box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.35);
  }

  /* Справжній чекбокс — невидимий, але доступний з клавіатури */
  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    pointer-events: none;
  }

  .box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    border: 2px solid ${(p) => (p.$checked ? "#a970ff" : "rgba(160, 160, 160, 0.8)")};
    background: ${(p) => (p.$checked ? "#8a2be2" : "transparent")};
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .box svg {
    width: 12px;
    height: 12px;
    fill: none;
    stroke: #fff;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16;
    stroke-dashoffset: ${(p) => (p.$checked ? 0 : 16)};
    transition: stroke-dashoffset 0.25s ease;
  }
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
  /* Пункти беруть колір і межі звідси — меню завжди знає тему */
  color: ${(props) => (props.$isDarkMode ? "#f1eeee" : "#1f2937")};
  --settings-item-border: ${(props) => (props.$isDarkMode ? "#020202" : "#e5e7eb")};
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
  /* Ряди за висотою вмісту (а не всі як найвищий), вільне місце ділиться між ними —
     так усі пункти влазять без прокрутки */
  grid-auto-rows: auto;
  align-content: stretch;
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
/* Іконки пунктів меню: «вистрибують» при відкритті й погойдуються при наведенні.
   Вимикаються разом з усіма анімаціями (html[data-animations-off]) і при reduced-motion */
const menuIconPop = keyframes`
  0% { transform: scale(0.4) rotate(-25deg); opacity: 0; }
  65% { transform: scale(1.15) rotate(6deg); opacity: 1; }
  100% { transform: scale(1) rotate(0); opacity: 1; }
`;
const menuIconWiggle = keyframes`
  0%, 100% { transform: rotate(0) scale(1); }
  25% { transform: rotate(-12deg) scale(1.08); }
  75% { transform: rotate(12deg) scale(1.08); }
`;
const iconSpin = keyframes`
  to { transform: rotate(360deg); }
`;

const SettingsDropdownItem = styled.button`
 text-align: center;
 padding: 4px 4px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  background: transparent;
  font-size: 16px;
 gap: 2px;
  color: inherit;
  border: 1px solid var(--settings-item-border, #f1eeee);
  @media (max-width: 767px) {
    padding: 4px 4px;
    gap: 2px;
    font-size: 14px;
    line-height: 1.2;
  }
  @media (min-width: 768px) {
     /* Компактно: усі пункти мають влізти в меню без прокрутки */
     padding: 2px 8px;
     gap: 1px;
     font-size: 14px;
     line-height: 1.2;
  }
svg {
    font-size: 24px;
    flex-shrink: 0;
    animation: ${menuIconPop} 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2) 0.15s both;
   @media (max-width: 767px) {
    font-size: 20px;
  }
   @media (min-width: 768px) {
    font-size: 20px;
  }
}
  &:hover svg {
    animation: ${menuIconWiggle} 0.5s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    svg, &:hover svg { animation: none; }
  }
`;

/* Маленька кнопка-«пігулка» в пункті меню «Стиль графіка» (Годинний / 16 днів) */
const ChartStyleChip = styled.button`
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid rgba(192, 132, 252, 0.6);
  background: rgba(192, 132, 252, 0.12);
  color: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus-visible {
    background: rgba(192, 132, 252, 0.3);
    border-color: #c084fc;
    outline: none;
  }
`;

/* Іконка автоперемикання крутиться, поки воно увімкнене: що частіше — то швидше */
const SpinningIcon = styled.span`
  display: inline-flex;
  ${(p) =>
    p.$on &&
    css`
      animation: ${iconSpin} ${Math.min(12, Math.max(2, p.$seconds / 10))}s linear infinite;
    `}
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Підпис «Одиниці виміру»: по черзі показує, що в яких одиницях (як плитка в правій панелі),
   поточна одиниця виділена, поруч — інші можливі варіанти.
   items: [{ title, current, others: [] }] */
const UNITS_CYCLE_MS = 2600;
const UNIT_SHORT_TITLES = {
  get temp() { return i18n.t("newsWeather.Weather.temperatura"); },
  get wind() { return i18n.t("newsWeather.Weather.viter"); },
  get pressure() { return i18n.t("newsWeather.Weather.tysk"); },
  get distance() { return i18n.t("newsWeather.Weather.vidstan"); },
  get precip() { return i18n.t("newsWeather.Weather.opady"); },
};
const UnitsCycleHint = ({ items }) => {
  const animationsDisabled = useAnimationsDisabled();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (animationsDisabled || items.length < 2) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), UNITS_CYCLE_MS);
    return () => clearInterval(timer);
  }, [animationsDisabled, items.length]);

  if (animationsDisabled) {
    return <SettingsItemHint>{items.map((it) => it.current).join(" · ")}</SettingsItemHint>;
  }
  const item = items[index % items.length];
  return (
    <SettingsItemHint aria-live="off">
      <SettingsCycleText key={index}>
        {item.title}: <b style={{ color: "#ffb36c", fontWeight: 700 }}>{item.current}</b>
        {item.others.length > 0 && <> {i18n.t("newsWeather.Weather.takozh")} {item.others.join(", ")}</>}
      </SettingsCycleText>
    </SettingsItemHint>
  );
};

/* Дрібне пояснення під назвою пункту налаштувань */
const SettingsItemHint = styled.span`
  font-size: 11px;
  line-height: 1.3;
  font-weight: 500;
  /* Розбірливіше: майже повна непрозорість; колір — від пункту (GPS зелений/червоний тощо) */
  opacity: 0.88;
  @media (max-width: 767px) {
    font-size: 11px;
  }
  @media (min-width: 768px) {
    font-size: 11.5px;
    line-height: 1.2;
  }
`;
/* Підказка під назвою головної картки, коли показано Київ замість GPS-локації */
const LocationHintText = styled.p`
  display: flex;
  align-items: center;
  gap: 3px;
  margin: 2px 0 0;
  font-size: 11px;
  color: ${(props) => (props.$isDarkMode ? "#fcfcfc" : "#555")};
  opacity: 0.85;
  svg {
    font-size: 13px;
    flex-shrink: 0;
  }
`;
const LocationHint = ({ isDarkMode }) => (
  <LocationHintText $isDarkMode={isDarkMode}>
    {i18n.t("newsWeather.Weather.natysnit")} <BiCog aria-label={i18n.t("newsWeather.Weather.shesterniu")} /> {i18n.t("newsWeather.Weather.dliaSvoieiLokatsii")}
  </LocationHintText>
);
/* Плитки блокового режиму (годинний / 16 днів) */
const BlockStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3px;
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
  gap: 1px;
  min-width: 0;
  min-height: 44px;
  padding: 3px 3px;
  box-sizing: border-box;
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  svg {
    font-size: 19px;
    flex-shrink: 0;
    margin-bottom: 1px;
  }
  /* Світла тема: темний ореол навколо іконки (перший дочірній) — бліді кольори
     (сніг, хмарність, видимість) інакше зливаються з білим фоном */
  & > :first-child {
    filter: ${(p) => (p.$halo ? ICON_HALO_FILTER : "none")};
  }
`;
const BlockStatLabel = styled.div`
  font-size: 10px;
  line-height: 1.15;
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
// Блоки 16 днів: "all" — усі в ряд, "2" — по 2 дні на сторінку
const DAILY_BLOCKS_GAP = 10; // px між картками днів (і годин)
const HOURLY_BLOCKS_PAGING = 2; // блоки годин гортаються парами, як дні

// Панель гортання блоків 16 днів: ‹ 15.11 – 16.11 · 1 з 8 ›
const DailyPager = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => (p.$isDarkMode ? "#fff" : "#1a1a1a")};

  small {
    font-weight: 500;
    opacity: 0.7;
  }

  /* Підпис пари днів — кнопка-список (невидимий select поверх) */
  .jump {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    min-width: 0;
    padding: 4px 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s ease;
    > svg {
      flex-shrink: 0;
      font-size: 16px;
      opacity: 0.8;
    }
    &:hover {
      background: ${(p) => (p.$isDarkMode ? "rgba(138, 43, 226, 0.3)" : "rgba(138, 43, 226, 0.12)")};
    }
    &:focus-within {
      outline: 2px solid #a970ff;
      outline-offset: 1px;
    }
    select {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      font-size: 14px;
      /* Випадний список — під тему. Колір і фон задаємо ЯВНО і для select, і для option:
         інакше пункти успадковують білий текст панелі й зливаються з білим списком */
      color-scheme: ${(p) => (p.$isDarkMode ? "dark" : "light")};
      color: ${(p) => (p.$isDarkMode ? "#ffffff" : "#1a1a1a")};
      background: ${(p) => (p.$isDarkMode ? "#1e1e2a" : "#ffffff")};
    }
    option {
      color: ${(p) => (p.$isDarkMode ? "#ffffff" : "#1a1a1a")};
      background: ${(p) => (p.$isDarkMode ? "#1e1e2a" : "#ffffff")};
      font-weight: 600;
    }
    option:checked {
      color: #ffffff;
      background: #8a2be2;
    }
  }

  button {
    display: inline-grid;
    place-items: center;
    width: 34px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.15)")};
    background: ${(p) => (p.$isDarkMode ? "rgba(20, 20, 28, 0.85)" : "rgba(255, 255, 255, 0.95)")};
    color: inherit;
    font-size: 20px;
    cursor: pointer;
    transition: border-color 0.15s ease, background 0.15s ease;

    &:hover:not(:disabled) {
      border-color: #a970ff;
      background: ${(p) => (p.$isDarkMode ? "rgba(138, 43, 226, 0.3)" : "rgba(138, 43, 226, 0.12)")};
    }
    &:focus-visible {
      outline: 2px solid #a970ff;
      outline-offset: 1px;
    }
    &:disabled {
      opacity: 0.35;
      cursor: default;
    }
    svg {
      max-width: none;
    }
    /* «‹ Вчора» — кнопка з підписом */
    &.wide {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      width: auto;
      padding: 0 10px 0 4px;
      font-size: 13px;
      font-weight: 700;
      svg {
        font-size: 20px;
      }
    }
  }
`;

// Плагіни Chart.js для основних графіків (стабільний масив — щоб графік не перестворювався)
const CHART_PLUGINS = [valueLabelsPlugin, hotOutlinePlugin, fadePlugin];

// Підказка над графіком: як читати стрілки вітру й підписи біля точок
// Підказка-компас стоїть у рядку легенди між кнопками, тож висоту графіка не забирає
/** Чи перенісся flex-рядок на 2+ ряди: останній дочірній елемент нижче за перший.
    Повертає [callback-ref для контейнера, wrapped] */
const useFlexWrapped = () => {
  const [wrapped, setWrapped] = useState(false);
  const observerRef = useRef(null);
  const ref = useCallback((el) => {
    observerRef.current?.disconnect();
    observerRef.current = null;
    if (!el || typeof ResizeObserver === "undefined") return;
    const check = () => {
      const kids = el.children;
      if (kids.length < 2) return;
      setWrapped(kids[kids.length - 1].offsetTop > kids[0].offsetTop + 4);
    };
    const observer = new ResizeObserver(check);
    observer.observe(el);
    // Діти теж: перенос міг статися через зміну вмісту (бейдж тренду, шрифти)
    Array.from(el.children).forEach((child) => observer.observe(child));
    observerRef.current = observer;
    check();
  }, []);
  // Окремого useEffect-очищення не треба: при розмонтуванні React сам
  // викликає ref(null) — там і disconnect.
  return [ref, wrapped];
};

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
        // Притиснута вправо, до кнопок дій
        margin: "0 0 0 auto",
        padding: "0 8px 0 1px",
        overflow: "hidden",
        borderRadius: "5px",
        background: isDarkMode ? "rgba(8, 12, 20, 0.75)" : "rgba(255, 255, 255, 0.85)",
        border: "1px solid rgba(56, 189, 248, 0.35)",
        fontSize: "11px",
        color: muted,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 54 54" role="img" aria-label={i18n.t("newsWeather.Weather.kompasPivnichUhoriPivden")} style={{ flexShrink: 0 }}>
        <circle cx="27" cy="27" r="16" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.2" />
        <path d="M27 13 L30 27 L27 24 L24 27 Z" fill="#ef4444" />
        <path d="M27 41 L30 27 L27 30 L24 27 Z" fill={isDarkMode ? "#cbd5e1" : "#64748b"} />
        <circle cx="27" cy="27" r="1.6" fill={text} />
        <g fontSize="11.5" fontWeight="800" fill={text} textAnchor="middle" fontFamily="system-ui, sans-serif">
          <text x="27" y="10">{i18n.t("newsWeather.Weather.pn")}</text>
          <text x="27" y="53.5">{i18n.t("newsWeather.Weather.pd")}</text>
          <text x="46.5" y="31">{i18n.t("newsWeather.Weather.skh")}</text>
          <text x="7.5" y="31">{i18n.t("newsWeather.Weather.zkh")}</text>
        </g>
      </svg>
      {/* Коли тісно — текст переноситься на 2 рядки (вміщаються у 34px), а не обрізається */}
      <div style={{ minWidth: 0, lineHeight: 1.15, overflow: "hidden" }}>
        <span
          style={{
            color: text,
            fontWeight: 700,
            fontSize: "11px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {i18n.t("newsWeather.Weather.strilkaPokazuieKudyDme")}
        </span>
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
      // Голоси українські — опис погоди беремо українською, тож її переклад має бути завантажений
      await i18n.loadLanguages("uk");
      await speak(buildForecastSpeech(card), {
        // Перший запуск Piper качає модель — показуємо хід завантаження
        onProgress: ({ loaded, total }) => {
          if (engine !== "piper" || !total || loaded >= total) return;
          progressToastShown = true;
          toast.loading(i18n.t("newsWeather.Weather.zavantazhenniaHolosu", { Math: Math.round((loaded / total) * 100) }), {
            id: "voice-model-download",
          });
        },
      });
    } catch (err) {
      console.error("Forecast speech failed:", err);
      toast.error(i18n.t("newsWeather.Weather.neVdalosiaOzvuchytyProhnoz"), {
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
  // Картка на комп'ютері має фіксовану висоту (542px): 295px — щоб під графіком вміщались
  // скролбар і шкала кольорів, без бокового скролбара картки
  const defaultChartHeight = isNarrowScreen ? "250px" : "295px";
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
  // Чи є в даних учорашній день (інакше перемикач «вчора» не показуємо)
  const hasPastDay = (card.daily16 || card.daily || []).some(isPastDay);

  // Блоки 16 днів: «all» — усі в ряд із прокруткою, «2» — по 2 дні на сторінку з гортанням.
  // Вибір спільний для всіх карток і запам'ятовується
  // Блоки 16 днів — завжди «по 2 дні»: усі дні в ряду (можна гортати скролом),
  // а стрілки ‹ › швидко перескакують на наступну пару
  const dailyBlocksPaging = 2;
  const [dailyBlocksPage, setDailyBlocksPage] = useState(0);
  const dailyBlocksPages = dailyBlocksPaging ? Math.max(1, Math.ceil(dailyList.length / dailyBlocksPaging)) : 1;
  const safeDailyBlocksPage = Math.min(dailyBlocksPage, dailyBlocksPages - 1);
  const dailyBlocksScrollRef = useRef(null);
  const dailyBlocksScrollRaf = useRef(0);

  // Ширина однієї «сторінки» (пари карток із проміжками) у пікселях прокрутки
  const getDailyBlocksStep = () => {
    const firstCard = dailyBlocksScrollRef.current?.firstElementChild?.firstElementChild;
    return firstCard ? (firstCard.offsetWidth + DAILY_BLOCKS_GAP) * dailyBlocksPaging : 0;
  };

  // Стрілки: плавно прокручуємо до потрібної пари днів
  const goToDailyBlocksPage = (page) => {
    const target = Math.max(0, Math.min(page, dailyBlocksPages - 1));
    setDailyBlocksPage(target);
    const el = dailyBlocksScrollRef.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: target * getDailyBlocksStep(), behavior: reduce ? "auto" : "smooth" });
  };

  // Прокрутка мишею/пальцем — номер сторінки й дати в підписі встигають за нею
  const handleDailyBlocksScroll = () => {
    cancelAnimationFrame(dailyBlocksScrollRaf.current);
    dailyBlocksScrollRaf.current = requestAnimationFrame(() => {
      const el = dailyBlocksScrollRef.current;
      const step = getDailyBlocksStep();
      if (!el || !step) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
      setDailyBlocksPage(atEnd ? dailyBlocksPages - 1 : Math.round(el.scrollLeft / step));
    });
  };

  // Перемкнули режим або вчорашній день — починаємо з першої пари
  useEffect(() => {
    setDailyBlocksPage(0);
    dailyBlocksScrollRef.current?.scrollTo({ left: 0 });
  }, [dailyBlocksPaging, showPastDay]);
  useEffect(() => () => cancelAnimationFrame(dailyBlocksScrollRaf.current), []);

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
  // Ранковий прогноз о 7:00: для якої картки (обрана в меню ⚙, інакше перша в списку)
  const [morningPrefs, setMorningPrefs] = useState(() => ({
    on: isMorningBriefEnabled(),
    cardId: getMorningCardId(),
  }));
  useEffect(
    () =>
      subscribePrefs((e) => {
        const key = e.detail?.key;
        if (key === MORNING_CARD_KEY || key === MORNING_ENABLED_KEY) {
          setMorningPrefs({ on: isMorningBriefEnabled(), cardId: getMorningCardId() });
        }
      }),
    [],
  );
  const isMorningCard = morningPrefs.cardId ? morningPrefs.cardId === String(card.id) : index === 0;
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

  // Android-віджет показує головне місто в одиницях температури з налаштувань
  useEffect(() => {
    if (!card.isMain) return;
    syncAndroidWidget({ lat: card.lat, lon: card.lon, name: card.locationName, unit });
  }, [card.isMain, card.lat, card.lon, card.locationName, unit]);

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
  // Чи шапка 16-денного графіка в 2 ряди (тоді кнопка тренду — у рядку легенди)
  const [dailyHeaderRef, dailyHeaderWrapped] = useFlexWrapped();
  const [dailyFsHeaderRef, dailyFsHeaderWrapped] = useFlexWrapped();
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
    wind: { label: i18n.t("newsWeather.Weather.viter"), axis: fmt.windAxis, color: "#0099ff", rgb: "0, 153, 255", icon: <BiWind /> },
    uv: { label: i18n.t("newsWeather.Weather.ufIndeks"), axis: i18n.t("newsWeather.Weather.ufIndeks"), color: "#a855f7", rgb: "168, 85, 247", icon: <FaSun /> },
    precip: { label: i18n.t("newsWeather.Weather.opady"), axis: i18n.t("newsWeather.Weather.opady2"), color: "#14b8a6", rgb: "20, 184, 166", icon: <FaCloudRain /> },
    clouds: { label: i18n.t("newsWeather.Weather.khmarnist"), axis: i18n.t("newsWeather.Weather.khmarnist2"), color: "#9ca3af", rgb: "156, 163, 175", icon: <FaCloud /> },
    visibility: {
      label: i18n.t("newsWeather.Weather.vydymist"),
      axis: i18n.t("newsWeather.Weather.vydymist2", { v0: visibilityLabel(units.distance) }),
      color: "#7dd3fc",
      rgb: "125, 211, 252",
      icon: <BiLowVision />,
    },
  };
  const rightMeta = RIGHT_METRICS[rightMetric];
  // Колір правої лінії за значенням (небезпека/інтенсивність) — можна вимкнути в стилі лінії
  const rightConv =
    rightMetric === "wind"
      ? (v) => fmt.windValue(v)
      : rightMetric === "visibility"
        ? (v) => convertVisibility(v, units.distance)
        : null;
  const rightBorder = (style, alpha, plain) =>
    style?.dangerColor !== false ? metricGradient(rightMetric, rightConv, alpha, plain) : plain;
  const rightPoint = (style, v, alpha, plain) =>
    style?.dangerColor !== false ? metricPointColor(rightMetric, rightConv, v, alpha, plain) : plain;
  // Шкала «значення → колір» під графіком: підказує, що означає колір лінії
  const renderScaleBar = (title, stops, suffix = "") => {
    if (!stops.length) return null;
    const lo = stops[0].v;
    const hi = stops[stops.length - 1].v;
    const pos = (v) => (hi === lo ? 0 : ((v - lo) / (hi - lo)) * 100);
    let lastShown = -100;
    const ticks = stops.filter((st) => {
      const p = pos(st.v);
      if (p - lastShown < 8) return false;
      lastShown = p;
      return true;
    });
    return (
      <div style={{ flex: "1 1 220px", minWidth: "200px", fontSize: "11px", color: isDarkMode ? "#bbb" : "#555" }}>
        <div style={{ marginBottom: "3px", fontWeight: "bold" }}>{title}</div>
        <div
          style={{
            height: "8px",
            borderRadius: "4px",
            background: `linear-gradient(90deg, ${stops.map((st) => `${st.css} ${pos(st.v).toFixed(1)}%`).join(", ")})`,
            border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"}`,
          }}
        />
        <div style={{ position: "relative", height: "14px", marginTop: "2px" }}>
          {ticks.map((st) => (
            <span
              key={st.v}
              style={{ position: "absolute", left: `${pos(st.v)}%`, transform: "translateX(-50%)", whiteSpace: "nowrap" }}
            >
              {st.v}{suffix}
            </span>
          ))}
        </div>
      </div>
    );
  };
  const renderColorScales = (rightStyle) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px", padding: "6px 52px 0" }}>
      {renderScaleBar(i18n.t("newsWeather.Weather.temperatura2", { tempSuffix: tempSuffix }), tempScale(toDisplayTemp))}
      {rightStyle?.dangerColor !== false &&
        renderScaleBar(rightMeta.axis, metricScale(rightMetric, rightConv), isPercentMetric ? "%" : "")}
    </div>
  );
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
    if (rightMetric === "uv") return i18n.t("newsWeather.Weather.ufIndeks2", { v0: (value || 0).toFixed(1) });
    if (rightMetric === "precip") return i18n.t("newsWeather.Weather.imovirnistOpadiv", { Math: Math.round(value || 0) });
    if (rightMetric === "clouds") return i18n.t("newsWeather.Weather.khmarnist3", { Math: Math.round(value || 0) });
    if (rightMetric === "visibility") return i18n.t("newsWeather.Weather.vydymist3", { v0: value ?? "—", v1: visibilityLabel(units.distance) });
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

  // Телефон: графік відкривається одразу на весь екран у горизонтальній орієнтації
  const phoneChartSessionRef = useRef(false);
  const [autoFullscreenChart, setAutoFullscreenChart] = useState(null);

  // Псевдо-повноекранний режим: коли браузер не вміє requestFullscreen (iPhone/Safari) —
  // панель графіка стає fixed-шаром на весь екран, а в портреті повертається на 90°
  const [pseudoFs, setPseudoFs] = useState(false);
  const [vp, setVp] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 1024,
    h: typeof window !== "undefined" ? window.innerHeight : 768,
  }));
  useEffect(() => {
    if (!pseudoFs) return undefined;
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [pseudoFs]);
  const pseudoPortrait = pseudoFs && vp.h > vp.w;
  const pseudoPanelStyle = pseudoFs
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: pseudoPortrait ? `${vp.h}px` : `${vp.w}px`,
        height: pseudoPortrait ? `${vp.w}px` : `${vp.h}px`,
        minHeight: 0,
        transform: pseudoPortrait ? `translateX(${vp.w}px) rotate(90deg)` : undefined,
        transformOrigin: "top left",
        zIndex: 100000,
        overflow: "auto",
      }
    : null;
  // Висота графіка в повноекранному режимі (offset — місце під шапку й шкалу)
  const fsChartHeight = (offset) =>
    isCapturing
      ? `${window.innerHeight - offset}px`
      : pseudoFs
        ? `${(pseudoPortrait ? vp.w : vp.h) - offset}px`
        : `calc(100vh - ${offset}px)`;
  const wrapFs = (key, node) => (pseudoFs && fullscreenChart === key ? createPortal(node, document.body) : node);

  const exitPseudoFs = () => {
    setPseudoFs(false);
    setFullscreenChart(null);
    if (phoneChartSessionRef.current) {
      phoneChartSessionRef.current = false;
      setHourlyViewMode("blocks");
      setDailyViewMode("blocks");
    }
  };
  useEffect(() => {
    if (!pseudoFs) return undefined;
    const onKey = (e) => e.key === "Escape" && exitPseudoFs();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pseudoFs]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenChart(null);
        try { window.screen?.orientation?.unlock?.(); } catch { /* не підтримується */ }
        if (phoneChartSessionRef.current) {
          // після виходу з повного екрана на телефоні повертаємось до блоків
          phoneChartSessionRef.current = false;
          setHourlyViewMode("blocks");
          setDailyViewMode("blocks");
        }
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
    if (pseudoFs) {
      exitPseudoFs();
      return;
    }
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (!panelRef.current?.requestFullscreen) {
      setFullscreenChart(chartKey);
      setPseudoFs(true);
      return;
    }
    setFullscreenChart(chartKey);
    try {
      await panelRef.current.requestFullscreen();
    } catch {
      // браузер відмовив — використовуємо псевдо-повний екран
      setPseudoFs(true);
      return;
    }
    if (isNarrowScreen || phoneChartSessionRef.current) {
      try { await window.screen?.orientation?.lock?.("landscape"); } catch { /* iOS / не підтримується */ }
    }
  };

  const pickChartsMode = (chartKey) => {
    (chartKey === "hourly" ? setHourlyViewMode : setDailyViewMode)("charts");
    if (isNarrowScreen) setAutoFullscreenChart(chartKey);
  };

  useEffect(() => {
    if (!autoFullscreenChart) return undefined;
    const ref = autoFullscreenChart === "hourly" ? hourlyChartPanelRef : dailyChartPanelRef;
    const timer = setTimeout(async () => {
      if (ref.current && !document.fullscreenElement && !pseudoFs) {
        phoneChartSessionRef.current = true;
        try {
          await toggleChartFullscreen(autoFullscreenChart, ref);
        } catch {
          phoneChartSessionRef.current = false;
        }
      }
      setAutoFullscreenChart(null);
    }, 60);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFullscreenChart]);

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

  // Кнопка лінії тренду (лише 16-денний графік). Стоїть серед кнопок дій,
  // а коли шапка перенеслась на 2 ряди — у рядку легенди
  const renderTrendButton = () => (
    <Tooltip content={showDailyTrend ? i18n.t("newsWeather.Weather.skhovatyLiniiuTrendu", { dailyTrendText: dailyTrendText }) : i18n.t("newsWeather.Weather.pokazatyLiniiuTrenduTemperatury")} isDarkMode={isDarkMode}>
    <ChartActionBtn $isDarkMode={isDarkMode}
      type="button"
      onClick={toggleDailyTrend}
      aria-label={showDailyTrend ? i18n.t("newsWeather.Weather.skhovatyLiniiuTrendu2") : i18n.t("newsWeather.Weather.pokazatyLiniiuTrendu")}
      aria-pressed={showDailyTrend}
      $wide={showDailyTrend}
    >
      <BiTrendingUp />
      {showDailyTrend && dailyTrendBadge}
    </ChartActionBtn>
    </Tooltip>
  );

  const renderChartActions = (chartKey, panelRef, trendInLegend = false) => {
    // Швидко ввімкнути/вимкнути цифри біля точок для всіх ліній цього графіка
    const labelsOn = Object.values(lineStyles[chartKey]).some((s) => s.labels === true);
    const isFullscreen = fullscreenChart === chartKey;
    return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <Tooltip content={i18n.t("newsWeather.Weather.stylLiniiHrafika")} isDarkMode={isDarkMode}>
      <ChartActionBtn $isDarkMode={isDarkMode}
        type="button"
        onClick={() => setStyleModalChart(chartKey)}
        aria-label={i18n.t("newsWeather.Weather.stylLiniiHrafika")}
      >
        <BiPalette />
      </ChartActionBtn>
      </Tooltip>
      <Tooltip content={labelsOn ? i18n.t("newsWeather.Weather.skhovatyTsyfryBiliaTochok") : i18n.t("newsWeather.Weather.pokazatyTsyfryBiliaTochok")} isDarkMode={isDarkMode}>
        <ChartActionBtn $isDarkMode={isDarkMode}
          type="button"
          onClick={() => applyLineStyleToAll(chartKey, { labels: !labelsOn })}
          aria-label={labelsOn ? i18n.t("newsWeather.Weather.skhovatyTsyfryBiliaTochok") : i18n.t("newsWeather.Weather.pokazatyTsyfryBiliaTochok")}
          aria-pressed={labelsOn}
          $wide
        >
          123
        </ChartActionBtn>
      </Tooltip>
      {chartKey === "daily" && !trendInLegend && renderTrendButton()}
      <Tooltip content={isFullscreen ? i18n.t("newsWeather.Weather.vyityZPovnohoEkrana") : i18n.t("newsWeather.Weather.naVesEkran")} isDarkMode={isDarkMode}>
      <ChartActionBtn $isDarkMode={isDarkMode}
        type="button"
        onClick={() => toggleChartFullscreen(chartKey, panelRef)}
        aria-label={isFullscreen ? i18n.t("newsWeather.Weather.vyityZPovnohoEkrana") : i18n.t("newsWeather.Weather.naVesEkran")}
      >
        {isFullscreen ? <BiExitFullscreen /> : <BiFullscreen />}
      </ChartActionBtn>
      </Tooltip>
      <Tooltip content={i18n.t("newsWeather.Weather.zavantazhytySkrinshotPovnoekrannohoHrafi")} isDarkMode={isDarkMode}>
      <ChartActionBtn $isDarkMode={isDarkMode}
        type="button"
        onClick={() => downloadChartScreenshot(chartKey, panelRef)}
        aria-label={i18n.t("newsWeather.Weather.zavantazhytySkrinshotPovnoekrannohoHrafi")}
      >
        <BiDownload />
      </ChartActionBtn>
      </Tooltip>
    </div>
    );
  };

  // extra — додатковий елемент у кінці легенди (кнопка тренду, коли шапка в 2 ряди)
  const renderChartLegend = (items, extra = null) => (
    <div
      style={{
        display: "flex",
        gap: "2px",
        flexWrap: "wrap",
        // Не стискаємо легенду — місце віддає підказка вітру (обрізається трикрапкою),
        // інакше «Вітер» переносився на другий рядок
        flexShrink: 0,
        maxWidth: "100%",
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
            boxSizing: "border-box",
            height: "34px",
            border: `1px solid ${rightMeta.color}`,
            borderRadius: "4px",
            background: isDarkMode ? "#222" : "#fff",
            color: rightMeta.color,
            opacity: hiddenSeries.wind ? 0.45 : 1,
            fontWeight: "bold",
          }}
        >
          <Tooltip content={i18n.t("newsWeather.Weather.natysnitShchobShkaluHrafika", { v0: !hiddenSeries.wind ? i18n.t("newsWeather.Weather.hideVerb") : i18n.t("newsWeather.Weather.showVerb") })} isDarkMode={isDarkMode}>
            <button
              type="button"
              onClick={() => toggleDatasetVisibility("wind")}
              aria-label={i18n.t("newsWeather.Weather.skhovatyAboPokazatyPravu")}
              style={{ display: "inline-flex", alignItems: "center", padding: "3px 4px 3px 6px", border: "none", background: "transparent", color: "inherit", cursor: "pointer", fontSize: "14px" }}
            >
              {rightMeta.icon}
            </button>
          </Tooltip>
          <select
            value={rightMetric}
            onChange={(e) => setRightMetric(e.target.value)}
            aria-label={i18n.t("newsWeather.Weather.pokaznykPravoiOsiHrafika")}
            style={{ padding: "3px 2px", border: "none", background: "transparent", color: "inherit", fontSize: "inherit", fontWeight: "bold", cursor: "pointer", outline: "none" }}
          >
            {Object.entries(RIGHT_METRICS).map(([k, m]) => (
              <option key={k} value={k} style={{ color: "#000" }}>{m.label}</option>
            ))}
          </select>
        </span>
      ) : (
       <Tooltip key={item.key} content={i18n.t("newsWeather.Weather.natysnitShchobShkaluHrafika2", { v0: !hiddenSeries[item.key] ? i18n.t("newsWeather.Weather.hideVerb") : i18n.t("newsWeather.Weather.showVerb"), v1: item.label.toLowerCase() })} isDarkMode={isDarkMode}>
        <button
          type="button"
          onClick={() => toggleDatasetVisibility(item.key)}
          aria-label={i18n.t("newsWeather.Weather.natysnitShchobShkaluHrafika2", { v0: !hiddenSeries[item.key] ? i18n.t("newsWeather.Weather.hideVerb") : i18n.t("newsWeather.Weather.showVerb"), v1: item.label.toLowerCase() })}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            boxSizing: "border-box",
            height: "34px",
            padding: "0 8px",
            border: item.gradient ? "1px solid transparent" : `1px solid ${item.color}`,
            borderRadius: "4px",
            background: item.gradient
              ? `linear-gradient(${isDarkMode ? "#222" : "#fff"}, ${isDarkMode ? "#222" : "#fff"}) padding-box, ${TEMP_LEGEND_GRADIENT} border-box`
              : isDarkMode ? "#222" : "#fff",
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
              background: item.gradient ? TEMP_LEGEND_GRADIENT : item.color,
            }}
          />
          {item.icon && <span style={{ display: "inline-flex", alignItems: "center", fontSize: "14px" }}>{item.icon}</span>}
          {item.gradient ? (
            <span style={{ background: TEMP_LEGEND_GRADIENT, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
              {item.label}
            </span>
          ) : item.label}
        </button>
        </Tooltip>
      ))}
      {extra}
    </div>
  );

  // Стилі рядка шапки графіка — спільні для звичайної (sticky) і повноекранної шапки
  const chartHeaderRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2px",
    flexWrap: "wrap",
  };

  // Права група шапки: підказка-компас + кнопки дій (переходить на 2-й ряд цілком).
  // flex-basis 0 + мінімальна ширина «по вмісту»: перенос стається лише тоді, коли
  // не влазять кнопки й стиснута підказка, а не підказка на всю довжину в один рядок.
  const renderChartHeaderTools = (chartKey, panelRef, middle = null, trendInLegend = false) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "2px",
        flex: "1 1 0",
        minWidth: "min-content",
      }}
    >
      {middle}
      {renderChartActions(chartKey, panelRef, trendInLegend)}
    </div>
  );

  // Легенда + (підказка-компас і кнопки дій). Якщо в один рядок не влазить —
  // друга група цілком переходить на 2-й ряд, де підказка стискається, а кнопки ні.
  // У 2 ряди кнопка тренду (16 днів) переїжджає в рядок легенди.
  // headerRef/wrapped — з useFlexWrapped для цієї шапки.
  const renderChartHeader = (chartKey, panelRef, items, middle = null, headerRef = undefined, wrapped = false) => {
    const trendInLegend = chartKey === "daily" && wrapped;
    return (
      <div ref={headerRef} style={{ ...chartHeaderRowStyle, marginBottom: "4px" }}>
        {renderChartLegend(items, trendInLegend ? renderTrendButton() : null)}
        {renderChartHeaderTools(chartKey, panelRef, middle, trendInLegend)}
      </div>
    );
  };

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
      let merged = mergeLineStyles(savedStyles);
      // Одноразова міграція: колишнє типове «70%» для вимкнених ліній зливалось з іншими —
      // тепер за замовчуванням вони повністю сховані (усі збережені значення скидаємо один раз)
      try {
        const flagKey = `dimOpacityResetV2_${useGlobal ? "global" : card.id}`;
        if (localStorage.getItem(flagKey) !== "1") {
          merged = Object.fromEntries(
            Object.entries(merged).map(([chartKey, lines]) => [
              chartKey,
              Object.fromEntries(
                Object.entries(lines).map(([k, s]) => [k, s.dimOpacity !== undefined ? { ...s, dimOpacity: DEFAULT_DIM } : s]),
              ),
            ]),
          );
          await localforage.setItem(useGlobal ? "chartLineStyles_global" : `chartLineStyles_${card.id}`, merged);
          localStorage.setItem(flagKey, "1");
        }
      } catch { /* localStorage недоступний — просто покажемо збережене */ }
      setLineStyles(merged);
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

  // Колір пункту GPS: на світлому тлі темніший, щоб читався
  const gpsColor = isLocationEnabled
    ? isDarkMode ? "#00c84d" : "#047a35"
    : isDarkMode ? "#ff6b6b" : "#b30000";

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

  // Блоки годин — «по 2», як у 16 днях: усі години в ряду (скрол), стрілки ‹ › і список пар
  const [hourlyBlocksPage, setHourlyBlocksPage] = useState(0);
  const hourlyBlocksPages = Math.max(1, Math.ceil(visibleHourly.length / HOURLY_BLOCKS_PAGING));
  const safeHourlyBlocksPage = Math.min(hourlyBlocksPage, hourlyBlocksPages - 1);
  const hourlyBlocksScrollRef = useRef(null);
  const hourlyBlocksScrollRaf = useRef(0);

  const getHourlyBlocksStep = () => {
    const firstCard = hourlyBlocksScrollRef.current?.firstElementChild?.firstElementChild;
    return firstCard ? (firstCard.offsetWidth + DAILY_BLOCKS_GAP) * HOURLY_BLOCKS_PAGING : 0;
  };

  const goToHourlyBlocksPage = (page) => {
    const target = Math.max(0, Math.min(page, hourlyBlocksPages - 1));
    setHourlyBlocksPage(target);
    const el = hourlyBlocksScrollRef.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: target * getHourlyBlocksStep(), behavior: reduce ? "auto" : "smooth" });
  };

  // Прокрутка мишею/пальцем — підпис годин встигає за нею
  const handleHourlyBlocksScroll = () => {
    cancelAnimationFrame(hourlyBlocksScrollRaf.current);
    hourlyBlocksScrollRaf.current = requestAnimationFrame(() => {
      const el = hourlyBlocksScrollRef.current;
      const step = getHourlyBlocksStep();
      if (!el || !step) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
      setHourlyBlocksPage(atEnd ? hourlyBlocksPages - 1 : Math.round(el.scrollLeft / step));
    });
  };

  // Інший день — починаємо з перших годин
  useEffect(() => {
    setHourlyBlocksPage(0);
    hourlyBlocksScrollRef.current?.scrollTo({ left: 0 });
  }, [selectedHourlyDay]);
  useEffect(() => () => cancelAnimationFrame(hourlyBlocksScrollRaf.current), []);
  const hourlyChartAvailable = hourlyDayGroups[selectedHourlyDay]?.chartAvailable !== false;
  // Графіки на телефонах заблоковані — показуємо блоки
  const canShowHourlyChart = hourlyChartAvailable;
  // На телефоні графік показується лише на весь екран (його відкриває pickChartsMode)
  const phoneChartHidden = isNarrowScreen && !fullscreenChart && !autoFullscreenChart;
  const effectiveHourlyViewMode =
    hourlyViewMode === "charts" && (!canShowHourlyChart || phoneChartHidden) ? "blocks" : hourlyViewMode;
  const effectiveDailyViewMode =
    dailyViewMode === "charts" && phoneChartHidden ? "blocks" : dailyViewMode;
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
        label: i18n.t("newsWeather.Weather.temperatura2", { tempSuffix: tempSuffix }),
        data: visibleHourly?.map((h) => toDisplayTemp(h.tempNum ?? 0)) || [],
        backgroundColor: `rgba(255, 179, 108, ${hourlyOpacity.day * 0.2})`,
        borderColor: tempGradient(unit, hourlyOpacity.day, `rgba(255, 179, 108, ${hourlyOpacity.day})`),
        hotOutline: { unit, alpha: hourlyOpacity.day },
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
            borderColor: rightBorder(lineStyles.hourly.right, hourlyOpacity.wind, `rgba(0, 190, 235, ${hourlyOpacity.wind})`),
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
            borderColor: rightBorder(lineStyles.hourly.right, hourlyOpacity.wind, `rgba(${rightMeta.rgb}, ${hourlyOpacity.wind})`),
            backgroundColor: `rgba(${rightMeta.rgb}, ${hourlyOpacity.wind * 0.15})`,
            hidden: hourlyOpacity.wind === 0,
            pointStyle: "circle",
            pointBackgroundColor:
              visibleHourly?.map((h) =>
                rightPoint(lineStyles.hourly.right, rightValue(h, false), hourlyOpacity.wind, `rgba(${rightMeta.rgb}, ${hourlyOpacity.wind})`),
              ) || [],
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
    if (code === 0) return i18n.t("newsWeather.Weather.iasno");
    if (code >= 1 && code <= 3) return i18n.t("newsWeather.Weather.chastkovoKhmarno");
    if (code >= 45 && code <= 48) return i18n.t("newsWeather.Weather.tuman");
    if (code >= 51 && code <= 55) return i18n.t("newsWeather.Weather.dribnaSiaka");
    if (code >= 61 && code <= 65) return i18n.t("newsWeather.Weather.doshch");
    if (code >= 71 && code <= 77) return i18n.t("newsWeather.Weather.snih");
    if (code >= 80 && code <= 82) return i18n.t("newsWeather.Weather.shkvalnyiDoshch");
    if (code >= 95 && code <= 99) return i18n.t("newsWeather.Weather.hroza");
    return i18n.t("newsWeather.Weather.khmarno");
  };
// Реєстр свят 2027
const HOLIDAYS_2027 = {
  // Січень
  "01.01": i18n.t("newsWeather.Weather.vitaiuZNovymRokom"),
  "06.01": i18n.t("newsWeather.Weather.bohoiavlenniaVodokhreshcheNovyiStyl"),
  "07.01": i18n.t("newsWeather.Weather.rizdvoKhrystoveStaryiStyl"),
  "12.01": i18n.t("newsWeather.Weather.1SeriiaRealnoiMistyky"),
  "14.01": i18n.t("newsWeather.Weather.vasyliaObrizanniaHospodnieStaryi"),
  "19.01": i18n.t("newsWeather.Weather.bohoiavlenniaVodokhreshcheStaryiStyl"),

  // Лютий
  "02.02": i18n.t("newsWeather.Weather.stritenniaHospodnieNovyiStyl"),
  "14.02": i18n.t("newsWeather.Weather.zDnemSviatohoValentyna"),
  "15.02": i18n.t("newsWeather.Weather.stritenniaHospodnieStaryiStyl"),

  // Березень
  "08.03": i18n.t("newsWeather.Weather.zhinkyVsikhVasVitaiu"),
  "20.03": i18n.t("newsWeather.Weather.vesnianeRivnodenniaSontseVstalo"),
  "25.03": i18n.t("newsWeather.Weather.blahovishchenniaPresviatoiBohorodytsiNov"),

  // Квітень
  "01.04": i18n.t("newsWeather.Weather.sohodniDenDurniaNe"),
  "07.04": i18n.t("newsWeather.Weather.blahovishchenniaPresviatoiBohorodytsiSta"),
  "23.04": i18n.t("newsWeather.Weather.denSviatohoIuriiaHeorhiia"),

  // Травень
  "01.05": i18n.t("newsWeather.Weather.denPratsiZhinkySpechit"),
  "02.05": i18n.t("newsWeather.Weather.zVelykodnem2027Bazhaiu"),
  "06.05": i18n.t("newsWeather.Weather.denSviatohoIuriiaHeorhiia2"),
  "08.05": i18n.t("newsWeather.Weather.denPamiatiTaPeremohy"),
  "09.05": i18n.t("newsWeather.Weather.denMateriPodiakuiteIm"),
  "27.05": i18n.t("newsWeather.Weather.vypuskDragonVillage3"),
  "29.05": i18n.t("newsWeather.Weather.osobysteSviatoUTsei"),

  // Червень
  "10.06": i18n.t("newsWeather.Weather.voznesinniaHospodnie"),
  "20.06": i18n.t("newsWeather.Weather.triitsiaPiatdesiatnytsia"),
  "21.06": i18n.t("newsWeather.Weather.prostoLitnieSontsestoianniaKupyv"),
  "24.06": i18n.t("newsWeather.Weather.rizdvoIvanaKhrestyteliaKupala"),
  "28.06": i18n.t("newsWeather.Weather.denKonstytutsiiUkrainy"),
  "29.06": i18n.t("newsWeather.Weather.sviatykhApostolivPetraI"),

  // Липень
  "07.07": i18n.t("newsWeather.Weather.rizdvoIvanaKhrestyteliaIvana"),
  "12.07": i18n.t("newsWeather.Weather.sviatykhApostolivPetraI2"),

  // Серпень
  "01.08": i18n.t("newsWeather.Weather.denMaliatkoTvShche"),
  "06.08": i18n.t("newsWeather.Weather.preobrazhenniaHospodnieSpasNovyi"),
  "15.08": i18n.t("newsWeather.Weather.uspinniaPresviatoiBohorodytsiNovyi"),
  "19.08": i18n.t("newsWeather.Weather.preobrazhenniaHospodnieSpasStaryi"),
  "24.08": i18n.t("newsWeather.Weather.denNezalezhnostiUkrainy"),
  "28.08": i18n.t("newsWeather.Weather.uspinniaPresviatoiBohorodytsiStaryi"),

  // Вересень
  "01.09": i18n.t("newsWeather.Weather.denZnanTseiDen"),
  "08.09": i18n.t("newsWeather.Weather.rizdvoPresviatoiBohorodytsiNovyi"),
  "11.09": i18n.t("newsWeather.Weather.vypusk1ISerii"),
  "14.09": i18n.t("newsWeather.Weather.vozdvyzhenniaKhrestaHospodnohoNovyi"),
  "20.09": i18n.t("newsWeather.Weather.vsesvitniiDenPrybyrannia"),
  "21.09": i18n.t("newsWeather.Weather.rizdvoPresviatoiBohorodytsiStaryi"),
  "23.09": i18n.t("newsWeather.Weather.osinnieRivnodenniaDrevniusDarknis"),
  "27.09": i18n.t("newsWeather.Weather.vozdvyzhenniaKhrestaHospodnohoStaryi"),

  // Жовтень
  "01.10": i18n.t("newsWeather.Weather.pokrovaPresviatoiBohorodytsiTa"),
  "14.10": i18n.t("newsWeather.Weather.pokrovaPresviatoiBohorodytsiTa2"),
  "24.10": i18n.t("newsWeather.Weather.pochavsiaRetrohradnyiMerkuriiIakshcho"),
  "27.10": i18n.t("newsWeather.Weather.denUkrainskoiPysemnostiTa"),

  // Листопад
  "19.11": i18n.t("newsWeather.Weather.mizhnarodnyiCholovichyiDenNash"),
  "21.11": i18n.t("newsWeather.Weather.vvedenniaVKhramPresviatoi"),
  "30.11": i18n.t("newsWeather.Weather.denSviatohoAndriiaPervozvannoho"),

  // Грудень
  "04.12": i18n.t("newsWeather.Weather.vvedenniaVKhramPresviatoi2"),
  "06.12": i18n.t("newsWeather.Weather.denSviatohoMykolaiaNovyi"),
  "13.12": i18n.t("newsWeather.Weather.denSviatohoAndriiaPervozvannoho2"),
  "19.12": i18n.t("newsWeather.Weather.denSviatohoMykolaiaStaryi"),
  "22.12": i18n.t("newsWeather.Weather.zymoveSontsestoianniaNaitemnishyiDen"),
  "25.12": i18n.t("newsWeather.Weather.rizdvoKhrystoveNovyiStyl"),
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
    // Ключ «DD.MM» і вихідний — з ISO-дати, бо підписи дати/дня залежать від мови
    const ddmm = ddmmFromIso(fullDate) || dateStr;
    const holidayName = HOLIDAYS_2027[ddmm];
    const isWknd = fullDate ? isWeekendIso(fullDate) : isWeekend(dayName || "");
    const isBday = isBirthday(ddmm);
    const customDay = customDays.find((d) => d.date === fullDate);

    // Пріоритет: Свято > День народження > Custom > Вихідний
    if (holidayName) {
      return {
        type: "holiday",
        color: "#ff6666",
        label: holidayName + (isWknd ? " " + i18n.t("newsWeather.Weather.vykhidnyi") : ""),
      };
    }
    if (isBday) {
      return {
        type: "birthday",
        color: "#e066ff", 
        label: i18n.t("newsWeather.Weather.zDnemNarodzhennia"),
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
        label: i18n.t("newsWeather.Weather.vykhidnyi2"),
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

    if (days > 0) return i18n.t("newsWeather.Weather.zalyshylosDH", { days: days, hours: hours });
    return i18n.t("newsWeather.Weather.pochnetsiaZaH", { hours: hours });
  };

  const getHolidayMessage = (dateStr, dayName, fullDate) => {
    const customDay = customDays.find((d) => d.date === fullDate);
    const countdown = calculateCountdown(fullDate);

    if (customDay) {
      return countdown ? [i18n.t("newsWeather.Weather.vashaPodiia", { reason: customDay.reason }), `(${countdown})`] : [i18n.t("newsWeather.Weather.vashaPodiia", { reason: customDay.reason })];
    }
    if (isBirthday(dateStr)) {
      return countdown ? [i18n.t("newsWeather.Weather.vitaiemoZDnemNarodzhennia", { v0: user?.firstName }), `(${countdown})`] : [i18n.t("newsWeather.Weather.vitaiemoZDnemNarodzhennia", { v0: user?.firstName })];
    }
    const holiday = HOLIDAYS_2027[dateStr];
    if (holiday) {
      return countdown ? [i18n.t("newsWeather.Weather.vitaiemoZiSviatom", { holiday: holiday }), `(${countdown})`] : [i18n.t("newsWeather.Weather.vitaiemoZiSviatom", { holiday: holiday })];
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
  const dailyTrendText = i18n.t("newsWeather.Weather.trendDenDenNich", { v0: fmtSlope(dailyDayTrend), v1: fmtSlope(dailyNightTrend) });
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
        dailyDayTrend && trendDataset(i18n.t("newsWeather.Weather.trendDen"), dailyDayTrend, "255, 179, 108", dailyOpacity.day, lineStyles.daily.trendDay),
        dailyNightTrend && trendDataset(i18n.t("newsWeather.Weather.trendNich"), dailyNightTrend, "255, 20, 147", dailyOpacity.night, lineStyles.daily.trendNight),
      ].filter(Boolean)
    : [];

  const dailyChartData = {
    labels: dailyList?.map((d) => `${d.date}\n${d.day}`) || [],
    datasets: [
      {
        label: i18n.t("newsWeather.Weather.den", { tempSuffix: tempSuffix }),
        data: dailyDayTemps,
        borderColor: tempGradient(unit, dailyOpacity.day, `rgba(255, 179, 108, ${dailyOpacity.day})`),
        hotOutline: { unit, alpha: dailyOpacity.day },
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
        label: i18n.t("newsWeather.Weather.nich", { tempSuffix: tempSuffix }),
        data: dailyNightTemps,
        borderColor: tempGradient(unit, dailyOpacity.night, `rgba(255, 20, 147, ${dailyOpacity.night})`),
        hotOutline: { unit, alpha: dailyOpacity.night },
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
            borderColor: rightBorder(lineStyles.daily.right, dailyOpacity.wind, `rgba(0, 153, 255, ${dailyOpacity.wind})`),
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
            borderColor: rightBorder(lineStyles.daily.right, dailyOpacity.wind, `rgba(${rightMeta.rgb}, ${dailyOpacity.wind})`),
            backgroundColor: `rgba(${rightMeta.rgb}, ${dailyOpacity.wind * 0.2})`,
            hidden: dailyOpacity.wind === 0,
            pointStyle: "circle",
            pointBackgroundColor:
              dailyList?.map((d) =>
                rightPoint(lineStyles.daily.right, rightValue(d, true), dailyOpacity.wind, `rgba(${rightMeta.rgb}, ${dailyOpacity.wind})`),
              ) || [],
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
          title: (items) => i18n.t("newsWeather.Weather.chas", { label: items[0].label }),
          label: (context) => {
            if (context.datasetIndex === 0) {
              // Температура
              const temp = visibleHourly?.[context.dataIndex]?.tempNum ?? 0;
              let label = i18n.t("newsWeather.Weather.temperatura3", { v0: formatTemp(temp) });

              let dangers = [];
              if (temp > 30) dangers.push(i18n.t("newsWeather.Weather.speka"));
              if (temp < -30) dangers.push(i18n.t("newsWeather.Weather.moroz"));

              if (dangers.length > 0) {
                label += ` ⚠️ ${dangers.join(", ")}`;
              }
              return label;
            } else if (context.datasetIndex === 1 && rightMetric !== "wind") {
              return ` ${rightTooltip(context.parsed.y)}`;
            } else if (context.datasetIndex === 1) {
              const wind = visibleHourly?.[context.dataIndex]?.windNum ?? 0;
              let label = " " + i18n.t("newsWeather.Weather.viter2", { fmt: fmt.wind(wind) });
              if (wind > 10) label += " " + i18n.t("newsWeather.Weather.sylnyiViter");
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
            const desc = hourlyData.description || getWeatherDescription(hourlyData.weather_code) || stripEmoji(hourlyData.iconPlaceholder) || i18n.t("newsWeather.Weather.pohoda");
            return i18n.t("newsWeather.Weather.stanPohody", { desc: desc });
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: { display: true, text: i18n.t("newsWeather.Weather.temperatura2", { tempSuffix: tempSuffix }), color: "#ffb36c" },
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
              return i18n.t("newsWeather.Weather.den2", { v0: formatTemp(parseInt(dailyList?.[context.dataIndex]?.temp_day)) });
            } else if (isNight) {
              return i18n.t("newsWeather.Weather.nich2", { v0: formatTemp(parseInt(dailyList?.[context.dataIndex]?.temp_night)) });
            } else if (isWind && rightMetric !== "wind") {
              return rightTooltip(context.parsed.y);
            } else if (isWind) {
              const daily = dailyList?.[context.dataIndex];
              const direction = daily?.wind_direction_10m || 0;
              return i18n.t("newsWeather.Weather.viter3", { fmt: fmt.wind(parseFloat(daily?.wind_speed) || 0), v1: getWindDirectionLabel(direction), Math: Math.round(direction) });
            }
            return "";
          },
          afterBody: (contextItems) => {
            if (contextItems.length === 0) return "";
            const firstContext = contextItems[0];
            const daily = dailyList?.[firstContext.dataIndex];
            if (!daily) return "";
            const desc = daily.description || getWeatherDescription(daily.weather_code) || stripEmoji(daily.iconPlaceholder) || "—";
            return i18n.t("newsWeather.Weather.stanPohody", { desc: desc });
          },
        },
      },
    },
    scales: {
      ...chartOptions.scales,
      y: {
        beginAtZero: false,
        title: { display: true, text: i18n.t("newsWeather.Weather.temperatura2", { tempSuffix: tempSuffix }), color: "#ffb36c" },
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
              alert(i18n.t("newsWeather.Weather.nazvaSviataZanadtoDovha"));
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

  // Автоперемикання вкладок: своє для картки або загальне ({ on, seconds })
  const tabAutoplayGlobal =
    parseTabAutoplay(usePrefValue(TAB_AUTOPLAY_KEY, null)) || TAB_AUTOPLAY_DEFAULT;
  const tabAutoplayCard = parseTabAutoplay(usePrefValue(tabAutoplayCardKey(card.id), null));
  const tabAutoplay = tabAutoplayCard || tabAutoplayGlobal;
  const tabAutoplaySeconds = tabAutoplay.on ? tabAutoplay.seconds : 0;
  const setCardTabAutoplay = (value) =>
    setPref(tabAutoplayCardKey(card.id), serializeTabAutoplay(value));
  const resetCardTabAutoplay = () => removePref(tabAutoplayCardKey(card.id));

  // Сенсорні екрани не мають наведення: дотик чи прокрутка картки ставлять
  // автоперемикання на паузу (щонайменше хвилина) і заново відлічують інтервал.
  const [touchPauseTick, setTouchPauseTick] = useState(0);
  const touchPausedUntilRef = useRef(0);
  const pauseAutoplayOnTouch = useCallback((event) => {
    if (event.type === "pointerdown" && event.pointerType === "mouse") return;
    const now = Date.now();
    // Прокрутка шле десятки подій — оновлюємо паузу не частіше ніж раз на 2 с
    if (touchPausedUntilRef.current - now > 58_000) return;
    touchPausedUntilRef.current = now + 60_000;
    setTouchPauseTick((tick) => tick + 1);
  }, []);

  useEffect(() => {
    if (isBannerHovered || !(tabAutoplaySeconds > 0)) return;
    const interval = setInterval(() => {
      if (Date.now() < touchPausedUntilRef.current) return;
      if (window.innerWidth >= 768) {
        setActiveTab((prev) => {
          const order = ["current", "hourly", "daily", "ai", "archive"];
          const nextIndex = (order.indexOf(prev) + 1) % order.length;
          return order[nextIndex];
        });
      }
    }, tabAutoplaySeconds * 1000);
    return () => clearInterval(interval);
  }, [isBannerHovered, tabAutoplaySeconds, touchPauseTick]);

  // Значення з % (дані можуть уже містити знак %)
  const formatPercent = (val) =>
    val === undefined || val === null || val === "" ? "—" : `${String(val).replace(/%/g, "")}%`;

  // Сітка плиток у блоковому режимі — як плитки вкладки «Зараз»
  const renderBlockStats = (stats) => (
    <BlockStatGrid>
      {stats.map(({ icon, label, value, sub }) => (
        <BlockStatTile key={label} $halo={!isDarkMode}>
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
          {i18n.t("newsWeather.Weather.nemaieDanykhHodynnohoProhnozu")}
        </div>
      );
    }

    return (
      <div
        ref={hourlyBlocksScrollRef}
        onScroll={handleHourlyBlocksScroll}
        style={{
          width: "100%",
          overflowX: "auto",
          // Планшет і комп'ютер: ряд займає решту висоти вкладки — горизонтальний скролбар завжди видно
          ...(hourlyBlocksFitArea && { flex: "1 1 auto", minHeight: 0, overflowY: "auto" }),
          // Ряд притягується до пари годин і при прокрутці мишею/пальцем
          scrollSnapType: "x mandatory",
        }}
      >
        <div style={{ display: "flex", gap: `${DAILY_BLOCKS_GAP}px`, paddingBottom: "2px", minWidth: isNarrowScreen ? "min-content" : undefined }}>
          {visibleHourly.map((item, idx) => {
            const windDeg = item.wind_direction_10m || 0;
            const windText = getWindDirectionText(windDeg);
            const isPolarNight = card.current?.isPolarNight || item.isPolarNight;
            const isPolarDay = card.current?.isPolarDay || item.isPolarDay;

            return (
              <div
                key={idx}
                style={{
                  // По 2 години на «сторінку»: картка рівно пів ширини (телефон — не вужче 200px)
                  flex: `0 0 max(200px, calc((100% - ${DAILY_BLOCKS_GAP}px) / 2))`,
                  minWidth: 0,
                  scrollSnapAlign: idx % HOURLY_BLOCKS_PAGING === 0 ? "start" : undefined,
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
                <div style={{ fontSize: "13px", fontWeight: "bold", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                  <FaClock /> {item.time || item.label || `${idx}:00`}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                  <span style={{ fontSize: "24px" }}><WeatherIcon isDarkMode={isDarkMode} item={item} /></span>
                  <span style={{ fontSize: "11px", fontWeight: "600", opacity: 0.9 }}>
                    {item.description || getWeatherDescription(item.weather_code) || stripEmoji(item.iconPlaceholder) || i18n.t("newsWeather.Weather.pohoda")}
                  </span>
                </div>

                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "8px", padding: "6px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  {!isPolarNight && (
                    <div style={{ fontWeight: "800", fontSize: "14px", color: "#ff9d3b" }}>
                      {i18n.t("newsWeather.Weather.temperatura4")} {formatTemp(item.tempNum ?? item.temp)}
                    </div>
                  )}
                  {item.feels_like && (
                    <div style={{ fontSize: "10px", opacity: 0.8 }}>
                      {i18n.t("newsWeather.Weather.vidchuvaietsia")} {formatTemp(item.feels_like)}
                    </div>
                  )}
                  {isPolarNight && (
                    <div style={{ fontSize: "10px", color: "#4da6ff", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <BsMoonStarsFill /> {i18n.t("newsWeather.Weather.poliarnaNich")}
                    </div>
                  )}
                  {isPolarDay && (
                    <div style={{ fontSize: "10px", color: "#ffd700", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaSun /> {i18n.t("newsWeather.Weather.poliarnyiDen")}
                    </div>
                  )}
                </div>

                {renderBlockStats([
                  { icon: <AnimWind><BiWind style={{ color: "#00eeff" }} /></AnimWind>, label: i18n.t("newsWeather.Weather.viter"), value: fmt.wind(item.windNum ?? item.wind_speed ?? item.windSpeed ?? 0), sub: windText },
                  { icon: <AnimWind><BiWind style={{ color: "#ff9900" }} /></AnimWind>, label: i18n.t("newsWeather.Weather.poryvy"), value: item.wind_gusts_10m ? fmt.wind(item.wind_gusts_10m) : "—" },
                  { icon: <FaDroplet style={{ color: "#4da6ff" }} />, label: i18n.t("newsWeather.Weather.volohist"), value: formatPercent(item.relative_humidity_2m ?? item.humidity) },
                  { icon: <GiGrassMushroom style={{ color: "#00ffcc" }} />, label: i18n.t("newsWeather.Weather.tochkaRosy"), value: item.dew_point_2m !== undefined ? formatTemp(item.dew_point_2m) : "—" },
                  { icon: <FaCloudRain style={{ color: "#3399ff" }} />, label: i18n.t("newsWeather.Weather.opady"), value: fmt.precip(item.precipitation ?? 0) },
                  { icon: <FaSnowflake style={{ color: "#80d4ff" }} />, label: i18n.t("newsWeather.Weather.snihovyiPokryv"), value: fmt.snow((item.snow_depth ?? 0) * 100) },
                  { icon: <GiIceCube style={{ color: "#00cdff" }} />, label: i18n.t("newsWeather.Weather.grunt"), value: item.soil_temperature_0cm !== undefined ? formatTemp(item.soil_temperature_0cm) : "—" },
                  { icon: <PiThermometerFill style={{ color: "#ff9d3b" }} />, label: i18n.t("newsWeather.Weather.riven0C"), value: item.freezing_level_height !== undefined ? fmt.height(item.freezing_level_height) : "—" },
                  { icon: <GiWaterRecycling style={{ color: "#00eeff" }} />, label: i18n.t("newsWeather.Weather.vyparovuvannia"), value: item.evapotranspiration !== undefined ? fmt.precip(item.evapotranspiration, 2) : "—" },
                  { icon: <MdOutlineSpeed style={{ color: "#ffb36c" }} />, label: i18n.t("newsWeather.Weather.tysk"), value: fmt.pressure(item.pressure_msl ?? item.pressure ?? card.current?.pressure) },
                  { icon: <FaCloud style={{ color: "#aaa" }} />, label: i18n.t("newsWeather.Weather.khmary"), value: formatPercent(item.cloud_cover ?? card.current?.cloud_cover) },
                ])}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  /* ---------- Режим «Рядки» (як на метеосайтах) ---------- */
  const rowsNum = (v) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : null;
  };
  const rowsTemp = (c) => {
    const v = convertTemp(c, fmt.units.temp);
    return v === null ? "—" : `${Math.round(v)}°`;
  };
  const rowsWind = (ms) => {
    const v = convertWind(ms, fmt.units.wind);
    return v === null ? "—" : String(Math.round(v));
  };
  const rowsPrecip = (mm) => {
    const v = convertPrecip(mm, fmt.units.precip);
    if (v === null) return "—";
    if (v === 0) return "0";
    return fmt.units.precip === "in" ? v.toFixed(2) : String(Math.round(v * 10) / 10);
  };
  const rowsPressure = (hpa) => {
    const v = convertPressure(hpa, fmt.units.pressure);
    if (v === null) return "—";
    const d = fmt.units.pressure === "inhg" ? 2 : fmt.units.pressure === "kpa" ? 1 : 0;
    return v.toFixed(d);
  };
  const rowsPercent = (v) => (rowsNum(v) === null ? "—" : `${Math.round(rowsNum(v))}`);
  const windDirCell = (deg) =>
    deg == null
      ? { deg: null, label: "" }
      : // Стрілка показує, КУДИ дме вітер (напрям «звідки» + 180°)
        { deg: (Number(deg) + 180) % 360, label: getWindDirectionShort(deg), title: `${getWindDirectionText(deg)} (${Math.round(deg)}°)` };
  const rowsFit = (mode) => !isNarrowScreen && mode === "rows" && !isCapturing;
  // Телефон: власна висота, щоб липка шапка працювала всередині прокрутки
  const ROWS_PHONE_MAX_HEIGHT = isCapturing ? undefined : "70vh";

  const renderHourlyRows = () => {
    const list = visibleHourly;
    if (!list || list.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          {i18n.t("newsWeather.Weather.nemaieDanykhHodynnohoProhnozu")}
        </div>
      );
    }
    // Поточна година в часовому поясі міста — підсвічується в шапці
    const offset = Number.isFinite(card.utcOffsetSeconds) ? card.utcOffsetSeconds : -new Date().getTimezoneOffset() * 60;
    const nowKey = new Date(Date.now() + offset * 1000).toISOString().slice(0, 13);
    const dark = isDarkMode;
    const columns = list.map((h, i) => ({
      key: h.fullTime || i,
      top: h.time || h.label || `${i}:00`,
      icon: <WeatherIcon isDarkMode={isDarkMode} item={h} />,
      current: typeof h.fullTime === "string" && h.fullTime.slice(0, 13) === nowKey,
    }));
    const rows = [
      {
        key: "temp", title: i18n.t("newsWeather.Weather.temperatura"), icon: <PiThermometerFill style={{ color: "#ff9d3b" }} />, unit: tempLabel(fmt.units.temp), variant: "plain",
        cells: list.map((h) => { const c = rowsNum(h.tempNum ?? h.temp); return { text: rowsTemp(c), fg: tempColor(c, dark) }; }),
      },
      {
        key: "feels", title: i18n.t("newsWeather.Weather.vidchuvaietsia2"), icon: <PiThermometerFill style={{ color: "#ff6fa8" }} />, unit: tempLabel(fmt.units.temp), variant: "plain",
        cells: list.map((h) => { const c = rowsNum(h.feels_like); return { text: rowsTemp(c), fg: tempColor(c, dark) }; }),
      },
      {
        key: "chance", title: i18n.t("newsWeather.Weather.imovirnistOpadiv2"), icon: <FaDroplet style={{ color: "#4da6ff" }} />, unit: "%", variant: "plain",
        cells: list.map((h) => ({ text: rowsPercent(h.precipitation_probability), fg: chanceColor(h.precipitation_probability, dark) })),
      },
      {
        key: "precip", title: i18n.t("newsWeather.Weather.opady"), icon: <FaCloudRain style={{ color: "#3399ff" }} />, unit: precipLabel(fmt.units.precip), variant: "skew",
        cells: list.map((h) => ({ text: rowsPrecip(h.precipitation ?? 0), ...precipCellStyle(h.precipitation, dark) })),
      },
      {
        key: "wind", title: i18n.t("newsWeather.Weather.viter"), icon: <BiWind style={{ color: "#00c8e6" }} />, unit: windLabel(fmt.units.wind), variant: "skew",
        cells: list.map((h) => { const ms = rowsNum(h.windNum ?? h.wind_speed); return { text: rowsWind(ms), ...windCellStyle(ms, dark) }; }),
      },
      {
        key: "gusts", title: i18n.t("newsWeather.Weather.poryvyVitru"), icon: <BiWind style={{ color: "#ff9900" }} />, unit: windLabel(fmt.units.wind), variant: "skew",
        cells: list.map((h) => { const ms = rowsNum(h.wind_gusts_10m ?? h.wind_gusts); return { text: rowsWind(ms), ...windCellStyle(ms, dark) }; }),
      },
      { key: "dir", title: i18n.t("newsWeather.Weather.napriamokVitru"), icon: <BsCompass style={{ color: "#be90d4" }} />, variant: "arrow", cells: list.map((h) => windDirCell(h.wind_direction_10m)) },
      {
        key: "uv", title: i18n.t("newsWeather.Weather.ufIndeks"), icon: <FaSun style={{ color: "#ffd700" }} />, variant: "skew",
        cells: list.map((h) => { const v = rowsNum(h.uv_index); return { text: v === null ? "—" : String(Math.round(v)), ...uvCellStyle(v, dark) }; }),
      },
      { key: "hum", title: i18n.t("newsWeather.Weather.volohist"), icon: <FaDroplet style={{ color: "#00ccff" }} />, unit: "%", variant: "plain", cells: list.map((h) => ({ text: rowsPercent(h.relative_humidity_2m ?? h.humidity) })) },
      { key: "clouds", title: i18n.t("newsWeather.Weather.khmarnist"), icon: <FaCloud style={{ color: "#9fb3c8" }} />, unit: "%", variant: "plain", cells: list.map((h) => ({ text: rowsPercent(h.cloud_cover) })) },
      {
        key: "pressure", title: i18n.t("newsWeather.Weather.tysk"), icon: <MdOutlineSpeed style={{ color: "#ffb36c" }} />, unit: pressureLabel(fmt.units.pressure), variant: "plain",
        cells: list.map((h) => ({ text: rowsPressure(h.pressure_msl ?? h.pressure) })),
      },
    ];
    return (
      <WeatherRows
        columns={columns}
        rows={rows}
        isDarkMode={isDarkMode}
        fit={rowsFit(effectiveHourlyViewMode)}
        maxHeight={ROWS_PHONE_MAX_HEIGHT}
        ariaLabel={i18n.t("newsWeather.Weather.pohodynnyiProhnozRiadkamy")}
      />
    );
  };

  const renderDailyRows = () => {
    const list = dailyList;
    if (!list || list.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          {i18n.t("newsWeather.Weather.nemaieDanykh16Dennoho")}
        </div>
      );
    }
    const dark = isDarkMode;
    const columns = list.map((d, i) => {
      const dateType = getDateType(d.date, d.day, d.fullDate);
      const isWeekend = (d.fullDate ? isWeekendIso(d.fullDate) : /сб|нд/i.test(d.day || "")) || dateType.type === "weekend";
      return {
        key: d.fullDate || i,
        top: d.date,
        sub: d.day,
        icon: <WeatherIcon isDarkMode={isDarkMode} item={d} />,
        // Свята/події — їхній колір, вихідні — помаранчевий
        accent: dateType.color || (isWeekend ? "#ff9d3b" : undefined),
        past: isPastDay(d),
        current: d.fullDate === todayIso,
      };
    });
    const rows = [
      {
        key: "day", title: i18n.t("newsWeather.Weather.vden"), unit: tempLabel(fmt.units.temp), variant: "plain", icon: <FaSun style={{ color: "#ff9d3b" }} />,
        cells: list.map((d) => { const c = rowsNum(d.temp_day ?? d.temp); return { text: rowsTemp(c), fg: tempColor(c, dark) }; }),
      },
      {
        key: "night", title: i18n.t("newsWeather.Weather.vnochi"), unit: tempLabel(fmt.units.temp), variant: "plain", icon: <BsMoonStarsFill style={{ color: "#ff3399" }} />,
        cells: list.map((d) => { const c = rowsNum(d.temp_night ?? d.nightTemp); return { text: rowsTemp(c), fg: tempColor(c, dark) }; }),
      },
      {
        key: "chance", title: i18n.t("newsWeather.Weather.imovirnistOpadiv2"), icon: <FaDroplet style={{ color: "#4da6ff" }} />, unit: "%", variant: "plain",
        cells: list.map((d) => { const p = d.precipitation_probability_max ?? d.pop; return { text: rowsPercent(p), fg: chanceColor(p, dark) }; }),
      },
      {
        key: "precip", title: i18n.t("newsWeather.Weather.opady"), icon: <FaCloudRain style={{ color: "#3399ff" }} />, unit: precipLabel(fmt.units.precip), variant: "skew",
        cells: list.map((d) => { const mm = d.precipitation_sum ?? d.rain_sum ?? 0; return { text: rowsPrecip(mm), ...precipCellStyle(mm, dark) }; }),
      },
      {
        key: "snow", title: i18n.t("newsWeather.Weather.snih"), icon: <FaSnowflake style={{ color: "#80d4ff" }} />, unit: fmt.units.precip === "in" ? "in" : i18n.t("newsWeather.Weather.sm"), variant: "plain",
        cells: list.map((d) => {
          const v = convertSnow(d.snowfall_sum, fmt.units.precip);
          return { text: v === null ? "—" : v === 0 ? "0" : String(Math.round(v * 10) / 10), fg: v > 0 ? (dark ? "#9fdcff" : "#1f78b4") : undefined };
        }),
      },
      {
        key: "wind", title: i18n.t("newsWeather.Weather.viterMaks"), icon: <BiWind style={{ color: "#00c8e6" }} />, unit: windLabel(fmt.units.wind), variant: "skew",
        cells: list.map((d) => { const ms = rowsNum(d.wind_speed); return { text: rowsWind(ms), ...windCellStyle(ms, dark) }; }),
      },
      {
        key: "gusts", title: i18n.t("newsWeather.Weather.poryvyVitru"), icon: <BiWind style={{ color: "#ff9900" }} />, unit: windLabel(fmt.units.wind), variant: "skew",
        cells: list.map((d) => { const ms = rowsNum(d.wind_gusts_max); return { text: rowsWind(ms), ...windCellStyle(ms, dark) }; }),
      },
      { key: "dir", title: i18n.t("newsWeather.Weather.napriamokVitru"), icon: <BsCompass style={{ color: "#be90d4" }} />, variant: "arrow", cells: list.map((d) => windDirCell(d.wind_direction_10m)) },
      {
        key: "uv", title: i18n.t("newsWeather.Weather.ufIndeks"), icon: <FaSun style={{ color: "#ffd700" }} />, variant: "skew",
        cells: list.map((d) => { const v = rowsNum(d.uv_index); return { text: v === null ? "—" : String(Math.round(v)), ...uvCellStyle(v, dark) }; }),
      },
      { key: "clouds", title: i18n.t("newsWeather.Weather.khmarnist"), icon: <FaCloud style={{ color: "#9fb3c8" }} />, unit: "%", variant: "plain", cells: list.map((d) => ({ text: rowsPercent(d.cloud_cover_mean) })) },
    ];
    return (
      <WeatherRows
        columns={columns}
        rows={rows}
        isDarkMode={isDarkMode}
        fit={rowsFit(effectiveDailyViewMode)}
        maxHeight={ROWS_PHONE_MAX_HEIGHT}
        ariaLabel={i18n.t("newsWeather.Weather.prohnozNa16Dniv")}
      />
    );
  };

  // Блоки 16 днів і годин на планшеті/комп'ютері вписуються у висоту вкладки (див. renderDailyBlocks)
  const dailyBlocksFitArea = !isNarrowScreen && effectiveDailyViewMode === "blocks" && !isCapturing;
  const hourlyBlocksFitArea = !isNarrowScreen && effectiveHourlyViewMode === "blocks" && !isCapturing;

  // Панель гортання блоків (16 днів і години): ‹ [підпис-список ▾] ›.
  // Підпис поточної пари — він же список: натиск відкриває всі пари, вибір — перехід до неї.
  // Невидимий нативний select поверх підпису (зручний і на телефоні)
  const renderBlocksPager = ({ page, pages, onGo, current, options, prevButton, what }) => (
    <DailyPager $isDarkMode={isDarkMode}>
      {prevButton || (
        <button type="button" onClick={() => onGo(page - 1)} disabled={page === 0} aria-label={i18n.t("newsWeather.Weather.poperedni", { what: what })}>
          <BiChevronLeft />
        </button>
      )}
      <label className="jump" title={i18n.t("newsWeather.Weather.pereityDo", { what: what })}>
        <span aria-live="polite">
          {current}
          <small> · {page + 1} {i18n.t("newsWeather.Weather.z")} {pages}</small>
        </span>
        <BiChevronDown aria-hidden="true" />
        <select value={page} onChange={(e) => onGo(Number(e.target.value))} aria-label={i18n.t("newsWeather.Weather.pereityDo", { what: what })}>
          {options.map((text, p) => (
            <option key={p} value={p}>{text}</option>
          ))}
        </select>
      </label>
      <button type="button" onClick={() => onGo(page + 1)} disabled={page >= pages - 1} aria-label={i18n.t("newsWeather.Weather.nastupni", { what: what })}>
        <BiChevronRight />
      </button>
    </DailyPager>
  );

  // Підписи пар для списку: [a, b] → «a – b»
  const pairLabels = (list, perPage, fmt) =>
    Array.from({ length: Math.max(1, Math.ceil(list.length / perPage)) }, (_, p) => {
      const a = list[p * perPage];
      const b = list[Math.min((p + 1) * perPage, list.length) - 1];
      return `${fmt(a)}${b && b !== a ? ` – ${fmt(b)}` : ""}`;
    });

  // Гортання «по 2 дні» — стоїть в одному рядку з перемикачами вигляду (компактніше по висоті)
  const renderDailyPager = () => {
    const list = dailyList;
    if (!dailyBlocksPaging || !list || list.length === 0) return null;
    // Усі дні лишаються в ряду (скролбар не зникає), картка — пів ширини,
    // а сторінка — це позиція прокрутки. Підпис — дати поточної пари
    const fmtDay = (x) => `${x.date} ${x.day || ""}`.trim();
    const options = pairLabels(list, dailyBlocksPaging, fmtDay).map((text, p) =>
      isPastDay(list[p * dailyBlocksPaging]) ? i18n.t("newsWeather.Weather.uchora", { text: text }) : text
    );
    const start = safeDailyBlocksPage * dailyBlocksPaging;
    const first = list[start];
    const last = list[Math.min(start + dailyBlocksPaging, list.length) - 1];
    return renderBlocksPager({
      page: safeDailyBlocksPage,
      pages: dailyBlocksPages,
      onGo: goToDailyBlocksPage,
      current: `${first?.date}${last && last !== first ? ` – ${last.date}` : ""}`,
      options,
      what: i18n.t("newsWeather.Weather.dni2"),
      // На першій сторінці «назад» веде до вчорашнього дня (якщо він є й ще схований)
      prevButton:
        safeDailyBlocksPage === 0 && hasPastDay && !showPastDay ? (
          <button type="button" className="wide" onClick={() => setShowPastDay(true)} aria-label={i18n.t("newsWeather.Weather.pokazatyVchorashniiDen")}>
            <BiChevronLeft /> {i18n.t("newsWeather.Weather.vchora")}
          </button>
        ) : null,
    });
  };

  // Гортання годин «по 2» — як у блоках 16 днів, для орієнтації в добі
  const renderHourlyPager = () => {
    const list = visibleHourly;
    if (!list || list.length === 0) return null;
    const fmtHour = (x) => x?.time || x?.label || "";
    const start = safeHourlyBlocksPage * HOURLY_BLOCKS_PAGING;
    const first = list[start];
    const last = list[Math.min(start + HOURLY_BLOCKS_PAGING, list.length) - 1];
    return renderBlocksPager({
      page: safeHourlyBlocksPage,
      pages: hourlyBlocksPages,
      onGo: goToHourlyBlocksPage,
      current: `${fmtHour(first)}${last && last !== first ? ` – ${fmtHour(last)}` : ""}`,
      options: pairLabels(list, HOURLY_BLOCKS_PAGING, fmtHour),
      what: i18n.t("newsWeather.Weather.hodyny"),
    });
  };

  const renderDailyBlocks = () => {
    const list = dailyList;
    if (!list || list.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          {i18n.t("newsWeather.Weather.nemaieDanykh16Dennoho")}
        </div>
      );
    }

    // Планшет і комп'ютер: ряд блоків займає рівно решту висоти вкладки й прокручується
    // всередині — горизонтальний скролбар завжди внизу видимої частини
    const fit = dailyBlocksFitArea ? { flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" } : null;
    return (
      <div style={{ width: "100%", ...fit }}>
      <div
        ref={dailyBlocksScrollRef}
        onScroll={dailyBlocksPaging ? handleDailyBlocksScroll : undefined}
        style={{
          width: "100%",
          overflowX: "auto",
          ...(fit && { flex: "1 1 auto", minHeight: 0, overflowY: "auto" }),
          // «По 2 дні»: ряд притягується до пари днів і при прокрутці мишею/пальцем
          scrollSnapType: dailyBlocksPaging ? "x mandatory" : undefined,
        }}
      >
        <div style={{ display: "flex", gap: `${DAILY_BLOCKS_GAP}px`, paddingBottom: "2px", minWidth: isNarrowScreen ? "min-content" : undefined }}>
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
                  // «По 2 дні» — картка рівно пів ширини (телефон — не вужче 210px);
                  // «Усі»: планшет і комп'ютер — блок у 1.6 раза ширший за третину області (~1.9 блока видно)
                  flex: dailyBlocksPaging
                    ? `0 0 max(210px, calc((100% - ${DAILY_BLOCKS_GAP}px) / 2))`
                    : isNarrowScreen ? "0 0 210px" : "0 0 calc((100% - 20px) / 3 * 1.6)",
                  minWidth: 0,
                  // Точки притягування — початок кожної пари днів
                  scrollSnapAlign: dailyBlocksPaging && idx % dailyBlocksPaging === 0 ? "start" : undefined,
                  // Минулий день (вчора) — повністю чорно-білий
                  filter: isPastDay(d) ? "grayscale(1)" : "none",
                  boxSizing: "border-box",
                  background: isDarkMode ? "rgba(25, 25, 38, 0.92)" : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  border: dateType.color ? `2px solid ${dateType.color}` : isDarkMode ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  color: isDarkMode ? "#fff" : "#1a1a1a",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                  fontSize: "11px",
                }}
              >
                {/* Дата й опис погоди — в один ряд */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", alignItems: "center", gap: "6px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "bold", color: dateType.color || "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <FaCalendarDays /> {d.date} {d.day}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", minWidth: 0 }}>
                    <span style={{ fontSize: "22px", flexShrink: 0, lineHeight: 1 }}><WeatherIcon isDarkMode={isDarkMode} item={d} /></span>
                    <span style={{ fontSize: "11px", fontWeight: "600" }}>
                      {d.description || getWeatherDescription(d.weather_code) || stripEmoji(d.iconPlaceholder) || i18n.t("newsWeather.Weather.pohoda")}
                    </span>
                  </div>
                </div>

                {/* День і ніч — в один ряд; полярні примітки на всю ширину */}
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "8px", padding: "3px 6px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", gap: "2px 8px", fontSize: "13px", lineHeight: 1.3 }}>
                  {!isPolarNight && (
                    <div style={{ fontWeight: "800", color: "#ff9d3b", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaSun /> {i18n.t("newsWeather.Weather.den3")} {formatTemp(d.temp_day || d.temp)}
                      {d.feels_like_max != null && (
                        <span style={{ fontSize: "10px", fontWeight: 600, opacity: 0.8 }}>
                          {i18n.t("newsWeather.Weather.vidch")} {formatTemp(Math.round(d.feels_like_max))})
                        </span>
                      )}
                    </div>
                  )}
                  {!isPolarDay && (
                    <div style={{ fontWeight: "700", color: "#ff3399", display: "flex", alignItems: "center", gap: "4px" }}>
                      <BsMoonStarsFill /> {i18n.t("newsWeather.Weather.nich3")} {formatTemp(d.temp_night || d.nightTemp)}
                      {d.feels_like_min != null && (
                        <span style={{ fontSize: "10px", fontWeight: 600, opacity: 0.8 }}>
                          {i18n.t("newsWeather.Weather.vidch")} {formatTemp(Math.round(d.feels_like_min))})
                        </span>
                      )}
                    </div>
                  )}
                  {isPolarNight && (
                    <div style={{ flexBasis: "100%", justifyContent: "center", fontSize: "10px", color: "#4da6ff", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <BsMoonStarsFill /> {i18n.t("newsWeather.Weather.poliarnaNichDenNe")}
                    </div>
                  )}
                  {isPolarDay && (
                    <div style={{ flexBasis: "100%", justifyContent: "center", fontSize: "10px", color: "#ffd700", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaSun /> {i18n.t("newsWeather.Weather.poliarnyiDenNichNe")}
                    </div>
                  )}
                  {isPolarEndDay && (
                    <div style={{ flexBasis: "100%", justifyContent: "center", fontSize: "10px", color: "#00eeff", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FaExclamationTriangle /> {i18n.t("newsWeather.Weather.zakinchenniaPoliarnohoPeriodu")}
                    </div>
                  )}
                </div>

                {renderBlockStats([
                  {
                    icon: <AnimWind><BiWind style={{ color: "#00eeff" }} /></AnimWind>,
                    label: i18n.t("newsWeather.Weather.viter"),
                    value: fmt.wind(d.wind_speed ?? 0),
                    // Напрям — скорочено (Пд-Сх), повна назва в підказці
                    sub: (
                      <span title={windText}>
                        {getWindDirectionShort(windDeg)}
                        {d.wind_gusts_max != null && (
                          <span style={{ display: "block", color: "#ff9900", fontWeight: 600, opacity: 1, whiteSpace: "nowrap" }}>{i18n.t("newsWeather.Weather.por")} {fmt.wind(d.wind_gusts_max)}</span>
                        )}
                      </span>
                    ),
                  },
                  { icon: <AnimSpin><FaSun style={{ color: "#ffd700" }} /></AnimSpin>, label: i18n.t("newsWeather.Weather.ufIndeks"), value: d.uv_index ?? "—" },
                  {
                    // Чим вища ймовірність опадів, тим насиченіша крапля
                    icon: <FaDroplet style={{ color: "#4da6ff", opacity: isNaN(rainChance) ? 0.4 : 0.2 + 0.8 * Math.min(rainChance, 100) / 100 }} />,
                    label: i18n.t("newsWeather.Weather.imovirnistOpadiv2"),
                    value: formatPercent(d.precipitation_probability_max ?? d.pop),
                  },
                  { icon: <FaCloudRain style={{ color: "#3399ff" }} />, label: i18n.t("newsWeather.Weather.doshch"), value: fmt.precip(d.rain_sum ?? d.rain ?? 0) },
                  { icon: <FaSnowflake style={{ color: "#80d4ff" }} />, label: i18n.t("newsWeather.Weather.snih"), value: d.snowfall_sum != null ? fmt.snow(d.snowfall_sum) : "—" },
                  { icon: <FaCloud style={{ color: "#c3cfdc" }} />, label: i18n.t("newsWeather.Weather.khmarnist"), value: formatPercent(d.cloud_cover_mean) },
                  {
                    // Найгірша видимість за день; менше 1 км або код «туман» — це туман
                    icon: (
                      <span style={{ display: "inline-flex", color: isFoggy(d.visibility_min, d.weather_code) ? "#ff9900" : "#9fb3c8" }}>
                        <VisibilityFog />
                      </span>
                    ),
                    label: isFoggy(d.visibility_min, d.weather_code) ? i18n.t("newsWeather.Weather.tumanVydymist") : i18n.t("newsWeather.Weather.vydymist"),
                    value: d.visibility_min != null ? fmt.visibility(d.visibility_min / 1000) : "—",
                  },
                  { icon: <GiWaterRecycling style={{ color: "#00eeff" }} />, label: i18n.t("newsWeather.Weather.vyparovuvannia"), value: d.evapotranspiration !== undefined ? fmt.precip(d.evapotranspiration, 2) : "—" },
                  { icon: <BsBuildings style={{ color: "#ffb36c" }} />, label: i18n.t("newsWeather.Weather.tsyvilniSutinky"), value: twilight ? `${twilight.civilDawn}–${twilight.civilDusk}` : "—" },
                  { icon: <AnimCompass><BsCompass style={{ color: "#be90d4" }} /></AnimCompass>, label: i18n.t("newsWeather.Weather.navihatsiiniSutinky"), value: twilight ? `${twilight.nauticalDawn}–${twilight.nauticalDusk}` : "—" },
                  { icon: <AnimTwinkle><BsStars style={{ color: "#a855f7" }} /></AnimTwinkle>, label: i18n.t("newsWeather.Weather.astronomichniSutinky"), value: twilight ? `${twilight.astroDawn}–${twilight.astroDusk}` : "—" },
                ])}
                <AstroScale
                  icon={<AnimHourglass><BsHourglassSplit style={{ color: "#3498db" }} /></AnimHourglass>}
                  title={i18n.t("newsWeather.Weather.tryvalistDnia", { v0: getDayLength(d.sunrise, d.sunset) })}
                  riseLabel={formatClock(d.sunrise)}
                  setLabel={formatClock(d.sunset)}
                  progress={sunScale.progress}
                  isActive={sunScale.isActive}
                  color="#ffd700"
                  footer={
                    dayDiff === null || dayDiff === undefined
                      ? null
                      : dayDiff === 0
                        ? i18n.t("newsWeather.Weather.tryvalistDniaIakUchora")
                        : i18n.t(dayDiff > 0 ? "newsWeather.Weather.dayLonger" : "newsWeather.Weather.dayShorter", { Math: Math.abs(dayDiff) })
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
                        ? `${moon.nextPhase.name} — ${moon.nextPhase.date.toLocaleDateString(dateLocale(), { day: "numeric", month: "long" })}`
                        : null
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  };
  // Бейдж дня у плитках. hint — що за свято/подія: показується підказкою на «?»
  const dayBadge = (text, color, bg, hint) => {
    const el = (
      <span
        tabIndex={hint ? 0 : undefined}
        aria-label={hint ? `${text} ${hint}` : undefined}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "9px",
          background: bg,
          color,
          padding: "1px 4px 1px 6px",
          borderRadius: "4px",
          fontWeight: "bold",
          cursor: hint ? "help" : undefined,
        }}
      >
        {text}
        {hint && (
          <span
            aria-hidden="true"
            style={{
              display: "inline-grid",
              placeItems: "center",
              width: "11px",
              height: "11px",
              borderRadius: "50%",
              background: color,
              color: "#fff",
              fontSize: "8px",
              lineHeight: 1,
            }}
          >
            ?
          </span>
        )}
      </span>
    );
    return hint ? <Tooltip content={hint} isDarkMode={isDarkMode}>{el}</Tooltip> : el;
  };

  const renderDailyTable = () => {
    const list = dailyList;
    if (!list || list.length === 0) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: isDarkMode ? "#aaa" : "#666" }}>
          {i18n.t("newsWeather.Weather.nemaieDanykh16Dennoho")}
        </div>
      );
    }
    return (
      <div style={{ marginTop: "12px", width: "100%" }}>
        {/* Перенос на новий рядок; неповний останній ряд розтягується на всю ширину */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {list.map((d, idx) => {
            const isPast = isPastDay(d) || d.isPast;
            const dateType = getDateType(d.date, d.day, d.fullDate);
            const isWeekend = (d.fullDate ? isWeekendIso(d.fullDate) : /сб|нд/i.test(d.day || "")) || dateType.type === "weekend";
            const windDeg = d.wind_direction_10m || 0;
            const windText = getWindDirectionText(windDeg);
            const dayTemp = parseInt(d.temp_day || d.temp);
            const nightTemp = parseInt(d.temp_night || d.nightTemp);
            const isPolarNight = d.isPolarNight || card.current?.isPolarNight;
            const isPolarDay = d.isPolarDay || card.current?.isPolarDay;

            // Звичайний день — колір тексту під тему (білий на білій картці зникав)
            let headerColor = isDarkMode ? "#fff" : "#1a1a1a";
            let borderColor = isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)";
            let badge = null;

            if (isPast) {
              headerColor = "#888";
              borderColor = "rgba(140, 140, 140, 0.35)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(120,120,120,0.3)", color: "#bbb", padding: "1px 6px", borderRadius: "4px" }}>
                {i18n.t("newsWeather.Weather.mynuliDni")}
                </span>
              );
            } else if (dateType.type === "holiday") {
              headerColor = "#ff4d4d";
              borderColor = "rgba(255, 77, 77, 0.7)";
              badge = dayBadge(i18n.t("newsWeather.Weather.vitaiuZiSviatom"), "#ff4d4d", "rgba(255, 77, 77, 0.25)", dateType.label);
            } else if (dateType.type === "custom") {
              headerColor = "#00bfff";
              borderColor = "rgba(0, 191, 255, 0.7)";
              badge = dayBadge(i18n.t("newsWeather.Weather.vashaPodiia2"), "#00bfff", "rgba(0, 191, 255, 0.25)", dateType.label);
            } else if (dateType.type === "birthday") {
              headerColor = "#e066ff";
              borderColor = "rgba(224, 102, 255, 0.7)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(224, 102, 255, 0.25)", color: "#e066ff", padding: "1px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                  {i18n.t("newsWeather.Weather.vitaiemoZDnemNarodzhennia2")}
                </span>
              );
            } else if (isWeekend) {
              headerColor = "#ffb36c";
              borderColor = "rgba(255, 179, 108, 0.7)";
              badge = (
                <span style={{ fontSize: "9px", background: "rgba(255, 179, 108, 0.25)", color: "#ffb36c", padding: "1px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                  {i18n.t("newsWeather.Weather.vykhidnyiDen")}
                </span>
              );
            }

            return (
              <div
                key={idx}
                style={{
                  flex: "1 0 125px",
                  background: isPast
                    ? (isDarkMode ? "rgba(20, 20, 26, 0.85)" : "rgba(230, 230, 235, 0.85)")
                    : (isDarkMode ? "rgba(25, 25, 35, 0.88)" : "rgba(255, 255, 255, 0.95)"),
                  backdropFilter: "blur(8px)",
                  border: isPast ? "1px dashed rgba(140, 140, 140, 0.4)" : `2px solid ${borderColor}`,
                  borderRadius: "8px",
                  padding: "7px 6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
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

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" }}>
                  <div style={{ fontSize: "28px" }}>
                    <WeatherIcon isDarkMode={isDarkMode} item={d} />
                  </div>
                  <div style={{ fontSize: "10px", lineHeight: 1.3, opacity: 0.8, color: headerColor, fontWeight: 600 }}>
                    {d.description || getWeatherDescription(d.weather_code ?? 0) || i18n.t("newsWeather.Weather.pohoda")}
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
                      {i18n.t("newsWeather.Weather.den3")} {formatTemp(dayTemp)}
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
                      {i18n.t("newsWeather.Weather.nich3")} {formatTemp(nightTemp)}
                    </div>
                  )}
                </div>

                <div style={{ width: "85%", height: "1px", background: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", margin: "1px 0" }} />

                <div style={{ fontSize: "11px", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: "700", color: "#0099ff" }}>
                    {i18n.t("newsWeather.Weather.napriamok")} <span style={{ display: "inline-block", transform: `rotate(${windDeg}deg)`, fontSize: "13px" }}>⬇</span>
                  </div>
                  <div style={{ fontSize: "10px" }}><span>{i18n.t("newsWeather.Weather.sylaVitru")} {d.wind_speed || "0"}</span></div>
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
          onPointerDown={tabAutoplaySeconds > 0 ? pauseAutoplayOnTouch : undefined}
          onScrollCapture={tabAutoplaySeconds > 0 ? pauseAutoplayOnTouch : undefined}
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
                  title={i18n.t("newsWeather.Weather.zberehtyEnter")}
                  aria-label={i18n.t("newsWeather.Weather.zberehty")}
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
                  title={i18n.t("newsWeather.Weather.skasuvatyEsc")}
                  aria-label={i18n.t("newsWeather.Weather.skasuvaty")}
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
              <Tooltip content={i18n.t("newsWeather.Weather.dvichiKlatsnitShchobZminyty")} isDarkMode={isDarkMode}>
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
            {card.isMain && card.isFallbackLocation && <LocationHint isDarkMode={isDarkMode} />}
            <p style={{ fontSize: "10px", color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "#555" }}>
              {i18n.t("newsWeather.Weather.shyrota")} {card.lat?.toFixed(2)}{i18n.t("newsWeather.Weather.dovhota")} {card.lon?.toFixed(2)}
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
            {card.current && (
              <div style={{ marginRight: "auto", marginLeft: "-6px", display: "flex", alignItems: "center" }}>
                <WeatherTurkey item={card.current} isDarkMode={isDarkMode} />
              </div>
            )}
            <ActionButtons $isDarkMode={isDarkMode} style={{ position: "relative", zIndex: 2 }}>
              {isVoiceBeta && (
                <Tooltip content={isSpeaking ? i18n.t("newsWeather.Weather.zupynytyOzvuchennia") : i18n.t("newsWeather.Weather.ozvuchytyProhnozBeta")} isDarkMode={isDarkMode}>
                  <button
                    type="button"
                    onClick={handleSpeakForecast}
                    aria-label={isSpeaking ? i18n.t("newsWeather.Weather.zupynytyOzvuchennia") : i18n.t("newsWeather.Weather.ozvuchytyProhnoz")}
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
              <Tooltip content={i18n.t("newsWeather.Weather.nalashtuvanniaKartky")} isDarkMode={isDarkMode}>
              <button
                ref={(el) => { if (card.isMain && registerRef) registerRef('weatherGear', el); }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('domino-weather-gear-clicked'));
                  if (isDropdownOpen) handleCloseDropdown();
                  else setIsDropdownOpen(true);
                }}
                aria-label={i18n.t("newsWeather.Weather.nalashtuvanniaKartky")}
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
                  aria-label={i18n.t("newsWeather.Weather.zminytyOdynytsiVymiru")}
                  style={{ padding: "4px 12px", gap: "0" }}
                >
                  <MdStraighten style={{ color: "#ffb36c" }} />
                  <span>{i18n.t("newsWeather.Weather.odynytsiVymiru")}</span>
                  <UnitsCycleHint
                    items={UNIT_GROUPS.map((group) => {
                      const current =
                        group.options.find((o) => o.key === units[group.key]) || group.options[0];
                      return {
                        title: UNIT_SHORT_TITLES[group.key] || group.title,
                        current: current.label,
                        others: group.options.filter((o) => o !== current).map((o) => o.label),
                      };
                    })}
                  />
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
                          details: i18n.t("newsWeather.Weather.mistoKoordynatyTemperaturaC", { locationName: card.locationName, v1: card.lat?.toFixed(2), v2: card.lon?.toFixed(2), v3: card.current?.temp, v4: card.current?.feels_like, v5: card.current?.wind_speed, v6: card.current?.humidity, v7: card.current?.pressure }),
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
                    color: hasGeminiKey ? "#ffffff" : undefined,
                    cursor: hasGeminiKey ? "pointer" : "default",
                  }}
                >
                  <FiPlus style={{ transform: "scale(1.2)" }} /> {i18n.t("newsWeather.Weather.prykripytyDoShi")}
                  <SettingsItemHint>
                    {hasGeminiKey ? i18n.t("newsWeather.Weather.zapytatyShiProTsiu") : i18n.t("newsWeather.Weather.potribenKliuchGemini")}
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
                    <BiEdit/> {i18n.t("newsWeather.Weather.zminytyNazvu")}
                    <SettingsItemHint>{i18n.t("newsWeather.Weather.svoiaNazvaDliaTsiiei")}</SettingsItemHint>
                  </SettingsDropdownItem>
                )}
                <SettingsDropdownItem
                 isDarkMode={isDarkMode}
                  onClick={() => {
                    setIsBgModalOpen(true);
                      handleCloseDropdown();
                    }}
                  >
                    <BiImageAlt  /> {i18n.t("newsWeather.Weather.zminytyFon")}
                    <SettingsItemHint>{i18n.t("newsWeather.Weather.kartynkaPozaduPohody")}</SettingsItemHint>
                  </SettingsDropdownItem>
                <SettingsDropdownItem
                  isDarkMode={isDarkMode}
                  onClick={() => {
                    setIsCustomDatesModalOpen(true);
                    handleCloseDropdown();
                  }}
                >
                  <FaCalendarPlus /> {i18n.t("newsWeather.Weather.vstanovytyDaty")}
                  <SettingsItemHint>{i18n.t("newsWeather.Weather.svoiSviataIPodii")}</SettingsItemHint>
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
                  {i18n.t("newsWeather.Weather.spovishchenniaProNebezpeku")} {cardAlertsOn ? i18n.t("newsWeather.Weather.uvimk") : i18n.t("newsWeather.Weather.vymk")}
                  <SettingsItemHint>
                    {isWeatherAlertsEnabled()
                      ? i18n.t("newsWeather.Weather.hrozaUrahanZlyvaOzheled")
                      : i18n.t("newsWeather.Weather.spershuUvimknitUNalashtuvanniakh")}
                  </SettingsItemHint>
                </SettingsDropdownItem>
                <SettingsDropdownItem
                  isDarkMode={isDarkMode}
                  role="radio"
                  aria-checked={isMorningCard}
                  onClick={() => setMorningCardId(card.id)}
                >
                  <MdWbTwilight style={{ color: "#fb923c", opacity: isMorningCard ? 1 : 0.6 }} />
                  {i18n.t("newsWeather.Weather.rankovyiProhnozO")} {MORNING_BRIEF_HOUR}:00: {isMorningCard ? i18n.t("newsWeather.Weather.tsiaKartka") : i18n.t("newsWeather.Weather.obratyTsiu")}
                  <SettingsItemHint>
                    {morningPrefs.on
                      ? i18n.t("newsWeather.Weather.shchorankuTemperaturaOpadyI")
                      : i18n.t("newsWeather.Weather.spershuUvimknitUNalashtuvanniakh")}
                  </SettingsItemHint>
                </SettingsDropdownItem>
                {/* Автоперемикання вкладок для цієї картки: перемикач + шкала 10 с – 5 хв */}
                <SettingsDropdownItem as="div" role="group" aria-label={i18n.t("newsWeather.Weather.avtoperemykanniaVkladok")}>
                  <SpinningIcon $on={tabAutoplaySeconds > 0} $seconds={tabAutoplay.seconds}>
                    <MdAutorenew style={{ color: "#00eeff", opacity: tabAutoplaySeconds > 0 ? 1 : 0.6 }} />
                  </SpinningIcon>
                  <TabAutoplayControl
                    title={i18n.t("newsWeather.Weather.avtoperemykanniaVkladok")}
                    value={tabAutoplay}
                    onChange={setCardTabAutoplay}
                  />
                  <SettingsItemHint>
                    {tabAutoplayCard === null ? (
                      i18n.t("newsWeather.Weather.iakUZahalnykhNalashtuvanniakh")
                    ) : (
                      <>
                        {i18n.t("newsWeather.Weather.lysheDliaTsiieiKartky")}{" "}
                        <button
                          type="button"
                          onClick={resetCardTabAutoplay}
                          style={{ background: "none", border: "none", padding: 0, color: "#00eeff", textDecoration: "underline", cursor: "pointer", font: "inherit" }}
                        >
                          {i18n.t("newsWeather.Weather.iakUZahalnykh")}
                        </button>
                      </>
                    )}
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
                      {i18n.t("newsWeather.Weather.strilkyHortannia")} {carouselArrowsOn ? i18n.t("newsWeather.Weather.uvimk") : i18n.t("newsWeather.Weather.vymk")}
                      <SettingsItemHint>{i18n.t("newsWeather.Weather.knopkyPoBokakhKartok")}</SettingsItemHint>
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
                      {i18n.t("newsWeather.Weather.nomeryKartok")} {carouselNumbersOn ? i18n.t("newsWeather.Weather.uvimk") : i18n.t("newsWeather.Weather.vymk")}
                      <SettingsItemHint>{i18n.t("newsWeather.Weather.knopky123")}</SettingsItemHint>
                    </SettingsDropdownItem>
                  </>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "0",
                    padding: "2px 6px",
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
                    {i18n.t("newsWeather.Weather.zrobytyVyshcheKartku")}
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
                    {i18n.t("newsWeather.Weather.zrobytyNyzhcheKartku")}
                  </button>
                </div>
                {/* Стиль ліній графіка — у ряду з GPS / «Видалити»; два графіки на вибір */}
                <SettingsDropdownItem as="div" role="group" aria-label={i18n.t("newsWeather.Weather.stylHrafika")}>
                  <BiPalette style={{ color: "#c084fc" }} /> {i18n.t("newsWeather.Weather.stylHrafika")}
                  <div style={{ display: "flex", gap: "4px", marginTop: "2px" }}>
                    {[
                      { key: "hourly", label: i18n.t("newsWeather.Weather.hodynnyi") },
                      { key: "daily", label: i18n.t("newsWeather.Weather.16Dniv") },
                    ].map(({ key, label }) => (
                      <ChartStyleChip
                        key={key}
                        type="button"
                        onClick={() => {
                          setStyleModalChart(key);
                          handleCloseDropdown();
                        }}
                      >
                        {label}
                      </ChartStyleChip>
                    ))}
                  </div>
                </SettingsDropdownItem>
                {card.isMain ? (
                  <SettingsDropdownItem
                    onClick={handleGpsToggle}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      handleGpsToggle();
                    }}
                    title={isLocationEnabled ? i18n.t("newsWeather.Weather.vymknutyGpsZarazUvimkneno") : i18n.t("newsWeather.Weather.uvimknutyGpsZarazVymkneno")}
                    style={{
                      background: isLocationEnabled
                        ? "rgba(0,200,80,0.12)"
                        : "rgba(180,0,0,0.08)",
                      border: `1px solid ${gpsColor}`,
                      color: gpsColor,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <BiCurrentLocation style={{ transform: "scale(1.12)" }} />{" "}
                    {isLocationEnabled ? i18n.t("newsWeather.Weather.gpsUvimk") : i18n.t("newsWeather.Weather.gpsVymk")}
                    <SettingsItemHint>
                      {isLocationEnabled
                        ? i18n.t("newsWeather.Weather.pohodaTamDeVy")
                        : i18n.t("newsWeather.Weather.uvimknitShchobBachytySvoiu")}
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
                    <BiTrash style={{ transform: "scale(1.08)" }} /> {i18n.t("newsWeather.Weather.vydalyty")}
                    <SettingsItemHint>{i18n.t("newsWeather.Weather.prybratyTsiuKartku")}</SettingsItemHint>
                  </SettingsDropdownItem>
                )}
              </SettingsDropdownMenu>
            )}
        </CardHeader>
        <CustomTimersDisplay customDays={customDays} cardId={card.id} />
        <MobileTabBar>
          {[
            { key: "current", label: i18n.t("newsWeather.Weather.zaraz") },
            { key: "hourly",  label: i18n.t("newsWeather.Weather.hodynna") },
            { key: "daily",   label: i18n.t("newsWeather.Weather.misiachna") },
            { key: "ai",      label: i18n.t("newsWeather.Weather.smart") },
            { key: "archive", label: i18n.t("newsWeather.WeatherArchive.tab") },
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

        <TabContentArea $arrowsGap={carouselArrowsOn}>

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
    <IconBox $size="32px" $lh="1"><WeatherIcon isDarkMode={isDarkMode} item={card.current} /></IconBox>
    <TextContent $size="11px" $lh="1.2">
      {stripEmoji(card.current.iconPlaceholder) || i18n.t("newsWeather.Weather.minlyvaKhmarnist")}
    </TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label={i18n.t("newsWeather.Weather.temperaturaVidchuvaietsiaIak")}>
    <IconBox $color={parseFloat(card.current.temp) < 5 ? "#4da6ff" : parseFloat(card.current.temp) > 25 ? "#ff4d4d" : "#ffb36c"}>
      <TempThermometer
        temp={card.current.temp}
        mercuryColor={parseFloat(card.current.temp) < 5 ? "#4da6ff" : parseFloat(card.current.temp) > 25 ? "#ff4d4d" : "#ff9d3b"}
      />
    </IconBox>
    <TextContent $mt="0px">
      {formatTemp(card.current.temp)}
      <SubText $size="9px">{i18n.t("newsWeather.Weather.vidchuvaietsia")} {formatTemp(card.current.feels_like)}</SubText>
      {card.accuracy?.models?.length > 0 && (
        <SubText
          $size="9px"
          title={i18n.t("newsWeather.Weather.medianaProhnoziv", { v0: card.accuracy.models.map((m) => CONSENSUS_MODEL_LABELS[m] || m).join(", ") })}
        >
          {i18n.t("newsWeather.Weather.zvireno")} {card.accuracy.models.length} {i18n.t("newsWeather.Weather.modelei")}
          {typeof card.accuracy.tempSpread === "number" &&
            ` · ±${(units.temp === "F" ? card.accuracy.tempSpread * 1.8 : card.accuracy.tempSpread).toFixed(1)}${units.temp === "F" ? "°F" : units.temp === "K" ? "K" : "°C"}`}
        </SubText>
      )}
    </TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label={i18n.t("newsWeather.Weather.vidnosnaVolohist")}>
    <IconBox $color="#a8d8ff">
      <HumidityGlass humidity={card.current.humidity} />
    </IconBox>
    <TextContent $mt="10px">{i18n.t("newsWeather.Weather.volohist2")} {card.current.humidity ?? "—"}</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label={i18n.t("newsWeather.Weather.viterNapriamokPoryvyM", { wind_speed: card.current.wind_speed, wind_direction_10m: card.current.wind_direction_10m, v2: getWindDirectionText(card.current.wind_direction_10m), wind_gusts_10m: card.current.wind_gusts_10m })}>
    <IconBox $size="28px" $color="#00eeff" $rotate={Math.round((card.current.wind_direction_10m || 0) / 45) * 45 % 360} style={{ lineHeight: 1 }}><WindArrow size={26} /></IconBox>
    <TextContent $mt="0px" $lh="1.15">
      {i18n.t("newsWeather.Weather.shvydkistVitru")} {fmt.wind(card.current.windNum ?? card.current.wind_speed)}
      <SubText title={`${getWindDirectionText(card.current.wind_direction_10m)} (${card.current.wind_direction_10m}°)`} style={{ whiteSpace: "nowrap" }}>{card.current.wind_direction_10m}° {getWindDirectionShort(card.current.wind_direction_10m)}</SubText>
      <SubText $weight="bold" $opacity={0.9} style={{ color: isExtremeWind ? "#ff4d4d" : "inherit" }}>
        {i18n.t("newsWeather.Weather.poryvy2")} {fmt.wind(card.current.wind_gusts_10m)}
      </SubText>
    </TextContent>
  </IndicatorCard>

  <Tooltip content={i18n.t("newsWeather.Weather.tochkaRosyTemperaturaPry")} isDarkMode={isDarkMode}>
    <IndicatorCard aria-label={i18n.t("newsWeather.Weather.tochkaRosyTemperaturaPry")}>
      <IconBox $color="#00ffcc"><GiGrassMushroom /></IconBox>
      <TextContent>{i18n.t("newsWeather.Weather.tochkaRosy2")} {formatTemp(card.current.dew_point_2m)}</TextContent>
    </IndicatorCard>
  </Tooltip>

  <IndicatorCard aria-label={i18n.t("newsWeather.Weather.atmosfernyiTysk")} $pad="10px">
    <IconBox $color={parseFloat(card.current.pressure) < 1000 ? "#4da6ff" : parseFloat(card.current.pressure) > 1020 ? "#ff4d4d" : "#ffb36c"}>
      <PressureGauge pressure={card.current.pressure} />
    </IconBox>
    <TextContent>{i18n.t("newsWeather.Weather.atmosfernyiTysk2")} {fmt.pressure(card.current.pressure)}</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label={i18n.t("newsWeather.Weather.khmarnist")}>
    <IconBox $color="#c3cfdc">
      <CloudWithTrend cloudCover={card.current.cloud_cover} trend={getCloudTrend(card.current.cloud_cover, card.hourly)} />
    </IconBox>
    <TextContent $size="11px">{i18n.t("newsWeather.Weather.khmarnist4")} {card.current.cloud_cover}%</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label={i18n.t("newsWeather.Weather.vydymist")} $pad="0px">
    <IconBox 
      $opacity={Math.min(1, Math.max(0.3, (card.current.visibility || 10000) / 10000))}
      $color={(card.current.visibility || 10000) < 2000 ? "#ff4d4d" : "#9fb3c8"}
    >
      <VisibilityFog />
    </IconBox>
    <TextContent $size="10px">{i18n.t("newsWeather.Weather.vydymist4")} {card.current.visibility !== undefined ? fmt.visibility(card.current.visibility / 1000) : "—"}</TextContent>
  </IndicatorCard>

  <IndicatorCard aria-label={i18n.t("newsWeather.Weather.ufIndeksSoniachnaRadiatsiia")} $pad="10px">
    <IconBox $color={(card.current.uv_index || 0) > 5 ? "#ff4d4d" : (card.current.uv_index || 0) > 2 ? "#ff9900" : "#ffd700"}>
      <UvSun uv={card.current.uv_index} />
    </IconBox>
    <TextContent $size="10px">{i18n.t("newsWeather.Weather.ufIndeks3")} {card.current.uv_index ?? 0}</TextContent>
  </IndicatorCard>

  <Tooltip content={i18n.t("newsWeather.Weather.tovshchynaSnihovohoPokryvuSm")} isDarkMode={isDarkMode}>
    <IndicatorCard aria-label={i18n.t("newsWeather.Weather.snihovyiPokryv")}>
      <IconBox $color={getSnowStyle((card.current.snow_depth || 0) * 100).color} $opacity={getSnowStyle((card.current.snow_depth || 0) * 100).opacity}>
        <FaSnowflake />
      </IconBox>
      <TextContent $size="10px">
        {i18n.t("newsWeather.Weather.snih2")} {fmt.snow((card.current.snow_depth || 0) * 100)}
      </TextContent>
    </IndicatorCard>
  </Tooltip>

  <Tooltip content={i18n.t("newsWeather.Weather.temperaturaGruntu0Sm")} isDarkMode={isDarkMode}>
    <IndicatorCard aria-label={i18n.t("newsWeather.Weather.zamerzanniaTaTemperaturaGruntu")}>
      <IconBox $color={card.current.soil_temperature_0cm <= 0 ? "#4da6ff" : "#00cdff"}>
        <GiIceCube />
      </IconBox>
      <TextContent $size="10px">
        {i18n.t("newsWeather.Weather.grunt2")} {card.current.soil_temperature_0cm !== undefined ? formatTemp(card.current.soil_temperature_0cm) : "—"}
        <SubText $size="9px">{i18n.t("newsWeather.Weather.riven0C2")} {card.current.freezing_level_height != null ? fmt.height(card.current.freezing_level_height) : "—"}</SubText>
      </TextContent>
    </IndicatorCard>
  </Tooltip>

  <Tooltip content={i18n.t("newsWeather.Weather.vyparovuvanniaEt0MmPokazuie")} isDarkMode={isDarkMode}>
    <IndicatorCard aria-label={i18n.t("newsWeather.Weather.vyparovuvannia")}>
      <IconBox $color={card.current.evapotranspiration > 3 ? "#ff9900" : "#00eeff"}>
        <GiWaterRecycling />
      </IconBox>
      <TextContent $size="10px">
        {i18n.t("newsWeather.Weather.vyparovuvannia2")} {fmt.precip(card.current.evapotranspiration ?? 0, 2)}
      </TextContent>
    </IndicatorCard>
  </Tooltip>
  <DailyTips
    hourly={card.hourly}
    current={card.current}
    lat={card.lat}
    lon={card.lon}
    utcOffsetSeconds={card.utcOffsetSeconds}
    isDarkMode={isDarkMode}
    ui={{ IndicatorCard, IconBox, TextContent, SubText }}
  />
</DesktopTwoRowIndicators>
              </CurrentWeatherBanne>
            </CurrentWeatherBanner>
          )}


          {/* Годинний прогноз */}
          {activeTab === "hourly" && (
            <div style={hourlyBlocksFitArea || rowsFit(effectiveHourlyViewMode) ? { flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" } : undefined}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "6px",
                  flexShrink: 0,
                }}
              >
                {/* Вибір дня зліва, перемикач вигляду справа — в одному рядку */}
                {hourlyDayGroups.length > 1 && (
                  <DaySelect
                    $isDarkMode={isDarkMode}
                    value={selectedHourlyDay}
                    onChange={(event) => setSelectedHourlyDay(Number(event.target.value))}
                    aria-label={i18n.t("newsWeather.Weather.denPohodynnohoProhnozu")}
                  >
                    {hourlyDayGroups.map((group, index) => (
                      <option key={group.label} value={index}>
                        {group.title || group.label}
                      </option>
                    ))}
                  </DaySelect>
                )}
                {/* Блоки — гортання годин парами, як у 16 днях */}
                {effectiveHourlyViewMode === "blocks" && visibleHourly.length > 0 && (
                  <div style={{ flex: "1 1 220px", minWidth: 0 }}>{renderHourlyPager()}</div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                  <ViewToggleGroup $isDarkMode={isDarkMode}>
                    <ViewToggleButton
                      $active={effectiveHourlyViewMode === "charts"}
                      $isDarkMode={isDarkMode}
                      onClick={() => canShowHourlyChart && pickChartsMode("hourly")}
                      disabled={!canShowHourlyChart}
                      style={!canShowHourlyChart ? { opacity: 0.35, cursor: "not-allowed" } : undefined}
                      title={
                        hourlyChartAvailable
                          ? i18n.t("newsWeather.Weather.hrafiky")
                          : i18n.t("newsWeather.Weather.hrafikDostupnyiLysheNa")
                      }
                    >
                      <BiLineChart size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveHourlyViewMode === "blocks"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setHourlyViewMode("blocks")}
                      title={i18n.t("newsWeather.Weather.bloky")}
                    >
                      <BiGridAlt size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveHourlyViewMode === "rows"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setHourlyViewMode("rows")}
                      title={i18n.t("newsWeather.Weather.riadky")}
                    >
                      <BiListUl size={18} />
                    </ViewToggleButton>
                  </ViewToggleGroup>
                </div>
              </div>

              {effectiveHourlyViewMode === "charts" ? (
                visibleHourly && visibleHourly.length > 0 && wrapFs("hourly", (
                  <div
                    ref={hourlyChartPanelRef}
                    style={{
                      position: "relative",
                      width: "100%",
                      minHeight: fullscreenChart === "hourly" ? (isCapturing ? `${window.innerHeight}px` : "100vh") : undefined,
                      ...(fullscreenChart === "hourly" ? pseudoPanelStyle : null),
                      padding: fullscreenChart === "hourly" ? "16px" : undefined,
                      boxSizing: "border-box",
                      background: fullscreenChart === "hourly"
                        ? isDarkMode ? "#000" : "#f5f5f5"
                        : "transparent",
                    }}
                  >
                    {renderChartHeader("hourly", hourlyChartPanelRef, [
                      { key: "day", label: i18n.t("newsWeather.Weather.temperatura"), color: "#ffb36c", icon: <BsThermometerSun />, gradient: true },
                      { key: "wind", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon },
                    ], renderWindHint("hourly"))}
                    <div style={{ position: "relative", width: "100%" }}>
                      <ChartScrollWrapper>
                        <ChartInnerContainer
                          $width={fullscreenChart === "hourly" ? `max(100%, ${hourlyChartWidth}px)` : hourlyChartWidth}
                          $height={fullscreenChart === "hourly" ? fsChartHeight(140) : defaultChartHeight}
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
                    {renderColorScales(lineStyles.hourly.right)}
                  </div>
                ))
              ) : effectiveHourlyViewMode === "rows" ? (
                renderHourlyRows()
              ) : (
                renderHourlyBlocks()
              )}
            </div>
          )}

          {/* Прогноз на 16 днів */}
          {activeTab === "daily" && (
            <div style={dailyBlocksFitArea || rowsFit(effectiveDailyViewMode) ? { flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" } : undefined}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "6px",
                  flexShrink: 0,
                  // Таблиця: перемикачі липнуть зверху при прокрутці. Фон темний в обох темах —
                  // кнопки розраховані на темне фото (світлий текст неактивних)
                  ...(effectiveDailyViewMode === "table" && !isCapturing && {
                    position: "sticky",
                    top: 0,
                    zIndex: 5,
                    padding: "4px 6px",
                    borderRadius: "10px",
                    background: "rgba(10, 10, 18, 0.72)",
                    backdropFilter: "blur(6px)",
                  }),
                }}
              >
                {/* «По 2 дні» — гортання ліворуч у тому ж рядку, щоб нижній скролбар блоків був видно */}
                {effectiveDailyViewMode === "blocks" && dailyBlocksPaging > 0 && (
                  <div style={{ flex: "1 1 240px", minWidth: 0 }}>{renderDailyPager()}</div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {/* Вчорашній день — маленький перемикач-іконка (замість великого чекбокса) */}
                  {hasPastDay && (
                    <Tooltip content={showPastDay ? i18n.t("newsWeather.Weather.skhovatyVchorashniiDen") : i18n.t("newsWeather.Weather.pokazatyVchorashniiDen")} isDarkMode={isDarkMode}>
                      <ViewToggleGroup $isDarkMode={isDarkMode}>
                        <ViewToggleButton
                          type="button"
                          $active={showPastDay}
                          $isDarkMode={isDarkMode}
                          aria-pressed={showPastDay}
                          aria-label={i18n.t("newsWeather.Weather.pokazatyVchorashniiDen")}
                          onClick={() => setShowPastDay((v) => !v)}
                          style={{ padding: "4px 10px" }}
                        >
                          <BiHistory size={18} />
                        </ViewToggleButton>
                      </ViewToggleGroup>
                    </Tooltip>
                  )}
                  <ViewToggleGroup $isDarkMode={isDarkMode}>
                    <ViewToggleButton
                      $active={effectiveDailyViewMode === "charts"}
                      $isDarkMode={isDarkMode}
                      onClick={() => pickChartsMode("daily")}
                      title={i18n.t("newsWeather.Weather.hrafiky")}
                    >
                      <BiLineChart size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveDailyViewMode === "table"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setDailyViewMode("table")}
                      title={i18n.t("newsWeather.Weather.tablytsia")}
                    >
                      <BiTable size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveDailyViewMode === "blocks"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setDailyViewMode("blocks")}
                      title={i18n.t("newsWeather.Weather.bloky")}
                    >
                      <BiGridAlt size={18} />
                    </ViewToggleButton>
                    <ViewToggleButton
                      $active={effectiveDailyViewMode === "rows"}
                      $isDarkMode={isDarkMode}
                      onClick={() => setDailyViewMode("rows")}
                      title={i18n.t("newsWeather.Weather.riadky")}
                    >
                      <BiListUl size={18} />
                    </ViewToggleButton>
                  </ViewToggleGroup>
                </div>
              </div>

              {effectiveDailyViewMode === "charts" ? (
                <>
                  <div ref={dailyHeaderRef} style={{
                    ...chartHeaderRowStyle,
                    position: "sticky",
                    top: 0,
                    padding: "6px 8px",
                    background: isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(4px)",
                    borderBottom: "1px solid #ffb36c",
                    zIndex: 10,
                  }}>
                    {renderChartLegend([
                      { key: "day", label: i18n.t("newsWeather.Weather.den4"), color: "#ffb36c", icon: <FaSun /> },
                      { key: "night", label: i18n.t("newsWeather.Weather.nich4"), color: "#ff1493", icon: <BsMoonStarsFill /> },
                      { key: "wind", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon },
                    ], dailyHeaderWrapped ? renderTrendButton() : null)}
                    {renderChartHeaderTools("daily", dailyChartPanelRef, renderWindHint("daily"), dailyHeaderWrapped)}
                  </div>
                  {wrapFs("daily", (
                  <div
                    ref={dailyChartPanelRef}
                    style={{
                      position: "relative",
                      width: "100%",
                      minHeight: fullscreenChart === "daily" ? (isCapturing ? `${window.innerHeight}px` : "100vh") : undefined,
                      ...(fullscreenChart === "daily" ? pseudoPanelStyle : null),
                      padding: fullscreenChart === "daily" ? "16px" : undefined,
                      boxSizing: "border-box",
                      background: fullscreenChart === "daily"
                        ? isDarkMode ? "#000" : "#f5f5f5"
                        : "transparent",
                    }}
                  >
                    {fullscreenChart === "daily" && renderChartHeader("daily", dailyChartPanelRef, [
                      { key: "day", label: i18n.t("newsWeather.Weather.den4"), color: "#ffb36c", icon: <FaSun />, gradient: true },
                      { key: "night", label: i18n.t("newsWeather.Weather.nich4"), color: "#ff1493", icon: <BsMoonStarsFill />, gradient: true },
                      { key: "wind", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon },
                    ], renderWindHint("daily"), dailyFsHeaderRef, dailyFsHeaderWrapped)}
                    <div style={{ position: "relative", width: "100%" }}>
                      <ChartScrollWrapper ref={dailyChartRef}>
                        <ChartInnerContainer
                          $width={fullscreenChart === "daily" ? "max(100%, 900px)" : 900}
                          $height={fullscreenChart === "daily" ? fsChartHeight(170) : defaultChartHeight}
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
                    {renderColorScales(lineStyles.daily.right)}
                  </div>
                  ))}
                </>
              ) : effectiveDailyViewMode === "table" ? (
                renderDailyTable()
              ) : effectiveDailyViewMode === "rows" ? (
                renderDailyRows()
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
                  title={i18n.t("newsWeather.Weather.analizNaBaziUmov")}
                >
                  <BiLineChart style={{ fontSize: "14px" }} />
                  <span>{i18n.t("newsWeather.Weather.systemniPovidomlennia")}</span>
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
                      title={i18n.t("newsWeather.Weather.skopiiuvatyTekstProhnozu")}
                    >
                      <BiCheck style={{ fontSize: "14px" }} />
                      <span>{copiedForecast ? i18n.t("newsWeather.Weather.skopiiovano") : i18n.t("newsWeather.Weather.skopiiuvaty")}</span>
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
                      {i18n.t("newsWeather.Weather.povnyiZvit")}
                    </button>
                  </SmartTopActions>
              </SmartTopBar>

              {/* Експертні правила без ШІ */}
                <RuleSectionsGrid>
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
                            {badgeHas(badge, "rain") && <FaCloudRain style={{ marginRight: "4px" }} />}
                            {badgeHas(badge, "wind") && <BiWind style={{ marginRight: "4px" }} />}
                            {badgeHas(badge, "rise") && <BiLineChart style={{ marginRight: "4px" }} />}
                            {badgeHas(badge, "drop") && <BsThermometerSnow style={{ marginRight: "4px" }} />}
                            {badgeHas(badge, "night") && (
                              <BsMoonStarsFill style={{ marginRight: "4px" }} />
                            )}
                            <span>{badge}</span>
                          </RuleBadge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Ліва колонка */}
                  <RuleSectionsColumn>
                  {/* 1. Блок: Добовий хід (день / ніч) */}
                  <RuleSectionCard $isDarkMode={isDarkMode} $accent="#ffb300">
                    <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("dayNight")}>
                      <BsMoonStarsFill style={{ color: "#facc15", fontSize: "14px" }} />
                      <span>{i18n.t("newsWeather.Weather.dobovyiKontrastDenVs")}</span>
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
                      <span>{i18n.t("newsWeather.Weather.dynamikaDobyOpadyPik")}</span>
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

                  {/* 5. Блок: Атмосфера та самопочуття */}
                  {ruleForecast?.atmosphereNotes && ruleForecast.atmosphereNotes.length > 0 && (
                    <RuleSectionCard $isDarkMode={isDarkMode} $accent="#ec4899" $mobileLast>
                      <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("atmosphere")}>
                        <FaGaugeHigh style={{ color: "#ec4899", fontSize: "14px" }} />
                        <span>{i18n.t("newsWeather.Weather.atmosfernyiTyskTaFaktory")}</span>
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
                  </RuleSectionsColumn>

                  {/* Права колонка */}
                  <RuleSectionsColumn>
                  {/* 3. Блок: Тижневий тренд (різкий підйом або спад) */}
                  <RuleSectionCard $isDarkMode={isDarkMode} $accent="#a855f7">
                    <RuleSectionHeader $isDarkMode={isDarkMode} {...ruleHeaderProps("weekly")}>
                      <BiLineChart style={{ color: "#a855f7", fontSize: "14px" }} />
                      <span>{i18n.t("newsWeather.Weather.tyzhnevyiTrendTaDynamika")}</span>
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
                        <span>{i18n.t("newsWeather.Weather.poradyTaHarderob")}</span>
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

                  </RuleSectionsColumn>
                </RuleSectionsGrid>
            </AiSummaryBox>
          )}

          {/* Архів погоди: помісячні підсумки за ~14 місяців (Open-Meteo Archive) */}
          {activeTab === "archive" && (
            <WeatherArchive
              lat={card.lat}
              lon={card.lon}
              fmt={fmt}
              formatTemp={formatTemp}
              isDarkMode={isDarkMode}
            />
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
                  <WeatherIcon isDarkMode={isDarkMode} item={card.current} />
                </div>
                <div style={SIDE_CARD_TEXT_STYLE}>
                  <NameCardItem $active={activeTab === "current"}>{i18n.t("newsWeather.Weather.zaraz2")} {formatTemp(card.current?.temp)}</NameCardItem>
                  <SubNameCardItem $active={activeTab === "current"}>{i18n.t("newsWeather.Weather.vidchuvaietsia")} {formatTemp(card.current?.feels_like)}</SubNameCardItem>
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
                  <NameCardItem $active={activeTab === "hourly"}>{i18n.t("newsWeather.Weather.hodynna72h")}</NameCardItem>
                  <SubNameCardItem $active={activeTab === "hourly"}>{i18n.t("newsWeather.Weather.detalno72hDaliDo")}</SubNameCardItem>
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
                  <NameCardItem $active={activeTab === "daily"}>{i18n.t("newsWeather.Weather.prohnozNa16Dniv2")}</NameCardItem>
                  <SubNameCardItem $active={activeTab === "daily"}>{i18n.t("newsWeather.Weather.bundiuchyiHrafik")}</SubNameCardItem>
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
                    {i18n.t("newsWeather.Weather.smartProhnoz")}
                  </NameCardItem>
                  <SubNameCardItem $active={activeTab === "ai"}>
                    {i18n.t("newsWeather.Weather.ekspertniPravyla")}
                  </SubNameCardItem>
                </div>
              </div>
            </SideCardItem>

            <SideCardItem
              $active={activeTab === "archive"}
              onClick={() => setActiveTab("archive")}
            >
              <div style={SIDE_CARD_INNER_STYLE}>
                <div style={{ ...SIDE_CARD_ICON_STYLE, color: "#a3e635" }}><BiHistory /></div>
                <div style={SIDE_CARD_TEXT_STYLE}>
                  <NameCardItem $active={activeTab === "archive"}>{i18n.t("newsWeather.WeatherArchive.sideTitle")}</NameCardItem>
                  <SubNameCardItem $active={activeTab === "archive"}>{i18n.t("newsWeather.WeatherArchive.sideSub")}</SubNameCardItem>
                </div>
              </div>
            </SideCardItem>

            {/* Налаштування — відкриває те саме меню, що й шестерня вгорі */}
            <SideCardItem
              $active={isDropdownOpen && !isDropdownClosing}
              role="button"
              aria-label={i18n.t("newsWeather.Weather.nalashtuvanniaKartky")}
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
                    text: i18n.t("newsWeather.Weather.odynytsi", { v0: tempLabel(units.temp), v1: windLabel(units.wind) }),
                  },
                  { Icon: BiImageAlt, color: "#7dd3fc", text: i18n.t("newsWeather.Weather.zminytyFon") },
                  { Icon: FaCalendarPlus, color: "#ff1493", text: i18n.t("newsWeather.Weather.svoiDatyISviata") },
                  { Icon: BiEdit, color: "#a3e635", text: i18n.t("newsWeather.Weather.zminytyNazvu") },
                  {
                    Icon: cardAlertsOn ? MdNotificationsActive : MdNotificationsOff,
                    color: "#facc15",
                    text: i18n.t("newsWeather.Weather.spovishchennia", { v0: cardAlertsOn ? i18n.t("newsWeather.Weather.uvimk") : i18n.t("newsWeather.Weather.vymk") }),
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
                aria-label={isCitySidebarHidden ? i18n.t("newsWeather.Weather.pokazatyPanelMist") : i18n.t("newsWeather.Weather.skhovatyPanelMist")}
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
                      {isCitySidebarHidden ? i18n.t("newsWeather.Weather.pokazatyPanel") : i18n.t("newsWeather.Weather.skhovatyPanel")}
                    </NameCardItem>
                    <SubNameCardItem $active={!isCitySidebarHidden}>
                      {i18n.t("newsWeather.Weather.spysokMistZliva")}
                    </SubNameCardItem>
                  </div>
                </div>
              </SideCardItem>
            )}
          </SideCardsColumn>
        </DesktopLayoutWrapper>
      </WeatherCard>

      <ModalSuspense
        active={isAiModalOpen || isCustomDatesModalOpen || !!styleModalChart || isUnitsModalOpen || isCardSettingsOpen || isBgModalOpen}
        onCancel={() => {
          setIsAiModalOpen(false);
          setIsCustomDatesModalOpen(false);
          setStyleModalChart(null);
          setIsUnitsModalOpen(false);
          setIsCardSettingsOpen(false);
          setIsBgModalOpen(false);
        }}
      >
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
          title={styleModalChart === "hourly" ? i18n.t("newsWeather.Weather.stylLiniiPohodynnyiHrafik") : i18n.t("newsWeather.Weather.stylLiniiHrafikNa")}
          lines={
            styleModalChart === "hourly"
              ? [
                  { key: "temp", label: i18n.t("newsWeather.Weather.temperatura"), color: "#ffb36c", icon: <BsThermometerSun /> },
                  { key: "right", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon, autoFill: rightMetric === "precip", wind: rightMetric === "wind" },
                ]
              : [
                  { key: "day", label: i18n.t("newsWeather.Weather.den4"), color: "#ffb36c", icon: <FaSun /> },
                  { key: "night", label: i18n.t("newsWeather.Weather.nich4"), color: "#ff1493", icon: <BsMoonStarsFill /> },
                  { key: "right", label: rightMeta.label, color: rightMeta.color, icon: rightMeta.icon, wind: rightMetric === "wind" },
                  { key: "trendDay", label: i18n.t("newsWeather.Weather.trendDnia"), color: "#ffb36c", icon: <BiTrendingUp />, trend: true },
                  { key: "trendNight", label: i18n.t("newsWeather.Weather.trendNochi"), color: "#ff1493", icon: <BiTrendingUp />, trend: true },
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
      </ModalSuspense>
    </div>
  );
};
export default WeatherCardComponent;
