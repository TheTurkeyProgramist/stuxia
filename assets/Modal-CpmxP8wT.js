import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{n as o}from"./vendor-utils-BcX-d9lY.js";import{f as r}from"./vendor-firebase-CLgF0jK9.js";import{a as t}from"./vendor-i18n-DhRqfqeK.js";import{s as a}from"./vendor-motion-B-5ZsAFi.js";import{i,t as s}from"./styled-components.browser.esm-C9MjP7gd.js";import{t as n}from"./UserSearchModal-BN28sSE7.js";import{auth as d,ensureEmailPasswordAuth as l,googleProvider as p}from"./firebase-CROkTg2g.js";import{C as c,S as f,T as u,w as x}from"./main-C2VxEdv8.js";var g=e(t()),b=e(o()),m=a(),h=s`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,w=s`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,k=s`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,$=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 1000;
  animation: ${e=>e.$isClosing?k:"none"} 0.5s ease-out
    forwards;
`,y=i.div`
  background: ${e=>e.$isDarkMode?"linear-gradient(145deg, #1f1f26, #121319)":"linear-gradient(145deg, #fffdf9, #f6f3ff)"};
  color: ${e=>e.$isDarkMode?"#f0f0f0":"#111111"};
  padding: 24px 20px 18px;
  border-radius: 24px;
  width: min(92vw, 440px);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.32);
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${e=>e.$isDarkMode?"#3d3f4d":"#f1d9c5"};
  animation: ${e=>e.$isClosing?w:h} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.7);
    border-radius: 999px;
  }
`,v=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 250px;
`,j=i.button`
  position: absolute;
  top: -4px;
  right: 5px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: ${e=>e.$isDarkMode?"#f5f5f5":"#000000"};
  &:hover {
    color: #ffb36c;
  }
`,D=i.h3`
  text-align: center;
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.02em;
  color: ${e=>e.$isDarkMode?"#fff":"#1b1b1b"};
  width: 100%;
  font-size: 2rem;
  background: linear-gradient(135deg, #ffb36c, #ff7a59, #7ac7ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,M=i.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
  color: ${e=>e.$isDarkMode?"#d6d6d6":"#5d5d5d"};
  margin-top: -4px;
`,C=i.input`
  padding: 12px 14px;
  border: 1px solid ${e=>e.$isDarkMode?"#4d5365":"#ebd4c0"};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  background: ${e=>e.$isDarkMode?"#2a2d38":"rgba(255,255,255,0.7)"};
  transition: all 0.2s ease;
  &::placeholder {
    color: ${e=>e.$isDarkMode?"#a7abb8":"#7a7a7a"};
  }
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`,S=i.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8d6c 100%);
  color: ${e=>e.$isDarkMode?"#181818":"#111"};
  font-weight: 800;
  padding: 14px 16px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  width: 100%;
  box-shadow: 0 10px 22px rgba(255, 153, 93, 0.25);
  transition: transform 0.2s ease, opacity 0.2s ease;
  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`,E=i.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,L=i.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.$isDarkMode?"#a7abb8":"#777"};
