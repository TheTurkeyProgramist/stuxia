import{o as Z}from"./rolldown-runtime-BNNRdYrd.js";import{A as ir,Bn as y,Ln as ar,N as Se,O as nr,Rn as J,Vn as a,_n as or,gn as sr,jt as dr,k as c,nr as lr,rr as cr}from"./vendor-react-DiGU5HTv.js";import{t as pr}from"./index-B4ZN3846.js";var o=Z(lr()),h=Z(ar()),xr=Z(or()),t=cr(),D=J`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,gr=J`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`,fr=J`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,ur=a.div`
  display: flex;
  flex-direction: column;
  height: 570px;
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
  ${e=>e.$isStickyBgMode?y`
          background: ${e.$isDarkMode?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
          padding: 10px;
        `:y`
          background: transparent;
        `}
`,br=a.div`
  font-size: 18px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 800;
  letter-spacing: 0.6px;
  color: ${e=>e.$isDarkMode?"#ffffff":"#111111"};
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 22px;
  transition: all 0.3s ease;
  z-index: 100;
  ${e=>e.$isStickyBgMode?y`
          background: ${e.$isDarkMode?"rgba(15, 15, 25, 0.75)":"rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${e.$isDarkMode?"rgba(255, 165, 0, 0.25)":"rgba(255, 140, 0, 0.2)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        `:y`
          background: ${e.$isDarkMode?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
          border: 1px solid
            ${e.$isDarkMode?"rgba(255,165,0,0.2)":"rgba(255,140,0,0.15)"};
        `}
`,hr=a.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  color: #fff;
  text-transform: uppercase;
`,mr=a.div`
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
`,$r=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${e=>e.$isDarkMode?"white":"black"};
  ${e=>e.$isStickyBgMode?y`
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
`,vr=a.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`;a.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  border-top: 1px dashed rgba(255, 160, 0, 0.25);
  padding-top: 8px;
  flex-wrap: wrap;
`;a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
`;a.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ff9500;
  text-transform: uppercase;
`;a.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;a.button`
  border: 1px solid ${e=>e.$active?"#ff9500":"rgba(255,165,0,0.35)"};
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  cursor: pointer;
  background: ${e=>e.$active?"linear-gradient(135deg, #ff9500, #ff6b00)":"transparent"};
  color: ${e=>e.$active?"#fff":e.$isDarkMode?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.75)"};
  font-weight: ${e=>e.$active?"700":"500"};
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$active?"0 2px 8px rgba(255,149,0,0.35)":"none"};
  &:hover {
    transform: translateY(-1px);
    border-color: #ff9500;
  }
`;var kr=a.div`
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
`,X=a.div`
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
  animation: ${D} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`,yr=a.button`
  position: absolute;
  top: 6px;
  right: -34px;
  background: rgba(255, 149, 0, 0.12);
  border: 1px solid rgba(255, 149, 0, 0.3);
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  padding: 3px 6px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${X}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 149, 0, 0.22);
  }
