import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import rawFaqData from "./faqData.json";
import hills from "../../media/backgrounds/scenes/foggy-forest.webp";
import texts from "../../media/backgrounds/scenes/egyptian-hieroglyphs.webp";
import logofix from "../../media/brand/logo.webp";
import { FiSearch, FiX, FiDownload, FiArrowUp } from "react-icons/fi";
import info from "../../media/ui/information-sign.webp";
import one from "../../media/drawings/two-brothers.webp";
import two from "../../media/drawings/emperor-nitseron.webp";
import might from "../../media/drawings/two-brothers.webp";
import finance from "../../media/backgrounds/scenes/turkey-in-dragon-museum.webp";
import newsImage from "../../media/backgrounds/scenes/night-river-burnt-tree.webp";
import aiHelp from "../../media/characters/domino-reading.webp";
import climate from "../../media/third-party/services/ventusky-map.webp";
import registration from "../../media/ui/user-placeholder.webp";
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
  FloatingArrow,         
} from "@floating-ui/react";
import { MirrorFloatingPortal, MirrorText } from "../Tooltip/MirrorSafe";
const TooltipBox = styled.div`
  background-color: ${(props) => (props.$isDarkMode ? "#0c0c0cbf" : "#fdff98bb")};
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
const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;
// content: [
//   { type: "image", src: imageSrc, alt: "..." },
//   { type: "text", value: "Перший текст" },
//   { type: "text", value: "Другий текст" }
// ]
const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`;

const fadeIn = keyframes`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `;
const appearAndShrink = keyframes`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`;

const animatedStyle = css`
  opacity: 0;
  transform-origin: left center;
  animation: ${appearAndShrink} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({ $index }) => css`
    animation-delay: ${0.1 + ($index || 0) * 0.05}s;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  transition:
    opacity 0.4s ease,
    pointer-events 0.4s ease;
  opacity: ${(props) => (props.$isClosing ? 0 : 1)};
  pointer-events: ${(props) => (props.$isClosing ? "none" : "auto")};
  backdrop-filter: blur(5px);
`;
const Content = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#174348b1" : "#ffd001")};
  padding: 5px;
  border-radius: 10px;
  max-width: 1200px;
  width: 95%;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const Conten = styled.div`
  background:  ${(props) => (props.$isDarkMode ? "#174348b1" : "#ffd001")};
  z-index: 10;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border: none;
  padding-left: 5px;
  padding-bottom: 5px;
  font-weight: 700;
  padding-right: 9px;
  background: ${(props) => (props.$isDarkMode ? "#27b5b0b1" : "#6f6e22c6")};
  color: ${(props) => (props.$isDarkMode ? "#000000b1" : "#ffffff")};
  height: 36px;
  font-size: 14px;
  cursor: pointer;
`;
const PreviewCloseBtn = styled(CloseBtn)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${fadeIn} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`;

const AccordionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 3px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const AccordionItem = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 190px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  background-color: #174348;
  background-image: ${({ $image }) =>
    $image
      ? `linear-gradient(135deg, rgba(10, 20, 25, 0.82), rgba(10, 20, 25, 0.54)), url("${$image}")`
      : "linear-gradient(135deg, #174348, #263d5b)"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  ${animatedStyle}
`;
const Question = styled.button`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 16px 16px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;

  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: -4px;
  }
`;

const QuestionText = styled.div`
  overflow: hidden;
  max-height: calc(1.4em * 3);
  line-height: 1.4;
  font-size: 15px;
`;

const AnswerPreview = styled.div`
  overflow: hidden;
  max-height: calc(1.45em * 6);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.45;
`;

const AnswerImage = styled.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${(props) =>
    props.$isHovered || props.$isPinned ? "800px" : "10px"};
  opacity: ${(props) => (props.$isHovered || props.$isPinned ? 1 : 0.4)};

  &:hover {
    transform: scale(1.01);
  }
`;

