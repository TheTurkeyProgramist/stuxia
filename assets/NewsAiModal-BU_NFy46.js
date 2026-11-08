import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{n as i}from"./vendor-utils-BcX-d9lY.js";import{a as t}from"./vendor-i18n-DhRqfqeK.js";import{s as a}from"./vendor-motion-B-5ZsAFi.js";import{i as o,t as n}from"./styled-components.browser.esm-C9MjP7gd.js";import{t as r}from"./vendor-ai-Bo_x5aWR.js";import{a as s,c as d,d as l,f as c,i as p,l as x,n as g,o as f,p as b,r as u,s as m,t as $,u as h}from"./freeWebSearch-4svlMMDA.js";import{n as k}from"./vendor-react-B2dV4D76.js";import{En as v,H as j,Hr as y,Li as w,Qt as D,Xt as M,bt as z,dr as C,fi as B,kn as E,lr as I,u as T}from"./vendor-ui-DBFQ2jRZ.js";import{t as _}from"./domino-reading-COxbvq9p.js";import{t as S}from"./Tooltip-CDGma9Lq.js";import{D as L}from"./main-C2VxEdv8.js";var A=e(i()),P=e(t()),R=e(k()),H="/assets/domino-reading-2-BHOtORgg.webp",N="/assets/domino-reading-3-CyIHINAl.webp",K=a(),O=[_,"/assets/domino-reading-4-COZB_3VH.webp",_,H,N,H,N,H,N,H],Y=({interval:e=250,className:i=""})=>{const[t,a]=(0,P.useState)(0),[o,n]=(0,P.useState)(()=>{if("undefined"==typeof navigator||!navigator.onLine)return!0;if(navigator.connection){const e=navigator.connection;if(e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))return!0}return!1}),[r,s]=(0,P.useState)(!1),d=(0,P.useRef)(null);return(0,P.useEffect)(()=>()=>{const e=d.current;e&&(e.pause(),e.src="",e.load())},[]),(0,P.useEffect)(()=>{const e=()=>{if("undefined"==typeof navigator||navigator.onLine)if("undefined"!=typeof navigator&&navigator.connection){const e=navigator.connection;n(!!e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))}else n(!1);else n(!0)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.addEventListener("change",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.removeEventListener("change",e)}},[]),(0,P.useEffect)(()=>{if(!o&&!r)return;const i=setInterval(()=>{a(e=>(e+1)%O.length)},e);return()=>clearInterval(i)},[e,o,r]),o||r?(0,K.jsx)("img",{src:O[t],alt:"Анімований помічник",className:i,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}}):(0,K.jsx)("video",{ref:d,src:L,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onError:()=>s(!0),className:i,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}})},q=n`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`,F=o.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`,V=o.div`
  background: ${e=>e.$isDarkMode?"#121316bb":"#fcf7f7d3"};
  color: ${e=>e.$isDarkMode?"#f3f4f6":"#1f2937"};
  width: 100%;
  height: 95vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${e=>e.$isDarkMode?"0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.1)":"0 20px 50px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  animation: ${q} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`,G=o.div`
  padding: 8px;
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.01)"};
`,Q=o.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,W=o.button`
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  border: none;
  color: inherit;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
  }
`,X=o.div`
  padding: 8px 10px;
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  position: relative;
  z-index: 10;
`,Z=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.95;

  > svg {
    color: #ff8a3d;
    font-size: 14px;
    flex-shrink: 0;
  }
`,J=o.div`
  display: inline-flex;
  padding: 2px;
  gap: 2px;
  border-radius: 999px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,U=o.button`
  border: none;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.$active?"#1a1208":"inherit"};
  background: ${e=>e.$active?"linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%)":"transparent"};
  box-shadow: ${e=>e.$active?"0 2px 8px rgba(255, 138, 61, 0.35)":"none"};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%)":"rgba(255, 179, 108, 0.15)"};
  }

  small {
    opacity: 0.7;
    font-weight: 500;
    margin-left: 3px;
  }
