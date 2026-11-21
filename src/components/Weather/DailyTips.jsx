import React, { memo, useEffect, useMemo, useState } from "react";
import { FaCar, FaSnowflake } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { GiIceCube } from "react-icons/gi";
import i18n from "../../i18n/i18n.js";
import { Tooltip } from "../Tooltip/Tooltip";
import { fetchAirQuality, AQI_LEVELS, AQI_COLORS, aqiAdviceKey } from "../../utils/airQuality";
import { iceRiskMorning, carSnowTip, localNowKey } from "../../utils/dailyTips";

// Плитки «Повітря / ожеледиця вранці / сніг на машині» — в одній сітці з іншими індикаторами
// вкладки «Зараз». Компонент повертає лише плитки (фрагмент), а стилі плиток отримує від
// Weather.jsx через ui, щоб вони виглядали так само, як решта.

const t = (key, opts) => i18n.t(`newsWeather.dailyTips.${key}`, opts);
const GOOD = "#3ddc84";
const WARN = "#ffd93b";
const BAD = "#ff3b30";
const NEUTRAL = "#9fb3c8";

function DailyTips({ hourly, current, lat, lon, utcOffsetSeconds, isDarkMode, ui }) {
  const { IndicatorCard, IconBox, TextContent, SubText } = ui;
  const [nowKey, setNowKey] = useState(() => localNowKey(utcOffsetSeconds));
  const [air, setAir] = useState({ state: "loading", data: null });

  // «Зараз» у місті оновлюємо раз на 5 хвилин — картка рендериться щосекунди
  useEffect(() => {
    setNowKey(localNowKey(utcOffsetSeconds));
    const id = setInterval(() => setNowKey(localNowKey(utcOffsetSeconds)), 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [utcOffsetSeconds]);

  useEffect(() => {
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      setAir({ state: "error", data: null });
      return undefined;
    }
    const controller = new AbortController();
    setAir({ state: "loading", data: null });
    fetchAirQuality(lat, lon, controller.signal)
      .then((data) => setAir(data ? { state: "ok", data } : { state: "error", data: null }))
      .catch((e) => {
        if (e?.name !== "AbortError") setAir({ state: "error", data: null });
      });
    return () => controller.abort();
  }, [lat, lon]);

  const tips = useMemo(() => {
    const ice = iceRiskMorning(hourly, nowKey);
    const car = carSnowTip(hourly, current, nowKey);
    // Зимові плитки — лише коли очікується мороз/сніг, щоб улітку не показувати вічне «ні»
    const winter =
      (current?.snow_depth ?? 0) > 0 ||
      (Array.isArray(hourly) && hourly.slice(0, 36).some((h) => Number.isFinite(h.tempNum) && h.tempNum <= 4));
    return { ice, car, winter };
  }, [hourly, current, nowKey]);

  const items = [];

  // Повітря
  const d = air.data;
  if (air.state === "ok" && d && d.level !== null) {
    const parts = [t(aqiAdviceKey(d.level))];
    if (d.pm25 !== null) parts.push(t("pm25", { v: Math.round(d.pm25 * 10) / 10 }));
    const top = d.pollen[0];
    if (top) {
      parts.push(t("pollenLine", { name: t(`pollen_${top.type}`), level: t(`pollenLevel${top.level}`) }));
      if (top.level >= 2) parts.push(t("pollenAdvice"));
    }
    items.push({
      key: "air",
      icon: <MdAir />,
      title: t("airTitle"),
      value: `${t(`aqi_${AQI_LEVELS[d.level]}`)} · ${Math.round(d.aqi)}`,
      sub: top ? `${t(`pollen_${top.type}`)}: ${t(`pollenLevel${top.level}`)}` : d.pm25 !== null ? `PM2.5 ${Math.round(d.pm25 * 10) / 10}` : null,
      color: AQI_COLORS[d.level],
      advice: parts.join(" "),
    });
  } else {
    items.push({
      key: "air",
      icon: <MdAir />,
      title: t("airTitle"),
      value: air.state === "loading" ? "…" : "—",
      color: NEUTRAL,
      advice: air.state === "loading" ? t("airLoading") : t("airUnavailable"),
    });
  }

  if (tips.winter) {
    const { ice, car } = tips;
    if (ice) {
      items.push({
        key: "ice",
        icon: <GiIceCube />,
        title: t("iceTitle"),
        value: t(`ice_${ice.level}`),
        color: ice.level === "likely" ? BAD : ice.level === "possible" ? WARN : GOOD,
        advice: ice.level === "no" ? t("iceNoAdvice") : t("iceAdvice"),
      });
    }
    if (car) {
      items.push({
        key: "car",
        icon: car.verdict === "yes" ? <FaSnowflake /> : <FaCar />,
        title: t("carTitle"),
        value: t(`car_${car.verdict}`),
        color: car.verdict === "yes" ? BAD : car.verdict === "frost" ? WARN : GOOD,
        advice:
          car.verdict === "yes"
            ? t("carYesAdvice", { cm: car.cm, time: car.until })
            : car.verdict === "frost"
              ? t("carFrostAdvice")
              : t("carNoAdvice"),
      });
    }
  }

  return (
    <>
      {items.map((item) => (
        <Tooltip key={item.key} content={item.advice} isDarkMode={isDarkMode}>
          <IndicatorCard aria-label={`${item.title}: ${item.value}. ${item.advice}`}>
            <IconBox $color={item.color}>{item.icon}</IconBox>
            <TextContent $size="10px">
              {item.title}
              <SubText $weight="bold" $opacity={1} style={{ color: item.color }}>
                {item.value}
              </SubText>
              {item.sub && <SubText $size="9px">{item.sub}</SubText>}
            </TextContent>
          </IndicatorCard>
        </Tooltip>
      ))}
    </>
  );
}

export default memo(DailyTips);
