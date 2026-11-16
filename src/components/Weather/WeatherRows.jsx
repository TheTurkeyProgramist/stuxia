import React from "react";
import styled from "styled-components";

/*
  Режим «Рядки» (як на метеосайтах): стовпці — години або дні, рядки — параметри.
  • Шапка (час/дата + іконка) липка зверху при вертикальній прокрутці.
  • Назва кожного рядка липка зліва при горизонтальній прокрутці.
  • Вітер, пориви, УФ, опади — кольорові клітинки залежно від значення.
  Кольори тексту задаються ЯВНО для кожної клітинки (світла й темна тема) —
  жодного успадкованого білого тексту на світлому фоні.
*/

const COL_MIN = 62; // px — мінімальна ширина стовпця

const Scroller = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 12px;
  box-sizing: border-box;
  background: ${(p) => (p.$dark ? "rgba(20, 20, 30, 0.94)" : "rgba(255, 255, 255, 0.97)")};
  color: ${(p) => (p.$dark ? "#ffffff" : "#1a1a1a")};
  border: 1px solid ${(p) => (p.$dark ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.1)")};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  scrollbar-color: ${(p) => (p.$dark ? "rgba(255,255,255,0.5) transparent" : "rgba(0,0,0,0.35) transparent")};
`;

const Inner = styled.div`
  width: max-content;
  min-width: 100%;
  padding-bottom: 6px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$cols}, minmax(${COL_MIN}px, 1fr));
