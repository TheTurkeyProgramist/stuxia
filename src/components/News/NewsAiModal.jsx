import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import ReactMarkdown from "react-markdown";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { fetchFreeWebSearch } from "../../utils/freeWebSearch";
import reader from "../../photos/cursors/reader.webp";
import { GiSpikedDragonHead } from "react-icons/gi";
import readerfour from "../../photos/cursors/readerfour.webp";
import readertwo from "../../photos/cursors/readertwo.webp";
import readerthree from "../../photos/cursors/readerthree.webp";
import { GiTimeBomb } from "react-icons/gi";

const frames = [
  reader,
  readerfour,
  reader,
  readertwo,
  readerthree,
  readertwo,
  readerthree,
  readertwo,
  readerthree,
  readertwo
];

export const AnimatedCursor = ({ interval = 250, className = "" }) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <img
      src={frames[currentFrameIndex]}
      alt="Анімований помічник"
      className={className}
      style={{
        width: "442px",
        height: "442px",
        marginTop: "-180px",
        objectFit: "contain",
        pointerEvents: "none",
      }}
    />
  );
};
// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
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
  padding: 6px;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  position: relative;
  z-index: 10;
`;

const QuickSettings = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`;

const QuickGroup = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
`;

const QuickSelect = styled.select`
  padding: 5px 8px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 8px;
  background: ${(p) => (p.$isDarkMode ? "#1c1d22" : "#fff")};
  color: inherit;
  font-size: 11px;
`;

const InputShell = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`;

const InputMeta = styled.div`
  position: absolute;
  left: 12px;
  bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)")};
  font-size: 10px;
`;

const InputActions = styled.div`
  position: absolute;
  right: 8px;
  bottom: 6px;
  display: flex;
  gap: 4px;
`;

const InputIconButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 179, 108, 0.35);
  border-radius: 7px;
  background: ${(p) => (p.$primary ? "linear-gradient(135deg, #ffb36c, #ff8a3d)" : "transparent")};
  color: ${(p) => (p.$primary ? "#111" : "inherit")};
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const MessageMeta = styled.div`
  margin-top: 6px;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)")};
  font-size: 10px;
`;

const SuggestedQuestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

const SuggestedQuestion = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px;
  border: 2px solid rgba(255, 179, 108, 0.45);
  border-radius: 9px;
  background: transparent;
  width: 310px;
  font-weight:700;
  color: white;
  cursor: pointer;
  font-size: 14px;
   svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
`;

const Body = styled.div`
  padding: 5px;
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
  padding: 5px;
  border-top: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)")};
  display: flex;
  gap: 10px;
  background: ${(props) => (props.$isDarkMode ? "#16171b" : "#fafafa")};
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 118px 34px 18px;
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

const MAX_MESSAGE_LENGTH = 300;
const GLOBAL_COOLDOWN_KEY = "gemini_global_cooldown_until";

const getResponseLengthInstruction = (value) => {
  if (value === "detailed") return "Відповідай докладно, але структуровано.";
  if (value === "concise") return "Відповідай стисло, лише головна суть.";
  return "Відповідай нормально, збалансовано за обсягом.";
};

const getResponseStyleInstruction = (value) => {
  if (value === "scientific") return "Використовуй науковий, точний стиль.";
  if (value === "standard") return "Використовуй нейтральний стандартний стиль.";
  return "Використовуй дружній, простий стиль.";
};

