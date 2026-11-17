import React, { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  FiActivity,
  FiAlertTriangle,
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowUpLeft,
  FiArrowUpRight,
  FiCornerLeftUp,
  FiAperture,
  FiBox,
  FiImage,
  FiInfo,
  FiUpload,
  FiAlertCircle,
  FiEdit3,
  FiFileText,
  FiStar,
  FiBold,
  FiCheck,
  FiChevronDown,
  FiCircle,
  FiCloud,
  FiCode,
  FiCrosshair,
  FiDroplet,
  FiLayers,
  FiMaximize,
  FiMoon,
  FiMousePointer,
  FiMove,
  FiPenTool,
  FiPlay,
  FiPlus,
  FiRotateCcw,
  FiSliders,
  FiSquare,
  FiSunset,
  FiSun,
  FiType,
  FiUnderline,
  FiX,
  FiZap,
} from "react-icons/fi";
import {
  useDecorator,
  getUniqueSelector,
  buildOverridesCss,
  CUBE_DEFAULT_DEPTH,
  CUBE_DEFAULT_DIR,
  CUBE_DIRECTIONS,
} from "./DecoratorContext";
import { parseCssUrl } from "./decoratorSounds";
import { CLICK_EFFECTS, playClickEffect } from "./decoratorEffects";
import {
  ensureDecoratorFont,
  fontStyles,
  GOOGLE_FONTS,
  parseFontSrc,
} from "./decoratorFonts";
import { STYKHIIA_FONTS } from "../../utils/stykhiiaFont";
import { listFontPacks, saveFontPack } from "../../utils/customFonts";
import { readFontPack } from "../../utils/customFontImport";
import {
  COLOR_SUGGESTIONS,
  GRADIENT_SUGGESTIONS,
  isRiskyProp,
  isSlowValue,
  PROPERTY_SUGGESTIONS,
  VALUE_SUGGESTIONS,
  suggestionsFor,
} from "./decoratorSuggestions";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(16px) scale(0.98); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

// Кольори Декоратора — у гамі «Параметрів», але з власним помаранчевим акцентом
// (як рамка вибору елемента). Модалка живе поза «Параметрами», тож токени свої.
const DARK_TOKENS = css`
  --d-ink: 255, 255, 255;
  --d-bg: #1c1c1f;
  --d-panel: #202024;
  --d-card: #27272a;
  --d-input: #2b2b30;
  --d-input-hover: #323238;
  --d-text: #f3f3f3;
  --d-text-2: #c5c5c5;
  --d-muted: #a0a0a0;
  --d-accent: #ffb36c;
  --d-accent-rgb: 255, 179, 108;
  --d-on-accent: #1c1c1f;
  --d-red: #ff8a8a;
`;

const LIGHT_TOKENS = css`
  --d-ink: 0, 0, 0;
  --d-bg: #f4f5f7;
  --d-panel: #ffffff;
  --d-card: #ffffff;
  --d-input: #ffffff;
  --d-input-hover: #f3f4f6;
  --d-text: #111827;
  --d-text-2: #374151;
  --d-muted: #5b6270;
  --d-accent: #c2410c;
  --d-accent-rgb: 194, 65, 12;
  --d-on-accent: #ffffff;
  --d-red: #c42b1c;
`;

const Overlay = styled.div`
  ${(p) => (p.$light ? LIGHT_TOKENS : DARK_TOKENS)}
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  /* Вище за «Параметри» (100001–100003), щоб Декоратор працював і в налаштуваннях */
  z-index: 100010;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${fadeIn} 0.2s ease-out;
  text-align: left;

  @media (max-width: 600px) {
    align-items: flex-end;
    padding: 0;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--d-bg);
  color: var(--d-text);
  border-radius: 14px;
  border: 1px solid rgba(var(--d-ink), 0.1);
  /* На всю ширину екрана (з полями), як «Параметри» */
  width: 100%;
  height: calc(100dvh - 32px);
  overflow: hidden;
  animation: ${slideUp} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45), 0 0 1px rgba(var(--d-ink), 0.2);

  @media (max-width: 600px) {
    height: 94dvh;
    border-radius: 16px 16px 0 0;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--d-panel);
  border-bottom: 1px solid rgba(var(--d-ink), 0.08);
`;

const HeaderIcon = styled.div`
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 18px;
  color: var(--d-accent);
  background: rgba(var(--d-accent-rgb), 0.14);
`;

const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--d-text);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Subtitle = styled.span`
  font-size: 12px;
  color: var(--d-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TagBadge = styled.code`
  background: rgba(var(--d-accent-rgb), 0.14);
  color: var(--d-accent);
  padding: 2px 7px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  white-space: nowrap;
`;

const IconBtn = styled.button`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--d-muted);
  font-size: 18px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  &:hover:not(:disabled) {
    background: rgba(var(--d-ink), 0.08);
    color: var(--d-text);
  }
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
  &:focus-visible {
    outline: 2px solid var(--d-accent);
    outline-offset: 1px;
  }
`;

// ── Розкладка: бічна навігація + вміст групи (як у «Параметрах») ──
const Main = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.nav`
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px 12px;
  background: var(--d-panel);
  border-right: 1px solid rgba(var(--d-ink), 0.08);
  overflow-y: auto;

  @media (max-width: 760px) {
    flex: 0 0 auto;
    gap: 10px;
    padding: 10px 12px;
    border-right: none;
    border-bottom: 1px solid rgba(var(--d-ink), 0.08);
    overflow: visible;
  }
`;

const SideLabel = styled.span`
  padding: 0 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--d-muted);

  @media (max-width: 760px) {
    display: none;
  }
`;

const ModeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 760px) {
    flex-direction: row;
    gap: 8px;
  }
`;

const Segmented = styled.div`
  display: flex;
  flex: 1;
  padding: 3px;
  gap: 2px;
  border-radius: 9px;
  background: rgba(var(--d-ink), 0.06);
`;

const SegmentBtn = styled.button`
  flex: 1;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: 7px;
  padding: 7px 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s;
  background: ${(p) => (p.$active ? "var(--d-card)" : "transparent")};
  color: ${(p) => (p.$active ? "var(--d-text)" : "var(--d-muted)")};
  box-shadow: ${(p) =>
    p.$active ? "0 1px 3px rgba(0,0,0,0.25), 0 0 0 1px rgba(var(--d-ink),0.06)" : "none"};
  svg {
    flex-shrink: 0;
    font-size: 14px;
    color: ${(p) => (p.$active ? "var(--d-accent)" : "inherit")};
  }
  &:hover {
    color: var(--d-text);
  }
  &:focus-visible {
    outline: 2px solid var(--d-accent);
    outline-offset: 1px;
  }
`;

// Квадратик-чекбокс усередині перемикачів «що редагуємо»
const CheckMark = styled.span`
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  display: grid;
  place-items: center;
  border: 1.5px solid ${(p) => (p.$on ? "var(--d-accent)" : "rgba(var(--d-ink), 0.35)")};
  background: ${(p) => (p.$on ? "var(--d-accent)" : "transparent")};
  color: var(--d-on-accent);
  svg {
    font-size: 10px !important;
    color: var(--d-on-accent) !important;
    stroke-width: 4;
  }
`;

const SideHint = styled.p`
  margin: 0;
  padding: 0 8px;
  font-size: 11.5px;
  line-height: 1.4;
  color: var(--d-muted);
  button {
    padding: 0;
    border: none;
    background: none;
    color: var(--d-accent);
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (max-width: 760px) {
    flex-direction: row;
    gap: 6px;
    overflow-x: auto;
    margin: 0 -12px;
    padding: 0 12px 2px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavItem = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 9px 10px;
  border: none;
  border-radius: 8px;
  background: ${(p) => (p.$active ? "rgba(var(--d-ink),0.08)" : "transparent")};
  color: ${(p) => (p.$active ? "var(--d-text)" : "var(--d-text-2)")};
  font-size: 13px;
  font-weight: ${(p) => (p.$active ? 600 : 500)};
  text-align: left;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  /* Акцентна смужка зліва в активного пункту */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 3px;
    height: ${(p) => (p.$active ? "18px" : "0")};
    border-radius: 3px;
    background: var(--d-accent);
    transform: translateY(-50%);
    transition: height 0.2s ease;
  }
  &:hover {
    background: rgba(var(--d-ink), ${(p) => (p.$active ? 0.1 : 0.05)});
    color: var(--d-text);
  }
  &:focus-visible {
    outline: 2px solid var(--d-accent);
    outline-offset: -2px;
  }

  @media (max-width: 760px) {
    flex: 0 0 auto;
    width: auto;
    gap: 8px;
    padding: 7px 12px;
    border-radius: 999px;
    border: 1px solid ${(p) => (p.$active ? "var(--d-accent)" : "rgba(var(--d-ink),0.12)")};
    background: ${(p) => (p.$active ? "rgba(var(--d-accent-rgb),0.14)" : "transparent")};
    white-space: nowrap;
    &::before {
      display: none;
    }
  }
`;

const NavIcon = styled.span`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 15px;
  color: ${(p) => (p.$active ? "var(--d-accent)" : "inherit")};
  background: ${(p) =>
    p.$active ? "rgba(var(--d-accent-rgb),0.14)" : "rgba(var(--d-ink),0.05)"};
  transition: background 0.15s, color 0.15s;

  @media (max-width: 760px) {
    width: auto;
    height: auto;
    background: none;
  }
`;

const NavText = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CountBadge = styled.span`
  flex-shrink: 0;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  box-sizing: border-box;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  background: var(--d-accent);
  color: var(--d-on-accent);
`;

const SideFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 8px 0;
  border-top: 1px solid rgba(var(--d-ink), 0.08);
  font-size: 12px;
  color: var(--d-muted);

  @media (max-width: 760px) {
    display: none;
  }
`;

const GhostBtn = styled.button`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(var(--d-ink), 0.14);
  color: var(--d-text-2);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  &:hover {
    background: rgba(var(--d-ink), 0.06);
    color: var(--d-text);
  }
  &:focus-visible {
    outline: 2px solid var(--d-accent);
    outline-offset: 1px;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: 24px 28px 28px;
  overscroll-behavior: contain;
  /* Місце під смугу прокрутки завжди зарезервоване — вміст не «стрибає», коли вона з'являється */
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(var(--d-ink), 0.16);
    border-radius: 10px;
    border: 3px solid var(--d-bg);
  }

  @media (max-width: 760px) {
    padding: 16px 12px 20px;
  }