`,ee=o.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.$active?"#ff8a3d":"inherit"};
  background: ${e=>e.$active?"rgba(255, 138, 61, 0.14)":"transparent"};
  border: 1px solid ${e=>e.$active?"rgba(255, 138, 61, 0.6)":e.$isDarkMode?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)"};
  opacity: ${e=>e.$active?1:.7};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    border-color: rgba(255, 138, 61, 0.6);
  }

  svg {
    font-size: 13px;
  }
`,ie=o.div`
  position: relative;
  flex: 1;
  min-width: 0;
`,te=o.div`
  position: absolute;
  left: 12px;
  bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,ae=o.div`
  position: absolute;
  right: 8px;
  bottom: 6px;
  display: flex;
  gap: 4px;
`,oe=o.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 179, 108, 0.35);
  border-radius: 7px;
  background: ${e=>e.$primary?"linear-gradient(135deg, #ffb36c, #ff8a3d)":"transparent"};
  color: ${e=>e.$primary?"#111":"inherit"};
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,ne=o.div`
  margin-top: 6px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,re=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`,se=[{icon:(0,K.jsx)(v,{"aria-hidden":"true"}),text:"Поясни головну думку новини."},{icon:(0,K.jsx)(M,{"aria-hidden":"true"}),text:"Які факти є найцікавішими?"},{icon:(0,K.jsx)(D,{"aria-hidden":"true"}),text:"Які можуть бути наслідки?"},{icon:(0,K.jsx)(I,{"aria-hidden":"true"}),text:"Які джерела підтверджують цю новину?"},{icon:(0,K.jsx)(z,{"aria-hidden":"true"}),text:"Що важливо знати про цю подію?"}],de=o.div`
  width: min(310px, 90vw);
  height: 156px;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 12%,
    #000 88%,
    transparent 100%
  );
`,le=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: ${e=>e.$isResetting?"none":"transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"};
  transform: ${e=>`translateY(-${52*e.$position}px)`};
`,ce=o.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 9px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 9px;
  background: ${e=>e.$isDarkMode?"rgba(255,179,108,0.06)":"rgba(255,138,61,0.05)"};
  width: 100%;
  height: 46px;
  flex: 0 0 46px;
  box-sizing: border-box;
  font-weight:700;
  color: ${e=>e.$isDarkMode?"#f3f4f6":"#1f2937"};
  cursor: pointer;
  font-size: 12px;
  text-align: left;
  transform: scale(${e=>e.$isCenter?1:.94});
  transition:
    transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
    background 0.2s ease,
    border-color 0.2s ease;
  &:hover {
    background: rgba(255, 179, 108, 0.16);
    border-color: #ffb36c;
  }
   svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
`,pe=({isDarkMode:e,onAsk:i})=>{const{position:t,isResetting:a,pauseProps:o}=g(se.length);return(0,K.jsx)(de,{role:"group","aria-label":"Популярні запитання про новину","aria-roledescription":"карусель",...o,children:(0,K.jsx)(le,{$position:t,$isResetting:a,children:[...se,...se].map(({icon:a,text:o},n)=>{const r=n>=t&&n<t+3;return(0,K.jsxs)(ce,{type:"button",$isDarkMode:e,$isCenter:n===t+1,onClick:()=>i(o),"aria-hidden":!r,tabIndex:r?0:-1,children:[a,o]},`${o}-${n}`)})})})},xe=o.div`
  padding: 5px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
    border-radius: 10px;
  }
`,ge=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fe=o.div`
  margin: auto;
  text-align: center;
  max-width: 320px;
  color: ${e=>e.$isDarkMode?"#888":"#666"};
  font-size: 13px;
  line-height: 1.5;

  span {
    font-size: 32px;
    display: block;
    margin-bottom: 8px;
  }
