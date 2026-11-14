import React, { useState, useCallback, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import localforage from "localforage";
import toast from "react-hot-toast";
import {
  FiCalendar,
  FiClock,
  FiDownload,
  FiDroplet,
  FiFilm,
  FiGrid,
  FiImage,
  FiMaximize2,
  FiRefreshCw,
  FiSearch,
  FiShuffle,
  FiSliders,
  FiSun,
  FiUploadCloud,
  FiX,
} from "react-icons/fi";
import { DEFAULT_BGS } from "./defaultBgs";
import CityScene from "./CityScene.jsx";
import { WALLPAPERS, WALLPAPER_GROUPS, useMinuteNow } from "./WallpaperScene.jsx";
import PixabaySearch from "./PixabaySearch.jsx";
import { isAnimationsDisabled } from "../../utils/animationsPref.js";
import {
  WALLPAPER_ANIMATIONS,
  WALLPAPER_SEASONS,
  WALLPAPER_TIMES,
  getWallpaperSettings,
  isWallpaperSrc,
  setWallpaperSettings,
  toWallpaperSrc,
  useWallpaperSettingsMap,
} from "../../utils/wallpaperPrefs.js";
import village from "../../media/third-party/games/dragon-village-3.webp";
import faded from "../../media/backgrounds/scenes/resort.webp";
import { Tooltip } from "./Hero.jsx";
import { notifySupportMoment } from "../Support/supportNudge.js";

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
  const fileName = /\.(webp|png|jpe?g|gif|mp4|webm|ogg|mov)$/i.test(safeName)
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

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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
  animation: ${(props) => (props.$isClosing ? fadeOut : fadeIn)} 0.3s ease-out forwards;
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
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.85) rgba(255, 255, 255, 0.05);
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.03); border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #ffb36c 0%, #ff8c2b 100%); border-radius: 10px; }
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
  &:hover { background: #ef4444; transform: scale(1.15); box-shadow: 0 0 10px rgba(239, 68, 68, 0.5); }
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
  &:hover { background: #ffa852; transform: scale(1.15); box-shadow: 0 0 10px rgba(255, 179, 108, 0.5); }
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
  &:hover { background: rgba(255, 255, 255, 0.07); border-color: rgba(255, 179, 108, 0.35); }
  label { font-size: 11px; font-weight: 700; color: #ffc996; display: flex; align-items: center; gap: 4px; }
  input[type="range"] { accent-color: #ffb36c; cursor: pointer; }
`;

const ModalConfigGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: stretch;
  @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1200px) { grid-template-columns: repeat(4, 1fr); }
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
    ${NameOverlay}, ${TopOverlay} { opacity: 1; }
  }
`;

const BgSquare = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
  display: block;
`;

// Мініатюра фону: завантажені картинки зберігаються як Blob, тож для них
// створюємо тимчасове посилання (рядок-адресу показуємо як є)
const BlobAwareSquare = ({ src, ...props }) => {
  const [objectUrl, setObjectUrl] = useState(null);
  React.useEffect(() => {
    if (!(src instanceof Blob)) return undefined;
    const url = URL.createObjectURL(src);
    setObjectUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [src]);
  const url = src instanceof Blob ? objectUrl : src;
  if (!url) return <BgSquare as="div" {...props} />;
  return <BgSquare src={url} loading="lazy" {...props} />;
};

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
  & > * { pointer-events: auto; }
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
  &:hover { transform: scale(1.15); background: rgba(18, 22, 38, 0.95); border-color: #ffb36c; box-shadow: 0 0 10px rgba(255, 179, 108, 0.3); }
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
  /* Підкладка лишається непрозорою й при наведенні: панель липка й лежить над картками */
  &:hover { background: linear-gradient(rgba(255, 179, 108, 0.07), rgba(255, 179, 108, 0.07)), #0a0e1a; border-color: #ffb36c; color: #fff; box-shadow: 0 0 15px rgba(255, 179, 108, 0.15); }
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
  &:hover { background: ${(props) => (props.$danger ? "rgba(255, 107, 107, 0.25)" : "rgba(255, 179, 108, 0.25)")}; transform: translateY(-1px); box-shadow: 0 4px 12px ${(props) => (props.$danger ? "rgba(255, 107, 107, 0.2)" : "rgba(255, 179, 108, 0.2)")}; }
  &:active { transform: translateY(0); }
`;

// Липка навігація між розділами модалки (-20px компенсують padding вікна, як і в DropZone;
// flex-shrink: 0 — інакше у flex-колонці з прокруткою панель стискається й обрізає кнопки)
const SectionNav = styled.nav`
  position: sticky;
  top: -20px;
  z-index: 25;
  flex-shrink: 0;
  display: flex;
  gap: 6px;
  margin: -4px -20px 0;
  padding: 8px 20px;
  overflow-x: auto;
  scrollbar-width: none;
  background: rgba(10, 13, 23, 0.98);
  border-bottom: 1px solid rgba(255, 179, 108, 0.18);
  &::-webkit-scrollbar { display: none; }
`;

const NavButton = styled.button`
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid ${(p) => (p.$active ? "#ffb36c" : "rgba(255, 179, 108, 0.25)")};
  background: ${(p) => (p.$active ? "linear-gradient(135deg, #ffca91, #ff9d48)" : "rgba(255, 255, 255, 0.03)")};
  color: ${(p) => (p.$active ? "#17120d" : "#d8dae0")};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover { border-color: #ffb36c; }
  small { font-weight: 600; opacity: 0.75; }
`;

const ModalSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-margin-top: 44px;
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
  &::placeholder { color: #8a8d9b; }
  &:focus { background: rgba(255, 255, 255, 0.1); border-color: #ffb36c; box-shadow: 0 0 12px rgba(255, 179, 108, 0.25); }
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

const LoadMoreButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${(props) => (props.isDarkMode ? "black" : "white")};
  transition: background-color 0.3s ease;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-size: 13px;
  &:hover { background: ${(props) => (props.isDarkMode ? "#220150" : "#ffcc00")}; }
`;

const FullscreenViewer = ({ bg, onClose, onDownload }) => {
  const [blobUrl, setBlobUrl] = useState(null);

  React.useEffect(() => {
    if (bg.src instanceof Blob) {
      const url = URL.createObjectURL(bg.src);
      setBlobUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setBlobUrl(null);
  }, [bg.src]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const srcUrl = bg.src instanceof Blob ? blobUrl : bg.src;
  const btnStyle = { background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", width: "40px", height: "40px", color: "#fff", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };

  // Портал у body: вікно модалки має transform (анімація появи) і прокрутку,
  // тож position: fixed усередині нього рахувався б від модалки, а не від екрана
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={bg.name ? `Перегляд фону: ${bg.name}` : "Перегляд фону"}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "#000", zIndex: 300000, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {srcUrl && (isVideoSource(bg.src) ? (
        <video src={srcUrl} autoPlay muted loop playsInline onClick={(e) => e.stopPropagation()} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      ) : (
        <img src={srcUrl} alt={bg.name} onClick={(e) => e.stopPropagation()} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      ))}
      <div style={{ position: "absolute", top: "12px", right: "12px", display: "flex", gap: "8px" }}>
        <button onClick={(e) => { e.stopPropagation(); onDownload(bg); }} style={btnStyle} aria-label="Скачати"><FiDownload /></button>
        <button onClick={onClose} style={btnStyle} aria-label="Закрити"><FiX /></button>
      </div>
    </div>,
    document.body,
  );
};

const VideoThumbnail = React.memo(({ bg, onClick }) => {
  const videoRef = useRef(null);
  const [blobUrl, setBlobUrl] = useState(null);

  React.useEffect(() => {
    if (bg?.src instanceof Blob) {
      const url = URL.createObjectURL(bg.src);
      setBlobUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setBlobUrl(null);
    }
  }, [bg?.src]);

  const baseUrl =
    bg?.src instanceof Blob
      ? blobUrl
      : typeof bg?.src === "string"
      ? bg.src
      : undefined;

  // Перший кадр як прев'ю: щойно картка в полі зору, вантажимо лише метадані
  // й початок відео (#t=0.1), щоб замість сірого квадрата був кадр.
  // Повне відео, як і раніше, вантажиться лише при наведенні.
  const [isNearView, setIsNearView] = useState(false);
  React.useEffect(() => {
    const el = videoRef.current;
    if (!el || isNearView) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setIsNearView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isNearView]);

  const PREVIEW_TIME = 0.1;
  const srcUrl = baseUrl && isNearView ? `${baseUrl}#t=${PREVIEW_TIME}` : undefined;

  return (
    <video
      ref={videoRef}
      src={srcUrl}
      preload={isNearView ? "metadata" : "none"}
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
        if (!isNearView) setIsNearView(true);
        if (videoRef.current && srcUrl) {
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
          // Повертаємось до кадру-прев'ю, а не до порожнього початку
          videoRef.current.currentTime = PREVIEW_TIME;
        }
      }}
      onClick={onClick}
    />
  );
});

const WallpaperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

const WallpaperCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 400 / 220;
  border: 2px solid ${(p) => (p.$active ? "#ffb36c" : "rgba(255, 255, 255, 0.1)")};
  box-shadow: ${(p) => (p.$active ? "0 0 16px rgba(255, 179, 108, 0.5)" : "0 4px 12px rgba(0, 0, 0, 0.35)")};
  transition: transform 0.2s ease, border-color 0.2s ease;
  &:hover { transform: translateY(-3px); border-color: ${(p) => (p.$active ? "#ffb36c" : "rgba(255, 179, 108, 0.6)")}; }
`;

const WallpaperPick = styled.button`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  padding: 0 0 ${(p) => (p.$hasSlots ? "22px" : "0")};
  border: none;
  background: transparent;
  cursor: pointer;
  span {
    width: 100%;
    padding: 4px 6px;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    text-align: left;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), transparent);
  }
