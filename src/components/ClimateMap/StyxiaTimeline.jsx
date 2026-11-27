// Повзунок часу прогнозу — як у Ventusky: кнопка з датою й календарем, шкала годин вибраного дня,
// помаранчева підказка з часом над бігунком і перехід на наступний день.
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiChevronDown, FiPause, FiPlay, FiSkipForward, FiX } from "react-icons/fi";
import { revealed } from "./styxiaMotion.js";
import { dayKey, groupDays, closestFrame, calendarWeeks } from "./styxiaDays.js";

const THUMB = 18;

// Спільна «дорога» крива: швидкий старт і м'яке гальмування
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const GOLD = "linear-gradient(135deg, #ffe29a 0%, #ffb02e 48%, #f07a00 100%)";

const swap = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`;
const shine = keyframes`
  to { background-position: 200% 0; }
`;

const Bar = styled.div`
  position: absolute;
  left: 8px;
  right: 52px;
  bottom: 8px;
  z-index: ${(p) => (p.$open ? 6 : 2)};
  display: flex;
  align-items: center;
  gap: 10px;
  height: 56px;
  padding: 0 10px 0 8px;
  border: 1px solid transparent;
  border-radius: 999px;
  /* Темне скло з тонкою золотою окантовкою */
  background:
    linear-gradient(180deg, rgba(24, 28, 44, 0.9), rgba(10, 13, 24, 0.92)) padding-box,
    linear-gradient(120deg, rgba(255, 214, 130, 0.75), rgba(255, 255, 255, 0.12) 35%, rgba(255, 255, 255, 0.08) 65%, rgba(255, 160, 50, 0.65)) border-box;
  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  backdrop-filter: blur(16px) saturate(1.4);
  color: #fff;
  font-size: 11px;
  ${(p) => revealed(!p.$hidden, 1)}
`;

const RoundButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid rgba(255, 214, 130, 0.35);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.07);
  color: #ffd88a;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.25s ${EASE}, box-shadow 0.25s ${EASE}, background-color 0.25s, color 0.25s;

  &[data-primary] {
    border-color: transparent;
    background: ${GOLD};
    color: #2a1500;
    box-shadow: 0 4px 14px rgba(255, 150, 30, 0.4);
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.06);
    box-shadow: 0 8px 20px rgba(255, 150, 30, 0.45);
  }

  &:active:not(:disabled) {
    transform: scale(0.94);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 2px;
  }
`;

const DateButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 6px;
  height: 38px;
  padding: 0 14px;
  border: 1px solid rgba(255, 214, 130, 0.35);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  font: inherit;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s ${EASE};

  .date {
    display: inline-flex;
    gap: 6px;
    animation: ${swap} 0.35s ${EASE};
  }

  .word {
    color: #ffd88a;
  }

  svg {
    color: #ffd88a;
    transition: transform 0.35s ${EASE};
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  &:hover {
    border-color: rgba(255, 214, 130, 0.8);
    box-shadow: 0 0 0 3px rgba(255, 176, 46, 0.16);
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 2px;
  }

  @container (max-width: 520px) {
    padding: 0 10px;

    .word {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .date {
      animation: none;
    }
  }
`;

const Calendar = styled.div`
  position: absolute;
  left: 0;
  bottom: calc(100% + 12px);
  padding: 34px 10px 10px;
  border: 1px solid rgba(255, 214, 130, 0.4);
  border-radius: 18px;
  background: linear-gradient(170deg, rgba(28, 32, 50, 0.97), rgba(12, 15, 27, 0.98));
  color: #fff;
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform-origin: bottom left;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.94);
  transition: opacity 0.25s ${EASE}, transform 0.35s ${EASE}, visibility 0s 0.25s;

  &[data-open="true"] {
    opacity: 1;
    visibility: visible;
    transform: none;
    transition: opacity 0.25s ${EASE}, transform 0.35s ${EASE};
  }

  table {
    border-collapse: separate;
    border-spacing: 2px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
  }

  th {
    padding: 2px 0 6px;
    border-bottom: 1px solid rgba(255, 214, 130, 0.25);
    color: #ffd88a;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  td {
    width: 34px;
    height: 32px;
    padding: 0;
    color: rgba(255, 255, 255, 0.28);
  }

  td button {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    font: inherit;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s ${EASE}, box-shadow 0.2s;
  }

  td button:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
  }

  td button[aria-pressed="true"] {
    background: ${GOLD};
    color: #2a1500;
    box-shadow: 0 4px 12px rgba(255, 150, 30, 0.45);
  }

  td button:focus-visible {
    outline: 2px solid #ffd166;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &[data-open="true"] {
      transition: none;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #ffd88a;
  cursor: pointer;
  transition: transform 0.3s ${EASE}, background-color 0.2s;

  &:hover {
    background: rgba(255, 176, 46, 0.3);
    transform: rotate(90deg);
  }
`;

const TrackBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  height: 100%;
`;

const Hours = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 20px;
  pointer-events: none;

  i {
    position: absolute;
    top: 0;
    width: 1px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
  }

  span {
    position: absolute;
    top: 6px;
    transform: translateX(-50%);
    font-size: 10.5px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    line-height: 12px;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.72);
  }

  /* На вузькій шкалі лишаємо кожен другий підпис */
  @container (max-width: 560px) {
    span:nth-of-type(even) {
      display: none;
    }
  }
