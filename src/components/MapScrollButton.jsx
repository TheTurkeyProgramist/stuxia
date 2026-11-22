import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowDown } from "react-icons/fi";
import i18n from "../i18n/i18n";
import { analyzeSearchQuery } from "../utils/searchAnalyzer";
import { useAnimationsDisabled } from "../utils/animationsPref";
import { getMapAutoscroll, useMapScrollButtonHidden } from "../utils/mapScrollPref";

// Плаваюча кнопка «До карти й тривог» + автопрокрутка до #map після завантаження сторінки
// (налаштування в «Параметрах» → «Інтерфейс»; за замовчуванням вимкнено).

const Button = styled.button`
  position: fixed;
  left: 16px;
  bottom: 16px;
  /* Над каруселлю погоди (1800) і заголовком секції (1850), але під фіксованою шапкою (1900) */
  z-index: 1860;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid rgba(0, 238, 255, 0.6);
  border-radius: 999px;
  background: rgba(10, 20, 30, 0.85);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  /* Плавна поява й зникнення: кнопка лишається в DOM, ховаємо прозорістю */
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  visibility: ${(p) => (p.$visible ? "visible" : "hidden")};
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
  transition: ${(p) =>
    p.$animated
      ? "opacity 0.3s ease, visibility 0s linear " + (p.$visible ? "0s" : "0.3s") + ", background 0.2s ease"
      : "none"};
  &:hover {
    background: rgba(0, 238, 255, 0.25);
  }
`;

// Скільки чекати після завантаження: пошукова картка сама скролить до погоди за ~0,7 с
const AUTOSCROLL_DELAY_MS = 3000;

const MapScrollButton = () => {
  const hidden = useMapScrollButtonHidden();
  const animationsDisabled = useAnimationsDisabled();
  const [mapVisible, setMapVisible] = useState(false);
  const [hasMap, setHasMap] = useState(false);
  const behavior = animationsDisabled ? "auto" : "smooth";

  const scrollToMap = () => {
    document.getElementById("map")?.scrollIntoView({ behavior, block: "start" });
  };

  // Автопрокрутка один раз; будь-яка дія користувача її скасовує
  useEffect(() => {
    const mode = getMapAutoscroll();
    if (mode === "off") return undefined;
    if (mode === "except-search") {
      const analysis = analyzeSearchQuery(
        window.location.search,
        window.location.hash,
        window.location.pathname,
      );
      if (analysis.isSearchEntry) return undefined;
    }
    const cancel = () => clearTimeout(timer);
    const timer = setTimeout(() => {
      cleanup();
      document.getElementById("map")?.scrollIntoView({ behavior, block: "start" });
    }, AUTOSCROLL_DELAY_MS);
    const events = ["wheel", "touchstart", "keydown", "mousedown"];
    const cleanup = () => events.forEach((e) => window.removeEventListener(e, cancel));
    events.forEach((e) => window.addEventListener(e, cancel, { passive: true }));
    return () => {
      clearTimeout(timer);
      cleanup();
    };
    // Лише при монтуванні: зміна налаштування діє з наступного завантаження
  }, []);

  // Кнопка потрібна, лише поки карти не видно (і секція карти є на сторінці)
  useEffect(() => {
    if (hidden) return undefined;
    let observer;
    const attach = () => {
      const el = document.getElementById("map");
      if (!el) return false;
      setHasMap(true);
      observer = new IntersectionObserver(([entry]) => setMapVisible(entry.isIntersecting), {
        threshold: 0.05,
      });
      observer.observe(el);
      return true;
    };
    let retry;
    if (!attach()) retry = setInterval(() => attach() && clearInterval(retry), 1000);
    return () => {
      clearInterval(retry);
      observer?.disconnect();
    };
  }, [hidden]);

  if (hidden || !hasMap) return null;
  const label = i18n.t("ui.mapScroll.toMap");
  return (
    <Button
      type="button"
      onClick={scrollToMap}
      aria-label={label}
      title={label}
      aria-hidden={mapVisible}
      tabIndex={mapVisible ? -1 : 0}
      $visible={!mapVisible}
      $animated={!animationsDisabled}
    >
      <FiArrowDown /> {label}
    </Button>
  );
};

export default MapScrollButton;
