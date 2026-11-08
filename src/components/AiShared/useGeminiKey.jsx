import { useCallback, useEffect, useState } from "react";
import localforage from "localforage";
import { useAgeGate } from "../Modals/AgeGateModal";
import { GeminiKeyModal } from "../Modals/GeminiKeyModal";
import { GEMINI_AGE_TEXT, GEMINI_MIN_AGE } from "../../utils/ageGate";

const STORAGE_KEY = "gemini_api_key";
const CHANGE_EVENT = "geminiKeyChanged";

const cleanKey = (value) =>
  typeof value === "string" ? value.trim().replace(/^["']|["']$/g, "") : "";

/**
 * Ключ Gemini, спільний для всіх вікон ШІ:
 * зберігання, синхронізація між вікнами, підтвердження 18+ і модалка ключа.
 *
 * const { apiKey, openKeyModal, ensureAge, keyElements } = useGeminiKey({ modelName });
 * {keyElements} — вставити будь-де в JSX (модалки самі йдуть у document.body).
 */
export const useGeminiKey = ({ modelName } = {}) => {
  const [apiKey, setApiKey] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestAge, ageGate] = useAgeGate();

  const reload = useCallback(async () => {
    const saved = await localforage.getItem(STORAGE_KEY).catch(() => "");
    setApiKey(cleanKey(saved));
  }, []);

  useEffect(() => {
    reload();
    const onChange = (e) => setApiKey(cleanKey(e.detail));
    window.addEventListener(CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CHANGE_EVENT, onChange);
  }, [reload]);

  /** Ключ Gemini видає Google, а умови Gemini API вимагають 18+. */
  const ensureAge = useCallback(() => requestAge(GEMINI_MIN_AGE, GEMINI_AGE_TEXT), [requestAge]);

  const handleInput = useCallback(async (value) => {
    const cleaned = cleanKey(value || "");
    // Стерти ключ можна завжди; новий ключ — лише після підтвердження віку
    if (cleaned && !apiKey && !(await ensureAge())) return;
    setApiKey(cleaned);
    await localforage.setItem(STORAGE_KEY, cleaned).catch(() => {});
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: cleaned }));
  }, [apiKey, ensureAge]);

  const openKeyModal = useCallback(() => setIsModalOpen(true), []);
  const closeKeyModal = useCallback(() => setIsModalOpen(false), []);

  const keyElements = (
    <>
      {ageGate}
      {isModalOpen && (
        <GeminiKeyModal
          value={apiKey}
          modelName={modelName}
          onChange={handleInput}
          onClose={closeKeyModal}
        />
      )}
    </>
  );

  return { apiKey, openKeyModal, ensureAge, reload, keyElements };
};
