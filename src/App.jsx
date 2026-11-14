// Міста для тесту: Дубай (>30°C), Якутськ (<-30°C), Кейптаун (вітер >10 м/с). Графік have погодинну перевірку вітру та деталізовані причини небезпеки в підказках.
import React, {
  useState,
  useEffect,
  useCallback,
  memo,
  Suspense,
  useMemo,
  useRef,
  lazy,
} from "react";
import styled, { keyframes, css, createGlobalStyle } from "styled-components";
import localforage from "localforage";
import { getPref, setPref } from "./utils/prefsStore.js";
import { notifyWeatherHazardsLocal } from "./utils/emergencyAlerts.js";
import {
  initPushNotifications,
  isPushSubscribed,
  setPushPlaces,
} from "./utils/pushNotifications.js";
import {
  claimPendingReferral,
  trackInviteeActivity,
  BADGES,
  INVITE_ACTIVE_DAYS,
  INVITE_WINDOW_DAYS,
} from "./utils/referral.js";
import { GiSnowing } from "react-icons/gi";
//import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader.jsx";
import WeatherCardComponent, {
  AihelpTitle,
  CARD_BG_CHANGE_EVENT,
  DEFAULT_CARD_BG,
} from "./components/Weather/Weather.jsx";
import Maintenance from "./components/Maintenance.jsx";
import { getMaintenanceStatus, loadFirebase } from "./firebaseLazy.js";
import fogBackground from "./media/backgrounds/scenes/foggy-forest-loader.webp";
import userDefault from "./media/ui/user-placeholder.webp";
import turkeys from "./media/turkeys/kate.webp";
// Ресурси для фонового завантаження кат-сцени
import startImage from "./media/backgrounds/scenes/foggy-forest-loader.webp";
import {
  assetMap,
  songAiKnowledge,
} from "./components/MusicPhoto/MusicPhoto.assets.jsx";
import { DEFAULT_SITE_SECTIONS } from "./components/Header/Menu.jsx";
import { BASE_BG_TRACKS } from "./utils/bgMusicCatalog";
import { useBgMusicSuspended } from "./utils/bgMusicSuspend";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import AuthorsDirectoryModal from "./components/Header/AuthorsDirectoryModal.jsx";
import SupportBanner from "./components/Support/SupportBanner.jsx";
import { notifySupportMoment } from "./components/Support/supportNudge.js";
import Hero from "./components/Hero/Hero.jsx";
import HeroClock from "./components/Hero/HeroClock.jsx";
import { DecoratorProvider } from "./components/Decorator/DecoratorContext.jsx";
import { sanitizeWeatherCards } from "./utils/weatherPersistence.js";
import { IoThunderstorm, IoRainy } from "react-icons/io5";
import DecoratorOverlay from "./components/Decorator/DecoratorOverlay.jsx";
import SiteContextMenu from "./components/SiteContextMenu.jsx";
import { analyzeSearchQuery } from "./utils/searchAnalyzer.js";
import { findCityInDatabase, getCitySlug, getCitySeo } from "./utils/citiesDatabase.js";
import { FaSmog } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaCloudMoonRain, FaCloudMoon } from "react-icons/fa";
import { LiaCloudSunRainSolid, LiaCloudMoonRainSolid, LiaCloudSunSolid } from "react-icons/lia";
import { stripSecrets } from "./utils/passwordHash";
import { syncClock } from "./utils/serverClock";
import { useLanguageEffect } from "./i18n/useI18nHelpers.js";
import toast from "react-hot-toast";
import {
  SETTINGS_SYNC_DAILY_LIMIT,
  SETTINGS_SYNC_COUNTER_KEY,
  SETTINGS_SYNC_PENDING_KEY,
  SETTINGS_SYNC_DEBOUNCE_MS,
  getTodayKey,
  countForToday,
  toDayKey,
  stableStringify,
  toFirestoreSafe,
} from "./utils/settingsSync";
import {
  CLOUD_LIMITS,
  usedTodayFromCloud,
  writeWithDailyCounter,
} from "./utils/cloudCounter";
import { MotionConfig, Reorder, useDragControls } from "framer-motion";
import { useAnimationsDisabled, setAnimationsDisabled } from "./utils/animationsPref";
import {
  useBeta,
  setBetaOn,
  usePrefValue,
  togglePrefFlag,
  CITY_SIDEBAR_HIDDEN_KEY,
  CAROUSEL_ARROWS_HIDDEN_KEY,
  CAROUSEL_NUMBERS_HIDDEN_KEY,
} from "./utils/betaFeatures";
import GpsCardReturnDialog from "./components/Weather/GpsCardReturnDialog.jsx";
import { aggregateHourlyByDay } from "./utils/dailyAggregates";
import { buildConsensusUrl, blendWithConsensus } from "./utils/weatherConsensus";
import { getStykhiiaFont } from "./utils/stykhiiaFont";
import { FaMagnifyingGlass, FaGripVertical, FaArrowsUpDown } from "react-icons/fa6";
const WEATHER_CACHE_TTL_MS = 10 * 60 * 1000;
// Консенсус — найдорожчий запит до Open-Meteo (~11 «викликів»), а моделі оновлюються
// раз на 1–6 год, тож кешуємо його на годину. 55 хв, а не рівно 60: щогодинне
// автооновлення карток має отримати свіжі дані, а не кеш віком 59:59.
const CONSENSUS_CACHE_TTL_MS = 55 * 60 * 1000;

// Прогнози 7 незалежних моделей для звірки (див. utils/weatherConsensus.js).
// Не вдалося — повертаємо null, і картка лишається на best_match.
const fetchWeatherConsensus = async (lat, lon) => {
  const cacheKey = `om_consensus_v1_${Number(lat).toFixed(2)},${Number(lon).toFixed(2)}`;
  try {
    const cached = await localforage.getItem(cacheKey);
    if (cached?.data && Date.now() - cached.time < CONSENSUS_CACHE_TTL_MS) {
      return cached.data;
    }
  } catch {
    // кеш недоступний — просто йдемо в мережу
  }
  try {
    const res = await axios.get(buildConsensusUrl(lat, lon), { timeout: 15000 });
    if (!res.data?.hourly?.time?.length) return null;
    localforage.setItem(cacheKey, { time: Date.now(), data: res.data }).catch(() => {});
    return res.data;
  } catch (error) {
    console.warn("Консенсус моделей недоступний, лишаємо best_match:", error?.message);
    return null;
  }
};
// Ліміти карток погоди: власні картки (без GPS) і нові створення на добу (лічильник у Firestore)
const MAX_CUSTOM_WEATHER_CARDS = 9;
// Бета «Вимкнути GPS-картку»: її місце можна віддати ще одній власній картці
const maxCustomCardsFor = (hideGpsCard) =>
  hideGpsCard ? MAX_CUSTOM_WEATHER_CARDS + 1 : MAX_CUSTOM_WEATHER_CARDS;
const cardLimitMessage = (hideGpsCard) =>
  hideGpsCard
    ? `Можна мати не більше ${maxCustomCardsFor(true)} карток погоди (GPS-картку вимкнено в бета-функціях).`
    : `Можна мати не більше ${MAX_CUSTOM_WEATHER_CARDS} власних карток погоди плюс поточну GPS-картку.`;
// Понад цю кількість — попередження про навантаження на пристрій
const SOFT_CUSTOM_WEATHER_CARDS = 5;
const MAX_DAILY_CARD_ADDITIONS = 20;
const Aihelp = lazy(() => import("./components/Aihelp/Aihelp.jsx"));
const ShopModal = lazy(() => import("./components/Modals/ShopModal.jsx"));
const ClimateMap = lazy(() => import("./components/ClimateMap/ClimateMap.jsx"));
const Modal = lazy(() => import("./components/Modals/Modal.jsx"));
const UserSettingsModal = lazy(
  () => import("./components/Modals/UserSettingsModal.jsx"),
);
const TermsModal = lazy(
  () => import("./components/Modals/UserSearchModal.jsx"),
);

const GlobalFilterLock = createGlobalStyle`
  ${(props) =>
    props.$locked &&
    css`
      html,
      body,
      #root,
      .App {
        filter: none !important;
        backdrop-filter: none !important;
      }
      /* Візуальні фільтри тепер живуть на окремому шарі (useVisualFilters) */
      #visual-filters-layer,
      #visual-filters-blends {
        display: none !important;
      }
    `}
`;
const levitate = keyframes`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`;
const pulseText = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`;
const StyledSectionContainer = styled.div`
  background-color: ${(props) =>
    props.$isStickyBgMode
      ? "transparent"
      : props.$isDarkMode
        ? "#000000"
        : "#ffffff"};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#000000")};
  transition:
    background-color 0.5s ease,
    backdrop-filter 0.5s ease;
  border-radius: 20px;
  margin: 10px 0;
  display: ${(props) => (props.$isHidden ? "none" : "block")};
`;
const getWeatherIcon = (code, isDay = 1) => {
  if (code === 0) return isDay ? "☀️ Сонячно" : "🌙 Місячно";
  if (code >= 1 && code <= 3) return isDay ? "🌤️ Мінлива хмарність" : "☁️ Мінлива хмарність";
  if (code >= 45 && code <= 48) return "☁️ Туман";
  if (code >= 51 && code <= 55) return "🌧️ Мряка";
  if (code >= 56 && code <= 57) return "🌧️ Мряка з снігом";
  if (code >= 61 && code <= 65) return "🌧️ Дощ";
  if (code >= 66 && code <= 67) return "🌧️ Дощ з снігом";
  if (code >= 71 && code <= 75) return "❄️ Снігопад";
  if (code === 77) return "❄️ Сніжна крупа";
  if (code >= 80 && code <= 82) return "🌦️ Зливовий дощ";
  if (code >= 85 && code <= 86) return "❄️ Зливовий сніг";
  if (code >= 95 && code <= 99) return "⛈️ Гроза";
  return "☁️ Хмарно";
};

const getWeatherSummaryText = (code, isDay = 1) => {
  if (code === 0) return isDay ? "Сонячно" : "Місячно";
  if (code >= 1 && code <= 3) return isDay ? "Мінлива хмарність" : "Нічна мінлива хмарність";
  if (code >= 45 && code <= 48) return "Туманно";
  if (code >= 51 && code <= 55) return "Мряка";
  if (code >= 56 && code <= 57) return "Мряка з снігом";
  if (code >= 61 && code <= 65) return "Дощ";
  if (code >= 66 && code <= 67) return "Дощ з снігом";
  if (code >= 71 && code <= 75) return "Сніг";
  if (code === 77) return "Сніжна крупа";
  if (code >= 80 && code <= 82) return "Зливовий дощ";
  if (code >= 85 && code <= 86) return "Зливовий сніг";
  if (code >= 95 && code <= 99) return "Гроза";
  return "Хмарно";
};

export const getWeatherIconSymbol = (code, isDay = 1) => {
  if (code === 0) return isDay ? <FaSun /> : <BsMoonStarsFill />;
  if (code >= 1 && code <= 3) return isDay ? <LiaCloudSunSolid /> : <FaCloudMoon />;
  if (code >= 45 && code <= 48) return <FaSmog/>;
  if (code >= 51 && code <= 55) return <IoRainy />;
  if (code >= 56 && code <= 57) return <IoRainy />;
  if (code >= 61 && code <= 65) return isDay ? <LiaCloudSunRainSolid /> : <FaCloudMoonRain />;
  if (code >= 66 && code <= 67) return isDay ? <LiaCloudSunRainSolid /> : <FaCloudMoonRain />;
  if (code >= 71 && code <= 75) return <GiSnowing />;
  if (code === 77) return <GiSnowing />;
  if (code >= 80 && code <= 82) return isDay ? <LiaCloudSunRainSolid /> : <LiaCloudMoonRainSolid />;
  if (code >= 85 && code <= 86) return <GiSnowing />;
  if (code >= 95 && code <= 99) return <IoThunderstorm />;
  return <FaSmog/>;
};
const ThemeWrapper = styled.div`
  background-color: ${(props) =>
    props.$isStickyBgMode
      ? "transparent"
      : props.$isDarkMode
        ? "#000000"
        : "transparent"};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "inherit")};
  min-height: 100vh;
  transition:
    background-color 0.5s ease,
    background 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
`;

const WeatherCardsContainer = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 42px;
  justify-content: flex-start;
  width: 100%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 18px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.12);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #00ffe5, #8bdcff);
    border-radius: 999px;
    border: 3px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #6ef5ea, #b3ecff);
  }

  > * {
    scroll-snap-align: center;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
  }
`;

/* Плавне зникнення/поява стрілок і номерів, коли їх вимикають у налаштуваннях */
const CAROUSEL_TOGGLE_TRANSITION = "0.3s ease";

/* Номери карток: на телефоні — під картками; на планшеті/ПК ($inCard) — у нижній смузі
   картки, під її основною частиною (координати з коду). Проміжки між кнопками кліки не ловлять.
   $hidden — вимкнені в налаштуваннях: плавно тануть і зсуваються вниз */
const CarouselNav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  z-index: 9000;
  margin-top: 8px;
  max-height: 200px;
  overflow: hidden;
  transition:
    opacity ${CAROUSEL_TOGGLE_TRANSITION},
    transform ${CAROUSEL_TOGGLE_TRANSITION},
    max-height ${CAROUSEL_TOGGLE_TRANSITION},
    margin-top ${CAROUSEL_TOGGLE_TRANSITION},
    visibility ${CAROUSEL_TOGGLE_TRANSITION};

  ${(props) =>
    props.$hidden &&
    css`
      opacity: 0;
      visibility: hidden;
      max-height: 0;
      margin-top: 0;
      pointer-events: none;
    `}

  ${(props) =>
    props.$inCard &&
    css`
      position: absolute;
      margin: 0;
      max-height: none;
      overflow: visible;
      padding: 0 10px;
      box-sizing: border-box;
      transform: translateY(${props.$hidden ? "calc(-50% + 12px)" : "-50%"});
      pointer-events: none;

      & > button {
        pointer-events: ${props.$hidden ? "none" : "auto"};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
      }
    `}

  ${(props) => props.$noAnim && "transition: none;"}
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
const CarouselSideButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.$direction === "previous" ? "left: 42px;" : "right: 42px;")}
  /* Телефон: стрілки майже біля країв екрана (зліва запас під 3D-грань, що виступає на 10px) */
  @media (max-width: 767px) {
    ${(props) => (props.$direction === "previous" ? "left: 12px;" : "right: 4px;")}
  }
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  
  border: 2px solid #00ffe5;
  border-radius: 6px;
  background: #000;
  color: #00ffe5;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
  box-shadow: 0 0 12px rgba(0, 255, 229, 0.3);
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    opacity ${CAROUSEL_TOGGLE_TRANSITION},
    visibility ${CAROUSEL_TOGGLE_TRANSITION};

  /* Вимкнені в налаштуваннях — плавно тануть (transform зайнятий левітацією, тож лише прозорість) */
  ${(props) =>
    props.$hidden &&
    css`
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    `}
  ${(props) =>
    props.$noAnim && "transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;"}
  @media (prefers-reduced-motion: reduce) {
    transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  /* Підключення анімації левітації */
  animation: ${levitate} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${pulseText} 2.5s ease-in-out infinite;
  }

  /* 1. Задня грань */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 44px;
    height: 40px;
    border-top: 2px solid rgb(0, 255, 229);
    border-left: 2px solid rgb(0, 255, 229);
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 6px;
    z-index: -2;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  /* 2. З'єднувальні лінії */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 54px;
    height: 54px;
    z-index: -1;
    pointer-events: none;
    
    background: 
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 0 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 100% 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 0 100% / 14px 14px no-repeat;
    transition: all 0.2s ease;
  }

  &:hover {
    background: #000;
    animation-play-state: paused;
    box-shadow: 0 0 18px rgba(0, 255, 229, 0.6);
    
    &::before {
      border-color: rgba(0, 255, 229, 0.9);
      top: -12px;
      left: -12px;
    }

    &::after {
      top: -12px;
      left: -12px;
      width: 56px;
      height: 56px;
      background-size: 16px 16px;
    }

    & > * { animation-duration: 1.2s;
    }
  }

  &:active {
    transform: translateY(calc(-50% + 2px)) scale(0.96);
  }
`;
const CarouselPageButton = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.$active ? "#fc7a00" : "#00ffe5")};
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  &:hover {
    background: ${(props) => (props.$active ? "#fdd9b6" : "#3095b7")};
  }
`;

const WeatherCarouselWrapper = styled.div`
  position: relative;
  z-index: 1800;
  isolation: isolate;
`;

const CityJumpWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 6px;
  width: min(420px, calc(100% - 16px));
  margin: 0 auto 10px;
  z-index: 9500;
`;

/* Бета «Перетягування карток»: кнопка біля пошуку й список, який можна сортувати */
const ReorderToggle = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 2px solid #00ffe5;
  background: ${(props) => (props.$active ? "#00ffe5" : props.$isDarkMode ? "#000" : "#fff")};
  color: ${(props) => (props.$active ? "#000" : props.$isDarkMode ? "#00ffe5" : "#006b61")};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 255, 229, 0.25);

  &:hover {
    box-shadow: 0 0 16px rgba(0, 255, 229, 0.5);
  }

  @media (max-width: 420px) {
    & > span {
      display: none;
    }
  }
`;

const ReorderHint = styled.p`
  margin: 0 0 6px;
  font-size: 12px;
  opacity: 0.75;
  color: ${(props) => (props.$isDarkMode ? "#e6fffc" : "#111")};
`;

const ReorderRowItem = styled(Reorder.Item)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  margin-bottom: 4px;
  border-radius: 6px;
  list-style: none;
  border: 1px solid rgba(0, 255, 229, 0.35);
  background: ${(props) => (props.$isDarkMode ? "#111" : "#f5f8fc")};
  color: ${(props) => (props.$isDarkMode ? "#e6fffc" : "#111")};
  font-size: 14px;
  user-select: none;

  & > span {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const EmptyWeatherNote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 12px auto;
  padding: 18px 16px;
  max-width: 440px;
  text-align: center;
  border-radius: 10px;
  border: 2px dashed rgba(0, 255, 229, 0.5);
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.92)")};
  color: ${(props) => (props.$isDarkMode ? "#e6fffc" : "#111")};
  font-size: 14px;

  & > button {
    padding: 8px 14px;
    border-radius: 8px;
    border: 2px solid #00ffe5;
    background: transparent;
    color: inherit;
    font-weight: bold;
    cursor: pointer;
  }
`;

const DragHandle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border: none;
  border-radius: 6px;
  background: rgba(0, 255, 229, 0.15);
  color: inherit;
  cursor: grab;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`;

const ReorderRow = ({ item, index, isDarkMode, onDragEnd }) => {
  const controls = useDragControls();
  return (
    <ReorderRowItem
      value={item.id}
      dragListener={false}
      dragControls={controls}
      onDragEnd={onDragEnd}
      $isDarkMode={isDarkMode}
      whileDrag={{ scale: 1.03, boxShadow: "0 6px 18px rgba(0, 255, 229, 0.35)" }}
    >
      <DragHandle
        type="button"
        aria-label={`Перетягнути картку «${item.label}»`}
        onPointerDown={(e) => {
          e.preventDefault();
          controls.start(e);
        }}
      >
        <FaGripVertical />
      </DragHandle>
      <span title={item.label}>
        {index + 1}. {item.isMain ? "📍 " : ""}
        {item.label}
      </span>
    </ReorderRowItem>
  );
};

