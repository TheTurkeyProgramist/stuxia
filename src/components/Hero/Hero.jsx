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
import { TbWorldSearch } from "react-icons/tb";
import { FaMountainCity } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import planes from "../../photos/programs/youtub/planes.webp";
import meridian from "../../photos/programs/meridian/meridian.webp"
import castle from "../../photos/vip-modal/castle.webp"
import { GiPalette } from "react-icons/gi";
import { BsPinAngle } from "react-icons/bs";
import styled, { keyframes, css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdSettingsSuggest, MdMore, MdWallpaper } from "react-icons/md";
import {
  addCustomDay,
  removeCustomDay,
} from "../../features/counter/Counter.js";
import localforage from "localforage";
import hills from "../../photos/hero-header/fog.webp";
import { BsPinAngleFill } from "react-icons/bs";
import herotext from "../../photos/hero-header/herotext.webp";
import customLinksData from "./customLinks.json";
import village from "../../photos/fan-art/village.webp"
import {
  buildWikipediaSearchUrl,
  parseWikipediaSnippet,
} from "../../utils/wikipediaUtils";
import { DEFAULT_BGS } from "./defaultBgs";
import { findCityInDatabase, UKRAINE_CITIES_40 } from "../../utils/citiesDatabase";
import News from "../News/News.jsx";
import toast, { Toaster } from 'react-hot-toast';
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
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
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;
const HeroDecors = styled.div`
  display: block;
  width: 192px;
  margin-top: 45px;
  height: 71px;
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

const handleDownloadBg = async (bg) => {
  if (!bg) return;
  const src = typeof bg === "string" ? bg : bg.src;
  const name = typeof bg === "string" ? "background" : bg.name || "background";
  if (!src) return;
  const isVid = isVideoSource(src);
  const ext = isVid ? ".mp4" : ".webp";
  const safeName = name.replace(/[/\\?%*:|"<>]/g, "-").trim() || "background";
  const fileName = safeName.toLowerCase().endsWith(ext) ? safeName : `${safeName}${ext}`;

  const toastId = toast.loading("Завантаження файлу...", { id: "bg-download" });

  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
    toast.success(`Збережено: ${fileName}`, { id: toastId });
  } catch (err) {
    console.warn("Blob fetch download failed, using direct download:", err);
    try {
      const link = document.createElement("a");
      link.href = src;
      link.download = fileName;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success(`Відкрито для скачування: ${fileName}`, { id: toastId });
    } catch (fallbackErr) {
      toast.error("Не вдалося скачати файл", { id: toastId });
    }
  }
};

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Extract author from snippet "Постачальник(и): ..." or use link.author field
const extractAuthor = (link) => {
  if (link.author) return link.author;
  if (!link.snippet) return null;
  const match = link.snippet.match(/Постачальник(?:и)?:\s*([^\n]+)/);
  return match ? match[1].trim() : null;
};

const getLinkModalBgImage = (linkModal) => {
  if (!linkModal) return null;
  const firstImg = linkModal.images?.[0];
  if (firstImg) {
    return imageMap[firstImg] || firstImg;
  }
  return null;
};

// Detect platform type from URL
const detectPlatform = (url = "") => {
  if (url.includes("play.google.com")) return "playmarket";
  if (url.includes("store.steampowered.com")) return "steam";
  if (url.includes("apps.apple.com") || url.includes("itunes.apple.com")) return "appstore";
  return null;
};

// Get platform badge label/icon
const PLATFORM_CONFIG = {
  playmarket: { label: "Play Market", emoji: "🤖", color: "#01875f" },
  steam: { label: "Steam", emoji: "🎮", color: "#1b2838" },
  appstore: { label: "App Store", emoji: "🍎", color: "#0071e3" },
};

const getLinkPlatforms = (link) => {
  if (!link) return [];
  const result = [];
  if (link.platforms && Array.isArray(link.platforms)) {
    return link.platforms;
  }
  const detected = detectPlatform(link.url);
  if (detected) {
    result.push({ type: detected, url: link.url });
  }
  if (link.snippet) {
    if (link.snippet.includes("play.google.com") && !result.some((p) => p.type === "playmarket")) {
      const match = link.snippet.match(/(https:\/\/play\.google\.com\/[^\s\n\)]+)/);
      if (match) result.push({ type: "playmarket", url: match[1] });
    }
    if (link.snippet.includes("store.steampowered.com") && !result.some((p) => p.type === "steam")) {
      const match = link.snippet.match(/(https:\/\/store\.steampowered\.com\/[^\s\n\)]+)/);
      if (match) result.push({ type: "steam", url: match[1] });
    }
  }
  return result;
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
  transform: scale(
      ${(props) => (props.$zoom || 1) * (props.$rotationScale || 1)}
    )
    rotate(${(props) => props.$rotation || 0}deg);
  transform-origin: ${(props) => props.$focalX}% ${(props) => props.$focalY}%;
  filter: ${(props) => {
    if (props.$blurType === "pixelated") {
      return props.$pixelation > 0.5 ? `url(#pixelate-hero)` : "none";
    }
    return `blur(${props.$blur || 0}px)`;
  }};
  z-index: ${(props) => (props.$isStickyBgMode ? "-10" : "-2")} !important;
  animation: ${(props) =>
    props.$panEnabled && props.$zoom > 1
      ? css`
          ${panAnimation} ${props.$panSpeed || 6}s infinite linear
        `
      : "none"};
`;

const VideoThumbnail = React.memo(({ bg, onClick }) => {
  const videoRef = useRef(null);
  const [blobUrl, setBlobUrl] = useState(null);

  useEffect(() => {
    if (bg?.src instanceof Blob) {
      const url = URL.createObjectURL(bg.src);
      setBlobUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setBlobUrl(null);
    }
  }, [bg?.src]);

  const srcUrl =
    bg?.src instanceof Blob
      ? blobUrl
      : typeof bg?.src === "string"
      ? bg.src
      : undefined;

  return (
    <video
      ref={videoRef}
      src={srcUrl}
      preload="metadata"
      muted
      playsInline
      style={{
        width: "100%",
        aspectRatio: "3/2",
        objectFit: "cover",
        cursor: "pointer",
        background: "#111",
      }}
      onMouseEnter={() => {
        if (videoRef.current) {
          const p = videoRef.current.play();
          if (p !== undefined) p.catch(() => {});
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      onClick={onClick}
    />
  );
});

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
  const isPixelated = props.$blurType === "pixelated";

  useEffect(() => {
    if ($image instanceof Blob) {
      const objectUrl = URL.createObjectURL($image);
      setBlobUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setBlobUrl(null);
    }
  }, [$image]);

  const url =
    $image instanceof Blob ? blobUrl : typeof $image === "string" ? $image : "";

  useEffect(() => {
    if (videoRef.current) {
      if ($active) {
        if ($videoStart != null && videoRef.current.currentTime < $videoStart) {
          videoRef.current.currentTime = $videoStart;
        }
        videoRef.current.playbackRate = $videoPlaybackSpeed || 1;
        const p = videoRef.current.play();
        if (p !== undefined) p.catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [$active, $videoStart, $videoPlaybackSpeed]);

  const isVideo = isVideoSource($image);
  const videoStart = $videoStart ?? 0;
  const videoEnd = $videoEnd ?? null; // null = play to natural end

  return (
    <BgLayerStyled {...props}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={url}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={(e) => {
            if ($active) {
              const p = e.target.play();
              if (p !== undefined) p.catch(() => {});
            }
          }}
          onTimeUpdate={(e) => {
            const t = e.target.currentTime;
            if (videoEnd !== null && t >= videoEnd) {
              e.target.currentTime = videoStart;
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${$focalX}% ${$focalY}%`,
            imageRendering: isPixelated ? "pixelated" : "auto",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${url || hills})`,
            backgroundSize: "cover",
            backgroundPosition: `${$focalX}% ${$focalY}%`,
            backgroundRepeat: "no-repeat",
            imageRendering: isPixelated ? "pixelated" : "auto",
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
`;
const HeroDate = styled.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  width: 300px;
  background: #00000056;
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const TimezoneButton = styled.button`
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease;
`;

const TimezoneMenu = styled.div`
  position: fixed;
  top: 5%;
  left: 0%;
  width: 100vw;
  height: 97vh;
  background: rgba(2, 2, 2, 0.97);
  border-top: 2px solid #ffb36c;
  padding: 0;
  overflow-y: auto;
  z-index: 99999;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const TimezoneOption = styled.button`
  width: 100%;
  background: transparent;
  color: ${(props) => (props.$selected ? "#ffb36c" : "#fff")};
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${(props) => (props.$selected ? "#ffb36c" : "transparent")};
  padding: 5px 10px;
  cursor: pointer;
  text-align: left;
  font-size: 13px;
  transition: all 0.15s ease;
  font-weight: ${(props) => (props.$selected ? "bold" : "normal")};
  background: ${(props) => (props.$selected ? "rgba(255,179,108,0.08)" : "transparent")};

  &:hover {
    background: rgba(255, 179, 108, 0.15);
    border-left-color: #ffb36c;
    color: #ffb36c;
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
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const ModePicker = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ModeIconBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px 0 0 0;
  border: none;
  border-right: 2px solid black;
  background: #1b4b64;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: #353988; }
`;

const ModeDropdown = styled.div`
  position: absolute;
  top: 19px;
  left: 30px;
  background: ${(props) => (props.$isDarkMode ? "rgba(10, 10, 20, 0.95)" : "rgba(255, 255, 255, 0.95)")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)")};
  backdrop-filter: blur(12px);
  border-radius: 5px;
  overflow: hidden;
  z-index: 200;
  min-width: 180px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`;

const ModeDropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 10px;
  background: ${(props) =>
    props.$active
      ? props.$isDarkMode
        ? "rgba(108,255,228,0.15)"
        : "rgba(0, 175, 206, 0.15)"
      : "transparent"};
  border: none;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)")};
  color: ${(props) =>
    props.$active
      ? props.$isDarkMode
        ? "#6cffe4"
        : "#007b99"
      : props.$isDarkMode
      ? "#fff"
      : "#222"};
  font-size: 15px;
  font-weight: ${(props) => (props.$active ? "700" : "500")};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${(props) => (props.$isDarkMode ? "rgba(255,179,108,0.15)" : "rgba(255,179,108,0.25)")};
    color: #ff8c2b;
  }
`;

const ModeButton = styled.button`
  padding: 14px;
  background: ${(props) =>
    props.$active ? "#6cffe48b" : "rgba(255, 234, 0, 0.5)"};
  color: ${(props) => (props.$active ? "#000" : "#fff")};
  border: 1px solid
    ${(props) => (props.$active ? "#ffff00" : "rgb(0, 255, 238)")};
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-family);
  font-size: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${(props) =>
      props.$active ? "#98ff6ca0" : "rgba(0, 255, 119, 0.59)"};
  }
`;

const CoordinatesContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CoordinateInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 120px;
    height: 30px;
    padding: 5px;
    font-size: 10px;
    border-radius: 8px;
    border: 1px solid #ffb36c;
    background: ${(p) => (p.$isDarkMode ? "white" : "black")};
    color: #222;
    font-weight: 500;
    &::placeholder {
      color: #303030;
    }
  }