const ImagePreviewActions = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`;

// Круглі кнопки-іконки у правому верхньому куті відповіді (скачати, закрити)
const AnswerActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(10, 16, 22, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${({ $variant }) => ($variant === "download" ? "#ffda79" : "#ffffff")};
  font-size: 19px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ $variant }) => ($variant === "close" ? "#ff8a8a" : "#ffda79")};
    background: ${({ $variant }) =>
      $variant === "close" ? "rgba(220, 60, 60, 0.85)" : "rgba(255, 218, 121, 0.2)"};
    color: #ffffff;
  }

  &:hover svg {
    transform: ${({ $variant }) =>
      $variant === "close"
        ? "rotate(90deg)"
        : $variant === "top"
          ? "translateY(-2px)"
          : "translateY(1px)"};
  }

  &:focus-visible {
    outline: 2px solid #ffd001;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg {
      transition: none;
    }
  }
`;

const FaqAnswerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: rgba(0, 0, 0, 0.72);
`;

const FaqAnswerModal = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 95%;
  max-width: none;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  border-radius: 14px;
  color: #fff;
  background-color: #17252b;
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage
      ? `linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.78)), url("${$backgroundImage}")`
      : "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.6))"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
`;

// Липка шапка: заголовок + кнопки завжди видно, прокручується лише текст
const FaqAnswerHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px clamp(16px, 3vw, 32px) 14px;
  border-bottom: 1px solid
    ${({ $scrolled }) => ($scrolled ? "rgba(255, 255, 255, 0.14)" : "transparent")};
  background: ${({ $scrolled }) => ($scrolled ? "rgba(0, 0, 0, 0.45)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(8px)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(8px)" : "none")};
  box-shadow: ${({ $scrolled }) => ($scrolled ? "0 6px 18px rgba(0, 0, 0, 0.35)" : "none")};
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
`;

const FaqAnswerTitle = styled.h2`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 22px;
`;

const FaqAnswerBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px clamp(16px, 3vw, 32px) 28px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
  }
`;

// Кнопка «вгору» — з'являється після прокрутки, закріплена в куті модалки
const ScrollTopButton = styled(AnswerActionButton)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "10px")});
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.25s ease,
    background 0.2s ease,
    border-color 0.2s ease;
`;

const FaqAnswerText = styled.div`
  user-select: text;
  -webkit-user-select: text;
  cursor: text;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  white-space: pre-line;
`;

const FaqAnswerActions = styled.div`
  flex: 0 0 auto;
  display: flex;
  gap: 8px;
`;

const ImagePreviewOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`;

