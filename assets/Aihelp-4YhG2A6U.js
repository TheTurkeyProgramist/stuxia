import{o as Ce}from"./rolldown-runtime-BNNRdYrd.js";import{$t as Pt,A as et,Ft as Ut,Kn as U,Mt as Ft,O as Gt,P as we,R as Wt,Sn as Ht,Tt as Ot,Un as Kt,Vn as tt,Wn as Me,Yt as Nt,cr as Yt,j as Vt,k as m,lr as Qt,qn as i,xn as qt,z as Xt}from"./vendor-react-DAvkYs3-.js";import{i as Zt,r as Jt,t as er}from"./index-D2ItKjt5.js";var s=Ce(Yt()),h=Ce(Kt()),tr=async e=>{if(!e||!e.trim()||!/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|гроз|сніг|туман|київ|києві|львів|одес|харків|дніпр|запоріж|івано-франк|тернопіль|луцьк|рівне|чернівц|ужгород|суми|чернігів|полтава|черкаси|житомир|вінниц|хмельницьк|кропивницьк|миколаїв|херсон|прогноз|weather|forecast/i.test(e))return"";try{let g="Київ";for(const b of[{name:"Львів",match:/львів/i},{name:"Одеса",match:/одес/i},{name:"Харків",match:/харків/i},{name:"Дніпро",match:/дніпр/i},{name:"Запоріжжя",match:/запоріж/i},{name:"Івано-Франківськ",match:/івано-франк/i},{name:"Тернопіль",match:/тернопіль/i},{name:"Луцьк",match:/луцьк/i},{name:"Рівне",match:/рівн/i},{name:"Чернівці",match:/чернівц/i},{name:"Ужгород",match:/ужгород/i},{name:"Суми",match:/сум/i},{name:"Чернігів",match:/чернігів/i},{name:"Полтава",match:/полтав/i},{name:"Черкаси",match:/черкас/i},{name:"Житомир",match:/житомир/i},{name:"Вінниця",match:/вінниц/i},{name:"Хмельницький",match:/хмельницьк/i},{name:"Кропивницький",match:/кропивницьк/i},{name:"Миколаїв",match:/миколаїв/i},{name:"Херсон",match:/херсон/i},{name:"Київ",match:/київ|києві/i}])if(b.match.test(e)){g=b.name;break}const x=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(g)}&count=1&language=uk`,v=await fetch(x);if(!v.ok)return"";const p=await v.json();if(!p.results||p.results.length===0)return"";const{latitude:y,longitude:C,name:R,country:le}=p.results[0],G=`https://api.open-meteo.com/v1/forecast?latitude=${y}&longitude=${C}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,rain_sum,showers_sum,snowfall_sum,sunrise,sunset&timezone=auto&forecast_days=7`,I=await fetch(G);if(!I.ok)return"";const W=await I.json(),H=b=>b===0?"☀️ Сонячно / Ясно":b>=1&&b<=3?"⛅ Мінлива хмарність / Частково сонячно":b===45||b===48?"🌫️ Туман":b>=51&&b<=55?"🌧️ Мряка":b>=61&&b<=65?"🌧️ Дощ":b>=71&&b<=75?"❄️ Сніг":b>=80&&b<=82?"🌦️ Злива":b>=95?"⛈️ Гроза":"🌤️ Помірно",S=W.current,u=W.daily;let T=[`[Джерело: Open-Meteo Weather API — ${R}, ${le||"Україна"}]`];return S&&T.push(`• Погода зараз: ${Math.round(S.temperature_2m)}°C (відчувається як ${Math.round(S.apparent_temperature)}°C), ${H(S.weather_code)}, вітер ${Math.round(S.wind_speed_10m)} км/год, вологість ${S.relative_humidity_2m}%.`),u&&u.time&&u.time.length>1&&(T.push(`• Сьогодні (${u.time[0]}): Мін: ${Math.round(u.temperature_2m_min[0])}°C, Макс: ${Math.round(u.temperature_2m_max[0])}°C, Статус: ${H(u.weather_code[0])}, Ймовірність опадів: ${u.precipitation_probability_max[0]}%.`),T.push(`• Завтра (${u.time[1]}): Мін: ${Math.round(u.temperature_2m_min[1])}°C, Макс: ${Math.round(u.temperature_2m_max[1])}°C, Статус: ${H(u.weather_code[1])}, Ймовірність опадів: ${u.precipitation_probability_max[1]}%.`),u.time[2]&&T.push(`• Післязавтра (${u.time[2]}): Мін: ${Math.round(u.temperature_2m_min[2])}°C, Макс: ${Math.round(u.temperature_2m_max[2])}°C, Статус: ${H(u.weather_code[2])}, Ймовірність опадів: ${u.precipitation_probability_max[2]}%.`)),T.join(`
`)}catch(g){return console.warn("Open-Meteo weather fetch error:",g),""}},rr=async e=>{if(!e||!e.trim())return"";const g=[];try{const x=await tr(e);x&&g.push(x)}catch(x){console.warn("Weather search error:",x)}try{const x=`https://api.duckduckgo.com/?q=${encodeURIComponent(e)}&format=json&no_html=1&skip_disambig=1`,v=await fetch(x);if(v.ok){const p=await v.json();if(p.AbstractText)g.push(`[Джерело: DuckDuckGo] ${p.AbstractText}`);else if(p.RelatedTopics&&p.RelatedTopics.length>0){const y=p.RelatedTopics.slice(0,3).map(C=>C.Text).filter(Boolean);y.length>0&&g.push(`[Джерело: DuckDuckGo] ${y.join("; ")}`)}}}catch(x){console.warn("DuckDuckGo search error:",x)}try{const x=Jt(e),v=await fetch(x);if(v.ok){const p=((await v.json())?.query?.search||[]).slice(0,3).map(y=>{const C=Zt(y.snippet);return`• ${y.title}: ${C}`});p.length>0&&g.push(`[Джерело: Вікіпедія]
${p.join(`
`)}`)}}catch(x){console.warn("Wikipedia search error:",x)}return g.length===0?"":`
--- ЗНАЙДЕНА АКТУАЛЬНА ІНФОРМАЦІЯ З ІНТЕРНЕТУ / ПОГОДНОГО API: ---
`+g.join(`

`)+`
-------------------------------------------------------------------
`},ar=Ce(Ht()),t=Qt(),F=Me`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ir=Me`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`,nr=Me`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,Q=300,or=i.div`
  display: flex;
  flex-direction: column;
  height: 610px;
  max-width: 1200px;
  width: 100%;
  margin: 10px auto 0;
  padding: 0 5px;
  gap: 6px;
  z-index: 100;
  position: relative;
  overflow-y: auto;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    border 0.4s ease,
    border-radius 0.4s ease,
    padding 0.4s ease;
  ${e=>e.$isStickyBgMode?U`
          background: ${e.$isDarkMode?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
          padding: 10px;
        `:U`
          background: transparent;
        `}
`,sr=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2px;
`,lr=i.div`
  font-size: 18px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 800;
  letter-spacing: 0.6px;
  color: ${e=>e.$isDarkMode?"#ffffff":"#111111"};
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 22px;
  transition: all 0.3s ease;
  z-index: 100;
  ${e=>e.$isStickyBgMode?U`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 165, 0, 0.25)":"rgba(255, 140, 0, 0.2)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        `:U`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,165,0,0.2)":"rgba(255,140,0,0.15)"};
        `}
`,dr=i.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  color: #fff;
  text-transform: uppercase;