`;

const wallpaperSelectStyle = { background: "rgba(10, 14, 26, 0.95)", color: "#fff", fontSize: "12px", fontWeight: "500", border: "1px solid rgba(255, 179, 108, 0.3)", borderRadius: "6px", padding: "4px 6px", width: "100%", outline: "none" };

const WallpaperTools = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 4;
  display: flex;
  gap: 4px;
`;

const optionLabel = (options, value) => options.find((option) => option.value === value)?.label;

// Коротко про налаштування для підпису картки: «Ніч · Зима · Без анімацій» (типові не показуємо)
const settingsBadge = ({ time, season, animations }) =>
  [
    time !== "auto" && optionLabel(WALLPAPER_TIMES, time),
    season !== "auto" && optionLabel(WALLPAPER_SEASONS, season),
    animations === "off" && "Без анімацій",
  ]
    .filter(Boolean)
    .join(" · ");

const SelectBox = styled.label`
  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: rgba(10, 12, 22, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  input { width: 15px; height: 15px; margin: 0; accent-color: #ffb36c; cursor: pointer; }
  &:hover { border-color: #ffb36c; }
`;

const SmallButton = styled.button`
  padding: 3px 9px;
  border-radius: 6px;
  border: 1px solid rgba(255, 179, 108, 0.35);
  background: rgba(255, 179, 108, 0.08);
  color: #ffc996;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: rgba(255, 179, 108, 0.2); }
  &:disabled { opacity: 0.45; cursor: default; }
`;

