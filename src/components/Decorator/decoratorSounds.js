// Звук для Декоратора: рівень гучності фонової музики для «звукової реакції»
// та розбір CSS-значень url("…").

let ctx = null;

// AudioContext створюємо ліниво — браузер дозволяє звук лише після дії користувача
export const getAudioCtx = () => {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    try {
      ctx = new Ctx();
    } catch {
      return null;
    }
  }
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
};

// Витягує посилання з CSS-значення url("…")
export const parseCssUrl = (raw = "") => {
  const m = String(raw).trim().match(/^url\(\s*(["']?)([\s\S]*?)\1\s*\)$/);
  return m ? m[2] : "";
};

/* ---------- Рівень гучності фонової музики ---------- */

// captureStream не перемикає звук самого <audio> (на відміну від createMediaElementSource,
// який назавжди забирає звук елемента і глушить сторонні треки без CORS).
const taps = new WeakMap();

const tapFor = (audio) => {
  if (typeof audio.captureStream !== "function") return null;
  const c = getAudioCtx();
  if (!c) return null;
  let tap = taps.get(audio);
  try {
    if (!tap) {
      tap = { stream: audio.captureStream(), trackId: null, source: null, analyser: null, data: null };
      taps.set(audio, tap);
    }
    const track = tap.stream.getAudioTracks().find((t) => t.readyState === "live");
    if (!track) return null;
    if (track.id !== tap.trackId) {
      // Новий трек (змінився src) — перепідключаємо аналізатор
      tap.source?.disconnect();
      const source = c.createMediaStreamSource(new MediaStream([track]));
      const analyser = tap.analyser || c.createAnalyser();
      analyser.fftSize = 512;
      if (!tap.analyser) {
        // Нульова гучність до виходу: аналізатор обробляється, але звук не дублюється
        const mute = c.createGain();
        mute.gain.value = 0;
        analyser.connect(mute).connect(c.destination);
      }
      source.connect(analyser);
      Object.assign(tap, { source, analyser, trackId: track.id, data: new Uint8Array(analyser.fftSize) });
    }
    return tap;
  } catch {
    return null;
  }
};

const rms = (tap) => {
  tap.analyser.getByteTimeDomainData(tap.data);
  let sum = 0;
  for (let i = 0; i < tap.data.length; i++) {
    const v = (tap.data[i] - 128) / 128;
    sum += v * v;
  }
  return Math.sqrt(sum / tap.data.length);
};

// 0…1. null — музика не грає. Без captureStream (Safari) — м'яке «дихання» за гучністю
export const readMusicLevel = () => {
  let level = null;
  document.querySelectorAll("audio").forEach((audio) => {
    if (audio.paused || audio.muted || audio.volume < 0.01) return;
    const tap = tapFor(audio);
    const value = tap
      ? Math.min(1, rms(tap) * 3.5)
      : Math.min(1, audio.volume * 1.5) * (0.35 + 0.25 * Math.sin(performance.now() / 180));
    level = Math.max(level ?? 0, value);
  });
  return level;
};
