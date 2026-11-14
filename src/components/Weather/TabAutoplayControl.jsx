import React from "react";
import styled from "styled-components";
import { TAB_AUTOPLAY_STEPS, formatTabAutoplay } from "../../utils/betaFeatures";

/* Мінімалістичний перемикач + шкала частоти автоперемикання вкладок картки погоди.
   Спільний для меню картки (⚙) і загальних налаштувань.
   title — якщо задано, стоїть в одному рядку з перемикачем. */

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
  width: 100%;
  max-width: 260px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

/* Простий перемикач без тексту */
const Switch = styled.button`
  position: relative;
  flex-shrink: 0;
  width: 30px;
  height: 16px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: ${(p) => (p.$on ? p.$accent : "rgba(150, 150, 150, 0.45)")};
  cursor: pointer;
  transition: background 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: ${(p) => (p.$on ? "16px" : "2px")};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.2s ease;
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.$accent};
    outline-offset: 2px;
  }
`;

const SliderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/* Тонка доріжка: зліва від повзунка — акцент (через --fill) */
const Range = styled.input`
  -webkit-appearance: none;
  appearance: none;
  flex: 1 1 auto;
  min-width: 0;
  height: 14px;
  margin: 0;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      ${(p) => p.$accent} 0%,
      ${(p) => p.$accent} var(--fill),
      rgba(255, 255, 255, 0.18) var(--fill)
    );
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    margin-top: -4.5px;
    border-radius: 50%;
    background: ${(p) => p.$accent};
    border: none;
  }
  &::-moz-range-track {
    height: 3px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
  }
  &::-moz-range-progress {
    height: 3px;
    border-radius: 999px;
    background: ${(p) => p.$accent};
  }
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(p) => p.$accent};
    border: none;
  }
  &:focus-visible {
    outline: none;
  }
  &:focus-visible::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px ${(p) => p.$accent}55;
  }
`;

const Value = styled.span`
  flex-shrink: 0;
  min-width: 44px;
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;
  opacity: 0.9;
`;

const TabAutoplayControl = ({ value, onChange, accent = "#00eeff", title = null }) => {
  const maxIndex = TAB_AUTOPLAY_STEPS.length - 1;
  const stepIndex = Math.max(0, TAB_AUTOPLAY_STEPS.indexOf(value.seconds));
  const fill = `${(stepIndex / maxIndex) * 100}%`;

  return (
    <Wrap>
      <Header>
        {title && <span>{title}</span>}
        <Switch
          type="button"
          role="switch"
          aria-checked={value.on}
          aria-label={`Автоперемикання вкладок: ${value.on ? "увімкнено" : "вимкнено"}`}
          title={value.on ? "Вимкнути" : "Увімкнути"}
          $on={value.on}
          $accent={accent}
          onClick={() => onChange({ ...value, on: !value.on })}
        />
      </Header>
      {value.on && (
        <SliderRow>
          <Range
            type="range"
            min={0}
            max={maxIndex}
            step={1}
            value={stepIndex}
            style={{ "--fill": fill }}
            $accent={accent}
            aria-label="Частота автоперемикання (від 10 с до 5 хв)"
            aria-valuetext={formatTabAutoplay(value.seconds)}
            title="Від 10 с до 5 хв"
            onChange={(e) => onChange({ ...value, seconds: TAB_AUTOPLAY_STEPS[Number(e.target.value)] })}
          />
          <Value>{formatTabAutoplay(value.seconds)}</Value>
        </SliderRow>
      )}
    </Wrap>
  );
};

export default TabAutoplayControl;
