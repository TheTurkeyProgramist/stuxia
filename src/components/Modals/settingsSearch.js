// Загальний пошук у «Параметрах».
// Під час пошуку модалка рендерить усі вкладки одразу, а цей модуль фільтрує вже готовий DOM —
// тож нові картки потрапляють у пошук автоматично, без ручного індексу.
//
// Розмітка, на яку спирається пошук:
//   [data-settings-tab="key"]     — група однієї вкладки (CardGroup)
//   [data-settings-head="title"]  — заголовок вкладки (за ним збіг показує всю вкладку)
//   [data-settings-head="desc"]   — опис вкладки (у пошуку не враховується, лише показується)
//   [data-scroll-hint]            — заголовок підрозділу (збіг показує весь підрозділ)
//   [data-settings-item]          — картка налаштування
//   [data-level-hint]             — підказка «це з режиму …» (у пошуку не враховується)

export const SEARCH_HIDDEN_ATTR = "data-search-hidden";
export const SEARCH_HIGHLIGHT = "settings-search";

const ITEM = "[data-settings-item]";
const MAX_HIGHLIGHTS = 400;

// Заміни 1:1 за довжиною — щоб індекси збігів у нормалізованому тексті збігались з оригіналом
export const normalizeSearchText = (value) =>
  String(value ?? "").toLowerCase().replace(/[ʼ’‘`´]/g, "'");

export const getSearchWords = (query) =>
  normalizeSearchText(query).split(/\s+/).filter(Boolean);

const hasAll = (text, words) => words.every((w) => text.includes(w));
const hasAny = (text, words) => words.some((w) => text.includes(w));

// Текст картки + підказки кнопок/полів (title, placeholder, aria-label)
// Підказку режиму (settingsLevels.js) не враховуємо — інакше «режим» знаходив би кожну таку картку.
const LEVEL_HINT = "[data-level-hint]";

const searchableText = (el) => {
  const extra = [...el.querySelectorAll("[title],[placeholder],[aria-label]")]
    .filter((n) => !n.closest(LEVEL_HINT))
    .map((n) => `${n.getAttribute("title") || ""} ${n.getAttribute("placeholder") || ""} ${n.getAttribute("aria-label") || ""}`)
    .join(" ");
  let text = el.textContent;
  el.querySelectorAll(LEVEL_HINT).forEach((hint) => {
    text = text.replace(hint.textContent, " ");
  });
  return normalizeSearchText(`${text} ${extra}`);
};

// Картка підходить, якщо всі слова є в ній разом із контекстом (назва вкладки / підрозділу),
// але хоча б одне — саме в картці: «новини фільтр» знайде «Фільтр новин», а не всі картки розділу.
const itemMatches = (el, words, context) => {
  const own = searchableText(el);
  return hasAny(own, words) && hasAll(`${context} ${own}`, words);
};

const setHidden = (el, hidden) => {
  if (hidden) el.setAttribute(SEARCH_HIDDEN_ATTR, "");
  else el.removeAttribute(SEARCH_HIDDEN_ATTR);
};

const outermostItems = (el) =>
  [...el.querySelectorAll(ITEM)].filter((item) => !item.parentElement?.closest(ITEM) || !el.contains(item.parentElement.closest(ITEM)));

const getHighlightApi = () =>
  typeof CSS !== "undefined" && CSS.highlights && typeof Highlight !== "undefined" ? CSS.highlights : null;

const SKIP_TEXT_IN = "input, textarea, select, option, script, style";

function highlightMatches(root, words) {
  const api = getHighlightApi();
  if (!api) return;
  const ranges = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest(`[${SEARCH_HIDDEN_ATTR}], ${SKIP_TEXT_IN}, ${LEVEL_HINT}`)) return NodeFilter.FILTER_REJECT;
      if (!parent.closest("[data-settings-tab]")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  for (let node = walker.nextNode(); node && ranges.length < MAX_HIGHLIGHTS; node = walker.nextNode()) {
    const text = normalizeSearchText(node.nodeValue);
    for (const word of words) {
      for (let i = text.indexOf(word); i !== -1; i = text.indexOf(word, i + word.length)) {
        const range = document.createRange();
        range.setStart(node, i);
        range.setEnd(node, i + word.length);
        ranges.push(range);
      }
    }
  }
  api.set(SEARCH_HIGHLIGHT, new Highlight(...ranges));
}

export function clearSettingsSearch(root) {
  root?.querySelectorAll(`[${SEARCH_HIDDEN_ATTR}]`).forEach((el) => el.removeAttribute(SEARCH_HIDDEN_ATTR));
  getHighlightApi()?.delete(SEARCH_HIGHLIGHT);
}

/**
 * Ховає все, що не відповідає запиту, і підсвічує збіги.
 * @returns {{ counts: Record<string, number>, total: number }} кількість знайдених карток по вкладках
 */
export function applySettingsSearch(root, words) {
  const counts = {};
  let total = 0;
  if (!root || !words.length) return { counts, total };

  for (const group of root.querySelectorAll("[data-settings-tab]")) {
    const tab = group.dataset.settingsTab;
    const heads = [...group.children].filter((c) => c.matches("[data-settings-head]"));
    const titleText = normalizeSearchText(heads.find((h) => h.dataset.settingsHead === "title")?.textContent);
    const tabHit = hasAll(titleText, words);

    let found = 0;
    let section = null; // { el, text, hit, visible }
    const closeSection = () => {
      if (section) setHidden(section.el, !section.hit && !tabHit && section.visible === 0);
    };

    for (const child of group.children) {
      if (child.matches("[data-settings-head]")) continue;

      if (child.matches("[data-scroll-hint]")) {
        closeSection();
        const text = normalizeSearchText(child.textContent);
        section = { el: child, text, hit: hasAll(text, words), visible: 0 };
        continue;
      }

      const showAll = tabHit || !!section?.hit;
      const context = `${titleText} ${section?.text || ""}`;
      const inner = child.matches(ITEM) ? [child] : outermostItems(child);
      let shown = 0;

      if (inner.length && !(inner.length === 1 && inner[0] === child)) {
        // Обгортка з картками всередині (напр. блок музики) — фільтруємо кожну картку окремо
        for (const item of inner) {
          const ok = showAll || itemMatches(item, words, context);
          setHidden(item, !ok);
          if (ok) shown += 1;
        }
        setHidden(child, shown === 0);
      } else {
        const ok = showAll || itemMatches(child, words, context);
        setHidden(child, !ok);
        shown = ok ? 1 : 0;
      }

      found += shown;
      if (section) section.visible += shown;
    }
    closeSection();

    const visible = tabHit || found > 0;
    heads.forEach((h) => setHidden(h, !visible));
    setHidden(group, !visible);
    if (tabHit && found === 0) found = 1;
    counts[tab] = visible ? found : 0;
    total += counts[tab];
  }

  highlightMatches(root, words);
  return { counts, total };
}