`;

const ContentHead = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;

const ContentIcon = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 20px;
  color: var(--d-accent);
  background: rgba(var(--d-accent-rgb), 0.12);
  border: 1px solid rgba(var(--d-accent-rgb), 0.25);

  @media (max-width: 760px) {
    width: 36px;
    height: 36px;
    font-size: 17px;
  }
`;

const ContentTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--d-text);

  @media (max-width: 760px) {
    font-size: 17px;
  }
`;

const ContentDesc = styled.p`
  margin: 2px 0 0;
  font-size: 13px;
  color: var(--d-muted);
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
  align-items: start;
  gap: 14px;
`;

// Картка однієї властивості. Змінена — з акцентною рамкою
const PropCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border-radius: 12px;
  background: var(--d-card);
  border: 1px solid
    ${(p) => (p.$changed ? "rgba(var(--d-accent-rgb),0.45)" : "rgba(var(--d-ink),0.07)")};
  box-shadow: ${(p) =>
    p.$changed
      ? "0 0 0 3px rgba(var(--d-accent-rgb),0.08)"
      : "0 1px 2px rgba(0,0,0,0.12)"};
  transition: border-color 0.2s, box-shadow 0.2s;
  ${(p) => p.$wide && "grid-column: 1 / -1;"}

  &:hover {
    border-color: ${(p) =>
      p.$changed ? "rgba(var(--d-accent-rgb),0.6)" : "rgba(var(--d-ink),0.14)"};
  }
  /* Поля в колонці не стискаються по висоті */
  & > * {
    flex-shrink: 0;
  }
`;

const PropHead = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const PropIcon = styled.span`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  font-size: 16px;
  color: ${(p) => (p.$changed ? "var(--d-accent)" : "var(--d-text-2)")};
  background: ${(p) =>
    p.$changed ? "rgba(var(--d-accent-rgb),0.14)" : "rgba(var(--d-ink),0.06)"};
  transition: background 0.2s, color 0.2s;
`;

const PropText = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 1px;
`;

const PropLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--d-text);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChangedTag = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 5px;
  color: var(--d-accent);
  background: rgba(var(--d-accent-rgb), 0.14);
`;

const PropDesc = styled.span`
  font-size: 12px;
  color: var(--d-muted);
  line-height: 1.35;
`;

const ResetBtn = styled(IconBtn)`
  width: 30px;
  height: 30px;
  font-size: 15px;
  border-radius: 7px;
`;

// Перемикач «увімкнено/вимкнено» в стилі «Параметрів»
const Switch = styled.button`
  position: relative;
  flex-shrink: 0;
  width: 44px;
  height: 24px;
  padding: 0;
  border-radius: 999px;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$on ? "var(--d-accent)" : "rgba(var(--d-ink),0.35)")};
  background: ${(p) => (p.$on ? "var(--d-accent)" : "transparent")};
  transition: background 0.15s, border-color 0.15s;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(p) => (p.$on ? "23px" : "4px")};
    width: 14px;
    height: 14px;
    margin-top: -7px;
    border-radius: 50%;
    background: ${(p) => (p.$on ? "var(--d-on-accent)" : "var(--d-text-2)")};
    transition: left 0.15s ease;
  }
  &:focus-visible {
    outline: 2px solid var(--d-accent);
    outline-offset: 2px;
  }
`;

const SwitchLabel = styled.span`
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  color: ${(p) => (p.$on ? "var(--d-text)" : "var(--d-muted)")};
`;

// Мініатюра курсора-зображення на «шахівниці», щоб було видно прозорість
const ImagePreview = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid rgba(var(--d-ink), 0.2);
  display: grid;
  place-items: center;
  overflow: hidden;
  color: var(--d-muted);
  font-size: 16px;
  background-color: rgba(var(--d-ink), 0.04);
  background-image: linear-gradient(45deg, rgba(var(--d-ink), 0.08) 25%, transparent 25%, transparent 75%, rgba(var(--d-ink), 0.08) 75%),
    linear-gradient(45deg, rgba(var(--d-ink), 0.08) 25%, transparent 25%, transparent 75%, rgba(var(--d-ink), 0.08) 75%);
  background-size: 10px 10px;
  background-position: 0 0, 5px 5px;
  img {
    max-width: 32px;
    max-height: 32px;
    object-fit: contain;
  }
`;

const UploadBtn = styled.label`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  height: 40px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px dashed rgba(var(--d-ink), 0.3);
  color: var(--d-text-2);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  &:hover {
    background: rgba(var(--d-ink), 0.05);
    border-color: var(--d-accent);
    color: var(--d-text);
  }
  &:focus-within {
    outline: 2px solid var(--d-accent);
    outline-offset: 1px;
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

const Warning = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 10px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.4;
  color: var(--d-text);
  background: ${(p) => (p.$tone === "hint" ? "rgba(var(--d-ink), 0.05)" : "rgba(var(--d-accent-rgb), 0.1)")};
  border: 1px solid
    ${(p) => (p.$tone === "hint" ? "rgba(var(--d-ink), 0.14)" : "rgba(var(--d-accent-rgb), 0.35)")};
  > svg {
    flex-shrink: 0;
    font-size: 16px;
    color: var(--d-accent);
  }
  code {
    font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
    color: var(--d-accent);
  }
  > span {
    flex: 1 1 200px;
  }
`;

// Зразок градієнта (поки не застосовано — блідий і з пунктиром)
const GradientPreview = styled.div`
  height: 44px;
  border-radius: 8px;
  border: 1px ${(p) => (p.$draft ? "dashed" : "solid")} rgba(var(--d-ink), 0.2);
  opacity: ${(p) => (p.$draft ? 0.55 : 1)};
`;

const GradientHelp = styled.details`
  font-size: 12px;
  line-height: 1.5;
  color: var(--d-text-2);
  border-radius: 8px;
  background: rgba(var(--d-ink), 0.04);
  border: 1px solid rgba(var(--d-ink), 0.08);
  summary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    cursor: pointer;
    font-weight: 600;
    color: var(--d-accent);
    list-style: none;
    &::-webkit-details-marker {
      display: none;
    }
    &::before {
      content: "▸";
      transition: transform 0.15s;
    }
  }
  &[open] summary::before {
    transform: rotate(90deg);
  }
  > div {
    padding: 0 12px 12px;
  }
  p {
    margin: 0 0 8px;
  }
  ul {
    margin: 0 0 8px;
    padding-left: 18px;
  }
  li {
    margin-bottom: 4px;
  }
  code {
    font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
    font-size: 11.5px;
    color: var(--d-accent);
    background: rgba(var(--d-ink), 0.06);
    padding: 1px 5px;
    border-radius: 4px;
    word-break: break-word;
  }
`;

const StateNote = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -6px 0 16px;
  font-size: 12px;
  color: var(--d-muted);
`;

const EmptyNote = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--d-muted);
  font-style: italic;
`;

const Controls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const fieldBase = css`
  min-width: 0;
  box-sizing: border-box;
  background: var(--d-input);
  border: 1px solid rgba(var(--d-ink), 0.12);
  border-bottom-color: rgba(var(--d-ink), 0.22);
  color: var(--d-text);
  border-radius: 8px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s, background 0.15s;
  &:hover {
    background: var(--d-input-hover);
  }
  &:focus {
    border-color: var(--d-accent);
    box-shadow: 0 0 0 1px var(--d-accent);
  }
  &::placeholder {
    color: var(--d-muted);
    opacity: 0.8;
  }
`;

const PropInput = styled.input`
  ${fieldBase}
  /* flex-basis auto + min-height: у ряду розтягується, у колонці не сплющується */
  flex: 1 1 auto;
  width: 100%;
  height: 40px;
  min-height: 40px;
  padding: 0 12px;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
`;

const SelectWrap = styled.div`
  position: relative;
  flex: ${(p) => p.$flex || 1};
  min-width: ${(p) => p.$min || "0"};
  > svg {
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--d-muted);
    font-size: 14px;
  }
`;

const Select = styled.select`
  ${fieldBase}
  width: 100%;
  height: 40px;
  min-height: 40px;
  padding: 0 32px 0 12px;
  appearance: none;
  cursor: pointer;
  /* Явні кольори для option — інакше в темній темі білий текст на білому */
  option,
  optgroup {
    color: var(--d-text);
    background: var(--d-panel);
  }
`;

// Синя примітка «повільно на слабких пристроях» (розмиття)
const SlowNote = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: #93c5fd;
  > svg {
    flex-shrink: 0;
    margin-top: 1px;
    font-size: 15px;
    color: #60a5fa;
  }
`;

// Зразок шрифту
const FontPreview = styled.div`
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 17px;
  line-height: 1.35;
  color: var(--d-text);
  background: rgba(var(--d-ink), 0.04);
  border: 1px solid rgba(var(--d-ink), 0.08);
  overflow-wrap: anywhere;
`;

// Квадратик кольору: видно поточне значення, клік відкриває системну палітру.
// Без значення — перекреслений, тобто «не задано»
const Swatch = styled.label`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid rgba(var(--d-ink), 0.2);
  background-color: rgba(var(--d-ink), 0.06);
  background-image: ${(p) =>
    p.$empty
      ? "linear-gradient(135deg, transparent 46%, var(--d-red) 46%, var(--d-red) 54%, transparent 54%)"
      : "none"};
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 5px;
    background: ${(p) => (p.$empty ? "transparent" : p.$color)};
    box-shadow: ${(p) => (p.$empty ? "none" : "inset 0 0 0 1px rgba(0,0,0,0.15)")};
  }
  &:focus-within {
    border-color: var(--d-accent);
    box-shadow: 0 0 0 1px var(--d-accent);
  }
  input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    border: none;
    padding: 0;
  }
`;

const TransformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  @media (max-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MiniField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
  color: var(--d-muted);
`;

const CustomName = styled.code`
  flex: 0 1 140px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: var(--d-accent);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
`;

const AddBtn = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background: rgba(var(--d-accent-rgb), 0.16);
  color: var(--d-accent);
  transition: background 0.15s;
  &:hover {
    background: rgba(var(--d-accent-rgb), 0.26);
  }
  &:focus-visible {
    outline: 2px solid var(--d-accent);
    outline-offset: 1px;
  }
`;

const ErrorText = styled.span`
  font-size: 11px;
  color: var(--d-red);
`;

const Footer = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px 20px;
  background: var(--d-panel);
  border-top: 1px solid rgba(var(--d-ink), 0.08);
  @media (max-width: 600px) {
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
  }
`;

const ActionBtn = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 42px;
  padding: 0 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, filter 0.15s;
  svg {
    font-size: 15px;
  }
  &:focus-visible {
    outline: 2px solid var(--d-accent);
    outline-offset: 2px;
  }
`;

const ApplyBtn = styled(ActionBtn)`
  background: var(--d-accent);
  color: var(--d-on-accent);
  border: 1px solid var(--d-accent);
  &:hover {
    filter: brightness(1.07);
  }
`;

const PassthroughBtn = styled(ActionBtn)`
  background: rgba(var(--d-ink), 0.06);
  color: var(--d-text);
  border: 1px solid rgba(var(--d-ink), 0.12);
  &:hover {
    background: rgba(var(--d-ink), 0.1);
  }
`;

const EDITABLE_PROPS_CONFIG = {
  color: {
    label: "Колір тексту",
    cssProp: "color",
    icon: FiType,
    type: "color",
    desc: "Змінює колір шрифту елемента",
  },
  backgroundColor: {
    label: "Колір фону",
    cssProp: "backgroundColor",
    icon: FiDroplet,
    type: "color",
    desc: "Змінює фоновий колір елемента",
  },
  backgroundImage: {
    label: "Градієнт фону",
    cssProp: "backgroundImage",
    icon: FiSunset,
    type: "gradient",
    desc: "Плавний перехід кольорів замість суцільного фону",
  },
  border: {
    label: "Рамка (бордюр)",
    cssProp: "border",
    icon: FiSquare,
    type: "border",
    desc: "Налаштування межі елемента",
  },
  borderRadius: {
    label: "Заокруглення кутів",
    cssProp: "borderRadius",
    icon: FiCircle,
    type: "text",
    placeholder: "напр., 8px або 50%",
    desc: "Радіус заокруглення рамки",
  },
  boxShadow: {
    label: "Тінь елемента",
    cssProp: "boxShadow",
    icon: FiLayers,
    type: "text",
    placeholder: "напр., 0 4px 10px rgba(0,0,0,0.3)",
    desc: "Додає ефект тіні навколо елемента",
  },
  textShadow: {
    label: "Тінь тексту",
    cssProp: "textShadow",
    icon: FiBold,
    type: "text",
    placeholder: "напр., 1px 1px 2px #000",
    desc: "Ефект тіні для тексту",
  },
  backdropFilter: {
    label: "Розмиття фону",
    cssProp: "backdropFilter",
    icon: FiCloud,
    type: "text",
    placeholder: "напр., blur(10px)",
    desc: "Ефекти для фону (скляний ефект)",
  },
  filter: {
    label: "Фільтри",
    cssProp: "filter",
    icon: FiSliders,
    type: "text",
    placeholder: "напр., grayscale(50%)",
    desc: "Ефекти зображення/кольору",
  },
  transform: {
    label: "Трансформація",
    cssProp: "transform",
    icon: FiMove,
    type: "transform",
    placeholder: "напр., rotate(5deg) scale(1.1) або skewY(3deg)",
    desc: "Зсув, поворот, масштаб, нахил — або свій CSS",
  },
  transformOrigin: {
    label: "Точка трансформації",
    cssProp: "transformOrigin",
    icon: FiCrosshair,
    type: "text",
    placeholder: "напр., center, top left, 50% 100%",
    desc: "Відносно чого виконується трансформація",
  },
  transition: {
    label: "Анімація переходу",
    cssProp: "transition",
    icon: FiZap,
    type: "text",
    placeholder: "напр., all 0.3s ease",
    desc: "Плавність зміни стилів (корисно для :hover)",
  },
  outline: {
    label: "Контур",
    cssProp: "outline",
    icon: FiMaximize,
    type: "text",
    placeholder: "напр., 2px solid red",
    desc: "Зовнішня рамка елемента",
  },
  textDecoration: {
    label: "Декорування тексту",
    cssProp: "textDecoration",
    icon: FiUnderline,
    type: "text",
    placeholder: "напр., underline або none",
    desc: "Підкреслення, закреслення тощо",
  },
  cursor: {
    label: "Курсор миші",
    cssProp: "cursor",
    icon: FiMousePointer,
    type: "cursor",
    desc: "Вигляд курсора при наведенні",
  },
  cursorImage: {
    label: "Курсор-зображення",
    cssProp: "--dec-cursor-image",
    extraKeys: ["--dec-cursor-size"],
    icon: FiImage,
    type: "cursorImage",
    desc: "Своє фото або маленька GIF замість стрілочки (до 512 КБ)",
  },
  clickFx: {
    label: "Ефект натискання",
    cssProp: "--dec-click-fx",
    extraKeys: ["--dec-click-fx-color"],
    icon: FiStar,
    type: "clickFx",
    desc: "З місця кліку вилітають зірочки, конфеті, сердечка…",
  },
  blockText: {
    label: "Текст у блоці",
    cssProp: "--dec-text",
    icon: FiFileText,
    type: "blockText",
    // Текст не залежить від наведення — зберігаємо у «Звичайному» обраної теми
    fixedState: "default",
    desc: "Замінює головний напис елемента своїм. Окремо для денної й темної теми",
  },
  fontFamily: {
    label: "Шрифт",
    cssProp: "fontFamily",
    extraKeys: ["--font-family", "--dec-font-src"],
    icon: FiEdit3,
    type: "font",
    desc: "Google Fonts, шрифти Стихії, системний або свій файл",
  },
  react: {
    label: "Звукова реакція",
    cssProp: "--dec-react",
    extraKeys: ["--dec-react-color"],
    icon: FiActivity,
    type: "react",
    desc: "Напівпрозора тінь при натисканні й під фонову музику — що гучніше, то більша",
  },
  threeD: {
    label: "3D-кнопка",
    cssProp: "--dec-3d",
    extraKeys: ["--dec-3d-depth", "--dec-3d-dir", "--dec-3d-color", "--dec-3d-fill"],
    icon: FiBox,
    type: "threeD",
    desc: "Каркас задньої грані, як у куба; при наведенні кнопка «заходить» у неї",
  },
};

const EDITABLE_PROPS = Object.values(EDITABLE_PROPS_CONFIG);
const KNOWN_PROPS = new Set(EDITABLE_PROPS.flatMap((p) => [p.cssProp, ...(p.extraKeys || [])]));
// Допоміжні ключі (розмір, колір, глибина) — не рахуємо як окремі зміни
const SECONDARY_PROPS = new Set(EDITABLE_PROPS.flatMap((p) => p.extraKeys || []));
const CURSOR_SIZES = ["24px", "32px", "48px", "64px"];
const EDGE_DEPTHS = ["4px", "6px", "8px", "10px", "12px", "16px"];
const CUBE_DIR_ICONS = {
  "up-left": FiArrowUpLeft,
  "up-right": FiArrowUpRight,
  "down-left": FiArrowDownLeft,
  "down-right": FiArrowDownRight,
};
const MAX_CURSOR_KB = 512;

const readAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

// Статичне фото зменшуємо до max px — курсору більше не треба, а сховище не роздувається
const shrinkImage = (dataUrl, max) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      if (k === 1) return resolve(dataUrl);
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * k));
      canvas.height = Math.max(1, Math.round(img.height * k));
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
const MODES = ["light_default", "light_hover", "dark_default", "dark_hover"];
// Заборонених властивостей зараз немає (opacity повернуто — з попередженням про ризик)
const FORBIDDEN_PROPS = new Set();

/* ---------- Хелпери ---------- */
const rgbToHex = (rgb) => {
  if (!rgb || rgb === "transparent" || rgb === "rgba(0, 0, 0, 0)")
    return "#000000";
  if (rgb.startsWith("#")) {
    if (/^#[0-9a-f]{3}$/i.test(rgb)) {
      return "#" + rgb.slice(1).split("").map((c) => c + c).join("");
    }
    return /^#[0-9a-f]{6}/i.test(rgb) ? rgb.slice(0, 7) : "#000000";
  }
  const match = rgb.match(/\d+/g);
  if (!match || match.length < 3) return "#000000";
  return (
    "#" +
    match
      .slice(0, 3)
      .map((n) => Math.min(255, parseInt(n)).toString(16).padStart(2, "0"))
      .join("")
  );
};

const BORDER_STYLES = ["solid", "double", "dashed", "dotted", "groove", "ridge", "inset", "outset"];
const BORDER_WIDTHS = ["0px", "1px", "2px", "3px", "4px", "5px", "8px", "10px"];

const parseBorder = (borderStr) => {
  let width = "1px";
  let style = "none";
  let color = "#000000";
  if (!borderStr || borderStr === "none") return { width, style, color };

  style = "solid";
  const parts = borderStr.match(/(?:rgba?|hsla?)\([^)]*\)|\S+/g) || [];
  parts.forEach((part) => {
    if (/^\d*\.?\d+(px|em|rem|pt)?$/.test(part)) {
      width = /[a-z]/.test(part) ? part : part + "px";
    } else if (part === "none") {
      style = "none";
    } else if (BORDER_STYLES.includes(part)) {
      style = part;
    } else {
      color = part;
    }
  });
  return { width, style, color };
};

const combineBorder = (width, style, color) =>
  style === "none" ? "none" : `${width} ${style} ${color}`;

const TRANSFORM_FIELDS = [
  { key: "translateX", label: "X (px)", unit: "px", def: 0, step: 1 },
  { key: "translateY", label: "Y (px)", unit: "px", def: 0, step: 1 },
  { key: "rotate", label: "Поворот (°)", unit: "deg", def: 0, step: 1 },
  { key: "scale", label: "Масштаб", unit: "", def: 1, step: 0.05 },
  { key: "skewX", label: "Нахил X (°)", unit: "deg", def: 0, step: 1 },
  { key: "skewY", label: "Нахил Y (°)", unit: "deg", def: 0, step: 1 },
];

const parseTransform = (str) => {
  const result = {};
  if (!str) return result;
  const re = /(translateX|translateY|rotate|scale|skewX|skewY)\(\s*(-?\d*\.?\d+)\s*(?:px|deg)?\s*\)/g;
  let m;
  while ((m = re.exec(str))) result[m[1]] = m[2];
  return result;
};

