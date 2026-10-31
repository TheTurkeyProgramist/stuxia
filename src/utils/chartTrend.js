// Лінійна лінія тренду (метод найменших квадратів), як "Лінія тренду" в Excel.
// x — індекс точки, тому slope — зміна значення за один крок (день/годину).
export const linearTrend = (values) => {
  const points = (values || [])
    .map((y, x) => ({ x, y }))
    .filter((p) => Number.isFinite(p.y));

  if (points.length < 2) return null;

  const n = points.length;
  const sumX = points.reduce((s, p) => s + p.x, 0);
  const sumY = points.reduce((s, p) => s + p.y, 0);
  const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);
  const sumXX = points.reduce((s, p) => s + p.x * p.x, 0);
  const denom = n * sumXX - sumX * sumX;
  if (denom === 0) return null;

  const slope = (n * sumXY - sumX * sumY) / denom;
  const intercept = (sumY - slope * sumX) / n;

  return {
    slope,
    intercept,
    data: values.map((_, x) => +(intercept + slope * x).toFixed(2)),
  };
};
