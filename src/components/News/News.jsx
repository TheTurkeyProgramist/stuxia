import React, { Fragment, useEffect, useState, useCallback, useRef, startTransition } from "react";
import { lazyWithRetry } from "../../utils/lazyWithRetry.js";
import { ModalSuspense } from "../Loader/ModalLoading.jsx";
import { createPortal } from "react-dom";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import localforage from "localforage";
import rainbow from "../../media/backgrounds/scenes/constellations.webp";
import asiumelevenFull from "../../media/backgrounds/asium/winter-forest.webp";
import chessFull from "../../media/backgrounds/scenes/chess.webp";
import studiFull from "../../media/backgrounds/scenes/art-studio.webp";
import fireFull from "../../media/backgrounds/scenes/volcano.webp";
import slivkishowFull from "../../media/third-party/youtube/slivkishow-cookie-flight.webp";
import asiumelevenThumb from "../../media/thumbs/asium-winter-forest.webp";
import chessThumb from "../../media/thumbs/chess.webp";
import studiThumb from "../../media/thumbs/art-studio.webp";
import fireThumb from "../../media/thumbs/volcano.webp";
import slivkishowThumb from "../../media/thumbs/slivkishow-cookie-flight.webp";
import asiuntwoFull from "../../media/backgrounds/asium/sakura-field.webp";
import asiumtwelveFull from "../../media/backgrounds/asium/waterfall.webp";
import ultraTurkeysFull from "../../media/turkeys/kate.webp";
import castleFull from "../../media/backgrounds/scenes/turkey-in-dragon-museum.webp";
import swampnineFull from "../../media/backgrounds/swamp/lake-of-freedom.webp";
import asiuntwoThumb from "../../media/thumbs/asium-sakura-field.webp";
import asiumtwelveThumb from "../../media/thumbs/asium-waterfall.webp";
import ultraTurkeysThumb from "../../media/thumbs/turkeys-kate.webp";
import castleThumb from "../../media/thumbs/turkey-in-dragon-museum.webp";
import swampnineThumb from "../../media/thumbs/swamp-lake-of-freedom.webp";
import { DEFAULT_BGS } from "../Hero/defaultBgs.js";
import { NEWS_SOURCES, NEWS_DESC_TRANSLATE_MAX, cleanNewsDescription } from "../../../firebase-functions/newsSources.js";
// ШІ та markdown підвантажуються лише при відкритті модалки
const NewsAiModal = lazyWithRetry(() => import("./NewsAiModal"));
import InfoModal from "../Modals/UserSearchModal.jsx";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import { FaLock } from "react-icons/fa";

import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdReport } from "react-icons/md"; //Поскаржитися



import SourceLogo, { getSourceBrand } from "./SourceLogo.jsx";
import { useAnimationsDisabled } from "../../utils/animationsPref";
import { MdOutlineReportOff } from "react-icons/md"; //Заглушити
import { MdBlock, MdClose } from "react-icons/md";
import { TbStarsFilled } from "react-icons/tb"; // ШІ Виклад
import { SheetHeader, SHEET_IN_MS, SHEET_OUT_MS } from "../Modals/sheetModal.jsx";
import { FiPlus, FiMinus, FiList, FiLink, FiShield, FiMoreVertical, FiAlertTriangle } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import toast from "react-hot-toast";
import {
  getNewsBlockReason,
  getNewsFilterPrefs,
  getNewsFilterText,
  isNewsFilterThorough,
} from "../../utils/contentFilter";
import { subscribePrefs } from "../../utils/prefsStore.js";
import { isPushSubscribed } from "../../utils/pushNotifications.js";
import {
  CUSTOM_FEEDS_WARN_AT,
  getCustomFeedsLimit,
  getUrgentWords,
  isUrgentNews,
  isUrgentNotifyEnabled,
  notifyUrgentNews,
  getRecsContext,
  scoreNews,
  recordNewsClick,
  NEWS_ORDER_PREF_KEYS,
  NEWS_VIEW_KEY,
} from "../../utils/newsPersonal";
import { usePrefValue } from "../../utils/betaFeatures";
import { mergeNewsFilterFromCloud } from "../../utils/newsFilterSync";
import { loadFirebase, listCollection } from "../../firebaseLazy";
import {
  CLOUD_LIMITS,
  usedTodayFromCloud,
  writeWithDailyCounter,
} from "../../utils/cloudCounter";
import {
  MUTE_SYNC_DAILY_LIMIT,
  MUTE_PENDING_KEY,
  MUTE_COUNTER_KEY,
  getTodayKey,
  addPendingOp,
  applyPending,
  countForToday,
  toDayKey,
  MUTED_NEWS_MAX,
} from "../../utils/muteSync";
import { Tooltip } from "../Tooltip/Tooltip";
import i18n from "../../i18n/i18n.js";
import { useIsAiAttached, removeAiAttachmentById } from "../AiShared/aiAttachments.js";
import { dateLocale } from "../../utils/weatherText.js";
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
// Колір за темою: перше значення — темна тема (типово), друге — світла
const themed = (dark, light) => (props) => (props.$isDarkMode === false ? light : dark);

const Decoder = styled.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: ${themed("rgba(0, 0, 0, 0.81)", "rgba(255, 255, 255, 0.82)")};
  color: ${themed("#ffffff", "#1a1a1a")};
`;

// Вбудовані стрічки — спільний список із сервером і Cloudflare (firebase-functions/newsSources.js)
const SOURCES = NEWS_SOURCES;

// Рекомендовані новинні сайти (адреси перевірено через RSS-конвертер)
const RECOMMENDED_SOURCES = [
  { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "The New York Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" },
  { name: "The Guardian World", url: "https://www.theguardian.com/world/rss" },
  { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml" },
  { name: "Fox News", url: "https://moxie.foxnews.com/google-publisher/latest.xml" },
  { name: "NBC News", url: "https://feeds.nbcnews.com/nbcnews/public/news" },
  { name: "CBS News", url: "https://www.cbsnews.com/latest/rss/main" },
  { name: "Sky News", url: "https://feeds.skynews.com/feeds/rss/world.xml" },
  { name: "Deutsche Welle", url: "https://rss.dw.com/rdf/rss-en-all" },
  { name: "France 24", url: "https://www.france24.com/en/rss" },
  { name: "Euronews", url: "https://www.euronews.com/rss" },
  { name: "The Hill", url: "https://thehill.com/feed/" },
  { name: "Wired", url: "https://www.wired.com/feed/rss" },
  { name: "TechCrunch", url: "https://techcrunch.com/feed/" },
  { name: "The Verge", url: "https://www.theverge.com/rss/index.xml" },
  { name: "Ars Technica", url: "https://feeds.arstechnica.com/arstechnica/index" },
  { name: "NASA", url: "https://www.nasa.gov/rss/dyn/breaking_news.rss" },
  { name: "Українська правда", url: "https://www.pravda.com.ua/rss/view_news/" },
  { name: "Укрінформ", url: "https://www.ukrinform.ua/rss/block-lastnews" },
  { name: "Радіо Свобода", url: "https://www.radiosvoboda.org/api/zrqiteuuir" },
];

// Facebook не підтримуємо: безкоштовно пости не віддає, тож замість стрічки показуємо підказку
const FACEBOOK_QUERY = /facebook|фейсбук|fb\.com|fb\.me|\bfb\b|\bфб\b/i;
const FACEBOOK_NOTE =
  () => (i18n.t("newsWeather.News.facebookMertvyiSadZ"));

const UNBLOCKABLE_SOURCE_URLS = new Set(
  SOURCES.filter((s) => s.unblockable).map((s) => s.url),
);

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
const NewsDiv = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

// Поки новини вантажаться — займаємо ту саму висоту, що й карусель з кнопками під нею
// (заміряно: 247px на телефоні, 251px з 768px). Інакше після завантаження блок виростав
// на ~60px, і через центрування в Hero весь його вміст стрибав угору (зсув макета, CLS)
const NewsLoadingBox = styled.div`
  box-sizing: border-box;
  min-height: 247px;
  padding: 60px 20px;
  text-align: center;
  color: gray;

  @media (min-width: 768px) {
    min-height: 251px;
  }
`;

const AihelpTitle = styled.div`
  font-size: 25px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "white" : "#010101")};
  width: 100%;
  box-sizing: border-box;
`;
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;

  /* Місце під стрілки ◀ ▶, щоб вони не накривали текст крайніх карток */
  @media (min-width: 480px) {
    padding: 0 72px;
  }
`;
const MobileCarousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2px;
  overflow-x: auto;
  min-width: 0; 
  scroll-snap-type: x mandatory;
  padding: 10px 0 10px;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 479px) {
    justify-content: flex-start; 
  }
`;
const CarouselHint = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  right: 5px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: auto;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(-50%);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    justify-content: center;
    gap: 75%;
  }
      @media (max-width: 980px) {
    gap: 55%;
  }
      @media (max-width: 767px) {
    gap: 40%;
  }
 @media (max-width: 567px) {
    gap: 20%;
  }
     @media (max-width: 425px) {
    gap: 20%;
  }
`;
// Підказка каруселі сама керує своїм миганням: раніше цей стан жив у News і
// кожні кілька секунд перерендерював усі картки новин
const PulsingCarouselHint = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let hideTimer;
    const trigger = () => {
      setVisible(true);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setVisible(false), 1500);
    };
    const initialTimer = setTimeout(trigger, 2000);
    const interval = setInterval(trigger, 7000);
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);
  return <CarouselHint $visible={visible} {...props} />;
};
const CarouselHintItem = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.$direction === "previous" ? "left: 16px;" : "right: 16px;")}
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 501;
  pointer-events: auto;
  
  border: 2px solid #ffaa00;
  border-radius: 6px;
  background: #000;
  color: #ffaa00;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

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
    border-top: 2px solid rgb(255, 170, 0);
    border-left: 2px solid rgb(255, 170, 0);
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
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 0 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 100% 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 0 100% / 14px 14px no-repeat;
    transition: all 0.2s ease;
  }

  &:hover {
    background: #000;
    animation-play-state: paused;
    box-shadow: 0 0 18px rgba(255, 170, 0, 0.99);
    
    &::before {
      border-color: rgba(255, 170, 0, 0.95);
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

    & > * { 
      animation-duration: 1.2s;
    }
  }

  &:active {
    transform: translateY(calc(-50% + 2px)) scale(0.96);
  }

  /* Телефон: менші стрілки (як у картках погоди) — менше закривають новини */
  @media (max-width: 767px) {
    ${(props) => (props.$direction === "previous" ? "left: 12px;" : "right: 8px;")}
    width: 30px;
    height: 30px;
    font-size: 15px;
    border-width: 1.5px;
    border-radius: 5px;
    &::before {
      top: -7px;
      left: -7px;
      width: 30px;
      height: 27px;
      border-width: 1.5px;
    }
    &::after {
      top: -7px;
      left: -7px;
      width: 37px;
      height: 37px;
      background-size: 10px 10px;
    }
    &:hover::before {
      top: -8px;
      left: -8px;
    }
    &:hover::after {
      top: -8px;
      left: -8px;
      width: 38px;
      height: 38px;
      background-size: 11px 11px;
    }
  }
`;
const CarouselSlide = styled.div`
  flex: 0 0 270px;
  width: 270px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1px;
  opacity: ${(props) => {
    if (props.$distanceFromCenter === 0) return 1;
    if (props.$distanceFromCenter === 1) return 0.9;
    return 0.82;
  }};
  transform: scale(${(props) => {
    if (props.$distanceFromCenter === 0) return 1;
    if (props.$distanceFromCenter === 1) return 0.94;
    return 0.9;
  }});
  transform-origin: center center;
  transition: transform 0.25s ease, opacity 0.25s ease;

  @media (max-width: 479px) {
    flex: 0 0 calc(100vw - 48px);
    width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    max-width: 320px;
  }

  @media (min-width: 480px) and (max-width: 899px) {
    flex: 0 0 calc(50% - 5px);
    width: calc(50% - 5px);
    min-width: calc(50% - 5px);
  }

  @media (min-width: 900px) {
    flex: 0 0 calc(33.333% - 4px);
    width: calc(33.333% - 4px);
    min-width: calc(33.333% - 4px);
  }
`;

const MoreNewsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 auto 0;
  padding: 6px 22px;
  border: 2px solid #ffaa00;
  border-radius: 6px;
  background: ${themed("#000", "#ffffff")};
  color: ${themed("#ffaa00", "#a35400")};
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  transition: box-shadow 0.2s ease, transform 0.1s ease, background 0.2s ease;

  & > svg {
    flex-shrink: 0;
    font-size: 16px;
  }

  &:hover {
    box-shadow: 0 0 18px rgba(255, 170, 0, 0.99);
  }

  &:active {
    transform: scale(0.97);
  }

  /* Другорядна дія (налаштування): пунктир, напівпрозорий фон, без світіння */
  ${({ $secondary, $isDarkMode }) => {
    if (!$secondary) return "";
    const light = $isDarkMode === false;
    return `
    border-style: dashed;
    border-color: rgba(255, 170, 0, 0.75);
    background: ${light ? "rgba(255, 255, 255, 0.94)" : "rgba(0, 0, 0, 0.45)"};
    color: ${light ? "#8a4300" : "rgba(255, 170, 0, 0.9)"};
    box-shadow: none;

    &:hover {
      box-shadow: none;
      background: ${light ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.75)"};
      border-color: #ffaa00;
      color: ${light ? "#8a4700" : "#ffaa00"};
    }
  `;
  }}
`;

/* Лічильник новин на кнопці «Всі новини» */
const MoreNewsCount = styled.span`
  min-width: 20px;
  padding: 1px 7px;
  border-radius: 999px;
  background: #ffaa00;
  color: #000;
  font-size: 12px;
  font-weight: 800;
  line-height: 18px;
  text-align: center;
`;

/* Ряд кнопок під каруселлю: «Додати стрічку» ліворуч від «Всі новини» */
const MoreNewsActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  & > button {
    margin: 0;
    white-space: nowrap;
  }

  /* Телефон: обидві кнопки в один ряд, компактніші */
  @media (max-width: 480px) {
    flex-wrap: nowrap;
    gap: 8px;
    padding: 0 8px;

    & > button {
      min-width: 0;
      padding: 5px 12px;
      font-size: 13px;
      gap: 5px;
    }
  }
`;

/* «Всі новини»: згруповані за джерелом, по 3 найсвіжіші з кожного */
// Шторка на весь екран, як часовий пояс і мова (висувається знизу)
const MoreNewsPanel = styled(motion.div)`
  --sheet-accent: ${themed("#ffaa00", "#a35400")};
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${themed("#111", "#f8fafc")};
  padding: 0 12px 12px;
  box-sizing: border-box;
  color: ${themed("#fff", "#1a1a1a")};
  will-change: transform;

  scrollbar-width: auto;
  scrollbar-color: ${themed("#ffaa00 rgba(255, 255, 255, 0.08)", "#a35400 rgba(0, 0, 0, 0.08)")};
`;

/* Шапка «Всіх новин»: лишається вгорі під час прокрутки */




const MoreNewsSection = styled.section`
  flex-shrink: 0;

  /* Групи джерел розділяє тонка лінія замість заголовка */
  & + & {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid ${themed("rgba(255, 255, 255, 0.12)", "rgba(0, 0, 0, 0.12)")};
  }
`;

// Телефон — список рядків (CompactRow), планшет — 2 картки в ряд, комп'ютер — 3
const MoreNewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

/* Обгортка картки у «Всі новини»: поява по черзі, картка тягнеться на всю клітинку сітки */
const MoreNewsAppear = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-width: 0;

  & > * {
    flex: 1;
  }
`;

const Card = styled.a`
  background: ${themed("#1a1a1a", "#ffffff")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#000000")};
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  height: auto;
  min-height: auto;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;
// Фільтр новин перевіряє стрічку порціями не довше за стільки мс (довга задача — від 50 мс)
const FILTER_SLICE_MS = 25;
// Віддати потік браузеру між порціями: scheduler.yield, де є, інакше setTimeout(0)
const yieldToMain = () =>
  typeof globalThis.scheduler?.yield === "function"
    ? globalThis.scheduler.yield()
    : new Promise((resolve) => setTimeout(resolve, 0));

// Фото новин із чужих сайтів часто 1920 px і понад 100 КБ, а картка — ~350 px.
// Пропускаємо їх через безкоштовний сервіс зменшення wsrv.nl: WebP потрібної ширини (~15–20 КБ)
// з довгим кешем. Не відповів wsrv.nl — картка вантажить оригінал напряму (див. onError у NewsCard)
const NEWS_IMAGE_PROXY = "https://wsrv.nl/";

// Карусель: скільки новин малювати одразу і якими порціями домальовувати решту (див. carouselLimit)
const CAROUSEL_MAX_ITEMS = 45;
const CAROUSEL_FIRST_RENDER = 10;
const CAROUSEL_RENDER_STEP = 12;
const BLANK_IMG = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

const canProxyNewsImage = (src) =>
  typeof src === "string" &&
  /^https?:\/\//i.test(src) &&
  !src.startsWith(window.location.origin);

// we — не збільшувати, якщо оригінал і так менший
const proxiedNewsImage = (src, width) =>
  `${NEWS_IMAGE_PROXY}?url=${encodeURIComponent(src)}&w=${width}&output=webp&q=72&we`;

// src / srcSet / sizes для <img>: через wsrv.nl, якщо можна, інакше — як є
const newsImageProps = (src, useProxy, widths, sizes) =>
  useProxy
    ? {
        src: proxiedNewsImage(src, widths[0]),
        srcSet: widths.map((w) => `${proxiedNewsImage(src, w)} ${w}w`).join(", "),
        sizes,
      }
    : { src: src || BLANK_IMG };

const NewsImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;

  /* Запасне фото (не з новини) — лише фірмова атмосфера, не головний об'єкт */
  ${(props) =>
    props.$fallback &&
    `
    filter: blur(3px) brightness(0.4) saturate(0.6);
    transform: scale(1.08);
  `}
`;

// Галочка у фільтрі джерел — іконкою (без символів ☑ ☐)
const FilterCheck = ({ on }) =>
  on ? (
    <MdCheckBox aria-hidden="true" style={{ verticalAlign: "-3px", fontSize: "16px" }} />
  ) : (
    <MdCheckBoxOutlineBlank aria-hidden="true" style={{ verticalAlign: "-3px", fontSize: "16px" }} />
  );

const SourceFlag = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: block;
  text-align: center;
  padding: 10px 10px;
  box-sizing: border-box;
  min-width: 110px;
  max-width: calc(100% - 70px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  font-size: 14px;
  z-index: 5;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #ffb36c;
  }
  backdrop-filter: blur(4px);
`;

const NewBadge = styled.span`
  position: absolute;
  top: 83%;
  right: 4px;
  background: #ddff00;
  color: #000;
  width: 80px;
  height: 69px;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 23px;
  font-weight: 900;
  z-index: 6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.5s ease;
`;

const CardActions = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 9;
`;

const CardAction = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 25px;
  min-width: 25px;
  height: 28px;
  overflow: hidden;
  background: ${(props) => props.$background};
  color: ${(props) => props.$color || "white"};
  border: none;
  padding: 2px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  transition: width 0.5s ease, background 0.5s ease, transform 0.5s ease;

  svg {
    flex: 0 0 auto;
    font-size: 17px;
  }

  span {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-width 0.5s ease, opacity 0.5s ease;
  }

  &:hover,
  &:focus-visible {
    width: auto;
    transform: scale(1.05);

    span {
      max-width: 100px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;

const NewsSettingsBtn = styled(CardAction)`
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.8);
  width: 34px;
  min-width: 34px;
  height: 32px;
  box-shadow: none;
  backdrop-filter: blur(4px);
  /* Глобальне правило CardAction span ховає будь-який span до ховеру — шестерня має бути видима завжди */
  span {
    max-width: none;
    opacity: 1;
    overflow: visible;
  }
  &:hover,
  &:focus-visible {
    background: rgba(0, 0, 0, 0.85);
    color: #ffffff;
    width: 34px;
    height: 32px;
  }
`;

const NewsSettingsMenu = styled.div`
  position: absolute;
  inset: 0;
  min-height: 145px;
  padding-top: 48px;
  box-sizing: border-box;
  background: #1c1c1c;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 8;
  overflow: hidden;
  clip-path: ${(props) => (props.$open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)")};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  /* visibility ховає меню лише після завершення закриття */
  transition:
    clip-path 0.35s ease,
    visibility 0s linear ${(props) => (props.$open ? "0s" : "0.35s")};
`;

/* Шестерня й хрестик лежать одне на одному і плавно змінюють одне одного */
const SettingsIconSwap = styled.span`
  position: relative;
  display: inline-flex;
  width: 29px;
  height: 29px;

  & > svg {
    position: absolute;
    inset: 0;
    font-size: 29px;
    transition: transform 0.35s ease, opacity 0.35s ease;
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

// Лічильник синхронізації заглушених новин (ліміт на добу)
const MuteSyncHint = styled.span`
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;
  color: ${(p) => (p.$exhausted ? "#ffb36c" : "rgba(255, 255, 255, 0.6)")};
`;

const NewsSettingsItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  background: transparent;
  color: ${(props) => props.$color || "#fff"};
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.15s;

  svg {
    font-size: 26px;
    flex-shrink: 0;
  }

  &:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.07);
  }

  /* Непарний останній пункт на всю ширину */
  &:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  &[disabled] {
    opacity: 0.45;
    cursor: default;
    &:hover {
      background: transparent;
    }
  }
`;

const BlockOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: white;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: #060606;
  color: #fefcfc;
  padding: 5px;
  border-radius: 7px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #ffb36c;
  position: relative;
`;

const FullscreenModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  z-index: 100000;
  padding: 5px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`;

const FullscreenModalContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  overflow-y: auto;
  padding-right: 8px;
`;


const CloseButton = styled.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`;

// Набір вже вбудованих джерел (для яких не показуємо кнопку скарги)
const BUILTIN_SOURCE_NAMES = new Set(SOURCES.map((s) => s.name));

// Позначка термінової новини (слова — у Налаштуваннях → Новини)
const UrgentTag = styled.span`
  display: inline-block;
  margin-right: 6px;
  padding: 1px 6px;
  border-radius: 4px;
  background: #dc2626;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  vertical-align: 2px;
`;

// ───── Компактний рядок новини для телефона (модалка «Всі новини») ─────

const CompactRow = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  color: ${themed("#ffffff", "#1a1a1a")};
  text-decoration: none;
  border-bottom: 1px solid ${themed("rgba(255, 255, 255, 0.12)", "rgba(0, 0, 0, 0.12)")};

  &:last-child {
    border-bottom: none;
  }
  &:focus-visible {
    outline: 2px solid #ffaa00;
    outline-offset: 2px;
    border-radius: 8px;
  }
`;

const CompactThumb = styled.div`
  position: relative;
  flex: 0 0 104px;
  width: 104px;
  height: 74px;
  border-radius: 12px;
  overflow: hidden;
  background: ${themed("#222", "#e5e7eb")};

  /* На найвужчих телефонах (320–359px) лишаємо більше місця заголовку */
  @media (max-width: 359px) {
    flex-basis: 84px;
    width: 84px;
    height: 64px;
  }
`;

const CompactNewBadge = styled.span`
  position: absolute;
  left: 4px;
  bottom: 4px;
  z-index: 2;
  padding: 1px 6px;
  border-radius: 4px;
  background: #ddff00;
  color: #000;
  font-size: 11px;
  font-weight: 900;
`;

const CompactBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CompactSource = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${themed("#ffaa00", "#a35400")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`;

const CompactTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

`;

const CompactMoreBtn = styled.button`
  position: relative;
  z-index: 9;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${themed("rgba(255, 255, 255, 0.75)", "rgba(0, 0, 0, 0.6)")};
  font-size: 20px;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: ${themed("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.08)")};
    color: ${themed("#ffffff", "#000000")};
  }
  &:focus-visible {
    outline: 2px solid #ffaa00;
  }

`;

// Те саме меню, але одним рядком поверх новини; праворуч лишаємо місце для «✕»
const CompactMenu = styled(NewsSettingsMenu)`
  min-height: 0;
  padding: 0 44px 0 0;
  border-radius: 10px;
  grid-template-columns: none;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);

  & > button {
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.07);
    font-size: 11px;

    svg {
      font-size: 20px;
    }
  }
  & > button:first-child {
    border-left: none;
  }
  & > button:last-child:nth-child(odd) {
    grid-column: auto;
  }
