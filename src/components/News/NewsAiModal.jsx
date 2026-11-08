import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import ReactMarkdown from "react-markdown";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FiSend, FiAlignLeft, FiGlobe } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { Tooltip } from "../Tooltip/Tooltip";
import { fetchFreeWebSearch } from "../../utils/freeWebSearch";
import { GeminiKeyButton } from "../Modals/GeminiKeyModal";
import {
  MAX_MESSAGE_LENGTH,
  SUGGESTED_COUNT_KEY,
  SUGGESTED_COUNT_OPTIONS,
  getCooldownSeconds,
  getSuggestionsInstruction,
  normalizeSuggestedCount,
  parseSuggestedQuestions,
} from "../AiShared/aiConfig";
import { useGeminiKey } from "../AiShared/useGeminiKey";
import { useSharedCooldown } from "../AiShared/useSharedCooldown";
import { useVoiceInput } from "../AiShared/useVoiceInput";
import { useStarterCarousel } from "../AiShared/useStarterCarousel";
import reader from "../../media/characters/domino-reading.webp";
import { GiSpikedDragonHead, GiTimeBomb } from "react-icons/gi";
import readerfour from "../../media/characters/domino-reading-4.webp";
import readertwo from "../../media/characters/domino-reading-2.webp";
import readerthree from "../../media/characters/domino-reading-3.webp";
import readerVideo from "../../media/characters/kate-and-domino.webm";

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
  const [isSlowConnection, setIsSlowConnection] = useState(() => {
    if (typeof navigator === "undefined" || !navigator.onLine) return true;
    if (navigator.connection) {
      const conn = navigator.connection;
      if (conn.saveData || ["slow-2g", "2g", "3g"].includes(conn.effectiveType)) {
        return true;
      }
    }
    return false;
  });
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Явно зупиняємо відео при демонтуванні — браузер не завжди робить це сам
  useEffect(() => {
    return () => {
      const vid = videoRef.current;
      if (vid) {
        vid.pause();
        vid.src = "";
        vid.load();
      }
    };
  }, []);

  useEffect(() => {
    const updateConnection = () => {
      const online = typeof navigator !== "undefined" ? navigator.onLine : true;
      if (!online) {
        setIsSlowConnection(true);
        return;
      }
      if (typeof navigator !== "undefined" && navigator.connection) {
        const conn = navigator.connection;
        setIsSlowConnection(
          !!conn.saveData || ["slow-2g", "2g", "3g"].includes(conn.effectiveType)
        );
      } else {
        setIsSlowConnection(false);
      }
    };

    updateConnection();
    window.addEventListener("online", updateConnection);
    window.addEventListener("offline", updateConnection);
    if (typeof navigator !== "undefined" && navigator.connection) {
      navigator.connection.addEventListener("change", updateConnection);
    }

    return () => {
      window.removeEventListener("online", updateConnection);
      window.removeEventListener("offline", updateConnection);
      if (typeof navigator !== "undefined" && navigator.connection) {
        navigator.connection.removeEventListener("change", updateConnection);
      }
    };
  }, []);

  useEffect(() => {
    if (!isSlowConnection && !videoError) return;
    const timer = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isSlowConnection, videoError]);

  if (!isSlowConnection && !videoError) {
    return (
      <video
        ref={videoRef}
        src={readerVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={() => setVideoError(true)}
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
  }

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
  padding: 8px 10px;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)")};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  position: relative;
  z-index: 10;
`;

const QuickGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.95;

  > svg {
    color: #ff8a3d;
    font-size: 14px;
    flex-shrink: 0;
  }
`;

const Segmented = styled.div`
  display: inline-flex;
  padding: 2px;
  gap: 2px;
  border-radius: 999px;
  background: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)")};
`;

const SegmentButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => (p.$active ? "#1a1208" : "inherit")};
  background: ${(p) => (p.$active ? "linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%)" : "transparent")};
  box-shadow: ${(p) => (p.$active ? "0 2px 8px rgba(255, 138, 61, 0.35)" : "none")};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${(p) => (p.$active ? "linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%)" : "rgba(255, 179, 108, 0.15)")};
  }

  small {
    opacity: 0.7;
    font-weight: 500;
    margin-left: 3px;
  }