// Збирає transform; невідомі функції (matrix, 3d тощо) зберігаються з вихідного рядка
const buildTransform = (fields, original = "") => {
  const known = TRANSFORM_FIELDS.map((f) => f.key).join("|");
  const extra = original
    .replace(new RegExp(`(${known})\\(\\s*-?\\d*\\.?\\d+\\s*(?:px|deg)?\\s*\\)`, "g"), "")
    .trim();
  const own = TRANSFORM_FIELDS.filter(
    (f) => fields[f.key] !== undefined && fields[f.key] !== "" && Number(fields[f.key]) !== f.def,
  )
    .map((f) => `${f.key}(${fields[f.key]}${f.unit})`)
    .join(" ");
  return [own, extra].filter(Boolean).join(" ");
};

// ── Градієнт: розбір і збирання простого градієнта з двох кольорів ──
const DEFAULT_GRADIENT = { type: "linear", angle: 135, from: "#ffb36c", to: "#a855f7" };
const GRADIENT_ANGLES = [
  [0, "↑", "Знизу вгору"],
  [45, "↗", "Знизу-зліва вгору-вправо"],
  [90, "→", "Зліва направо"],
  [135, "↘", "Згори-зліва вниз-вправо"],
  [180, "↓", "Згори вниз"],
  [225, "↙", "Згори-справа вниз-вліво"],
  [270, "←", "Справа наліво"],
  [315, "↖", "Знизу-справа вгору-вліво"],
];

// Розбиває за комами верхнього рівня (коми всередині rgba(...) не рахуються)
const splitTopLevel = (str) => {
  const parts = [];
  let depth = 0;
  let current = "";
  for (const ch of str) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      parts.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
};

// null — градієнт складніший за «два кольори» (тоді його редагують текстом)
const parseGradient = (value) => {
  const m = (value || "").trim().match(/^(linear|radial)-gradient\(([\s\S]*)\)$/);
  if (!m) return null;
  const parts = splitTopLevel(m[2]);
  let angle = 180;
  if (m[1] === "linear" && /^-?\d+(\.\d+)?deg$/.test(parts[0])) angle = parseFloat(parts.shift());
  else if (m[1] === "radial" && /^(circle|ellipse)\b/.test(parts[0])) parts.shift();
  if (parts.length !== 2 || parts.some((part) => /\s\d+%$/.test(part))) return null;
  return { type: m[1], angle, from: parts[0], to: parts[1] };
};

const buildGradient = ({ type, angle, from, to }) =>
  type === "radial"
    ? `radial-gradient(circle, ${from}, ${to})`
    : `linear-gradient(${angle}deg, ${from}, ${to})`;

const toCamel = (name) =>
  name.startsWith("--") ? name : name.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());


// Розділи бічної навігації Декоратора
const NAV_GROUPS = [
  { id: "colors", title: "Кольори", desc: "Колір тексту та фону елемента", icon: FiDroplet, props: ["color", "backgroundColor", "backgroundImage"] },
  { id: "shape", title: "Рамка й форма", desc: "Межі, контур і заокруглення кутів", icon: FiSquare, props: ["border", "borderRadius", "outline"] },
  { id: "effects", title: "Ефекти", desc: "Тіні, розмиття та фільтри", icon: FiAperture, props: ["boxShadow", "textShadow", "backdropFilter", "filter"] },
  { id: "motion", title: "Рух і анімація", desc: "Зсув, поворот, масштаб і плавність переходів", icon: FiMove, props: ["transform", "transformOrigin", "transition"] },
  { id: "text", title: "Текст, шрифт і курсор", desc: "Свій текст, шрифт, декорування тексту, вигляд курсора та курсор-зображення", icon: FiMousePointer, props: ["blockText", "fontFamily", "textDecoration", "cursor", "cursorImage"] },
  // fixedState: налаштування діють в обох станах, тож зберігаються у «Звичайному»
  { id: "interactive", title: "Ефекти й 3D", desc: "Ефект натискання, реакція на музику та об'ємні кнопки", icon: FiStar, props: ["clickFx", "react", "threeD"], fixedState: "default" },
  { id: "custom", title: "Власний CSS", desc: "Будь-які інші CSS-властивості", icon: FiCode, props: [] },
];

// ── Поле з підказками: список готових значень з поясненням українською ──
const SuggestWrap = styled.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  > button {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: var(--d-muted);
    cursor: pointer;
    font-size: 15px;
    &:hover {
      background: rgba(var(--d-ink), 0.08);
      color: var(--d-text);
    }
  }
`;

const SuggestList = styled.ul`
  position: absolute;
  ${(p) => (p.$up ? "bottom: calc(100% + 4px);" : "top: calc(100% + 4px);")}
  left: 0;
  right: 0;
  z-index: 30;
  margin: 0;
  padding: 4px;
  list-style: none;
  max-height: 260px;
  overflow-y: auto;
  border-radius: 10px;
  background: var(--d-panel);
  border: 1px solid rgba(var(--d-ink), 0.14);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
`;

const SuggestItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 7px;
  cursor: pointer;
  background: ${(p) => (p.$active ? "rgba(var(--d-accent-rgb), 0.14)" : "transparent")};
  code {
    flex-shrink: 0;
    max-width: 55%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
    color: var(--d-accent);
  }
  span {
    min-width: 0;
    font-size: 12px;
    line-height: 1.3;
    color: var(--d-text-2);
  }
`;

const SuggestSwatch = styled.i`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgba(var(--d-ink), 0.25);
  background: ${(p) => p.$color};
`;

let suggestFieldId = 0;

const SuggestField = ({ value, onChange, suggestions = [], placeholder, ariaLabel, onEnter, style }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  // Куди відкривати список і якої висоти, щоб він не виходив за область прокрутки
  const [place, setPlace] = useState({ up: false, maxHeight: 260 });
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [listId] = useState(() => `decorator-suggest-${++suggestFieldId}`);

  // Порожньо або вже вибране значення — показуємо все; інакше фільтруємо за значенням і поясненням
  const query = (value || "").trim().toLowerCase();
  const exact = suggestions.some((item) => item.value.toLowerCase() === query);
  const items =
    !query || exact
      ? suggestions
      : suggestions.filter(
          (item) => item.value.toLowerCase().includes(query) || item.label.toLowerCase().includes(query),
        );
  const showList = open && items.length > 0;

  useEffect(() => {
    if (!showList || active < 0) return;
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active, showList]);

  const openList = () => {
    const input = inputRef.current;
    if (input) {
      const box = input.getBoundingClientRect();
      const area = input.closest("[data-suggest-scroll]")?.getBoundingClientRect() || {
        top: 0,
        bottom: window.innerHeight,
      };
      const below = area.bottom - box.bottom - 12;
      const above = box.top - area.top - 12;
      const up = below < 260 && above > below;
      setPlace({ up, maxHeight: Math.max(120, Math.min(260, up ? above : below)) });
    }
    setOpen(true);
  };

  const pick = (item) => {
    onChange(item.value);
    setOpen(false);
    setActive(-1);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) openList();
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((i) => (items.length ? (i + step + items.length) % items.length : -1));
    } else if (e.key === "Enter") {
      if (showList && active >= 0 && items[active]) {
        e.preventDefault();
        pick(items[active]);
      } else {
        onEnter?.();
      }
    } else if (e.key === "Escape" && showList) {
      // Закриваємо лише список, а не весь Декоратор
      e.stopPropagation();
      setOpen(false);
    }
  };

  return (
    <SuggestWrap style={style}>
      <PropInput
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        aria-label={ariaLabel}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls={listId}
        aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
        autoComplete="off"
        spellCheck={false}
        onChange={(e) => {
          onChange(e.target.value);
          if (!open) openList();
          setActive(-1);
        }}
        onFocus={openList}
        onBlur={() => setOpen(false)}
        onKeyDown={onKeyDown}
        style={suggestions.length ? { paddingRight: 36 } : undefined}
        data-decorator-ignore="true"
      />
      {suggestions.length > 0 && (
        <button
          type="button"
          tabIndex={-1}
          aria-label="Показати підказки"
          title="Підказки"
          // mousedown, а не click: інакше поле втратить фокус і список закриється
          onMouseDown={(e) => {
            e.preventDefault();
            if (open) setOpen(false);
            else openList();
            inputRef.current?.focus();
          }}
          data-decorator-ignore="true"
        >
          <FiChevronDown />
        </button>
      )}
      {showList && (
        <SuggestList
          id={listId}
          role="listbox"
          ref={listRef}
          aria-label={ariaLabel}
          $up={place.up}
          style={{ maxHeight: place.maxHeight }}
        >
          {items.map((item, i) => (
            <SuggestItem
              key={item.value}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              $active={i === active || item.value === value}
              onMouseDown={(e) => {
                e.preventDefault();
                pick(item);
              }}
              onMouseEnter={() => setActive(i)}
              data-decorator-ignore="true"
            >
              {item.swatch && <SuggestSwatch $color={item.value} />}
              {item.slow && (
                <FiAlertCircle
                  title="Повільно на слабких пристроях"
                  style={{ flexShrink: 0, color: "#60a5fa" }}
                />
              )}
              {item.risky && (
                <FiAlertTriangle
                  title="Може зламати вигляд сайту — змінюйте в міру"
                  style={{ flexShrink: 0, color: "var(--d-accent)" }}
                />
              )}
              <code>{item.value}</code>
              <span>{item.label}</span>
            </SuggestItem>
          ))}
        </SuggestList>
      )}
    </SuggestWrap>
  );
};

// Елементи без ::before (замінювані): на них каркас 3D-грані не намалювати
const REPLACED_TAGS = /^(img|input|select|textarea|video|iframe|canvas|svg|hr|br|progress|meter)$/;

