import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as o}from"./vendor-i18n-4NhlWQFf.js";import{l as a}from"./vendor-firebase-Fffueu5Y.js";import{s as r}from"./vendor-motion-Bh6mtAYz.js";import{n as t}from"./vendor-utils-BcX-d9lY.js";import{B as i,H as s,a as n,i as d,m as l,o as c,s as p}from"./index-2DOTQNJp.js";import{auth as f,ensureEmailPasswordAuth as u,googleProvider as x}from"./firebase-D5cWCD3l.js";var g=e(o()),b=e(t()),h=r(),m=i`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,w=i`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,k=i`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,$=s.div`
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
`,y=s.div`
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
  animation: ${e=>e.$isClosing?w:m} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.7);
    border-radius: 999px;
  }
`,v=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 250px;
`,j=s.button`
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
`,D=s.h3`
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
`,M=s.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
  color: ${e=>e.$isDarkMode?"#d6d6d6":"#5d5d5d"};
  margin-top: -4px;
`,C=s.input`
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
`,E=s.button`
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
`,L=s.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,z=s.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.$isDarkMode?"#a7abb8":"#777"};
`,S=s.div`
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
`,G=s.button`
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: #ffb36c;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`,I=s.button`
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
`,R=s.div`
  font-size: 12px;
  line-height: 1.4;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.09);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  text-align: center;
`,U=({onClose:e,onRegister:o,isDarkMode:r=!1})=>{const[t,i]=(0,g.useState)(""),[s,m]=(0,g.useState)(""),[w,k]=(0,g.useState)(!1),[U,Y]=(0,g.useState)(!1),[_,H]=(0,g.useState)(""),[P,B]=(0,g.useState)(!1),[F,N]=(0,g.useState)(!1),T=(0,g.useRef)(null);(0,g.useEffect)(()=>()=>clearTimeout(T.current),[]);const A=o=>{o&&o.stopPropagation(),T.current||(B(!0),T.current=setTimeout(e,500))};(0,g.useEffect)(()=>{const e=e=>{"Escape"!==e.key||U||A()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[U,e]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)($,{$isClosing:P,onClick:A,children:(0,h.jsxs)(y,{$isClosing:P,onClick:e=>e.stopPropagation(),$isDarkMode:r,children:[(0,h.jsx)(j,{onClick:A,$isDarkMode:r,children:"×"}),(0,h.jsx)(D,{$isDarkMode:r,children:"Вхід"}),(0,h.jsx)(M,{$isDarkMode:r,children:"Увійди через Gmail чи Google і почни вивчати погоду з комфортом."}),(0,h.jsxs)(v,{children:[(0,h.jsxs)(L,{onSubmit:async e=>{if(e.preventDefault(),F)return;const a=t.trim().toLowerCase();if(!a||!s)return H("Введіть Gmail і пароль!");N(!0),H("");try{const e=await b.default.getItem("registered_user"),r=e?.account?.toLowerCase()===a?e:null;if(!r)return H("Невірний Gmail або пароль!");let t=!1,i=r.passwordHash?{passwordHash:r.passwordHash,passwordSalt:r.passwordSalt}:{},l=null;if(r.passwordHash&&d()?t=await p(s,r):r.password?(t=r.password===s,t&&(i=await n(s))):(l=await u(r.account,s,{createIfMissing:!1}),t=Boolean(l),t&&(i=await n(s))),!t)return H("Невірний Gmail або пароль!");let f={...c(r),...i};if(r.pendingEmail){const e=await u(r.pendingEmail,s,{createIfMissing:!1});e&&(l=e,f={...f,account:r.pendingEmail,email:r.pendingEmail},delete f.pendingEmail)}l||(l=await u(r.account,s)),l&&(f={...f,uid:l.uid,id:l.uid}),await b.default.setItem("registered_user",f),o(c(f)),A()}catch(r){console.error("Email login error:",r),H("Не вдалося увійти. Спробуйте ще раз.")}finally{N(!1)}},children:[(0,h.jsx)(C,{type:"email",name:"login-email",placeholder:"Gmail",value:t,autoComplete:"email",onChange:e=>i(e.target.value),$isDarkMode:r}),(0,h.jsx)(C,{type:"password",name:"login-password",placeholder:"Пароль",value:s,autoComplete:"current-password",onChange:e=>m(e.target.value),$isDarkMode:r}),(0,h.jsx)(E,{type:"submit",disabled:F,$isDarkMode:r,children:"🔒 Увійти"})]}),(0,h.jsx)(z,{$isDarkMode:r,children:"АБО"}),_&&(0,h.jsx)(R,{children:_}),(0,h.jsxs)(S,{$isDarkMode:r,children:[(0,h.jsx)("input",{id:"accept-terms",type:"checkbox",checked:w,onChange:e=>k(e.target.checked)}),(0,h.jsxs)("label",{htmlFor:"accept-terms",children:["Для входу через Google я погоджуюсь з"," ",(0,h.jsx)(G,{type:"button",onClick:e=>{e.preventDefault(),Y(!0)},children:"Угодою"})]})]}),(0,h.jsx)(I,{type:"button",onClick:async e=>{if(e.preventDefault(),e.stopPropagation(),!F){if(!w)return H("Прийміть угоду!");N(!0),H("");try{const r=(await a(f,x)).user,t={uid:r.uid,id:r.uid,account:r.email||"",firstName:r.displayName||r.email||"Користувач",avatar:r.photoURL||"",photoURL:r.photoURL||"",textColor:"grey",borderColor:"grey",birthDate:"2000-01-01"},i=await b.default.getItem("registered_user");let s=t;if(i){if(i.account?.toLowerCase()===t.account.toLowerCase()){const e={...i,uid:t.uid,id:t.id,photoURL:t.photoURL||i.photoURL||""};await b.default.setItem("registered_user",e),s=c(e)}}else await b.default.setItem("registered_user",t);b.default.removeItem("signup_draft").catch(()=>{}),o(s),A(e)}catch(r){console.error("Google Auth Error:",r),"auth/popup-closed-by-user"!==r?.code&&H("Помилка Google: "+(r.message||r.toString()))}finally{N(!1)}}},disabled:!w||F,children:"🔑 Google Вхід"})]})]})}),U&&(0,h.jsx)(l,{isOpen:U,isDarkMode:r,onClose:()=>Y(!1)})]})};export{U as default};