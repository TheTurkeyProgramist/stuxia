import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { createPortal } from "react-dom";
import { FaMountainCity, FaTemperatureArrowUp } from "react-icons/fa6";
import { FaSnowflake, FaWind } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import planes from "../../media/third-party/services/planes.webp";
import castle from "../../media/backgrounds/scenes/turkey-in-dragon-museum.webp"
import {
  FiClock,
  FiDownload,
  FiDroplet,
  FiGrid,
  FiImage,
  FiRefreshCw,
  FiRotateCw,
  FiSearch,
  FiShuffle,
  FiSun,
  FiUploadCloud,
  FiVideo,
  FiX,
  FiZap,
  FiZoomIn,
} from "react-icons/fi";
import styled, { keyframes, css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  MdAccessTime,
  MdMore,
  MdSearch,
  MdWallpaper,
  MdAutoAwesome,
  MdTranslate,
  MdExplore,
  MdCheck,
  MdCheckCircle,
  MdErrorOutline,
  MdWarningAmber,
  MdSync,
  MdClose,
} from "react-icons/md";
import { useTranslation } from "react-i18next";
import {
  addCustomDay,
  removeCustomDay,
} from "../../features/counter/Counter.js";
import localforage from "localforage";
import hills from "../../media/backgrounds/scenes/foggy-forest.webp";
import herotext from "../../media/brand/wordmark-stykhiia.webp";
import village from "../../media/third-party/games/dragon-village-3.webp"
import faded from "../../media/backgrounds/scenes/resort.webp";
import { DEFAULT_BGS, DEFAULT_HERO_BG, MOBILE_CONTAIN_BGS } from "./defaultBgs";
import { HeroVersionBadge } from "./HeroCredits";
import QuickWeather, { ADD_CITY_OPTION } from "./QuickWeather.jsx";
import { lazyWithRetry } from "../../utils/lazyWithRetry.js";
import { ModalSuspense } from "../Loader/ModalLoading.jsx";
import { OPEN_BG_MODAL_EVENT, OPEN_TIMEZONE_EVENT } from "./heroEvents.js";
import { getEagerChunk, loadNews } from "../../utils/eagerChunks.js";
import { findCityInDatabase, UKRAINE_CITIES_40 } from "../../utils/citiesDatabase";
// Новини (~120 КБ) — окремим файлом. Телефон: після першого показу сторінки, щоб не затримувати
// фон Hero (LCP). ПК: уже завантажені до першого малювання (eagerChunks.js)
const LazyNews = React.lazy(loadNews);
const News = (props) => {
  const EagerNews = getEagerChunk("News");
  return EagerNews ? <EagerNews {...props} /> : <LazyNews {...props} />;
};
// ШІ-помічник (Gemini + markdown) вантажиться лише при відкритті модалки
const React_lazy_Aihelp = lazyWithRetry(() => import("../Aihelp/Aihelp.jsx"));
import AiAttachBadges from "../AiShared/AiAttachBadges.jsx";
import toast, { Toaster } from 'react-hot-toast';
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import { Tooltip } from "../Tooltip/Tooltip";
import WallpaperScene, { findWallpaper } from "./WallpaperScene.jsx";
import { isWallpaperSrc } from "../../utils/wallpaperPrefs.js";
// Модалки вантажаться при першому відкритті, а не на старті
const TimezoneModal = lazyWithRetry(() => import("./TimezoneModal.jsx"));
const BgModal = lazyWithRetry(() => import("./BgModal.jsx"));
const LanguageModal = lazyWithRetry(() => import("../Modals/LanguageModal.jsx"));

// true з першого разу, коли flag став true, і далі назавжди: модалка після
// першого відкриття лишається змонтованою й зберігає свій стан, як і раніше
const useOpenedOnce = (flag) => {
  const [opened, setOpened] = useState(flag);
  if (flag && !opened) setOpened(true);
  return opened || flag;
};
import { usePageActive } from "../../utils/pageActivity.js";
import { usePrefValue } from "../../utils/betaFeatures";
import { setPref } from "../../utils/prefsStore.js";
import { OPEN_HERO_MODAL_EVENT } from "../Commands/commandHost.js";

const SCROLL_TO_NEW_CARD_KEY = "hero_scroll_to_new_card";
const bgCardThumbnails = {
  [village]: {
    src: village,
  },
  [faded]: {
    src: faded,
  },
};

const showThemeAlert = (message, isDarkMode) => {
  toast(message, {
    duration: 4000,
    style: {
      backgroundColor: isDarkMode ? "#0c0c0cbf" : "#fdff98bb",
      color: isDarkMode ? "#ffffff" : "#1a1a1a",
      border: "2px solid #00afce",
      borderRadius: "6px",
      boxShadow: `0 4px 12px rgba(0, 0, 0, ${isDarkMode ? "0.5" : "0.15"})`,
      fontSize: "13px",
      fontWeight: "500",
      zIndex: "10000",
      padding: "10px 16px",
      backdropFilter: "blur(4px)", // Додає приємне розмиття фону під напівпрозорим кольором
    },
    icon: '⚠️', 
  });
};
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;
const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;
const fadeInContent = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const modeSwapIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
`;
const modeSwapAnimation = css`
  animation: ${modeSwapIn} 260ms cubic-bezier(0.22, 1, 0.36, 1) backwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  html[data-animations-off] & {
    animation: none;
  }
`;
const HeroDiv = styled.div`
  position: relative;
  width: 100%;
  /* висота — за вмістом: фіксовані 632px після переїзду логотипа в шапку лишали порожнечу внизу */
  display: flex;
  flex-direction: column;
  /* одразу під фіксованою шапкою (48px), логотип тепер у шапці */
  justify-content: flex-start;
  padding-top: 58px;
  /* мінімальний відступ від кнопок новин до першої секції (погоди) під Hero */
  padding-bottom: 4px;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;
const DelayedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${(props) =>
    props.$start
      ? css`
          ${fadeInContent} 1s ease-out forwards
        `
      : "none"};
  animation-delay: ${(props) => (props.$start ? "0.15s" : "0s")};
`;
// Тривалість плавної зміни слайдів (налаштування прибрано)
const SLIDESHOW_TRANSITION = 1;

const isVideoSource = (src) => {
  if (!src) return false;
  if (src instanceof Blob) return src.type.startsWith("video/");
  if (typeof src !== "string") return false;
  return (
    src.includes(".mp4") ||
    src.includes(".webm") ||
    src.includes(".ogg") ||
    src.includes(".mov") ||
    src.startsWith("data:video/") ||
    src.startsWith("blob:")
  );
};

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};





// Зворотний геокодинг без ключа (OpenStreetMap Nominatim). Повертає [] якщо поруч немає населеного пункту
const reverseGeocode = async (lat, lon) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=12&accept-language=uk`,
  );
  const data = await res.json();
  const a = data?.address;
  const name = a && (a.city || a.town || a.village || a.hamlet || a.municipality || data.name);
  if (!name) return [];
  return [{
    name,
    state: a.state || a.region,
    country: (a.country_code || "").toUpperCase(),
    lat: parseFloat(data.lat),
    lon: parseFloat(data.lon),
  }];
};

export const mergeCitySuggestions = (
  existingSuggestions = [],
  newSuggestions = [],
) => {
  const seen = new Set();
  return [...(existingSuggestions || []), ...(newSuggestions || [])].filter(
    (city) => {
      const key = `${city?.lat ?? ""}-${city?.lon ?? ""}-${city?.name ?? ""}-${city?.country ?? ""}`;
      if (!city || seen.has(key)) return false;
      seen.add(key);
      return true;
    },
  );
};

const BgLayerStyled = styled.div`
  position: ${(props) => (props.$isStickyBgMode ? "fixed" : "absolute")} !important;
  width: ${(props) => (props.$isStickyBgMode ? "100vw" : "100%")} !important;
  height: ${(props) => (props.$isStickyBgMode ? "100vh" : "100%")} !important;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition:
    opacity ${(props) => props.$transition}s ease-in-out,
    position 0.5s ease,
    width 0.5s ease,
    height 0.5s ease,
    z-index 0s;
  transform: translateZ(0);
  filter: ${(props) => {
    const filters = [];
    if (props.$blur > 0) filters.push(`blur(${props.$blur}px)`);
    if (props.$pixelation > 0.5) filters.push("url(#pixelate-hero)");
    return filters.length ? filters.join(" ") : "none";
  }};
  z-index: ${(props) => (props.$isStickyBgMode ? "-10" : "-2")} !important;
  will-change: opacity;
  backface-visibility: hidden;

  /* Телефон: фото з MOBILE_CONTAIN_BGS видно цілим, а смуги над і під ним
     заповнює розмита копія (як було на заставці завантаження) */
  .hero-bg-blur {
    display: none;
  }
  @media (max-width: 480px) {
    overflow: hidden;

    .hero-bg-blur {
      display: block;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(28px) saturate(1.3) brightness(0.8);
      transform: scale(1.2);
    }
    img[data-fit-mobile="contain"] {
      position: relative;
      object-fit: contain !important;
    }
  }
`;

const AiModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200000;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(18px) saturate(0.65);
  -webkit-backdrop-filter: blur(18px) saturate(0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${fadeIn} 180ms ease-out;
`;

const AiModalContainer = styled.div`
  width: calc(100vw - 32px);
  height: calc(100vh - 32px);
  max-height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  animation: ${fadeIn} 220ms ease-out;
`;

const AiModalBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: ${(p) => (p.$isDarkMode ? "#0e0e16" : "#f8f8fc")};
`;

// Кеш blob URL для відео-рядків — зберігає між монтуваннями, уникає повторних fetch
const videoBlobCache = new Map();

const BgLayer = React.memo((props) => {
  const {
    $image,
    $active,
    $focalX,
    $focalY,
    $videoStart,
    $videoEnd,
    $transition,
  } = props;
  // { key: $image, url }
  const [blobUrl, setBlobUrl] = useState(null);
  const videoRef = useRef(null);
  const layerRef = useRef(null);
  const isVideo = isVideoSource($image);
  const [inView, setInView] = useState(true);
  // Вкладка видима, вікно у фокусі й екран не перекриває модалка
  const pageActive = usePageActive();

  // Не декодуємо відео, коли Hero поза екраном
  useEffect(() => {
    if (!isVideo) return;
    const el = layerRef.current;
    let observer;
    if (el && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0 },
      );
      observer.observe(el);
    }
    return () => observer?.disconnect();
  }, [isVideo]);

  const shouldPlay = $active && inView && pageActive;

  useEffect(() => {
    // Завантажені файли (картинки й відео) зберігаються як Blob — показуємо через object URL
    if ($image instanceof Blob) {
      const objectUrl = URL.createObjectURL($image);
      setBlobUrl({ key: $image, url: objectUrl });
      return () => URL.revokeObjectURL(objectUrl);
    }
    if (!isVideo) return;
    // Кешований blob URL береться прямо під час рендеру, fetch не потрібен
    if (typeof $image !== "string" || !$image || videoBlobCache.has($image)) return;
    let active = true;
    fetch($image)
      .then((res) => res.blob())
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        // НЕ відкликаємо — URL залишається в кеші для повторного використання
        videoBlobCache.set($image, objectUrl);
        if (active) setBlobUrl({ key: $image, url: objectUrl });
      })
      .catch(() => {
        if (active) setBlobUrl({ key: $image, url: $image });
      });
    return () => {
      active = false;
    };
  }, [$image, isVideo]);

  // blobUrl зберігає, для якого $image він створений: після зміни фону
  // не підставляємо у <video> старе (або вже відкликане) посилання
  const url = !isVideo
    ? typeof $image === "string"
      ? $image
      : blobUrl?.key === $image
      ? blobUrl.url
      : ""
    : typeof $image === "string" && videoBlobCache.has($image)
    ? videoBlobCache.get($image)
    : blobUrl?.key === $image
    ? blobUrl.url
    : undefined;

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (shouldPlay) {
      if ($videoStart != null && vid.currentTime < $videoStart && vid.paused) {
        vid.currentTime = $videoStart;
      }
      if (vid.paused) {
        const p = vid.play();
        if (p !== undefined) p.catch(() => {});
      }
    } else if (!vid.paused) {
      // Шар, що згасає, грає до кінця переходу — інакше кадр «замерзає»
      const delay = inView && pageActive ? ($transition || 0) * 1000 : 0;
      const timer = setTimeout(() => {
        vid.pause();
        // У відео 1–2 ключові кадри, тож продовження з середини після паузи
        // змушує декодувати все від початку (підвисання при перемиканні).
        // Неактивний слайд перемотуємо на старт — там ключовий кадр.
        if (!$active) vid.currentTime = $videoStart ?? 0;
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [shouldPlay, $active, $transition, $videoStart, url]);

  // Якщо декодер завис (час не рухається), пробуємо play(), а потім
  // перезавантажуємо джерело з того ж місця — інакше відео лишається стояти
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !shouldPlay || !url) return;
    let lastTime = vid.currentTime;
    let stuckTicks = 0;
    const timer = setInterval(() => {
      if (vid.seeking || vid.readyState === 0) return;
      if (vid.currentTime !== lastTime) {
        lastTime = vid.currentTime;
        stuckTicks = 0;
        return;
      }
      stuckTicks += 1;
      if (stuckTicks === 1) {
        vid.play()?.catch(() => {});
      } else if (stuckTicks >= 3) {
        stuckTicks = 0;
        const resumeAt = vid.currentTime;
        vid.load();
        vid.currentTime = resumeAt;
        vid.play()?.catch(() => {});
      }
    }, 1500);
    return () => clearInterval(timer);
  }, [shouldPlay, url]);

  const videoStart = $videoStart ?? 0;
  const videoEnd = $videoEnd ?? null; // null = play to natural end

  // Заглушка: якщо фон не завантажився (файл перейменовано, старий шлях зі
  // збереження чи синхронізації), показуємо стандартний «Туманний ліс»
  const [failedSrc, setFailedSrc] = useState(null);
  const hasFailed = Boolean(url) && failedSrc === url;
  // Фон не обрано або він не завантажився — стандартний «Ліс TheTurkeyStudio»
  const shownSrc = hasFailed || !url ? DEFAULT_HERO_BG : url;
  const containOnMobile = MOBILE_CONTAIN_BGS.has(shownSrc);
  // Завантажене фото (Blob) ще готується — не показуємо на мить стандартний фон замість нього
  const isUploadPending = $image instanceof Blob && !url && !hasFailed;
  const markFailed = () => {
    if (url && failedSrc !== url) {
      console.warn("Фон не завантажився, показуємо заглушку:", url);
      setFailedSrc(url);
    }
  };

  // Жива шпалера (сцена міста). Невідоме місто — показуємо заглушку
  if (isWallpaperSrc($image)) {
    const known = Boolean(findWallpaper($image));
    return (
      <BgLayerStyled ref={layerRef} data-page-bg="" {...props}>
        {known ? (
          <WallpaperScene src={$image} />
        ) : (
          <img src={DEFAULT_HERO_BG} alt="Геройський фон" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        )}
      </BgLayerStyled>
    );
  }

  if (isUploadPending) {
    return <BgLayerStyled ref={layerRef} data-page-bg="" {...props} />;
  }

  return (
    <BgLayerStyled ref={layerRef} data-page-bg="" {...props}>
      {isVideo && !hasFailed ? (
        <video
          ref={videoRef}
          src={url}
          // Відео вже в пам'яті (blob), тож наступний слайд готуємо заздалегідь,
          // а не під час його появи
          preload="auto"
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          onError={markFailed}
          onCanPlay={(e) => {
            if (shouldPlay) {
              const vid = e.target;
              if (vid.paused) {
                const p = vid.play();
                if (p !== undefined) p.catch(() => {});
              }
            }
          }}
          onTimeUpdate={(e) => {
            if (!videoEnd) return;
            const t = e.target.currentTime;
            const dur = e.target.duration;
            if (videoEnd > 0 && t >= videoEnd && dur && videoEnd < dur - 0.5) {
              e.target.currentTime = videoStart;
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${$focalX}% ${$focalY}%`,
          }}
        />
      ) : (
        <>
        {containOnMobile && (
          <img
            className="hero-bg-blur"
            src={shownSrc}
            alt=""
            aria-hidden="true"
            loading={$active ? "eager" : "lazy"}
            decoding="async"
          />
        )}
        <img
          src={shownSrc}
          alt="Геройський фон"
          data-fit-mobile={containOnMobile ? "contain" : undefined}
          fetchPriority={$active ? "high" : "low"}
          loading={$active ? "eager" : "lazy"}
          decoding="async"
          onError={() => {
            // Не зациклюємось, якщо раптом не вантажиться і сама заглушка
            if (!hasFailed && url && url !== DEFAULT_HERO_BG) markFailed();
          }}
          onLoad={(e) => {
            // Одразу декодуємо картинку, щоб текстура була готова для GPU
            // до першого показу (без підвисання при зміні фону).
            e.currentTarget.decode?.().catch(() => {});
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${$focalX}% ${$focalY}%`,
            display: "block",
          }}
        />
        </>
      )}
    </BgLayerStyled>
  );
});

const HeroDecor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const HeroFix = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 0;
  }
`;
const HeroFi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const HeroDate = styled.div`
  color: ${(props) => (props.$isDarkMode ? "#f4f7fb" : "#20242b")};
  font-size: 13px;
  text-align: right;
  font-weight: 600;
  width: 100%;
  min-height: 34px;
  box-sizing: border-box;
  background: transparent;
  padding: 4px 8px;
  border-bottom: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
    gap: 8px;
    padding: 6px 9px;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 3px 3px;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const BrowserSearchPanel = styled.div`
  /* Вище за новини (NewsDiv: z-index 100) — інакше випадні списки пошуку
     (особливо за координатами) провалюються під блок новин */
  position: relative;
  z-index: 101;
  width: min(860px, calc(100vw - 8px));
  box-sizing: border-box;
  border: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)")};
  border-radius: 12px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(18, 22, 29, 0.96)" : "rgba(248, 250, 252, 0.97)"};
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(12px);
`;

const ModePicker = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  padding-top: 4px;

  & > * {
    display: block;
    width: 100%;
  }
`;

const modeIconEnter = keyframes`
  from { opacity: 0; transform: scale(0.75); }
  to { opacity: 1; transform: scale(1); }
