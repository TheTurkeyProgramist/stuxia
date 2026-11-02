import React, { memo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const isPlain = (v) => {
  if (v === null || typeof v !== "object") return false;
  const proto = Object.getPrototypeOf(v);
  return proto === Object.prototype || proto === Array.prototype || proto === null;
};

// Глибоке порівняння пропсів графіка. Картка погоди рендериться щосекунди (годинник
// із секундами), і data/options щоразу — нові об'єкти з тими самими значеннями.
// react-chartjs-2 на кожен новий об'єкт викликає chart.update() з анімацією, тож
// графіки перемальовувались майже безперервно й гальмували прокрутку всього сайту.
// Функції порівнюємо за текстом, canvas та інші не-прості об'єкти — за посиланням.
const sameValue = (a, b) => {
  if (a === b) return true;
  if (typeof a === "function" && typeof b === "function") return a.toString() === b.toString();
  if (!isPlain(a) || !isPlain(b)) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const keysA = Object.keys(a);
  if (keysA.length !== Object.keys(b).length) return false;
  return keysA.every((key) => Object.prototype.hasOwnProperty.call(b, key) && sameValue(a[key], b[key]));
};

const propsEqual = (prev, next) => {
  const keys = Object.keys(next);
  if (keys.length !== Object.keys(prev).length) return false;
  // ref порівнюємо за посиланням: у ньому живий екземпляр Chart
  return keys.every((key) => (key === "ref" ? prev.ref === next.ref : sameValue(prev[key], next[key])));
};

function WeatherLineChart(props) {
  return <Line {...props} />;
}

export default memo(WeatherLineChart, propsEqual);
