import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ultra from "../../media/backgrounds/scenes/foggy-forest-loader.webp";
import { DEFAULT_BGS } from "../Hero/defaultBgs.js";
import { suspendBgMusic } from "../../utils/bgMusicSuspend";
import { isAnimationsDisabled } from "../../utils/animationsPref";

// Тривалість плавного закриття титрів (фонова музика за цей час починає повертатися)
const CLOSE_FADE_MS = 800;
// Скільки показується кожне зображення галереї
const GALLERY_SLIDE_MS = 2500;
// Скільки триває фінальний кадр «Дякуємо!» перед автозакриттям
const FINALE_MS = 4000;

// 1. Текстові титри
const CAPTIONS = [
  { duration: 5500, text: "Я хочу людей, які з радістю використовуватимуть мій сайт для різних цілей." },
  { duration: 3500, text: "Надати вам чудову погоду — будючий обов'язок." },
  { duration: 4500, text: "Політика — це фактор, який ми не підтримуємо і який ви побачите, але за бажанням..." },
  { duration: 4000, text: "Різноманітна та захоплива музика, яку можна додавати." },
  { duration: 3500, text: "Пишіть, підказуйте, що зробити для вас :)" },  { duration: 4000, text: "Налаштуйте сайт під себе. Можливостей для персоналізації дуже багато!" },
  { duration: 5500, text: "Колись я не думав, що це може дійти до такого масштабу, проте фантазія робить дива :)" },
  { duration: 8500, text: "Велика подяка: API-сайтам, інструментам Firebase, npm-плагінам, які допомогли при створенні Стихії. Малятко ТВ, Mondo TV, Пікселю за гарні роки дитинства. І найголовніше — сім'ї та близьким." },
  { duration: 4500, text: "Окрема подяка: всім, хто дивиться ці титри та загалом користується сайтом :)" },
];
// 2. Музичні титри (список саундтреків з авторами)
const MUSIC_CREDITS = [
  { title: "Динофроз", author: "Mondo TV" },
  { title: "Monody, Unity, Hunger", author: "TheFatRat" },
  { title: "Theory of Everything, Theory of Everything II", author: "DJ-Nate" },
  { title: "Звуки інтерфейсу", author: "Авторська робота" },
];
// 3. Галерея зображень
const GALLERY_IMAGES = DEFAULT_BGS.filter(bg => /\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(bg.src || ""));

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`;

const textFade = keyframes`
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;

const overlayIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: ${overlayIn} 0.6s ease-out;
  /* Плавне закриття: усе гасне в чорне */
  opacity: ${(p) => (p.$closing ? 0 : 1)};
  transition: opacity ${CLOSE_FADE_MS}ms ease-in-out;
  pointer-events: ${(p) => (p.$closing ? "none" : "auto")};
`;
const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
`;

const SceneImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заповнює весь екран без бічних смуг та зсувів */
  animation: ${fadeIn} 0.8s ease-in-out forwards;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  font-size: 12px;
  padding: 8px 14px;
  border: 1px solid rgba(148, 255, 250, 0.5);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.75);
  color: #94fffa;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(148, 255, 250, 0.2);
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  z-index: 5;
  width: min(90%, 900px);
  padding: 12px 18px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  animation: ${textFade} 0.6s ease-out forwards;
`;

const finaleIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.94); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

const FinaleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  width: min(90%, 640px);
  padding: 28px 32px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(148, 255, 250, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  text-align: center;
  animation: ${finaleIn} 0.9s ease-out forwards;

  h2 {
    margin: 0 0 8px;
    font-size: clamp(32px, 6vw, 52px);
    color: #94fffa;
    text-shadow: 0 0 24px rgba(148, 255, 250, 0.45);
  }

  p {
    margin: 0;
    font-size: 15px;
    color: #e6e6e6;
  }
`;

const Badge = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(148, 255, 250, 0.3);
  padding: 10px 22px;
  border-radius: 20px;
  color: #94fffa;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-align: center;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  animation: ${textFade} 0.5s ease-out forwards;

  span {
    color: #fff;
    font-weight: bold;
  }
