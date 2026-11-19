// Фрази Стихії мовою сайту. Українські — у бандлі (utils/funPhrases.js), решта мов —
// окремим чанком з ./phrases/<мова>.js лише тоді, коли мову вибрали.
// Усі списки мають той самий порядок і довжину, тож фраза однозначно задається номером.
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { JOKES, FACTS, TIPS, MAP_TIPS } from "../utils/funPhrases";

const withLoading = (p) => ({ ...p, LOADING: [...p.JOKES, ...p.FACTS, ...p.TIPS] });

// Префікси, які рядок під картою прибирає (тип і так видно з розташування)
const UK = withLoading({ PREFIXES: ["Факт", "Порада"], JOKES, FACTS, TIPS, MAP_TIPS });

const LOADERS = import.meta.glob("./phrases/*.js");
const cache = { uk: UK };

const baseLang = (lng) => String(lng || "uk").split("-")[0];

export const loadFunPhrases = (lng) => {
  const code = baseLang(lng);
  if (cache[code]) return Promise.resolve(cache[code]);
  const load = LOADERS[`./phrases/${code}.js`];
  if (!load) return Promise.resolve(UK);
  return load()
    .then((mod) => (cache[code] = withLoading(mod)))
    .catch(() => UK);
};

/** Фрази поточної мови; null, поки чанк мови ще вантажиться */
export const useFunPhrases = () => {
  const { i18n } = useTranslation();
  // language, а не resolvedLanguage: поки вантажиться переклад, resolvedLanguage ще «uk»
  const lng = baseLang(i18n.language);
  const [loaded, setLoaded] = useState(() => ({ lng, phrases: cache[lng] || null }));

  useEffect(() => {
    if (cache[lng]) return undefined;
    let alive = true;
    loadFunPhrases(lng).then((phrases) => alive && setLoaded({ lng, phrases }));
    return () => {
      alive = false;
    };
  }, [lng]);

  return cache[lng] || (loaded.lng === lng ? loaded.phrases : null);
};
