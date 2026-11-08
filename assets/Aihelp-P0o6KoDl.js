import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{n as r}from"./vendor-utils-BcX-d9lY.js";import{i as t,n as i}from"./index-Dd-O8J_a.js";import{a}from"./vendor-i18n-DhRqfqeK.js";import{s as o}from"./vendor-motion-B-5ZsAFi.js";import{i as n,r as s,t as d}from"./styled-components.browser.esm-C9MjP7gd.js";import{t as l}from"./vendor-ai-Bo_x5aWR.js";import{a as c,c as p,d as x,f as g,i as f,l as b,n as h,o as u,p as m,r as k,s as $,t as w,u as j}from"./freeWebSearch-4svlMMDA.js";import{$t as y,Ar as v,Br as M,Bt as D,Cn as z,Cr as S,Dr as _,Er as C,Ht as R,Ir as B,Kn as T,Mr as I,Nr as E,Or as L,Pr as U,Vr as A,at as P,ct as F,dr as H,dt as G,fr as W,ft as O,hr as Y,ht as q,it as K,jr as N,kn as X,kr as V,lt as J,mt as Q,nt as Z,ot as ee,pt as re,st as te,ut as ie,vr as ae,wr as oe,xt as ne}from"./vendor-ui-DBFQ2jRZ.js";import{n as se,t as de}from"./dist-C1SAOP-i.js";import{s as le}from"./contentFilter-6QONIxYe.js";import{n as ce,t as pe}from"./MirrorSafe-BBuq4yF6.js";var xe=e(r()),ge=e(a()),fe=o(),be=n.div`
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
`,he=({active:e,isDarkMode:r})=>{const t=(0,ge.useRef)(null);return(0,ge.useEffect)(()=>{if(!e||!navigator.mediaDevices?.getUserMedia)return;let r=!1,i=null,a=null,o=0;const n=[];return a=new(window.AudioContext||window.webkitAudioContext),navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}}).then(async e=>{if(r)return void e.getTracks().forEach(e=>e.stop());i=e,"suspended"===a.state&&await a.resume();const s=a.createAnalyser();s.fftSize=1024,a.createMediaStreamSource(i).connect(s);const d=new Float32Array(s.fftSize),l=()=>{((e,r)=>{const i=t.current;if(!i)return;const a=window.devicePixelRatio||1,o=i.clientWidth,s=i.clientHeight;i.width===Math.round(o*a)&&i.height===Math.round(s*a)||(i.width=Math.round(o*a),i.height=Math.round(s*a));const d=i.getContext("2d");d.setTransform(a,0,0,a,0,0),d.clearRect(0,0,o,s),e.getFloatTimeDomainData(r);let l=0;for(let t=0;t<r.length;t+=1)l+=r[t]*r[t];const c=Math.sqrt(l/r.length),p=performance.now();for(n.push({t:p,level:Math.min(1,2.2*Math.sqrt(c))});n.length&&p-n[0].t>3e3;)n.shift();const x=s/2;d.fillStyle="rgba(255,149,0,0.25)",d.fillRect(0,x,o,1);const g=d.createLinearGradient(0,0,0,s);g.addColorStop(0,"#ffb347"),g.addColorStop(.5,"#ff7a00"),g.addColorStop(1,"#ffb347"),d.fillStyle=g;let f=1/0;for(let t=n.length-1;t>=0;t-=1){const{t:e,level:r}=n[t],i=o-(p-e)*o/3e3;if(f-i<3)continue;f=i;const a=Math.max(1.5,r*(x-4));d.fillRect(i-1,x-a,2,2*a)}})(s,d),o=requestAnimationFrame(l)};l()}).catch(e=>{console.warn("VoiceWaveform: мікрофон недоступний",e)}),()=>{r=!0,cancelAnimationFrame(o),i?.getTracks().forEach(e=>e.stop()),a?.close()}},[e]),e?(0,fe.jsx)(be,{$isDarkMode:r,role:"img","aria-label":"Хвиля голосу за останні 3 секунди",children:(0,fe.jsx)("canvas",{ref:t})}):null},ue=n.div`
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
`,me=({content:e,children:r,placement:t="bottom",isDarkMode:i=!0})=>{const[a,o]=(0,ge.useState)(!1),n=(0,ge.useRef)(null),{refs:s,floatingStyles:d,context:l}=P({open:a,onOpenChange:o,placement:t,strategy:"fixed",transform:!1,whileElementsMounted:q,middleware:[re(8),O(),Q({padding:5}),G({element:n})]}),{isMounted:c,styles:p}=ie(l,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),x=te(l,{move:!1}),g=ee(l),f=K(l),b=J(l,{role:"tooltip"}),{getReferenceProps:h,getFloatingProps:u}=F([x,g,f,b]);if(!e)return r;const m=i?"#111111":"#ffffff";return(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("span",{ref:s.setReference,...h(),style:{display:"inline-flex"},children:r}),c&&(0,fe.jsx)(pe,{children:(0,fe.jsxs)(ue,{ref:s.setFloating,$isDarkMode:i,style:{...d,...p},...u(),children:[(0,fe.jsx)(ce,{children:e}),(0,fe.jsx)(Z,{ref:n,context:l,fill:m,stroke:"#00acb9",strokeWidth:1})]})})]})},ke=d`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,$e=d`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`,we=d`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,je=n.div`
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
  ${e=>e.$isStickyBgMode?s`
          background: ${e.$isDarkMode?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
          padding: 10px;
        `:s`
          background: transparent;
        `}
`,ye=n.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 0;
  gap: 0;
  overflow: hidden;
`,ve=n.div`
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
`,Me=n.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.4)"};
  padding: 2px 4px 4px;
  flex-shrink: 0;
`,De=n.div`
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
`,ze=n.div`
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
`,Se=n.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_e=n.button`
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

  ${ze}:hover & {
    opacity: 1;
  }

  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.12);
  }
`,Ce=n.button`
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
`,Re=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
  gap: 6px;
  overflow: hidden;
  padding-left: ${e=>e.$sidebarCollapsed?"0":"10px"};
  transition: padding 0.28s ease;
`,Be=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2px;
`,Te=n.div`
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
`,Ie=n(n.button`
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
`,Ee=n.button`
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
`,Le=n.button`
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
`,Ue=n.div`
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
`,Ae=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?"white":"black"};
  ${e=>e.$isStickyBgMode?s`
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
`,Pe=n.div`
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
`,Fe=n.div`
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
  animation: ${ke} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`,He=n.button`
  position: absolute;
  right: 0px;
  top: -10px;
  color: inherit;
  cursor: pointer;
  font-size: 29px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${Fe}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
  }
`,Ge=n.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${ke} 0.2s ease;
`,We=n.button`
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
`,Oe=n.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${e=>e.$isDarkMode?"rgba(28,28,42,0.88)":"rgba(245,245,252,0.94)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 4px 14px 14px 14px;
  animation: ${ke} 0.2s ease;
`,Ye=n.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${$e} 1.2s ease infinite;
  animation-delay: ${e=>e.$delay};
`,qe=n.div`
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
`,Ke=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px 6px;
  flex-wrap: wrap;
  border-bottom: 1px dashed ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,Ne=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Xe=n.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Ve=n.label`
  font-size: 16px;
  color: #ff9500;
  display: inline-flex;
  align-items: center;
`,Je=n.div`
  display: inline-flex;
  padding: 2px;
  gap: 2px;
  border-radius: 999px;
  background: ${e=>e.$isDarkMode?"rgba(255,165,0,0.08)":"rgba(255,140,0,0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,165,0,0.3)":"rgba(255,140,0,0.25)"};
`,Qe=n.button`
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
`,Ze=n.textarea`
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
`,er=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,rr=n.span`
  margin-right: auto;
  color: ${e=>e.$isLimitReached?"#ff6b6b":e.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`,tr=n.button`
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
  ${e=>e.$danger&&s`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${e=>e.$listening&&s`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`,ir=n.button`
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
`,ar=n.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`,or=n.div`
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
`,nr=n.button`
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
`,sr=n.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${we} 2s linear infinite;
`,dr=n.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`,lr=n.div`
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
  animation: ${ke} 0.2s ease;
`,cr=n.button`
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
`,pr=n.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xr=n.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,gr=n.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,fr=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`,br=n.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`,hr=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`,ur=n.div`
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
`,mr=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,kr=n.button`
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
`,$r=n.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`,wr=n.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`,jr=n.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,yr=n.div`
  display: flex;
  gap: 6px;
`,vr=n.button`
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
`,Mr=n.audio`
  display: none;
`,Dr=n.button`
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
`,zr=n.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px 2px;
  flex-shrink: 0;
`,Sr=n.div`
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
`,_r=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  margin: auto 0;
  text-align: center;
  gap: 12px;
  animation: ${ke} 0.3s ease;
`,Cr=n.div`
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
`,Rr=n.div`
  width: 100%;
  max-width: 580px;
  margin-top: 10px;
`,Br=n.div`
  height: 152px;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 12%,
    #000 88%,
    transparent 100%
  );
`,Tr=n.button`
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
`,Ir=n.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  transition: ${e=>e.$isResetting?"none":"transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"};
  transform: ${e=>`translateY(-${53*e.$position}px)`};
`,Er=({isDarkMode:e,onAsk:r})=>{const t=[{text:"Які новини про погоду у світі?",icon:(0,fe.jsx)(M,{})},{text:"Як зміни клімату впливають на природу?",icon:(0,fe.jsx)(D,{})},{text:"Яка погода буде завтра в Києві?",icon:(0,fe.jsx)(R,{})},{text:"Порадь екологічні компанії",icon:(0,fe.jsx)(z,{})},{text:"Порадити гру, кіно і т.д.?",icon:(0,fe.jsx)(ne,{})}],{position:i,isResetting:a,pauseProps:o}=h(t.length);return(0,fe.jsx)(Rr,{role:"group","aria-label":"Популярні запитання","aria-roledescription":"карусель",...o,children:(0,fe.jsx)(Br,{children:(0,fe.jsx)(Ir,{$position:i,$isResetting:a,children:[...t,...t.slice(0,3)].map((t,a)=>{const o=a>=i&&a<i+3;return(0,fe.jsxs)(Tr,{type:"button",$isDarkMode:e,$isCenter:a===i+1,onClick:()=>r(t.text),"aria-hidden":!o,tabIndex:o?0:-1,children:[(0,fe.jsx)("span",{children:t.icon}),t.text]},`${t.text}-${a}`)})})})})},Lr=n.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: flex-start;
  margin: 2px 0 8px 10px;
  max-width: 85%;
  animation: ${ke} 0.3s ease;
`,Ur=n.div`
  font-size: 14px;
  font-weight: 700;
  color: #ff9500;
  letter-spacing: 0.5px;
`,Ar=n.div`
  margin-top: 6px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,Pr=n.button`
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
`,Fr=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Hr=n.button`
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
`,Gr=e=>"detailed"===e?{label:"Більше",instruction:"Докладно."}:"normal"===e?{label:"Нормально",instruction:"Нормально."}:{label:"Менше",instruction:"Коротко."},Wr=e=>`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».\nКОНЦЕПЦІЯ ПЛАТФОРМИ:\n«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:\n• Погода — якщо надано актуальні дані погодного API або віджета, обов'язково давай конкретну відповідь із цифрами (температура, опади, вітер, стан неба).\n• Новини — RSS-стрічки з автоматичним фільтром.\n• Карта клімату — інтерактивна кліматична карта.\n• Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.\n\nАВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com\nВікові обмеження: 14+ (і для сайту, і для акаунта).\nКонфіденційність: платформа збирає мінімум даних і не продає їх; подробиці — в Угоді користувача (розділ 4). Акаунт можна видалити самостійно: Налаштування → Безпека → «Видалити акаунт».\n\nТВОЇ ПРАВИЛА:\n1. Якщо у вхідних даних є погодний контекст (Open-Meteo або інтернет-пошук), ЗАВЖДИ відповідай конкретним прогнозом (температура, сонячно/хмарно/дощ, вітер, опади) для запитаного міста/дня (наприклад, завтра в Києві), а не слати на сторінку погоди.\n2. Якщо питання стосується платформи — відповідай конкретно і по суті.\n3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.\n4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.\n5. Відповідай українською мовою, якщо запит не на іншій мові.\n6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.\n7. Не підтакуй автоматично, не використовуй лестощів і не хвали користувача без конкретної підстави. Оцінюй твердження за доказами та логікою; якщо не погоджуєшся, спокійно поясни чому й наведи сильні контраргументи. Відокремлюй факти, припущення й оцінки; визнавай невизначеність і прямо виправляй власні помилки.\n8. Тримай стриманий, нейтральний і предметний тон — без надмірної теплоти, вибачень, захоплення чи порожніх вступів. Пояснюй ключову логіку стисло й підтримуй дискусію запитанням, яке допоможе перевірити припущення або самостійно обдумати тему, коли це доречно. Не завершуй кожну відповідь шаблонним запитанням; невимушено пропонувати цікавий факт, зокрема про Азію, можна лише за контекстом.\n9. Якщо користувач навчається або розв'язує задачу, почни з однієї конкретної підказки, яка допоможе зробити наступний крок, і запропонуй спробувати. Це правило діє і тоді, коли користувач одразу просить готову відповідь: не розкривай її в першій відповіді, натомість дай підказку. Після спроби користувача реагуй саме на неї: поясни помилку або дай наступну підказку, не повторюй ту саму і не відмовляй уперто. Якщо користувач після підказки чи спроби повторно просить повний розв'язок або відповідь, надай їх із зрозумілим поясненням; не затягуй навчальний режим після такого повторного прохання.\n10. Якщо користувач питає про суб'єктивний особистий вибір — наприклад, колір волосся чи стін — прямо скажи, що це його особистий вибір, і не обирай за нього. Не видавай перевагу кольору за об'єктивний факт і не підміняй допомогу шаблонною символікою. Замість цього допоможи людині визначити власні критерії, порівняти практичні наслідки й уподобання або постав одне конкретне запитання, яке допоможе їй вирішити. Якщо користувач уже назвав свої критерії, допоможи їх зважити, але остаточний вибір залиш за ним.\n11. ${b(e)}`,Or=(e=1,r=[])=>({id:`chat_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,title:`Чат ${e}`,messages:r,createdAt:Date.now()}),Yr=({isDarkMode:e,isStickyBgMode:r,onClose:a})=>{const[o,n]=(0,ge.useState)(""),[s,d]=(0,ge.useState)([]),[b,h]=(0,ge.useState)(""),[M,z]=(0,ge.useState)("gemini-3.5-flash-lite"),{apiKey:P,openKeyModal:F,ensureAge:G,keyElements:O}=c({modelName:M}),q=f(),K=q.seconds,[J,Q]=(0,ge.useState)("normal"),[Z,ee]=(0,ge.useState)("1"),[re,te]=(0,ge.useState)(()=>{try{return"1"===i("ai_help_sidebar_collapsed")}catch{return!1}}),ie=()=>{te(e=>{const r=!e;try{t("ai_help_sidebar_collapsed",r?"1":"0")}catch{}return r})},[ne,ce]=(0,ge.useState)([]),[pe,be]=(0,ge.useState)([]),[ue,ke]=(0,ge.useState)(!1),[$e,we]=(0,ge.useState)(!0),Rr=(0,ge.useRef)(null),Br=(0,ge.useRef)(null);(0,ge.useEffect)(()=>{const e=e=>{e.detail&&be(r=>r.some(r=>r.id===e.detail.id)?(se.error("Цю картку вже прикріплено!"),r):r.length>=4?(se.error("Максимум 4 прикріплення."),r):(se.success(`Прикріплено: ${e.detail.title}`),[...r,e.detail]))};return window.addEventListener("attachCardToAiHelp",e),()=>window.removeEventListener("attachCardToAiHelp",e)},[]);const[Tr,Ir]=(0,ge.useState)(""),[Yr,qr]=(0,ge.useState)(""),Kr=(0,ge.useRef)(""),[Nr,Xr]=(0,ge.useState)(0),[Vr,Jr]=(0,ge.useState)(null),[Qr,Zr]=(0,ge.useState)(null),[et,rt]=(0,ge.useState)(!1),[tt,it]=(0,ge.useState)(0),[at,ot]=(0,ge.useState)(0),[nt,st]=(0,ge.useState)(0),[dt,lt]=(0,ge.useState)(1),ct=(0,ge.useRef)([]),pt=(0,ge.useRef)(null),xt=(0,ge.useRef)(null),gt=(0,ge.useRef)(null),ft=(0,ge.useRef)(null),bt=(0,ge.useRef)(!1),ht=s.find(e=>e.id===b)||s[0],ut=ht?ht.messages:[],mt=(e,r)=>{d(t=>{const i=t.map(t=>{if(t.id!==e)return t;const i="function"==typeof r?r(t.messages):r;let a=t.title;if((t.title.startsWith("Чат ")||!t.title)&&i.length>0){const e=i.find(e=>!e.isBot);if(e&&e.text){const r=e.text.trim();r&&(a=r.length>28?r.slice(0,28)+"...":r)}}return{...t,title:a,messages:i.slice(-50)}});return xe.default.setItem("ai_help_chats_v2",i),i})},kt=()=>{if(s.length>=10)return void se.error("Досягнуто ліміт 10 паралельних чатів. Видаліть непотрібний чат.");const e=s.length+1,r=Or(e,[]),t=[...s,r];d(t),h(r.id),xe.default.setItem("ai_help_chats_v2",t),xe.default.setItem("ai_help_active_chat_id",r.id),Ct(),n(""),se.success(`Створено новий чат! (${t.length}/10)`)},$t=e=>!e||isNaN(e)?"0:00":`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,wt=()=>{ft.current&&ft.current.pause(),Zr(null),rt(!1)},jt=()=>{ft.current&&(ft.current.paused?ft.current.play():ft.current.pause())},yt=()=>{if(!ft.current)return;const{currentTime:e,duration:r}=ft.current;st(e),it(r?e/r:0)},vt=()=>{ft.current&&(ot(ft.current.duration),ft.current.playbackRate=dt)},Mt=e=>{const r=e.currentTarget.getBoundingClientRect(),t=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));ft.current&&ft.current.duration&&(ft.current.currentTime=t*ft.current.duration)},Dt=e=>{lt(e),ft.current&&(ft.current.playbackRate=e)};(0,ge.useEffect)(()=>{const e=gt.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[ut]),(0,ge.useEffect)(()=>{if(!Yr)return;const e=gt.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[Yr]);const{isListening:zt,toggle:St}=k({onText:e=>n(r=>`${r?`${r} `:""}${e}`.slice(0,300)),onStart:()=>Ir("Слухаю вас..."),onStop:()=>Ir("")});(0,ge.useEffect)(()=>{(async()=>{const e=await xe.default.getItem("gemini_model"),r=await xe.default.getItem("gemini_google_search_enabled"),t=j(await xe.default.getItem(u));e&&z(e),null!==r&&we(r),null!==t&&ee(t);const i=await xe.default.getItem("ai_help_chats_v2"),a=await xe.default.getItem("ai_help_active_chat_id");let o;if(Array.isArray(i)&&i.length>0)o=i;else{const e=await xe.default.getItem("ai_help_history");o=[Or(1,Array.isArray(e)?e:[])],await xe.default.setItem("ai_help_chats_v2",o)}d(o);let n=a;n&&o.some(e=>e.id===n)||(n=o[0].id),h(n),await xe.default.setItem("ai_help_active_chat_id",n)})()},[]),(0,ge.useEffect)(()=>()=>{ct.current.forEach(e=>URL.revokeObjectURL(e)),ct.current=[]},[]);const _t=async e=>({inlineData:{data:await new Promise(r=>{const t=new FileReader;t.onloadend=()=>r(t.result.split(",")[1]),t.readAsDataURL(e)}),mimeType:e.type}}),Ct=()=>{ct.current.forEach(e=>URL.revokeObjectURL(e)),ct.current=[],ce([]),be([]),Xr(0)},Rt=e=>{const r=Array.from(e);if(ne.length+r.length>15)return void se.error("Максимум 15 файлів.");const t=ne.reduce((e,r)=>e+r.file.size,0),i=r.reduce((e,r)=>e+r.size,0);if(t+i>104857600)return void se.error("Загальний розмір перевищує 100 МБ.");const a=r.map(e=>{const r=URL.createObjectURL(e);return ct.current.push(r),{file:e,objectURL:r}});Xr(t+i),ce(e=>[...e,...a])},Bt=async(e=null)=>{const r="string"==typeof e?e:o.trim();if(!r&&0===ne.length&&0===pe.length||ue||bt.current)return;const t=b;if(!P)return mt(t,e=>[...e,{text:"Будь ласка, вставте ключ Gemini — натисніть кнопку з ключем угорі.",isBot:!0}]),void F();if(!(await G()))return;if(r&&le(r))return void mt(t,e=>[...e,{text:"Запит містить заборонені слова або теми.",isBot:!0}]);const i=await q.sync();if(i>0)se.error(`Зачекайте ще ${i} с перед наступним запитом.`);else{bt.current=!0,Kr.current=r,Jr(null),ke(!0),qr(""),mt(t,e=>[...e,{text:r,isBot:!1}]),n(""),pt.current&&(pt.current.style.height="auto");try{let e="";if(($e||/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|київ|львів|одес|харків|дніпр|завтра|сьогодні|прогноз|weather|forecast/i.test(r))&&r){Ir("Отримую актуальну інформацію / прогноз погоди...");try{e=await w(r)}catch(a){console.warn("Free web search error:",a)}}Ir("З'єднання з Google Gemini...");const i=(P||"").trim().replace(/^["']|["']$/g,""),o=new l(i),{instruction:n}=Gr(J),d=Number(Z);let c="";pe.length>0&&(c="\n\n--- Прикріплений контент для аналізу: ---\n"+pe.map((e,r)=>`${r+1}. [${"weather"===e.type?"🌤️ Погода":"📰 Новина"}] ${e.title}\n${e.details}`).join("\n\n")+"\n-------------------------------------------\n");const x=e?"Використай актуальний інтернет-контекст нижче. Не кажи, що не маєш доступу до новин; відокремлюй факти від прогнозів і додавай посилання на джерела, якщо вони надані.":"Якщо для відповіді потрібні актуальні новини, поясни, що свіжі результати не були отримані.",g=ut.slice(-6).map(e=>`${e.isBot?"Асистент":"Користувач"}: ${e.text}`).join("\n"),f=[{text:`${n}\n${x}${c}${e}\n${g?`Попередній діалог:\n${g}\n`:""}${r||"Проаналізуй прикріплений контент."}`}];for(const r of ne)f.push(await _t(r.file));const b=["gemini-3.0-flash","gemini-2.0-flash","gemini-2.5-flash"];let h=null,u=null;for(const r of b)try{if(h=await o.getGenerativeModel({model:r,systemInstruction:Wr(d)}).generateContentStream(f),h)break}catch(s){u=s,console.warn(`Model ${r} failed, trying next fallback...`,s)}if(!h)throw u||new Error("Не вдалося підключитися до Gemini API.");let m="";for await(const r of h.stream)m+=r.text(),qr(m);const k=(await h.response)?.usageMetadata,$={text:m,isBot:!0,usage:k?{promptTokens:k.promptTokenCount||0,responseTokens:k.candidatesTokenCount||0,totalTokens:k.totalTokenCount||0}:null};mt(t,e=>[...e,$]),qr(""),Ct(),await q.start(p(d))}catch(d){qr("");const e=d?.message||"Невідома помилка Gemini.",r=/429|quota|rate.?limit|RESOURCE_EXHAUSTED/i.test(e);Jr(r?"Google відхилив запит через ліміт квоти (HTTP 429). Зачекайте 1 хвилину.":e),Ct(),await q.start(5)}finally{bt.current=!1,ke(!1),Ir("")}}},Tt=!ue&&0===K&&(!!o.trim()||ne.length>0||pe.length>0);return(0,fe.jsxs)(fe.Fragment,{children:[O,(0,fe.jsxs)(je,{$isStickyBgMode:r,$isDarkMode:e,onTouchStart:e=>{Rr.current=e.touches[0].clientX,Br.current=e.touches[0].clientY},onTouchEnd:e=>{if(null===Rr.current)return;const r=e.changedTouches[0].clientX-Rr.current,t=Math.abs(e.changedTouches[0].clientY-Br.current);Math.abs(r)>40&&Math.abs(r)>1.5*t&&(r>0&&Rr.current<30&&re||r<0&&!re)&&ie(),Rr.current=null,Br.current=null},children:[(0,fe.jsx)(de,{position:"top-center",toastOptions:{style:{background:e?"#1e1e2a":"#fff",color:e?"#f0f0f0":"#111",border:"1px solid rgba(255,149,0,0.35)",fontSize:13}}}),(0,fe.jsx)(Be,{children:(0,fe.jsxs)(Te,{children:[(0,fe.jsx)(me,{content:re?"Показати список чатів":"Згорнути список чатів",isDarkMode:e,children:(0,fe.jsx)(Ie,{type:"button",$isDarkMode:e,onClick:ie,"aria-label":re?"Показати бічну панель":"Згорнути бічну панель","aria-expanded":!re,children:re?(0,fe.jsx)(oe,{}):(0,fe.jsx)(S,{})})}),(0,fe.jsx)(me,{content:"Створити новий паралельний чат",isDarkMode:e,children:(0,fe.jsx)(Ee,{type:"button",$isDarkMode:e,onClick:kt,disabled:s.length>=10,"aria-label":"Створити новий паралельний чат",children:(0,fe.jsx)(C,{})})}),a&&(0,fe.jsx)(me,{content:"Закрити ШІ-асистент",isDarkMode:e,children:(0,fe.jsx)(Le,{type:"button",$isDarkMode:e,onClick:a,"aria-label":"Закрити ШІ-асистент",children:(0,fe.jsx)(A,{})})})]})}),(0,fe.jsx)(Ue,{$isDarkMode:e,$isStickyBgMode:r,children:(0,fe.jsxs)(Ae,{$isDarkMode:e,$isStickyBgMode:r,children:[(0,fe.jsx)(g,{hasKey:Boolean(P),onClick:F,isDarkMode:e}),(0,fe.jsx)(me,{content:"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",isDarkMode:e,children:(0,fe.jsxs)("label",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,whiteSpace:"nowrap",cursor:"pointer"},"aria-label":"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",children:[(0,fe.jsx)("input",{type:"checkbox",checked:$e,onChange:async e=>{const r=e.target.checked;we(r),await xe.default.setItem("gemini_google_search_enabled",r)}}),"Інтернет-пошук"]})})]})}),(0,fe.jsxs)(ye,{children:[(0,fe.jsxs)(ve,{$isDarkMode:e,$collapsed:re,children:[(0,fe.jsxs)(Me,{$isDarkMode:e,children:["Чати (",s.length,"/10)"]}),(0,fe.jsx)(De,{children:s.map((r,t)=>{const i=r.id===b;return(0,fe.jsxs)(ze,{$active:i,$isDarkMode:e,onClick:()=>{h(r.id),xe.default.setItem("ai_help_active_chat_id",r.id)},title:r.title||`Чат ${t+1}`,children:[(0,fe.jsx)(Se,{children:r.title||`Чат ${t+1}`}),(0,fe.jsx)(_e,{type:"button",onClick:e=>((e,r)=>{if(r&&r.stopPropagation(),s.length<=1){const e=Or(1,[]);return d([e]),h(e.id),xe.default.setItem("ai_help_chats_v2",[e]),xe.default.setItem("ai_help_active_chat_id",e.id),void se.success("Чат очищено")}const t=s.filter(r=>r.id!==e);if(d(t),xe.default.setItem("ai_help_chats_v2",t),b===e){const e=t[0].id;h(e),xe.default.setItem("ai_help_active_chat_id",e)}se.success("Чат видалено")})(r.id,e),"aria-label":"Видалити чат",children:(0,fe.jsx)(H,{})})]},r.id)})}),(0,fe.jsx)(Ce,{type:"button",onClick:kt,disabled:s.length>=10,title:"Новий чат","aria-label":"Новий чат",children:(0,fe.jsx)(E,{})})]}),(0,fe.jsxs)(Re,{$sidebarCollapsed:re,children:[(0,fe.jsxs)(Pe,{ref:gt,children:[0===ut.length&&(0,fe.jsxs)(_r,{$isDarkMode:e,children:[(0,fe.jsx)(Cr,{children:"Запитайте будь-що або оберіть одне з популярних питань:"}),(0,fe.jsx)(Er,{isDarkMode:e,onAsk:Bt})]}),ut.map((t,i)=>{if(t.isBot){const{cleanText:a,questions:o}=x(t.text),n=i%2==0?"Підказка: Ви можете зменшити кількість пропонованих питань після запиту для економії кредитів і зменшення перезарядки. Натисніть «Пропозиції».":"Підказка: Для швидших відповідей зменште обсяг відповіді з «Нормально» на «Менше».";return(0,fe.jsxs)(ge.Fragment,{children:[(0,fe.jsxs)(Fe,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:r,children:[(0,fe.jsx)(He,{onClick:()=>{return e=a,void navigator.clipboard.writeText(e).then(()=>{se.success("Скопійовано!",{duration:1500})});var e},"aria-label":"Копіювати відповідь",children:(0,fe.jsx)(ae,{})}),(0,fe.jsx)(m,{children:a}),t.usage?.totalTokens>0&&(0,fe.jsxs)(Ar,{$isDarkMode:e,children:["Витрачено токенів: ",t.usage.totalTokens,t.usage.promptTokens>0&&` (запит: ${t.usage.promptTokens}, відповідь: ${t.usage.responseTokens})`]})]}),o.length>0&&(0,fe.jsxs)(Lr,{children:[(0,fe.jsx)(Ur,{children:" Спробуйте запитати далі:"}),(0,fe.jsx)(Fr,{children:o.map((r,t)=>(0,fe.jsx)(Hr,{$isDarkMode:e,onClick:()=>Bt(r),disabled:ue||K>0,children:r},t))}),(0,fe.jsx)(Ur,{style:{fontSize:"12px"},children:n})]})]},i)}return(0,fe.jsxs)(Fe,{$isBot:!1,$isDarkMode:e,$isStickyBgMode:r,children:[(0,fe.jsx)(m,{children:t.text}),(0,fe.jsxs)(Pr,{type:"button",$isDarkMode:e,onClick:()=>(e=>{const r=ut[e];r&&!r.isBot&&(n(r.text),mt(b,r=>r.slice(0,e)),Ct(),q.reset(),requestAnimationFrame(()=>pt.current?.focus()))})(i),children:[(0,fe.jsx)(L,{})," Редагувати це питання"]})]},i)}),Yr&&(0,fe.jsx)(Fe,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:r,children:(0,fe.jsx)(m,{children:x(Yr).cleanText})}),ue&&!Yr&&(0,fe.jsxs)(Oe,{$isDarkMode:e,children:[(0,fe.jsx)(Ye,{$delay:"0s"}),(0,fe.jsx)(Ye,{$delay:"0.2s"}),(0,fe.jsx)(Ye,{$delay:"0.4s"})]}),Vr&&(0,fe.jsxs)(Ge,{children:[Vr,(0,fe.jsx)(We,{type:"button",title:"Повторити","aria-label":"Повторити",onClick:()=>Bt(Kr.current),children:(0,fe.jsx)(U,{})})]}),(0,fe.jsx)("div",{ref:xt})]}),Tr&&(0,fe.jsx)(sr,{children:Tr}),ne.length>0&&(0,fe.jsxs)(ar,{children:[(0,fe.jsxs)(dr,{children:["Розмір: ",(Nr/1048576).toFixed(2)," MB / 100 MB"]}),ne.map((r,t)=>(0,fe.jsxs)(or,{$isDarkMode:e,children:[(0,fe.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-in"},onClick:()=>(Zr(r),rt(!1),it(0),st(0),ot(0),void lt(1)),children:r.file.type.startsWith("video/")?(0,fe.jsx)("video",{src:r.objectURL}):r.file.type.startsWith("audio/")?(0,fe.jsx)(_,{style:{fontSize:"26px"}}):(0,fe.jsx)("img",{src:r.objectURL,alt:"preview"})}),(0,fe.jsx)(nr,{onClick:()=>{return e=t,void ce(r=>{const t=r[e];return t?.objectURL&&(URL.revokeObjectURL(t.objectURL),Xr(e=>Math.max(0,e-t.file.size)),ct.current=ct.current.filter(e=>e!==t.objectURL)),r.filter((r,t)=>t!==e)});var e},"aria-label":"Прибрати файл",children:(0,fe.jsx)(A,{})})]},t))]}),pe.length>0&&(0,fe.jsx)(zr,{children:pe.map((r,t)=>{const i="Видалити прикріплену "+("weather"===r.type?"картку погоди":"новину");return(0,fe.jsxs)(Sr,{$isDarkMode:e,children:["weather"===r.type?(0,fe.jsx)(R,{}):(0,fe.jsx)(D,{}),(0,fe.jsx)("span",{children:r.title}),(0,fe.jsx)(me,{content:i,isDarkMode:e,children:(0,fe.jsx)("button",{type:"button",style:{marginRight:12},onClick:()=>be(e=>e.filter((e,r)=>r!==t)),"aria-label":i,children:(0,fe.jsx)(A,{})})})]},t)})}),(0,fe.jsxs)(qe,{$isDarkMode:e,$isStickyBgMode:r,onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),Rt(e.dataTransfer.files)},children:[(0,fe.jsxs)(Ke,{$isDarkMode:e,children:[(0,fe.jsxs)(Xe,{children:[(0,fe.jsx)(me,{content:"Обсяг відповіді",isDarkMode:e,children:(0,fe.jsx)(Ve,{as:"span",$isDarkMode:e,children:(0,fe.jsx)(W,{})})}),(0,fe.jsx)(Je,{$isDarkMode:e,role:"group","aria-label":"Обсяг відповіді",children:[["concise","Менше"],["normal","Нормально"],["detailed","Більше"]].map(([r,t])=>(0,fe.jsx)(Qe,{type:"button",$isDarkMode:e,$active:J===r,"aria-pressed":J===r,onClick:()=>Q(r),children:t},r))})]}),ut.length>0&&(0,fe.jsxs)(Ne,{children:[(0,fe.jsx)(me,{content:"Кількість рекомендованих питань (перезарядка)",isDarkMode:e,children:(0,fe.jsx)(Ve,{as:"span",$isDarkMode:e,children:(0,fe.jsx)(Y,{})})}),(0,fe.jsx)(Je,{$isDarkMode:e,role:"group","aria-label":"Кількість рекомендованих питань",children:$.map(({value:r,cooldown:t})=>(0,fe.jsxs)(Qe,{type:"button",$isDarkMode:e,$active:Z===r,"aria-pressed":Z===r,onClick:async()=>{ee(r),await xe.default.setItem("gemini_suggested_questions_count",r)},children:[r,(0,fe.jsxs)("small",{children:[t," с"]})]},r))})]})]}),zt?(0,fe.jsx)(he,{active:!0,isDarkMode:e}):(0,fe.jsx)(Ze,{ref:pt,placeholder:"Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)",value:o,maxLength:300,onChange:e=>{const r=e.target.value.slice(0,300);n(r),pt.current&&(pt.current.style.height="auto",pt.current.style.height=`${pt.current.scrollHeight}px`)},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),Bt())},rows:1,$isDarkMode:e}),(0,fe.jsxs)(er,{$isDarkMode:e,children:[(0,fe.jsxs)(rr,{$isDarkMode:e,$isLimitReached:o.length>=300,"aria-live":"polite",children:[o.length,"/",300]}),(0,fe.jsxs)("label",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[(0,fe.jsx)(me,{content:"Додати фото, відео, аудіо",isDarkMode:e,children:(0,fe.jsx)(tr,{$isDarkMode:e,$size:"20px","aria-label":"Додати фото, відео, аудіо",children:(0,fe.jsx)(T,{})})}),(0,fe.jsx)("input",{type:"file",accept:"image/*, video/*, audio/*",multiple:!0,hidden:!0,onChange:e=>Rt(e.target.files)})]}),(0,fe.jsx)(me,{content:zt?"Зупинити запис":"Голосовий ввід",isDarkMode:e,children:(0,fe.jsx)(tr,{$isDarkMode:e,onClick:St,"aria-label":zt?"Зупинити запис":"Голосовий ввід",$listening:zt,children:zt?(0,fe.jsx)(I,{}):(0,fe.jsx)(X,{})})}),(0,fe.jsx)(me,{content:"Очистити поточний чат",isDarkMode:e,children:(0,fe.jsx)(tr,{$isDarkMode:e,$danger:!0,onClick:()=>{se(e=>(0,fe.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13},children:["Очистити поточний чат?",(0,fe.jsx)("button",{onClick:async()=>{se.dismiss(e.id),Ct(),mt(b,[]),se.success("Історію поточного чату очищено")},style:{background:"#e53e3e",color:"#fff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12,fontWeight:600},children:"Очистити"}),(0,fe.jsx)("button",{onClick:()=>se.dismiss(e.id),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"inherit",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:"Скасувати"})]}),{duration:6e3})},"aria-label":"Очистити поточний чат",$size:"20px",children:(0,fe.jsx)(H,{})})}),(0,fe.jsx)(me,{content:"Надіслати",isDarkMode:e,children:(0,fe.jsx)(ir,{disabled:!Tt,$isDarkMode:e,onClick:()=>Bt(),"aria-label":"Надіслати",children:ue?(0,fe.jsx)(y,{}):K>0?`${K}с`:(0,fe.jsx)(B,{})})})]})]})]})]}),Qr&&(0,fe.jsxs)(lr,{onClick:wt,children:[(0,fe.jsx)(cr,{onClick:wt,"aria-label":"Закрити перегляд",children:(0,fe.jsx)(A,{})}),(0,fe.jsx)(pr,{children:Qr.file.name}),(0,fe.jsx)("div",{onClick:e=>e.stopPropagation(),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:Qr.file.type.startsWith("image/")?(0,fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[(0,fe.jsx)(xr,{src:Qr.objectURL,alt:Qr.file.name}),(0,fe.jsxs)(Dr,{onClick:()=>(async e=>{try{const r=e.objectURL||e.file&&URL.createObjectURL(e.file);if(!r)return;const t=await xe.default.getItem("custom_hero_backgrounds")||[],i=[{src:r,name:e.file?.name||"ai-image",author:"AiHelp"},...t.filter(e=>e.src!==r)];await xe.default.setItem("custom_hero_backgrounds",i),await xe.default.setItem("hero_background",r);try{window.dispatchEvent(new CustomEvent("heroBackgroundChanged",{detail:{src:r}}))}catch{}se.success("Картину встановлено як фон!")}catch(r){console.error(r),se.error("Не вдалося встановити фон.")}})(Qr),children:[(0,fe.jsx)(V,{})," Зробити фоном"]})]}):Qr.file.type.startsWith("video/")?(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)(gr,{ref:ft,src:Qr.objectURL,onTimeUpdate:yt,onLoadedMetadata:vt,onPlay:()=>rt(!0),onPause:()=>rt(!1),onEnded:()=>rt(!1)}),(0,fe.jsxs)(mr,{children:[(0,fe.jsx)($r,{onClick:Mt,children:(0,fe.jsx)(wr,{style:{width:100*tt+"%"}})}),(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,fe.jsx)(kr,{onClick:jt,"aria-label":et?"Пауза":"Відтворити",children:et?(0,fe.jsx)(v,{}):(0,fe.jsx)(N,{})}),(0,fe.jsxs)(jr,{children:[$t(nt)," / ",$t(at)]})]}),(0,fe.jsx)(yr,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,fe.jsxs)(vr,{$active:dt===e,onClick:()=>Dt(e),children:[e,"x"]},e))})]})]}):Qr.file.type.startsWith("audio/")?(0,fe.jsxs)(fr,{children:[(0,fe.jsx)(br,{children:(0,fe.jsx)(_,{})}),(0,fe.jsx)(hr,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((e,r)=>(0,fe.jsx)(ur,{$h:e,$playing:et,$dur:(.3+.07*r).toFixed(2)},r))}),(0,fe.jsx)(Mr,{ref:ft,src:Qr.objectURL,onTimeUpdate:yt,onLoadedMetadata:vt,onPlay:()=>rt(!0),onPause:()=>rt(!1),onEnded:()=>rt(!1)}),(0,fe.jsxs)(mr,{children:[(0,fe.jsx)($r,{onClick:Mt,children:(0,fe.jsx)(wr,{style:{width:100*tt+"%"}})}),(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,fe.jsx)(kr,{onClick:jt,"aria-label":et?"Пауза":"Відтворити",children:et?(0,fe.jsx)(v,{}):(0,fe.jsx)(N,{})}),(0,fe.jsxs)(jr,{children:[$t(nt)," / ",$t(at)]})]}),(0,fe.jsx)(yr,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,fe.jsxs)(vr,{$active:dt===e,onClick:()=>Dt(e),children:[e,"x"]},e))})]})]}):null})]})]})]})};export{me as Tooltip,Yr as default,Gr as getResponseLengthInstruction};