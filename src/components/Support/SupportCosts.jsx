import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  DONATE_URL,
  DONATION_FEE,
  VISIBLE_COSTS,
  MONTHLY_TOTAL,
  MONTHLY_GOAL,
  formatUah,
  isSupporter,
  rememberSupporter,
} from "./supportConfig";
import { useSupportProgress, claimSupporterBadge, kyivMonth } from "./useSupportProgress";

// «у листопаді» — для підпису шкали
const MONTHS_IN = [
  "січні", "лютому", "березні", "квітні", "травні", "червні",
  "липні", "серпні", "вересні", "жовтні", "листопаді", "грудні",
];

const daysWord = (n) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "день";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "дні";
  return "днів";
};

const MonthHint = styled.div`
  margin-top: 5px;
  font-size: 11px;
  opacity: 0.65;
`;

// ───────────── Анімації ─────────────

const shimmer = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(250%); }
`;

const glow = keyframes`
  0%   { box-shadow: 0 0 0 rgba(255, 211, 107, 0); }
  35%  { box-shadow: 0 0 18px rgba(255, 211, 107, 0.85); }
  100% { box-shadow: 0 0 0 rgba(255, 211, 107, 0); }
`;

const pop = keyframes`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.08); color: #fff3c4; }
  100% { transform: scale(1); }
`;

const reducedMotion = () => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

// Число, що плавно «набігає» до нового значення
const useAnimatedNumber = (value, duration = 1200) => {
  const [shown, setShown] = useState(0);
  const fromRef = useRef(0);

  useEffect(() => {
    if (reducedMotion()) {
      fromRef.current = value;
      setShown(value);
      return undefined;
    }
    const from = fromRef.current;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = from + (value - from) * eased;
      fromRef.current = current;
      setShown(current);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return shown;
};

// ───────────── Стилі ─────────────

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

// Широкий екран: текст ліворуч, смужка й кнопки праворуч
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
  margin-top: 8px;

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
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-weight: 700;
`;

const Amount = styled.span`
  display: inline-block;
  font-variant-numeric: tabular-nums;
  ${(p) =>
    p.$bump &&
    css`
      animation: ${pop} 0.9s ease;
    `}
`;

const Track = styled.div`
  position: relative;
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
`;

const Fill = styled.div`
  position: relative;
  height: 100%;
  width: ${(p) => p.$pct}%;
  min-width: ${(p) => (p.$pct > 0 ? "12px" : "0")};
  border-radius: inherit;
  background: linear-gradient(90deg, #f3a83b 0%, #ffd36b 100%);
  transition: width 1.4s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;

  ${(p) =>
    p.$bump &&
    css`
      animation: ${glow} 1.4s ease;
    `}

  /* легкий відблиск, що пробігає по смужці */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 40%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
    animation: ${shimmer} 2.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
    &::after { display: none; }
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const ToggleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
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

const ClaimForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 211, 107, 0.06);
  border: 1px dashed rgba(255, 211, 107, 0.35);

  label {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 11px;
    font-weight: 700;
    opacity: 0.9;
  }
  input {
    padding: 6px 8px;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    font-size: 13px;
  }
  input:focus-visible { outline: 2px solid #00afce; outline-offset: 1px; }
`;

const ClaimSubmit = styled.button`
  padding: 7px 14px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
  color: #2b1313;
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  &:disabled { opacity: 0.6; cursor: wait; }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`;

const ClaimMessage = styled.p`
  flex-basis: 100%;
  margin: 2px 0 0;
  font-size: 12px;
  color: ${(p) => (p.$ok ? "#8ff0b4" : "#ffc2a8")};
`;

// ───────────── Значок «Друг індиків» ─────────────

