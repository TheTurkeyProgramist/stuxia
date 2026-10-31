import React, { useState, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import ReactMarkdown from "react-markdown";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { hasBannedContent } from "../../utils/contentFilter";
import { fetchFreeWebSearch } from "../../utils/freeWebSearch";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiTimeTrap } from "react-icons/gi";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
  TbMessages,
  TbGauge,
  TbMessagePlus,
  TbPlus,
  TbRefresh,
  TbX,
} from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import { FaHandsHelping } from "react-icons/fa";
import { TbWorldStar } from "react-icons/tb";
import { IoIosCloudyNight } from "react-icons/io";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { FaClapperboard } from "react-icons/fa6";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,
  FloatingPortal,
  FloatingArrow,
} from "@floating-ui/react";
const TooltipBox = styled.div`
  background-color: ${(props) => (props.$isDarkMode ? "#0c0c0ceb" : "#fdff98e7")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${(props) => (props.$isDarkMode ? "0.5" : "0.15")});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`;
export const Tooltip = ({
  content,
  children,
  placement = "bottom",
  isDarkMode = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    strategy: "fixed",
    transform: false,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });
  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: {
      opacity: 0,
      transform: "scale(0.9)",
    },
    open: {
      opacity: 1,
      transform: "scale(1)",
    },
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  if (!content) return children;

  const bgTheme = isDarkMode ? "#111111" : "#ffffff";
  const borderTheme = "#00acb9";

  return (
    <>
      <span
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ display: "inline-flex" }}
      >
        {children}
      </span>
      {isMounted && (
        <FloatingPortal>
          <TooltipBox
            ref={refs.setFloating}
            $isDarkMode={isDarkMode}
            style={{ ...floatingStyles, ...transitionStyles }}
            {...getFloatingProps()}
          >
            {content}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={bgTheme}
              stroke={borderTheme}
              strokeWidth={1}
            />
          </TooltipBox>
        </FloatingPortal>
      )}
    </>
  );
};
//<Tooltip content="Змінити тему" isDarkMode={isDarkMode}>
/* ── Animations ── */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const typingDot = keyframes`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const MAX_MESSAGE_LENGTH = 300;
const GLOBAL_COOLDOWN_KEY = "gemini_global_cooldown_until";

/* ── Styled components ── */
const AihelpDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 18px 16px;
  gap: 12px;
  z-index: 100;
  position: relative;
  overflow: hidden;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    border 0.4s ease,
    border-radius 0.4s ease,
    padding 0.4s ease;
  ${(props) =>
    props.$isStickyBgMode
      ? css`
          background: ${props.$isDarkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
          padding: 10px;
        `
      : css`
          background: transparent;
        `}
`;

/* ── Desktop layout: sidebar + main area ── */
const DesktopLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: 10px;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

const DesktopSidebar = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: ${(p) => (p.$collapsed ? "0" : "240px")};
    flex-shrink: 0;
    border-right: 1px solid
      ${(p) =>
        p.$collapsed
          ? "transparent"
          : p.$isDarkMode
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)"};
    padding: ${(p) => (p.$collapsed ? "6px 0 8px 0" : "6px 8px 8px 0")};
    gap: 6px;
    overflow: hidden;
    opacity: ${(p) => (p.$collapsed ? 0 : 1)};
    pointer-events: ${(p) => (p.$collapsed ? "none" : "auto")};
    transition:
      width 0.28s cubic-bezier(0.22, 1, 0.36, 1),
      padding 0.28s ease,
      opacity 0.2s ease;
  }
`;

const SidebarTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)")};
  padding: 2px 4px 4px;
  flex-shrink: 0;
`;

const SidebarChatsList = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 149, 0, 0.5) transparent;
  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 999px;
  }
`;

const SidebarChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: ${(p) => (p.$active ? "700" : "500")};
  color: ${(p) =>
    p.$active
      ? "#ff9500"
      : p.$isDarkMode
        ? "rgba(255,255,255,0.75)"
        : "rgba(0,0,0,0.7)"};
  background: ${(p) =>
    p.$active
      ? p.$isDarkMode
        ? "rgba(255,149,0,0.15)"
        : "rgba(255,149,0,0.12)"
      : "transparent"};
  border: 1px solid
    ${(p) => (p.$active ? "rgba(255,149,0,0.4)" : "transparent")};
  transition: all 0.15s ease;
  overflow: hidden;
  min-width: 0;

  &:hover {
    background: ${(p) =>
      p.$active
        ? p.$isDarkMode
          ? "rgba(255,149,0,0.2)"
          : "rgba(255,149,0,0.17)"
        : p.$isDarkMode
          ? "rgba(255,255,255,0.07)"
          : "rgba(0,0,0,0.05)"};
    border-color: rgba(255, 149, 0, 0.25);
  }
`;

const SidebarChatLabel = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SidebarDeleteBtn = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: rgba(255, 80, 80, 0.6);
  font-size: 15px;
  cursor: pointer;
  padding: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.15s;

  ${SidebarChatItem}:hover & {
    opacity: 1;
  }

  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.12);
  }
`;

const SidebarNewChatBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px dashed rgba(255, 149, 0, 0.5);
  background: rgba(255, 149, 0, 0.06);
  color: #ff9500;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 149, 0, 0.14);
    border-color: #ff9500;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`;

const ChatMainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
  gap: 6px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-left: ${(p) => (p.$sidebarCollapsed ? "0" : "10px")};
    transition: padding 0.28s ease;
  }
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2px;
`;

const ChatControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media (max-width: 600px) {
    margin-right: auto;
  }
`;

const ChatHeaderBtn = styled.button`
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  background: ${(p) => (p.$isDarkMode ? "rgba(255, 160, 0, 0.15)" : "rgba(255, 140, 0, 0.12)")};
  border: 1px solid rgba(255, 160, 0, 0.45);
  color: ${(p) => (p.$isDarkMode ? "#ffcf9e" : "#d96500")};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 160, 0, 0.25);
    border-color: #ff9500;
    transform: translateY(-1px);
  }
`;

const SidebarToggleBtn = styled(ChatHeaderBtn)`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  font-size: 16px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NewChatHeaderBtn = styled.button`
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  padding: 8px 18px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 8px rgba(255, 149, 0, 0.35);
  transition: all 0.2s ease;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 149, 0, 0.45);
  }
`;

const CloseAiModalHeaderBtn = styled.button`
  background: ${(p) => (p.$isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)")};
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)")};
  color: ${(p) => (p.$isDarkMode ? "#fff" : "#111")};
  width: 34px;
  height: 34px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 77, 77, 0.2);
    border-color: #ff4d4d;
    color: #ff4d4d;
    transform: scale(1.08);
  }
