import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{m as o}from"./vendor-firebase-CX1c1c-r.js";import{n as a}from"./vendor-markdown-ADGh9TTx.js";import{n as t}from"./vendor-utils-o-f_e4rV.js";import{C as i,S as n,a as s,f as d,p as l,w as p}from"./index-DsXpZiTT.js";import{t as c}from"./KatSceneModal-C3jAwnkL.js";var x=e(r()),g=e(t()),f=a(),b=n`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`,u=n`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`,h=n`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,m=n`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;i`
  background: linear-gradient(
    270deg,
    #ff7eb3,
    #ff758c,
    #7afcff,
    #feffb7,
    #58e2c2
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${m} 5s ease infinite;
`;var w=p.div`
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
  animation: ${e=>e.$isClosing?h:"none"} 0.5s ease-out
    forwards;
`,k=p.div`
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
  animation: ${e=>e.$isClosing?u:b} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.7);
    border-radius: 999px;
  }
`,$=p.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 250px;
`,y=p.button`
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
`,v=p.h3`
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
`,j=p.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
  color: ${e=>e.$isDarkMode?"#d6d6d6":"#5d5d5d"};
  margin-top: -4px;
`,C=p.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,D=p.input`
  padding: 12px 14px;
  border: 1px solid ${e=>e.$isDarkMode?"#4d5365":"#ebd4c0"};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  background: ${e=>e.$isDarkMode?"#2a2d38":"rgba(255,255,255,0.7)"};
  transition: all 0.2s ease;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
  &::placeholder {
    color: ${e=>e.$isDarkMode?"#a7abb8":"#7a7a7a"};
  }
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`,M=p.select`
  padding: 11px 12px;
  border: 1px solid ${e=>e.$isDarkMode?"#4d5365":"#ebd4c0"};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${e=>e.$isDarkMode?"#fff":"#111"};
  background: ${e=>e.$isDarkMode?"#2a2d38":"rgba(255,255,255,0.75)"};
  cursor: pointer;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`,z=p.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`,S=p.div`
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
`,I=p.span`
  color: ${e=>(e.$isDarkMode,"#ffb36c")};
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;p.div`
  width: 34px;
  height: 34px;
  min-width: 60px;
  min-height: 60px;
  flex-shrink: 0;
  border-radius: 50%;
  padding: 3px;
  background: ${e=>e.$isSelected?e.$borderColor:"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ${e=>{const r=e.$borderColor?.includes("270deg");if(e.$isSelected&&e.$borderColor?.includes("linear-gradient"))return r?i`
            background-size: 400% 400%;
            animation: ${m} 5s ease infinite;
          `:i`
            background-size: 100% 100%;
            animation: none;
          `}}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }
`,p.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  padding: 5px 2px;
  min-height: 45px;
  align-items: center;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,p.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,p.div`
  font-size: 12px;
  font-weight: bold;
  color: grey;
`,p.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 5px 2px;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,p.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${e=>e.$color};
  cursor: pointer;
  border: 2px solid ${e=>e.$isSelected?"#000":"transparent"};
  box-shadow: ${e=>e.$isSelected?"0 0 5px rgba(0,0,0,0.5)":"0 0 2px rgba(0,0,0,0.2)"};

  ${e=>{const r=e.$color?.includes("270deg");if(e.$color?.includes("linear-gradient"))return r?i`
            background-size: 400% 400%;
            animation: ${m} 5s ease infinite;
          `:i`
            background-size: 100% 100%;
            animation: none;
          `}}
`;var Y=p.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8d6c 100%);
  color: ${e=>e.$isDarkMode?"#181818":"#111"};
  font-weight: 800;
  padding: 14px 16px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 10px 22px rgba(255, 153, 93, 0.25);
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(255, 153, 93, 0.3);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  width: 100%;
`,F=p.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`,P=p.button`
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
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(66, 133, 244, 0.32);
  }
`,A=p.div`
  font-size: 12px;
  line-height: 1.4;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.09);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  text-align: center;
