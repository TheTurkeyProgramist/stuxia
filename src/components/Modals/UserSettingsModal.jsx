import { Fragment, useState, useEffect, useMemo, useRef } from "react";
import avatarPlaceholder from "../../media/characters/domino-avatar.webp";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import InfoModal from "./UserSearchModal.jsx";
import KatSceneModal from "./KatSceneModal";
import { Tooltip } from "../Tooltip/Tooltip";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import localforage from "localforage";
import { useAnimationsDisabled, setAnimationsDisabled } from "../../utils/animationsPref";
import { GoogleAuthProvider, linkWithPopup, unlink, verifyBeforeUpdateEmail, reauthenticateWithPopup } from "firebase/auth";
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
} from "react-icons/fi";
import {
  TbAutomation,
  TbMenuOrder,
  TbClock24,
  TbHourglass,
  TbHandFinger,
  TbFlipVertical,
  TbSchool,
  TbBrightnessDown,
  TbColorFilter,
  TbWand,
  TbSpeakerphone,
} from "react-icons/tb";
import { GiPalette } from "react-icons/gi";
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
import { MUTE_SYNC_DAILY_LIMIT } from "../../utils/muteSync";
import { applySiteMirror, getSiteMirror } from "../../utils/siteMirror";
import { getPref, setPref } from "../../utils/prefsStore.js";

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

// Ширина вікна в режимі перегляду — у відсотках від ширини екрана, але не вужче за FILTERS_PREVIEW_MIN_PX
const FILTERS_PREVIEW_DEFAULT_WIDTH = 64;
const FILTERS_PREVIEW_MIN_WIDTH = 64;
const FILTERS_PREVIEW_MAX_WIDTH = 100;
const FILTERS_PREVIEW_MIN_PX = 640;
// З цієї ширини екрана вікно зсувається праворуч; на вужчих — приклад-картинка в модалці
const FILTERS_PREVIEW_BREAKPOINT = 768;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 100001;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
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

const NestedModalPortal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100002;
`;

const ModalWindow = styled.div`
  background: #1c1c1f;
  color: #f3f3f3;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  width: 95%;
  height: 88vh; max-height: 850px;
  transition: width 0.3s ease;
  ${(p) => p.$preview && css`
    @media (min-width: ${FILTERS_PREVIEW_BREAKPOINT}px) {
      width: max(${FILTERS_PREVIEW_MIN_PX}px, ${p.$previewWidth}%);
    }
  `}
  display: flex; flex-direction: column;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.2);
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${(p) => (p.$isClosing ? fadeOut : fadeIn)} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`;

const WindowHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 7px 10px;
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
  width: 30px; height: 30px; border-radius: 50%; object-fit: cover;
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
  background: transparent; border: none; color: #f4f2f2;
  width: 32px; height: 32px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 28px; transition: all 0.15s ease;
  &:hover { background: #c42b1c; }
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

// ── Анімації іконок налаштувань ─────────────────────────────────────────────
// Програються один раз при наведенні на картку / пункт меню. Кожна закінчується
// в стані спокою, тож «Вимкнути анімації» (animationsPref.css) лишає іконку на місці.
const ICON_ANIMS = {
  pop: { kf: keyframes`0%,100%{transform:scale(1)}40%{transform:scale(1.25)}70%{transform:scale(0.92)}`, dur: "0.5s" },
  swing: { kf: keyframes`0%,100%{transform:rotate(0)}20%{transform:rotate(-18deg)}45%{transform:rotate(14deg)}70%{transform:rotate(-7deg)}85%{transform:rotate(3deg)}`, dur: "0.8s" },
  spin: { kf: keyframes`from{transform:rotate(0)}to{transform:rotate(360deg)}`, dur: "0.9s", ease: "cubic-bezier(0.45,0,0.25,1)" },
  tick: { kf: keyframes`from{transform:rotate(0)}to{transform:rotate(360deg)}`, dur: "1s", ease: "steps(8, end)" },
  hourglass: { kf: keyframes`0%{transform:rotate(0)}40%,60%{transform:rotate(180deg)}100%{transform:rotate(360deg)}`, dur: "1.1s" },
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
  [FiWatch, "tick"], [TbClock24, "tick"], [TbHourglass, "hourglass"], [FiCalendar, "flip"],
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
  color: ${(p) => (p.$active ? "#ffffff" : p.$locked ? "#666" : "#c5c5c5")};
  background: ${(p) => (p.$active ? "rgba(255,255,255,0.08)" : "transparent")};
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
        width: 3px; background: #60cdff; border-radius: 2px;
      }
    `}

  ${(p) =>
    !p.$locked &&
    css`
      &:hover { background: rgba(255,255,255,0.06); color: #ffffff; }
    `}

  @media (max-width: 768px) {
    padding: 7px 10px;
    &::before { display: none; }
  }