`;

const SettingsPanel = styled.div`
  flex-shrink: 0;
  padding: 10px 16px;
  background: ${(p) =>
    p.$isStickyBgMode
      ? p.$isDarkMode
        ? "rgba(10, 10, 20, 0.82)"
        : "rgba(255, 249, 235, 0.9)"
      : p.$isDarkMode
        ? "rgba(12, 12, 12, 0.72)"
        : "#fffbf0"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  border: 1px solid rgba(255, 160, 0, 0.28);
  border-radius: 14px;
  z-index: 100;
  position: relative;
  color: ${(p) => (p.$isDarkMode ? "white" : "black")};
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
`;

const ProviderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${(p) => (p.$isDarkMode ? "white" : "black")};
  ${(p) =>
    p.$isStickyBgMode
      ? css`
          background: ${p.$isDarkMode ? "rgba(15,15,25,0.4)" : "rgba(255,255,255,0.55)"};
          padding: 6px 8px;
          border-radius: 8px;
        `
      : ""}
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    min-width: 100px;
  }
  input[type="radio"] {
    margin-right: 8px;
    accent-color: orange;
  }
  input[type="password"] {
    flex: 1;
    min-width: 200px;
    padding: 9px 14px;
    border-radius: 10px;
    border: 1px solid ${(p) => (p.$hasError ? "#ff4d4d" : "rgba(255,160,0,0.3)")};
    background: ${(p) =>
    p.$isDarkMode ? "rgba(30,30,40,0.7)" : "rgba(255,255,255,0.85)"};
    color: ${(p) => (p.$isDarkMode ? "white" : "black")};
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    &:focus {
      border-color: orange;
      box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.15);
    }
  }
`;

const GetKeyLink = styled.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`;

const ChatHistory = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  gap: 10px;
  overflow-y: auto;
  padding: 8px max(6px, calc((100% - 960px) / 2));
  border-radius: 10px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
`;

const Message = styled.div`
  align-self: ${(p) => (p.$isBot ? "flex-start" : "flex-end")};
  max-width: 78%;
  background: ${(p) =>
    p.$isBot
      ? p.$isDarkMode
        ? "rgba(28, 28, 42, 0.88)"
        : "rgba(245,245,252,0.94)"
      : "linear-gradient(135deg, rgba(30,30,30,0.92), rgba(20,20,20,0.95))"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  color: ${(p) => (p.$isBot ? (p.$isDarkMode ? "#f0f0f0" : "#111") : "#fff")};
  border: 1px solid
    ${(p) =>
    p.$isBot
      ? p.$isDarkMode
        ? "rgba(255,255,255,0.1)"
        : "rgba(0,0,0,0.1)"
      : "rgba(255,149,0,0.3)"};
  padding: 10px 15px;
  border-radius: ${(p) => (p.$isBot ? "4px 16px 16px 16px" : "16px 4px 16px 16px")};
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  animation: ${fadeIn} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`;

const CopyButton = styled.button`
  position: absolute;
  right: 0px;
  top: -10px;
  color: inherit;
  cursor: pointer;
  font-size: 29px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${Message}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
  }
`;

const ErrorBox = styled.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${fadeIn} 0.2s ease;
`;

const RetryButton = styled.button`
  padding: 5px 14px;
  border-radius: 5px;
  border: 1px solid rgba(255, 107, 107, 0.5);
  background: transparent;
  color: #ff6b6b;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  &:hover { background: rgba(255, 107, 107, 0.12); }
`;

const TypingIndicator = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${(p) =>
    p.$isDarkMode ? "rgba(28,28,42,0.88)" : "rgba(245,245,252,0.94)"};
  border: 1px solid
    ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  border-radius: 4px 14px 14px 14px;
  animation: ${fadeIn} 0.2s ease;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${typingDot} 1.2s ease infinite;
  animation-delay: ${(p) => p.$delay};
`;

const InputContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.22);
  border: 1.5px solid ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"};
  border-radius: 16px;
  background: ${(p) =>
    p.$isDarkMode ? "rgba(10,10,18,0.88)" : "rgba(255,255,255,0.9)"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  transition:
    background 0.4s ease,
    border-color 0.2s,
    box-shadow 0.2s;
  &:focus-within {
    border-color: rgba(255, 149, 0, 0.7);
    box-shadow: 0 0 0 3px rgba(255, 149, 0, 0.1);
  }
`;

const InputQuickSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px 6px;
  flex-wrap: wrap;
  border-bottom: 1px dashed ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"};
`;

const SuggestedQuestionsSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const QuickGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

const QuickLabel = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #ff9500;
  letter-spacing: 0.5px;
  margin-right: 2px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const QuickSelect = styled.select`
  appearance: none;
  background: ${(p) =>
    p.$isDarkMode ? "rgba(255,165,0,0.12)" : "rgba(255,140,0,0.08)"};
  border: 1px solid
    ${(p) => (p.$isDarkMode ? "rgba(255,165,0,0.35)" : "rgba(255,140,0,0.3)")};
  border-radius: 5px;
  padding: 3px 22px 3px 7px;
  font-size: 11px;
  font-weight: 600;
  color: ${(p) => (p.$isDarkMode ? "#ffcf9e" : "#d96500")};
  cursor: pointer;
  outline: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23ff9500' d='M0 0l5 6 5-6z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  transition: all 0.2s ease;

  &:hover, &:focus {
    border-color: #ff9500;
    box-shadow: 0 0 0 2px rgba(255, 149, 0, 0.15);
  }

  option {
    background: ${(p) => (p.$isDarkMode ? "#1e1e2a" : "#ffffff")};
    color: ${(p) => (p.$isDarkMode ? "#ffffff" : "#111111")};
    font-size: 12px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  padding: 14px 16px;
  border-radius: 16px 16px 0 0;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.92)" : "#111")};
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: auto;
  min-height: 46px;
  max-height: 140px;
  line-height: 1.5;
  &::placeholder {
    color: ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)"};
    font-size: 13px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"};
`;

const MessageCounter = styled.span`
  margin-right: auto;
  color: ${(p) =>
    p.$isLimitReached
      ? "#ff6b6b"
      : p.$isDarkMode
        ? "rgba(255,255,255,0.55)"
        : "rgba(0,0,0,0.5)"};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`;

const IconBtn = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid transparent;
  background: transparent;
  color: ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.55)"};
  font-size: ${(p) => p.$size || "18px"};
  cursor: pointer;
  transition: all 0.2s;
  &:disabled { opacity: 0.35; cursor: not-allowed; }
  &:hover:not(:disabled) {
    background: ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"};
    color: ${(p) => (p.$isDarkMode ? "#fff" : "#000")};
    transform: scale(1.08);
  }
  ${(p) =>
    p.$danger &&
    css`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${(p) =>
    p.$listening &&
    css`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`;

const SendButton = styled.button`
  height: 32px;
  padding: 0 14px;
  border-radius: 5px;
  border: none;
  background: ${(p) =>
    p.disabled
      ? p.$isDarkMode
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.08)"
      : "linear-gradient(135deg, #ff9500, #ff6b00)"};
  color: ${(p) =>
    p.disabled
      ? p.$isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"
      : "#fff"};
  font-size: 13px;
  font-weight: 700;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;
  box-shadow: ${(p) => (p.disabled ? "none" : "0 2px 8px rgba(255,149,0,0.35)")};
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(255, 149, 0, 0.45);
  }
  &:active:not(:disabled) { transform: translateY(0); }
`;

const FilePreviewContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`;

const FileThumb = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.$isDarkMode ? "rgba(40,40,55,0.9)" : "#f0f0f0")};
  border-radius: 8px;
  border: 1px solid rgba(255, 149, 0, 0.45);
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
`;

const RemoveFileBtn = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 5px;
  width: 17px;
  height: 17px;
  font-size: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: transform 0.15s;
  &:hover { transform: scale(1.15); }
`;

const StatusText = styled.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 2s linear infinite;
`;

const FileSizeText = styled.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`;

const ViewerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.2s ease;
`;

const ViewerClose = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: scale(1.08);
  }
`;

const ViewerFileName = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ViewerImage = styled.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`;

const ViewerVideo = styled.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`;

const AudioBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const AudioIcon = styled.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`;

const WaveformBars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`;

const WaveBar = styled.div`
  width: 4px;
  border-radius: 2px;
  background: linear-gradient(180deg, #ff9500, #ff6b00);
  height: ${(p) => p.$h}%;
  opacity: ${(p) => (p.$playing ? 1 : 0.35)};
  animation: ${(p) =>
    p.$playing ? `wavePulse ${p.$dur}s ease-in-out infinite alternate` : "none"};
  @keyframes wavePulse {
    from { height: ${(p) => p.$h}%; }
    to   { height: ${(p) => Math.min(100, p.$h + 40)}%; }
  }
`;

const MediaControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`;

const PlayPauseBtn = styled.button`
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  font-size: 20px;
  width: 48px;
  height: 48px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(255, 149, 0, 0.4);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(255, 149, 0, 0.55);
  }
`;

const TimelineBar = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`;

const TimelineFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`;

const TimeLabel = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`;

const SpeedRow = styled.div`
  display: flex;
  gap: 6px;
`;

const SpeedBtn = styled.button`
  border: 1px solid ${(p) => (p.$active ? "#ff9500" : "rgba(255,255,255,0.15)")};
  border-radius: 5px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  background: ${(p) =>
    p.$active ? "linear-gradient(135deg, #ff9500, #ff6b00)" : "transparent"};
  color: ${(p) => (p.$active ? "#fff" : "rgba(255,255,255,0.7)")};
  font-weight: ${(p) => (p.$active ? "700" : "400")};
  transition: all 0.2s;
  &:hover { border-color: #ff9500; }
`;

const AudioHidden = styled.audio`
  display: none;
`;

const SetBgButton = styled.button`
  padding: 7px 18px;
  border-radius: 5px;
  border: 1px solid rgba(255, 149, 0, 0.5);
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 149, 0, 0.15);
    border-color: #ff9500;
    color: #fff;
  }
`;

const AttachedCardsContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px 2px;
  flex-shrink: 0;
`;
const AttachedChip = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(p) => (p.$isDarkMode ? "rgba(255, 105, 180, 0.18)" : "rgba(255, 105, 180, 0.12)")};
  border: 1px solid rgba(255, 105, 180, 0.45);
  color: ${(p) => (p.$isDarkMode ? "#ffb6c1" : "#d81b60")};
  border-radius: 7px;
  padding: 0 4px;
  font-size: 12px;
  font-weight: 600;
  max-width: 295px;
  > svg {
    font-size: 28px;
    flex-shrink: 0;
  }
  > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  button {
    background: transparent;
    border: none;
    color: inherit;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    &:hover {
      color: #ff4d4d;
    }
  }
`;
const LimitsButton = styled.button`
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  background: rgba(255, 160, 0, 0.12);
  border: 1px solid rgba(255, 160, 0, 0.35);
  color: ${(p) => (p.$isDarkMode ? "#ffcf9e" : "#d96500")};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 160, 0, 0.22);
    border-color: #ff9500;
    transform: translateY(-1px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow-y: auto;
  animation: ${fadeIn} 0.2s ease;
`;

const DesktopOnlyModalOverlay = styled(ModalOverlay)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const ModalContainer = styled.div`
  width: min(500px, 92vw);
  max-height: calc(100vh - 32px);
  background: ${(p) => (p.$isDarkMode ? "#1a1a26" : "#ffffff")};
  color: ${(p) => (p.$isDarkMode ? "#f0f0f0" : "#111111")};
  border: 1px solid rgba(255, 160, 0, 0.4);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 160, 0, 0.2);

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #ff9500;
    display: flex;
    align-items: center;
  }
`;

const ModalCloseBtn = styled.button`
  background: transparent;
  border: none;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)")};
  font-size: 22px;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 5px;
  font-weight: 900;
  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.1);
  }
`;

const LimitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: min(42vh, 260px);
  padding-right: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 149, 0, 0.7) transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 999px;
  }
`;

const LimitItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"};
  border-radius: 8px;
  font-size: 13px;

  span:first-child {
    font-weight: 600;
  }
  span:last-child {
    font-weight: 700;
    color: #ff9500;
  }
`;

const NoteBox = styled.div`
  background: ${(p) =>
    p.$isDarkMode ? "rgba(255, 160, 0, 0.08)" : "rgba(255, 160, 0, 0.06)"};
  border: 1px solid rgba(255, 160, 0, 0.25);
  border-radius: 10px;
  padding: 12px;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.8)")};

  strong {
    color: #ff9500;
  }
`;

const ChatsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: min(52vh, 420px);
  overflow-y: auto;
  padding-right: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 149, 0, 0.7) transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 999px;
  }
