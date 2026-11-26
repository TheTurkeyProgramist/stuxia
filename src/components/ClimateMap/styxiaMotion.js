// Спільна анімація інтерфейсу Карти Стихії: плавне появлення й зникнення замість різкого.
// Усе вимикається, якщо в системі ввімкнено «зменшити рух».
import { css, keyframes } from "styled-components";

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
`;

export const slideIn = keyframes`
  from { opacity: 0; transform: translateX(14px); }
  to { opacity: 1; transform: none; }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.55); opacity: 0.5; }
`;

/**
 * Елемент, що плавно з'являється й зникає, а не з'являється з нічого. Сховане не ловить ні мишу,
 * ні фокус (visibility), тож сховану панель не можна випадково натиснути.
 * direction: −1 — з'їжджає зверху, 1 — знизу.
 */
export const revealed = (show, direction = -1) => css`
  opacity: ${show ? 1 : 0};
  transform: ${show ? "none" : `translateY(${direction * 6}px) scale(0.97)`};
  visibility: ${show ? "visible" : "hidden"};
  pointer-events: ${show ? "auto" : "none"};
  transition:
    opacity 0.22s ease,
    transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1),
    visibility 0s linear ${show ? "0s" : "0.26s"};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/** Плавна зміна кольору, рамки й натискання для кнопок. */
export const pressable = css`
  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.12s ease;

  &:active {
    transform: scale(0.95);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/**
 * Кольори інтерфейсу Карти Стихії як CSS-змінні: темна тема — як було, денна — світлі панелі.
 * Задаються на корені карти, тож панель, повзунок і картки-тултіпи успадковують їх самі.
 */
export const themeTokens = (dark) => css`
  --sx-bg: ${dark ? "#0d1525" : "#e9eff6"};
  --sx-surface: ${dark ? "rgba(44, 44, 48, 0.92)" : "rgba(255, 255, 255, 0.95)"};
  --sx-surface-strong: ${dark ? "rgba(44, 44, 48, 0.96)" : "rgba(255, 255, 255, 0.98)"};
  --sx-surface-hover: ${dark ? "rgba(72, 72, 78, 0.97)" : "rgba(231, 236, 243, 0.99)"};
  --sx-bar: ${dark ? "rgba(26, 26, 30, 0.9)" : "rgba(255, 255, 255, 0.92)"};
  --sx-text: ${dark ? "#ffffff" : "#14202e"};
  --sx-text-dim: ${dark ? "rgba(255, 255, 255, 0.8)" : "rgba(20, 32, 46, 0.74)"};
  --sx-border: ${dark ? "rgba(255, 255, 255, 0.22)" : "rgba(20, 32, 46, 0.18)"};
  --sx-border-strong: ${dark ? "rgba(255, 255, 255, 0.45)" : "rgba(20, 32, 46, 0.4)"};
  --sx-soft: ${dark ? "rgba(255, 255, 255, 0.07)" : "rgba(20, 32, 46, 0.06)"};
  --sx-hover: ${dark ? "rgba(255, 255, 255, 0.18)" : "rgba(20, 32, 46, 0.1)"};
  --sx-field: ${dark ? "#2a2a2e" : "#eef2f7"};
  --sx-accent: ${dark ? "#ffd166" : "#b45309"};
  --sx-kicker: ${dark ? "#ffb347" : "#b45309"};
  --sx-play-bg: ${dark ? "#f5f5f5" : "#e53935"};
  --sx-play-fg: ${dark ? "#e53935" : "#ffffff"};
  --sx-play-hover: ${dark ? "#ffffff" : "#ff5a55"};
  --sx-track: ${dark ? "#5d5d63" : "rgba(20, 32, 46, 0.28)"};
  --sx-fill: ${dark ? "#ffffff" : "#14202e"};
  --sx-popup-bg: ${dark ? "rgba(28, 32, 44, 0.97)" : "rgba(255, 255, 255, 0.98)"};
  --sx-thumb-bg: ${dark ? "#3b4a5e" : "#cfd8e3"};
  --sx-shadow: ${dark ? "0 10px 30px rgba(0, 0, 0, 0.45)" : "0 10px 28px rgba(20, 32, 46, 0.28)"};
`;