`;

// Смуга й бігунок — власні елементи, щоб плавно їхати; прозорий input поверх ловить мишу, дотик і клавіші
const Slider = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  height: ${THUMB}px;

  input {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: ${THUMB}px;
    height: ${THUMB}px;
  }

  input::-moz-range-thumb {
    width: ${THUMB}px;
    height: ${THUMB}px;
  }

  .track {
    position: absolute;
    left: 0;
    right: 0;
    top: 6px;
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.16);
  }

  .fill {
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #f07a00, #ffb02e, #ffe29a, #ffb02e, #f07a00);
    background-size: 200% 100%;
    transition: width 0.45s ${EASE};
  }

  /* Під час відтворення смугою пробігає відблиск */
  &[data-playing="true"] .fill {
    animation: ${shine} 2.4s linear infinite;
  }

  .knob {
    position: absolute;
    top: 0;
    width: ${THUMB}px;
    height: ${THUMB}px;
    margin-left: -${THUMB / 2}px;
    box-sizing: border-box;
    border: 3px solid #ffb02e;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(255, 176, 46, 0.22), 0 2px 8px rgba(0, 0, 0, 0.4);
    transition: left 0.45s ${EASE}, transform 0.25s ${EASE};
  }

  input:hover ~ .knob,
  input:active ~ .knob {
    transform: scale(1.18);
  }

  input:focus-visible ~ .knob {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    .fill,
    .knob {
      transition: none;
    }

    &[data-playing="true"] .fill {
      animation: none;
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 2px);
  transform: translateX(-50%);
  padding: 4px 11px;
  border-radius: 8px;
  background: ${GOLD};
  color: #2a1500;
  font-size: 12.5px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(255, 150, 30, 0.4);
  pointer-events: none;
  transition: left 0.45s ${EASE};

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid transparent;
    border-top-color: #f89416;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Loading = styled.span`
  position: absolute;
  right: 0;
  bottom: calc(100% + 4px);
  padding: 2px 10px;
  border: 1px solid rgba(255, 214, 130, 0.3);
  border-radius: 999px;
  background: rgba(14, 17, 30, 0.9);
  font-size: 10.5px;
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
  animation: ${swap} 0.35s ${EASE};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const HOURS_OF_DAY = Array.from({ length: 24 }, (_, hour) => hour);
const LABELLED_HOURS = [2, 5, 8, 11, 14, 17, 20, 23];
// Позиція години на шкалі з поправкою на ширину бігунка
const position = (hour) => `calc(${(hour / 23) * 100}% + ${(0.5 - hour / 23) * THUMB}px)`;

/** «Сьогодні», «Завтра», «Вчора» мовою сайту, інакше короткий день тижня. */
const dayWord = (date, lang) => {
  const midnight = (value) => new Date(value.getFullYear(), value.getMonth(), value.getDate()).getTime();
  const offset = Math.round((midnight(date) - midnight(new Date())) / 86400000);
  return capitalize(
    Math.abs(offset) <= 1
      ? new Intl.RelativeTimeFormat(lang, { numeric: "auto" }).format(offset, "day")
      : new Intl.DateTimeFormat(lang, { weekday: "short" }).format(date),
  );
};

