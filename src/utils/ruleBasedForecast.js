/**
 * ruleBasedForecast.js
 * Автономний експертний рушій погодного прогнозу на основі набору функцій,
 * метеорологічних умов та евристичних збігів (без виклику ШІ та без сторонніх запитів).
 * Тексти позбавлені сирих емодзі задля використання нативних React-іконок.
 */

// Допоміжна функція парсингу числових значень
const parseNum = (val, fallback = 0) => {
  if (val === null || val === undefined) return fallback;
  if (typeof val === "number") return isNaN(val) ? fallback : val;
  const match = String(val).match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : fallback;
};

// Форматування температури із знаком
const formatTempWithSign = (val, unit = "C") => {
  const num = parseNum(val, null);
  if (num === null) return "—";
  let displayNum;
  let symbol = "°C";

  if (unit === "F") {
    displayNum = Math.round((num * 9) / 5 + 32);
    symbol = "°F";
  } else if (unit === "K") {
    displayNum = Math.round((num + 273.15) * 10) / 10;
    symbol = "K";
  } else {
    displayNum = Math.round(num * 10) / 10;
  }

  const sign = displayNum > 0 ? "+" : "";
  return `${sign}${displayNum}${symbol}`;
};

/**
 * 1. Аналіз балансу "день vs ніч" та добової амплітуди
 */
export const analyzeDayNightContrast = (current, todayDaily, unit = "C") => {
  const currentTemp = parseNum(current?.temp, 0);
  const feelsLike = parseNum(current?.feels_like, currentTemp);
  const dayTemp = parseNum(todayDaily?.temp_day, currentTemp);
  const nightTemp = parseNum(todayDaily?.temp_night, currentTemp - 4);

  const delta = Math.round((dayTemp - nightTemp) * 10) / 10;
  const feelsDiff = Math.round((feelsLike - currentTemp) * 10) / 10;

  let message;
  let badge = null;

  if (delta >= 11) {
    badge = `Контраст день/ніч: ${delta}°C`;
    message = `Сьогодні вдень очікується близько ${formatTempWithSign(dayTemp, unit)}, проте вночі стовпчики термометрів різко опустяться до ${formatTempWithSign(nightTemp, unit)} (добова амплітуда ${delta}°C). Вечір буде значно прохолоднішим, тому теплий верхній одяг буде обов'язковим.`;
  } else if (delta >= 7) {
    badge = `Помірний спад до ночі`;
    message = `Денна температура становитиме близько ${formatTempWithSign(dayTemp, unit)}, а нічна знизиться до ${formatTempWithSign(nightTemp, unit)}. Різниця у ${delta}°C є типовою, але вимагатиме теплішого шару одягу після заходу сонця.`;
  } else if (delta <= 3 && delta >= -1) {
    badge = `Рівна доба`;
    message = `Добові коливання мінімальні: вдень близько ${formatTempWithSign(dayTemp, unit)}, а вночі ${formatTempWithSign(nightTemp, unit)}. Щільна хмарність або волога повітряна маса утримують стабільний температурний фон без різких перепадів.`;
  } else {
    message = `Сьогодні температурний графік: вдень ${formatTempWithSign(dayTemp, unit)}, вночі близько ${formatTempWithSign(nightTemp, unit)}.`;
  }

  // Додаємо аналіз відчуття (вітер / вологість)
  if (feelsDiff <= -3) {
    message += ` Через пориви вітру та сирість температура відчувається на ${Math.abs(feelsDiff)}°C нижче за реальну (${formatTempWithSign(feelsLike, unit)}).`;
  } else if (feelsDiff >= 3) {
    message += ` Через високу вологість відчувається тепліше та душніше (${formatTempWithSign(feelsLike, unit)}).`;
  }

  let warning = null;
  // Попередження про заморозки/ожеледь
  if (nightTemp <= 0 && dayTemp > 0) {
    warning = `Увага: вночі можливі приморозки або ожеледиця на мокрих ділянках доріг!`;
    message += ` ${warning}`;
  }

  return {
    dayTemp,
    nightTemp,
    delta,
    feelsLike,
    badge,
    message,
    warning,
  };
};

/**
 * 2. Годинний аналіз доби: чи піде дощ з другої половини дня, коли пік тепла, вітер
 */