/* Ряд «перемикач анімацій + заголовок Погода» над картками.
   З 768px пошук міст — бокова панель зліва від карток, на телефоні — випадаючий список над ними */
const WIDE_WEATHER_ROW_QUERY = "(min-width: 768px)";

/* z-index: над каруселлю (1800), але під фіксованою шапкою сайту (1900),
   інакше при прокрутці «Анімації» й «Погода» налазять на шапку */
const WeatherTitleRow = styled.div`
  position: relative;
  z-index: 1850;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  gap: 8px;
  margin-bottom: 4px;
  & > * {
    margin-left: 0 !important;
    margin-bottom: 0 !important;
  }
`;

const useMediaQuery = (query) => {
  const getMatch = () =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia(query).matches
      : false;
  const [matches, setMatches] = useState(getMatch);
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
};

/* Перемикач «Анімації та розмиття» поруч із «Погода»: та сама висота, заокруглення й z-index, щоб не провалювалась у липкому режимі */
const AnimationsToggleButton = styled.button`
  position: relative;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 10px;
  border: 2px solid ${(props) => (props.$off ? "#888" : "rgba(0, 255, 229, 0.6)")};
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 0, 0, 0.93)" : "rgb(255, 255, 255)")};
  color: ${(props) =>
    props.$off ? (props.$isDarkMode ? "#bbb" : "#555") : props.$isDarkMode ? "#00ffe5" : "#006b61"};
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 0 12px rgba(0, 255, 229, 0.4);
  }
`;

const AnimationsSwitchTrack = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 22px;
  border-radius: 11px;
  border: 1.5px solid ${(props) => (props.$on ? "#00ffe5" : "#888")};
  background: ${(props) => (props.$on ? "rgba(0, 255, 229, 0.35)" : "#2a2a2a")};
  transition: background 0.2s ease, border-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => (props.$on ? "20px" : "2px")};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    transform: translateY(-50%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    transition: left 0.2s ease;
  }
`;

const AnimationsStateLabel = styled.span`
  font-weight: normal;
  font-size: 12px;
  opacity: 0.85;
  min-width: 62px;
  text-align: left;

  /* На вузьких екранах стан і так видно по перемикачу — звільняємо місце під довшу назву */
  @media (max-width: 520px) {
    display: none;
  }
`;

/* «Анімації та розмиття»: на телефонах дозволяємо перенос у два рядки, щоб не вилазило за екран */
const AnimationsToggleText = styled.span`
  @media (max-width: 520px) {
    white-space: normal;
    line-height: 1.1;
    text-align: left;
    max-width: 92px;
  }
`;

const WeatherAnimationsToggle = ({ isDarkMode }) => {
  const animationsDisabled = useAnimationsDisabled();
  const isOn = !animationsDisabled;
  return (
    <AnimationsToggleButton
      type="button"
      role="switch"
      $off={animationsDisabled}
      $isDarkMode={isDarkMode}
      aria-checked={isOn}
      aria-label={`Анімації та розмиття: ${isOn ? "увімкнено" : "вимкнено"}`}
      onClick={() => setAnimationsDisabled(!animationsDisabled)}
    >
      <AnimationsToggleText>Анімації та розмиття</AnimationsToggleText>
      <AnimationsSwitchTrack $on={isOn} aria-hidden="true" />
      <AnimationsStateLabel aria-hidden="true">
        {isOn ? "увімкнено" : "вимкнено"}
      </AnimationsStateLabel>
    </AnimationsToggleButton>
  );
};

const CityJumpToggle = styled.button`
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 14px;

  /* Лупа й стрілка не стискаються, текст обрізається трьома крапками */
  & > svg,
  & > span:last-child {
    flex-shrink: 0;
  }
  & > span:first-of-type {
    flex: 1;
    min-width: 0;
    text-align: left;
  }
  border-radius: 8px;
  border: 2px solid #00ffe5;
  background: ${(props) => (props.$isDarkMode ? "#000" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#00ffe5" : "#006b61")};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 255, 229, 0.25);

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    box-shadow: 0 0 16px rgba(0, 255, 229, 0.5);
  }
`;

const CityJumpDropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #00ffe5;
  background: ${(props) => (props.$isDarkMode ? "#0a0a0a" : "#fff")};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`;

const CityJumpInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 7px 10px;
  margin-bottom: 6px;
  border-radius: 6px;
  border: 1.5px solid rgba(0, 255, 229, 0.6);
  background: ${(props) => (props.$isDarkMode ? "#000" : "#f5f8fc")};
  color: ${(props) => (props.$isDarkMode ? "#00ffe5" : "#000")};
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ffe5;
  }
`;

const CityJumpList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 240px;
  overflow-y: auto;
`;

const CityJumpItem = styled.li`
  & > button {
    width: 100%;
    text-align: left;
    padding: 7px 10px;
    border: none;
    border-radius: 6px;
    background: ${(props) => (props.$active ? "#fc7a00" : "transparent")};
    color: ${(props) => (props.$active ? "#000" : props.$isDarkMode ? "#e6fffc" : "#111")};
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > button:hover {
    background: ${(props) => (props.$active ? "#fdd9b6" : "rgba(0, 255, 229, 0.2)")};
  }
`;

const CityJumpEmpty = styled.div`
  padding: 7px 10px;
  font-size: 13px;
  opacity: 0.7;
  color: ${(props) => (props.$isDarkMode ? "#e6fffc" : "#111")};
`;

/* Бокова панель міст зліва від карток: планшет — вузька (120px), ПК — ширша.
   На телефоні замість неї лишається випадаючий список над картками */
const CITY_SIDEBAR_DESKTOP_MEDIA = "@media (min-width: 1200px)";

const WeatherCarouselLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

/* Колонка з картками; від неї рахуються стрілки ◀ ▶ і позиції карток при прокрутці */
const CarouselMain = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`;

const CITY_SIDEBAR_TRANSITION = "0.35s cubic-bezier(0.4, 0, 0.2, 1)";

/* Обгортка панелі: її ширина плавно їде 120/210px ↔ 0, і картки так само плавно
   розширюються/звужуються. Від'ємний відступ «з'їдає» проміжок між панеллю й картками.
   overflow: clip з запасом — щоб не обрізати світіння рамки панелі */
const CitySidebarShell = styled.div`
  flex: 0 0 ${(props) => (props.$collapsed ? "0px" : "120px")};
  min-width: 0;
  margin-right: ${(props) => (props.$collapsed ? "-8px" : "0px")};
  overflow: hidden;
  overflow: clip;
  overflow-clip-margin: 12px;
  transition:
    flex-basis ${CITY_SIDEBAR_TRANSITION},
    margin-right ${CITY_SIDEBAR_TRANSITION};

  ${CITY_SIDEBAR_DESKTOP_MEDIA} {
    flex-basis: ${(props) => (props.$collapsed ? "0px" : "210px")};
  }

  ${(props) => props.$noAnim && "transition: none;"}
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* Панель стоїть на місці (не їде за прокруткою); верх і висота — точно як у рамки
   поточної картки (задаються з коду), зайві міста прокручуються всередині.
   Ширина фіксована — під час згортання панель не стискається, а виїжджає вліво й тьмяніє */
const CitySidebar = styled.aside`
  width: 120px;
  box-sizing: border-box;
  max-height: min(520px, 75vh);
  opacity: ${(props) => (props.$collapsed ? 0 : 1)};
  transform: translateX(${(props) => (props.$collapsed ? "-24px" : "0")});
  transition:
    opacity ${CITY_SIDEBAR_TRANSITION},
    transform ${CITY_SIDEBAR_TRANSITION};
  ${(props) => props.$noAnim && "transition: none;"}
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px;
  border-radius: 10px;
  border: 2px solid #00ffe5;
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 0, 0, 0.93)" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#00ffe5" : "#006b61")};
  box-shadow: 0 0 10px rgba(0, 255, 229, 0.25);
  z-index: 9500;

  ${CityJumpInput} {
    margin: 0;
    padding: 5px 6px;
    font-size: 12px;
  }

  ${ReorderRowItem} {
    gap: 4px;
    padding: 4px;
    font-size: 12px;
  }

  ${DragHandle} {
    width: 22px;
    height: 22px;
  }

  ${CITY_SIDEBAR_DESKTOP_MEDIA} {
    width: 210px;
    padding: 8px;

    ${CityJumpInput} {
      padding: 7px 10px;
      font-size: 14px;
    }

    ${ReorderRowItem} {
      gap: 8px;
      padding: 6px 8px;
      font-size: 14px;
    }

    ${DragHandle} {
      width: 28px;
      height: 28px;
    }
  }
`;

const CitySidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-size: 12px;
  font-weight: bold;

  & > span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${CITY_SIDEBAR_DESKTOP_MEDIA} {
    font-size: 14px;
  }
`;

const CitySidebarIconButton = styled.button`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 6px;
  border: 1.5px solid #00ffe5;
  background: ${(props) => (props.$active ? "#00ffe5" : "transparent")};
  color: ${(props) => (props.$active ? "#000" : "inherit")};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 255, 229, 0.5);
  }
`;

/* Низ панелі: перемикачі стрілок ◀ ▶ і номерів 1, 2, 3… */
const CitySidebarFooter = styled.div`
  display: flex;
  gap: 4px;
  flex-shrink: 0;

  & > button {
    flex: 1;
    width: auto;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: -0.5px;
  }

  ${CITY_SIDEBAR_DESKTOP_MEDIA} {
    gap: 6px;

    & > button {
      font-size: 13px;
    }
  }
`;

/* Список міст у панелі: тягнеться на всю доступну висоту, прокручується сам */
const CitySidebarList = styled(CityJumpList)`
  position: relative;
  flex: 1;
  min-height: 0;
  max-height: none;
`;

/* Місто в панелі — плитка з фото фону цієї картки (як «Годинна» / «Прогноз на 16 днів») */
const CitySidebarTile = styled.button`
  width: 100%;
  min-height: 52px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1px;
  margin-bottom: 6px;
  padding: 6px;
  border-radius: 8px;
  border: 2px solid ${(props) => (props.$active ? "#fc7a00" : "rgba(0, 255, 229, 0.35)")};
  background:
    linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.8)),
    ${(props) => (props.$bg ? `url("${props.$bg}") center/cover no-repeat,` : "")}
    #111;
  box-shadow: ${(props) => (props.$active ? "0 0 12px rgba(252, 122, 0, 0.6)" : "none")};
  color: #fff;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.$active ? "#fdd9b6" : "#00ffe5")};
    box-shadow: 0 0 10px rgba(0, 255, 229, 0.45);
  }

  ${CITY_SIDEBAR_DESKTOP_MEDIA} {
    min-height: 68px;
    padding: 8px 10px;
  }
`;

const CitySidebarTileName = styled.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  ${CITY_SIDEBAR_DESKTOP_MEDIA} {
    font-size: 15px;
  }
`;

/* Країна під назвою: на вузькій планшетній панелі ховаємо, щоб не тіснило */
const CitySidebarTileSub = styled.span`
  display: none;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  opacity: 0.85;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  ${CITY_SIDEBAR_DESKTOP_MEDIA} {
    display: block;
  }
`;

const sidebarReorderGroupStyle = {
  position: "relative",
  flex: 1,
  minHeight: 0,
  margin: 0,
  padding: 0,
  overflowY: "auto",
};

// Два місця ближче за це (км) вважаємо одним містом — щоб не було однакових карток
const DUPLICATE_CITY_RADIUS_KM = 3;

/** Власна картка (не GPS) з тими самими координатами, або null. */
const findDuplicateCityCard = (cards, lat, lon) => {
  const latNum = Number(lat);
  const lonNum = Number(lon);
  if (!Number.isFinite(latNum) || !Number.isFinite(lonNum)) return null;
  const kmPerDegLon = 111.32 * Math.cos((latNum * Math.PI) / 180);
  return (
    cards.find((card) => {
      if (card.isMain) return false;
      const cardLat = Number(card.lat);
      const cardLon = Number(card.lon);
      if (!Number.isFinite(cardLat) || !Number.isFinite(cardLon)) return false;
      const dy = (cardLat - latNum) * 110.57;
      const dx = (cardLon - lonNum) * kmPerDegLon;
      return Math.hypot(dx, dy) < DUPLICATE_CITY_RADIUS_KM;
    }) || null
  );
};

// Скільки карток ліворуч і праворуч від видимої тримати змонтованими
const CAROUSEL_MOUNT_RADIUS = 1;

