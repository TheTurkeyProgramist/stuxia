import React, { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import styled, { keyframes, css } from "styled-components";
import { FaKeyboard, FaCloudSun, FaWind, FaBell, FaPencilAlt, FaLeaf, FaPlane, FaGlobe, FaMapMarkedAlt, FaRocket } from "react-icons/fa";
import { FiCheck, FiPlay, FiPlus, FiSearch, FiX } from "react-icons/fi";
import { Tooltip } from "../Header/Header.jsx";
import { MdDragIndicator } from "react-icons/md";
import { Reorder, motion, useDragControls } from "framer-motion";
import climate from "../../media/third-party/services/ventusky-map.webp";
import localforage from "localforage";
import { BsFillPinAngleFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuFullscreen } from "react-icons/lu";
import { CgMiniPlayer } from "react-icons/cg";
import { GiLockedChest } from "react-icons/gi";
import turkey from "../../media/characters/kate-and-domino.webm";
import toast, { Toaster } from "react-hot-toast";
import coverVentusky from "../../media/third-party/services/ventusky.webp";
import coverWindy from "../../media/third-party/services/windy.webp";
import coverAlerts from "../../media/third-party/services/air-alerts.webp";
import coverAirTargets from "../../media/third-party/services/air-targets.webp";
import coverExcalidraw from "../../media/third-party/services/excalidraw.webp";
import coverSaveEcoBot from "../../media/third-party/services/saveecobot.webp";
import coverAirTraffic from "../../media/third-party/services/air-traffic.webp";
import coverDeepState from "../../media/third-party/services/deepstate.webp";
// Ctrl + Alt + M: Активувати/деактивувати мапу
// Ctrl + Alt + F: Відкрити на весь екран
// Ctrl + Alt + P: Відкрити/закрити міні-плеєр
// Ctrl + Alt + S: Наступне джерело карти
// Ctrl + Alt + O: Закріпити/відкріпити локацію
// Ctrl + Alt + K: Відкрити/закрити налаштування
// (Ctrl + Shift + ... не використовуємо: Ctrl+Shift+W закриває вікно браузера, M/P/K зайняті Chrome/Firefox)
const AihelpTitle = styled.div`
  font-size: 15px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#111111")};
  display: inline-flex;
    margin-bottom: -41px;
    width: 150px;
  padding:6px 7px;
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


const KeyboardShortcut = styled.kbd`
  display: ${(props) => (props.$visible ? "inline-flex" : "none")};
  align-items: center;
  margin-left: auto;
  padding: 2px 7px;
  border: 1px solid rgba(255, 184, 108, 0.3);
  border-bottom-width: 2px;
  border-radius: 5px;
  background: rgba(255, 140, 0, 0.08);
  color: rgba(255, 200, 130, 0.85);
  font-size: 9.5px;
  font-family: ui-monospace, monospace;
  letter-spacing: 0.03em;
  white-space: nowrap;
  pointer-events: none;
  flex-shrink: 0;
`;

const MobileSettingsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  align-self: stretch;
  padding: 10px 14px;
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255, 179, 108, 0.55)" : "rgba(200, 100, 0, 0.5)"};
  border-radius: 10px;
  background: ${(p) => p.$isDarkMode
    ? "linear-gradient(135deg, rgba(20, 14, 6, 0.92), rgba(30, 20, 8, 0.88))"
    : "linear-gradient(135deg, rgba(255, 248, 235, 0.97), rgba(255, 235, 200, 0.97))"};
  color: ${(p) => p.$isDarkMode ? "#ffb36c" : "#a05000"};
  cursor: pointer;
  z-index: 100;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 20px rgba(255, 140, 0, 0.12), 0 1px 0 rgba(255,255,255,0.04) inset;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${(p) => p.$isDarkMode ? "rgba(255, 179, 108, 0.9)" : "rgba(200, 100, 0, 0.8)"};
    box-shadow: 0 4px 24px rgba(255, 140, 0, 0.25);
  }
`;

const MobileSettingsOverlay = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: flex-start;
  justify-content: center;
  background: ${(p) => p.$isDarkMode ? "rgba(2, 5, 12, 0.55)" : "rgba(0, 0, 0, 0.3)"};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`;

const PanelScrollbar = `
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.25) transparent;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.25);
    border-radius: 4px;
  }
`;

const MobileSettingsPanel = styled.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 0 10px 16px;
  background: ${(p) => p.$isDarkMode
    ? "linear-gradient(170deg, rgba(10,16,30,0.97) 0%, rgba(15,22,40,0.97) 60%, rgba(18,14,8,0.97) 100%)"
    : "linear-gradient(170deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 60%, rgba(255,243,220,0.99) 100%)"};
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
  border-top: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.18)" : "rgba(200,100,0,0.2)"};
  color: ${(p) => p.$isDarkMode ? "white" : "#1a0800"};
  box-shadow: ${(p) => p.$isDarkMode
    ? "0 -8px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset"
    : "0 -8px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8) inset"};
  ${PanelScrollbar}
`;

const MobileSettingsHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  margin: 0 -10px 4px;
  padding: 12px 16px 12px 18px;
  background: ${(p) => p.$isDarkMode
    ? "linear-gradient(90deg, rgba(8,14,28,0.98) 0%, rgba(14,18,34,0.98) 50%, rgba(20,12,4,0.98) 100%)"
    : "linear-gradient(90deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 100%)"};
  border-bottom: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.2)" : "rgba(200,100,0,0.15)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.5);
  z-index: 10;

  h2 {
    margin: 0;
    padding: 4px 0;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }
  /* Градієнт на самому анімованому тексті: background-clip на h2 обрізав гліфи з transform */
  h2 > span {
    background: linear-gradient(90deg, #ffb36c, #ffd49e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin: 0;
    margin-top: 1px;
    color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.42)" : "rgba(100,50,0,0.55)"};
    font-size: 11px;
    letter-spacing: 0.02em;
  }
`;

const Dov = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`;

const SettingLabel = styled.div`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.55)" : "rgba(160,70,0,0.55)"};
  padding: 0 2px;
  margin-top: 10px;
  margin-bottom: 2px;

  @media (min-width: 1024px) {
    display: ${(p) => (p.$hideOnDesktop ? "none" : "block")};
  }
`;

const MobileSetting = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 12px;
  border: 1px solid ${(p) => {
    if (p.$active) return p.$isDarkMode ? "rgba(255,179,108,0.6)" : "rgba(200,100,0,0.5)";
    if (p.$danger) return p.$isDarkMode ? "rgba(255,80,80,0.4)" : "rgba(200,40,40,0.35)";
    return p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  }};
  border-radius: 10px;
  background: ${(p) => {
    if (p.$active) return p.$isDarkMode ? "rgba(255,179,108,0.1)" : "rgba(255,179,108,0.15)";
    if (p.$danger) return p.$isDarkMode ? "rgba(255,80,80,0.07)" : "rgba(255,80,80,0.06)";
    return p.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  }};
  color: ${(p) => p.$isDarkMode ? "white" : "#1a0800"};
  cursor: pointer;
  gap: 12px;
  text-align: left;
  transition: all 0.18s ease;
  box-shadow: ${(p) => p.$active
    ? p.$isDarkMode ? "0 0 0 1px rgba(255,179,108,0.15) inset" : "0 0 0 1px rgba(200,100,0,0.12) inset"
    : "0 1px 0 rgba(255,255,255,0.03) inset"};

  svg {
    font-size: 20px;
    flex-shrink: 0;
    color: ${(p) => {
      if (p.$active) return p.$isDarkMode ? "#ffb36c" : "#c06000";
      if (p.$danger) return p.$isDarkMode ? "rgba(255,100,100,0.8)" : "rgba(180,40,40,0.8)";
      return p.$isDarkMode ? "rgba(255,179,108,0.75)" : "rgba(160,80,0,0.65)";
    }};
    transition: color 0.18s ease;
  }

  &:hover {
    border-color: ${(p) => p.$danger
      ? p.$isDarkMode ? "rgba(255,80,80,0.6)" : "rgba(200,40,40,0.5)"
      : p.$isDarkMode ? "rgba(255,179,108,0.35)" : "rgba(200,100,0,0.35)"};
    background: ${(p) => p.$danger
      ? p.$isDarkMode ? "rgba(255,80,80,0.12)" : "rgba(255,80,80,0.08)"
      : p.$isDarkMode ? "rgba(255,179,108,0.07)" : "rgba(255,179,108,0.1)"};
    box-shadow: ${(p) => p.$danger
      ? "0 4px 16px rgba(255,80,80,0.1)"
      : "0 0 0 1px rgba(255,179,108,0.12) inset, 0 4px 16px rgba(255,140,0,0.08)"};
    transform: translateY(-1px);
    svg { color: ${(p) => p.$danger
      ? p.$isDarkMode ? "#ff7070" : "#cc3030"
      : p.$isDarkMode ? "#ffb36c" : "#c06000"}; }
  }
  &:active { transform: translateY(0); }

  strong {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: ${(p) => {
      if (p.$active) return p.$isDarkMode ? "#ffd4a0" : "#7a3500";
      if (p.$danger) return p.$isDarkMode ? "#ffaaaa" : "#aa2020";
      return p.$isDarkMode ? "rgba(255,255,255,0.92)" : "rgba(30,10,0,0.88)";
    }};
    display: block;
  }

  span {
    color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.38)" : "rgba(100,50,0,0.5)"};
    font-size: 10.5px;
    line-height: 1.4;
    display: block;
    margin-top: 1px;
  }
