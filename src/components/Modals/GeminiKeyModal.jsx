import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { FiKey, FiEye, FiEyeOff, FiExternalLink, FiX, FiChevronDown } from "react-icons/fi";
import { TbGauge } from "react-icons/tb";

// Спільні для «Допомоги ШІ» та «ШІ Викладу новини»:
// кнопка-статус ключа Gemini і модалка з полем для ключа.

const GET_KEY_URL = "https://aistudio.google.com/app/apikey";

/* ── Кнопка ─────────────────────────────────────────────────────────────── */

const KeyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 7px 12px;
  border-radius: 10px;
  border: 1px solid
    ${({ $hasKey }) => ($hasKey ? "rgba(76, 175, 80, 0.45)" : "rgba(255, 138, 61, 0.5)")};
  background: ${({ $hasKey, $isDarkMode }) =>
    $hasKey
      ? $isDarkMode ? "rgba(76, 175, 80, 0.1)" : "rgba(76, 175, 80, 0.08)"
      : $isDarkMode ? "rgba(255, 138, 61, 0.1)" : "rgba(255, 138, 61, 0.08)"};
  color: ${({ $isDarkMode }) => ($isDarkMode ? "#f3f4f6" : "#1f2937")};
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  svg {
    flex: 0 0 auto;
    font-size: 15px;
    color: ${({ $hasKey }) => ($hasKey ? "#4caf50" : "#ff8a3d")};
    transition: transform 0.25s ease;
  }

  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    border-color: ${({ $hasKey }) => ($hasKey ? "#4caf50" : "#ff8a3d")};
    background: ${({ $hasKey }) => ($hasKey ? "rgba(76, 175, 80, 0.18)" : "rgba(255, 138, 61, 0.18)")};
  }
  &:hover svg { transform: rotate(-20deg); }
  &:focus-visible { outline: 2px solid #ff8a3d; outline-offset: 2px; }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg { transition: none; }
  }
`;

export const GeminiKeyButton = ({ hasKey, onClick, isDarkMode = true }) => (
  <KeyButton
    type="button"
    $hasKey={hasKey}
    $isDarkMode={isDarkMode}
    onClick={onClick}
    aria-label={hasKey ? "Ключ Gemini додано. Змінити ключ" : "Вставити ключ Gemini"}
  >
    <FiKey aria-hidden="true" />
    <span>
      {hasKey
        ? "Ключ Gemini додано — натисніть, щоб змінити"
        : "ШІ пасивно ввімкнений — натисніть, щоб вставити ключ"}
    </span>
  </KeyButton>
);

/* ── Модалка ────────────────────────────────────────────────────────────── */

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const popIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
  position: fixed; inset: 0;
  /* Вище за модалки ШІ (до 300001), нижче за підтвердження віку (2147483000) */
  z-index: 2147482000;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.18s ease both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Box = styled.div`
  position: relative;
  width: min(460px, 100%);
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 22px 22px 18px;
  border: 1px solid rgba(255, 138, 61, 0.28);
  border-radius: 14px;
  background: #16171b;
  color: #f3f4f6;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
  animation: ${popIn} 0.22s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Header = styled.div`
  display: flex; align-items: center; gap: 12px; margin: 0 36px 12px 0;
`;

const IconBadge = styled.div`
  flex: 0 0 auto;
  display: grid; place-items: center;
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(255, 138, 61, 0.16); color: #ff8a3d; font-size: 19px;
`;

const Title = styled.h3`
  margin: 0; font-size: 17px; font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute; top: 14px; right: 14px;
  display: grid; place-items: center;
  width: 32px; height: 32px; padding: 0;
  border: 0; border-radius: 8px;
  background: rgba(255, 255, 255, 0.06); color: #d1d5db;
  font-size: 17px; cursor: pointer;
  &:hover { background: rgba(255, 255, 255, 0.14); color: #ffffff; }
  &:focus-visible { outline: 2px solid #ff8a3d; outline-offset: 2px; }
`;

const Text = styled.p`
  margin: 0 0 14px; font-size: 13px; line-height: 1.5; color: #c9cdd4;
`;

const Field = styled.div`
  display: flex; align-items: center;
  border: 1px solid rgba(255, 138, 61, 0.4);
  border-radius: 10px;
  background: #1b1c22;
  transition: border-color 0.2s ease;
  &:focus-within { border-color: #ff8a3d; }

  input {
    flex: 1; min-width: 0;
    padding: 10px 12px;
    border: 0; outline: 0;
    background: transparent; color: #f3f4f6;
    font: inherit; font-size: 13px;
  }
`;

const EyeButton = styled.button`
  display: grid; place-items: center;
  width: 36px; height: 36px; margin-right: 2px; padding: 0;
  border: 0; border-radius: 8px;
  background: transparent; color: #9ca3af; font-size: 16px; cursor: pointer;
  &:hover { color: #ffffff; }
  &:focus-visible { outline: 2px solid #ff8a3d; outline-offset: -2px; }
`;

const Links = styled.div`
  display: flex; flex-direction: column; align-items: flex-start; gap: 8px;
  margin: 12px 0 18px;
`;

