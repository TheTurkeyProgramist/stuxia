// Cloudflare-функції (functions/) не можуть тягнути i18n чи React.
//
// i18next під час ініціалізації ставить setTimeout, а в Workers таймери, fetch і випадкові
// числа поза обробником запиту заборонені — деплой падає з «Disallowed operation called within
// global scope» (19.11.2026: functions/api/city-weather.js → weatherConsensus.js → i18n.js).
// Тест обходить усі статичні імпорти функцій і ловить таке ще до деплою.
import { describe, expect, it } from "bun:test";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "../..");
const FUNCTIONS_DIR = path.join(ROOT, "functions");
const FORBIDDEN_PACKAGES = ["i18next", "react-i18next", "i18next-browser-languagedetector", "react", "react-dom"];
const FORBIDDEN_FILES = [path.join(ROOT, "src", "i18n") + path.sep];

const listJs = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return listJs(full);
    return /\.(m?js)$/.test(name) ? [full] : [];
  });

// Лише статичні import/export … from "…" (динамічний import() виконується в обробнику — це можна)
const STATIC_IMPORT_RE = /^\s*(?:import|export)\s[^;]*?from\s*["']([^"']+)["']|^\s*import\s*["']([^"']+)["']/gm;

const resolveRelative = (fromFile, spec) => {
  const base = path.resolve(path.dirname(fromFile), spec);
  for (const candidate of [base, `${base}.js`, `${base}.mjs`, path.join(base, "index.js")]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
};

// Повертає ланцюжок імпортів до першого забороненого модуля (або null)
const findForbidden = (entry) => {
  const seen = new Set();
  const walk = (file, chain) => {
    if (seen.has(file)) return null;
    seen.add(file);
    if (FORBIDDEN_FILES.some((dir) => file.startsWith(dir))) return chain;
    const code = readFileSync(file, "utf8");
    for (const match of code.matchAll(STATIC_IMPORT_RE)) {
      const spec = match[1] || match[2];
      if (spec.startsWith(".")) {
        const next = resolveRelative(file, spec);
        if (!next) continue;
        const hit = walk(next, [...chain, path.relative(ROOT, next)]);
        if (hit) return hit;
      } else {
        const pkg = spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0];
        if (FORBIDDEN_PACKAGES.includes(pkg)) return [...chain, spec];
      }
    }
    return null;
  };
  return walk(entry, [path.relative(ROOT, entry)]);
};

describe("Cloudflare-функції", () => {
  for (const file of listJs(FUNCTIONS_DIR)) {
    it(`${path.relative(ROOT, file)} не тягне i18n / React`, () => {
      const chain = findForbidden(file);
      expect(chain ? chain.join(" → ") : null).toBeNull();
    });
  }
});
