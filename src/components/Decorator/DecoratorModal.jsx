import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  FiAperture,
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
} from "./DecoratorContext";

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
  &:hover {
    background: rgba(var(--d-ink), 0.08);
    color: var(--d-text);
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
  option {
    color: var(--d-text);
    background: var(--d-panel);
  }
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
};

const EDITABLE_PROPS = Object.values(EDITABLE_PROPS_CONFIG);
const KNOWN_PROPS = new Set(EDITABLE_PROPS.map((p) => p.cssProp));
const MODES = ["light_default", "light_hover", "dark_default", "dark_hover"];
const FORBIDDEN_PROPS = new Set(["opacity"]);

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

const toCamel = (name) =>
  name.startsWith("--") ? name : name.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());


// Розділи бічної навігації Декоратора
const NAV_GROUPS = [
  { id: "colors", title: "Кольори", desc: "Колір тексту та фону елемента", icon: FiDroplet, props: ["color", "backgroundColor"] },
  { id: "shape", title: "Рамка й форма", desc: "Межі, контур і заокруглення кутів", icon: FiSquare, props: ["border", "borderRadius", "outline"] },
  { id: "effects", title: "Ефекти", desc: "Тіні, розмиття та фільтри", icon: FiAperture, props: ["boxShadow", "textShadow", "backdropFilter", "filter"] },
  { id: "motion", title: "Рух і анімація", desc: "Зсув, поворот, масштаб і плавність переходів", icon: FiMove, props: ["transform", "transformOrigin", "transition"] },
  { id: "text", title: "Текст і курсор", desc: "Декорування тексту та вигляд курсора", icon: FiMousePointer, props: ["textDecoration", "cursor"] },
  { id: "custom", title: "Власний CSS", desc: "Будь-які інші CSS-властивості", icon: FiCode, props: [] },
];

