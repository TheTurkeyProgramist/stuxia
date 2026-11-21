import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import i18n from "../../i18n/i18n.js";
import { fetchArchiveMonths } from "../../utils/weatherArchive.js";

const t = (key, opts) => i18n.t(`newsWeather.WeatherArchive.${key}`, opts);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border-radius: 8px;
  background: ${(p) => (p.$dark ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.88)")};
  color: ${(p) => (p.$dark ? "#fff" : "#111")};
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const Scroller = styled.div`
  overflow-x: auto;
  padding-bottom: 6px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(46px, 1fr);
  gap: 3px;
  min-width: max-content;
`;

const SectionLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin: 8px 0 4px;
  opacity: 0.85;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1.25;
  font-variant-numeric: tabular-nums;
  min-height: 22px;
  text-align: center;
`;

const Month = styled(Cell)`
  font-weight: 700;
  small {
    font-size: 10px;
    font-weight: 400;
    opacity: 0.7;
  }
`;

const BarBox = styled.div`
  position: relative;
  height: 64px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  background: ${(p) => (p.$dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Fill = styled.div`
  width: 100%;
  background: ${(p) => p.$color};
  height: ${(p) => p.$h}%;
  transition: height 0.4s ease;
`;

const BarValue = styled.div`
  font-size: 11px;
  margin-top: 2px;
  font-variant-numeric: tabular-nums;
`;

const Legend = styled.div`
  display: flex;
  gap: 10px;
  font-size: 11px;
  opacity: 0.85;
  flex-wrap: wrap;
  i {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 2px;
    margin-right: 4px;
    background: ${(p) => p.$color};
  }
`;

const Note = styled.div`
  font-size: 11px;
  opacity: 0.65;
`;

const Retry = styled.button`
  align-self: flex-start;
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid #00eeff;
  background: transparent;
  color: inherit;
  cursor: pointer;
`;

const RAIN = "#0a9bff";
const SNOW = "#7b9bff";
const CLOUD = "#8e8e8e";

const pct = (v, max) => (max > 0 && v !== null ? Math.max(2, Math.min(100, (v / max) * 100)) : 0);

// Тепловий колір для температури: від синього (холодно) до помаранчевого (спека)
const tempColor = (c) => {
  if (c === null) return "transparent";
  const hue = Math.max(0, Math.min(210, 210 - ((c + 20) / 55) * 210));
  return `hsl(${hue} 75% 55%)`;
};

export default function WeatherArchive({ lat, lon, fmt, formatTemp, isDarkMode }) {
  const [months, setMonths] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (lat == null || lon == null) return undefined;
    const controller = new AbortController();
    setError(false);
    setMonths(null);
    fetchArchiveMonths(lat, lon, { signal: controller.signal })
      .then(setMonths)
      .catch((e) => {
        if (e?.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, [lat, lon, attempt]);

  // Найсвіжіші місяці — праворуч, тож одразу прокручуємо в кінець
  useEffect(() => {
    const el = scrollerRef.current;
    if (el && months) el.scrollLeft = el.scrollWidth;
  }, [months]);

  const maxPrecip = useMemo(() => Math.max(0, ...(months || []).map((m) => m.precip ?? 0)), [months]);
  const monthName = (m) =>
    new Intl.DateTimeFormat(i18n.language || "uk", { month: "short" }).format(new Date(m.year, m.month - 1, 1));

  if (error) {
    return (
      <Wrap $dark={isDarkMode}>
        <Title>{t("title")}</Title>
        <Note>{t("error")}</Note>
        <Retry onClick={() => setAttempt((n) => n + 1)}>{t("retry")}</Retry>
      </Wrap>
    );
  }
  if (!months) {
    return (
      <Wrap $dark={isDarkMode}>
        <Title>{t("title")}</Title>
        <Note>{t("loading")}</Note>
      </Wrap>
    );
  }

  return (
    <Wrap $dark={isDarkMode}>
      <Title>{t("title")}</Title>
      <Scroller ref={scrollerRef}>
        <Grid>
          {months.map((m) => (
            <Month key={m.key}>
              {monthName(m)}
              <small>{m.month === 1 || m === months[0] ? m.year : " "}</small>
            </Month>
          ))}
        </Grid>

        <SectionLabel>{t("temperature")}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key} title={`${t("extremes")}: ${formatTemp(m.tAbsMin)} … ${formatTemp(m.tAbsMax)}`}>
              <b style={{ color: tempColor(m.tMax) }}>{formatTemp(m.tMax)}</b>
              <span style={{ color: tempColor(m.tMin), opacity: 0.9 }}>{formatTemp(m.tMin)}</span>
            </Cell>
          ))}
        </Grid>

        <SectionLabel>{t("cloud")}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key}>
              <BarBox $dark={isDarkMode}>
                <Fill $color={CLOUD} $h={m.cloud ?? 0} />
              </BarBox>
              <BarValue>{m.cloud === null ? "—" : `${Math.round(m.cloud)}%`}</BarValue>
            </Cell>
          ))}
        </Grid>

        <SectionLabel>{t("precip")}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key} title={`${t("wetDays")}: ${m.wetDays}`}>
              <BarBox $dark={isDarkMode}>
                <Fill $color={SNOW} $h={pct(m.snow, maxPrecip)} />
                <Fill $color={RAIN} $h={pct(m.rain, maxPrecip)} />
              </BarBox>
              <BarValue>{m.precip === null ? "—" : fmt.precip(m.precip, 0)}</BarValue>
            </Cell>
          ))}
        </Grid>
        <Legend $color={RAIN} style={{ marginTop: 6 }}>
          <span>
            <i style={{ background: RAIN }} />
            {t("rain")}
          </span>
          <span>
            <i style={{ background: SNOW }} />
            {t("snow")}
          </span>
        </Legend>

        <SectionLabel>{t("wind")}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key}>{m.wind === null ? "—" : fmt.wind(m.wind)}</Cell>
          ))}
        </Grid>
      </Scroller>
      <Note>{t("source")}</Note>
    </Wrap>
  );
}
