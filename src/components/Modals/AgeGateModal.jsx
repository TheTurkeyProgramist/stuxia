import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { confirmAge, isAgeConfirmed } from "../../utils/ageGate";

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const popIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
  position: fixed; inset: 0;
  /* Вище за модалки ШІ (до 300001) і налаштувань, нижче за шар тултіпів */
  z-index: 2147483000;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.18s ease both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Box = styled.div`
  width: min(420px, 100%);
  padding: 22px 22px 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: #1c1c1f;
  color: #f3f3f3;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.2);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${popIn} 0.22s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Header = styled.div`
  display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
`;

const AgeBadge = styled.div`
  flex: 0 0 auto;
  display: grid; place-items: center;
  width: 44px; height: 44px; border-radius: 50%;
  background: ${({ $age }) => ($age >= 21 ? "rgba(196, 43, 28, 0.2)" : "rgba(255, 179, 0, 0.16)")};
  border: 2px solid ${({ $age }) => ($age >= 21 ? "#ff6b6b" : "#ffb300")};
  color: ${({ $age }) => ($age >= 21 ? "#ff8a8a" : "#ffc94d")};
  font-size: 14px; font-weight: 800;
`;

const Title = styled.h3`
  margin: 0; font-size: 17px; font-weight: 600; line-height: 1.3;
`;

const Text = styled.p`
  margin: 0 0 12px; font-size: 13px; line-height: 1.5; color: #d4d4d4;
`;

const Note = styled.p`
  margin: 0 0 18px; font-size: 11px; line-height: 1.45; color: #8f8f8f;
`;

const Actions = styled.div`
  display: flex; justify-content: flex-end; gap: 10px;
`;

const Button = styled.button`
  border-radius: 6px; padding: 7px 16px;
  font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  background: ${({ $primary }) => ($primary ? "#60cdff" : "rgba(255, 255, 255, 0.08)")};
  color: ${({ $primary }) => ($primary ? "#000000" : "#ffffff")};
  border: 1px solid ${({ $primary }) => ($primary ? "#60cdff" : "rgba(255, 255, 255, 0.12)")};
  &:hover { background: ${({ $primary }) => ($primary ? "#70d4ff" : "rgba(255, 255, 255, 0.15)")}; }
  &:focus-visible { outline: 2px solid #60cdff; outline-offset: 2px; }
`;

export const AgeGateModal = ({ age, text, onConfirm, onCancel }) => {
  const cancelRef = useRef(null);

  useEffect(() => {
    // Фокус на «Скасувати»: випадковий Enter нічого не підтвердить
    cancelRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onCancel();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onCancel]);

  return createPortal(
    <Overlay
      // pageActivity.js ставить на паузу анімації поза модалкою з aria-modal (карткою);
      // без цього атрибута підкладка застигає на першому кадрі з opacity: 0
      data-active-overlay=""
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <Box role="alertdialog" aria-modal="true" aria-labelledby="age-gate-title" aria-describedby="age-gate-text">
        <Header>
          <AgeBadge $age={age} aria-hidden="true">{age}+</AgeBadge>
          <Title id="age-gate-title">Підтвердження віку</Title>
        </Header>
        <Text id="age-gate-text">{text}</Text>
        <Note>Підтвердження зберігається на цьому пристрої. Його можна скинути кнопкою «Скинути сайт» у налаштуваннях.</Note>
        <Actions>
          <Button ref={cancelRef} type="button" onClick={onCancel}>Скасувати</Button>
          <Button type="button" $primary onClick={onConfirm}>
            Мені виповнилося {age}
          </Button>
        </Actions>
      </Box>
    </Overlay>,
    document.body,
  );
};

/**
 * const [requestAge, ageGate] = useAgeGate();
 * if (await requestAge(18, "Пояснення...")) { ...дія... }
 * {ageGate} — вставити будь-де в JSX (модалка сама йде в document.body).
 * Якщо вік уже підтверджено на цьому пристрої — модалка не показується.
 */
export const useAgeGate = () => {
  const [request, setRequest] = useState(null);

  const requestAge = useCallback((age, text) => {
    if (isAgeConfirmed(age)) return Promise.resolve(true);
    return new Promise((resolve) => setRequest({ age, text, resolve }));
  }, []);

  const handleConfirm = useCallback(() => {
    if (!request) return;
    confirmAge(request.age);
    request.resolve(true);
    setRequest(null);
  }, [request]);

  const handleCancel = useCallback(() => {
    if (!request) return;
    request.resolve(false);
    setRequest(null);
  }, [request]);

  const gate = request ? (
    <AgeGateModal
      age={request.age}
      text={request.text}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  ) : null;

  return [requestAge, gate];
};

export default AgeGateModal;
