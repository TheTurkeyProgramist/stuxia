import styled from "styled-components";
import { MdAutoAwesome } from "react-icons/md";
import { setSceneDecorEnabled, useSceneDecor } from "../../utils/sceneDecor.js";

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 6px 10px;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 480px) {
    .decor-label {
      display: none;
    }
  }
`;

const Track = styled.span`
  position: relative;
  width: 32px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 999px;
  background: ${(p) => (p.$on ? p.$accent : "rgba(255, 255, 255, 0.2)")};
  transition: background 0.15s ease;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: ${(p) => (p.$on ? "16px" : "2px")};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.15s ease;
  }
`;

// Перемикач декору карток для модалок часового поясу й мови
const DecorToggle = ({ label, title, accent = "#60cdff" }) => {
  const enabled = useSceneDecor();
  return (
    <Toggle
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={title}
      title={title}
      onClick={() => setSceneDecorEnabled(!enabled)}
    >
      <MdAutoAwesome size={16} color={enabled ? accent : "#a0a0a0"} />
      <span className="decor-label">{label}</span>
      <Track $on={enabled} $accent={accent} />
    </Toggle>
  );
};

export default DecorToggle;
