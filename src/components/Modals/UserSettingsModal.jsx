import { Fragment, createContext, useContext, useState, useEffect, useLayoutEffect, useMemo, useRef, useCallback } from "react";
import avatarPlaceholder from "../../media/characters/domino-avatar.webp";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes, css, createGlobalStyle } from "styled-components";
import InfoModal from "./UserSearchModal.jsx";
import KatSceneModal from "./KatSceneModal";
import { Tooltip } from "../Tooltip/Tooltip";
import { factoryReset } from "../../utils/factoryReset";
import { useAgeGate } from "./AgeGateModal";
import { GAMBLING_MIN_AGE } from "../../utils/ageGate";
import localforage from "localforage";
import { useAnimationsDisabled, useAnimationsAutoDisabled, setAnimationsDisabled } from "../../utils/animationsPref";
import { loadFirebase } from "../../firebaseLazy";

// Firebase Auth (~200 КБ разом із SDK) вантажимо лише коли він справді потрібен —
// для дій з акаунтом, а не просто з відкриттям налаштувань.
const loadAuth = () =>
  Promise.all([loadFirebase(), import("firebase/auth")]).then(([fb, authSdk]) => ({
    ...authSdk,
    auth: fb.auth,
  }));
import {
  FiUser,
  FiClock,
  FiShield,
  FiSliders,
  FiGlobe,
  FiInfo,
  FiX,
  FiFilm,
  FiCalendar,
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
  FiCopy,
  FiCheck,
  FiZap,
  FiDownload,
  FiLayers,
  FiSliders as FiSlidersIcon,
  FiRotateCcw,
  FiPlus,
  FiEdit2,
  FiHome,
  FiCloud,
  FiMap,
  FiColumns,
  FiMaximize2,
  FiImage,
  FiWatch,
  FiPauseCircle,
  FiMoreVertical,
  FiType,
  FiMousePointer,
  FiFilter,
  FiBellOff,
  FiAnchor,
  FiDownloadCloud,
  FiPenTool,
  FiKey,
  FiLink,
  FiGrid,
  FiNavigation,
  FiMove,
  FiBell,
  FiRss,
  FiHeart,
  FiCloudLightning,
  FiSunrise,
} from "react-icons/fi";
import {
  useBeta,
  setBetaOn,
  usePrefValue,
  LOADER_POWERED_BY_KEY,
  TAB_AUTOPLAY_KEY,
  TAB_AUTOPLAY_DEFAULT,
  parseTabAutoplay,
  serializeTabAutoplay,
  formatTabAutoplay,
} from "../../utils/betaFeatures";
import TabAutoplayControl from "../Weather/TabAutoplayControl";
import GlobalChartStyleModal from "./GlobalChartStyleModal";
import BetaVoiceSettings from "./BetaVoiceSettings.jsx";
import {
  TbFlask,
  TbAutomation,
  TbMenuOrder,
  TbClock24,
  TbHandFinger,
  TbFlipVertical,
  TbSchool,
  TbBrightnessDown,
  TbColorFilter,
  TbWand,
  TbSpeakerphone,
} from "react-icons/tb";
import { GiPalette, GiSun, GiBlackHoleBolas, GiGalaxy } from "react-icons/gi";
import { ACCENT_COLORS, AccentSwatches, useAccentColor, getAccentLabel } from "../Header/AccentColorPicker.jsx";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun as FaSunIcon, FaEye, FaEyeSlash, FaWindows, FaAndroid, FaLinux, FaApple } from "react-icons/fa";
import {
  BASE_BG_TRACKS,
  BG_CACHE_NAME,
  isBaseBgTrack,
  getStoredSoftDeletedIds,
  persistSoftDeletedIds,
} from "../../utils/bgMusicCatalog";
import songAiKnowledge from "../MusicPhoto/songAiKnowledge.json";
import { assetMap } from "../MusicPhoto/MusicPhoto.assets";
import {
  FILTERS,
  PRESETS,
  COMBINABLE_FILTERS,
  CUSTOM_PRESET_ICON as FiPresetStar,
  MAX_CUSTOM_PRESETS,
  presetName,
  selectFilter,
  getPreviewFilter,
  useVisualFilters,
} from "../Header/useVisualFilters";
import filterExampleImg from "../../media/backgrounds/scenes/mountains.webp";
import { useDecorator } from "../Decorator/DecoratorContext.jsx";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import {
  isNewsFilterEnabled,
  setNewsFilterEnabled,
  isNewsFilterSoftMode,
  setNewsFilterSoftMode,
  isNewsFilterThorough,
  setNewsFilterThorough,
  NEWS_FILTER_FAST_DESCRIPTION_CHARS,
  getNewsFilterCategoryModes,
  setNewsFilterCategoryModes,
  getNewsFilterCustomWords,
  setNewsFilterCustomWords,
  NEWS_FILTER_CATEGORIES,
  NEWS_FILTER_MAX_WORDS,
  NEWS_FILTER_MAX_WORD_LENGTH,
  parseNewsFilterEntry,
} from "../../utils/contentFilter";
import { scheduleNewsFilterSync, flushNewsFilterSync } from "../../utils/newsFilterSync";
import {
  isUrgentNotifyEnabled,
  setUrgentNotifyEnabled,
  getUrgentWords,
  setUrgentWords,
  resetUrgentWords,
  getDefaultUrgentWords,
  URGENT_MAX_WORDS,
  URGENT_MAX_WORD_LENGTH,
  isRecsEnabled,
  setRecsEnabled,
  getRecsTopics,
  setRecsTopics,
  resetRecsProfile,
  getTopInterests,
  NEWS_TOPICS,
  NEWS_VIEW_KEY,
  NEWS_VIEW_MODES,
  setNewsViewMode,
} from "../../utils/newsPersonal";
import {
  isPushSupported,
  isPushSubscribed,
  subscribePush,
  wantsPush,
  getLastPushError,
} from "../../utils/pushNotifications";
import {
  ALERT_PAUSE_OPTIONS,
  ALERT_DAILY_MIN,
  ALERT_DAILY_MAX,
  getAlertPause,
  setAlertPause,
  getAlertDailyLimit,
  setAlertDailyLimit,
  isWeatherAlertsEnabled,
  setWeatherAlertsEnabled,
  isMorningBriefEnabled,
  setMorningBriefEnabled,
  MORNING_BRIEF_HOUR,
  GUST_STORM_MS,
  WEATHER_ALERT_HOURS,
} from "../../utils/emergencyAlerts";
import { MUTE_SYNC_DAILY_LIMIT } from "../../utils/muteSync";
import { applySiteMirror, getSiteMirror } from "../../utils/siteMirror";
import { getPref, setPref, removePref } from "../../utils/prefsStore.js";
import { applySettingsSearch, clearSettingsSearch, getSearchWords } from "./settingsSearch";
import { OPEN_BG_MODAL_EVENT, OPEN_TIMEZONE_EVENT } from "../Hero/heroEvents.js";
import {
  SETTINGS_LEVELS,
  DEFAULT_SETTINGS_LEVEL,
  STYKHIIA_VERSION,
  getLevelInfo,
  levelCountLabel,
  levelFullName,
  levelRank,
  maxLevel,
  setSettingsLevel,
  useSettingsLevel,
  useSettingsLevelChosen,
} from "./settingsLevels";
import { STYKHIIA_FONTS, getStykhiiaFont } from "../../utils/stykhiiaFont";
import {
  getFontPackId,
  fontPackValue,
  listFontPacks,
  ensureFontPack,
  saveFontPack,
  deleteFontPack,
} from "../../utils/customFonts";
import { readFontPack } from "../../utils/customFontImport";

import i18n from "../../i18n/i18n.js";
// Підказка в картці «Мої пакети шрифтів»: готовий запит до Claude, щоб підібрати вільний шрифт
const CLAUDE_FONT_PROMPT =
  () => (i18n.t("modals.UserSettingsModal.dopomozhyPidibratyVilnyiShryft"));
const CLAUDE_FONT_URL = () => (`https://claude.ai/new?q=${encodeURIComponent(CLAUDE_FONT_PROMPT())}`);

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
// Вікна «Параметрів» позначені data-decorator-ignore: це панель керування, тож режим
// Декоратора не перехоплює в них кліки (інакше не натиснути ні меню, ні кнопки).

// Кольори «Параметрів»: темна тема — типова, світла вмикається атрибутом на <body>
// (меню режимів і діалоги рендеряться порталом у <body>, тож токени мають бути там)
const SettingsThemeTokens = createGlobalStyle`
  :root {
    --s-ink: 255,255,255;
    --s-accent: #60cdff; --s-accent-rgb: 96,205,255; --s-accent-hover: #70d4ff;
    --s-accent-soft: #bfe9ff; --s-on-accent: #000000;
    --s-bg: #1c1c1f; --s-bg-rgb: 28,28,31;
    --s-panel: #202024; --s-card: #27272a; --s-menu: #2a2a2e;
    --s-input: #2b2b30; --s-input-hover: #323238; --s-seg: #1f1f23;
    --s-text: #f3f3f3; --s-text-2: #c5c5c5; --s-muted: #a0a0a0; --s-faint: #666;
    --s-blue: #93c5fd; --s-yellow: #fde68a; --s-green: #34d399; --s-orange: #fb923c; --s-red: #ff8a8a;
  }
  body[data-settings-theme="light"] {
    --s-ink: 0,0,0;
    --s-accent: #0a7fb8; --s-accent-rgb: 10,127,184; --s-accent-hover: #0b8fd0;
    --s-accent-soft: #075985; --s-on-accent: #ffffff;
    --s-bg: #f4f5f7; --s-bg-rgb: 244,245,247;
    --s-panel: #ffffff; --s-card: #ffffff; --s-menu: #ffffff;
    --s-input: #ffffff; --s-input-hover: #f3f4f6; --s-seg: #eef0f3;
    --s-text: #111827; --s-text-2: #374151; --s-muted: #5b6270; --s-faint: #9ca3af;
    --s-blue: #1d4ed8; --s-yellow: #92400e; --s-green: #047857; --s-orange: #c2410c; --s-red: #c42b1c;
  }
`;

// Ширина вікна в режимі перегляду — у відсотках від ширини екрана, але не вужче за FILTERS_PREVIEW_MIN_PX
const FILTERS_PREVIEW_DEFAULT_WIDTH = 64;
const FILTERS_PREVIEW_MIN_WIDTH = 64;
const FILTERS_PREVIEW_MAX_WIDTH = 100;
const FILTERS_PREVIEW_MIN_PX = 640;
// З цієї ширини екрана вікно зсувається праворуч; на вужчих — приклад-картинка в модалці
const FILTERS_PREVIEW_BREAKPOINT = 768;
// До цієї ширини «Параметри» відкриваються на весь екран (телефони)
const MOBILE_BP = 600;

const ModalOverlay = styled.div.attrs({ "data-decorator-ignore": "true" })`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 100001;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  @media (max-width: ${MOBILE_BP}px) { height: 100dvh; }
  /* На вкладці фільтрів сторінку не затемнюємо, щоб було видно результат.
     На вужчих екранах сторінку за вікном не видно — там приклад-картинка в самій модалці */
  ${(p) => p.$preview && css`
    @media (min-width: ${FILTERS_PREVIEW_BREAKPOINT}px) {
      background: transparent;
      backdrop-filter: none;
      justify-content: flex-end;
      padding-right: 2.5%;
    }
  `}
  animation: ${(p) => (p.$isClosing ? fadeOut : fadeIn)} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`;

const NestedModalPortal = styled.div.attrs({ "data-decorator-ignore": "true" })`
  position: fixed;
  inset: 0;
  z-index: 100002;
`;

const ModalWindow = styled.div`
  background: var(--s-bg);
  color: var(--s-text);
  border: none;
  /* На весь екран: уся ширина й висота під налаштування */
  border-radius: 0;
  width: 100%;
  height: 100vh; height: 100dvh; max-height: none;
  transition: width 0.3s ease;
  ${(p) => p.$preview && css`
    @media (min-width: ${FILTERS_PREVIEW_BREAKPOINT}px) {
      width: max(${FILTERS_PREVIEW_MIN_PX}px, ${p.$previewWidth}%);
    }
  `}
  display: flex; flex-direction: column;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(var(--s-ink),0.2);
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${(p) => (p.$isClosing ? fadeOut : fadeIn)} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
  /* Телефон: на весь екран — кожен піксель висоти йде під налаштування */
  @media (max-width: ${MOBILE_BP}px) {
    width: 100%; height: 100vh; height: 100dvh; max-height: none;
    border: none; border-radius: 0; box-shadow: none;
  }
`;

const WindowHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 7px 10px;
  @media (max-width: ${MOBILE_BP}px) {
    padding: calc(6px + env(safe-area-inset-top)) 8px 6px 10px;
  }
  background: var(--s-panel);
  border-bottom: 1px solid rgba(var(--s-ink),0.08);
  user-select: none;
`;

const HeaderLeft = styled.div`
  display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1;
`;

const UserBadge = styled.div`
  display: flex; align-items: center; gap: 10px;
  background: rgba(var(--s-ink),0.05);
  border: 1px solid rgba(var(--s-ink),0.08);
  padding: 4px 12px 4px 6px; border-radius: 20px;
  min-width: 0; max-width: min(380px, 100%);
  & > div:last-child { min-width: 0; display: flex; flex-direction: column; }
  @media (max-width: ${MOBILE_BP}px) {
    background: transparent; border: none; padding: 0; gap: 8px;
  }
`;

const UserAvatarThumb = styled.img`
  width: 30px; height: 30px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
`;

// Довга пошта обрізається посередині: «дуже-довге-ім…@gmail.com» — домен лишається видимим.
// Повну адресу видно в підказці при наведенні.
const AccountEllipsis = styled.span`
  display: inline-flex; min-width: 0; max-width: 100%; vertical-align: bottom;
  & > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  & > span + span { flex-shrink: 0; max-width: 65%; }
`;

const AccountName = ({ value }) => {
  const text = String(value || "");
  const at = text.lastIndexOf("@");
  return (
    <AccountEllipsis title={text}>
      {at > 0 ? (
        <>
          <span>{text.slice(0, at)}</span>
          <span>{text.slice(at)}</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </AccountEllipsis>
  );
};

const HeaderTitle = styled.h2`font-size: 16px; font-weight: 600; margin: 0; color: var(--s-text);`;
const HeaderSub = styled.span`
  font-size: 11px; color: var(--s-muted);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`;

const HeaderActions = styled.div`display: flex; align-items: center; gap: 8px; flex-shrink: 0;`;

const HeaderButton = styled.button`
  background: rgba(var(--s-ink),0.06);
  border: 1px solid rgba(var(--s-ink),0.1);
  color: var(--s-text);
  padding: 6px 12px; border-radius: 6px;
  font-size: 12px; font-weight: 500; cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover { background: rgba(var(--s-ink),0.12); color: var(--s-text); }
  /* На телефоні — лише іконка */
  @media (max-width: ${MOBILE_BP}px) {
    width: 36px; height: 36px; padding: 0; justify-content: center; font-size: 16px;
    & > span { display: none; }
  }
`;

const CloseButton = styled.button`
  background: transparent; border: none; color: var(--s-text);
  width: 32px; height: 32px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 28px; transition: all 0.15s ease; flex-shrink: 0;
  &:hover { background: #c42b1c; }
  @media (max-width: ${MOBILE_BP}px) { width: 36px; height: 36px; font-size: 24px; }
`;

const WindowBody = styled.div`
  display: flex; flex: 1; overflow: hidden;
  @media (max-width: 768px) { flex-direction: column; }
`;

const Sidebar = styled.div`
  width: 230px;
  background: var(--s-panel);
  border-right: 1px solid rgba(var(--s-ink),0.08);
  padding: 12px; display: flex; flex-direction: column; gap: 2px;
  overflow-y: auto; flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%; gap: 8px; overflow: visible;
    border-right: none; border-bottom: 1px solid rgba(var(--s-ink),0.08);
    padding: 8px 10px;
  }
`;

const NavList = styled.div`
  position: relative; display: flex; flex-direction: column; gap: 2px;
  @media (max-width: 768px) {
    flex-direction: row; gap: 6px;
    overflow-x: auto; overscroll-behavior-x: contain;
    margin: 0 -10px; padding: 0 10px;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
    /* Плавне згасання справа — натяк, що вкладки гортаються */
    mask-image: linear-gradient(to right, #000 calc(100% - 28px), transparent);
  }
`;

// ── Анімації іконок налаштувань ─────────────────────────────────────────────
// Програються один раз при наведенні на картку / пункт меню. Кожна закінчується
// в стані спокою, тож «Вимкнути анімації та розмиття» (animationsPref.css) лишає іконку на місці.
const ICON_ANIMS = {
  pop: { kf: keyframes`0%,100%{transform:scale(1)}40%{transform:scale(1.25)}70%{transform:scale(0.92)}`, dur: "0.5s" },
  swing: { kf: keyframes`0%,100%{transform:rotate(0)}20%{transform:rotate(-18deg)}45%{transform:rotate(14deg)}70%{transform:rotate(-7deg)}85%{transform:rotate(3deg)}`, dur: "0.8s" },
  spin: { kf: keyframes`from{transform:rotate(0)}to{transform:rotate(360deg)}`, dur: "0.9s", ease: "cubic-bezier(0.45,0,0.25,1)" },
  tick: { kf: keyframes`from{transform:rotate(0)}to{transform:rotate(360deg)}`, dur: "1s", ease: "steps(8, end)" },
  ring: { kf: keyframes`0%,70%,100%{transform:rotate(0)}10%,30%,50%{transform:rotate(-14deg)}20%,40%,60%{transform:rotate(14deg)}`, dur: "0.7s" },
  drop: { kf: keyframes`0%,100%{transform:translateY(0)}35%{transform:translateY(4px)}55%{transform:translateY(-2px)}75%{transform:translateY(1px)}`, dur: "0.6s" },
  lift: { kf: keyframes`0%,100%{transform:translateY(0)}35%{transform:translateY(-4px)}60%{transform:translateY(1px)}`, dur: "0.55s" },
  bounce: { kf: keyframes`0%,100%{transform:translateY(0) scale(1,1)}30%{transform:translateY(-5px) scale(0.94,1.08)}55%{transform:translateY(0) scale(1.1,0.9)}75%{transform:translateY(-2px) scale(1,1)}`, dur: "0.6s" },
  blink: { kf: keyframes`0%,100%{transform:scaleY(1)}35%{transform:scaleY(0.1)}55%{transform:scaleY(1)}`, dur: "0.5s" },
  flip: { kf: keyframes`0%,100%{transform:perspective(80px) rotateY(0)}50%{transform:perspective(80px) rotateY(180deg)}`, dur: "0.7s" },
  flipX: { kf: keyframes`0%,100%{transform:perspective(80px) rotateX(0)}50%{transform:perspective(80px) rotateX(180deg)}`, dur: "0.7s" },
  tap: { kf: keyframes`0%,100%{transform:translate(0,0) scale(1)}40%{transform:translate(1px,2px) scale(0.82)}`, dur: "0.45s" },
  turn: { kf: keyframes`0%,100%{transform:rotate(0)}35%,65%{transform:rotate(90deg)}`, dur: "0.9s" },
  wiggle: { kf: keyframes`0%,100%{transform:translateX(0) rotate(0)}25%{transform:translateX(-2px) rotate(-8deg)}75%{transform:translateX(2px) rotate(8deg)}`, dur: "0.5s" },
  flash: { kf: keyframes`0%,100%{opacity:1;transform:scale(1)}25%{opacity:0.25}50%{opacity:1;transform:scale(1.2)}`, dur: "0.6s" },
};

const ICON_ANIM_BY_TYPE = new Map([
  [FiWatch, "tick"], [TbClock24, "tick"], [FiCalendar, "flip"],
  [FiPauseCircle, "pop"], [TbSpeakerphone, "ring"], [FiMoreVertical, "lift"], [FiType, "pop"],
  [TbHandFinger, "tap"], [FiMousePointer, "tap"], [TbFlipVertical, "flipX"], [TbMenuOrder, "lift"],
  [FiLink, "swing"], [FiKey, "turn"], [FiFilter, "drop"], [FiBellOff, "ring"], [FiEye, "blink"],
  [TbSchool, "lift"], [BsMoonStarsFill, "swing"], [FaSunIcon, "spin"], [GiPalette, "swing"],
  [FiAnchor, "swing"], [FiDownloadCloud, "drop"], [FiUpload, "lift"], [FiPenTool, "wiggle"],
  [FaWindows, "lift"], [FaAndroid, "lift"], [FaLinux, "lift"], [FaApple, "lift"],
  [FiVolume2, "ring"], [FiMusic, "bounce"], [TbWand, "wiggle"], [TbBrightnessDown, "spin"],
  [TbColorFilter, "spin"], [FiLayers, "lift"], [FiImage, "pop"], [FiMaximize2, "pop"],
  [FiColumns, "pop"], [FiGrid, "pop"], [FiSliders, "wiggle"], [FiHome, "lift"], [FiCloud, "wiggle"],
  [FiMap, "flip"], [FiShield, "pop"], [FiCompass, "spin"], [FiZap, "flash"],
  [TbFlask, "wiggle"], [FiNavigation, "swing"], [FiMove, "lift"],
]);

const getIconAnim = (children) => {
  const el = Array.isArray(children) ? children[0] : children;
  return ICON_ANIM_BY_TYPE.get(el?.type) || "pop";
};

const iconAnimRule = (name) => {
  const a = ICON_ANIMS[name] || ICON_ANIMS.pop;
  return css`animation: ${a.kf} ${a.dur} ${a.ease || "ease-in-out"};`;
};

const NavItem = styled.div`
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 6px; cursor: pointer;
  font-size: 13px; font-weight: ${(p) => (p.$active ? "600" : "400")};
  color: ${(p) => (p.$active ? "var(--s-text)" : p.$locked ? "var(--s-faint)" : "var(--s-text-2)")};
  background: ${(p) => (p.$active ? "rgba(var(--s-ink),0.08)" : "transparent")};
  position: relative; transition: all 0.15s ease; white-space: nowrap;
  opacity: ${(p) => (p.$locked ? 0.45 : 1)};
  /* Заблокований пункт лишається «живим» для наведення — щоб показати підказку */
  cursor: ${(p) => (p.$locked ? "not-allowed" : "pointer")};

  ${(p) =>
    p.$active &&
    css`
      &::before {
        content: "";
        position: absolute;
        left: 3px; top: 8px; bottom: 8px;
        width: 3px; background: var(--s-accent); border-radius: 2px;
      }
    `}

  ${(p) =>
    !p.$locked &&
    css`
      &:hover { background: rgba(var(--s-ink),0.06); color: var(--s-text); }
    `}

  @media (max-width: 768px) {
    flex-shrink: 0; gap: 7px; padding: 7px 12px; border-radius: 999px;
    background: ${(p) => (p.$active ? "rgba(var(--s-accent-rgb),0.16)" : "rgba(var(--s-ink),0.05)")};
    border: 1px solid ${(p) => (p.$active ? "rgba(var(--s-accent-rgb),0.45)" : "rgba(var(--s-ink),0.08)")};
    &::before { display: none; }
  }
`;

const NavIconBox = styled.span`
  font-size: 15px; display: flex; align-items: center; justify-content: center;
  color: ${(p) => (p.$active ? "var(--s-accent)" : p.$locked ? "var(--s-faint)" : "var(--s-muted)")};

  & > svg { transform-origin: center; }

  ${(p) =>
    !p.$locked &&
    css`
      *:hover > & > svg {
        ${iconAnimRule(p.$anim)}
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    & > svg { animation: none !important; }
  }
`;

const LockBadge = styled.span`
  font-size: 10px; margin-left: auto; color: var(--s-faint);
  background: rgba(var(--s-ink),0.06); padding: 1px 5px; border-radius: 4px;
`;

const searchFlash = keyframes`
  0%, 35% { box-shadow: 0 0 0 2px rgba(var(--s-accent-rgb),0.85); background-color: rgba(var(--s-accent-rgb),0.10); }
  100% { box-shadow: 0 0 0 2px rgba(var(--s-accent-rgb),0); }
`;

const MainContent = styled.div`
  flex: 1; padding: 24px; overflow-y: auto;
  background: var(--s-bg); display: flex; flex-direction: column; gap: 16px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: rgba(var(--s-ink),0.15); border-radius: 3px; }
  @media (max-width: 768px) { padding: 16px 14px calc(16px + env(safe-area-inset-bottom)); gap: 12px; }

  /* ── Загальний пошук (settingsSearch.js) ── */
  [data-search-hidden] { display: none !important; }
  & ::highlight(settings-search) { background-color: rgba(var(--s-accent-rgb),0.35); color: var(--s-text); }
  [data-search-flash] { animation: ${searchFlash} 1.8s ease-out; }

  /* ── Режими (settingsLevels.js): поза пошуком ховаємо налаштування важчих режимів ── */
  &:not([data-searching])[data-view-level="simple"] [data-level="medium"],
  &:not([data-searching])[data-view-level="simple"] [data-level="pro"],
  &:not([data-searching])[data-view-level="medium"] [data-level="pro"] { display: none !important; }

  &[data-searching] {
    [data-settings-tab]:not([data-search-hidden]) ~ [data-settings-tab]:not([data-search-hidden]) {
      margin-top: 8px; padding-top: 20px; border-top: 1px solid rgba(var(--s-ink),0.08);
    }
    [data-settings-head="title"] { cursor: pointer; }
    [data-settings-head="title"]::after {
      content: "Відкрити розділ ›"; margin-left: auto;
      font-size: 12px; font-weight: 600; color: var(--s-accent); opacity: 0.75;
    }
    [data-settings-head="title"]:hover::after { opacity: 1; }
    [data-settings-title] { cursor: pointer; }
    [data-settings-title]:hover { color: var(--s-accent); text-decoration: underline; text-underline-offset: 3px; }
  }
`;

const SearchBox = styled.div`
  position: relative; display: flex; align-items: center;
  margin-bottom: 8px; flex-shrink: 0;
  & > svg { position: absolute; left: 10px; font-size: 14px; color: var(--s-muted); pointer-events: none; }
  @media (max-width: 768px) { margin: 0; }
`;

const SearchClear = styled.button`
  position: absolute; right: 4px; top: 50%; transform: translateY(-50%);
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; padding: 0; border: none; border-radius: 4px;
  background: transparent; color: var(--s-muted); cursor: pointer; font-size: 14px;
  &:hover { background: rgba(var(--s-ink),0.08); color: var(--s-text); }
  &:focus-visible { outline: 2px solid rgba(var(--s-accent-rgb),0.6); }
`;

const NavCount = styled.span`
  margin-left: auto; min-width: 20px; padding: 1px 6px; border-radius: 999px;
  font-size: 11px; font-weight: 600; text-align: center;
  background: ${(p) => (p.$zero ? "transparent" : "rgba(var(--s-accent-rgb),0.16)")};
  color: ${(p) => (p.$zero ? "var(--s-faint)" : "var(--s-accent)")};
`;

const SearchNote = styled.div`
  font-size: 12px; color: var(--s-muted); line-height: 1.5;
  strong { color: var(--s-text); font-weight: 600; }
`;

const SearchEmpty = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 56px 16px; text-align: center; color: var(--s-muted); font-size: 13px;
  & > svg { font-size: 30px; opacity: 0.45; }
  strong { color: var(--s-text); font-size: 15px; }
`;

// Обгортка області прокрутки — щоб натяк «прокрутіть нижче» лежав поверх, не зсуваючи вміст
const MainContentWrap = styled.div`
  position: relative; flex: 1; min-width: 0; min-height: 0;
  display: flex; flex-direction: column;
`;
const scrollHintBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
`;
const ScrollHintFade = styled(motion.div)`
  position: absolute; left: 0; right: 6px; bottom: 0; height: 84px;
  display: flex; align-items: flex-end; justify-content: center; padding-bottom: 14px;
  background: linear-gradient(to bottom, rgba(var(--s-bg-rgb),0), rgba(var(--s-bg-rgb),0.92) 60%, var(--s-bg));
  pointer-events: none; z-index: 2;
  /* На телефоні мало висоти — натяк нижчий, щоб не закривав картки */
  @media (max-width: ${MOBILE_BP}px) { height: 52px; padding-bottom: 8px; }
`;
const ScrollHintButton = styled.button`
  pointer-events: auto;
  display: flex; align-items: center; gap: 6px;
  font: inherit; font-size: 12px; font-weight: 600; color: var(--s-accent);
  background: rgba(var(--s-accent-rgb),0.12); border: 1px solid rgba(var(--s-accent-rgb),0.35);
  border-radius: 999px; padding: 5px 14px; cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
  transition: background 0.15s ease;
  &:hover { background: rgba(var(--s-accent-rgb),0.22); }
  &:focus-visible { outline: 2px solid rgba(var(--s-accent-rgb),0.6); outline-offset: 2px; }
  svg { animation: ${scrollHintBounce} 1.4s ease-in-out infinite; }
  @media (max-width: ${MOBILE_BP}px) { font-size: 11px; padding: 4px 12px; }
`;

const SectionHeaderTitle = styled.h3.attrs({ "data-settings-head": "title" })`
  font-size: 20px; font-weight: 600; color: var(--s-text);
  margin: 0 0 12px 0; display: flex; align-items: center; gap: 10px;
  @media (max-width: ${MOBILE_BP}px) {
    font-size: 17px; gap: 8px; margin-bottom: 10px;
    &::after { font-size: 11px !important; white-space: nowrap; }
  }
`;

const SectionDescription = styled.p.attrs({ "data-settings-head": "desc" })`
  font-size: 13px; color: var(--s-muted); line-height: 1.5;
  margin: -8px 0 10px 0;
  @media (max-width: ${MOBILE_BP}px) { font-size: 12px; margin-bottom: 6px; }
`;

const MusicSettingsWrap = styled.div`
  display: flex; flex-direction: column; gap: 8px;
  transition: filter 0.2s ease, opacity 0.2s ease;
  ${({ $off }) => $off && css`filter: grayscale(1); opacity: 0.55;`}
`;

const MAX_CUSTOM_TRACKS = 7;
const MAX_CUSTOM_MB = 20;
const MAX_CUSTOM_MIN = 8;

const SECTION_ICONS = { hero: <FiHome />, weather: <FiCloud />, map: <FiMap /> };
const SECTION_COLORS = { hero: "#60a5fa", weather: "#7dd3fc", map: "#4ade80" };

// data-scroll-hint: заголовок підрозділу, який показує натяк «Нижче: …»
const SubSectionTitle = styled.h4.attrs({ "data-scroll-hint": "" })`
  font-size: 13px; font-weight: 600; color: var(--s-muted);
  text-transform: uppercase; letter-spacing: 0.04em;
  margin: 14px 0 2px 2px; display: flex; align-items: center; gap: 8px;
  ${SectionHeaderTitle} + &, ${SectionDescription} + & { margin-top: 0; }
`;

const CardGroup = styled.div`display: flex; flex-direction: column; gap: 8px;`;

// ── Режими налаштувань (див. settingsLevels.js) ────────────────────────────
// Рівень кожної вкладки; окремі картки всередині можуть бути «важчими» (проп level у Card)
const TAB_LEVEL = {
  security: "simple",
  personalization: "simple",
  siteSections: "simple",
  modes: "simple",
  filters: "medium",
  bgMusic: "medium",
  beta: "pro",
};

// Зоря → квазар (чорна діра) → галактика
const LEVEL_ICONS = { simple: GiSun, medium: GiBlackHoleBolas, pro: GiGalaxy };

// { level, viewLevel, isSearching, switchLevel }
const SettingsLevelContext = createContext(null);

const LevelHintBar = styled.div.attrs({ "data-level-hint": "" })`
  --lvl: ${(p) => p.$color};
  flex: 0 0 auto; width: 100%; box-sizing: border-box;
  display: flex; align-items: center; flex-wrap: wrap; gap: 6px 10px;
  padding: 6px 8px 6px 10px; border-radius: 6px;
  font-size: 12px; line-height: 1.4; color: var(--s-text-2);
  background: color-mix(in srgb, var(--lvl) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--lvl) 32%, transparent);
  /* Працює й усередині вимкненої (сірої) групи */
  pointer-events: auto;
  & > svg { color: var(--lvl); flex-shrink: 0; }
  strong { color: var(--lvl); font-weight: 600; }
`;

const LevelHintButton = styled.button`
  margin-left: auto; padding: 3px 10px; border-radius: 999px;
  font: inherit; font-size: 12px; font-weight: 600; color: var(--lvl); cursor: pointer;
  background: color-mix(in srgb, var(--lvl) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--lvl) 45%, transparent);
  &:hover { background: color-mix(in srgb, var(--lvl) 26%, transparent); }
  &:focus-visible { outline: 2px solid rgba(var(--s-accent-rgb),0.6); outline-offset: 2px; }
`;

// «Це налаштування з режиму Професійний · Андромеда» + кнопка. scope="tab" — плашка під заголовком вкладки
const LevelHint = ({ level, scope = "item" }) => {
  const ctx = useContext(SettingsLevelContext);
  const isTab = scope === "tab";
  return (
    <LevelHintBar $color={getLevelInfo(level).color} {...(isTab ? { "data-settings-head": "level" } : {})}>
      {(() => {
        const Icon = LEVEL_ICONS[level] || GiSun;
        return <Icon aria-hidden="true" />;
      })()}
      <span>
        {isTab ? i18n.t("modals.UserSettingsModal.tseiRozdil") : i18n.t("modals.UserSettingsModal.tseNalashtuvannia")} {i18n.t("modals.UserSettingsModal.zRezhymu")} <strong>{levelFullName(level)}</strong>{i18n.t("modals.UserSettingsModal.peremknuty")}
      </span>
      <LevelHintButton
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          ctx?.switchLevel(level);
        }}
      >
        {i18n.t("modals.UserSettingsModal.peremknuty2")}
      </LevelHintButton>
    </LevelHintBar>
  );
};

