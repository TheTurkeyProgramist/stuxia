// «Карта Стихії»: власна карта на MapLibre + OpenFreeMap.
// Дані GFS готує `bun run weather:build` у weather-data/ (див. scripts/weather-map/build.mjs).
// Обраний шар (styxiaLayers.js) — растр під підписами, вітер — частинки на окремому canvas,
// унизу повзунок часу прогнозу, у Україні — заливка областей із повітряною тривогою.
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FiAlertTriangle, FiChevronUp, FiEye, FiEyeOff, FiHeart, FiLayers, FiPlus, FiSun, FiX } from "react-icons/fi";
import { Map as MapLibreMap, NavigationControl, Popup, setWorkerUrl } from "maplibre-gl";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";
import "maplibre-gl/dist/maplibre-gl.css";
import { ownFeatures, serverFeatures, worldFeatures, forecastFor, loadVisibleServerWeather, conditionKey, applyLayerValues } from "./styxiaPoints.js";
import { addWeatherIcons, weatherIconUrl, LAYER_ICONS } from "./styxiaIcons.jsx";
import { LAYERS, ALTITUDE_LAYERS, decodeValue, formatLayerValue } from "./styxiaLayers.js";
import StyxiaAltitude from "./StyxiaAltitude.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { fade, riseIn, sideIn } from "./mapMotion.js";
import { altitudeText } from "./styxiaDays.js";
import { sampleGrid } from "./styxiaWeather.js";
import {
  DATA_URL, MERCATOR_LIMIT, fetchData, loadMeta, nearestFrame, loadRgba, windPlanes, channelPlane, speedPlane,
  layerBlobUrl, startParticles,
} from "./styxiaRender.js";
import { fetchAirAlerts, regionsWithAlerts, alertLabels, alertSummary, sinceLabel } from "./styxiaAlerts.js";
import { isobarFeatures } from "./styxiaIsolines.js";
import { collectPlaces, buildGrids, createTaken, placeFeatures } from "./styxiaPlaces.js";
import { uniquePoints, notDuplicate, atFrame } from "./styxiaDedupe.js";
import { fadeUp, pulse, revealed, pressable, themeTokens } from "./styxiaMotion.js";
import StyxiaPanel from "./StyxiaPanel.jsx";
import { layerUnit, shortTemp } from "./styxiaUnits.js";
import { groupDays, dayKey } from "./styxiaDays.js";
import { useMapUnits } from "./useMapUnits.js";
import StyxiaTimeline from "./StyxiaTimeline.jsx";
import StyxiaAttribution from "./StyxiaAttribution.jsx";

setWorkerUrl(maplibreWorkerUrl);

// Файл із public/ не імпортують, а беруть за адресою
const stuxiaIcon = "/icons/icon-192.png";

const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
const OWN_COLOR = "#e07000";
const SERVER_COLOR = "#1565c0";
const WORLD_COLOR = "#00897b";
const PLACE_COLOR = "#64748b";
// Кадр у межах цього часу від «зараз» вважаємо поточним і показуємо живі дані серверних міст
const LIVE_WINDOW_MS = 90 * 60 * 1000;
// Як в alerts.in.ua: тривога — помаранчева, тривала (окуповане, з 2022-го) — темно-червона
const ALERT_COLOR = "#ff9800";
const LONG_ALERT_COLOR = "#7a1020";
// Рівні наближення: власні картки видно завжди, великі міста з ~3.6, решта з ~5.2, а міста світу —
// мегаполіси з ~2.2, столиці з ~3.8, решта з ~5.2. Так на огляді світу сотні точок не злипаються в пляму.
// Порядок = пріоритет при тісноті: що вище в списку, то раніше займає місце
const TIERS = [
  { order: 0, minzoom: 0 },
  { order: 1, minzoom: 4 },
  { order: 2, minzoom: 5.2 },
  { order: 3, minzoom: 2.2 },
  { order: 4, minzoom: 3.8 },
  { order: 5, minzoom: 5.2 },
  // Усі міста й села з плиток підкладки — найнижчий пріоритет, тож лише доповнюють решту
  { order: 6, minzoom: 0 },
];
const POINT_LAYERS = TIERS.flatMap((_, i) => [`styxia-points-circle-${i}`, `styxia-points-label-${i}`, `styxia-points-icon-${i}`]);
const ALERT_LAYERS = ["styxia-alerts-fill", "styxia-alerts-line", "styxia-alerts-label"];
const ISOBAR_LAYERS = ["styxia-isobars", "styxia-isobar-labels"];

// Шари знизу вгору. Вище — раніше займає місце під підписи, тож назви міст важливіші за час тривоги
// (підписи тривог лежать під точками міст), а власні картки — найважливіші
const LAYER_ORDER = [
  "styxia-field",
  "styxia-alerts-fill",
  "styxia-alerts-line",
  ...ISOBAR_LAYERS,
  "styxia-alerts-label",
  // Спершу точки, вище підписи, найвище — іконки: іконки займають місце першими, тож підписи їх обходять
  ...[...TIERS.keys()].reverse().map((i) => `styxia-points-circle-${i}`),
  ...[...TIERS.keys()].reverse().map((i) => `styxia-points-label-${i}`),
  ...[...TIERS.keys()].reverse().map((i) => `styxia-points-icon-${i}`),
];
// Растр, заливка тривог і лінії ізобар лежать ПІД кордонами й підписами підкладки — раніше вони були над ними
// й затуляли їх на 50–75% (тому кордони й назви країн та областей виглядали бляклими)
const UNDER_BASE = new Set(["styxia-field", "styxia-alerts-fill", "styxia-alerts-line", "styxia-isobars"]);
const baseAnchor = (map) => {
  const layers = map.getStyle().layers;
  return (layers.find((l) => l.id.includes("boundary")) || layers.find((l) => l.type === "symbol"))?.id;
};
/** Додає шар за порядком LAYER_ORDER: під найближчим вищим нашим; шари «під підкладкою» — під її кордонами. */
const addInOrder = (map, spec) => {
  const later = LAYER_ORDER.slice(LAYER_ORDER.indexOf(spec.id) + 1);
  if (UNDER_BASE.has(spec.id)) {
    map.addLayer(spec, later.find((id) => UNDER_BASE.has(id) && map.getLayer(id)) ?? baseAnchor(map));
    return;
  }
  map.addLayer(spec, later.find((id) => map.getLayer(id)));
};

const LAYER_STORAGE_KEY = "styxia_map_layer";
const PANEL_STORAGE_KEY = "styxia_map_panel";
const ALERTS_STORAGE_KEY = "styxia_map_alerts";
const ISOBARS_STORAGE_KEY = "styxia_map_isobars";
const WATERMARK_STORAGE_KEY = "styxia_map_watermark";
const ALERTS_REFRESH_MS = 60 * 1000;
// Швидкість — у кадрах прогнозу за секунду: ×1 = 2 кадри/с (6 годин прогнозу за секунду)
const SPEEDS = [0.5, 1, 2, 4];
// Infinity — «Авто»: без ліміту, скільки дає екран
const FPS_OPTIONS = [10, 15, 24, 30, 60, Infinity];

const readLayerId = () => {
  try {
    const saved = localStorage.getItem(LAYER_STORAGE_KEY);
    return saved === "none" || LAYERS.some((l) => l.id === saved) ? saved : LAYERS[0].id;
  } catch {
    return LAYERS[0].id;
  }
};

// Панель відкрита, якщо людина так лишила; а першого разу — лише на широкому екрані
const readPanelOpen = () => {
  try {
    const saved = localStorage.getItem(PANEL_STORAGE_KEY);
    if (saved === "0" || saved === "1") return saved === "1";
  } catch {
    /* нема сховища — береться за шириною */
  }
  return window.innerWidth >= 700;
};

// Вибір чекбоксів пам’ятаємо в браузері; приватне вікно без сховища — просто типове значення
const readFlag = (key) => {
  try {
    return localStorage.getItem(key) !== "0";
  } catch {
    return true;
  }
};
const saveFlag = (key, value) => {
  try {
    localStorage.setItem(key, value ? "1" : "0");
  } catch {
    /* нема сховища — не біда */
  }
};
const readChoice = (key, fallback, options) => {
  try {
    const value = Number(localStorage.getItem(key));
    return options.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
};
const saveValue = (key, value) => {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    /* нема сховища — не біда */
  }
};