`;

/* Вигляд «Список»: прямокутний блок каруселі тієї ж ширини й висоти, що й велика картка
   (160px — текст картки лежить поверх фото), а в ньому дві новини рядками:
   фото ліворуч, текст праворуч. */
const NEWS_CARD_HEIGHT = 160; // висота великої картки в NewsCard (showImage)
// Блок «Списку» трохи вищий за картку: дві новини з заголовками до 3 рядків
const NEWS_PAIR_HEIGHT = 190;
const NewsPairBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: ${NEWS_PAIR_HEIGHT}px;
  padding: 0 10px;
  border-radius: 8px;
  background: ${themed("rgba(20, 20, 20, 0.88)", "rgba(255, 255, 255, 0.92)")};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  overflow: hidden;

  ${CompactRow} {
    padding: 6px 0;
    gap: 10px;
  }
  ${CompactThumb} {
    flex-basis: 84px;
    width: 84px;
    height: 62px;
    border-radius: 8px;
  }
  ${CompactTitle} {
    font-size: 13px;
    -webkit-line-clamp: 3;
  }
  ${CompactMoreBtn} {
    flex-basis: 28px;
    width: 28px;
    height: 28px;
    font-size: 18px;
  }

  /* 480–1099px: блоки вужчі — менше фото, більше місця тексту */
  @media (min-width: 480px) and (max-width: 699px) {
    ${CompactThumb} {
      flex-basis: 60px;
      width: 60px;
      height: 48px;
    }
  }
  @media (min-width: 700px) and (max-width: 1099px) {
    ${CompactThumb} {
      flex-basis: 72px;
      width: 72px;
      height: 54px;
    }
  }
`;

const NewsCard = ({
  item,
  $isDarkMode,
  showImage,
  showTitle,
  showDescription,
  onAiSummaryClick,
  onReportClick,
  onMuteClick,
  onUnmuteClick,
  onRevealClick,
  muteSyncInfo,
  compact = false,
}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(item.isNew);
  const isAiAttached = useIsAiAttached(`news-${item.link}`);
  const [isNewsSettingsOpen, setIsNewsSettingsOpen] = useState(false);
  // Lazy-load: показуємо реальне зображення лише коли картка входить у viewport
  const [imgSrc, setImgSrc] = useState(null);
  const [isFallbackImg, setIsFallbackImg] = useState(false);
  // Фото, яке wsrv.nl не віддав, — його вантажимо напряму
  const [proxyFailedSrc, setProxyFailedSrc] = useState(null);
  const useImageProxy =
    !isFallbackImg && canProxyNewsImage(imgSrc) && proxyFailedSrc !== imgSrc;
  const handleImgError = () => {
    if (useImageProxy) {
      setProxyFailedSrc(imgSrc);
      return;
    }
    // Не завантажилось і напряму — підставляємо обкладинку з природи (свій файл, не зациклиться)
    if (isFallbackImg) return;
    setImgSrc(getNewsFallbackImage(item.link || item.title || ""));
    setIsFallbackImg(true);
  };


  // IntersectionObserver: вантажимо зображення лише коли картка входить у viewport.
  // Якщо реального зображення немає — беремо детерміноване фото з DEFAULT_BGS.
  useEffect(() => {
    if (!showImage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          if (item.displayImage && item.displayImage !== rainbow) {
            setImgSrc(item.displayImage);
            setIsFallbackImg(false);
          } else {
            // Немає обкладинки у стрічці — пробуємо og:image зі сторінки статті,
            // а якщо його нема — стабільне фото з бібліотеки сайту
            const fallback = getNewsFallbackImage(item.link || item.title || "");
            setImgSrc(fallback);
            setIsFallbackImg(true);
            fetchOgImage(item.link).then((og) => {
              if (og) {
                setImgSrc(og);
                setIsFallbackImg(false);
              }
            });
          }
        }
      },
      { rootMargin: "300px", threshold: 0 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [item.displayImage, item.link, showImage]);

  useEffect(() => {
    if (!item.isNew) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(async () => {
            setIsVisible(false);
            try {
              const seenLinks =
                (await localforage.getItem("seen_news_links")) || [];
              if (!seenLinks.includes(item.link)) {
                await localforage.setItem("seen_news_links", [
                  ...seenLinks,
                  item.link,
                ]);
              }
            } catch (err) {}
          }, 60000);

          observer.unobserve(entry.target);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [item.isNew, item.link]);

  if (item.isBlocked) {
    return (
      <Card
        $isDarkMode={$isDarkMode}
        style={{ cursor: "not-allowed", position: "relative" }}
        as="div"
      >
        <BlockOverlay>
          <span style={{ fontSize: "40px", marginBottom: "10px" }}><FaLock /></span>
          <h4 style={{ margin: 0, fontSize: "14px", lineHeight: "1.4" }}>
            {i18n.t("newsWeather.News.danaNovynaBulaNepravomirna")}
          </h4>
        </BlockOverlay>
      </Card>
    );
  }

  // Фільтр у «м'якому» режимі: новина не зникає, а ховається під плашкою
  if (item.isAutoBlocked && !item.isMuted) {
    return (
      <Card
        $isDarkMode={$isDarkMode}
        style={{ position: "relative", minHeight: "190px" }}
        as="div"
      >
        <BlockOverlay style={{ background: "rgba(40, 30, 20, 0.6)" }}>
          <span style={{ fontSize: "28px", marginBottom: "10px", background: "rgba(0,0,0,0.3)", padding: "6px 10px", borderRadius: "5px", display: "flex", color: "#fb923c" }}>
            <FiShield aria-hidden="true" />
          </span>
          <h4 style={{ margin: 0, fontSize: "14px", lineHeight: "1.4", background: "rgba(0,0,0,0.3)", padding: "5px 10px", borderRadius: "5px" }}>
            {i18n.t("newsWeather.News.nebazhanyiKontentBuvAvtozablokovanyi")}
          </h4>
          <span style={{ marginTop: "6px", fontSize: "12px", opacity: 0.85, background: "rgba(0,0,0,0.3)", padding: "3px 8px", borderRadius: "999px" }}>
            {item.autoBlockReason}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onRevealClick) onRevealClick(item);
            }}
            style={{
              marginTop: "10px",
              padding: "5px 15px",
              background: "#3f5959",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {i18n.t("newsWeather.News.rozhlushyty")}
          </button>
        </BlockOverlay>
      </Card>
    );
  }

  if (item.isMuted) {
    return (
      <Card
        $isDarkMode={$isDarkMode}
        style={{ position: "relative", minHeight: "190px" }}
        as="div"
      >
        <BlockOverlay style={{ background: "rgba(128, 128, 128, 0.5)" }}>
          <span style={{ display: "inline-flex", fontSize: "30px", marginBottom: "10px", background: "rgba(0,0,0,0.3)", padding: "5px 10px", borderRadius: "5px" }}>
            <MdOutlineReportOff aria-hidden="true" />
          </span>
          <h4 style={{ margin: 0, fontSize: "14px", lineHeight: "1.4", background: "rgba(0,0,0,0.3)", padding: "5px 10px", borderRadius: "5px" }}>
            {i18n.t("newsWeather.News.novynuPrykhovano")}
          </h4>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onUnmuteClick) onUnmuteClick(item);
            }}
            style={{
              marginTop: "10px",
              padding: "5px 15px",
              background: "#3f5959",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {i18n.t("newsWeather.News.rozhlushyty")}
          </button>
          {muteSyncInfo && (
            <MuteSyncHint
              $exhausted={muteSyncInfo.used >= muteSyncInfo.limit}
              style={{ marginTop: "8px", background: "rgba(0,0,0,0.35)", padding: "3px 8px", borderRadius: "999px" }}
            >
              {muteSyncInfo.used >= muteSyncInfo.limit
                ? i18n.t("newsWeather.News.limitZminyLysheNa", { limit: muteSyncInfo.limit, limit2: muteSyncInfo.limit })
                : i18n.t("newsWeather.News.synkhronizatsiiaZaDobu", { used: muteSyncInfo.used, limit: muteSyncInfo.limit })}
            </MuteSyncHint>
          )}
        </BlockOverlay>
      </Card>
    );
  }

  const copyLink = () =>
    navigator.clipboard.writeText(item.link).then(() => {
      toast.success(i18n.t("newsWeather.News.posylanniaSkopiiovano"));
    });

  // Пункти меню «Налаштування» — спільні для звичайної картки та компактного рядка
  const settingsMenuItems = (
    <>
      {compact && (
        <NewsSettingsItem
          onClick={() => {
            copyLink();
            setIsNewsSettingsOpen(false);
          }}
        >
          <FiLink /> {i18n.t("newsWeather.News.kopiiuvaty")}
        </NewsSettingsItem>
      )}
      <NewsSettingsItem
        $color={isAiAttached ? "#bbb" : "#ff69b4"}
        title={isAiAttached ? i18n.t("ui.aiAttachments.prybratyZChatu") : i18n.t("newsWeather.News.prykripytyDoShiChatu")}
        onClick={() => {
          // Уже прикріплена — кнопка відкріплює. Ключ Gemini не потрібен (є офлайн-модель)
          if (isAiAttached) {
            removeAiAttachmentById(`news-${item.link}`);
            setIsNewsSettingsOpen(false);
            return;
          }
          const cleanText = (item.description || item.title).replace(/<[^>]*>?/gm, "").trim();
          window.dispatchEvent(
            new CustomEvent("attachCardToAiHelp", {
              detail: {
                id: `news-${item.link}`,
                type: "news",
                title: item.title,
                details: i18n.t("newsWeather.News.dzhereloZaholovokZmistPosylannia", { sourceName: item.sourceName, title: item.title, cleanText: cleanText, link: item.link }),
              },
            })
          );
          setIsNewsSettingsOpen(false);
        }}
      >
        {isAiAttached ? (
          <><FiMinus /> {compact ? i18n.t("ui.aiAttachments.vidkripyty") : i18n.t("ui.aiAttachments.vidkripytyVidShi")}</>
        ) : (
          <><FiPlus /> {compact ? i18n.t("newsWeather.News.doShi") : i18n.t("newsWeather.News.prykripytyDoShi")}</>
        )}
      </NewsSettingsItem>
      <NewsSettingsItem
        onClick={() => {
          if (onAiSummaryClick) onAiSummaryClick(item);
          setIsNewsSettingsOpen(false);
        }}
      >
        <TbStarsFilled /> {i18n.t("newsWeather.News.shiVyklad")}
      </NewsSettingsItem>
      {!BUILTIN_SOURCE_NAMES.has(item.sourceName) && (
        <NewsSettingsItem
          $color="#ff6b6b"
          onClick={(e) => {
            if (onReportClick) onReportClick(item, e);
            setIsNewsSettingsOpen(false);
          }}
        >
          <MdReport /> {compact ? i18n.t("newsWeather.News.skarha") : i18n.t("newsWeather.News.podatySkarhu")}
        </NewsSettingsItem>
      )}
      <NewsSettingsItem
        $color="#aaa"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (onMuteClick) onMuteClick(item, e);
          setIsNewsSettingsOpen(false);
        }}
      >
        <MdOutlineReportOff /> {i18n.t("newsWeather.News.zahlushyty")}
        {muteSyncInfo && !compact && (
          <MuteSyncHint $exhausted={muteSyncInfo.used >= muteSyncInfo.limit}>
            {muteSyncInfo.used >= muteSyncInfo.limit
              ? i18n.t("newsWeather.News.lysheNaTsomuPrystroi")
              : i18n.t("newsWeather.News.synkhronizatsiia", { used: muteSyncInfo.used, limit: muteSyncInfo.limit })}
          </MuteSyncHint>
        )}
      </NewsSettingsItem>
    </>
  );

  // Телефон: рядок як у Метеофорі — фото ліворуч, праворуч джерело й заголовок.
  // Копіювання та налаштування сховані під одну кнопку «⋮», щоб не тіснити заголовок.
  if (compact) {
    return (
      <CompactRow
        ref={cardRef}
        $isDarkMode={$isDarkMode}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => recordNewsClick(item)}
        onAuxClick={() => recordNewsClick(item)}
      >
        {showImage && (
          <CompactThumb $isDarkMode={$isDarkMode}>
            <NewsImg
              {...newsImageProps(imgSrc, useImageProxy, [120, 240], "104px")}
              alt=""
              loading="lazy"
              decoding="async"
              $fallback={isFallbackImg}
              onError={handleImgError}
            />
            {isVisible && <CompactNewBadge>{i18n.t("newsWeather.News.nove")}</CompactNewBadge>}
          </CompactThumb>
        )}
        <CompactBody>
          <CompactSource $isDarkMode={$isDarkMode}>
            {item.isUrgent && <UrgentTag>{i18n.t("newsWeather.News.terminovo")}</UrgentTag>}
            {item.sourceName}
          </CompactSource>
          <CompactTitle title={item.title}>{item.title}</CompactTitle>
        </CompactBody>
        <CompactMoreBtn
          type="button"
          $isDarkMode={$isDarkMode}
          aria-label={isNewsSettingsOpen ? i18n.t("newsWeather.News.zakrytyDiiZNovynoiu") : i18n.t("newsWeather.News.diiZNovynoiu")}
          aria-expanded={isNewsSettingsOpen}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsNewsSettingsOpen((v) => !v);
          }}
        >
          {isNewsSettingsOpen ? <MdClose aria-hidden="true" /> : <FiMoreVertical aria-hidden="true" />}
        </CompactMoreBtn>
        <CompactMenu
          $open={isNewsSettingsOpen}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {settingsMenuItems}
        </CompactMenu>
      </CompactRow>
    );
  }

  return (
    <Card
      ref={cardRef}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      $isDarkMode={$isDarkMode}
      onClick={() => recordNewsClick(item)}
      onAuxClick={() => recordNewsClick(item)}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: showImage ? `${NEWS_CARD_HEIGHT}px` : "auto",
          minHeight: "auto",
        }}
      >
        {isVisible && <NewBadge>{i18n.t("newsWeather.News.nove")}</NewBadge>}
        <SourceFlag
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(item.sourceHome, "_blank");
          }}
          aria-label={i18n.t("newsWeather.News.pereityNaHolovnuStorinku", { sourceName: item.sourceName })}
          title={item.sourceName}
        >
          {item.sourceName}
        </SourceFlag>
        <CardActions aria-label={i18n.t("newsWeather.News.diiZNovynoiu")}>
          <Tooltip content={isNewsSettingsOpen ? i18n.t("newsWeather.News.zakrytyNalashtuvannia") : i18n.t("newsWeather.News.nalashtuvannia")} isDarkMode={$isDarkMode}>
            <NewsSettingsBtn
              aria-label={i18n.t("newsWeather.News.nalashtuvanniaKartkyNovyny")}
              aria-expanded={isNewsSettingsOpen}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsNewsSettingsOpen((v) => !v);
              }}
            >
              <SettingsIconSwap $open={isNewsSettingsOpen}>
                <BiCog aria-hidden="true" />
                <MdClose aria-hidden="true" />
              </SettingsIconSwap>
            </NewsSettingsBtn>
          </Tooltip>
        </CardActions>
        <NewsSettingsMenu
          $open={isNewsSettingsOpen}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {settingsMenuItems}
        </NewsSettingsMenu>
        {showImage && (
          <NewsImg
            {...newsImageProps(
              imgSrc,
              useImageProxy,
              [400, 800],
              "(max-width: 767px) 92vw, 420px",
            )}
            alt=""
            loading="lazy"
            decoding="async"
            $fallback={isFallbackImg}
            onError={handleImgError}
          />
        )}
        {(showTitle || showDescription) && (
          <CardContent $isDarkMode={$isDarkMode} $overlay={showImage}>
            {showTitle && (
              <TitleRow>
                <h2
                  title={item.title}
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    fontWeight: "700",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: "1.3",
                  }}
                >
                  {item.isUrgent && <UrgentTag>{i18n.t("newsWeather.News.terminovo")}</UrgentTag>}
                  {item.title}
                </h2>
                <Tooltip content={i18n.t("newsWeather.News.kopiiuvatyShliakh")} isDarkMode={$isDarkMode}>
                  <CopyLinkBtn
                    type="button"
                    aria-label={i18n.t("newsWeather.News.kopiiuvatyShliakhDoNovyny")}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyLink();
                    }}
                  >
                    <FiLink aria-hidden="true" />
                  </CopyLinkBtn>
                </Tooltip>
              </TitleRow>
            )}
            {showDescription && (
              <p
                style={{
                  fontSize: "13px",
                  opacity: 0.9,
                  margin: 0,
                  lineHeight: "1.4",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
                }}
              >
                {item.description}
              </p>
            )}
          </CardContent>
        )}
      </div>
    </Card>
  );
};
const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 8px;
`;

const CopyLinkBtn = styled.button`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Бічні картки каруселі масштабуються до 0.9 — 30px дає ≥24px області дотику */
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
  color: inherit;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(0, 172, 185, 0.35);
    transform: scale(1.08);
  }

  &:focus-visible {
    outline: 2px solid #00acb9;
    outline-offset: 2px;
  }
