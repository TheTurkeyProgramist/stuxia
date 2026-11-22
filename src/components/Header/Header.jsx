//bun run --cwd Stuxia tauri android build --apk - Android
//bun run --cwd Stuxia tauri build --bundles nsis - Windows
//Launch wsl.exe 
//bun run deploy:cloudflare
//cd ~/projects/stuxia-linux-build
//bun run --cwd Stuxia tauri build --bundles deb
//bun run --cwd Stuxia tauri build --bundles deb - WSL(Linux)
import React, { useState, useEffect, useLayoutEffect, useRef, Suspense } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes, css } from "styled-components";
import { BsMoonStarsFill } from "react-icons/bs";
import { GiShop, GiExitDoor } from "react-icons/gi";
import relax from "../../mp3/modals/relax.mp3";
import { FaSun } from "react-icons/fa";
// У шапці логотип 40 px заввишки — копія 120 px (×3 для різких екранів) замість оригіналу 1667×640
import herotext from "../../media/brand/wordmark-stykhiia.webp?h=120&format=webp&quality=80";
import { prefetchProps } from "../../utils/modalChunks.js";
import { MdSettingsSuggest, MdMenu, MdAccountCircle, MdWallpaper, MdManageAccounts, MdCalendarMonth, MdClose } from "react-icons/md";
import { loadFirebase } from "../../firebaseLazy.js";
import { FaBookOpen } from "react-icons/fa6";
import { IoColorPalette } from "react-icons/io5";
import NetworkBadge, {
  useNetworkStatus,
  NETWORK_LABELS,
  NETWORK_COLORS,
  NetworkIcon,
} from "./NetworkBadge.jsx";
import { ACCENT_COLORS, AccentSwatches, useAccentColor, getAccentLabel } from "./AccentColorPicker.jsx";
import bell from "../../mp3/modals/bell.mp3";
import conimg from "../../mp3/modals/concierge.mp3";
import userDefault from "../../media/ui/user-placeholder.webp";
import { useVisualFilters, presetName, selectFilter, CUSTOM_PRESET_ICON as CustomPresetIcon } from "./useVisualFilters";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import { isSupporter } from "../Support/supportConfig";
import { isInviter, isInvitee } from "../../utils/referral.js";
// import AntiHeaderAd from "./AntiHeaderAd";
import { Tooltip } from "../Tooltip/Tooltip";
import { lazyWithRetry } from "../../utils/lazyWithRetry.js";
import i18n from "../../i18n/i18n.js";
import { dateLocale } from "../../utils/weatherText.js";
// Консоль команд (/open, /soundtrack, /create…) — вантажиться лише при відкритті
const CommandsModal = lazyWithRetry(() => import("../Commands/CommandsModal.jsx"));
const prefetchCommands = () => import("../Commands/CommandsModal.jsx").catch(() => {});
const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInHeader = keyframes`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderDiv = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: ${(props) =>
    props.$accentColor
      ? `3px solid ${props.$accentColor}`
      : `2px solid ${props.$isDarkMode ? "white" : "#000000"}`};
  position: fixed;
  background-color: ${(props) => {
    if (!props.$accentColor) {
      return props.$isDarkMode ? "rgba(0, 0, 0, 0.45)" : "rgba(255, 255, 255, 0.86)";
    }
    // color-mix створює гарний, насичений і гарантовано помітний колір і для білої, і для чорної теми
    return props.$isDarkMode
      ? `color-mix(in srgb, ${props.$accentColor} 35%, #0d0d0d)`
      : `color-mix(in srgb, ${props.$accentColor} 35%, #ffffff)`;
  }};
  box-shadow: ${(props) =>
    props.$accentColor
      ? `0 3px 14px ${props.$accentColor}66`
      : "none"};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: ${(props) => (props.$isStickyBgMode ? "blur(10px)" : "blur(8px)")};
  color: ${(props) => (props.$isDarkMode ? "white" : "#000000")};
  top: 0;
  left: 0;
  z-index: 1900;
  transition:
    background-color 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.4s ease;
  box-sizing: border-box;
  /* Виїжджає, щойно лоадер почав зникати ($ready), а не за фіксованим таймером */
  ${(p) =>
    p.$ready
      ? css`
          animation: ${fadeInHeader} 0.6s ease-out 0.15s both;
        `
      : css`
          opacity: 0;
          transform: translateY(-100%);
          pointer-events: none;
        `}

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
    animation-delay: 0s;
  }
  margin: 0;
`;

const HeaderFix = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#1a1a1a")};
  align-items: center;
  /* іконка + підпис під нею */
  flex-direction: column;
  gap: 1px;
  height: 40px;
  min-width: 0;
  justify-content: center;
  /* займає свою комірку в ButtonsGroup (до 76px) */
  flex: 1;
  padding: 2px 0;
  border-radius: 8px;
  transition: background-color 0.15s ease, outline 0.15s ease;

  &:hover,
  &[aria-expanded="true"] {
    background-color: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)")};
  }

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

const EmojiWrapper = styled.span`
  display: inline-block;
  font-size: 21px;
  line-height: 1;
`;

// Увімкнений перемикач у шапці (напр. «Фон на увесь сайт»): іконка того ж кольору, що й решта,
// а стан — маленька крапка акцентного кольору в куті
const ActiveDot = styled.span`
  position: relative;
  display: inline-block;
  line-height: 1;

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    right: -4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ff9d3b;
    box-shadow: 0 0 0 2px ${(p) => (p.$isDarkMode ? "#0b1220" : "#ffffff")};
  }
`;

// Підпис під іконкою в шапці — щоб новий відвідувач знав, що за кнопкою (повна назва — у підказці)
const IconLabel = styled.span`
  display: block;
  max-width: 100%;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.85;

  @media (max-width: 340px) {
    font-size: 9px;
  }
`;

// Скільки кнопок вміщується в шапці, міряємо за реальною шириною блоку кнопок (а не за порогами екрана):
// що не влізло — у бургері, у порядку важливості (див. headerActions). Мінімальна комірка кнопки
// з підписом + проміжок між кнопками; Тема й Параметри завжди в шапці.
const BAR_CELL_MIN = 68;
const BAR_CELL_GAP = 4;
const ALWAYS_IN_BAR = 2;

const LogoButton = styled.button`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

const LogoImg = styled.img`
  display: block;
  height: 40px;
  width: auto;

  @media (max-width: 380px) {
    height: 32px;
  }
`;