`;

const ModePreviewIcon = styled.span`
  display: grid;
  width: 18px;
  height: 18px;
  font-size: 16px;
  flex: 0 0 18px;
  place-items: center;
  animation: ${modeIconEnter} 300ms ease both;
`;

const ModePreviewText = styled.span`
  white-space: nowrap;
  animation: ${modeIconEnter} 300ms ease both;
`;

const ModeIconBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"};
  color: ${(props) => (props.$isDarkMode ? "#f2f5f8" : "#30343b")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  font-family: var(--font-family);
  padding: 0 8px;
  flex-shrink: 0;
  transition: background 0.2s ease;
  &:hover {
    background: ${(props) => (props.$isDarkMode ? "#353988" : "#ffcc00")};
  }
`;

// Ряд: «Змінити режим пошуку?» + «Language (Мова)» поруч
const ModeRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  width: 100%;
  margin-top: auto;

  & > ${ModePicker} {
    flex: 1 1 0;
    min-width: 0;
  }

  ${ModePreviewText} {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// Кнопка «Language (Мова)» праворуч від кнопки вибору режиму пошуку
const LanguageBtn = styled(ModeIconBtn)`
  flex: 1 1 0;
  width: auto;
  min-width: 0;
  margin-top: 4px;

  /* на вузьких екранах лише іконка, щоб режим пошуку мав місце */
  @media (max-width: 559px) {
    flex: 0 0 48px;
    ${ModePreviewText} {
      display: none;
    }
  }
`;

const CoordinatesContainer = styled.div`
  ${modeSwapAnimation}
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

// Поля координат + випадний список під ними (список позиціонується відносно цього блоку)
const CoordSearchArea = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
`;

const CoordinateInput = styled.div`
  display: flex;
  flex: 1 1 180px;
  min-width: 0;
  input {
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    padding: 0 12px;
    font-family: var(--font-family);
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: ${(p) => (p.$isDarkMode ? "#10151c" : "#fff")};
    color: ${(p) => (p.$isDarkMode ? "#f4f7fb" : "#20242b")};
    font-weight: 500;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: ${(p) => (p.$isDarkMode ? "#aab4c0" : "#68717d")};
    }

    &:hover,
    &:focus {
      border-color: ${(p) => (p.$isDarkMode ? "#ecb900" : "#00fbff")};
    }

    &:focus {
      box-shadow: inset 0 0 0 1px
        ${(p) => (p.$isDarkMode ? "#ecb900" : "#00fbff")};
    }
  }
`;

const CoordinateSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 96px;
  height: 46px;
  padding: 0 14px;
  border: none;
  border-radius: 8px;
  background: #2f81f7;
  color: #fff;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: #1f6feb;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
// Слоган під пошуком: завжди один рядок; довга версія — з 700px, коротка — на вужчих екранах
const HeroSlogan = styled.p`
  width: 100%;
  margin: 0;
  color: ${(props) => (props.$isDarkMode ? "#f4f7fb" : "#30343b")};
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .full {
    display: none;
  }
  @media (min-width: 700px) {
    .full {
      display: inline;
    }
    .short {
      display: none;
    }
  }
`;

const HeroFormater = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 6px;

  /* на вузьких екранах поля координат переносяться у 2 рядки (46+8+46),
     тому обидва режими мають однакову мінімальну висоту (+ кнопка режиму 32+4) */
  @media (max-width: 503px) {
    min-height: 142px;
  }

`;

const SearchBorder = styled.svg`
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;

  g {
    opacity: 0;
  }

  rect {
    fill: none;
    stroke: url(#search-border-gradient);
    stroke-width: 1.4px;
    stroke-linecap: round;
    stroke-dasharray: 1000 0;
    filter: url(#search-border-glow);
  }
`;

const SearchContainer = styled.div`
  ${modeSwapAnimation}
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) =>
    props.$isDarkMode ? "#10151c" : "#ffffff"};

  &:has(> input:hover) ${SearchBorder} rect,
  &:has(> input:focus) ${SearchBorder} rect {
    opacity: 1;
  }
`;

const HeroInput = styled.input`
  width: 100%;
  height: 46px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => (p.$isDarkMode ? "#ffffff" : "#040404")};
  padding: 0px 12px;
  background: ${(p) => (p.$isDarkMode ? "#10151c" : "#ffffff")};
  border-radius: 8px;
  border: 1px solid transparent;
  outline: none;
  box-sizing: border-box;

  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    color: ${(p) => (p.$isDarkMode ? "#f3efef" : "#000000")};
  }
`;
// Кольори випадних списків пошуку за темою сайту: (темна, світла)
const listTheme = (dark, light) => (props) => (props.$isDarkMode === false ? light : dark);

const SuggestionsList = styled.div`
  position: absolute;
  top: 100%;
  align-items: center;
  background: ${listTheme("rgba(16, 21, 28, 0.98)", "rgba(255, 255, 255, 0.98)")};
  color: ${listTheme("#f4f2f2", "#0b1220")};
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  width: 99.7%;
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid ${listTheme("rgba(255, 255, 255, 0.14)", "rgba(0, 0, 0, 0.14)")};
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.85) rgba(0, 0, 0, 0.12);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.08);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ffb36c 0%, #ff8c2b 100%);
    border-radius: 999px;
  }
`;

const SuggestionItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 4px 6px;
  border: none;
  border-top: 1px solid rgba(127, 127, 127, 0.28);
  font-size: 14px;
  font-family: inherit;
  cursor: ${(props) => (props.$added ? "default" : "pointer")};
  transition: all 0.2s;
  background: transparent;
  color: inherit;
  ${(props) => props.$added && css`
    background: rgba(74, 222, 128, 0.25);
  `}
  ${(props) => props.$exists && !props.$added && css`
    background: rgba(56, 189, 248, 0.18);
    box-shadow: inset 3px 0 0 #38bdf8;
  `}
  &:hover {
    background: ${(props) =>
      props.$added
        ? "rgba(74, 222, 128, 0.25)"
        : props.$exists
          ? "rgba(56, 189, 248, 0.32)"
          : "skyblue"};
    color: white;
  }
`;

// Мітка «Є картка» / «Додано» в підказці
const CardStatusBadge = styled.span`
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.25;
  white-space: nowrap;
  color: #04121c;
  background: ${(p) => (p.$added ? "#4ade80" : "#7dd3fc")};
`;

const ScrollToCardLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: inherit;
  cursor: pointer;
  user-select: none;

  input {
    margin: 0;
    width: 15px;
    height: 15px;
    accent-color: #ff9d48;
    cursor: pointer;
  }
`;

// «Вибрали кілька — перегорне до останнього» під панеллю лімітів
const AddedBarHint = styled.span`
  flex-basis: 100%;
  font-size: 11px;
  font-weight: 600;
  color: ${listTheme("#ffca91", "#b45309")};
`;

// Поруч немає населених пунктів — людина сама називає свою точку
const CustomPointBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: calc(100% - 16px);
  box-sizing: border-box;
  margin: 0 8px 8px;
  padding: 8px;
  border-radius: 8px;
  background: rgba(255, 157, 72, 0.12);
  border: 1px solid rgba(255, 179, 108, 0.6);
  color: inherit;
  font-size: 12px;
  font-weight: 600;
  text-align: left;

  > span svg {
    vertical-align: -3px;
    margin-right: 4px;
    font-size: 16px;
    color: #ff9d48;
  }
`;

const CustomPointRow = styled.div`
  display: flex;
  gap: 6px;

  input {
    flex: 1;
    min-width: 0;
    padding: 6px 8px;
    border: 1px solid rgba(255, 179, 108, 0.6);
    border-radius: 6px;
    background: ${listTheme("#0b0f14", "#ffffff")};
    color: ${listTheme("#f4f2f2", "#0b1220")};
    font-size: 13px;
    font-family: inherit;
  }

  input::placeholder {
    color: ${listTheme("rgba(244, 242, 242, 0.5)", "rgba(11, 18, 32, 0.45)")};
  }
`;

const AddedBarActions = styled.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
`;

const SuggestionRow = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  min-width: 0;
`;

const SuggestionText = styled.span`
  min-width: 0;
  flex: 1;

  /* галочка «вже є картка / додано» перед назвою */
  > svg {
    vertical-align: -2px;
    margin-right: 4px;
    color: #4ade80;
  }
`;

const CoordsLine = styled.span`
  font-size: 0.85em;
  opacity: 0.8;
`;

const coordSpin = keyframes`
  to { transform: rotate(360deg); }
`;

// Статус пошуку за координатами — у заголовку списку, фіксованої висоти (нічого не стрибає)
const CoordStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  box-sizing: border-box;
  min-height: calc(2 * 1.4em + 12px);
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  color: ${(p) =>
    ({
      searching: p.$isDarkMode === false ? "#0369a1" : "#38bdf8",
      found: p.$isDarkMode === false ? "#15803d" : "#4ade80",
      none: p.$isDarkMode === false ? "#b45309" : "#ffb36c",
      error: p.$isDarkMode === false ? "#b91c1c" : "#ff6b6b",
    })[p.$type] || "inherit"};

  svg {
    flex-shrink: 0;
    font-size: 16px;
  }

  .spin {
    animation: ${coordSpin} 1s linear infinite;
  }
