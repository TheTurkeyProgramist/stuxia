import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import i18n from "../../i18n/i18n.js";
import { fetchArchiveMonths } from "../../utils/weatherArchive.js";
import { convertTemp, convertPrecip, tempLabel, precipLabel } from "../../utils/units.js";
import WeatherLineChart from "./WeatherLineChart";

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

const ChartHeader = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  padding: 6px 8px;
  border-bottom: 1px solid #ffb36c;
  border-radius: 6px 6px 0 0;
  background: ${(p) => (p.$dark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)")};
  backdrop-filter: blur(4px);
`;

const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 34px;
  padding: 0 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid ${(p) => p.$color};
  color: ${(p) => p.$color};
  background: ${(p) => (p.$dark ? "#222" : "#fff")};
  opacity: ${(p) => (p.$off ? 0.45 : 1)};
`;

const MetricSelect = styled.select`
  height: 30px;
  padding: 0 2px;
  border: none;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  color-scheme: ${(p) => (p.$dark ? "dark" : "light")};
  color: ${(p) => p.$color};
  background: transparent;
  option {
    color: ${(p) => (p.$dark ? "#fff" : "#1a1a1a")};
    background: ${(p) => (p.$dark ? "#1e1e2a" : "#fff")};
  }
`;

const ChartScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 10px;
  }
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

// Підписи значень над точками (спрощений аналог плагіна графіків «Година» / «16 днів»)
const valueLabelsPlugin = {
  id: "archiveValueLabels",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    ctx.save();
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    chart.data.datasets.forEach((ds, i) => {
      const meta = chart.getDatasetMeta(i);
      if (!ds.valueLabels || meta.hidden) return;
      meta.data.forEach((pt, idx) => {
        const text = ds.valueLabels[idx];
        if (!text || pt.skip) return;
        ctx.fillStyle = ds.valueLabelColor || "#fff";
        ctx.fillText(text, pt.x, pt.y + (ds.valueLabelOffset ?? -10));
      });
    });
    ctx.restore();
  },
};
const ARCHIVE_PLUGINS = [valueLabelsPlugin];

const DAY_COLOR = "#ffb36c";
const NIGHT_COLOR = "#ff1493";
const RIGHT_COLOR = { precip: "#14b8a6", clouds: "#9ca3af", wind: "#0099ff" };
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

