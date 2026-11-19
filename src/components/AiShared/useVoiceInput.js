import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import i18n from "../../i18n/i18n.js";
import { SPEECH_LANGS } from "../Commands/voiceLexicon.js";
/**
 * Голосовий ввід (Web Speech API) мовою сайту.
 * onText(transcript) — отримує розпізнаний текст.
 * onStart / onStop — необов'язкові (наприклад, статус «Слухаю вас...»).
 */
export const useVoiceInput = ({ onText, onStart, onStop } = {}) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  // Свіжі колбеки без перестворення toggle
  const callbacksRef = useRef({ onText, onStart, onStop });
  useEffect(() => {
    callbacksRef.current = { onText, onStart, onStop };
  });

  const finish = useCallback(() => {
    recognitionRef.current = null;
    setIsListening(false);
    callbacksRef.current.onStop?.();
  }, []);

  const toggle = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error(i18n.t("ui.useVoiceInput.vashBrauzerNePidtrymuie"));
      return;
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = SPEECH_LANGS[String(i18n.language || "uk").split("-")[0]] || "uk-UA";
    recognition.interimResults = false;
    recognition.onstart = () => {
      setIsListening(true);
      callbacksRef.current.onStart?.();
    };
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript;
      if (transcript) callbacksRef.current.onText?.(transcript);
    };
    recognition.onerror = (event) => {
      // Без onerror кнопка могла назавжди лишитися в стані «слухаю»
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        toast.error(i18n.t("ui.useVoiceInput.nemaieDostupuDoMikrofona"));
      } else if (event.error !== "no-speech" && event.error !== "aborted") {
        toast.error(i18n.t("ui.useVoiceInput.neVdalosiaRozpiznatyHolos"));
      }
      finish();
    };
    recognition.onend = finish;

    try {
      recognition.start();
    } catch {
      finish();
    }
  }, [finish]);

  // Закрили вікно під час запису — зупиняємо мікрофон
  useEffect(() => () => recognitionRef.current?.abort?.(), []);

  return { isListening, toggle };
};