`;

const ToggleChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => (p.$active ? "#ff8a3d" : "inherit")};
  background: ${(p) => (p.$active ? "rgba(255, 138, 61, 0.14)" : "transparent")};
  border: 1px solid ${(p) => (p.$active ? "rgba(255, 138, 61, 0.6)" : p.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  opacity: ${(p) => (p.$active ? 1 : 0.7)};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    border-color: rgba(255, 138, 61, 0.6);
  }

  svg {
    font-size: 13px;
  }
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
  {
    icon: <MdVerified aria-hidden="true" />,
    text: "Які джерела підтверджують цю новину?",
  },
  {
    icon: <FaCircleInfo aria-hidden="true" />,
    text: "Що важливо знати про цю подію?",
  },
];

const StarterCarouselViewport = styled.div`
  width: min(310px, 90vw);
  height: 156px;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 12%,
    #000 88%,
    transparent 100%
  );
`;

const StarterCarouselTrack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: ${(p) =>
    p.$isResetting
      ? "none"
      : "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"};
  transform: ${(p) => `translateY(-${p.$position * 52}px)`};
`;

const SuggestedQuestion = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 9px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 9px;
  background: ${(p) => (p.$isDarkMode ? "rgba(255,179,108,0.06)" : "rgba(255,138,61,0.05)")};
  width: 100%;
  height: 46px;
  flex: 0 0 46px;
  box-sizing: border-box;
  font-weight:700;
  color: ${(p) => (p.$isDarkMode ? "#f3f4f6" : "#1f2937")};
  cursor: pointer;
  font-size: 12px;
  text-align: left;
  transform: scale(${(p) => (p.$isCenter ? 1 : 0.94)});
  transition:
    transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
    background 0.2s ease,
    border-color 0.2s ease;
  &:hover {
    background: rgba(255, 179, 108, 0.16);
    border-color: #ffb36c;
  }
   svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
`;

const StarterQuestionsCarousel = ({ isDarkMode, onAsk }) => {
  const { position, isResetting, pauseProps } = useStarterCarousel(starterQuestions.length);

  return (
    <StarterCarouselViewport
      role="group"
      aria-label="Популярні запитання про новину"
      aria-roledescription="карусель"
      {...pauseProps}
    >
      <StarterCarouselTrack
        $position={position}
        $isResetting={isResetting}
      >
        {[...starterQuestions, ...starterQuestions].map(({ icon, text }, index) => {
          const isVisible = index >= position && index < position + 3;
          return (
            <SuggestedQuestion
              key={`${text}-${index}`}
              type="button"
              $isDarkMode={isDarkMode}
              $isCenter={index === position + 1}
              onClick={() => onAsk(text)}
              aria-hidden={!isVisible}
              tabIndex={isVisible ? 0 : -1}
            >
              {icon}
              {text}
            </SuggestedQuestion>
          );
        })}
      </StarterCarouselTrack>
    </StarterCarouselViewport>
  );
};

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

// Рядок з кнопкою ключа Gemini (той самий ключ, що й у «Допомозі ШІ»)
const KeyBar = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-top: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)")};
  background: ${(props) => (props.$isDarkMode ? "#16171b" : "#fafafa")};
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

const getResponseLengthInstruction = (value) => {
  if (value === "detailed") return "Відповідай докладно, але структуровано.";
  if (value === "concise") return "Відповідай стисло, лише головна суть.";
  return "Відповідай нормально, збалансовано за обсягом.";
};

const NEWS_AI_MODEL = "gemini-2.5-flash";

export default function NewsAiModal({ isOpen, onClose, newsItem, isDarkMode }) {
  const [responseLength, setResponseLength] = useState("normal");
  const [suggestedQuestionsCount, setSuggestedQuestionsCount] = useState("0");
  const [googleSearchEnabled, setGoogleSearchEnabled] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Спільне з «Допомогою ШІ»: ключ (+18+), перезарядка, голосовий ввід
  const { apiKey, openKeyModal, ensureAge, reload: reloadKey, keyElements } =
    useGeminiKey({ modelName: NEWS_AI_MODEL });
  const cooldown = useSharedCooldown();
  const cooldownSeconds = cooldown.seconds;
  const { isListening, toggle: handleVoiceInput } = useVoiceInput({
    onText: (transcript) =>
      setInput((previous) => `${previous ? `${previous} ` : ""}${transcript}`.slice(0, MAX_MESSAGE_LENGTH)),
  });

  const chatEndRef = useRef(null);

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
    reloadKey();
    cooldown.sync();
    Promise.all([
      localforage.getItem("gemini_google_search_enabled"),
      localforage.getItem(SUGGESTED_COUNT_KEY),
    ]).then(([searchEnabled, suggestions]) => {
      if (searchEnabled !== null) setGoogleSearchEnabled(searchEnabled);
      const normalized = normalizeSuggestedCount(suggestions);
      if (normalized !== null) setSuggestedQuestionsCount(normalized);
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
    // reloadKey і cooldown.sync стабільні (useCallback) — перечитуємо лише при відкритті
  }, [isOpen, newsItem]);

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

  const handleClearChat = async () => {
    setMessages([]);
    await localforage.removeItem(`news_ai_chat_${newsItem?.link || "general"}`);
  };

  const handleSend = async (customPrompt = null) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || loading || cooldown.isActive()) return;

    if (!apiKey) {
      openKeyModal();
      return;
    }
    if (!(await ensureAge())) return;
    // Перезарядку могли запустити в «Допомозі ШІ»
    if (await cooldown.sync()) return;

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
        model: NEWS_AI_MODEL,
        ...(googleSearchEnabled ? { tools: [{ googleSearch: {} }] } : {}),
      });

      let webContext = "";
      if (googleSearchEnabled) {
        webContext = await fetchFreeWebSearch(`${newsItem?.title || ""} ${textToSend}`);
      }
      const suggestionsInstruction = getSuggestionsInstruction(suggestedQuestionsCount);
      const systemInstructions = `Ти — ШІ-помічник для аналізу новин і живої дискусії.
