import { useEffect, useState } from "react";

/**
 * Логіка вертикальної каруселі стартових питань (вигляд у кожного вікна свій).
 * Картки рендеряться з дублікатами на початку, щоб прокрутка була безшовною.
 */
export const useStarterCarousel = (count, { interval = 3000 } = {}) => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (isPaused || count === 0) return undefined;
    const timer = setInterval(() => {
      // Не виходимо за дубльовані картки, навіть якщо transitionend не спрацював
      setPosition((current) => Math.min(current + 1, count));
    }, interval);
    return () => clearInterval(timer);
  }, [isPaused, count, interval]);

  // Після прокрутки до дубліката першої картки миттєво повертаємось на початок.
  // Таймер замість onTransitionEnd: подія не приходить у фоновій вкладці чи прихованому вікні,
  // через що позиція раніше росла без кінця і картки зникали.
  useEffect(() => {
    if (position < count) return undefined;
    const resetTimer = setTimeout(() => {
      setIsResetting(true);
      setPosition(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsResetting(false));
      });
    }, 700);
    return () => clearTimeout(resetTimer);
  }, [position, count]);

  // Пауза під курсором і фокусом клавіатури
  const pauseProps = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocus: () => setIsPaused(true),
    onBlur: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
    },
  };

  return { position, isResetting, pauseProps };
};
