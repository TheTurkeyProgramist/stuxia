import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import i18n from "../../i18n/i18n.js";
import { fetchArchiveMonths } from "../../utils/weatherArchive.js";

// Графік архіву малює сам Weather.jsx (спільні кнопки, стилі ліній, тренд, повний екран).
// Тут — завантаження даних, а також «таблиця» і «рядки» (лінійний вигляд по місяцях).

const t = (key, opts) => i18n.t(`newsWeather.WeatherArchive.${key}`, opts);

// Завантаження помісячних підсумків; enabled — лише коли вкладка відкрита
export const useArchiveMonths = (lat, lon, enabled) => {
  const [months, setMonths] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!enabled || lat == null || lon == null) return undefined;
    const controller = new AbortController();
    setError(false);
    setMonths(null);
    fetchArchiveMonths(lat, lon, { signal: controller.signal })
      .then(setMonths)
      .catch((e) => {
        if (e?.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, [lat, lon, enabled, attempt]);

  return { months, error, retry: () => setAttempt((n) => n + 1) };
};

export const archiveMonthName = (m) =>
  new Intl.DateTimeFormat(i18n.language || "uk", { month: "short" }).format(new Date(m.year, m.month - 1, 1));

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
  margin-top: 6px;
  i {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 2px;
    margin-right: 4px;
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

const TableWrap = styled.div`
  overflow-x: auto;
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
  }
  th,
  td {
    padding: 6px 8px;
    text-align: right;
    white-space: nowrap;
    border-bottom: 1px solid ${(p) => (p.$dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)")};
  }
  th:first-child,
  td:first-child {
    text-align: left;
    font-weight: 700;
  }
  thead th {
    position: sticky;
    top: 0;
    background: ${(p) => (p.$dark ? "#15151d" : "#f2f2f2")};
  }
`;

const RAIN = "#0a9bff";
const SNOW = "#7b9bff";
const CLOUD = "#8e8e8e";

const pct = (v, max) => (max > 0 && v !== null ? Math.max(2, Math.min(100, (v / max) * 100)) : 0);

const tempColor = (c) => {
  if (c === null) return "transparent";
  const hue = Math.max(0, Math.min(210, 210 - ((c + 20) / 55) * 210));
  return `hsl(${hue} 75% 55%)`;
};

const pctText = (v) => (v === null || v === undefined ? "—" : `${Math.round(v)}%`);

// Стан завантаження/помилки — спільний для всіх режимів
export function ArchiveStatus({ error, retry, isDarkMode }) {
  return (
    <Wrap $dark={isDarkMode}>
      <Title>{t("title")}</Title>
      <Note>{error ? t("error") : t("loading")}</Note>
      {error && <Retry onClick={retry}>{t("retry")}</Retry>}
    </Wrap>
  );
}

export default function WeatherArchive({ months, fmt, formatTemp, isDarkMode, viewMode = "table" }) {
  const scrollerRef = useRef(null);

  // Найсвіжіші місяці — праворуч, тож одразу прокручуємо в кінець
  useEffect(() => {
    const el = scrollerRef.current;
    if (el && months) el.scrollLeft = el.scrollWidth;
  }, [months, viewMode]);

  if (!months) return null;
  const maxPrecip = Math.max(0, ...months.map((m) => m.precip ?? 0));

  if (viewMode === "table") {
    return (
      <Wrap $dark={isDarkMode}>
        <Title>{t("title")}</Title>
        <TableWrap $dark={isDarkMode}>
          <table>
            <thead>
              <tr>
                <th />
                <th>{i18n.t("newsWeather.Weather.den4")}</th>
                <th>{i18n.t("newsWeather.Weather.nich4")}</th>
                <th>{i18n.t("newsWeather.Weather.khmarnist")}</th>
                <th>{i18n.t("newsWeather.Weather.opady")}</th>
                <th>{t("wetDays")}</th>
                <th>{i18n.t("newsWeather.Weather.viter")}</th>
                <th>{i18n.t("newsWeather.Weather.volohist")}</th>
                <th>{i18n.t("newsWeather.Weather.tysk")}</th>
                <th>{`≈ ${i18n.t("newsWeather.Weather.ufIndeks")}`}</th>
              </tr>
            </thead>
            <tbody>
              {[...months].reverse().map((m) => (
                <tr key={m.key}>
                  <td>{`${archiveMonthName(m)} ${m.year}`}</td>
                  <td>{formatTemp(m.tMax)}</td>
                  <td>{formatTemp(m.tMin)}</td>
                  <td>{pctText(m.cloud)}</td>
                  <td>{m.precip === null ? "—" : fmt.precip(m.precip, 0)}</td>
                  <td>{m.wetDays}</td>
                  <td>{m.wind === null ? "—" : fmt.wind(m.wind)}</td>
                  <td>{pctText(m.humidity)}</td>
                  <td>{m.pressure === null || m.pressure === undefined ? "—" : fmt.pressure(m.pressure)}</td>
                  <td>{m.uv === null || m.uv === undefined ? "—" : (Math.round(m.uv * 10) / 10).toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
        <Note>{t("uvNote")}</Note>
        <Note>{t("source")}</Note>
      </Wrap>
    );
  }

  // «Рядки» — лінійний вигляд: колонка на місяць, під нею рядки показників
  return (
    <Wrap $dark={isDarkMode}>
      <Title>{t("title")}</Title>
      <Scroller ref={scrollerRef}>
        <Grid>
          {months.map((m) => (
            <Month key={m.key}>
              {archiveMonthName(m)}
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
              <BarValue>{pctText(m.cloud)}</BarValue>
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
        <Legend>
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

        <SectionLabel>{`≈ ${i18n.t("newsWeather.Weather.ufIndeks")}`}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key}>{m.uv === null || m.uv === undefined ? "—" : (Math.round(m.uv * 10) / 10).toFixed(1)}</Cell>
          ))}
        </Grid>
      </Scroller>
      <Note>{t("uvNote")}</Note>
      <Note>{t("source")}</Note>
    </Wrap>
  );
}
