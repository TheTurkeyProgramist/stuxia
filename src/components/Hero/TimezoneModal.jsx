import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import * as SunCalc from "suncalc";
import styled from "styled-components";
import localforage from "localforage";
import CityScene from "./CityScene.jsx";
import DecorToggle from "../Modals/DecorToggle.jsx";
import { SheetBackdrop, SheetHeader, sheetPanelAnim, useSheetClose } from "../Modals/sheetModal.jsx";
import { useSceneDecor } from "../../utils/sceneDecor.js";
import { getNow, syncClock } from "../../utils/serverClock.js";
import { TIMEZONES } from "./timezones.js";

import i18n from "../../i18n/i18n.js";
import { dateLocale } from "../../utils/weatherText.js";
const TimezoneMenu = styled.div`
  position: fixed;
  /* Від 5% згори до самого низу екрана — смуга прокрутки вміщується повністю */
  inset: 0;
  --sheet-accent: ${(p) => (p.$light ? "#c46a00" : "#ffb36c")};
  background: ${(p) => (p.$light ? "rgba(248, 250, 252, 0.99)" : "rgba(8, 8, 9, 0.98)")};
  border-radius: 0;
  padding: 0;
  overflow-y: auto;
  z-index: 99999;
  box-shadow: 0 0 60px rgba(0, 0, 0, ${(p) => (p.$light ? 0.35 : 0.9)});
  display: flex;
  flex-direction: column;
  ${sheetPanelAnim}

  /* Видимий скролбар. scrollbar-color з html (App.css) успадковується, і тоді Chrome
     ігнорує ::-webkit-scrollbar — тож задаємо стандартні властивості явно */
  scrollbar-width: auto;
  scrollbar-color: ${(p) => (p.$light ? "#c46a00 rgba(0, 0, 0, 0.08)" : "#ffb36c rgba(255, 255, 255, 0.08)")};

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${(p) => (p.$light ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)")};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(p) => (p.$light ? "#c46a00" : "#ffb36c")};
    border-radius: 10px;
  }
`;

const TimezoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 16px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
    padding: 10px;
  }
`;

const TimezoneOption = styled.button`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  min-width: 0;
  min-height: ${(props) => (props.$decor ? "220px" : "110px")};
  padding: 9px;
  color: ${(props) =>
    props.$selected ? (props.$plain ? "#8a4300" : "#ffb36c") : props.$plain ? "#1a1a1a" : "#fff"};
  background: ${(props) =>
    props.$selected
      ? `rgba(255, 179, 108, ${props.$plain ? 0.18 : 0.12})`
      : props.$plain
        ? "#ffffff"
        : "rgba(255, 255, 255, 0.035)"};
  border: 1px solid
    ${(props) =>
      props.$selected ? "#ffb36c" : props.$plain ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"};
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  text-shadow: ${(props) => (props.$plain ? "none" : "0 1px 3px rgba(0, 0, 0, 0.85)")};
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 179, 108, 0.14);
    border-color: #ffb36c;
    outline: none;
    transform: translateY(-1px);
  }

  /* У дві колонки непарна остання картка тягнеться на всю ширину */
  @media (max-width: 1199px) {
    &:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }

`;

const TimezoneName = styled.span`
  min-width: 0;
  font-size: 15px;
  line-height: 1.35;
  font-weight: 600;
`;

const TimezoneDetails = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const UtcOffset = styled.span`
  padding: 2px 7px;
  color: ${(p) => (p.$plain ? "#8a4300" : "#ffcf9d")};
  background: ${(p) => (p.$plain ? "rgba(255, 179, 108, 0.15)" : "rgba(0, 0, 0, 0.45)")};
  border: 1px solid rgba(255, 179, 108, 0.25);
  border-radius: 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  white-space: nowrap;
`;

const TimeInfo = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  color: ${(props) => props.$color};
`;

const LocalDate = styled.span`
  margin-top: 2px;
  color: ${(p) => (p.$plain ? "#374151" : "#fff")};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;

const LocalTime = styled.span`
  font-size: 18px;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
`;

const ClockReadout = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const AnalogClock = styled.svg`
  flex: 0 0 auto;
  width: 25px;
  height: 25px;

  line {
    stroke-linecap: round;
  }
`;

const PhaseIndicator = styled.span`
  position: absolute;
  right: 14px;
  bottom: 14px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.$color};
  font-size: 20px;
`;

const CitiesTooltip = styled.span`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  z-index: 30;
  display: block;
  padding: 10px 12px;
  color: #fff;
  background: rgba(18, 18, 18, 0.88);
  border: 1px solid rgba(255, 179, 108, 0.75);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  white-space: normal;
  pointer-events: none;
  font-size: 12px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  ${TimezoneOption}:hover &,
  ${TimezoneOption}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: opacity 0.25s ease;
  }
