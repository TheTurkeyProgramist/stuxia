import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const slideDownAntiHeader = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideUpAntiHeader = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100%); opacity: 0; }
`;

const AntiHeaderDiv = styled.div`
  position: fixed;
  top: 37px;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 1850;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 12px;
  background-color: ${(props) => {
    if (!props.$accentColor) {
      return props.$isDarkMode ? "rgba(18, 18, 18, 0.96)" : "rgba(245, 245, 245, 0.96)";
    }
    return props.$isDarkMode
      ? `color-mix(in srgb, ${props.$accentColor} 30%, #111111)`
      : `color-mix(in srgb, ${props.$accentColor} 30%, #ffffff)`;
  }};
  border-bottom: 2px solid ${(props) => props.$accentColor || "#00afce"};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#111111")};
  animation: ${(props) => (props.$isClosing ? slideUpAntiHeader : slideDownAntiHeader)} 0.35s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
  transition: background-color 0.35s ease, border-color 0.35s ease;
`;

const PromoAdCloseBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  color: ${(props) => (props.$isDarkMode ? "#aaa" : "#555")};
  &:hover { color: #ff3b30; }
  &:focus-visible { outline: 1px solid #00afce; }
`;

const PromoAdTimerBarFill = styled.div`
  height: 100%;
  background: ${(props) => props.$accentColor || "#00afce"};
  width: ${(props) => props.$pct}%;
  transition: width 0.9s linear;
`;

const KbdBadge = styled.kbd`
  background: ${(props) => (props.$isDarkMode ? "#2a2a2a" : "#eee")};
  color: ${(props) => (props.$isDarkMode ? "#7afcff" : "#006666")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#444" : "#ccc")};
  border-radius: 4px;
  padding: 1px 5px;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  display: inline-block;
  margin: 1px 2px;
`;

