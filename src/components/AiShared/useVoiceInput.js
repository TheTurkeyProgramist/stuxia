import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

/**
 * Голосовий ввід (Web Speech API), українською.
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
      toast.error("Ваш браузер не підтримує розпізнавання голосу.");
      return;
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "uk-UA";
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
        toast.error("Немає доступу до мікрофона. Дозвольте його в налаштуваннях браузера.");
      } else if (event.error !== "no-speech" && event.error !== "aborted") {
        toast.error("Не вдалося розпізнати голос. Спробуйте ще раз.");
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
