import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const WINDOW_MS = 3000;
const BAR_STEP_PX = 3;

/* Займає місце текстового поля під час диктування */
const WaveWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 52px;
  margin: 6px 12px;
  border-radius: 10px;
  overflow: hidden;
  background: ${(p) => (p.$isDarkMode ? "rgba(255,149,0,0.06)" : "rgba(255,140,0,0.05)")};

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

// Хвиля гучності мікрофона за останні 3 секунди (дзеркально відносно центру).
// Окремий потік getUserMedia, бо SpeechRecognition не віддає аудіодані.
const VoiceWaveform = ({ active, isDarkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active || !navigator.mediaDevices?.getUserMedia) return undefined;

    let cancelled = false;
    let stream = null;
    let audioCtx = null;
    let rafId = 0;
    const history = []; // { t, level }

    const draw = (analyser, samples) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
      }
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      analyser.getFloatTimeDomainData(samples);
      let sum = 0;
      for (let i = 0; i < samples.length; i += 1) sum += samples[i] * samples[i];
      const rms = Math.sqrt(sum / samples.length);
      const now = performance.now();
      // Корінь + підсилення: тихий голос теж дає помітну хвилю
      history.push({ t: now, level: Math.min(1, Math.sqrt(rms) * 2.2) });
      while (history.length && now - history[0].t > WINDOW_MS) history.shift();

      const mid = height / 2;

      ctx.fillStyle = "rgba(255,149,0,0.25)";
      ctx.fillRect(0, mid, width, 1);

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#ffb347");
      gradient.addColorStop(0.5, "#ff7a00");
      gradient.addColorStop(1, "#ffb347");
      ctx.fillStyle = gradient;

      // Групуємо кадри у стовпчики по BAR_STEP_PX пікселів (йдемо справа наліво, x спадає)
      let lastX = Infinity;
      for (let i = history.length - 1; i >= 0; i -= 1) {
        const { t, level } = history[i];
        const x = width - ((now - t) * width) / WINDOW_MS;
        if (lastX - x < BAR_STEP_PX) continue;
        lastX = x;
        const h = Math.max(1.5, level * (mid - 4));
        ctx.fillRect(x - 1, mid - h, 2, h * 2);
      }
    };

    // AudioContext створюємо одразу (ближче до кліку), а не після await —
    // інакше браузер може лишити його в стані "suspended" і аналізатор чутиме тишу
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioCtx();

    navigator.mediaDevices
      .getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: true } })
      .then(async (mediaStream) => {
        if (cancelled) {
          mediaStream.getTracks().forEach((track) => track.stop());
          return;
        }
        stream = mediaStream;
        if (audioCtx.state === "suspended") await audioCtx.resume();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 1024;
        audioCtx.createMediaStreamSource(stream).connect(analyser);
        const samples = new Float32Array(analyser.fftSize);
        const loop = () => {
          draw(analyser, samples);
          rafId = requestAnimationFrame(loop);
        };
        loop();
      })
      .catch((err) => {
        // Немає доступу до мікрофона — хвиля лишається порожньою
        console.warn("VoiceWaveform: мікрофон недоступний", err);
      });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      stream?.getTracks().forEach((track) => track.stop());
      audioCtx?.close();
    };
  }, [active]);

  if (!active) return null;

  return (
    <WaveWrap $isDarkMode={isDarkMode} role="img" aria-label="Хвиля голосу за останні 3 секунди">
      <canvas ref={canvasRef} />
    </WaveWrap>
  );
};

export default VoiceWaveform;
