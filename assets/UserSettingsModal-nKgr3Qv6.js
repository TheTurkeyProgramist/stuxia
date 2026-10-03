import{o as Sr}from"./rolldown-runtime-BNNRdYrd.js";import{$t as Dt,An as mr,Bn as _t,Di as Pt,Dn as V,Dt as Lt,En as At,Et as Nt,Gn as Ut,Hn as yr,It as Ue,J as Mt,Jn as Me,Kn as Wt,Kt as We,Ln as Gt,Mn as Rt,Nn as Et,Pn as Q,Qn as ke,Rn as Bt,Sn as Ot,Sr as qt,Tn as ee,Un as Ht,Wn as re,X as Yt,Xn as Kt,Z as Xt,Zn as Jt,Zr as Zt,_n as Vt,bn as te,br as Qt,et as ei,fn as ri,gn as ti,jn as ii,kn as ni,li as $e,mi as si,pr as ai,qn as Se,si as ie,tt as li,ui as l,vn as oi,wi as di,xn as br,yn as ci,zn as xi}from"./vendor-react-CP5wybkD.js";import{a as hi,c as vr,l as pi,o as fi,r as gi,s as ji,t as ui,u as G}from"./index-gcrBqmc5.js";import{t as mi}from"./KatSceneModal-CwMqJ75p.js";var d=Sr(Pt()),yi=Sr(di()),Ee=[],bi=new Set(Ee.map(s=>s.file)),vi=s=>!!s&&bi.has(s),wi="bg-audio-cache",ki=()=>{if(typeof window>"u")return[];try{const s=window.localStorage.getItem("bg_music_soft_deleted_ids");return s?JSON.parse(s):[]}catch{return[]}},Si=(s=[])=>{if(!(typeof window>"u"))try{window.localStorage.setItem("bg_music_soft_deleted_ids",JSON.stringify(Array.from(new Set(s))))}catch{}},e=ai(),Cr=ie`
  0% { opacity: 0; transform: scale(0.96); }
  100% { opacity: 1; transform: scale(1); }
`,$r=ie`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.96); }
`,Ci=ie`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,$i=ie`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`,Fi=ie`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,Ti=l.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 100001;
  animation: ${s=>s.$isClosing?$r:Cr} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`,wr=l.div`
  position: fixed;
  inset: 0;
  z-index: 100002;
`,Ii=l.div`
  background: #1c1c1f;
  color: #f3f3f3;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  width: 95%;
  height: 88vh; max-height: 850px;
  display: flex; flex-direction: column;
  box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.2);
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  animation: ${s=>s.$isClosing?$r:Cr} 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
`,zi=l.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px;
  background: #202024;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  user-select: none;
`,Di=l.div`
  display: flex; align-items: center; gap: 12px;
`,_i=l.div`
  display: flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 4px 12px 4px 6px; border-radius: 20px;
`,Pi=l.img`
  width: 28px; height: 28px; border-radius: 50%; object-fit: cover;
`,Li=l.h2`font-size: 16px; font-weight: 600; margin: 0; color: #ffffff;`,Ai=l.span`font-size: 11px; color: #a0a0a0;`,Ni=l.div`display: flex; align-items: center; gap: 8px;`,Ui=l.button`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #e0e0e0;
  padding: 6px 12px; border-radius: 6px;
  font-size: 12px; font-weight: 500; cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.12); color: #ffffff; }
`,Mi=l.button`
  background: transparent; border: none; color: #f4f2f2;
  width: 32px; height: 32px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 28px; transition: all 0.15s ease;
  &:hover { background: #c42b1c; }
`,Wi=l.div`
  display: flex; flex: 1; overflow: hidden;
  @media (max-width: 768px) { flex-direction: column; }
`,Gi=l.div`
  width: 230px;
  background: #202024;
  border-right: 1px solid rgba(255,255,255,0.08);
  padding: 12px; display: flex; flex-direction: column; gap: 2px;
  overflow-y: auto; flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%; flex-direction: row;
    border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08);
    overflow-x: auto; padding: 8px;
  }
`,Ri=l.div`
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 6px; cursor: pointer;
  font-size: 13px; font-weight: ${s=>s.$active?"600":"400"};
  color: ${s=>s.$active?"#ffffff":s.$locked?"#666":"#c5c5c5"};
  background: ${s=>s.$active?"rgba(255,255,255,0.08)":"transparent"};
  position: relative; transition: all 0.15s ease; white-space: nowrap;
  opacity: ${s=>s.$locked?.45:1};
  pointer-events: ${s=>s.$locked?"none":"auto"};

  ${s=>s.$active&&$e`
      &::before {
        content: "";
        position: absolute;
        left: 3px; top: 8px; bottom: 8px;
        width: 3px; background: #60cdff; border-radius: 2px;
      }
    `}

  &:hover { background: rgba(255,255,255,0.06); color: #ffffff; }

  @media (max-width: 768px) {
    padding: 7px 10px;
    &::before { display: none; }
  }
`,Ei=l.span`
  font-size: 15px; display: flex; align-items: center; justify-content: center;
  color: ${s=>s.$active?"#60cdff":s.$locked?"#555":"#a0a0a0"};
`,Bi=l.span`
  font-size: 10px; margin-left: auto; color: #555;
  background: rgba(255,255,255,0.06); padding: 1px 5px; border-radius: 4px;
`,Oi=l.div`
  flex: 1; padding: 24px; overflow-y: auto;
  background: #1c1c1f; display: flex; flex-direction: column; gap: 16px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
  @media (max-width: 768px) { padding: 16px; }
`,_=l.h3`
  font-size: 20px; font-weight: 600; color: #ffffff;
  margin: 0 0 12px 0; display: flex; align-items: center; gap: 10px;
`,P=l.div`display: flex; flex-direction: column; gap: 8px;`,u=l.div`
  background: #27272a;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px; padding: 14px 16px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); }
  @media (max-width: 550px) { flex-direction: column; align-items: flex-start; }
`,v=l(u)`
  flex-direction: column; align-items: stretch; gap: 12px;
`,x=l.div`
  display: flex; align-items: center; gap: 14px; flex: 1;
`,h=l.div`
  width: 36px; height: 36px; min-width: 36px;
  background: rgba(255,255,255,0.06); border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: ${s=>s.$color||"#60cdff"};
`,p=l.div`display: flex; flex-direction: column;`,f=l.span`font-size: 14px; font-weight: 600; color: #ffffff;`,g=l.span`font-size: 12px; color: #a0a0a0; margin-top: 2px;`,y=l.div`
  display: flex; align-items: center; gap: 12px;
  @media (max-width: 550px) { width: 100%; justify-content: flex-end; }
`,k=l.div`
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; user-select: none;
`,S=l.span`
  font-size: 13px;
  color: ${s=>s.$checked?"#ffffff":"#a0a0a0"};
  font-weight: 500;
`,C=l.div`
  width: 40px; height: 20px; border-radius: 10px;
  background: ${s=>s.$checked?"#60cdff":"rgba(255,255,255,0.1)"};
  border: 1px solid ${s=>s.$checked?"#60cdff":"rgba(255,255,255,0.3)"};
  position: relative; transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  &::after {
    content: ""; position: absolute;
    top: 2px; left: ${s=>s.$checked?"22px":"2px"};
    width: 14px; height: 14px; border-radius: 50%;
    background: ${s=>s.$checked?"#000000":"#ffffff"};
    transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  }
`,kr=l.select`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; cursor: pointer; transition: all 0.15s ease;
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
  option { background: #2b2b30; color: #ffffff; }
`,E=l.input`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 12px; font-size: 13px; font-family: inherit;
  outline: none; width: 100%; box-sizing: border-box; transition: all 0.15s ease;
  &::placeholder { color: #7a7a80; }
  &:hover { background: #323238; border-color: rgba(255,255,255,0.25); }
  &:focus { border-color: #60cdff; box-shadow: 0 0 0 2px rgba(96,205,255,0.25); }
`;l(E)`
  font-weight: 600;
  ${s=>{const i=s.$textColor||"inherit",b=i.includes("linear"),$=i.includes("270deg");return b?$e`
        background: ${i};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        ${$&&$e`background-size: 400% 400%; animation: ${Ci} 5s ease infinite;`}
      `:$e`color: ${i}; -webkit-background-clip: none; -webkit-text-fill-color: currentcolor;`}}
`;var j=l.button`
  background: ${s=>s.$primary?"#60cdff":s.$danger?"rgba(196,43,28,0.15)":"rgba(255,255,255,0.08)"};
  color: ${s=>s.$primary?"#000000":s.$danger?"#ff6b6b":"#ffffff"};
  border: 1px solid ${s=>s.$primary?"#60cdff":s.$danger?"rgba(196,43,28,0.5)":"rgba(255,255,255,0.12)"};
  border-radius: 6px; padding: 6px 16px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: all 0.15s ease;
  &:hover {
    background: ${s=>s.$primary?"#70d4ff":s.$danger?"rgba(196,43,28,0.3)":"rgba(255,255,255,0.15)"};
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,qi=l.div`
  display: flex; gap: 8px; overflow-x: auto; padding: 4px 0; align-items: center;
  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
