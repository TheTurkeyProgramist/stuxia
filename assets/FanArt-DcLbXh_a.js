import{o as Me}from"./rolldown-runtime-BNNRdYrd.js";import{C as At,Ct as Lt,Dr as Te,E as rt,Hr as Et,Kr as l,Or as ot,S as ue,St as Ut,T as Wt,Tt as _t,_ as Bt,_t as Dt,a as Ot,b as Ht,bt as Nt,c as Gt,ci as qt,d as Xt,f as nt,ft as Yt,g as Vt,gt as Qt,h as it,ht as Zt,k as Jt,l as Kt,m as er,mt as tr,o as rr,p as or,pt as nr,qt as ir,s as ar,si as sr,u as lr,v as cr,vt as dr,w as pr,wt as ur,x as fr,xt as xr,y as gr,yt as hr}from"./vendor-react-BrnrJ3qF.js";import{g as br,p as mr}from"./index-gM6wV9Mf.js";var a=Me(sr()),at=Me(Et()),yr=Me(ar()),e=qt(),vr=l.div`
  background-color: ${r=>r.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${r=>r.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${r=>r.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,Fe=({content:r,children:c,placement:p="bottom",isDarkMode:s=!0})=>{const[k,F]=(0,a.useState)(!1),y=(0,a.useRef)(null),{refs:h,floatingStyles:M,context:w}=Zt({open:k,onOpenChange:F,placement:p,strategy:"fixed",transform:!1,whileElementsMounted:_t,middleware:[Lt(8),Ut(),ur({padding:5}),xr({element:y})]}),{isMounted:T,styles:q}=Nt(w,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),N=Dt(w,{move:!1}),P=Qt(w),X=tr(w),C=hr(w,{role:"tooltip"}),{getReferenceProps:ee,getFloatingProps:Y}=dr([N,P,X,C]);if(!r)return c;const A=s?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:h.setReference,...ee(),style:{display:"inline-flex"},children:c}),T&&(0,e.jsx)(nr,{children:(0,e.jsxs)(vr,{ref:h.setFloating,$isDarkMode:s,style:{...M,...q},...Y(),children:[r,(0,e.jsx)(Yt,{ref:y,context:w,fill:A,stroke:"#00acb9",strokeWidth:1})]})})]})},G=r=>{if(r instanceof Blob)return!0;if(typeof r=="object"&&r!==null){const p=r.type||r.mimeType||"";return typeof p=="string"&&p.includes("video/")?!0:G(r.src||r.url||"")}if(typeof r!="string")return!1;const c=r.toLowerCase();return/\.(mp4|webm|ogg|ogv|mov|avi|mkv|3gp)(\?|$)/.test(c)||c.startsWith("data:video/")||c.startsWith("blob:video/")||c.includes("/video/")},wr=l.div`
  display: flex;
  flex-direction: column;
`,jr=l.div`
  font-size: 20px;
  position: relative;
  z-index: 400;
  border-radius: 10px;
  padding: 5px 14px;
  width: 130px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${r=>r.$isDarkMode?"white":"black"};
  margin-bottom: -35px;
  background: ${r=>r.$isDarkMode?"rgba(0, 0, 0, 0.94)":"rgb(255, 255, 255)"};
`,kr=l.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 40px;
  width: 100%;
  padding: 0 12px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  position: relative;
  z-index: 100;
  scroll-padding-left: 12px;
  scroll-padding-right: 12px;

  content-visibility: auto;
  contain-intrinsic-size: auto 220px;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`,Cr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex: 0 0 auto;
  &:hover {
    transform: scale(1.05);
  }
`,Sr=l.div`
  position: relative;
  z-index: 100;
  width: 291px;
  height: 190px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`,$r=l.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${r=>r.$isActive?1:0};
  transition: opacity 1s ease-in-out;
`,Rr=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  font-size: 10px;
  padding: 5px 0;
  font-weight: 600;
  z-index: 2;
  @media (min-width: 768px) {
    font-size: 12px;
  }
    .sentence-case {
  text-transform: lowercase;
}

.sentence-case::first-letter {
  text-transform: uppercase; 
}
`,zr=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
`,Ir=l.div`
  background: ${r=>r.$isDarkMode?"#18181f":"#ffffff"};
  border: 1px solid ${r=>r.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
  padding: 20px;
  border-radius: 24px;
  width: min(95%, 1200px);
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`,Fr=l.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${r=>r.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"};
  flex-shrink: 0;
`,Mr=l.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #e69d52;
  }
`,st=l.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1;
  color: ${r=>r.$isDarkMode?"white":"black"};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #ff6961;
    color: white;
    border-color: #ff6961;
    transform: scale(1.1);
  }
`,Tr=l.h2`
  color: ${r=>r.$isDarkMode?"white":"black"};
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  .sentence-case {
  text-transform: lowercase; 
}

