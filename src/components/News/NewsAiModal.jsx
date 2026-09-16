import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import ReactMarkdown from "react-markdown";

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const dropdownSlide = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#121316bb" : "#fcf7f7d3")};
  color: ${(props) => (props.$isDarkMode ? "#f3f4f6" : "#1f2937")};
  width: 100%;
  height: 95vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.$isDarkMode
      ? "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.1)"
      : "0 20px 50px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)")};
  animation: ${fadeIn} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Header = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)")};
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CloseBtn = styled.button`
  background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)")};
  border: none;
  color: inherit;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
  }
`;

const ControlsBar = styled.div`
  padding: 12px 20px;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 10;
`;

const DropdownWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const DropdownTrigger = styled.button`
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  background: ${(props) => (props.$isDarkMode ? "#1c1d22" : "#f8f9fa")};
  color: inherit;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #ffb36c;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: ${(props) => (props.$isDarkMode ? "#1e2025" : "#ffffff")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)")};
  border-radius: 14px;
  padding: 8px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${dropdownSlide} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 20;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;

  &:hover {
    background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)")};
  }

  input {
    display: none;
  }
`;

const CustomCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1.5px solid ${(props) => (props.$checked ? "#ffb36c" : props.$isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)")};
  background: ${(props) => (props.$checked ? "#ffb36c" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &::after {
    content: "✓";
    font-size: 12px;
    font-weight: bold;
    color: #000;
    display: ${(props) => (props.$checked ? "block" : "none")};
  }
`;

const GenerateActionBtn = styled.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
  color: #111;
  border: none;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(255, 179, 108, 0.25);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(255, 179, 108, 0.35);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const Body = styled.div`
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)")};
    border-radius: 10px;
  }
`;

const ChatHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EmptyState = styled.div`
  margin: auto;
  text-align: center;
  max-width: 320px;
  color: ${(props) => (props.$isDarkMode ? "#888" : "#666")};
  font-size: 13px;
  line-height: 1.5;

  span {
    font-size: 32px;
    display: block;
    margin-bottom: 8px;
  }
`;

const Message = styled.div`
  align-self: ${(props) => (props.$isBot ? "flex-start" : "flex-end")};
  background: ${(props) =>
    props.$isBot
      ? props.$isDarkMode
        ? "#1d1f24"
        : "#f3f4f6"
      : "linear-gradient(135deg, #ffb36c 0%, #ffa040 100%)"};
  color: ${(props) => (props.$isBot ? (props.$isDarkMode ? "#f3f4f6" : "#1f2937") : "#000")};
  padding: 12px 16px;
  border-radius: ${(props) => (props.$isBot ? "16px 16px 16px 4px" : "16px 16px 4px 16px")};
  max-width: 85%;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid
    ${(props) =>
      props.$isBot
        ? props.$isDarkMode
          ? "rgba(255,255,255,0.05)"
          : "rgba(0,0,0,0.05)"
        : "transparent"};
  box-shadow: ${(props) => (props.$isBot ? "none" : "0 4px 12px rgba(255, 179, 108, 0.15)")};

  p { margin: 0 0 8px 0; }
  p:last-child { margin: 0; }

  a {
    color: ${(props) => (props.$isBot ? "#ffb36c" : "#000")};
    text-decoration: underline;
  }
`;

const InputArea = styled.div`
  padding: 16px 20px;
  border-top: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)")};
  display: flex;
  gap: 10px;
  background: ${(props) => (props.$isDarkMode ? "#16171b" : "#fafafa")};
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 18px;
  border-radius: 14px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)")};
  background: ${(props) => (props.$isDarkMode ? "#22242a" : "#fff")};
  color: inherit;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ffb36c;
  }

  &::placeholder {
    color: ${(props) => (props.$isDarkMode ? "#666" : "#aaa")};
  }