`,be=o.div`
  align-self: ${e=>e.$isBot?"flex-start":"flex-end"};
  background: ${e=>e.$isBot?e.$isDarkMode?"#1d1f24":"#f3f4f6":"linear-gradient(135deg, #ffb36c 0%, #ffa040 100%)"};
  color: ${e=>e.$isBot?e.$isDarkMode?"#f3f4f6":"#1f2937":"#000"};
  padding: 12px 16px;
  border-radius: ${e=>e.$isBot?"16px 16px 16px 4px":"16px 16px 4px 16px"};
  max-width: 85%;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid
    ${e=>e.$isBot?e.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)":"transparent"};
  box-shadow: ${e=>e.$isBot?"none":"0 4px 12px rgba(255, 179, 108, 0.15)"};

  p { margin: 0 0 8px 0; }
  p:last-child { margin: 0; }

  a {
    color: ${e=>e.$isBot?"#ffb36c":"#000"};
    text-decoration: underline;
  }
`,ue=o.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  background: ${e=>e.$isDarkMode?"#16171b":"#fafafa"};
`,me=o.div`
  padding: 5px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  gap: 10px;
  background: ${e=>e.$isDarkMode?"#16171b":"#fafafa"};
`,$e=o.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 118px 34px 18px;
  border-radius: 14px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
  background: ${e=>e.$isDarkMode?"#22242a":"#fff"};
  color: inherit;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ffb36c;
  }

  &::placeholder {
    color: ${e=>e.$isDarkMode?"#666":"#aaa"};
  }
