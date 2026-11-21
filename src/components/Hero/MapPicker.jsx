import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { MdAdd, MdRemove, MdClose, MdMyLocation, MdTouchApp } from "react-icons/md";
import i18n from "../../i18n/i18n.js";

// Мапа для вибору точки: тиснете — координати підставляються у режим координат.
// Власна легка мапа на плитках OpenStreetMap (без Leaflet — нічого не додає до збірки):
// перетягування, колесо/кнопки +/−, клік ставить позначку. Мапа на весь екран, а панелі
// «плавають» поверх неї скляними картками; поява й зникнення — плавні.

const TILE = 256;
const MIN_ZOOM = 3;
const MAX_ZOOM = 17;
const DRAG_THRESHOLD = 4;
const CLOSE_MS = 260;

const worldSize = (z) => TILE * 2 ** z;
const project = (lat, lon, z) => {
  const s = worldSize(z);
  const sin = Math.sin((Math.max(-85.0511, Math.min(85.0511, lat)) * Math.PI) / 180);
  return {
    x: ((lon + 180) / 360) * s,
    y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * s,
  };
};
const unproject = (x, y, z) => {
  const s = worldSize(z);
  const n = Math.PI - (2 * Math.PI * y) / s;
  return {
    lat: (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))),
    lon: (x / s) * 360 - 180,
  };
};
const normLon = (lon) => ((((lon + 180) % 360) + 360) % 360) - 180;
const clampLat = (lat) => Math.max(-85, Math.min(85, lat));

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
const tileIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const pinDrop = keyframes`
  0% { opacity: 0; transform: translateY(-34px); }
  55% { opacity: 1; transform: translateY(3px); }
  75% { transform: translateY(-5px); }
  100% { transform: none; }
`;
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
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #aad3df;
  touch-action: none;
  cursor: grab;
  user-select: none;
  ${motion(mapZoomIn, mapZoomOut, 420)}
  &:active {
    cursor: grabbing;
  }
  img {
    position: absolute;
    width: ${TILE}px;
    height: ${TILE}px;
    max-width: none;
    pointer-events: none;
    animation: ${tileIn} 0.3s ease both;
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
const PinWrap = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  z-index: 2;
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
const Attribution = styled.a`
  position: absolute;
  left: 8px;
  bottom: 4px;
  z-index: 3;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 10px;
  color: #333;
  background: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  ${motion(fadeIn, fadeOut, 500, 300)}
`;

const t = (key) => i18n.t(`hero.mapPicker.${key}`);

export default function MapPicker({ initial, isDarkMode, onPick, onClose }) {
  const hasInitial = Number.isFinite(initial?.lat) && Number.isFinite(initial?.lon);
  const [view, setView] = useState(() =>
    hasInitial ? { lat: initial.lat, lon: initial.lon, zoom: 10 } : { lat: 48.9, lon: 31.4, zoom: 5 },
  );
  const [marker, setMarker] = useState(hasInitial ? { lat: initial.lat, lon: initial.lon } : null);
  // Кількість поставлених позначок: ключ для повторної анімації «падіння»
  const [dropCount, setDropCount] = useState(0);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [closing, setClosing] = useState(false);
  const areaRef = useRef(null);
  const dragRef = useRef(null);
  const timerRef = useRef(0);

  // Закриття: спершу програємо зникнення, потім повідомляємо батька
  const finish = useCallback(
    (after) => {
      if (timerRef.current) return;
      setClosing(true);
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      timerRef.current = window.setTimeout(after, reduce ? 0 : CLOSE_MS);
    },
    [],
  );
  useEffect(() => () => window.clearTimeout(timerRef.current), []);
  const requestClose = useCallback(() => finish(onClose), [finish, onClose]);

  useEffect(() => {
    const el = areaRef.current;
    if (!el) return undefined;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && requestClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [requestClose]);

  // Новий масштаб так, щоб точка під курсором лишилась на місці
  const zoomAt = useCallback(
    (delta, px, py) => {
      setView((v) => {
        const zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, v.zoom + delta));
        if (zoom === v.zoom) return v;
        const c = project(v.lat, v.lon, v.zoom);
        const ax = px ?? size.w / 2;
        const ay = py ?? size.h / 2;
        const worldX = c.x - size.w / 2 + ax;
        const worldY = c.y - size.h / 2 + ay;
        const point = unproject(worldX, worldY, v.zoom);
        const np = project(point.lat, point.lon, zoom);
        const centre = unproject(np.x - ax + size.w / 2, np.y - ay + size.h / 2, zoom);
        return { lat: clampLat(centre.lat), lon: normLon(centre.lon), zoom };
      });
    },
    [size.w, size.h],
  );

  // Колесо — нативним слухачем (React-івський onWheel пасивний і не дає зупинити прокрутку сторінки)
  useEffect(() => {
    const el = areaRef.current;
    if (!el) return undefined;
    let lock = 0;
    const onWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lock < 120) return;
      lock = now;
      const rect = el.getBoundingClientRect();
      zoomAt(e.deltaY < 0 ? 1 : -1, e.clientX - rect.left, e.clientY - rect.top);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  const centre = project(view.lat, view.lon, view.zoom);
  const originX = centre.x - size.w / 2;
  const originY = centre.y - size.h / 2;

  const tiles = [];
  if (size.w > 0) {
    const n = 2 ** view.zoom;
    const x0 = Math.floor(originX / TILE);
    const x1 = Math.floor((originX + size.w) / TILE);
    const y0 = Math.max(0, Math.floor(originY / TILE));
    const y1 = Math.min(n - 1, Math.floor((originY + size.h) / TILE));
    for (let ty = y0; ty <= y1; ty++) {
      for (let tx = x0; tx <= x1; tx++) {
        const wrapped = ((tx % n) + n) % n;
        tiles.push(
          <img
            key={`${view.zoom}/${tx}/${ty}`}
            alt=""
            draggable={false}
            loading="eager"
            src={`https://tile.openstreetmap.org/${view.zoom}/${wrapped}/${ty}.png`}
            style={{ left: tx * TILE - originX, top: ty * TILE - originY }}
          />,
        );
      }
    }
  }

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, view, moved: false };
  };
  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
    d.moved = true;
    const c = project(d.view.lat, d.view.lon, d.view.zoom);
    const next = unproject(c.x - dx, c.y - dy, d.view.zoom);
    setView({ lat: clampLat(next.lat), lon: normLon(next.lon), zoom: d.view.zoom });
  };
  const onPointerUp = (e) => {
    const d = dragRef.current;
    dragRef.current = null;
    if (!d || d.moved) return;
    // клік без перетягування — ставимо позначку
    const rect = areaRef.current.getBoundingClientRect();
    const p = unproject(originX + (e.clientX - rect.left), originY + (e.clientY - rect.top), view.zoom);
    setMarker({ lat: clampLat(p.lat), lon: normLon(p.lon) });
    setDropCount((c) => c + 1);
  };

  // «Моє місцезнаходження»: центруємо мапу й ставимо позначку (якщо браузер дозволив)
  const locateMe = () => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setView({ lat: latitude, lon: longitude, zoom: 13 });
        setMarker({ lat: latitude, lon: longitude });
        setDropCount((c) => c + 1);
      },
      () => {},
      { enableHighAccuracy: false, timeout: 8000 },
    );
  };

  const markerPos = marker ? project(marker.lat, marker.lon, view.zoom) : null;
  const dark = isDarkMode !== false;

  return createPortal(
    <Overlay $closing={closing} role="dialog" aria-modal="true" aria-label={t("title")}>
      <MapArea
        ref={areaRef}
        $closing={closing}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (dragRef.current = null)}
      >
        {tiles}
        {markerPos && (
          <PinWrap key={dropCount} style={{ left: markerPos.x - originX, top: markerPos.y - originY }}>
            <PinDrop>
              <Pin />
            </PinDrop>
          </PinWrap>
        )}
      </MapArea>

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
        <RoundBtn type="button" $dark={dark} onClick={() => zoomAt(1)} aria-label="+" title="+">
          <MdAdd />
        </RoundBtn>
        <RoundBtn type="button" $dark={dark} onClick={() => zoomAt(-1)} aria-label="−" title="−">
          <MdRemove />
        </RoundBtn>
        {typeof navigator !== "undefined" && navigator.geolocation && (
          <RoundBtn type="button" $dark={dark} onClick={locateMe} aria-label="GPS" title="GPS">
            <MdMyLocation />
          </RoundBtn>
        )}
      </ZoomBox>

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

      <Attribution
        $closing={closing}
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
      >
        © OpenStreetMap
      </Attribution>
    </Overlay>,
    document.body,
  );
}
