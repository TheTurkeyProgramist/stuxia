// Мальки країн для вибору мови — у тому ж стилі, що й міста часових поясів
// (viewBox 0 0 400 220, горизонт на y = 170, кольори змішуються з --shade на --night).
// Небо й сонце малює LanguageScene, тут лише «суша».

const f = (c) => `fill:color-mix(in srgb,${c},var(--shade) var(--night))`;
const rect = (x, y, w, h, c, rx = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ""} style="${f(c)}"/>`;
const path = (d, c) => `<path d="${d}" style="${f(c)}"/>`;
const circ = (cx, cy, r, c) => `<circle cx="${cx}" cy="${cy}" r="${r}" style="${f(c)}"/>`;
const ell = (cx, cy, rx, ry, c) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" style="${f(c)};stroke:none"/>`;
const line = (d, c, w = 1.2) =>
  `<path d="${d}" style="fill:none;stroke:color-mix(in srgb,${c},var(--shade) var(--night));stroke-width:${w};stroke-linecap:round"/>`;
const ground = (c, y = 170) =>
  `<rect x="-20" y="${y}" width="440" height="${240 - y}" style="${f(c)};stroke:none"/>`;
const water = (y, c = "#4f8fc0") =>
  ground(c, y) + line(`M20 ${y + 12}h40M120 ${y + 22}h50M240 ${y + 10}h45M320 ${y + 26}h50`, "#cfe6f7", 1.4);

// Сітка вікон; частина «вимкнена» за сталим візерунком
const windows = (x, y, cols, rows, dx, dy, w = 6, h = 8, rx = 0.8) => {
  let out = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const off = (r * 7 + c * 3 + x) % 5 === 0 ? " off" : "";
      out += `<rect class="win${off}" x="${x + c * dx}" y="${y + r * dy}" width="${w}" height="${h}" rx="${rx}"/>`;
    }
  }
  return out;
};

// Рослини в групі "sway": у вітряному кліматі хитаються від основи
const sway = (body) => `<g class="sway">${body}</g>`;
const tree = (x, h = 22, c = "#2f6b3a") => sway(ell(x, 170 - h / 2, h / 4.5, h / 2, c));
const roundTree = (x, r = 11, c = "#3f7d3f") => sway(rect(x - 1.5, 158, 3, 12, "#6b4a2e") + circ(x, 152, r, c));
const palm = (x, h = 46) =>
  sway(
    path(`M${x - 2} 170Q${x - 6} ${170 - h / 2} ${x + 2} ${170 - h}L${x + 5} ${170 - h}Q${x - 1} ${170 - h / 2} ${x + 2} 170Z`, "#8a6a44") +
      path(
        `M${x + 3} ${170 - h}q-18 -2 -26 10q14 -10 26 -10q-10 -12 -24 -12q16 2 24 12q4 -14 18 -16q-12 6 -18 16q14 -8 26 2q-14 -6 -26 -2z`,
        "#3f8f4a",
      ),
  );

const svg = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice"><g class="land" stroke="#2b1d2e" stroke-width="1.1" stroke-linejoin="round">${body}</g></svg>`;

// ── Білорусь: Мірський замок ──
const be = svg(
  ground("#7fb05a") +
    water(186, "#5a8fb0") +
    rect(110, 104, 180, 66, "#b5523b") +
    line("M110 120h180M110 140h180", "#efe3d0", 1.6) +
    windows(122, 126, 9, 2, 19, 18, 7, 9) +
    rect(92, 70, 36, 100, "#b5523b") +
    rect(272, 70, 36, 100, "#b5523b") +
    rect(182, 58, 36, 112, "#b5523b") +
    line("M92 90h36M92 112h36M272 90h36M272 112h36M182 80h36M182 104h36", "#efe3d0", 1.6) +
    path("M88 70q22 -34 44 0z", "#3f7d5a") +
    path("M268 70q22 -34 44 0z", "#3f7d5a") +
    path("M178 58q22 -36 44 0z", "#3f7d5a") +
    rect(198, 32, 4, 10, "#3f7d5a") +
    windows(104, 80, 2, 1, 8, 0, 6, 9) +
    windows(284, 80, 2, 1, 8, 0, 6, 9) +
    windows(194, 70, 2, 1, 8, 0, 6, 9) +
    tree(30, 34) +
    tree(52, 26) +
    tree(352, 30) +
    tree(372, 38),
);

