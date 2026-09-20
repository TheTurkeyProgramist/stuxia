import { useState, useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import InfoModal from "./UserSearchModal.jsx";
import KatSceneModal from "./KatSceneModal";
import { auth } from "../../firebase";
import { GoogleAuthProvider, linkWithPopup, unlink, verifyBeforeUpdateEmail, reauthenticateWithPopup } from "firebase/auth";
import {
  FiUser,
  FiClock,
  FiShield,
  FiSliders,
  FiGlobe,
  FiInfo,
  FiX,
  FiRefreshCw,
  FiFilm,
  FiLock,
  FiCalendar,
  FiSmartphone,
  FiEye,
  FiEyeOff,
  FiMusic,
  FiChevronUp,
  FiChevronDown,
  FiUpload,
  FiTrash2,
  FiPlay,
  FiPause,
  FiShuffle,
  FiRepeat,
  FiVolume2,
  FiList,
  FiSearch,
  FiCompass,
  FiSun,
  FiMoon,
  FiCopy,
  FiCheck,
  FiZap,
  FiLayers,
  FiSliders as FiSlidersIcon,
  FiRotateCcw,
  FiPlus,
} from "react-icons/fi";
import { TbAutomation, TbMenuOrder } from "react-icons/tb";
import { FaRocket, FaAnchorCircleCheck } from "react-icons/fa6";
import { GiPalette } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun as FaSunIcon, FaEye, FaEyeSlash } from "react-icons/fa";
import {
  BASE_BG_TRACKS,
  BG_CACHE_NAME,
  isBaseBgTrack,
  getStoredSoftDeletedIds,
  persistSoftDeletedIds,
} from "../../utils/bgMusicCatalog";
import songAiKnowledge from "../MusicPhoto/songAiKnowledge.json";
import { assetMap } from "../MusicPhoto/MusicPhoto.assets";
import { FILTERS, PRESETS, useVisualFilters } from "../Header/useVisualFilters";
import { useDecorator } from "../Decorator/DecoratorContext.jsx";

// Keyframe Animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.96); }
  100% { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.96); }
`;

const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const eqBarAnim = keyframes`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`;

const appearScale = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

// ── Styled Components ────────────────────────────────────────────────────────

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
  animation: ${(p) => (p.$isClosing ? fadeOut : fadeIn)} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`;

const ModalWindow = styled.div`
  background: #1c1c1f;
  color: #f3f3f3;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  width: 94%; max-width: 1120px;
  height: 88vh; max-height: 850px;
  display: flex; flex-direction: column;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.2);
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${(p) => (p.$isClosing ? fadeOut : fadeIn)} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`;

const WindowHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px;
  background: #202024;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  user-select: none;
`;

const HeaderLeft = styled.div`
  display: flex; align-items: center; gap: 12px;
`;

const UserBadge = styled.div`
  display: flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 4px 12px 4px 6px; border-radius: 20px;
`;

const UserAvatarThumb = styled.img`
  width: 28px; height: 28px; border-radius: 50%; object-fit: cover;
`;

const HeaderTitle = styled.h2`font-size: 16px; font-weight: 600; margin: 0; color: #ffffff;`;
const HeaderSub = styled.span`font-size: 11px; color: #a0a0a0;`;

const HeaderActions = styled.div`display: flex; align-items: center; gap: 8px;`;

const HeaderButton = styled.button`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #e0e0e0;
  padding: 6px 12px; border-radius: 6px;
  font-size: 12px; font-weight: 500; cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.12); color: #ffffff; }
`;

const CloseButton = styled.button`
  background: transparent; border: none; color: #a0a0a0;
  width: 32px; height: 32px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 18px; transition: all 0.15s ease;
  &:hover { background: #c42b1c; color: #ffffff; }
`;

const WindowBody = styled.div`
  display: flex; flex: 1; overflow: hidden;
  @media (max-width: 768px) { flex-direction: column; }
`;

const Sidebar = styled.div`
  width: 230px;
  background: #202024;
  border-right: 1px solid rgba(255,255,255,0.08);
  padding: 12px; display: flex; flex-direction: column; gap: 2px;
  overflow-y: auto; flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%; flex-direction: row;
    border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08);
    overflow-x: auto; padding: 8px;
  }
`;

const NavItem = styled.div`
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 6px; cursor: pointer;
  font-size: 13px; font-weight: ${(p) => (p.$active ? "600" : "400")};
  color: ${(p) => (p.$active ? "#ffffff" : p.$locked ? "#666" : "#c5c5c5")};
  background: ${(p) => (p.$active ? "rgba(255,255,255,0.08)" : "transparent")};
  position: relative; transition: all 0.15s ease; white-space: nowrap;
  opacity: ${(p) => (p.$locked ? 0.45 : 1)};
  pointer-events: ${(p) => (p.$locked ? "none" : "auto")};

  ${(p) =>
    p.$active &&
    css`
      &::before {
        content: "";
        position: absolute;
        left: 3px; top: 8px; bottom: 8px;
        width: 3px; background: #60cdff; border-radius: 2px;
      }
    `}

  &:hover { background: rgba(255,255,255,0.06); color: #ffffff; }

  @media (max-width: 768px) {
    padding: 7px 10px;
    &::before { display: none; }
  }
`;

const NavIconBox = styled.span`
  font-size: 15px; display: flex; align-items: center; justify-content: center;
  color: ${(p) => (p.$active ? "#60cdff" : p.$locked ? "#555" : "#a0a0a0")};
`;

const LockBadge = styled.span`
  font-size: 10px; margin-left: auto; color: #555;
  background: rgba(255,255,255,0.06); padding: 1px 5px; border-radius: 4px;
`;

const MainContent = styled.div`
  flex: 1; padding: 24px; overflow-y: auto;
  background: #1c1c1f; display: flex; flex-direction: column; gap: 16px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
  @media (max-width: 768px) { padding: 16px; }
`;

const SectionHeaderTitle = styled.h3`
  font-size: 20px; font-weight: 600; color: #ffffff;
  margin: 0 0 12px 0; display: flex; align-items: center; gap: 10px;
`;

const CardGroup = styled.div`display: flex; flex-direction: column; gap: 8px;`;

const Card = styled.div`
  background: #27272a;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px; padding: 14px 16px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); }
  @media (max-width: 550px) { flex-direction: column; align-items: flex-start; }
`;

const CardExpanded = styled(Card)`
  flex-direction: column; align-items: stretch; gap: 12px;
`;

const CardLeft = styled.div`
  display: flex; align-items: center; gap: 14px; flex: 1;
`;

const CardIconBox = styled.div`
  width: 36px; height: 36px; min-width: 36px;
  background: rgba(255,255,255,0.06); border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: ${(p) => p.$color || "#60cdff"};
`;

const CardInfo = styled.div`display: flex; flex-direction: column;`;
const CardTitle = styled.span`font-size: 14px; font-weight: 600; color: #ffffff;`;
const CardDescription = styled.span`font-size: 12px; color: #a0a0a0; margin-top: 2px;`;

const CardControl = styled.div`
  display: flex; align-items: center; gap: 12px;
  @media (max-width: 550px) { width: 100%; justify-content: flex-end; }
`;

// Toggle Switch
const ToggleWrapper = styled.div`
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; user-select: none;
`;
const ToggleStatusLabel = styled.span`
  font-size: 13px;
  color: ${(p) => (p.$checked ? "#ffffff" : "#a0a0a0")};
  font-weight: 500;
`;
const SwitchPill = styled.div`
  width: 40px; height: 20px; border-radius: 10px;
  background: ${(p) => (p.$checked ? "#60cdff" : "rgba(255,255,255,0.1)")};
  border: 1px solid ${(p) => (p.$checked ? "#60cdff" : "rgba(255,255,255,0.3)")};
  position: relative; transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  &::after {
    content: ""; position: absolute;
    top: 2px; left: ${(p) => (p.$checked ? "22px" : "2px")};
    width: 14px; height: 14px; border-radius: 50%;
    background: ${(p) => (p.$checked ? "#000000" : "#ffffff")};
    transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  }
`;

const WinSelect = styled.select`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; cursor: pointer; transition: all 0.15s ease;
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
  option { background: #2b2b30; color: #ffffff; }
`;

const WinInput = styled.input`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; width: 100%; box-sizing: border-box; transition: all 0.15s ease;
  &::placeholder { color: #7a7a80; }
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
`;

const NameInputStyled = styled(WinInput)`
  font-weight: 600;
  ${(p) => {
    const color = p.$textColor || "inherit";
    const isGradient = color.includes("linear");
    const isAnimated = color.includes("270deg");
    if (isGradient) {
      return css`
        background: ${color};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        ${isAnimated && css`background-size: 400% 400%; animation: ${flow} 5s ease infinite;`}
      `;
    }
    return css`color: ${color}; -webkit-background-clip: none; -webkit-text-fill-color: currentcolor;`;
  }}
`;

const WinButton = styled.button`
  background: ${(p) => (p.$primary ? "#60cdff" : p.$danger ? "rgba(196,43,28,0.15)" : "rgba(255,255,255,0.08)")};
  color: ${(p) => (p.$primary ? "#000000" : p.$danger ? "#ff6b6b" : "#ffffff")};
  border: 1px solid ${(p) => (p.$primary ? "#60cdff" : p.$danger ? "rgba(196,43,28,0.5)" : "rgba(255,255,255,0.12)")};
  border-radius: 6px; padding: 6px 16px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover {
    background: ${(p) => (p.$primary ? "#70d4ff" : p.$danger ? "rgba(196,43,28,0.3)" : "rgba(255,255,255,0.15)")};
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

// Avatar
const AvatarGrid = styled.div`
  display: flex; gap: 8px; overflow-x: auto; padding: 4px 0; align-items: center;
  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
