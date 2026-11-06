import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4NhlWQFf.js";import{s as t}from"./vendor-motion-Bh6mtAYz.js";import{n as i}from"./vendor-utils-BcX-d9lY.js";import{Ar as a,C as n,Cr as o,D as s,Dr as d,E as l,Er as c,Fr as p,Ht as x,L as g,Mr as f,Or as u,Pr as b,S as h,T as m,Tr as k,W as $,_ as w,_r as v,b as y,br as j,g as M,h as D,hr as _,i as z,jr as S,kr as C,lr as R,lt as T,m as I,qt as B,v as E,vr as L,w as A,wr as U,x as P,xi as F,xr as G,y as H,yr as W}from"./vendor-ui-BcfDBn2Z.js";import{B as q,H as O,V as Y,f as K,l as N,p as X}from"./index-2DOTQNJp.js";import{t as V}from"./vendor-ai-Bo_x5aWR.js";import{n as J,t as Q}from"./freeWebSearch-DSf0b8-p.js";var Z=e(i()),ee=e(r()),re=t(),te=O.div`
  position: relative;
  box-sizing: border-box;
  height: 52px;
  margin: 6px 12px;
  border-radius: 10px;
  overflow: hidden;
  background: ${e=>e.$isDarkMode?"rgba(255,149,0,0.06)":"rgba(255,140,0,0.05)"};

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
`,ie=({active:e,isDarkMode:r})=>{const t=(0,ee.useRef)(null);return(0,ee.useEffect)(()=>{if(!e||!navigator.mediaDevices?.getUserMedia)return;let r=!1,i=null,a=null,n=0;const o=[];return a=new(window.AudioContext||window.webkitAudioContext),navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}}).then(async e=>{if(r)return void e.getTracks().forEach(e=>e.stop());i=e,"suspended"===a.state&&await a.resume();const s=a.createAnalyser();s.fftSize=1024,a.createMediaStreamSource(i).connect(s);const d=new Float32Array(s.fftSize),l=()=>{((e,r)=>{const i=t.current;if(!i)return;const a=window.devicePixelRatio||1,n=i.clientWidth,s=i.clientHeight;i.width===Math.round(n*a)&&i.height===Math.round(s*a)||(i.width=Math.round(n*a),i.height=Math.round(s*a));const d=i.getContext("2d");d.setTransform(a,0,0,a,0,0),d.clearRect(0,0,n,s),e.getFloatTimeDomainData(r);let l=0;for(let t=0;t<r.length;t+=1)l+=r[t]*r[t];const c=Math.sqrt(l/r.length),p=performance.now();for(o.push({t:p,level:Math.min(1,2.2*Math.sqrt(c))});o.length&&p-o[0].t>3e3;)o.shift();const x=s/2;d.fillStyle="rgba(255,149,0,0.25)",d.fillRect(0,x,n,1);const g=d.createLinearGradient(0,0,0,s);g.addColorStop(0,"#ffb347"),g.addColorStop(.5,"#ff7a00"),g.addColorStop(1,"#ffb347"),d.fillStyle=g;let f=1/0;for(let t=o.length-1;t>=0;t-=1){const{t:e,level:r}=o[t],i=n-(p-e)*n/3e3;if(f-i<3)continue;f=i;const a=Math.max(1.5,r*(x-4));d.fillRect(i-1,x-a,2,2*a)}})(s,d),n=requestAnimationFrame(l)};l()}).catch(e=>{console.warn("VoiceWaveform: мікрофон недоступний",e)}),()=>{r=!0,cancelAnimationFrame(n),i?.getTracks().forEach(e=>e.stop()),a?.close()}},[e]),e?(0,re.jsx)(te,{$isDarkMode:r,role:"img","aria-label":"Хвиля голосу за останні 3 секунди",children:(0,re.jsx)("canvas",{ref:t})}):null},ae=O.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 300001; /* вище за AiModalBackdrop (200000) і модалки Aihelp */
  pointer-events: none;
`,ne=({content:e,children:r,placement:t="bottom",isDarkMode:i=!0})=>{const[a,o]=(0,ee.useState)(!1),d=(0,ee.useRef)(null),{refs:c,floatingStyles:p,context:x}=w({open:a,onOpenChange:o,placement:t,strategy:"fixed",transform:!1,whileElementsMounted:s,middleware:[m(8),A(),l({padding:5}),n({element:d})]}),{isMounted:g,styles:f}=h(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),u=H(x,{move:!1}),b=E(x),k=M(x),$=P(x,{role:"tooltip"}),{getReferenceProps:v,getFloatingProps:j}=y([u,b,k,$]);if(!e)return r;const _=i?"#111111":"#ffffff";return(0,re.jsxs)(re.Fragment,{children:[(0,re.jsx)("span",{ref:c.setReference,...v(),style:{display:"inline-flex"},children:r}),g&&(0,re.jsx)(D,{children:(0,re.jsxs)(ae,{ref:c.setFloating,$isDarkMode:i,style:{...p,...f},...j(),children:[e,(0,re.jsx)(I,{ref:d,context:x,fill:_,stroke:"#00acb9",strokeWidth:1})]})})]})},oe=q`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,se=q`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`,de=q`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,le=300,ce="gemini_global_cooldown_until",pe=O.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 18px 16px;
  gap: 12px;
  z-index: 100;
  position: relative;
  overflow: hidden;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    border 0.4s ease,
    border-radius 0.4s ease,
    padding 0.4s ease;
  ${e=>e.$isStickyBgMode?Y`
          background: ${e.$isDarkMode?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
          padding: 10px;
        `:Y`
          background: transparent;
        `}
`,xe=O.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 0;
  gap: 0;
  overflow: hidden;
`,ge=O.div`
  display: flex;
  flex-direction: column;
  width: ${e=>e.$collapsed?"0":"240px"};
  flex-shrink: 0;
  border-right: 1px solid
    ${e=>e.$collapsed?"transparent":e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  padding: ${e=>e.$collapsed?"6px 0 8px 0":"6px 8px 8px 0"};
  gap: 6px;
  overflow: hidden;
  opacity: ${e=>e.$collapsed?0:1};
  pointer-events: ${e=>e.$collapsed?"none":"auto"};
  transition:
    width 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    padding 0.28s ease,
    opacity 0.2s ease;

  @media (max-width: 767px) {
    width: ${e=>e.$collapsed?"0":"min(170px, 42vw)"};
  }
`,fe=O.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.4)"};
  padding: 2px 4px 4px;
  flex-shrink: 0;
`,ue=O.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 149, 0, 0.5) transparent;
  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 999px;
  }
`,be=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: ${e=>e.$active?"700":"500"};
  color: ${e=>e.$active?"#ff9500":e.$isDarkMode?"rgba(255,255,255,0.75)":"rgba(0,0,0,0.7)"};
  background: ${e=>e.$active?e.$isDarkMode?"rgba(255,149,0,0.15)":"rgba(255,149,0,0.12)":"transparent"};
  border: 1px solid
    ${e=>e.$active?"rgba(255,149,0,0.4)":"transparent"};
  transition: all 0.15s ease;
  overflow: hidden;
  min-width: 0;

  &:hover {
    background: ${e=>e.$active?e.$isDarkMode?"rgba(255,149,0,0.2)":"rgba(255,149,0,0.17)":e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.05)"};
    border-color: rgba(255, 149, 0, 0.25);
  }
