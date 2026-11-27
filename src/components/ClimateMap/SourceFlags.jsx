import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaDollarSign, FaHourglassHalf } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import { GAME_LIMIT_MINUTES } from "./gameLimit.js";

// Значки на картках вбудованих джерел (власні фрейми їх не мають):
// diia — потрібен вхід через Дію, ads — є реклама, money — платні функції, підписка або донати,
// limit — ліміт часу від самої Стихії
const FLAGS = {
  diia: { text: "Дія", labelKey: "climateMap.sources.airTargetsNote", bg: "#000000", color: "#ffffff" },
  ads: { Icon: RiAdvertisementFill, labelKey: "climateMap.flags.ads", bg: "#ffcc33", color: "#2a1a00" },
  money: { Icon: FaDollarSign, labelKey: "climateMap.flags.money", bg: "#2e9e5b", color: "#ffffff" },
  limit: { Icon: FaHourglassHalf, labelKey: "climateMap.flags.limit", bg: "#7a4fd0", color: "#ffffff" },
};

const Row = styled.span`
  display: flex;
  align-self: flex-start;
  margin-right: auto;
  gap: 4px;
  margin-bottom: 4px;
  text-shadow: none;
`;

const Flag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  box-sizing: border-box;
  border-radius: 999px;
  background: ${(p) => p.$bg};
  color: ${(p) => p.$color};
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
`;

const Legend = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  font-size: 10px;
  line-height: 1.3;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.65)" : "rgba(30,10,0,0.65)")};

  li { display: flex; align-items: center; gap: 6px; }
`;

const FlagIcon = ({ id, label }) => {
  const { Icon, text, bg, color } = FLAGS[id];
  return (
    <Flag $bg={bg} $color={color} title={label} role="img" aria-label={label}>
      {Icon ? <Icon aria-hidden="true" /> : text}
    </Flag>
  );
};

const useFlagLabel = () => {
  const { t } = useTranslation();
  return (id) => t(FLAGS[id].labelKey, { min: GAME_LIMIT_MINUTES });
};

export const SourceFlags = ({ flags }) => {
  const label = useFlagLabel();
  if (!flags?.length) return null;
  return (
    <Row>
      {flags.map((id) => <FlagIcon key={id} id={id} label={label(id)} />)}
    </Row>
  );
};

// Пояснення значків: на дотикових екранах підказки title не видно
export const FlagsLegend = ({ isDarkMode }) => {
  const label = useFlagLabel();
  return (
    <Legend $isDarkMode={isDarkMode}>
      {Object.keys(FLAGS).map((id) => (
        <li key={id}>
          <FlagIcon id={id} label={label(id)} />
          <span>{label(id)}</span>
        </li>
      ))}
    </Legend>
  );
};
