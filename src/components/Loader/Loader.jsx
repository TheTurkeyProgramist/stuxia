import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiBun, SiGithub, SiCloudflare, SiVercel, SiHostinger } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiPixabay } from "react-icons/si";
import loadtwo from "../../photos/hero-header/fogtwo.webp";
import { TbBrandWindy } from "react-icons/tb";
import { RiGeminiFill } from "react-icons/ri";
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
  0%, 100% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
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
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
  overflow: hidden;
  will-change: opacity, visibility;
`;

const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  animation: ${expandEntrance} 0.8s ease-out forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.8s ease-in-out;
    opacity: ${(props) => (props.$active ? 1 : 0)};
  }
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
  color: #fff;
  font-family: "Inter", sans-serif;
`;

const PoweredByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.45);
  padding: 8px 16px;
  border-radius: 14px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  span {
    font-size: 15px;
    letter-spacing: 1.5px;
    color: #fff;
    font-weight: 700;
  }
`;

const IconsGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  svg {
    font-size: 22px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }
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

  span {
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: right;
    min-width: 170px;
  }
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
  useEffect(() => {
    const img = new Image();
    img.src = loadtwo;
  }, []);

  if (!isLoading) return null;

  return (
    <LoaderWrapper $isFadingOut={isFadingOut}>
      <TopRightContainer>
        <span>v.1.0.0 | Я в Конотопі :)</span>
        <DotGrid>
          {DOTS_CONFIG.map((dot, idx) => (
            <Dot key={idx} $r={dot.r} $c={dot.c}$delay={dot.delay} />
          ))}
        </DotGrid>
      </TopRightContainer>

      <ImageContainer $active>
        <img src={loadtwo} alt="Loading..." />
      </ImageContainer>

      <UIOverlay>
        <PoweredByWrapper>
          <span>Працює на базі:</span>
          <IconsGrid>
            <TbBrandVite style={{ color: "#2bfffb" }} title="Vite" />
            <SiBun style={{ color: "#FBF0DF" }} title="Bun" />
            <SiGithub style={{ color: "#FFFFFF" }} title="GitHub" />
            <SiCloudflare style={{ color: "#F38020" }} title="Cloudflare" />
            <IoLogoFirebase style={{ color: "#FFCA28" }} title="Firebase" />
            <BiLogoVisualStudio style={{ color: "#007ACC" }} title="VS Code" />
            <SiVercel style={{ color: "#FFFFFF" }} title="Vercel" />
            <SiHostinger style={{ color: "#00fff7" }} title="HostIQ / Hosting" />
          </IconsGrid>
        </PoweredByWrapper>

        {randomPhrase && <PhraseText>{randomPhrase}</PhraseText>}
        <CopyrightText>
          2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist
        </CopyrightText>
      </UIOverlay>
    </LoaderWrapper>
  );
}