`;

const KatSceneModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const releaseBgMusicRef = useRef(null);
  const closeTimerRef = useRef(null);

  // Фази кат-сцени: 'text' | 'music' | 'gallery'
  const [phase, setPhase] = useState("text");
  const [captionIndex, setCaptionIndex] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Титри йдуть поза фоновою музикою: на їхній час вона плавно затихає,
  // а після закриття так само плавно повертається (див. utils/bgMusicSuspend.js)
  useEffect(() => {
    const release = suspendBgMusic();
    releaseBgMusicRef.current = release;
    return () => {
      release();
      clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Плавне закриття: титри гаснуть, музика одночасно повертається
  const requestClose = useCallback(() => {
    if (closeTimerRef.current) return;
    releaseBgMusicRef.current?.();
    if (isAnimationsDisabled()) {
      onClose();
      return;
    }
    setIsClosing(true);
    closeTimerRef.current = setTimeout(onClose, CLOSE_FADE_MS);
  }, [onClose]);

  // Фаза 1: Текстові титри
  useEffect(() => {
    if (phase !== "text") return;

    const timer = setTimeout(() => {
      if (captionIndex < CAPTIONS.length - 1) {
        setCaptionIndex((prev) => prev + 1);
      } else {
        // Переходимо до фази музичних титрів
        setPhase("music");
      }
    }, CAPTIONS[captionIndex].duration);

    return () => clearTimeout(timer);
  }, [captionIndex, phase]);

  // Фаза 2: Музичні титри (показуємо кожен трек на 3 секунди)
  useEffect(() => {
    if (phase !== "music") return;

    const musicTimer = setInterval(() => {
      setMusicIndex((prev) => {
        if (prev < MUSIC_CREDITS.length - 1) {
          return prev + 1;
        } else {
          // Коли всі треки показали — переходимо до галереї зображень
          setPhase("gallery");
          return prev;
        }
      });
    }, 3000);

    return () => clearInterval(musicTimer);
  }, [phase]);

  // Фаза 3: Галерея зображень — одне коло, кожне зображення GALLERY_SLIDE_MS
  useEffect(() => {
    if (phase !== "gallery") return;
    if (GALLERY_IMAGES.length === 0) {
      setPhase("finale");
      return;
    }

    const galleryTimer = setInterval(() => {
      setGalleryIndex((prev) => {
        if (prev < GALLERY_IMAGES.length - 1) return prev + 1;
        // Показали всі зображення — фінальний кадр
        setPhase("finale");
        return prev;
      });
    }, GALLERY_SLIDE_MS);

    return () => clearInterval(galleryTimer);
  }, [phase]);

  // Фаза 4: «Дякуємо!» — і титри самі плавно закриваються
  useEffect(() => {
    if (phase !== "finale") return;
    const finaleTimer = setTimeout(requestClose, FINALE_MS);
    return () => clearTimeout(finaleTimer);
  }, [phase, requestClose]);

  // Закриття через ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") requestClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [requestClose]);

  const currentBg = GALLERY_IMAGES[galleryIndex];
  const currentTrack = MUSIC_CREDITS[musicIndex];

  return (
    <Overlay $closing={isClosing}>
      <SceneContainer>
        {/* Стартне фонове зображення для текстів/музики, або зміна слайдів у галереї */}
        <SceneImage
          key={phase === "gallery" ? `gallery-${galleryIndex}` : phase === "finale" ? "finale-bg" : "hero-bg"}
          src={phase === "gallery" ? currentBg?.src : ultra}
          alt="Stuxia Showcase"
        />

        <CloseButton type="button" onClick={requestClose}>
          Пропустити
        </CloseButton>

        {/* 1. Показ текстових титрів */}
        {phase === "text" && CAPTIONS[captionIndex]?.text && (
          <Caption key={`caption-${captionIndex}`}>
            {CAPTIONS[captionIndex].text}
          </Caption>
        )}

        {/* 2. Показ музичних титрів */}
        {phase === "music" && currentTrack && (
          <Badge key={`music-${musicIndex}`}>
            Музичний саундтрек: <span>{currentTrack.title}</span> — {currentTrack.author}
          </Badge>
        )}

        {/* 3. Показ галереї картин */}
        {phase === "gallery" && currentBg && (
          <Badge key={`gallery-${galleryIndex}`}>
            Зображення на сайті: <span>{currentBg.name}</span> {currentBg.author ? `— ${currentBg.author}` : ""}
          </Badge>
        )}

        {/* 4. Фінальний кадр */}
        {phase === "finale" && (
          <FinaleText>
            <h2>Дякуємо!</h2>
            <p>Гарної погоди та гарного настрою — ваша Стихія</p>
          </FinaleText>
        )}

      </SceneContainer>
    </Overlay>
  );
};

export default KatSceneModal;