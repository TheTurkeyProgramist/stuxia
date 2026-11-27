// Вибір висоти — стовпчик кнопок праворуч, як у Ventusky: що вище кнопка, то вище над землею.
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { altitudeText } from "./styxiaDays.js";

const Column = styled(motion.div)`
  position: absolute;
  right: 8px;
  top: 92px;
  z-index: 2;
  display: flex;
  flex-direction: column-reverse;
  gap: 3px;
  padding: 4px;
  border: 1px solid rgba(255, 214, 130, 0.4);
  border-radius: 16px;
  background: rgba(14, 17, 30, 0.88);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
`;

const Level = styled.button`
  padding: 5px 8px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #fff;
  font-size: 11.5px;
  font-weight: 700;
  font-family: var(--font-family);
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: scale(1.05);
  }

  &[aria-pressed="true"] {
    background: linear-gradient(135deg, #ffe29a 0%, #ffb02e 48%, #f07a00 100%);
    color: #2a1500;
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyxiaAltitude = ({ levels, value, onChange, lang, distance, label, motionProps }) => (
  <Column {...motionProps} role="group" aria-label={label} title={label}>
    {levels.map((meters) => (
      <Level key={meters} type="button" aria-pressed={meters === value} onClick={() => onChange(meters)}>
        {altitudeText(meters, lang, distance)}
      </Level>
    ))}
  </Column>
);

export default StyxiaAltitude;