`;

const CloseListButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: calc(100% - 16px);
  margin: 8px;
  padding: 8px;
  border: 1px solid ${listTheme("rgba(255, 255, 255, 0.16)", "rgba(0, 0, 0, 0.14)")};
  border-radius: 8px;
  background: ${listTheme("rgba(255, 255, 255, 0.08)", "rgba(0, 0, 0, 0.05)")};
  color: inherit;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${listTheme("rgba(255, 255, 255, 0.16)", "rgba(0, 0, 0, 0.1)")};
  }
`;

// Мітка небезпечної погоди в підказці: червона — сьогодні, помаранчева — найближчі 2 дні
const DangerBadge = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: 52%;
  margin-right: 4px;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(p) => (p.$level === "now" ? "#fff" : "#1a0800")};
  background: ${(p) =>
    p.$level === "now"
      ? "linear-gradient(135deg, #e5484d, #a8202a)"
      : "linear-gradient(135deg, #ffca91, #ff9d48)"};
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);

  svg {
    flex-shrink: 0;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 3px 7px;
    font-size: 10px;
  }
`;

const DANGER_DAY_LABELS = ["Сьогодні", "Завтра", "Післязавтра"];
const DANGER_REASON_ICONS = {
  heat: FaTemperatureArrowUp,
  frost: FaSnowflake,
  wind: FaWind,
  uv: FaSun,
};
const formatDangerReason = ({ type, value }) => {
  if (type === "heat") return `спека до ${value}°C`;
  if (type === "frost") return `мороз до ${String(value).replace("-", "−")}°C`;
  if (type === "wind") return `вітер ${value} м/с`;
  return `УФ-індекс ${value}`;
};

// Панель над підказками: ліміти карток, скільки міст уже додано й кнопка «Готово»
const AddedBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 8px;
  box-sizing: border-box;
  font-size: 13px;
  font-weight: 600;
  color: inherit;
  background: ${listTheme("#0c1016", "#f1f5f9")};
  border-bottom: 1px solid rgba(255, 179, 108, 0.6);
`;

const DoneButton = styled.button`
  padding: 4px 12px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(135deg, #ffca91, #ff9d48);
  color: #1a0800;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
`;


// Дата й час над пошуком — натиснув і вибрав часовий пояс
const DateButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${(props) => (props.$isDarkMode ? "#fbfbfb" : "#060606")};
  font-family: var(--font-family);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;

  svg {
    font-size: 14px;
    opacity: 0.7;
  }

  &:hover,
  &[aria-expanded="true"] {
    background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)")};
  }

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;
// ШІ-асистент ліворуч від дати
const AiButton = styled(DateButton)`
  color: ${(props) => (props.$isDarkMode ? "#c4b5fd" : "#6d28d9")};

  svg {
    opacity: 1;
  }
`;
const LoadMoreButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${(props) => (props.isDarkMode ? "black" : "white")};
  transition: background-color 0.3s ease; 
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-size: 13px;
  &:hover {
    background: ${(props) => (props.isDarkMode ? "#220150" : "#ffcc00")};
  }
`;

// Місце під новини, поки вантажиться їхній файл: висота як у News із заголовком і
// блоком «Шукаємо цікаві новини…» (заміряно: 287px на телефоні, 291px з 768px) — без зсуву макета.
// Мінус ~32px: рядок «За сьогодні відфільтровано…» переїхав у заголовок новин
const NewsLazyPlaceholder = styled.div`
  min-height: 255px;

  @media (min-width: 768px) {
    min-height: 259px;
  }
