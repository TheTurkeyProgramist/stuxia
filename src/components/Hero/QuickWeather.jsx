import React, { useCallback, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloudy,
  WiFog,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiShowers,
  WiThunderstorm,
} from "react-icons/wi";
import { GiMonclerJacket, GiTShirt, GiShorts } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import { TbUmbrella, TbUmbrellaOff, TbCloudOff } from "react-icons/tb";

import i18n from "../../i18n/i18n.js";
// Коротка погода одразу під пошуком: «+6° · Хмарно · Дощу не буде · Вдягніть куртку і шарф».
// Дані — з картки погоди, яку App уже завантажив (без окремого запиту до API).

const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]);
const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);
const STORM_CODES = new Set([95, 96, 99]);
const isWetCode = (code) => RAIN_CODES.has(code) || SNOW_CODES.has(code) || STORM_CODES.has(code);

// Скільки годин наперед дивимось, чи будуть опади
const LOOKAHEAD_HOURS = 12;
// З якої ймовірності вважаємо, що опади «можливі»
const WET_PROBABILITY = 40;

// Скільки чекаємо прогноз, перш ніж показати «Не вдалося завантажити погоду»
const LOAD_TIMEOUT_MS = 10000;
const isOffline = () => typeof navigator !== "undefined" && navigator.onLine === false;

// Пункт у списку міст, що відкриває пошук для додавання нового
export const ADD_CITY_OPTION = "__add_city";

const conditionText = (code, isDay = 1) => {
  if (code === 0) return isDay ? i18n.t("newsWeather.QuickWeather.iasno") : i18n.t("newsWeather.QuickWeather.iasnaNich");
  if (code === 1) return i18n.t("newsWeather.QuickWeather.perevazhnoIasno");
  if (code === 2) return i18n.t("newsWeather.QuickWeather.minlyvaKhmarnist");
  if (code === 3) return i18n.t("newsWeather.QuickWeather.khmarno");
  if (code === 45 || code === 48) return i18n.t("newsWeather.QuickWeather.tuman");
  if (code >= 51 && code <= 57) return i18n.t("newsWeather.QuickWeather.mriaka");
  if (code >= 61 && code <= 67) return i18n.t("newsWeather.QuickWeather.doshch");
  if (code >= 71 && code <= 77) return i18n.t("newsWeather.QuickWeather.snih");
  if (code >= 80 && code <= 82) return i18n.t("newsWeather.QuickWeather.zlyva");
  if (code === 85 || code === 86) return i18n.t("newsWeather.QuickWeather.snihopad");
  if (code >= 95) return i18n.t("newsWeather.QuickWeather.hroza");
  return i18n.t("newsWeather.QuickWeather.khmarno");
};

// Іконка погоди і її колір
const conditionIcon = (code, isDay = 1) => {
  if (code === 0) return isDay ? { Icon: WiDaySunny, color: "#fbbf24" } : { Icon: WiNightClear, color: "#fde68a" };
  if (code === 1 || code === 2)
    return isDay ? { Icon: WiDayCloudy, color: "#fcd34d" } : { Icon: WiNightAltCloudy, color: "#cbd5e1" };
  if (code === 45 || code === 48) return { Icon: WiFog, color: "#94a3b8" };
  if (SNOW_CODES.has(code)) return { Icon: WiSnow, color: "#bae6fd" };
  if (STORM_CODES.has(code)) return { Icon: WiThunderstorm, color: "#a78bfa" };
  if (code >= 51 && code <= 57) return { Icon: WiSprinkle, color: "#7dd3fc" };
  if (code >= 80 && code <= 82) return { Icon: WiShowers, color: "#60a5fa" };
  if (RAIN_CODES.has(code)) return { Icon: WiRain, color: "#60a5fa" };
  return { Icon: WiCloudy, color: "#cbd5e1" };
};

const formatTemp = (value) => {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n)) return "—";
  return `${n > 0 ? "+" : ""}${n}°`;
};

