import { HARD, EXPERT, MASTER, fraction, complex, makeTask } from "./mathTasks.js";

// "3/4", "−1/2", "2,5" → число
const value = (text) => {
  const [top, bottom = 1] = String(text).replace("−", "-").replace(",", ".").split("/");
  return Number(top) / Number(bottom);
};
const repeat = (fn) => {
  for (let i = 0; i < 400; i += 1) fn();
};

describe("теми після серії правильних відповідей", () => {
  test.each(["fractions", "decimals"])("%s: відповідь правильна, інші варіанти — ні", (kind) => {
    repeat(() => {
      const task = EXPERT[kind](",");
      const [left, op, right] = task.text.replace(" = ?", "").split(" ");
      const a = value(left);
      const b = value(right);
      const expected = { "+": a + b, "−": a - b, "×": a * b, "÷": a / b }[op];
      expect(value(task.answer)).toBeCloseTo(expected, 9);
      for (const wrong of task.wrong) expect(Math.abs(value(wrong) - expected)).toBeGreaterThan(1e-9);
    });
  });

  test("логарифми та інтеграли", () => {
    repeat(() => {
      const log = EXPERT.logarithm();
      const [, mark, number] = log.text.match(/^(log₂|log₃|log₅|lg )(\d+)/);
      const base = { "log₂": 2, "log₃": 3, "log₅": 5, "lg ": 10 }[mark];
      expect(base ** log.answer).toBe(Number(number));

      const integral = MASTER.integral();
      const upper = "⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(integral.text[2]);
      const n = Number(integral.text.split(" ")[1].match(/^\d+/)[0]);
      expect(integral.answer).toBe(upper ** n);
    });
  });

  test("запис дробів і комплексних чисел", () => {
    expect(fraction(4, 8)).toBe("1/2");
    expect(fraction(6, 3)).toBe("2");
    expect(fraction(0, 5)).toBe("0");
    expect(fraction(-2, 4)).toBe("-1/2");
    expect(complex(2, -1)).toBe("2 − i");
    expect(complex(0, 3)).toBe("3i");
    expect(complex(-5, 0)).toBe("-5");
  });

  test("бонус буває лише за складну тему після 5 поспіль", () => {
    const bonuses = new Set();
    repeat(() => {
      expect(makeTask("easy", 40).bonus).toBeNull();
      expect(makeTask("hard", 4).bonus).toBeNull();
      bonuses.add(makeTask("hard", 5).bonus);
    });
    expect([...bonuses].sort()).toEqual(["double", null, "shield"].sort());
  });

  test("завжди 4 різні варіанти з правильним", () => {
    for (let i = 0; i < 3000; i += 1) {
      const task = makeTask("hard", 15, ",");
      expect(new Set(task.options).size).toBe(4);
      expect(task.options).toContain(task.answer);
    }
    for (const make of [...Object.values(EXPERT), ...Object.values(MASTER)]) {
      repeat(() => {
        const task = make(",");
        if (task.wrong) {
          expect(new Set(task.wrong.filter((w) => w !== task.answer)).size).toBeGreaterThanOrEqual(3);
        }
      });
    }
  });
});

const SUPER = { "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7 };

// Незалежно рахуємо те, що бачить людина, і звіряємо з відповіддю
const solve = (text) => {
  const equation = text.match(/^(\d+)x \+ (\d+) = (-?\d+),/);
  if (equation) {
    const [, k, b, result] = equation.map(Number);
    return (result - b) / k;
  }
  const expression = text
    .replace(" = ?", "")
    .replace(/√(\d+)/, "Math.sqrt($1)")
    .replace(/∛(\d+)/, "Math.cbrt($1)")
    .replace(/[²³⁴⁵⁶⁷]/, (mark) => `**${SUPER[mark]}`)
    .replaceAll("−", "-")
    .replaceAll("×", "*")
    .replaceAll("÷", "/");
  return new Function(`return ${expression};`)();
};

const check = (task) => {
  expect(solve(task.text)).toBe(task.answer);
};

describe("тренажер розуму", () => {
  test.each(Object.keys(HARD))("складний приклад: %s", (kind) => {
    for (let i = 0; i < 300; i += 1) check(HARD[kind]());
  });

  test.each(["easy", "hard"])("%s: 4 різні варіанти, серед них правильний", (level) => {
    for (let i = 0; i < 500; i += 1) {
      const task = makeTask(level);
      check(task);
      expect(new Set(task.options).size).toBe(4);
      expect(task.options).toContain(task.answer);
      if (level === "easy") expect(Math.min(...task.options)).toBeGreaterThanOrEqual(0);
    }
  });
});