const StyxiaTimeline = ({ t, lang, runTime, hours, frame, onFrame, playing, onPlay, loaded, total, hidden = false }) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const barRef = useRef(null);
  const dates = hours.map((offset) => new Date(runTime + offset * 3600000));
  const days = groupDays(dates);
  const date = dates[frame];
  const key = dayKey(date);
  const dayIndex = days.findIndex((item) => item.key === key);
  const day = days[dayIndex];
  const nextDay = days[dayIndex + 1];
  const hour = date.getHours();
  const time = new Intl.DateTimeFormat(lang, { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(date);
  const full = new Intl.DateTimeFormat(lang, { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
  const longDate = new Intl.DateTimeFormat(lang, { weekday: "long", day: "numeric", month: "long" });
  const weekdayShort = new Intl.DateTimeFormat(lang, { weekday: "short" });
  const nextLabel = longDate.format(nextDay ? dates[nextDay.frames[0]] : date);

  // Той самий час в іншому дні
  const goToDay = (target) => onFrame(closestFrame(target, dates, hour));

  // Календар закривається кліком повз нього та клавішею Esc
  useEffect(() => {
    if (!calendarOpen) return undefined;
    const doc = barRef.current.ownerDocument;
    const onDown = (e) => {
      if (!barRef.current.contains(e.target)) setCalendarOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setCalendarOpen(false);
    };
    doc.addEventListener("pointerdown", onDown);
    doc.addEventListener("keydown", onKey);
    return () => {
      doc.removeEventListener("pointerdown", onDown);
      doc.removeEventListener("keydown", onKey);
    };
  }, [calendarOpen]);

  const byKey = new Map(days.map((item) => [item.key, item]));
  const weeks = calendarWeeks(dates[0], dates[dates.length - 1]);

  return (
    <Bar ref={barRef} role="group" aria-label={t("climateMap.styxia.timeline")} $hidden={hidden} $open={calendarOpen} inert={hidden}>
      <RoundButton
        data-primary
        type="button"
        aria-label={t(playing ? "climateMap.styxia.pause" : "climateMap.styxia.play")}
        title={t(playing ? "climateMap.styxia.pause" : "climateMap.styxia.play")}
        onClick={onPlay}
      >
        {playing ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" style={{ marginLeft: 2 }} />}
      </RoundButton>
      <DateButton type="button" aria-expanded={calendarOpen} onClick={() => setCalendarOpen((open) => !open)}>
        {/* key: новий день — текст плавно змінюється */}
        <span className="date" key={key}>
          <span className="word">{dayWord(date, lang)},</span>
          {full}
        </span>
        <FiChevronDown aria-hidden="true" />
      </DateButton>
      <Calendar data-open={calendarOpen} inert={!calendarOpen}>
          <CloseButton type="button" aria-label={t("common.close")} onClick={() => setCalendarOpen(false)}>
            <FiX aria-hidden="true" />
          </CloseButton>
          <table>
            <thead>
              <tr>
                {weeks[0].map((cell) => (
                  <th key={cell.getDay()} scope="col">{weekdayShort.format(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week) => (
                <tr key={dayKey(week[0])}>
                  {week.map((cell) => {
                    const available = byKey.get(dayKey(cell));
                    const number = String(cell.getDate()).padStart(2, "0");
                    return (
                      <td key={dayKey(cell)}>
                        {available ? (
                          <button
                            type="button"
                            aria-pressed={available.key === key}
                            aria-label={longDate.format(cell)}
                            onClick={() => {
                              goToDay(available);
                              setCalendarOpen(false);
                            }}
                          >
                            {number}
                          </button>
                        ) : number}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
      </Calendar>
      <TrackBox>
        <Tooltip style={{ left: position(hour) }}>{time}</Tooltip>
        <Slider data-playing={playing}>
          <div className="track" aria-hidden="true">
            <div className="fill" style={{ width: position(hour) }} />
          </div>
          <input
            type="range"
            min={0}
            max={23}
            step={1}
            value={hour}
            aria-label={t("climateMap.styxia.timeline")}
            aria-valuetext={`${longDate.format(date)}, ${time}`}
            onChange={(e) => {
              const wanted = Number(e.target.value);
              const next = closestFrame(day, dates, wanted);
              // Клавіатура в дні з кадрами раз на 3 години: найближчий кадр — той самий, тож ідемо до сусіднього
              if (next === frame && wanted !== hour) {
                const neighbour = frame + (wanted > hour ? 1 : -1);
                if (day.frames.includes(neighbour)) onFrame(neighbour);
                return;
              }
              onFrame(next);
            }}
          />
          <div className="knob" aria-hidden="true" style={{ left: position(hour) }} />
        </Slider>
        <Hours aria-hidden="true">
          {HOURS_OF_DAY.map((value) => (
            <i key={value} style={{ left: position(value) }} />
          ))}
          {LABELLED_HOURS.map((value) => (
            <span key={value} style={{ left: position(value) }}>
              {String(value).padStart(2, "0")}:00
            </span>
          ))}
        </Hours>
        {loaded < total && (
          <Loading>{t("climateMap.styxia.framesLoading", { done: loaded, total })}</Loading>
        )}
      </TrackBox>
      <RoundButton type="button" disabled={!nextDay} aria-label={nextLabel} title={nextLabel} onClick={() => goToDay(nextDay)}>
        <FiSkipForward aria-hidden="true" />
      </RoundButton>
    </Bar>
  );
};

export default StyxiaTimeline;
