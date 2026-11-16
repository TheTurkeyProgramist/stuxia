import React from "react";
import styled from "styled-components";
import { IoPartlySunny, IoNewspaper } from "react-icons/io5";
import { useAiAttachments } from "./aiAttachments";

// Рожеві значки: скільки карток погоди й новин прикріплено до ШІ.
// Впізнавана іконка (сонце з хмаркою / газета) + кружечок із цифрою в кутку, як у сповіщень.
// Світла тема — насичений рожевий і біла цифра, темна — світло-рожевий і темна цифра.
const Row = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  margin-left: 2px;
`;

const Badge = styled.span`
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  flex: none;
  color: ${(p) => (p.$isDarkMode ? "#ff8cc6" : "#d6337f")};

  svg {
    width: 20px;
    height: 20px;
    max-width: none;
  }

  b {
    position: absolute;
    top: -5px;
    right: -6px;
    min-width: 14px;
    height: 14px;
    padding: 0 3px;
    box-sizing: border-box;
    border-radius: 7px;
    display: grid;
    place-items: center;
    font-size: 10px;
    font-weight: 800;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    background: ${(p) => (p.$isDarkMode ? "#ff8cc6" : "#d6337f")};
    color: ${(p) => (p.$isDarkMode ? "#3a0d24" : "#fff")};
    /* обвідка відокремлює кружечок від іконки */
    box-shadow: 0 0 0 1.5px ${(p) => (p.$isDarkMode ? "#2b2e4a" : "#eef0f3")};
  }
`;

const plural = (n, one, few, many) =>
  n % 10 === 1 && n % 100 !== 11
    ? one
    : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? few
      : many;

export default function AiAttachBadges({ isDarkMode }) {
  const cards = useAiAttachments();
  const weather = cards.filter((c) => c.type === "weather").length;
  const news = cards.length - weather;
  if (!cards.length) return null;

  const label = [
    weather && `${weather} ${plural(weather, "картка погоди", "картки погоди", "карток погоди")}`,
    news && `${news} ${plural(news, "новина", "новини", "новин")}`,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <Row role="img" aria-label={`Прикріплено до ШІ: ${label}`} title={`Прикріплено до ШІ: ${label}`}>
      {weather > 0 && (
        <Badge $isDarkMode={isDarkMode}>
          <IoPartlySunny aria-hidden="true" />
          <b>{weather}</b>
        </Badge>
      )}
      {news > 0 && (
        <Badge $isDarkMode={isDarkMode}>
          <IoNewspaper aria-hidden="true" />
          <b>{news}</b>
        </Badge>
      )}
    </Row>
  );
}
