// Приклади для «Тренажера розуму»
const randomInt = (max) => Math.floor(Math.random() * max) + 1;
const between = (min, max) => min + randomInt(max - min + 1) - 1;
const pick = (list) => list[randomInt(list.length) - 1];

export const shuffle = (list) =>
  list.map((value) => [Math.random(), value]).sort((a, b) => a[0] - b[0]).map(([, value]) => value);

const EASY = [
  () => {
    const a = randomInt(50);
    const b = randomInt(50);
    return { text: `${a} + ${b} = ?`, answer: a + b };
  },
  () => {
    const a = randomInt(50);
    const b = randomInt(a);
    return { text: `${a} − ${b} = ?`, answer: a - b };
  },
  () => {
    const a = randomInt(10);
    const b = randomInt(10);
    return { text: `${a} × ${b} = ?`, answer: a * b };
  },
];

export const HARD = {
  // Відповідь може бути від'ємною
  subtraction: () => {
    const a = between(100, 999);
    const b = between(100, 999);
    return { text: `${a} − ${b} = ?`, answer: a - b };
  },
  multiplication: () => {
    const a = between(12, 49);
    const b = between(6, 19);
    return { text: `${a} × ${b} = ?`, answer: a * b };
  },
  root: () => {
    if (randomInt(3) === 1) {
      const n = between(2, 6);
      return { text: `∛${n ** 3} = ?`, answer: n };
    }
    const n = between(4, 25);
    return { text: `√${n ** 2} = ?`, answer: n };
  },
  power: () => {
    const [base, exponent, sign] = pick([
      [between(11, 25), 2, "²"],
      [between(3, 9), 3, "³"],
      [between(2, 5), 4, "⁴"],
      [2, between(5, 7), null],
    ]);
    const mark = sign || ["⁵", "⁶", "⁷"][exponent - 5];
    return { text: `${base}${mark} = ?`, answer: base ** exponent };
  },
  equation: () => {
    const x = between(-9, 15);
    const k = between(2, 9);
    const b = between(1, 30);
    return { text: `${k}x + ${b} = ${k * x + b},  x = ?`, answer: x };
  },
  brackets: () => {
    const a = between(5, 30);
    const b = between(2, 20);
    const c = between(3, 9);
    return pick([
      { text: `(${a} + ${b}) × ${c} = ?`, answer: (a + b) * c },
      { text: `${c} × (${a} − ${b}) = ?`, answer: c * (a - b) },
      { text: `${a * c} ÷ (${c + b} − ${b}) + ${b} = ?`, answer: a + b },
    ]);
  },
};

// ── Далі відповіді не лише цілими числами: тоді генератор сам дає неправильні варіанти ──
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));

export const fraction = (num, den) => {
  const d = (gcd(num, den) || 1) * (den < 0 ? -1 : 1);
  const top = num / d || 0;
  const bottom = den / d;
  return bottom === 1 ? `${top}` : `${top}/${bottom}`;
};

// Рахуємо в цілих (десятих, сотих) — без похибок на кшталт 0,1 + 0,2
const decimal = (units, scale, sep) => String(units / scale).replace(".", sep);

export const complex = (re, im) => {
  if (!im) return `${re || 0}`;
  const part = `${Math.abs(im) === 1 ? "" : Math.abs(im)}i`;
  if (!re) return im < 0 ? `−${part}` : part;
  return `${re} ${im < 0 ? "−" : "+"} ${part}`;
};

const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const term = (k, n) => `${k}x${n === 1 ? "" : SUP[n]}`;

const TRIG = [
  ["cos 0°", "1"], ["cos 60°", "1/2"], ["cos 90°", "0"], ["cos 120°", "−1/2"], ["cos 180°", "−1"],
  ["sin 30°", "1/2"], ["sin 90°", "1"], ["tg 0°", "0"], ["tg 45°", "1"], ["tg 135°", "−1"],
  ["tg 60°", "√3"], ["tg 30°", "√3/3"],
];
const TRIG_VALUES = ["0", "1", "−1", "1/2", "−1/2", "√3", "√3/3", "√2/2"];