const parseSuggestedQuestions = (text) => {
  const regex = /\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/;
  const match = text.match(regex);
  if (!match) return { cleanText: text, questions: [] };
  const questions = match[1]
    .split("\n")
    .map((item) => item.replace(/^[•\-*\d.\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, 2);
  return { cleanText: text.replace(regex, "").trim(), questions };
};

const starterQuestions = [
  {
    icon: <FaLightbulb aria-hidden="true" />,
    text: "Поясни головну думку новини.",
  },
  {
    icon: <GiSpikedDragonHead aria-hidden="true" />,
    text: "Які факти є найцікавішими?",
  },
  {
    icon: <GiTimeBomb aria-hidden="true" />,
    text: "Які можуть бути наслідки?",
  },
];

export default function NewsAiModal({ isOpen, onClose, newsItem, isDarkMode }) {
  const [responseLength, setResponseLength] = useState("normal");
  const [responseStyle, setResponseStyle] = useState("friendly");
  const [suggestedQuestionsCount, setSuggestedQuestionsCount] = useState("0");
  const [googleSearchEnabled, setGoogleSearchEnabled] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [isListening, setIsListening] = useState(false);

  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const cooldownRef = useRef(0);

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

  useEffect(() => {
    if (!isOpen) return;
    Promise.all([
      localforage.getItem("gemini_api_key"),
      localforage.getItem("gemini_google_search_enabled"),
      localforage.getItem("gemini_suggested_questions_count"),
      localforage.getItem(GLOBAL_COOLDOWN_KEY),
    ]).then(([key, searchEnabled, suggestions, cooldownUntil]) => {
      setApiKey(key || "");
      if (searchEnabled !== null) setGoogleSearchEnabled(searchEnabled);
      if (["0", "1", "2"].includes(suggestions)) setSuggestedQuestionsCount(suggestions);
      if (cooldownUntil && cooldownUntil > Date.now()) {
        cooldownRef.current = cooldownUntil;
        setCooldownSeconds(Math.ceil((cooldownUntil - Date.now()) / 1000));
      }
    });

    const historyKey = `news_ai_chat_${newsItem?.link || "general"}`;
    localforage.getItem(historyKey).then((data) => {
      if (data) {
        if (Date.now() - data.timestamp > 24 * 60 * 60 * 1000) {
          setMessages([]);
          localforage.removeItem(historyKey);
        } else {
          setMessages((data.messages || []).slice(-10));
        }
      } else {
        setMessages([]);
      }
    });
  }, [isOpen, newsItem]);

  useEffect(() => {
    const timer = setInterval(() => {
      localforage.getItem(GLOBAL_COOLDOWN_KEY).then((sharedCooldownUntil) => {
        const until = Math.max(cooldownRef.current, Number(sharedCooldownUntil) || 0);
        const remaining = Math.max(0, until - Date.now());
        cooldownRef.current = until;
        setCooldownSeconds(Math.ceil(remaining / 1000));
        if (!remaining && until) {
          cooldownRef.current = 0;
          localforage.removeItem(GLOBAL_COOLDOWN_KEY);
        }
      });
    }, 250);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const saveHistory = (msgs) => {
    const toSave = msgs.slice(-10);
    const historyKey = `news_ai_chat_${newsItem?.link || "general"}`;
    localforage.setItem(historyKey, {
      timestamp: Date.now(),
      messages: toSave,
    });
    setMessages(toSave);
  };

  const setCooldown = (seconds) => {
    const until = Date.now() + seconds * 1000;
    cooldownRef.current = until;
    setCooldownSeconds(seconds);
    localforage.setItem(GLOBAL_COOLDOWN_KEY, until);
  };

  const handleClearChat = async () => {
    setMessages([]);
    await localforage.removeItem(`news_ai_chat_${newsItem?.link || "general"}`);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "uk-UA";
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      setInput((previous) => `${previous ? `${previous} ` : ""}${event.results[0][0].transcript}`.slice(0, MAX_MESSAGE_LENGTH));
    };
    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };
    recognition.start();
  };

  const handleSend = async (customPrompt = null) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || loading || cooldownRef.current > Date.now()) return;

    if (!apiKey) {
      alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");
      return;
    }

    const userMsg = {
      text: textToSend,
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
        ...(googleSearchEnabled ? { tools: [{ googleSearch: {} }] } : {}),
      });

      let webContext = "";
      if (googleSearchEnabled) {
        webContext = await fetchFreeWebSearch(`${newsItem?.title || ""} ${textToSend}`);
      }
      const suggestionCount = Number(suggestedQuestionsCount);
      const suggestionsInstruction = suggestionCount
        ? `Додай рівно ${suggestionCount} коротке(их) питання(нь) у блоці [РЕКОМЕНДОВАНІ_ПИТАННЯ].`
        : "Не додавай блок рекомендованих питань.";
      const systemInstructions = `Ти - ШІ-помічник для аналізу новини.\n${getResponseLengthInstruction(responseLength)}\n${getResponseStyleInstruction(responseStyle)}\n${suggestionsInstruction}`;
      const promptText = `${systemInstructions}\nНовина:\nЗаголовок: ${newsItem?.title || ""}\nОпис: ${newsItem?.description || ""}\nПосилання: ${newsItem?.link || ""}\n${webContext}\nЗапит користувача: ${textToSend}`;

      const result = await model.generateContent(promptText);
      const response = await result.response;
      const botResponse = response.text();
      const usage = response.usageMetadata;

      const botMsg = {
        text: botResponse,
        isBot: true,
        usage: usage
          ? {
              promptTokens: usage.promptTokenCount || 0,
              responseTokens: usage.candidatesTokenCount || 0,
              totalTokens: usage.totalTokenCount || 0,
            }
          : null,
      };
      saveHistory([...newMsgs, botMsg]);
      setCooldown(Number(suggestedQuestionsCount) === 0 ? 5 : Number(suggestedQuestionsCount) === 1 ? 10 : 15);
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

  if (!isOpen) return null;

  // Рендеримо модальне вікно безпосередньо в document.body
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
        <Header $isDarkMode={isDarkMode}>
          <TitleGroup>
            <h3>ШІ Виклад новини</h3>
          </TitleGroup>
          <CloseBtn $isDarkMode={isDarkMode} onClick={onClose} title="Закрити">
            ✕
          </CloseBtn>
        </Header>

        <ControlsBar $isDarkMode={isDarkMode}>
          <QuickSettings>
            <QuickGroup>
              Обсяг:
              <QuickSelect $isDarkMode={isDarkMode} value={responseLength} onChange={(e) => setResponseLength(e.target.value)}>
                <option value="concise">Менше</option>
                <option value="normal">Нормально</option>
                <option value="detailed">Більше</option>
              </QuickSelect>
            </QuickGroup>
            <QuickGroup>
              Стиль:
              <QuickSelect $isDarkMode={isDarkMode} value={responseStyle} onChange={(e) => setResponseStyle(e.target.value)}>
                <option value="friendly">Дружньо</option>
                <option value="standard">Стандартно</option>
                <option value="scientific">Науково</option>
              </QuickSelect>
            </QuickGroup>
            <QuickGroup>
              Пропозиції:
              <QuickSelect
                $isDarkMode={isDarkMode}
                value={suggestedQuestionsCount}
                onChange={async (e) => {
                  setSuggestedQuestionsCount(e.target.value);
                  await localforage.setItem("gemini_suggested_questions_count", e.target.value);
                }}
              >
                <option value="0">0 (5 с)</option>
                <option value="1">1 (10 с)</option>
                <option value="2">2 (15 с)</option>
              </QuickSelect>
            </QuickGroup>
            <QuickGroup>
              <input
                type="checkbox"
                checked={googleSearchEnabled}
                onChange={async (e) => {
                  setGoogleSearchEnabled(e.target.checked);
                  await localforage.setItem("gemini_google_search_enabled", e.target.checked);
                }}
              />
              Інтернет-пошук
            </QuickGroup>
          </QuickSettings>
        </ControlsBar>

        <Body $isDarkMode={isDarkMode}>
          {messages.length === 0 && !loading ? (
            <EmptyState $isDarkMode={isDarkMode}>
              <AnimatedCursor interval={250} />
              <div style={{ marginTop: "-160px", color: isDarkMode ? "#ffffff" : "#080808",}}>
                Задайте питання про новину або оберіть питання:
              </div>
              <SuggestedQuestions>
                {starterQuestions.map(({ icon, text }) => (
                    <SuggestedQuestion key={text} onClick={() => handleSend(text)}>
                      {icon}
                      {text}
                    </SuggestedQuestion>
                ))}
              </SuggestedQuestions>
            </EmptyState>
          ) : (
            <ChatHistory>
              {messages.map((m, i) => {
                const parsed = m.isBot ? parseSuggestedQuestions(m.text) : { cleanText: m.text, questions: [] };
                return (
                  <Message key={i} $isBot={m.isBot} $isDarkMode={isDarkMode}>
                    <ReactMarkdown>{parsed.cleanText}</ReactMarkdown>
                    {m.usage?.totalTokens > 0 && (
                      <MessageMeta $isDarkMode={isDarkMode}>
                        Витрачено токенів: {m.usage.totalTokens}
                      </MessageMeta>
                    )}
                    {parsed.questions.length > 0 && (
                      <SuggestedQuestions>
                        {parsed.questions.map((question) => (
                          <SuggestedQuestion key={question} onClick={() => handleSend(question)}>
                            {question}
                          </SuggestedQuestion>
                        ))}
                      </SuggestedQuestions>
                    )}
                  </Message>
                );
              })}
              {loading && (
                <Message $isBot={true} $isDarkMode={isDarkMode}>
                  Аналізую та генерую відповідь...
                </Message>
              )}
              <div ref={chatEndRef} />
            </ChatHistory>
          )}
        </Body>

        <InputArea $isDarkMode={isDarkMode}>
          <InputShell>
            <Input
              $isDarkMode={isDarkMode}
              value={input}
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Задавайте питання..."
              disabled={loading || cooldownSeconds > 0}
            />
            <InputMeta $isDarkMode={isDarkMode}>
              {input.length}/{MAX_MESSAGE_LENGTH}
              {cooldownSeconds > 0 && ` Перезарядка: ${cooldownSeconds} с`}
            </InputMeta>
            <InputActions>
              <InputIconButton
                type="button"
                onClick={handleVoiceInput}
                title={isListening ? "Зупинити голосовий ввід" : "Голосовий ввід"}
              >
                {isListening ? <span aria-hidden="true">■</span> : <FaMicrophoneAlt />}
              </InputIconButton>
              <InputIconButton
                type="button"
                onClick={handleClearChat}
                title="Очистити чат"
              >
                <RiDeleteBack2Fill />
              </InputIconButton>
              <InputIconButton
                type="button"
                $primary
                onClick={() => handleSend()}
                disabled={loading || cooldownSeconds > 0 || !input.trim()}
                title={cooldownSeconds > 0 ? `Перезарядка: ${cooldownSeconds} с` : "Надіслати"}
              >
                <FiSend />
              </InputIconButton>
            </InputActions>
          </InputShell>
        </InputArea>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
}