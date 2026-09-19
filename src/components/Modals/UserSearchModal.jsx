import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import rawFaqData from "./faqData.json";
import hills from "../../photos/hero-header/fog.webp";
import texts from "../../photos/vip-modal/texts.webp";
import logofix from "../../photos/hero-header/logo.webp";
import { FaHeartbeat } from "react-icons/fa";
import { IoHeartDislikeSharp } from "react-icons/io5";
import preview from "../../photos/hero-header/prewiew.webp";
import info from "../../photos/hero-header/what.webp";
import one from "../../photos/hero-header/my/myone.webp";
import two from "../../photos/hero-header/my/mytwo.webp";
import soon from "../../photos/hero-header/my/soon.webp";
import might from "../../photos/hero-header/my/myone.webp";
import three from "../../photos/hero-header/my/mythree.webp";
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
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TabButton = styled.button`
  background: ${({ $active, $isDarkMode }) =>
    $active
      ? "#8a2be2"
      : $isDarkMode
      ? "#0c0c0cbf"
      : "#fdff98"};

  color: ${({ $active, $isDarkMode }) =>
    $active ? "#ffffff" : $isDarkMode ? "#020202" : "#020202"};

  border: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $active, $isDarkMode }) =>
      $active
        ? "#7b22cc"
        : $isDarkMode
        ? "#1a1a1ce6"
        : "#fbff02"};
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
  margin-top: 3px;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${animatedStyle}
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${({ $rating, $isDarkMode }) => 
    $rating === 1 ? "#8a2be2" : $isDarkMode ? "#ffffff" : "#111111"};
  opacity: ${(props) => (props.$rating === -1 ? 0.4 : 1)};
  transition: all 0.3s ease;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${({ $rating, $isDarkMode }) => 
      $rating === -1 ? ($isDarkMode ? "#555555" : "#cccccc") : "#8a2be2"};
    margin-right: 12px;
    display: inline-block;
  }
`;
const QuestionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

const QuestionText = styled.div`
  flex: 1;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 1px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 22px;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.2);
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
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

const AnswerActionButton = styled.button`
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  &:hover {
    background: #a25be2;
  }
`;

const FaqAnswerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.72);
`;

const FaqAnswerModal = styled.div`
  position: relative;
  width: min(900px, 100%);
  max-height: 85vh;
  overflow-y: auto;
  padding: 28px;
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

const FaqAnswerTitle = styled.h2`
  margin: 0 42px 18px 0;
  font-size: 22px;
`;

const FaqAnswerText = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  white-space: pre-line;
`;

const FaqAnswerActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
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

const SearchInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid rgb(50, 215, 0);
  border-bottom-left-radius: 25px;
  background: rgba(2, 2, 2, 0.9);
  color: #fffefe;
  font-size: 13px;
  outline: none;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #f9f9f9;
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
const InfoModal = ({ onClose, isOpen, initialFaqQuestion, isDarkMode }) => {
  const [isClosing, setIsClosing] = useState(false);
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [ratings, setRatings] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("faq");
  const LIKE = 1;
  const DISLIKE = -1;

  const [previewImage, setPreviewImage] = useState(null);

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

  const handleDownloadImage = (imgSrc) => {
    const a = document.createElement("a");
    a.href = imgSrc;
    a.download = `stykhiya_image_${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePrintImage = (imgSrc) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      `<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${imgSrc}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`,
    );
    printWindow.document.close();
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

  const handleLike = (index, points) => {
    const currentRating = ratings[index] || 0;
    const newRating = currentRating === points ? 0 : points;
    setRatings({ ...ratings, [index]: newRating });
  };

  const pastEvents = React.useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    return customDays
      .filter((day) => day.date < today)
      .sort((a, b) => b.date.localeCompare(a.date)) // Свіжіші спочатку
      .slice(0, 5);
  }, [customDays]);

  const faqData = React.useMemo(() => {
    const imageMap = {
      hills,
      texts,
      logofix,
      preview,
      info,
      one,
      two,
      soon,
      might,
      three,
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
        setActiveTab("faq");
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
      rating: ratings[originalIndex] || 0,
    }))
    .filter((item) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.q?.toLowerCase().includes(query) ||
        item.a?.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <Overlay $isClosing={isClosing} onClick={handleClose}>
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
          <TabsContainer>
            <TabButton
              $active={activeTab === "faq"}
              onClick={() => setActiveTab("faq")}
              style={{
                borderBottomLeftRadius: "20px",
                borderTopLeftRadius: "20px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              Питання (FAQ)
            </TabButton>
            <TabButton
              $active={activeTab === "ai"}
              style={{
                borderBottomRightRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            >
              ШІ Асистент
            </TabButton>
          </TabsContainer>
        </Conten>
        <ScrollArea>
          {activeTab === "faq" && (
            <>
              <SearchInput
                type="search"
                placeholder="Пошук питань..."
                aria-label="Пошук питань"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <AccordionWrapper style={{ marginTop: 0 }}>
                {sortedFaqData.length === 0 && (
                  <p style={{ textAlign: "center", color: "#555" }}>
                    Питань за цим запитом не знайдено.
                  </p>
                )}
                {sortedFaqData.map((item, displayIndex) => {
                const originalIndex = item.originalIndex;
                const rating = ratings[originalIndex] || 0;
                return (
                  <AccordionItem key={originalIndex} $index={displayIndex + 1}>
                    <Question $isDarkMode={isDarkMode}
                      $rating={rating}
                      onClick={() => setSelectedFaq(item)}
                    >
                      <QuestionContent>
                        <QuestionText>{item.q}</QuestionText>
                        <ArrowContainer>
                    <Tooltip content="Корисно" isDarkMode={isDarkMode}>
                          <LikeButton
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(originalIndex, LIKE);
                            }}
                            aria-label="Корисно"
                          >
                            {rating === LIKE ? <FaHeartbeat style={{color: "blue"}}/> : <FaHeartbeat />}
                          </LikeButton>
                          </Tooltip>
                           <Tooltip content="Не корисно" isDarkMode={isDarkMode}>
                          <LikeButton
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(originalIndex, DISLIKE);
                            }}
                            aria-label="Не корисно"
                          >        
                            {rating === DISLIKE ? (
                              <IoHeartDislikeSharp />
                            ) : (
                              <IoHeartDislikeSharp />
                            )}
                          </LikeButton>
                          </Tooltip>
                        </ArrowContainer>
                      </QuestionContent>
                    </Question>
                  </AccordionItem>
                );
                })}
              </AccordionWrapper>
            </>
          )}
        </ScrollArea>
      </Content>
      {selectedFaq && (
        <FaqAnswerOverlay onClick={() => setSelectedFaq(null)}>
          <FaqAnswerModal
            $backgroundImage={selectedFaq.image}
            onClick={(e) => e.stopPropagation()}
          >
            <PreviewCloseBtn onClick={() => setSelectedFaq(null)}>
              &times;
            </PreviewCloseBtn>
            <FaqAnswerTitle>{selectedFaq.q}</FaqAnswerTitle>
            <FaqAnswerText>{renderAnswerBlocks(selectedFaq)}</FaqAnswerText>
            {selectedFaq.image && (
              <FaqAnswerActions>
                <AnswerActionButton
                  onClick={() => handleDownloadImage(selectedFaq.image)}
                >
                  Скачати
                </AnswerActionButton>
                <AnswerActionButton
                  onClick={() => handlePrintImage(selectedFaq.image)}
                >
                  Друкувати
                </AnswerActionButton>
              </FaqAnswerActions>
            )}
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
            <ActionButton
              onClick={(e) => {
                e.stopPropagation();
                handlePrintImage(previewImage);
              }}
            >
               Друкувати
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