`;

const ChatItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 10px;
  background: ${(p) =>
    p.$active
      ? p.$isDarkMode
        ? "rgba(255, 149, 0, 0.2)"
        : "rgba(255, 149, 0, 0.15)"
      : p.$isDarkMode
        ? "rgba(255, 255, 255, 0.04)"
        : "rgba(0, 0, 0, 0.04)"};
  border: 1px solid
    ${(p) =>
    p.$active
      ? "#ff9500"
      : p.$isDarkMode
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.08)"};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border-color: #ff9500;
    background: ${(p) => (p.$isDarkMode ? "rgba(255, 160, 0, 0.12)" : "rgba(255, 160, 0, 0.08)")};
  }
`;

const ChatItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

const ChatItemTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => (p.$active ? "#ff9500" : "inherit")};
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActiveBadge = styled.span`
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  background: #ff9500;
  color: #fff;
  padding: 1px 6px;
  border-radius: 999px;
  letter-spacing: 0.5px;
`;

const ChatItemMeta = styled.div`
  font-size: 11px;
  opacity: 0.65;
`;

const DeleteChatBtn = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 80, 80, 0.75);
  font-size: 26px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 5px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.15);
    transform: scale(1.1);
  }
`;

const NewChatModalBtn = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px dashed #ff9500;
  background: rgba(255, 149, 0, 0.08);
  color: #ff9500;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 149, 0, 0.18);
    transform: translateY(-1px);
  }
`;

/* ── Mobile Chat Sidebar Drawer ── */
const MobileChatDrawerOverlay = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 9990;
    background: rgba(0, 0, 0, ${(p) => (p.$open ? "0.5" : "0")});
    pointer-events: ${(p) => (p.$open ? "all" : "none")};
    transition: background 0.3s ease;
  }
`;

const MobileChatDrawer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: min(80vw, 300px);
    z-index: 9991;
    background: ${(p) => (p.$isDarkMode ? "#1a1a26" : "#ffffff")};
    color: ${(p) => (p.$isDarkMode ? "#f0f0f0" : "#111111")};
    border-right: 1px solid rgba(255, 160, 0, 0.4);
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.35);
    transform: translateX(${(p) => (p.$open ? "0" : "-100%")});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 16px 12px 24px;
    gap: 8px;
    overflow: hidden;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255, 160, 0, 0.2);
  flex-shrink: 0;
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #ff9500;
  }
`;

const DrawerCloseBtn = styled.button`
  background: transparent;
  border: none;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)")};
  font-size: 22px;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 900;
  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.1);
  }
`;

const DrawerChatsList = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 2px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 149, 0, 0.7) transparent;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 999px;
  }
`;

/* ── New Starter & Suggested Questions Styled Components ── */
const EmptyChatWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  margin: auto 0;
  text-align: center;
  gap: 12px;
  animation: ${fadeIn} 0.3s ease;
`;

const WelcomeTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.2px;
  background: linear-gradient(90deg, #ffb347, #ff7a00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ff9500;
  max-width: 640px;
  line-height: 1.3;
`;

const StarterQuestionsGrid = styled.div`
  width: 100%;
  max-width: 580px;
  margin-top: 10px;
`;

const StarterCarouselViewport = styled.div`
  height: 152px;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 12%,
    #000 88%,
    transparent 100%
  );
`;

const StarterQuestionCard = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 46px;
  flex: 0 0 46px;
  padding: 8px 12px;
  box-sizing: border-box;
  transform: scale(${(p) => (p.$isCenter ? 1 : 0.94)});
  border-radius: 12px;
  border: 1px solid ${(p) => (p.$isDarkMode ? "rgba(255, 160, 0, 0.3)" : "rgba(255, 140, 0, 0.25)")};
  background: ${(p) => (p.$isDarkMode ? "rgba(255, 160, 0, 0.08)" : "rgba(255, 140, 0, 0.06)")};
  color: ${(p) => (p.$isDarkMode ? "#f0f0f0" : "#222")};
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition:
    transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  span { font-size: 16px; }
  &:hover {
    background: rgba(255, 160, 0, 0.2);
    border-color: #ff9500;
    box-shadow: 0 4px 12px rgba(255, 149, 0, 0.2);
  }
  svg {
    font-size: 21px;
    flex-shrink: 0;
  }
`;

const StarterCarouselTrack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  transition: ${(p) =>
    p.$isResetting
      ? "none"
      : "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"};
  transform: ${(p) => `translateY(-${p.$position * 53}px)`};
`;

const StarterQuestionsCarousel = ({ isDarkMode, onAsk }) => {
  const questions = [
    { text: "Які новини про погоду у світі?", icon: <TbWorldStar /> },
    { text: "Як зміни клімату впливають на природу?", icon: <PiNewspaperClippingFill /> },
    { text: "Яка погода буде завтра в Києві?", icon: <IoIosCloudyNight /> },
    { text: "Порадь екологічні компанії", icon: < FaHandsHelping/> },
    { text: "Порадити гру, кіно і т.д.?", icon: <FaClapperboard /> },
  ];
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setPosition((current) => current + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <StarterQuestionsGrid
      role="group"
      aria-label="Популярні запитання"
      aria-roledescription="карусель"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <StarterCarouselViewport>
        <StarterCarouselTrack
          $position={position}
          $isResetting={isResetting}
          onTransitionEnd={(event) => {
            if (
              event.propertyName === "transform" &&
              position === questions.length
            ) {
              setIsResetting(true);
              setPosition(0);
              requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsResetting(false));
              });
            }
          }}
        >
          {[...questions, ...questions.slice(0, 3)].map((question, index) => {
            const isVisible = index >= position && index < position + 3;
            return (
              <StarterQuestionCard
                key={`${question.text}-${index}`}
                type="button"
                $isDarkMode={isDarkMode}
                $isCenter={index === position + 1}
                onClick={() => onAsk(question.text)}
                aria-hidden={!isVisible}
                tabIndex={isVisible ? 0 : -1}
              >
                <span>{question.icon}</span>
                {question.text}
              </StarterQuestionCard>
            );
          })}
        </StarterCarouselTrack>
      </StarterCarouselViewport>
    </StarterQuestionsGrid>
  );
};

const SuggestedQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: flex-start;
  margin: 2px 0 8px 10px;
  max-width: 85%;
  animation: ${fadeIn} 0.3s ease;
`;

const SuggestedTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #ff9500;
  letter-spacing: 0.5px;
`;

const MessageMeta = styled.div`
  margin-top: 6px;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)")};
  font-size: 10px;
`;

const EditQuestionButton = styled.button`
  margin-top: 6px;
  padding: 3px 8px;
  border: 1px solid rgba(255, 149, 0, 0.4);
  border-radius: 6px;
  background: transparent;
  color: ${(p) => (p.$isDarkMode ? "#ffcf9e" : "#d96500")};
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 149, 0, 0.12);
  }
`;

const SuggestedPillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SuggestedPillBtn = styled.button`
  background: ${(p) => (p.$isDarkMode ? "rgba(255, 165, 0, 0.12)" : "rgba(255, 140, 0, 0.09)")};
  border: 1px solid rgba(255, 160, 0, 0.4);
  color: ${(p) => (p.$isDarkMode ? "#ffcf9e" : "#d96500")};
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: rgba(255, 160, 0, 0.25);
    border-color: #ff9500;
    transform: translateY(-1px);
  }
`;

/* ── Exported helpers ── */
export const getResponseLengthInstruction = (responseLength) => {
  if (responseLength === "detailed")
    return { label: "Більше", instruction: "Докладно." };
  if (responseLength === "normal")
    return { label: "Нормально", instruction: "Нормально." };
  return { label: "Менше", instruction: "Коротко." };
};

export const getResponseStyleInstruction = (responseStyle) => {
  if (responseStyle === "scientific")
    return {
      label: "Науково",
      instruction: "Використовуй науковий стиль, чітко, з термінами і логікою.",
    };
  if (responseStyle === "friendly")
    return {
      label: "Дружньо",
      instruction: "Використовуй дружній, теплий і простий стиль.",
    };
  return {
    label: "Стандартно",
    instruction: "Використовуй нейтральний стиль.",
  };
};

export const parseSuggestedQuestions = (text) => {
  if (!text) return { cleanText: text, questions: [] };
  const regex = /\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/;
  const match = text.match(regex);
  if (!match) return { cleanText: text, questions: [] };
  const cleanText = text.replace(regex, "").trim();
  const rawQuestions = match[1]
    .split("\n")
    .map((q) => q.replace(/^[•\-*\d.\s]+/, "").trim())
    .filter((q) => q.length > 0)
    .slice(0, 3);
  return { cleanText, questions: rawQuestions };
};

const getSystemPrompt = (suggestedQuestionsCount) => {
  const suggestionsInstruction =
    suggestedQuestionsCount === 0
      ? "11. Не додавай рекомендованих питань або блок [РЕКОМЕНДОВАНІ_ПИТАННЯ]."
      : `11. Наприкінці кожної відповіді додавай рівно ${suggestedQuestionsCount} коротких змістовних питань у форматі [РЕКОМЕНДОВАНІ_ПИТАННЯ]. Питання мають допомагати обдумати тему, перевірити припущення або побачити іншу перспективу, а не просто заохочувати продовжувати чат.`;

  return `Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
КОНЦЕПЦІЯ ПЛАТФОРМИ:
«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:
• Погода — якщо надано актуальні дані погодного API або віджета, обов'язково давай конкретну відповідь із цифрами (температура, опади, вітер, стан неба).
• Новини — RSS-стрічки з автоматичним фільтром.
• Карта клімату — інтерактивна кліматична карта.
• Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.

АВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com
Вікові обмеження: 13+
Конфіденційність: платформа не збирає персональні дані.