`;

const CardContent = styled.div`
  padding: 8px;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  min-height: auto;
  flex-grow: 0;

  ${(props) =>
    props.$overlay
      ? `
    background: ${
         "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0, 0, 0, 0.83) 80%, transparent 100%)" };
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    margin-top: auto;
  `
      : `
    color: ${props.$isDarkMode ? "#ffffff" : "#000000"};
  `}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1px;
  margin-bottom: 3px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  width: 320px;
  box-sizing: border-box;
  @media (min-width: 468px) {
    width: 100%;
    }
`;

const FilterBtn = styled.button`
  background: ${(props) => (props.$active ? "#5a3f27" : "rgb(26, 49, 56)")};
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: start;
  font-weight: 600;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:disabled {
    opacity: 0.5;
  }
`;
/* Плитки джерел у повноекранному вікні: кілька в ряд, іконка над текстом */
const SourceTileGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 3px;
`;

const SourceTile = styled(FilterBtn)`
  position: relative;
  /* По 3 в ряд; плитки неповного останнього ряду ділять ширину порівну */
  flex: 1 1 calc((100% - 20px) / 3);
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 96px;
  padding: 12px 8px;
  text-align: center;
  line-height: 1.25;
  border-radius: 10px;

  & > svg {
    font-size: 28px;
    flex-shrink: 0;
  }
`;

const SourceSearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  margin-bottom: 12px;
  border-radius: 10px;
  border: 2px solid rgba(255, 170, 0, 0.5);
  background: #111;
  color: #fff;
  font-family: var(--font-family);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #ffaa00;
    box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  }
  /* Ліміт вичерпано — червона рамка */
  ${(p) => p.$full && `
    border-color: rgba(255, 99, 99, 0.6);
    &:focus { border-color: #ff6363; box-shadow: 0 0 12px rgba(255, 99, 99, 0.3); }
  `}
`;

// Попередження під полем, коли стрічок уже багато (з CUSTOM_FEEDS_WARN_AT)
const FeedsWarning = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0 0 12px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12.5px;
  line-height: 1.45;
  color: ${(p) => (p.$full ? "#ffb4b4" : "#ffd9a0")};
  background: ${(p) => (p.$full ? "rgba(255, 99, 99, 0.10)" : "rgba(255, 170, 0, 0.08)")};
  border: 1px solid ${(p) => (p.$full ? "rgba(255, 99, 99, 0.35)" : "rgba(255, 170, 0, 0.3)")};
  & > svg { flex-shrink: 0; margin-top: 2px; }
  strong { color: #ffffff; font-weight: 600; }
`;

const RecoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 10px;
  max-height: 55vh;
  overflow-y: auto;
  padding-right: 4px;
`;

const RecoItem = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 86px;
  padding: 12px 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  /* Банер у кольорі джерела: фірмова смужка зверху й легкий відтінок фону */
  /* Старі браузери без color-mix просто лишають рівний фон */
  background: rgb(26, 49, 56);
  ${(p) =>
    p.$brand &&
    `background: linear-gradient(165deg, color-mix(in srgb, ${p.$brand} 38%, rgb(26, 49, 56)) 0%, rgb(26, 49, 56) 72%);`}
  color: #fff;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0; right: 0; top: 0;
    height: 3px;
    background: ${(p) => p.$brand || "transparent"};
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06);
  }

  & > svg {
    font-size: 24px;
  }
  & > small {
    font-size: 11px;
    font-weight: 500;
    opacity: 0.6;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover:not(:disabled) {
    background: rgba(255, 179, 108, 0.3);
    transform: translateY(-2px);
    border-color: ${(p) => p.$brand || "rgba(255, 255, 255, 0.25)"};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover:not(:disabled) { transform: none; }
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 8px;
  background: ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)")};
  border: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)")};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: ${(props) => (props.$isError ? "#ff4d4d" : "#ffb36c")};
  width: ${(props) => props.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${(props) => (props.$isError ? "rgba(255, 77, 77, 0.7)" : "rgba(255, 179, 108, 0.5)")};
`;

// Скільки небажаних новин фільтр сховав за сьогодні — дрібно, в дужках після заголовка
const FilteredInTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  opacity: 0.7;
  white-space: nowrap;
  cursor: help;
`;

// ── Скарги ───────────────────────────────────────────────────────────────
// Новий формат: reporters: { uid: час сервера } (Timestamp у SDK, ISO-рядок у REST).
// Старий формат: reports: [{ uid, timestamp }] — враховуємо, доки не застаріє.
const REPORT_WINDOW_MS = 24 * 60 * 60 * 1000;
const reportTimeMs = (value) => {
  if (!value) return 0;
  if (typeof value.toMillis === "function") return value.toMillis();
  if (typeof value === "number") return value;
  if (typeof value === "object" && "timestamp" in value) return Number(value.timestamp) || 0;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};
// Скільки різних акаунтів поскаржилось за останню добу
const countRecentReports = (data, now = Date.now()) => {
  if (!data) return 0;
  const uids = new Set();
  Object.entries(data.reporters || {}).forEach(([uid, ts]) => {
    if (now - reportTimeMs(ts) < REPORT_WINDOW_MS) uids.add(uid);
  });
  (data.reports || []).forEach((r, idx) => {
    if (now - reportTimeMs(r) < REPORT_WINDOW_MS) uids.add(r?.uid || `legacy-${idx}`);
  });
  return uids.size;
};
const reportedWithinDay = (data, uid, now = Date.now()) => {
  if (!data) return false;
  if (data.reporters?.[uid] && now - reportTimeMs(data.reporters[uid]) < REPORT_WINDOW_MS) return true;
  return (data.reports || []).some(
    (r) => r?.uid === uid && now - reportTimeMs(r) < REPORT_WINDOW_MS,
  );
};

const getLocalDateKey = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getSourceType = (url) => {
  if (!url) return "rss";
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) return "youtube";
  if (lowerUrl.includes("t.me/") || lowerUrl.includes("telegram.org") || lowerUrl.startsWith("@")) return "telegram";
  if (lowerUrl.includes("telegra.ph/")) return "telegraph";
  if (lowerUrl.includes("withhive.com")) return "hive";
  return "rss";
};

const getYoutubeThumbnail = (videoUrl) => {
  if (!videoUrl) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = videoUrl.match(regExp);
  if (match && match[2].length === 11) {
    return `https://i.ytimg.com/vi/${match[2]}/hqdefault.jpg`;
  }
  return null;
};

/**
 * Витягує перше зображення з HTML-вмісту RSS-статті.
 * Потрібно для джерел (ScienceDaily, Nature тощо), які не містять
 * окремого поля thumbnail/enclosure, але мають <img> у content/description.
 */
const extractImageFromContent = (item) => {
  // 1. Спробуємо enclosure (стандартне поле RSS)
  if (item.enclosure?.link && item.enclosure.link.match(/\.(jpe?g|png|webp|gif)/i)) {
    return item.enclosure.link;
  }
  // 2. Спробуємо thumbnail (rss2json)
  if (item.thumbnail && item.thumbnail.startsWith("http")) {
    return item.thumbnail;
  }
  // 3. Шукаємо <img src="..."> у полях content і description
  const html = item.content || item.description || "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match && match[1] && match[1].startsWith("http")) {
    return match[1];
  }
  return null;
};

const parseJsonFeed = (feed) =>
  (feed.items || []).map((item) => ({
    title: item.title || "",
    link: item.url || item.external_url || "",
    description: item.summary || item.content_text || item.content_html || "",
    content: item.content_html || "",
    pubDate: item.date_published || item.date_modified || "",
    thumbnail: item.image || "",
  })).filter((item) => item.title && item.link);

/**
 * Масив лише зображень (без відео) з DEFAULT_BGS — для запасних обкладинок новин.
 */
const NEWS_THUMBS = new Map([
  [asiumelevenFull, asiumelevenThumb],
  [chessFull, chessThumb],
  [studiFull, studiThumb],
  [fireFull, fireThumb],
  [slivkishowFull, slivkishowThumb],
  [asiuntwoFull, asiuntwoThumb],
  [asiumtwelveFull, asiumtwelveThumb],
  [ultraTurkeysFull, ultraTurkeysThumb],
  [castleFull, castleThumb],
  [swampnineFull, swampnineThumb],
]);

const NEWS_FALLBACK_IMAGES = DEFAULT_BGS
  .filter(
    (bg) =>
      bg.category === "Природа та Стихії" &&
      /\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(bg.src || ""),
  )
  .map((bg) => NEWS_THUMBS.get(bg.src) || bg.src);

/**
 * Повертає стабільне (детерміноване за URL статті) запасне зображення.
 * Один і той самий URL → завжди одне й те ж фото, без мигання при рендері.
 */
const getNewsFallbackImage = (link) => {
  if (!NEWS_FALLBACK_IMAGES.length) return rainbow;
  let hash = 0;
  for (let i = 0; i < link.length; i++) {
    hash = (hash * 31 + link.charCodeAt(i)) & 0xffffffff;
  }
  return NEWS_FALLBACK_IMAGES[Math.abs(hash) % NEWS_FALLBACK_IMAGES.length];
};

// Публічні CORS-проксі. Будь-який може «лягти» (таймаути, відповідь без CORS-заголовка),
// тому пробуємо по черзі, з таймаутом, і тимчасово вимикаємо ті, що впали.
const CORS_PROXIES = [
  { name: "codetabs", build: (u) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}` },
  { name: "allorigins", build: (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}` },
  { name: "corsproxy", build: (u) => `https://corsproxy.io/?url=${encodeURIComponent(u)}` },
];
const PROXY_TIMEOUT_MS = 8000;
const PROXY_COOLDOWN_MS = 10 * 60 * 1000;
const proxyDisabledUntil = new Map();