`;

// && піднімає специфічність над `span` у MobileSetting (інакше бейдж розтягується на всю ширину)
const StatusBadge = styled.span`
  && {
    display: inline-flex;
    align-self: flex-start;
    width: fit-content;
    font-size: 10px;
    line-height: 1.4;
    margin-top: 2px;
  }
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: ${(p) => p.$on
    ? "rgba(80, 200, 100, 0.15)"
    : "rgba(180, 60, 60, 0.12)"};
  color: ${(p) => p.$on ? "#5dca70" : "#e07070"};
  border: 1px solid ${(p) => p.$on ? "rgba(80,200,100,0.3)" : "rgba(180,60,60,0.25)"};
  margin-top: 2px;
`;

const MobileSettingsClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)"};
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"};
  color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.55)"};
  cursor: pointer;
  transition: all 0.18s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 60, 60, 0.18);
    border-color: rgba(255, 80, 80, 0.35);
    color: #ff8080;
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

const FramesGrid = styled.div`
  position: absolute;
  inset: 0 0 ${(p) => p.$bottomInset || 0}px 0;
  display: grid;
  grid-template-columns: ${(p) => (p.$split ? "repeat(2, minmax(0, 1fr))" : "minmax(0, 1fr)")};
  gap: ${(p) => (p.$split ? "2px" : "0")};
`;

const FramePane = styled.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
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
  width: 310px;
  text-align: center;
  z-index: 1;
  pointer-events: none;
    p {
    margin: 0;
    margin-top: 1px;
   font-size: 11px;
    letter-spacing: 0.02em;
    color: black;
    background-color: #ffffffe1;
     font-weight: 700;
     border-radius: 7px;
     padding: 3px;
  }
`;

const TurkeyVideoFrame = styled.div`
  position: relative;
  width: 340px;
  height: 210px;
  margin-bottom: -10px;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 18%;
    right: 18%;
    bottom: -4%;
    height: 28%;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.76) 48%,
      rgba(0, 0, 0, 0.76) 88%,
      transparent 100%
    );
    filter: blur(10px);
    pointer-events: none;
  }
`;

const TurkeyVideo = styled.video`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: screen;
  opacity: 0.96;
  transition: opacity 300ms ease, filter 300ms ease;
  filter: brightness(1.04);
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
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const textCycleAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-4px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(4px); }
`;

const AnimatedButtonText = styled.span`
  display: inline-block;
  animation: ${textCycleAnimation} 3s ease-in-out infinite;
  color: #ffb36c;
  font-weight: 700;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const AddFrameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  padding: 12px;
  border-radius: 10px;
  background: ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.04)" : "rgba(255,179,108,0.06)"};
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.14)" : "rgba(200,100,0,0.18)"};
`;

const FormInput = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)"};
  background: ${(p) => p.$isDarkMode ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.85)"};
  color: ${(p) => p.$isDarkMode ? "white" : "#1a0800"};
  font-size: 13px;
  outline: none;
  transition: border-color 0.18s;
  &::placeholder { color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(100,50,0,0.4)"}; }
  &:focus {
    border-color: rgba(255, 179, 108, 0.6);
    background: ${(p) => p.$isDarkMode ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.98)"};
  }
`;

const FormButton = styled.button`
  padding: 9px 16px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #ffb36c, #e07000);
  color: #0d0800;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.18s, transform 0.18s;
  &:hover { opacity: 0.88; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;


const MobileSettingSelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  border-radius: 10px;
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"};
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
  overflow: hidden;
`;

// Слайдер джерел для телефонів замість випадаючого списку: гортається пальцем, картки прилипають
const MobileSourceSlider = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  padding: 10px 12px 12px;
  border-top: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 12px;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

// Пошук джерел (вбудованих і власних фреймів) — у налаштуваннях і в бічній панелі
const SourceSearch = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    position: absolute;
    left: 12px;
    font-size: 15px;
    color: ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.7)" : "rgba(160,80,0,0.6)"};
    pointer-events: none;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 9px 34px 9px 36px;
    border-radius: 10px;
    border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)"};
    background: ${(p) => p.$isDarkMode ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.85)"};
    color: ${(p) => p.$isDarkMode ? "white" : "#1a0800"};
    font-size: 13px;
    outline: none;
    transition: border-color 0.18s;
    &::placeholder { color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.35)" : "rgba(100,50,0,0.4)"}; }
    &:focus { border-color: rgba(255, 179, 108, 0.6); }
    &::-webkit-search-cancel-button { display: none; }
  }

  button {
    position: absolute;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.6)" : "rgba(30,10,0,0.55)"};
    cursor: pointer;
    svg { position: static; font-size: 15px; color: inherit; }
    &:hover { background: rgba(255, 179, 108, 0.15); }
  }
`;

const SourcesEmpty = styled.p`
  margin: 0;
  padding: 14px 4px;
  flex: 1 0 100%;
  text-align: center;
  font-size: 12px;
  color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.45)" : "rgba(100,50,0,0.55)"};
`;

const MobileSourceSlide = styled.div`
  flex: 0 0 min(72%, 260px);
  scroll-snap-align: start;
`;

// Ряд джерел унизу карти в повноекранному режимі: бічна панель тоді поза екраном.
// Без прилипання — інакше прокрутка коліщатком дрібними кроками відскакує назад
const FULLSCREEN_STRIP_HEIGHT = 124;
const FullscreenSourcesStrip = styled(MobileSourceSlider)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
  box-sizing: border-box;
  height: ${FULLSCREEN_STRIP_HEIGHT}px;
  align-items: center;
  scroll-snap-type: none;
  background: ${(p) => p.$isDarkMode ? "rgba(16, 17, 20, 0.94)" : "rgba(246, 247, 249, 0.94)"};

  & > ${MobileSourceSlide} { flex-basis: 176px; }
`;

const KeyboardSettingRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 12px;
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
  border-radius: 10px;
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"};
  gap: 12px;
  box-shadow: 0 1px 0 rgba(255,255,255,0.03) inset;

  svg {
    font-size: 20px;
    flex-shrink: 0;
    color: ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.75)" : "rgba(160,80,0,0.65)"};
  }

  strong {
    font-size: 13px;
    font-weight: 600;
    color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.92)" : "rgba(30,10,0,0.88)"};
    display: block;
  }
  span {
    color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.38)" : "rgba(100,50,0,0.5)"};
    font-size: 10.5px;
    line-height: 1.4;
    display: block;
    margin-top: 1px;
  }
`;

const iconPopIn = keyframes`
  0% { opacity: 0; transform: scale(0.5) rotate(-12deg); }
  70% { opacity: 1; transform: scale(1.12) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
`;
const iconKeyTap = keyframes`
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(4px) scaleY(0.92); }
  60% { transform: translateY(-2px); }
`;
const iconChestShake = keyframes`
  0%, 100% { transform: rotate(0); }
  20% { transform: rotate(-10deg); }
  40% { transform: rotate(8deg); }
  60% { transform: rotate(-5deg); }
  80% { transform: rotate(3deg); }
`;
const iconPinDrop = keyframes`
  0% { transform: translateY(0) rotate(0); }
  35% { transform: translateY(-8px) rotate(-15deg); }
  70% { transform: translateY(2px) rotate(4deg); }
  100% { transform: translateY(0) rotate(0); }
`;
const iconExpand = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.18); }
`;
const iconFloatOut = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(4px, -4px); }
`;

