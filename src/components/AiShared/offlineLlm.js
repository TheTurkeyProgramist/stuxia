import i18n from "../../i18n/i18n.js";
/**
 * Офлайн-ШІ: модель запускається прямо в браузері через WebGPU (WebLLM).
 * Ні ключа, ні сервера. Модель завантажується один раз, далі береться з кешу браузера.
 * Сам рушій (~6 МБ коду) підвантажується лише коли користувач обирає офлайн-режим.
 */

/**
 * Моделі на вибір. f16 — швидший і легший варіант, але потребує shader-f16;
 * f32 — запасний для відеокарт без нього.
 *
 * Обрано порівнянням українською (листопад 2026, Intel UHD, WebLLM 0.2.88):
 * Gemma-2-2B — найграмотніша й найменше вигадує. Qwen3.5-2B, Qwen3-1.7B,
 * Gemma3-1B і Qwen3-0.6B писали нісенітниці або зациклювались, тому їх немає.
 */
export const OFFLINE_MODELS = [
  {
    key: "gemma-2-2b",
    label: "Gemma 2 · 2B",
    get note() { return i18n.t("ui.offlineLlm.oflain"); },
    f16: "gemma-2-2b-it-q4f16_1-MLC",
    f32: "gemma-2-2b-it-q4f32_1-MLC",
    sizeMB: 1300,
    // Шаблон Gemma не має системної ролі — інструкції йдуть у перше повідомлення
    noSystemRole: true,
  },
];

export const DEFAULT_OFFLINE_MODEL = OFFLINE_MODELS[0].key;

export const getOfflineModel = (key) =>
  OFFLINE_MODELS.find((m) => m.key === key) || OFFLINE_MODELS[0];

let supportPromise = null;

/** { ok, f16, reason } — чи можна запустити офлайн-ШІ на цьому пристрої. */
export const checkOfflineSupport = () => {
  if (!supportPromise) {
    supportPromise = (async () => {
      if (typeof navigator === "undefined" || !navigator.gpu) {
        return { ok: false, f16: false, reason: i18n.t("ui.offlineLlm.brauzerNePidtrymuieWebgpu") };
      }
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
          return { ok: false, f16: false, reason: i18n.t("ui.offlineLlm.webgpuVymknenoAboVideokarta") };
        }
        return { ok: true, f16: adapter.features.has("shader-f16"), reason: "" };
      } catch (err) {
        return { ok: false, f16: false, reason: err?.message || i18n.t("ui.offlineLlm.pomylkaWebgpu") };
      }
    })();
  }
  return supportPromise;
};

/** Точний ID моделі WebLLM з урахуванням можливостей відеокарти. */
export const resolveModelId = async (key) => {
  const model = getOfflineModel(key);
  const { f16 } = await checkOfflineSupport();
  return f16 ? model.f16 : model.f32;
};

/** Чи модель уже завантажена в кеш браузера (тоді не треба нічого качати). */
export const isOfflineModelCached = async (key) => {
  try {
    const { hasModelInCache } = await import("@mlc-ai/web-llm");
    return await hasModelInCache(await resolveModelId(key));
  } catch {
    return false;
  }
};

let engine = null;
let engineModelId = "";
let enginePromise = null;

/**
 * Повертає рушій для обраної моделі (створює або перемикає).
 * onProgress({ progress: 0..1, text }) — прогрес завантаження/ініціалізації.
 */
export const getOfflineEngine = async (key, onProgress) => {
  const modelId = await resolveModelId(key);
  if (engine && engineModelId === modelId) return engine;
  if (enginePromise) await enginePromise.catch(() => {});
  if (engine && engineModelId === modelId) return engine;

  enginePromise = (async () => {
    const { CreateWebWorkerMLCEngine } = await import("@mlc-ai/web-llm");
    const progress = (p) => onProgress?.({ progress: p.progress ?? 0, text: p.text || "" });
    if (engine) {
      await engine.reload(modelId);
    } else {
      const worker = new Worker(new URL("./offlineLlm.worker.js", import.meta.url), { type: "module" });
      engine = await CreateWebWorkerMLCEngine(worker, modelId, { initProgressCallback: progress });
    }
    engine.setInitProgressCallback?.(progress);
    engineModelId = modelId;
    return engine;
  })();

  try {
    return await enginePromise;
  } catch (err) {
    engineModelId = "";
    throw err;
  } finally {
    enginePromise = null;
  }
};

/** Зупинити поточну генерацію. */
export const interruptOffline = () => engine?.interruptGenerate?.();

/** Звільнити відеопам'ять (наприклад, коли користувач повертається до Gemini). */
export const unloadOffline = async () => {
  if (!engine) return;
  await engine.unload().catch(() => {});
  engineModelId = "";
};

/**
 * Стрімінгова відповідь у форматі OpenAI.
 * messages: [{ role: "system"|"user"|"assistant", content }]
 * onDelta(accumulatedText) — викликається на кожному шматку.
 */
/**
 * Приводить історію до вигляду, який приймають усі шаблони:
 * діалог починається з user, ролі чергуються, а для моделей без системної ролі
 * інструкції дописуються на початок першого повідомлення користувача.
 */
const normalizeMessages = (messages, noSystemRole) => {
  const system = messages.filter((m) => m.role === "system").map((m) => m.content).join("\n\n");
  const turns = [];
  for (const m of messages) {
    if (m.role === "system" || !m.content) continue;
    if (!turns.length && m.role !== "user") continue;
    const last = turns[turns.length - 1];
    if (last && last.role === m.role) last.content += `\n\n${m.content}`;
    else turns.push({ role: m.role, content: m.content });
  }
  if (!system) return turns;
  if (!noSystemRole) return [{ role: "system", content: system }, ...turns];
  if (turns.length) turns[0] = { role: "user", content: `${system}\n\n${turns[0].content}` };
  return turns;
};

export const streamOfflineChat = async ({ key, messages, onDelta, onProgress, maxTokens = 700 }) => {
  const model = getOfflineModel(key);
  const eng = await getOfflineEngine(key, onProgress);
  const stream = await eng.chat.completions.create({
    messages: normalizeMessages(messages, model.noSystemRole),
    stream: true,
    stream_options: { include_usage: true },
    max_tokens: maxTokens,
    temperature: 0.6,
    top_p: 0.9,
    // Малі моделі схильні зациклюватись («бо в тумані, бо в тумані…»)
    repetition_penalty: 1.1,
    ...(model.thinkingToggle ? { extra_body: { enable_thinking: false } } : {}),
  });
  let text = "";
  let usage = null;
  for await (const chunk of stream) {
    const delta = chunk.choices?.[0]?.delta?.content || "";
    if (delta) {
      text += delta;
      onDelta?.(text);
    }
    if (chunk.usage) usage = chunk.usage;
  }
  return {
    text: text.replace(/<think>[\s\S]*?<\/think>\s*/g, "").trim(),
    usage: usage
      ? {
          promptTokens: usage.prompt_tokens || 0,
          responseTokens: usage.completion_tokens || 0,
          totalTokens: usage.total_tokens || 0,
        }
      : null,
  };
};
