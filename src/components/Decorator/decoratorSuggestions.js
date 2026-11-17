// Підказки Декоратора: готові значення CSS з поясненням українською, що вони роблять.
// value — що підставиться в поле, label — пояснення, swatch — показати зразок кольору.

const s = (value, label) => ({ value, label });

export const COLOR_SUGGESTIONS = [
  s("transparent", "Прозорий — колір зникає"),
  s("currentColor", "Як колір тексту елемента"),
  s("inherit", "Як у батьківського елемента"),
  s("#ffffff", "Білий"),
  s("#000000", "Чорний"),
  s("#ffb36c", "Помаранчевий акцент Декоратора"),
  s("#60cdff", "Блакитний"),
  s("#22c55e", "Зелений"),
  s("#ef4444", "Червоний"),
  s("#a855f7", "Фіолетовий"),
  s("#facc15", "Жовтий"),
  s("rgba(0, 0, 0, 0.5)", "Напівпрозорий чорний — для тіней і підкладок"),
  s("rgba(255, 255, 255, 0.1)", "Ледь помітний білий — «скляний» фон"),
].map((item) => ({ ...item, swatch: true }));

// Підказки за camelCase-назвою властивості з Декоратора
export const VALUE_SUGGESTIONS = {
  textDecoration: [
    s("none", "Без лінії — прибрати підкреслення (наприклад, у посилань)"),
    s("underline", "Підкреслення"),
    s("overline", "Лінія над текстом"),
    s("line-through", "Закреслення"),
    s("underline wavy", "Хвиляста лінія знизу, як у перевірці правопису"),
    s("underline dotted", "Підкреслення крапками"),
    s("underline dashed", "Підкреслення рисками"),
    s("underline double", "Подвійне підкреслення"),
    s("underline 2px #ffb36c", "Товсте кольорове підкреслення"),
  ],
  borderRadius: [
    s("0", "Гострі кути"),
    s("4px", "Ледь заокруглені кути"),
    s("8px", "Помірно заокруглені кути"),
    s("16px", "Сильно заокруглені кути"),
    s("999px", "«Пігулка» — круглі краї по боках"),
    s("50%", "Коло або овал"),
    s("16px 0", "Заокруглені лише два протилежні кути"),
    s("16px 16px 0 0", "Заокруглений лише верх"),
  ],
  boxShadow: [
    s("none", "Без тіні"),
    s("0 2px 6px rgba(0,0,0,0.2)", "Легка тінь — елемент трохи над сторінкою"),
    s("0 8px 24px rgba(0,0,0,0.35)", "Глибока м'яка тінь — «висить» над сторінкою"),
    s("0 0 12px #ffb36c", "Кольорове світіння навколо"),
    s("inset 0 2px 6px rgba(0,0,0,0.4)", "Внутрішня тінь — елемент ніби втиснутий"),
    s("4px 4px 0 #000", "Тверда «ретро»-тінь без розмиття"),
    s("0 0 0 3px rgba(255,179,108,0.5)", "Напівпрозоре кільце навколо, як фокус"),
  ],
  textShadow: [
    s("none", "Без тіні тексту"),
    s("0 1px 2px rgba(0,0,0,0.5)", "Легка тінь — текст читається на будь-якому фоні"),
    s("0 0 8px #ffb36c", "Світіння тексту"),
    s("0 0 2px #fff, 0 0 10px #0ff", "Неон — подвійне світіння"),
    s("2px 2px 0 #000", "Тверда тінь, як у коміксах"),
    s("1px 1px 0 #fff, -1px -1px 0 #000", "Об'ємний «тиснений» текст"),
  ],
  backdropFilter: [
    s("none", "Без ефекту"),
    s("blur(4px)", "Легке розмиття того, що під елементом"),
    s("blur(12px)", "Сильне розмиття — «матове скло»"),
    s("blur(10px) saturate(160%)", "Скло з яскравішими кольорами, як в iOS"),
    s("brightness(0.7)", "Затемнити те, що під елементом"),
    s("grayscale(100%)", "Зробити фон під елементом чорно-білим"),
  ],
  filter: [
    s("none", "Без фільтра"),
    s("grayscale(100%)", "Чорно-білий"),
    s("sepia(80%)", "Старе фото — коричневі відтінки"),
    s("blur(2px)", "Розмити сам елемент"),
    s("brightness(1.2)", "Яскравіше"),
    s("brightness(0.8)", "Темніше"),
    s("contrast(1.4)", "Контрастніше"),
    s("saturate(2)", "Насиченіші кольори"),
    s("hue-rotate(90deg)", "Змістити всі відтінки по колу кольорів"),
    s("invert(1)", "Інвертувати кольори, як негатив"),
    s("drop-shadow(0 4px 6px rgba(0,0,0,0.4))", "Тінь по контуру (і для прозорих картинок)"),
  ],
  transform: [
    s("none", "Без трансформації"),
    s("scale(1.05)", "Трохи збільшити"),
    s("scale(0.95)", "Трохи зменшити"),
    s("translateY(-2px)", "Підняти на 2px — добре для :hover"),
    s("rotate(-3deg)", "Злегка нахилити"),
    s("rotate(180deg)", "Перевернути догори дриґом"),
    s("skewX(-8deg)", "Скосити вбік, як курсив"),
    s("perspective(400px) rotateX(10deg)", "3D-нахил назад"),
    s("scaleX(-1)", "Віддзеркалити по горизонталі"),
  ],
  transformOrigin: [
    s("center", "Від центру (типово)"),
    s("top left", "Від верхнього лівого кута"),
    s("top right", "Від верхнього правого кута"),
    s("bottom", "Від нижнього краю"),
    s("50% 100%", "Від середини низу — для «підстрибування»"),
    s("left", "Від лівого краю"),
  ],
  transition: [
    s("none", "Без плавності — зміни миттєві"),
    s("all 0.2s ease", "Усі зміни плавно за 0,2 с"),
    s("all 0.4s ease-in-out", "Повільніше й м'якше"),
    s("all 0.4s cubic-bezier(.2,.9,.3,1.4)", "Пружинисто — з легким «перельотом»"),
    s("transform 0.15s ease", "Плавно лише рух і масштаб"),
    s("background 0.3s, color 0.3s", "Плавно лише кольори"),
  ],
  outline: [
    s("none", "Без контуру"),
    s("2px solid #ffb36c", "Суцільний кольоровий контур"),
    s("2px dashed currentColor", "Штриховий контур кольору тексту"),
    s("3px double #fff", "Подвійний білий контур"),
    s("1px dotted rgba(255,255,255,0.5)", "Тонкий пунктир"),
  ],
};