// Відкриваються після 5 правильних поспіль на складному рівні
export const EXPERT = {
  trigonometry: () => {
    const [name, answer] = pick(TRIG);
    return { text: `${name} = ?`, answer, wrong: TRIG_VALUES };
  },
  logarithm: () => {
    const [mark, base, max] = pick([["log₂", 2, 8], ["log₃", 3, 5], ["log₅", 5, 4], ["lg ", 10, 5]]);
    const n = between(1, max);
    return { text: `${mark}${base ** n} = ?`, answer: n };
  },
  fractions: () => {
    const b = between(2, 9);
    const d = between(2, 9);
    const a = between(1, b - 1);
    const c = between(1, d - 1);
    const [op, num, den] = pick([
      ["+", a * d + c * b, b * d],
      ["−", a * d - c * b, b * d],
      ["×", a * c, b * d],
      ["÷", a * d, b * c],
    ]);
    return {
      text: `${a}/${b} ${op} ${c}/${d} = ?`,
      answer: fraction(num, den),
      wrong: [1, -1, 2, -2, 3, -3].map((step) => fraction(num + step, den)),
    };
  },
  decimals: (sep = ",") => {
    const a = between(11, 99);
    const b = between(2, 99);
    const [op, units, scale] = pick([["+", a + b, 10], ["−", a - b, 10], ["×", a * b, 100]]);
    return {
      text: `${decimal(a, 10, sep)} ${op} ${decimal(b, 10, sep)} = ?`,
      answer: decimal(units, scale, sep),
      wrong: [1, -1, 10, -10, 2, -2].map((step) => decimal(units + step, scale, sep)),
    };
  },
};

// Відкриваються після 10 правильних поспіль на складному рівні
export const MASTER = {
  // Визначений інтеграл від 0 до u з n·xⁿ⁻¹ дорівнює uⁿ
  integral: () => {
    const n = between(2, 4);
    const upper = between(2, n === 4 ? 3 : 5);
    return { text: `∫₀${SUP[upper]} ${term(n, n - 1)} dx = ?`, answer: upper ** n };
  },
  derivative: () => {
    const k = between(2, 9);
    const n = between(2, 5);
    return {
      text: `d/dx (${term(k, n)}) = ?`,
      answer: term(k * n, n - 1),
      wrong: [term(k, n - 1), term(k * n, n), term(k * (n - 1), n - 1), term(k * n + n, n - 1), term(k * n, n + 1)],
    };
  },
  imaginary: () => {
    const a = between(1, 6);
    const b = between(1, 6);
    const c = between(1, 6);
    const d = between(1, 6);
    const [text, re, im] = pick([
      [`(${complex(a, b)}) + (${complex(c, d)})`, a + c, b + d],
      [`(${complex(a, b)}) × (${complex(c, d)})`, a * c - b * d, a * d + b * c],
      ["i²", -1, 0],
      [`${complex(0, a)} × ${complex(0, b)}`, -a * b, 0],
    ]);
    return {
      text: `${text} = ?`,
      answer: complex(re, im),
      wrong: [complex(-re, im), complex(re, -im), complex(re + 1, im), complex(re, im + 1), complex(im, re), complex(re - 2, im)],
    };
  },
};

export const EXPERT_FROM = 5;
export const MASTER_FROM = 10;

// streak — скільки правильних поспіль; sep — десятковий знак мови сайту
export const makeTask = (level, streak = 0, sep = ",") => {
  let makers = EASY;
  let isAdvanced = false;
  if (level === "hard") {
    makers = Object.values(HARD);
    const extra = [
      ...(streak >= EXPERT_FROM ? Object.values(EXPERT) : []),
      ...(streak >= MASTER_FROM ? Object.values(MASTER) : []),
    ];
    // Нові теми випадають приблизно в половині прикладів
    if (extra.length && randomInt(2) === 1) {
      makers = extra;
      isAdvanced = true;
    }
  }
  // За складну тему — бонус: подвійні бали або одноразовий імунітет від помилки
  const bonus = isAdvanced ? pick(["double", "shield"]) : null;
  const { text, answer, wrong } = pick(makers)(sep);
  const options = new Set([answer]);
  if (wrong) {
    for (const option of shuffle(wrong)) {
      if (options.size < 4) options.add(option);
    }
  }
  while (options.size < 4) {
    const option = answer + randomInt(11) - 6;
    // У простому рівні від'ємних чисел немає
    if (level === "hard" || option >= 0) options.add(option);
  }
  return { text, answer, bonus, options: shuffle([...options]) };
};