export const analyzeHourlyTimeline = (hourly = [], unit = "C") => {
  if (!Array.isArray(hourly) || hourly.length === 0) {
    return {
      rainWindowText: "Дані про годинний графік відсутні.",
      peakTempText: "",
      windTrendText: "",
      badges: [],
      windWarning: null,
    };
  }

  const next24 = hourly.slice(0, 24);
  const badges = [];

  // Парсинг годин для аналізу частин доби
  const itemsWithHour = next24.map((item) => {
    let hourNum = 12;
    if (item.time) {
      const match = item.time.match(/(\d{1,2})/);
      if (match) hourNum = parseInt(match[1], 10);
    }
    const temp = parseNum(item.tempNum ?? item.temp, 0);
    const pop = parseNum(item.pop, 0);
    const wind = parseNum(item.windNum ?? item.wind_speed, 0);
    const desc = (item.description || item.iconPlaceholder || "").toLowerCase();
    const isRain =
      pop >= 40 ||
      desc.includes("дощ") ||
      desc.includes("злива") ||
      desc.includes("rain") ||
      desc.includes("гроза");
    return { ...item, hourNum, temp, pop, wind, isRain, desc };
  });

  // Пошук опадів: перша половина дня (до 14:00) vs друга половина дня (14:00 - 22:00)
  const morningRain = itemsWithHour.filter(
    (h) => h.hourNum >= 6 && h.hourNum < 14 && h.isRain
  );
  const afternoonRain = itemsWithHour.filter(
    (h) => h.hourNum >= 14 && h.hourNum <= 22 && h.isRain
  );
  const nightRain = itemsWithHour.filter(
    (h) => (h.hourNum < 6 || h.hourNum > 22) && h.isRain
  );

  let rainWindowText;

  if (afternoonRain.length > 0 && morningRain.length === 0) {
    const firstRainHour = afternoonRain[0].time || `${afternoonRain[0].hourNum}:00`;
    badges.push("З другої половини дня дощ");
    rainWindowText = `З другої половини дня очікуються опади: орієнтовно після ${firstRainHour} небо затягне дощовою хмарністю (ймовірність до ${afternoonRain[0].pop || 65}%). Перша половина дня мине без істотних опадів, тож вуличні справи варто запланувати до обіду.`;
  } else if (morningRain.length > 0 && afternoonRain.length === 0) {
    badges.push("Дощ у першій половині дня");
    rainWindowText = `Основні опади зосереджені в першій половині дня. Ближче до обіду та у другій половині дня дощовий фронт відступить, погода почне поступово прояснюватися.`;
  } else if (morningRain.length > 0 && afternoonRain.length > 0) {
    badges.push("Затяжні опади");
    rainWindowText = `Опади очікуються як у першій, так і в другій половині дня. Парасоля та вологозахисне взуття знадобляться протягом усього дня.`;
  } else if (nightRain.length > 0) {
    badges.push("Нічний дощ");
    rainWindowText = `Вдень суттєвих опадів не прогнозується, проте пізно ввечері або вночі можливий локальний дощ.`;
  } else {
    badges.push("Без опадів протягом дня");
    rainWindowText = `У найближчі 24 години опадів не очікується. Зберігатиметься комфортна суха погода.`;
  }

  // Пік тепла та похолодання
  let maxItem = itemsWithHour[0];
  let minItem = itemsWithHour[0];
  itemsWithHour.forEach((it) => {
    if (it.temp > maxItem.temp) maxItem = it;
    if (it.temp < minItem.temp) minItem = it;
  });

  const peakTempText = `Добовий максимум очікується о ${maxItem.time || `${maxItem.hourNum}:00`} (${formatTempWithSign(maxItem.temp, unit)}), тоді як мінімальна позначка (${formatTempWithSign(minItem.temp, unit)}) зафіксується о ${minItem.time || `${minItem.hourNum}:00`}.`;

  // Аналіз вітру
  const maxWindItem = itemsWithHour.reduce((prev, curr) =>
    curr.wind > prev.wind ? curr : prev, itemsWithHour[0]
  );

  let windTrendText;
  let windWarning = null;
  const roundedWind = Math.round(maxWindItem.wind);

  if (roundedWind >= 10) {
    badges.push(`Пориви вітру до ${roundedWind} м/с`);
    windWarning = `Увага, сильний вітер до ${roundedWind} м/с: в районі ${maxWindItem.time || `${maxWindItem.hourNum}:00`} посиляться пориви вітру — будьте обережні поблизу старих дерев і легких конструкцій.`;
    windTrendText = windWarning;
  } else if (roundedWind >= 6) {
    windTrendText = `Вітровий режим помірний: максимальні пориви досягнуть близько ${roundedWind} м/с.`;
  } else {
    windTrendText = `Вітер спокійний та слабкий (до ${roundedWind || 2} м/с), сприятливий для прогулянок.`;
  }

  return {
    rainWindowText,
    peakTempText,
    windTrendText,
    windWarning,
    maxWind: roundedWind,
    badges,
  };
};