const MIXED = "";

// Спільне значення поля для вибраних шпалер або MIXED, якщо вони різні
const commonValue = (settingsList, field) =>
  settingsList.length && settingsList.every((s) => s[field] === settingsList[0][field])
    ? settingsList[0][field]
    : MIXED;

// Повноекранний перегляд живої шпалери (портал у body, як і FullscreenViewer)
const WallpaperFullscreen = ({ wallpaper, settings, onClose, onSelect }) => {
  const now = useMinuteNow();

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const btnStyle = { background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", height: "40px", minWidth: "40px", padding: "0 12px", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Перегляд шпалер: ${wallpaper.label}`}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "#000", zIndex: 300000 }}
    >
      <CityScene timezone={wallpaper.scene} now={now} timeOfDay={settings.time} season={settings.season} still={settings.animations === "off"} fit="contain" />
      <div style={{ position: "absolute", top: "12px", left: "16px", zIndex: 5, color: "#fff", fontSize: "18px", fontWeight: 700, textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
        {wallpaper.label}
        {settingsBadge(settings) && <span style={{ marginLeft: "10px", fontSize: "13px", fontWeight: 500, color: "#ffd9b0" }}>{settingsBadge(settings)}</span>}
      </div>
      <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 5, display: "flex", gap: "8px" }}>
        <button type="button" onClick={(e) => { e.stopPropagation(); onSelect(); onClose(); }} style={btnStyle}>Встановити фоном</button>
        <button type="button" onClick={onClose} style={btnStyle} aria-label="Закрити"><FiX /></button>
      </div>
    </div>,
    document.body,
  );
};