// ── Німеччина: Бранденбурзькі ворота ──
const de = svg(
  ground("#cfc6b2") +
    rect(14, 112, 100, 58, "#d8d2c4") +
    windows(22, 122, 6, 3, 15, 15, 7, 9) +
    // Берлінська телевежа (Fernsehturm)
    rect(301, 40, 6, 72, "#c9ccd2") +
    rect(303, 12, 2, 28, "#d9442e") +
    circ(304, 56, 11, "#b8bec8") +
    line("M293 56h22", "#8a919c", 1) +
    rect(286, 112, 100, 58, "#d8d2c4") +
    windows(294, 122, 6, 3, 15, 15, 7, 9) +
    rect(126, 112, 148, 6, "#e6d7b0") +
    [134, 156, 178, 212, 234, 256].map((x) => rect(x, 118, 10, 52, "#eadcb6")).join("") +
    rect(122, 98, 156, 14, "#e6d7b0") +
    line("M126 105h148", "#c9b88f", 1) +
    rect(160, 80, 80, 18, "#e6d7b0") +
    path("M182 80l6 -12h8l2 -8h6l2 8h8l6 12z", "#4f7d6a") +
    tree(118, 20) +
    tree(282, 20),
);

// ── Франція: Ейфелева вежа ──
const fr = svg(
  ground("#8fb36a") +
    rect(-10, 120, 120, 50, "#ebdfc4") +
    path("M-10 120l8 -14h104l8 14z", "#6f7f8f") +
    windows(2, 128, 7, 3, 15, 14, 7, 9) +
    // Скляна піраміда Лувру
    path("M38 170L68 134L98 170Z", "#9fc6dc") +
    line("M68 134V170M53 152h30M45 161h46M68 134L52 170M68 134L84 170", "#6f97b0", 0.8) +
    rect(290, 120, 120, 50, "#ebdfc4") +
    path("M290 120l8 -14h104l8 14z", "#6f7f8f") +
    windows(300, 128, 7, 3, 15, 14, 7, 9) +
    path(
      "M158 170Q184 112 194 40L206 40Q216 112 242 170L224 170Q210 132 200 132Q190 132 176 170Z",
      "#8a6542",
    ) +
    rect(172, 124, 56, 6, "#7a5838") +
    rect(186, 84, 28, 5, "#7a5838") +
    rect(197, 22, 6, 18, "#7a5838") +
    line("M184 112l32 -26M216 112l-32 -26M190 76l20 -30M210 76l-20 -30", "#6b4c2f", 0.8) +
    roundTree(140, 10) +
    roundTree(260, 10),
);

// ── Іспанія: Саграда Фамілія ──
const spire = (x, top, w = 18) =>
  path(`M${x} 170V${top + 30}Q${x + w / 2} ${top - 6} ${x + w} ${top + 30}V170Z`, "#c9a777") +
  circ(x + w / 2, top + 2, 3, "#d9654b") +
  windows(x + w / 2 - 2, top + 40, 1, 4, 0, 18, 4, 9, 2);
// Міська площа Барселони: квартали Ешампле з балконами й платани, без пляжу
const eixample = (x) =>
  path(`M${x} 170V104l8 -8h56l8 8V170Z`, "#ead9bd") +
  path(`M${x - 2} 104l10 -10h56l10 10z`, "#b5523b") +
  windows(x + 8, 110, 4, 3, 15, 19, 7, 11, 1) +
  line(`M${x + 4} 124h64M${x + 4} 143h64`, "#5a4a3a", 1);
const es = svg(
  ground("#bdb3a2") +
    line("M-20 186h440M-20 204h440", "#a89c88", 1) +
    eixample(-6) +
    eixample(328) +
    rect(126, 116, 148, 54, "#c4a06d") +
    path("M150 116l50 -26 50 26z", "#b8925e") +
    spire(132, 54) +
    spire(156, 36) +
    spire(226, 36) +
    spire(250, 54) +
    spire(191, 14) +
    roundTree(98, 12, "#4f8f3f") +
    roundTree(302, 12, "#4f8f3f"),
);