const PreviewImage = styled.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`;

const SearchField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 46px;
  margin-bottom: 14px;
  padding: 0 14px;
  border: 1px solid
    ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(90, 230, 216, 0.32)" : "rgba(23, 67, 72, 0.24)"};
  border-radius: 14px;
  background: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(5, 24, 29, 0.78)" : "rgba(255, 255, 255, 0.82)"};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.12);
  transition: border-color 0.25s ease, box-shadow 0.25s ease,
    transform 0.25s ease, background 0.25s ease;

  &:focus-within {
    transform: translateY(-2px);
    border-color: ${({ $isDarkMode }) =>
      $isDarkMode ? "#51e6d5" : "#174348"};
    background: ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(5, 24, 29, 0.96)" : "#ffffff"};
    box-shadow: 0 0 0 3px
        ${({ $isDarkMode }) =>
          $isDarkMode ? "rgba(81, 230, 213, 0.16)" : "rgba(23, 67, 72, 0.12)"},
      0 8px 22px rgba(0, 0, 0, 0.18);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const SearchIcon = styled(FiSearch)`
  flex: 0 0 auto;
  color: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(138, 235, 224, 0.72)" : "rgba(23, 67, 72, 0.65)"};
  font-size: 18px;
  transition: color 0.25s ease, transform 0.25s ease;

  ${SearchField}:focus-within & {
    color: ${({ $isDarkMode }) => ($isDarkMode ? "#51e6d5" : "#174348")};
    transform: scale(1.12) rotate(-8deg);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 12px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "#ffffff" : "#142326")};
  font: inherit;
  font-size: 14px;

  &::placeholder {
    color: ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(255, 255, 255, 0.58)" : "rgba(20, 35, 38, 0.55)"};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const ClearSearchButton = styled.button`
  display: grid;
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(23, 67, 72, 0.1)"};
  color: ${({ $isDarkMode }) => ($isDarkMode ? "#ffffff" : "#174348")};
  cursor: pointer;
  animation: ${fadeIn} 0.18s ease both;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
    background: ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(23, 67, 72, 0.18)"};
  }
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
        <MirrorFloatingPortal>
          <TooltipBox
            ref={refs.setFloating}
            $isDarkMode={isDarkMode}
            style={{ ...floatingStyles, ...transitionStyles }}
            {...getFloatingProps()}
          >
            <MirrorText>{content}</MirrorText>
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={bgTheme}
              stroke={borderTheme}
              strokeWidth={1}
            />
          </TooltipBox>
        </MirrorFloatingPortal>
      )}
    </>
  );
};
const InfoModal = ({ onClose, isOpen, initialFaqQuestion, isDarkMode }) => {
  const [isClosing, setIsClosing] = useState(false);
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [selectedFaq, setSelectedFaq] = useState(null);

  // Закриваємо по кліку на підкладку лише якщо і натискання, і відпускання
  // миші були саме на ній. Інакше виділення тексту, що «з'їхало» за край
  // вікна, закривало модалку разом із виділенням.
  // Окремий прапорець для кожної підкладки: mousedown спливає до батьківських
  const backdropPressRef = useRef({});
  const backdropProps = (key, onBackdropClick) => ({
    onMouseDown: (e) => {
      backdropPressRef.current[key] = e.target === e.currentTarget;
    },
    onClick: (e) => {
      const startedOnBackdrop = backdropPressRef.current[key] === true;
      backdropPressRef.current[key] = false;
      if (e.target === e.currentTarget && startedOnBackdrop) onBackdropClick();
    },
  });
  const [searchQuery, setSearchQuery] = useState("");

  const [previewImage, setPreviewImage] = useState(null);

  // Стан прокрутки тексту відповіді: тінь під шапкою та кнопка «вгору»
  const answerBodyRef = useRef(null);
  const [answerScrolled, setAnswerScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setAnswerScrolled(false);
    setShowScrollTop(false);
  }, [selectedFaq]);

  const handleAnswerScroll = (e) => {
    const top = e.currentTarget.scrollTop;
    setAnswerScrolled(top > 4);
    setShowScrollTop(top > 300);
  };

  const scrollAnswerToTop = () => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    answerBodyRef.current?.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const handleClose = useCallback(() => {
    if (previewImage) {
      setPreviewImage(null);
      return;
    }
    if (selectedFaq) {
      setSelectedFaq(null);
      return;
    }
    setPreviewImage(null);
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  }, [onClose, previewImage, selectedFaq]);

  const handleDownloadImage = async (imgSrc) => {
    let href = imgSrc;
    let objectUrl = null;
    let ext = (imgSrc.split(/[?#]/)[0].match(/.(w{2,5})$/) || [])[1] || "webp";
    try {
      const blob = await (await fetch(imgSrc)).blob();
      objectUrl = URL.createObjectURL(blob);
      href = objectUrl;
      if (blob.type.startsWith("image/")) {
        ext = blob.type.split("/")[1].replace("jpeg", "jpg").split("+")[0];
      }
    } catch {
      // fallback: пряме посилання
    }
    const a = document.createElement("a");
    a.href = href;
    a.download = `stykhiya_image_${Date.now()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (objectUrl) setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen || isClosing) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, isClosing, handleClose]);

  const pastEvents = React.useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    return customDays
      .filter((day) => day.date < today)
      .sort((a, b) => b.date.localeCompare(a.date)) // Свіжіші спочатку
      .slice(0, 5);
  }, [customDays]);

  const faqData = React.useMemo(() => {
    const imageMap = {
      latestUpdate: info,
      agreement: texts,
      collaboration: might,
      weather: hills,
      noAds: finance,
      news: newsImage,
      aiHelp,
      climate,
      general: one,
      settings: logofix,
      registration,
      plans: two,
    };
    const baseFaqData = rawFaqData.map((item) => ({
      ...item,
      image: item.image ? (imageMap[item.image] ?? null) : null,
    }));

    if (pastEvents.length > 0) {
      const pastText = pastEvents
        .map((e) => `• ${e.date}: ${e.reason}`)
        .join("\n");
      baseFaqData.unshift({
        q: "📚 Архів минулих подій (ліміт 5)",
        a: `Це події, які ви додавали, але їх час уже минув:\n\n${pastText}`,
        image: null,
      });
    }

    return baseFaqData;
  }, [pastEvents]);
  useEffect(() => {
    if (!isOpen) {
      setSelectedFaq(null);
      return;
    }

    let faqToOpen = null;

    if (initialFaqQuestion) {
      const matchingIndex = faqData.findIndex(
        (item) => item.q === initialFaqQuestion,
      );
      if (matchingIndex >= 0) {
        faqToOpen = faqData[matchingIndex];
      }
    }

    setSelectedFaq(faqToOpen);
  }, [faqData, initialFaqQuestion, isOpen]);

  if (!isOpen && !isClosing) return null;

  const renderAnswerBlocks = (item) => {
    if (
      item.content &&
      Array.isArray(item.content) &&
      item.content.length > 0
    ) {
      return item.content.map((block, index) => {
        if (block.type === "image") {
          const imgSrc = block.src || block.image;
          const altText = block.alt || item.q || "FAQ image";

          return (
            <div
              key={`image-${index}`}
              style={{ marginBottom: "10px" }}
            >
              <AnswerImage
                src={imgSrc}
                alt={altText}
                onClick={() => setPreviewImage(imgSrc)}
              />
            </div>
          );
        }

        if (block.type === "text") {
          const textValue = block.value || block.text || "";
          return (
            <div
              key={`text-${index}`}
              dangerouslySetInnerHTML={{
                __html: String(textValue).replace(/\n/g, "<br/>"),
              }}
            />
          );
        }

        return null;
      });
    }

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: (item.a || "").replace(/\n/g, "<br/>"),
        }}
      />
    );
  };

  const sortedFaqData = [...faqData]
    .map((item, originalIndex) => ({
      ...item,
      originalIndex,
    }))
    .filter((item) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.q?.toLowerCase().includes(query) ||
        item.a?.toLowerCase().includes(query)
      );
    });

  return (
    <Overlay $isClosing={isClosing} {...backdropProps("main", handleClose)}>
      <Content $isDarkMode={isDarkMode} $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <Conten $isDarkMode={isDarkMode}>
          <CloseBtn onClick={handleClose}>Зрозуміло!</CloseBtn>
         <h1
  style={{
    textAlign: "center",
    fontSize: "26px",
    color: isDarkMode ? "#ffffff" : "#010101",
    marginTop: "-5px",
  }}
>
  Навчання
</h1>
<p
  style={{
    textAlign: "center",
    fontSize: "13px",
    color: isDarkMode ? "#ffffff" : "#000000",
    marginTop: "-8px",
  }}
>
  Останнє оновлення: 30 серпня 2026 року
</p>
        </Conten>
        <ScrollArea>
          <>
            <SearchField $isDarkMode={isDarkMode}>
              <SearchIcon $isDarkMode={isDarkMode} aria-hidden="true" />
              <SearchInput
                type="search"
                placeholder="Знайти питання або відповідь..."
                aria-label="Пошук питань"
                value={searchQuery}
                $isDarkMode={isDarkMode}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <ClearSearchButton
                  type="button"
                  $isDarkMode={isDarkMode}
                  onClick={() => setSearchQuery("")}
                  aria-label="Очистити пошук"
                >
                  <FiX aria-hidden="true" />
                </ClearSearchButton>
              )}
            </SearchField>
              <AccordionWrapper style={{ marginTop: 0 }}>
                {sortedFaqData.length === 0 && (
                  <p style={{ textAlign: "center", color: "#555" }}>
                    Питань за цим запитом не знайдено.
                  </p>
                )}
                {sortedFaqData.map((item, displayIndex) => {
                const originalIndex = item.originalIndex;
                const answerPreview = (item.a || "")
                  .replace(/<[^>]*>/g, " ")
                  .replace(/\s+/g, " ")
                  .trim();
                return (
                  <AccordionItem
                    key={originalIndex}
                    $index={displayIndex + 1}
                    $image={item.image || hills}
                    onClick={(event) => {
                      const hasOverflow = Array.from(
                        event.currentTarget.querySelectorAll("[data-truncated-content]"),
                      ).some(
                        (element) =>
                          element.scrollHeight > element.clientHeight + 1,
                      );

                      if (hasOverflow) {
                        setSelectedFaq(item);
                      }
                    }}
                  >
                    <Question
                      type="button"
                      aria-label={`Переглянути відповідь: ${item.q}`}
                    >
                      <QuestionText data-truncated-content>
                        {item.q}
                      </QuestionText>
                      <AnswerPreview data-truncated-content>
                        {answerPreview || "Натисніть, щоб переглянути відповідь."}
                      </AnswerPreview>
                    </Question>
                  </AccordionItem>
                );
                })}
              </AccordionWrapper>
          </>
        </ScrollArea>
      </Content>
      {selectedFaq && (
        <FaqAnswerOverlay {...backdropProps("answer", () => setSelectedFaq(null))}>
          <FaqAnswerModal
            $backgroundImage={selectedFaq.image}
            onClick={(e) => e.stopPropagation()}
          >
            <FaqAnswerHeader $scrolled={answerScrolled}>
            <FaqAnswerTitle>{selectedFaq.q}</FaqAnswerTitle>
            <FaqAnswerActions>
              {selectedFaq.image && (
                <AnswerActionButton
                  type="button"
                  $variant="download"
                  aria-label="Скачати зображення"
                  title="Скачати зображення"
                  onClick={() => handleDownloadImage(selectedFaq.image)}
                >
                  <FiDownload aria-hidden="true" />
                </AnswerActionButton>
              )}
              <AnswerActionButton
                type="button"
                $variant="close"
                aria-label="Закрити"
                title="Закрити (Esc)"
                onClick={() => setSelectedFaq(null)}
              >
                <FiX aria-hidden="true" />
              </AnswerActionButton>
            </FaqAnswerActions>
            </FaqAnswerHeader>
            <FaqAnswerBody ref={answerBodyRef} onScroll={handleAnswerScroll}>
              <FaqAnswerText>{renderAnswerBlocks(selectedFaq)}</FaqAnswerText>
            </FaqAnswerBody>
            <ScrollTopButton
              type="button"
              $variant="top"
              $visible={showScrollTop}
              tabIndex={showScrollTop ? 0 : -1}
              aria-hidden={!showScrollTop}
              aria-label="Прокрутити вгору"
              title="Прокрутити вгору"
              onClick={scrollAnswerToTop}
            >
              <FiArrowUp aria-hidden="true" />
            </ScrollTopButton>
          </FaqAnswerModal>
        </FaqAnswerOverlay>
      )}
      {previewImage && (
        <ImagePreviewOverlay onClick={() => setPreviewImage(null)}>
          <PreviewCloseBtn onClick={() => setPreviewImage(null)}>
            &times;
          </PreviewCloseBtn>
          <ImagePreviewActions>
            <ActionButton
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadImage(previewImage);
              }}
            >
              Скачати
            </ActionButton>
          </ImagePreviewActions>
          <PreviewImage
            src={previewImage}
            alt="Прев'ю зображення"
            onClick={(e) => e.stopPropagation()}
          />
        </ImagePreviewOverlay>
      )}
    </Overlay>
  );
};
export default InfoModal;
