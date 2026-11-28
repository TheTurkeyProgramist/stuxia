// Вибір висоти — випадаючий список праворуч, як у Ventusky, з плавним розгортанням.
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { altitudeText } from "./styxiaDays.js";
import { ALTITUDES } from "./styxiaLayers.js";

const EASE = [0.22, 1, 0.36, 1];

// Тягнеться до шкали часу, щоб довгий список гортався, а не ліз на неї; порожнє місце не ловить мишу
const Box = styled(motion.div)`
  position: absolute;
  right: 8px;
  top: 92px;
  bottom: 72px;
  z-index: ${(p) => (p.$open ? 5 : 2)};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;

const surface = `
  border: 1px solid rgba(255, 214, 130, 0.4);
  background: rgba(14, 17, 30, 0.94);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-weight: 700;
  font-family: var(--font-family);
`;

const Toggle = styled.button`
  ${surface}
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;

  svg {
    color: #ffd88a;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
`;

// Рамка анімує висоту, а гортається вкладений список
const Drop = styled(motion.div)`
  ${surface}
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  border-radius: 16px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 0;
  padding: 4px;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
`;

const Item = styled.button`
  flex-shrink: 0;
  padding: 6px 10px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  &[aria-pressed="true"] {
    background: linear-gradient(135deg, #ffe29a 0%, #ffb02e 48%, #f07a00 100%);
    color: #2a1500;
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: -2px;
  }
`;

const StyxiaAltitude = ({ levels, value, onChange, lang, distance, pressureUnit, label, motionProps }) => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const toggleRef = useRef(null);
  const reduced = useReducedMotion();

  // Біля пункту — ізобаричний рівень моделі, з якого взято дані
  const text = (meters) => {
    const mb = ALTITUDES.find((item) => item.meters === meters)?.mb;
    return `${mb ? `${mb} ${pressureUnit}, ` : ""}${altitudeText(meters, lang, distance)}`;
  };

  const close = () => {
    setOpen(false);
    toggleRef.current.focus({ preventScroll: true });
  };

  // Список закривається кліком повз нього та клавішею Esc
  useEffect(() => {
    if (!open) return undefined;
    const doc = boxRef.current.ownerDocument;
    const onDown = (e) => {
      if (!boxRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    doc.addEventListener("pointerdown", onDown);
    doc.addEventListener("keydown", onKey);
    return () => {
      doc.removeEventListener("pointerdown", onDown);
      doc.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Box {...motionProps} ref={boxRef} $open={open}>
      <Toggle ref={toggleRef} type="button" aria-expanded={open} aria-label={`${label}: ${text(value)}`} title={label} onClick={() => setOpen((shown) => !shown)}>
        {text(value)}
        <FiChevronDown aria-hidden="true" />
      </Toggle>
      <AnimatePresence>
        {open && (
          <Drop
            role="group"
            aria-label={label}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
          >
            <List>
              {levels.map((meters) => (
                <Item
                  key={meters}
                  type="button"
                  aria-pressed={meters === value}
                  onClick={() => {
                    onChange(meters);
                    close();
                  }}
                >
                  {text(meters)}
                </Item>
              ))}
            </List>
          </Drop>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default StyxiaAltitude;
