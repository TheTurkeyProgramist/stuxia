import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiBun, SiGithub, SiCloudflare } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiWikimediacommons } from "react-icons/si";
import loadtwo from "../../media/backgrounds/scenes/foggy-forest-loader.webp";
import { TbBrandWindy } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiGeminiFill } from "react-icons/ri";
import hostingerLogo from "../../media/_unused/logos/logo-iq.webp";
import { LOADER_POWERED_BY_KEY, usePrefValue } from "../../utils/betaFeatures";
import { TurkeyDot } from "./TurkeyDot.jsx";
import i18n from "../../i18n/i18n.js";
const TECH_STACK = [
  { Icon: TbBrandVite, color: "#646CFF", title: "Vite" },
  { Icon: TbBrandWindy, color: "#00c6ff", title: "Windy API" },
  { Icon: TiWeatherPartlySunny, color: "#FFB300", title: "WeatherAPI" },
  { Icon: RiGeminiFill, color: "#8E75FF", title: "Gemini AI" },
  { Icon: SiWikimediacommons, color: "#339966", title: "Wikimedia Commons" },
  { Icon: SiBun, color: "#FBF0DF", title: "Bun" },
  { Icon: SiGithub, color: "#FFFFFF", title: "GitHub" },
  { Icon: SiCloudflare, color: "#F38020", title: "Cloudflare" },
  { Icon: IoLogoFirebase, color: "#FFCA28", title: "Firebase" },
  { Icon: BiLogoVisualStudio, color: "#1F9CF0", title: "VS Code" },
  { src: hostingerLogo, title: "HostIQ" },
];


const expandEntrance = keyframes`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
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
  will-change: opacity;
`;

const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  animation: ${expandEntrance} 0.8s ease-out forwards;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.8s ease-in-out;
    opacity: ${(props) => (props.$active ? 1 : 0)};
  }

  /* Розмитий фон у барвах зображення — заповнює порожні місця */
  .loader-bg-blur {
    filter: blur(28px) saturate(1.3) brightness(0.8);
    transform: scale(1.2);
  }

  /* На вузьких екранах зображення вписується по ширині */
  @media (max-width: 480px) {
    .loader-bg-main {
      object-fit: contain;
    }
  }
`;

const UIOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 96%;
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
  background: rgba(0, 0, 0, 0.45);
  padding: 5px 10px;
  border-radius: 10px;
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
  gap: 8px;
  flex-wrap: wrap;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }

  svg {
    font-size: 18px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

const PhraseText = styled.div`
  font-size: 12px;
  color: #00c6ff;
  line-height: 1.5;
  font-weight: 900;
  max-width: 1200px;
  font-style: italic;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;
const CopyrightText = styled.p`
  margin-bottom: clamp(24px, 6vh, 55px);
  color: rgb(255, 255, 255);
  font-size: 10px;
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

  > span {
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: right;
    min-width: min(170px, 40vw);
  }
`;

export default function Loader({ isLoading, isFadingOut, randomPhrase }) {
  // «Працює на базі»: повністю, лише іконки або сховано (Параметри → Режими та застосунки)
  const poweredBy = usePrefValue(LOADER_POWERED_BY_KEY, "full");
  const showTitle = poweredBy !== "icons" && poweredBy !== "hidden";
  const showIcons = poweredBy !== "hidden";

  useEffect(() => {
    const img = new Image();
    img.src = loadtwo;
  }, []);

  if (!isLoading) return null;

  return (
    <LoaderWrapper $isFadingOut={isFadingOut} role="status" aria-live="polite">
      <TopRightContainer>
        <span>{i18n.t("ui.Loader.v100")}</span>
        <TurkeyDot />
      </TopRightContainer>

      <ImageContainer $active>
        <img className="loader-bg-blur" src={loadtwo} alt="" aria-hidden="true" />
        <img className="loader-bg-main" src={loadtwo} alt="Loading..." />
      </ImageContainer>

      <UIOverlay>
        {(showIcons || randomPhrase) && (
          <PoweredByWrapper>
            {showTitle && <span>{i18n.t("ui.Loader.pratsiuieNaBazi")}</span>}
            {showIcons && (
              <IconsGrid>
                {TECH_STACK.map(({ Icon, src, color, title }) =>
                  src ? (
                    <img key={title} src={src} alt={title} title={title} />
                  ) : (
                    <Icon key={title} style={{ color }} title={title} />
                  )
                )}
              </IconsGrid>
            )}
            {randomPhrase && <PhraseText>{randomPhrase}</PhraseText>}
          </PoweredByWrapper>
        )}

        <CopyrightText>
          {i18n.t("ui.Loader.2026StuxiaVsiPrava")}
        </CopyrightText>
      </UIOverlay>
    </LoaderWrapper>
  );
}