`,cr=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media (max-width: 600px) {
    margin-right: auto;
  }
`,pr=i.button`
  background: ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.15)":"rgba(255, 140, 0, 0.12)"};
  border: 1px solid rgba(255, 160, 0, 0.45);
  color: ${e=>e.$isDarkMode?"#ffcf9e":"#d96500"};
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 160, 0, 0.25);
    border-color: #ff9500;
    transform: translateY(-1px);
  }
`,gr=i.button`
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 8px rgba(255, 149, 0, 0.35);
  transition: all 0.2s ease;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 149, 0, 0.45);
  }
`,xr=i.div`
  flex-shrink: 0;
  padding: 8px 10px;
  background: ${e=>e.$isStickyBgMode?e.$isDarkMode?"rgba(10, 10, 20, 0.82)":"rgba(255, 249, 235, 0.9)":e.$isDarkMode?"rgba(12, 12, 12, 0.72)":"#fffbf0"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  border: 1px solid rgba(255, 160, 0, 0.45);
  border-radius: 12px;
  z-index: 100;
  position: relative;
  color: ${e=>e.$isDarkMode?"white":"black"};
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease;
  box-shadow: 0 2px 12px rgba(255, 150, 0, 0.08);
`,fr=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?"white":"black"};
  ${e=>e.$isStickyBgMode?U`
          background: ${e.$isDarkMode?"rgba(15,15,25,0.4)":"rgba(255,255,255,0.55)"};
          padding: 6px 8px;
          border-radius: 8px;
        `:""}
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    min-width: 160px;
  }
  input[type="radio"] {
    margin-right: 8px;
    accent-color: orange;
  }
  input[type="password"] {
    flex: 1;
    min-width: 200px;
    padding: 7px 12px;
    border-radius: 8px;
    border: 1px solid ${e=>e.$hasError?"#ff4d4d":"rgba(255,160,0,0.4)"};
    background: ${e=>e.$isDarkMode?"rgba(30,30,40,0.7)":"rgba(255,255,255,0.85)"};
    color: ${e=>e.$isDarkMode?"white":"black"};
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    &:focus {
      border-color: orange;
      box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.15);
    }
  }
`,ur=i.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`,hr=i.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  padding: 4px 2px;
  border-radius: 10px;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
`,se=i.div`
  align-self: ${e=>e.$isBot?"flex-start":"flex-end"};
  max-width: 82%;
  background: ${e=>e.$isBot?e.$isDarkMode?"rgba(28, 28, 42, 0.88)":"rgba(245,245,252,0.94)":"linear-gradient(135deg, rgba(30,30,30,0.92), rgba(20,20,20,0.95))"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(8px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(8px)":"none"};
  color: ${e=>e.$isBot?e.$isDarkMode?"#f0f0f0":"#111":"#fff"};
  border: 1px solid
    ${e=>e.$isBot?e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)":"rgba(255,149,0,0.3)"};
  padding: 8px 12px;
  border-radius: ${e=>e.$isBot?"4px 14px 14px 14px":"14px 4px 14px 14px"};
  position: relative;
  font-size: 13px;
  line-height: 1.55;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  animation: ${F} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`,br=i.button`
  position: absolute;
  right: 0px;
  top: -10px;
  color: inherit;
  cursor: pointer;
  font-size: 29px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${se}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
  }
`,mr=i.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${F} 0.2s ease;
`,$r=i.button`
  padding: 5px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 107, 107, 0.5);
  background: transparent;
  color: #ff6b6b;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  &:hover { background: rgba(255, 107, 107, 0.12); }
`,vr=i.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${e=>e.$isDarkMode?"rgba(28,28,42,0.88)":"rgba(245,245,252,0.94)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 4px 14px 14px 14px;
  animation: ${F} 0.2s ease;
`,ke=i.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${ir} 1.2s ease infinite;
  animation-delay: ${e=>e.$delay};
`,wr=i.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
  border-radius: 12px;
  background: ${e=>e.$isDarkMode?"rgba(10,10,18,0.88)":"rgba(255,255,255,0.9)"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  transition:
    background 0.4s ease,
    border-color 0.2s,
    box-shadow 0.2s;
  &:focus-within {
    border-color: rgba(255, 149, 0, 0.7);
    box-shadow: 0 0 0 3px rgba(255, 149, 0, 0.1);
  }
`,kr=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px 4px;
  flex-wrap: wrap;
  border-bottom: 1px dashed ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,rt=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,at=i.span`
  font-weight: 700;
  font-size: 10px;
  color: #ff9500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 2px;
`,it=i.select`
  appearance: none;
  background: ${e=>e.$isDarkMode?"rgba(255,165,0,0.12)":"rgba(255,140,0,0.08)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,165,0,0.35)":"rgba(255,140,0,0.3)"};
  border-radius: 999px;
  padding: 3px 22px 3px 10px;
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.$isDarkMode?"#ffcf9e":"#d96500"};
  cursor: pointer;
  outline: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23ff9500' d='M0 0l5 6 5-6z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  transition: all 0.2s ease;

  &:hover, &:focus {
    border-color: #ff9500;
    box-shadow: 0 0 0 2px rgba(255, 149, 0, 0.15);
  }

  option {
    background: ${e=>e.$isDarkMode?"#1e1e2a":"#ffffff"};
    color: ${e=>e.$isDarkMode?"#ffffff":"#111111"};
    font-size: 12px;
  }
`,yr=i.textarea`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  padding: 12px 14px;
  border-radius: 12px 12px 0 0;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.92)":"#111"};
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: auto;
  min-height: 46px;
  max-height: 140px;
  line-height: 1.5;
  &::placeholder {
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.35)"};
    font-size: 13px;
  }