`,he=O.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,me=O.button`
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: rgba(255, 80, 80, 0.6);
  font-size: 15px;
  cursor: pointer;
  padding: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.15s;

  ${be}:hover & {
    opacity: 1;
  }

  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.12);
  }
`,ke=O.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px dashed rgba(255, 149, 0, 0.5);
  background: rgba(255, 149, 0, 0.06);
  color: #ff9500;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 149, 0, 0.14);
    border-color: #ff9500;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`,$e=O.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
  gap: 6px;
  overflow: hidden;
  padding-left: ${e=>e.$sidebarCollapsed?"0":"10px"};
  transition: padding 0.28s ease;
`,we=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2px;
`,ve=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media (max-width: 600px) {
    margin-right: auto;
  }

  /* Однаковий розмір іконок у всіх кнопках шапки */
  button svg {
    width: 21px;
    height: 21px;
    flex-shrink: 0;
  }
`,ye=O(O.button`
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  background: ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.15)":"rgba(255, 140, 0, 0.12)"};
  border: 1px solid rgba(255, 160, 0, 0.45);
  color: ${e=>e.$isDarkMode?"#ffcf9e":"#d96500"};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 13px;
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
`)`
  width: 34px;
  height: 34px;
  padding: 0;
  font-size: 18px;
  flex-shrink: 0;
`,je=O(ye)``,Me=O.button`
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  height: 34px;
  padding: 0 16px;
  border-radius: 5px;
  font-size: 13px;
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
`,De=O.button`
  background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  width: 34px;
  height: 34px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 77, 77, 0.2);
    border-color: #ff4d4d;
    color: #ff4d4d;
    transform: scale(1.08);
  }
`,_e=O.div`
  flex-shrink: 0;
  padding: 10px 16px;
  background: ${e=>e.$isStickyBgMode?e.$isDarkMode?"rgba(10, 10, 20, 0.82)":"rgba(255, 249, 235, 0.9)":e.$isDarkMode?"rgba(12, 12, 12, 0.72)":"#fffbf0"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(10px)":"none"};
  border: 1px solid rgba(255, 160, 0, 0.28);
  border-radius: 14px;
  z-index: 100;
  position: relative;
  color: ${e=>e.$isDarkMode?"white":"black"};
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
`,ze=O.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?"white":"black"};
  ${e=>e.$isStickyBgMode?Y`
          background: ${e.$isDarkMode?"rgba(15,15,25,0.4)":"rgba(255,255,255,0.55)"};
          padding: 6px 8px;
          border-radius: 8px;
        `:""}
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    min-width: 100px;
  }
  input[type="radio"] {
    margin-right: 8px;
    accent-color: orange;
  }
  input[type="password"] {
    flex: 1;
    min-width: 200px;
    padding: 9px 14px;
    border-radius: 10px;
    border: 1px solid ${e=>e.$hasError?"#ff4d4d":"rgba(255,160,0,0.3)"};
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
`,Se=O.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`,Ce=O.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  gap: 10px;
  overflow-y: auto;
  padding: 8px max(6px, calc((100% - 960px) / 2));
  border-radius: 10px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
`,Re=O.div`
  align-self: ${e=>e.$isBot?"flex-start":"flex-end"};
  max-width: 78%;
  background: ${e=>e.$isBot?e.$isDarkMode?"rgba(28, 28, 42, 0.88)":"rgba(245,245,252,0.94)":"linear-gradient(135deg, rgba(30,30,30,0.92), rgba(20,20,20,0.95))"};
  backdrop-filter: ${e=>e.$isStickyBgMode?"blur(8px)":"none"};
  -webkit-backdrop-filter: ${e=>e.$isStickyBgMode?"blur(8px)":"none"};
  color: ${e=>e.$isBot?e.$isDarkMode?"#f0f0f0":"#111":"#fff"};
  border: 1px solid
    ${e=>e.$isBot?e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)":"rgba(255,149,0,0.3)"};
  padding: 10px 15px;
  border-radius: ${e=>e.$isBot?"4px 16px 16px 16px":"16px 4px 16px 16px"};
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  animation: ${oe} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`,Te=O.button`
  position: absolute;
  right: 0px;
  top: -10px;
  color: inherit;
  cursor: pointer;
  font-size: 29px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${Re}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
  }
`,Ie=O.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${oe} 0.2s ease;
`,Be=O.button`
  padding: 5px 14px;
  border-radius: 5px;
  border: 1px solid rgba(255, 107, 107, 0.5);
  background: transparent;
  color: #ff6b6b;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  &:hover { background: rgba(255, 107, 107, 0.12); }
`,Ee=O.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${e=>e.$isDarkMode?"rgba(28,28,42,0.88)":"rgba(245,245,252,0.94)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 4px 14px 14px 14px;
  animation: ${oe} 0.2s ease;
`,Le=O.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${se} 1.2s ease infinite;
  animation-delay: ${e=>e.$delay};
`,Ae=O.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.22);
  border: 1.5px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
  border-radius: 16px;
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
`,Ue=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px 6px;
  flex-wrap: wrap;
  border-bottom: 1px dashed ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,Pe=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Fe=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Ge=O.label`
  font-size: 16px;
  color: #ff9500;
  display: inline-flex;
  align-items: center;
`,He=O.div`
  display: inline-flex;
  padding: 2px;
  gap: 2px;
  border-radius: 999px;
  background: ${e=>e.$isDarkMode?"rgba(255,165,0,0.08)":"rgba(255,140,0,0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,165,0,0.3)":"rgba(255,140,0,0.25)"};
`,We=O.button`
  border: none;
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  color: ${e=>e.$active?"#fff":e.$isDarkMode?"#ffcf9e":"#d96500"};
  background: ${e=>e.$active?"linear-gradient(135deg, #ff9500, #ff6b00)":"transparent"};
  box-shadow: ${e=>e.$active?"0 2px 8px rgba(255, 149, 0, 0.35)":"none"};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover:not([aria-pressed="true"]) {
    background: rgba(255, 160, 0, 0.18);
  }

  &:focus-visible {
    outline: 2px solid #ff9500;
    outline-offset: 1px;
  }

  small {
    opacity: 0.75;
    font-weight: 500;
    margin-left: 3px;
  }
`,qe=O.textarea`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background: transparent;
  padding: 14px 16px;
  border-radius: 16px 16px 0 0;
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
`,Oe=O.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,Ye=O.span`
  margin-right: auto;
  color: ${e=>e.$isLimitReached?"#ff6b6b":e.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`,Ke=O.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
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
  ${e=>e.$danger&&Y`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${e=>e.$listening&&Y`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`,Ne=O.button`
  height: 32px;
  padding: 0 14px;
  border-radius: 5px;
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
`,Xe=O.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`,Ve=O.div`
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
`,Je=O.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 5px;
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
`,Qe=O.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${de} 2s linear infinite;
`,Ze=O.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`,er=O.div`
  position: fixed;
  inset: 0;
  z-index: 300000;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: ${oe} 0.2s ease;
`,rr=O.button`
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
`,tr=O.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ir=O.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,ar=O.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,nr=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`,or=O.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`,sr=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`,dr=O.div`
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
`,lr=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,cr=O.button`
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  font-size: 20px;
  width: 48px;
  height: 48px;
  border-radius: 5px;
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
`,pr=O.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`,xr=O.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`,gr=O.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,fr=O.div`
  display: flex;
  gap: 6px;
`,ur=O.button`
  border: 1px solid ${e=>e.$active?"#ff9500":"rgba(255,255,255,0.15)"};
  border-radius: 5px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  background: ${e=>e.$active?"linear-gradient(135deg, #ff9500, #ff6b00)":"transparent"};
  color: ${e=>e.$active?"#fff":"rgba(255,255,255,0.7)"};
  font-weight: ${e=>e.$active?"700":"400"};
  transition: all 0.2s;
  &:hover { border-color: #ff9500; }
`,br=O.audio`
  display: none;
`,hr=O.button`
  padding: 7px 18px;
  border-radius: 5px;
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
`,mr=O.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px 2px;
  flex-shrink: 0;
`,kr=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${e=>e.$isDarkMode?"rgba(255, 105, 180, 0.18)":"rgba(255, 105, 180, 0.12)"};
  border: 1px solid rgba(255, 105, 180, 0.45);
  color: ${e=>e.$isDarkMode?"#ffb6c1":"#d81b60"};
  border-radius: 7px;
  padding: 0 4px;
  font-size: 12px;
  font-weight: 600;
  max-width: 295px;
  > svg {
    font-size: 28px;
    flex-shrink: 0;
  }
  > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
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
    flex-shrink: 0;

    &:hover {
      color: #ff4d4d;
    }
  }
`,$r=O.div`
  position: fixed;
  inset: 0;
  z-index: 300000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow-y: auto;
  animation: ${oe} 0.2s ease;
`,wr=O.div`
  width: min(500px, 92vw);
  max-height: calc(100vh - 32px);
  background: ${e=>e.$isDarkMode?"#1a1a26":"#ffffff"};
  color: ${e=>e.$isDarkMode?"#f0f0f0":"#111111"};
  border: 1px solid rgba(255, 160, 0, 0.4);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  overflow: hidden;
`,vr=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 160, 0, 0.2);

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #ff9500;
    display: flex;
    align-items: center;
  }
