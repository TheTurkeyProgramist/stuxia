import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FaTimes, FaUndo } from "react-icons/fa";
import { BiPalette, BiLayer, BiSliderAlt, BiTrendingUp, BiInfoCircle, BiCheck } from "react-icons/bi";
import { MdOutlineFormatColorFill, MdScatterPlot } from "react-icons/md";
import { CURVES, DASHES, WIDTH_MIN, WIDTH_MAX, DIM_MAX } from "../../utils/chartLineStyles.js";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${(p) => (p.$isDarkMode ? "#1c1c1f" : "#fff")};
  color: ${(p) => (p.$isDarkMode ? "#fff" : "#111")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  border-radius: 14px;
  box-sizing: border-box;
  width: 95vw;
  max-height: 92vh;
  overflow-y: auto;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  & > * {
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: -20px;
  z-index: 2;
  margin: -20px -22px 0;
  padding: 14px 22px;
  background: inherit;
  border-bottom: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)")};

  @media (max-width: 600px) {
    top: -16px;
    margin: -16px -16px 0;
    padding: 12px 16px;
  }
`;

const TitleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  font-size: 20px;
  color: #00eeff;
  background: rgba(0, 238, 255, 0.12);
  border: 1px solid rgba(0, 238, 255, 0.3);
  flex-shrink: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  display: inline-flex;
  padding: 6px;
  border-radius: 6px;
  &:hover {
    opacity: 1;
    background: rgba(128, 128, 128, 0.2);
  }
`;

const SectionLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  svg {
    font-size: 15px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  & > ${SectionLabel} {
    margin-bottom: 0;
  }
`;

const AllCardsToggle = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? "#00eeff" : p.$isDarkMode ? "#444" : "#ccc")};
  background: ${(p) => (p.$active ? (p.$isDarkMode ? "rgba(0,238,255,0.12)" : "rgba(0,140,255,0.1)") : "transparent")};
  input {
    accent-color: #00eeff;
    width: 16px;
    height: 16px;
    margin: 0;
  }
`;

const AllLinesPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(0,238,255,0.18)" : "rgba(0,140,255,0.2)")};
  background: ${(p) =>
    p.$isDarkMode
      ? "linear-gradient(135deg, rgba(0,238,255,0.06), rgba(255,255,255,0.02))"
      : "linear-gradient(135deg, rgba(0,140,255,0.06), rgba(0,0,0,0.015))"};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr));
  gap: 14px;
`;

const Hint = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  opacity: 0.65;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
`;

const LineCard = styled.div`
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)")};
  background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)")};
  border-top: 3px solid ${(p) => p.$color};
  border-radius: 12px;
  padding: 12px 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.15s, box-shadow 0.15s;
  &:hover {
    box-shadow: 0 6px 22px ${(p) => p.$color}22;
  }
`;

const LineHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${(p) => p.$color};
  padding-bottom: 10px;
  border-bottom: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)")};
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: ${(p) => p.$color}22;
    font-size: 17px;
  }
`;

const PreviewBox = styled.span`
  margin-left: auto;
  padding: 6px 10px;
  border-radius: 8px;
  background: ${(p) => (p.$isDarkMode ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.04)")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)")};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 92px 1fr;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  .name {
    opacity: 0.7;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)")};
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const OptionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  font-size: 12.5px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? "#00eeff" : p.$isDarkMode ? "#3a3a40" : "#d4d4d8")};
  background: ${(p) => (p.$active ? (p.$isDarkMode ? "rgba(0,238,255,0.14)" : "rgba(0,140,255,0.1)") : p.$isDarkMode ? "rgba(255,255,255,0.02)" : "#fff")};
  box-shadow: ${(p) => (p.$active ? "0 0 0 2px rgba(0,238,255,0.15)" : "none")};
  color: inherit;
  font-weight: ${(p) => (p.$active ? 700 : 500)};
  transition: border-color 0.15s, background 0.15s, transform 0.1s;
  &:hover {
    border-color: #00eeff;
  }
  &:active {
    transform: scale(0.97);
  }
  svg {
    flex-shrink: 0;
  }
`;

const WidthValue = styled.span`
  min-width: 44px;
  text-align: center;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${(p) => p.$color};
  background: ${(p) => p.$color}1f;
`;

const Toggles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 2px;
`;