`,Ce=l.div`
  width: 54px; height: 54px; min-width: 54px;
  border-radius: 8px; padding: 2px;
  background: ${s=>s.$isSelected?"#60cdff":"rgba(255,255,255,0.08)"};
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: transform 0.15s ease;
  position: relative;
  &:hover { transform: scale(1.05); }
  img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; }
`,Hi=l.div`
  height: 4px; border-radius: 2px;
  background-color: ${s=>s.$color||"transparent"};
  width: ${s=>s.$width||"0%"};
  transition: width 0.3s ease, background-color 0.3s ease; margin-top: 4px;
`,Yi=l.span`
  font-size: 11px; color: ${s=>s.$color||"#a0a0a0"}; font-weight: 500; margin-top: 2px;
`,Ki=l.div`
  background: #202024; border-top: 1px solid rgba(255,255,255,0.08);
  padding: 12px 20px; display: flex; align-items: center; justify-content: space-between;
`,Xi=l.div`
  display: flex; align-items: center; gap: 8px; font-size: 13px; color: #c5c5c5;
`,Ji=l.span`color: #60cdff; text-decoration: underline; cursor: pointer;`,Zi=l.div`display: flex; align-items: center; gap: 10px;`,Vi=l.div`
  max-height: 200px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(96,205,255,0.3); border-radius: 2px; }
`,Qi=l.div`
  display: flex; align-items: center; gap: 8px; padding: 6px 8px;
  border-radius: 6px; cursor: pointer;
  background: ${s=>s.$active?"rgba(96,205,255,0.12)":"transparent"};
  border: 1px solid ${s=>s.$active?"rgba(96,205,255,0.3)":"transparent"};
  transition: all 0.15s ease;
  &:hover { background: rgba(255,255,255,0.05); }
`,en=l.img`
  width: 32px; height: 32px; border-radius: 4px; object-fit: cover; flex-shrink: 0;
`,rn=l.div`flex: 1; min-width: 0;`,tn=l.div`
  font-size: 12px; font-weight: 500; color: #ffffff;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,nn=l.div`font-size: 10px; color: #a0a0a0; margin-top: 1px;`,Ge=l.div`
  width: 2px; background: #60cdff; border-radius: 1px;
  animation: ${$i} ${s=>s.$dur}s ease-in-out infinite;
  animation-delay: ${s=>s.$delay}s;
`,sn=l.div`
  display: flex; align-items: flex-end; gap: 1.5px; height: 14px;