// ── Польща: Старе місто Варшави ──
const plHouse = (x, h, c, roof) =>
  rect(x, 170 - h, 36, h, c) +
  path(`M${x} ${170 - h}l18 -18 18 18z`, roof) +
  windows(x + 6, 178 - h, 3, Math.floor((h - 14) / 18), 9, 18, 6, 9);
const pl = svg(
  ground("#bfb3a0") +
    plHouse(4, 62, "#e8b84a", "#a5443a") +
    plHouse(40, 72, "#d9654b", "#7a3a2e") +
    plHouse(76, 58, "#7fae8a", "#a5443a") +
    plHouse(112, 76, "#e7d3a8", "#7a3a2e") +
    plHouse(148, 64, "#c97b9a", "#a5443a") +
    plHouse(184, 70, "#6fa3c7", "#7a3a2e") +
    rect(232, 100, 120, 70, "#c96f4a") +
    windows(240, 112, 8, 3, 14, 18, 7, 10) +
    rect(276, 46, 32, 54, "#c96f4a") +
    circ(292, 64, 8, "#f4ecd8") +
    path("M276 46l16 -22 16 22z", "#4f8f7a") +
    rect(290, 14, 4, 12, "#4f8f7a") +
    plHouse(360, 66, "#e8b84a", "#a5443a"),
);

// ── Румунія: замок Бран ──
// Сільська хата з червоним дахом
const roHouse = (x, w, h) =>
  rect(x, 170 - h, w, h, "#f4efe4") +
  path(`M${x - 3} ${170 - h}l${w / 2 + 3} -12 ${w / 2 + 3} 12z`, "#b5523b") +
  windows(x + w / 2 - 3, 178 - h, 1, 1, 0, 0, 6, 7);
const ro = svg(
  path("M-20 170Q80 80 200 96Q300 104 420 170Z", "#4f8f4a") +
    ground("#7fb05a") +
    rect(150, 70, 100, 50, "#efe8dc") +
    windows(160, 82, 6, 2, 15, 16, 6, 8) +
    rect(140, 52, 28, 68, "#efe8dc") +
    path("M136 52l18 -26 18 26z", "#b5523b") +
    rect(232, 40, 26, 80, "#efe8dc") +
    path("M228 40l17 -28 17 28z", "#b5523b") +
    path("M150 70l20 -16h60l20 16z", "#b5523b") +
    windows(148, 62, 2, 2, 8, 18, 5, 8) +
    windows(239, 52, 2, 3, 8, 18, 5, 8) +
    roHouse(14, 34, 24) +
    roHouse(84, 28, 20) +
    roHouse(286, 30, 22) +
    roHouse(370, 32, 24) +
    tree(40, 40, "#2f5e33") +
    tree(66, 52, "#2f5e33") +
    tree(330, 46, "#2f5e33") +
    tree(360, 36, "#2f5e33"),
);

// ── Нідерланди: вітряки й канал ──
const mill = (x, s = 1) =>
  path(`M${x - 12 * s} 170L${x - 8 * s} ${170 - 64 * s}H${x + 8 * s}L${x + 12 * s} 170Z`, "#8a5a3c") +
  path(`M${x - 10 * s} ${170 - 64 * s}q${10 * s} -14 ${20 * s} 0z`, "#5a3a2a") +
  rect(x - 4 * s, 170 - 18 * s, 8 * s, 18 * s, "#3a2a20") +
  `<g transform="translate(${x} ${170 - 66 * s}) rotate(20)">` +
  rect(-2 * s, -46 * s, 4 * s, 92 * s, "#efe3c8") +
  rect(-46 * s, -2 * s, 92 * s, 4 * s, "#efe3c8") +
  rect(2 * s, -42 * s, 9 * s, 32 * s, "#c9b89a") +
  rect(-11 * s, 10 * s, 9 * s, 32 * s, "#c9b89a") +
  rect(10 * s, 2 * s, 32 * s, 9 * s, "#c9b89a") +
  rect(-42 * s, -11 * s, 32 * s, 9 * s, "#c9b89a") +
  `</g>`;
const tulips = (y, c) =>
  Array.from({ length: 20 }, (_, i) => circ(8 + i * 20, y, 3.2, c)).join("");
