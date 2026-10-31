import React from "react";
import { FaDroplet, FaUmbrella, FaShirt, FaCar, FaPersonWalking } from "react-icons/fa6";
import { BiWind } from "react-icons/bi";
import { MdOutlineSpeed } from "react-icons/md";
import { GiSunRadiations } from "react-icons/gi";

// Елементи звіту смарт-прогнозу (секції, рядки з іконками) для модалки повного звіту

export const REPORT_ICONS = {
  pressure_low: <MdOutlineSpeed />,
  pressure_high: <MdOutlineSpeed />,
  humidity: <FaDroplet />,
  uvi: <GiSunRadiations />,
  wind_warning: <BiWind />,
  cloth: <FaShirt />,
  umbrella: <FaUmbrella />,
  car: <FaCar />,
  sport: <FaPersonWalking />,
};

export const REPORT_COLORS = {
  pressure_low: "#4da6ff",
  pressure_high: "#ff4d4d",
  humidity: "#4da6ff",
  uvi: "#ffd700",
  wind_warning: "#ff9900",
  cloth: "#ffb36c",
  umbrella: "#14b8a6",
  car: "#aaa",
  sport: "#4ade80",
};

export const ReportSection = ({ title, icon, color, children }) => (
  <div style={{ borderLeft: `3px solid ${color}`, paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 800, fontSize: "15px", color }}>
      <span style={{ display: "inline-flex", fontSize: "18px" }}>{icon}</span>
      {title}
    </div>
    {children}
  </div>
);

export const ReportLine = ({ icon, color, children }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
    <span style={{ display: "inline-flex", flexShrink: 0, marginTop: "3px", fontSize: "16px", color }}>{icon}</span>
    <span>{children}</span>
  </div>
);
