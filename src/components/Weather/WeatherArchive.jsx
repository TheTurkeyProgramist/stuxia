import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaSnowflake, FaCloud, FaCloudRain, FaWind, FaSun } from "react-icons/fa";
import { FaDroplet, FaTemperatureHalf } from "react-icons/fa6";
import i18n from "../../i18n/i18n.js";
import { fetchArchiveMonths, getArchiveRecords } from "../../utils/weatherArchive.js";
import {
  fetchHolidayPage,
  holidayPageYears,
  mergeHolidayPages,
  HOLIDAYS,
  rankYearsByTemp,
} from "../../utils/holidayWeather.js";

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

// Погода на свята сторінками по 10 років — як пагінація: нічого не качаємо, доки людина не натисне.
// error: "rate" — ліміт Open-Meteo на хвилину, "other" — інша помилка
export const useHolidayPages = (lat, lon) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  // Інше місто — починаємо з нуля
  useEffect(() => {
    controllerRef.current?.abort();
    setPages([]);
    setLoading(false);
    setError(null);
    return () => controllerRef.current?.abort();
  }, [lat, lon]);

  const loadNext = () => {
    if (loading || lat == null || lon == null || !holidayPageYears(pages.length)) return;
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setError(null);
    fetchHolidayPage(lat, lon, pages.length, { signal: controller.signal })
      .then((page) => setPages((prev) => [...prev, page]))
      .catch((e) => {
        if (e?.name !== "AbortError") setError(e?.status === 429 ? "rate" : "other");
      })
      .finally(() => {
        if (controllerRef.current === controller) setLoading(false);
      });
  };

  return { pages, loading, error, loadNext, nextYears: holidayPageYears(pages.length) };
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

/* Підпис розділу в «рядках»: прилипає до лівого краю, поки ряд місяців гортається вбік
   (раніше їхав разом із ним і обрізався: «идкість вітру») */
const SectionLabel = styled.div`
  position: sticky;
  left: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  max-width: 100%;
  font-size: 12px;
  font-weight: 700;
  margin: 8px 0 4px;
  opacity: 0.9;
  svg {
    flex-shrink: 0;
    font-size: 15px;
  }
`;

// Вміст прокрутки на всю ширину ряду — інакше «липкому» підпису нема куди їхати
const ScrollerContent = styled.div`
  width: max-content;
  min-width: 100%;
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
  /* Як і підписи розділів — не їде разом із рядом місяців */
  position: sticky;
  left: 0;
  width: fit-content;
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

const RecordsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 8px;
`;

const RecordCard = styled.div`
  padding: 8px 10px;
  border-radius: 8px;
  background: ${(p) => (p.$dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)")};
  font-size: 12px;
  line-height: 1.3;
  b {
    display: block;
    font-size: 17px;
    margin: 2px 0;
  }
  span {
    opacity: 0.7;
  }
`;

const RAIN = "#0a9bff";
const SNOW = "#7b9bff";
const CLOUD = "#8e8e8e";

const pct = (v, max) => (max > 0 && v !== null ? Math.max(2, Math.min(100, (v / max) * 100)) : 0);

// Розфарбовка вітру за середньою швидкістю (м/с): штиль → свіжий → сильний → штормовий
const windColor = (ms) => {
  if (ms === null || ms === undefined) return "inherit";
  if (ms < 2) return "#4ade80";
  if (ms < 4) return "#a3e635";
  if (ms < 6) return "#facc15";
  if (ms < 9) return "#fb923c";
  return "#ef4444";
};

// Шкала УФ-індексу ВООЗ: низький / помірний / високий / дуже високий / екстремальний
const uvColor = (uv) => {
  if (uv === null || uv === undefined) return "inherit";
  if (uv < 3) return "#4ade80";
  if (uv < 6) return "#facc15";
  if (uv < 8) return "#fb923c";
  if (uv < 11) return "#ef4444";
  return "#a855f7";
};

const tempColor = (c) => {
  if (c === null) return "transparent";
  const hue = Math.max(0, Math.min(210, 210 - ((c + 20) / 55) * 210));
  return `hsl(${hue} 75% 55%)`;
};

const pctText = (v) => (v === null || v === undefined ? "—" : `${Math.round(v)}%`);