// Кнопка в шапці (які саме вмістились — рахує Header за шириною блоку кнопок)
const BarSlot = styled.div`
  & > span:first-child {
    flex: 1;
    justify-content: center;
  }
`;

const BurgerWrap = styled.div`
  /* static: випадне меню позиціюється від усієї шапки (вона fixed на всю ширину) */
  position: static;
`;

const burgerSlide = keyframes`
  from { transform: translateY(-100%); }
  to   { transform: translateY(0); }
`;

const burgerSlideUp = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(-100%); }
`;

// Той самий колір, що й у шапки (HeaderDiv), лише щільніший без акценту — щоб текст читався
const headerLikeBg = (p) => {
  if (!p.$accentColor) {
    return p.$isDarkMode ? "rgba(0, 0, 0, 0.82)" : "rgba(255, 255, 255, 0.94)";
  }
  return p.$isDarkMode
    ? `color-mix(in srgb, ${p.$accentColor} 35%, #0d0d0d)`
    : `color-mix(in srgb, ${p.$accentColor} 35%, #ffffff)`;
};

const burgerFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const burgerFadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

// Затемнення + розмиття сторінки під меню. Рендериться порталом у body:
// у шапки є backdrop-filter, і всередині неї blur бачив би лише саму шапку, а не сайт.
const BurgerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1899; /* під шапкою (1900), над сторінкою */
  background: ${(p) => (p.$isDarkMode ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0.25)")};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: ${(p) =>
    p.$closing
      ? css`${burgerFadeOut} 0.22s ease-in forwards`
      : css`${burgerFadeIn} 0.28s ease-out`};
  ${(p) => p.$closing && "pointer-events: none;"}

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
  }
`;

// Зовнішня «щілина» під шапкою: обрізає панель, тож вона виїжджає саме з-під хедера
const BurgerMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2100;
  overflow: hidden;
  padding-bottom: 28px; /* місце для тіні, щоб overflow її не різав */
  pointer-events: none;
`;

const BurgerPanel = styled.div`
  pointer-events: auto;
  box-sizing: border-box;
  max-height: calc(100dvh - 90px);
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  padding: 10px;
  gap: 6px;
  border-radius: 0 0 16px 16px;
  border-bottom: ${(p) =>
    p.$accentColor
      ? `3px solid ${p.$accentColor}`
      : `2px solid ${p.$isDarkMode ? "white" : "#000000"}`};
  background: ${headerLikeBg};
  color: ${(p) => (p.$isDarkMode ? "white" : "#000000")};
  box-shadow: ${(p) =>
    p.$accentColor ? `0 10px 24px ${p.$accentColor}55` : "0 12px 24px rgba(0, 0, 0, 0.35)"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: ${(p) =>
    p.$closing
      ? css`${burgerSlideUp} 0.22s cubic-bezier(0.55, 0, 0.75, 0.2) forwards`
      : css`${burgerSlide} 0.28s cubic-bezier(0.22, 1, 0.36, 1)`};
  ${(p) => p.$closing && "pointer-events: none;"}

  /* Не "none": onAnimationEnd має спрацювати, щоб меню прибралось із DOM */
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
  }
`;

const BurgerItem = styled.button`
  && {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    min-width: 0;
    min-height: 52px;
    margin: 0;
    padding: 8px 12px 8px 8px;
    box-sizing: border-box;
    border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)")};
    border-radius: 12px;
    background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.025)")};
    color: inherit;
    font-family: var(--font-family);
    font-size: 15px;
    font-weight: 500;
    line-height: 1.25;
    text-align: left;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
  }

  &&:hover,
  &&:focus-visible {
    background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)")};
    border-color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.14)")};
    outline: none;
  }
`;

const BurgerIcon = styled.span`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)")};
  font-size: 20px;
  line-height: 1;
`;

const BurgerLabel = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: break-word;
`;

const BurgerState = styled.span`
  flex: 0 0 auto;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  color: ${(p) => (p.$on ? "#22c55e" : "inherit")};
  background: ${(p) =>
    p.$on ? "rgba(34,197,94,0.15)" : p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"};
  opacity: ${(p) => (p.$on ? 1 : 0.75)};
`;

// Вхід для гостя: пігулка тієї ж форми, що й кнопка профілю, з акцентом сайту
const AccountButton = styled.button`
  && {
    flex: 0 0 auto;
    margin-left: 6px;
  }
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px 0 10px;
  border-radius: 999px;
  border: 1px solid rgba(0, 175, 206, 0.65);
  background: ${(p) => (p.$isDarkMode ? "rgba(0, 175, 206, 0.16)" : "rgba(0, 175, 206, 0.1)")};
  color: ${(p) => (p.$isDarkMode ? "#ffffff" : "#0b3b47")};
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: background 0.15s ease, transform 0.15s ease;

  svg {
    font-size: 20px;
    flex: 0 0 auto;
  }

  &:hover {
    background: ${(p) => (p.$isDarkMode ? "rgba(0, 175, 206, 0.28)" : "rgba(0, 175, 206, 0.18)")};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }

  /* вузькі телефони: лишаємо лише іконку */
  @media (max-width: 420px) {
    padding: 0 7px;
    span {
      display: none;
    }
  }
`;

const HeaderAvatar = styled.img`
  width: 35px;
  height: 35px;
  min-width: 30px;
  margin-right: 0;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  background-image: ${(props) =>
    props.$bColor?.includes("linear-gradient")
      ? `linear-gradient(white, white), ${props.$bColor}`
      : "none"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-color: ${(props) =>
    props.$bColor?.includes("linear-gradient")
      ? "transparent"
      : props.$bColor || "transparent"};
`;

const RecoveringAvatar = ({ src, ...props }) => {
  const [hasFailed, setHasFailed] = useState(false);
  const [hasRetried, setHasRetried] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const retryTimerRef = useRef(null);

  useEffect(() => {
    window.clearTimeout(retryTimerRef.current);
    setHasFailed(false);
    setHasRetried(false);
    setRetryKey(0);
  }, [src]);

  useEffect(() => {
    const retryAvatar = () => {
      if (document.visibilityState !== "visible") return;
      window.clearTimeout(retryTimerRef.current);
      setHasFailed(false);
      setHasRetried(false);
      setRetryKey((key) => key + 1);
    };

    window.addEventListener("online", retryAvatar);
    document.addEventListener("visibilitychange", retryAvatar);
    return () => {
      window.clearTimeout(retryTimerRef.current);
      window.removeEventListener("online", retryAvatar);
      document.removeEventListener("visibilitychange", retryAvatar);
    };
  }, []);

  const handleError = () => {
    if (!hasRetried) {
      setHasRetried(true);
      retryTimerRef.current = window.setTimeout(
        () => setRetryKey((key) => key + 1),
        1000,
      );
      return;
    }
    setHasFailed(true);
  };

  return (
    <HeaderAvatar
      key={retryKey}
      src={hasFailed ? userDefault : src}
      onError={handleError}
      {...props}
    />
  );
};

const ProfileButtonWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  /* аватарка не розтягується, як кнопки — займає лише свою ширину */
  && {
    flex: 0 0 auto;
    margin-left: 6px;
  }
`;

const ProfileButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;
const ProfileModal = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  z-index: 2001;
  min-width: 290px;
  max-width: min(340px, calc(100vw - 20px));
  background: ${(props) =>
    props.$isDarkMode ? "rgba(14, 14, 14, 0.96)" : "rgba(255, 255, 255, 0.96)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.12)")};
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 12px 14px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};

  /* Плавна поява/зникнення: модалка завжди в DOM, ховається через opacity + visibility.
     visibility з затримкою при закритті — щоб анімація встигла програтися,
     а приховані кнопки не ловили клік і Tab. */
  transform-origin: top right;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transform: ${(p) => (p.$open ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.97)")};
  visibility: ${(p) => (p.$open ? "visible" : "hidden")};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0s linear ${(p) => (p.$open ? "0s" : "0.2s")};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ProfileModalBody = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileModalInfo = styled.div`
  flex: 1;
  min-width: 0; /* щоб довга пошта обрізалася «…», а не розпирала модалку */
`;

const ProfileModalName = styled.div`
  font-size: 15px;
  font-weight: 800;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProfileModalEmail = styled.div`
  font-size: 12px;
  opacity: 0.7;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProfileModalJoined = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  opacity: 0.6;
  margin-top: 3px;

  svg {
    font-size: 13px;
    flex-shrink: 0;
  }
`;

// Рядок зі станом мережі — та сама іконка-стовпчики, що й на аватарці
const ProfileNetworkRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 7px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${(p) => p.$color};
  background: ${(p) => `${p.$color}1a`};
  border: 1px solid ${(p) => `${p.$color}40`};
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
`;

// Перехід до налаштувань акаунта (вкладка «Безпека»)
const ProfileSettingsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.12)")};
  background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)")};
  color: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease;

  svg {
    font-size: 17px;
  }
  &:hover {
    background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)")};
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