`;
const AvatarCard = styled.div`
  width: 54px; height: 54px; min-width: 54px;
  border-radius: 8px; padding: 2px;
  background: ${(p) => (p.$isSelected ? "#60cdff" : "rgba(255,255,255,0.08)")};
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: transform 0.15s ease;
  position: relative;
  &:hover { transform: scale(1.05); }
  img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; }
`;

// Password
const PasswordStrengthBar = styled.div`
  height: 4px; border-radius: 2px;
  background-color: ${(p) => p.$color || "transparent"};
  width: ${(p) => p.$width || "0%"};
  transition: width 0.3s ease, background-color 0.3s ease; margin-top: 4px;
`;
const PasswordStrengthText = styled.span`
  font-size: 11px; color: ${(p) => p.$color || "#a0a0a0"}; font-weight: 500; margin-top: 2px;
`;

// Footer
const WindowFooter = styled.div`
  background: #202024; border-top: 1px solid rgba(255,255,255,0.08);
  padding: 12px 20px; display: flex; align-items: center; justify-content: space-between;
`;
const TermsRow = styled.div`
  display: flex; align-items: center; gap: 8px; font-size: 13px; color: #c5c5c5;
`;
const TermsLink = styled.span`color: #60cdff; text-decoration: underline; cursor: pointer;`;
const FooterButtons = styled.div`display: flex; align-items: center; gap: 10px;`;

// Music components
const MusicScrollList = styled.div`
  max-height: 200px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(96,205,255,0.3); border-radius: 2px; }
`;

const TrackRow = styled.div`
  display: flex; align-items: center; gap: 8px; padding: 6px 8px;
  border-radius: 6px; cursor: pointer;
  background: ${(p) => (p.$active ? "rgba(96,205,255,0.12)" : "transparent")};
  border: 1px solid ${(p) => (p.$active ? "rgba(96,205,255,0.3)" : "transparent")};
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); }
`;

const TrackImg = styled.img`
  width: 32px; height: 32px; border-radius: 4px; object-fit: cover; flex-shrink: 0;
`;

const TrackInfo = styled.div`flex: 1; min-width: 0;`;
const TrackName = styled.div`
  font-size: 12px; font-weight: 500; color: #ffffff;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;
const TrackStatus = styled.div`font-size: 10px; color: #a0a0a0; margin-top: 1px;`;

const EqBar = styled.div`
  width: 2px; background: #60cdff; border-radius: 1px;
  animation: ${eqBarAnim} ${(p) => p.$dur}s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;
`;
const EqualizerContainer = styled.div`
  display: flex; align-items: flex-end; gap: 1.5px; height: 14px;
`;
const Equalizer = () => (
  <EqualizerContainer>
    <EqBar $dur={0.6} $delay={0} />
    <EqBar $dur={0.8} $delay={0.2} />
    <EqBar $dur={0.7} $delay={0.1} />
  </EqualizerContainer>
);

const ProgressBar = styled.input`
  width: 100%; accent-color: #60cdff; cursor: pointer;
  &::-webkit-slider-thumb { background: #60cdff; }
`;

const CustomSlotCard = styled.div`
  background: ${(p) => (p.$hasFile ? "rgba(96,205,255,0.06)" : "rgba(255,255,255,0.03)")};
  border: 1px solid ${(p) => (p.$hasFile ? "rgba(96,205,255,0.2)" : "rgba(255,255,255,0.06)")};
  border-radius: 8px; padding: 10px 12px;
  display: flex; align-items: center; gap: 10px;
`;

