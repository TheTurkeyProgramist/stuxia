import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSunrise, FiSunset } from "react-icons/fi";
import * as SunCalc from "suncalc";
import styled from "styled-components";
import localforage from "localforage";

const TimezoneMenu = styled.div`
  position: fixed;
  inset: 5% 0 0;
  width: 100vw;
  height: 97vh;
  background: rgba(2, 2, 2, 0.97);
  border-top: 2px solid #ffb36c;
  padding: 0;
  overflow-y: auto;
  z-index: 99999;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const TimezoneMenuHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(2, 2, 2, 0.98);
  border-bottom: 2px solid rgba(255, 179, 108, 0.4);
  backdrop-filter: blur(6px);
`;

const TimezoneMenuTitle = styled.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`;

const TimezoneMenuCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb7a00;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background 0.2s;
`;

const TimezoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
  min-height: 220px;
  padding: 9px;
  color: ${(props) => (props.$selected ? "#ffb36c" : "#fff")};
  background: ${(props) =>
    props.$selected ? "rgba(255, 179, 108, 0.12)" : "rgba(255, 255, 255, 0.035)"};
  border: 1px solid
    ${(props) => (props.$selected ? "#ffb36c" : "rgba(255, 255, 255, 0.12)")};
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
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

`;

const TimezoneName = styled.span`
  min-width: 0;
  font-size: 15px;
  line-height: 1.35;
  font-weight: 600;
`;

const TimezoneDetails = styled.span`
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const UtcOffset = styled.span`
  padding: 2px 7px;
  color: #ffcf9d;
  background: rgba(255, 179, 108, 0.12);
  border: 1px solid rgba(255, 179, 108, 0.25);
  border-radius: 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  white-space: nowrap;
`;

const TimeInfo = styled.span`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  color: ${(props) => props.$color};
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.$color};
  font-size: 20px;
`;