const nl = svg(
  ground("#7fb05a") +
    tulips(180, "#e0483e") +
    tulips(192, "#f2c94c") +
    tulips(204, "#e86aa0") +
    mill(110) +
    mill(300, 0.8) +
    rect(180, 112, 26, 58, "#a5443a") +
    path("M180 112v-8h4v-6h4v-6h10v6h4v6h4v8z", "#a5443a") +
    windows(186, 120, 2, 3, 9, 15, 6, 9) +
    rect(206, 120, 24, 50, "#3f5f7a") +
    path("M206 120v-6h4v-6h16v6h4v6z", "#3f5f7a") +
    windows(211, 128, 2, 2, 8, 16, 6, 9),
);

// ── Греція: Парфенон на Акрополі ──
const el = svg(
  path("M-20 170Q40 104 120 102H290Q350 106 420 170Z", "#c9a77a") +
    ground("#a8b86a") +
    rect(126, 96, 158, 8, "#e9dfc8") +
    rect(120, 104, 170, 4, "#d9cdb0") +
    Array.from({ length: 9 }, (_, i) => rect(132 + i * 17.5, 64, 9, 32, "#efe6d2")).join("") +
    rect(124, 54, 162, 10, "#e9dfc8") +
    path("M124 54L205 34 286 54Z", "#e9dfc8") +
    line("M124 59h162", "#c9b88f", 1) +
    [92, 116, 296, 322].map((x, i) =>
      rect(x, 152 - (i % 2) * 4, 22, 18 + (i % 2) * 4, "#f6f4ee") +
      rect(x + 8, 160, 6, 10, "#2f6fb0") +
      windows(x + 3, 156 - (i % 2) * 4, 1, 1, 0, 0, 4, 4, 0.5),
    ).join("") +
    roundTree(40, 9, "#6f8f4a") +
    roundTree(66, 7, "#6f8f4a") +
    roundTree(350, 9, "#6f8f4a"),
);

// ── Чехія: Прага, Тинський храм і Карлів міст ──
const gothic = (x, top) =>
  rect(x, top + 30, 22, 140 - top, "#5a5560") +
  path(`M${x - 2} ${top + 30}L${x + 11} ${top} ${x + 24} ${top + 30}Z`, "#3d3a40") +
  path(`M${x - 6} ${top + 34}l4 -14 4 14zM${x + 24} ${top + 34}l4 -14 4 14z`, "#3d3a40") +
  windows(x + 8, top + 42, 1, 3, 0, 20, 6, 12, 3);
const cs = svg(
  water(150, "#5a8fb0") +
    rect(-10, 100, 90, 50, "#efd9b0") +
    path("M-10 100l45 -20 45 20z", "#b5523b") +
    windows(2, 110, 5, 2, 15, 18, 7, 9) +
    rect(300, 104, 110, 46, "#e8c99a") +
    path("M300 104l55 -22 55 22z", "#b5523b") +
    windows(310, 114, 6, 2, 15, 16, 7, 9) +
    rect(120, 100, 160, 50, "#e8dcc4") +
    windows(130, 112, 9, 2, 16, 18, 7, 10, 3) +
    gothic(140, 34) +
    gothic(236, 34) +
    rect(-20, 150, 440, 8, "#a89a84") +
    [20, 100, 180, 260, 340].map((x) => path(`M${x} 158h50v22q-25 -18 -50 0z`, "#a89a84")).join(""),
);

// ── Угорщина: Парламент над Дунаєм ──
const hu = svg(
  water(156, "#4f86b0") +
    rect(30, 112, 340, 44, "#efe2c6") +
    path("M30 112l10 -12h320l10 12z", "#a5443a") +
    windows(40, 122, 21, 2, 16, 16, 5, 10, 2.5) +
    path("M164 100q36 -54 72 0z", "#a5443a") +
    rect(197, 58, 6, 16, "#a5443a") +
    rect(164, 92, 72, 20, "#efe2c6") +
    [44, 100, 290, 346].map((x) => rect(x, 84, 10, 28, "#efe2c6") + path(`M${x - 2} 84l7 -18 7 18z`, "#a5443a")).join("") +
    rect(-20, 150, 440, 6, "#b9ab8e"),
);