const WeatherCarousel = ({ children, labels = [], items = [], onReorder, isDarkMode }) => {
  // З 768px (планшет/ПК) пошук міст — бокова панель зліва, на телефоні — випадаючий список
  const isWideRow = useMediaQuery(WIDE_WEATHER_ROW_QUERY);
  const [isSidebarReorder, setIsSidebarReorder] = useState(false);
  const sidebarListRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cityQuery, setCityQuery] = useState("");
  const [isCityJumpOpen, setIsCityJumpOpen] = useState(false);
  const [isReorderOpen, setIsReorderOpen] = useState(false);
  // Порядок у списку під час перетягування; у картки застосовується, коли палець/мишу відпустили
  const [reorderIds, setReorderIds] = useState([]);
  const reorderIdsRef = useRef([]);
  const pendingActiveIdRef = useRef(null);
  const cityJumpRef = useRef(null);
  const itemsKey = items.map((item) => item.id).join("|");

  useEffect(() => {
    const ids = items.map((item) => item.id);
    reorderIdsRef.current = ids;
    setReorderIds(ids);
    // Лише коли змінився склад/порядок карток, а не на кожен рендер
  }, [itemsKey]);

  // Бету вимкнули, поки список був відкритий
  useEffect(() => {
    if (!onReorder) {
      setIsReorderOpen(false);
      setIsSidebarReorder(false);
    }
  }, [onReorder]);

  useEffect(() => {
    if (!isCityJumpOpen && !isReorderOpen) return undefined;
    const closeAll = () => {
      setIsCityJumpOpen(false);
      setIsReorderOpen(false);
    };
    const handleOutside = (e) => {
      if (cityJumpRef.current && !cityJumpRef.current.contains(e.target)) {
        closeAll();
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isCityJumpOpen, isReorderOpen]);

  const childrenArray = React.Children.toArray(children);
  const childCount = childrenArray.length;

  const scrollToIndex = useCallback((index) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index];
    if (card) {
      container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  }, []);

  const changeSlide = useCallback((direction) => {
    if (childCount < 2) return;
    const nextIndex = (activeIndex + direction + childCount) % childCount;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  }, [activeIndex, childCount, scrollToIndex]);

  useEffect(() => {
    if (activeIndex >= childCount && childCount > 0) {
      setActiveIndex(childCount - 1);
    }
  }, [childCount, activeIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return undefined;

    let timeoutId;
    const updateActiveIndex = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const cards = Array.from(container.children);
        if (cards.length === 0) return;
        const nearestIndex = cards.reduce((bestIndex, card, index) => {
          const bestDistance = Math.abs(cards[bestIndex].offsetLeft - container.scrollLeft);
          const distance = Math.abs(card.offsetLeft - container.scrollLeft);
          return distance < bestDistance ? index : bestIndex;
        }, 0);
        setActiveIndex(nearestIndex);
      }, 50);
    };

    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      container.removeEventListener("scroll", updateActiveIndex);
    };
  }, [childCount]);

  const jumpTo = (index) => {
    setActiveIndex(index);
    scrollToIndex(index);
    setIsCityJumpOpen(false);
    setCityQuery("");
  };

  const handleReorderPreview = (ids) => {
    reorderIdsRef.current = ids;
    setReorderIds(ids);
  };

  // Відпустили картку в списку — переставляємо самі картки, а на екрані лишаємо ту, що була
  const commitReorder = () => {
    const nextIds = reorderIdsRef.current;
    if (!onReorder || nextIds.join("|") === itemsKey) return;
    pendingActiveIdRef.current = items[activeIndex]?.id ?? null;
    onReorder(nextIds);
  };

  useEffect(() => {
    const activeId = pendingActiveIdRef.current;
    if (activeId === null) return;
    pendingActiveIdRef.current = null;
    const nextIndex = items.findIndex((item) => item.id === activeId);
    if (nextIndex === -1) return;
    setActiveIndex(nextIndex);
    requestAnimationFrame(() => {
      const container = scrollRef.current;
      const card = container?.children[nextIndex];
      if (card) container.scrollTo({ left: card.offsetLeft, behavior: "auto" });
    });
    // Спрацьовує, коли App застосував новий порядок карток
  }, [itemsKey]);

  const reorderLabelById = Object.fromEntries(items.map((item) => [item.id, item]));

  const normalizedQuery = cityQuery.trim().toLowerCase();
  const matchingCities = labels
    .map((label, index) => ({ label: label || `Картка ${index + 1}`, index }))
    .filter(({ label }) => !normalizedQuery || label.toLowerCase().includes(normalizedQuery));

  const cityJumpBlock = childCount > 1 && (
        <CityJumpWrapper ref={cityJumpRef}>
          <CityJumpToggle
            type="button"
            $isDarkMode={isDarkMode}
            aria-expanded={isCityJumpOpen}
            title="Знайти серед створених карток міст"
            onClick={() => {
              setIsReorderOpen(false);
              setIsCityJumpOpen((open) => !open);
            }}
          >
            <FaMagnifyingGlass aria-hidden="true" />
            {/* Коротко, щоб влазило на вузькому телефоні; повне пояснення — у підказці */}
            <span>Знайти місто ({childCount})</span>
            <span aria-hidden="true">{isCityJumpOpen ? "▲" : "▼"}</span>
          </CityJumpToggle>
          {onReorder && (
            <ReorderToggle
              type="button"
              $isDarkMode={isDarkMode}
              $active={isReorderOpen}
              aria-expanded={isReorderOpen}
              title="Змінити порядок карток (бета)"
              onClick={() => {
                setIsCityJumpOpen(false);
                setIsReorderOpen((open) => !open);
              }}
            >
              <FaArrowsUpDown aria-hidden="true" />
              <span>Порядок</span>
            </ReorderToggle>
          )}
          {isReorderOpen && onReorder && (
            <CityJumpDropdown $isDarkMode={isDarkMode}>
              <ReorderHint $isDarkMode={isDarkMode}>
                Потягніть за ⠿, щоб змінити порядок карток (бета)
              </ReorderHint>
              <Reorder.Group
                as="ul"
                axis="y"
                values={reorderIds}
                onReorder={handleReorderPreview}
                layoutScroll
                style={{ margin: 0, padding: 0, maxHeight: 300, overflowY: "auto" }}
              >
                {reorderIds.map((id, index) =>
                  reorderLabelById[id] ? (
                    <ReorderRow
                      key={id}
                      item={reorderLabelById[id]}
                      index={index}
                      isDarkMode={isDarkMode}
                      onDragEnd={commitReorder}
                    />
                  ) : null,
                )}
              </Reorder.Group>
            </CityJumpDropdown>
          )}
          {isCityJumpOpen && (
            <CityJumpDropdown $isDarkMode={isDarkMode}>
              <CityJumpInput
                type="search"
                autoFocus
                $isDarkMode={isDarkMode}
                value={cityQuery}
                placeholder="Назва міста..."
                aria-label="Пошук серед створених карток"
                onChange={(e) => setCityQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && matchingCities.length > 0) {
                    jumpTo(matchingCities[0].index);
                  }
                }}
              />
              <CityJumpList>
                {matchingCities.map(({ label, index }) => (
                  <CityJumpItem
                    key={`city-jump-${index}`}
                    $active={index === activeIndex}
                    $isDarkMode={isDarkMode}
                  >
                    <button type="button" title={label} onClick={() => jumpTo(index)}>
                      {index + 1}. {label}
                    </button>
                  </CityJumpItem>
                ))}
              </CityJumpList>
              {matchingCities.length === 0 && (
                <CityJumpEmpty $isDarkMode={isDarkMode}>Такого міста немає серед карток</CityJumpEmpty>
              )}
            </CityJumpDropdown>
          )}
        </CityJumpWrapper>
      );

  // Сховати/показати — плитка «Сховати панель» у меню картки.
  // Схована панель лишається в розмітці згорнутою (ширина 0) — так згортання й розгортання плавні
  const isCitySidebarHidden = usePrefValue(CITY_SIDEBAR_HIDDEN_KEY, "false") === "true";
  const hasCitySidebar = isWideRow && childCount > 1;
  const animationsDisabled = useAnimationsDisabled();

  // Після згортання/розгортання ширина карток змінилась — ставимо поточну точно на місце
  const handleSidebarTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || e.propertyName !== "flex-basis") return;
    const container = scrollRef.current;
    const card = container?.children[activeIndex];
    if (card) container.scrollTo({ left: card.offsetLeft, behavior: "auto" });
  };

  // Планшет/ПК: міряємо рамку поточної картки — по ній панель міст бере верх і висоту,
  // а номери 1, 2, 3… стають у низ основної частини картки (не під карткою).
  // ResizeObserver — бо висота картки міняється (вкладки, графік, завантаження)
  const [sidebarBox, setSidebarBox] = useState(null);
  useEffect(() => {
    if (!isWideRow || childCount < 2) return undefined;
    const container = scrollRef.current;
    const slide = container?.children[activeIndex];
    const card = slide?.querySelector("[data-weather-card]") || slide;
    if (!container || !card) return undefined;
    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      if (cardRect.height <= 0) return;
      const main = card.querySelector("[data-weather-card-main]");
      const mainRect = main?.getBoundingClientRect();
      // Ліво рахуємо від картки, а не від екрана: під час гортання картка ще їде,
      // а на місці вона завжди стоїть біля лівого відступу контейнера
      const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
      const next = {
        top: Math.max(0, Math.round(cardRect.top - containerRect.top)),
        height: Math.round(cardRect.height),
        mainLeft: Math.round(paddingLeft + (mainRect ? mainRect.left - cardRect.left : 0)),
        mainWidth: Math.round(mainRect ? mainRect.width : cardRect.width),
        mainBottom: Math.round((mainRect || cardRect).bottom - containerRect.top),
        cardBottom: Math.round(cardRect.bottom - containerRect.top),
      };
      setSidebarBox((prev) =>
        prev && Object.keys(next).every((key) => prev[key] === next[key]) ? prev : next,
      );
    };
    measure();
    if (typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(card);
    observer.observe(container);
    return () => observer.disconnect();
  }, [isWideRow, activeIndex, childCount]);

  // Окремо вимикаються в «Налаштування» картки та в панелі міст
  const showArrows = usePrefValue(CAROUSEL_ARROWS_HIDDEN_KEY, "false") !== "true";
  const showNumbers = usePrefValue(CAROUSEL_NUMBERS_HIDDEN_KEY, "false") !== "true";
  const numbersInCard = isWideRow && !!sidebarBox;
  // Номери — по центру смуги між основною частиною картки й її нижньою рамкою.
  // Якщо смуга вужча за кнопки (30px + запас) — притискаємо до низу основної частини
  const NUMBER_BUTTON_ROOM = 38;
  const numbersCenterY = numbersInCard
    ? sidebarBox.cardBottom - sidebarBox.mainBottom >= NUMBER_BUTTON_ROOM
      ? (sidebarBox.mainBottom + sidebarBox.cardBottom) / 2
      : sidebarBox.mainBottom - NUMBER_BUTTON_ROOM / 2
    : 0;

  // Фото для плиток панелі — той самий фон, що обрано для кожної картки
  const [cardBgs, setCardBgs] = useState({});
  useEffect(() => {
    if (!hasCitySidebar) return undefined;
    let cancelled = false;
    Promise.all(
      items.map((item) =>
        localforage
          .getItem(`bgMode_${item.id}`)
          .then((src) => [item.id, src])
          .catch(() => [item.id, null]),
      ),
    ).then((entries) => {
      if (cancelled) return;
      setCardBgs(Object.fromEntries(entries.filter(([, src]) => src && src !== "wiki")));
    });
    return () => {
      cancelled = true;
    };
    // Перечитуємо, коли змінився склад карток або панель щойно з'явилась
  }, [itemsKey, hasCitySidebar]);

  useEffect(() => {
    const handleBgChange = (e) => {
      const { id, src } = e.detail || {};
      if (id != null) setCardBgs((prev) => ({ ...prev, [id]: src }));
    };
    window.addEventListener(CARD_BG_CHANGE_EVENT, handleBgChange);
    return () => window.removeEventListener(CARD_BG_CHANGE_EVENT, handleBgChange);
  }, []);

  // Поточне місто в панелі завжди видно: підкручуємо лише сам список, а не сторінку
  useEffect(() => {
    const list = sidebarListRef.current;
    if (!list) return;
    const activeItem = list.querySelector('[data-active="true"]');
    if (!activeItem) return;
    const itemTop = activeItem.offsetTop;
    const itemBottom = itemTop + activeItem.offsetHeight;
    if (itemTop < list.scrollTop) {
      list.scrollTop = itemTop;
    } else if (itemBottom > list.scrollTop + list.clientHeight) {
      list.scrollTop = itemBottom - list.clientHeight;
    }
  }, [activeIndex, hasCitySidebar, isSidebarReorder]);

  const citySidebar = hasCitySidebar && (
    <CitySidebarShell
      $collapsed={isCitySidebarHidden}
      $noAnim={animationsDisabled}
      style={sidebarBox ? { marginTop: sidebarBox.top, height: sidebarBox.height } : undefined}
      onTransitionEnd={handleSidebarTransitionEnd}
      inert={isCitySidebarHidden}
      aria-hidden={isCitySidebarHidden || undefined}
    >
    <CitySidebar
      $isDarkMode={isDarkMode}
      $collapsed={isCitySidebarHidden}
      $noAnim={animationsDisabled}
      aria-label="Мої міста"
      style={sidebarBox ? { height: "100%", maxHeight: "none" } : undefined}
    >
      <CitySidebarHeader>
        <span title={`Мої міста: ${childCount}`}>Міста ({childCount})</span>
        {onReorder && (
          <CitySidebarIconButton
            type="button"
            $active={isSidebarReorder}
            aria-pressed={isSidebarReorder}
            title="Змінити порядок карток (бета)"
            aria-label="Змінити порядок карток (бета)"
            onClick={() => setIsSidebarReorder((on) => !on)}
          >
            <FaArrowsUpDown aria-hidden="true" />
          </CitySidebarIconButton>
        )}
      </CitySidebarHeader>
      {isSidebarReorder && onReorder ? (
        <>
          <ReorderHint $isDarkMode={isDarkMode}>Тягніть за ⠿ (бета)</ReorderHint>
          <Reorder.Group
            as="ul"
            axis="y"
            values={reorderIds}
            onReorder={handleReorderPreview}
            layoutScroll
            style={sidebarReorderGroupStyle}
          >
            {reorderIds.map((id, index) =>
              reorderLabelById[id] ? (
                <ReorderRow
                  key={id}
                  item={reorderLabelById[id]}
                  index={index}
                  isDarkMode={isDarkMode}
                  onDragEnd={commitReorder}
                />
              ) : null,
            )}
          </Reorder.Group>
        </>
      ) : (
        <>
          <CityJumpInput
            type="search"
            $isDarkMode={isDarkMode}
            value={cityQuery}
            placeholder="Пошук..."
            aria-label="Пошук серед створених карток"
            onChange={(e) => setCityQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && matchingCities.length > 0) {
                jumpTo(matchingCities[0].index);
              }
            }}
          />
          <CitySidebarList ref={sidebarListRef}>
            {matchingCities.map(({ label, index }) => {
              const isActive = index === activeIndex;
              const [cityName, ...rest] = label.split(",");
              const cityRest = rest.join(",").trim();
              const cardId = items[index]?.id;
              return (
                <li key={`city-sidebar-${index}`} data-active={isActive ? "true" : undefined}>
                  <CitySidebarTile
                    type="button"
                    title={label}
                    $active={isActive}
                    $bg={cardBgs[cardId] || DEFAULT_CARD_BG}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => jumpTo(index)}
                  >
                    <CitySidebarTileName>
                      {index + 1}. {cityName.trim()}
                    </CitySidebarTileName>
                    {cityRest && <CitySidebarTileSub>{cityRest}</CitySidebarTileSub>}
                  </CitySidebarTile>
                </li>
              );
            })}
          </CitySidebarList>
          {matchingCities.length === 0 && (
            <CityJumpEmpty $isDarkMode={isDarkMode}>Немає такого міста</CityJumpEmpty>
          )}
        </>
      )}
      {/* Окремо вмикаємо/вимикаємо стрілки ◀ ▶ і номери 1, 2, 3… */}
      <CitySidebarFooter>
        <CitySidebarIconButton
          type="button"
          role="switch"
          $active={showArrows}
          aria-checked={showArrows}
          title={showArrows ? "Сховати стрілки ◀ ▶" : "Показати стрілки ◀ ▶"}
          aria-label="Стрілки гортання карток"
          onClick={() => togglePrefFlag(CAROUSEL_ARROWS_HIDDEN_KEY)}
        >
          ◀▶
        </CitySidebarIconButton>
        <CitySidebarIconButton
          type="button"
          role="switch"
          $active={showNumbers}
          aria-checked={showNumbers}
          title={showNumbers ? "Сховати номери карток" : "Показати номери карток"}
          aria-label="Номери карток"
          onClick={() => togglePrefFlag(CAROUSEL_NUMBERS_HIDDEN_KEY)}
        >
          123
        </CitySidebarIconButton>
      </CitySidebarFooter>
    </CitySidebar>
    </CitySidebarShell>
  );

  return (
    <WeatherCarouselWrapper>
      <WeatherCarouselLayout>
      {citySidebar}
      <CarouselMain>
      {!isWideRow && cityJumpBlock}
      <WeatherCardsContainer ref={scrollRef}>
        {/* Монтуємо лише видиму картку та сусідні; далекі — порожні заглушки тієї ж ширини, щоб не тримати їх у пам'яті */}
        {childrenArray.map((child, i) =>
          Math.abs(i - activeIndex) <= CAROUSEL_MOUNT_RADIUS ? (
            child
          ) : (
            <div key={child.key} aria-hidden="true" />
          ),
        )}
      </WeatherCardsContainer>
      {childCount > 1 && (
        <CarouselNav
          $inCard={numbersInCard}
          $hidden={!showNumbers}
          $noAnim={animationsDisabled}
          inert={!showNumbers}
          aria-hidden={!showNumbers || undefined}
          style={
            numbersInCard
              ? {
                  left: sidebarBox.mainLeft,
                  width: sidebarBox.mainWidth,
                  top: numbersCenterY,
                }
              : undefined
          }
        >
          {Array.from({ length: childCount }, (_, i) => (
            <CarouselPageButton
              key={`carousel-page-${i}`}
              $active={i === activeIndex}
              onClick={() => {
                setActiveIndex(i);
                scrollToIndex(i);
              }}
            >
              {i + 1}
            </CarouselPageButton>
          ))}
        </CarouselNav>
      )}
      {childCount > 1 && (
        <>
          <CarouselSideButton
            type="button"
            $direction="previous"
            $hidden={!showArrows}
            $noAnim={animationsDisabled}
            inert={!showArrows}
            aria-hidden={!showArrows || undefined}
            aria-label="Попередня картка"
            onClick={() => changeSlide(-1)}
          >
            ◀
          </CarouselSideButton>
          <CarouselSideButton
            type="button"
            $direction="next"
            $hidden={!showArrows}
            $noAnim={animationsDisabled}
            inert={!showArrows}
            aria-hidden={!showArrows || undefined}
            aria-label="Наступна картка"
            onClick={() => changeSlide(1)}
          >
            ▶
          </CarouselSideButton>
        </>
      )}
      </CarouselMain>
      </WeatherCarouselLayout>
    </WeatherCarouselWrapper>
  );
};

const LOADING_PHRASES = [
  "Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.",
  "Доміно, власник сайту і замку!",
  "Ти теж думаєш, що відсилками можна керувати погодою? :)",
    "Погода така сама загадка і т/с 'Ральна містика'",
  "Хто що любить, хто що шукає? :)",
  "Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.",
  "0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода і відсилки.",
  "«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...",
  "Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)",
 "Знайди речдок у телешоу «Речдок»",
  "Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?",
  "Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)",
  "Ми вас здивуємо багато чим :)",
  "І що всіх тягне на турецькі серіали?",
  "«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара",
   "Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»",
  "Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.",
  "Підтримайте, будь ласка, рекламою нас у соцмережах :)",
  "У вас через сім днів буде хороша погода - поганої ж не існує :)",
  "«Теорія неймовірності» (Макс Кідрук) має одну частину :(",
  "Кейт — складна за характером індичка.",
  "Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)",
  "Хто ваш кумир? Зібров чи Винник?",
  "Багато змін клімату, мультиплікації, моди, життя :(",
  "Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)",
  "Місія неможлива - ніде не помилитись",
  "Льодовиковий період чи глобальне потепління через 24 роки.",
  "Попри все, погода не буває поганою - вона буває різною.",
  "Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик на карті»",
  "Оксану Самойлову з «Україна має талант» хто пам'ятає?",
  "Страху немає, упевненим робиться рух!",
  "Застрягли в минулому :) Але погода - це майбутнє!",
  "Mondo TV - Thanks for legendary cartoons.",
  "Раз, два, три. Погоду нам скажи!",
  "Вверх - ти летиш! Вниз - ти падаєш! ",  
  "Чорний айсберг, потопив ......? ",  
  "Доміно тривожить Єллоустон", 
  "Невже наш світ подібний на сюжет «Гри престолів»... :(", 
    "Обереш червону таблетку чи синю(фраза з Матриці...)", 
  "Хто придумав фразу? «Як тобі таке Ілон Маск»", 
  "Чи є листя у трави?", 
    "Єдина ОС де ми недоступні це Temple OS :)", 
    "«Дизель Шоу»: Цей світ остаточно тіктокнувся... :(", 
  "Не новини, а країна(світ) чудес, бракує лише Аліси... Світ втратив глузд.", 
  "Цей сайт це реальна містика :)",
  "Доміно бажає гарної погоди :)",
  "Сутінок - не найкраще, що можете побачити...",
  "Драконяче видання...",
  "Марта - і картини...",
  "Мені одному здається що більшість в політці крихітки Цахеси та безжалісні Ніцерони?",
"Фрази «Бідний Йорик» і «Бути чи не бути» з якого твору?",
   "Вам приснилися сни про погоду? Бо ви тут! :)",  
   "Вам приснився жах що ..е... і ....і. програли і...(Відсилка...)",  
  "Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)",
  "Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)",
  "Факт: блискавка в п'ять разів гарячіша за поверхню Сонця — близько 30 000 °C.",
  "Факт: жодна сніжинка не схожа на іншу, але всі вони мають шість променів.",
  "Факт: найнижча температура на Землі — −89,2 °C на станції «Восток» в Антарктиді.",
  "Факт: у пустелі Атакама є місця, де дощу не було сотні років.",
  "Факт: індики бачать кольори краще за людей і мають кут огляду майже 270°.",
  "Факт: одна велика купчаста хмара може важити понад 500 тонн.",
  "Факт: краплі дощу не схожі на сльози — вони сплюснуті, як булочки.",
  "Факт: веселку можна побачити й уночі — це місячна веселка.",
  "Факт: торнадо може мати швидкість вітру понад 480 км/год.",
  "Факт: секвоя «Гіперіон» — найвище дерево у світі, понад 115 метрів.",
  "Факт: восьминоги мають три серця і блакитну кров.",
  "Факт: бамбук може вирости майже на метр за одну добу.",
    "Факт: на острові Комодо живуть справжні дракони — велетенські ящірки, що полюють на оленів.",
  "Факт: грім — це звук розширення повітря, нагрітого блискавкою.",
  "Факт: за запахом дощу стоїть речовина геосмін, і люди відчувають її краще за акул кров.",
  "Факт: мурахи ніколи не сплять так, як ми, — лише короткі дрімки по хвилині.",
  "Факт: найбільший град важив майже кілограм (Бангладеш, 1986).",
  "Факт: Амазонія виробляє власні дощі — дерева випаровують воду, що стає хмарами.",
  "Факт: туман — це хмара, яка просто вирішила полежати на землі :)",
  "Факт: колібрі — єдині птахи, що вміють літати задом наперед.",
  "Факт: на Венері сніг металевий, а на Нептуні вітри досягають 2000 км/год.",
];

const phraseFlyOut = keyframes`
  0% { opacity: 0; transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.1)) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(1.2); }
`;

const ParticleSymbol = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${(props) => (props.$isNew ? "#94fffa" : "#ffb36c")};
  font-size: 14px;
  z-index: 10001;
  animation: ${phraseFlyOut} 3s ease-out infinite;
  animation-delay: ${(props) => props.$delay}s;
  --x: ${(props) => props.$x}px;
  --y: ${(props) => props.$y}px;
`;

const LoadingPhraseWrapper = styled.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  ${(props) =>
    props.$isNew &&
    css`
      color: #94fffa;
      text-shadow: 0 0 12px rgba(148, 255, 250, 0.9);
      font-weight: bold;
      &::before {
        content: "Нове: ";
        font-size: 0.8em;
        color: orange;
      }
    `}
`;

const SECTION_ORDER_STORAGE_KEY = "siteSectionsOrder";

// Збережені картки не повинні затирати ті, що вже встигли завантажитися (напр. Київ у нового відвідувача)
const mergeSavedWeatherCards = (prev, savedCards) => {
  const saved = sanitizeWeatherCards(savedCards);
  if (saved.length === 0) return prev;
  const savedIds = new Set(saved.map((c) => c.id));
  return [
    ...saved.map((s) => prev.find((p) => p.id === s.id) ?? s),
    ...prev.filter((p) => !savedIds.has(p.id)),
  ];
};

// Завантажені користувачем фони (фото/відео) живуть лише в IndexedDB,
// у Firestore потрапляють тільки стандартні фони сайту
const isUploadedBg = (src, customBgs = []) =>
  src instanceof Blob ||
  (typeof src === "string" &&
    (src.startsWith("data:") ||
      src.startsWith("blob:") ||
      src.startsWith("[object ") ||
      customBgs.some((bg) => bg?.src === src)));