`;

const imageMap = {
  planes: planes,
  village: village,
  herotext: herotext,
  castle: castle,
  hills: hills,
};

const Hero = ({
  isStickyBgMode,
  // false, поки App не прочитав збережений фон — тоді фон не малюємо зовсім
  bgReady = true,
  heroDateString,
  onAddCity,
  // (lat, lon) → картка, що вже є для цього міста, або null
  findCardForCity,
  // id картки → прогорнути до неї
  onOpenCard,
  cardLimits,
  startAnimation,
  user,
  isDarkMode,
  checkWeatherDanger,
  heroBg,
  setHeroBg,
  heroBg2,
  setHeroBg2,
  heroBg3,
  setHeroBg3,
  customHeroBgs = [],
  setCustomHeroBgs,
  heroBgMode,
  setHeroBgMode,
  bgRatings,
  setBgRatings,
  slideshowInterval,
  setSlideshowInterval,
  filterCategory,
  setFilterCategory,
  heroBgBlur,
  setHeroBgBlur,
  heroBgPixelation,
  setHeroBgPixelation,
  heroBgFocal1,
  setHeroBgFocal1,
  heroBgFocal2,
  setHeroBgFocal2,
  heroBgFocal3,
  setHeroBgFocal3,
  selectedTimezone,
  setSelectedTimezone,
  customHolidayName,
  setCustomHolidayName,
  // Картка, з якої показуємо коротку погоду під пошуком (null — ще вантажиться)
  quickWeatherCard,
  // GPS-картку вимкнено і власних карток немає — коротку погоду не показуємо
  hideQuickWeather = false,
  onOpenQuickWeather,
  quickWeatherCities,
  onSelectQuickWeatherCity,
  onRetryQuickWeather,
}) => {
  const dispatch = useDispatch();
  // «Додати інше місто…» — до пошуку; нове місто саме стане на головний екран (автовибір — останнє додане)
  const handleQuickWeatherCity = (value) => {
    if (value === ADD_CITY_OPTION) {
      onSelectQuickWeatherCity?.(null);
      setSearchMode("city");
      setTimeout(() => document.querySelector('input[name="hero-city-search"]')?.focus(), 0);
      return;
    }
    onSelectQuickWeatherCity?.(value);
  };
  const quickWeather = hideQuickWeather ? null : (
    <QuickWeather
      card={quickWeatherCard}
      cities={quickWeatherCities}
      isDarkMode={isDarkMode}
      onOpen={onOpenQuickWeather}
      onSelectCity={handleQuickWeatherCity}
      onRetry={onRetryQuickWeather}
    />
  );
  // Слоган одним рядком під пошуком (на телефоні — коротша версія, щоб влізла в рядок)
  const slogan = (
    <HeroSlogan $isDarkMode={isDarkMode}>
      <span className="full">
        Ви заслуговуєте на багатофункціональний прогноз, де немає політики та реклами! Гарної погоди!
      </span>
      <span className="short">Прогноз без політики й реклами. Гарної погоди!</span>
    </HeroSlogan>
  );
  const { registerRef, isActive } = useTutorial?.() || { registerRef: () => {} };
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [newDayInput, setNewDayInput] = useState({ date: "", reason: "" });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleAutoKonotop = () => {
      setInputValue("Конотоп");
      setTimeout(() => {
        onAddCity({ name: "Конотоп", fullName: "Конотоп (UA)", lat: 51.24, lon: 33.20 });
      }, 2000);
    };
    window.addEventListener("domino-auto-input-konotop", handleAutoKonotop);
    return () => window.removeEventListener("domino-auto-input-konotop", handleAutoKonotop);
  }, [onAddCity]);
  const [suggestions, setSuggestions] = useState([]);
  const [limit, setLimit] = useState(3);
  const [showList, setShowList] = useState(false);
  // Міста, додані з поточного списку підказок (ключ — координати); ref захищає від подвійного кліку
  const [addedCityKeys, setAddedCityKeys] = useState([]);
  const addedCityKeysRef = useRef(new Set());
  const resetAddedCities = () => {
    addedCityKeysRef.current = new Set();
    setAddedCityKeys([]);
    lastAddRef.current = null;
  };
  // Чекбокс «Прогорнути до картки» в списку підказок (запам'ятовується, типово увімкнено).
  // Гортаємо не після кожного міста, а на «Готово» — до останнього доданого
  const scrollToNewCard = usePrefValue(SCROLL_TO_NEW_CARD_KEY, "true") === "true";
  const lastAddRef = useRef(null); // { city, promise } — останнє додане з підказок місто
  const findCardForCityRef = useRef(findCardForCity);
  findCardForCityRef.current = findCardForCity;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const bgModalMounted = useOpenedOnce(isModalOpen);
  const [showTimezoneMenu, setShowTimezoneMenu] = useState(false);
  const timezoneModalMounted = useOpenedOnce(showTimezoneMenu);

  // «Фон» і «Часовий пояс» тепер відкриваються з налаштувань (шестерня), а не кнопками на першому екрані
  useEffect(() => {
    const openBg = () => setIsModalOpen(true);
    const openTimezone = () => setShowTimezoneMenu(true);
    window.addEventListener(OPEN_BG_MODAL_EVENT, openBg);
    window.addEventListener(OPEN_TIMEZONE_EVENT, openTimezone);
    return () => {
      window.removeEventListener(OPEN_BG_MODAL_EVENT, openBg);
      window.removeEventListener(OPEN_TIMEZONE_EVENT, openTimezone);
    };
  }, []);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const languageModalMounted = useOpenedOnce(isLanguageModalOpen);
  const { t, i18n } = useTranslation();
  // «Language (Мова)»: англійське слово для всіх + назва мовою сайту в дужках
  const languageButtonText =
    i18n.resolvedLanguage === "en" ? "Language" : `Language (${t("hero.language")})`;
  const [hasMore, setHasMore] = useState(true);
  const [searchMode, setSearchMode] = useState("city");
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Консоль команд: /open ai, /open language
  useEffect(() => {
    const open = (e) => {
      if (e.detail?.name === "ai") setIsAiModalOpen(true);
      if (e.detail?.name === "language") setIsLanguageModalOpen(true);
    };
    window.addEventListener(OPEN_HERO_MODAL_EVENT, open);
    return () => window.removeEventListener(OPEN_HERO_MODAL_EVENT, open);
  }, []);

  // Режим пошуку: кнопка одразу перемикає «за назвою міста» ↔ «за координатами»
  // (ШІ-асистент тепер окремою кнопкою ліворуч від часу)
  const nextModeIsCoordinates = searchMode === "city";
  const switchSearchMode = () => {
    const mode = nextModeIsCoordinates ? "coordinates" : "city";
    setSearchMode(mode);
    if (mode === "city") {
      setLatitude("");
      setLongitude("");
    } else {
      setInputValue("");
      setShowCoordinateSuggestions(false);
    }
    setSuggestions([]);
    setShowList(false);
  };

  const searchModePicker = (
    <ModeRow>
    <ModePicker>
      <Tooltip
        content={nextModeIsCoordinates ? "Шукати за широтою й довготою" : "Шукати за назвою міста чи села"}
        isDarkMode={isDarkMode}
      >
        <ModeIconBtn
          type="button"
          onClick={switchSearchMode}
          aria-label={nextModeIsCoordinates ? "Перейти на пошук за координатами" : "Перейти на пошук за назвою міста"}
          $isDarkMode={isDarkMode}
        >
          <ModePreviewIcon key={`icon-${searchMode}`}>
            {nextModeIsCoordinates ? <FaMapLocationDot /> : <FaMountainCity />}
          </ModePreviewIcon>
          <ModePreviewText key={`text-${searchMode}`}>
            {nextModeIsCoordinates ? "Режим координат" : "За назвою міста"}
          </ModePreviewText>
        </ModeIconBtn>
      </Tooltip>
    </ModePicker>
    <LanguageBtn
      type="button"
      onClick={() => setIsLanguageModalOpen(true)}
      aria-label={languageButtonText}
      title={languageButtonText}
      $isDarkMode={isDarkMode}
    >
      <ModePreviewIcon>
        <MdTranslate />
      </ModePreviewIcon>
      <ModePreviewText>{languageButtonText}</ModePreviewText>
    </LanguageBtn>
    </ModeRow>
  );

  // Блокування прокрутки при відкритій модалці
  useEffect(() => {
    if (isModalOpen || showTimezoneMenu || isAiModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, showTimezoneMenu, isAiModalOpen]);

  // Закриття по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isAiModalOpen) setIsAiModalOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isAiModalOpen]);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [activeLayer, setActiveLayer] = useState(1);
  const [randomBgsList, setRandomBgsList] = useState([]);
  const [randomCurrentIndex, setRandomCurrentIndex] = useState(0);
  const allBgs = useMemo(
    () => [...DEFAULT_BGS, ...(customHeroBgs || [])],
    [customHeroBgs],
  );

  const handleSelectBg = useCallback(
    (src, targetLayer = 1) => {
      const indexInQueue = randomBgsList.findIndex((item) => item.src === src);

      if (heroBgMode === "random") {
        const layerToUpdate = activeLayer === 2 ? 2 : 1;
        if (layerToUpdate === 2) {
          setHeroBg2(src);
        } else {
          setHeroBg(src);
        }
        if (indexInQueue !== -1) {
          setRandomCurrentIndex(indexInQueue);
        }
        return;
      }

      if (targetLayer === 2) {
        setHeroBg2(src);
      } else if (targetLayer === 3) {
        setHeroBg3(src);
      } else {
        setHeroBg(src);
      }
    },
    [
      activeLayer,
      heroBgMode,
      randomBgsList,
      setHeroBg,
      setHeroBg2,
      setHeroBg3,
    ],
  );
 useEffect(() => {
    if (heroBgMode === "slideshow-2" && heroBg && heroBg2) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 1 ? 2 : 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (heroBgMode === "slideshow-3" && heroBg && heroBg2 && heroBg3) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 3 ? 1 : prev + 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (heroBgMode === "random") {
      if (randomBgsList.length === 0 && allBgs.length > 0) {
        const shuffled = shuffleArray(allBgs);
        setRandomBgsList(shuffled);
        setRandomCurrentIndex(0);
        if (shuffled[0]) {
          // ЗМІНА 1: Використовуємо setHeroBg замість handleSelectBg
          setHeroBg(shuffled[0].src);
        }
        return;
      }
      if (randomBgsList.length > 0) {
        const timer = setInterval(() => {
          setRandomCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % randomBgsList.length;
            setActiveLayer((prevLayer) => {
              const nextLayer = prevLayer === 1 ? 2 : 1;
              if (nextLayer === 1) {
                setHeroBg(randomBgsList[nextIndex].src);
              } else {
                setHeroBg2(randomBgsList[nextIndex].src);
              }
              return nextLayer;
            });
            return nextIndex;
          });
        }, slideshowInterval * 1000);
        return () => clearInterval(timer);
      }
    }
  }, [
    heroBgMode,
    allBgs,
    slideshowInterval,
    randomBgsList,
    setHeroBg,
    setHeroBg2
  ]);
  useEffect(() => {
    if (heroBgMode === "random" && allBgs.length > 0) {
      if (randomBgsList.length !== allBgs.length) {
        const shuffled = shuffleArray(allBgs);
        setRandomBgsList(shuffled);
        setRandomCurrentIndex(0);
        if (shuffled[0]) {
          handleSelectBg(shuffled[0].src);
          setActiveLayer(1);
        }
      }
    }
  }, [allBgs.length, heroBgMode]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 350);
  };
  const timezoneMenuRef = useRef(null);

  const resetBgSettings = () => {
    setHeroBgBlur(0);
    setHeroBgPixelation(0);
    setHeroBgFocal1({ x: 50, y: 50 });
    setHeroBgFocal2({ x: 50, y: 50 });
  };

  const [coordinateSuggestions, setCoordinateSuggestions] = useState([]);
  const [showCoordinateSuggestions, setShowCoordinateSuggestions] =
    useState(false);
  const [isSearchingNearby, setIsSearchingNearby] = useState(false);
  // { type: "searching" | "found" | "none" | "error", text } або null
  const [nearbySearchStatus, setNearbySearchStatus] = useState(null);
  // Назва власної точки, коли поруч немає населених пунктів
  const [customPointName, setCustomPointName] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.type === "mousedown" && event.button !== 0) return;
      if (
        event.target === document.body ||
        event.target === document.documentElement
      )
        return;
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
        resetAddedCities();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchSuggestions = async (currentLimit, value, append = false) => {
    const cleanValue = value.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i, "").trim();
    if (cleanValue.length < 2) {
      setSuggestions([]);
      setShowList(false);
      return;
    }

    // Підкапотне миттєве співставлення з 40 містами України
    const localMatches = UKRAINE_CITIES_40.filter((c) =>
      c.name.toLowerCase().includes(cleanValue) ||
      c.aliases.some((a) => a.toLowerCase().includes(cleanValue))
    ).map((c) => ({
      name: c.name,
      state: "Україна",
      country: "UA",
      lat: c.lat,
      lon: c.lon,
      isLocal: true,
    }));

    if (localMatches.length > 0 && !append) {
      setSuggestions(localMatches);
      setShowList(true);
    }

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cleanValue)}&count=${currentLimit}&language=uk&format=json`,
      );
      const data = await response.json();
      const apiResults = (Array.isArray(data?.results) ? data.results : []).map(
        (r) => ({
          name: r.name,
          state: r.admin1,
          country: r.country_code,
          lat: r.latitude,
          lon: r.longitude,
        }),
      );
      setHasMore(apiResults.length >= currentLimit);
      setSuggestions((prev) =>
        mergeCitySuggestions(append ? prev : localMatches, apiResults)
      );
      setShowList(true);
    } catch (error) {
      console.error("Помилка API:", error);
      if (localMatches.length > 0) {
        setSuggestions(localMatches);
        setShowList(true);
      }
    }
  };


  useEffect(() => {
    setLimit(3);
    setHasMore(true);
    const timeoutId = setTimeout(() => {
      if (inputValue) fetchSuggestions(3, inputValue, false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newLimit = limit + 3;
    setLimit(newLimit);
    fetchSuggestions(newLimit, inputValue, true);
  };



  // Не даємо запустити два пошуки одночасно (подвійний клік/Enter) — інакше до Nominatim
  // пішли б два запити разом. ref, а не state: змінюється миттєво, без чекання рендеру.
  const coordSearchLockRef = useRef(false);

  const handleSelectByCoordinates = async () => {
    if (coordSearchLockRef.current) return;
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
      alert("Будь ласка, введіть правильні координати");
      return;
    }

    if (lat < -90 || lat > 90) {
      alert("Широта має бути від -90 до 90");
      return;
    }

    if (lon < -180 || lon > 180) {
      alert("Довгота має бути від -180 до +180");
      return;
    }

    const currentPoint = {
      name: "Обрана точка",
      lat: lat,
      lon: lon,
      isManual: true,
    };

    coordSearchLockRef.current = true;
    setCustomPointName("");
    // Список відкриваємо одразу: статус пошуку живе в його заголовку, тож нічого не стрибає
    setCoordinateSuggestions([currentPoint]);
    setShowCoordinateSuggestions(true);
    setIsSearchingNearby(true);
    try {
      setNearbySearchStatus({ type: "searching", text: "Шукаємо за вказаними координатами…" });
      const data = await reverseGeocode(lat, lon);

      if (data.length > 0) {
        setCoordinateSuggestions([currentPoint, ...data]);
        setNearbySearchStatus({ type: "found", text: "Знайдено за координатами" });
        return;
      }
      setNearbySearchStatus({ type: "searching", text: "Точно нічого немає — шукаємо найближче…" });

      const TIMEOUT_MS = 10000;
      const startTime = Date.now();
      let found = false;

      // Спіраль: спочатку по довготі (±1,±2,...), потім по широті
      outer: for (let delta = 1; delta <= 15 && !found; delta++) {
        // Кандидати: ±delta по lon, потім ±delta по lat
        const candidates = [
          [lat, Math.max(-180, Math.min(180, lon + delta))],
          [lat, Math.max(-180, Math.min(180, lon - delta))],
          [Math.max(-90, Math.min(90, lat + delta)), lon],
          [Math.max(-90, Math.min(90, lat - delta)), lon],
        ];

        for (const [tryLat, tryLon] of candidates) {
          if (Date.now() - startTime >= TIMEOUT_MS) break outer;

          setNearbySearchStatus({
            type: "searching",
            text: `Шукаємо поруч: ±${delta}° (шир. ${tryLat.toFixed(1)}°, довг. ${tryLon.toFixed(1)}°)`,
          });

          try {
            // Nominatim дозволяє не більше 1 запиту на секунду
            await new Promise((r) => setTimeout(r, 1100));
            const tryData = await reverseGeocode(tryLat, tryLon);

            if (tryData.length > 0) {
              setCoordinateSuggestions([currentPoint, ...tryData]);
              setNearbySearchStatus({ type: "found", text: `Знайдено поруч (відхилення ~${delta}°)` });
              found = true;
              break outer;
            }
          } catch (e) {
            // ігноруємо помилки окремих запитів
          }
        }
      }

      if (!found) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        setNearbySearchStatus({
          type: "none",
          text: `Пошук завершено (${elapsed} с) — навколо немає населених пунктів`,
        });
      }
    } catch (error) {
      console.error("Помилка при пошуку за координатами:", error);
      setNearbySearchStatus({ type: "error", text: "Помилка запиту. Спробуйте ще раз." });
    } finally {
      coordSearchLockRef.current = false;
      setIsSearchingNearby(false);
    }
  };

  const closeCoordinateSuggestions = () => {
    setShowCoordinateSuggestions(false);
    setCoordinateSuggestions([]);
    setCustomPointName("");
    setNearbySearchStatus(null);
  };

  // Додає точку з пошуку за координатами. Список після цього закривається,
  // тож (якщо ввімкнено «Прогорнути до картки») гортаємо одразу, без «Готово»
  const addCoordinatePoint = (cityObj) => {
    const existingCard = findCardForCity?.(cityObj.lat, cityObj.lon);
    if (existingCard) {
      onOpenCard?.(existingCard.id);
      closeCoordinateSuggestions();
      return;
    }
    const addPromise = Promise.resolve(onAddCity(cityObj));
    if (scrollToNewCard) scrollToCardAfterAdd(cityObj, addPromise);
    window.dispatchEvent(new CustomEvent("domino-next-step-auto"));
    setLatitude("");
    setLongitude("");
    closeCoordinateSuggestions();
  };

  const handleSelectCoordinateResult = (city) => {
    const coords = `${city.lat.toFixed(2)}°, ${city.lon.toFixed(2)}°`;
    addCoordinatePoint({
      name: city.name,
      fullName: city.isManual
        ? `${city.name} (${coords})`
        : `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    });
  };

  // «Першовідкривач»: своя назва для точки, біля якої немає жодного населеного пункту
  const handleAddCustomPoint = () => {
    const point = coordinateSuggestions[0];
    if (!point) return;
    const name = customPointName.trim().replace(/\s+/g, " ") || "Обрана точка";
    addCoordinatePoint({
      name,
      fullName: `${name} (${point.lat.toFixed(2)}°, ${point.lon.toFixed(2)}°)`,
      lat: point.lat,
      lon: point.lon,
    });
  };

  const getCityKey = (city) => `${city.lat.toFixed(3)},${city.lon.toFixed(3)}`;

  // Мітки небезпеки для підказок: перевіряємо лише нові міста одним запитом, кеш 10 хв
  const [dangerByKey, setDangerByKey] = useState({});
  const dangerCacheRef = useRef(new Map());
  useEffect(() => {
    if (!showList || typeof checkWeatherDanger !== "function" || suggestions.length === 0) return;
    const now = Date.now();
    const DANGER_TTL = 10 * 60 * 1000;
    const missing = suggestions.filter((city) => {
      const cached = dangerCacheRef.current.get(getCityKey(city));
      return !cached || now - cached.at > DANGER_TTL;
    });
    if (missing.length === 0) return;

    // Позначаємо як «у роботі», щоб паралельні ефекти не дублювали запит
    missing.forEach((city) =>
      dangerCacheRef.current.set(getCityKey(city), { at: now, value: null }),
    );
    checkWeatherDanger(missing.map(({ lat, lon }) => ({ lat, lon })))
      .then((results) => {
        const updates = {};
        missing.forEach((city, idx) => {
          const key = getCityKey(city);
          const value = results?.[idx] ?? null;
          dangerCacheRef.current.set(key, { at: Date.now(), value });
          updates[key] = value;
        });
        setDangerByKey((prev) => ({ ...prev, ...updates }));
      })
      .catch(() => {});
  }, [suggestions, showList, checkWeatherDanger]);

  const renderDangerBadge = (city) => {
    const danger = dangerByKey[getCityKey(city)];
    if (!danger?.reasons?.length) return null;
    const [mainReason, ...rest] = danger.reasons;
    const Icon = DANGER_REASON_ICONS[mainReason.type] || FaWind;
    const day = DANGER_DAY_LABELS[danger.dayIndex] || "Найближчі дні";
    const fullText = `${day}: ${danger.reasons.map(formatDangerReason).join(", ")}`;
    return (
      <DangerBadge $level={danger.level} title={fullText} aria-label={`Небезпечна погода. ${fullText}`}>
        <Icon aria-hidden="true" />
        {day}: {formatDangerReason(mainReason)}
        {rest.length > 0 && ` +${rest.length}`}
      </DangerBadge>
    );
  };

  // Список не закривається: можна додати кілька міст поспіль, потім натиснути «Готово»
  const handleSelect = async (city) => {
    const key = getCityKey(city);
    // Картка для цього міста вже є — не дублюємо, а показуємо її
    const existingCard = findCardForCity?.(city.lat, city.lon);
    if (existingCard) {
      if (onOpenCard) onOpenCard(existingCard.id);
      return;
    }
    if (addedCityKeysRef.current.has(key)) return;
    addedCityKeysRef.current.add(key);
    setAddedCityKeys((prev) => [...prev, key]);

    const cityObj = {
      name: city.name,
      fullName: `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    };
    window.dispatchEvent(new CustomEvent('domino-next-step-auto'));

    let added = false;
    const addPromise = Promise.resolve(onAddCity(cityObj));
    const addEntry = { city: cityObj, promise: addPromise };
    lastAddRef.current = addEntry;
    try {
      added = await addPromise;
    } catch (err) {
      console.error("Не вдалося додати місто:", err);
    }
    if (added === false) {
      // Не вдалося — на «Готово» до цього міста не гортаємо
      if (lastAddRef.current === addEntry) lastAddRef.current = null;
      addedCityKeysRef.current.delete(key);
      setAddedCityKeys((prev) => prev.filter((k) => k !== key));
    }
  };

  // Чекаємо, поки картка додасться (запит погоди), даємо їй відрендеритись і гортаємо до неї
  const scrollToCardAfterAdd = (city, addPromise) => {
    if (!onOpenCard) return;
    addPromise
      .then((added) => {
        if (added === false) return;
        setTimeout(() => {
          const card = findCardForCityRef.current?.(city.lat, city.lon);
          if (card) onOpenCard(card.id);
        }, 400);
      })
      .catch(() => {});
  };

  // Панель над підказками (обидва режими пошуку): ліміти карток і «Прогорнути до картки».
  // У пошуку за координатами точка одна і список закривається одразу — без «Готово»
  const renderCardLimitsBar = ({ forCoordinates = false } = {}) => {
    if (!cardLimits) return null;
    const addedCount = forCoordinates ? 0 : addedCityKeys.length;
    return (
      <AddedBar $isDarkMode={isDarkMode}>
        <span>
          {addedCount > 0 && `Додано: ${addedCount} · `}
          Карток: {cardLimits.custom}/{cardLimits.maxCustom}
          {cardLimits.daily !== null && ` · Сьогодні: ${cardLimits.daily}/${cardLimits.maxDaily}`}
        </span>
        <AddedBarActions>
          <ScrollToCardLabel
            onMouseDown={(e) => e.preventDefault()}
            title={
              forCoordinates
                ? "Після додавання точки прогорнути сторінку до її картки"
                : "Після «Готово» прогорнути сторінку до картки останнього доданого міста"
            }
          >
            <input
              type="checkbox"
              checked={scrollToNewCard}
              onChange={(e) => setPref(SCROLL_TO_NEW_CARD_KEY, e.target.checked ? "true" : "false")}
            />
            Прогорнути до картки
          </ScrollToCardLabel>
          {addedCount > 0 && (
            <DoneButton
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleFinishAdding}
            >
              Готово
            </DoneButton>
          )}
        </AddedBarActions>
        {scrollToNewCard && addedCount > 1 && (
          <AddedBarHint $isDarkMode={isDarkMode}>
            Ви вибрали кілька варіантів — після «Готово» вас перегорне до картки останнього
            вибраного
          </AddedBarHint>
        )}
      </AddedBar>
    );
  };

  const COORD_STATUS_ICONS = {
    found: MdCheckCircle,
    none: MdWarningAmber,
    error: MdErrorOutline,
  };

  const handleFinishAdding = () => {
    const lastAdd = lastAddRef.current;
    lastAddRef.current = null;
    if (scrollToNewCard && lastAdd) scrollToCardAfterAdd(lastAdd.city, lastAdd.promise);
    setInputValue("");
    setSuggestions([]);
    setShowList(false);
    resetAddedCities();
  };

  const handleAddDay = () => {
    if (newDayInput.date && customHolidayName) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(newDayInput.date);

      if (selectedDate < today) {
        alert("Неможливо додати подію в минулому!");
        return;
      }

      if (customHolidayName.length > 12) {
        alert("Назва свята занадто довга (макс. 12 символів)!");
        return;
      }

      dispatch(
        addCustomDay({ date: newDayInput.date, reason: customHolidayName }),
      );
      setNewDayInput({ ...newDayInput, date: "" });
      setCustomHolidayName("");
    }
  };

  // Перевірка типу свята та кольору для ефектів
  const todayHolidayInfo = useMemo(() => {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    // 1. Пріоритет: День народження (Червоний)
    if (user?.birthDate) {
      const [, uMonth, uDay] = user.birthDate.split("-");
      if (
        now.getDate() === parseInt(uDay) &&
        now.getMonth() + 1 === parseInt(uMonth)
      ) {
        return {
          active: true,
          color: "#ff5252",
          label: "З ДНЕМ НАРОДЖЕННЯ!",
        };
      }
    }
    const customDay = customDays.find((day) => day.date === todayStr);
    if (customDay) {
      return {
        active: true,
        color: "#fff59d",
        label: customDay.reason.toUpperCase() + "! 🎉",
      };
    }

    const dayOfWeek = now.getDay(); // 0 - Sun, 6 - Sat
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return { active: true, color: "#ffff00" };
    }

    return { active: false, color: "#fff59d", label: "" };
  }, [customDays, user]);

  const isTodayHoliday = todayHolidayInfo.active;

  // Генерація позицій для світлячків
  const fireflies = useMemo(() => {
    if (!isTodayHoliday) return [];
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      x: `${(Math.random() - 0.5) * 100}px`,
      y: `${(Math.random() - 0.5) * 100}px`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, [isTodayHoliday]);

  return (
    <HeroDiv>
      <svg
        width="0"
        height="0"
        style={{
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
        }}
      >
        <filter id="pixelate-hero" x="0" y="0" width="100%" height="100%">
          <feFlood x="0" y="0" height="1" width="1" />
          <feComposite
            width={Math.max(1, heroBgPixelation * 2)}
            height={Math.max(1, heroBgPixelation * 2)}
          />
          <feTile result="tiles" />
          <feComposite in="SourceGraphic" in2="tiles" operator="in" />
          <feMorphology operator="dilate" radius={heroBgPixelation} />
        </filter>
      </svg>
      {bgReady && (<>
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg}
        $active={heroBgMode === "static" || activeLayer === 1}
        $transition={SLIDESHOW_TRANSITION}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $focalX={heroBgFocal1?.x || 50}
        $focalY={heroBgFocal1?.y || 50}
        $videoStart={allBgs.find((b) => b.src === heroBg)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg)?.end}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg2}
        $active={
          (heroBgMode === "slideshow-2" ||
            heroBgMode === "slideshow-3" ||
            heroBgMode === "random") &&
          activeLayer === 2
        }
        $transition={SLIDESHOW_TRANSITION}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $focalX={heroBgFocal2?.x || 50}
        $focalY={heroBgFocal2?.y || 50}
        $videoStart={allBgs.find((b) => b.src === heroBg2)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg2)?.end}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg3}
        $active={
          heroBgMode === "slideshow-3" && activeLayer === 3
        }
        $transition={SLIDESHOW_TRANSITION}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $focalX={heroBgFocal3?.x || 50}
        $focalY={heroBgFocal3?.y || 50}
        $videoStart={allBgs.find((b) => b.src === heroBg3)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg3)?.end}
      />
      </>)}
      <HeroVersionBadge />
      <DelayedContent $start={startAnimation}>
        <BrowserSearchPanel $isDarkMode={isDarkMode}>
          <HeroDecor>
            <HeroFix>
              <HeroFi>
                <HeroDate ref={timezoneMenuRef} $isDarkMode={isDarkMode}>
                <Tooltip content="ШІ-асистент: спитайте про погоду чи сайт" isDarkMode={isDarkMode}>
                  <AiButton
                    type="button"
                    $isDarkMode={isDarkMode}
                    onClick={() => setIsAiModalOpen(true)}
                    aria-label="Відкрити ШІ-асистента"
                  >
                    <MdAutoAwesome aria-hidden="true" />
                    ШІ-асистент
                    <AiAttachBadges isDarkMode={isDarkMode} />
                  </AiButton>
                </Tooltip>
                <Tooltip content="Змінити часовий пояс" isDarkMode={isDarkMode} wrapperStyle={{ marginLeft: "auto" }}>
                  <DateButton
                    type="button"
                    $isDarkMode={isDarkMode}
                    onClick={() => setShowTimezoneMenu(!showTimezoneMenu)}
                    aria-expanded={showTimezoneMenu}
                    aria-label="Змінити часовий пояс"
                  >
                    <MdAccessTime aria-hidden="true" />
                    {heroDateString}
                  </DateButton>
                </Tooltip>
                {timezoneModalMounted && (
                  <ModalSuspense active={showTimezoneMenu} onCancel={() => setShowTimezoneMenu(false)}>
                    <TimezoneModal
                      isOpen={showTimezoneMenu}
                      onClose={() => setShowTimezoneMenu(false)}
                      selectedTimezone={selectedTimezone}
                      setSelectedTimezone={setSelectedTimezone}
                      isDarkMode={isDarkMode}
                    />
                  </ModalSuspense>
                )}
                </HeroDate>
              </HeroFi>
            </HeroFix>
          </HeroDecor>
          <SearchWrapper ref={searchRef}>
          {searchMode === "city" ? (
            <HeroFormater>
              <SearchContainer $isDarkMode={isDarkMode}>
                <HeroInput
                  ref={(el) => registerRef('heroInput', el)}
                  value={inputValue}
                  $isDarkMode={isDarkMode}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    window.dispatchEvent(new CustomEvent('domino-hero-input-change', { detail: { value: e.target.value } }));
                  }}
                  onFocus={() => suggestions.length > 0 && setShowList(true)}
                  placeholder="Уведіть місто, село. Наприклад: Київ..."
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  name="hero-city-search"
                  inputMode="search"
                  enterKeyHint="search"
                  aria-label="Пошук міста"
                  data-form-type="other"
                  data-lpignore="true"
                />
                <SearchBorder aria-hidden="true" focusable="false">
                  <defs>
                    <linearGradient
                      id="search-border-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                      gradientTransform="rotate(0 0.5 0.5)"
                    >
                      <animateTransform
                        attributeName="gradientTransform"
                        type="rotate"
                        from="0 0.5 0.5"
                        to="360 0.5 0.5"
                        dur="28s"
                        repeatCount="indefinite"
                      />
                      <stop offset="0%" stopColor="#00bfff" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ffd400" />
                    </linearGradient>
                    <filter
                      id="search-border-glow"
                      x="-50%"
                      y="-100%"
                      width="200%"
                      height="300%"
                    >
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="3.4"
                        result="wideGlow"
                      />
                      <feComponentTransfer in="wideGlow" result="softGlow">
                        <feFuncA type="linear" slope="0.35" />
                      </feComponentTransfer>
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="1.4"
                        result="coreGlow"
                      />
                      <feMerge>
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="coreGlow" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="8"
                    pathLength="1000"
                  />
                </SearchBorder>
                {showList && suggestions.length > 0 && (
                  <SuggestionsList $isDarkMode={isDarkMode}>
                    {renderCardLimitsBar()}
                    {suggestions.map((city, index) => {
                      const isAdded = addedCityKeys.includes(getCityKey(city));
                      const existingCard = findCardForCity?.(city.lat, city.lon);
                      return (
                      <SuggestionItem
                        key={`${city.lat}-${city.lon}-${index}`}
                        $added={isAdded}
                        $exists={Boolean(existingCard)}
                        title={
                          existingCard
                            ? `Картка «${existingCard.locationName || city.name}» вже є — натисніть, щоб перейти до неї`
                            : undefined
                        }
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelect(city);
                        }}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          handleSelect(city);
                        }}
                        onClick={() => handleSelect(city)}
                      >
                        <SuggestionRow>
                          <SuggestionText>
                            {(isAdded || existingCard) && <MdCheck aria-hidden="true" />}
                            {city.name}
                            {city.state ? `, ${city.state}` : ""} ({city.country})
                            <br />
                            <CoordsLine>
                              Широта: {city.lat.toFixed(2)}°, Довгота: {city.lon.toFixed(2)}°
                            </CoordsLine>
                          </SuggestionText>
                          {renderDangerBadge(city)}
                          {(isAdded || existingCard) && (
                            <CardStatusBadge $added={isAdded}>
                              {isAdded ? "Додано" : "Є картка"}
                            </CardStatusBadge>
                          )}
                        </SuggestionRow>
                      </SuggestionItem>
                      );
                    })}

                    {hasMore ? (
                      <LoadMoreButton isDarkMode={isDarkMode} onClick={handleLoadMore}>
                        Завантажити ще варіанти
                      </LoadMoreButton>
                    ) : (
                      <LoadMoreButton isDarkMode={isDarkMode} disabled>
                        Кінець списку
                      </LoadMoreButton>
                    )}
                  </SuggestionsList>
                )}
              </SearchContainer>
              {slogan}
              {quickWeather}
              {searchModePicker}
            </HeroFormater>
          ) : (
            <HeroFormater>
              {/* Список результатів — одразу під полями, поверх короткої погоди (як у пошуку за назвою) */}
              <CoordSearchArea>
              <CoordinatesContainer style={{ alignItems: "flex-start" }}>
                <CoordinateInput $isDarkMode={isDarkMode}>
                  <input
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSelectByCoordinates();
                    }}
                    placeholder="Широта: Від -90° до +90°"
                    disabled={isSearchingNearby}
                    min="-90"
                    max="90"
                    step="0.01"
                  />
                </CoordinateInput>
                <CoordinateInput $isDarkMode={isDarkMode}>
                  <input
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSelectByCoordinates();
                    }}
                    placeholder="Довгота: Від -180° до +180°"
                    disabled={isSearchingNearby}
                    min="-180"
                    max="180"
                    step="0.01"
                  />
                </CoordinateInput>
                <CoordinateSearchButton
                  type="button"
                  onClick={handleSelectByCoordinates}
                  disabled={isSearchingNearby}
                >
                  <MdSearch />
                  Знайти
                </CoordinateSearchButton>
              </CoordinatesContainer>
              {showCoordinateSuggestions && (
                <SuggestionsList $isDarkMode={isDarkMode}>
                  {renderCardLimitsBar({ forCoordinates: true })}
                  {nearbySearchStatus && (() => {
                    const StatusIcon = isSearchingNearby
                      ? MdSync
                      : COORD_STATUS_ICONS[nearbySearchStatus.type] || MdSearch;
                    return (
                      <CoordStatus
                        $isDarkMode={isDarkMode}
                        $type={nearbySearchStatus.type}
                        role="status"
                        aria-live="polite"
                      >
                        <StatusIcon className={isSearchingNearby ? "spin" : undefined} aria-hidden="true" />
                        <span>{nearbySearchStatus.text}</span>
                      </CoordStatus>
                    );
                  })()}
                  {!isSearchingNearby &&
                    coordinateSuggestions.length === 1 &&
                    nearbySearchStatus?.type === "none" && (
                    <CustomPointBox $isDarkMode={isDarkMode}>
                      <span>
                        <MdExplore aria-hidden="true" />
                        Ви першовідкривач! Поруч немає населених пунктів — назвіть свою точку:
                      </span>
                      <CustomPointRow $isDarkMode={isDarkMode}>
                        <input
                          type="text"
                          value={customPointName}
                          onChange={(e) => setCustomPointName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleAddCustomPoint();
                          }}
                          placeholder="Наприклад: Моя метеостанція"
                          maxLength={40}
                          aria-label="Назва власної точки"
                        />
                        <DoneButton type="button" onClick={handleAddCustomPoint}>
                          Додати
                        </DoneButton>
                      </CustomPointRow>
                    </CustomPointBox>
                  )}
                  {coordinateSuggestions.map((city, index) => {
                    const existingCard = findCardForCity?.(city.lat, city.lon);
                    return (
                      <SuggestionItem
                        key={`${city.lat}-${city.lon}-${index}`}
                        type="button"
                        $exists={Boolean(existingCard)}
                        title={
                          existingCard
                            ? `Картка «${existingCard.locationName || city.name}» вже є — натисніть, щоб перейти до неї`
                            : undefined
                        }
                        onClick={() => handleSelectCoordinateResult(city)}
                      >
                        <SuggestionRow>
                          <SuggestionText>
                            {existingCard && <MdCheck aria-hidden="true" />}
                            {city.isManual
                              ? city.name
                              : `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`}
                            <br />
                            <CoordsLine>
                              Широта: {city.lat.toFixed(2)}°, Довгота: {city.lon.toFixed(2)}°
                            </CoordsLine>
                          </SuggestionText>
                          {existingCard && <CardStatusBadge>Є картка</CardStatusBadge>}
                        </SuggestionRow>
                      </SuggestionItem>
                    );
                  })}
                  <CloseListButton
                    type="button"
                    $isDarkMode={isDarkMode}
                    onClick={closeCoordinateSuggestions}
                  >
                    <MdClose aria-hidden="true" />
                    Закрити
                  </CloseListButton>
                </SuggestionsList>
              )}
              </CoordSearchArea>
              {slogan}
              {quickWeather}
              {searchModePicker}
            </HeroFormater>
          )}
          </SearchWrapper>
        </BrowserSearchPanel>
        {/* width: 100% — інакше обгортка стискалась до ширини напису «Шукаємо новини…»,
            а після завантаження розширювалась під карусель (зсув макета) */}
        <div style={{ marginTop: "0px", zIndex: 90, width: "100%" }}>
          <React.Suspense fallback={<NewsLazyPlaceholder aria-hidden="true" />}>
            <News user={user} isDarkMode={isDarkMode} isStickyBgMode={isStickyBgMode} />
          </React.Suspense>
        </div>
      </DelayedContent>
      {bgModalMounted && (
      <ModalSuspense active={isModalOpen} onCancel={() => setIsModalOpen(false)}>
      <BgModal
        isOpen={isModalOpen}
        isClosing={isClosing}
        onClose={handleCloseModal}
        onReset={resetBgSettings}
        isDarkMode={isDarkMode}
        user={user}
        heroBg={heroBg}
        heroBg2={heroBg2}
        heroBg3={heroBg3}
        setHeroBg={setHeroBg}
        setHeroBg2={setHeroBg2}
        setHeroBg3={setHeroBg3}
        customHeroBgs={customHeroBgs}
        setCustomHeroBgs={setCustomHeroBgs}
        heroBgMode={heroBgMode}
        setHeroBgMode={setHeroBgMode}
        bgRatings={bgRatings}
        setBgRatings={setBgRatings}
        slideshowInterval={slideshowInterval}
        setSlideshowInterval={setSlideshowInterval}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        heroBgBlur={heroBgBlur}
        setHeroBgBlur={setHeroBgBlur}
        heroBgPixelation={heroBgPixelation}
        setHeroBgPixelation={setHeroBgPixelation}
        activeLayer={activeLayer}
        setActiveLayer={setActiveLayer}
        randomBgsList={randomBgsList}
        setRandomBgsList={setRandomBgsList}
        randomCurrentIndex={randomCurrentIndex}
        setRandomCurrentIndex={setRandomCurrentIndex}
        hills={DEFAULT_HERO_BG}
      />
      </ModalSuspense>
      )}
      {languageModalMounted && (
        <ModalSuspense active={isLanguageModalOpen} onCancel={() => setIsLanguageModalOpen(false)}>
          <LanguageModal
            isOpen={isLanguageModalOpen}
            onClose={() => setIsLanguageModalOpen(false)}
            isDarkMode={isDarkMode}
          />
        </ModalSuspense>
      )}




      {isAiModalOpen && createPortal(
        <AiModalBackdrop onClick={() => setIsAiModalOpen(false)}>
          <AiModalContainer onClick={(e) => e.stopPropagation()}>
            <AiModalBody $isDarkMode={isDarkMode}>
              <ModalSuspense onCancel={() => setIsAiModalOpen(false)}>
                <React_lazy_Aihelp
                  isDarkMode={isDarkMode}
                  isStickyBgMode={false}
                  onClose={() => setIsAiModalOpen(false)}
                />
              </ModalSuspense>
            </AiModalBody>
          </AiModalContainer>
        </AiModalBackdrop>,
        document.body
      )}
    </HeroDiv>
  );
};
export default Hero;
