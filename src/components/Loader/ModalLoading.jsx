import React, { Component, Suspense, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
// Маленька копія (≈10 КБ), щоб плашка сама не чекала на велику картинку
import kateAndDomino from "../../media/characters/kate-and-domino.webp?w=360&format=webp&quality=70";
import { TurkeyDot } from "./TurkeyDot.jsx";

// Плашка «Доміно й Кейт», поки довантажується файл модалки (React.lazy).

const SHOW_DELAY_MS = 250; // швидке відкриття (файл уже в кеші) — без миготіння плашки
const PHRASE_MS = 1800;
const SLOW_AFTER_MS = 6000; // далі — «довгі» фрази
const DOUBLE_TAP_MS = 400; // два дотики/кліки за цей час — закрити

const PHRASES = [
  "Завантажую",
  "Секундочку",
  "Пребундючно шкода",
  "Не поспішай",
  "Доміно гортає газету",
  "Кейт поливає квітку",
];
const SLOW_PHRASES = [
  "Інтернет сьогодні неспішний",
  "Ще трохи — вже майже",
  "Доміно побіг по швидший інтернет",
  "Кейт каже, що варто зачекати",
];

// Картинку краще мати заздалегідь: коли модалка вантажиться довго, мережа й так зайнята
let preloaded = false;
export const preloadModalLoading = () => {
  if (preloaded || typeof window === "undefined") return;
  preloaded = true;
  const img = new Image();
  img.src = kateAndDomino;
};

const useOnline = () => {
  const [online, setOnline] = useState(() => typeof navigator === "undefined" || navigator.onLine !== false);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);
  return online;
};

/**
 * Плашка завантаження.
 * error — файл так і не завантажився: показуємо «Перезавантажити сторінку».
 * Закрити — двічі натиснути будь-де (або Esc), якщо є onCancel.
 */
export const ModalLoading = ({ onCancel, error = false, onRetry }) => {
  const [elapsed, setElapsed] = useState(0);
  const online = useOnline();

  const lastTapRef = useRef(0);

  useEffect(() => {
    const started = Date.now();
    const id = setInterval(() => setElapsed(Date.now() - started), 250);
    return () => clearInterval(id);
  }, []);

  // Esc — те саме, що подвійне натискання
  useEffect(() => {
    if (!onCancel) return undefined;
    const handleKey = (e) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onCancel]);

  // Свій подвійний дотик: dblclick на телефонах спрацьовує ненадійно
  const handleTap = () => {
    if (!onCancel) return;
    const now = Date.now();
    if (now - lastTapRef.current < DOUBLE_TAP_MS) {
      lastTapRef.current = 0;
      onCancel();
    } else {
      lastTapRef.current = now;
    }
  };

  if (!error && elapsed < SHOW_DELAY_MS) return null;

  const isSlow = elapsed >= SLOW_AFTER_MS;
  const list = isSlow ? SLOW_PHRASES : PHRASES;
  const phraseIndex = Math.floor((isSlow ? elapsed - SLOW_AFTER_MS : elapsed) / PHRASE_MS) % list.length;

  let phrase = list[phraseIndex];
  let dots = true;
  if (error) {
    phrase = "Ой, не вдалося завантажити";
    dots = false;
  } else if (!online) {
    phrase = "Немає інтернету. Відкрию, щойно з'явиться зв'язок";
  }

  return createPortal(
    <Backdrop role={error ? "alert" : "status"} aria-live="polite" onClick={handleTap}>
      <Content>
        <Characters>
          <img src={kateAndDomino} alt="Доміно й Кейт" width="360" height="196" />
          <Shadow aria-hidden="true" />
          {/* Індик з лоадера бігає над Кейт */}
          {!error && (
            <RunTrack aria-hidden="true">
              <Runner>
                <Hop>
                  <TurkeyDot size={30} />
                </Hop>
              </Runner>
            </RunTrack>
          )}
        </Characters>

        <Phrase key={phrase}>
          {phrase}
          {dots && <Dots aria-hidden="true" />}
        </Phrase>

        {!error && isSlow && online && (
          <Hint>Вікно відкриється саме, щойно завантажиться</Hint>
        )}

        {error && (
          <ActionButton
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              (onRetry || (() => window.location.reload()))();
            }}
          >
            Перезавантажити сторінку
          </ActionButton>
        )}

        {onCancel && <CloseHint>Двічі натисніть будь-де, щоб закрити</CloseHint>}
      </Content>
    </Backdrop>,
    document.body,
  );
};

