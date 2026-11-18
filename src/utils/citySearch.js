// Порядок підказок у пошуку міст: спершу ті, що ПОЧИНАЮТЬСЯ з введеного
// («ко» → Конотоп, Коростень, Ковель), потім ті, де з нього починається друге слово
// («под» → Кам'янець-Подільський), і лише потім — збіг усередині назви.
//
// Відмінкові й латинські форми з бази («харкові», «kharkiv») враховуємо лише з початку:
// «ко» всередині «харкові» — це не пошук Харкова.

const RANK_NONE = -1;

/** 0 — назва починається з q; 1 — форма назви починається; 2 — наступне слово; 3 — усередині. */
export const rankCityName = (name, aliases = [], q) => {
  const query = String(q || "").trim().toLowerCase();
  const n = String(name || "").toLowerCase();
  if (!query || !n) return RANK_NONE;
  if (n.startsWith(query)) return 0;
  if (aliases.some((a) => String(a).toLowerCase().startsWith(query))) return 1;
  // Слова — через пробіл чи дефіс (апостроф — частина слова: «Кам'янське»)
  if (n.split(/[\s-]+/).slice(1).some((w) => w.startsWith(query))) return 2;
  if (n.includes(query)) return 3;
  return RANK_NONE;
};

/** Міста бази, що підходять під запит, — у порядку rankCityName (усередині — порядок бази). */
export const searchLocalCities = (cities, q) =>
  cities
    .map((city, i) => ({ city, i, rank: rankCityName(city.name, city.aliases, q) }))
    .filter((x) => x.rank !== RANK_NONE)
    .sort((a, b) => a.rank - b.rank || a.i - b.i)
    .map((x) => x.city);

/**
 * Злитий список (база + геокодер) — тим самим правилом: спершу все, що починається з q.
 * За однакового рангу місто з бази йде перед знайденим геокодером, далі — як було.
 */
export const sortSuggestionsByQuery = (list, q) =>
  list
    .map((item, i) => {
      const rank = rankCityName(item?.name, item?.aliases || [], q);
      return { item, i, rank: rank === RANK_NONE ? 4 : rank };
    })
    .sort((a, b) => a.rank - b.rank || Number(!a.item?.isLocal) - Number(!b.item?.isLocal) || a.i - b.i)
    .map((x) => x.item);