ТВОЇ ПРАВИЛА:
1. Якщо у вхідних даних є погодний контекст (Open-Meteo або інтернет-пошук), ЗАВЖДИ відповідай конкретним прогнозом (температура, сонячно/хмарно/дощ, вітер, опади) для запитаного міста/дня (наприклад, завтра в Києві), а не слати на сторінку погоди.
2. Якщо питання стосується платформи — відповідай конкретно і по суті.
3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.
4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.
5. Відповідай українською мовою, якщо запит не на іншій мові.
6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.
7. Не підтакуй автоматично, не використовуй лестощів і не хвали користувача без конкретної підстави. Оцінюй твердження за доказами та логікою; якщо не погоджуєшся, спокійно поясни чому й наведи сильні контраргументи. Відокремлюй факти, припущення й оцінки; визнавай невизначеність і прямо виправляй власні помилки.
8. Тримай стриманий, нейтральний і предметний тон — без надмірної теплоти, вибачень, захоплення чи порожніх вступів. Пояснюй ключову логіку стисло й підтримуй дискусію запитанням, яке допоможе перевірити припущення або самостійно обдумати тему, коли це доречно. Не завершуй кожну відповідь шаблонним запитанням; невимушено пропонувати цікавий факт, зокрема про Азію, можна лише за контекстом.
9. Якщо користувач навчається або розв'язує задачу, почни з однієї конкретної підказки, яка допоможе зробити наступний крок, і запропонуй спробувати. Це правило діє і тоді, коли користувач одразу просить готову відповідь: не розкривай її в першій відповіді, натомість дай підказку. Після спроби користувача реагуй саме на неї: поясни помилку або дай наступну підказку, не повторюй ту саму і не відмовляй уперто. Якщо користувач після підказки чи спроби повторно просить повний розв'язок або відповідь, надай їх із зрозумілим поясненням; не затягуй навчальний режим після такого повторного прохання.
10. Якщо користувач питає про суб'єктивний особистий вибір — наприклад, колір волосся чи стін — прямо скажи, що це його особистий вибір, і не обирай за нього. Не видавай перевагу кольору за об'єктивний факт і не підміняй допомогу шаблонною символікою. Замість цього допоможи людині визначити власні критерії, порівняти практичні наслідки й уподобання або постав одне конкретне запитання, яке допоможе їй вирішити. Якщо користувач уже назвав свої критерії, допоможи їх зважити, але остаточний вибір залиш за ним.
${suggestionsInstruction}
${suggestedQuestionsCount === 0 ? "" : `[РЕКОМЕНДОВАНІ_ПИТАННЯ]
• Запитання${suggestedQuestionsCount > 1 ? " 1" : ""}?
${suggestedQuestionsCount > 1 ? "• Запитання 2?" : ""}
[/РЕКОМЕНДОВАНІ_ПИТАННЯ]`}`;
};

const createDefaultChatObject = (index = 1, initialMessages = []) => ({
  id: `chat_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
  title: `Чат ${index}`,
  messages: initialMessages,
  createdAt: Date.now(),
});

