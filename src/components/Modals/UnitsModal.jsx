import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FaThermometerHalf, FaCloudRain, FaRulerHorizontal, FaGlobeEurope, FaFlagUsa, FaSlidersH, FaUndo, FaTimes } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { MdOutlineSpeed } from "react-icons/md";
import {
  UNIT_GROUPS,
  DEFAULT_UNITS,
  METRIC_UNITS,
  IMPERIAL_UNITS,
  detectSystem,
  makeFormatters,
} from "../../utils/units.js";

const GROUP_META = {
  temp: { icon: <FaThermometerHalf />, color: "#ffb36c", example: (f) => f.temp(20) },
  wind: { icon: <BiWind />, color: "#00b7ff", example: (f) => f.wind(5) },
  pressure: { icon: <MdOutlineSpeed />, color: "#b362ff", example: (f) => f.pressure(1013) },
  distance: { icon: <FaRulerHorizontal />, color: "#4ade80", example: (f) => `${f.visibility(10)} · ${f.height(1000)}` },
  precip: { icon: <FaCloudRain />, color: "#14b8a6", example: (f) => `${f.precip(2.5)} · ${f.snow(10)}` },
};

// Формули відповідають коефіцієнтам у utils/units.js (базові одиниці: °C, м/с, гПа, км, м, мм, см)
const CONVERSIONS = [
  {
    key: "temp",
    title: "Температура",
    lines: ["°F = °C × 9/5 + 32", "K = °C + 273,15"],
    advice: "°C — найзручніша для повсякденного життя, нуль збігається з замерзанням води. °F має сенс лише якщо ви звикли до американської шкали. K потрібні майже виключно в науці.",
  },
  {
    key: "wind",
    title: "Швидкість вітру",
    lines: ["км/год = м/с × 3,6", "миль/год = м/с × 2,237", "вузли = м/с × 1,944"],
    advice: "м/с — стандарт метеорологів. км/год легше уявити в порівнянні з авто, вузли потрібні морякам і пілотам.",
  },
  {
    key: "pressure",
    title: "Атмосферний тиск",
    lines: ["мм рт. ст. = гПа × 0,750", "кПа = гПа ÷ 10", "inHg = гПа × 0,02953"],
    advice: "Норма — приблизно 1013 гПа, або 760 мм рт. ст. В Україні звична мм рт. ст., у прогнозах і на графіках — гПа. inHg потрібні лише для американських джерел.",
  },
  {
    key: "distance",
    title: "Відстань і висота",
    lines: ["милі = км × 0,6214", "фути = м × 3,281"],
    advice: "Міняйте на милі/фути тільки якщо звикли до них, наприклад під час подорожі до США чи Британії.",
  },
  {
    key: "precip",
    title: "Опади і сніг",
    lines: ["дюйми (опади) = мм ÷ 25,4", "дюйми (сніг) = см ÷ 2,54"],
    advice: "Мм краще для опадів: 1 мм = 1 літр води на кв. метр. Дюйми дають дрібні числа (0,04 in), тому їх складніше читати.",
  },
];

const SYSTEMS = [
  { key: "metric", label: "Метрична", hint: "°C, м/с, гПа, км, мм", icon: <FaGlobeEurope />, units: METRIC_UNITS },
  { key: "imperial", label: "Імперська", hint: "°F, миль/год, inHg, милі, дюйми", icon: <FaFlagUsa />, units: IMPERIAL_UNITS },
  { key: "custom", label: "Користувацька", hint: "Обрати кожну одиницю окремо", icon: <FaSlidersH /> },
];

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const ModalContent = styled.div`
  background: ${(p) => (p.$isDarkMode ? "#1c1c1f" : "#fff")};
  color: ${(p) => (p.$isDarkMode ? "#fff" : "#111")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  border-radius: 14px;
  box-sizing: border-box;
  width: 95vw;
  height: 95vh;
  overflow-y: auto;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  /* При фіксованій висоті flex-діти інакше стискаються й шапка з кнопкою зникає */
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

  @media (max-width: 600px) {
    top: -16px;
    margin: -16px -16px 0;
    padding: 12px 16px;
  }
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
`;

const SystemRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SystemButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 8px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? "#00eeff" : p.$isDarkMode ? "#444" : "#ccc")};
  background: ${(p) => (p.$active ? (p.$isDarkMode ? "rgba(0,238,255,0.15)" : "rgba(0,140,255,0.12)") : "transparent")};
  color: inherit;
  transition: all 0.15s;
  &:hover {
    border-color: #00eeff;
  }
  .icon {
    font-size: 20px;
    color: ${(p) => (p.$active ? "#00eeff" : "inherit")};
  }
  .label {
    font-size: 14px;
    font-weight: ${(p) => (p.$active ? 700 : 500)};
  }
  .hint {
    font-size: 11px;
    opacity: 0.6;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  /* Непарна остання картка розтягується на всю ширину */
  & > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const GroupCard = styled.div`
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.025)")};
  border-left: 3px solid ${(p) => p.$color};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  .icon {
    display: inline-flex;
    font-size: 18px;
    color: ${(p) => p.$color};
  }
  .example {
    margin-left: auto;
    font-size: 12px;
    font-weight: 500;
    opacity: 0.65;
    white-space: nowrap;
  }
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const OptionButton = styled.button`
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? "#00eeff" : p.$isDarkMode ? "#555" : "#bbb")};
  background: ${(p) => (p.$active ? (p.$isDarkMode ? "#00eeff" : "#008cff") : "transparent")};
  color: ${(p) => (p.$active ? "#000" : "inherit")};
  font-weight: ${(p) => (p.$active ? 700 : 400)};
  transition: all 0.15s;
  &:hover {
    border-color: #00eeff;
  }
