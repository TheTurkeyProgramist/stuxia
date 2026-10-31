import React from "react";
import styled from "styled-components";
import { DEFAULT_BGS } from "../Hero/defaultBgs";

const WIKI_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png";

const BgModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(5px);
`;

const BgModalContent = styled.div`
  background: #1e1e1e56;
  padding: 5px;
  border-radius: 20px;
  width: 95%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ffb36c;
  color: white;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const BgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
`;

const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`;

const BgItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${(props) => (props.$active ? "2px solid #ffb36c" : "2px solid transparent")};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${NameOverlay}, ${TopOverlay} {
      opacity: 1;
    }
  }
`;

const BgSquare = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`;

// Вибір фону картки погоди: фото з Вікіпедії для міста або один зі стандартних фонів
const WeatherBgModal = ({ locationName, bgMode, onSelect, onClose }) => (
  <BgModalOverlay onClick={onClose}>
    <BgModalContent onClick={(e) => e.stopPropagation()}>
      <h2 style={{ margin: 0, color: "#ffb36c" }}>Зміна фону: {locationName}</h2>
      <BgGrid>
        <BgItem $active={bgMode === "wiki"} onClick={() => onSelect("wiki")}>
          <NameOverlay>Вікіпедія</NameOverlay>
          <BgSquare src={WIKI_LOGO} />
        </BgItem>
        {DEFAULT_BGS.filter((bg) => !bg.src.endsWith(".mp4")).map((bg, idx) => (
          <BgItem key={idx} $active={bgMode === bg.src} onClick={() => onSelect(bg.src)}>
            {bg.author && (
              <TopOverlay>
                <div style={{ fontWeight: "bold" }}>{bg.author}</div>
                {bg.source && <div>{bg.source}</div>}
              </TopOverlay>
            )}
            <NameOverlay>{bg.name}</NameOverlay>
            <BgSquare src={bg.src} />
          </BgItem>
        ))}
      </BgGrid>
      <button
        onClick={onClose}
        style={{
          padding: "8px",
          background: "#ffb36c",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        Закрити
      </button>
    </BgModalContent>
  </BgModalOverlay>
);

export default WeatherBgModal;
