import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { MdFormatColorReset } from "react-icons/md";

// Кольори веселки + "без накладення"
export const ACCENT_COLORS = [
  { id: "none",   label: "Без накладення", color: null },
  { id: "red",    label: "Червоний",       color: "#FF3B30" },
  { id: "orange", label: "Оранжевий",      color: "#FF9500" },
  { id: "yellow", label: "Жовтий",         color: "#FFD60A" },
  { id: "green",  label: "Зелений",        color: "#30D158" },
  { id: "cyan",   label: "Блакитний",      color: "#00C7BE" },
  { id: "blue",   label: "Синій",          color: "#0A84FF" },
  { id: "violet", label: "Фіолетовий",     color: "#BF5AF2" },
];

const STORAGE_KEY = "headerAccentColor";
const CHANGE_EVENT = "accent-color-change";
const VALID = new Set(ACCENT_COLORS.map((c) => c.color).filter(Boolean));

const readStored = () => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return VALID.has(v) ? v : null;
  } catch {
    return null;
  }
};

// Спільний стан акцентного кольору: синхронізується між шапкою та налаштуваннями
export const useAccentColor = () => {
  const [accentColor, setState] = useState(readStored);

  useEffect(() => {
    const sync = () => setState(readStored());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const setAccentColor = useCallback((color) => {
    const next = VALID.has(color) ? color : null;
    try {
      if (next) localStorage.setItem(STORAGE_KEY, next);
      else localStorage.removeItem(STORAGE_KEY);
    } catch { /* ignore */ }
    setState(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return [accentColor, setAccentColor];
};

export const getAccentLabel = (color) =>
  ACCENT_COLORS.find((a) => a.color === color)?.label || "Без накладення";

const AccentRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$columns}, 28px);
  gap: 10px;
  justify-content: ${(p) => (p.$columns >= ACCENT_COLORS.length ? "flex-start" : "space-between")};
  padding: 2px 4px;
`;

const AccentDot = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 50%;
  border: none;
  background: ${(p) => p.$color};
  box-shadow: ${(p) =>
    p.$active
      ? `0 0 0 2px ${p.$isDarkMode ? "#1a1b21" : "#fff"}, 0 0 0 4px ${p.$ring}`
      : `inset 0 0 0 1px ${p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`};
  color: ${(p) => p.$iconColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  transition: transform 0.12s, box-shadow 0.15s;
  &:hover { transform: scale(1.12); }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 4px;
  }
`;

/**
 * Ряд кружечків для вибору акценту.
 * wrapItem(ac, node) — необов'язкова обгортка (наприклад, Tooltip).
 */
export const AccentSwatches = ({ isDarkMode, accentColor, onPick, columns = 4, wrapItem }) => {
  const ring = accentColor || "#00afce";
  return (
    <AccentRow $columns={columns}>
      {ACCENT_COLORS.map((ac) => {
        const active = accentColor === ac.color;
        const isNone = ac.id === "none";
        const dot = (
          <AccentDot
            key={ac.id}
            type="button"
            $color={isNone ? (isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)") : ac.color}
            $active={active}
            $ring={ring}
            $isDarkMode={isDarkMode}
            $iconColor={isNone ? (isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.55)") : ac.id === "yellow" ? "#111" : "#fff"}
            aria-label={ac.label}
            aria-pressed={active}
            title={wrapItem ? undefined : ac.label}
            onClick={() => onPick(ac.color)}
          >
            {isNone ? <MdFormatColorReset /> : active && <FaCheck />}
          </AccentDot>
        );
        return wrapItem ? wrapItem(ac, dot) : dot;
      })}
    </AccentRow>
  );
};