// На ПК 5 блоків налаштувань сіткою 3 + 2, іконка велика над заголовком; на телефоні — звичайний список.
// Порядок дітей: 1 клавіші, 2 підпис «Карта», 3 скриня, 4 шпилька, 5 повний екран, 6 міні-плеєр
const SettingsGrid = styled.div`
  && > * > svg { transform-origin: center; }
  && > :nth-child(1):hover > svg { animation: ${iconKeyTap} 0.5s ease; }
  && > :nth-child(3):hover > svg { animation: ${iconChestShake} 0.6s ease; }
  && > :nth-child(4):hover > svg { animation: ${iconPinDrop} 0.6s ease; transform-origin: bottom left; }
  && > :nth-child(5):hover > svg { animation: ${iconExpand} 0.6s ease; }
  && > :nth-child(6):hover > svg { animation: ${iconFloatOut} 0.6s ease; }

  @media (min-width: 1024px) {
    && > * > svg { animation: ${iconPopIn} 0.5s ease both; }
    && > :nth-child(3) > svg { animation-delay: 0.06s; }
    && > :nth-child(4) > svg { animation-delay: 0.12s; }
    && > :nth-child(5) > svg { animation-delay: 0.18s; }
    && > :nth-child(6) > svg { animation-delay: 0.24s; }
  }

  @media (prefers-reduced-motion: reduce) {
    && > * > svg, && > *:hover > svg { animation: none; }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-top: 12px;

    && > * {
      grid-column: span 2;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      margin-top: 0;
      padding: 22px 16px 16px;
      text-align: center;
    }
    && > :nth-child(n + 5) { grid-column: span 3; }

    && > * > svg { font-size: 46px; }
    && ${Dov} { flex: 1 0 auto; align-items: center; }
    && strong { font-size: 15px; }
    && span { font-size: 11.5px; }
    && ${StatusBadge} { align-self: center; }
    && ${KeyboardShortcut}, && select { margin: auto 0 0; }
  }
`;

const KbdModeSelect = styled.select`
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,179,108,0.25)" : "rgba(200,100,0,0.25)"};
  background: ${(p) => p.$isDarkMode ? "rgba(255,140,0,0.08)" : "rgba(255,200,100,0.12)"};
  color: ${(p) => p.$isDarkMode ? "rgba(255,200,130,0.9)" : "#7a4000"};
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: border-color 0.18s;
  flex-shrink: 0;
  &:hover { border-color: rgba(255, 179, 108, 0.55); }
  option { background: ${(p) => p.$isDarkMode ? "#0d1525" : "#fff8eb"}; color: ${(p) => p.$isDarkMode ? "white" : "#1a0800"}; }
`;



// ── Бічна панель джерел (планшети та комп'ютери) ──
const WIDE_LAYOUT_QUERY = "(min-width: 768px)";
const SIDEBAR_ACCENT = "#ffb36c";
// Два фрейми: комп'ютер від 1200px (миша/тачпад) або планшет в альбомній орієнтації від 1024px
const SPLIT_QUERY =
  "(min-width: 1200px) and (pointer: fine), (min-width: 1024px) and (orientation: landscape) and (pointer: coarse)";

const MapLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(190px, 22%, 260px);
  gap: 5px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  & > ${MapWrapper} {
    margin: 0;
    min-width: 0;
  }

  /* На телефонах бічної панелі немає — порожня колонка стискала карту у вузьку смужку */
  @media (max-width: 767.98px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

// Панель сама прокручується; contain: size не дає списку збільшувати висоту ряду — вона дорівнює висоті карти.
const SourcesSidebar = styled(motion.aside)`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  min-width: 0;
  min-height: 560px;
  contain: size;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${(p) => p.$isDarkMode ? "#1b1c1f" : "#f6f7f9"};
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"};
  box-shadow: ${(p) => p.$isDarkMode ? "0 20px 50px rgba(0,0,0,0.6)" : "0 12px 32px rgba(0,0,0,0.12)"};
  ${PanelScrollbar}
`;

const SourcesScroll = styled.div`
  box-sizing: border-box;
  padding: 7px 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CardDelete = styled.button`
  position: absolute;
  top: 6px;
  right: 44px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-top: 3px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.18s ease, background 0.18s ease;

  &:hover { background: rgba(220, 50, 50, 0.9); }
  &:focus-visible { opacity: 1; }
`;

const DragHandle = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 22px;
  cursor: grab;
  touch-action: none;
  transition: background 0.18s ease;

  &:hover { background: rgba(0, 0, 0, 0.8); }
  &:active { cursor: grabbing; }
`;

// Вгорі між трикутником і ручкою (та кнопкою видалення, якщо вона є), щоб не закривати підпис
const SplitCheck = styled.label`
  position: absolute;
  top: 6px;
  right: ${(p) => (p.$withDelete ? "76px" : "44px")};
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 10px 0 8px;
  box-sizing: border-box;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background 0.18s ease;

  &:hover { background: rgba(0, 0, 0, 0.82); }
  /* Сам input розтягнутий на всю плашку — область дотику ≥ 32px; видимий квадрат малює SplitBox */
  input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }
  input:disabled { cursor: not-allowed; }
  input:disabled ~ * { opacity: 0.55; }
`;

const SplitBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 2px solid #fff;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 12px;
  color: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;

  input:checked + & {
    background: ${SIDEBAR_ACCENT};
    border-color: ${SIDEBAR_ACCENT};
    color: #fff;
  }
  input:focus-visible + & { outline: 2px solid #fff; outline-offset: 2px; }
`;

const SourceCardWrap = styled(Reorder.Item)`
  position: relative;
  flex-shrink: 0;
  list-style: none;

  &:hover ${CardDelete} { opacity: 1; }
`;

const CardCorner = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 54px;
  height: 54px;
  background: ${(p) => p.$active ? "rgba(255,255,255,0.3)" : "#ffffff"};
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transition: background 0.2s ease;

  svg {
    position: absolute;
    top: 9px;
    left: 9px;
    font-size: 17px;
    color: ${(p) => p.$active ? "#ffffff" : "#202124"};
  }
`;

const CardArt = styled.span`
  position: absolute;
  right: -6%;
  bottom: -16%;
  display: flex;
  font-size: 96px;
  color: rgba(255, 255, 255, 0.2);
  transform: rotate(-12deg);
  transition: transform 0.3s ease;
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
  pointer-events: none;
`;

const CardFaviconBackdrop = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%) scale(2.4);
  filter: blur(22px) saturate(1.4);
  opacity: 0.45;
  pointer-events: none;
`;

const CardFavicon = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-62%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: transform 0.3s ease;

  img { width: 36px; height: 36px; object-fit: contain; }
`;

const CardInitial = styled.span`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-62%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
`;

const CardText = styled.span`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);

  strong, small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  strong { font-size: 15px; font-weight: 700; }
  small { font-size: 11px; opacity: 0.85; }
`;

const SourceCard = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  padding: 0;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  background: ${(p) => p.$bg};
  color: #ffffff;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  outline: ${(p) => p.$active ? `2px solid ${SIDEBAR_ACCENT}` : "2px solid transparent"};
  outline-offset: 3px;
  transition: transform 0.2s ease, outline-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.7) 32%, rgba(0, 0, 0, 0.25) 58%, transparent 80%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    ${CardArt} { transform: rotate(-6deg) scale(1.06); }
    ${CardImage} { transform: scale(1.05); }
    ${CardFavicon} { transform: translateY(-62%) scale(1.08); }
  }
  &:focus-visible { outline: 2px solid ${SIDEBAR_ACCENT}; }
`;

const AddSourceTile = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  border: 2px dashed ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.2)"};
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"};
  color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.5)"};
  font-size: 40px;
  cursor: pointer;
  transition: all 0.2s ease;

  span { font-size: 13px; font-weight: 600; letter-spacing: 0.01em; }

  &:hover, &:focus-visible {
    border-color: ${SIDEBAR_ACCENT};
    color: ${SIDEBAR_ACCENT};
    background: rgba(255, 179, 108, 0.08);
    outline: none;
  }
`;

// Висота як у плитки «+» і карток (16:9), щоб панель не стрибала при відкритті форми
const SidebarAddForm = styled(AddFrameForm)`
  flex-shrink: 0;
  margin-top: 0;
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 16 / 9;
  justify-content: center;
  gap: 5px;
  padding: 7px;
  border-width: 2px;

  input {
    padding: 6px 10px;
    font-size: 12px;
    line-height: 1.2;
  }

  button {
    padding: 6px 10px;
    font-size: 12px;
    line-height: 1.2;
  }
`;

const FormCancelButton = styled(FormButton)`
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"};
  color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.8)" : "rgba(30,10,0,0.75)"};
`;