const DecoratorModal = ({ targetElement, onClose }) => {
  const { applyStyle, getOverridesForElement, isDarkMode, activePreset } = useDecorator();

  const [activeTheme, setActiveTheme] = useState(isDarkMode ? "dark" : "light");
  const [activeState, setActiveState] = useState("default");
  const [newPropName, setNewPropName] = useState("");
  const [newPropValue, setNewPropValue] = useState("");
  const [customError, setCustomError] = useState("");
  const [activeGroup, setActiveGroup] = useState(NAV_GROUPS[0].id);

  const currentMode = `${activeTheme}_${activeState}`;

  const tagName = targetElement?.tagName?.toLowerCase() || "?";
  const elementId = targetElement ? getUniqueSelector(targetElement) : "";

  const [editedStyles, setEditedStyles] = useState({});

  // Завантажуємо збережені стилі лише при зміні елемента (інакше ввід скидався б при кожному оновленні контексту)
  useEffect(() => {
    if (elementId) {
      setEditedStyles(JSON.parse(JSON.stringify(getOverridesForElement(elementId))));
    }
  }, [elementId]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (key, value) => {
    setEditedStyles((prev) => {
      const modeStyles = { ...(prev[currentMode] || {}) };
      if (value === "" || value == null) delete modeStyles[key];
      else modeStyles[key] = value;
      return { ...prev, [currentMode]: modeStyles };
    });
  };

  const handleAddCustom = () => {
    const name = toCamel(newPropName);
    if (!/^(--)?[a-zA-Z][a-zA-Z0-9-]*$/.test(name)) {
      setCustomError("Некоректна назва властивості");
      return;
    }
    if (FORBIDDEN_PROPS.has(name)) {
      setCustomError("Прозорість (opacity) не підтримується");
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

  const clearCurrentTheme = () => {
    setEditedStyles((prev) => ({
      ...prev,
      [`${activeTheme}_default`]: {},
      [`${activeTheme}_hover`]: {},
    }));
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

  const previewCss = buildOverridesCss(elementId, editedStyles);
  const changedCount = Object.keys(currentModeStyles).filter((k) => !FORBIDDEN_PROPS.has(k)).length;

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
        <PropInput
          value={val}
          onChange={(e) => handleChange(cssProp, e.target.value)}
          placeholder={placeholder}
          aria-label="Трансформація: CSS"
          data-decorator-ignore="true"
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
      <PropInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        data-decorator-ignore="true"
      />
    </Controls>
  );

  const renderControl = ({ cssProp, label, type, placeholder }, val) => {
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
      <PropInput
        value={val}
        onChange={(e) => handleChange(cssProp, e.target.value)}
        placeholder={placeholder || "успадковується"}
        aria-label={label}
        data-decorator-ignore="true"
      />
    );
  };

  const groupCount = (group) =>
    group.id === "custom"
      ? customProps.length
      : group.props.filter((key) => currentModeStyles[EDITABLE_PROPS_CONFIG[key].cssProp]).length;
  const currentGroup = NAV_GROUPS.find((g) => g.id === activeGroup) || NAV_GROUPS[0];
  const CurrentIcon = currentGroup.icon;

  const renderPropCard = (prop) => {
    const val = currentModeStyles[prop.cssProp] || "";
    const Icon = prop.icon;
    return (
      <PropCard key={prop.cssProp} $changed={!!val}>
        <PropHead>
          <PropIcon $changed={!!val}>
            <Icon />
          </PropIcon>
          <PropText>
            <PropLabel>
              {prop.label}
              {val && <ChangedTag>змінено</ChangedTag>}
            </PropLabel>
            <PropDesc>{prop.desc}</PropDesc>
          </PropText>
          {val && (
            <ResetBtn
              onClick={() => handleChange(prop.cssProp, "")}
              aria-label={`Скинути: ${prop.label}`}
              title="Скинути"
              data-decorator-ignore="true"
            >
              <FiRotateCcw />
            </ResetBtn>
          )}
        </PropHead>
        {renderControl(prop, val)}
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
          <PropDesc>Будь-яка CSS-властивість, окрім opacity. Enter — додати</PropDesc>
        </PropText>
      </PropHead>

      {customProps.length === 0 && <EmptyNote>Власних властивостей ще немає</EmptyNote>}

      {customProps.map(([name, value]) => (
        <Controls key={name}>
          <CustomName title={name}>{name}</CustomName>
          <PropInput
            value={value}
            onChange={(e) =>
              setEditedStyles((prev) => ({
                ...prev,
                [currentMode]: { ...(prev[currentMode] || {}), [name]: e.target.value },
              }))
            }
            aria-label={name}
            data-decorator-ignore="true"
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
        <PropInput
          value={newPropName}
          onChange={(e) => setNewPropName(e.target.value)}
          placeholder="letter-spacing"
          aria-label="Назва властивості"
          data-decorator-ignore="true"
        />
        <PropInput
          value={newPropValue}
          onChange={(e) => setNewPropValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddCustom()}
          placeholder="2px"
          aria-label="Значення властивості"
          data-decorator-ignore="true"
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
    </PropCard>
  );

  return (
    <Overlay
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
              <Segmented role="radiogroup" aria-label="Тема сайту">
                <SegmentBtn
                  role="radio"
                  aria-checked={activeTheme === "light"}
                  $active={activeTheme === "light"}
                  onClick={() => setActiveTheme("light")}
                >
                  <FiSun /> Денна
                </SegmentBtn>
                <SegmentBtn
                  role="radio"
                  aria-checked={activeTheme === "dark"}
                  $active={activeTheme === "dark"}
                  onClick={() => setActiveTheme("dark")}
                >
                  <FiMoon /> Темна
                </SegmentBtn>
              </Segmented>
              <Segmented role="radiogroup" aria-label="Стан елемента">
                <SegmentBtn
                  role="radio"
                  aria-checked={activeState === "default"}
                  $active={activeState === "default"}
                  onClick={() => setActiveState("default")}
                >
                  <FiSquare /> Звичайний
                </SegmentBtn>
                <SegmentBtn
                  role="radio"
                  aria-checked={activeState === "hover"}
                  $active={activeState === "hover"}
                  onClick={() => setActiveState("hover")}
                >
                  <FiMousePointer /> Наведення
                </SegmentBtn>
              </Segmented>
            </ModeBlock>

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

          <Content role="tabpanel" aria-label={currentGroup.title}>
            <ContentHead>
              <ContentIcon>
                <CurrentIcon />
              </ContentIcon>
              <div>
                <ContentTitle>{currentGroup.title}</ContentTitle>
                <ContentDesc>{currentGroup.desc}</ContentDesc>
              </div>
            </ContentHead>

            <CardsGrid>
              {currentGroup.id === "custom"
                ? renderCustomCss()
                : currentGroup.props.map((key) => renderPropCard(EDITABLE_PROPS_CONFIG[key]))}
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
