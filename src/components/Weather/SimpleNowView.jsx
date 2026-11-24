import React from "react";
import styled from "styled-components";
import { TbUmbrella, TbUmbrellaOff } from "react-icons/tb";
import i18n from "../../i18n/i18n.js";
import { getPrecipitationLine, getOutfitAdvice } from "../Hero/QuickWeather.jsx";
import { WeatherIcon, stripEmoji } from "./WeatherConditionIcon.jsx";
import { setPref } from "../../utils/prefsStore";
import { WEATHER_VIEW_KEY } from "../../utils/betaFeatures";

// Простий вигляд вкладки «Зараз»: велика температура + дві компактні плитки (опади, що вдягти).
// Дані — ті самі, що й у короткій погоді під пошуком (без окремих запитів).
// Телефон — у стовпчик; планшет/ПК — температура зліва на всю висоту, решта праворуч.

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;

  /* Як у докладного вигляду: на планшеті/ПК знизу смуга з номерами карток */
  @media (min-width: 768px) {
    height: 84%;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 10px;
  }
`;

const tileSurface = `
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #fff;
  overflow: hidden;
`;

// Відтінок плитки температури: холодно — синій, помірно — бурштиновий, спекотно — червоний
const tempTint = (t) => {
  if (!Number.isFinite(t)) return "rgba(255,255,255,0.10)";
  if (t <= 0) return "rgba(77, 166, 255, 0.28)";
  if (t <= 12) return "rgba(96, 205, 255, 0.20)";
  if (t <= 25) return "rgba(255, 179, 108, 0.24)";
  return "rgba(255, 77, 77, 0.28)";
};

const TempTile = styled.div`
  ${tileSurface}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 12px;
  text-align: center;
  background: linear-gradient(160deg, ${(p) => p.$tint} 0%, rgba(0, 0, 0, 0.35) 100%);

  @media (min-width: 768px) {
    grid-row: span 2;
    gap: 8px;
  }
`;

const TempIcon = styled.div`
  font-size: 44px;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const TempValue = styled.div`
  font-size: 52px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -1px;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 72px;
  }
`;

const Spread = styled.span`
  margin-left: 6px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  color: #b4bfcc;
  vertical-align: super;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const TempCaption = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
  span {
    display: block;
    font-size: 13px;
    font-weight: 500;
    opacity: 0.8;
  }
`;

const ShowAll = styled.button`
  margin-top: 4px;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border-color: #00eeff;
    background: rgba(0, 238, 255, 0.18);
  }
`;

const InfoTile = styled.div`
  ${tileSurface}
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.38);
`;

const InfoIcon = styled.div`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  font-size: 28px;
  color: ${(p) => p.$color};
  background: ${(p) => p.$bg};

  @media (min-width: 1024px) {
    width: 64px;
    height: 64px;
    font-size: 34px;
  }
`;

const InfoBody = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const InfoLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  opacity: 0.65;
`;

const InfoValue = styled.div`
  font-size: 26px;
  font-weight: 800;
  line-height: 1.1;
`;

const InfoText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  opacity: 0.92;
`;

// Найбільша ймовірність опадів на найближчі 12 годин (у часовому поясі міста)
const maxChance12h = (card) => {
  const offset = card?.utcOffsetSeconds;
  const nowKey = Number.isFinite(offset)
    ? new Date(Date.now() + offset * 1000).toISOString().slice(0, 13)
    : null;
  const hours = (card?.hourly || [])
    .filter((h) => typeof h?.fullTime === "string" && (!nowKey || h.fullTime.slice(0, 13) >= nowKey))
    .slice(0, 12);
  const values = hours.map((h) => Number(h.precipitation_probability)).filter(Number.isFinite);
  return values.length ? Math.max(...values) : null;
};

export default function SimpleNowView({ card, isDarkMode, formatTemp, tempSpreadLabel }) {
  const current = card?.current;
  if (!current) return null;
  const precipitation = getPrecipitationLine(card);
  const outfit = getOutfitAdvice(card, precipitation);
  const chance = maxChance12h(card);
  const OutfitIcon = outfit?.Icon;
  const wet = Boolean(precipitation?.wet);

  return (
    <Grid>
      <TempTile $tint={tempTint(Number(current.tempNum))}>
        <TempIcon>
          <WeatherIcon isDarkMode={isDarkMode} item={current} />
        </TempIcon>
        <TempValue>
          {formatTemp(current.temp)}
          {tempSpreadLabel && <Spread title={i18n.t("newsWeather.Weather.pokhybka")}>{tempSpreadLabel}</Spread>}
        </TempValue>
        <TempCaption>
          {stripEmoji(current.iconPlaceholder)}
          <span>
            {i18n.t("newsWeather.Weather.vidchuvaietsia")} {formatTemp(current.feels_like)}
          </span>
        </TempCaption>
        <ShowAll type="button" onClick={() => setPref(WEATHER_VIEW_KEY, "detailed")}>
          {i18n.t("newsWeather.Weather.usiPokaznyky")}
        </ShowAll>
      </TempTile>

      <InfoTile>
        <InfoIcon $color={wet ? "#60a5fa" : "#94a3b8"} $bg={wet ? "rgba(96,165,250,0.18)" : "rgba(148,163,184,0.15)"}>
          {wet ? <TbUmbrella /> : <TbUmbrellaOff />}
        </InfoIcon>
        <InfoBody>
          <InfoLabel>{i18n.t("newsWeather.Weather.opady12h")}</InfoLabel>
          <InfoValue>{chance === null ? "—" : `${chance}%`}</InfoValue>
          {precipitation?.text && <InfoText>{precipitation.text}</InfoText>}
        </InfoBody>
      </InfoTile>

      <InfoTile>
        <InfoIcon $color="#ffb36c" $bg="rgba(255,179,108,0.16)">
          {OutfitIcon ? <OutfitIcon /> : null}
        </InfoIcon>
        <InfoBody>
          <InfoLabel>{i18n.t("newsWeather.Weather.shchoVdiahty")}</InfoLabel>
          <InfoText style={{ fontSize: "16px", fontWeight: 600 }}>{outfit?.text || "—"}</InfoText>
        </InfoBody>
      </InfoTile>
    </Grid>
  );
}
