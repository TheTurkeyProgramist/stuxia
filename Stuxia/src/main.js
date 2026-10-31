const invoke = window.__TAURI__?.core?.invoke;

// Тривалість заповнення шкали (мс) і як часто міняється текст під нею
const LOADING_MS = 15000;
const TIP_INTERVAL_MS = 5000;

// Ті самі фрази, що й у src/App.jsx (LOADING_PHRASES)
const LOADING_PHRASES = [
  "Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.",
  "Доміно, власник сайту і замку!",
  "Ти теж думаєш, що відсилками можна керувати погодою? :)",
  "Погода така сама загадка і т/с 'Ральна містика'",
  "Хто що любить, хто що шукає? :)",
  "Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.",
  "0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода і відсилки.",
  "«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...",
  "Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)",
  "Знайди речдок у телешоу «Речдок»",
  "Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?",
  "Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)",
  "Ми вас здивуємо багато чим :)",
  "І що всіх тягне на турецькі серіали?",
  "«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара",
  "Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»",
  "Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.",
  "Підтримайте, будь ласка, рекламою нас у соцмережах :)",
  "У вас через сім днів буде хороша погода - поганої ж не існує :)",
  "«Теорія неймовірності» (Макс Кідрук) має одну частину :(",
  "Кейт — складна за характером індичка.",
  "Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)",
  "Хто ваш кумир? Зібров чи Винник?",
  "Багато змін клімату, мультиплікації, моди, життя :(",
  "Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)",
  "Місія неможлива - ніде не помилитись",
  "Льодовиковий період чи глобальне потепління через 24 роки.",
  "Попри все, погода не буває поганою - вона буває різною.",
  "Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик на карті»",
  "Оксану Самойлову з «Україна має талант» хто пам'ятає?",
  "Страху немає, упевненим робиться рух!",
  "Застрягли в минулому :) Але погода - це майбутнє!",
  "Mondo TV - Thanks for legendary cartoons.",
  "Раз, два, три. Погоду нам скажи!",
  "Вверх - ти летиш! Вниз - ти падаєш! ",
  "Чорний айсберг, потопив ......? ",
  "Доміно тривожить Єллоустон",
  "Невже наш світ подібний на сюжет «Гри престолів»... :(",
  "Обереш червону таблетку чи синю(фраза з Матриці...)",
  "Хто придумав фразу? «Як тобі таке Ілон Маск»",
  "Чи є листя у трави?",
  "Єдина ОС де ми недоступні це Temple OS :)",
  "«Дизель Шоу»: Цей світ остаточно тіктокнувся... :(",
  "Не новини, а країна(світ) чудес, бракує лише Аліси... Світ втратив глузд.",
  "Цей сайт це реальна містика :)",
  "Доміно бажає гарної погоди :)",
  "Сутінок - не найкраще, що можете побачити...",
  "Драконяче видання...",
  "Марта - і картини...",
  "Мені одному здається що більшість в політці крихітки Цахеси та безжалісні Ніцерони?",
  "Фрази «Бідний Йорик» і «Бути чи не бути» з якого твору?",
  "Вам приснилися сни про погоду? Бо ви тут! :)",
  "Вам приснився жах що ..е... і ....і. програли і...(Відсилка...)",
  "Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)",
  "Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)",
  "Факт: блискавка в п'ять разів гарячіша за поверхню Сонця — близько 30 000 °C.",
  "Факт: жодна сніжинка не схожа на іншу, але всі вони мають шість променів.",
  "Факт: найнижча температура на Землі — −89,2 °C на станції «Восток» в Антарктиді.",
  "Факт: у пустелі Атакама є місця, де дощу не було сотні років.",
  "Факт: індики бачать кольори краще за людей і мають кут огляду майже 270°.",
  "Факт: одна велика купчаста хмара може важити понад 500 тонн.",
  "Факт: краплі дощу не схожі на сльози — вони сплюснуті, як булочки.",
  "Факт: веселку можна побачити й уночі — це місячна веселка.",
  "Факт: торнадо може мати швидкість вітру понад 480 км/год.",
  "Факт: секвоя «Гіперіон» — найвище дерево у світі, понад 115 метрів.",
  "Факт: восьминоги мають три серця і блакитну кров.",
  "Факт: бамбук може вирости майже на метр за одну добу.",
  "Факт: на острові Комодо живуть справжні дракони — велетенські ящірки, що полюють на оленів.",
  "Факт: грім — це звук розширення повітря, нагрітого блискавкою.",
  "Факт: за запахом дощу стоїть речовина геосмін, і люди відчувають її краще за акул кров.",
  "Факт: мурахи ніколи не сплять так, як ми, — лише короткі дрімки по хвилині.",
  "Факт: найбільший град важив майже кілограм (Бангладеш, 1986).",
  "Факт: Амазонія виробляє власні дощі — дерева випаровують воду, що стає хмарами.",
  "Факт: туман — це хмара, яка просто вирішила полежати на землі :)",
  "Факт: колібрі — єдині птахи, що вміють літати задом наперед.",
  "Факт: на Венері сніг металевий, а на Нептуні вітри досягають 2000 км/год.",
];

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  if (!invoke) {
    greetMsgEl.textContent = `Hello, ${greetInputEl.value}! (без Tauri)`;
  } else {
    greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
  }
  restartAnimation(greetMsgEl, "is-shown");
}

// Перезапускає CSS-анімацію, навіть якщо клас уже стоїть
function restartAnimation(el, className) {
  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
}

function pickTip(current) {
  let next;
  do {
    next = LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)];
  } while (next === current && LOADING_PHRASES.length > 1);
  return next;
}

function startTips(tipEl) {
  tipEl.textContent = pickTip("");
  tipEl.classList.add("is-visible");

  return setInterval(() => {
    tipEl.classList.remove("is-visible");
    setTimeout(() => {
      tipEl.textContent = pickTip(tipEl.textContent);
      tipEl.classList.add("is-visible");
    }, 400);
  }, TIP_INTERVAL_MS);
}

function startLoading() {
  const loaderEl = document.querySelector("#loader");
  const fillEl = document.querySelector("#loader-fill");
  const percentEl = document.querySelector("#loader-percent");
  const tipEl = document.querySelector("#loader-tip");
  const revealEls = [...document.querySelectorAll(".reveal")];

  const tipTimer = startTips(tipEl);
  let pageLoaded = document.readyState === "complete";
  window.addEventListener("load", () => (pageLoaded = true));

  const start = performance.now();
  let shown = 0;

  function frame(now) {
    const t = Math.min((now - start) / LOADING_MS, 1);
    // Поки сторінка не догрузилась, тримаємо шкалу на 95%
    const target = pageLoaded ? t * 100 : Math.min(t * 100, 95);
    shown += (target - shown) * 0.06;
    if (t === 1 && pageLoaded && 100 - shown < 0.5) shown = 100;

    fillEl.style.transform = `scaleX(${shown / 100})`;
    percentEl.textContent = `${Math.floor(shown)}%`;

    for (const el of revealEls) {
      if (!el.classList.contains("is-shown") && shown >= Number(el.dataset.at)) {
        el.classList.add("is-shown");
      }
    }

    if (shown < 100) {
      requestAnimationFrame(frame);
    } else {
      clearInterval(tipTimer);
      loaderEl.classList.add("is-done");
      document.body.classList.remove("is-loading");
    }
  }

  requestAnimationFrame(frame);
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });

  // Легкий «стрибок» поля на кожне натискання клавіші
  greetInputEl.addEventListener("input", () => {
    restartAnimation(greetInputEl, "is-typing");
  });

  startLoading();
});
