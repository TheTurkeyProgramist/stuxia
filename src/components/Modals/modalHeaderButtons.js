import styled, { css } from "styled-components";

// ─────────────────────────────────────────────────────────────
//  Кнопки шапок модалок («Параметри», «Подяка») — той самий формат,
//  що й IconButton у шапці сайту (Header.jsx): шапка 48px, кнопка 40px,
//  іконка над підписом 10px, прозора з підсвіткою при наведенні.
//
//  Кольори беруться з currentColor і CSS-змінних батька, тож кнопки
//  працюють і в темах налаштувань, і на темному фоні замку:
//    --mhb-accent, --mhb-on-accent, --mhb-accent-hover — головна дія;
//    --mhb-danger — червоний текст ховера «Закрити / Скасувати».
// ─────────────────────────────────────────────────────────────

export const MODAL_HEADER_HEIGHT = 48;

export const ModalHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

export const ModalHeaderButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  height: 40px;
  min-width: 64px;
  padding: 2px 8px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  & > svg {
    width: 18px;
    height: 18px;
    stroke-width: 2.2;
    flex-shrink: 0;
  }
  /* Оптичне вирівнювання: «тонкі» іконки (✕, ✓) малюються меншими за рамкові,
     тож збільшуємо їх, а від'ємний відступ лишає той самий бокс 18px — підписи не стрибають */
  ${(p) =>
    p.$thinIcon &&
    css`
      & > svg {
        width: 22px;
        height: 22px;
        margin: -2px;
      }
    `}

  & > span {
    display: block;
    max-width: 100%;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.85;
  }

  &:hover {
    background: color-mix(in srgb, currentColor 9%, transparent);
    border-color: color-mix(in srgb, currentColor 14%, transparent);
  }
  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
  @media (max-width: 340px) {
    min-width: 52px;
    & > span {
      font-size: 9px;
    }
  }
`;

// Червоний текст на напівпрозорому червоному — читається в обох темах
export const ModalHeaderCloseButton = styled(ModalHeaderButton)`
  &:hover {
    background: rgba(196, 43, 28, 0.18);
    border-color: rgba(255, 107, 107, 0.55);
    color: var(--mhb-danger, #ff8a8a);
  }
  &:hover > span {
    opacity: 1;
  }
`;

// Головна дія: заливка акцентом. $idle — приглушена (нічого робити, але клікабельна)
export const ModalHeaderPrimaryButton = styled(ModalHeaderButton)`
  background: var(--mhb-accent);
  border-color: var(--mhb-accent);
  color: var(--mhb-on-accent);
  & > span {
    opacity: 1;
  }
  &:hover {
    background: var(--mhb-accent-hover, var(--mhb-accent));
    border-color: var(--mhb-accent-hover, var(--mhb-accent));
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  ${(p) =>
    p.$idle &&
    css`
      background: color-mix(in srgb, var(--mhb-accent) 10%, transparent);
      border-color: color-mix(in srgb, var(--mhb-accent) 28%, transparent);
      color: var(--mhb-accent);
      & > span {
        opacity: 0.85;
      }
      &:hover {
        background: color-mix(in srgb, var(--mhb-accent) 18%, transparent);
        border-color: color-mix(in srgb, var(--mhb-accent) 45%, transparent);
      }
    `}
`;