`;

const Formulas = styled.details`
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  border-radius: 10px;
  padding: 10px 12px;

  summary {
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
  }
  .formula-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 12px;
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
  .formula-card {
    border-left: 3px solid ${(p) => (p.$isDarkMode ? "#00eeff" : "#008cff")};
    padding-left: 10px;
    font-size: 13px;
    line-height: 1.45;
    &:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }
  .formula-card strong {
    display: block;
    margin-bottom: 2px;
  }
  .formula-card code {
    display: block;
    font-family: Consolas, monospace;
  }
  .formula-card p {
    margin: 6px 0 0;
    opacity: 0.75;
  }
  .general {
    margin: 12px 0 0;
    font-size: 12px;
    opacity: 0.7;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Preview = styled.div`
  font-size: 13px;
  opacity: 0.8;
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

const ScopeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
  & > ${SectionLabel} {
    margin-bottom: 0;
  }
  .hint {
    font-size: 12px;
    opacity: 0.65;
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

const UnitsModal = ({ units, onChange, onClose, isDarkMode, allCards = true, onToggleAllCards }) => {
  const [forcedCustom, setForcedCustom] = useState(false);
  const system = forcedCustom ? "custom" : detectSystem(units);
  const fmt = makeFormatters(units);

  const changeOne = (next) => {
    setForcedCustom(false);
    onChange(next);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Портал у body, щоб модалку не перекривали елементи з інших stacking-контекстів
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent
        $isDarkMode={isDarkMode}
        role="dialog"
        aria-label="Одиниці виміру"
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
            <FaRulerHorizontal style={{ color: "#00eeff" }} /> Одиниці виміру
          </h3>
          <CloseButton onClick={onClose} aria-label="Закрити">
            <FaTimes />
          </CloseButton>
        </Header>

        <div>
          <ScopeRow>
            <SectionLabel>Система мір</SectionLabel>
            {onToggleAllCards && (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span className="hint">
                  {allCards ? "Одиниці однакові для всіх карток" : "Одиниці діють лише для цієї картки"}
                </span>
                <AllCardsToggle $active={allCards} $isDarkMode={isDarkMode}>
                  <input type="checkbox" checked={allCards} onChange={(e) => onToggleAllCards(e.target.checked)} />
                  Для всіх карток
                </AllCardsToggle>
              </div>
            )}
          </ScopeRow>
          <SystemRow>
            {SYSTEMS.map((s) => (
              <SystemButton
                key={s.key}
                $active={system === s.key}
                $isDarkMode={isDarkMode}
                onClick={() => {
                  setForcedCustom(s.key === "custom");
                  if (s.units) onChange({ ...s.units });
                }}
              >
                <span className="icon">{s.icon}</span>
                <span className="label">{s.label}</span>
                <span className="hint">{s.hint}</span>
              </SystemButton>
            ))}
          </SystemRow>
        </div>

        <div>
          <SectionLabel>Окремі одиниці</SectionLabel>
          <Grid>
            {UNIT_GROUPS.map((g) => {
              const meta = GROUP_META[g.key];
              return (
                <GroupCard key={g.key} $isDarkMode={isDarkMode} $color={meta.color}>
                  <GroupHeader $color={meta.color}>
                    <span className="icon">{meta.icon}</span>
                    {g.title}
                    <span className="example">{meta.example(fmt)}</span>
                  </GroupHeader>
                  <Options>
                    {g.options.map((o) => (
                      <OptionButton
                        key={o.key}
                        $active={units[g.key] === o.key}
                        $isDarkMode={isDarkMode}
                        title={o.hint}
                        onClick={() => changeOne({ ...units, [g.key]: o.key })}
                      >
                        {o.label}
                      </OptionButton>
                    ))}
                  </Options>
                </GroupCard>
              );
            })}
          </Grid>
        </div>

        <Formulas $isDarkMode={isDarkMode}>
          <summary>Як переводити одиниці і чи варто</summary>
          <div className="formula-list">
            {CONVERSIONS.map((c) => (
              <div className="formula-card" key={c.key}>
                <strong>{c.title}</strong>
                {c.lines.map((line) => (
                  <code key={line}>{line}</code>
                ))}
                <p>{c.advice}</p>
              </div>
            ))}
          </div>
          <p className="general">
            Дані завжди зберігаються в метричних одиницях, а перемикач лише перераховує числа для показу.
            Точність не втрачається, тому змінюйте одиницю вільно: це нічого не ламає. Якщо вагаєтесь, залиште метричну систему.
          </p>
        </Formulas>

        <Footer>
          <Preview>
            Приклад: {fmt.temp(20)} · {fmt.wind(5)} · {fmt.pressure(1013)}
          </Preview>
          <ResetButton $isDarkMode={isDarkMode} onClick={() => { setForcedCustom(false); onChange({ ...DEFAULT_UNITS }); }}>
            <FaUndo /> Скинути до типових
          </ResetButton>
        </Footer>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default UnitsModal;
