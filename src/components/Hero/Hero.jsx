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
  margin-top: 115px;
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

const handleDownloadBg = async (bg) => {
  if (!bg) return;
  const src = typeof bg === "string" ? bg : bg.src;
  const name = typeof bg === "string" ? "background" : bg.name || "background";
  if (!src) return;
  const isVid = isVideoSource(src);
  const sourcePath =
    typeof src === "string"
      ? src.split(/[?#]/, 1)[0]
      : "";
  const urlExtension = sourcePath.match(
    /\.(webp|png|jpe?g|gif|mp4|webm|ogg|mov)$/i,
  )?.[0];
  const blobExtension =
    src instanceof Blob
      ? {
          "image/jpeg": ".jpg",
          "image/png": ".png",
          "image/webp": ".webp",
          "video/mp4": ".mp4",
          "video/webm": ".webm",
          "video/ogg": ".ogg",
        }[src.type]
      : null;
  const ext = urlExtension || blobExtension || (isVid ? ".mp4" : ".webp");
  const safeName = name.replace(/[/\\?%*:|"<>]/g, "-").trim() || "background";
  const fileName = /\.(webp|png|jpe?g|gif|mp4|webm|ogg|mov)$/i.test(
    safeName,
  )
    ? safeName
    : `${safeName}${ext}`;

  const toastId = toast.loading("Завантаження файлу...", { id: "bg-download" });

  try {
    let blob;
    if (src instanceof Blob) {
      blob = src;
    } else {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      blob = await response.blob();
    }
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

const handlePrintBg = (bg) => {
  if (!bg?.src || isVideoSource(bg.src)) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    toast.error("Дозвольте спливаюче вікно, щоб надрукувати зображення.");
    return;
  }

  const image = printWindow.document.createElement("img");
  const objectUrl = bg.src instanceof Blob ? URL.createObjectURL(bg.src) : null;
  image.alt = bg.name || "Фон";
  image.style.cssText =
    "display:block;max-width:100%;max-height:100vh;margin:auto;object-fit:contain";
  image.onload = () => {
    printWindow.onafterprint = () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      printWindow.close();
    };
    printWindow.focus();
    printWindow.print();
  };
  image.onerror = () => {
    toast.error("Не вдалося відкрити зображення для друку.");
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    printWindow.close();
  };
  printWindow.document.title = bg.name || "Фон";
  printWindow.document.body.style.margin = "0";
  printWindow.document.body.appendChild(image);
  image.src = objectUrl || bg.src;
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
  transform: scale(
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

const AiSparkBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 0 10px;
  border-radius: 6px;
  border: 1px solid rgba(255,160,0,0.4);
  background: ${(p) => (p.$isDarkMode ? "rgba(255,149,0,0.12)" : "rgba(255,149,0,0.08)")};
  color: ${(p) => (p.$isDarkMode ? "#ffcf9e" : "#d96500")};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: all 0.2s;
  &:hover {
    background: rgba(255,149,0,0.22);
    border-color: #ff9500;
    transform: translateY(-1px);
  }
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
      preload="none"
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
          if (videoRef.current.preload !== "auto") {
            videoRef.current.preload = "auto";
          }
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
  const isVideo = isVideoSource($image);

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

    if ($active) {
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
  }, [$active, $videoStart, $videoPlaybackSpeed, url]);

  const videoStart = $videoStart ?? 0;
  const videoEnd = $videoEnd ?? null; // null = play to natural end

  return (
    <BgLayerStyled {...props}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={url}
          preload={$active ? "auto" : "none"}
          muted
          loop
          playsInline
          onCanPlay={(e) => {
            if ($active) {
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

const ModeIconBtn = styled.button`
  width: 34px;
  height: 30px;
  border-radius: 6px;
  border: none;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"};
  color: ${(props) => (props.$isDarkMode ? "#f2f5f8" : "#30343b")};
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
  gap: 8px;
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
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${(p) => (p.$isDarkMode ? "#f3efef" : "#000000")};
  }

  &:hover,
  &:focus {
    border-color: ${(p) => (p.$isDarkMode ? "#ecb900" : "#00fbff")};
  }

  &:focus {
    box-shadow: inset 0 0 0 1px
      ${(p) => (p.$isDarkMode ? "#ecb900" : "#00fbff")};
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
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.85) rgba(255, 255, 255, 0.05);

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
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;


const BgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding: 2px;
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
  position: sticky;
  bottom: -20px;
  z-index: 20;
  flex-shrink: 0;
  margin: 4px -20px -20px;
  border: 2px dashed rgba(255, 179, 108, 0.4);
  padding: 16px 20px;
  text-align: center;
  border-radius: 14px;
  cursor: pointer;
  color: #ddd;
  font-size: 13px;
  font-weight: 500;
  background: rgba(10, 14, 26, 0.98);
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.4);
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

const SearchActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 38px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 179, 108, 0.55);
  border-radius: 8px;
  color: #17120d;
  background: linear-gradient(135deg, #ffca91, #ff9d48);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.65;
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
  const [searchTerm, setSearchTerm] = useState("");
  const [pixabayQuery, setPixabayQuery] = useState("");
  const [pixabayResults, setPixabayResults] = useState([]);
  const [pixabayStatus, setPixabayStatus] = useState("idle");
  const [pixabayPage, setPixabayPage] = useState(1);
  const [visibleBgCount, setVisibleBgCount] = useState(300);
  const [backgroundPreviewPair, setBackgroundPreviewPair] = useState(0);
  const MAX_DAILY_HERO_CARDS = 1000;
  const [uploadedToday, setUploadedToday] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundPreviewPair((pair) => (pair === 0 ? 1 : 0));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

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
  const [showTimezoneMenu, setShowTimezoneMenu] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchMode, setSearchMode] = useState("city");
  const [isSearchModeModalOpen, setIsSearchModeModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

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
    if (isModalOpen || descriptionModal || showTimezoneMenu || isSearchModeModalOpen || isAiModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, descriptionModal, showTimezoneMenu, isSearchModeModalOpen, isAiModalOpen]);

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
    setHeroBgPixelation(0);
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

  const translatePixabayQuery = async (query) => {
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(query)}`,
      );
      if (!response.ok) throw new Error(`Translation failed: ${response.status}`);
      const data = await response.json();
      return data[0].map((item) => item[0]).join("");
    } catch (error) {
      console.error("Pixabay query translation failed:", error);
      return query;
    }
  };

  const handleSearchPixabay = async (page = 1) => {
    const query = pixabayQuery.trim();
    if (!query || pixabayStatus === "loading") return;

    setPixabayStatus("loading");
    try {
      const translatedQuery = await translatePixabayQuery(query);
      const params = new URLSearchParams({
        key: "50977795-feb18de71b048a02e0c824e54",
        q: translatedQuery,
        image_type: "photo",
        per_page: "12",
        page: String(page),
        safesearch: "true",
      });
      const response = await fetch(`https://pixabay.com/api/?${params}`);
      if (!response.ok) {
        throw new Error(`Pixabay request failed: ${response.status}`);
      }
      const data = await response.json();
      const results = (data.hits || []).map((hit) => ({
        id: hit.id,
        previewURL: hit.previewURL,
        largeImageURL: hit.largeImageURL,
        name: hit.tags || query,
        source: "Pixabay",
      }));

      setPixabayResults((previous) =>
        page === 1 ? results : [...previous, ...results],
      );
      setPixabayPage(page);
      setPixabayStatus(results.length ? "idle" : "no-results");
    } catch (error) {
      console.error("Pixabay image search failed:", error);
      setPixabayStatus("error");
      toast.error("Не вдалося виконати пошук Pixabay. Спробуйте ще раз.");
    }
  };

  const handleAddPixabayBackground = (image) => {
    const src = image.largeImageURL || image.previewURL;
    const existing = customHeroBgs.find(
      (background) =>
        background.id === image.id || background.src === src,
    );
    if (!existing) {
      setCustomHeroBgs((previous) => [
        {
          id: `pixabay-${image.id}`,
          src,
          name: image.name,
          category: "Ваші картинки",
          source: image.source,
        },
        ...previous,
      ]);
    }
    handleSelectBg(existing?.src || src);
    toast.success("Фон встановлено.");
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
      <SearchModeModal
        isOpen={isSearchModeModalOpen}
        isDarkMode={isDarkMode}
        activeMode={searchMode}
        onSelect={handleSearchModeSelect}
        onClose={() => setIsSearchModeModalOpen(false)}
      />
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
                <ModePicker>
                  <Tooltip content="Вибрати режим пошуку" isDarkMode={isDarkMode}>
                    <ModeIconBtn
                      onClick={() => setIsSearchModeModalOpen(true)}
                      aria-label="Вибрати режим пошуку"
                      $isDarkMode={isDarkMode}
                    >
                      {searchMode === "coordinates" ? (
                        <FaMapLocationDot />
                      ) : searchMode === "ai" ? (
                        <MdAutoAwesome />
                      ) : (
                        <FaMountainCity />
                      )}
                    </ModeIconBtn>
                  </Tooltip>
                  <Tooltip content="Відкрити ШІ-асистент" isDarkMode={isDarkMode}>
                    <AiSparkBtn
                      onClick={() => setIsAiModalOpen(true)}
                      aria-label="Відкрити ШІ-асистент"
                      $isDarkMode={isDarkMode}
                    >
                      <MdAutoAwesome size={14} />
                    </AiSparkBtn>
                  </Tooltip>
                </ModePicker>
                <Tag $isDarkMode={isDarkMode} style={{ flex: 1, textAlign: "right" }}>
                  {heroDateString}
                </Tag>
                <TimezoneButton
                  ref={(el) => registerRef('timezoneButton', el)}
                  onClick={() => setShowTimezoneMenu(!showTimezoneMenu)}
                  aria-label="Змінити часовий пояс?"
                  $isDarkMode={isDarkMode}
                >
                   Часовий пояс <MdSettingsSuggest size={21}/>
                </TimezoneButton>
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
          padding: "10px 110px 10px 10px", 
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
                      ? "🔄 Шукаємо поруч…"
                      : coordinateSuggestions.length > 1
                        ? "📍 Знайдено поруч з координатами:"
                        : "📍 Лише точка за координатами (міст не знайдено)"}
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
                  <FiRefreshCw /> Скинути
                </CloseBtn>
                <CloseBtn $danger onClick={handleCloseModal}>
                  <FiX /> Закрити
                </CloseBtn>
              </div>
            </div>
            <ModalConfigGrid>
              <ConfigRow>
                <label><FiImage /> Режим фону:</label>
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
                        <FiShuffle />
                      </button>
                    </Tooltip>
                  )}
                </div>
              </ConfigRow>
              <ConfigRow>
                <label>
                  <FiSun /> Затемнення: {(heroOverlayOpacity * 100).toFixed(0)}%
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
                <label><FiZoomIn /> Наближення: {heroBgZoom.toFixed(2)}x</label>
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
                <label><FiRotateCw /> Розворот: {heroBgRotation}°</label>
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
                <label><FiDroplet /> Розмиття: {heroBgBlur.toFixed(1)}px</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.5"
                  value={heroBgBlur}
                  onChange={(e) => setHeroBgBlur(parseFloat(e.target.value))}
                />
              </ConfigRow>
              <ConfigRow>
                <label><FiGrid /> Пікселізація: {heroBgPixelation.toFixed(1)}</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.2"
                  value={heroBgPixelation}
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
                      <FiClock /> Інтервал:{" "}
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
                    <label><FiZap /> Перехід: {slideshowTransition}с</label>
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
                    <label><FiVideo /> Швидкість відео: {videoPlaybackSpeed}x</label>
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
              <FiImage /> Бібліотека зображень
            </ModalSectionTitle>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSearchPixabay(1);
              }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            >
              <ModalSearchInput
                aria-label="Пошук фонів на Pixabay"
                placeholder="Пошук зображень на Pixabay..."
                value={pixabayQuery}
                onChange={(event) => setPixabayQuery(event.target.value)}
                style={{ flex: "1 1 240px" }}
              />
              <SearchActionButton
                type="submit"
                disabled={pixabayStatus === "loading"}
              >
                <FiSearch />
                {pixabayStatus === "loading" ? "Шукаємо..." : "Pixabay"}
              </SearchActionButton>
            </form>
            {pixabayStatus === "no-results" && (
              <span style={{ color: "#c5c8d0", fontSize: 12 }}>
                Нічого не знайдено. Спробуйте інший запит.
              </span>
            )}
            {pixabayStatus === "error" && (
              <span role="alert" style={{ color: "#ff8a80", fontSize: 12 }}>
                Пошук не вдався. Спробуйте ще раз.
              </span>
            )}
            {pixabayResults.length > 0 && (
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(105px, 1fr))",
                    gap: 8,
                  }}
                >
                  {pixabayResults.map((image) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => handleAddPixabayBackground(image)}
                      title={`Встановити фон: ${image.name}`}
                      style={{
                        position: "relative",
                        aspectRatio: "1",
                        overflow: "hidden",
                        padding: 0,
                        border: "1px solid rgba(255, 179, 108, 0.4)",
                        borderRadius: 8,
                        background: "#10131b",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={image.previewURL}
                        alt={image.name}
                        loading="lazy"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          inset: "auto 0 0",
                          padding: "4px",
                          overflow: "hidden",
                          color: "#fff",
                          background: "rgba(0,0,0,.72)",
                          fontSize: 10,
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {image.name}
                      </span>
                    </button>
                  ))}
                </div>
                {pixabayResults.length === pixabayPage * 12 && (
                  <SearchActionButton
                    type="button"
                    disabled={pixabayStatus === "loading"}
                    onClick={() => handleSearchPixabay(pixabayPage + 1)}
                  >
                    {pixabayStatus === "loading" ? "Завантажуємо..." : "Ще з Pixabay"}
                  </SearchActionButton>
                )}
              </>
            )}
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
                placeholder="Фільтр наявних фонів за назвою..."
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
                    <option value="all">Усі зображення</option>
                    <option value="Природа та Стихії">Природа та Стихії</option>
                    <option value="Фентезі та Легенди">Фентезі та Легенди</option>
                    <option value="Темрява та Містика">Темрява та Містика</option>
                    <option value="custom">Ваші зображення та відео</option>
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
                    <option value="rating">За рейтингом</option>
                    <option value="az">Назва А-Я</option>
                    <option value="za">Назва Я-А</option>
                  </select>
                </div>
              </div>
            </div>

            <BgGrid>
              {pagedBgs.map((bg, idx) => {
                const rating = bgRatings[bg.src] || 0;
                const qIndex = randomBgsList.findIndex((item) => item.src === bg.src);
                const cardThumbnail = bgCardThumbnails[bg.src];
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
                            title="Завантажити фон"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadBg(bg);
                            }}
                          >
                            <FiDownload />
                          </HeartIcon>
                        </Tooltip>
                        {!isVideoSource(bg.src) && (
                          <Tooltip content="Надрукувати фон" isDarkMode={isDarkMode}>
                            <HeartIcon
                              $color="#aef"
                              aria-label="Надрукувати фон"
                              title="Надрукувати фон"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrintBg(bg);
                              }}
                            >
                              <FiPrinter />
                            </HeartIcon>
                          </Tooltip>
                        )}
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
                        src={cardThumbnail?.src || bg.src}
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
              onClick={() => fileInputRef.current?.click()}
            >
              <FiUploadCloud size={24} aria-hidden="true" />
              <div>
                <span style={{ color: "#ffb36c", fontWeight: "bold" }}>Перетягніть сюди</span> картинку або відео
              </div>
              <span style={{ fontSize: "11px", color: "#8a8d9b" }}>або натисніть для вибору файлу з вашого пристрою</span>
              <input
                type="file"
                ref={fileInputRef}
                hidden
                accept="image/*,video/*"
                onChange={(e) => {
                  handleFileUpload(e.target.files[0]);
                  e.target.value = "";
                }}
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
                  <FiDownload />
                  Скачати {isVideoSource(descriptionModal.src) ? "відео" : "картинку"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}




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
