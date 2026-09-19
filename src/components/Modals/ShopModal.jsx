import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import dinofroz from "../../photos/vip-images/dinofroz/vip-dinofroz.webp";
import turkey from "../../photos/cursors/dog.webp";
import shop from "../../photos/hero-header/shop.webp";
import hills from "../../photos/hero-header/hiils.webp";
import faded from "../../photos/fan-art/faded.webp";
import turkeyIcon from "../../photos/image.svg";

const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;

const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 2000;
`;

const ShopContainer = styled.div`
  background-color: #2b1313;
  color: #fff;
  width: 100%;
  max-height: 95%;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.5s ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -20px;
  right: 5px;
  background: transparent;
  border: none;
  color: #ff6c6c;
  font-size: 42px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;

const ShopTitle = styled.h2`
  color: #fdfdfd;
  letter-spacing: 2px;
  font-size: 26px;
  text-align: center;
  margin: 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const PackList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid #ff6c6c;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PackRow = styled.div`
  position: relative;
  border-bottom: 1px solid #ff6c6c;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  min-height: 120px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;
  overflow: hidden;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    &:nth-child(odd) {
      border-right: 1px solid #ff6c6c;
      min-height: 180px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.55); 
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const PackIcon = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 108, 108, 0.5);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  gap: 8px;
`;

const PackName = styled.div`
  font-weight: bold;
  font-size: 17px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LinkButton = styled.a`
  padding: 8px 16px;
  background: linear-gradient(135deg, #a124db 0%, #7b00ff 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    background: linear-gradient(135deg, #b53ee6 0%, #8f1aff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const CharacterText = styled.div`
  color: #f8f1c6;
  font-size: 13px;
  font-style: italic;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`;

const AnimatedContent = styled.div`
  animation: ${fadeIn} 0.4s ease-out;
`;

const ShopModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  const packs = [
    {
      id: "domino",
      count: "Замок Доміно",
      img: shop,
      icon: turkeyIcon,
      isCharacter: true,
    },
    {
      id: "uanimals",
      count: "Допомога тваринам",
      img: turkey,
      icon: turkey,
      buttonText: "Підтримати UAnimals",
      linkUrl: "https://uanimals.org/",
    },
    {
      id: "ecoaction",
      count: "Захист природи",
      img: hills,
      icon: hills,
      buttonText: "Підтримати Екодію",
      linkUrl: "https://ecoaction.org.ua/",
    },
    {
      id: "ifaw",
      count: "Міжнародний порятунок тварин",
      img: dinofroz,
      icon: dinofroz,
      buttonText: "Підтримати IFAW",
      linkUrl: "https://www.ifaw.org/",
    },
    {
      id: "greenpeace",
      count: "Захист планети",
      img: faded,
      icon: faded,
      buttonText: "Підтримати Greenpeace",
      linkUrl: "https://www.greenpeace.org/international/",
    },
    {
      id: "happypaw",
      count: "Притулки для тварин",
      img: turkey,
      icon: turkey,
      buttonText: "Підтримати Happy Paw",
      linkUrl: "https://happypaw.ua/",
    },
  ];

  return (
    <Overlay onClick={handleClose}>
      <ShopContainer $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <ShopTitle>Замок Доміно</ShopTitle>
        <AnimatedContent>
          <PackList>
            {packs.map((pack) => (
              <PackRow key={pack.id} $bgImage={pack.img}>
               {/* <PackIcon src={pack.icon} alt={pack.count || "Іконка"} /> */}
                <RowContent>
                  {pack.count && <PackName>{pack.count}</PackName>}
                  <ActionWrapper>
                    {pack.isCharacter ? (
                      <CharacterText>
                        Мене звати Доміно, я люблю давнє кіно. Підтримай фонди будь ласка!
                      </CharacterText>
                    ) : (
                      <LinkButton href={pack.linkUrl} target="_blank" rel="noopener noreferrer">
                        {pack.buttonText}
                      </LinkButton>
                    )}
                  </ActionWrapper>
                </RowContent>
              </PackRow>
            ))}
          </PackList>
        </AnimatedContent>
      </ShopContainer>
    </Overlay>
  );
};

export default ShopModal;