// «YYYY-MM-DDTHH» зараз у часовому поясі міста (fullTime погодинного ряду — місцевий час міста)
const cityHourKey = (utcOffsetSeconds) => {
  if (Number.isFinite(utcOffsetSeconds)) {
    return new Date(Date.now() + utcOffsetSeconds * 1000).toISOString().slice(0, 13);
  }
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}`;
};

// Рядок про опади на найближчі години. kind: "rain" | "snow" | "storm" | null
export const getPrecipitationLine = (card) => {
  const nowKey = cityHourKey(card?.utcOffsetSeconds);
  const upcoming = (card?.hourly || [])
    .filter((h) => typeof h?.fullTime === "string" && h.fullTime.slice(0, 13) >= nowKey)
    .slice(0, LOOKAHEAD_HOURS);
  if (upcoming.length === 0) return null;

  const wetIndex = upcoming.findIndex(
    (h) => (h.precipitation_probability ?? 0) >= WET_PROBABILITY || isWetCode(h.weather_code),
  );
  if (wetIndex === -1) {
    const cold = (card?.current?.tempNum ?? 10) <= 0;
    return { wet: false, kind: null, text: i18n.t(cold ? "newsWeather.QuickWeather.noPrecipHours" : "newsWeather.QuickWeather.noRainHours", { length: upcoming.length }) };
  }

  const hour = upcoming[wetIndex];
  const code = hour.weather_code;
  const kind = STORM_CODES.has(code)
    ? "storm"
    : SNOW_CODES.has(code) || (!RAIN_CODES.has(code) && (hour.tempNum ?? 5) <= 0)
      ? "snow"
      : "rain";
  const words = {
    storm: { now: i18n.t("newsWeather.QuickWeather.zarazHroza"), later: i18n.t("newsWeather.QuickWeather.hrozaMozhlyva") },
    snow: { now: i18n.t("newsWeather.QuickWeather.zarazSnih"), later: i18n.t("newsWeather.QuickWeather.snihMozhlyvyi") },
    rain: { now: i18n.t("newsWeather.QuickWeather.zarazDoshch"), later: i18n.t("newsWeather.QuickWeather.doshchMozhlyvyi") },
  }[kind];
  const chance = hour.precipitation_probability ? ` (${hour.precipitation_probability}%)` : "";
  if (wetIndex === 0 && isWetCode(card?.current?.weather_code)) return { wet: true, kind, text: words.now };
  return { wet: true, kind, text: i18n.t("newsWeather.QuickWeather.o", { later: words.later, time: hour.time, chance: chance }) };
};

// Найближча доба кроком у 3 години: 6 точок (час, іконка, температура)
const HOUR_STRIP_COUNT = 6;
const HOUR_STRIP_STEP = 3;
export const getHourStrip = (card) => {
  const nowKey = cityHourKey(card?.utcOffsetSeconds);
  const upcoming = (card?.hourly || []).filter(
    (h) => typeof h?.fullTime === "string" && h.fullTime.slice(0, 13) > nowKey,
  );
  const out = [];
  // Перша точка — через HOUR_STRIP_STEP год, щоб не дублювати «зараз»
  for (let i = HOUR_STRIP_STEP - 1; i < upcoming.length && out.length < HOUR_STRIP_COUNT; i += HOUR_STRIP_STEP) {
    out.push(upcoming[i]);
  }
  return out;
};

const joinUk = (list) =>
  list.length <= 1 ? list.join("") : i18n.t("newsWeather.QuickWeather.i", { v0: list.slice(0, -1).join(", "), v1: list[list.length - 1] });

/**
 * Що вдягнути — за температурою «відчувається» (враховує вітер і вологість), опадами, вітром і УФ.
 * Повертає { Icon, text } або null.
 */
export const getOutfitAdvice = (card, precipitation) => {
  const current = card?.current;
  if (!current) return null;
  const feelsRaw = parseFloat(current.feels_like);
  const feels = Number.isFinite(feelsRaw) ? feelsRaw : Number(current.tempNum);
  if (!Number.isFinite(feels)) return null;

  const wind = Number(current.windNum) || 0;
  const uv = Number(current.uv_index) || 0;
  const isDay = current.is_day ?? 1;

  let Icon = GiMonclerJacket;
  let wear;
  if (feels <= -10) {
    wear = [i18n.t("newsWeather.QuickWeather.pukhovyk"), i18n.t("newsWeather.QuickWeather.shapku"), i18n.t("newsWeather.QuickWeather.sharf"), i18n.t("newsWeather.QuickWeather.rukavytsi")];
  } else if (feels <= 0) {
    wear = [i18n.t("newsWeather.QuickWeather.tepluKurtku"), i18n.t("newsWeather.QuickWeather.shapku"), i18n.t("newsWeather.QuickWeather.sharf"), i18n.t("newsWeather.QuickWeather.rukavytsi")];
  } else if (feels <= 7) {
    wear = feels <= 4 ? [i18n.t("newsWeather.QuickWeather.kurtku"), i18n.t("newsWeather.QuickWeather.shapku"), i18n.t("newsWeather.QuickWeather.sharf")] : [i18n.t("newsWeather.QuickWeather.kurtku"), i18n.t("newsWeather.QuickWeather.sharf")];
  } else if (feels <= 14) {
    wear = [wind >= 8 ? i18n.t("newsWeather.QuickWeather.vitrovku") : i18n.t("newsWeather.QuickWeather.lehkuKurtku"), i18n.t("newsWeather.QuickWeather.svetrChyKhudi")];
  } else if (feels <= 20) {
    Icon = GiTShirt;
    wear = [wind >= 8 ? i18n.t("newsWeather.QuickWeather.vitrovku") : i18n.t("newsWeather.QuickWeather.koftu"), i18n.t("newsWeather.QuickWeather.lonhsliv")];
  } else {
    Icon = feels >= 25 ? GiShorts : GiTShirt;
    wear = feels >= 25 ? [i18n.t("newsWeather.QuickWeather.futbolku"), i18n.t("newsWeather.QuickWeather.shorty")] : [i18n.t("newsWeather.QuickWeather.futbolku")];
  }

  const take = [];
  if (precipitation?.wet) {
    take.push(precipitation.kind === "snow" ? i18n.t("newsWeather.QuickWeather.nepromokneVzuttia") : i18n.t("newsWeather.QuickWeather.parasoliu"));
  }
  if (isDay && uv >= 6 && feels > 15) take.push(i18n.t("newsWeather.QuickWeather.sontsezakhysniOkuliary"));

  let text = i18n.t("newsWeather.QuickWeather.vdiahnit", { v0: joinUk(wear) });
  if (take.length) text += i18n.t("newsWeather.QuickWeather.vizmit", { v0: joinUk(take) });
  return { Icon, text };
};

const QuickWeather = ({ card, cities = [], isDarkMode, onOpen, onSelectCity, onRetry }) => {
  const hasData = Boolean(card?.current);
  // Прогноз не прийшов за LOAD_TIMEOUT_MS (або немає інтернету) — показуємо помилку замість вічного «Завантажуємо…»
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [offline, setOffline] = useState(isOffline);

  useEffect(() => {
    if (hasData) {
      setFailed(false);
      return undefined;
    }
    if (isOffline()) {
      setFailed(true);
      return undefined;
    }
    const timer = setTimeout(() => setFailed(true), LOAD_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [hasData, attempt]);

  const handleRetry = useCallback(() => {
    setOffline(isOffline());
    setFailed(false);
    setAttempt((n) => n + 1);
    onRetry?.();
  }, [onRetry]);

  // Інтернет зник / з'явився: одразу показуємо помилку або самі пробуємо ще раз
  useEffect(() => {
    const goOffline = () => setOffline(true);
    const goOnline = () => {
      setOffline(false);
      if (!hasData) handleRetry();
    };
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, [hasData, handleRetry]);

  if (!hasData && (failed || offline)) {
    return (
      <Box $isDarkMode={isDarkMode} role="alert">
        <Body as="div">
          <WeatherIcon aria-hidden="true" style={{ color: "#94a3b8", fontSize: 26, margin: 0 }}>
            <TbCloudOff />
          </WeatherIcon>
          <Main>
            <Line>
              <strong>{i18n.t("newsWeather.QuickWeather.neVdalosiaZavantazhytyPohodu")}</strong>
            </Line>
            <Line>
              <Muted $isDarkMode={isDarkMode}>
                {offline ? i18n.t("newsWeather.QuickWeather.nemaieZiednanniaZInternetom") : i18n.t("newsWeather.QuickWeather.servisProhnozuNeVidpovidaie")}
              </Muted>
            </Line>
          </Main>
          <RetryButton type="button" $isDarkMode={isDarkMode} onClick={handleRetry}>
            {i18n.t("newsWeather.QuickWeather.sprobuvatyShche")}
          </RetryButton>
        </Body>
      </Box>
    );
  }

  if (!hasData) {
    return (
      <Box $isDarkMode={isDarkMode} $loading aria-busy="true" aria-label={i18n.t("newsWeather.QuickWeather.zavantazhuiemoPohodu")}>
        <Body as="div">
          <WeatherIcon aria-hidden="true" style={{ color: "#cbd5e1" }}>
            <WiDayCloudy />
          </WeatherIcon>
          <Main>
            <Line>
              <Muted $isDarkMode={isDarkMode}>{i18n.t("newsWeather.QuickWeather.zavantazhuiemoPohodu2")}</Muted>
            </Line>
          </Main>
        </Body>
      </Box>
    );
  }

  const { current } = card;
  const code = Number(current.weather_code ?? 3);
  const isDay = current.is_day ?? 1;
  const tempValue = current.tempNum ?? parseFloat(current.temp);
  const temp = formatTemp(tempValue);
  const feelsValue = parseFloat(current.feels_like);
  const feels = Number.isFinite(feelsValue) && Math.round(feelsValue) !== Math.round(tempValue)
    ? formatTemp(feelsValue)
    : null;
  const condition = conditionText(code, isDay);
  const { Icon: ConditionIcon, color: conditionColor } = conditionIcon(code, isDay);
  const precipitation = getPrecipitationLine(card);
  const outfit = getOutfitAdvice(card, precipitation);
  const hours = getHourStrip(card);
  const place = card.locationName || i18n.t("newsWeather.QuickWeather.vashaLokatsiia");
  const selectedId = String(card.id);

  const handleCityChange = (e) => {
    const value = e.target.value;
    if (value === ADD_CITY_OPTION) {
      // Не лишаємо «Додати…» вибраним у списку
      e.target.value = selectedId;
    }
    onSelectCity?.(value);
  };

  return (
    <Box $isDarkMode={isDarkMode}>
      <Head>
        <CityPicker $isDarkMode={isDarkMode}>
          <MdPlace aria-hidden="true" className="pin" />
          <select value={selectedId} onChange={handleCityChange} aria-label={i18n.t("newsWeather.QuickWeather.mistoDliaKorotkoiPohody")}>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.label}
              </option>
            ))}
            {!cities.some((city) => city.id === selectedId) && <option value={selectedId}>{place}</option>}
            <option value={ADD_CITY_OPTION}>{i18n.t("newsWeather.QuickWeather.dodatyInsheMisto")}</option>
          </select>
        </CityPicker>
        <MoreButton type="button" $isDarkMode={isDarkMode} onClick={onOpen}>
          {i18n.t("newsWeather.QuickWeather.prohnoz")}
        </MoreButton>
      </Head>

      <Body
        type="button"
        onClick={onOpen}
        aria-label={i18n.t("newsWeather.QuickWeather.pokazatyPovnyiProhnoz", { place: place, temp: temp, condition: condition, v3: precipitation ? `, ${precipitation.text}` : "", v4: outfit ? `. ${outfit.text}` : "" })}
      >
        <WeatherIcon aria-hidden="true" style={{ color: conditionColor }}>
          <ConditionIcon />
        </WeatherIcon>
        <Temp>{temp}</Temp>
        <Main>
          <Line>
            <strong>{condition}</strong>
            {feels && <Muted $isDarkMode={isDarkMode}> {i18n.t("newsWeather.QuickWeather.vidchuvaietsia")} {feels}</Muted>}
          </Line>
          {precipitation && (
            <Line>
              <Precip $wet={precipitation.wet} $isDarkMode={isDarkMode}>
                {precipitation.wet ? <TbUmbrella aria-hidden="true" /> : <TbUmbrellaOff aria-hidden="true" />}
                <span>{precipitation.text}</span>
              </Precip>
            </Line>
          )}
          {outfit && (
            <Line $wrap>
              <Outfit $isDarkMode={isDarkMode}>
                <outfit.Icon aria-hidden="true" />
                <span>{outfit.text}</span>
              </Outfit>
            </Line>
          )}
        </Main>
        {/* Права частина широкої картки: найближча доба кроком 3 год (на телефоні прихована) */}
        {hours.length > 0 && (
          <HourStrip aria-hidden="true" $isDarkMode={isDarkMode}>
            {hours.map((h) => {
              const { Icon: HourIcon, color } = conditionIcon(h.weather_code, h.is_day);
              const wet = (h.precipitation_probability ?? 0) >= WET_PROBABILITY;
              return (
                <HourItem key={h.fullTime} $isDarkMode={isDarkMode}>
                  <span className="time">{h.time}</span>
                  <HourIcon style={{ color }} />
                  <span className="temp">{formatTemp(h.tempNum)}</span>
                  {wet && <span className="rain">{h.precipitation_probability}%</span>}
                </HourItem>
              );
            })}
          </HourStrip>
        )}
      </Body>
    </Box>
  );
};

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`;