// ── Швеція: Гамла Стан біля води ──
const svHouse = (x, h, c) =>
  rect(x, 160 - h, 34, h, c) +
  path(`M${x - 2} ${160 - h}h38l-6 -10h-26z`, "#6b4a3a") +
  windows(x + 6, 168 - h, 3, Math.floor((h - 10) / 16), 9, 16, 5, 9);
const sv = svg(
  water(160, "#3f7fb0") +
    svHouse(0, 64, "#e2a34a") +
    svHouse(34, 76, "#c85a3a") +
    svHouse(68, 58, "#f0d27a") +
    svHouse(102, 70, "#d98a5a") +
    svHouse(136, 62, "#e8c49a") +
    rect(230, 84, 30, 76, "#b5523b") +
    path("M226 84l19 -60 19 60z", "#3a3a44") +
    line("M232 74l26 0M236 58h18M240 42h10", "#5a5a66", 1) +
    svHouse(270, 66, "#f0d27a") +
    svHouse(304, 74, "#c85a3a") +
    svHouse(338, 60, "#e2a34a") +
    svHouse(372, 70, "#d98a5a"),
);

// ── Фінляндія: Гельсінський собор ──
const fi = svg(
  ground("#cfd6dc") +
    path("M100 170h200l-10 -12h-180z", "#bfc6cc") +
    rect(120, 92, 160, 66, "#f4f4f2") +
    path("M150 92l50 -16 50 16z", "#f4f4f2") +
    [130, 152, 174, 216, 238, 260].map((x) => rect(x, 104, 8, 54, "#e6e6e2")).join("") +
    rect(176, 52, 48, 28, "#f4f4f2") +
    path("M174 54q26 -46 52 0z", "#4f9a7a") +
    rect(198, 21, 4, 10, "#e0b54a") +
    [118, 270].map((x) => rect(x, 74, 14, 18, "#f4f4f2") + path(`M${x - 2} 76q9 -18 18 0z`, "#4f9a7a")).join("") +
    windows(186, 60, 3, 1, 10, 0, 5, 10, 2.5) +
    roundTree(50, 12) +
    roundTree(350, 12),
);

// ── Болгарія: собор Олександра Невського ──
const dome = (cx, y, r, c) => path(`M${cx - r} ${y}q${r} -${r * 1.6} ${r * 2} 0z`, c) + rect(cx - 1.5, y - r * 0.8 - 8, 3, 8, "#e0b54a");
const bg = svg(
  ground("#b9c09a") +
    rect(110, 118, 180, 52, "#efe6d2") +
    windows(122, 130, 9, 2, 19, 18, 7, 11, 3.5) +
    rect(150, 92, 100, 26, "#efe6d2") +
    rect(178, 68, 44, 24, "#efe6d2") +
    dome(200, 68, 22, "#e0b54a") +
    dome(160, 92, 12, "#5f9a7a") +
    dome(240, 92, 12, "#5f9a7a") +
    dome(124, 118, 10, "#5f9a7a") +
    dome(276, 118, 10, "#5f9a7a") +
    rect(296, 70, 22, 100, "#efe6d2") +
    dome(307, 70, 11, "#e0b54a") +
    windows(304, 86, 1, 3, 0, 22, 6, 12, 3) +
    roundTree(50, 13) +
    roundTree(360, 11),
);

// ── Литва: вежа Гедиміна ──
const lt = svg(
  path("M100 170Q160 86 240 90Q300 96 340 170Z", "#4f8f4a") +
    ground("#7fb05a") +
    path("M196 92V40l12 -6 12 6v52z", "#b5523b") +
    path("M194 40l14 -14 14 14z", "#7a3a2e") +
    rect(207, 6, 2, 20, "#5a4a3a") +
    rect(209, 6, 16, 4, "#f2c94c") +
    rect(209, 10, 16, 4, "#3f8f4a") +
    rect(209, 14, 16, 4, "#c8423a") +
    windows(202, 50, 2, 2, 8, 18, 5, 9, 2.5) +
    rect(20, 120, 50, 50, "#f4f4f2") +
    rect(32, 70, 26, 50, "#f4f4f2") +
    path("M30 70l15 -22 15 22z", "#7a8a9a") +
    windows(38, 80, 2, 2, 8, 16, 5, 9, 2.5) +
    rect(320, 128, 70, 42, "#e8c99a") +
    path("M320 128l35 -18 35 18z", "#b5523b") +
    windows(328, 138, 4, 2, 15, 15, 7, 9) +
    tree(120, 30, "#2f5e33") +
    tree(280, 34, "#2f5e33"),
);

