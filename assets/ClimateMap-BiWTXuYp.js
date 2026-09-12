import{o as B}from"./rolldown-runtime-BNNRdYrd.js";import{Bn as te,Ln as ge,Rn as he,Vn as o,gn as fe,nr as be,rr as me,tr as we}from"./vendor-react-DiGU5HTv.js";var r=B(be()),ye=B(we()),H=B(ge()),e=me();he`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;var ve=o.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${i=>i.$isDarkMode?"#ffffff":"#111111"};
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 10px;
  transition: all 0.3s ease;
  z-index: 100;
  ${i=>i.$isStickyBgMode?te`
          background: ${i.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${i.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:te`
          background: ${i.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${i.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,ke=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,je=o.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 6.6;
  min-height: 430px;
  margin: 0 auto;
  border-radius: ${i=>i.$isFullscreen?"0":"24px"};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${i=>i.$isFullscreen?"none":"1px solid rgba(255, 255, 255, 0.15)"};
  background: #1a1a1a;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
`,Se=o.div`
  display: none;
`,Me=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin: 0 5px 5px;
  padding: 11px 16px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 12px;
  background: rgba(18, 18, 28, 0.88);
  color: #ffb36c;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
`,$e=o.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background: rgba(5, 8, 14, 0.14);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`,Pe=o.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  background: rgba(23, 37, 71, 0.74);
  color: white;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
`,Ce=o.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;

  h2 {
    margin: 0;
    font-size: 19px;
  }

  p {
    margin: 4px 0 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 12px;
  }
`,f=o.button`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3px 12px;
  width: 100%;
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.07);
  color: white;
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: rgba(255, 179, 108, 0.65);
    background: rgba(255, 179, 108, 0.14);
  }

  strong {
    font-size: 13px;
  }

  span {
    grid-column: 1;
    color: rgba(255, 255, 255, 0.62);
    font-size: 11px;
    line-height: 1.35;
  }

  kbd {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    padding: 4px 7px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: #ffcf9e;
    font-size: 10px;
    white-space: nowrap;
  }
`,ze=o.button`
  width: 60px;
  font-size: 41px;
  border-radius: 10px;
  background: transparent;
  top: 8px;
  right: 10px;
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`,q=o.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${i=>i.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${i=>i.$isLoading?"0":"1"};
`,re=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  gap: 17px;
  flex-direction: column;
  width: 280px;
  text-align: center;
  z-index: 1;
  pointer-events: none;
`,l=o.button`
  background: ${i=>i.$active?"linear-gradient(135deg, #00c6ff, #0072ff)":"rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  border: 1px solid
    ${i=>i.$active?"rgba(0, 198, 255, 0.6)":"rgba(255, 255, 255, 0.15)"};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${i=>i.$active?"0 4px 12px rgba(0, 114, 255, 0.3)":"none"};

  &:hover {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 114, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,ie=o.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,ne=o.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Le=o.div`
  position: fixed;
  z-index: 2200;
  display: flex;
  flex-direction: column;
  background: rgba(10, 15, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  user-select: none;
`,Ee=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,De=o.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,Ie=o.div`
  display: flex;
  gap: 6px;
`,Fe=o.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,We=o.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(255, 255, 255, 0.35) 50%
  );
`,Re=({isDarkMode:i,isStickyBgMode:oe})=>{const[b,K]=(0,r.useState)(48.379),[m,N]=(0,r.useState)(31.165),[w,ae]=(0,r.useState)(5),[j,S]=(0,r.useState)(!1),[T,F]=(0,r.useState)(!1),[M,W]=(0,r.useState)(""),[y,G]=(0,r.useState)(!1),[V,se]=(0,r.useState)(""),[v,$]=(0,r.useState)(!0),[c,le]=(0,r.useState)("wind"),[d,k]=(0,r.useState)(!1),[P,de]=(0,r.useState)(!1),[g,p]=(0,r.useState)(!1),[x,U]=(0,r.useState)(null),[h,C]=(0,r.useState)("ventusky"),[z,ce]=(0,r.useState)(()=>typeof window>"u"?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[L,pe]=(0,r.useState)({width:320,height:220}),J=(0,r.useRef)(null),Q=(0,r.useRef)(null),E=(0,r.useRef)(null),D=(0,r.useRef)(null);(0,r.useEffect)(()=>{const t=()=>{de(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",t),()=>{document.removeEventListener("fullscreenchange",t)}},[]),(0,r.useEffect)(()=>{(async()=>{try{const n=await H.default.getItem("gemini_api_key");n&&se(n);const a=await H.default.getItem("pinned_map_location");a&&(K(a.lat),N(a.lon),ae(a.zoom),a.overlay&&le(a.overlay))}catch(n){console.error("Error loading map data:",n)}})()},[]);const Z=async t=>{t&&t.stopPropagation();try{await H.default.setItem("pinned_map_location",{lat:b,lon:m,zoom:w,overlay:c}),alert("Локацію закріплено! Вона завантажиться при наступному вході.")}catch(n){console.error("Error pinning location:",n)}},_=async()=>{if(window.documentPictureInPicture)try{const t=await window.documentPictureInPicture.requestWindow({width:400,height:300});t.document.body.style.margin="0",t.document.body.style.overflow="hidden",t.document.body.style.background="#1a1a1a",t.addEventListener("pagehide",()=>{U(null),p(!1)}),U(t),p(!0)}catch(t){console.error("PiP API failed:",t),p(!0)}else p(!0)},ee=async t=>{if(t?.preventDefault(),!(!M.trim()||y)){if(!V){alert("API-ключ Gemini не знайдено. Будь ласка, додайте його в налаштуваннях ШІ.");return}G(!0);try{const n=new fe(V).getGenerativeModel({model:"gemini-2.5-flash"}),a=`Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. 
      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.
      Запит: ${M}`;let s=(await(await n.generateContent(a)).response).text().trim();s.startsWith("```json")?s=s.replace(/```json/g,"").replace(/```/g,"").trim():s.startsWith("```")&&(s=s.replace(/```/g,"").trim());const u=JSON.parse(s);Number.isFinite(u.lat)&&Number.isFinite(u.lon)&&(K(u.lat),N(u.lon),W(""),S(!1),k(!0))}catch(n){console.error("AI Search error:",n),alert("Не вдалося знайти локацію. Спробуйте змінити запит.")}finally{G(!1)}}};(0,r.useEffect)(()=>{const t=a=>{if(E.current){const{startX:s,startY:u,originX:R,originY:O}=E.current,Y=Math.max(8,Math.min(window.innerWidth-120,R+a.clientX-s)),X=Math.max(8,Math.min(window.innerHeight-80,O+a.clientY-u));ce({x:Y,y:X})}if(D.current){const{startX:s,startY:u,width:R,height:O}=D.current,Y=Math.max(260,Math.min(window.innerWidth-24,R+a.clientX-s)),X=Math.max(200,Math.min(window.innerHeight-24,O+a.clientY-u));pe({width:Y,height:X})}},n=()=>{E.current=null,D.current=null};return window.addEventListener("mousemove",t),window.addEventListener("mouseup",n),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)}},[]);const I=(t=J)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():t.current?.requestFullscreen&&t.current.requestFullscreen()};(0,r.useEffect)(()=>{const t=n=>{if(!["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)&&n.shiftKey&&n.ctrlKey)switch(n.key.toLowerCase()){case"m":n.preventDefault(),k(a=>!a);break;case"f":n.preventDefault(),I();break;case"p":n.preventDefault(),g?x?x.close():p(!1):_();break;case"w":n.preventDefault(),C(a=>a==="windy"?"ventusky":"windy");break;case"s":n.preventDefault(),S(a=>!a)}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[g,x]);const ue=t=>{t.target.closest("button")||(t.preventDefault(),E.current={startX:t.clientX,startY:t.clientY,originX:z.x,originY:z.y})},xe=t=>{t.preventDefault(),t.stopPropagation(),D.current={startX:t.clientX,startY:t.clientY,width:L.width,height:L.height}},A=(0,r.useMemo)(()=>{if(h==="windy")return`https://embed.windy.com/embed2.html?lat=${b}&lon=${m}&zoom=${w}&level=surface&overlay=${c}&menu=&message=true&marker=`;let t=c;return c==="rain"&&(t="rain-3h"),c==="temp"&&(t="temperature"),c==="clouds"&&(t="cloud-cover"),`https://www.ventusky.com/?p=${b};${m};${w}&l=${t}`},[h,b,m,w,c]);return(0,r.useEffect)(()=>{$(!0)},[h,b,m,w,c]),(0,e.jsxs)(ke,{children:[(0,e.jsx)(ve,{$isDarkMode:i,$isStickyBgMode:oe,children:"Кліматична мапа"}),(0,e.jsx)(Me,{type:"button",onClick:()=>F(!0),"aria-label":"Відкрити налаштування Стихії",children:"⚙ Налаштування Стихії"}),(0,e.jsxs)(je,{ref:J,$isFullscreen:P,onClick:()=>!d&&k(!0),children:[(0,e.jsxs)(Se,{$isOpen:T,children:[j&&(0,e.jsxs)(ie,{onSubmit:ee,children:[(0,e.jsx)(ne,{value:M,onChange:t=>W(t.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,e.jsx)(l,{type:"submit",$active:!0,disabled:y,onClick:t=>t.stopPropagation(),children:y?"Шукаю...":"Знайти"})]}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),S(!j)},children:"ШІ Пошук"}),(0,e.jsx)(l,{onClick:Z,children:"Закріпити"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),C("ventusky")},$active:h==="ventusky",children:"Джерело: Ventusky"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),C("windy")},$active:h==="windy",children:"Джерело: Windy"}),(0,e.jsx)("div",{style:{height:"1px",background:"rgba(255,255,255,0.2)",margin:"4px 0"}}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),k(!d)},style:{border:d?"1px solid #ff4d4d":"1px solid skyblue"},children:d?"Деактивувати":"Активувати"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),I()},children:P?"Згорнути":"На весь екран"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),g?x?x.close():p(!1):_()},children:g?"Закрити міні-плеєр":"Міні-плеєр"})]}),T&&(0,e.jsx)($e,{onClick:()=>F(!1),children:(0,e.jsxs)(Pe,{onClick:t=>t.stopPropagation(),children:[(0,e.jsxs)(Ce,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:"Налаштування Стихії"}),(0,e.jsx)("p",{children:"Керуйте картою та її джерелом"})]}),(0,e.jsx)(ze,{type:"button",onClick:()=>F(!1),children:"×"})]}),j&&(0,e.jsxs)(ie,{onSubmit:ee,children:[(0,e.jsx)(ne,{value:M,onChange:t=>W(t.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,e.jsx)(l,{type:"submit",$active:!0,disabled:y,children:y?"Шукаю...":"Знайти"})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>S(!j),children:[(0,e.jsx)("strong",{children:"ШІ-пошук локації"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + S"}),(0,e.jsx)("span",{children:"Знайти місто або місце за допомогою ШІ та перемістити карту."})]}),(0,e.jsxs)(f,{type:"button",onClick:Z,children:[(0,e.jsx)("strong",{children:"Закріпити локацію"}),(0,e.jsx)("kbd",{children:"Без комбінації"}),(0,e.jsx)("span",{children:"Зберегти поточні координати, масштаб і шар для наступного входу."})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>C(t=>t==="windy"?"ventusky":"windy"),children:[(0,e.jsxs)("strong",{children:["Змінити джерело: ",h==="windy"?"Windy":"Ventusky"]}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + W"}),(0,e.jsx)("span",{children:"Перемикатися між двома погодними сервісами для перегляду карти."})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>k(!d),children:[(0,e.jsx)("strong",{children:d?"Деактивувати карту":"Активувати карту"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + M"}),(0,e.jsx)("span",{children:"Увімкнути або вимкнути взаємодію з картою та її iframe."})]}),(0,e.jsxs)(f,{type:"button",onClick:()=>I(),children:[(0,e.jsx)("strong",{children:P?"Згорнути карту":"Відкрити на весь екран"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + F"}),(0,e.jsx)("span",{children:"Розгорнути карту на весь екран пристрою або повернути звичайний вигляд."})]}),(0,e.jsxs)(f,{type:"button",onClick:_,children:[(0,e.jsx)("strong",{children:"Міні-плеєр карти"}),(0,e.jsx)("kbd",{children:"Ctrl + Shift + P"}),(0,e.jsx)("span",{children:"Винести карту в окреме плаваюче вікно для паралельної роботи."})]})]})}),g?(0,e.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:"Закрийте міні-плеєр щоб повернути карту"}):(0,e.jsxs)(e.Fragment,{children:[(!d||v)&&(0,e.jsxs)(re,{children:[(0,e.jsx)("p",{style:{fontSize:"17px"},children:d?"Завантаження...":"Натисніть на карту для активації"}),(0,e.jsx)("p",{style:{fontSize:"13px"},children:"Інтерактивні карти надано сервісами Windy та Ventusky (використовують файли cookie)"}),(0,e.jsx)("p",{style:{fontSize:"10.8px"},children:"Кнопка «Налаштування стихії» відкриває безкоштовний доступ до перемикання мап, пошуку міст за допомогою ШІ, згортання у міні-плеєр та інших функцій!"})]}),(0,e.jsx)(q,{title:"Weather Map",src:d?A:void 0,$isLoading:v,$isReady:d,onLoad:()=>$(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})]})]}),x?(0,ye.createPortal)((0,e.jsx)(q,{title:"Weather Map (PiP)",src:A,$isLoading:v,$isReady:!0,onLoad:()=>$(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy",style:{width:"100%",height:"100vh"}}),x.document.body):g&&(0,e.jsxs)(Le,{ref:Q,onDoubleClick:()=>p(!1),style:{left:z.x,top:z.y,width:L.width,height:L.height},children:[(0,e.jsxs)(Ee,{onMouseDown:ue,children:[(0,e.jsx)(De,{children:"Міні-карта • подвійний клік — назад"}),(0,e.jsxs)(Ie,{children:[(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),I(Q)},children:P?"Згорнути":"⛶"}),(0,e.jsx)(l,{onClick:t=>{t.stopPropagation(),p(!1)},children:"✕"})]})]}),(0,e.jsxs)(Fe,{children:[v&&(0,e.jsx)(re,{children:(0,e.jsx)("p",{children:"Завантаження..."})}),(0,e.jsx)(q,{title:"Weather Map Mini",src:A,$isLoading:v,$isReady:!0,onLoad:()=>$(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"}),(0,e.jsx)(We,{onMouseDown:xe})]})]})]})};export{Re as default};

//# sourceMappingURL=ClimateMap-BiWTXuYp.js.map