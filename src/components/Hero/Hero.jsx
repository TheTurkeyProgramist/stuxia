import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { createPortal } from "react-dom";
import { FaMountainCity } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import planes from "../../photos/programs/youtub/planes.webp";
import castle from "../../photos/vip-modal/castle.webp"
import { GiPalette } from "react-icons/gi";
import {
  FiClock,
  FiDownload,
  FiDroplet,
  FiGrid,
  FiImage,
  FiPrinter,
  FiRefreshCw,
  FiRotateCw,
  FiSearch,
  FiShuffle,
  FiSun,
  FiUploadCloud,
  FiVideo,
  FiX,
  FiZap,
  FiZoomIn,
} from "react-icons/fi";
import styled, { keyframes, css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdSettingsSuggest, MdMore, MdSearch, MdWallpaper, MdAutoAwesome } from "react-icons/md";
import {
  addCustomDay,
  removeCustomDay,
} from "../../features/counter/Counter.js";
import localforage from "localforage";
import hills from "../../photos/hero-header/fog.webp";
import herotext from "../../photos/hero-header/herotext.webp";
import village from "../../photos/fan-art/village.webp"
import villagePreview from "../../photos/fan-art/village.webp?w=128&format=webp&quality=50";
import faded from "../../photos/fan-art/faded.webp";
import fadedPreview from "../../photos/fan-art/faded.webp?w=128&format=webp&quality=50";
import { DEFAULT_BGS } from "./defaultBgs";
import { findCityInDatabase, UKRAINE_CITIES_40 } from "../../utils/citiesDatabase";
import News from "../News/News.jsx";
import SearchModeModal from "./SearchModeModal.jsx";
import React_lazy_Aihelp from "../Aihelp/Aihelp.jsx";
import toast, { Toaster } from 'react-hot-toast';
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import turkeytwoPreview from "../../photos/vip-images/turkeys/turkeytwo.webp?w=128&format=webp&quality=50";
import niceronePreview from "../../photos/vip-images/dinofroz/nicerone.webp?w=128&format=webp&quality=50";
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
  FloatingPortal,
  FloatingArrow,         
} from "@floating-ui/react";
import TimezoneModal from "./TimezoneModal.jsx";
import BgModal from "./BgModal.jsx";
const CHANGE_BG_PREVIEW_IMAGES = [
  villagePreview,
  fadedPreview,
  niceronePreview,
  turkeytwoPreview,
];
const bgPreviewSwap = keyframes`
  from { opacity: 0.35; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;
const bgCardThumbnails = {
  [village]: {
    src: village,
  },
  [faded]: {
    src: faded,
  },
};

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
const showThemeAlert = (message, isDarkMode) => {
  toast(message, {
    duration: 4000,
    style: {
      backgroundColor: isDarkMode ? "#0c0c0cbf" : "#fdff98bb",
      color: isDarkMode ? "#ffffff" : "#1a1a1a",
      border: "2px solid #00afce",
      borderRadius: "6px",
      boxShadow: `0 4px 12px rgba(0, 0, 0, ${isDarkMode ? "0.5" : "0.15"})`,
      fontSize: "13px",
      fontWeight: "500",
      zIndex: "10000",
      padding: "10px 16px",
      backdropFilter: "blur(4px)", // Додає приємне розмиття фону під напівпрозорим кольором
    },
    icon: '⚠️', 
  });
};
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;
const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;
const slideUpHero = keyframes`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;
const fadeInContent = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const HeroDiv = styled.div`
  position: relative;
  width: 100%;
  height: 632px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;
const HeroDecors = styled.div`
  display: block;
  width: 212px;
  margin-top: 75px;
  height: 78px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(120px) scale(1.5);
  animation: ${(props) =>
    props.$start
      ? css`
          ${slideUpHero} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `
      : "none"};
`;
const DelayedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${(props) =>
    props.$start
      ? css`
          ${fadeInContent} 1s ease-out forwards
        `
      : "none"};
  animation-delay: ${(props) => (props.$start ? "1.5s" : "0s")};
`;
const panAnimation = keyframes`
  0% { background-position-x: 0%; }
  50% { background-position-x: 100%; }
  100% { background-position-x: 0%; }
`;

const isVideoSource = (src) => {
  if (!src) return false;
  if (src instanceof Blob) return src.type.startsWith("video/");
  if (typeof src !== "string") return false;
  return (
    src.includes(".mp4") ||
    src.includes(".webm") ||
    src.includes(".ogg") ||
    src.includes(".mov") ||
    src.startsWith("data:video/") ||
    src.startsWith("blob:")
  );
};

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};





export const mergeCitySuggestions = (
  existingSuggestions = [],
  newSuggestions = [],
) => {
  const seen = new Set();
  return [...(existingSuggestions || []), ...(newSuggestions || [])].filter(
    (city) => {
      const key = `${city?.lat ?? ""}-${city?.lon ?? ""}-${city?.name ?? ""}-${city?.country ?? ""}`;
      if (!city || seen.has(key)) return false;
      seen.add(key);
      return true;
    },
  );
};

const BgLayerStyled = styled.div`
  position: ${(props) => (props.$isStickyBgMode ? "fixed" : "absolute")} !important;
  width: ${(props) => (props.$isStickyBgMode ? "100vw" : "100%")} !important;
  height: ${(props) => (props.$isStickyBgMode ? "100vh" : "100%")} !important;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition:
    opacity ${(props) => props.$transition}s ease-in-out,
    position 0.5s ease,
    width 0.5s ease,
    height 0.5s ease,
    z-index 0s;
  transform: translateZ(0)
    scale(
      ${(props) => (props.$zoom || 1) * (props.$rotationScale || 1)}
    )
    rotate(${(props) => props.$rotation || 0}deg);
  transform-origin: ${(props) => props.$focalX}% ${(props) => props.$focalY}%;
  filter: ${(props) => {
    const filters = [];
    if (props.$blur > 0) filters.push(`blur(${props.$blur}px)`);
    if (props.$pixelation > 0.5) filters.push("url(#pixelate-hero)");
    return filters.length ? filters.join(" ") : "none";
  }};
  z-index: ${(props) => (props.$isStickyBgMode ? "-10" : "-2")} !important;
  will-change: opacity, transform;
  backface-visibility: hidden;
  animation: ${(props) =>
    props.$panEnabled && props.$zoom > 1
      ? css`
          ${panAnimation} ${props.$panSpeed || 6}s infinite linear
        `
      : "none"};
`;

const AiModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200000;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(18px) saturate(0.65);
  -webkit-backdrop-filter: blur(18px) saturate(0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${fadeIn} 180ms ease-out;
`;

const AiModalContainer = styled.div`
  width: min(900px, calc(100vw - 16px));
  max-height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  animation: ${fadeIn} 220ms ease-out;
`;

const AiModalBody = styled.div`
  flex: 1;
  overflow: hidden;
  background: ${(p) => (p.$isDarkMode ? "#0e0e16" : "#f8f8fc")};
`;

// Кеш blob URL для відео-рядків — зберігає між монтуваннями, уникає повторних fetch
const videoBlobCache = new Map();

const BgLayer = React.memo((props) => {
  const {
    $image,
    $active,
    $focalX,
    $focalY,
    $videoStart,
    $videoEnd,
    $videoPlaybackSpeed,
  } = props;
  const [blobUrl, setBlobUrl] = useState(null);
  const videoRef = useRef(null);
  const layerRef = useRef(null);
  const isVideo = isVideoSource($image);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(
    typeof document === "undefined" || !document.hidden,
  );

  // Не декодуємо відео, коли Hero поза екраном або вкладка прихована
  useEffect(() => {
    if (!isVideo) return;
    const el = layerRef.current;
    let observer;
    if (el && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0 },
      );
      observer.observe(el);
    }
    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isVideo]);

  const shouldPlay = $active && inView && tabVisible;

  useEffect(() => {
    if (!isVideo) {
      setBlobUrl(null);
      return;
    }
    if ($image instanceof Blob) {
      const objectUrl = URL.createObjectURL($image);
      setBlobUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else if (typeof $image === "string" && $image) {
      // Повертаємо кешований blob URL одразу, без повторного fetch
      if (videoBlobCache.has($image)) {
        setBlobUrl(videoBlobCache.get($image));
        return;
      }
      let active = true;
      fetch($image)
        .then((res) => res.blob())
        .then((blob) => {
          if (!active) return;
          const objectUrl = URL.createObjectURL(blob);
          videoBlobCache.set($image, objectUrl);
          setBlobUrl(objectUrl);
        })
        .catch(() => {
          if (active) setBlobUrl(null);
        });
      return () => {
        active = false;
        // НЕ викликаємо revokeObjectURL тут — URL залишається в кеші для повторного використання
      };
    }
  }, [$image, isVideo]);

  // Відкликаємо blobUrl для Blob-об'єктів при зміні (уникаємо витоку пам'яті)
  const prevBlobUrlRef = useRef(null);
  useEffect(() => {
    // Тільки для Blob-об'єктів (не кешовані рядкові URL)
    if (!($image instanceof Blob)) return;
    const prev = prevBlobUrlRef.current;
    if (prev && prev !== blobUrl) {
      URL.revokeObjectURL(prev);
    }
    prevBlobUrlRef.current = blobUrl;
  }, [blobUrl, $image]);

  const url =
    $image instanceof Blob
      ? blobUrl
      : typeof $image === "string"
      ? blobUrl || $image
      : "";

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (shouldPlay) {
      if ($videoPlaybackSpeed && vid.playbackRate !== $videoPlaybackSpeed) {
        vid.playbackRate = $videoPlaybackSpeed;
      }
      if ($videoStart != null && vid.currentTime < $videoStart && vid.paused) {
        vid.currentTime = $videoStart;
      }
      if (vid.paused) {
        const p = vid.play();
        if (p !== undefined) p.catch(() => {});
      }
    } else {
      if (!vid.paused) {
        vid.pause();
      }
    }
  }, [shouldPlay, $videoStart, $videoPlaybackSpeed, url]);

  const videoStart = $videoStart ?? 0;
  const videoEnd = $videoEnd ?? null; // null = play to natural end

  return (
    <BgLayerStyled ref={layerRef} {...props}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={url}
          preload={$active ? "auto" : "none"}
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          onCanPlay={(e) => {
            if (shouldPlay) {
              const vid = e.target;
              if ($videoPlaybackSpeed && vid.playbackRate !== $videoPlaybackSpeed) {
                vid.playbackRate = $videoPlaybackSpeed;
              }
              if (vid.paused) {
                const p = vid.play();
                if (p !== undefined) p.catch(() => {});
              }
            }
          }}
          onTimeUpdate={(e) => {
            if (!videoEnd) return;
            const t = e.target.currentTime;
            const dur = e.target.duration;
            if (videoEnd > 0 && t >= videoEnd && dur && videoEnd < dur - 0.5) {
              e.target.currentTime = videoStart;
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${$focalX}% ${$focalY}%`,
          }}
        />
      ) : (
        <img
          src={url || hills}
          alt="Геройський фон"
          fetchPriority={$active ? "high" : "low"}
          loading={$active ? "eager" : "lazy"}
          decoding="async"
          onLoad={(e) => {
            // Одразу декодуємо картинку, щоб текстура була готова для GPU
            // до першого показу (без підвисання при зміні фону).
            e.currentTarget.decode?.().catch(() => {});
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${$focalX}% ${$focalY}%`,
            display: "block",
          }}
        />
      )}
    </BgLayerStyled>
  );
});

const Overlay = styled.div`
  position: ${(props) => (props.$isStickyBgMode ? "fixed" : "absolute")} !important;
  top: 0;
  left: 0;
  width: ${(props) => (props.$isStickyBgMode ? "100vw" : "100%")} !important;
  height: ${(props) => (props.$isStickyBgMode ? "100vh" : "100%")} !important;
  background: rgba(0, 0, 0, ${(props) => props.$opacity});
  z-index: ${(props) => (props.$isStickyBgMode ? "-9" : "-1")} !important;
  pointer-events: none;
  transition:
    background 0.5s ease,
    width 0.5s ease,
    height 0.5s ease;
`;
const HeroDecor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const HeroFix = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 0;
  }
`;
const HeroFi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const HeroDate = styled.div`
  color: ${(props) => (props.$isDarkMode ? "#f4f7fb" : "#20242b")};
  font-size: 13px;
  text-align: right;
  font-weight: 600;
  width: 100%;
  min-height: 42px;
  box-sizing: border-box;
  background: transparent;
  padding: 6px 12px;
  border-bottom: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
    gap: 8px;
    padding: 6px 9px;

  }
`;

const HeroControls = styled.div`
 display: flex;
 flex: 0 0 auto;
 flex-direction: column;
 align-items: flex-start;
 gap: 2px;
`;

const TimezoneButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border: none;
  gap: 3px;
  border-radius: 6px;
  padding: 0px 12px;
  background: transparent;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#30343b")};
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"};
  }
`;
const FestiveOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2000;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.1) 0%,
    transparent 70%
  );
  border: 4px solid rgba(255, 215, 0, 0.15);
  box-shadow: inset 0 0 50px rgba(255, 215, 0, 0.2);
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 2s ease;

  &::after {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${(props) => props.$color || "gold"};
    font-size: 14px;
    font-weight: 900;
    text-shadow: 0 0 10px black;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const BrowserSearchPanel = styled.div`
  width: min(860px, calc(100vw - 8px));
  box-sizing: border-box;
  border: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)")};
  border-radius: 12px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(18, 22, 29, 0.96)" : "rgba(248, 250, 252, 0.97)"};
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(12px);
`;

const ModePicker = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const modeIconEnter = keyframes`
  from { opacity: 0; transform: scale(0.75); }
  to { opacity: 1; transform: scale(1); }
`;

const ModePreviewIcon = styled.span`
  display: grid;
  width: 18px;
  height: 18px;
  flex: 0 0 16px;
  place-items: center;
  animation: ${modeIconEnter} 300ms ease both;
`;

const ModePreviewText = styled.span`
  white-space: nowrap;
  animation: ${modeIconEnter} 300ms ease both;
`;

const ModeIconBtn = styled.button`
  width: 176px;
  box-sizing: border-box;
  height: 19px;
  border-radius: 6px;
  border: none;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"};
  color: ${(props) => (props.$isDarkMode ? "#f2f5f8" : "#30343b")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  padding: 0 4px;
  flex-shrink: 0;
  transition: background 0.2s ease;
  &:hover { background: #353988; }
`;

const CoordinatesContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CoordinateInput = styled.div`
  display: flex;
  flex: 1 1 180px;
  min-width: 0;
  input {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    padding: 0 12px;
    font-family: var(--font-family);
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: ${(p) => (p.$isDarkMode ? "#10151c" : "#fff")};
    color: ${(p) => (p.$isDarkMode ? "#f4f7fb" : "#20242b")};
    font-weight: 500;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: ${(p) => (p.$isDarkMode ? "#aab4c0" : "#68717d")};
    }

    &:hover,
    &:focus {
      border-color: ${(p) => (p.$isDarkMode ? "#ecb900" : "#00fbff")};
    }

    &:focus {
      box-shadow: inset 0 0 0 1px
        ${(p) => (p.$isDarkMode ? "#ecb900" : "#00fbff")};
    }
  }
`;

const CoordinateSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 96px;
  height: 52px;
  padding: 0 14px;
  border: none;
  border-radius: 8px;
  background: #2f81f7;
  color: #fff;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: #1f6feb;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
const HeroFormater = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const SearchBorder = styled.svg`
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;

  g {
    opacity: 0;
  }

  rect {
    fill: none;
    stroke: url(#search-border-gradient);
    stroke-width: 1.4px;
    stroke-linecap: round;
    stroke-dasharray: 1000 0;
    filter: url(#search-border-glow);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) =>
    props.$isDarkMode ? "#10151c" : "#ffffff"};

  &:has(> input:hover) ${SearchBorder} rect,
  &:has(> input:focus) ${SearchBorder} rect {
    opacity: 1;
  }
`;

const HeroInput = styled.input`
  width: 100%;
  height: 52px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => (p.$isDarkMode ? "#ffffff" : "#040404")};
  padding: 0 12px;
  background: ${(p) => (p.$isDarkMode ? "#10151c" : "#ffffff")};
  border-radius: 8px;
  border: 1px solid transparent;
  outline: none;
  box-sizing: border-box;

  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    color: ${(p) => (p.$isDarkMode ? "#f3efef" : "#000000")};
  }
`;
const ClearButton = styled.button`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border-left: 3px solid black;
  border-top: 1px solid black;
  cursor: pointer;
  font-size: 30px;
  color: rgb(2, 2, 2);
  background: rgb(183, 101, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  width: 30px;
  transition: all 0.2s;
  &:hover {
    font-weight: bold;
  }
  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`;
const HeroInfo = styled.div`
  display: ${(props) => (props.$desktopOnly ? "none" : "block")};
  width: 100%;
  color: ${(props) => (props.$isDarkMode ? "#f4f7fb" : "#30343b")};
  font-size: 12px;
  height: 40px; 
  line-height: 1.4;
  text-align: center;

  @media (min-width: 560px) {
    display: block;
  }

  @media (max-width: 559px) {
    display: ${(props) => (props.$desktopOnly ? "none" : "block")};
  }
`;
const SuggestionsList = styled.div`
  position: absolute;
  top: 100%;
  align-items: center;
  background: ${(props) => (props.isDarkMode ? "#fefefeec" : "#000000da")};
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  width: 99.7%;
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid rgb(0, 0, 0);
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.85) rgba(0, 0, 0, 0.12);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.08);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ffb36c 0%, #ff8c2b 100%);
    border-radius: 999px;
  }