// Вихід з акаунта — кнопка внизу спливного вікна профілю
const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 12px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 92, 92, 0.35)" : "rgba(200, 30, 30, 0.3)")};
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 92, 92, 0.08)" : "rgba(200, 30, 30, 0.06)")};
  color: ${(props) => (props.$isDarkMode ? "#ff8a8a" : "#c01e1e")};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: ${(props) => (props.$isDarkMode ? "rgba(255, 92, 92, 0.18)" : "rgba(200, 30, 30, 0.12)")};
    border-color: ${(props) => (props.$isDarkMode ? "rgba(255, 92, 92, 0.6)" : "rgba(200, 30, 30, 0.5)")};
  }

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

// Значок донатера «Друг індиків» — лише подяка, жодних платних функцій
const SupporterDot = styled.span`
  position: absolute;
  top: -5px;
  left: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
  border: 1px solid ${(props) => (props.$isDarkMode ? "#111" : "#fff")};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  pointer-events: none;
`;

const SupporterChip = styled.div`
  display: inline-block;
  margin-top: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  color: #2b1313;
  background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  min-width: 0;
  gap: 4px;
  /* однакові комірки до 76px; на вузьких телефонах стискаються */
  & > * {
    flex: 0 1 76px;
    min-width: 0;
    display: flex;
    justify-content: center;
  }
`;

/*
  Обгортка кнопки теми (потрібна для позиціювання міні-модалки).
  IconButton розтягується на всю комірку — тож внутрішній span тултіпа
  теж має розтягнутися, як в інших кнопок, інакше кнопка стає квадратом.
*/
const ThemePickerWrap = styled.div`
  position: relative;

  & > span:first-child {
    flex: 1;
    justify-content: center;
  }
`;

const VisualSettingsPanel = styled.div`
  position: absolute;
  top: 52px;
  right: 10px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(18, 18, 18, 0.95)" : "rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#444" : "#ddd")};
  backdrop-filter: blur(5px);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const VisualLabel = styled.label`
  font-size: 11px;
  font-weight: bold;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const VisualRange = styled.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${(props) => (props.$isDarkMode ? "#ffb36c" : "#007bff")};
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) =>
    props.$active ? "#3e2723" : props.$isDarkMode ? "#ffb36c" : "#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 6px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

// ── Theme Picker Modal ─────────────────────────────────────────────────────
const themePickerIn = keyframes`
  from { opacity: 0; transform: translateY(-6px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const ThemePickerModal = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 2100;
  background: ${(props) =>
    props.$isDarkMode
      ? "linear-gradient(160deg, rgba(34, 36, 44, 0.96) 0%, rgba(18, 19, 24, 0.97) 100%)"
      : "rgba(255, 255, 255, 0.97)"};
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)")};
  box-shadow: ${(props) =>
    props.$isDarkMode
      ? "0 18px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)"
      : "0 14px 32px rgba(0,0,0,0.18)"};
  border-radius: 16px;
  padding: 14px;
  color: ${(props) => (props.$isDarkMode ? "#e8eaf0" : "#111")};
  min-width: 232px;
  max-width: calc(100vw - 16px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  outline: none;

  /* телефон: кнопка теми стоїть посередині шапки — вікно притискаємо до правого краю екрана
     (шапка має backdrop-filter, тож fixed рахується від неї, тобто від верху екрана) */
  @media (max-width: 767px) {
    position: fixed;
    top: 52px;
    left: auto;
    right: 8px;
  }
  animation: ${themePickerIn} 0.16s ease-out;
`;

const ThemePickerSection = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0.55;
`;

const ThemeBaseRow = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 12px;
  background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)")};
`;

const ThemeBaseBtn = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 9px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s, border-color 0.18s;
  background: transparent;
  color: ${(props) => (props.$isDarkMode ? "rgba(232,234,240,0.6)" : "rgba(17,17,17,0.6)")};

  svg {
    font-size: 14px;
    color: ${(props) => props.$iconColor};
    opacity: ${(props) => (props.$active ? 1 : 0.7)};
    transition: opacity 0.18s;
  }

  ${(props) =>
    props.$active &&
    css`
      color: ${props.$isDarkMode ? "#fff" : "#111"};
      background: ${props.$isDarkMode ? "rgba(255,255,255,0.1)" : "#fff"};
      border-color: ${props.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"};
      box-shadow: 0 0 0 1px ${props.$accent}55, 0 4px 12px ${props.$isDarkMode ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.1)"};
    `}

  &:hover {
    color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};
    svg { opacity: 1; }
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