// Живі шпалери: сцени міст і країн із рухом сонця й порами року.
// Кожна шпалера має власні час доби, пору року й анімації; налаштовувати
// можна одну, кілька (галочками) або всі одразу. Прев'ю одразу все показують.
const WallpaperSection = ({ heroBg, heroBg2, heroBg3, heroBgMode, onSelect }) => {
  const settingsMap = useWallpaperSettingsMap();
  const now = useMinuteNow();
  const slots = heroBgMode === "slideshow-2" ? 2 : heroBgMode === "slideshow-3" ? 3 : 0;
  const layers = [heroBg, heroBg2, heroBg3];

  // Які шпалери налаштовуємо: спершу — встановлену зараз (або першу)
  const activeId = layers.find(isWallpaperSrc)?.slice(toWallpaperSrc("").length);
  const [selectedIds, setSelectedIds] = useState(() => [
    WALLPAPERS.some((wallpaper) => wallpaper.id === activeId) ? activeId : WALLPAPERS[0].id,
  ]);
  const selectedSet = new Set(selectedIds);
  const selectedSettings = selectedIds.map((id) => getWallpaperSettings(settingsMap, id));
  const [fullscreenId, setFullscreenId] = useState(null);
  const fullscreenWallpaper = WALLPAPERS.find((wallpaper) => wallpaper.id === fullscreenId);

  const toggleSelected = (id) =>
    setSelectedIds((previous) => (previous.includes(id) ? previous.filter((x) => x !== id) : [...previous, id]));
  const selectGroup = (ids) =>
    setSelectedIds((previous) => {
      const allIn = ids.every((id) => previous.includes(id));
      return allIn ? previous.filter((id) => !ids.includes(id)) : [...new Set([...previous, ...ids])];
    });

  // Клік по картці ставить фон; якщо вибрано не більше однієї — вибір переходить на неї,
  // а зібраний галочками набір не скидаємо
  const pick = (wallpaper, slot) => {
    if (selectedIds.length <= 1) setSelectedIds([wallpaper.id]);
    onSelect(toWallpaperSrc(wallpaper.id), slot);
  };

  const applyToSelected = (patch) => {
    if (selectedIds.length) setWallpaperSettings(selectedIds, patch);
  };

  const selectionLabel =
    selectedIds.length === 0
      ? "Нічого не вибрано — поставте галочки на картках"
      : selectedIds.length === WALLPAPERS.length
        ? `Усі шпалери (${WALLPAPERS.length})`
        : selectedIds.length === 1
          ? WALLPAPERS.find((wallpaper) => wallpaper.id === selectedIds[0])?.label
          : `Вибрано: ${selectedIds.length}`;

  const settingSelect = (field, options, label, Icon) => {
    const value = commonValue(selectedSettings, field);
    return (
      <ConfigRow>
        <label><Icon /> {label}:</label>
        <select
          aria-label={`${label} для вибраних шпалер`}
          value={value}
          disabled={!selectedIds.length}
          onChange={(e) => applyToSelected({ [field]: e.target.value })}
          style={{ ...wallpaperSelectStyle, opacity: selectedIds.length ? 1 : 0.5 }}
        >
          {value === MIXED && <option value={MIXED} disabled>— різні —</option>}
          {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </ConfigRow>
    );
  };

  return (
    <>
      <ModalSectionTitle><FiSun /> Живі шпалери</ModalSectionTitle>
      <span style={{ fontSize: "11px", color: "#8a8d9b", marginTop: "-6px" }}>
        Сцени міст і країн: сонце й місяць рухаються за реальним часом місця, трава й дерева змінюються з порами року.
        Галочками на картках виберіть одну, кілька або всі шпалери — налаштування нижче застосуються до вибраних.
        Острови, тропіки й снігові місця зелені (або засніжені) цілий рік.
      </span>
      <ModalConfigGrid>
        <ConfigRow>
          <label><FiSliders /> Налаштування для:</label>
          <div style={{ fontSize: "12px", fontWeight: 600, color: selectedIds.length ? "#fff" : "#8a8d9b", minHeight: "18px" }}>{selectionLabel}</div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <SmallButton type="button" disabled={selectedIds.length === WALLPAPERS.length} onClick={() => setSelectedIds(WALLPAPERS.map((wallpaper) => wallpaper.id))}>Усі</SmallButton>
            <SmallButton type="button" disabled={!selectedIds.length} onClick={() => setSelectedIds([])}>Зняти</SmallButton>
          </div>
        </ConfigRow>
        {settingSelect("time", WALLPAPER_TIMES, "Час доби", FiClock)}
        {settingSelect("season", WALLPAPER_SEASONS, "Пора року", FiCalendar)}
        {settingSelect("animations", WALLPAPER_ANIMATIONS, "Анімації", FiFilm)}
      </ModalConfigGrid>
      {WALLPAPER_GROUPS.map((group) => {
        const items = WALLPAPERS.filter((wallpaper) => wallpaper.group === group.value);
        const groupIds = items.map((wallpaper) => wallpaper.id);
        const groupSelected = groupIds.every((id) => selectedSet.has(id));
        return (
          <React.Fragment key={group.value}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffc996" }}>{group.label} · {items.length}</span>
              <SmallButton type="button" onClick={() => selectGroup(groupIds)}>
                {groupSelected ? "Зняти групу" : "Вибрати групу"}
              </SmallButton>
            </div>
            <WallpaperGrid>
              {items.map((wallpaper) => {
                const src = toWallpaperSrc(wallpaper.id);
                const settings = getWallpaperSettings(settingsMap, wallpaper.id);
                const badge = settingsBadge(settings);
                const selected = selectedSet.has(wallpaper.id);
                return (
                  <WallpaperCard key={wallpaper.id} $active={layers.includes(src)} style={selected ? { outline: "2px dashed rgba(255, 179, 108, 0.7)", outlineOffset: "2px" } : undefined}>
                    <CityScene timezone={wallpaper.scene} now={now} timeOfDay={settings.time} season={settings.season} still={settings.animations === "off"} />
                    <WallpaperPick type="button" $hasSlots={slots > 0} onClick={() => pick(wallpaper)} aria-label={`Встановити шпалери: ${wallpaper.label}`}>
                      <span>
                        {wallpaper.label}
                        {badge && <span style={{ display: "block", padding: 0, background: "none", fontSize: "10px", fontWeight: 500, color: "#ffd9b0" }}>{badge}</span>}
                      </span>
                    </WallpaperPick>
                    <SelectBox title={selected ? "Прибрати з вибраних" : "Додати до вибраних"}>
                      <input type="checkbox" checked={selected} onChange={() => toggleSelected(wallpaper.id)} aria-label={`Вибрати для налаштування: ${wallpaper.label}`} />
                    </SelectBox>
                    <WallpaperTools>
                      <Tooltip content="Налаштувати лише цю">
                        <HeartIcon type="button" $color="#ffda79" aria-label={`Налаштувати лише: ${wallpaper.label}`} onClick={() => setSelectedIds([wallpaper.id])}><FiSliders /></HeartIcon>
                      </Tooltip>
                      <Tooltip content="На весь екран">
                        <HeartIcon type="button" $color="#aef" aria-label={`На весь екран: ${wallpaper.label}`} onClick={() => setFullscreenId(wallpaper.id)}><FiMaximize2 /></HeartIcon>
                      </Tooltip>
                    </WallpaperTools>
                    {slots > 0 && (
                      <SlotButtons style={{ zIndex: 3 }}>
                        {Array.from({ length: slots }, (_, i) => (
                          <SlotBtn key={i} $active={layers[i] === src} onClick={() => pick(wallpaper, i + 1)}>Слот {i + 1}</SlotBtn>
                        ))}
                      </SlotButtons>
                    )}
                  </WallpaperCard>
                );
              })}
            </WallpaperGrid>
          </React.Fragment>
        );
      })}
      {fullscreenWallpaper && (
        <WallpaperFullscreen
          wallpaper={fullscreenWallpaper}
          settings={getWallpaperSettings(settingsMap, fullscreenWallpaper.id)}
          onClose={() => setFullscreenId(null)}
          onSelect={() => pick(fullscreenWallpaper)}
        />
      )}
    </>
  );
};

const bgCardThumbnails = {
  [village]: {
    src: village,
  },
  [faded]: {
    src: faded,
  },
};

const BgModal = ({
  isOpen,
  isClosing,
  onClose,
  onReset,
  isDarkMode,
  user,
  heroBg,
  heroBg2,
  heroBg3,
  setHeroBg,
  setHeroBg2,
  setHeroBg3,
  customHeroBgs = [],
  setCustomHeroBgs,
  heroBgMode,
  setHeroBgMode,
  bgRatings,
  setBgRatings,
  slideshowInterval,
  setSlideshowInterval,
  filterCategory,
  setFilterCategory,
  heroBgBlur,
  setHeroBgBlur,
  heroBgPixelation,
  setHeroBgPixelation,
  activeLayer,
  setActiveLayer,
  randomBgsList,
  setRandomBgsList,
  randomCurrentIndex,
  setRandomCurrentIndex,
  hills,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("az");
  const [visibleBgCount, setVisibleBgCount] = useState(300);
  const [fullscreenBg, setFullscreenBg] = useState(null);
  const MAX_DAILY_HERO_CARDS = 50;
  const fileInputRef = useRef(null);
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState("look");

  // Підсвічуємо розділ, верх якого вже під навігацією (унизу вікна — останній)
  const handleContentScroll = () => {
    const root = contentRef.current;
    if (!root) return;
    const sections = [...root.querySelectorAll("[data-bg-section]")];
    if (!sections.length) return;
    const line = root.getBoundingClientRect().top + 80;
    let current = sections[0].dataset.bgSection;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) current = section.dataset.bgSection;
    }
    if (root.scrollTop + root.clientHeight >= root.scrollHeight - 4) {
      current = sections[sections.length - 1].dataset.bgSection;
    }
    setActiveSection(current);
  };

  const goToSection = (id) => {
    setActiveSection(id);
    contentRef.current
      ?.querySelector(`[data-bg-section="${id}"]`)
      ?.scrollIntoView({ behavior: isAnimationsDisabled() ? "auto" : "smooth", block: "start" });
  };

  const allBgs = useMemo(
    () => [...DEFAULT_BGS, ...(customHeroBgs || [])],
    [customHeroBgs],
  );

  const isCustom = (src) => !DEFAULT_BGS.some((bg) => bg.src === src);

  const handleSelectBg = useCallback(
    (src, targetLayer = 1) => {
      notifySupportMoment("bg");
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
      } else {
        setHeroBg(src);
      }
    },
    [activeLayer, heroBgMode, randomBgsList, setHeroBg, setHeroBg2, setHeroBg3, setRandomCurrentIndex],
  );

  const handleRate = (src) => {
    setBgRatings((prev) => {
      const current = prev[src] || 0;
      const next = (current + 1) % 3;
      return { ...prev, [src]: next };
    });
  };

  const handleFileUpload = async (file) => {
    if (!file) return;
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");
    if (!isImage && !isVideo) return;
    try {
      const uid = user?.uid || "guest";
      const today = new Date().toISOString().split("T")[0];
      const key = `hero_cards_${uid}_${today}`;
      const current = Number((await localforage.getItem(key)) || 0);
      if (current >= MAX_DAILY_HERO_CARDS) {
        alert(`Ліміт досягнуто — не більше ${MAX_DAILY_HERO_CARDS} карток на добу.`);
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
      setCustomHeroBgs((prev) => [{ src: file, name: file.name, category: "Ваші відео" }, ...prev]);
      setHeroBg(file);
      notifySupportMoment("bg");
      try {
        const uid = user?.uid || "guest";
        const today = new Date().toISOString().split("T")[0];
        const key = `hero_cards_${uid}_${today}`;
        const prevVal = Number((await localforage.getItem(key)) || 0);
        await localforage.setItem(key, prevVal + 1);
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
            try {
              const uid = user?.uid || "guest";
              const today = new Date().toISOString().split("T")[0];
              const key = `hero_cards_${uid}_${today}`;
              const prevVal = Number((await localforage.getItem(key)) || 0);
              if (prevVal >= MAX_DAILY_HERO_CARDS) {
                alert(`Ліміт досягнуто — не більше ${MAX_DAILY_HERO_CARDS} карток на добу.`);
                return;
              }
              await localforage.setItem(key, prevVal + 1);
            } catch (err) {
              console.error("Failed to update hero uploaded count:", err);
            }
            setCustomHeroBgs((prev) => [{ src: blob, name: file.name, category: "Ваші картинки" }, ...prev]);
            setHeroBg(blob);
            notifySupportMoment("bg");
          },
          "image/jpeg",
          0.7,
        );
      };
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    handleFileUpload(e.dataTransfer.files[0]);
  };

  const filteredBgs = (allBgs || []).filter((bg) => {
    const matchesCategory =
      filterCategory === "all" ||
      (filterCategory === "custom" ? isCustom(bg.src) : bg.category === filterCategory);
    const matchesSearch = (bg.name || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedBgs = [...filteredBgs].sort((a, b) =>
    sortType === "za"
      ? (b.name || "").localeCompare(a.name || "")
      : (a.name || "").localeCompare(b.name || ""),
  );
  const pagedBgs = sortedBgs.slice(0, visibleBgCount);

  if (!isOpen) return null;

  const navItems = [
    { id: "look", label: "Вигляд", Icon: FiDroplet },
    { id: "wallpapers", label: "Живі шпалери", count: WALLPAPERS.length, Icon: FiSun },
    { id: "pixabay", label: "Pixabay", Icon: FiSearch },
    { id: "library", label: "Бібліотека", count: sortedBgs.length, Icon: FiImage },
  ];

  return (
    <ModalOverlay $isClosing={isClosing} onClick={onClose}>
      <ModalContent ref={contentRef} onScroll={handleContentScroll} $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: "1px solid rgba(255, 179, 108, 0.2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "700", background: "linear-gradient(90deg, #ffb36c 0%, #ffe3b8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "0.4px" }}>
                Налаштування фону та вигляду
              </h2>
              <span style={{ fontSize: "11px", color: "#8a8d9b" }}>Персоналізуйте теми, слайд-шоу та візуальні ефекти</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <CloseBtn onClick={onReset}><FiRefreshCw /> Скинути</CloseBtn>
            <CloseBtn $danger onClick={onClose}><FiX /> Закрити</CloseBtn>
          </div>
        </div>
        <SectionNav aria-label="Розділи налаштувань фону">
          {navItems.map(({ id, label, count, Icon }) => (
            <NavButton key={id} type="button" $active={activeSection === id} aria-current={activeSection === id ? "true" : undefined} onClick={() => goToSection(id)}>
              <Icon aria-hidden="true" /> {label}{count != null && <small>{count}</small>}
            </NavButton>
          ))}
          <NavButton type="button" onClick={() => fileInputRef.current?.click()}>
            <FiUploadCloud aria-hidden="true" /> Завантажити свій
          </NavButton>
        </SectionNav>
        <ModalSection data-bg-section="look">
        <ModalConfigGrid>
          <ConfigRow>
            <label><FiImage /> Режим фону:</label>
            <div style={{ display: "flex", gap: "5px", width: "100%" }}>
              <select
                aria-label="Режим фону"
                value={heroBgMode}
                onChange={(e) => {
                  setHeroBgMode(e.target.value);
                  if (e.target.value === "random") {
                    const shuffled = shuffleArray(allBgs);
                    setRandomBgsList(shuffled);
                    setRandomCurrentIndex(0);
                    if (shuffled[0]) handleSelectBg(shuffled[0].src);
                  }
                  setActiveLayer(1);
                }}
                style={{ background: "rgba(10, 14, 26, 0.95)", color: "#fff", fontSize: "12px", fontWeight: "500", border: "1px solid rgba(255, 179, 108, 0.3)", borderRadius: "6px", padding: "4px 6px", flex: 1, outline: "none" }}
              >
                <option value="static">Статичний (1 фото)</option>
                <option value="slideshow-2">Слайд-шоу (2 фото)</option>
                <option value="slideshow-3">Слайд-шоу (3 фото)</option>
                <option value="random">Випадковий (усі фото)</option>
              </select>
              {heroBgMode === "random" && (
                <Tooltip content="Перемішати та скинути чергу" isDarkMode={isDarkMode}>
                  <button
                    onClick={() => {
                      const shuffled = shuffleArray(allBgs);
                      setRandomBgsList(shuffled);
                      setRandomCurrentIndex(0);
                      if (shuffled[0]) { handleSelectBg(shuffled[0].src); setActiveLayer(1); }
                    }}
                    aria-label="Перемішати та скинути чергу"
                    style={{ background: "linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)", border: "none", borderRadius: "6px", color: "#000", padding: "2px 8px", cursor: "pointer", fontWeight: "bold", fontSize: "11px", whiteSpace: "nowrap" }}
                  >
                    <FiShuffle />
                  </button>
                </Tooltip>
              )}
            </div>
          </ConfigRow>
          {(heroBgMode === "slideshow-2" || heroBgMode === "slideshow-3" || heroBgMode === "random") && (
            <ConfigRow>
              <label><FiClock /> Інтервал: {Math.floor(slideshowInterval / 60)}хв{slideshowInterval % 60 > 0 ? ` ${slideshowInterval % 60}с` : ""}</label>
              <input type="range" min="60" max="300" step="5" value={slideshowInterval} onChange={(e) => setSlideshowInterval(parseInt(e.target.value))} />
            </ConfigRow>
          )}
          <ConfigRow>
            <label><FiDroplet /> Розмиття: {heroBgBlur.toFixed(1)}px</label>
            <input type="range" min="0" max="20" step="0.5" value={heroBgBlur} onChange={(e) => setHeroBgBlur(parseFloat(e.target.value))} />
          </ConfigRow>
          <ConfigRow>
            <label><FiGrid /> Пікселізація: {heroBgPixelation.toFixed(1)}</label>
            <input type="range" min="0" max="20" step="0.2" value={heroBgPixelation} onChange={(e) => setHeroBgPixelation(parseFloat(e.target.value))} />
          </ConfigRow>
        </ModalConfigGrid>
        </ModalSection>

        <ModalDivider />
        <ModalSection data-bg-section="wallpapers">
          <WallpaperSection
            heroBg={heroBg}
            heroBg2={heroBg2}
            heroBg3={heroBg3}
            heroBgMode={heroBgMode}
            onSelect={handleSelectBg}
          />
        </ModalSection>

        <ModalDivider />
        <ModalSection data-bg-section="pixabay">
          <ModalSectionTitle><FiSearch /> Нові фони з Pixabay</ModalSectionTitle>
          <PixabaySearch
            customHeroBgs={customHeroBgs}
            setCustomHeroBgs={setCustomHeroBgs}
            onSelect={handleSelectBg}
            onPreview={setFullscreenBg}
          />
        </ModalSection>

        <ModalDivider />
        <ModalSection data-bg-section="library">
        <ModalSectionTitle><FiImage /> Бібліотека зображень</ModalSectionTitle>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <ModalSearchInput aria-label="Фільтр наявних фонів за назвою" placeholder="Фільтр наявних фонів за назвою..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setVisibleBgCount(300); }} />
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <label style={{ fontSize: "12px", color: "#ffc996", fontWeight: "600" }}>Категорія:</label>
              <select aria-label="Категорія фонів" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} style={{ background: "rgba(10, 14, 26, 0.95)", fontSize: "12px", color: "#fff", border: "1px solid rgba(255, 179, 108, 0.3)", borderRadius: "6px", padding: "4px 8px", outline: "none", cursor: "pointer" }}>
                <option value="all">Усі зображення</option>
                <option value="Природа та Стихії">Природа та Стихії</option>
                <option value="Фентезі та Легенди">Фентезі та Легенди</option>
                <option value="Темрява та Містика">Темрява та Містика</option>
                <option value="custom">Ваші зображення та відео</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <label style={{ fontSize: "12px", color: "#ffc996", fontWeight: "600" }}>Сортувати:</label>
              <select aria-label="Сортування фонів" value={sortType} onChange={(e) => setSortType(e.target.value)} style={{ background: "rgba(10, 14, 26, 0.95)", color: "#fff", border: "1px solid rgba(255, 179, 108, 0.3)", borderRadius: "6px", fontSize: "12px", padding: "4px 8px", outline: "none", cursor: "pointer" }}>
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
              <BgItem key={idx} $active={heroBg === bg.src || heroBg2 === bg.src}>
                <RatingOverlay>
                  <HeartIcon $color={rating === 2 ? "gold" : rating === 1 ? "#ff4d4d" : "white"} onClick={() => handleRate(bg.src)}>
                    {rating === 2 ? "💛" : rating === 1 ? "❤️" : "🤍"}
                  </HeartIcon>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <Tooltip content="На весь екран" isDarkMode={isDarkMode}>
                      <HeartIcon $color="#aef" aria-label="Відкрити на весь екран" onClick={(e) => { e.stopPropagation(); setFullscreenBg(bg); }}><FiMaximize2 /></HeartIcon>
                    </Tooltip>
                    <Tooltip content="Скачати файл фону" isDarkMode={isDarkMode}>
                      <HeartIcon $color="#ffda79" aria-label="Скачати фон" title="Завантажити фон" onClick={(e) => { e.stopPropagation(); handleDownloadBg(bg); }}><FiDownload /></HeartIcon>
                    </Tooltip>
                  </div>
                </RatingOverlay>
                {isCustom(bg.src) && (
                  <>
                    <EditBtn onClick={(e) => { e.stopPropagation(); const newName = window.prompt("Введіть нову назву для цих шпалер:", bg.name); if (newName) setCustomHeroBgs((prev) => prev.map((b) => b.src === bg.src ? { ...b, name: newName } : b)); }} aria-label="Редагувати назву">✎</EditBtn>
                    <DeleteBtn onClick={(e) => { e.stopPropagation(); if (window.confirm(`Видалити шпалери "${bg.name}"?`)) { setCustomHeroBgs((prev) => prev.filter((b) => b.src !== bg.src)); setBgRatings((prev) => { const n = { ...prev }; delete n[bg.src]; return n; }); if (heroBg === bg.src) setHeroBg(hills); if (heroBg2 === bg.src) setHeroBg2(hills); } }} aria-label="Видалити">×</DeleteBtn>
                  </>
                )}
                {bg.author && (<TopOverlay><div style={{ fontWeight: "bold" }}>{bg.author}</div>{bg.source && <div>{bg.source}</div>}</TopOverlay>)}
                <NameOverlay $hasSlots={heroBgMode === "slideshow-2" || heroBgMode === "slideshow-3"}>
                  {heroBgMode === "random" && qIndex !== -1 && (
                    <span style={{ color: qIndex === randomCurrentIndex ? "#6cffe4" : "#ffb36c", marginRight: "6px", fontWeight: "bold", textShadow: qIndex === randomCurrentIndex ? "0 0 8px #6cffe4" : "none" }}>#{qIndex + 1} {qIndex === randomCurrentIndex && "(Зараз)"}</span>
                  )}
                  {bg.name}
                </NameOverlay>
                {isVideoSource(bg.src) ? (
                  <VideoThumbnail bg={bg} onClick={() => handleSelectBg(bg.src)} />
                ) : (
                  <BlobAwareSquare src={cardThumbnail?.src || bg.src} onClick={() => handleSelectBg(bg.src)} title={bg.name} />
                )}
                {heroBgMode === "slideshow-2" && (<SlotButtons><SlotBtn $active={heroBg === bg.src} onClick={() => handleSelectBg(bg.src, 1)}>Слот 1</SlotBtn><SlotBtn $active={heroBg2 === bg.src} onClick={() => handleSelectBg(bg.src, 2)}>Слот 2</SlotBtn></SlotButtons>)}
                {heroBgMode === "slideshow-3" && (<SlotButtons><SlotBtn $active={heroBg === bg.src} onClick={() => handleSelectBg(bg.src, 1)}>Слот 1</SlotBtn><SlotBtn $active={heroBg2 === bg.src} onClick={() => handleSelectBg(bg.src, 2)}>Слот 2</SlotBtn><SlotBtn $active={heroBg3 === bg.src} onClick={() => handleSelectBg(bg.src, 3)}>Слот 3</SlotBtn></SlotButtons>)}
              </BgItem>
            );
          })}
        </BgGrid>

        {sortedBgs.length > visibleBgCount && (
          <LoadMoreButton onClick={() => setVisibleBgCount((prev) => prev + 300)}>Завантажити ще</LoadMoreButton>
        )}
        </ModalSection>

        <ModalDivider />
        <DropZone onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}>
          <FiUploadCloud size={24} aria-hidden="true" />
          <div><span style={{ color: "#ffb36c", fontWeight: "bold" }}>Перетягніть сюди</span> картинку або відео</div>
          <span style={{ fontSize: "11px", color: "#8a8d9b" }}>або натисніть для вибору файлу з вашого пристрою</span>
          <input type="file" ref={fileInputRef} hidden accept="image/*,video/*" onChange={(e) => { handleFileUpload(e.target.files[0]); e.target.value = ""; }} />
        </DropZone>

        {fullscreenBg && (
          <FullscreenViewer bg={fullscreenBg} onClose={() => setFullscreenBg(null)} onDownload={handleDownloadBg} />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default BgModal;