`;

const SuggestionItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 2px;
  border-top: 1px solid #eee;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: ${(props) => (props.isDarkMode ? "#050505fb" : "#f4f2f2")};
  &:hover {
    background: skyblue;
    color: white;
  }
`;


const Tag = styled.span`
    color: ${(props) => (props.$isDarkMode ? "#fbfbfb" : "#060606")};
  flex: 1;
  text-align: right;
  font-size: 12px;
`;
const LoadMoreButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${(props) => (props.isDarkMode ? "black" : "white")};
  transition: background-color 0.3s ease; 
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-size: 13px;
  &:hover {
    background: ${(props) => (props.isDarkMode ? "#220150" : "#ffcc00")};
  }
`;

const ChangeBgButton = styled.button`
  position: absolute;
  top: 40px;
  gap: 6px;
  left: 4px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 148px;
  height: 70px;
  border-radius: 5px;
  cursor: pointer;
  padding: 4px 6px;
  z-index: 100;
  transition: all 0.3s;
  font-size: 14px;
  backdrop-filter: blur(5px);
  &:hover {
    background: #1d5b69;
    transform: scale(1.1);
  }
`;

const ChangeBgPreviewGroup = styled.span`
  display: flex;
  gap: 2px;
  flex: 0 0 auto;