const SupporterClaim = ({ user, onUserUpdate }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState({ state: "idle", text: "" });

  if (!user) {
    return (
      <ClaimMessage as="div" style={{ marginTop: 10 }}>
        Увійдіть в акаунт (кнопка «Акаунт» угорі), щоб отримати значок «Друг індиків».
      </ClaimMessage>
    );
  }

  if (isSupporter(user)) {
    return (
      <ClaimMessage as="div" $ok style={{ marginTop: 10 }}>
        🦃 Ви — Друг індиків. Дякуємо, що підтримуєте Стихію!
      </ClaimMessage>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", text: "" });
    const res = await claimSupporterBadge({ name: name.trim(), amount });
    if (res.ok) {
      rememberSupporter(user.uid);
      onUserUpdate?.({ ...user, isSupporter: true, supporterSince: Date.now() });
      setStatus({ state: "ok", text: "Готово! Значок 🦃 уже біля вашого акаунта. Дякуємо!" });
    } else {
      setStatus({
        state: "error",
        text:
          res.error ||
          "Не знайшли такого донату. Перевірте ім'я (як на Donatello) і суму. Свіжий донат може з'явитися за 2–3 хвилини.",
      });
    }
  };

  return (
    <ClaimForm onSubmit={onSubmit}>
      <label>
        Ім'я, яке ви вказали на Donatello
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          required
          autoComplete="nickname"
        />
      </label>
      <label>
        Сума, грн
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          inputMode="decimal"
          pattern="[0-9]+([.,][0-9]{1,2})?"
          required
          style={{ width: 90 }}
        />
      </label>
      <ClaimSubmit type="submit" disabled={status.state === "loading"}>
        {status.state === "loading" ? "Перевіряємо…" : "Отримати значок"}
      </ClaimSubmit>
      {status.text && (
        <ClaimMessage $ok={status.state === "ok"} role="status">
          {status.text}
        </ClaimMessage>
      )}
    </ClaimForm>
  );
};

// ───────────── Блок «Скільки коштує Стихія» ─────────────

const SupportCosts = ({ user, onUserUpdate }) => {
  const [openTable, setOpenTable] = useState(false);
  const [openClaim, setOpenClaim] = useState(false);
  const { raised, target, live, month } = useSupportProgress();
  const monthIndex = Number(String(month).slice(5, 7)) - 1;
  const monthName = MONTHS_IN[monthIndex] ?? "цьому місяці";
  const { daysLeft } = kyivMonth();
  const feePct = Math.round(DONATION_FEE * 100);

  // Смужка стартує з нуля й плавно доїжджає до значення — і так само при кожному оновленні
  const targetPct = Math.min(100, (raised / target) * 100);
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setPct(targetPct));
    return () => cancelAnimationFrame(frame);
  }, [targetPct]);

  // Короткий відблиск, коли сума зросла під час перегляду (новий донат).
  // Перше живе значення — не «новий донат», тож на нього не реагуємо.
  const [bump, setBump] = useState(false);
  const prevRaised = useRef(raised);
  const wasLive = useRef(live);
  useEffect(() => {
    const isNewDonation = wasLive.current && raised > prevRaised.current;
    prevRaised.current = raised;
    wasLive.current = live;
    if (!isNewDonation) return undefined;
    setBump(true);
    const t = setTimeout(() => setBump(false), 1400);
    return () => clearTimeout(t);
  }, [raised, live]);

  const shownRaised = useAnimatedNumber(raised);

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
            aria-label={`У ${monthName} зібрано ${raised} з ${target} гривень. Відкрити банку на Donatello`}
          >
            <GoalLabel>
              <span>
                Зібрано в {monthName}
                {live && <LiveDot title="Оновлюється автоматично з Donatello">наживо</LiveDot>}
              </span>
              <Amount $bump={bump} key={bump ? "bump" : "still"}>
                {formatUah(shownRaised)} / {formatUah(target)}
              </Amount>
            </GoalLabel>
            <Track role="progressbar" aria-valuemin={0} aria-valuemax={target} aria-valuenow={raised}>
              <Fill $pct={pct} $bump={bump} />
            </Track>
            <MonthHint>
              Шкала обнуляється 1-го числа кожного місяця · до кінця місяця ще {daysLeft}{" "}
              {daysWord(daysLeft)}
            </MonthHint>
          </GoalLink>

          <ButtonsRow>
            <ToggleBtn
              type="button"
              aria-expanded={openTable}
              aria-controls="support-costs-table"
              title={openTable ? "Згорнути таблицю витрат" : "Розгорнути таблицю витрат"}
              onClick={() => setOpenTable((v) => !v)}
            >
              <Arrow $open={openTable} aria-hidden="true">▸</Arrow>
              {openTable ? "Згорнути таблицю витрат" : "Розгорнути таблицю витрат"}
              <Hint>· ≈ {formatUah(MONTHLY_GOAL)}/міс</Hint>
            </ToggleBtn>
            <ToggleBtn
              type="button"
              aria-expanded={openClaim}
              aria-controls="support-claim"
              onClick={() => setOpenClaim((v) => !v)}
            >
              <Arrow $open={openClaim} aria-hidden="true">▸</Arrow>
              🦃 Я задонатив — отримати значок
            </ToggleBtn>
          </ButtonsRow>
        </div>
      </Columns>

      <Collapse $open={openClaim} id="support-claim" aria-hidden={!openClaim}>
        <div>
          <SupporterClaim user={user} onUserUpdate={onUserUpdate} />
        </div>
      </Collapse>

      <Collapse $open={openTable} id="support-costs-table" aria-hidden={!openTable}>
        <div>
          <Table>
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