const DecoratorModal = ({ targetElement, onClose, onSelectParent, parentTag }) => {
  const { applyStyle, getOverridesForElement, isDarkMode, activePreset } = useDecorator();

  // Чекбокси «що редагуємо»: зміна записується в усі позначені комбінації тема × стан
  const siteTheme = isDarkMode ? "dark" : "light";
  const [themes, setThemes] = useState([siteTheme]);
  const [states, setStates] = useState(["default"]);
  // Основна комбінація — з неї показуємо значення в полях
  const activeTheme = themes.includes(siteTheme) ? siteTheme : themes[0];
  const activeState = states.includes("default") ? "default" : states[0];
  // Хоча б один пункт у кожній групі лишається позначеним
  const toggleIn = (setList, value) =>
    setList((prev) =>
      prev.includes(value) ? (prev.length > 1 ? prev.filter((v) => v !== value) : prev) : [...prev, value],
    );
  const [newPropName, setNewPropName] = useState("");
  const [newPropValue, setNewPropValue] = useState("");
  const [customError, setCustomError] = useState("");
  const [activeGroup, setActiveGroup] = useState(NAV_GROUPS[0].id);
  const [fileError, setFileError] = useState({});
  const fontInputRef = useRef(null);
  const [fontPacks, setFontPacks] = useState([]);
  const [googleDraft, setGoogleDraft] = useState(null); // null — поле «інший Google-шрифт» сховане
  const [fontBusy, setFontBusy] = useState(false);

  // Власні шрифти з бібліотеки (ті самі, що в «Параметрах» → шрифт)
  useEffect(() => {
    listFontPacks().then(setFontPacks);
  }, []);

  const currentMode = `${activeTheme}_${activeState}`;
  // Усі позначені режими; основний — першим (fixedState — лише цей стан)
  const modesFor = (fixedState) => {
    const list = themes.flatMap((t) => (fixedState ? [fixedState] : states).map((st) => `${t}_${st}`));
    const primary = `${activeTheme}_${fixedState || activeState}`;
    return [primary, ...list.filter((m) => m !== primary)];
  };
  const targetModes = modesFor();
  const asList = (modes) => (Array.isArray(modes) ? modes : [modes]);

  const tagName = targetElement?.tagName?.toLowerCase() || "?";
  const elementId = targetElement ? getUniqueSelector(targetElement) : "";

  const [editedStyles, setEditedStyles] = useState({});

  // Завантажуємо збережені стилі лише при зміні елемента (інакше ввід скидався б при кожному оновленні контексту)
  useEffect(() => {
    if (elementId) {
      setEditedStyles(JSON.parse(JSON.stringify(getOverridesForElement(elementId))));
    }
  }, [elementId]);

  // Попередній перегляд 3D: каркасу (::before) потрібна точка відліку, поки редактор відкритий.
  // Після «Застосувати» це робить DecoratorRuntime.
  const preview3d = !!(editedStyles.light_default?.["--dec-3d"] || editedStyles.dark_default?.["--dec-3d"]);
  useEffect(() => {
    if (!preview3d || !targetElement || getComputedStyle(targetElement).position !== "static") {
      return undefined;
    }
    targetElement.style.position = "relative";
    return () => targetElement.style.removeProperty("position");
  }, [preview3d, targetElement]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // modes — один режим або список (за замовчуванням — усі позначені чекбоксами)
  const handleChange = (key, value, modes = targetModes) => {
    setEditedStyles((prev) => {
      const next = { ...prev };
      asList(modes).forEach((mode) => {
        const modeStyles = { ...(prev[mode] || {}) };
        if (value === "" || value == null) delete modeStyles[key];
        else modeStyles[key] = value;
        next[mode] = modeStyles;
      });
      return next;
    });
  };

  const handleCursorFile = async (e, mode) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setFileError((prev) => ({ ...prev, cursor: "Оберіть зображення (PNG, JPG, GIF, WebP або SVG)" }));
      return;
    }
    if (file.size > MAX_CURSOR_KB * 1024) {
      setFileError((prev) => ({ ...prev, cursor: `Файл завеликий — максимум ${MAX_CURSOR_KB} КБ` }));
      return;
    }
    try {
      let url = await readAsDataUrl(file);
      // GIF і SVG не зменшуємо: canvas втратив би анімацію та чіткість
      if (!/gif|svg/.test(file.type)) url = (await shrinkImage(url, 128)) || url;
      setFileError((prev) => ({ ...prev, cursor: "" }));
      handleChange("--dec-cursor-image", `url("${url}")`, mode);
    } catch {
      setFileError((prev) => ({ ...prev, cursor: "Не вдалося прочитати файл" }));
    }
  };

  const handleAddCustom = () => {
    const name = toCamel(newPropName);
    if (!/^(--)?[a-zA-Z][a-zA-Z0-9-]*$/.test(name)) {
      setCustomError("Некоректна назва властивості");
      return;
    }
    if (!newPropValue.trim()) {
      setCustomError("Вкажіть значення");
      return;
    }
    handleChange(name, newPropValue.trim());
    setNewPropName("");
    setNewPropValue("");
    setCustomError("");
  };

  // Очищає всі позначені теми (обидва стани кожної)
  const clearCurrentTheme = () => {
    setEditedStyles((prev) => {
      const next = { ...prev };
      themes.forEach((t) => {
        next[`${t}_default`] = {};
        next[`${t}_hover`] = {};
      });
      return next;
    });
  };

  const handleApply = () => {
    const existing = getOverridesForElement(elementId);

    MODES.forEach((mode) => {
      const modeStyles = editedStyles[mode] || {};
      const oldStyles = existing[mode] || {};
      const props = new Set([...Object.keys(modeStyles), ...Object.keys(oldStyles)]);

      props.forEach((cssProp) => {
        if (FORBIDDEN_PROPS.has(cssProp)) return;
        const next = modeStyles[cssProp] || "";
        const prev = oldStyles[cssProp] || "";
        if (next !== prev) {
          applyStyle(elementId, tagName, cssProp, prev, next, mode);
        }
      });
    });

    onClose();
  };

  const handlePassthrough = () => {
    onClose();
    setTimeout(() => {
      if (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select"
      ) {
        targetElement.focus();
      } else {
        targetElement.click();
      }
    }, 10);
  };

  if (!targetElement) return null;

  const currentModeStyles = editedStyles[currentMode] || {};
  const customProps = Object.entries(currentModeStyles).filter(
    ([k]) => !KNOWN_PROPS.has(k) && !FORBIDDEN_PROPS.has(k),
  );
  const groupMode = (group) => modesFor(group?.fixedState);
  // Значення показуємо з основного (першого) режиму
  const stylesFor = (modes) => editedStyles[asList(modes)[0]] || {};

  const previewCss = buildOverridesCss(elementId, editedStyles);
  // Що завадить побачити 3D-грань: замінюваний елемент або overflow, що обрізає ::before
  const cubeBlocker = (() => {
    if (REPLACED_TAGS.test(tagName)) return "replaced";
    const cs = getComputedStyle(targetElement);
    return cs.overflowX !== "visible" || cs.overflowY !== "visible" ? "clip" : "";
  })();
  // Пропозиція для 3D: якщо в кнопки немає рамки (ні своєї, ні з Декоратора) — рамка кольору ребер.
  // Повертає готове значення border або "" (рамка вже є)
  const cubeBorderHint = (() => {
    const def = editedStyles[`${activeTheme}_default`] || {};
    if (def.border && def.border !== "none") return "";
    const cs = getComputedStyle(targetElement);
    const hasBorder = ["Top", "Right", "Bottom", "Left"].some(
      (side) => cs[`border${side}Style`] !== "none" && parseFloat(cs[`border${side}Width`]) > 0,
    );
    if (hasBorder && def.border !== "none") return "";
    const edge = def["--dec-3d-color"];
    return `2px solid ${edge && edge.startsWith("#") ? edge : rgbToHex(cs.color)}`;
  })();
  const changedCount = Object.keys(currentModeStyles).filter(
    (k) => !FORBIDDEN_PROPS.has(k) && !SECONDARY_PROPS.has(k),
  ).length;

  const renderTransform = (cssProp, val, placeholder) => {
    const fields = parseTransform(val);
    const setField = (key, v) =>
      handleChange(cssProp, buildTransform({ ...fields, [key]: v }, val));
    return (
      <>
        <TransformGrid>
          {TRANSFORM_FIELDS.map((f) => (
            <MiniField key={f.key}>
              {f.label}
              <PropInput
                type="number"
                step={f.step}
                value={fields[f.key] ?? ""}
                placeholder={String(f.def)}
                onChange={(e) => setField(f.key, e.target.value)}
                data-decorator-ignore="true"
              />
            </MiniField>
          ))}
        </TransformGrid>
        <SuggestField
          value={val}
          onChange={(v) => handleChange(cssProp, v)}
          suggestions={VALUE_SUGGESTIONS.transform}
          placeholder={placeholder}
          ariaLabel="Трансформація: CSS"
        />
      </>
    );
  };

  const renderColor = (value, onChange, label, placeholder) => (
    <Controls>
      <Swatch $color={value} $empty={!value} title={value || "Не задано"}>
        <input
          type="color"
          value={rgbToHex(value)}
          onChange={(e) => onChange(e.target.value)}
          aria-label={`${label}: палітра`}
          data-decorator-ignore="true"
        />
      </Swatch>
      <SuggestField
        value={value}
        onChange={onChange}
        suggestions={COLOR_SUGGESTIONS}
        placeholder={placeholder}
        ariaLabel={label}
      />
    </Controls>
  );

  const renderSwitch = (on, onToggle, label) => (
    <>
      <Switch
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        $on={on}
        onClick={onToggle}
        data-decorator-ignore="true"
      />
      <SwitchLabel $on={on}>{on ? "Увімкнено" : "Вимкнено"}</SwitchLabel>
    </>
  );

  const renderControl = ({ cssProp, label, type, placeholder }, val, mode = targetModes) => {
    const styles = stylesFor(mode);

    if (type === "gradient") {
      const hasValue = !!val && val !== "none";
      const parsed = parseGradient(val);
      const g = parsed || DEFAULT_GRADIENT;
      const simple = !hasValue || !!parsed;
      const setG = (patch) => handleChange(cssProp, buildGradient({ ...g, ...patch }), mode);
      return (
        <>
          <GradientPreview
            $draft={!hasValue}
            style={{ background: hasValue ? val : buildGradient(g) }}
            title={hasValue ? val : "Зразок — ще не застосовано"}
          />
          {simple ? (
            <>
              <Segmented role="radiogroup" aria-label="Тип градієнта">
                {[
                  ["linear", "Лінійний"],
                  ["radial", "Радіальний (коло)"],
                ].map(([id, text]) => (
                  <SegmentBtn
                    key={id}
                    type="button"
                    role="radio"
                    aria-checked={g.type === id}
                    $active={g.type === id}
                    onClick={() => setG({ type: id })}
                    data-decorator-ignore="true"
                  >
                    {text}
                  </SegmentBtn>
                ))}
              </Segmented>
              {g.type === "linear" && (
                <Segmented role="radiogroup" aria-label="Напрямок градієнта">
                  {GRADIENT_ANGLES.map(([angle, arrow, hint]) => (
                    <SegmentBtn
                      key={angle}
                      type="button"
                      role="radio"
                      aria-checked={g.angle === angle}
                      aria-label={hint}
                      title={hint}
                      $active={g.angle === angle}
                      onClick={() => setG({ angle })}
                      data-decorator-ignore="true"
                    >
                      {arrow}
                    </SegmentBtn>
                  ))}
                </Segmented>
              )}
              <PropDesc>Перший колір</PropDesc>
              {renderColor(g.from, (v) => setG({ from: v || DEFAULT_GRADIENT.from }), "Перший колір", "#ffb36c")}
              <PropDesc>Другий колір</PropDesc>
              {renderColor(g.to, (v) => setG({ to: v || DEFAULT_GRADIENT.to }), "Другий колір", "#a855f7")}
            </>
          ) : (
            <PropDesc>Градієнт складніший за два кольори — змінюйте його текстом нижче.</PropDesc>
          )}
          <PropDesc>Готовий градієнт або свій CSS</PropDesc>
          <SuggestField
            value={val}
            onChange={(v) => handleChange(cssProp, v, mode)}
            suggestions={GRADIENT_SUGGESTIONS}
            placeholder="linear-gradient(135deg, #ffb36c, #a855f7)"
            ariaLabel={label}
          />
          <GradientHelp>
            <summary>Як написати свій градієнт</summary>
            <div>
              <p>
                <b>Лінійний:</b> <code>linear-gradient(напрямок, колір1, колір2, …)</code> — кольори
                плавно переходять уздовж прямої.
              </p>
              <ul>
                <li>
                  Напрямок — кут: <code>90deg</code> зліва направо, <code>180deg</code> згори вниз,{" "}
                  <code>135deg</code> по діагоналі. Або словами: <code>to right</code>,{" "}
                  <code>to bottom right</code>.
                </li>
                <li>
                  Кольорів може бути скільки завгодно:{" "}
                  <code>linear-gradient(90deg, red, yellow, green)</code>.
                </li>
                <li>
                  Позиції кажуть, де починається колір:{" "}
                  <code>#ffb36c 0%, #ef4444 50%, #a855f7 100%</code>.
                </li>
                <li>
                  Однакові позиції дають різку межу — смуги: <code>red 50%, blue 50%</code>.
                </li>
              </ul>
              <p>
                <b>Радіальний:</b> <code>radial-gradient(circle, колір1, колір2)</code> — коло, що
                розходиться з центру.
              </p>
              <p>
                <b>Прозорість:</b> <code>transparent</code> або <code>rgba(0,0,0,0.6)</code>.
                Наприклад, <code>linear-gradient(transparent, rgba(0,0,0,0.6))</code> — затемнення
                знизу, щоб текст читався на картинці.
              </p>
              <p>
                Градієнт лягає поверх «Кольору фону». Щоб повернути звичайний фон — <code>none</code>{" "}
                або кнопка «Скинути».
              </p>
            </div>
          </GradientHelp>
        </>
      );
    }

    if (type === "cursorImage") {
      const src = parseCssUrl(val);
      const size = styles["--dec-cursor-size"] || "32px";
      return (
        <>
          <Controls>
            <ImagePreview>{src ? <img src={src} alt="" /> : <FiImage />}</ImagePreview>
            <UploadBtn data-decorator-ignore="true">
              <FiUpload /> {src ? "Замінити" : "Фото або GIF"}
              <input
                type="file"
                accept="image/png,image/jpeg,image/gif,image/webp,image/svg+xml"
                onChange={(e) => handleCursorFile(e, mode)}
                data-decorator-ignore="true"
              />
            </UploadBtn>
            <SelectWrap $flex="0 0 104px">
              <Select
                value={size}
                disabled={!src}
                onChange={(e) =>
                  handleChange("--dec-cursor-size", e.target.value === "32px" ? "" : e.target.value, mode)
                }
                aria-label="Розмір курсора"
                data-decorator-ignore="true"
              >
                {CURSOR_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Select>
              <FiChevronDown />
            </SelectWrap>
          </Controls>
          {fileError.cursor && <ErrorText role="alert">{fileError.cursor}</ErrorText>}
        </>
      );
    }

    if (type === "blockText") {
      // Що зараз написано в елементі (перший непорожній текстовий вузол)
      let current = "";
      if (targetElement) {
        const walker = document.createTreeWalker(targetElement, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => (node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
        });
        current = walker.nextNode()?.nodeValue.trim() || "";
      }
      if (!current && !val) {
        return (
          <Warning role="note" $tone="hint">
            <FiInfo />
            <span>У цьому елементі немає тексту. Виберіть сам напис або кнопку з написом.</span>
          </Warning>
        );
      }
      return (
        <>
          <PropInput
            value={val}
            maxLength={200}
            onChange={(e) => handleChange(cssProp, e.target.value.trim() ? e.target.value : "", mode)}
            placeholder={current ? `Зараз: ${current}` : "Свій текст"}
            aria-label={label}
            style={{ fontFamily: "inherit", fontSize: 14 }}
            data-decorator-ignore="true"
          />
          <PropDesc>
            Змінюється лише головний напис — іконки й решта вмісту лишаються. Новий текст з'явиться
            після «Застосувати»; в «Оригіналі» сайт покаже справжній.
          </PropDesc>
        </>
      );
    }

    if (type === "clickFx") {
      const color = styles["--dec-click-fx-color"] || "";
      const preview = (e, id) => {
        const box = e.currentTarget.getBoundingClientRect();
        playClickEffect(id, box.left + box.width / 2, box.top + box.height / 2, color || undefined);
      };
      return (
        <>
          <Controls>
            <SelectWrap>
              <Select
                value={val}
                onChange={(e) => handleChange(cssProp, e.target.value, mode)}
                aria-label={label}
                data-decorator-ignore="true"
              >
                <option value="">Без ефекту</option>
                {CLICK_EFFECTS.map((fx) => (
                  <option key={fx.id} value={fx.id}>
                    {fx.label} — {fx.hint}
                  </option>
                ))}
              </Select>
              <FiChevronDown />
            </SelectWrap>
            <IconBtn
              type="button"
              disabled={!val}
              onClick={(e) => preview(e, val)}
              aria-label="Показати ефект"
              title="Показати ефект"
              data-decorator-ignore="true"
            >
              <FiPlay />
            </IconBtn>
          </Controls>
          {val && (
            <>
              <PropDesc>Колір частинок</PropDesc>
              {renderColor(color, (v) => handleChange("--dec-click-fx-color", v, mode), "Колір частинок", "різнобарвні — як задумано ефектом")}
            </>
          )}
        </>
      );
    }

    if (type === "font") {
      const src = styles["--dec-font-src"] || "";
      const choice = val ? parseFontSrc(src) : null;
      const isListedGoogle =
        choice?.kind === "google" && GOOGLE_FONTS.some((f) => f.name.toLowerCase() === choice.name.toLowerCase());
      const selectValue = !choice
        ? ""
        : choice.kind === "google" && !isListedGoogle
          ? "google-custom"
          : choice.kind === "google"
            ? `google:${GOOGLE_FONTS.find((f) => f.name.toLowerCase() === choice.name.toLowerCase()).name}`
            : src;
      const setFont = (next) => {
        const result = fontStyles(next);
        if (!result) {
          ["fontFamily", "--font-family", "--dec-font-src"].forEach((key) => handleChange(key, "", mode));
          return;
        }
        ensureDecoratorFont(result.src);
        handleChange("fontFamily", result.stack, mode);
        handleChange("--font-family", result.stack, mode);
        handleChange("--dec-font-src", result.src, mode);
      };
      const onSelect = (value) => {
        setFileError((prev) => ({ ...prev, font: "" }));
        if (value === "google-custom") {
          setGoogleDraft(choice?.kind === "google" ? choice.name : "");
          return;
        }
        if (value === "file") {
          fontInputRef.current?.click();
          return;
        }
        setGoogleDraft(null);
        if (!value) return setFont(null);
        if (value === "system") return setFont({ kind: "system" });
        const [kind, ...rest] = value.split(":");
        const name = rest.join(":");
        if (kind === "stykhiia") setFont({ kind, id: name });
        else if (kind === "google") setFont({ kind, name });
        else if (kind === "pack") setFont({ kind, id: name });
      };
      const onFontFiles = async (e) => {
        const files = [...(e.target.files || [])];
        e.target.value = "";
        if (!files.length) return;
        setFontBusy(true);
        try {
          const meta = await saveFontPack(await readFontPack(files));
          setFontPacks(await listFontPacks());
          setFont({ kind: "pack", id: meta.id });
          setFileError((prev) => ({ ...prev, font: "" }));
        } catch (err) {
          setFileError((prev) => ({ ...prev, font: err?.message || "Не вдалося додати шрифт" }));
        } finally {
          setFontBusy(false);
        }
      };
      return (
        <>
          <SelectWrap>
            <Select
              value={googleDraft !== null ? "google-custom" : selectValue}
              onChange={(e) => onSelect(e.target.value)}
              aria-label={label}
              disabled={fontBusy}
              data-decorator-ignore="true"
            >
              <option value="">Як на сайті</option>
              <option value="system">Без шрифта — системний шрифт пристрою</option>
              <optgroup label="Шрифти Стихії">
                {STYKHIIA_FONTS.map((f) => (
                  <option key={f.id} value={`stykhiia:${f.id}`}>
                    Стихія {f.label}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Google Fonts">
                {GOOGLE_FONTS.map((f) => (
                  <option key={f.name} value={`google:${f.name}`}>
                    {f.name} — {f.hint}
                  </option>
                ))}
                <option value="google-custom">
                  {choice?.kind === "google" && !isListedGoogle ? `Інший: ${choice.name}` : "Інший шрифт з Google Fonts…"}
                </option>
              </optgroup>
              <optgroup label="Мої шрифти">
                {fontPacks.map((pack) => (
                  <option key={pack.id} value={`pack:${pack.id}`}>
                    {pack.name}
                  </option>
                ))}
                <option value="file">{fontBusy ? "Додаю шрифт…" : "Завантажити файл шрифту (.ttf, .otf, .woff, .zip)…"}</option>
              </optgroup>
            </Select>
            <FiChevronDown />
          </SelectWrap>
          <input
            ref={fontInputRef}
            type="file"
            accept=".ttf,.otf,.woff,.woff2,.zip,font/*"
            multiple
            hidden
            onChange={onFontFiles}
            data-decorator-ignore="true"
          />
          {googleDraft !== null && (
            <Controls>
              <SuggestField
                value={googleDraft}
                onChange={setGoogleDraft}
                suggestions={GOOGLE_FONTS.map((f) => ({ value: f.name, label: f.hint }))}
                onEnter={() => googleDraft.trim() && (setFont({ kind: "google", name: googleDraft }), setGoogleDraft(null))}
                placeholder="Назва з fonts.google.com, напр. Lobster"
                ariaLabel="Назва шрифту з Google Fonts"
              />
              <AddBtn
                type="button"
                disabled={!googleDraft.trim()}
                onClick={() => {
                  setFont({ kind: "google", name: googleDraft });
                  setGoogleDraft(null);
                }}
                aria-label="Застосувати шрифт"
                title="Застосувати"
                data-decorator-ignore="true"
              >
                <FiCheck />
              </AddBtn>
            </Controls>
          )}
          <FontPreview style={{ fontFamily: val || "inherit" }}>
            Погода в Конотопі −3°C, сніг · Ґґ Єє Її 0123
          </FontPreview>
          {fileError.font && <ErrorText role="alert">{fileError.font}</ErrorText>}
        </>
      );
    }

    if (type === "react") {
      const on = !!val;
      return (
        <>
          <Controls>{renderSwitch(on, () => handleChange(cssProp, on ? "" : "1", mode), label)}</Controls>
          {on &&
            renderColor(
              styles["--dec-react-color"] || "",
              (v) => handleChange("--dec-react-color", v, mode),
              "Колір тіні",
              "як у тексту",
            )}
        </>
      );
    }

    if (type === "threeD") {
      const on = !!val;
      const depth = styles["--dec-3d-depth"] || CUBE_DEFAULT_DEPTH;
      return (
        <>
        <Controls>
          {renderSwitch(on, () => handleChange(cssProp, on ? "" : "1", mode), label)}
          {on && (
            <SelectWrap $flex="0 0 130px">
              <Select
                value={depth}
                onChange={(e) =>
                  handleChange(
                    "--dec-3d-depth",
                    e.target.value === CUBE_DEFAULT_DEPTH ? "" : e.target.value,
                    mode,
                  )
                }
                aria-label="Глибина задньої грані"
                data-decorator-ignore="true"
              >
                {EDGE_DEPTHS.map((d) => (
                  <option key={d} value={d}>
                    Грань {d}
                  </option>
                ))}
              </Select>
              <FiChevronDown />
            </SelectWrap>
          )}
        </Controls>
          {on && (
            <>
              <PropDesc>Положення задньої грані</PropDesc>
              <Segmented role="radiogroup" aria-label="Положення задньої грані">
                {Object.entries(CUBE_DIR_ICONS).map(([id, DirIcon]) => {
                  const active = (styles["--dec-3d-dir"] || CUBE_DEFAULT_DIR) === id;
                  return (
                    <SegmentBtn
                      key={id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      aria-label={CUBE_DIRECTIONS[id].label}
                      title={CUBE_DIRECTIONS[id].label}
                      $active={active}
                      onClick={() =>
                        handleChange("--dec-3d-dir", id === CUBE_DEFAULT_DIR ? "" : id, mode)
                      }
                      data-decorator-ignore="true"
                    >
                      <DirIcon />
                    </SegmentBtn>
                  );
                })}
              </Segmented>
              <PropDesc>Колір ребер</PropDesc>
              {renderColor(
                styles["--dec-3d-color"] || "",
                (v) => handleChange("--dec-3d-color", v, mode),
                "Колір ребер",
                "як у тексту",
              )}
              <PropDesc>Заливка всередині граней</PropDesc>
              {(() => {
                const fill = styles["--dec-3d-fill"] || "";
                const fillMode = !fill ? "button" : fill === "transparent" ? "none" : "custom";
                const setFill = (v) => handleChange("--dec-3d-fill", v, mode);
                return (
                  <>
                    <Segmented role="radiogroup" aria-label="Заливка всередині граней">
                      {[
                        ["button", "Як кнопка", ""],
                        ["custom", "Свій колір", "#000000"],
                        ["none", "Без заливки", "transparent"],
                      ].map(([id, text, value]) => (
                        <SegmentBtn
                          key={id}
                          type="button"
                          role="radio"
                          aria-checked={fillMode === id}
                          $active={fillMode === id}
                          onClick={() => fillMode !== id && setFill(value)}
                          data-decorator-ignore="true"
                        >
                          {text}
                        </SegmentBtn>
                      ))}
                    </Segmented>
                    {fillMode === "custom" && renderColor(fill, setFill, "Колір заливки", "#000000")}
                  </>
                );
              })()}
            </>
          )}
          {on && !cubeBlocker && cubeBorderHint && (
            <Warning role="note" $tone="hint">
              <FiInfo />
              <span>
                Пропозиція: у кнопки немає рамки — прибрати заокруглення й додати рамку{" "}
                <code>{cubeBorderHint}</code>, щоб куб мав чіткі ребра.
              </span>
              <GhostBtn
                onClick={() => {
                  handleChange("border", cubeBorderHint, mode);
                  handleChange("borderRadius", "0", mode);
                }}
                data-decorator-ignore="true"
              >
                <FiCheck /> Застосувати
              </GhostBtn>
            </Warning>
          )}
          {cubeBlocker && (
            <Warning role="note">
              <FiAlertTriangle />
              <span>
                {cubeBlocker === "replaced"
                  ? `На <${tagName}> грань не намалювати.`
                  : "Цей елемент обрізає все поза своїми межами (overflow), тож грані не буде видно."}{" "}
                {parentTag ? "Виберіть батьківський елемент — наприклад, саму кнопку замість напису в ній." : ""}
              </span>
              {parentTag && (
                <GhostBtn onClick={onSelectParent} data-decorator-ignore="true">
                  <FiCornerLeftUp /> &lt;{parentTag}&gt;
                </GhostBtn>
              )}
            </Warning>
          )}
        </>
      );
    }

    if (type === "color") {
      return renderColor(val, (v) => handleChange(cssProp, v), label, "#ffb36c або transparent");
    }

    if (type === "cursor") {
      return (
        <SelectWrap>
          <Select
            value={val}
            onChange={(e) => handleChange(cssProp, e.target.value)}
            data-decorator-ignore="true"
            aria-label={`${label}: вигляд курсора`}
          >
            <option value="">Успадковується</option>
            <option value="default">Стрілка (default)</option>
            <option value="pointer">Вказівник (pointer)</option>
            <option value="grab">Рука відкрита (grab)</option>
            <option value="grabbing">Рука стиснута (grabbing)</option>
            <option value="zoom-in">Збільшення (zoom-in)</option>
            <option value="zoom-out">Зменшення (zoom-out)</option>
            <option value="text">Текст (text)</option>
            <option value="not-allowed">Заборонено (not-allowed)</option>
            <option value="help">Довідка (help)</option>
            <option value="wait">Очікування (wait)</option>
            <option value="move">Переміщення (move)</option>
          </Select>
          <FiChevronDown />
        </SelectWrap>
      );
    }

    if (type === "border") {
      const parsed = parseBorder(val);
      const widths = BORDER_WIDTHS.includes(parsed.width)
        ? BORDER_WIDTHS
        : [...BORDER_WIDTHS, parsed.width];
      const set = (w, s, c) => handleChange(cssProp, combineBorder(w, s, c));
      return (
        <>
          <Controls>
            <SelectWrap $flex={1} $min="76px">
              <Select
                value={parsed.width}
                onChange={(e) => set(e.target.value, parsed.style, parsed.color)}
                data-decorator-ignore="true"
                aria-label={`${label}: товщина`}
              >
                {widths.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </Select>
              <FiChevronDown />
            </SelectWrap>
            <SelectWrap $flex={2}>
              <Select
                value={parsed.style}
                onChange={(e) => set(parsed.width, e.target.value, parsed.color)}
                data-decorator-ignore="true"
                aria-label={`${label}: стиль`}
              >
                <option value="none">Немає</option>
                <option value="solid">Суцільна</option>
                <option value="double">Подвійна</option>
                <option value="dashed">Штрихова</option>
                <option value="dotted">Пунктирна</option>
                <option value="groove">3D жолоб</option>
                <option value="ridge">3D гребінь</option>
                <option value="inset">3D втиснута</option>
                <option value="outset">3D витиснута</option>
              </Select>
              <FiChevronDown />
            </SelectWrap>
          </Controls>
          {parsed.style !== "none" &&
            renderColor(
              parsed.color,
              (c) => set(parsed.width, parsed.style, c),
              `${label}: колір`,
              "#ffb36c",
            )}
        </>
      );
    }

    if (type === "transform") return renderTransform(cssProp, val, placeholder);

    return (
      <>
        <SuggestField
          value={val}
          onChange={(v) => handleChange(cssProp, v)}
          suggestions={suggestionsFor(cssProp)}
          placeholder={placeholder || "успадковується"}
          ariaLabel={label}
        />
        {isSlowValue(val) && (
          <SlowNote role="note">
            <FiAlertCircle />
            Розмиття повільне на слабких пристроях: телефони й старі ноутбуки можуть гальмувати під час
            прокрутки. Краще невеликі значення, наприклад blur(4px).
          </SlowNote>
        )}
      </>
    );
  };

  // Режим, у якому живе властивість: власний fixedState картки важливіший за групу
  const propMode = (prop, group) => (prop.fixedState ? modesFor(prop.fixedState) : groupMode(group));
  const groupCount = (group) => {
    if (group.id === "custom") return customProps.length;
    return group.props.filter((key) => {
      const prop = EDITABLE_PROPS_CONFIG[key];
      return stylesFor(propMode(prop, group))[prop.cssProp];
    }).length;
  };
  const currentGroup = NAV_GROUPS.find((g) => g.id === activeGroup) || NAV_GROUPS[0];
  const CurrentIcon = currentGroup.icon;

  const resetProp = (prop, modes) =>
    setEditedStyles((prev) => {
      const next = { ...prev };
      asList(modes).forEach((mode) => {
        const modeStyles = { ...(prev[mode] || {}) };
        [prop.cssProp, ...(prop.extraKeys || [])].forEach((key) => delete modeStyles[key]);
        next[mode] = modeStyles;
      });
      return next;
    });

  const renderPropCard = (prop, groupModeValue = targetModes) => {
    const mode = prop.fixedState ? modesFor(prop.fixedState) : groupModeValue;
    const modes = asList(mode);
    const val = stylesFor(mode)[prop.cssProp] || "";
    // У позначених комбінаціях різні значення — зміна їх вирівняє
    const mixed = new Set(modes.map((m) => (editedStyles[m] || {})[prop.cssProp] || "")).size > 1;
    const changed = modes.some((m) => (editedStyles[m] || {})[prop.cssProp]);
    const Icon = prop.icon;
    return (
      <PropCard key={prop.cssProp} $changed={changed}>
        <PropHead>
          <PropIcon $changed={changed}>
            <Icon />
          </PropIcon>
          <PropText>
            <PropLabel>
              {prop.label}
              {mixed ? (
                <ChangedTag title="У позначених темах/станах значення різні — нове значення запишеться в усі">
                  різні значення
                </ChangedTag>
              ) : (
                val && <ChangedTag>змінено</ChangedTag>
              )}
            </PropLabel>
            <PropDesc>{prop.desc}</PropDesc>
          </PropText>
          {changed && (
            <ResetBtn
              onClick={() => resetProp(prop, mode)}
              aria-label={`Скинути: ${prop.label}`}
              title="Скинути"
              data-decorator-ignore="true"
            >
              <FiRotateCcw />
            </ResetBtn>
          )}
        </PropHead>
        {renderControl(prop, val, mode)}
      </PropCard>
    );
  };

  const renderCustomCss = () => (
    <PropCard $wide $changed={customProps.length > 0}>
      <PropHead>
        <PropIcon $changed={customProps.length > 0}>
          <FiCode />
        </PropIcon>
        <PropText>
          <PropLabel>Власні властивості</PropLabel>
          <PropDesc>Будь-яка CSS-властивість. Почніть вводити назву — з'являться підказки. Enter — додати</PropDesc>
        </PropText>
      </PropHead>

      {customProps.length === 0 && <EmptyNote>Власних властивостей ще немає</EmptyNote>}

      {customProps.map(([name, value]) => (
        <Controls key={name}>
          <CustomName title={name}>{name}</CustomName>
          <SuggestField
            value={value}
            onChange={(v) =>
              // Порожнє значення під час введення не видаляє рядок — пишемо як є в усі позначені
              setEditedStyles((prev) => {
                const next = { ...prev };
                targetModes.forEach((m) => {
                  next[m] = { ...(prev[m] || {}), [name]: v };
                });
                return next;
              })
            }
            suggestions={suggestionsFor(name)}
            ariaLabel={name}
          />
          <ResetBtn
            onClick={() => handleChange(name, "")}
            aria-label={`Прибрати ${name}`}
            title="Прибрати"
            data-decorator-ignore="true"
          >
            <FiX />
          </ResetBtn>
        </Controls>
      ))}

      <Controls>
        <SuggestField
          value={newPropName}
          onChange={setNewPropName}
          suggestions={PROPERTY_SUGGESTIONS}
          placeholder="властивість, напр. letter-spacing"
          ariaLabel="Назва властивості"
        />
        <SuggestField
          value={newPropValue}
          onChange={setNewPropValue}
          suggestions={suggestionsFor(newPropName.trim())}
          onEnter={handleAddCustom}
          placeholder="значення"
          ariaLabel="Значення властивості"
        />
        <AddBtn
          onClick={handleAddCustom}
          aria-label="Додати властивість"
          title="Додати"
          data-decorator-ignore="true"
        >
          <FiPlus />
        </AddBtn>
      </Controls>
      {customError && <ErrorText role="alert">{customError}</ErrorText>}
      {(isRiskyProp(newPropName) || customProps.some(([name]) => isRiskyProp(name))) && (
        <Warning role="note">
          <FiAlertTriangle />
          <span>
            <b>Будьте в міру.</b> Ширина, висота, прозорість, відступи, розмір шрифту та інші
            властивості розміщення можуть зламати вигляд сайту або зробити його незручним: блоки
            наїжджають один на одного, текст обрізається, кнопки зникають. Змінюйте потроху й
            перевіряйте результат — скасувати можна в «Журналі змін» або режимом «Оригінал».
          </span>
        </Warning>
      )}
    </PropCard>
  );

  return (
    <Overlay
      // pageActivity.js ставить на паузу анімації поза «активною» модалкою — першою з aria-modal.
      // Коли відкриті «Параметри», активними вважаються вони, і поява Декоратора (opacity 0 → 1)
      // застигала посередині — вікно лишалося напівпрозорим. Атрибут виводить його з-під паузи.
      data-active-overlay=""
      $light={!isDarkMode}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-decorator-ignore="true"
    >
      <style>{previewCss}</style>

      <Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="decorator-title"
        data-decorator-ignore="true"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <HeaderIcon>
            <FiPenTool />
          </HeaderIcon>
          <HeaderText>
            <Title id="decorator-title">
              Декоратор <TagBadge>&lt;{tagName}&gt;</TagBadge>
            </Title>
            <Subtitle>
              Декоративний шаблон {activePreset + 1} · інший шаблон не зміниться
            </Subtitle>
          </HeaderText>
          {parentTag && (
            <GhostBtn
              onClick={onSelectParent}
              title="Вибрати елемент, у якому лежить цей (наприклад, кнопку замість напису в ній)"
              data-decorator-ignore="true"
            >
              <FiCornerLeftUp /> Батьківський <TagBadge>&lt;{parentTag}&gt;</TagBadge>
            </GhostBtn>
          )}
          <IconBtn
            onClick={onClose}
            aria-label="Закрити"
            title="Закрити (Esc)"
            data-decorator-ignore="true"
          >
            <FiX />
          </IconBtn>
        </ModalHeader>

        <Main>
          <Sidebar aria-label="Розділи Декоратора">
            <SideLabel>Що редагуємо</SideLabel>
            <ModeBlock>
              {[
                {
                  label: "Тема сайту",
                  list: themes,
                  setList: setThemes,
                  items: [
                    ["light", "Денна", FiSun],
                    ["dark", "Темна", FiMoon],
                  ],
                },
                {
                  label: "Стан елемента",
                  list: states,
                  setList: setStates,
                  items: [
                    ["default", "Звичайний", FiSquare],
                    ["hover", "Наведення", FiMousePointer],
                  ],
                },
              ].map((group) => (
                <Segmented key={group.label} role="group" aria-label={group.label}>
                  {group.items.map(([id, text, ItemIcon]) => {
                    const on = group.list.includes(id);
                    return (
                      <SegmentBtn
                        key={id}
                        type="button"
                        role="checkbox"
                        aria-checked={on}
                        $active={on}
                        title={on && group.list.length === 1 ? "Хоча б один пункт має бути позначений" : undefined}
                        onClick={() => toggleIn(group.setList, id)}
                        data-decorator-ignore="true"
                      >
                        <CheckMark $on={on}>{on && <FiCheck />}</CheckMark>
                        <ItemIcon /> {text}
                      </SegmentBtn>
                    );
                  })}
                </Segmented>
              ))}
            </ModeBlock>
            <SideHint>
              {targetModes.length > 1
                ? `Зміни запишуться одразу в ${targetModes.length} варіанти. `
                : "Позначте кілька — зміна запишеться в усі одразу. "}
              {targetModes.length < 4 ? (
                <button
                  type="button"
                  onClick={() => {
                    setThemes(["light", "dark"]);
                    setStates(["default", "hover"]);
                  }}
                  data-decorator-ignore="true"
                >
                  Позначити всі 4
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setThemes([siteTheme]);
                    setStates(["default"]);
                  }}
                  data-decorator-ignore="true"
                >
                  Лише поточний вигляд
                </button>
              )}
            </SideHint>

            <SideLabel>Розділи</SideLabel>
            <NavList role="tablist" aria-orientation="vertical">
              {NAV_GROUPS.map((group) => {
                const active = group.id === currentGroup.id;
                const count = groupCount(group);
                const GroupIcon = group.icon;
                return (
                  <NavItem
                    key={group.id}
                    role="tab"
                    aria-selected={active}
                    $active={active}
                    onClick={() => setActiveGroup(group.id)}
                    data-decorator-ignore="true"
                  >
                    <NavIcon $active={active}>
                      <GroupIcon />
                    </NavIcon>
                    <NavText>{group.title}</NavText>
                    {count > 0 && <CountBadge aria-label={`змін: ${count}`}>{count}</CountBadge>}
                  </NavItem>
                );
              })}
            </NavList>

            <SideFooter>
              <span>
                {changedCount
                  ? `Змінено властивостей: ${changedCount}`
                  : "Для цього стану змін ще немає"}
              </span>
              <GhostBtn onClick={clearCurrentTheme} data-decorator-ignore="true">
                <FiRotateCcw /> Очистити тему
              </GhostBtn>
            </SideFooter>
          </Sidebar>

          <Content role="tabpanel" aria-label={currentGroup.title} data-suggest-scroll="">
            <ContentHead>
              <ContentIcon>
                <CurrentIcon />
              </ContentIcon>
              <div>
                <ContentTitle>{currentGroup.title}</ContentTitle>
                <ContentDesc>{currentGroup.desc}</ContentDesc>
              </div>
            </ContentHead>

            {currentGroup.fixedState && (
              <StateNote>
                {themes.length > 1 ? <FiSun /> : activeTheme === "dark" ? <FiMoon /> : <FiSun />} Діє для{" "}
                {themes.length > 1 ? "обох тем" : `теми «${activeTheme === "dark" ? "Темна" : "Денна"}»`} в обох
                станах — і без наведення, і з ним
              </StateNote>
            )}

            <CardsGrid>
              {currentGroup.id === "custom"
                ? renderCustomCss()
                : currentGroup.props.map((key) =>
                    renderPropCard(EDITABLE_PROPS_CONFIG[key], groupMode(currentGroup)),
                  )}
            </CardsGrid>
          </Content>
        </Main>

        <Footer>
          <PassthroughBtn
            onClick={handlePassthrough}
            title="Натиснути на елемент як зазвичай"
            data-decorator-ignore="true"
          >
            <FiPlay /> Виконати дію
          </PassthroughBtn>
          <ApplyBtn onClick={handleApply} data-decorator-ignore="true">
            <FiCheck /> Застосувати
          </ApplyBtn>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default DecoratorModal;
