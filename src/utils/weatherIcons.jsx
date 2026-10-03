import React from "react";
import { FaSmog, FaSun, FaCloudMoon, FaCloudMoonRain } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { LiaCloudSunRainSolid, LiaCloudMoonRainSolid, LiaCloudSunSolid } from "react-icons/lia";
import { GiSnowing } from "react-icons/gi";
import { IoThunderstorm, IoRainy } from "react-icons/io5";

export const getWeatherIconSymbol = (code, isDay = 1) => {
  if (code === 0) return isDay ? <FaSun /> : <BsMoonStarsFill />;
  if (code >= 1 && code <= 3) return isDay ? <LiaCloudSunSolid /> : <FaCloudMoon />;
  if (code >= 45 && code <= 48) return <FaSmog/>;
  if (code >= 51 && code <= 55) return <IoRainy />;
  if (code >= 56 && code <= 57) return <IoRainy />;
  if (code >= 61 && code <= 65) return isDay ? <LiaCloudSunRainSolid /> : <FaCloudMoonRain />;
  if (code >= 66 && code <= 67) return isDay ? <LiaCloudSunRainSolid /> : <FaCloudMoonRain />;
  if (code >= 71 && code <= 75) return <GiSnowing />;
  if (code === 77) return <GiSnowing />;
  if (code >= 80 && code <= 82) return isDay ? <LiaCloudSunRainSolid /> : <LiaCloudMoonRainSolid />;
  if (code >= 85 && code <= 86) return <GiSnowing />;
  if (code >= 95 && code <= 99) return <IoThunderstorm />;
  return <FaSmog/>;
};