const SlotName = styled.div`
  flex: 1; font-size: 12px; color: #c5c5c5;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;
const SlotActions = styled.div`display: flex; gap: 6px; flex-shrink: 0;`;

const IconBtn = styled.button`
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: #ffffff; width: 28px; height: 28px; border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 13px; transition: all 0.15s ease;
  &:hover { background: ${(p) => (p.$danger ? "rgba(196,43,28,0.3)" : "#60cdff")}; color: ${(p) => (p.$danger ? "#ff6b6b" : "#000")}; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`;

// Filter Grid Components
const FilterGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 6px;
`;

const FilterCardBtn = styled.button`
  background: ${(p) => (p.$active ? "rgba(96,205,255,0.15)" : "rgba(255,255,255,0.04)")};
  color: ${(p) => (p.$active ? "#60cdff" : "#e0e0e0")};
  border: 1px solid ${(p) => (p.$active ? "#60cdff" : "rgba(255,255,255,0.1)")};
  border-radius: 6px; padding: 8px 10px; font-size: 12px; font-weight: 500;
  cursor: pointer; transition: all 0.15s ease; text-align: center;
  &:hover { background: rgba(96,205,255,0.1); border-color: rgba(96,205,255,0.3); color: #ffffff; }
`;

const PresetGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 6px;
`;

const CustomPresetCard = styled.div`
  display: flex; align-items: center; gap: 4px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(122,252,255,0.2);
  border-radius: 6px; padding: 4px 6px; animation: ${appearScale} 0.2s ease-out forwards;
`;

// ── Main Component ───────────────────────────────────────────────────────────

const UserSettingsModal = ({
  onClose,
  user,
  availableAvatars = [],
  onUpdate,
  weatherCardLayout = [],
  isDarkMode = false,
  onToggleTheme = () => {},
  onUpdateLayout,
  showUpdateTimer,
  setShowUpdateTimer,
  // Site sections props
  siteSections = [],
  moveSiteSection = () => {},
  resetSiteSections = () => {},
  sectionThemes = {},
  hiddenSections = [],
  onToggleSectionVisibility = () => {},
  onToggleSectionTheme = () => {},
  onResetSectionThemes = () => {},
  // Modes & strategy props
  isRoutingMode = false,
  setIsRoutingMode = () => {},
  loadingStrategy = "eager",
  onSetLoadingStrategy = () => {},
  isStickyBgMode = false,
  onToggleStickyBg = () => {},
  // bg music props from App.jsx
  bgMusicEnabled, setBgMusicEnabled,
  autoMuteBgMusic, setAutoMuteBgMusic,
  bgMusicSource, setBgMusicSource,
  bgMusicVolume, setBgMusicVolume,
  bgMusicSpeed = 1, setBgMusicSpeed = () => {},
  bgMusicMode, setBgMusicMode,
  bgMusicShuffle, setBgMusicShuffle,
  customBgTracks, setCustomBgTracks,
  libraryBgSettings = {}, setLibraryBgSettings = () => {},
  activeBgTrackId, setActiveBgTrackId = () => {},
  onResetBgPosition = () => {},
  sfxVolume = 0.2, setSfxVolume = () => {},
  bgAudioRef, bgAudioRef2,
}) => {
  const isGuest = !user;
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(isGuest ? "personalization" : "account");
  const [isClosing, setIsClosing] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showKatScene, setShowKatScene] = useState(false);

  // Decorator hook
  const {
    isDecoratorMode,
    setIsDecoratorMode,
    changeLog = [],
    undoChange = () => {},
    resetAll = () => {},
    isPersistent = false,
    setIsPersistent = () => {},
  } = useDecorator();

  // Visual filters hook
  const {
    visualConfig,
    setVisualConfig,
    onResetFilters,
    customPresets = [],
    onSavePreset,
    onDeletePreset,
    onUpdatePresetName,
  } = useVisualFilters(user);

  const [newPresetName, setNewPresetName] = useState("");
  const [copiedSectionKey, setCopiedSectionKey] = useState(null);

  // ── Desktop Avatar Upload State ──────────────────────────────────────────
  const desktopAvatarInputRef = useRef(null);
  const [uploadedCustomAvatar, setUploadedCustomAvatar] = useState(() => {
    try {
      if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("data:image")) {
        return user.avatar;
      }
      return localStorage.getItem("custom_desktop_avatar") || null;
    } catch { return null; }
  });

  // ── Google Avatar Persistence ────────────────────────────────────────────
  const [savedGoogleAvatar, setSavedGoogleAvatar] = useState(() => {
    if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("http") && availableAvatars.indexOf(user.avatar) === -1) {
      return user.avatar;
    }
    if (user?.photoURL && typeof user.photoURL === "string" && user.photoURL.startsWith("http")) {
      return user.photoURL;
    }
    try { return localStorage.getItem("saved_google_avatar") || null; } catch { return null; }
  });

  useEffect(() => {
    if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("http") && availableAvatars.indexOf(user.avatar) === -1 && !user.avatar.startsWith("data:")) {
      setSavedGoogleAvatar(user.avatar);
      try { localStorage.setItem("saved_google_avatar", user.avatar); } catch {}
    }
  }, [user, availableAvatars]);

  const handleDesktopAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const todayDate = new Date().toISOString().split("T")[0];
    const lastUploadDate = localStorage.getItem("last_custom_avatar_upload_date");

    if (lastUploadDate === todayDate) {
      alert("Аватарку з пристрою можна змінювати лише 1 раз на день! Спробуйте завтра.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Файл занадто великий! Максимум 5 МБ.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      try {
        localStorage.setItem("custom_desktop_avatar", dataUrl);
        localStorage.setItem("last_custom_avatar_upload_date", todayDate);
      } catch (err) {
        console.error("Localstorage quota error", err);
      }
      setUploadedCustomAvatar(dataUrl);
      updateLivePreview({ avatarIndex: -2 });
      if (!isGuest) {
        onUpdate({ ...user, avatar: dataUrl, lastAvatarUploadDate: todayDate });
      }
    };
    reader.readAsDataURL(file);
  };

  // ── Account Relinking Handlers ───────────────────────────────────────────
  const [relinkEmail, setRelinkEmail] = useState(user?.email || user?.account || "");
  const [relinkStatus, setRelinkStatus] = useState("");
  const [isLinkedGoogle, setIsLinkedGoogle] = useState(() => {
    return Boolean(
      auth.currentUser?.providerData?.some((p) => p.providerId === "google.com") ||
      (user?.email && !user?.password) ||
      savedGoogleAvatar
    );
  });

  const isGoogleAccount = isLinkedGoogle || Boolean(user?.isGoogle || user?.provider === "google");

  const handleRelinkGoogle = async () => {
    if (!auth.currentUser) {
      alert("Потрібно авторизуватись у системі!");
      return;
    }
    try {
      // Fresh provider with select_account so user can pick any Google account
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      let result;
      try {
        // Try to link a (possibly different) Google account
        result = await linkWithPopup(auth.currentUser, provider);
      } catch (linkErr) {
        if (
          linkErr.code === "auth/provider-already-linked" ||
          linkErr.code === "auth/credential-already-in-use" ||
          linkErr.code === "auth/email-already-in-use"
        ) {
          // Already linked — re-authenticate (still shows account picker)
          result = await reauthenticateWithPopup(auth.currentUser, provider);
        } else {
          throw linkErr;
        }
      }

      const newGoogleUser = result.user;
      setIsLinkedGoogle(true);
      const newPhoto = newGoogleUser.photoURL || newGoogleUser.providerData?.[0]?.photoURL;
      if (newPhoto) {
        setSavedGoogleAvatar(newPhoto);
        try { localStorage.setItem("saved_google_avatar", newPhoto); } catch {}
      }
      onUpdate({
        ...user,
        email: newGoogleUser.email || user?.email,
        avatar: newPhoto || user?.avatar,
      });
      alert(`✅ Google акаунт підтверджено: ${newGoogleUser.email}`);
    } catch (err) {
      if (err.code === "auth/cancelled-popup-request" || err.code === "auth/popup-closed-by-user") {
        // user closed popup — silent
      } else if (err.code === "auth/user-mismatch") {
        alert("⚠️ Цей Google акаунт не збігається з поточним профілем!");
      } else {
        alert("Помилка: " + (err.message || err.code));
      }
    }
  };


  const handleUnlinkGoogle = async () => {
    if (!auth.currentUser) return;
    const confirmUnlink = window.confirm("Ви дійсно бажаєте відв'язати Google від цього профілю?\n\nПісля відв'язки для входу буде потрібен пароль.");
    if (!confirmUnlink) return;
    try {
      await unlink(auth.currentUser, "google.com");
      setIsLinkedGoogle(false);
      alert("✅ Google акаунт відв'язано успішно.");
    } catch (err) {
      if (err.code === "auth/no-such-provider") {
        setIsLinkedGoogle(false);
        alert("Google вже не прив'язано до цього профілю.");
      } else {
        alert("Помилка відв'язування: " + (err.message || err.code));
      }
    }
  };

  const [relinkLoading, setRelinkLoading] = useState(false);

  const handleRebindEmail = async () => {
    const trimmed = relinkEmail.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setRelinkStatus("❌ Введіть коректну електронну пошту!");
      return;
    }
    if (trimmed === (user?.email || user?.account)) {
      setRelinkStatus("⚠️ Це вже поточна пошта профілю.");
      return;
    }

    setRelinkLoading(true);
    setRelinkStatus("⏳ Оновлюємо пошту...");

    try {
      const cu = auth.currentUser;
      // Detect if user is Google-authenticated (no email/password provider)
      const isGoogleOnly = cu?.providerData?.length > 0 &&
        cu.providerData.every(p => p.providerId !== "password");

      if (isGoogleOnly || !cu) {
        // For Google accounts — just update the profile display email locally
        // Firebase auth email is managed by Google and can't be changed via verifyBeforeUpdateEmail
        onUpdate({ ...user, email: trimmed, account: trimmed });
        setRelinkStatus(`✅ Пошту профілю оновлено на ${trimmed}. (Google-акаунт: авторизація залишається через Google)`);
      } else {
        // For email/password accounts — send Firebase verification email to new address
        await verifyBeforeUpdateEmail(cu, trimmed);
        onUpdate({ ...user, email: trimmed, account: trimmed });
        setRelinkStatus(`✅ Лист підтвердження надіслано на ${trimmed}. Перевірте вхідні (та спам). Зміна набере чинності після кліку на посилання.`);
      }
    } catch (err) {
      if (err.code === "auth/requires-recent-login") {
        setRelinkStatus("⚠️ Потрібна повторна авторизація — вийдіть та увійдіть знову, потім спробуйте ще раз.");
      } else if (err.code === "auth/email-already-in-use") {
        setRelinkStatus("❌ Ця пошта вже використовується іншим акаунтом!");
      } else if (err.code === "auth/invalid-email") {
        setRelinkStatus("❌ Неправильний формат електронної пошти!");
      } else {
        // Any other error — update locally
        onUpdate({ ...user, email: trimmed, account: trimmed });
        setRelinkStatus(`📝 Пошту профілю оновлено локально: ${trimmed}.`);
      }
    } finally {
      setRelinkLoading(false);
    }
  };


  // Mirror flips
  const [mirrorX, setMirrorX] = useState(false);
  const [mirrorY, setMirrorY] = useState(false);

  useEffect(() => {
    const scaleX = mirrorX ? -1 : 1;
    const scaleY = mirrorY ? -1 : 1;
    if (scaleX === 1 && scaleY === 1) {
      document.documentElement.style.transform = "";
      document.documentElement.style.transformOrigin = "";
    } else {
      document.documentElement.style.transform = `scale(${scaleX}, ${scaleY})`;
      document.documentElement.style.transformOrigin = "center center";
    }
  }, [mirrorX, mirrorY]);

  // Form State
  const initialAvatarIndex = useMemo(() => {
    if (uploadedCustomAvatar && user?.avatar === uploadedCustomAvatar) return -2;
    if (savedGoogleAvatar && user?.avatar === savedGoogleAvatar) return -1;
    if (availableAvatars.indexOf(user?.avatar) !== -1) return availableAvatars.indexOf(user?.avatar);
    if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("http")) return -1;
    if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("data:")) return -2;
    return 0;
  }, [user, availableAvatars, savedGoogleAvatar, uploadedCustomAvatar]);

  const [formData, setFormData] = useState({
    name: user?.firstName || "",
    day: "", month: "", year: "",
    oldPassword: "", newPassword: "", confirmPassword: "",
    avatarIndex: initialAvatarIndex,
    textColor: user?.textColor || "grey",
    borderColor: user?.borderColor || "grey",
    fontFamily: user?.fontFamily || "",
    showSeconds: user?.showSeconds !== false,
    dateDisplayMode: user?.dateDisplayMode || "both",
    hour12: user?.hour12 === true,
    voiceActingMode: user?.voiceActingMode || "malyatko",
    showUpdateTimer: showUpdateTimer !== false,
    newsAutoScroll: user?.newsAutoScroll || false,
    syncMutedNews: user?.syncMutedNews || false,
    gestureSensitivity: user?.gestureSensitivity ?? 1.5,
    fastClicks: user?.fastClicks ?? false,
  });

  const [newsLayout, setNewsLayout] = useState(
    user?.newsLayout || [
      { key: "image", visible: true },
      { key: "title", visible: true },
      { key: "description", visible: true },
    ]
  );

  const initialUser = useMemo(() => ({ ...user }), [user]);

  useEffect(() => {
    if (!user) return;
    let initialY = "", initialM = "", initialD = "";
    if (user.birthDate) {
      if (user.birthDate.includes("-")) [initialY, initialM, initialD] = user.birthDate.split("-");
      else if (user.birthDate.includes(".")) [initialD, initialM, initialY] = user.birthDate.split(".");
    }

    setFormData({
      name: user?.firstName || "",
      day: initialD ? String(parseInt(initialD)) : "",
      month: initialM ? String(parseInt(initialM)) : "",
      year: initialY ? String(parseInt(initialY)) : "",
      oldPassword: "", newPassword: "", confirmPassword: "",
      avatarIndex: initialAvatarIndex,
      textColor: user?.textColor || "grey",
      borderColor: user?.borderColor || "grey",
      fontFamily: user?.fontFamily || "",
      showSeconds: user?.showSeconds !== false,
      dateDisplayMode: user?.dateDisplayMode || "both",
      hour12: user?.hour12 === true,
      voiceActingMode: user?.voiceActingMode || "malyatko",
      showUpdateTimer: showUpdateTimer !== false,
      newsAutoScroll: user?.newsAutoScroll || false,
      syncMutedNews: user?.syncMutedNews || false,
      gestureSensitivity: user?.gestureSensitivity ?? 1.5,
      fastClicks: user?.fastClicks ?? false,
    });
  }, [user, availableAvatars, showUpdateTimer, initialAvatarIndex]);

  const getActiveAvatarUrl = (idx) => {
    if (idx === -2 && uploadedCustomAvatar) return uploadedCustomAvatar;
    if (idx === -1 && savedGoogleAvatar) return savedGoogleAvatar;
    if (idx >= 0 && availableAvatars[idx]) return availableAvatars[idx];
    return user?.avatar || availableAvatars[0];
  };

  const updateLivePreview = (updates) => {
    const newFormData = { ...formData, ...updates };
    setFormData(newFormData);
    if (updates.hasOwnProperty("showUpdateTimer")) setShowUpdateTimer(updates.showUpdateTimer);
    if (!user) return;

    const newAvatar = getActiveAvatarUrl(newFormData.avatarIndex);

    onUpdate({
      ...user,
      firstName: newFormData.name,
      avatar: newAvatar,
      birthDate: `${newFormData.year}-${newFormData.month.toString().padStart(2, "0")}-${newFormData.day.toString().padStart(2, "0")}`,
      textColor: newFormData.textColor,
      borderColor: newFormData.borderColor,
      fontFamily: newFormData.fontFamily,
      showSeconds: newFormData.showSeconds,
      dateDisplayMode: newFormData.dateDisplayMode,
      hour12: newFormData.hour12,
      voiceActingMode: newFormData.voiceActingMode,
      showUpdateTimer: newFormData.showUpdateTimer,
      newsLayout: updates.newsLayout || newsLayout,
      newsAutoScroll: updates.newsAutoScroll ?? newFormData.newsAutoScroll,
      syncMutedNews: updates.syncMutedNews ?? newFormData.syncMutedNews,
      gestureSensitivity: updates.gestureSensitivity ?? newFormData.gestureSensitivity,
      fastClicks: updates.fastClicks ?? newFormData.fastClicks,
    });
  };

  const finishClosing = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 250);
  };

  const handleCancel = () => {
    if (user) onUpdate(initialUser);
    finishClosing();
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1909 + 1 }, (_, i) => currentYear - i);

  const isInvalidDate = useMemo(() => {
    if (!formData.day || !formData.month || !formData.year) return false;
    const date = new Date(formData.year, formData.month - 1, formData.day);
    return (
      date.getFullYear() !== parseInt(formData.year) ||
      date.getMonth() !== parseInt(formData.month) - 1 ||
      date.getDate() !== parseInt(formData.day)
    );
  }, [formData.day, formData.month, formData.year]);

  const formattedBirthDate = useMemo(() => {
    const day = formData.day ? String(formData.day).padStart(2, "0") : "";
    const month = formData.month ? String(formData.month).padStart(2, "0") : "";
    const year = formData.year ? String(formData.year) : "";
    if (!day || !month || !year || isInvalidDate) return "";
    return `${day}.${month}.${year}`;
  }, [formData.day, formData.month, formData.year, isInvalidDate]);

  const calculateAge = (d, m, y) => {
    if (!d || !m || !y) return null;
    const today = new Date();
    const birth = new Date(y, m - 1, d);
    if (isNaN(birth.getTime())) return null;
    let age = today.getFullYear() - birth.getFullYear();
    const mDiff = today.getMonth() - birth.getMonth();
    if (mDiff < 0 || (mDiff === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };
  const currentAge = calculateAge(formData.day, formData.month, formData.year);

  const getPasswordStrength = (password) => {
    if (!password) return { width: "0%", color: "transparent", label: "" };
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) || /[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 2) return { width: "33%", color: "#ff4d4d", label: "Слабкий" };
    if (score <= 4) return { width: "66%", color: "#ffb36c", label: "Середній" };
    return { width: "100%", color: "#4caf50", label: "Надійний" };
  };
  const pwStrength = getPasswordStrength(formData.newPassword);

  const handleSubmit = () => {
    if (isGuest) { finishClosing(); return; }
    if (isInvalidDate) { alert("Введена некоректна дата!"); return; }
    if (!formData.day || !formData.month || !formData.year) { alert("Будь ласка, виберіть дату народження!"); return; }
    if (formData.newPassword) {
      if (formData.newPassword !== formData.confirmPassword) { alert("Нові паролі не збігаються!"); return; }
      if (formData.newPassword.length < 6) { alert("Пароль занадто короткий!"); return; }
    }
    const finalAvatar = getActiveAvatarUrl(formData.avatarIndex);

    onUpdate({
      account: user?.account || formData.name,
      firstName: formData.name,
      avatar: finalAvatar,
      birthDate: `${formData.year}-${formData.month.toString().padStart(2, "0")}-${formData.day.toString().padStart(2, "0")}`,
      textColor: formData.textColor,
      borderColor: formData.borderColor,
      fontFamily: formData.fontFamily,
      showSeconds: formData.showSeconds,
      dateDisplayMode: formData.dateDisplayMode,
      hour12: formData.hour12,
      voiceActingMode: formData.voiceActingMode,
      showUpdateTimer: formData.showUpdateTimer,
      newsLayout,
      newsAutoScroll: formData.newsAutoScroll,
      syncMutedNews: formData.syncMutedNews,
      gestureSensitivity: formData.gestureSensitivity,
      fastClicks: formData.fastClicks,
      ...(formData.newPassword ? { oldPassword: formData.oldPassword, newPassword: formData.newPassword } : {}),
    });
    finishClosing();
  };

  const toggleNewsBlockVisibility = (key) => {
    if (key === "image") return;
    const newLayout = newsLayout.map((b) => b.key === key ? { ...b, visible: !b.visible } : b);
    setNewsLayout(newLayout);
    updateLivePreview({ newsLayout: newLayout });
  };

  const buildSectionLink = (sectionPath) => {
    if (typeof window === "undefined") return "";
    const normalizedPath = sectionPath ? `/${sectionPath}`.replace(/\/+/g, "/") : "/";
    const basePath = `${window.location.origin}${window.location.pathname}`.replace(/\/$/, "");
    return `${basePath}#${normalizedPath}`;
  };

  const handleCopySectionLink = async (sectionKey, sectionPath) => {
    const link = buildSectionLink(sectionPath || sectionKey);
    if (!link) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = link; document.body.appendChild(tempInput);
        tempInput.select(); document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      setCopiedSectionKey(sectionKey);
      setTimeout(() => setCopiedSectionKey(null), 1500);
    } catch (err) {
      console.error("Copy link failed", err);
    }
  };

  // ── Music tab state ──────────────────────────────────────────────────────
  const activeSlotRef = useRef(null);
  const [libSearch, setLibSearch] = useState("");
  const [musicTab, setMusicTab] = useState("library");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState({});
  const [softDeletedIds, setSoftDeletedIds] = useState(() => getStoredSoftDeletedIds());
  const [downloadedTracks, setDownloadedTracks] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem("bg_music_downloaded_tracks") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    window.localStorage.setItem("bg_music_downloaded_tracks", JSON.stringify(downloadedTracks));
    persistSoftDeletedIds(softDeletedIds);
  }, [downloadedTracks, softDeletedIds]);

  useEffect(() => {
    let id;
    const tick = () => {
      const a1 = bgAudioRef?.current, a2 = bgAudioRef2?.current;
      let a = a1;
      if (a1 && a2) { if (!a2.paused && a2.volume >= a1.volume) a = a2; }
      if (a) { setCurrentTime(a.currentTime || 0); setDuration(a.duration || 0); }
      id = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(id);
  }, [bgAudioRef, bgAudioRef2]);

  const getTrackStatus = (track) => {
    const isBase = isBaseBgTrack(track.file);
    const downloaded = isBase || downloadedTracks.some((d) => d.file === track.file && String(d.id) === String(track.id));
    const softDeleted = softDeletedIds.includes(String(track.id));
    return { isBase, downloaded: downloaded && !softDeleted, softDeleted, available: isBase || (downloaded && !softDeleted) };
  };

  const ensureTrackInLibrary = (trackId, file) => {
    setDownloadedTracks((prev) => {
      if (prev.some((e) => String(e.id) === String(trackId) && e.file === file)) return prev;
      return [...prev, { id: trackId, file, name: "" }];
    });
    setSoftDeletedIds((prev) => prev.filter((id) => String(id) !== String(trackId)));
  };

  const handleCachedDownload = async (track) => {
    if (!("caches" in window)) {
      setBgMusicSource(track.file); setActiveBgTrackId(track.id);
      ensureTrackInLibrary(track.id, track.file); return;
    }
    try {
      const cache = await caches.open(BG_CACHE_NAME);
      const cached = await cache.match(track.file);
      if (cached) {
        setBgMusicSource(track.file); setActiveBgTrackId(track.id);
        ensureTrackInLibrary(track.id, track.file);
        setDownloadProgress((p) => ({ ...p, [track.id]: 100 }));
        setSoftDeletedIds((p) => p.filter((id) => String(id) !== String(track.id)));
        return;
      }
      setDownloadProgress((p) => ({ ...p, [track.id]: 0 }));
      const response = await fetch(track.file);
      const reader = response.body?.getReader();
      const contentLength = Number(response.headers.get("Content-Length")) || 0;
      let received = 0; const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value); received += value.length;
        if (contentLength > 0) setDownloadProgress((p) => ({ ...p, [track.id]: Math.min(100, Math.round((received / contentLength) * 100)) }));
      }
      const blob = new Blob(chunks);
      await cache.put(track.file, new Response(blob, { headers: { "Content-Type": response.headers.get("Content-Type") || "audio/mpeg" } }));
      setBgMusicSource(track.file); setActiveBgTrackId(track.id);
      ensureTrackInLibrary(track.id, track.file);
      setDownloadProgress((p) => ({ ...p, [track.id]: 100 }));
    } catch {
      setBgMusicSource(track.file); setActiveBgTrackId(track.id);
      ensureTrackInLibrary(track.id, track.file);
    }
  };

  const libraryTracks = useMemo(() => {
    let tracks = songAiKnowledge.map((s) => {
      const file = assetMap[s.audio];
      const status = getTrackStatus({ id: s.id, file, text: s.text, author: s.author });
      return { id: s.id, name: s.text ? `${s.text} — ${s.author}` : s.author, file, image: assetMap[s.image], ...status };
    });
    if (libSearch) tracks = tracks.filter((t) => t.name.toLowerCase().includes(libSearch.toLowerCase()));
    const deduped = tracks.filter((t) => !BASE_BG_TRACKS.some((b) => b.id === t.id));
    return [...BASE_BG_TRACKS.map((t) => ({ id: t.id, name: t.name, file: t.file, image: null, isBase: true, downloaded: true, softDeleted: false, available: true })), ...deduped].slice(0, 28);
  }, [libSearch, downloadedTracks, softDeletedIds, bgMusicSource]);

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || activeSlotRef.current === null) return;
    if (file.size > 15 * 1024 * 1024) { alert("Файл занадто великий! Максимум 15 МБ."); return; }
    const audio = new Audio(URL.createObjectURL(file));
    audio.onloadedmetadata = () => {
      if (audio.duration > 300) { alert("Мелодія занадто довга! Максимум 5 хвилин."); URL.revokeObjectURL(audio.src); return; }
      const updated = Array.from({ length: 7 }, (_, i) => (customBgTracks || [])[i] || null);
      updated[activeSlotRef.current] = { name: file.name.split(".")[0].substring(0, 30), file, repeats: 1, enabled: true };
      setCustomBgTracks(updated); setBgMusicSource(file); setActiveBgTrackId(null);
      URL.revokeObjectURL(audio.src);
    };
  };

  const handleRemoveCustomTrack = (idx) => {
    const updated = Array.from({ length: 7 }, (_, i) => (customBgTracks || [])[i] || null);
    updated[idx] = null; setCustomBgTracks(updated);
  };

  const seek = (e) => {
    const time = parseFloat(e.target.value);
    const a1 = bgAudioRef?.current, a2 = bgAudioRef2?.current;
    let a = a1;
    if (a1 && a2 && !a2.paused && a2.volume >= a1.volume) a = a2;
    if (a) { a.currentTime = time; setCurrentTime(time); }
  };

  const applySpeedChange = (speedVal) => {
    setBgMusicSpeed(speedVal);
    if (bgAudioRef?.current) bgAudioRef.current.playbackRate = speedVal;
    if (bgAudioRef2?.current) bgAudioRef2.current.playbackRate = speedVal;
  };

  // ── Nav config ───────────────────────────────────────────────────────────
  const navItems = [
    { key: "account", icon: <FiUser />, label: "Обліковий запис", locked: isGuest },
    { key: "dateTime", icon: <FiClock />, label: "Час та дата" },
    { key: "security", icon: <FiShield />, label: "Безпека", locked: isGuest },
    { key: "personalization", icon: <FiSliders />, label: "Персоналізація" },
    { key: "siteSections", icon: <FiCompass />, label: "Секції сайту" },
    { key: "modes", icon: <FiZap />, label: "Режими сайту" },
    { key: "filters", icon: <FiEye />, label: "Візуальні фільтри" },
    { key: "bgMusic", icon: <FiMusic />, label: "Фонова музика" },
    { key: "news", icon: <FiGlobe />, label: "Новини" },
  ];

  return (
    <>
      {showKatScene && <KatSceneModal onClose={() => setShowKatScene(false)} />}
      <ModalOverlay $isClosing={isClosing} onClick={finishClosing}>
        <ModalWindow $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>

          {/* ── Header ─────────────────────────────────────────────────── */}
          <WindowHeader>
            <HeaderLeft>
              <UserBadge>
                {!isGuest && (
                  <UserAvatarThumb
                    src={getActiveAvatarUrl(formData.avatarIndex)}
                    alt="User avatar"
                  />
                )}
                <div style={{ fontSize: "20px", opacity: 0.5, display: isGuest ? "flex" : "none" }}>
                  <FiUser />
                </div>
                <div style={{ padding: isGuest ? "0 4px" : 0 }}>
                  <HeaderTitle>Параметри</HeaderTitle>
                  <HeaderSub>
                    {isGuest ? "Гість • Увійдіть для повного доступу" : (user?.email || user?.account || "Обліковий запис")}
                  </HeaderSub>
                </div>
              </UserBadge>
            </HeaderLeft>
            <HeaderActions>
              {!isGuest && (
                <HeaderButton onClick={() => setShowKatScene(true)}>
                  <FiFilm /> Титри
                </HeaderButton>
              )}
              <CloseButton onClick={handleCancel}><FiX /></CloseButton>
            </HeaderActions>
          </WindowHeader>

          {/* ── Body ───────────────────────────────────────────────────── */}
          <WindowBody>
            <Sidebar>
              {navItems.map(({ key, icon, label, locked }) => (
                <NavItem
                  key={key}
                  $active={activeTab === key}
                  $locked={!!locked}
                  onClick={() => !locked && setActiveTab(key)}
                >
                  <NavIconBox $active={activeTab === key} $locked={!!locked}>
                    {icon}
                  </NavIconBox>
                  {label}
                  {locked && <LockBadge>🔒</LockBadge>}
                </NavItem>
              ))}
            </Sidebar>

            <MainContent>

              {/* ── ACCOUNT TAB ─────────────────────────────────────── */}
              {activeTab === "account" && !isGuest && (
                <CardGroup>
                  <SectionHeaderTitle><FiUser /> Обліковий запис</SectionHeaderTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiUser /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Ім'я користувача</CardTitle>
                        <CardDescription>Як вас називатимуть в інтерфейсі</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl style={{ minWidth: "220px" }}>
                      <NameInputStyled
                        value={formData.name}
                        $textColor={formData.textColor}
                        onChange={(e) => updateLivePreview({ name: e.target.value })}
                        placeholder="Ваше ім'я"
                      />
                    </CardControl>
                  </Card>

                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox><FiEye /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Аватарка профілю</CardTitle>
                        <CardDescription>Оберіть пресет або завантажте з комп'ютера (1 раз на день)</CardDescription>
                      </CardInfo>
                    </CardLeft>

                    <AvatarGrid>
                      {/* Presets */}
                      {availableAvatars.map((img, i) => (
                        <AvatarCard key={i} $isSelected={formData.avatarIndex === i} onClick={() => updateLivePreview({ avatarIndex: i })}>
                          <img src={img} alt={`avatar-${i}`} />
                        </AvatarCard>
                      ))}

                      {/* Google Avatar option (always preserved!) */}
                      {savedGoogleAvatar && (
                        <AvatarCard
                          $isSelected={formData.avatarIndex === -1}
                          onClick={() => {
                            updateLivePreview({ avatarIndex: -1 });
                            if (!isGuest) onUpdate({ ...user, avatar: savedGoogleAvatar });
                          }}
                          title="Google аватарка"
                        >
                          <img src={savedGoogleAvatar} alt="Google avatar" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = availableAvatars[0]; }} />
                        </AvatarCard>
                      )}

                      {/* Custom Uploaded Desktop Avatar Option */}
                      {uploadedCustomAvatar && (
                        <AvatarCard
                          $isSelected={formData.avatarIndex === -2}
                          onClick={() => {
                            updateLivePreview({ avatarIndex: -2 });
                            if (!isGuest) onUpdate({ ...user, avatar: uploadedCustomAvatar });
                          }}
                          title="Аватарка з комп'ютера"
                        >
                          <img src={uploadedCustomAvatar} alt="Desktop Custom Avatar" />
                        </AvatarCard>
                      )}

                      {/* Tile to upload from Desktop */}
                      <AvatarCard
                        onClick={() => desktopAvatarInputRef.current?.click()}
                        title="Завантажити аватарку з комп'ютера (ліміт: 1 раз на день)"
                        style={{
                          background: "rgba(96, 205, 255, 0.12)",
                          border: "1px dashed #60cdff",
                          flexDirection: "column",
                          gap: "2px",
                          color: "#60cdff",
                        }}
                      >
                        <FiUpload style={{ fontSize: "16px" }} />
                        <span style={{ fontSize: "8px", fontWeight: "700", textTransform: "uppercase" }}>З пристрою</span>
                      </AvatarCard>
                    </AvatarGrid>

                    <input
                      ref={desktopAvatarInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleDesktopAvatarUpload}
                    />

                    <div style={{ fontSize: "11px", color: "#a0a0a0", marginTop: "4px" }}>
                      ℹ️ Завантаження з комп'ютера обмежено <b>1 раз на день</b>. Google-аватарка завжди зберігається у списку для повернення.
                    </div>
                  </CardExpanded>
                </CardGroup>
              )}

              {/* ── DATE & TIME TAB ─────────────────────────────────── */}
              {activeTab === "dateTime" && (
                <CardGroup>
                  <SectionHeaderTitle><FiClock /> Час та дата</SectionHeaderTitle>

                  {!isGuest && (
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox><FiCalendar /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Дата народження</CardTitle>
                          <CardDescription>
                            {formattedBirthDate
                              ? `${formattedBirthDate} ${currentAge !== null ? `(${currentAge} років)` : ""}`
                              : "Укажіть день, місяць та рік"}
                          </CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                        <WinSelect value={formData.day} onChange={(e) => updateLivePreview({ day: e.target.value })}>
                          <option value="">День</option>
                          {days.map((d) => <option key={d} value={d}>{d}</option>)}
                        </WinSelect>
                        <WinSelect value={formData.month} onChange={(e) => updateLivePreview({ month: e.target.value })}>
                          <option value="">Місяць</option>
                          {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                        </WinSelect>
                        <WinSelect value={formData.year} onChange={(e) => updateLivePreview({ year: e.target.value })}>
                          <option value="">Рік</option>
                          {years.map((y) => <option key={y} value={y}>{y}</option>)}
                        </WinSelect>
                      </div>
                      {isInvalidDate && <span style={{ color: "#ff4d4d", fontSize: "12px" }}>Вказана дата некоректна!</span>}
                    </CardExpanded>
                  )}

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiClock /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Відображення секунд</CardTitle>
                        <CardDescription>Показувати секунди (17:23:17)</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => updateLivePreview({ showSeconds: !formData.showSeconds })}>
                        <ToggleStatusLabel $checked={formData.showSeconds}>{formData.showSeconds ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                        <SwitchPill $checked={formData.showSeconds} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiClock /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Формат часу</CardTitle>
                        <CardDescription>24-годинний або 12-годинний (AM/PM)</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinSelect value={formData.hour12 ? "12" : "24"} onChange={(e) => updateLivePreview({ hour12: e.target.value === "12" })}>
                        <option value="24">24-годинний</option>
                        <option value="12">12-годинний (AM/PM)</option>
                      </WinSelect>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiCalendar /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Режим відображення</CardTitle>
                        <CardDescription>Час, дата або обидва разом</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinSelect value={formData.dateDisplayMode} onChange={(e) => updateLivePreview({ dateDisplayMode: e.target.value })}>
                        <option value="both">Час та Дата разом</option>
                        <option value="time">Тільки Час</option>
                        <option value="date">Тільки Дата</option>
                      </WinSelect>
                    </CardControl>
                  </Card>
                </CardGroup>
              )}

              {/* ── SECURITY TAB ────────────────────────────────────── */}
              {activeTab === "security" && !isGuest && (
                <CardGroup>
                  <SectionHeaderTitle><FiShield /> Безпека та переприв'язка акаунту</SectionHeaderTitle>

                  {/* Account Relinking & Binding Controls */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#60cdff"><FiRefreshCw /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Керування прив'язками профілю</CardTitle>
                        <CardDescription>Зміна прив'язаного Google-акаунту або пошти</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "4px" }}>
                      {/* Google Binding */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "13px", fontWeight: "600", color: "#ffffff" }}>Google Акаунт</span>
                          <span style={{ fontSize: "11px", color: isLinkedGoogle ? "#60cdff" : "#a0a0a0" }}>
                            {isLinkedGoogle ? `✓ Прив'язано (${user?.email || "Google"})` : "Не прив'язано"}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <WinButton type="button" onClick={handleRelinkGoogle}>
                            {isLinkedGoogle ? "Переприв'язати Google" : "Прив'язати Google"}
                          </WinButton>
                          {isLinkedGoogle && (
                            <WinButton type="button" $danger onClick={handleUnlinkGoogle}>
                              Відв'язати
                            </WinButton>
                          )}
                        </div>
                      </div>

                      {/* Email Re-binding */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "10px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#ffffff" }}>Зміна прив'язаної пошти</span>
                        <span style={{ fontSize: "11px", color: "#888" }}>
                          На нову пошту буде надіслано лист підтвердження. Зміна набере чинності після кліку на посилання у листі.
                        </span>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <WinInput
                            type="email"
                            placeholder="Введіть нову пошту..."
                            value={relinkEmail}
                            onChange={(e) => { setRelinkEmail(e.target.value); setRelinkStatus(""); }}
                            disabled={relinkLoading}
                          />
                          <WinButton type="button" $primary onClick={handleRebindEmail} style={{ whiteSpace: "nowrap" }} disabled={relinkLoading}>
                            {relinkLoading ? "⏳..." : "Надіслати лист"}
                          </WinButton>
                        </div>
                        {relinkStatus && (
                          <span style={{
                            fontSize: "11px",
                            color: relinkStatus.startsWith("✅") ? "#4caf50"
                              : relinkStatus.startsWith("❌") ? "#f44336"
                              : relinkStatus.startsWith("⚠️") ? "#ffb300"
                              : relinkStatus.startsWith("📝") ? "#60cdff"
                              : "#a0a0a0",
                            lineHeight: "1.5"
                          }}>{relinkStatus}</span>
                        )}
                      </div>
                    </div>
                  </CardExpanded>

                  {/* Password Change */}
                  {!isGoogleAccount && (
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox><FiLock /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Зміна пароля</CardTitle>
                          <CardDescription>Введіть новий пароль для профілю</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                        <WinInput type="password" placeholder="Новий пароль" value={formData.newPassword}
                          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })} />
                        {formData.newPassword && (
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <PasswordStrengthBar $width={pwStrength.width} $color={pwStrength.color} />
                            <PasswordStrengthText $color={pwStrength.color}>Надійність: {pwStrength.label}</PasswordStrengthText>
                          </div>
                        )}
                        <WinInput type="password" placeholder="Підтвердіть новий пароль" value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                      </div>
                    </CardExpanded>
                  )}
                </CardGroup>
              )}

              {/* ── PERSONALIZATION TAB ─────────────────────────────── */}
              {activeTab === "personalization" && (
                <CardGroup>
                  <SectionHeaderTitle><FiSliders /> Персоналізація та інтерфейс</SectionHeaderTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiClock /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Таймер оновлення погоди</CardTitle>
                        <CardDescription>Показувати відлік до наступного оновлення даних</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => updateLivePreview({ showUpdateTimer: !formData.showUpdateTimer })}>
                        <ToggleStatusLabel $checked={formData.showUpdateTimer}>{formData.showUpdateTimer ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                        <SwitchPill $checked={formData.showUpdateTimer} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiSliders /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Власний шрифт</CardTitle>
                        <CardDescription>Назва шрифту Google Fonts (напр. Roboto)</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl style={{ minWidth: "200px" }}>
                      <WinInput placeholder="Назва шрифту" value={formData.fontFamily} onChange={(e) => updateLivePreview({ fontFamily: e.target.value })} />
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiSmartphone /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Чутливість жестів</CardTitle>
                        <CardDescription>Свайпи та слайдери: {formData.gestureSensitivity}x</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl style={{ minWidth: "160px" }}>
                      <ProgressBar type="range" min="0.5" max="3" step="0.1" value={formData.gestureSensitivity}
                        onChange={(e) => updateLivePreview({ gestureSensitivity: parseFloat(e.target.value) })} />
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox><FiSliders /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Швидкий відгук на кліки</CardTitle>
                        <CardDescription>Миттєвий відгук без затримок</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => updateLivePreview({ fastClicks: !formData.fastClicks })}>
                        <ToggleStatusLabel $checked={formData.fastClicks}>{formData.fastClicks ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                        <SwitchPill $checked={formData.fastClicks} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox><FiEye /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Дзеркальність сайту</CardTitle>
                        <CardDescription>Скидається після перезавантаження сторінки</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "13px", color: "#e0e0e0" }}>По горизонталі (ліво ↔ право)</span>
                        <ToggleWrapper onClick={() => setMirrorX(!mirrorX)}>
                          <ToggleStatusLabel $checked={mirrorX}>{mirrorX ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                          <SwitchPill $checked={mirrorX} />
                        </ToggleWrapper>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "13px", color: "#e0e0e0" }}>По вертикалі (верх ↕ низ)</span>
                        <ToggleWrapper onClick={() => setMirrorY(!mirrorY)}>
                          <ToggleStatusLabel $checked={mirrorY}>{mirrorY ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                          <SwitchPill $checked={mirrorY} />
                        </ToggleWrapper>
                      </div>
                      {(mirrorX || mirrorY) && (
                        <WinButton $danger style={{ alignSelf: "flex-start", marginTop: "4px" }} onClick={() => { setMirrorX(false); setMirrorY(false); }}>
                          Скинути дзеркальність
                        </WinButton>
                      )}
                    </div>
                  </CardExpanded>
                </CardGroup>
              )}

              {/* ── SITE SECTIONS TAB ─────────────────────────────────── */}
              {activeTab === "siteSections" && (
                <CardGroup>
                  <SectionHeaderTitle><FiCompass /> Навігація та секції сайту</SectionHeaderTitle>

                  {siteSections && siteSections.map((sec, idx) => {
                    const isHidden = hiddenSections?.includes(sec.key);
                    const isDarkTheme = sectionThemes?.[sec.key] ?? isDarkMode;
                    const link = buildSectionLink(sec.path || sec.key);

                    return (
                      <CardExpanded key={sec.key}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                          <CardLeft>
                            <CardIconBox $color="#60cdff"><FiLayers /></CardIconBox>
                            <CardInfo>
                              <CardTitle>{sec.label}</CardTitle>
                              <CardDescription style={{ fontSize: "11px", wordBreak: "break-all" }}>{link}</CardDescription>
                            </CardInfo>
                          </CardLeft>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            {/* Copy Link */}
                            <WinButton onClick={() => handleCopySectionLink(sec.key, sec.path)} style={{ padding: "4px 8px", fontSize: "12px" }}>
                              {copiedSectionKey === sec.key ? <><FiCheck style={{ color: "#4caf50" }} /> Скопійовано</> : <><FiCopy /> Посилання</>}
                            </WinButton>

                            {/* Theme Toggle */}
                            <IconBtn onClick={() => onToggleSectionTheme(sec.key)} title="Змінити тему секції">
                              {isDarkTheme ? <BsMoonStarsFill style={{ fontSize: "13px" }} /> : <FaSunIcon style={{ fontSize: "13px", color: "#ffb36c" }} />}
                            </IconBtn>

                            {/* Visibility Toggle */}
                            <IconBtn
                              onClick={() => onToggleSectionVisibility(sec.key)}
                              disabled={!isHidden && siteSections.length - (hiddenSections?.length || 0) <= 2}
                              title={isHidden ? "Показати секцію" : "Приховати секцію"}
                            >
                              {isHidden ? <FaEyeSlash style={{ color: "#ff6b6b" }} /> : <FaEye style={{ color: "#60cdff" }} />}
                            </IconBtn>

                            {/* Move Up/Down */}
                            {sec.key !== "hero" && (
                              <>
                                <IconBtn disabled={idx <= 1} onClick={() => moveSiteSection(idx, -1)} title="Підняти">
                                  <FiChevronUp />
                                </IconBtn>
                                <IconBtn disabled={idx === siteSections.length - 1} onClick={() => moveSiteSection(idx, 1)} title="Опустити">
                                  <FiChevronDown />
                                </IconBtn>
                              </>
                            )}
                          </div>
                        </div>
                      </CardExpanded>
                    );
                  })}

                  <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                    <WinButton onClick={onResetSectionThemes} style={{ flex: 1 }}>
                      Скинути теми секцій
                    </WinButton>
                    <WinButton $danger onClick={resetSiteSections} style={{ flex: 1 }}>
                      Скинути порядок секцій
                    </WinButton>
                  </div>
                </CardGroup>
              )}

              {/* ── MODES & LOADING TAB ───────────────────────────────── */}
              {activeTab === "modes" && (
                <CardGroup>
                  <SectionHeaderTitle><FiZap /> Режими та швидкість сайту</SectionHeaderTitle>

                  {/* Routing mode */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#ffb36c">{isRoutingMode ? <FaRocket /> : <FaAnchorCircleCheck />}</CardIconBox>
                      <CardInfo>
                        <CardTitle>{isRoutingMode ? "Режим Маршрутизації (Зміна URL)" : "Режим Навігації (Плавний скрол)"}</CardTitle>
                        <CardDescription>
                          {isRoutingMode ? "Переходи змінюють посилання сторінки" : "Переходи плавно прокручують екрани"}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => setIsRoutingMode(!isRoutingMode)}>
                        <ToggleStatusLabel $checked={isRoutingMode}>{isRoutingMode ? "Маршрути" : "Скрол"}</ToggleStatusLabel>
                        <SwitchPill $checked={isRoutingMode} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Theme Mode */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#ffb36c">{isDarkMode ? <BsMoonStarsFill /> : <FaSunIcon style={{ color: "#ffb36c" }} />}</CardIconBox>
                      <CardInfo>
                        <CardTitle>Головна тема сайту</CardTitle>
                        <CardDescription>{isDarkMode ? "Темна тема активна" : "Світла тема активна"}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton onClick={onToggleTheme}>
                        {isDarkMode ? <><BsMoonStarsFill /> Темна</> : <><FaSunIcon style={{ color: "#ffb36c" }} /> Світла</>}
                      </WinButton>
                    </CardControl>
                  </Card>

                  {/* Sticky BG */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#60cdff"><FiLayers /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Липкий фоновий ефект</CardTitle>
                        <CardDescription>Закріплення заднього плану при скролі</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={onToggleStickyBg}>
                        <ToggleStatusLabel $checked={isStickyBgMode}>{isStickyBgMode ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                        <SwitchPill $checked={isStickyBgMode} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Loading Strategy */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#60cdff"><FiZap /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Стратегія завантаження ресурсів</CardTitle>
                        <CardDescription>Оптимізація швидкості запуску та економія трафіку</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                      {[
                        { key: "eager", label: "Повний", desc: "Завантажує все відразу при старті" },
                        { key: "delayed", label: "Оптимальний", desc: "Завантажує важкі модулі через 8 сек" },
                        { key: "lazy", label: "Економний", desc: "Завантажує тільки за потребою" },
                      ].map(({ key, label }) => (
                        <WinButton
                          key={key}
                          onClick={() => onSetLoadingStrategy(key)}
                          style={{
                            flex: 1, minWidth: "120px",
                            background: loadingStrategy === key ? "rgba(96,205,255,0.15)" : undefined,
                            borderColor: loadingStrategy === key ? "#60cdff" : undefined,
                          }}
                        >
                          {label}
                        </WinButton>
                      ))}
                    </div>
                  </CardExpanded>

                  {/* Decorator Mode */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#a78bfa"><GiPalette /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Режим Декоратора (CSS Редактор)</CardTitle>
                        <CardDescription>Візуальне редагування стилів елементів сторінки</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "13px", color: "#e0e0e0" }}>Увімкнути режим Декоратора</span>
                        <ToggleWrapper onClick={() => setIsDecoratorMode(!isDecoratorMode)}>
                          <ToggleStatusLabel $checked={isDecoratorMode}>{isDecoratorMode ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                          <SwitchPill $checked={isDecoratorMode} />
                        </ToggleWrapper>
                      </div>

                      {isDecoratorMode && (
                        <>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "13px", color: "#e0e0e0" }}>Зберігати зміни після оновлення</span>
                            <ToggleWrapper onClick={() => setIsPersistent(!isPersistent)}>
                              <ToggleStatusLabel $checked={isPersistent}>{isPersistent ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                              <SwitchPill $checked={isPersistent} />
                            </ToggleWrapper>
                          </div>

                          <div style={{ fontSize: "12px", fontWeight: "600", color: "#60cdff", marginTop: "4px" }}>
                            Журнал змін ({changeLog.length})
                          </div>

                          {changeLog.length > 0 ? (
                            <div style={{ maxHeight: "140px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "4px" }}>
                              {changeLog.map((log) => (
                                <div key={log.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.04)", padding: "4px 8px", borderRadius: "4px", fontSize: "11px" }}>
                                  <span><b style={{ color: "#60cdff" }}>{log.tagName}</b> {log.property}: {log.newValue}</span>
                                  <WinButton style={{ padding: "2px 6px", fontSize: "10px" }} onClick={() => undoChange(log.id)}>Відмінити</WinButton>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span style={{ fontSize: "11px", color: "#777", fontStyle: "italic" }}>Змін ще немає</span>
                          )}

                          {changeLog.length > 0 && (
                            <WinButton $danger onClick={resetAll} style={{ alignSelf: "flex-start" }}>
                              Скинути всі зміни Декоратора
                            </WinButton>
                          )}
                        </>
                      )}
                    </div>
                  </CardExpanded>
                </CardGroup>
              )}

              {/* ── VISUAL FILTERS TAB ─────────────────────────────────── */}
              {activeTab === "filters" && (
                <CardGroup>
                  <SectionHeaderTitle><FiEye /> Візуальні фільтри та пресети</SectionHeaderTitle>

                  {/* Dark intensity slider */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#ffb36c"><FiMoon /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Зменшення яскравості / Затемнення</CardTitle>
                        <CardDescription>Інтенсивність: {visualConfig.darkIntensity || 0}%</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl style={{ minWidth: "180px" }}>
                      <ProgressBar
                        type="range" min="0" max="100"
                        value={visualConfig.darkIntensity || 0}
                        onChange={(e) => setVisualConfig((p) => ({ ...p, darkIntensity: Number(e.target.value) }))}
                      />
                    </CardControl>
                  </Card>

                  {/* Filters grid */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#ffb36c"><FiEye /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Кольорові та зорові фільтри</CardTitle>
                        <CardDescription>Оберіть ефект для оформлення сторінки</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <FilterGrid style={{ marginTop: "4px" }}>
                      {FILTERS.map((f) => (
                        <FilterCardBtn
                          key={f.id}
                          $active={visualConfig.filterType === f.id}
                          onClick={() => setVisualConfig((p) => ({ ...p, filterType: f.id }))}
                        >
                          {f.label}
                        </FilterCardBtn>
                      ))}
                    </FilterGrid>
                  </CardExpanded>

                  {/* Filter Intensity */}
                  {visualConfig.filterType !== "none" && (
                    <Card>
                      <CardLeft>
                        <CardIconBox $color="#ffb36c"><FiSlidersIcon /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Сила ефекту фільтра</CardTitle>
                          <CardDescription>Інтенсивність: {visualConfig.filterIntensity || 50}%</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <CardControl style={{ minWidth: "180px" }}>
                        <ProgressBar
                          type="range" min="0" max="100"
                          value={visualConfig.filterIntensity || 50}
                          onChange={(e) => setVisualConfig((p) => ({ ...p, filterIntensity: Number(e.target.value) }))}
                        />
                      </CardControl>
                    </Card>
                  )}

                  {/* Presets Manager */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#ffb36c"><FiZap /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Швидкі стилі та пресети</CardTitle>
                        <CardDescription>Готові комбінації та створення власних</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <PresetGrid style={{ marginTop: "4px" }}>
                      {PRESETS.map((p) => (
                        <FilterCardBtn key={p.id} onClick={() => setVisualConfig(p.config)}>
                          {p.label}
                        </FilterCardBtn>
                      ))}
                      {customPresets.map((p) => (
                        <CustomPresetCard key={p.id}>
                          <FilterCardBtn style={{ border: "none", flex: 1, padding: "2px" }} onClick={() => setVisualConfig(p.config)}>
                            {p.label}
                          </FilterCardBtn>
                          <IconBtn
                            onClick={() => {
                              const n = window.prompt("Нова назва пресета:", p.label.replace("✨ ", ""));
                              if (n) onUpdatePresetName(p.id, n);
                            }}
                            title="Перейменувати"
                            style={{ width: 22, height: 22, fontSize: 10 }}
                          >
                            ✎
                          </IconBtn>
                          <IconBtn
                            $danger
                            onClick={() => onDeletePreset(p.id)}
                            title="Видалити"
                            style={{ width: 22, height: 22, fontSize: 10 }}
                          >
                            ×
                          </IconBtn>
                        </CustomPresetCard>
                      ))}
                    </PresetGrid>

                    <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                      <WinInput
                        placeholder="Назва нового пресета..."
                        value={newPresetName}
                        onChange={(e) => setNewPresetName(e.target.value)}
                        maxLength={15}
                      />
                      <WinButton
                        onClick={() => {
                          if (newPresetName.trim()) {
                            onSavePreset(newPresetName);
                            setNewPresetName("");
                          }
                        }}
                      >
                        Зберегти
                      </WinButton>
                    </div>
                  </CardExpanded>

                  <WinButton $danger onClick={onResetFilters} style={{ alignSelf: "flex-start", marginTop: "4px" }}>
                    <FiRotateCcw /> Скинути всі фільтри
                  </WinButton>
                </CardGroup>
              )}

              {/* ── BG MUSIC TAB ────────────────────────────────────── */}
              {activeTab === "bgMusic" && (
                <CardGroup>
                  <SectionHeaderTitle><FiMusic /> Фонова музика</SectionHeaderTitle>

                  {/* Main toggle */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#a78bfa"><FiMusic /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Фонова музика</CardTitle>
                        <CardDescription>Вмикайте приємну музику під час використання сайту</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => setBgMusicEnabled(!bgMusicEnabled)}>
                        <ToggleStatusLabel $checked={bgMusicEnabled}>{bgMusicEnabled ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                        <SwitchPill $checked={bgMusicEnabled} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Auto-mute */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#a78bfa"><TbAutomation style={{ fontSize: "18px" }} /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Авто-заглушення</CardTitle>
                        <CardDescription>Зменшувати гучність фонової музики під час відтворення відео/треку</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => setAutoMuteBgMusic(!autoMuteBgMusic)}>
                        <ToggleStatusLabel $checked={autoMuteBgMusic}>{autoMuteBgMusic ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                        <SwitchPill $checked={autoMuteBgMusic} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Volume + Speed + Mode */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#a78bfa"><FiVolume2 /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Гучність та швидкість</CardTitle>
                        <CardDescription>Налаштування відтворення фону та звукових ефектів</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "12px", color: "#a0a0a0", minWidth: "90px" }}>Гучність: {Math.round(bgMusicVolume * 100)}%</span>
                        <ProgressBar type="range" min="0" max="1" step="0.01" value={bgMusicVolume}
                          onChange={(e) => setBgMusicVolume(parseFloat(e.target.value))} style={{ flex: 1 }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "12px", color: "#a0a0a0", minWidth: "90px" }}>Швидкість: {bgMusicSpeed}x</span>
                        <ProgressBar type="range" min="0.5" max="2" step="0.05" value={bgMusicSpeed}
                          onChange={(e) => applySpeedChange(parseFloat(e.target.value))} style={{ flex: 1 }} />
                        <div style={{ display: "flex", gap: "4px" }}>
                          {[0.75, 1, 1.25, 1.5, 2].map((s) => (
                            <WinButton
                              key={s}
                              onClick={() => applySpeedChange(s)}
                              style={{
                                padding: "2px 6px", fontSize: "11px",
                                background: bgMusicSpeed === s ? "rgba(96,205,255,0.2)" : undefined,
                                borderColor: bgMusicSpeed === s ? "#60cdff" : undefined,
                              }}
                            >
                              {s}x
                            </WinButton>
                          ))}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "12px", color: "#a0a0a0", minWidth: "90px" }}>Гучність SFX: {Math.round(sfxVolume * 100)}%</span>
                        <ProgressBar type="range" min="0" max="1" step="0.01" value={sfxVolume}
                          onChange={(e) => setSfxVolume(parseFloat(e.target.value))} style={{ flex: 1 }} />
                      </div>
                    </div>
                  </CardExpanded>

                  {/* Seek bar + mode */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#a78bfa"><TbMenuOrder style={{ fontSize: "18px" }} /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Режим відтворення</CardTitle>
                        <CardDescription>Позиція: {formatTime(currentTime)} / {formatTime(duration)}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      <ProgressBar type="range" min="0" max={duration || 100} step="0.1" value={currentTime} onChange={seek} />
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {["loop", "order"].map((m) => (
                          <WinButton key={m} onClick={() => setBgMusicMode(m)}
                            style={{ background: bgMusicMode === m ? "rgba(96,205,255,0.15)" : undefined, borderColor: bgMusicMode === m ? "#60cdff" : undefined }}>
                            <FiRepeat /> {m === "loop" ? "Повтор" : "Порядок"}
                          </WinButton>
                        ))}
                        <WinButton onClick={() => setBgMusicShuffle(!bgMusicShuffle)}
                          style={{ background: bgMusicShuffle ? "rgba(167,139,250,0.15)" : undefined, borderColor: bgMusicShuffle ? "#a78bfa" : undefined }}>
                          <FiShuffle /> Перемішати
                        </WinButton>
                        <WinButton onClick={onResetBgPosition}>Скинути позицію</WinButton>
                      </div>
                    </div>
                  </CardExpanded>

                  {/* Sub-tabs: Library | Custom */}
                  <div style={{ display: "flex", gap: "4px", padding: "4px 0" }}>
                    {["library", "custom"].map((t) => (
                      <WinButton key={t} onClick={() => setMusicTab(t)}
                        style={{ background: musicTab === t ? "rgba(96,205,255,0.15)" : undefined, borderColor: musicTab === t ? "#60cdff" : undefined }}>
                        {t === "library" ? <><FiList /> Бібліотека</> : <><FiUpload /> Власні треки</>}
                      </WinButton>
                    ))}
                  </div>

                  {musicTab === "library" && (
                    <CardExpanded>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <FiSearch style={{ color: "#a0a0a0" }} />
                        <WinInput placeholder="Пошук треку..." value={libSearch} onChange={(e) => setLibSearch(e.target.value)} style={{ maxWidth: "280px" }} />
                      </div>
                      <MusicScrollList>
                        {libraryTracks.map((track) => {
                          const isActive = bgMusicSource === track.file || activeBgTrackId === track.id;
                          const prog = downloadProgress[track.id];
                          const isLoading = prog !== undefined && prog < 100;
                          return (
                            <TrackRow key={track.id} $active={isActive} onClick={() => handleCachedDownload(track)}>
                              {track.image
                                ? <TrackImg src={track.image} alt={track.name} />
                                : <div style={{ width: 32, height: 32, background: "rgba(167,139,250,0.1)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}><FiMusic style={{ color: "#a78bfa", fontSize: "14px" }} /></div>
                              }
                              <TrackInfo>
                                <TrackName>{track.name}</TrackName>
                                <TrackStatus>
                                  {isLoading ? `Завантаження ${prog}%...` : track.available ? "✓ Доступний" : "↓ Клікніть для завантаження"}
                                </TrackStatus>
                              </TrackInfo>
                              {isActive && <Equalizer />}
                            </TrackRow>
                          );
                        })}
                      </MusicScrollList>
                    </CardExpanded>
                  )}

                  {musicTab === "custom" && (
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox $color="#a78bfa"><FiUpload /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Власні треки (до 7 слотів)</CardTitle>
                          <CardDescription>MP3/WAV до 15 МБ та 5 хвилин</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                        {Array.from({ length: 7 }, (_, i) => (customBgTracks || [])[i] || null).map((track, i) => (
                          <CustomSlotCard key={i} $hasFile={!!track?.file}>
                            {track?.file
                              ? <div style={{ width: 28, height: 28, background: "rgba(96,205,255,0.1)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}><FiMusic style={{ color: "#60cdff", fontSize: "13px" }} /></div>
                              : <div style={{ width: 28, height: 28, background: "rgba(255,255,255,0.04)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "#555", fontSize: "12px" }}>{i + 1}</span></div>
                            }
                            <SlotName>{track?.name || <span style={{ color: "#555" }}>Порожній слот {i + 1}</span>}</SlotName>
                            <SlotActions>
                              <IconBtn onClick={() => { activeSlotRef.current = i; fileInputRef.current.click(); }} title="Завантажити">
                                <FiUpload />
                              </IconBtn>
                              {track?.file && (
                                <IconBtn $danger onClick={() => handleRemoveCustomTrack(i)} title="Видалити"><FiTrash2 /></IconBtn>
                              )}
                            </SlotActions>
                          </CustomSlotCard>
                        ))}
                      </div>
                      <input ref={fileInputRef} type="file" accept="audio/*" style={{ display: "none" }} onChange={handleFileChange} />
                    </CardExpanded>
                  )}
                </CardGroup>
              )}

              {/* ── NEWS TAB ────────────────────────────────────────── */}
              {activeTab === "news" && (
                <CardGroup>
                  <SectionHeaderTitle><FiGlobe /> Налаштування новин</SectionHeaderTitle>

                  {!isGuest ? (
                    <Card>
                      <CardLeft>
                        <CardIconBox><FiGlobe /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Синхронізація заглушених новин</CardTitle>
                          <CardDescription>Синхронізувати приховані новини між усіма пристроями</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <CardControl>
                        <ToggleWrapper onClick={() => updateLivePreview({ syncMutedNews: !formData.syncMutedNews })}>
                          <ToggleStatusLabel $checked={formData.syncMutedNews}>{formData.syncMutedNews ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                          <SwitchPill $checked={formData.syncMutedNews} />
                        </ToggleWrapper>
                      </CardControl>
                    </Card>
                  ) : (
                    <Card style={{ opacity: 0.45 }}>
                      <CardLeft>
                        <CardIconBox><FiGlobe /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Синхронізація заглушених новин</CardTitle>
                          <CardDescription>🔒 Доступно тільки для зареєстрованих користувачів</CardDescription>
                        </CardInfo>
                      </CardLeft>
                    </Card>
                  )}

                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox><FiGlobe /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Видимість елементів новин</CardTitle>
                        <CardDescription>Увімкніть або вимкніть частини новинних карток</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      {newsLayout.filter((b) => b.key !== "image").map((block) => (
                        <div key={block.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: "13px", color: "#e0e0e0" }}>
                            {block.key === "title" ? "Заголовок новини" : "Опис новини"}
                          </span>
                          <ToggleWrapper onClick={() => toggleNewsBlockVisibility(block.key)}>
                            <ToggleStatusLabel $checked={block.visible}>{block.visible ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                            <SwitchPill $checked={block.visible} />
                          </ToggleWrapper>
                        </div>
                      ))}
                    </div>
                  </CardExpanded>
                </CardGroup>
              )}

            </MainContent>
          </WindowBody>

          {/* ── Footer ─────────────────────────────────────────────────── */}
          <WindowFooter>
            <TermsRow>
              <FiInfo style={{ color: "#60cdff" }} />
              <span>
                Ви погодились з{" "}
                <TermsLink onClick={() => setShowTerms(true)}>Угодою</TermsLink>
              </span>
            </TermsRow>
            <FooterButtons>
              <WinButton onClick={handleCancel}>Скасувати</WinButton>
              {!isGuest && (
                <WinButton $primary onClick={handleSubmit} disabled={isInvalidDate}>
                  Зберегти
                </WinButton>
              )}
            </FooterButtons>
          </WindowFooter>

        </ModalWindow>
      </ModalOverlay>

      {showTerms && <InfoModal isOpen={showTerms} onClose={() => setShowTerms(false)} />}
    </>
  );
};

export default UserSettingsModal;