`;

const TimezoneMenuHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(2, 2, 2, 0.98);
  border-bottom: 2px solid rgba(255, 179, 108, 0.4);
  backdrop-filter: blur(6px);
`;

const TimezoneMenuTitle = styled.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`;

const TimezoneMenuCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb7a00;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background 0.2s;
`;

const SortButtonsRow = styled.div`
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.3);
`;

const SortBtn = styled.button`
  background: ${(props) =>
    props.$active ? "#ffb36c" : "rgba(255, 179, 108, 0.1)"};
  color: ${(props) => (props.$active ? "#000" : "#fff")};
  border: 1px solid #ffb36c;
  border-radius: 3px;
  padding: 8px 4px;
  font-size: 12px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background: ${(props) =>
      props.$active ? "#ffb36c5d" : "rgba(255, 179, 108, 0.3)"};
  }
`;

const HeroFormater = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 99.7%;
  justify-content: center;
`;

const HeroInput = styled.input`
  width: 100%;
  height: 30px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 11px;
  color: #040404;
  padding-left: 8px;
  padding-right: 35px;
  background: #ffffff;
  border-radius: 0;
  border: none;
  border-right: 2px solid black;
  outline: none;
  box-sizing: border-box;
    &::placeholder {
    color: #000000;
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
const HeroButton = styled.button`
  position: relative;
  border-radius: 0 10px 0px 0;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.disabled ? "#ffffff" : "yellow")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-left: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  font-size: 20px;
  color: black;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "skyblue")};
    color: ${(props) => (props.disabled ? "black" : "transparent")};
  }
  ${(props) =>
    !props.disabled &&
    css`
      &:hover::after {
        content: "+";
        position: absolute;
        color: black;
        font-size: 22px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
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
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid rgb(0, 0, 0);
  @media (min-width: 1200px) {
      width: 99.7%;
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

const LinksDropdown = styled.div`
  position: absolute;
  top: 100%;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: ${(props) => (props.$hasExpanded ? "hidden" : "auto")};
  border-top: 2px solid rgb(0, 0, 0);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: skyblue;
    border-radius: 10px;
  }
`;

const AccordionItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  font-weight: bold;
  color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #205d6e;
  transition: background 0.2s;
  &:hover {
    background: #566fd2;
    color: white;
  }
`;

const AccordionContent = styled.div`
  max-height: ${(props) => (props.$expanded ? "220px" : "0")};
  overflow-y: ${(props) => (props.$expanded ? "auto" : "hidden")};
  transition:
    max-height 0.4s ease-in-out,
    padding 0.4s ease-in-out;
  padding: ${(props) => (props.$expanded ? "3px" : "0 15px")};
  background: #00eaff;
  font-size: 13px;
  color: rgb(9, 9, 9);
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const Tag = styled.span`
  background: #f6ff00;
  color: #000;
    font-weight: 900;
  padding: 1px 5px;
  border-radius: 2px;
  border: 1px solid #000;
  font-size: 12px;
`;

/* ── Fullscreen Links Search Overlay ── */
const LinksSearchOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: ${(p) => p.$isDarkMode
    ? "rgba(10,10,20,0.97)"
    : "rgba(245,247,255,0.97)"};
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const LinksSearchHeader = styled.div`
  width: 100%;
  padding: 18px 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: ${(p) => (p.$isDarkMode ? "#ffffff" : "#1a1a1a")};
`;

const LinksSearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(p) => p.$isDarkMode ? "#1a1a2e" : "#fff"};
  border: 2px solid ${(p) => p.$isDarkMode ? "#3a3a5a" : "#ddd"};
  border-radius: 50px;
  margin-top: 20px;
  padding: 8px 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  transition: border-color 0.2s;
  &:focus-within {
    border-color: #ffb36c;
    box-shadow: 0 4px 28px rgba(255,179,108,0.25);
  }
`;

const LinksSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 17px;
  color: ${(p) => p.$isDarkMode ? "#f0f0f0" : "#111"};
  &::placeholder { color: ${(p) => p.$isDarkMode ? "#666" : "#aaa"}; }
`;

const LinksSearchMeta = styled.div`
  color: ${(p) => p.$isDarkMode ? "#ffffff" : "#080808"};
  font-size: 12px;
  text-align: center;
`;

const LinksResultsList = styled.div`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  overflow-y: auto;
  padding: 0 1px 2px;
  display: flex;
  flex-direction: column;
  gap: 6px;`;

const LinksResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 8px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.15s, transform 0.12s;
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)"};
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"};
  &:hover {
    background: ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.1)" : "rgba(255,179,108,0.15)"};
    border-color: #ffb36c55;
    transform: translateY(-1px);
  }
`;

const LinkFavicon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(p) => p.$bg || "linear-gradient(135deg,#205d6e,#566fd2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  font-weight: bold;
  color: #fff;
  overflow: hidden;
`;

const playStoreIconCache = new Map();
const playStoreIconRequests = new Map();

const getPlayStorePackageUrl = (link) => {
  if (!link?.url?.includes("play.google.com/store/apps")) return null;
  try {
    const packageId = new URL(link.url).searchParams.get("id");
    return packageId
      ? `https://play.google.com/store/apps/details?id=${encodeURIComponent(packageId)}&hl=en`
      : null;
  } catch {
    return null;
  }
};

const loadPlayStoreIcon = async (pageUrl) => {
  if (!pageUrl) return null;
  if (playStoreIconCache.has(pageUrl)) return playStoreIconCache.get(pageUrl);
  if (playStoreIconRequests.has(pageUrl)) {
    return playStoreIconRequests.get(pageUrl);
  }

  const request = fetch(`https://r.jina.ai/http://${pageUrl.replace(/^https?:\/\//, "")}`)
    .then((response) => (response.ok ? response.text() : ""))
    .then((html) => {
      const imageUrls = [
        ...new Set(
          [...html.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/[^\s"')]+/g)]
            .map(([url]) => url.replace(/\\u003d/g, "="))
            .filter((url) => /=s(?:48|96)(?:-rw)?(?:\s|$)/.test(url)),
        ),
      ];
      const iconUrl = imageUrls[0] || null;
      if (iconUrl) playStoreIconCache.set(pageUrl, iconUrl);
      return iconUrl;
    })
    .catch(() => null)
    .finally(() => playStoreIconRequests.delete(pageUrl));

  playStoreIconRequests.set(pageUrl, request);
  return request;
};

const getLinkIconSources = (link, playStoreIcon) => {
  const sources = [];
  if (playStoreIcon) sources.push(playStoreIcon);
  if (typeof link?.icon === "string" && link.icon.trim()) {
    sources.push(link.icon.trim());
  }

  const imageSource = Array.isArray(link?.images)
    ? link.images.find(
        (image) => typeof image === "string" && /^https?:\/\//i.test(image),
      )
    : null;
  const isPlayMarketLink = link?.url?.includes("play.google.com/store/apps");

  if (isPlayMarketLink && imageSource) sources.push(imageSource);

  if (!isPlayMarketLink) {
    try {
      const domain = new URL(link.url).hostname;
      sources.push(`https://www.google.com/s2/favicons?domain=${domain}&sz=64`);
    } catch {
      // The letter fallback is rendered when the URL is invalid.
    }
  }

  return [...new Set(sources)];
};

const LinkFaviconImage = ({ link }) => {
  const playStorePageUrl = getPlayStorePackageUrl(link);
  const [playStoreIcon, setPlayStoreIcon] = useState(null);
  const [sourceIndex, setSourceIndex] = useState(0);
  useEffect(() => {
    let isActive = true;
    setPlayStoreIcon(null);
    setSourceIndex(0);

    if (playStorePageUrl) {
      loadPlayStoreIcon(playStorePageUrl).then((iconUrl) => {
        if (isActive) setPlayStoreIcon(iconUrl);
      });
    }

    return () => {
      isActive = false;
    };
  }, [link, playStorePageUrl]);

  const iconSources = getLinkIconSources(link, playStoreIcon);

  const fallbackLetter = link?.title?.charAt(0).toUpperCase() || "?";
  const isPlayMarketLink = link?.url?.includes("play.google.com/store/apps");
  const fallbackIcon = isPlayMarketLink ? "🎮" : fallbackLetter;
  const iconSource = iconSources[sourceIndex];

  if (!iconSource) return fallbackIcon;

  return (
    <img
      src={iconSource}
      alt=""
      width="28"
      height="28"
      onError={() => {
        if (sourceIndex < iconSources.length - 1) {
          setSourceIndex((index) => index + 1);
        } else {
          setSourceIndex(iconSources.length);
        }
      }}
      style={{ display: "block", objectFit: "contain" }}
    />
  );
};

const LinkMainInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const LinkTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${(p) => p.$isDarkMode ? "#f0f0f0" : "#111"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LinkAuthor = styled.div`
  font-size: 11px;
  color: ${(p) => p.$isDarkMode ? "#fdfdfd" : "#050505"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LinkTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 2px;
`;

const LinkTagBadge = styled.span`
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 20px;
  background: ${(p) => p.$isDarkMode ? "rgba(255,183,108,0.15)" : "rgba(255,183,108,0.25)"};
  color: ${(p) => p.$isDarkMode ? "#ffb36c" : "#a05000"};
  font-weight: 600;
`;

const LinkPlatformBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
`;

const PlatformBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  border: none;
  background: ${(p) => p.$color || "#333"};
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.15s, transform 0.12s;
  &:hover { opacity: 0.85; transform: scale(1.03); }
`;

const LinksPinnedLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${(p) => p.$isDarkMode ? "#ffb36c99" : "#666"};
  text-transform: uppercase;
  padding: 4px 2px 2px;
`;

const LinksSectionDivider = styled.div`
  height: 1px;
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.12)"};
  margin: 6px 0;
`;

/* ── Link Detail Modal ── */
const LinkDetailOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10100;
  background: rgba(0,0,0,0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const LinkDetailCard = styled.div`
  background-color: #0e15200a;
  background-image: ${(p) => (p.$bgImage ? `url(${p.$bgImage})` : p.$bg || "none")};
  background-size: cover;
  background-position: center;
  border: 2px solid #ffb36c77;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.95);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.69) 0%,
      rgba(0, 0, 0, 0.73) 50%,
      rgba(0, 0, 0, 0.68) 100%
    );
    z-index: 1;
  }
`;

const LinkDetailHeader = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 22px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
`;

const LinkDetailBody = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  overflow-y: auto;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #ffb36c66; border-radius: 10px; }
`;

const LinkDetailFooter = styled.div`
  position: relative;
  z-index: 2;
  padding: 14px 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