export const AntiHeaderAd = ({
  isDarkMode = false,
  accentColor = null,
}) => {
  const [isEnabledInSettings, setIsEnabledInSettings] = useState(() => {
    try {
      return localStorage.getItem("ad_antiheader_enabled") !== "false";
    } catch {
      return true;
    }
  });

  const [isAdOpen, setIsAdOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [adSecondsLeft, setAdSecondsLeft] = useState(10);
  const [adIntervalSec, setAdIntervalSec] = useState(30);
  const [adDurationSec, setAdDurationSec] = useState(10);
  const [adSnoozeUntil, setAdSnoozeUntil] = useState(null);
  const [showAdControls, setShowAdControls] = useState(false);

  const handleCloseAd = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsAdOpen(false);
      setIsClosing(false);
    }, 340);
  };

  // Слухаємо зміни в localStorage (з UserSettingsModal)
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const enabled = localStorage.getItem("ad_antiheader_enabled") !== "false";
        setIsEnabledInSettings(enabled);
        if (!enabled) handleCloseAd();
      } catch {}
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Головний таймер появи реклами
  useEffect(() => {
    if (!isEnabledInSettings) return;

    const mainInterval = setInterval(() => {
      if (!isEnabledInSettings) return;
      if (adSnoozeUntil && Date.now() < adSnoozeUntil) return;

      setIsAdOpen(true);
      setIsClosing(false);
      setAdSecondsLeft(adDurationSec);
    }, adIntervalSec * 1000);

    return () => clearInterval(mainInterval);
  }, [adIntervalSec, adDurationSec, adSnoozeUntil, isEnabledInSettings]);

  // Зворотний відлік тривалості показу реклами (10с -> 0с)
  useEffect(() => {
    if (!isAdOpen || !isEnabledInSettings || isClosing) return;

    if (adSecondsLeft <= 0) {
      handleCloseAd();
      return;
    }

    const timer = setInterval(() => {
      setAdSecondsLeft((prev) => {
        if (prev <= 1) {
          handleCloseAd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAdOpen, adSecondsLeft, isEnabledInSettings, isClosing]);

  if (!isEnabledInSettings || !isAdOpen) {
    return null;
  }

  return (
    <AntiHeaderDiv $isDarkMode={isDarkMode} $accentColor={accentColor} $isClosing={isClosing}>
      {/* Ліва секція: Текст рекомендацій та гарячі клавіші */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3px", flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "11px", fontWeight: "800", color: accentColor || "#00afce" }}>
            💡 РЕКОМЕНДАЦІЯ & ПОРАДА:
          </span>
          <span style={{ fontSize: "11px", opacity: 0.9, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            🌿 Завітайте до Магазину спонсорів та підтримайте екологічні ініціативи!
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: "700", opacity: 0.7 }}>⌨️ Клавіші:</span>
          <span><KbdBadge $isDarkMode={isDarkMode}>Alt + T</KbdBadge> навігація хедера</span>
          <span><KbdBadge $isDarkMode={isDarkMode}>Alt + A</KbdBadge> кольори (у модалці)</span>
          <span><KbdBadge $isDarkMode={isDarkMode}>←</KbdBadge><KbdBadge $isDarkMode={isDarkMode}>→</KbdBadge> перехід</span>
          <span><KbdBadge $isDarkMode={isDarkMode}>Enter</KbdBadge> вибір</span>
          <span><KbdBadge $isDarkMode={isDarkMode}>Esc</KbdBadge> закрити</span>
        </div>
      </div>

      {/* Права секція: Таймер та Керування */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <button
          onClick={() => setShowAdControls((p) => !p)}
          style={{
            background: "transparent",
            border: "1px solid " + (isDarkMode ? "#555" : "#ccc"),
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "11px",
            padding: "3px 7px",
            color: isDarkMode ? "#fff" : "#111"
          }}
          title="Налаштування появи реклами"
        >
          ⚙️ {showAdControls ? "Сховати" : "Пауза / Випадаючий список"}
        </button>

        <span style={{ fontSize: "12px", fontWeight: "800", color: accentColor || "#00afce", minWidth: "24px" }}>
          {adSecondsLeft}с
        </span>

        <PromoAdCloseBtn
          $isDarkMode={isDarkMode}
          onClick={handleCloseAd}
          aria-label="Закрити рекламу"
          style={{ fontSize: "18px", padding: "4px" }}
        >
          ✕
        </PromoAdCloseBtn>
      </div>

      {/* Панель випадаючих списків (select) */}
      {showAdControls && (
        <div style={{
          position: "absolute",
          top: "68px",
          right: "16px",
          background: isDarkMode ? "rgba(18,18,18,0.97)" : "rgba(255,255,255,0.97)",
          border: "1px solid " + (isDarkMode ? "#444" : "#ccc"),
          borderRadius: "10px",
          padding: "10px 12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          zIndex: 2000,
          minWidth: "220px"
        }}>
          {/* 1. Випадаючий список паузи / вимкнення */}
          <label style={{ fontSize: "10px", fontWeight: "700", display: "flex", flexDirection: "column", gap: "3px" }}>
            <span>⏸️ Вимкнути / Призупинити:</span>
            <select
              value={
                adSnoozeUntil && adSnoozeUntil > Date.now()
                  ? String(Math.round((adSnoozeUntil - Date.now()) / (60 * 1000)))
                  : "active"
              }
              onChange={(e) => {
                const val = e.target.value;
                if (val === "active") {
                  setAdSnoozeUntil(null);
                } else if (val === "forever") {
                  try {
                    localStorage.setItem("ad_antiheader_enabled", "false");
                    window.dispatchEvent(new Event("storage"));
                  } catch {}
                  handleCloseAd();
                } else {
                  const mins = Number(val);
                  setAdSnoozeUntil(Date.now() + mins * 60 * 1000);
                  handleCloseAd();
                }
              }}
              style={{
                fontSize: "10px", padding: "3px 6px", borderRadius: "5px",
                border: "1px solid " + (isDarkMode ? "#555" : "#ccc"),
                background: isDarkMode ? "#222" : "#fff", color: isDarkMode ? "#fff" : "#111"
              }}
            >
              <option value="active">🟢 Активно (без паузи)</option>
              <option value="5">⏱️ На 5 хвилин</option>
              <option value="15">⏱️ На 15 хвилин</option>
              <option value="60">⏱️ На 1 годину</option>
              <option value="1440">📅 На 1 добу (24 год)</option>
              <option value="4320">📅 На 3 доби (72 год)</option>
              <option value="10080">🗓️ На 7 діб (1 тиждень)</option>
              <option value="forever">🛑 Повністю вимкнути в налаштуваннях</option>
            </select>
          </label>

          {/* 2. Випадаючий список частоти показу */}
          <label style={{ fontSize: "10px", fontWeight: "700", display: "flex", flexDirection: "column", gap: "3px" }}>
            <span>⏱️ Частота появи реклами:</span>
            <select
              value={adIntervalSec}
              onChange={(e) => setAdIntervalSec(Number(e.target.value))}
              style={{
                fontSize: "10px", padding: "3px 6px", borderRadius: "5px",
                border: "1px solid " + (isDarkMode ? "#555" : "#ccc"),
                background: isDarkMode ? "#222" : "#fff", color: isDarkMode ? "#fff" : "#111"
              }}
            >
              <option value={15}>⚡ Кожні 15 секунд</option>
              <option value={30}>⏱️ Кожні 30 секунд (Стандарт)</option>
              <option value={60}>⏱️ Кожні 60 секунд (1 хв)</option>
              <option value={120}>⏱️ Кожні 2 хвилини</option>
              <option value={300}>⏱️ Кожні 5 хвилин</option>
              <option value={600}>⏱️ Кожні 10 хвилин</option>
            </select>
          </label>

          {/* 3. Випадаючий список тривалості показу */}
          <label style={{ fontSize: "10px", fontWeight: "700", display: "flex", flexDirection: "column", gap: "3px" }}>
            <span>⏳ Тривалість показу:</span>
            <select
              value={adDurationSec}
              onChange={(e) => {
                const dur = Number(e.target.value);
                setAdDurationSec(dur);
                setAdSecondsLeft(dur);
              }}
              style={{
                fontSize: "10px", padding: "3px 6px", borderRadius: "5px",
                border: "1px solid " + (isDarkMode ? "#555" : "#ccc"),
                background: isDarkMode ? "#222" : "#fff", color: isDarkMode ? "#fff" : "#111"
              }}
            >
              <option value={5}>5 секунд</option>
              <option value={10}>10 секунд (Стандарт)</option>
              <option value={15}>15 секунд</option>
              <option value={20}>20 секунд</option>
            </select>
          </label>
        </div>
      )}

      {/* Смуга прогресу таймера знизу Анти-хедера */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "3px", background: "rgba(0,0,0,0.1)" }}>
        <PromoAdTimerBarFill
          $accentColor={accentColor}
          $pct={(adSecondsLeft / adDurationSec) * 100}
        />
      </div>
    </AntiHeaderDiv>
  );
};

export default AntiHeaderAd;