${getResponseLengthInstruction(responseLength)}
Відповідай українською, якщо користувач не пише іншою мовою. Розрізняй підтверджені факти, твердження джерела та власні висновки; не вигадуй деталей, яких немає в новині чи наданому контексті.
Не підтакуй автоматично, не використовуй лестощів і не хвали користувача без конкретної підстави. Оцінюй твердження за доказами; якщо не погоджуєшся, спокійно поясни чому. Відокремлюй факти, припущення й оцінки та визнавай невизначеність.
Тримай стриманий, нейтральний і предметний тон без порожніх вступів і надмірної емоційності. Враховуй попередні репліки, пояснюй ключову логіку й за потреби став одне конкретне запитання, що допоможе перевірити припущення або обдумати тему. Не додавай запитання механічно.
Якщо користувач розв'язує навчальну задачу, спершу дай одну конкретну підказку — навіть на перше прохання про готову відповідь. Після його спроби допоможи з наступним кроком; якщо він повторно просить повний розв'язок, поясни його без подальших відмов.
Якщо користувач питає про суб'єктивний особистий вибір, наприклад колір волосся чи стін, прямо скажи, що це його особистий вибір, і не вирішуй за нього. Не видавай смак за об'єктивний факт і не підміняй відповідь шаблонною символікою. Допоможи визначити критерії та порівняти практичні наслідки; якщо критеріїв немає, постав одне конкретне запитання, яке допоможе людині обрати самостійно.
${suggestionsInstruction}`;
      const conversationContext = messages
        .slice(-6)
        .map((message) => `${message.isBot ? "Асистент" : "Користувач"}: ${message.text}`)
        .join("\n");
      const promptText = `${systemInstructions}
