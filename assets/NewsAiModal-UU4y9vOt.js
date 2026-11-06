import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as t}from"./vendor-i18n-4NhlWQFf.js";import{n}from"./vendor-react-DlsUijjD.js";import{s as r}from"./vendor-motion-Bh6mtAYz.js";import{n as i}from"./vendor-utils-BcX-d9lY.js";import{C as a,D as o,E as s,En as l,Gt as d,S as c,T as p,Tt as x,U as f,_ as g,b as u,bi as b,cn as m,g as h,h as $,lr as k,m as v,qn as w,qt as j,t as y,ur as M,v as D,vi as _,w as I,x as z,y as S}from"./vendor-ui-BcfDBn2Z.js";import{B as C,H as E,g as T,t as B}from"./index-2DOTQNJp.js";import{t as R}from"./vendor-ai-Bo_x5aWR.js";import{n as q,t as L}from"./freeWebSearch-DSf0b8-p.js";var A=e(n()),F=e(i()),N=e(t()),P=r(),O=E.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  /* Вище за модалки (ModalOverlay має 99999) */
  z-index: 100000;
  pointer-events: none;
  white-space: nowrap;
`,H=({content:e,children:t,placement:n="bottom",isDarkMode:r=!0})=>{const[i,l]=(0,N.useState)(!1),d=(0,N.useRef)(null),{refs:x,floatingStyles:f,context:b}=g({open:i,onOpenChange:l,placement:n,strategy:"fixed",transform:!1,whileElementsMounted:o,middleware:[p(8),I(),s({padding:5}),a({element:d})]}),{isMounted:m,styles:k}=c(b,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),w=S(b,{move:!1}),j=D(b),y=h(b),M=z(b,{role:"tooltip"}),{getReferenceProps:_,getFloatingProps:C}=u([w,j,y,M]);if(!e)return t;const E=r?"#111111":"#ffffff";return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("span",{ref:x.setReference,..._(),style:{display:"inline-flex"},children:t}),m&&(0,P.jsx)($,{children:(0,P.jsxs)(O,{ref:x.setFloating,$isDarkMode:r,style:{...f,...k},...C(),children:[e,(0,P.jsx)(v,{ref:d,context:b,fill:E,stroke:"#00acb9",strokeWidth:1})]})})]})},G="/assets/domino-reading-2-BHOtORgg.webp",Y="/assets/domino-reading-3-CyIHINAl.webp",U=[T,"/assets/domino-reading-4-COZB_3VH.webp",T,G,Y,G,Y,G,Y,G],V=({interval:e=250,className:t=""})=>{const[n,r]=(0,N.useState)(0),[i,a]=(0,N.useState)(()=>{if("undefined"==typeof navigator||!navigator.onLine)return!0;if(navigator.connection){const e=navigator.connection;if(e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))return!0}return!1}),[o,s]=(0,N.useState)(!1),l=(0,N.useRef)(null);return(0,N.useEffect)(()=>()=>{const e=l.current;e&&(e.pause(),e.src="",e.load())},[]),(0,N.useEffect)(()=>{const e=()=>{if("undefined"==typeof navigator||navigator.onLine)if("undefined"!=typeof navigator&&navigator.connection){const e=navigator.connection;a(!!e.saveData||["slow-2g","2g","3g"].includes(e.effectiveType))}else a(!1);else a(!0)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.addEventListener("change",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e),"undefined"!=typeof navigator&&navigator.connection&&navigator.connection.removeEventListener("change",e)}},[]),(0,N.useEffect)(()=>{if(!i&&!o)return;const t=setInterval(()=>{r(e=>(e+1)%U.length)},e);return()=>clearInterval(t)},[e,i,o]),i||o?(0,P.jsx)("img",{src:U[n],alt:"Анімований помічник",className:t,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}}):(0,P.jsx)("video",{ref:l,src:B,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onError:()=>s(!0),className:t,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}})},W=C`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`,K=E.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`,Z=E.div`
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
  animation: ${W} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`,J=E.div`
  padding: 8px;
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.01)"};
`,Q=E.div`
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
`,X=E.button`
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
`,ee=E.div`
  padding: 8px 10px;
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  position: relative;
  z-index: 10;
`,te=E.div`
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
`,ne=E.div`
  display: inline-flex;
  padding: 2px;
  gap: 2px;
  border-radius: 999px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,re=E.button`
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
`,ie=E.button`
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
`,ae=E.div`
  position: relative;
  flex: 1;
  min-width: 0;
