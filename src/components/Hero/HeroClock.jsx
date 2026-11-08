import { useEffect, useState } from "react";
import { getNow } from "../../utils/serverClock";

// Годинник у Hero (без секунд). Окремий компонент, бо раніше стан `now` жив в App
// і щосекунди перерендерював увесь сайт (новини, картки погоди, графіки, мапу).
const formatHeroDate = (now, user, timeZone) => {
  const mode = user?.dateDisplayMode || "both";
  const hour12 = user?.hour12 === true;

  try {
    const options = { timeZone, hour12 };
    if (mode === "time" || mode === "both") {
      options.hour = "2-digit";
      options.minute = "2-digit";
    }

    if (mode === "date" || mode === "both") {
      options.weekday = "long";
      options.day = "numeric";
      options.month = "2-digit";
      options.year = "numeric";
    }

    const fmt = new Intl.DateTimeFormat("uk", options);
    const parts = fmt.formatToParts(now);
    const p = (type) => parts.find((x) => x.type === type)?.value || "";

    const timePart =
      mode === "time" || mode === "both"
        ? `${p("hour")}:${p("minute")}${hour12 && p("dayPeriod") ? " " + p("dayPeriod") : ""}`
        : "";
    const datePart =
      mode === "date" || mode === "both"
        ? `${p("weekday") ? p("weekday").charAt(0).toUpperCase() + p("weekday").slice(1) : ""}${p("day") ? `, ${p("day")}.${p("month")}.${p("year")}` : ""}`
        : "";

    if (mode === "both") return `${timePart} ${datePart}`.trim();
    return timePart || datePart;
  } catch {
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const d = now.toLocaleDateString("uk");
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

  return formatHeroDate(now, user, timeZone);
};

export default HeroClock;