`;

const ChangeBgPreview = styled.img`
  width: 67px;
  height: 35px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  animation: ${bgPreviewSwap} 0.45s ease-out both;
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
        <FloatingPortal>
          <TooltipBox
            ref={refs.setFloating}
            $isDarkMode={isDarkMode}
            style={{ ...floatingStyles, ...transitionStyles }}
            {...getFloatingProps()}
          >
            {content}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={bgTheme}
              stroke={borderTheme}
              strokeWidth={1}
            />
          </TooltipBox>
        </FloatingPortal>
      )}
    </>
  );
};
const imageMap = {
  planes: planes,
  village: village,
  herotext: herotext,
  castle: castle,
  hills: hills,
};

const Hero = ({
  isStickyBgMode,
  heroDateString,
  onAddCity,
  startAnimation,
  user,
  isDarkMode,
  checkWeatherDanger,
  heroBg,
  setHeroBg,
  heroBg2,
  setHeroBg2,
  heroBg3,
  setHeroBg3,
  heroBg4,
  setHeroBg4,
  customHeroBgs = [],
  setCustomHeroBgs,
  heroBgMode,
  setHeroBgMode,
  heroOverlayOpacity,
  setHeroOverlayOpacity,
  bgRatings,
  setBgRatings,
  slideshowInterval,
  setSlideshowInterval,
  slideshowTransition,
  setSlideshowTransition,
  filterCategory,
  setFilterCategory,
  heroBgZoom,
  setHeroBgZoom,
  heroBgRotation,
  setHeroBgRotation,
  heroBgBlur,
  setHeroBgBlur,
  heroBgPixelation,
  setHeroBgPixelation,
  heroBgFocal1,
  setHeroBgFocal1,
  heroBgFocal2,
  setHeroBgFocal2,
  heroBgFocal3,
  setHeroBgFocal3,
  heroBgFocal4,
  setHeroBgFocal4,
  heroBgPanEnabled,
  setHeroBgPanEnabled,
  heroBgPanSpeed,
  setHeroBgPanSpeed,
  videoPlaybackSpeed,
  setVideoPlaybackSpeed,
  selectedTimezone,
  setSelectedTimezone,
  customHolidayName,
  setCustomHolidayName,
}) => {
  const dispatch = useDispatch();
  const { registerRef, isActive } = useTutorial?.() || { registerRef: () => {} };
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [newDayInput, setNewDayInput] = useState({ date: "", reason: "" });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleAutoKonotop = () => {
      setInputValue("Конотоп");
      setTimeout(() => {
        onAddCity({ name: "Конотоп", fullName: "Конотоп (UA)", lat: 51.24, lon: 33.20 });
      }, 2000);
    };
    window.addEventListener("domino-auto-input-konotop", handleAutoKonotop);
    return () => window.removeEventListener("domino-auto-input-konotop", handleAutoKonotop);
  }, [onAddCity]);
  const [suggestions, setSuggestions] = useState([]);
  const [limit, setLimit] = useState(3);
  const [showList, setShowList] = useState(false);
  const [backgroundPreviewPair, setBackgroundPreviewPair] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundPreviewPair((pair) => (pair === 0 ? 1 : 0));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showTimezoneMenu, setShowTimezoneMenu] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchMode, setSearchMode] = useState("city");
  const [searchModeOptionIndex, setSearchModeOptionIndex] = useState(0);
  const [isSearchModeModalOpen, setIsSearchModeModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  const searchModePrompts = [
    "ШІ-асистент (Gemini)",
    "Змінити режим пошуку?",
    searchMode === "coordinates" ? "За назвою міста" : "Координати (шир/дов)",
    "Змінити режим пошуку?",
  ];
  const rotatingSearchPrompt = searchModePrompts[searchModeOptionIndex];
  const rotatingSearchModeIcon =
    searchModeOptionIndex === 0
      ? "ai"
      : searchModeOptionIndex === 2
        ? searchMode === "coordinates"
          ? "city"
          : "coordinates"
        : searchMode;

  useEffect(() => {
    setSearchModeOptionIndex(0);
    const interval = setInterval(() => {
      setSearchModeOptionIndex((index) => (index + 1) % searchModePrompts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [searchMode, searchModePrompts.length]);

  const handleSearchModeSelect = (mode) => {
    setIsSearchModeModalOpen(false);

    if (mode === "ai") {
      setIsAiModalOpen(true);
      return;
    }

    setSearchMode(mode);

    if (mode === "city") {
      setLatitude("");
      setLongitude("");
    } else {
      setInputValue("");
    }

    setSuggestions([]);
    setShowList(false);

    if (mode !== "city") setShowCoordinateSuggestions(false);
  };

  // Блокування прокрутки при відкритій модалці
  useEffect(() => {
    if (
      isModalOpen ||
      showTimezoneMenu ||
      isSearchModeModalOpen ||
      isAiModalOpen
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, showTimezoneMenu, isSearchModeModalOpen, isAiModalOpen]);

  // Закриття по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (isAiModalOpen) { setIsAiModalOpen(false); return; }
        if (isSearchModeModalOpen) return;
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isAiModalOpen, isSearchModeModalOpen]);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [activeLayer, setActiveLayer] = useState(1);
  const rotationScale = 1;
  const [randomBgsList, setRandomBgsList] = useState([]);
  const [randomCurrentIndex, setRandomCurrentIndex] = useState(0);
  const allBgs = useMemo(
    () => [...DEFAULT_BGS, ...(customHeroBgs || [])],
    [customHeroBgs],
  );
  const currentBgPreviewImages = CHANGE_BG_PREVIEW_IMAGES.slice(
    backgroundPreviewPair * 2,
    backgroundPreviewPair * 2 + 2,
  );

  const handleSelectBg = useCallback(
    (src, targetLayer = 1) => {
      const indexInQueue = randomBgsList.findIndex((item) => item.src === src);

      if (heroBgMode === "random") {
        const layerToUpdate = activeLayer === 2 ? 2 : 1;
        if (layerToUpdate === 2) {
          setHeroBg2(src);
        } else {
          setHeroBg(src);
        }
        if (indexInQueue !== -1) {
          setRandomCurrentIndex(indexInQueue);
        }
        return;
      }

      if (targetLayer === 2) {
        setHeroBg2(src);
      } else if (targetLayer === 3) {
        setHeroBg3(src);
      } else if (targetLayer === 4) {
        setHeroBg4(src);
      } else {
        setHeroBg(src);
      }
    },
    [
      activeLayer,
      heroBgMode,
      randomBgsList,
      setHeroBg,
      setHeroBg2,
      setHeroBg3,
      setHeroBg4,
    ],
  );
 useEffect(() => {
    if (heroBgMode === "slideshow-2" && heroBg && heroBg2) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 1 ? 2 : 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (heroBgMode === "slideshow-3" && heroBg && heroBg2 && heroBg3) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 3 ? 1 : prev + 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (
      heroBgMode === "slideshow-4" &&
      heroBg &&
      heroBg2 &&
      heroBg3 &&
      heroBg4
    ) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 4 ? 1 : prev + 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (heroBgMode === "random") {
      if (randomBgsList.length === 0 && allBgs.length > 0) {
        const shuffled = shuffleArray(allBgs);
        setRandomBgsList(shuffled);
        setRandomCurrentIndex(0);
        if (shuffled[0]) {
          // ЗМІНА 1: Використовуємо setHeroBg замість handleSelectBg
          setHeroBg(shuffled[0].src);
        }
        return;
      }
      if (randomBgsList.length > 0) {
        const timer = setInterval(() => {
          setRandomCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % randomBgsList.length;
            setActiveLayer((prevLayer) => {
              const nextLayer = prevLayer === 1 ? 2 : 1;
              if (nextLayer === 1) {
                setHeroBg(randomBgsList[nextIndex].src);
              } else {
                setHeroBg2(randomBgsList[nextIndex].src);
              }
              return nextLayer;
            });
            return nextIndex;
          });
        }, slideshowInterval * 1000);
        return () => clearInterval(timer);
      }
    }
  }, [
    heroBgMode,
    allBgs,
    slideshowInterval,
    randomBgsList,
    setHeroBg,
    setHeroBg2
  ]);
  useEffect(() => {
    if (heroBgMode === "random" && allBgs.length > 0) {
      if (randomBgsList.length !== allBgs.length) {
        const shuffled = shuffleArray(allBgs);
        setRandomBgsList(shuffled);
        setRandomCurrentIndex(0);
        if (shuffled[0]) {
          handleSelectBg(shuffled[0].src);
          setActiveLayer(1);
        }
      }
    }
  }, [allBgs.length, heroBgMode]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 350);
  };
  const timezoneMenuRef = useRef(null);

  const resetBgSettings = () => {
    setHeroOverlayOpacity(0.3);
    setHeroBgZoom(1);
    setHeroBgRotation(0);
    setHeroBgBlur(0);
    setHeroBgPixelation(0);
    setHeroBgFocal1({ x: 50, y: 50 });
    setHeroBgFocal2({ x: 50, y: 50 });
    setHeroBgPanEnabled(false);
    setHeroBgPanSpeed(6);
    if (setVideoPlaybackSpeed) setVideoPlaybackSpeed(1);
  };

  const [coordinateSuggestions, setCoordinateSuggestions] = useState([]);
  const [showCoordinateSuggestions, setShowCoordinateSuggestions] =
    useState(false);
  const [isSearchingNearby, setIsSearchingNearby] = useState(false);
  const [nearbySearchStatus, setNearbySearchStatus] = useState("");
  const searchRef = useRef(null);
  const API_KEY = "5104647d3e574f4a3f23c0aa092eb2b9";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.type === "mousedown" && event.button !== 0) return;
      if (
        event.target === document.body ||
        event.target === document.documentElement
      )
        return;
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchSuggestions = async (currentLimit, value, append = false) => {
    const cleanValue = value.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i, "").trim();
    if (cleanValue.length < 2) {
      setSuggestions([]);
      setShowList(false);
      return;
    }

    // Підкапотне миттєве співставлення з 40 містами України
    const localMatches = UKRAINE_CITIES_40.filter((c) =>
      c.name.toLowerCase().includes(cleanValue) ||
      c.aliases.some((a) => a.toLowerCase().includes(cleanValue))
    ).map((c) => ({
      name: c.name,
      state: "Україна",
      country: "UA",
      lat: c.lat,
      lon: c.lon,
      isLocal: true,
    }));

    if (localMatches.length > 0 && !append) {
      setSuggestions(localMatches);
      setShowList(true);
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cleanValue)}&limit=${currentLimit}&appid=${API_KEY}`,
      );
      const data = await response.json();
      const apiResults = Array.isArray(data) ? data : [];
      setHasMore(apiResults.length >= currentLimit);
      setSuggestions((prev) =>
        mergeCitySuggestions(append ? prev : localMatches, apiResults)
      );
      setShowList(true);
    } catch (error) {
      console.error("Помилка API:", error);
      if (localMatches.length > 0) {
        setSuggestions(localMatches);
        setShowList(true);
      }
    }
  };


  useEffect(() => {
    setLimit(3);
    setHasMore(true);
    const timeoutId = setTimeout(() => {
      if (inputValue) fetchSuggestions(3, inputValue, false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newLimit = limit + 3;
    setLimit(newLimit);
    fetchSuggestions(newLimit, inputValue, true);
  };



  const handleSelectByCoordinates = async () => {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
      alert("Будь ласка, введіть правильні координати");
      return;
    }

    if (lat < -90 || lat > 90) {
      alert("Широта має бути від -90 до 90");
      return;
    }

    if (lon < -180 || lon > 180) {
      alert("Довгота має бути від -180 до +180");
      return;
    }

    const currentPoint = {
      name: "Обрана точка",
      state: `Широта: ${lat}`,
      country: `Довгота: ${lon}`,
      lat: lat,
      lon: lon,
      isManual: true,
    };

    try {
      setNearbySearchStatus("🔍 Шукаємо за вказаними координатами...");
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${API_KEY}`,
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setCoordinateSuggestions([currentPoint, ...data]);
        setShowCoordinateSuggestions(true);
        setNearbySearchStatus("");
        return;
      }
      setIsSearchingNearby(true);
      setShowCoordinateSuggestions(true);
      setCoordinateSuggestions([currentPoint]);
      setNearbySearchStatus("Нічого не знайшли точно — шукаємо найближче...");

      const TIMEOUT_MS = 10000;
      const startTime = Date.now();
      let found = false;

      // Спіраль: спочатку по довготі (±1,±2,...), потім по широті
      outer: for (let delta = 1; delta <= 15 && !found; delta++) {
        // Кандидати: ±delta по lon, потім ±delta по lat
        const candidates = [
          [lat, Math.max(-180, Math.min(180, lon + delta))],
          [lat, Math.max(-180, Math.min(180, lon - delta))],
          [Math.max(-90, Math.min(90, lat + delta)), lon],
          [Math.max(-90, Math.min(90, lat - delta)), lon],
        ];

        for (const [tryLat, tryLon] of candidates) {
          if (Date.now() - startTime >= TIMEOUT_MS) break outer;

          setNearbySearchStatus(
            `🔎 Перевіряємо: ±${delta}° (шир: ${tryLat.toFixed(1)}°, довг: ${tryLon.toFixed(1)}°)...`
          );

          try {
            const tryRes = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${tryLat}&lon=${tryLon}&limit=4&appid=${API_KEY}`,
            );
            const tryData = await tryRes.json();

            if (tryData && tryData.length > 0) {
              setCoordinateSuggestions([currentPoint, ...tryData]);
              setNearbySearchStatus(`✅ Знайдено поруч (відхилення ~${delta}°)`);
              found = true;
              break outer;
            }
          } catch (e) {
            // ігноруємо помилки окремих запитів
          }
        }
      }

      if (!found) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        setNearbySearchStatus(
          `⚠️ Пошук завершено (${elapsed}с) — навколо немає населених пунктів. Можна додати точку вручну.`
        );
      }
    } catch (error) {
      console.error("Помилка при пошуку за координатами:", error);
      setCoordinateSuggestions([currentPoint]);
      setShowCoordinateSuggestions(true);
      setNearbySearchStatus("❌ Помилка запиту. Спробуйте ще раз.");
    } finally {
      setIsSearchingNearby(false);
    }
  };

  const handleSelectCoordinateResult = (city) => {
    const cityObj = {
      name: city.name,
      fullName: `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    };
    onAddCity(cityObj);
    window.dispatchEvent(new CustomEvent('domino-next-step-auto'));
    
    setLatitude("");
    setLongitude("");
    setShowCoordinateSuggestions(false);
    setCoordinateSuggestions([]);
  };

  const handleSelect = (city) => {
    const cityObj = {
      name: city.name,
      fullName: `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    };
    onAddCity(cityObj);
    window.dispatchEvent(new CustomEvent('domino-next-step-auto'));
    
    setInputValue("");
    setSuggestions([]);
    setShowList(false);
  };

  const handleAddDay = () => {
    if (newDayInput.date && customHolidayName) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(newDayInput.date);

      if (selectedDate < today) {
        alert("Неможливо додати подію в минулому!");
        return;
      }

      if (customHolidayName.length > 12) {
        alert("Назва свята занадто довга (макс. 12 символів)!");
        return;
      }

      dispatch(
        addCustomDay({ date: newDayInput.date, reason: customHolidayName }),
      );
      setNewDayInput({ ...newDayInput, date: "" });
      setCustomHolidayName("");
    }
  };

  // Перевірка типу свята та кольору для ефектів
  const todayHolidayInfo = useMemo(() => {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    // 1. Пріоритет: День народження (Червоний)
    if (user?.birthDate) {
      const [, uMonth, uDay] = user.birthDate.split("-");
      if (
        now.getDate() === parseInt(uDay) &&
        now.getMonth() + 1 === parseInt(uMonth)
      ) {
        return {
          active: true,
          color: "#ff5252",
          label: "З ДНЕМ НАРОДЖЕННЯ!",
        };
      }
    }
    const customDay = customDays.find((day) => day.date === todayStr);
    if (customDay) {
      return {
        active: true,
        color: "#fff59d",
        label: customDay.reason.toUpperCase() + "! 🎉",
      };
    }

    const dayOfWeek = now.getDay(); // 0 - Sun, 6 - Sat
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return { active: true, color: "#ffff00" };
    }

    return { active: false, color: "#fff59d", label: "" };
  }, [customDays, user]);

  const isTodayHoliday = todayHolidayInfo.active;

  // Генерація позицій для світлячків
  const fireflies = useMemo(() => {
    if (!isTodayHoliday) return [];
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      x: `${(Math.random() - 0.5) * 100}px`,
      y: `${(Math.random() - 0.5) * 100}px`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, [isTodayHoliday]);

  return (
    <HeroDiv>
      <svg
        width="0"
        height="0"
        style={{
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
        }}
      >
        <filter id="pixelate-hero" x="0" y="0" width="100%" height="100%">
          <feFlood x="0" y="0" height="1" width="1" />
          <feComposite
            width={Math.max(1, heroBgPixelation * 2)}
            height={Math.max(1, heroBgPixelation * 2)}
          />
          <feTile result="tiles" />
          <feComposite in="SourceGraphic" in2="tiles" operator="in" />
          <feMorphology operator="dilate" radius={heroBgPixelation} />
        </filter>
      </svg>
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg}
        $active={heroBgMode === "static" || activeLayer === 1}
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $focalX={heroBgFocal1?.x || 50}
        $focalY={heroBgFocal1?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg)?.end}
        $videoPlaybackSpeed={videoPlaybackSpeed}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg2}
        $active={
          (heroBgMode === "slideshow-2" ||
            heroBgMode === "slideshow-3" ||
            heroBgMode === "slideshow-4" ||
            heroBgMode === "random") &&
          activeLayer === 2
        }
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $focalX={heroBgFocal2?.x || 50}
        $focalY={heroBgFocal2?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg2)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg2)?.end}
        $videoPlaybackSpeed={videoPlaybackSpeed}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg3}
        $active={
          (heroBgMode === "slideshow-3" || heroBgMode === "slideshow-4") &&
          activeLayer === 3
        }
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $focalX={heroBgFocal3?.x || 50}
        $focalY={heroBgFocal3?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg3)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg3)?.end}
        $videoPlaybackSpeed={videoPlaybackSpeed}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg4}
        $active={heroBgMode === "slideshow-4" && activeLayer === 4}
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $focalX={heroBgFocal4?.x || 50}
        $focalY={heroBgFocal4?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg4)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg4)?.end}
        $videoPlaybackSpeed={videoPlaybackSpeed}
      />
      <Overlay $opacity={heroOverlayOpacity} $isStickyBgMode={isStickyBgMode} />
      <ChangeBgButton
        ref={(el) => registerRef("changeBgButton", el)}
        onClick={() => setIsModalOpen(true)}
        aria-label="Змінити фон"
      >
        <span style={{ display: "flex", gap: "5px" }}>
          <GiPalette size={27} />
          <span style={{ fontSize: "14px" }}>Змінити фон?</span>
        </span>
                <ChangeBgPreviewGroup aria-hidden="true">
          {currentBgPreviewImages.map((src) => (
            <ChangeBgPreview key={src} src={src} alt="" />
          ))}
        </ChangeBgPreviewGroup>
      </ChangeBgButton>
      <HeroDecors $image={herotext} $start={startAnimation} />
      <DelayedContent $start={startAnimation}>
        <BrowserSearchPanel $isDarkMode={isDarkMode}>
          <HeroDecor>
            <HeroFix>
              <HeroFi>
                <HeroDate ref={timezoneMenuRef} $isDarkMode={isDarkMode}>
                <HeroControls>
                  <TimezoneButton
                    ref={(el) => registerRef('timezoneButton', el)}
                    onClick={() => setShowTimezoneMenu(!showTimezoneMenu)}
                    aria-label="Змінити часовий пояс?"
                    $isDarkMode={isDarkMode}
                  >
                    <MdSettingsSuggest size={18} /> Змінити часовий пояс?
                  </TimezoneButton>
                  <ModePicker>
                    <Tooltip
                      content="Натисніть, щоб відкрити вибір режиму пошуку"
                      isDarkMode={isDarkMode}
                    >
                      <ModeIconBtn
                        onClick={() => setIsSearchModeModalOpen(true)}
                        aria-label="Відкрити вибір режиму пошуку"
                        $isDarkMode={isDarkMode}
                      >
                        <ModePreviewIcon key={`${searchModeOptionIndex}-${rotatingSearchModeIcon}`}>
                          {rotatingSearchModeIcon === "coordinates" ? (
                            <FaMapLocationDot />
                          ) : rotatingSearchModeIcon === "ai" ? (
                            <MdAutoAwesome />
                          ) : (
                            <FaMountainCity />
                          )}
                        </ModePreviewIcon>
                        <ModePreviewText key={`${searchModeOptionIndex}-${rotatingSearchPrompt}`}>
                          {rotatingSearchPrompt}
                        </ModePreviewText>
                      </ModeIconBtn>
                    </Tooltip>
                  </ModePicker>
                </HeroControls>
                <Tag $isDarkMode={isDarkMode} style={{ flex: 1, textAlign: "right" }}>
                  {heroDateString}
                </Tag>
                <TimezoneModal
                  isOpen={showTimezoneMenu}
                  onClose={() => setShowTimezoneMenu(false)}
                  selectedTimezone={selectedTimezone}
                  setSelectedTimezone={setSelectedTimezone}
                  isDarkMode={isDarkMode}
                />
                </HeroDate>
              </HeroFi>
            </HeroFix>
          </HeroDecor>
          <SearchWrapper ref={searchRef}>
          {searchMode === "city" ? (
            <HeroFormater>
              <SearchContainer $isDarkMode={isDarkMode}>
                <HeroInput
                  ref={(el) => registerRef('heroInput', el)}
                  value={inputValue}
                  $isDarkMode={isDarkMode}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    window.dispatchEvent(new CustomEvent('domino-hero-input-change', { detail: { value: e.target.value } }));
                  }}
                  onFocus={() => suggestions.length > 0 && setShowList(true)}
                  placeholder="Уведіть місто, село. Наприклад: Київ..."
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  name="hero-city-search"
                  inputMode="search"
                  enterKeyHint="search"
                  aria-label="Пошук міста"
                  data-form-type="other"
                  data-lpignore="true"
                />
                <SearchBorder aria-hidden="true" focusable="false">
                  <defs>
                    <linearGradient
                      id="search-border-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                      gradientTransform="rotate(0 0.5 0.5)"
                    >
                      <animateTransform
                        attributeName="gradientTransform"
                        type="rotate"
                        from="0 0.5 0.5"
                        to="360 0.5 0.5"
                        dur="28s"
                        repeatCount="indefinite"
                      />
                      <stop offset="0%" stopColor="#00bfff" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ffd400" />
                    </linearGradient>
                    <filter
                      id="search-border-glow"
                      x="-50%"
                      y="-100%"
                      width="200%"
                      height="300%"
                    >
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="3.4"
                        result="wideGlow"
                      />
                      <feComponentTransfer in="wideGlow" result="softGlow">
                        <feFuncA type="linear" slope="0.35" />
                      </feComponentTransfer>
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="1.4"
                        result="coreGlow"
                      />
                      <feMerge>
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="coreGlow" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="8"
                    pathLength="1000"
                  />
                </SearchBorder>
                {showList && suggestions.length > 0 && (
                  <SuggestionsList>
                    {suggestions.map((city, index) => (
                      <SuggestionItem
                        key={`${city.lat}-${city.lon}-${index}`}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelect(city);
                        }}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          handleSelect(city);
                        }}
                        onClick={() => handleSelect(city)}
                      >
                         {city.name}
                        {city.state ? `, ${city.state}` : ""} ({city.country})
                        <br />
                        <span style={{ fontSize: "0.85em", color: "#fffcfc" }}>
                          Широта: {city.lat.toFixed(2)}°, Довгота: {city.lon.toFixed(2)}°
                        </span>
                      </SuggestionItem>
                    ))}

                    {hasMore ? (
                      <LoadMoreButton isDarkMode={isDarkMode} onClick={handleLoadMore}>
                        Завантажити ще варіанти
                      </LoadMoreButton>
                    ) : (
                      <LoadMoreButton isDarkMode={isDarkMode} disabled>
                        Кінець списку
                      </LoadMoreButton>
                    )}
                  </SuggestionsList>
                )}
              </SearchContainer>
              <HeroInfo $isDarkMode={isDarkMode}>
                Ви заслуговуєте на багатофункціональний прогноз, де немає політики та реклами!
                Гарної погоди!
              </HeroInfo>
            </HeroFormater>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
                position: "relative",
              }}
            >
              <CoordinatesContainer style={{ alignItems: "flex-start" }}>
                <CoordinateInput $isDarkMode={isDarkMode}>
                  <input
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSelectByCoordinates();
                    }}
                    placeholder="Широта: Від -90° до +90°"
                    disabled={isSearchingNearby}
                    min="-90"
                    max="90"
                    step="0.01"
                  />
                </CoordinateInput>
                <CoordinateInput $isDarkMode={isDarkMode}>
                  <input
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSelectByCoordinates();
                    }}
                    placeholder="Довгота: Від -180° до +180°"
                    disabled={isSearchingNearby}
                    min="-180"
                    max="180"
                    step="0.01"
                  />
                </CoordinateInput>
                <CoordinateSearchButton
                  type="button"
                  onClick={handleSelectByCoordinates}
                  disabled={isSearchingNearby}
                >
                  <MdSearch />
                  Знайти
                </CoordinateSearchButton>
              </CoordinatesContainer>
              <HeroInfo $isDarkMode={isDarkMode} $desktopOnly>
                Ви заслуговуєте на багатофункціональний прогноз, де немає політики та реклами!
                Гарної погоди!
              </HeroInfo>
              {nearbySearchStatus && (
                <div style={{
                  color: nearbySearchStatus.startsWith("✅") ? "#00e676"
                       : nearbySearchStatus.startsWith("❌") ? "#ff5252"
                       : nearbySearchStatus.startsWith("⚠️") ? "#ffb36c"
                       : "#00eaff",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "4px 10px",
                  background: "rgba(0,0,0,0.65)",
                  borderRadius: "6px",
                  maxWidth: "340px",
                  margin: "4px auto 0",
                  backdropFilter: "blur(4px)",
                  lineHeight: 1.4,
                }}>
                  {isSearchingNearby && (
                    <span style={{ marginRight: "6px" }}>⟳</span>
                  )}
                  {nearbySearchStatus}
                </div>
              )}

              {showCoordinateSuggestions && (
                <SuggestionsList
                  style={{
                    width: "auto",
                    minWidth: "300px",
                    marginTop: "6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      color: "#333",
                      fontWeight: "bold",
                      marginBottom: "6px",
                      textAlign: "center",
                      fontSize: "12px",
                    }}
                  >
                    {isSearchingNearby
                      ? "Шукаємо поруч…"
                      : coordinateSuggestions.length > 1
                        ? "Знайдено поруч з координатами:"
                        : "Лише точка за координатами (міст не знайдено)"}
                  </div>
                  {coordinateSuggestions.map((city, index) => (
                    <SuggestionItem
                      key={`${city.lat}-${city.lon}-${index}`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectCoordinateResult(city);
                      }}
                      onClick={() => handleSelectCoordinateResult(city)}
                    >
                       {city.name}
                      {city.state ? `, ${city.state}` : ""} ({city.country})
                      <br />
                      <span style={{ fontSize: "0.85em", color: "#666" }}>
                        {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°
                      </span>
                    </SuggestionItem>
                  ))}
                  <button
                    onClick={() => {
                      setShowCoordinateSuggestions(false);
                      setCoordinateSuggestions([]);
                      setNearbySearchStatus("");
                    }}
                    style={{
                      width: "100%",
                      padding: "8px",
                      background: "#f0f0f0",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    ✕ Закрити
                  </button>
                </SuggestionsList>
              )}
            </div>
          )}
          </SearchWrapper>
        </BrowserSearchPanel>
        
        <div style={{ marginTop: "30px", zIndex: 90 }}>
          <News user={user} isDarkMode={isDarkMode} isStickyBgMode={isStickyBgMode} />
        </div>
      </DelayedContent>
      <BgModal
        isOpen={isModalOpen}
        isClosing={isClosing}
        onClose={handleCloseModal}
        onReset={resetBgSettings}
        isDarkMode={isDarkMode}
        user={user}
        heroBg={heroBg}
        heroBg2={heroBg2}
        heroBg3={heroBg3}
        heroBg4={heroBg4}
        setHeroBg={setHeroBg}
        setHeroBg2={setHeroBg2}
        setHeroBg3={setHeroBg3}
        setHeroBg4={setHeroBg4}
        customHeroBgs={customHeroBgs}
        setCustomHeroBgs={setCustomHeroBgs}
        heroBgMode={heroBgMode}
        setHeroBgMode={setHeroBgMode}
        heroOverlayOpacity={heroOverlayOpacity}
        setHeroOverlayOpacity={setHeroOverlayOpacity}
        bgRatings={bgRatings}
        setBgRatings={setBgRatings}
        slideshowInterval={slideshowInterval}
        setSlideshowInterval={setSlideshowInterval}
        slideshowTransition={slideshowTransition}
        setSlideshowTransition={setSlideshowTransition}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        heroBgZoom={heroBgZoom}
        setHeroBgZoom={setHeroBgZoom}
        heroBgRotation={heroBgRotation}
        setHeroBgRotation={setHeroBgRotation}
        heroBgBlur={heroBgBlur}
        setHeroBgBlur={setHeroBgBlur}
        heroBgPixelation={heroBgPixelation}
        setHeroBgPixelation={setHeroBgPixelation}
        heroBgPanEnabled={heroBgPanEnabled}
        setHeroBgPanEnabled={setHeroBgPanEnabled}
        heroBgPanSpeed={heroBgPanSpeed}
        setHeroBgPanSpeed={setHeroBgPanSpeed}
        videoPlaybackSpeed={videoPlaybackSpeed}
        setVideoPlaybackSpeed={setVideoPlaybackSpeed}
        activeLayer={activeLayer}
        setActiveLayer={setActiveLayer}
        randomBgsList={randomBgsList}
        setRandomBgsList={setRandomBgsList}
        randomCurrentIndex={randomCurrentIndex}
        setRandomCurrentIndex={setRandomCurrentIndex}
        hills={hills}
      />




      <SearchModeModal
        isOpen={isSearchModeModalOpen}
        isDarkMode={isDarkMode}
        activeMode={searchMode}
        onSelect={handleSearchModeSelect}
        onClose={() => setIsSearchModeModalOpen(false)}
      />

      {isAiModalOpen && createPortal(
        <AiModalBackdrop onClick={() => setIsAiModalOpen(false)}>
          <AiModalContainer onClick={(e) => e.stopPropagation()}>
            <AiModalBody $isDarkMode={isDarkMode}>
              <React_lazy_Aihelp
                isDarkMode={isDarkMode}
                isStickyBgMode={false}
                onClose={() => setIsAiModalOpen(false)}
              />
            </AiModalBody>
          </AiModalContainer>
        </AiModalBackdrop>,
        document.body
      )}
    </HeroDiv>
  );
};
export default Hero;
