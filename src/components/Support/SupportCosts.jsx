import { useState } from "react";
import styled from "styled-components";
import {
  DONATE_URL,
  DONATION_FEE,
  VISIBLE_COSTS,
  MONTHLY_TOTAL,
  MONTHLY_GOAL,
  formatUah,
} from "./supportConfig";
import { useSupportProgress } from "./useSupportProgress";

const Section = styled.section`
  margin: 6px 10px;
  padding: 10px 14px;
  border-radius: 14px;
  background: rgba(10, 4, 4, 0.82);
  border: 1px solid rgba(255, 108, 108, 0.45);
  color: #f6eee8;
  font-size: 13px;
  line-height: 1.45;
`;

// Широкий екран: текст ліворуч, смужка й кнопка таблиці праворуч
const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 24px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
  letter-spacing: 0.5px;
`;

const Lead = styled.p`
  margin: 0 0 6px;
  opacity: 0.85;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 7px 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    vertical-align: top;
  }
  th {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.6;
    font-weight: 700;
  }
  td:last-child, th:last-child { text-align: right; white-space: nowrap; }
  tfoot td { font-weight: 800; border-bottom: none; }
`;

const GoalLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  padding: 8px;
  margin: 0 -8px;
  transition: background 0.2s;
  &:hover { background: rgba(255, 255, 255, 0.05); }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`;

const GoalLabel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
  font-weight: 700;
`;

const Track = styled.div`
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  width: ${(p) => p.$pct}%;
  min-width: ${(p) => (p.$pct > 0 ? "12px" : "0")};
  border-radius: inherit;
  background: linear-gradient(90deg, #f3a83b 0%, #ffd36b 100%);
  transition: width 0.6s ease;
`;

const ToggleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 211, 107, 0.45);
  background: rgba(255, 211, 107, 0.08);
  color: #ffe3a3;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(255, 211, 107, 0.16);
    border-color: rgba(255, 211, 107, 0.7);
  }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(${(p) => (p.$open ? "90deg" : "0deg")});
`;

const Hint = styled.span`
  font-weight: 400;
  opacity: 0.7;
`;

// Плавне розгортання: grid-рядок 0fr → 1fr анімує висоту без замірів
const Collapse = styled.div`
  display: grid;
  grid-template-rows: ${(p) => (p.$open ? "1fr" : "0fr")};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transition: grid-template-rows 0.35s ease, opacity 0.3s ease;

  & > div {
    overflow: hidden;
    min-height: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Позначка, що сума береться з Donatello автоматично
const LiveDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #8ff0b4;
  vertical-align: middle;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #2fbf71;
    box-shadow: 0 0 6px #2fbf71;
  }
`;

const Note = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  opacity: 0.7;
`;

const SupportCosts = () => {
  const [open, setOpen] = useState(false);
  const { raised, target, live } = useSupportProgress();
  const pct = Math.min(100, Math.round((raised / target) * 100));
  const feePct = Math.round(DONATION_FEE * 100);

  return (
    <Section aria-labelledby="support-costs-title">
      <Columns>
      <div>
        <Title id="support-costs-title">Скільки коштує Стихія</Title>
        <Lead>
          Прогноз, кілька точок і новини завжди будуть безкоштовними для всіх. Але сайт
          живе не з повітря — ось чесні цифри, без «мільйонів розробнику».
        </Lead>
        <Note>
          В Україні є важливіші збори, і ми це розуміємо. Якщо хочете допомогти Стихії
          жити — ось банка. Донатерам дістається хіба що значок «Друг індиків» біля
          акаунта, функції від цього не змінюються.
        </Note>
      </div>

      <div>
      <GoalLink
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Цього місяця зібрано ${raised} з ${target} гривень. Відкрити банку на Donatello`}
      >
        <GoalLabel>
          <span>
            Цього місяця зібрано
            {live && <LiveDot title="Оновлюється автоматично з Donatello">наживо</LiveDot>}
          </span>
          <span>
            {formatUah(raised)} / {formatUah(target)}
          </span>
        </GoalLabel>
        <Track role="progressbar" aria-valuemin={0} aria-valuemax={target} aria-valuenow={raised}>
          <Fill $pct={pct} />
        </Track>
      </GoalLink>

      <ToggleBtn
        type="button"
        aria-expanded={open}
        aria-controls="support-costs-table"
        title={open ? "Згорнути таблицю витрат" : "Розгорнути таблицю витрат"}
        onClick={() => setOpen((v) => !v)}
      >
        <Arrow $open={open} aria-hidden="true">▸</Arrow>
        {open ? "Згорнути таблицю витрат" : "Розгорнути таблицю витрат"}
        <Hint>· ≈ {formatUah(MONTHLY_GOAL)} на місяць</Hint>
      </ToggleBtn>
      </div>
      </Columns>
      <Collapse $open={open} id="support-costs-table" aria-hidden={!open}>
        <div>
      <Table style={{ marginTop: 8 }}>
        <thead>
          <tr>
            <th scope="col">Стаття</th>
            <th scope="col">Ціна</th>
            <th scope="col">На місяць</th>
          </tr>
        </thead>
        <tbody>
          {VISIBLE_COSTS.map((c) => (
            <tr key={c.id}>
              <td>{c.label}</td>
              <td>{c.price}</td>
              <td>≈ {formatUah(c.monthly)}</td>
            </tr>
          ))}
          <tr>
            <td>Комісія платформи донатів</td>
            <td>{feePct}% від донату</td>
            <td>≈ {formatUah(MONTHLY_GOAL - MONTHLY_TOTAL)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Разом</td>
            <td>≈ {formatUah(MONTHLY_GOAL)}/міс</td>
          </tr>
        </tfoot>
      </Table>
        </div>
      </Collapse>
    </Section>
  );
};

export default SupportCosts;