`,yr=O.button`
  background: transparent;
  border: none;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.6)"};
  font-size: 22px;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 5px;
  font-weight: 900;
  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.1);
  }
`,jr=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: min(42vh, 260px);
  padding-right: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 149, 0, 0.7) transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 999px;
  }
`,Mr=O.div`
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
`,Dr=O.div`
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
`,_r=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  margin: auto 0;
  text-align: center;
  gap: 12px;
  animation: ${oe} 0.3s ease;
`,zr=O.div`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.2px;
  background: linear-gradient(90deg, #ffb347, #ff7a00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ff9500;
  max-width: 640px;
  line-height: 1.3;
`,Sr=O.div`
  width: 100%;
  max-width: 580px;
  margin-top: 10px;
`,Cr=O.div`
  height: 152px;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 12%,
    #000 88%,
    transparent 100%
  );
`,Rr=O.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 46px;
  flex: 0 0 46px;
  padding: 8px 12px;
  box-sizing: border-box;
  transform: scale(${e=>e.$isCenter?1:.94});
  border-radius: 12px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.3)":"rgba(255, 140, 0, 0.25)"};
  background: ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.08)":"rgba(255, 140, 0, 0.06)"};
  color: ${e=>e.$isDarkMode?"#f0f0f0":"#222"};
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition:
    transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  span { font-size: 16px; }
  &:hover {
    background: rgba(255, 160, 0, 0.2);
    border-color: #ff9500;
    box-shadow: 0 4px 12px rgba(255, 149, 0, 0.2);
  }
  svg {
    font-size: 21px;
    flex-shrink: 0;
  }
`,Tr=O.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  transition: ${e=>e.$isResetting?"none":"transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"};
  transform: ${e=>`translateY(-${53*e.$position}px)`};
`,Ir=({isDarkMode:e,onAsk:r})=>{const t=[{text:"Які новини про погоду у світі?",icon:(0,re.jsx)(b,{})},{text:"Як зміни клімату впливають на природу?",icon:(0,re.jsx)(g,{})},{text:"Яка погода буде завтра в Києві?",icon:(0,re.jsx)(z,{})},{text:"Порадь екологічні компанії",icon:(0,re.jsx)(x,{})},{text:"Порадити гру, кіно і т.д.?",icon:(0,re.jsx)($,{})}],[i,a]=(0,ee.useState)(0),[n,o]=(0,ee.useState)(!1),[s,d]=(0,ee.useState)(!1);return(0,ee.useEffect)(()=>{if(n)return;const e=setInterval(()=>{a(e=>Math.min(e+1,t.length))},3e3);return()=>clearInterval(e)},[n,t.length]),(0,ee.useEffect)(()=>{if(i<t.length)return;const e=setTimeout(()=>{d(!0),a(0),requestAnimationFrame(()=>{requestAnimationFrame(()=>d(!1))})},700);return()=>clearTimeout(e)},[i,t.length]),(0,re.jsx)(Sr,{role:"group","aria-label":"Популярні запитання","aria-roledescription":"карусель",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onFocus:()=>o(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||o(!1)},children:(0,re.jsx)(Cr,{children:(0,re.jsx)(Tr,{$position:i,$isResetting:s,children:[...t,...t.slice(0,3)].map((t,a)=>{const n=a>=i&&a<i+3;return(0,re.jsxs)(Rr,{type:"button",$isDarkMode:e,$isCenter:a===i+1,onClick:()=>r(t.text),"aria-hidden":!n,tabIndex:n?0:-1,children:[(0,re.jsx)("span",{children:t.icon}),t.text]},`${t.text}-${a}`)})})})})},Br=O.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: flex-start;
  margin: 2px 0 8px 10px;
  max-width: 85%;
  animation: ${oe} 0.3s ease;
`,Er=O.div`
  font-size: 14px;
  font-weight: 700;
  color: #ff9500;
  letter-spacing: 0.5px;
`,Lr=O.div`
  margin-top: 6px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,Ar=O.button`
  margin-top: 6px;
  padding: 3px 8px;
  border: 1px solid rgba(255, 149, 0, 0.4);
  border-radius: 6px;
  background: transparent;
  color: ${e=>e.$isDarkMode?"#ffcf9e":"#d96500"};
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 149, 0, 0.12);
  }