const Root = styled.div`
  position: absolute;
  inset: 0;
  ${(p) => themeTokens(p.$dark)}
  background: var(--sx-bg);
  container-type: inline-size;
  font-family: var(--font-family);

  /* MapLibre вішає на контейнер position: relative — перебиваємо вищою специфічністю */
  && .styxia-map {
    position: absolute;
    inset: 0;
  }

  /* «Приховати все»: кнопки масштабу плавно зникають. Підпис авторства лишається (StyxiaAttribution) — цього вимагає ліцензія */
  .maplibregl-ctrl-top-right {
    transition: opacity 0.22s ease;
  }

  /* Режим створення: перехрестя замість руки, навіть над точками міст */
  &[data-picking="true"] .maplibregl-canvas {
    cursor: crosshair !important;
  }
  &[data-clean="true"] .maplibregl-ctrl-top-right {
    opacity: 0;
    pointer-events: none;
  }

  /* Картка-тултіп міста й області: темна, як решта інтерфейсу карти */
  .styxia-popup .maplibregl-popup-content {
    padding: 10px 14px;
    border-radius: 12px;
    background: var(--sx-popup-bg);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    font-family: inherit;
  }
  .styxia-popup.maplibregl-popup-anchor-bottom .maplibregl-popup-tip,
  .styxia-popup.maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip,
  .styxia-popup.maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip {
    border-top-color: var(--sx-popup-bg);
  }
  .styxia-popup.maplibregl-popup-anchor-top .maplibregl-popup-tip,
  .styxia-popup.maplibregl-popup-anchor-top-left .maplibregl-popup-tip,
  .styxia-popup.maplibregl-popup-anchor-top-right .maplibregl-popup-tip {
    border-bottom-color: var(--sx-popup-bg);
  }
  .styxia-popup.maplibregl-popup-anchor-left .maplibregl-popup-tip {
    border-right-color: var(--sx-popup-bg);
  }
  .styxia-popup.maplibregl-popup-anchor-right .maplibregl-popup-tip {
    border-left-color: var(--sx-popup-bg);
  }
  .styxia-popup-box {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--sx-text);
    animation: styxiaPopupIn 0.18s ease both;
  }
  .styxia-popup-box img {
    flex-shrink: 0;
  }
  .styxia-popup-box strong {
    display: block;
    font-size: 15px;
    line-height: 1.25;
  }
  .styxia-popup-box .kick {
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--sx-kicker);
  }
  .styxia-popup-box .sub,
  .styxia-popup-box .det {
    font-size: 12.5px;
    line-height: 1.35;
    color: var(--sx-text-dim);
  }
  .styxia-popup-box .big {
    font-size: 21px;
    font-weight: 800;
    line-height: 1.2;
  }
  @keyframes styxiaPopupIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .styxia-popup-box {
      animation: none;
    }
  }
`;

// Вміст картки-тултіпа: іконка погоди ліворуч, праворуч назва, стан, велика температура, вітер.
// Через textContent, а не HTML: назву картки людина вводить сама
const popupContent = ({ iconUrl, kicker, name, subtitle, big, details, accent }) => {
  const box = document.createElement("div");
  box.className = "styxia-popup-box";
  if (iconUrl) {
    const image = document.createElement("img");
    image.src = iconUrl;
    image.alt = "";
    image.width = 44;
    image.height = 44;
    box.append(image);
  }
  const text = document.createElement("div");
  if (kicker) {
    const small = document.createElement("div");
    small.className = "kick";
    small.textContent = kicker;
    text.append(small);
  }
  const title = document.createElement("strong");
  title.textContent = name;
  if (accent) title.style.color = accent;
  text.append(title);
  for (const [value, className] of [[subtitle, "sub"], [big, "big"], [details, "det"]]) {
    if (!value) continue;
    const line = document.createElement("div");
    line.className = className;
    line.textContent = value;
    text.append(line);
  }
  box.append(text);
  return box;
};

// Датчик під курсором: кільце в точці й біла плашка зі значенням (як у Windy)
const Sensor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease;

  i {
    position: absolute;
    left: -6px;
    top: -6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.55);
  }

  b {
    position: absolute;
    left: 12px;
    bottom: 16px;
    padding: 3px 11px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.96);
    color: #0f1d2e;
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.35);
  }

  &[data-fx="1"] b {
    left: auto;
    right: 12px;
  }

  &[data-fy="1"] b {
    bottom: auto;
    top: 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Particles = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

// Швидкі кнопки зліва вгорі, поки панель закрита: шар, тривоги, вітер, сховати все
const Dock = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  ${(p) => revealed(p.$show)}
`;

const DockButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding: 0 13px;
  border-radius: 17px;
  border: 1px solid var(--sx-border);
  background: var(--sx-surface);
  color: var(--sx-text);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  ${pressable}

  svg {
    font-size: 16px;
    flex-shrink: 0;
  }

  &:hover {
    background: var(--sx-surface-hover);
    border-color: var(--sx-border-strong);
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 2px;
  }
`;

const DockIcon = styled(DockButton)`
  position: relative;
  width: 34px;
  padding: 0;
  background: ${(p) => (p.$on ? "rgba(245, 158, 11, 0.95)" : "var(--sx-surface)")};
  border-color: ${(p) => (p.$on ? "#ffd166" : "var(--sx-border)")};
  color: ${(p) => (p.$on ? "#2a1500" : "var(--sx-text)")};

  svg {
    font-size: 19px;
  }

  &:hover {
    background: ${(p) => (p.$on ? "#ffb02e" : "var(--sx-surface-hover)")};
  }

  /* Підказка з назвою (data-tip): звичайний title з'являється із затримкою і не читається */
  &::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 9px);
    left: 0;
    transform: translateY(-4px);
    padding: 4px 10px;
    border-radius: 6px;
    background: #f59e0b;
    color: #2a1500;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;
  }

  &::before {
    content: "";
    position: absolute;
    top: calc(100% + 4px);
    left: 12px;
    border: 5px solid transparent;
    border-bottom-color: #f59e0b;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: none;
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after,
    &::before {
      transition: none;
    }
  }
`;

// Над повзунком часу (він займає нижні 64 px) і над його підказкою з часом
const BottomLeft = styled.div`
  position: absolute;
  left: 8px;
  bottom: 94px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  max-width: calc(100% - 60px);
  ${(p) => revealed(!p.$hidden, 1)}
`;

const LegendCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: min(210px, 100%);
  padding: 5px 9px 7px;
  border-radius: 10px;
  background: var(--sx-surface);
  color: var(--sx-text);
  font-size: 11px;
  animation: ${fadeUp} 0.3s ease both;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 22px;
  }

  .head strong {
    font-size: 12px;
    line-height: 22px;
  }

  .head button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    margin: 0 -4px 0 0;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: var(--sx-text);
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .head button:hover {
    background: var(--sx-hover);
  }

  .head button:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 1px;
  }

  .head svg {
    display: block;
    width: 16px;
    height: 16px;
    transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  /* Розгорнуто — стрілка дивиться вниз («згорнути») */
  &[data-open="true"] .head svg {
    transform: rotate(180deg);
  }

  .bar {
    height: 8px;
    border-radius: 4px;
  }

  .ticks {
    display: flex;
    justify-content: space-between;
    gap: 6px;
  }

  /* Середня позначка шкали лише розгорнута: зникає, а не вилітає, тож крайні не стрибають */
  .ticks .mid {
    transition: opacity 0.22s ease;
  }

  &[data-open="false"] .ticks .mid {
    opacity: 0;
  }

  /* Рядок часу моделі: висота плавно від нуля (grid 0fr → 1fr) */
  .more {
    display: grid;
    grid-template-rows: 0fr;
    margin-top: -4px;
    opacity: 0;
    transition:
      grid-template-rows 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
      margin-top 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
      opacity 0.22s ease;
  }

  .more > span {
    min-height: 0;
    overflow: hidden;
  }

  &[data-open="true"] .more {
    grid-template-rows: 1fr;
    margin-top: 0;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    .head svg,
    .ticks .mid,
    .more {
      transition: none;
    }
  }
`;

const AlertChip = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 5px 10px;
  border-radius: 999px;
  background: ${(p) => (p.$active ? "#ffb02e" : "var(--sx-surface)")};
  color: ${(p) => (p.$active ? "#2a1500" : "var(--sx-text)")};
  font-size: 11.5px;
  font-weight: 700;
  transition: background 0.3s ease;

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${(p) => (p.$active ? "#2a1500" : "#22c55e")};
    animation: ${(p) => (p.$active ? pulse : "none")} 1.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &::before {
      animation: none;
    }
  }
`;

// Водяний знак: прибирається хрестиком або перемикачем у панелі й так само повертається — безкоштовно
const Watermark = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  max-width: 100%;
  padding: 4px 5px 4px 8px;
  border-radius: 999px;
  background: var(--sx-surface);
  color: var(--sx-text);
  font-size: 11px;
  font-weight: 600;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: var(--sx-text);
    cursor: pointer;
    transition: background 0.15s ease;
  }

  button:hover {
    background: var(--sx-hover);
  }

  button:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 1px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// Підказка режиму створення — по центру під швидкими кнопками
const PickBanner = styled.div`
  position: absolute;
  top: 52px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: calc(100% - 24px);
  padding: 6px 7px 6px 14px;
  border-radius: 999px;
  background: #ffb02e;
  color: #2a1500;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);

  button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(42, 21, 0, 0.14);
    color: #2a1500;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  button:hover {
    background: rgba(42, 21, 0, 0.28);
  }

  button:focus-visible {
    outline: 2px solid #2a1500;
    outline-offset: 1px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Banner = styled.div`
  position: absolute;
  right: 8px;
  bottom: 94px;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: min(300px, calc(100% - 16px));
  padding: 8px 8px 8px 12px;
  border-radius: 10px;
  background: rgba(120, 72, 0, 0.95);
  border: 1px solid #f59e0b;
  color: #fff;
  font-size: 12px;
  line-height: 1.4;

  span {
    flex: 1;
  }

  button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    cursor: pointer;
    transition: background 0.18s ease;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Message = styled.p`
  position: absolute;
  left: 50%;
  bottom: 80px;
  z-index: 3;
  transform: translateX(-50%);
  width: max-content;
  max-width: 90%;
  margin: 0;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(120, 20, 20, 0.92);
  color: #fff;
  font-size: 13px;
  text-align: center;

  code {
    display: block;
    margin-top: 4px;
  }
`;