// Властивості розміщення й видимості: їх зміна легко ламає вигляд сайту або робить його незручним
export const RISKY_PROPS = new Set([
  "width", "height", "min-width", "min-height", "max-width", "max-height",
  "opacity", "display", "visibility", "position", "top", "right", "bottom", "left", "inset",
  "margin", "padding", "font-size", "line-height", "overflow", "z-index", "pointer-events",
  "flex", "flex-direction", "grid-template-columns", "float", "zoom",
  "gap", "row-gap", "column-gap",
]);

const toKebabName = (name) =>
  (name || "").trim().startsWith("--")
    ? (name || "").trim()
    : (name || "").trim().replace(/([A-Z])/g, "-$1").toLowerCase();

export const isRiskyProp = (name) => RISKY_PROPS.has(toKebabName(name));

// «Власний CSS»: властивості з поясненням (⚠ — ризиковані, див. RISKY_PROPS)
const PROPERTY_LIST = [
  s("letter-spacing", "Відстань між літерами"),
  s("word-spacing", "Відстань між словами"),
  s("line-height", "Висота рядка — відстань між рядками тексту"),
  s("font-size", "Розмір шрифту"),
  s("font-weight", "Товщина шрифту (жирність)"),
  s("font-style", "Курсив або звичайний"),
  s("font-family", "Шрифт"),
  s("text-transform", "ВЕЛИКІ, малі або З Великої літери"),
  s("text-align", "Вирівнювання тексту"),
  s("white-space", "Чи переносити текст на новий рядок"),
  s("padding", "Внутрішній відступ — від краю до вмісту"),
  s("margin", "Зовнішній відступ — від сусідніх елементів"),
  s("width", "Ширина"),
  s("height", "Висота"),
  s("max-width", "Найбільша ширина"),
  s("min-height", "Найменша висота"),
  s("gap", "Проміжок між вкладеними елементами (flex/grid)"),
  s("display", "Як елемент розташовується: блок, рядок, flex, прихований"),
  s("visibility", "Сховати, але лишити місце"),
  s("z-index", "Що вище при накладанні елементів"),
  s("background-image", "Фонова картинка або градієнт"),
  s("background-size", "Розмір фонової картинки"),
  s("mix-blend-mode", "Змішування кольорів з тим, що під елементом"),
  s("clip-path", "Обрізати елемент у фігуру (коло, трикутник…)"),
  s("aspect-ratio", "Пропорції сторін"),
  s("overflow", "Що робити з вмістом, який не влазить"),
  s("pointer-events", "Чи реагує елемент на мишку"),
  s("user-select", "Чи можна виділити текст"),
  s("accent-color", "Колір галочок, перемикачів і повзунків"),
  s("caret-color", "Колір курсора введення тексту"),
  s("outline-offset", "Відступ контуру від краю"),
  s("animation", "Анімація з ключовими кадрами"),
  s("opacity", "Прозорість усього елемента: 1 — видно, 0 — зник"),
  s("min-width", "Найменша ширина"),
  s("max-height", "Найбільша висота"),
  s("position", "Спосіб розташування (relative, absolute, sticky…)"),
];