`;

const SendBtn = styled.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
  color: #000;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const MODES_OPTIONS = [
  { id: "коротко", label: "Коротко" },
  { id: "докладно", label: "Докладно" },
  { id: "науково", label: "Науково" },
  { id: "дружньо", label: "Дружньо" },
  { id: "саркастично", label: "Саркастично" },
];

export default function NewsAiModal({ isOpen, onClose, newsItem, isDarkMode }) {
  const [selectedModes, setSelectedModes] = useState(["докладно"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const chatEndRef = useRef(null);
  const dropdownRef = useRef(null);

  // Блокування скролу фонової сторінки при відкритті
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Закриття випадаючого списку при кліку за його межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    localforage.getItem("gemini_api_key").then((key) => setApiKey(key));

    const historyKey = `news_ai_chat_${newsItem?.link || "general"}`;
    localforage.getItem(historyKey).then((data) => {
      if (data) {
        if (Date.now() - data.timestamp > 24 * 60 * 60 * 1000) {
          setMessages([]);
        } else {
          setMessages(data.messages || []);
        }
      } else {
        setMessages([]);
      }
    });
  }, [isOpen, newsItem]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const toggleMode = (modeId) => {
    setSelectedModes((prev) => {
      if (prev.includes(modeId)) {
        return prev.length > 1 ? prev.filter((m) => m !== modeId) : prev;
      } else {
        return [...prev, modeId];
      }
    });
  };

  const saveHistory = (msgs) => {
    const toSave = msgs.slice(-20);
    const historyKey = `news_ai_chat_${newsItem?.link || "general"}`;
    localforage.setItem(historyKey, {
      timestamp: Date.now(),
      messages: toSave,
    });
    setMessages(toSave);
  };

  const handleSend = async (customPrompt = null) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || loading) return;

    if (!apiKey) {
      alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");
      return;
    }

    const modeLabels = selectedModes
      .map((m) => MODES_OPTIONS.find((opt) => opt.id === m)?.label)
      .join(", ");

    const userMsg = {
      text: customPrompt ? `[Режими: ${modeLabels}] Зроби виклад цієї новини.` : textToSend,
      isBot: false,
    };

    const newMsgs = [...messages, userMsg];
    if (!customPrompt) setInput("");
    setMessages(newMsgs);
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        tools: [{ googleSearch: {} }],
      });

      let systemInstructions = `Ти - ШІ-помічник. Твоє завдання зробити виклад новини та відповідати на питання щодо неї.\n`;
      systemInstructions += `Скомбінуй у відповіді такі стилі: ${selectedModes.join(", ")}.\n`;

      if (selectedModes.includes("коротко")) systemInstructions += "- Відповідай стисло, головна суть у 1-3 реченнях.\n";
      if (selectedModes.includes("докладно")) systemInstructions += "- Надай розгорнуту інформацію з деталями та структурою.\n";
      if (selectedModes.includes("науково")) systemInstructions += "- Використовуй академічний тон, аналітичний підхід та відповідну термінологію.\n";
      if (selectedModes.includes("дружньо")) systemInstructions += "- Пиши приязно, неформально, додавай емодзі.\n";
      if (selectedModes.includes("саркастично")) systemInstructions += "- Додай витончену іронію та сарказм (цензурно, без образ).\n";

      const promptText = `${systemInstructions}\nНовина:\nЗаголовок: ${newsItem?.title || ""}\nОпис: ${newsItem?.description || ""}\nПосилання: ${newsItem?.link || ""}\n\nЗапит користувача: ${textToSend}`;

      const result = await model.generateContent(promptText);
      const botResponse = result.response.text();

      const botMsg = { text: botResponse, isBot: true };
      saveHistory([...newMsgs, botMsg]);
    } catch (error) {
      console.error(error);
      const botMsg = {
        text: "⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",
        isBot: true,
      };
      saveHistory([...newMsgs, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  const triggerSummary = () => {
    setIsDropdownOpen(false);
    handleSend("Будь ласка, зроби виклад цієї новини відповідно до обраних режимів.");
  };

  if (!isOpen) return null;

  const currentSelectionText =
    selectedModes.length === 0
      ? "Оберіть режим..."
      : selectedModes
          .map((m) => MODES_OPTIONS.find((opt) => opt.id === m)?.label)
          .join(", ");

  // Рендеримо модальне вікно безпосередньо в document.body
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
        <Header $isDarkMode={isDarkMode}>
          <TitleGroup>
            <span>✨</span>
            <h3>ШІ Виклад Новини</h3>
          </TitleGroup>
          <CloseBtn $isDarkMode={isDarkMode} onClick={onClose} title="Закрити">
            ✕
          </CloseBtn>
        </Header>

        <ControlsBar $isDarkMode={isDarkMode}>
          <DropdownWrapper ref={dropdownRef}>
            <DropdownTrigger
              $isDarkMode={isDarkMode}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{currentSelectionText}</span>
              <span style={{ fontSize: "10px", opacity: 0.6 }}>
                {isDropdownOpen ? "▲" : "▼"}
              </span>
            </DropdownTrigger>

            {isDropdownOpen && (
              <DropdownMenu $isDarkMode={isDarkMode}>
                {MODES_OPTIONS.map((opt) => {
                  const isChecked = selectedModes.includes(opt.id);
                  return (
                    <CheckboxItem key={opt.id} $isDarkMode={isDarkMode}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleMode(opt.id)}
                      />
                      <CustomCheckbox $checked={isChecked} $isDarkMode={isDarkMode} />
                      {opt.label}
                    </CheckboxItem>
                  );
                })}
              </DropdownMenu>
            )}
          </DropdownWrapper>

          <GenerateActionBtn onClick={triggerSummary} disabled={loading}>
            Згенерувати виклад
          </GenerateActionBtn>
        </ControlsBar>

        <Body $isDarkMode={isDarkMode}>
          {messages.length === 0 && !loading ? (
            <EmptyState $isDarkMode={isDarkMode}>
              <span>🤖</span>
              Оберіть бажані стилі у випадаючому списку вище та натисніть <b>"Згенерувати виклад"</b>, або поставте власне питання нижче!
            </EmptyState>
          ) : (
            <ChatHistory>
              {messages.map((m, i) => (
                <Message key={i} $isBot={m.isBot} $isDarkMode={isDarkMode}>
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                </Message>
              ))}
              {loading && (
                <Message $isBot={true} $isDarkMode={isDarkMode}>
                  Аналізую та генерую відповідь... 🧠
                </Message>
              )}
              <div ref={chatEndRef} />
            </ChatHistory>
          )}
        </Body>

        <InputArea $isDarkMode={isDarkMode}>
          <Input
            $isDarkMode={isDarkMode}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Задайте питання щодо цієї новини..."
            disabled={loading}
          />
          <SendBtn onClick={() => handleSend()} disabled={loading || !input.trim()}>
            ➔
          </SendBtn>
        </InputArea>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
}