${conversationContext ? `Попередній діалог:\n${conversationContext}\n` : ""}Новина:
Заголовок: ${newsItem?.title || ""}
Опис: ${newsItem?.description || ""}
Посилання: ${newsItem?.link || ""}
${webContext}
Запит користувача: ${textToSend}`;

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
      cooldown.start(getCooldownSeconds(suggestedQuestionsCount));
    } catch (error) {
      console.error(error);
      const botMsg = {
        text: "⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",
        isBot: true,
      };
      saveHistory([...newMsgs, botMsg]);
      // Як і в ШІ-Допомозі: коротка пауза після помилки, щоб не спамити запитами при 429/503
      cooldown.start(5);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  // Рендеримо модальне вікно безпосередньо в document.body
  return createPortal(
    <>
    {keyElements}
    <ModalOverlay onClick={onClose}>
      <ModalContent $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
        <Header $isDarkMode={isDarkMode}>
          <TitleGroup>
            <HiSparkles style={{ color: "#ff8a3d", fontSize: 18 }} />
            <h3>ШІ Виклад новини</h3>
          </TitleGroup>
          <Tooltip content="Закрити" isDarkMode={isDarkMode}>
            <CloseBtn $isDarkMode={isDarkMode} onClick={onClose} aria-label="Закрити">
              <IoClose />
            </CloseBtn>
          </Tooltip>
        </Header>

        <ControlsBar $isDarkMode={isDarkMode}>
          <QuickGroup>
            <Tooltip content="Обсяг відповіді" isDarkMode={isDarkMode}>
              <FiAlignLeft />
            </Tooltip>
            <Segmented $isDarkMode={isDarkMode} role="group" aria-label="Обсяг відповіді">
              {[
                ["concise", "Менше"],
                ["normal", "Нормально"],
                ["detailed", "Більше"],
              ].map(([value, label]) => (
                <SegmentButton key={value} type="button" $active={responseLength === value} onClick={() => setResponseLength(value)}>
                  {label}
                </SegmentButton>
              ))}
            </Segmented>
          </QuickGroup>
          <QuickGroup>
            <Tooltip content="Кількість запропонованих питань (затримка між запитами)" isDarkMode={isDarkMode}>
              <FaLightbulb />
            </Tooltip>
            <Segmented
              $isDarkMode={isDarkMode}
              role="group"
              aria-label="Кількість запропонованих питань (затримка між запитами)"
            >
              {SUGGESTED_COUNT_OPTIONS.map(({ value, cooldown: delay }) => (
                <SegmentButton
                  key={value}
                  type="button"
                  $active={suggestedQuestionsCount === value}
                  onClick={async () => {
                    setSuggestedQuestionsCount(value);
                    await localforage.setItem(SUGGESTED_COUNT_KEY, value);
                  }}
                >
                  {value}
                  <small>{delay} с</small>
                </SegmentButton>
              ))}
            </Segmented>
          </QuickGroup>
          <ToggleChip
            type="button"
            $isDarkMode={isDarkMode}
            $active={googleSearchEnabled}
            aria-pressed={googleSearchEnabled}
            onClick={async () => {
              const next = !googleSearchEnabled;
              setGoogleSearchEnabled(next);
              await localforage.setItem("gemini_google_search_enabled", next);
            }}
          >
            <FiGlobe />
            Інтернет-пошук
          </ToggleChip>
        </ControlsBar>

        <Body $isDarkMode={isDarkMode}>
          {messages.length === 0 && !loading ? (
            <EmptyState $isDarkMode={isDarkMode}>
              <AnimatedCursor interval={250} />
              <div style={{ marginTop: "-140px", color: isDarkMode ? "#ffffff" : "#080808",}}>
                Задайте питання про новину або оберіть питання:
              </div>
              <StarterQuestionsCarousel
                isDarkMode={isDarkMode}
                onAsk={handleSend}
              />
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

        <KeyBar $isDarkMode={isDarkMode}>
          <GeminiKeyButton
            hasKey={Boolean(apiKey)}
            onClick={openKeyModal}
            isDarkMode={isDarkMode}
          />
        </KeyBar>

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
              <Tooltip content={isListening ? "Зупинити голосовий ввід" : "Голосовий ввід"} placement="top" isDarkMode={isDarkMode}>
                <InputIconButton
                  type="button"
                  onClick={handleVoiceInput}
                  aria-label={isListening ? "Зупинити голосовий ввід" : "Голосовий ввід"}
                >
                  {isListening ? <span aria-hidden="true">■</span> : <FaMicrophoneAlt />}
                </InputIconButton>
              </Tooltip>
              <Tooltip content="Очистити чат" placement="top" isDarkMode={isDarkMode}>
                <InputIconButton
                  type="button"
                  onClick={handleClearChat}
                  aria-label="Очистити чат"
                >
                  <RiDeleteBack2Fill />
                </InputIconButton>
              </Tooltip>
              <Tooltip content={cooldownSeconds > 0 ? `Перезарядка: ${cooldownSeconds} с` : "Надіслати"} placement="top" isDarkMode={isDarkMode}>
                <InputIconButton
                  type="button"
                  $primary
                  onClick={() => handleSend()}
                  disabled={loading || cooldownSeconds > 0 || !input.trim()}
                  aria-label={cooldownSeconds > 0 ? `Перезарядка: ${cooldownSeconds} с` : "Надіслати"}
                >
                  <FiSend />
                </InputIconButton>
              </Tooltip>
            </InputActions>
          </InputShell>
        </InputArea>
      </ModalContent>
    </ModalOverlay>
    </>,
    document.body
  );
}