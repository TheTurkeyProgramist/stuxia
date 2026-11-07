import { useEffect, useState } from "react";
import { MONTHLY_GOAL, getRaisedThisMonth } from "./supportConfig";

const PATH = "/api/support-progress";
const REFRESH_MS = 2 * 60 * 1000; // сервер кешує на 2 хв

// Функції Cloudflare є лише на самому сайті. У розробці та в застосунках (Tauri)
// звертаємося до робочого домену.
const endpoint = () => {
  try {
    const host = window.location.hostname;
    const onCloudflare = host === "stuxia.com" || host.endsWith(".stuxia.com") || host.endsWith(".pages.dev");
    return onCloudflare && !import.meta.env.DEV ? PATH : `https://stuxia.com${PATH}`;
  } catch {
    return `https://stuxia.com${PATH}`;
  }
};

// Поточний місяць за київським часом: { key: "2026-11", year, month (1–12), daysLeft }
export const kyivMonth = (now = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Kyiv",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const get = (t) => Number(parts.find((p) => p.type === t)?.value);
  const year = get("year");
  const month = get("month");
  const day = get("day");
  const daysInMonth = new Date(year, month, 0).getDate();
  return {
    key: `${year}-${String(month).padStart(2, "0")}`,
    year,
    month,
    daysLeft: daysInMonth - day + 1, // разом із сьогоднішнім
  };
};

// Жива сума з Donatello; якщо сервер недоступний — значення з supportConfig.js.
// Шкала місячна: 1-го числа (за Києвом) сервер починає рахувати з нуля,
// а відкрита сторінка сама помічає новий місяць і перезавантажує дані.
export const useSupportProgress = () => {
  const [state, setState] = useState(() => ({
    raised: getRaisedThisMonth(),
    target: MONTHLY_GOAL,
    month: kyivMonth().key,
    live: false,
    loading: true,
  }));

  useEffect(() => {
    let cancelled = false;
    let lastMonth = kyivMonth().key;

    const load = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        const res = await fetch(endpoint(), { signal: AbortSignal.timeout(10000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (cancelled || typeof data.raised !== "number") return;
        setState({
          raised: data.raised,
          target: data.target || MONTHLY_GOAL,
          month: data.month || kyivMonth().key,
          live: true,
          loading: false,
        });
      } catch {
        if (!cancelled) setState((s) => ({ ...s, loading: false }));
      }
    };

    // Опівночі 1-го числа: одразу обнуляємо шкалу (плавно) і тягнемо свіжі дані
    const checkMonth = () => {
      const current = kyivMonth().key;
      if (current === lastMonth) return;
      lastMonth = current;
      setState((s) => ({ ...s, raised: 0, month: current }));
      load();
    };

    load();
    const timer = setInterval(load, REFRESH_MS);
    const monthTimer = setInterval(checkMonth, 60 * 1000);
    document.addEventListener("visibilitychange", load);
    return () => {
      cancelled = true;
      clearInterval(timer);
      clearInterval(monthTimer);
      document.removeEventListener("visibilitychange", load);
    };
  }, []);

  return state;
};

// Перевірка донату для значка «Друг індиків».
// Повертає { ok: true } | { ok: false, error? }
export const claimSupporterBadge = async ({ name, amount }) => {
  try {
    const res = await fetch(endpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, amount: Number(String(amount).replace(",", ".")) }),
      signal: AbortSignal.timeout(15000),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) return { ok: data.ok === true };
    return { ok: false, error: data.error || "Сервер зараз недоступний. Спробуйте пізніше." };
  } catch {
    return { ok: false, error: "Немає зв'язку з сервером. Спробуйте пізніше." };
  }
};
