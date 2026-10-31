export const HOURLY_DAY_OPTIONS = [1, 2, 3, 5, 7];

export const getHourlyForecastItems = (hourly = [], { days = 1 } = {}) => {
  if (!Array.isArray(hourly)) return [];

  const safeDays = Number(days) > 0 ? Number(days) : 1;
  const maxItems = Math.min(safeDays * 24, hourly.length);

  return hourly.slice(0, maxItems);
};

const formatDayLabel = (dateLabel, index = 0) => {
  if (!dateLabel) return index === 0 ? "Сьогодні" : `День ${index + 1}`;

  const normalized = String(dateLabel).trim();
  const today = new Date();
  const baseDate = new Date(today);
  baseDate.setHours(0, 0, 0, 0);

  const [day, month] = normalized.split(".").map((part) => Number(part));
  if (day && month) {
    const candidate = new Date(today.getFullYear(), month - 1, day);
    const diffDays = Math.round((candidate - baseDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return `${normalized} (Сьогодні)`;
    if (diffDays === 1) return `${normalized} (Завтра)`;
    if (diffDays === 2) return `${normalized} (Післязавтра)`;

    const weekday = candidate.toLocaleDateString("uk", { weekday: "short" });
    return `${normalized} (${weekday})`;
  }

  return normalized;
};

const DETAILED_DAYS = 1;
const THREE_HOUR_DAYS = 3;
const PART_OF_DAY_HOURS = [0, 6, 12, 18];

const getItemHour = (item) => {
  const hour = parseInt(String(item?.time ?? "").split(":")[0], 10);
  return Number.isNaN(hour) ? null : hour;
};

const PART_OF_DAY_NAMES = { 0: "Ніч", 6: "Ранок", 12: "День", 18: "Вечір" };
const SUM_FIELDS = ["precipitation", "snowfall", "evapotranspiration"];
const MAX_FIELDS = ["windNum", "wind_gusts_10m", "wind_gusts"];

// Одна відмітка на 6 годин: температура/стан — на початок проміжку,
// опади — сума, вітер і пориви — максимум за проміжок.
const aggregatePartsOfDay = (items) =>
  PART_OF_DAY_HOURS.map((start) => {
    const windowItems = items.filter((item) => {
      const hour = getItemHour(item);
      return hour !== null && hour >= start && hour < start + 6;
    });
    if (windowItems.length === 0) return null;

    const result = { ...windowItems[0], time: `${PART_OF_DAY_NAMES[start]} ${String(start).padStart(2, "0")}:00` };

    SUM_FIELDS.forEach((field) => {
      const values = windowItems.map((i) => Number(i[field])).filter(Number.isFinite);
      if (values.length) result[field] = values.reduce((a, b) => a + b, 0);
    });
    MAX_FIELDS.forEach((field) => {
      const values = windowItems.map((i) => Number(i[field])).filter(Number.isFinite);
      if (values.length) result[field] = Math.max(...values);
    });

    return result;
  }).filter(Boolean);

// День 1: щогодини; дні 2–3: кожні 3 год; далі: 00/06/12/18 (без графіка).
export const getHourlyForecastDetailGroups = (hourly = []) =>
  getHourlyForecastDayGroups(hourly).map((group, index) => {
    if (index < DETAILED_DAYS) return { ...group, chartAvailable: true };

    if (index < THREE_HOUR_DAYS) {
      return {
        ...group,
        items: group.items.filter((item) => {
          const hour = getItemHour(item);
          return hour === null || hour % 3 === 0;
        }),
        chartAvailable: true,
      };
    }

    return { ...group, items: aggregatePartsOfDay(group.items), chartAvailable: false };
  });

export const getHourlyForecastDayGroups = (hourly = []) => {
  if (!Array.isArray(hourly) || hourly.length === 0) return [];

  const groups = [];
  const byDate = new Map();

  hourly.forEach((item, index) => {
    const label = item?.dateLabel || item?.date || "today";
    if (!byDate.has(label)) {
      byDate.set(label, []);
      groups.push({
        label,
        title: formatDayLabel(label, groups.length),
        items: [],
      });
    }
    byDate.get(label).push(item);
  });

  groups.forEach((group) => {
    group.items = byDate.get(group.label) || [];
  });

  return groups;
};