// ── Японія: Фудзі, пагода й сакура ──
const sakura = (x, r = 13) => sway(rect(x - 2, 154, 4, 16, "#6b4a3a") + circ(x, 148, r, "#f4a7c4") + circ(x + r * 0.7, 152, r * 0.7, "#f7bdd3"));
const ja = svg(
  path("M40 170L170 50Q200 40 230 50L360 170Z", "#6f7fa8") +
    path("M150 70L170 50Q200 40 230 50L250 70Q232 64 220 74Q206 62 194 74Q182 64 168 76Z", "#f4f6fa") +
    ground("#8fb36a") +
    [0, 1, 2, 3, 4].map((i) => {
      const y = 152 - i * 20;
      const w = 52 - i * 7;
      return rect(80 - w / 2 + 6, y, w - 12, 18, "#c8423a") + path(`M${80 - w / 2 - 6} ${y}h${w + 12}l-8 -6h${-(w - 4)}z`, "#3a3030");
    }).join("") +
    rect(78, 56, 4, 16, "#3a3030") +
    rect(278, 122, 6, 48, "#d9442e") +
    rect(326, 122, 6, 48, "#d9442e") +
    path("M266 118h78l-4 -8h-70z", "#d9442e") +
    rect(272, 130, 66, 5, "#d9442e") +
    sakura(30) +
    sakura(140, 11) +
    sakura(372),
);

// ── Іран: вежа Азаді та Альборз ──
const fa = svg(
  path("M-20 170L60 70 120 120 200 50 280 116 340 76 420 170Z", "#9a8f8a") +
    path("M42 92L60 70 78 86M182 66L200 50 218 66M326 92L340 76 354 90", "#f4f6fa") +
    ground("#d6c7a0") +
    // Вежа Мілад
    rect(291, 44, 6, 126, "#c9c6c0") +
    rect(293, 12, 2, 32, "#c9c6c0") +
    path("M278 72q16 -18 32 0q-16 9 -32 0z", "#b0aca6") +
    windows(282, 66, 4, 1, 7, 0, 4, 4, 0.5) +
    path("M144 170Q170 120 182 64L218 64Q230 120 256 170L232 170Q216 124 200 120Q184 124 168 170Z", "#ece7dc") +
    rect(178, 48, 44, 18, "#ece7dc") +
    rect(188, 38, 24, 10, "#ece7dc") +
    line("M182 64l-14 106M218 64l14 106", "#cfc6b4", 1) +
    windows(184, 52, 4, 1, 9, 0, 5, 8, 2.5) +
    roundTree(60, 10, "#5f8f4a") +
    roundTree(340, 10, "#5f8f4a"),
);

// ── Сомалі: океан із дау, червона земля, верблюди й акація ──
// Верблюд дивиться праворуч, ноги стоять на y = 200
const camel = (x) =>
  path(
    `M${x} 176Q${x + 6} 160 ${x + 14} 162Q${x + 20} 162 ${x + 24} 172L${x + 30} 170L${x + 36} 158L${x + 43} 157L${x + 44} 161L${x + 38} 163L${x + 33} 177L${x + 29} 183V200H${x + 26}V185H${x + 9}V200H${x + 6}V184Q${x} 182 ${x} 176Z`,
    "#7a4a2a",
  );
