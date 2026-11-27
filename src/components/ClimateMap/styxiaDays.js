// Дні шкали часу «Карти Стихії»: кадри за місцевими датами людини.

export const dayKey = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

/** Дати кадрів (за зростанням) → [{ key, frames: [номери кадрів] }]. */
export const groupDays = (dates) => {
  const days = [];
  dates.forEach((date, i) => {
    const key = dayKey(date);
    if (days.at(-1)?.key !== key) days.push({ key, frames: [] });
    days.at(-1).frames.push(i);
  });
  return days;
};

/** Кадр дня, найближчий до вибраної години. */
export const closestFrame = (day, dates, hour) =>
  day.frames.reduce((best, i) => (Math.abs(dates[i].getHours() - hour) < Math.abs(dates[best].getHours() - hour) ? i : best), day.frames[0]);

/** Тижні календаря (з понеділка), що накривають проміжок від first до last. */
export const calendarWeeks = (first, last) => {
  const cursor = new Date(first.getFullYear(), first.getMonth(), first.getDate(), 12);
  cursor.setDate(cursor.getDate() - ((cursor.getDay() + 6) % 7));
  const end = new Date(last.getFullYear(), last.getMonth(), last.getDate(), 12);
  const weeks = [];
  while (cursor <= end) {
    const week = [];
    for (let i = 0; i < 7; i += 1) {
      week.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
};
