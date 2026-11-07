import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { DONATE_URL, isSupporter } from "./supportConfig";
import {
  SUPPORT_EVENT,
  canShow,
  markShown,
  markFirstVisit,
  markDonateClicked,
} from "./supportNudge";

// Через скільки після завантаження перевіряти «місячну» плашку
const MONTHLY_DELAY_MS = 90 * 1000;

const MESSAGES = {
  monthly: "Стихія завжди буде безкоштовною. Якщо хочете допомогти їй жити — ось банка.",
  cards: "Бачимо, ви вже стежите за кількома містами — радіємо, що Стихія стала в пригоді. Вона завжди буде безкоштовною, а якщо хочете допомогти — ось банка.",
  bg: "Гарний вибір фону! Стихія завжди буде безкоштовною, а якщо хочете допомогти їй жити — ось банка.",
};

const slideUp = keyframes`
  from { opacity: 0; transform: translate(-50%, 16px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
`;

const Bar = styled.aside`
  position: fixed;
  left: 50%;
  bottom: 14px;
  transform: translateX(-50%);
  z-index: 1800;
  width: min(560px, calc(100vw - 24px));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: ${(p) => (p.$isDarkMode ? "rgba(20, 20, 24, 0.94)" : "rgba(255, 255, 255, 0.96)")};
  color: ${(p) => (p.$isDarkMode ? "#f1f1f1" : "#151515")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)")};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(10px);
  animation: ${slideUp} 0.35s ease-out;
  font-size: 13px;
  line-height: 1.35;

  @media (max-width: 520px) {
    flex-wrap: wrap;
  }
`;

const Text = styled.div`
  flex: 1 1 240px;
  min-width: 0;
  strong { display: block; margin-bottom: 2px; }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

const DonateLink = styled.a`
  padding: 7px 12px;
  border-radius: 9px;
  background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
  color: #2b1313;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`;

const GhostBtn = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  opacity: 0.75;
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;
  padding: 4px;
  white-space: nowrap;
  &:hover { opacity: 1; }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  opacity: 0.6;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  padding: 4px 6px;
  &:hover { opacity: 1; }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`;

const SupportBanner = ({ isDarkMode, user, onOpenDetails }) => {
  const [reason, setReasonState] = useState(null);
  const reasonRef = useRef(null);
  const setReason = (r) => {
    reasonRef.current = r;
    setReasonState(r);
  };
  const supporter = isSupporter(user);

  useEffect(() => {
    if (supporter) return undefined;
    markFirstVisit();

    const tryShow = (r) => {
      if (reasonRef.current || !canShow(r)) return;
      markShown(r);
      reasonRef.current = r;
      setReason(r);
    };

    const onMoment = (e) => tryShow(e.detail?.reason);
    window.addEventListener(SUPPORT_EVENT, onMoment);
    const timer = setTimeout(() => tryShow("monthly"), MONTHLY_DELAY_MS);

    return () => {
      window.removeEventListener(SUPPORT_EVENT, onMoment);
      clearTimeout(timer);
    };
  }, [supporter]);

  if (!reason || supporter) return null;

  return (
    <Bar $isDarkMode={isDarkMode} role="complementary" aria-label="Підтримка Стихії">
      <Text>
        <strong>Стихія живе завдяки вам</strong>
        {MESSAGES[reason]}
      </Text>
      <Actions>
        <DonateLink
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            markDonateClicked();
            setReason(null);
          }}
        >
          Банка
        </DonateLink>
        {onOpenDetails && (
          <GhostBtn
            type="button"
            onClick={() => {
              setReason(null);
              onOpenDetails();
            }}
          >
            Скільки це коштує?
          </GhostBtn>
        )}
        <CloseBtn type="button" onClick={() => setReason(null)} aria-label="Закрити">
          ×
        </CloseBtn>
      </Actions>
    </Bar>
  );
};

export default SupportBanner;