`;

const LinkDetailMedia = styled.div`
  position: relative;
  width: 100%;
  min-height: 140px;
  overflow: hidden;
  background: #05080d00;
  cursor: pointer;

  img.main-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0;
    transition: transform 0.25s ease;
  }

  &:hover img.main-image {
    transform: scale(1.02);
  }

`;

const TrailerCorner = styled.button`
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: 220px;
  aspect-ratio: 16 / 9;
  padding: 0;
  overflow: hidden;
  border: 2px solid #ff3b30;
  border-radius: 6px;
  background: #000;
  cursor: pointer;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.7);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0.82;
  }

  span {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: 28px;
    text-shadow: 0 1px 5px #000;
  }

  @media (max-width: 600px) {
    right: 8px;
    bottom: 8px;
    width: 145px;
  }
`;

const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ImageSlider = ({ images = [], youtubeTrailer, setFullscreenImage, imageMap, setFullscreenVideo }) => {
  const youtubeId = youtubeTrailer ? getYoutubeId(youtubeTrailer) : null;
  const youtubeThumbnail = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg` : null;
  const mainImage = images
    .map((image) => imageMap[image] || image)
    .find(Boolean) || youtubeThumbnail;

  return (
    <LinkDetailMedia
      onClick={(event) => {
        event.stopPropagation();
        if (mainImage) setFullscreenImage(mainImage);
      }}
    >
      {mainImage && <img className="main-image" src={mainImage} alt="" />}
      {youtubeThumbnail && youtubeTrailer && (
        <TrailerCorner
          type="button"
          aria-label="Відкрити трейлер"
          onClick={(event) => {
            event.stopPropagation();
            setFullscreenVideo(youtubeTrailer);
          }}
        >
          <img src={youtubeThumbnail} alt="" />
          <span>▶</span>
        </TrailerCorner>
      )}
    </LinkDetailMedia>
  );
};

const FullscreenImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  cursor: pointer;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
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
  top: 43px;
  gap: 9px;
  right: 7px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 110px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s;
  font-size: 18px;
  backdrop-filter: blur(5px);
  &:hover {
    background: #1d5b69;
    transform: scale(1.1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 6, 14, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
  animation: ${(props) => (props.$isClosing ? fadeOut : fadeIn)} 0.3s ease-out
    forwards;
`;

const ModalContent = styled.div`
  background: linear-gradient(145deg, rgba(16, 20, 32, 0.97) 0%, rgba(8, 10, 18, 0.98) 100%);
  padding: 20px;
  border-radius: 18px;
  width: 95%;
  max-width: 1240px;
  max-height: 88vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid rgba(255, 179, 108, 0.35);
  color: white;
  position: relative;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 35px rgba(255, 179, 108, 0.12);
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.4s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ffb36c 0%, #ff8c2b 100%);
    border-radius: 10px;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(220, 38, 38, 0.85);
  backdrop-filter: blur(4px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.2s ease;
  &:hover {
    background: #ef4444;
    transform: scale(1.15);
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  }
`;

const EditBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 36px;
  background: rgba(255, 179, 108, 0.9);
  backdrop-filter: blur(4px);
  color: black;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.2s ease;
  &:hover {
    background: #ffa852;
    transform: scale(1.15);
    box-shadow: 0 0 10px rgba(255, 179, 108, 0.5);
  }
`;

const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  color: #ffb36c;
  text-align: center;
  padding: 4px 6px;
  font-size: 11px;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  z-index: 4;
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: ${(props) => (props.$hasSlots ? "20px" : "0")};
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 70%, transparent 100%);
  color: white;
  font-size: 11px;
  font-weight: 500;
  padding: 6px 8px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 5;
`;

const ConfigRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 179, 108, 0.15);
  padding: 8px 10px;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 179, 108, 0.35);
  }

  label {
    font-size: 11px;
    font-weight: 700;
    color: #ffc996;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  input[type="range"] {
    accent-color: #ffb36c;
    cursor: pointer;
  }
`;

const ModalConfigGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: stretch;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const FocusButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
  padding: 2px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const BgItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${(props) => (props.$active ? "#ffb36c" : "rgba(255, 255, 255, 0.1)")};
  box-shadow: ${(props) => (props.$active ? "0 0 16px rgba(255, 179, 108, 0.5), inset 0 0 0 1px #ffb36c" : "0 4px 12px rgba(0, 0, 0, 0.35)")};
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: #0d0f19;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${(props) => (props.$active ? "#ffb36c" : "rgba(255, 179, 108, 0.6)")};
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 179, 108, 0.25);
    ${NameOverlay}, ${TopOverlay} {
      opacity: 1;
    }
  }
`;

const BgSquare = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
  display: block;
`;

const RatingOverlay = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

const HeartIcon = styled.button`
  background: rgba(10, 12, 22, 0.75);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  font-size: 13px;
  color: ${(props) => props.$color || "#fff"};
  font-weight: 900;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.15);
    background: rgba(18, 22, 38, 0.95);
    border-color: #ffb36c;
    box-shadow: 0 0 10px rgba(255, 179, 108, 0.3);
  }
`;

const SlotButtons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(8, 10, 18, 0.85);
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  z-index: 7;
`;

const SlotBtn = styled.button`
  flex: 1;
  background: ${(props) => (props.$active ? "linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)" : "transparent")};
  color: ${(props) => (props.$active ? "#000" : "#ccc")};
  border: none;
  padding: 3px 2px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    color: ${(props) => (props.$active ? "#000" : "#fff")};
    background: ${(props) => (props.$active ? "linear-gradient(135deg, #ffc48c 0%, #ffa047 100%)" : "rgba(255, 179, 108, 0.2)")};
  }
`;

const DropZone = styled.div`
  position: relative;
  border: 2px dashed rgba(255, 179, 108, 0.4);
  padding: 16px 20px;
  text-align: center;
  border-radius: 14px;
  cursor: pointer;
  color: #ddd;
  font-size: 13px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: rgba(255, 179, 108, 0.06);
    border-color: #ffb36c;
    color: #fff;
    box-shadow: 0 0 15px rgba(255, 179, 108, 0.15);
  }
`;

const CloseBtn = styled.button`
  background: rgba(255, 179, 108, 0.1);
  color: ${(props) => (props.$danger ? "#ff6b6b" : "#ffb36c")};
  border: 1px solid ${(props) => (props.$danger ? "rgba(255, 107, 107, 0.3)" : "rgba(255, 179, 108, 0.3)")};
  border-radius: 8px;
  padding: 5px 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: ${(props) => (props.$danger ? "rgba(255, 107, 107, 0.25)" : "rgba(255, 179, 108, 0.25)")};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${(props) => (props.$danger ? "rgba(255, 107, 107, 0.2)" : "rgba(255, 179, 108, 0.2)")};
  }
  &:active {
    transform: translateY(0);
  }
`;

const ModalSearchInput = styled.input`
  padding: 7px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 179, 108, 0.3);
  background: rgba(255, 255, 255, 0.04);
  color: white;
  width: 100%;
  max-width: 320px;
  font-size: 12px;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #8a8d9b;
  }
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffb36c;
    box-shadow: 0 0 12px rgba(255, 179, 108, 0.25);
  }
`;

const ModalDivider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 179, 108, 0.35), transparent);
  margin: 8px 0;
  width: 100%;
`;

