// Плагін збірки: кожна іконка react-icons — окремий маленький модуль.
//
// Навіщо: набір іконок (react-icons/fa, /gi…) — це ОДИН файл на сотні іконок. Збирач не вміє
// розрізати один модуль між частинами, тож усі іконки набору, використані будь-де на сайті
// (і в модалках, що відкриваються пізніше), потрапляли в стартовий vendor-ui (~350 КБ,
// PageSpeed: «~80 КБ невикористаного JavaScript»).
//
// Що робить: у наших файлах переписує
//   import { FaSun, FaMoon as Moon } from "react-icons/fa";
// на
//   import { FaSun } from "\0react-icon:fa:FaSun";
//   import { FaMoon as Moon } from "\0react-icon:fa:FaMoon";
// а модуль кожної іконки збирає з тексту її функції в react-icons/<набір>/index.mjs.
// Тоді іконка їде разом з тим кодом, якому вона потрібна.
//
// Працює лише під час збірки (у dev — звичайні імпорти).

import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const PREFIX = "\0react-icon:";
const IMPORT_RE = /import\s*\{([^}]*)\}\s*from\s*(['"])react-icons\/([a-z0-9]+)\2\s*;?/g;

export default function reactIconsSplit() {
  const setSources = new Map();

  const readSet = (set) => {
    if (!setSources.has(set)) {
      const file = path.resolve(process.cwd(), "node_modules/react-icons", set, "index.mjs");
      setSources.set(set, readFileSync(file, "utf8"));
    }
    return setSources.get(set);
  };

  return {
    name: "react-icons-split",
    apply: "build",
    enforce: "pre",

    transform(code, id) {
      if (id.includes("node_modules") || !/\.(m?jsx?|tsx?)$/.test(id.split("?")[0])) return null;
      if (!code.includes("react-icons/")) return null;
      let changed = false;
      const out = code.replace(IMPORT_RE, (match, specifiers, _quote, set) => {
        const parts = specifiers
          .replace(/\/\*[\s\S]*?\*\//g, "")
          .replace(/\/\/.*$/gm, "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        if (parts.length === 0) return match;
        changed = true;
        return parts
          .map((spec) => {
            const name = spec.split(/\s+as\s+/)[0].trim();
            return `import { ${spec} } from ${JSON.stringify(`${PREFIX}${set}:${name}`)};`;
          })
          .join("\n");
      });
      return changed ? { code: out, map: null } : null;
    },

    resolveId(id) {
      return id.startsWith(PREFIX) ? id : null;
    },

    load(id) {
      if (!id.startsWith(PREFIX)) return null;
      const [set, name] = id.slice(PREFIX.length).split(":");
      const source = readSet(set);
      const start = source.indexOf(`export function ${name} (props) {`);
      const end = start === -1 ? -1 : source.indexOf("\n};", start);
      if (start === -1 || end === -1) {
        this.error(`react-icons-split: іконку ${name} не знайдено в react-icons/${set}`);
      }
      return `import { GenIcon } from "react-icons/lib";\n${source.slice(start, end + 3)}\n`;
    },
  };
}
