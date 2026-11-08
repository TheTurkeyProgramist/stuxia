import { useCallback, useEffect, useRef, useState } from "react";
import localforage from "localforage";
import { GLOBAL_COOLDOWN_KEY } from "./aiConfig";

/**
 * Перезарядка між запитами до Gemini, спільна для всіх вікон ШІ (через localforage).
 * Таймер тікає лише поки перезарядка активна — без постійного опитування сховища.
 */
export const useSharedCooldown = () => {
  const [until, setUntil] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const untilRef = useRef(0);

  const apply = useCallback((nextUntil) => {
    untilRef.current = nextUntil;
    setUntil(nextUntil);
    setSeconds(Math.max(0, Math.ceil((nextUntil - Date.now()) / 1000)));
  }, []);

  /** Підтягує перезарядку, запущену в іншому вікні. Повертає, скільки секунд лишилось. */
  const sync = useCallback(async () => {
    const shared = Number(await localforage.getItem(GLOBAL_COOLDOWN_KEY).catch(() => 0)) || 0;
    const next = Math.max(untilRef.current, shared);
    if (next > Date.now()) {
      apply(next);
      return Math.ceil((next - Date.now()) / 1000);
    }
    return 0;
  }, [apply]);

  /** Запускає перезарядку на N секунд для всіх вікон ШІ. */
  const start = useCallback(async (secs) => {
    const next = Date.now() + secs * 1000;
    apply(next);
    await localforage.setItem(GLOBAL_COOLDOWN_KEY, next).catch(() => {});
  }, [apply]);

  /** Скидає перезарядку лише в цьому вікні (спільна лишається в сховищі). */
  const reset = useCallback(() => apply(0), [apply]);

  const isActive = useCallback(() => untilRef.current > Date.now(), []);

  useEffect(() => {
    sync();
  }, [sync]);

  useEffect(() => {
    if (!until) return undefined;
    const tick = () => {
      const remaining = Math.max(0, until - Date.now());
      setSeconds(Math.ceil(remaining / 1000));
      if (remaining === 0) {
        untilRef.current = 0;
        setUntil(0);
      }
    };
    tick();
    const timer = setInterval(tick, 250);
    return () => clearInterval(timer);
  }, [until]);

  return { seconds, start, sync, reset, isActive };
};
