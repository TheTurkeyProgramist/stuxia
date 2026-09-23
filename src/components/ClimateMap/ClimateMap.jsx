import React, { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes, css } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pixelturkey from "../../photos/cursors/pixelturkey.webp"
import twoturkey from "../../photos/cursors/twoturkey.webp"
import { FaKeyboard } from "react-icons/fa";
import climate from "../../photos/cursors/climate.webp";
import localforage from "localforage";
import { BsFillPinAngleFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuFullscreen } from "react-icons/lu";
import { CgMiniPlayer } from "react-icons/cg";
import { GiLockedChest } from "react-icons/gi";
import toast, { Toaster } from "react-hot-toast";
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


const Controls = styled.div`
  display: none;
`;

const KeyboardShortcut = styled.kbd`
  display: ${(props) => (props.$visible ? "inline-flex" : "none")};
  align-items: center;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
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
  align-items: flex-end;
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
  padding: 8px 10px 16px;
  padding-top: 64px;
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 16px 10px 18px;
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
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.01em;
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

const SettingDivider = styled.div`
  height: 1px;
  margin: 8px 0 2px;
  background: linear-gradient(90deg, rgba(255,179,108,0.12), rgba(255,255,255,0.05), transparent);
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
`;

const MobileSetting = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 44px 10px 12px;
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

const StatusBadge = styled.span`
  display: inline-flex;
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
  margin-top: 4px;
  border-radius: 10px;
  background: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"};
  border: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
  overflow: hidden;