.sentence-case::first-letter {
  text-transform: uppercase; 
}
`,Pr=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 100%;
`,Ar=l(Te.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
`,lt=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`,Lr=l.div`
  position: relative;
  width: 250px;
  height: 170px;
  border-radius: 15px;
  overflow: hidden;

  &:hover .image-overlay {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }
`,Er=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 12px;
  padding: 8px 5px;
  font-weight: bold;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,Ur=l.div`
  position: absolute;
  bottom: 6px;
  left: 2%;
  transform: translateX(-50%) translateY(10px);
  width: calc(100% - 12px);
  max-width: 258px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  padding: 4px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);

  @media (hover: none) {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,m=l.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  padding: 4px 8px;
  min-width: 34px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background: #ffb36c;
    color: #111;
    border-color: #ffb36c;
    transform: scale(1.06);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Re=l.div`
  color: ${r=>r.$isDarkMode?"#ccc":"#555"};
  margin-top: 10px;
`,Wr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  width: 100%;
`;l.input`
  padding: 10px 18px;
  border-radius: 25px;
  border: 1px solid ${r=>r.$isDarkMode?"#555":"#ccc"};
  background: ${r=>r.$isDarkMode?"#2a2a35":"#fff"};
  color: ${r=>r.$isDarkMode?"white":"black"};
  width: 100%;
  max-width: 600px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: #ffb36c;
    box-shadow: 0 0 0 2px rgba(255, 179, 108, 0.2);
  }
`;var _r=l(m)`
  padding: 8px 20px;
  width: auto;
  background: #ffb36c;
  color: #111;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  font-size: 14px;
  &:hover {
    background: #ffa040;
    color: #000;
    transform: translateY(-1px);
  }
`,Br=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`,Dr=l.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
`,ze=l.div`
  display: flex;
  gap: 8px;
  margin-bottom: 5px;
  flex-wrap: wrap;
  justify-content: center;
`,fe=l.button`
  padding: 6px 18px;
  border-radius: 20px;
  border: 1px solid #ffb36c;
  background: ${r=>r.$active?"#ffb36c":"transparent"};
  color: ${r=>r.$active?"black":r.$isDarkMode?"white":"black"};
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
  font-weight: 600;
  &:hover {
    background: ${r=>r.$active?"#ffa040":"rgba(255,179,108,0.2)"};
  }
`,Or=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`,Hr=l.div`
  border: 2px solid #ffb36c;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  canvas {
    max-width: 100%;
  }
  position: relative;