/**
 * 3. Тижневий аналіз динаміки: "підйом різко підніметься", похолодання, хвилі тепла
 */
export const analyzeWeeklyTrends = (daily16 = [], unit = "C") => {
  if (!Array.isArray(daily16) || daily16.length < 3) {
    return {
      trendText: "Недостатньо даних для довгострокового аналізу тенденції.",
      jumpBadge: null,
      weekSummaryText: "",
    };
  }

  const days = daily16.slice(0, 10).map((d, idx) => ({
    index: idx,
    date: d.date || d.day || `День ${idx + 1}`,
    dayName: d.day || d.dayName || "",
    tempDay: parseNum(d.temp_day, 0),
    tempNight: parseNum(d.temp_night, 0),
    pop: parseNum(d.pop, 0),
    desc: (d.description || "").toLowerCase(),
  }));

  const startTemp = days[0].tempDay;
  let maxJump = 0;
  let jumpDay = null;
  let maxDrop = 0;
  let dropDay = null;

  for (let i = 1; i < days.length; i++) {
    const diff = days[i].tempDay - startTemp;
    if (diff > maxJump) {
      maxJump = diff;
      jumpDay = days[i];
    }
    if (diff < maxDrop) {
      maxDrop = diff;
      dropDay = days[i];
    }
  }

  let trendText;
  let jumpBadge;

  if (maxJump >= 5 && jumpDay) {
    jumpBadge = `Різкий підйом: +${Math.round(maxJump)}°C`;
    trendText = `На тижні очікується різкий підйом температури: починаючи з ${jumpDay.dayName || jumpDay.date}, повітря прогріється до ${formatTempWithSign(jumpDay.tempDay, unit)} (підйом одразу на +${Math.round(maxJump)}°C у порівнянні з початком періоду). Зайде тепла повітряна маса!`;
  } else if (maxDrop <= -5 && dropDay) {
    jumpBadge = `Різкий спад: ${Math.round(maxDrop)}°C`;
    trendText = `На зміну теплій погоді насувається різке похолодання: до ${dropDay.dayName || dropDay.date} стовпчики термометрів впадуть до ${formatTempWithSign(dropDay.tempDay, unit)} (падіння на ${Math.abs(Math.round(maxDrop))}°C). Підготуйте тепліші речі наперед.`;
  } else {
    jumpBadge = `Стабільний тиждень`;
    trendText = `На найближчий тиждень різких температурних стрибків не передбачається: температура коливатиметься у межах від ${formatTempWithSign(Math.min(...days.map((d) => d.tempDay)), unit)} до ${formatTempWithSign(Math.max(...days.map((d) => d.tempDay)), unit)}. Синоптична ситуація залишатиметься прогнозованою.`;
  }

  // Кількість дощових днів
  const rainyDaysCount = days.filter(
    (d) => d.pop >= 45 || d.desc.includes("дощ") || d.desc.includes("злив")
  ).length;

  let weekSummaryText;
  if (rainyDaysCount >= 4) {
    weekSummaryText = `Загалом тиждень буде вологим та дощовим (${rainyDaysCount} з ${days.length} днів очікуються з опадами).`;
  } else if (rainyDaysCount === 0) {
    weekSummaryText = `Попереду сухий та сприятливий період без суттєвих опадів.`;
  } else {
    weekSummaryText = `Опади матимуть періодичний або локальний характер (дощових днів: близько ${rainyDaysCount}).`;
  }

  return {
    trendText,
    jumpBadge,
    weekSummaryText,
  };
};

/**
 * 4. Аналіз атмосфери, тиску, вологості та комфорту людини
 */