const BUILTIN_SOURCES = [
  { id: "ventusky", title: "Ventusky", subtitleKey: "climateMap.sources.ventuskySubtitle", Icon: FaCloudSun, bg: "linear-gradient(135deg, #1e3c72, #2a8bd8)", cover: coverVentusky },
  { id: "windy", title: "Windy", subtitleKey: "climateMap.sources.windySubtitle", Icon: FaWind, bg: "linear-gradient(135deg, #3b1d8f, #1fa2b8)", cover: coverWindy },
  { id: "alerts-ua", titleKey: "climateMap.sources.alertsTitle", subtitleKey: "climateMap.sources.alertsSubtitle", Icon: FaBell, bg: "linear-gradient(135deg, #5c1010, #d63333)", cover: coverAlerts },
  { id: "ukrainealarm", titleKey: "climateMap.sources.airTargetsTitle", subtitleKey: "climateMap.sources.airTargetsSubtitle", Icon: FaRocket, bg: "linear-gradient(135deg, #3a0d0d, #b8451f)", cover: coverAirTargets },
  { id: "excalidraw", title: "Excalidraw", subtitleKey: "climateMap.sources.excalidrawSubtitle", Icon: FaPencilAlt, bg: "linear-gradient(135deg, #4b3fc4, #9d93f5)", cover: coverExcalidraw },
  { id: "saveecobot", title: "SaveEcoBot", subtitleKey: "climateMap.sources.saveEcoBotSubtitle", Icon: FaLeaf, bg: "linear-gradient(135deg, #0f6b5f, #7cbf1e)", cover: coverSaveEcoBot },
  { id: "airtraffic", titleKey: "climateMap.sources.airTrafficTitle", subtitle: "TheAirTraffic (ADS-B)", Icon: FaPlane, bg: "linear-gradient(135deg, #0b2545, #d98a0b)", cover: coverAirTraffic },
  { id: "deepstate", title: "DeepState", subtitleKey: "climateMap.sources.deepStateSubtitle", Icon: FaMapMarkedAlt, bg: "linear-gradient(135deg, #1b2a3a, #3d6b4f)", cover: coverDeepState },
];

const BUILTIN_PROVIDERS = BUILTIN_SOURCES.map((s) => s.id);

// Джерела лише для України: на інших мовах сайту їх не показуємо
const UKRAINE_ONLY_SOURCES = new Set(["alerts-ua", "ukrainealarm", "saveecobot", "deepstate"]);

// Картка джерела; перетягується лише за ручку, щоб не заважати прокрутці на дотик
const SourceItem = ({ item, isActive, onSelect, onDelete, splitAvailable, isSplitChecked, splitLocked, onToggleSplit, isDarkMode }) => {
  const { t } = useTranslation();
  const controls = useDragControls();
  const { id, title, subtitle, Icon, bg, frame, cover, favicon } = item;
  const [faviconFailed, setFaviconFailed] = useState(false);
  return (
    <SourceCardWrap
      value={id}
      forwardedAs="div"
      dragListener={false}
      dragControls={controls}
    >
      <SourceCard
        type="button"
        $bg={bg}
        $active={isActive}
        aria-pressed={isActive}
        title={title}
        onClick={(e) => onSelect(id, e)}
      >
        <CardCorner $active={isActive}><FiPlay /></CardCorner>
        {cover ? (
          <CardImage src={cover} alt="" loading="lazy" draggable={false} />
        ) : favicon && !faviconFailed ? (
          <>
            <CardFaviconBackdrop src={favicon} alt="" draggable={false} />
            <CardFavicon>
              <img
                src={favicon}
                alt=""
                draggable={false}
                referrerPolicy="no-referrer"
                onError={() => setFaviconFailed(true)}
              />
            </CardFavicon>
          </>
        ) : frame ? (
          <CardInitial>{(title || "?").trim().charAt(0)}</CardInitial>
        ) : (
          <CardArt><Icon /></CardArt>
        )}
        <CardText>
          <strong>{title}</strong>
          <small>{subtitle}</small>
        </CardText>
      </SourceCard>
      <DragHandle
        type="button"
        aria-label={t("climateMap.dragItem", { title })}
        title={t("climateMap.dragHint")}
        onPointerDown={(e) => controls.start(e)}
      >
        <MdDragIndicator />
      </DragHandle>
      {splitAvailable && (
        <SplitCheck $withDelete={!!frame}>
          {/* Tooltip обгортає вміст, а не плашку: input лишається absolute відносно SplitCheck, підказка кріпиться до квадрата */}
          <Tooltip content={t("climateMap.splitTooltip")} isDarkMode={isDarkMode}>
            <input
              type="checkbox"
              aria-label={t("climateMap.splitTooltip")}
              checked={isSplitChecked}
              disabled={splitLocked}
              onChange={() => onToggleSplit(id)}
            />
            <SplitBox aria-hidden="true"><FiCheck /></SplitBox>
            <span style={{ marginLeft: 6 }}>{t("climateMap.splitLabel")}</span>
          </Tooltip>
        </SplitCheck>
      )}
      {frame && (
        <CardDelete
          type="button"
          aria-label={t("climateMap.deleteItem", { title })}
          title={t("climateMap.delete")}
          onClick={() => onDelete(frame)}
        >
          <FiX />
        </CardDelete>
      )}
    </SourceCardWrap>
  );
};

// Картка джерела у мобільному слайдері налаштувань (без перетягування, поділу та видалення)
const MobileSourceCard = ({ item, isActive, onSelect }) => {
  const { id, title, subtitle, Icon, bg, frame, cover, favicon } = item;
  const [faviconFailed, setFaviconFailed] = useState(false);
  const cardRef = useRef(null);

  // Активну картку одразу показуємо у слайдері; гортаємо лише сам слайдер, щоб панель не стрибала вертикально
  useEffect(() => {
    const card = cardRef.current;
    const slider = card?.parentElement;
    if (isActive && slider) slider.scrollLeft = card.offsetLeft - 12;
  }, [isActive]);

  return (
    <MobileSourceSlide ref={cardRef}>
      <SourceCard
        type="button"
        $bg={bg}
        $active={isActive}
        aria-pressed={isActive}
        title={title}
        onClick={() => onSelect(id)}
      >
        <CardCorner $active={isActive}><FiPlay /></CardCorner>
        {cover ? (
          <CardImage src={cover} alt="" loading="lazy" draggable={false} />
        ) : favicon && !faviconFailed ? (
          <>
            <CardFaviconBackdrop src={favicon} alt="" draggable={false} />
            <CardFavicon>
              <img
                src={favicon}
                alt=""
                draggable={false}
                referrerPolicy="no-referrer"
                onError={() => setFaviconFailed(true)}
              />
            </CardFavicon>
          </>
        ) : frame ? (
          <CardInitial>{(title || "?").trim().charAt(0)}</CardInitial>
        ) : (
          <CardArt><Icon /></CardArt>
        )}
        <CardText>
          <strong>{title}</strong>
          <small>{subtitle}</small>
        </CardText>
      </SourceCard>
    </MobileSourceSlide>
  );
};

