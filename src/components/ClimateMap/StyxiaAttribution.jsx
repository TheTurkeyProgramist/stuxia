// Підпис авторства й джерел даних «Карти Стихії»: кнопка «i», текст із посиланнями й хрестик.
// Зовсім прибрати підпис не можна — цього вимагають ліцензії OpenStreetMap і OpenFreeMap, тому «i» завжди
// на місці, а текст людина може згорнути (плавно) й розгорнути назад; вибір пам'ятається.
import React, { useState } from "react";
import styled from "styled-components";
import { FiInfo, FiX } from "react-icons/fi";
import { pressable } from "./styxiaMotion.js";

const STORAGE_KEY = "styxia_map_attribution";

const readOpen = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== "0";
  } catch {
    return true;
  }
};

const Wrap = styled.div`
  position: absolute;
  right: 8px;
  /* Над повзунком часу; коли його сховано («Приховати все») — опускається вниз, але не зникає */
  bottom: ${(p) => (p.$lifted ? "70px" : "8px")};
  z-index: 2;
  transition: bottom 0.26s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const InfoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--sx-border);
  background: var(--sx-surface);
  color: var(--sx-text);
  font-size: 15px;
  cursor: pointer;
  ${pressable}

  &:hover {
    background: var(--sx-surface-hover);
    border-color: var(--sx-border-strong);
  }

  &:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 2px;
  }
`;

// Текст лежить ліворуч від «i» і не зсуває її: зникає плавно (прозорість і зсув), а не пропадає
const Text = styled.div`
  position: absolute;
  right: 34px;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  max-width: calc(100cqw - 64px);
  padding: 3px 4px 3px 10px;
  border-radius: 14px;
  background: var(--sx-surface);
  color: var(--sx-text-dim);
  font-size: 11px;
  line-height: 1.45;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transform: ${(p) => (p.$open ? "none" : "translateX(10px)")};
  visibility: ${(p) => (p.$open ? "visible" : "hidden")};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition:
    opacity 0.22s ease,
    transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1),
    visibility 0s linear ${(p) => (p.$open ? "0s" : "0.26s")};

  a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  a:hover {
    color: var(--sx-text);
  }

  button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: var(--sx-text);
    font-size: 14px;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  button:hover {
    background: var(--sx-hover);
  }

  button:focus-visible {
    outline: 2px solid #ffd166;
    outline-offset: 1px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyxiaAttribution = ({ t, ukrainian, lifted }) => {
  const [open, setOpen] = useState(readOpen);
  const change = (value) => {
    setOpen(value);
    try {
      localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
      /* нема сховища — не біда */
    }
  };
  const link = (href, label) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );

  return (
    <Wrap $lifted={lifted}>
      <Text id="styxia-attribution" $open={open} inert={!open}>
        <span>
          {link("https://www.nco.ncep.noaa.gov/pmb/products/gfs/", "NOAA GFS")}
          {ukrainian && (
            <>
              {" · "}
              {link("https://www.geoboundaries.org/", "geoBoundaries")}
              {" · "}
              {link("https://ubilling.net.ua/", "ubilling.net.ua")}
            </>
          )}
          {" | "}
          {link("https://openfreemap.org/", "OpenFreeMap")} © {link("https://openmaptiles.org/", "OpenMapTiles")} Data from{" "}
          {link("https://www.openstreetmap.org/copyright", "OpenStreetMap")}
        </span>
        <button type="button" aria-label={t("climateMap.styxia.legendCollapse")} onClick={() => change(false)}>
          <FiX aria-hidden="true" />
        </button>
      </Text>
      <InfoButton
        type="button"
        aria-expanded={open}
        aria-controls="styxia-attribution"
        aria-label={t("climateMap.styxia.attribution")}
        onClick={() => change(!open)}
      >
        <FiInfo aria-hidden="true" />
      </InfoButton>
    </Wrap>
  );
};

export default StyxiaAttribution;
