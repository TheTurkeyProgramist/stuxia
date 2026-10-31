// Стилі ліній графіків погоди (окремо для кожної лінії), як "Формат лінії" в Excel

export const CURVES = {
  smooth: { label: "Плавна" },
  monotone: { label: "Без викидів", hint: "Плавна, але не виходить за межі реальних значень" },
  straight: { label: "Ламана" },
  stepped: { label: "Сходинки" },
};

export const DASHES = {
  solid: { label: "Суцільна", pattern: [] },
  dashed: { label: "Штрихова", pattern: [8, 5] },
  dotted: { label: "Крапкова", pattern: [1, 6] },
  dashDot: { label: "Штрих-пунктир", pattern: [10, 4, 2, 4] },
  longDash: { label: "Довгий штрих", pattern: [16, 6] },
};

export const WIDTH_MIN = 1;
export const WIDTH_MAX = 8;
// Прозорість лінії, вимкненої в легенді (0 — повністю сховати)
export const DIM_MAX = 0.9;
export const DEFAULT_DIM = 0.3;

const line = (overrides = {}) => ({
  curve: "smooth",
  dash: "solid",
  width: 3,
  fill: false,
  points: true,
  dimOpacity: DEFAULT_DIM,
  ...overrides,
});

const trendLine = () => ({ dash: "dashed", width: 2 });

// fill: null — "автоматично" (напр. заливка лише для опадів)
export const DEFAULT_LINE_STYLES = {
  hourly: {
    temp: line({ fill: true }),
    right: line({ fill: null }),
  },
  daily: {
    day: line(),
    night: line(),
    right: line(),
    trendDay: trendLine(),
    trendNight: trendLine(),
  },
};

// Об'єднує збережені налаштування з типовими (нові поля/лінії отримують типові значення)
export const mergeLineStyles = (saved) => {
  const result = {};
  Object.entries(DEFAULT_LINE_STYLES).forEach(([chartKey, lines]) => {
    result[chartKey] = {};
    Object.entries(lines).forEach(([lineKey, defaults]) => {
      const stored = saved?.[chartKey]?.[lineKey];
      const merged = { ...defaults, ...(stored && typeof stored === "object" ? stored : {}) };
      if (merged.curve !== undefined && !CURVES[merged.curve]) merged.curve = defaults.curve;
      if (!DASHES[merged.dash]) merged.dash = defaults.dash;
      const width = Number(merged.width);
      merged.width = Number.isFinite(width)
        ? Math.min(WIDTH_MAX, Math.max(WIDTH_MIN, width))
        : defaults.width;
      if (defaults.dimOpacity !== undefined) {
        const dim = Number(merged.dimOpacity);
        merged.dimOpacity = Number.isFinite(dim) ? Math.min(DIM_MAX, Math.max(0, dim)) : defaults.dimOpacity;
      }
      result[chartKey][lineKey] = merged;
    });
  });
  return result;
};

// Перетворює стиль лінії на властивості dataset у chart.js
// base: { tension, pointRadius, fill } — значення конкретної лінії за замовчуванням
export const lineStyleProps = (style, base = {}) => {
  const { tension = 0.4, pointRadius, fill } = base;
  const s = style || {};
  const props = {
    borderWidth: s.width ?? 3,
    borderDash: DASHES[s.dash]?.pattern ?? [],
    borderCapStyle: s.dash === "dotted" ? "round" : "butt",
  };

  if (s.curve === "straight") props.tension = 0;
  else if (s.curve === "stepped") Object.assign(props, { tension: 0, stepped: "middle" });
  else if (s.curve === "monotone") Object.assign(props, { tension, cubicInterpolationMode: "monotone" });
  else if (s.curve !== undefined) props.tension = tension;

  if (s.fill !== undefined) props.fill = s.fill ?? fill ?? false;

  if (pointRadius !== undefined && s.points !== undefined) {
    props.pointRadius = s.points ? pointRadius : 0;
    // Без цього іконки з'являються при наведенні навіть коли точки вимкнені
    if (!s.points) props.pointHoverRadius = 0;
  }

  return props;
};
