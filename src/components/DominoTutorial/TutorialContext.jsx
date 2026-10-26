import React, { createContext, useState, useRef, useContext, useEffect } from 'react';
import localforage from 'localforage';

const TutorialContext = createContext();
const SEEN_KEY = 'domino_tutorial_seen';
const SHOWN_COUNT_KEY = 'domino_tutorial_shown_count';
const MAX_PROMPT_VISITS = 2;
const PROMPT_VISIBLE_MS = 9000;

export const TutorialProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showInitialModal, setShowInitialModal] = useState(false);
  const refs = useRef({});

  const registerRef = (name, ref) => {
    if (ref) {
      refs.current[name] = ref;
    } else {
      delete refs.current[name];
    }
  };

  useEffect(() => {
    let timerId;
    let hideTimerId;
    let cancelled = false;
    const checkTutorial = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const hasSearchQuery =
          searchParams.has("q") ||
          searchParams.has("city") ||
          searchParams.has("search") ||
          searchParams.has("query") ||
          searchParams.has("pohoda") ||
          window.location.search.toLowerCase().includes("погода");
        
        if (hasSearchQuery) {
          setShowInitialModal(false);
          setIsActive(false);
          return;
        }
      } catch (e) {}

      // Згода/хрестик (SEEN_KEY) або старий ключ — більше не пропонуємо.
      // Інакше пропозиція висить PROMPT_VISIBLE_MS і зникає сама; після
      // MAX_PROMPT_VISITS заходів без згоди її видаляємо назавжди.
      const seen = await localforage.getItem(SEEN_KEY);
      const legacy = await localforage.getItem('domino_tutorial_prompt');
      const shownCount = (await localforage.getItem(SHOWN_COUNT_KEY)) || 0;
      if (cancelled || seen || legacy) return;
      if (shownCount >= MAX_PROMPT_VISITS) {
        await localforage.setItem(SEEN_KEY, true);
        return;
      }
      // Даємо погоді встигнути з'явитися, щоб вікно не перекривало її одразу.
      timerId = setTimeout(async () => {
        await localforage.setItem(SHOWN_COUNT_KEY, shownCount + 1);
        setShowInitialModal(true);
        hideTimerId = setTimeout(() => setShowInitialModal(false), PROMPT_VISIBLE_MS);
      }, 6000);
    };
    checkTutorial();
    return () => {
      cancelled = true;
      clearTimeout(timerId);
      clearTimeout(hideTimerId);
    };
  }, []);

  const startTutorial = () => {
    localforage.setItem(SEEN_KEY, true);
    setShowInitialModal(false);
    setIsActive(true);
    setCurrentStep(1);
  };

  const skipTutorial = () => {
    localforage.setItem(SEEN_KEY, true);
    setShowInitialModal(false);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const jumpToStep = (step) => {
    setCurrentStep(step);
  };

  const closeTutorial = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  return (
    <TutorialContext.Provider
      value={{
        isActive,
        setIsActive,
        currentStep,
        setCurrentStep,
        refs,
        registerRef,
        nextStep,
        jumpToStep,
        closeTutorial,
        showInitialModal,
        startTutorial,
        skipTutorial,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};

export const useTutorial = () => useContext(TutorialContext);