`,Nr=l(Te.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,ct=l.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  font-size: 40px;
  padding: 20px;
  cursor: pointer;
  z-index: 2010;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  ${r=>r.$left?"left: 20px;":"right: 20px;"}
`,Gr=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-bottom: 15px;
`,dt=l.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Ie=l.div`
  background: ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"};
  border-radius: 14px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,qr=l.div`
  display: flex;
  background: ${r=>r.$isDarkMode?"rgba(0, 0, 0, 0.4)":"rgba(0, 0, 0, 0.08)"};
  padding: 4px;
  border-radius: 25px;
  gap: 4px;
  border: 1px solid ${r=>r.$isDarkMode?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"};
`,pt=l.button`
  padding: 8px 22px;
  border-radius: 20px;
  border: none;
  background: ${r=>r.$active?"#ffb36c":"transparent"};
  color: ${r=>r.$active?"#111":r.$isDarkMode?"#eee":"#333"};
  font-weight: ${r=>r.$active?"bold":"600"};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${r=>r.$active?"0 2px 8px rgba(255, 179, 108, 0.4)":"none"};
  &:hover {
    color: ${r=>r.$active?"#000":"#ffb36c"};
  }
`,Xr=l.label`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${r=>r.$isDarkMode?"white":"black"};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 179, 108, 0.2);
    border-color: #ffb36c;
  }
  input {
    display: none;
  }
`,Yr=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  input[type="color"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`,Vr=l.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${r=>r.$color};
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
`,Qr=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,ut="FanArtDB",K="Drafts",Zr=async r=>{const c=indexedDB.open(ut,1);c.onupgradeneeded=p=>p.target.result.createObjectStore(K),c.onsuccess=p=>{p.target.result.transaction(K,"readwrite").objectStore(K).put(r,"currentDraft")}},Jr=()=>new Promise(r=>{const c=indexedDB.open(ut,1);c.onupgradeneeded=p=>p.target.result.createObjectStore(K),c.onsuccess=p=>{const s=p.target.result.transaction(K,"readonly").objectStore(K).get("currentDraft");s.onsuccess=()=>r(s.result)}}),Kr=l.div`
  font-size: 11px;
  color: ${r=>r.$isDarkMode?"#ddd":"#444"};
  text-align: left;
  width: 100%;
`,eo=({src:r})=>{const c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!r||!c.current)return;const p=document.createElement("video");p.src=typeof r=="string"?r:URL.createObjectURL(r),p.crossOrigin="anonymous",p.muted=!0,p.preload="metadata";let s=r instanceof Blob?p.src:null;const k=()=>{s&&URL.revokeObjectURL(s)};return p.onloadedmetadata=()=>{p.currentTime=1},p.onseeked=()=>{c.current&&(c.current.getContext("2d").drawImage(p,0,0,270,170),k())},p.onerror=k,k},[r]),(0,e.jsx)("canvas",{ref:c,width:270,height:170,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},to=({onAddImage:r,isDarkMode:c})=>{const p=(0,a.useRef)(null),[s,k]=(0,a.useState)(null),[F,y]=(0,a.useState)("#ffb36c"),[h,M]=(0,a.useState)(5),[w,T]=(0,a.useState)(!1),[q,N]=(0,a.useState)("sans-serif"),[P,X]=(0,a.useState)({r:1,g:1,b:1,a:1});(0,a.useEffect)(()=>{if(!p.current)return;const u=new Wt(p.current,{width:window.innerWidth<768?300:600,height:400,backgroundColor:"#ffffff",isDrawingMode:!1});Jr().then($=>{$&&u.loadFromJSON($).then(()=>u.renderAll())});const f=setInterval(()=>{Zr(u.toJSON())},5e3);return k(u),()=>{clearInterval(f),u.dispose()}},[]),(0,a.useEffect)(()=>{s&&(s.isDrawingMode=w,w&&(s.freeDrawingBrush||(s.freeDrawingBrush=new At(s)),s.freeDrawingBrush.color=F,s.freeDrawingBrush.width=parseInt(h,10)))},[s,F,h,w]);const C=()=>{if(!s)return;const u=new pr("Ваш текст",{left:100,top:100,fontFamily:q,fill:F});s.add(u),s.setActiveObject(u),s.renderAll()},ee=()=>{if(!s)return;const u=s.getActiveObjects();u.length>0?(u.forEach(f=>s.remove(f)),s.discardActiveObject(),s.renderAll()):alert("Виберіть об'єкт на полотні для видалення.")},Y=()=>{const u=s.getActiveObject();if(!u)return alert("Спочатку виберіть об'єкт (фото) для обрізки");const f=u.getBoundingRect(),$=s.toDataURL({left:f.left,top:f.top,width:f.width,height:f.height,format:"png"});rt.fromURL($).then(ae=>{s.clear(),s.setDimensions({width:f.width,height:f.height}),s.setBackgroundColor("#fff"),s.add(ae),s.renderAll()})},A=u=>{const f=s.getActiveObject();if(!(!f||f.type!=="image")){if(f.filters=[],u==="grayscale"&&f.filters.push(new ue.Grayscale),u==="invert"&&f.filters.push(new ue.Invert),u==="contrast"&&f.filters.push(new ue.Contrast({contrast:.5})),u==="rgba"){const $=[P.r,0,0,0,0,0,P.g,0,0,0,0,0,P.b,0,0,0,0,0,P.a,0];f.filters.push(new ue.ColorMatrix({matrix:$}))}f.applyFilters(),s.renderAll()}},te=u=>{const f=u.target.files[0];if(!f||!s)return;const $=new FileReader;$.onload=ae=>{rt.fromURL(ae.target.result).then(V=>{V.scaleToWidth(s.width*.8),s.add(V),s.centerObject(V),s.setActiveObject(V),s.renderAll()})},$.readAsDataURL(f)},re=()=>{if(!s)return;const u=s.toDataURL({format:"jpeg",quality:.8});r({id:"local-"+Date.now(),previewURL:u,largeImageURL:u,tags:"Власний арт",name:"Власний малюнок",source:"local"})};return(0,e.jsxs)(Or,{children:[(0,e.jsxs)(Gr,{children:[(0,e.jsxs)(qr,{$isDarkMode:c,children:[(0,e.jsx)(pt,{$isDarkMode:c,$active:!w,onClick:()=>T(!1),children:"🖐️ Вибір / Переміщення"}),(0,e.jsx)(pt,{$isDarkMode:c,$active:w,onClick:()=>T(!0),children:"✏️ Малювання пензлем"})]}),(0,e.jsxs)(dt,{children:[(0,e.jsxs)(Ie,{$isDarkMode:c,children:[(0,e.jsx)("span",{style:{fontSize:"15px",color:c?"#ccc":"#444",fontWeight:600},children:"Колір:"}),(0,e.jsx)(Fe,{content:"Натисніть для вибору кольору",isDarkMode:c,children:(0,e.jsxs)(Yr,{"aria-label":"Натисніть для вибору кольору",children:[(0,e.jsx)(Vr,{$color:F}),(0,e.jsx)("input",{type:"color",value:F,onChange:u=>y(u.target.value)})]})}),(0,e.jsxs)("span",{style:{fontSize:"12px",color:c?"#ccc":"#444",fontWeight:600,marginLeft:"6px"},children:["📏 ",h,"px"]}),(0,e.jsx)("input",{type:"range",min:"1",max:"50",value:h,onChange:u=>M(u.target.value),style:{width:"80px",cursor:"pointer"}})]}),(0,e.jsxs)(Ie,{$isDarkMode:c,children:[(0,e.jsxs)(Xr,{$isDarkMode:c,children:["Завантажити фото",(0,e.jsx)("input",{type:"file",accept:"image/*",onChange:te})]}),(0,e.jsxs)("select",{value:q,onChange:u=>N(u.target.value),style:{padding:"6px 10px",borderRadius:"8px",fontSize:"12px",background:c?"rgba(255,255,255,0.1)":"#fff",color:c?"#fff":"#000",border:"1px solid rgba(255,255,255,0.2)",outline:"none",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"sans-serif",children:"Sans-serif"}),(0,e.jsx)("option",{value:"serif",children:"Serif"}),(0,e.jsx)("option",{value:"monospace",children:"Monospace"}),(0,e.jsx)("option",{value:"cursive",children:"Cursive"})]}),(0,e.jsx)(m,{onClick:C,style:{padding:"6px 14px",fontSize:"12px"},children:"Текст"})]}),(0,e.jsxs)(Ie,{$isDarkMode:c,children:[(0,e.jsx)("span",{style:{fontSize:"12px",color:c?"#ccc":"#444",fontWeight:600},children:"Фільтри:"}),(0,e.jsxs)(Qr,{children:[(0,e.jsx)(m,{onClick:()=>A("grayscale"),style:{padding:"4px 10px",fontSize:"11px"},children:"B&W"}),(0,e.jsx)(m,{onClick:()=>A("invert"),style:{padding:"4px 10px",fontSize:"11px"},children:"Neg"}),(0,e.jsx)(m,{onClick:()=>A("rgba"),style:{padding:"4px 10px",fontSize:"11px"},children:"RGBA"})]})]})]}),(0,e.jsxs)(dt,{children:[(0,e.jsx)(Fe,{content:"Видалити виділений елемент",isDarkMode:c,children:(0,e.jsx)(m,{onClick:ee,style:{padding:"7px 16px",fontSize:"13px",background:"rgba(229, 57, 53, 0.85)",borderColor:"#e53935",color:"#fff"},"aria-label":"Видалити виділений елемент",children:"Видалити"})}),(0,e.jsx)(m,{onClick:Y,style:{padding:"7px 16px",fontSize:"13px",background:"rgba(33, 150, 243, 0.85)",borderColor:"#2196f3",color:"#fff"},children:"Обрізати"}),(0,e.jsx)(m,{onClick:()=>s.clear().set("backgroundColor","#fff").renderAll(),style:{padding:"7px 16px",fontSize:"13px"},children:"🗑️ Очистити Все"}),(0,e.jsx)(m,{onClick:()=>window.open("https://jspaint.app","_blank"),style:{padding:"7px 16px",fontSize:"13px",background:"rgba(76, 175, 80, 0.85)",borderColor:"#4caf50"},children:"🚀 JSPaint"}),(0,e.jsx)(m,{onClick:re,style:{padding:"8px 24px",fontSize:"14px",background:"#ffb36c",color:"#111",fontWeight:"bold",borderRadius:"20px",border:"none",boxShadow:"0 4px 15px rgba(255, 179, 108, 0.4)"},children:"💾 Зберегти малюнок"})]})]}),(0,e.jsx)(Hr,{children:(0,e.jsx)("canvas",{ref:p})})]})},ro=a.memo(({category:r,displayImages:c,onClick:p})=>{const s=c.filter(h=>!G(h.src)),k=(s.length>0?s:c).slice(0,2),[F,y]=(0,a.useState)(0);return(0,a.useEffect)(()=>{if(k.length<=1)return;const h=setInterval(()=>{y(M=>(M+1)%k.length)},2500);return()=>clearInterval(h)},[k.length]),(0,e.jsx)(Cr,{onClick:p,children:(0,e.jsxs)(Sr,{children:[k.map((h,M)=>{const w=M===F;return(0,e.jsx)($r,{src:h.src,loading:"lazy",decoding:"async",alt:r,$isActive:w},h.src||M)}),(0,e.jsx)(Rr,{children:r})]})})}),so=({isDarkMode:r,isStickyBgMode:c,user:p,onOpenRegister:s,setHeroBg:k,setCustomHeroBgs:F})=>{const[y,h]=(0,a.useState)([]),[M,w]=(0,a.useState)(!1),[T,q]=(0,a.useState)(""),[N,P]=(0,a.useState)([]),[X,C]=(0,a.useState)("idle"),[ee,Y]=(0,a.useState)(1),[A,te]=(0,a.useState)("pixabay"),[re,u]=(0,a.useState)("search"),[f,$]=(0,a.useState)(12),[ae,V]=(0,a.useState)(!1),[oo,ft]=(0,a.useState)(0),[D,O]=(0,a.useState)(null),[S,se]=(0,a.useState)(null),[R,xe]=(0,a.useState)(null),[ge,Pe]=(0,a.useState)(""),[he,Ae]=(0,a.useState)(""),[be,Le]=(0,a.useState)(5),[le,me]=(0,a.useState)([]),[Ee,Ue]=(0,a.useState)(!1),[L,ye]=(0,a.useState)(null),ve=(0,a.useRef)(null),We=(0,a.useRef)(null),_e=(0,a.useRef)(null),Be=(0,a.useRef)(null),De=(0,a.useRef)(null),we=(0,a.useRef)(null),ce=(0,a.useRef)(null),je=[...mr,...y],Oe=(t=[])=>t;(0,a.useEffect)(()=>{(async()=>{try{const o=await at.default.getItem("fanart_custom_images");o&&h(o)}catch(o){console.error("Failed to load custom images:",o)}finally{w(!0)}})()},[]),(0,a.useEffect)(()=>{M&&at.default.setItem("fanart_custom_images",y)},[y,M]);const[W,He]=(0,a.useState)(null),xt=["Фентезі та Легенди","Природа та Стихії","Темрява та Містика","Ваші зображення"],E=W?Oe(je.filter(t=>t.category===W)):[];(0,a.useEffect)(()=>(W||S!==null||D!==null||R||L?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[W,S,D,R,L]);const ke=(0,a.useCallback)(t=>{D!==null&&(t.key==="Escape"&&O(null),t.key==="ArrowRight"&&O(o=>(o+1)%E.length),t.key==="ArrowLeft"&&O(o=>(o-1+E.length)%E.length))},[D,E.length]);(0,a.useEffect)(()=>(window.addEventListener("keydown",ke),()=>window.removeEventListener("keydown",ke)),[ke]);const gt=()=>{$(t=>t+12)},ht=t=>{if(!p){s();return}const o=document.createElement("a");o.href=t,o.download="fanart.jpg",o.click()},bt=t=>{if(!p){s();return}const o=`
      <html>
        <head>
          <title>Print Fan Art</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: #fff; color: #000; text-align: center; }
            img { max-width: 100%; max-height: 90vh; display: block; margin: 0 auto; }
          </style>
        </head>
        <body>
          <img src="${t}" alt="Fan art" />
        </body>
      </html>
    `,n=document.createElement("iframe");n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",n.srcdoc=o,document.body.appendChild(n),n.onload=()=>{try{n.contentWindow.focus(),n.contentWindow.print()}catch(i){console.error("Print failed:",i)}finally{setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},800)}}},Ne=async(t,o)=>{const n=new Image;if(n.crossOrigin="anonymous",n.src=t,await new Promise((B,J)=>{n.onload=B,n.onerror=J}),n.naturalWidth===0||n.naturalHeight===0)throw new Error("Image has no dimensions");const i=140,d=100,g=document.createElement("canvas");g.width=i,g.height=d;const b=g.getContext("2d");b.drawImage(n,0,0,i,d);const z=b.getImageData(0,0,i,d).data,j=4,I=3,v=.35,_=.4,H=j/i,x=I/d,U=j/2,Se=I/2,oe=[],Q=new nt(4.08,3.08,v),$e=new Bt().makeTranslation(0,0,-.35/2);Q.applyMatrix4($e);const de=[];for(let B=0;B<Q.attributes.position.count;B++)de.push(.5,.5,.5);Q.setAttribute("color",new it(de,3)),oe.push(Q);const ne=new nt(H,x,1);for(let B=0;B<d;B++)for(let J=0;J<i;J++){const pe=(B*i+J)*4,Qe=z[pe]||0,Ze=z[pe+1]||0,Je=z[pe+2]||0;if((z[pe+3]||0)<128)continue;const Ke=v+(1-(Qe+Ze+Je)/765)*_,ie=ne.clone();ie.scale(1,1,Ke);const zt=J*H-U+H/2,It=-(B*x)+Se-x/2,Ft=Ke/2-v;ie.translate(zt,It,Ft);const Mt=Qe/255,Tt=Ze/255,Pt=Je/255,et=[];for(let tt=0;tt<ie.attributes.position.count;tt++)et.push(Mt,Tt,Pt);ie.setAttribute("color",new it(et,3)),oe.push(ie)}const Z=Gt(oe,!1),$t=new gr({vertexColors:!0,roughness:.7,metalness:.02}),Rt=new cr(Z,$t),Ve=new Vt;return Ve.add(Rt),{group:Ve,title:o}},Ge=(0,a.useCallback)(async t=>{let o=null;if(t.traverse(x=>{x.isMesh&&x.geometry&&(o=x.geometry)}),!o)throw new Error("No geometry found for 3MF export");const n=o.attributes.position,i=o.attributes.color;let d=o.getIndex();if(!d){const x=[];for(let U=0;U<n.count;U++)x.push(U);o.setIndex(x),d=o.getIndex()}const g=new Map,b=[],z=[];for(let x=0;x<d.count;x+=3){const U=d.getX(x),Se=d.getX(x+1),oe=d.getX(x+2),Q=Math.round(i.getX(U)*255),$e=Math.round(i.getY(U)*255),de=Math.round(i.getZ(U)*255),ne=`#${Q.toString(16).padStart(2,"0")}${$e.toString(16).padStart(2,"0")}${de.toString(16).padStart(2,"0")}FF`.toUpperCase();let Z=g.get(ne);Z===void 0&&(Z=b.length,g.set(ne,Z),b.push(ne)),z.push(`<triangle v1="${U}" v2="${Se}" v3="${oe}" pid="1" p1="${Z}"/>`)}const j=[];for(let x=0;x<n.count;x++)j.push(`<vertex x="${n.getX(x).toFixed(5)}" y="${n.getY(x).toFixed(5)}" z="${n.getZ(x).toFixed(5)}"/>`);const I=`<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02">
  <resources>
    <m:colorgroup id="1">
      ${b.map(x=>`<m:color color="${x}"/>`).join(`
          `)}
    </m:colorgroup>
    <object id="2" type="model">
      <mesh>
        <vertices>
          ${j.join(`
          `)}
        </vertices>
        <triangles>
          ${z.join(`
          `)}
        </triangles>
      </mesh>
    </object>
  </resources>
  <build>
    <item objectid="2"/>
  </build>
</model>`,v=`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/>
</Types>`,_=`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Target="/3D/3dmodel.model" Id="rel-1" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>`,H=new yr.default;return H.file("[Content_Types].xml",v),H.folder("_rels").file(".rels",_),H.folder("3D").file("3dmodel.model",I),await H.generateAsync({type:"blob",compression:"DEFLATE"})},[]),mt=async(t,o)=>{if(!p){s();return}const n=o?.name||o?.title||"Фанарт";se({imgSrc:t,title:n})},yt=(0,a.useCallback)(async()=>{if(S?.imgSrc)try{const{group:t}=await Ne(S.imgSrc,S.title),o=await Ge(t),n=URL.createObjectURL(o),i=document.createElement("a");i.href=n,i.download=`${S.title.replace(/[^a-zA-Z0-9._-]+/g,"_")||"fanart"}.3mf`,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(n),4e3)}catch(t){console.error("3D export failed:",t),alert("Не вдалося згенерувати 3MF. Спробуйте інше зображення.")}},[S,Ge]);(0,a.useEffect)(()=>{if(!S?.imgSrc||!ve.current)return;const t=ve.current,o=new lr({antialias:!0,alpha:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(t.clientWidth,t.clientHeight),t.innerHTML="",t.appendChild(o.domElement);const n=new fr;n.background=new or(987414);const i=new Ht(35,t.clientWidth/t.clientHeight,.1,100);i.position.set(0,0,6);const d=new Xt(16777215,.9),g=new er(16777215,1.3);g.position.set(3,4,6),n.add(d,g);const b=new Kt(i,o.domElement);b.enableDamping=!0,b.enablePan=!1,b.minDistance=3,b.maxDistance=12,(async()=>{try{const{group:v}=await Ne(S.imgSrc,S.title);v.rotation.x=-.35,v.rotation.y=.4,n.add(v),_e.current=n,Be.current=i,De.current=b,We.current=o,ce.current=v}catch(v){console.error("Preview setup failed:",v)}})();const j=()=>{we.current=requestAnimationFrame(j),ce.current&&(ce.current.rotation.y+=.005),b.update(),o.render(n,i)};j();const I=()=>{const v=t.clientWidth,_=t.clientHeight;o.setSize(v,_),i.aspect=v/_,i.updateProjectionMatrix()};return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I),we.current&&cancelAnimationFrame(we.current),b.dispose(),o.dispose(),t&&(t.innerHTML=""),We.current=null,_e.current=null,Be.current=null,De.current=null,ce.current=null}},[S?.imgSrc,S?.title]),(0,a.useEffect)(()=>{V(!1),ft(0),localStorage.removeItem("fanart_cooldown_end")},[]);const Ce=async t=>{if(!t||t.length<3)return t;try{return(await(await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(t)}`)).json())[0].map(o=>o[0]).join("")}catch(o){return console.error("Translation error:",o),t}},qe=async()=>{if(T.trim()){C("loading"),P([]);try{if(A==="pixabay"){const t=await Ce(T),o=await fetch(`https://pixabay.com/api/?key=50977795-feb18de71b048a02e0c824e54&q=${encodeURIComponent(t)}&image_type=photo&per_page=12&page=1`);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=await o.json();n.hits&&n.hits.length>0?(P(n.hits.map(i=>({id:i.id,previewURL:i.previewURL,largeImageURL:i.largeImageURL,tags:i.tags,name:i.tags,source:"pixabay"}))),Y(1),C("idle")):C("no-results")}else{const t=await Ce(T),o=await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(t)}`);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=(await o.json()).filter(d=>d.show&&d.show.image);if(n.length===0){C("no-results");return}const i=await Promise.all(n.slice(0,10).map(async d=>{const g=await fetch(`https://api.tvmaze.com/shows/${d.show.id}/cast`),b=g.ok?await g.json():[];return{id:d.show.id,name:d.show.name,previewURL:d.show.image.medium,largeImageURL:d.show.image.original,summary:d.show.summary?.replace(/<[^>]*>?/gm,""),cast:b.slice(0,4).map(z=>z.person.name).join(", "),url:d.show.url,source:"tvmaze"}}));P(i),C("idle")}}catch(t){console.error("Error searching:",t),C("error")}}},vt=async()=>{if(A!=="pixabay"||!T.trim())return;C("loading");const t=ee+1;try{const o=await Ce(T),n=await fetch(`https://pixabay.com/api/?key=50977795-feb18de71b048a02e0c824e54&q=${encodeURIComponent(o)}&image_type=photo&per_page=12&page=${t}`);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();if(i.hits&&i.hits.length>0){const d=i.hits.map(g=>({id:g.id,previewURL:g.previewURL,largeImageURL:g.largeImageURL,tags:g.tags,source:"pixabay"}));P(g=>[...g,...d]),Y(t),C("idle")}else alert("Більше зображень не знайдено."),C("idle")}catch(o){console.error("Error loading more from Pixabay:",o),C("error")}},Xe=t=>{if(y.length>=3)return alert("Можна додати не більше 3 картинок.");if(y.some(n=>n.id===t.id))return alert("Це зображення вже додано.");const o={id:t.id,src:t.previewURL,largeSrc:t.largeImageURL||t.previewURL,category:"Ваші зображення",summary:t.summary,cast:t.cast,title:t.name,url:t.url};h([...y,o])},wt=(0,a.useCallback)(async()=>{if(!R?.src)return;const t=parseFloat(ge)||R.start||0,o=parseFloat(he);if(isNaN(o)||o<=t){alert("Кінець має бути пізніше за початок");return}const n=Math.min(Math.max(1,parseInt(be)||1),20);Ue(!0);try{const i=document.createElement("video");i.src=R.src,i.crossOrigin="anonymous",i.muted=!0,i.preload="metadata",await new Promise((j,I)=>{i.onloadedmetadata=j,i.onerror=I,setTimeout(j,5e3)});const d=document.createElement("canvas");d.width=270,d.height=170;const g=d.getContext("2d"),b=[],z=n===1?0:(o-t)/(n-1);for(let j=0;j<n;j++){const I=t+j*z;await new Promise(v=>{i.currentTime=I,i.onseeked=()=>{g.drawImage(i,0,0,d.width,d.height);const _=d.toDataURL("image/jpeg",.8);b.push({id:`frame-${Date.now()}-${j}`,src:_,largeSrc:_,category:R.category||"Ваші зображення",name:`${R.name} — ${I.toFixed(1)}с`,author:R.author||"",source:R.source||""}),v()}})}me(b)}catch(i){console.error("Помилка витягування кадрів:",i),alert("Не вдалося витягнути кадри. Спробуйте інше відео.")}finally{Ue(!1)}},[R,ge,he,be]),jt=t=>{if(y.length>=3)return alert("Можна додати не більше 3 картинок.");y.some(o=>o.id===t.id)||h(o=>[...o,t])},kt=()=>{const t=3-y.length;if(t<=0)return alert("Можна додати не більше 3 картинок.");const o=le.filter(n=>!y.some(i=>i.id===n.id)).slice(0,t);h(n=>[...n,...o])},Ct=t=>{He(t),$(12)},Ye=()=>{He(null)},St=t=>{h(o=>o.filter(n=>n.id!==t))};return(0,e.jsxs)(wr,{children:[(0,e.jsx)(jr,{$isStickyBgMode:c,$isDarkMode:r,children:"Друкарня"}),(0,e.jsx)(kr,{children:xt.map(t=>{const o=je.filter(i=>i.category===t);if(o.length===0&&t!=="Ваші зображення")return null;const n=o.length>0?o:[{src:br,category:"Ваші зображення"}];return(0,e.jsx)(ro,{category:t,displayImages:n,onClick:()=>Ct(t)},t)})}),W&&(0,e.jsx)(zr,{onClick:Ye,children:(0,e.jsxs)(Ir,{$isDarkMode:r,onClick:t=>t.stopPropagation(),children:[(0,e.jsxs)(Fr,{$isDarkMode:r,children:[(0,e.jsxs)(Tr,{$isDarkMode:r,children:["Плейлист: ",W]}),(0,e.jsx)(st,{$isDarkMode:r,onClick:Ye,children:"×"})]}),(0,e.jsxs)(Mr,{children:[W==="Ваші зображення"&&(0,e.jsxs)(Wr,{children:[(0,e.jsx)("p",{style:{color:r?"#ccc":"#555",marginBottom:"10px",fontSize:"13px",textAlign:"center"},children:"Створіть свій шедевр або знайдіть готовий (макс. 3)"}),(0,e.jsxs)(ze,{children:[(0,e.jsx)(fe,{$isDarkMode:r,$active:re==="search",onClick:()=>u("search"),children:"Пошук"}),(0,e.jsx)(fe,{$isDarkMode:r,$active:re==="editor",onClick:()=>u("editor"),children:"Редактор та Файли"})]}),re==="search"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(ze,{children:[(0,e.jsx)(fe,{$isDarkMode:r,$active:A==="pixabay",onClick:()=>te("pixabay"),children:"Pixabay"}),(0,e.jsx)(fe,{$isDarkMode:r,$active:A==="tvmaze",onClick:()=>te("tvmaze"),children:"TVMaze (Кіно)"})]}),(0,e.jsx)(ze,{children:(0,e.jsxs)("div",{style:{position:"relative",display:"flex",alignItems:"center",width:"100%",maxWidth:"400px"},children:[(0,e.jsx)("input",{type:"text",placeholder:"Пошук зображень.",value:T,onChange:t=>q(t.target.value),onKeyDown:t=>t.key==="Enter"&&qe(),style:{width:"100%",padding:"10px 90px 10px 14px",borderRadius:"8px",border:`1px solid ${r?"#444":"#ccc"}`,backgroundColor:r?"#1e1e1e":"#fff",color:r?"#fff":"#000",fontSize:"14px",outline:"none"}}),(0,e.jsx)("button",{type:"button",onClick:qe,style:{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",padding:"6px 14px",border:"none",borderRadius:"6px",backgroundColor:"#007bff",color:"#fff",fontSize:"14px",cursor:"pointer"},children:"Знайти"})]})}),X==="loading"&&(0,e.jsx)(Re,{$isDarkMode:r,children:"Завантаження..."}),X==="no-results"&&(0,e.jsx)(Re,{$isDarkMode:r,children:"Зображень за вашим запитом не знайдено."}),X==="error"&&(0,e.jsx)(Re,{$isDarkMode:r,children:"Помилка пошуку. Спробуйте пізніше."}),N.length>0&&A==="pixabay"&&(0,e.jsx)(_r,{type:"button",onClick:vt,style:{marginTop:"10px"},children:"Завантажити ще"}),N.length>0&&(0,e.jsx)(Br,{children:N.map(t=>(0,e.jsxs)(Dr,{onClick:()=>Xe(t),children:[(0,e.jsx)(lt,{src:t.previewURL,alt:t.name||t.tags,style:{width:"100px",height:"100px"}}),(0,e.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:"10px",textAlign:"center",padding:"2px"},children:"+ Додати"})]},t.id))})]}):(0,e.jsx)(to,{onAddImage:Xe,isDarkMode:r})]}),(0,e.jsx)(Pr,{children:(0,e.jsx)(ot,{children:Oe(je.filter(t=>t.category===W)).slice(0,f).map((t,o)=>(0,e.jsxs)(Ar,{layout:!0,initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.5,y:50},transition:{duration:.3},children:[(0,e.jsxs)(Lr,{children:[(0,e.jsx)(lt,{src:G(t.src)?"":t.src,alt:`Fan art - ${t.category}`,onClick:()=>O(o),style:{cursor:"zoom-in",display:G(t.src)?"none":"block"}}),G(t.src)&&(0,e.jsx)(eo,{src:t.src}),(0,e.jsxs)(Er,{className:"image-overlay",children:[t.author&&(0,e.jsx)("div",{children:t.author}),t.source&&(0,e.jsx)("div",{style:{fontSize:"10px",fontWeight:"normal"},children:t.source}),(0,e.jsx)("div",{children:t.name||t.title||"Арт"})]}),(0,e.jsxs)(Ur,{className:"image-overlay",children:[G(t.src)&&(0,e.jsx)(m,{onClick:n=>{n.stopPropagation(),me([]),Pe(String(t.start??0)),Ae(String(t.end??"")),Le(5),xe(t)},title:"Дістати кадри",children:(0,e.jsx)(rr,{})}),t.description&&(0,e.jsx)(m,{onClick:n=>{n.stopPropagation(),ye({name:t.name,text:t.description})},title:"Опис картини",style:{background:"#1a3a5c"},children:"?"}),(0,e.jsx)(m,{onClick:()=>ht(t.src),title:"Скачати",children:(0,e.jsx)(Ot,{})}),(0,e.jsx)(m,{onClick:n=>{n.stopPropagation(),bt(t.src)},title:"Роздрукувати",children:(0,e.jsx)(ir,{})}),(0,e.jsx)(m,{onClick:n=>{n.stopPropagation(),mt(t.src,t)},title:"3D-друк (плоский друк, тверда картина)",children:"3D"}),(0,e.jsx)(m,{onClick:n=>{n.stopPropagation(),k(t.src),F(i=>i.some(d=>d.src===t.src)?i:[{src:t.src,name:t.title||"Фанарт"},...i])},title:"Встановити на шпалери",style:{color:"white"},children:(0,e.jsx)(Jt,{})}),W==="Ваші зображення"&&(0,e.jsx)(Fe,{content:"Видалити зображення",isDarkMode:r,children:(0,e.jsx)(m,{onClick:()=>St(t.id),"aria-label":"Видалити зображення",style:{background:"#ff6961"}})})]})]}),t.summary&&(0,e.jsxs)(Kr,{$isDarkMode:r,children:[(0,e.jsx)("p",{style:{fontWeight:"bold",margin:"0 0 5px 0"},children:t.title}),(0,e.jsxs)("p",{style:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",margin:0},children:[(0,e.jsx)("b",{children:"Сюжет:"})," ",t.summary]}),(0,e.jsxs)("p",{style:{margin:"5px 0 0 0"},children:[(0,e.jsx)("b",{children:"Актори:"})," ",t.cast||"Не вказано"]}),t.url&&(0,e.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",style:{color:"#ffb36c",fontSize:"10px",textDecoration:"underline",display:"block",marginTop:"5px"},children:"Оригінальний сайт"})]})]},t.id||t.src))})}),E.length>f&&(0,e.jsx)(m,{onClick:gt,style:{marginTop:"20px",width:"auto"},children:"Завантажити ще"})]})]})}),S&&(0,e.jsx)("div",{onClick:()=>se(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,zIndex:2e3},children:(0,e.jsxs)("div",{onClick:t=>t.stopPropagation(),style:{width:"min(100%, 980px)",background:"#121212",border:"1px solid #ffb36c",borderRadius:18,padding:16,color:"white",display:"flex",flexDirection:"column",gap:12},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsxs)("h3",{style:{margin:0},children:["3D-preview: ",S.title]}),(0,e.jsx)("button",{onClick:()=>se(null),style:{background:"transparent",border:"none",color:"white",fontSize:24,cursor:"pointer"},children:"×"})]}),(0,e.jsx)("div",{ref:ve,style:{width:"100%",height:"min(65vh, 520px)",borderRadius:12,overflow:"hidden",background:"linear-gradient(135deg, #1b1b1b, #080808)",border:"1px solid rgba(255, 179, 108, 0.3)"}}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"},children:[(0,e.jsx)("button",{onClick:yt,style:{background:"#ffb36c",color:"#111",border:"none",borderRadius:999,padding:"8px 14px",fontWeight:700,cursor:"pointer"},children:"Завантажити 3MF (з кольорами)"}),(0,e.jsx)("button",{onClick:()=>se(null),style:{background:"#ffb36c",color:"#111",border:"none",borderRadius:999,padding:"8px 14px",fontWeight:700,cursor:"pointer"},children:"Закрити"})]})]})}),R&&(0,e.jsx)("div",{onClick:()=>xe(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:2100},children:(0,e.jsxs)("div",{onClick:t=>t.stopPropagation(),style:{background:"#111",border:"1px solid #ffb36c",borderRadius:16,padding:18,width:"min(100%, 700px)",color:"#fff",display:"flex",flexDirection:"column",gap:12,maxHeight:"90vh",overflowY:"auto"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsxs)("h3",{style:{margin:0,color:"#ffb36c"},children:["🎥 ",R.name]}),(0,e.jsx)("button",{onClick:()=>{xe(null),me([])},style:{background:"transparent",border:"none",color:"#fff",fontSize:22,cursor:"pointer"},children:"×"})]}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10},children:[(0,e.jsxs)("label",{style:{fontSize:12},children:["Початок (сек)",(0,e.jsx)("input",{type:"number",min:"0",step:"0.5",value:ge,onChange:t=>Pe(t.target.value),style:{width:"100%",marginTop:4,padding:"4px 8px",borderRadius:6,background:"#222",border:"1px solid #ffb36c",color:"#fff"}})]}),(0,e.jsxs)("label",{style:{fontSize:12},children:["Кінець (сек, > початок)",(0,e.jsx)("input",{type:"number",min:"0",step:"0.5",value:he,onChange:t=>Ae(t.target.value),style:{width:"100%",marginTop:4,padding:"4px 8px",borderRadius:6,background:"#222",border:"1px solid #ffb36c",color:"#fff"}})]}),(0,e.jsxs)("label",{style:{fontSize:12},children:["Кількість кадрів (1-20)",(0,e.jsx)("input",{type:"number",min:"1",max:"20",value:be,onChange:t=>Le(t.target.value),style:{width:"100%",marginTop:4,padding:"4px 8px",borderRadius:6,background:"#222",border:"1px solid #ffb36c",color:"#fff"}})]})]}),(0,e.jsx)("button",{onClick:wt,disabled:Ee,style:{background:"#ffb36c",color:"#111",border:"none",borderRadius:8,padding:"8px 18px",fontWeight:700,cursor:"pointer",fontSize:14},children:Ee?"Завантажують...":"📥 Дістати кадри"}),le.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsxs)("span",{style:{fontSize:13,color:"#ffb36c"},children:["Дістало кадрів: ",le.length]}),(0,e.jsx)("button",{onClick:kt,style:{background:"#2196f3",color:"#fff",border:"none",borderRadius:6,padding:"5px 12px",fontWeight:700,cursor:"pointer",fontSize:12},children:"+ Додати всі"})]}),(0,e.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:le.map((t,o)=>(0,e.jsxs)("div",{style:{position:"relative",borderRadius:8,overflow:"hidden",cursor:"pointer"},onClick:()=>jt(t),children:[(0,e.jsx)("img",{src:t.src,alt:`Кадр ${o+1}`,style:{width:135,height:85,objectFit:"cover",display:"block"}}),(0,e.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.6)",fontSize:10,color:"#fff",textAlign:"center",padding:2},children:"+ Додати"})]},o))})]})]})}),L&&(0,e.jsx)("div",{onClick:()=>ye(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px"},children:(0,e.jsxs)("div",{onClick:t=>t.stopPropagation(),style:{background:"#111",border:"2px solid #ffb36c",borderRadius:"14px",width:"90%",maxWidth:"900px",height:"80vh",maxHeight:"650px",color:"#fff",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 50px rgba(0,0,0,0.9)"},children:[G(L.src)?(0,e.jsx)("video",{src:L.src,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}):(0,e.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${L.src})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:1}}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",zIndex:2}}),(0,e.jsxs)("div",{style:{position:"relative",zIndex:3,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",padding:"30px",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[(0,e.jsx)("h3",{style:{color:"#ffb36c",margin:0,fontSize:"24px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.9)"},children:L.name}),(0,e.jsx)("button",{onClick:()=>ye(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"36px",height:"36px",color:"#fff",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(255,0,0,0.7)",t.currentTarget.style.borderColor="red"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(0,0,0,0.6)",t.currentTarget.style.borderColor="rgba(255,255,255,0.3)"},children:"×"})]}),(0,e.jsx)("div",{style:{flex:1,overflowY:"auto",margin:"20px 0",paddingRight:"10px"},children:(0,e.jsx)("p",{style:{lineHeight:1.8,whiteSpace:"pre-wrap",fontSize:"15px",margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.95)",color:"#f5f5f5",background:"rgba(0,0,0,0.4)",padding:"15px",borderRadius:"8px",backdropFilter:"blur(2px)"},children:L.text})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["👤 Автор: ",L.author||"Невідомий"]}),L.source&&(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 16px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["🔗 Джерело: ",L.source]})]})]})]})}),(0,e.jsx)(ot,{children:D!==null&&(0,e.jsxs)(Nr,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>O(null),children:[(0,e.jsx)(st,{style:{color:"white",zIndex:2020},onClick:()=>O(null),children:"×"}),(0,e.jsx)(ct,{$left:!0,onClick:t=>{t.stopPropagation(),O(o=>(o-1+E.length)%E.length)},children:"❮"}),(0,e.jsx)(Te.img,{src:E[D].largeSrc||E[D].src,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},onClick:t=>t.stopPropagation()},D),(0,e.jsx)(ct,{onClick:t=>{t.stopPropagation(),O(o=>(o+1)%E.length)},children:"❯"})]})})]})};export{Fe as Tooltip,so as default};
