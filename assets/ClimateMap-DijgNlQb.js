import{o as J}from"./rolldown-runtime-BNNRdYrd.js";import{Kn as fe,Un as Le,Wn as De,cr as We,lr as Ae,qn as i,sr as Re,xn as Oe}from"./vendor-react-DAvkYs3-.js";var n=J(We()),Te=J(Re()),He="/assets/pixelturkey-BmTE6gJZ.webp",Ye="/assets/twoturkey-DwTdfiOy.webp",Be="/assets/climate-3SqiuMmu.webp",x=J(Le()),t=Ae();De`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;var Xe=i.div`
  font-size: 20px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${a=>a.$isDarkMode?"#ffffff":"#111111"};
  display: inline-flex;
    margin-bottom: -41px;
    width: 200px;
  padding:3px 7px;
  transition: all 0.3s ease;
  border-right: 1px solid rgb(255, 179, 108);
    border-left: 1px solid rgb(255, 179, 108);
  margin-right: 4px;
  z-index: 300;
  ${a=>a.$isStickyBgMode?fe`
          background: ${a.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:fe`
          background: ${a.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${a.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,Ue=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,qe=i.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 6.6;
  min-height: 560px;
  margin: 0 auto;
  border-radius: ${a=>a.$isFullscreen?"0":"8px"};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${a=>a.$isFullscreen?"none":"1px solid rgba(255, 255, 255, 0.15)"};
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${Be});
    background-size: cover;
    background-position: center;
    opacity: 0.89;
  }
`,Ne=i.div`
  display: none;
`,Ke=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 10px 4px;
  border: 1px solid rgb(255, 179, 108);
  border-radius: 7px;
  background: rgba(18, 18, 28, 0.88);
  color: #ffb36c;
  cursor: pointer;
  z-index: 100;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
`,Ge=i.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: end;
  justify-content: center;
  background: rgba(5, 8, 14, 0.14);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`,Ve=i.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-top: 56px;
  background: rgba(23, 37, 71, 0.74);
  color: white;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
`,Je=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 0;
  margin-left: -8px;
  padding-left: 15px;
  width: 100%;
  margin-bottom: 7px;
  background: #243e5a;

  h2 {
    margin: 0;
    font-size: 19px;
  }

  p {
    color: rgba(255, 255, 255, 0.64);
    font-size: 12px;
  }
`,y=i.button`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  margin-top: 6px;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
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
`,Qe=i.button`
  width: 60px;
  font-size: 41px;
  border-radius: 10px;
  background: transparent;
  top: -18px;
  right: -10px;
  position: absolute;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,G=i.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${a=>a.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${a=>a.$isLoading?"0":"1"};
`,he=i.div`
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
`,g=i.button`
  background: ${a=>a.$active?"linear-gradient(135deg, #00c6ff, #0072ff)":"rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  border: 1px solid
    ${a=>a.$active?"rgba(0, 198, 255, 0.6)":"rgba(255, 255, 255, 0.15)"};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${a=>a.$active?"0 4px 12px rgba(0, 114, 255, 0.3)":"none"};

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
`,be=i.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,me=i.input`
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
`,Ze=i.div`
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
`,et=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,tt=i.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,rt=i.div`
  display: flex;
  gap: 6px;
`,it=i.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,nt=i.div`
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
`,ye=[{id:"alerts-ua",title:"Карта повітряних тривог України",url:"https://alerts.in.ua/",height:500,isActive:!1,isPreset:!0}];i.div`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4px;
`;i.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${a=>a.$isDarkMode?"#ffffff":"#111111"};
  display: flex;
  align-items: center;
  gap: 8px;
`;i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
  width: 100%;
`;i.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(18, 24, 38, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
`;i.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
`;i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;i.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.15);
  }
`;var ot=i.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  padding: 16px;
`,at=i.div`
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  background: #121826;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  padding: 22px;
  color: #ffffff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
`,st=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,lt=i.button`
  background: transparent;
  border: none;
  color: #aaa;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`,dt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 8px;
`;i.button`
  padding: 6px 14px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  background: ${a=>a.$active?"#4caf50":"rgba(255,255,255,0.2)"};
  color: #ffffff;
  transition: background 0.2s;
`;var ct=i.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,V=i.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`,pt=i.button`
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #ffb36c, #ff8c00);
  color: #111;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    opacity: 0.9;
  }
`,ut=i.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 13px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: border-color 0.2s;

  &:hover, &:focus {
    border-color: #ffb36c;
  }

  option {
    background: #121826;
    color: white;
  }
`,xt=i.div`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
`,gt=i.select`
  width: 100%;
  padding: 7px;
  border-radius: 8px 8px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(33, 57, 94, 0.9);
  color: white;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  margin-top: 6px;

  option {
    background: rgba(33, 57, 94, 0.9);
    color: white;
  }
`,bt=({isDarkMode:a,isStickyBgMode:ve})=>{const[v,Q]=(0,n.useState)(48.379),[w,Z]=(0,n.useState)(31.165),[k,we]=(0,n.useState)(5),[F,_]=(0,n.useState)(!1),[ee,I]=(0,n.useState)(!1),[E,X]=(0,n.useState)(""),[z,te]=(0,n.useState)(!1),[re,ke]=(0,n.useState)(""),[P,L]=(0,n.useState)(!0),[c,je]=(0,n.useState)("wind"),[u,j]=(0,n.useState)(!1),[D,Se]=(0,n.useState)(!1),[S,b]=(0,n.useState)(!1),[m,ie]=(0,n.useState)(null),[d,W]=(0,n.useState)("ventusky"),ne=[He,Ye],[Me,Ce]=(0,n.useState)(0);(0,n.useEffect)(()=>{const e=setInterval(()=>{Ce(r=>(r+1)%ne.length)},1500);return()=>clearInterval(e)},[]);const[A,ze]=(0,n.useState)(()=>typeof window>"u"?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[R,Pe]=(0,n.useState)({width:320,height:220}),oe=(0,n.useRef)(null),ae=(0,n.useRef)(null),O=(0,n.useRef)(null),T=(0,n.useRef)(null),[p,se]=(0,n.useState)(ye),[$e,M]=(0,n.useState)(!1),[le,de]=(0,n.useState)(""),[U,ce]=(0,n.useState)(""),[pe,ue]=(0,n.useState)("450");(0,n.useEffect)(()=>{const e=()=>{Se(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e)}},[]);const H=async e=>{W(e);try{await x.default.setItem("selected_climate_provider",e)}catch(r){console.error("Error saving climate provider:",r)}},q=async()=>{j(!0);try{await x.default.setItem("map_last_unlocked_time",Date.now())}catch(e){console.error("Error saving map unlock time:",e)}};(0,n.useEffect)(()=>{(async()=>{try{const r=await x.default.getItem("gemini_api_key");r&&ke(r);const o=await x.default.getItem("selected_climate_provider");o&&W(o);const s=await x.default.getItem("pinned_map_location");s&&(Q(s.lat),Z(s.lon),we(s.zoom),s.overlay&&je(s.overlay),s.provider&&W(s.provider));const l=await x.default.getItem("map_last_unlocked_time");l&&Date.now()-l<6048e5&&j(!0);const f=await x.default.getItem("climate_custom_frames");if(f&&Array.isArray(f)){const h=[...f];ye.forEach(C=>{h.some($=>$.id===C.id)||h.unshift(C)}),se(h)}}catch(r){console.error("Error loading map data:",r)}})()},[]);const xe=async e=>{se(e);try{await x.default.setItem("climate_custom_frames",e)}catch(r){console.error("Error saving custom frames:",r)}},Fe=e=>{const r=p.filter(o=>o.id!==e);xe(r),d===e&&H("ventusky")},_e=e=>{if(e.preventDefault(),!U.trim())return;if(p.filter(h=>!h.isPreset).length>=2){alert("Максимальний ліміт: можна додати не більше 2 власних фреймів.");return}let r=U.trim();const o=r.match(/src=["']([^"']+)["']/i);if(o&&(r=o[1]),!r.startsWith("http://")&&!r.startsWith("https://")){alert("Будь ласка, введіть коректне посилання (https://...)");return}const s=le.trim()||"Кастомний віджет",l=parseInt(pe,10)||450,f={id:"custom-"+Date.now(),title:s,url:r,height:l,isActive:!0,isPreset:!1};xe([...p,f]),de(""),ce(""),ue("450")},Y=async e=>{e&&e.stopPropagation();try{await x.default.setItem("pinned_map_location",{lat:v,lon:w,zoom:k,overlay:c,provider:d}),await x.default.setItem("selected_climate_provider",d),alert("Локацію та обране джерело карти закріплено! Вони завантажаться при наступному вході.")}catch(r){console.error("Error pinning location:",r)}},N=async()=>{if(window.documentPictureInPicture)try{const e=await window.documentPictureInPicture.requestWindow({width:400,height:300});e.document.body.style.margin="0",e.document.body.style.overflow="hidden",e.document.body.style.background="#1a1a1a",e.addEventListener("pagehide",()=>{ie(null),b(!1)}),ie(e),b(!0)}catch(e){console.error("PiP API failed:",e),b(!0)}else b(!0)},ge=async e=>{if(e?.preventDefault(),!(!E.trim()||z)){if(!re){alert("API-ключ Gemini не знайдено. Будь ласка, додайте його в налаштуваннях ШІ.");return}te(!0);try{const r=new Oe(re).getGenerativeModel({model:"gemini-2.5-flash",tools:[{googleSearch:{}}]}),o=`Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. 
      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.
      Запит: ${E}`;let s=(await(await r.generateContent(o)).response).text().trim();s.startsWith("```json")?s=s.replace(/```json/g,"").replace(/```/g,"").trim():s.startsWith("```")&&(s=s.replace(/```/g,"").trim());const l=JSON.parse(s);Number.isFinite(l.lat)&&Number.isFinite(l.lon)&&(Q(l.lat),Z(l.lon),X(""),_(!1),j(!0))}catch(r){console.error("AI Search error:",r),alert("Не вдалося знайти локацію. Спробуйте змінити запит.")}finally{te(!1)}}};(0,n.useEffect)(()=>{const e=o=>{if(O.current){const{startX:s,startY:l,originX:f,originY:h}=O.current,C=Math.max(8,Math.min(window.innerWidth-120,f+o.clientX-s)),$=Math.max(8,Math.min(window.innerHeight-80,h+o.clientY-l));ze({x:C,y:$})}if(T.current){const{startX:s,startY:l,width:f,height:h}=T.current,C=Math.max(260,Math.min(window.innerWidth-24,f+o.clientX-s)),$=Math.max(200,Math.min(window.innerHeight-24,h+o.clientY-l));Pe({width:C,height:$})}},r=()=>{O.current=null,T.current=null};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",r),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r)}},[]);const B=(e=oe)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.current?.requestFullscreen&&e.current.requestFullscreen()};(0,n.useEffect)(()=>{const e=r=>{if(!["INPUT","TEXTAREA","SELECT"].includes(r.target.tagName)&&r.shiftKey&&r.ctrlKey)switch(r.key.toLowerCase()){case"m":r.preventDefault(),j(o=>!o);break;case"f":r.preventDefault(),B();break;case"p":r.preventDefault(),S?m?m.close():b(!1):N();break;case"w":{r.preventDefault();const o=["ventusky","windy",...p.map(s=>s.id)];W(s=>{const l=(o.indexOf(s)+1)%o.length;return o[l]});break}case"s":r.preventDefault(),_(o=>!o);break;case"l":r.preventDefault(),Y();break;case"k":r.preventDefault(),M(o=>!o)}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[S,m,p]);const Ie=e=>{e.target.closest("button")||(e.preventDefault(),O.current={startX:e.clientX,startY:e.clientY,originX:A.x,originY:A.y})},Ee=e=>{e.preventDefault(),e.stopPropagation(),T.current={startX:e.clientX,startY:e.clientY,width:R.width,height:R.height}},K=(0,n.useMemo)(()=>{if(d==="windy")return`https://embed.windy.com/embed2.html?lat=${v}&lon=${w}&zoom=${k}&level=surface&overlay=${c}&menu=&message=true&marker=`;if(d==="ventusky"){let o=c;return c==="rain"&&(o="rain-3h"),c==="temp"&&(o="temperature"),c==="clouds"&&(o="cloud-cover"),`https://www.ventusky.com/?p=${v};${w};${k}&l=${o}`}const e=p.find(o=>o.id===d);if(e)return e.url;let r=c;return c==="rain"&&(r="rain-3h"),c==="temp"&&(r="temperature"),c==="clouds"&&(r="cloud-cover"),`https://www.ventusky.com/?p=${v};${w};${k}&l=${r}`},[d,v,w,k,c,p]);return(0,n.useEffect)(()=>{L(!0)},[d,v,w,k,c]),(0,t.jsxs)(Ue,{children:[(0,t.jsx)(Xe,{$isDarkMode:a,$isStickyBgMode:ve,children:"Кліматична мапа"}),(0,t.jsx)(Ke,{type:"button",onClick:()=>I(!0),"aria-label":"Відкрити налаштування Стихії",children:"Налаштування Стихії"}),(0,t.jsxs)(qe,{ref:oe,$isFullscreen:D,onClick:()=>!u&&q(),children:[(0,t.jsxs)(Ne,{$isOpen:ee,children:[F&&(0,t.jsxs)(be,{onSubmit:ge,children:[(0,t.jsx)(me,{value:E,onChange:e=>X(e.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,t.jsx)(g,{type:"submit",$active:!0,disabled:z,onClick:e=>e.stopPropagation(),children:z?"Шукаю...":"Знайти"})]}),(0,t.jsx)(g,{onClick:e=>{e.stopPropagation(),_(!F)},children:"ШІ Пошук"}),(0,t.jsx)(g,{onClick:Y,children:"Закріпити"}),(0,t.jsxs)(ut,{value:d,onChange:e=>H(e.target.value),onClick:e=>e.stopPropagation(),title:"Оберіть джерело мапи",children:[(0,t.jsx)("option",{value:"ventusky",children:"Джерело: Ventusky"}),(0,t.jsx)("option",{value:"windy",children:"Джерело: Windy"}),p.map(e=>(0,t.jsxs)("option",{value:e.id,children:["Джерело: ",e.title]},e.id))]}),(0,t.jsx)("div",{style:{height:"1px",background:"rgba(255,255,255,0.2)",margin:"4px 0"}}),(0,t.jsx)(g,{onClick:e=>{e.stopPropagation(),u?j(!1):q()},style:{border:u?"1px solid #ff4d4d":"1px solid skyblue"},children:u?"Деактивувати":"Активувати"}),(0,t.jsx)(g,{onClick:e=>{e.stopPropagation(),B()},children:D?"Згорнути":"На весь екран"}),(0,t.jsx)(g,{onClick:e=>{e.stopPropagation(),S?m?m.close():b(!1):N()},children:S?"Закрити міні-плеєр":"Міні-плеєр"}),(0,t.jsx)(g,{onClick:e=>{e.stopPropagation(),M(!0)},children:"Кастомні віджети"})]}),ee&&(0,t.jsx)(Ge,{onClick:()=>I(!1),children:(0,t.jsxs)(Ve,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(Je,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Налаштування Стихії"}),(0,t.jsx)("p",{children:"Керуйте картою та її джерелом"})]}),(0,t.jsx)(Qe,{type:"button",onClick:()=>I(!1),children:"×"})]}),F&&(0,t.jsxs)(be,{onSubmit:ge,children:[(0,t.jsx)(me,{value:E,onChange:e=>X(e.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,t.jsx)(g,{type:"submit",$active:!0,disabled:z,children:z?"Шукаю...":"Знайти"})]}),(0,t.jsxs)(y,{type:"button",onClick:()=>_(!F),children:[(0,t.jsx)("strong",{children:"ШІ-пошук локації"}),(0,t.jsx)("kbd",{children:"Ctrl + Shift + S"}),(0,t.jsx)("span",{children:"Знайти місто або місце за допомогою ШІ та перемістити карту."})]}),(0,t.jsxs)(y,{type:"button",onClick:Y,children:[(0,t.jsx)("strong",{children:"Закріпити локацію"}),(0,t.jsx)("kbd",{children:"Ctrl + Shift + L"}),(0,t.jsx)("span",{children:"Зберегти поточні координати, масштаб і шар для наступного входу."})]}),(0,t.jsxs)(xt,{style:{marginTop:"5px"},onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(y,{style:{background:"none",padding:"0",border:"none"},type:"button",onClick:Y,children:[(0,t.jsx)("strong",{children:"Джерело карти"}),(0,t.jsx)("span",{children:"Зручне перемикання між: Windy\\Ventusky\\Картою тривог Украіїни!"}),(0,t.jsx)("kbd",{style:{fontSize:"11px",fontWeight:400},children:"Ctrl + Shift + W"})]}),(0,t.jsxs)(gt,{value:d,onChange:e=>H(e.target.value),children:[(0,t.jsx)("option",{value:"ventusky",children:"Ventusky"}),(0,t.jsx)("option",{value:"windy",children:"Windy"}),p.map(e=>(0,t.jsx)("option",{value:e.id,children:e.title},e.id))]})]}),(0,t.jsxs)(y,{type:"button",onClick:()=>{u?j(!1):q()},children:[(0,t.jsx)("strong",{children:u?"Деактивувати карту":"Активувати карту"}),(0,t.jsx)("kbd",{children:"Ctrl + Shift + M"}),(0,t.jsx)("span",{children:"Увімкнути або вимкнути взаємодію з картою та її iframe."})]}),(0,t.jsxs)(y,{type:"button",onClick:()=>B(),children:[(0,t.jsx)("strong",{children:D?"Згорнути карту":"Відкрити на весь екран"}),(0,t.jsx)("kbd",{children:"Ctrl + Shift + F"}),(0,t.jsx)("span",{children:"Розгорнути карту на весь екран пристрою або повернути звичайний вигляд."})]}),(0,t.jsxs)(y,{type:"button",onClick:N,children:[(0,t.jsx)("strong",{children:"Міні-плеєр карти"}),(0,t.jsx)("kbd",{children:"Ctrl + Shift + P"}),(0,t.jsx)("span",{children:"Винести карту в окреме плаваюче вікно для паралельної роботи."})]}),(0,t.jsxs)(y,{type:"button",onClick:()=>{I(!1),M(!0)},children:[(0,t.jsx)("strong",{children:"Кастомні віджети / Фрейми"}),(0,t.jsx)("kbd",{children:"Ctrl + Shift + K"}),(0,t.jsx)("span",{children:"Вмикати карти повітряних тривог, вебкамери, радари та інші iframe віджети."})]})]})}),S?(0,t.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:"Закрийте міні-плеєр щоб повернути карту"}):(0,t.jsxs)(t.Fragment,{children:[(!u||P)&&(0,t.jsxs)(he,{children:[(0,t.jsx)("img",{src:ne[Me],alt:"Це Доміно :)",style:{width:"340px",height:"210px",imageRendering:"pixelated",marginBottom:"-50px"}}),(0,t.jsx)("p",{style:{fontSize:"17px"},children:u?"Завантаження...":"Натисніть на карту для активації"}),(0,t.jsx)("p",{style:{fontSize:"11px"},children:"Інтерактивні карти надано сервісами Windy, Ventusky та Карта тривог України (містять файли cookie)"}),(0,t.jsx)("p",{style:{fontSize:"11px"},children:"Кнопка «Налаштування стихії» відкриває безкоштовний доступ до перемикання мап, повноекранний режим, міні-плеєр та інші функції!"})]}),(0,t.jsx)(G,{title:"Weather Map",src:u?K:void 0,$isLoading:P,$isReady:u,onLoad:()=>L(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})]})]}),m?(0,Te.createPortal)((0,t.jsx)(G,{title:"Weather Map (PiP)",src:K,$isLoading:P,$isReady:!0,onLoad:()=>L(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy",style:{width:"100%",height:"100vh"}}),m.document.body):S&&(0,t.jsxs)(Ze,{ref:ae,onDoubleClick:()=>b(!1),style:{left:A.x,top:A.y,width:R.width,height:R.height},children:[(0,t.jsxs)(et,{onMouseDown:Ie,children:[(0,t.jsx)(tt,{children:"Міні-карта • подвійний клік — назад"}),(0,t.jsxs)(rt,{children:[(0,t.jsx)(g,{onClick:e=>{e.stopPropagation(),B(ae)},children:D?"Згорнути":"⛶"}),(0,t.jsx)(g,{onClick:e=>{e.stopPropagation(),b(!1)},children:"✕"})]})]}),(0,t.jsxs)(it,{children:[P&&(0,t.jsx)(he,{children:(0,t.jsx)("p",{children:"Завантаження..."})}),(0,t.jsx)(G,{title:"Weather Map Mini",src:K,$isLoading:P,$isReady:!0,onLoad:()=>L(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"}),(0,t.jsx)(nt,{onMouseDown:Ee})]})]}),$e&&(0,t.jsx)(ot,{onClick:()=>M(!1),children:(0,t.jsxs)(at,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(st,{children:[(0,t.jsx)("h3",{style:{margin:0,fontSize:"18px"},children:"Керування віджетами та фреймами"}),(0,t.jsx)(lt,{onClick:()=>M(!1),children:"✕"})]}),(0,t.jsxs)("div",{style:{fontSize:"12.5px",color:"#ffb36c",marginBottom:"14px",background:"rgba(255,179,108,0.1)",padding:"8px 12px",borderRadius:"8px",lineHeight:"1.4"},children:[(0,t.jsx)("strong",{children:"Примітка:"})," ШІ-пошук локацій працює виключно з основною картою Стихії (Windy/Ventusky). Всі додаткові фрейми завантажуються автономно за своїми URL."]}),(0,t.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#aaa"},children:"Фрейми у випадаючому списку:"}),p.map(e=>(0,t.jsxs)(dt,{children:[(0,t.jsxs)("div",{style:{flex:1,marginRight:"10px",minWidth:0},children:[(0,t.jsx)("div",{style:{fontWeight:600,fontSize:"14px"},children:e.title}),(0,t.jsx)("div",{style:{fontSize:"11px",color:"#aaa",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.url})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,t.jsx)("button",{onClick:()=>{H(e.id),M(!1)},style:{padding:"5px 12px",borderRadius:"16px",border:"none",fontWeight:700,fontSize:"12px",cursor:"pointer",background:d===e.id?"#ffb36c":"rgba(255,255,255,0.15)",color:d===e.id?"#111":"#fff"},children:d===e.id?"Обрано":"Обрати"}),!e.isPreset&&(0,t.jsx)("button",{onClick:()=>Fe(e.id),style:{background:"transparent",border:"none",color:"#ff4d4d",cursor:"pointer",fontSize:"16px"},title:"Видалити фрейм",children:"🗑️"})]})]},e.id))]}),(0,t.jsxs)(ct,{onSubmit:_e,children:[(0,t.jsxs)("h4",{style:{margin:0,fontSize:"14px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{children:"➕ Додати свій фрейм / віджет"}),(0,t.jsxs)("span",{style:{fontSize:"11px",fontWeight:400,color:"#aaa"},children:["(",p.filter(e=>!e.isPreset).length," / 2 власних)"]})]}),(0,t.jsx)(V,{type:"text",placeholder:"Назва (напр. Карта тривог, Радар...)",value:le,onChange:e=>de(e.target.value)}),(0,t.jsx)(V,{type:"text",placeholder:"URL або iframe код (https://... або <iframe src='...'>)",value:U,onChange:e=>ce(e.target.value),required:!0}),(0,t.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:"12px",color:"#aaa"},children:"Висота (px):"}),(0,t.jsx)(V,{type:"number",value:pe,onChange:e=>ue(e.target.value),style:{width:"90px"},min:"200",max:"1200"}),(0,t.jsx)(pt,{type:"submit",style:{marginLeft:"auto"},children:"Додати"})]})]})]})})]})};export{bt as default};

//# sourceMappingURL=ClimateMap-DijgNlQb.js.map