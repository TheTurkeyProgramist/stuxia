import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r as t}from"./vendor-i18n-4XGuJdvG.js";import{_ as o}from"./vendor-firebase-CjTrerxT.js";import{n as a}from"./vendor-markdown-ADGh9TTx.js";import{i as r,t as i}from"./styled-components.browser.esm-_LeWE6wZ.js";import{n}from"./vendor-utils-o-f_e4rV.js";import{f as s,m as l,p}from"./index-YdQqwtry.js";var d=e(t()),c=e(n()),u=a(),f=i`
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,g=i`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,m=i`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,x=r.div`
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
  animation: ${e=>e.$isClosing?m:"none"} 0.5s ease-out
    forwards;
`,b=r.form`
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
  animation: ${e=>e.$isClosing?g:f} 0.45s
    cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
`,h=r.input`
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,y=r.button`
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
`,w=r.button`
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
`,v=r.button`
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
`,j=r.h3`
  font-weight: 900;
  color: black;
`,C=({onClose:e,onLogin:t})=>{const[a,r]=(0,d.useState)(""),[i,n]=(0,d.useState)(""),[f,g]=(0,d.useState)(""),[m,C]=(0,d.useState)(!1),k=t=>{t&&t.stopPropagation(),C(!0),setTimeout(()=>{e()},500)};return(0,u.jsx)(x,{$isClosing:m,onClick:k,children:(0,u.jsxs)(b,{$isClosing:m,onClick:e=>e.stopPropagation(),onSubmit:async e=>{e.preventDefault();const o=await c.default.getItem("active_user"),r=await c.default.getItem("registered_user"),n=o||r;if(n&&n.account===a&&n.password===i){let e=n,o=null;n.pendingEmail&&(o=await p(n.pendingEmail,i,{createIfMissing:!1}),o&&(e={...e,account:n.pendingEmail,email:n.pendingEmail},delete e.pendingEmail)),o||(o=await p(n.account,i)),o&&(e={...e,uid:o.uid,id:o.uid}),e!==n&&await c.default.setItem("registered_user",e),t(e),k()}else g("Невірний Gmail або пароль!")},autoComplete:"off",children:[(0,u.jsx)(v,{onClick:k,children:"×"}),(0,u.jsx)(j,{style:{textAlign:"center"},children:"Вхід"}),(0,u.jsx)("div",{style:{textAlign:"center",fontSize:13,color:"#444",marginTop:-6},children:"Використайте Gmail або натисніть «Увійти з Google»"}),(0,u.jsx)(h,{name:"local-email-input",type:"email",placeholder:"Ваш Gmail (наприклад: you@gmail.com)",value:a,onChange:e=>r(e.target.value),autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true",required:!0}),(0,u.jsx)(h,{name:"local-password-input",type:"password",placeholder:"Пароль (локальний акаунт)",value:i,onChange:e=>n(e.target.value),autoComplete:"off","data-form-type":"other","data-lpignore":"true",required:!0}),f&&(0,u.jsx)("div",{style:{color:"#9b2c2c",fontSize:"13px",textAlign:"center",background:"rgba(255,77,77,0.06)",padding:"8px",borderRadius:8},children:f}),(0,u.jsx)(y,{type:"submit",children:"🔒 Увійти"}),(0,u.jsx)("div",{style:{textAlign:"center",margin:"6px 0",fontSize:"13px",color:"#666"},children:"АБО"}),(0,u.jsx)(w,{type:"button",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{const e=(await o(s,l)).user,a={uid:e.uid,id:e.uid,account:e.email||"",firstName:e.displayName||e.email||"Користувач",avatar:e.photoURL||"",photoURL:e.photoURL||"",email:e.email||""};await c.default.setItem("active_user",a),t(a),k()}catch(a){g("Помилка Google: "+(a.message||a.toString()))}},children:"🔑 Увійти з Google"})]})})};export{C as default};
//# sourceMappingURL=LoginModal-BRrN4IV5.js.map