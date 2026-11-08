import React, { useEffect, useState, useCallback, useRef, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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
// ШІ та markdown підвантажуються лише при відкритті модалки
const NewsAiModal = lazy(() => import("./NewsAiModal"));
import InfoModal from "../Modals/UserSearchModal.jsx";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import { MdReport } from "react-icons/md"; //Поскаржитися
import { FaYoutube } from "react-icons/fa6";
import { GiTreeBeehive } from "react-icons/gi";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { FaRss } from "react-icons/fa";
import { MdOutlineReportOff } from "react-icons/md"; //Заглушити
import { MdHelpOutline, MdBlock, MdSelectAll, MdClose } from "react-icons/md";
import { TbStarsFilled } from "react-icons/tb"; // ШІ Виклад
import { FiPlus, FiLink, FiShield } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import toast from "react-hot-toast";
import { getNewsBlockReason, getNewsFilterPrefs } from "../../utils/contentFilter";
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
const TooltipBox = styled.div`
  background-color: ${(props) => (props.$isDarkMode ? "#0c0c0ceb" : "#fdff98e7")};
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
        {...getReferenceProps()}
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
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const Decoder = styled.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`;

const SOURCES = [
  {
    id: "phys-org",
    url: "https://phys.org/rss-feed/biology-news/animals-news/",
    name: "Phys.org",
    home: "https://phys.org",
  },
  {
    id: "science-daily",
    url: "https://www.sciencedaily.com/rss/top/environment.xml",
    name: "ScienceDaily",
    home: "https://www.sciencedaily.com",
  },
  {
    id: "nature",
    url: "https://www.nature.com/nature.rss",
    name: "Nature",
    home: "https://www.nature.com",
  },
  {
    id: "mongabay",
    url: "https://news.mongabay.com/feed/",
    name: "Mongabay",
    home: "https://news.mongabay.com",
    unblockable: true,
  },
  {
    id: "guardian-environment",
    url: "https://www.theguardian.com/environment/rss",
    name: "The Guardian Environment",
    home: "https://www.theguardian.com/environment",
    unblockable: true,
  },
];

// Рекомендовані новинні сайти (адреси перевірено через RSS-конвертер)
const RECOMMENDED_SOURCES = [
  { name: "BBC News", url: "https://feeds.bbci.co.uk/news/rss.xml" },
  { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "CNN", url: "http://rss.cnn.com/rss/edition.rss" },
  { name: "The New York Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" },
  { name: "The Guardian World", url: "https://www.theguardian.com/world/rss" },
  { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml" },
  { name: "Fox News", url: "https://moxie.foxnews.com/google-publisher/latest.xml" },
  { name: "NBC News", url: "https://feeds.nbcnews.com/nbcnews/public/news" },
  { name: "ABC News", url: "https://abcnews.go.com/abcnews/topstories" },
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
  "🪦 Facebook — мертвий сад, з якого всі йдуть, а він ще й вимагає гроші за рекламу. Тому бундючна студія звідти й пішла. Шукай їх у YouTube, Telegram або Bluesky.";

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

const AihelpTitle = styled.div`
  font-size: 22px;
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
  display: block;
  margin: 0 auto 0;
  padding: 6px 22px;
  border: 2px solid #ffaa00;
  border-radius: 6px;
  background: #000;
  color: #ffaa00;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  transition: box-shadow 0.2s ease, transform 0.1s ease;

  &:hover {
    box-shadow: 0 0 18px rgba(255, 170, 0, 0.99);
  }

  &:active {
    transform: scale(0.97);
  }
`;

/* Телефон — один стовпчик; планшет і комп’ютер — сітка 2×2 */
const MoreNewsPanel = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: #111;
  border: 1px solid rgba(255, 170, 0, 0.4);
  border-radius: 10px;
  padding: 12px;
  box-sizing: border-box;
  color: #fff;
`;

const MoreNewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 600px) {
    flex: 1;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(240px, 1fr));

    /* Картки розтягуються на всю висоту модалки */
    & > a {
      height: 100%;
    }
    & > a > div:first-child {
      flex: 1;
      height: auto !important;
    }
  }
`;

const Card = styled.a`
  background: #1a1a1a;
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
}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(item.isNew);
  const [hasGeminiKey, setHasGeminiKey] = useState(false);
  const [isNewsSettingsOpen, setIsNewsSettingsOpen] = useState(false);
  // Lazy-load: показуємо реальне зображення лише коли картка входить у viewport
  const [imgSrc, setImgSrc] = useState(null);
  const [isFallbackImg, setIsFallbackImg] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      const k = await localforage.getItem("gemini_api_key");
      setHasGeminiKey(!!k);
    };
    checkKey();
    const handleKeyChange = (e) => setHasGeminiKey(!!e.detail);
    window.addEventListener("geminiKeyChanged", handleKeyChange);
    return () => window.removeEventListener("geminiKeyChanged", handleKeyChange);
  }, []);


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
          <span style={{ fontSize: "40px", marginBottom: "10px" }}>🔒</span>
          <h4 style={{ margin: 0, fontSize: "14px", lineHeight: "1.4" }}>
            Дана новина була неправомірна, і ви не можете її переглянути.
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
            Небажаний контент був автозаблокований
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
            Розглушити
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
          <span style={{ fontSize: "30px", marginBottom: "10px", background: "rgba(0,0,0,0.3)", padding: "5px 10px", borderRadius: "5px" }}>🔇</span>
          <h4 style={{ margin: 0, fontSize: "14px", lineHeight: "1.4", background: "rgba(0,0,0,0.3)", padding: "5px 10px", borderRadius: "5px" }}>
            Новину приховано.
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
            Розглушити
          </button>
          {muteSyncInfo && (
            <MuteSyncHint
              $exhausted={muteSyncInfo.used >= muteSyncInfo.limit}
              style={{ marginTop: "8px", background: "rgba(0,0,0,0.35)", padding: "3px 8px", borderRadius: "999px" }}
            >
              {muteSyncInfo.used >= muteSyncInfo.limit
                ? `Ліміт ${muteSyncInfo.limit}/${muteSyncInfo.limit} — зміни лише на цьому пристрої`
                : `Синхронізація: ${muteSyncInfo.used}/${muteSyncInfo.limit} за добу`}
            </MuteSyncHint>
          )}
        </BlockOverlay>
      </Card>
    );
  }

  return (
    <Card
      ref={cardRef}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      $isDarkMode={$isDarkMode}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: showImage ? "160px" : "auto",
          minHeight: "auto",
        }}
      >
        {isVisible && <NewBadge>Нове</NewBadge>}
        <SourceFlag
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(item.sourceHome, "_blank");
          }}
          aria-label={`Перейти на головну сторінку ${item.sourceName}`}
          title={item.sourceName}
        >
          {item.sourceName}
        </SourceFlag>
        <CardActions aria-label="Дії з новиною">
          <Tooltip content={isNewsSettingsOpen ? "Закрити налаштування" : "Налаштування"} isDarkMode={$isDarkMode}>
            <NewsSettingsBtn
              aria-label="Налаштування картки новини"
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
        {(
            <NewsSettingsMenu
              $open={isNewsSettingsOpen}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <NewsSettingsItem
                $color={hasGeminiKey ? "#ff69b4" : "#888"}
                disabled={!hasGeminiKey}
                title={hasGeminiKey ? "Прикріпити до ШІ-чату" : "Додайте Gemini API-ключ"}
                onClick={() => {
                  if (!hasGeminiKey) return;
                  const cleanText = (item.description || item.title).replace(/<[^>]*>?/gm, "").trim();
                  window.dispatchEvent(
                    new CustomEvent("attachCardToAiHelp", {
                      detail: {
                        id: `news-${item.link}`,
                        type: "news",
                        title: item.title,
                        details: `Джерело: ${item.sourceName}. Заголовок: "${item.title}". Зміст: "${cleanText}". Посилання: ${item.link}`,
                      },
                    })
                  );
                  setIsNewsSettingsOpen(false);
                }}
              >
                <FiPlus /> Прикріпити до ШІ
              </NewsSettingsItem>
              <NewsSettingsItem
                onClick={() => {
                  if (onAiSummaryClick) onAiSummaryClick(item);
                  setIsNewsSettingsOpen(false);
                }}
              >
                <TbStarsFilled /> ШІ Виклад
              </NewsSettingsItem>
              {!BUILTIN_SOURCE_NAMES.has(item.sourceName) && (
                <NewsSettingsItem
                  $color="#ff6b6b"
                  onClick={(e) => {
                    if (onReportClick) onReportClick(item, e);
                    setIsNewsSettingsOpen(false);
                  }}
                >
                  <MdReport /> Подати скаргу
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
                <MdOutlineReportOff /> Заглушити
                {muteSyncInfo && (
                  <MuteSyncHint $exhausted={muteSyncInfo.used >= muteSyncInfo.limit}>
                    {muteSyncInfo.used >= muteSyncInfo.limit
                      ? "Лише на цьому пристрої"
                      : `Синхронізація ${muteSyncInfo.used}/${muteSyncInfo.limit}`}
                  </MuteSyncHint>
                )}
              </NewsSettingsItem>
            </NewsSettingsMenu>
          )}
        {showImage && (
          <NewsImg
            src={imgSrc || "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
            alt=""
            loading="lazy"
            decoding="async"
            $fallback={isFallbackImg}
            onError={(e) => {
              // Зображення не завантажилось — підставляємо обкладинку з природи
              e.target.onerror = null;
              e.target.src = getNewsFallbackImage(item.link || item.title || "");
              setIsFallbackImg(true);
            }}
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
                  {item.title}
                </h2>
                <Tooltip content="Копіювати шлях" isDarkMode={$isDarkMode}>
                  <CopyLinkBtn
                    type="button"
                    aria-label="Копіювати шлях до новини"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigator.clipboard.writeText(item.link).then(() => {
                        toast.success("Посилання скопійовано!");
                      });
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
  width: 26px;
  height: 26px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
  color: inherit;
  font-size: 15px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 86px;
  padding: 10px 8px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgb(26, 49, 56);
  color: #fff;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s ease;

  & > svg {
    font-size: 24px;
  }
  &:hover:not(:disabled) {
    background: rgba(255, 179, 108, 0.3);
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

const FilteredNewsCounter = styled.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
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
      const title = doc.querySelector(".tgme_page_title")?.textContent?.trim() || "Приватний Telegram";
      const desc = doc.querySelector(".tgme_page_description")?.textContent?.trim() || "Приватний канал або група.";
      const avatarEl = doc.querySelector(".tgme_page_photo_image");
      const avatar = avatarEl ? avatarEl.getAttribute("src") : "";
      
      return {
        status: "ok",
        items: [{
          title: title,
          description: `${desc}\n\nНадіслати контент / Приєднатися:\n${url}`,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: avatar || "",
          displayImage: avatar || rainbow,
          sourceName: source.name,
          sourceFlag: "🔒",
          sourceHome: url,
          sourceUrl: url,
        }]
      };
    } catch (e) {
      return {
        status: "ok",
        items: [{
          title: "Приватний Telegram Канал",
          description: `Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:\n${url}`,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: "",
          displayImage: rainbow,
          sourceName: source.name,
          sourceFlag: "🔒",
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
      
      const title = textEl ? cleanTelegramText(text).substring(0, 100) : "Повідомлення";
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
        title: title || "Новий допис",
        description: text ? cleanTelegramText(text) : "Перегляньте допис у Telegram.",
        link: link,
        pubDate: date,
        thumbnail: image || channelImage || "",
        displayImage: image || channelImage || rainbow,
        sourceName: channelTitle,
        sourceFlag: "📢",
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
    
    const title = doc.querySelector("header h1")?.textContent?.trim() || doc.querySelector("title")?.textContent || "Telegraph стаття";
    const author = doc.querySelector("header address a")?.textContent || "Telegraph";
    
    const imgEl = doc.querySelector("article img");
    const image = imgEl ? imgEl.getAttribute("src") : "";
    const absoluteImage = image ? (image.startsWith("http") ? image : `https://telegra.ph${image}`) : "";
    
    const paragraphs = Array.from(doc.querySelectorAll("article p")).map(p => p.textContent).join("\n\n");
    const cleanDesc = paragraphs || "Читати повну статтю на Telegraph.";
    
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
        sourceFlag: "📝",
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
                    doc.querySelector(".title_wrap .title")?.textContent?.trim() || "Допис у Hive";
      const desc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content") || 
                   doc.querySelector(".post_cont")?.textContent?.trim().substring(0, 300) || "Деталі допису у спільноті Hive.";
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
          sourceFlag: "🐝",
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
        description: description || "Перегляньте допис у спільноті Hive.",
        link: absoluteLink,
        pubDate: date,
        thumbnail: image || "",
        displayImage: image || rainbow,
        sourceName: source.name,
        sourceFlag: "🐝",
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
                   "Перегляньте дописи у спільноті Hive.";
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
          sourceFlag: "🐝",
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
  const [isSearchActive, setIsSearchActive] = useState(false);

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
      const sourceErrors = [];
      const savedCustom =
        (await localforage.getItem("custom_news_sources")) || [];
      // Старі збережені стрічки Facebook мовчки пропускаємо
      const allSources = [
        ...SOURCES,
        ...savedCustom.filter((source) => !FACEBOOK_QUERY.test(source.url || "")),
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
              name: data.name || "Джерело",
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

      // Завантажуємо одну стрічку: повертає масив новин або кидає помилку
      const loadSource = async (source) => {
        const type = getSourceType(source.url);
        if (type !== "rss" && type !== "youtube") {
          // Telegram спершу беремо через власну функцію (без публічних проксі)
          if (type === "telegram") {
            const viaApi = await tryJsonFeed(
              `/api/news-feed?url=${encodeURIComponent(source.url)}`,
            );
            if (viaApi && viaApi.length > 0) return withSourceInfo(viaApi, source);
          }
          const customData = await fetchCustomSource(source);
          return customData?.items?.length > 0 ? customData.items : [];
        }

        const builtInSource = SOURCES.find((item) => item.url === source.url);
        const localEndpoint = builtInSource
          ? `/api/news-feed?source=${encodeURIComponent(builtInSource.id)}`
          : `/api/news-feed?url=${encodeURIComponent(source.url)}`;

        let feedItems = await tryJsonFeed(localEndpoint);

        // Під час локальної розробки функцій Cloudflare немає — беремо зовнішній ендпоінт
        if (!feedItems && import.meta.env.DEV) {
          feedItems = await tryJsonFeed(`https://stuxia.com${localEndpoint}`);
        }

        if (!feedItems) {
          const res = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.url)}`,
            { signal },
          );
          if (!res.ok) {
            throw new Error(`RSS-конвертер відповів HTTP ${res.status}`);
          }
          const data = await res.json();
          if (data.status !== "ok" || !Array.isArray(data.items)) {
            throw new Error(data.message || "RSS-конвертер повернув некоректну відповідь");
          }
          feedItems = data.items;
        }

        return withSourceInfo(feedItems, source);
      };

      // Усі стрічки паралельно: збій однієї не зачіпає інші
      const activeSources = allSources.filter(
        (source) => !bSourcesList.includes(source.url),
      );
      const settled = await Promise.allSettled(activeSources.map(loadSource));
      settled.forEach((result, i) => {
        if (result.status === "fulfilled") {
          allItems = [...allItems, ...result.value];
          return;
        }
        if (result.reason?.name === "AbortError") return;
        // Технічний текст (напр. "Failed to fetch") лишаємо лише в консолі
        sourceErrors.push(activeSources[i].name);
        console.warn(
          `Не вдалося завантажити новини з ${activeSources[i].name}:`,
          result.reason,
        );
      });
      if (signal.aborted) return;
      if (allItems.length === 0) {
        if (isMounted.current) {
          setLoadError(
            sourceErrors.length > 0
              ? `Не вдалося отримати новини (недоступно: ${sourceErrors.join(", ")}). Перевірте з'єднання або спробуйте оновити сторінку пізніше.`
              : "Зараз немає доступних новин. Спробуйте оновити сторінку пізніше.",
          );
          setHasError(true);
          setLoadProgress(100);
          setLoading(false);
        }
        return;
      }
      if (showLoader && isMounted.current) setLoadProgress(25);

      allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

      // Фільтр новин з урахуванням категорій і власних слів користувача.
      // У «м'якому» режимі заблоковані новини лишаються у стрічці під плашкою.
      const filterPrefs = getNewsFilterPrefs();
      const clean = [];
      const filteredNews = [];
      for (const i of allItems) {
        const reason = getNewsBlockReason(i.title + " " + (i.description || ""), filterPrefs);
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

      // Збільшуємо кількість новин до 45
      // Не більше 10 новин з одного джерела, щоб частіші стрічки не витісняли решту
      const perSourceCount = {};
      const balanced = clean.filter((i) => {
        perSourceCount[i.sourceName] = (perSourceCount[i.sourceName] || 0) + 1;
        return perSourceCount[i.sourceName] <= 10;
      });
      const limited = balanced.slice(0, 45);
      const results = new Array(limited.length);
      const toTranslateIndices = [];
      const stringsToTranslate = [];

      // 1. Перевіряємо кеш та збираємо тексти для пакетного перекладу
      const seenLinks = (await localforage.getItem("seen_news_links")) || [];

      for (let i = 0; i < limited.length; i++) {
        const item = limited[i];
        const cacheKey = `news_trans_${item.link}`;
        const cached = await localforage.getItem(cacheKey);
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
            isNew,
            isBlocked: bNews.includes(encodeURIComponent(item.link)),
            autoBlockReason: item.autoBlockReason,
          };
        } else {
          const cleanDesc = (item.description || "")
            .replace(/<[^>]*>?/gm, "")
            .trim()
            .substring(0, 170);

          toTranslateIndices.push(i);
          stringsToTranslate.push(item.title);
          stringsToTranslate.push(cleanDesc);
        }
      }

      // 2. Пакетний переклад з безпечним роздільником ___ та перевіркою довжини
      if (stringsToTranslate.length > 0) {
        if (showLoader && isMounted.current) setLoadProgress(40);

        let currentBatchStrings = [];
        let currentBatchIndices = [];
        let currentLen = 0;
        const batches = [];

        for (let i = 0; i < toTranslateIndices.length; i++) {
          const title = stringsToTranslate[i * 2];
          const desc = stringsToTranslate[i * 2 + 1];
          const pairLen = title.length + desc.length + 10; // Довжина тексту + роздільники

          if (currentLen + pairLen > 4500 && currentBatchStrings.length > 0) {
            batches.push({
              strings: currentBatchStrings,
              indices: currentBatchIndices,
            });
            currentBatchStrings = [];
            currentBatchIndices = [];
            currentLen = 0;
          }
          currentBatchStrings.push(title, desc);
          currentBatchIndices.push(toTranslateIndices[i]);
          currentLen += pairLen;
        }
        if (currentBatchStrings.length > 0) {
          batches.push({
            strings: currentBatchStrings,
            indices: currentBatchIndices,
          });
        }
        // Переклад однієї пари «заголовок + опис»; null, якщо не вдався або роздільник зіпсовано
        const translatePair = async (title, desc) => {
          const combined = await translateText(`${title} ___ ${desc}`);
          if (combined === null) return null;
          const parts = combined.split(/\s*___\s*/);
          return parts.length === 2 ? parts : null;
        };

        for (const batch of batches) {
          const translatedCombined = await translateText(
            batch.strings.join(" ___ "),
          );
          let splitResults =
            translatedCombined === null
              ? null
              : translatedCombined.split(/\s*___\s*/);
          // Якщо пакетний переклад зіпсував роздільники — перекладаємо кожну новину окремо
          const batchValid =
            splitResults && splitResults.length === batch.strings.length;

          for (let j = 0; j < batch.indices.length; j++) {
            const idx = batch.indices[j];
            const item = limited[idx];
            const originalTitle = batch.strings[j * 2];
            const originalDesc = batch.strings[j * 2 + 1];
            const bestImg =
              extractImageFromContent(item) ||
              rainbow;

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
              isNew: !seenLinks.includes(item.link),
              isBlocked: bNews.includes(encodeURIComponent(item.link)),
            };

            // Кешуємо лише успішний переклад, щоб оригінал не застряг як «переклад»
            if (pair) {
              await localforage.setItem(
                `news_trans_${item.link}`,
                translatedItem,
              );
            }
            // Причину автоблоку не кешуємо — вона залежить від поточних налаштувань фільтра
            results[idx] = { ...translatedItem, autoBlockReason: item.autoBlockReason };
          }
        }
      }

      if (showLoader && isMounted.current) setLoadProgress(100);
      const allKeys = await localforage.keys();
      const newsCacheKeys = allKeys.filter((k) => k.startsWith("news_trans_"));
      const ogCacheKeys = allKeys.filter((k) => k.startsWith("og_img_"));
      const currentActiveNewsKeys = limited.map((i) => `news_trans_${i.link}`);
      const currentActiveOgKeys = limited.map((i) => `og_img_${i.link}`);

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

      if (isMounted.current) {
        setItems(results);
        setLastUpdated(new Date());
      }
    } catch (e) {
      if (e.name === "AbortError" || e.message?.includes("aborted")) {
        console.log("Запит було скасовано");
        return;
      }
      console.error("Справжня помилка завантаження:", e);
      if (isMounted.current) {
        setLoadError("Сталася помилка під час завантаження новин. Спробуйте ще раз пізніше.");
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
  const displayedItems = latestPerSource.slice(0, 45).map(withMuted);
  // «Більше новин»: 4 додаткові, яких немає у стрічці
  const moreItems = restItems.slice(0, 4).map(withMuted);
  const infiniteItems =
    displayedItems.length > 0
      ? [...displayedItems, ...displayedItems, ...displayedItems]
      : [];
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

  useEffect(() => {
    if (carouselRef.current && displayedItems.length > 0) {
      const oneSetWidth = carouselRef.current.scrollWidth / 3;
      carouselRef.current.scrollLeft = oneSetWidth;
      requestAnimationFrame(updateCenteredSlide);
    }
  }, [displayedItems.length, filterSources, updateCenteredSlide]);
  useEffect(() => {
    const init = async () => {
      try {
        const endTime = await localforage.getItem("news_refresh_cooldown_end");
        if (endTime) {
          const remaining = Math.ceil((endTime - Date.now()) / 1000);
          if (remaining > 0) setCooldown(remaining);
        }
      } catch (err) {}
      // Перший запуск із показом лоадера
      getData(true);
    };

    init();
    const interval = setInterval(() => getData(false), 60 * 60 * 1000);
    return () => {
      clearInterval(interval);
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
    
    if (customSources.length >= 5) {
      alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");
      return;
    }

    try {
      let resolvedUrl = inputUrl;
      let name = "";
      let flag = <PiNewspaperClippingFill/>;
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
        alert("Здійснюється пошук ID YouTube каналу...");
        const channelId = await resolveYoutubeChannelId(resolvedUrl);
        if (channelId) {
          resolvedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
          name = `YouTube: ${domain}`;
          flag = <FaYoutube/>;
        } else {
          alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");
          return;
        }
      } else if (type === "telegram") {
        const parts = resolvedUrl.split("/");
        const channelName = parts[parts.length - 1] || parts[parts.length - 2];
        name = `Telegram: ${channelName}`;
        flag = resolvedUrl.includes("+") || resolvedUrl.includes("joinchat") ? "🔒" : "📢";
        home = resolvedUrl;
      } else if (type === "telegraph") {
        name = `Telegraph`;
        flag = <PiNewspaperClippingFill/>;
        home = "https://telegra.ph";
      } else if (type === "hive") {
        const match = resolvedUrl.match(/withhive\.com\/([a-zA-Z0-9_-]+)/);
        const game = match ? match[1] : "Hive";
        name = `Hive: ${game}`;
        flag = <GiTreeBeehive/>;
        home = `https://community.withhive.com/${game}`;
      } else if (/^bsky\.app$/i.test(domain) && urlObj.pathname.startsWith("/profile/")) {
        name = `Bluesky: ${urlObj.pathname.split("/")[2] || domain}`;
        flag = "🦋";
      } else if (/^\/@[^/]+\/?$/.test(urlObj.pathname)) {
        name = `Mastodon: ${urlObj.pathname.replace(/\//g, "")}@${domain}`;
        flag = "🐘";
      } else {
        name = domain;
        flag = <PiNewspaperClippingFill/>;
      }
      
      const newSource = {
        url: resolvedUrl,
        name: (typeof nameOverride === "string" && nameOverride) || name,
        flag: flag,
        home: home,
        type: type
      };

      const saved = (await localforage.getItem("custom_news_sources")) || [];
      if (!saved.find((s) => s.url === resolvedUrl)) {
        if (saved.length >= 5) {
          alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");
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
        alert("Це джерело вже додано.");
      }
    } catch (e) {
      console.error(e);
      alert(
        "Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)",
      );
    }
  };

  const handleReport = async (item, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert("Тільки авторизовані користувачі можуть залишати скарги.");
      return;
    }

    if (
      !window.confirm(
        "Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)",
      )
    )
      return;

    try {
      const { auth, db, doc, getDoc, writeBatch, serverTimestamp } = await loadFirebase();
      if (typeof auth.authStateReady === "function") await auth.authStateReady();
      const firebaseUser = auth.currentUser;
      // Скарги лише від справжніх акаунтів: анонімні входи сервер відхиляє
      if (!firebaseUser || firebaseUser.isAnonymous) {
        alert("Щоб поскаржитися, увійдіть в акаунт ще раз.");
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
        alert("Ви вже скаржилися на цю новину сьогодні.");
        return;
      }
      // Добовий ліміт скарг на акаунт (перевіряють і правила Firestore)
      const reportsUsed = usedTodayFromCloud(
        configDoc.exists() ? configDoc.data() : {},
        CLOUD_LIMITS.reports,
      );
      if (reportsUsed >= CLOUD_LIMITS.reports.limit) {
        alert(`Можна подати не більше ${CLOUD_LIMITS.reports.limit} скарг на добу.`);
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
            ...(rssData?.name ? {} : { name: String(item.sourceName || "Джерело").slice(0, 100) }),
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

      alert("Скаргу прийнято. Дякуємо!");
      getData(true, true);
    } catch (err) {
      console.warn("Помилка відправки скарги:", err);
      alert("Помилка відправки скарги.");
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
            `Використано всі ${MUTE_SYNC_DAILY_LIMIT} синхронізацій на сьогодні. Далі зміни зберігатимуться лише на цьому пристрої.`,
            { id: "mute-sync-limit", duration: 4500 },
          );
        }
      } else {
        await savePending();
        toast(
          `Ліміт синхронізації вичерпано (${MUTE_SYNC_DAILY_LIMIT}/${MUTE_SYNC_DAILY_LIMIT} за добу). Зміну збережено лише на цьому пристрої.`,
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
    if (!window.confirm("Видалити це джерело новин?")) return;
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
      alert("Помилка видалення джерела.");
    }
  };
  const layout = user?.newsLayout || [];
  const isVisible = (key) =>
    layout.find((item) => item.key === key)?.visible !== false;
  const showImage = true;
  const showTitle = isVisible("title");
  const showDescription = isVisible("description");

  const [isFullscreenNewsOpen, setIsFullscreenNewsOpen] = useState(false);

  return (
    <NewsDiv ref={newsSectionRef}>
      <Decoder $isStickyBgMode={isStickyBgMode} $isDarkMode={$isDarkMode}>
        <AihelpTitle $isDarkMode={$isDarkMode}>
          <FilterBtn
            ref={(el) => registerRef('newsHeader', el)}
            $isDarkMode={$isDarkMode}
            onClick={() => setIsFullscreenNewsOpen(true)}
            style={{ marginLeft: "5px", padding: "2px", fontSize: "15px", fontWeight: "600", background: "none"}}
          >
            Натисніть для додавання стрічки новин
          </FilterBtn>
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
                  Інструкція
                </FilterBtn>
                <FilterBtn
                  $isDarkMode={$isDarkMode}
                  $active={filterSources.includes("all")}
                  onClick={() => handleToggleFilter("all")}
                >
                  {filterSources.includes("all") ? "☑" : "☐"} Усі
                </FilterBtn>
                {SOURCES.map((s) => (
                  <FilterBtn
                    key={s.name}
                    $isDarkMode={$isDarkMode}
                    $active={filterSources.includes(s.name)}
                    onClick={() => handleToggleFilter(s.name)}
                  >
                    {filterSources.includes(s.name) ? "☑" : "☐"} {s.name}
                  </FilterBtn>
                ))}
                {customSources.map((s) => (
                  <FilterBtn
                    key={s.url}
                    $isDarkMode={$isDarkMode}
                    $active={filterSources.includes(s.name)}
                    onClick={() => handleToggleFilter(s.name)}
                  >
                    {filterSources.includes(s.name) ? "☑" : "☐"} {s.name}
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
                      aria-label="Видалити джерело"
                    >
                      ×
                    </span>
                  </FilterBtn>
                ))}
                {customSources.length < 5 && (
                  <FilterBtn
                    $isDarkMode={$isDarkMode}
                    onClick={() => setIsAddingSource(!isAddingSource)}
                    style={{ borderStyle: "dashed" }}
                  >
                    {isAddingSource ? "Скасувати" : "Додати стрічку"}
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
                  Чорний список ({blockedSources.length})
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
                        placeholder="Введіть URL RSS (Н-д: https://rss.com/day)"
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
                        Додати
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
        <div
          style={{ textAlign: "center", color: "gray", padding: "60px 20px" }}
        >
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
              ? "Помилка завантаження!"
              : `Шукаємо цікаві новини: ${loadProgress}%`}
          </div>
          <ProgressBar $isDarkMode={$isDarkMode}>
            <ProgressBarFill $progress={loadProgress} $isError={hasError} />
          </ProgressBar>
        </div>
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
    {infiniteItems.map((item, index) => (
      <CarouselSlide
        data-news-slide
        key={`${item.link}-${index}`}
        $distanceFromCenter={
          centeredSlideIndex === null
            ? 2
            : Math.min(Math.abs(centeredSlideIndex - index), 2)
        }
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
        />
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
          <MoreNewsButton onClick={() => setShowMoreNews(true)}>
            Більше новин, джерела над кнопкою
          </MoreNewsButton>
          <FilteredNewsCounter $isDarkMode={$isDarkMode}>
            За сьогодні відфільтровано {filteredNewsCount} небажаних новин.
          </FilteredNewsCounter>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "white", padding: "14px", background: "#0000009c", marginTop: "20px", fontSize: "12px" }}>
          {hasError
            ? loadError
            : items.length === 0
              ? "Усі отримані новини приховані фільтром вмісту."
              : "Для обраних джерел поки немає новин."}
        </div>
      )}

      {selectedNews && isAiModalOpen && (
        <Suspense fallback={null}>
          <NewsAiModal
            isOpen={isAiModalOpen}
            onClose={() => setIsAiModalOpen(false)}
            newsItem={selectedNews}
            isDarkMode={$isDarkMode}
          />
        </Suspense>
      )}
      {isHelpModalOpen && (
        <InfoModal
          isOpen={isHelpModalOpen}
          onClose={() => setIsHelpModalOpen(false)}
          initialFaqQuestion="Новини: покроковий посібник"
        />
      )}
      {showBlacklist && (
        <ModalOverlay onClick={() => setShowBlacklist(false)}>
          <ModalContent
            $isDarkMode={$isDarkMode}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={() => setShowBlacklist(false)}>✕</CloseButton>
            <h2 style={{ marginTop: 0 }}>Чорний список (карантин 24 год)</h2>
            <p style={{ fontSize: "13px" }}>
              Ці RSS-джерела отримали багато скарг і відключені для
              всіх користувачів.
            </p>
            {blockedSources.length === 0 ? (
              <p>Наразі немає заблокованих джерел.</p>
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
        </ModalOverlay>
      )}

      {createPortal(
        <AnimatePresence>
          {showMoreNews && (
            <FullscreenModalOverlay
              key="more-news-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowMoreNews(false)}
              style={{ alignItems: "center", justifyContent: "center", padding: "8px" }}
            >
              <MoreNewsPanel onClick={(e) => e.stopPropagation()}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                    paddingBottom: "6px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <h2 style={{ margin: 0, color: "#ffaa00", fontSize: "15px" }}>
                    Більше новин
                  </h2>
                  <CloseButton onClick={() => setShowMoreNews(false)}>✕</CloseButton>
                </div>
                <MoreNewsGrid>
                  {moreItems.map((item) => (
                    <NewsCard
                      key={item.link}
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
                    />
                  ))}
                </MoreNewsGrid>
              </MoreNewsPanel>
            </FullscreenModalOverlay>
          )}
        </AnimatePresence>,
        document.body,
      )}
      {createPortal(
        <AnimatePresence>
          {isFullscreenNewsOpen && (
            <FullscreenModalOverlay
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  zIndex: "3000",
                  margin: "0 auto 16px auto",
                  paddingBottom: "3px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <h2 style={{ margin: 0, color: "#ffaa00", fontSize: "15px" }}>
                  Повноекранні новини та керування стрічками
                </h2>
                <CloseButton
                  onClick={() => setIsFullscreenNewsOpen(false)}
                  style={{ fontSize: "16px", padding: "6px 16px" }}
                >
                  Закрити
                </CloseButton>
              </div>

              <FullscreenModalContent>
                {/* Панель керування стрічками новин */}
                <div
                  style={{
                    background: "rgba(20, 20, 20, 0.8)",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ marginBottom: "10px", fontWeight: "600", fontSize: "14px" }}>
                    Налаштування та вибір авторів / джерел:
                  </div>
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
                    placeholder="Додати стрічку: назва сайту або посилання (RSS, YouTube, Telegram, Mastodon, Bluesky, Hive)"
                  />
                  {isSearchActive ? (
                    <div onMouseDown={(e) => e.preventDefault()}>
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
                            {FACEBOOK_NOTE}
                          </div>
                        )}
                        {newUrl.trim() && !FACEBOOK_QUERY.test(newUrl) && (
                          <RecoItem onClick={() => handleAddSource()}>
                            <FiPlus />
                            Додати «{newUrl.trim().length > 40 ? newUrl.trim().slice(0, 40) + "…" : newUrl.trim()}»
                          </RecoItem>
                        )}
                        {RECOMMENDED_SOURCES.filter((r) => {
                          const q = newUrl.trim().toLowerCase();
                          return !q || r.name.toLowerCase().includes(q) || r.url.toLowerCase().includes(q);
                        }).map((r) => {
                          const added =
                            SOURCES.some((x) => x.url === r.url) ||
                            customSources.some((x) => x.url === r.url);
                          return (
                            <RecoItem
                              key={r.url}
                              disabled={added || customSources.length >= 5}
                              onClick={() => handleAddSource(r.url, r.name)}
                            >
                              <FaRss />
                              {r.name}
                              {added && <span style={{ fontSize: "11px" }}>✓ Додано</span>}
                            </RecoItem>
                          );
                        })}
                      </RecoGrid>
                    </div>
                  ) : (
                    <SourceTileGrid>
                    <SourceTile
                      $isDarkMode={$isDarkMode}
                      onClick={() => setIsHelpModalOpen(true)}
                    >
                      <MdHelpOutline />
                      Інструкція
                    </SourceTile>
                    <SourceTile
                      $isDarkMode={$isDarkMode}
                      $active={filterSources.includes("all")}
                      onClick={() => handleToggleFilter("all")}
                    >
                      <MdSelectAll />
                      {filterSources.includes("all") ? "☑" : "☐"} Усі
                    </SourceTile>
                    {SOURCES.map((s) => (
                      <SourceTile
                        key={s.name}
                        $isDarkMode={$isDarkMode}
                        $active={filterSources.includes(s.name)}
                        onClick={() => handleToggleFilter(s.name)}
                      >
                        <FaRss />
                        {filterSources.includes(s.name) ? "☑" : "☐"} {s.name}
                      </SourceTile>
                    ))}
                    {customSources.map((s) => (
                      <SourceTile
                        key={s.url}
                        $isDarkMode={$isDarkMode}
                        $active={filterSources.includes(s.name)}
                        onClick={() => handleToggleFilter(s.name)}
                      >
                        <FaRss />
                        <span>{filterSources.includes(s.name) ? "☑" : "☐"} {s.name}</span>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveSource(s.url);
                          }}
                          style={{
                            position: "absolute",
                            top: "4px",
                            right: "10px",
                            fontSize: "18px",
                            color: "#ff4d4d",
                            fontWeight: "bold",
                          }}
                          aria-label="Видалити джерело"
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
                      Чорний список ({blockedSources.length})
                    </SourceTile>
                  </SourceTileGrid>
                  )}

                </div>
              </FullscreenModalContent>
            </FullscreenModalOverlay>
          )}
        </AnimatePresence>,
        document.body
      )}
    </NewsDiv>
  );
};

export default News;