`;

const CityHighlight = styled.span`
  display: inline-block;
  margin: 2px 4px 2px 0;
  padding: 1px 6px;
  color: #ffcf9d;
  background: rgba(255, 179, 108, 0.12);
  border-radius: 10px;
`;

const formatUtcOffset = (timezone, date) => {
  const zoneName = new Intl.DateTimeFormat("en", {
    timeZone: timezone,
    timeZoneName: "longOffset",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value;

  if (!zoneName || zoneName === "GMT") return "UTC+00:00";

  const match = zoneName.match(/^GMT([+-])(\d{1,2})(?::(\d{2}))?$/);
  if (!match) return zoneName.replace(/^GMT/, "UTC");

  const [, sign, hours, minutes = "00"] = match;
  return `UTC${sign}${hours.padStart(2, "0")}:${minutes}`;
};


const getTimezoneInfo = (timezone, now) => {
  try {
    const timeParts = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: timezone.value,
    }).formatToParts(now);
    const localHour = Number(timeParts.find((part) => part.type === "hour")?.value);
    const localMinute = Number(timeParts.find((part) => part.type === "minute")?.value);
    const timeStr = `${String(localHour).padStart(2, "0")}:${String(localMinute).padStart(2, "0")}`;
    // Дата в поясі картки: десь ще 31 жовтня, а десь уже 2 листопада
    const dateStr = new Intl.DateTimeFormat(dateLocale(), {
      weekday: "short",
      day: "numeric",
      month: "long",
      timeZone: timezone.value,
    }).format(now);
    const utcOffset = formatUtcOffset(timezone.value, now);
    const sunTimes = SunCalc.getTimes(now, timezone.lat, timezone.lon);
    const sunrise = sunTimes.sunrise.getTime();
    const sunset = sunTimes.sunset.getTime();
    const currentTime = now.getTime();
    const oneHour = 60 * 60 * 1000;
    let phase;

    if (!Number.isFinite(sunrise) || !Number.isFinite(sunset)) {
      phase = "night";
    } else if (Math.abs(currentTime - sunrise) <= oneHour) {
      phase = "dawn";
    } else if (Math.abs(currentTime - sunset) <= oneHour) {
      phase = "dusk";
    } else if (currentTime > sunrise + oneHour && currentTime < sunset - oneHour) {
      phase = "day";
    } else {
      phase = "night";
    }

    return {
      timeStr,
      dateStr,
      phase,
      utcOffset,
      clockTime: { hour: localHour, minute: localMinute },
    };
  } catch {
    return null;
  }
};

const PHASES = {
  dawn: { get label() { return i18n.t("ui.TimezoneModal.svitanok"); }, color: "#62d6e8", Icon: FiSunrise },
  day: { get label() { return i18n.t("ui.TimezoneModal.den"); }, color: "#ffd54f", Icon: FaSun },
  dusk: { get label() { return i18n.t("ui.TimezoneModal.sutinky"); }, color: "#f080b5", Icon: FiSunset },
  night: { get label() { return i18n.t("ui.TimezoneModal.nich"); }, color: "#90caf9", Icon: BsMoonStarsFill },
};

// На білих картках (світла тема без декору) пастельні кольори фаз не читаються
const PLAIN_PHASE_COLORS = { dawn: "#0e7490", day: "#b45309", dusk: "#be185d", night: "#1d4ed8" };

const TimezoneModal = ({ isOpen, onClose, selectedTimezone, setSelectedTimezone, isDarkMode = true }) => {
  const [now, setNow] = useState(getNow);
  const decorEnabled = useSceneDecor();
  const isLight = !isDarkMode;
  const plain = isLight && !decorEnabled;
  const { closing, requestClose, onPanelAnimationEnd } = useSheetClose(isOpen, onClose);

  // Поки список відкритий — без скролбару сайту (лишається лише скролбар списку)
  useEffect(() => {
    if (!isOpen) return undefined;
    const { documentElement: html, body } = document;
    const prev = [html.style.overflow, body.style.overflow];
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev[0];
      body.style.overflow = prev[1];
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    setNow(getNow());
    syncClock().then(() => setNow(getNow()));
    const intervalId = window.setInterval(() => setNow(getNow()), 60_000);
    return () => window.clearInterval(intervalId);
  }, [isOpen]);

  // Hero перемальовується щосекунди (годинник), а картки достатньо оновлювати
  // раз на хвилину — інакше ререндери 27 сцен смикають анімації.
  const onCloseRef = useRef(requestClose);
  useLayoutEffect(() => {
    onCloseRef.current = requestClose;
  });

  const grid = useMemo(
    () => (
      <TimezoneGrid>
        {TIMEZONES.map((timezone) => {
          const isSelected =
            selectedTimezone === timezone.value ||
            timezone.legacyValues?.includes(selectedTimezone);
          const info = getTimezoneInfo(timezone, now);
          const phase = info ? PHASES[info.phase] : null;
          const PhaseIcon = phase?.Icon;
          const cities = timezone.cities;

          return (
            <TimezoneOption
              key={timezone.value}
              type="button"
              $selected={isSelected}
              $decor={decorEnabled}
              $plain={plain}
              aria-label={`${timezone.label}${info ? `, ${info.timeStr}, ${info.dateStr}` : ""}${
                info ? `, ${info.utcOffset}` : ""
              }${cities.length ? i18n.t("ui.TimezoneModal.inshiMista", { cities: cities.join(", ") }) : ""}`}
              onClick={() => {
                setSelectedTimezone(timezone.value);
                localforage.setItem("selected_timezone", timezone.value);
                onCloseRef.current();
              }}
            >
              {decorEnabled && <CityScene timezone={timezone} now={now} />}
              <TimezoneDetails>
                <TimezoneName>{timezone.label}</TimezoneName>
                {info && <UtcOffset $plain={plain}>{info.utcOffset}</UtcOffset>}
              </TimezoneDetails>
              {info && phase && PhaseIcon && (
                <TimeInfo $color={plain ? PLAIN_PHASE_COLORS[info.phase] : phase.color}>
                  <ClockReadout>
                    <AnalogClock
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10.5"
                        fill="rgba(0, 0, 0, 0.2)"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <line
                        x1="12"
                        y1="12"
                        x2="12"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        transform={`rotate(${(info.clockTime.hour % 12) * 30 + info.clockTime.minute * 0.5} 12 12)`}
                      />
                      <line
                        x1="12"
                        y1="12"
                        x2="12"
                        y2="3.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        transform={`rotate(${info.clockTime.minute * 6} 12 12)`}
                      />
                      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
                    </AnalogClock>
                    <LocalTime>{info.timeStr}</LocalTime>
                  </ClockReadout>
                  <LocalDate $plain={plain}>{info.dateStr}</LocalDate>
                </TimeInfo>
              )}
              {info && phase && PhaseIcon && (
                <PhaseIndicator
                  $color={plain ? PLAIN_PHASE_COLORS[info.phase] : phase.color}
                  title={phase.label}
                  aria-label={phase.label}
                >
                  <PhaseIcon aria-hidden="true" />
                </PhaseIndicator>
              )}
              <CitiesTooltip aria-hidden="true">
                {i18n.t("ui.TimezoneModal.chasovyiPoias")} {timezone.value}
                {cities.length > 0 && (
                  <>
                    <br />
                    {i18n.t("ui.TimezoneModal.inshiMista2")}
                    <br />
                    {cities.map((city) => (
                      <CityHighlight key={city}>{city}</CityHighlight>
                    ))}
                  </>
                )}
              </CitiesTooltip>
            </TimezoneOption>
          );
        })}
      </TimezoneGrid>
    ),
    [now, selectedTimezone, setSelectedTimezone, decorEnabled, plain],
  );

  if (!isOpen) return null;

  const current = TIMEZONES.find(
    (tz) => tz.value === selectedTimezone || tz.legacyValues?.includes(selectedTimezone),
  );
  const subtitle = current ? (
    <>
      <b>{current.label}</b> · {formatUtcOffset(current.value, now)}
    </>
  ) : null;

  return createPortal(
    <>
      <SheetBackdrop $light={isLight} $closing={closing} onClick={requestClose} />
      <TimezoneMenu
        $light={isLight}
        $closing={closing}
        role="dialog"
        aria-modal="true"
        aria-labelledby="timezone-sheet-title"
        onAnimationEnd={onPanelAnimationEnd}
      >
        <SheetHeader
          light={isLight}
          titleId="timezone-sheet-title"
          icon={<MdAccessTime />}
          title={i18n.t("ui.TimezoneModal.chasovyiPoias2")}
          subtitle={subtitle}
          onClose={requestClose}
          closeLabel={i18n.t("ui.TimezoneModal.zakrytySpysokChasovykhPoiasiv")}
          actions={
            <DecorToggle
              label={i18n.t("ui.TimezoneModal.dekor")}
              title={i18n.t("ui.TimezoneModal.maliunkyMistIPohodni")}
              accent="#ffb36c"
              isDarkMode={isDarkMode}
            />
          }
        />
        {grid}
      </TimezoneMenu>
    </>,
    document.body,
  );
};

export { TIMEZONES };
export default TimezoneModal;
