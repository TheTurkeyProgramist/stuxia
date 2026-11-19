import React from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { FiPenTool, FiSave, FiTrash2 } from "react-icons/fi";

import i18n from "../../i18n/i18n.js";
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DARK = css`
  --p-bg: #202024;
  --p-text: #f3f3f3;
  --p-muted: #a0a0a0;
  --p-ink: 255, 255, 255;
  --p-accent: #ffb36c;
  --p-accent-rgb: 255, 179, 108;
  --p-on-accent: #1c1c1f;
`;

const LIGHT = css`
  --p-bg: #ffffff;
  --p-text: #111827;
  --p-muted: #5b6270;
  --p-ink: 0, 0, 0;
  --p-accent: #c2410c;
  --p-accent-rgb: 194, 65, 12;
  --p-on-accent: #ffffff;
`;

// Не модалка, а картка в кутку: сайт лишається доступним, поки людина вирішує
const Card = styled.div`
  ${(p) => (p.$light ? LIGHT : DARK)}
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 100020;
  width: min(380px, calc(100vw - 32px));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  background: var(--p-bg);
  color: var(--p-text);
  border: 1px solid rgba(var(--p-ink), 0.1);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4), 0 0 1px rgba(var(--p-ink), 0.2);
  animation: ${slideIn} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1);
  text-align: left;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Head = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const Icon = styled.div`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 17px;
  color: var(--p-accent);
  background: rgba(var(--p-accent-rgb), 0.14);
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 700;
`;

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
  color: var(--p-muted);
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Btn = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 36px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$primary ? "var(--p-accent)" : "rgba(var(--p-ink), 0.14)")};
  background: ${(p) => (p.$primary ? "var(--p-accent)" : "transparent")};
  color: ${(p) => (p.$primary ? "var(--p-on-accent)" : "var(--p-text)")};
  transition: filter 0.15s, background 0.15s;
  &:hover {
    filter: brightness(1.07);
    background: ${(p) => (p.$primary ? "var(--p-accent)" : "rgba(var(--p-ink), 0.06)")};
  }
  &:focus-visible {
    outline: 2px solid var(--p-accent);
    outline-offset: 2px;
  }
`;

const plural = (n) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return i18n.t("ui.DecoratorDraftPrompt.zmina");
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return i18n.t("ui.DecoratorDraftPrompt.zminy");
  return i18n.t("ui.DecoratorDraftPrompt.zmin");
};

// Після перезавантаження: у минулій сесії лишились незбережені зміни Декоратора
const DecoratorDraftPrompt = ({ isDarkMode, changes, onSave, onDiscard }) =>
  createPortal(
    <Card
      $light={!isDarkMode}
      role="alertdialog"
      aria-labelledby="decorator-draft-title"
      aria-describedby="decorator-draft-text"
      data-decorator-ignore="true"
    >
      <Head>
        <Icon>
          <FiPenTool />
        </Icon>
        <div>
          <Title id="decorator-draft-title">{i18n.t("ui.DecoratorDraftPrompt.zberehtyZminyDekoratora")}</Title>
          <Text id="decorator-draft-text">
            {i18n.t("ui.DecoratorDraftPrompt.peredPerezavantazhenniamUDekoratori")} {changes} {plural(changes)}{i18n.t("ui.DecoratorDraftPrompt.aleZberihatyZminyPislia")}
          </Text>
        </div>
      </Head>
      <Actions>
        <Btn type="button" onClick={onDiscard}>
          <FiTrash2 /> {i18n.t("ui.DecoratorDraftPrompt.vidkynuty")}
        </Btn>
        <Btn type="button" $primary onClick={onSave}>
          <FiSave /> {i18n.t("ui.DecoratorDraftPrompt.zberehty")}
        </Btn>
      </Actions>
    </Card>,
    document.body,
  );

export default DecoratorDraftPrompt;