const ModalSectionTitle = styled.h3`
  font-weight: 700;
  color: #ffb36c;
  margin: 4px 0;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.3px;
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
const TIMEZONES = [
  { label: "UTC (Всесвітній час)", value: "UTC" },
  { label: "GMT (Лондон, Дублін)", value: "Europe/London" },
  { label: "UTC+1 (Берлін, Париж, Рим, Варшава)", value: "Europe/Berlin" },
  { label: "UTC+2 (Київ, Хельсінкі, Каїр, Бухарест)", value: "Europe/Kyiv" },
  { label: "UTC+3 (Стамбул, Ер-Ріяд, Найробі)", value: "Europe/Istanbul" },
  { label: "UTC+4 (Дубай, Баку, Тбілісі)", value: "Asia/Dubai" },
  { label: "UTC+5 (Ісламабад, Ташкент, Мальдіви)", value: "Asia/Karachi" },
  { label: "UTC+6 (Астана, Дакка, Алмати)", value: "Asia/Almaty" },
  { label: "UTC+7 (Бангкок, Джакарта, Ханой)", value: "Asia/Bangkok" },
  { label: "UTC+8 (Пекін, Сінгапур, Перт)", value: "Asia/Shanghai" },
  { label: "UTC+9 (Токіо, Сеул, Іркутськ)", value: "Asia/Tokyo" },
  {
    label: "UTC+10 (Сідней, Мельбурн, Порт-Морсбі)",
    value: "Australia/Sydney",
  },
  { label: "UTC+11 (Номеа, Соломонові Острови)", value: "Pacific/Noumea" },
  { label: "UTC+12 (Окленд, Фіджі)", value: "Pacific/Auckland" },
  { label: "UTC-1 (Азорські острови, Кабо-Верде)", value: "Atlantic/Azores" },
  { label: "UTC-2 (Південна Джорджія)", value: "Atlantic/South_Georgia" },
  {
    label: "UTC-3 (Буенос-Айрес, Бразиліа, Гренландія)",
    value: "America/Argentina/Buenos_Aires",
  },
  { label: "UTC-4 (Сантьяго, Галіфакс, Каракас)", value: "America/Santiago" },
  { label: "UTC-5 (Нью-Йорк, Торонто, Богота)", value: "America/New_York" },
  { label: "UTC-6 (Чикаго, Мехіко, Вінніпег)", value: "America/Chicago" },
  { label: "UTC-7 (Денвер, Едмонтон, Калгарі)", value: "America/Denver" },
  {
    label: "UTC-8 (Лос-Анджелес, Ванкувер, Сан-Франциско)",
    value: "America/Los_Angeles",
  },
  { label: "UTC-9 (Аляска, Анкоридж)", value: "America/Anchorage" },
  { label: "UTC-10 (Гаваї, Гонолулу)", value: "Pacific/Honolulu" },
  { label: "UTC-11 (Паго-Паго, Алофі)", value: "Pacific/Pago_Pago" },
  { label: "UTC-12 (Острів Бейкер, Острів Гоуленд)", value: "Etc/GMT+12" },
  { label: "EST (Північна Америка: Східний час)", value: "America/New_York" },
  {
    label: "CST (Північна Америка: Центральний час)",
    value: "America/Chicago",
  },
  { label: "MST (Північна Америка: Гірський час)", value: "America/Denver" },
  {
    label: "PST (Північна Америка: Тихоокеанський час)",
    value: "America/Los_Angeles",
  },
  { label: "CET (Центральна Європа: Прага, Мадрид)", value: "Europe/Berlin" },
  { label: "EET (Східна Європа: Софія, Таллінн)", value: "Europe/Kyiv" },
  { label: "IST (Індія, Нью-Делі)", value: "Asia/Kolkata" },
  { label: "JST (Японія, Токіо)", value: "Asia/Tokyo" },
  { label: "AEST (Східна Австралія, Брісбен)", value: "Australia/Brisbane" },
  { label: "Інший (ввести вручну)", value: "custom_input" },
];
const imageMap = {
  planes: planes,
  village: village,
  herotext: herotext,
  meridian: meridian,
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
  heroBgBlurType,
  setHeroBgBlurType,
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
  screenshots = [],
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
  const linksDropdownRef = useRef(null);
  const [expandedLinkId, setExpandedLinkId] = useState(null);

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

  useEffect(() => {
    if (expandedLinkId !== null && linksDropdownRef.current) {
      const expandedElement = linksDropdownRef.current.querySelector(
        `[data-id="${expandedLinkId}"]`
      );
      if (expandedElement) {
        linksDropdownRef.current.scrollTo({
          top: expandedElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [expandedLinkId]);
  const [suggestions, setSuggestions] = useState([]);
  const [limit, setLimit] = useState(3);
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBgCount, setVisibleBgCount] = useState(300);
  const MAX_DAILY_HERO_CARDS = 1000;
  const [uploadedToday, setUploadedToday] = useState(0);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const uid = user?.uid || "guest";
        const today = new Date().toISOString().split("T")[0];
        const key = `hero_cards_${uid}_${today}`;
        const val = await localforage.getItem(key);
        setUploadedToday(Number(val) || 0);
      } catch (err) {
        console.error("Failed to load hero uploaded count:", err);
      }
    };
    loadCount();
  }, [user]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(null); // { name, text }
  const [linkDetailModal, setLinkDetailModal] = useState(null); // link object for detail modal
  const [showTimezoneMenu, setShowTimezoneMenu] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchMode, setSearchMode] = useState("city");

  // Блокування прокрутки при відкритій модалці
  useEffect(() => {
    if (isModalOpen || descriptionModal || showTimezoneMenu || linkDetailModal || searchMode === "links") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, descriptionModal, showTimezoneMenu, linkDetailModal, searchMode]);

  // Закриття linksSearch/linkDetail по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (linkDetailModal) { setLinkDetailModal(null); return; }
        if (searchMode === "links") { setSearchMode("city"); setSuggestions([]); setShowList(false); }
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [linkDetailModal, searchMode]);

  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [pinnedLinks, setPinnedLinks] = useState([]);
  const [wikipediaResults, setWikipediaResults] = useState([]);
  const [isWikipediaLoading, setIsWikipediaLoading] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [sortType, setSortType] = useState("rating");
  const [activeLayer, setActiveLayer] = useState(1);
  const rotationScale = 1;
  const [tzSortMode, setTzSortMode] = useState("default");
  const [randomBgsList, setRandomBgsList] = useState([]);
  const [randomCurrentIndex, setRandomCurrentIndex] = useState(0);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTimezoneInputValue, setCustomTimezoneInputValue] = useState("");
  const isCustom = (src) => !DEFAULT_BGS.some((bg) => bg.src === src);
  const allBgs = useMemo(
    () => [
      ...DEFAULT_BGS,
      ...(customHeroBgs || []),
      ...(screenshots || []).map((s) => ({
        src: s.image,
        name: `Скріншот: ${s.trackName}`,
        category: "Скріншоти",
      })),
    ],
    [customHeroBgs, screenshots],
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

  const getTzTimeInfo = useCallback((tzValue) => {
    if (!tzValue || tzValue === "custom_input") return null;
    try {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("uk", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: tzValue,
      });
      const timeStr = fmt.format(now);
      const hour = parseInt(timeStr.split(":")[0]);
      const isDay = hour >= 6 && hour < 20;
      return { timeStr, isDay };
    } catch (e) {
      return null;
    }
  }, []);

  const getNumericOffset = useCallback((tzValue) => {
    if (tzValue === "UTC") return 0;
    if (tzValue === "custom_input") return 999;
    try {
      const date = new Date();
      const tzString = date.toLocaleString("en-US", { timeZone: tzValue });
      const localDate = new Date(tzString);
      const utcString = date.toLocaleString("en-US", { timeZone: "UTC" });
      const utcDate = new Date(utcString);
      return (localDate - utcDate) / (1000 * 60);
    } catch (e) {
      return 0;
    }
  }, []);

  const sortedTimezones = useMemo(() => {
    let list = [...TIMEZONES];
    if (tzSortMode === "alpha") {
      list.sort((a, b) => a.label.localeCompare(b.label));
    } else if (tzSortMode === "offset") {
      list.sort(
        (a, b) => getNumericOffset(a.value) - getNumericOffset(b.value),
      );
    }
    return list;
  }, [tzSortMode, getNumericOffset]);
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

  useEffect(() => {
    const isPredefined = TIMEZONES.some((tz) => tz.value === selectedTimezone);
    if (!isPredefined) {
      setCustomTimezoneInputValue(selectedTimezone);
      setShowCustomInput(true);
    } else {
      setCustomTimezoneInputValue("");
      setShowCustomInput(false);
    }
  }, [selectedTimezone]);
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 350);
  };
  const timezoneMenuRef = useRef(null);

  const filteredBgs = (allBgs || []).filter((bg) => {
    const matchesCategory =
      filterCategory === "all" ||
      (filterCategory === "custom"
        ? isCustom(bg.src)
        : bg.category === filterCategory);
    const matchesSearch = (bg.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedBgs = [...filteredBgs].sort((a, b) => {
    if (sortType === "az") return a.name.localeCompare(b.name);
    if (sortType === "za") return b.name.localeCompare(a.name);

    const rA = bgRatings[a.src] || 0;
    const rB = bgRatings[b.src] || 0;
    if (rA !== rB) return rB - rA;
    return a.name.localeCompare(b.name);
  });
  const pagedBgs = sortedBgs.slice(0, visibleBgCount);
  const resetBgSettings = () => {
    setHeroOverlayOpacity(0.3);
    setHeroBgZoom(1);
    setHeroBgRotation(0);
    setHeroBgBlur(0);
    setHeroBgFocal1({ x: 50, y: 50 });
    setHeroBgFocal2({ x: 50, y: 50 });
    setHeroBgPanEnabled(false);
    setHeroBgPanSpeed(6);
    if (setVideoPlaybackSpeed) setVideoPlaybackSpeed(1);
  };

  const handleRate = (src) => {
    setBgRatings((prev) => {
      const current = prev[src] || 0;
      const next = (current + 1) % 3; // 0 -> 1 -> 2 -> 0
      return { ...prev, [src]: next };
    });
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = async (file) => {
    if (!file) return;
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");
    if (!isImage && !isVideo) return;

    // enforce daily limit (Hero only)
    try {
      const uid = user?.uid || "guest";
      const today = new Date().toISOString().split("T")[0];
      const key = `hero_cards_${uid}_${today}`;
      const current = Number((await localforage.getItem(key)) || 0);
      if (current >= MAX_DAILY_HERO_CARDS) {
        alert(
          `Ліміт досягнуто — не більше ${MAX_DAILY_HERO_CARDS} карток на добу.`,
        );
        return;
      }
    } catch (err) {
      console.error("Failed to check hero daily limit:", err);
    }

    if (isVideo) {
      if (file.size > 20 * 1024 * 1024) {
        alert("Відео занадто велике! Максимум 20мб для стабільності.");
        return;
      }
      setCustomHeroBgs((prev) => [
        { src: file, name: file.name, category: "Ваші відео" },
        ...prev,
      ]);
      setHeroBg(file);

      // update daily count
      try {
        const uid = user?.uid || "guest";
        const today = new Date().toISOString().split("T")[0];
        const key = `hero_cards_${uid}_${today}`;
        const prevVal = Number((await localforage.getItem(key)) || 0);
        const nextVal = prevVal + 1;
        await localforage.setItem(key, nextVal);
        setUploadedToday(nextVal);
      } catch (err) {
        console.error("Failed to update hero uploaded count:", err);
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1200;
        const scale = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          async (blob) => {
            // update daily count before adding
            try {
              const uid = user?.uid || "guest";
              const today = new Date().toISOString().split("T")[0];
              const key = `hero_cards_${uid}_${today}`;
              const prevVal = Number((await localforage.getItem(key)) || 0);
              if (prevVal >= MAX_DAILY_HERO_CARDS) {
                alert(
                  `Ліміт досягнуто — не більше ${MAX_DAILY_HERO_CARDS} карток на добу.`,
                );
                return;
              }
              const nextVal = prevVal + 1;
              await localforage.setItem(key, nextVal);
              setUploadedToday(nextVal);
            } catch (err) {
              console.error("Failed to update hero uploaded count:", err);
            }

            setCustomHeroBgs((prev) => [
              { src: blob, name: file.name, category: "Ваші картинки" },
              ...prev,
            ]);
            setHeroBg(blob);
          },
          "image/jpeg",
          0.7,
        );
      };
    };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const [coordinateSuggestions, setCoordinateSuggestions] = useState([]);
  const [showCoordinateSuggestions, setShowCoordinateSuggestions] =
    useState(false);
  const [isSearchingNearby, setIsSearchingNearby] = useState(false);
  const [nearbySearchStatus, setNearbySearchStatus] = useState("");
  const [cooldown, setCooldown] = useState(() => {
    const saved = localStorage.getItem("hero_cooldown_until");
    if (saved) {
      const until = parseInt(saved, 10);
      const now = Date.now();
      return until > now ? Math.ceil((until - now) / 1000) : 0;
    }
    return 0;
  });
  const searchRef = useRef(null);
  const API_KEY = "5104647d3e574f4a3f23c0aa092eb2b9";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.type === "mousedown" && event.button !== 0) return;
      if (
        event.type === "mousedown" &&
        (event.target === document.body ||
          event.target === document.documentElement)
      )
        return;
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    localforage.getItem("pinnedLinks").then((val) => {
      if (val) setPinnedLinks(val);
    });
  }, []);

  const togglePin = (id) => {
    setPinnedLinks((prev) => {
      let newPinned;
      if (prev.includes(id)) {
        newPinned = prev.filter((p) => p !== id);
      } else {
        newPinned = [id, ...prev].slice(0, 5);
      }
      localforage.setItem("pinnedLinks", newPinned);
      return newPinned;
    });
  };

  const fetchWikipediaResults = useCallback(async (query) => {
    const trimmed = query.trim();
    if (!trimmed) {
      setWikipediaResults([]);
      return;
    }

    setIsWikipediaLoading(true);
    try {
      const response = await fetch(buildWikipediaSearchUrl(trimmed));
      if (!response.ok) {
        throw new Error(`Wikipedia request failed: ${response.status}`);
      }
      const data = await response.json();
      const results = (data?.query?.search || []).map((item) => ({
        id: item.pageid,
        title: item.title,
        snippet: parseWikipediaSnippet(item.snippet),
        url: `https://uk.wikipedia.org/wiki/${encodeURIComponent(item.title).replace(/%20/g, "_")}`,
      }));
      setWikipediaResults(results);
    } catch (error) {
      console.error("Wikipedia search error:", error);
      setWikipediaResults([]);
    } finally {
      setIsWikipediaLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchMode !== "links") {
      setWikipediaResults([]);
      setIsWikipediaLoading(false);
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      fetchWikipediaResults(inputValue);
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [searchMode, inputValue, fetchWikipediaResults]);

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

  useEffect(() => {
    let interval;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            localStorage.removeItem("hero_cooldown_until");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  const handleSelectByCoordinates = async () => {
    if (cooldown > 0) return;

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
    if (cooldown > 0) return;

    const cityObj = {
      name: city.name,
      fullName: `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    };
    onAddCity(cityObj);
    window.dispatchEvent(new CustomEvent('domino-next-step-auto'));
    setCooldown(10);
    localStorage.setItem("hero_cooldown_until", Date.now() + 10000);
    
    setLatitude("");
    setLongitude("");
    setShowCoordinateSuggestions(false);
    setCoordinateSuggestions([]);
  };

  const handleSelect = (city) => {
    if (cooldown > 0) return;

    const cityObj = {
      name: city.name,
      fullName: `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    };
    onAddCity(cityObj);
    window.dispatchEvent(new CustomEvent('domino-next-step-auto'));
    setCooldown(9);
    localStorage.setItem("hero_cooldown_until", Date.now() + 9000);
    
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
          label: "З ДНЕМ НАРОДЖЕННЯ! 🎂",
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
        $blurType={heroBgBlurType}
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
        $blurType={heroBgBlurType}
        $focalX={heroBgFocal2?.x || 50}
        $focalY={heroBgFocal2?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg2)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg2)?.end}
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
        $blurType={heroBgBlurType}
        $focalX={heroBgFocal3?.x || 50}
        $focalY={heroBgFocal3?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg3)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg3)?.end}
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
        $blurType={heroBgBlurType}
        $focalX={heroBgFocal4?.x || 50}
        $focalY={heroBgFocal4?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg4)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg4)?.end}
      />
      <Overlay $opacity={heroOverlayOpacity} $isStickyBgMode={isStickyBgMode} />
      <ChangeBgButton ref={(el) => registerRef('changeBgButton', el)} onClick={() => setIsModalOpen(true)}>
        <GiPalette /><p style={{fontSize: "11px"}}>Змінити фон?</p>
      </ChangeBgButton>
      <HeroDecors $image={herotext} $start={startAnimation} />
      <DelayedContent $start={startAnimation}>
        <HeroDecor>
          <HeroFix>
            <HeroFi>
              <HeroDate ref={timezoneMenuRef}>
                {heroDateString}
                <Tooltip content="Змінити часовий пояс" isDarkMode={isDarkMode}>
                <TimezoneButton
                  ref={(el) => registerRef('timezoneButton', el)}
                  onClick={() => setShowTimezoneMenu(!showTimezoneMenu)}
                  aria-label="Змінити часовий пояс"
                >
                  <MdSettingsSuggest/>
                </TimezoneButton>
                </Tooltip>
                {showTimezoneMenu && createPortal (
                  <TimezoneMenu>
                    <TimezoneMenuHeader>
                      <TimezoneMenuCloseBtn
                        type="button"
                        onClick={() => setShowTimezoneMenu(false)}
                        aria-label="Закрити список часових поясів"
                      >
                        ×
                      </TimezoneMenuCloseBtn>
                      <TimezoneMenuTitle>Часовий пояс</TimezoneMenuTitle>
                    </TimezoneMenuHeader>
                    <SortButtonsRow>
                      <SortBtn
                        $active={tzSortMode === "default"}
                        onClick={() => setTzSortMode("default")}
                      >
                        За замовчуванням
                      </SortBtn>
                      <SortBtn
                        $active={tzSortMode === "offset"}
                        onClick={() => setTzSortMode("offset")}
                      >
                        UTC +/-
                      </SortBtn>
                    </SortButtonsRow>
                    <div style={{ flex: 1, overflowY: "auto", padding: "0 5px 10px" }}>
                    {sortedTimezones.map((tz) => {
                      const isSelected =
                        selectedTimezone === tz.value ||
                        (tz.value === "custom_input" && showCustomInput);
                      const info = getTzTimeInfo(tz.value);
                      return (
                        <TimezoneOption
                          key={tz.value}
                          $selected={isSelected}
                          onClick={() => {
                            if (tz.value === "custom_input") {
                              setShowCustomInput(true);
                              const isCurrentPredefined = TIMEZONES.some(
                                (t) => t.value === selectedTimezone,
                              );
                              if (!isCurrentPredefined) {
                                setCustomTimezoneInputValue(selectedTimezone);
                              } else {
                                setCustomTimezoneInputValue("");
                              }
                            } else {
                              setShowCustomInput(false);
                              setSelectedTimezone(tz.value);
                              localforage.setItem(
                                "selected_timezone",
                                tz.value,
                              );
                              setShowTimezoneMenu(false);
                            }
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <span>{tz.label}</span>
                            {info && (
                              <span
                                style={{
                                  fontSize: "16px",
                                  opacity: 0.9,
                                  display: "flex",
                                  gap: "10px",
                                  whiteSpace: "nowrap",
                                  marginLeft: "12px",
                                  color: info.isDay ? "#ffd54f" : "#90caf9",
                                }}
                              >
                                {info.isDay ? <FaSun/> : <BsMoonStarsFill/>}
                                <p>{info.timeStr}</p>
                              </span>
                            )}
                          </div>
                        </TimezoneOption>
                      );
                    })}{showCustomInput && (
  <div style={{ padding: "12px 0" }}>
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type="text"
        value={customTimezoneInputValue}
        onChange={(e) => setCustomTimezoneInputValue(e.target.value)}
        placeholder="Наприклад: Europe/Warsaw"
        style={{
          width: "100%",
          padding: "10px 110px 10px 10px", // Додано правий padding, щоб текст не налізав на кнопку
          borderRadius: "5px",
          border: "1px solid #ffb36c",
          background: "#111",
          color: "#fff",
          fontSize: "14px",
          boxSizing: "border-box",
        }}
      />
     <button
  type="button"
  onClick={() => {
    if (customTimezoneInputValue.trim()) {
      try {
        Intl.DateTimeFormat("en", {
          timeZone: customTimezoneInputValue.trim(),
        });
        setSelectedTimezone(customTimezoneInputValue.trim());
        localforage.setItem(
          "selected_timezone",
          customTimezoneInputValue.trim()
        );
        setShowTimezoneMenu(false);
      } catch (e) {
        showThemeAlert(
          "Невірний формат часового поясу. Спробуйте, наприклад, 'Europe/Kyiv' або 'America/New_York'.",
          isDarkMode
        );
      }
    } else {
      showThemeAlert("Будь ласка, введіть часовий пояс.", isDarkMode);
    }
  }}
        style={{
          position: "absolute",
          right: "4px",
          top: "4px",
          bottom: "4px",
          padding: "0 12px",
          background: "#ffb36c",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "12px",
          color: "#1e1e1e",
        }}
      >
        Застосувати
      </button>
    </div>
  </div>
)}
                    </div>
                  </TimezoneMenu>,
  document.body 
                )}
              </HeroDate>
            </HeroFi>
          </HeroFix>
        </HeroDecor>
        <SearchWrapper ref={searchRef}>
          {searchMode === "city" ? (
            <HeroFormater>
              <SearchContainer>
                <ModePicker>
                  <Tooltip content="Вибрати режим пошуку" isDarkMode={isDarkMode}>
                  <ModeIconBtn
                    onClick={() => setShowModeDropdown((v) => !v)}
                    aria-label="Вибрати режим пошуку"
                  >
                    <FaMountainCity />
                  </ModeIconBtn>
                  </Tooltip>
                  {showModeDropdown && (
                    <ModeDropdown $isDarkMode={isDarkMode}>
                      <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "city"} onClick={() => { setSearchMode("city"); setShowModeDropdown(false); setLatitude(""); setLongitude(""); setSuggestions([]); setShowList(false); }}>
                      <FaMountainCity /> За назвою міста
                      </ModeDropdownItem>
                      <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "coordinates"} onClick={() => { setSearchMode("coordinates"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); }}>
                       <FaMapLocationDot /> Координати
                      </ModeDropdownItem>
                      <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "links"} onClick={() => { setSearchMode("links"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); setExpandedLinkId(null); }}>
                      <TbWorldSearch />  Посилання
                      </ModeDropdownItem>
                    </ModeDropdown>
                  )}
                </ModePicker>
                <HeroInput
                  ref={(el) => registerRef('heroInput', el)}
                  value={inputValue}
                  $isDarkMode={isDarkMode}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    window.dispatchEvent(new CustomEvent('domino-hero-input-change', { detail: { value: e.target.value } }));
                  }}
                  onFocus={() => suggestions.length > 0 && setShowList(true)}
                  placeholder={
                    cooldown > 0
                      ? `Зачекайте ${cooldown} сек...`
                      : "Уведіть місто, село."
                  }
                  disabled={cooldown > 0}
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
                {showList && suggestions.length > 0 && (
                  <SuggestionsList>
                    {suggestions.map((city, index) => (
                      <SuggestionItem
                        key={`${city.lat}-${city.lon}-${index}`}
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
                <HeroButton
                  onClick={() => {
                    if (cooldown === 0 && suggestions[0])
                      handleSelect(suggestions[0]);
                  }}
                  disabled={cooldown > 0}
                >
                  {cooldown > 0 ? cooldown : "⌕"}
                </HeroButton>
              </SearchContainer>
            </HeroFormater>
          ) : searchMode === "links" ? (
            /* ── Fullscreen links search mode: rendered via portal at end of HeroDiv ── */
            null
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
                <ModePicker style={{ alignSelf: "flex-start" }}>
                 <Tooltip content="Вибрати режим пошуку" isDarkMode={isDarkMode}>
                  <ModeIconBtn
                    onClick={() => setShowModeDropdown((v) => !v)}
                    aria-label="Вибрати режим пошуку"
                    style={{ borderRadius: "8px 0 0 8px", height: "30px" }}
                  >
                    <FaMapLocationDot /> 
                  </ModeIconBtn>
                  </Tooltip>
                  {showModeDropdown && (
                    <ModeDropdown $isDarkMode={isDarkMode}>
                      <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "city"} onClick={() => { setSearchMode("city"); setShowModeDropdown(false); setLatitude(""); setLongitude(""); setSuggestions([]); setShowList(false); }}>
                        <FaMountainCity />  За назвою міста
                      </ModeDropdownItem>
                      <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "coordinates"} onClick={() => { setSearchMode("coordinates"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); }}>
                        <FaMapLocationDot />  Координати
                      </ModeDropdownItem>
                      <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "links"} onClick={() => { setSearchMode("links"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); setExpandedLinkId(null); }}>
                       <TbWorldSearch />   Посилання
                      </ModeDropdownItem>
                    </ModeDropdown>
                  )}
                </ModePicker>
                <CoordinateInput>
                  <input
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Широта: Від -90° до +90°"
                    $isDarkMode={isDarkMode}
                    disabled={cooldown > 0 || isSearchingNearby}
                    min="-90"
                    max="90"
                    step="0.01"
                  />
                </CoordinateInput>
                <CoordinateInput>
                  <input
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    $isDarkMode={isDarkMode}
                    placeholder="Довгота: Від -180° до +180°"
                    disabled={cooldown > 0 || isSearchingNearby}
                    min="-180"
                    max="180"
                    step="0.01"
                  />
                </CoordinateInput>
                <HeroButton
                  onClick={handleSelectByCoordinates}
                  disabled={cooldown > 0 || isSearchingNearby}
                  style={{ alignSelf: "flex-start" }}
                >
                  {cooldown > 0 ? cooldown : isSearchingNearby ? "…" : "⌕"}
                </HeroButton>
              </CoordinatesContainer>
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
                      ? "🔄 Шукаємо поруч…"
                      : coordinateSuggestions.length > 1
                        ? "📍 Знайдено поруч з координатами:"
                        : "📍 Лише точка за координатами (міст не знайдено)"}
                  </div>
                  {coordinateSuggestions.map((city, index) => (
                    <SuggestionItem
                      key={`${city.lat}-${city.lon}-${index}`}
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
        
        <div style={{ marginTop: "250px", zIndex: 90 }}>
          <News user={user} isDarkMode={isDarkMode} isStickyBgMode={isStickyBgMode} />
        </div>
      </DelayedContent>
      {isModalOpen && (
        <ModalOverlay $isClosing={isClosing} onClick={handleCloseModal}>
          <ModalContent
            $isClosing={isClosing}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "10px",
                borderBottom: "1px solid rgba(255, 179, 108, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 179, 108, 0.25), rgba(255, 140, 43, 0.1))",
                    border: "1px solid rgba(255, 179, 108, 0.4)",
                    borderRadius: "10px",
                    padding: "6px 10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  ✨
                </div>
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: "700",
                      background: "linear-gradient(90deg, #ffb36c 0%, #ffe3b8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "0.4px",
                    }}
                  >
                    Налаштування фону та вигляду
                  </h2>
                  <span style={{ fontSize: "11px", color: "#8a8d9b" }}>
                    Персоналізуйте теми, слайд-шоу та візуальні ефекти
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <CloseBtn onClick={resetBgSettings}>
                  🔄 Скинути
                </CloseBtn>
                <CloseBtn $danger onClick={handleCloseModal}>
                  ✖ Закрити
                </CloseBtn>
              </div>
            </div>
            <ModalConfigGrid>
              <ConfigRow>
                <label>🎞️ Режим фону:</label>
                <div style={{ display: "flex", gap: "5px", width: "100%" }}>
                  <select
                    value={heroBgMode}
                    onChange={(e) => {
                      setHeroBgMode(e.target.value);
                      if (e.target.value === "random") {
                        const shuffled = shuffleArray(allBgs);
                        setRandomBgsList(shuffled);
                        setRandomCurrentIndex(0);
                        if (shuffled[0]) {
                          handleSelectBg(shuffled[0].src);
                        }
                      }
                      setActiveLayer(1);
                    }}
                    style={{                
                      background: "rgba(10, 14, 26, 0.95)",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "500",
                      border: "1px solid rgba(255, 179, 108, 0.3)",
                      borderRadius: "6px",
                      padding: "4px 6px",
                      flex: 1,
                      outline: "none",
                    }}
                  >
                    <option value="static">Статичний (1 фото)</option>
                    <option value="slideshow-2">Слайд-шоу (2 фото)</option>
                    <option value="slideshow-3">Слайд-шоу (3 фото)</option>
                    <option value="slideshow-4">Слайд-шоу (4 фото)</option>
                    <option value="random">Випадковий (усі фото)</option>
                  </select>
                  {heroBgMode === "random" && (
                    <Tooltip content="Перемішати та скинути чергу" isDarkMode={isDarkMode}>
                      <button
                        onClick={() => {
                          const shuffled = shuffleArray(allBgs);
                          setRandomBgsList(shuffled);
                          setRandomCurrentIndex(0);
                          if (shuffled[0]) {
                            handleSelectBg(shuffled[0].src);
                            setActiveLayer(1);
                          }
                        }}
                        aria-label="Перемішати та скинути чергу"
                        style={{
                          background: "linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",
                          border: "none",
                          borderRadius: "6px",
                          color: "#000",
                          padding: "2px 8px",
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "11px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        🔀
                      </button>
                    </Tooltip>
                  )}
                </div>
              </ConfigRow>
              <ConfigRow>
                <label>
                  🌘 Затемнення: {(heroOverlayOpacity * 100).toFixed(0)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.8"
                  step="0.05"
                  value={heroOverlayOpacity}
                  onChange={(e) =>
                    setHeroOverlayOpacity(parseFloat(e.target.value))
                  }
                />
              </ConfigRow>
              <ConfigRow>
                <label>🔍 Наближення: {heroBgZoom.toFixed(2)}x</label>
                <input
                  type="range"
                  min="1"
                  max="2"
                  step="0.01"
                  value={heroBgZoom}
                  onChange={(e) => setHeroBgZoom(parseFloat(e.target.value))}
                />
              </ConfigRow>
              <ConfigRow>
                <label>🎭 Ефект фокусу:</label>
                <div style={{ display: "flex", gap: "4px" }}>
                  <ModeButton
                    $active={heroBgBlurType === "smooth"}
                    onClick={() => {
                      setHeroBgBlurType("smooth");
                      setHeroBgPixelation(0);
                    }}
                    style={{ flex: 1, fontSize: "10px", padding: "3px", borderRadius: "6px" }}
                  >
                    Плавне
                  </ModeButton>
                  <ModeButton
                    $active={heroBgBlurType === "pixelated"}
                    onClick={() => setHeroBgBlurType("pixelated")}
                    style={{ flex: 1, fontSize: "10px", padding: "3px", borderRadius: "6px" }}
                  >
                    Піксельне
                  </ModeButton>
                </div>
              </ConfigRow>
              <ConfigRow>
                <label>🔄 Розворот: {heroBgRotation}°</label>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={heroBgRotation}
                  onChange={(e) => setHeroBgRotation(parseInt(e.target.value))}
                />
              </ConfigRow>
              <ConfigRow>
                <label>🌫️ Розмиття: {heroBgBlur.toFixed(1)}px</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.5"
                  value={heroBgBlur}
                  onChange={(e) => setHeroBgBlur(parseFloat(e.target.value))}
                />
              </ConfigRow>
              <ConfigRow
                style={{ opacity: heroBgBlurType === "pixelated" ? 1 : 0.4 }}
              >
                <label>👾 Пікселізація: {heroBgPixelation.toFixed(1)}</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.2"
                  value={heroBgPixelation}
                  disabled={heroBgBlurType !== "pixelated"}
                  onChange={(e) =>
                    setHeroBgPixelation(parseFloat(e.target.value))
                  }
                />
              </ConfigRow>
            </ModalConfigGrid>

            {(heroBgMode === "slideshow-2" ||
              heroBgMode === "slideshow-3" ||
              heroBgMode === "slideshow-4" ||
              heroBgMode === "random") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <ModalDivider />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "8px",
                  }}
                >
                  <ConfigRow>
                    <label>
                      ⏱️ Інтервал:{" "}
                      {slideshowInterval >= 60
                        ? `${Math.floor(slideshowInterval / 60)}хв ${slideshowInterval % 60 > 0 ? (slideshowInterval % 60) + "с" : ""}`
                        : `${slideshowInterval}с`}
                    </label>
                    <input
                      type="range"
                      min="4"
                      max="300"
                      step="1"
                      value={slideshowInterval}
                      onChange={(e) =>
                        setSlideshowInterval(parseInt(e.target.value))
                      }
                    />
                  </ConfigRow>
                  <ConfigRow>
                    <label>✨ Перехід: {slideshowTransition}с</label>
                    <input
                      type="range"
                      min="0.5"
                      max="1"
                      step="0.1"
                      value={slideshowTransition}
                      onChange={(e) =>
                        setSlideshowTransition(parseFloat(e.target.value))
                      }
                    />
                  </ConfigRow>
                  <ConfigRow>
                    <label>⚡ Швидкість відео: {videoPlaybackSpeed}x</label>
                    <input
                      type="range"
                      min="0.25"
                      max="2"
                      step="0.25"
                      value={videoPlaybackSpeed}
                      onChange={(e) =>
                        setVideoPlaybackSpeed(parseFloat(e.target.value))
                      }
                    />
                  </ConfigRow>
                </div>
              </div>
            )}

            <ModalDivider />
            <ModalSectionTitle>
              🎨 Бібліотека зображень
            </ModalSectionTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <ModalSearchInput
                placeholder="🔍 Пошук картин за назвою..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleBgCount(300);
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ display: "flex", gap: "6px", alignItems: "center" }}
                >
                  <label style={{ fontSize: "12px", color: "#ffc996", fontWeight: "600" }}>Категорія:</label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    style={{
                      background: "rgba(10, 14, 26, 0.95)",
                      fontSize: "12px",
                      color: "#fff",
                      border: "1px solid rgba(255, 179, 108, 0.3)",
                      borderRadius: "6px",
                      padding: "4px 8px",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="all">Усі</option>
                    <option value="Дракони">🐉 Дракони</option>
                    <option value="Стихія">🐾 Стихія та тварини</option>
                    <option value="Локації">🏰 Локації і предмети</option>
                    <option value="Фентезі">✨ Фентезі</option>
                    <option value="Хоррор">💀 Хоррор</option>
                    <option value="Майбутне">🔮 Песимізм</option>
                    <option value="Скріншоти">📸 Скріншоти</option>
                    <option value="custom">📁 Ваші завантажені</option>
                  </select>
                </div>
                <div
                  style={{ display: "flex", gap: "6px", alignItems: "center" }}
                >
                  <label style={{ fontSize: "12px", color: "#ffc996", fontWeight: "600" }}>Сортувати:</label>
                  <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    style={{
                      background: "rgba(10, 14, 26, 0.95)",
                      color: "#fff",
                      border: "1px solid rgba(255, 179, 108, 0.3)",
                      borderRadius: "6px",
                      fontSize: "12px",
                      padding: "4px 8px",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="rating">⭐ За рейтингом</option>
                    <option value="az">🔤 Назва А-Я</option>
                    <option value="za">🔤 Назва Я-А</option>
                  </select>
                </div>
              </div>
            </div>

            <BgGrid>
              {pagedBgs.map((bg, idx) => {
                const rating = bgRatings[bg.src] || 0;
                const qIndex = randomBgsList.findIndex((item) => item.src === bg.src);
                return (
                  <BgItem
                    key={idx}
                    $active={heroBg === bg.src || heroBg2 === bg.src}
                  >
                    <RatingOverlay>
                      <HeartIcon
                        $color={
                          rating === 2 ? "gold" : rating === 1 ? "#ff4d4d" : "white"
                        }
                        onClick={() => handleRate(bg.src)}
                      >
                        {rating === 2 ? "💛" : rating === 1 ? "❤️" : "🤍"}
                      </HeartIcon>
                      <div style={{ display: "flex", gap: "4px" }}>
                        {bg.description && (
                          <Tooltip content="Детальний опис картини" isDarkMode={isDarkMode}>
                            <HeartIcon
                              $color="#aef"
                              aria-label="Детальний опис картини"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDescriptionModal({
                                  name: bg.name,
                                  text: bg.description,
                                  src: bg.src,
                                  author: bg.author,
                                  source: bg.source,
                                });
                              }}
                            >
                              ❓
                            </HeartIcon>
                          </Tooltip>
                        )}
                        <Tooltip content="Скачати файл фону" isDarkMode={isDarkMode}>
                          <HeartIcon
                            $color="#ffda79"
                            aria-label="Скачати фон"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadBg(bg);
                            }}
                          >
                            📥
                          </HeartIcon>
                        </Tooltip>
                      </div>
                    </RatingOverlay>
                    {isCustom(bg.src) && (
                      <>
                        <EditBtn
                          onClick={(e) => {
                            e.stopPropagation();
                            const newName = window.prompt(
                              "Введіть нову назву для цих шпалер:",
                              bg.name,
                            );
                            if (newName) {
                              setCustomHeroBgs((prev) =>
                                prev.map((b) =>
                                  b.src === bg.src
                                    ? { ...b, name: newName }
                                    : b,
                                ),
                              );
                            }
                          }}
                          aria-label="Редагувати назву"
                        >
                          ✎
                        </EditBtn>
                        <DeleteBtn
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              window.confirm(`Видалити шпалери "${bg.name}"?`)
                            ) {
                              setCustomHeroBgs((prev) =>
                                prev.filter((b) => b.src !== bg.src),
                              );
                              setBgRatings((prev) => {
                                const newRatings = { ...prev };
                                delete newRatings[bg.src];
                                return newRatings;
                              });
                              if (heroBg === bg.src) setHeroBg(hills);
                              if (heroBg2 === bg.src) setHeroBg2(hills);
                            }
                          }}
                          aria-label="Видалити"
                        >
                          ×
                        </DeleteBtn>
                      </>
                    )}
                    {bg.author && (
                      <TopOverlay>
                        <div style={{ fontWeight: "bold" }}>{bg.author}</div>
                        {bg.source && <div>{bg.source}</div>}
                      </TopOverlay>
                    )}
                    <NameOverlay
                      $hasSlots={
                        heroBgMode === "slideshow-2" ||
                        heroBgMode === "slideshow-3" ||
                        heroBgMode === "slideshow-4"
                      }
                    >
                      {heroBgMode === "random" && qIndex !== -1 && (
                        <span style={{ 
                          color: qIndex === randomCurrentIndex ? "#6cffe4" : "#ffb36c", 
                          marginRight: "6px", 
                          fontWeight: "bold",
                          textShadow: qIndex === randomCurrentIndex ? "0 0 8px #6cffe4" : "none"
                        }}>
                          #{qIndex + 1} {qIndex === randomCurrentIndex && "(Зараз)"}
                        </span>
                      )}
                      {bg.name}
                    </NameOverlay>
                    {isVideoSource(bg.src) ? (
                      <VideoThumbnail
                        bg={bg}
                        onClick={() => handleSelectBg(bg.src)}
                      />
                    ) : (
                      <BgSquare
                        src={bg.src}
                        loading="lazy"
                        onClick={() => handleSelectBg(bg.src)}
                        title={bg.name}
                      />
                    )}
                    {heroBgMode === "slideshow-2" && (
                      <SlotButtons>
                        <SlotBtn
                          $active={heroBg === bg.src}
                          onClick={() => handleSelectBg(bg.src, 1)}
                        >
                          Слот 1
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg2 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 2)}
                        >
                          Слот 2
                        </SlotBtn>
                      </SlotButtons>
                    )}
                    {heroBgMode === "slideshow-3" && (
                      <SlotButtons>
                        <SlotBtn
                          $active={heroBg === bg.src}
                          onClick={() => handleSelectBg(bg.src, 1)}
                        >
                          Слот 1
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg2 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 2)}
                        >
                          Слот 2
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg3 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 3)}
                        >
                          Слот 3
                        </SlotBtn>
                      </SlotButtons>
                    )}
                    {heroBgMode === "slideshow-4" && (
                      <SlotButtons>
                        <SlotBtn
                          $active={heroBg === bg.src}
                          onClick={() => handleSelectBg(bg.src, 1)}
                        >
                          Слот 1
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg2 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 2)}
                        >
                          Слот 2
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg3 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 3)}
                        >
                          Слот 3
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg4 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 4)}
                        >
                          Слот 4
                        </SlotBtn>
                      </SlotButtons>
                    )}
                  </BgItem>
                );
              })}
            </BgGrid>

            {sortedBgs.length > visibleBgCount && (
              <LoadMoreButton
                onClick={() => setVisibleBgCount((prev) => prev + 300)}
              >
                Завантажити ще
              </LoadMoreButton>
            )}

            <ModalDivider />
            <DropZone
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <div style={{ fontSize: "24px" }}>📤</div>
              <div>
                <span style={{ color: "#ffb36c", fontWeight: "bold" }}>Перетягніть сюди</span> картинку або відео
              </div>
              <span style={{ fontSize: "11px", color: "#8a8d9b" }}>або натисніть для вибору файлу з вашого пристрою</span>
              <input
                type="file"
                ref={fileInputRef}
                hidden
                accept="image/*,video/*"
                onChange={(e) => handleFileUpload(e.target.files[0])}
              />
            </DropZone>
          </ModalContent>
        </ModalOverlay>
      )}
      {descriptionModal && (
        <div
          onClick={() => setDescriptionModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "5px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              border: "2px solid #ffb36c",
              borderRadius: "14px",
              width: "90%",
              maxWidth: "900px",
              height: "80vh",
              maxHeight: "650px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 50px rgba(0,0,0,0.9)",
            }}
          >
            {isVideoSource(descriptionModal.src) ? (
              <video
                src={descriptionModal.src}
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${descriptionModal.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxSizing: "border-box",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                <h3 style={{ color: "#ffb36c", margin: 0, fontSize: "20px", fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}>
                  {descriptionModal.name}
                </h3>
                <button
                  onClick={() => setDescriptionModal(null)}
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "5px",
                    width: "30px",
                    height: "30px",
                    color: "#fff",
                    fontSize: "30px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,0,0,0.7)";
                    e.currentTarget.style.borderColor = "red";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,0,0,0.6)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                >
                  ×
                </button>
              </div>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  margin: "5px 0",
                  paddingRight: "5px",
                }}
              >
                <p
                  style={{
                    lineHeight: 1.8,
                    whiteSpace: "pre-wrap",
                    fontSize: "15px",
                    margin: 0,
                    textShadow: "0 2px 10px rgba(0,0,0,0.95)",
                    color: "#f5f5f5",
                    borderRadius: "8px",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  {descriptionModal.text}
                </p>
              </div>
     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "8px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.75)",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      border: "1px solid rgba(255, 179, 108, 0.4)",
                      color: "#ffb36c",
                      fontWeight: "bold",
                      textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                     Автор: {descriptionModal.author || "Невідомий"}
                  </div>
                  {descriptionModal.source && (
                    <div
                      style={{
                        background: "rgba(0, 0, 0, 0.75)",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        border: "1px solid rgba(255, 179, 108, 0.4)",
                        color: "#ffb36c",
                        fontWeight: "bold",
                        textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                      }}
                    >
                      Джерело: {descriptionModal.source}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleDownloadBg(descriptionModal)}
                  style={{
                    background: "linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",
                    color: "#000",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(255, 179, 108, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "transform 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  📥 Скачати {isVideoSource(descriptionModal.src) ? "відео" : "картинку"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <FullscreenImageOverlay onClick={() => setFullscreenImage(null)}>
          <FullscreenImage src={fullscreenImage} alt="Fullscreen" />
        </FullscreenImageOverlay>
      )}

      {fullscreenVideo && (
        <FullscreenImageOverlay onClick={() => setFullscreenVideo(null)}>
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              position: 'relative', 
              width: '90%', 
              maxWidth: '800px', 
              aspectRatio: '16/9', 
              background: '#000', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 0 20px rgba(255,255,255,0.2)'
            }}
          >
            <iframe 
              src={fullscreenVideo.includes("embed") ? `${fullscreenVideo}?autoplay=1` : `https://www.youtube.com/embed/${getYoutubeId(fullscreenVideo)}?autoplay=1`} 
              aria-label="YouTube Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            ></iframe>
            <button 
              onClick={() => setFullscreenVideo(null)} 
              style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                background: 'rgba(0,0,0,0.6)', 
                border: 'none', 
                borderRadius: '50%', 
                width: '30px', 
                height: '30px', 
                color: '#fff', 
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100
              }}
            >
              ×
            </button>
          </div>
        </FullscreenImageOverlay>
      )}
      {/* ── FULLSCREEN LINKS SEARCH OVERLAY ── */}
      {searchMode === "links" && (
        <LinksSearchOverlay $isDarkMode={isDarkMode}>
          <LinksSearchHeader $isDarkMode={isDarkMode}>
            <LinksSearchBar $isDarkMode={isDarkMode}>
              <ModePicker>
                <Tooltip content="Вибрати режим пошуку" isDarkMode={isDarkMode}>
                  <ModeIconBtn
                    onClick={() => setShowModeDropdown((v) => !v)}
                    aria-label="Вибрати режим пошуку"
                    style={{ background: "#ffb36c", color: "#000", borderRadius: "50%", width: "34px", height: "34px" }}
                  >
                    <TbWorldSearch />
                  </ModeIconBtn>
                </Tooltip>
                {showModeDropdown && (
                  <ModeDropdown $isDarkMode={isDarkMode}>
                    <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "city"} onClick={() => { setSearchMode("city"); setShowModeDropdown(false); setLatitude(""); setLongitude(""); setSuggestions([]); setShowList(false); }}>
                      <FaMountainCity /> За назвою міста
                    </ModeDropdownItem>
                    <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "coordinates"} onClick={() => { setSearchMode("coordinates"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); }}>
                      <FaMapLocationDot /> Координати
                    </ModeDropdownItem>
                    <ModeDropdownItem $isDarkMode={isDarkMode} $active={searchMode === "links"} onClick={() => { setSearchMode("links"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); }}>
                      <TbWorldSearch /> Посилання
                    </ModeDropdownItem>
                  </ModeDropdown>
                )}
              </ModePicker>
              <LinksSearchInput
                $isDarkMode={isDarkMode}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Пошук сайтів, ігор, статей, авторів..."
                type="text"
                autoFocus
                autoComplete="off"
              />
              {inputValue && (
                <ClearButton
                  onClick={() => setInputValue("")}
                  aria-label="Очистити"
                  type="button"
                  style={{ position: "static", transform: "none", borderRadius: "50%" }}
                >
                  ×
                </ClearButton>
              )}
              <HeroButton
                onClick={() => {
                  if (inputValue.trim()) {
                    window.open("https://www.google.com/search?q=" + encodeURIComponent(inputValue), "_blank");
                  }
                }}
                style={{ width: "36px", height: "36px", borderRadius: "50%", fontSize: "16px" }}
              >
                ⌕
              </HeroButton>
            </LinksSearchBar>

            <LinksSearchMeta $isDarkMode={isDarkMode}>
              Натисніть на картку сайту, щоб відкрити повний опис та галерею • Esc для виходу
            </LinksSearchMeta>
          </LinksSearchHeader>

          <LinksResultsList>
            {inputValue.trim() === "" && pinnedLinks.length > 0 && (
              <>
                <LinksPinnedLabel $isDarkMode={isDarkMode}>📌 Закріплені сайти</LinksPinnedLabel>
                {customLinksData
                  .filter((link) => pinnedLinks.includes(link.id))
                  .map((link) => {
                    const author = extractAuthor(link);
                    const platforms = getLinkPlatforms(link);
                    return (
                      <LinksResultItem
                        key={`pinned-${link.id}`}
                        $isDarkMode={isDarkMode}
                        onClick={() => setLinkDetailModal(link)}
                      >
                        <LinkFavicon $bg="linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)">
                          <LinkFaviconImage link={link} />
                        </LinkFavicon>
                        <LinkMainInfo>
                          <LinkTitle $isDarkMode={isDarkMode}>{link.title}</LinkTitle>
                          {author && <LinkAuthor $isDarkMode={isDarkMode}> {author}</LinkAuthor>}
                          {link.tags && (
                            <LinkTagsRow>
                              {link.tags.map((t) => (
                                <LinkTagBadge key={t} $isDarkMode={isDarkMode}>#{t}</LinkTagBadge>
                              ))}
                            </LinkTagsRow>
                          )}
                        </LinkMainInfo>
                        <LinkPlatformBtns onClick={(e) => e.stopPropagation()}>
                          {platforms.map((p) => {
                            const cfg = PLATFORM_CONFIG[p.type];
                            if (!cfg) return null;
                            return (
                              <PlatformBtn
                                key={p.type}
                                $color={cfg.color}
                                onClick={() => window.open(p.url, "_blank")}
                              >
                                {cfg.emoji} {cfg.label}
                              </PlatformBtn>
                            );
                          })}
                          <button
                            onClick={() => window.open(link.url, "_blank")}
                            style={{
                              padding: "4px 10px",
                              background: "#ffb36c",
                              border: "none",
                              borderRadius: "20px",
                              fontWeight: "bold",
                              color: "#000",
                              fontSize: "11px",
                              cursor: "pointer",
                            }}
                          >
                            {link.buttonText || "Відкрити"}
                          </button>
                        </LinkPlatformBtns>
                      </LinksResultItem>
                    );
                  })}
                <LinksSectionDivider $isDarkMode={isDarkMode} />
                <LinksPinnedLabel $isDarkMode={isDarkMode}>🌐 Усі сайти та ресурси</LinksPinnedLabel>
              </>
            )}

            {/* Filtered Custom Links */}
            {customLinksData
              .filter((link) => {
                if (inputValue.trim() === "") return true;
                const lowerInput = inputValue.toLowerCase();
                const matchesText =
                  link.title.toLowerCase().includes(lowerInput) ||
                  (link.snippet && link.snippet.toLowerCase().includes(lowerInput));
                const matchesAuthor =
                  extractAuthor(link)?.toLowerCase().includes(lowerInput);
                const matchesTags =
                  link.tags && link.tags.some((tag) => tag.toLowerCase().includes(lowerInput));
                return matchesText || matchesAuthor || matchesTags;
              })
              .map((link) => {
                const author = extractAuthor(link);
                const platforms = getLinkPlatforms(link);
                const isPinned = pinnedLinks.includes(link.id);
                return (
                  <LinksResultItem
                    key={link.id}
                    $isDarkMode={isDarkMode}
                    onClick={() => setLinkDetailModal(link)}
                  >
                    <LinkFavicon>
                      <LinkFaviconImage link={link} />
                    </LinkFavicon>
                    <LinkMainInfo>
                      <LinkTitle $isDarkMode={isDarkMode}>{link.title}</LinkTitle>
                      {author && <LinkAuthor $isDarkMode={isDarkMode}>{author}</LinkAuthor>}
                      {link.tags && (
                        <LinkTagsRow>
                          {link.tags.map((t) => (
                            <LinkTagBadge key={t} $isDarkMode={isDarkMode}>#{t}</LinkTagBadge>
                          ))}
                        </LinkTagsRow>
                      )}
                    </LinkMainInfo>
                    <LinkPlatformBtns onClick={(e) => e.stopPropagation()}>
                      {platforms.map((p) => {
                        const cfg = PLATFORM_CONFIG[p.type];
                        if (!cfg) return null;
                        return (
                          <PlatformBtn
                            key={p.type}
                            $color={cfg.color}
                            onClick={() => window.open(p.url, "_blank")}
                          >
                            {cfg.emoji} {cfg.label}
                          </PlatformBtn>
                        );
                      })}
                      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                        <button
                          onClick={() => window.open(link.url, "_blank")}
                          style={{
                            padding: "4px 10px",
                            background: "#ffb36c",
                            border: "none",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            color: "#000",
                            fontSize: "11px",
                            cursor: "pointer",
                          }}
                        >
                          {link.buttonText || "Відкрити"}
                        </button>
                        <button
                          onClick={() => togglePin(link.id)}
                          title={isPinned ? "Відкріпити" : "Закріпити"}
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            color: isPinned ? "#ffb36c" : (isDarkMode ? "#666" : "#aaa"),
                          }}
                        >
                          {isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
                        </button>
                      </div>
                    </LinkPlatformBtns>
                  </LinksResultItem>
                );
              })}

            {/* Wikipedia Results */}
            {wikipediaResults.map((result) => (
              <LinksResultItem
                key={result.id}
                $isDarkMode={isDarkMode}
                onClick={() => setLinkDetailModal({
                  title: result.title,
                  url: result.url,
                  snippet: result.snippet,
                  buttonText: "Читати у Вікіпедії",
                  author: "Вікіпедія (Українська)",
                  tags: ["вікіпедія", "енциклопедія"]
                })}
              >
                <LinkFavicon $bg="linear-gradient(135deg, #00bfff, #0077ff)">
                  W
                </LinkFavicon>
                <LinkMainInfo>
                  <LinkTitle $isDarkMode={isDarkMode}>{result.title}</LinkTitle>
                  <LinkAuthor $isDarkMode={isDarkMode}>🌐 Вікіпедія</LinkAuthor>
                </LinkMainInfo>
                <LinkPlatformBtns onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => window.open(result.url, "_blank")}
                    style={{
                      padding: "4px 10px",
                      background: "#00bfff",
                      border: "none",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      color: "#000",
                      fontSize: "11px",
                      cursor: "pointer",
                    }}
                  >
                    Вікіпедія
                  </button>
                </LinkPlatformBtns>
              </LinksResultItem>
            ))}

            {isWikipediaLoading && (
              <div style={{ padding: "16px", textAlign: "center", color: isDarkMode ? "#aaa" : "#555" }}>
                ⏳ Завантажую результати з Вікіпедії...
              </div>
            )}
          </LinksResultsList>
        </LinksSearchOverlay>
      )}

      {/* ── LINK DETAIL MODAL ── */}
      {linkDetailModal && (() => {
        const bgImage = getLinkModalBgImage(linkDetailModal);
        const author = extractAuthor(linkDetailModal);
        return (
          <LinkDetailOverlay onClick={() => setLinkDetailModal(null)}>
            <LinkDetailCard
              $bgImage={bgImage}
              $bg={linkDetailModal.bg}
              onClick={(e) => e.stopPropagation()}
            >
              <LinkDetailHeader>
                <div>
                  <h2
                    style={{
                      color: "#ffb36c",
                      margin: 0,
                      fontSize: "22px",
                      fontWeight: "bold",
                      textShadow: "0 2px 6px rgba(0,0,0,0.9)",
                    }}
                  >
                    {linkDetailModal.title}
                  </h2>
                  {author && (
                    <div style={{ color: "#f9f6f6", fontSize: "13px", marginTop: "4px" }}>
                      Автор / Постачальник: <b>{author}</b>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setLinkDetailModal(null)}
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    color: "#fff",
                    fontSize: "20px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ×
                </button>
              </LinkDetailHeader>

              <LinkDetailBody>
                {linkDetailModal.tags && (
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {linkDetailModal.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(255, 179, 108, 0.2)",
                          color: "#ffb36c",
                          border: "1px solid rgba(255, 179, 108, 0.35)",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                {((linkDetailModal.images && linkDetailModal.images.length > 0) || linkDetailModal.youtubeTrailer) && (
                  <ImageSlider
                    images={linkDetailModal.images || []}
                    youtubeTrailer={linkDetailModal.youtubeTrailer}
                    setFullscreenImage={setFullscreenImage}
                    imageMap={imageMap}
                    setFullscreenVideo={setFullscreenVideo}
                  />
                )}

                <div
                  style={{
                    lineHeight: "1.8",
                    whiteSpace: "pre-wrap",
                    color: "#f0f0f0",
                    fontSize: "14px",
                    textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                    background: "rgba(0, 0, 0, 0.35)",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {linkDetailModal.snippet}
                </div>
              </LinkDetailBody>

              <LinkDetailFooter>
                {getLinkPlatforms(linkDetailModal).map((p) => {
                  const cfg = PLATFORM_CONFIG[p.type];
                  if (!cfg) return null;
                  return (
                    <PlatformBtn
                      key={p.type}
                      $color={cfg.color}
                      onClick={() => window.open(p.url, "_blank")}
                      style={{ padding: "8px 14px", fontSize: "13px" }}
                    >
                      {cfg.emoji} Відкрити в {cfg.label}
                    </PlatformBtn>
                  );
                })}

                <button
                  onClick={() => window.open(linkDetailModal.url, "_blank")}
                  style={{
                    background: "linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",
                    color: "#000",
                    border: "none",
                    borderRadius: "20px",
                    padding: "8px 20px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginLeft: "auto",
                }}
              >
                {linkDetailModal.buttonText || "Перейти на сайт"}
              </button>
            </LinkDetailFooter>
          </LinkDetailCard>
        </LinkDetailOverlay>
        );
      })()}
    </HeroDiv>
  );
};
export default Hero;
