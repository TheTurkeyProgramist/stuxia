import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { Map as MapLibreMap, Marker, AttributionControl, setWorkerUrl } from "maplibre-gl";
// Воркер MapLibre за замовчуванням шукають поруч із бандлом (./maplibre-gl-worker.mjs), а Vite його
// туди не кладе — мапа «висіла» без векторних плиток. ?url змушує Vite віддати воркер окремим файлом.
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";
import "maplibre-gl/dist/maplibre-gl.css";
import { MdAdd, MdRemove, MdClose, MdMyLocation, MdTouchApp } from "react-icons/md";
import i18n from "../../i18n/i18n.js";

// Мапа для вибору точки: тиснете — координати підставляються у режим координат.
// MapLibre GL + безкоштовні векторні плитки OpenFreeMap (без ключа й реєстрації): перетягування,
// зум колесом/щипком/кнопками, клік ставить позначку. Мапа на весь екран, панелі «плавають» поверх
// неї скляними картками; поява й зникнення — плавні. Компонент ледачий, тож MapLibre вантажиться
// лише коли мапу відкрили.
//
// Свої плитки (Protomaps/PMTiles у Cloudflare R2) — замінити лише STYLE_URL.

setWorkerUrl(maplibreWorkerUrl);

const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
const CLOSE_MS = 260;
// Скільки чекаємо на першу відмальовку мапи, перш ніж сказати, що вона не завантажилась
const LOAD_TIMEOUT_MS = 30000;
const normLon = (lon) => ((((lon + 180) % 360) + 360) % 360) - 180;

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const fadeOut = keyframes`from { opacity: 1; } to { opacity: 0; }`;
const slideDown = keyframes`from { opacity: 0; transform: translateY(-18px); } to { opacity: 1; transform: none; }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; }`;
const slideDownOut = keyframes`from { opacity: 1; transform: none; } to { opacity: 0; transform: translateY(-18px); }`;
const slideUpOut = keyframes`from { opacity: 1; transform: none; } to { opacity: 0; transform: translateY(22px); }`;
const slideSide = keyframes`from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: none; }`;
const slideSideOut = keyframes`from { opacity: 1; transform: none; } to { opacity: 0; transform: translateX(16px); }`;
const mapZoomIn = keyframes`from { transform: scale(1.06); } to { transform: scale(1); }`;
const mapZoomOut = keyframes`from { transform: scale(1); } to { transform: scale(1.04); }`;
const pinDrop = keyframes`
  0% { opacity: 0; transform: translateY(-34px); }
  55% { opacity: 1; transform: translateY(3px); }
  75% { transform: translateY(-5px); }
  100% { transform: none; }
`;
const spin = keyframes`to { transform: rotate(360deg); }`;
const ring = keyframes`
  0% { opacity: 0.7; transform: scale(0.3); }
  100% { opacity: 0; transform: scale(2.4); }
`;

// Усі рухи вимикаються, якщо в системі ввімкнено «зменшити анімацію»
const motion = (open, close, ms, delay = 0) => css`
  animation: ${(p) => (p.$closing ? close : open)} ${ms}ms cubic-bezier(0.22, 1, 0.36, 1) ${(p) => (p.$closing ? 0 : delay)}ms both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200050;
  overflow: hidden;
  background: #0b1220;
  ${motion(fadeIn, fadeOut, CLOSE_MS)}
`;

const glass = css`
  background: ${(p) => (p.$dark ? "rgba(14, 16, 22, 0.78)" : "rgba(255, 255, 255, 0.84)")};
  color: ${(p) => (p.$dark ? "#fff" : "#111827")};
  border: 1px solid ${(p) => (p.$dark ? "rgba(255, 255, 255, 0.16)" : "rgba(0, 0, 0, 0.1)")};
  -webkit-backdrop-filter: saturate(160%) blur(18px);
  backdrop-filter: saturate(160%) blur(18px);
  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.35);
`;