`,oe=E.div`
  position: absolute;
  left: 12px;
  bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,se=E.div`
  position: absolute;
  right: 8px;
  bottom: 6px;
  display: flex;
  gap: 4px;
`,le=E.button`
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
`,de=E.div`
  margin-top: 6px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,ce=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`,pe=[{icon:(0,P.jsx)(d,{"aria-hidden":"true"}),text:"Поясни головну думку новини."},{icon:(0,P.jsx)(_,{"aria-hidden":"true"}),text:"Які факти є найцікавішими?"},{icon:(0,P.jsx)(b,{"aria-hidden":"true"}),text:"Які можуть бути наслідки?"},{icon:(0,P.jsx)(x,{"aria-hidden":"true"}),text:"Які джерела підтверджують цю новину?"},{icon:(0,P.jsx)(f,{"aria-hidden":"true"}),text:"Що важливо знати про цю подію?"}],xe=E.div`
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
`,fe=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: ${e=>e.$isResetting?"none":"transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"};
  transform: ${e=>`translateY(-${52*e.$position}px)`};
`,ge=E.button`
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
`,ue=({isDarkMode:e,onAsk:t})=>{const[n,r]=(0,N.useState)(0),[i,a]=(0,N.useState)(!1),[o,s]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{if(i)return;const e=setInterval(()=>{r(e=>Math.min(e+1,pe.length))},3e3);return()=>clearInterval(e)},[i]),(0,N.useEffect)(()=>{if(n<pe.length)return;const e=setTimeout(()=>{s(!0),r(0),requestAnimationFrame(()=>{requestAnimationFrame(()=>s(!1))})},700);return()=>clearTimeout(e)},[n]),(0,P.jsx)(xe,{role:"group","aria-label":"Популярні запитання про новину","aria-roledescription":"карусель",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onFocus:()=>a(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||a(!1)},children:(0,P.jsx)(fe,{$position:n,$isResetting:o,children:[...pe,...pe].map(({icon:r,text:i},a)=>{const o=a>=n&&a<n+3;return(0,P.jsxs)(ge,{type:"button",$isDarkMode:e,$isCenter:a===n+1,onClick:()=>t(i),"aria-hidden":!o,tabIndex:o?0:-1,children:[r,i]},`${i}-${a}`)})})})},be=E.div`
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
`,me=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,he=E.div`
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
`,$e=E.div`
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
`,ke=E.div`
  padding: 5px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  gap: 10px;
  background: ${e=>e.$isDarkMode?"#16171b":"#fafafa"};