const ToggleChip = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${(p) => (p.$active ? p.$color : p.$isDarkMode ? "#3a3a40" : "#d4d4d8")};
  background: ${(p) => (p.$active ? `${p.$color}1f` : "transparent")};
  color: ${(p) => (p.$active ? p.$color : "inherit")};
  opacity: ${(p) => (p.$active ? 1 : 0.75)};
  transition: all 0.15s;
  &:hover {
    opacity: 1;
  }
  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  &:focus-within {
    outline: 2px solid ${(p) => p.$color};
    outline-offset: 2px;
  }
  svg {
    font-size: 15px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)")};
  padding-top: 14px;
`;

const DoneButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #00eeff;
  background: rgba(0, 238, 255, 0.15);
  color: ${(p) => (p.$isDarkMode ? "#00eeff" : "#006b80")};
  &:hover {
    background: rgba(0, 238, 255, 0.25);
  }
`;

const ResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ffb36c;
  background: transparent;
  color: ${(p) => (p.$isDarkMode ? "#ffb36c" : "#333")};
`;

const SAMPLE = [28, 10, 22, 6, 16, 12];
const ICON_SAMPLE = [28, 6, 20, 10];

// SVG-шлях для прев'ю залежно від форми лінії
const buildPath = (curve, w, h, sample = SAMPLE, pad = 4) => {
  const pts = sample.map((y, i) => [pad + (i * (w - pad * 2)) / (sample.length - 1), (y / 32) * h]);
  if (curve === "stepped") {
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const mid = (pts[i - 1][0] + pts[i][0]) / 2;
      d += ` H${mid} V${pts[i][1]} H${pts[i][0]}`;
    }
    return d;
  }
  if (curve === "straight" || !curve) {
    return pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  }
  // Catmull-Rom → кубічні криві Безьє
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const k = curve === "monotone" ? 0.12 : 0.18;
    const c1 = [p1[0] + (p2[0] - p0[0]) * k, p1[1] + (p2[1] - p0[1]) * k];
    const c2 = [p2[0] - (p3[0] - p1[0]) * k, p2[1] - (p3[1] - p1[1]) * k];
    d += ` C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`;
  }
  return d;
};

const LinePreview = ({ style, color, fill, w = 150, h = 34 }) => {
  const d = buildPath(style.curve, w, h);
  const pattern = DASHES[style.dash]?.pattern || [];
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
      {fill && <path d={`${d} L${w - 4},${h} L4,${h} Z`} fill={color} opacity="0.18" />}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={style.width}
        strokeDasharray={pattern.length ? pattern.join(" ") : undefined}
        strokeLinecap={style.dash === "dotted" ? "round" : "butt"}
        strokeLinejoin="round"
      />
      {style.points &&
        SAMPLE.map((y, i) => (
          <circle key={i} cx={4 + (i * (w - 8)) / (SAMPLE.length - 1)} cy={(y / 32) * h} r="2.5" fill={color} />
        ))}
    </svg>
  );
};

// Іконка форми лінії для кнопок "Плавна / Без викидів / Ламана / Сходинки"
const CurveSwatch = ({ curve, color }) => (
  <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true" style={{ overflow: "visible" }}>
    <path
      d={buildPath(curve, 26, 16, ICON_SAMPLE, 2)}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const dimLabel = (v) => (v === 0 ? "сховати" : `${Math.round(v * 100)}%`);

// Прозорість лінії, коли її вимкнено в легенді
const DimSlider = ({ value, color, label, onChange }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <input
      type="range"
      min="0"
      max={DIM_MAX * 100}
      step="5"
      value={Math.round(value * 100)}
      onChange={(e) => onChange(Number(e.target.value) / 100)}
      aria-label={label}
      style={{ flex: 1, maxWidth: "260px", accentColor: color, cursor: "pointer" }}
    />
    <WidthValue $color={color} style={{ minWidth: "64px", opacity: value === 0 ? 0.7 : Math.max(0.45, value + 0.3) }}>
      {dimLabel(value)}
    </WidthValue>
  </div>
);

const DashSwatch = ({ dashKey, color }) => (
  <svg width="28" height="8" aria-hidden="true">
    <line
      x1="1"
      y1="4"
      x2="27"
      y2="4"
      stroke={color}
      strokeWidth="2"
      strokeDasharray={DASHES[dashKey].pattern.join(" ") || undefined}
      strokeLinecap={dashKey === "dotted" ? "round" : "butt"}
    />
  </svg>
);

/**
 * lines: [{ key, label, color, icon, trend?, autoFill? }]
 * styles: { [lineKey]: { curve, dash, width, fill, points } }
 * allCards: чи застосовуються стилі до графіків усіх карток
 */
const ChartStyleModal = ({
  title,
  lines,
  styles,
  onChange,
  onApplyAll,
  onReset,
  onClose,
  allCards,
  onToggleAllCards,
  isDarkMode,
}) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const swatchColor = isDarkMode ? "#ddd" : "#333";
  const mainLines = lines.filter((l) => !l.trend);
  const trendLines = lines.filter((l) => l.trend);
  const allCurve = mainLines.map((l) => styles[l.key]?.curve);
  const allDash = lines.map((l) => styles[l.key]?.dash);
  const sameCurve = allCurve.every((c) => c === allCurve[0]) ? allCurve[0] : null;
  const sameDash = allDash.every((c) => c === allDash[0]) ? allDash[0] : null;
  const commonDim = styles[mainLines[0]?.key]?.dimOpacity ?? 0.3;

  const renderLineCard = (l) => {
    const s = styles[l.key];
    if (!s) return null;
    const effectiveFill = s.fill ?? l.autoFill ?? false;
    const set = (patch) => onChange(l.key, patch);
    return (
      <LineCard key={l.key} $isDarkMode={isDarkMode} $color={l.color}>
        <LineHeader $color={l.color} $isDarkMode={isDarkMode}>
          {l.icon && <span className="icon">{l.icon}</span>}
          {l.label}
          <PreviewBox $isDarkMode={isDarkMode}>
            <LinePreview style={l.trend ? { ...s, curve: "straight", points: false } : s} color={l.color} fill={!l.trend && effectiveFill} />
          </PreviewBox>
        </LineHeader>

        {!l.trend && (
          <Row>
            <span className="name">Форма</span>
            <Options>
              {Object.entries(CURVES).map(([k, c]) => (
                <OptionButton key={k} $active={s.curve === k} $isDarkMode={isDarkMode} title={c.hint} onClick={() => set({ curve: k })}>
                  <CurveSwatch curve={k} color={l.color} /> {c.label}
                </OptionButton>
              ))}
            </Options>
          </Row>
        )}

        <Row>
          <span className="name">Тип лінії</span>
          <Options>
            {Object.entries(DASHES).map(([k, d]) => (
              <OptionButton
                key={k}
                $active={s.dash === k}
                $isDarkMode={isDarkMode}
                title={d.label}
                aria-label={d.label}
                onClick={() => set({ dash: k })}
              >
                <DashSwatch dashKey={k} color={l.color} />
              </OptionButton>
            ))}
          </Options>
        </Row>

        <Row>
          <span className="name">Товщина</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="range"
              min={WIDTH_MIN}
              max={WIDTH_MAX}
              step="1"
              value={s.width}
              onChange={(e) => set({ width: Number(e.target.value) })}
              aria-label={`Товщина лінії ${l.label}`}
              style={{ flex: 1, maxWidth: "260px", accentColor: l.color, cursor: "pointer" }}
            />
            <WidthValue $color={l.color}>{s.width} px</WidthValue>
          </div>
        </Row>

        {s.dimOpacity !== undefined && (
          <Row title="Наскільки видно лінію, коли її вимкнено в легенді над графіком">
            <span className="name">Коли вимкнено</span>
            <DimSlider
              value={s.dimOpacity}
              color={l.color}
              label={`Прозорість вимкненої лінії ${l.label}`}
              onChange={(v) => set({ dimOpacity: v })}
            />
          </Row>
        )}

        {!l.trend && (
          <Toggles>
            <ToggleChip $active={effectiveFill} $color={l.color} $isDarkMode={isDarkMode}>
              <input type="checkbox" checked={effectiveFill} onChange={(e) => set({ fill: e.target.checked })} />
              {effectiveFill ? <BiCheck /> : <MdOutlineFormatColorFill />}
              Заливка під лінією
            </ToggleChip>
            <ToggleChip $active={s.points} $color={l.color} $isDarkMode={isDarkMode}>
              <input type="checkbox" checked={s.points} onChange={(e) => set({ points: e.target.checked })} />
              {s.points ? <BiCheck /> : <MdScatterPlot />}
              Точки / іконки
            </ToggleChip>
          </Toggles>
        )}
      </LineCard>
    );
  };

  // У повноекранному режимі модалка має бути всередині fullscreen-елемента, інакше її не видно
  const container = document.fullscreenElement || document.body;

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent
        $isDarkMode={isDarkMode}
        role="dialog"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <Header $isDarkMode={isDarkMode}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <TitleIcon>
              <BiPalette />
            </TitleIcon>
            <div>
              <h3 style={{ margin: 0, fontSize: "18px" }}>{title}</h3>
              <div style={{ fontSize: "12px", opacity: 0.6, marginTop: "2px" }}>
                Форма, тип і товщина кожної лінії. Графік оновлюється одразу.
              </div>
            </div>
          </div>
          <CloseButton onClick={onClose} aria-label="Закрити">
            <FaTimes />
          </CloseButton>
        </Header>

        <div>
          <SectionHeader>
            <SectionLabel>
              <BiLayer /> Для всіх ліній
              <Hint>
                · <BiInfoCircle />
                {allCards ? "зміни застосовуються до графіків усіх карток" : "зміни діють лише для цієї картки"}
              </Hint>
            </SectionLabel>
            <AllCardsToggle $active={allCards} $isDarkMode={isDarkMode}>
              <input type="checkbox" checked={allCards} onChange={(e) => onToggleAllCards(e.target.checked)} />
              Для всіх карток
            </AllCardsToggle>
          </SectionHeader>
          <AllLinesPanel $isDarkMode={isDarkMode}>
            <Row>
              <span className="name">Форма</span>
              <Options>
                {Object.entries(CURVES).map(([k, c]) => (
                  <OptionButton
                    key={k}
                    $active={sameCurve === k}
                    $isDarkMode={isDarkMode}
                    title={c.hint}
                    onClick={() => onApplyAll({ curve: k })}
                  >
                    <CurveSwatch curve={k} color={swatchColor} /> {c.label}
                  </OptionButton>
                ))}
              </Options>
            </Row>
            <Divider $isDarkMode={isDarkMode} />
            <Row>
              <span className="name">Тип лінії</span>
              <Options>
                {Object.entries(DASHES).map(([k, d]) => (
                  <OptionButton key={k} $active={sameDash === k} $isDarkMode={isDarkMode} onClick={() => onApplyAll({ dash: k })}>
                    <DashSwatch dashKey={k} color={swatchColor} /> {d.label}
                  </OptionButton>
                ))}
              </Options>
            </Row>
            <Divider $isDarkMode={isDarkMode} />
            <Row title="Наскільки видно лінію, коли її вимкнено в легенді над графіком">
              <span className="name">Коли вимкнено</span>
              <DimSlider
                value={commonDim}
                color="#00eeff"
                label="Прозорість вимкнених ліній"
                onChange={(v) => onApplyAll({ dimOpacity: v })}
              />
            </Row>
          </AllLinesPanel>
        </div>

        <div>
          <SectionLabel style={{ marginBottom: "10px" }}>
            <BiSliderAlt /> Кожна лінія окремо
          </SectionLabel>
          <CardsGrid>{mainLines.map(renderLineCard)}</CardsGrid>
        </div>

        {trendLines.length > 0 && (
          <div>
            <SectionLabel style={{ marginBottom: "10px" }}>
              <BiTrendingUp /> Лінії тренду
              <Hint>· видно, коли тренд увімкнено кнопкою на графіку</Hint>
            </SectionLabel>
            <CardsGrid>{trendLines.map(renderLineCard)}</CardsGrid>
          </div>
        )}

        <Footer $isDarkMode={isDarkMode}>
          <ResetButton $isDarkMode={isDarkMode} onClick={onReset}>
            <FaUndo /> Скинути до типових
          </ResetButton>
          <DoneButton $isDarkMode={isDarkMode} onClick={onClose}>
            <BiCheck size={16} /> Готово
          </DoneButton>
        </Footer>
      </ModalContent>
    </ModalOverlay>,
    container
  );
};

export default ChartStyleModal;