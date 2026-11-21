import { useCallback, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdClose } from "react-icons/md";

// ─────────────────────────────────────────────────────────────
//  «Шторка» на всю ширину знизу (часовий пояс, мова сайту):
//  затемнення, висування знизу, гарна шапка й анімоване закриття.
//  Колір задається CSS-змінною --sheet-accent на батьку (або $accent).
// ─────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;
const slideUp = keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
`;
const slideDown = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(100%); }
`;

export const SHEET_IN_MS = 380;
export const SHEET_OUT_MS = 260;

// Анімація відкриття/закриття для фону
export const sheetBackdropAnim = css`
  animation: ${(p) =>
    p.$closing
      ? css`${fadeOut} ${SHEET_OUT_MS}ms ease-in forwards`
      : css`${fadeIn} ${SHEET_IN_MS}ms ease-out`};
  ${(p) => p.$closing && "pointer-events: none;"}

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
  }
`;

// Анімація відкриття/закриття для самої панелі
export const sheetPanelAnim = css`
  will-change: transform;
  animation: ${(p) =>
    p.$closing
      ? css`${slideDown} ${SHEET_OUT_MS}ms cubic-bezier(0.55, 0, 0.75, 0.2) forwards`
      : css`${slideUp} ${SHEET_IN_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`};

  /* Не "none": onAnimationEnd має спрацювати, щоб закриття завершилось */
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
  }
`;

/**
 * Закриття з анімацією: requestClose запускає «виїзд», а onClose батька
 * викликається, щойно анімація панелі догра (onPanelAnimationEnd).
 */
export const useSheetClose = (isOpen, onClose) => {
  const [closing, setClosing] = useState(false);
  if (!isOpen && closing) setClosing(false);

  const requestClose = useCallback(() => setClosing(true), []);
  const onPanelAnimationEnd = useCallback(
    (e) => {
      if (e.target === e.currentTarget && closing) onClose();
    },
    [closing, onClose],
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && setClosing(true);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return { closing, requestClose, onPanelAnimationEnd };
};

export const SheetBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${(p) => p.$z ?? 99998};
  /* Без backdrop-filter: розмиття відео хіро під модалкою перераховувалось щокадру й гальмувало прокрутку */
  background: ${(p) => (p.$light ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0.72)")};
  ${sheetBackdropAnim}
`;

const HeaderBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 10px;
  /* Та сама висота, що й у шапки сайту (Header.jsx) */
  height: 48px;
  flex: 0 0 48px;
  padding: 0 8px 0 12px;
  box-sizing: border-box;
  color: ${(p) => (p.$light ? "#111827" : "#fff")};
  background: ${(p) =>
    p.$light
      ? "color-mix(in srgb, var(--sheet-accent) 6%, rgba(248, 250, 252, 0.94))"
      : "color-mix(in srgb, var(--sheet-accent) 7%, rgba(14, 14, 16, 0.94))"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Тонка лінія-акцент, що згасає до країв */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      color-mix(in srgb, var(--sheet-accent) 70%, transparent) 20%,
      color-mix(in srgb, var(--sheet-accent) 70%, transparent) 80%,
      transparent
    );
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 0 6px 0 8px;
  }
`;

const IconBadge = styled.span`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  color: var(--sheet-accent);
  background: color-mix(in srgb, var(--sheet-accent) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--sheet-accent) 35%, transparent);
  font-size: 19px;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 17px;
  }
`;

const TitleBlock = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;

  h2 {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 0;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
    opacity: 0.7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  b {
    color: var(--sheet-accent);
    font-weight: 700;
    opacity: 1;
  }
`;

const CloseBtn = styled.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid ${(p) => (p.$light ? "rgba(0, 0, 0, 0.14)" : "rgba(255, 255, 255, 0.14)")};
  background: ${(p) => (p.$light ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.06)")};
  color: inherit;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.25s ease;
  }

  &:hover,
  &:focus-visible {
    color: #ff5a5a;
    background: rgba(255, 90, 90, 0.12);
    border-color: rgba(255, 90, 90, 0.5);
    outline: none;
  }
  &:hover svg,
  &:focus-visible svg {
    transform: rotate(90deg);
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
`;

/** Шапка шторки: іконка, заголовок, підзаголовок, дії справа і ✕ */
export const SheetHeader = ({ icon, title, subtitle, actions, onClose, closeLabel, light, titleId, style }) => (
  <HeaderBar $light={light} style={style}>
    <IconBadge aria-hidden="true">{icon}</IconBadge>
    <TitleBlock>
      <h2 id={titleId}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </TitleBlock>
    {actions}
    <CloseBtn type="button" $light={light} onClick={onClose} aria-label={closeLabel} title={closeLabel}>
      <MdClose aria-hidden="true" />
    </CloseBtn>
  </HeaderBar>
);