// Стан акценту в дужках поруч із заголовком «Акцентний колір»
const AccentState = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0;
  white-space: nowrap;

  /* Кружечок кольору між «(» і назвою */
  & > span {
    margin: 0 5px 0 2px;
  }
`;

const AccentChip = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.$color || "transparent"};
  box-shadow: ${(props) => (props.$color ? `0 0 8px ${props.$color}` : "none")};
  border: ${(props) => (props.$color ? "none" : "1px dashed currentColor")};
`;

// Заголовок «Базова тема» з хрестиком закриття праворуч
const ThemePickerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const ThemePickerClose = styled.button`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  font-size: 18px;
  opacity: 0.65;
  cursor: pointer;
  transition: background 0.15s, opacity 0.15s;
  &:hover {
    opacity: 1;
    background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.07)")};
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

// Рендер вмісту модалки вибору теми (спільний для десктопу та мобільного)
const ThemePickerContent = ({ isDarkMode, accentColor, onPickTheme, onPickAccent, onClose }) => {
  const ring = accentColor || "#00afce";
  return (
    <>
      <ThemePickerHead>
        <ThemePickerSection>{i18n.t("ui.Header.bazovaTema")}</ThemePickerSection>
        <ThemePickerClose
          type="button"
          $isDarkMode={isDarkMode}
          aria-label={i18n.t("ui.Header.zakrytyVybirTemy")}
          title={i18n.t("ui.Header.zakrytyEsc")}
          onClick={onClose}
        >
          <MdClose aria-hidden="true" />
        </ThemePickerClose>
      </ThemePickerHead>
      <ThemeBaseRow $isDarkMode={isDarkMode}>
        <ThemeBaseBtn
          $isDarkMode={isDarkMode}
          $active={!isDarkMode}
          $accent={ring}
          $iconColor="#FFB020"
          aria-pressed={!isDarkMode}
          onClick={() => onPickTheme(false)}
        >
          <FaSun /> {i18n.t("ui.Header.svitla")}
        </ThemeBaseBtn>
        <ThemeBaseBtn
          $isDarkMode={isDarkMode}
          $active={isDarkMode}
          $accent={ring}
          $iconColor="#9DB8FF"
          aria-pressed={isDarkMode}
          onClick={() => onPickTheme(true)}
        >
          <BsMoonStarsFill /> {i18n.t("ui.Header.temna")}
        </ThemeBaseBtn>
      </ThemeBaseRow>

      <ThemePickerSection>
        {i18n.t("ui.Header.aktsentnyiKolir")}
        <AccentState>
          (<AccentChip $color={accentColor} />
          {accentColor ? getAccentLabel(accentColor).toLowerCase() : i18n.t("ui.Header.bezKoloru")})
        </AccentState>
      </ThemePickerSection>
      <AccentSwatches
        isDarkMode={isDarkMode}
        accentColor={accentColor}
        onPick={onPickAccent}
        columns={ACCENT_COLORS.length}
        gap={4}
        wrapItem={(ac, node) => (
          <Tooltip key={ac.id} content={ac.label} isDarkMode={isDarkMode} placement="top">
            {node}
          </Tooltip>
        )}
      />

    </>
  );
};




const Header = ({
  isIntroDone = true, // false, поки лоадер на екрані — хедер чекає і не виїжджає
  sfxVolume = 0.2,
  onOpenRegister,
  onOpenSettings,
  onOpenVip,
  onOpenShop,
  onOpenHelp,
  onOpenOtherOptions,
  onOpenInfo,
  onOpenAuthorsDirectory,
  isInfoOpen,
  isDarkMode,
  toggleTheme,
  isStickyBgMode,
  setIsStickyBgMode,
  onOpenAchievements,
  currentAvatar,
  onLogout,
  user,
  setIsFsActive,
  loadingStrategy,
  onSetLoadingStrategy,
}) => {
  const { registerRef } = useTutorial?.() || { registerRef: () => {} };
  const [showUltra, setShowUltra] = useState(false);
  const [showVisualSettings, setShowVisualSettings] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  // Меню лишається в DOM, поки грає анімація закриття (ховається назад під шапку)
  const [isBurgerRendered, setIsBurgerRendered] = useState(false);
  if (isBurgerOpen && !isBurgerRendered) setIsBurgerRendered(true);
  const burgerRef = useRef(null);
  const burgerBtnRef = useRef(null);
  const [accentColor, setAccentColor] = useAccentColor(); // null = без накладення
  const themePickerRef = useRef(null);
  const themePickerBtnRef = useRef(null);
  const avatarSource = user?.photoURL || user?.avatar || currentAvatar || userDefault;
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCommandsOpen, setIsCommandsOpen] = useState(false);
  const networkStatus = useNetworkStatus();
  const supporter = isSupporter(user);
  const inviter = isInviter(user);
  const invitee = isInvitee(user);

  // Ім'я для модалки профілю. firstName при вході через Google може бути
  // просто поштою — тоді беремо частину пошти до «@».
  const profileEmail = user?.email || user?.account || "";
  const profileName =
    (user?.firstName && user.firstName !== profileEmail && user.firstName) ||
    user?.displayName ||
    profileEmail.split("@")[0] ||
    i18n.t("ui.Header.korystuvach");

  // «З нами з …» — дата створення акаунта з Firebase (однакова на всіх пристроях).
  // Firebase SDK вантажиться ліниво, тож питаємо лише коли профіль відкрили.
  // Зберігаємо разом з uid, щоб після зміни акаунта не показати чужу дату.
  const [joined, setJoined] = useState(null); // { uid, at }
  const joinedAt = joined && joined.uid === user?.uid ? joined.at : null;

  useEffect(() => {
    if (!isProfileModalOpen || !user?.uid || joinedAt) return;
    let cancelled = false;
    loadFirebase()
      .then(async (fb) => {
        await fb.auth.authStateReady();
        const current = fb.auth.currentUser;
        if (!current || current.uid !== user.uid) return;
        const at = Date.parse(current.metadata?.creationTime || "");
        if (!cancelled && Number.isFinite(at)) setJoined({ uid: user.uid, at });
      })
      .catch(() => {}); // офлайн / Firebase не завантажився — просто без дати
    return () => {
      cancelled = true;
    };
  }, [isProfileModalOpen, user?.uid, joinedAt]);

  // Helper to play sound effects with current volume
  // Оголошено ТУТ — до useEffect-ів, щоб вони могли її викликати
  const playSfx = (sound) => {
    const audio = new Audio(sound);
    audio.volume = sfxVolume;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    if (!isProfileModalOpen) return;

    const handlePointerDown = (event) => {
      const modal = document.getElementById("header-profile-modal");
      const button = document.getElementById("header-profile-button");

      if (
        modal &&
        !modal.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        setIsProfileModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isProfileModalOpen]);

  // Бургер: закривається кліком поза ним і Esc (а коли всі кнопки вмістились у шапку — див. barCount)
  useEffect(() => {
    if (!isBurgerOpen) return undefined;
    const handlePointerDown = (event) => {
      if (burgerRef.current && !burgerRef.current.contains(event.target)) setIsBurgerOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsBurgerOpen(false);
        burgerBtnRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isBurgerOpen]);

  // Стрілки вгору/вниз — між пунктами бургера (стрілки шапки тут не діють)
  const handleBurgerKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    e.stopPropagation();
    const items = Array.from(e.currentTarget.querySelectorAll("button")).filter((b) => b.offsetWidth > 0);
    if (!items.length) return;
    const i = items.indexOf(document.activeElement);
    const next = e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
    items[next]?.focus();
  };

  // isSettingsPaused removed — AntiHeaderAd manages its own pause state independently

  // Глобальна комбінація клавіш (Alt + T) для фокусування та навігації по кнопках хедера
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (
        e.altKey &&
        (e.key.toLowerCase() === "t" || e.key === "е" || e.key === "Е" || e.key === "т" || e.key === "Т")
      ) {
        e.preventDefault();
        playSfx(bell);
        themePickerBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [sfxVolume]);

  // Клавіша «/» (як чат у грі) відкриває консоль команд, якщо людина не друкує в полі.
  // e.code — щоб працювало й на українській розкладці, де там «.»
  useEffect(() => {
    const handleSlash = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
      if (e.key !== "/" && !(e.code === "Slash" && !e.shiftKey)) return;
      const el = e.target;
      if (el?.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el?.tagName || "")) return;
      if (document.querySelector('[aria-modal="true"]')) return; // поверх інших модалок не відкриваємо
      e.preventDefault();
      setIsCommandsOpen(true);
    };
    window.addEventListener("keydown", handleSlash);
    return () => window.removeEventListener("keydown", handleSlash);
  }, []);

  // Фокус на першу кнопку при відкритті модалки
  useEffect(() => {
    if (showThemePicker) {
      const timer = setTimeout(() => {
        const firstBtn = themePickerRef.current?.querySelector("button");
        firstBtn?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [showThemePicker]);

  // Управління у відкритій модалці теми (Alt + A переключає акцентні кольори, стрілочки переміщують фокус)
  const handleModalKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setShowThemePicker(false);
      themePickerBtnRef.current?.focus();
      return;
    }

    // Alt + A лише всередині відкритої модалки переключає колір акценту
    if (e.altKey && (e.key.toLowerCase() === "a" || e.key === "ф" || e.key === "Ф" || e.key === "а" || e.key === "А")) {
      e.preventDefault();
      playSfx(relax);
      const colors = ACCENT_COLORS.map((c) => c.color);
      const curIdx = colors.indexOf(accentColor);
      const nextIdx = (curIdx + 1) % colors.length;
      setAccentColor(colors[nextIdx]);
      return;
    }

    const focusables = Array.from(
      themePickerRef.current?.querySelectorAll("button") || []
    );
    if (!focusables.length) return;

    const currentIndex = focusables.indexOf(document.activeElement);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = currentIndex < focusables.length - 1 ? currentIndex + 1 : 0;
      focusables[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusables.length - 1;
      focusables[prevIndex]?.focus();
    }
  };

  // Переключення між ВСІМА кнопками ХЕДЕРУ за допомогою стрілочок
  const handleHeaderKeyDown = (e) => {
    // Якщо модалка теми відкрита і фокус всередині — модалка має свій обробник
    if (themePickerRef.current && themePickerRef.current.contains(document.activeElement)) {
      return;
    }
    if (document.getElementById("header-burger-menu")?.contains(document.activeElement)) {
      return;
    }

    if (["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) {
      const headerContainer = e.currentTarget;
      const buttons = Array.from(
        headerContainer.querySelectorAll("button, [tabindex='0']")
      ).filter((btn) => btn.offsetWidth > 0 && btn.offsetHeight > 0);

      if (!buttons.length) return;

      const currentIndex = buttons.indexOf(document.activeElement);
      if (currentIndex === -1) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % buttons.length;
        buttons[nextIndex]?.focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        buttons[prevIndex]?.focus();
      }
    }
  };

  const {
    visualConfig,
    setVisualConfig,
    resetFilters,
    FILTERS,
    PRESETS,
    customPresets,
    saveCustomPreset,
    deleteCustomPreset,
    updateCustomPresetName,
    reorderCustomPresets,
  } = useVisualFilters(user);

  useEffect(() => {
    const interval = setInterval(() => setShowUltra((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);


  // ==========================================
  //     ОКРЕМІ ОБРОБНИКИ ЗВУКІВ ДЛЯ КНОПОК
  // ==========================================

  // 1. Тема
  const handleThemeToggle = () => {
    playSfx(bell);
    toggleTheme();
  };

  // 2. Фон на увесь сайт
  const handleStickyBgToggle = () => {
    playSfx(conimg);
    setIsStickyBgMode((prev) => !prev);
  };

  // 4. Око (Налаштування вигляду)
  const handleEyeToggle = () => {
    playSfx(relax);
    setShowVisualSettings((prev) => !prev);
  };

  // 5. Допомога / Навчання (?)
  const handleHelpClick = () => {
    playSfx(relax);
    if (onOpenHelp) onOpenHelp();
  };

  // 6. Магазин
  const handleShopClick = () => {
    playSfx(relax);
    if (onOpenShop) onOpenShop();
  };

  // 7. Інші опції (три крапки)
  const handleOtherOptionsClick = () => {
    playSfx(relax);
    if (onOpenOtherOptions) onOpenOtherOptions();
  };

  // 8. Налаштування (шестерня)
  const handleSettingsClick = () => {
    playSfx(relax);
    if (onOpenSettings) onOpenSettings();
  };

  // 8.1 Налаштування акаунта з модалки профілю — одразу на вкладці «Безпека»
  const handleAccountSettingsClick = () => {
    playSfx(relax);
    setIsProfileModalOpen(false);
    window.dispatchEvent(
      new CustomEvent("stykhiia:open-settings", { detail: { tab: "security" } }),
    );
  };

  // 9. Вихід з акаунту
  const handleLogoutClick = () => {
    playSfx(relax);
    if (onLogout) onLogout();
  };

  // 11. Кнопка "Акаунт" (вхід) (для незалогіненого)
  const handleRegisterClick = () => {
    playSfx(relax);
    if (onOpenRegister) onOpenRegister();
  };

  // 12. Кнопки фільтрів у панелі вигляду
  const handleFilterClick = (filterId) => {
    playSfx(relax);
    setVisualConfig((prev) => selectFilter(prev, filterId));
  };

  // 13. Пресети стилів
  const handlePresetClick = (config) => {
    playSfx(relax);
    setVisualConfig(config);
  };

  // 14. Кнопки, що виїжджають із бургера в шапку, коли є місце. Порядок = важливість:
  //     першою в шапці з'являється Довідка, останньою — Подяка. Тема й Параметри — завжди в шапці.
  const headerActions = [
    {
      key: "help",
      label: i18n.t("ui.Header.dovidka"),
      menuLabel: user ? i18n.t("ui.Header.dovidka") : i18n.t("ui.Header.dovidkaINavchannia"),
      tooltip: user ? i18n.t("ui.Header.dopomohaZSaitom") : i18n.t("ui.Header.navchannia"),
      icon: "?",
      iconStyle: { fontWeight: 900 },
      onClick: handleHelpClick,
      prefetch: "help",
    },
    {
      key: "shop",
      label: i18n.t("ui.Header.mahazyn"),
      menuLabel: i18n.t("ui.Header.mahazynIPidtrymka"),
      tooltip: i18n.t("ui.Header.stanteNashymSposoromTa"),
      icon: <GiShop />,
      iconStyle: { fontSize: "19px" },
      onClick: handleShopClick,
      prefetch: "shop",
    },
    {
      key: "stickyBg",
      label: i18n.t("ui.Header.fon"),
      menuLabel: i18n.t("ui.Header.fonNaUvesSait"),
      tooltip: i18n.t("ui.Header.fonNaUvesSait2", { v0: isStickyBgMode ? "увімкнено" : "вимкнено" }),
      icon: <MdWallpaper />,
      state: isStickyBgMode ? i18n.t("ui.Header.uvimkneno") : i18n.t("ui.Header.vymkneno"),
      pressed: isStickyBgMode,
      onClick: handleStickyBgToggle,
    },
    {
      key: "commands",
      label: i18n.t("ui.Header.komandy"),
      menuLabel: i18n.t("ui.Header.komandy"),
      tooltip: i18n.t("ui.Header.konsolKomandKlavisha"),
      icon: "/",
      iconStyle: { fontWeight: 900, fontFamily: "ui-monospace, Consolas, monospace" },
      onClick: () => { playSfx(relax); setIsCommandsOpen(true); },
      prefetchFn: prefetchCommands,
    },
    {
      key: "authors",
      label: i18n.t("ui.Header.podiaka"),
      menuLabel: i18n.t("ui.Header.podiaka"),
      tooltip: i18n.t("ui.Header.podiakaAvtoramIDzherelam"),
      icon: <FaBookOpen />,
      iconStyle: { fontSize: "18px" },
      onClick: () => onOpenAuthorsDirectory?.(),
      prefetch: "authors",
    },
  ];

  // Скільки кнопок (за порядком важливості) стоїть у шапці; решта — у бургері.
  // Якщо влізли всі — бургера немає. Якщо ні — одну комірку займає сам бургер.
  const headerActionCount = headerActions.length;
  const [barCount, setBarCount] = useState(0);
  const buttonsGroupRef = useRef(null);
  useLayoutEffect(() => {
    const el = buttonsGroupRef.current;
    if (!el) return undefined;
    const total = headerActionCount;
    const measure = () => {
      const cells = Math.floor((el.clientWidth + BAR_CELL_GAP) / (BAR_CELL_MIN + BAR_CELL_GAP));
      const free = cells - ALWAYS_IN_BAR;
      setBarCount(free >= total ? total : Math.max(0, free - 1));
    };
    measure();
    if (typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [headerActionCount]);
  const barActions = headerActions.slice(0, barCount);
  const burgerActions = headerActions.slice(barCount);
  // Бургер зник (усе вмістилось) — закриваємо відкрите меню
  useEffect(() => {
    if (burgerActions.length === 0) setIsBurgerOpen(false);
  }, [burgerActions.length]);

  return (
    <><HeaderDiv
  $ready={isIntroDone}
  $isDarkMode={isDarkMode}
  $isStickyBgMode={isStickyBgMode}
  $accentColor={accentColor}
  data-decorator-ignore="true"
>
  <HeaderFix>
    {/* Логотип — як у погодних сайтах: зліва в шапці, веде на початок сторінки */}
    <LogoButton
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={i18n.t("ui.Header.stykhiiaNaPochatokStorinky")}
    >
      <LogoImg src={herotext} alt={i18n.t("ui.Header.stykhiia")} width="212" height="78" decoding="async" />
    </LogoButton>

    <ButtonsGroup ref={(el) => { buttonsGroupRef.current = el; registerRef('headerBgTheme', el); }} onKeyDown={handleHeaderKeyDown}>
      {/* Тема — завжди в шапці (її міні-модалка прив'язана до кнопки) */}
      <ThemePickerWrap>
        <Tooltip content={i18n.t("ui.Header.vybirTemy")} isDarkMode={isDarkMode}>
          <IconButton
            ref={themePickerBtnRef}
            onClick={() => { playSfx(bell); setShowThemePicker(p => !p); }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                if (e.key === "ArrowDown") e.preventDefault();
                setShowThemePicker(true);
              }
            }}
            $isDarkMode={isDarkMode}
            aria-label={i18n.t("ui.Header.vybirTemyAltT")}
            aria-expanded={showThemePicker}
            style={{ position: "relative" }}
          >
            <EmojiWrapper style={{ fontSize: "19px" }}>
              <IoColorPalette />
            </EmojiWrapper>
            {/* маленька крапка акценту */}
            {accentColor && (
              <span style={{
                position: "absolute",
                top: 3, right: "calc(50% - 15px)", pointerEvents: "none",
                width: 6, height: 6,
                borderRadius: "50%",
                background: accentColor,
                border: "1px solid rgba(0,0,0,0.3)"
              }} />
            )}
            <IconLabel aria-hidden="true">{i18n.t("ui.Header.tema")}</IconLabel>
          </IconButton>
        </Tooltip>

        {showThemePicker && (
          <ThemePickerModal
            ref={themePickerRef}
            $isDarkMode={isDarkMode}
            tabIndex={-1}
            onKeyDown={handleModalKeyDown}
          >
            <ThemePickerContent
              isDarkMode={isDarkMode}
              accentColor={accentColor}
              onPickTheme={(dark) => { if (dark !== isDarkMode) { playSfx(bell); toggleTheme(); } }}
              onPickAccent={(c) => { playSfx(relax); setAccentColor(c); }}
              onClose={() => setShowThemePicker(false)}
            />
          </ThemePickerModal>
        )}
      </ThemePickerWrap>

      {/* Кнопки, що виїжджають із бургера, коли в шапці є місце (за важливістю — порядок у headerActions) */}
      {barActions.map((action) => (
        <BarSlot key={action.key}>
          <Tooltip content={action.tooltip} isDarkMode={isDarkMode}>
            <IconButton
              onClick={action.onClick}
              {...(action.prefetch ? prefetchProps(action.prefetch) : action.prefetchFn ? { onPointerEnter: action.prefetchFn, onFocus: action.prefetchFn, onTouchStart: action.prefetchFn } : null)}
              $isDarkMode={isDarkMode}
              aria-label={action.tooltip}
              aria-pressed={action.pressed}
            >
              <EmojiWrapper style={action.iconStyle}>
                {action.pressed ? (
                  <ActiveDot $isDarkMode={isDarkMode}>{action.icon}</ActiveDot>
                ) : (
                  action.icon
                )}
              </EmojiWrapper>
              <IconLabel aria-hidden="true">{action.label}</IconLabel>
            </IconButton>
          </Tooltip>
        </BarSlot>
      ))}

      {/* Параметри — завжди в шапці; доступні й гостям (вкладка «Безпека» для них заблокована) */}
      <Tooltip content={i18n.t("ui.Header.nalashtuvannia")} isDarkMode={isDarkMode}>
        <IconButton
          onClick={handleSettingsClick}
          {...prefetchProps("settings")}
          $isDarkMode={isDarkMode}
          aria-label={i18n.t("ui.Header.nalashtuvannia")}
        >
          <EmojiWrapper>
            <MdSettingsSuggest />
          </EmojiWrapper>
          <IconLabel aria-hidden="true">{i18n.t("ui.Header.parametry")}</IconLabel>
        </IconButton>
      </Tooltip>

      {/* Бургер — усе, що не вмістилось у шапку; на найширших екранах зникає */}
      {burgerActions.length > 0 && (
      <BurgerWrap ref={burgerRef}>
        <IconButton
          ref={burgerBtnRef}
          onClick={() => { playSfx(relax); setIsBurgerOpen((p) => !p); }}
          $isDarkMode={isDarkMode}
          aria-label={i18n.t("ui.Header.meniu")}
          aria-expanded={isBurgerOpen}
          aria-controls="header-burger-menu"
        >
          <EmojiWrapper>{isBurgerOpen ? <MdClose /> : <MdMenu />}</EmojiWrapper>
          <IconLabel aria-hidden="true">{i18n.t("ui.Header.meniu")}</IconLabel>
        </IconButton>
        {isBurgerRendered &&
          createPortal(
            <BurgerBackdrop
              aria-hidden="true"
              $isDarkMode={isDarkMode}
              $closing={!isBurgerOpen}
              onClick={() => setIsBurgerOpen(false)}
              onAnimationEnd={() => { if (!isBurgerOpen) setIsBurgerRendered(false); }}
            />,
            document.body,
          )}
        {isBurgerRendered && (
          <BurgerMenu>
          <BurgerPanel
            id="header-burger-menu"
            role="menu"
            $isDarkMode={isDarkMode}
            $accentColor={accentColor}
            $closing={!isBurgerOpen}
            aria-hidden={!isBurgerOpen || undefined}
            onKeyDown={handleBurgerKeyDown}
            onAnimationEnd={(e) => {
              if (e.target === e.currentTarget && !isBurgerOpen) setIsBurgerRendered(false);
            }}
          >
            {burgerActions.map((action) => (
              <BurgerItem
                key={action.key}
                type="button"
                role="menuitem"
                $isDarkMode={isDarkMode}
                onClick={() => { setIsBurgerOpen(false); action.onClick(); }}
                {...(action.prefetch ? prefetchProps(action.prefetch) : action.prefetchFn ? { onPointerEnter: action.prefetchFn, onFocus: action.prefetchFn, onTouchStart: action.prefetchFn } : null)}
              >
                <BurgerIcon $isDarkMode={isDarkMode} style={action.iconStyle}>{action.icon}</BurgerIcon>
                <BurgerLabel>{action.menuLabel}</BurgerLabel>
                {action.state && (
                  <BurgerState $on={action.pressed} $isDarkMode={isDarkMode}>{action.state}</BurgerState>
                )}
              </BurgerItem>
            ))}
          </BurgerPanel>
          </BurgerMenu>
        )}
      </BurgerWrap>
      )}

      {user ? (
        <ProfileButtonWrap>
          <Tooltip
            content={[
              i18n.t("ui.Header.vashProfil"),
              supporter && i18n.t("ui.Header.druhIndykiv"),
              inviter && i18n.t("ui.Header.posolStykhii"),
              invitee && i18n.t("ui.Header.parostokStykhii"),
              NETWORK_LABELS[networkStatus],
            ].filter(Boolean).join(" · ")}
            isDarkMode={isDarkMode}
          >
          <ProfileButton
            id="header-profile-button"
            $isDarkMode={isDarkMode}
            onClick={() => setIsProfileModalOpen((prev) => !prev)}
            aria-label={[
              i18n.t("ui.Header.profilKorystuvacha"),
              supporter && i18n.t("ui.Header.druhIndykiv2"),
              NETWORK_LABELS[networkStatus],
            ].filter(Boolean).join(" ")}
          >
            <RecoveringAvatar
              src={avatarSource}
              $bColor={user.borderColor}
              style={{ width: "33px", height: "33px" }}
            />
            {supporter && (
              <SupporterDot $isDarkMode={isDarkMode} aria-hidden="true">🦃</SupporterDot>
            )}
            <NetworkBadge status={networkStatus} isDarkMode={isDarkMode} />
          </ProfileButton>
         </Tooltip>
            <ProfileModal
              id="header-profile-modal"
              $isDarkMode={isDarkMode}
              $open={isProfileModalOpen}
              aria-hidden={!isProfileModalOpen}
            >
              <ProfileModalBody>
                <RecoveringAvatar
                  src={avatarSource}
                  $bColor={user.borderColor}
                  style={{ width: "42px", height: "42px" }}
                />
                <ProfileModalInfo>
                   <ProfileModalName title={profileName}>{profileName}</ProfileModalName>
                   {profileEmail && profileEmail !== profileName && (
                     <ProfileModalEmail title={profileEmail}>{profileEmail}</ProfileModalEmail>
                   )}
                   {joinedAt && (
                     <ProfileModalJoined>
                       <MdCalendarMonth aria-hidden="true" />
                       {i18n.t("ui.Header.zNamyZ")}{" "}
                       {new Date(joinedAt).toLocaleDateString(dateLocale(), {
                         day: "numeric",
                         month: "long",
                         year: "numeric",
                       })}
                     </ProfileModalJoined>
                   )}
                   {supporter && (
                     <SupporterChip title={i18n.t("ui.Header.diakuiemoShchoPidtrymuieteStykhiiu")}>{i18n.t("ui.Header.druhIndykiv3")}</SupporterChip>
                   )}
                   {inviter && (
                     <SupporterChip title={i18n.t("ui.Header.vyPryvelyDruhaU")}>{i18n.t("ui.Header.posolStykhii2")}</SupporterChip>
                   )}
                   {invitee && (
                     <SupporterChip title={i18n.t("ui.Header.vyPryishlyUStykhiiu")}>{i18n.t("ui.Header.parostokStykhii2")}</SupporterChip>
                   )}
                </ProfileModalInfo>
              </ProfileModalBody>

              <ProfileNetworkRow $color={NETWORK_COLORS[networkStatus]} role="status">
                <NetworkIcon
                  status={networkStatus}
                  size={14}
                  bg={isDarkMode ? "#0e0e0e" : "#ffffff"}
                />
                {NETWORK_LABELS[networkStatus]}
              </ProfileNetworkRow>

              <ProfileSettingsButton
                type="button"
                $isDarkMode={isDarkMode}
                onClick={handleAccountSettingsClick}
              >
                <MdManageAccounts aria-hidden="true" />
                {i18n.t("ui.Header.nalashtuvanniaAkaunta")}
              </ProfileSettingsButton>

              <LogoutButton
                type="button"
                $isDarkMode={isDarkMode}
                onClick={() => {
                  setIsProfileModalOpen(false);
                  handleLogoutClick();
                }}
              >
                <GiExitDoor aria-hidden="true" />
                {i18n.t("ui.Header.vyityZAkaunta")}
              </LogoutButton>
            </ProfileModal>
        </ProfileButtonWrap>
      ) : (
        <AccountButton type="button" onClick={handleRegisterClick} {...prefetchProps("register")} $isDarkMode={isDarkMode} aria-label={i18n.t("ui.Header.uviityVAkaunt")}>
          <MdAccountCircle aria-hidden="true" />
          <span>{i18n.t("ui.Header.uviity")}</span>
        </AccountButton>
      )}
    </ButtonsGroup>
  </HeaderFix>
  {showVisualSettings && (
    <VisualSettingsPanel $isDarkMode={isDarkMode}>
      <div>
        <VisualLabel $isDarkMode={isDarkMode}>
          {i18n.t("ui.Header.iaskravist")} <span>{visualConfig.darkIntensity}%</span>
        </VisualLabel>
        <VisualRange
          type="range"
          min="0"
          max="100"
          value={visualConfig.darkIntensity}
          onChange={(e) =>
            setVisualConfig((prev) => ({
              ...prev,
              darkIntensity: Number(e.target.value),
            }))
          }
          $isDarkMode={isDarkMode}
        />
      </div>

      <FilterGrid>
        {FILTERS.map((f) => (
          <FilterButton
            key={f.id}
            $active={visualConfig.filterType === f.id}
            $isDarkMode={isDarkMode}
            onClick={() => handleFilterClick(f.id)}
          >
            {f.label}
          </FilterButton>
        ))}
      </FilterGrid>

      {visualConfig.filterType !== "none" && (
        <div>
          <VisualLabel $isDarkMode={isDarkMode}>
            {i18n.t("ui.Header.sylaEfektu")} <span>{visualConfig.filterIntensity}%</span>
          </VisualLabel>
          <VisualRange
            type="range"
            min="0"
            max="100"
            value={visualConfig.filterIntensity}
            onChange={(e) =>
              setVisualConfig((prev) => ({
                ...prev,
                filterIntensity: Number(e.target.value),
              }))
            }
            $isDarkMode={isDarkMode}
          />
        </div>
      )}

      <div style={{ marginTop: "5px" }}>
        <VisualLabel
          $isDarkMode={isDarkMode}
          style={{ marginBottom: "8px" }}
        >
          {i18n.t("ui.Header.styli")}
        </VisualLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5px",
          }}
        >
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              style={{
                background: "transparent",
                border: "1px solid #ffb36c",
                color: isDarkMode ? "#ffb36c" : "#333",
                borderRadius: "6px",
                padding: "5px",
                fontSize: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handlePresetClick(preset.config)}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><preset.icon /> {preset.label}</span>
            </button>
          ))}
          {customPresets.map((preset) => (
            <button
              key={preset.id}
              style={{
                background: "rgba(255, 179, 108, 0.1)",
                border: "1px solid #7afcff",
                color: isDarkMode ? "#7afcff" : "#006666",
                borderRadius: "6px",
                padding: "5px",
                fontSize: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              onClick={() => handlePresetClick(preset.config)}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><CustomPresetIcon /> {presetName(preset)}</span>
            </button>
          ))}
        </div>
      </div>
    </VisualSettingsPanel>
  )}
  </HeaderDiv>

  {isCommandsOpen && (
    <Suspense fallback={null}>
      <CommandsModal isDarkMode={isDarkMode} onClose={() => setIsCommandsOpen(false)} />
    </Suspense>
  )}

   {/* <AntiHeaderAd
    isDarkMode={isDarkMode}
    accentColor={accentColor}
    onOpenShop={handleShopClick}
  /> */}
    </>
  );
};

export default Header;