`,Ur=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Pr=O.button`
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
`,Fr=e=>"detailed"===e?{label:"Більше",instruction:"Докладно."}:"normal"===e?{label:"Нормально",instruction:"Нормально."}:{label:"Менше",instruction:"Коротко."},Gr=e=>{if(!e)return{cleanText:e,questions:[]};const r=/\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/,t=e.match(r);return t?{cleanText:e.replace(r,"").trim(),questions:t[1].split("\n").map(e=>e.replace(/^[•\-*\d.\s]+/,"").trim()).filter(e=>e.length>0).slice(0,3)}:{cleanText:e,questions:[]}},Hr=e=>`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».\nКОНЦЕПЦІЯ ПЛАТФОРМИ:\n«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:\n• Погода — якщо надано актуальні дані погодного API або віджета, обов'язково давай конкретну відповідь із цифрами (температура, опади, вітер, стан неба).\n• Новини — RSS-стрічки з автоматичним фільтром.\n• Карта клімату — інтерактивна кліматична карта.\n• Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.\n\nАВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com\nВікові обмеження: 13+\nКонфіденційність: платформа не збирає персональні дані.\n\nТВОЇ ПРАВИЛА:\n1. Якщо у вхідних даних є погодний контекст (Open-Meteo або інтернет-пошук), ЗАВЖДИ відповідай конкретним прогнозом (температура, сонячно/хмарно/дощ, вітер, опади) для запитаного міста/дня (наприклад, завтра в Києві), а не слати на сторінку погоди.\n2. Якщо питання стосується платформи — відповідай конкретно і по суті.\n3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.\n4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.\n5. Відповідай українською мовою, якщо запит не на іншій мові.\n6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.\n7. Не підтакуй автоматично, не використовуй лестощів і не хвали користувача без конкретної підстави. Оцінюй твердження за доказами та логікою; якщо не погоджуєшся, спокійно поясни чому й наведи сильні контраргументи. Відокремлюй факти, припущення й оцінки; визнавай невизначеність і прямо виправляй власні помилки.\n8. Тримай стриманий, нейтральний і предметний тон — без надмірної теплоти, вибачень, захоплення чи порожніх вступів. Пояснюй ключову логіку стисло й підтримуй дискусію запитанням, яке допоможе перевірити припущення або самостійно обдумати тему, коли це доречно. Не завершуй кожну відповідь шаблонним запитанням; невимушено пропонувати цікавий факт, зокрема про Азію, можна лише за контекстом.\n9. Якщо користувач навчається або розв'язує задачу, почни з однієї конкретної підказки, яка допоможе зробити наступний крок, і запропонуй спробувати. Це правило діє і тоді, коли користувач одразу просить готову відповідь: не розкривай її в першій відповіді, натомість дай підказку. Після спроби користувача реагуй саме на неї: поясни помилку або дай наступну підказку, не повторюй ту саму і не відмовляй уперто. Якщо користувач після підказки чи спроби повторно просить повний розв'язок або відповідь, надай їх із зрозумілим поясненням; не затягуй навчальний режим після такого повторного прохання.\n10. Якщо користувач питає про суб'єктивний особистий вибір — наприклад, колір волосся чи стін — прямо скажи, що це його особистий вибір, і не обирай за нього. Не видавай перевагу кольору за об'єктивний факт і не підміняй допомогу шаблонною символікою. Замість цього допоможи людині визначити власні критерії, порівняти практичні наслідки й уподобання або постав одне конкретне запитання, яке допоможе їй вирішити. Якщо користувач уже назвав свої критерії, допоможи їх зважити, але остаточний вибір залиш за ним.\n${0===e?"11. Не додавай рекомендованих питань або блок [РЕКОМЕНДОВАНІ_ПИТАННЯ].":`11. Наприкінці кожної відповіді додавай рівно ${e} коротких змістовних питань у форматі [РЕКОМЕНДОВАНІ_ПИТАННЯ]. Питання мають допомагати обдумати тему, перевірити припущення або побачити іншу перспективу, а не просто заохочувати продовжувати чат.`}\n${0===e?"":`[РЕКОМЕНДОВАНІ_ПИТАННЯ]\n• Запитання${e>1?" 1":""}?\n${e>1?"• Запитання 2?":""}\n[/РЕКОМЕНДОВАНІ_ПИТАННЯ]`}`,Wr=(e=1,r=[])=>({id:`chat_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,title:`Чат ${e}`,messages:r,createdAt:Date.now()}),qr=({isDarkMode:e,isStickyBgMode:r,onClose:t})=>{const[i,n]=(0,ee.useState)(""),[s,l]=(0,ee.useState)([]),[x,b]=(0,ee.useState)(""),[h,m]=(0,ee.useState)(""),[$,w]=(0,ee.useState)("gemini-3.5-flash-lite"),[y,M]=(0,ee.useState)("normal"),[D,I]=(0,ee.useState)("2"),[E,A]=(0,ee.useState)(!1),[P,H]=(0,ee.useState)(()=>{try{return"1"===localStorage.getItem("ai_help_sidebar_collapsed")}catch{return!1}}),q=()=>{H(e=>{const r=!e;try{localStorage.setItem("ai_help_sidebar_collapsed",r?"1":"0")}catch{}return r})},[O,Y]=(0,ee.useState)([]),[te,ae]=(0,ee.useState)([]),[oe,se]=(0,ee.useState)(!1),[de,Sr]=(0,ee.useState)(!0),Cr=(0,ee.useRef)(null),Rr=(0,ee.useRef)(null);(0,ee.useEffect)(()=>{const e=e=>{e.detail&&ae(r=>r.some(r=>r.id===e.detail.id)?(X.error("Цю картку вже прикріплено!"),r):r.length>=4?(X.error("Максимум 4 прикріплення."),r):(X.success(`Прикріплено: ${e.detail.title}`),[...r,e.detail]))};return window.addEventListener("attachCardToAiHelp",e),()=>window.removeEventListener("attachCardToAiHelp",e)},[]);const[Tr,qr]=(0,ee.useState)(""),[Or,Yr]=(0,ee.useState)(""),Kr=(0,ee.useRef)(""),[Nr,Xr]=(0,ee.useState)(0),[Vr,Jr]=(0,ee.useState)(null),[Qr,Zr]=(0,ee.useState)(0),[et,rt]=(0,ee.useState)(0),[tt,it]=(0,ee.useState)(!1),at=(0,ee.useRef)(null),[nt,ot]=(0,ee.useState)(null),[st,dt]=(0,ee.useState)(!1),[lt,ct]=(0,ee.useState)(0),[pt,xt]=(0,ee.useState)(0),[gt,ft]=(0,ee.useState)(0),[ut,bt]=(0,ee.useState)(1),ht=(0,ee.useRef)([]),mt=(0,ee.useRef)(null),kt=(0,ee.useRef)(null),$t=(0,ee.useRef)(null),wt=(0,ee.useRef)(null),vt=(0,ee.useRef)(0),yt=(0,ee.useRef)(!1);(0,ee.useEffect)(()=>{if(!Qr)return;const e=()=>{const e=Math.max(0,Qr-Date.now());rt(Math.ceil(e/1e3)),0===e&&(Zr(0),vt.current=0)};e();const r=setInterval(e,250);return()=>clearInterval(r)},[Qr]);const jt=s.find(e=>e.id===x)||s[0],Mt=jt?jt.messages:[],Dt=(e,r)=>{l(t=>{const i=t.map(t=>{if(t.id!==e)return t;const i="function"==typeof r?r(t.messages):r;let a=t.title;if((t.title.startsWith("Чат ")||!t.title)&&i.length>0){const e=i.find(e=>!e.isBot);if(e&&e.text){const r=e.text.trim();r&&(a=r.length>28?r.slice(0,28)+"...":r)}}return{...t,title:a,messages:i.slice(-50)}});return Z.default.setItem("ai_help_chats_v2",i),i})},_t=()=>{if(s.length>=10)return void X.error("Досягнуто ліміт 10 паралельних чатів. Видаліть непотрібний чат.");const e=s.length+1,r=Wr(e,[]),t=[...s,r];l(t),b(r.id),Z.default.setItem("ai_help_chats_v2",t),Z.default.setItem("ai_help_active_chat_id",r.id),Lt(),n(""),X.success(`Створено новий чат! (${t.length}/10)`)},zt=e=>!e||isNaN(e)?"0:00":`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,St=()=>{wt.current&&wt.current.pause(),ot(null),dt(!1)},Ct=()=>{wt.current&&(wt.current.paused?wt.current.play():wt.current.pause())},Rt=()=>{if(!wt.current)return;const{currentTime:e,duration:r}=wt.current;ft(e),ct(r?e/r:0)},Tt=()=>{wt.current&&(xt(wt.current.duration),wt.current.playbackRate=ut)},It=e=>{const r=e.currentTarget.getBoundingClientRect(),t=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));wt.current&&wt.current.duration&&(wt.current.currentTime=t*wt.current.duration)},Bt=e=>{bt(e),wt.current&&(wt.current.playbackRate=e)};(0,ee.useEffect)(()=>{const e=$t.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[Mt]),(0,ee.useEffect)(()=>{if(!Or)return;const e=$t.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[Or]);(0,ee.useEffect)(()=>{(async()=>{const e=await Z.default.getItem("gemini_api_key"),r=await Z.default.getItem("gemini_model"),t=await Z.default.getItem("gemini_google_search_enabled"),i=await Z.default.getItem("gemini_suggested_questions_count");if(e){const r="string"==typeof e?e.trim().replace(/^["']|["']$/g,""):e;m(r)}r&&w(r),null!==t&&Sr(t),["0","1","2"].includes(i)&&I(i);const a=await Z.default.getItem("ai_help_chats_v2"),n=await Z.default.getItem("ai_help_active_chat_id");let o;if(Array.isArray(a)&&a.length>0)o=a;else{const e=await Z.default.getItem("ai_help_history");o=[Wr(1,Array.isArray(e)?e:[])],await Z.default.setItem("ai_help_chats_v2",o)}l(o);let s=n;s&&o.some(e=>e.id===s)||(s=o[0].id),b(s),await Z.default.setItem("ai_help_active_chat_id",s)})();const e=e=>m(e.detail);return window.addEventListener("geminiKeyChanged",e),()=>window.removeEventListener("geminiKeyChanged",e)},[]),(0,ee.useEffect)(()=>()=>{ht.current.forEach(e=>URL.revokeObjectURL(e)),ht.current=[]},[]);const Et=async e=>({inlineData:{data:await new Promise(r=>{const t=new FileReader;t.onloadend=()=>r(t.result.split(",")[1]),t.readAsDataURL(e)}),mimeType:e.type}}),Lt=()=>{ht.current.forEach(e=>URL.revokeObjectURL(e)),ht.current=[],Y([]),ae([]),Xr(0)},At=e=>{const r=Array.from(e);if(O.length+r.length>15)return void X.error("Максимум 15 файлів.");const t=O.reduce((e,r)=>e+r.file.size,0),i=r.reduce((e,r)=>e+r.size,0);if(t+i>104857600)return void X.error("Загальний розмір перевищує 100 МБ.");const a=r.map(e=>{const r=URL.createObjectURL(e);return ht.current.push(r),{file:e,objectURL:r}});Xr(t+i),Y(e=>[...e,...a])},Ut=async(e=null)=>{const r="string"==typeof e?e:i.trim();if(!r&&0===O.length&&0===te.length||oe||yt.current)return;const t=x;if(!h)return void Dt(t,e=>[...e,{text:"Будь ласка, введіть Gemini API-ключ у панелі налаштувань.",isBot:!0}]);if(r&&N(r))return void Dt(t,e=>[...e,{text:"Запит містить заборонені слова або теми.",isBot:!0}]);const a=Date.now(),o=await Z.default.getItem(ce),s=Math.max(vt.current,Number(o)||0);if(s>a){const e=Math.ceil((s-a)/1e3);return vt.current=s,Zr(s),void X.error(`Зачекайте ще ${e} с перед наступним запитом.`)}yt.current=!0,Kr.current=r,Jr(null),se(!0),Yr(""),Dt(t,e=>[...e,{text:r,isBot:!1}]),n(""),mt.current&&(mt.current.style.height="auto");try{let e="";if((de||/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|київ|львів|одес|харків|дніпр|завтра|сьогодні|прогноз|weather|forecast/i.test(r))&&r){qr("Отримую актуальну інформацію / прогноз погоди...");try{e=await Q(r)}catch(d){console.warn("Free web search error:",d)}}qr("З'єднання з Google Gemini...");const i=(h||"").trim().replace(/^["']|["']$/g,""),a=new V(i),{instruction:n}=Fr(y),o=Number(D);let s="";te.length>0&&(s="\n\n--- Прикріплений контент для аналізу: ---\n"+te.map((e,r)=>`${r+1}. [${"weather"===e.type?"🌤️ Погода":"📰 Новина"}] ${e.title}\n${e.details}`).join("\n\n")+"\n-------------------------------------------\n");const c=e?"Використай актуальний інтернет-контекст нижче. Не кажи, що не маєш доступу до новин; відокремлюй факти від прогнозів і додавай посилання на джерела, якщо вони надані.":"Якщо для відповіді потрібні актуальні новини, поясни, що свіжі результати не були отримані.",p=Mt.slice(-6).map(e=>`${e.isBot?"Асистент":"Користувач"}: ${e.text}`).join("\n"),x=[{text:`${n}\n${c}${s}${e}\n${p?`Попередній діалог:\n${p}\n`:""}${r||"Проаналізуй прикріплений контент."}`}];for(const r of O)x.push(await Et(r.file));const g=["gemini-3.0-flash","gemini-2.0-flash","gemini-2.5-flash"];let f=null,u=null;for(const r of g)try{if(f=await a.getGenerativeModel({model:r,systemInstruction:Hr(o)}).generateContentStream(x),f)break}catch(l){u=l,console.warn(`Model ${r} failed, trying next fallback...`,l)}if(!f)throw u||new Error("Не вдалося підключитися до Gemini API.");let b="";for await(const r of f.stream)b+=r.text(),Yr(b);const m=(await f.response)?.usageMetadata,k={text:b,isBot:!0,usage:m?{promptTokens:m.promptTokenCount||0,responseTokens:m.candidatesTokenCount||0,totalTokens:m.totalTokenCount||0}:null};Dt(t,e=>[...e,k]),Yr(""),Lt();const $=Date.now()+1e3*{0:5,1:10,2:15}[o];vt.current=$,Zr($),await Z.default.setItem(ce,$)}catch(c){Yr("");const e=c?.message||"Невідома помилка Gemini.",r=/429|quota|rate.?limit|RESOURCE_EXHAUSTED/i.test(e);Jr(r?"Google відхилив запит через ліміт квоти (HTTP 429). Зачекайте 1 хвилину.":e),Lt();const t=Date.now()+5e3;vt.current=t,Zr(t),await Z.default.setItem(ce,t)}finally{yt.current=!1,se(!1),qr("")}},Pt=!oe&&0===et&&(!!i.trim()||O.length>0||te.length>0);return(0,re.jsxs)(pe,{$isStickyBgMode:r,$isDarkMode:e,onTouchStart:e=>{Cr.current=e.touches[0].clientX,Rr.current=e.touches[0].clientY},onTouchEnd:e=>{if(null===Cr.current)return;const r=e.changedTouches[0].clientX-Cr.current,t=Math.abs(e.changedTouches[0].clientY-Rr.current);Math.abs(r)>40&&Math.abs(r)>1.5*t&&(r>0&&Cr.current<30&&P||r<0&&!P)&&q(),Cr.current=null,Rr.current=null},children:[(0,re.jsx)(K,{position:"top-center",toastOptions:{style:{background:e?"#1e1e2a":"#fff",color:e?"#f0f0f0":"#111",border:"1px solid rgba(255,149,0,0.35)",fontSize:13}}}),(0,re.jsx)(we,{children:(0,re.jsxs)(ve,{children:[(0,re.jsx)(ne,{content:P?"Показати список чатів":"Згорнути список чатів",isDarkMode:e,children:(0,re.jsx)(ye,{type:"button",$isDarkMode:e,onClick:q,"aria-label":P?"Показати бічну панель":"Згорнути бічну панель","aria-expanded":!P,children:P?(0,re.jsx)(G,{}):(0,re.jsx)(j,{})})}),(0,re.jsx)(ne,{content:"Переглянути приблизні ліміти",isDarkMode:e,children:(0,re.jsx)(je,{type:"button",$isDarkMode:e,onClick:()=>A(!0),"aria-label":"Переглянути приблизні ліміти",children:(0,re.jsx)(W,{})})}),(0,re.jsx)(ne,{content:"Створити новий паралельний чат",isDarkMode:e,children:(0,re.jsx)(Me,{type:"button",$isDarkMode:e,onClick:_t,disabled:s.length>=10,"aria-label":"Створити новий паралельний чат",children:(0,re.jsx)(o,{})})}),t&&(0,re.jsx)(ne,{content:"Закрити ШІ-асистент",isDarkMode:e,children:(0,re.jsx)(De,{type:"button",$isDarkMode:e,onClick:t,"aria-label":"Закрити ШІ-асистент",children:(0,re.jsx)(p,{})})})]})}),(0,re.jsx)(_e,{$isDarkMode:e,$isStickyBgMode:r,children:(0,re.jsxs)(ze,{$isDarkMode:e,$isStickyBgMode:r,children:[(0,re.jsx)("label",{style:{minWidth:"unset",fontWeight:700,fontSize:13},children:"Gemini API Key"}),(0,re.jsx)(ne,{content:"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",isDarkMode:e,children:(0,re.jsxs)("label",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,whiteSpace:"nowrap",cursor:"pointer"},"aria-label":"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",children:[(0,re.jsx)("input",{type:"checkbox",checked:de,onChange:async e=>{const r=e.target.checked;Sr(r),await Z.default.setItem("gemini_google_search_enabled",r)}}),"Інтернет-пошук"]})}),(0,re.jsx)("input",{type:"password",placeholder:"Вставте ваш Gemini API Key...",value:h,onChange:e=>(async e=>{const r=(e||"").trim().replace(/^["']|["']$/g,"");m(r),await Z.default.setItem("gemini_api_key",r),window.dispatchEvent(new CustomEvent("geminiKeyChanged",{detail:r}))})(e.target.value),name:"ai-help-gemini-key",autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),!h&&(0,re.jsx)(Se,{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noreferrer",children:"Отримати ключ"})]})}),(0,re.jsxs)(xe,{children:[(0,re.jsxs)(ge,{$isDarkMode:e,$collapsed:P,children:[(0,re.jsxs)(fe,{$isDarkMode:e,children:["Чати (",s.length,"/10)"]}),(0,re.jsx)(ue,{children:s.map((r,t)=>{const i=r.id===x;return(0,re.jsxs)(be,{$active:i,$isDarkMode:e,onClick:()=>{b(r.id),Z.default.setItem("ai_help_active_chat_id",r.id)},title:r.title||`Чат ${t+1}`,children:[(0,re.jsx)(he,{children:r.title||`Чат ${t+1}`}),(0,re.jsx)(me,{type:"button",onClick:e=>((e,r)=>{if(r&&r.stopPropagation(),s.length<=1){const e=Wr(1,[]);return l([e]),b(e.id),Z.default.setItem("ai_help_chats_v2",[e]),Z.default.setItem("ai_help_active_chat_id",e.id),void X.success("Чат очищено")}const t=s.filter(r=>r.id!==e);if(l(t),Z.default.setItem("ai_help_chats_v2",t),x===e){const e=t[0].id;b(e),Z.default.setItem("ai_help_active_chat_id",e)}X.success("Чат видалено")})(r.id,e),"aria-label":"Видалити чат",children:(0,re.jsx)(R,{})})]},r.id)})}),(0,re.jsx)(ke,{type:"button",onClick:_t,disabled:s.length>=10,title:"Новий чат","aria-label":"Новий чат",children:(0,re.jsx)(a,{})})]}),(0,re.jsxs)($e,{$sidebarCollapsed:P,children:[(0,re.jsxs)(Ce,{ref:$t,children:[0===Mt.length&&(0,re.jsxs)(_r,{$isDarkMode:e,children:[(0,re.jsx)(zr,{children:"Запитайте будь-що або оберіть одне з популярних питань:"}),(0,re.jsx)(Ir,{isDarkMode:e,onAsk:Ut})]}),Mt.map((t,i)=>{if(t.isBot){const{cleanText:a,questions:n}=Gr(t.text),o=i%2==0?"Підказка: Ви можете зменшити кількість пропонованих питань після запиту для економії кредитів і зменшення перезарядки. Натисніть «Пропозиції».":"Підказка: Для швидших відповідей зменште обсяг відповіді з «Нормально» на «Менше».";return(0,re.jsxs)(ee.Fragment,{children:[(0,re.jsxs)(Re,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:r,children:[(0,re.jsx)(Te,{onClick:()=>{return e=a,void navigator.clipboard.writeText(e).then(()=>{X.success("Скопійовано!",{duration:1500})});var e},"aria-label":"Копіювати відповідь",children:(0,re.jsx)(L,{})}),(0,re.jsx)(J,{children:a}),t.usage?.totalTokens>0&&(0,re.jsxs)(Lr,{$isDarkMode:e,children:["Витрачено токенів: ",t.usage.totalTokens,t.usage.promptTokens>0&&` (запит: ${t.usage.promptTokens}, відповідь: ${t.usage.responseTokens})`]})]}),n.length>0&&(0,re.jsxs)(Br,{children:[(0,re.jsx)(Er,{children:" Спробуйте запитати далі:"}),(0,re.jsx)(Ur,{children:n.map((r,t)=>(0,re.jsx)(Pr,{$isDarkMode:e,onClick:()=>Ut(r),disabled:oe||et>0,children:r},t))}),(0,re.jsx)(Er,{style:{fontSize:"12px"},children:o})]})]},i)}return(0,re.jsxs)(Re,{$isBot:!1,$isDarkMode:e,$isStickyBgMode:r,children:[(0,re.jsx)(J,{children:t.text}),(0,re.jsxs)(Ar,{type:"button",$isDarkMode:e,onClick:()=>(e=>{const r=Mt[e];r&&!r.isBot&&(n(r.text),Dt(x,r=>r.slice(0,e)),Lt(),vt.current=0,Zr(0),rt(0),requestAnimationFrame(()=>mt.current?.focus()))})(i),children:[(0,re.jsx)(k,{})," Редагувати це питання"]})]},i)}),Or&&(0,re.jsx)(Re,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:r,children:(0,re.jsx)(J,{children:Gr(Or).cleanText})}),oe&&!Or&&(0,re.jsxs)(Ee,{$isDarkMode:e,children:[(0,re.jsx)(Le,{$delay:"0s"}),(0,re.jsx)(Le,{$delay:"0.2s"}),(0,re.jsx)(Le,{$delay:"0.4s"})]}),Vr&&(0,re.jsxs)(Ie,{children:[Vr,(0,re.jsx)(Be,{type:"button",title:"Повторити","aria-label":"Повторити",onClick:()=>Ut(Kr.current),children:(0,re.jsx)(S,{})})]}),(0,re.jsx)("div",{ref:kt})]}),Tr&&(0,re.jsx)(Qe,{children:Tr}),O.length>0&&(0,re.jsxs)(Xe,{children:[(0,re.jsxs)(Ze,{children:["Розмір: ",(Nr/1048576).toFixed(2)," MB / 100 MB"]}),O.map((r,t)=>(0,re.jsxs)(Ve,{$isDarkMode:e,children:[(0,re.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-in"},onClick:()=>(ot(r),dt(!1),ct(0),ft(0),xt(0),void bt(1)),children:r.file.type.startsWith("video/")?(0,re.jsx)("video",{src:r.objectURL}):r.file.type.startsWith("audio/")?(0,re.jsx)(U,{style:{fontSize:"26px"}}):(0,re.jsx)("img",{src:r.objectURL,alt:"preview"})}),(0,re.jsx)(Je,{onClick:()=>{return e=t,void Y(r=>{const t=r[e];return t?.objectURL&&(URL.revokeObjectURL(t.objectURL),Xr(e=>Math.max(0,e-t.file.size)),ht.current=ht.current.filter(e=>e!==t.objectURL)),r.filter((r,t)=>t!==e)});var e},"aria-label":"Прибрати файл",children:(0,re.jsx)(p,{})})]},t))]}),te.length>0&&(0,re.jsx)(mr,{children:te.map((r,t)=>{const i="Видалити прикріплену "+("weather"===r.type?"картку погоди":"новину");return(0,re.jsxs)(kr,{$isDarkMode:e,children:["weather"===r.type?(0,re.jsx)(z,{}):(0,re.jsx)(g,{}),(0,re.jsx)("span",{children:r.title}),(0,re.jsx)(ne,{content:i,isDarkMode:e,children:(0,re.jsx)("button",{type:"button",style:{marginRight:12},onClick:()=>ae(e=>e.filter((e,r)=>r!==t)),"aria-label":i,children:(0,re.jsx)(p,{})})})]},t)})}),(0,re.jsxs)(Ae,{$isDarkMode:e,$isStickyBgMode:r,onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),At(e.dataTransfer.files)},children:[(0,re.jsxs)(Ue,{$isDarkMode:e,children:[(0,re.jsxs)(Fe,{children:[(0,re.jsx)(ne,{content:"Обсяг відповіді",isDarkMode:e,children:(0,re.jsx)(Ge,{as:"span",$isDarkMode:e,children:(0,re.jsx)(_,{})})}),(0,re.jsx)(He,{$isDarkMode:e,role:"group","aria-label":"Обсяг відповіді",children:[["concise","Менше"],["normal","Нормально"],["detailed","Більше"]].map(([r,t])=>(0,re.jsx)(We,{type:"button",$isDarkMode:e,$active:y===r,"aria-pressed":y===r,onClick:()=>M(r),children:t},r))})]}),Mt.length>0&&(0,re.jsxs)(Pe,{children:[(0,re.jsx)(ne,{content:"Кількість рекомендованих питань (перезарядка)",isDarkMode:e,children:(0,re.jsx)(Ge,{as:"span",$isDarkMode:e,children:(0,re.jsx)(v,{})})}),(0,re.jsx)(He,{$isDarkMode:e,role:"group","aria-label":"Кількість рекомендованих питань",children:[["0","5 с"],["1","10 с"],["2","15 с"]].map(([r,t])=>(0,re.jsxs)(We,{type:"button",$isDarkMode:e,$active:D===r,"aria-pressed":D===r,onClick:async()=>{I(r),await Z.default.setItem("gemini_suggested_questions_count",r)},children:[r,(0,re.jsx)("small",{children:t})]},r))})]})]}),tt?(0,re.jsx)(ie,{active:!0,isDarkMode:e}):(0,re.jsx)(qe,{ref:mt,placeholder:"Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)",value:i,maxLength:le,onChange:e=>{const r=e.target.value.slice(0,le);n(r),mt.current&&(mt.current.style.height="auto",mt.current.style.height=`${mt.current.scrollHeight}px`)},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),Ut())},rows:1,$isDarkMode:e}),(0,re.jsxs)(Oe,{$isDarkMode:e,children:[(0,re.jsxs)(Ye,{$isDarkMode:e,$isLimitReached:i.length>=le,"aria-live":"polite",children:[i.length,"/",le]}),(0,re.jsxs)("label",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[(0,re.jsx)(ne,{content:"Додати фото, відео, аудіо",isDarkMode:e,children:(0,re.jsx)(Ke,{$isDarkMode:e,$size:"20px","aria-label":"Додати фото, відео, аудіо",children:(0,re.jsx)(T,{})})}),(0,re.jsx)("input",{type:"file",accept:"image/*, video/*, audio/*",multiple:!0,hidden:!0,onChange:e=>At(e.target.files)})]}),(0,re.jsx)(ne,{content:tt?"Зупинити запис":"Голосовий ввід",isDarkMode:e,children:(0,re.jsx)(Ke,{$isDarkMode:e,onClick:()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void X.error("Ваш браузер не підтримує розпізнавання голосу.");if(tt&&at.current)return void at.current.stop();const r=new e;at.current=r,r.lang="uk-UA",r.interimResults=!1,r.onstart=()=>{it(!0),qr("Слухаю вас...")},r.onresult=e=>{const r=e.results[0][0].transcript;n(e=>`${e?`${e} `:""}${r}`.slice(0,le))},r.onerror=()=>{it(!1),qr(""),at.current=null},r.onend=()=>{it(!1),qr(""),at.current=null},r.start()},"aria-label":tt?"Зупинити запис":"Голосовий ввід",$listening:tt,children:tt?(0,re.jsx)(C,{}):(0,re.jsx)(B,{})})}),(0,re.jsx)(ne,{content:"Очистити поточний чат",isDarkMode:e,children:(0,re.jsx)(Ke,{$isDarkMode:e,$danger:!0,onClick:()=>{X(e=>(0,re.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13},children:["Очистити поточний чат?",(0,re.jsx)("button",{onClick:async()=>{X.dismiss(e.id),Lt(),Dt(x,[]),X.success("Історію поточного чату очищено")},style:{background:"#e53e3e",color:"#fff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12,fontWeight:600},children:"Очистити"}),(0,re.jsx)("button",{onClick:()=>X.dismiss(e.id),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"inherit",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:"Скасувати"})]}),{duration:6e3})},"aria-label":"Очистити поточний чат",$size:"20px",children:(0,re.jsx)(R,{})})}),(0,re.jsx)(ne,{content:"Надіслати",isDarkMode:e,children:(0,re.jsx)(Ne,{disabled:!Pt,$isDarkMode:e,onClick:()=>Ut(),"aria-label":"Надіслати",children:oe?(0,re.jsx)(F,{}):et>0?`${et}с`:(0,re.jsx)(f,{})})})]})]})]})]}),nt&&(0,re.jsxs)(er,{onClick:St,children:[(0,re.jsx)(rr,{onClick:St,"aria-label":"Закрити перегляд",children:(0,re.jsx)(p,{})}),(0,re.jsx)(tr,{children:nt.file.name}),(0,re.jsx)("div",{onClick:e=>e.stopPropagation(),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:nt.file.type.startsWith("image/")?(0,re.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[(0,re.jsx)(ir,{src:nt.objectURL,alt:nt.file.name}),(0,re.jsxs)(hr,{onClick:()=>(async e=>{try{const r=e.objectURL||e.file&&URL.createObjectURL(e.file);if(!r)return;const t=await Z.default.getItem("custom_hero_backgrounds")||[],i=[{src:r,name:e.file?.name||"ai-image",author:"AiHelp"},...t.filter(e=>e.src!==r)];await Z.default.setItem("custom_hero_backgrounds",i),await Z.default.setItem("hero_background",r);try{window.dispatchEvent(new CustomEvent("heroBackgroundChanged",{detail:{src:r}}))}catch{}X.success("Картину встановлено як фон!")}catch(r){console.error(r),X.error("Не вдалося встановити фон.")}})(nt),children:[(0,re.jsx)(c,{})," Зробити фоном"]})]}):nt.file.type.startsWith("video/")?(0,re.jsxs)(re.Fragment,{children:[(0,re.jsx)(ar,{ref:wt,src:nt.objectURL,onTimeUpdate:Rt,onLoadedMetadata:Tt,onPlay:()=>dt(!0),onPause:()=>dt(!1),onEnded:()=>dt(!1)}),(0,re.jsxs)(lr,{children:[(0,re.jsx)(pr,{onClick:It,children:(0,re.jsx)(xr,{style:{width:100*lt+"%"}})}),(0,re.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,re.jsx)(cr,{onClick:Ct,"aria-label":st?"Пауза":"Відтворити",children:st?(0,re.jsx)(d,{}):(0,re.jsx)(u,{})}),(0,re.jsxs)(gr,{children:[zt(gt)," / ",zt(pt)]})]}),(0,re.jsx)(fr,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,re.jsxs)(ur,{$active:ut===e,onClick:()=>Bt(e),children:[e,"x"]},e))})]})]}):nt.file.type.startsWith("audio/")?(0,re.jsxs)(nr,{children:[(0,re.jsx)(or,{children:(0,re.jsx)(U,{})}),(0,re.jsx)(sr,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((e,r)=>(0,re.jsx)(dr,{$h:e,$playing:st,$dur:(.3+.07*r).toFixed(2)},r))}),(0,re.jsx)(br,{ref:wt,src:nt.objectURL,onTimeUpdate:Rt,onLoadedMetadata:Tt,onPlay:()=>dt(!0),onPause:()=>dt(!1),onEnded:()=>dt(!1)}),(0,re.jsxs)(lr,{children:[(0,re.jsx)(pr,{onClick:It,children:(0,re.jsx)(xr,{style:{width:100*lt+"%"}})}),(0,re.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,re.jsx)(cr,{onClick:Ct,"aria-label":st?"Пауза":"Відтворити",children:st?(0,re.jsx)(d,{}):(0,re.jsx)(u,{})}),(0,re.jsxs)(gr,{children:[zt(gt)," / ",zt(pt)]})]}),(0,re.jsx)(fr,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,re.jsxs)(ur,{$active:ut===e,onClick:()=>Bt(e),children:[e,"x"]},e))})]})]}):null})]}),E&&(0,re.jsx)($r,{onClick:()=>A(!1),children:(0,re.jsxs)(wr,{$isDarkMode:e,onClick:e=>e.stopPropagation(),children:[(0,re.jsxs)(vr,{$isDarkMode:e,children:[(0,re.jsxs)("h3",{children:[(0,re.jsx)(W,{style:{marginRight:6}})," Приблизні ліміти використання"]}),(0,re.jsx)(yr,{$isDarkMode:e,onClick:()=>A(!1),"aria-label":"Закрити",children:(0,re.jsx)(p,{})})]}),(0,re.jsxs)(jr,{children:[(0,re.jsxs)(Mr,{$isDarkMode:e,children:[(0,re.jsx)("span",{children:" Ліміт на хвилину(Гугл):"}),(0,re.jsx)("span",{children:"15 / хв"})]}),(0,re.jsxs)(Mr,{$isDarkMode:e,children:[(0,re.jsx)("span",{children:"Ліміт на добу(Гугл):"}),(0,re.jsx)("span",{children:"1500 / доба"})]})]}),(0,re.jsxs)(Dr,{$isDarkMode:e,children:[(0,re.jsx)("strong",{children:"Примітка:"})," Це безкоштовні ліміти Google AI Studio. Їх визначає ваш індивідуальний ключ, а не «Стихія» (зараз використовується модель ",(0,re.jsx)("strong",{children:$}),") Якщо ви підключите платний ключ, ліміти будуть більшими, проте тут вони все одно відображатимуться у базовому вигляді, оскільки ми не маємо доступу до параметрів вашого акаунта. Перезарядка 15с після кожного запиту та ліміт 300символів на запит зроблені з метою економії вашої квоти."]})]})})]})};export{ne as Tooltip,qr as default,Fr as getResponseLengthInstruction,Gr as parseSuggestedQuestions};