import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import dominoVideo from "../../media/characters/kate-and-domino.webm";
import i18n from "../../i18n/i18n.js";
import { getPref, setPref } from "../../utils/prefsStore.js";
import { WEATHER_VIEW_KEY } from "../../utils/betaFeatures.js";

// Доміно пропонує простий вигляд картки погоди — один раз, після першої «своєї» картки.
// Пошукові картки (з адреси, напр. з Google) пропозицію не викликають — тоді вона прийде з наступною.

export const WEATHER_VIEW_OFFER_KEY = "weather_view_offer_shown";

// Роботи пошуковиків і автотести не повинні бачити модалку
const isBot = () =>
  typeof navigator !== "undefined" &&
  (navigator.webdriver || /bot|crawl|spider|slurp|lighthouse|headless|bingpreview|facebookexternalhit/i.test(navigator.userAgent || ""));

export const canOfferWeatherView = () => getPref(WEATHER_VIEW_OFFER_KEY) !== "true" && !isBot();

// Safari не вміє прозорість у WebM — там показуємо емодзі (як у туторіалі Доміно)
const canPlayAlphaWebm = (() => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return !(/safari/i.test(ua) && !/chrome|chromium|crios|edg|android/i.test(ua));
})();

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to { opacity: 1; transform: none; }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100010;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.55);
`;

const Panel = styled.div`
  width: min(380px, 100%);
  box-sizing: border-box;
  padding: 18px 18px 14px;
  border-radius: 18px;
  background: linear-gradient(160deg, rgba(28, 20, 12, 0.97) 0%, rgba(10, 10, 16, 0.98) 100%);
  border: 1px solid rgba(255, 179, 108, 0.55);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.55);
  color: #fff;
  animation: ${fadeIn} 0.3s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const Mascot = styled.div`
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: radial-gradient(circle at 50% 60%, rgba(255, 179, 108, 0.35) 0%, rgba(255, 179, 108, 0.08) 70%);
  border: 1px solid rgba(255, 179, 108, 0.45);

  video {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 170%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  span {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #ffb36c;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 800;
  line-height: 1.3;
`;

const Text = styled.p`
  margin: 0 0 14px;
  font-size: 14px;
  line-height: 1.5;
  color: #f3eee8;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Primary = styled.button`
  flex: 1 1 140px;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #ffca91, #ff9d48);
  color: #1a0800;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

const Secondary = styled(Primary)`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-weight: 600;
`;

export default function WeatherViewOffer({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") choose(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!open) return null;

  // mode: "simple" | "detailed" | null (закрили — нічого не міняємо)
  function choose(mode) {
    if (mode) setPref(WEATHER_VIEW_KEY, mode);
    setPref(WEATHER_VIEW_OFFER_KEY, "true");
    onClose?.();
  }

  return createPortal(
    <Backdrop onClick={(e) => e.target === e.currentTarget && choose(null)}>
      <Panel role="dialog" aria-modal="true" aria-labelledby="weather-view-offer-title">
        <Head>
          <Mascot aria-hidden="true">
            {canPlayAlphaWebm ? <video src={dominoVideo} autoPlay loop muted playsInline /> : <span>🦃</span>}
          </Mascot>
          <div>
            <Name>{i18n.t("ui.WeatherViewOffer.domino")}</Name>
            <Title id="weather-view-offer-title">{i18n.t("ui.WeatherViewOffer.title")}</Title>
          </div>
        </Head>
        <Text>{i18n.t("ui.WeatherViewOffer.text")}</Text>
        <Actions>
          <Primary type="button" autoFocus onClick={() => choose("simple")}>
            {i18n.t("ui.WeatherViewOffer.simple")}
          </Primary>
          <Secondary type="button" onClick={() => choose("detailed")}>
            {i18n.t("ui.WeatherViewOffer.detailed")}
          </Secondary>
        </Actions>
      </Panel>
    </Backdrop>,
    document.body,
  );
}