const fetchWithProxyFallback = async (url) => {
  let lastError = null;
  for (const proxy of CORS_PROXIES) {
    if ((proxyDisabledUntil.get(proxy.name) || 0) > Date.now()) continue;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);
    try {
      const res = await fetch(proxy.build(url), { signal: controller.signal });
      if (!res.ok) {
        // 401/403/429/5xx — проблема самого проксі (ключ, ліміт, падіння), а не статті
        if ([401, 403, 429].includes(res.status) || res.status >= 500) {
          proxyDisabledUntil.set(proxy.name, Date.now() + PROXY_COOLDOWN_MS);
        }
        throw new Error(`${proxy.name} error status: ${res.status}`);
      }
      const text = await res.text();
      if (!text) throw new Error(`${proxy.name} returned empty body`);
      return text;
    } catch (e) {
      lastError = e;
      // Мережева помилка / CORS / таймаут — проксі недоступний, не мучимо його якийсь час
      if (e?.name === "AbortError" || e instanceof TypeError) {
        proxyDisabledUntil.set(proxy.name, Date.now() + PROXY_COOLDOWN_MS);
      }
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error("All CORS proxies failed", { cause: lastError });
};

// Кеш стрічок на пристрої: поки він свіжий, мережу не чіпаємо взагалі,
// а без інтернету показуємо останню збережену версію, хоч і стару.
const FEED_CACHE_TTL_MS = 30 * 60 * 1000;
const FEED_CACHE_PREFIX = "news_feed_cache_";
// Готова стрічка (з перекладом) — щоб показати її миттєво при відкритті сторінки
const NEWS_SNAPSHOT_KEY = "news_last_results";
// Скільки новин кожного джерела гарантовано є у стрічці і показується у «Всіх новинах»
const NEWS_PER_SOURCE = 3;

// ───── Спільний набір вбудованих стрічок (/api/news-bundle) ─────
// Сервер (Firebase refreshNewsBundle) кожні 10 хв збирає по 3 новини з кожної
// вбудованої стрічки й перекладає їх. Сайт робить 1 запит замість 10 і не перекладає сам.
const NEWS_BUNDLE_CACHE_KEY = "news_bundle_cache";
const NEWS_BUNDLE_TTL_MS = 10 * 60 * 1000; // на пристрої — не частіше, ніж сервер оновлює
const NEWS_BUNDLE_MAX_AGE_MS = 60 * 60 * 1000; // сервер мовчить годину — набір застарів
const NEWS_BUNDLE_OFFLINE_MS = 6 * 60 * 60 * 1000; // без мережі показуємо й старіший
const NEWS_BUNDLE_TIMEOUT_MS = 6000;

const fetchNewsBundle = async (signal) => {
  const endpoints = import.meta.env.DEV
    ? ["/api/news-bundle", "https://stuxia.com/api/news-bundle"]
    : ["/api/news-bundle"];
  for (const endpoint of endpoints) {
    const timeout = new AbortController();
    const timer = setTimeout(() => timeout.abort(), NEWS_BUNDLE_TIMEOUT_MS);
    const onAbort = () => timeout.abort();
    signal?.addEventListener("abort", onAbort);
    try {
      const res = await fetch(endpoint, { signal: timeout.signal });
      if (!res.ok || !(res.headers.get("content-type") || "").includes("json")) continue;
      const data = await res.json();
      if (Array.isArray(data?.items) && data.items.length > 0) return data;
    } catch (err) {
      if (signal?.aborted) throw err;
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener("abort", onAbort);
    }
  }
  return null;
};

// Map(назва джерела → новини у форматі стрічки) або null, якщо набору немає.
// Готові переклади кладемо в кеш news_trans_*, тож translateNewsItems не перекладає їх удруге.
const loadNewsBundle = async ({ forceFresh = false, signal } = {}) => {
  let cached = null;
  try {
    cached = await localforage.getItem(NEWS_BUNDLE_CACHE_KEY);
  } catch {
    // без кешу
  }
  let bundle = null;
  if (!forceFresh && cached?.data && Date.now() - cached.savedAt < NEWS_BUNDLE_TTL_MS) {
    bundle = cached.data;
  } else {
    try {
      bundle = await fetchNewsBundle(signal);
    } catch (err) {
      if (err.name === "AbortError") throw err;
    }
    if (bundle) {
      localforage
        .setItem(NEWS_BUNDLE_CACHE_KEY, { savedAt: Date.now(), data: bundle })
        .catch(() => {});
    } else if (cached?.data && Date.now() - cached.savedAt < NEWS_BUNDLE_OFFLINE_MS) {
      bundle = cached.data;
    }
  }
  if (!bundle) return null;
  if (Date.now() - (Number(bundle.updatedAt) || 0) > NEWS_BUNDLE_MAX_AGE_MS) {
    // Застарілий набір не показуємо одразу, але тримаємо як запасний:
    // якщо жодна стрічка не завантажиться, краще старі новини, ніж помилка
    staleNewsBundle = bundle;
    return null;
  }
  return bundleToMap(bundle);
};

// Останній відомий набір, що був старший за годину (див. loadNewsBundle)
let staleNewsBundle = null;

const bundleToMap = async (bundle) => {
  const bySource = new Map();
  for (const entry of bundle.items) {
    const source = SOURCES.find((s) => s.name === entry?.sourceName);
    if (!source || !entry.link || !entry.title) continue;
    const image = typeof entry.image === "string" ? entry.image : "";
    const item = {
      title: entry.title,
      link: entry.link,
      description: entry.description || "",
      content: "",
      pubDate: entry.pubDate || "",
      thumbnail: image,
      displayImage: image || rainbow,
      sourceName: source.name,
      sourceFlag: source.flag,
      sourceHome: source.home,
      sourceUrl: source.url,
    };
    if (!bySource.has(source.name)) bySource.set(source.name, []);
    bySource.get(source.name).push(item);

    // Сервер не зміг перекласти (null) — сайт перекладе цю новину сам, як раніше
    if (entry.titleUk && typeof entry.descriptionUk === "string") {
      const key = `news_trans_${entry.link}`;
      try {
        if (!(await localforage.getItem(key))) {
          await localforage.setItem(key, {
            title: entry.titleUk,
            description: `${entry.descriptionUk}...`,
            link: entry.link,
            displayImage: image || rainbow,
            sourceName: source.name,
            sourceFlag: source.flag,
            sourceHome: source.home,
            sourceUrl: source.url,
            pubDate: entry.pubDate || "",
          });
        }
      } catch {
        // не вдалося — перекладемо на пристрої
      }
    }
  }
  return bySource;
};

// План А для RSS: rss2json прямо з браузера. Його ліміт рахується на IP користувача,
// а не на наш Cloudflare. Самі сайти CORS не віддають, тож напряму читати їх не можна.
const RSS2JSON_COOLDOWN_MS = 10 * 60 * 1000;
let rss2jsonDisabledUntil = 0;

// rss2json віддає дату як "2026-11-09 12:00:00" (UTC) — Safari такий рядок не розбирає
const normalizeRss2JsonDate = (value) =>
  /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(value || "")
    ? `${value.replace(" ", "T")}Z`
    : value || "";

const fetchViaRss2Json = async (feedUrl, signal) => {
  if (rss2jsonDisabledUntil > Date.now()) return null;
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`,
      { signal },
    );
    if (!res.ok) {
      if (res.status === 429 || res.status >= 500) {
        rss2jsonDisabledUntil = Date.now() + RSS2JSON_COOLDOWN_MS;
      }
      return null;
    }
    const data = await res.json();
    // status "error" буває і через ліміт «нових стрічок за короткий час» — тоді йдемо в план Б
    if (data.status !== "ok" || !Array.isArray(data.items) || data.items.length === 0) {
      return null;
    }
    return data.items.map((item) => ({
      ...item,
      pubDate: normalizeRss2JsonDate(item.pubDate),
    }));
  } catch (err) {
    if (err.name === "AbortError") throw err;
    // Мережа / CORS — сервіс недоступний, якийсь час не витрачаємо на нього запити
    if (err instanceof TypeError) {
      rss2jsonDisabledUntil = Date.now() + RSS2JSON_COOLDOWN_MS;
    }
    return null;
  }
};

/**
 * Дістає og:image зі сторінки статті (для стрічок без картинок, напр. Phys.org).
 * Результат кешується в localforage під ключем og_img_<link>; "" — картинки немає.
 */
const OG_FAIL_TTL_MS = 6 * 60 * 60 * 1000;
const OG_MAX_CONCURRENT = 2;
let ogActive = 0;
const ogQueue = [];
const withOgSlot = async (task) => {
  if (ogActive >= OG_MAX_CONCURRENT) {
    await new Promise((resolve) => ogQueue.push(resolve));
  }
  ogActive++;
  try {
    return await task();
  } finally {
    ogActive--;
    ogQueue.shift()?.();
  }
};

const fetchOgImage = async (link) => {
  if (!link || !/^https?:\/\//i.test(link)) return null;
  const cacheKey = `og_img_${link}`;
  const failKey = `og_fail_${link}`;
  try {
    const cached = await localforage.getItem(cacheKey);
    if (typeof cached === "string") return cached || null;
    const failedAt = await localforage.getItem(failKey);
    if (typeof failedAt === "number" && Date.now() - failedAt < OG_FAIL_TTL_MS) return null;
    const html = await withOgSlot(() => fetchWithProxyFallback(link)).catch(async (e) => {
      await localforage.setItem(failKey, Date.now());
      throw e;
    });
    const doc = new DOMParser().parseFromString(html, "text/html");
    const og =
      doc.querySelector('meta[property="og:image"]')?.getAttribute("content") ||
      doc.querySelector('meta[name="twitter:image"]')?.getAttribute("content") ||
      "";
    const absolute = og ? new URL(og, link).href : "";
    await localforage.setItem(cacheKey, absolute);
    return absolute || null;
  } catch {
    return null;
  }
};

const resolveYoutubeChannelId = async (youtubeUrl) => {
  const directMatch = youtubeUrl.match(/(UC[a-zA-Z0-9_-]{22})/);
  if (directMatch) return directMatch[1];

  try {
    const res = await fetch(
      `/api/news-feed?resolve=youtube&url=${encodeURIComponent(youtubeUrl)}`,
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.channelId) return data.channelId;
    }
  } catch {
    // переходимо до запасного шляху
  }

  try {
    const html = await fetchWithProxyFallback(youtubeUrl);
    const match = html.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i) || 
                  html.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i) ||
                  html.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i) ||
                  html.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);
    return match ? match[1] : null;
  } catch (e) {
    console.error("Error resolving YouTube channel ID:", e);
    return null;
  }
};

const cleanTelegramText = (html) => {
  if (!html) return "";
  let text = html.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<[^>]*>?/gm, "");
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value.trim();
};

const fetchTelegramFeed = async (source) => {
  let channelName;
  const url = source.url;
  
  if (url.startsWith("@")) {
    channelName = url.substring(1);
  } else {
    const parts = url.split("/");
    channelName = parts[parts.length - 1] || parts[parts.length - 2];
  }
  
  if (channelName.startsWith("+") || url.includes("joinchat")) {
    try {
      const html = await fetchWithProxyFallback(url);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const title = doc.querySelector(".tgme_page_title")?.textContent?.trim() || i18n.t("newsWeather.News.pryvatnyiTelegram");
      const desc = doc.querySelector(".tgme_page_description")?.textContent?.trim() || i18n.t("newsWeather.News.pryvatnyiKanalAboHrupa");
      const avatarEl = doc.querySelector(".tgme_page_photo_image");
      const avatar = avatarEl ? avatarEl.getAttribute("src") : "";
      
      return {
        status: "ok",
        items: [{
          title: title,
          description: i18n.t("newsWeather.News.nadislatyKontentPryiednatysia", { desc: desc, url: url }),
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: avatar || "",
          displayImage: avatar || rainbow,
          sourceName: source.name,
          sourceFlag: "lock",
          sourceHome: url,
          sourceUrl: url,
        }]
      };
    } catch (e) {
      return {
        status: "ok",
        items: [{
          title: i18n.t("newsWeather.News.pryvatnyiTelegramKanal"),
          description: i18n.t("newsWeather.News.tsePryvatnyiTelegramKanal", { url: url }),
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: "",
          displayImage: rainbow,
          sourceName: source.name,
          sourceFlag: "lock",
          sourceHome: url,
          sourceUrl: url,
        }]
      };
    }
  }

  try {
    const fetchUrl = `https://t.me/s/${channelName}`;
    const html = await fetchWithProxyFallback(fetchUrl);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    const channelTitle = doc.querySelector(".tgme_channel_info_header_title span")?.textContent || channelName;
    const avatarEl = doc.querySelector(".tgme_page_photo_image img") || doc.querySelector(".tgme_page_photo_image");
    const channelImage = avatarEl ? (avatarEl.getAttribute("src") || "") : "";
    const home = `https://t.me/${channelName}`;
    
    const messages = doc.querySelectorAll(".tgme_widget_message");
    const items = [];
    messages.forEach(msg => {
      const textEl = msg.querySelector(".tgme_widget_message_text");
      const text = textEl ? textEl.innerHTML : "";
      
      const title = textEl ? cleanTelegramText(text).substring(0, 100) : i18n.t("newsWeather.News.povidomlennia");
      const linkEl = msg.querySelector(".tgme_widget_message_date");
      const link = linkEl ? linkEl.getAttribute("href") : home;
      
      const timeEl = msg.querySelector("time");
      const date = timeEl ? timeEl.getAttribute("datetime") : new Date().toISOString();
      
      const photoEl = msg.querySelector(".tgme_widget_message_photo_wrap");
      let image = "";
      if (photoEl) {
        const style = photoEl.getAttribute("style");
        const match = style && style.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (match) image = match[1];
      }
      
      items.push({
        title: title || i18n.t("newsWeather.News.novyiDopys"),
        description: text ? cleanTelegramText(text) : i18n.t("newsWeather.News.perehlianteDopysUTelegram"),
        link: link,
        pubDate: date,
        thumbnail: image || channelImage || "",
        displayImage: image || channelImage || rainbow,
        sourceName: channelTitle,
        sourceFlag: "telegram",
        sourceHome: home,
        sourceUrl: url,
      });
    });
    
    return {
      status: "ok",
      items: items.reverse()
    };
  } catch (e) {
    console.error("Telegram scraping failed:", e);
    return null;
  }
};

const fetchTelegraphFeed = async (source) => {
  try {
    const html = await fetchWithProxyFallback(source.url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    const title = doc.querySelector("header h1")?.textContent?.trim() || doc.querySelector("title")?.textContent || i18n.t("newsWeather.News.telegraphStattia");
    const author = doc.querySelector("header address a")?.textContent || "Telegraph";
    
    const imgEl = doc.querySelector("article img");
    const image = imgEl ? imgEl.getAttribute("src") : "";
    const absoluteImage = image ? (image.startsWith("http") ? image : `https://telegra.ph${image}`) : "";
    
    const paragraphs = Array.from(doc.querySelectorAll("article p")).map(p => p.textContent).join("\n\n");
    const cleanDesc = paragraphs || i18n.t("newsWeather.News.chytatyPovnuStattiuNa");
    
    return {
      status: "ok",
      items: [{
        title: title,
        description: cleanDesc.substring(0, 300) + (cleanDesc.length > 300 ? "..." : ""),
        link: source.url,
        pubDate: new Date().toISOString(),
        thumbnail: absoluteImage || "",
        displayImage: absoluteImage || rainbow,
        sourceName: author,
        sourceFlag: "blog",
        sourceHome: "https://telegra.ph",
        sourceUrl: source.url,
      }]
    };
  } catch (e) {
    console.error("Telegraph load failed:", e);
    return null;
  }
};

const getHiveDetails = (url) => {
  const match = url.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);
  if (match) {
    return {
      gameCode: match[1],
      lang: match[2] || "en",
      boardIdx: match[3]
    };
  }
  return null;
};

const fetchHiveFeed = async (source) => {
  const url = source.url;
  const postMatch = url.match(/board\/(\d+)\/(\d+)/);
  
  if (postMatch) {
    try {
      const html = await fetchWithProxyFallback(url);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      const title = doc.querySelector('meta[property="og:title"]')?.getAttribute("content") || 
                    doc.querySelector(".title_wrap .title")?.textContent?.trim() || i18n.t("newsWeather.News.dopysUHive");
      const desc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content") || 
                   doc.querySelector(".post_cont")?.textContent?.trim().substring(0, 300) || i18n.t("newsWeather.News.detaliDopysuUSpilnoti");
      const image = doc.querySelector('meta[property="og:image"]')?.getAttribute("content") || 
                    doc.querySelector(".post_cont img")?.getAttribute("src") || "";
      
      return {
        status: "ok",
        items: [{
          title: title,
          description: desc.length >= 300 ? desc.substring(0, 300) + "..." : desc,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: image || "",
          displayImage: image || rainbow,
          sourceName: source.name,
          sourceFlag: "hive",
          sourceHome: url.split("/board/")[0],
          sourceUrl: url,
        }]
      };
    } catch (e) {
      console.error("Failed to parse single Hive post:", e);
    }
  }

  const details = getHiveDetails(url);
  if (!details) return null;
  const { gameCode, lang, boardIdx } = details;
  
  try {
    const listApiUrl = `https://corsproxy.io/?https://community.withhive.com/${gameCode}/board/list/getBoardList`;
    const response = await fetch(listApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: new URLSearchParams({
        page: 1,
        board_idx: boardIdx,
        board_type: 1,
        board_comment: 1,
        boardtype1_preview_image: "1",
        is_mobile: 1,
        select_type: 1,
        view_type: "list"
      })
    });
    
    const data = await response.json();
    if (!data.list) throw new Error("No dynamic list found");
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.list, "text/html");
    const listItems = doc.querySelectorAll("li");
    const items = [];
    
    listItems.forEach(li => {
      const linkEl = li.querySelector("a");
      if (!linkEl) return;
      
      const link = linkEl.getAttribute("href") || "";
      const absoluteLink = link.startsWith("http") ? link : `https://community.withhive.com${link}`;
      
      const titleEl = li.querySelector(".title, .subject, p, h3, h4");
      const title = titleEl ? titleEl.textContent.trim() : "Hive Post";
      
      const imgEl = li.querySelector("img");
      let image = "";
      if (imgEl) {
        image = imgEl.getAttribute("src") || imgEl.getAttribute("data-src") || "";
      } else {
        const thumbEl = li.querySelector(".thumb");
        if (thumbEl) {
          const style = thumbEl.getAttribute("style");
          const match = style && style.match(/url\(['"]?([^'"]+)['"]?\)/);
          if (match) image = match[1];
        }
      }
      
      const dateEl = li.querySelector(".t_date, .date, .time");
      const date = dateEl ? dateEl.textContent.trim() : new Date().toISOString();
      const descEl = li.querySelector(".desc, .text, .wordcut");
      const description = descEl ? descEl.textContent.trim() : "";
      
      items.push({
        title: title,
        description: description || i18n.t("newsWeather.News.perehlianteDopysUSpilnoti"),
        link: absoluteLink,
        pubDate: date,
        thumbnail: image || "",
        displayImage: image || rainbow,
        sourceName: source.name,
        sourceFlag: "hive",
        sourceHome: `https://community.withhive.com/${gameCode}`,
        sourceUrl: url,
      });
    });
    
    return {
      status: "ok",
      items: items
    };
  } catch (e) {
    console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");
    try {
      const html = await fetchWithProxyFallback(url);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      const title = doc.querySelector('meta[property="og:title"]')?.getAttribute("content") || 
                    doc.querySelector(".board_cmm .title")?.textContent?.trim() || `Hive Board ${boardIdx}`;
      const desc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content") || 
                   i18n.t("newsWeather.News.perehlianteDopysyUSpilnoti");
      const image = doc.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
      
      return {
        status: "ok",
        items: [{
          title: title,
          description: desc,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: image || "",
          displayImage: image || rainbow,
          sourceName: source.name,
          sourceFlag: "hive",
          sourceHome: `https://community.withhive.com/${gameCode}`,
          sourceUrl: url,
        }]
      };
    } catch (err) {
      return null;
    }
  }
};