// Плашка вкладки, «важчої» за обраний режим (видно в пошуку або коли розділ відкрито напряму)
const TabLevelHint = ({ tab }) => {
  const ctx = useContext(SettingsLevelContext);
  const level = TAB_LEVEL[tab];
  if (!ctx || levelRank(level) <= levelRank(ctx.level)) return null;
  return <LevelHint level={level} scope="tab" />;
};

// data-settings-item: одиниця загального пошуку в параметрах (див. settingsSearch.js)
const CardBase = styled.div.attrs({ "data-settings-item": "" })`
  background: var(--s-card);
  border: 1px solid rgba(var(--s-ink),0.07);
  border-radius: 8px; padding: 14px 16px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover { background: rgba(var(--s-ink),0.05); border-color: rgba(var(--s-ink),0.12); }
  @media (max-width: 550px) { flex-direction: column; align-items: flex-start; }
  ${(p) => p.$hinted && css`flex-wrap: wrap; row-gap: 10px;`}
`;

// level — з якого режиму налаштування ("medium" | "pro"); без нього — «Простий».
// Поза пошуком важчі картки ховає CSS, а видимі «важчі» отримують підказку з кнопкою «Перемкнути».
const Card = ({ level, children, ...rest }) => {
  const ctx = useContext(SettingsLevelContext);
  const hinted = !!level && !!ctx && levelRank(level) > levelRank(ctx.level);
  return (
    <CardBase data-level={level} $hinted={hinted} {...rest}>
      {hinted && <LevelHint level={level} />}
      {children}
    </CardBase>
  );
};

const CardExpanded = styled(Card)`
  flex-direction: column; align-items: stretch; gap: 12px;
`;

// Декоратор: «Оригінал» і два шаблони — три мініатюри в ряд
const DecoratorPresetRow = styled.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;
  @media (max-width: ${MOBILE_BP}px) { gap: 6px; }
`;
const DecoratorPresetBtn = styled.button`
  display: flex; flex-direction: column; gap: 6px; min-width: 0;
  padding: 6px; border-radius: 10px; cursor: pointer; text-align: left;
  background: ${(p) => (p.$active ? "rgba(var(--s-ink),0.08)" : "rgba(var(--s-ink),0.03)")};
  border: 2px solid ${(p) => (p.$active ? "var(--s-accent)" : "rgba(var(--s-ink),0.1)")};
  color: var(--s-text);
  transition: border-color 0.15s ease, background 0.15s ease;
  &:hover { border-color: ${(p) => (p.$active ? "var(--s-accent)" : "rgba(var(--s-ink),0.3)")}; }
  &:focus-visible { outline: 2px solid var(--s-accent); outline-offset: 2px; }
  svg { display: block; width: 100%; height: auto; border-radius: 6px; }
`;
const DecoratorPresetName = styled.span`
  font-size: 12px; font-weight: 600; line-height: 1.25;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  @media (max-width: ${MOBILE_BP}px) { font-size: 11px; white-space: normal; }
`;
const DecoratorPresetMeta = styled.span`
  font-size: 11px; color: var(--s-muted); margin-top: -4px;
`;

// Мініатюра сторінки: шапка, банер і три картки. accent — колір шаблону (без нього — оригінал)
const DecoratorPresetThumb = ({ accent, rounded = 2, variant = 0 }) => {
  const ink = (a) => `rgba(var(--s-ink),${a})`;
  const tint = accent || ink(0.22);
  return (
    <svg viewBox="0 0 160 96" aria-hidden="true" focusable="false">
      <rect width="160" height="96" fill="var(--s-bg)" />
      <rect width="160" height="96" fill={accent || "transparent"} opacity={accent ? 0.08 : 0} />
      <rect x="0" y="0" width="160" height="14" fill={accent ? tint : ink(0.1)} opacity={accent ? 0.85 : 1} />
      <circle cx="9" cy="7" r="3" fill={accent ? "#fff" : ink(0.35)} opacity="0.9" />
      <rect x="16" y="5" width="30" height="4" rx="2" fill={accent ? "#fff" : ink(0.3)} opacity="0.8" />
      <rect
        x="8" y="20" width="144" height="28" rx={rounded * 2}
        fill={accent ? tint : ink(0.08)} opacity={accent ? (variant ? 0.35 : 0.22) : 1}
      />
      <rect x="16" y="28" width="56" height="5" rx="2.5" fill={accent || ink(0.35)} />
      <rect x="16" y="37" width="36" height="4" rx="2" fill={ink(0.25)} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={8 + i * 49} y="54" width="46" height="34" rx={rounded * 2}
            fill={ink(0.06)}
            stroke={accent ? tint : ink(0.14)} strokeWidth={accent ? 1.5 : 1}
          />
          <rect x={14 + i * 49} y="61" width={variant && i === 1 ? 20 : 28} height="4" rx="2" fill={accent && i === variant ? tint : ink(0.3)} />
          <rect x={14 + i * 49} y="69" width="22" height="3" rx="1.5" fill={ink(0.2)} />
          <rect x={14 + i * 49} y="76" width="16" height="6" rx={accent ? 3 : 1} fill={accent || ink(0.18)} opacity={accent ? 0.8 : 1} />
        </g>
      ))}
    </svg>
  );
};

// Режими Декоратора в «Параметрах»: вимкнено / перегляд змін / редагування кліком
const DECORATOR_VIEW_OPTIONS = [
  { id: "off", get label() { return i18n.t("modals.UserSettingsModal.vymkneno"); }, get hint() { return i18n.t("modals.UserSettingsModal.saitBezZminDekoratora"); } },
  { id: "view", get label() { return i18n.t("modals.UserSettingsModal.perehliad"); }, get hint() { return i18n.t("modals.UserSettingsModal.zminyVydnoSaitPratsiuie"); } },
  { id: "edit", get label() { return i18n.t("modals.UserSettingsModal.redahuvannia"); }, get hint() { return i18n.t("modals.UserSettingsModal.klikPoElementuSaitu"); } },
];

const DECORATOR_PRESETS = [
  { id: "original", get label() { return i18n.t("modals.UserSettingsModal.oryhinal"); }, get hint() { return i18n.t("modals.UserSettingsModal.bezZmin"); } },
  { id: 0, get label() { return i18n.t("modals.UserSettingsModal.dekoratyvnyiShablon1"); }, accent: "#d946ef", rounded: 4, variant: 0 },
  { id: 1, get label() { return i18n.t("modals.UserSettingsModal.dekoratyvnyiShablon2"); }, accent: "#f59e0b", rounded: 7, variant: 1 },
];

// Журнал змін Декоратора: зрозумілі назви службових властивостей і без довжелезних data:-рядків
const DECORATOR_LOG_LABELS = {
  get "--dec-cursor-image"() { return i18n.t("modals.UserSettingsModal.kursorZobrazhennia"); },
  get "--dec-cursor-size"() { return i18n.t("modals.UserSettingsModal.rozmirKursora"); },
  get "--dec-click-sound"() { return i18n.t("modals.UserSettingsModal.zvukNatyskanniaBilsheNe"); },
  get "--dec-click-fx"() { return i18n.t("modals.UserSettingsModal.efektNatyskannia"); },
  get "--dec-text"() { return i18n.t("modals.UserSettingsModal.tekstUBlotsi"); },
  get "--dec-click-fx-color"() { return i18n.t("modals.UserSettingsModal.kolirEfektuNatyskannia"); },
  get "--dec-font-src"() { return i18n.t("modals.UserSettingsModal.dzhereloShryftu"); },
  get "--font-family"() { return i18n.t("modals.UserSettingsModal.shryftVkladenykhElementiv"); },
  get fontFamily() { return i18n.t("modals.UserSettingsModal.shryft"); },
  get "--dec-react"() { return i18n.t("modals.UserSettingsModal.zvukovaReaktsiia"); },
  get "--dec-react-color"() { return i18n.t("modals.UserSettingsModal.kolirReaktsii"); },
  get "--dec-3d"() { return i18n.t("modals.UserSettingsModal.3dKnopka"); },
  get "--dec-3d-depth"() { return i18n.t("modals.UserSettingsModal.hlybyna3d"); },
  get "--dec-3d-color"() { return i18n.t("modals.UserSettingsModal.kolir3dReber"); },
  get "--dec-3d-dir"() { return i18n.t("modals.UserSettingsModal.polozhennia3dHrani"); },
  get "--dec-3d-fill"() { return i18n.t("modals.UserSettingsModal.zalyvka3dHranei"); },
};
const formatDecoratorLogValue = (value) => {
  if (!value) return i18n.t("modals.UserSettingsModal.skynuto");
  if (/^url\(/.test(value)) return i18n.t("modals.UserSettingsModal.vlasnyiFail");
  if (value === "1") return i18n.t("modals.UserSettingsModal.uvimkneno");
  return value;
};

// Порожній, коли секція новин не змонтована (вимкнена) — тоді показуємо підказку
const NewsFeedsSlot = styled.div`
  &:empty::before {
    content: attr(data-empty);
    font-size: 12px; color: var(--s-muted);
  }
`;

// Показується лише на широких екранах, де працює перегляд поруч зі сторінкою
const WideScreenOnly = styled.div`
  display: contents;
  @media (max-width: ${FILTERS_PREVIEW_BREAKPOINT - 1}px) { display: none; }
`;

const FilterExampleCard = styled(CardExpanded)`
  @media (min-width: ${FILTERS_PREVIEW_BREAKPOINT}px) { display: none; }
`;

const FilterExampleImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
  transition: filter 0.4s ease-in-out;
`;

const CardLeft = styled.div`
  display: flex; align-items: center; gap: 14px; flex: 1;
`;

// Кожна картка має свій колір: тонований фон, рамка й легке світіння в тон іконки
const CardIconBoxBase = styled.div`
  --icon-color: ${(p) => p.$color || "var(--s-accent)"};
  width: 36px; height: 36px; min-width: 36px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: var(--icon-color);
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--icon-color) 22%, transparent),
    color-mix(in srgb, var(--icon-color) 6%, transparent)
  );
  border: 1px solid color-mix(in srgb, var(--icon-color) 35%, transparent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--icon-color) 14%, transparent);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  *:hover > & {
    transform: scale(1.06);
    box-shadow: 0 0 16px color-mix(in srgb, var(--icon-color) 30%, transparent);
  }

  & > svg { transform-origin: center; }

  [data-settings-item]:hover & > svg,
  *:hover > & > svg {
    ${(p) => iconAnimRule(p.$anim)}
  }

  @media (prefers-reduced-motion: reduce) {
    & > svg { animation: none !important; }
  }
`;

// Анімацію підбирає сама за типом іконки (див. ICON_ANIM_BY_TYPE); $anim — щоб задати вручну
const CardIconBox = ({ $anim, children, ...rest }) => (
  <CardIconBoxBase $anim={$anim ?? getIconAnim(children)} {...rest}>
    {children}
  </CardIconBoxBase>
);

const CardInfo = styled.div`display: flex; flex-direction: column;`;
const CardTitle = styled.span.attrs({ "data-settings-title": "" })`font-size: 14px; font-weight: 600; color: var(--s-text);`;
const CardDescription = styled.span`font-size: 12px; color: var(--s-muted); margin-top: 2px;`;

const CardControl = styled.div`
  display: flex; align-items: center; gap: 12px;
  @media (max-width: 550px) { width: 100%; justify-content: flex-end; }
`;

// Під-опції фільтра новин: відступ і лінія зліва; сірі й неактивні, коли фільтр вимкнено
const FilterSubGroup = styled.div`
  margin-left: 18px; padding-left: 14px;
  border-left: 2px solid rgba(249,115,22,0.35);
  display: flex; flex-direction: column; gap: 8px;
  opacity: ${(p) => (p.$disabled ? 0.45 : 1)};
  pointer-events: ${(p) => (p.$disabled ? "none" : "auto")};
  filter: ${(p) => (p.$disabled ? "grayscale(1)" : "none")};
  transition: opacity 0.2s ease, filter 0.2s ease;
  @media (max-width: 550px) { margin-left: 6px; padding-left: 10px; }
`;
const FilterSubTitle = styled.span`
  font-size: 13px; font-weight: 600; color: var(--s-text);
`;
const FilterRow = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 6px 0; border-bottom: 1px solid rgba(var(--s-ink),0.05);
  &:last-child { border-bottom: none; }
  @media (max-width: 550px) { flex-wrap: wrap; }
`;
const Segmented = styled.div`
  display: inline-flex; gap: 2px; padding: 2px; flex-shrink: 0;
  background: var(--s-seg); border: 1px solid rgba(var(--s-ink),0.1); border-radius: 6px;
`;
const SegmentBtn = styled.button`
  border: none; border-radius: 4px; padding: 4px 10px;
  font-size: 12px; font-weight: 600; font-family: inherit; cursor: pointer;
  background: ${(p) => (!p.$active ? "transparent" : p.$tone === "hide" ? "rgba(249,115,22,0.2)" : "rgba(52,211,153,0.2)")};
  color: ${(p) => (!p.$active ? "var(--s-muted)" : p.$tone === "hide" ? "var(--s-orange)" : "var(--s-green)")};
  transition: background 0.15s ease, color 0.15s ease;
  &:hover { color: var(--s-text); }
`;
const LOADER_POWERED_BY_OPTIONS = [
  { id: "full", get label() { return i18n.t("modals.UserSettingsModal.povnistiu"); } },
  { id: "icons", get label() { return i18n.t("modals.UserSettingsModal.ikonky"); } },
  { id: "hidden", get label() { return i18n.t("modals.UserSettingsModal.lysheFraza"); } },
  { id: "off", get label() { return i18n.t("modals.UserSettingsModal.vymknuty"); } },
];
const FontDownloads = styled.div`display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;`;
const FontDownloadLink = styled.a`
  display: inline-flex; align-items: center; gap: 4px;
  font-family: 'Segoe UI', system-ui, sans-serif; font-size: 11px; font-weight: 600;
  color: var(--s-accent); text-decoration: none;
  background: rgba(var(--s-accent-rgb),0.1); border: 1px solid rgba(var(--s-accent-rgb),0.3);
  border-radius: 999px; padding: 2px 10px;
  transition: background 0.15s ease;
  &:hover { background: rgba(var(--s-accent-rgb),0.22); }
  &:focus-visible { outline: 2px solid rgba(var(--s-accent-rgb),0.6); outline-offset: 2px; }
`;
const FontPackList = styled.div`display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;`;
const FontPackChip = styled.span`
  display: inline-flex; align-items: center; border-radius: 999px; overflow: hidden;
  border: 1px solid ${(p) => (p.$active ? "rgba(52,211,153,0.6)" : "rgba(var(--s-ink),0.15)")};
  background: ${(p) => (p.$active ? "rgba(52,211,153,0.15)" : "rgba(var(--s-ink),0.05)")};
  & > button {
    border: none; background: transparent; cursor: pointer; color: var(--s-text);
    font-size: 14px; padding: 4px 6px 4px 12px; max-width: 180px;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  & > button + button {
    display: grid; place-items: center; padding: 4px 10px 4px 4px;
    font-size: 12px; color: var(--s-muted);
    &:hover { color: var(--s-red); }
  }
  & > button:focus-visible { outline: 2px solid rgba(var(--s-accent-rgb),0.6); outline-offset: -2px; }
`;
const FontPackTip = styled.span`
  display: block; margin-top: 8px; font-size: 12px; color: var(--s-muted); line-height: 1.45;
  a { color: var(--s-accent); font-weight: 600; text-decoration: none; }
  a:hover { text-decoration: underline; }
`;
const WordChips = styled.div`display: flex; flex-wrap: wrap; gap: 6px;`;
// Слово — жовтий чип, правило (регулярка) — блакитний моноширинний
const WordChip = styled.span`
  display: inline-flex; align-items: center; gap: 4px; max-width: 100%;
  font-size: 12px; word-break: break-all;
  font-family: ${(p) => (p.$regex ? "Consolas, monospace" : "inherit")};
  color: ${(p) => (p.$regex ? "var(--s-blue)" : "var(--s-yellow)")};
  background: ${(p) => (p.$regex ? "rgba(96,165,250,0.1)" : "rgba(250,204,21,0.1)")};
  border: 1px solid ${(p) => (p.$regex ? "rgba(96,165,250,0.3)" : "rgba(250,204,21,0.3)")};
  border-radius: 999px; padding: 2px 4px 2px 10px;
  button {
    display: flex; border: none; background: none; color: inherit;
    cursor: pointer; padding: 2px; border-radius: 50%;
    &:hover { background: rgba(var(--s-ink),0.12); }
  }
`;

const DraftHint = styled.span`
  font-size: 12px; margin-top: -4px;
  color: ${(p) => (p.$tone === "invalid" ? "var(--s-red)" : p.$tone === "regex" ? "var(--s-green)" : "var(--s-muted)")};
`;
const RegexHelp = styled.div`
  font-size: 12px; color: var(--s-text-2); line-height: 1.5;
  background: rgba(var(--s-ink),0.03); border: 1px solid rgba(var(--s-ink),0.07);
  border-radius: 6px; padding: 8px 12px;
  p { margin: 8px 0 0; }
  code {
    font-family: Consolas, monospace; font-size: 12px; color: var(--s-blue);
    background: rgba(96,165,250,0.1); border-radius: 4px; padding: 1px 5px;
    word-break: break-all;
  }
`;
const RegexHelpToggle = styled.button`
  display: flex; align-items: center; gap: 6px; width: 100%;
  background: none; border: none; padding: 0; text-align: left;
  font: inherit; font-size: 12px; font-weight: 600; color: var(--s-accent);
  cursor: pointer; user-select: none;
  &:hover { color: var(--s-accent); }
  &:focus-visible { outline: 2px solid rgba(var(--s-accent-rgb),0.5); outline-offset: 2px; border-radius: 4px; }
`;
// Стрілка плавно повертається разом із розгортанням
const RegexHelpChevron = styled.span`
  display: flex; transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
`;
const RegexExample = styled.div`
  display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap;
  code { flex: 1; min-width: 200px; padding: 6px 8px; }
`;
const RegexLegend = styled.div`
  display: grid; grid-template-columns: max-content 1fr; gap: 6px 10px;
  align-items: baseline; margin-top: 8px;
  @media (max-width: 550px) { grid-template-columns: 1fr; span { margin-bottom: 4px; } }
`;
// Тема для персональних рекомендацій: натиснута — зелена з галочкою
const TopicChip = styled.button`
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 12px; font-family: inherit; cursor: pointer;
  border-radius: 999px; padding: 4px 10px;
  color: ${(p) => (p.$active ? "var(--s-green)" : "var(--s-text-2)")};
  background: ${(p) => (p.$active ? "rgba(52,211,153,0.15)" : "transparent")};
  border: 1px solid ${(p) => (p.$active ? "rgba(52,211,153,0.45)" : "rgba(var(--s-ink),0.15)")};
  transition: background 0.15s ease, color 0.15s ease;
  &:hover:not(:disabled) { color: var(--s-text); }
  &:disabled { cursor: default; }
  &:focus-visible { outline: 2px solid var(--s-accent); outline-offset: 2px; }
`;

const FilterNotes = styled.div`
  display: flex; flex-direction: column; gap: 4px;
  font-size: 12px; color: var(--s-muted); padding: 2px 4px;
  span { display: flex; align-items: center; gap: 6px; }
  svg { flex-shrink: 0; color: var(--s-accent); }
`;

// Приклад правила для фільтра новин і пояснення кожної його частини
const NEWS_FILTER_REGEX_EXAMPLE = String.raw`/уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\p{L})влад(?:а|и|ою)(?!\p{L})/iu`;
const NEWS_FILTER_REGEX_LEGEND = () => ([
  ["/ … /", i18n.t("modals.UserSettingsModal.pochatokIKinetsPravyla")],
  [i18n.t("modals.UserSettingsModal.uriad"), i18n.t("modals.UserSettingsModal.zvychainiLiteryShukaiutsiaIak")],
  [i18n.t("modals.UserSettingsModal.uOm"), i18n.t("modals.UserSettingsModal.hrupaVariantivUAbo")],
  ["?", i18n.t("modals.UserSettingsModal.pisliaHrupyChyLitery")],
  ["|", i18n.t("modals.UserSettingsModal.aboMizhChastynamyPravyla")],
  [String.raw`\p{L}`, i18n.t("modals.UserSettingsModal.budIakaLiteraBud")],
  [String.raw`(?<!\p{L})`, i18n.t("modals.UserSettingsModal.peredTsymMistsemNe")],
  [String.raw`(?!\p{L})`, i18n.t("modals.UserSettingsModal.pisliaTsohoMistsiaNe")],
  ["i", i18n.t("modals.UserSettingsModal.praporetsPisliaPravylaBez")],
  ["u", i18n.t("modals.UserSettingsModal.praporetsUnicodePotribenDlia")],
]);
const NEWS_FILTER_REGEX_EXTRA = () => ([
  [".", i18n.t("modals.UserSettingsModal.budIakyiOdynSymvol")],
  ["*", i18n.t("modals.UserSettingsModal.poperedniePovtoriuietsia0I")],
  ["+", i18n.t("modals.UserSettingsModal.poperedniePovtoriuietsia1I")],
  [String.raw`\s`, i18n.t("modals.UserSettingsModal.probilZbirnPL")],
  [i18n.t("modals.UserSettingsModal.aoie"), i18n.t("modals.UserSettingsModal.odynIzPerelichenykhSymvoliv")],
  [String.raw`\.`, i18n.t("modals.UserSettingsModal.samSymvolKrapkyBez")],
]);

// Toggle Switch
const ToggleWrapper = styled.div`
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; user-select: none;
`;
const ToggleStatusLabel = styled.span`
  font-size: 13px;
  color: ${(p) => (p.$checked ? "var(--s-text)" : "var(--s-muted)")};
  font-weight: 500;