const AlertsDisclaimer = styled.p`
  margin: 0;
  max-width: 220px;
  padding: 4px 8px;
  border-radius: 8px;
  background: rgba(10, 16, 28, 0.78);
  color: #fff;
  font-size: 10px;
  line-height: 1.3;
`;

const StyxiaMap = ({ lat, lon, zoom, onReady, weatherCards, gpsEnabled, isDarkMode = true, pickSignal = 0, onPick, compact = false }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "en").split("-")[0];
  // Тривоги — лише для України, як і українські джерела карти
  const isUkrainian = lang === "uk";
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mapRef = useRef(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;
  const initialView = useRef({ lat, lon, zoom, ukrainian: isUkrainian });
  const [failed, setFailed] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [pointsReady, setPointsReady] = useState(false);
  const [layerId, setLayerId] = useState(readLayerId);
  const layer = LAYERS.find((l) => l.id === layerId);
  // Висота над землею: лише для шарів, у яких вона є (і для самих частинок вітру)
  const [altitude, setAltitude] = useState(0);
  const [panelOpen, setPanelOpen] = useState(readPanelOpen);
  // Легенда типово згорнута (менше закриває карту); вибір пам'ятаємо
  const [legendOpen, setLegendOpen] = useState(() => {
    try {
      return localStorage.getItem("styxia_map_legend") === "1";
    } catch {
      return false;
    }
  });
  // «Приховати все» діє до перезавантаження. У маленькому вікні міні-плеєра кнопки типово сховані
  const [clean, setClean] = useState(compact);
  const [showWind, setShowWind] = useState(true);
  // Режим створення: клік по карті передає точку «Додати місто». Вмикається кнопкою «+» або з кнопки «Вибрати на мапі»
  const [picking, setPicking] = useState(pickSignal > 0);
  const pickingRef = useRef(picking);
  pickingRef.current = picking;
  const onPickRef = useRef(onPick);
  onPickRef.current = onPick;
  const [showWatermark, setShowWatermark] = useState(() => readFlag(WATERMARK_STORAGE_KEY));
  const [showServer, setShowServer] = useState(() => readFlag("styxia_map_server_points"));
  const [showOwn, setShowOwn] = useState(() => readFlag("styxia_map_own_points"));
  const [showWorld, setShowWorld] = useState(() => readFlag("styxia_map_world_points"));
  const [showPlaces, setShowPlaces] = useState(() => readFlag("styxia_map_places"));
  const [placeList, setPlaceList] = useState([]);
  const [grids, setGrids] = useState(null);
  const [valuePlane, setValuePlane] = useState(null);
  const [showMarks, setShowMarks] = useState(() => readFlag("styxia_map_marks"));
  const [showIsobars, setShowIsobars] = useState(() => readFlag(ISOBARS_STORAGE_KEY));
  const [cityData, setCityData] = useState(null);
  const [serverVersion, setServerVersion] = useState(0);

  // Кадри прогнозу
  const [meta, setMeta] = useState(null);
  const [frame, setFrame] = useState(0);
  // Одиниці — ті самі, що в картках погоди
  const [units, changeUnit] = useMapUnits();
  const unitsRef = useRef(units);
  unitsRef.current = units;
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(() => readChoice("styxia_map_speed", 1, SPEEDS));
  const [fps, setFps] = useState(() => readChoice("styxia_map_fps", 30, FPS_OPTIONS));
  const [loaded, setLoaded] = useState(0);
  const [windReady, setWindReady] = useState(false);
  const [measuredFps, setMeasuredFps] = useState(null);
  const [lowFps, setLowFps] = useState(false);
  const [tipDismissed, setTipDismissed] = useState(false);
  // Час, на який показано кадр; «поточний» — якщо він близько до зараз
  const validTime = meta ? Date.parse(meta.time) + meta.hours[frame] * 3600000 : null;
  const liveNow = validTime === null || Math.abs(validTime - Date.now()) < LIVE_WINDOW_MS;

  // Тривоги
  const [showAlerts, setShowAlerts] = useState(() => readFlag(ALERTS_STORAGE_KEY));
  const alertsOn = isUkrainian && showAlerts;
  const [regions, setRegions] = useState(null);
  const [alerts, setAlerts] = useState(null);
  const [alertsError, setAlertsError] = useState(false);
  const [alertsReady, setAlertsReady] = useState(false);

  const popupRef = useRef(null);
  const abortRef = useRef(new AbortController());
  const frameRef = useRef(0);
  frameRef.current = frame;
  const windFrames = useRef(new Map()); // індекс кадру → [u, v] байтами
  const windPending = useRef(new Map());
  const windRef = useRef(null); // вітер поточного кадру для частинок
  const imagePending = useRef(new Map()); // «шар:кадр» → blob-адреса картинки
  const imageReady = useRef(new Set());
  const planeCache = useRef(new Map()); // «шар:кадр» → байти шару: з них і картинка, і ізобари, і значення під курсором
  const planePending = useRef(new Map());
  const recentLayers = useRef([]); // шари, чиї байти тримаємо в пам'яті (не більше трьох)
  const ensurePlaneRef = useRef(null);
  const sensorRef = useRef(null);
  const lastPointer = useRef(null);
  const layerRef = useRef(null);
  const metaRef = useRef(null);
  const cleanRef = useRef(false);
  const unitRef = useRef("");
  const renderSensorRef = useRef(() => {});
  const baseOtherFilter = useRef(null);
  const isobarCache = useRef(new Map()); // кадр → ізобари (GeoJSON)
  const gridCache = useRef(new Map()); // кадр → декодовані поля для погоди в населених пунктах
  const gridPending = useRef(new Map());
  const fpsRef = useRef(fps);
  fpsRef.current = fps;
  const colorRef = useRef("rgba(255, 255, 255, 0.85)");
  colorRef.current = !layer || layer.lightBase ? "rgba(30, 45, 80, 0.75)" : "rgba(255, 255, 255, 0.85)";
  const lowSeconds = useRef(0);
  const tRef = useRef(t);
  tRef.current = t;
  const alertsRef = useRef(null);
  alertsRef.current = alerts;
  const windUnitRef = useRef("");
  windUnitRef.current = t("climateMap.styxia.windUnit");

  const fail = useCallback((error) => {
    console.error("Styxia map data:", error);
    setFailed(true);
    onReadyRef.current?.();
  }, []);

  // Мета з переліком годин; відкриваємо кадр, найближчий до зараз
  useEffect(() => {
    const controller = new AbortController();
    abortRef.current = controller;
    const pendingImages = imagePending.current;
    loadMeta(controller.signal)
      .then((loadedMeta) => {
        setMeta(loadedMeta);
        setFrame(nearestFrame(loadedMeta));
      })
      .catch((error) => {
        if (!controller.signal.aborted) fail(error);
      });
    return () => {
      controller.abort();
      // blob-адреси картинок живуть, доки живе карта
      for (const promise of pendingImages.values()) promise.then((url) => URL.revokeObjectURL(url)).catch(() => {});
    };
  }, [fail]);

  const levels = meta?.levels || [];
  const level = (!layer || ALTITUDE_LAYERS.has(layer.id)) && levels.includes(altitude) ? altitude : 0;
  const levelRef = useRef(level);
  levelRef.current = level;
  const levelFile = level ? `h${level}` : "field";
  const windKey = useCallback((k) => `${level}:${k}`, [level]);
  const layerKey = useCallback((target) => (level && ALTITUDE_LAYERS.has(target.id) ? `${target.id}@${level}` : target.id), [level]);

  const ensureWind = useCallback(
    (k) => {
      const key = windKey(k);
      const cached = windFrames.current.get(key);
      if (cached) return Promise.resolve(cached);
      let promise = windPending.current.get(key);
      if (!promise) {
        promise = loadRgba(meta, meta.hours[k], levelFile, abortRef.current.signal)
          .then((rgba) => {
            const result = windPlanes(rgba);
            windFrames.current.set(key, result);
            windPending.current.delete(key);
            return result;
          })
          .catch((error) => {
            windPending.current.delete(key);
            throw error;
          });
        windPending.current.set(key, promise);
      }
      return promise;
    },
    [meta, levelFile, windKey],
  );

  // Байти шару на кадр (одне значення на клітинку сітки): з них будуються і картинка, і ізобари, і значення під курсором
  const ensurePlane = useCallback(
    (target, k) => {
      const id = layerKey(target);
      const key = `${id}:${k}`;
      const cached = planeCache.current.get(key);
      if (cached) return Promise.resolve(cached);
      let promise = planePending.current.get(key);
      if (!promise) {
        promise = (async () =>
          target.fromWind
            ? speedPlane(await ensureWind(k), target)
            : channelPlane(await loadRgba(meta, meta.hours[k], id === target.id ? target.file : levelFile, abortRef.current.signal), target.channel))()
          .then((plane) => {
            planeCache.current.set(key, plane);
            planePending.current.delete(key);
            // Байти лише трьох останніх шарів: решта легко докачується, а пам'ять не росте
            if (recentLayers.current[0] !== id) {
              recentLayers.current = [id, ...recentLayers.current.filter((other) => other !== id)].slice(0, 3);
              for (const stored of planeCache.current.keys()) {
                if (!recentLayers.current.includes(stored.split(":")[0])) planeCache.current.delete(stored);
              }
            }
            return plane;
          })
          .catch((error) => {
            planePending.current.delete(key);
            throw error;
          });
        planePending.current.set(key, promise);
      }
      return promise;
    },
    [meta, ensureWind, layerKey, levelFile],
  );
  ensurePlaneRef.current = ensurePlane;
  layerRef.current = layer;
  metaRef.current = meta;
  cleanRef.current = clean;

  // Картинка шару на кадр: blob-адреса, готова для MapLibre
  const ensureImage = useCallback(
    (target, k) => {
      const key = `${layerKey(target)}:${k}`;
      let promise = imagePending.current.get(key);
      if (!promise) {
        promise = (async () => {
          const url = await layerBlobUrl(meta, target, await ensurePlane(target, k));
          imageReady.current.add(key);
          return url;
        })().catch((error) => {
          imagePending.current.delete(key);
          throw error;
        });
        imagePending.current.set(key, promise);
      }
      return promise;
    },
    [meta, ensurePlane, layerKey],
  );

  // Вітер поточного кадру — для частинок
  useEffect(() => {
    if (!meta) return;
    ensureWind(frame)
      .then((result) => {
        windRef.current = { meta, planes: result };
        setWindReady(true);
      })
      .catch((error) => {
        if (abortRef.current.signal.aborted) return;
        // Не вдалося саме цей кадр — частинки йдуть далі за попереднім
        if (!windRef.current) fail(error);
      });
  }, [meta, frame, ensureWind, fail]);

  const dayWindow = useMemo(() => {
    if (!meta) return "";
    const days = groupDays(meta.hours.map((hour) => new Date(Date.parse(meta.time) + hour * 3600000)));
    const key = dayKey(new Date(Date.parse(meta.time) + meta.hours[frame] * 3600000));
    const index = days.findIndex((day) => day.key === key);
    const next = days[index + 1] || days[index];
    return `${days[index].frames[0]}-${next.frames.at(-1)}`;
  }, [meta, frame]);

  // Фонове завантаження кадрів дня: спершу від поточного вперед, щоб відтворення не зупинялося
  useEffect(() => {
    if (!meta) return undefined;
    let cancelled = false;
    const [first, last] = dayWindow.split("-").map(Number);
    const count = last - first + 1;
    const from = Math.max(0, frameRef.current - first);
    const order = Array.from({ length: count }, (_, i) => first + ((from + i) % count));
    const isDone = (k) => (layer ? imageReady.current.has(`${layerKey(layer)}:${k}`) : windFrames.current.has(windKey(k)));
    const queue = order.filter((k) => !isDone(k));
    let done = count - queue.length;
    setLoaded(done);
    let next = 0;
    const worker = async () => {
      while (!cancelled && next < queue.length) {
        const k = queue[next];
        next += 1;
        try {
          await (layer ? ensureImage(layer, k) : ensureWind(k));
        } catch {
          /* кадр не завантажився — відтворення його пропустить */
        }
        if (!cancelled) {
          done += 1;
          setLoaded(done);
        }
      }
    };
    worker();
    worker();
    // Вітер для всіх кадрів теж, коли частинки ввімкнено (окрема черга, у лічильник не йде)
    if (showWind && layer) {
      let nextWind = 0;
      const windWorker = async () => {
        while (!cancelled && nextWind < order.length) {
          const k = order[nextWind];
          nextWind += 1;
          try {
            await ensureWind(k);
          } catch {
            /* див. вище */
          }
        }
      };
      windWorker();
    }
    return () => {
      cancelled = true;
    };
  }, [meta, dayWindow, layer, showWind, ensureImage, ensureWind, layerKey, windKey]);

  // Відтворення: наступний кадр лише коли він уже завантажений, а не раніше
  useEffect(() => {
    if (!playing || !meta) return undefined;
    const count = meta.hours.length;
    let timer;
    const tick = () => {
      const next = (frameRef.current + 1) % count;
      const ready = (!layer || imageReady.current.has(`${layerKey(layer)}:${next}`)) && (!showWind || windFrames.current.has(windKey(next)));
      if (ready) setFrame(next);
      timer = setTimeout(tick, 1000 / (2 * speed));
    };
    timer = setTimeout(tick, 1000 / (2 * speed));
    return () => clearTimeout(timer);
  }, [playing, speed, meta, layer, showWind, layerKey, windKey]);

  useEffect(() => {
    const view = initialView.current;
    let map;
    try {
      map = new MapLibreMap({
        container: containerRef.current,
        style: STYLE_URL,
        center: [Number(view.lon) || 31.4, Number(view.lat) || 48.9],
        zoom: Number(view.zoom) || 4,
        minZoom: 1.5,
        maxZoom: 12,
        attributionControl: false,
        dragRotate: false,
        pitchWithRotate: false,
        touchPitch: false,
      });
    } catch (error) {
      console.error("Styxia map:", error);
      setFailed(true);
      onReadyRef.current?.();
      return undefined;
    }
    map.touchZoomRotate.disableRotation();
    map.addControl(new NavigationControl({ showCompass: false }), "top-right");
    map.on("load", () => setMapLoaded(true));
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Підписи мовою сайту
  useEffect(() => {
    if (!mapLoaded) return;
    const map = mapRef.current;
    for (const styleLayer of map.getStyle().layers) {
      const text = styleLayer.layout?.["text-field"];
      if (styleLayer.type === "symbol" && text && JSON.stringify(text).includes("name")) {
        if (JSON.stringify(text).includes('"ref"')) continue;
        map.setLayoutProperty(styleLayer.id, "text-field", ["coalesce", ["get", `name:${lang}`], ["get", "name_en"], ["get", "name"]]);
      }
    }
  }, [mapLoaded, lang]);

  // Кордони країн і підписи країн та областей підкладки: темніші й товщі, з сильнішим білим ободком
  useEffect(() => {
    if (!mapLoaded) return;
    const map = mapRef.current;
    const set = (id, paint) => {
      if (!map.getLayer(id)) return;
      for (const [name, value] of Object.entries(paint)) map.setPaintProperty(id, name, value);
    };
    const border = ["interpolate", ["linear"], ["zoom"], 2, 1.2, 5, 1.8, 12, 3.6];
    set("boundary_2", { "line-color": "#1b2433", "line-opacity": 1, "line-width": border });
    set("boundary_disputed", { "line-color": "#1b2433", "line-width": border });
    set("boundary_3", { "line-color": "#3b4656", "line-width": ["interpolate", ["linear"], ["zoom"], 5, 1, 7, 1.5, 11, 2.6] });
    const label = { "text-color": "#0b1220", "text-halo-color": "#ffffff", "text-halo-width": 2.2, "text-halo-blur": 0.5 };
    for (const id of ["label_country_1", "label_country_2", "label_country_3"]) set(id, label);
    set("label_state", { ...label, "text-color": "#1f2937", "text-halo-width": 2 });
  }, [mapLoaded]);

  // Растр обраного шару на поточний кадр
  useEffect(() => {
    if (!mapLoaded || !meta) return undefined;
    const map = mapRef.current;
    let cancelled = false;
    const hide = () => map.getLayer("styxia-field") && map.setLayoutProperty("styxia-field", "visibility", "none");
    if (!layer) {
      hide();
      onReadyRef.current?.();
      return undefined;
    }
    ensureImage(layer, frame)
      .then((url) => {
        if (cancelled) return;
        const coordinates = [
          [-180, MERCATOR_LIMIT],
          [180, MERCATOR_LIMIT],
          [180, -MERCATOR_LIMIT],
          [-180, -MERCATOR_LIMIT],
        ];
        const source = map.getSource("styxia-field");
        if (source) {
          source.updateImage({ url, coordinates });
          map.setLayoutProperty("styxia-field", "visibility", "visible");
        } else {
          map.addSource("styxia-field", { type: "image", url, coordinates });
          addInOrder(map, { id: "styxia-field", type: "raster", source: "styxia-field", paint: { "raster-opacity": 0.75, "raster-fade-duration": 0 } });
        }
        onReadyRef.current?.();
      })
      .catch((error) => {
        if (cancelled || abortRef.current.signal.aborted) return;
        hide();
        fail(error);
      });
    return () => {
      cancelled = true;
    };
  }, [mapLoaded, meta, layer, frame, ensureImage, fail]);

  // Ізобари на шарі тиску: рахуємо з даних кадру й кешуємо
  useEffect(() => {
    if (!mapLoaded || !meta) return undefined;
    const map = mapRef.current;
    const setVisible = (visible) => {
      for (const id of ISOBAR_LAYERS) if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", visible ? "visible" : "none");
    };
    if (!layer?.isolines || !showIsobars) {
      setVisible(false);
      return undefined;
    }
    let cancelled = false;
    ensurePlane(layer, frame)
      .then((plane) => {
        if (cancelled) return;
        let data = isobarCache.current.get(frame);
        if (!data) {
          data = isobarFeatures(plane, layer, meta.width, meta.height);
          isobarCache.current.set(frame, data);
        }
        const source = map.getSource("styxia-isobars");
        if (source) {
          source.setData(data);
        } else {
          map.addSource("styxia-isobars", { type: "geojson", data });
          addInOrder(map, {
            id: "styxia-isobars",
            type: "line",
            source: "styxia-isobars",
            layout: { "line-join": "round" },
            paint: { "line-color": "#1b2a41", "line-opacity": 0.65, "line-width": ["case", ["get", "major"], 1.9, 1] },
          });
          addInOrder(map, {
            id: "styxia-isobar-labels",
            type: "symbol",
            source: "styxia-isobars",
            layout: {
              "symbol-placement": "line",
              "symbol-spacing": 280,
              "text-field": ["get", "label"],
              "text-font": ["Noto Sans Bold"],
              "text-size": 11,
            },
            paint: { "text-color": "#1b2a41", "text-halo-color": "rgba(255, 255, 255, 0.88)", "text-halo-width": 1.6 },
          });
        }
        setVisible(true);
      })
      .catch(() => {
        /* без ізобар шар усе одно показується */
      });
    return () => {
      cancelled = true;
    };
  }, [mapLoaded, meta, layer, frame, showIsobars, ensurePlane]);

  // Датчик під курсором (як у Windy): кільце в точці курсора й плашка зі значенням шару та одиницями.
  // Значення — з тих самих байтів, з яких намальовано шар, тож збігається з кольором і з повзунком часу
  const renderSensor = useCallback(() => {
    const el = sensorRef.current;
    if (!el) return;
    const pointer = lastPointer.current;
    const current = layerRef.current;
    const info = metaRef.current;
    if (!pointer || !current || !info || cleanRef.current || Math.abs(pointer.lat) > 85) {
      el.style.opacity = "0";
      return;
    }
    const aloft = levelRef.current && ALTITUDE_LAYERS.has(current.id) ? `@${levelRef.current}` : "";
    const plane = planeCache.current.get(`${current.id}${aloft}:${frameRef.current}`);
    if (!plane) {
      el.style.opacity = "0";
      // Байти кадру ще не готові (щойно змінили шар чи кадр) — докачуємо й малюємо знову
      ensurePlaneRef.current?.(current, frameRef.current).then(() => renderSensorRef.current()).catch(() => {});
      return;
    }
    const lon = ((((pointer.lng + 180) % 360) + 360) % 360) - 180;
    const value = decodeValue(Math.round(sampleGrid(plane, info.width, info.height, lon + 180, pointer.lat)), current);
    const shown = layerUnit(current.id, unitsRef.current, unitRef.current);
    el.lastChild.textContent = shown.digits === 2
      ? `${shown.convert(value).toFixed(2)} ${shown.label}`
      : formatLayerValue(shown.convert(value), current.id, shown.label);
    const box = containerRef.current;
    // Біля правого й нижнього країв плашка перекидається на інший бік курсора
    el.dataset.fx = pointer.x > box.clientWidth - 150 ? "1" : "0";
    // Типово плашка над курсором; під самим верхнім краєм — під ним
    el.dataset.fy = pointer.y < 60 ? "1" : "0";
    el.style.transform = `translate(${pointer.x}px, ${pointer.y}px)`;
    el.style.opacity = "1";
  }, []);
  renderSensorRef.current = renderSensor;

  useEffect(() => {
    if (!mapLoaded) return undefined;
    const map = mapRef.current;
    const track = (event) => {
      lastPointer.current = { x: event.point.x, y: event.point.y, lng: event.lngLat.lng, lat: event.lngLat.lat };
      renderSensor();
    };
    const leave = () => {
      lastPointer.current = null;
      renderSensor();
    };
    map.on("mousemove", track);
    map.on("click", track); // на дотик «миші» немає — показує там, куди торкнулись
    map.on("mouseout", leave);
    return () => {
      map.off("mousemove", track);
      map.off("click", track);
      map.off("mouseout", leave);
    };
  }, [mapLoaded, renderSensor]);

  // Кадр, шар чи «сховати все» змінились, а курсор стоїть — оновлюємо значення на місці
  useEffect(() => {
    renderSensor();
  }, [frame, layer, meta, clean, units, level, renderSensor]);

  // ── Режим створення
  useEffect(() => {
    if (pickSignal > 0) setPicking(true);
  }, [pickSignal]);

  useEffect(() => {
    if (!picking) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setPicking(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [picking]);

  useEffect(() => {
    if (!mapLoaded || !picking) return undefined;
    const map = mapRef.current;
    const choose = (event) => {
      const lon = ((((event.lngLat.lng + 180) % 360) + 360) % 360) - 180;
      setPicking(false);
      onPickRef.current?.(event.lngLat.lat, lon);
    };
    map.on("click", choose);
    return () => map.off("click", choose);
  }, [mapLoaded, picking]);

  // Частота кадрів частинок: міряємо щосекунди; кілька секунд поспіль багато нижче ліміту — порада
  const handleFps = useCallback((value) => {
    setMeasuredFps(value);
    const limit = Math.min(24, fpsRef.current * 0.6);
    lowSeconds.current = value < limit ? lowSeconds.current + 1 : 0;
    setLowFps(lowSeconds.current >= 3);
  }, []);

  useEffect(() => {
    if (!mapLoaded || !windReady || !showWind) return undefined;
    const canvas = canvasRef.current;
    const stop = startParticles(mapRef.current, canvas, {
      getWind: () => windRef.current,
      getFps: () => fpsRef.current,
      getColor: () => colorRef.current,
      onFps: handleFps,
    });
    return () => {
      stop();
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [mapLoaded, windReady, showWind, handleFps]);

  // Шари точок (іконка погоди ліворуч від точки, підпис під нею) і спливна картка за натисканням
  useEffect(() => {
    if (!mapLoaded) return undefined;
    const map = mapRef.current;
    let cancelled = false;
    const popup = new Popup({ closeButton: false, offset: 12, maxWidth: "280px", className: "styxia-popup" });
    popupRef.current = popup;
    const color = ["match", ["get", "kind"], "own", OWN_COLOR, "world", WORLD_COLOR, "place", PLACE_COLOR, SERVER_COLOR];

    const windText = (ms) => {
      const shown = layerUnit("windSpeed", unitsRef.current, windUnitRef.current);
      return `${tRef.current("climateMap.styxia.wind")}: ${Math.round(shown.convert(ms) * 10) / 10} ${shown.label}`;
    };

    const open = (event) => {
      if (pickingRef.current) return;
      const { name, temp, wind, icon, weatherIcon, kind, gps } = event.features[0].properties;
      const shownIcon = weatherIcon || icon;
      const condition = conditionKey(shownIcon);
      const isGps = gps === true || gps === "true";
      const hasTemp = temp !== undefined && temp !== null && temp !== "null";
      const hasWind = wind !== undefined && wind !== null && wind !== "null";
      const box = popupContent({
        iconUrl: weatherIconUrl(shownIcon),
        kicker: kind === "own" ? tRef.current(isGps ? "climateMap.styxia.gpsCard" : "climateMap.styxia.ownCard") : "",
        name,
        subtitle: condition ? tRef.current(condition) : "",
        big: hasTemp ? shortTemp(temp, unitsRef.current.temp).replace("°", ` ${layerUnit("temperature", unitsRef.current).label}`) : "",
        details: hasWind ? windText(Number(wind)) : "",
      });
      popup.setLngLat(event.features[0].geometry.coordinates).setDOMContent(box).addTo(map);
    };

    (async () => {
      try {
        await addWeatherIcons(map);
      } catch (error) {
        // без іконок точки й підписи все одно працюють
        console.error("Styxia map icons:", error);
      }
      if (cancelled) return;
      map.addSource("styxia-points", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
      TIERS.forEach(({ order, minzoom }, i) => {
        const filter = ["==", ["get", "order"], order];
        addInOrder(map, {
          id: `styxia-points-circle-${i}`,
          type: "circle",
          source: "styxia-points",
          minzoom,
          filter,
          paint: {
            // Дрібніші на малому масштабі: так менше каші
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 3, (order === 0 ? 8 : order === 6 ? 4 : 6) * 0.65, 8, order === 0 ? 8 : order === 6 ? 4 : 6],
            "circle-color": color,
            "circle-stroke-color": "#fff",
            "circle-stroke-width": 2,
          },
        });
        // Назва — окремо від іконки з температурою: іконка (над точкою) і температура (під нею) не губляться,
        // коли назва не вміщається. Назва пробує місце праворуч, ліворуч, зверху й знизу.
        // Темний текст із білим ободком читається на будь-якій заливці; тип міста видно по кольору точки.
        // Власні картки показуються завжди, навіть тісно; решту розводить розстановка, тому над Україною
        // вже не каша, а при наближенні з'являється більше міст
        addInOrder(map, {
          id: `styxia-points-label-${i}`,
          type: "symbol",
          source: "styxia-points",
          minzoom,
          filter,
          layout: {
            "text-field": ["get", "text"],
            "text-font": ["Noto Sans Bold"],
            "text-size": ["interpolate", ["linear"], ["zoom"], 3, 11, 8, 13],
            "text-variable-anchor": ["right", "left", "top", "bottom"],
            "text-radial-offset": 1.5,
            "text-justify": "auto",
            "text-allow-overlap": order === 0,
            // Тісно — спершу міста, потім містечка, потім села
            "symbol-sort-key": ["coalesce", ["get", "sort"], 0],
          },
          paint: { "text-color": "#0f1d2e", "text-halo-color": "#ffffff", "text-halo-width": 2.2, "text-halo-blur": 0.4 },
        });
        // Іконка погоди над точкою, під точкою — температура. Іконка займає місце першою, тому назви її обходять
        addInOrder(map, {
          id: `styxia-points-icon-${i}`,
          type: "symbol",
          source: "styxia-points",
          minzoom,
          filter,
          layout: {
            "icon-image": ["get", "icon"],
            "icon-size": ["interpolate", ["linear"], ["zoom"], 3, 0.6, 6, 0.85, 9, 1],
            "icon-anchor": "bottom",
            "icon-offset": [0, -7],
            "icon-allow-overlap": order === 0,
            "text-field": ["get", "short"],
            "text-font": ["Noto Sans Bold"],
            "text-size": 12,
            "text-anchor": "top",
            "text-offset": [0, 0.7],
            "text-optional": true,
            "text-allow-overlap": order === 0,
            "symbol-sort-key": ["coalesce", ["get", "sort"], 0],
          },
          paint: { "text-color": "#0f1d2e", "text-halo-color": "#ffffff", "text-halo-width": 2, "text-halo-blur": 0.4 },
        });
      });
      for (const id of POINT_LAYERS) {
        map.on("click", id, open);
        map.on("mouseenter", id, () => (map.getCanvas().style.cursor = "pointer"));
        map.on("mouseleave", id, () => (map.getCanvas().style.cursor = ""));
      }
      setPointsReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [mapLoaded]);

  // Міста світу й прогноз для серверних беруться зі збірки GFS (cities.txt) — тож збігаються з повзунком
  useEffect(() => {
    const controller = new AbortController();
    fetchData("cities.txt", controller.signal)
      .then((res) => res.json())
      .then(setCityData)
      .catch(() => {
        /* без cities.txt карта працює, лише без закордонних міст */
      });
    return () => controller.abort();
  }, []);
  const forecast = useMemo(
    () => (cityData && validTime !== null ? forecastFor(cityData, frame, validTime) : null),
    [cityData, frame, validTime],
  );

  // Байти вибраного шару на поточний кадр — з них беруться значення біля міст (температура тут не потрібна)
  useEffect(() => {
    if (!meta || !layer || (layer.id === "temperature" && !level)) {
      setValuePlane(null);
      return undefined;
    }
    let cancelled = false;
    ensurePlane(layer, frame)
      .then((plane) => {
        if (!cancelled) setValuePlane({ layerId: layer.id, level, frame, plane });
      })
      .catch(() => {
        /* без значень шару біля міст лишається температура */
      });
    return () => {
      cancelled = true;
    };
  }, [meta, layer, level, frame, ensurePlane]);

  // ── Усі міста й села: самі пункти беремо з плиток підкладки (OpenStreetMap), погоду в них рахуємо з моделі
  useEffect(() => {
    if (!pointsReady || !showPlaces) {
      setPlaceList([]);
      return undefined;
    }
    const map = mapRef.current;
    let timer;
    const refresh = () => {
      try {
        const view = map.getBounds();
        const padLon = (view.getEast() - view.getWest()) * 0.2;
        const padLat = (view.getNorth() - view.getSouth()) * 0.2;
        const features = map.querySourceFeatures("openmaptiles", { sourceLayer: "place" });
        setPlaceList(
          collectPlaces(features, lang, map.getZoom(), {
            west: view.getWest() - padLon,
            east: view.getEast() + padLon,
            south: view.getSouth() - padLat,
            north: view.getNorth() + padLat,
          }),
        );
      } catch {
        /* плитки ще не готові — спробуємо на наступній події */
      }
    };
    const later = () => {
      clearTimeout(timer);
      timer = setTimeout(refresh, 250);
    };
    // sourcedata: плитки догружаються вже після руху — тоді в них з'являються нові села
    const onSource = (event) => {
      if (event.sourceId === "openmaptiles" && event.isSourceLoaded) later();
    };
    map.on("moveend", later);
    map.on("sourcedata", onSource);
    later();
    return () => {
      clearTimeout(timer);
      map.off("moveend", later);
      map.off("sourcedata", onSource);
    };
  }, [pointsReady, showPlaces, lang]);

  // Поля кадру для погоди в населених пунктах: три файли, останні чотири кадри лишаємо в пам'яті
  const ensureGrids = useCallback(
    (k) => {
      const cached = gridCache.current.get(k);
      if (cached) return Promise.resolve(cached);
      let promise = gridPending.current.get(k);
      if (!promise) {
        const signal = abortRef.current.signal;
        promise = Promise.all(["field", "water", "extra"].map((file) => loadRgba(meta, meta.hours[k], file, signal)))
          .then(([field, water, extra]) => {
            const data = buildGrids(meta, { field, water, extra });
            gridCache.current.set(k, data);
            if (gridCache.current.size > 4) gridCache.current.delete(gridCache.current.keys().next().value);
            gridPending.current.delete(k);
            return data;
          })
          .catch((error) => {
            gridPending.current.delete(k);
            throw error;
          });
        gridPending.current.set(k, promise);
      }
      return promise;
    },
    [meta],
  );

  useEffect(() => {
    if (!meta || !(showPlaces || ((showOwn || showServer) && !liveNow))) return undefined;
    let cancelled = false;
    // Затримка: під час відтворення кадри міняються швидко, а завантажувати на кожен три файли не варто
    const timer = setTimeout(() => {
      ensureGrids(frame)
        .then((data) => {
          if (!cancelled) setGrids({ frame, data });
        })
        .catch(() => {
          /* без полів села лишаються без погоди, решта точок працює */
        });
    }, 300);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [meta, frame, showPlaces, showOwn, showServer, liveNow, ensureGrids]);

  useEffect(() => {
    if (!pointsReady) return;
    let own = showOwn ? uniquePoints(ownFeatures(weatherCards, { gps: gpsEnabled })) : [];
    // На інших кадрах картки показують прогноз моделі на той самий час, що й фон, а не «зараз»
    if (!liveNow) own = atFrame(own, grids?.frame === frame ? grids.data : null, new Date(validTime));
    // Місто, на яке вже є власна картка, не дублюємо: лишається одна мітка кольору картки
    const free = notDuplicate(own);
    let server = showServer ? serverFeatures(lang, liveNow ? null : forecast) : [];
    // У даних немає прогнозу міст — теж беремо з полів моделі, а не лишаємо «зараз» під іншим часом
    if (!liveNow && !forecast?.size) server = atFrame(server, grids?.frame === frame ? grids.data : null, new Date(validTime));
    server = server.filter(free);
    const world = showWorld && forecast ? worldFeatures(cityData, forecast, lang).filter(free) : [];
    const curated = [...server, ...world, ...own];
    // Решта міст і сіл із плиток — лише там, де ще нічого немає: не поруч із готовою точкою й не з тією ж назвою
    let places = [];
    if (showPlaces && grids && placeList.length) {
      const zoom = mapRef.current.getZoom();
      const taken = createTaken(curated, Math.max(0.01, 0.5 / 2 ** (zoom - 3)));
      const validAt = new Date(Date.parse(meta.time) + meta.hours[grids.frame] * 3600000);
      places = placeFeatures(placeList, grids.data, validAt, taken).filter(free);
    }
    // Біля міст значення вибраного шару (опади, тиск…), а не завжди температура
    const all = [...places, ...curated];
    const decorated = valuePlane && layer && valuePlane.layerId === layer.id && valuePlane.level === level && (layer.id !== "temperature" || level)
      ? applyLayerValues(all, layer, valuePlane.plane, meta, { ...layerUnit(layer.id, units), aloft: level > 0 })
      : all.map((item) => ({ ...item, properties: { ...item.properties, short: shortTemp(item.properties.temp, units.temp) } }));
    mapRef.current.getSource("styxia-points").setData({ type: "FeatureCollection", features: decorated });
  }, [pointsReady, showServer, showWorld, showOwn, showPlaces, placeList, grids, meta, weatherCards, serverVersion, lang, forecast, liveNow, cityData, gpsEnabled, layer, level, valuePlane, frame, validTime, units]);

  // Коли малюємо власні назви міст і сіл (з погодою), підписи самої підкладки ховаємо: інакше кожне місто
  // підписане двічі. Підписи країн, областей, островів і околиць лишаються; хутори малюємо самі
  useEffect(() => {
    if (!mapLoaded) return;
    const map = mapRef.current;
    const ours = showPlaces && grids !== null;
    for (const id of ["label_city", "label_city_capital", "label_town", "label_village"]) {
      if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", ours ? "none" : "visible");
    }
    if (map.getLayer("label_other")) {
      baseOtherFilter.current ??= map.getFilter("label_other");
      map.setFilter("label_other", ours ? ["all", baseOtherFilter.current, ["!=", ["get", "class"], "hamlet"]] : baseOtherFilter.current);
    }
  }, [mapLoaded, showPlaces, grids]);

  // Погода серверних міст — лише для видимої частини карти й лише коли чекбокс увімкнено
  useEffect(() => {
    // Живі дані серверних міст потрібні лише на «зараз»; на інших кадрах береться прогноз моделі
    if (!mapLoaded || !showServer || !liveNow) return undefined;
    const map = mapRef.current;
    let generation = 0;
    let stopped = false;
    const load = () => {
      generation += 1;
      const mine = generation;
      loadVisibleServerWeather(
        map.getBounds(),
        () => setServerVersion((v) => v + 1),
        () => stopped || mine !== generation,
      );
    };
    load();
    map.on("moveend", load);
    return () => {
      stopped = true;
      map.off("moveend", load);
    };
  }, [mapLoaded, showServer, liveNow]);

  // ── Повітряні тривоги
  useEffect(() => {
    if (!alertsOn || !mapLoaded || regions) return undefined;
    const controller = new AbortController();
    fetchData("regions.txt", controller.signal)
      .then((res) => res.json())
      .then(setRegions)
      .catch(() => {
        if (!controller.signal.aborted) setAlertsError(true);
      });
    return () => controller.abort();
  }, [alertsOn, mapLoaded, regions]);

  useEffect(() => {
    if (!alertsOn) return undefined;
    const controller = new AbortController();
    const load = () =>
      fetchAirAlerts(controller.signal)
        .then((data) => {
          setAlerts(data);
          setAlertsError(false);
        })
        .catch(() => {
          if (!controller.signal.aborted) setAlertsError(true);
        });
    load();
    // Не смикаємо сервіс у фоновій вкладці
    const timer = setInterval(() => {
      if (!document.hidden) load();
    }, ALERTS_REFRESH_MS);
    return () => {
      controller.abort();
      clearInterval(timer);
    };
  }, [alertsOn]);

  useEffect(() => {
    if (!mapLoaded || !regions || alertsReady) return;
    const map = mapRef.current;
    map.addSource("styxia-regions", { type: "geojson", data: regionsWithAlerts(regions, null) });
    map.addSource("styxia-alert-labels", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
    const active = ["==", ["get", "alert"], true];
    // Заливка є в усіх областей (прозора, де спокійно) — щоб по будь-якій можна було клацнути
    addInOrder(map, {
      id: "styxia-alerts-fill",
      type: "fill",
      source: "styxia-regions",
      paint: {
        "fill-color": ["case", ["==", ["get", "long"], true], LONG_ALERT_COLOR, active, ALERT_COLOR, "#000000"],
        "fill-opacity": ["case", ["==", ["get", "long"], true], 0.6, active, 0.5, 0.001],
      },
    });
    addInOrder(map, {
      id: "styxia-alerts-line",
      type: "line",
      source: "styxia-regions",
      filter: active,
      paint: { "line-color": ["case", ["==", ["get", "long"], true], "#4a0a14", "#e65100"], "line-width": 2 },
    });
    // Час і тривалість на карті, у центрі області — під назвами міст: тісно, то поступаються їм місцем
    addInOrder(map, {
      id: "styxia-alerts-label",
      type: "symbol",
      source: "styxia-alert-labels",
      minzoom: 3,
      layout: {
        "text-field": ["get", "text"],
        "text-font": ["Noto Sans Bold"],
        "text-size": 12,
        // Тісно — показується свіжіша тривога (sort), решта з'являється при наближенні
        "symbol-sort-key": ["get", "sort"],
      },
      // Темний текст на жовтій заливці, білий на темно-червоній (тривала тривога)
      paint: {
        "text-color": ["case", ["==", ["get", "long"], true], "#ffffff", "#2a1500"],
        "text-halo-color": ["case", ["==", ["get", "long"], true], "rgba(60, 10, 20, 0.9)", "rgba(255, 243, 205, 0.95)"],
        "text-halo-width": 2,
      },
    });
    map.on("click", "styxia-alerts-fill", (event) => {
      if (pickingRef.current) return;
      // Точка міста важливіша за область під нею
      if (map.queryRenderedFeatures(event.point, { layers: POINT_LAYERS.filter((id) => map.getLayer(id)) }).length) return;
      const { name, alert, since } = event.features[0].properties;
      const translate = tRef.current;
      const active = alert === true || alert === "true";
      const box = popupContent({
        name,
        accent: active ? "#ffb347" : undefined,
        subtitle: active
          ? translate("climateMap.styxia.alertSince", { time: sinceLabel(since, alertsRef.current?.cachedAt) })
          : translate(alert === false || alert === "false" ? "climateMap.styxia.alertOff" : "climateMap.styxia.alertNoData"),
      });
      popupRef.current?.setLngLat(event.lngLat).setDOMContent(box).addTo(map);
    });
    map.on("mouseenter", "styxia-alerts-fill", () => (map.getCanvas().style.cursor = "pointer"));
    map.on("mouseleave", "styxia-alerts-fill", () => (map.getCanvas().style.cursor = ""));
    setAlertsReady(true);
  }, [mapLoaded, regions, alertsReady]);

  useEffect(() => {
    if (!alertsReady) return;
    const map = mapRef.current;
    map.getSource("styxia-regions").setData(regionsWithAlerts(regions, alerts?.states, alerts?.cachedAt));
    const formatDuration = (minutes) =>
      minutes >= 60
        ? t("climateMap.styxia.durationHM", { h: Math.floor(minutes / 60), m: minutes % 60 })
        : t("climateMap.styxia.durationM", { m: minutes });
    map.getSource("styxia-alert-labels").setData(
      alertLabels(regions, alerts?.states, alerts?.cachedAt, ({ since, minutes, long }) =>
        long || minutes === null
          ? t("climateMap.styxia.alertLabelSince", { time: since })
          : t("climateMap.styxia.alertLabel", { time: since, duration: formatDuration(minutes) }),
      ),
    );
  }, [alertsReady, regions, alerts, t]);

  // Чистий вигляд: без точок, тривог і спливних карток (шар, ізобари й вітер лишаються)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (pointsReady) {
      for (const id of POINT_LAYERS) {
        // Іконки несуть і температуру під собою; без них лишаються точки з назвами
        const hidden = clean || (!showMarks && id.startsWith("styxia-points-icon-"));
        map.setLayoutProperty(id, "visibility", hidden ? "none" : "visible");
      }
    }
    if (alertsReady) {
      for (const id of ALERT_LAYERS) map.setLayoutProperty(id, "visibility", clean || !alertsOn ? "none" : "visible");
    }
    if (clean) popupRef.current?.remove();
  }, [pointsReady, alertsReady, alertsOn, clean, showMarks]);

  const baseUnit = layer ? (layer.unitKey ? t(`climateMap.styxia.${layer.unitKey}`) : layer.unit) : "";
  const shownUnit = layerUnit(layer?.id, units, baseUnit);
  const unit = shownUnit.label;
  // Датчик сам перераховує значення, тож йому потрібен підпис за замовчуванням
  unitRef.current = baseUnit;
  const legendValue = (value) => {
    const k = 10 ** (shownUnit.digits ?? (Math.abs(shownUnit.convert(value)) < 10 ? 1 : 0));
    return Math.round(shownUnit.convert(value) * k) / k;
  };
  const gradient = layer
    ? `linear-gradient(90deg, ${layer.stops
        .map(([, r, g, b, a = 1], i) => `rgba(${r},${g},${b},${a}) ${(i / (layer.stops.length - 1)) * 100}%`)
        .join(", ")})`
    : "";
  // Позначки під шкалою стоять рівномірно, як і кольори: перша, середня, остання
  const ticks = layer ? [0, Math.floor((layer.stops.length - 1) / 2), layer.stops.length - 1].map((i) => layer.stops[i][0]) : [];

  const info = layer?.info
    ? {
        title: t(`climateMap.styxia.info.${layer.id}.title`),
        about: t(`climateMap.styxia.info.${layer.id}.about`),
        levels: layer.info.levels.map((level) => ({
          key: level.key,
          color: level.color,
          range: level.to === null ? `> ${level.from} ${unit}` : `${level.from}–${level.to} ${unit}`,
          text: t(`climateMap.styxia.info.${layer.id}.${level.key}`),
        })),
      }
    : null;

  const chooseLayer = (id) => {
    setLayerId(id);
    setFailed(false);
    try {
      localStorage.setItem(LAYER_STORAGE_KEY, id);
    } catch {
      /* нема сховища — не біда */
    }
  };
  const setPanel = (open) => {
    setPanelOpen(open);
    saveFlag(PANEL_STORAGE_KEY, open);
  };
  const changeWind = (value) => {
    setShowWind(value);
    if (!value) setMeasuredFps(null);
  };
  const toggleWatermark = (value) => {
    setShowWatermark(value);
    saveFlag(WATERMARK_STORAGE_KEY, value);
  };
  const changeAlerts = (value) => {
    setShowAlerts(value);
    saveFlag(ALERTS_STORAGE_KEY, value);
  };

  const summary = alertsOn && alerts ? alertSummary(alerts.states) : null;
  const switches = [
    { id: "wind", label: t("climateMap.styxia.wind"), checked: showWind, color: "#ffd166", onChange: changeWind },
    ...(layer?.isolines
      ? [
          {
            id: "isobars",
            label: t("climateMap.styxia.isobars"),
            checked: showIsobars,
            color: "#9fb3d1",
            onChange: (value) => {
              setShowIsobars(value);
              saveFlag(ISOBARS_STORAGE_KEY, value);
            },
          },
        ]
      : []),
    {
      id: "places",
      label: t("climateMap.styxia.allPlaces"),
      checked: showPlaces,
      color: PLACE_COLOR,
      onChange: (value) => {
        setShowPlaces(value);
        saveFlag("styxia_map_places", value);
      },
    },
    {
      id: "server",
      label: t("climateMap.styxia.serverPoints"),
      checked: showServer,
      color: SERVER_COLOR,
      onChange: (value) => {
        setShowServer(value);
        saveFlag("styxia_map_server_points", value);
      },
    },
    {
      id: "world",
      label: t("climateMap.styxia.worldCities"),
      checked: showWorld,
      color: WORLD_COLOR,
      onChange: (value) => {
        setShowWorld(value);
        saveFlag("styxia_map_world_points", value);
      },
    },
    {
      id: "own",
      label: `${t("climateMap.styxia.ownPoints")} (${ownFeatures(weatherCards, { gps: gpsEnabled }).length})`,
      checked: showOwn,
      color: OWN_COLOR,
      onChange: (value) => {
        setShowOwn(value);
        saveFlag("styxia_map_own_points", value);
      },
    },
    ...(isUkrainian
      ? [
          {
            id: "alerts",
            label: `${t("climateMap.styxia.alerts")}${summary ? ` (${summary.active})` : ""}`,
            checked: showAlerts,
            color: ALERT_COLOR,
            onChange: changeAlerts,
          },
        ]
      : []),
  ];
  const lowFpsTip = lowFps && !tipDismissed && showWind ? t("climateMap.styxia.lowFpsTip", { fps: measuredFps }) : null;
  const alertsNote = alertsOn
    ? `${t("climateMap.styxia.alertsNote")}${alertsError ? ` ${t("climateMap.styxia.alertsError")}` : ""}`
    : null;
  const LayerIcon = LAYER_ICONS[layerId] || LAYER_ICONS.none;
  const WindIcon = LAYER_ICONS.windSpeed;
  const [windowFirst, windowLast] = dayWindow.split("-").map(Number);
  const total = meta ? windowLast - windowFirst + 1 : 0;

  return (
    <Root data-clean={clean} data-picking={picking} $dark={isDarkMode}>
      <div ref={containerRef} className="styxia-map" />
      <Particles ref={canvasRef} aria-hidden="true" />
      <Sensor ref={sensorRef} aria-hidden="true">
        <i />
        <b />
      </Sensor>

      {/* Швидкі кнопки: відкрити панель, тривоги, вітер, сховати все */}
      <Dock $show={!clean && !panelOpen} inert={clean || panelOpen}>
        <DockButton type="button" aria-label={t("climateMap.styxia.openPanel")} title={t("climateMap.styxia.openPanel")} onClick={() => setPanel(true)}>
          <FiLayers aria-hidden="true" />
          <LayerIcon aria-hidden="true" />
          {t(`climateMap.styxia.${layerId}`)}
        </DockButton>
        <DockIcon
          type="button"
          $on={picking}
          aria-pressed={picking}
          aria-label={t("climateMap.styxia.addCity")}
          data-tip={t("climateMap.styxia.addCity")}
          onClick={() => setPicking(!picking)}
        >
          <FiPlus aria-hidden="true" />
        </DockIcon>
        {isUkrainian && (
          <DockIcon
            type="button"
            $on={showAlerts}
            aria-pressed={showAlerts}
            aria-label={t("climateMap.styxia.alerts")}
            data-tip={t("climateMap.styxia.alerts")}
            onClick={() => changeAlerts(!showAlerts)}
          >
            <FiAlertTriangle aria-hidden="true" />
          </DockIcon>
        )}
        <DockIcon
          type="button"
          $on={showWind}
          aria-pressed={showWind}
          aria-label={t("climateMap.styxia.wind")}
          data-tip={t("climateMap.styxia.wind")}
          onClick={() => changeWind(!showWind)}
        >
          <WindIcon aria-hidden="true" />
        </DockIcon>
        <DockIcon
          type="button"
          $on={showMarks}
          aria-pressed={showMarks}
          aria-label={t("climateMap.styxia.marks")}
          data-tip={t("climateMap.styxia.marks")}
          onClick={() => {
            setShowMarks(!showMarks);
            saveFlag("styxia_map_marks", !showMarks);
          }}
        >
          <FiSun aria-hidden="true" />
        </DockIcon>
        <DockIcon
          type="button"
          $on={showWatermark}
          aria-pressed={showWatermark}
          aria-label={t("climateMap.styxia.watermark")}
          data-tip={t("climateMap.styxia.watermark")}
          onClick={() => toggleWatermark(!showWatermark)}
        >
          <FiHeart aria-hidden="true" />
        </DockIcon>
        <DockIcon type="button" aria-label={t("climateMap.styxia.hideAll")} data-tip={t("climateMap.styxia.hideAll")} onClick={() => setClean(true)}>
          <FiEyeOff aria-hidden="true" />
        </DockIcon>
      </Dock>
      <Dock $show={clean} inert={!clean}>
        <DockButton type="button" onClick={() => setClean(false)}>
          <FiEye aria-hidden="true" />
          {t("climateMap.styxia.showAll")}
        </DockButton>
      </Dock>

      <StyxiaPanel
        open={panelOpen && !clean}
        t={t}
        layers={LAYERS}
        layerId={layerId}
        onLayer={chooseLayer}
        thumbBase={DATA_URL}
        thumbSuffix={`?v=${meta?.time || ""}`}
        info={info}
        switches={switches}
        units={units}
        onUnit={changeUnit}
        alertsNote={alertsNote}
        animation={{
          speed,
          speeds: SPEEDS,
          onSpeed: (value) => {
            setSpeed(value);
            saveValue("styxia_map_speed", value);
          },
          fps,
          fpsOptions: FPS_OPTIONS,
          autoLabel: t("climateMap.styxia.auto"),
          onFps: (value) => {
            setFps(value);
            saveValue("styxia_map_fps", value);
            // З новим лімітом міряємо й радимо заново
            lowSeconds.current = 0;
            setLowFps(false);
            setTipDismissed(false);
          },
          measured: showWind ? measuredFps : null,
          tip: lowFpsTip,
        }}
        onClose={() => setPanel(false)}
        onHideAll={() => setClean(true)}
      />

      <AnimatePresence>
      {!clean && levels.length > 0 && (!layer || ALTITUDE_LAYERS.has(layer.id)) && (
        <StyxiaAltitude
          key="altitude"
          motionProps={sideIn}
          levels={[0, ...levels]}
          value={level}
          onChange={setAltitude}
          lang={lang}
          distance={units.distance}
          label={t("climateMap.styxia.altitude")}
        />
      )}
      </AnimatePresence>

      <BottomLeft $hidden={clean} inert={clean}>
        <AnimatePresence>
        {alertsOn && (summary || alertsError) && (
          <AlertChip key="alerts" as={motion.div} {...riseIn} $active={Boolean(summary?.active)}>
            {summary
              ? t("climateMap.styxia.alertsSummary", { active: summary.active, total: summary.total })
              : t("climateMap.styxia.alertsError")}
          </AlertChip>
        )}
        </AnimatePresence>
        {layer && (
          <LegendCard key={layer.id} data-open={legendOpen}>
            <div className="head">
              <strong>
                {t(`climateMap.styxia.${layer.id}`)}
                {level ? ` · ${altitudeText(level, lang, units.distance)}` : ""}
              </strong>
              {/* Без title: системна підказка з'являється із затримкою й закриває легенду; назву дає aria-label */}
              <button
                type="button"
                aria-expanded={legendOpen}
                aria-label={t(legendOpen ? "climateMap.styxia.legendCollapse" : "climateMap.styxia.legendExpand")}
                onClick={() => {
                  setLegendOpen(!legendOpen);
                  saveFlag("styxia_map_legend", !legendOpen);
                }}
              >
                <FiChevronUp aria-hidden="true" />
              </button>
            </div>
            <span className="bar" aria-hidden="true" style={{ background: gradient }} />
            <div className="ticks">
              {ticks.map((value, i) => (
                <span key={value} className={i > 0 && i < ticks.length - 1 ? "mid" : undefined}>
                  {legendValue(value)}
                  {i === ticks.length - 1 ? ` ${unit}` : ""}
                </span>
              ))}
            </div>
            {meta && (
              <div className="more" aria-hidden={!legendOpen}>
                <span>
                  {t("climateMap.styxia.dataTime")}: {new Date(meta.run || meta.time).toLocaleString(lang, { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            )}
          </LegendCard>
        )}
        <AnimatePresence>
        {alertsOn && <AlertsDisclaimer key="disclaimer" as={motion.div} {...riseIn}>{t("climateMap.styxia.alertsDisclaimer")}</AlertsDisclaimer>}
        {showWatermark && (
          <Watermark key="watermark" as={motion.div} {...riseIn}>
            <img src={stuxiaIcon} alt="" />
            <span>{t("climateMap.styxia.madeWithLove")}</span>
            <button
              type="button"
              aria-label={t("climateMap.styxia.removeWatermark")}
              onClick={() => toggleWatermark(false)}
            >
              <FiX aria-hidden="true" />
            </button>
          </Watermark>
        )}
        </AnimatePresence>
      </BottomLeft>

      {meta && (
        <StyxiaTimeline
          t={t}
          lang={lang}
          runTime={Date.parse(meta.time)}
          hours={meta.hours}
          frame={frame}
          onFrame={(k) => setFrame(k)}
          playing={playing}
          onPlay={() => setPlaying((value) => !value)}
          loaded={loaded}
          total={total}
          hidden={clean}
        />
      )}
      <AnimatePresence>
      {picking && (
        <PickBanner key="pick" as={motion.div} {...fade} role="status">
          <span>{t("climateMap.styxia.pickHint")}</span>
          <button type="button" aria-label={t("climateMap.styxia.pickCancel")} onClick={() => setPicking(false)}>
            <FiX aria-hidden="true" />
          </button>
        </PickBanner>
      )}
      </AnimatePresence>
      <StyxiaAttribution t={t} ukrainian={isUkrainian} lifted={!clean} />
      <AnimatePresence>
      {!clean && lowFpsTip && !panelOpen && (
        <Banner key="fps" as={motion.div} {...riseIn} role="status">
          <span>{lowFpsTip}</span>
          <button type="button" aria-label={t("climateMap.styxia.closePanel")} onClick={() => setTipDismissed(true)}>
            <FiX aria-hidden="true" />
          </button>
        </Banner>
      )}
      </AnimatePresence>
      {failed && (
        <Message role="alert">
          {t(import.meta.env.DEV ? "climateMap.styxia.noData" : "climateMap.styxia.noDataPublic")}
          {import.meta.env.DEV && <code>bun run weather:build</code>}
        </Message>
      )}
    </Root>
  );
};

export default StyxiaMap;
