import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCustomDay, removeCustomDay } from "../../features/counter/Counter.js";
import { BiTrash, BiX, BiCalendarPlus } from "react-icons/bi";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#1c1c1f" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  border-radius: 14px;
  width: 100%;
  max-width: 760px;
  max-height: 94vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);
  flex-shrink: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 26px;
  cursor: pointer;
  display: inline-flex;
  padding: 2px;
  border-radius: 6px;
  opacity: 0.75;
  transition: transform 0.25s ease, background 0.2s, color 0.2s, opacity 0.2s;
  &:hover {
    opacity: 1;
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.15);
    transform: rotate(90deg);
  }
  &:active {
    transform: rotate(90deg) scale(0.9);
  }
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 16px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  min-width: 0;
  background: ${(props) => (props.$isDarkMode ? "#333" : "#f9f9f9")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    border-color: #ffd199;
  }
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.3);
  }
`;

const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${(props) => (props.$isDarkMode ? "#333" : "#f9f9f9")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    border-color: #ffd199;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.3);
  }
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #ffb36c, #ff9a3d);
  border: none;
  border-radius: 5px;
  padding: 0 18px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #222;
  transition: transform 0.15s, box-shadow 0.2s, filter 0.2s;
  &:hover {
    transform: translateY(-1px) scale(1.06);
    box-shadow: 0 4px 14px rgba(255, 179, 108, 0.55);
    filter: brightness(1.08);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const EventItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => (p.$isDarkMode ? "#2b2b2f" : "#eee")};
  border-left: 3px solid #ffb36c;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 12px;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  &:hover {
    transform: translateX(3px);
    background: ${(p) => (p.$isDarkMode ? "#35353a" : "#e2e2e2")};
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #ff5c5c;
  cursor: pointer;
  display: inline-flex;
  padding: 5px;
  border-radius: 50%;
  opacity: 0.75;
  transition: transform 0.15s, background 0.2s, opacity 0.2s;
  &:hover {
    opacity: 1;
    background: rgba(255, 92, 92, 0.18);
    transform: scale(1.15) rotate(-8deg);
  }
`;

const CustomDatesModal = ({ onClose, isDarkMode, currentCardId }) => {
  const dispatch = useDispatch();
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("00:00");
  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState(1);
  const [durationUnit, setDurationUnit] = useState("hours");
  const [targetCard, setTargetCard] = useState(currentCardId);

  const myEvents = customDays.filter((d) => d.cardId === "all" || d.cardId === currentCardId);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleAdd = () => {
    if (!date || !reason) return alert("Заповніть дату та назву");
    if (reason.length > 30) return alert("Назва занадто довга (макс 30)");

    // Check limit
    const userEvents = customDays; // Simplified: assuming 1 user for now
    if (userEvents.length >= 3) {
      return alert("Максимум 3 події на користувача");
    }

    dispatch(
      addCustomDay({
        id: Date.now(),
        date,
        time,
        reason,
        duration: Number(duration),
        durationUnit,
        cardId: targetCard,
      })
    );
    setDate("");
    setReason("");
  };

  // Портал у body: інакше модалка потрапляє у stacking-контекст картки погоди
  // і частина інтерфейсу (пагінація, бічна панель) лягає поверх неї.
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent
        $isDarkMode={isDarkMode}
        role="dialog"
        aria-label="Встановити дати"
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
            <BiCalendarPlus style={{ color: "#ffb36c" }} /> Встановити дати
          </h3>
          <CloseButton onClick={onClose} aria-label="Закрити">
            <BiX />
          </CloseButton>
        </Header>

        <Body>
          <Column>
            <InputGroup>
              <label>Дата та Час початку</label>
              <div style={{ display: "flex", gap: "5px" }}>
                <StyledInput
                  type="date"
                  $isDarkMode={isDarkMode}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ flex: 1 }}
                />
                <StyledInput
                  type="time"
                  $isDarkMode={isDarkMode}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </InputGroup>

            <InputGroup>
              <label>Тривалість</label>
              <div style={{ display: "flex", gap: "5px" }}>
                <StyledInput
                  type="number"
                  min="1"
                  max="168"
                  $isDarkMode={isDarkMode}
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={{ width: "80px" }}
                />
                <StyledSelect
                  $isDarkMode={isDarkMode}
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value)}
                >
                  <option value="hours">Годин</option>
                  <option value="days">Днів</option>
                </StyledSelect>
              </div>
            </InputGroup>

            <InputGroup>
              <label>Застосувати для:</label>
              <StyledSelect
                $isDarkMode={isDarkMode}
                value={targetCard}
                onChange={(e) => setTargetCard(e.target.value)}
              >
                <option value="all">Всіх карток</option>
                <option value={currentCardId}>Цієї картки</option>
              </StyledSelect>
            </InputGroup>

            <InputGroup>
              <label>Назва події (макс 30 симв.)</label>
              <div style={{ display: "flex", gap: "5px" }}>
                <StyledInput
                  type="text"
                  placeholder="Наприклад: Новий Рік"
                  $isDarkMode={isDarkMode}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAdd();
                  }}
                  maxLength={30}
                  style={{ flex: 1 }}
                />
                <AddButton onClick={handleAdd} aria-label="Додати подію">
                  +
                </AddButton>
              </div>
            </InputGroup>
          </Column>

          <Column>
            <h4 style={{ margin: 0 }}>Наступаючі / триваючі події</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {myEvents.length === 0 && <p style={{ fontSize: "12px", opacity: 0.7, margin: 0 }}>Немає подій</p>}
              {myEvents.map((ev) => (
                <EventItem key={ev.id} $isDarkMode={isDarkMode}>
                  <div>
                    <b>{ev.reason}</b>
                    <br />
                    {ev.date} {ev.time} ({ev.duration} {ev.durationUnit === "days" ? "дн" : "год"})
                  </div>
                  <DeleteButton onClick={() => dispatch(removeCustomDay(ev.id))} aria-label="Видалити подію">
                    <BiTrash size={18} />
                  </DeleteButton>
                </EventItem>
              ))}
            </div>
          </Column>
        </Body>

      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default CustomDatesModal;