`,an=()=>(0,e.jsxs)(sn,{children:[(0,e.jsx)(Ge,{$dur:.6,$delay:0}),(0,e.jsx)(Ge,{$dur:.8,$delay:.2}),(0,e.jsx)(Ge,{$dur:.7,$delay:.1})]}),R=l.input`
  width: 100%; accent-color: #60cdff; cursor: pointer;
  &::-webkit-slider-thumb { background: #60cdff; }
`,ln=l.div`
  background: ${s=>s.$hasFile?"rgba(96,205,255,0.06)":"rgba(255,255,255,0.03)"};
  border: 1px solid ${s=>s.$hasFile?"rgba(96,205,255,0.2)":"rgba(255,255,255,0.06)"};
  border-radius: 8px; padding: 10px 12px;
  display: flex; align-items: center; gap: 10px;
`,on=l.div`
  flex: 1; font-size: 12px; color: #c5c5c5;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`,dn=l.div`display: flex; gap: 6px; flex-shrink: 0;`,A=l.button`
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: #ffffff; width: 28px; height: 28px; border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 13px; transition: all 0.15s ease;
  &:hover { background: ${s=>s.$danger?"rgba(196,43,28,0.3)":"#60cdff"}; color: ${s=>s.$danger?"#ff6b6b":"#000"}; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`,cn=l.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 6px;
`,Re=l.button`
  background: ${s=>s.$active?"rgba(96,205,255,0.15)":"rgba(255,255,255,0.04)"};
  color: ${s=>s.$active?"#60cdff":"#e0e0e0"};
  border: 1px solid ${s=>s.$active?"#60cdff":"rgba(255,255,255,0.1)"};
  border-radius: 6px; padding: 8px 10px; font-size: 12px; font-weight: 500;
  cursor: pointer; transition: all 0.15s ease; text-align: center;
  &:hover { background: rgba(96,205,255,0.1); border-color: rgba(96,205,255,0.3); color: #ffffff; }
`,xn=l.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 6px;
`,hn=l.div`
  display: flex; align-items: center; gap: 4px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(122,252,255,0.2);
  border-radius: 6px; padding: 4px 6px; animation: ${Fi} 0.2s ease-out forwards;
`,kn=({onClose:s,user:i,availableAvatars:b=[],onUpdate:$,weatherCardLayout:pn=[],isDarkMode:ne=!1,onToggleTheme:Fr=()=>{},onUpdateLayout:fn,showUpdateTimer:Fe,setShowUpdateTimer:Tr,siteSections:se=[],moveSiteSection:Be=()=>{},resetSiteSections:Ir=()=>{},sectionThemes:zr={},hiddenSections:Oe=[],onToggleSectionVisibility:Dr=()=>{},onToggleSectionTheme:_r=()=>{},onResetSectionThemes:Pr=()=>{},isRoutingMode:N=!1,setIsRoutingMode:Lr=()=>{},loadingStrategy:qe="eager",onSetLoadingStrategy:Ar=()=>{},isStickyBgMode:Te=!1,onToggleStickyBg:Nr=()=>{},bgMusicEnabled:ae,setBgMusicEnabled:Ur,autoMuteBgMusic:le,setAutoMuteBgMusic:Mr,bgMusicSource:He,setBgMusicSource:q,bgMusicVolume:Ye,setBgMusicVolume:Wr,bgMusicSpeed:oe=1,setBgMusicSpeed:Gr=()=>{},bgMusicMode:Ke,setBgMusicMode:Rr,bgMusicShuffle:Ie,setBgMusicShuffle:Er,customBgTracks:ze,setCustomBgTracks:Xe,libraryBgSettings:gn={},setLibraryBgSettings:jn=()=>{},activeBgTrackId:Br,setActiveBgTrackId:H=()=>{},onResetBgPosition:Or=()=>{},sfxVolume:Je=.2,setSfxVolume:qr=()=>{},bgAudioRef:Y,bgAudioRef2:K})=>{const m=!i;si();const[F,Hr]=(0,d.useState)(m?"personalization":"account"),[Ze,Yr]=(0,d.useState)(!1),[Ve,Qe]=(0,d.useState)(!1),[Kr,er]=(0,d.useState)(!1),{isDecoratorMode:X,setIsDecoratorMode:Xr,changeLog:de=[],undoChange:Jr=()=>{},resetAll:Zr=()=>{},isPersistent:ce=!1,setIsPersistent:Vr=()=>{}}=ui(),{visualConfig:B,setVisualConfig:J,onResetFilters:Qr,customPresets:et=[],onSavePreset:rt,onDeletePreset:tt,onUpdatePresetName:it}=ji(i),[De,rr]=(0,d.useState)(""),[nt,tr]=(0,d.useState)(null),ir=(0,d.useRef)(null),[L,st]=(0,d.useState)(()=>{try{return i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("data:image")?i.avatar:localStorage.getItem("custom_desktop_avatar")||null}catch{return null}}),[z,nr]=(0,d.useState)(()=>{if(i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("http")&&b.indexOf(i.avatar)===-1)return i.avatar;if(i?.photoURL&&typeof i.photoURL=="string"&&i.photoURL.startsWith("http"))return i.photoURL;try{return localStorage.getItem("saved_google_avatar")||null}catch{return null}});(0,d.useEffect)(()=>{if(i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("http")&&b.indexOf(i.avatar)===-1&&!i.avatar.startsWith("data:")){nr(i.avatar);try{localStorage.setItem("saved_google_avatar",i.avatar)}catch{}}},[i,b]);const at=r=>{const t=r.target.files[0];if(!t)return;const n=new Date().toISOString().split("T")[0];if(localStorage.getItem("last_custom_avatar_upload_date")===n){alert("Аватарку з пристрою можна змінювати лише 1 раз на день! Спробуйте завтра.");return}if(t.size>5242880){alert("Файл занадто великий! Максимум 5 МБ.");return}const o=new FileReader;o.onload=c=>{const T=c.target.result;try{localStorage.setItem("custom_desktop_avatar",T),localStorage.setItem("last_custom_avatar_upload_date",n)}catch(W){console.error("Localstorage quota error",W)}st(T),w({avatarIndex:-2}),m||$({...i,avatar:T,lastAvatarUploadDate:n})},o.readAsDataURL(t)},[sr,lt]=(0,d.useState)(i?.email||i?.account||""),[O,I]=(0,d.useState)(""),[Z,_e]=(0,d.useState)(()=>!!(G.currentUser?.providerData?.some(r=>r.providerId==="google.com")||i?.email&&!i?.password||z)),ot=Z||!!(i?.isGoogle||i?.provider==="google"),dt=async()=>{if(!G.currentUser){alert("Потрібно авторизуватись у системі!");return}try{const r=new Mt;r.setCustomParameters({prompt:"select_account"});let t;try{t=await Yt(G.currentUser,r)}catch(c){if(c.code==="auth/provider-already-linked"||c.code==="auth/credential-already-in-use"||c.code==="auth/email-already-in-use")t=await Xt(G.currentUser,r);else throw c}const n=t.user;_e(!0);const o=n.photoURL||n.providerData?.[0]?.photoURL;if(o){nr(o);try{localStorage.setItem("saved_google_avatar",o)}catch{}}$({...i,email:n.email||i?.email,avatar:o||i?.avatar}),alert(`✅ Google акаунт підтверджено: ${n.email}`)}catch(r){r.code==="auth/cancelled-popup-request"||r.code==="auth/popup-closed-by-user"||(r.code==="auth/user-mismatch"?alert("⚠️ Цей Google акаунт не збігається з поточним профілем!"):alert("Помилка: "+(r.message||r.code)))}},ct=async()=>{if(G.currentUser&&window.confirm(`Ви дійсно бажаєте відв'язати Google від цього профілю?

Після відв'язки для входу буде потрібен пароль.`))try{await ei(G.currentUser,"google.com"),_e(!1),alert("✅ Google акаунт відв'язано успішно.")}catch(r){r.code==="auth/no-such-provider"?(_e(!1),alert("Google вже не прив'язано до цього профілю.")):alert("Помилка відв'язування: "+(r.message||r.code))}},[Pe,ar]=(0,d.useState)(!1),xt=async()=>{const r=sr.trim();if(!r||!r.includes("@")||!r.includes(".")){I("❌ Введіть коректну електронну пошту!");return}if(r===(i?.email||i?.account)){I("⚠️ Це вже поточна пошта профілю.");return}ar(!0),I("⏳ Оновлюємо пошту...");try{const t=G.currentUser;t?.providerData?.length>0&&t.providerData.every(n=>n.providerId!=="password")||!t?($({...i,email:r,account:r}),I(`✅ Пошту профілю оновлено на ${r}. (Google-акаунт: авторизація залишається через Google)`)):(await li(t,r),$({...i,email:r,account:r}),I(`✅ Лист підтвердження надіслано на ${r}. Перевірте вхідні (та спам). Зміна набере чинності після кліку на посилання.`))}catch(t){t.code==="auth/requires-recent-login"?I("⚠️ Потрібна повторна авторизація — вийдіть та увійдіть знову, потім спробуйте ще раз."):t.code==="auth/email-already-in-use"?I("❌ Ця пошта вже використовується іншим акаунтом!"):t.code==="auth/invalid-email"?I("❌ Неправильний формат електронної пошти!"):($({...i,email:r,account:r}),I(`📝 Пошту профілю оновлено локально: ${r}.`))}finally{ar(!1)}},[U,lr]=(0,d.useState)(!1),[M,or]=(0,d.useState)(!1);(0,d.useEffect)(()=>{const r=U?-1:1,t=M?-1:1;r===1&&t===1?(document.documentElement.style.transform="",document.documentElement.style.transformOrigin=""):(document.documentElement.style.transform=`scale(${r}, ${t})`,document.documentElement.style.transformOrigin="center center")},[U,M]);const Le=(0,d.useMemo)(()=>L&&i?.avatar===L?-2:z&&i?.avatar===z?-1:b.indexOf(i?.avatar)!==-1?b.indexOf(i?.avatar):i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("http")?-1:i?.avatar&&typeof i.avatar=="string"&&i.avatar.startsWith("data:")?-2:0,[i,b,z,L]),[a,xe]=(0,d.useState)({name:i?.firstName||"",day:"",month:"",year:"",oldPassword:"",newPassword:"",confirmPassword:"",avatarIndex:Le,textColor:i?.textColor||"grey",borderColor:i?.borderColor||"grey",fontFamily:i?.fontFamily||"",showSeconds:i?.showSeconds!==!1,dateDisplayMode:i?.dateDisplayMode||"both",hour12:i?.hour12===!0,voiceActingMode:i?.voiceActingMode||"malyatko",showUpdateTimer:Fe!==!1,newsAutoScroll:i?.newsAutoScroll||!1,syncMutedNews:i?.syncMutedNews||!1,gestureSensitivity:i?.gestureSensitivity??1.5,fastClicks:i?.fastClicks??!1}),[he,ht]=(0,d.useState)(i?.newsLayout||[{key:"image",visible:!0},{key:"title",visible:!0},{key:"description",visible:!0}]),pt=(0,d.useMemo)(()=>({...i}),[i]);(0,d.useEffect)(()=>{if(!i)return;let r="",t="",n="";i.birthDate&&(i.birthDate.includes("-")?[r,t,n]=i.birthDate.split("-"):i.birthDate.includes(".")&&([n,t,r]=i.birthDate.split("."))),xe({name:i?.firstName||"",day:n?String(parseInt(n)):"",month:t?String(parseInt(t)):"",year:r?String(parseInt(r)):"",oldPassword:"",newPassword:"",confirmPassword:"",avatarIndex:Le,textColor:i?.textColor||"grey",borderColor:i?.borderColor||"grey",fontFamily:i?.fontFamily||"",showSeconds:i?.showSeconds!==!1,dateDisplayMode:i?.dateDisplayMode||"both",hour12:i?.hour12===!0,voiceActingMode:i?.voiceActingMode||"malyatko",showUpdateTimer:Fe!==!1,newsAutoScroll:i?.newsAutoScroll||!1,syncMutedNews:i?.syncMutedNews||!1,gestureSensitivity:i?.gestureSensitivity??1.5,fastClicks:i?.fastClicks??!1})},[i,b,Fe,Le]);const Ae=r=>r===-2&&L?L:r===-1&&z?z:r>=0&&b[r]?b[r]:i?.avatar||b[0],w=r=>{const t={...a,...r};if(xe(t),r.hasOwnProperty("showUpdateTimer")&&Tr(r.showUpdateTimer),!i)return;const n=Ae(t.avatarIndex);$({...i,firstName:t.name,avatar:n,birthDate:`${t.year}-${t.month.toString().padStart(2,"0")}-${t.day.toString().padStart(2,"0")}`,textColor:t.textColor,borderColor:t.borderColor,fontFamily:t.fontFamily,showSeconds:t.showSeconds,dateDisplayMode:t.dateDisplayMode,hour12:t.hour12,voiceActingMode:t.voiceActingMode,showUpdateTimer:t.showUpdateTimer,newsLayout:r.newsLayout||he,newsAutoScroll:r.newsAutoScroll??t.newsAutoScroll,syncMutedNews:r.syncMutedNews??t.syncMutedNews,gestureSensitivity:r.gestureSensitivity??t.gestureSensitivity,fastClicks:r.fastClicks??t.fastClicks})},pe=()=>{Yr(!0),setTimeout(()=>s(),250)},dr=()=>{i&&$(pt),pe()};Array.from({length:31},(r,t)=>t+1);const cr=new Date().getFullYear();Array.from({length:cr-1909+1},(r,t)=>cr-t);const fe=(0,d.useMemo)(()=>{if(!a.day||!a.month||!a.year)return!1;const r=new Date(a.year,a.month-1,a.day);return r.getFullYear()!==parseInt(a.year)||r.getMonth()!==parseInt(a.month)-1||r.getDate()!==parseInt(a.day)},[a.day,a.month,a.year]);(0,d.useMemo)(()=>{const r=a.day?String(a.day).padStart(2,"0"):"",t=a.month?String(a.month).padStart(2,"0"):"",n=a.year?String(a.year):"";return!r||!t||!n||fe?"":`${r}.${t}.${n}`},[a.day,a.month,a.year,fe]),((r,t,n)=>{if(!r||!t||!n)return null;const o=new Date,c=new Date(n,t-1,r);if(isNaN(c.getTime()))return null;let T=o.getFullYear()-c.getFullYear();const W=o.getMonth()-c.getMonth();return(W<0||W===0&&o.getDate()<c.getDate())&&T--,T})(a.day,a.month,a.year);const ge=(r=>{if(!r)return{width:"0%",color:"transparent",label:""};let t=0;return r.length>=6&&t++,r.length>=8&&t++,(/[A-Z]/.test(r)||/[a-z]/.test(r))&&t++,/\d/.test(r)&&t++,/[^A-Za-z0-9]/.test(r)&&t++,t<=2?{width:"33%",color:"#ff4d4d",label:"Слабкий"}:t<=4?{width:"66%",color:"#ffb36c",label:"Середній"}:{width:"100%",color:"#4caf50",label:"Надійний"}})(a.newPassword),ft=()=>{if(m){pe();return}if(fe){alert("Введена некоректна дата!");return}if(!a.day||!a.month||!a.year){alert("Будь ласка, виберіть дату народження!");return}if(a.newPassword){if(a.newPassword!==a.confirmPassword){alert("Нові паролі не збігаються!");return}if(a.newPassword.length<6){alert("Пароль занадто короткий!");return}}const r=Ae(a.avatarIndex);$({account:i?.account||a.name,firstName:a.name,avatar:r,birthDate:`${a.year}-${a.month.toString().padStart(2,"0")}-${a.day.toString().padStart(2,"0")}`,textColor:a.textColor,borderColor:a.borderColor,fontFamily:a.fontFamily,showSeconds:a.showSeconds,dateDisplayMode:a.dateDisplayMode,hour12:a.hour12,voiceActingMode:a.voiceActingMode,showUpdateTimer:a.showUpdateTimer,newsLayout:he,newsAutoScroll:a.newsAutoScroll,syncMutedNews:a.syncMutedNews,gestureSensitivity:a.gestureSensitivity,fastClicks:a.fastClicks,...a.newPassword?{oldPassword:a.oldPassword,newPassword:a.newPassword}:{}}),pe()},gt=r=>{if(r==="image")return;const t=he.map(n=>n.key===r?{...n,visible:!n.visible}:n);ht(t),w({newsLayout:t})},xr=r=>{if(typeof window>"u")return"";const t=r?`/${r}`.replace(/\/+/g,"/"):"/";return`${`${window.location.origin}${window.location.pathname}`.replace(/\/$/,"")}#${t}`},jt=async(r,t)=>{const n=xr(t||r);if(n)try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(n);else{const o=document.createElement("input");o.value=n,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}tr(r),setTimeout(()=>tr(null),1500)}catch(o){console.error("Copy link failed",o)}},Ne=(0,d.useRef)(null),[je,ut]=(0,d.useState)(""),[ue,mt]=(0,d.useState)("library"),[hr,pr]=(0,d.useState)(0),[fr,yt]=(0,d.useState)(0),[bt,me]=(0,d.useState)({}),[ye,gr]=(0,d.useState)(()=>ki()),[be,vt]=(0,d.useState)(()=>{try{return JSON.parse(window.localStorage.getItem("bg_music_downloaded_tracks")||"[]")}catch{return[]}});(0,d.useEffect)(()=>{window.localStorage.setItem("bg_music_downloaded_tracks",JSON.stringify(be)),Si(ye)},[be,ye]),(0,d.useEffect)(()=>{let r;const t=()=>{const n=Y?.current,o=K?.current;let c=n;n&&o&&!o.paused&&o.volume>=n.volume&&(c=o),c&&(pr(c.currentTime||0),yt(c.duration||0)),r=requestAnimationFrame(t)};return t(),()=>cancelAnimationFrame(r)},[Y,K]);const wt=r=>{const t=vi(r.file),n=t||be.some(c=>c.file===r.file&&String(c.id)===String(r.id)),o=ye.includes(String(r.id));return{isBase:t,downloaded:n&&!o,softDeleted:o,available:t||n&&!o}},ve=(r,t)=>{vt(n=>n.some(o=>String(o.id)===String(r)&&o.file===t)?n:[...n,{id:r,file:t,name:""}]),gr(n=>n.filter(o=>String(o)!==String(r)))},kt=async r=>{if(!("caches"in window)){q(r.file),H(r.id),ve(r.id,r.file);return}try{const t=await caches.open(wi);if(await t.match(r.file)){q(r.file),H(r.id),ve(r.id,r.file),me(D=>({...D,[r.id]:100})),gr(D=>D.filter(we=>String(we)!==String(r.id)));return}me(D=>({...D,[r.id]:0}));const n=await fetch(r.file),o=n.body?.getReader(),c=Number(n.headers.get("Content-Length"))||0;let T=0;const W=[];for(;;){const{done:D,value:we}=await o.read();if(D)break;W.push(we),T+=we.length,c>0&&me(zt=>({...zt,[r.id]:Math.min(100,Math.round(T/c*100))}))}const It=new Blob(W);await t.put(r.file,new Response(It,{headers:{"Content-Type":n.headers.get("Content-Type")||"audio/mpeg"}})),q(r.file),H(r.id),ve(r.id,r.file),me(D=>({...D,[r.id]:100}))}catch{q(r.file),H(r.id),ve(r.id,r.file)}},St=(0,d.useMemo)(()=>{let r=pi.map(n=>{const o=vr[n.audio],c=wt({id:n.id,file:o,text:n.text,author:n.author});return{id:n.id,name:n.text?`${n.text} — ${n.author}`:n.author,file:o,image:vr[n.image],...c}});je&&(r=r.filter(n=>n.name.toLowerCase().includes(je.toLowerCase())));const t=r.filter(n=>!Ee.some(o=>o.id===n.id));return[...Ee.map(n=>({id:n.id,name:n.name,file:n.file,image:null,isBase:!0,downloaded:!0,softDeleted:!1,available:!0})),...t].slice(0,28)},[je,be,ye,He]),jr=r=>!r||isNaN(r)?"0:00":`${Math.floor(r/60)}:${Math.floor(r%60).toString().padStart(2,"0")}`,Ct=r=>{const t=r.target.files[0];if(!t||Ne.current===null)return;if(t.size>15728640){alert("Файл занадто великий! Максимум 15 МБ.");return}const n=new Audio(URL.createObjectURL(t));n.onloadedmetadata=()=>{if(n.duration>300){alert("Мелодія занадто довга! Максимум 5 хвилин."),URL.revokeObjectURL(n.src);return}const o=Array.from({length:7},(c,T)=>(ze||[])[T]||null);o[Ne.current]={name:t.name.split(".")[0].substring(0,30),file:t,repeats:1,enabled:!0},Xe(o),q(t),H(null),URL.revokeObjectURL(n.src)}},$t=r=>{const t=Array.from({length:7},(n,o)=>(ze||[])[o]||null);t[r]=null,Xe(t)},Ft=r=>{const t=parseFloat(r.target.value),n=Y?.current,o=K?.current;let c=n;n&&o&&!o.paused&&o.volume>=n.volume&&(c=o),c&&(c.currentTime=t,pr(t))},ur=r=>{Gr(r),Y?.current&&(Y.current.playbackRate=r),K?.current&&(K.current.playbackRate=r)},Tt=[{key:"account",icon:(0,e.jsx)(Me,{}),label:"Обліковий запис",locked:m},{key:"dateTime",icon:(0,e.jsx)(te,{}),label:"Час та дата"},{key:"security",icon:(0,e.jsx)(yr,{}),label:"Безпека",locked:m},{key:"personalization",icon:(0,e.jsx)(re,{}),label:"Персоналізація"},{key:"siteSections",icon:(0,e.jsx)(br,{}),label:"Секції сайту"},{key:"modes",icon:(0,e.jsx)(ke,{}),label:"Режими сайту"},{key:"filters",icon:(0,e.jsx)(ee,{}),label:"Візуальні фільтри"},{key:"bgMusic",icon:(0,e.jsx)(Q,{}),label:"Фонова музика"},{key:"news",icon:(0,e.jsx)(V,{}),label:"Новини"}];return(0,yi.createPortal)((0,e.jsxs)(e.Fragment,{children:[Kr&&(0,e.jsx)(wr,{children:(0,e.jsx)(mi,{onClose:()=>er(!1)})}),(0,e.jsx)(Ti,{$isClosing:Ze,onClick:pe,children:(0,e.jsxs)(Ii,{$isClosing:Ze,onClick:r=>r.stopPropagation(),children:[(0,e.jsxs)(zi,{children:[(0,e.jsx)(Di,{children:(0,e.jsxs)(_i,{children:[!m&&(0,e.jsx)(Pi,{src:Ae(a.avatarIndex),alt:"User avatar"}),(0,e.jsx)("div",{style:{fontSize:"20px",opacity:.5,display:m?"flex":"none"},children:(0,e.jsx)(Me,{})}),(0,e.jsxs)("div",{style:{padding:m?"0 4px":0},children:[(0,e.jsx)(Li,{children:"Параметри"}),(0,e.jsx)(Ai,{children:m?"Гість • Увійдіть для повного доступу":i?.email||i?.account||"Обліковий запис"})]})]})}),(0,e.jsxs)(Ni,{children:[!m&&(0,e.jsxs)(Ui,{onClick:()=>er(!0),children:[(0,e.jsx)(At,{})," Титри"]}),(0,e.jsx)(Mi,{onClick:dr,children:(0,e.jsx)(Jt,{})})]})]}),(0,e.jsxs)(Wi,{children:[(0,e.jsx)(Gi,{children:Tt.map(({key:r,icon:t,label:n,locked:o})=>(0,e.jsxs)(Ri,{$active:F===r,$locked:!!o,onClick:()=>!o&&Hr(r),children:[(0,e.jsx)(Ei,{$active:F===r,$locked:!!o,children:t}),n,o&&(0,e.jsx)(Bi,{children:"🔒"})]},r))}),(0,e.jsxs)(Oi,{children:[F==="account"&&!m&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(Me,{})," Обліковий запис"]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(ee,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Аватарка профілю"}),(0,e.jsx)(g,{children:"Оберіть пресет або завантажте з комп'ютера (1 раз на день)"})]})]}),(0,e.jsxs)(qi,{children:[b.map((r,t)=>(0,e.jsx)(Ce,{$isSelected:a.avatarIndex===t,onClick:()=>w({avatarIndex:t}),children:(0,e.jsx)("img",{src:r,alt:`avatar-${t}`})},t)),z&&(0,e.jsx)(Ce,{$isSelected:a.avatarIndex===-1,onClick:()=>{w({avatarIndex:-1}),m||$({...i,avatar:z})},title:"Google аватарка",children:(0,e.jsx)("img",{src:z,alt:"Google avatar",onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=b[0]}})}),L&&(0,e.jsx)(Ce,{$isSelected:a.avatarIndex===-2,onClick:()=>{w({avatarIndex:-2}),m||$({...i,avatar:L})},title:"Аватарка з комп'ютера",children:(0,e.jsx)("img",{src:L,alt:"Desktop Custom Avatar"})}),(0,e.jsxs)(Ce,{onClick:()=>ir.current?.click(),title:"Завантажити аватарку з комп'ютера (ліміт: 1 раз на день)",style:{background:"rgba(96, 205, 255, 0.12)",border:"1px dashed #60cdff",flexDirection:"column",gap:"2px",color:"#60cdff"},children:[(0,e.jsx)(Se,{style:{fontSize:"16px"}}),(0,e.jsx)("span",{style:{fontSize:"8px",fontWeight:"700"},children:"З пристрою"})]})]}),(0,e.jsx)("input",{ref:ir,type:"file",accept:"image/*",style:{display:"none"},onChange:at}),(0,e.jsxs)("div",{style:{fontSize:"11px",color:"#a0a0a0",marginTop:"4px"},children:["ℹ️ Завантаження з комп'ютера обмежено ",(0,e.jsx)("b",{children:"1 раз на день"}),". Google-аватарка завжди зберігається у списку для повернення."]})]})]}),F==="dateTime"&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(te,{})," Час та дата"]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(te,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Відображення секунд"}),(0,e.jsx)(g,{children:"Показувати секунди (17:23:17)"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:()=>w({showSeconds:!a.showSeconds}),children:[(0,e.jsx)(S,{$checked:a.showSeconds,children:a.showSeconds?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:a.showSeconds})]})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(te,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Формат часу"}),(0,e.jsx)(g,{children:"24-годинний або 12-годинний (AM/PM)"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(kr,{value:a.hour12?"12":"24",onChange:r=>w({hour12:r.target.value==="12"}),children:[(0,e.jsx)("option",{value:"24",children:"24-годинний"}),(0,e.jsx)("option",{value:"12",children:"12-годинний (AM/PM)"})]})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(ti,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Режим відображення"}),(0,e.jsx)(g,{children:"Час, дата або обидва разом"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(kr,{value:a.dateDisplayMode,onChange:r=>w({dateDisplayMode:r.target.value}),children:[(0,e.jsx)("option",{value:"both",children:"Час та Дата разом"}),(0,e.jsx)("option",{value:"time",children:"Тільки Час"}),(0,e.jsx)("option",{value:"date",children:"Тільки Дата"})]})})]})]}),F==="security"&&!m&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(yr,{})," Безпека та переприв'язка акаунту"]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#60cdff",children:(0,e.jsx)(Gt,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Керування прив'язками профілю"}),(0,e.jsx)(g,{children:"Зміна прив'язаного Google-акаунту або пошти"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"4px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)("span",{style:{fontSize:"13px",fontWeight:"600",color:"#ffffff"},children:"Google Акаунт"}),(0,e.jsx)("span",{style:{fontSize:"11px",color:Z?"#60cdff":"#a0a0a0"},children:Z?`✓ Прив'язано (${i?.email||"Google"})`:"Не прив'язано"})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"6px"},children:[(0,e.jsx)(j,{type:"button",onClick:dt,children:Z?"Переприв'язати Google":"Прив'язати Google"}),Z&&(0,e.jsx)(j,{type:"button",$danger:!0,onClick:ct,children:"Відв'язати"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"10px"},children:[(0,e.jsx)("span",{style:{fontSize:"13px",fontWeight:"600",color:"#ffffff"},children:"Зміна прив'язаної пошти"}),(0,e.jsx)("span",{style:{fontSize:"11px",color:"#888"},children:"На нову пошту буде надіслано лист підтвердження. Зміна набере чинності після кліку на посилання у листі."}),(0,e.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,e.jsx)(E,{type:"email",placeholder:"Введіть нову пошту...",value:sr,onChange:r=>{lt(r.target.value),I("")},disabled:Pe}),(0,e.jsx)(j,{type:"button",$primary:!0,onClick:xt,style:{whiteSpace:"nowrap"},disabled:Pe,children:Pe?"⏳...":"Надіслати лист"})]}),O&&(0,e.jsx)("span",{style:{fontSize:"11px",color:O.startsWith("✅")?"#4caf50":O.startsWith("❌")?"#f44336":O.startsWith("⚠️")?"#ffb300":O.startsWith("📝")?"#60cdff":"#a0a0a0",lineHeight:"1.5"},children:O})]})]})]}),!ot&&(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(Rt,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Зміна пароля"}),(0,e.jsx)(g,{children:"Введіть новий пароль для профілю"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"4px"},children:[(0,e.jsx)(E,{type:"password",placeholder:"Новий пароль",value:a.newPassword,onChange:r=>xe({...a,newPassword:r.target.value})}),a.newPassword&&(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,e.jsx)(Hi,{$width:ge.width,$color:ge.color}),(0,e.jsxs)(Yi,{$color:ge.color,children:["Надійність: ",ge.label]})]}),(0,e.jsx)(E,{type:"password",placeholder:"Підтвердіть новий пароль",value:a.confirmPassword,onChange:r=>xe({...a,confirmPassword:r.target.value})})]})]})]}),F==="personalization"&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(re,{})," Персоналізація та інтерфейс"]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(te,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Таймер оновлення погоди"}),(0,e.jsx)(g,{children:"Показувати відлік до наступного оновлення даних"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:()=>w({showUpdateTimer:!a.showUpdateTimer}),children:[(0,e.jsx)(S,{$checked:a.showUpdateTimer,children:a.showUpdateTimer?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:a.showUpdateTimer})]})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(re,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Власний шрифт"}),(0,e.jsx)(g,{children:"Назва шрифту Google Fonts (напр. Roboto)"})]})]}),(0,e.jsx)(y,{style:{minWidth:"200px"},children:(0,e.jsx)(E,{placeholder:"Назва шрифту",value:a.fontFamily,onChange:r=>w({fontFamily:r.target.value})})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(Ut,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Чутливість жестів"}),(0,e.jsxs)(g,{children:["Свайпи та слайдери: ",a.gestureSensitivity,"x"]})]})]}),(0,e.jsx)(y,{style:{minWidth:"160px"},children:(0,e.jsx)(R,{type:"range",min:"0.5",max:"3",step:"0.1",value:a.gestureSensitivity,onChange:r=>w({gestureSensitivity:parseFloat(r.target.value)})})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(re,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Швидкий відгук на кліки"}),(0,e.jsx)(g,{children:"Миттєвий відгук без затримок"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:()=>w({fastClicks:!a.fastClicks}),children:[(0,e.jsx)(S,{$checked:a.fastClicks,children:a.fastClicks?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:a.fastClicks})]})})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(ee,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Дзеркальність сайту"}),(0,e.jsx)(g,{children:"Скидається після перезавантаження сторінки"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"По горизонталі (ліво ↔ право)"}),(0,e.jsxs)(k,{onClick:()=>lr(!U),children:[(0,e.jsx)(S,{$checked:U,children:U?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:U})]})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"По вертикалі (верх ↕ низ)"}),(0,e.jsxs)(k,{onClick:()=>or(!M),children:[(0,e.jsx)(S,{$checked:M,children:M?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:M})]})]}),(U||M)&&(0,e.jsx)(j,{$danger:!0,style:{alignSelf:"flex-start",marginTop:"4px"},onClick:()=>{lr(!1),or(!1)},children:"Скинути дзеркальність"})]})]})]}),F==="siteSections"&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(br,{})," Навігація та секції сайту"]}),se&&se.map((r,t)=>{const n=Oe?.includes(r.key),o=zr?.[r.key]??ne,c=xr(r.path||r.key);return(0,e.jsx)(v,{children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"},children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#60cdff",children:(0,e.jsx)(mr,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:r.label}),(0,e.jsx)(g,{style:{fontSize:"11px",wordBreak:"break-all"},children:c})]})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(j,{onClick:()=>jt(r.key,r.path),style:{padding:"4px 8px",fontSize:"12px"},children:nt===r.key?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Vt,{style:{color:"#4caf50"}})," Скопійовано"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ot,{})," Посилання"]})}),(0,e.jsx)(A,{onClick:()=>_r(r.key),title:"Змінити тему секції",children:o?(0,e.jsx)(We,{style:{fontSize:"13px"}}):(0,e.jsx)(Ue,{style:{fontSize:"13px",color:"#ffb36c"}})}),(0,e.jsx)(A,{onClick:()=>Dr(r.key),disabled:!n&&se.length-(Oe?.length||0)<=2,title:n?"Показати секцію":"Приховати секцію",children:n?(0,e.jsx)(Lt,{style:{color:"#ff6b6b"}}):(0,e.jsx)(Nt,{style:{color:"#60cdff"}})}),r.key!=="hero"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(A,{disabled:t<=1,onClick:()=>Be(t,-1),title:"Підняти",children:(0,e.jsx)(ci,{})}),(0,e.jsx)(A,{disabled:t===se.length-1,onClick:()=>Be(t,1),title:"Опустити",children:(0,e.jsx)(oi,{})})]})]})]})},r.key)}),(0,e.jsxs)("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[(0,e.jsx)(j,{onClick:Pr,style:{flex:1},children:"Скинути теми секцій"}),(0,e.jsx)(j,{$danger:!0,onClick:Ir,style:{flex:1},children:"Скинути порядок секцій"})]})]}),F==="modes"&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(ke,{})," Режими та швидкість сайту"]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#ffb36c",children:N?(0,e.jsx)(ri,{}):(0,e.jsx)(Dt,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:N?"Режим Маршрутизації (Зміна URL)":"Режим Навігації (Плавний скрол)"}),(0,e.jsx)(g,{children:N?"Переходи змінюють посилання сторінки":"Переходи плавно прокручують екрани"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:()=>Lr(!N),children:[(0,e.jsx)(S,{$checked:N,children:N?"Маршрути":"Скрол"}),(0,e.jsx)(C,{$checked:N})]})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#ffb36c",children:ne?(0,e.jsx)(We,{}):(0,e.jsx)(Ue,{style:{color:"#ffb36c"}})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Головна тема сайту"}),(0,e.jsx)(g,{children:ne?"Темна тема активна":"Світла тема активна"})]})]}),(0,e.jsx)(y,{children:(0,e.jsx)(j,{onClick:Fr,children:ne?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(We,{})," Темна"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ue,{style:{color:"#ffb36c"}})," Світла"]})})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#60cdff",children:(0,e.jsx)(mr,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Липкий фоновий ефект"}),(0,e.jsx)(g,{children:"Закріплення заднього плану при скролі"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:Nr,children:[(0,e.jsx)(S,{$checked:Te,children:Te?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:Te})]})})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#60cdff",children:(0,e.jsx)(ke,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Стратегія завантаження ресурсів"}),(0,e.jsx)(g,{children:"Оптимізація швидкості запуску та економія трафіку"})]})]}),(0,e.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"4px"},children:[{key:"eager",label:"Повний",desc:"Завантажує все відразу при старті"},{key:"delayed",label:"Оптимальний",desc:"Завантажує важкі модулі через 8 сек"},{key:"lazy",label:"Економний",desc:"Завантажує тільки за потребою"}].map(({key:r,label:t})=>(0,e.jsx)(j,{onClick:()=>Ar(r),style:{flex:1,minWidth:"120px",background:qe===r?"rgba(96,205,255,0.15)":void 0,borderColor:qe===r?"#60cdff":void 0},children:t},r))})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#a78bfa",children:(0,e.jsx)(Zt,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Режим Декоратора (CSS Редактор)"}),(0,e.jsx)(g,{children:"Візуальне редагування стилів елементів сторінки"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"Увімкнути режим Декоратора"}),(0,e.jsxs)(k,{onClick:()=>Xr(!X),children:[(0,e.jsx)(S,{$checked:X,children:X?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:X})]})]}),X&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:"Зберігати зміни після оновлення"}),(0,e.jsxs)(k,{onClick:()=>Vr(!ce),children:[(0,e.jsx)(S,{$checked:ce,children:ce?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:ce})]})]}),(0,e.jsxs)("div",{style:{fontSize:"12px",fontWeight:"600",color:"#60cdff",marginTop:"4px"},children:["Журнал змін (",de.length,")"]}),de.length>0?(0,e.jsx)("div",{style:{maxHeight:"140px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"4px"},children:de.map(r=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.04)",padding:"4px 8px",borderRadius:"4px",fontSize:"11px"},children:[(0,e.jsxs)("span",{children:[(0,e.jsx)("b",{style:{color:"#60cdff"},children:r.tagName})," ",r.property,": ",r.newValue]}),(0,e.jsx)(j,{style:{padding:"2px 6px",fontSize:"10px"},onClick:()=>Jr(r.id),children:"Відмінити"})]},r.id))}):(0,e.jsx)("span",{style:{fontSize:"11px",color:"#777",fontStyle:"italic"},children:"Змін ще немає"}),de.length>0&&(0,e.jsx)(j,{$danger:!0,onClick:Zr,style:{alignSelf:"flex-start"},children:"Скинути всі зміни Декоратора"})]})]})]})]}),F==="filters"&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(ee,{})," Візуальні фільтри та пресети"]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#ffb36c",children:(0,e.jsx)(Et,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Зменшення яскравості / Затемнення"}),(0,e.jsxs)(g,{children:["Інтенсивність: ",B.darkIntensity||0,"%"]})]})]}),(0,e.jsx)(y,{style:{minWidth:"180px"},children:(0,e.jsx)(R,{type:"range",min:"0",max:"100",value:B.darkIntensity||0,onChange:r=>J(t=>({...t,darkIntensity:Number(r.target.value)}))})})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#ffb36c",children:(0,e.jsx)(ee,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Кольорові та зорові фільтри"}),(0,e.jsx)(g,{children:"Оберіть ефект для оформлення сторінки"})]})]}),(0,e.jsx)(cn,{style:{marginTop:"4px"},children:hi.map(r=>(0,e.jsx)(Re,{$active:B.filterType===r.id,onClick:()=>J(t=>({...t,filterType:r.id})),children:r.label},r.id))})]}),B.filterType!=="none"&&(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#ffb36c",children:(0,e.jsx)(re,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Сила ефекту фільтра"}),(0,e.jsxs)(g,{children:["Інтенсивність: ",B.filterIntensity||50,"%"]})]})]}),(0,e.jsx)(y,{style:{minWidth:"180px"},children:(0,e.jsx)(R,{type:"range",min:"0",max:"100",value:B.filterIntensity||50,onChange:r=>J(t=>({...t,filterIntensity:Number(r.target.value)}))})})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#ffb36c",children:(0,e.jsx)(ke,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Швидкі стилі та пресети"}),(0,e.jsx)(g,{children:"Готові комбінації та створення власних"})]})]}),(0,e.jsxs)(xn,{style:{marginTop:"4px"},children:[fi.map(r=>(0,e.jsx)(Re,{onClick:()=>J(r.config),children:r.label},r.id)),et.map(r=>(0,e.jsxs)(hn,{children:[(0,e.jsx)(Re,{style:{border:"none",flex:1,padding:"2px"},onClick:()=>J(r.config),children:r.label}),(0,e.jsx)(A,{onClick:()=>{const t=window.prompt("Нова назва пресета:",r.label.replace("✨ ",""));t&&it(r.id,t)},title:"Перейменувати",style:{width:22,height:22,fontSize:10},children:"✎"}),(0,e.jsx)(A,{$danger:!0,onClick:()=>tt(r.id),title:"Видалити",style:{width:22,height:22,fontSize:10},children:"×"})]},r.id))]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[(0,e.jsx)(E,{placeholder:"Назва нового пресета...",value:De,onChange:r=>rr(r.target.value),maxLength:15}),(0,e.jsx)(j,{onClick:()=>{De.trim()&&(rt(De),rr(""))},children:"Зберегти"})]})]}),(0,e.jsxs)(j,{$danger:!0,onClick:Qr,style:{alignSelf:"flex-start",marginTop:"4px"},children:[(0,e.jsx)(xi,{})," Скинути всі фільтри"]})]}),F==="bgMusic"&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(Q,{})," Фонова музика"]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#a78bfa",children:(0,e.jsx)(Q,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Фонова музика"}),(0,e.jsx)(g,{children:"Вмикайте приємну музику під час використання сайту"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:()=>Ur(!ae),children:[(0,e.jsx)(S,{$checked:ae,children:ae?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:ae})]})})]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#a78bfa",children:(0,e.jsx)(Qt,{style:{fontSize:"18px"}})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Авто-заглушення"}),(0,e.jsx)(g,{children:"Зменшувати гучність фонової музики під час відтворення відео/треку"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:()=>Mr(!le),children:[(0,e.jsx)(S,{$checked:le,children:le?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:le})]})})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#a78bfa",children:(0,e.jsx)(Kt,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Гучність та швидкість"}),(0,e.jsx)(g,{children:"Налаштування відтворення фону та звукових ефектів"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"4px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,e.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Гучність: ",Math.round(Ye*100),"%"]}),(0,e.jsx)(R,{type:"range",min:"0",max:"1",step:"0.01",value:Ye,onChange:r=>Wr(parseFloat(r.target.value)),style:{flex:1}})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,e.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Швидкість: ",oe,"x"]}),(0,e.jsx)(R,{type:"range",min:"0.5",max:"2",step:"0.05",value:oe,onChange:r=>ur(parseFloat(r.target.value)),style:{flex:1}}),(0,e.jsx)("div",{style:{display:"flex",gap:"4px"},children:[.75,1,1.25,1.5,2].map(r=>(0,e.jsxs)(j,{onClick:()=>ur(r),style:{padding:"2px 6px",fontSize:"11px",background:oe===r?"rgba(96,205,255,0.2)":void 0,borderColor:oe===r?"#60cdff":void 0},children:[r,"x"]},r))})]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,e.jsxs)("span",{style:{fontSize:"12px",color:"#a0a0a0",minWidth:"90px"},children:["Гучність SFX: ",Math.round(Je*100),"%"]}),(0,e.jsx)(R,{type:"range",min:"0",max:"1",step:"0.01",value:Je,onChange:r=>qr(parseFloat(r.target.value)),style:{flex:1}})]})]})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#a78bfa",children:(0,e.jsx)(qt,{style:{fontSize:"18px"}})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Режим відтворення"}),(0,e.jsxs)(g,{children:["Позиція: ",jr(hr)," / ",jr(fr)]})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:[(0,e.jsx)(R,{type:"range",min:"0",max:fr||100,step:"0.1",value:hr,onChange:Ft}),(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[["loop","order"].map(r=>(0,e.jsxs)(j,{onClick:()=>Rr(r),style:{background:Ke===r?"rgba(96,205,255,0.15)":void 0,borderColor:Ke===r?"#60cdff":void 0},children:[(0,e.jsx)(Bt,{})," ",r==="loop"?"Повтор":"Порядок"]},r)),(0,e.jsxs)(j,{onClick:()=>Er(!Ie),style:{background:Ie?"rgba(167,139,250,0.15)":void 0,borderColor:Ie?"#a78bfa":void 0},children:[(0,e.jsx)(Ht,{})," Перемішати"]}),(0,e.jsx)(j,{onClick:Or,children:"Скинути позицію"})]})]})]}),(0,e.jsx)("div",{style:{display:"flex",gap:"4px",padding:"4px 0"},children:["library","custom"].map(r=>(0,e.jsx)(j,{onClick:()=>mt(r),style:{background:ue===r?"rgba(96,205,255,0.15)":void 0,borderColor:ue===r?"#60cdff":void 0},children:r==="library"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ii,{})," Бібліотека"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Se,{})," Власні треки"]})},r))}),ue==="library"&&(0,e.jsxs)(v,{children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[(0,e.jsx)(_t,{style:{color:"#a0a0a0"}}),(0,e.jsx)(E,{placeholder:"Пошук треку...",value:je,onChange:r=>ut(r.target.value),style:{maxWidth:"280px"}})]}),(0,e.jsx)(Vi,{children:St.map(r=>{const t=He===r.file||Br===r.id,n=bt[r.id],o=n!==void 0&&n<100;return(0,e.jsxs)(Qi,{$active:t,onClick:()=>kt(r),children:[r.image?(0,e.jsx)(en,{src:r.image,alt:r.name}):(0,e.jsx)("div",{style:{width:32,height:32,background:"rgba(167,139,250,0.1)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(Q,{style:{color:"#a78bfa",fontSize:"14px"}})}),(0,e.jsxs)(rn,{children:[(0,e.jsx)(tn,{children:r.name}),(0,e.jsx)(nn,{children:o?`Завантаження ${n}%...`:r.available?"✓ Доступний":"↓ Клікніть для завантаження"})]}),t&&(0,e.jsx)(an,{})]},r.id)})})]}),ue==="custom"&&(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{$color:"#a78bfa",children:(0,e.jsx)(Se,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Власні треки (до 7 слотів)"}),(0,e.jsx)(g,{children:"MP3/WAV до 15 МБ та 5 хвилин"})]})]}),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"4px"},children:Array.from({length:7},(r,t)=>(ze||[])[t]||null).map((r,t)=>(0,e.jsxs)(ln,{$hasFile:!!r?.file,children:[r?.file?(0,e.jsx)("div",{style:{width:28,height:28,background:"rgba(96,205,255,0.1)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(Q,{style:{color:"#60cdff",fontSize:"13px"}})}):(0,e.jsx)("div",{style:{width:28,height:28,background:"rgba(255,255,255,0.04)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)("span",{style:{color:"#555",fontSize:"12px"},children:t+1})}),(0,e.jsx)(on,{children:r?.name||(0,e.jsxs)("span",{style:{color:"#555"},children:["Порожній слот ",t+1]})}),(0,e.jsxs)(dn,{children:[(0,e.jsx)(A,{onClick:()=>{Ne.current=t,fileInputRef.current.click()},title:"Завантажити",children:(0,e.jsx)(Se,{})}),r?.file&&(0,e.jsx)(A,{$danger:!0,onClick:()=>$t(t),title:"Видалити",children:(0,e.jsx)(Wt,{})})]})]},t))}),(0,e.jsx)("input",{ref:fileInputRef,type:"file",accept:"audio/*",style:{display:"none"},onChange:Ct})]})]}),F==="news"&&(0,e.jsxs)(P,{children:[(0,e.jsxs)(_,{children:[(0,e.jsx)(V,{})," Налаштування новин"]}),m?(0,e.jsx)(u,{style:{opacity:.45},children:(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(V,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Синхронізація заглушених новин"}),(0,e.jsx)(g,{children:"🔒 Доступно тільки для зареєстрованих користувачів"})]})]})}):(0,e.jsxs)(u,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(V,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Синхронізація заглушених новин"}),(0,e.jsx)(g,{children:"Синхронізувати приховані новини між усіма пристроями"})]})]}),(0,e.jsx)(y,{children:(0,e.jsxs)(k,{onClick:()=>w({syncMutedNews:!a.syncMutedNews}),children:[(0,e.jsx)(S,{$checked:a.syncMutedNews,children:a.syncMutedNews?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:a.syncMutedNews})]})})]}),(0,e.jsxs)(v,{children:[(0,e.jsxs)(x,{children:[(0,e.jsx)(h,{children:(0,e.jsx)(V,{})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(f,{children:"Видимість елементів новин"}),(0,e.jsx)(g,{children:"Увімкніть або вимкніть частини новинних карток"})]})]}),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"4px"},children:he.filter(r=>r.key!=="image").map(r=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("span",{style:{fontSize:"13px",color:"#e0e0e0"},children:r.key==="title"?"Заголовок новини":"Опис новини"}),(0,e.jsxs)(k,{onClick:()=>gt(r.key),children:[(0,e.jsx)(S,{$checked:r.visible,children:r.visible?"Увімкнуто":"Вимкнуто"}),(0,e.jsx)(C,{$checked:r.visible})]})]},r.key))})]})]})]})]}),(0,e.jsxs)(Ki,{children:[(0,e.jsxs)(Xi,{children:[(0,e.jsx)(ni,{style:{color:"#60cdff"}}),(0,e.jsxs)("span",{children:["Ви погодились з"," ",(0,e.jsx)(Ji,{onClick:()=>Qe(!0),children:"Угодою"})]})]}),(0,e.jsxs)(Zi,{children:[(0,e.jsx)(j,{onClick:dr,children:"Скасувати"}),!m&&(0,e.jsx)(j,{$primary:!0,onClick:ft,disabled:fe,children:"Зберегти"})]})]})]})}),Ve&&(0,e.jsx)(wr,{children:(0,e.jsx)(gi,{isOpen:Ve,onClose:()=>Qe(!1)})})]}),document.body)};export{kn as default};
