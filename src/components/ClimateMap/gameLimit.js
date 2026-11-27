import { useEffect, useState } from "react";

// Денний ліміт на всі ігри разом (щоб не було залежності). Скидається опівночі за місцевим часом.
// Це м'яке обмеження: хто очистить дані сайту, той отримає новий лічильник
export const GAME_LIMIT_MINUTES = 60;
const LIMIT_SECONDS = GAME_LIMIT_MINUTES * 60;
const STORAGE_KEY = "styxia_game_time";

const today = () => new Date().toDateString();

// Запасний лічильник у пам'яті — коли localStorage недоступний (приватне вікно)
let memory = { day: "", seconds: 0 };

const readUsed = () => {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    saved = null;
  }
  const entry = saved || memory;
  return entry.day === today() ? Number(entry.seconds) || 0 : 0;
};

const writeUsed = (seconds) => {
  memory = { day: today(), seconds };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
  } catch {
    /* ліміт діятиме до перезавантаження сторінки */
  }
};

// Чи видно елемент на екрані: гру, яку прогорнули повз, не рахуємо
const isOnScreen = (element) => {
  if (!element) return false;
  const { top, bottom } = element.getBoundingClientRect();
  return bottom > 0 && top < window.innerHeight;
};

// isPlaying — на карті зараз показано гру; повертає, скільки секунд лишилось на сьогодні
export const useGameLimit = (isPlaying, areaRef) => {
  const [used, setUsed] = useState(readUsed);

  useEffect(() => {
    if (!isPlaying) return undefined;
    setUsed(readUsed());
    const timer = setInterval(() => {
      if (document.hidden || !isOnScreen(areaRef.current)) return;
      // Читаємо щоразу з пам'яті: так новий день сам починається з нуля
      const next = Math.min(LIMIT_SECONDS, readUsed() + 1);
      writeUsed(next);
      setUsed(next);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, areaRef]);

  return Math.max(0, LIMIT_SECONDS - used);
};

export const formatGameTime = (seconds) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
