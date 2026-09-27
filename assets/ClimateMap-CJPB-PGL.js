import{o as ie}from"./rolldown-runtime-BNNRdYrd.js";import{D as Ze,Gr as ke,Hr as er,It as rr,Kr as n,M as tr,Mr as ar,N as x,O as or,Ur as Ce,Zt as ir,_n as nr,ci as sr,hr as lr,oi as dr,si as cr}from"./vendor-react-BrnrJ3qF.js";var o=ie(cr()),pr=ie(dr()),gr="/assets/pixelturkey-BmTE6gJZ.webp",ur="/assets/twoturkey-DwTdfiOy.webp",xr="/assets/climate-3SqiuMmu.webp",d=ie(er());var t=sr();Ce`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;var br=n.div`
  font-size: 15px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${e=>e.$isDarkMode?"#ffffff":"#111111"};
  display: inline-flex;
    margin-bottom: -41px;
    width: 150px;
  padding:6px 7px;
  transition: all 0.3s ease;
  border-right: 1px solid rgb(255, 179, 108);
    border-left: 1px solid rgb(255, 179, 108);
  margin-right: 4px;
  z-index: 300;
  ${e=>e.$isStickyBgMode?ke`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `:ke`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
        `}
`,fr=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,hr=n.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 6.6;
  min-height: 560px;
  margin: 0 auto;
  border-radius: ${e=>e.$isFullscreen?"0":"8px"};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${e=>e.$isFullscreen?"none":"1px solid rgba(255, 255, 255, 0.15)"};
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
    background-image: url(${xr});
    background-size: cover;
    background-position: center;
    opacity: 0.89;
  }
`,mr=n.div`
  display: none;
`,I=n.kbd`
  display: ${e=>e.$visible?"inline-flex":"none"};
  align-items: center;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  padding: 2px 7px;
  border: 1px solid rgba(255, 184, 108, 0.3);
  border-bottom-width: 2px;
  border-radius: 5px;
  background: rgba(255, 140, 0, 0.08);
  color: rgba(255, 200, 130, 0.85);
  font-size: 9.5px;
  font-family: ui-monospace, monospace;
  letter-spacing: 0.03em;
  white-space: nowrap;
  pointer-events: none;
  flex-shrink: 0;
`,vr=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  align-self: stretch;
  padding: 10px 14px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 179, 108, 0.55)":"rgba(200, 100, 0, 0.5)"};
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"linear-gradient(135deg, rgba(20, 14, 6, 0.92), rgba(30, 20, 8, 0.88))":"linear-gradient(135deg, rgba(255, 248, 235, 0.97), rgba(255, 235, 200, 0.97))"};
  color: ${e=>e.$isDarkMode?"#ffb36c":"#a05000"};
  cursor: pointer;
  z-index: 100;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 20px rgba(255, 140, 0, 0.12), 0 1px 0 rgba(255,255,255,0.04) inset;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${e=>e.$isDarkMode?"rgba(255, 179, 108, 0.9)":"rgba(200, 100, 0, 0.8)"};
    box-shadow: 0 4px 24px rgba(255, 140, 0, 0.25);
  }
`,wr=n.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: flex-end;
  justify-content: center;
  background: ${e=>e.$isDarkMode?"rgba(2, 5, 12, 0.55)":"rgba(0, 0, 0, 0.3)"};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`,yr=n.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 8px 10px 16px;
  padding-top: 64px;
  background: ${e=>e.$isDarkMode?"linear-gradient(170deg, rgba(10,16,30,0.97) 0%, rgba(15,22,40,0.97) 60%, rgba(18,14,8,0.97) 100%)":"linear-gradient(170deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 60%, rgba(255,243,220,0.99) 100%)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.18)":"rgba(200,100,0,0.2)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  box-shadow: ${e=>e.$isDarkMode?"0 -8px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset":"0 -8px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.8) inset"};
  ${`
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 179, 108, 0.25) transparent;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.25);
    border-radius: 4px;
  }
`}
`,$r=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 16px 10px 18px;
  background: ${e=>e.$isDarkMode?"linear-gradient(90deg, rgba(8,14,28,0.98) 0%, rgba(14,18,34,0.98) 50%, rgba(20,12,4,0.98) 100%)":"linear-gradient(90deg, rgba(255,252,245,0.99) 0%, rgba(255,248,235,0.99) 100%)"};
  border-bottom: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.2)":"rgba(200,100,0,0.15)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.5);
  z-index: 10;

  h2 {
    margin: 0;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.01em;
    background: linear-gradient(90deg, #ffb36c, #ffd49e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin: 0;
    margin-top: 1px;
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.42)":"rgba(100,50,0,0.55)"};
    font-size: 11px;
    letter-spacing: 0.02em;
  }
`,S=n.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`;n.div`
  height: 1px;
  margin: 8px 0 2px;
  background: linear-gradient(90deg, rgba(255,179,108,0.12), rgba(255,255,255,0.05), transparent);
