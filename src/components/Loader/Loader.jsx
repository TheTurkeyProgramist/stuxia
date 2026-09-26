import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import loadtwo from "../../photos/hero-header/fogtwo.webp";

const DOTS_CONFIG = [
  { r: 1, c: 1, delay: "0s" },
  { r: 1, c: 2, delay: "0.1s" },
  { r: 1, c: 3, delay: "0.2s" },
  { r: 2, c: 3, delay: "0.3s" },
  { r: 3, c: 3, delay: "0.4s" },
  { r: 3, c: 2, delay: "0.5s" },
  { r: 3, c: 1, delay: "0.6s" },
  { r: 2, c: 1, delay: "0.7s" },
];

const expandEntrance = keyframes`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const dotFade = keyframes`
  0% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
  100% { opacity: 1; }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1994;
  opacity: ${(props) => (props.$isFadingOut ? 0 : 1)};
  visibility: ${(props) => (props.$isFadingOut ? "hidden" : "visible")};
  transition:
    opacity 0.8s ease-in-out,
    visibility 0.8s ease-in-out;
  overflow: hidden;
  will-change: opacity, visibility;
`;

const LoaderContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  animation: ${expandEntrance} 0.8s ease-out forwards;
`;

const LoaderImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
  transition: opacity 0.8s ease-in-out;
  opacity: ${(props) => (props.$active ? 1 : 0)};
`;

const UIOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0.5vh;
  text-align: center;
`;

const InfoText = styled.div`
  margin-top: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  width: 100%;
`;

const PhraseText = styled.div`
  font-size: 13px;
  color: #00c6ff;
  line-height: 1.5;
  font-weight: 900;
  max-width: 1200px;
  font-style: italic;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.61);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  margin-top: 5px;
`;

const CopyrightText = styled.p`
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`;

const TopRightContainer = styled.div`
  position: absolute;
  top: 22px;
  right: -1px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
`;

const StatusText = styled.span`
  font-size: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: right;
  min-width: 170px;
`;

const DotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  grid-template-rows: repeat(3, 10px);
  gap: 3px;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  animation: ${dotFade} 0.8s infinite linear;
  grid-row: ${(props) => props.$r};
  grid-column: ${(props) => props.$c};
  animation-delay: ${(props) => props.$delay};
`;

export default function Loader({ isLoading, isFadingOut, randomPhrase }) {
  // Прелоад зображення
  useEffect(() => {
    const img = new Image();
    img.src = loadtwo;
  }, []);

  if (!isLoading) return null;

  return (
    <LoaderWrapper $isFadingOut={isFadingOut}>
      <TopRightContainer>
        <StatusText>v.1.0.0 | Я в Конотопі :)</StatusText>
        <DotGrid>
          {DOTS_CONFIG.map((dot, idx) => (
            <Dot key={idx} $r={dot.r} $c={dot.c}$delay={dot.delay} />
          ))}
        </DotGrid>
      </TopRightContainer>
      <LoaderContent>
        <ImageContainer>
          <LoaderImage src={loadtwo} $active alt="Loading..." />
        </ImageContainer>
        <UIOverlay>
          <InfoText>
            {randomPhrase && <PhraseText>{randomPhrase}</PhraseText>}
            <CopyrightText>
              2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist
            </CopyrightText>
          </InfoText>
        </UIOverlay>
      </LoaderContent>
    </LoaderWrapper>
  );
}