`;

/* Липка шапка: суцільний фон, щоб рядки під нею не просвічували */
const Header = styled(Grid)`
  position: sticky;
  top: 0;
  z-index: 3;
  background: ${(p) => (p.$dark ? "#181826" : "#ffffff")};
  border-bottom: 1px solid ${(p) => (p.$dark ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.1)")};
`;

const HeadCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 6px 2px 4px;
  text-align: center;
  line-height: 1.15;
  opacity: ${(p) => (p.$past ? 0.5 : 1)};
  filter: ${(p) => (p.$past ? "grayscale(1)" : "none")};
  border-radius: 8px;
  /* Поточна година — підсвічена */
  background: ${(p) => (p.$current ? (p.$dark ? "rgba(138, 43, 226, 0.35)" : "rgba(138, 43, 226, 0.14)") : "transparent")};
  .top {
    font-size: 13px;
    font-weight: 800;
    color: ${(p) => p.$accent || (p.$dark ? "#ffffff" : "#1a1a1a")};
  }
  .sub {
    font-size: 10px;
    font-weight: 600;
    color: ${(p) => p.$accent || (p.$dark ? "#c9c9d6" : "#555555")};
  }
  .icon {
    font-size: 24px;
    line-height: 1;
    margin-top: 2px;
  }
`;

const RowTitle = styled.div`
  padding: 8px 0 3px;
  span {
    position: sticky;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: 600;
    color: ${(p) => (p.$dark ? "#d6d6e0" : "#333333")};
    white-space: nowrap;
  }
  /* Іконка параметра зліва від назви рядка */
  svg {
    font-size: 15px;
    flex-shrink: 0;
  }
  small {
    font-weight: 500;
    opacity: 0.8;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 0 1px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  opacity: ${(p) => (p.$past ? 0.55 : 1)};
`;

/* Скошена кольорова плашка (вітер, пориви, УФ, опади) */
const Skew = styled.div`
  width: calc(100% - 2px);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-style: italic;
  font-weight: 700;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
`;

const Arrow = ({ deg, color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style={{ transform: `rotate(${deg}deg)`, transition: "transform 0.2s" }}>
    <path d="M12 3 L12 21 M12 3 L6 9 M12 3 L18 9" stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * columns: [{ key, top, sub, icon, accent?, past?, current? }]
 * rows: [{ key, title, unit?, icon?, variant: "plain"|"skew"|"arrow", cells: [{ text, bg?, fg?, deg?, label? }] }]
 * fit — розтягнутися на решту висоти вкладки (планшет/ПК); інакше maxHeight
 */
const WeatherRows = ({ columns, rows, isDarkMode, fit = false, maxHeight, ariaLabel }) => {
  const dark = !!isDarkMode;
  const cols = columns.length;
  const baseFg = dark ? "#ffffff" : "#1a1a1a";
  return (
    <Scroller
      $dark={dark}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      style={fit ? { flex: "1 1 auto", minHeight: 0 } : maxHeight ? { maxHeight } : undefined}
    >
      <Inner>
        <Header $cols={cols} $dark={dark}>
          {columns.map((c) => (
            <HeadCell key={c.key} $dark={dark} $past={c.past} $current={c.current} $accent={c.accent}>
              <span className="top">{c.top}</span>
              {c.sub && <span className="sub">{c.sub}</span>}
              {c.icon && <span className="icon">{c.icon}</span>}
            </HeadCell>
          ))}
        </Header>

        {rows.map((row) => (
          <React.Fragment key={row.key}>
            <RowTitle $dark={dark}>
              <span>
                {row.icon}
                {row.title}
                {row.unit && <small>, {row.unit}</small>}
              </span>
            </RowTitle>
            <Grid $cols={cols}>
              {row.cells.map((cell, i) => {
                const past = columns[i]?.past;
                if (row.variant === "arrow") {
                  const fg = dark ? "#e6e6f0" : "#5a5a66";
                  return (
                    <Cell key={i} $past={past} title={cell.title}>
                      {cell.deg == null ? "—" : <Arrow deg={cell.deg} color={fg} />}
                      <span style={{ fontSize: "11px", fontWeight: 600, color: fg }}>{cell.label}</span>
                    </Cell>
                  );
                }
                if (row.variant === "skew") {
                  return (
                    <Cell key={i} $past={past}>
                      <Skew style={{ background: cell.bg, color: cell.fg || baseFg }}>{cell.text}</Skew>
                    </Cell>
                  );
                }
                return (
                  <Cell key={i} $past={past} style={{ color: cell.fg || baseFg }}>
                    {cell.text}
                  </Cell>
                );
              })}
            </Grid>
          </React.Fragment>
        ))}
      </Inner>
    </Scroller>
  );
};

export default WeatherRows;

/* ---------- Кольорові шкали (вхід — базові одиниці: м/с, мм, °C) ---------- */

const DARK_TEXT = "#1a1a1a";
const LIGHT_TEXT = "#ffffff";

// Нейтральна плашка (слабкий вітер тощо)
const neutral = (dark) => ({
  bg: dark ? "linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.12))" : "linear-gradient(90deg, #fafafa, #ececec)",
  fg: dark ? LIGHT_TEXT : DARK_TEXT,
});

const grad = (hex) => `linear-gradient(90deg, ${hex}b3, ${hex})`;

// Вітер / пориви, м/с: штиль → сірий, далі жовтий → помаранчевий → червоний
const WIND_STEPS = [
  [5, null],
  [8, "#fff1a8"],
  [11, "#ffe066"],
  [14, "#ffc947"],
  [17, "#ffa04d"],
  [21, "#ff7a59"],
  [Infinity, "#ff4d6d"],
];
export const windCellStyle = (ms, dark) => {
  const v = Number(ms);
  if (!Number.isFinite(v)) return neutral(dark);
  const hex = WIND_STEPS.find(([max]) => v < max)[1];
  return hex ? { bg: grad(hex), fg: DARK_TEXT } : neutral(dark);
};

// УФ-індекс: зелений → жовтий → помаранчевий → червоний → фіолетовий
export const uvCellStyle = (uv, dark) => {
  const v = Number(uv);
  if (!Number.isFinite(v) || v < 1) return neutral(dark);
  if (v < 3) return { bg: grad("#7bd389"), fg: DARK_TEXT };
  if (v < 6) return { bg: grad("#ffd23f"), fg: DARK_TEXT };
  if (v < 8) return { bg: grad("#ff9f40"), fg: DARK_TEXT };
  if (v < 11) return { bg: grad("#f44336"), fg: LIGHT_TEXT };
  return { bg: grad("#9c27b0"), fg: LIGHT_TEXT };
};

// Опади, мм: що більше — то насиченіший синій
export const precipCellStyle = (mm, dark) => {
  const v = Number(mm);
  if (!Number.isFinite(v) || v <= 0) return neutral(dark);
  if (v < 1) return { bg: grad("#cfe8ff"), fg: DARK_TEXT };
  if (v < 3) return { bg: grad("#8cc8ff"), fg: DARK_TEXT };
  if (v < 8) return { bg: grad("#3d9bff"), fg: LIGHT_TEXT };
  return { bg: grad("#1f5fd6"), fg: LIGHT_TEXT };
};

// Ймовірність опадів, %: колір тексту
export const chanceColor = (p, dark) => {
  const v = Number(p);
  if (!Number.isFinite(v) || v < 20) return dark ? "#9a9aac" : "#8a8a96";
  if (v < 50) return dark ? "#8cc8ff" : "#3d8fe0";
  return dark ? "#4da6ff" : "#1f5fd6";
};

// Температура (°C): колір тексту від холодного до спекотного; окремо під кожну тему
export const tempColor = (c, dark) => {
  const v = Number(c);
  if (!Number.isFinite(v)) return dark ? "#ffffff" : "#1a1a1a";
  if (v <= -10) return dark ? "#9ec5ff" : "#1f5fd6";
  if (v < 0) return dark ? "#6fb6ff" : "#2f80ed";
  if (v < 10) return dark ? "#5fd4d4" : "#13878a";
  if (v < 20) return dark ? "#ffd166" : "#b07800";
  if (v < 30) return dark ? "#ff9d3b" : "#d4620a";
  return dark ? "#ff5c5c" : "#d32f2f";
};
