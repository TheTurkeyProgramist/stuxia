import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as t}from"./vendor-i18n-4XGuJdvG.js";import{m as o}from"./vendor-firebase-CX1c1c-r.js";import{n as a}from"./vendor-markdown-ADGh9TTx.js";import{n as r}from"./vendor-utils-o-f_e4rV.js";import{S as i,f as n,p as s,w as l}from"./index-DsXpZiTT.js";var p=e(t()),d=e(r()),c=a(),u=i`
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
`,x=l.div`
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
`,m=l.form`
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
`,b=l.input`
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,h=l.button`
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
`,y=l.button`
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
`,w=l.button`
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
`,v=l.h3`
  font-weight: 900;
  color: black;
`,j=({onClose:e,onLogin:t})=>{const[a,r]=(0,p.useState)(""),[i,l]=(0,p.useState)(""),[u,f]=(0,p.useState)(""),[g,j]=(0,p.useState)(!1),C=t=>{t&&t.stopPropagation(),j(!0),setTimeout(()=>{e()},500)};return(0,c.jsx)(x,{$isClosing:g,onClick:C,children:(0,c.jsxs)(m,{$isClosing:g,onClick:e=>e.stopPropagation(),onSubmit:async e=>{e.preventDefault();const o=await d.default.getItem("active_user"),r=await d.default.getItem("registered_user"),n=o||r;n&&n.account===a&&n.password===i?(t(n),C()):f("Невірний Gmail або пароль!")},autoComplete:"off",children:[(0,c.jsx)(w,{onClick:C,children:"×"}),(0,c.jsx)(v,{style:{textAlign:"center"},children:"Вхід"}),(0,c.jsx)("div",{style:{textAlign:"center",fontSize:13,color:"#444",marginTop:-6},children:"Використайте Gmail або натисніть «Увійти з Google»"}),(0,c.jsx)(b,{name:"local-email-input",type:"email",placeholder:"Ваш Gmail (наприклад: you@gmail.com)",value:a,onChange:e=>r(e.target.value),autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true",required:!0}),(0,c.jsx)(b,{name:"local-password-input",type:"password",placeholder:"Пароль (локальний акаунт)",value:i,onChange:e=>l(e.target.value),autoComplete:"off","data-form-type":"other","data-lpignore":"true",required:!0}),u&&(0,c.jsx)("div",{style:{color:"#9b2c2c",fontSize:"13px",textAlign:"center",background:"rgba(255,77,77,0.06)",padding:"8px",borderRadius:8},children:u}),(0,c.jsx)(h,{type:"submit",children:"🔒 Увійти"}),(0,c.jsx)("div",{style:{textAlign:"center",margin:"6px 0",fontSize:"13px",color:"#666"},children:"АБО"}),(0,c.jsx)(y,{type:"button",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{const e=(await o(n,s)).user,a={uid:e.uid,id:e.uid,account:e.email||"",firstName:e.displayName||e.email||"Користувач",avatar:e.photoURL||"",photoURL:e.photoURL||"",email:e.email||""};await d.default.setItem("active_user",a),t(a),C()}catch(a){f("Помилка Google: "+(a.message||a.toString()))}},children:"🔑 Увійти з Google"})]})})};export{j as default};
//# sourceMappingURL=LoginModal-rn5B6mU5.js.map