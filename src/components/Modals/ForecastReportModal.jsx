import React, { useState } from "react";
import { createPortal } from "react-dom";
import { BiLineChart, BiBrain, BiCheck, BiX, BiCurrentLocation, BiWind } from "react-icons/bi";
import { FaClock, FaCloudRain, FaCalendarDays, FaCloud, FaGauge, FaLightbulb } from "react-icons/fa6";
import { FaSun, FaExclamationTriangle } from "react-icons/fa";
import { PiThermometerFill } from "react-icons/pi";
import { BsThermometerSun, BsClockHistory } from "react-icons/bs";
import { cleanAiText } from "../../utils/ruleBasedForecast";
import { REPORT_ICONS, REPORT_COLORS, ReportSection, ReportLine } from "../Weather/ForecastReport.jsx";

// Повний звіт прогнозу: смарт-прогноз (правила) або текст Gemini
const ForecastReportModal = ({ forecastMode, ruleForecast, aiSummary, forecastTimeString, isDarkMode, onClose }) => {
  const [copied, setCopied] = useState(false);
  const isRules = forecastMode === "rules";
  const accent = isRules ? "#00eeff" : "#b362ff";

  const copyText = () => {
    if (!ruleForecast?.fullText) return;
    navigator.clipboard?.writeText(ruleForecast.fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        zIndex: 3000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label="Повний звіт прогнозу"
        style={{
          background: isDarkMode ? "#1a1a2e" : "#fff",
          border: `1px solid ${isRules ? "rgba(0,238,255,0.6)" : "rgba(138,43,226,0.5)"}`,
          borderRadius: "12px",
          padding: "20px",
          width: "95%",
          maxWidth: "95vw",
          maxHeight: "92vh",
          overflowY: "auto",
          color: isDarkMode ? "#efefff" : "#222",
          fontSize: "14px",
          lineHeight: 1.6,
          whiteSpace: "pre-line",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 800,
              color: accent,
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            {isRules ? <BiLineChart size={22} /> : <BiBrain size={22} />}
            {isRules ? "Смарт-прогноз (Офлайн / Правила) — повний звіт" : "Прогноз ШІ (Gemini) — повний текст"}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {isRules && (
              <button
                onClick={copyText}
                title="Скопіювати текст прогнозу"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: copied ? "rgba(0,255,150,0.2)" : "rgba(0,238,255,0.12)",
                  border: `1px solid ${copied ? "#00ff96" : "rgba(0,238,255,0.5)"}`,
                  color: copied ? "#00ff96" : "#00eeff",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <BiCheck size={16} />
                {copied ? "Скопійовано!" : "Скопіювати"}
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Закрити"
              style={{
                background: "none",
                border: "none",
                color: accent,
                cursor: "pointer",
                display: "inline-flex",
                padding: "2px",
              }}
            >
              <BiX size={30} />
            </button>
          </div>
        </div>
        {isRules ? (
          ruleForecast ? (
            <div style={{ whiteSpace: "normal", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", opacity: 0.85 }}>
                <ReportLine icon={<BiCurrentLocation />} color="#00eeff">Прогноз для {ruleForecast.locationName}</ReportLine>
                <ReportLine icon={<FaClock />} color="#aaa">Час: {forecastTimeString || "зараз"}</ReportLine>
              </div>

              <ReportSection title="Добовий баланс" icon={<FaSun />} color="#ffb36c">
                <ReportLine icon={<PiThermometerFill />} color="#ffb36c">{ruleForecast.dayNight?.message}</ReportLine>
              </ReportSection>

              <ReportSection title="Погодинні зміни" icon={<BsClockHistory />} color="#00b7ff">
                <ReportLine icon={<FaCloudRain />} color="#14b8a6">{ruleForecast.hourlyData?.rainWindowText}</ReportLine>
                <ReportLine icon={<BsThermometerSun />} color="#ff9d3b">{ruleForecast.hourlyData?.peakTempText}</ReportLine>
                <ReportLine icon={<BiWind />} color="#00b7ff">{ruleForecast.hourlyData?.windTrendText}</ReportLine>
              </ReportSection>

              <ReportSection title="Тижневий тренд" icon={<FaCalendarDays />} color="#b362ff">
                <ReportLine icon={<BiLineChart />} color="#b362ff">{ruleForecast.weeklyData?.trendText}</ReportLine>
                <ReportLine icon={<FaCloud />} color="#aaa">{ruleForecast.weeklyData?.weekSummaryText}</ReportLine>
              </ReportSection>

              {ruleForecast.atmosphereNotes?.length > 0 && (
                <ReportSection title="Атмосферні фактори" icon={<FaGauge />} color="#4da6ff">
                  {ruleForecast.atmosphereNotes.map((n, i) => (
                    <ReportLine key={i} icon={REPORT_ICONS[n.type] || <FaExclamationTriangle />} color={REPORT_COLORS[n.type] || "#4da6ff"}>
                      <b>{n.title}:</b> {n.text}
                    </ReportLine>
                  ))}
                </ReportSection>
              )}

              {ruleForecast.lifestyleAdvice?.length > 0 && (
                <ReportSection title="Рекомендації та гардероб" icon={<FaLightbulb />} color="#4ade80">
                  {ruleForecast.lifestyleAdvice.map((a, i) => (
                    <ReportLine key={i} icon={REPORT_ICONS[a.type] || <FaLightbulb />} color={REPORT_COLORS[a.type] || "#4ade80"}>
                      <b>{a.title}</b> {a.text}
                    </ReportLine>
                  ))}
                </ReportSection>
              )}
            </div>
          ) : "Дані формуються..."
        ) : cleanAiText(aiSummary)}
      </div>
    </div>,
    document.body
  );
};

export default ForecastReportModal;