`,jr=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,Cr=i.span`
  margin-right: auto;
  color: ${e=>e.$isLimitReached?"#ff6b6b":e.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`,oe=i.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.65)":"rgba(0,0,0,0.55)"};
  font-size: ${e=>e.$size||"18px"};
  cursor: pointer;
  transition: all 0.2s;
  &:disabled { opacity: 0.35; cursor: not-allowed; }
  &:hover:not(:disabled) {
    background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"};
    color: ${e=>e.$isDarkMode?"#fff":"#000"};
    transform: scale(1.08);
  }
  ${e=>e.$danger&&U`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${e=>e.$listening&&U`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`,Mr=i.button`
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  border: none;
  background: ${e=>e.disabled?e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)":"linear-gradient(135deg, #ff9500, #ff6b00)"};
  color: ${e=>e.disabled?e.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)":"#fff"};
  font-size: 13px;
  font-weight: 700;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;
  box-shadow: ${e=>e.disabled?"none":"0 2px 8px rgba(255,149,0,0.35)"};
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(255, 149, 0, 0.45);
  }
  &:active:not(:disabled) { transform: translateY(0); }
`,_r=i.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`,Sr=i.div`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$isDarkMode?"rgba(40,40,55,0.9)":"#f0f0f0"};
  border-radius: 8px;
  border: 1px solid rgba(255, 149, 0, 0.45);
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
`,Dr=i.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  font-size: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: transform 0.15s;
  &:hover { transform: scale(1.15); }
`,zr=i.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${nr} 2s linear infinite;
`,Rr=i.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`,Ir=i.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: ${F} 0.2s ease;
`,Tr=i.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: scale(1.08);
  }
`,Br=i.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ar=i.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Lr=i.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Er=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`,Pr=i.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`,Ur=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`,Fr=i.div`
  width: 4px;
  border-radius: 2px;
  background: linear-gradient(180deg, #ff9500, #ff6b00);
  height: ${e=>e.$h}%;
  opacity: ${e=>e.$playing?1:.35};
  animation: ${e=>e.$playing?`wavePulse ${e.$dur}s ease-in-out infinite alternate`:"none"};
  @keyframes wavePulse {
    from { height: ${e=>e.$h}%; }
    to   { height: ${e=>Math.min(100,e.$h+40)}%; }
  }
`,nt=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,ot=i.button`
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  font-size: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(255, 149, 0, 0.4);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(255, 149, 0, 0.55);
  }
`,st=i.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`,lt=i.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`,dt=i.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,ct=i.div`
  display: flex;
  gap: 6px;
`,pt=i.button`
  border: 1px solid ${e=>e.$active?"#ff9500":"rgba(255,255,255,0.15)"};
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  background: ${e=>e.$active?"linear-gradient(135deg, #ff9500, #ff6b00)":"transparent"};
  color: ${e=>e.$active?"#fff":"rgba(255,255,255,0.7)"};
  font-weight: ${e=>e.$active?"700":"400"};
  transition: all 0.2s;
  &:hover { border-color: #ff9500; }
`,Gr=i.audio`
  display: none;
`,Wr=i.button`
  padding: 7px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 149, 0, 0.5);
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 149, 0, 0.15);
    border-color: #ff9500;
    color: #fff;
  }
`,Hr=i.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px 2px;
  flex-shrink: 0;
`,Or=i.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${e=>e.$isDarkMode?"rgba(255, 105, 180, 0.18)":"rgba(255, 105, 180, 0.12)"};
  border: 1px solid rgba(255, 105, 180, 0.45);
  color: ${e=>e.$isDarkMode?"#ffb6c1":"#d81b60"};
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  max-width: 280px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    background: transparent;
    border: none;
    color: inherit;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    display: flex;
    align-items: center;
    &:hover { color: #ff4d4d; }
  }
`,Kr=i.button`
  background: rgba(255, 160, 0, 0.12);
  border: 1px solid rgba(255, 160, 0, 0.35);
  color: ${e=>e.$isDarkMode?"#ffcf9e":"#d96500"};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 160, 0, 0.22);
    border-color: #ff9500;
    transform: translateY(-1px);
  }
`,gt=i.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${F} 0.2s ease;
`,xt=i.div`
  width: min(500px, 92vw);
  background: ${e=>e.$isDarkMode?"#1a1a26":"#ffffff"};
  color: ${e=>e.$isDarkMode?"#f0f0f0":"#111111"};
  border: 1px solid rgba(255, 160, 0, 0.4);
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`,ft=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 160, 0, 0.2);
  padding-bottom: 10px;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
    color: #ff9500;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,ut=i.button`
  background: transparent;
  border: none;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.6)"};
  font-size: 20px;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 6px;
  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.1);
  }
`,Nr=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ht=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"};
  border-radius: 8px;
  font-size: 13px;

  span:first-child {
    font-weight: 600;
  }
  span:last-child {
    font-weight: 700;
    color: #ff9500;
  }
`,Yr=i.div`
  background: ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.08)":"rgba(255, 160, 0, 0.06)"};
  border: 1px solid rgba(255, 160, 0, 0.25);
  border-radius: 10px;
  padding: 12px;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.85)":"rgba(0,0,0,0.8)"};

  strong {
    color: #ff9500;
  }
`,Vr=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 340px;
  overflow-y: auto;
  padding-right: 4px;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 10px;
  }
`,Qr=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 10px;
  background: ${e=>e.$active?e.$isDarkMode?"rgba(255, 149, 0, 0.2)":"rgba(255, 149, 0, 0.15)":e.$isDarkMode?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
  border: 1px solid
    ${e=>e.$active?"#ff9500":e.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border-color: #ff9500;
    background: ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.12)":"rgba(255, 160, 0, 0.08)"};
  }
`,qr=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`,Xr=i.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$active?"#ff9500":"inherit"};
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zr=i.span`
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  background: #ff9500;
  color: #fff;
  padding: 1px 6px;
  border-radius: 999px;
  letter-spacing: 0.5px;
`,Jr=i.div`
  font-size: 11px;
  opacity: 0.65;
`,ea=i.button`
  background: transparent;
  border: none;
  color: rgba(255, 80, 80, 0.75);
  font-size: 16px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.15);
    transform: scale(1.1);
  }