const MapArea = styled.div`
  /* && — вища специфічність: MapLibre вішає на контейнер клас .maplibregl-map з position: relative,
     і без цього контейнер схлопувався до нульової висоти (мапа була порожньою) */
  && {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #e8e4d8;
  }
  ${motion(mapZoomIn, mapZoomOut, 420)}

  .maplibregl-canvas {
    outline: none;
    cursor: grab;
  }
  .maplibregl-canvas:active {
    cursor: grabbing;
  }
  /* Підпис над нижньою карткою, щоб вона його не закривала */
  .maplibregl-ctrl-bottom-left {
    bottom: calc(max(14px, env(safe-area-inset-bottom)) + 84px);
  }
  .maplibregl-ctrl-attrib {
    font-size: 11px;
  }
`;

const TopBar = styled.div`
  position: absolute;
  top: max(12px, env(safe-area-inset-top));
  left: 12px;
  right: 12px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 760px;
  margin: 0 auto;
  padding: 10px 10px 10px 16px;
  border-radius: 18px;
  ${glass}
  ${motion(slideDown, slideDownOut, 380, 120)}
`;
const TitleBox = styled.div`
  flex: 1;
  min-width: 0;
  b {
    display: block;
    font-size: 16px;
    line-height: 1.25;
  }
  span {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    line-height: 1.35;
    opacity: 0.72;
  }
`;
const RoundBtn = styled.button`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${(p) => (p.$dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.14)")};
  border-radius: 12px;
  background: ${(p) => (p.$dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)")};
  color: inherit;
  font-size: 22px;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
  &:hover {
    background: ${(p) => (p.$dark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.09)")};
    border-color: #00d9c5;
  }
  &:active {
    transform: scale(0.92);
  }
  &:focus-visible {
    outline: 2px solid #00d9c5;
    outline-offset: 2px;
  }
`;
const ZoomBox = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px;
  margin-top: -50px;
  border-radius: 16px;
  ${glass}
  ${motion(slideSide, slideSideOut, 380, 220)}
`;
const BottomCard = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: max(14px, env(safe-area-inset-bottom));
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 560px;
  margin: 0 auto;
  padding: 12px 12px 12px 18px;
  border-radius: 20px;
  ${glass}
  ${motion(slideUp, slideUpOut, 420, 180)}
`;
const CoordBox = styled.div`
  flex: 1;
  min-width: 0;
  small {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.65;
  }
  strong {
    display: block;
    margin-top: 2px;
    font-size: 19px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
`;
const UseBtn = styled.button`
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #00e0c6, #00a8e8);
  color: #001a22;
  font: inherit;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 200, 220, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.2s ease;
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(0, 200, 220, 0.5);
  }
  &:active:not(:disabled) {
    transform: scale(0.97);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
  @media (max-width: 480px) {
    padding: 12px 14px;
    span {
      display: none;
    }
  }
`;
const Toast = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: calc(max(14px, env(safe-area-inset-bottom)) + 96px);
  z-index: 4;
  max-width: 560px;
  margin: 0 auto;
  padding: 10px 16px;
  border-radius: 14px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  color: ${(p) => (p.$dark ? "#ffd9a8" : "#7a3b00")};
  background: ${(p) => (p.$dark ? "rgba(48, 28, 6, 0.9)" : "rgba(255, 244, 224, 0.95)")};
  border: 1px solid rgba(255, 179, 108, 0.6);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.35);
  animation: ${slideUp} 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// «Зачекайте трохи» посеред мапи, поки вантажаться стиль і перші плитки; потім плавно зникає
const LoadingPill = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: calc(100% - 48px);
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: ${(p) => (p.$hidden ? 0 : 1)};
  visibility: ${(p) => (p.$hidden ? "hidden" : "visible")};
  transition: opacity 0.4s ease, visibility 0.4s ease;
  ${glass}

  ${(p) =>
    p.$failed &&
    css`
      color: ${p.$dark ? "#ffd9a8" : "#7a3b00"};
      border-color: rgba(255, 179, 108, 0.6);
      text-align: left;
      white-space: normal;
    `}

  &::before {
    display: ${(p) => (p.$failed ? "none" : "block")};
    content: "";
    flex: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid rgba(0, 217, 197, 0.3);
    border-top-color: #00d9c5;
    animation: ${spin} 0.9s linear infinite;
    @media (prefers-reduced-motion: reduce) {
      animation-duration: 2.4s;
    }
  }