const so = svg(
  water(140, "#2f9fc4") +
    ground("#c27a4a", 160) +
    // Дау — традиційне вітрильне судно Африканського Рогу
    path("M34 150h66l-9 9h-50z", "#6b4a2e") +
    path("M66 150V108L100 146Z", "#f6f4ee") +
    path("M62 150V120L42 146Z", "#efe6d2") +
    rect(204, 116, 56, 44, "#f6f4ee") +
    windows(212, 124, 3, 2, 15, 16, 8, 11, 4) +
    rect(264, 128, 44, 32, "#f6f4ee") +
    rect(264, 128, 44, 5, "#3f8fc0") +
    windows(272, 140, 2, 1, 18, 0, 8, 11, 4) +
    rect(314, 112, 56, 48, "#f6f4ee") +
    path("M320 112q22 -30 44 0z", "#f6f4ee") +
    rect(374, 62, 12, 98, "#f6f4ee") +
    path("M372 62l8 -16 8 16z", "#3f8fc0") +
    windows(322, 126, 3, 1, 16, 0, 7, 12, 3.5) +
    // Акація з плоскою кроною
    sway(path("M166 190l3 -42h4l3 42z", "#5a3a22") + path("M170 152l-12 -10M172 150l12 -10", "#5a3a22") + ell(171, 138, 38, 9, "#5f8a3a")) +
    camel(30) +
    camel(92),
);

// ── Кечуа (Перу): Мачу-Пікчу з терасами й Уайна-Пікчу ──
// Лама дивиться праворуч, ноги стоять на y = 200
const llama = (x) =>
  path(
    `M${x} 186q0 -6 6 -6h18l2 -20l-2 -4l3 -4l2 3l2 -3l2 4q2 2 0 5l-1 3l-3 22q4 2 4 8v12h-3v-10h-4v10h-3v-10h-12v10h-3v-10h-3v10h-3z`,
    "#f2ead8",
  ) + circ(x + 30, 154, 0.9, "#2b1d2e");
// Тераса: трав'яний верх і кам'яна стінка; вгору звужуються вздовж схилу
const terraces = Array.from({ length: 6 }, (_, i) => {
  const y = 160 - i * 10;
  const x0 = -10 + i * 6;
  const x1 = 230 - i * 14;
  return rect(x0, y + 6, x1 - x0, 4, "#8a8273") + rect(x0, y, x1 - x0, 6, "#8fbf6a");
}).join("");
const incaHouse = (x) =>
  rect(x, 90, 32, 20, "#a39b8a") +
  path(`M${x - 3} 90l19 -14 19 14z`, "#b8924e") +
  path(`M${x + 12} 110l2 -12h4l2 12z`, "#3a3530");
const qu = svg(
  path("M-20 170L40 96 90 130 150 80 210 140 260 100 330 150 420 110V170Z", "#7d9aa8") +
    path("M236 170Q256 104 280 44Q292 36 300 52Q312 96 340 170Z", "#3f7d4a") +
    path("M-20 170V108Q60 92 150 100L240 170Z", "#5f8f5a") +
    ground("#6fa04f") +
    terraces +
    incaHouse(34) +
    incaHouse(80) +
    incaHouse(126) +
    llama(300) +
    llama(350),
);

export const LANGUAGE_SCENES = { be, de, fr, es, pl, ro, nl, el, cs, hu, sv, fi, bg, lt, ja, fa, so, qu };

// Для решти мов — готові мальки міст із часових поясів
export const LANGUAGE_CITY_SVGS = {
  uk: "europe_kyiv",
  en: "europe_london",
  it: "europe_rome",
  pt: "america_sao_paulo",
  tr: "europe_istanbul",
  zh: "asia_shanghai",
  ko: "asia_seoul",
  ar: "asia_dubai",
};

// Світанкове небо — для Японії та Кореї, нічне з ліхтариками — для Китаю; решта — день
export const DAWN_LANGUAGES = new Set(["ja", "ko"]);
export const NIGHT_LANGUAGES = new Set(["zh"]);

// Клімат сцени: сніг, туман, вітер (дерева хитаються) або марево від спеки
export const LANGUAGE_CLIMATES = {
  fi: "snow",
  sv: "snow",
  lt: "snow",
  be: "snow",
  nl: "wind",
  en: "fog",
  ja: "wind",
  qu: "wind",
  ar: "heat",
  so: "heat",
  fa: "heat",
  es: "heat",
};

// Перефарбування готових мальків, щоб землі різних країн не зливались:
// пісок Дубая — у помаранчеву пустелю (інакше схожий на пляж Бразилії)
export const LANGUAGE_CITY_RECOLOR = {
  ar: { "#e3c77d": "#d89a52" },
};