export const PROPERTY_SUGGESTIONS = PROPERTY_LIST.map((item) =>
  RISKY_PROPS.has(item.value) ? { ...item, risky: true } : item,
);

// Значення для властивостей із «Власного CSS» (kebab-case)
export const CUSTOM_VALUE_SUGGESTIONS = {
  "letter-spacing": [s("0.5px", "Трохи ширше"), s("2px", "Розріджено"), s("-0.5px", "Щільніше")],
  "word-spacing": [s("4px", "Ширше між словами"), s("-2px", "Щільніше")],
  "line-height": [s("1", "Щільно, без проміжків"), s("1.5", "Зручно для читання"), s("2", "Просторо")],
  "font-size": [s("12px", "Дрібний"), s("16px", "Звичайний"), s("20px", "Великий"), s("1.5em", "У 1,5 раза більший за батьківський")],
  "font-weight": [s("300", "Тонкий"), s("400", "Звичайний"), s("600", "Напівжирний"), s("800", "Дуже жирний")],
  "font-style": [s("italic", "Курсив"), s("normal", "Звичайний")],
  "font-family": [s("monospace", "Моноширинний, як код"), s("serif", "З засічками, як у книжках"), s("cursive", "Рукописний")],
  "text-transform": [s("uppercase", "УСІ ВЕЛИКІ"), s("lowercase", "усі малі"), s("capitalize", "Кожне Слово З Великої"), s("none", "Як написано")],
  "text-align": [s("left", "Ліворуч"), s("center", "По центру"), s("right", "Праворуч"), s("justify", "По ширині")],
  "white-space": [s("nowrap", "Не переносити — в один рядок"), s("normal", "Переносити як звичайно")],
  padding: [s("4px 8px", "Компактно"), s("8px 16px", "Як у кнопки"), s("16px", "Просторо з усіх боків")],
  margin: [s("0", "Без відступів"), s("8px", "Невеликий відступ"), s("0 auto", "Вирівняти блок по центру")],
  width: [s("100%", "На всю ширину"), s("auto", "За вмістом"), s("fit-content", "Рівно під вміст")],
  height: [s("auto", "За вмістом"), s("100%", "На всю висоту батька")],
  "max-width": [s("600px", "Не ширше за 600px"), s("100%", "Не виходити за батька")],
  "min-height": [s("40px", "Не нижче за 40px"), s("100vh", "Не нижче за екран")],
  gap: [s("4px", "Щільно"), s("8px", "Звичайно"), s("16px", "Просторо")],
  display: [s("none", "Сховати повністю"), s("block", "Блок на всю ширину"), s("inline-block", "У рядку, але з розмірами"), s("flex", "Гнучкий ряд"), s("grid", "Сітка")],
  visibility: [s("hidden", "Невидимий, але місце лишається"), s("visible", "Видимий")],
  "z-index": [s("1", "Трохи вище за сусідів"), s("10", "Вище"), s("-1", "Під сусідами")],
  "background-image": [s("linear-gradient(135deg, #ffb36c, #a855f7)", "Градієнт з помаранчевого у фіолетовий"), s("radial-gradient(circle, #60cdff, transparent)", "Кругле сяйво"), s("none", "Без картинки")],
  "background-size": [s("cover", "Заповнити, обрізавши зайве"), s("contain", "Вмістити повністю"), s("200% 200%", "Удвічі більший — для анімації градієнта")],
  "mix-blend-mode": [s("multiply", "Множення — темніше"), s("screen", "Освітлення"), s("overlay", "Накладання — контрастно"), s("difference", "Різниця — інверсія по фону"), s("normal", "Звичайно")],
  "clip-path": [s("circle(50%)", "Коло"), s("polygon(50% 0, 100% 100%, 0 100%)", "Трикутник"), s("inset(0 round 12px)", "Заокруглений прямокутник"), s("none", "Без обрізання")],
  "aspect-ratio": [s("1", "Квадрат"), s("16 / 9", "Як відео"), s("4 / 3", "Як старий екран")],
  overflow: [s("hidden", "Обрізати зайве"), s("auto", "Прокрутка, коли не влазить"), s("visible", "Показувати все")],
  "pointer-events": [s("none", "Не реагувати на мишку — кліки проходять крізь"), s("auto", "Як звичайно")],
  "user-select": [s("none", "Заборонити виділення тексту"), s("all", "Виділяти все одним кліком"), s("text", "Як звичайно")],
  "accent-color": COLOR_SUGGESTIONS,
  "caret-color": COLOR_SUGGESTIONS,
  "outline-offset": [s("2px", "Контур трохи відступає від краю"), s("-4px", "Контур усередині елемента")],
  animation: [s("none", "Без анімації")],
  opacity: [
    s("1", "Повністю видимий (типово)"),
    s("0.85", "Ледь прозорий"),
    s("0.5", "Напівпрозорий"),
    s("0.2", "Майже прозорий — текст важко читати"),
    s("0", "Невидимий — елемент зникне, і його важко буде знайти"),
  ],
  "min-width": [s("120px", "Не вужче за 120px"), s("0", "Без обмеження")],
  "max-height": [s("300px", "Не вище за 300px (решта сховається або прокрутиться)"), s("none", "Без обмеження")],
  position: [
    s("relative", "Відносно свого місця — безпечно"),
    s("sticky", "Прилипає під час прокрутки"),
    s("absolute", "Вирвати з потоку — сусіди зсунуться"),
    s("static", "Звичайне розташування"),
  ],
};

