import React, { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes, css } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pixelturkey from "../../photos/cursors/pixelturkey.webp"
import twoturkey from "../../photos/cursors/twoturkey.webp"
import climate from "../../photos/cursors/climate.webp"
import localforage from "localforage";
// Ctrl + Shift + M: Активувати/деактивувати мапу
// Ctrl + Shift + F: Відкрити на весь екран
// Ctrl + Shift + P: Відкрити/закрити міні-плеєр
// Ctrl + Shift + W: Перемкнути джерело (Windy / Ventusky)
// Ctrl + Shift + S: Відкрити поле ШІ пошуку
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AihelpTitle = styled.div`
  font-size: 20px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#111111")};
  display: inline-flex;
    margin-bottom: -41px;
    width: 200px;
  padding:3px 7px;
  transition: all 0.3s ease;
  border-right: 1px solid rgb(255, 179, 108);
    border-left: 1px solid rgb(255, 179, 108);
  margin-right: 4px;
  z-index: 300;
  ${(props) =>
    props.$isStickyBgMode
      ? css`
          background: ${props.$isDarkMode
          ? "rgba(15, 15, 25, 0.75)"
          : "rgba(255, 255, 255, 0.75)"
        };
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `
      : css`
          background: ${props.$isDarkMode
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.05)"
        };
          border: 1px solid
            ${props.$isDarkMode
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)"
        };
        `}
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 6.6;
  min-height: 560px;
  margin: 0 auto;
  border-radius: ${(props) => (props.$isFullscreen ? "0" : "8px")};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${(props) =>
    props.$isFullscreen ? "none" : "1px solid rgba(255, 255, 255, 0.15)"};
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${climate});
    background-size: cover;
    background-position: center;
    opacity: 0.89;
  }
`;

const Controls = styled.div`
  display: none;
`;

const MobileSettingsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 10px 4px;
  border: 1px solid rgb(255, 179, 108);
  border-radius: 7px;
  background: rgba(18, 18, 28, 0.88);
  color: #ffb36c;
  cursor: pointer;
  z-index: 100;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
`;

const MobileSettingsOverlay = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: end;
  justify-content: center;
  background: rgba(5, 8, 14, 0.14);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`;

const MobileSettingsPanel = styled.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-top: 56px;
  background: rgba(23, 37, 71, 0.74);
  color: white;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
`;

const MobileSettingsHeading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 0;
  margin-left: -8px;
  padding-left: 15px;
  width: 100%;
  margin-bottom: 7px;
  background: #243e5a;

  h2 {
    margin: 0;
    font-size: 19px;
  }

  p {
    color: rgba(255, 255, 255, 0.64);
    font-size: 12px;
  }
`;

const MobileSetting = styled.button`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  margin-top: 6px;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.07);
  color: white;
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: rgba(255, 179, 108, 0.65);
    background: rgba(255, 179, 108, 0.14);
  }

  strong {
    font-size: 13px;
  }

  span {
    grid-column: 1;
    color: rgba(255, 255, 255, 0.62);
    font-size: 11px;
    line-height: 1.35;
  }

  kbd {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    padding: 4px 7px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: #ffcf9e;
    font-size: 10px;
    white-space: nowrap;
  }
`;

const MobileSettingsClose = styled.button`
  width: 60px;
  font-size: 41px;
  border-radius: 10px;
  background: transparent;
  top: -18px;
  right: -10px;
  position: absolute;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${(props) => (props.$isReady ? "auto" : "none")};
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.$isLoading ? "0" : "1")};
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  gap: 17px;
  flex-direction: column;
  width: 280px;
  text-align: center;
  z-index: 1;
  pointer-events: none;
`;