`,G=p.div`
  width: 100%;
  height: 7px;
  border-radius: 999px;
  background: ${e=>e.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  overflow: hidden;
  margin-top: -2px;
`,N=p.div`
  height: 100%;
  border-radius: inherit;
  background: ${e=>e.$color};
  width: ${e=>e.$width};
  transition: width 0.3s ease, background-color 0.3s ease;
`,R=({onClose:e,onRegister:r,availableAvatars:a=[],isDarkMode:t=!1})=>{const[i,n]=(0,x.useState)({account:"",firstName:"",password:"",confirmPassword:"",avatarIndex:0,textColor:"grey",borderColor:"grey"}),p=(e=>{if(!e)return{width:"0%",color:"transparent",label:""};let r=0;return e.length>=6&&(r+=1),e.length>=8&&(r+=1),(/[A-Z]/.test(e)||/[a-z]/.test(e))&&(r+=1),/\d/.test(e)&&(r+=1),/[^A-Za-z0-9]/.test(e)&&(r+=1),r<=1?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:r<=2?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(i.password),[b,u]=(0,x.useState)({day:"",month:"",year:""}),[h,m]=(0,x.useState)(!1),[R,L]=(0,x.useState)(!1),[U,_]=(0,x.useState)(""),[T,Z]=(0,x.useState)(!1),[K]=(0,x.useState)(!1),O=r=>{r&&r.stopPropagation(),Z(!0),setTimeout(()=>{e()},500)},W=Array.from({length:(new Date).getFullYear()-1909+1},(e,r)=>1909+r).reverse(),q=Array.from({length:31},(e,r)=>r+1),B=(0,x.useMemo)(()=>{const{day:e,month:r,year:o}=b;if(!e||!r||!o)return!1;const a=parseInt(e),t=parseInt(r),i=parseInt(o),n=new Date(i,t-1,a);return n.getFullYear()!==i||n.getMonth()!==t-1||n.getDate()!==a},[b]),E=async()=>{const e={account:i.account,firstName:i.firstName||i.account,password:i.password,avatar:a[i.avatarIndex],textColor:i.textColor,borderColor:i.borderColor,birthDate:`${b.year}-${b.month.padStart(2,"0")}-${b.day.padStart(2,"0")}`};await g.default.setItem("registered_user",e),r(e)};return(0,f.jsx)(f.Fragment,{children:K?(0,f.jsx)(c,{onClose:E}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(w,{$isClosing:T,onClick:O,children:(0,f.jsxs)(k,{$isClosing:T,onClick:e=>e.stopPropagation(),$isDarkMode:t,children:[(0,f.jsx)(y,{onClick:O,$isDarkMode:t,children:"×"}),(0,f.jsx)(v,{$isDarkMode:t,children:"Реєстрація"}),(0,f.jsx)(j,{$isDarkMode:t,children:"Створи акаунт і почни вивчати погоду з комфортом."}),(0,f.jsxs)($,{children:[(0,f.jsx)(C,{children:(0,f.jsx)(D,{type:"email",placeholder:"Gmail",onChange:e=>n({...i,account:e.target.value}),$isDarkMode:t})}),(0,f.jsx)(C,{children:(0,f.jsxs)(z,{children:[(0,f.jsxs)(M,{value:b.day,onChange:e=>u({...b,day:e.target.value}),$isDarkMode:t,children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"День"}),q.map(e=>(0,f.jsx)("option",{value:e,children:e},e))]}),(0,f.jsxs)(M,{value:b.month,onChange:e=>u({...b,month:e.target.value}),$isDarkMode:t,children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Місяць"}),["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"].map((e,r)=>(0,f.jsx)("option",{value:r+1,children:e},r))]}),(0,f.jsxs)(M,{value:b.year,onChange:e=>u({...b,year:e.target.value}),$isDarkMode:t,children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Рік"}),W.map(e=>(0,f.jsx)("option",{value:e,children:e},e))]})]})}),B&&(0,f.jsx)(A,{children:"Такої дати не існує!"}),(0,f.jsxs)(C,{children:[(0,f.jsx)(D,{name:"signup-password-field",type:"password",placeholder:"Пароль",onChange:e=>n({...i,password:e.target.value}),$isDarkMode:t,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"}),i.password&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(G,{$isDarkMode:t,children:(0,f.jsx)(N,{$color:p.color,$width:p.width})}),(0,f.jsxs)("span",{style:{fontSize:"11px",fontWeight:"bold",color:p.color,alignSelf:"flex-end",marginTop:"-2px"},children:["Надійність: ",p.label]})]})]}),(0,f.jsx)(C,{children:(0,f.jsx)(D,{name:"signup-confirm-password-field",type:"password",placeholder:"Підтвердіть пароль",onChange:e=>n({...i,confirmPassword:e.target.value}),$isDarkMode:t,autoComplete:"new-password",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,"data-form-type":"other","data-lpignore":"true"})}),U&&(0,f.jsx)(A,{children:U}),(0,f.jsxs)(S,{$isDarkMode:t,children:[(0,f.jsx)("input",{type:"checkbox",checked:h,onChange:e=>m(e.target.checked)}),(0,f.jsxs)("label",{children:["Я погоджуюсь з"," ",(0,f.jsx)(I,{$isDarkMode:t,onClick:()=>L(!0),children:"Угодою"})]})]}),(0,f.jsxs)(F,{children:[(0,f.jsx)(Y,{onClick:async()=>{if(!(i.account&&i.password&&b.day&&b.month&&b.year))return _("Заповніть всі поля!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.account))return _("Невірний формат Gmail!");if(B)return _("Такої дати не існує!");if(i.password!==i.confirmPassword)return _("Паролі не співпадають!");if(!h)return _("Прийміть угоду!");if(((e,r,o)=>{const a=new Date,t=new Date(o,r-1,e);let i=a.getFullYear()-t.getFullYear();const n=a.getMonth()-t.getMonth();return(n<0||0===n&&a.getDate()<t.getDate())&&i--,i})(parseInt(b.day),parseInt(b.month),parseInt(b.year))<13)return _("Реєстрація дозволена лише з 13 років!");const e=await g.default.getItem("registered_user");if(e&&e.account===i.account)return _("Акаунт з таким Gmail вже існує!");await E()},disabled:!h||B,$isDarkMode:t,children:"Зареєструватися"}),(0,f.jsx)(P,{type:"button",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{const t=(await o(d,l)).user,n={uid:t.uid,id:t.uid,account:t.email||"",firstName:t.displayName||t.email||"Користувач",password:"",avatar:t.photoURL||(a.length?a[i.avatarIndex]:""),photoURL:t.photoURL||"",textColor:i.textColor||"grey",borderColor:i.borderColor||"grey",birthDate:"2000-01-01"};await g.default.setItem("registered_user",n),r(n),O(e)}catch(t){_("Помилка Google: "+(t.message||t.toString()))}},children:"🔑 Google Вхід"})]})]})]})}),R&&(0,f.jsx)(s,{isOpen:R,onClose:()=>L(!1)})]})})};export{R as default};
//# sourceMappingURL=Modal-wWLaUAmq.js.map