const fetchCustomSource = async (source) => {
  const type = getSourceType(source.url);
  if (type === "telegram") {
    return await fetchTelegramFeed(source);
  } else if (type === "telegraph") {
    return await fetchTelegraphFeed(source);
  } else if (type === "hive") {
    return await fetchHiveFeed(source);
  }
  return null;
};

const News = ({ isDarkMode, isStickyBgMode, user }) => {
  const { registerRef } = useTutorial?.() || { registerRef: () => {} };
  const $isDarkMode = isDarkMode;
  const [items, setItems] = useState([]);
  const [filteredNewsCount, setFilteredNewsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [filterSources, setFilterSources] = useState(["all"]);
  const handleToggleFilter = (sourceName) => {
    if (sourceName === "all") {
      setFilterSources(["all"]);
      return;
    }
    
    let newFilters = [...filterSources].filter(f => f !== "all");
    if (newFilters.includes(sourceName)) {
      newFilters = newFilters.filter(f => f !== sourceName);
    } else {
      newFilters.push(sourceName);
    }
    
    if (newFilters.length === 0) {
      newFilters = ["all"];
    }
    setFilterSources(newFilters);
  };
  const [lastUpdated, setLastUpdated] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const translateText = async (text) => {
    if (!text || text.length < 3) return text;
    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(text)}`,
      );
      if (!res.ok || !isMounted.current) return null;
      const data = await res.json();
      return data[0].map((s) => s[0]).join("");
    } catch {
      // null = переклад не вдався, щоб не кешувати оригінал як переклад
      return null;
    }
  };
  // Переклад і підготовка новин до показу. Готові переклади беремо з кешу (news_trans_*),
  // решту перекладаємо пакетами. Повертає масив у тому ж порядку, що й list.
  const translateNewsItems = async (list, { bNews = [], onTranslateStart = null } = {}) => {
    const results = new Array(list.length);
    const toTranslateIndices = [];
    const stringsToTranslate = [];

    // 1. Перевіряємо кеш та збираємо тексти для пакетного перекладу
    const seenLinks = (await localforage.getItem("seen_news_links")) || [];

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const cached = await localforage.getItem(`news_trans_${item.link}`);
      const isNew = !seenLinks.includes(item.link);

      if (cached) {
        results[i] = {
          ...cached,
          // Якщо старий кеш містить лише запасне фото — беремо свіже зображення зі статті
          displayImage:
            cached.displayImage && cached.displayImage !== rainbow
              ? cached.displayImage
              : item.displayImage || rainbow,
          sourceName: item.sourceName,
          sourceFlag: item.sourceFlag,
          sourceHome: item.sourceHome,
          sourceUrl: item.sourceUrl,
          pubDate: item.pubDate,
          isNew,
          isBlocked: bNews.includes(encodeURIComponent(item.link)),
          autoBlockReason: item.autoBlockReason,
          // Терміновість не кешуємо — вона залежить від поточного списку слів
          isUrgent: item.isUrgent,
        };
      } else {
        const cleanDesc = cleanNewsDescription(
          (item.description || "").replace(/<[^>]*>?/gm, ""),
        ).substring(0, NEWS_DESC_TRANSLATE_MAX);

        toTranslateIndices.push(i);
        stringsToTranslate.push(item.title);
        stringsToTranslate.push(cleanDesc);
      }
    }

    if (stringsToTranslate.length === 0) return results;

    // 2. Пакетний переклад з безпечним роздільником ___ та перевіркою довжини
    if (onTranslateStart) onTranslateStart();

    let currentBatchStrings = [];
    let currentBatchIndices = [];
    let currentLen = 0;
    const batches = [];

    for (let i = 0; i < toTranslateIndices.length; i++) {
      const title = stringsToTranslate[i * 2];
      const desc = stringsToTranslate[i * 2 + 1];
      const pairLen = title.length + desc.length + 10; // Довжина тексту + роздільники

      if (currentLen + pairLen > 4500 && currentBatchStrings.length > 0) {
        batches.push({ strings: currentBatchStrings, indices: currentBatchIndices });
        currentBatchStrings = [];
        currentBatchIndices = [];
        currentLen = 0;
      }
      currentBatchStrings.push(title, desc);
      currentBatchIndices.push(toTranslateIndices[i]);
      currentLen += pairLen;
    }
    if (currentBatchStrings.length > 0) {
      batches.push({ strings: currentBatchStrings, indices: currentBatchIndices });
    }
    // Переклад однієї пари «заголовок + опис»; null, якщо не вдався або роздільник зіпсовано
    const translatePair = async (title, desc) => {
      const combined = await translateText(`${title} ___ ${desc}`);
      if (combined === null) return null;
      const parts = combined.split(/\s*___\s*/);
      return parts.length === 2 ? parts : null;
    };

    for (const batch of batches) {
      const translatedCombined = await translateText(batch.strings.join(" ___ "));
      const splitResults =
        translatedCombined === null ? null : translatedCombined.split(/\s*___\s*/);
      // Якщо пакетний переклад зіпсував роздільники — перекладаємо кожну новину окремо
      const batchValid = splitResults && splitResults.length === batch.strings.length;

      for (let j = 0; j < batch.indices.length; j++) {
        const idx = batch.indices[j];
        const item = list[idx];
        const originalTitle = batch.strings[j * 2];
        const originalDesc = batch.strings[j * 2 + 1];
        const bestImg = extractImageFromContent(item) || rainbow;

        const pair = batchValid
          ? [splitResults[j * 2], splitResults[j * 2 + 1]]
          : await translatePair(originalTitle, originalDesc);

        const translatedItem = {
          title: pair?.[0]?.trim() || item.title,
          description: (pair ? pair[1]?.trim() || "" : originalDesc) + "...",
          link: item.link,
          displayImage: bestImg,
          sourceName: item.sourceName,
          sourceFlag: item.sourceFlag,
          sourceHome: item.sourceHome,
          sourceUrl: item.sourceUrl,
          pubDate: item.pubDate,
          isNew: !seenLinks.includes(item.link),
          isBlocked: bNews.includes(encodeURIComponent(item.link)),
        };

        // Кешуємо лише успішний переклад, щоб оригінал не застряг як «переклад»
        if (pair) {
          await localforage.setItem(`news_trans_${item.link}`, translatedItem);
        }
        // Причину автоблоку не кешуємо — вона залежить від поточних налаштувань фільтра
        results[idx] = {
          ...translatedItem,
          autoBlockReason: item.autoBlockReason,
          isUrgent: item.isUrgent,
        };
      }
    }
    return results;
  };

  // «Всі новини»: сирі новини, що чекають перекладу (pending), і вже готові (items).
  // Перекладаємо їх лише тоді, коли модалку відкрили.
  const [moreNews, setMoreNews] = useState({
    pending: [],
    bNews: [],
    items: [],
    loaded: false,
  });
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const [customSources, setCustomSources] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const [isAddingSource, setIsAddingSource] = useState(false);
  //blockedNewsUrls
  const [, setBlockedNewsUrls] = useState([]);
  const [blockedSources, setBlockedSources] = useState([]);
  const [showBlacklist, setShowBlacklist] = useState(false);
  const [mutedNewsUrls, setMutedNewsUrls] = useState([]);
  // Автозаблоковані фільтром новини, які користувач розглушив (до перезавантаження сторінки)
  const [revealedAutoBlocked, setRevealedAutoBlocked] = useState([]);
  const handleRevealAutoBlocked = (item) =>
    setRevealedAutoBlocked((prev) => (prev.includes(item.link) ? prev : [...prev, item.link]));
  const mutedNewsRef = useRef([]);
  mutedNewsRef.current = mutedNewsUrls;
  const syncMutedEnabled = Boolean(user?.syncMutedNews && user?.uid);
  const [muteSyncUsed, setMuteSyncUsed] = useState(0);
  const muteSyncUsedRef = useRef(0);
  muteSyncUsedRef.current = muteSyncUsed;
  const muteSyncDayRef = useRef(null); // доба (UTC), до якої належить лічильник
  const muteSyncInfo = syncMutedEnabled
    ? { used: muteSyncUsed, limit: MUTE_SYNC_DAILY_LIMIT }
    : null;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // 1. Стан розмонтування для Memory Leak Protection
  const isMounted = useRef(true);
  const newsSectionRef = useRef(null);
  const abortRef = useRef(null);
  const [showMoreNews, setShowMoreNews] = useState(false);
  const reduceMotion = useReducedMotion();

  // «Всі новини»: без скролбару сайту (лишається лише скролбар шторки) і закриття по Esc.
  // Скролиться html, а в дзеркальному режимі — body, тож ховаємо на обох і повертаємо як було
  useEffect(() => {
    if (!showMoreNews) return undefined;
    const { documentElement: html, body } = document;
    const prev = [html.style.overflow, body.style.overflow];
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    const onKeyDown = (e) => e.key === "Escape" && setShowMoreNews(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      html.style.overflow = prev[0];
      body.style.overflow = prev[1];
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showMoreNews]);
  // Телефон (як у каруселі, до 479px) — у «Всіх новинах» компактні рядки замість карток
  const [isPhone, setIsPhone] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 479px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 479px)");
    const onChange = (e) => setIsPhone(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  // Вигляд новин (Налаштування → Секції та новини): блоки в каруселі або список рядків
  const isListView = usePrefValue(NEWS_VIEW_KEY, "cards") === "list";
  const [isSearchActive, setIsSearchActive] = useState(false);
  // Плавне розгортання/згортання панелей «Мої стрічки» ↔ «Рекомендовані»
  const animationsDisabled = useAnimationsDisabled();
  const feedsCollapseMotion = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: animationsDisabled
      ? { duration: 0 }
      : { height: { duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }, opacity: { duration: 0.22 } },
    style: { overflow: "hidden" },
  };

  useEffect(() => {
    isMounted.current = true;
    const loadCustomSources = async () => {
      try {
        const saved = await localforage.getItem("custom_news_sources");
        if (saved) setCustomSources(saved);
      } catch (err) {}
    };
    loadCustomSources();
    return () => {
      isMounted.current = false;
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    const loadFilteredNewsCount = async () => {
      try {
        const stats = await localforage.getItem("filtered_news_stats");
        if (
          stats?.date === getLocalDateKey() &&
          Array.isArray(stats.links) &&
          isMounted.current
        ) {
          setFilteredNewsCount(stats.links.length);
        }
      } catch (err) {}
    };

    loadFilteredNewsCount();
  }, []);

  // Заглушені новини: повний список завжди лежить на пристрої (muted_news_urls).
  // Якщо синхронізацію увімкнено — беремо хмарний список з config/{uid} і
  // накладаємо на нього локальні дії, що не вмістились у добовий ліміт.
  useEffect(() => {
    let cancelled = false;
    const initMutedNews = async () => {
      let localMuted = [];
      try {
        localMuted = (await localforage.getItem("muted_news_urls")) || [];
      } catch (err) {}
      if (!cancelled) setMutedNewsUrls(localMuted);

      if (!syncMutedEnabled) return;
      try {
        const [pending, localCounter] = await Promise.all([
          localforage.getItem(MUTE_PENDING_KEY),
          localforage.getItem(MUTE_COUNTER_KEY),
        ]);
        const { db, doc, getDoc } = await loadFirebase();
        const snap = await getDoc(doc(db, "config", user.uid));
        const cloud = snap.exists() ? snap.data() : {};
        const cloudCount = countForToday(
          { date: toDayKey(cloud.muteSyncAt), count: cloud.muteSyncCount },
          user.uid,
        );
        const used = Math.max(cloudCount, countForToday(localCounter, user.uid));
        if (cancelled) return;
        muteSyncDayRef.current = getTodayKey();
        setMuteSyncUsed(used);
        if (Array.isArray(cloud.mutedNews)) {
          const merged = applyPending(cloud.mutedNews, pending);
          setMutedNewsUrls(merged);
          localforage.setItem("muted_news_urls", merged).catch(() => {});
        }
        // Налаштування фільтра новин — у тому ж документі й під тим самим лімітом
        await mergeNewsFilterFromCloud(user.uid, cloud);
      } catch (err) {
        console.warn("Не вдалося завантажити заглушені новини з хмари", err);
      }
    };
    initMutedNews();
    return () => {
      cancelled = true;
    };
  }, [syncMutedEnabled, user?.uid]);

  useEffect(() => {
    if (user?.newsAutoScroll !== true) return;

    const timer = window.setTimeout(() => {
      newsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);

    return () => window.clearTimeout(timer);
  }, [user?.newsAutoScroll]);
  const getData = useCallback(async (showLoader = false, forceFresh = false) => {
    // Скасовуємо попереднє завантаження, щоб старі запити не конкурували з новим
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const signal = controller.signal;
    if (isMounted.current) {
      setHasError(false);
      setLoadError("");
    }
    if (showLoader && isMounted.current) {
      setLoading(true);
      setLoadProgress(5);
    }
    try {
      let allItems = [];
      const savedCustom =
        (await localforage.getItem("custom_news_sources")) || [];
      // Старі збережені стрічки Facebook мовчки пропускаємо
      const allSources = [
        ...SOURCES,
        // Власна стрічка, яка тепер є серед вбудованих, — не вантажимо двічі
        ...savedCustom.filter(
          (source) =>
            !FACEBOOK_QUERY.test(source.url || "") &&
            !SOURCES.some((builtIn) => builtIn.url === source.url),
        ),
      ];

      // Отримуємо списки заблокованих
      let bNews = [];
      let bSourcesList = [];
      try {
        // Кеш чорних списків на 15 хв, щоб не читати цілі колекції Firestore при кожному оновленні
        const BLOCKLIST_TTL = 15 * 60 * 1000;
        const cachedBlocklist = forceFresh
          ? null
          : await localforage.getItem("news_blocklist_cache");
        if (cachedBlocklist && Date.now() - cachedBlocklist.savedAt < BLOCKLIST_TTL) {
          bNews = cachedBlocklist.bNews;
          bSourcesList = cachedBlocklist.blockedSources.map((s) => s.url);
          if (isMounted.current) {
            setBlockedNewsUrls(bNews);
            setBlockedSources(cachedBlocklist.blockedSources);
          }
        } else {
        // REST без SDK, у формі як у getDocs (forEach + data()), щоб Firebase не вантажився всім
        const [newsSnapshot, rssSnapshot] = (
          await Promise.all([
            listCollection("news_reports"),
            listCollection("rss_reports"),
          ])
        ).map((docs) => docs.map((d) => ({ id: d.id, data: () => d.data })));
        const now = Date.now();

        // Рахуємо різні акаунти за останню добу (новий і старий формат скарг)
        newsSnapshot.forEach((docSnap) => {
          if (countRecentReports(docSnap.data(), now) >= 10) bNews.push(docSnap.id);
        });

        const blockedSourcesArr = [];
        rssSnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (countRecentReports(data, now) >= 20) {
            if (UNBLOCKABLE_SOURCE_URLS.has(decodeURIComponent(docSnap.id)))
              return;
            blockedSourcesArr.push({
              id: docSnap.id,
              url: decodeURIComponent(docSnap.id),
              name: data.name || i18n.t("newsWeather.News.dzherelo"),
            });
            bSourcesList.push(decodeURIComponent(docSnap.id));
          }
        });

        if (isMounted.current) {
          setBlockedNewsUrls(bNews);
          setBlockedSources(blockedSourcesArr);
        }
        await localforage.setItem("news_blocklist_cache", {
          savedAt: Date.now(),
          bNews,
          blockedSources: blockedSourcesArr,
        });
        }
      } catch (e) {}

      const tryJsonFeed = async (endpoint) => {
        try {
          const res = await fetch(endpoint, { signal });
          const contentType = res.headers.get("content-type") || "";
          if (res.ok && contentType.includes("json")) {
            const data = await res.json();
            if (data && Array.isArray(data.items)) return parseJsonFeed(data);
          }
        } catch (err) {
          if (err.name === "AbortError") throw err;
        }
        return null;
      };

      const withSourceInfo = (feedItems, source) =>
        feedItems.map((item) => {
          const ytThumb = getYoutubeThumbnail(item.link);
          const extractedImg = extractImageFromContent(item);
          return {
            ...item,
            thumbnail: ytThumb || extractedImg || item.thumbnail || "",
            displayImage: ytThumb || extractedImg || item.thumbnail || rainbow,
            sourceName: source.name,
            sourceFlag: source.flag,
            sourceHome: source.home,
            sourceUrl: source.url,
          };
        });

      // План Б — наша Cloudflare-функція. Під час локальної розробки її немає,
      // тому тоді звертаємося до робочого сайту.
      const tryCloudflare = async (endpoint) =>
        (await tryJsonFeed(endpoint)) ||
        (import.meta.env.DEV ? await tryJsonFeed(`https://stuxia.com${endpoint}`) : null);

      // Завантажуємо одну стрічку з мережі: повертає масив новин або кидає помилку
      const loadSource = async (source) => {
        const type = getSourceType(source.url);
        if (type !== "rss" && type !== "youtube") {
          // План А — публічні проксі в браузері, Cloudflare лише якщо вони не впоралися
          let customData = null;
          try {
            customData = await fetchCustomSource(source);
          } catch (err) {
            if (err.name === "AbortError") throw err;
          }
          if (customData?.items?.length > 0) return customData.items;
          if (type === "telegram") {
            const viaApi = await tryCloudflare(
              `/api/news-feed?url=${encodeURIComponent(source.url)}`,
            );
            if (viaApi && viaApi.length > 0) return withSourceInfo(viaApi, source);
          }
          return [];
        }

        let feedItems = await fetchViaRss2Json(source.url, signal);

        if (!feedItems) {
          const builtInSource = SOURCES.find((item) => item.url === source.url);
          const byUrl = `/api/news-feed?url=${encodeURIComponent(source.url)}`;
          feedItems = await tryCloudflare(
            builtInSource
              ? `/api/news-feed?source=${encodeURIComponent(builtInSource.id)}`
              : byUrl,
          );
          // Задеплоєна функція може ще не знати нового вбудованого джерела
          // («Unknown RSS source») — тоді просимо ту саму стрічку за адресою
          if (!feedItems && builtInSource) feedItems = await tryCloudflare(byUrl);
        }

        if (!feedItems) {
          throw new Error(i18n.t("newsWeather.News.niRss2jsonNiCloudflare"));
        }

        return withSourceInfo(feedItems, source);
      };

      // Обгортка з кешем: свіжий кеш — без мережі; збій мережі — остання збережена версія
      const loadSourceCached = async (source) => {
        const cacheKey = `${FEED_CACHE_PREFIX}${source.url}`;
        let cached = null;
        try {
          cached = await localforage.getItem(cacheKey);
        } catch (e) {}
        const hasCached = Array.isArray(cached?.items) && cached.items.length > 0;
        if (hasCached && Date.now() - cached.savedAt < FEED_CACHE_TTL_MS) {
          return cached.items;
        }
        try {
          const fresh = await loadSource(source);
          if (fresh.length > 0) {
            localforage
              .setItem(cacheKey, { savedAt: Date.now(), items: fresh })
              .catch(() => {});
            return fresh;
          }
          return hasCached ? cached.items : fresh;
        } catch (err) {
          if (err.name === "AbortError") throw err;
          if (hasCached) return cached.items;
          throw err;
        }
      };

      // Усі стрічки паралельно: збій однієї не зачіпає інші
      const activeSources = allSources.filter(
        (source) => !bSourcesList.includes(source.url),
      );
      // Вбудовані стрічки — одним готовим набором із сервера (уже перекладені);
      // окремо вантажимо лише власні стрічки та вбудовані, яких у наборі немає
      const bundleBySource = await loadNewsBundle({ forceFresh, signal });
      const fromBundle = activeSources.filter(
        (source) => SOURCES.includes(source) && bundleBySource?.get(source.name)?.length > 0,
      );
      fromBundle.forEach((source) => {
        allItems = [...allItems, ...bundleBySource.get(source.name)];
      });
      const separateSources = activeSources.filter((source) => !fromBundle.includes(source));
      const settled = await Promise.allSettled(separateSources.map(loadSourceCached));
      settled.forEach((result, i) => {
        if (result.status === "fulfilled") {
          allItems = [...allItems, ...result.value];
          return;
        }
        if (result.reason?.name === "AbortError") return;
        // Технічний текст (напр. "Failed to fetch") лишаємо лише в консолі
        console.warn(
          `Не вдалося завантажити новини з ${separateSources[i].name}:`,
          result.reason,
        );
      });
      if (signal.aborted) return;
      // Жодна стрічка не відповіла — показуємо останній збережений набір, навіть старий
      if (allItems.length === 0 && staleNewsBundle) {
        const staleBySource = await bundleToMap(staleNewsBundle);
        activeSources.forEach((source) => {
          allItems = [...allItems, ...(staleBySource.get(source.name) || [])];
        });
      }
      if (allItems.length === 0) {
        if (isMounted.current) {
          // Перелік недоступних джерел — лише в консолі (console.warn вище)
          setLoadError(i18n.t("newsWeather.News.novynyTymchasovoNedostupni"));
          setHasError(true);
          setLoadProgress(100);
          setLoading(false);
        }
        return;
      }
      if (showLoader && isMounted.current) setLoadProgress(25);

      // Та сама стаття з двох стрічок (напр. BBC World і BBC Science & Environment) —
      // лишаємо одну. Вбудовані стрічки в allItems ідуть першими, тож перевага за ними.
      const normalizeLink = (link) =>
        String(link || "")
          .trim()
          .replace(/^http:\/\//i, "https://")
          .replace(/[?#].*$/, "")
          .replace(/\/+$/, "")
          .toLowerCase();
      const seenArticleLinks = new Set();
      allItems = allItems.filter((item) => {
        const key = normalizeLink(item.link);
        if (!key) return true;
        if (seenArticleLinks.has(key)) return false;
        seenArticleLinks.add(key);
        return true;
      });

      allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

      // Фільтр новин з урахуванням категорій і власних слів користувача.
      // У «м'якому» режимі заблоковані новини лишаються у стрічці під плашкою.
      const filterPrefs = getNewsFilterPrefs();
      // Швидкий режим (заголовок + початок опису) чи ретельний (весь опис) — Налаштування → фільтр новин
      const thoroughFilter = isNewsFilterThorough();
      const clean = [];
      const filteredNews = [];
      // Перевірка всіх новин одним шматком блокувала сторінку на ~0,7 с (TBT).
      // Тепер — порціями: щойно порція триває довше за FILTER_SLICE_MS, віддаємо потік браузеру
      let sliceStart = performance.now();
      for (const i of allItems) {
        if (performance.now() - sliceStart > FILTER_SLICE_MS) {
          await yieldToMain();
          if (signal.aborted) return;
          sliceStart = performance.now();
        }
        const reason = getNewsBlockReason(getNewsFilterText(i, thoroughFilter), filterPrefs);
        if (!reason) {
          clean.push(i);
          continue;
        }
        filteredNews.push(i);
        if (filterPrefs.softMode) clean.push({ ...i, autoBlockReason: reason.label });
      }

      const filteredNewsLinks = filteredNews.map(
        (item) => item.link || `${item.sourceUrl}:${item.title}`,
      );
      const today = getLocalDateKey();
      const savedStats = await localforage.getItem("filtered_news_stats");
      const existingLinks =
        savedStats?.date === today && Array.isArray(savedStats.links)
          ? savedStats.links
          : [];
      const uniqueLinks = [...new Set([...existingLinks, ...filteredNewsLinks])];
      await localforage.setItem("filtered_news_stats", {
        date: today,
        links: uniqueLinks,
      });
      if (isMounted.current) setFilteredNewsCount(uniqueLinks.length);

      // Одразу обробляємо (перекладаємо) лише найсвіжішу новину кожного джерела — для каруселі.
      // Ще NEWS_PER_SOURCE - 1 з кожного джерела чекають, доки відкриють «Всі новини».
      // clean уже відсортований за датою, тож перші за джерелом — найсвіжіші.
      //
      // У карусель із цих NEWS_PER_SOURCE іде: термінова → найцікавіша користувачу → найсвіжіша.
      const urgentWords = getUrgentWords();
      const recsCtx = getRecsContext();
      const topBySource = new Map();
      clean.forEach((i) => {
        const list = topBySource.get(i.sourceName) || [];
        if (list.length >= NEWS_PER_SOURCE) return;
        list.push({ ...i, isUrgent: isUrgentNews(i, urgentWords), recScore: scoreNews(i, recsCtx) });
        topBySource.set(i.sourceName, list);
      });
      const primary = [];
      const secondary = [];
      topBySource.forEach((list) => {
        let pick = list.findIndex((i) => i.isUrgent);
        if (pick === -1 && recsCtx.enabled) {
          const best = Math.max(...list.map((i) => i.recScore));
          if (best > 0) pick = list.findIndex((i) => i.recScore === best);
        }
        if (pick === -1) pick = 0;
        primary.push(list[pick]);
        secondary.push(...list.filter((_, idx) => idx !== pick));
      });
      // Порядок каруселі: спершу термінові, далі — за інтересами, далі — за датою
      primary.sort(
        (a, b) =>
          Number(b.isUrgent) - Number(a.isUrgent) ||
          b.recScore - a.recScore ||
          new Date(b.pubDate) - new Date(a.pubDate),
      );
      const results = await translateNewsItems(primary, {
        bNews,
        onTranslateStart:
          showLoader && isMounted.current ? () => setLoadProgress(40) : null,
      });

      if (showLoader && isMounted.current) setLoadProgress(100);
      const allKeys = await localforage.keys();
      const newsCacheKeys = allKeys.filter((k) => k.startsWith("news_trans_"));
      const ogCacheKeys = allKeys.filter((k) => k.startsWith("og_img_"));
      // Переклади й обкладинки «Всіх новин» теж лишаємо — вони знадобляться при відкритті модалки
      const keptItems = [...primary, ...secondary];
      const currentActiveNewsKeys = keptItems.map((i) => `news_trans_${i.link}`);
      const currentActiveOgKeys = keptItems.map((i) => `og_img_${i.link}`);

      for (const key of newsCacheKeys) {
        if (!currentActiveNewsKeys.includes(key)) {
          await localforage.removeItem(key);
        }
      }
      for (const key of ogCacheKeys) {
        if (!currentActiveOgKeys.includes(key)) {
          await localforage.removeItem(key);
        }
      }
      // Кеш стрічок, які користувач уже прибрав зі своїх джерел
      const activeFeedKeys = new Set(
        allSources.map((source) => `${FEED_CACHE_PREFIX}${source.url}`),
      );
      for (const key of allKeys) {
        if (key.startsWith(FEED_CACHE_PREFIX) && !activeFeedKeys.has(key)) {
          await localforage.removeItem(key);
        }
      }

      if (isMounted.current) {
        setItems(results);
        // Ті самі новини, що вже підвантажені у «Всі новини», — не скидаємо їх (без мигання)
        const pendingKey = secondary.map((i) => i.link).join("\n");
        setMoreNews((cur) =>
          cur.loaded && cur.pending.map((i) => i.link).join("\n") === pendingKey
            ? { ...cur, pending: secondary, bNews }
            : { pending: secondary, bNews, items: [], loaded: false },
        );
        setLastUpdated(new Date());
      }
      // З push вбудовані джерела стереже сервер (з тими самими словами) — тут лише власні стрічки
      notifyUrgentNews(
        isPushSubscribed()
          ? results.filter((i) => !BUILTIN_SOURCE_NAMES.has(i.sourceName))
          : results,
      ).catch(() => {});
      localforage
        .setItem(NEWS_SNAPSHOT_KEY, {
          savedAt: Date.now(),
          items: results,
          pending: secondary,
          bNews,
        })
        .catch(() => {});
    } catch (e) {
      if (e.name === "AbortError" || e.message?.includes("aborted")) {
        console.log("Запит було скасовано");
        return;
      }
      console.error("Справжня помилка завантаження:", e);
      if (isMounted.current) {
        setLoadError(i18n.t("newsWeather.News.novynyTymchasovoNedostupni"));
        setHasError(true);
        setLoadProgress(100);
        if (showLoader) {
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 2500));
        }
      }
    } finally {
      // Якщо запит скасовано новішим, лоадер лишається за новим запитом
      if (isMounted.current && abortRef.current === controller) {
        setLoading(false);
      }
    }
  }, []);
  const filteredItems = items.filter((item) => {
    return filterSources.includes("all") || filterSources.includes(item.sourceName);
  });

  // Стрічка: лише остання новина від кожного джерела (items уже відсортовані за датою)
  const seenSourceNames = new Set();
  const latestPerSource = [];
  const restItems = [];
  filteredItems.forEach((item) => {
    if (seenSourceNames.has(item.sourceName)) {
      restItems.push(item);
    } else {
      seenSourceNames.add(item.sourceName);
      latestPerSource.push(item);
    }
  });
  const withMuted = (item) => ({
    ...item,
    isMuted: mutedNewsUrls.includes(item.link),
    isAutoBlocked: Boolean(item.autoBlockReason) && !revealedAutoBlocked.includes(item.link),
  });
  const displayedItems = latestPerSource.slice(0, CAROUSEL_MAX_ITEMS).map(withMuted);
  // Карусель «нескінченна»: кожна новина рендериться тричі (45 → 135 карток), і на ПК
  // це був найдовший шматок TBT у PageSpeed. Тож спершу малюємо лише перші новини (їх видно),
  // а решту — порціями у вільний час через startTransition: React рендерить їх частинами
  // між кадрами, без довгих задач. Позиція прокрутки при цьому зберігається (див. нижче).
  const [carouselLimit, setCarouselLimit] = useState(CAROUSEL_FIRST_RENDER);
  const hasDisplayedNews = displayedItems.length > 0;
  useEffect(() => {
    if (!hasDisplayedNews || carouselLimit >= CAROUSEL_MAX_ITEMS) return undefined;
    const grow = () =>
      startTransition(() => setCarouselLimit((n) => n + CAROUSEL_RENDER_STEP));
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(grow, { timeout: 600 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(grow, 60);
    return () => clearTimeout(id);
  }, [hasDisplayedNews, carouselLimit]);
  const carouselItems = displayedItems.slice(0, carouselLimit);
  // «Всі новини»: по 3 найсвіжіші з кожного джерела — та, що в каруселі,
  // плюс ще 2, які підвантажуються лише після відкриття модалки.
  // Порядок джерел — як у каруселі (найсвіжіші першими).
  const moreGroups = latestPerSource.map((latest) => ({
    sourceName: latest.sourceName,
    sourceFlag: latest.sourceFlag,
    items: [
      latest,
      ...restItems.filter((item) => item.sourceName === latest.sourceName),
      ...moreNews.items.filter((item) => item.sourceName === latest.sourceName),
    ]
      .slice(0, NEWS_PER_SOURCE)
      .map(withMuted),
  }));
  // Скільки новин у «Всі новини». Доки модалку не відкривали, решта ще в черзі (pending),
  // тож рахуємо і її — по NEWS_PER_SOURCE максимум на джерело.
  const moreNewsCount = moreGroups.reduce((sum, group) => {
    if (moreNews.loaded) return sum + group.items.length;
    const waiting = moreNews.pending.filter((i) => i.sourceName === group.sourceName).length;
    return sum + Math.min(NEWS_PER_SOURCE, group.items.length + waiting);
  }, 0);
  const isMoreNewsLoading =
    showMoreNews && !moreNews.loaded && moreNews.pending.length > 0;

  // Поява карток у «Всі новини» по черзі: затримка — за порядком серед тих,
  // яких ще не показували. Уже показані при підвантаженні решти не «стрибають» знову.
  const shownMoreNewsRef = useRef(new Set());
  const moreNewsAppearDelay = new Map();
  moreGroups.forEach((group) =>
    group.items.forEach((item) => {
      if (!shownMoreNewsRef.current.has(item.link) && !moreNewsAppearDelay.has(item.link)) {
        moreNewsAppearDelay.set(item.link, Math.min(moreNewsAppearDelay.size * 0.08, 1.6));
      }
    }),
  );
  useEffect(() => {
    if (!showMoreNews) {
      shownMoreNewsRef.current = new Set(); // наступне відкриття — знову з анімацією
      return;
    }
    moreGroups.forEach((group) =>
      group.items.forEach((item) => shownMoreNewsRef.current.add(item.link)),
    );
  });

  // Відкрили «Всі новини» — перекладаємо решту новин (з кешем, тож повторно це миттєво)
  useEffect(() => {
    if (!showMoreNews || moreNews.loaded) return;
    let cancelled = false;
    const target = moreNews;
    (async () => {
      let ready = [];
      try {
        ready = (await translateNewsItems(target.pending, { bNews: target.bNews })).filter(Boolean);
      } catch (err) {
        console.warn("Не вдалося підвантажити решту новин:", err);
      }
      if (cancelled || !isMounted.current) return;
      // Якщо за цей час стрічка оновилася — результат уже не актуальний
      setMoreNews((cur) => (cur === target ? { ...cur, items: ready, loaded: true } : cur));
    })();
    return () => {
      cancelled = true;
    };
  }, [showMoreNews, moreNews]);
  const infiniteItems =
    carouselItems.length > 0
      ? [...carouselItems, ...carouselItems, ...carouselItems]
      : [];
  // «Список»: ті самі новини парами — по дві в одному блоці каруселі
  const displayedPairs = [];
  for (let i = 0; i < carouselItems.length; i += 2) {
    displayedPairs.push(carouselItems.slice(i, i + 2));
  }
  const carouselSlides = isListView
    ? displayedPairs.length > 0
      ? [...displayedPairs, ...displayedPairs, ...displayedPairs]
      : []
    : infiniteItems;
  const renderNewsCard = (item, compact = false) => (
    <NewsCard
      item={item}
      $isDarkMode={$isDarkMode}
      showImage={showImage}
      showTitle={showTitle}
      showDescription={showDescription}
      onAiSummaryClick={(news) => {
        setSelectedNews(news);
        setIsAiModalOpen(true);
      }}
      onReportClick={handleReport}
      onMuteClick={handleMute}
      onUnmuteClick={handleUnmute}
      onRevealClick={handleRevealAutoBlocked}
      muteSyncInfo={muteSyncInfo}
      compact={compact}
    />
  );
  const carouselRef = useRef(null);
  const [centeredSlideIndex, setCenteredSlideIndex] = useState(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const updateCenteredSlide = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
    let closestIndex = null;
    let closestDistance = Infinity;

    [...container.querySelectorAll("[data-news-slide]")].forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCenteredSlideIndex(closestIndex);
  }, []);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const firstSlide = container.querySelector("[data-news-slide]");
    const slideWidth = firstSlide?.getBoundingClientRect().width || 280;
    const gap = Number.parseFloat(getComputedStyle(container).gap) || 5;
    const scrollAmount = slideWidth + gap;

    isProgrammaticScrollRef.current = true;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 600);
  };

  const handleScroll = () => {
    if (!carouselRef.current || displayedItems.length === 0) return;
    updateCenteredSlide();
    if (isProgrammaticScrollRef.current) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const container = carouselRef.current;
      if (!container) return;

      const oneSetWidth = container.scrollWidth / 3;
      const threshold = 12;

      const originalSnap = container.style.scrollSnapType;

      if (container.scrollLeft <= threshold) {
        isProgrammaticScrollRef.current = true;
        container.style.scrollSnapType = "none";
        container.scrollLeft += oneSetWidth;
        requestAnimationFrame(() => {
          container.style.scrollSnapType = originalSnap;
          isProgrammaticScrollRef.current = false;
        });
      } else if (container.scrollLeft >= oneSetWidth * 2 - threshold) {
        isProgrammaticScrollRef.current = true;
        container.style.scrollSnapType = "none";
        container.scrollLeft -= oneSetWidth;
        requestAnimationFrame(() => {
          container.style.scrollSnapType = originalSnap;
          isProgrammaticScrollRef.current = false;
        });
      }
    }, 150);
  };

  const carouselSetRef = useRef({ width: 0, limit: 0 });
  useEffect(() => {
    const container = carouselRef.current;
    if (!container || carouselItems.length === 0) return;
    const oneSetWidth = container.scrollWidth / 3;
    const prev = carouselSetRef.current;
    // Карусель лише домалювала наступну порцію (нові картки — в кінці кожної копії):
    // лишаємо користувача на тій самій новині, а не повертаємо на початок
    const offset = container.scrollLeft - prev.width;
    if (prev.width > 0 && prev.limit !== carouselLimit && offset >= 0 && offset < prev.width) {
      container.scrollLeft = oneSetWidth + offset;
    } else {
      container.scrollLeft = oneSetWidth;
    }
    carouselSetRef.current = { width: oneSetWidth, limit: carouselLimit };
    requestAnimationFrame(updateCenteredSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselItems.length, filterSources, updateCenteredSlide, isListView]);
  useEffect(() => {
    const init = async () => {
      try {
        const endTime = await localforage.getItem("news_refresh_cooldown_end");
        if (endTime) {
          const remaining = Math.ceil((endTime - Date.now()) / 1000);
          if (remaining > 0) setCooldown(remaining);
        }
      } catch (err) {}
      // Спершу миттєво показуємо збережені новини, свіжі підтягуємо у фоні
      let hasSnapshot = false;
      try {
        const snapshot = await localforage.getItem(NEWS_SNAPSHOT_KEY);
        if (snapshot?.items?.length > 0 && isMounted.current) {
          setItems(snapshot.items);
          setMoreNews({
            pending: snapshot.pending || [],
            bNews: snapshot.bNews || [],
            items: [],
            loaded: false,
          });
          setLastUpdated(new Date(snapshot.savedAt));
          setLoading(false);
          hasSnapshot = true;
        }
      } catch (err) {}
      // Лоадер лише тоді, коли показати поки нічого
      getData(!hasSnapshot);
    };

    init();
    // Перевірка щопівгодини лише з увімкненими сповіщеннями про термінові новини
    // (це й так строк кешу стрічок), інакше — раз на годину, як раніше
    let tick = 0;
    const interval = setInterval(() => {
      tick += 1;
      if (isUrgentNotifyEnabled() || tick % 2 === 0) getData(false);
    }, 30 * 60 * 1000);
    // Інтернет повернувся — оновлюємо стрічки, що встигли застаріти
    const onOnline = () => getData(false);
    window.addEventListener("online", onOnline);
    // Змінили теми, рекомендації чи слова термінових новин — перебудовуємо стрічку
    // (стрічки беруться з кешу, тож без зайвих запитів)
    const unsubscribePrefs = subscribePrefs((e) => {
      if (NEWS_ORDER_PREF_KEYS.has(e.detail?.key)) getData(false);
    });
    return () => {
      clearInterval(interval);
      window.removeEventListener("online", onOnline);
      unsubscribePrefs();
    };
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      localforage.removeItem("news_refresh_cooldown_end");
    }
  }, [cooldown]);
  const handleAddSource = async (urlOverride, nameOverride) => {
    let inputUrl = (typeof urlOverride === "string" ? urlOverride : newUrl).trim();
    if (FACEBOOK_QUERY.test(inputUrl)) return; // підказку показано під полем
    if (!inputUrl) return;
    
    const feedsLimit = getCustomFeedsLimit();
    if (customSources.length >= feedsLimit) {
      alert(i18n.t("newsWeather.News.vyDosiahlyLimituMozhna", { feedsLimit: feedsLimit }));
      return;
    }

    try {
      let resolvedUrl = inputUrl;
      let name = "";
      let home = "";
      
      // @user@instance.social → профіль Mastodon
      const mastodonHandle = resolvedUrl.match(/^@([\w.-]+)@([\w-]+(?:\.[\w-]+)+)$/);
      if (mastodonHandle) {
        resolvedUrl = `https://${mastodonHandle[2]}/@${mastodonHandle[1]}`;
      } else if (resolvedUrl.startsWith("@")) {
        resolvedUrl = `https://t.me/${resolvedUrl.slice(1)}`;
      }
      
      if (!resolvedUrl.startsWith("http://") && !resolvedUrl.startsWith("https://")) {
        if (/^[a-zA-Z0-9_]+$/.test(resolvedUrl)) {
          resolvedUrl = `https://t.me/${resolvedUrl}`;
        } else {
          resolvedUrl = `https://${resolvedUrl}`;
        }
      }
      
      const urlObj = new URL(resolvedUrl);
      const domain = urlObj.hostname.replace("www.", "");
      name = domain;
      home = urlObj.origin;
      
      const type = getSourceType(resolvedUrl);
      
      if (type === "youtube") {
        alert(i18n.t("newsWeather.News.zdiisniuietsiaPoshukIdYoutube"));
        const channelId = await resolveYoutubeChannelId(resolvedUrl);
        if (channelId) {
          resolvedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
          name = `YouTube: ${domain}`;
        } else {
          alert(i18n.t("newsWeather.News.neVdalosiaZnaityId"));
          return;
        }
      } else if (type === "telegram") {
        const parts = resolvedUrl.split("/");
        const channelName = parts[parts.length - 1] || parts[parts.length - 2];
        name = `Telegram: ${channelName}`;
        home = resolvedUrl;
      } else if (type === "telegraph") {
        name = `Telegraph`;
        home = "https://telegra.ph";
      } else if (type === "hive") {
        const match = resolvedUrl.match(/withhive\.com\/([a-zA-Z0-9_-]+)/);
        const game = match ? match[1] : "Hive";
        name = `Hive: ${game}`;
        home = `https://community.withhive.com/${game}`;
      } else if (/^bsky\.app$/i.test(domain) && urlObj.pathname.startsWith("/profile/")) {
        name = `Bluesky: ${urlObj.pathname.split("/")[2] || domain}`;
      } else if (/^\/@[^/]+\/?$/.test(urlObj.pathname)) {
        name = `Mastodon: ${urlObj.pathname.replace(/\//g, "")}@${domain}`;
      } else {
        name = domain;
      }
      
      // Лише прості дані: об’єкт зберігається в IndexedDB, React-елемент там дає DataCloneError
      const newSource = {
        url: resolvedUrl,
        name: (typeof nameOverride === "string" && nameOverride) || name,
        home: home,
        type: type
      };

      const saved = (await localforage.getItem("custom_news_sources")) || [];
      if (!saved.find((s) => s.url === resolvedUrl)) {
        if (saved.length >= getCustomFeedsLimit()) {
          alert(i18n.t("newsWeather.News.vyDosiahlyLimituMozhna2", { v0: getCustomFeedsLimit() }));
          return;
        }
        const updated = [...saved, newSource];
        await localforage.setItem("custom_news_sources", updated);
        setCustomSources(updated);
        setNewUrl("");
        setIsAddingSource(false);
        setIsSearchActive(false);
        getData(true);
      } else {
        alert(i18n.t("newsWeather.News.tseDzhereloVzheDodano"));
      }
    } catch (e) {
      console.error(e);
      alert(
        i18n.t("newsWeather.News.nevirnyiFormatUrlVvedit"),
      );
    }
  };

  const handleReport = async (item, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert(i18n.t("newsWeather.News.tilkyAvtoryzovaniKorystuvachiMozhut"));
      return;
    }

    if (
      !window.confirm(
        i18n.t("newsWeather.News.vyDiisnoKhochetePoskarzhytysia"),
      )
    )
      return;

    try {
      const { auth, db, doc, getDoc, writeBatch, serverTimestamp } = await loadFirebase();
      if (typeof auth.authStateReady === "function") await auth.authStateReady();
      const firebaseUser = auth.currentUser;
      // Скарги лише від справжніх акаунтів: анонімні входи сервер відхиляє
      if (!firebaseUser || firebaseUser.isAnonymous) {
        alert(i18n.t("newsWeather.News.shchobPoskarzhytysiaUviiditV"));
        return;
      }
      const reportUid = firebaseUser.uid;
      const newsId = encodeURIComponent(item.link);
      const sourceId = encodeURIComponent(item.sourceUrl);

      // Одна скарга від акаунта на добу. Формат: reporters: { uid: час сервера } —
      // так один акаунт не може «накидати» кілька голосів (правила Firestore)
      const newsRef = doc(db, "news_reports", newsId);
      const rssRef = doc(db, "rss_reports", sourceId);
      const configRef = doc(db, "config", reportUid);
      const [newsDoc, rssDoc, configDoc] = await Promise.all([
        getDoc(newsRef),
        getDoc(rssRef),
        getDoc(configRef),
      ]);
      if (reportedWithinDay(newsDoc.exists() ? newsDoc.data() : null, reportUid)) {
        alert(i18n.t("newsWeather.News.vyVzheSkarzhylysiaNa"));
        return;
      }
      // Добовий ліміт скарг на акаунт (перевіряють і правила Firestore)
      const reportsUsed = usedTodayFromCloud(
        configDoc.exists() ? configDoc.data() : {},
        CLOUD_LIMITS.reports,
      );
      if (reportsUsed >= CLOUD_LIMITS.reports.limit) {
        alert(i18n.t("newsWeather.News.mozhnaPodatyNeBilshe", { limit: CLOUD_LIMITS.reports.limit }));
        return;
      }

      // Скарга й лічильник — однією транзакцією: правила перевіряють, що
      // разом зі скаргою лічильник у config/{uid} збільшився
      const batch = writeBatch(db);
      batch.set(newsRef, { reporters: { [reportUid]: serverTimestamp() } }, { merge: true });
      const rssData = rssDoc.exists() ? rssDoc.data() : null;
      if (!reportedWithinDay(rssData, reportUid)) {
        batch.set(
          rssRef,
          {
            reporters: { [reportUid]: serverTimestamp() },
            // Назву джерела записуємо лише один раз, при першій скарзі
            ...(rssData?.name ? {} : { name: String(item.sourceName || i18n.t("newsWeather.News.dzherelo")).slice(0, 100) }),
          },
          { merge: true },
        );
      }
      batch.set(
        configRef,
        {
          [CLOUD_LIMITS.reports.countKey]: reportsUsed + 1,
          [CLOUD_LIMITS.reports.atKey]: serverTimestamp(),
        },
        { merge: true },
      );
      await batch.commit();

      alert(i18n.t("newsWeather.News.skarhuPryiniatoDiakuiemo"));
      getData(true, true);
    } catch (err) {
      console.warn("Помилка відправки скарги:", err);
      alert(i18n.t("newsWeather.News.pomylkaVidpravkySkarhy"));
    }
  };

  // Заглушити / розглушити: обидві дії рахуються в добовий ліміт синхронізації
  const applyMuteChange = async (link, op) => {
    const current = mutedNewsRef.current;
    const newMuted = (
      op === "mute"
        ? [...new Set([...current, link])]
        : current.filter((l) => l !== link)
    ).slice(-MUTED_NEWS_MAX); // найстаріші відкидаємо (ліміт і в правилах Firestore)
    mutedNewsRef.current = newMuted;
    setMutedNewsUrls(newMuted);
    try {
      await localforage.setItem("muted_news_urls", newMuted);
    } catch (err) {}

    if (!syncMutedEnabled) return;

    const savePending = async () => {
      try {
        const pending = await localforage.getItem(MUTE_PENDING_KEY);
        await localforage.setItem(MUTE_PENDING_KEY, addPendingOp(pending, link, op));
      } catch (err) {}
    };

    // Лічильник у форматі хелпера; нова доба (UTC) — з нуля
    const counterRef = {
      current: { date: muteSyncDayRef.current, count: muteSyncUsedRef.current },
    };
    try {
      // Пишемо повний список — разом з ним підтягуються й дії, що були понад ліміт
      const result = await writeWithDailyCounter({
        uid: user.uid,
        data: { mutedNews: newMuted },
        limitConfig: CLOUD_LIMITS.mute,
        counterRef,
        storageKey: MUTE_COUNTER_KEY,
      });
      if (result.ok) {
        await localforage.removeItem(MUTE_PENDING_KEY);
        if (result.count === MUTE_SYNC_DAILY_LIMIT) {
          toast(
            i18n.t("newsWeather.News.vykorystanoVsiSynkhronizatsiiNa", { MUTE_SYNC_DAILY_LIMIT: MUTE_SYNC_DAILY_LIMIT }),
            { id: "mute-sync-limit", duration: 4500 },
          );
        }
      } else {
        await savePending();
        toast(
          i18n.t("newsWeather.News.limitSynkhronizatsiiVycherpanoZa", { MUTE_SYNC_DAILY_LIMIT: MUTE_SYNC_DAILY_LIMIT, MUTE_SYNC_DAILY_LIMIT2: MUTE_SYNC_DAILY_LIMIT }),
          { id: "mute-sync-limit", duration: 4500 },
        );
      }
    } catch (err) {
      console.warn("Помилка синхронізації заглушених новин", err);
      await savePending();
    } finally {
      muteSyncDayRef.current = counterRef.current.date;
      muteSyncUsedRef.current = counterRef.current.count;
      setMuteSyncUsed(counterRef.current.count);
    }
  };

  const handleMute = async (item, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    await applyMuteChange(item.link, "mute");
  };

  const handleUnmute = async (item) => {
    await applyMuteChange(item.link, "unmute");
  };

  const handleRemoveSource = async (urlToRemove) => {
    if (!window.confirm(i18n.t("newsWeather.News.vydalytyTseDzhereloNovyn"))) return;
    try {
      const saved = (await localforage.getItem("custom_news_sources")) || [];
      const updated = saved.filter((s) => s.url !== urlToRemove);
      await localforage.setItem("custom_news_sources", updated);
      setCustomSources(updated);
      const removedName = saved.find((s) => s.url === urlToRemove)?.name;
      if (removedName && filterSources.includes(removedName)) {
        setFilterSources(["all"]);
      }
      getData(true);
    } catch (err) {
      console.error("Localforage error:", err);
      alert(i18n.t("newsWeather.News.pomylkaVydalenniaDzherela"));
    }
  };
  const layout = user?.newsLayout || [];
  const isVisible = (key) =>
    layout.find((item) => item.key === key)?.visible !== false;
  const showImage = true;
  const showTitle = isVisible("title");
  const showDescription = isVisible("description");

  // DOM-слот у Налаштуваннях → «Секції та новини», куди порталом рендериться панель стрічок
  const [feedsSlot, setFeedsSlot] = useState(() => window.__stykhiiaNewsFeedsSlot || null);
  useEffect(() => {
    const onSlot = (e) => setFeedsSlot(e.detail || null);
    window.addEventListener("stykhiia:news-feeds-slot", onSlot);
    return () => window.removeEventListener("stykhiia:news-feeds-slot", onSlot);
  }, []);

  return (
    <NewsDiv ref={newsSectionRef}>
      <Decoder $isStickyBgMode={isStickyBgMode} $isDarkMode={$isDarkMode}>
        <AihelpTitle $isDarkMode={$isDarkMode}>
          <span
            ref={(el) => registerRef('newsHeader', el)}
            style={{ marginLeft: "5px", padding: "2px", fontSize: "15px", fontWeight: "600" }}
          >
            {i18n.t("newsWeather.News.novynySvituTaKlimatu")}
            <FilteredInTitle title={i18n.t("newsWeather.News.zaSohodniFiltrSkhovav", { filteredNewsCount: filteredNewsCount })}>
              {" "}{i18n.t("newsWeather.News.sohodniSkhovano")} {filteredNewsCount})
            </FilteredInTitle>
          </span>
        </AihelpTitle>
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden" }}
            >
              <FilterContainer>
                <FilterBtn
                  $isDarkMode={$isDarkMode}
                  onClick={() => setIsHelpModalOpen(true)}
                >
                  {i18n.t("newsWeather.News.instruktsiia")}
                </FilterBtn>
                <FilterBtn
                  $isDarkMode={$isDarkMode}
                  $active={filterSources.includes("all")}
                  onClick={() => handleToggleFilter("all")}
                >
                  <FilterCheck on={filterSources.includes("all")} /> {i18n.t("newsWeather.News.usi")}
                </FilterBtn>
                {SOURCES.map((s) => (
                  <FilterBtn
                    key={s.name}
                    $isDarkMode={$isDarkMode}
                    $active={filterSources.includes(s.name)}
                    onClick={() => handleToggleFilter(s.name)}
                  >
                    <FilterCheck on={filterSources.includes(s.name)} /> {s.name}
                  </FilterBtn>
                ))}
                {customSources.map((s) => (
                  <FilterBtn
                    key={s.url}
                    $isDarkMode={$isDarkMode}
                    $active={filterSources.includes(s.name)}
                    onClick={() => handleToggleFilter(s.name)}
                  >
                    <FilterCheck on={filterSources.includes(s.name)} /> {s.name}
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSource(s.url);
                      }}
                      style={{
                        marginLeft: "6px",
                        color: "#ff4d4d",
                        fontWeight: "bold",
                      }}
                      aria-label={i18n.t("newsWeather.News.vydalytyDzherelo")}
                    >
                      ×
                    </span>
                  </FilterBtn>
                ))}
                {customSources.length < getCustomFeedsLimit() && (
                  <FilterBtn
                    $isDarkMode={$isDarkMode}
                    onClick={() => setIsAddingSource(!isAddingSource)}
                    style={{ borderStyle: "dashed" }}
                  >
                    {isAddingSource ? i18n.t("newsWeather.News.skasuvaty") : i18n.t("newsWeather.News.dodatyStrichku")}
                  </FilterBtn>
                )}
                <FilterBtn
                  $isDarkMode={$isDarkMode}
                  onClick={() => setShowBlacklist(true)}
                  style={{
                    background: "rgba(255, 77, 77, 0.2)",
                    borderColor: "#ff4d4d",
                    color: "#ff4d4d",
                  }}
                >
                  {i18n.t("newsWeather.News.chornyiSpysok")}{blockedSources.length})
                </FilterBtn>
              </FilterContainer>
              <AnimatePresence>
                {isAddingSource && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <input
                        type="text"
                        value={newUrl}
                        onChange={(e) => setNewUrl(e.target.value)}
                        placeholder={i18n.t("newsWeather.News.vveditUrlRssN")}
                        style={{
                          padding: "5px",
                          borderRadius: "5px",
                          border: `1px solid ${$isDarkMode ? "rgba(0, 0, 0, 0.98)" : "rgb(255, 255, 255)"}`,
                          background: "transparent",
                          color: "#fff",
                          outline: "none",
                          minWidth: "248px",
                          fontFamily: "var(--font-family)",
                          fontSize: "12px",
                          "--placeholder-color": "rgba(255, 255, 255, 0.97)",
                        }}
                      />
                      <FilterBtn
                        $isDarkMode={$isDarkMode}
                        onClick={handleAddSource}
                        style={{ background: "#ffb36c", color: "#000" }}
                      >
                        {i18n.t("newsWeather.News.dodaty")}
                      </FilterBtn>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </Decoder>

      {loading ? (
        <NewsLoadingBox>
          <div
            style={{
              marginBottom: "15px",
              fontSize: "14px",
              background: "rgba(0, 0, 0, 0.71)",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px 15px",
              display: "inline-block",
              fontWeight: "900",
            }}
          >
            {hasError
              ? i18n.t("newsWeather.News.pomylkaZavantazhennia")
              : i18n.t("newsWeather.News.shukaiemoTsikaviNovyny", { loadProgress: loadProgress })}
          </div>
          <ProgressBar $isDarkMode={$isDarkMode}>
            <ProgressBarFill $progress={loadProgress} $isError={hasError} />
          </ProgressBar>
        </NewsLoadingBox>
      ) : filteredItems.length > 0 ? (
        <div
          style={{ position: "relative", maxWidth: "1400px", margin: "0 auto" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={filterSources.join(",")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%" }}
            >
             <CarouselWrapper>
  <MobileCarousel ref={carouselRef} onScroll={handleScroll}>
    {carouselSlides.map((slide, index) => (
      <CarouselSlide
        data-news-slide
        key={`${isListView ? slide.map((i) => i.link).join("|") : slide.link}-${index}`}
        $distanceFromCenter={
          centeredSlideIndex === null
            ? 2
            : Math.min(Math.abs(centeredSlideIndex - index), 2)
        }
      >
        {isListView ? (
          // «Список»: той самий блок каруселі, але в ньому дві новини рядками
          <NewsPairBlock $isDarkMode={$isDarkMode}>
            {slide.map((item) => (
              <Fragment key={item.link}>{renderNewsCard(item, true)}</Fragment>
            ))}
          </NewsPairBlock>
        ) : (
          renderNewsCard(slide)
        )}
      </CarouselSlide>
    ))}
  </MobileCarousel>
  <PulsingCarouselHint>
    <CarouselHintItem
      $direction="previous"
      onClick={() => scrollCarousel("left")}
    >
      ◀
    </CarouselHintItem>
    <CarouselHintItem $direction="next" onClick={() => scrollCarousel("right")}>
      ▶
    </CarouselHintItem>
  </PulsingCarouselHint>
</CarouselWrapper>
            </motion.div>
          </AnimatePresence>
          <MoreNewsActions>
            <MoreNewsButton
              $secondary
              $isDarkMode={$isDarkMode}
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("stykhiia:open-settings", { detail: { tab: "siteSections" } }),
                )
              }
            >
              <FiPlus aria-hidden="true" />
              {i18n.t("newsWeather.News.dodatyStrichku")}
            </MoreNewsButton>
            <MoreNewsButton $isDarkMode={$isDarkMode} onClick={() => setShowMoreNews(true)}>
              <FiList aria-hidden="true" />
              {i18n.t("newsWeather.News.vsiNovyny")}
              {moreNewsCount > 0 && (
                <MoreNewsCount aria-label={i18n.t("newsWeather.News.novyn", { moreNewsCount: moreNewsCount })}>
                  {moreNewsCount}
                </MoreNewsCount>
              )}
            </MoreNewsButton>
          </MoreNewsActions>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "white", padding: "14px", background: "#0000009c", marginTop: "20px", fontSize: "12px" }}>
          {hasError
            ? loadError
            : items.length === 0
              ? i18n.t("newsWeather.News.usiOtrymaniNovynyPrykhovani")
              : i18n.t("newsWeather.News.dliaObranykhDzherelPoky")}
        </div>
      )}

      {selectedNews && isAiModalOpen && (
        <ModalSuspense onCancel={() => setIsAiModalOpen(false)}>
          <NewsAiModal
            isOpen={isAiModalOpen}
            onClose={() => setIsAiModalOpen(false)}
            newsItem={selectedNews}
            isDarkMode={$isDarkMode}
          />
        </ModalSuspense>
      )}
      {isHelpModalOpen && (
        <InfoModal
          isOpen={isHelpModalOpen}
          onClose={() => setIsHelpModalOpen(false)}
          initialFaqQuestion={i18n.t("newsWeather.News.novynyPokrokovyiPosibnyk")}
        />
      )}
      {/* Відкривається з Налаштувань, тож у body і вище за вікно налаштувань (z-index 100001+) */}
      {showBlacklist && createPortal(
        <ModalOverlay onClick={() => setShowBlacklist(false)} style={{ zIndex: 100010 }}>
          <ModalContent
            $isDarkMode={$isDarkMode}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={() => setShowBlacklist(false)}>✕</CloseButton>
            <h2 style={{ marginTop: 0 }}>{i18n.t("newsWeather.News.chornyiSpysokKarantyn24")}</h2>
            <p style={{ fontSize: "13px" }}>
              {i18n.t("newsWeather.News.tsiRssDzherelaOtrymaly")}
            </p>
            {blockedSources.length === 0 ? (
              <p>{i18n.t("newsWeather.News.naraziNemaieZablokovanykhDzherel")}</p>
            ) : (
              <ul style={{ paddingLeft: "20px", marginTop: "15px" }}>
                {blockedSources.map((s) => (
                  <li key={s.id} style={{ marginBottom: "15px" }}>
                    <strong style={{ fontSize: "16px" }}>{s.name}</strong>
                    <br />
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: "12px",
                        color: "#ffb36c",
                        wordBreak: "break-all",
                      }}
                    >
                      {s.url}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </ModalContent>
        </ModalOverlay>,
        document.body,
      )}

      {createPortal(
        <AnimatePresence>
          {showMoreNews && (
            <FullscreenModalOverlay
              key="more-news-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: SHEET_IN_MS / 1000 }}
              onClick={() => setShowMoreNews(false)}
              style={{ padding: 0, backdropFilter: "none", background: "rgba(0, 0, 0, 0.72)" }}
            >
              <MoreNewsPanel
                $isDarkMode={$isDarkMode}
                role="dialog"
                aria-modal="true"
                aria-labelledby="more-news-title"
                onClick={(e) => e.stopPropagation()}
                initial={reduceMotion ? false : { y: "100%" }}
                animate={{ y: 0, transition: { duration: SHEET_IN_MS / 1000, ease: [0.22, 1, 0.36, 1] } }}
                exit={{ y: "100%", transition: { duration: reduceMotion ? 0 : SHEET_OUT_MS / 1000, ease: [0.55, 0, 0.75, 0.2] } }}
              >
                <SheetHeader
                  light={$isDarkMode === false}
                  titleId="more-news-title"
                  style={{ margin: "0 -12px 12px" }}
                  icon={<FiList />}
                  title={i18n.t("newsWeather.News.vsiNovyny")}
                  subtitle={
                    <>
                      {moreNewsCount} {i18n.t("newsWeather.News.novyn2")} {moreGroups.length} {i18n.t("newsWeather.News.dzherel")}
                      {lastUpdated &&
                        " " + i18n.t("newsWeather.News.onovlenoO", { lastUpdated: lastUpdated.toLocaleTimeString(dateLocale(), {
                          hour: "2-digit",
                          minute: "2-digit",
                        }) })}
                    </>
                  }
                  onClose={() => setShowMoreNews(false)}
                  closeLabel={i18n.t("newsWeather.News.zakrytyVsiNovyny")}
                />
                {isMoreNewsLoading && (
                  <p role="status" style={{ margin: "0 0 12px", fontSize: "13px", opacity: 0.85 }}>
                    {i18n.t("newsWeather.News.pidvantazhuiemoShche")} {moreNews.pending.length} {i18n.t("newsWeather.News.novyn3")}
                  </p>
                )}
                {moreGroups.length === 0 ? (
                  <p style={{ margin: "20px 0", textAlign: "center", opacity: 0.8 }}>
                    {i18n.t("newsWeather.News.dliaObranykhDzherelPoky")}
                  </p>
                ) : (
                  moreGroups.map((group) => (
                    // Назву джерела показує кожна новина, тож окремий заголовок групи не потрібен
                    <MoreNewsSection $isDarkMode={$isDarkMode} key={group.sourceName} aria-label={group.sourceName}>
                      <MoreNewsGrid>
                        {group.items.map((item) => (
                          <MoreNewsAppear
                            key={item.link}
                            initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            transition={{
                              duration: 0.45,
                              ease: [0.22, 1, 0.36, 1],
                              delay: moreNewsAppearDelay.get(item.link) ?? 0,
                            }}
                          >
                          <NewsCard
                            item={item}
                            $isDarkMode={$isDarkMode}
                            showImage={showImage}
                            showTitle={showTitle}
                            showDescription={showDescription}
                            onAiSummaryClick={(news) => {
                              setSelectedNews(news);
                              setIsAiModalOpen(true);
                            }}
                            onReportClick={handleReport}
                            onMuteClick={handleMute}
                            onUnmuteClick={handleUnmute}
                            onRevealClick={handleRevealAutoBlocked}
                            muteSyncInfo={muteSyncInfo}
                            compact={isPhone || isListView}
                          />
                          </MoreNewsAppear>
                        ))}
                      </MoreNewsGrid>
                    </MoreNewsSection>
                  ))
                )}
              </MoreNewsPanel>
            </FullscreenModalOverlay>
          )}
        </AnimatePresence>,
        document.body,
      )}
      {/* Додавання стрічок і чорний список — у Налаштуваннях → «Секції та новини» (слот рендерить UserSettingsModal) */}
      {feedsSlot &&
        createPortal(
                <div>
                  <SourceSearchInput
                    type="text"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    onFocus={() => setIsSearchActive(true)}
                    onBlur={() => setIsSearchActive(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && newUrl.trim()) handleAddSource();
                      if (e.key === "Escape") e.currentTarget.blur();
                    }}
                    $full={customSources.length >= getCustomFeedsLimit()}
                    placeholder={
                      customSources.length >= getCustomFeedsLimit()
                        ? i18n.t("newsWeather.News.dosiahnutoLimituStrichokVydalit", { v0: getCustomFeedsLimit() })
                        : i18n.t("newsWeather.News.dodatyStrichkuNazvaSaitu")
                    }
                  />
                  <AnimatePresence initial={false}>
                    {customSources.length >= CUSTOM_FEEDS_WARN_AT && (
                      <motion.div key="feeds-warning" {...feedsCollapseMotion}>
                        <FeedsWarning role="status" $full={customSources.length >= getCustomFeedsLimit()}>
                          <FiAlertTriangle aria-hidden="true" />
                          <span>
                            {i18n.t("newsWeather.News.strichok")} <strong>{customSources.length} {i18n.t("newsWeather.News.z")} {getCustomFeedsLimit()}</strong>.{" "}
                            {customSources.length >= getCustomFeedsLimit()
                              ? i18n.t("newsWeather.News.tseMaksymumVydalitOdnu")
                              : i18n.t("newsWeather.News.kozhnaStrichkaShcheOdyn")}
                          </span>
                        </FeedsWarning>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence initial={false}>
                  {isSearchActive ? (
                    <motion.div key="reco" {...feedsCollapseMotion} onMouseDown={(e) => e.preventDefault()}>
                      <RecoGrid>
                        {FACEBOOK_QUERY.test(newUrl) && (
                          <div
                            style={{
                              gridColumn: "1 / -1",
                              padding: "14px",
                              borderRadius: "10px",
                              border: "1px dashed rgba(255, 170, 0, 0.6)",
                              background: "rgba(255, 170, 0, 0.08)",
                              color: "#ffd9a0",
                              fontSize: "14px",
                              lineHeight: 1.5,
                            }}
                          >
                            {FACEBOOK_NOTE()}
                          </div>
                        )}
                        {newUrl.trim() && !FACEBOOK_QUERY.test(newUrl) && (
                          <RecoItem onClick={() => handleAddSource()}>
                            <FiPlus />
                            {i18n.t("newsWeather.News.dodaty2")}{newUrl.trim().length > 40 ? newUrl.trim().slice(0, 40) + "…" : newUrl.trim()}»
                          </RecoItem>
                        )}
                        {RECOMMENDED_SOURCES.filter((r) => {
                          const q = newUrl.trim().toLowerCase();
                          return !q || r.name.toLowerCase().includes(q) || r.url.toLowerCase().includes(q);
                        }).map((r) => {
                          const added =
                            SOURCES.some((x) => x.url === r.url) ||
                            customSources.some((x) => x.url === r.url);
                          const brand = getSourceBrand(r);
                          return (
                            <RecoItem
                              key={r.url}
                              $brand={brand.color}
                              title={brand.domain || r.url}
                              disabled={added || customSources.length >= getCustomFeedsLimit()}
                              onClick={() => handleAddSource(r.url, r.name)}
                            >
                              <SourceLogo name={r.name} url={r.url} home={r.home} size={36} />
                              {r.name}
                              {brand.domain && <small>{brand.domain}</small>}
                              {added && <span style={{ fontSize: "11px" }}>{i18n.t("newsWeather.News.dodano")}</span>}
                            </RecoItem>
                          );
                        })}
                      </RecoGrid>
                    </motion.div>
                  ) : (
                    <motion.div key="tiles" {...feedsCollapseMotion}>
                    <SourceTileGrid>
                    {/* Власні стрічки — лише щоб бачити й видаляти (×) */}
                    {customSources.map((s) => (
                      <SourceTile
                        key={s.url}
                        as="div"
                        $isDarkMode={$isDarkMode}
                        style={{ cursor: "default" }}
                      >
                        <SourceLogo name={s.name} url={s.url} home={s.home} size={32} />
                        <span>{s.name}</span>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveSource(s.url);
                          }}
                          role="button"
                          tabIndex={0}
                          style={{
                            position: "absolute",
                            top: "4px",
                            right: "10px",
                            fontSize: "18px",
                            color: "#ff4d4d",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                          aria-label={i18n.t("newsWeather.News.vydalytyDzherelo")}
                        >
                          ×
                        </span>
                      </SourceTile>
                    ))}
                    <SourceTile
                      $isDarkMode={$isDarkMode}
                      onClick={() => setShowBlacklist(true)}
                      style={{
                        background: "rgba(255, 77, 77, 0.2)",
                        borderColor: "#ff4d4d",
                        color: "#ff4d4d",
                      }}
                    >
                      <MdBlock />
                      {i18n.t("newsWeather.News.chornyiSpysok")}{blockedSources.length})
                    </SourceTile>
                  </SourceTileGrid>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>,
          feedsSlot,
        )}
    </NewsDiv>
  );
};

export default News;
