import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaMountainCity } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdClose, MdAutoAwesome } from "react-icons/md";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(18px) saturate(0.65);
  -webkit-backdrop-filter: blur(18px) saturate(0.65);
  animation: ${fadeIn} 180ms ease-out;
`;

const Dialog = styled.div`
  width: min(440px, 100%);
  max-height: calc(100vh - 48px);
  box-sizing: border-box;
  overflow-y: auto;
  padding: 24px;
  border: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)")};
  border-radius: 18px;
  background: ${(props) => (props.$isDarkMode ? "#171b22" : "#f8fafc")};
  color: ${(props) => (props.$isDarkMode ? "#f9f9f9" : "#20242b")};
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
  animation: ${riseIn} 220ms ease-out;

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
`;

const Heading = styled.div`
  h2 {
    margin: 0;
        color:  #f9f9f9;
    font-size: 22px;
    font-weight: 700;
  }

  p {
    margin: 6px 0 0;
    color:  #f9f9f9;
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  place-items: center;
  border: 0;
  border-radius: 10px;
  background: rgba(65, 64, 64, 0.56);
  color: white;
  font-size: 22px;
  cursor: pointer;
`;

const Options = styled.div`
  display: grid;
  gap: 10px;
`;

const Option = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  min-height: 76px;
  padding: 14px 16px;
  border: 1px solid
    ${(props) =>
      props.$active
        ? props.$isDarkMode
          ? "rgba(108,255,228,0.55)"
          : "rgba(0,125,153,0.45)"
        : props.$isDarkMode
          ? "rgba(255,255,255,0.1)"
          : "rgba(0,0,0,0.1)"};
  border-radius: 14px;
  background: ${(props) =>
    props.$active
      ? props.$isDarkMode
        ? "rgba(108,255,228,0.12)"
        : "rgba(0,175,206,0.1)"
      : props.$isDarkMode
        ? "rgba(255,255,255,0.035)"
        : "rgba(255,255,255,0.7)"};
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #ffb36c;
    background: ${(props) =>
      props.$isDarkMode ? "rgba(255,179,108,0.12)" : "rgba(255,179,108,0.16)"};

    > span:last-child {
      color: ${(props) => (props.$active ? "#fff" : "#ffb36c")};
    }
  }
`;

const OptionIcon = styled.span`
  display: grid;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  place-items: center;
  border-radius: 12px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(108,255,228,0.12)" : "rgba(0,175,206,0.12)"};
  color: ${(props) => (props.$isDarkMode ? "#6cffe4" : "#007b99")};
  font-size: 22px;
`;

const OptionText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: ${(props) =>
    props.$active ? "#fff" : props.$isDarkMode ? "#f9f8f8" : "#020202"};
  transition: color 160ms ease;

  strong {
    font-size: 15px;
    font-weight: 650;
  }

  span {
    font-size: 14px;
  }
`;

const searchModes = [
  {
    id: "ai",
    label: "Запитати ШІ ✦",
    description: "Відкрити чат з Google Gemini для допомоги",
    Icon: MdAutoAwesome,
  },
  {
    id: "city",
    label: "За назвою міста",
    description: "Знайдіть прогноз за назвою населеного пункту",
    Icon: FaMountainCity,
  },
  {
    id: "coordinates",
    label: "Координати",
    description: "Введіть широту й довготу точки",
    Icon: FaMapLocationDot,
  },
];

export default function SearchModeModal({
  isOpen,
  isDarkMode,
  activeMode,
  onSelect,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentMode = searchModes.find(({ id }) => id === activeMode);
  const availableModes = searchModes
    .filter(({ id }) => id !== activeMode)
    .sort((first, second) => {
      if (activeMode === "ai") {
        return first.id === "city" ? -1 : second.id === "city" ? 1 : 0;
      }
      return 0;
    });

  return createPortal(
    <Backdrop
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-mode-heading"
        $isDarkMode={isDarkMode}
      >
        <Header>
          <Heading>
            <h2 id="search-mode-heading">Режим пошуку</h2>
            <p>
              Зараз: {currentMode?.label ?? "не вибрано"}. Оберіть інший режим.
            </p>
          </Heading>
          <CloseButton
            type="button"
            aria-label="Закрити вибір режиму пошуку"
            onClick={onClose}
          >
            <MdClose />
          </CloseButton>
        </Header>
        <Options>
          {availableModes.map(({ id, label, description, Icon }) => (
            <Option
              key={id}
              type="button"
              $isDarkMode={isDarkMode}
              onClick={() => onSelect(id)}
            >
              <OptionIcon $isDarkMode={isDarkMode}>
                <Icon />
              </OptionIcon>
              <OptionText $isDarkMode={isDarkMode}>
                <strong>{label}</strong>
                <span>{description}</span>
              </OptionText>
            </Option>
          ))}
        </Options>
      </Dialog>
    </Backdrop>,
    document.body,
  );
}