// Готові градієнти для «Градієнта фону»
export const GRADIENT_SUGGESTIONS = [
  s("linear-gradient(135deg, #ffb36c, #a855f7)", "Захід сонця: помаранчевий → фіолетовий"),
  s("linear-gradient(180deg, #60cdff, #1e3a8a)", "Океан: блакитний зверху → синій знизу"),
  s("linear-gradient(90deg, #22c55e, #facc15)", "Літо: зелений → жовтий зліва направо"),
  s("linear-gradient(135deg, #ff00cc, #3333ff)", "Неон: рожевий → синій"),
  s("linear-gradient(180deg, rgba(255,255,255,0.15), transparent)", "Скляний відблиск зверху"),
  s("linear-gradient(90deg, transparent, rgba(0,0,0,0.6))", "Затемнення праворуч — під текст"),
  s("radial-gradient(circle, #60cdff, transparent)", "Кругле сяйво з центру"),
  s("linear-gradient(135deg, #ffb36c 0%, #ef4444 50%, #a855f7 100%)", "Три кольори з позиціями"),
  s("none", "Без градієнта"),
];

const toKebab = (name) =>
  name.startsWith("--") ? name : name.replace(/([A-Z])/g, "-$1").toLowerCase();

// Розмиття (blur) перемальовує все під елементом щокадру — на слабких пристроях сайт гальмує
export const isSlowValue = (value) => /blur\(/i.test(value || "");

const markSlow = (list) => list.map((item) => (isSlowValue(item.value) ? { ...item, slow: true } : item));
Object.keys(VALUE_SUGGESTIONS).forEach((key) => {
  VALUE_SUGGESTIONS[key] = markSlow(VALUE_SUGGESTIONS[key]);
});
Object.keys(CUSTOM_VALUE_SUGGESTIONS).forEach((key) => {
  CUSTOM_VALUE_SUGGESTIONS[key] = markSlow(CUSTOM_VALUE_SUGGESTIONS[key]);
});

// Підказки значень для будь-якої властивості (camelCase або kebab-case)
export const suggestionsFor = (prop) =>
  VALUE_SUGGESTIONS[prop] || CUSTOM_VALUE_SUGGESTIONS[toKebab(prop || "")] || [];