const ActionButton = styled.button`
  background: ${(props) =>
    props.$active
      ? "linear-gradient(135deg, #00c6ff, #0072ff)"
      : "rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  border: 1px solid
    ${(props) =>
    props.$active ? "rgba(0, 198, 255, 0.6)" : "rgba(255, 255, 255, 0.15)"};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${(props) =>
    props.$active ? "0 4px 12px rgba(0, 114, 255, 0.3)" : "none"};

  &:hover {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 114, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SearchInput = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const MiniPlayerWindow = styled.div`
  position: fixed;
  z-index: 2200;
  display: flex;
  flex-direction: column;
  background: rgba(10, 15, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  user-select: none;
`;

const MiniPlayerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`;

const MiniHeaderTitle = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

const MiniHeaderButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const MiniPlayerBody = styled.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`;

const ResizeHandle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(255, 255, 255, 0.35) 50%
  );
`;

const DEFAULT_PRESET_FRAMES = [
  {
    id: "alerts-ua",
    title: "Карта повітряних тривог України",
    url: "https://alerts.in.ua/",
    height: 500,
    isActive: false,
    isPreset: true,
  },
];

const FramesSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FramesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4px;
`;

const FramesTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#111111")};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FramesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  width: 100%;
`;

const FrameCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(18, 24, 38, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

const FrameCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
`;

const FrameCardTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const FrameCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FrameIconButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  padding: 16px;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  background: #121826;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  padding: 22px;
  color: #ffffff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ModalCloseBtn = styled.button`
  background: transparent;
  border: none;
  color: #aaa;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const FrameItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 8px;
`;

const ToggleSwitch = styled.button`
  padding: 6px 14px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  background: ${(props) => (props.$active ? "#4caf50" : "rgba(255,255,255,0.2)")};
  color: #ffffff;
  transition: background 0.2s;
`;

const AddFrameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormInput = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`;

const FormButton = styled.button`
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #ffb36c, #ff8c00);
  color: #111;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    opacity: 0.9;
  }
`;

const SourceSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 13px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: border-color 0.2s;

  &:hover, &:focus {
    border-color: #ffb36c;
  }

  option {
    background: #121826;
    color: white;
  }
`;

const MobileSettingSelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const MobileSourceSelect = styled.select`
  width: 100%;
  padding: 7px;
  border-radius: 8px 8px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(33, 57, 94, 0.9);
  color: white;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  margin-top: 6px;

  option {
    background: rgba(33, 57, 94, 0.9);
    color: white;
  }
`;



const ClimateMap = ({ isDarkMode, isStickyBgMode }) => {
  const [lat, setLat] = useState(48.379);
  const [lon, setLon] = useState(31.165);
  const [zoom, setZoom] = useState(5);
  const [isAiSearchOpen, setIsAiSearchOpen] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [geminiKey, setGeminiKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState("wind");
  const [isMapActive, setIsMapActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false);
  const [pipWindow, setPipWindow] = useState(null);
  const [provider, setProvider] = useState("ventusky");

  const turkeyFrames = [pixelturkey, twoturkey];
  const [currentTurkeyFrame, setCurrentTurkeyFrame] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTurkeyFrame((prev) => (prev + 1) % turkeyFrames.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const [miniPlayerPosition, setMiniPlayerPosition] = useState(() => {
    if (typeof window === "undefined") return { x: 24, y: 24 };
    return {
      x: Math.max(16, window.innerWidth - 360),
      y: Math.max(16, window.innerHeight - 260),
    };
  });
  const [miniPlayerSize, setMiniPlayerSize] = useState({
    width: 320,
    height: 220,
  });
  const mapWrapperRef = useRef(null);
  const miniPlayerRef = useRef(null);
  const dragStateRef = useRef(null);
  const resizeStateRef = useRef(null);

  const [customFrames, setCustomFrames] = useState(DEFAULT_PRESET_FRAMES);
  const [isFramesModalOpen, setIsFramesModalOpen] = useState(false);
  const [newFrameTitle, setNewFrameTitle] = useState("");
  const [newFrameUrl, setNewFrameUrl] = useState("");
  const [newFrameHeight, setNewFrameHeight] = useState("450");

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleSetProvider = async (newProvider) => {
    setProvider(newProvider);
    try {
      await localforage.setItem("selected_climate_provider", newProvider);
    } catch (e) {
      console.error("Error saving climate provider:", e);
    }
  };

  const handleActivateMap = async () => {
    setIsMapActive(true);
    try {
      await localforage.setItem("map_last_unlocked_time", Date.now());
    } catch (e) {
      console.error("Error saving map unlock time:", e);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedKey = await localforage.getItem("gemini_api_key");
        if (savedKey) setGeminiKey(savedKey);

        const savedProvider = await localforage.getItem("selected_climate_provider");
        if (savedProvider) setProvider(savedProvider);

        const pinnedLoc = await localforage.getItem("pinned_map_location");
        if (pinnedLoc) {
          setLat(pinnedLoc.lat);
          setLon(pinnedLoc.lon);
          setZoom(pinnedLoc.zoom);
          if (pinnedLoc.overlay) setOverlay(pinnedLoc.overlay);
          if (pinnedLoc.provider) setProvider(pinnedLoc.provider);
        }

        const lastUnlocked = await localforage.getItem("map_last_unlocked_time");
        const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
        if (lastUnlocked && Date.now() - lastUnlocked < SEVEN_DAYS_MS) {
          setIsMapActive(true);
        }

        const savedFrames = await localforage.getItem("climate_custom_frames");
        if (savedFrames && Array.isArray(savedFrames)) {
          const merged = [...savedFrames];
          DEFAULT_PRESET_FRAMES.forEach((preset) => {
            if (!merged.some((f) => f.id === preset.id)) {
              merged.unshift(preset);
            }
          });
          setCustomFrames(merged);
        }
      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };
    loadData();
  }, []);

  const saveFrames = async (newFrames) => {
    setCustomFrames(newFrames);
    try {
      await localforage.setItem("climate_custom_frames", newFrames);
    } catch (err) {
      console.error("Error saving custom frames:", err);
    }
  };

  const handleToggleFrame = (id) => {
    const next = customFrames.map((f) =>
      f.id === id ? { ...f, isActive: !f.isActive } : f
    );
    saveFrames(next);
  };

  const handleDeleteFrame = (id) => {
    const next = customFrames.filter((f) => f.id !== id);
    saveFrames(next);
    if (provider === id) {
      handleSetProvider("ventusky");
    }
  };

  const handleAddFrame = (e) => {
    e.preventDefault();
    if (!newFrameUrl.trim()) return;

    const userCustomCount = customFrames.filter((f) => !f.isPreset).length;
    if (userCustomCount >= 2) {
      alert("Максимальний ліміт: можна додати не більше 2 власних фреймів.");
      return;
    }

    let targetUrl = newFrameUrl.trim();
    const matchSrc = targetUrl.match(/src=["']([^"']+)["']/i);
    if (matchSrc) {
      targetUrl = matchSrc[1];
    }

    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      alert("Будь ласка, введіть коректне посилання (https://...)");
      return;
    }

    const title = newFrameTitle.trim() || "Кастомний віджет";
    const height = parseInt(newFrameHeight, 10) || 450;

    const newFrame = {
      id: "custom-" + Date.now(),
      title,
      url: targetUrl,
      height,
      isActive: true,
      isPreset: false,
    };

    saveFrames([...customFrames, newFrame]);
    setNewFrameTitle("");
    setNewFrameUrl("");
    setNewFrameHeight("450");
  };



  const handlePinLocation = async (e) => {
    if (e) e.stopPropagation();
    try {
      await localforage.setItem("pinned_map_location", {
        lat,
        lon,
        zoom,
        overlay,
        provider,
      });
      await localforage.setItem("selected_climate_provider", provider);
      alert("Локацію та обране джерело карти закріплено! Вони завантажаться при наступному вході.");
    } catch (error) {
      console.error("Error pinning location:", error);
    }
  };

  const handleOpenMiniPlayer = async () => {
    if (window.documentPictureInPicture) {
      try {
        const pipWindow = await window.documentPictureInPicture.requestWindow({
          width: 400,
          height: 300,
        });

        pipWindow.document.body.style.margin = "0";
        pipWindow.document.body.style.overflow = "hidden";
        pipWindow.document.body.style.background = "#1a1a1a";

        pipWindow.addEventListener("pagehide", () => {
          setPipWindow(null);
          setIsMiniPlayerOpen(false);
        });

        setPipWindow(pipWindow);
        setIsMiniPlayerOpen(true);
      } catch (err) {
        console.error("PiP API failed:", err);
        setIsMiniPlayerOpen(true);
      }
    } else {
      setIsMiniPlayerOpen(true);
    }
  };

  const handleAiSearch = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim() || isAiLoading) return;
    if (!geminiKey) {
      alert(
        "API-ключ Gemini не знайдено. Будь ласка, додайте його в налаштуваннях ШІ.",
      );
      return;
    }

    setIsAiLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        tools: [{ googleSearch: {} }],
      });
      const prompt = `Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. 
      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.
      Запит: ${searchQuery}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text().trim();
      if (text.startsWith("```json")) {
        text = text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();
      } else if (text.startsWith("```")) {
        text = text.replace(/```/g, "").trim();
      }

      const data = JSON.parse(text);
      if (Number.isFinite(data.lat) && Number.isFinite(data.lon)) {
        setLat(data.lat);
        setLon(data.lon);
        setSearchQuery("");
        setIsAiSearchOpen(false);
        setIsMapActive(true);
      }
    } catch (error) {
      console.error("AI Search error:", error);
      alert("Не вдалося знайти локацію. Спробуйте змінити запит.");
    } finally {
      setIsAiLoading(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragStateRef.current) {
        const { startX, startY, originX, originY } = dragStateRef.current;
        const nextX = Math.max(
          8,
          Math.min(window.innerWidth - 120, originX + event.clientX - startX),
        );
        const nextY = Math.max(
          8,
          Math.min(window.innerHeight - 80, originY + event.clientY - startY),
        );
        setMiniPlayerPosition({ x: nextX, y: nextY });
      }

      if (resizeStateRef.current) {
        const { startX, startY, width, height } = resizeStateRef.current;
        const nextWidth = Math.max(
          260,
          Math.min(window.innerWidth - 24, width + event.clientX - startX),
        );
        const nextHeight = Math.max(
          200,
          Math.min(window.innerHeight - 24, height + event.clientY - startY),
        );
        setMiniPlayerSize({ width: nextWidth, height: nextHeight });
      }
    };

    const handleMouseUp = () => {
      dragStateRef.current = null;
      resizeStateRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);


  const toggleFullscreen = (targetRef = mapWrapperRef) => {
    if (!document.fullscreenElement) {
      if (targetRef.current?.requestFullscreen) {
        targetRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      if (e.shiftKey && e.ctrlKey) {
        switch (e.key.toLowerCase()) {
          case 'm':
            e.preventDefault();
            setIsMapActive(prev => !prev);
            break;
          case 'f':
            e.preventDefault();
            toggleFullscreen();
            break;
          case 'p':
            e.preventDefault();
            if (isMiniPlayerOpen) {
              if (pipWindow) pipWindow.close();
              else setIsMiniPlayerOpen(false);
            } else {
              handleOpenMiniPlayer();
            }
            break;
          case 'w': {
            e.preventDefault();
            const allSources = ["ventusky", "windy", ...customFrames.map((f) => f.id)];
            setProvider((current) => {
              const idx = allSources.indexOf(current);
              const nextIdx = (idx + 1) % allSources.length;
              return allSources[nextIdx];
            });
            break;
          }
          case 's':
            e.preventDefault();
            setIsAiSearchOpen((prev) => !prev);
            break;
          case 'l':
            e.preventDefault();
            handlePinLocation();
            break;
          case 'k':
            e.preventDefault();
            setIsFramesModalOpen((prev) => !prev);
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMiniPlayerOpen, pipWindow, customFrames]);

  const handleMiniPlayerDragStart = (event) => {
    if (event.target.closest("button")) return;
    event.preventDefault();
    dragStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: miniPlayerPosition.x,
      originY: miniPlayerPosition.y,
    };
  };

  const handleMiniPlayerResizeStart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    resizeStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      width: miniPlayerSize.width,
      height: miniPlayerSize.height,
    };
  };

  const embedUrl = useMemo(() => {
    if (provider === "windy") {
      return `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=${zoom}&level=surface&overlay=${overlay}&menu=&message=true&marker=`;
    }

    if (provider === "ventusky") {
      let vOverlay = overlay;
      if (overlay === "rain") vOverlay = "rain-3h";
      if (overlay === "temp") vOverlay = "temperature";
      if (overlay === "clouds") vOverlay = "cloud-cover";
      return `https://www.ventusky.com/?p=${lat};${lon};${zoom}&l=${vOverlay}`;
    }

    const foundFrame = customFrames.find((f) => f.id === provider);
    if (foundFrame) {
      return foundFrame.url;
    }

    let vOverlay = overlay;
    if (overlay === "rain") vOverlay = "rain-3h";
    if (overlay === "temp") vOverlay = "temperature";
    if (overlay === "clouds") vOverlay = "cloud-cover";
    return `https://www.ventusky.com/?p=${lat};${lon};${zoom}&l=${vOverlay}`;
  }, [provider, lat, lon, zoom, overlay, customFrames]);

  useEffect(() => {
    setIsLoading(true);
  }, [provider, lat, lon, zoom, overlay]);
  return (
    <OuterContainer>
      <AihelpTitle $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        Кліматична мапа
      </AihelpTitle>

      <MobileSettingsButton
        type="button"
        onClick={() => setIsControlsOpen(true)}
        aria-label="Відкрити налаштування Стихії"
      >
        Налаштування Стихії
      </MobileSettingsButton>

      <MapWrapper
        ref={mapWrapperRef}
        $isFullscreen={isFullscreen}
        onClick={() => !isMapActive && handleActivateMap()}
      >
        <Controls $isOpen={isControlsOpen}>
          {isAiSearchOpen && (
            <SearchContainer onSubmit={handleAiSearch}>
              <SearchInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Місто, село..."
                autoFocus
              />
              <ActionButton
                type="submit"
                $active={true}
                disabled={isAiLoading}
                onClick={(e) => e.stopPropagation()}
              >
                {isAiLoading ? "Шукаю..." : "Знайти"}
              </ActionButton>
            </SearchContainer>
          )}

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              setIsAiSearchOpen(!isAiSearchOpen);
            }}
          >
            ШІ Пошук
          </ActionButton>

          <ActionButton onClick={handlePinLocation}>
            Закріпити
          </ActionButton>

          <SourceSelect
            value={provider}
            onChange={(e) => handleSetProvider(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            title="Оберіть джерело мапи"
          >
            <option value="ventusky">Джерело: Ventusky</option>
            <option value="windy">Джерело: Windy</option>
            {customFrames.map((frame) => (
              <option key={frame.id} value={frame.id}>
                Джерело: {frame.title}
              </option>
            ))}
          </SourceSelect>

          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.2)",
              margin: "4px 0",
            }}
          />

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              if (!isMapActive) handleActivateMap();
              else setIsMapActive(false);
            }}
            style={{
              border: isMapActive ? "1px solid #ff4d4d" : "1px solid skyblue",
            }}
          >
            {isMapActive ? "Деактивувати" : "Активувати"}
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
          >
            {isFullscreen ? "Згорнути" : "На весь екран"}
          </ActionButton>

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              if (isMiniPlayerOpen) {
                if (pipWindow) pipWindow.close();
                else setIsMiniPlayerOpen(false);
              } else {
                handleOpenMiniPlayer();
              }
            }}
          >
            {isMiniPlayerOpen ? "Закрити міні-плеєр" : "Міні-плеєр"}
          </ActionButton>

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              setIsFramesModalOpen(true);
            }}
          >
            Кастомні віджети
          </ActionButton>
        </Controls>

        {isControlsOpen && (
          <MobileSettingsOverlay onClick={() => setIsControlsOpen(false)}>
            <MobileSettingsPanel onClick={(e) => e.stopPropagation()}>
              <MobileSettingsHeading>
                <div>
                  <h2>Налаштування Стихії</h2>
                  <p>Керуйте картою та її джерелом</p>
                </div>
                <MobileSettingsClose type="button" onClick={() => setIsControlsOpen(false)}>
                  ×
                </MobileSettingsClose>
              </MobileSettingsHeading>

              {isAiSearchOpen && (
                <SearchContainer onSubmit={handleAiSearch}>
                  <SearchInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Місто, село..."
                    autoFocus
                  />
                  <ActionButton type="submit" $active={true} disabled={isAiLoading}>
                    {isAiLoading ? "Шукаю..." : "Знайти"}
                  </ActionButton>
                </SearchContainer>
              )}

              <MobileSetting type="button" onClick={() => setIsAiSearchOpen(!isAiSearchOpen)}>
                <strong>ШІ-пошук локації</strong>
                <kbd>Ctrl + Shift + S</kbd>
                <span>Знайти місто або місце за допомогою ШІ та перемістити карту.</span>
              </MobileSetting>
              <MobileSetting type="button" onClick={handlePinLocation}>
                <strong>Закріпити локацію</strong>
                <kbd>Ctrl + Shift + L</kbd>
                <span>Зберегти поточні координати, масштаб і шар для наступного входу.</span>
              </MobileSetting>
              <MobileSettingSelectGroup style={{ marginTop: "5px" }} onClick={(e) => e.stopPropagation()}>
                <MobileSetting style={{ background: "none", padding: "0", border: "none" }} type="button" onClick={handlePinLocation}>
                  <strong>Джерело карти</strong>
                  <span>Зручне перемикання між: Windy\Ventusky\Картою тривог Украіїни!</span>
                  <kbd style={{ fontSize: "11px", fontWeight: 400 }}>Ctrl + Shift + W</kbd>
                </MobileSetting>
                <MobileSourceSelect
                  value={provider}
                  onChange={(e) => handleSetProvider(e.target.value)}
                >
                  <option value="ventusky">Ventusky</option>
                  <option value="windy">Windy</option>
                  {customFrames.map((frame) => (
                    <option key={frame.id} value={frame.id}>
                      {frame.title}
                    </option>
                  ))}
                </MobileSourceSelect>
              </MobileSettingSelectGroup>
              <MobileSetting type="button" onClick={() => {
                if (!isMapActive) handleActivateMap();
                else setIsMapActive(false);
              }}>
                <strong>{isMapActive ? "Деактивувати карту" : "Активувати карту"}</strong>
                <kbd>Ctrl + Shift + M</kbd>
                <span>Увімкнути або вимкнути взаємодію з картою та її iframe.</span>
              </MobileSetting>
              <MobileSetting type="button" onClick={() => toggleFullscreen()}>
                <strong>{isFullscreen ? "Згорнути карту" : "Відкрити на весь екран"}</strong>
                <kbd>Ctrl + Shift + F</kbd>
                <span>Розгорнути карту на весь екран пристрою або повернути звичайний вигляд.</span>
              </MobileSetting>
              <MobileSetting type="button" onClick={handleOpenMiniPlayer}>
                <strong>Міні-плеєр карти</strong>
                <kbd>Ctrl + Shift + P</kbd>
                <span>Винести карту в окреме плаваюче вікно для паралельної роботи.</span>
              </MobileSetting>
              <MobileSetting
                type="button"
                onClick={() => {
                  setIsControlsOpen(false);
                  setIsFramesModalOpen(true);
                }}
              >
                <strong>Кастомні віджети / Фрейми</strong>
                <kbd>Ctrl + Shift + K</kbd>
                <span>Вмикати карти повітряних тривог, вебкамери, радари та інші iframe віджети.</span>
              </MobileSetting>
            </MobileSettingsPanel>
          </MobileSettingsOverlay>
        )}

        {isMiniPlayerOpen ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: 'rgba(255,255,255,0.6)', zIndex: 5, padding: '20px', textAlign: 'center' }}>
            Закрийте міні-плеєр щоб повернути карту
          </div>
        ) : (
          <>
            {(!isMapActive || isLoading) && (
              <Loader>
                <img
                  src={turkeyFrames[currentTurkeyFrame]}
                  alt="Це Доміно :)"
                  style={{ width: '340px', height: '210px', imageRendering: 'pixelated', marginBottom: '-50px' }}
                />
                <p style={{ fontSize: "17px" }}>{!isMapActive ? "Натисніть на карту для активації" : "Завантаження..."}</p>
                <p style={{ fontSize: "11px" }}>Інтерактивні карти надано сервісами Windy, Ventusky та Карта тривог України (містять файли cookie)</p>
                <p style={{ fontSize: "11px" }}>Кнопка «Налаштування стихії» відкриває безкоштовний доступ до перемикання мап, повноекранний режим, міні-плеєр та інші функції!</p>
              </Loader>
            )}

            <StyledIframe
              title="Weather Map"
              src={isMapActive ? embedUrl : undefined}
              $isLoading={isLoading}
              $isReady={isMapActive}
              onLoad={() => setIsLoading(false)}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
          </>
        )}
      </MapWrapper>

      {pipWindow ? (
        createPortal(
          <StyledIframe
            title="Weather Map (PiP)"
            src={embedUrl}
            $isLoading={isLoading}
            $isReady={true}
            onLoad={() => setIsLoading(false)}
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            style={{ width: "100%", height: "100vh" }}
          />,
          pipWindow.document.body
        )
      ) : isMiniPlayerOpen && (
        <MiniPlayerWindow
          ref={miniPlayerRef}
          onDoubleClick={() => setIsMiniPlayerOpen(false)}
          style={{
            left: miniPlayerPosition.x,
            top: miniPlayerPosition.y,
            width: miniPlayerSize.width,
            height: miniPlayerSize.height,
          }}
        >
          <MiniPlayerHeader onMouseDown={handleMiniPlayerDragStart}>
            <MiniHeaderTitle>
              Міні-карта • подвійний клік — назад
            </MiniHeaderTitle>
            <MiniHeaderButtons>
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen(miniPlayerRef);
                }}
              >
                {isFullscreen ? "Згорнути" : "⛶"}
              </ActionButton>
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMiniPlayerOpen(false);
                }}
              >
                ✕
              </ActionButton>
            </MiniHeaderButtons>
          </MiniPlayerHeader>

          <MiniPlayerBody>
            {isLoading && (
              <Loader>
                <p>Завантаження...</p>
              </Loader>
            )}

            <StyledIframe
              title="Weather Map Mini"
              src={embedUrl}
              $isLoading={isLoading}
              $isReady={true}
              onLoad={() => setIsLoading(false)}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
            <ResizeHandle onMouseDown={handleMiniPlayerResizeStart} />
          </MiniPlayerBody>
        </MiniPlayerWindow>
      )}

      {isFramesModalOpen && (
        <ModalOverlay onClick={() => setIsFramesModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3 style={{ margin: 0, fontSize: "18px" }}>Керування віджетами та фреймами</h3>
              <ModalCloseBtn onClick={() => setIsFramesModalOpen(false)}>✕</ModalCloseBtn>
            </ModalHeader>

            <div style={{ fontSize: "12.5px", color: "#ffb36c", marginBottom: "14px", background: "rgba(255,179,108,0.1)", padding: "8px 12px", borderRadius: "8px", lineHeight: "1.4" }}>
              <strong>Примітка:</strong> ШІ-пошук локацій працює виключно з основною картою Стихії (Windy/Ventusky). Всі додаткові фрейми завантажуються автономно за своїми URL.
            </div>

            <div style={{ marginBottom: "16px" }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#aaa" }}>Фрейми у випадаючому списку:</h4>
              {customFrames.map((frame) => (
                <FrameItemRow key={frame.id}>
                  <div style={{ flex: 1, marginRight: "10px", minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: "14px" }}>{frame.title}</div>
                    <div style={{ fontSize: "11px", color: "#aaa", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {frame.url}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      onClick={() => {
                        handleSetProvider(frame.id);
                        setIsFramesModalOpen(false);
                      }}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "16px",
                        border: "none",
                        fontWeight: 700,
                        fontSize: "12px",
                        cursor: "pointer",
                        background: provider === frame.id ? "#ffb36c" : "rgba(255,255,255,0.15)",
                        color: provider === frame.id ? "#111" : "#fff",
                      }}
                    >
                      {provider === frame.id ? "Обрано" : "Обрати"}
                    </button>
                    {!frame.isPreset && (
                      <button
                        onClick={() => handleDeleteFrame(frame.id)}
                        style={{ background: "transparent", border: "none", color: "#ff4d4d", cursor: "pointer", fontSize: "16px" }}
                        title="Видалити фрейм"
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                </FrameItemRow>
              ))}
            </div>

            <AddFrameForm onSubmit={handleAddFrame}>
              <h4 style={{ margin: 0, fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>➕ Додати свій фрейм / віджет</span>
                <span style={{ fontSize: "11px", fontWeight: 400, color: "#aaa" }}>
                  ({customFrames.filter(f => !f.isPreset).length} / 2 власних)
                </span>
              </h4>
              <FormInput
                type="text"
                placeholder="Назва (напр. Карта тривог, Радар...)"
                value={newFrameTitle}
                onChange={(e) => setNewFrameTitle(e.target.value)}
              />
              <FormInput
                type="text"
                placeholder="URL або iframe код (https://... або <iframe src='...'>)"
                value={newFrameUrl}
                onChange={(e) => setNewFrameUrl(e.target.value)}
                required
              />
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "#aaa" }}>Висота (px):</span>
                <FormInput
                  type="number"
                  value={newFrameHeight}
                  onChange={(e) => setNewFrameHeight(e.target.value)}
                  style={{ width: "90px" }}
                  min="200"
                  max="1200"
                />
                <FormButton type="submit" style={{ marginLeft: "auto" }}>Додати</FormButton>
              </div>
            </AddFrameForm>
          </ModalContainer>
        </ModalOverlay>
      )}
    </OuterContainer>

  );
};

export default ClimateMap;