`;

// Позначка живе в елементі маркера MapLibre (нульового розміру в точці): вістря — рівно в координатах
const PinWrap = styled.div`
  position: relative;
  width: 0;
  height: 0;
  pointer-events: none;
  &::before {
    content: "";
    position: absolute;
    left: -18px;
    top: -18px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 3px solid #ef4444;
    animation: ${ring} 1.1s ease-out 0.35s both;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;
const Pin = styled.div`
  position: absolute;
  left: -13px;
  top: -34px;
  width: 26px;
  height: 26px;
  border-radius: 50% 50% 50% 0;
  background: linear-gradient(135deg, #ff6b6b, #dc2626);
  border: 3px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transform: rotate(-45deg);
  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
  }
`;
// Падіння позначки — на обгортці, щоб не конфліктувати з поворотом самого значка
const PinDrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  animation: ${pinDrop} 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const t = (key) => i18n.t(`hero.mapPicker.${key}`);

export default function MapPicker({ initial, isDarkMode, onPick, onClose }) {
  const hasInitial = Number.isFinite(initial?.lat) && Number.isFinite(initial?.lon);
  const [marker, setMarker] = useState(hasInitial ? { lat: initial.lat, lon: initial.lon } : null);
  // Кількість поставлених позначок: ключ для повторної анімації «падіння»
  const [dropCount, setDropCount] = useState(0);
  const [closing, setClosing] = useState(false);
  const [markerEl, setMarkerEl] = useState(null);
  // Мапа готова (стиль і перші плитки завантажені): до цього показуємо «Зачекайте трохи»
  const [ready, setReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [toast, setToast] = useState({ text: "", id: 0 });
  const mapElRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const markerAddedRef = useRef(false);
  const timerRef = useRef(0);
  const toastTimerRef = useRef(0);
  const initialRef = useRef({ hasInitial, initial });

  const showToast = useCallback((text) => {
    window.clearTimeout(toastTimerRef.current);
    setToast((prev) => ({ text, id: prev.id + 1 }));
    toastTimerRef.current = window.setTimeout(() => setToast((prev) => ({ ...prev, text: "" })), 5000);
  }, []);

  // Закриття: спершу програємо зникнення, потім повідомляємо батька
  const finish = useCallback((after) => {
    if (timerRef.current) return;
    setClosing(true);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    timerRef.current = window.setTimeout(after, reduce ? 0 : CLOSE_MS);
  }, []);
  useEffect(
    () => () => {
      window.clearTimeout(timerRef.current);
      window.clearTimeout(toastTimerRef.current);
    },
    [],
  );
  const requestClose = useCallback(() => finish(onClose), [finish, onClose]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && requestClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [requestClose]);

  // 30 с без готової мапи — кажемо прямо, що не вийшло, і радимо ввести координати вручну
  useEffect(() => {
    if (ready) {
      setLoadFailed(false);
      return undefined;
    }
    const id = window.setTimeout(() => setLoadFailed(true), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(id);
  }, [ready]);

  // Створення мапи
  useEffect(() => {
    const { hasInitial: has, initial: init } = initialRef.current;
    let map;
    try {
      map = new MapLibreMap({
        container: mapElRef.current,
        style: STYLE_URL,
        center: has ? [init.lon, init.lat] : [31.4, 48.9],
        zoom: has ? 9 : 4.3,
        minZoom: 2,
        maxZoom: 18,
        attributionControl: false,
        dragRotate: false,
        pitchWithRotate: false,
        touchPitch: false,
      });
    } catch {
      // без WebGL (вимкнено апаратне прискорення) мапа не запуститься
      setReady(true); // «Зачекайте» тут марне: окреме повідомлення про WebGL нижче
      showToast(t("webglError"));
      return undefined;
    }
    map.touchZoomRotate.disableRotation();
    map.addControl(new AttributionControl({ compact: true }), "bottom-left");

    // Підписи мовою сайту: name:uk → англійська → місцева назва (шилди доріг не чіпаємо)
    const lang = (i18n.resolvedLanguage || "en").split("-")[0];
    map.on("load", () => {
      setReady(true);
      for (const layer of map.getStyle().layers) {
        const tf = layer.layout?.["text-field"];
        if (layer.type === "symbol" && tf && JSON.stringify(tf).includes('"name_en"')) {
          map.setLayoutProperty(layer.id, "text-field", [
            "coalesce",
            ["get", `name:${lang}`],
            ["get", "name_en"],
            ["get", "name"],
          ]);
        }
      }
    });

    map.on("click", (e) => {
      setMarker({ lat: e.lngLat.lat, lon: normLon(e.lngLat.lng) });
      setDropCount((c) => c + 1);
    });

    // Елемент позначки: нульового розміру, клік крізь нього йде на мапу
    const el = document.createElement("div");
    el.style.cssText = "width:0;height:0;pointer-events:none;";
    markerRef.current = new Marker({ element: el, anchor: "center" });
    setMarkerEl(el);

    mapRef.current = map;
    return () => {
      markerRef.current?.remove();
      markerRef.current = null;
      markerAddedRef.current = false;
      map.remove();
      mapRef.current = null;
    };
  }, [showToast]);

  // Позначка на мапі стежить за станом
  useEffect(() => {
    const map = mapRef.current;
    const m = markerRef.current;
    if (!map || !m || !marker) return;
    m.setLngLat([marker.lon, marker.lat]);
    if (!markerAddedRef.current) {
      m.addTo(map);
      markerAddedRef.current = true;
    }
  }, [marker, markerEl]);

  // «Моє місцезнаходження»: центруємо мапу й ставимо позначку (якщо браузер дозволив)
  const locateMe = () => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        mapRef.current?.flyTo({ center: [longitude, latitude], zoom: 13 });
        setMarker({ lat: latitude, lon: longitude });
        setDropCount((c) => c + 1);
      },
      () => showToast(t("gpsError")),
      { enableHighAccuracy: false, timeout: 8000 },
    );
  };

  const dark = isDarkMode !== false;

  return createPortal(
    <Overlay $closing={closing} role="dialog" aria-modal="true" aria-label={t("title")}>
      <MapArea ref={mapElRef} $closing={closing} />
      <LoadingPill $dark={dark} $hidden={ready} $failed={loadFailed} role="status" aria-live="polite">
        {loadFailed ? t("mapLoadFailed") : t("mapLoading")}
      </LoadingPill>
      {markerEl &&
        marker &&
        createPortal(
          <PinWrap key={dropCount}>
            <PinDrop>
              <Pin />
            </PinDrop>
          </PinWrap>,
          markerEl,
        )}

      <TopBar $dark={dark} $closing={closing}>
        <TitleBox>
          <b>{t("title")}</b>
          <span>{t("hint")}</span>
        </TitleBox>
        <RoundBtn type="button" $dark={dark} onClick={requestClose} aria-label={t("close")} title={t("close")}>
          <MdClose />
        </RoundBtn>
      </TopBar>

      <ZoomBox $dark={dark} $closing={closing}>
        <RoundBtn type="button" $dark={dark} onClick={() => mapRef.current?.zoomIn()} aria-label="+" title="+">
          <MdAdd />
        </RoundBtn>
        <RoundBtn type="button" $dark={dark} onClick={() => mapRef.current?.zoomOut()} aria-label="−" title="−">
          <MdRemove />
        </RoundBtn>
        {typeof navigator !== "undefined" && navigator.geolocation && (
          <RoundBtn type="button" $dark={dark} onClick={locateMe} aria-label="GPS" title="GPS">
            <MdMyLocation />
          </RoundBtn>
        )}
      </ZoomBox>

      {toast.text && (
        <Toast key={toast.id} $dark={dark} role="status">
          {toast.text}
        </Toast>
      )}

      <BottomCard $dark={dark} $closing={closing}>
        <CoordBox>
          <small>
            <MdTouchApp aria-hidden="true" /> {i18n.t("hero.coords.selectedPoint")}
          </small>
          <strong>{marker ? `${marker.lat.toFixed(4)}°, ${marker.lon.toFixed(4)}°` : "—"}</strong>
        </CoordBox>
        <UseBtn
          type="button"
          disabled={!marker}
          onClick={() => marker && finish(() => onPick(marker.lat, marker.lon))}
        >
          <MdMyLocation aria-hidden="true" /> <span>{t("use")}</span>
        </UseBtn>
      </BottomCard>
    </Overlay>,
    document.body,
  );
}
