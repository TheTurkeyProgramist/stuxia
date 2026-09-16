import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import sirenhead from "../photos/vip-images/sirenhead/sirenhead.webp";

/* ─── анімації ──────────────────────────────────────────────── */
const scanline = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

const flicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`;

/* ─── стилі ─────────────────────────────────────────────────── */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  text-align: center;
  overflow: hidden;
  font-family: var(--font-family, "Inter", sans-serif);
  background:
    url(${sirenhead}) center / cover no-repeat,
    linear-gradient(135deg, #000 0%, #0a0a0a 100%);
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.15) 3px,
      rgba(0, 0, 0, 0.15) 4px
    );
    animation: ${scanline} 8s linear infinite;
    pointer-events: none;
  }
`;

const GlowTitle = styled(motion.h1)`
  font-weight: 900;
  margin: 6px;
  font-size: 20px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${flicker} 6s infinite;
`;

const Card = styled(motion.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 4px;
  max-width: 640px;
  width: 100%;
  box-shadow:
    0 0 0 1px rgba(148, 255, 250, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.6);
`;

const TimeRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`;

const TimeLabel = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  color: rgba(0, 253, 248, 1);
  letter-spacing: 0.12em;
`;

const Desc = styled.p`
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 1.65;
  margin: 3px;
`;

const StatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
`;

const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $ok }) => ($ok ? "#4ade80" : "#ffb36c")};
  box-shadow: 0 0 8px ${({ $ok }) => ($ok ? "#4ade80" : "#ffb36c")};
  animation: ${pulse} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`;

const StatusText = styled.span`
  font-size: 12px;
  color: rgb(255, 255, 255);
`;

const FloatingImg = styled.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${float} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

/* ─── компонент ─────────────────────────────────────────────── */
const Maintenance = ({ isDarkMode = true, endTime = null, message = null }) => {
  const [countdown, setCountdown] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    if (!endTime) return;
 let targetMs = null;
    if (typeof endTime.toMillis === "function") {
      targetMs = endTime.toMillis();
    } else if (endTime.seconds) {
      targetMs = endTime.seconds * 1000;
    } else {
      targetMs = new Date(endTime).getTime();
    }

    if (isNaN(targetMs)) return;

    const tick = () => {
      const diff = targetMs - Date.now();
      if (diff <= 0) {
        setCountdown(null);
        setIsComplete(true);
        setTimeout(() => window.location.reload(), 60_000);
        return;
      }

      const hours = Math.floor(diff / 3_600_000);
      const minutes = Math.floor((diff % 3_600_000) / 60_000);
      const seconds = Math.floor((diff % 60_000) / 1_000);
      const parts = [];
      if (hours > 0) parts.push(`${hours}год`);
      parts.push(`${String(minutes).padStart(2, "0")}хв`);
      parts.push(`${String(seconds).padStart(2, "0")}с`);
      setCountdown(parts.join(" "));
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  return (
    <AnimatePresence>
      <Overlay
        key="maintenance-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.35,
            duration: 0.55,
            type: "spring",
            stiffness: 120,
          }}
        >
          <FloatingImg>
            <img src={sirenhead} alt="" />
          </FloatingImg>
          <GlowTitle
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {isComplete ? "Ми завершили оновлення!" : "Технічне обслуговування"}
          </GlowTitle>
          {endTime && (
            <TimeRow>
              <TimeLabel>
                {isComplete ? "Перезавантаження через" : "Залишилось часу"}: {isComplete ? "~1 хв" : (countdown ?? "Підраховуємо…")}
              </TimeLabel>
            </TimeRow>
          )}
          <Desc>
            Причина робіт: {message ?? "Планове оновлення системи."}
          </Desc>
          {isComplete && (
            <StatusBar>
              <StatusDot $ok={true} />
              <StatusText>Роботи завершено — перезавантаження…</StatusText>
            </StatusBar>
          )}
        </Card>
      </Overlay>
    </AnimatePresence>
  );
};
export default Maintenance;