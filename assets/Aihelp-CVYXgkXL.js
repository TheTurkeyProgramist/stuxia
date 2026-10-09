const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-html2canvas-C4vYilSj.js","assets/rolldown-runtime-C_JJxWoe.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{n as t,t as i}from"./vendor-markdown-ADGh9TTx.js";import{n as a}from"./vendor-utils-o-f_e4rV.js";import{$n as n,C as o,E as s,H as d,J as l,S as c,T as p,_ as x,b as g,g as f,h as u,j as b,ln as h,m,o as k,p as $,pt as w,st as y,un as j,v,w as M,x as D,xn as _,y as z}from"./vendor-ui-BTt87RKE.js";import{t as S}from"./vendor-ai-CzXiCoTt.js";import{C,E as R,S as I,i as B,n as T,o as E,r as L,w as U}from"./index-DsXpZiTT.js";var P=e(r()),A=e(a()),G=t(),F=U.div`
  background-color: ${e=>e.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${e=>e.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${e=>e.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,H=({content:e,children:r,placement:t="bottom",isDarkMode:i=!0})=>{const[a,n]=(0,P.useState)(!1),d=(0,P.useRef)(null),{refs:l,floatingStyles:b,context:h}=f({open:a,onOpenChange:n,placement:t,strategy:"fixed",transform:!1,whileElementsMounted:s,middleware:[M(8),o(),p({padding:5}),c({element:d})]}),{isMounted:k,styles:w}=D(h,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),y=v(h,{move:!1}),j=x(h),_=u(h),S=g(h,{role:"tooltip"}),{getReferenceProps:C,getFloatingProps:R}=z([y,j,_,S]);if(!e)return r;const I=i?"#111111":"#ffffff";return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("span",{ref:l.setReference,...C(),style:{display:"inline-flex"},children:r}),k&&(0,G.jsx)(m,{children:(0,G.jsxs)(F,{ref:l.setFloating,$isDarkMode:i,style:{...b,...w},...R(),children:[e,(0,G.jsx)($,{ref:d,context:h,fill:I,stroke:"#00acb9",strokeWidth:1})]})})]})},O=I`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,W=I`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`,q=I`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,Y=300,K="gemini_global_cooldown_until",N=U.div`
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
  ${e=>e.$isStickyBgMode?C`
          background: ${e.$isDarkMode?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
          padding: 10px;
        `:C`
          background: transparent;
        `}
`,X=U.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2px;
`,J=U.div`
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
  padding: 4px 7px;
  transition: all 0.3s ease;
  z-index: 100;
  ${e=>e.$isStickyBgMode?C`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 165, 0, 0.25)":"rgba(255, 140, 0, 0.2)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        `:C`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,165,0,0.2)":"rgba(255,140,0,0.15)"};
        `}
`,V=U.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  color: #fff;
  text-transform: uppercase;
`,Q=U.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media (max-width: 600px) {
    margin-right: auto;
  }
`,Z=U.button`
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
`,ee=U.button`
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
`,re=U.div`
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
`,te=U.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?"white":"black"};
  ${e=>e.$isStickyBgMode?C`
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
`,ie=U.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`,ae=U.div`
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
`,ne=U.div`
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
  animation: ${O} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`,oe=U.button`
  position: absolute;
  right: 0px;
  top: -10px;
  color: inherit;
  cursor: pointer;
  font-size: 29px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${ne}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
  }
