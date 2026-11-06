/**
 * Родовий відмінок назви міста/локації для фраз на кшталт «Прогноз для Києва».
 * Евристика для українських і поширених іноземних назв; незнайомі закінчення лишаються без змін.
 */

// Назви, що відмінюються не за загальними правилами
const SPECIAL = {
  "ваша локація": "вашої локації",
  "ваше місто": "вашого міста",
  київ: "Києва",
  ріг: "Рогу",
  дніпро: "Дніпра",
};

const VOWELS = "аеєиіїоуюяь";
const HUSHING = "жчшщ";

const keepCase = (source, result) =>
  source[0] === source[0].toUpperCase() && source[0] !== source[0].toLowerCase()
    ? result[0].toUpperCase() + result.slice(1)
    : result;

// Прикметник у складеній назві: Кривий Ріг, Біла Церква, Нова Каховка
const adjectiveGenitive = (word) => {
  if (/ий$/.test(word)) return word.replace(/ий$/, "ого");
  if (/ій$/.test(word)) return word.replace(/ій$/, "ього");
  if (/а$/.test(word)) return word.replace(/а$/, "ої");
  if (/е$/.test(word)) return word.replace(/е$/, "ого");
  return null;
};

const nounGenitive = (word) => {
  const lower = word.toLowerCase();
  if (SPECIAL[lower]) return keepCase(word, SPECIAL[lower]);

  // Множина: Чернівці → Чернівців, Суми → Сум, Черкаси → Черкас
  if (/ці$/.test(lower)) return word + "в";
  if (/[^аеєиіїоуюя]и$/.test(lower) && lower.length > 3) return word.slice(0, -1);

  // Жіночий рід: Одеса → Одеси, Вінниця → Вінниці, Олександрія → Олександрії
  if (/ія$/.test(lower)) return word.slice(0, -1) + "ї";
  if (/я$/.test(lower)) return word.slice(0, -1) + "і";
  if (/а$/.test(lower)) {
    const prev = lower[lower.length - 2];
    return word.slice(0, -1) + (HUSHING.includes(prev) ? "і" : "и");
  }

  // Харків → Харкова, Миколаїв → Миколаєва, Бердичів → Бердичева
  if (/їв$/.test(lower)) return word.slice(0, -2) + "єва";
  if (/[жчшщ]ів$/.test(lower)) return word.slice(0, -2) + "ева";
  if (/ів$/.test(lower)) return word.slice(0, -2) + "ова";
  // Тернопіль → Тернополя
  if (/іль$/.test(lower)) return word.slice(0, -3) + "оля";
  if (/ь$/.test(lower)) return word.slice(0, -1) + "я";

  // Приголосний: Луцьк → Луцька, Ужгород → Ужгорода, Берлін → Берліна
  const last = lower[lower.length - 1];
  if (/[а-яґєії]/.test(last) && !VOWELS.includes(last)) return word + "а";

  // Решта (на -о, -е, -і, -у, латиниця: Токіо, Делі) не відмінюється
  return word;
};

export const toGenitive = (name) => {
  if (!name || typeof name !== "string") return name;
  const trimmed = name.trim();
  const special = SPECIAL[trimmed.toLowerCase()];
  if (special) return special;

  // Відмінюємо лише саму назву, без уточнень після коми чи в дужках
  const match = trimmed.match(/^([^,(]+?)(\s*[,(].*)?$/);
  const main = match ? match[1] : trimmed;
  const rest = match?.[2] || "";

  const words = main.split(" ");
  const declined = words.map((word, i) => {
    // Складні назви через дефіс (Нью-Йорк, Івано-Франківськ) — відмінюється остання частина
    if (word.includes("-")) {
      const parts = word.split("-");
      parts[parts.length - 1] = nounGenitive(parts[parts.length - 1]);
      return parts.join("-");
    }
    if (i < words.length - 1) return adjectiveGenitive(word) ?? word;
    return nounGenitive(word);
  });

  return declined.join(" ") + rest;
};
