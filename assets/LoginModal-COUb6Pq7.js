import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as t}from"./vendor-i18n-4XGuJdvG.js";import{m as o}from"./vendor-firebase-CX1c1c-r.js";import{n as r}from"./vendor-markdown-ADGh9TTx.js";import{i as a,t as i}from"./styled-components.browser.esm-_LeWE6wZ.js";import{n}from"./vendor-utils-o-f_e4rV.js";import{l as s,u as l}from"./index-CaZHfpnU.js";var p=e(t()),d=e(n()),c=r(),u=i`
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,f=i`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,g=i`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,m=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 1000;
  animation: ${e=>e.$isClosing?g:"none"} 0.5s ease-out
    forwards;
`,x=a.form`
  background: linear-gradient(135deg, #ffffff, #f7fffe);
  padding: 26px;
  border-radius: 14px;
  width: 92%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  animation: ${e=>e.$isClosing?f:u} 0.45s
    cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
`,b=a.input`
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,h=a.button`
  background: #ffb36c;
  color: #000;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 6px 12px rgba(255, 179, 108, 0.18);
  width: 100%;
  &:hover {
    transform: translateY(-1px);
  }
`,y=a.button`
  background: #4285f4;
  color: white;
  font-weight: 700;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  box-shadow: 0 6px 12px rgba(66, 133, 244, 0.18);
  &:hover {
    transform: translateY(-1px);
  }
`,w=a.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: #000000;
  &:hover {
    color: #ff7b00;
  }
`,v=a.h3`
  font-weight: 900;
  color: black;
`,j=({onClose:e,onLogin:t})=>{const[r,a]=(0,p.useState)(""),[i,n]=(0,p.useState)(""),[u,f]=(0,p.useState)(""),[g,j]=(0,p.useState)(!1),C=t=>{t&&t.stopPropagation(),j(!0),setTimeout(()=>{e()},500)};return(0,c.jsx)(m,{$isClosing:g,onClick:C,children:(0,c.jsxs)(x,{$isClosing:g,onClick:e=>e.stopPropagation(),onSubmit:async e=>{e.preventDefault();const o=await d.default.getItem("active_user"),a=await d.default.getItem("registered_user"),n=o||a;n&&n.account===r&&n.password===i?(t(n),C()):f("Невірний Gmail або пароль!")},autoComplete:"off",children:[(0,c.jsx)(w,{onClick:C,children:"×"}),(0,c.jsx)(v,{style:{textAlign:"center"},children:"Вхід"}),(0,c.jsx)("div",{style:{textAlign:"center",fontSize:13,color:"#444",marginTop:-6},children:"Використайте Gmail або натисніть «Увійти з Google»"}),(0,c.jsx)(b,{name:"local-email-input",type:"email",placeholder:"Ваш Gmail (наприклад: you@gmail.com)",value:r,onChange:e=>a(e.target.value),autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true",required:!0}),(0,c.jsx)(b,{name:"local-password-input",type:"password",placeholder:"Пароль (локальний акаунт)",value:i,onChange:e=>n(e.target.value),autoComplete:"off","data-form-type":"other","data-lpignore":"true",required:!0}),u&&(0,c.jsx)("div",{style:{color:"#9b2c2c",fontSize:"13px",textAlign:"center",background:"rgba(255,77,77,0.06)",padding:"8px",borderRadius:8},children:u}),(0,c.jsx)(h,{type:"submit",children:"🔒 Увійти"}),(0,c.jsx)("div",{style:{textAlign:"center",margin:"6px 0",fontSize:"13px",color:"#666"},children:"АБО"}),(0,c.jsx)(y,{type:"button",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{const e=(await o(s,l)).user,r={uid:e.uid,id:e.uid,account:e.email||"",firstName:e.displayName||e.email||"Користувач",avatar:e.photoURL||"",photoURL:e.photoURL||"",email:e.email||""};await d.default.setItem("active_user",r),t(r),C()}catch(r){f("Помилка Google: "+(r.message||r.toString()))}},children:"🔑 Увійти з Google"})]})})};export{j as default};
//# sourceMappingURL=LoginModal-COUb6Pq7.js.map