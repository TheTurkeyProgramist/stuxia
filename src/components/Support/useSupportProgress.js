import { useEffect, useState } from "react";
import { MONTHLY_GOAL, getRaisedThisMonth } from "./supportConfig";

const PATH = "/api/support-progress";
const REFRESH_MS = 5 * 60 * 1000; // сервер і так кешує на 5 хв

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

// Жива сума з Donatello; якщо сервер недоступний — значення з supportConfig.js
export const useSupportProgress = () => {
  const [state, setState] = useState(() => ({
    raised: getRaisedThisMonth(),
    target: MONTHLY_GOAL,
    live: false,
    loading: true,
  }));

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(endpoint(), { signal: AbortSignal.timeout(10000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (cancelled || typeof data.raised !== "number") return;
        setState({
          raised: data.raised,
          target: data.target || MONTHLY_GOAL,
          live: true,
          loading: false,
        });
      } catch {
        if (!cancelled) setState((s) => ({ ...s, loading: false }));
      }
    };

    load();
    const timer = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  return state;
};