/** Помилка завантаження модалки не гасить увесь сайт — показуємо плашку з виходом. */
class ModalErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error("Модалка не завантажилась:", error);
  }

  componentDidUpdate(prevProps) {
    // Модалку відкрили знову — пробуємо ще раз (якщо файл так і не прийшов, знову покажемо плашку)
    if (this.state.error && this.props.active && !prevProps.active) {
      this.setState({ error: null });
    }
  }

  handleCancel = () => {
    this.props.onCancel?.();
  };

  render() {
    if (this.state.error) {
      return this.props.active ? <ModalLoading error onCancel={this.handleCancel} /> : null;
    }
    return this.props.children;
  }
}

/**
 * Suspense для лінивих модалок: плашка «Доміно й Кейт» + запобіжник від помилок.
 * active — чи відкрита зараз хоч одна модалка всередині. Модалка, що лишається змонтованою
 * після першого відкриття, може довантажуватись і закритою — тоді плашку не показуємо.
 * onCancel — закрити модалку(и), якщо людина не хоче чекати.
 */
export const ModalSuspense = ({ children, onCancel, active = true }) => (
  <ModalErrorBoundary onCancel={onCancel} active={active}>
    <Suspense fallback={active ? <ModalLoading onCancel={onCancel} /> : null}>{children}</Suspense>
  </ModalErrorBoundary>
);

// ── Стилі ──────────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.96); }
  to { opacity: 1; transform: none; }
`;

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`;

const shadowPulse = keyframes`
  0%, 100% { transform: scaleX(1); opacity: 0.45; }
  50% { transform: scaleX(0.82); opacity: 0.28; }
`;

const dotsAnim = keyframes`
  0% { content: ""; }
  25% { content: "."; }
  50% { content: ".."; }
  75%, 100% { content: "..."; }
`;

// Індик бігає туди-назад над Кейт і розвертається на краях доріжки
const run = keyframes`
  0% { transform: translateX(0) scaleX(-1); }
  46% { transform: translateX(calc(-1 * var(--track))) scaleX(-1); }
  50% { transform: translateX(calc(-1 * var(--track))) scaleX(1); }
  96% { transform: translateX(0) scaleX(1); }
  100% { transform: translateX(0) scaleX(-1); }
`;

// Підскоки на кожен «крок»
const hop = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const noMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  html[data-animations-off] & {
    animation: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  /* над налаштуваннями (100001) і мовою/ШІ (до 300001), під підказками (300010) */
  z-index: 300005;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  /* без картки текст лежить просто на фоні — тож фон темніший */
  background: rgba(4, 6, 14, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  cursor: default;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  animation: ${fadeIn} 0.2s ease-out both;
  ${noMotion}
`;

const Content = styled.div`
  width: min(320px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: var(--font-family);
  text-align: center;
  animation: ${popIn} 0.22s ease-out both;
  ${noMotion}
`;

const Characters = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: auto;
    /* піксель-арт — без розмиття при масштабуванні */
    image-rendering: pixelated;
    position: relative;
    z-index: 1;
    animation: ${bob} 1.1s ease-in-out infinite;
    ${noMotion}
  }
`;

// Доріжка над Кейт (права частина картинки); --track — скільки пробігає індик
const RunTrack = styled.div`
  --track: 70px;
  position: absolute;
  top: -10px;
  right: 6%;
  z-index: 2;
  pointer-events: none;
`;

const Runner = styled.div`
  animation: ${run} 3.2s linear infinite;
  ${noMotion}
`;

const Hop = styled.div`
  animation: ${hop} 0.3s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6));
  ${noMotion}
`;

const Shadow = styled.span`
  width: 62%;
  height: 10px;
  margin-top: -14px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(0, 175, 206, 0.55), transparent);
  animation: ${shadowPulse} 1.1s ease-in-out infinite;
  ${noMotion}
`;

const Phrase = styled.div`
  min-height: 22px;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: 0.2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  animation: ${fadeIn} 0.3s ease-out both;
  ${noMotion}
`;

// Крапки, що «друкуються»: «», «.», «..», «...»
const Dots = styled.span`
  display: inline-block;
  width: 1.2em;
  text-align: left;

  &::after {
    content: "...";
    animation: ${dotsAnim} 1.2s steps(1, end) infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

const Hint = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const CloseHint = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const ActionButton = styled.button`
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(0, 175, 206, 0.8);
  background: rgba(0, 175, 206, 0.22);
  color: #fff;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(0, 175, 206, 0.35);
  }

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

export default ModalLoading;