`;
const SwitchPill = styled.div`
  width: 40px; height: 20px; border-radius: 10px;
  background: ${(p) => (p.$checked ? "var(--s-accent)" : "rgba(var(--s-ink),0.1)")};
  border: 1px solid ${(p) => (p.$checked ? "var(--s-accent)" : "rgba(var(--s-ink),0.3)")};
  position: relative; transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  &::after {
    content: ""; position: absolute;
    top: 2px; left: ${(p) => (p.$checked ? "22px" : "2px")};
    width: 14px; height: 14px; border-radius: 50%;
    background: ${(p) => (p.$checked ? "var(--s-on-accent)" : "#ffffff")};
    transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  }
`;

const WinSelect = styled.select`
  background: var(--s-input); color: var(--s-text);
  border: 1px solid rgba(var(--s-ink),0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; cursor: pointer; transition: all 0.15s ease;
  &:hover { background: var(--s-input-hover); border-color: rgba(var(--s-ink),0.25); }
  &:focus { border-color: var(--s-accent); box-shadow: 0 0 0 2px rgba(var(--s-accent-rgb),0.25); }
  option { background: var(--s-input); color: var(--s-text); }
`;

const WinInput = styled.input`
  background: var(--s-input); color: var(--s-text);
  border: 1px solid rgba(var(--s-ink),0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; width: 100%; box-sizing: border-box; transition: all 0.15s ease;
  &::placeholder { color: var(--s-faint); }
  &:hover { background: var(--s-input-hover); border-color: rgba(var(--s-ink),0.25); }
  &:focus { border-color: var(--s-accent); box-shadow: 0 0 0 2px rgba(var(--s-accent-rgb),0.25); }
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
  background: ${(p) => (p.$primary ? "var(--s-accent)" : p.$danger ? "rgba(196,43,28,0.15)" : "rgba(var(--s-ink),0.08)")};
  color: ${(p) => (p.$primary ? "var(--s-on-accent)" : p.$danger ? "var(--s-red)" : "var(--s-text)")};
  border: 1px solid ${(p) => (p.$primary ? "var(--s-accent)" : p.$danger ? "rgba(196,43,28,0.5)" : "rgba(var(--s-ink),0.12)")};
  border-radius: 6px; padding: 6px 16px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover {
    background: ${(p) => (p.$primary ? "var(--s-accent-hover)" : p.$danger ? "rgba(196,43,28,0.3)" : "rgba(var(--s-ink),0.15)")};
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

// Password
const PasswordStrengthBar = styled.div`
  height: 4px; border-radius: 2px;
  background-color: ${(p) => p.$color || "transparent"};
  width: ${(p) => p.$width || "0%"};
  transition: width 0.3s ease, background-color 0.3s ease; margin-top: 4px;
`;
const PasswordStrengthText = styled.span`
  font-size: 11px; color: ${(p) => p.$color || "var(--s-muted)"}; font-weight: 500; margin-top: 2px;
`;

// Footer
const WindowFooter = styled.div`
  background: var(--s-panel); border-top: 1px solid rgba(var(--s-ink),0.08);
  padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px;
  /* Телефон: угода й «Скинути сайт» одним рядком, під ними — кнопки на всю ширину */
  @media (max-width: ${MOBILE_BP}px) {
    flex-direction: column; align-items: stretch; gap: 10px;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
  }
`;
const TermsRow = styled.div`
  display: flex; align-items: center; flex-wrap: wrap; gap: 8px; font-size: 13px; color: var(--s-text-2);
  @media (max-width: ${MOBILE_BP}px) {
    flex-wrap: nowrap; gap: 6px; font-size: 12px;
    & > svg { flex-shrink: 0; }
    & > :last-child { margin-left: auto; flex-shrink: 0; }
  }
`;
const TermsLink = styled.span`color: var(--s-accent); text-decoration: underline; cursor: pointer;`;
// ── Модалка підтвердження скидання ──────────────────────────────────────────
const confirmFadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const confirmPopIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;
const ConfirmOverlay = styled.div.attrs({ "data-decorator-ignore": "true" })`
  position: fixed; inset: 0; z-index: 100003;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  animation: ${confirmFadeIn} 0.18s ease both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
const ConfirmBox = styled.div`
  width: min(440px, 100%);
  padding: 22px 22px 18px;
  border: 1px solid rgba(var(--s-ink),0.12);
  border-radius: 12px;
  background: var(--s-bg);
  color: var(--s-text);
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(var(--s-ink),0.2);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${confirmPopIn} 0.22s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
const ConfirmHeader = styled.div`
  display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
`;
const ConfirmIcon = styled.div`
  flex: 0 0 auto;
  display: grid; place-items: center;
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(196,43,28,0.18); color: var(--s-red); font-size: 19px;
`;
const ConfirmTitle = styled.h3`
  margin: 0; font-size: 17px; font-weight: 600; line-height: 1.3;
`;
const ConfirmList = styled.ul`
  list-style: none; margin: 0 0 14px; padding: 0;
  display: flex; flex-direction: column; gap: 8px;
  font-size: 13px; color: var(--s-text-2); line-height: 1.4;
  li { display: flex; align-items: flex-start; gap: 10px; }
  svg { flex: 0 0 auto; margin-top: 2px; color: var(--s-muted); }
`;
const ConfirmNote = styled.div`
  display: flex; align-items: flex-start; gap: 10px;
  padding: 10px 12px; margin-bottom: 18px;
  border-radius: 8px;
  background: rgba(var(--s-accent-rgb),0.08); border: 1px solid rgba(var(--s-accent-rgb),0.2);
  font-size: 12px; color: var(--s-accent-soft); line-height: 1.45;
  svg { flex: 0 0 auto; margin-top: 1px; color: var(--s-accent); }
`;
const ConfirmActions = styled.div`
  display: flex; justify-content: flex-end; gap: 10px;
`;
const ConfirmDangerButton = styled(WinButton)`
  background: #c42b1c; border-color: #c42b1c; color: #ffffff;
  &:hover:not(:disabled) { background: #d83b2b; border-color: #d83b2b; }
  &:focus-visible { outline: 2px solid var(--s-red); outline-offset: 2px; }
`;

const ResetConfirmDialog = ({ onConfirm, onCancel, loading }) => {
  const cancelRef = useRef(null);
  useEffect(() => {
    // Фокус на безпечній кнопці: випадковий Enter нічого не зітре
    cancelRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape" && !loading) onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel, loading]);

  return (
    <ConfirmOverlay
      // pageActivity.js ставить на паузу всі анімації поза активною модалкою, а сам
      // позначає лише елемент з aria-modal (картку). Без цього атрибута підкладка
      // застигала на першому кадрі появи (opacity: 0) — і модалку не було видно.
      data-active-overlay=""
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !loading) onCancel();
      }}
    >
      <ConfirmBox
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="reset-confirm-title"
        aria-describedby="reset-confirm-list"
      >
        <ConfirmHeader>
          <ConfirmIcon><FiRotateCcw aria-hidden="true" /></ConfirmIcon>
          <ConfirmTitle id="reset-confirm-title">{i18n.t("modals.UserSettingsModal.skynutySaitDoZavodskykh")}</ConfirmTitle>
        </ConfirmHeader>
        <ConfirmList id="reset-confirm-list">
          <li><FiUser aria-hidden="true" /> {i18n.t("modals.UserSettingsModal.vyityZAkauntaNa")}</li>
          <li><FiImage aria-hidden="true" /> {i18n.t("modals.UserSettingsModal.stertyTemuFonyMuzyku")}</li>
          <li><FiTrash2 aria-hidden="true" /> {i18n.t("modals.UserSettingsModal.ochystytyKeshIPerezavantazhyty")}</li>
        </ConfirmList>
        <ConfirmNote>
          <FiCloud aria-hidden="true" />
          <span>{i18n.t("modals.UserSettingsModal.akauntIKhmarniDani")}</span>
        </ConfirmNote>
        <ConfirmActions>
          <WinButton ref={cancelRef} type="button" onClick={onCancel} disabled={loading}>
            {i18n.t("modals.UserSettingsModal.skasuvaty")}
          </WinButton>
          <ConfirmDangerButton type="button" onClick={onConfirm} disabled={loading}>
            {loading ? i18n.t("modals.UserSettingsModal.skydaiemo") : i18n.t("modals.UserSettingsModal.skynuty")}
          </ConfirmDangerButton>
        </ConfirmActions>
      </ConfirmBox>
    </ConfirmOverlay>
  );
};

// ── Режим налаштувань: кнопка в бічній панелі, меню та вибір при першому відкритті ──
const LevelIconBox = styled.span`
  width: 26px; height: 26px; border-radius: 7px; flex-shrink: 0;
  display: grid; place-items: center; font-size: 16px; color: var(--lvl);
  background: color-mix(in srgb, var(--lvl) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--lvl) 35%, transparent);
  ${(p) => p.$plain && css`
    width: 28px; height: 28px; font-size: 24px;
    background: none; border: none;
  `}
`;
const LevelIcon = ({ level, plain = false }) => {
  const Icon = LEVEL_ICONS[level] || GiSun;
  return (
    <LevelIconBox aria-hidden="true" $plain={plain}>
      <Icon />
    </LevelIconBox>
  );
};

const LevelButton = styled.button`
  --lvl: ${(p) => p.$color};
  margin-top: auto; flex-shrink: 0; box-sizing: border-box; min-width: 0;
  display: flex; align-items: center; gap: 8px; width: 100%;
  padding: 8px 8px 8px 10px; border-radius: 8px; cursor: pointer; text-align: left;
  font: inherit; color: var(--s-text);
  background: color-mix(in srgb, var(--lvl) 9%, rgba(var(--s-ink),0.03));
  border: 1px solid color-mix(in srgb, var(--lvl) 32%, transparent);
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover, &[aria-expanded="true"] {
    background: color-mix(in srgb, var(--lvl) 17%, rgba(var(--s-ink),0.03));
    border-color: color-mix(in srgb, var(--lvl) 50%, transparent);
  }
  &:focus-visible { outline: 2px solid rgba(var(--s-accent-rgb),0.6); outline-offset: 2px; }
  & > svg { margin-left: auto; flex-shrink: 0; color: var(--s-muted); font-size: 15px; }
  @media (max-width: 768px) { margin-top: 0; padding: 7px 8px 7px 10px; }
`;
const LevelButtonText = styled.span`
  flex: 1; display: flex; flex-direction: column; min-width: 0; line-height: 1.3;
  small, b { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  small { font-size: 11px; color: var(--s-muted); }
  small em { font-style: normal; color: var(--lvl); }
  b { font-size: 13px; font-weight: 600; }
`;

const LevelMenuBox = styled.div.attrs({ "data-decorator-ignore": "true" })`
  position: fixed; z-index: 100002;
  padding: 4px; border-radius: 10px;
  background: var(--s-menu); color: var(--s-text);
  border: 1px solid rgba(var(--s-ink),0.12);
  box-shadow: 0 16px 40px rgba(0,0,0,0.6), 0 0 1px rgba(var(--s-ink),0.2);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${confirmPopIn} 0.16s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
const LevelMenuHead = styled.div`
  padding: 5px 8px 4px; font-size: 12px; font-weight: 600; color: var(--s-muted);
`;
const LevelMenuItem = styled.button`
  --lvl: ${(p) => p.$color};
  display: flex; align-items: center; gap: 10px; width: 100%;
  padding: 6px 10px 6px 8px; border-radius: 8px;
  color: var(--s-text); font: inherit; text-align: left; cursor: pointer;
  background: ${(p) => (p.$active ? "color-mix(in srgb, var(--lvl) 12%, transparent)" : "transparent")};
  border: 1px solid ${(p) => (p.$active ? "color-mix(in srgb, var(--lvl) 60%, transparent)" : "transparent")};
  transition: background 0.15s ease, border-color 0.15s ease;
  & + & { margin-top: 1px; }
  &:hover, &:focus-visible {
    outline: none;
    ${(p) => !p.$active && css`background: rgba(var(--s-ink),0.07);`}
  }
  &:focus-visible { border-color: color-mix(in srgb, var(--lvl) 60%, transparent); }
  b { display: block; font-size: 14px; font-weight: 500; }
  b em { font-style: normal; color: var(--lvl); }
  small { display: block; margin-top: 1px; font-size: 12px; color: var(--s-muted); line-height: 1.35; }
  small strong { color: var(--s-text-2); font-weight: 500; }
`;
// Підпис під варіантами: як часто змінюються версії налаштувань
const LevelUpdateNote = styled.div`
  margin-top: 4px; padding: 6px 8px 3px;
  border-top: 1px solid rgba(var(--s-ink),0.08);
  font-size: 12px; color: var(--s-muted); line-height: 1.45;
`;

const LEVEL_UPDATE_NOTE = () => (i18n.t("modals.UserSettingsModal.versiiNalashtuvanZminiuiutsiaRaz"));

// Меню на кшталт вибору моделі: обраний режим обведений; 1/2/3 — швидкі клавіші
const LevelMenu = ({ anchorRef, level, isGuest = false, onSelect, onClose }) => {
  const boxRef = useRef(null);
  const [pos, setPos] = useState(null);

  // Кнопка внизу бічної панелі — меню відкривається вгору; на телефоні кнопка вгорі — вниз
  useLayoutEffect(() => {
    const place = () => {
      const r = anchorRef.current?.getBoundingClientRect();
      if (!r) return;
      const width = Math.min(340, window.innerWidth - 16);
      const left = Math.max(8, Math.min(r.left, window.innerWidth - width - 8));
      setPos(
        r.top > window.innerHeight / 2
          ? { left, width, bottom: window.innerHeight - r.top + 6 }
          : { left, width, top: r.bottom + 6 },
      );
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [anchorRef]);

  useEffect(() => {
    const items = () => [...(boxRef.current?.querySelectorAll("[data-level-item]") || [])];
    const frame = requestAnimationFrame(() => {
      (items().find((el) => el.getAttribute("aria-checked") === "true") || items()[0])?.focus();
    });
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose(true);
        return;
      }
      if (e.key === "Tab") {
        onClose(false);
        return;
      }
      const n = Number(e.key);
      if (n >= 1 && n <= SETTINGS_LEVELS.length && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        onSelect(SETTINGS_LEVELS[n - 1].key);
        return;
      }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const list = items();
        const i = list.indexOf(document.activeElement);
        list[(i + (e.key === "ArrowDown" ? 1 : -1) + list.length) % list.length]?.focus();
      }
    };
    const onDown = (e) => {
      if (!boxRef.current?.contains(e.target) && !anchorRef.current?.contains(e.target)) onClose(false);
    };
    window.addEventListener("keydown", onKey, true);
    document.addEventListener("mousedown", onDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey, true);
      document.removeEventListener("mousedown", onDown);
    };
  }, [anchorRef, onClose, onSelect]);

  return createPortal(
    <LevelMenuBox
      ref={boxRef}
      role="menu"
      aria-label={i18n.t("modals.UserSettingsModal.rezhymNalashtuvan")}
      data-active-overlay=""
      style={pos || { visibility: "hidden" }}
    >
      <LevelMenuHead>{i18n.t("modals.UserSettingsModal.stykhiia")} {STYKHIIA_VERSION} {i18n.t("modals.UserSettingsModal.rezhymNalashtuvan2")}</LevelMenuHead>
      {SETTINGS_LEVELS.map(({ key, label, star, story, about, color }) => {
        const isActive = key === level;
        return (
          <LevelMenuItem
            key={key}
            type="button"
            role="menuitemradio"
            aria-checked={isActive}
            data-level-item=""
            $color={color}
            $active={isActive}
            onClick={() => onSelect(key)}
          >
            <LevelIcon level={key} plain />
            <span>
              <b>{label} · <em>{star}</em></b>
              <small>{story} <strong>{levelCountLabel(key, isGuest)} · {about}</strong></small>
            </span>
          </LevelMenuItem>
        );
      })}
      <LevelUpdateNote>{LEVEL_UPDATE_NOTE()}</LevelUpdateNote>
    </LevelMenuBox>,
    document.body,
  );
};

const OnboardingSub = styled.p`
  margin: 4px 0 0; font-size: 13px; color: var(--s-muted); line-height: 1.45;
`;
const OnboardingList = styled.div`display: flex; flex-direction: column; gap: 6px;`;
const OnboardingOption = styled.button`
  --lvl: ${(p) => p.$color};
  display: flex; align-items: center; gap: 10px; width: 100%;
  padding: 8px 12px 8px 10px; border-radius: 10px; cursor: pointer; text-align: left;
  font: inherit; color: var(--s-text);
  background: rgba(var(--s-ink),0.03); border: 1px solid rgba(var(--s-ink),0.1);
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover, &:focus-visible {
    background: color-mix(in srgb, var(--lvl) 12%, transparent);
    border-color: color-mix(in srgb, var(--lvl) 50%, transparent);
    outline: none;
  }
  b { font-size: 14px; font-weight: 600; line-height: 1.35; }
  b em { font-style: normal; color: var(--lvl); }
  small { display: block; margin-top: 2px; font-size: 12.5px; color: var(--s-muted); line-height: 1.35; }
  small strong { color: var(--s-text-2); font-weight: 500; }
`;
const OnboardingBadge = styled.span`
  display: inline-block; margin-left: 6px; padding: 1px 7px; border-radius: 999px;
  font-size: 11px; font-weight: 600; vertical-align: 1px; white-space: nowrap;
  color: var(--lvl);
  background: color-mix(in srgb, var(--lvl) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--lvl) 35%, transparent);
`;

// Перше відкриття «Параметрів»: який режим обрати. Закрили без вибору — лишаємо «Простий».
const LevelOnboarding = ({ isGuest = false, onChoose }) => {
  const firstRef = useRef(null);
  useEffect(() => {
    firstRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onChoose(DEFAULT_SETTINGS_LEVEL);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onChoose]);

  return (
    <ConfirmOverlay
      data-active-overlay=""
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onChoose(DEFAULT_SETTINGS_LEVEL);
      }}
    >
      <ConfirmBox
        role="dialog"
        aria-modal="true"
        aria-labelledby="level-onboarding-title"
        style={{ width: "min(500px, 100%)" }}
      >
        <ConfirmHeader style={{ alignItems: "flex-start" }}>
          <ConfirmIcon style={{ background: "rgba(var(--s-accent-rgb),0.16)", color: "var(--s-accent)" }}>
            <FiLayers aria-hidden="true" />
          </ConfirmIcon>
          <div>
            <ConfirmTitle id="level-onboarding-title">{i18n.t("modals.UserSettingsModal.iakyiRezhymNalashtuvanObraty")}</ConfirmTitle>
            <OnboardingSub>
              {i18n.t("modals.UserSettingsModal.vidRezhymuZalezhytSkilky")}
            </OnboardingSub>
          </div>
        </ConfirmHeader>
        <OnboardingList>
          {SETTINGS_LEVELS.map(({ key, label, star, story, about, color }, i) => (
            <OnboardingOption
              key={key}
              ref={i === 0 ? firstRef : undefined}
              type="button"
              $color={color}
              onClick={() => onChoose(key)}
            >
              <LevelIcon level={key} plain />
              <span>
                <b>{i18n.t("modals.UserSettingsModal.stykhiia")} {STYKHIIA_VERSION} · {label} · <em>{star}</em></b>
                {key === DEFAULT_SETTINGS_LEVEL && <OnboardingBadge>{i18n.t("modals.UserSettingsModal.dliaPochatku")}</OnboardingBadge>}
                <small>{story} <strong>{levelCountLabel(key, isGuest)} · {about}</strong></small>
              </span>
            </OnboardingOption>
          ))}
        </OnboardingList>
        <LevelUpdateNote style={{ marginTop: 10, padding: "8px 2px 0" }}>{LEVEL_UPDATE_NOTE()}</LevelUpdateNote>
      </ConfirmBox>
    </ConfirmOverlay>
  );
};

// Тиха «небезпечна» кнопка поруч з угодою: не кричить, але помітна при наведенні
const ResetLink = styled.button`
  display: inline-flex; align-items: center; gap: 5px;
  margin-left: 6px; padding: 3px 9px;
  border: 1px solid rgba(255,107,107,0.35); border-radius: 6px;
  background: transparent; color: var(--s-red);
  font: inherit; font-size: 12px; cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  &:hover:not(:disabled) { background: rgba(196,43,28,0.25); border-color: rgba(255,107,107,0.7); color: var(--s-text); }
  &:focus-visible { outline: 2px solid var(--s-red); outline-offset: 2px; }
  &:disabled { opacity: 0.6; cursor: progress; }
  @media (max-width: ${MOBILE_BP}px) { margin-left: auto; white-space: nowrap; flex-shrink: 0; }
`;
const FooterButtons = styled.div`
  display: flex; align-items: center; gap: 10px;
  @media (max-width: ${MOBILE_BP}px) {
    & > * { flex: 1; min-height: 40px; }
  }
`;

// Music components
const MusicScrollList = styled.div`
  max-height: 200px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(var(--s-accent-rgb),0.3); border-radius: 2px; }
`;

const TrackRow = styled.div`
  display: flex; align-items: center; gap: 8px; padding: 6px 8px;
  border-radius: 6px; cursor: pointer;
  background: ${(p) => (p.$active ? "rgba(var(--s-accent-rgb),0.12)" : "transparent")};
  border: 1px solid ${(p) => (p.$active ? "rgba(var(--s-accent-rgb),0.3)" : "transparent")};
  transition: all 0.15s ease;
  &:hover { background: rgba(var(--s-ink),0.05); }
`;

const TrackImg = styled.img`
  width: 32px; height: 32px; border-radius: 4px; object-fit: cover; flex-shrink: 0;