`,z=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 1.4;
  color: ${e=>e.$isDarkMode?"#d7d7d7":"#4e4e4e"};
  padding: 4px 2px;

  input {
    accent-color: #ffb36c;
    width: 15px;
    height: 15px;
  }
`,G=i.button`
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: #ffb36c;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`,I=i.button`
  background: linear-gradient(135deg, #4d8af7 0%, #2d6ae8 100%);
  color: white;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 14px;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  font-size: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 22px rgba(66, 133, 244, 0.25);
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(66, 133, 244, 0.32);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`,R=i.div`
  font-size: 12px;
  line-height: 1.4;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.09);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  text-align: center;
`,U=({onClose:e,onRegister:o,isDarkMode:t=!1})=>{const[a,i]=(0,g.useState)(""),[s,h]=(0,g.useState)(""),[w,k]=(0,g.useState)(!1),[U,Y]=(0,g.useState)(!1),[_,H]=(0,g.useState)(""),[P,T]=(0,g.useState)(!1),[F,N]=(0,g.useState)(!1),A=(0,g.useRef)(null);(0,g.useEffect)(()=>()=>clearTimeout(A.current),[]);const B=o=>{o&&o.stopPropagation(),A.current||(T(!0),A.current=setTimeout(e,500))};(0,g.useEffect)(()=>{const e=e=>{"Escape"!==e.key||U||B()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[U,e]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)($,{$isClosing:P,onClick:B,children:(0,m.jsxs)(y,{$isClosing:P,onClick:e=>e.stopPropagation(),$isDarkMode:t,children:[(0,m.jsx)(j,{onClick:B,$isDarkMode:t,children:"×"}),(0,m.jsx)(D,{$isDarkMode:t,children:"Вхід"}),(0,m.jsx)(M,{$isDarkMode:t,children:"Увійди через Gmail чи Google і почни вивчати погоду з комфортом."}),(0,m.jsxs)(v,{children:[(0,m.jsxs)(E,{onSubmit:async e=>{if(e.preventDefault(),F)return;const r=a.trim().toLowerCase();if(!r||!s)return H("Введіть Gmail і пароль!");N(!0),H("");try{const e=await b.default.getItem("registered_user"),t=e?.account?.toLowerCase()===r?e:null;if(!t)return H("Невірний Gmail або пароль!");let a=!1,i=t.passwordHash?{passwordHash:t.passwordHash,passwordSalt:t.passwordSalt}:{},n=null;if(t.passwordHash&&f()?a=await u(s,t):t.password?(a=t.password===s,a&&(i=await c(s))):(n=await l(t.account,s,{createIfMissing:!1}),a=Boolean(n),a&&(i=await c(s))),!a)return H("Невірний Gmail або пароль!");let d={...x(t),...i};if(t.pendingEmail){const e=await l(t.pendingEmail,s,{createIfMissing:!1});e&&(n=e,d={...d,account:t.pendingEmail,email:t.pendingEmail},delete d.pendingEmail)}n||(n=await l(t.account,s)),n&&(d={...d,uid:n.uid,id:n.uid}),await b.default.setItem("registered_user",d),o(x(d)),B()}catch(t){console.error("Email login error:",t),H("Не вдалося увійти. Спробуйте ще раз.")}finally{N(!1)}},children:[(0,m.jsx)(C,{type:"email",name:"login-email",placeholder:"Gmail",value:a,autoComplete:"email",onChange:e=>i(e.target.value),$isDarkMode:t}),(0,m.jsx)(C,{type:"password",name:"login-password",placeholder:"Пароль",value:s,autoComplete:"current-password",onChange:e=>h(e.target.value),$isDarkMode:t}),(0,m.jsx)(S,{type:"submit",disabled:F,$isDarkMode:t,children:"🔒 Увійти"})]}),(0,m.jsx)(L,{$isDarkMode:t,children:"АБО"}),_&&(0,m.jsx)(R,{children:_}),(0,m.jsxs)(z,{$isDarkMode:t,children:[(0,m.jsx)("input",{id:"accept-terms",type:"checkbox",checked:w,onChange:e=>k(e.target.checked)}),(0,m.jsxs)("label",{htmlFor:"accept-terms",children:["Мені виповнилося 14 років, і я погоджуюсь з"," ",(0,m.jsx)(G,{type:"button",onClick:e=>{e.preventDefault(),Y(!0)},children:"Угодою"})]})]}),(0,m.jsx)(I,{type:"button",onClick:async e=>{if(e.preventDefault(),e.stopPropagation(),!F){if(!w)return H("Підтвердіть, що вам є 14 років, і прийміть угоду!");N(!0),H("");try{const t=(await r(d,p)).user,a={uid:t.uid,id:t.uid,account:t.email||"",firstName:t.displayName||t.email||"Користувач",avatar:t.photoURL||"",photoURL:t.photoURL||"",textColor:"grey",borderColor:"grey",birthDate:"2000-01-01"},i=await b.default.getItem("registered_user");let s=a;if(i){if(i.account?.toLowerCase()===a.account.toLowerCase()){const e={...i,uid:a.uid,id:a.id,photoURL:a.photoURL||i.photoURL||""};await b.default.setItem("registered_user",e),s=x(e)}}else await b.default.setItem("registered_user",a);b.default.removeItem("signup_draft").catch(()=>{}),o(s),B(e)}catch(t){console.error("Google Auth Error:",t),"auth/popup-closed-by-user"!==t?.code&&H("Помилка Google: "+(t.message||t.toString()))}finally{N(!1)}}},disabled:!w||F,children:"🔑 Google Вхід"})]})]})}),U&&(0,m.jsx)(n,{isOpen:U,isDarkMode:t,onClose:()=>Y(!1)})]})};export{U as default};