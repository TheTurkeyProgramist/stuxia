// Те, що App бере з картки погоди ще до її завантаження. Сама картка (Weather.jsx, ~90 КБ)
// вантажиться ліниво (React.lazy в App.jsx), тож ці дрібниці живуть окремо — інакше
// статичний імпорт із Weather.jsx тягнув би всю картку в стартовий файл.
import styled from "styled-components";
import { DEFAULT_BGS } from "../Hero/defaultBgs";

export const AihelpTitle = styled.div`
  font-size: 20px;
  text-align: center;
  z-index: 400;
  width: 100px;
  margin-left: auto;
  padding: 5px 14px;
  position: relative;
    margin-bottom: 4px;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "white" : "#000")};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
    background: ${(props) => (props.$isDarkMode ? " rgba(0, 0, 0, 0.93)" : "rgb(255, 255, 255)")};
     border: ${(props) => (props.$isDarkMode ? "2px solid rgba(0, 255, 229, 0.6)" : "2px solid rgba(0, 0, 0, 0.2)")};
    `;

// Фон картки погоди за замовчуванням
export const DEFAULT_CARD_BG =
  DEFAULT_BGS.find((bg) => bg.name === "Туманний ліс")?.src || DEFAULT_BGS[0].src;

// Подія «у картки змінився фон» — щоб бокова панель міст одразу оновила фото
export const CARD_BG_CHANGE_EVENT = "weather-card-bg-change";