`,he="gemini-2.5-flash";function ke({isOpen:e,onClose:i,newsItem:t,isDarkMode:a}){const[o,n]=(0,P.useState)("normal"),[g,k]=(0,P.useState)("0"),[D,M]=(0,P.useState)(!0),[z,I]=(0,P.useState)([]),[_,L]=(0,P.useState)(""),[H,N]=(0,P.useState)(!1),{apiKey:O,openKeyModal:q,ensureAge:se,reload:de,keyElements:le}=s({modelName:he}),ke=p(),ve=ke.seconds,{isListening:je,toggle:ye}=u({onText:e=>L(i=>`${i?`${i} `:""}${e}`.slice(0,300))}),we=(0,P.useRef)(null);(0,P.useEffect)(()=>(document.body.style.overflow=e?"hidden":"unset",()=>{document.body.style.overflow="unset"}),[e]),(0,P.useEffect)(()=>{if(!e)return;de(),ke.sync(),Promise.all([A.default.getItem("gemini_google_search_enabled"),A.default.getItem(f)]).then(([e,i])=>{null!==e&&M(e);const t=h(i);null!==t&&k(t)});const i=`news_ai_chat_${t?.link||"general"}`;A.default.getItem(i).then(e=>{e?Date.now()-e.timestamp>864e5?(I([]),A.default.removeItem(i)):I((e.messages||[]).slice(-10)):I([])})},[e,t]),(0,P.useEffect)(()=>{we.current?.scrollIntoView({behavior:"smooth"})},[z,H]);const De=e=>{const i=e.slice(-10),a=`news_ai_chat_${t?.link||"general"}`;A.default.setItem(a,{timestamp:Date.now(),messages:i}),I(i)},Me=async(e=null)=>{const i=e||_;if(!i.trim()||H||ke.isActive())return;if(!O)return void q();if(!(await se()))return;if(await ke.sync())return;const a={text:i,isBot:!1},n=[...z,a];e||L(""),I(n),N(!0);try{const e=new r(O).getGenerativeModel({model:he,...D?{tools:[{googleSearch:{}}]}:{}});let a="";D&&(a=await $(`${t?.title||""} ${i}`));const l=x(g),c=`Ти — ШІ-помічник для аналізу новин і живої дискусії.\n${s=o,"detailed"===s?"Відповідай докладно, але структуровано.":"concise"===s?"Відповідай стисло, лише головна суть.":"Відповідай нормально, збалансовано за обсягом."}\nВідповідай українською, якщо користувач не пише іншою мовою. Розрізняй підтверджені факти, твердження джерела та власні висновки; не вигадуй деталей, яких немає в новині чи наданому контексті.\nНе підтакуй автоматично, не використовуй лестощів і не хвали користувача без конкретної підстави. Оцінюй твердження за доказами; якщо не погоджуєшся, спокійно поясни чому. Відокремлюй факти, припущення й оцінки та визнавай невизначеність.\nТримай стриманий, нейтральний і предметний тон без порожніх вступів і надмірної емоційності. Враховуй попередні репліки, пояснюй ключову логіку й за потреби став одне конкретне запитання, що допоможе перевірити припущення або обдумати тему. Не додавай запитання механічно.\nЯкщо користувач розв'язує навчальну задачу, спершу дай одну конкретну підказку — навіть на перше прохання про готову відповідь. Після його спроби допоможи з наступним кроком; якщо він повторно просить повний розв'язок, поясни його без подальших відмов.\nЯкщо користувач питає про суб'єктивний особистий вибір, наприклад колір волосся чи стін, прямо скажи, що це його особистий вибір, і не вирішуй за нього. Не видавай смак за об'єктивний факт і не підміняй відповідь шаблонною символікою. Допоможи визначити критерії та порівняти практичні наслідки; якщо критеріїв немає, постав одне конкретне запитання, яке допоможе людині обрати самостійно.\n${l}`,p=z.slice(-6).map(e=>`${e.isBot?"Асистент":"Користувач"}: ${e.text}`).join("\n"),f=`${c}\n${p?`Попередній діалог:\n${p}\n`:""}Новина:\nЗаголовок: ${t?.title||""}\nОпис: ${t?.description||""}\nПосилання: ${t?.link||""}\n${a}\nЗапит користувача: ${i}`,b=await(await e.generateContent(f)).response,u=b.text(),m=b.usageMetadata,h={text:u,isBot:!0,usage:m?{promptTokens:m.promptTokenCount||0,responseTokens:m.candidatesTokenCount||0,totalTokens:m.totalTokenCount||0}:null};De([...n,h]),ke.start(d(g))}catch(l){console.error(l);const e={text:"⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",isBot:!0};De([...n,e])}finally{N(!1)}var s};return e?(0,R.createPortal)((0,K.jsxs)(K.Fragment,{children:[le,(0,K.jsx)(F,{onClick:i,children:(0,K.jsxs)(V,{$isDarkMode:a,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(G,{$isDarkMode:a,children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)(T,{style:{color:"#ff8a3d",fontSize:18}}),(0,K.jsx)("h3",{children:"ШІ Виклад новини"})]}),(0,K.jsx)(S,{content:"Закрити",isDarkMode:a,children:(0,K.jsx)(W,{$isDarkMode:a,onClick:i,"aria-label":"Закрити",children:(0,K.jsx)(j,{})})})]}),(0,K.jsxs)(X,{$isDarkMode:a,children:[(0,K.jsxs)(Z,{children:[(0,K.jsx)(S,{content:"Обсяг відповіді",isDarkMode:a,children:(0,K.jsx)(y,{})}),(0,K.jsx)(J,{$isDarkMode:a,role:"group","aria-label":"Обсяг відповіді",children:[["concise","Менше"],["normal","Нормально"],["detailed","Більше"]].map(([e,i])=>(0,K.jsx)(U,{type:"button",$active:o===e,onClick:()=>n(e),children:i},e))})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(S,{content:"Кількість запропонованих питань (затримка між запитами)",isDarkMode:a,children:(0,K.jsx)(v,{})}),(0,K.jsx)(J,{$isDarkMode:a,role:"group","aria-label":"Кількість запропонованих питань (затримка між запитами)",children:m.map(({value:e,cooldown:i})=>(0,K.jsxs)(U,{type:"button",$active:g===e,onClick:async()=>{k(e),await A.default.setItem(f,e)},children:[e,(0,K.jsxs)("small",{children:[i," с"]})]},e))})]}),(0,K.jsxs)(ee,{type:"button",$isDarkMode:a,$active:D,"aria-pressed":D,onClick:async()=>{const e=!D;M(e),await A.default.setItem("gemini_google_search_enabled",e)},children:[(0,K.jsx)(B,{}),"Інтернет-пошук"]})]}),(0,K.jsx)(xe,{$isDarkMode:a,children:0!==z.length||H?(0,K.jsxs)(ge,{children:[z.map((e,i)=>{const t=e.isBot?l(e.text):{cleanText:e.text,questions:[]};return(0,K.jsxs)(be,{$isBot:e.isBot,$isDarkMode:a,children:[(0,K.jsx)(b,{children:t.cleanText}),e.usage?.totalTokens>0&&(0,K.jsxs)(ne,{$isDarkMode:a,children:["Витрачено токенів: ",e.usage.totalTokens]}),t.questions.length>0&&(0,K.jsx)(re,{children:t.questions.map(e=>(0,K.jsx)(ce,{onClick:()=>Me(e),children:e},e))})]},i)}),H&&(0,K.jsx)(be,{$isBot:!0,$isDarkMode:a,children:"Аналізую та генерую відповідь..."}),(0,K.jsx)("div",{ref:we})]}):(0,K.jsxs)(fe,{$isDarkMode:a,children:[(0,K.jsx)(Y,{interval:250}),(0,K.jsx)("div",{style:{marginTop:"-140px",color:a?"#ffffff":"#080808"},children:"Задайте питання про новину або оберіть питання:"}),(0,K.jsx)(pe,{isDarkMode:a,onAsk:Me})]})}),(0,K.jsx)(ue,{$isDarkMode:a,children:(0,K.jsx)(c,{hasKey:Boolean(O),onClick:q,isDarkMode:a})}),(0,K.jsx)(me,{$isDarkMode:a,children:(0,K.jsxs)(ie,{children:[(0,K.jsx)($e,{$isDarkMode:a,value:_,maxLength:300,onChange:e=>L(e.target.value),onKeyDown:e=>"Enter"===e.key&&Me(),placeholder:"Задавайте питання...",disabled:H||ve>0}),(0,K.jsxs)(te,{$isDarkMode:a,children:[_.length,"/",300,ve>0&&` Перезарядка: ${ve} с`]}),(0,K.jsxs)(ae,{children:[(0,K.jsx)(S,{content:je?"Зупинити голосовий ввід":"Голосовий ввід",placement:"top",isDarkMode:a,children:(0,K.jsx)(oe,{type:"button",onClick:ye,"aria-label":je?"Зупинити голосовий ввід":"Голосовий ввід",children:je?(0,K.jsx)("span",{"aria-hidden":"true",children:"■"}):(0,K.jsx)(E,{})})}),(0,K.jsx)(S,{content:"Очистити чат",placement:"top",isDarkMode:a,children:(0,K.jsx)(oe,{type:"button",onClick:async()=>{I([]),await A.default.removeItem(`news_ai_chat_${t?.link||"general"}`)},"aria-label":"Очистити чат",children:(0,K.jsx)(C,{})})}),(0,K.jsx)(S,{content:ve>0?`Перезарядка: ${ve} с`:"Надіслати",placement:"top",isDarkMode:a,children:(0,K.jsx)(oe,{type:"button",$primary:!0,onClick:()=>Me(),disabled:H||ve>0||!_.trim(),"aria-label":ve>0?`Перезарядка: ${ve} с`:"Надіслати",children:(0,K.jsx)(w,{})})})]})]})})]})})]}),document.body):null}export{Y as AnimatedCursor,ke as default};