const Box = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 3px 8px 5px;
  border-radius: 9px;
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.12)")};
  background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,120,212,0.06)")};
  color: ${(p) => (p.$isDarkMode ? "#f4f7fb" : "#1b1f26")};
  font-family: var(--font-family);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #00afce;
  }

  ${(p) =>
    p.$loading &&
    css`
      min-height: 48px;
      display: flex;
      align-items: center;
      animation: ${pulse} 1.6s ease-in-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
`;

const CityPicker = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 1px;
  min-width: 0;
  font-size: 11px;

  .pin {
    flex: 0 0 auto;
    font-size: 14px;
    color: #f43f5e;
  }

  select {
    min-width: 0;
    max-width: 100%;
    padding: 1px 2px;
    border: 1px solid transparent;
    border-radius: 6px;
    background: transparent;
    color: ${(p) => (p.$isDarkMode ? "rgba(244,247,251,0.85)" : "#3c4350")};
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    text-overflow: ellipsis;
    cursor: pointer;
    /* темний випадний список у темній темі */
    color-scheme: ${(p) => (p.$isDarkMode ? "dark" : "light")};

    /* пункти списку — явні кольори: інакше Windows малює світлий текст на білому */
    option {
      background: ${(p) => (p.$isDarkMode ? "#1b1f26" : "#ffffff")};
      color: ${(p) => (p.$isDarkMode ? "#f4f7fb" : "#1b1f26")};
      font-weight: 500;
    }

    &:hover {
      border-color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)")};
    }

    &:focus-visible {
      outline: 2px solid #00afce;
      outline-offset: 1px;
    }
  }
