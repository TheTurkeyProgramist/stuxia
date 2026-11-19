import { useEffect, useState } from "react";
import { getNow } from "../../utils/serverClock";
import { dateLocale } from "../../utils/weatherText.js";
import i18n from "../../i18n/i18n.js";

// Годинник у Hero (без секунд). Окремий компонент, бо раніше стан `now` жив в App
// і щосекунди перерендерював увесь сайт (новини, картки погоди, графіки, мапу).
const formatHeroDate = (now, user, timeZone) => {
  const mode = user?.dateDisplayMode || "both";
  const hour12 = user?.hour12 === true;

  try {
    // Мовою сайту: порядок дня/місяця, назву дня тижня й роздільники дає сам браузер
    const lng = dateLocale();
    const timePart =
      mode === "time" || mode === "both"
        ? now.toLocaleTimeString(lng, { timeZone, hour12, hour: "2-digit", minute: "2-digit" })
        : "";
    const rawDate =
      mode === "date" || mode === "both"
        ? now.toLocaleDateString(lng, { timeZone, weekday: "long", day: "numeric", month: "2-digit", year: "numeric" })
        : "";
    const datePart = rawDate ? rawDate.charAt(0).toLocaleUpperCase(lng) + rawDate.slice(1) : "";

    if (mode === "both") return `${timePart} ${datePart}`.trim();
    return timePart || datePart;
  } catch {
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const d = now.toLocaleDateString(dateLocale());
    return `${h}:${m} ${d}`;
  }
};

const HeroClock = ({ user, timeZone }) => {
  const [now, setNow] = useState(() => getNow());

  // Секунд немає, тож оновлюємось на початку кожної хвилини
  useEffect(() => {
    let timer;
    const tick = () => {
      const current = getNow();
      setNow(current);
      const msToNextMinute =
        60_000 - (current.getSeconds() * 1000 + current.getMilliseconds());
      timer = setTimeout(tick, msToNextMinute + 50);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  // Змінили мову — одразу перемальовуємо дату, не чекаючи наступної хвилини
  const [, setLng] = useState(i18n.language);
  useEffect(() => {
    const onChange = (lng) => setLng(lng);
    i18n.on("languageChanged", onChange);
    return () => i18n.off("languageChanged", onChange);
  }, []);

  return formatHeroDate(now, user, timeZone);
};

export default HeroClock;