const formatRecordDay = (iso) =>
  new Intl.DateTimeFormat(i18n.language || "uk", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${iso}T12:00:00`));

// «Рекорди» за весь період архіву — над будь-яким режимом (графіки, таблиця, рядки)
export function ArchiveRecords({ months, fmt, formatTemp, isDarkMode }) {
  const records = getArchiveRecords(months);
  if (!records) return null;
  const { hottest, coldest, wettest } = records;
  const monthLabel = (r) =>
    new Intl.DateTimeFormat(i18n.language || "uk", { month: "long", year: "numeric" }).format(new Date(r.year, r.month - 1, 1));
  return (
    <Wrap $dark={isDarkMode}>
      <Title>{t("recordsTitle", { n: months.length })}</Title>
      <RecordsRow>
        {hottest && (
          <RecordCard $dark={isDarkMode}>
            {t("recordHottest")}
            <b style={{ color: tempColor(hottest.value) }}>{formatTemp(hottest.value)}</b>
            <span>{formatRecordDay(hottest.day)}</span>
          </RecordCard>
        )}
        {coldest && (
          <RecordCard $dark={isDarkMode}>
            {t("recordColdest")}
            <b style={{ color: tempColor(coldest.value) }}>{formatTemp(coldest.value)}</b>
            <span>{formatRecordDay(coldest.day)}</span>
          </RecordCard>
        )}
        {wettest && (
          <RecordCard $dark={isDarkMode}>
            {t("recordWettest")}
            <b style={{ color: RAIN }}>{fmt.precip(wettest.value, 0)}</b>
            <span>{monthLabel(wettest)}</span>
          </RecordCard>
        )}
      </RecordsRow>
    </Wrap>
  );
}

const HOLIDAY_NAME_KEYS = {
  newYear: "holidayNewYear",
  christmasJan: "holidayChristmasJan",
  christmasDec: "holidayChristmasDec",
  easter: "holidayEaster",
  springStart: "holidaySpring",
  summerStart: "holidaySummer",
  autumnStart: "holidayAutumn",
  winterStart: "holidayWinter",
};

// Панель вибору дня й порядку — над таблицею, нічого не гортається вбік
const HolidayControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  select {
    flex: 1 1 180px;
    min-width: 0;
    height: 32px;
    padding: 0 8px;
    border-radius: 8px;
    border: 1px solid ${(p) => (p.$dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)")};
    /* Колір і фон — явно і для select, і для option, інакше білий текст на білому списку */
    color-scheme: ${(p) => (p.$dark ? "dark" : "light")};
    color: ${(p) => (p.$dark ? "#fff" : "#111")};
    background: ${(p) => (p.$dark ? "#1e1e2a" : "#fff")};
    font: inherit;
    font-size: 13px;
    font-weight: 700;
  }
  option {
    color: ${(p) => (p.$dark ? "#fff" : "#111")};
    background: ${(p) => (p.$dark ? "#1e1e2a" : "#fff")};
  }
`;

const SortToggle = styled.div`
  display: inline-flex;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${(p) => (p.$dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)")};
  button {
    height: 30px;
    padding: 0 10px;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  button[aria-pressed="true"] {
    background: #8a2be2;
    color: #fff;
  }
`;

// Таблиця-рейтинг: рядок на рік — місце, рік, смужка «мін…макс» на спільній шкалі, середня, опади
const RankTable = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

/* Два рядки: зверху місце, рік, температура й опади; знизу на всю ширину — смужка «мін…макс».
   Так нічого не вилазить і смужка не крихітна */
const RankRow = styled.li`
  display: grid;
  grid-template-columns: 18px auto 1fr auto;
  grid-template-areas:
    "rank year temp precip"
    "rank bar bar bar";
  align-items: center;
  column-gap: 8px;
  row-gap: 4px;
  padding: 5px 8px;
  .rank {
    grid-area: rank;
  }
  .year {
    grid-area: year;
  }
  .temp {
    grid-area: temp;
  }
  .precip {
    grid-area: precip;
  }
  .bar {
    grid-area: bar;
  }
  border-radius: 6px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  background: ${(p) => (p.$dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)")};

  .rank {
    opacity: 0.6;
    text-align: right;
  }
  .year {
    font-weight: 700;
    line-height: 1.1;
    small {
      display: block;
      font-size: 10px;
      font-weight: 500;
      opacity: 0.7;
    }
  }
  .temp {
    min-width: 0;
    line-height: 1.15;
    white-space: nowrap;
    b {
      font-size: 14px;
      margin-right: 6px;
    }
    small {
      font-size: 11px;
      opacity: 0.75;
    }
  }
  .precip {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 11px;
    opacity: 0.85;
    white-space: nowrap;
    svg {
      flex-shrink: 0;
    }
  }
`;

const RangeTrack = styled.div`
  position: relative;
  height: 8px;
  border-radius: 999px;
  background: ${(p) => (p.$dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)")};
  span {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 999px;
  }
`;

const RankNote = styled.div`
  font-size: 11px;
  line-height: 1.4;
  margin-top: 4px;
  opacity: 0.8;
  b {
    font-weight: 700;
  }
`;

const LoadButton = styled.button`
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #00eeff;
  background: rgba(0, 238, 255, 0.12);
  color: inherit;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  &:hover:not(:disabled) {
    background: rgba(0, 238, 255, 0.25);
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  /* Телефон: компактна кнопка, а не велика плита на всю ширину */
  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 12px !important;
    line-height: 1.3;
  }
`;

// «Погода на свята»: обираєш день — бачиш рейтинг років від найхолоднішого (або за роками)
export function HolidayWeather({ lat, lon, fmt, formatTemp, isDarkMode }) {
  const { pages, loading, error, loadNext, nextYears } = useHolidayPages(lat, lon);
  const [dayKey, setDayKey] = useState(HOLIDAYS[0].key);
  const [sortBy, setSortBy] = useState("cold"); // "cold" — від найхолоднішого, "year" — від найновішого
  // Кнопка «Рейтинг клімату… за 10 років» — лише до першого завантаження (без «Ще 10 років»)
  const loadButton = nextYears && pages.length === 0 && (
    <LoadButton type="button" onClick={loadNext} disabled={loading}>
      {loading ? t("holidaysLoading") : t("holidaysLoad")}
    </LoadButton>
  );
  const errorNote = error && <Note>{error === "rate" ? t("holidaysRateLimit") : t("error")}</Note>;
  if (!pages.length) {
    return (
      <Wrap $dark={isDarkMode}>
        <Title>{t("holidaysTitle")}</Title>
        <Note>{t("holidaysIntro")}</Note>
        {loadButton}
        {errorNote}
      </Wrap>
    );
  }
  const data = mergeHolidayPages(pages);
  const shortDate = (iso) =>
    new Intl.DateTimeFormat(i18n.language || "uk", { day: "numeric", month: "short" }).format(new Date(`${iso}T12:00:00`));
  // Опади — іконкою (без емодзі): сніг, дощ або «без опадів»
  const precipText = (x) => {
    if (x.snow != null && x.snow >= 0.1)
      return (
        <>
          <FaSnowflake style={{ color: SNOW }} aria-hidden="true" /> {fmt.snow(x.snow)}
        </>
      );
    if (x.precip != null && x.precip >= 0.1)
      return (
        <>
          <FaDroplet style={{ color: RAIN }} aria-hidden="true" /> {fmt.precip(x.precip)}
        </>
      );
    return t("holidayDry");
  };
  const available = HOLIDAYS.filter(({ key }) => (data[key] || []).length);
  const activeKey = available.some((h) => h.key === dayKey) ? dayKey : available[0]?.key;
  const list = data[activeKey] || [];
  const byYear = new Map(list.map((x) => [x.year, x]));
  const ranked = rankYearsByTemp(list);
  const rows = sortBy === "cold" ? ranked.map((r) => byYear.get(r.year)) : list;
  const rankOf = new Map(ranked.map((r, i) => [r.year, i + 1]));
  const coldest = ranked[0];
  const warmest = ranked[ranked.length - 1];
  // Спільна шкала для смужок: від найнижчого мінімуму до найвищого максимуму серед років
  const lows = list.map((x) => x.tMin ?? x.tMax).filter((v) => v != null);
  const highs = list.map((x) => x.tMax ?? x.tMin).filter((v) => v != null);
  const scaleMin = Math.min(...lows);
  const scaleMax = Math.max(...highs);
  const span = Math.max(1, scaleMax - scaleMin);
  const pos = (v) => ((v - scaleMin) / span) * 100;

  return (
    <Wrap $dark={isDarkMode}>
      <Title>{t("holidaysTitle")}</Title>
      <HolidayControls $dark={isDarkMode}>
        <select value={activeKey} onChange={(e) => setDayKey(e.target.value)} aria-label={t("holidaysTitle")}>
          {available.map(({ key }) => (
            <option key={key} value={key}>
              {t(HOLIDAY_NAME_KEYS[key])}
            </option>
          ))}
        </select>
        <SortToggle $dark={isDarkMode} role="group">
          <button type="button" aria-pressed={sortBy === "cold"} onClick={() => setSortBy("cold")}>
            {t("sortColdest")}
          </button>
          <button type="button" aria-pressed={sortBy === "year"} onClick={() => setSortBy("year")}>
            {t("sortYears")}
          </button>
        </SortToggle>
      </HolidayControls>

      {ranked.length >= 2 && (
        <RankNote>
          {t("rankColdest")} <b>{coldest.year}</b> ({formatTemp(coldest.mean)}), {t("rankWarmest")} <b>{warmest.year}</b> ({formatTemp(warmest.mean)}).
        </RankNote>
      )}

      <RankTable>
        {rows.map((x) => {
          const lo = x.tMin ?? x.tMax;
          const hi = x.tMax ?? x.tMin;
          const mean = ranked.find((r) => r.year === x.year)?.mean ?? null;
          return (
            <RankRow key={x.year} $dark={isDarkMode}>
              <span className="rank">{rankOf.get(x.year) ?? "—"}</span>
              <span className="year">
                {x.year}
                {activeKey === "easter" && <small>{shortDate(x.date)}</small>}
              </span>
              <RangeTrack className="bar" $dark={isDarkMode} title={`${formatTemp(lo)} … ${formatTemp(hi)}`}>
                {lo != null && hi != null && (
                  <span
                    style={{
                      left: `${pos(lo)}%`,
                      width: `${Math.max(3, pos(hi) - pos(lo))}%`,
                      background: `linear-gradient(90deg, ${tempColor(lo)}, ${tempColor(hi)})`,
                    }}
                  />
                )}
              </RangeTrack>
              <span className="temp">
                <b style={{ color: tempColor(mean) }}>{formatTemp(mean)}</b>
                <small>
                  {formatTemp(hi)} / {formatTemp(lo)}
                </small>
              </span>
              <span className="precip">{precipText(x)}</span>
            </RankRow>
          );
        })}
      </RankTable>
      {loadButton}
      {errorNote}
      <Note>{t("holidaysNote")}</Note>
    </Wrap>
  );
}

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
                  <td style={{ color: windColor(m.wind), fontWeight: 600 }}>{m.wind === null ? "—" : fmt.wind(m.wind)}</td>
                  <td>{pctText(m.humidity)}</td>
                  <td>{m.pressure === null || m.pressure === undefined ? "—" : fmt.pressure(m.pressure)}</td>
                  <td style={{ color: uvColor(m.uv), fontWeight: 600 }}>{m.uv === null || m.uv === undefined ? "—" : (Math.round(m.uv * 10) / 10).toFixed(1)}</td>
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
        <ScrollerContent>
        <Grid>
          {months.map((m) => (
            <Month key={m.key}>
              {archiveMonthName(m)}
              <small>{m.month === 1 || m === months[0] ? m.year : " "}</small>
            </Month>
          ))}
        </Grid>

        <SectionLabel><FaTemperatureHalf style={{ color: "#ff9d3b" }} aria-hidden="true" />{t("temperature")}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key} title={`${t("extremes")}: ${formatTemp(m.tAbsMin)} … ${formatTemp(m.tAbsMax)}`}>
              <b style={{ color: tempColor(m.tMax) }}>{formatTemp(m.tMax)}</b>
              <span style={{ color: tempColor(m.tMin), opacity: 0.9 }}>{formatTemp(m.tMin)}</span>
            </Cell>
          ))}
        </Grid>

        <SectionLabel><FaCloud style={{ color: CLOUD }} aria-hidden="true" />{t("cloud")}</SectionLabel>
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

        <SectionLabel><FaCloudRain style={{ color: RAIN }} aria-hidden="true" />{t("precip")}</SectionLabel>
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

        <SectionLabel><FaWind style={{ color: "#00eeff" }} aria-hidden="true" />{t("wind")}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key} style={{ color: windColor(m.wind), fontWeight: 600 }}>
              {m.wind === null ? "—" : fmt.wind(m.wind)}
            </Cell>
          ))}
        </Grid>

        <SectionLabel><FaSun style={{ color: "#ffd700" }} aria-hidden="true" />{`≈ ${i18n.t("newsWeather.Weather.ufIndeks")}`}</SectionLabel>
        <Grid>
          {months.map((m) => (
            <Cell key={m.key} style={{ color: uvColor(m.uv), fontWeight: 600, gap: "2px" }}>
              {/* Іконка над значенням у кольорі рівня УФ */}
              <FaSun aria-hidden="true" style={{ fontSize: "16px" }} />
              {m.uv === null || m.uv === undefined ? "—" : (Math.round(m.uv * 10) / 10).toFixed(1)}
            </Cell>
          ))}
        </Grid>
        </ScrollerContent>
      </Scroller>
      <Note>{t("uvNote")}</Note>
      <Note>{t("source")}</Note>
    </Wrap>
  );
}
