import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getHourlyForecastDayGroups } from "../../utils/hourlyForecast";
import { getWindDirectionText } from "../../utils/windUtils";
import * as SunCalc from "suncalc";
import { FaCloudMoonRain, FaCloudMoon, FaSun, FaDownload, FaPrint, FaTimes } from "react-icons/fa";
import { LiaCloudSunRainSolid, LiaCloudMoonRainSolid } from "react-icons/lia";
import { BsMoonStarsFill } from "react-icons/bs";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 16px;
`;

const ModalContent = styled(motion.div)`
  background: ${(props) =>
    props.$isDarkMode
      ? "linear-gradient(145deg, rgba(20, 20, 32, 0.95), rgba(12, 12, 20, 0.98))"
      : "linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(240, 244, 248, 0.98))"};
  background-image: ${(props) =>
    props.$cityImage
      ? `linear-gradient(180deg, rgba(10, 15, 30, 0.78) 0%, rgba(10, 15, 30, 0.92) 100%), url(${props.$cityImage})`
      : "none"};
  background-size: cover;
  background-position: center;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#1a1a1a")};
  border-radius: 20px;
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(0, 238, 255, 0.3)" : "rgba(0, 140, 255, 0.25)")};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 238, 255, 0.15);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00eeff;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 14px;
    max-height: 95vh;
  }
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(135deg, #00eeff 0%, #ffb36c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ActionBtn = styled(motion.button)`
  background: rgba(0, 0, 0, 0.45);
  color: #00eeff;
  border: 1px solid rgba(0, 238, 255, 0.4);
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(6px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 238, 255, 0.2);
    box-shadow: 0 0 12px rgba(0, 238, 255, 0.4);
    color: #fff;
  }
`;

const CloseButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  color: white;
  border: none;
  padding: 7px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(255, 65, 108, 0.35);

  &:hover {
    box-shadow: 0 6px 20px rgba(255, 65, 108, 0.5);
  }
`;

const Section = styled(motion.div)`
  background: ${(props) =>
    props.$isDarkMode ? "rgba(15, 20, 32, 0.75)" : "rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(10px);
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)")};
  border-radius: 16px;
  padding: 16px;
  margin-top: 14px;

  h3 {
    margin-top: 0;
    color: #00eeff;
    font-size: 16px;
  }
`;

const AstroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
`;

const AstroCard = styled(motion.div)`
  background: ${(props) =>
    props.$isDarkMode
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)"
      : "linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)"};
  border: 1px solid ${(props) => (props.$borderColor || "rgba(0, 238, 255, 0.25)")};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  .icon {
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: ${(props) => props.$iconBg || "rgba(0, 238, 255, 0.15)"};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .label {
    font-size: 11px;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .val {
    font-size: 14px;
    font-weight: 800;
    color: ${(props) => (props.$valColor || "#fff")};
  }
`;

const DangerHighlight = styled.span`
  color: ${(props) => props.$color || "#ff6b6b"};
  font-weight: bold;
  background: ${(props) => props.$color || "#ff6b6b"}22;
  padding: 2px 7px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.$color || "#ff6b6b"}44;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;

  button {
    background: ${(props) =>
      props.$isDarkMode ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"};
    color: ${(props) => (props.$isDarkMode ? "#aaa" : "#555")};
    border: 1px solid transparent;
    padding: 8px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    transition: all 0.25s ease;

    &.active {
      background: linear-gradient(135deg, #00eeff 0%, #008cff 100%);
      color: #000;
      box-shadow: 0 4px 15px rgba(0, 238, 255, 0.4);
    }

    &:hover:not(.active) {
      background: rgba(0, 238, 255, 0.15);
      color: #00eeff;
    }
  }
`;

const HourlyTable = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)")};

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;

    th,
    td {
      padding: 10px 8px;
      text-align: center;
      border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)")};
    }

    th {
      background: ${(props) => (props.$isDarkMode ? "rgba(0, 238, 255, 0.15)" : "rgba(0, 140, 255, 0.15)")};
      color: ${(props) => (props.$isDarkMode ? "#00eeff" : "#0055ff")};
      font-weight: 800;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.5px;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    tbody tr {
      transition: background 0.2s ease;
      &:hover {
        background: ${(props) => (props.$isDarkMode ? "rgba(0, 238, 255, 0.08)" : "rgba(0, 140, 255, 0.08)")};
      }
    }

    tbody tr:nth-child(odd) {
      background: ${(props) =>
        props.$isDarkMode
          ? "rgba(255, 255, 255, 0.02)"
          : "rgba(0, 0, 0, 0.02)"};
    }
  }
`;

const WeatherDetailsModal = ({ isOpen, onClose, card, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("hourly");
  const [selectedHourlyDay, setSelectedHourlyDay] = useState(0);

  if (!isOpen || !card) return null;

  const current = card.current || {};
  const hourly = card.hourly || [];
  const daily = card.daily16 || [];
  const hourlyDayGroups = getHourlyForecastDayGroups(hourly);
  const visibleHourly = hourlyDayGroups[selectedHourlyDay]?.items || [];
  
  const currentDaily = daily.find(d => d.date === hourlyDayGroups[selectedHourlyDay]?.label) || daily[0];

  const formatTime = (isoString) => {
    if (!isoString) return "—";
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return "—";
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const getMoonData = (dateStr) => {
    try {
      const date = new Date(dateStr || Date.now());
      const illum = SunCalc.getMoonIllumination(date);
      const moonTimes = SunCalc.getMoonTimes(date, card.lat || 50.45, card.lon || 30.52);
      const phase = illum.phase;
      let phaseText = "";
      if (phase === 0) phaseText = "🌑 Молодик";
      else if (phase < 0.25) phaseText = "🌒 Зростаючий серп";
      else if (phase === 0.25) phaseText = "🌓 Перша чверть";
      else if (phase < 0.5) phaseText = "🌔 Зростаючий місяць";
      else if (phase === 0.5) phaseText = "🌕 Повня";
      else if (phase < 0.75) phaseText = "🌖 Спадаючий місяць";
      else if (phase === 0.75) phaseText = "🌗 Остання чверть";
      else phaseText = "🌘 Спадаючий серп";
      
      const formatMoonTime = (d) => {
        if (!d || isNaN(new Date(d).getTime())) return "Не сходить";
        const dt = new Date(d);
        return `${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}`;
      };

      const rise = moonTimes.rise ? formatMoonTime(moonTimes.rise) : "Не сходить";
      const set = moonTimes.set ? formatMoonTime(moonTimes.set) : "Не заходить";
      
      return { phaseText, rise, set };
    } catch (e) {
      return { phaseText: "—", rise: "—", set: "—" };
    }
  };

  const getTwilightData = (dateStr) => {
    try {
      const date = new Date(dateStr || Date.now());
      const times = SunCalc.getTimes(date, card.lat || 50.45, card.lon || 30.52);
      
      const formatTimeOnly = (d) => {
        if (!d || isNaN(new Date(d).getTime())) return "—";
        const dt = new Date(d);
        return `${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}`;
      };

      return {
        civilDawn: formatTimeOnly(times.dawn),
        civilDusk: formatTimeOnly(times.dusk),
        nauticalDawn: formatTimeOnly(times.nauticalDawn),
        nauticalDusk: formatTimeOnly(times.nauticalDusk),
        astroDawn: formatTimeOnly(times.nightEnd),
        astroDusk: formatTimeOnly(times.night),
      };
    } catch (e) {
      return { civilDawn: "—", civilDusk: "—", nauticalDawn: "—", nauticalDusk: "—", astroDawn: "—", astroDusk: "—" };
    }
  };
  
  const getDayLength = (riseStr, setStr) => {
    if (!riseStr || !setStr) return "—";
    const r = new Date(riseStr);
    const s = new Date(setStr);
    if (isNaN(r.getTime()) || isNaN(s.getTime())) return "—";
    const diffMs = s - r;
    if (diffMs < 0) return "—";
    const hrs = Math.floor(diffMs / 3600000);
    const mins = Math.floor((diffMs % 3600000) / 60000);
    return `${hrs}г ${mins}хв`;
  };

  const moonData = getMoonData(currentDaily?.fullDate);
  const twilightData = getTwilightData(currentDaily?.fullDate);
  const dayLength = getDayLength(currentDaily?.sunrise, currentDaily?.sunset);

  return (
    <AnimatePresence>
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContent
          $isDarkMode={isDarkMode}
          $cityImage={card.cityImage}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <HeaderBar>
            <Title>
              🏙️ Детальний прогноз: {card.locationName}
            </Title>
            <ControlButtons>
              {card.cityImage && (
                <>
                  <ActionBtn
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      const link = document.createElement("a");
                      link.href = card.cityImage;
                      link.download = `${card.locationName}_фото.jpg`;
                      link.target = "_blank";
                      link.click();
                    }}
                  >
                    <FaDownload size={12} /> Завантажити фото
                  </ActionBtn>
                  <ActionBtn
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      const win = window.open("");
                      win.document.write(
                        `<img src="${card.cityImage}" style="width:100%"/>`
                      );
                      win.setTimeout(() => win.print(), 500);
                    }}
                  >
                    <FaPrint size={12} /> Друк
                  </ActionBtn>
                </>
              )}
              <CloseButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
              >
                <FaTimes size={13} /> Закрити
              </CloseButton>
            </ControlButtons>
          </HeaderBar>

          <TabButtons $isDarkMode={isDarkMode}>
            <button
              className={activeTab === "hourly" ? "active" : ""}
              onClick={() => setActiveTab("hourly")}
            >
              По годинам ({hourly.length}г)
            </button>
            <button
              className={activeTab === "daily" ? "active" : ""}
              onClick={() => setActiveTab("daily")}
            >
              По днях (16д)
            </button>
          </TabButtons>

          {activeTab === "hourly" && hourly.length > 0 && (
            <Section
              $isDarkMode={isDarkMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "14px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {hourlyDayGroups.length > 1 && (
                  <select
                    value={selectedHourlyDay}
                    onChange={(e) => setSelectedHourlyDay(Number(e.target.value))}
                    style={{
                      background: isDarkMode ? "#1f2430" : "#ffffff",
                      color: isDarkMode ? "#00eeff" : "#0066ff",
                      border: "1.5px solid #00eeff",
                      padding: "6px 14px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: "bold",
                      outline: "none",
                      boxShadow: "0 4px 12px rgba(0, 238, 255, 0.2)",
                    }}
                  >
                    {hourlyDayGroups.map((group, index) => (
                      <option key={group.label} value={index}>
                        📅 {group.title || group.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Астрономічний блок (Сонце, Сутінки & Місяць) */}
              <AstroGrid>
                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(255, 215, 0, 0.4)" $iconBg="rgba(255, 215, 0, 0.15)" $valColor="#ffd700" whileHover={{ scale: 1.02 }}>
                  <div className="icon"><FaSun style={{ color: "#ffd700" }} /></div>
                  <div className="content">
                    <span className="label">Схід / Захід сонця</span>
                    <span className="val">{formatTime(currentDaily?.sunrise)} — {formatTime(currentDaily?.sunset)}</span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(52, 152, 219, 0.4)" $iconBg="rgba(52, 152, 219, 0.15)" $valColor="#3498db" whileHover={{ scale: 1.02 }}>
                  <div className="icon"><LiaCloudSunRainSolid style={{ color: "#3498db" }} /></div>
                  <div className="content">
                    <span className="label">Тривалість дня</span>
                    <span className="val">{dayLength}</span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(255, 179, 108, 0.4)" $iconBg="rgba(255, 179, 108, 0.15)" $valColor="#ffb36c" whileHover={{ scale: 1.02 }}>
                  <div className="icon">🏙️</div>
                  <div className="content">
                    <span className="label">Цивільні сутінки</span>
                    <span className="val">{twilightData.civilDawn} — {twilightData.civilDusk}</span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(155, 89, 182, 0.4)" $iconBg="rgba(155, 89, 182, 0.15)" $valColor="#be90d4" whileHover={{ scale: 1.02 }}>
                  <div className="icon">⚓</div>
                  <div className="content">
                    <span className="label">Навігаційні сутінки</span>
                    <span className="val">{twilightData.nauticalDawn} — {twilightData.nauticalDusk}</span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(75, 0, 130, 0.4)" $iconBg="rgba(75, 0, 130, 0.15)" $valColor="#a855f7" whileHover={{ scale: 1.02 }}>
                  <div className="icon">🔭</div>
                  <div className="content">
                    <span className="label">Астрономічні сутінки</span>
                    <span className="val">{twilightData.astroDawn} — {twilightData.astroDusk}</span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(236, 240, 241, 0.4)" $iconBg="rgba(236, 240, 241, 0.15)" $valColor="#e0e0e0" whileHover={{ scale: 1.02 }}>
                  <div className="icon"><FaCloudMoon style={{ color: "#ecf0f1" }} /></div>
                  <div className="content">
                    <span className="label">Схід / Захід місяця</span>
                    <span className="val">{moonData.rise} — {moonData.set}</span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(155, 89, 182, 0.4)" $iconBg="rgba(155, 89, 182, 0.15)" $valColor="#be90d4" whileHover={{ scale: 1.02 }}>
                  <div className="icon"><FaCloudMoonRain style={{ color: "#9b59b6" }} /></div>
                  <div className="content">
                    <span className="label">Фаза місяця</span>
                    <span className="val">{moonData.phaseText}</span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(0, 238, 255, 0.4)" $iconBg="rgba(0, 238, 255, 0.15)" $valColor="#00eeff" whileHover={{ scale: 1.02 }}>
                  <div className="icon">❄️</div>
                  <div className="content">
                    <span className="label">Сніг / Замерзання ґрунту</span>
                    <span className="val">
                      {current.snow_depth ? `${(current.snow_depth * 100).toFixed(1)} см` : "0 см"} | Ґрунт: {current.soil_temperature_0cm ?? 0}°C
                    </span>
                  </div>
                </AstroCard>

                <AstroCard $isDarkMode={isDarkMode} $borderColor="rgba(255, 153, 0, 0.4)" $iconBg="rgba(255, 153, 0, 0.15)" $valColor="#ff9900" whileHover={{ scale: 1.02 }}>
                  <div className="icon">💧</div>
                  <div className="content">
                    <span className="label">Випаровування (ET0)</span>
                    <span className="val">{current.evapotranspiration ? `${current.evapotranspiration.toFixed(2)} мм` : "0 мм"}</span>
                  </div>
                </AstroCard>
              </AstroGrid>

              <HourlyTable $isDarkMode={isDarkMode}>
                <table>
                  <thead>
                    <tr>
                      <th>Час</th>
                      <th>Температура<br/>(Відчувається)</th>
                      <th>Вітер (м/с)<br/>Напрям</th>
                      <th>Вологість<br/>Точка роси</th>
                      <th>Опади / Сніг</th>
                      <th>Замерзання 0°C / Ґрунт</th>
                      <th>Випаровування</th>
                      <th>Тиск / Хмарність</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleHourly.map((h, idx) => (
                      <tr key={idx}>
                        <td><strong>{h.time}</strong></td>
                        <td>
                          {h.tempNum !== undefined &&
                          (h.tempNum > 30 || h.tempNum < -30) ? (
                            <DangerHighlight
                              $color={
                                h.tempNum > 30
                                  ? "#ff6b6b"
                                  : h.tempNum < -30
                                    ? "#4169e1"
                                    : "#ffb36c"
                              }
                            >
                              {h.tempNum}°C
                            </DangerHighlight>
                          ) : (
                            `${h.tempNum !== undefined ? h.tempNum : "—"}°C`
                          )}
                          <br/>
                          <span style={{ fontSize: "10px", opacity: 0.7 }}>
                            ({h.feels_like !== undefined ? h.feels_like : "—"})
                          </span>
                        </td>
                        <td>
                          {h.windNum !== undefined && h.windNum > 10 ? (
                            <DangerHighlight $color="#ff9800">
                              {h.windNum.toFixed(1)} м/с
                            </DangerHighlight>
                          ) : (
                            `${h.windNum !== undefined ? h.windNum.toFixed(1) : "—"}`
                          )}
                          {h.wind_gusts_10m ? ` (${h.wind_gusts_10m.toFixed(1)})` : ""}
                          <br/>
                          <span style={{ fontSize: "10px" }}>{getWindDirectionText(h.wind_direction_10m)}</span>
                        </td>
                        <td>
                          {h.relative_humidity_2m ?? "—"}%
                          <br/>
                          <span style={{ fontSize: "10px", opacity: 0.7 }}>
                            TR: {h.dew_point_2m !== undefined ? `${h.dew_point_2m}°C` : "—"}
                          </span>
                        </td>
                        <td>
                          {h.precipitation !== undefined ? h.precipitation.toFixed(1) : "—"} мм
                          <br/>
                          <span style={{ fontSize: "10px", opacity: 0.7 }}>
                            {h.snow_depth ? `Сніг: ${(h.snow_depth * 100).toFixed(1)}см` : "Без снігу"}
                          </span>
                        </td>
                        <td>
                          {h.freezing_level_height ? `${h.freezing_level_height}м` : "—"}
                          <br/>
                          <span style={{ fontSize: "10px", opacity: 0.7 }}>
                            Ґрунт: {h.soil_temperature_0cm !== undefined ? `${h.soil_temperature_0cm}°C` : "—"}
                          </span>
                        </td>
                        <td>
                          {h.evapotranspiration !== undefined ? `${h.evapotranspiration.toFixed(2)} мм` : "0 мм"}
                        </td>
                        <td>
                          {h.pressure_msl ? Math.round(h.pressure_msl) : "—"} hPa
                          <br/>
                          <span style={{ fontSize: "10px", opacity: 0.7 }}>
                            Хмари: {h.cloud_cover ?? "—"}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </HourlyTable>
            </Section>
          )}

          {activeTab === "daily" && daily.length > 0 && (
            <Section
              $isDarkMode={isDarkMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HourlyTable $isDarkMode={isDarkMode}>
                <table>
                  <thead>
                    <tr>
                      <th>Дата</th>
                      <th>День</th>
                      <th>Ніч</th>
                      <th>Вітер</th>
                      <th>УФ</th>
                      <th>Опади %</th>
                      <th>Дощ (мм)</th>
                      <th>Випаровування (ET0)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daily.map((d, idx) => (
                      <tr key={idx}>
                        <td><strong>{d.date}</strong></td>
                        <td>
                          {parseInt(d.temp_day) > 30 ||
                          parseInt(d.temp_day) < -30 ? (
                            <DangerHighlight
                              $color={
                                parseInt(d.temp_day) > 30 ? "#ff6b6b" : "#4169e1"
                              }
                            >
                              {d.temp_day}
                            </DangerHighlight>
                          ) : (
                            d.temp_day
                          )}
                        </td>
                        <td>{d.temp_night}</td>
                        <td>
                          {parseFloat(d.wind_speed) > 10 ? (
                            <DangerHighlight $color="#ff9800">
                              {d.wind_speed}
                            </DangerHighlight>
                          ) : (
                            d.wind_speed
                          )}
                        </td>
                        <td>
                          {d.uv_index > 7 ? (
                            <DangerHighlight $color="#ff6b6b">
                              {d.uv_index}
                            </DangerHighlight>
                          ) : (
                            d.uv_index
                          )}
                        </td>
                        <td>{d.precipitation_probability_max ?? "—"}%</td>
                        <td>
                          {d.rain_sum !== undefined ? d.rain_sum.toFixed(1) : "—"}
                        </td>
                        <td>
                          {d.evapotranspiration !== undefined ? `${d.evapotranspiration.toFixed(2)} мм` : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </HourlyTable>
            </Section>
          )}
        </ModalContent>
      </ModalOverlay>
    </AnimatePresence>
  );
};

export default WeatherDetailsModal;
