import { buildWikipediaSearchUrl, parseWikipediaSnippet } from "./wikipediaUtils";

/**
 * Безкоштовне отримання прогнозу погоди з Open-Meteo API без ключа API
 */
export const fetchOpenMeteoWeather = async (query) => {
  if (!query || !query.trim()) return "";

  const isWeatherQuery = /погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|гроз|сніг|туман|київ|києві|львів|одес|харків|дніпр|запоріж|івано-франк|тернопіль|луцьк|рівне|чернівц|ужгород|суми|чернігів|полтава|черкаси|житомир|вінниц|хмельницьк|кропивницьк|миколаїв|херсон|прогноз|weather|forecast/i.test(query);
  
  if (!isWeatherQuery) return "";

  try {
    // Визначаємо місто (за замовчуванням "Київ")
    let cityName = "Київ";
    const citiesList = [
      { name: "Львів", match: /львів/i },
      { name: "Одеса", match: /одес/i },
      { name: "Харків", match: /харків/i },
      { name: "Дніпро", match: /дніпр/i },
      { name: "Запоріжжя", match: /запоріж/i },
      { name: "Івано-Франківськ", match: /івано-франк/i },
      { name: "Тернопіль", match: /тернопіль/i },
      { name: "Луцьк", match: /луцьк/i },
      { name: "Рівне", match: /рівн/i },
      { name: "Чернівці", match: /чернівц/i },
      { name: "Ужгород", match: /ужгород/i },
      { name: "Суми", match: /сум/i },
      { name: "Чернігів", match: /чернігів/i },
      { name: "Полтава", match: /полтав/i },
      { name: "Черкаси", match: /черкас/i },
      { name: "Житомир", match: /житомир/i },
      { name: "Вінниця", match: /вінниц/i },
      { name: "Хмельницький", match: /хмельницьк/i },
      { name: "Кропивницький", match: /кропивницьк/i },
      { name: "Миколаїв", match: /миколаїв/i },
      { name: "Херсон", match: /херсон/i },
      { name: "Київ", match: /київ|києві/i }
    ];

    for (const c of citiesList) {
      if (c.match.test(query)) {
        cityName = c.name;
        break;
      }
    }

    // 1. Geocoding
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=uk`;
    const geoRes = await fetch(geoUrl);
    if (!geoRes.ok) return "";
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) return "";
    
    const location = geoData.results[0];
    const { latitude, longitude, name: foundName, country } = location;

    // 2. Weather forecast
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,rain_sum,showers_sum,snowfall_sum,sunrise,sunset&timezone=auto&forecast_days=7`;
    const wRes = await fetch(weatherUrl);
    if (!wRes.ok) return "";
    const wData = await wRes.json();

    const getWmoDesc = (code) => {
      if (code === 0) return "☀️ Сонячно / Ясно";
      if (code >= 1 && code <= 3) return "⛅ Мінлива хмарність / Частково сонячно";
      if (code === 45 || code === 48) return "🌫️ Туман";
      if (code >= 51 && code <= 55) return "🌧️ Мряка";
      if (code >= 61 && code <= 65) return "🌧️ Дощ";
      if (code >= 71 && code <= 75) return "❄️ Сніг";
      if (code >= 80 && code <= 82) return "🌦️ Злива";
      if (code >= 95) return "⛈️ Гроза";
      return "🌤️ Помірно";
    };

    const current = wData.current;
    const daily = wData.daily;

    let textLines = [`[Джерело: Open-Meteo Weather API — ${foundName}, ${country || "Україна"}]`];
    
    if (current) {
      textLines.push(
        `• Погода зараз: ${Math.round(current.temperature_2m)}°C (відчувається як ${Math.round(current.apparent_temperature)}°C), ${getWmoDesc(current.weather_code)}, вітер ${Math.round(current.wind_speed_10m)} км/год, вологість ${current.relative_humidity_2m}%.`
      );
    }

    if (daily && daily.time && daily.time.length > 1) {
      // Сьогодні (індекс 0)
      textLines.push(
        `• Сьогодні (${daily.time[0]}): Мін: ${Math.round(daily.temperature_2m_min[0])}°C, Макс: ${Math.round(daily.temperature_2m_max[0])}°C, Статус: ${getWmoDesc(daily.weather_code[0])}, Ймовірність опадів: ${daily.precipitation_probability_max[0]}%.`
      );
      // Завтра (індекс 1)
      textLines.push(
        `• Завтра (${daily.time[1]}): Мін: ${Math.round(daily.temperature_2m_min[1])}°C, Макс: ${Math.round(daily.temperature_2m_max[1])}°C, Статус: ${getWmoDesc(daily.weather_code[1])}, Ймовірність опадів: ${daily.precipitation_probability_max[1]}%.`
      );
      // Післязавтра (індекс 2)
      if (daily.time[2]) {
        textLines.push(
          `• Післязавтра (${daily.time[2]}): Мін: ${Math.round(daily.temperature_2m_min[2])}°C, Макс: ${Math.round(daily.temperature_2m_max[2])}°C, Статус: ${getWmoDesc(daily.weather_code[2])}, Ймовірність опадів: ${daily.precipitation_probability_max[2]}%.`
        );
      }
    }

    return textLines.join("\n");
  } catch (err) {
    console.warn("Open-Meteo weather fetch error:", err);
    return "";
  }
};

