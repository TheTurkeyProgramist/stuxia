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
  padding: 12px;
`;

const ModalContent = styled.div`
  background: ${(p) => (p.$isDarkMode ? "#1c1c1f" : "#fff")};
  color: ${(p) => (p.$isDarkMode ? "#fff" : "#111")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  border-radius: 14px;
  width: 100%;
  max-width: 760px;
  max-height: 94vh;
  overflow-y: auto;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const UnitsModal = ({ units, onChange, onClose, isDarkMode }) => {
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
          <SectionLabel>Система мір</SectionLabel>
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