`,ve=E.input`
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
`,we="gemini_global_cooldown_until";function je({isOpen:e,onClose:t,newsItem:n,isDarkMode:r}){const[i,a]=(0,N.useState)("normal"),[o,s]=(0,N.useState)("0"),[c,p]=(0,N.useState)(!0),[x,f]=(0,N.useState)([]),[g,u]=(0,N.useState)(""),[b,h]=(0,N.useState)(!1),[$,v]=(0,N.useState)(""),[D,_]=(0,N.useState)(0),[I,z]=(0,N.useState)(!1),S=(0,N.useRef)(null),C=(0,N.useRef)(null),E=(0,N.useRef)(0);(0,N.useEffect)(()=>(document.body.style.overflow=e?"hidden":"unset",()=>{document.body.style.overflow="unset"}),[e]),(0,N.useEffect)(()=>{if(!e)return;Promise.all([F.default.getItem("gemini_api_key"),F.default.getItem("gemini_google_search_enabled"),F.default.getItem("gemini_suggested_questions_count"),F.default.getItem(we)]).then(([e,t,n,r])=>{v(e||""),null!==t&&p(t),["0","1","2"].includes(n)&&s(n),r&&r>Date.now()&&(E.current=r,_(Math.ceil((r-Date.now())/1e3)))});const t=`news_ai_chat_${n?.link||"general"}`;F.default.getItem(t).then(e=>{e?Date.now()-e.timestamp>864e5?(f([]),F.default.removeItem(t)):f((e.messages||[]).slice(-10)):f([])})},[e,n]),(0,N.useEffect)(()=>{const e=setInterval(()=>{F.default.getItem(we).then(e=>{const t=Math.max(E.current,Number(e)||0),n=Math.max(0,t-Date.now());E.current=t,_(Math.ceil(n/1e3)),!n&&t&&(E.current=0,F.default.removeItem(we))})},250);return()=>clearInterval(e)},[]),(0,N.useEffect)(()=>{S.current?.scrollIntoView({behavior:"smooth"})},[x,b]);const T=e=>{const t=e.slice(-10),r=`news_ai_chat_${n?.link||"general"}`;F.default.setItem(r,{timestamp:Date.now(),messages:t}),f(t)},B=async(e=null)=>{const t=e||g;if(!t.trim()||b||E.current>Date.now())return;if(!$)return void alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");const r={text:t,isBot:!1},a=[...x,r];e||u(""),f(a),h(!0);try{const e=new R($).getGenerativeModel({model:"gemini-2.5-flash",...c?{tools:[{googleSearch:{}}]}:{}});let r="";c&&(r=await L(`${n?.title||""} ${t}`));const l=Number(o),d=l?`Додай рівно ${l} коротке(их) змістовне(их) питання(нь) у блоці [РЕКОМЕНДОВАНІ_ПИТАННЯ], щоб допомогти обдумати тему, перевірити припущення чи побачити іншу перспективу, а не просто продовжити чат.`:"Не додавай блок рекомендованих питань.",p=`Ти — ШІ-помічник для аналізу новин і живої дискусії.\n${s=i,"detailed"===s?"Відповідай докладно, але структуровано.":"concise"===s?"Відповідай стисло, лише головна суть.":"Відповідай нормально, збалансовано за обсягом."}\nВідповідай українською, якщо користувач не пише іншою мовою. Розрізняй підтверджені факти, твердження джерела та власні висновки; не вигадуй деталей, яких немає в новині чи наданому контексті.\nНе підтакуй автоматично, не використовуй лестощів і не хвали користувача без конкретної підстави. Оцінюй твердження за доказами; якщо не погоджуєшся, спокійно поясни чому. Відокремлюй факти, припущення й оцінки та визнавай невизначеність.\nТримай стриманий, нейтральний і предметний тон без порожніх вступів і надмірної емоційності. Враховуй попередні репліки, пояснюй ключову логіку й за потреби став одне конкретне запитання, що допоможе перевірити припущення або обдумати тему. Не додавай запитання механічно.\nЯкщо користувач розв'язує навчальну задачу, спершу дай одну конкретну підказку — навіть на перше прохання про готову відповідь. Після його спроби допоможи з наступним кроком; якщо він повторно просить повний розв'язок, поясни його без подальших відмов.\nЯкщо користувач питає про суб'єктивний особистий вибір, наприклад колір волосся чи стін, прямо скажи, що це його особистий вибір, і не вирішуй за нього. Не видавай смак за об'єктивний факт і не підміняй відповідь шаблонною символікою. Допоможи визначити критерії та порівняти практичні наслідки; якщо критеріїв немає, постав одне конкретне запитання, яке допоможе людині обрати самостійно.\n${d}`,f=x.slice(-6).map(e=>`${e.isBot?"Асистент":"Користувач"}: ${e.text}`).join("\n"),g=`${p}\n${f?`Попередній діалог:\n${f}\n`:""}Новина:\nЗаголовок: ${n?.title||""}\nОпис: ${n?.description||""}\nПосилання: ${n?.link||""}\n${r}\nЗапит користувача: ${t}`,u=await(await e.generateContent(g)).response,b=u.text(),m=u.usageMetadata,h={text:b,isBot:!0,usage:m?{promptTokens:m.promptTokenCount||0,responseTokens:m.candidatesTokenCount||0,totalTokens:m.totalTokenCount||0}:null};T([...a,h]),(e=>{const t=Date.now()+1e3*e;E.current=t,_(e),F.default.setItem(we,t)})(0===Number(o)?5:1===Number(o)?10:15)}catch(l){console.error(l);const e={text:"⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",isBot:!0};T([...a,e])}finally{h(!1)}var s};return e?(0,A.createPortal)((0,P.jsx)(K,{onClick:t,children:(0,P.jsxs)(Z,{$isDarkMode:r,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(J,{$isDarkMode:r,children:[(0,P.jsxs)(Q,{children:[(0,P.jsx)(y,{style:{color:"#ff8a3d",fontSize:18}}),(0,P.jsx)("h3",{children:"ШІ Виклад новини"})]}),(0,P.jsx)(H,{content:"Закрити",isDarkMode:r,children:(0,P.jsx)(X,{$isDarkMode:r,onClick:t,"aria-label":"Закрити",children:(0,P.jsx)(M,{})})})]}),(0,P.jsxs)(ee,{$isDarkMode:r,children:[(0,P.jsxs)(te,{children:[(0,P.jsx)(H,{content:"Обсяг відповіді",isDarkMode:r,children:(0,P.jsx)(m,{})}),(0,P.jsx)(ne,{$isDarkMode:r,role:"group","aria-label":"Обсяг відповіді",children:[["concise","Менше"],["normal","Нормально"],["detailed","Більше"]].map(([e,t])=>(0,P.jsx)(re,{type:"button",$active:i===e,onClick:()=>a(e),children:t},e))})]}),(0,P.jsxs)(te,{children:[(0,P.jsx)(H,{content:"Кількість запропонованих питань (затримка між запитами)",isDarkMode:r,children:(0,P.jsx)(d,{})}),(0,P.jsx)(ne,{$isDarkMode:r,role:"group","aria-label":"Кількість запропонованих питань (затримка між запитами)",children:[["0","5 с"],["1","10 с"],["2","15 с"]].map(([e,t])=>(0,P.jsxs)(re,{type:"button",$active:o===e,onClick:async()=>{s(e),await F.default.setItem("gemini_suggested_questions_count",e)},children:[e,(0,P.jsx)("small",{children:t})]},e))})]}),(0,P.jsxs)(ie,{type:"button",$isDarkMode:r,$active:c,"aria-pressed":c,onClick:async()=>{const e=!c;p(e),await F.default.setItem("gemini_google_search_enabled",e)},children:[(0,P.jsx)(l,{}),"Інтернет-пошук"]})]}),(0,P.jsx)(be,{$isDarkMode:r,children:0!==x.length||b?(0,P.jsxs)(me,{children:[x.map((e,t)=>{const n=e.isBot?(e=>{const t=/\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/,n=e.match(t);if(!n)return{cleanText:e,questions:[]};const r=n[1].split("\n").map(e=>e.replace(/^[•\-*\d.\s]+/,"").trim()).filter(Boolean).slice(0,2);return{cleanText:e.replace(t,"").trim(),questions:r}})(e.text):{cleanText:e.text,questions:[]};return(0,P.jsxs)($e,{$isBot:e.isBot,$isDarkMode:r,children:[(0,P.jsx)(q,{children:n.cleanText}),e.usage?.totalTokens>0&&(0,P.jsxs)(de,{$isDarkMode:r,children:["Витрачено токенів: ",e.usage.totalTokens]}),n.questions.length>0&&(0,P.jsx)(ce,{children:n.questions.map(e=>(0,P.jsx)(ge,{onClick:()=>B(e),children:e},e))})]},t)}),b&&(0,P.jsx)($e,{$isBot:!0,$isDarkMode:r,children:"Аналізую та генерую відповідь..."}),(0,P.jsx)("div",{ref:S})]}):(0,P.jsxs)(he,{$isDarkMode:r,children:[(0,P.jsx)(V,{interval:250}),(0,P.jsx)("div",{style:{marginTop:"-140px",color:r?"#ffffff":"#080808"},children:"Задайте питання про новину або оберіть питання:"}),(0,P.jsx)(ue,{isDarkMode:r,onAsk:B})]})}),(0,P.jsx)(ke,{$isDarkMode:r,children:(0,P.jsxs)(ae,{children:[(0,P.jsx)(ve,{$isDarkMode:r,value:g,maxLength:300,onChange:e=>u(e.target.value),onKeyDown:e=>"Enter"===e.key&&B(),placeholder:"Задавайте питання...",disabled:b||D>0}),(0,P.jsxs)(oe,{$isDarkMode:r,children:[g.length,"/",300,D>0&&` Перезарядка: ${D} с`]}),(0,P.jsxs)(se,{children:[(0,P.jsx)(H,{content:I?"Зупинити голосовий ввід":"Голосовий ввід",placement:"top",isDarkMode:r,children:(0,P.jsx)(le,{type:"button",onClick:()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return;if(I&&C.current)return void C.current.stop();const t=new e;C.current=t,t.lang="uk-UA",t.onstart=()=>z(!0),t.onresult=e=>{u(t=>`${t?`${t} `:""}${e.results[0][0].transcript}`.slice(0,300))},t.onend=()=>{z(!1),C.current=null},t.start()},"aria-label":I?"Зупинити голосовий ввід":"Голосовий ввід",children:I?(0,P.jsx)("span",{"aria-hidden":"true",children:"■"}):(0,P.jsx)(j,{})})}),(0,P.jsx)(H,{content:"Очистити чат",placement:"top",isDarkMode:r,children:(0,P.jsx)(le,{type:"button",onClick:async()=>{f([]),await F.default.removeItem(`news_ai_chat_${n?.link||"general"}`)},"aria-label":"Очистити чат",children:(0,P.jsx)(k,{})})}),(0,P.jsx)(H,{content:D>0?`Перезарядка: ${D} с`:"Надіслати",placement:"top",isDarkMode:r,children:(0,P.jsx)(le,{type:"button",$primary:!0,onClick:()=>B(),disabled:b||D>0||!g.trim(),"aria-label":D>0?`Перезарядка: ${D} с`:"Надіслати",children:(0,P.jsx)(w,{})})})]})]})})]})}),document.body):null}export{V as AnimatedCursor,je as default};