// Перемикач «1 / 2» у міні-плеєрі; інлайн-стилі, бо стилі styled-components не потрапляють у вікно PiP
const MiniFrameSwitch = ({ value, onChange, titles }) => (
  <div
    role="group"
    onDoubleClick={(e) => e.stopPropagation()}
    style={{ display: "flex", gap: 2, padding: 2, borderRadius: 8, background: "rgba(255,255,255,0.08)" }}
  >
    {[0, 1].map((index) => (
      <button
        key={index}
        type="button"
        aria-pressed={value === index}
        title={titles[index]}
        onClick={(e) => {
          e.stopPropagation();
          onChange(index);
        }}
        style={{
          minWidth: 28,
          padding: "4px 8px",
          border: "none",
          borderRadius: 6,
          background: value === index ? SIDEBAR_ACCENT : "transparent",
          color: value === index ? "#1a0800" : "rgba(255,255,255,0.75)",
          font: "600 12px system-ui, sans-serif",
          cursor: "pointer",
        }}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

const customFrameBg = (id) => {
  let hash = 0;
  for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) % 360;
  return `linear-gradient(135deg, hsl(${hash}, 50%, 26%), hsl(${(hash + 40) % 360}, 60%, 46%))`;
};

// Іконка сайту для власних фреймів (на випадок помилки показуємо першу літеру назви)
const getFrameFavicon = (url) => {
  try {
    return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=128`;
  } catch {
    return null;
  }
};

const getFrameHost = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

// Чи дозволяє сайт вбудовування у фрейм: true / false, або null, якщо перевірити не вдалося.
// Заголовки чужого сайту видно лише з сервера — питаємо функцію Cloudflare /api/frame-check
const checkFrameEmbeddable = async (url) => {
  const path = `/api/frame-check?url=${encodeURIComponent(url)}`;
  // Під час локальної розробки функцій Cloudflare немає — беремо робочий сайт
  const endpoint = import.meta.env.DEV ? `https://stuxia.com${path}` : path;
  try {
    const res = await fetch(endpoint, { signal: AbortSignal.timeout(10000) });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return null;
    const data = await res.json();
    return typeof data.embeddable === "boolean" ? data.embeddable : null;
  } catch {
    return null;
  }
};

const ClimateMap = ({ isDarkMode, isStickyBgMode }) => {
  const { t, i18n } = useTranslation();
  const isUkrainian = (i18n.resolvedLanguage || i18n.language) === "uk";
  const [lat, setLat] = useState(48.379);
  const [lon, setLon] = useState(31.165);
  const [zoom, setZoom] = useState(5);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState("wind");
  const [isMapActive, setIsMapActive] = useState(false);
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator === "undefined" ? true : navigator.onLine,
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  // На весь екран саме карта (а не міні-плеєр) — тоді показуємо ряд джерел унизу
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false);
  const [pipWindow, setPipWindow] = useState(null);
  const [miniFrame, setMiniFrame] = useState(0);
  const [isMiniLoading, setIsMiniLoading] = useState(true);
  const [provider, setProvider] = useState("ventusky");
  const [isPinned, setIsPinned] = useState(false);

  const [keyboardShortcutMode, setKeyboardShortcutMode] = useState("auto");
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const showKeyboardShortcuts =
    keyboardShortcutMode === "always" ||
    (keyboardShortcutMode === "auto" && !isCoarsePointer);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: coarse)");
    const updatePointerType = () => setIsCoarsePointer(pointerQuery.matches);

    updatePointerType();
    pointerQuery.addEventListener("change", updatePointerType);

    return () =>
      pointerQuery.removeEventListener("change", updatePointerType);
  }, []);

  const [isWideLayout, setIsWideLayout] = useState(() =>
    typeof window !== "undefined" && window.matchMedia(WIDE_LAYOUT_QUERY).matches,
  );
  const [isSplitEnabled, setIsSplitEnabled] = useState(false);
  const [secondProvider, setSecondProvider] = useState("windy");
  const [isLoadingSecond, setIsLoadingSecond] = useState(true);
  // Портретний планшет і телефон — один фрейм (половина була б ~280px)
  const [canSplit, setCanSplit] = useState(() =>
    typeof window !== "undefined" && window.matchMedia(SPLIT_QUERY).matches,
  );
  useEffect(() => {
    const query = window.matchMedia(SPLIT_QUERY);
    const update = () => setCanSplit(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const isSplitActive = canSplit && isSplitEnabled;
  const [isAddingFrame, setIsAddingFrame] = useState(false);
  const [sourceOrder, setSourceOrder] = useState([]);
  const [sourceQuery, setSourceQuery] = useState("");

  useEffect(() => {
    const wideQuery = window.matchMedia(WIDE_LAYOUT_QUERY);
    const updateLayout = () => setIsWideLayout(wideQuery.matches);

    updateLayout();
    wideQuery.addEventListener("change", updateLayout);

    return () => wideQuery.removeEventListener("change", updateLayout);
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

  const [customFrames, setCustomFrames] = useState([]);
  const [newFrameTitle, setNewFrameTitle] = useState("");
  const [newFrameUrl, setNewFrameUrl] = useState("");
  const [isCheckingFrame, setIsCheckingFrame] = useState(false);

  const orderedSources = useMemo(() => {
    const all = [
      ...BUILTIN_SOURCES.filter((s) => isUkrainian || !UKRAINE_ONLY_SOURCES.has(s.id)).map((s) => ({
        ...s,
        title: s.titleKey ? t(s.titleKey) : s.title,
        subtitle: s.subtitleKey ? t(s.subtitleKey) : s.subtitle,
      })),
      ...customFrames.map((frame) => ({
        id: frame.id,
        title: frame.title,
        subtitle: getFrameHost(frame.url) || t("climateMap.customWidget"),
        Icon: FaGlobe,
        bg: customFrameBg(frame.id),
        favicon: getFrameFavicon(frame.url),
        frame,
      })),
    ];
    const byId = new Map(all.map((item) => [item.id, item]));
    const ordered = sourceOrder.filter((id) => byId.has(id)).map((id) => byId.get(id));
    const placed = new Set(ordered.map((item) => item.id));
    return [...ordered, ...all.filter((item) => !placed.has(item.id))];
  }, [customFrames, sourceOrder, t, isUkrainian]);

  // Шукаємо за назвою, підписом і адресою власного фрейму
  const filteredSources = useMemo(() => {
    const query = sourceQuery.trim().toLowerCase();
    if (!query) return orderedSources;
    return orderedSources.filter((item) =>
      [item.title, item.subtitle, item.frame?.url]
        .some((text) => text && text.toLowerCase().includes(query)),
    );
  }, [orderedSources, sourceQuery]);

  const [videoError, setVideoError] = useState(false);
  const turkeyVideoRef = useRef(null);
  const shouldShowLoader = !isMapActive || isLoading || !isOnline;

  useEffect(() => {
    const video = turkeyVideoRef.current;
    if (!video) return;

    if (shouldShowLoader) {
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldShowLoader, videoError, isMiniPlayerOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      setIsMapFullscreen(
        !!document.fullscreenElement && document.fullscreenElement === mapWrapperRef.current,
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const updateConnection = () => {
      setIsOnline(typeof navigator !== "undefined" ? navigator.onLine : true);
    };

    updateConnection();
    window.addEventListener("online", updateConnection);
    window.addEventListener("offline", updateConnection);

    return () => {
      window.removeEventListener("online", updateConnection);
      window.removeEventListener("offline", updateConnection);
    };
  }, []);

  useEffect(() => () => pipWindow?.close(), [pipWindow]);

  const handleSetProvider = async (newProvider) => {
    setProvider(newProvider);
    try {
      await localforage.setItem("selected_climate_provider", newProvider);
    } catch (e) {
      console.error("Error saving climate provider:", e);
    }
  };

  // Не українською — українські джерела підміняємо Ventusky/Windy лише на екрані;
  // збережений вибір не чіпаємо, тож після повернення на українську він відновиться
  useEffect(() => {
    if (isUkrainian) return;
    if (UKRAINE_ONLY_SOURCES.has(provider)) setProvider("ventusky");
    if (UKRAINE_ONLY_SOURCES.has(secondProvider)) {
      setSecondProvider(provider === "windy" ? "ventusky" : "windy");
    }
  }, [isUkrainian, provider, secondProvider]);

  const handleSetSecondProvider = async (id) => {
    setSecondProvider(id);
    try {
      await localforage.setItem("climate_second_provider", id);
    } catch (e) {
      console.error("Error saving second provider:", e);
    }
  };

  const handleToggleSplit = async (enabled) => {
    setIsSplitEnabled(enabled);
    try {
      await localforage.setItem("climate_split_enabled", enabled);
    } catch (e) {
      console.error("Error saving split mode:", e);
    }
  };

  const handleActivateMap = async () => {
    setIsMapActive(true);
    toast.success(t("climateMap.mapEnabled"), { icon: "🗺️", duration: 1800 });
    try {
      await localforage.setItem("map_last_unlocked_time", Date.now());
    } catch (e) {
      console.error("Error saving map unlock time:", e);
    }
  };

  const handleDeactivateMap = async () => {
    setIsMapActive(false);
    toast(t("climateMap.mapDisabled"), { icon: "🔒", duration: 1800 });
    try {
      await localforage.removeItem("map_last_unlocked_time");
    } catch (e) {
      console.error("Error removing map unlock time:", e);
    }
  };

  const settingButtonTexts = useMemo(() => {
    const settingsTitle = t("climateMap.settingsTitle");
    return [
      settingsTitle,
      t(isWideLayout ? "climateMap.rotating.shortcuts" : "climateMap.rotating.addFrames"),
      settingsTitle,
      t("climateMap.rotating.pinLocation"),
      settingsTitle,
      t("climateMap.rotating.mapsAndFeatures"),
      settingsTitle,
      t("climateMap.rotating.miniPlayer"),
      settingsTitle,
      t("climateMap.rotating.fullscreen"),
    ];
  }, [isWideLayout, t]);

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % settingButtonTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [settingButtonTexts]);

  useEffect(() => {
    const loadData = async () => {
      try {

        const savedUserFrames = await localforage.getItem("climate_custom_user_frames");
        const frames = Array.isArray(savedUserFrames) ? savedUserFrames : [];
        setCustomFrames(frames);
        const savedOrder = await localforage.getItem("climate_source_order");
        if (Array.isArray(savedOrder)) setSourceOrder(savedOrder);
        const knownProviders = [...BUILTIN_PROVIDERS, ...frames.map((f) => f.id)];
        const applyProvider = (id) => {
          if (id && knownProviders.includes(id)) setProvider(id);
        };

        const savedProvider = await localforage.getItem("selected_climate_provider");
        applyProvider(savedProvider);

        const savedSecond = await localforage.getItem("climate_second_provider");
        if (savedSecond && knownProviders.includes(savedSecond)) setSecondProvider(savedSecond);
        const savedSplit = await localforage.getItem("climate_split_enabled");
        if (typeof savedSplit === "boolean") setIsSplitEnabled(savedSplit);

        const savedKeyboardShortcutMode = await localforage.getItem(
          "climate_keyboard_shortcut_mode",
        );
        if (["none", "auto", "always"].includes(savedKeyboardShortcutMode)) {
          setKeyboardShortcutMode(savedKeyboardShortcutMode);
        }

        const pinnedLoc = await localforage.getItem("pinned_map_location");
        if (pinnedLoc) {
          setLat(pinnedLoc.lat);
          setLon(pinnedLoc.lon);
          setZoom(pinnedLoc.zoom);
          if (pinnedLoc.overlay) setOverlay(pinnedLoc.overlay);
          applyProvider(pinnedLoc.provider);
          setIsPinned(true);
        }

        const lastUnlocked = await localforage.getItem("map_last_unlocked_time");
        const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
        if (lastUnlocked && Date.now() - lastUnlocked < SEVEN_DAYS_MS) {
          setIsMapActive(true);
        }
      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };
    loadData();
  }, []);

  const saveCustomFrames = async (newFrames) => {
    setCustomFrames(newFrames);
    try {
      await localforage.setItem("climate_custom_user_frames", newFrames);
    } catch (err) {
      console.error("Error saving custom frames:", err);
    }
  };

  const handleKeyboardShortcutModeChange = async (event) => {
    const mode = event.target.value;
    setKeyboardShortcutMode(mode);
    try {
      await localforage.setItem("climate_keyboard_shortcut_mode", mode);
    } catch (error) {
      console.error("Error saving keyboard shortcut mode:", error);
    }
  };

  const handleDeleteFrame = (id) => {
    const next = customFrames.filter((f) => f.id !== id);
    saveCustomFrames(next);
    if (provider === id) {
      handleSetProvider("ventusky");
    }
    if (secondProvider === id) {
      handleSetSecondProvider("windy");
    }
  };

  const handleAddFrame = async (e) => {
    e.preventDefault();
    if (!newFrameUrl.trim() || isCheckingFrame) return;

    let targetUrl = newFrameUrl.trim();
    const matchSrc = targetUrl.match(/src=["']([^"']+)["']/i);
    if (matchSrc) {
      targetUrl = matchSrc[1];
    }

    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      toast.error(t("climateMap.invalidUrl"));
      return;
    }

    // Сайти з X-Frame-Options / CSP frame-ancestors у фреймі показують лише порожнє вікно
    setIsCheckingFrame(true);
    const embeddable = await checkFrameEmbeddable(targetUrl);
    setIsCheckingFrame(false);
    if (embeddable === false) {
      toast.error(t("climateMap.frameBlocked", { host: getFrameHost(targetUrl) || targetUrl }), { duration: 6000 });
      return;
    }

    const title = newFrameTitle.trim() || t("climateMap.customWidget");

    const newFrame = {
      id: "custom-" + Date.now(),
      title,
      url: targetUrl,
    };

    const updated = [...customFrames, newFrame];
    saveCustomFrames(updated);
    setProvider(newFrame.id);
    setNewFrameTitle("");
    setNewFrameUrl("");
    setIsAddingFrame(false);
  };

  const handleCancelAddFrame = () => {
    setIsAddingFrame(false);
    setNewFrameTitle("");
    setNewFrameUrl("");
  };

  const handleReorderSources = async (ids) => {
    setSourceOrder(ids);
    try {
      await localforage.setItem("climate_source_order", ids);
    } catch (err) {
      console.error("Error saving source order:", err);
    }
  };

  // Під час пошуку перетягуються лише знайдені картки: ставимо їх на ті самі місця в повному порядку
  const handleReorderVisibleSources = (ids) => {
    if (filteredSources.length === orderedSources.length) return handleReorderSources(ids);
    const visible = new Set(ids);
    const queue = [...ids];
    handleReorderSources(orderedSources.map((item) => (visible.has(item.id) ? queue.shift() : item.id)));
  };

  const sourceSearchField = (
    <SourceSearch $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
      <FiSearch />
      <input
        type="search"
        value={sourceQuery}
        onChange={(e) => setSourceQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Escape" && setSourceQuery("")}
        placeholder={t("climateMap.searchSources")}
        aria-label={t("climateMap.searchSources")}
      />
      {sourceQuery && (
        <button type="button" aria-label={t("climateMap.clearSearch")} onClick={() => setSourceQuery("")}>
          <FiX />
        </button>
      )}
    </SourceSearch>
  );

  // Галочка на картці: додає джерело праворуч (максимум 2); повторна — повертає один фрейм
  const handleToggleSplitSource = (id) => {
    if (!isSplitActive) {
      if (id === provider) return;
      handleSetSecondProvider(id);
      handleToggleSplit(true);
    } else if (id === secondProvider) {
      handleToggleSplit(false);
    } else if (id === provider) {
      handleSetProvider(secondProvider);
      handleToggleSplit(false);
    } else {
      handleSetSecondProvider(id);
    }
    if (!isMapActive) handleActivateMap();
  };

  const handleSelectSource = (id) => {
    // Клік по картці правого фрейму міняє фрейми місцями
    if (isSplitActive && id === secondProvider) {
      handleSetSecondProvider(provider);
    }
    handleSetProvider(id);
    if (!isMapActive) handleActivateMap();
  };

  const handleConfirmDeleteFrame = (frame) => {
    if (window.confirm(t("climateMap.confirmDeleteFrame", { title: frame.title }))) {
      handleDeleteFrame(frame.id);
    }
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
      setIsPinned(true);
      toast.success(t("climateMap.locationPinned"), { duration: 3000, icon: "📍" });
    } catch (error) {
      console.error("Error pinning location:", error);
      toast.error(t("climateMap.pinError"));
    }
  };

  const handleUnpin = async (e) => {
    if (e) e.stopPropagation();
    try {
      await localforage.removeItem("pinned_map_location");
      setIsPinned(false);
      toast(t("climateMap.locationUnpinned"), { icon: "📌", duration: 2000 });
    } catch (error) {
      console.error("Error unpinning location:", error);
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

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("pointerup", handleMouseUp);
    window.addEventListener("pointercancel", handleMouseUp);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("pointerup", handleMouseUp);
      window.removeEventListener("pointercancel", handleMouseUp);
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
      if (e.key === "Escape" && isControlsOpen && e.target.tagName !== "INPUT") {
        setIsControlsOpen(false);
        return;
      }
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      if (e.ctrlKey && e.altKey && !e.shiftKey && !e.metaKey) {
        switch (e.code) {
          case 'KeyM':
            e.preventDefault();
            if (isMapActive) handleDeactivateMap();
            else handleActivateMap();
            break;
          case 'KeyF':
            e.preventDefault();
            toggleFullscreen();
            break;
          case 'KeyP':
            e.preventDefault();
            if (isMiniPlayerOpen) {
              if (pipWindow) pipWindow.close();
              else setIsMiniPlayerOpen(false);
            } else {
              handleOpenMiniPlayer();
            }
            break;
          case 'KeyS': {
            e.preventDefault();
            const allSources = orderedSources.map((item) => item.id);
            setProvider((current) => {
              const idx = allSources.indexOf(current);
              const nextIdx = (idx + 1) % allSources.length;
              return allSources[nextIdx];
            });
            break;
          }
          case 'KeyO':
            e.preventDefault();
            if (isPinned) handleUnpin();
            else handlePinLocation();
            break;
          case 'KeyD':
            if (!canSplit) break;
            e.preventDefault();
            handleToggleSplit(!isSplitEnabled);
            break;
          case 'KeyK':
            e.preventDefault();
            setIsControlsOpen((prev) => !prev);
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMiniPlayerOpen, pipWindow, customFrames, orderedSources, isMapActive, isPinned, lat, lon, zoom, overlay, provider, isControlsOpen, canSplit, isSplitEnabled]);

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

  const buildEmbedUrl = (provider) => {
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

    if (provider === "alerts-ua") {
      return "https://alerts.in.ua/";
    }

    if (provider === "ukrainealarm") {
      return "https://map.ukrainealarm.com/";
    }

    if (provider === "excalidraw") {
      return "https://excalidraw.com/";
    }

    if (provider === "saveecobot") {
      return "https://www.saveecobot.com/maps";
    }

    if (provider === "airtraffic") {
      return `https://globe.theairtraffic.com/?lat=${lat}&lon=${lon}&zoom=${zoom}`;
    }

    if (provider === "deepstate") {
      return "https://deepstatemap.live/";
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
  };

  const embedUrl = useMemo(
    () => buildEmbedUrl(provider),
    [provider, lat, lon, zoom, overlay, customFrames],
  );
  const secondEmbedUrl = useMemo(
    () => buildEmbedUrl(secondProvider),
    [secondProvider, lat, lon, zoom, overlay, customFrames],
  );

  // Після закриття міні-плеєра фрейми монтуються наново — знову показуємо завантаження
  useEffect(() => {
    setIsLoading(isOnline);
  }, [provider, lat, lon, zoom, overlay, isOnline, isMiniPlayerOpen]);

  useEffect(() => {
    setIsLoadingSecond(isOnline);
  }, [secondProvider, lat, lon, zoom, overlay, isOnline, isSplitActive, isMiniPlayerOpen]);

  // Міні-плеєр показує один фрейм: перший або (коли їх два) обраний перемикачем «1 / 2»
  const miniShowsSecond = isSplitActive && miniFrame === 1;
  const miniEmbedUrl = miniShowsSecond ? secondEmbedUrl : embedUrl;
  const miniFrameTitles = [provider, secondProvider].map(
    (id) => orderedSources.find((item) => item.id === id)?.title,
  );
  const miniFrameSwitch = isSplitActive && (
    <MiniFrameSwitch value={miniFrame} onChange={setMiniFrame} titles={miniFrameTitles} />
  );

  useEffect(() => {
    setIsMiniLoading(isOnline);
  }, [miniEmbedUrl, isOnline, isMiniPlayerOpen]);

  const showFullscreenStrip = isMapFullscreen && !isMiniPlayerOpen;

  return (
    <OuterContainer>
      <AihelpTitle $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        {t("climateMap.title")}
      </AihelpTitle>

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: isDarkMode ? "rgba(20,24,36,0.97)" : "rgba(255,252,245,0.98)",
            color: isDarkMode ? "#f0e8d8" : "#2a1000",
            border: isDarkMode ? "1px solid rgba(255,179,108,0.25)" : "1px solid rgba(200,100,0,0.2)",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 500,
            boxShadow: isDarkMode
              ? "0 8px 32px rgba(0,0,0,0.5)"
              : "0 8px 32px rgba(0,0,0,0.12)",
            padding: "10px 14px",
          },
          success: {
            iconTheme: { primary: "#5dca70", secondary: isDarkMode ? "#111" : "#fff" },
          },
          error: {
            iconTheme: { primary: "#e07070", secondary: isDarkMode ? "#111" : "#fff" },
          },
        }}
      />

      <MobileSettingsButton
        $isDarkMode={isDarkMode}
        type="button"
        onClick={() => setIsControlsOpen(true)}
        aria-label={settingButtonTexts[textIndex]}
      >
        <AnimatedButtonText key={textIndex}>
          {settingButtonTexts[textIndex]}
        </AnimatedButtonText>
      </MobileSettingsButton>

      <MapLayout>
      <MapWrapper
        ref={mapWrapperRef}
        $isFullscreen={isFullscreen}
        onClick={() => !isMapActive && handleActivateMap()}
      >
        {isControlsOpen && (
          <MobileSettingsOverlay $isDarkMode={isDarkMode} onClick={() => setIsControlsOpen(false)}>
            <MobileSettingsPanel $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
              <MobileSettingsHeading $isDarkMode={isDarkMode}>
                <div>
                  <h2>
                    <AnimatedButtonText key={textIndex}>
                      {settingButtonTexts[textIndex]}
                    </AnimatedButtonText>
                  </h2>
                </div>
                <MobileSettingsClose $isDarkMode={isDarkMode} type="button" onClick={() => setIsControlsOpen(false)}>
                  ×
                </MobileSettingsClose>
              </MobileSettingsHeading>
              <SettingsGrid>
              <KeyboardSettingRow $isDarkMode={isDarkMode}>
                <FaKeyboard />
                <Dov>
                  <strong>{t("climateMap.shortcuts")}</strong>
                  <span>{t("climateMap.shortcutsDesc")}</span>
                </Dov>
                <KbdModeSelect
                  $isDarkMode={isDarkMode}
                  value={keyboardShortcutMode}
                  onChange={handleKeyboardShortcutModeChange}
                >
                  <option value="none">{t("climateMap.shortcutsNone")}</option>
                  <option value="auto">{t("climateMap.shortcutsAuto")}</option>
                  <option value="always">{t("climateMap.shortcutsAlways")}</option>
                </KbdModeSelect>
              </KeyboardSettingRow>

              {/* ── Карта ── */}
              {/* На ПК підпис ховається, щоб блоки йшли однією сіткою 3 + 2 */}
              <SettingLabel $isDarkMode={isDarkMode} $hideOnDesktop>{t("climateMap.mapLabel")}</SettingLabel>

              <MobileSetting
                $isDarkMode={isDarkMode}
                $active={isMapActive}
                $danger={isMapActive}
                type="button"
                onClick={() => isMapActive ? handleDeactivateMap() : handleActivateMap()}
              >
                <GiLockedChest />
                <Dov>
                  <strong>{t(isMapActive ? "climateMap.deactivateMap" : "climateMap.activateMap")}</strong>
                  <span>
                    {t(isMapActive ? "climateMap.deactivateMapDesc" : "climateMap.activateMapDesc")}
                  </span>
                  <StatusBadge $on={isMapActive}>
                    {isMapActive ? `● ${t("climateMap.statusOn")}` : `○ ${t("climateMap.statusOff")}`}
                  </StatusBadge>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Alt + M</KeyboardShortcut>
              </MobileSetting>

              <MobileSetting
                $isDarkMode={isDarkMode}
                $active={isPinned}
                type="button"
                onClick={isPinned ? handleUnpin : handlePinLocation}
              >
                <BsFillPinAngleFill />
                <Dov>
                  <strong>{t(isPinned ? "climateMap.unpinLocation" : "climateMap.pinLocation")}</strong>
                  <span>
                    {t(isPinned ? "climateMap.unpinLocationDesc" : "climateMap.pinLocationDesc")}
                  </span>
                  <StatusBadge $on={isPinned}>
                    {isPinned ? `● ${t("climateMap.statusPinned")}` : `○ ${t("climateMap.statusUnpinned")}`}
                  </StatusBadge>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Alt + O</KeyboardShortcut>
              </MobileSetting>

              <MobileSetting $isDarkMode={isDarkMode} type="button" onClick={() => toggleFullscreen()}>
                <LuFullscreen />
                <Dov>
                  <strong>{t(isFullscreen ? "climateMap.collapseMap" : "climateMap.openFullscreen")}</strong>
                  <span>{t("climateMap.fullscreenDesc")}</span>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Alt + F</KeyboardShortcut>
              </MobileSetting>

              <MobileSetting $isDarkMode={isDarkMode} type="button" onClick={handleOpenMiniPlayer}>
                <CgMiniPlayer />
                <Dov>
                  <strong>{t("climateMap.miniPlayer")}</strong>
                  <span>{t("climateMap.miniPlayerDesc")}</span>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Alt + P</KeyboardShortcut>
              </MobileSetting>
              </SettingsGrid>

              {/* ── Джерело (на планшетах і ПК — у бічній панелі) ── */}
              {!isWideLayout && (<>
              <SettingLabel $isDarkMode={isDarkMode}>{t("climateMap.mapSource")}</SettingLabel>

              <MobileSettingSelectGroup $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
                <MobileSetting
                  $isDarkMode={isDarkMode}
                  style={{ background: "none", border: "none", borderRadius: 0, margin: 0, padding: "10px 12px", pointerEvents: "none" }}
                  type="button"
                >
                  <FaMapLocationDot />
                  <Dov>
                    <strong>{t("climateMap.mapSource")}</strong>
                    <span>{t("climateMap.mapSourceDesc")}</span>
                  </Dov>
                  <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Alt + S</KeyboardShortcut>
                </MobileSetting>
                <div style={{ padding: "0 12px 2px" }}>{sourceSearchField}</div>
                <MobileSourceSlider $isDarkMode={isDarkMode} aria-label={t("climateMap.sourcesAria")}>
                  {filteredSources.length === 0 && (
                    <SourcesEmpty $isDarkMode={isDarkMode}>{t("climateMap.noSourcesFound")}</SourcesEmpty>
                  )}
                  {filteredSources.map((item) => (
                    <MobileSourceCard
                      key={item.id}
                      item={item}
                      isActive={provider === item.id}
                      onSelect={handleSetProvider}
                    />
                  ))}
                </MobileSourceSlider>
              </MobileSettingSelectGroup>

              {/* ── Власні фрейми ── */}
              <SettingLabel $isDarkMode={isDarkMode}>{t("climateMap.customFrame")}</SettingLabel>

              <AddFrameForm $isDarkMode={isDarkMode} onSubmit={handleAddFrame} onClick={(e) => e.stopPropagation()}>
                <FormInput
                  $isDarkMode={isDarkMode}
                  type="text"
                  placeholder={t("climateMap.titlePlaceholder")}
                  value={newFrameTitle}
                  onChange={(e) => setNewFrameTitle(e.target.value)}
                />
                <InputContainer>
                  <FormInput
                    $isDarkMode={isDarkMode}
                    type="text"
                    placeholder={t("climateMap.urlPlaceholder")}
                    value={newFrameUrl}
                    onChange={(e) => setNewFrameUrl(e.target.value)}
                    style={{ width: "100%", paddingRight: "88px" }}
                    required
                  />
                  <FormButton
                    type="submit"
                    disabled={isCheckingFrame}
                    style={{
                      position: "absolute",
                      right: "4px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: "6px 14px",
                    }}
                  >
                    {isCheckingFrame ? t("climateMap.frameChecking") : t("climateMap.add")}
                  </FormButton>
                </InputContainer>

                {customFrames.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "10px", color: isDarkMode ? "rgba(255,255,255,0.35)" : "rgba(100,50,0,0.45)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{t("climateMap.saved")}</span>
                    {customFrames.map((frame) => (
                      <div key={frame.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", padding: "6px 10px", borderRadius: "7px", border: isDarkMode ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.08)" }}>
                        <span style={{ fontSize: "12px", color: isDarkMode ? "rgba(255,255,255,0.8)" : "rgba(30,10,0,0.8)" }}>{frame.title}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteFrame(frame.id)}
                          style={{ background: "transparent", border: "none", color: "rgba(255,80,80,0.7)", cursor: "pointer", fontSize: "13px", padding: "2px 4px", borderRadius: "4px" }}
                          title={t("climateMap.delete")}
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </AddFrameForm>
              </>)}

            </MobileSettingsPanel>
          </MobileSettingsOverlay>
        )}

        {isMiniPlayerOpen ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: 'rgba(255,255,255,0.6)', zIndex: 5, padding: '20px', textAlign: 'center' }}>
            {t("climateMap.closeMiniPlayerHint")}
          </div>
        ) : (
          <>
            <Loader
              aria-hidden={!shouldShowLoader}
              style={{ visibility: shouldShowLoader ? "visible" : "hidden" }}
            >
                {!videoError && (
                  <TurkeyVideoFrame>
                    <TurkeyVideo
                      ref={turkeyVideoRef}
                      src={turkey}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      onCanPlay={(e) => {
                        if (shouldShowLoader) {
                          const p = e.target.play();
                          if (p !== undefined) p.catch(() => {});
                        }
                      }}
                      onError={() => setVideoError(true)}
                    />
                  </TurkeyVideoFrame>
                )}
                <p style={{ fontSize: "16px" }}>
                  {!isOnline
                    ? t("climateMap.checkInternet")
                    : !isMapActive
                      ? t("climateMap.clickToActivate")
                      : t("climateMap.loading")}
                </p>
                <p>{t("climateMap.credits")}</p>
                <p>{t("climateMap.settingsHint")}</p>
            </Loader>
            <FramesGrid
              $split={isSplitActive}
              $bottomInset={showFullscreenStrip ? FULLSCREEN_STRIP_HEIGHT : 0}
            >
              <FramePane>
                <StyledIframe
                  aria-label="Weather Map"
                  src={isMapActive && isOnline ? embedUrl : undefined}
                  $isLoading={isLoading}
                  $isReady={isMapActive}
                  onLoad={() => setIsLoading(false)}
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                />
              </FramePane>
              {isSplitActive && (
                <FramePane>
                  <StyledIframe
                    aria-label={`Weather Map (${t("climateMap.secondFrame")})`}
                    src={isMapActive && isOnline ? secondEmbedUrl : undefined}
                    $isLoading={isLoadingSecond}
                    $isReady={isMapActive}
                    onLoad={() => setIsLoadingSecond(false)}
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                </FramePane>
              )}
            </FramesGrid>
          </>
        )}

        {showFullscreenStrip && (
          <FullscreenSourcesStrip
            $isDarkMode={isDarkMode}
            aria-label={t("climateMap.sourcesAria")}
            onWheel={(e) => {
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) e.currentTarget.scrollLeft += e.deltaY;
            }}
          >
            {orderedSources.map((item) => (
              <MobileSourceCard
                key={item.id}
                item={item}
                isActive={provider === item.id || (isSplitActive && secondProvider === item.id)}
                onSelect={handleSelectSource}
              />
            ))}
          </FullscreenSourcesStrip>
        )}
      </MapWrapper>

      {isWideLayout && (
        <SourcesSidebar $isDarkMode={isDarkMode} aria-label={t("climateMap.sourcesAria")} layoutScroll>
          <SourcesScroll>
            {sourceSearchField}
            {filteredSources.length === 0 && (
              <SourcesEmpty $isDarkMode={isDarkMode}>{t("climateMap.noSourcesFound")}</SourcesEmpty>
            )}
            <Reorder.Group
              axis="y"
              as="div"
              values={filteredSources.map((item) => item.id)}
              onReorder={handleReorderVisibleSources}
              style={{ display: "flex", flexDirection: "column", gap: "16px", margin: 0, padding: 0 }}
            >
              {filteredSources.map((item) => (
                <SourceItem
                  key={item.id}
                  item={item}
                  isActive={provider === item.id || (isSplitActive && secondProvider === item.id)}
                  onSelect={handleSelectSource}
                  onDelete={handleConfirmDeleteFrame}
                  splitAvailable={canSplit}
                  isSplitChecked={isSplitActive && (item.id === provider || item.id === secondProvider)}
                  splitLocked={!isSplitActive && item.id === provider}
                  onToggleSplit={handleToggleSplitSource}
                  isDarkMode={isDarkMode}
                />
              ))}
            </Reorder.Group>

            {isAddingFrame ? (
              <SidebarAddForm
                $isDarkMode={isDarkMode}
                onSubmit={handleAddFrame}
                onKeyDown={(e) => e.key === "Escape" && handleCancelAddFrame()}
              >
                <FormInput
                  $isDarkMode={isDarkMode}
                  type="text"
                  placeholder={t("climateMap.titlePlaceholderShort")}
                  value={newFrameTitle}
                  onChange={(e) => setNewFrameTitle(e.target.value)}
                  autoFocus
                />
                <FormInput
                  $isDarkMode={isDarkMode}
                  type="text"
                  placeholder={t("climateMap.urlPlaceholderShort")}
                  value={newFrameUrl}
                  onChange={(e) => setNewFrameUrl(e.target.value)}
                  required
                />
                <div style={{ display: "flex", gap: "6px" }}>
                  <FormButton type="submit" style={{ flex: 1 }} disabled={isCheckingFrame}>
                    {isCheckingFrame ? t("climateMap.frameChecking") : t("climateMap.add")}
                  </FormButton>
                  <FormCancelButton $isDarkMode={isDarkMode} type="button" onClick={handleCancelAddFrame}>
                    {t("climateMap.cancel")}
                  </FormCancelButton>
                </div>
              </SidebarAddForm>
            ) : (
              <AddSourceTile
                $isDarkMode={isDarkMode}
                type="button"
                aria-label={t("climateMap.addOwnFrame")}
                title={t("climateMap.addOwnFrame")}
                onClick={() => setIsAddingFrame(true)}
              >
                <FiPlus />
                <span>{t("climateMap.addYourFrame")}</span>
              </AddSourceTile>
            )}
          </SourcesScroll>
        </SourcesSidebar>
      )}
      </MapLayout>

      {pipWindow ? (
        createPortal(
          <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            {miniFrameSwitch && (
              <div style={{ display: "flex", justifyContent: "center", padding: 6, background: "#111" }}>
                {miniFrameSwitch}
              </div>
            )}
            <StyledIframe
              aria-label="Weather Map (PiP)"
              src={miniEmbedUrl}
              $isLoading={isMiniLoading}
              $isReady={true}
              onLoad={() => setIsMiniLoading(false)}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ width: "100%", flex: 1, minHeight: 0, border: "none" }}
            />
          </div>,
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
          <MiniPlayerHeader style={{ touchAction: "none" }} onPointerDown={handleMiniPlayerDragStart}>
            <MiniHeaderTitle>
              {t("climateMap.miniMapTitle")}
            </MiniHeaderTitle>
            <MiniHeaderButtons>
              {miniFrameSwitch}
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen(miniPlayerRef);
                }}
              >
                {isFullscreen ? t("climateMap.collapse") : "⛶"}
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
            {isMiniLoading && (
              <Loader>
                <p>{t("climateMap.loading")}</p>
              </Loader>
            )}
            <StyledIframe
              aria-label="Weather Map Mini"
              src={miniEmbedUrl}
              $isLoading={isMiniLoading}
              $isReady={true}
              onLoad={() => setIsMiniLoading(false)}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
            <ResizeHandle style={{ touchAction: "none" }} onPointerDown={handleMiniPlayerResizeStart} />
          </MiniPlayerBody>
        </MiniPlayerWindow>
      )}
    </OuterContainer>
  );
};

export default ClimateMap;