/**
 * Безкоштовний веб-пошук без використання кредитів Gemini та без помилок 429.
 * Використовує Open-Meteo API, DuckDuckGo Instant Answers та Wikipedia API.
 */
export const fetchFreeWebSearch = async (query) => {
  if (!query || !query.trim()) return "";

  const results = [];

  // 1. Погода (Open-Meteo) — пріоритет для погодних запитів
  try {
    const weatherData = await fetchOpenMeteoWeather(query);
    if (weatherData) {
      results.push(weatherData);
    }
  } catch (err) {
    console.warn("Weather search error:", err);
  }

  // 2. DuckDuckGo Instant Answer
  try {
    const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
    const ddgRes = await fetch(ddgUrl);
    if (ddgRes.ok) {
      const ddgData = await ddgRes.json();
      if (ddgData.AbstractText) {
        results.push(`[Джерело: DuckDuckGo] ${ddgData.AbstractText}`);
      } else if (ddgData.RelatedTopics && ddgData.RelatedTopics.length > 0) {
        const topics = ddgData.RelatedTopics.slice(0, 3)
          .map((t) => t.Text)
          .filter(Boolean);
        if (topics.length > 0) {
          results.push(`[Джерело: DuckDuckGo] ${topics.join("; ")}`);
        }
      }
    }
  } catch (err) {
    console.warn("DuckDuckGo search error:", err);
  }

  // 3. Wikipedia Search (Українська Вікіпедія)
  try {
    const wikiUrl = buildWikipediaSearchUrl(query);
    const wikiRes = await fetch(wikiUrl);
    if (wikiRes.ok) {
      const wikiData = await wikiRes.json();
      const searchItems = wikiData?.query?.search || [];
      const snippets = searchItems.slice(0, 3).map((item) => {
        const cleanSnippet = parseWikipediaSnippet(item.snippet);
        return `• ${item.title}: ${cleanSnippet}`;
      });
      if (snippets.length > 0) {
        results.push(`[Джерело: Вікіпедія]\n${snippets.join("\n")}`);
      }
    }
  } catch (err) {
    console.warn("Wikipedia search error:", err);
  }

  if (results.length === 0) return "";

  return (
    "\n--- ЗНАЙДЕНА АКТУАЛЬНА ІНФОРМАЦІЯ З ІНТЕРНЕТУ / ПОГОДНОГО API: ---\n" +
    results.join("\n\n") +
    "\n-------------------------------------------------------------------\n"
  );
};