`,ta=i.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px dashed #ff9500;
  background: rgba(255, 149, 0, 0.08);
  color: #ff9500;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 149, 0, 0.18);
    transform: translateY(-1px);
  }
`,ra=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  margin: auto 0;
  text-align: center;
  gap: 12px;
  animation: ${F} 0.3s ease;
`,aa=i.div`
  font-size: 16px;
  font-weight: 800;
  color: #ff9500;
`,ia=i.div`
  font-size: 13px;
  opacity: 0.75;
  max-width: 400px;
`,na=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 460px;
  margin-top: 6px;
`,ye=i.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.3)":"rgba(255, 140, 0, 0.25)"};
  background: ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.08)":"rgba(255, 140, 0, 0.06)"};
  color: ${e=>e.$isDarkMode?"#f0f0f0":"#222"};
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  span { font-size: 16px; }
  &:hover {
    background: rgba(255, 160, 0, 0.2);
    border-color: #ff9500;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 149, 0, 0.2);
  }
`,oa=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: flex-start;
  margin: 2px 0 8px 10px;
  max-width: 85%;
  animation: ${F} 0.3s ease;
`,sa=i.div`
  font-size: 14px;
  font-weight: 700;
  color: #ff9500;
  letter-spacing: 0.5px;
`,la=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,da=i.button`
  background: ${e=>e.$isDarkMode?"rgba(255, 165, 0, 0.12)":"rgba(255, 140, 0, 0.09)"};
  border: 1px solid rgba(255, 160, 0, 0.4);
  color: ${e=>e.$isDarkMode?"#ffcf9e":"#d96500"};
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: rgba(255, 160, 0, 0.25);
    border-color: #ff9500;
    transform: translateY(-1px);
  }
`,ca=e=>e==="detailed"?{label:"Більше",instruction:"Докладно."}:e==="normal"?{label:"Нормально",instruction:"Нормально."}:{label:"Менше",instruction:"Коротко."},pa=e=>e==="scientific"?{label:"Науково",instruction:"Використовуй науковий стиль, чітко, з термінами і логікою."}:e==="friendly"?{label:"Дружньо",instruction:"Використовуй дружній, теплий і простий стиль."}:{label:"Стандартно",instruction:"Використовуй нейтральний стиль."},bt=e=>{if(!e)return{cleanText:e,questions:[]};const g=/\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/,x=e.match(g);return x?{cleanText:e.replace(g,"").trim(),questions:x[1].split(`
`).map(v=>v.replace(/^[•\-\*\d\.\s]+/,"").trim()).filter(v=>v.length>0).slice(0,3)}:{cleanText:e,questions:[]}},ga=`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
КОНЦЕПЦІЯ ПЛАТФОРМИ:
«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:
• Погода — якщо надано актуальні дані погодного API або віджета, обов'язково давай конкретну відповідь із цифрами (температура, опади, вітер, стан неба).
• Музика — плейлисти без реклами та лімітів.
• Новини — RSS-стрічки з автоматичним фільтром.
• Фан-арти — галерея різних жанрів.
• Карта клімату — інтерактивна кліматична карта.
• Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.

АВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com
Вікові обмеження: 13+
Конфіденційність: платформа не збирає персональні дані.

ТВОЇ ПРАВИЛА:
1. Якщо у вхідних даних є погодний контекст (Open-Meteo або інтернет-пошук), ЗАВЖДИ відповідай конкретним прогнозом (температура, сонячно/хмарно/дощ, вітер, опади) для запитаного міста/дня (наприклад, завтра в Києві), а не слати на сторінку погоди.
2. Якщо питання стосується платформи — відповідай конкретно і по суті.
3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.
4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.
5. Відповідай українською мовою, якщо запит не на іншій мові.
6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.
7. Наприкінці кожної відповіді додавай 2 короткі релевантні запитання для продовження діалогу у такому форматі:
[РЕКОМЕНДОВАНІ_ПИТАННЯ]
• Перше запитання?
• Друге запитання?
[/РЕКОМЕНДОВАНІ_ПИТАННЯ]`,je=(e=1,g=[])=>({id:`chat_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,title:`Чат ${e}`,messages:g,createdAt:Date.now()}),ha=({isDarkMode:e,isStickyBgMode:g})=>{const[x,v]=(0,s.useState)(""),[p,y]=(0,s.useState)([]),[C,R]=(0,s.useState)(""),[le,G]=(0,s.useState)(!1),[I,W]=(0,s.useState)(""),[H,S]=(0,s.useState)("gemini-3.5-flash-lite"),[u,T]=(0,s.useState)("normal"),[b,mt]=(0,s.useState)("friendly"),[$t,de]=(0,s.useState)(!1),[B,q]=(0,s.useState)([]),[O,ce]=(0,s.useState)([]),[A,_e]=(0,s.useState)(!1),[Se,De]=(0,s.useState)(!0);(0,s.useEffect)(()=>{const r=a=>{a.detail&&ce(n=>n.some(l=>l.id===a.detail.id)?(m.error("Цю картку вже прикріплено!"),n):n.length>=4?(m.error("Максимум 4 прикріплення."),n):(m.success(`Прикріплено: ${a.detail.title}`),[...n,a.detail]))};return window.addEventListener("attachCardToAiHelp",r),()=>window.removeEventListener("attachCardToAiHelp",r)},[]);const[ze,M]=(0,s.useState)(""),[K,X]=(0,s.useState)(""),Re=(0,s.useRef)(""),[vt,Z]=(0,s.useState)(0),[Ie,Te]=(0,s.useState)(null),[pe,ge]=(0,s.useState)(0),[J,wt]=(0,s.useState)(0),[ee,xe]=(0,s.useState)(!1),N=(0,s.useRef)(null),[fe,Be]=(0,s.useState)(!1),[_,Ae]=(0,s.useState)(null),[ue,D]=(0,s.useState)(!1),[Le,Ee]=(0,s.useState)(0),[Pe,Ue]=(0,s.useState)(0),[Fe,Ge]=(0,s.useState)(0),[he,We]=(0,s.useState)(1),z=(0,s.useRef)([]),L=(0,s.useRef)(null),kt=(0,s.useRef)(null),be=(0,s.useRef)(null),$=(0,s.useRef)(null),Y=(0,s.useRef)(0),me=(0,s.useRef)(!1);(0,s.useEffect)(()=>{if(!pe)return;const r=()=>{const n=Math.max(0,pe-Date.now());wt(Math.ceil(n/1e3)),n===0&&(ge(0),Y.current=0)};r();const a=setInterval(r,250);return()=>clearInterval(a)},[pe]);const He=p.find(r=>r.id===C)||p[0],$e=He?He.messages:[],V=(r,a)=>{y(n=>{const l=n.map(o=>{if(o.id!==r)return o;const d=typeof a=="function"?a(o.messages):a;let w=o.title;if((o.title.startsWith("Чат ")||!o.title)&&d.length>0){const c=d.find(f=>!f.isBot);if(c&&c.text){const f=c.text.trim();f&&(w=f.length>28?f.slice(0,28)+"...":f)}}return{...o,title:w,messages:d.slice(-50)}});return h.default.setItem("ai_help_chats_v2",l),l})},Oe=()=>{if(p.length>=10){m.error("Досягнуто ліміт 10 паралельних чатів. Видаліть непотрібний чат.");return}const r=p.length+1,a=je(r,[]),n=[...p,a];y(n),R(a.id),h.default.setItem("ai_help_chats_v2",n),h.default.setItem("ai_help_active_chat_id",a.id),re(),v(""),m.success(`Створено новий чат! (${n.length}/10)`)},yt=r=>{R(r),h.default.setItem("ai_help_active_chat_id",r),G(!1)},jt=(r,a)=>{if(a&&a.stopPropagation(),p.length<=1){const l=je(1,[]);y([l]),R(l.id),h.default.setItem("ai_help_chats_v2",[l]),h.default.setItem("ai_help_active_chat_id",l.id),m.success("Чат очищено");return}const n=p.filter(l=>l.id!==r);if(y(n),h.default.setItem("ai_help_chats_v2",n),C===r){const l=n[0].id;R(l),h.default.setItem("ai_help_active_chat_id",l)}m.success("Чат видалено")},te=r=>!r||isNaN(r)?"0:00":`${Math.floor(r/60)}:${Math.floor(r%60).toString().padStart(2,"0")}`,Ct=r=>{Ae(r),D(!1),Ee(0),Ge(0),Ue(0),We(1)},Ke=()=>{$.current&&$.current.pause(),Ae(null),D(!1)},Ne=()=>{$.current&&($.current.paused?$.current.play():$.current.pause())},Ye=()=>{if(!$.current)return;const{currentTime:r,duration:a}=$.current;Ge(r),Ee(a?r/a:0)},Ve=()=>{$.current&&(Ue($.current.duration),$.current.playbackRate=he)},Qe=r=>{const a=r.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width));$.current&&$.current.duration&&($.current.currentTime=n*$.current.duration)},qe=r=>{We(r),$.current&&($.current.playbackRate=r)},Mt=r=>{const a=r.target.value.slice(0,Q);v(a),L.current&&(L.current.style.height="auto",L.current.style.height=`${L.current.scrollHeight}px`)};(0,s.useEffect)(()=>{const r=be.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[$e]),(0,s.useEffect)(()=>{if(!K)return;const r=be.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[K]);const _t=async()=>{if(!(fe||A)){Be(!0),M("Роблю скріншот...");try{const r=document.getElementById("root")||document.documentElement||document.body,a=await(0,ar.default)(r,{useCORS:!0,allowTaint:!1,scale:.8,logging:!1,ignoreElements:d=>{const w=d.tagName?d.tagName.toLowerCase():"";return w==="iframe"||w==="video"||w==="audio"}}),n=await new Promise(d=>{try{a.toBlob(w=>{if(w)d(w);else try{const c=a.toDataURL("image/png").split(","),f=c[0].match(/:(.*?);/)[1],j=atob(c[1]);let P=j.length;const ae=new Uint8Array(P);for(;P--;)ae[P]=j.charCodeAt(P);d(new Blob([ae],{type:f}))}catch{d(null)}},"image/png")}catch{d(null)}});if(!n)throw new Error("Не вдалося створити blob зображення");const l=new File([n],`screenshot_${Date.now()}.png`,{type:"image/png"}),o=URL.createObjectURL(l);z.current.push(o),q(d=>[...d,{file:l,objectURL:o}]),Z(d=>d+n.size),M("Скріншот додано — запитайте Gemini!"),m.success("Скріншот сторінки додано!"),setTimeout(()=>M(""),2500)}catch(r){console.error("Screenshot capture failed:",r),M("Помилка скріншоту"),m.error("Не вдалося зробити скріншот сторінки."),setTimeout(()=>M(""),2500)}finally{Be(!1)}}},St=()=>{const r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r){m.error("Ваш браузер не підтримує розпізнавання голосу.");return}if(ee&&N.current){N.current.stop();return}const a=new r;N.current=a,a.lang="uk-UA",a.interimResults=!1,a.onstart=()=>{xe(!0),M("Слухаю вас...")},a.onresult=n=>{const l=n.results[0][0].transcript;v(o=>`${o?`${o} `:""}${l}`.slice(0,Q))},a.onerror=()=>{xe(!1),M(""),N.current=null},a.onend=()=>{xe(!1),M(""),N.current=null},a.start()};(0,s.useEffect)(()=>{(async()=>{const n=await h.default.getItem("gemini_api_key"),l=await h.default.getItem("gemini_model"),o=await h.default.getItem("gemini_google_search_enabled");if(n){const j=typeof n=="string"?n.trim().replace(/^["']|["']$/g,""):n;W(j)}l&&S(l),o!==null&&De(o);const d=await h.default.getItem("ai_help_chats_v2"),w=await h.default.getItem("ai_help_active_chat_id");let c=[];if(Array.isArray(d)&&d.length>0)c=d;else{const j=await h.default.getItem("ai_help_history");c=[je(1,Array.isArray(j)?j:[])],await h.default.setItem("ai_help_chats_v2",c)}y(c);let f=w;(!f||!c.some(j=>j.id===f))&&(f=c[0].id),R(f),await h.default.setItem("ai_help_active_chat_id",f)})();const a=n=>W(n.detail);return window.addEventListener("geminiKeyChanged",a),()=>window.removeEventListener("geminiKeyChanged",a)},[]),(0,s.useEffect)(()=>()=>{z.current.forEach(r=>URL.revokeObjectURL(r)),z.current=[]},[]);const Dt=async r=>({inlineData:{data:await new Promise(a=>{const n=new FileReader;n.onloadend=()=>a(n.result.split(",")[1]),n.readAsDataURL(r)}),mimeType:r.type}}),re=()=>{z.current.forEach(r=>URL.revokeObjectURL(r)),z.current=[],q([]),ce([]),Z(0)},zt=async r=>{const a=(r||"").trim().replace(/^["']|["']$/g,"");W(a),await h.default.setItem("gemini_api_key",a),window.dispatchEvent(new CustomEvent("geminiKeyChanged",{detail:a}))},Xe=r=>{const a=Array.from(r),n=15,l=104857600;if(B.length+a.length>n){m.error(`Максимум ${n} файлів.`);return}const o=B.reduce((c,f)=>c+f.file.size,0),d=a.reduce((c,f)=>c+f.size,0);if(o+d>l){m.error("Загальний розмір перевищує 100 МБ.");return}const w=a.map(c=>{const f=URL.createObjectURL(c);return z.current.push(f),{file:c,objectURL:f}});Z(o+d),q(c=>[...c,...w])},Rt=r=>{q(a=>{const n=a[r];return n?.objectURL&&(URL.revokeObjectURL(n.objectURL),Z(l=>Math.max(0,l-n.file.size)),z.current=z.current.filter(l=>l!==n.objectURL)),a.filter((l,o)=>o!==r)})},It=async r=>{try{const a=r.objectURL||r.file&&URL.createObjectURL(r.file);if(!a)return;const n=await h.default.getItem("custom_hero_backgrounds")||[],l=[{src:a,name:r.file?.name||"ai-image",author:"AiHelp"},...n.filter(o=>o.src!==a)];await h.default.setItem("custom_hero_backgrounds",l),await h.default.setItem("hero_background",a);try{window.dispatchEvent(new CustomEvent("heroBackgroundChanged",{detail:{src:a}}))}catch{}m.success("Картину встановлено як фон!")}catch(a){console.error(a),m.error("Не вдалося встановити фон.")}},Tt=r=>{navigator.clipboard.writeText(r).then(()=>{m.success("Скопійовано!",{duration:1500})})},Bt=()=>{m(r=>(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13},children:["Очистити поточний чат?",(0,t.jsx)("button",{onClick:async()=>{m.dismiss(r.id),re(),V(C,[]),m.success("Історію поточного чату очищено")},style:{background:"#e53e3e",color:"#fff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12,fontWeight:600},children:"Очистити"}),(0,t.jsx)("button",{onClick:()=>m.dismiss(r.id),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"inherit",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:"Скасувати"})]}),{duration:6e3})},At=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),E())},E=async(r=null)=>{const a=typeof r=="string"?r:x.trim();if(!a&&B.length===0&&O.length===0||A||me.current)return;const n=C;if(!I){V(n,o=>[...o,{text:"Будь ласка, введіть Gemini API-ключ у панелі налаштувань.",isBot:!0}]);return}if(a&&er(a)){V(n,o=>[...o,{text:"Запит містить заборонені слова або теми.",isBot:!0}]);return}const l=Date.now();if(Y.current>l){const o=Math.ceil((Y.current-l)/1e3);m.error(`Зачекайте ще ${o} с перед наступним запитом.`);return}me.current=!0,Re.current=a,Te(null),_e(!0),X(""),V(n,o=>[...o,{text:a,isBot:!1}]),v(""),L.current&&(L.current.style.height="auto");try{let o="";if((Se||/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|київ|львів|одес|харків|дніпр|завтра|сьогодні|прогноз|weather|forecast/i.test(a))&&a){M("Отримую актуальну інформацію / прогноз погоди...");try{o=await rr(a)}catch(k){console.warn("Free web search error:",k)}}M("З'єднання з Google Gemini...");const d=(I||"").trim().replace(/^["']|["']$/g,""),w=new qt(d),{instruction:c}=ca(u),{instruction:f}=pa(b);let j="";O.length>0&&(j=`

--- Прикріплений контент для аналізу: ---
`+O.map((k,ne)=>`${ne+1}. [${k.type==="weather"?"🌤️ Погода":"📰 Новина"}] ${k.title}
${k.details}`).join(`

`)+`
-------------------------------------------
`);const P=[{text:`${c} ${f}${j}${o}
${a||"Проаналізуй прикріплений контент."}`}];for(const k of B)P.push(await Dt(k.file));const ae=["gemini-3.0-flash","gemini-2.0-flash","gemini-2.5-flash"];let ie=null,Ze=null;for(const k of ae)try{if(ie=await w.getGenerativeModel({model:k,systemInstruction:ga}).generateContentStream(P),ie)break}catch(ne){Ze=ne,console.warn(`Model ${k} failed, trying next fallback...`,ne)}if(!ie)throw Ze||new Error("Не вдалося підключитися до Gemini API.");let ve="";for await(const k of ie.stream)ve+=k.text(),X(ve);const Et={text:ve,isBot:!0};V(n,k=>[...k,Et]),X(""),re();const Je=Date.now()+2e3;Y.current=Je,ge(Je)}catch(o){X("");const d=o?.message||"Невідома помилка Gemini.",w=/429|quota|rate.?limit|RESOURCE_EXHAUSTED/i.test(d);Te(w?"Google відхилив запит через ліміт квоти (HTTP 429). Зачекайте 1 хвилину.":d),re();const c=Date.now()+5e3;Y.current=c,ge(c)}finally{me.current=!1,_e(!1),M("")}},Lt=!A&&J===0&&(!!x.trim()||B.length>0||O.length>0);return(0,t.jsxs)(or,{$isStickyBgMode:g,$isDarkMode:e,children:[(0,t.jsx)(Gt,{position:"top-center",toastOptions:{style:{background:e?"#1e1e2a":"#fff",color:e?"#f0f0f0":"#111",border:"1px solid rgba(255,149,0,0.35)",fontSize:13}}}),(0,t.jsxs)(sr,{children:[(0,t.jsxs)(lr,{$isDarkMode:e,$isStickyBgMode:g,children:["Послуги ШІ",(0,t.jsx)(dr,{children:"Gemini"})]}),(0,t.jsxs)(cr,{children:[(0,t.jsxs)(pr,{type:"button",$isDarkMode:e,onClick:()=>G(!0),title:"Переглянути список чатів",children:["Чати (",p.length,"/10)"]}),(0,t.jsx)(Kr,{type:"button",$isDarkMode:e,onClick:()=>de(!0),title:"Переглянути приблизні ліміти",children:"Ліміти"}),(0,t.jsx)(gr,{type:"button",$isDarkMode:e,onClick:Oe,disabled:p.length>=10,title:"Створити новий паралельний чат",children:"Новий чат"})]})]}),(0,t.jsx)(xr,{$isDarkMode:e,$isStickyBgMode:g,children:(0,t.jsxs)(fr,{$isDarkMode:e,$isStickyBgMode:g,children:[(0,t.jsx)("label",{style:{minWidth:"unset",fontWeight:700,fontSize:13},children:"Gemini API Key"}),(0,t.jsxs)("label",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,whiteSpace:"nowrap",cursor:"pointer"},title:"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",children:[(0,t.jsx)("input",{type:"checkbox",checked:Se,onChange:async r=>{const a=r.target.checked;De(a),await h.default.setItem("gemini_google_search_enabled",a)}}),"Пошук в інтернеті"]}),(0,t.jsx)("input",{type:"password",placeholder:"Вставте ваш Gemini API Key...",value:I,onChange:r=>zt(r.target.value),name:"ai-help-gemini-key",autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),!I&&(0,t.jsx)(ur,{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noreferrer",children:"Отримати ключ"})]})}),(0,t.jsxs)(hr,{ref:be,children:[$e.length===0&&(0,t.jsxs)(ra,{$isDarkMode:e,children:[(0,t.jsx)(aa,{children:"Вітаю у «Допомозі ШІ»!"}),(0,t.jsx)(ia,{children:"Запитайте будь-що або оберіть одне з популярних питань:"}),(0,t.jsxs)(na,{children:[(0,t.jsxs)(ye,{$isDarkMode:e,onClick:()=>E("Які новини про погоду у світі?"),children:[(0,t.jsx)("span",{children:(0,t.jsx)(Wt,{})})," Які новини про погоду у світі?"]}),(0,t.jsxs)(ye,{$isDarkMode:e,onClick:()=>E("Яка погода в Україні?"),children:[(0,t.jsx)("span",{children:(0,t.jsx)(Ot,{})})," Яка погода в Україні?"]}),(0,t.jsxs)(ye,{$isDarkMode:e,onClick:()=>E("Порадити щось подивитися?"),children:[(0,t.jsx)("span",{children:(0,t.jsx)(Pt,{})})," Порадити щось подивитися?"]})]})]}),$e.map((r,a)=>{if(r.isBot){const{cleanText:n,questions:l}=bt(r.text);return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsxs)(se,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:g,children:[(0,t.jsx)(br,{onClick:()=>Tt(n),children:"🖺"}),(0,t.jsx)(we,{children:n})]}),l.length>0&&(0,t.jsxs)(oa,{children:[(0,t.jsx)(sa,{children:" Спробуйте запитати далі:"}),(0,t.jsx)(la,{children:l.map((o,d)=>(0,t.jsx)(da,{$isDarkMode:e,onClick:()=>E(o),disabled:A||J>0,children:o},d))})]})]},a)}return(0,t.jsx)(se,{$isBot:!1,$isDarkMode:e,$isStickyBgMode:g,children:(0,t.jsx)(we,{children:r.text})},a)}),K&&(0,t.jsx)(se,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:g,children:(0,t.jsx)(we,{children:bt(K).cleanText})}),A&&!K&&(0,t.jsxs)(vr,{$isDarkMode:e,children:[(0,t.jsx)(ke,{$delay:"0s"}),(0,t.jsx)(ke,{$delay:"0.2s"}),(0,t.jsx)(ke,{$delay:"0.4s"})]}),Ie&&(0,t.jsxs)(mr,{children:[Ie,(0,t.jsx)($r,{onClick:()=>E(Re.current),children:"Повторити"})]}),(0,t.jsx)("div",{ref:kt})]}),ze&&(0,t.jsx)(zr,{children:ze}),B.length>0&&(0,t.jsxs)(_r,{children:[(0,t.jsxs)(Rr,{children:["Розмір: ",(vt/1048576).toFixed(2)," MB / 100 MB"]}),B.map((r,a)=>(0,t.jsxs)(Sr,{$isDarkMode:e,children:[(0,t.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-in"},onClick:()=>Ct(r),children:r.file.type.startsWith("video/")?(0,t.jsx)("video",{src:r.objectURL}):r.file.type.startsWith("audio/")?(0,t.jsx)("span",{style:{fontSize:"26px"},children:"🎵"}):(0,t.jsx)("img",{src:r.objectURL,alt:"preview"})}),(0,t.jsx)(Dr,{onClick:()=>Rt(a),children:"✕"})]},a))]}),O.length>0&&(0,t.jsx)(Hr,{children:O.map((r,a)=>(0,t.jsxs)(Or,{$isDarkMode:e,children:[(0,t.jsxs)("span",{children:[r.type==="weather"?(0,t.jsx)(Xt,{}):(0,t.jsx)(Nt,{})," ",r.title]}),(0,t.jsx)("button",{type:"button",onClick:()=>ce(n=>n.filter((l,o)=>o!==a)),title:"Видалити картку",children:"✕"})]},a))}),(0,t.jsxs)(wr,{$isDarkMode:e,$isStickyBgMode:g,onDragOver:r=>r.preventDefault(),onDrop:r=>{r.preventDefault(),Xe(r.dataTransfer.files)},children:[(0,t.jsxs)(kr,{$isDarkMode:e,children:[(0,t.jsxs)(rt,{children:[(0,t.jsx)(at,{children:"Обсяг:"}),(0,t.jsxs)(it,{$isDarkMode:e,value:u,onChange:r=>T(r.target.value),children:[(0,t.jsx)("option",{value:"concise",children:"Менше"}),(0,t.jsx)("option",{value:"normal",children:"Нормально"}),(0,t.jsx)("option",{value:"detailed",children:"Більше"})]})]}),(0,t.jsxs)(rt,{children:[(0,t.jsx)(at,{children:"Стиль:"}),(0,t.jsxs)(it,{$isDarkMode:e,value:b,onChange:r=>mt(r.target.value),children:[(0,t.jsx)("option",{value:"friendly",children:"Дружньо"}),(0,t.jsx)("option",{value:"standard",children:"Стандартно"}),(0,t.jsx)("option",{value:"scientific",children:"Науково"})]})]})]}),(0,t.jsx)(yr,{ref:L,placeholder:"Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)",value:x,maxLength:Q,onChange:Mt,onKeyDown:At,rows:1,$isDarkMode:e}),(0,t.jsxs)(jr,{$isDarkMode:e,children:[(0,t.jsxs)(Cr,{$isDarkMode:e,$isLimitReached:x.length>=Q,"aria-live":"polite",children:[x.length,"/",Q]}),(0,t.jsxs)("label",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[(0,t.jsx)(oe,{as:"span",$isDarkMode:e,$size:"20px",title:"Додати фото, відео, аудіо",children:(0,t.jsx)(Ut,{})}),(0,t.jsx)("input",{type:"file",accept:"image/*, video/*, audio/*",multiple:!0,hidden:!0,onChange:r=>Xe(r.target.files)})]}),(0,t.jsx)(oe,{$isDarkMode:e,onClick:_t,title:"Зробити скріншот",disabled:A||fe,children:fe?(0,t.jsx)(tt,{}):(0,t.jsx)(Vt,{})}),(0,t.jsx)(oe,{$isDarkMode:e,onClick:St,title:ee?"Зупинити запис":"Голосовий ввід",$listening:ee,children:ee?"◼":(0,t.jsx)(Ft,{})}),(0,t.jsx)(oe,{$isDarkMode:e,$danger:!0,onClick:Bt,title:"Очистити поточний чат",$size:"20px",children:(0,t.jsx)(et,{})}),(0,t.jsx)(Mr,{disabled:!Lt,$isDarkMode:e,onClick:()=>E(),title:"Надіслати",children:A?(0,t.jsx)(tt,{}):J>0?`${J}с`:"Надіслати ➤"})]})]}),_&&(0,t.jsxs)(Ir,{onClick:Ke,children:[(0,t.jsx)(Tr,{onClick:Ke,children:"✕"}),(0,t.jsx)(Br,{children:_.file.name}),(0,t.jsx)("div",{onClick:r=>r.stopPropagation(),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:_.file.type.startsWith("image/")?(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[(0,t.jsx)(Ar,{src:_.objectURL,alt:_.file.name}),(0,t.jsx)(Wr,{onClick:()=>It(_),children:"🖼 Зробити фоном"})]}):_.file.type.startsWith("video/")?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Lr,{ref:$,src:_.objectURL,onTimeUpdate:Ye,onLoadedMetadata:Ve,onPlay:()=>D(!0),onPause:()=>D(!1),onEnded:()=>D(!1)}),(0,t.jsxs)(nt,{children:[(0,t.jsx)(st,{onClick:Qe,children:(0,t.jsx)(lt,{style:{width:`${Le*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(ot,{onClick:Ne,children:ue?"⏸":"▶"}),(0,t.jsxs)(dt,{children:[te(Fe)," / ",te(Pe)]})]}),(0,t.jsx)(ct,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(pt,{$active:he===r,onClick:()=>qe(r),children:[r,"x"]},r))})]})]}):_.file.type.startsWith("audio/")?(0,t.jsxs)(Er,{children:[(0,t.jsx)(Pr,{children:"🎵"}),(0,t.jsx)(Ur,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((r,a)=>(0,t.jsx)(Fr,{$h:r,$playing:ue,$dur:(.3+a*.07).toFixed(2)},a))}),(0,t.jsx)(Gr,{ref:$,src:_.objectURL,onTimeUpdate:Ye,onLoadedMetadata:Ve,onPlay:()=>D(!0),onPause:()=>D(!1),onEnded:()=>D(!1)}),(0,t.jsxs)(nt,{children:[(0,t.jsx)(st,{onClick:Qe,children:(0,t.jsx)(lt,{style:{width:`${Le*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(ot,{onClick:Ne,children:ue?"⏸":"▶"}),(0,t.jsxs)(dt,{children:[te(Fe)," / ",te(Pe)]})]}),(0,t.jsx)(ct,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(pt,{$active:he===r,onClick:()=>qe(r),children:[r,"x"]},r))})]})]}):null})]}),le&&(0,t.jsx)(gt,{onClick:()=>G(!1),children:(0,t.jsxs)(xt,{$isDarkMode:e,onClick:r=>r.stopPropagation(),children:[(0,t.jsxs)(ft,{$isDarkMode:e,children:[(0,t.jsxs)("h3",{children:["💬 Список чатів (",p.length,"/10)"]}),(0,t.jsx)(ut,{$isDarkMode:e,onClick:()=>G(!1),children:"✕"})]}),(0,t.jsx)(Vr,{children:p.map((r,a)=>{const n=r.id===C,l=r.messages?r.messages.length:0;return(0,t.jsxs)(Qr,{$active:n,$isDarkMode:e,onClick:()=>yt(r.id),children:[(0,t.jsxs)(qr,{children:[(0,t.jsxs)(Xr,{$active:n,children:[r.title||`Чат ${a+1}`,n&&(0,t.jsx)(Zr,{children:"Активний"})]}),(0,t.jsx)(Jr,{children:l>0?`${l} повідомл.`:"Порожній чат"})]}),(0,t.jsx)(ea,{type:"button",onClick:o=>jt(r.id,o),title:"Видалити чат",children:(0,t.jsx)(et,{})})]},r.id)})}),p.length<10&&(0,t.jsxs)(ta,{type:"button",onClick:Oe,children:["➕ Створити новий чат (",p.length,"/10)"]})]})}),$t&&(0,t.jsx)(gt,{onClick:()=>de(!1),children:(0,t.jsxs)(xt,{$isDarkMode:e,onClick:r=>r.stopPropagation(),children:[(0,t.jsxs)(ft,{$isDarkMode:e,children:[(0,t.jsx)("h3",{children:"Приблизні ліміти використання"}),(0,t.jsx)(ut,{$isDarkMode:e,onClick:()=>de(!1),children:"✕"})]}),(0,t.jsxs)(Nr,{children:[(0,t.jsxs)(ht,{$isDarkMode:e,children:[(0,t.jsx)("span",{children:" Ліміт на хвилину(Гугл):"}),(0,t.jsx)("span",{children:"15 / хв"})]}),(0,t.jsxs)(ht,{$isDarkMode:e,children:[(0,t.jsx)("span",{children:"Ліміт на добу(Гугл):"}),(0,t.jsx)("span",{children:"1500 / доба"})]})]}),(0,t.jsxs)(Yr,{$isDarkMode:e,children:[(0,t.jsx)("strong",{children:"Примітка:"})," Це безкоштовні ліміти Google AI Studio. Їх визначає ваш індивідуальний ключ, а не «Стихія» (зараз використовується модель ",(0,t.jsx)("strong",{children:H}),") Якщо ви підключите платний ключ, ліміти будуть більшими, проте тут вони все одно відображатимуться у базовому вигляді, оскільки ми не маємо доступу до параметрів вашого акаунта. Перезарядка 15с після кожного запиту та ліміт 300символів на запит зроблені з метою економії вашої квоти."]})]})})]})};export{ha as default,ca as getResponseLengthInstruction,pa as getResponseStyleInstruction,bt as parseSuggestedQuestions};

//# sourceMappingURL=Aihelp-4YhG2A6U.js.map