`;

const MoreButton = styled.button`
  flex: 0 0 auto;
  padding: 1px 6px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${(p) => (p.$isDarkMode ? "#7dd3fc" : "#0369a1")};
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)")};
  }

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 1px;
  }
`;

const RetryButton = styled.button`
  flex: 0 0 auto;
  padding: 5px 10px;
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(125,211,252,0.5)" : "rgba(3,105,161,0.4)")};
  border-radius: 8px;
  background: ${(p) => (p.$isDarkMode ? "rgba(125,211,252,0.12)" : "rgba(3,105,161,0.08)")};
  color: ${(p) => (p.$isDarkMode ? "#7dd3fc" : "#0369a1")};
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: ${(p) => (p.$isDarkMode ? "rgba(125,211,252,0.22)" : "rgba(3,105,161,0.15)")};
  }

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 1px;
  }
`;

const Body = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-top: 1px;
  padding: 1px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-family: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #00afce;
    outline-offset: 2px;
  }
`;

const WeatherIcon = styled.span`
  display: inline-flex;
  font-size: 30px;
  line-height: 1;
  flex: 0 0 auto;
  /* іконки Weather Icons мають порожні поля — трохи підтягуємо */
  margin: -4px -2px;
`;

const Temp = styled.span`
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  flex: 0 0 auto;
  font-variant-numeric: tabular-nums;
`;