/* ── Component ── */
const Aihelp = ({ isDarkMode, isStickyBgMode, onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState("");
  const [isChatsModalOpen, setIsChatsModalOpen] = useState(false);
  const [personalApiKey, setPersonalApiKey] = useState("");
  const [geminiModel, setGeminiModel] = useState("gemini-3.5-flash-lite");
  const [responseLength, setResponseLength] = useState("normal");
  const [responseStyle, setResponseStyle] = useState("friendly");
  const [suggestedQuestionsCount, setSuggestedQuestionsCount] = useState("2");
  const [isLimitsModalOpen, setIsLimitsModalOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    try {
      return localStorage.getItem("ai_help_sidebar_collapsed") === "1";
    } catch {
      return false;
    }
  });
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("ai_help_sidebar_collapsed", next ? "1" : "0");
      } catch {
        /* localStorage недоступний */
      }
      return next;
    });
  };
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [attachedCards, setAttachedCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [googleSearchEnabled, setGoogleSearchEnabled] = useState(true);

  // Mobile drawer swipe state
  const swipeTouchStartX = useRef(null);
  const swipeTouchStartY = useRef(null);

  useEffect(() => {
    const handleAttachCard = (e) => {
      if (e.detail) {
        setAttachedCards((prev) => {
          if (prev.some((c) => c.id === e.detail.id)) {
            toast.error("Цю картку вже прикріплено!");
            return prev;
          }
          if (prev.length >= 4) {
            toast.error("Максимум 4 прикріплення.");
            return prev;
          }
          toast.success(`Прикріплено: ${e.detail.title}`);
          return [...prev, e.detail];
        });
      }
    };
    window.addEventListener("attachCardToAiHelp", handleAttachCard);
    return () => window.removeEventListener("attachCardToAiHelp", handleAttachCard);
  }, []);

  const [status, setStatus] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const lastPromptRef = useRef("");
  const [totalFilesSize, setTotalFilesSize] = useState(0);
  const [error, setError] = useState(null);
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const [viewingFile, setViewingFile] = useState(null);
  const [mediaPlaying, setMediaPlaying] = useState(false);
  const [mediaProgress, setMediaProgress] = useState(0);
  const [mediaDuration, setMediaDuration] = useState(0);
  const [mediaCurrentTime, setMediaCurrentTime] = useState(0);
  const [mediaSpeed, setMediaSpeed] = useState(1);
  const objectURLs = useRef([]);
  const textareaRef = useRef(null);
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const mediaRef = useRef(null);
  const cooldownUntilRef = useRef(0);
  const requestInFlightRef = useRef(false);

  useEffect(() => {
    if (!cooldownUntil) return undefined;

    const updateCooldown = () => {
      const remaining = Math.max(0, cooldownUntil - Date.now());
      setCooldownSeconds(Math.ceil(remaining / 1000));
      if (remaining === 0) {
        setCooldownUntil(0);
        cooldownUntilRef.current = 0;
      }
    };

    updateCooldown();
    const timer = setInterval(updateCooldown, 250);
    return () => clearInterval(timer);
  }, [cooldownUntil]);

  // Active chat calculation
  const activeChat = chats.find((c) => c.id === activeChatId) || chats[0];
  const messages = activeChat ? activeChat.messages : [];

  const updateChatMessages = (chatId, updater) => {
    setChats((prevChats) => {
      const newChats = prevChats.map((chat) => {
        if (chat.id !== chatId) return chat;
        const newMessages = typeof updater === "function" ? updater(chat.messages) : updater;
        let newTitle = chat.title;
        if ((chat.title.startsWith("Чат ") || !chat.title) && newMessages.length > 0) {
          const firstUserMsg = newMessages.find((m) => !m.isBot);
          if (firstUserMsg && firstUserMsg.text) {
            const preview = firstUserMsg.text.trim();
            if (preview) {
              newTitle = preview.length > 28 ? preview.slice(0, 28) + "..." : preview;
            }
          }
        }
        return {
          ...chat,
          title: newTitle,
          messages: newMessages.slice(-50),
        };
      });
      localforage.setItem("ai_help_chats_v2", newChats);
      return newChats;
    });
  };

  const handleCreateNewChat = () => {
    if (chats.length >= 10) {
      toast.error("Досягнуто ліміт 10 паралельних чатів. Видаліть непотрібний чат.");
      return;
    }
    const nextNum = chats.length + 1;
    const newChat = createDefaultChatObject(nextNum, []);
    const updated = [...chats, newChat];
    setChats(updated);
    setActiveChatId(newChat.id);
    localforage.setItem("ai_help_chats_v2", updated);
    localforage.setItem("ai_help_active_chat_id", newChat.id);
    clearFiles();
    setPrompt("");
    toast.success(`Створено новий чат! (${updated.length}/10)`);
  };

  const handleSelectChat = (chatId) => {
    setActiveChatId(chatId);
    localforage.setItem("ai_help_active_chat_id", chatId);
    setIsChatsModalOpen(false);
  };

  const handleDeleteChat = (chatId, e) => {
    if (e) e.stopPropagation();

    if (chats.length <= 1) {
      const resetChat = createDefaultChatObject(1, []);
      setChats([resetChat]);
      setActiveChatId(resetChat.id);
      localforage.setItem("ai_help_chats_v2", [resetChat]);
      localforage.setItem("ai_help_active_chat_id", resetChat.id);
      toast.success("Чат очищено");
      return;
    }

    const updated = chats.filter((c) => c.id !== chatId);
    setChats(updated);
    localforage.setItem("ai_help_chats_v2", updated);

    if (activeChatId === chatId) {
      const nextActiveId = updated[0].id;
      setActiveChatId(nextActiveId);
      localforage.setItem("ai_help_active_chat_id", nextActiveId);
    }

    toast.success("Чат видалено");
  };

  // Swipe handlers for mobile drawer
  const handleTouchStart = (e) => {
    swipeTouchStartX.current = e.touches[0].clientX;
    swipeTouchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (swipeTouchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - swipeTouchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - swipeTouchStartY.current);
    // Only horizontal swipes (dx > dy threshold)
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy * 1.5) {
      if (dx > 0 && swipeTouchStartX.current < 30) {
        // Swipe right from left edge → open drawer
        setIsChatsModalOpen(true);
      } else if (dx < 0 && isChatsModalOpen) {
        // Swipe left → close drawer
        setIsChatsModalOpen(false);
      }
    }
    swipeTouchStartX.current = null;
    swipeTouchStartY.current = null;
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const openViewer = (fileObj) => {
    setViewingFile(fileObj);
    setMediaPlaying(false);
    setMediaProgress(0);
    setMediaCurrentTime(0);
    setMediaDuration(0);
    setMediaSpeed(1);
  };

  const closeViewer = () => {
    if (mediaRef.current) mediaRef.current.pause();
    setViewingFile(null);
    setMediaPlaying(false);
  };

  const togglePlay = () => {
    if (!mediaRef.current) return;
    if (mediaRef.current.paused) { mediaRef.current.play(); }
    else { mediaRef.current.pause(); }
  };

  const handleMediaTimeUpdate = () => {
    if (!mediaRef.current) return;
    const { currentTime, duration } = mediaRef.current;
    setMediaCurrentTime(currentTime);
    setMediaProgress(duration ? currentTime / duration : 0);
  };

  const handleMediaLoaded = () => {
    if (!mediaRef.current) return;
    setMediaDuration(mediaRef.current.duration);
    mediaRef.current.playbackRate = mediaSpeed;
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    if (mediaRef.current && mediaRef.current.duration) {
      mediaRef.current.currentTime = ratio * mediaRef.current.duration;
    }
  };

  const handleSpeedChange = (speed) => {
    setMediaSpeed(speed);
    if (mediaRef.current) mediaRef.current.playbackRate = speed;
  };

  const handleTextChange = (e) => {
    const nextPrompt = e.target.value.slice(0, MAX_MESSAGE_LENGTH);
    setPrompt(nextPrompt);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;
    const dist = container.scrollHeight - container.scrollTop - container.clientHeight;
    if (dist < 150) container.scrollTop = container.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!streamingText) return;
    const container = chatContainerRef.current;
    if (!container) return;
    const dist = container.scrollHeight - container.scrollTop - container.clientHeight;
    if (dist < 150) container.scrollTop = container.scrollHeight;
  }, [streamingText]);

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Ваш браузер не підтримує розпізнавання голосу.");
      return;
    }
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "uk-UA";
    recognition.interimResults = false;
    recognition.onstart = () => { setIsListening(true); setStatus("Слухаю вас..."); };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setPrompt((prev) =>
        `${prev ? `${prev} ` : ""}${transcript}`.slice(0, MAX_MESSAGE_LENGTH),
      );
    };
    recognition.onerror = () => { setIsListening(false); setStatus(""); recognitionRef.current = null; };
    recognition.onend = () => { setIsListening(false); setStatus(""); recognitionRef.current = null; };
    recognition.start();
  };

  useEffect(() => {
    const loadKeyAndChats = async () => {
      const gK = await localforage.getItem("gemini_api_key");
      const gM = await localforage.getItem("gemini_model");
      const savedGoogleSearch = await localforage.getItem("gemini_google_search_enabled");
      const savedSuggestedQuestionsCount = await localforage.getItem(
        "gemini_suggested_questions_count",
      );
      if (gK) {
        const cleaned = typeof gK === "string" ? gK.trim().replace(/^["']|["']$/g, "") : gK;
        setPersonalApiKey(cleaned);
      }
      if (gM) setGeminiModel(gM);
      if (savedGoogleSearch !== null) setGoogleSearchEnabled(savedGoogleSearch);
      if (["0", "1", "2"].includes(savedSuggestedQuestionsCount)) {
        setSuggestedQuestionsCount(savedSuggestedQuestionsCount);
      }

      const savedChats = await localforage.getItem("ai_help_chats_v2");
      const savedActiveId = await localforage.getItem("ai_help_active_chat_id");

      let loadedChats;
      if (Array.isArray(savedChats) && savedChats.length > 0) {
        loadedChats = savedChats;
      } else {
        const legacyHistory = await localforage.getItem("ai_help_history");
        const initialMsg = Array.isArray(legacyHistory) ? legacyHistory : [];
        loadedChats = [createDefaultChatObject(1, initialMsg)];
        await localforage.setItem("ai_help_chats_v2", loadedChats);
      }

      setChats(loadedChats);

      let targetId = savedActiveId;
      if (!targetId || !loadedChats.some((c) => c.id === targetId)) {
        targetId = loadedChats[0].id;
      }
      setActiveChatId(targetId);
      await localforage.setItem("ai_help_active_chat_id", targetId);
    };

    loadKeyAndChats();
    const handleKeyChange = (e) => setPersonalApiKey(e.detail);
    window.addEventListener("geminiKeyChanged", handleKeyChange);
    return () => window.removeEventListener("geminiKeyChanged", handleKeyChange);
  }, []);

  useEffect(() => {
    return () => {
      objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
      objectURLs.current = [];
    };
  }, []);
  const fileToGenerativePart = async (file) => {
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return { inlineData: { data: base64, mimeType: file.type } };
  };

  const clearFiles = () => {
    objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
    objectURLs.current = [];
    setSelectedFiles([]);
    setAttachedCards([]);
    setTotalFilesSize(0);
  };

  const saveApiKey = async (val) => {
    const cleaned = (val || "").trim().replace(/^["']|["']$/g, "");
    setPersonalApiKey(cleaned);
    await localforage.setItem("gemini_api_key", cleaned);
    window.dispatchEvent(new CustomEvent("geminiKeyChanged", { detail: cleaned }));
  };

  const handleFileSelect = (files) => {
    const incomingFiles = Array.from(files);
    const MAX_FILES = 15;
    const MAX_TOTAL_SIZE = 100 * 1024 * 1024;
    if (selectedFiles.length + incomingFiles.length > MAX_FILES) {
      toast.error(`Максимум ${MAX_FILES} файлів.`);
      return;
    }
    const currentTotalSize = selectedFiles.reduce((acc, f) => acc + f.file.size, 0);
    const incomingTotalSize = incomingFiles.reduce((acc, f) => acc + f.size, 0);
    if (currentTotalSize + incomingTotalSize > MAX_TOTAL_SIZE) {
      toast.error("Загальний розмір перевищує 100 МБ.");
      return;
    }
    const newFilesData = incomingFiles.map((file) => {
      const url = URL.createObjectURL(file);
      objectURLs.current.push(url);
      return { file, objectURL: url };
    });
    setTotalFilesSize(currentTotalSize + incomingTotalSize);
    setSelectedFiles((prev) => [...prev, ...newFilesData]);
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => {
      const fileToRemove = prev[index];
      if (fileToRemove?.objectURL) {
        URL.revokeObjectURL(fileToRemove.objectURL);
        setTotalFilesSize((curr) => Math.max(0, curr - fileToRemove.file.size));
        objectURLs.current = objectURLs.current.filter((url) => url !== fileToRemove.objectURL);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const setAsBackground = async (fileObj) => {
    try {
      const url = fileObj.objectURL || (fileObj.file && URL.createObjectURL(fileObj.file));
      if (!url) return;
      const existing = (await localforage.getItem("custom_hero_backgrounds")) || [];
      const entry = { src: url, name: fileObj.file?.name || "ai-image", author: "AiHelp" };
      const updated = [entry, ...existing.filter((e) => e.src !== url)];
      await localforage.setItem("custom_hero_backgrounds", updated);
      await localforage.setItem("hero_background", url);
      try {
        window.dispatchEvent(new CustomEvent("heroBackgroundChanged", { detail: { src: url } }));
      } catch { }
      toast.success("Картину встановлено як фон!");
    } catch (err) {
      console.error(err);
      toast.error("Не вдалося встановити фон.");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Скопійовано!", { duration: 1500 });
    });
  };

  const clearCurrentHistory = () => {
    toast(
      (t) => (
        <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
          Очистити поточний чат?
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              clearFiles();
              updateChatMessages(activeChatId, []);
              toast.success("Історію поточного чату очищено");
            }}
            style={{
              background: "#e53e3e", color: "#fff", border: "none",
              borderRadius: 6, padding: "4px 10px", cursor: "pointer",
              fontSize: 12, fontWeight: 600,
            }}
          >
            Очистити
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.25)",
              color: "inherit", borderRadius: 6, padding: "4px 10px",
              cursor: "pointer", fontSize: 12,
            }}
          >
            Скасувати
          </button>
        </span>
      ),
      { duration: 6000 }
    );
  };

  const restoreQuestion = (messageIndex) => {
    const question = messages[messageIndex];
    if (!question || question.isBot) return;

    setPrompt(question.text);
    updateChatMessages(activeChatId, (previousMessages) =>
      previousMessages.slice(0, messageIndex),
    );
    clearFiles();
    cooldownUntilRef.current = 0;
    setCooldownUntil(0);
    setCooldownSeconds(0);
    requestAnimationFrame(() => textareaRef.current?.focus());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const handleAsk = async (eventOrText = null) => {
    const isRetry = typeof eventOrText === "string";
    const originalPrompt = isRetry ? eventOrText : prompt.trim();
    if (
      (!originalPrompt && selectedFiles.length === 0 && attachedCards.length === 0) ||
      loading ||
      requestInFlightRef.current
    ) return;

    const targetChatId = activeChatId;

    if (!personalApiKey) {
      updateChatMessages(targetChatId, (prev) => [
        ...prev,
        { text: "Будь ласка, введіть Gemini API-ключ у панелі налаштувань.", isBot: true },
      ]);
      return;
    }
    if (originalPrompt && hasBannedContent(originalPrompt)) {
      updateChatMessages(targetChatId, (prev) => [
        ...prev,
        { text: "Запит містить заборонені слова або теми.", isBot: true },
      ]);
      return;
    }

    const now = Date.now();
    const sharedCooldownUntil = await localforage.getItem(GLOBAL_COOLDOWN_KEY);
    const activeCooldownUntil = Math.max(
      cooldownUntilRef.current,
      Number(sharedCooldownUntil) || 0,
    );
    if (activeCooldownUntil > now) {
      const remainingSec = Math.ceil((activeCooldownUntil - now) / 1000);
      cooldownUntilRef.current = activeCooldownUntil;
      setCooldownUntil(activeCooldownUntil);
      toast.error(`Зачекайте ще ${remainingSec} с перед наступним запитом.`);
      return;
    }

    requestInFlightRef.current = true;
    lastPromptRef.current = originalPrompt;
    setError(null);
    setLoading(true);
    setStreamingText("");

    updateChatMessages(targetChatId, (prev) => [...prev, { text: originalPrompt, isBot: false }]);
    setPrompt("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    try {
      let webContext = "";
      const isWeatherOrSearchQuery = googleSearchEnabled || /погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|київ|львів|одес|харків|дніпр|завтра|сьогодні|прогноз|weather|forecast/i.test(originalPrompt);
      if (isWeatherOrSearchQuery && originalPrompt) {
        setStatus("Отримую актуальну інформацію / прогноз погоди...");
        try {
          webContext = await fetchFreeWebSearch(originalPrompt);
        } catch (searchErr) {
          console.warn("Free web search error:", searchErr);
        }
      }

      setStatus("З'єднання з Google Gemini...");
      const cleanedKey = (personalApiKey || "").trim().replace(/^["']|["']$/g, "");
      const genAI = new GoogleGenerativeAI(cleanedKey);

      const { instruction: lengthInstr } = getResponseLengthInstruction(responseLength);
      const { instruction: styleInstr } = getResponseStyleInstruction(responseStyle);
      const suggestionCount = Number(suggestedQuestionsCount);
      let cardContext = "";
      if (attachedCards.length > 0) {
        cardContext =
          "\n\n--- Прикріплений контент для аналізу: ---\n" +
          attachedCards
            .map(
              (c, i) =>
                `${i + 1}. [${c.type === "weather" ? "🌤️ Погода" : "📰 Новина"}] ${c.title}\n${c.details}`
            )
            .join("\n\n") +
          "\n-------------------------------------------\n";
      }
      const webInstruction = webContext
        ? "Використай актуальний інтернет-контекст нижче. Не кажи, що не маєш доступу до новин; відокремлюй факти від прогнозів і додавай посилання на джерела, якщо вони надані."
        : "Якщо для відповіді потрібні актуальні новини, поясни, що свіжі результати не були отримані.";
      const conversationContext = messages
        .slice(-6)
        .map((message) => `${message.isBot ? "Асистент" : "Користувач"}: ${message.text}`)
        .join("\n");
      const fullPrompt = `${lengthInstr} ${styleInstr}\n${webInstruction}${cardContext}${webContext}\n${conversationContext ? `Попередній діалог:\n${conversationContext}\n` : ""}${originalPrompt || "Проаналізуй прикріплений контент."}`;
      const parts = [{ text: fullPrompt }];
      for (const fileObj of selectedFiles) {
        parts.push(await fileToGenerativePart(fileObj.file));
      }

      const candidateModels = ["gemini-3.0-flash", "gemini-2.0-flash", "gemini-2.5-flash"];
      let result = null;
      let lastErr = null;

      for (const modelName of candidateModels) {
        try {
          const standardModel = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: getSystemPrompt(suggestionCount),
          });
          result = await standardModel.generateContentStream(parts);
          if (result) break;
        } catch (mErr) {
          lastErr = mErr;
          console.warn(`Model ${modelName} failed, trying next fallback...`, mErr);
        }
      }

      if (!result) throw lastErr || new Error("Не вдалося підключитися до Gemini API.");

      let accumulatedText = "";
      for await (const chunk of result.stream) {
        accumulatedText += chunk.text();
        setStreamingText(accumulatedText);
      }

      const completedResponse = await result.response;
      const usageMetadata = completedResponse?.usageMetadata;

      const finalBotMessage = {
        text: accumulatedText,
        isBot: true,
        usage: usageMetadata
          ? {
            promptTokens: usageMetadata.promptTokenCount || 0,
            responseTokens: usageMetadata.candidatesTokenCount || 0,
            totalTokens: usageMetadata.totalTokenCount || 0,
          }
          : null,
      };
      updateChatMessages(targetChatId, (prev) => [...prev, finalBotMessage]);
      setStreamingText("");
      clearFiles();

      const cooldownSecondsBySuggestionCount = {
        0: 5,
        1: 10,
        2: 15,
      };
      const nextCooldown =
        Date.now() + cooldownSecondsBySuggestionCount[suggestionCount] * 1000;
      cooldownUntilRef.current = nextCooldown;
      setCooldownUntil(nextCooldown);
      await localforage.setItem(GLOBAL_COOLDOWN_KEY, nextCooldown);
    } catch (err) {
      setStreamingText("");
      const errorMessage = err?.message || "Невідома помилка Gemini.";
      const isQuotaError = /429|quota|rate.?limit|RESOURCE_EXHAUSTED/i.test(errorMessage);
      setError(
        isQuotaError
          ? "Google відхилив запит через ліміт квоти (HTTP 429). Зачекайте 1 хвилину."
          : errorMessage,
      );
      clearFiles();
      const nextCooldown = Date.now() + 5000;
      cooldownUntilRef.current = nextCooldown;
      setCooldownUntil(nextCooldown);
      await localforage.setItem(GLOBAL_COOLDOWN_KEY, nextCooldown);
    } finally {
      requestInFlightRef.current = false;
      setLoading(false);
      setStatus("");
    }
  };

  const canSend = !loading && cooldownSeconds === 0 && (!!prompt.trim() || selectedFiles.length > 0 || attachedCards.length > 0);

  return (
    <AihelpDiv
      $isStickyBgMode={isStickyBgMode}
      $isDarkMode={isDarkMode}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: isDarkMode ? "#1e1e2a" : "#fff",
            color: isDarkMode ? "#f0f0f0" : "#111",
            border: "1px solid rgba(255,149,0,0.35)",
            fontSize: 13,
          },
        }}
      />
      <HeaderBar>
        <ChatControlsGroup>
          <Tooltip content={isSidebarCollapsed ? "Показати список чатів" : "Згорнути список чатів"} isDarkMode={isDarkMode}>
            <SidebarToggleBtn
              type="button"
              $isDarkMode={isDarkMode}
              onClick={toggleSidebar}
              aria-label={isSidebarCollapsed ? "Показати бічну панель" : "Згорнути бічну панель"}
              aria-expanded={!isSidebarCollapsed}
            >
              {isSidebarCollapsed ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
            </SidebarToggleBtn>
          </Tooltip>
          {/* Show "Чати" button only on mobile where sidebar is hidden */}
          <Tooltip content={`Список чатів (${chats.length}/10)`} isDarkMode={isDarkMode}>
            <ChatHeaderBtn
              type="button"
              $isDarkMode={isDarkMode}
              onClick={() => setIsChatsModalOpen(true)}
              aria-label="Переглянути список чатів"
              style={{ display: undefined }}
              className="mobile-chats-btn"
            >
              <TbMessages />
            </ChatHeaderBtn>
          </Tooltip>
          <Tooltip content="Переглянути приблизні ліміти" isDarkMode={isDarkMode}>
            <LimitsButton
              type="button"
              $isDarkMode={isDarkMode}
              onClick={() => setIsLimitsModalOpen(true)}
              aria-label="Переглянути приблизні ліміти"
            >
              <TbGauge />
            </LimitsButton>
          </Tooltip>
          <Tooltip content="Створити новий паралельний чат" isDarkMode={isDarkMode}>
            <NewChatHeaderBtn
              type="button"
              $isDarkMode={isDarkMode}
              onClick={handleCreateNewChat}
              disabled={chats.length >= 10}
              aria-label="Створити новий паралельний чат"
            >
              <TbMessagePlus />
            </NewChatHeaderBtn>
          </Tooltip>
          {onClose && (
            <Tooltip content="Закрити ШІ-асистент" isDarkMode={isDarkMode}>
              <CloseAiModalHeaderBtn
                type="button"
                $isDarkMode={isDarkMode}
                onClick={onClose}
                aria-label="Закрити ШІ-асистент"
              >
                <TbX />
              </CloseAiModalHeaderBtn>
            </Tooltip>
          )}
        </ChatControlsGroup>
      </HeaderBar>

      <SettingsPanel $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        <ProviderRow $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
          <label style={{ minWidth: "unset", fontWeight: 700, fontSize: 13 }}>
            Gemini API Key
          </label>
          <Tooltip content="Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini" isDarkMode={isDarkMode}>
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              aria-label="Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini"
            >
              <input
                type="checkbox"
                checked={googleSearchEnabled}
                onChange={async (event) => {
                  const enabled = event.target.checked;
                  setGoogleSearchEnabled(enabled);
                  await localforage.setItem("gemini_google_search_enabled", enabled);
                }}
              />
              Інтернет-пошук
            </label>
          </Tooltip>
          <input
            type="password"
            placeholder="Вставте ваш Gemini API Key..."
            value={personalApiKey}
            onChange={(e) => saveApiKey(e.target.value)}
            name="ai-help-gemini-key"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            data-form-type="other"
            data-lpignore="true"
          />
          {!personalApiKey && (
            <GetKeyLink href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer">
              Отримати ключ
            </GetKeyLink>
          )}
        </ProviderRow>
      </SettingsPanel>

      {/* Desktop sidebar + chat main area layout */}
      <DesktopLayout>
        {/* Left sidebar — always visible on ≥768px */}
        <DesktopSidebar $isDarkMode={isDarkMode} $collapsed={isSidebarCollapsed}>
          <SidebarTitle $isDarkMode={isDarkMode}>Чати ({chats.length}/10)</SidebarTitle>
          <SidebarChatsList>
            {chats.map((chat, idx) => {
              const isActive = chat.id === activeChatId;
              return (
                <SidebarChatItem
                  key={chat.id}
                  $active={isActive}
                  $isDarkMode={isDarkMode}
                  onClick={() => {
                    setActiveChatId(chat.id);
                    localforage.setItem("ai_help_active_chat_id", chat.id);
                  }}
                  title={chat.title || `Чат ${idx + 1}`}
                >
                  <SidebarChatLabel>{chat.title || `Чат ${idx + 1}`}</SidebarChatLabel>
                  <SidebarDeleteBtn
                    type="button"
                    onClick={(e) => handleDeleteChat(chat.id, e)}
                    aria-label="Видалити чат"
                  >
                    <RiDeleteBack2Fill />
                  </SidebarDeleteBtn>
                </SidebarChatItem>
              );
            })}
          </SidebarChatsList>
          <SidebarNewChatBtn
            type="button"
            onClick={handleCreateNewChat}
            disabled={chats.length >= 10}
            title="Новий чат"
            aria-label="Новий чат"
          >
            <TbPlus />
          </SidebarNewChatBtn>
        </DesktopSidebar>

        {/* Main chat area */}
        <ChatMainArea $sidebarCollapsed={isSidebarCollapsed}>
          <ChatHistory ref={chatContainerRef}>
            {messages.length === 0 && (
              <EmptyChatWelcome $isDarkMode={isDarkMode}>
                <WelcomeTitle>Запитайте будь-що або оберіть одне з популярних питань:</WelcomeTitle>
                <StarterQuestionsCarousel
                  isDarkMode={isDarkMode}
                  onAsk={handleAsk}
                />
              </EmptyChatWelcome>
            )}

            {messages.map((m, i) => {
              if (m.isBot) {
                const { cleanText, questions } = parseSuggestedQuestions(m.text);
                const hint = i % 2 === 0
                  ? "Підказка: Ви можете зменшити кількість пропонованих питань після запиту для економії кредитів і зменшення перезарядки. Натисніть «Пропозиції»."
                  : "Підказка: Для швидших відповідей зменште обсяг відповіді з «Нормально» на «Менше».";
                return (
                  <React.Fragment key={i}>
                    <Message $isBot={true} $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
                      <CopyButton onClick={() => copyToClipboard(cleanText)}>🖺</CopyButton>
                      <ReactMarkdown>{cleanText}</ReactMarkdown>
                      {m.usage?.totalTokens > 0 && (
                        <MessageMeta $isDarkMode={isDarkMode}>
                          Витрачено токенів: {m.usage.totalTokens}
                          {m.usage.promptTokens > 0 &&
                            ` (запит: ${m.usage.promptTokens}, відповідь: ${m.usage.responseTokens})`}
                        </MessageMeta>
                      )}
                    </Message>
                    {questions.length > 0 && (
                      <SuggestedQuestionsContainer>
                        <SuggestedTitle> Спробуйте запитати далі:</SuggestedTitle>
                        <SuggestedPillsRow>
                          {questions.map((q, idx) => (
                            <SuggestedPillBtn
                              key={idx}
                              $isDarkMode={isDarkMode}
                              onClick={() => handleAsk(q)}
                              disabled={loading || cooldownSeconds > 0}
                            >
                              {q}
                            </SuggestedPillBtn>
                          ))}
                        </SuggestedPillsRow>
                        <SuggestedTitle style={{ fontSize: "12px" }}>
                          {hint}
                        </SuggestedTitle>
                      </SuggestedQuestionsContainer>
                    )}
                  </React.Fragment>
                );
              }
              return (
                <Message key={i} $isBot={false} $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                  <EditQuestionButton
                    type="button"
                    $isDarkMode={isDarkMode}
                    onClick={() => restoreQuestion(i)}
                  >
                    Редагувати це питання
                  </EditQuestionButton>
                </Message>
              );
            })}

            {streamingText && (
              <Message $isBot $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
                <ReactMarkdown>{parseSuggestedQuestions(streamingText).cleanText}</ReactMarkdown>
              </Message>
            )}

            {loading && !streamingText && (
              <TypingIndicator $isDarkMode={isDarkMode}>
                <Dot $delay="0s" />
                <Dot $delay="0.2s" />
                <Dot $delay="0.4s" />
              </TypingIndicator>
            )}

            {error && (
              <ErrorBox>
                {error}
                <RetryButton type="button" title="Повторити" aria-label="Повторити" onClick={() => handleAsk(lastPromptRef.current)}><TbRefresh /></RetryButton>
              </ErrorBox>
            )}
            <div ref={chatEndRef} />
          </ChatHistory>


          {status && <StatusText>{status}</StatusText>}

          {selectedFiles.length > 0 && (
            <FilePreviewContainer>
              <FileSizeText>
                Розмір: {(totalFilesSize / (1024 * 1024)).toFixed(2)} MB / 100 MB
              </FileSizeText>
              {selectedFiles.map((f, i) => (
                <FileThumb key={i} $isDarkMode={isDarkMode}>
                  <div
                    style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-in" }}
                    onClick={() => openViewer(f)}
                  >
                    {f.file.type.startsWith("video/") ? (
                      <video src={f.objectURL} />
                    ) : f.file.type.startsWith("audio/") ? (
                      <span style={{ fontSize: "26px" }}>🎵</span>
                    ) : (
                      <img src={f.objectURL} alt="preview" />
                    )}
                  </div>
                  <RemoveFileBtn onClick={() => removeFile(i)}>✕</RemoveFileBtn>
                </FileThumb>
              ))}
            </FilePreviewContainer>
          )}

          {attachedCards.length > 0 && (
            <AttachedCardsContainer>
              {attachedCards.map((card, i) => {
                const cardLabel = card.type === "weather" ? "картку погоди" : "новину";
                const actionText = `Видалити прикріплену ${cardLabel}`;
                return (
                  <AttachedChip key={i} $isDarkMode={isDarkMode}>
                    {card.type === "weather" ? <IoIosCloudyNight /> : <PiNewspaperClippingFill />}
                    <span>{card.title}</span>
                    <Tooltip content={actionText} isDarkMode={isDarkMode}>
                      <button
                        type="button"
                        style={{ marginRight: 12 }}
                        onClick={() => setAttachedCards((prev) => prev.filter((_, idx) => idx !== i))}
                        aria-label={actionText}
                      >
                        ✕
                      </button>
                    </Tooltip>
                  </AttachedChip>
                );
              })}
            </AttachedCardsContainer>
          )}

          <InputContainer
            $isDarkMode={isDarkMode}
            $isStickyBgMode={isStickyBgMode}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); handleFileSelect(e.dataTransfer.files); }}
          >
            <InputQuickSettings $isDarkMode={isDarkMode}>
              <QuickGroup>
                <QuickLabel htmlFor="response-length" $isDarkMode={isDarkMode}>
                  Обсяг:
                </QuickLabel>
                <QuickSelect
                  id="response-length"
                  aria-label="Обсяг відповіді"
                  $isDarkMode={isDarkMode}
                  value={responseLength}
                  onChange={(e) => setResponseLength(e.target.value)}
                >
                  <option value="concise">Менше</option>
                  <option value="normal">Нормально</option>
                  <option value="detailed">Більше</option>
                </QuickSelect>
              </QuickGroup>

              <QuickGroup>
                <QuickLabel htmlFor="response-style" $isDarkMode={isDarkMode}>
                  Стиль:
                </QuickLabel>
                <QuickSelect
                  id="response-style"
                  aria-label="Стиль відповіді"
                  $isDarkMode={isDarkMode}
                  value={responseStyle}
                  onChange={(e) => setResponseStyle(e.target.value)}
                >
                  <option value="friendly">Дружньо</option>
                  <option value="standard">Стандартно</option>
                  <option value="scientific">Науково</option>
                </QuickSelect>
              </QuickGroup>
              {messages.length > 0 && (
                <SuggestedQuestionsSetting>
                  <QuickLabel htmlFor="suggested-questions-count" $isDarkMode={isDarkMode}>
                    Пропозиції:
                  </QuickLabel>
                  <QuickSelect
                    id="suggested-questions-count"
                    $isDarkMode={isDarkMode}
                    value={suggestedQuestionsCount}
                    onChange={async (event) => {
                      const count = event.target.value;
                      setSuggestedQuestionsCount(count);
                      await localforage.setItem("gemini_suggested_questions_count", count);
                    }}
                    aria-label="Кількість рекомендованих питань"
                  >
                    <option value="0">0 (5 с)</option>
                    <option value="1">1 (10 с)</option>
                    <option value="2">2 (15 с)</option>
                  </QuickSelect>
                </SuggestedQuestionsSetting>
              )}
            </InputQuickSettings>

            <TextArea
              ref={textareaRef}
              placeholder="Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)"
              value={prompt}
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              rows={1}
              $isDarkMode={isDarkMode}
            />
            <ActionButtons $isDarkMode={isDarkMode}>
              <MessageCounter
                $isDarkMode={isDarkMode}
                $isLimitReached={prompt.length >= MAX_MESSAGE_LENGTH}
                aria-live="polite"
              >
                {prompt.length}/{MAX_MESSAGE_LENGTH}
              </MessageCounter>
              <label style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                <Tooltip content="Додати фото, відео, аудіо" isDarkMode={isDarkMode}>
                <IconBtn $isDarkMode={isDarkMode} $size="20px" aria-label="Додати фото, відео, аудіо">
                  <MdAddPhotoAlternate />
                </IconBtn>
                </Tooltip>
                <input
                  type="file"
                  accept="image/*, video/*, audio/*"
                  multiple
                  hidden
                  onChange={(e) => handleFileSelect(e.target.files)}
                />
              </label>
              <Tooltip content={isListening ? "Зупинити запис" : "Голосовий ввід"} isDarkMode={isDarkMode}>
              <IconBtn $isDarkMode={isDarkMode} onClick={handleVoiceInput} aria-label={isListening ? "Зупинити запис" : "Голосовий ввід"} $listening={isListening}>
                {isListening ? "◼" : <FaMicrophoneAlt />}
              </IconBtn>
              </Tooltip>
              <Tooltip content="Очистити поточний чат" isDarkMode={isDarkMode}>
              <IconBtn $isDarkMode={isDarkMode} $danger onClick={clearCurrentHistory} aria-label="Очистити поточний чат" $size="20px">
                <RiDeleteBack2Fill />
              </IconBtn>
              </Tooltip>
              <Tooltip content="Надіслати" isDarkMode={isDarkMode}>
                <SendButton disabled={!canSend} $isDarkMode={isDarkMode} onClick={() => handleAsk()} aria-label="Надіслати">
                  {loading ? <GiTimeTrap /> : cooldownSeconds > 0 ? `${cooldownSeconds}с` : "➤"}
                </SendButton>
              </Tooltip>
            </ActionButtons>
          </InputContainer>
        </ChatMainArea>
      </DesktopLayout>

      {viewingFile && (
        <ViewerOverlay onClick={closeViewer}>
          <ViewerClose onClick={closeViewer}>✕</ViewerClose>
          <ViewerFileName>{viewingFile.file.name}</ViewerFileName>

          <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            {viewingFile.file.type.startsWith("image/") ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <ViewerImage src={viewingFile.objectURL} alt={viewingFile.file.name} />
                <SetBgButton onClick={() => setAsBackground(viewingFile)}>🖼 Зробити фоном</SetBgButton>
              </div>
            ) : viewingFile.file.type.startsWith("video/") ? (
              <>
                <ViewerVideo
                  ref={mediaRef}
                  src={viewingFile.objectURL}
                  onTimeUpdate={handleMediaTimeUpdate}
                  onLoadedMetadata={handleMediaLoaded}
                  onPlay={() => setMediaPlaying(true)}
                  onPause={() => setMediaPlaying(false)}
                  onEnded={() => setMediaPlaying(false)}
                />
                <MediaControls>
                  <TimelineBar onClick={handleSeek}>
                    <TimelineFill style={{ width: `${mediaProgress * 100}%` }} />
                  </TimelineBar>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <PlayPauseBtn onClick={togglePlay}>{mediaPlaying ? "⏸" : "▶"}</PlayPauseBtn>
                    <TimeLabel>{formatTime(mediaCurrentTime)} / {formatTime(mediaDuration)}</TimeLabel>
                  </div>
                  <SpeedRow>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <SpeedBtn key={s} $active={mediaSpeed === s} onClick={() => handleSpeedChange(s)}>{s}x</SpeedBtn>
                    ))}
                  </SpeedRow>
                </MediaControls>
              </>
            ) : viewingFile.file.type.startsWith("audio/") ? (
              <AudioBox>
                <AudioIcon>🎵</AudioIcon>
                <WaveformBars>
                  {[30, 55, 80, 45, 65, 90, 50, 75, 40, 60, 85, 35, 70, 55, 80].map((h, i) => (
                    <WaveBar key={i} $h={h} $playing={mediaPlaying} $dur={(0.3 + i * 0.07).toFixed(2)} />
                  ))}
                </WaveformBars>
                <AudioHidden
                  ref={mediaRef}
                  src={viewingFile.objectURL}
                  onTimeUpdate={handleMediaTimeUpdate}
                  onLoadedMetadata={handleMediaLoaded}
                  onPlay={() => setMediaPlaying(true)}
                  onPause={() => setMediaPlaying(false)}
                  onEnded={() => setMediaPlaying(false)}
                />
                <MediaControls>
                  <TimelineBar onClick={handleSeek}>
                    <TimelineFill style={{ width: `${mediaProgress * 100}%` }} />
                  </TimelineBar>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <PlayPauseBtn onClick={togglePlay}>{mediaPlaying ? "⏸" : "▶"}</PlayPauseBtn>
                    <TimeLabel>{formatTime(mediaCurrentTime)} / {formatTime(mediaDuration)}</TimeLabel>
                  </div>
                  <SpeedRow>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <SpeedBtn key={s} $active={mediaSpeed === s} onClick={() => handleSpeedChange(s)}>{s}x</SpeedBtn>
                    ))}
                  </SpeedRow>
                </MediaControls>
              </AudioBox>
            ) : null}
          </div>
        </ViewerOverlay>
      )}


      {/* Mobile Sidebar Drawer (≤767px) */}
      <MobileChatDrawerOverlay
        $open={isChatsModalOpen}
        onClick={() => setIsChatsModalOpen(false)}
      />
      <MobileChatDrawer $open={isChatsModalOpen} $isDarkMode={isDarkMode}>
        <DrawerHeader>
          <h3>Чати ({chats.length}/10)</h3>
          <DrawerCloseBtn $isDarkMode={isDarkMode} onClick={() => setIsChatsModalOpen(false)}>
            ✕
          </DrawerCloseBtn>
        </DrawerHeader>

        <DrawerChatsList>
          {chats.map((chat, idx) => {
            const isActive = chat.id === activeChatId;
            const msgCount = chat.messages ? chat.messages.length : 0;
            return (
              <ChatItemCard
                key={chat.id}
                $active={isActive}
                $isDarkMode={isDarkMode}
                onClick={() => handleSelectChat(chat.id)}
              >
                <ChatItemInfo>
                  <ChatItemTitle $active={isActive}>
                    {chat.title || `Чат ${idx + 1}`}
                    {isActive && <ActiveBadge>Активний</ActiveBadge>}
                  </ChatItemTitle>
                  <ChatItemMeta>
                    {msgCount > 0 ? `${msgCount} повідомл.` : "Порожній чат"}
                  </ChatItemMeta>
                </ChatItemInfo>
                <DeleteChatBtn
                  type="button"
                  onClick={(e) => handleDeleteChat(chat.id, e)}
                  aria-label="Видалити чат"
                >
                  <RiDeleteBack2Fill />
                </DeleteChatBtn>
              </ChatItemCard>
            );
          })}
        </DrawerChatsList>

        {chats.length < 10 && (
          <NewChatModalBtn type="button" onClick={handleCreateNewChat}>
            Створити новий чат ({chats.length}/10)
          </NewChatModalBtn>
        )}
      </MobileChatDrawer>

      {/* Desktop Modal (≥768px) */}
      {isChatsModalOpen && (
        <DesktopOnlyModalOverlay
          onClick={() => setIsChatsModalOpen(false)}
        >
          <ModalContainer $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
            <ModalHeader $isDarkMode={isDarkMode}>
              <h3>Список чатів ({chats.length}/10)</h3>
              <ModalCloseBtn $isDarkMode={isDarkMode} onClick={() => setIsChatsModalOpen(false)}>
                ✕
              </ModalCloseBtn>
            </ModalHeader>

            <ChatsListContainer>
              {chats.map((chat, idx) => {
                const isActive = chat.id === activeChatId;
                const msgCount = chat.messages ? chat.messages.length : 0;
                return (
                  <ChatItemCard
                    key={chat.id}
                    $active={isActive}
                    $isDarkMode={isDarkMode}
                    onClick={() => handleSelectChat(chat.id)}
                  >
                    <ChatItemInfo>
                      <ChatItemTitle $active={isActive}>
                        {chat.title || `Чат ${idx + 1}`}
                        {isActive && <ActiveBadge>Активний</ActiveBadge>}
                      </ChatItemTitle>
                      <ChatItemMeta>
                        {msgCount > 0 ? `${msgCount} повідомл.` : "Порожній чат"}
                      </ChatItemMeta>
                    </ChatItemInfo>
                      <Tooltip content="Видалити чат" isDarkMode={isDarkMode}>
                    <DeleteChatBtn
                      type="button"
                      onClick={(e) => handleDeleteChat(chat.id, e)}
                      aria-label="Видалити чат"
                    >
                      <RiDeleteBack2Fill />
                    </DeleteChatBtn>
                      </Tooltip>
                  </ChatItemCard>
                );
              })}
            </ChatsListContainer>

            {chats.length < 10 && (
              <NewChatModalBtn type="button" onClick={handleCreateNewChat}>
                 Створити новий чат ({chats.length}/10)
              </NewChatModalBtn>
            )}
          </ModalContainer>
        </DesktopOnlyModalOverlay>
      )}



      {isLimitsModalOpen && (
        <ModalOverlay onClick={() => setIsLimitsModalOpen(false)}>
          <ModalContainer $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
            <ModalHeader $isDarkMode={isDarkMode}>
              <h3>Приблизні ліміти використання</h3>
              <ModalCloseBtn $isDarkMode={isDarkMode} onClick={() => setIsLimitsModalOpen(false)}>
                ✕
              </ModalCloseBtn>
            </ModalHeader>

            <LimitsList>
              <LimitItem $isDarkMode={isDarkMode}>
                <span> Ліміт на хвилину(Гугл):</span>
                <span>15 / хв</span>
              </LimitItem>
              <LimitItem $isDarkMode={isDarkMode}>
                <span>Ліміт на добу(Гугл):</span>
                <span>1500 / доба</span>
              </LimitItem>
            </LimitsList>
            <NoteBox $isDarkMode={isDarkMode}>
              <strong>Примітка:</strong> Це безкоштовні ліміти Google AI Studio. Їх визначає ваш індивідуальний ключ, а не «Стихія» (зараз використовується модель <strong>{geminiModel}</strong>) Якщо ви підключите платний ключ, ліміти будуть більшими, проте тут вони все одно відображатимуться у базовому вигляді, оскільки ми не маємо доступу до параметрів вашого акаунта. Перезарядка 15с після кожного запиту та ліміт 300символів на запит зроблені з метою економії вашої квоти.
            </NoteBox>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AihelpDiv>
  );
};
export default Aihelp;