export const analyzeAtmosphereAndHealth = (current) => {
  const pressure = parseNum(current?.pressure, 1013);
  const humidity = parseNum(current?.humidity, 50);
  const uvi = parseNum(current?.uvi, 0);

  const items = [];

  // Тиск
  if (pressure < 1005) {
    items.push({
      type: "pressure_low",
      title: "Знижений атмосферний тиск",
      text: `Тиск становить ${pressure} гПа, що свідчить про наближення циклонічної зони негоди. Метеозалежні люди можуть відчувати втому, головний біль та зниження працездатності.`,
    });
  } else if (pressure > 1022) {
    items.push({
      type: "pressure_high",
      title: "Високий атмосферний тиск",
      text: `Барометричний тиск підвищений (${pressure} гПа), обумовлений впливом антициклону — очікується суха та спокійна погода.`,
    });
  }

  // Вологість
  if (humidity >= 85) {
    items.push({
      type: "humidity",
      title: "Висока вологість повітря",
      text: `Вологість ${humidity}%: посилюється відчуття вогкості або паркоти, можливе утворення вранішнього туману чи конденсату.`,
    });
  } else if (humidity < 35) {
    items.push({
      type: "humidity",
      title: "Сухе повітря",
      text: `Вологість знижена (${humidity}%): пийте більше води та зволожуйте шкіру.`,
    });
  }

  // УФ-індекс
  if (uvi >= 6) {
    items.push({
      type: "uvi",
      title: "Підвищений УФ-індекс",
      text: `УФ-індекс сягає ${uvi}: з 11:00 до 16:00 рекомендовано користуватися сонцезахисними окулярами та кремом.`,
    });
  }

  return items;
};

/**
 * 5. Практичні поради щодо одягу та активностей
 */
export const generateActionableAdvice = (current, todayDaily, hourlyAnalysis) => {
  const currentTemp = parseNum(current?.temp, 15);
  const isRainLikely = hourlyAnalysis.badges.some((b) =>
    b.toLowerCase().includes("дощ")
  );
  const isWindStrong = hourlyAnalysis.maxWind >= 10;
  const items = [];

  // Окреме попередження про сильний вітер та рекомендація
  if (isWindStrong) {
    items.push({
      type: "wind_warning",
      title: `Увага, сильний вітер до ${hourlyAnalysis.maxWind} м/с:`,
      text: "вдягайте теплу вітрозахисну куртку з капюшоном, аби ваша прогулянка була по-справжньому затишною та комфортною!",
    });
  }

  // Одяг
  if (currentTemp < 0) {
    items.push({
      type: "cloth",
      title: "Гардероб",
      text: "Зимовий теплий пуховик, шапка, шарф, рукавички та утеплене зимове взуття.",
    });
  } else if (currentTemp < 8) {
    items.push({
      type: "cloth",
      title: "Гардероб",
      text: "Щільна демісезонна куртка або пальто, теплий светр та закрите взуття.",
    });
  } else if (currentTemp < 16) {
    items.push({
      type: "cloth",
      title: "Гардероб",
      text: "Багатошаровість: легка куртка, толстовка чи худі, які можна зняти в разі потепління.",
    });
  } else if (currentTemp < 23) {
    items.push({
      type: "cloth",
      title: "Гардероб",
      text: "Легкий кардиган, сорочка з довгим рукавом або лонгслів.",
    });
  } else {
    items.push({
      type: "cloth",
      title: "Гардероб",
      text: "Максимально легкий літній одяг з натуральних тканин (льон, бавовна).",
    });
  }

  // Парасоля
  if (isRainLikely) {
    items.push({
      type: "umbrella",
      title: "Парасоля",
      text: "Обов'язково візьміть із собою компактну парасольку або легкий дощовик.",
    });
  }

  // Авто / Прогулянки
  if (isRainLikely) {
    items.push({
      type: "car",
      title: "Автомобілістам",
      text: "Зважайте на мокре дорожнє покриття та збільшуйте дистанцію гальмування.",
    });
  } else {
    items.push({
      type: "sport",
      title: "Відпочинок",
      text: "Чудовий час для прогулянок на відкритому повітрі, пробіжки чи катання на велосипеді.",
    });
  }

  return items;
};

/**
 * ГОЛОВНА ЕКСПОРТНА ФУНКЦІЯ:
 * Об'єднує всі правила, комбінації та умови в цілісний експертний прогноз без ШІ
 */
