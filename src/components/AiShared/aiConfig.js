// Спільні налаштування для «Допомоги ШІ» (Aihelp) і «ШІ Викладу новини» (NewsAiModal)

export const MAX_MESSAGE_LENGTH = 300;

// Перезарядка спільна для обох вікон: запит в одному блокує інше
export const GLOBAL_COOLDOWN_KEY = "gemini_global_cooldown_until";

export const SUGGESTED_COUNT_KEY = "gemini_suggested_questions_count";

// Для економії квоти — не більше одного рекомендованого питання
export const MAX_SUGGESTED_QUESTIONS = 1;

// Варіанти перемикача «кількість рекомендованих питань» і перезарядка для кожного (с)
export const SUGGESTED_COUNT_OPTIONS = [
  { value: "0", cooldown: 5 },
  { value: "1", cooldown: 10 },
];

export const getCooldownSeconds = (suggestedCount) =>
  SUGGESTED_COUNT_OPTIONS.find((o) => Number(o.value) === Number(suggestedCount))?.cooldown ?? 5;

/**
 * Збережене значення → допустиме. Старе "2" (коли можна було 2 питання) стає "1".
 * @returns {string | null} null — якщо нічого не збережено
 */
export const normalizeSuggestedCount = (saved) => {
  if (saved === null || saved === undefined || saved === "") return null;
  const n = Number(saved);
  if (!Number.isFinite(n)) return null;
  return String(Math.min(Math.max(0, Math.round(n)), MAX_SUGGESTED_QUESTIONS));
};

const SUGGESTIONS_BLOCK = /\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/;

/** Відокремлює блок рекомендованих питань від тексту відповіді. */
export const parseSuggestedQuestions = (text) => {
  if (!text) return { cleanText: text || "", questions: [] };
  const match = text.match(SUGGESTIONS_BLOCK);
  if (!match) return { cleanText: text, questions: [] };
  const questions = match[1]
    .split("\n")
    .map((q) => q.replace(/^[•\-*\d.\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, MAX_SUGGESTED_QUESTIONS);
  return { cleanText: text.replace(SUGGESTIONS_BLOCK, "").trim(), questions };
};

/** Інструкція для моделі: додати одне питання в кінці або не додавати нічого. */
export const getSuggestionsInstruction = (suggestedCount) =>
  Number(suggestedCount) > 0
    ? `Наприкінці відповіді додай рівно одне коротке змістовне питання, яке допоможе обдумати тему, перевірити припущення або побачити іншу перспективу (а не просто продовжити чат), у форматі:
[РЕКОМЕНДОВАНІ_ПИТАННЯ]
• Запитання?
[/РЕКОМЕНДОВАНІ_ПИТАННЯ]`
    : "Не додавай рекомендованих питань і блок [РЕКОМЕНДОВАНІ_ПИТАННЯ].";