export default function WeatherArchive({ lat, lon, fmt, formatTemp, isDarkMode, viewMode = "charts" }) {
  const [months, setMonths] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const scrollerRef = useRef(null);
  // Права вісь графіка: опади / хмарність / вітер; ліва — завжди температура
  const [rightMetric, setRightMetric] = useState("precip");
  const [hidden, setHidden] = useState({});

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
  }, [months, viewMode]);

  const maxPrecip = useMemo(() => Math.max(0, ...(months || []).map((m) => m.precip ?? 0)), [months]);
  const monthName = (m) =>
    new Intl.DateTimeFormat(i18n.language || "uk", { month: "short" }).format(new Date(m.year, m.month - 1, 1));

  const units = fmt.units;
  const tSuffix = tempLabel(units.temp);
  const rightColor = RIGHT_COLOR[rightMetric];
  const rightLabel = {
    precip: i18n.t("newsWeather.Weather.opady"),
    clouds: i18n.t("newsWeather.Weather.khmarnist"),
    wind: i18n.t("newsWeather.Weather.viter"),
  }[rightMetric];
  const rightAxis = {
    precip: `${i18n.t("newsWeather.Weather.opady")}, ${precipLabel(units.precip)}`,
    clouds: i18n.t("newsWeather.Weather.khmarnist2"),
    wind: fmt.windAxis,
  }[rightMetric];

  const chart = useMemo(() => {
    if (!months) return null;
    const r1 = (v) => Math.round(v * 10) / 10;
    const temp = (c) => (c === null ? null : r1(convertTemp(c, units.temp)));
    const rightVal = (m) => {
      if (rightMetric === "precip") return m.precip === null ? null : r1(convertPrecip(m.precip, units.precip));
      if (rightMetric === "clouds") return m.cloud === null ? null : Math.round(m.cloud);
      return m.wind === null ? null : fmt.windValue(m.wind);
    };
    const labels = months.map((m) => {
      const name = new Intl.DateTimeFormat(i18n.language || "uk", { month: "short" }).format(new Date(m.year, m.month - 1, 1));
      return m.month === 1 || m === months[0] ? [name, String(m.year)] : name;
    });
    const rv = months.map(rightVal);
    const lbl = (v) => (v === null ? "" : String(v));
    return {
      data: {
        labels,
        datasets: [
          {
            label: i18n.t("newsWeather.Weather.den4"),
            data: months.map((m) => temp(m.tMax)),
            borderColor: DAY_COLOR,
            backgroundColor: "rgba(255,179,108,0.35)",
            hidden: !!hidden.day,
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: DAY_COLOR,
            valueLabels: months.map((m) => lbl(temp(m.tMax))),
            valueLabelOffset: -10,
            valueLabelColor: "#ffd2a6",
            yAxisID: "y",
          },
          {
            label: i18n.t("newsWeather.Weather.nich4"),
            data: months.map((m) => temp(m.tMin)),
            borderColor: NIGHT_COLOR,
            backgroundColor: "rgba(255,20,147,0.2)",
            hidden: !!hidden.night,
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: NIGHT_COLOR,
            valueLabels: months.map((m) => lbl(temp(m.tMin))),
            valueLabelOffset: 18,
            valueLabelColor: "#ff8fd0",
            yAxisID: "y",
          },
          {
            label: rightAxis,
            data: rv,
            borderColor: rightColor,
            backgroundColor: `${rightColor}33`,
            hidden: !!hidden.right,
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: rightColor,
            borderDash: [6, 4],
            valueLabels: rv.map(lbl),
            valueLabelOffset: -10,
            valueLabelColor: rightColor,
            yAxisID: "y1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        layout: { padding: { top: 14 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) => {
                const m = months[items[0].dataIndex];
                return `${[].concat(items[0].label)[0]} ${m.year}`;
              },
              label: (c) => {
                const m = months[c.dataIndex];
                if (c.datasetIndex === 0) return ` ${i18n.t("newsWeather.Weather.den4")}: ${formatTemp(m.tMax)} (${t("extremes")}: ${formatTemp(m.tAbsMax)})`;
                if (c.datasetIndex === 1) return ` ${i18n.t("newsWeather.Weather.nich4")}: ${formatTemp(m.tMin)} (${t("extremes")}: ${formatTemp(m.tAbsMin)})`;
                return ` ${rightLabel}: ${c.formattedValue}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            title: { display: true, text: i18n.t("newsWeather.Weather.temperatura2", { tempSuffix: tSuffix }), color: DAY_COLOR },
            ticks: { color: isDarkMode ? "#aaa" : "#888", font: { size: 10 } },
            grid: { color: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(128,128,128,0.1)" },
          },
          y1: {
            type: "linear",
            position: "right",
            beginAtZero: true,
            ...(rightMetric === "clouds" ? { max: 100 } : {}),
            title: { display: true, text: rightAxis, color: rightColor },
            ticks: { color: rightColor, font: { size: 10 } },
            grid: { drawOnChartArea: false },
          },
          x: { ticks: { color: isDarkMode ? "#ddd" : "#444", font: { size: 11 } }, grid: { display: false } },
        },
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [months, rightMetric, hidden, isDarkMode, units.temp, units.precip, units.wind, i18n.language]);

  const toggle = (k) => setHidden((h) => ({ ...h, [k]: !h[k] }));

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

  if (viewMode === "charts") {
    return (
      <Wrap $dark={isDarkMode}>
        <ChartHeader $dark={isDarkMode}>
          <Chip type="button" $dark={isDarkMode} $color={DAY_COLOR} $off={hidden.day} onClick={() => toggle("day")}>
            {i18n.t("newsWeather.Weather.den4")}
          </Chip>
          <Chip type="button" $dark={isDarkMode} $color={NIGHT_COLOR} $off={hidden.night} onClick={() => toggle("night")}>
            {i18n.t("newsWeather.Weather.nich4")}
          </Chip>
          <Chip as="span" $dark={isDarkMode} $color={rightColor} $off={hidden.right} style={{ padding: "0 4px" }}>
            <button
              type="button"
              onClick={() => toggle("right")}
              aria-label={rightLabel}
              style={{ border: "none", background: "transparent", color: "inherit", cursor: "pointer", fontSize: 14, padding: "0 2px" }}
            >
              {hidden.right ? "○" : "●"}
            </button>
            <MetricSelect
              $dark={isDarkMode}
              $color={rightColor}
              value={rightMetric}
              onChange={(e) => setRightMetric(e.target.value)}
              aria-label={rightLabel}
            >
              <option value="precip">{i18n.t("newsWeather.Weather.opady")}</option>
              <option value="clouds">{i18n.t("newsWeather.Weather.khmarnist")}</option>
              <option value="wind">{i18n.t("newsWeather.Weather.viter")}</option>
            </MetricSelect>
          </Chip>
        </ChartHeader>
        <ChartScroll ref={scrollerRef}>
          <div style={{ width: "max(100%, 900px)", height: 295 }}>
            <WeatherLineChart data={chart.data} options={chart.options} plugins={ARCHIVE_PLUGINS} />
          </div>
        </ChartScroll>
        <Note>{t("source")}</Note>
      </Wrap>
    );
  }

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
              </tr>
            </thead>
            <tbody>
              {[...months].reverse().map((m) => (
                <tr key={m.key}>
                  <td>{`${monthName(m)} ${m.year}`}</td>
                  <td>{formatTemp(m.tMax)}</td>
                  <td>{formatTemp(m.tMin)}</td>
                  <td>{m.cloud === null ? "—" : `${Math.round(m.cloud)}%`}</td>
                  <td>{m.precip === null ? "—" : fmt.precip(m.precip, 0)}</td>
                  <td>{m.wetDays}</td>
                  <td>{m.wind === null ? "—" : fmt.wind(m.wind)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
        <Note>{t("source")}</Note>
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