`,wr=a.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${D} 0.2s ease;
`,jr=a.button`
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
`,Mr=a.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${e=>e.$isDarkMode?"rgba(28,28,42,0.88)":"rgba(245,245,252,0.94)"};
  border: 1px solid
    ${e=>e.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  border-radius: 4px 14px 14px 14px;
  animation: ${D} 0.2s ease;
`,Q=a.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${gr} 1.2s ease infinite;
  animation-delay: ${e=>e.$delay};
`,Sr=a.div`
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
`,Cr=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px 4px;
  flex-wrap: wrap;
  border-bottom: 1px dashed ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
`,Ce=a.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ze=a.span`
  font-weight: 700;
  font-size: 10px;
  color: #ff9500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 2px;
`,Re=a.select`
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
`,zr=a.textarea`
  width: 100%;
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
  line-height: 1.5;
  &::placeholder {
    color: ${e=>e.$isDarkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.35)"};
    font-size: 13px;
  }
`,Rr=a.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${e=>e.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
`,E=a.button`
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
  ${e=>e.$danger&&y`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${e=>e.$listening&&y`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`,Dr=a.button`
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
`,Br=a.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`,Lr=a.div`
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
`,Tr=a.button`
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
`,Ir=a.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fr} 2s linear infinite;
`,_r=a.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`,Ar=a.div`
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
  animation: ${D} 0.2s ease;
`,Pr=a.button`
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
`,Er=a.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ur=a.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Fr=a.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`,Gr=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`,Kr=a.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`,Hr=a.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`,Or=a.div`
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
`,De=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`,Be=a.button`
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
`,Le=a.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`,Te=a.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`,Ie=a.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`,_e=a.div`
  display: flex;
  gap: 6px;
`,Ae=a.button`
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
`,Vr=a.audio`
  display: none;
`,Wr=a.button`
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
`,Yr=a.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px 2px;
  flex-shrink: 0;
`,Nr=a.div`
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
`,qr=a.button`
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
`,Qr=a.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${D} 0.2s ease;
`,Xr=a.div`
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
`,Zr=a.div`
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
`,Jr=a.button`
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
`,et=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Pe=a.div`
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
`,rt=a.div`
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
`,tt=e=>e==="detailed"?{label:"Більше",instruction:"Докладно."}:e==="normal"?{label:"Нормально",instruction:"Нормально."}:{label:"Менше",instruction:"Коротко."},it=e=>e==="scientific"?{label:"Науково",instruction:"Використовуй науковий стиль, чітко, з термінами і логікою."}:e==="friendly"?{label:"Дружньо",instruction:"Використовуй дружній, теплий і простий стиль."}:{label:"Стандартно",instruction:"Використовуй нейтральний стиль."},at=`Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
КОНЦЕПЦІЯ ПЛАТФОРМИ:
«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:
• 🌤 Погода — поточний прогноз, 24-годинний (на 7 днів), 16-денний. Кольорові попередження (🔴 зараз, 🟠 найближчі 3 дні) при екстремальних умовах (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7). Можна переглядати кілька міст одночасно.
• 🎵 Музика — плейлисти без реклами та лімітів.
• 📰 Новини — RSS-стрічки з автоматичним фільтром: відсіює насильство, політику, 18+, кримінал, релігію (крім святкових днів), казино, корупцію, секти. Можна додавати власні RSS-джерела.
• 🎨 Фан-арти — галерея різних жанрів(більшість не належить автору). Користувачі можуть завантажувати, друкувати 2д і 3д принтером роботи.
• 🗺 Карта клімату — інтерактивна кліматична карта.
• 🤖 Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.

АВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com
Вікові обмеження: 13+. Деякий контент — 14+.
Конфіденційність: платформа не збирає персональні дані.
Авторські права: пісні використовуються лише в ознайомчих цілях.

ТВОЇ ПРАВИЛА:
1. Ти знаєш усі розділи Стихії і можеш допомогти користувачу розібратись у будь-якому з них.
2. Якщо питання стосується платформи — відповідай конкретно і по суті, посилаючись на розділи та функції.
3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.
4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.
5. Відповідай українською мовою, якщо запит не на іншій мові.
6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.`,dt=({isDarkMode:e,isStickyBgMode:$})=>{const[U,F]=(0,o.useState)(""),[ee,w]=(0,o.useState)([]),[B,G]=(0,o.useState)(""),[re,Ee]=(0,o.useState)("gemini-3.5-flash-lite"),[te,Ue]=(0,o.useState)("normal"),[ie,Fe]=(0,o.useState)("friendly"),[Ge,K]=(0,o.useState)(!1),[v,L]=(0,o.useState)([]),[j,H]=(0,o.useState)([]),[M,ae]=(0,o.useState)(!1);(0,o.useEffect)(()=>{const r=i=>{i.detail&&H(n=>n.some(s=>s.id===i.detail.id)?(c.error("Цю картку вже прикріплено!"),n):n.length>=4?(c.error("Максимум 4 прикріплення."),n):(c.success(`Прикріплено: ${i.detail.title}`),[...n,i.detail]))};return window.addEventListener("attachCardToAiHelp",r),()=>window.removeEventListener("attachCardToAiHelp",r)},[]);const[ne,p]=(0,o.useState)(""),[S,T]=(0,o.useState)(""),oe=(0,o.useRef)(""),[Ke,C]=(0,o.useState)(0),[se,de]=(0,o.useState)(null),[I,O]=(0,o.useState)(!1),z=(0,o.useRef)(null),[V,le]=(0,o.useState)(!1),[x,ce]=(0,o.useState)(null),[W,m]=(0,o.useState)(!1),[pe,xe]=(0,o.useState)(0),[ge,fe]=(0,o.useState)(0),[ue,be]=(0,o.useState)(0),[Y,he]=(0,o.useState)(1),g=(0,o.useRef)([]),k=(0,o.useRef)(null),He=(0,o.useRef)(null),N=(0,o.useRef)(null),d=(0,o.useRef)(null),_=r=>!r||isNaN(r)?"0:00":`${Math.floor(r/60)}:${Math.floor(r%60).toString().padStart(2,"0")}`,Oe=r=>{ce(r),m(!1),xe(0),be(0),fe(0),he(1)},me=()=>{d.current&&d.current.pause(),ce(null),m(!1)},$e=()=>{d.current&&(d.current.paused?d.current.play():d.current.pause())},ve=()=>{if(!d.current)return;const{currentTime:r,duration:i}=d.current;be(r),xe(i?r/i:0)},ke=()=>{d.current&&(fe(d.current.duration),d.current.playbackRate=Y)},ye=r=>{const i=r.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(r.clientX-i.left)/i.width));d.current&&d.current.duration&&(d.current.currentTime=n*d.current.duration)},we=r=>{he(r),d.current&&(d.current.playbackRate=r)},Ve=r=>{F(r.target.value),k.current&&(k.current.style.height="auto",k.current.style.height=`${k.current.scrollHeight}px`)};(0,o.useEffect)(()=>{const r=N.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[ee]),(0,o.useEffect)(()=>{if(!S)return;const r=N.current;r&&r.scrollHeight-r.scrollTop-r.clientHeight<150&&(r.scrollTop=r.scrollHeight)},[S]);const We=async()=>{if(!(V||M)){le(!0),p("Роблю скріншот...");try{(await(0,xr.default)(document.body,{useCORS:!0,allowTaint:!0,scale:.8,logging:!1})).toBlob(r=>{if(!r)return;const i=new File([r],"screenshot.png",{type:"image/png"}),n=URL.createObjectURL(i);g.current.push(n),L(s=>[...s,{file:i,objectURL:n}]),C(s=>s+r.size),p("Скріншот додано — запитайте Gemini!"),setTimeout(()=>p(""),2e3)},"image/png")}catch{p("Помилка скріншоту"),setTimeout(()=>p(""),2e3)}finally{le(!1)}}},Ye=()=>{const r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r){c.error("Ваш браузер не підтримує розпізнавання голосу.");return}if(I&&z.current){z.current.stop();return}const i=new r;z.current=i,i.lang="uk-UA",i.interimResults=!1,i.onstart=()=>{O(!0),p("Слухаю вас...")},i.onresult=n=>{const s=n.results[0][0].transcript;F(l=>(l?l+" ":"")+s)},i.onerror=()=>{O(!1),p(""),z.current=null},i.onend=()=>{O(!1),p(""),z.current=null},i.start()};(0,o.useEffect)(()=>{(async()=>{const n=await h.default.getItem("gemini_api_key"),s=await h.default.getItem("gemini_model"),l=await h.default.getItem("ai_help_history");n&&G(n),s&&Ee(s),l&&w(l)})();const i=n=>G(n.detail);return window.addEventListener("geminiKeyChanged",i),()=>window.removeEventListener("geminiKeyChanged",i)},[]),(0,o.useEffect)(()=>()=>{g.current.forEach(r=>URL.revokeObjectURL(r)),g.current=[]},[]);const Ne=async r=>({inlineData:{data:await new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result.split(",")[1]),n.readAsDataURL(r)}),mimeType:r.type}}),je=()=>{g.current.forEach(r=>URL.revokeObjectURL(r)),g.current=[],L([]),H([]),C(0)},qe=async r=>{G(r),await h.default.setItem("gemini_api_key",r),window.dispatchEvent(new CustomEvent("geminiKeyChanged",{detail:r}))},Me=r=>{const i=Array.from(r),n=15,s=104857600;if(v.length+i.length>n){c.error(`Максимум ${n} файлів.`);return}const l=v.reduce((f,u)=>f+u.file.size,0),R=i.reduce((f,u)=>f+u.size,0);if(l+R>s){c.error("Загальний розмір перевищує 100 МБ.");return}const A=i.map(f=>{const u=URL.createObjectURL(f);return g.current.push(u),{file:f,objectURL:u}});C(l+R),L(f=>[...f,...A])},Qe=r=>{L(i=>{const n=i[r];return n?.objectURL&&(URL.revokeObjectURL(n.objectURL),C(s=>Math.max(0,s-n.file.size)),g.current=g.current.filter(s=>s!==n.objectURL)),i.filter((s,l)=>l!==r)})},Xe=async r=>{try{const i=r.objectURL||r.file&&URL.createObjectURL(r.file);if(!i)return;const n=await h.default.getItem("custom_hero_backgrounds")||[],s=[{src:i,name:r.file?.name||"ai-image",author:"AiHelp"},...n.filter(l=>l.src!==i)];await h.default.setItem("custom_hero_backgrounds",s),await h.default.setItem("hero_background",i);try{window.dispatchEvent(new CustomEvent("heroBackgroundChanged",{detail:{src:i}}))}catch{}c.success("Картину встановлено як фон!")}catch(i){console.error(i),c.error("Не вдалося встановити фон.")}},Ze=r=>{navigator.clipboard.writeText(r).then(()=>{c.success("Скопійовано!",{duration:1500})})},Je=()=>{c(r=>(0,t.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13},children:["Очистити всю історію?",(0,t.jsx)("button",{onClick:async()=>{c.dismiss(r.id),g.current.forEach(i=>URL.revokeObjectURL(i)),g.current=[],w([]),C(0),await h.default.removeItem("ai_help_history")},style:{background:"#e53e3e",color:"#fff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12,fontWeight:600},children:"Очистити"}),(0,t.jsx)("button",{onClick:()=>c.dismiss(r.id),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.25)",color:"inherit",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:12},children:"Скасувати"})]}),{duration:6e3})},er=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),q())},q=async(r=null)=>{const i=typeof r=="string"?r:U.trim();if(!(!i&&v.length===0&&j.length===0||M)){if(!B){w(n=>[...n,{text:"⚠️ Будь ласка, введіть Gemini API-ключ у панелі налаштувань.",isBot:!0}]);return}if(i&&pr(i)){w(n=>[...n,{text:"Запит містить заборонені слова або теми.",isBot:!0}]);return}oe.current=i,de(null),ae(!0),T(""),w(n=>[...n,{text:i,isBot:!1}]),F(""),k.current&&(k.current.style.height="auto");try{p("З'єднання з Google Gemini...");const n=new sr(B).getGenerativeModel({model:re,systemInstruction:at}),{instruction:s}=tt(te),{instruction:l}=it(ie);let R="";j.length>0&&(R=`

--- Прикріплений контент для аналізу: ---
`+j.map((b,P)=>`${P+1}. [${b.type==="weather"?"🌤️ ПОГОДА":"📰 НОВИНА"}] ${b.title}
${b.details}`).join(`

`)+`
-------------------------------------------
`);const A=[{text:`${s} ${l}${R}
${i||"Проаналізуй прикріплений контент."}`}];for(const b of v)A.push(await Ne(b.file));const f=await n.generateContentStream(A);let u="";for await(const b of f.stream)u+=b.text(),T(u);const tr={text:u,isBot:!0};w(b=>{const P=[...b,tr];return h.default.setItem("ai_help_history",P.slice(-25)),P}),T(""),je()}catch(n){T(""),de(n.message),je()}finally{ae(!1),p("")}}},rr=!M&&(!!U.trim()||v.length>0||j.length>0);return(0,t.jsxs)(ur,{$isStickyBgMode:$,$isDarkMode:e,children:[(0,t.jsx)(nr,{position:"top-center",toastOptions:{style:{background:e?"#1e1e2a":"#fff",color:e?"#f0f0f0":"#111",border:"1px solid rgba(255,149,0,0.35)",fontSize:13}}}),(0,t.jsxs)(br,{$isDarkMode:e,$isStickyBgMode:$,children:["Допомога ШІ",(0,t.jsx)(hr,{children:"Gemini"})]}),(0,t.jsx)(mr,{$isDarkMode:e,$isStickyBgMode:$,children:(0,t.jsxs)($r,{$isDarkMode:e,$isStickyBgMode:$,children:[(0,t.jsx)("label",{style:{minWidth:"unset",fontWeight:700,fontSize:13},children:"Gemini API Key"}),(0,t.jsx)("input",{type:"password",placeholder:"Вставте ваш Gemini API Key...",value:B,onChange:r=>qe(r.target.value),name:"ai-help-gemini-key",autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),!B&&(0,t.jsx)(vr,{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noreferrer",children:"🔗 Отримати ключ"}),(0,t.jsx)(qr,{type:"button",$isDarkMode:e,onClick:()=>K(!0),title:"Переглянути приблизні ліміти",children:"📊 Приблизні ліміти"})]})}),(0,t.jsxs)(kr,{ref:N,children:[ee.map((r,i)=>(0,t.jsxs)(X,{$isBot:r.isBot,$isDarkMode:e,$isStickyBgMode:$,children:[r.isBot&&(0,t.jsx)(yr,{onClick:()=>Ze(r.text),children:"📋"}),(0,t.jsx)(Se,{children:r.text})]},i)),S&&(0,t.jsx)(X,{$isBot:!0,$isDarkMode:e,$isStickyBgMode:$,children:(0,t.jsx)(Se,{children:S})}),M&&!S&&(0,t.jsxs)(Mr,{$isDarkMode:e,children:[(0,t.jsx)(Q,{$delay:"0s"}),(0,t.jsx)(Q,{$delay:"0.2s"}),(0,t.jsx)(Q,{$delay:"0.4s"})]}),se&&(0,t.jsxs)(wr,{children:["⚠️ ",se,(0,t.jsx)(jr,{onClick:()=>q(oe.current),children:"Повторити"})]}),(0,t.jsx)("div",{ref:He})]}),ne&&(0,t.jsx)(Ir,{children:ne}),v.length>0&&(0,t.jsxs)(Br,{children:[(0,t.jsxs)(_r,{children:["Розмір: ",(Ke/1048576).toFixed(2)," MB / 100 MB"]}),v.map((r,i)=>(0,t.jsxs)(Lr,{$isDarkMode:e,children:[(0,t.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-in"},onClick:()=>Oe(r),children:r.file.type.startsWith("video/")?(0,t.jsx)("video",{src:r.objectURL}):r.file.type.startsWith("audio/")?(0,t.jsx)("span",{style:{fontSize:"26px"},children:"🎵"}):(0,t.jsx)("img",{src:r.objectURL,alt:"preview"})}),(0,t.jsx)(Tr,{onClick:()=>Qe(i),children:"✕"})]},i))]}),j.length>0&&(0,t.jsx)(Yr,{children:j.map((r,i)=>(0,t.jsxs)(Nr,{$isDarkMode:e,children:[(0,t.jsxs)("span",{children:[r.type==="weather"?"🌤️":"📰"," ",r.title]}),(0,t.jsx)("button",{type:"button",onClick:()=>H(n=>n.filter((s,l)=>l!==i)),title:"Видалити картку",children:"✕"})]},i))}),(0,t.jsxs)(Sr,{$isDarkMode:e,$isStickyBgMode:$,onDragOver:r=>r.preventDefault(),onDrop:r=>{r.preventDefault(),Me(r.dataTransfer.files)},children:[(0,t.jsxs)(Cr,{$isDarkMode:e,children:[(0,t.jsxs)(Ce,{children:[(0,t.jsx)(ze,{children:"Обсяг:"}),(0,t.jsxs)(Re,{$isDarkMode:e,value:te,onChange:r=>Ue(r.target.value),children:[(0,t.jsx)("option",{value:"concise",children:"Менше"}),(0,t.jsx)("option",{value:"normal",children:"Нормально"}),(0,t.jsx)("option",{value:"detailed",children:"Більше"})]})]}),(0,t.jsxs)(Ce,{children:[(0,t.jsx)(ze,{children:"Стиль:"}),(0,t.jsxs)(Re,{$isDarkMode:e,value:ie,onChange:r=>Fe(r.target.value),children:[(0,t.jsx)("option",{value:"friendly",children:"Дружньо"}),(0,t.jsx)("option",{value:"standard",children:"Стандартно"}),(0,t.jsx)("option",{value:"scientific",children:"Науково"})]})]})]}),(0,t.jsx)(zr,{ref:k,placeholder:"Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)",value:U,onChange:Ve,onKeyDown:er,rows:1,$isDarkMode:e}),(0,t.jsxs)(Rr,{$isDarkMode:e,children:[(0,t.jsxs)("label",{style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[(0,t.jsx)(E,{as:"span",$isDarkMode:e,$size:"20px",title:"Додати фото, відео, аудіо",children:(0,t.jsx)(dr,{})}),(0,t.jsx)("input",{type:"file",accept:"image/*, video/*, audio/*",multiple:!0,hidden:!0,onChange:r=>Me(r.target.files)})]}),(0,t.jsx)(E,{$isDarkMode:e,onClick:We,title:"Зробити скріншот",disabled:M||V,children:V?"⏳":"📸"}),(0,t.jsx)(E,{$isDarkMode:e,onClick:Ye,title:I?"Зупинити запис":"Голосовий ввід",$listening:I,children:I?"🛑":"🎙️"}),(0,t.jsx)(E,{$isDarkMode:e,$danger:!0,onClick:Je,title:"Видалити всі повідомлення",$size:"20px",children:(0,t.jsx)(ir,{})}),(0,t.jsx)(Dr,{disabled:!rr,$isDarkMode:e,onClick:q,title:"Надіслати",children:M?"⏳":"Надіслати ➤"})]})]}),x&&(0,t.jsxs)(Ar,{onClick:me,children:[(0,t.jsx)(Pr,{onClick:me,children:"✕"}),(0,t.jsx)(Er,{children:x.file.name}),(0,t.jsx)("div",{onClick:r=>r.stopPropagation(),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:x.file.type.startsWith("image/")?(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[(0,t.jsx)(Ur,{src:x.objectURL,alt:x.file.name}),(0,t.jsx)(Wr,{onClick:()=>Xe(x),children:"🖼 Зробити фоном"})]}):x.file.type.startsWith("video/")?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Fr,{ref:d,src:x.objectURL,onTimeUpdate:ve,onLoadedMetadata:ke,onPlay:()=>m(!0),onPause:()=>m(!1),onEnded:()=>m(!1)}),(0,t.jsxs)(De,{children:[(0,t.jsx)(Le,{onClick:ye,children:(0,t.jsx)(Te,{style:{width:`${pe*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(Be,{onClick:$e,children:W?"⏸":"▶"}),(0,t.jsxs)(Ie,{children:[_(ue)," / ",_(ge)]})]}),(0,t.jsx)(_e,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(Ae,{$active:Y===r,onClick:()=>we(r),children:[r,"x"]},r))})]})]}):x.file.type.startsWith("audio/")?(0,t.jsxs)(Gr,{children:[(0,t.jsx)(Kr,{children:"🎵"}),(0,t.jsx)(Hr,{children:[30,55,80,45,65,90,50,75,40,60,85,35,70,55,80].map((r,i)=>(0,t.jsx)(Or,{$h:r,$playing:W,$dur:(.3+i*.07).toFixed(2)},i))}),(0,t.jsx)(Vr,{ref:d,src:x.objectURL,onTimeUpdate:ve,onLoadedMetadata:ke,onPlay:()=>m(!0),onPause:()=>m(!1),onEnded:()=>m(!1)}),(0,t.jsxs)(De,{children:[(0,t.jsx)(Le,{onClick:ye,children:(0,t.jsx)(Te,{style:{width:`${pe*100}%`}})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,t.jsx)(Be,{onClick:$e,children:W?"⏸":"▶"}),(0,t.jsxs)(Ie,{children:[_(ue)," / ",_(ge)]})]}),(0,t.jsx)(_e,{children:[.5,.75,1,1.25,1.5,2].map(r=>(0,t.jsxs)(Ae,{$active:Y===r,onClick:()=>we(r),children:[r,"x"]},r))})]})]}):null})]}),Ge&&(0,t.jsx)(Qr,{onClick:()=>K(!1),children:(0,t.jsxs)(Xr,{$isDarkMode:e,onClick:r=>r.stopPropagation(),children:[(0,t.jsxs)(Zr,{$isDarkMode:e,children:[(0,t.jsx)("h3",{children:"📊 Приблизні ліміти використання"}),(0,t.jsx)(Jr,{$isDarkMode:e,onClick:()=>K(!1),children:"✕"})]}),(0,t.jsxs)(et,{children:[(0,t.jsxs)(Pe,{$isDarkMode:e,children:[(0,t.jsx)("span",{children:" Ліміт на хвилину:"}),(0,t.jsx)("span",{children:"30 / хв"})]}),(0,t.jsxs)(Pe,{$isDarkMode:e,children:[(0,t.jsx)("span",{children:"Ліміт на добу:"}),(0,t.jsx)("span",{children:"1500 / доба"})]})]}),(0,t.jsxs)(rt,{$isDarkMode:e,children:[(0,t.jsx)("strong",{children:"Примітка:"})," Це безкоштовні ліміти які дає Google AI Studio. Ліміти встановлюємо не ми, бо ключ індивідуальний. «Стихія» зараз використовує модель ",(0,t.jsx)("strong",{children:re}),". Ми показуємо безкоштовні ліміти тому врахуйте, якщо оформите платний ключ то він даватиме більші ліміти, але ми не знаємо який у вас ключ, тому ліміти все одно будуть показуватись у безкоштовному вигляді!"]})]})})]})};export{dt as default,tt as getResponseLengthInstruction,it as getResponseStyleInstruction};

//# sourceMappingURL=Aihelp-BLw113Lp.js.map