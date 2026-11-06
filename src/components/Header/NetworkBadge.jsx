import React, { useState, useEffect } from "react";
import styled from "styled-components";

// "good" — чудовий сигнал, "weak" — слабке з'єднання, "offline" — немає мережі
const detectStatus = () => {
  if (typeof navigator === "undefined") return "good";
  if (!navigator.onLine) return "offline";
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn) {
    if (["slow-2g", "2g", "3g"].includes(conn.effectiveType)) return "weak";
    if (typeof conn.rtt === "number" && conn.rtt > 600) return "weak";
    if (typeof conn.downlink === "number" && conn.downlink > 0 && conn.downlink < 1) return "weak";
  }
  return "good";
};

export const useNetworkStatus = () => {
  const [status, setStatus] = useState(detectStatus);

  useEffect(() => {
    const update = () => setStatus(detectStatus());
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    conn?.addEventListener?.("change", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      conn?.removeEventListener?.("change", update);
    };
  }, []);

  return status;
};

export const NETWORK_LABELS = {
  good: "Чудовий сигнал",
  weak: "Слабке з'єднання",
  offline: "Немає з'єднання",
};

const COLORS = {
  good: "#30D158",
  weak: "#FF9500",
  offline: "#FF3B30",
};

const BARS = [
  { x: 1, h: 4 },
  { x: 5, h: 7 },
  { x: 9, h: 10 },
  { x: 13, h: 13 },
];

const Badge = styled.span`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 17px;
  height: 17px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background: ${(p) => (p.$isDarkMode ? "#1a1b21" : "#ffffff")};
  box-shadow:
    0 0 0 1.5px ${(p) => `${p.$color}66`},
    0 2px 6px rgba(0, 0, 0, 0.35);
  transition: box-shadow 0.2s;

  svg {
    width: 11px;
    height: 11px;
    display: block;
  }
`;

const NetworkBadge = ({ status, isDarkMode }) => {
  const color = COLORS[status];
  const bg = isDarkMode ? "#1a1b21" : "#ffffff";

  return (
    <Badge $color={color} $isDarkMode={isDarkMode} aria-hidden="true">
      <svg viewBox="0 0 16 16">
        {status === "good" &&
          BARS.map((b) => (
            <rect key={b.x} x={b.x} y={14.5 - b.h} width="2.6" height={b.h} rx="0.8" fill={color} />
          ))}

        {status === "weak" && (
          <>
            {BARS.slice(0, 2).map((b) => (
              <rect key={b.x} x={b.x} y={14.5 - b.h} width="2.6" height={b.h} rx="0.8" fill={color} />
            ))}
            {/* знак оклику */}
            <rect x="11" y="1.5" width="3" height="8.6" rx="1.5" fill={color} />
            <circle cx="12.5" cy="13.3" r="1.6" fill={color} />
          </>
        )}

        {status === "offline" && (
          <>
            {BARS.map((b) => (
              <rect key={b.x} x={b.x} y={14.5 - b.h} width="2.6" height={b.h} rx="0.8" fill={color} opacity="0.4" />
            ))}
            {/* перекреслення з "вирізом" під колір фону */}
            <line x1="1.5" y1="1.5" x2="14.5" y2="14.5" stroke={bg} strokeWidth="4" strokeLinecap="round" />
            <line x1="1.5" y1="1.5" x2="14.5" y2="14.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        )}
      </svg>
    </Badge>
  );
};

export default NetworkBadge;