const GetKeyLink = styled.a`
  display: inline-flex; align-items: center; gap: 6px;
  color: #ff8a3d; font-size: 13px; font-weight: 600; text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const LimitsToggle = styled.button`
  display: inline-flex; align-items: center; gap: 6px;
  padding: 0; border: 0; background: transparent;
  color: #c9cdd4; font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
  &:hover { color: #ffffff; text-decoration: underline; }
  &:focus-visible { outline: 2px solid #ff8a3d; outline-offset: 2px; border-radius: 4px; }
  svg:last-child {
    transition: transform 0.2s ease;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
  }
`;

const LimitsPanel = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 12px;
  line-height: 1.5;
  color: #c9cdd4;
`;

const LimitRow = styled.div`
  display: flex; justify-content: space-between; gap: 12px;
  padding: 4px 0;
  span:last-child { color: #ff8a3d; font-weight: 700; white-space: nowrap; }
`;

const LimitsNote = styled.p`
  margin: 8px 0 0; color: #9ca3af;
`;

const Actions = styled.div`
  display: flex; justify-content: flex-end; gap: 10px;
`;

const Button = styled.button`
  border-radius: 8px; padding: 8px 16px;
  font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  background: ${({ $variant }) =>
    $variant === "primary" ? "#ff8a3d" : $variant === "danger" ? "transparent" : "rgba(255, 255, 255, 0.08)"};
  color: ${({ $variant }) =>
    $variant === "primary" ? "#111111" : $variant === "danger" ? "#ff8a8a" : "#ffffff"};
  border: 1px solid ${({ $variant }) =>
    $variant === "primary" ? "#ff8a3d" : $variant === "danger" ? "rgba(255, 107, 107, 0.4)" : "rgba(255, 255, 255, 0.12)"};
  &:hover {
    background: ${({ $variant }) =>
      $variant === "primary" ? "#ff9d5c" : $variant === "danger" ? "rgba(196, 43, 28, 0.25)" : "rgba(255, 255, 255, 0.15)"};
  }
  &:focus-visible { outline: 2px solid #ff8a3d; outline-offset: 2px; }
`;

/**
 * value / onChange — ключ і обробник з батьківського компонента
 * (він же питає підтвердження 18+ перед збереженням нового ключа).
 */
export const GeminiKeyModal = ({ value, onChange, onClose, modelName }) => {
  const inputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showLimits, setShowLimits] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
    // Фаза перехоплення: Esc закриває лише цю модалку, а не вікно ШІ під нею.
    // Поки поверх відкрите підтвердження віку — Esc належить йому.
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (document.querySelector('[role="alertdialog"]')) return;
      e.stopPropagation();
      onClose();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  return createPortal(
    <Overlay
      // pageActivity.js ставить на паузу анімації поза карткою з aria-modal;
      // без цього атрибута підкладка застигає на першому кадрі з opacity: 0
      data-active-overlay=""
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Box role="dialog" aria-modal="true" aria-labelledby="gemini-key-title">
        <CloseButton type="button" onClick={onClose} aria-label="Закрити">
          <FiX aria-hidden="true" />
        </CloseButton>
        <Header>
          <IconBadge aria-hidden="true"><FiKey /></IconBadge>
          <Title id="gemini-key-title">Ключ Gemini</Title>
        </Header>
        <Text>
          Ключ потрібен, щоб працював ШІ. Він зберігається лише в цьому браузері й
          використовується спільно «Допомогою ШІ» та «ШІ Викладом новини».
        </Text>
        <Field>
          <input
            ref={inputRef}
            type={isVisible ? "text" : "password"}
            placeholder="Вставте ваш Gemini API Key..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onClose()}
            aria-label="Gemini API Key"
            name="gemini-api-key"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            data-form-type="other"
            data-lpignore="true"
          />
          <EyeButton
            type="button"
            onClick={() => setIsVisible((v) => !v)}
            aria-label={isVisible ? "Сховати ключ" : "Показати ключ"}
          >
            {isVisible ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
          </EyeButton>
        </Field>
        <Links>
          <GetKeyLink href={GET_KEY_URL} target="_blank" rel="noreferrer">
            Отримати ключ безкоштовно в Google AI Studio <FiExternalLink aria-hidden="true" />
          </GetKeyLink>
          <LimitsToggle
            type="button"
            $open={showLimits}
            onClick={() => setShowLimits((v) => !v)}
            aria-expanded={showLimits}
            aria-controls="gemini-key-limits"
          >
            <TbGauge aria-hidden="true" />
            Переглянути приблизні ліміти
            <FiChevronDown aria-hidden="true" />
          </LimitsToggle>
          {showLimits && (
            <LimitsPanel id="gemini-key-limits">
              <LimitRow>
                <span>Ліміт на хвилину (Google):</span>
                <span>15 / хв</span>
              </LimitRow>
              <LimitRow>
                <span>Ліміт на добу (Google):</span>
                <span>1500 / доба</span>
              </LimitRow>
              <LimitsNote>
                Це безкоштовні ліміти Google AI Studio. Їх визначає ваш ключ, а не «Стихія»
                {modelName ? <> (модель <strong>{modelName}</strong>)</> : null}. З платним ключем
                ліміти більші, але тут показано базові: ми не маємо доступу до вашого акаунта.
                Перезарядка 15 с після кожного запиту та ліміт 300 символів на запит зроблені,
                щоб економити вашу квоту.
              </LimitsNote>
            </LimitsPanel>
          )}
        </Links>
        <Actions>
          {value && (
            <Button type="button" $variant="danger" onClick={() => onChange("")}>
              Видалити ключ
            </Button>
          )}
          <Button type="button" $variant="primary" onClick={onClose}>
            Готово
          </Button>
        </Actions>
      </Box>
    </Overlay>,
    document.body,
  );
};

export default GeminiKeyModal;