`;

const MobileSourceSelect = styled.select`
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-top: 1px solid ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
  background: ${(p) => p.$isDarkMode ? "rgba(10,18,36,0.8)" : "rgba(255,248,235,0.95)"};
  color: ${(p) => p.$isDarkMode ? "rgba(255,255,255,0.85)" : "#3a1800"};
  font-size: 13px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  appearance: auto;

  option {
    background: ${(p) => p.$isDarkMode ? "#0d1525" : "#fff8eb"};
    color: ${(p) => p.$isDarkMode ? "white" : "#1a0800"};
  }
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
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator === "undefined" ? true : navigator.onLine,
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false);
  const [pipWindow, setPipWindow] = useState(null);
  const [provider, setProvider] = useState("ventusky");
  const [isPinned, setIsPinned] = useState(false);

  const turkeyFrames = [pixelturkey, twoturkey];
  const [currentTurkeyFrame, setCurrentTurkeyFrame] = useState(0);
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

  const [customFrames, setCustomFrames] = useState([]);
  const [newFrameTitle, setNewFrameTitle] = useState("");
  const [newFrameUrl, setNewFrameUrl] = useState("");

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOffline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
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
    toast.success("Карту увімкнено", { icon: "🗺️", duration: 1800 });
    try {
      await localforage.setItem("map_last_unlocked_time", Date.now());
    } catch (e) {
      console.error("Error saving map unlock time:", e);
    }
  };

  const handleDeactivateMap = async () => {
    setIsMapActive(false);
    toast("Карту вимкнено", { icon: "🔒", duration: 1800 });
    try {
      await localforage.removeItem("map_last_unlocked_time");
    } catch (e) {
      console.error("Error removing map unlock time:", e);
    }
  };

  const settingButtonTexts = useMemo(
    () => [
      "Налаштування Стихії",
      "Додавання карти(фреймів)",
      "Налаштування Стихії",
      "Пошук місця",
      "Налаштування Стихії",
      "Закріпити локацію",
       "Налаштування Стихії",
      "Карти та безліч функцій",
      "Налаштування Стихії",
      "Міні-плеєр карти",
       "Налаштування Стихії",
      "Повноекранний режим",
    ],
    []
  );

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
        const savedKey = await localforage.getItem("gemini_api_key");
        if (savedKey) setGeminiKey(savedKey);

        const savedProvider = await localforage.getItem("selected_climate_provider");
        if (savedProvider) setProvider(savedProvider);

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
          if (pinnedLoc.provider) setProvider(pinnedLoc.provider);
          setIsPinned(true);
        }

        const lastUnlocked = await localforage.getItem("map_last_unlocked_time");
        const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
        if (lastUnlocked && Date.now() - lastUnlocked < SEVEN_DAYS_MS) {
          setIsMapActive(true);
        }

        const savedUserFrames = await localforage.getItem("climate_custom_user_frames");
        if (savedUserFrames && Array.isArray(savedUserFrames)) {
          setCustomFrames(savedUserFrames);
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
  };

  const handleAddFrame = (e) => {
    e.preventDefault();
    if (!newFrameUrl.trim()) return;

    let targetUrl = newFrameUrl.trim();
    const matchSrc = targetUrl.match(/src=["']([^"']+)["']/i);
    if (matchSrc) {
      targetUrl = matchSrc[1];
    }

    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      toast.error("Будь ласка, введіть коректне посилання (https://...)");
      return;
    }

    const title = newFrameTitle.trim() || "Власний віджет";

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
      toast.success("Локацію закріплено! Завантажиться при наступному вході.", { duration: 3000, icon: "📍" });
    } catch (error) {
      console.error("Error pinning location:", error);
      toast.error("Помилка при закріпленні локації.");
    }
  };

  const handleUnpin = async (e) => {
    if (e) e.stopPropagation();
    try {
      await localforage.removeItem("pinned_map_location");
      await localforage.removeItem("selected_climate_provider");
      setIsPinned(false);
      toast("Закріплення локації знято.", { icon: "📌", duration: 2000 });
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

  const handleAiSearch = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim() || isAiLoading) return;
    if (!geminiKey) {
      toast.error("API-ключ Gemini не знайдено. Додайте його в налаштуваннях ШІ.", { icon: "🔑" });
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
        toast.success(`Локацію знайдено! ${searchQuery}`, { icon: "🗺️" });
      }
    } catch (error) {
      console.error("AI Search error:", error);
      toast.error("Не вдалося знайти локацію. Спробуйте змінити запит.");
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

    if (provider === "alerts-ua") {
      return "https://alerts.in.ua/";
    }

    if (provider === "excalidraw") {
      return "https://excalidraw.com/";
    }

    if (provider === "saveecobot") {
      return "https://www.saveecobot.com/maps";
    }

    if (provider === "radarbox") {
      return "https://www.radarbox.com/";
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
    setIsLoading(isOnline);
  }, [provider, lat, lon, zoom, overlay, isOnline]);

  return (
    <OuterContainer>
      <AihelpTitle $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        Кліматична мапа
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
            aria-label="Оберіть джерело мапи"
          >
            <option value="ventusky">Ventusky</option>
            <option value="windy">Windy</option>
            <option value="alerts-ua">Карта тривог України</option>
            <option value="excalidraw">Онлайн-дошка (Excalidraw)</option>
            <option value="saveecobot">Якість повітря (SaveEcoBot)</option>
            <option value="radarbox">Моніторинг польотів (RadarBox)</option>
            {customFrames.map((frame) => (
              <option key={frame.id} value={frame.id}>
                {frame.title}
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
        </Controls>

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
                  <p>Керуйте картою та її джерелом</p>
                </div>
                <MobileSettingsClose $isDarkMode={isDarkMode} type="button" onClick={() => setIsControlsOpen(false)}>
                  ×
                </MobileSettingsClose>
              </MobileSettingsHeading>

              {/* ── Налаштування ── */}
              <SettingLabel $isDarkMode={isDarkMode}>Налаштування</SettingLabel>

              <KeyboardSettingRow $isDarkMode={isDarkMode}>
                <FaKeyboard />
                <Dov>
                  <strong>Комбінації клавіш</strong>
                  <span>Показувати підказки клавіш поруч з діями?</span>
                </Dov>
                <KbdModeSelect
                  $isDarkMode={isDarkMode}
                  value={keyboardShortcutMode}
                  onChange={handleKeyboardShortcutModeChange}
                >
                  <option value="none">Без</option>
                  <option value="auto">Авто</option>
                  <option value="always">Так</option>
                </KbdModeSelect>
              </KeyboardSettingRow>

              {/* ── Карта ── */}
              <SettingLabel $isDarkMode={isDarkMode}>Карта</SettingLabel>

              <MobileSetting
                $isDarkMode={isDarkMode}
                $active={isMapActive}
                $danger={isMapActive}
                type="button"
                onClick={() => isMapActive ? handleDeactivateMap() : handleActivateMap()}
              >
                <GiLockedChest />
                <Dov>
                  <strong>{isMapActive ? "Деактивувати карту" : "Активувати карту"}</strong>
                  <StatusBadge $on={isMapActive}>
                    {isMapActive ? "● Увімкнено" : "○ Вимкнено"}
                  </StatusBadge>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Shift + M</KeyboardShortcut>
              </MobileSetting>

              <MobileSetting
                $isDarkMode={isDarkMode}
                $active={isPinned}
                type="button"
                onClick={isPinned ? handleUnpin : handlePinLocation}
              >
                <BsFillPinAngleFill />
                <Dov>
                  <strong>{isPinned ? "Відкріпити локацію" : "Закріпити локацію"}</strong>
                  <StatusBadge $on={isPinned}>
                    {isPinned ? "● Закріплено" : "○ Не закріплено"}
                  </StatusBadge>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Shift + L</KeyboardShortcut>
              </MobileSetting>

              <MobileSetting $isDarkMode={isDarkMode} type="button" onClick={() => toggleFullscreen()}>
                <LuFullscreen />
                <Dov>
                  <strong>{isFullscreen ? "Згорнути карту" : "Відкрити на весь екран"}</strong>
                  <span>Розгорнути карту на весь екран пристрою або повернути звичайний вигляд.</span>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Shift + F</KeyboardShortcut>
              </MobileSetting>

              <MobileSetting $isDarkMode={isDarkMode} type="button" onClick={handleOpenMiniPlayer}>
                <CgMiniPlayer />
                <Dov>
                  <strong>Міні-плеєр карти</strong>
                  <span>Винести карту в окреме плаваюче вікно для паралельної роботи.</span>
                </Dov>
                <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Shift + P</KeyboardShortcut>
              </MobileSetting>

              {/* ── Джерело ── */}
              <SettingLabel $isDarkMode={isDarkMode}>Джерело карти</SettingLabel>

              <MobileSettingSelectGroup $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
                <MobileSetting
                  $isDarkMode={isDarkMode}
                  style={{ background: "none", border: "none", borderRadius: 0, margin: 0, padding: "10px 44px 10px 12px" }}
                  type="button"
                >
                  <FaMapLocationDot />
                  <Dov>
                    <strong>Джерело карти</strong>
                    <span>Windy, Ventusky, Тривоги, Excalidraw, SaveEcoBot та RadarBox</span>
                  </Dov>
                  <KeyboardShortcut $visible={showKeyboardShortcuts}>Ctrl + Shift + W</KeyboardShortcut>
                </MobileSetting>
                <MobileSourceSelect
                  $isDarkMode={isDarkMode}
                  value={provider}
                  onChange={(e) => handleSetProvider(e.target.value)}
                >
                  <option value="ventusky">Ventusky</option>
                  <option value="windy">Windy</option>
                  <option value="alerts-ua">Карта тривог України</option>
                  <option value="excalidraw">Онлайн-дошка (Excalidraw)</option>
                  <option value="saveecobot">Якість повітря (SaveEcoBot)</option>
                  <option value="radarbox">Моніторинг польотів (RadarBox)</option>
                  {customFrames.map((frame) => (
                    <option key={frame.id} value={frame.id}>
                      {frame.title}
                    </option>
                  ))}
                </MobileSourceSelect>
              </MobileSettingSelectGroup>

              {/* ── Власні фрейми ── */}
              <SettingLabel $isDarkMode={isDarkMode}>Власний фрейм / віджет</SettingLabel>

              <AddFrameForm $isDarkMode={isDarkMode} onSubmit={handleAddFrame} onClick={(e) => e.stopPropagation()}>
                <FormInput
                  $isDarkMode={isDarkMode}
                  type="text"
                  placeholder="Назва (напр. Радар, Вебкамера...)"
                  value={newFrameTitle}
                  onChange={(e) => setNewFrameTitle(e.target.value)}
                />
                <InputContainer>
                  <FormInput
                    $isDarkMode={isDarkMode}
                    type="text"
                    placeholder="URL або iframe код (https://...)"
                    value={newFrameUrl}
                    onChange={(e) => setNewFrameUrl(e.target.value)}
                    style={{ width: "100%", paddingRight: "88px" }}
                    required
                  />
                  <FormButton
                    type="submit"
                    style={{
                      position: "absolute",
                      right: "4px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: "6px 14px",
                    }}
                  >
                    Додати
                  </FormButton>
                </InputContainer>

                {customFrames.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "10px", color: isDarkMode ? "rgba(255,255,255,0.35)" : "rgba(100,50,0,0.45)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Збережені:</span>
                    {customFrames.map((frame) => (
                      <div key={frame.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", padding: "6px 10px", borderRadius: "7px", border: isDarkMode ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.08)" }}>
                        <span style={{ fontSize: "12px", color: isDarkMode ? "rgba(255,255,255,0.8)" : "rgba(30,10,0,0.8)" }}>{frame.title}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteFrame(frame.id)}
                          style={{ background: "transparent", border: "none", color: "rgba(255,80,80,0.7)", cursor: "pointer", fontSize: "13px", padding: "2px 4px", borderRadius: "4px" }}
                          title="Видалити"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </AddFrameForm>

            </MobileSettingsPanel>
          </MobileSettingsOverlay>
        )}

        {isMiniPlayerOpen ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: 'rgba(255,255,255,0.6)', zIndex: 5, padding: '20px', textAlign: 'center' }}>
            Закрийте міні-плеєр щоб повернути карту
          </div>
        ) : (
          <>
            {(!isMapActive || isLoading || !isOnline) && (
              <Loader>
                <img
                  src={turkeyFrames[currentTurkeyFrame]}
                  alt="Це Доміно :)"
                  style={{ width: '340px', height: '210px', imageRendering: 'pixelated', marginBottom: '-50px' }}
                />
                <p style={{ fontSize: "17px", color: "black" }}>
                  {!isOnline
                    ? "Перевірте інтернет-з'єднання для користування картою"
                    : !isMapActive
                      ? "Натисніть на карту для активації"
                      : "Завантаження..."}
                </p>
                <p style={{ fontSize: "11px" }}>Інтерактивні карти надано сервісами Windy, Ventusky та Карта тривог України (містять файли cookie)</p>
                <p style={{ fontSize: "11px" }}>Кнопка «Налаштування стихії» відкриває безкоштовний доступ до перемикання мап, повноекранний режим, міні-плеєр та інші функції!</p>
              </Loader>
            )}
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
          </>
        )}
      </MapWrapper>

      {pipWindow ? (
        createPortal(
          <StyledIframe
            aria-label="Weather Map (PiP)"
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
              aria-label="Weather Map Mini"
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
    </OuterContainer>
  );
};

export default ClimateMap;
