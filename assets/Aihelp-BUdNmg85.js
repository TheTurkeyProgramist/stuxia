import{o as Le}from"./rolldown-runtime-BNNRdYrd.js";import{Ct as Yt,Dt as Vt,G as Xt,Gr as A,Hr as Zt,K as Jt,Kr as i,M as er,N as f,P as xt,R as ft,Rt as tr,St as rr,Tt as ar,Ur as Ae,Wt as ir,_t as nr,bt as or,ci as sr,ft as lr,gr as dr,gt as cr,hr as pr,ht as gr,in as xr,mt as fr,pt as ur,si as hr,un as br,vt as mr,wt as vr,xt as $r,yt as wr,z as Se,zr as _e}from"./vendor-react-BrnrJ3qF.js";import{r as kr,t as yr}from"./index-gM6wV9Mf.js";var o=Le(hr()),g=Le(Zt()),jr=Le(dr()),t=sr(),Cr=i.div`
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
`,k=({content:e,children:h,placement:C="bottom",isDarkMode:w=!0})=>{const[b,R]=(0,o.useState)(!1),S=(0,o.useRef)(null),{refs:_,floatingStyles:pe,context:y}=gr({open:b,onOpenChange:R,placement:C,strategy:"fixed",transform:!1,whileElementsMounted:ar,middleware:[Yt(8),rr(),vr({padding:5}),$r({element:S})]}),{isMounted:P,styles:H}=or(y,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),ge=nr(y,{move:!1}),xe=cr(y),ee=fr(y),fe=wr(y,{role:"tooltip"}),{getReferenceProps:te,getFloatingProps:ue}=mr([ge,xe,ee,fe]);if(!e)return h;const re=w?"#111111":"#ffffff";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{ref:_.setReference,...te(),style:{display:"inline-flex"},children:h}),P&&(0,t.jsx)(ur,{children:(0,t.jsxs)(Cr,{ref:_.setFloating,$isDarkMode:w,style:{...pe,...H},...ue(),children:[e,(0,t.jsx)(lr,{ref:S,context:y,fill:re,stroke:"#00acb9",strokeWidth:1})]})})]})},E=Ae`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,Mr=Ae`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`,Sr=Ae`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,Z=300,ze="gemini_global_cooldown_until",_r=i.div`
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
  ${e=>e.$isStickyBgMode?A`
          background: ${e.$isDarkMode?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
          padding: 10px;
        `:A`
          background: transparent;
        `}
`,zr=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2px;
`,Dr=i.div`
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
  ${e=>e.$isStickyBgMode?A`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 165, 0, 0.25)":"rgba(255, 140, 0, 0.2)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        `:A`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,165,0,0.2)":"rgba(255,140,0,0.15)"};
        `}
`,Ir=i.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  color: #fff;
  text-transform: uppercase;
`,Tr=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media (max-width: 600px) {
    margin-right: auto;
  }
`,Rr=i.button`
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
`,Br=i.button`
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
`,Lr=i.div`
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
`,Ar=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?"white":"black"};
  ${e=>e.$isStickyBgMode?A`
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
`,Er=i.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`,Pr=i.div`
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
`,ce=i.div`
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
  animation: ${E} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`,Fr=i.button`
  position: absolute;
  right: 0px;
  top: -10px;
  color: inherit;
  cursor: pointer;
  font-size: 29px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${ce}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
  }
`,Ur=i.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${E} 0.2s ease;
`,Gr=i.button`
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
`,Hr=i.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${e=>e.$isDarkMode?"rgba(28,28,42,0.88)":"rgba(245,245,252,0.94)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 4px 14px 14px 14px;
  animation: ${E} 0.2s ease;
`,De=i.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${Mr} 1.2s ease infinite;
  animation-delay: ${e=>e.$delay};
`,Or=i.div`
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
`,Kr=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px 4px;
  flex-wrap: wrap;
  border-bottom: 1px dashed ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,Wr=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ut=i.div`
  display: flex;
  align-items: center;
  gap: 1px;
`,Ie=i.label`
  font-weight: 700;
  font-size: 13px;
  color: #ff9500;
  letter-spacing: 0.5px;
  margin-right: 2px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`,Te=i.select`
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
`,Nr=i.textarea`
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
`,qr=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,Qr=i.span`
  margin-right: auto;
  color: ${e=>e.$isLimitReached?"#ff6b6b":e.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`,J=i.button`
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
  ${e=>e.$danger&&A`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${e=>e.$listening&&A`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`,Yr=i.button`
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
`,Vr=i.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`,Xr=i.div`
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
`,Zr=i.button`
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
`,Jr=i.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${Sr} 2s linear infinite;
`,ea=i.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`,ta=i.div`
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
  animation: ${E} 0.2s ease;
`,ra=i.button`
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
`,aa=i.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ia=i.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,na=i.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,oa=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`,sa=i.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`,la=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`,da=i.div`
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
`,ht=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,bt=i.button`
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
`,mt=i.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`,vt=i.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`,$t=i.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,wt=i.div`
  display: flex;
  gap: 6px;
`,kt=i.button`
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
`,ca=i.audio`
  display: none;
`,pa=i.button`
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
`,ga=i.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px 2px;
  flex-shrink: 0;
`,xa=i.div`
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
`,fa=i.button`
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
`,yt=i.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${E} 0.2s ease;
`,jt=i.div`
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
`,Ct=i.div`
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
`,Mt=i.button`
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
`,ua=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,St=i.div`
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
`,ha=i.div`
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
`,ba=i.div`
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
`,ma=i.div`
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
`,va=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`,$a=i.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$active?"#ff9500":"inherit"};
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wa=i.span`
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  background: #ff9500;
  color: #fff;
  padding: 1px 6px;
  border-radius: 999px;
  letter-spacing: 0.5px;
`,ka=i.div`
  font-size: 11px;
  opacity: 0.65;
`,ya=i.button`
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
`,ja=i.button`
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
`,Ca=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  margin: auto 0;
  text-align: center;
  gap: 12px;
  animation: ${E} 0.3s ease;
`,Ma=i.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff9500;
`;i.div`
  font-size: 13px;
  opacity: 0.75;
  max-width: 400px;
`;var Sa=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 460px;
  margin-top: 6px;
`,Re=i.button`
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
`,_a=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: flex-start;
  margin: 2px 0 8px 10px;
  max-width: 85%;
  animation: ${E} 0.3s ease;
`,_t=i.div`
  font-size: 14px;
  font-weight: 700;
  color: #ff9500;
  letter-spacing: 0.5px;
`,za=i.div`
  margin-top: 6px;
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,Da=i.button`
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
`,Ia=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Ta=i.button`
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
`,Ra=e=>e==="detailed"?{label:"Більше",instruction:"Докладно."}:e==="normal"?{label:"Нормально",instruction:"Нормально."}:{label:"Менше",instruction:"Коротко."},Ba=e=>e==="scientific"?{label:"Науково",instruction:"Використовуй науковий стиль, чітко, з термінами і логікою."}:e==="friendly"?{label:"Дружньо",instruction:"Використовуй дружній, теплий і простий стиль."}:{label:"Стандартно",instruction:"Використовуй нейтральний стиль."},zt=e=>{if(!e)return{cleanText:e,questions:[]};const h=/\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/,C=e.match(h);return C?{cleanText:e.replace(h,"").trim(),questions:C[1].split(`
`).map(w=>w.replace(/^[•\-\*\d\.\s]+/,"").trim()).filter(w=>w.length>0).slice(0,3)}:{cleanText:e,questions:[]}},La=e=>`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
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
${e===0?"7. Не додавай рекомендованих питань або блок [РЕКОМЕНДОВАНІ_ПИТАННЯ].":`7. Наприкінці кожної відповіді додавай рівно ${e} коротких релевантних питань для продовження діалогу у форматі [РЕКОМЕНДОВАНІ_ПИТАННЯ].`}
${e===0?"":`[РЕКОМЕНДОВАНІ_ПИТАННЯ]
• Запитання${e>1?" 1":""}?
${e>1?"• Запитання 2?":""}
[/РЕКОМЕНДОВАНІ_ПИТАННЯ]`}`,Be=(e=1,h=[])=>({id:`chat_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,title:`Чат ${e}`,messages:h,createdAt:Date.now()}),Fa=({isDarkMode:e,isStickyBgMode:h})=>{const[C,w]=(0,o.useState)(""),[b,R]=(0,o.useState)([]),[S,_]=(0,o.useState)(""),[pe,y]=(0,o.useState)(!1),[P,H]=(0,o.useState)(""),[ge,xe]=(0,o.useState)("gemini-3.5-flash-lite"),[ee,fe]=(0,o.useState)("normal"),[te,ue]=(0,o.useState)("friendly"),[re,he]=(0,o.useState)("2"),[Dt,be]=(0,o.useState)(!1),[B,ae]=(0,o.useState)([]),[F,me]=(0,o.useState)([]),[z,Ee]=(0,o.useState)(!1),[Pe,Fe]=(0,o.useState)(!0);(0,o.useEffect)(()=>{const r=a=>{a.detail&&me(n=>n.some(s=>s.id===a.detail.id)?(f.error("Цю картку вже прикріплено!"),n):n.length>=4?(f.error("Максимум 4 прикріплення."),n):(f.success(`Прикріплено: ${a.detail.title}`),[...n,a.detail]))};return window.addEventListener("attachCardToAiHelp",r),()=>window.removeEventListener("attachCardToAiHelp",r)},[]);const[Ue,j]=(0,o.useState)(""),[O,ie]=(0,o.useState)(""),Ge=(0,o.useRef)(""),[It,ne]=(0,o.useState)(0),[He,Oe]=(0,o.useState)(null),[ve,K]=(0,o.useState)(0),[oe,Ke]=(0,o.useState)(0),[W,$e]=(0,o.useState)(!1),N=(0,o.useRef)(null),[q,We]=(0,o.useState)(!1),[M,Ne]=(0,o.useState)(null),[we,D]=(0,o.useState)(!1),[qe,Qe]=(0,o.useState)(0),[Ye,Ve]=(0,o.useState)(0),[Xe,Ze]=(0,o.useState)(0),[ke,Je]=(0,o.useState)(1),I=(0,o.useRef)([]),T=(0,o.useRef)(null),Tt=(0,o.useRef)(null),ye=(0,o.useRef)(null),u=(0,o.useRef)(null),U=(0,o.useRef)(0),je=(0,o.useRef)(!1);(0,o.useEffect)(()=>{if(!ve)return;const r=()=>{const n=Math.max(0,ve-Date.now());Ke(Math.ceil(n/1e3)),n===0&&(K(0),U.current=0)};r();const a=setInterval(r,250);return()=>clearInterval(a)},[ve]);const et=b.find(r=>r.id===S)||b[0],Q=et?et.messages:[],G=(r,a)=>{R(n=>{const s=n.map(c=>{if(c.id!==r)return c;const l=typeof a=="function"?a(c.messages):a;let d=c.title;if((c.title.startsWith("Чат ")||!c.title)&&l.length>0){const x=l.find(p=>!p.isBot);if(x&&x.text){const p=x.text.trim();p&&(d=p.length>28?p.slice(0,28)+"...":p)}}return{...c,title:d,messages:l.slice(-50)}});return g.default.setItem("ai_help_chats_v2",s),s})},tt=()=>{if(b.length>=10){f.error("Досягнуто ліміт 10 паралельних чатів. Видаліть непотрібний чат.");return}const r=b.length+1,a=Be(r,[]),n=[...b,a];R(n),_(a.id),g.default.setItem("ai_help_chats_v2",n),g.default.setItem("ai_help_active_chat_id",a.id),Y(),w(""),f.success(`Створено новий чат! (${n.length}/10)`)},Rt=r=>{_(r),g.default.setItem("ai_help_active_chat_id",r),y(!1)},Bt=(r,a)=>{if(a&&a.stopPropagation(),b.length<=1){const s=Be(1,[]);R([s]),_(s.id),g.default.setItem("ai_help_chats_v2",[s]),g.default.setItem("ai_help_active_chat_id",s.id),f.success("Чат очищено");return}const n=b.filter(s=>s.id!==r);if(R(n),g.default.setItem("ai_help_chats_v2",n),S===r){const s=n[0].id;_(s),g.default.setItem("ai_help_active_chat_id",s)}f.success("Чат видалено")},se=r=>!r||isNaN(r)?"0:00":`${Math.floor(r/60)}:${Math.floor(r%60).toString().padStart(2,"0")}`,Lt=r=>{Ne(r),D(!1),Qe(0),Ze(0),Ve(0),Je(1)},rt=()=>{u.current&&u.current.pause(),Ne(null),D(!1)},at=()=>{u.current&&(u.current.paused?u.current.play():u.current.pause())},it=()=>{if(!u.current)return;const{currentTime:r,duration:a}=u.current;Ze(r),Qe(a?r/a:0)},nt=()=>{u.current&&(Ve(u.current.duration),u.current.playbackRate=ke)},ot=r=>{const a=r.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width));u.current&&u.current.duration&&(u.current.currentTime=n*u.current.duration)},st=r=>{Je(r),u.current&&(u.current.playbackRate=r)},At=r=>{const a=r.target.value.slice(0,Z);w(a),T.current&&(T.current.style.height="auto",T.current.style.height=`${T.current.scrollHeight}px`)};(0,o.useEffect)(()=>{const r=ye.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[Q]),(0,o.useEffect)(()=>{if(!O)return;const r=ye.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[O]);const lt=async()=>{if(!(q||z)){We(!0),j("Роблю скріншот...");try{const r=document.getElementById("root")||document.documentElement||document.body,a=await(0,jr.default)(r,{useCORS:!0,allowTaint:!1,scale:.8,logging:!1,ignoreElements:l=>{const d=l.tagName?l.tagName.toLowerCase():"";return d==="iframe"||d==="video"||d==="audio"}}),n=await new Promise(l=>{try{a.toBlob(d=>{if(d)l(d);else try{const x=a.toDataURL("image/png").split(","),p=x[0].match(/:(.*?);/)[1],m=atob(x[1]);let $=m.length;const V=new Uint8Array($);for(;$--;)V[$]=m.charCodeAt($);l(new Blob([V],{type:p}))}catch{l(null)}},"image/png")}catch{l(null)}});if(!n)throw new Error("Не вдалося створити blob зображення");const s=new File([n],`screenshot_${Date.now()}.png`,{type:"image/png"}),c=URL.createObjectURL(s);I.current.push(c),ae(l=>[...l,{file:s,objectURL:c}]),ne(l=>l+n.size),j("Скріншот додано — запитайте Gemini!"),f.success("Скріншот сторінки додано!"),setTimeout(()=>j(""),2500)}catch(r){console.error("Screenshot capture failed:",r),j("Помилка скріншоту"),f.error("Не вдалося зробити скріншот сторінки."),setTimeout(()=>j(""),2500)}finally{We(!1)}}},Et=()=>{const r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r){f.error("Ваш браузер не підтримує розпізнавання голосу.");return}if(W&&N.current){N.current.stop();return}const a=new r;N.current=a,a.lang="uk-UA",a.interimResults=!1,a.onstart=()=>{$e(!0),j("Слухаю вас...")},a.onresult=n=>{const s=n.results[0][0].transcript;w(c=>`${c?`${c} `:""}${s}`.slice(0,Z))},a.onerror=()=>{$e(!1),j(""),N.current=null},a.onend=()=>{$e(!1),j(""),N.current=null},a.start()};(0,o.useEffect)(()=>{(async()=>{const n=await g.default.getItem("gemini_api_key"),s=await g.default.getItem("gemini_model"),c=await g.default.getItem("gemini_google_search_enabled"),l=await g.default.getItem("gemini_suggested_questions_count");if(n){const $=typeof n=="string"?n.trim().replace(/^["']|["']$/g,""):n;H($)}s&&xe(s),c!==null&&Fe(c),["0","1","2"].includes(l)&&he(l);const d=await g.default.getItem("ai_help_chats_v2"),x=await g.default.getItem("ai_help_active_chat_id");let p=[];if(Array.isArray(d)&&d.length>0)p=d;else{const $=await g.default.getItem("ai_help_history");p=[Be(1,Array.isArray($)?$:[])],await g.default.setItem("ai_help_chats_v2",p)}R(p);let m=x;(!m||!p.some($=>$.id===m))&&(m=p[0].id),_(m),await g.default.setItem("ai_help_active_chat_id",m)})();const a=n=>H(n.detail);return window.addEventListener("geminiKeyChanged",a),()=>window.removeEventListener("geminiKeyChanged",a)},[]),(0,o.useEffect)(()=>()=>{I.current.forEach(r=>URL.revokeObjectURL(r)),I.current=[]},[]);const Pt=async r=>({inlineData:{data:await new Promise(a=>{const n=new FileReader;n.onloadend=()=>a(n.result.split(",")[1]),n.readAsDataURL(r)}),mimeType:r.type}}),Y=()=>{I.current.forEach(r=>URL.revokeObjectURL(r)),I.current=[],ae([]),me([]),ne(0)},Ft=async r=>{const a=(r||"").trim().replace(/^["']|["']$/g,"");H(a),await g.default.setItem("gemini_api_key",a),window.dispatchEvent(new CustomEvent("geminiKeyChanged",{detail:a}))},dt=r=>{const a=Array.from(r),n=15,s=104857600;if(B.length+a.length>n){f.error(`Максимум ${n} файлів.`);return}const c=B.reduce((x,p)=>x+p.file.size,0),l=a.reduce((x,p)=>x+p.size,0);if(c+l>s){f.error("Загальний розмір перевищує 100 МБ.");return}const d=a.map(x=>{const p=URL.createObjectURL(x);return I.current.push(p),{file:x,objectURL:p}});ne(c+l),ae(x=>[...x,...d])},Ut=r=>{ae(a=>{const n=a[r];return n?.objectURL&&(URL.revokeObjectURL(n.objectURL),ne(s=>Math.max(0,s-n.file.size)),I.current=I.current.filter(s=>s!==n.objectURL)),a.filter((s,c)=>c!==r)})},Gt=async r=>{try{const a=r.objectURL||r.file&&URL.createObjectURL(r.file);if(!a)return;const n=await g.default.getItem("custom_hero_backgrounds")||[],s=[{src:a,name:r.file?.name||"ai-image",author:"AiHelp"},...n.filter(c=>c.src!==a)];await g.default.setItem("custom_hero_backgrounds",s),await g.default.setItem("hero_background",a);try{window.dispatchEvent(new CustomEvent("heroBackgroundChanged",{detail:{src:a}}))}catch{}f.success("Картину встановлено як фон!")}catch(a){console.error(a),f.error("Не вдалося встановити фон.")}},Ht=r=>{navigator.clipboard.writeText(r).then(()=>{f.success("Скопійовано!",{duration:1500})})},Ot=()=>{f(r=>(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13},children:["Очистити поточний чат?",(0,t.jsx)("button",{onClick:async()=>{f.dismiss(r.id),Y(),G(S,[]),f.success("Історію поточного чату очищено")},style:{background:"#e53e3e",color:"#fff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12,fontWeight:600},children:"Очистити"}),(0,t.jsx)("button",{onClick:()=>f.dismiss(r.id),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"inherit",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:"Скасувати"})]}),{duration:6e3})},Kt=r=>{const a=Q[r];!a||a.isBot||(w(a.text),G(S,n=>n.slice(0,r)),Y(),U.current=0,K(0),Ke(0),requestAnimationFrame(()=>T.current?.focus()))},Wt=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),L())},L=async(r=null)=>{const a=typeof r=="string"?r:C.trim();if(!a&&B.length===0&&F.length===0||z||je.current)return;const n=S;if(!P){G(n,d=>[...d,{text:"Будь ласка, введіть Gemini API-ключ у панелі налаштувань.",isBot:!0}]);return}if(a&&yr(a)){G(n,d=>[...d,{text:"Запит містить заборонені слова або теми.",isBot:!0}]);return}const s=Date.now(),c=await g.default.getItem(ze),l=Math.max(U.current,Number(c)||0);if(l>s){const d=Math.ceil((l-s)/1e3);U.current=l,K(l),f.error(`Зачекайте ще ${d} с перед наступним запитом.`);return}je.current=!0,Ge.current=a,Oe(null),Ee(!0),ie(""),G(n,d=>[...d,{text:a,isBot:!1}]),w(""),T.current&&(T.current.style.height="auto");try{let d="";if((Pe||/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|київ|львів|одес|харків|дніпр|завтра|сьогодні|прогноз|weather|forecast/i.test(a))&&a){j("Отримую актуальну інформацію / прогноз погоди...");try{d=await kr(a)}catch(v){console.warn("Free web search error:",v)}}j("З'єднання з Google Gemini...");const x=(P||"").trim().replace(/^["']|["']$/g,""),p=new pr(x),{instruction:m}=Ra(ee),{instruction:$}=Ba(te),V=Number(re);let ct="";F.length>0&&(ct=`

--- Прикріплений контент для аналізу: ---
`+F.map((v,de)=>`${de+1}. [${v.type==="weather"?"🌤️ Погода":"📰 Новина"}] ${v.title}
${v.details}`).join(`

`)+`
-------------------------------------------
`);const pt=[{text:`${m} ${$}
${d?"Використай актуальний інтернет-контекст нижче. Не кажи, що не маєш доступу до новин; відокремлюй факти від прогнозів і додавай посилання на джерела, якщо вони надані.":"Якщо для відповіді потрібні актуальні новини, поясни, що свіжі результати не були отримані."}${ct}${d}
${a||"Проаналізуй прикріплений контент."}`}];for(const v of B)pt.push(await Pt(v.file));const qt=["gemini-3.0-flash","gemini-2.0-flash","gemini-2.5-flash"];let X=null,gt=null;for(const v of qt)try{if(X=await p.getGenerativeModel({model:v,systemInstruction:La(V)}).generateContentStream(pt),X)break}catch(de){gt=de,console.warn(`Model ${v} failed, trying next fallback...`,de)}if(!X)throw gt||new Error("Не вдалося підключитися до Gemini API.");let Ce="";for await(const v of X.stream)Ce+=v.text(),ie(Ce);const le=(await X.response)?.usageMetadata,Qt={text:Ce,isBot:!0,usage:le?{promptTokens:le.promptTokenCount||0,responseTokens:le.candidatesTokenCount||0,totalTokens:le.totalTokenCount||0}:null};G(n,v=>[...v,Qt]),ie(""),Y();const Me=Date.now()+{0:5,1:10,2:15}[V]*1e3;U.current=Me,K(Me),await g.default.setItem(ze,Me)}catch(d){ie("");const x=d?.message||"Невідома помилка Gemini.",p=/429|quota|rate.?limit|RESOURCE_EXHAUSTED/i.test(x);Oe(p?"Google відхилив запит через ліміт квоти (HTTP 429). Зачекайте 1 хвилину.":x),Y();const m=Date.now()+5e3;U.current=m,K(m),await g.default.setItem(ze,m)}finally{je.current=!1,Ee(!1),j("")}},Nt=!z&&oe===0&&(!!C.trim()||B.length>0||F.length>0);return(0,t.jsxs)(_r,{$isStickyBgMode:h,$isDarkMode:e,children:[(0,t.jsx)(er,{position:"top-center",toastOptions:{style:{background:e?"#1e1e2a":"#fff",color:e?"#f0f0f0":"#111",border:"1px solid rgba(255,149,0,0.35)",fontSize:13}}}),(0,t.jsxs)(zr,{children:[(0,t.jsxs)(Dr,{$isDarkMode:e,$isStickyBgMode:h,children:["Послуги ШІ",(0,t.jsx)(Ir,{children:"Gemini"})]}),(0,t.jsxs)(Tr,{children:[(0,t.jsx)(k,{content:"Переглянути список чатів",isDarkMode:e,children:(0,t.jsxs)(Rr,{type:"button",$isDarkMode:e,onClick:()=>y(!0),"aria-label":"Переглянути список чатів",children:["Чати (",b.length,"/10)"]})}),(0,t.jsx)(k,{content:"Переглянути приблизні ліміти",isDarkMode:e,children:(0,t.jsx)(fa,{type:"button",$isDarkMode:e,onClick:()=>be(!0),"aria-label":"Переглянути приблизні ліміти",children:"Ліміти"})}),(0,t.jsx)(k,{content:"Створити новий паралельний чат",isDarkMode:e,children:(0,t.jsx)(Br,{type:"button",$isDarkMode:e,onClick:tt,disabled:b.length>=10,"aria-label":"Створити новий паралельний чат",children:"Новий чат"})})]})]}),(0,t.jsx)(Lr,{$isDarkMode:e,$isStickyBgMode:h,children:(0,t.jsxs)(Ar,{$isDarkMode:e,$isStickyBgMode:h,children:[(0,t.jsx)("label",{style:{minWidth:"unset",fontWeight:700,fontSize:13},children:"Gemini API Key"}),(0,t.jsx)(k,{content:"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",isDarkMode:e,children:(0,t.jsxs)("label",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,whiteSpace:"nowrap",cursor:"pointer"},"aria-label":"Безкоштовний онлайн-пошук фактів та інформації без використання квоти Gemini",children:[(0,t.jsx)("input",{type:"checkbox",checked:Pe,onChange:async r=>{const a=r.target.checked;Fe(a),await g.default.setItem("gemini_google_search_enabled",a)}}),"Інтернет-пошук"]})}),(0,t.jsx)("input",{type:"password",placeholder:"Вставте ваш Gemini API Key...",value:P,onChange:r=>Ft(r.target.value),name:"ai-help-gemini-key",autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),!P&&(0,t.jsx)(Er,{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noreferrer",children:"Отримати ключ"})]})}),(0,t.jsxs)(Pr,{ref:ye,children:[Q.length===0&&(0,t.jsxs)(Ca,{$isDarkMode:e,children:[(0,t.jsx)(Ma,{children:"Запитайте будь-що або оберіть одне з популярних питань:"}),(0,t.jsxs)(Sa,{children:[(0,t.jsxs)(Re,{$isDarkMode:e,onClick:()=>L("Які новини про погоду у світі?"),children:[(0,t.jsx)("span",{children:(0,t.jsx)(Xt,{})})," Які новини про погоду у світі?"]}),(0,t.jsxs)(Re,{$isDarkMode:e,onClick:()=>L("Яка погода в Україні?"),children:[(0,t.jsx)("span",{children:(0,t.jsx)(Vt,{})})," Яка погода в Україні?"]}),(0,t.jsxs)(Re,{$isDarkMode:e,onClick:()=>L("Порадити гру, кіно і т.д.?"),children:[(0,t.jsx)("span",{children:(0,t.jsx)(br,{})})," Порадити гру, кіно і т.д.?"]})]})]}),Q.map((r,a)=>{if(r.isBot){const{cleanText:n,questions:s}=zt(r.text),c=a%2===0?"Підказка: Ви можете зменшити кількість пропонованих питань після запиту для економії кредитів і зменшення перезарядки. Натисніть «Пропозиції».":"Підказка: Для швидших відповідей зменште обсяг відповіді з «Нормально» на «Менше».";return(0,t.jsxs)(o.Fragment,{children:[(0,t.jsxs)(ce,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:h,children:[(0,t.jsx)(Fr,{onClick:()=>Ht(n),children:"🖺"}),(0,t.jsx)(Se,{children:n}),r.usage?.totalTokens>0&&(0,t.jsxs)(za,{$isDarkMode:e,children:["Витрачено токенів: ",r.usage.totalTokens,r.usage.promptTokens>0&&` (запит: ${r.usage.promptTokens}, відповідь: ${r.usage.responseTokens})`]})]}),s.length>0&&(0,t.jsxs)(_a,{children:[(0,t.jsx)(_t,{children:" Спробуйте запитати далі:"}),(0,t.jsx)(Ia,{children:s.map((l,d)=>(0,t.jsx)(Ta,{$isDarkMode:e,onClick:()=>L(l),disabled:z||oe>0,children:l},d))}),(0,t.jsx)(_t,{style:{fontSize:"12px"},children:c})]})]},a)}return(0,t.jsxs)(ce,{$isBot:!1,$isDarkMode:e,$isStickyBgMode:h,children:[(0,t.jsx)(Se,{children:r.text}),(0,t.jsx)(Da,{type:"button",$isDarkMode:e,onClick:()=>Kt(a),children:"Редагувати це питання"})]},a)}),O&&(0,t.jsx)(ce,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:h,children:(0,t.jsx)(Se,{children:zt(O).cleanText})}),z&&!O&&(0,t.jsxs)(Hr,{$isDarkMode:e,children:[(0,t.jsx)(De,{$delay:"0s"}),(0,t.jsx)(De,{$delay:"0.2s"}),(0,t.jsx)(De,{$delay:"0.4s"})]}),He&&(0,t.jsxs)(Ur,{children:[He,(0,t.jsx)(Gr,{onClick:()=>L(Ge.current),children:"Повторити"})]}),(0,t.jsx)("div",{ref:Tt})]}),Ue&&(0,t.jsx)(Jr,{children:Ue}),B.length>0&&(0,t.jsxs)(Vr,{children:[(0,t.jsxs)(ea,{children:["Розмір: ",(It/1048576).toFixed(2)," MB / 100 MB"]}),B.map((r,a)=>(0,t.jsxs)(Xr,{$isDarkMode:e,children:[(0,t.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-in"},onClick:()=>Lt(r),children:r.file.type.startsWith("video/")?(0,t.jsx)("video",{src:r.objectURL}):r.file.type.startsWith("audio/")?(0,t.jsx)("span",{style:{fontSize:"26px"},children:"🎵"}):(0,t.jsx)("img",{src:r.objectURL,alt:"preview"})}),(0,t.jsx)(Zr,{onClick:()=>Ut(a),children:"✕"})]},a))]}),F.length>0&&(0,t.jsx)(ga,{children:F.map((r,a)=>{const n=`Видалити прикріплену ${r.type==="weather"?"картку погоди":"новину"}`;return(0,t.jsxs)(xa,{$isDarkMode:e,children:[r.type==="weather"?(0,t.jsx)(Jt,{}):(0,t.jsx)(xr,{}),(0,t.jsx)("span",{children:r.title}),(0,t.jsx)(k,{content:n,isDarkMode:e,children:(0,t.jsx)("button",{type:"button",style:{marginRight:12},onClick:()=>me(s=>s.filter((c,l)=>l!==a)),"aria-label":n,children:"✕"})})]},a)})}),(0,t.jsxs)(Or,{$isDarkMode:e,$isStickyBgMode:h,onDragOver:r=>r.preventDefault(),onDrop:r=>{r.preventDefault(),dt(r.dataTransfer.files)},children:[(0,t.jsxs)(Kr,{$isDarkMode:e,children:[(0,t.jsxs)(ut,{children:[(0,t.jsx)(Ie,{htmlFor:"response-length",$isDarkMode:e,children:"Обсяг:"}),(0,t.jsxs)(Te,{id:"response-length","aria-label":"Обсяг відповіді",$isDarkMode:e,value:ee,onChange:r=>fe(r.target.value),children:[(0,t.jsx)("option",{value:"concise",children:"Менше"}),(0,t.jsx)("option",{value:"normal",children:"Нормально"}),(0,t.jsx)("option",{value:"detailed",children:"Більше"})]})]}),(0,t.jsxs)(ut,{children:[(0,t.jsx)(Ie,{htmlFor:"response-style",$isDarkMode:e,children:"Стиль:"}),(0,t.jsxs)(Te,{id:"response-style","aria-label":"Стиль відповіді",$isDarkMode:e,value:te,onChange:r=>ue(r.target.value),children:[(0,t.jsx)("option",{value:"friendly",children:"Дружньо"}),(0,t.jsx)("option",{value:"standard",children:"Стандартно"}),(0,t.jsx)("option",{value:"scientific",children:"Науково"})]})]}),Q.length>0&&(0,t.jsxs)(Wr,{children:[(0,t.jsx)(Ie,{htmlFor:"suggested-questions-count",$isDarkMode:e,children:"Пропозиції:"}),(0,t.jsxs)(Te,{id:"suggested-questions-count",$isDarkMode:e,value:re,onChange:async r=>{const a=r.target.value;he(a),await g.default.setItem("gemini_suggested_questions_count",a)},"aria-label":"Кількість рекомендованих питань",children:[(0,t.jsx)("option",{value:"0",children:"0 (5 с)"}),(0,t.jsx)("option",{value:"1",children:"1 (10 с)"}),(0,t.jsx)("option",{value:"2",children:"2 (15 с)"})]})]})]}),(0,t.jsx)(Nr,{ref:T,placeholder:"Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)",value:C,maxLength:Z,onChange:At,onKeyDown:Wt,rows:1,$isDarkMode:e}),(0,t.jsxs)(qr,{$isDarkMode:e,children:[(0,t.jsxs)(Qr,{$isDarkMode:e,$isLimitReached:C.length>=Z,"aria-live":"polite",children:[C.length,"/",Z]}),(0,t.jsxs)("label",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[(0,t.jsx)(k,{content:"Додати фото, відео, аудіо",isDarkMode:e,children:(0,t.jsx)(J,{$isDarkMode:e,$size:"20px","aria-label":"Додати фото, відео, аудіо",children:(0,t.jsx)(ir,{})})}),(0,t.jsx)("input",{type:"file",accept:"image/*, video/*, audio/*",multiple:!0,hidden:!0,onChange:r=>dt(r.target.files)})]}),(0,t.jsx)(k,{content:"Зробити скріншот",isDarkMode:e,children:(0,t.jsx)(J,{$isDarkMode:e,onClick:lt,"aria-label":"Зробити скріншот",disabled:z||q,children:q?(0,t.jsx)(_e,{}):(0,t.jsx)(xt,{})})}),(0,t.jsx)(k,{content:W?"Зупинити запис":"Голосовий ввід",isDarkMode:e,children:(0,t.jsx)(J,{$isDarkMode:e,onClick:Et,"aria-label":W?"Зупинити запис":"Голосовий ввід",$listening:W,children:W?"◼":(0,t.jsx)(tr,{})})}),(0,t.jsx)(k,{content:"Зробити скріншот",isDarkMode:e,children:(0,t.jsx)(J,{$isDarkMode:e,onClick:lt,"aria-label":"Зробити скріншот",disabled:z||q,children:q?(0,t.jsx)(_e,{}):(0,t.jsx)(xt,{})})}),(0,t.jsx)(k,{content:"Очистити поточний чат",isDarkMode:e,children:(0,t.jsx)(J,{$isDarkMode:e,$danger:!0,onClick:Ot,"aria-label":"Очистити поточний чат",$size:"20px",children:(0,t.jsx)(ft,{})})}),(0,t.jsx)(k,{content:"Надіслати",isDarkMode:e,children:(0,t.jsx)(Yr,{disabled:!Nt,$isDarkMode:e,onClick:()=>L(),"aria-label":"Надіслати",children:z?(0,t.jsx)(_e,{}):oe>0?`${oe}с`:"➤"})})]})]}),M&&(0,t.jsxs)(ta,{onClick:rt,children:[(0,t.jsx)(ra,{onClick:rt,children:"✕"}),(0,t.jsx)(aa,{children:M.file.name}),(0,t.jsx)("div",{onClick:r=>r.stopPropagation(),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:M.file.type.startsWith("image/")?(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[(0,t.jsx)(ia,{src:M.objectURL,alt:M.file.name}),(0,t.jsx)(pa,{onClick:()=>Gt(M),children:"🖼 Зробити фоном"})]}):M.file.type.startsWith("video/")?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(na,{ref:u,src:M.objectURL,onTimeUpdate:it,onLoadedMetadata:nt,onPlay:()=>D(!0),onPause:()=>D(!1),onEnded:()=>D(!1)}),(0,t.jsxs)(ht,{children:[(0,t.jsx)(mt,{onClick:ot,children:(0,t.jsx)(vt,{style:{width:`${qe*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(bt,{onClick:at,children:we?"⏸":"▶"}),(0,t.jsxs)($t,{children:[se(Xe)," / ",se(Ye)]})]}),(0,t.jsx)(wt,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(kt,{$active:ke===r,onClick:()=>st(r),children:[r,"x"]},r))})]})]}):M.file.type.startsWith("audio/")?(0,t.jsxs)(oa,{children:[(0,t.jsx)(sa,{children:"🎵"}),(0,t.jsx)(la,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((r,a)=>(0,t.jsx)(da,{$h:r,$playing:we,$dur:(.3+a*.07).toFixed(2)},a))}),(0,t.jsx)(ca,{ref:u,src:M.objectURL,onTimeUpdate:it,onLoadedMetadata:nt,onPlay:()=>D(!0),onPause:()=>D(!1),onEnded:()=>D(!1)}),(0,t.jsxs)(ht,{children:[(0,t.jsx)(mt,{onClick:ot,children:(0,t.jsx)(vt,{style:{width:`${qe*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(bt,{onClick:at,children:we?"⏸":"▶"}),(0,t.jsxs)($t,{children:[se(Xe)," / ",se(Ye)]})]}),(0,t.jsx)(wt,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(kt,{$active:ke===r,onClick:()=>st(r),children:[r,"x"]},r))})]})]}):null})]}),pe&&(0,t.jsx)(yt,{onClick:()=>y(!1),children:(0,t.jsxs)(jt,{$isDarkMode:e,onClick:r=>r.stopPropagation(),children:[(0,t.jsxs)(Ct,{$isDarkMode:e,children:[(0,t.jsxs)("h3",{children:["Список чатів (",b.length,"/10)"]}),(0,t.jsx)(Mt,{$isDarkMode:e,onClick:()=>y(!1),children:"✕"})]}),(0,t.jsx)(ba,{children:b.map((r,a)=>{const n=r.id===S,s=r.messages?r.messages.length:0;return(0,t.jsxs)(ma,{$active:n,$isDarkMode:e,onClick:()=>Rt(r.id),children:[(0,t.jsxs)(va,{children:[(0,t.jsxs)($a,{$active:n,children:[r.title||`Чат ${a+1}`,n&&(0,t.jsx)(wa,{children:"Активний"})]}),(0,t.jsx)(ka,{children:s>0?`${s} повідомл.`:"Порожній чат"})]}),(0,t.jsx)(k,{content:"Видалити чат",isDarkMode:e,children:(0,t.jsx)(ya,{type:"button",onClick:c=>Bt(r.id,c),"aria-label":"Видалити чат",children:(0,t.jsx)(ft,{})})})]},r.id)})}),b.length<10&&(0,t.jsxs)(ja,{type:"button",onClick:tt,children:["Створити новий чат (",b.length,"/10)"]})]})}),Dt&&(0,t.jsx)(yt,{onClick:()=>be(!1),children:(0,t.jsxs)(jt,{$isDarkMode:e,onClick:r=>r.stopPropagation(),children:[(0,t.jsxs)(Ct,{$isDarkMode:e,children:[(0,t.jsx)("h3",{children:"Приблизні ліміти використання"}),(0,t.jsx)(Mt,{$isDarkMode:e,onClick:()=>be(!1),children:"✕"})]}),(0,t.jsxs)(ua,{children:[(0,t.jsxs)(St,{$isDarkMode:e,children:[(0,t.jsx)("span",{children:" Ліміт на хвилину(Гугл):"}),(0,t.jsx)("span",{children:"15 / хв"})]}),(0,t.jsxs)(St,{$isDarkMode:e,children:[(0,t.jsx)("span",{children:"Ліміт на добу(Гугл):"}),(0,t.jsx)("span",{children:"1500 / доба"})]})]}),(0,t.jsxs)(ha,{$isDarkMode:e,children:[(0,t.jsx)("strong",{children:"Примітка:"})," Це безкоштовні ліміти Google AI Studio. Їх визначає ваш індивідуальний ключ, а не «Стихія» (зараз використовується модель ",(0,t.jsx)("strong",{children:ge}),") Якщо ви підключите платний ключ, ліміти будуть більшими, проте тут вони все одно відображатимуться у базовому вигляді, оскільки ми не маємо доступу до параметрів вашого акаунта. Перезарядка 15с після кожного запиту та ліміт 300символів на запит зроблені з метою економії вашої квоти."]})]})})]})};export{k as Tooltip,Fa as default,Ra as getResponseLengthInstruction,Ba as getResponseStyleInstruction,zt as parseSuggestedQuestions};