`;

const NavIconBox = styled.span`
  font-size: 15px; display: flex; align-items: center; justify-content: center;
  color: ${(p) => (p.$active ? "#60cdff" : p.$locked ? "#555" : "#a0a0a0")};

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
  background: linear-gradient(to bottom, rgba(28,28,31,0), rgba(28,28,31,0.92) 60%, #1c1c1f);
  pointer-events: none; z-index: 2;
`;
const ScrollHintButton = styled.button`
  pointer-events: auto;
  display: flex; align-items: center; gap: 6px;
  font: inherit; font-size: 12px; font-weight: 600; color: #60cdff;
  background: rgba(96,205,255,0.12); border: 1px solid rgba(96,205,255,0.35);
  border-radius: 999px; padding: 5px 14px; cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
  transition: background 0.15s ease;
  &:hover { background: rgba(96,205,255,0.22); }
  &:focus-visible { outline: 2px solid rgba(96,205,255,0.6); outline-offset: 2px; }
  svg { animation: ${scrollHintBounce} 1.4s ease-in-out infinite; }
`;

const SectionHeaderTitle = styled.h3`
  font-size: 20px; font-weight: 600; color: #ffffff;
  margin: 0 0 12px 0; display: flex; align-items: center; gap: 10px;
`;

const SectionDescription = styled.p`
  font-size: 13px; color: #a0a0a0; line-height: 1.5;
  margin: -8px 0 10px 0;
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
  font-size: 13px; font-weight: 600; color: #a0a0a0;
  text-transform: uppercase; letter-spacing: 0.04em;
  margin: 14px 0 2px 2px; display: flex; align-items: center; gap: 8px;
  ${SectionHeaderTitle} + &, ${SectionDescription} + & { margin-top: 0; }
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
  --icon-color: ${(p) => p.$color || "#60cdff"};
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

  ${Card}:hover & > svg,
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
const CardTitle = styled.span`font-size: 14px; font-weight: 600; color: #ffffff;`;
const CardDescription = styled.span`font-size: 12px; color: #a0a0a0; margin-top: 2px;`;

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
  font-size: 13px; font-weight: 600; color: #ffffff;
`;
const FilterRow = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
  &:last-child { border-bottom: none; }
  @media (max-width: 550px) { flex-wrap: wrap; }
`;
const Segmented = styled.div`
  display: inline-flex; gap: 2px; padding: 2px; flex-shrink: 0;
  background: #1f1f23; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px;
`;
const SegmentBtn = styled.button`
  border: none; border-radius: 4px; padding: 4px 10px;
  font-size: 12px; font-weight: 600; font-family: inherit; cursor: pointer;
  background: ${(p) => (!p.$active ? "transparent" : p.$tone === "hide" ? "rgba(249,115,22,0.2)" : "rgba(52,211,153,0.2)")};
  color: ${(p) => (!p.$active ? "#a0a0a0" : p.$tone === "hide" ? "#fb923c" : "#34d399")};
  transition: background 0.15s ease, color 0.15s ease;
  &:hover { color: #ffffff; }
`;
const WordChips = styled.div`display: flex; flex-wrap: wrap; gap: 6px;`;
// Слово — жовтий чип, правило (регулярка) — блакитний моноширинний
const WordChip = styled.span`
  display: inline-flex; align-items: center; gap: 4px; max-width: 100%;
  font-size: 12px; word-break: break-all;
  font-family: ${(p) => (p.$regex ? "Consolas, monospace" : "inherit")};
  color: ${(p) => (p.$regex ? "#93c5fd" : "#fde68a")};
  background: ${(p) => (p.$regex ? "rgba(96,165,250,0.1)" : "rgba(250,204,21,0.1)")};
  border: 1px solid ${(p) => (p.$regex ? "rgba(96,165,250,0.3)" : "rgba(250,204,21,0.3)")};
  border-radius: 999px; padding: 2px 4px 2px 10px;
  button {
    display: flex; border: none; background: none; color: inherit;
    cursor: pointer; padding: 2px; border-radius: 50%;
    &:hover { background: rgba(255,255,255,0.12); }
  }
`;

const DraftHint = styled.span`
  font-size: 12px; margin-top: -4px;
  color: ${(p) => (p.$tone === "invalid" ? "#f87171" : p.$tone === "regex" ? "#34d399" : "#a0a0a0")};
`;
const RegexHelp = styled.div`
  font-size: 12px; color: #c8c8cc; line-height: 1.5;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 6px; padding: 8px 12px;
  p { margin: 8px 0 0; }
  code {
    font-family: Consolas, monospace; font-size: 12px; color: #93c5fd;
    background: rgba(96,165,250,0.1); border-radius: 4px; padding: 1px 5px;
    word-break: break-all;
  }
`;
const RegexHelpToggle = styled.button`
  display: flex; align-items: center; gap: 6px; width: 100%;
  background: none; border: none; padding: 0; text-align: left;
  font: inherit; font-size: 12px; font-weight: 600; color: #60cdff;
  cursor: pointer; user-select: none;
  &:hover { color: #8fdcff; }
  &:focus-visible { outline: 2px solid rgba(96,205,255,0.5); outline-offset: 2px; border-radius: 4px; }
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
const FilterNotes = styled.div`
  display: flex; flex-direction: column; gap: 4px;
  font-size: 12px; color: #a0a0a0; padding: 2px 4px;
  span { display: flex; align-items: center; gap: 6px; }
  svg { flex-shrink: 0; color: #60cdff; }
`;

// Приклад правила для фільтра новин і пояснення кожної його частини
const NEWS_FILTER_REGEX_EXAMPLE = String.raw`/уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\p{L})влад(?:а|и|ою)(?!\p{L})/iu`;
const NEWS_FILTER_REGEX_LEGEND = [
  ["/ … /", "Початок і кінець правила. Без косих рисок запис вважається звичайним словом"],
  ["уряд", "Звичайні літери шукаються як є"],
  ["(?:у|ом)", "Група варіантів: «у» або «ом». «?:» означає просто групу (нічого не запам'ятовує)"],
  ["?", "Після групи чи літери: «може бути, а може й не бути». Тому уряд(?:у|ом)? = уряд, уряду, урядом"],
  ["|", "«АБО» між частинами правила: достатньо, щоб знайшлася будь-яка з них"],
  [String.raw`\p{L}`, "Будь-яка літера будь-якої мови"],
  [String.raw`(?<!\p{L})`, "Перед цим місцем не має бути літери — слово не може бути кінцем іншого слова (тож «безвладдя» не спрацює)"],
  [String.raw`(?!\p{L})`, "Після цього місця не має бути літери — слово має тут закінчитись (тож «владика» не спрацює)"],
  ["i", "Прапорець після правила: без різниці великі чи малі літери (додається автоматично)"],
  ["u", "Прапорець Unicode — потрібен для \\p{L} (додається автоматично)"],
];
const NEWS_FILTER_REGEX_EXTRA = [
  [".", "Будь-який один символ"],
  ["*", "Попереднє повторюється 0 і більше разів: футбол\\p{L}* = футбол, футболу, футболіст…"],
  ["+", "Попереднє повторюється 1 і більше разів"],
  [String.raw`\s`, "Пробіл: збірн\\p{L}*\\s+україни = «збірна України», «збірної  України»"],
  ["[аоє]", "Один із перелічених символів"],
  [String.raw`\.`, "Сам символ крапки (без \\ крапка означає «будь-який символ»)"],
];

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
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
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
}) => {
  const isGuest = !user;
  const dispatch = useDispatch();
  const tutorial = useTutorial();
  const [accentColor, setAccentColor] = useAccentColor();
  const [activeTab, setActiveTab] = useState("personalization");
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
    activePreset = 0,
    switchPreset = () => {},
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
  }, [activeTab]);

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

  const toggleNewsFilter = () => {
    const nextVal = !isNewsFilterOn;
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

  const setNewsFilterCategoryMode = (key, mode) => {
    if (newsFilterModes[key] === mode) return;
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

  useEffect(() => {
    if (user?.avatar && typeof user.avatar === "string" && user.avatar.startsWith("http") && !user.avatar.startsWith("data:")) {
      setSavedGoogleAvatar(user.avatar);
      try { setPref("saved_google_avatar", user.avatar); } catch {}
    }
  }, [user]);

  // ── Account Relinking Handlers ───────────────────────────────────────────
  const [relinkEmail, setRelinkEmail] = useState(user?.email || user?.account || "");
  const [relinkStatus, setRelinkStatus] = useState("");
  const [firebaseUserState, setFirebaseUserState] = useState(auth.currentUser);
  useEffect(() => onAuthStateChanged(auth, setFirebaseUserState), []);

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
    const currentFbUser = auth.currentUser;
    if (!currentFbUser) {
      alert("Хмарний акаунт неактивний. Вийдіть і увійдіть знову, щоб активувати прив'язки.");
      return;
    }
    try {
      // Fresh provider with select_account so user can pick any Google account
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      let result;
      if (isLinkedGoogle && providerIds.length > 1) {
        // Є інший спосіб входу — безпечно замінити прив'язаний Google-акаунт.
        if (!window.confirm("Замінити прив'язаний Google-акаунт на інший?")) return;
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
      alert(`✅ Google акаунт підтверджено: ${newGoogleUser.email}`);
    } catch (err) {
      if (err.code === "auth/cancelled-popup-request" || err.code === "auth/popup-closed-by-user") {
        // user closed popup — silent
      } else if (err.code === "auth/user-mismatch") {
        alert("⚠️ Цей Google акаунт не збігається з поточним профілем! Якщо Google — єдиний спосіб входу, його не можна замінити.");
      } else if (err.code === "auth/credential-already-in-use" || err.code === "auth/email-already-in-use") {
        alert("⚠️ Цей Google акаунт уже прив'язаний до іншого профілю.");
      } else {
        alert("Помилка: " + (err.message || err.code));
      }
    }
  };


  const handleUnlinkGoogle = async () => {
    if (!auth.currentUser) return;
    if (providerIds.length <= 1) {
      alert("Google — єдиний спосіб входу в цей профіль, відв'язати його не можна, інакше ви втратите доступ.");
      return;
    }
    const confirmUnlink = window.confirm("Ви дійсно бажаєте відв'язати Google від цього профілю?\n\nПісля відв'язки для входу буде потрібен пароль.");
    if (!confirmUnlink) return;
    try {
      await unlink(auth.currentUser, "google.com");
      setFirebaseUserState(auth.currentUser);
      alert("✅ Google акаунт відв'язано успішно.");
    } catch (err) {
      if (err.code === "auth/no-such-provider") {
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

    const cu = auth.currentUser;
    if (!cu) {
      setRelinkStatus("⚠️ Хмарний акаунт неактивний — вийдіть та увійдіть знову, потім спробуйте ще раз.");
      return;
    }
    if (!hasPasswordProvider) {
      setRelinkStatus("⚠️ Пошта цього профілю керується Google і не може бути змінена тут.");
      return;
    }

    setRelinkLoading(true);
    setRelinkStatus("⏳ Надсилаємо лист...");

    try {
      await verifyBeforeUpdateEmail(cu, trimmed);
      // Пошту профілю не змінюємо, доки її не підтверджено за посиланням у листі.
      const withPending = { ...user, pendingEmail: trimmed };
      onUpdate(withPending);
      try {
        const registered = await localforage.getItem("registered_user");
        if (registered) await localforage.setItem("registered_user", { ...registered, pendingEmail: trimmed });
      } catch {}
      setRelinkStatus(`✅ Лист підтвердження надіслано на ${trimmed}. Перевірте вхідні (та спам). Після кліку на посилання входьте з новою поштою.`);
    } catch (err) {
      if (err.code === "auth/requires-recent-login") {
        setRelinkStatus("⚠️ Потрібна повторна авторизація — вийдіть та увійдіть знову, потім спробуйте ще раз.");
      } else if (err.code === "auth/email-already-in-use") {
        setRelinkStatus("❌ Ця пошта вже використовується іншим акаунтом!");
      } else if (err.code === "auth/invalid-email") {
        setRelinkStatus("❌ Неправильний формат електронної пошти!");
      } else {
        setRelinkStatus(`❌ Не вдалося надіслати лист: ${err.code || err.message}`);
      }
    } finally {
      setRelinkLoading(false);
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
  }, [user, showUpdateTimer]);

  const getActiveAvatarUrl = () => savedGoogleAvatar || avatarPlaceholder;

  const updateLivePreview = (updates) => {
    const newFormData = { ...formData, ...updates };
    setFormData(newFormData);
    if (updates.hasOwnProperty("showUpdateTimer")) setShowUpdateTimer(updates.showUpdateTimer);
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
    if (file.size > MAX_CUSTOM_MB * 1024 * 1024) { alert(`Файл занадто великий! Максимум ${MAX_CUSTOM_MB} МБ.`); return; }
    const audio = new Audio(URL.createObjectURL(file));
    audio.onloadedmetadata = () => {
      if (audio.duration > MAX_CUSTOM_MIN * 60) { alert(`Мелодія занадто довга! Максимум ${MAX_CUSTOM_MIN} хвилин.`); URL.revokeObjectURL(audio.src); return; }
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
    { key: "personalization", icon: <FiSliders />, label: "Персоналізація" },
    { key: "security", icon: <FiShield />, label: "Безпека", locked: isGuest },
    { key: "siteSections", icon: <FiCompass />, label: "Секції та новини" },
    { key: "modes", icon: <FiZap />, label: "Режими та застосунки" },
    { key: "filters", icon: <FiEye />, label: "Візуальні фільтри" },
    { key: "bgMusic", icon: <FiMusic />, label: "Фонова музика" },
  ];

  const isFiltersPreview = activeTab === "filters" && isFiltersPreviewOn;

  return createPortal(
    <>
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
                  <HeaderTitle>Параметри</HeaderTitle>
                  <HeaderSub>
                    {isGuest ? "Гість • Увійдіть для повного доступу" : (user?.email || user?.account || "Обліковий запис")}
                  </HeaderSub>
                </div>
              </UserBadge>
            </HeaderLeft>
            <HeaderActions>
              <HeaderButton onClick={() => setShowKatScene(true)}>
                <FiFilm /> Титри
              </HeaderButton>
              <CloseButton onClick={handleCancel}><FiX /></CloseButton>
            </HeaderActions>
          </WindowHeader>

          {/* ── Body ───────────────────────────────────────────────────── */}
          <WindowBody>
            <Sidebar>
              {navItems.map(({ key, icon, label, locked }) => {
                const item = (
                  <NavItem
                    key={key}
                    $active={activeTab === key}
                    $locked={!!locked}
                    aria-disabled={locked ? true : undefined}
                    onClick={() => !locked && setActiveTab(key)}
                  >
                    <NavIconBox $active={activeTab === key} $locked={!!locked} $anim={getIconAnim(icon)}>
                      {icon}
                    </NavIconBox>
                    {label}
                    {locked && <LockBadge>🔒</LockBadge>}
                  </NavItem>
                );
                return locked ? (
                  <Tooltip
                    key={key}
                    content="Необхідна реєстрація"
                    placement="right"
                    wrapperStyle={{ display: "block", flexShrink: 0 }}
                  >
                    {item}
                  </Tooltip>
                ) : item;
              })}
            </Sidebar>

            <MainContentWrap>
            <MainContent ref={mainContentRef}>

              {/* ── SECURITY TAB ────────────────────────────────────── */}
              {activeTab === "security" && !isGuest && (
                <CardGroup>
                  <SectionHeaderTitle><FiShield /> Безпека та переприв'язка акаунту</SectionHeaderTitle>
                  <SectionDescription>Прив'язка Google-акаунту, зміна пошти та пароля для входу в профіль</SectionDescription>

                  {/* Account Relinking & Binding Controls */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#60cdff"><FiLink /></CardIconBox>
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
                            {!hasFirebaseSession
                              ? "Хмарний акаунт неактивний — увійдіть знову"
                              : isLinkedGoogle ? `✓ Прив'язано (${googleEmail || "Google"})` : "Не прив'язано"}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <WinButton type="button" onClick={handleRelinkGoogle} disabled={!hasFirebaseSession}>
                            {!isLinkedGoogle ? "Прив'язати Google" : providerIds.length > 1 ? "Переприв'язати Google" : "Підтвердити Google"}
                          </WinButton>
                          {isLinkedGoogle && providerIds.length > 1 && (
                            <WinButton type="button" $danger onClick={handleUnlinkGoogle}>
                              Відв'язати
                            </WinButton>
                          )}
                        </div>
                      </div>

                      {/* Email Re-binding */}
                      {!hasPasswordProvider ? (
                        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "10px", fontSize: "11px", color: "#888" }}>
                          {hasFirebaseSession
                            ? "Пошта цього профілю керується Google і змінюється в налаштуваннях Google-акаунту."
                            : "Щоб змінити пошту, вийдіть та увійдіть знову."}
                        </div>
                      ) : (
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
                      )}
                    </div>
                  </CardExpanded>

                  {/* Password Change */}
                  {!isGoogleAccount && (
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox $color="#f87171"><FiKey /></CardIconBox>
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
                  <SectionDescription>Формат часу й дати, анімації, підказки, шрифт, жести та дзеркальність сайту</SectionDescription>

                  <SubSectionTitle><FiClock /> Час та дата</SubSectionTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#38bdf8"><FiWatch /></CardIconBox>
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
                      <CardIconBox $color="#22d3ee"><TbClock24 /></CardIconBox>
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
                      <CardIconBox $color="#34d399"><FiCalendar /></CardIconBox>
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

                  <SubSectionTitle><FiSliders /> Інтерфейс</SubSectionTitle>

                  {/* Вимкнути анімації */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fbbf24"><FiPauseCircle /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Вимкнути анімації</CardTitle>
                        <CardDescription>
                          {animationsDisabled
                            ? "Анімації та плавні переходи вимкнено — сайт легший для слабких пристроїв"
                            : "Іконки, переходи й ефекти анімовані"}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={() => setAnimationsDisabled(!animationsDisabled)}>
                        <ToggleStatusLabel $checked={animationsDisabled}>
                          {animationsDisabled ? "Вимкнено" : "Увімкнено"}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={animationsDisabled} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* AntiHeader Tips Toggle — тимчасово приховано
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fb923c"><TbSpeakerphone /></CardIconBox>
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

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#a3e635"><FiMoreVertical /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Контекстне меню Стихії</CardTitle>
                        <CardDescription>
                          {isSiteContextMenuEnabled
                            ? "Права кнопка миші відкриває меню Стихії (копіювання, фото, режим читання)"
                            : "Права кнопка миші відкриває звичайне меню браузера"}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleSiteContextMenu}>
                        <ToggleStatusLabel $checked={isSiteContextMenuEnabled}>
                          {isSiteContextMenuEnabled ? "Увімкнуто" : "Вимкнуто"}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={isSiteContextMenuEnabled} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#2dd4bf"><TbHourglass /></CardIconBox>
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
                      <CardIconBox $color="#f472b6"><FiType /></CardIconBox>
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
                      <CardIconBox $color="#fb7185"><TbHandFinger /></CardIconBox>
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
                      <CardIconBox $color="#facc15"><FiMousePointer /></CardIconBox>
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
                      <CardIconBox $color="#818cf8"><TbFlipVertical /></CardIconBox>
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
                  <SectionHeaderTitle><FiCompass /> Секції сайту та новини</SectionHeaderTitle>
                  <SectionDescription>Порядок, видимість і тема кожної секції, а також фільтр та вигляд новин</SectionDescription>

                  {siteSections && siteSections.map((sec, idx) => {
                    const isHidden = hiddenSections?.includes(sec.key);
                    const isDarkTheme = sectionThemes?.[sec.key] ?? isDarkMode;

                    return (
                      <CardExpanded key={sec.key}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                          <CardLeft>
                            <CardIconBox $color={SECTION_COLORS[sec.key] || "#94a3b8"}>{SECTION_ICONS[sec.key] || <FiGrid />}</CardIconBox>
                            <CardInfo>
                              <CardTitle>{sec.label}</CardTitle>
                            </CardInfo>
                          </CardLeft>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
                  </div>

                  <SubSectionTitle><FiGlobe /> Новини</SubSectionTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#f97316"><FiFilter /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Фільтр новин</CardTitle>
                        <CardDescription>Приховує новини про війну, політику, кримінал та інший небажаний контент. Зміни діють після оновлення новин</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleNewsFilter}>
                        <ToggleStatusLabel $checked={isNewsFilterOn}>{isNewsFilterOn ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                        <SwitchPill $checked={isNewsFilterOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {/* Під-опції фільтра: завжди видно, але сірі й неактивні, коли фільтр вимкнено */}
                  <FilterSubGroup $disabled={!isNewsFilterOn} aria-disabled={!isNewsFilterOn}>
                    {/* 1. М'який режим */}
                    <Card>
                      <CardInfo>
                        <CardTitle>Не видаляти, а показувати плашку</CardTitle>
                        <CardDescription>
                          Небажана новина лишається у стрічці під плашкою «Небажаний контент був автозаблокований» з кнопкою «Розглушити»
                        </CardDescription>
                      </CardInfo>
                      <CardControl>
                        <ToggleWrapper onClick={toggleNewsFilterSoft}>
                          <ToggleStatusLabel $checked={isNewsFilterSoft}>{isNewsFilterSoft ? "Увімкнуто" : "Вимкнуто"}</ToggleStatusLabel>
                          <SwitchPill $checked={isNewsFilterSoft} />
                        </ToggleWrapper>
                      </CardControl>
                    </Card>

                    {/* 2. Категорії: не рекомендувати / показувати */}
                    <CardExpanded>
                      <CardInfo>
                        <CardTitle>Які теми бачити</CardTitle>
                        <CardDescription>Для кожної теми оберіть: не рекомендувати (фільтр її ховає) чи показувати</CardDescription>
                      </CardInfo>
                      <div>
                        {NEWS_FILTER_CATEGORIES.map(({ key, label }) => {
                          const mode = newsFilterModes[key] || "hide";
                          return (
                            <FilterRow key={key}>
                              <span style={{ fontSize: "13px", color: "#e0e0e0" }}>{label}</span>
                              <Segmented role="radiogroup" aria-label={label}>
                                <SegmentBtn
                                  type="button"
                                  role="radio"
                                  aria-checked={mode === "hide"}
                                  $active={mode === "hide"}
                                  $tone="hide"
                                  onClick={() => setNewsFilterCategoryMode(key, "hide")}
                                >
                                  Не рекомендувати
                                </SegmentBtn>
                                <SegmentBtn
                                  type="button"
                                  role="radio"
                                  aria-checked={mode === "show"}
                                  $active={mode === "show"}
                                  $tone="show"
                                  onClick={() => setNewsFilterCategoryMode(key, "show")}
                                >
                                  Показувати
                                </SegmentBtn>
                              </Segmented>
                            </FilterRow>
                          );
                        })}
                      </div>
                    </CardExpanded>

                    {/* 3. Власні слова та правила */}
                    <CardExpanded>
                      <CardInfo>
                        <FilterSubTitle>Власні слова та правила ({newsFilterWords.length}/{NEWS_FILTER_MAX_WORDS})</FilterSubTitle>
                        <CardDescription>
                          Новини з цими словами в заголовку чи описі теж блокуватимуться. Регістр не важливий.
                          Можна писати не лише слово, а й правило між косими рисками — див. пояснення нижче
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
                          placeholder="Слово (футбол) або правило (/футбол\p{L}*/iu)"
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
                          <FiPlus /> Додати
                        </WinButton>
                      </form>
                      {newsFilterDraftEntry && (
                        <DraftHint $tone={newsFilterDraftEntry.kind}>
                          {newsFilterDraftEntry.kind === "word" && "Звичайне слово: блокуватиметься текст, що містить його"}
                          {newsFilterDraftEntry.kind === "regex" && "Правило коректне — його можна додати"}
                          {newsFilterDraftEntry.kind === "invalid" && `Помилка в правилі: ${newsFilterDraftEntry.error}`}
                        </DraftHint>
                      )}
                      {newsFilterWords.length > 0 && (
                        <WordChips>
                          {newsFilterWords.map((word) => (
                            <WordChip key={word} $regex={parseNewsFilterEntry(word).kind !== "word"}>
                              {word}
                              <button type="button" aria-label={`Прибрати «${word}»`} onClick={() => removeNewsFilterWord(word)}>
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
                          Як писати правила (регулярні вирази)
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
                          Правило — це шаблон між косими рисками. Воно ловить одразу всі форми слова. Приклад, який
                          блокує новини про уряд, парламент і владу:
                        </p>
                        <RegexExample>
                          <code>{NEWS_FILTER_REGEX_EXAMPLE}</code>
                          <WinButton type="button" onClick={() => setNewsFilterWordDraft(NEWS_FILTER_REGEX_EXAMPLE)}>
                            Вставити приклад
                          </WinButton>
                        </RegexExample>
                        <p>
                          Спрацює на: <i>уряд, уряду, урядом, парламент, парламенту, парламентом, влада, влади, владою</i>.
                          Не спрацює на: <i>владика, безвладдя</i>.
                        </p>
                        <RegexLegend>
                          {NEWS_FILTER_REGEX_LEGEND.map(([token, text]) => (
                            <Fragment key={token}>
                              <code>{token}</code>
                              <span>{text}</span>
                            </Fragment>
                          ))}
                        </RegexLegend>
                        <p style={{ marginTop: "10px" }}>Інші корисні елементи:</p>
                        <RegexLegend>
                          {NEWS_FILTER_REGEX_EXTRA.map(([token, text]) => (
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
                      <span><FiInfo aria-hidden="true" /> Нові налаштування, як і сам фільтр, діють після оновлення новин.</span>
                      <span><FiInfo aria-hidden="true" /> Розглушена плашка відкрита лише до перезавантаження сторінки.</span>
                    </FilterNotes>
                  </FilterSubGroup>

                  {!isGuest ? (
                    <Card>
                      <CardLeft>
                        <CardIconBox $color="#e879f9"><FiBellOff /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Синхронізація заглушених новин і фільтра</CardTitle>
                          <CardDescription>
                            Синхронізувати приховані новини та налаштування фільтра (теми, власні слова й правила) між усіма пристроями.
                            Не більше {MUTE_SYNC_DAILY_LIMIT} дій на добу — «Заглушити», «Розглушити» і зміна фільтра рахуються однаково
                            (кілька змін фільтра поспіль — одна дія). Те, що понад ліміт, зберігається лише на цьому пристрої
                            й підтягнеться в хмару з наступною синхронізацією.
                          </CardDescription>
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
                        <CardIconBox $color="#e879f9"><FiBellOff /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Синхронізація заглушених новин і фільтра</CardTitle>
                          <CardDescription>🔒 Доступно тільки для зареєстрованих користувачів</CardDescription>
                        </CardInfo>
                      </CardLeft>
                    </Card>
                  )}

                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#c4b5fd"><FiEye /></CardIconBox>
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

              {/* ── MODES & LOADING TAB ───────────────────────────────── */}
              {activeTab === "modes" && (
                <CardGroup>
                  <SectionHeaderTitle><FiZap /> Режими сайту та застосунки</SectionHeaderTitle>
                  <SectionDescription>Тема, акцентний колір, швидкість завантаження, режим Декоратора, навчання та застосунки для пристроїв</SectionDescription>

                  {/* Restart tutorial */}
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#86efac"><TbSchool /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Навчання від Доміно</CardTitle>
                        <CardDescription>Пройти інтерактивне навчання по сайту ще раз</CardDescription>
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
                        <FiPlay /> Запустити
                      </WinButton>
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

                  {/* Accent color */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color={accentColor || "#60cdff"}><GiPalette /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Акцентний колір шапки</CardTitle>
                        <CardDescription>
                          {accentColor ? `Акцент: ${getAccentLabel(accentColor)}` : "Без накладення кольору"}
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
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#5eead4"><FiAnchor /></CardIconBox>
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
                      <CardIconBox $color="#93c5fd"><FiDownloadCloud /></CardIconBox>
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
                      <CardIconBox $color="#d946ef"><FiPenTool /></CardIconBox>
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
                            Версія Декоратора (кожна зберігає свої окремі зміни)
                          </div>
                          <div style={{ display: "flex", gap: "6px" }}>
                            {[0, 1, 2].map((i) => (
                              <WinButton
                                key={i}
                                onClick={() => switchPreset(i)}
                                style={{ flex: 1, outline: activePreset === i ? "2px solid #60cdff" : "none" }}
                              >
                                Пресет {i + 1}
                              </WinButton>
                            ))}
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

                  <SubSectionTitle><FiDownload /> Застосунки Стихії</SubSectionTitle>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#00a4ef"><FaWindows /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Версія для Windows</CardTitle>
                        <CardDescription>Завантажити застосунок Stuxia для комп'ютера</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton
                        as="a"
                        $primary
                        href="https://github.com/TheTurkeyProgramist/stuxia/releases/download/v1.0.0/stuxia_1.0.0_x64-setup.exe"
                      >
                        <FiDownload /> Завантажити
                      </WinButton>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#3ddc84"><FaAndroid /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Версія для Android</CardTitle>
                        <CardDescription>APK для встановлення на Android-пристрої</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <WinButton
                        as="a"
                        $primary
                        href="https://github.com/TheTurkeyProgramist/stuxia/releases/latest/download/Stuxia-Android.apk"
                      >
                        <FiDownload /> Завантажити APK
                      </WinButton>
                    </CardControl>
                  </Card>

                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fcc624"><FaLinux /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Версія для Linux</CardTitle>
                        <CardDescription>AppImage для більшості дистрибутивів або DEB для Debian/Ubuntu</CardDescription>
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
                        <CardTitle>На iPhone та iPad</CardTitle>
                        <CardDescription>Відкрийте сайт у Safari, натисніть «Поділитися» → «На початковий екран»</CardDescription>
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
                        <FiGlobe /> Відкрити сайт
                      </WinButton>
                    </CardControl>
                  </Card>
                </CardGroup>
              )}

              {/* ── VISUAL FILTERS TAB ─────────────────────────────────── */}
              {activeTab === "filters" && (
                <CardGroup>
                  <SectionHeaderTitle><FiEye /> Візуальні фільтри та пресети</SectionHeaderTitle>
                  <SectionDescription>
                    Затемнення, кольорові фільтри для зору та збереження власних пресетів.
                    {isFiltersPreviewOn && <WideScreenOnly as="span"> Результат видно на сторінці ліворуч</WideScreenOnly>}
                  </SectionDescription>

                  {/* Side-by-side preview */}
                  <WideScreenOnly>
                  <Card>
                    <CardLeft>
                      <CardIconBox $color="#fdba74"><FiColumns /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Перегляд поруч зі сторінкою</CardTitle>
                        <CardDescription>
                          {isFiltersPreviewOn
                            ? "На цій вкладці вікно зсувається праворуч і не затемнює сайт (на широкому екрані)"
                            : "Вікно налаштувань звичайного розміру, сторінка затемнена"}
                        </CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <CardControl>
                      <ToggleWrapper onClick={toggleFiltersPreview}>
                        <ToggleStatusLabel $checked={isFiltersPreviewOn}>
                          {isFiltersPreviewOn ? "Увімкнуто" : "Вимкнуто"}
                        </ToggleStatusLabel>
                        <SwitchPill $checked={isFiltersPreviewOn} />
                      </ToggleWrapper>
                    </CardControl>
                  </Card>

                  {isFiltersPreviewOn && (
                    <Card>
                      <CardLeft>
                        <CardIconBox $color="#fcd34d"><FiMaximize2 /></CardIconBox>
                        <CardInfo>
                          <CardTitle>Ширина вікна в режимі перегляду</CardTitle>
                          <CardDescription>{filtersPreviewWidth}% ширини екрана</CardDescription>
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
                      <CardIconBox $color="#f0abfc"><TbColorFilter /></CardIconBox>
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
                          onClick={() => setVisualConfig((p) => selectFilter(p, f.id))}
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
                        <CardIconBox $color="#fca5a5"><FiSlidersIcon /></CardIconBox>
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

                  {/* Example image: on narrow screens the page behind the modal isn't visible */}
                  <FilterExampleCard>
                    <CardLeft>
                      <CardIconBox $color="#67e8f9"><FiImage /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Приклад</CardTitle>
                        <CardDescription>Так фільтр виглядатиме на сторінці</CardDescription>
                      </CardInfo>
                    </CardLeft>
                    <FilterExampleImage
                      src={filterExampleImg}
                      alt="Приклад візуального фільтра"
                      loading="lazy"
                      style={{ filter: getPreviewFilter(visualConfig) }}
                    />
                  </FilterExampleCard>

                  {/* Combo builder */}
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#a5b4fc"><FiLayers /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Комбінація фільтрів</CardTitle>
                        <CardDescription>
                          {comboIds.length > 1
                            ? `Разом діють: ${comboIds.map((id) => FILTERS.find((f) => f.id === id)?.label).join(" + ")}`
                            : "Позначте кілька фільтрів, щоб вони діяли разом, і збережіть як власний пресет"}
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
                  <CardExpanded>
                    <CardLeft>
                      <CardIconBox $color="#f9a8d4"><TbWand /></CardIconBox>
                      <CardInfo>
                        <CardTitle>Швидкі стилі та пресети</CardTitle>
                        <CardDescription>
                          Готові стилі та власні пресети ({customPresets.length}/{MAX_CUSTOM_PRESETS}). Хедер і налаштування фільтри не змінюють — тут їх завжди можна вимкнути
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
                              const n = window.prompt("Нова назва пресета:", presetName(p));
                              if (n) onUpdatePresetName(p.id, n);
                            }}
                            title="Перейменувати"
                            style={{ width: 22, height: 22, fontSize: 10 }}
                          >
                            <FiEdit2 />
                          </IconBtn>
                          <IconBtn
                            $danger
                            onClick={() => onDeletePreset(p.id)}
                            title="Видалити"
                            style={{ width: 22, height: 22, fontSize: 10 }}
                          >
                            <FiX />
                          </IconBtn>
                        </CustomPresetCard>
                      ))}
                    </PresetGrid>

                    <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                      <WinInput
                        placeholder={customPresets.length >= MAX_CUSTOM_PRESETS ? "Досягнуто ліміт — видаліть пресет" : "Назва нового пресета..."}
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
                  <SectionDescription>Гучність, швидкість і режим відтворення, бібліотека треків та власні файли</SectionDescription>

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

                  <MusicSettingsWrap $off={!bgMusicEnabled}>
                    {/* Volume + Speed + Mode */}
                    <CardExpanded>
                      <CardLeft>
                        <CardIconBox $color="#c084fc"><FiVolume2 /></CardIconBox>
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
                        <CardIconBox $color="#8b5cf6"><TbMenuOrder style={{ fontSize: "18px" }} /></CardIconBox>
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
                                  : <div style={{ width: 32, height: 32, background: track.isCustom ? "rgba(96,205,255,0.1)" : "rgba(167,139,250,0.1)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      {track.isCustom ? <FiUpload style={{ color: "#60cdff", fontSize: "14px" }} /> : <FiMusic style={{ color: "#a78bfa", fontSize: "14px" }} />}
                                    </div>
                                }
                                <TrackInfo>
                                  <TrackName>{track.name}</TrackName>
                                  <TrackStatus>
                                    {track.isCustom ? "Власний трек" : isLoading ? `Завантаження ${prog}%...` : track.available ? "✓ Доступний" : "↓ Клікніть для завантаження"}
                                  </TrackStatus>
                                </TrackInfo>
                                {isActive && <Equalizer />}
                                {bgMusicMode === "order" && (
                                  <IconBtn
                                    onClick={(e) => { e.stopPropagation(); toggleTrackHidden(track, isActive); }}
                                    title={track.hidden ? "Повернути в чергу" : "Пропускати в режимі «Порядок»"}
                                  >
                                    {track.hidden ? <FaEyeSlash style={{ color: "#ff6b6b" }} /> : <FaEye style={{ color: "#60cdff" }} />}
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
                            <CardTitle>Власні треки ({customTracks.length}/{MAX_CUSTOM_TRACKS})</CardTitle>
                            <CardDescription>MP3/WAV/OPUS (рекомендовано) до {MAX_CUSTOM_MB} МБ та {MAX_CUSTOM_MIN} хвилин. Додані треки з'являються в бібліотеці</CardDescription>
                          </CardInfo>
                        </CardLeft>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                          {(customTracks.length < MAX_CUSTOM_TRACKS ? [...customTracks, null] : customTracks).map((track, i) => (
                            <CustomSlotCard key={i} $hasFile={!!track?.file}>
                              {track?.file
                                ? <div style={{ width: 28, height: 28, background: "rgba(96,205,255,0.1)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}><FiMusic style={{ color: "#60cdff", fontSize: "13px" }} /></div>
                                : <div style={{ width: 28, height: 28, background: "rgba(255,255,255,0.04)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "#555", fontSize: "12px" }}>{i + 1}</span></div>
                              }
                              <SlotName>{track?.name || <span style={{ color: "#555" }}>Додати трек</span>}</SlotName>
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
                  </MusicSettingsWrap>
                </CardGroup>
              )}


            </MainContent>

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
                    {scrollHint.label ? `Нижче: ${scrollHint.label}` : "Прокрутіть нижче"}
                  </ScrollHintButton>
                </ScrollHintFade>
              )}
            </AnimatePresence>
            </MainContentWrap>
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

      {showTerms && (
        <NestedModalPortal>
          <InfoModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
        </NestedModalPortal>
      )}
    </>,
    document.body,
  );
};

export default UserSettingsModal;