const CitiesTooltip = styled.span`
  position: absolute;
  left: 50%;
  top: calc(100% + 8px);
  z-index: 30;
  display: none;
  width: max-content;
  max-width: min(300px, calc(100vw - 40px));
  padding: 10px 12px;
  color: #fff;
  background: rgba(18, 18, 18, 0.98);
  border: 1px solid rgba(255, 179, 108, 0.75);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  transform: translateX(-50%);
  white-space: normal;
  pointer-events: none;
  font-size: 12px;
  line-height: 1.6;

  ${TimezoneOption}:hover &,
  ${TimezoneOption}:focus-visible & {
    display: block;
  }

  @media (min-width: 769px) {
    ${TimezoneOption}:nth-child(n + 4) & {
      top: auto;
      bottom: calc(100% + 8px);
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    ${TimezoneOption}:nth-child(n + 3) & {
      top: auto;
      bottom: calc(100% + 8px);
    }
  }

  @media (max-width: 480px) {
    ${TimezoneOption}:nth-child(n + 2) & {
      top: auto;
      bottom: calc(100% + 8px);
    }
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

const TIMEZONES = [
  {
    label: "Всесвітній час",
    value: "UTC",
    lat: 51.4779,
    lon: 0,
    cities: ["Рейк'явік"],
  },
  {
    label: "Лондон",
    value: "Europe/London",
    lat: 51.5072,
    lon: -0.1276,
    cities: ["Дублін"],
  },
  {
    label: "Рим",
    value: "Europe/Rome",
    lat: 41.9028,
    lon: 12.4964,
    cities: ["Берлін", "Париж", "Варшава"],
    legacyValues: ["Europe/Berlin"],
  },
  {
    label: "Київ",
    value: "Europe/Kyiv",
    lat: 50.4501,
    lon: 30.5234,
    cities: ["Гельсінкі", "Софія", "Таллінн"],
  },
  {
    label: "Стамбул",
    value: "Europe/Istanbul",
    lat: 41.0082,
    lon: 28.9784,
    cities: ["Ер-Ріяд", "Найробі"],
  },
  {
    label: "Дубай",
    value: "Asia/Dubai",
    lat: 25.2048,
    lon: 55.2708,
    cities: ["Баку", "Тбілісі"],
  },
  {
    label: "Мальдіви",
    value: "Indian/Maldives",
    lat: 4.1755,
    lon: 73.5093,
    cities: ["Ісламабад", "Ташкент"],
    legacyValues: ["Asia/Karachi"],
  },
  {
    label: "Алмати",
    value: "Asia/Almaty",
    lat: 43.2389,
    lon: 76.8897,
    cities: [],
  },
  {
    label: "Бангкок",
    value: "Asia/Bangkok",
    lat: 13.7563,
    lon: 100.5018,
    cities: ["Джакарта", "Ханой"],
  },
  {
    label: "Пекін",
    value: "Asia/Shanghai",
    lat: 39.9042,
    lon: 116.4074,
    cities: ["Сінгапур"],
  },
  {
    label: "Сеул",
    value: "Asia/Seoul",
    lat: 37.5665,
    lon: 126.978,
    cities: ["Токіо"],
    legacyValues: ["Asia/Tokyo"],
  },
  {
    label: "Сідней",
    value: "Australia/Sydney",
    lat: -33.8688,
    lon: 151.2093,
    cities: ["Мельбурн"],
  },
  {
    label: "Соломонові острови",
    value: "Pacific/Guadalcanal",
    lat: -9.4456,
    lon: 159.9729,
    cities: ["Нумеа"],
    legacyValues: ["Pacific/Noumea"],
  },
  {
    label: "Фіджі",
    value: "Pacific/Fiji",
    lat: -18.1248,
    lon: 178.4501,
    cities: ["Сува"],
  },
  {
    label: "Азорські острови",
    value: "Atlantic/Azores",
    lat: 37.7412,
    lon: -25.6756,
    cities: ["Понта-Делгада"],
  },
  {
    label: "Південна Джорджія",
    value: "Atlantic/South_Georgia",
    lat: -54.2833,
    lon: -36.5,
    cities: ["Грютвікен"],
  },
  {
    label: "Бразилія",
    value: "America/Sao_Paulo",
    lat: -15.7975,
    lon: -47.8919,
    cities: ["Бразиліа", "Ріо-де-Жанейро", "Сан-Паулу"],
    legacyValues: ["America/Argentina/Buenos_Aires"],
  },
  {
    label: "Каракас",
    value: "America/Caracas",
    lat: 10.4806,
    lon: -66.9036,
    cities: [],
  },
  {
    label: "Нью-Йорк",
    value: "America/New_York",
    lat: 40.7128,
    lon: -74.006,
    cities: ["Торонто"],
  },
  {
    label: "Мехіко",
    value: "America/Mexico_City",
    lat: 19.4326,
    lon: -99.1332,
    cities: [],
  },
  {
    label: "Денвер",
    value: "America/Denver",
    lat: 39.7392,
    lon: -104.9903,
    cities: ["Едмонтон", "Калгарі"],
  },
  {
    label: "Сан-Франциско",
    value: "America/Los_Angeles",
    lat: 37.7749,
    lon: -122.4194,
    cities: ["Ванкувер", "Лос-Анджелес"],
  },
  {
    label: "Аляска",
    value: "America/Anchorage",
    lat: 61.2181,
    lon: -149.9003,
    cities: ["Анкоридж"],
  },
  {
    label: "Гаваї",
    value: "Pacific/Honolulu",
    lat: 21.3099,
    lon: -157.8581,
    cities: ["Гонолулу"],
  },
  {
    label: "Паго-Паго",
    value: "Pacific/Pago_Pago",
    lat: -14.2756,
    lon: -170.702,
    cities: ["Алофі"],
  },
  {
    label: "Нью-Делі",
    value: "Asia/Kolkata",
    lat: 28.6139,
    lon: 77.209,
    cities: [],
  },
  {
    label: "Східна Австралія",
    value: "Australia/Brisbane",
    lat: -27.4698,
    lon: 153.0251,
    cities: ["Голд-Кост"],
  },
];

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
      phase,
      utcOffset,
      clockTime: { hour: localHour, minute: localMinute },
    };
  } catch {
    return null;
  }
};

const PHASES = {
  dawn: { label: "Світанок", color: "#62d6e8", Icon: FiSunrise },
  day: { label: "День", color: "#ffd54f", Icon: FaSun },
  dusk: { label: "Сутінки", color: "#f080b5", Icon: FiSunset },
  night: { label: "Ніч", color: "#90caf9", Icon: BsMoonStarsFill },
};

const TimezoneModal = ({ isOpen, onClose, selectedTimezone, setSelectedTimezone }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (!isOpen) return undefined;

    const intervalId = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(intervalId);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <TimezoneMenu>
      <TimezoneMenuHeader>
        <TimezoneMenuCloseBtn
          type="button"
          onClick={onClose}
          aria-label="Закрити список часових поясів"
        >
          ×
        </TimezoneMenuCloseBtn>
        <TimezoneMenuTitle>Часовий пояс</TimezoneMenuTitle>
      </TimezoneMenuHeader>
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
              aria-label={`${timezone.label}${info ? `, ${info.timeStr}` : ""}${
                info ? `, ${info.utcOffset}` : ""
              }${cities.length ? `. Інші міста: ${cities.join(", ")}` : ""}`}
              onClick={() => {
                setSelectedTimezone(timezone.value);
                localforage.setItem("selected_timezone", timezone.value);
                onClose();
              }}
            >
              <TimezoneDetails>
                <TimezoneName>{timezone.label}</TimezoneName>
                {info && <UtcOffset>{info.utcOffset}</UtcOffset>}
              </TimezoneDetails>
              {info && phase && PhaseIcon && (
                <TimeInfo $color={phase.color}>
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
                </TimeInfo>
              )}
              {info && phase && PhaseIcon && (
                <PhaseIndicator
                  $color={phase.color}
                  title={phase.label}
                  aria-label={phase.label}
                >
                  <PhaseIcon aria-hidden="true" />
                </PhaseIndicator>
              )}
              <CitiesTooltip aria-hidden="true">
                Часовий пояс: {timezone.value}
                {cities.length > 0 && (
                  <>
                    <br />
                    Інші міста:
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
    </TimezoneMenu>,
    document.body,
  );
};

export { TIMEZONES };
export default TimezoneModal;