// Часта зміна фону-відео підвантажує декодер, тож не частіше ніж раз на хвилину
const MIN_SLIDESHOW_INTERVAL = 60;
// Режим «4 слоти» прибрано — старі збереження переводимо на 3 слоти
const normalizeHeroBgMode = (mode) =>
  mode === "slideshow-4" ? "slideshow-3" : mode;

const mergeFanArtBackgrounds = (backgrounds, fanArtImages) => {
  const merged = Array.isArray(backgrounds) ? [...backgrounds] : [];
  const images = Array.isArray(fanArtImages) ? fanArtImages : [];
  const existingKeys = new Set();

  const addKeys = (image) => {
    if (image?.id) existingKeys.add(`id:${image.id}`);
    if (typeof image?.src === "string") {
      existingKeys.add(`src:${image.src}`);
    }
  };

  merged.forEach(addKeys);

  images.forEach((image) => {
    if (!image?.src) return;
    const keys = [
      image.id ? `id:${image.id}` : null,
      typeof image.src === "string" ? `src:${image.src}` : null,
    ].filter(Boolean);
    if (keys.some((key) => existingKeys.has(key))) return;

    merged.push({
      ...image,
      category: image.category || "Ваші зображення",
    });
    keys.forEach((key) => existingKeys.add(key));
  });

  return merged;
};

// Монтуємо ClimateMap (відео + iframe) лише коли секція наближається до viewport.
const LazyClimateMap = (props) => {
  const placeholderRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    if (isNearViewport) return;
    const el = placeholderRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setIsNearViewport(true);
        }
      },
      { rootMargin: "300px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isNearViewport]);

  const placeholder = (
    <div ref={placeholderRef} style={{ minHeight: "560px" }} />
  );

  if (!isNearViewport) return placeholder;

  return (
    <Suspense fallback={placeholder}>
      <ClimateMap {...props} />
    </Suspense>
  );
};

