import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTutorial } from './TutorialContext.jsx';
import dominoVideo from '../../media/characters/kate-and-domino.webm';

const ACCENT = '#ffb36c';
const TOTAL_STEPS = 8;

// Safari не вміє прозорість у WebM (VP9 alpha) — там індик був би на чорному тлі, тож показуємо емодзі
const canPlayAlphaWebm = (() => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isSafari = /safari/i.test(ua) && !/chrome|chromium|crios|edg|android/i.test(ua);
  return !isSafari;
})();

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9); }
`;

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 9999px rgba(0,0,0,0.62), 0 0 0 0 rgba(255,179,108,0.55); }
  50% { box-shadow: 0 0 0 9999px rgba(0,0,0,0.62), 0 0 0 8px rgba(255,179,108,0); }
`;

const panelSurface = `
  background: linear-gradient(160deg, rgba(28, 20, 12, 0.95) 0%, rgba(10, 10, 16, 0.97) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 179, 108, 0.55);
  box-shadow: 0 14px 36px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06);
  color: #fff;
`;

const primaryButton = `
  background: linear-gradient(135deg, #ffca91, #ff9d48);
  color: #1a0800;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.15s ease, transform 0.15s ease;
  &:hover:not(:disabled) { filter: brightness(1.06); transform: translateY(-1px); }
  &:disabled { opacity: 0.55; cursor: default; }
  &:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
`;

const CornerPrompt = styled.div`
  ${panelSurface}
  position: fixed;
  bottom: 70px;
  right: 12px;
  width: 260px;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 16px;
  z-index: 10000;
  animation: ${(p) => (p.$closing ? fadeOut : fadeIn)} 0.3s ease-out forwards;
  pointer-events: ${(p) => (p.$closing ? 'none' : 'auto')};

  /* На телефоні знизу бейдж закривав кнопку «Погода» — переносимо під шапку */
  @media (max-width: 767px) {
    top: calc(80px + env(safe-area-inset-top));
    bottom: auto;
    width: 220px;
    padding: 10px 12px;
  }
`;

const CornerHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding-right: 22px;
`;

const CornerTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  span { display: block; font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.65); }
`;

const CornerButton = styled.button`
  ${primaryButton}
  width: 100%;
  border-radius: 10px;
  padding: 9px 12px;
  font-size: 14px;
`;

const CornerHint = styled.div`
  margin-top: 8px;
  font-size: 11px;
  line-height: 1.35;
  color: rgba(255,255,255,0.6);
`;

const CornerClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 50%;
  color: rgba(255,255,255,0.8);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s ease;
  &:hover { background: rgba(255,255,255,0.2); color: #fff; }
`;

// Маленький Доміно: кадр відео 16:9 з великими прозорими полями — обрізаємо до самого індика
const MascotFrame = styled.div`
  flex-shrink: 0;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: radial-gradient(circle at 50% 60%, rgba(255,179,108,0.35) 0%, rgba(255,179,108,0.08) 70%);
  border: 1px solid rgba(255,179,108,0.45);
  animation: ${bob} 2.6s ease-in-out infinite;

  video {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 170%;
    transform: translate(-50%, -50%);
    image-rendering: pixelated;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const MascotFallback = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(p) => Math.round(p.$size * 0.5)}px;
`;

const PopoverContainer = styled.div`
  ${panelSurface}
  position: fixed;
  width: min(320px, calc(100vw - 20px));
  box-sizing: border-box;
  padding: 14px 14px 12px;
  border-radius: 16px;
  z-index: 10002;
  pointer-events: auto;
  transition: opacity 0.3s ease, top 0.3s ease, left 0.3s ease;
`;

const PopoverHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const PopoverMeta = styled.div`
  flex: 1;
  min-width: 0;
`;

const PopoverName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${ACCENT};
`;

const StepLabel = styled.div`
  font-size: 11px;
  color: rgba(255,255,255,0.6);
  margin: 2px 0 6px;
`;

const Progress = styled.div`
  display: flex;
  gap: 3px;
`;

const ProgressDot = styled.span`
  flex: 1;
  height: 4px;
  border-radius: 999px;
  background: ${(p) => (p.$done ? ACCENT : 'rgba(255,255,255,0.15)')};
  transition: background 0.3s ease;
`;

const PopoverText = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.5;
  color: #f3eee8;
`;

const PopoverActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;
`;

const NextButton = styled.button`
  ${primaryButton}
  padding: 7px 16px;
  border-radius: 9px;
  font-size: 13px;
`;

const SkipAllButton = styled.button`
  background: transparent;
  color: rgba(255,255,255,0.6);
  border: none;
  padding: 6px 4px;
  cursor: pointer;
  font-size: 12px;
  &:hover { color: #fff; text-decoration: underline; }
`;

const HighlightOutline = styled.div`
  position: fixed;
  border: 2px solid ${ACCENT};
  border-radius: 12px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.62);
  animation: ${pulse} 1.8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const DominoMascot = ({ size }) => {
  const [failed, setFailed] = useState(!canPlayAlphaWebm);
  return (
    <MascotFrame $size={size} aria-hidden="true">
      {failed ? (
        <MascotFallback $size={size}>🦃</MascotFallback>
      ) : (
        <video
          src={dominoVideo}
          autoPlay={!prefersReducedMotion()}
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setFailed(true)}
        />
      )}
    </MascotFrame>
  );
};

const DominoTutorial = ({ user }) => {
  const {
    isActive,
    currentStep,
    showInitialModal,
    startTutorial,
    skipTutorial,
    refs,
    nextStep,
    jumpToStep,
    closeTutorial
  } = useTutorial();

  const [popoverStyle, setPopoverStyle] = useState({});
  const [highlightStyle, setHighlightStyle] = useState({ display: 'none' });
  const [popoverVisible, setPopoverVisible] = useState(true);
  const [skipDisabled, setSkipDisabled] = useState(false);
  const showTimerRef = useRef(null);
  const currentTargetRef = useRef(null);
  // Тримаємо віконце змонтованим на час анімації зникнення.
  const [promptMounted, setPromptMounted] = useState(false);

  useEffect(() => {
    if (showInitialModal) {
      setPromptMounted(true);
      return undefined;
    }
    const t = setTimeout(() => setPromptMounted(false), 300);
    return () => clearTimeout(t);
  }, [showInitialModal]);

  const recalcPosition = useCallback((targetEl) => {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const top = Math.max(2, rect.top - 5);
    const left = Math.max(2, rect.left - 5);
    const width = Math.min(rect.width + 10, window.innerWidth - left - 2);
    const height = Math.min(rect.height + 10, window.innerHeight - top - 2);
    setHighlightStyle({ top, left, width, height });

    const popW = Math.min(320, window.innerWidth - 20);
    const popH = 250;
    let popTop = rect.bottom + 15;
    let popLeft = rect.left;
    if (popTop + popH > window.innerHeight) popTop = rect.top - popH - 10;
    if (popTop < 5) popTop = 5;
    if (popLeft + popW > window.innerWidth) popLeft = window.innerWidth - popW - 10;
    if (popLeft < 5) popLeft = 5;
    setPopoverStyle({ top: popTop, left: popLeft });
  }, []);

  // Lock scroll during tutorial
  useEffect(() => {
    if (!isActive) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isActive]);

  // Per-step setup
  useEffect(() => {
    if (!isActive) return;
    const stepData = steps.find(s => s.step === currentStep);
    if (!stepData) { closeTutorial(); return; }
    setPopoverVisible(true);
    setSkipDisabled(false);
    if (stepData.onEnter) stepData.onEnter();
    if (stepData.autoAction) stepData.autoAction();

    const targetEl = stepData.targetName
      ? refs.current[stepData.targetName]
      : stepData.targetId
        ? document.getElementById(stepData.targetId)
        : null;
    currentTargetRef.current = targetEl;

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const t = setTimeout(() => recalcPosition(targetEl), 500);
      const onResize = () => recalcPosition(targetEl);
      window.addEventListener('resize', onResize);
      return () => { clearTimeout(t); window.removeEventListener('resize', onResize); };
    } else {
      setHighlightStyle({ display: 'none' });
      setPopoverStyle({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });
    }
  }, [currentStep, isActive]);

  // Step 1: hide popover while typing, show after 5s idle
  useEffect(() => {
    if (!isActive || currentStep !== 1) return;
    const handleInputChange = (e) => {
      const hasValue = e.detail && e.detail.value && e.detail.value.trim().length > 0;
      if (hasValue) {
        setPopoverVisible(false);
        clearTimeout(showTimerRef.current);
        showTimerRef.current = setTimeout(() => setPopoverVisible(true), 5000);
      } else {
        clearTimeout(showTimerRef.current);
        setPopoverVisible(true);
      }
    };
    window.addEventListener('domino-hero-input-change', handleInputChange);
    return () => {
      window.removeEventListener('domino-hero-input-change', handleInputChange);
      clearTimeout(showTimerRef.current);
    };
  }, [isActive, currentStep]);

  // Listen for city added → advance step 1
  useEffect(() => {
    if (!isActive) return;
    const handleNextAuto = () => {
      if (currentStep === 1) nextStep();
    };
    window.addEventListener('domino-next-step-auto', handleNextAuto);
    return () => window.removeEventListener('domino-next-step-auto', handleNextAuto);
  }, [isActive, currentStep, nextStep]);

  // Listen for gear click → advance step 3
  useEffect(() => {
    if (!isActive) return;
    const handleGear = () => {
      if (currentStep === 3) nextStep();
    };
    window.addEventListener('domino-weather-gear-clicked', handleGear);
    return () => window.removeEventListener('domino-weather-gear-clicked', handleGear);
  }, [isActive, currentStep, nextStep]);

  const steps = [
    {
      step: 1,
      targetName: 'heroInput',
      text: 'Привіт, я Доміно! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у списку. Можна натиснути кілька міст поспіль.',
    },
    {
      step: 2,
      targetName: null,
      text: 'Чудово! А тепер давай спустимось нижче, щоб подивитися прогноз.',
      autoAction: () => {
        setTimeout(() => {
          document.body.style.overflow = '';
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          setTimeout(() => {
            document.body.style.overflow = 'hidden';
            nextStep();
          }, 1500);
        }, 2000);
      },
      noSkip: true
    },
    {
      step: 3,
      targetName: 'weatherGear',
      text: 'У цій картці показано детальний прогноз. Натисни на іконку шестерні для налаштувань.',
    },
    {
      step: 4,
      targetName: 'weatherModal',
      text: 'Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.\n\n• До 8 карток плюс GPS-картка (понад 5 — навантаження на пристрій).\n• До 40 нових карток на добу.'
    },
    {
      step: 5,
      // Секція карт у App має id="map" — спускаємось до неї й підсвічуємо
      targetId: 'map',
      text: 'Тут усі карти в одному місці: Windy і Ventusky для погоди, мапа тривог, DeepState та інші.\n\n• Обирай джерело в списку карт.\n• Додавай власні фрейми — сайти, які дозволяють вбудовування (ми перевіримо це за тебе).\n• На комп’ютері та планшеті (горизонтально) можна відкрити дві карти поруч.',
      onEnter: () => {
        window.dispatchEvent(new CustomEvent('domino-close-weather-settings'));
      }
    },
    {
      step: 6,
      targetName: 'newsHeader',
      text: 'Додавай свої джерела новин! Ми автоматично блокуємо казино, 18+, політику та кримінал. Згодом тут можна підключати YouTube, Telegram та інші канали.'
    },
    {
      step: 7,
      targetName: 'headerBgTheme',
      text: 'Персоналізуй сайт: обирай тематичні фони (Динофроз, природа, кіно) та налаштовуй загальну тему сайту.'
    },
    {
      step: 8,
      targetName: null,
      text: user ? 'Дякуємо, що ти з нами! Насолоджуйся сайтом.' : 'Увійди, щоб отримати повний доступ. І пам’ятай: не жартуй з Ніцероном! :)',
      isLast: true,
    }
  ];

  const handleSkip = useCallback(() => {
    if (skipDisabled) return;
    setSkipDisabled(true);
    const sd = steps.find(s => s.step === currentStep);
    if (!sd) return;
    if (sd.isLast) { closeTutorial(); return; }

    if (currentStep === 1) {
      const heroInput = refs.current['heroInput'];
      const inputHasValue = heroInput && heroInput.value && heroInput.value.trim().length > 0;
      if (!inputHasValue) {
        // Insert Konotop only if user hasn't typed anything
        window.dispatchEvent(new CustomEvent('domino-auto-input-konotop'));
        setTimeout(() => nextStep(), 2500);
      } else {
        // User typed — don't force Konotop, just re-enable skip
        setTimeout(() => setSkipDisabled(false), 500);
        return;
      }
    } else if (currentStep === 3) {
      window.dispatchEvent(new CustomEvent('domino-open-weather-settings'));
      nextStep();
    } else {
      nextStep();
    }
    setTimeout(() => setSkipDisabled(false), 2000);
  }, [skipDisabled, currentStep, steps, closeTutorial, nextStep, refs]);

  const handleSkipAll = useCallback(() => {
    if (skipDisabled) return;
    window.dispatchEvent(new CustomEvent('domino-close-weather-settings'));
    jumpToStep(TOTAL_STEPS);
  }, [skipDisabled, jumpToStep]);

  if (promptMounted || showInitialModal) {
    return (
      <CornerPrompt $closing={!showInitialModal} role="dialog" aria-label="Навчання від Доміно">
        <CornerClose onClick={skipTutorial} aria-label="Закрити">×</CornerClose>
        <CornerHead>
          <DominoMascot size={52} />
          <CornerTitle>
            Я Доміно!
            <span>Покажу сайт за хвилину</span>
          </CornerTitle>
        </CornerHead>
        <CornerButton onClick={startTutorial}>Почати навчання</CornerButton>
        <CornerHint>Запустити знову можна в Параметрах → Режими сайту</CornerHint>
      </CornerPrompt>
    );
  }

  if (!isActive) return null;
  const currentStepData = steps.find(s => s.step === currentStep);
  if (!currentStepData) return null;
  const showHighlight = highlightStyle.display !== 'none';
  const showSkipToEnd = !currentStepData.isLast && !currentStepData.noSkip && currentStep <= 6;

  return (
    <>
      {showHighlight && <HighlightOutline style={highlightStyle} />}
      <PopoverContainer
        role="dialog"
        aria-live="polite"
        style={{ ...popoverStyle, opacity: popoverVisible ? 1 : 0, pointerEvents: popoverVisible ? 'auto' : 'none' }}
      >
        <PopoverHead>
          <DominoMascot size={48} />
          <PopoverMeta>
            <PopoverName>Доміно</PopoverName>
            <StepLabel>Крок {currentStep} з {TOTAL_STEPS}</StepLabel>
            <Progress aria-hidden="true">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                <ProgressDot key={i} $done={i < currentStep} />
              ))}
            </Progress>
          </PopoverMeta>
        </PopoverHead>
        <PopoverText>{currentStepData.text}</PopoverText>
        {!currentStepData.noSkip && (
          <PopoverActions>
            {showSkipToEnd ? (
              <SkipAllButton onClick={handleSkipAll} title={`Пропустити до кроку ${TOTAL_STEPS}`}>
                До кінця →
              </SkipAllButton>
            ) : <span />}
            <NextButton onClick={handleSkip} disabled={skipDisabled}>
              {currentStepData.isLast ? 'Завершити' : 'Пропустити'}
            </NextButton>
          </PopoverActions>
        )}
      </PopoverContainer>
    </>
  );
};

export default DominoTutorial;
