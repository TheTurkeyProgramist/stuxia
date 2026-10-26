import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTutorial } from './TutorialContext.jsx';
import castle from '../../photos/vip-modal/castle.webp';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.17);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const ModalBox = styled.div`
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 24px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${castle}) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;
  animation: ${fadeIn} 0.3s ease-out;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    max-width: 580px;
    padding: 40px 35px;
    border-radius: 16px;
    border-width: 3px;
  }
`;

const CornerPrompt = styled.div`
  position: fixed;
  bottom: 70px;
  right: 10px;
  max-width: 240px;
  padding: 12px 14px 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  z-index: 10000;
  animation: ${(p) => (p.$closing ? fadeOut : fadeIn)} 0.3s ease-out forwards;
  pointer-events: ${(p) => (p.$closing ? 'none' : 'auto')};
  box-shadow: 0 6px 18px rgba(0,0,0,0.5);
`;

const CornerButton = styled.button`
  width: 100%;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover { background: rgba(255,255,255,0.25); }
`;

const CornerHint = styled.div`
  margin-top: 8px;
  font-size: 11px;
  line-height: 1.35;
  color: #ccc;
`;

const CornerClose = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  &:hover { color: #fff; }
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  font-size: 22px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 18px;
  }
`;

const ModalText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 30px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Button = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 20px;
  width: 100%;
  max-width: 450px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255,255,255,0.25);
    transform: translateY(-1px);
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 24px;
    border-width: 2px;
    border-radius: 8px;
  }
`;

const PopoverContainer = styled.div`
  position: fixed;
  background: #000;
  color: #fff;
  border: 2px solid #ffb36c;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  z-index: 10002;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  pointer-events: auto;
`;

const NextButton = styled.button`
  margin-top: 10px;
  background: #ffb36c;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const SkipAllButton = styled.button`
  margin-top: 10px;
  background: transparent;
  color: #999;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  &:hover { color: #fff; border-color: #fff; }
`;

const HighlightOutline = styled.div`
  position: fixed;
  border: 3px dashed #ffb36c;
  border-radius: 6px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.65);
`;

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

    const popW = 300;
    const popH = 220;
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

    const targetEl = stepData.targetName ? refs.current[stepData.targetName] : null;
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      text: 'Привіт! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у випадаючому списку.',
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
      text: 'Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.\n\n• Ліміт: до 8 карток одночасно (до 1000 створень на добу).'
    },
    {
      step: 5,
      targetName: null,
      text: 'Нижче ти знайдеш кліматичну карту Windy.com, чат із Gemini та інструменти для роботи із зображеннями (Стихії, Pixabay...).',
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
      text: user ? 'Дякуємо, що ти з нами! Насолоджуйся сайтом.' : 'Увійди, щоб отримати повний доступ. І пам\u2019ятай: не жартуй з Ніцероном! :)',
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
    jumpToStep(8);
  }, [skipDisabled, jumpToStep]);

  if (promptMounted || showInitialModal) {
    return (
      <CornerPrompt $closing={!showInitialModal}>
        <CornerClose onClick={skipTutorial} aria-label="Закрити">×</CornerClose>
        <CornerButton onClick={startTutorial}>Отримати навчання!</CornerButton>
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
      <PopoverContainer style={{ ...popoverStyle, opacity: popoverVisible ? 1 : 0, pointerEvents: popoverVisible ? 'auto' : 'none', transition: 'opacity 0.3s ease' }}>
        <div style={{ fontSize: '12px', color: '#ccc', marginBottom: '5px' }}>Крок {currentStep}/8 (Доміно)</div>
        <div style={{ whiteSpace: 'pre-wrap' }}>{currentStepData.text}</div>
        {!currentStepData.noSkip && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <NextButton onClick={handleSkip} disabled={skipDisabled}>
              {currentStepData.isLast ? 'Завершити' : 'Пропустити'}
            </NextButton>
            {showSkipToEnd && (
              <SkipAllButton onClick={handleSkipAll} title="Пропустити до кроку 8">
                До кінця →
              </SkipAllButton>
            )}
          </div>
        )}
      </PopoverContainer>
    </>
  );
};

export default DominoTutorial;