const Main = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`;

const Line = styled.span`
  font-size: 12px;
  line-height: 1.3;

  svg {
    flex: 0 0 auto;
    font-size: 14px;
  }
  ${(p) =>
    p.$wrap
      ? css`
          white-space: normal;
        `
      : css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `}
`;

const Muted = styled.span`
  color: ${(p) => (p.$isDarkMode ? "rgba(244,247,251,0.7)" : "#5b6270")};
`;

const Precip = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  font-weight: 600;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  color: ${(p) =>
    p.$wet ? (p.$isDarkMode ? "#7dd3fc" : "#0369a1") : p.$isDarkMode ? "#86efac" : "#15803d"};
`;

const Outfit = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  font-weight: 600;

  svg {
    margin-top: 1px;
  }
  color: ${(p) => (p.$isDarkMode ? "#fde68a" : "#92400e")};
`;

const HourStrip = styled.span`
  display: none;
  flex: 0 0 auto;
  align-self: stretch;
  align-items: center;
  gap: 2px;
  padding-left: 10px;
  border-left: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)")};

  /* з 640px місця вистачає на 4 точки, з 900px — на всі 6 */
  @media (min-width: 640px) {
    display: flex;
    & > :nth-child(n + 5) {
      display: none;
    }
  }
  @media (min-width: 900px) {
    & > :nth-child(n + 5) {
      display: flex;
    }
  }
`;

const HourItem = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46px;
  font-variant-numeric: tabular-nums;

  .time {
    font-size: 10px;
    color: ${(p) => (p.$isDarkMode ? "rgba(244,247,251,0.6)" : "#5b6270")};
  }

  svg {
    font-size: 24px;
    margin: -3px 0;
  }

  .temp {
    font-size: 12px;
    font-weight: 700;
  }

  /* ймовірність опадів — дрібно в куті, щоб не збільшувати висоту картки */
  .rain {
    position: absolute;
    top: 12px;
    right: 0;
    font-size: 9px;
    font-weight: 700;
    color: ${(p) => (p.$isDarkMode ? "#7dd3fc" : "#0369a1")};
  }
`;

export default QuickWeather;