`;

const TrackInfo = styled.div`flex: 1; min-width: 0;`;
const TrackName = styled.div`
  font-size: 12px; font-weight: 500; color: var(--s-text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;
const TrackStatus = styled.div`font-size: 10px; color: var(--s-muted); margin-top: 1px;`;

const EqBar = styled.div`
  width: 2px; background: var(--s-accent); border-radius: 1px;
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
  width: 100%; accent-color: var(--s-accent); cursor: pointer;
  &::-webkit-slider-thumb { background: var(--s-accent); }
`;

const CustomSlotCard = styled.div`
  background: ${(p) => (p.$hasFile ? "rgba(var(--s-accent-rgb),0.06)" : "rgba(var(--s-ink),0.03)")};
  border: 1px solid ${(p) => (p.$hasFile ? "rgba(var(--s-accent-rgb),0.2)" : "rgba(var(--s-ink),0.06)")};
  border-radius: 8px; padding: 10px 12px;
  display: flex; align-items: center; gap: 10px;
`;

const SlotName = styled.div`
  flex: 1; font-size: 12px; color: var(--s-text-2);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;
const SlotActions = styled.div`display: flex; gap: 6px; flex-shrink: 0;`;

const IconBtn = styled.button`
  background: rgba(var(--s-ink),0.06); border: 1px solid rgba(var(--s-ink),0.1);
  color: var(--s-text); width: 28px; height: 28px; border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 13px; transition: all 0.15s ease;
  &:hover { background: ${(p) => (p.$danger ? "rgba(196,43,28,0.3)" : "var(--s-accent)")}; color: ${(p) => (p.$danger ? "var(--s-red)" : "var(--s-on-accent)")}; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`;

// Filter Grid Components
const FilterGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 6px;
`;

const FilterCardBtn = styled.button`
  background: ${(p) => (p.$active ? "rgba(var(--s-accent-rgb),0.15)" : "rgba(var(--s-ink),0.04)")};
  color: ${(p) => (p.$active ? "var(--s-accent)" : "var(--s-text)")};
  border: 1px solid ${(p) => (p.$active ? "var(--s-accent)" : "rgba(var(--s-ink),0.1)")};
  border-radius: 6px; padding: 8px 10px; font-size: 12px; font-weight: 500;
  cursor: pointer; transition: all 0.15s ease; text-align: center;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  &:hover { background: rgba(var(--s-accent-rgb),0.1); border-color: rgba(var(--s-accent-rgb),0.3); color: var(--s-text); }
`;

const PresetGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 6px;
`;

const CustomPresetCard = styled.div`
  display: flex; align-items: center; gap: 4px;
  background: rgba(var(--s-ink),0.04); border: 1px solid rgba(122,252,255,0.2);
  border-radius: 6px; padding: 4px 6px; animation: ${appearScale} 0.2s ease-out forwards;
`;

// ── Main Component ───────────────────────────────────────────────────────────

const UserSettingsModal = ({
  onClose,
  user,
  onUpdate,
  weatherCardLayout = [],
  isDarkMode = false,
  onToggleTheme = () => {},
  onUpdateLayout,
  // Site sections props
  siteSections = [],
  moveSiteSection = () => {},
  sectionThemes = {},
  hiddenSections = [],
  onToggleSectionVisibility = () => {},
  onToggleSectionTheme = () => {},
  onResetSectionThemes = () => {},
  // Modes & strategy props
  loadingStrategy = "eager",
  onSetLoadingStrategy = () => {},
  isStickyBgMode = false,
  onToggleStickyBg = () => {},
  // Бета-функції: GPS-картку перемикає App (може спитати, яку картку прибрати)
  onToggleHideGpsCard = (hidden) => setBetaOn("hideGpsCard", hidden),
  // bg music props from App.jsx
  bgMusicEnabled, setBgMusicEnabled,
  bgMusicSource, setBgMusicSource,
  bgMusicVolume, setBgMusicVolume,
  bgMusicSpeed = 1, setBgMusicSpeed = () => {},
  bgMusicMode, setBgMusicMode,
  bgMusicShuffle, setBgMusicShuffle,
  customBgTracks, setCustomBgTracks,
  libraryBgSettings = {}, setLibraryBgSettings = () => {},
  activeBgTrackId, setActiveBgTrackId = () => {},
  onResetBgPosition = () => {},
  onSkipBgTrack = () => {},
  sfxVolume = 0.2, setSfxVolume = () => {},
  bgAudioRef, bgAudioRef2,
  onLogout = () => {},
  initialTab = null,
}) => {
  // Тема «Параметрів» (і порталів у <body>: меню режимів, діалоги) — поки вікно відкрите
  useEffect(() => {
    document.body.dataset.settingsTheme = isDarkMode ? "dark" : "light";
    return () => { delete document.body.dataset.settingsTheme; };
  }, [isDarkMode]);

  // Поки «Параметри» відкриті — без скролбару сайту. Скролиться html, а в дзеркальному
  // режимі (App.css, html.site-mirrored) — body, тож ховаємо на обох і повертаємо як було
  useEffect(() => {
    const { documentElement: html, body } = document;
    const prev = [html.style.overflow, body.style.overflow];
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev[0];
      body.style.overflow = prev[1];
    };
  }, []);

  const isGuest = !user;
  const dispatch = useDispatch();
  const isHideGpsCardBeta = useBeta("hideGpsCard");
  const isDragCardsBeta = useBeta("dragCards");
  const isVoiceBeta = useBeta("voiceForecast");
  const tutorial = useTutorial();
  const [accentColor, setAccentColor] = useAccentColor();
  const [activeTab, setActiveTab] = useState(initialTab || "personalization");
  // Загальний пошук: поки рядок не порожній, показуються всі вкладки, відфільтровані за запитом
  const [searchQuery, setSearchQuery] = useState("");

  // Режим налаштувань (Простий / Середній / Професійний) — живе в prefsStore цього браузера.
  const settingsLevel = useSettingsLevel();
  const loaderPoweredBy = usePrefValue(LOADER_POWERED_BY_KEY, "full");
  // Загальне автоперемикання вкладок карток погоди ({ on, seconds })
  const tabAutoplay = parseTabAutoplay(usePrefValue(TAB_AUTOPLAY_KEY, null)) || TAB_AUTOPLAY_DEFAULT;
  // Відкрите вікно стилю ліній для всіх карток: "hourly" | "daily" | null
  const [globalStyleChart, setGlobalStyleChart] = useState(null);
  // «Підглядання»: розділ відкрили напряму (з новин — до «Моїх стрічок», або з пошуку), а він з важчого режиму.
  // Показуємо його з підказкою «Перемкнути?», сам режим не змінюємо.
  const [peekLevel, setPeekLevel] = useState(() => {
    if (!initialTab) return null;
    return maxLevel(TAB_LEVEL[initialTab], initialTab === "siteSections" ? "medium" : "simple");
  });
  const viewLevel = peekLevel ? maxLevel(settingsLevel, peekLevel) : settingsLevel;

  // Слот для панелі «Мої стрічки»: її рендерить News.jsx через портал (там уся логіка стрічок).
  // Елемент кладемо у window, щоб News підхопив його навіть якщо змонтується пізніше.
  const newsFeedsSlotRef = useCallback(
    (el) => {
      window.__stykhiiaNewsFeedsSlot = el;
      window.dispatchEvent(new CustomEvent("stykhiia:news-feeds-slot", { detail: el }));
      // Відкрили з секції новин — прокручуємо одразу до стрічок
      if (el && initialTab === "siteSections") {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "center" }));
      }
    },
    [initialTab],
  );
  const [isClosing, setIsClosing] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showKatScene, setShowKatScene] = useState(false);

  // Decorator hook
  const {
    viewMode = "view",
    setViewMode = () => {},
    changeLog = [],
    decorItems = [],
    undoChange = () => {},
    resetAll = () => {},
    isPersistent = false,
    setIsPersistent = () => {},
    activePreset = 0,
    switchPreset = () => {},
    showOriginal = false,
    setShowOriginal = () => {},
    presetChangeCounts = [],
  } = useDecorator();

  // Visual filters hook
  const {
    visualConfig,
    setVisualConfig,
    resetFilters: onResetFilters,
    customPresets = [],
    saveCustomPreset: onSavePreset,
    deleteCustomPreset: onDeletePreset,
    updateCustomPresetName: onUpdatePresetName,
  } = useVisualFilters(user);

  // Активні фільтри комбінації: або список combo, або один звичайний фільтр
  const comboIds = visualConfig.filterType === "combo"
    ? (visualConfig.combo || [])
    : COMBINABLE_FILTERS.some((f) => f.id === visualConfig.filterType) ? [visualConfig.filterType] : [];

  const toggleComboFilter = (id) => {
    const next = comboIds.includes(id) ? comboIds.filter((x) => x !== id) : [...comboIds, id];
    setVisualConfig((p) => {
      const rest = { ...p };
      delete rest.combo;
      if (next.length === 0) return { ...rest, filterType: "none" };
      if (next.length === 1) return { ...rest, filterType: next[0] };
      return { ...rest, filterType: "combo", combo: next };
    });
  };

  const [newPresetName, setNewPresetName] = useState("");

  // ── Google Avatar Persistence ────────────────────────────────────────────
  const [savedGoogleAvatar, setSavedGoogleAvatar] = useState(() => {
    if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("http")) {
      return user.avatar;
    }
    if (user?.photoURL && typeof user.photoURL === "string" && user.photoURL.startsWith("http")) {
      return user.photoURL;
    }
    try { return getPref("saved_google_avatar") || null; } catch { return null; }
  });

  const animationsDisabled = useAnimationsDisabled();
  const animationsAutoDisabled = useAnimationsAutoDisabled();

  // Натяк «прокрутіть нижче»: показується, поки під видимою частиною є ще вміст.
  // label — назва наступного прихованого підрозділу (напр. «Застосунки Стихії»).
  const mainContentRef = useRef(null);
  const [scrollHint, setScrollHint] = useState(null); // null | { label: string | null }

  const findNextHiddenHeading = (el) => {
    const visibleBottom = el.getBoundingClientRect().bottom - 40;
    return [...el.querySelectorAll("[data-scroll-hint]")].find(
      (h) => h.getBoundingClientRect().top > visibleBottom,
    );
  };

  useEffect(() => {
    const el = mainContentRef.current;
    if (!el) return undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const remaining = el.scrollHeight - el.clientHeight - el.scrollTop;
        if (remaining <= 24) {
          setScrollHint(null);
          return;
        }
        const label = findNextHiddenHeading(el)?.textContent?.trim() || null;
        setScrollHint((prev) => (prev && prev.label === label ? prev : { label }));
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    // Розмір вмісту змінюється при перемиканні вкладок і розгортанні блоків
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);
    [...el.children].forEach((child) => resizeObserver.observe(child));
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, [activeTab, searchQuery]);

  const scrollToHint = () => {
    const el = mainContentRef.current;
    if (!el) return;
    const heading = findNextHiddenHeading(el);
    const top = heading
      ? el.scrollTop + heading.getBoundingClientRect().top - el.getBoundingClientRect().top - 12
      : el.scrollTop + el.clientHeight * 0.8;
    el.scrollTo({ top, behavior: animationsDisabled ? "auto" : "smooth" });
  };

  const [isAdAntiHeaderEnabled, setIsAdAntiHeaderEnabled] = useState(() => {
    try {
      return getPref("ad_antiheader_enabled") !== "false";
    } catch {
      return true;
    }
  });

  const toggleAdAntiHeader = () => {
    const nextVal = !isAdAntiHeaderEnabled;
    setIsAdAntiHeaderEnabled(nextVal);
    try {
      setPref("ad_antiheader_enabled", nextVal ? "true" : "false");
    } catch {}
  };

  const [isSiteContextMenuEnabled, setIsSiteContextMenuEnabled] = useState(() => {
    try {
      return getPref("site_context_menu_enabled") === "true";
    } catch {
      return false;
    }
  });

  const toggleSiteContextMenu = () => {
    const nextVal = !isSiteContextMenuEnabled;
    setIsSiteContextMenuEnabled(nextVal);
    try {
      setPref("site_context_menu_enabled", nextVal ? "true" : "false");
    } catch {}
  };

  // Вкладка фільтрів: вікно зсувається праворуч і вужчає, щоб було видно сторінку
  const [isFiltersPreviewOn, setIsFiltersPreviewOn] = useState(() => {
    try {
      return getPref("settings_filters_preview") !== "false";
    } catch {
      return true;
    }
  });

  const toggleFiltersPreview = () => {
    const nextVal = !isFiltersPreviewOn;
    setIsFiltersPreviewOn(nextVal);
    try { setPref("settings_filters_preview", nextVal ? "true" : "false"); } catch {}
  };

  const [filtersPreviewWidth, setFiltersPreviewWidth] = useState(() => {
    try {
      const saved = Number(getPref("settings_filters_preview_percent"));
      return saved >= FILTERS_PREVIEW_MIN_WIDTH && saved <= FILTERS_PREVIEW_MAX_WIDTH ? saved : FILTERS_PREVIEW_DEFAULT_WIDTH;
    } catch {
      return FILTERS_PREVIEW_DEFAULT_WIDTH;
    }
  });

  const changeFiltersPreviewWidth = (width) => {
    setFiltersPreviewWidth(width);
    try { setPref("settings_filters_preview_percent", String(width)); } catch {}
  };

  const [isNewsFilterOn, setIsNewsFilterOn] = useState(isNewsFilterEnabled);

  // Синхронізація фільтра через акаунт — тим самим перемикачем, що й заглушені новини
  const queueNewsFilterSync = () => {
    if (user?.uid && user?.syncMutedNews) scheduleNewsFilterSync(user.uid);
  };
  // Закрили налаштування — відкладені зміни фільтра відправляємо одразу
  useEffect(() => () => flushNewsFilterSync(), []);

  // Вікові обмеження фільтра: показ тем — 18+, казино та ставки — 22+ (GAMBLING_MIN_AGE).
  // Вимкнений фільтр показує все, зокрема казино, тому вимкнення — теж 22+.
  const [requestAge, ageGate] = useAgeGate();

  const toggleNewsFilter = async () => {
    const nextVal = !isNewsFilterOn;
    if (!nextVal) {
      const ok = await requestAge(
        GAMBLING_MIN_AGE,
        i18n.t("modals.UserSettingsModal.bezFiltraUStrichku", { GAMBLING_MIN_AGE: GAMBLING_MIN_AGE }),
      );
      if (!ok) return;
    }
    setIsNewsFilterOn(nextVal);
    setNewsFilterEnabled(nextVal);
    queueNewsFilterSync();
  };

  // Під-опції фільтра новин (зберігаються одразу, як і сам фільтр)
  const [isNewsFilterSoft, setIsNewsFilterSoft] = useState(isNewsFilterSoftMode);
  const [newsFilterModes, setNewsFilterModes] = useState(getNewsFilterCategoryModes);
  const [newsFilterWords, setNewsFilterWords] = useState(getNewsFilterCustomWords);
  const [newsFilterWordDraft, setNewsFilterWordDraft] = useState("");
  const [isRegexHelpOpen, setIsRegexHelpOpen] = useState(false);
  // Перевірка запису в полі: звичайне слово, коректне правило /.../ чи помилка
  const newsFilterDraftEntry = newsFilterWordDraft.trim() ? parseNewsFilterEntry(newsFilterWordDraft) : null;

  const toggleNewsFilterSoft = () => {
    const nextVal = !isNewsFilterSoft;
    setIsNewsFilterSoft(nextVal);
    setNewsFilterSoftMode(nextVal);
    queueNewsFilterSync();
  };

  // Ретельна перевірка всього опису — лише для цього браузера, у хмару не йде (див. contentFilter.js)
  const [isNewsFilterThoroughOn, setIsNewsFilterThoroughOn] = useState(isNewsFilterThorough);
  const toggleNewsFilterThorough = () => {
    const nextVal = !isNewsFilterThoroughOn;
    setIsNewsFilterThoroughOn(nextVal);
    setNewsFilterThorough(nextVal);
  };

  const setNewsFilterCategoryMode = async (key, mode) => {
    if (newsFilterModes[key] === mode) return;
    if (mode === "show") {
      const label = NEWS_FILTER_CATEGORIES.find((c) => c.key === key)?.label || key;
      const ok = key === "gambling"
        ? await requestAge(GAMBLING_MIN_AGE, i18n.t("modals.UserSettingsModal.novynyProKazynoTa", { GAMBLING_MIN_AGE: GAMBLING_MIN_AGE }))
        : await requestAge(18, i18n.t("modals.UserSettingsModal.temaMozheMistytyNepryiemnyi", { label: label }));
      if (!ok) return;
    }
    const next = { ...newsFilterModes, [key]: mode };
    setNewsFilterModes(next);
    setNewsFilterCategoryModes(next);
    queueNewsFilterSync();
  };

  const addNewsFilterWord = () => {
    const word = newsFilterWordDraft.trim().slice(0, NEWS_FILTER_MAX_WORD_LENGTH);
    if (!word) return;
    if (newsFilterWords.length >= NEWS_FILTER_MAX_WORDS) return; // кнопка вже неактивна
    if (parseNewsFilterEntry(word).kind === "invalid") return; // помилку видно під полем
    if (newsFilterWords.some((w) => w.toLowerCase() === word.toLowerCase())) {
      setNewsFilterWordDraft("");
      return;
    }
    const next = [...newsFilterWords, word];
    setNewsFilterWords(next);
    setNewsFilterCustomWords(next);
    setNewsFilterWordDraft("");
    queueNewsFilterSync();
  };

  const removeNewsFilterWord = (word) => {
    const next = newsFilterWords.filter((w) => w !== word);
    setNewsFilterWords(next);
    setNewsFilterCustomWords(next);
    queueNewsFilterSync();
  };

  // ── Новини: термінові новини, рекомендації (зберігаються одразу) ──

  const [isUrgentNotifyOn, setIsUrgentNotifyOn] = useState(isUrgentNotifyEnabled);
  // "push" — приходять і коли сайт закрито; "local" — лише поки Стихія відкрита
  const [urgentDelivery, setUrgentDelivery] = useState(() => (isPushSubscribed() ? "push" : "local"));
  const [isUrgentBusy, setIsUrgentBusy] = useState(false);
  const [urgentWords, setUrgentWordsState] = useState(getUrgentWords);
  const [urgentWordDraft, setUrgentWordDraft] = useState("");
  // Спільне для термінових новин і погоди: дозвіл браузера + підписка на push.
  // Вимкнення не відписує напряму — initPushNotifications (App.jsx) відпише,
  // лише коли вимкнуто обидва види сповіщень.
  const toggleEmergencyKind = async (isOn, setLocal, savePref) => {
    if (isUrgentBusy) return;
    if (isOn) {
      setLocal(false);
      savePref(false);
      if (!wantsPush()) setUrgentDelivery("local");
      return;
    }
    if (!("Notification" in window)) {
      alert(i18n.t("modals.UserSettingsModal.tseiBrauzerNePidtrymuie"));
      return;
    }
    let permission = Notification.permission;
    if (permission === "default") permission = await Notification.requestPermission();
    if (permission !== "granted") {
      alert(i18n.t("modals.UserSettingsModal.spovishchenniaZablokovaniVNalashtuvannia"));
      return;
    }
    setLocal(true);
    savePref(true);
    // Справжній push (FCM): приходить і тоді, коли сайт закрито
    if (!isPushSupported()) return;
    if (isPushSubscribed()) {
      setUrgentDelivery("push"); // профіль на сервері оновить initPushNotifications
      return;
    }
    setIsUrgentBusy(true);
    const ok = await subscribePush();
    setIsUrgentBusy(false);
    setUrgentDelivery(ok ? "push" : "local");
    if (!ok && getLastPushError() === "limit") {
      alert(i18n.t("modals.UserSettingsModal.sohodniZabahatoNovykhPidpysok"));
    } else if (!ok && getLastPushError() === "captcha") {
      alert(i18n.t("modals.UserSettingsModal.neVdalosiaProityPerevirku"));
    }
  };
  const toggleUrgentNotify = () =>
    toggleEmergencyKind(isUrgentNotifyOn, setIsUrgentNotifyOn, setUrgentNotifyEnabled);

  // Небезпечна погода, пауза між сповіщеннями й ліміт на добу
  const [isWeatherAlertsOn, setIsWeatherAlertsOn] = useState(isWeatherAlertsEnabled);
  const toggleWeatherAlerts = () =>
    toggleEmergencyKind(isWeatherAlertsOn, setIsWeatherAlertsOn, setWeatherAlertsEnabled);
  // Ранковий прогноз о 7:00 — лише справжній push: о сьомій ранку Стихія зазвичай закрита
  const [isMorningOn, setIsMorningOn] = useState(isMorningBriefEnabled);
  const toggleMorningBrief = async () => {
    if (isUrgentBusy) return;
    if (isMorningOn) {
      setIsMorningOn(false);
      setMorningBriefEnabled(false);
      if (!wantsPush()) setUrgentDelivery("local");
      return;
    }
    if (!isPushSupported()) {
      alert(i18n.t("modals.UserSettingsModal.tseiBrauzerNeOtrymuie"));
      return;
    }
    let permission = Notification.permission;
    if (permission === "default") permission = await Notification.requestPermission();
    if (permission !== "granted") {
      alert(i18n.t("modals.UserSettingsModal.spovishchenniaZablokovaniVNalashtuvannia"));
      return;
    }
    // Спершу зберігаємо вибір: subscribePush бере профіль із налаштувань
    setMorningBriefEnabled(true);
    setIsMorningOn(true);
    if (isPushSubscribed()) {
      setUrgentDelivery("push"); // профіль на сервері оновить initPushNotifications
      return;
    }
    setIsUrgentBusy(true);
    const ok = await subscribePush();
    setIsUrgentBusy(false);
    if (ok) {
      setUrgentDelivery("push");
      return;
    }
    setMorningBriefEnabled(false);
    setIsMorningOn(false);
    const reason = getLastPushError();
    alert(
      reason === "limit"
        ? i18n.t("modals.UserSettingsModal.sohodniZabahatoNovykhPidpysok2")
        : reason === "captcha"
          ? i18n.t("modals.UserSettingsModal.neVdalosiaProityPerevirku2")
          : i18n.t("modals.UserSettingsModal.neVdalosiaPidkliuchytySpovishchennia"),
    );
  };
  const [alertPause, setAlertPauseState] = useState(getAlertPause);
  const chooseAlertPause = (minutes) => {
    setAlertPauseState(minutes);
    setAlertPause(minutes);
  };
  const [alertDailyLimit, setAlertDailyLimitState] = useState(getAlertDailyLimit);
  const changeAlertDailyLimit = (n) => {
    setAlertDailyLimitState(n);
    setAlertDailyLimit(n);
  };
  const isAnyEmergencyOn = isUrgentNotifyOn || isWeatherAlertsOn;
  const formatPause = (m) => (m < 60 ? i18n.t("modals.UserSettingsModal.khv", { m: m }) : i18n.t("modals.UserSettingsModal.hod", { v0: m / 60 }));
  const addUrgentWord = () => {
    const word = urgentWordDraft.trim().toLowerCase().slice(0, URGENT_MAX_WORD_LENGTH);
    if (!word || urgentWords.length >= URGENT_MAX_WORDS) return;
    if (urgentWords.includes(word)) {
      setUrgentWordDraft("");
      return;
    }
    const next = [...urgentWords, word];
    setUrgentWordsState(next);
    setUrgentWords(next);
    setUrgentWordDraft("");
  };
  const removeUrgentWord = (word) => {
    const next = urgentWords.filter((w) => w !== word);
    setUrgentWordsState(next);
    setUrgentWords(next);
  };
  const restoreUrgentWords = () => {
    resetUrgentWords();
    setUrgentWordsState(getDefaultUrgentWords());
  };

  const newsViewMode = usePrefValue(NEWS_VIEW_KEY, "cards");
  const [isRecsOn, setIsRecsOn] = useState(isRecsEnabled);
  const [recsTopics, setRecsTopicsState] = useState(getRecsTopics);
  const [recsInterests, setRecsInterests] = useState(() => getTopInterests());
  const hasRecsHistory = recsInterests.topics.length > 0 || recsInterests.sources.length > 0;
  const toggleRecs = () => {
    const nextVal = !isRecsOn;
    setIsRecsOn(nextVal);
    setRecsEnabled(nextVal);
  };
  const toggleRecsTopic = (id) => {
    const next = recsTopics.includes(id) ? recsTopics.filter((t) => t !== id) : [...recsTopics, id];
    setRecsTopicsState(next);
    setRecsTopics(next);
  };
  const clearRecsHistory = () => {
    resetRecsProfile();
    setRecsInterests({ topics: [], sources: [] });
  };

  useEffect(() => {
    if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("http") && !user.avatar.startsWith("data:")) {
      setSavedGoogleAvatar(user.avatar);
      try { setPref("saved_google_avatar", user.avatar); } catch {}
    }
  }, [user]);

  // ── Account Relinking Handlers ───────────────────────────────────────────
  const [relinkEmail, setRelinkEmail] = useState(user?.email || user?.account || "");
  const [relinkStatus, setRelinkStatus] = useState("");
  const [firebaseUserState, setFirebaseUserState] = useState(null);
  const hasUser = Boolean(user);
  useEffect(() => {
    // Гостю хмарна сесія не потрібна — не тягнемо Firebase даремно
    if (!hasUser) return undefined;
    let cancelled = false;
    let unsubscribe = null;
    loadAuth()
      .then(({ auth, onAuthStateChanged }) => {
        if (!cancelled) unsubscribe = onAuthStateChanged(auth, setFirebaseUserState);
      })
      .catch((error) => console.warn("Firebase Auth не завантажився:", error));
    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, [hasUser]);

  const providerIds = (firebaseUserState?.providerData || []).map((p) => p.providerId);
  const isLinkedGoogle = providerIds.includes("google.com");
  const hasPasswordProvider = providerIds.includes("password");
  const hasFirebaseSession = Boolean(firebaseUserState);
  const googleEmail =
    firebaseUserState?.providerData?.find((p) => p.providerId === "google.com")?.email ||
    user?.email ||
    user?.account;

  const isGoogleAccount = isLinkedGoogle && !hasPasswordProvider;

  const handleRelinkGoogle = async () => {
    const { auth, GoogleAuthProvider, unlink, linkWithPopup, reauthenticateWithPopup } = await loadAuth();
    const currentFbUser = auth.currentUser;
    if (!currentFbUser) {
      alert(i18n.t("modals.UserSettingsModal.khmarnyiAkauntNeaktyvnyiVyidit"));
      return;
    }
    try {
      // Fresh provider with select_account so user can pick any Google account
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      let result;
      if (isLinkedGoogle && providerIds.length > 1) {
        // Є інший спосіб входу — безпечно замінити прив'язаний Google-акаунт.
        if (!window.confirm(i18n.t("modals.UserSettingsModal.zaminytyPryviazanyiGoogleAkaunt"))) return;
        await unlink(currentFbUser, "google.com");
        result = await linkWithPopup(currentFbUser, provider);
      } else if (isLinkedGoogle) {
        // Google — єдиний спосіб входу: лише повторне підтвердження того ж акаунта.
        result = await reauthenticateWithPopup(currentFbUser, provider);
      } else {
        result = await linkWithPopup(currentFbUser, provider);
      }

      const newGoogleUser = result.user;
      const newPhoto = newGoogleUser.photoURL || newGoogleUser.providerData?.[0]?.photoURL;
      if (newPhoto) {
        setSavedGoogleAvatar(newPhoto);
        try { setPref("saved_google_avatar", newPhoto); } catch {}
      }
      onUpdate({
        ...user,
        email: newGoogleUser.email || user?.email,
        avatar: newPhoto || user?.avatar,
      });
      alert(i18n.t("modals.UserSettingsModal.googleAkauntPidtverdzheno", { email: newGoogleUser.email }));
    } catch (err) {
      if (err.code === "auth/cancelled-popup-request" || err.code === "auth/popup-closed-by-user") {
        // user closed popup — silent
      } else if (err.code === "auth/user-mismatch") {
        alert(i18n.t("modals.UserSettingsModal.tseiGoogleAkauntNe"));
      } else if (err.code === "auth/credential-already-in-use" || err.code === "auth/email-already-in-use") {
        alert(i18n.t("modals.UserSettingsModal.tseiGoogleAkauntUzhe"));
      } else {
        alert(i18n.t("modals.UserSettingsModal.pomylka", { v0: err.message || err.code }));
      }
    }
  };


  const handleUnlinkGoogle = async () => {
    const { auth, unlink } = await loadAuth();
    if (!auth.currentUser) return;
    if (providerIds.length <= 1) {
      alert(i18n.t("modals.UserSettingsModal.googleIedynyiSposibVkhodu"));
      return;
    }
    const confirmUnlink = window.confirm(i18n.t("modals.UserSettingsModal.vyDiisnoBazhaieteVidviazaty"));
    if (!confirmUnlink) return;
    try {
      await unlink(auth.currentUser, "google.com");
      setFirebaseUserState(auth.currentUser);
      alert(i18n.t("modals.UserSettingsModal.googleAkauntVidviazanoUspishno"));
    } catch (err) {
      if (err.code === "auth/no-such-provider") {
        alert(i18n.t("modals.UserSettingsModal.googleVzheNePryviazano"));
      } else {
        alert(i18n.t("modals.UserSettingsModal.pomylkaVidviazuvannia", { v0: err.message || err.code }));
      }
    }
  };

  const [relinkLoading, setRelinkLoading] = useState(false);

  const handleRebindEmail = async () => {
    const trimmed = relinkEmail.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setRelinkStatus(i18n.t("modals.UserSettingsModal.vveditKorektnuElektronnuPoshtu"));
      return;
    }
    if (trimmed === (user?.email || user?.account)) {
      setRelinkStatus(i18n.t("modals.UserSettingsModal.tseVzhePotochnaPoshta"));
      return;
    }

    const { auth, verifyBeforeUpdateEmail } = await loadAuth();
    const cu = auth.currentUser;
    if (!cu) {
      setRelinkStatus(i18n.t("modals.UserSettingsModal.khmarnyiAkauntNeaktyvnyiVyidit2"));
      return;
    }
    if (!hasPasswordProvider) {
      setRelinkStatus(i18n.t("modals.UserSettingsModal.poshtaTsohoProfiliuKeruietsia"));
      return;
    }

    setRelinkLoading(true);
    setRelinkStatus(i18n.t("modals.UserSettingsModal.nadsylaiemoLyst"));

    try {
      await verifyBeforeUpdateEmail(cu, trimmed);
      // Пошту профілю не змінюємо, доки її не підтверджено за посиланням у листі.
      const withPending = { ...user, pendingEmail: trimmed };
      onUpdate(withPending);
      try {
        const registered = await localforage.getItem("registered_user");
        if (registered) await localforage.setItem("registered_user", { ...registered, pendingEmail: trimmed });
      } catch {}
      setRelinkStatus(i18n.t("modals.UserSettingsModal.lystPidtverdzhenniaNadislanoNa", { trimmed: trimmed }));
    } catch (err) {
      if (err.code === "auth/requires-recent-login") {
        setRelinkStatus(i18n.t("modals.UserSettingsModal.potribnaPovtornaAvtoryzatsiiaVyidit"));
      } else if (err.code === "auth/email-already-in-use") {
        setRelinkStatus(i18n.t("modals.UserSettingsModal.tsiaPoshtaVzheVykorystovuietsia"));
      } else if (err.code === "auth/invalid-email") {
        setRelinkStatus(i18n.t("modals.UserSettingsModal.nepravylnyiFormatElektronnoiPoshty"));
      } else {
        setRelinkStatus(i18n.t("modals.UserSettingsModal.neVdalosiaNadislatyLyst", { v0: err.code || err.message }));
      }
    } finally {
      setRelinkLoading(false);
    }
  };


  // ── Видалення акаунта ────────────────────────────────────────────────────
  // Порядок важливий: спершу повторний вхід, потім стираємо хмарні дані
  // (поки акаунт існує — після deleteUser доступу до них уже не буде),
  // і лише тоді видаляємо сам акаунт.
  const [deleteStatus, setDeleteStatus] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteWipeDevice, setDeleteWipeDevice] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const [showResetDialog, setShowResetDialog] = useState(false);
  const closeResetDialog = useCallback(() => setShowResetDialog(false), []);

  const confirmFactoryReset = async () => {
    setResetLoading(true);
    await factoryReset(() => loadAuth().then(({ auth, signOut }) => signOut(auth)));
  };

  // Лічильники лімітів правила Firestore стерти не дозволяють
  const CONFIG_COUNTER_KEYS = [
    "settingsSyncCount", "settingsSyncAt",
    "cardsSyncCount", "cardsSyncAt",
    "muteSyncCount", "muteSyncAt",
    "cardAdditionsCount", "cardAdditionsAt",
    "reportCount", "reportAt",
  ];

  const handleDeleteAccount = async () => {
    const {
      auth,
      GoogleAuthProvider,
      EmailAuthProvider,
      reauthenticateWithPopup,
      reauthenticateWithCredential,
      deleteUser,
    } = await loadAuth();
    const cu = auth.currentUser;
    if (!cu) {
      setDeleteStatus(i18n.t("modals.UserSettingsModal.khmarnyiAkauntNeaktyvnyiVyidit2"));
      return;
    }
    // Слово-підтвердження мовою сайту; українське «ВИДАЛИТИ» приймаємо завжди
    const confirmWord = i18n.t("modals.UserSettingsModal.deleteConfirmWord");
    const typed = window.prompt(
      i18n.t("modals.UserSettingsModal.vydalenniaAkauntaNeMozhna", { word: confirmWord }),
    );
    if (typed === null) return;
    const typedWord = typed.trim().toUpperCase();
    if (typedWord !== confirmWord.toUpperCase() && typedWord !== "ВИДАЛИТИ") {
      setDeleteStatus(i18n.t("modals.UserSettingsModal.slovoVvedenoNepravylnoAkaunt"));
      return;
    }

    setDeleteLoading(true);
    try {
      // 1. Firebase дозволяє видалити акаунт лише після свіжого входу
      setDeleteStatus(i18n.t("modals.UserSettingsModal.pidtverditShchoTseVy"));
      if (providerIds.includes("google.com")) {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        await reauthenticateWithPopup(cu, provider);
      } else if (hasPasswordProvider) {
        const password = window.prompt(i18n.t("modals.UserSettingsModal.vveditPotochnyiParolVid"));
        if (!password) {
          setDeleteStatus("");
          return;
        }
        await reauthenticateWithCredential(cu, EmailAuthProvider.credential(cu.email, password));
      }

      // 2. Стираємо хмарні дані
      setDeleteStatus(i18n.t("modals.UserSettingsModal.vydaliaiemoDani"));
      const { db, doc, getDoc, updateDoc, deleteDoc, deleteField } = await loadFirebase();
      const configRef = doc(db, "config", cu.uid);
      const snap = await getDoc(configRef);
      if (snap.exists()) {
        const wipe = Object.fromEntries(
          Object.keys(snap.data())
            .filter((key) => !CONFIG_COUNTER_KEYS.includes(key))
            .map((key) => [key, deleteField()]),
        );
        if (Object.keys(wipe).length) await updateDoc(configRef, wipe);
      }
      // Старий документ із заглушеними новинами (є не в усіх)
      await deleteDoc(doc(db, "users", cu.uid)).catch(() => {});

      // 3. Видаляємо сам акаунт
      await deleteUser(cu);

      // 4. Локальні дані акаунта на цьому пристрої
      await Promise.all(
        ["registered_user", "currentAvatar"].map((key) => localforage.removeItem(key).catch(() => {})),
      );
      try { removePref("saved_google_avatar"); } catch {}

      if (deleteWipeDevice) {
        alert(i18n.t("modals.UserSettingsModal.akauntVydalenoZarazOchystymo"));
        await factoryReset();
        return;
      }
      alert(i18n.t("modals.UserSettingsModal.akauntIPoviazaniZ"));
      onLogout();
    } catch (err) {
      const code = err?.code || "";
      if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
        setDeleteStatus("");
      } else if (code === "auth/wrong-password" || code === "auth/invalid-credential") {
        setDeleteStatus(i18n.t("modals.UserSettingsModal.nepravylnyiParolAkauntNe"));
      } else if (code === "auth/user-mismatch") {
        setDeleteStatus(i18n.t("modals.UserSettingsModal.oberitToiSamyiGoogle"));
      } else if (code === "auth/requires-recent-login") {
        setDeleteStatus(i18n.t("modals.UserSettingsModal.potribnaPovtornaAvtoryzatsiiaVyidit"));
      } else if (code === "permission-denied") {
        setDeleteStatus(i18n.t("modals.UserSettingsModal.serverNeDozvolyvSterty"));
      } else {
        setDeleteStatus(i18n.t("modals.UserSettingsModal.neVdalosiaVydalytyAkaunt", { v0: code || err?.message }));
      }
    } finally {
      setDeleteLoading(false);
    }
  };

  // Mirror flips — стан читається з DOM, щоб не скидатися після закриття модалки
  const [mirrorX, setMirrorX] = useState(() => getSiteMirror().x);
  const [mirrorY, setMirrorY] = useState(() => getSiteMirror().y);

  useEffect(() => {
    applySiteMirror(mirrorX, mirrorY);
  }, [mirrorX, mirrorY]);

  // Form State
  const [formData, setFormData] = useState({
    name: user?.firstName || "",
    day: "", month: "", year: "",
    oldPassword: "", newPassword: "", confirmPassword: "",
    textColor: user?.textColor || "grey",
    borderColor: user?.borderColor || "grey",
    fontFamily: user?.fontFamily || "",
    dateDisplayMode: user?.dateDisplayMode || "both",
    hour12: user?.hour12 === true,
    voiceActingMode: user?.voiceActingMode || "malyatko",
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
      textColor: user?.textColor || "grey",
      borderColor: user?.borderColor || "grey",
      fontFamily: user?.fontFamily || "",
      dateDisplayMode: user?.dateDisplayMode || "both",
      hour12: user?.hour12 === true,
      voiceActingMode: user?.voiceActingMode || "malyatko",
      newsAutoScroll: user?.newsAutoScroll || false,
      syncMutedNews: user?.syncMutedNews || false,
      gestureSensitivity: user?.gestureSensitivity ?? 1.5,
      fastClicks: user?.fastClicks ?? false,
    });
  }, [user]);

  const getActiveAvatarUrl = () => savedGoogleAvatar || avatarPlaceholder;

  const updateLivePreview = (updates) => {
    const newFormData = { ...formData, ...updates };
    setFormData(newFormData);
    if (!user) return;

    const newAvatar = getActiveAvatarUrl();

    onUpdate({
      ...user,
      firstName: newFormData.name,
      avatar: newAvatar,
      birthDate: `${newFormData.year}-${newFormData.month.toString().padStart(2, "0")}-${newFormData.day.toString().padStart(2, "0")}`,
      textColor: newFormData.textColor,
      borderColor: newFormData.borderColor,
      fontFamily: newFormData.fontFamily,
      dateDisplayMode: newFormData.dateDisplayMode,
      hour12: newFormData.hour12,
      voiceActingMode: newFormData.voiceActingMode,
      newsLayout: updates.newsLayout || newsLayout,
      newsAutoScroll: updates.newsAutoScroll ?? newFormData.newsAutoScroll,
      syncMutedNews: updates.syncMutedNews ?? newFormData.syncMutedNews,
      gestureSensitivity: updates.gestureSensitivity ?? newFormData.gestureSensitivity,
      fastClicks: updates.fastClicks ?? newFormData.fastClicks,
    });
  };

  // Власні пакети шрифтів — файли лише на цьому пристрої (utils/customFonts.js)
  const [fontPacks, setFontPacks] = useState([]);
  const [fontPackStacks, setFontPackStacks] = useState({});
  const [fontPackBusy, setFontPackBusy] = useState(false);
  const [fontPackError, setFontPackError] = useState("");
  const fontPackInputRef = useRef(null);
  const activeFontPackId = getFontPackId(formData.fontFamily);

  useEffect(() => {
    let alive = true;
    listFontPacks().then(async (packs) => {
      if (!alive) return;
      setFontPacks(packs);
      // Реєструємо шрифти, щоб назва кожного пакета показувалась його ж шрифтом
      const entries = await Promise.all(packs.map(async (p) => [p.id, await ensureFontPack(p.id)]));
      if (alive) setFontPackStacks(Object.fromEntries(entries));
    });
    return () => {
      alive = false;
    };
  }, []);

  const handleFontPackFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;
    setFontPackBusy(true);
    setFontPackError("");
    try {
      const meta = await saveFontPack(await readFontPack(files));
      const stack = await ensureFontPack(meta.id);
      setFontPacks((prev) => [...prev, meta]);
      setFontPackStacks((prev) => ({ ...prev, [meta.id]: stack }));
      updateLivePreview({ fontFamily: fontPackValue(meta.id) });
    } catch (err) {
      setFontPackError(err?.message || i18n.t("modals.UserSettingsModal.neVdalosiaDodatyPaket"));
    } finally {
      setFontPackBusy(false);
    }
  };

  const handleDeleteFontPack = async (pack) => {
    if (!window.confirm(i18n.t("modals.UserSettingsModal.vydalytyPaketZTsoho", { name: pack.name }))) return;
    try {
      await deleteFontPack(pack.id);
    } catch {
      setFontPackError(i18n.t("modals.UserSettingsModal.neVdalosiaVydalytyPaket"));
      return;
    }
    setFontPacks((prev) => prev.filter((p) => p.id !== pack.id));
    if (activeFontPackId === pack.id) updateLivePreview({ fontFamily: "" });
  };

  const finishClosing = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 250);
  };

  const handleCancel = () => {
    if (user) onUpdate(initialUser);
    finishClosing();
  };

  // Вікна фону й часового поясу живуть у Hero: закриваємо налаштування (зміни прев'ю лишаються) і відкриваємо їх
  const openHeroWindow = (eventName) => {
    finishClosing();
    window.dispatchEvent(new Event(eventName));
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [i18n.t("modals.UserSettingsModal.sichen"),i18n.t("modals.UserSettingsModal.liutyi"),i18n.t("modals.UserSettingsModal.berezen"),i18n.t("modals.UserSettingsModal.kviten"),i18n.t("modals.UserSettingsModal.traven"),i18n.t("modals.UserSettingsModal.cherven"),i18n.t("modals.UserSettingsModal.lypen"),i18n.t("modals.UserSettingsModal.serpen"),i18n.t("modals.UserSettingsModal.veresen"),i18n.t("modals.UserSettingsModal.zhovten"),i18n.t("modals.UserSettingsModal.lystopad"),i18n.t("modals.UserSettingsModal.hruden")];
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
    if (score <= 2) return { width: "33%", color: "#ff4d4d", label: i18n.t("modals.UserSettingsModal.slabkyi") };
    if (score <= 4) return { width: "66%", color: "#ffb36c", label: i18n.t("modals.UserSettingsModal.serednii") };
    return { width: "100%", color: "#4caf50", label: i18n.t("modals.UserSettingsModal.nadiinyi") };
  };
  const pwStrength = getPasswordStrength(formData.newPassword);

  const handleSubmit = () => {
    if (isGuest) { finishClosing(); return; }
    if (isInvalidDate) { alert(i18n.t("modals.UserSettingsModal.vvedenaNekorektnaData")); return; }
    if (!formData.day || !formData.month || !formData.year) { alert(i18n.t("modals.UserSettingsModal.budLaskaVyberitDatu")); return; }
    if (formData.newPassword) {
      if (formData.newPassword !== formData.confirmPassword) { alert(i18n.t("modals.UserSettingsModal.noviParoliNeZbihaiutsia")); return; }
      if (formData.newPassword.length < 6) { alert(i18n.t("modals.UserSettingsModal.parolZanadtoKorotkyi")); return; }
    }
    const finalAvatar = getActiveAvatarUrl();

    onUpdate({
      ...user,
      account: user?.account || formData.name,
      firstName: formData.name,
      avatar: finalAvatar,
      birthDate: `${formData.year}-${formData.month.toString().padStart(2, "0")}-${formData.day.toString().padStart(2, "0")}`,
      textColor: formData.textColor,
      borderColor: formData.borderColor,
      fontFamily: formData.fontFamily,
      dateDisplayMode: formData.dateDisplayMode,
      hour12: formData.hour12,
      voiceActingMode: formData.voiceActingMode,
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

  // ── Music tab state ──────────────────────────────────────────────────────
  const activeSlotRef = useRef(null);
  const fileInputRef = useRef(null);
  const [libSearch, setLibSearch] = useState("");
  const [musicTab, setMusicTab] = useState("library");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState({});
  const [softDeletedIds, setSoftDeletedIds] = useState(() => getStoredSoftDeletedIds());
  const [downloadedTracks, setDownloadedTracks] = useState(() => {
    try { return JSON.parse(getPref("bg_music_downloaded_tracks") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    setPref("bg_music_downloaded_tracks", JSON.stringify(downloadedTracks));
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

  const customTracks = useMemo(() => (customBgTracks || []).filter((t) => t?.file), [customBgTracks]);

  const libraryTracks = useMemo(() => {
    let tracks = songAiKnowledge.map((s) => {
      const file = assetMap[s.audio];
      const status = getTrackStatus({ id: s.id, file, text: s.text, author: s.author });
      return { id: s.id, name: s.text ? `${s.text} — ${s.author}` : s.author, file, image: assetMap[s.image], ...status };
    });
    if (libSearch) tracks = tracks.filter((t) => t.name.toLowerCase().includes(libSearch.toLowerCase()));
    const deduped = tracks.filter((t) => !BASE_BG_TRACKS.some((b) => b.id === t.id));
    const custom = customTracks
      .map((t, i) => ({ id: `custom-${i}`, customIdx: i, name: t.name, file: t.file, image: null, isCustom: true, available: true, hidden: t.enabled === false }))
      .filter((t) => !libSearch || t.name.toLowerCase().includes(libSearch.toLowerCase()));
    const withHidden = (t) => ({ ...t, hidden: libraryBgSettings[t.id]?.enabled === false });
    return [
      ...BASE_BG_TRACKS.map((t) => withHidden({ id: t.id, name: t.name, file: t.file, image: null, isBase: true, downloaded: true, softDeleted: false, available: true })),
      ...custom,
      ...deduped.map(withHidden),
    ].slice(0, 28 + custom.length);
  }, [libSearch, downloadedTracks, softDeletedIds, bgMusicSource, customTracks, libraryBgSettings]);

  // Око в режимі «Порядок»: приховати трек з черги; якщо він грає — одразу наступний
  const toggleTrackHidden = (track, isActive) => {
    const hide = !track.hidden;
    if (track.isCustom) {
      setCustomBgTracks(customTracks.map((t, i) => (i === track.customIdx ? { ...t, enabled: !hide } : t)));
    } else {
      setLibraryBgSettings((prev) => ({ ...prev, [track.id]: { ...prev[track.id], enabled: !hide } }));
    }
    if (hide && isActive) onSkipBgTrack();
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file || activeSlotRef.current === null) return;
    if (file.size > MAX_CUSTOM_MB * 1024 * 1024) { alert(i18n.t("modals.UserSettingsModal.failZanadtoVelykyiMaksymum", { MAX_CUSTOM_MB: MAX_CUSTOM_MB })); return; }
    const audio = new Audio(URL.createObjectURL(file));
    audio.onloadedmetadata = () => {
      if (audio.duration > MAX_CUSTOM_MIN * 60) { alert(i18n.t("modals.UserSettingsModal.melodiiaZanadtoDovhaMaksymum", { MAX_CUSTOM_MIN: MAX_CUSTOM_MIN })); URL.revokeObjectURL(audio.src); return; }
      const updated = [...customTracks];
      updated[Math.min(activeSlotRef.current, updated.length)] = { name: file.name.split(".")[0].substring(0, 30), file, repeats: 1, enabled: true };
      setCustomBgTracks(updated.slice(0, MAX_CUSTOM_TRACKS)); setBgMusicSource(file); setActiveBgTrackId(null);
      URL.revokeObjectURL(audio.src);
    };
  };

  const handleRemoveCustomTrack = (idx) => {
    setCustomBgTracks(customTracks.filter((_, i) => i !== idx));
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
    { key: "personalization", icon: <FiSliders />, label: i18n.t("modals.UserSettingsModal.personalizatsiia") },
    { key: "security", icon: <FiShield />, label: i18n.t("modals.UserSettingsModal.bezpeka"), locked: isGuest },
    { key: "siteSections", icon: <FiCompass />, label: i18n.t("modals.UserSettingsModal.sektsiiTaNovyny") },
    { key: "modes", icon: <FiZap />, label: i18n.t("modals.UserSettingsModal.rezhymyTaZastosunky") },
    { key: "filters", icon: <FiEye />, label: i18n.t("modals.UserSettingsModal.vizualniFiltry") },
    { key: "bgMusic", icon: <FiMusic />, label: i18n.t("modals.UserSettingsModal.fonovaMuzyka") },
    { key: "beta", icon: <TbFlask />, label: i18n.t("modals.UserSettingsModal.betaFunktsii") },
  ];

  // ── Загальний пошук у параметрах ─────────────────────────────────────────
  const searchInputRef = useRef(null);
  const pendingJumpRef = useRef(null);
  const searchWords = useMemo(() => getSearchWords(searchQuery), [searchQuery]);
  const isSearching = searchWords.length > 0;
  const [searchStats, setSearchStats] = useState({ counts: {}, total: 0 });
  const showTab = (key) => isSearching || activeTab === key;

  const switchLevel = useCallback((key) => {
    setSettingsLevel(key);
    setPeekLevel(null);
  }, []);

  const levelChosen = useSettingsLevelChosen();
  const [levelMenuOpen, setLevelMenuOpen] = useState(false);
  const levelButtonRef = useRef(null);
  const closeLevelMenu = useCallback((refocus) => {
    setLevelMenuOpen(false);
    if (refocus) levelButtonRef.current?.focus();
  }, []);
  const chooseLevelFromMenu = useCallback((key) => {
    switchLevel(key);
    setLevelMenuOpen(false);
    levelButtonRef.current?.focus();
  }, [switchLevel]);
  // Перший вибір не скидає «підглядання» (напр. відкрили «Мої стрічки» з новин)
  const chooseFirstLevel = useCallback((key) => setSettingsLevel(key), []);

  const levelContext = useMemo(
    () => ({ level: settingsLevel, viewLevel, isSearching, switchLevel }),
    [settingsLevel, viewLevel, isSearching, switchLevel],
  );

  // Обрали легший режим, а відкрита вкладка — з важчого: повертаємось на «Персоналізацію»
  useEffect(() => {
    if (levelRank(TAB_LEVEL[activeTab]) > levelRank(viewLevel)) setActiveTab("personalization");
  }, [activeTab, viewLevel]);

  // Пошук шукає в усіх режимах, тож вкладки важчих режимів видно лише під час пошуку
  const visibleNavItems = navItems.filter(
    ({ key }) => isSearching || key === activeTab || levelRank(TAB_LEVEL[key]) <= levelRank(viewLevel),
  );

  // Фільтруємо DOM після кожної зміни вмісту (розгортання блоків, оновлення лічильників тощо)
  useLayoutEffect(() => {
    const root = mainContentRef.current;
    if (!root) return undefined;
    if (!isSearching) {
      clearSettingsSearch(root);
      return undefined;
    }
    let frame = 0;
    const run = () => {
      const next = applySettingsSearch(root, searchWords);
      setSearchStats((prev) =>
        prev.total === next.total && JSON.stringify(prev.counts) === JSON.stringify(next.counts) ? prev : next,
      );
    };
    run();
    // Атрибути не відстежуємо — інакше пошук реагував би на власні зміни
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(run);
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      clearSettingsSearch(root);
    };
  }, [isSearching, searchWords]);

  useEffect(() => {
    mainContentRef.current?.scrollTo({ top: 0 });
  }, [searchQuery]);

  // Ctrl+F / Cmd+F — фокус на пошук (якщо поверх не відкрите інше вікно)
  useEffect(() => {
    if (showKatScene || showTerms || showResetDialog) return undefined;
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && e.code === "KeyF") {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showKatScene, showTerms, showResetDialog]);

  // Перехід із результатів пошуку до самої вкладки; target — картка, до якої прокрутити
  const openFromSearch = (tab, target = null) => {
    pendingJumpRef.current = target;
    // Налаштування з важчого режиму відкриваємо «підгляданням», не змінюючи сам режим
    const need = maxLevel(TAB_LEVEL[tab], target?.getAttribute("data-level") || "simple");
    setPeekLevel(levelRank(need) > levelRank(settingsLevel) ? need : null);
    setSearchQuery("");
    setActiveTab(tab);
  };

  useEffect(() => {
    const el = pendingJumpRef.current;
    if (isSearching || !el) return undefined;
    pendingJumpRef.current = null;
    if (!el.isConnected) return undefined;
    let timer = 0;
    const frame = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: animationsDisabled ? "auto" : "smooth", block: "center" });
      el.setAttribute("data-search-flash", "");
      timer = setTimeout(() => el.removeAttribute("data-search-flash"), 1900);
    });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      el.removeAttribute("data-search-flash");
    };
  }, [isSearching, activeTab, animationsDisabled]);

  const handleSearchResultClick = (e) => {
    if (!isSearching) return;
    const group = e.target.closest("[data-settings-tab]");
    if (!group) return;
    const tab = group.dataset.settingsTab;
    if (e.target.closest('[data-settings-head="title"]')) {
      openFromSearch(tab);
      return;
    }
    if (!e.target.closest("[data-settings-title]")) return;
    let item = e.target.closest("[data-settings-item]");
    while (item?.parentElement?.closest("[data-settings-item]")) item = item.parentElement.closest("[data-settings-item]");
    openFromSearch(tab, item);
  };

  const pluralResults = (n) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    // 1, 2–4 налаштування; 5–20 налаштувань
    return mod10 >= 1 && mod10 <= 4 && (mod100 < 11 || mod100 > 14) ? i18n.t("modals.UserSettingsModal.nalashtuvannia") : i18n.t("modals.UserSettingsModal.nalashtuvan");
  };

  // На телефоні вкладки — горизонтальний ряд: тримаємо активну в полі зору
  const navListRef = useRef(null);
  useEffect(() => {
    const list = navListRef.current;
    const chip = list?.querySelector(`[data-nav-key="${activeTab}"]`);
    if (!list || !chip || list.scrollWidth <= list.clientWidth) return;
    const left = chip.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: animationsDisabled ? "auto" : "smooth" });
  }, [activeTab, animationsDisabled]);

  const isFiltersPreview = !isSearching && activeTab === "filters" && isFiltersPreviewOn;

  return createPortal(
    <>
      <SettingsThemeTokens />
      {showKatScene && (
        <NestedModalPortal>
          <KatSceneModal onClose={() => setShowKatScene(false)} />
        </NestedModalPortal>
      )}
      <ModalOverlay $isClosing={isClosing} $preview={isFiltersPreview} onClick={finishClosing}>
        <ModalWindow
          $isClosing={isClosing}
          $preview={isFiltersPreview}
          $previewWidth={filtersPreviewWidth}
          onClick={(e) => e.stopPropagation()}
        >

          {/* ── Header ─────────────────────────────────────────────────── */}
          <WindowHeader>
            <HeaderLeft>
              <UserBadge>
                {!isGuest && (
                  <UserAvatarThumb
                    src={getActiveAvatarUrl()}
                    alt="User avatar"
                  />
                )}
                <div style={{ fontSize: "20px", opacity: 0.5, display: isGuest ? "flex" : "none" }}>
                  <FiUser />
                </div>
                <div >
                  <HeaderTitle>{i18n.t("modals.UserSettingsModal.parametry")}</HeaderTitle>
                  <HeaderSub>
                    {isGuest ? i18n.t("modals.UserSettingsModal.histUviiditDliaPovnoho") : <AccountName value={user?.email || user?.account || i18n.t("modals.UserSettingsModal.oblikovyiZapys")} />}
                  </HeaderSub>
                </div>
              </UserBadge>
            </HeaderLeft>
            <HeaderActions>
              <HeaderButton onClick={() => setShowKatScene(true)} aria-label={i18n.t("modals.UserSettingsModal.tytry")}>
                <FiFilm /> <span>{i18n.t("modals.UserSettingsModal.tytry")}</span>
              </HeaderButton>
              <CloseButton onClick={handleCancel}><FiX /></CloseButton>
            </HeaderActions>
          </WindowHeader>

          {/* ── Body ───────────────────────────────────────────────────── */}
          <WindowBody>
            <Sidebar>
              <SearchBox>
                <FiSearch aria-hidden="true" />
                <WinInput
                  ref={searchInputRef}
                  type="text"
                  role="searchbox"
                  aria-label={i18n.t("modals.UserSettingsModal.poshukUParametrakh")}
                  placeholder={i18n.t("modals.UserSettingsModal.poshukUParametrakh")}
                  title={i18n.t("modals.UserSettingsModal.poshukPoVsikhRozdilakh")}
                  autoComplete="off"
                  spellCheck={false}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape" && searchQuery) {
                      e.stopPropagation();
                      setSearchQuery("");
                    }
                  }}
                  style={{ height: "34px", paddingLeft: "32px", paddingRight: searchQuery ? "32px" : "12px" }}
                />
                {searchQuery && (
                  <SearchClear
                    type="button"
                    aria-label={i18n.t("modals.UserSettingsModal.ochystytyPoshuk")}
                    onClick={() => {
                      setSearchQuery("");
                      searchInputRef.current?.focus();
                    }}
                  >
                    <FiX />
                  </SearchClear>
                )}
              </SearchBox>
              <NavList ref={navListRef}>
              {visibleNavItems.map(({ key, icon, label, locked }) => {
                const isActive = !isSearching && activeTab === key;
                const count = searchStats.counts[key] || 0;
                const item = (
                  <NavItem
                    key={key}
                    data-nav-key={key}
                    $active={isActive}
                    $locked={!!locked}
                    aria-disabled={locked ? true : undefined}
                    onClick={() => {
                      if (locked) return;
                      setSearchQuery("");
                      if (key !== activeTab) setPeekLevel(null);
                      setActiveTab(key);
                    }}
                  >
                    <NavIconBox $active={isActive} $locked={!!locked} $anim={getIconAnim(icon)}>
                      {icon}
                    </NavIconBox>
                    {label}
                    {locked && <LockBadge>🔒</LockBadge>}
                    {isSearching && !locked && <NavCount $zero={!count}>{count}</NavCount>}
                  </NavItem>
                );
                return locked ? (
                  <Tooltip
                    key={key}
                    content={i18n.t("modals.UserSettingsModal.neobkhidnaReiestratsiia")}
                    placement="right"
                    wrapperStyle={{ display: "block", flexShrink: 0 }}
                  >
                    {item}
                  </Tooltip>
                ) : item;
              })}
              </NavList>

              <LevelButton
                ref={levelButtonRef}
                type="button"
                $color={getLevelInfo(settingsLevel).color}
                aria-haspopup="menu"
                aria-expanded={levelMenuOpen}
                title={i18n.t("modals.UserSettingsModal.stykhiia2", { STYKHIIA_VERSION: STYKHIIA_VERSION, v1: levelFullName(settingsLevel), about: getLevelInfo(settingsLevel).about })}
                aria-label={i18n.t("modals.UserSettingsModal.rezhymNalashtuvan3", { v0: levelFullName(settingsLevel) })}
                onClick={() => setLevelMenuOpen((open) => !open)}
              >
                <LevelIcon level={settingsLevel} />
                <LevelButtonText>
                  <small>{i18n.t("modals.UserSettingsModal.stykhiia")} {STYKHIIA_VERSION} · <em>{getLevelInfo(settingsLevel).star}</em></small>
                  <b>{getLevelInfo(settingsLevel).label}</b>
                </LevelButtonText>
                <FiChevronDown aria-hidden="true" />
              </LevelButton>
              {levelMenuOpen && (
                <LevelMenu
                  anchorRef={levelButtonRef}
                  level={settingsLevel}
                  isGuest={isGuest}
                  onSelect={chooseLevelFromMenu}
                  onClose={closeLevelMenu}
                />
              )}
            </Sidebar>

            <MainContentWrap>
            <SettingsLevelContext.Provider value={levelContext}>
            <MainContent
              ref={mainContentRef}
              data-searching={isSearching ? "" : undefined}
              data-view-level={viewLevel}
              onClick={handleSearchResultClick}
            >
              {isSearching && searchStats.total > 0 && (
                <SearchNote>
                  {i18n.t("modals.UserSettingsModal.znaideno")} <strong>{searchStats.total}</strong> {pluralResults(searchStats.total)}{i18n.t("modals.UserSettingsModal.zminiuiteIkhProstoTut")}
                </SearchNote>
              )}
              {isSearching && searchStats.total === 0 && (
                <SearchEmpty>
                  <FiSearch aria-hidden="true" />
                  <strong>{i18n.t("modals.UserSettingsModal.nichohoNeZnaideno")}</strong>
                  <span>{i18n.t("modals.UserSettingsModal.zaZapytom")}{searchQuery.trim()}{i18n.t("modals.UserSettingsModal.nemaieNalashtuvanSprobuiteInshe")}</span>
                </SearchEmpty>
              )}

              {/* ── SECURITY TAB ────────────────────────────────────── */}
              {showTab("security") && !isGuest && (
                <CardGroup data-settings-tab="security">
                  <SectionHeaderTitle><FiShield /> {i18n.t("modals.UserSettingsModal.bezpekaTaPerepryviazkaAkauntu")}</SectionHeaderTitle>
                  <SectionDescription>{i18n.t("modals.UserSettingsModal.pryviazkaGoogleAkauntuZmina")}</SectionDescription>

                  {/* Account Relinking & Binding Controls */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="var(--s-accent)"><FiLink /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.keruvanniaPryviazkamyProfiliu")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.zminaPryviazanohoGoogleAkauntu")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "4px" }}>
                      {/* Google Binding */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                        <div style={{ display: "flex", flexDirection: "column", minWidth: 0, maxWidth: "100%" }}>
                          <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--s-text)" }}>{i18n.t("modals.UserSettingsModal.googleAkaunt")}</span>
                          <span style={{ fontSize: "11px", color: isLinkedGoogle ? "var(--s-accent)" : "var(--s-muted)", display: "flex", minWidth: 0 }}>
                            {!hasFirebaseSession
                              ? i18n.t("modals.UserSettingsModal.khmarnyiAkauntNeaktyvnyiUviidit")
                              : isLinkedGoogle ? (
                                <>
                                  <span style={{ whiteSpace: "pre", flexShrink: 0 }}>{i18n.t("modals.UserSettingsModal.pryviazano")}</span>
                                  <AccountName value={googleEmail || "Google"} />
                                  <span style={{ flexShrink: 0 }}>)</span>
                                </>
                              ) : i18n.t("modals.UserSettingsModal.nePryviazano")}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <WinButton type="button" onClick={handleRelinkGoogle} disabled={!hasFirebaseSession}>
                            {!isLinkedGoogle ? i18n.t("modals.UserSettingsModal.pryviazatyGoogle") : providerIds.length > 1 ? i18n.t("modals.UserSettingsModal.perepryviazatyGoogle") : i18n.t("modals.UserSettingsModal.pidtverdytyGoogle")}
                          </WinButton>
                          {isLinkedGoogle && providerIds.length > 1 && (
                            <WinButton type="button" $danger onClick={handleUnlinkGoogle}>
                              {i18n.t("modals.UserSettingsModal.vidviazaty")}
                            </WinButton>
                          )}
                        </div>
                      </div>

                      {/* Email Re-binding */}
                      {!hasPasswordProvider ? (
                        <div style={{ borderTop: "1px solid rgba(var(--s-ink),0.08)", paddingTop: "10px", fontSize: "11px", color: "var(--s-muted)" }}>
                          {hasFirebaseSession
                            ? i18n.t("modals.UserSettingsModal.poshtaTsohoProfiliuKeruietsia2")
                            : i18n.t("modals.UserSettingsModal.shchobZminytyPoshtuVyidit")}
                        </div>
                      ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid rgba(var(--s-ink),0.08)", paddingTop: "10px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--s-text)" }}>{i18n.t("modals.UserSettingsModal.zminaPryviazanoiPoshty")}</span>
                        <span style={{ fontSize: "11px", color: "var(--s-muted)" }}>
                          {i18n.t("modals.UserSettingsModal.naNovuPoshtuBude")}
                        </span>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <WinInput
                            type="email"
                            placeholder={i18n.t("modals.UserSettingsModal.vveditNovuPoshtu")}
                            value={relinkEmail}
                            onChange={(e) => { setRelinkEmail(e.target.value); setRelinkStatus(""); }}
                            disabled={relinkLoading}
                          />
                          <WinButton type="button" $primary onClick={handleRebindEmail} style={{ whiteSpace: "nowrap" }} disabled={relinkLoading}>
                            {relinkLoading ? "⏳..." : i18n.t("modals.UserSettingsModal.nadislatyLyst")}
                          </WinButton>
                        </div>
                        {relinkStatus && (
                          <span style={{
                            fontSize: "11px",
                            color: relinkStatus.startsWith("✅") ? "#4caf50"
                              : relinkStatus.startsWith("❌") ? "#f44336"
                              : relinkStatus.startsWith("⚠️") ? "#ffb300"
                              : relinkStatus.startsWith("📝") ? "var(--s-accent)"
                              : "var(--s-muted)",
                            lineHeight: "1.5"
                          }}>{relinkStatus}</span>
                        )}
                      </div>
                      )}
                    </div>
                  </CardExpanded>

                  {/* Password Change */}
                  {!isGoogleAccount && (
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox $color="var(--s-red)"><FiKey /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.zminaParolia")}</CardTitle>
                          <CardDescription>{i18n.t("modals.UserSettingsModal.vveditNovyiParolDlia")}</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                        <WinInput type="password" placeholder={i18n.t("modals.UserSettingsModal.novyiParol")} value={formData.newPassword}
                          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })} />
                        {formData.newPassword && (
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <PasswordStrengthBar $width={pwStrength.width} $color={pwStrength.color} />
                            <PasswordStrengthText $color={pwStrength.color}>{i18n.t("modals.UserSettingsModal.nadiinist")} {pwStrength.label}</PasswordStrengthText>
                          </div>
                        )}
                        <WinInput type="password" placeholder={i18n.t("modals.UserSettingsModal.pidtverditNovyiParol")} value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                      </div>
                    </CardExpanded>
                  )}

                  {/* Account Deletion */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="var(--s-red)"><FiTrash2 /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.vydalytyAkaunt")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.nazavzhdyVydaliaieVkhidKhmarni")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--s-text-2)", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={deleteWipeDevice}
                          onChange={(e) => setDeleteWipeDevice(e.target.checked)}
                          disabled={deleteLoading}
                        />
                        {i18n.t("modals.UserSettingsModal.takozhOchystytyTseiPrystrii")}
                      </label>
                      <div>
                        <WinButton
                          type="button"
                          $danger
                          onClick={handleDeleteAccount}
                          disabled={deleteLoading || !hasFirebaseSession}
                        >
                          {deleteLoading ? "⏳..." : i18n.t("modals.UserSettingsModal.vydalytyAkaunt")}
                        </WinButton>
                      </div>
                      {!hasFirebaseSession && (
                        <span style={{ fontSize: "11px", color: "var(--s-muted)" }}>
                          {i18n.t("modals.UserSettingsModal.khmarnyiAkauntNeaktyvnyiVyidit3")}
                        </span>
                      )}
                      {deleteStatus && (
                        <span style={{
                          fontSize: "11px",
                          color: deleteStatus.startsWith("❌") ? "#f44336"
                            : deleteStatus.startsWith("⚠️") ? "#ffb300"
                            : "var(--s-muted)",
                          lineHeight: "1.5",
                        }}>{deleteStatus}</span>
                      )}
                    </div>
                  </CardExpanded>
                </CardGroup>
              )}

              {/* ── PERSONALIZATION TAB ─────────────────────────────── */}
              {showTab("personalization") && (
                <CardGroup data-settings-tab="personalization">
                  <SectionHeaderTitle><FiSliders /> {i18n.t("modals.UserSettingsModal.personalizatsiiaTaInterfeis")}</SectionHeaderTitle>
                  <SectionDescription>{i18n.t("modals.UserSettingsModal.fonSaituChasovyiPoias")}</SectionDescription>

                  <SubSectionTitle><FiImage /> {i18n.t("modals.UserSettingsModal.fonSaitu")}</SubSectionTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#f472b6"><GiPalette /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.fon")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.kartynkaNaPershomuEkrani")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton type="button" onClick={() => openHeroWindow(OPEN_BG_MODAL_EVENT)}>
                        {i18n.t("modals.UserSettingsModal.zminytyFon")}
                      </WinButton>
                    </CardControl>
                  </Card>

                  <SubSectionTitle><FiClock /> {i18n.t("modals.UserSettingsModal.chasTaData")}</SubSectionTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#38bdf8"><FiGlobe /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.chasovyiPoias")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.zaIakymChasomPokazuvaty")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton type="button" onClick={() => openHeroWindow(OPEN_TIMEZONE_EVENT)}>
                        {i18n.t("modals.UserSettingsModal.zminytyChasovyiPoias")}
                      </WinButton>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#22d3ee"><TbClock24 /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.formatChasu")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.24HodynnyiAbo12")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinSelect value={formData.hour12 ? "12" : "24"} onChange={(e) => updateLivePreview({ hour12: e.target.value === "12" })}>
                        <option value="24">{i18n.t("modals.UserSettingsModal.24Hodynnyi")}</option>
                        <option value="12">{i18n.t("modals.UserSettingsModal.12HodynnyiAmPm")}</option>
                      </WinSelect>
                    </CardControl>
                  </Card>

                  <Card level="medium">
                    <CardLeft>
                      <CardIconBox $color="var(--s-green)"><FiCalendar /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.rezhymVidobrazhennia")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.chasDataAboObydva")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinSelect value={formData.dateDisplayMode} onChange={(e) => updateLivePreview({ dateDisplayMode: e.target.value })}>
                        <option value="both">{i18n.t("modals.UserSettingsModal.chasTaDataRazom")}</option>
                        <option value="time">{i18n.t("modals.UserSettingsModal.tilkyChas")}</option>
                        <option value="date">{i18n.t("modals.UserSettingsModal.tilkyData")}</option>
                      </WinSelect>
                    </CardControl>
                  </Card>

                  <SubSectionTitle><FiSliders /> {i18n.t("modals.UserSettingsModal.interfeis")}</SubSectionTitle>

                  {/* Вимкнути анімації та розмиття */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fbbf24"><FiPauseCircle /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.vymknutyAnimatsiiTaRozmyttia")}</CardTitle>
                        <CardDescription>
                          {animationsAutoDisabled
                            ? i18n.t("modals.UserSettingsModal.vymknenoAvtomatychnoPrystriiSlabkyi")
                            : animationsDisabled
                            ? i18n.t("modals.UserSettingsModal.animatsiiPlavniPerekhodyI")
                            : i18n.t("modals.UserSettingsModal.ikonkyPerekhodyIEfekty")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => setAnimationsDisabled(!animationsDisabled)}>
                        <ToggleStatusLabel $checked={animationsDisabled}>
                          {animationsDisabled ? i18n.t("modals.UserSettingsModal.vymkneno") : i18n.t("modals.UserSettingsModal.uvimkneno2")}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={animationsDisabled} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Автоперемикання вкладок карток погоди (Зараз → Годинна → 16 днів → Смарт) */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#00eeff"><FiRepeat /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.avtoperemykanniaVkladokKartky")}</CardTitle>
                        <CardDescription>
                          {tabAutoplay.on
                            ? i18n.t("modals.UserSettingsModal.kartkaPohodySamaHortaie", { v0: formatTabAutoplay(tabAutoplay.seconds) })
                            : i18n.t("modals.UserSettingsModal.vkladkyKartkyPohodyNe")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                      <TabAutoplayControl
                        value={tabAutoplay}
                        accent="#60cdff"
                        onChange={(value) => setPref(TAB_AUTOPLAY_KEY, serializeTabAutoplay(value))}
                      />
                    </div>
                  </CardExpanded>

                  {/* Стиль ліній графіків — одразу для всіх карток погоди */}
                  <CardExpanded level="medium">
                    <CardLeft>
                      <CardIconBox $color="#c084fc"><GiPalette /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.stylHrafikiv")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.formaTypITovshchyna")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                      {[
                        { key: "hourly", label: i18n.t("modals.UserSettingsModal.pohodynnyiHrafik") },
                        { key: "daily", label: i18n.t("modals.UserSettingsModal.hrafikNa16Dniv") },
                      ].map(({ key, label }) => (
                        <WinButton
                          key={key}
                          type="button"
                          onClick={() => setGlobalStyleChart(key)}
                          style={{ flex: 1, minWidth: "140px" }}
                        >
                          {label}
                        </WinButton>
                      ))}
                    </div>
                  </CardExpanded>

                  {/* AntiHeader Tips Toggle — тимчасово приховано
                  <Card level="medium">
                    <CardLeft>
                      <CardIconBox $color="var(--s-orange)"><TbSpeakerphone /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Підказки в хедері</CardTitle>
                        <CardDescription>
                          {isAdAntiHeaderEnabled
                            ? "Авто-показ банера з порадами інструментів(можливостей) Стихії та гарячими клавішами"
                            : "Банер підказок повністю вимкнено"}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleAdAntiHeader}>
                        <ToggleStatusLabel $checked={isAdAntiHeaderEnabled}>
                          {isAdAntiHeaderEnabled ? "Увімкнуто" : "Вимкнуто"}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={isAdAntiHeaderEnabled} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>
                  */}

                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#a3e635"><FiMoreVertical /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.kontekstneMeniuStykhii")}</CardTitle>
                        <CardDescription>
                          {isSiteContextMenuEnabled
                            ? i18n.t("modals.UserSettingsModal.pravaKnopkaMyshiVidkryvaie")
                            : i18n.t("modals.UserSettingsModal.pravaKnopkaMyshiVidkryvaie2")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleSiteContextMenu}>
                        <ToggleStatusLabel $checked={isSiteContextMenuEnabled}>
                          {isSiteContextMenuEnabled ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={isSiteContextMenuEnabled} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#4ade80"><FiType /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.shryftStykhii")}</CardTitle>
                        <CardDescription style={{ fontFamily: (getStykhiiaFont(formData.fontFamily) || STYKHIIA_FONTS[0]).stack }}>
                          {i18n.t("modals.UserSettingsModal.pohodaVKonotopi3")}
                        </CardDescription>
                        <FontDownloads>
                          {STYKHIIA_FONTS.map((f) => (
                            <FontDownloadLink key={f.id} href={f.ttfUrl} download={f.fileName} title={i18n.t("modals.UserSettingsModal.vykachatyShchobVstanovytyNa", { fileName: f.fileName })}>
                              <FiDownload /> {f.label} .ttf
                            </FontDownloadLink>
                          ))}
                        </FontDownloads>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <Segmented role="radiogroup" aria-label={i18n.t("modals.UserSettingsModal.shryftStykhii")}>
                        {[{ id: "", label: i18n.t("modals.UserSettingsModal.vymk"), stack: "inherit" }, ...STYKHIIA_FONTS].map((f) => {
                          const active = f.id ? formData.fontFamily === f.id : !getStykhiiaFont(formData.fontFamily);
                          return (
                            <SegmentBtn
                              key={f.id || "off"}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              $active={active}
                              $tone="show"
                              style={{ fontFamily: f.stack }}
                              onClick={() => updateLivePreview({ fontFamily: f.id || (getStykhiiaFont(formData.fontFamily) ? "" : formData.fontFamily) })}
                            >
                              {f.label}
                            </SegmentBtn>
                          );
                        })}
                      </Segmented>
                    </CardControl>
                  </Card>

                  {!getStykhiiaFont(formData.fontFamily) && (
                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#f472b6"><FiType /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.vlasnyiShryft")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.nazvaShryftuGoogleFonts")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl style={{ minWidth: "200px" }}>
                      <WinInput placeholder={i18n.t("modals.UserSettingsModal.nazvaShryftu")} value={activeFontPackId ? "" : formData.fontFamily} onChange={(e) => updateLivePreview({ fontFamily: e.target.value })} />
                    </CardControl>
                  </Card>
                  )}

                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#38bdf8"><FiUpload /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.moiPaketyShryftiv")}</CardTitle>
                        <CardDescription>
                          {fontPackBusy
                            ? i18n.t("modals.UserSettingsModal.chytaiuShryfty")
                            : fontPackError || i18n.t("modals.UserSettingsModal.ttfOtfWoff2Abo")}
                        </CardDescription>
                        {fontPacks.length > 0 && (
                          <FontPackList role="radiogroup" aria-label={i18n.t("modals.UserSettingsModal.moiPaketyShryftiv")}>
                            {fontPacks.map((p) => {
                              const active = activeFontPackId === p.id;
                              return (
                                <FontPackChip key={p.id} $active={active}>
                                  <button
                                    type="button"
                                    role="radio"
                                    aria-checked={active}
                                    style={{ fontFamily: fontPackStacks[p.id] || "inherit" }}
                                    title={i18n.t("modals.UserSettingsModal.failIvMb", { count: p.count, v1: (p.size / 1024 / 1024).toFixed(1) })}
                                    onClick={() => updateLivePreview({ fontFamily: active ? "" : fontPackValue(p.id) })}
                                  >
                                    {p.name}
                                  </button>
                                  <button type="button" aria-label={i18n.t("modals.UserSettingsModal.vydalytyPaket", { name: p.name })} title={i18n.t("modals.UserSettingsModal.vydalytyZPrystroiu")} onClick={() => handleDeleteFontPack(p)}>
                                    <FiTrash2 />
                                  </button>
                                </FontPackChip>
                              );
                            })}
                          </FontPackList>
                        )}
                        <FontPackTip>
                          {i18n.t("modals.UserSettingsModal.neZnaieteIakyiShryft")}{" "}
                          <a href={CLAUDE_FONT_URL()} target="_blank" rel="noopener noreferrer">{i18n.t("modals.UserSettingsModal.spytaiteClaude")}</a>
                          {" "}{i18n.t("modals.UserSettingsModal.vinPidbereVilniShryfty")}
                        </FontPackTip>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <input
                        ref={fontPackInputRef}
                        type="file"
                        multiple
                        accept=".ttf,.otf,.woff,.woff2,.zip,font/*,application/zip"
                        style={{ display: "none" }}
                        onChange={handleFontPackFiles}
                      />
                      <WinButton type="button" disabled={fontPackBusy} onClick={() => fontPackInputRef.current?.click()}>
                        <FiUpload /> {i18n.t("modals.UserSettingsModal.dodaty")}
                      </WinButton>
                    </CardControl>
                  </Card>

                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#fb7185"><TbHandFinger /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.chutlyvistZhestiv")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.svaipyTaSlaidery")} {formData.gestureSensitivity}x</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl style={{ minWidth: "160px" }}>
                      <ProgressBar type="range" min="0.5" max="3" step="0.1" value={formData.gestureSensitivity}
                        onChange={(e) => updateLivePreview({ gestureSensitivity: parseFloat(e.target.value) })} />
                    </CardControl>
                  </Card>

                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#facc15"><FiMousePointer /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.shvydkyiVidhukNaKliky")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.myttievyiVidhukBezZatrymok")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => updateLivePreview({ fastClicks: !formData.fastClicks })}>
                        <ToggleStatusLabel $checked={formData.fastClicks}>{formData.fastClicks ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={formData.fastClicks} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <CardExpanded level="pro">
                    <CardLeft>
                      <CardIconBox $color="#818cf8"><TbFlipVertical /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.dzerkalnistSaitu")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.skydaietsiaPisliaPerezavantazhenniaStori")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "13px", color: "var(--s-text)" }}>{i18n.t("modals.UserSettingsModal.poHoryzontaliLivoPravo")}</span>
                        <ToggleWrapper onClick={() => setMirrorX(!mirrorX)}>
                          <ToggleStatusLabel $checked={mirrorX}>{mirrorX ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                          <SwitchPill $checked={mirrorX} />
                        </ToggleWrapper>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "13px", color: "var(--s-text)" }}>{i18n.t("modals.UserSettingsModal.poVertykaliVerkhNyz")}</span>
                        <ToggleWrapper onClick={() => setMirrorY(!mirrorY)}>
                          <ToggleStatusLabel $checked={mirrorY}>{mirrorY ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                          <SwitchPill $checked={mirrorY} />
                        </ToggleWrapper>
                      </div>
                      {(mirrorX || mirrorY) && (
                        <WinButton $danger style={{ alignSelf: "flex-start", marginTop: "4px" }} onClick={() => { setMirrorX(false); setMirrorY(false); }}>
                          {i18n.t("modals.UserSettingsModal.skynutyDzerkalnist")}
                        </WinButton>
                      )}
                    </div>
                  </CardExpanded>
                </CardGroup>
              )}

              {/* ── SITE SECTIONS TAB ─────────────────────────────────── */}
              {showTab("siteSections") && (
                <CardGroup data-settings-tab="siteSections">
                  <SectionHeaderTitle><FiCompass /> {i18n.t("modals.UserSettingsModal.sektsiiSaituTaNovyny")}</SectionHeaderTitle>
                  <SectionDescription>{i18n.t("modals.UserSettingsModal.poriadokVydymistITema")}</SectionDescription>

                  {siteSections && siteSections.map((sec, idx) => {
                    const isHidden = hiddenSections?.includes(sec.key);
                    const isDarkTheme = sectionThemes?.[sec.key] ?? isDarkMode;

                    return (
                      <CardExpanded level="medium" key={sec.key}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                          <CardLeft>
                            <CardIconBox $color={SECTION_COLORS[sec.key] || "#94a3b8"}>{SECTION_ICONS[sec.key] || <FiGrid />}</CardIconBox>
                            <CardInfo>
                              <CardTitle>{sec.label}</CardTitle>
                            </CardInfo>
                          </CardLeft>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            {/* Theme Toggle */}
                            <IconBtn onClick={() => onToggleSectionTheme(sec.key)} title={i18n.t("modals.UserSettingsModal.zminytyTemuSektsii")}>
                              {isDarkTheme ? <BsMoonStarsFill style={{ fontSize: "13px" }} /> : <FaSunIcon style={{ fontSize: "13px", color: "#ffb36c" }} />}
                            </IconBtn>

                            {/* Visibility Toggle */}
                            <IconBtn
                              onClick={() => onToggleSectionVisibility(sec.key)}
                              disabled={!isHidden && siteSections.length - (hiddenSections?.length || 0) <= 2}
                              title={isHidden ? i18n.t("modals.UserSettingsModal.pokazatySektsiiu") : i18n.t("modals.UserSettingsModal.prykhovatySektsiiu")}
                            >
                              {isHidden ? <FaEyeSlash style={{ color: "var(--s-red)" }} /> : <FaEye style={{ color: "var(--s-accent)" }} />}
                            </IconBtn>

                            {/* Move Up/Down */}
                            {sec.key !== "hero" && (
                              <>
                                <IconBtn disabled={idx <= 1} onClick={() => moveSiteSection(idx, -1)} title={i18n.t("modals.UserSettingsModal.pidniaty")}>
                                  <FiChevronUp />
                                </IconBtn>
                                <IconBtn disabled={idx === siteSections.length - 1} onClick={() => moveSiteSection(idx, 1)} title={i18n.t("modals.UserSettingsModal.opustyty")}>
                                  <FiChevronDown />
                                </IconBtn>
                              </>
                            )}
                          </div>
                        </div>
                      </CardExpanded>
                    );
                  })}

                  <div data-level="medium" style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                    <WinButton onClick={onResetSectionThemes} style={{ flex: 1 }}>
                      {i18n.t("modals.UserSettingsModal.skynutyTemySektsii")}
                    </WinButton>
                  </div>

                  <SubSectionTitle><FiGlobe /> {i18n.t("modals.UserSettingsModal.novyny")}</SubSectionTitle>

                  <Card level="medium">
                    <CardLeft>
                      <CardIconBox $color="#f97316"><FiFilter /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.filtrNovyn")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.prykhovuieNovynyProViinu")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleNewsFilter}>
                        <ToggleStatusLabel $checked={isNewsFilterOn}>{isNewsFilterOn ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={isNewsFilterOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Ретельна перевірка: весь опис замість заголовка й початку.
                      Окремою групою без рівня — видно навіть у «Простий · Бетельгейзе»,
                      де сам перемикач «Фільтр новин» схований (фільтр увімкнений за замовчуванням) */}
                  <FilterSubGroup $disabled={!isNewsFilterOn} aria-disabled={!isNewsFilterOn}>
                    <Card>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.retelnaPerevirkaNovyn")}</CardTitle>
                        <CardDescription>
                          {isNewsFilterThoroughOn
                            ? i18n.t("modals.UserSettingsModal.filtrNebazhanykhNovynChytaie")
                            : i18n.t("modals.UserSettingsModal.filtrNebazhanykhNovynChytaie2", { NEWS_FILTER_FAST_DESCRIPTION_CHARS: NEWS_FILTER_FAST_DESCRIPTION_CHARS })}
                          {" "}{i18n.t("modals.UserSettingsModal.lysheNaTsomuPrystroi")}
                        </CardDescription>
                      </CardInfo>
                      <CardControl>
                        <ToggleWrapper onClick={toggleNewsFilterThorough}>
                          <ToggleStatusLabel $checked={isNewsFilterThoroughOn}>{isNewsFilterThoroughOn ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                          <SwitchPill $checked={isNewsFilterThoroughOn} />
                        </ToggleWrapper>
                      </CardControl>
                    </Card>
                  </FilterSubGroup>

                  {/* Під-опції фільтра: завжди видно, але сірі й неактивні, коли фільтр вимкнено */}
                  <FilterSubGroup data-level="medium" $disabled={!isNewsFilterOn} aria-disabled={!isNewsFilterOn}>
                    {/* 1. М'який режим */}
                    <Card level="pro">
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.neVydaliatyAPokazuvaty")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.nebazhanaNovynaLyshaietsiaU")}
                        </CardDescription>
                      </CardInfo>
                      <CardControl>
                        <ToggleWrapper onClick={toggleNewsFilterSoft}>
                          <ToggleStatusLabel $checked={isNewsFilterSoft}>{isNewsFilterSoft ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                          <SwitchPill $checked={isNewsFilterSoft} />
                        </ToggleWrapper>
                      </CardControl>
                    </Card>


                    {/* 2. Категорії: не рекомендувати / показувати */}
                    <CardExpanded level="medium">
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.iakiTemyBachyty")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.dliaKozhnoiTemyOberit")}</CardDescription>
                      </CardInfo>
                      <div>
                        {NEWS_FILTER_CATEGORIES.map(({ key, label }) => {
                          const mode = newsFilterModes[key] || "hide";
                          return (
                            <FilterRow key={key}>
                              <span style={{ fontSize: "13px", color: "var(--s-text)" }}>{label}</span>
                              <Segmented role="radiogroup" aria-label={label}>
                                <SegmentBtn
                                  type="button"
                                  role="radio"
                                  aria-checked={mode === "hide"}
                                  $active={mode === "hide"}
                                  $tone="hide"
                                  onClick={() => setNewsFilterCategoryMode(key, "hide")}
                                >
                                  {i18n.t("modals.UserSettingsModal.neRekomenduvaty")}
                                </SegmentBtn>
                                <SegmentBtn
                                  type="button"
                                  role="radio"
                                  aria-checked={mode === "show"}
                                  $active={mode === "show"}
                                  $tone="show"
                                  onClick={() => setNewsFilterCategoryMode(key, "show")}
                                >
                                  {i18n.t("modals.UserSettingsModal.pokazuvaty")}
                                </SegmentBtn>
                              </Segmented>
                            </FilterRow>
                          );
                        })}
                      </div>
                    </CardExpanded>

                    {/* 3. Власні слова та правила */}
                    <CardExpanded level="pro">
                      <CardInfo>
                        <FilterSubTitle>{i18n.t("modals.UserSettingsModal.vlasniSlovaTaPravyla")}{newsFilterWords.length}/{NEWS_FILTER_MAX_WORDS})</FilterSubTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.novynyZTsymySlovamy")}
                        </CardDescription>
                      </CardInfo>
                      <form
                        style={{ display: "flex", gap: "8px" }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          addNewsFilterWord();
                        }}
                      >
                        <WinInput
                          type="text"
                          value={newsFilterWordDraft}
                          maxLength={NEWS_FILTER_MAX_WORD_LENGTH}
                          placeholder={i18n.t("modals.UserSettingsModal.slovoFutbolAboPravylo")}
                          disabled={!isNewsFilterOn}
                          spellCheck={false}
                          onChange={(e) => setNewsFilterWordDraft(e.target.value)}
                          style={newsFilterDraftEntry?.kind === "regex" || newsFilterDraftEntry?.kind === "invalid" ? { fontFamily: "Consolas, monospace" } : undefined}
                        />
                        <WinButton
                          type="submit"
                          disabled={
                            !isNewsFilterOn ||
                            !newsFilterWordDraft.trim() ||
                            newsFilterDraftEntry?.kind === "invalid" ||
                            newsFilterWords.length >= NEWS_FILTER_MAX_WORDS
                          }
                        >
                          <FiPlus /> {i18n.t("modals.UserSettingsModal.dodaty")}
                        </WinButton>
                      </form>
                      {newsFilterDraftEntry && (
                        <DraftHint $tone={newsFilterDraftEntry.kind}>
                          {newsFilterDraftEntry.kind === "word" && i18n.t("modals.UserSettingsModal.zvychaineSlovoBlokuvatymetsiaTekst")}
                          {newsFilterDraftEntry.kind === "regex" && i18n.t("modals.UserSettingsModal.pravyloKorektneIohoMozhna")}
                          {newsFilterDraftEntry.kind === "invalid" && i18n.t("modals.UserSettingsModal.pomylkaVPravyli", { error: newsFilterDraftEntry.error })}
                        </DraftHint>
                      )}
                      {newsFilterWords.length > 0 && (
                        <WordChips>
                          {newsFilterWords.map((word) => (
                            <WordChip key={word} $regex={parseNewsFilterEntry(word).kind !== "word"}>
                              {word}
                              <button type="button" aria-label={i18n.t("modals.UserSettingsModal.prybraty", { word: word })} onClick={() => removeNewsFilterWord(word)}>
                                <FiX />
                              </button>
                            </WordChip>
                          ))}
                        </WordChips>
                      )}

                      {/* Пояснення синтаксису правил на прикладі */}
                      <RegexHelp>
                        <RegexHelpToggle
                          type="button"
                          aria-expanded={isRegexHelpOpen}
                          aria-controls="news-filter-regex-help"
                          onClick={() => setIsRegexHelpOpen((v) => !v)}
                        >
                          <RegexHelpChevron $open={isRegexHelpOpen} aria-hidden="true">
                            <FiChevronDown />
                          </RegexHelpChevron>
                          {i18n.t("modals.UserSettingsModal.iakPysatyPravylaRehuliarni")}
                        </RegexHelpToggle>
                        <AnimatePresence initial={false}>
                          {isRegexHelpOpen && (
                            <motion.div
                              id="news-filter-regex-help"
                              key="regex-help"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                              style={{ overflow: "hidden" }}
                            >
                        <p>
                          {i18n.t("modals.UserSettingsModal.pravyloTseShablonMizh")}
                        </p>
                        <RegexExample>
                          <code>{NEWS_FILTER_REGEX_EXAMPLE}</code>
                          <WinButton type="button" onClick={() => setNewsFilterWordDraft(NEWS_FILTER_REGEX_EXAMPLE)}>
                            {i18n.t("modals.UserSettingsModal.vstavytyPryklad")}
                          </WinButton>
                        </RegexExample>
                        <p>
                          {i18n.t("modals.UserSettingsModal.spratsiuieNa")} <i>{i18n.t("modals.UserSettingsModal.uriadUriaduUriadomParlament")}</i>{i18n.t("modals.UserSettingsModal.neSpratsiuieNa")} <i>{i18n.t("modals.UserSettingsModal.vladykaBezvladdia")}</i>.
                        </p>
                        <RegexLegend>
                          {NEWS_FILTER_REGEX_LEGEND().map(([token, text]) => (
                            <Fragment key={token}>
                              <code>{token}</code>
                              <span>{text}</span>
                            </Fragment>
                          ))}
                        </RegexLegend>
                        <p style={{ marginTop: "10px" }}>{i18n.t("modals.UserSettingsModal.inshiKorysniElementy")}</p>
                        <RegexLegend>
                          {NEWS_FILTER_REGEX_EXTRA().map(([token, text]) => (
                            <Fragment key={token}>
                              <code>{token}</code>
                              <span>{text}</span>
                            </Fragment>
                          ))}
                        </RegexLegend>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </RegexHelp>
                    </CardExpanded>

                    <FilterNotes>
                      <span><FiInfo aria-hidden="true" /> {i18n.t("modals.UserSettingsModal.noviNalashtuvanniaIakI")}</span>
                      <span data-level="pro"><FiInfo aria-hidden="true" /> {i18n.t("modals.UserSettingsModal.rozhlushenaPlashkaVidkrytaLyshe")}</span>
                    </FilterNotes>
                  </FilterSubGroup>

                  {/* Вигляд новин: блоки-картки в каруселі або список (фото ліворуч, заголовок праворуч) */}
                  <Card level="medium">
                    <CardLeft>
                      <CardIconBox $color="#ffaa00">{newsViewMode === "list" ? <FiList /> : <FiGrid />}</CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.vyhliadNovyn")}</CardTitle>
                        <CardDescription>
                          {newsViewMode === "list"
                            ? i18n.t("modals.UserSettingsModal.spysokMalenkeFotoLivoruch")
                            : i18n.t("modals.UserSettingsModal.blokyVelykiKartkyZ")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <Segmented role="radiogroup" aria-label={i18n.t("modals.UserSettingsModal.vyhliadNovyn")}>
                        {NEWS_VIEW_MODES.map((mode) => {
                          const active = (newsViewMode === "list" ? "list" : "cards") === mode.id;
                          return (
                            <SegmentBtn
                              key={mode.id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              $active={active}
                              $tone="show"
                              style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
                              onClick={() => setNewsViewMode(mode.id)}
                            >
                              {mode.id === "list" ? <FiList aria-hidden="true" /> : <FiGrid aria-hidden="true" />}
                              {mode.label}
                            </SegmentBtn>
                          );
                        })}
                      </Segmented>
                    </CardControl>
                  </Card>

                  {/* Додавання стрічок і чорний список — вміст підставляє News.jsx */}
                  <CardExpanded level="medium">
                    <CardLeft>
                      <CardIconBox $color="#ffaa00"><FiRss /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.moiStrichky")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.dodaiteSaitRssYoutube")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <NewsFeedsSlot ref={newsFeedsSlotRef} data-empty={i18n.t("ui.UserSettingsModal.newsFeedsEmpty")} />
                  </CardExpanded>

                  {/* Термінові новини: позначка й порядок — завжди, системні сповіщення — за перемикачем */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#ef4444"><FiBell /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.spovishchenniaProTerminoviNovyny")}</CardTitle>
                        <CardDescription>
                          {isUrgentBusy
                            ? i18n.t("modals.UserSettingsModal.pidkliuchaiemoSpovishchennia")
                            : isUrgentNotifyOn && urgentDelivery === "push"
                              ? i18n.t("modals.UserSettingsModal.prykhodiatNavitTodiKoly")
                              : isPushSupported()
                                ? i18n.t("modals.UserSettingsModal.systemneSpovishchenniaProTerminovu")
                                : i18n.t("modals.UserSettingsModal.systemneSpovishchenniaProTerminovu2")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleUrgentNotify}>
                        <ToggleStatusLabel $checked={isUrgentNotifyOn}>{isUrgentNotifyOn ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={isUrgentNotifyOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <FilterSubGroup data-level="pro">
                    <CardExpanded level="pro">
                      <CardInfo>
                        <FilterSubTitle>{i18n.t("modals.UserSettingsModal.slovaTerminovykhNovyn")}{urgentWords.length}/{URGENT_MAX_WORDS})</FilterSubTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.novynaZTsymySlovamy")}
                        </CardDescription>
                      </CardInfo>
                      <form
                        style={{ display: "flex", gap: "8px" }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          addUrgentWord();
                        }}
                      >
                        <WinInput
                          type="text"
                          value={urgentWordDraft}
                          maxLength={URGENT_MAX_WORD_LENGTH}
                          placeholder={i18n.t("modals.UserSettingsModal.slovoAboIohoPochatok")}
                          spellCheck={false}
                          onChange={(e) => setUrgentWordDraft(e.target.value)}
                        />
                        <WinButton
                          type="submit"
                          disabled={!urgentWordDraft.trim() || urgentWords.length >= URGENT_MAX_WORDS}
                        >
                          <FiPlus /> {i18n.t("modals.UserSettingsModal.dodaty")}
                        </WinButton>
                      </form>
                      {urgentWords.length > 0 && (
                        <WordChips>
                          {urgentWords.map((word) => (
                            <WordChip key={word}>
                              {word}
                              <button type="button" aria-label={i18n.t("modals.UserSettingsModal.prybraty", { word: word })} onClick={() => removeUrgentWord(word)}>
                                <FiX />
                              </button>
                            </WordChip>
                          ))}
                        </WordChips>
                      )}
                      <div>
                        <WinButton type="button" onClick={restoreUrgentWords}>
                          <FiRotateCcw /> {i18n.t("modals.UserSettingsModal.povernutyStandartniSlova")}
                        </WinButton>
                      </div>
                    </CardExpanded>
                  </FilterSubGroup>

                  {/* Небезпечна погода: для кожної картки, вимикається в меню ⚙ картки */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#facc15"><FiCloudLightning /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.spovishchenniaProNebezpechnuPohodu")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.hrozaHradShtormovyiPoryvy")} {GUST_STORM_MS} {i18n.t("modals.UserSettingsModal.mSChyUrahannyi")} {WEATHER_ALERT_HOURS} {i18n.t("modals.UserSettingsModal.hodynDliaKozhnoiKartky")}
                          {isWeatherAlertsOn && urgentDelivery === "push" ? " " + i18n.t("modals.UserSettingsModal.prykhodiatNavitTodiKoly2") : ""}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleWeatherAlerts}>
                        <ToggleStatusLabel $checked={isWeatherAlertsOn}>{isWeatherAlertsOn ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={isWeatherAlertsOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Ранковий прогноз: щодня о 7:00 для обраної картки, лише push */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fb923c"><FiSunrise /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.rankovyiProhnozO")} {MORNING_BRIEF_HOUR}:00</CardTitle>
                        <CardDescription>
                          {isUrgentBusy
                            ? i18n.t("modals.UserSettingsModal.pidkliuchaiemoSpovishchennia")
                            : i18n.t("modals.UserSettingsModal.shchorankuOdneSpovishchenniaKonotop", { v0: isPushSupported() ? "" : i18n.t("ui.UserSettingsModal.noPushHint") })}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleMorningBrief}>
                        <ToggleStatusLabel $checked={isMorningOn}>{isMorningOn ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={isMorningOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Частота: однакова для термінових новин і погоди */}
                  <FilterSubGroup $disabled={!isAnyEmergencyOn} aria-disabled={!isAnyEmergencyOn}>
                    <CardExpanded>
                      <CardInfo>
                        <FilterSubTitle>{i18n.t("modals.UserSettingsModal.pauzaMizhSpovishchenniamy")}</FilterSubTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.pisliaSpovishchenniaNastupnaNovyna")}
                        </CardDescription>
                      </CardInfo>
                      <div>
                        <Segmented role="radiogroup" aria-label={i18n.t("modals.UserSettingsModal.pauzaMizhSpovishchenniamy")}>
                          {ALERT_PAUSE_OPTIONS.map((m) => (
                            <SegmentBtn
                              key={m}
                              type="button"
                              role="radio"
                              aria-checked={alertPause === m}
                              $active={alertPause === m}
                              $tone="show"
                              disabled={!isAnyEmergencyOn}
                              onClick={() => chooseAlertPause(m)}
                            >
                              {formatPause(m)}
                            </SegmentBtn>
                          ))}
                        </Segmented>
                      </div>
                    </CardExpanded>
                    <CardExpanded>
                      <CardInfo>
                        <FilterSubTitle>{i18n.t("modals.UserSettingsModal.neBilshe")} {alertDailyLimit} {i18n.t("modals.UserSettingsModal.spovishchenNaDobu")}</FilterSubTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.razomDliaTerminovykhNovyn")}
                        </CardDescription>
                      </CardInfo>
                      <ProgressBar
                        type="range"
                        min={ALERT_DAILY_MIN}
                        max={ALERT_DAILY_MAX}
                        step="1"
                        value={alertDailyLimit}
                        disabled={!isAnyEmergencyOn}
                        aria-label={i18n.t("modals.UserSettingsModal.skilkyEkstrenykhSpovishchenNa")}
                        onChange={(e) => changeAlertDailyLimit(Number(e.target.value))}
                      />
                    </CardExpanded>
                  </FilterSubGroup>

                  {/* Персональні рекомендації: обрані теми + що користувач відкриває */}
                  <Card level="medium">
                    <CardLeft>
                      <CardIconBox $color="#f472b6"><FiHeart /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.personalniRekomendatsii")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.tsikavishiVamNovynyStoiat")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleRecs}>
                        <ToggleStatusLabel $checked={isRecsOn}>{isRecsOn ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={isRecsOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <FilterSubGroup data-level="pro" $disabled={!isRecsOn} aria-disabled={!isRecsOn}>
                    <CardExpanded level="pro">
                      <CardInfo>
                        <FilterSubTitle>{i18n.t("modals.UserSettingsModal.moiTemy")}</FilterSubTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.novynyNaTsiTemy")}</CardDescription>
                      </CardInfo>
                      <WordChips>
                        {NEWS_TOPICS.map((topic) => {
                          const active = recsTopics.includes(topic.id);
                          return (
                            <TopicChip
                              key={topic.id}
                              type="button"
                              aria-pressed={active}
                              $active={active}
                              disabled={!isRecsOn}
                              onClick={() => toggleRecsTopic(topic.id)}
                            >
                              {active ? <FiCheck aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                              {topic.label}
                            </TopicChip>
                          );
                        })}
                      </WordChips>
                    </CardExpanded>

                    <CardExpanded level="pro">
                      <CardInfo>
                        <FilterSubTitle>{i18n.t("modals.UserSettingsModal.shchoStykhiiaVzheZnaie")}</FilterSubTitle>
                        <CardDescription>
                          {hasRecsHistory
                            ? [
                                recsInterests.topics.length > 0 && i18n.t("modals.UserSettingsModal.temy", { v0: recsInterests.topics.join(", ") }),
                                recsInterests.sources.length > 0 && i18n.t("modals.UserSettingsModal.dzherela", { v0: recsInterests.sources.join(", ") }),
                              ].filter(Boolean).join(" · ")
                            : i18n.t("modals.UserSettingsModal.pokyNichohoVidkryiteKilka")}
                        </CardDescription>
                      </CardInfo>
                      <div>
                        <WinButton type="button" onClick={clearRecsHistory} disabled={!isRecsOn || !hasRecsHistory}>
                          <FiTrash2 /> {i18n.t("modals.UserSettingsModal.zabutyMoiKliky")}
                        </WinButton>
                      </div>
                    </CardExpanded>

                    <FilterNotes>
                      <span><FiInfo aria-hidden="true" /> {i18n.t("modals.UserSettingsModal.temyIPeremykachiZminiuiut")}</span>
                    </FilterNotes>
                  </FilterSubGroup>

                  {!isGuest ? (
                    <Card level="pro">
                      <CardLeft>
                        <CardIconBox $color="#e879f9"><FiBellOff /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.synkhronizatsiiaZahlushenykhNovynI")}</CardTitle>
                          <CardDescription>
                            {i18n.t("modals.UserSettingsModal.synkhronizuvatyPrykhovaniNovynyTa")} {MUTE_SYNC_DAILY_LIMIT} {i18n.t("modals.UserSettingsModal.diiNaDobuZahlushyty")}
                          </CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <CardControl>
                        <ToggleWrapper onClick={() => updateLivePreview({ syncMutedNews: !formData.syncMutedNews })}>
                          <ToggleStatusLabel $checked={formData.syncMutedNews}>{formData.syncMutedNews ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                          <SwitchPill $checked={formData.syncMutedNews} />
                        </ToggleWrapper>
                      </CardControl>
                    </Card>
                  ) : (
                    <Card level="pro" style={{ opacity: 0.45 }}>
                      <CardLeft>
                        <CardIconBox $color="#e879f9"><FiBellOff /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.synkhronizatsiiaZahlushenykhNovynI")}</CardTitle>
                          <CardDescription>{i18n.t("modals.UserSettingsModal.dostupnoTilkyDliaZareiestrovanykh")}</CardDescription>
                        </CardInfo>
                      </CardLeft>
                    </Card>
                  )}

                  <CardExpanded level="pro">
                    <CardLeft>
                      <CardIconBox $color="#c4b5fd"><FiEye /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.vydymistElementivNovyn")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.uvimknitAboVymknitChastyny")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      {newsLayout.filter((b) => b.key !== "image").map((block) => (
                        <div key={block.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: "13px", color: "var(--s-text)" }}>
                            {block.key === "title" ? i18n.t("modals.UserSettingsModal.zaholovokNovyny") : i18n.t("modals.UserSettingsModal.opysNovyny")}
                          </span>
                          <ToggleWrapper onClick={() => toggleNewsBlockVisibility(block.key)}>
                            <ToggleStatusLabel $checked={block.visible}>{block.visible ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                            <SwitchPill $checked={block.visible} />
                          </ToggleWrapper>
                        </div>
                      ))}
                    </div>
                  </CardExpanded>
                </CardGroup>
              )}

              {/* ── MODES & LOADING TAB ───────────────────────────────── */}
              {showTab("modes") && (
                <CardGroup data-settings-tab="modes">
                  <SectionHeaderTitle><FiZap /> {i18n.t("modals.UserSettingsModal.rezhymySaituTaZastosunky")}</SectionHeaderTitle>
                  <SectionDescription>{i18n.t("modals.UserSettingsModal.temaAktsentnyiKolirShvydkist")}</SectionDescription>

                  {/* Restart tutorial */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#86efac"><TbSchool /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.navchanniaVidDomino")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.proityInteraktyvneNavchanniaPo")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton
                        disabled={!tutorial}
                        onClick={() => {
                          handleCancel();
                          setTimeout(() => tutorial?.startTutorial(), 300);
                        }}
                      >
                        <FiPlay /> {i18n.t("modals.UserSettingsModal.zapustyty")}
                      </WinButton>
                    </CardControl>
                  </Card>

                  {/* Theme Mode */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#ffb36c">{isDarkMode ? <BsMoonStarsFill /> : <FaSunIcon style={{ color: "#ffb36c" }} />}</CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.holovnaTemaSaitu")}</CardTitle>
                        <CardDescription>{isDarkMode ? i18n.t("modals.UserSettingsModal.temnaTemaAktyvna") : i18n.t("modals.UserSettingsModal.svitlaTemaAktyvna")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton onClick={onToggleTheme}>
                        {isDarkMode ? <><BsMoonStarsFill /> {i18n.t("modals.UserSettingsModal.temna")}</> : <><FaSunIcon style={{ color: "#ffb36c" }} /> {i18n.t("modals.UserSettingsModal.svitla")}</>}
                      </WinButton>
                    </CardControl>
                  </Card>

                  {/* Accent color */}
                  <CardExpanded level="medium">
                    <CardLeft>
                      <CardIconBox $color={accentColor || "var(--s-accent)"}><GiPalette /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.aktsentnyiKolirShapky")}</CardTitle>
                        <CardDescription>
                          {accentColor ? i18n.t("modals.UserSettingsModal.aktsent", { v0: getAccentLabel(accentColor) }) : i18n.t("modals.UserSettingsModal.bezNakladenniaKoloru")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <AccentSwatches
                      isDarkMode
                      accentColor={accentColor}
                      onPick={setAccentColor}
                      columns={ACCENT_COLORS.length}
                    />
                  </CardExpanded>

                  {/* Sticky BG */}
                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#5eead4"><FiAnchor /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.lypkyiFonovyiEfekt")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.zakriplenniaZadnohoPlanuPry")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={onToggleStickyBg}>
                        <ToggleStatusLabel $checked={isStickyBgMode}>{isStickyBgMode ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={isStickyBgMode} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Loading Strategy */}
                  <CardExpanded level="pro">
                    <CardLeft>
                      <CardIconBox $color="var(--s-blue)"><FiDownloadCloud /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.stratehiiaZavantazhenniaResursiv")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.optymizatsiiaShvydkostiZapuskuTa")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                      {[
                        { key: "eager", label: i18n.t("modals.UserSettingsModal.povnyi"), desc: i18n.t("modals.UserSettingsModal.zavantazhuieVseVidrazuPry") },
                        { key: "delayed", label: i18n.t("modals.UserSettingsModal.optymalnyi"), desc: i18n.t("modals.UserSettingsModal.zavantazhuieVazhkiModuliCherez") },
                        { key: "lazy", label: i18n.t("modals.UserSettingsModal.ekonomnyi"), desc: i18n.t("modals.UserSettingsModal.zavantazhuieTilkyZaPotreboiu") },
                      ].map(({ key, label }) => (
                        <WinButton
                          key={key}
                          onClick={() => onSetLoadingStrategy(key)}
                          style={{
                            flex: 1, minWidth: "120px",
                            background: loadingStrategy === key ? "rgba(var(--s-accent-rgb),0.15)" : undefined,
                            borderColor: loadingStrategy === key ? "var(--s-accent)" : undefined,
                          }}
                        >
                          {label}
                        </WinButton>
                      ))}
                    </div>
                  </CardExpanded>

                  {/* Картка «Працює на базі» внизу екрана при відкритті сайту (HeroCredits).
                      Режим «Простий · Бетельгейзе» — щоб вимкнути її міг кожен */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#a3e635"><FiLayers /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.pratsiuieNaBaziPry")}</CardTitle>
                        <CardDescription>
                          {loaderPoweredBy === "off"
                            ? i18n.t("modals.UserSettingsModal.kartkuVymknenoPryVidkrytti")
                            : loaderPoweredBy === "hidden"
                            ? i18n.t("modals.UserSettingsModal.uKarttsiLysheFraza")
                            : loaderPoweredBy === "icons"
                              ? i18n.t("modals.UserSettingsModal.lysheIkonkyServisivBez")
                              : i18n.t("modals.UserSettingsModal.pidpysPratsiuieNaBazi")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <Segmented role="radiogroup" aria-label={i18n.t("modals.UserSettingsModal.pratsiuieNaBaziPry")}>
                        {LOADER_POWERED_BY_OPTIONS.map((option) => {
                          const active = loaderPoweredBy === option.id;
                          return (
                            <SegmentBtn
                              key={option.id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              $active={active}
                              $tone={option.id === "off" ? "hide" : "show"}
                              onClick={() => setPref(LOADER_POWERED_BY_KEY, option.id)}
                            >
                              {option.label}
                            </SegmentBtn>
                          );
                        })}
                      </Segmented>
                    </CardControl>
                  </Card>

                  {/* Decorator Mode. data-decorator-ignore — щоб кліки по цій картці не перехоплював сам Декоратор */}
                  <CardExpanded level="pro" data-decorator-ignore="true">
                    <CardLeft>
                      <CardIconBox $color="#d946ef"><FiPenTool /></CardIconBox>
                      <CardInfo>
                        <CardTitle>
                          {i18n.t("modals.UserSettingsModal.rezhymDekoratoraCssRedaktor")}{" "}
                          <span
                            title={i18n.t("modals.UserSettingsModal.eksperymentalnaFunktsiia")}
                            style={{
                              display: "inline-block",
                              marginLeft: "6px",
                              padding: "1px 8px",
                              borderRadius: "999px",
                              fontSize: "11px",
                              fontWeight: 600,
                              verticalAlign: "middle",
                              color: "#d946ef",
                              background: "rgba(217,70,239,0.14)",
                            }}
                          >
                            {i18n.t("modals.UserSettingsModal.eksperymentalno")}
                          </span>
                        </CardTitle>
                        <CardDescription>
                          {viewMode === "edit"
                            ? i18n.t("modals.UserSettingsModal.zakryiteParametryIKlatsnit")
                            : viewMode === "view"
                              ? i18n.t("modals.UserSettingsModal.perehliadZminyDekoratoraVydno")
                              : i18n.t("modals.UserSettingsModal.vymknenoSaitBezZmin")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      {/* М'яке попередження: Декоратор прив'язується до будови сторінки, а вона з оновленнями змінюється */}
                      <div
                        role="note"
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                          padding: "10px 12px",
                          borderRadius: "8px",
                          fontSize: "12.5px",
                          lineHeight: 1.5,
                          color: "var(--s-text-2)",
                          background: "rgba(217,70,239,0.07)",
                          border: "1px solid rgba(217,70,239,0.22)",
                        }}
                      >
                        <span aria-hidden="true" style={{ fontSize: "15px", lineHeight: 1.3 }}>🧪</span>
                        <span>
                          {i18n.t("modals.UserSettingsModal.dekoratorPokyShchoEksperymentalnyi")}
                        </span>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "13px", color: "var(--s-text)" }}>{i18n.t("modals.UserSettingsModal.rezhymDekoratora")}</span>
                        <Segmented role="radiogroup" aria-label={i18n.t("modals.UserSettingsModal.rezhymDekoratora")}>
                          {DECORATOR_VIEW_OPTIONS.map((option) => {
                            const active = viewMode === option.id;
                            return (
                              <SegmentBtn
                                key={option.id}
                                type="button"
                                role="radio"
                                aria-checked={active}
                                title={option.hint}
                                $active={active}
                                $tone={option.id === "off" ? "hide" : "show"}
                                onClick={() => setViewMode(option.id)}
                              >
                                {option.label}
                              </SegmentBtn>
                            );
                          })}
                        </Segmented>
                      </div>

                      {viewMode !== "off" && (
                        <>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "13px", color: "var(--s-text)" }}>{i18n.t("modals.UserSettingsModal.zberihatyZminyPisliaOnovlennia")}</span>
                            <ToggleWrapper onClick={() => setIsPersistent(!isPersistent)}>
                              <ToggleStatusLabel $checked={isPersistent}>{isPersistent ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                              <SwitchPill $checked={isPersistent} />
                            </ToggleWrapper>
                          </div>

                          <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--s-accent)", marginTop: "4px" }}>
                            {i18n.t("modals.UserSettingsModal.vyhliadSaituKozhenShablon")}
                          </div>
                          <DecoratorPresetRow role="radiogroup" aria-label={i18n.t("modals.UserSettingsModal.vyhliadSaituVDekoratori")}>
                            {DECORATOR_PRESETS.map((preset) => {
                              const isOriginal = preset.id === "original";
                              const active = isOriginal ? showOriginal : !showOriginal && activePreset === preset.id;
                              const count = isOriginal ? 0 : presetChangeCounts[preset.id] || 0;
                              return (
                                <DecoratorPresetBtn
                                  key={preset.id}
                                  type="button"
                                  role="radio"
                                  aria-checked={active}
                                  $active={active}
                                  onClick={() => (isOriginal ? setShowOriginal(true) : switchPreset(preset.id))}
                                >
                                  <DecoratorPresetThumb accent={preset.accent} rounded={preset.rounded} variant={preset.variant} />
                                  <DecoratorPresetName title={preset.label}>{preset.label}</DecoratorPresetName>
                                  <DecoratorPresetMeta>
                                    {isOriginal ? preset.hint : count ? i18n.t("modals.UserSettingsModal.zmin", { count: count }) : i18n.t("modals.UserSettingsModal.porozhnii")}
                                  </DecoratorPresetMeta>
                                </DecoratorPresetBtn>
                              );
                            })}
                          </DecoratorPresetRow>
                          {showOriginal && (
                            <span style={{ fontSize: "11px", color: "var(--s-muted)" }}>
                              {i18n.t("modals.UserSettingsModal.zarazVydnoSaitBez")}
                            </span>
                          )}

                          <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--s-accent)", marginTop: "4px" }}>
                            {i18n.t("modals.UserSettingsModal.zhurnalZmin")}{changeLog.length})
                          </div>

                          {changeLog.length > 0 ? (
                            <div style={{ maxHeight: "140px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "4px" }}>
                              {changeLog.map((log) => (
                                <div key={log.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(var(--s-ink),0.04)", padding: "4px 8px", borderRadius: "4px", fontSize: "11px" }}>
                                  <span><b style={{ color: "var(--s-accent)" }}>{log.tagName}</b> {DECORATOR_LOG_LABELS[log.property] || log.property}: {formatDecoratorLogValue(log.newValue)}</span>
                                  <WinButton style={{ padding: "2px 6px", fontSize: "10px" }} onClick={() => undoChange(log.id)}>{i18n.t("modals.UserSettingsModal.vidminyty")}</WinButton>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span style={{ fontSize: "11px", color: "var(--s-muted)", fontStyle: "italic" }}>{i18n.t("modals.UserSettingsModal.zminShcheNemaie")}</span>
                          )}

                          {decorItems.length > 0 && (
                            <span style={{ fontSize: "12px", color: "var(--s-muted)" }}>
                              {i18n.t("modals.UserSettingsModal.dekorObiektivFotoVideo")} {decorItems.length}{i18n.t("modals.UserSettingsModal.zminiuvatyIkhURezhymi")}
                            </span>
                          )}

                          {(changeLog.length > 0 || decorItems.length > 0) && (
                            <WinButton $danger onClick={resetAll} style={{ alignSelf: "flex-start" }}>
                              {i18n.t("modals.UserSettingsModal.skynutyVsiZminyDekoratora")}
                            </WinButton>
                          )}
                        </>
                      )}
                    </div>
                  </CardExpanded>

                  <SubSectionTitle><FiDownload /> {i18n.t("modals.UserSettingsModal.zastosunkyStykhii")}</SubSectionTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#00a4ef"><FaWindows /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.versiiaDliaWindows")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.zavantazhytyZastosunokStuxiaDlia")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton
                        as="a"
                        $primary
                        href="https://github.com/TheTurkeyProgramist/stuxia/releases/download/v1.0.0/stuxia_1.0.0_x64-setup.exe"
                      >
                        <FiDownload /> {i18n.t("modals.UserSettingsModal.zavantazhyty")}
                      </WinButton>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#3ddc84"><FaAndroid /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.versiiaDliaAndroid")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.apkDliaVstanovlenniaNa")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton
                        as="a"
                        $primary
                        href="https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Android.apk"
                      >
                        <FiDownload /> {i18n.t("modals.UserSettingsModal.zavantazhytyApk")}
                      </WinButton>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fcc624"><FaLinux /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.versiiaDliaLinux")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.ubuntu2204Debian")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton
                        as="a"
                        $primary
                        href="https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Linux.AppImage"
                      >
                        <FiDownload /> AppImage
                      </WinButton>
                      <WinButton
                        as="a"
                        href="https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Linux.deb"
                      >
                        <FiDownload /> DEB
                      </WinButton>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#d1d5db"><FaApple /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.naIphoneTaIpad")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.vidkryiteSaitUSafari")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton
                        as="a"
                        $primary
                        href="https://stuxia.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGlobe /> {i18n.t("modals.UserSettingsModal.vidkrytySait")}
                      </WinButton>
                    </CardControl>
                  </Card>
                </CardGroup>
              )}

              {/* ── VISUAL FILTERS TAB ─────────────────────────────────── */}
              {showTab("filters") && (
                <CardGroup data-settings-tab="filters">
                  <SectionHeaderTitle><FiEye /> {i18n.t("modals.UserSettingsModal.vizualniFiltryTaPresety")}</SectionHeaderTitle>
                  <SectionDescription>
                    {i18n.t("modals.UserSettingsModal.zatemnenniaKoloroviFiltryDlia")}
                    {isFiltersPreviewOn && <WideScreenOnly as="span"> {i18n.t("modals.UserSettingsModal.rezultatVydnoNaStorintsi")}</WideScreenOnly>}
                  </SectionDescription>
                  <TabLevelHint tab="filters" />

                  {/* Side-by-side preview */}
                  <WideScreenOnly>
                  <Card level="pro">
                    <CardLeft>
                      <CardIconBox $color="#fdba74"><FiColumns /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.perehliadPoruchZiStorinkoiu")}</CardTitle>
                        <CardDescription>
                          {isFiltersPreviewOn
                            ? i18n.t("modals.UserSettingsModal.naTsiiVkladtsiVikno")
                            : i18n.t("modals.UserSettingsModal.viknoNalashtuvanZvychainohoRozmiru")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleFiltersPreview}>
                        <ToggleStatusLabel $checked={isFiltersPreviewOn}>
                          {isFiltersPreviewOn ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={isFiltersPreviewOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {isFiltersPreviewOn && (
                    <Card level="pro">
                      <CardLeft>
                        <CardIconBox $color="#fcd34d"><FiMaximize2 /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.shyrynaViknaVRezhymi")}</CardTitle>
                          <CardDescription>{filtersPreviewWidth}{i18n.t("modals.UserSettingsModal.shyrynyEkrana")}</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <CardControl style={{ minWidth: "180px" }}>
                        <ProgressBar
                          type="range"
                          min={FILTERS_PREVIEW_MIN_WIDTH}
                          max={FILTERS_PREVIEW_MAX_WIDTH}
                          step="4"
                          value={filtersPreviewWidth}
                          onChange={(e) => changeFiltersPreviewWidth(Number(e.target.value))}
                        />
                      </CardControl>
                    </Card>
                  )}
                  </WideScreenOnly>

                  {/* Dark intensity slider */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fde047"><TbBrightnessDown /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.zmenshenniaIaskravostiZatemnennia")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.intensyvnist")} {visualConfig.darkIntensity || 0}%</CardDescription>
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
                      <CardIconBox $color="#f0abfc"><TbColorFilter /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.koloroviTaZoroviFiltry")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.oberitEfektDliaOformlennia")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <FilterGrid style={{ marginTop: "4px" }}>
                      {FILTERS.map((f) => (
                        <FilterCardBtn
                          key={f.id}
                          $active={visualConfig.filterType === f.id}
                          onClick={() => setVisualConfig((p) => selectFilter(p, f.id))}
                        >
                          {f.label}
                        </FilterCardBtn>
                      ))}
                    </FilterGrid>
                  </CardExpanded>

                  {/* Filter Intensity */}
                  {visualConfig.filterType !== "none" && (
                    <Card level="pro">
                      <CardLeft>
                        <CardIconBox $color="#fca5a5"><FiSlidersIcon /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.sylaEfektuFiltra")}</CardTitle>
                          <CardDescription>{i18n.t("modals.UserSettingsModal.intensyvnist")} {visualConfig.filterIntensity || 50}%</CardDescription>
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

                  {/* Example image: on narrow screens the page behind the modal isn't visible */}
                  <FilterExampleCard>
                    <CardLeft>
                      <CardIconBox $color="#67e8f9"><FiImage /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.pryklad")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.takFiltrVyhliadatymeNa")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <FilterExampleImage
                      src={filterExampleImg}
                      alt={i18n.t("modals.UserSettingsModal.prykladVizualnohoFiltra")}
                      loading="lazy"
                      style={{ filter: getPreviewFilter(visualConfig) }}
                    />
                  </FilterExampleCard>

                  {/* Combo builder */}
                  <CardExpanded level="pro">
                    <CardLeft>
                      <CardIconBox $color="#a5b4fc"><FiLayers /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.kombinatsiiaFiltriv")}</CardTitle>
                        <CardDescription>
                          {comboIds.length > 1
                            ? i18n.t("modals.UserSettingsModal.razomDiiut", { v0: comboIds.map((id) => FILTERS.find((f) => f.id === id)?.label).join(" + ") })
                            : i18n.t("modals.UserSettingsModal.poznachteKilkaFiltrivShchob")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <FilterGrid style={{ marginTop: "4px" }}>
                      {COMBINABLE_FILTERS.map((f) => (
                        <FilterCardBtn key={f.id} $active={comboIds.includes(f.id)} onClick={() => toggleComboFilter(f.id)}>
                          {comboIds.includes(f.id) ? <FiCheck /> : <FiPlus />} {f.label}
                        </FilterCardBtn>
                      ))}
                    </FilterGrid>
                  </CardExpanded>

                  {/* Presets Manager */}
                  <CardExpanded level="pro">
                    <CardLeft>
                      <CardIconBox $color="#f9a8d4"><TbWand /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.shvydkiStyliTaPresety")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.hotoviStyliTaVlasni")}{customPresets.length}/{MAX_CUSTOM_PRESETS}{i18n.t("modals.UserSettingsModal.khederINalashtuvanniaFiltry")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <PresetGrid style={{ marginTop: "4px" }}>
                      {PRESETS.map((p) => (
                        <FilterCardBtn key={p.id} onClick={() => setVisualConfig(p.config)}>
                          <p.icon /> {p.label}
                        </FilterCardBtn>
                      ))}
                      {customPresets.map((p) => (
                        <CustomPresetCard key={p.id}>
                          <FilterCardBtn style={{ border: "none", flex: 1, padding: "2px" }} onClick={() => setVisualConfig(p.config)}>
                            <FiPresetStar /> {presetName(p)}
                          </FilterCardBtn>
                          <IconBtn
                            onClick={() => {
                              const n = window.prompt(i18n.t("modals.UserSettingsModal.novaNazvaPreseta"), presetName(p));
                              if (n) onUpdatePresetName(p.id, n);
                            }}
                            title={i18n.t("modals.UserSettingsModal.pereimenuvaty")}
                            style={{ width: 22, height: 22, fontSize: 10 }}
                          >
                            <FiEdit2 />
                          </IconBtn>
                          <IconBtn
                            $danger
                            onClick={() => onDeletePreset(p.id)}
                            title={i18n.t("modals.UserSettingsModal.vydalyty")}
                            style={{ width: 22, height: 22, fontSize: 10 }}
                          >
                            <FiX />
                          </IconBtn>
                        </CustomPresetCard>
                      ))}
                    </PresetGrid>

                    <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                      <WinInput
                        placeholder={customPresets.length >= MAX_CUSTOM_PRESETS ? i18n.t("modals.UserSettingsModal.dosiahnutoLimitVydalitPreset") : i18n.t("modals.UserSettingsModal.nazvaNovohoPreseta")}
                        value={newPresetName}
                        onChange={(e) => setNewPresetName(e.target.value)}
                        maxLength={15}
                        disabled={customPresets.length >= MAX_CUSTOM_PRESETS}
                      />
                      <WinButton
                        disabled={customPresets.length >= MAX_CUSTOM_PRESETS || !newPresetName.trim()}
                        onClick={() => {
                          if (newPresetName.trim()) {
                            onSavePreset(newPresetName);
                            setNewPresetName("");
                          }
                        }}
                      >
                        {i18n.t("modals.UserSettingsModal.zberehty")}
                      </WinButton>
                    </div>
                  </CardExpanded>

                  <WinButton $danger onClick={onResetFilters} style={{ alignSelf: "flex-start", marginTop: "4px" }}>
                    <FiRotateCcw /> {i18n.t("modals.UserSettingsModal.skynutyVsiFiltry")}
                  </WinButton>
                </CardGroup>
              )}

              {/* ── BG MUSIC TAB ────────────────────────────────────── */}
              {showTab("bgMusic") && (
                <CardGroup data-settings-tab="bgMusic">
                  <SectionHeaderTitle><FiMusic /> {i18n.t("modals.UserSettingsModal.fonovaMuzyka")}</SectionHeaderTitle>
                  <SectionDescription>{i18n.t("modals.UserSettingsModal.huchnistShvydkistIRezhym")}</SectionDescription>
                  <TabLevelHint tab="bgMusic" />

                  {/* Main toggle */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#a78bfa"><FiMusic /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.fonovaMuzyka")}</CardTitle>
                        <CardDescription>{i18n.t("modals.UserSettingsModal.vmykaitePryiemnuMuzykuPid")}</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => setBgMusicEnabled(!bgMusicEnabled)}>
                        <ToggleStatusLabel $checked={bgMusicEnabled}>{bgMusicEnabled ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}</ToggleStatusLabel>
                        <SwitchPill $checked={bgMusicEnabled} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <MusicSettingsWrap $off={!bgMusicEnabled}>
                    {/* Volume + Speed + Mode */}
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox $color="#c084fc"><FiVolume2 /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.huchnistTaShvydkist")}</CardTitle>
                          <CardDescription>{i18n.t("modals.UserSettingsModal.nalashtuvanniaVidtvorenniaFonuTa")}</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontSize: "12px", color: "var(--s-muted)", minWidth: "90px" }}>{i18n.t("modals.UserSettingsModal.huchnist")} {Math.round(bgMusicVolume * 100)}%</span>
                          <ProgressBar type="range" min="0" max="1" step="0.01" value={bgMusicVolume}
                            onChange={(e) => setBgMusicVolume(parseFloat(e.target.value))} style={{ flex: 1 }} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontSize: "12px", color: "var(--s-muted)", minWidth: "90px" }}>{i18n.t("modals.UserSettingsModal.shvydkist")} {bgMusicSpeed}x</span>
                          <ProgressBar type="range" min="0.5" max="2" step="0.05" value={bgMusicSpeed}
                            onChange={(e) => applySpeedChange(parseFloat(e.target.value))} style={{ flex: 1 }} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontSize: "12px", color: "var(--s-muted)", minWidth: "90px" }}>{i18n.t("modals.UserSettingsModal.huchnistSfx")} {Math.round(sfxVolume * 100)}%</span>
                          <ProgressBar type="range" min="0" max="1" step="0.01" value={sfxVolume}
                            onChange={(e) => setSfxVolume(parseFloat(e.target.value))} style={{ flex: 1 }} />
                        </div>
                      </div>
                    </CardExpanded>

                    {/* Seek bar + mode */}
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox $color="#8b5cf6"><TbMenuOrder style={{ fontSize: "18px" }} /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.rezhymVidtvorennia")}</CardTitle>
                          <CardDescription>{i18n.t("modals.UserSettingsModal.pozytsiia")} {formatTime(currentTime)} / {formatTime(duration)}</CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                        <ProgressBar type="range" min="0" max={duration || 100} step="0.1" value={currentTime} onChange={seek} />
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          {["loop", "order"].map((m) => (
                            <WinButton key={m} onClick={() => setBgMusicMode(m)}
                              style={{ background: bgMusicMode === m ? "rgba(var(--s-accent-rgb),0.15)" : undefined, borderColor: bgMusicMode === m ? "var(--s-accent)" : undefined }}>
                              <FiRepeat /> {m === "loop" ? i18n.t("modals.UserSettingsModal.povtor") : i18n.t("modals.UserSettingsModal.poriadok")}
                            </WinButton>
                          ))}
                          <WinButton onClick={() => setBgMusicShuffle(!bgMusicShuffle)}
                            style={{ background: bgMusicShuffle ? "rgba(167,139,250,0.15)" : undefined, borderColor: bgMusicShuffle ? "#a78bfa" : undefined }}>
                            <FiShuffle /> {i18n.t("modals.UserSettingsModal.peremishaty")}
                          </WinButton>
                          <WinButton onClick={onResetBgPosition}>{i18n.t("modals.UserSettingsModal.skynutyPozytsiiu")}</WinButton>
                        </div>
                      </div>
                    </CardExpanded>

                    {/* Sub-tabs: Library | Custom */}
                    <div style={{ display: "flex", gap: "4px", padding: "4px 0" }}>
                      {["library", "custom"].map((t) => (
                        <WinButton key={t} onClick={() => setMusicTab(t)}
                          style={{ background: musicTab === t ? "rgba(var(--s-accent-rgb),0.15)" : undefined, borderColor: musicTab === t ? "var(--s-accent)" : undefined }}>
                          {t === "library" ? <><FiList /> {i18n.t("modals.UserSettingsModal.biblioteka")}</> : <><FiUpload /> {i18n.t("modals.UserSettingsModal.vlasniTreky")}</>}
                        </WinButton>
                      ))}
                    </div>

                    {musicTab === "library" && (
                      <CardExpanded>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                          <FiSearch style={{ color: "var(--s-muted)" }} />
                          <WinInput placeholder={i18n.t("modals.UserSettingsModal.poshukTreku")} value={libSearch} onChange={(e) => setLibSearch(e.target.value)} style={{ maxWidth: "280px" }} />
                        </div>
                        <MusicScrollList>
                          {libraryTracks.map((track) => {
                            const isActive = bgMusicSource === track.file || (!track.isCustom && activeBgTrackId === track.id);
                            const prog = downloadProgress[track.id];
                            const isLoading = prog !== undefined && prog < 100;
                            return (
                              <TrackRow
                                key={track.id}
                                $active={isActive}
                                style={track.hidden && bgMusicMode === "order" ? { opacity: 0.45 } : undefined}
                                onClick={() => track.isCustom
                                  ? (setBgMusicSource(track.file), setActiveBgTrackId(null))
                                  : handleCachedDownload(track)}
                              >
                                {track.image
                                  ? <TrackImg src={track.image} alt={track.name} />
                                  : <div style={{ width: 32, height: 32, background: track.isCustom ? "rgba(var(--s-accent-rgb),0.1)" : "rgba(167,139,250,0.1)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      {track.isCustom ? <FiUpload style={{ color: "var(--s-accent)", fontSize: "14px" }} /> : <FiMusic style={{ color: "#a78bfa", fontSize: "14px" }} />}
                                    </div>
                                }
                                <TrackInfo>
                                  <TrackName>{track.name}</TrackName>
                                  <TrackStatus>
                                    {track.isCustom ? i18n.t("modals.UserSettingsModal.vlasnyiTrek") : isLoading ? i18n.t("modals.UserSettingsModal.zavantazhennia", { prog: prog }) : track.available ? i18n.t("modals.UserSettingsModal.dostupnyi") : i18n.t("modals.UserSettingsModal.kliknitDliaZavantazhennia")}
                                  </TrackStatus>
                                </TrackInfo>
                                {isActive && <Equalizer />}
                                {bgMusicMode === "order" && (
                                  <IconBtn
                                    onClick={(e) => { e.stopPropagation(); toggleTrackHidden(track, isActive); }}
                                    title={track.hidden ? i18n.t("modals.UserSettingsModal.povernutyVCherhu") : i18n.t("modals.UserSettingsModal.propuskatyVRezhymiPoriadok")}
                                  >
                                    {track.hidden ? <FaEyeSlash style={{ color: "var(--s-red)" }} /> : <FaEye style={{ color: "var(--s-accent)" }} />}
                                  </IconBtn>
                                )}
                              </TrackRow>
                            );
                          })}
                        </MusicScrollList>
                      </CardExpanded>
                    )}

                    {musicTab === "custom" && (
                      <CardExpanded>
                        <CardLeft>
                          <CardIconBox $color="#7c3aed"><FiUpload /></CardIconBox>
                          <CardInfo>
                            <CardTitle>{i18n.t("modals.UserSettingsModal.vlasniTreky2")}{customTracks.length}/{MAX_CUSTOM_TRACKS})</CardTitle>
                            <CardDescription>{i18n.t("modals.UserSettingsModal.mp3WavOpusRekomendovano")} {MAX_CUSTOM_MB} {i18n.t("modals.UserSettingsModal.mbTa")} {MAX_CUSTOM_MIN} {i18n.t("modals.UserSettingsModal.khvylynDodaniTrekyZiavliaiutsia")}</CardDescription>
                          </CardInfo>
                        </CardLeft>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                          {(customTracks.length < MAX_CUSTOM_TRACKS ? [...customTracks, null] : customTracks).map((track, i) => (
                            <CustomSlotCard key={i} $hasFile={!!track?.file}>
                              {track?.file
                                ? <div style={{ width: 28, height: 28, background: "rgba(var(--s-accent-rgb),0.1)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}><FiMusic style={{ color: "var(--s-accent)", fontSize: "13px" }} /></div>
                                : <div style={{ width: 28, height: 28, background: "rgba(var(--s-ink),0.04)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "var(--s-faint)", fontSize: "12px" }}>{i + 1}</span></div>
                              }
                              <SlotName>{track?.name || <span style={{ color: "var(--s-faint)" }}>{i18n.t("modals.UserSettingsModal.dodatyTrek")}</span>}</SlotName>
                              <SlotActions>
                                <IconBtn onClick={() => { activeSlotRef.current = i; fileInputRef.current.click(); }} title={i18n.t("modals.UserSettingsModal.zavantazhyty")}>
                                  <FiUpload />
                                </IconBtn>
                                {track?.file && (
                                  <IconBtn $danger onClick={() => handleRemoveCustomTrack(i)} title={i18n.t("modals.UserSettingsModal.vydalyty")}><FiTrash2 /></IconBtn>
                                )}
                              </SlotActions>
                            </CustomSlotCard>
                          ))}
                        </div>
                        <input ref={fileInputRef} type="file" accept="audio/*" style={{ display: "none" }} onChange={handleFileChange} />
                      </CardExpanded>
                    )}
                  </MusicSettingsWrap>
                </CardGroup>
              )}

              {/* ── BETA TAB ─────────────────────────────────────────── */}
              {showTab("beta") && (
                <CardGroup data-settings-tab="beta">
                  <SectionHeaderTitle><TbFlask /> {i18n.t("modals.UserSettingsModal.betaFunktsii")}</SectionHeaderTitle>
                  <SectionDescription>
                    {i18n.t("modals.UserSettingsModal.noviMozhlyvostiIakiShche")}
                  </SectionDescription>
                  <TabLevelHint tab="beta" />

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#60a5fa"><FiNavigation /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.vymknutyGpsKartku")}</CardTitle>
                        <CardDescription>
                          {isHideGpsCardBeta
                            ? i18n.t("modals.UserSettingsModal.kartkaVashaLokatsiiaNe")
                            : i18n.t("modals.UserSettingsModal.prybratyKartkuVashaLokatsiia")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => onToggleHideGpsCard(!isHideGpsCardBeta)}>
                        <ToggleStatusLabel $checked={isHideGpsCardBeta}>
                          {isHideGpsCardBeta ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={isHideGpsCardBeta} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#f472b6"><FiMove /></CardIconBox>
                      <CardInfo>
                        <CardTitle>{i18n.t("modals.UserSettingsModal.peretiahuvanniaKartok")}</CardTitle>
                        <CardDescription>
                          {i18n.t("modals.UserSettingsModal.knopkaPoriadokBiliaPoshuku")}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => setBetaOn("dragCards", !isDragCardsBeta)}>
                        <ToggleStatusLabel $checked={isDragCardsBeta}>
                          {isDragCardsBeta ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={isDragCardsBeta} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <CardExpanded>
                    <Card style={{ padding: 0, border: "none", background: "transparent" }}>
                      <CardLeft>
                        <CardIconBox $color="#facc15"><FiVolume2 /></CardIconBox>
                        <CardInfo>
                          <CardTitle>{i18n.t("modals.UserSettingsModal.ozvuchenniaProhnozu")}</CardTitle>
                          <CardDescription>
                            {i18n.t("modals.UserSettingsModal.knopkaNaKarttsiPohody")}
                          </CardDescription>
                        </CardInfo>
                      </CardLeft>
                      <CardControl>
                        <ToggleWrapper onClick={() => setBetaOn("voiceForecast", !isVoiceBeta)}>
                          <ToggleStatusLabel $checked={isVoiceBeta}>
                            {isVoiceBeta ? i18n.t("modals.UserSettingsModal.uvimknuto") : i18n.t("modals.UserSettingsModal.vymknuto")}
                          </ToggleStatusLabel>
                          <SwitchPill $checked={isVoiceBeta} />
                        </ToggleWrapper>
                      </CardControl>
                    </Card>
                    {isVoiceBeta && <BetaVoiceSettings />}
                  </CardExpanded>
                </CardGroup>
              )}

            </MainContent>
            </SettingsLevelContext.Provider>

            {/* Натяк, що нижче є ще налаштування */}
            <AnimatePresence>
              {scrollHint && (
                <ScrollHintFade
                  key="scroll-hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ScrollHintButton type="button" onClick={scrollToHint}>
                    <FiChevronDown aria-hidden="true" />
                    {scrollHint.label ? i18n.t("modals.UserSettingsModal.nyzhche", { label: scrollHint.label }) : i18n.t("modals.UserSettingsModal.prokrutitNyzhche")}
                  </ScrollHintButton>
                </ScrollHintFade>
              )}
            </AnimatePresence>
            </MainContentWrap>
          </WindowBody>

          {/* ── Footer ─────────────────────────────────────────────────── */}
          <WindowFooter>
            <TermsRow>
              <FiInfo style={{ color: "var(--s-accent)" }} />
              <span>
                {i18n.t("modals.UserSettingsModal.vyPohodylysZ")}{" "}
                <TermsLink onClick={() => setShowTerms(true)}>{i18n.t("modals.UserSettingsModal.uhodoiu")}</TermsLink>
              </span>
              <Tooltip
                content={i18n.t("modals.UserSettingsModal.vyityZAkauntaI")}
                placement="top"
                isDarkMode={isDarkMode}
              >
                <ResetLink
                  type="button"
                  onClick={() => setShowResetDialog(true)}
                  disabled={resetLoading}
                >
                  <FiRotateCcw aria-hidden="true" />
                  {resetLoading ? i18n.t("modals.UserSettingsModal.skydaiemo") : i18n.t("modals.UserSettingsModal.skynutySait")}
                </ResetLink>
              </Tooltip>
            </TermsRow>
            <FooterButtons>
              <WinButton onClick={handleCancel}>{i18n.t("modals.UserSettingsModal.skasuvaty")}</WinButton>
              {!isGuest && (
                <WinButton $primary onClick={handleSubmit} disabled={isInvalidDate}>
                  {i18n.t("modals.UserSettingsModal.zberehty")}
                </WinButton>
              )}
            </FooterButtons>
          </WindowFooter>

        </ModalWindow>
      </ModalOverlay>

      {showTerms && (
        <NestedModalPortal>
          <InfoModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
        </NestedModalPortal>
      )}

      {ageGate}

      {globalStyleChart && (
        <GlobalChartStyleModal
          chartKey={globalStyleChart}
          isDarkMode
          onClose={() => setGlobalStyleChart(null)}
        />
      )}

      {!levelChosen && !showResetDialog && <LevelOnboarding isGuest={isGuest} onChoose={chooseFirstLevel} />}

      {showResetDialog && (
        <ResetConfirmDialog
          onConfirm={confirmFactoryReset}
          onCancel={closeResetDialog}
          loading={resetLoading}
        />
      )}
    </>,
    document.body,
  );
};

export default UserSettingsModal;