`;var K=n.div`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.$isDarkMode?"rgba(255,179,108,0.55)":"rgba(160,70,0,0.55)"};
  padding: 0 2px;
  margin-top: 10px;
  margin-bottom: 2px;
`,F=n.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 44px 10px 12px;
  border: 1px solid ${e=>e.$active?e.$isDarkMode?"rgba(255,179,108,0.6)":"rgba(200,100,0,0.5)":e.$danger?e.$isDarkMode?"rgba(255,80,80,0.4)":"rgba(200,40,40,0.35)":e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-radius: 10px;
  background: ${e=>e.$active?e.$isDarkMode?"rgba(255,179,108,0.1)":"rgba(255,179,108,0.15)":e.$danger?e.$isDarkMode?"rgba(255,80,80,0.07)":"rgba(255,80,80,0.06)":e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  cursor: pointer;
  gap: 12px;
  text-align: left;
  transition: all 0.18s ease;
  box-shadow: ${e=>e.$active?e.$isDarkMode?"0 0 0 1px rgba(255,179,108,0.15) inset":"0 0 0 1px rgba(200,100,0,0.12) inset":"0 1px 0 rgba(255,255,255,0.03) inset"};

  svg {
    font-size: 20px;
    flex-shrink: 0;
    color: ${e=>e.$active?e.$isDarkMode?"#ffb36c":"#c06000":e.$danger?e.$isDarkMode?"rgba(255,100,100,0.8)":"rgba(180,40,40,0.8)":e.$isDarkMode?"rgba(255,179,108,0.75)":"rgba(160,80,0,0.65)"};
    transition: color 0.18s ease;
  }

  &:hover {
    border-color: ${e=>e.$danger?e.$isDarkMode?"rgba(255,80,80,0.6)":"rgba(200,40,40,0.5)":e.$isDarkMode?"rgba(255,179,108,0.35)":"rgba(200,100,0,0.35)"};
    background: ${e=>e.$danger?e.$isDarkMode?"rgba(255,80,80,0.12)":"rgba(255,80,80,0.08)":e.$isDarkMode?"rgba(255,179,108,0.07)":"rgba(255,179,108,0.1)"};
    box-shadow: ${e=>e.$danger?"0 4px 16px rgba(255,80,80,0.1)":"0 0 0 1px rgba(255,179,108,0.12) inset, 0 4px 16px rgba(255,140,0,0.08)"};
    transform: translateY(-1px);
    svg { color: ${e=>e.$danger?e.$isDarkMode?"#ff7070":"#cc3030":e.$isDarkMode?"#ffb36c":"#c06000"}; }
  }
  &:active { transform: translateY(0); }

  strong {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: ${e=>e.$active?e.$isDarkMode?"#ffd4a0":"#7a3500":e.$danger?e.$isDarkMode?"#ffaaaa":"#aa2020":e.$isDarkMode?"rgba(255,255,255,0.92)":"rgba(30,10,0,0.88)"};
    display: block;
  }

  span {
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.38)":"rgba(100,50,0,0.5)"};
    font-size: 10.5px;
    line-height: 1.4;
    display: block;
    margin-top: 1px;
  }
`,je=n.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: ${e=>e.$on?"rgba(80, 200, 100, 0.15)":"rgba(180, 60, 60, 0.12)"};
  color: ${e=>e.$on?"#5dca70":"#e07070"};
  border: 1px solid ${e=>e.$on?"rgba(80,200,100,0.3)":"rgba(180,60,60,0.25)"};
  margin-top: 2px;
`,kr=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.05)"};
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.55)"};
  cursor: pointer;
  transition: all 0.18s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 60, 60, 0.18);
    border-color: rgba(255, 80, 80, 0.35);
    color: #ff8080;
  }
`,oe=n.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${e=>e.$isReady?"auto":"none"};
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$isLoading?"0":"1"};
`,Me=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  gap: 17px;
  flex-direction: column;
  width: 310px;
  text-align: center;
  z-index: 1;
  pointer-events: none;
    p {
    margin: 0;
    margin-top: 1px;
   font-size: 11px;
    letter-spacing: 0.02em;
    color: black;
    background-color: #ffffffe1;
     font-weight: 700;
     border-radius: 7px;
     padding: 3px;
  }
`,h=n.button`
  background: ${e=>e.$active?"linear-gradient(135deg, #00c6ff, #0072ff)":"rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  border: 1px solid
    ${e=>e.$active?"rgba(0, 198, 255, 0.6)":"rgba(255, 255, 255, 0.15)"};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${e=>e.$active?"0 4px 12px rgba(0, 114, 255, 0.3)":"none"};

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
`,jr=n.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,Mr=n.input`
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
`,Sr=n.div`
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
`,Dr=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`,Cr=n.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,Pr=n.div`
  display: flex;
  gap: 6px;
