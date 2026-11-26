// Повзунок часу прогнозу — як у Windy: кнопка «грати», довга шкала на всю ширину карти,
// помаранчева підказка з днем і годиною над бігунком, позначки днів.
import React from "react";
import styled from "styled-components";
import { FiPause, FiPlay } from "react-icons/fi";
import { pressable, revealed } from "./styxiaMotion.js";

const THUMB = 16;

const Bar = styled.div`
  position: absolute;
  left: 8px;
  right: 52px;
  bottom: 8px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  padding: 0 14px 0 6px;
  border-radius: 999px;
  background: var(--sx-bar);
  /* Розмиває карту під смугою: іконки й підписи міст не проглядають крізь підписи днів */
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: var(--sx-text);
  font-size: 11px;
  ${(p) => revealed(!p.$hidden, 1)}
`;

const PlayButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--sx-play-bg);
  color: var(--sx-play-fg);
  font-size: 18px;
  cursor: pointer;
  ${pressable}

  &:hover {
    background: var(--sx-play-hover);
    box-shadow: 0 0 0 4px var(--sx-hover);
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 2px;
  }
`;

const TrackBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  height: 100%;
`;

const Days = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
  right: 0;
  height: 14px;
  pointer-events: none;

  span {
    position: absolute;
    top: 0;
    padding-left: 3px;
    border-left: 1px solid var(--sx-border-strong);
    font-size: 11.5px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: var(--sx-text);
  }
`;

const Range = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 9px;
  width: 100%;
  height: ${THUMB}px;
  margin: 0;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  &:focus-visible {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(to right, var(--sx-fill) var(--p), var(--sx-track) var(--p));
  }

  &::-moz-range-track {
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(to right, var(--sx-fill) var(--p), var(--sx-track) var(--p));
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: ${THUMB}px;
    height: ${THUMB}px;
    margin-top: -5.5px;
    border: 3px solid #f59e0b;
    border-radius: 50%;
    background: #fff;
  }

  &::-moz-range-thumb {
    width: ${THUMB - 6}px;
    height: ${THUMB - 6}px;
    border: 3px solid #f59e0b;
    border-radius: 50%;
    background: #fff;
  }

  &:focus-visible::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px rgba(255, 209, 102, 0.6);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 6px);
  transform: translateX(-50%);
  padding: 4px 10px;
  border-radius: 6px;
  background: #f59e0b;
  color: #2a1500;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  pointer-events: none;
  transition: left 0.12s linear;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid transparent;
    border-top-color: #f59e0b;
  }
`;

const Loading = styled.span`
  position: absolute;
  right: 0;
  bottom: -1px;
  padding: 1px 8px;
  border-radius: 8px;
  background: rgba(20, 20, 24, 0.82);
  font-size: 10.5px;
  color: #fff;
  pointer-events: none;
`;

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

/** «Четвер 26 - 15:00» у часовому поясі людини. */
export const frameLabel = (date, lang) => {
  const weekday = capitalize(new Intl.DateTimeFormat(lang, { weekday: "long" }).format(date));
  const time = new Intl.DateTimeFormat(lang, { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(date);
  return `${weekday} ${date.getDate()} - ${time}`;
};

const StyxiaTimeline = ({ t, lang, runTime, hours, frame, onFrame, playing, onPlay, loaded, total, hidden = false }) => {
  const last = hours.length - 1;
  const percent = last > 0 ? (frame / last) * 100 : 0;
  const dateOf = (k) => new Date(runTime + hours[k] * 3600000);
  const label = frameLabel(dateOf(frame), lang);

  // Позначка на першому кадрі кожного місцевого дня
  const days = [];
  for (let k = 1; k <= last; k += 1) {
    if (dateOf(k).getDate() !== dateOf(k - 1).getDate()) {
      const date = dateOf(k);
      const short = new Intl.DateTimeFormat(lang, { weekday: "short" }).format(date);
      days.push({ k, text: `${short} ${date.getDate()}` });
    }
  }

  return (
    <Bar role="group" aria-label={t("climateMap.styxia.timeline")} $hidden={hidden} inert={hidden}>
      <PlayButton
        type="button"
        aria-label={t(playing ? "climateMap.styxia.pause" : "climateMap.styxia.play")}
        title={t(playing ? "climateMap.styxia.pause" : "climateMap.styxia.play")}
        onClick={onPlay}
      >
        {playing ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" style={{ marginLeft: 2 }} />}
      </PlayButton>
      <TrackBox>
        <Days aria-hidden="true">
          {days.map(({ k, text }) => (
            <span key={k} style={{ left: `calc(${(k / last) * 100}% + ${(0.5 - k / last) * THUMB}px)` }}>
              {text}
            </span>
          ))}
        </Days>
        <Tooltip style={{ left: `calc(${percent}% + ${(0.5 - percent / 100) * THUMB}px)`, bottom: "calc(100% - 2px)" }}>{label}</Tooltip>
        <Range
          type="range"
          min={0}
          max={last}
          step={1}
          value={frame}
          style={{ "--p": `${percent}%` }}
          aria-label={t("climateMap.styxia.timeline")}
          aria-valuetext={label}
          onChange={(e) => onFrame(Number(e.target.value))}
        />
        {loaded < total && (
          <Loading>{t("climateMap.styxia.framesLoading", { done: loaded, total })}</Loading>
        )}
      </TrackBox>
    </Bar>
  );
};

export default StyxiaTimeline;