export const generateRuleBasedForecast = (
  card,
  { unit = "C", currentTimeString = "" } = {}
) => {
  if (!card) return null;

  const current = card.current || {};
  const todayDaily = card.daily16?.[0] || {};
  const hourly = card.hourly || [];
  const daily16 = card.daily16 || [];
  const locationName = card.locationName || "Ваше місто";

  // Виклики спеціалізованих блоків
  const dayNight = analyzeDayNightContrast(current, todayDaily, unit);
  const hourlyData = analyzeHourlyTimeline(hourly, unit);
  const weeklyData = analyzeWeeklyTrends(daily16, unit);
  const atmosphereNotes = analyzeAtmosphereAndHealth(current);
  const lifestyleAdvice = generateActionableAdvice(current, todayDaily, hourlyData);

  // Формування бейджів
  const allBadges = [];
  if (dayNight.badge) allBadges.push(dayNight.badge);
  hourlyData.badges.forEach((b) => allBadges.push(b));
  if (weeklyData.jumpBadge) allBadges.push(weeklyData.jumpBadge);

  // Формування короткого заголовка
  let headline = `Прогноз для ${locationName}: `;
  if (allBadges.some((b) => b.includes("дощ"))) {
    headline += "Очікуються опади, день вимагатиме парасолі";
  } else if (weeklyData.jumpBadge?.includes("підйом")) {
    headline += "Попереду різке потепління та приємна динаміка";
  } else if (weeklyData.jumpBadge?.includes("спад")) {
    headline += "Насувається хвиля похолодання";
  } else {
    headline += "Стійка та комфортна погода на найближчий час";
  }

  // Текст без емодзі для чистого експорту
  const fullText = [
    `[Прогноз для ${locationName}]`,
    `Час: ${currentTimeString || "зараз"}`,
    "",
    "Добовий баланс:",
    dayNight.message,
    "",
    "Погодинні зміни:",
    hourlyData.rainWindowText,
    hourlyData.peakTempText,
    hourlyData.windTrendText,
    "",
    "Тижневий тренд:",
    weeklyData.trendText,
    weeklyData.weekSummaryText,
    "",
    ...(atmosphereNotes.length > 0
      ? ["Атмосферні фактори:", ...atmosphereNotes.map((n) => `• ${n.title}: ${n.text}`), ""]
      : []),
    "Рекомендації та гардероб:",
    ...lifestyleAdvice.map((a) => `• ${a.title} ${a.text}`),
  ].join("\n");

  return {
    locationName,
    headline,
    allBadges: Array.from(new Set(allBadges)),
    dayNight,
    hourlyData,
    weeklyData,
    atmosphereNotes,
    lifestyleAdvice,
    fullText,
    generatedAt: Date.now(),
  };
};

/**
 * Очищення тексту ШІ від капслоку, зірочок множення/форматування та емодзі
 */
export const cleanAiText = (raw) => {
  if (!raw || typeof raw !== "string") return "";

  let text = raw;

  // 1. Прибираємо сирі емодзі (знаки небезпеки, погодні значки тощо)
  text = text.replace(
    /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}]/gu,
    ""
  );
  text = text.replace(/[︀-️]/g, "");

  // 2. Прибираємо markdown-заголовки з дієзами (## Заголовок -> Заголовок)
  text = text.replace(/^[ \t]*#{1,6}\s+/gm, "");

  // 3. Замінюємо початкові маркери списку із зірочок на красиве тире
  text = text.replace(/^[ \t]*\*\s+/gm, "— ");

  // 4. Знімаємо маркдаун-жирний/курсив зірочками (**текст** -> текст, *текст* -> текст)
  text = text.replace(/\*{1,3}(.*?)\*{1,3}/g, "$1");

  // 5. Повністю видаляємо будь-які залишкові зірочки (зірочки множення / asterisks)
  text = text.replace(/\*/g, "");

  // 6. Видаляємо зворотні лапки (бектіки)
  text = text.replace(/`/g, "");

  // 7. Перетворюємо суцільний капслок (СЛОВА ВЕЛИКИМИ ЛІТЕРАМИ) на звичайний регістр речень
  const allowedAcronyms = new Set(["ШІ", "УФ", "API", "AI", "GPS", "США", "ЄС"]);
  text = text.replace(
    /((?:[A-ZА-ЯІЇЄҐ](?:['’]?[A-ZА-ЯІЇЄҐ])+)(?:\s+[A-ZА-ЯІЇЄҐ]['’]?[A-ZА-ЯІЇЄҐ]*)*)/gu,
    (match, p1, offset, full) => {
      const trimmed = match.trim();
      if (allowedAcronyms.has(trimmed)) return match;

      const before = full.slice(0, offset).trim();
      const lastChar = before.slice(-1);
      // Якщо на початку тексту, рядка або після розділових знаків кінця речення / двокрапки / тире
      const isStart = !lastChar || /[.!?:\n—-]/.test(lastChar);

      const lower = match.toLowerCase();
      if (isStart) {
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
      return lower;
    }
  );

  // 8. Очищення зайвих пробілів та пустих рядків
  text = text
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter((line, i, arr) => line !== "" || (i > 0 && arr[i - 1] !== ""))
    .join("\n")
    .trim();

  return text;
};

