import React, { useState, useCallback, useMemo, useRef } from "react";
import styled, { keyframes } from "styled-components";
import localforage from "localforage";
import toast from "react-hot-toast";
import {
  FiClock,
  FiDownload,
  FiDroplet,
  FiGrid,
  FiImage,
  FiPrinter,
  FiRefreshCw,
  FiSearch,
  FiShuffle,
  FiUploadCloud,
  FiX,
} from "react-icons/fi";
import { DEFAULT_BGS } from "./defaultBgs";
import village from "../../photos/fan-art/village.webp";
import faded from "../../photos/fan-art/faded.webp";
import { Tooltip } from "./Hero.jsx";

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
  image.style.cssText = "display:block;max-width:100%;max-height:100vh;margin:auto;object-fit:contain";
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
  &:hover { background: rgba(255, 179, 108, 0.06); border-color: #ffb36c; color: #fff; box-shadow: 0 0 15px rgba(255, 179, 108, 0.15); }
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
  &:disabled { cursor: wait; opacity: 0.65; }
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
  const [pixabayQuery, setPixabayQuery] = useState("");
  const [pixabayResults, setPixabayResults] = useState([]);
  const [pixabayStatus, setPixabayStatus] = useState("idle");
  const [pixabayPage, setPixabayPage] = useState(1);
  const [descriptionModal, setDescriptionModal] = useState(null);
  const MAX_DAILY_HERO_CARDS = 1000;
  const fileInputRef = useRef(null);

  const allBgs = useMemo(
    () => [...DEFAULT_BGS, ...(customHeroBgs || [])],
    [customHeroBgs],
  );

  const isCustom = (src) => !DEFAULT_BGS.some((bg) => bg.src === src);

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
      if (!response.ok) throw new Error(`Pixabay request failed: ${response.status}`);
      const data = await response.json();
      const results = (data.hits || []).map((hit) => ({
        id: hit.id,
        previewURL: hit.previewURL,
        largeImageURL: hit.largeImageURL,
        name: hit.tags || query,
        source: "Pixabay",
      }));
      setPixabayResults((previous) => page === 1 ? results : [...previous, ...results]);
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
      (background) => background.id === image.id || background.src === src,
    );
    if (!existing) {
      setCustomHeroBgs((previous) => [
        { id: `pixabay-${image.id}`, src, name: image.name, category: "Ваші картинки", source: image.source },
        ...previous,
      ]);
    }
    handleSelectBg(existing?.src || src);
    toast.success("Фон встановлено.");
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

  return (
    <ModalOverlay $isClosing={isClosing} onClick={onClose}>
      <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
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

        <ModalDivider />
        <ModalSectionTitle><FiImage /> Бібліотека зображень</ModalSectionTitle>
        <form onSubmit={(event) => { event.preventDefault(); handleSearchPixabay(1); }} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <ModalSearchInput aria-label="Пошук фонів на Pixabay" placeholder="Пошук зображень на Pixabay..." value={pixabayQuery} onChange={(event) => setPixabayQuery(event.target.value)} style={{ flex: "1 1 240px" }} />
          <SearchActionButton type="submit" disabled={pixabayStatus === "loading"}>
            <FiSearch />{pixabayStatus === "loading" ? "Шукаємо..." : "Pixabay"}
          </SearchActionButton>
        </form>
        {pixabayStatus === "no-results" && <span style={{ color: "#c5c8d0", fontSize: 12 }}>Нічого не знайдено. Спробуйте інший запит.</span>}
        {pixabayStatus === "error" && <span role="alert" style={{ color: "#ff8a80", fontSize: 12 }}>Пошук не вдався. Спробуйте ще раз.</span>}
        {pixabayResults.length > 0 && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(105px, 1fr))", gap: 8 }}>
              {pixabayResults.map((image) => (
                <button key={image.id} type="button" onClick={() => handleAddPixabayBackground(image)} title={`Встановити фон: ${image.name}`} style={{ position: "relative", aspectRatio: "1", overflow: "hidden", padding: 0, border: "1px solid rgba(255, 179, 108, 0.4)", borderRadius: 8, background: "#10131b", cursor: "pointer" }}>
                  <img src={image.previewURL} alt={image.name} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", inset: "auto 0 0", padding: "4px", overflow: "hidden", color: "#fff", background: "rgba(0,0,0,.72)", fontSize: 10, textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{image.name}</span>
                </button>
              ))}
            </div>
            {pixabayResults.length === pixabayPage * 12 && (
              <SearchActionButton type="button" disabled={pixabayStatus === "loading"} onClick={() => handleSearchPixabay(pixabayPage + 1)}>
                {pixabayStatus === "loading" ? "Завантажуємо..." : "Ще з Pixabay"}
              </SearchActionButton>
            )}
          </>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <ModalSearchInput placeholder="Фільтр наявних фонів за назвою..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setVisibleBgCount(300); }} />
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <label style={{ fontSize: "12px", color: "#ffc996", fontWeight: "600" }}>Категорія:</label>
              <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} style={{ background: "rgba(10, 14, 26, 0.95)", fontSize: "12px", color: "#fff", border: "1px solid rgba(255, 179, 108, 0.3)", borderRadius: "6px", padding: "4px 8px", outline: "none", cursor: "pointer" }}>
                <option value="all">Усі зображення</option>
                <option value="Природа та Стихії">Природа та Стихії</option>
                <option value="Фентезі та Легенди">Фентезі та Легенди</option>
                <option value="Темрява та Містика">Темрява та Містика</option>
                <option value="custom">Ваші зображення та відео</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <label style={{ fontSize: "12px", color: "#ffc996", fontWeight: "600" }}>Сортувати:</label>
              <select value={sortType} onChange={(e) => setSortType(e.target.value)} style={{ background: "rgba(10, 14, 26, 0.95)", color: "#fff", border: "1px solid rgba(255, 179, 108, 0.3)", borderRadius: "6px", fontSize: "12px", padding: "4px 8px", outline: "none", cursor: "pointer" }}>
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
                    {bg.description && (
                      <Tooltip content="Детальний опис картини" isDarkMode={isDarkMode}>
                        <HeartIcon $color="#aef" aria-label="Детальний опис картини" onClick={(e) => { e.stopPropagation(); setDescriptionModal({ name: bg.name, text: bg.description, src: bg.src, author: bg.author, source: bg.source }); }}>❓</HeartIcon>
                      </Tooltip>
                    )}
                    <Tooltip content="Скачати файл фону" isDarkMode={isDarkMode}>
                      <HeartIcon $color="#ffda79" aria-label="Скачати фон" title="Завантажити фон" onClick={(e) => { e.stopPropagation(); handleDownloadBg(bg); }}><FiDownload /></HeartIcon>
                    </Tooltip>
                    {!isVideoSource(bg.src) && (
                      <Tooltip content="Надрукувати фон" isDarkMode={isDarkMode}>
                        <HeartIcon $color="#aef" aria-label="Надрукувати фон" title="Надрукувати фон" onClick={(e) => { e.stopPropagation(); handlePrintBg(bg); }}><FiPrinter /></HeartIcon>
                      </Tooltip>
                    )}
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
                  <BgSquare src={cardThumbnail?.src || bg.src} loading="lazy" onClick={() => handleSelectBg(bg.src)} title={bg.name} />
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

        <ModalDivider />
        <DropZone onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}>
          <FiUploadCloud size={24} aria-hidden="true" />
          <div><span style={{ color: "#ffb36c", fontWeight: "bold" }}>Перетягніть сюди</span> картинку або відео</div>
          <span style={{ fontSize: "11px", color: "#8a8d9b" }}>або натисніть для вибору файлу з вашого пристрою</span>
          <input type="file" ref={fileInputRef} hidden accept="image/*,video/*" onChange={(e) => { handleFileUpload(e.target.files[0]); e.target.value = ""; }} />
        </DropZone>

        {descriptionModal && (
          <div onClick={() => setDescriptionModal(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "5px" }}>
            <div onClick={(e) => e.stopPropagation()} style={{ background: "#111", border: "2px solid #ffb36c", borderRadius: "14px", width: "90%", maxWidth: "900px", height: "80vh", maxHeight: "650px", color: "#fff", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 20px 50px rgba(0,0,0,0.9)" }}>
              {isVideoSource(descriptionModal.src) ? (
                <video src={descriptionModal.src} preload="metadata" autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} />
              ) : (
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${descriptionModal.src})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 1 }} />
              )}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)", zIndex: 2 }} />
              <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", padding: "10px", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <h3 style={{ color: "#ffb36c", margin: 0, fontSize: "20px", fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}>{descriptionModal.name}</h3>
                  <button onClick={() => setDescriptionModal(null)} style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "5px", width: "30px", height: "30px", color: "#fff", fontSize: "30px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,0,0,0.7)"; e.currentTarget.style.borderColor = "red"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.6)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}>×</button>
                </div>
                <div style={{ flex: 1, overflowY: "auto", margin: "5px 0", paddingRight: "5px" }}>
                  <p style={{ lineHeight: 1.8, whiteSpace: "pre-wrap", fontSize: "15px", margin: 0, textShadow: "0 2px 10px rgba(0,0,0,0.95)", color: "#f5f5f5", borderRadius: "8px", backdropFilter: "blur(2px)" }}>{descriptionModal.text}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <div style={{ background: "rgba(0, 0, 0, 0.75)", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", border: "1px solid rgba(255, 179, 108, 0.4)", color: "#ffb36c", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>Автор: {descriptionModal.author || "Невідомий"}</div>
                    {descriptionModal.source && <div style={{ background: "rgba(0, 0, 0, 0.75)", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", border: "1px solid rgba(255, 179, 108, 0.4)", color: "#ffb36c", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>Джерело: {descriptionModal.source}</div>}
                  </div>
                  <button onClick={() => handleDownloadBg(descriptionModal)} style={{ background: "linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)", color: "#000", border: "none", borderRadius: "8px", padding: "8px 16px", fontSize: "13px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 2px 8px rgba(255, 179, 108, 0.4)", display: "flex", alignItems: "center", gap: "6px", transition: "transform 0.15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>  <FiDownload /> Скачати {isVideoSource(descriptionModal.src) ? "відео" : "картинку"}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default BgModal;