`,se=U.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${O} 0.2s ease;
`,de=U.button`
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
`,le=U.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${e=>e.$isDarkMode?"rgba(28,28,42,0.88)":"rgba(245,245,252,0.94)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 4px 14px 14px 14px;
  animation: ${O} 0.2s ease;
`,ce=U.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${W} 1.2s ease infinite;
  animation-delay: ${e=>e.$delay};
`,pe=U.div`
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
`,xe=U.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px 4px;
  flex-wrap: wrap;
  border-bottom: 1px dashed ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,ge=U.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,fe=U.div`
  display: flex;
  align-items: center;
  gap: 1px;
`,ue=U.label`
  font-weight: 700;
  font-size: 13px;
  color: #ff9500;
  letter-spacing: 0.5px;
  margin-right: 2px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`,be=U.select`
  appearance: none;
  background: ${e=>e.$isDarkMode?"rgba(255,165,0,0.12)":"rgba(255,140,0,0.08)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,165,0,0.35)":"rgba(255,140,0,0.3)"};
  border-radius: 9px;
  padding: 3px 22px 3px 7px;
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
`,he=U.textarea`
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
`,me=U.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,ke=U.span`
  margin-right: auto;
  color: ${e=>e.$isLimitReached?"#ff6b6b":e.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`,$e=U.button`
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
  ${e=>e.$danger&&C`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${e=>e.$listening&&C`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`,we=U.button`
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
`,ye=U.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`,je=U.div`
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
`,ve=U.button`
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
`,Me=U.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${q} 2s linear infinite;
`,De=U.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`,_e=U.div`
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
  animation: ${O} 0.2s ease;
`,ze=U.button`
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
`,Se=U.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ce=U.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Re=U.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Ie=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`,Be=U.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`,Te=U.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`,Ee=U.div`
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
`,Le=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,Ue=U.button`
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
`,Pe=U.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`,Ae=U.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`,Ge=U.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,Fe=U.div`
  display: flex;
  gap: 6px;
`,He=U.button`
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
`,Oe=U.audio`
  display: none;
`,We=U.button`
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
`,qe=U.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px 2px;
  flex-shrink: 0;
`,Ye=U.div`
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
`,Ke=U.button`
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
`,Ne=U.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${O} 0.2s ease;
`,Xe=U.div`
  width: min(500px, 92vw);
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
`,Je=U.div`
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
`,Ve=U.button`
  background: transparent;
  border: none;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.6)"};
  font-size: 22px;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 900;
  &:hover {
    color: #ff4d4d;
    background: rgba(255, 77, 77, 0.1);
  }
`,Qe=U.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ze=U.div`
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
`,er=U.div`
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
`,rr=U.div`
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
`,tr=U.div`
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
`,ir=U.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`,ar=U.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$active?"#ff9500":"inherit"};
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nr=U.span`
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  background: #ff9500;
  color: #fff;
  padding: 1px 6px;
  border-radius: 999px;
  letter-spacing: 0.5px;
`,or=U.div`
  font-size: 11px;
  opacity: 0.65;
`,sr=U.button`
  background: transparent;
  border: none;
  color: rgba(255, 80, 80, 0.75);
  font-size: 26px;
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
`,dr=U.button`
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
`,lr=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  margin: auto 0;
  text-align: center;
  gap: 12px;
  animation: ${O} 0.3s ease;
`,cr=U.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff9500;
`;U.div`
  font-size: 13px;
  opacity: 0.75;
  max-width: 400px;
`;var pr=U.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 460px;
  margin-top: 6px;
`,xr=U.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px;
  border-radius: 10px;
  border: 2px solid ${e=>e.$isDarkMode?"rgba(255, 160, 0, 0.3)":"rgba(255, 140, 0, 0.25)"};
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
  svg {
    font-size: 26px;
    }
`,gr=U.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: flex-start;
  margin: 2px 0 8px 10px;
  max-width: 85%;
  animation: ${O} 0.3s ease;
`,fr=U.div`
  font-size: 14px;
  font-weight: 700;
  color: #ff9500;
  letter-spacing: 0.5px;
`,ur=U.div`
  margin-top: 6px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,br=U.button`
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
`,hr=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,mr=U.button`
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
`,kr=e=>"detailed"===e?{label:"Більше",instruction:"Докладно."}:"normal"===e?{label:"Нормально",instruction:"Нормально."}:{label:"Менше",instruction:"Коротко."},$r=e=>"scientific"===e?{label:"Науково",instruction:"Використовуй науковий стиль, чітко, з термінами і логікою."}:"friendly"===e?{label:"Дружньо",instruction:"Використовуй дружній, теплий і простий стиль."}:{label:"Стандартно",instruction:"Використовуй нейтральний стиль."},wr=e=>{if(!e)return{cleanText:e,questions:[]};const r=/\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/,t=e.match(r);return t?{cleanText:e.replace(r,"").trim(),questions:t[1].split("\n").map(e=>e.replace(/^[•\-\*\d\.\s]+/,"").trim()).filter(e=>e.length>0).slice(0,3)}:{cleanText:e,questions:[]}},yr=e=>`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».\nКОНЦЕПЦІЯ ПЛАТФОРМИ:\n«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:\n• Погода — якщо надано актуальні дані погодного API або віджета, обов'язково давай конкретну відповідь із цифрами (температура, опади, вітер, стан неба).\n• Музика — плейлисти без реклами та лімітів.\n• Новини — RSS-стрічки з автоматичним фільтром.\n• Фан-арти — галерея різних жанрів.\n• Карта клімату — інтерактивна кліматична карта.\n• Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.\n\nАВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com\nВікові обмеження: 13+\nКонфіденційність: платформа не збирає персональні дані.\n\nТВОЇ ПРАВИЛА:\n1. Якщо у вхідних даних є погодний контекст (Open-Meteo або інтернет-пошук), ЗАВЖДИ відповідай конкретним прогнозом (температура, сонячно/хмарно/дощ, вітер, опади) для запитаного міста/дня (наприклад, завтра в Києві), а не слати на сторінку погоди.\n2. Якщо питання стосується платформи — відповідай конкретно і по суті.\n3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.\n4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.\n5. Відповідай українською мовою, якщо запит не на іншій мові.\n6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.\n${0===e?"7. Не додавай рекомендованих питань або блок [РЕКОМЕНДОВАНІ_ПИТАННЯ].":`7. Наприкінці кожної відповіді додавай рівно ${e} коротких релевантних питань для продовження діалогу у форматі [РЕКОМЕНДОВАНІ_ПИТАННЯ].`}\n${0===e?"":`[РЕКОМЕНДОВАНІ_ПИТАННЯ]\n• Запитання${e>1?" 1":""}?\n${e>1?"• Запитання 2?":""}\n[/РЕКОМЕНДОВАНІ_ПИТАННЯ]`}`,jr=(e=1,r=[])=>({id:`chat_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,title:`Чат ${e}`,messages:r,createdAt:Date.now()}),vr=({isDarkMode:r,isStickyBgMode:t})=>{const[a,o]=(0,P.useState)(""),[s,c]=(0,P.useState)([]),[p,x]=(0,P.useState)(""),[g,f]=(0,P.useState)(!1),[u,m]=(0,P.useState)(""),[$,v]=(0,P.useState)("gemini-3.5-flash-lite"),[M,D]=(0,P.useState)("normal"),[z,C]=(0,P.useState)("friendly"),[I,U]=(0,P.useState)("2"),[F,O]=(0,P.useState)(!1),[W,q]=(0,P.useState)([]),[vr,Mr]=(0,P.useState)([]),[Dr,_r]=(0,P.useState)(!1),[zr,Sr]=(0,P.useState)(!0);(0,P.useEffect)(()=>{const e=e=>{e.detail&&Mr(r=>r.some(r=>r.id===e.detail.id)?(B.error("Цю картку вже прикріплено!"),r):r.length>=4?(B.error("Максимум 4 прикріплення."),r):(B.success(`Прикріплено: ${e.detail.title}`),[...r,e.detail]))};return window.addEventListener("attachCardToAiHelp",e),()=>window.removeEventListener("attachCardToAiHelp",e)},[]);const[Cr,Rr]=(0,P.useState)(""),[Ir,Br]=(0,P.useState)(""),Tr=(0,P.useRef)(""),[Er,Lr]=(0,P.useState)(0),[Ur,Pr]=(0,P.useState)(null),[Ar,Gr]=(0,P.useState)(0),[Fr,Hr]=(0,P.useState)(0),[Or,Wr]=(0,P.useState)(!1),qr=(0,P.useRef)(null),[Yr,Kr]=(0,P.useState)(!1),[Nr,Xr]=(0,P.useState)(null),[Jr,Vr]=(0,P.useState)(!1),[Qr,Zr]=(0,P.useState)(0),[et,rt]=(0,P.useState)(0),[tt,it]=(0,P.useState)(0),[at,nt]=(0,P.useState)(1),ot=(0,P.useRef)([]),st=(0,P.useRef)(null),dt=(0,P.useRef)(null),lt=(0,P.useRef)(null),ct=(0,P.useRef)(null),pt=(0,P.useRef)(0),xt=(0,P.useRef)(!1);(0,P.useEffect)(()=>{if(!Ar)return;const e=()=>{const e=Math.max(0,Ar-Date.now());Hr(Math.ceil(e/1e3)),0===e&&(Gr(0),pt.current=0)};e();const r=setInterval(e,250);return()=>clearInterval(r)},[Ar]);const gt=s.find(e=>e.id===p)||s[0],ft=gt?gt.messages:[],ut=(e,r)=>{c(t=>{const i=t.map(t=>{if(t.id!==e)return t;const i="function"==typeof r?r(t.messages):r;let a=t.title;if((t.title.startsWith("Чат ")||!t.title)&&i.length>0){const e=i.find(e=>!e.isBot);if(e&&e.text){const r=e.text.trim();r&&(a=r.length>28?r.slice(0,28)+"...":r)}}return{...t,title:a,messages:i.slice(-50)}});return A.default.setItem("ai_help_chats_v2",i),i})},bt=()=>{if(s.length>=10)return void B.error("Досягнуто ліміт 10 паралельних чатів. Видаліть непотрібний чат.");const e=s.length+1,r=jr(e,[]),t=[...s,r];c(t),x(r.id),A.default.setItem("ai_help_chats_v2",t),A.default.setItem("ai_help_active_chat_id",r.id),Dt(),o(""),B.success(`Створено новий чат! (${t.length}/10)`)},ht=e=>!e||isNaN(e)?"0:00":`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,mt=()=>{ct.current&&ct.current.pause(),Xr(null),Vr(!1)},kt=()=>{ct.current&&(ct.current.paused?ct.current.play():ct.current.pause())},$t=()=>{if(!ct.current)return;const{currentTime:e,duration:r}=ct.current;it(e),Zr(r?e/r:0)},wt=()=>{ct.current&&(rt(ct.current.duration),ct.current.playbackRate=at)},yt=e=>{const r=e.currentTarget.getBoundingClientRect(),t=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));ct.current&&ct.current.duration&&(ct.current.currentTime=t*ct.current.duration)},jt=e=>{nt(e),ct.current&&(ct.current.playbackRate=e)};(0,P.useEffect)(()=>{const e=lt.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[ft]),(0,P.useEffect)(()=>{if(!Ir)return;const e=lt.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight)},[Ir]);const vt=async()=>{if(!Yr&&!Dr){Kr(!0),Rr("Роблю скріншот...");try{const r=(await R(async()=>{const{default:r}=await import("./vendor-html2canvas-C4vYilSj.js").then(r=>e(r.t()));return{default:r}},__vite__mapDeps([0,1]))).default,t=await r(document.getElementById("root")||document.documentElement||document.body,{useCORS:!0,allowTaint:!1,scale:.8,logging:!1,ignoreElements:e=>{const r=e.tagName?e.tagName.toLowerCase():"";return"iframe"===r||"video"===r||"audio"===r}}),i=await new Promise(e=>{try{t.toBlob(r=>{if(r)e(r);else try{const r=t.toDataURL("image/png").split(","),i=r[0].match(/:(.*?);/)[1],a=atob(r[1]);let n=a.length;const o=new Uint8Array(n);for(;n--;)o[n]=a.charCodeAt(n);e(new Blob([o],{type:i}))}catch{e(null)}},"image/png")}catch{e(null)}});if(!i)throw new Error("Не вдалося створити blob зображення");const a=new File([i],`screenshot_${Date.now()}.png`,{type:"image/png"}),n=URL.createObjectURL(a);ot.current.push(n),q(e=>[...e,{file:a,objectURL:n}]),Lr(e=>e+i.size),Rr("Скріншот додано — запитайте Gemini!"),B.success("Скріншот сторінки додано!"),setTimeout(()=>Rr(""),2500)}catch(r){Rr("Помилка скріншоту"),B.error("Не вдалося зробити скріншот сторінки."),setTimeout(()=>Rr(""),2500)}finally{Kr(!1)}}};(0,P.useEffect)(()=>{(async()=>{const e=await A.default.getItem("gemini_api_key"),r=await A.default.getItem("gemini_model"),t=await A.default.getItem("gemini_google_search_enabled"),i=await A.default.getItem("gemini_suggested_questions_count");if(e){const r="string"==typeof e?e.trim().replace(/^["']|["']$/g,""):e;m(r)}r&&v(r),null!==t&&Sr(t),["0","1","2"].includes(i)&&U(i);const a=await A.default.getItem("ai_help_chats_v2"),n=await A.default.getItem("ai_help_active_chat_id");let o=[];if(Array.isArray(a)&&a.length>0)o=a;else{const e=await A.default.getItem("ai_help_history");o=[jr(1,Array.isArray(e)?e:[])],await A.default.setItem("ai_help_chats_v2",o)}c(o);let s=n;s&&o.some(e=>e.id===s)||(s=o[0].id),x(s),await A.default.setItem("ai_help_active_chat_id",s)})();const e=e=>m(e.detail);return window.addEventListener("geminiKeyChanged",e),()=>window.removeEventListener("geminiKeyChanged",e)},[]),(0,P.useEffect)(()=>()=>{ot.current.forEach(e=>URL.revokeObjectURL(e)),ot.current=[]},[]);const Mt=async e=>({inlineData:{data:await new Promise(r=>{const t=new FileReader;t.onloadend=()=>r(t.result.split(",")[1]),t.readAsDataURL(e)}),mimeType:e.type}}),Dt=()=>{ot.current.forEach(e=>URL.revokeObjectURL(e)),ot.current=[],q([]),Mr([]),Lr(0)},_t=e=>{const r=Array.from(e);if(W.length+r.length>15)return void B.error("Максимум 15 файлів.");const t=W.reduce((e,r)=>e+r.file.size,0),i=r.reduce((e,r)=>e+r.size,0);if(t+i>104857600)return void B.error("Загальний розмір перевищує 100 МБ.");const a=r.map(e=>{const r=URL.createObjectURL(e);return ot.current.push(r),{file:e,objectURL:r}});Lr(t+i),q(e=>[...e,...a])},zt=async(e=null)=>{const r="string"==typeof e?e:a.trim();if(!r&&0===W.length&&0===vr.length||Dr||xt.current)return;const t=p;if(!u)return void ut(t,e=>[...e,{text:"Будь ласка, введіть Gemini API-ключ у панелі налаштувань.",isBot:!0}]);if(r&&T(r))return void ut(t,e=>[...e,{text:"Запит містить заборонені слова або теми.",isBot:!0}]);const i=Date.now(),n=await A.default.getItem(K),s=Math.max(pt.current,Number(n)||0);if(s>i){const e=Math.ceil((s-i)/1e3);return pt.current=s,Gr(s),void B.error(`Зачекайте ще ${e} с перед наступним запитом.`)}xt.current=!0,Tr.current=r,Pr(null),_r(!0),Br(""),ut(t,e=>[...e,{text:r,isBot:!1}]),o(""),st.current&&(st.current.style.height="auto");try{let e="";if((zr||/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|київ|львів|одес|харків|дніпр|завтра|сьогодні|прогноз|weather|forecast/i.test(r))&&r){Rr("Отримую актуальну інформацію / прогноз погоди...");try{e=await E(r)}catch(d){}}Rr("З'єднання з Google Gemini...");const i=(u||"").trim().replace(/^["']|["']$/g,""),a=new S(i),{instruction:n}=kr(M),{instruction:o}=$r(z),s=Number(I);let c="";vr.length>0&&(c="\n\n--- Прикріплений контент для аналізу: ---\n"+vr.map((e,r)=>`${r+1}. [${"weather"===e.type?"🌤️ Погода":"📰 Новина"}] ${e.title}\n${e.details}`).join("\n\n")+"\n-------------------------------------------\n");const p=[{text:`${n} ${o}\n${e?"Використай актуальний інтернет-контекст нижче. Не кажи, що не маєш доступу до новин; відокремлюй факти від прогнозів і додавай посилання на джерела, якщо вони надані.":"Якщо для відповіді потрібні актуальні новини, поясни, що свіжі результати не були отримані."}${c}${e}\n${r||"Проаналізуй прикріплений контент."}`}];for(const r of W)p.push(await Mt(r.file));const x=["gemini-3.0-flash","gemini-2.0-flash","gemini-2.5-flash"];let g=null,f=null;for(const r of x)try{if(g=await a.getGenerativeModel({model:r,systemInstruction:yr(s)}).generateContentStream(p),g)break}catch(l){f=l}if(!g)throw f||new Error("Не вдалося підключитися до Gemini API.");let b="";for await(const r of g.stream)b+=r.text(),Br(b);const h=(await g.response)?.usageMetadata,m={text:b,isBot:!0,usage:h?{promptTokens:h.promptTokenCount||0,responseTokens:h.candidatesTokenCount||0,totalTokens:h.totalTokenCount||0}:null};ut(t,e=>[...e,m]),Br(""),Dt();const k=Date.now()+1e3*{0:5,1:10,2:15}[s];pt.current=k,Gr(k),await A.default.setItem(K,k)}catch(c){Br("");const e=c?.message||"Невідома помилка Gemini.",r=/429|quota|rate.?limit|RESOURCE_EXHAUSTED/i.test(e);Pr(r?"Google відхилив запит через ліміт квоти (HTTP 429). Зачекайте 1 хвилину.":e),Dt();const t=Date.now()+5e3;pt.current=t,Gr(t),await A.default.setItem(K,t)}finally{xt.current=!1,_r(!1),Rr("")}},St=!Dr&&0===Fr&&(!!a.trim()||W.length>0||vr.length>0);return(0,G.jsxs)(N,{$isStickyBgMode:t,$isDarkMode:r,children:[(0,G.jsx)(L,{position:"top-center",toastOptions:{style:{background:r?"#1e1e2a":"#fff",color:r?"#f0f0f0":"#111",border:"1px solid rgba(255,149,0,0.35)",fontSize:13}}}),(0,G.jsxs)(X,{children:[(0,G.jsxs)(J,{$isDarkMode:r,$isStickyBgMode:t,children:["Послуги ШІ",(0,G.jsx)(V,{children:"Gemini"})]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)(H,{content:"Переглянути список чатів",isDarkMode:r,children:(0,G.jsxs)(Z,{type:"button",$isDarkMode:r,onClick:()=>f(!0),"aria-label":"Переглянути список чатів",children:["Чати (",s.length,"/10)"]})}),(0,G.jsx)(H,{content:"Переглянути приблизні ліміти",isDarkMode:r,children:(0,G.jsx)(Ke,{type:"button",$isDarkMode:r,onClick:()=>O(!0),"aria-label":"Переглянути приблизні ліміти",children:"Ліміти"})}),(0,G.jsx)(H,{content:"Створити новий паралельний чат",isDarkMode:r,children:(0,G.jsx)(ee,{type:"button",$isDarkMode:r,onClick:bt,disabled:s.length>=10,"aria-label":"Створити новий паралельний чат",children:"Новий чат"})})]})]}),(0,G.jsx)(re,{$isDarkMode:r,$isStickyBgMode:t,children:(0,G.jsxs)(te,{$isDarkMode:r,$isStickyBgMode:t,children:[(0,G.jsx)("label",{style:{minWidth:"unset",fontWeight:700,fontSize:13},children:"Gemini API Key"}),(0,G.jsx)(H,{content:"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",isDarkMode:r,children:(0,G.jsxs)("label",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,whiteSpace:"nowrap",cursor:"pointer"},"aria-label":"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",children:[(0,G.jsx)("input",{type:"checkbox",checked:zr,onChange:async e=>{const r=e.target.checked;Sr(r),await A.default.setItem("gemini_google_search_enabled",r)}}),"Інтернет-пошук"]})}),(0,G.jsx)("input",{type:"password",placeholder:"Вставте ваш Gemini API Key...",value:u,onChange:e=>(async e=>{const r=(e||"").trim().replace(/^["']|["']$/g,"");m(r),await A.default.setItem("gemini_api_key",r),window.dispatchEvent(new CustomEvent("geminiKeyChanged",{detail:r}))})(e.target.value),name:"ai-help-gemini-key",autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),!u&&(0,G.jsx)(ie,{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noreferrer",children:"Отримати ключ"})]})}),(0,G.jsxs)(ae,{ref:lt,children:[0===ft.length&&(0,G.jsxs)(lr,{$isDarkMode:r,children:[(0,G.jsx)(cr,{children:"Запитайте будь-що або оберіть одне з популярних питань:"}),(0,G.jsxs)(pr,{children:[(0,G.jsxs)(xr,{$isDarkMode:r,onClick:()=>zt("Які новини про погоду у світі?"),children:[(0,G.jsx)("span",{children:(0,G.jsx)(_,{})})," Які новини про погоду у світі?"]}),(0,G.jsxs)(xr,{$isDarkMode:r,onClick:()=>zt("Яка погода в Україні?"),children:[(0,G.jsx)("span",{children:(0,G.jsx)(b,{})})," Яка погода в Україні?"]}),(0,G.jsxs)(xr,{$isDarkMode:r,onClick:()=>zt("Порадити гру, кіно і т.д.?"),children:[(0,G.jsx)("span",{children:(0,G.jsx)(w,{})})," Порадити гру, кіно і т.д.?"]})]})]}),ft.map((e,a)=>{if(e.isBot){const{cleanText:n,questions:o}=wr(e.text),s=a%2==0?"Підказка: Ви можете зменшити кількість пропонованих питань після запиту для економії кредитів і зменшення перезарядки. Натисніть «Пропозиції».":"Підказка: Для швидших відповідей зменште обсяг відповіді з «Нормально» на «Менше».";return(0,G.jsxs)(P.Fragment,{children:[(0,G.jsxs)(ne,{$isBot:!0,$isDarkMode:r,$isStickyBgMode:t,children:[(0,G.jsx)(oe,{onClick:()=>{return e=n,void navigator.clipboard.writeText(e).then(()=>{B.success("Скопійовано!",{duration:1500})});var e},children:"🖺"}),(0,G.jsx)(i,{children:n}),e.usage?.totalTokens>0&&(0,G.jsxs)(ur,{$isDarkMode:r,children:["Витрачено токенів: ",e.usage.totalTokens,e.usage.promptTokens>0&&` (запит: ${e.usage.promptTokens}, відповідь: ${e.usage.responseTokens})`]})]}),o.length>0&&(0,G.jsxs)(gr,{children:[(0,G.jsx)(fr,{children:" Спробуйте запитати далі:"}),(0,G.jsx)(hr,{children:o.map((e,t)=>(0,G.jsx)(mr,{$isDarkMode:r,onClick:()=>zt(e),disabled:Dr||Fr>0,children:e},t))}),(0,G.jsx)(fr,{style:{fontSize:"12px"},children:s})]})]},a)}return(0,G.jsxs)(ne,{$isBot:!1,$isDarkMode:r,$isStickyBgMode:t,children:[(0,G.jsx)(i,{children:e.text}),(0,G.jsx)(br,{type:"button",$isDarkMode:r,onClick:()=>(e=>{const r=ft[e];r&&!r.isBot&&(o(r.text),ut(p,r=>r.slice(0,e)),Dt(),pt.current=0,Gr(0),Hr(0),requestAnimationFrame(()=>st.current?.focus()))})(a),children:"Редагувати це питання"})]},a)}),Ir&&(0,G.jsx)(ne,{$isBot:!0,$isDarkMode:r,$isStickyBgMode:t,children:(0,G.jsx)(i,{children:wr(Ir).cleanText})}),Dr&&!Ir&&(0,G.jsxs)(le,{$isDarkMode:r,children:[(0,G.jsx)(ce,{$delay:"0s"}),(0,G.jsx)(ce,{$delay:"0.2s"}),(0,G.jsx)(ce,{$delay:"0.4s"})]}),Ur&&(0,G.jsxs)(se,{children:[Ur,(0,G.jsx)(de,{onClick:()=>zt(Tr.current),children:"Повторити"})]}),(0,G.jsx)("div",{ref:dt})]}),Cr&&(0,G.jsx)(Me,{children:Cr}),W.length>0&&(0,G.jsxs)(ye,{children:[(0,G.jsxs)(De,{children:["Розмір: ",(Er/1048576).toFixed(2)," MB / 100 MB"]}),W.map((e,t)=>(0,G.jsxs)(je,{$isDarkMode:r,children:[(0,G.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-in"},onClick:()=>(Xr(e),Vr(!1),Zr(0),it(0),rt(0),void nt(1)),children:e.file.type.startsWith("video/")?(0,G.jsx)("video",{src:e.objectURL}):e.file.type.startsWith("audio/")?(0,G.jsx)("span",{style:{fontSize:"26px"},children:"🎵"}):(0,G.jsx)("img",{src:e.objectURL,alt:"preview"})}),(0,G.jsx)(ve,{onClick:()=>{return e=t,void q(r=>{const t=r[e];return t?.objectURL&&(URL.revokeObjectURL(t.objectURL),Lr(e=>Math.max(0,e-t.file.size)),ot.current=ot.current.filter(e=>e!==t.objectURL)),r.filter((r,t)=>t!==e)});var e},children:"✕"})]},t))]}),vr.length>0&&(0,G.jsx)(qe,{children:vr.map((e,t)=>{const i="Видалити прикріплену "+("weather"===e.type?"картку погоди":"новину");return(0,G.jsxs)(Ye,{$isDarkMode:r,children:["weather"===e.type?(0,G.jsx)(k,{}):(0,G.jsx)(y,{}),(0,G.jsx)("span",{children:e.title}),(0,G.jsx)(H,{content:i,isDarkMode:r,children:(0,G.jsx)("button",{type:"button",style:{marginRight:12},onClick:()=>Mr(e=>e.filter((e,r)=>r!==t)),"aria-label":i,children:"✕"})})]},t)})}),(0,G.jsxs)(pe,{$isDarkMode:r,$isStickyBgMode:t,onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),_t(e.dataTransfer.files)},children:[(0,G.jsxs)(xe,{$isDarkMode:r,children:[(0,G.jsxs)(fe,{children:[(0,G.jsx)(ue,{htmlFor:"response-length",$isDarkMode:r,children:"Обсяг:"}),(0,G.jsxs)(be,{id:"response-length","aria-label":"Обсяг відповіді",$isDarkMode:r,value:M,onChange:e=>D(e.target.value),children:[(0,G.jsx)("option",{value:"concise",children:"Менше"}),(0,G.jsx)("option",{value:"normal",children:"Нормально"}),(0,G.jsx)("option",{value:"detailed",children:"Більше"})]})]}),(0,G.jsxs)(fe,{children:[(0,G.jsx)(ue,{htmlFor:"response-style",$isDarkMode:r,children:"Стиль:"}),(0,G.jsxs)(be,{id:"response-style","aria-label":"Стиль відповіді",$isDarkMode:r,value:z,onChange:e=>C(e.target.value),children:[(0,G.jsx)("option",{value:"friendly",children:"Дружньо"}),(0,G.jsx)("option",{value:"standard",children:"Стандартно"}),(0,G.jsx)("option",{value:"scientific",children:"Науково"})]})]}),ft.length>0&&(0,G.jsxs)(ge,{children:[(0,G.jsx)(ue,{htmlFor:"suggested-questions-count",$isDarkMode:r,children:"Пропозиції:"}),(0,G.jsxs)(be,{id:"suggested-questions-count",$isDarkMode:r,value:I,onChange:async e=>{const r=e.target.value;U(r),await A.default.setItem("gemini_suggested_questions_count",r)},"aria-label":"Кількість рекомендованих питань",children:[(0,G.jsx)("option",{value:"0",children:"0 (5 с)"}),(0,G.jsx)("option",{value:"1",children:"1 (10 с)"}),(0,G.jsx)("option",{value:"2",children:"2 (15 с)"})]})]})]}),(0,G.jsx)(he,{ref:st,placeholder:"Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)",value:a,maxLength:Y,onChange:e=>{const r=e.target.value.slice(0,Y);o(r),st.current&&(st.current.style.height="auto",st.current.style.height=`${st.current.scrollHeight}px`)},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),zt())},rows:1,$isDarkMode:r}),(0,G.jsxs)(me,{$isDarkMode:r,children:[(0,G.jsxs)(ke,{$isDarkMode:r,$isLimitReached:a.length>=Y,"aria-live":"polite",children:[a.length,"/",Y]}),(0,G.jsxs)("label",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[(0,G.jsx)(H,{content:"Додати фото, відео, аудіо",isDarkMode:r,children:(0,G.jsx)($e,{$isDarkMode:r,$size:"20px","aria-label":"Додати фото, відео, аудіо",children:(0,G.jsx)(l,{})})}),(0,G.jsx)("input",{type:"file",accept:"image/*, video/*, audio/*",multiple:!0,hidden:!0,onChange:e=>_t(e.target.files)})]}),(0,G.jsx)(H,{content:"Зробити скріншот",isDarkMode:r,children:(0,G.jsx)($e,{$isDarkMode:r,onClick:vt,"aria-label":"Зробити скріншот",disabled:Dr||Yr,children:Yr?(0,G.jsx)(n,{}):(0,G.jsx)(j,{})})}),(0,G.jsx)(H,{content:Or?"Зупинити запис":"Голосовий ввід",isDarkMode:r,children:(0,G.jsx)($e,{$isDarkMode:r,onClick:()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void B.error("Ваш браузер не підтримує розпізнавання голосу.");if(Or&&qr.current)return void qr.current.stop();const r=new e;qr.current=r,r.lang="uk-UA",r.interimResults=!1,r.onstart=()=>{Wr(!0),Rr("Слухаю вас...")},r.onresult=e=>{const r=e.results[0][0].transcript;o(e=>`${e?`${e} `:""}${r}`.slice(0,Y))},r.onerror=()=>{Wr(!1),Rr(""),qr.current=null},r.onend=()=>{Wr(!1),Rr(""),qr.current=null},r.start()},"aria-label":Or?"Зупинити запис":"Голосовий ввід",$listening:Or,children:Or?"◼":(0,G.jsx)(d,{})})}),(0,G.jsx)(H,{content:"Зробити скріншот",isDarkMode:r,children:(0,G.jsx)($e,{$isDarkMode:r,onClick:vt,"aria-label":"Зробити скріншот",disabled:Dr||Yr,children:Yr?(0,G.jsx)(n,{}):(0,G.jsx)(j,{})})}),(0,G.jsx)(H,{content:"Очистити поточний чат",isDarkMode:r,children:(0,G.jsx)($e,{$isDarkMode:r,$danger:!0,onClick:()=>{B(e=>(0,G.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13},children:["Очистити поточний чат?",(0,G.jsx)("button",{onClick:async()=>{B.dismiss(e.id),Dt(),ut(p,[]),B.success("Історію поточного чату очищено")},style:{background:"#e53e3e",color:"#fff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12,fontWeight:600},children:"Очистити"}),(0,G.jsx)("button",{onClick:()=>B.dismiss(e.id),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"inherit",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:"Скасувати"})]}),{duration:6e3})},"aria-label":"Очистити поточний чат",$size:"20px",children:(0,G.jsx)(h,{})})}),(0,G.jsx)(H,{content:"Надіслати",isDarkMode:r,children:(0,G.jsx)(we,{disabled:!St,$isDarkMode:r,onClick:()=>zt(),"aria-label":"Надіслати",children:Dr?(0,G.jsx)(n,{}):Fr>0?`${Fr}с`:"➤"})})]})]}),Nr&&(0,G.jsxs)(_e,{onClick:mt,children:[(0,G.jsx)(ze,{onClick:mt,children:"✕"}),(0,G.jsx)(Se,{children:Nr.file.name}),(0,G.jsx)("div",{onClick:e=>e.stopPropagation(),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:Nr.file.type.startsWith("image/")?(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[(0,G.jsx)(Ce,{src:Nr.objectURL,alt:Nr.file.name}),(0,G.jsx)(We,{onClick:()=>(async e=>{try{const r=e.objectURL||e.file&&URL.createObjectURL(e.file);if(!r)return;const t=await A.default.getItem("custom_hero_backgrounds")||[],i=[{src:r,name:e.file?.name||"ai-image",author:"AiHelp"},...t.filter(e=>e.src!==r)];await A.default.setItem("custom_hero_backgrounds",i),await A.default.setItem("hero_background",r);try{window.dispatchEvent(new CustomEvent("heroBackgroundChanged",{detail:{src:r}}))}catch{}B.success("Картину встановлено як фон!")}catch(r){B.error("Не вдалося встановити фон.")}})(Nr),children:"🖼 Зробити фоном"})]}):Nr.file.type.startsWith("video/")?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Re,{ref:ct,src:Nr.objectURL,onTimeUpdate:$t,onLoadedMetadata:wt,onPlay:()=>Vr(!0),onPause:()=>Vr(!1),onEnded:()=>Vr(!1)}),(0,G.jsxs)(Le,{children:[(0,G.jsx)(Pe,{onClick:yt,children:(0,G.jsx)(Ae,{style:{width:100*Qr+"%"}})}),(0,G.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,G.jsx)(Ue,{onClick:kt,children:Jr?"⏸":"▶"}),(0,G.jsxs)(Ge,{children:[ht(tt)," / ",ht(et)]})]}),(0,G.jsx)(Fe,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,G.jsxs)(He,{$active:at===e,onClick:()=>jt(e),children:[e,"x"]},e))})]})]}):Nr.file.type.startsWith("audio/")?(0,G.jsxs)(Ie,{children:[(0,G.jsx)(Be,{children:"🎵"}),(0,G.jsx)(Te,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((e,r)=>(0,G.jsx)(Ee,{$h:e,$playing:Jr,$dur:(.3+.07*r).toFixed(2)},r))}),(0,G.jsx)(Oe,{ref:ct,src:Nr.objectURL,onTimeUpdate:$t,onLoadedMetadata:wt,onPlay:()=>Vr(!0),onPause:()=>Vr(!1),onEnded:()=>Vr(!1)}),(0,G.jsxs)(Le,{children:[(0,G.jsx)(Pe,{onClick:yt,children:(0,G.jsx)(Ae,{style:{width:100*Qr+"%"}})}),(0,G.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,G.jsx)(Ue,{onClick:kt,children:Jr?"⏸":"▶"}),(0,G.jsxs)(Ge,{children:[ht(tt)," / ",ht(et)]})]}),(0,G.jsx)(Fe,{children:[.5,.75,1,1.25,1.5,2].map(e=>(0,G.jsxs)(He,{$active:at===e,onClick:()=>jt(e),children:[e,"x"]},e))})]})]}):null})]}),g&&(0,G.jsx)(Ne,{onClick:()=>f(!1),children:(0,G.jsxs)(Xe,{$isDarkMode:r,onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)(Je,{$isDarkMode:r,children:[(0,G.jsxs)("h3",{children:["Список чатів (",s.length,"/10)"]}),(0,G.jsx)(Ve,{$isDarkMode:r,onClick:()=>f(!1),children:"✕"})]}),(0,G.jsx)(rr,{children:s.map((e,t)=>{const i=e.id===p,a=e.messages?e.messages.length:0;return(0,G.jsxs)(tr,{$active:i,$isDarkMode:r,onClick:()=>{return r=e.id,x(r),A.default.setItem("ai_help_active_chat_id",r),void f(!1);var r},children:[(0,G.jsxs)(ir,{children:[(0,G.jsxs)(ar,{$active:i,children:[e.title||`Чат ${t+1}`,i&&(0,G.jsx)(nr,{children:"Активний"})]}),(0,G.jsx)(or,{children:a>0?`${a} повідомл.`:"Порожній чат"})]}),(0,G.jsx)(H,{content:"Видалити чат",isDarkMode:r,children:(0,G.jsx)(sr,{type:"button",onClick:r=>((e,r)=>{if(r&&r.stopPropagation(),s.length<=1){const e=jr(1,[]);return c([e]),x(e.id),A.default.setItem("ai_help_chats_v2",[e]),A.default.setItem("ai_help_active_chat_id",e.id),void B.success("Чат очищено")}const t=s.filter(r=>r.id!==e);if(c(t),A.default.setItem("ai_help_chats_v2",t),p===e){const e=t[0].id;x(e),A.default.setItem("ai_help_active_chat_id",e)}B.success("Чат видалено")})(e.id,r),"aria-label":"Видалити чат",children:(0,G.jsx)(h,{})})})]},e.id)})}),s.length<10&&(0,G.jsxs)(dr,{type:"button",onClick:bt,children:["Створити новий чат (",s.length,"/10)"]})]})}),F&&(0,G.jsx)(Ne,{onClick:()=>O(!1),children:(0,G.jsxs)(Xe,{$isDarkMode:r,onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)(Je,{$isDarkMode:r,children:[(0,G.jsx)("h3",{children:"Приблизні ліміти використання"}),(0,G.jsx)(Ve,{$isDarkMode:r,onClick:()=>O(!1),children:"✕"})]}),(0,G.jsxs)(Qe,{children:[(0,G.jsxs)(Ze,{$isDarkMode:r,children:[(0,G.jsx)("span",{children:" Ліміт на хвилину(Гугл):"}),(0,G.jsx)("span",{children:"15 / хв"})]}),(0,G.jsxs)(Ze,{$isDarkMode:r,children:[(0,G.jsx)("span",{children:"Ліміт на добу(Гугл):"}),(0,G.jsx)("span",{children:"1500 / доба"})]})]}),(0,G.jsxs)(er,{$isDarkMode:r,children:[(0,G.jsx)("strong",{children:"Примітка:"})," Це безкоштовні ліміти Google AI Studio. Їх визначає ваш індивідуальний ключ, а не «Стихія» (зараз використовується модель ",(0,G.jsx)("strong",{children:$}),") Якщо ви підключите платний ключ, ліміти будуть більшими, проте тут вони все одно відображатимуться у базовому вигляді, оскільки ми не маємо доступу до параметрів вашого акаунта. Перезарядка 15с після кожного запиту та ліміт 300символів на запит зроблені з метою економії вашої квоти."]})]})})]})};export{H as Tooltip,vr as default,kr as getResponseLengthInstruction,$r as getResponseStyleInstruction,wr as parseSuggestedQuestions};
//# sourceMappingURL=Aihelp-CVYXgkXL.js.map