const SectionContent = memo(
  ({
    section,
    isDarkMode,
    isStickyBgMode,
    isLocationEnabled,
    handleRefreshCard,
    handleDeleteCard,
    handleRenameCard,
    moveWeatherCard,
    setIsLocationEnabled,
    user,
    customHolidayName,
    weatherCards,
    weatherCardLayout,
    heroDateString,
    hideGpsCard,
    onReorderCards,
  }) => {
    if (!section) return null;

    if (section.key === "weather") {
      return (
        <div id="weather">
          <WeatherTitleRow>
            <WeatherAnimationsToggle isDarkMode={isDarkMode} />
            <AihelpTitle
              $isStickyBgMode={isStickyBgMode}
              $isDarkMode={isDarkMode}
            >
              Погода
            </AihelpTitle>
          </WeatherTitleRow>
          {hideGpsCard && weatherCards.length === 0 && (
            <EmptyWeatherNote $isDarkMode={isDarkMode}>
              GPS-картку вимкнено в бета-функціях, а власних карток ще немає.
              <button
                type="button"
                onClick={() =>
                  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Додати місто через пошук
              </button>
            </EmptyWeatherNote>
          )}
          <WeatherCarousel
            isDarkMode={isDarkMode}
            labels={weatherCards.map((card) => card.locationName)}
            items={weatherCards.map((card) => ({
              id: card.id,
              label: card.locationName || "Картка",
              isMain: !!card.isMain,
            }))}
            onReorder={onReorderCards}
          >
            {weatherCards.map((card, index) => {
              const isExtremeTemp =
                card.current.tempNum > 30 || card.current.tempNum < -30;
              const isExtremeWind = card.current.windNum > 10;
              const isExtremeUV = card.current.uv_index > 7;
              return (
                <div key={card.id}>
                  <WeatherCardComponent
                    isStickyBgMode={isStickyBgMode}
                    user={user}
                    card={card}
                    isDarkMode={isDarkMode}
                    isLocationEnabled={isLocationEnabled}
                    isExtremeTemp={isExtremeTemp}
                    isExtremeWind={isExtremeWind}
                    isExtremeUV={isExtremeUV}
                    index={index}
                    totalCards={weatherCards.length}
                    handleRefreshCard={handleRefreshCard}
                    handleDeleteCard={handleDeleteCard}
                    handleRenameCard={handleRenameCard}
                    moveWeatherCard={moveWeatherCard}
                    setIsLocationEnabled={setIsLocationEnabled}
                    customHolidayName={customHolidayName}
                    layout={weatherCardLayout}
                    currentTimeString={heroDateString}
                  />
                </div>
              );
            })}
          </WeatherCarousel>
        </div>
      );
    }
    //{section.key === "puzzles" && <Puzzles />}
    return (
      <div id={section.key}>
        {section.key === "map" && (
          <LazyClimateMap isDarkMode={isDarkMode} isStickyBgMode={isStickyBgMode} />
        )}
        {section.key === "prison" && <Prison />}
      </div>
    );
  },
);

const App = () => {
  useLanguageEffect();
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [areInitialModulesReady, setAreInitialModulesReady] = useState(false);
  const [minimumLoaderTimePassed, setMinimumLoaderTimePassed] = useState(false);
  const [phraseData, setPhraseData] = useState({ text: "", isNew: false });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isStickyBgMode, setIsStickyBgMode] = useState(false);
  const [hiddenSections, setHiddenSections] = useState([]);
  const [sectionThemes, setSectionThemes] = useState({}); // { weather: false, aihelp: true, ... }
  const [user, setUser] = useState(null);
  const userRef = useRef(null);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
  }, [isDarkMode]);

  useEffect(() => {
    userRef.current = user;
  }, [user]);

  const [heroBg, setHeroBg] = useState(null);
  const [customHeroBgs, setCustomHeroBgs] = useState([]);
  const [heroBg2, setHeroBg2] = useState(null);
  const [heroBg3, setHeroBg3] = useState(null);
  const [heroBgMode, setHeroBgMode] = useState("static"); // "static", "slideshow-2", "slideshow-3", "random"
  const [bgRatings, setBgRatings] = useState({});
  const [slideshowInterval, setSlideshowInterval] = useState(MIN_SLIDESHOW_INTERVAL);
  const [heroBgFilterCategory, setHeroBgFilterCategory] = useState("all");
  const [heroBgBlur, setHeroBgBlur] = useState(0);
  const [heroBgPixelation, setHeroBgPixelation] = useState(0);
  const [heroBgFocal1, setHeroBgFocal1] = useState({ x: 50, y: 50 });
  const [heroBgFocal2, setHeroBgFocal2] = useState({ x: 50, y: 50 });
  const [heroBgFocal3, setHeroBgFocal3] = useState({ x: 50, y: 50 });

  const [weatherCardLayout, setWeatherCardLayout] = useState([
    { key: "current", visible: true },
    { key: "ai", visible: true },
    { key: "hourly", visible: true },
    { key: "daily", visible: true },
  ]);

  const [customHolidayName, setCustomHolidayName] = useState("");

  const [currentAvatar, setCurrentAvatar] = useState(userDefault);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  // Вкладка, з якої відкрити налаштування (напр. секція новин → «Секції та новини»)
  const [settingsInitialTab, setSettingsInitialTab] = useState(null);
  useEffect(() => {
    const open = (e) => {
      setSettingsInitialTab(e.detail?.tab || null);
      setIsSettingsModalOpen(true);
    };
    window.addEventListener("stykhiia:open-settings", open);
    return () => window.removeEventListener("stykhiia:open-settings", open);
  }, []);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isAchivmentsOpen, setIsAchivmentsOpen] = useState(false);
  const [isUserSearchOpen, setIsUserSearchOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isAuthorsDirectoryOpen, setIsAuthorsDirectoryOpen] = useState(false);
  const [isOtherOptionsOpen, setIsOtherOptionsOpen] = useState(false);
  const [bgMusicEnabled, setBgMusicEnabled] = useState(false);
  const [autoMuteBgMusic, setAutoMuteBgMusic] = useState(true);
  const [bgMusicSource, setBgMusicSource] = useState("");
  const [bgMusicMode, setBgMusicMode] = useState("loop"); // 'loop' або 'order'
  const [bgMusicShuffle, setBgMusicShuffle] = useState(false);
  const [activeBgTrackId, setActiveBgTrackId] = useState(23); // ID для індиків за замовчуванням
  const [trackRepeatCounter, setTrackRepeatCounter] = useState(0);
  const [bgMusicVolume, setBgMusicVolume] = useState(0.2);
  const [sfxVolume, setSfxVolume] = useState(0.2);
  const [loadingStrategy, setLoadingStrategy] = useState("eager"); // eager, lazy, delayed
  const [bgMusicSpeed, setBgMusicSpeed] = useState(1);
  const [customBgTracks, setCustomBgTracks] = useState([]); // [{name, file}]
  const [libraryBgSettings, setLibraryBgSettings] = useState({}); // {trackId: {repeats, enabled}}
  const [lockFiltersInFs, setLockFiltersInFs] = useState(false);
  const [isFsActive, setIsFsActive] = useState(false);

  // Функція для розрахунку секунд до початку наступної години
  const calculateSecondsUntilNextHour = useCallback(() => {
    const now = new Date();
    const secondsRemaining = 3600 - (now.getMinutes() * 60 + now.getSeconds());
    return secondsRemaining <= 0 ? 3600 : secondsRemaining;
  }, []);

  const weatherCardsRef = useRef([]);
  const appHiddenAtRef = useRef(null);
  const bgAudioRef = useRef(null);
  const bgAudioRef2 = useRef(null); // Для Crossfade
  // Титри та інші сцени можуть тимчасово «відпустити» фонову музику (плавне затихання)
  const bgMusicSuspended = useBgMusicSuspended();
  const [initialBgPosition, setInitialBgPosition] = useState(0);
  const bgPositionApplied = useRef(false);

  const [hasInteracted, setHasInteracted] = useState(false);
  const [isUpdatePending, setIsUpdatePending] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [isFirstTimeHelpOpen, setIsFirstTimeHelpOpen] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [maintenanceEndTime, setMaintenanceEndTime] = useState(null);
  const [maintenanceMessage, setMaintenanceMessage] = useState(null);

  // Перевіряємо стан техробіт без постійного Firestore listener (легкий REST-запит, без SDK).
  // Перша перевірка — після показу погоди, щоб не конкурувати з нею за мережу.
  useEffect(() => {
    let isActive = true;

    const refreshMaintenanceStatus = async () => {
      if (document.visibilityState !== "visible") return;
      const { isMaintenanceMode, endTime, message } = await getMaintenanceStatus();
      if (isActive) {
        setIsMaintenanceMode(isMaintenanceMode);
        setMaintenanceEndTime(endTime);
        setMaintenanceMessage(message);
      }
    };

    const firstCheck = setTimeout(refreshMaintenanceStatus, 3000);
    document.addEventListener("visibilitychange", refreshMaintenanceStatus);
    return () => {
      isActive = false;
      clearTimeout(firstCheck);
      document.removeEventListener("visibilitychange", refreshMaintenanceStatus);
    };
  }, []);

  // Гідратація даних з localforage
  useEffect(() => {
    const hydrate = async () => {
      try {
        const savedDarkMode = await localforage.getItem("isDarkMode");
        if (savedDarkMode !== null) setIsDarkMode(savedDarkMode);

        const savedStickyBgMode = await localforage.getItem("isStickyBgMode");
        if (savedStickyBgMode !== null) setIsStickyBgMode(savedStickyBgMode);

        const savedSectionThemes = await localforage.getItem("sectionThemes");
        if (savedSectionThemes) setSectionThemes(savedSectionThemes);

        const savedHidden = await localforage.getItem("hiddenSections");
        if (savedHidden) setHiddenSections(savedHidden);

        const savedUser = await localforage.getItem("active_user");
        if (savedUser) setUser(savedUser);

        const savedAvatar = await localforage.getItem("currentAvatar");
        if (savedAvatar) setCurrentAvatar(savedAvatar);

        const savedTimezone = await localforage.getItem("selected_timezone");
        if (savedTimezone) setSelectedTimezone(savedTimezone);

        const savedBgMusic = await localforage.getItem("bg_music_enabled");
        if (savedBgMusic !== null) setBgMusicEnabled(savedBgMusic);
        const savedAutoMute = await localforage.getItem("auto_mute_bg_music");
        if (savedAutoMute !== null) setAutoMuteBgMusic(savedAutoMute);
        const savedLockFilters =
          await localforage.getItem("lock_filters_in_fs");
        if (savedLockFilters !== null) setLockFiltersInFs(savedLockFilters);
        const savedBgSource = await localforage.getItem("bg_music_source");
        if (savedBgSource) setBgMusicSource(savedBgSource);
        const savedCustomBg = await localforage.getItem("custom_bg_tracks");
        if (savedCustomBg) setCustomBgTracks(savedCustomBg);
        const savedBgVolume = await localforage.getItem("bg_music_volume");
        if (savedBgVolume !== null) setBgMusicVolume(savedBgVolume);
        const savedSfxVolume = await localforage.getItem("sfx_volume");
        if (savedSfxVolume !== null) setSfxVolume(savedSfxVolume);
        const savedBgSpeed = await localforage.getItem("bg_music_speed");
        if (savedBgSpeed !== null) setBgMusicSpeed(savedBgSpeed);
        const savedPos = await localforage.getItem("bg_music_position");
        if (savedPos !== null) setInitialBgPosition(savedPos);
        const savedBgMode = await localforage.getItem("bg_music_mode");
        if (savedBgMode) setBgMusicMode(savedBgMode);
        const savedShuffle = await localforage.getItem("bg_music_shuffle");
        if (savedShuffle !== null) setBgMusicShuffle(savedShuffle);
        const savedActiveId = await localforage.getItem("active_bg_track_id");
        if (savedActiveId) setActiveBgTrackId(savedActiveId);
        const savedLibSettings = await localforage.getItem(
          "library_bg_settings",
        );
        if (savedLibSettings) setLibraryBgSettings(savedLibSettings);

        const savedLocationEnabled = await localforage.getItem("isLocationEnabled");
        if (savedLocationEnabled !== null) setIsLocationEnabled(savedLocationEnabled);

        const savedCards = await localforage.getItem("weather_cards");
        if (savedCards) setWeatherCards((prev) => mergeSavedWeatherCards(prev, savedCards));

        const savedHideUntil = await localforage.getItem(
          "hideDeleteModalUntil",
        );
        if (savedHideUntil) setHideDeleteModalUntil(parseInt(savedHideUntil));

        const savedOrder = await localforage.getItem(SECTION_ORDER_STORAGE_KEY);
        if (savedOrder) {
          const filteredOrder = savedOrder.filter(
            (s) => s.key !== "aihelp" && s.key !== "fanart",
          );
          setSiteSections(filteredOrder);
        }

        const savedHeroBg = await localforage.getItem("hero_background");
        if (savedHeroBg) setHeroBg(savedHeroBg);
        const savedHeroBg2 = await localforage.getItem("hero_background_2");
        if (savedHeroBg2) setHeroBg2(savedHeroBg2);
        const savedHeroBg3 = await localforage.getItem("hero_background_3");
        if (savedHeroBg3) setHeroBg3(savedHeroBg3);
        const savedCustomBgs = await localforage.getItem(
          "custom_hero_backgrounds",
        );
        const savedFanArtImages = await localforage.getItem(
          "fanart_custom_images",
        );
        const mergedBackgrounds = mergeFanArtBackgrounds(
          savedCustomBgs,
          savedFanArtImages,
        );
        if (mergedBackgrounds.length) setCustomHeroBgs(mergedBackgrounds);
        const savedMode = await localforage.getItem("hero_bg_mode");
        if (savedMode) setHeroBgMode(normalizeHeroBgMode(savedMode));
        const savedInterval = await localforage.getItem(
          "hero_slideshow_interval",
        );
        if (savedInterval !== null)
          setSlideshowInterval(Math.max(MIN_SLIDESHOW_INTERVAL, savedInterval));
        const savedHeroFilter = await localforage.getItem(
          "hero_bg_filter_category",
        );
        if (savedHeroFilter) setHeroBgFilterCategory(savedHeroFilter);
        const savedBlur = await localforage.getItem("hero_bg_blur");
        if (savedBlur !== null) setHeroBgBlur(savedBlur);
        const savedPixelation = await localforage.getItem("hero_bg_pixelation");
        if (savedPixelation !== null) setHeroBgPixelation(savedPixelation);

        const savedFocal1 = await localforage.getItem("hero_bg_focal1");
        if (savedFocal1) setHeroBgFocal1(savedFocal1);
        const savedFocal2 = await localforage.getItem("hero_bg_focal2");
        if (savedFocal2) setHeroBgFocal2(savedFocal2);
        const savedFocal3 = await localforage.getItem("hero_bg_focal3");
        if (savedFocal3) setHeroBgFocal3(savedFocal3);

        const savedCustomHolidayName = await localforage.getItem(
          "custom_holiday_name",
        );
        if (savedCustomHolidayName)
          setCustomHolidayName(savedCustomHolidayName);

        const lastSeenVersion = await localforage.getItem(
          "last_deployed_version",
        );
        const savedLayout = await localforage.getItem("weather_card_layout");
        if (savedLayout) setWeatherCardLayout(savedLayout);

        const deployId = process.env.REACT_APP_DEPLOY_ID;
        if (deployId && lastSeenVersion !== deployId) {
          setIsUpdatePending(true);
        }

        setIsHydrated(true);
      } catch (err) {
        console.error("Помилка завантаження з localforage:", err);
        setIsHydrated(true);
      }
    };
    hydrate();
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localforage.setItem("isStickyBgMode", isStickyBgMode);
      localforage.setItem("bg_music_enabled", bgMusicEnabled);
      localforage.setItem("auto_mute_bg_music", autoMuteBgMusic);
      localforage.setItem("lock_filters_in_fs", lockFiltersInFs);
      if (bgMusicSource instanceof Blob || typeof bgMusicSource === "string") {
        localforage.setItem("bg_music_source", bgMusicSource);
      }
      localforage.setItem("custom_bg_tracks", customBgTracks);
      localforage.setItem("bg_music_volume", bgMusicVolume);
      localforage.setItem("sfx_volume", sfxVolume);
      localforage.setItem("bg_music_speed", bgMusicSpeed);
      localforage.setItem("bg_music_mode", bgMusicMode);
      localforage.setItem("bg_music_shuffle", bgMusicShuffle);
      localforage.setItem("active_bg_track_id", activeBgTrackId); // This should be activeBgTrackId, not bgMusicSource
      localforage.setItem("library_bg_settings", libraryBgSettings);
    }
  }, [
    bgMusicEnabled,
    autoMuteBgMusic,
    lockFiltersInFs,
    bgMusicSource,
    customBgTracks,
    libraryBgSettings,
    bgMusicVolume,
    sfxVolume,
    bgMusicSpeed,
    bgMusicMode,
    bgMusicShuffle,
    activeBgTrackId,
    isHydrated,
  ]);

  // Логіка вибору фрази та перевірки на новизну
  useEffect(() => {
    const initPhrase = async () => {
      const seen = (await localforage.getItem("seen_loading_phrases")) || [];
      const randomIndex = Math.floor(Math.random() * LOADING_PHRASES.length);
      const selectedText = LOADING_PHRASES[randomIndex];
      const isNew = !seen.includes(selectedText);

      if (isNew) {
        const updatedSeen = [...seen, selectedText];
        // Зберігаємо історію останніх 100 фраз
        await localforage.setItem(
          "seen_loading_phrases",
          updatedSeen.slice(-100),
        );
      }

      setPhraseData({ text: selectedText, isNew });
    };
    initPhrase();
  }, []);

  const preloadComponents = useCallback(async () => {
    await Promise.all([
    import("./components/Aihelp/Aihelp.jsx"),
    import("./components/Modals/ShopModal.jsx"),
      import("./components/News/News.jsx"),
      import("./components/Modals/Modal.jsx"),
      import("./components/Modals/UserSettingsModal.jsx"),
      import("./components/Modals/UserSearchModal.jsx"),
    ]);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    preloadComponents()
      .catch((error) => {
        console.error("Помилка попереднього завантаження модулів:", error);
      })
      .finally(() => setAreInitialModulesReady(true));
  }, [isHydrated, preloadComponents]);

  const phraseParticles = useMemo(() => {
    const count = phraseData.isNew ? 12 : 6;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 220,
      y: (Math.random() - 0.5) * 140,
      delay: Math.random() * 2,
    }));
  }, [phraseData]);

  // Таймер на 8 секунд після старту
  useEffect(() => {
    const timer = setTimeout(() => setTimerFinished(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Підключення власного шрифту
  useEffect(() => {
    const stykhiiaFont = getStykhiiaFont(user?.fontFamily);
    if (stykhiiaFont) {
      // Шрифти Стихії лежать локально (media/fonts/stykhiia) — Google Fonts не потрібні
      document.getElementById("custom-google-font")?.remove();
      document.documentElement.style.setProperty("--font-family", stykhiiaFont.stack);
    } else if (user?.fontFamily) {
      const fontName = user.fontFamily
        .trim()
        .replace(/ /g, "+")
        .replace(/['"]/g, "");
      const linkId = "custom-google-font";
      let link = document.getElementById(linkId);
      if (!link) {
        link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
      link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@400;700;900&display=swap`;

      document.documentElement.style.setProperty(
        "--font-family",
        `"${user.fontFamily.replace(/['"]/g, "")}", sans-serif`,
      );
    } else {
      document.getElementById("custom-google-font")?.remove();
      document.documentElement.style.removeProperty("--font-family");
    }
  }, [user?.fontFamily]);

  // Відстеження взаємодії (клік або скрол)
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("mousedown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction, true);
      window.removeEventListener("touchstart", handleInteraction);
    };
    window.addEventListener("mousedown", handleInteraction);
    window.addEventListener("scroll", handleInteraction, true);
    window.addEventListener("touchstart", handleInteraction);
    return () => {
      window.removeEventListener("mousedown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction, true);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (
      isUpdatePending &&
      timerFinished &&
      hasInteracted &&
      !isFirstTimeHelpOpen
    ) {
      setIsInfoOpen(true);
      setIsUpdatePending(false);
      setIsFirstTimeHelpOpen(true);
      localforage.setItem(
        "last_deployed_version",
        process.env.REACT_APP_DEPLOY_ID,
      );
    }
  }, [isUpdatePending, timerFinished, hasInteracted, isFirstTimeHelpOpen]);

  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [weatherCards, setWeatherCards] = useState([]);
  // Бета-функції «Вимкнути GPS-картку» та «Перетягування карток»
  const hideGpsCard = useBeta("hideGpsCard");
  const isDragCardsBeta = useBeta("dragCards");
  const hideGpsCardRef = useRef(hideGpsCard);
  hideGpsCardRef.current = hideGpsCard;
  const maxCustomCards = maxCustomCardsFor(hideGpsCard);
  // { cards, removeCount } — діалог вибору картки, яку прибрати при поверненні GPS-картки
  const [gpsReturnRequest, setGpsReturnRequest] = useState(null);

  // GPS-картку вимкнено — прибираємо її, звідки б вона не з'явилась (кеш, хмара, старий запит)
  useEffect(() => {
    if (hideGpsCard && weatherCards.some((card) => card.isMain)) {
      setWeatherCards((prev) => prev.filter((card) => !card.isMain));
    }
  }, [hideGpsCard, weatherCards]);
  // Скільки карток створено сьогодні (лише для акаунта; лічильник живе у Firestore)
  const [dailyCardAdditions, setDailyCardAdditions] = useState(0);

  const [hideDeleteModalUntil, setHideDeleteModalUntil] = useState(0);
  useEffect(() => {
    if (!hasInteracted) return undefined;
    const preloadKatScene = async () => {
      const assets = [...new Set([startImage, fogBackground, turkeys])];
      try {
        await Promise.all(assets.map((url) => fetch(url, { cache: "force-cache" })));
      } catch (err) {
        console.warn("Failed to preload KatScene assets:", err);
      }
    };
    const timer = setTimeout(preloadKatScene, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);
  const [siteSections, setSiteSections] = useState([...DEFAULT_SITE_SECTIONS]);
  const lastSavedCardsKeyRef = useRef(null);
  // uid, для якого хмарні дані (config/{uid}) уже прочитано після входу
  const cloudSettingsLoadedForRef = useRef(null);
  // pushCardsToCloud оголошено нижче — беремо через ref, щоб не міняти порядок хуків
  const pushCardsToCloudRef = useRef(null);
  useEffect(() => {
    if (isHydrated) {
      const cleanWeatherCards = sanitizeWeatherCards(weatherCards);
      localforage.setItem("weather_cards", cleanWeatherCards).catch((err) => {
        console.error("weather_cards persistence failed:", err);
      });
      if (userRef.current?.uid) {
        const metadata = toFirestoreSafe(
          cleanWeatherCards.slice(0, MAX_CUSTOM_WEATHER_CARDS + 1).map((c) => ({
            id: c.id,
            isMain: c.isMain,
            locationName: c.locationName,
            lat: c.lat,
            lon: c.lon,
          })),
        );
        const uid = userRef.current.uid;
        // Пишемо лише коли змінився сам список (назви, координати, порядок),
        // а не після кожного щогодинного оновлення погоди
        const metadataKey = `${uid}|${stableStringify(metadata)}`;
        // Поки не прочитали хмару — не затираємо картки з інших пристроїв
        if (
          metadataKey !== lastSavedCardsKeyRef.current &&
          cloudSettingsLoadedForRef.current === uid
        ) {
          lastSavedCardsKeyRef.current = metadataKey;
          pushCardsToCloudRef.current?.(uid, metadata);
        }
      }
    }
  }, [weatherCards, isHydrated]);

  // ── Синхронізація налаштувань з акаунтом: до 100 записів на добу ──
  const settingsSyncRef = useRef({ date: null, count: 0 }); // використано сьогодні
  const lastSyncedSettingsRef = useRef(null); // стабільний JSON того, що вже в хмарі
  const latestSettingsRef = useRef(null); // поточні налаштування для відправки
  const settingsSyncTimerRef = useRef(null);
  const settingsLimitToastDateRef = useRef(null);

  const pushSettingsToCloud = useCallback(async () => {
    const uid = userRef.current?.uid;
    const settings = latestSettingsRef.current;
    if (!uid || !settings) return;
    // Поки не прочитали хмарні налаштування — не затираємо їх локальними
    if (cloudSettingsLoadedForRef.current !== uid) return;

    const json = stableStringify(settings);
    if (json === lastSyncedSettingsRef.current) {
      localforage.removeItem(SETTINGS_SYNC_PENDING_KEY).catch(() => {});
      return;
    }

    const today = getTodayKey();
    const markPending = () =>
      localforage
        .setItem(SETTINGS_SYNC_PENDING_KEY, { uid, date: today })
        .catch(() => {});

    try {
      const result = await writeWithDailyCounter({
        uid,
        data: { settings },
        limitConfig: CLOUD_LIMITS.settings,
        counterRef: settingsSyncRef,
        storageKey: SETTINGS_SYNC_COUNTER_KEY,
      });
      if (result.ok) {
        lastSyncedSettingsRef.current = json;
        localforage.removeItem(SETTINGS_SYNC_PENDING_KEY).catch(() => {});
        return;
      }
      // Ліміт вичерпано — зміни лишаються на пристрої до наступної доби
      markPending();
      if (settingsLimitToastDateRef.current !== today) {
        settingsLimitToastDateRef.current = today;
        toast(
          `Ліміт синхронізації налаштувань (${SETTINGS_SYNC_DAILY_LIMIT} на добу) вичерпано. Зміни збережено на цьому пристрої, в акаунт вони потраплять завтра.`,
          { id: "settings-sync-limit", duration: 5000 },
        );
      }
    } catch (e) {
      console.error("Firestore settings sync failed:", e);
      markPending();
    }
  }, []);

  // ── Синхронізація списку карток погоди: до 100 записів на добу ──
  const cardsSyncRef = useRef({ date: null, count: 0 });
  const pushCardsToCloud = useCallback(async (uid, metadata) => {
    try {
      const result = await writeWithDailyCounter({
        uid,
        data: { savedWeatherCards: metadata },
        limitConfig: CLOUD_LIMITS.cards,
        counterRef: cardsSyncRef,
      });
      if (!result.ok) {
        // Картки й так збережені на пристрої; в акаунт підуть з наступною зміною
        lastSavedCardsKeyRef.current = null;
        console.warn("Ліміт синхронізації карток погоди на сьогодні вичерпано");
      }
    } catch (e) {
      lastSavedCardsKeyRef.current = null;
      console.error("Firestore cards sync failed:", e);
    }
  }, []);
  pushCardsToCloudRef.current = pushCardsToCloud;

  useEffect(() => {
    const syncFromFirestore = async () => {
      if (userRef.current?.uid && isHydrated) {
        try {
          const { db, doc, getDoc } = await loadFirebase();
          const userDocRef = doc(db, "config", userRef.current.uid);
          const userDoc = await getDoc(userDocRef);
          const cloudData = userDoc.exists() ? userDoc.data() : {};
          setDailyCardAdditions(
            toDayKey(cloudData.cardAdditionsAt) === getTodayKey()
              ? cloudData.cardAdditionsCount || 0
              : 0,
          );

          // Лічильник синхронізації налаштувань: беремо більший з хмари й пристрою
          const syncUid = userRef.current.uid;
          const [localSettingsCounter, settingsPending] = await Promise.all([
            localforage.getItem(SETTINGS_SYNC_COUNTER_KEY).catch(() => null),
            localforage.getItem(SETTINGS_SYNC_PENDING_KEY).catch(() => null),
          ]);
          settingsSyncRef.current = {
            date: getTodayKey(),
            count: Math.max(
              usedTodayFromCloud(cloudData, CLOUD_LIMITS.settings),
              countForToday(localSettingsCounter, syncUid),
            ),
          };
          cardsSyncRef.current = {
            date: getTodayKey(),
            count: usedTodayFromCloud(cloudData, CLOUD_LIMITS.cards),
          };
          // На пристрої є зміни, що не вмістились у ліміт, — вони новіші за хмарні
          const hasPendingSettings = settingsPending?.uid === syncUid;
          if (!cloudData.savedWeatherCards && weatherCardsRef.current.length) {
            // Перший вхід: у хмарі ще немає карток — вивантажуємо локальні.
            pushCardsToCloud(
              syncUid,
              toFirestoreSafe(
                weatherCardsRef.current
                  .slice(0, MAX_CUSTOM_WEATHER_CARDS + 1)
                  .map((c) => ({
                    id: c.id,
                    isMain: c.isMain,
                    locationName: c.locationName,
                    lat: c.lat,
                    lon: c.lon,
                  })),
              ),
            );
          }
          if (userDoc.exists()) {
            const data = userDoc.data();
            if (data.savedWeatherCards) {
              const cloudCards = data.savedWeatherCards;
              const newCards = cloudCards.filter(
                (cc) => !weatherCardsRef.current.some((lc) => lc.id === cc.id),
              );
              newCards.forEach((c) => {
                if (c.isMain) {
                  getInitialLocation();
                } else {
                  fetchWeather(
                    {
                      id: c.id,
                      fullName: c.locationName,
                      lat: c.lat,
                      lon: c.lon,
                    },
                    false,
                    c.lat,
                    c.lon,
                  );
                }
              });
            }
            if (data.settings) {
              // Запам'ятовуємо, що вже лежить у хмарі, щоб не перезаписувати те саме
              lastSyncedSettingsRef.current = stableStringify(data.settings);
            }
            if (data.settings && !hasPendingSettings) {
              const s = data.settings;
              if (s.isDarkMode !== undefined) setIsDarkMode(s.isDarkMode);
              if (s.hiddenSections) setHiddenSections(s.hiddenSections);
              if (s.weatherCardLayout)
                setWeatherCardLayout(s.weatherCardLayout);
              if (s.siteSections) {
                setSiteSections(
                  s.siteSections.filter((section) => section.key !== "fanart"),
                );
              }
              if (s.isStickyBgMode !== undefined)
                setIsStickyBgMode(s.isStickyBgMode);
              if (s.sectionThemes) setSectionThemes(s.sectionThemes);
              // Завантажені фони (і старі записи з ними) з Firestore не беремо
              if (s.heroBg && !isUploadedBg(s.heroBg)) setHeroBg(s.heroBg);
              if (s.heroBg2 && !isUploadedBg(s.heroBg2)) setHeroBg2(s.heroBg2);
              if (s.heroBg3 && !isUploadedBg(s.heroBg3)) setHeroBg3(s.heroBg3);
              if (s.heroBgMode) setHeroBgMode(normalizeHeroBgMode(s.heroBgMode));
              if (s.bgRatings) {
                // Оцінки завантажених фонів зберігаються лише локально
                setBgRatings((prev) => ({
                  ...Object.fromEntries(
                    Object.entries(prev || {}).filter(([src]) => isUploadedBg(src)),
                  ),
                  ...Object.fromEntries(
                    Object.entries(s.bgRatings).filter(([src]) => !isUploadedBg(src)),
                  ),
                }));
              }
            }
          }

          // Хмару прочитано — тепер можна відправляти зміни. Якщо на пристрої
          // лишились невідправлені зміни (або в хмарі ще нічого немає), шлемо їх.
          cloudSettingsLoadedForRef.current = syncUid;
          if (hasPendingSettings || !cloudData.settings) {
            pushSettingsToCloud();
          }
        } catch (e) {
          console.error("Error syncing from Firestore:", e);
        }
      }
    };
    syncFromFirestore();
  }, [user, isHydrated]);

  useEffect(() => {
    const hydrateWeatherCards = async () => {
      try {
        const savedCards = await localforage.getItem("weather_cards");
        if (savedCards) {
          setWeatherCards((prev) => mergeSavedWeatherCards(prev, savedCards));
        }
      } catch (error) {
        console.error("weather_cards hydration failed:", error);
      }
    };

    if (isHydrated) {
      hydrateWeatherCards();
    }
  }, [isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      localforage.setItem("isLocationEnabled", isLocationEnabled);
      localforage.setItem(SECTION_ORDER_STORAGE_KEY, siteSections);
      localforage.setItem("hiddenSections", hiddenSections);
      localforage.setItem("weatherCardLayout", weatherCardLayout);
      localforage.setItem("isStickyBgMode", isStickyBgMode);
      localforage.setItem("sectionThemes", sectionThemes);
      localforage.setItem("isDarkMode", isDarkMode);

      if (userRef.current?.uid) {
        const uid = userRef.current.uid;
        const syncableBg = (src) =>
          isUploadedBg(src, customHeroBgs) ? null : src;
        const syncableRatings = Object.fromEntries(
          Object.entries(bgRatings || {}).filter(
            ([src]) => !isUploadedBg(src, customHeroBgs),
          ),
        );
        const settings = {
          isDarkMode,
          hiddenSections,
          weatherCardLayout,
          siteSections,
          isStickyBgMode,
          sectionThemes,
          heroBg3: syncableBg(heroBg3),
          heroBgMode,
          bgRatings: syncableRatings,
        };
        // У випадковому режимі фон міняється сам кожні кілька секунд —
        // таку зміну не синхронізуємо (лишаємо в хмарі останній обраний вручну)
        if (heroBgMode !== "random") {
          settings.heroBg = syncableBg(heroBg);
          settings.heroBg2 = syncableBg(heroBg2);
        }
        latestSettingsRef.current = toFirestoreSafe(settings);
        // Кілька швидких змін поспіль — один запис (і одна позиція в добовому ліміті)
        clearTimeout(settingsSyncTimerRef.current);
        settingsSyncTimerRef.current = setTimeout(() => {
          if (userRef.current?.uid === uid) pushSettingsToCloud();
        }, SETTINGS_SYNC_DEBOUNCE_MS);
      }
    }
  }, [
    isLocationEnabled,
    siteSections,
    hiddenSections,
    weatherCardLayout,
    isStickyBgMode,
    sectionThemes,
    isDarkMode,
    heroBg,
    heroBg2,
    heroBg3,
    heroBgMode,
    customHeroBgs,
    bgRatings,
    isHydrated,
  ]);

  const [currentAudioUrl, setCurrentAudioUrl] = useState("");

  useEffect(() => {
    let url = bgMusicSource;
    if (bgMusicSource instanceof Blob) {
      url = URL.createObjectURL(bgMusicSource);
    }
    setCurrentAudioUrl(url);
    return () => {
      if (bgMusicSource instanceof Blob && url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [bgMusicSource]);

  const prevSourceRef = useRef(null);

  // Реалізація Crossfade
  useEffect(() => {
    const a1 = bgAudioRef.current;
    const a2 = bgAudioRef2.current;
    if (!a1 || !a2) return;

    if (prevSourceRef.current !== currentAudioUrl) {
      setTrackRepeatCounter(0);
      prevSourceRef.current = currentAudioUrl;
    }

    const shouldPlay =
      bgMusicEnabled && (!isFsActive || !autoMuteBgMusic) && !bgMusicSuspended;
    const targetVolume = shouldPlay ? bgMusicVolume : 0;
    const fadeStep = 0.02;

    let activeAudio = a1;
    let inactiveAudio = a2;

    if (a1.src && currentAudioUrl && a1.src.includes(currentAudioUrl)) {
      activeAudio = a1;
      inactiveAudio = a2;
    } else if (a2.src && currentAudioUrl && a2.src.includes(currentAudioUrl)) {
      activeAudio = a2;
      inactiveAudio = a1;
    } else {
      activeAudio = a1.paused || a1.volume === 0 ? a1 : a2;
      inactiveAudio = activeAudio === a1 ? a2 : a1;
    }

    if (shouldPlay) {
      const needsNewSrc =
        activeAudio.src === "" || !activeAudio.src.includes(currentAudioUrl);

      if (needsNewSrc) {
        activeAudio.src = currentAudioUrl;

        if (!bgPositionApplied.current && initialBgPosition > 0) {
          activeAudio.currentTime = initialBgPosition;
          bgPositionApplied.current = true;
        } else {
          activeAudio.currentTime = 0;
        }

        activeAudio.volume = 0;
        activeAudio.playbackRate = bgMusicSpeed;
        activeAudio.play().catch(() => {});
      } else {
        activeAudio.playbackRate = bgMusicSpeed;
        if (activeAudio.paused) {
          activeAudio.play().catch(() => {});
        }
      }
    }
    // Якщо музика не має грати — не обриваємо її, а плавно стишуємо до 0 і ставимо на паузу (нижче)

    const crossfadeInterval = setInterval(() => {
      if (activeAudio.volume < targetVolume) {
        activeAudio.volume = Math.min(
          targetVolume,
          activeAudio.volume + fadeStep,
        );
      } else if (!shouldPlay) {
        activeAudio.volume = Math.max(0, activeAudio.volume - fadeStep);
      } else {
        activeAudio.volume = targetVolume;
      }

      if (inactiveAudio.volume > 0) {
        inactiveAudio.volume = Math.max(0, inactiveAudio.volume - fadeStep);
      } else {
        inactiveAudio.pause();
      }

      if (activeAudio.volume === targetVolume && inactiveAudio.volume === 0) {
        if (!shouldPlay && !activeAudio.paused) activeAudio.pause();
        clearInterval(crossfadeInterval);
      }
    }, 50);

    return () => clearInterval(crossfadeInterval);
  }, [
    bgMusicEnabled,
    isFsActive,
    autoMuteBgMusic,
    currentAudioUrl,
    bgMusicVolume,
    bgMusicSpeed,
    initialBgPosition,
    bgMusicSuspended,
  ]);

  // Негайне оновлення швидкості відтворення фонової музики
  useEffect(() => {
    if (bgAudioRef.current) bgAudioRef.current.playbackRate = bgMusicSpeed;
    if (bgAudioRef2.current) bgAudioRef2.current.playbackRate = bgMusicSpeed;
  }, [bgMusicSpeed]);

  // Збереження позиції фонової музики
  useEffect(() => {
    const saveInterval = setInterval(() => {
      const a1 = bgAudioRef.current;
      const a2 = bgAudioRef2.current;
      if (!a1 || !a2) return;

      const active = a1 && !a1.paused ? a1 : a2 && !a2.paused ? a2 : null;
      if (active && active.currentTime > 0) {
        localforage.setItem("bg_music_position", active.currentTime);
      }
    }, 5000); // зберігаємо кожні 5 секунд

    return () => clearInterval(saveInterval);
  }, []);

  const handleResetBgPosition = useCallback(async () => {
    setInitialBgPosition(0);
    await localforage.setItem("bg_music_position", 0);
    // Також миттєво перемотуємо активні плеєри
    if (bgAudioRef.current) bgAudioRef.current.currentTime = 0;
    if (bgAudioRef2.current) bgAudioRef2.current.currentTime = 0;
    // Дозволяємо логіці відновлення спрацювати знову, якщо це потрібно
    bgPositionApplied.current = false;
  }, []);

  // Наступний не прихований трек у порядку бібліотеки: базові → власні → треки сайту
  const skipToNextBgTrack = useCallback(() => {
    const libPool = [
      ...BASE_BG_TRACKS.map((t) => ({ id: t.id, file: t.file })),
      ...songAiKnowledge
        .filter((s) => !BASE_BG_TRACKS.some((b) => b.id === s.id))
        .map((s) => ({ id: s.id, file: assetMap[s.audio] || s.audio })),
    ].filter((t) => libraryBgSettings[t.id]?.enabled !== false);

    const customPool = (customBgTracks || []).filter(
      (t) => t && t.file && t.enabled !== false,
    );

    const fullPool = [
      ...libPool.filter((t) => BASE_BG_TRACKS.some((b) => b.id === t.id)).map((t) => ({ ...t, isCustom: false })),
      ...customPool.map((t) => ({ id: null, file: t.file, isCustom: true })),
      ...libPool.filter((t) => !BASE_BG_TRACKS.some((b) => b.id === t.id)).map((t) => ({ ...t, isCustom: false })),
    ];
    if (fullPool.length === 0) return;

    const others = fullPool.filter((t) => t.file !== bgMusicSource);
    let next;
    if (bgMusicShuffle) {
      next = others.length > 0
        ? others[Math.floor(Math.random() * others.length)]
        : fullPool[0];
    } else {
      const currentIndex = fullPool.findIndex((t) => t.file === bgMusicSource);
      next = fullPool[(currentIndex + 1) % fullPool.length];
    }
    setTrackRepeatCounter(0);
    setBgMusicSource(next.file);
    setActiveBgTrackId(next.isCustom ? null : next.id);
  }, [customBgTracks, libraryBgSettings, bgMusicSource, bgMusicShuffle]);

  const handleBgMusicEnded = useCallback(() => {
    const a1 = bgAudioRef.current;
    const a2 = bgAudioRef2.current;
    if (!a1 || !a2) return;

    // Визначаємо активний плеєр - той, що насправді грав
    let activeAudio = a1;
    if (a2.src && currentAudioUrl && a2.src.includes(currentAudioUrl)) {
      activeAudio = a2;
    }

    if (bgMusicMode === "loop") {
      // В режимі автоповтору просто перемотуємо музику і продовжуємо відтворення
      activeAudio.currentTime = 0;
      activeAudio.play().catch(() => {});
      return;
    }

    // Знаходимо кількість повторів: спочатку в кастомних, потім у бібліотеці сайту
    const currentTrack = (customBgTracks || []).find(
      (t) => t && t.file === bgMusicSource,
    );
    let maxRepeats = 1;
    if (currentTrack) {
      maxRepeats = currentTrack.repeats || 1;
    } else if (activeBgTrackId) {
      maxRepeats = libraryBgSettings[activeBgTrackId]?.repeats || 1;
    }

    const nextCount = trackRepeatCounter + 1;
    if (nextCount < maxRepeats) {
      activeAudio.currentTime = 0;
      activeAudio.play().catch(() => {});
      setTrackRepeatCounter(nextCount);
    } else if (bgMusicMode === "order") {
      skipToNextBgTrack();
    } else {
      setTrackRepeatCounter(0);
    }
  }, [
    trackRepeatCounter,
    bgMusicMode,
    bgMusicSource,
    customBgTracks,
    activeBgTrackId,
    libraryBgSettings,
    currentAudioUrl,
    skipToNextBgTrack,
  ]);

  // При зміні режиму перезапускаємо трек, щоб новий режим застосувався відразу
  useEffect(() => {
    if (bgMusicEnabled) {
      if (bgAudioRef.current && !bgAudioRef.current.paused) {
        bgAudioRef.current.currentTime = 0;
      } else if (bgAudioRef2.current && !bgAudioRef2.current.paused) {
        bgAudioRef2.current.currentTime = 0;
      }
    }
  }, [bgMusicMode, bgMusicEnabled]);

  // Фони можуть бути відео-Blob'ами (до 20мб), тож кожен пишемо окремо і лише
  // коли змінився саме він — інакше кожне перемикання/слайдер перезаписував
  // усі відео в IndexedDB, і відеофон підвисав.
  useEffect(() => {
    if (isHydrated) localforage.setItem("hero_background", heroBg);
  }, [heroBg, isHydrated]);
  useEffect(() => {
    if (isHydrated) localforage.setItem("hero_background_2", heroBg2);
  }, [heroBg2, isHydrated]);
  useEffect(() => {
    if (isHydrated) localforage.setItem("hero_background_3", heroBg3);
  }, [heroBg3, isHydrated]);
  useEffect(() => {
    if (isHydrated) localforage.setItem("custom_hero_backgrounds", customHeroBgs);
  }, [customHeroBgs, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      localforage.setItem("isDarkMode", isDarkMode);
      localforage.setItem("sectionThemes", sectionThemes);
      localforage.setItem("hiddenSections", hiddenSections);
      localforage.setItem("hero_bg_ratings", bgRatings);
      localforage.setItem("hero_bg_mode", heroBgMode);
      localforage.setItem("hero_slideshow_interval", slideshowInterval);
      localforage.setItem("hero_bg_filter_category", heroBgFilterCategory);
      localforage.setItem("hero_bg_blur", heroBgBlur);
      localforage.setItem("hero_bg_pixelation", heroBgPixelation);
      localforage.setItem("hero_bg_focal1", heroBgFocal1);
      localforage.setItem("hero_bg_focal2", heroBgFocal2);
      localforage.setItem("hero_bg_focal3", heroBgFocal3);
      localforage.setItem("custom_holiday_name", customHolidayName);
      localforage.setItem("selected_timezone", selectedTimezone);
      localforage.setItem("weather_card_layout", weatherCardLayout);
      localforage.setItem("modal_loading_strategy", loadingStrategy);
    }
  }, [
    bgRatings,
    heroBgMode,
    slideshowInterval,
    heroBgFilterCategory,
    heroBgBlur,
    heroBgPixelation,
    heroBgFocal1,
    heroBgFocal2,
    heroBgFocal3,
    isHydrated,
    isDarkMode,
    sectionThemes,
    hiddenSections,
    customHolidayName,
    selectedTimezone,
    weatherCardLayout,
    loadingStrategy,
  ]);

  useEffect(() => {
    if (user?.fastClicks) {
      document.body.classList.add("fast-clicks-enabled");
    } else {
      document.body.classList.remove("fast-clicks-enabled");
    }
  }, [user?.fastClicks]);

  useEffect(() => {
    if (isHydrated) {
      if (user) {
        const nextAvatar = user.photoURL || user.avatar || currentAvatar;
        localforage.setItem("active_user", { ...stripSecrets(user), photoURL: user.photoURL || user.avatar || "" });
        if (nextAvatar) {
          setCurrentAvatar(nextAvatar);
          localforage.setItem("currentAvatar", nextAvatar);
        }
      } else {
        localforage.removeItem("active_user");
      }
    }
  }, [user, isHydrated]);

  // Push-сповіщення: щотижневе підтвердження токена й синхронізація налаштувань
  useEffect(() => initPushNotifications(), []);

  // «Запроси друга»: новий акаунт, що прийшов за посиланням, записується як запрошений,
  // а далі раз на добу зараховується день активності (потрібно 3 дні за 14 днів)
  useEffect(() => {
    if (!user?.uid) return;
    const uid = user.uid;
    (async () => {
      const claimed = await claimPendingReferral(user);
      if (claimed) {
        toast.success(
          `Вітаємо у Стихії! Вас запросив друг. Заходьте ${INVITE_ACTIVE_DAYS} різні дні за ${INVITE_WINDOW_DAYS} днів, і ви обидва отримаєте значки. День 1 з ${INVITE_ACTIVE_DAYS} ✅`,
          { duration: 7000 },
        );
        return;
      }
      const res = await trackInviteeActivity(user);
      if (!res?.justCounted) return;
      if (res.justDone) {
        setUser((prev) => (prev?.uid === uid ? { ...prev, isInvitee: true } : prev));
        toast.success(`${BADGES.invitee.emoji} Значок «${BADGES.invitee.name}» ваш! Ваш друг теж отримав значок.`, { duration: 7000 });
      } else {
        toast.success(`День ${res.activeDays} з ${INVITE_ACTIVE_DAYS} у Стихії ✅ Ще трохи, і значки отримаєте ви з другом.`);
      }
    })();
  }, [user?.uid]); // лише при зміні акаунта

  // Дозвіл на системні сповіщення НЕ питаємо при відкритті: якщо людина натисне «Блокувати»,
  // push до неї вже не дійде. Браузер питає лише після кліку на перемикач у налаштуваннях.

  useEffect(() => {
    weatherCardsRef.current = weatherCards;
    // Сервер стереже ці місця від небезпечної погоди (лише якщо пристрій підписаний на push;
    // профіль записується, тільки коли список місць справді змінився)
    setPushPlaces(weatherCards);
  }, [weatherCards]);

  const fetchWeather = useCallback(
    async (cityData, isMain, lat = null, lon = null, insertAtFirst = false) => {
      // GPS-картку вимкнено в бета-функціях — не робимо зайвих запитів
      if (isMain && hideGpsCardRef.current) return;
      try {
        let targetLat = lat;
        let targetLon = lon;
        let displayName =
          typeof cityData === "string"
            ? cityData
            : cityData?.fullName || "Ваша локація";

        if (cityData && typeof cityData === "object" && cityData.lat) {
          targetLat = cityData.lat;
          targetLon = cityData.lon;
          displayName = cityData.fullName || displayName;
        } else if (typeof cityData === "string") {
          const dbMatch = findCityInDatabase(cityData);
          if (dbMatch) {
            targetLat = dbMatch.lat;
            targetLon = dbMatch.lon;
            displayName = dbMatch.fullName;
            cityData = { id: `search-${dbMatch.name.toLowerCase()}` };
          } else {
            const geo = await axios.get(
              `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityData)}&count=1&language=uk`,
              { timeout: 8000 }
            );
            if (geo.data.results && geo.data.results[0]) {
              targetLat = geo.data.results[0].latitude;
              targetLon = geo.data.results[0].longitude;
              displayName = geo.data.results[0].name;
              cityData = { id: Date.now() }; // Створюємо об'єкт для нової картки
            } else {
              alert("Місто не знайдено в базі Open-Meteo");
              return;
            }
          }
        }

        const id = isMain ? "main-card" : cityData?.id || Date.now();
        const isNewCard =
          !isMain && !weatherCardsRef.current.find((c) => c.id === id);

        if (isNewCard) {
          // Те саме місто вже є серед власних карток — другу не створюємо
          const duplicateCard = findDuplicateCityCard(
            weatherCardsRef.current,
            targetLat,
            targetLon,
          );
          if (duplicateCard) {
            toast(`«${duplicateCard.locationName}» вже є серед ваших карток`, {
              id: "duplicate-city-card",
              icon: "📍",
            });
            return false;
          }

          const customCardsCount = weatherCardsRef.current.filter(
            (card) => !card.isMain,
          ).length;
          if (customCardsCount >= maxCustomCardsFor(hideGpsCardRef.current)) {
            alert(cardLimitMessage(hideGpsCardRef.current));
            return false;
          }
          if (customCardsCount >= SOFT_CUSTOM_WEATHER_CARDS) {
            toast(`Більше ${SOFT_CUSTOM_WEATHER_CARDS} карток спричиняє навантаження на пристрій.`, { icon: "⚠️", duration: 4000 });
          }

          // Незареєстровані користувачі не мають ліміту на 3 картки/тиждень
          if (userRef.current) {
            try {
              const { db, doc, getDoc } = await loadFirebase();
              const uid = userRef.current.uid;
              const userDoc = await getDoc(doc(db, "config", uid));
              // Доба за UTC, як у правилах Firestore (час запису ставить сервер)
              const counterRef = {
                current: {
                  date: getTodayKey(),
                  count: usedTodayFromCloud(
                    userDoc.exists() ? userDoc.data() : {},
                    CLOUD_LIMITS.cardAdditions,
                  ),
                },
              };

              setDailyCardAdditions(counterRef.current.count);
              const result = await writeWithDailyCounter({
                uid,
                data: {},
                limitConfig: CLOUD_LIMITS.cardAdditions,
                counterRef,
              });
              setDailyCardAdditions(counterRef.current.count);
              if (!result.ok) {
                alert(`Ви досягли ліміту в ${MAX_DAILY_CARD_ADDITIONS} карток на добу.`);
                return false;
              }
            } catch (e) {
              console.error("Помилка перевірки ліміту Firestore:", e);
            }
          }
        }

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${targetLat}&longitude=${targetLon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,cloud_cover,visibility,dew_point_2m,temperature_80m,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm,uv_index,precipitation_probability&hourly=temperature_2m,uv_index,precipitation_probability,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant,precipitation_probability_max,rain_sum,precipitation_sum,et0_fao_evapotranspiration,sunrise,sunset,wind_gusts_10m_max,apparent_temperature_max,apparent_temperature_min,snowfall_sum&wind_speed_unit=ms&timezone=auto&past_days=1&forecast_days=16`;
        console.log("Fetching weather from URL:", url);
        // Кеш відповіді Open-Meteo: 10 хв на пару координат
        // v2: вітер у м/с (раніше API віддавав км/год)
        const cacheKey = `om_cache_v2_${Number(targetLat).toFixed(2)},${Number(targetLon).toFixed(2)}`;
        // Звірка з іншими моделями йде паралельно й ніколи не кидає помилку
        const consensusPromise = fetchWeatherConsensus(targetLat, targetLon);
        let d = null;
        try {
          const cached = await localforage.getItem(cacheKey);
          if (cached?.data && Date.now() - cached.time < WEATHER_CACHE_TTL_MS) {
            d = cached.data;
          }
        } catch {
          d = null;
        }

        if (!d) {
          let res;
          let lastRequestError;
          for (let attempt = 0; attempt < 2; attempt += 1) {
            try {
              res = await axios.get(url, { timeout: 20000 });
              break;
            } catch (error) {
              lastRequestError = error;
              if (attempt === 0) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
              }
            }
          }
          if (!res) throw lastRequestError;
          d = res.data;
          localforage
            .setItem(cacheKey, { time: Date.now(), data: d })
            .catch(() => {});
        }

        // Медіана 7 моделей замість однієї; сирий best_match лишаємо для попереджень
        // про небезпеку — там краще перестрахуватися, ніж згладити пік пориву
        const rawData = d;
        const { data: blendedData, accuracy: forecastAccuracy } = blendWithConsensus(
          d,
          await consensusPromise,
        );
        d = blendedData;
        if (forecastAccuracy) {
          console.log(
            `🎯 Консенсус ${forecastAccuracy.models.length} моделей для ${displayName}, розкид ±${forecastAccuracy.tempSpread ?? "?"}°C`,
          );
        }

        // СИРИЙ лог для перевірки що повертає API
        console.log("💾 RAW API RESPONSE for", displayName, d);

        // Детальне логування для діагностики
        console.log("API Response raw data:", {
          hasResponse: !!d,
          currentData: d.current,
          hourlyData: d.hourly
            ? {
                time: d.hourly.time?.slice(0, 2),
                wind: d.hourly.wind_speed_10m?.slice(0, 2),
              }
            : null,
          dailyData: d.daily
            ? {
                time: d.daily.time?.slice(0, 2),
                uv_index_max: d.daily.uv_index_max?.slice(0, 2),
                wind_speed_10m_max: d.daily.wind_speed_10m_max?.slice(0, 2),
              }
            : null,
        });

        // Попередження за відсутність даних
        if (!d.current || d.current.wind_speed_10m === undefined) {
          console.error("❌ Wind speed data missing from current!", {
            hasCurrentData: !!d.current,
            currentKeys: d.current ? Object.keys(d.current) : [],
            windSpeed: d.current?.wind_speed_10m,
          });
        }
        if (!d.daily?.uv_index_max || d.daily.uv_index_max.length === 0) {
          console.error("❌ UV index data missing from daily!", {
            hasDailyData: !!d.daily,
            dailyKeys: d.daily ? Object.keys(d.daily) : [],
            uvIndex: d.daily?.uv_index_max,
            uvLength: d.daily?.uv_index_max?.length,
          });
        }
        if (!d.hourly?.wind_speed_10m) {
          console.error("❌ Hourly wind data missing!", {
            hasHourlyData: !!d.hourly,
            hourlyKeys: d.hourly ? Object.keys(d.hourly) : [],
            wind: d.hourly?.wind_speed_10m,
          });
        }

        // Логіка сповіщень: один короткий огляд погоди на годину без спаму
        if ("Notification" in window && Notification.permission === "granted") {
          const now = Date.now();
          const lastNotificationMs = Number(
            getPref("weatherNotificationLastSentAt") || 0,
          );

          if (now - lastNotificationMs >= 60 * 60 * 1000) {
            const temp = Math.round(d.current.temperature_2m);
            const feelsLike = Math.round(d.current.apparent_temperature);
            const wind = d.current.wind_speed_10m ?? 0;
            const humidity = d.current.relative_humidity_2m ?? 0;
            const weatherText = getWeatherSummaryText(
              d.current.weather_code,
              d.current.is_day,
            );

            const body = `Температура ${temp}°C${
              feelsLike !== temp ? `, відчувається ${feelsLike}°C` : ""
            }, ${weatherText}, вітер ${wind} м/с, вологість ${humidity}%.`;

            new Notification(`Погода: ${displayName}`, {
              body,
              icon: "/favicon.ico",
            });

            setPref(
              "weatherNotificationLastSentAt",
              String(now),
            );
          }
        }
        // Гроза, ураган, ожеледь… у найближчі години — поки Стихія відкрита.
        // Якщо пристрій підписаний на push, цю картку стереже сервер — не дублюємо.
        notifyWeatherHazardsLocal({
          cardId: id,
          placeName: displayName,
          hourly: rawData.hourly,
          utcOffsetSeconds: rawData.utc_offset_seconds,
          skip: isPushSubscribed(),
        }).catch(() => {});
        const nowLocal = new Date();
        let targetHour = nowLocal.getHours();
        if (targetHour >= 18) {
          targetHour = 18;
        }
        const localHourStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, "0")}-${String(nowLocal.getDate()).padStart(2, "0")}T${String(targetHour).padStart(2, "0")}:00`;
        let hStartIndex = (d.hourly?.time || []).findIndex((t) =>
          t.startsWith(localHourStr),
        );
        if (hStartIndex === -1) hStartIndex = 0;


        const hourlyForecastLimit = 7 * 24;

        setWeatherCards((prev) => {
          // Поки йшов запит, GPS-картку вимкнули
          if (isMain && hideGpsCardRef.current) return prev;
          const existingCard = prev.find((c) => c.id === id);

          // Логування перед створенням карти
          console.log(`Creating weather card for ${displayName}`, {
            windSpeedCurrent: d.current?.wind_speed_10m,
            windSpeedHourly: d.hourly?.wind_speed_10m?.slice(0, 3),
            uvIndexDaily: d.daily?.uv_index_max?.slice(0, 3),
          });

          const hourlyByDay = aggregateHourlyByDay(d.hourly);

          const newCardData = {
            id: id,
            isMain: isMain,
            windUnit: "ms",
            // Київ за замовчуванням, коли GPS вимкнено або недоступний — картка покаже підказку
            isFallbackLocation: isMain && !!cityData?.isFallback,
            locationName:
              isMain && !cityData?.fullName
                ? "Ваша локація"
                : isMain && cityData?.isFallback
                  ? displayName
                  : existingCard
                  ? existingCard.locationName
                  : displayName,
            lat: targetLat,
            lon: targetLon,
            // Скільки моделей звірено і наскільки вони розходяться (null — лише best_match)
            accuracy: forecastAccuracy,
            current: {
              temp: `${Math.round(d.current.temperature_2m)}°C`,
              tempNum: Math.round(d.current.temperature_2m),
              feels_like: `${Math.round(d.current.apparent_temperature)}°C`,
              humidity: `${d.current.relative_humidity_2m}%`,
              pressure: `${Math.round(d.current.surface_pressure)} hPa`,
              wind_speed: `${d.current.wind_speed_10m ?? 0} м/с`,
              windNum: d.current.wind_speed_10m ?? 0,
              wind_direction_10m: d.current.wind_direction_10m ?? 0,
              wind_gusts_10m: d.current.wind_gusts_10m ?? 0,
              uv_index: d.daily?.uv_index_max?.[0] ?? 0,
              cloud_cover: d.current.cloud_cover ?? 0,
              visibility: d.current.visibility ?? 0,
              dew_point_2m: d.current.dew_point_2m ?? 0,
              temperature_80m: d.current.temperature_80m ?? 0,
              snow_depth: d.current.snow_depth ?? 0,
              evapotranspiration: d.current.et0_fao_evapotranspiration ?? 0,
              freezing_level_height: d.current.freezing_level_height ?? 0,
              soil_temperature_0cm: d.current.soil_temperature_0cm ?? 0,
              description: "За кодом: " + d.current.weather_code,
              weather_code: d.current.weather_code,
              is_day: d.current.is_day,
              iconPlaceholder: getWeatherIcon(d.current.weather_code, d.current.is_day),
              iconSymbol: getWeatherIconSymbol(d.current.weather_code, d.current.is_day),
            },
            hourly: (d.hourly?.time || [])
              .slice(hStartIndex, hStartIndex + hourlyForecastLimit)
              .map((t, i) => {
                const dataIdx = hStartIndex + i;
                const timestamp = new Date(t);
                const dateStr = t.slice(0, 10);
                const dayIdx = (d.daily?.time || []).indexOf(dateStr);
                let hourIsDay;
                if (dayIdx !== -1 && d.daily?.sunrise?.[dayIdx] && d.daily?.sunset?.[dayIdx]) {
                  hourIsDay = (t >= d.daily.sunrise[dayIdx] && t <= d.daily.sunset[dayIdx]) ? 1 : 0;
                } else {
                  const hr = timestamp.getHours();
                  hourIsDay = (hr >= 6 && hr < 21) ? 1 : 0;
                }
                return {
                  time: `${String(timestamp.getHours()).padStart(2, "0")}:00`,
                  dateLabel: timestamp.toLocaleDateString("uk", {
                    day: "2-digit",
                    month: "2-digit",
                  }),
                  fullTime: t,
                  temp: `${Math.round(d.hourly?.temperature_2m?.[dataIdx] ?? 0)}°C`,
                  tempNum: Math.round(d.hourly?.temperature_2m?.[dataIdx] ?? 0),
                  feels_like: `${Math.round(d.hourly?.apparent_temperature?.[dataIdx] ?? 0)}°C`,
                  windNum: d.hourly?.wind_speed_10m?.[dataIdx] ?? 0,
                  wind_direction_10m:
                    d.hourly?.wind_direction_10m?.[dataIdx] ?? 0,
                  wind_gusts_10m: d.hourly?.wind_gusts_10m?.[dataIdx] ?? 0,
                  relative_humidity_2m:
                    d.hourly?.relative_humidity_2m?.[dataIdx] ?? null,
                  dew_point_2m: d.hourly?.dew_point_2m?.[dataIdx] ?? 0,
                  precipitation: d.hourly?.precipitation?.[dataIdx] ?? null,
                  precipitation_probability:
                    d.hourly?.precipitation_probability?.[dataIdx] ?? 0,
                  uv_index: d.hourly?.uv_index?.[dataIdx] ?? 0,
                  rain: d.hourly?.rain?.[dataIdx] ?? null,
                  pressure_msl: d.hourly?.pressure_msl?.[dataIdx] ?? null,
                  cloud_cover: d.hourly?.cloud_cover?.[dataIdx] ?? null,
                  visibility: d.hourly?.visibility?.[dataIdx] ?? 0,
                  snow_depth: d.hourly?.snow_depth?.[dataIdx] ?? 0,
                  evapotranspiration: d.hourly?.et0_fao_evapotranspiration?.[dataIdx] ?? 0,
                  freezing_level_height: d.hourly?.freezing_level_height?.[dataIdx] ?? 0,
                  soil_temperature_0cm: d.hourly?.soil_temperature_0cm?.[dataIdx] ?? 0,
                  weather_code: d.hourly?.weather_code?.[dataIdx] ?? 0,
                  is_day: hourIsDay,
                  iconPlaceholder: getWeatherIcon(
                    d.hourly?.weather_code?.[dataIdx] ?? 0,
                    hourIsDay
                  ),
                  iconSymbol: getWeatherIconSymbol(
                    d.hourly?.weather_code?.[dataIdx] ?? 0,
                    hourIsDay
                  ),
                  description: getWeatherSummaryText(
                    d.hourly?.weather_code?.[dataIdx] ?? 0,
                    hourIsDay,
                  ),
                };
              }),
            daily16: (d.daily?.time || []).map((t, i) => ({
              date: new Date(t).toLocaleDateString("uk", {
                day: "numeric",
                month: "2-digit",
              }),
              fullDate: t,
              day: new Date(t).toLocaleDateString("uk", { weekday: "short" }),
              temp_day: `${Math.round(d.daily.temperature_2m_max[i] ?? 0)}°C`,
              temp_night: `${Math.round(d.daily.temperature_2m_min[i] ?? 0)}°C`,
              uv_index: d.daily.uv_index_max?.[i] ?? 0,
              wind_speed: `${d.daily.wind_speed_10m_max?.[i] ?? 0} м/с`,
              wind_direction_10m:
                d.daily.wind_direction_10m_dominant?.[i] ?? 0,
              precipitation_probability_max:
                d.daily.precipitation_probability_max?.[i] ?? 0,
              rain_sum: d.daily.rain_sum?.[i] ?? 0,
              precipitation_sum: d.daily.precipitation_sum?.[i] ?? 0,
              evapotranspiration: d.daily.et0_fao_evapotranspiration?.[i] ?? 0,
              sunrise: d.daily.sunrise?.[i] ?? null,
              sunset: d.daily.sunset?.[i] ?? null,
              wind_gusts_max: d.daily.wind_gusts_10m_max?.[i] ?? null,
              feels_like_max: d.daily.apparent_temperature_max?.[i] ?? null,
              feels_like_min: d.daily.apparent_temperature_min?.[i] ?? null,
              snowfall_sum: d.daily.snowfall_sum?.[i] ?? null,
              // Середня хмарність і найгірша видимість за день — з погодинних даних
              cloud_cover_mean: hourlyByDay[t]?.cloudCoverMean ?? null,
              visibility_min: hourlyByDay[t]?.visibilityMin ?? null,
              weather_code: d.daily.weather_code[i] ?? 0,
              is_day: 1,
              iconPlaceholder: getWeatherIcon(d.daily.weather_code[i] ?? 0, 1),
              iconSymbol: getWeatherIconSymbol(d.daily.weather_code[i] ?? 0, 1),
              description: getWeatherSummaryText(d.daily.weather_code[i] ?? 0, 1),
            })),
          };

          console.log(`Card data created for ${displayName}:`, {
            windSpeedStored: newCardData.current.windNum,
            uvIndexStored: newCardData.current.uv_index,
            hourlyWindSample: newCardData.hourly
              ?.slice(0, 2)
              .map((h) => h.windNum),
            dailyWindSample: newCardData.daily16
              ?.slice(0, 2)
              .map((d) => d.wind_speed),
          });

          if (insertAtFirst) {
            const filtered = prev.filter((c) => c.id !== id);
            return [newCardData, ...filtered];
          }

          if (isMain) {
            const hasMain = prev.some((c) => c.isMain);
            if (hasMain) return prev.map((c) => (c.isMain ? newCardData : c));
            return [newCardData, ...prev];
          } else {
            return existingCard
              ? prev.map((c) => (c.id === id ? newCardData : c))
              : prev.filter((c) => !c.isMain).length >=
                  maxCustomCardsFor(hideGpsCardRef.current)
                ? prev
                : [...prev, newCardData];
          }
        });

        // Сезонний прогноз (до ~210 днів) — окремий запит, не блокує основний
        try {
          const today = new Date();
          const endDate = new Date(today);
          endDate.setDate(endDate.getDate() + 210);
          const fmt = (d) => d.toISOString().split("T")[0];
          const seasonalUrl = `https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${targetLat}&longitude=${targetLon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&wind_speed_unit=ms&start_date=${fmt(today)}&end_date=${fmt(endDate)}`;
          const seasonalRes = await axios.get(seasonalUrl, { timeout: 8000 });
          const sd = seasonalRes.data;
          if (sd?.daily?.time?.length) {
            const seasonalData = sd.daily.time.map((t, i) => ({
              fullDate: t,
              date: new Date(t).toLocaleDateString("uk", {
                day: "numeric",
                month: "2-digit",
              }),
              day: new Date(t).toLocaleDateString("uk", { weekday: "short" }),
              // Seasonal API returns ensemble means (arrays of arrays) — take index 0 (mean)
              temp_day: `${Math.round(
                Array.isArray(sd.daily.temperature_2m_max?.[0])
                  ? sd.daily.temperature_2m_max[0][i] ?? 0
                  : sd.daily.temperature_2m_max?.[i] ?? 0
              )}°C`,
              temp_night: `${Math.round(
                Array.isArray(sd.daily.temperature_2m_min?.[0])
                  ? sd.daily.temperature_2m_min[0][i] ?? 0
                  : sd.daily.temperature_2m_min?.[i] ?? 0
              )}°C`,
              wind_speed: `${Math.round(
                Array.isArray(sd.daily.wind_speed_10m_max?.[0])
                  ? sd.daily.wind_speed_10m_max[0][i] ?? 0
                  : sd.daily.wind_speed_10m_max?.[i] ?? 0
              )} м/с`,
              precipitation_sum:
                Array.isArray(sd.daily.precipitation_sum?.[0])
                  ? sd.daily.precipitation_sum[0][i] ?? 0
                  : sd.daily.precipitation_sum?.[i] ?? 0,
              isSeasonal: true,
            }));
            setWeatherCards((prev) =>
              prev.map((c) =>
                c.id === id ? { ...c, seasonal: seasonalData } : c
              )
            );
          }
        } catch (sErr) {
          console.warn("Seasonal forecast unavailable:", sErr.message);
        }
      } catch (error) {
        console.error("Помилка завантаження погоди", error);
      }
    },
    [],
  );

  // Мітки небезпеки для підказок пошуку: один запит на всі точки, вітер у м/с.
  // Повертає масив тієї ж довжини: { level: "now" | "soon", dayIndex, reasons } або null.
  const checkWeatherDanger = useCallback(async (points) => {
    if (!Array.isArray(points) || points.length === 0) return [];
    try {
      const lats = points.map((p) => Number(p.lat).toFixed(4)).join(",");
      const lons = points.map((p) => Number(p.lon).toFixed(4)).join(",");
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max&wind_speed_unit=ms&timezone=auto&forecast_days=3`,
        { timeout: 8000 },
      );
      // Для однієї точки Open-Meteo віддає об'єкт, для кількох — масив
      const list = Array.isArray(res.data) ? res.data : [res.data];

      const getReasons = (tMax, tMin, wind, uv) => {
        const reasons = [];
        if (tMax > 30) reasons.push({ type: "heat", value: Math.round(tMax) });
        if (tMin < -30) reasons.push({ type: "frost", value: Math.round(tMin) });
        if (wind > 10) reasons.push({ type: "wind", value: Math.round(wind) });
        if (uv > 7) reasons.push({ type: "uv", value: Math.round(uv) });
        return reasons;
      };

      return points.map((_, idx) => {
        const { current, daily } = list[idx] || {};
        if (!current || !daily) return null;

        // Сьогодні: денні макс./мін. температури, вітер зараз, макс. УФ за день
        const todayReasons = getReasons(
          daily.temperature_2m_max?.[0] ?? current.temperature_2m ?? 0,
          daily.temperature_2m_min?.[0] ?? current.temperature_2m ?? 0,
          current.wind_speed_10m ?? 0,
          daily.uv_index_max?.[0] ?? 0,
        );
        if (todayReasons.length > 0) {
          return { level: "now", dayIndex: 0, reasons: todayReasons };
        }

        // Найближчі 2 дні після сьогодні
        for (let i = 1; i < (daily.time?.length ?? 0); i++) {
          const reasons = getReasons(
            daily.temperature_2m_max?.[i] ?? 0,
            daily.temperature_2m_min?.[i] ?? 0,
            daily.wind_speed_10m_max?.[i] ?? 0,
            daily.uv_index_max?.[i] ?? 0,
          );
          if (reasons.length > 0) return { level: "soon", dayIndex: i, reasons };
        }
        return null;
      });
    } catch (error) {
      console.error("Weather danger check error:", error);
      return points.map(() => null);
    }
  }, []);

  const getInitialLocation = useCallback(() => {
    // GPS-картку вимкнено в бета-функціях: ні геолокації, ні запиту погоди
    if (hideGpsCard) return;
    if (!isLocationEnabled) {
      fetchWeather(
        {
          fullName: "Київ",
          id: "main-card",
          isFallback: true,
        },
        true,
        50.45,
        30.52,
      );
      return;
    }

    if ("geolocation" in navigator) {
      const optionsHigh = { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 };
      const optionsLow = { enableHighAccuracy: false, timeout: 15000, maximumAge: 0 };

      const fallbackToKyiv = (err) => {
        console.warn("Geolocation failed on mobile device:", err);
        fetchWeather(
          {
            fullName: "Київ",
            id: "main-card",
            isFallback: true,
          },
          true,
          50.45,
          30.52,
        );
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(
            { id: "main-card" },
            true,
            position.coords.latitude,
            position.coords.longitude,
          );
        },
        () => {
          // Спробувати низьку точність (мережі/IP), якщо GPS-супутники недоступні/заблоковані на мобільному
          navigator.geolocation.getCurrentPosition(
            (position) => {
              fetchWeather(
                { id: "main-card" },
                true,
                position.coords.latitude,
                position.coords.longitude,
              );
            },
            fallbackToKyiv,
            optionsLow
          );
        },
        optionsHigh
      );
    } else {
      fetchWeather(
        {
          fullName: "Київ",
          id: "main-card",
          isFallback: true,
        },
        true,
        50.45,
        30.52,
      );
    }
  }, [fetchWeather, isLocationEnabled, hideGpsCard]);

  const handleRefreshCard = useCallback(
    (card) => {
      card.isMain ? getInitialLocation() : fetchWeather(card, false);
    },
    [getInitialLocation, fetchWeather],
  );

  // 1. Початкове завантаження локації
  useEffect(() => {
    getInitialLocation();
  }, [getInitialLocation]);

  // 1.5. Аналіз пошукового запиту під капотом ("погода конотоп" -> індекс 0 + автоскрол)
  useEffect(() => {
    if (!isHydrated) return;
    const analysis = analyzeSearchQuery(
      window.location.search,
      window.location.hash,
      window.location.pathname,
    );
    if (analysis.isSearchEntry && analysis.cityName) {
      const city = analysis.cityData;

      // Динамічне оновлення заголовка та мета-опису. Для міст із бази — ті самі тексти,
      // що й у статичній сторінці /pohoda/<slug>/ (getCitySeo), щоб Google бачив один заголовок
      const dbCity = findCityInDatabase(analysis.cityName);
      const seo = dbCity ? getCitySeo(dbCity) : null;
      document.title =
        seo?.title || `Погода в місті ${analysis.cityName} — точний прогноз | Стихія`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          seo?.description ||
            `Точний прогноз погоди в місті ${analysis.cityName}: температура, вітер, вологість, тиск та графік на 16 днів.`
        );
      }

      // Канонічне посилання та розширена мікророзмітка Schema.org для Google
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        // Для міст із бази — статична сторінка /pohoda/<slug>/ (її і індексує Google)
        canonical.setAttribute(
          "href",
          dbCity
            ? `https://stuxia.com/pohoda/${getCitySlug(dbCity)}/`
            : `https://stuxia.com/?q=погода+${encodeURIComponent(analysis.cityName.toLowerCase())}`
        );
      }

      let jsonLd = document.getElementById("city-jsonld");
      if (!jsonLd) {
        jsonLd = document.createElement("script");
        jsonLd.id = "city-jsonld";
        jsonLd.type = "application/ld+json";
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Place",
        "name": analysis.cityName,
        "description": seo?.heading || `Точний прогноз погоди в місті ${analysis.cityName}`,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UA",
          "addressLocality": analysis.cityName
        }
      });

      fetchWeather(
        city.lat !== null
          ? { id: city.id, fullName: city.fullName, lat: city.lat, lon: city.lon }
          : city.name,
        false,
        city.lat,
        city.lon,
        true // insertAtFirst = true (індекс 0, для першості)
      );

      // Автоскрол до картки погоди
      setTimeout(() => {
        const weatherEl = document.getElementById("weather");
        if (weatherEl) {
          weatherEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 700);
    }
  }, [isHydrated, fetchWeather]);

  // 2. Перевірка актуальності даних при завантаженні (якщо сьогодні 30-те, а дані за 25-те)
  useEffect(() => {
    if (!isHydrated) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;

    weatherCards.forEach((card) => {
      const firstDayDate = card.daily16?.[0]?.fullDate;
      // Картки, збережені до виправлення одиниць вітру (км/год), оновлюємо одразу
      if (firstDayDate !== yesterdayStr || card.windUnit !== "ms") {
        handleRefreshCard(card);
      }
    });
  }, [isHydrated, weatherCards, handleRefreshCard]);

  // 3. Автоматичне оновлення кожну годину (тільки якщо вкладка активна)
  useEffect(() => {
    if (!isHydrated) return;

    let prevRemaining = calculateSecondsUntilNextHour();
    const timerId = setInterval(() => {
      if (document.visibilityState === "visible") {
        const remaining = calculateSecondsUntilNextHour();
        // Якщо ми перетнули межу години (було мало секунд, а стало знову близько 3600)
        if (prevRemaining <= 5 && remaining > 3590) {
          console.log("Auto-updating weather cards at start of hour...");
          weatherCardsRef.current.forEach((card) => handleRefreshCard(card));
        }
        prevRemaining = remaining;
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [isHydrated, handleRefreshCard, calculateSecondsUntilNextHour]);

  useEffect(() => {
    if (!isHydrated) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        appHiddenAtRef.current = Date.now();
        return;
      }

      const hiddenDuration = appHiddenAtRef.current
        ? Date.now() - appHiddenAtRef.current
        : 0;
      appHiddenAtRef.current = null;

      if (hiddenDuration < 5 * 60 * 1000) return;

      weatherCardsRef.current.forEach((card) => handleRefreshCard(card));
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isHydrated, handleRefreshCard]);

  const handleDeleteCard = useCallback((id) => {
    setWeatherCards((prev) => prev.filter((card) => card.id !== id));
  }, []);
  // Міста з Hero додаються строго по черзі: перевірка ліміту й лічильник у Firestore
  // мають бачити результат попереднього додавання (швидкі кліки по кількох підказках)
  const addCityQueueRef = useRef(Promise.resolve());
  const handleAddCityFromHero = useCallback(
    (cityObj) => {
      const task = addCityQueueRef.current.then(async () => {
        const customCardsCount = weatherCardsRef.current.filter(
          (card) => !card.isMain,
        ).length;
        if (customCardsCount >= maxCustomCardsFor(hideGpsCardRef.current)) {
          alert(cardLimitMessage(hideGpsCardRef.current));
          return false;
        }
        const added = (await fetchWeather(cityObj, false)) !== false;
        // Приємний момент: людина вже стежить за 3+ містами
        if (added && customCardsCount + 1 >= 3) notifySupportMoment("cards");
        return added;
      });
      addCityQueueRef.current = task.catch(() => {});
      return task;
    },
    [fetchWeather],
  );

  const handleRenameCard = useCallback((id, newName) => {
    setWeatherCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, locationName: newName } : card,
      ),
    );
  }, []);

  const moveWeatherCard = useCallback((id, dir) => {
    setWeatherCards((prev) => {
      const idx = prev.findIndex((c) => c.id === id);
      if (idx === -1) return prev;
      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= prev.length) return prev;
      const arr = [...prev];
      [arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
      return arr;
    });
  }, []);

  // Бета «Перетягування карток»: новий порядок id зі списку над картками
  const reorderWeatherCards = useCallback((orderedIds) => {
    setWeatherCards((prev) => {
      const byId = new Map(prev.map((card) => [card.id, card]));
      const ordered = orderedIds.map((id) => byId.get(id)).filter(Boolean);
      // Картки, що з'явились під час перетягування, не губимо — ставимо в кінець
      const rest = prev.filter((card) => !orderedIds.includes(card.id));
      return [...ordered, ...rest];
    });
  }, []);

  // Бета «Вимкнути GPS-картку». Повертаючи її, перевіряємо ліміт власних карток
  const handleToggleHideGpsCard = useCallback((nextHidden) => {
    if (nextHidden) {
      setBetaOn("hideGpsCard", true);
      return;
    }
    const customCards = weatherCardsRef.current.filter((card) => !card.isMain);
    const removeCount = customCards.length - MAX_CUSTOM_WEATHER_CARDS;
    if (removeCount > 0) {
      setGpsReturnRequest({ cards: customCards, removeCount });
      return;
    }
    setBetaOn("hideGpsCard", false);
  }, []);

  const confirmGpsCardReturn = useCallback((idsToRemove) => {
    setWeatherCards((prev) => prev.filter((card) => !idsToRemove.includes(card.id)));
    setBetaOn("hideGpsCard", false);
    setGpsReturnRequest(null);
    toast.success("GPS-картку повернуто", { id: "gps-card-return" });
  }, []);

  const cancelGpsCardReturn = useCallback(() => setGpsReturnRequest(null), []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setMinimumLoaderTimePassed(true), 3500);
    syncClock();

    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    if (!areInitialModulesReady || !minimumLoaderTimePassed) return;

    setIsFadingOut(true);
    const removeTimer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(removeTimer);
  }, [areInitialModulesReady, minimumLoaderTimePassed]);
  const handleLogout = () => {
    loadFirebase()
      .then(({ signOut, auth }) => signOut(auth))
      .catch((err) => console.warn("Firebase signOut:", err));
    setUser(null);
    setCurrentAvatar(userDefault);
    localforage.removeItem("currentAvatar");
    setIsSettingsModalOpen(false);
  };

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const nextMode = !prevMode;
      // При зміні глобальної теми скидаємо індивідуальні налаштування секцій,
      // щоб вони всі перейшли в новий глобальний режим
      setSectionThemes({});
      return nextMode;
    });
  }, []);

  const toggleSectionTheme = useCallback((key) => {
    setSectionThemes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const resetSectionThemes = useCallback(() => {
    setSectionThemes({});
  }, []);

  const toggleSectionVisibility = useCallback((key) => {
    setHiddenSections((prev) => {
      if (prev.includes(key)) return prev.filter((k) => k !== key);
      if (DEFAULT_SITE_SECTIONS.length - prev.length <= 2) return prev; // Мінімум 2 видимі
      return [...prev, key];
    });
  }, []);
  // Годинник оновлює себе сам, щоб не перерендерювати весь App щосекунди
  const heroDateString = <HeroClock user={user} timeZone={selectedTimezone} />;

  const moveSiteSection = (idx, dir) => {
    setSiteSections((prev) => {
      const arr = [...prev];
      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= arr.length) return arr;
      [arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
      return arr;
    });
  };

  const LandingPage = (
    <>
      <div id="hero">
        <Hero
          heroDateString={heroDateString}
          onAddCity={handleAddCityFromHero}
          cardLimits={{
            custom: weatherCards.filter((c) => !c.isMain).length,
            maxCustom: maxCustomCards,
            // Денний ліміт рахується лише для акаунта
            daily: user ? dailyCardAdditions : null,
            maxDaily: MAX_DAILY_CARD_ADDITIONS,
          }}
          startAnimation={!isLoading}
          user={user}
          isDarkMode={isDarkMode}
          checkWeatherDanger={checkWeatherDanger}
          heroBg={heroBg}
          setHeroBg={setHeroBg}
          heroBg2={heroBg2}
          setHeroBg2={setHeroBg2}
          heroBg3={heroBg3}
          setHeroBg3={setHeroBg3} 
          customHeroBgs={customHeroBgs}
          setCustomHeroBgs={setCustomHeroBgs}
          heroBgMode={heroBgMode}
          setHeroBgMode={setHeroBgMode}
          bgRatings={bgRatings}
          setBgRatings={setBgRatings}
          slideshowInterval={slideshowInterval}
          setSlideshowInterval={setSlideshowInterval}
          filterCategory={heroBgFilterCategory}
          setFilterCategory={setHeroBgFilterCategory}
          heroBgBlur={heroBgBlur}
          setHeroBgBlur={setHeroBgBlur}
          heroBgPixelation={heroBgPixelation}
          setHeroBgPixelation={setHeroBgPixelation}
          heroBgFocal1={heroBgFocal1}
          setHeroBgFocal1={setHeroBgFocal1}
          heroBgFocal2={heroBgFocal2}
          setHeroBgFocal2={setHeroBgFocal2}
          heroBgFocal3={heroBgFocal3}
          setHeroBgFocal3={setHeroBgFocal3}
          selectedTimezone={selectedTimezone}
          setSelectedTimezone={setSelectedTimezone}
          customHolidayName={customHolidayName}
          isStickyBgMode={isStickyBgMode}
          setCustomHolidayName={setCustomHolidayName}
        />
      </div>
      <div className="container">
        {siteSections.map(
          (section) =>
            section.key !== "hero" && (
              <StyledSectionContainer
                $isDarkMode={sectionThemes[section.key] ?? isDarkMode}
                $isStickyBgMode={isStickyBgMode}
                $isHidden={hiddenSections.includes(section.key)}
                key={section.key}
              >
                <SectionContent
                  section={section}
                  weatherCards={weatherCards}
                  isDarkMode={sectionThemes[section.key] ?? isDarkMode}
                  isLocationEnabled={isLocationEnabled}
                  handleRefreshCard={handleRefreshCard}
                  handleDeleteCard={handleDeleteCard}
                  handleRenameCard={handleRenameCard}
                  moveWeatherCard={moveWeatherCard}
                  setIsLocationEnabled={setIsLocationEnabled}
                  user={user}
                  customHolidayName={customHolidayName}
                  isStickyBgMode={isStickyBgMode}
                  weatherCardLayout={weatherCardLayout}
                  heroDateString={heroDateString}
                  hideGpsCard={hideGpsCard}
                  onReorderCards={isDragCardsBeta ? reorderWeatherCards : undefined}
                />
              </StyledSectionContainer>
            ),
        )}
      </div>
    </>
  );

  return (
    <DecoratorProvider isDarkMode={isDarkMode}>
      <SiteContextMenu isDarkMode={isDarkMode} onToggleTheme={toggleTheme}>
      <DominoTutorial user={user} />
      <GlobalFilterLock $locked={isFsActive && lockFiltersInFs} />
      <Loader
        isLoading={isLoading}
        isFadingOut={isFadingOut}
        randomPhrase={
          phraseData.text && (
            <LoadingPhraseWrapper $isNew={phraseData.isNew}>
              {phraseData.text}
              {phraseParticles.map((p) => (
                <ParticleSymbol
                  key={p.id}
                  $x={p.x}
                  $y={p.y}
                  $delay={p.delay}
                  $isNew={phraseData.isNew}
                >
                  ✧
                </ParticleSymbol>
              ))}
            </LoadingPhraseWrapper>
          )
        }
      />

      <ThemeWrapper $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        <div className="App">
          <audio ref={bgAudioRef} onEnded={handleBgMusicEnded} preload="auto" />
          <audio
            ref={bgAudioRef2}
            onEnded={handleBgMusicEnded}
            preload="auto"
          />
          <div className="container">
            <Header
              isIntroDone={isFadingOut || !isLoading}
              sfxVolume={sfxVolume}
              onOpenRegister={() => setIsModalOpen(true)}
              onOpenSettings={() => setIsSettingsModalOpen(true)}
              onOpenVip={() => setIsVipModalOpen(true)}
              onOpenShop={() => setIsShopOpen(true)}
              onOpenAchievements={() => setIsAchivmentsOpen(true)}
              onOpenHelp={() => setIsUserSearchOpen(true)}
              onOpenInfo={() => setIsInfoOpen(true)}
              onOpenAuthorsDirectory={() => setIsAuthorsDirectoryOpen(true)}
              onOpenOtherOptions={() => setIsSettingsModalOpen(true)}
              onCloseInfo={() => setIsInfoOpen(false)}
              isInfoOpen={isInfoOpen}
              user={user}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              currentAvatar={currentAvatar}
              onLogout={handleLogout}
              loadingStrategy={loadingStrategy}
              onSetLoadingStrategy={setLoadingStrategy}
              setIsFsActive={setIsFsActive}
              isStickyBgMode={isStickyBgMode}
              setIsStickyBgMode={setIsStickyBgMode}
            />
          </div>
          <main>
            <Suspense fallback={null}>
              {LandingPage}
            </Suspense>
          </main>
          <Suspense fallback={null}>
            {isModalOpen && (
              <Modal
                onClose={() => setIsModalOpen(false)}
                onRegister={(data) => {
                  setUser(data);
                  setIsModalOpen(false);
                }}
                isDarkMode={isDarkMode}
              />
            )}
            {(isSettingsModalOpen || isOtherOptionsOpen) && (
              <UserSettingsModal
                initialTab={settingsInitialTab}
                onClose={() => {
                  setIsSettingsModalOpen(false);
                  setIsOtherOptionsOpen(false);
                  setSettingsInitialTab(null);
                }}
                user={user}
                onUpdate={setUser}
                onLogout={handleLogout}
                weatherCardLayout={weatherCardLayout}
                onUpdateLayout={setWeatherCardLayout}
                isDarkMode={isDarkMode}
                bgMusicEnabled={bgMusicEnabled}
                setBgMusicEnabled={setBgMusicEnabled}
                autoMuteBgMusic={autoMuteBgMusic}
                setAutoMuteBgMusic={setAutoMuteBgMusic}
                bgMusicSource={bgMusicSource}
                setBgMusicSource={setBgMusicSource}
                customBgTracks={customBgTracks}
                setCustomBgTracks={setCustomBgTracks}
                bgMusicVolume={bgMusicVolume}
                setBgMusicVolume={setBgMusicVolume}
                bgMusicSpeed={bgMusicSpeed}
                setBgMusicSpeed={setBgMusicSpeed}
                bgMusicMode={bgMusicMode}
                setBgMusicMode={setBgMusicMode}
                bgMusicShuffle={bgMusicShuffle}
                setBgMusicShuffle={setBgMusicShuffle}
                libraryBgSettings={libraryBgSettings}
                setLibraryBgSettings={setLibraryBgSettings}
                activeBgTrackId={activeBgTrackId}
                setActiveBgTrackId={setActiveBgTrackId}
                onResetBgPosition={handleResetBgPosition}
                onSkipBgTrack={skipToNextBgTrack}
                sfxVolume={sfxVolume}
                setSfxVolume={setSfxVolume}
                bgAudioRef={bgAudioRef}
                bgAudioRef2={bgAudioRef2}
                onToggleTheme={toggleTheme}
                siteSections={siteSections}
                moveSiteSection={moveSiteSection}
                resetSiteSections={() =>
                  setSiteSections([...DEFAULT_SITE_SECTIONS])
                }
                sectionThemes={sectionThemes}
                hiddenSections={hiddenSections}
                onToggleSectionVisibility={toggleSectionVisibility}
                onToggleSectionTheme={toggleSectionTheme}
                onResetSectionThemes={resetSectionThemes}
                loadingStrategy={loadingStrategy}
                onSetLoadingStrategy={setLoadingStrategy}
                isStickyBgMode={isStickyBgMode}
                onToggleStickyBg={() => setIsStickyBgMode(!isStickyBgMode)}
                onToggleHideGpsCard={handleToggleHideGpsCard}
              />
            )}
            {gpsReturnRequest && (
              <GpsCardReturnDialog
                cards={gpsReturnRequest.cards}
                removeCount={gpsReturnRequest.removeCount}
                maxWithGps={MAX_CUSTOM_WEATHER_CARDS}
                onConfirm={confirmGpsCardReturn}
                onCancel={cancelGpsCardReturn}
              />
            )}
            {isVipModalOpen && (
              <VipModal onClose={() => setIsVipModalOpen(false)} />
            )}
            {isShopOpen && (
              <ShopModal onClose={() => setIsShopOpen(false)} hasVip={!!user} user={user} onUserUpdate={setUser} />
            )}
            {isAchivmentsOpen && (
              <AchivmentsModal
                onClose={() => setIsAchivmentsOpen(false)}
                isDarkMode={isDarkMode}
              />
            )}
            {isUserSearchOpen && (
              <TermsModal
                isDarkMode={isDarkMode}
                isOpen={isUserSearchOpen}
                onClose={() => setIsUserSearchOpen(false)}
              />
            )}
            {isFirstTimeHelpOpen && (
              <TermsModal
                isOpen={isFirstTimeHelpOpen}
                onClose={() => setIsFirstTimeHelpOpen(false)}
              />
            )}
            {isInfoOpen && <TermsModal onClose={() => setIsInfoOpen(false)} />}
            <AuthorsDirectoryModal
              isOpen={isAuthorsDirectoryOpen}
              onClose={() => setIsAuthorsDirectoryOpen(false)}
              isDarkMode={isDarkMode}
            />

          </Suspense>
          <DecoratorOverlay isStickyBgMode={isStickyBgMode} />
          <SupportBanner
            isDarkMode={isDarkMode}
            user={user}
            onOpenDetails={() => setIsShopOpen(true)}
          />
        </div>
      </ThemeWrapper>
      {isMaintenanceMode && (
        <Maintenance
          isDarkMode={isDarkMode}
          endTime={maintenanceEndTime}
          message={maintenanceMessage}
        />
      )}
      </SiteContextMenu>
    </DecoratorProvider>
  );
};
import DominoTutorial from "./components/DominoTutorial/DominoTutorial";
import { TutorialProvider } from "./components/DominoTutorial/TutorialContext.jsx";

export default function AppWrapper() {
  // «Вимкнути анімації та розмиття» з налаштувань (або авто на слабких пристроях):
  // CSS гасить animationsPref.css, framer-motion — MotionConfig
  const animationsDisabled = useAnimationsDisabled();
  return (
    <MotionConfig reducedMotion={animationsDisabled ? "always" : "user"}>
      <TutorialProvider>
        <App />
      </TutorialProvider>
    </MotionConfig>
  );
}