`,_r=n.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`,zr=n.div`
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
`,Er=Ce`
  0% { opacity: 0; transform: translateY(-4px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(4px); }
`,Se=n.span`
  display: inline-block;
  animation: ${Er} 3s ease-in-out infinite;
  color: #ffb36c;
  font-weight: 700;
`,Ir=n.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`,Fr=n.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  padding: 12px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,179,108,0.04)":"rgba(255,179,108,0.06)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.14)":"rgba(200,100,0,0.18)"};
`,De=n.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
  background: ${e=>e.$isDarkMode?"rgba(0,0,0,0.35)":"rgba(255,255,255,0.85)"};
  color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  font-size: 13px;
  outline: none;
  transition: border-color 0.18s;
  &::placeholder { color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(100,50,0,0.4)"}; }
  &:focus {
    border-color: rgba(255, 179, 108, 0.6);
    background: ${e=>e.$isDarkMode?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.98)"};
  }
`,Lr=n.button`
  padding: 9px 16px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #ffb36c, #e07000);
  color: #0d0800;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.18s, transform 0.18s;
  &:hover { opacity: 0.88; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`,Rr=n.select`
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
`,Ar=n.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)"};
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
`,Wr=n.select`
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  background: ${e=>e.$isDarkMode?"rgba(10,18,36,0.8)":"rgba(255,248,235,0.95)"};
  color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.85)":"#3a1800"};
  font-size: 13px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  appearance: auto;

  option {
    background: ${e=>e.$isDarkMode?"#0d1525":"#fff8eb"};
    color: ${e=>e.$isDarkMode?"white":"#1a0800"};
  }
`,Yr=n.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4px;
  padding: 10px 12px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"};
  border-radius: 10px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)"};
  gap: 12px;
  box-shadow: 0 1px 0 rgba(255,255,255,0.03) inset;

  svg {
    font-size: 20px;
    flex-shrink: 0;
    color: ${e=>e.$isDarkMode?"rgba(255,179,108,0.75)":"rgba(160,80,0,0.65)"};
  }

  strong {
    font-size: 13px;
    font-weight: 600;
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.92)":"rgba(30,10,0,0.88)"};
    display: block;
  }
  span {
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.38)":"rgba(100,50,0,0.5)"};
    font-size: 10.5px;
    line-height: 1.4;
    display: block;
    margin-top: 1px;
  }
`,Br=n.select`
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255,179,108,0.25)":"rgba(200,100,0,0.25)"};
  background: ${e=>e.$isDarkMode?"rgba(255,140,0,0.08)":"rgba(255,200,100,0.12)"};
  color: ${e=>e.$isDarkMode?"rgba(255,200,130,0.9)":"#7a4000"};
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: border-color 0.18s;
  flex-shrink: 0;
  &:hover { border-color: rgba(255, 179, 108, 0.55); }
  option { background: ${e=>e.$isDarkMode?"#0d1525":"#fff8eb"}; color: ${e=>e.$isDarkMode?"white":"#1a0800"}; }
`,Kr=({isDarkMode:e,isStickyBgMode:Pe})=>{const[w,ne]=(0,o.useState)(48.379),[y,se]=(0,o.useState)(31.165),[$,_e]=(0,o.useState)(5),[le,X]=(0,o.useState)(!1),[de,U]=(0,o.useState)(!1),[L,ce]=(0,o.useState)(""),[H,pe]=(0,o.useState)(!1),[ge,ze]=(0,o.useState)(""),[D,R]=(0,o.useState)(!0),[g,Ee]=(0,o.useState)("wind"),[c,k]=(0,o.useState)(!1),[j,Ie]=(0,o.useState)(()=>typeof navigator>"u"?!0:navigator.onLine),[A,Fe]=(0,o.useState)(!1),[M,b]=(0,o.useState)(!1),[m,ue]=(0,o.useState)(null),[p,C]=(0,o.useState)("ventusky"),[P,q]=(0,o.useState)(!1),xe=[gr,ur],[Le,Re]=(0,o.useState)(0),[N,be]=(0,o.useState)("auto"),[Ae,We]=(0,o.useState)(!1),_=N==="always"||N==="auto"&&!Ae;(0,o.useEffect)(()=>{const r=window.matchMedia("(pointer: coarse)"),a=()=>We(r.matches);return a(),r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[]),(0,o.useEffect)(()=>{const r=setInterval(()=>{Re(a=>(a+1)%xe.length)},1500);return()=>clearInterval(r)},[]);const[W,Ye]=(0,o.useState)(()=>typeof window>"u"?{x:24,y:24}:{x:Math.max(16,window.innerWidth-360),y:Math.max(16,window.innerHeight-260)}),[Y,Be]=(0,o.useState)({width:320,height:220}),fe=(0,o.useRef)(null),he=(0,o.useRef)(null),B=(0,o.useRef)(null),O=(0,o.useRef)(null),[u,me]=(0,o.useState)([]),[ve,we]=(0,o.useState)(""),[G,ye]=(0,o.useState)(""),[Oe,V]=(0,o.useState)(()=>{if(typeof navigator>"u"||!navigator.onLine)return!0;if(navigator.connection){const r=navigator.connection;if(r.saveData||["slow-2g","2g","3g"].includes(r.effectiveType))return!0}return!1}),[Te,Ke]=(0,o.useState)(!1);(0,o.useEffect)(()=>{const r=()=>{Fe(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",r),()=>{document.removeEventListener("fullscreenchange",r)}},[]),(0,o.useEffect)(()=>{const r=()=>{const a=typeof navigator<"u"?navigator.onLine:!0;if(Ie(a),!a){V(!0);return}if(typeof navigator<"u"&&navigator.connection){const i=navigator.connection;V(!!i.saveData||["slow-2g","2g","3g"].includes(i.effectiveType))}else V(!1)};return r(),window.addEventListener("online",r),window.addEventListener("offline",r),typeof navigator<"u"&&navigator.connection&&navigator.connection.addEventListener("change",r),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",r),typeof navigator<"u"&&navigator.connection&&navigator.connection.removeEventListener("change",r)}},[]);const J=async r=>{C(r);try{await d.default.setItem("selected_climate_provider",r)}catch(a){console.error("Error saving climate provider:",a)}},Q=async()=>{k(!0),x.success("Карту увімкнено",{icon:"🗺️",duration:1800});try{await d.default.setItem("map_last_unlocked_time",Date.now())}catch(r){console.error("Error saving map unlock time:",r)}},Xe=async()=>{k(!1),x("Карту вимкнено",{icon:"🔒",duration:1800});try{await d.default.removeItem("map_last_unlocked_time")}catch(r){console.error("Error removing map unlock time:",r)}},z=(0,o.useMemo)(()=>["Налаштування Стихії","Додавання карти(фреймів)","Налаштування Стихії","Пошук місця","Налаштування Стихії","Закріпити локацію","Налаштування Стихії","Карти та безліч функцій","Налаштування Стихії","Міні-плеєр карти","Налаштування Стихії","Повноекранний режим"],[]),[E,Ue]=(0,o.useState)(0);(0,o.useEffect)(()=>{const r=setInterval(()=>{Ue(a=>(a+1)%z.length)},3e3);return()=>clearInterval(r)},[z]),(0,o.useEffect)(()=>{(async()=>{try{const a=await d.default.getItem("gemini_api_key");a&&ze(a);const i=await d.default.getItem("selected_climate_provider");i&&C(i);const l=await d.default.getItem("climate_keyboard_shortcut_mode");["none","auto","always"].includes(l)&&be(l);const s=await d.default.getItem("pinned_map_location");s&&(ne(s.lat),se(s.lon),_e(s.zoom),s.overlay&&Ee(s.overlay),s.provider&&C(s.provider),q(!0));const f=await d.default.getItem("map_last_unlocked_time");f&&Date.now()-f<6048e5&&k(!0);const v=await d.default.getItem("climate_custom_user_frames");v&&Array.isArray(v)&&me(v)}catch(a){console.error("Error loading map data:",a)}})()},[]);const $e=async r=>{me(r);try{await d.default.setItem("climate_custom_user_frames",r)}catch(a){console.error("Error saving custom frames:",a)}},He=async r=>{const a=r.target.value;be(a);try{await d.default.setItem("climate_keyboard_shortcut_mode",a)}catch(i){console.error("Error saving keyboard shortcut mode:",i)}},qe=r=>{const a=u.filter(i=>i.id!==r);$e(a),p===r&&J("ventusky")},Ne=r=>{if(r.preventDefault(),!G.trim())return;let a=G.trim();const i=a.match(/src=["']([^"']+)["']/i);if(i&&(a=i[1]),!a.startsWith("http://")&&!a.startsWith("https://")){x.error("Будь ласка, введіть коректне посилання (https://...)");return}const l=ve.trim()||"Власний віджет",s={id:"custom-"+Date.now(),title:l,url:a},f=[...u,s];$e(f),C(s.id),we(""),ye("")},Z=async r=>{r&&r.stopPropagation();try{await d.default.setItem("pinned_map_location",{lat:w,lon:y,zoom:$,overlay:g,provider:p}),await d.default.setItem("selected_climate_provider",p),q(!0),x.success("Локацію закріплено! Завантажиться при наступному вході.",{duration:3e3,icon:"📍"})}catch(a){console.error("Error pinning location:",a),x.error("Помилка при закріпленні локації.")}},Ge=async r=>{r&&r.stopPropagation();try{await d.default.removeItem("pinned_map_location"),await d.default.removeItem("selected_climate_provider"),q(!1),x("Закріплення локації знято.",{icon:"📌",duration:2e3})}catch(a){console.error("Error unpinning location:",a)}},ee=async()=>{if(window.documentPictureInPicture)try{const r=await window.documentPictureInPicture.requestWindow({width:400,height:300});r.document.body.style.margin="0",r.document.body.style.overflow="hidden",r.document.body.style.background="#1a1a1a",r.addEventListener("pagehide",()=>{ue(null),b(!1)}),ue(r),b(!0)}catch(r){console.error("PiP API failed:",r),b(!0)}else b(!0)},Ve=async r=>{if(r?.preventDefault(),!(!L.trim()||H)){if(!ge){x.error("API-ключ Gemini не знайдено. Додайте його в налаштуваннях ШІ.",{icon:"🔑"});return}pe(!0);try{const a=new lr(ge).getGenerativeModel({model:"gemini-2.5-flash",tools:[{googleSearch:{}}]}),i=`Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. 
      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.
      Запит: ${L}`;let l=(await(await a.generateContent(i)).response).text().trim();l.startsWith("```json")?l=l.replace(/```json/g,"").replace(/```/g,"").trim():l.startsWith("```")&&(l=l.replace(/```/g,"").trim());const s=JSON.parse(l);Number.isFinite(s.lat)&&Number.isFinite(s.lon)&&(ne(s.lat),se(s.lon),ce(""),X(!1),k(!0),x.success(`Локацію знайдено! ${L}`,{icon:"🗺️"}))}catch(a){console.error("AI Search error:",a),x.error("Не вдалося знайти локацію. Спробуйте змінити запит.")}finally{pe(!1)}}};(0,o.useEffect)(()=>{const r=i=>{if(B.current){const{startX:l,startY:s,originX:f,originY:v}=B.current,te=Math.max(8,Math.min(window.innerWidth-120,f+i.clientX-l)),ae=Math.max(8,Math.min(window.innerHeight-80,v+i.clientY-s));Ye({x:te,y:ae})}if(O.current){const{startX:l,startY:s,width:f,height:v}=O.current,te=Math.max(260,Math.min(window.innerWidth-24,f+i.clientX-l)),ae=Math.max(200,Math.min(window.innerHeight-24,v+i.clientY-s));Be({width:te,height:ae})}},a=()=>{B.current=null,O.current=null};return window.addEventListener("mousemove",r),window.addEventListener("mouseup",a),()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",a)}},[]);const T=(r=fe)=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():r.current?.requestFullscreen&&r.current.requestFullscreen()};(0,o.useEffect)(()=>{const r=a=>{if(!["INPUT","TEXTAREA","SELECT"].includes(a.target.tagName)&&a.shiftKey&&a.ctrlKey)switch(a.key.toLowerCase()){case"m":a.preventDefault(),k(i=>!i);break;case"f":a.preventDefault(),T();break;case"p":a.preventDefault(),M?m?m.close():b(!1):ee();break;case"w":{a.preventDefault();const i=["ventusky","windy",...u.map(l=>l.id)];C(l=>{const s=(i.indexOf(l)+1)%i.length;return i[s]});break}case"s":a.preventDefault(),X(i=>!i);break;case"l":a.preventDefault(),Z();break;case"k":a.preventDefault(),setIsFramesModalOpen(i=>!i)}};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[M,m,u]);const Je=r=>{r.target.closest("button")||(r.preventDefault(),B.current={startX:r.clientX,startY:r.clientY,originX:W.x,originY:W.y})},Qe=r=>{r.preventDefault(),r.stopPropagation(),O.current={startX:r.clientX,startY:r.clientY,width:Y.width,height:Y.height}},re=(0,o.useMemo)(()=>{if(p==="windy")return`https://embed.windy.com/embed2.html?lat=${w}&lon=${y}&zoom=${$}&level=surface&overlay=${g}&menu=&message=true&marker=`;if(p==="ventusky"){let i=g;return g==="rain"&&(i="rain-3h"),g==="temp"&&(i="temperature"),g==="clouds"&&(i="cloud-cover"),`https://www.ventusky.com/?p=${w};${y};${$}&l=${i}`}if(p==="alerts-ua")return"https://alerts.in.ua/";if(p==="excalidraw")return"https://excalidraw.com/";if(p==="saveecobot")return"https://www.saveecobot.com/maps";if(p==="radarbox")return"https://www.radarbox.com/";const r=u.find(i=>i.id===p);if(r)return r.url;let a=g;return g==="rain"&&(a="rain-3h"),g==="temp"&&(a="temperature"),g==="clouds"&&(a="cloud-cover"),`https://www.ventusky.com/?p=${w};${y};${$}&l=${a}`},[p,w,y,$,g,u]);return(0,o.useEffect)(()=>{R(j)},[p,w,y,$,g,j]),(0,t.jsxs)(fr,{children:[(0,t.jsx)(br,{$isDarkMode:e,$isStickyBgMode:Pe,children:"Кліматична мапа"}),(0,t.jsx)(tr,{position:"bottom-center",toastOptions:{duration:2500,style:{background:e?"rgba(20,24,36,0.97)":"rgba(255,252,245,0.98)",color:e?"#f0e8d8":"#2a1000",border:e?"1px solid rgba(255,179,108,0.25)":"1px solid rgba(200,100,0,0.2)",borderRadius:"10px",fontSize:"13px",fontWeight:500,boxShadow:e?"0 8px 32px rgba(0,0,0,0.5)":"0 8px 32px rgba(0,0,0,0.12)",padding:"10px 14px"},success:{iconTheme:{primary:"#5dca70",secondary:e?"#111":"#fff"}},error:{iconTheme:{primary:"#e07070",secondary:e?"#111":"#fff"}}}}),(0,t.jsx)(vr,{$isDarkMode:e,type:"button",onClick:()=>U(!0),"aria-label":z[E],children:(0,t.jsx)(Se,{children:z[E]},E)}),(0,t.jsxs)(hr,{ref:fe,$isFullscreen:A,onClick:()=>!c&&Q(),children:[(0,t.jsxs)(mr,{$isOpen:de,children:[le&&(0,t.jsxs)(jr,{onSubmit:Ve,children:[(0,t.jsx)(Mr,{value:L,onChange:r=>ce(r.target.value),placeholder:"Місто, село...",autoFocus:!0}),(0,t.jsx)(h,{type:"submit",$active:!0,disabled:H,onClick:r=>r.stopPropagation(),children:H?"Шукаю...":"Знайти"})]}),(0,t.jsx)(h,{onClick:r=>{r.stopPropagation(),X(!le)},children:"ШІ Пошук"}),(0,t.jsx)(h,{onClick:Z,children:"Закріпити"}),(0,t.jsxs)(Rr,{value:p,onChange:r=>J(r.target.value),onClick:r=>r.stopPropagation(),"aria-label":"Оберіть джерело мапи",children:[(0,t.jsx)("option",{value:"ventusky",children:"Ventusky"}),(0,t.jsx)("option",{value:"windy",children:"Windy"}),(0,t.jsx)("option",{value:"alerts-ua",children:"Карта тривог України"}),(0,t.jsx)("option",{value:"excalidraw",children:"Онлайн-дошка (Excalidraw)"}),(0,t.jsx)("option",{value:"saveecobot",children:"Якість повітря (SaveEcoBot)"}),(0,t.jsx)("option",{value:"radarbox",children:"Моніторинг польотів (RadarBox)"}),u.map(r=>(0,t.jsx)("option",{value:r.id,children:r.title},r.id))]}),(0,t.jsx)("div",{style:{height:"1px",background:"rgba(255,255,255,0.2)",margin:"4px 0"}}),(0,t.jsx)(h,{onClick:r=>{r.stopPropagation(),c?k(!1):Q()},style:{border:c?"1px solid #ff4d4d":"1px solid skyblue"},children:c?"Деактивувати":"Активувати"}),(0,t.jsx)(h,{onClick:r=>{r.stopPropagation(),T()},children:A?"Згорнути":"На весь екран"}),(0,t.jsx)(h,{onClick:r=>{r.stopPropagation(),M?m?m.close():b(!1):ee()},children:M?"Закрити міні-плеєр":"Міні-плеєр"})]}),de&&(0,t.jsx)(wr,{$isDarkMode:e,onClick:()=>U(!1),children:(0,t.jsxs)(yr,{$isDarkMode:e,onClick:r=>r.stopPropagation(),children:[(0,t.jsxs)($r,{$isDarkMode:e,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:(0,t.jsx)(Se,{children:z[E]},E)}),(0,t.jsx)("p",{children:"Керуйте картою та її джерелом"})]}),(0,t.jsx)(kr,{$isDarkMode:e,type:"button",onClick:()=>U(!1),children:"×"})]}),(0,t.jsx)(K,{$isDarkMode:e,children:"Налаштування"}),(0,t.jsxs)(Yr,{$isDarkMode:e,children:[(0,t.jsx)(rr,{}),(0,t.jsxs)(S,{children:[(0,t.jsx)("strong",{children:"Комбінації клавіш"}),(0,t.jsx)("span",{children:"Показувати підказки клавіш поруч з діями?"})]}),(0,t.jsxs)(Br,{$isDarkMode:e,value:N,onChange:He,children:[(0,t.jsx)("option",{value:"none",children:"Без"}),(0,t.jsx)("option",{value:"auto",children:"Авто"}),(0,t.jsx)("option",{value:"always",children:"Так"})]})]}),(0,t.jsx)(K,{$isDarkMode:e,children:"Карта"}),(0,t.jsxs)(F,{$isDarkMode:e,$active:c,$danger:c,type:"button",onClick:()=>c?Xe():Q(),children:[(0,t.jsx)(ar,{}),(0,t.jsxs)(S,{children:[(0,t.jsx)("strong",{children:c?"Деактивувати карту":"Активувати карту"}),(0,t.jsx)(je,{$on:c,children:c?"● Увімкнено":"○ Вимкнено"})]}),(0,t.jsx)(I,{$visible:_,children:"Ctrl + Shift + M"})]}),(0,t.jsxs)(F,{$isDarkMode:e,$active:P,type:"button",onClick:P?Ge:Z,children:[(0,t.jsx)(ir,{}),(0,t.jsxs)(S,{children:[(0,t.jsx)("strong",{children:P?"Відкріпити локацію":"Закріпити локацію"}),(0,t.jsx)(je,{$on:P,children:P?"● Закріплено":"○ Не закріплено"})]}),(0,t.jsx)(I,{$visible:_,children:"Ctrl + Shift + L"})]}),(0,t.jsxs)(F,{$isDarkMode:e,type:"button",onClick:()=>T(),children:[(0,t.jsx)(or,{}),(0,t.jsxs)(S,{children:[(0,t.jsx)("strong",{children:A?"Згорнути карту":"Відкрити на весь екран"}),(0,t.jsx)("span",{children:"Розгорнути карту на весь екран пристрою або повернути звичайний вигляд."})]}),(0,t.jsx)(I,{$visible:_,children:"Ctrl + Shift + F"})]}),(0,t.jsxs)(F,{$isDarkMode:e,type:"button",onClick:ee,children:[(0,t.jsx)(Ze,{}),(0,t.jsxs)(S,{children:[(0,t.jsx)("strong",{children:"Міні-плеєр карти"}),(0,t.jsx)("span",{children:"Винести карту в окреме плаваюче вікно для паралельної роботи."})]}),(0,t.jsx)(I,{$visible:_,children:"Ctrl + Shift + P"})]}),(0,t.jsx)(K,{$isDarkMode:e,children:"Джерело карти"}),(0,t.jsxs)(Ar,{$isDarkMode:e,onClick:r=>r.stopPropagation(),children:[(0,t.jsxs)(F,{$isDarkMode:e,style:{background:"none",border:"none",borderRadius:0,margin:0,padding:"10px 44px 10px 12px"},type:"button",children:[(0,t.jsx)(nr,{}),(0,t.jsxs)(S,{children:[(0,t.jsx)("strong",{children:"Джерело карти"}),(0,t.jsx)("span",{children:"Windy, Ventusky, Тривоги, Excalidraw, SaveEcoBot та RadarBox"})]}),(0,t.jsx)(I,{$visible:_,children:"Ctrl + Shift + W"})]}),(0,t.jsxs)(Wr,{$isDarkMode:e,value:p,onChange:r=>J(r.target.value),children:[(0,t.jsx)("option",{value:"ventusky",children:"Ventusky"}),(0,t.jsx)("option",{value:"windy",children:"Windy"}),(0,t.jsx)("option",{value:"alerts-ua",children:"Карта тривог України"}),(0,t.jsx)("option",{value:"excalidraw",children:"Онлайн-дошка (Excalidraw)"}),(0,t.jsx)("option",{value:"saveecobot",children:"Якість повітря (SaveEcoBot)"}),(0,t.jsx)("option",{value:"radarbox",children:"Моніторинг польотів (RadarBox)"}),u.map(r=>(0,t.jsx)("option",{value:r.id,children:r.title},r.id))]})]}),(0,t.jsx)(K,{$isDarkMode:e,children:"Власний фрейм / віджет"}),(0,t.jsxs)(Fr,{$isDarkMode:e,onSubmit:Ne,onClick:r=>r.stopPropagation(),children:[(0,t.jsx)(De,{$isDarkMode:e,type:"text",placeholder:"Назва (напр. Радар, Вебкамера...)",value:ve,onChange:r=>we(r.target.value)}),(0,t.jsxs)(Ir,{children:[(0,t.jsx)(De,{$isDarkMode:e,type:"text",placeholder:"URL або iframe код (https://...)",value:G,onChange:r=>ye(r.target.value),style:{width:"100%",paddingRight:"88px"},required:!0}),(0,t.jsx)(Lr,{type:"submit",style:{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",padding:"6px 14px"},children:"Додати"})]}),u.length>0&&(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,t.jsx)("span",{style:{fontSize:"10px",color:e?"rgba(255,255,255,0.35)":"rgba(100,50,0,0.45)",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Збережені:"}),u.map(r=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:e?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",padding:"6px 10px",borderRadius:"7px",border:e?"1px solid rgba(255,255,255,0.07)":"1px solid rgba(0,0,0,0.08)"},children:[(0,t.jsx)("span",{style:{fontSize:"12px",color:e?"rgba(255,255,255,0.8)":"rgba(30,10,0,0.8)"},children:r.title}),(0,t.jsx)("button",{type:"button",onClick:()=>qe(r.id),style:{background:"transparent",border:"none",color:"rgba(255,80,80,0.7)",cursor:"pointer",fontSize:"13px",padding:"2px 4px",borderRadius:"4px"},title:"Видалити",children:"🗑️"})]},r.id))]})]})]})}),M?(0,t.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#222",color:"rgba(255,255,255,0.6)",zIndex:5,padding:"20px",textAlign:"center"},children:"Закрийте міні-плеєр щоб повернути карту"}):(0,t.jsxs)(t.Fragment,{children:[(!c||D||!j)&&(0,t.jsxs)(Me,{children:[!j||Oe||Te?(0,t.jsx)("img",{src:xe[Le],alt:"Це Доміно :)",style:{width:"340px",height:"210px",imageRendering:"pixelated",marginBottom:"-50px"}}):(0,t.jsx)("video",{src:"/assets/turkey-BDVjab7f.webm",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onError:()=>Ke(!0),style:{width:"340px",height:"210px",marginBottom:"-50px",objectFit:"contain"}}),(0,t.jsx)("p",{style:{fontSize:"16px"},children:j?c?"Завантаження...":"Натисніть на карту для активації":"Перевірте інтернет-з'єднання для користування картою"}),(0,t.jsx)("p",{children:"Інтерактивні карти надано сервісами Windy, Ventusky, Карта тривог України і т.д. (містять файли cookie)"}),(0,t.jsx)("p",{children:"Кнопка «Налаштування стихії» відкриває безкоштовний доступ до перемикання мап, повноекранний режим, міні-плеєр та інші функції!"})]}),(0,t.jsx)(oe,{"aria-label":"Weather Map",src:c&&j?re:void 0,$isLoading:D,$isReady:c,onLoad:()=>R(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"})]})]}),m?(0,pr.createPortal)((0,t.jsx)(oe,{"aria-label":"Weather Map (PiP)",src:re,$isLoading:D,$isReady:!0,onLoad:()=>R(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy",style:{width:"100%",height:"100vh"}}),m.document.body):M&&(0,t.jsxs)(Sr,{ref:he,onDoubleClick:()=>b(!1),style:{left:W.x,top:W.y,width:Y.width,height:Y.height},children:[(0,t.jsxs)(Dr,{onMouseDown:Je,children:[(0,t.jsx)(Cr,{children:"Міні-карта • подвійний клік — назад"}),(0,t.jsxs)(Pr,{children:[(0,t.jsx)(h,{onClick:r=>{r.stopPropagation(),T(he)},children:A?"Згорнути":"⛶"}),(0,t.jsx)(h,{onClick:r=>{r.stopPropagation(),b(!1)},children:"✕"})]})]}),(0,t.jsxs)(_r,{children:[D&&(0,t.jsx)(Me,{children:(0,t.jsx)("p",{children:"Завантаження..."})}),(0,t.jsx)(oe,{"aria-label":"Weather Map Mini",src:re,$isLoading:D,$isReady:!0,onLoad:()=>R(!1),allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy"}),(0,t.jsx)(zr,{onMouseDown:Qe})]})]})]})};export{Kr as default};
