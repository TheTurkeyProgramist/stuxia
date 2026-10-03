const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Aihelp-CFi5j59a.js","assets/rolldown-runtime-BNNRdYrd.js","assets/vendor-react-CP5wybkD.js","assets/FanArt-wmBmjZLb.js","assets/ShopModal-CrGVQOlK.js","assets/ClimateMap-DnrNBSj5.js","assets/Modal-hFxZUSE_.js","assets/KatSceneModal-CwMqJ75p.js","assets/LoginModal-CLeJlIKK.js","assets/UserSettingsModal-nKgr3Qv6.js","assets/WeatherDetailsModal-CsHqlgCU.js"])))=>i.map(i=>d[i]);
import{o as Jn,r as Ps}from"./rolldown-runtime-BNNRdYrd.js";import{$n as Ns,$r as Lr,A as md,Ar as bd,B as Wn,Bn as yd,Br as Zn,Bt as uo,Ci as wd,Cn as vd,Cr as kd,Ct as jd,Di as Sd,Dr as Cd,Ei as Td,Er as Ad,F as Id,Fn as Os,Fr as Md,Ft as fo,G as go,Gr as Bn,H as Kn,Hr as Dd,Ht as zd,I as Rd,In as Fd,Ir as Ld,It as Ea,J as $d,Jr as xo,Jt as Ed,K as Ja,Kr as Pd,Kt as qa,L as fn,Lr as Nd,M as Od,Mr as Vd,Mt as Bd,N as Hd,Nr as Vs,Oi as Kd,On as Ud,Or as Wd,Ot as qd,P as ho,Pr as Jd,Pt as Gd,Q as _d,Qr as mo,Qt as bo,R as Yd,Rr as yo,Si as yt,Sn as Zd,St as wo,Ti as Xd,Tn as Qd,Tt as ec,U as Xn,Ur as vo,Ut as Bs,V as ko,Vn as tc,Vr as ac,W as jo,Wr as Hs,Wt as So,Xt as Co,Y as nc,Yn as rc,Yr as To,Yt as ic,Zn as oc,Zr as sc,Zt as $r,_i as lc,_r as dc,_t as cc,ai as Er,an as pc,ar as uc,at as jn,bi as fc,bt as gc,ci as xc,cn as hc,cr as mc,ct as Sn,di as bc,dn as Qn,dr as Rt,dt as Cn,ei as yc,en as Ao,er as wc,fi as vc,fr as wn,ft as Tn,gi as kc,gr as Io,gt as An,hi as kr,hn as jc,ht as In,ii as Sc,in as Cc,ir as Tc,it as Mn,j as en,jr as Mo,jt as Ac,ki as Ic,kr as Mc,kt as Do,li as rt,ln as Dc,lr as zc,lt as Dn,mi as zi,mn as Rc,mr as Fc,mt as zn,ni as Lc,nn as zo,nr as $c,nt as Ec,oi as Pc,on as Ro,or as Nc,ot as Rn,pi as Oc,pn as Fo,pr as Vc,pt as Fn,q as Bc,qr as Hc,qt as Kc,rn as Uc,rr as Wc,rt as Ln,si as le,sn as Lo,sr as qc,st as $n,ti as Jc,tn as Gc,tr as bn,ui as i,un as er,ur as _c,ut as En,vi as Pr,vr as $o,vt as Nr,wi as Yc,wn as Zc,wr as tr,xi as Xc,xr as Qc,xt as e0,yi as t0,yr as a0,yt as un,z as ar,zr as n0,zt as r0}from"./vendor-react-CP5wybkD.js";import{n as Ri,t as Ks}from"./texts-DkcRWazW.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function r(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(l){if(l.ep)return;l.ep=!0;const d=r(l);fetch(l.href,d)}})();Ic.use(Kd).use(Td).init({fallbackLng:"uk",supportedLngs:["uk","en","de","fr","es","it","pl","ro","nl","pt","el","cs","hu","ru","zh","hi","ar","bn","ur","id","ja","mr","te","tr","ta","vi","tl","ko","fa","th","gu","kn","ml","my","uz","kk","az","km","si","sw","ha","yo","ig","am","zu","so","mg","sn","xh","qu"],interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"]}});var n=Jn(Sd()),i0=Jn(wd()),Us=vc({name:"calendar",initialState:{customDays:[]},reducers:{addCustomDay:(t,a)=>{const{id:r,date:c,time:l,reason:d,duration:m,durationUnit:f,cardId:x}=a.payload;t.customDays.push({id:r||Date.now(),date:c,time:l||"00:00",reason:d,duration:m||1,durationUnit:f||"hours",cardId:x||"all"})},removeCustomDay:(t,a)=>{t.customDays=t.customDays.filter(r=>r.id!==a.payload)},updateCustomDay:(t,a)=>{const{date:r,reason:c}=a.payload,l=t.customDays.find(d=>d.date===r);l&&(l.reason=c)},setCustomDays:(t,a)=>{t.customDays=a.payload}}}),{addCustomDay:Ws,removeCustomDay:o0,updateCustomDay:mm,setCustomDays:bm}=Us.actions,s0=Us.reducer,l0=bc({reducer:{calendar:s0}}),u=Jn(Pc()),vr="/assets/fogtwo--KsskB7I.webp",e=Vc(),d0=[{r:1,c:1,delay:"0s"},{r:1,c:2,delay:"0.1s"},{r:1,c:3,delay:"0.2s"},{r:2,c:3,delay:"0.3s"},{r:3,c:3,delay:"0.4s"},{r:3,c:2,delay:"0.5s"},{r:3,c:1,delay:"0.6s"},{r:2,c:1,delay:"0.7s"}],c0=le`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,p0=le`
  0%, 100% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
`,u0=i.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1994;
  opacity: ${t=>t.$isFadingOut?0:1};
  visibility: ${t=>t.$isFadingOut?"hidden":"visible"};
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
  overflow: hidden;
  will-change: opacity, visibility;
`,f0=i.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  animation: ${c0} 0.8s ease-out forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.8s ease-in-out;
    opacity: ${t=>t.$active?1:0};
  }
`,g0=i.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0.5vh;
  text-align: center;
  color: #fff;
  font-family: "Inter", sans-serif;
`,x0=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.45);
  padding: 8px 16px;
  border-radius: 14px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  span {
    font-size: 15px;
    letter-spacing: 1.5px;
    color: #fff;
    font-weight: 700;
  }
`,h0=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  svg {
    font-size: 22px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }
`,m0=i.div`
  font-size: 13px;
  color: #00c6ff;
  line-height: 1.5;
  font-weight: 900;
  max-width: 1200px;
  font-style: italic;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.61);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  margin-top: 5px;
`,b0=i.p`
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 11px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`,y0=i.div`
  position: absolute;
  top: 22px;
  right: -1px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);

  span {
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: right;
    min-width: 170px;
  }
`,w0=i.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  grid-template-rows: repeat(3, 10px);
  gap: 3px;
`,v0=i.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  animation: ${p0} 0.8s infinite linear;
  grid-row: ${t=>t.$r};
  grid-column: ${t=>t.$c};
  animation-delay: ${t=>t.$delay};
`;function k0({isLoading:t,isFadingOut:a,randomPhrase:r}){return(0,n.useEffect)(()=>{const c=new Image;c.src=vr},[]),t?(0,e.jsxs)(u0,{$isFadingOut:a,children:[(0,e.jsxs)(y0,{children:[(0,e.jsx)("span",{children:"v.1.0.0 | Я в Конотопі :)"}),(0,e.jsx)(w0,{children:d0.map((c,l)=>(0,e.jsx)(v0,{$r:c.r,$c:c.c,$delay:c.delay},l))})]}),(0,e.jsx)(f0,{$active:!0,children:(0,e.jsx)("img",{src:vr,alt:"Loading..."})}),(0,e.jsxs)(g0,{children:[(0,e.jsxs)(x0,{children:[(0,e.jsx)("span",{children:"Працює на базі:"}),(0,e.jsxs)(h0,{children:[(0,e.jsx)(Qc,{style:{color:"#2bfffb"},title:"Vite"}),(0,e.jsx)(Ad,{style:{color:"#FBF0DF"},title:"Bun"}),(0,e.jsx)(Wd,{style:{color:"#FFFFFF"},title:"GitHub"}),(0,e.jsx)(Cd,{style:{color:"#F38020"},title:"Cloudflare"}),(0,e.jsx)(dc,{style:{color:"#FFCA28"},title:"Firebase"}),(0,e.jsx)(ac,{style:{color:"#007ACC"},title:"VS Code"}),(0,e.jsx)(bd,{style:{color:"#FFFFFF"},title:"Vercel"}),(0,e.jsx)(Mc,{style:{color:"#00fff7"},title:"HostIQ / Hosting"})]})]}),r&&(0,e.jsx)(m0,{children:r}),(0,e.jsx)(b0,{children:"2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist"})]})]}):null}var j0="/assets/sunnight-DmKgKNb4.webp",S0="/assets/daysthunders-CVOnKTPo.webp",C0=Jn(wc()),T0=(t,a=0)=>{if(!t)return a===0?"Сьогодні":`День ${a+1}`;const r=String(t).trim(),c=new Date,l=new Date(c);l.setHours(0,0,0,0);const[d,m]=r.split(".").map(f=>Number(f));if(d&&m){const f=new Date(c.getFullYear(),m-1,d),x=Math.round((f-l)/864e5);return x===0?`${r} (Сьогодні)`:x===1?`${r} (Завтра)`:x===2?`${r} (Післязавтра)`:`${r} (${f.toLocaleDateString("uk",{weekday:"short"})})`}return r},A0=(t=[])=>{if(!Array.isArray(t)||t.length===0)return[];const a=[],r=new Map;return t.forEach((c,l)=>{const d=c?.dateLabel||c?.date||"today";r.has(d)||(r.set(d,[]),a.push({label:d,title:T0(d,a.length),items:[]})),r.get(d).push(c)}),a.forEach(c=>{c.items=r.get(c.label)||[]}),a},I0="/assets/prison-BANVSR28.mp4",M0="/assets/hiils-CwRk4ZgD.webp",D0="/assets/studi-DHg_t1il.webp",z0="/assets/penny-BUV12nwB.webp",R0="/assets/fog-DJVy3omR.webm",F0="/assets/nicerone-CfBwIS_m.webm",qs="/assets/asium-B_nRztWf.webp",Js="/assets/theorytwo-omR0ZjVQ.webp",L0="/assets/theory-DnqpX73C.mp4",Gs="/assets/fingerdash-DEsolxme.webp",_s="/assets/electrodynamix-lzudItwJ.webp",qn="/assets/sirenhead-Dh1KPUjM.webp",$0="/assets/backrooms-C_N8r861.webp",Ys="/assets/deserttwo-Bpbh89pi.webp",Zs="/assets/desertthree-B1yTfM-X.webp",Xs="/assets/desertfour-KOc6byy4.webp",Qs="/assets/desertone-CTJSVy53.webp",el="/assets/mechannic-B4qHsIdf.webp",tl="/assets/clubstep-BGgJ_grP.webp",jr="/assets/ultra-vip-turkeys--dWdDrjz.webp",al="/assets/chess-DE0SQ6bR.webp",E0="/assets/aurorahills-DmZEChm7.webp",nl="/assets/turkeytwo-DEtUfl4n.webp",rl="/assets/turkeysthree-DWkC9U9r.webp",il="/assets/turkeyssix-C74RJO0D.webp",ol="/assets/turkeysone-ByUfHIKS.webp",sl="/assets/turkeysseven-C_bOyIyj.webp",ll="/assets/asiuntwo-B0HnOhGB.webp",dl="/assets/asiumthree-BHhNiv03.webp",cl="/assets/asiumfour-CleyN5g2.webp",pl="/assets/asiumfive-DSDp7YH4.webp",ul="/assets/asiumsix-D7UysOUw.webp",fl="/assets/asiumeleven-BHmk7Yt4.webp",gl="/assets/asiumtwelve-roupkWdg.webp",xl="/assets/asiumseven-DFmFFiYc.webp",hl="/assets/swamptwo-8_PhuQBm.webp",ml="/assets/swampthree-D1x5tDiJ.webp",bl="/assets/swampsix-DzD2OZh6.webp",yl="/assets/seampseven-aw1KjEtN.webp",wl="/assets/swampeight-Cxl2rbCa.webp",vl="/assets/swampnine-BGdJXMuv.webp",kl="/assets/theory-BgbF1Vw-.webp",jl="/assets/deadlocked-D6Jzwofg.webp",Sl="/assets/horrortwo-D8aEwkY_.webp",Cl="/assets/horrorthree-BFEovIOX.webp",Tl="/assets/horrorfour-DmgPluVF.webp",Al="/assets/horror-Bwtso3fm.webp",Il="/assets/horrorsix-FrdmNrLk.webp",Ml="/assets/horroreight-N8Azt2Lm.webp",Fi="/assets/vip-dinofroz-C4DCnog6.webp",Dl="/assets/dinofrozthree-h3bRBpyn.webp",zl="/assets/dinofrozfour-DkpUmpno.webp",Rl="/assets/dinofrozfive-vsWApnpV.webp",Fl="/assets/dinofrozsix-B2cUeZYK.webp",Ll="/assets/dinofrozseven-r29p04F4.webp",$l="/assets/dinofrozeight-D_wKW6F3.webp",Li="/assets/vip-dragons-B9_gfJz_.webp",El="/assets/dinofroznine-Btp0fI_a.webp",P0="/assets/nicerone-w6vAmYap.webp",$i="/assets/village-mmk5VN8H.webp",N0="/assets/sevendays-D9rpKRGr.mp4",O0="/assets/vladone-D0GzLk2B.mp4",Ei="/assets/faded-CfnCTW9-.webp",V0="/assets/faded-B0cqhRG7.mp4",Pl="/assets/miaandme-BLF13Fck.webp",B0="/assets/fire-2pNCSf4p.webp",H0="/assets/clubstep-B4vGowaQ.mp4",K0="/assets/titanic-psUEvksY.webp",U0="/assets/smit-Blk03HJN.webp",W0="/assets/electrodynamix-DTaMof_s.webm",q0="/assets/volcano-BtJBGKCf.mp4",J0="/assets/whiteloud-LRq9ym10.mp4",G0="/assets/wall-BZpLy1oe.webp",_0="/assets/slivkishow-CNgttXyQ.webm",Y0="/assets/days-Cn3Bu0HX.webm",kn=[{src:qn,name:"Щось не так...",category:"Темрява та Містика",author:"Тревор Хендерсон",description:"Навіть ті хто не знають його, починають розуміти ця вишка з сиренами, не така вже вже й не рухома..."},{src:Ks,name:"Єгипетські ієрогліфи",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:`Ця картина має глибоку, містичну та інтроспективну атмосферу. Вона ідеально резонує з певним психологічним профілем і складом особистості:
Глибока інтроверсія та рефлексія: Цей образ обирають люди, які відновлюють енергію в тиші та самотності. Вони схильні до глибокого аналізу власних думок і почуттів, вважаючи за краще спостерігати за світом збоку, аніж бути в центрі уваги.
Філософський склад розуму: Символіка ієрогліфів символізує складність буття. Людина з таким характером не лякається невідомості — її приваблюють таємниці, пошук прихованих сенсів та роздуми над глобальними питаннями.`},{src:Y0,name:"Крижана катастрофа",category:"Природа та Стихії",author:"20th Century Fox",source:"Фільм 'Післязавтра'",start:0,end:300,description:"Тут зображено наслідки людської жадібності та безвідповідальності перед природою. Люди, які обирають цей фон, часто мають песимістичний погляд на світ і схильні до глибоких роздумів про майбутнє планети. Вони можуть відчувати тривогу щодо змін клімату та екологічних катастроф, що відображає їхню турботу про навколишнє середовище та бажання знайти рішення для збереження природи."},{src:Ri,name:"Туманний ліс",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Це стартовий фон для всіх користувачів :) Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:R0,name:"Туманний ліс (Відео)",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:Ei,name:"Курорт",category:"Природа та Стихії",author:"TheTurkeyStudio",description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:V0,name:"Курорт (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:_0,name:"Політ Кукі у стратосферу",category:"Природа та Стихії",author:"SlivkiShow",start:0,end:78,description:"Тут показано цікавий політ на висоту 30 000 метрів! Приємного перегляду небесних краєвидів!"},{src:D0,name:"Художня студія",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу творчості та натхнення. Люди, які обирають його, часто мають схильність до мистецтва та креативного самовираження. Вони можуть бути відкритими до нових ідей та люблять експериментувати з різними формами мистецтва, що відображає їхню творчу натуру."},{src:W0,name:"Гроза (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:7,description:"Цей фон створює атмосферу енергії та динаміки. Люди, які обирають його, часто мають схильність до активного способу життя та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:M0,name:"Гори",category:"Природа та Стихії",author:"TheTurkeyStudio",description:`По секрету, я планував зробити його фоном сайту у старих версіях, до 'Туманного лісу'. 
Цей фон створює атмосферу величі та спокою. Люди, які обирають його, часто мають схильність до природи та люблять відчувати себе частиною великого світу. Вони можуть бути інтроспективними та цінувати моменти тиші та роздумів, що відображає їхню глибоку натуру.`},{src:B0,name:"Вулкан",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:q0,name:"Вулкан (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:E0,name:"Аврора Гіллс",category:"Темрява та Містика",author:"NovaSoft Interactive",description:"Цей фон взятий з Hidden Object Adventure гри 'Aurora Hills'. Сюжет гри: Ви рейнджер парку у скромному містечку, але люди починають зникати безвісти. Посилання на гру: https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk"},{src:yl,name:"Туман, що дивиться",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:I0,name:"Кришталева в'язниця",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300,description:"Загадковий і холодний фон, що випромінює застережливу красу та напругу. Він приваблює шанувальників гостросюжетних історій, психологічних загадок та атмосфери таємничої небезпеки."},{src:G0,name:"Стиль лофт",category:"Природа та Стихії",author:"TheTurkeyStudio",description:`Сучасний, лаконічний і стильний інтер'єр із духом свободи. Цей фон відображає прагнення до простору, практичності та естетики урбанізму, приваблюючи людей із витонченим смаком.
 Хоча це просто купа цегли :)`},{src:J0,name:"Білий шум",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:"Мінімалістичний фон для повного занурення та концентрації. Він створює нейтральний простір без зайвих подразників, допомагаючи відключитися від зовнішнього хаосу та зосередитися на власних думках."},{src:F0,name:"Імператор Ніцерон (Відео)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:`Цей фон символізує, жагу до небезпек та пригод, і цей дракон вас не зупинить! 
Через нього, мені прийшла в голову ідея, з сайтом погоди у якому купа відсилок ;) Це секретик :) `},{src:O0,name:"Генерал Влад (Відео, сезон 1)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:"Головні герои в пастці…. Цей фон символізує жагу до свободи, і командної роботи(герої шукають план втечі…, а дракони, хочуть не допустити цього…)"},{src:$i,name:"Древніус і Даркніс",category:"Фентезі та Легенди",author:"highbrow",source:"Dragon Village 3",description:`Картина, прекрасна. Ідеальна для тих хто любить шукати плюси і мінуси. 
Лінк на гру:`},{src:Fi,name:"Імператор Ніцерон",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Li,name:"Генерал Влад (2 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Dl,name:"Прев'ю мультфільму",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:zl,name:"Драгемон (2 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Rl,name:"Мелтстон",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Fl,name:"Переміщення у часі",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Ll,name:"Генерал Влад (1 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:$l,name:"Генерал Трік (1 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:El,name:"Погляд у Рокфроз",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Gs,name:"Замок Ніцерона",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:P0,name:"Іще варіант",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:jr,name:"Індичка Кейт",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:ol,name:"Мале бундюче стадо",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:nl,name:"Малий, але впевнений",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:rl,name:"Дивись мені в очі!",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:il,name:"Ми вже виросли!",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:sl,name:"Шукаю друга",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:$0,name:"Нескінченний коридор",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Знайомий, але глибоко тривожний образ 'місця-порогу'. Цей фон викликає ефект 'ценонопсії' — відчуття моторошної порожнечі в місці, яке зазвичай повне людей. Симетрія заспокоює, але ледь помітний силует у темряві змушує постійно перевіряти, чи ви дійсно тут одні. Ідеально для тих, хто любить гострі відчуття та психологічні загадки. Викликає вряжання, ніби це бекрумс... Навіть мені і спокійно і тривожно дивитись на це..."},{src:Qs,name:"Кораблі у пустелі",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)",description:"Сюрреалістичний та заворожуючий образ піщаних морів. Він відображає відчуття плину часу, замисленість та схильність шукати неординарні сенси там, де інші бачать лише пустку."},{src:Ys,name:"Пустельні міражі",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)",description:"Образ ілюзій, мрій та вислизаючої краси. Цей фон пасує мрійливим натурам із багатою уявою, які прагнуть вийти за межі повсякденної реальності та відшукати власну істину."},{src:Zs,name:"Кактуси",category:"Природа та Стихії",author:"Генерація ШІ (Gemini)",description:"Символ витривалості, непохитності та життєвої сили. Цей фон обирають люди з міцним внутрішнім стержнем, які вміють зберігати оптимізм і квітнути навіть у найсуворіших обставинах."},{src:Xs,name:"Піраміда",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)",description:"Символ монументальності, стабільності та стародавньої мудрості. Цей образ підходить тим, хто цінує структуру, прагне до високих цілей та надихається величчю історії."},{src:vl,name:"Озеро волі",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Тиха та освіжаюча локація, що випромінює спокій та гармонію. Цей фон підійде тим, хто прагне емоційного перезавантаження, цінує внутрішню свободу та відчуття чистоти."},{src:hl,name:"Записка",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Атмосферний та інтимний сюжет, оповитий таємницею. Шанувальники цього фону зазвичай уважні до деталей, схильні до ностальгії та цінують глибокі особисті історії."},{src:fl,name:"Зимовий ліс",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Атмосфера кришталевої тиші, свіжості та спокою. Цей фон обирають люди, які відновлюють сили у мовчазній споглядальності, цінують чистоту думок та затишок засніженої природи."},{src:gl,name:"Водоспад",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Джерело безперервного руху, відновлення та природної енергії. Фон пасує тим, хто шукає натхнення у динаміці життя, цінує відчуття свіжості та прагне гармонійного розвитку."},{src:ll,name:"Поле і сакури",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Ніжний та естетичний пейзаж, що випромінює гармонію, цвітіння та весняне оновлення. Його обирають романтичні натури, які цінують витончену красу моменту й естетику східної культури."},{src:dl,name:"Печера",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:"Потаємне та захищене місце, сповнене прадавніх загадок. Підходить для допитливих інтровертів, які цінують відчуття затишку, безпеки та люблять відкривати приховані таємниці."},{src:cl,name:"Річка з лави",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Палка, експресивна та стихійна локація. Відображає внутрішній вогонь, сильну енергетику, рішучість та сміливість долати будь-які перешкоди на своєму шляху."},{src:pl,name:"Спуск з гори",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Захоплюючий краєвид та відчуття руху вперед. Цей фон приваблює цілеспрямованих людей, цінителів пригод та тих, хто любить долати нові вершини й насолоджуватися результатом."},{src:ul,name:"Скарбниця + Відсилки",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:"Атмосфера багатства, секретів та численних великодок. Ідеально підходить для допитливих та уважних глядачів, які люблять помічати дрібні деталі та розгадувати підтексти."},{src:xl,name:"Японський балкон",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Затишне та заспокійливе місце з гарним краєвидом. Створює відчуття мовчазного спокою, вечірньої рефлексії та приємної гармонії з навколишнім світом."},{src:qs,name:"Японський храм",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:"Оселя східної мудрості, медитативності та духовної рівноваги. Цей фон обирають люди, які прагнуть знайти внутрішній баланс, цінують традиції та спокійне споглядання."},{src:Pl,name:"Міа та я",category:"Фентезі та Легенди",author:"Studio 100 Media, Lucky Punch, March Ent.",source:"м/с Mia and Me",description:`Цей яскравий та казковий кадр із Мією та Лірією(ім'я може відрізнятись у різних мовах мультсеріалу) у яскраво-рожевих тонах розкриває ніжний, мрійливий та натхненний психотип:
Яскрава фантазія та творче мислення: Цей образ обирають люди, які живуть багатим внутрішнім світом, люблять казкові всесвіти, вірять у дива та прагнуть додавати барв у сіру буденність.
Емпатія та гармонія з природою: Близькість до чарівних істот і казкових світів відображає добре серце, здатність глибоко співчувати та цінувати щиру дружбу.
Віра у власні перетворення: Сюжет про перехід між реальністю та магічним світом резонує з тими, хто любить змінюватися на краще, шукає свій шлях і не боїться довіряти своїй інтуїції.`},{src:Al,name:"Бійцівська собака",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Sl,name:"Будинок з пастками",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Cl,name:"Підвал",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Tl,name:"Город зла",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Il,name:"Втеча",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:N0,name:"Касета, що вбиває",category:"Темрява та Містика",author:"Dreamworks",source:"Фільм 'Дзвінок'",start:0,description:`Цей відеоматеріал має напружену, похмуру та містичну атмосферу, що тримає в постійному психологічному напруженні. Він ідеально резонує з певним психологічним профілем і складом особистості:
Жага до розгадування таємниць і подолання страху: Цей образ обирають люди, яких приваблює психологічна напруга, психологічний трилер та темна естетика. Вони володіють внутрішньою стійкістю та цікавістю, що змушують їх досліджувати складні й лячні теми, долати власні фобії та йти до кінця в пошуках прихованої істини.
Холодний аналітичний розум у кризових ситуаціях: Ситуація жорсткого цейтнолету (відлік семи днів) вимагає максимальної концентрації, холоднокровності та логіки. Людина з таким складом характеру не піддається сліпій паніці перед обличчям невідомого чи невідворотного — вона здатна зберігати тверезість мислення, структурувати хаос навколо себе та рішуче діяти в критичних умовах.`,end:300},{src:Ml,name:"Втеча (фінал)",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:wl,name:"Болотний дракон",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:z0,name:"Пеннівайз",category:"Темрява та Містика",author:""},{src:jl,name:"Болото мук",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:Js,name:"Чорна діра",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:_s,name:"Гроза",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:el,name:"Шестерні",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:H0,name:"Невідоме місце(Відео)",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300},{src:tl,name:"Невідоме місце",category:"Темрява та Містика",description:"",author:"TheTurkeyStudio"},{src:kl,name:"Вогнище",category:"Природа та Стихії",description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих.",author:"TheTurkeyStudio"},{src:L0,name:"Вогнище(Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих."},{src:al,name:"Шахи",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:ml,name:"Підказка свічки",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:bl,name:"Печера кристалів",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:K0,name:"Титанік",category:"Темрява та Містика",author:"Paramount Pictures & 20th Century",source:"Фільм Titanic (1997)",description:"Цей фон відображає трагедію та величність історії, символізуючи людську амбіцію, крихкість життя та силу природи. Люди, які обирають цей фон, часто мають схильність до роздумів про минуле, цінують історичні події та шукають глибокі сенси у житті. Вони можуть відчувати емпатію до людських переживань та прагнуть зрозуміти уроки минулого для формування кращого майбутнього."},{src:U0,name:"Агент Сміт",category:"Темрява та Містика",author:"WarnerBrothers",source:"Фільм 'Матриця'",description:"Цей фон відображає складність та багатогранність сучасного світу, символізуючи боротьбу між реальністю та ілюзією. Люди, які обирають цей фон, часто мають схильність до критичного мислення, цікавляться технологіями та філософськими питаннями. Вони можуть відчувати потребу у глибокому аналізі навколишнього світу та прагнуть зрозуміти сутність людської природи."}],cn=t=>t==null?"—":["Північний","Північно-східний","Східний","Південно-східний","Південний","Південно-західний","Західний","Північно-західний"][Math.floor(t/45+.5)%8],Z0=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`,X0=i.div`
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,nr=i.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,rr=i.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,Eo=i.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,Q0=({onClose:t,isDarkMode:a,currentCardId:r})=>{const c=zi(),l=kr(S=>S.calendar?.customDays||[]),[d,m]=(0,n.useState)(""),[f,x]=(0,n.useState)("00:00"),[g,N]=(0,n.useState)(""),[j,A]=(0,n.useState)(1),[F,L]=(0,n.useState)("hours"),[z,y]=(0,n.useState)(r),h=l.filter(S=>S.cardId==="all"||S.cardId===r),w=()=>{if(!d||!g)return alert("Заповніть дату та назву");if(g.length>30)return alert("Назва занадто довга (макс 30)");if(l.length>=3)return alert("Максимум 3 події на користувача");c(Ws({id:Date.now(),date:d,time:f,reason:g,duration:Number(j),durationUnit:F,cardId:z})),m(""),N("")};return(0,e.jsx)(Z0,{onClick:t,children:(0,e.jsxs)(X0,{$isDarkMode:a,onClick:S=>S.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:0},children:"Встановити дати"}),(0,e.jsxs)(nr,{children:[(0,e.jsx)("label",{children:"Дата та Час початку"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(rr,{type:"date",$isDarkMode:a,value:d,onChange:S=>m(S.target.value)}),(0,e.jsx)(rr,{type:"time",$isDarkMode:a,value:f,onChange:S=>x(S.target.value)})]})]}),(0,e.jsxs)(nr,{children:[(0,e.jsx)("label",{children:"Тривалість"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(rr,{type:"number",min:"1",max:"168",$isDarkMode:a,value:j,onChange:S=>A(S.target.value),style:{width:"60px"}}),(0,e.jsxs)(Eo,{$isDarkMode:a,value:F,onChange:S=>L(S.target.value),children:[(0,e.jsx)("option",{value:"hours",children:"Годин"}),(0,e.jsx)("option",{value:"days",children:"Днів"})]})]})]}),(0,e.jsxs)(nr,{children:[(0,e.jsx)("label",{children:"Застосувати для:"}),(0,e.jsxs)(Eo,{$isDarkMode:a,value:z,onChange:S=>y(S.target.value),children:[(0,e.jsx)("option",{value:"all",children:"Всіх карток"}),(0,e.jsx)("option",{value:r,children:"Цієї картки"})]})]}),(0,e.jsxs)(nr,{children:[(0,e.jsx)("label",{children:"Назва події (макс 30 симв.)"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(rr,{type:"text",placeholder:"Наприклад: Новий Рік",$isDarkMode:a,value:g,onChange:S=>N(S.target.value),maxLength:30,style:{flex:1}}),(0,e.jsx)("button",{onClick:w,style:{background:"#ffb36c",border:"none",borderRadius:"5px",padding:"0 15px",fontWeight:"bold",cursor:"pointer"},children:"+"})]})]}),(0,e.jsx)("hr",{style:{border:"0.5px solid #444",margin:"10px 0"}}),(0,e.jsx)("h4",{style:{margin:0},children:"Наступаючі / триваючі події"}),(0,e.jsxs)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[h.length===0&&(0,e.jsx)("p",{style:{fontSize:"12px",opacity:.7},children:"Немає подій"}),h.map(S=>(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:a?"#333":"#eee",padding:"8px",borderRadius:"5px",fontSize:"12px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("b",{children:S.reason}),(0,e.jsx)("br",{}),S.date," ",S.time," (",S.duration," ",S.durationUnit==="days"?"дн":"год",")"]}),(0,e.jsx)("button",{onClick:()=>c(o0(S.id)),style:{background:"transparent",border:"none",color:"red",cursor:"pointer"},children:(0,e.jsx)(Hs,{size:18})})]},S.id))]}),(0,e.jsx)("button",{onClick:t,style:{marginTop:"10px",background:"#444",color:"#fff",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer"},children:"Закрити"})]})})},Nl=(0,n.createContext)(),ep=({children:t})=>{const[a,r]=(0,n.useState)(!1),[c,l]=(0,n.useState)(0),[d,m]=(0,n.useState)(!1),f=(0,n.useRef)({}),x=(L,z)=>{z?f.current[L]=z:delete f.current[L]};(0,n.useEffect)(()=>{(async()=>{try{const y=new URLSearchParams(window.location.search);if(y.has("q")||y.has("city")||y.has("search")||y.has("query")||y.has("pohoda")||window.location.search.toLowerCase().includes("погода")){m(!1),r(!1);return}}catch{}const z=await u.default.getItem("domino_tutorial_prompt");(!z||Date.now()>z)&&setTimeout(()=>m(!0),2500)})()},[]);const g=async()=>{await u.default.setItem("domino_tutorial_prompt",Date.now()+2592e6),m(!1),r(!0),l(1)},N=async()=>{await u.default.setItem("domino_tutorial_prompt",Date.now()+6048e5),m(!1)},j=()=>{l(L=>L+1)},A=L=>{l(L)},F=()=>{r(!1),l(0)};return(0,e.jsx)(Nl.Provider,{value:{isActive:a,setIsActive:r,currentStep:c,setCurrentStep:l,refs:f,registerRef:x,nextStep:j,jumpToStep:A,closeTutorial:F,showInitialModal:d,startTutorial:g,skipTutorialWeek:N},children:t})},Gn=()=>(0,n.useContext)(Nl),tp=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,ba=({content:t,children:a,placement:r="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,n.useState)(!1),m=(0,n.useRef)(null),{refs:f,floatingStyles:x,context:g}=Rn({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:An,middleware:[zn(8),Fn(),In({padding:5}),Tn({element:m})]}),{isMounted:N,styles:j}=Cn(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),A=Sn(g,{move:!1}),F=$n(g),L=jn(g),z=En(g,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:h}=Dn([A,F,L,z]);if(!t)return a;const w=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...y(),style:{display:"inline-flex"},children:a}),N&&(0,e.jsx)(Mn,{children:(0,e.jsxs)(tp,{ref:f.setFloating,$isDarkMode:c,style:{...x,...j},...h(),children:[t,(0,e.jsx)(Ln,{ref:m,context:g,fill:w,stroke:"#00acb9",strokeWidth:1})]})})]})};le`from { opacity: 0; } to { opacity: 1; }`;var ap=({customDays:t,cardId:a})=>{const[r,c]=(0,n.useState)(new Date);(0,n.useEffect)(()=>{const d=setInterval(()=>c(new Date),1e3);return()=>clearInterval(d)},[]);const l=t.filter(d=>d.cardId==="all"||d.cardId===a);return l.length===0?null:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",padding:"10px",marginTop:"10px"},children:l.map(d=>{const m=new Date(`${d.date}T${d.time}:00`),f=new Date(m.getTime());d.durationUnit==="days"?f.setDate(f.getDate()+d.duration):f.setHours(f.getHours()+d.duration);const x=m-r,g=f-r;if(g<=0)return null;const N=j=>{const A=Math.floor(j/864e5),F=Math.floor(j/36e5%24),L=Math.floor(j/1e3/60%60),z=Math.floor(j/1e3%60);return`${A}дні:${String(F).padStart(2,"0")}:${String(L).padStart(2,"0")}:${String(z).padStart(2,"0")}`};return(0,e.jsxs)("div",{style:{background:"rgba(0,0,0,0.4)",color:"#00eaff",padding:"8px",borderRadius:"5px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:[d.reason,": ",x>0?`До події: ${N(x)}`:`Подія триватиме ще: ${N(g)}`]},d.id)})})};le`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;var np=le`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,rp=le`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
`,ip=i.div`
  font-size: 20px;
  text-align: center;
  z-index: 400;
  width: 100px;
  margin-left: auto;
  padding: 5px 14px;
  position: relative;
    margin-bottom: 4px;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#000"};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
    background: ${t=>t.$isDarkMode?" rgba(0, 0, 0, 0.93)":"rgb(255, 255, 255)"};
     border: ${t=>t.$isDarkMode?"2px solid rgba(0, 255, 229, 0.6)":"2px solid rgba(0, 0, 0, 0.2)"};
    `,op=i.div`
  background: ${t=>t.$isDarkMode?"#0000009e":"#f5f5f5aa"};
  position: relative;
  color: #fff;
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  min-width: 0;
  z-index: 100;
  max-width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: ${t=>t.$isMain?"1.5px solid #004cff":"1.5px solid #00fbff"};
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
  }
`,sp=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgb(0, 238, 255);
  overflow: visible;
  h3 {
    margin: 0;
    font-size: 13px;
    color: ${t=>t.$isMain?"#008cff":"skyblue"};
  }
`,lp=i.div`
  position: relative;
  display: flex;
  align-self: stretch;
  align-items: stretch;
  gap: 4px;
  button {
    background: #333;
    color: #fff;
    border: none;
    padding: 3px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      background: #555;
    }
  }
`,dp=i.div`
  gap: 4px;
  padding: 1px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  @media (min-width: 768px) {
    height: 600px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,cp=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 240px;
    gap: 14px;
    padding: 12px;
    height: 570px;
    box-sizing: border-box;
    background: ${t=>t.$isDarkMode?"rgba(10, 10, 18, 0.6)":"rgba(240, 244, 248, 0.8)"};
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 16px;
    padding: 14px;
    height: 595px;
  }
`,pp=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  background: ${t=>t.$image?`linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.55)), url(${t.$image}) center/cover no-repeat`:"transparent"};
  @media (min-width: 768px) {
    height: 542px;
    padding: 0;
    overflow: hidden;
  }
`,up=i.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    height: 542px;
  }
`,ir=i.div`
font-size: 17px;
font-weight: 700;
color: ${t=>t.$active?"#00eeff":"#fff"};
`,or=i.div`
font-size: 15px;
color: ${t=>t.$active?"#00eeff":"#fff"};
`,sr=i.div`
  position: relative;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: ${t=>t.$active?"2px solid #00eeff":"1px solid rgba(255, 255, 255, 0.15)"};
  box-shadow: ${t=>t.$active?"0 0 12px rgba(0, 238, 255, 0.5)":"0 2px 6px rgba(0, 0, 0, 0.3)"};
  background: ${t=>t.$bgImg?`linear-gradient(rgba(0, 0, 0, 0.69), rgba(0,0,0,0.7)), url(${t.$bgImg}) center/cover no-repeat`:t.$active?"linear-gradient(135deg, rgba(0, 238, 255, 0.25), rgba(15, 25, 45, 0.9))":"rgba(20, 20, 30, 0.7)"};
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  padding: 8px 12px;

  @media (min-width: 768px) {
    height: 124px;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${t=>t.$active?"#00eeff":"rgba(0, 238, 255, 0.6)"};
  }
`,fp=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  gap: 2px;
  width: 100%;
  height: 84%;
  padding: 1px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    gap: 3px;
    padding: 4px;
  }
`,ya=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: ${t=>t.$pad||"2px"};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`,wa=i.div`
  font-size: ${t=>t.$size||"24px"};
  line-height: ${t=>t.$lh||"normal"};
  color: ${t=>t.$color||"inherit"};
  opacity: ${t=>t.$opacity??1};
  transform: ${t=>t.$rotate?`rotate(${t.$rotate}deg)`:"none"};
  display: ${t=>t.$rotate?"inline-block":"block"};
  @media (min-width: 1200px) {
    font-size: 44px;
  }
       @media (min-width: 768px) {
    font-size: 34px;
  }
`,pa=i.div`
  margin-top: ${t=>t.$mt||"5px"};
  font-size: ${t=>t.$size||"12px"};
  font-weight: ${t=>t.$weight||"bold"};
  text-align: center;
  line-height: ${t=>t.$lh||"normal"};
    @media (min-width: 1200px) {
    font-size: 16px;
  }
       @media (min-width: 768px) {
    font-size: 14px;
  }
`,lr=i.div`
  font-size: ${t=>t.$size||"10px"};
  font-weight: ${t=>t.$weight||"normal"};
  opacity: ${t=>t.$opacity||.8};
   @media (min-width: 1200px) {
    font-size: 14px;
  }
     @media (min-width: 768px) {
    font-size: 12px;
  }
`,gp=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid rgb(0, 238, 255);
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`,xp=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: 100%;
  width: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  align-self: stretch;
`,hp=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(5px);
`,mp=i.div`
  background: #1e1e1e56;
  padding: 5px;
  border-radius: 20px;
  width: 95%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ffb36c;
  color: white;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,bp=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`,Ci=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
`,Ol=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`,Po=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${t=>t.$active?"2px solid #ffb36c":"2px solid transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${Ci}, ${Ol} {
      opacity: 1;
    }
  }
`,No=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`,Oo=i.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }
`,yn=i.div`
  width: ${t=>typeof t.$width=="number"?`${t.$width}px`:t.$width};
  height: ${t=>t.$height||"200px"};
`,Or={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"28px",padding:0,border:"1px solid rgba(0, 190, 235, 0.7)",borderRadius:"4px",background:"rgba(0, 0, 0, 0.35)",color:"#00bfff",cursor:"pointer"},yp=i(Rt.div)`
  background: ${t=>t.$isDarkMode?"rgba(30, 20, 42, 0.88)":"rgba(255, 255, 255, 0.92)"};
  border: 2px solid rgba(138, 43, 226, 0.35);
  padding: 14px;
  font-size: 15px;
  line-height: 1.6;
  color: ${t=>t.$isDarkMode?"#efefff":"#2a2a2a"};
  width: 100%;
  height: 497px;
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  @media (max-width: 767px) {
    padding: 10px;
  }
`,wp=i.div`
  display: -webkit-box;
  -webkit-line-clamp: ${t=>t.$isExpanded?"none":"5"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-line;
`,vp=i.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  padding: 6px 0 0 0;
  text-decoration: underline;
`,kp=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 6px;
  background: ${t=>t.$isDarkMode?"rgba(20, 15, 30, 0.75)":"rgba(245, 240, 255, 0.85)"};
  padding: 14px;
  border-radius: 10px;
  border: 1px solid rgba(138, 43, 226, 0.3);

  @media (max-width: 767px) {
    padding: 10px;
    gap: 8px;
  }
`,jp=i.textarea`
  width: 100%;
  height: 90px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1.5px solid #8a2be2;
  font-size: 13px;
  font-family: inherit;
  line-height: 1.4;
  background: ${t=>t.$isDarkMode?"#151520":"#ffffff"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.25);
  }

  @media (max-width: 767px) {
    height: 70px;
    font-size: 12px;
    padding: 8px;
  }
`,dr=i.div`
  display: inline-flex;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.06)"};
  padding: 3px;
  gap: 2px;
  border: 2px solid ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.95)":"rgb(255, 253, 253)"};
`,tn=i.button`
  background: ${t=>t.$active?t.$isDarkMode?"#8a2be2":"#7000df":"transparent"};
  color: ${t=>t.$active?"#ffffff":t.$isDarkMode?"#cccccc":"#f9f3f3"};
  border: none;
  padding: 4px 14px;
  font-size: 15px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;
  box-shadow: ${t=>t.$active?"0 2px 8px rgba(138, 43, 226, 0.4)":"none"};
`,Sp=i.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 8px 8px 0 0;
  display: grid;
  flex-direction: column;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  animation: ${t=>t.$isClosing?rp:np} 0.2s
    ease-out forwards;
  overflow: hidden;
  height: calc(522px - 100% - 6px);
grid-template-columns: repeat(2, 1fr); 
  & > :first-child {
    grid-column: span 2; 
  }
  @media (max-width: 767px) {
    height: min(70vh, 700px);
    grid-template-columns: repeat(1, 1fr); 
    overflow-y: auto;
  }
`,an=i.button`
 text-align: left;
 padding:8px 5px;
 display: inline-flex;
 align-items: center;
  background: transparent;
  font-size: 16px;
 gap: 6px;
  color: ${t=>t.$isDarkMode?"#020202":"#f1eeee"};
border: 1px solid ${t=>t.$isDarkMode?"#020202":"#f1eeee"};
  @media (min-width: 768px) {
     padding:14px 30px;
      gap: 14px;
  }
svg {
    font-size: 18px;
   @media (min-width: 768px) {
    font-size: 29px;
  }
}
`,Cp=({user:t,card:a,isDarkMode:r,isLocationEnabled:c,isExtremeTemp:l,isExtremeWind:d,isExtremeUV:m,index:f,totalCards:x,handleRefreshCard:g,handleDeleteCard:N,handleRenameCard:j,moveWeatherCard:A,setIsLocationEnabled:F,customHolidayName:L,currentTimeString:z,layout:y,onOpenDetails:h})=>{const w=zi(),{registerRef:S}=Gn?.()||{registerRef:()=>{}},k=kr(s=>s.calendar?.customDays||[]),[K,H]=(0,n.useState)(!1),[te,ee]=(0,n.useState)(a.locationName),[fe,Q]=(0,n.useState)(null),[M,O]=(0,n.useState)(""),[ae,ge]=(0,n.useState)(!1),[ce,Y]=(0,n.useState)(!0),[_,me]=(0,n.useState)(""),[re,Te]=(0,n.useState)("concise"),[Ae,ft]=(0,n.useState)("friendly"),[Ct,Jt]=(0,n.useState)(!1),[gt,Be]=(0,n.useState)(""),[qe,Nt]=(0,n.useState)(0),[Ot,Je]=(0,n.useState)(!1),[Tt,At]=(0,n.useState)(!1),[wt,xt]=(0,n.useState)(0),[it,Xe]=(0,n.useState)("charts"),[ne,Ie]=(0,n.useState)("charts"),Fe=typeof window<"u"&&window.innerWidth<768?"250px":"380px",[st,Gt]=(0,n.useState)("C"),[Vt,_t]=(0,n.useState)(a.cityImage||""),[Ft,fa]=(0,n.useState)("wiki"),[Ma,Le]=(0,n.useState)(!1),[ot,Yt]=(0,n.useState)(!1),[Zt,Xt]=(0,n.useState)(!1),[ht,Me]=(0,n.useState)(!1);(0,n.useEffect)(()=>{u.default.getItem("temp_unit").then(p=>{p&&Gt(p)});const s=p=>{p.detail&&Gt(p.detail)};return window.addEventListener("tempUnitChanged",s),()=>window.removeEventListener("tempUnitChanged",s)},[]);const ka=s=>{Gt(s),u.default.setItem("temp_unit",s),window.dispatchEvent(new CustomEvent("tempUnitChanged",{detail:s}))},Se=s=>{if(s==null||s==="—")return"—";const p=parseFloat(s);return isNaN(p)?s:st==="F"?`${Math.round(p*9/5+32)}°F`:st==="K"?`${Math.round((p+273.15)*10)/10}K`:`${Math.round(p*10)/10}°C`};(0,n.useEffect)(()=>{u.default.getItem("gemini_api_key").then(p=>Me(!!p));const s=p=>Me(!!p.detail);return window.addEventListener("geminiKeyChanged",s),()=>window.removeEventListener("geminiKeyChanged",s)},[]);const tt=()=>{Xt(!0),setTimeout(()=>{Yt(!1),Xt(!1)},180)},[v,E]=(0,n.useState)(!1),[q,pe]=(0,n.useState)({date:"",time:"",reason:"",duration:1,durationUnit:"hours",targetCard:"all"}),[He,Ge]=(0,n.useState)(!1),[he,ve]=(0,n.useState)("current"),[Lt,mt]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!a.isMain)return;const s=()=>Ge(!0),p=()=>Ge(!1);return window.addEventListener("domino-open-weather-settings",s),window.addEventListener("domino-close-weather-settings",p),()=>{window.removeEventListener("domino-open-weather-settings",s),window.removeEventListener("domino-close-weather-settings",p)}},[a.isMain]);const[be,vt]=(0,n.useState)(!0),[Pe,Bt]=(0,n.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),ke=(0,n.useRef)(null),$t=(0,n.useRef)(null),kt=(0,n.useRef)(null),It=(0,n.useRef)(null),Da=(0,n.useRef)(null),ja=(0,n.useRef)(null),[ie,dt]=(0,n.useState)(null),[aa,J]=(0,n.useState)(!1),[oe,_e]=(0,n.useState)({day:1,night:1,wind:1}),[Ne,Oe]=(0,n.useState)(12),xe=s=>{_e(p=>({...p,[s]:p[s]===1?.3:1}))};(0,n.useEffect)(()=>{const s=()=>{if(!document.fullscreenElement){dt(null);return}requestAnimationFrame(()=>{const p=ie==="hourly"?kt.current:ja.current;p?.resize(),p?.update("none")})};return document.addEventListener("fullscreenchange",s),()=>document.removeEventListener("fullscreenchange",s)},[ie]),(0,n.useEffect)(()=>{if(!ie)return;const s=setTimeout(()=>{const p=ie==="hourly"?kt.current:ja.current;p?.resize(),p?.update("none")},100);return()=>clearTimeout(s)},[ie]);const Ye=async(s,p)=>{if(document.fullscreenElement){await document.exitFullscreen();return}p.current?.requestFullscreen&&(dt(s),await p.current.requestFullscreen())},Ke=async(s,p=void 0,P=void 0)=>s.current?(0,C0.default)(s.current,{backgroundColor:r?"#000000":"#f5f5f5",scale:2,useCORS:!0,allowTaint:!0,windowWidth:p||window.innerWidth,windowHeight:P||window.innerHeight}):null,Ht=async(s,p)=>{J(!0);const P=ie===s,D=p.current;if(!D)return J(!1),null;let T=null,C=null;if(!P){const at=D.getBoundingClientRect();T=D.cloneNode(!0);const ha=D.querySelectorAll("canvas"),ut=T.querySelectorAll("canvas");ha.forEach((Ce,bt)=>{ut[bt]&&ut[bt].getContext("2d").drawImage(Ce,0,0)}),T.style.position="fixed",T.style.top=`${at.top}px`,T.style.left=`${at.left}px`,T.style.width=`${at.width}px`,T.style.height=`${at.height}px`,T.style.margin="0",T.style.zIndex="99998",T.style.pointerEvents="none",document.body.appendChild(T),C=document.createElement("div"),C.style.width=`${at.width}px`,C.style.height=`${at.height}px`,D.parentElement.insertBefore(C,D),dt(s),await new Promise(Ce=>setTimeout(Ce,100))}const de=D.style.cssText,je=Math.max(D.scrollWidth,window.innerWidth,s==="hourly"?ea:900),pt=Math.max(D.scrollHeight,window.innerHeight,600);P?D.style.cssText+=`
        width: ${je}px !important;
        height: ${pt}px !important;
        min-height: ${pt}px !important;
        max-width: none !important;
        max-height: none !important;
      `:D.style.cssText+=`
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        width: ${je}px !important;
        height: ${pt}px !important;
        min-height: ${pt}px !important;
        max-width: none !important;
        max-height: none !important;
        z-index: -9999 !important;
        background: ${r?"#000":"#f5f5f5"} !important;
      `,await new Promise(at=>setTimeout(at,100));const xa=await Ke(p,je,pt);return D.style.cssText=de,P||dt(null),J(!1),T&&(await new Promise(at=>setTimeout(at,100)),T.remove(),C&&C.remove()),xa},ct=async(s,p)=>{const P=await Ht(s,p);if(!P)return;const D=document.createElement("a");D.download=`${a.locationName}-${s}-chart.png`,D.href=P.toDataURL("image/png"),D.click()},za=async(s,p)=>{const P=await Ht(s,p);if(!P)return;const D=P.toDataURL("image/png");let T=document.getElementById("chart-print-iframe");T||(T=document.createElement("iframe"),T.id="chart-print-iframe",T.style.position="fixed",T.style.width="0",T.style.height="0",T.style.border="none",T.style.top="-9999px",T.style.left="-9999px",document.body.appendChild(T));const C=T.contentWindow.document;C.open(),C.write(`
      <html><head><title>${a.locationName} - ${s}</title>
      <style>body{margin:0;text-align:center} img{max-width:100%}</style>
      </head>
      <body><img src="${D}" onload="window.focus();window.print();" /></body></html>
    `),C.close()},Kt=(s,p)=>(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",flexShrink:0},children:[(0,e.jsx)(ba,{content:ie===s?"Вийти з повного екрана":"На весь екран",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>Ye(s,p),"aria-label":ie===s?"Вийти з повного екрана":"На весь екран",style:Or,children:(0,e.jsx)(Nd,{size:16})})}),(0,e.jsx)(ba,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>ct(s,p),"aria-label":"Завантажити скріншот повноекранного графіка",style:Or,children:(0,e.jsx)(Md,{size:16})})}),(0,e.jsx)(ba,{content:"Друкувати скріншот повноекранного графіка",isDarkMode:r,children:(0,e.jsx)("button",{type:"button",onClick:()=>za(s,p),"aria-label":"Друкувати скріншот повноекранного графіка",style:Or,children:(0,e.jsx)(Dd,{size:16})})})]}),na=s=>(0,e.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",fontSize:`${Math.max(10,Ne-1)}px`,alignItems:"center"},children:s.map(p=>(0,e.jsx)(ba,{content:`Натисніть, щоб ${oe[p.key]===1?"сховати":"показати"} шкалу графіка ${p.label.toLowerCase()}`,isDarkMode:r,children:(0,e.jsxs)("button",{type:"button",onClick:()=>xe(p.key),"aria-label":`Натисніть, щоб ${oe[p.key]===1?"сховати":"показати"} шкалу графіка ${p.label.toLowerCase()}`,style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 6px",border:`1px solid ${p.color}`,borderRadius:"4px",background:r?"#222":"#fff",color:p.color,cursor:"pointer",opacity:oe[p.key],fontSize:"inherit",fontWeight:"bold"},children:[(0,e.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:p.color}}),p.icon&&(0,e.jsx)("span",{style:{display:"inline-flex",alignItems:"center",fontSize:"14px"},children:p.icon}),p.label]},p.key)}))}),Ga=(s,p,P)=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"nowrap",marginBottom:"4px"},children:[na(P),Kt(s,p)]});(0,n.useEffect)(()=>{if(It.current){const s=setTimeout(()=>{It.current&&(It.current.scrollLeft=144.44444444444446)},100);return()=>clearTimeout(s)}},[a.id,be,Pe]),(0,n.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`useGlobalLayout_${a.id}`);p!==null&&vt(p);const P=await u.default.getItem(`localLayout_${a.id}`);P&&Bt(P)})()},[a.id]),(0,n.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`bgMode_${a.id}`);p&&fa(p)})()},[a.id]),(0,n.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`legendFontSize_${a.id}`);p&&Oe(p)})()},[a.id]);const Qt=s=>{fa(s),u.default.setItem(`bgMode_${a.id}`,s),Le(!1)},Pa=()=>{F(!c),tt()};(0,n.useEffect)(()=>{let s=!0;return(async()=>{if(Ft!=="wiki"){s&&_t(Ft);return}const P=()=>kn.find(T=>T.name==="Туманний ліс")?.src||kn[0].src;let D=(a.locationName||a.name||"").trim();if(D==="Ваша локація"&&a.lat&&a.lon)try{const T=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${a.lat}&lon=${a.lon}&format=json&accept-language=uk`)).json();D=T.address?.city||T.address?.town||T.address?.village||T.address?.state||D}catch(T){console.warn("Reverse geocoding failed",T)}if(!D||D==="Ваша локація"){s&&_t(P());return}try{const T=await(await fetch(`https://uk.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(D)}&pithumbsize=1000&format=json&origin=*`)).json(),C=Object.values(T?.query?.pages||{}).find(de=>de.thumbnail?.source)?.thumbnail?.source;C&&s?_t(C):s&&_t(P())}catch(T){console.warn("City image lookup failed:",T),s&&_t(P())}})(),()=>{s=!1}},[a.locationName,a.lat,a.lon,a.name,Ft]),(0,n.useEffect)(()=>()=>{},[]),(0,n.useEffect)(()=>{Je(!1),At(!1)},[M]),(0,n.useEffect)(()=>{ke.current&&M&&!Ot&&ke.current.scrollHeight>ke.current.clientHeight&&At(!0)},[M,Ot]),(0,n.useEffect)(()=>{(async()=>{const p=await u.default.getItem(`ai_enabled_${a.id}`);p!==null&&Y(p);const P=await u.default.getItem(`ai_custom_prompt_${a.id}`);P&&(me(P),Be(P));const D=await u.default.getItem(`ai_custom_prompt_changed_at_${a.id}`);D&&Nt(D);const T=await u.default.getItem(`ai_response_length_${a.id}`);T&&Te(T);const C=await u.default.getItem(`ai_style_${a.id}`);C&&ft(C)})()},[a.id]);const Ra=(0,n.useCallback)(async()=>{if(ae)return;const s=await u.default.getItem("gemini_api_key");if(!s){O("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.");return}ge(!0);try{const p=(s||"").trim().replace(/^["']|["']$/g,""),P=new Ns(p),D=a.current,T=a.daily16||[],C=(a.hourly||[]).slice(0,5).map(Ce=>`${Ce.time}: ${Ce.temp}, вітер ${Ce.windNum}м/с, ${Ce.iconPlaceholder}`).join("; "),de=re==="extensive"?"надай розгорнуту відповідь (кілька речень)":"згенеруй лаконічний прогноз одним реченням (макс 25 слів)",je=Ae==="scientific"?"використовуй науковий стиль":Ae==="sarcastic"?"додай дрібку сарказму та іронії":"використовуй дружній та теплий тон",pt=`${_.trim()?`Ти метеоролог-асистент. ${je}. Виконуй цю інструкцію: ${_}. Критичні попередження (якщо є) виводь на самому початку. Використовуй абзаци для розбиття тексту. Відповідь надай українською мовою.`:`Ти метеоролог-асистент. На основі наданих даних ${de}. ${je}. Згадай про комфортний одяг. КРИТИЧНІ ПОПЕРЕДЖЕННЯ (температура, вітер, УФ) став найвище. Використовуй абзаци для зручності читання. Відповідь виключно українською мовою.`}

Місто: ${a.locationName}. Поточний час на сайті: ${z}.

Поточні показники: ${D.temp}, ${D.description}, вологість ${D.humidity}, вітер ${D.wind_speed}.
Найближчі години: ${C}.
Прогноз на дні: завтра ${T[1]?.temp_day||"н/д"}, післязавтра ${T[2]?.temp_day||"н/д"}.
Тенденція на 2 тижні: 1-й тиждень ~${T[7]?.temp_day||"н/д"}, 2-й тиждень ~${T[14]?.temp_day||"н/д"}.`,xa=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.0-flash"];let at=null,ha=null;for(const Ce of xa)try{if(at=await P.getGenerativeModel({model:Ce}).generateContent(pt),at)break}catch(bt){ha=bt,console.warn(`Weather summary model ${Ce} failed, trying next...`,bt)}if(!at)throw ha||new Error("Не вдалося отримати прогноз від Gemini");const ut=(await at.response).text().trim();O(ut),await u.default.setItem(`ai_weather_summary_${a.id}`,{text:ut,timestamp:Date.now()})}catch(p){console.error("Gemini Weather Error:",p)}finally{ge(!1)}},[a,ae,_,re,Ae,z]),ra=(0,n.useCallback)(async()=>{const s=await u.default.getItem(`ai_weather_summary_${a.id}`);!s||Date.now()-s.timestamp>72e5?Ra():O(s.text)},[a.id,Ra]),Mt=async()=>{const s=!ce;Y(s),await u.default.setItem(`ai_enabled_${a.id}`,s)},Fa=()=>{ve("ai"),ce&&ra()};(0,n.useEffect)(()=>{const s=p=>{p.detail||O("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.")};return window.addEventListener("geminiKeyChanged",s),()=>window.removeEventListener("geminiKeyChanged",s)},[]);const[Et,rn]=(0,n.useState)(!1),[jt,Na]=(0,n.useState)("");(0,n.useEffect)(()=>{rn(!1)},[fe]);const ia=(s,p=24,P=null,D=1)=>{let T=s;if(s&&typeof s!="string"){const je=s.type?.name||"";je==="FaSmog"?T="☁️":je==="IoRainy"||je==="LiaCloudSunRainSolid"?T="🌧️":je==="GiSnowing"?T="❄️":je==="IoThunderstorm"?T="⛈️":je==="FaSun"?T="☀️":je==="BsMoonStarsFill"?T="🌙":je==="FaCloudMoon"?T="☁️":je==="FaCloudMoonRain"||je==="LiaCloudMoonRainSolid"?T="🌧️":T="☁️"}const C=document.createElement("canvas");C.width=p,C.height=p;const de=C.getContext("2d");return de.font=`${p-8}px serif`,de.textAlign="center",de.textBaseline="middle",de.fillStyle="rgba(0, 0, 0, 0.72)",de.globalAlpha=D,de.beginPath(),de.arc(p/2,p/2,p*.76,0,Math.PI*2),de.fill(),de.globalAlpha=D,de.fillStyle="#ffffff",de.fillText(T,p/2,p/2),P&&(de.fillStyle=P,de.font=`bold ${p/2}px Arial`,de.fillText("!",p-5,5)),C},ga=(s,p=18,P=1)=>{const D=document.createElement("canvas"),T=p+12;D.width=T,D.height=T;const C=D.getContext("2d"),de=T/2,je=((Number(s)||0)%360+360)%360,pt=Math.round(je/45)*45*Math.PI/180;return C.translate(de,de),C.rotate(pt),C.fillStyle="rgba(0, 0, 0, 0.72)",C.globalAlpha=P,C.beginPath(),C.arc(0,0,T*.45,0,Math.PI*2),C.fill(),C.globalAlpha=P,C.fillStyle="#0099ff",C.strokeStyle="#ffffff",C.lineWidth=1.5,C.beginPath(),C.moveTo(0,-p*.43),C.lineTo(p*.2,p*.12),C.lineTo(p*.07,p*.08),C.lineTo(p*.07,p*.4),C.lineTo(-p*.07,p*.4),C.lineTo(-p*.07,p*.08),C.lineTo(-p*.2,p*.12),C.closePath(),C.fill(),C.stroke(),D},Oa=s=>{const p=((Number(s)||0)%360+360)%360,P=Math.round(p/45)*45;return cn(P%360)},Va=()=>{te.trim()&&(j(a.id,te),H(!1))},oa=A0(a.hourly||[]),$e=oa[wt]?.items||[],ea=Math.max(873,($e?.length||24)*35),Ve={labels:$e?.map(s=>s.time)||[],datasets:[{label:"Температура (°C)",data:$e?.map(s=>s.tempNum??0)||[],fill:!0,backgroundColor:"rgba(255, 179, 108, 0.2)",borderColor:"rgba(255, 179, 108, 1)",pointRadius:12,pointStyle:$e?.map(s=>{let p=null;return(s.tempNum??0)>30?p="#ff0000":(s.tempNum??0)<-30?p="#004cff":(s.windNum??0)>10&&(p="#ff6a00"),ia(s.iconSymbol??s.iconPlaceholder??"☁️",24,p,oe.day)}),tension:.4,yAxisID:"y"},{label:"Вітер (м/с)",data:$e?.map(s=>s.windNum??0)||[],borderColor:"rgba(0, 190, 235, 1)",backgroundColor:"rgba(0, 190, 235, 0.1)",pointRadius:6,pointBackgroundColor:$e?.map(s=>(s.windNum??0)>10?"#ff6a00":"rgba(0, 190, 235, 1)")||[],pointStyle:$e?.map(s=>ga(s.wind_direction_10m,18,oe.wind))||[],tension:.4,yAxisID:"y1"}]},Ue=s=>s===0?"Ясно":s>=1&&s<=3?"Частково хмарно":s>=45&&s<=48?"Туман":s>=51&&s<=55?"Дрібна сяка":s>=61&&s<=65?"Дощ":s>=71&&s<=77?"Сніг":s>=80&&s<=82?"Шквальний дощ":s>=95&&s<=99?"Гроза":"Хмарно",_a={"01.01":"Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)","06.01":"Богоявлення / Водохреще (новий стиль)","07.01":"Різдво Христове (старий стиль)","12.01":"1 серія 'Реальної містики'. Ціла епоха розкриття містифікацій у 12 сезонів!","14.01":"Василя / Обрізання Господнє (старий стиль)","19.01":"Богоявлення / Водохреще (старий стиль)","02.02":"Стрітення Господнє (новий стиль)","14.02":"З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!","15.02":"Стрітення Господнє (старий стиль)","08.03":"Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)","20.03":"Весняне рівнодення. Сонце встало на сході, а індики вже на заході :)","25.03":"Благовіщення Пресвятої Богородиці (новий стиль)","01.04":"Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)","07.04":"Благовіщення Пресвятої Богородиці (старий стиль)","23.04":"День святого Юрія / Георгія (новий стиль)","01.05":"День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!","02.05":"З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)","06.05":"День святого Юрія / Георгія (старий стиль)","08.05":"День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм. Один не багатьох випадків коли я кажу про політику добре...","09.05":"День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.","27.05":"Випуск Dragon Village 3. Скачаєш? :)","29.05":"Особисте свято у цей день... Пробач, я теж маю секрети :)","10.06":"Вознесіння Господнє","20.06":"Трійця / П'ятдесятниця","21.06":"Просто літнє сонцестояння. Купив собі ескімо? :)","24.06":"Різдво Івана Хрестителя / Купала (новий стиль)","28.06":"День Конституції України","29.06":"Святих апостолів Петра і Павла (новий стиль)","07.07":"Різдво Івана Хрестителя / Івана Купала (старий стиль)","12.07":"Святих апостолів Петра і Павла (старий стиль)","01.08":"День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(","06.08":"Преображення Господнє / Спас (новий стиль)","15.08":"Успіння Пресвятої Богородиці (новий стиль)","19.08":"Преображення Господнє / Спас (старий стиль)","24.08":"День Незалежності України","28.08":"Успіння Пресвятої Богородиці (старий стиль)","01.09":"День знань. Цей день усі ненавидять, бо термін відпустки закінчився :(","08.09":"Різдво Пресвятої Богородиці (новий стиль)","11.09":"Випуск 1-ї серії м/с 'Динофроз'. Легенда...","14.09":"Воздвиження Хреста Господнього (новий стиль)","20.09":"Всесвітній день прибирання!","21.09":"Різдво Пресвятої Богородиці (старий стиль)","23.09":"Осіннє рівнодення. Древніус = Даркніс :)","27.09":"Воздвиження Хреста Господнього (старий стиль)","01.10":"Покрова Пресвятої Богородиці та День козацтва (новий стиль)","14.10":"Покрова Пресвятої Богородиці та День козацтва (старий стиль)","24.10":"Почався ретроградний Меркурій. Якщо синоптики помилилися з дощем — винні зірки, а не ми! :)","27.10":"День української писемності та мови. Напиши по максимуму каліграфічний лист.","19.11":"Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)","21.11":"Введення в храм Пресвятої Богородиці (новий стиль)","30.11":"День святого Андрія Первозванного (новий стиль)","04.12":"Введення в храм Пресвятої Богородиці (старий стиль)","06.12":"День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","13.12":"День святого Андрія Первозванного (старий стиль)","19.12":"День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","22.12":"Зимове сонцестояння. Найтемніший день. Як очі Марти...","25.12":"Різдво Христове (новий стиль)"},sa=s=>{const p=s.toLowerCase();return p.includes("сб")||p.includes("нд")},on=s=>{if(!t?.birthDate||!s)return!1;const[,p,P]=t.birthDate.split("-"),[D,T]=s.split(".");return parseInt(P)===parseInt(D)&&parseInt(p)===parseInt(T)},Ut=(s,p,P)=>{const D=_a[s],T=sa(p),C=on(s),de=k.find(je=>je.date===P);return D?{type:"holiday",color:"#ff6666",label:D+(T?" + Вихідний":"")}:C?{type:"birthday",color:"#e066ff",label:"З Днем Народження! 🎉",isRainbow:!0}:de?{type:"custom",color:"#00bfff",label:de.reason}:T?{type:"weekend",color:"#ff9966",label:"Вихідний"}:{type:"regular",color:null,label:""}},la=s=>{const p=new Date,P=new Date(s);P.setHours(0,0,0,0);const D=P.getTime()-p.getTime();if(D<=0)return null;const T=Math.floor(D/864e5),C=Math.floor(D%864e5/36e5);return T>0?`⏳ Залишилось: ${T}д ${C}г`:`⏳ Почнеться за ${C}г`},Ba=(s,p,P)=>{const D=k.find(de=>de.date===P),T=la(P);if(D)return T?[`💙 Ваша подія: ${D.reason}`,`(${T})`]:[`💙 Ваша подія: ${D.reason}`];if(on(s))return T?[`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈`,`(${T})`]:[`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈`];const C=_a[s];return C?T?[`✨ Вітаємо зі святом: ${C}!`,`(${T})`]:[`✨ Вітаємо зі святом: ${C}!`]:null},St={labels:a.daily16?.map(s=>`${s.date}
${s.day}`)||[],datasets:[{label:"День (°C)",data:a.daily16?.map(s=>parseInt(s.temp_day))||[],borderColor:`rgba(255, 179, 108, ${oe.day})`,backgroundColor:`rgba(255, 179, 108, ${oe.day*.5})`,pointRadius:12,pointStyle:a.daily16?.map(s=>ia(s.iconSymbol??s.iconPlaceholder,24,null,oe.day)),pointBorderColor:a.daily16?.map(s=>Ut(s.date,s.day,s.fullDate).color||"#ffb36c"),pointBorderWidth:a.daily16?.map(s=>Ut(s.date,s.day,s.fullDate).color?3:2),tension:.3,yAxisID:"y"},{label:"Ніч (°C)",data:a.daily16?.map(s=>parseInt(s.temp_night))||[],borderColor:`rgba(255, 20, 147, ${oe.night})`,backgroundColor:`rgba(255, 20, 147, ${oe.night*.2})`,pointStyle:"circle",pointRadius:4,tension:.3,yAxisID:"y"},{label:"Вітер (м/с)",data:a.daily16?.map(s=>parseFloat(s.wind_speed)||0)||[],borderColor:`rgba(0, 153, 255, ${oe.wind})`,backgroundColor:`rgba(0, 153, 255, ${oe.wind*.2})`,pointStyle:a.daily16?.map(s=>ga(s.wind_direction_10m,18,oe.wind)),pointRadius:6,pointBorderColor:"#ffffff",pointBorderWidth:1.5,pointBackgroundColor:a.daily16?.map(s=>parseFloat(s.wind_speed)>10?"#ff6a00":"#0099ff"),tension:.3,yAxisID:"y1"}]},De={animation:aa?!1:void 0,responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,external:Ya,callbacks:{title:s=>`⏰ Час: ${s[0].label}`,label:s=>{if(s.datasetIndex===0){const p=s.parsed.y||0;let P=`Температура: ${Se(p)}`,D=[];return p>30&&D.push("СПЕКА ☀️"),p<-30&&D.push("МОРОЗ ❄️"),D.length>0&&(P+=` ⚠️ ${D.join(", ")}`),P}else if(s.datasetIndex===1){const p=s.parsed.y||0;let P=` Вітер: ${p.toFixed(1)} м/с`;p>10&&(P+=" ⚠️ СИЛЬНИЙ ВІТЕР");const D=$e?.[s.dataIndex];return D&&(P+=` | ${Oa(D.wind_direction_10m)} (${Math.round(D.wind_direction_10m||0)}°)`),P}return""},afterBody:s=>{if(s.length===0)return"";const p=s[0],P=$e?.[p.dataIndex];return P?`Стан погоди: ${P.description||Ue(P.weather_code)||(P.iconPlaceholder||"").replace(P.iconSymbol||"","").trim()||"Погода"}`:""}}}},scales:{y:{beginAtZero:!1,title:{display:!0,text:"Температура",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"rgba(0, 190, 235, 1)"},ticks:{color:"rgba(0, 190, 235, 1)",font:{size:10}},grid:{drawOnChartArea:!1}},x:{offset:!0,ticks:{color:"#fff",font:{size:10}},grid:{display:!1}}}},da={...De,plugins:{...De.plugins,legend:{display:!1},tooltip:{...De.plugins.tooltip,enabled:!1,external:Ya,callbacks:{title:s=>{const p=a.daily16?.[s[0].dataIndex];if(!p)return s[0].label;const P=Ut(p.date,p.day,p.fullDate),D=Ba(p.date,p.day,p.fullDate),T=`${p.date}${p.day.toLowerCase()}${P.label?` [${P.label}]`:""}`;return D?[...D,T]:T},label:s=>{const p=s.datasetIndex===0,P=s.datasetIndex===1,D=s.datasetIndex===2;if(p)return`☀️ День: ${Se(s.parsed.y)}`;if(P)return`🌙 Ніч: ${Se(s.parsed.y)}`;if(D){const T=a.daily16?.[s.dataIndex]?.wind_direction_10m||0;return`🌬️ Вітер: ${s.parsed.y.toFixed(1)} м/с | ${Oa(T)} (${Math.round(T)}°)`}return""},afterBody:s=>{if(s.length===0)return"";const p=s[0],P=a.daily16?.[p.dataIndex];return P?`Стан погоди: ${P.description||Ue(P.weather_code)||(P.iconPlaceholder||"").replace(P.iconSymbol||"","").trim()||"—"}`:""}}}},scales:{...De.scales,y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:r?"#aaa":"#888",font:{size:10}},grid:{color:r?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"#0099ff"},ticks:{color:"#0099ff",font:{size:10}},grid:{drawOnChartArea:!1}},x:{...De.scales.x,ticks:{...De.scales.x.ticks,color:s=>{if(!a.daily16||s.index>=a.daily16.length)return"#fff";const p=a.daily16[s.index];return Ut(p.date,p.day,p.fullDate).color||"#fff"},font:{...De.scales.x.ticks.font,weight:s=>{if(!a.daily16||s.index>=a.daily16.length)return"normal";const p=a.daily16[s.index];return Ut(p.date,p.day,p.fullDate).color?"bold":"normal"}}}}},onClick:(s,p)=>{if(p.length>0){const P=p[0].index,D=a.daily16[P],T=Ut(D.date,D.day,D.fullDate);if(T.type==="holiday"||T.type==="birthday")Q(D);else if(T.type==="custom")Q(D),Na(T.label);else if(L.trim()){if(L.trim().length>12){alert("Назва свята занадто довга (макс. 12 символів)!");return}w(Ws({date:D.fullDate,reason:L.trim()}))}else Q(D)}}};function Ya(s){const{chart:p,tooltip:P}=s,D=document.fullscreenElement,T=D||document.body;let C=T.querySelector("#chartjs-external-tooltip");if(!C){const Ce=document.getElementById("chartjs-external-tooltip");Ce&&Ce.remove(),C=document.createElement("div"),C.id="chartjs-external-tooltip",C.style.position="fixed",C.style.zIndex="2147483647",C.style.maxWidth="min(280px, calc(100vw - 24px))",C.style.boxSizing="border-box",C.style.whiteSpace="pre-line",C.style.background="rgba(15, 15, 25, 0.92)",C.style.color="#fff",C.style.borderRadius="8px",C.style.padding="8px 12px",C.style.pointerEvents="none",C.style.transition="all 0.1s ease",C.style.boxShadow="0 8px 20px rgba(0,0,0,0.4)",C.style.border="1px solid rgba(255, 179, 108, 0.4)",C.style.fontSize="12px",C.style.backdropFilter="blur(6px)",C.setAttribute("role","dialog"),T.appendChild(C)}if(P.opacity===0||!p.isPointInArea({x:P.caretX,y:P.caretY})){C.style.opacity="0";return}if(P.body){const Ce=P.title||[],bt=P.body.map(V=>V.lines),o=P.afterBody||[];let I="";Ce.forEach(V=>{I+=`<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${V}</div>`}),bt.forEach(V=>{I+=`<div style="margin-bottom: 2px;">${V}</div>`}),o.forEach(V=>{I+=`<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${V}</div>`}),C.innerHTML=I}const de=p.canvas.getBoundingClientRect(),je=C.offsetWidth,pt=C.offsetHeight,xa=D?D.clientWidth:window.innerWidth,at=D?D.clientHeight:window.innerHeight,ha=Math.min(Math.max(12,de.left+P.caretX+10),xa-je-12),ut=Math.min(Math.max(12,de.top+P.caretY-pt-10),at-pt-12);C.style.opacity="1",C.style.left=`${ha}px`,C.style.top=`${ut}px`}const[Ha,sn]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(Ha)return;const s=setInterval(()=>{window.innerWidth>=768&&ve(p=>{const P=["current","hourly","daily","ai"],D=P[(P.indexOf(p)+1)%P.length];return D==="ai"&&!M&&ce&&ra(),D})},6500);return()=>clearInterval(s)},[Ha,M,ce,ra]);const Pn=()=>!$e||$e.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:r?"#aaa":"#666"},children:"Немає даних годинного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"3px",paddingBottom:"10px",minWidth:"min-content"},children:$e.map((s,p)=>{const P=s.wind_direction_10m||0,D=cn(P),T=parseInt(s.temp),C=T>25?"#ff4d4d":T<5?"#4da6ff":"#ffb36c";return(0,e.jsxs)("div",{style:{flex:"0 0 120px",background:r?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:r?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"7px",padding:"4px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",color:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.12)"},children:[(0,e.jsx)("div",{style:{fontSize:"12px",fontWeight:"bold",opacity:.85,color:"#fff"},children:s.time||s.label||`${p}:00`}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"2px 0"},children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:s.iconSymbol||s.iconPlaceholder||(0,e.jsx)(un,{})}),(0,e.jsx)(pa,{$size:"11px",$lh:"1.2",children:s.description||Ue(s.weather_code)||(s.iconPlaceholder||"").replace(s.iconSymbol||"","").trim()||"Погода"})]}),(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:"800",color:C},children:Se(s.tempNum??s.temp)}),s.feels_like&&(0,e.jsxs)("div",{style:{fontSize:"10px",opacity:.75},children:["Відчувається: ",Se(s.feels_like)]}),(0,e.jsx)("div",{style:{width:"80%",height:"1px",background:r?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,e.jsxs)("div",{style:{fontSize:"10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:["Сила вітру: ",(0,e.jsxs)("span",{children:[s.wind_speed||s.windSpeed||"0"," м/с"]})]}),(0,e.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:["Напрямок: ",(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${P}deg)`,fontSize:"12px"},children:"⬇"})]}),(0,e.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:[" ",D," (",Math.round(P),"°)"]}),(s.wind_gusts_10m||s.wind_gusts)&&parseFloat(s.wind_gusts_10m||s.wind_gusts)>0&&(0,e.jsxs)("div",{style:{fontSize:"9px",color:"#ff9900",fontWeight:"600"},children:["Пориви: ",s.wind_gusts_10m||s.wind_gusts,"м/с"]})]})]},p)})})}),ln=()=>!$e||$e.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:r?"#aaa":"#666"},children:"Немає даних годинного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"10px",paddingBottom:"10px",minWidth:"min-content"},children:$e.map((s,p)=>{const P=s.wind_direction_10m||0,D=cn(P),T=a.current?.isPolarNight||s.isPolarNight,C=a.current?.isPolarDay||s.isPolarDay;return(0,e.jsxs)("div",{style:{flex:"0 0 200px",background:r?"rgba(20, 20, 30, 0.92)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:r?"1px solid rgba(0, 238, 255, 0.3)":"1px solid rgba(0, 140, 255, 0.3)",borderRadius:"10px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px",color:r?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.2)",fontSize:"11px"},children:[(0,e.jsxs)("div",{style:{fontSize:"13px",fontWeight:"bold",textAlign:"center",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"},children:[(0,e.jsx)(Cc,{})," ",s.time||s.label||`${p}:00`]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[(0,e.jsx)("span",{style:{fontSize:"24px"},children:s.iconSymbol||s.iconPlaceholder||(0,e.jsx)(un,{})}),(0,e.jsx)("span",{style:{fontSize:"11px",fontWeight:"600",opacity:.9},children:s.description||Ue(s.weather_code)||(s.iconPlaceholder||"").replace(s.iconSymbol||"","").trim()||"Погода"})]}),(0,e.jsxs)("div",{style:{background:"rgba(255,255,255,0.06)",borderRadius:"6px",padding:"6px"},children:[!T&&(0,e.jsxs)("div",{style:{fontWeight:"700",color:"#ff9d3b"},children:["Температура: ",Se(s.tempNum??s.temp)]}),s.feels_like&&(0,e.jsxs)("div",{style:{fontSize:"10px",opacity:.8},children:["Відчувається: ",Se(s.feels_like)]}),T&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#4da6ff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(qa,{})," Полярна ніч"]}),C&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#ffd700",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Ea,{})," Полярний день"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Bn,{style:{color:"#00eeff"}})," Вітер:"]})," ",s.wind_speed||s.windSpeed||"0"," м/с (",D,")"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Lo,{style:{color:"#4da6ff"}})," Вологість:"]})," ",s.humidity??a.current?.humidity??"—","%"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(xo,{style:{color:"#00ffcc"}})," Точка роси:"]})," ",s.dew_point_2m!==void 0?Se(s.dew_point_2m):"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Ro,{style:{color:"#3399ff"}})," Опади:"]})," ",s.precipitation!==void 0?`${s.precipitation} мм`:"0 мм"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(fo,{style:{color:"#80d4ff"}})," Сніг:"]})," ",s.snowfall!==void 0?`${s.snowfall} см`:"0 см"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(To,{style:{color:"#00cdff"}})," Ґрунт:"]})," ",s.soil_temperature_0cm!==void 0?Se(s.soil_temperature_0cm):"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(bo,{style:{color:"#ff9d3b"}})," Рівень 0°C:"]})," ",s.freezing_level_height!==void 0?`${s.freezing_level_height}м`:"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Er,{style:{color:"#00eeff"}})," Випаровування:"]})," ",s.evapotranspiration!==void 0?`${parseFloat(s.evapotranspiration).toFixed(2)} мм`:"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(uo,{style:{color:"#ffb36c"}})," Тиск:"]})," ",s.pressure??a.current?.pressure??"—"," hPa"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(pc,{style:{color:"#aaa"}})," Хмари:"]})," ",s.cloud_cover??a.current?.cloud_cover??"—","%"]})]})]},p)})})}),Sa=()=>{const s=a.daily16||a.daily||[];return!s||s.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:r?"#aaa":"#666"},children:"Немає даних 16-денного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"10px",paddingBottom:"10px",minWidth:"min-content"},children:s.map((p,P)=>{const D=Ut(p.date,p.day,p.fullDate),T=p.wind_direction_10m||0,C=cn(T),de=p.isPolarNight||a.current?.isPolarNight,je=p.isPolarDay||a.current?.isPolarDay,pt=p.isPolarEndDay;return(0,e.jsxs)("div",{style:{flex:"0 0 210px",background:r?"rgba(25, 25, 38, 0.92)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:D.color?`2px solid ${D.color}`:r?"1px solid rgba(255, 255, 255, 0.15)":"1px solid rgba(0,0,0,0.1)",borderRadius:"12px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px",color:r?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",fontSize:"11px"},children:[(0,e.jsxs)("div",{style:{fontSize:"13px",fontWeight:"bold",textAlign:"center",color:D.color||"#fff",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"},children:[(0,e.jsx)(Gc,{})," ",p.date," ",p.day]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[(0,e.jsx)("span",{style:{fontSize:"26px"},children:p.iconSymbol||p.iconPlaceholder||(0,e.jsx)(un,{})}),(0,e.jsx)("span",{style:{fontSize:"11px",fontWeight:"600"},children:p.description||Ue(p.weather_code)||(p.iconPlaceholder||"").replace(p.iconSymbol||"","").trim()||"Погода"})]}),(0,e.jsxs)("div",{style:{background:"rgba(255,255,255,0.06)",borderRadius:"6px",padding:"6px",display:"flex",flexDirection:"column",gap:"2px"},children:[!de&&(0,e.jsxs)("div",{style:{fontWeight:"800",color:"#ff9d3b",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Ea,{})," День: ",Se(p.temp_day||p.temp)]}),!je&&(0,e.jsxs)("div",{style:{fontWeight:"700",color:"#ff3399",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(qa,{})," Ніч: ",Se(p.temp_night||p.nightTemp)]}),de&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#4da6ff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(qa,{})," Полярна ніч (день не показується)"]}),je&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#ffd700",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Ea,{})," Полярний день (ніч не показується)"]}),pt&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#00eeff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(ec,{})," Закінчення полярного періоду"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Bn,{style:{color:"#00eeff"}})," Вітер:"]})," ",p.wind_speed||"0"," м/с (",C,")"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Ea,{style:{color:"#ffd700"}})," УФ-індекс:"]})," ",p.uv_index??"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Lo,{style:{color:"#4da6ff"}})," Ймовірність опадів:"]})," ",p.pop!==void 0?`${p.pop}%`:"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Ro,{style:{color:"#3399ff"}})," Дощ:"]})," ",p.rain!==void 0?`${p.rain} мм`:"0.0 мм"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Er,{style:{color:"#00eeff"}})," Випаровування:"]})," ",p.evapotranspiration!==void 0?`${parseFloat(p.evapotranspiration).toFixed(2)} мм`:"—"]})]})]},P)})})})},xn=()=>{const s=a.daily16||a.daily||[];return!s||s.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:r?"#aaa":"#666"},children:"Немає даних 16-денного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"5px",minWidth:"min-content"},children:s.map((p,P)=>{const D=P<2||p.isPast,T=Ut(p.date,p.day,p.fullDate),C=p.day==="Сб"||p.day==="Нд"||T.type==="weekend",de=p.wind_direction_10m||0,je=cn(de),pt=parseInt(p.temp_day||p.temp),xa=parseInt(p.temp_night||p.nightTemp),at=p.isPolarNight||a.current?.isPolarNight,ha=p.isPolarDay||a.current?.isPolarDay;let ut="#fff",Ce=r?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.1)",bt=null;return D?(ut="#888",Ce="rgba(140, 140, 140, 0.35)",bt=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(120,120,120,0.3)",color:"#bbb",padding:"1px 6px",borderRadius:"4px"},children:"Минулі дні"})):T.type==="holiday"?(ut="#ff4d4d",Ce="rgba(255, 77, 77, 0.7)",bt=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 77, 77, 0.25)",color:"#ff4d4d",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вітаю зі святом!"})):T.type==="custom"?(ut="#00bfff",Ce="rgba(0, 191, 255, 0.7)",bt=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(0, 191, 255, 0.25)",color:"#00bfff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Ваша подія"})):T.type==="birthday"?(ut="#e066ff",Ce="rgba(224, 102, 255, 0.7)",bt=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(224, 102, 255, 0.25)",color:"#e066ff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вітаємо з днем народження!"})):C&&(ut="#ffb36c",Ce="rgba(255, 179, 108, 0.7)",bt=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 179, 108, 0.25)",color:"#ffb36c",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вихідний день"})),(0,e.jsxs)("div",{style:{flex:"0 0 125px",background:D?r?"rgba(20, 20, 26, 0.85)":"rgba(230, 230, 235, 0.85)":r?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:D?"1px dashed rgba(140, 140, 140, 0.4)":`2px solid ${Ce}`,borderRadius:"14px",padding:"12px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",textAlign:"center",color:r?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.12)",filter:D?"grayscale(85%)":"none",opacity:D?.75:1,transition:"all 0.2s ease"},children:[bt,(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,e.jsxs)("span",{style:{fontSize:"12px",fontWeight:"bold",color:ut},children:[p.date," ",p.day]})}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[(0,e.jsx)("div",{style:{fontSize:"28px"},children:p.iconSymbol||p.iconPlaceholder||(0,e.jsx)(un,{})}),(0,e.jsx)("div",{style:{fontSize:"10px",lineHeight:1.3,opacity:.8,color:ut,fontWeight:600},children:p.description||Ue(p.weather_code??0)||"Погода"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px",width:"100%"},children:[!at&&(0,e.jsxs)("div",{style:{background:"rgba(255, 179, 108, 0.15)",borderRadius:"6px",padding:"2px 4px",fontSize:"14px",fontWeight:"800",color:"#ff9d3b"},children:["День: ",Se(pt)]}),!ha&&(0,e.jsxs)("div",{style:{background:"rgba(255, 20, 147, 0.12)",borderRadius:"6px",padding:"2px 4px",fontSize:"12px",fontWeight:"700",color:"#ff3399"},children:["Ніч: ",Se(xa)]})]}),(0,e.jsx)("div",{style:{width:"85%",height:"1px",background:r?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,e.jsxs)("div",{style:{fontSize:"11px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:["Напрямок: ",(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${de}deg)`,fontSize:"13px"},children:"⬇"})]}),(0,e.jsx)("div",{style:{fontSize:"10px"},children:(0,e.jsxs)("span",{children:["Сила вітру: ",p.wind_speed||"0"]})}),(0,e.jsxs)("div",{style:{fontSize:"10px"},children:[je," (",Math.round(de),"°)"]})]})]},P)})})})};return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,e.jsx)(op,{$isMain:a.isMain,$isDarkMode:r,children:(0,e.jsxs)(cp,{$isDarkMode:r,onMouseEnter:()=>sn(!0),onMouseLeave:()=>sn(!1),children:[(0,e.jsxs)(pp,{$image:Vt||a.cityImage,children:[(0,e.jsxs)(sp,{$isMain:a.isMain,style:{position:"relative",zIndex:10,background:r?"#040404":"rgb(246, 246, 246)"},children:[(0,e.jsxs)("div",{children:[K?(0,e.jsxs)(Rt.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)("input",{type:"text",value:te,onChange:s=>ee(s.target.value),onKeyDown:s=>{s.key==="Enter"?(s.preventDefault(),Va()):s.key==="Escape"&&H(!1)},autoFocus:!0,style:{padding:"4px 10px",fontSize:"13px",fontWeight:"600",borderRadius:"8px",border:"1.5px solid #00eeff",background:r?"rgba(10, 15, 25, 0.9)":"#ffffff",color:r?"#ffffff":"#1a1a1a",outline:"none",boxShadow:"0 0 12px rgba(0, 238, 255, 0.4)"}}),(0,e.jsx)(Rt.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:Va,title:"Зберегти (Enter)","aria-label":"Зберегти",style:{background:"linear-gradient(135deg, #00eeff 0%, #008cff 100%)",color:"#000000",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 238, 255, 0.4)"},children:(0,e.jsx)(Vd,{size:18})}),(0,e.jsx)(Rt.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>H(!1),title:"Скасувати (Esc)","aria-label":"Скасувати",style:{background:"linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",color:"#ffffff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(255, 65, 108, 0.4)"},children:(0,e.jsx)(Pd,{size:18})})]}):(0,e.jsx)(ba,{content:"Двічі клацніть, щоб змінити назву",isDarkMode:r,children:(0,e.jsxs)("h3",{onDoubleClick:()=>H(!0),style:{display:"flex",alignItems:"center",gap:"8px",margin:0,cursor:"pointer",userSelect:"none"},children:[(0,e.jsxs)("span",{style:{color:r?"white":"black",fontWeight:900},children:["#",f]}),(0,e.jsx)("span",{style:{color:r?"white":"black",fontWeight:900},children:a.locationName})]})}),(0,e.jsxs)("p",{style:{fontSize:"10px",color:"#fcfcfc"},children:["Широта: ",a.lat?.toFixed(2),", Довгота: ",a.lon?.toFixed(2)]})]}),(0,e.jsx)("div",{style:{position:"relative",display:"flex",justifyContent:"flex-end",alignItems:"center",flex:1,minWidth:0},children:(0,e.jsx)(lp,{style:{position:"relative",zIndex:2},children:(0,e.jsx)(ba,{content:"Налаштування картки",isDarkMode:r,children:(0,e.jsx)("button",{ref:s=>{a.isMain&&S&&S("weatherGear",s)},onClick:()=>{window.dispatchEvent(new CustomEvent("domino-weather-gear-clicked")),ot?tt():Yt(!0)},"aria-label":"Налаштування картки",style:{padding:"5px",display:"inline-flex",height:"100%",boxSizing:"border-box",color:`${r?"rgb(251, 251, 251)":"rgb(3, 3, 3)"}`,alignItems:"center",gap:"4px"},children:(0,e.jsx)(Vs,{})})})})}),(ot||Zt)&&(0,e.jsxs)(Sp,{$isDarkMode:r,$isClosing:Zt,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 30px",borderBottom:`1px solid ${r?"rgba(255, 255, 255, 0.98)":"rgb(0, 0, 0)"}`},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"6px"},children:[(0,e.jsx)("span",{style:{fontSize:"15px",fontWeight:"bold",color:r?"#ccc":"#444"},children:"Одиниці:"}),(0,e.jsx)("div",{style:{display:"flex",gap:"4px"},children:[{key:"C",label:"°C (Рекомендовано)"},{key:"K",label:"K (Кельвіни)"},{key:"F",label:"°F (Фаренгейти)"}].map(s=>(0,e.jsx)(ba,{content:s.label,isDarkMode:r,children:(0,e.jsx)("button",{onClick:()=>ka(s.key),"aria-label":s.label,style:{padding:"2px 15px",fontSize:"13px",borderRadius:"4px",border:st===s.key?"1px solid #00eeff":"1px solid #faf9f9",background:st===s.key?r?"#00eeff":"#008cff":"transparent",color:st===s.key?"#000":r?"#fff":"#000",fontWeight:st===s.key?"bold":"normal",cursor:"pointer"},children:s.key==="C"?"°C":s.key==="K"?"K":"°F"},s.key)}))})]}),(0,e.jsx)(ba,{content:"Закрити меню",isDarkMode:r,children:(0,e.jsx)("button",{onClick:tt,style:{background:"transparent",border:"none",color:r?"#ffb36c":"#333",fontSize:"20px",cursor:"pointer",fontWeight:"900",padding:"4px",lineHeight:1},"aria-label":"Закрити меню",children:"✕"})})]}),!K&&(0,e.jsxs)(an,{isDarkMode:r,onClick:()=>{H(!0),tt()},children:[(0,e.jsx)(Ld,{})," Змінити назву"]}),(0,e.jsxs)(an,{isDarkMode:r,onClick:()=>{Le(!0),tt()},children:[(0,e.jsx)(n0,{})," Змінити фон"]}),(0,e.jsxs)(an,{isDarkMode:r,onClick:()=>{Mt(),tt()},children:[(0,e.jsx)(Mo,{})," ",ce?"Вимкнути ШІ":"Увімкнути ШІ"]}),(0,e.jsxs)(an,{isDarkMode:r,onClick:()=>{E(!0),tt()},children:[(0,e.jsx)(zo,{})," Встановити дати"]}),(0,e.jsxs)(an,{isDarkMode:r,onClick:()=>{h(Vt||a.cityImage)},children:[(0,e.jsx)(Zn,{})," Детальна погода"]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px",borderBottom:`1px solid ${r?"rgba(255, 255, 255, 0.98)":"rgb(0, 0, 0)"}`},children:[(0,e.jsx)("button",{disabled:f===0,onClick:()=>{tt(),A(a.id,-1)},style:{flex:1,background:"transparent",color:f===0?"grey":r?"#fff":"#000",fontSize:"13px",cursor:f===0?"default":"pointer"},children:"Зробити вище картку"}),(0,e.jsx)("button",{disabled:f===x-1,onClick:()=>{tt(),A(a.id,1)},style:{flex:1,background:"transparent",color:f===x-1?"grey":r?"#fff":"#000",fontSize:"13px",cursor:f===x-1?"default":"pointer"},children:"Зробити нижче картку"})]}),a.isMain?(0,e.jsxs)(an,{onClick:Pa,onTouchEnd:s=>{s.preventDefault(),Pa()},title:c?"Вимкнути GPS (зараз увімкнено)":"Увімкнути GPS (зараз вимкнено)",style:{background:c?"rgba(0,200,80,0.12)":"rgba(180,0,0,0.08)",border:`1px solid ${c?"#00c84d":"#b30000"}`,color:c?"#00c84d":"#b30000",transition:"all 0.2s ease"},children:[(0,e.jsx)(Jd,{})," ",c?"GPS Увімк.":"GPS Вимк."]}):(0,e.jsxs)(an,{onClick:()=>{N(a.id)},style:{background:"transparent",color:"red"},children:[(0,e.jsx)(Hs,{})," Видалити"]}),(0,e.jsxs)(an,{onClick:()=>{tt(),ht&&window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`weather-${a.id}`,type:"weather",title:a.locationName,details:`Місто: ${a.locationName}. Координати: ${a.lat?.toFixed(2)}, ${a.lon?.toFixed(2)}. Температура: ${a.current?.temp}°C, відчувається: ${a.current?.feels_like}°C. Вітер: ${a.current?.wind_speed} м/с. Вологість: ${a.current?.humidity}%. Тиск: ${a.current?.pressure} гПа.`}}))},style:{textAlign:"left",background:ht?"linear-gradient(135deg, #5c1d3c, #62123d)":"rgba(120,120,120,0.3)",cursor:ht?"pointer":"default"},children:[(0,e.jsx)(Os,{})," Прикріпити до ШІ"]})]})]}),(0,e.jsx)(ap,{customDays:k,cardId:a.id}),(0,e.jsx)(gp,{children:[{key:"current",label:"Зараз"},{key:"hourly",label:"Годинна"},{key:"daily",label:"Місячна"},{key:"ai",label:"ШІ"}].map(s=>(0,e.jsx)("button",{onClick:()=>s.key==="ai"?Fa():ve(s.key),style:{padding:"4px 2px",border:"none",borderBottom:he===s.key?"2px solid #00eeff":"2px solid transparent",background:"transparent",color:he===s.key?"#00eeff":r?"#aaa":"#555",fontWeight:he===s.key?700:400,fontSize:"11px",cursor:"pointer",transition:"all 0.2s"},children:s.label},s.key))}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[he==="current"&&(0,e.jsx)(dp,{style:{borderRadius:0},children:(0,e.jsx)(xp,{style:{position:"relative",borderRadius:0,padding:"2px",background:"rgba(0, 0, 0, 0.43)"},children:(0,e.jsxs)(fp,{children:[(0,e.jsxs)(ya,{"aria-label":a.current.iconPlaceholder,children:[(0,e.jsx)(wa,{$size:"32px",$lh:"1",children:a.current.iconSymbol||(0,e.jsx)(un,{})}),(0,e.jsx)(pa,{$size:"11px",$lh:"1.2",children:(a.current.iconPlaceholder||"").replace(a.current.iconSymbol||"","").trim()||"Мінлива хмарність"})]}),(0,e.jsxs)(ya,{"aria-label":"Температура / Відчувається як",children:[(0,e.jsx)(wa,{$color:parseFloat(a.current.temp)<5?"#4da6ff":parseFloat(a.current.temp)>25?"#ff4d4d":"inherit",children:parseFloat(a.current.temp)<5?(0,e.jsx)(ic,{}):parseFloat(a.current.temp)>25?(0,e.jsx)(Co,{}):(0,e.jsx)(bo,{})}),(0,e.jsxs)(pa,{$mt:"0px",children:[Se(a.current.temp),(0,e.jsxs)(lr,{$size:"9px",children:["Відчувається: ",Se(a.current.feels_like)]})]})]}),(0,e.jsxs)(ya,{"aria-label":"Відносна вологість",children:[(0,e.jsx)(wa,{$color:parseFloat(a.current.humidity)>70?"#4da6ff":"inherit",children:parseFloat(a.current.humidity)>70?(0,e.jsx)(hc,{}):(0,e.jsx)(Dc,{})}),(0,e.jsxs)(pa,{$mt:"10px",children:["Вологість: ",a.current.humidity??"—"]})]}),(0,e.jsxs)(ya,{"aria-label":`Вітер: ${a.current.wind_speed}, Напрямок: ${a.current.wind_direction_10m}° (${cn(a.current.wind_direction_10m)}), Пориви: ${a.current.wind_gusts_10m} м/с`,children:[(0,e.jsx)(wa,{$size:"28px",$rotate:Math.round((a.current.wind_direction_10m||0)/45)*45%360,children:"⬇"}),(0,e.jsxs)(pa,{$mt:"-5px",children:["Швидкість вітру: ",a.current.wind_speed,(0,e.jsxs)(lr,{children:[a.current.wind_direction_10m,"° ",cn(a.current.wind_direction_10m)]}),(0,e.jsxs)(lr,{$weight:"bold",$opacity:.9,style:{color:d?"#ff4d4d":"inherit"},children:["Пориви: ",a.current.wind_gusts_10m,"м/с"]})]})]}),(0,e.jsx)(ba,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:r,children:(0,e.jsxs)(ya,{"aria-label":"Точка роси (температура, при якій утворюється роса)",children:[(0,e.jsx)(wa,{children:(0,e.jsx)(xo,{})}),(0,e.jsxs)(pa,{children:["Точка роси: ",Se(a.current.dew_point_2m)]})]})}),(0,e.jsxs)(ya,{"aria-label":"Атмосферний тиск",$pad:"10px",children:[(0,e.jsx)(wa,{$color:parseFloat(a.current.pressure)<1e3?"#4da6ff":parseFloat(a.current.pressure)>1020?"#ff4d4d":"inherit",children:(0,e.jsx)(uo,{})}),(0,e.jsxs)(pa,{children:["Атмосферний тиск: ",a.current.pressure]})]}),(0,e.jsxs)(ya,{"aria-label":"Хмарність",children:[(0,e.jsx)(wa,{children:parseFloat(a.current.cloud_cover)<50?(0,e.jsx)(gc,{}):(0,e.jsx)(jd,{})}),(0,e.jsxs)(pa,{$size:"11px",children:["Хмарність: ",a.current.cloud_cover,"%"]})]}),(0,e.jsxs)(ya,{"aria-label":"Видимість",$pad:"0px",children:[(0,e.jsx)(wa,{$opacity:Math.min(1,Math.max(.3,(a.current.visibility||1e4)/1e4)),$color:(a.current.visibility||1e4)<2e3?"#ff4d4d":"inherit",children:(0,e.jsx)(Gd,{})}),(0,e.jsxs)(pa,{$size:"10px",children:["Видимість:",a.current.visibility!==void 0?(a.current.visibility/1e3).toFixed(1):"—","км"]})]}),(0,e.jsxs)(ya,{"aria-label":"УФ-індекс / Сонячна радіація",$pad:"10px",children:[(0,e.jsx)(wa,{$color:(a.current.uv_index||0)>5?"#ff4d4d":(a.current.uv_index||0)>2?"#ffd700":"inherit",children:(0,e.jsx)(Jc,{})}),(0,e.jsxs)(pa,{$size:"10px",children:["УФ-індекс: ",a.current.uv_index??0]})]}),(0,e.jsx)(ba,{content:"Товщина снігового покриву (см)",isDarkMode:r,children:(0,e.jsxs)(ya,{"aria-label":"Сніговий покрив",children:[(0,e.jsx)(wa,{$color:a.current.snow_depth>0?"#00eeff":"inherit",children:(0,e.jsx)(fo,{})}),(0,e.jsxs)(pa,{$size:"10px",children:["Сніг: ",a.current.snow_depth?`${(a.current.snow_depth*100).toFixed(1)} см`:"0 см"]})]})}),(0,e.jsx)(ba,{content:"Температура ґрунту (0 см) та рівень 0°C ізотерми (висота замерзання)",isDarkMode:r,children:(0,e.jsxs)(ya,{"aria-label":"Замерзання та температура ґрунту",children:[(0,e.jsx)(wa,{$color:a.current.soil_temperature_0cm<=0?"#4da6ff":"inherit",children:(0,e.jsx)(To,{})}),(0,e.jsxs)(pa,{$size:"10px",children:["Ґрунт: ",a.current.soil_temperature_0cm!==void 0?Se(a.current.soil_temperature_0cm):"—",(0,e.jsxs)(lr,{$size:"9px",children:["Рівень 0°C: ",a.current.freezing_level_height??"—","м"]})]})]})}),(0,e.jsx)(ba,{content:"Випаровування (ET0, мм). Показує швидкість втрати вологи з ґрунту та рослин. Важливо для поливу саду/городу, оцінки висихання білизни та комфорту.",isDarkMode:r,children:(0,e.jsxs)(ya,{"aria-label":"Випаровування",children:[(0,e.jsx)(wa,{$color:a.current.evapotranspiration>3?"#ff9900":"#00eeff",children:(0,e.jsx)(Er,{})}),(0,e.jsxs)(pa,{$size:"10px",children:["Випаровування: ",a.current.evapotranspiration!==void 0?`${a.current.evapotranspiration.toFixed(2)} мм`:"0 мм"]})]})})]})})}),he==="hourly"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"8px"},children:[(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Годинний прогноз"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,e.jsx)(dr,{$isDarkMode:r,style:{borderRadius:"8px",padding:"2px"},children:[{key:"C",label:"°C"},{key:"K",label:"K"},{key:"F",label:"°F"}].map(s=>(0,e.jsx)(tn,{$active:st===s.key,$isDarkMode:r,onClick:()=>ka(s.key),title:`Переключити на ${s.key}`,style:{padding:"3px 8px",fontSize:"12px"},children:s.label},s.key))}),(0,e.jsxs)(dr,{$isDarkMode:r,children:[(0,e.jsx)(tn,{$active:it==="charts",$isDarkMode:r,onClick:()=>Xe("charts"),title:"Графіки",children:(0,e.jsx)(Zn,{size:18})}),(0,e.jsx)(tn,{$active:it==="table",$isDarkMode:r,onClick:()=>Xe("table"),title:"Таблиця",children:(0,e.jsx)(vo,{size:18})}),(0,e.jsx)(tn,{$active:it==="blocks",$isDarkMode:r,onClick:()=>Xe("blocks"),title:"Блоки",children:(0,e.jsx)(yo,{size:18})})]})]})]}),oa.length>1&&(0,e.jsx)("div",{style:{marginTop:"8px",marginBottom:"8px"},children:(0,e.jsx)("select",{value:wt,onChange:s=>xt(Number(s.target.value)),style:{width:"100%",maxWidth:"260px",padding:"8px 10px",borderRadius:"8px",border:r?"1px solid #555":"1px solid #ccc",background:r?"#1f1f1f":"#fff",color:r?"#fff":"#000",fontSize:"13px",fontWeight:"600",cursor:"pointer"},children:oa.map((s,p)=>(0,e.jsx)("option",{value:p,children:s.title||s.label},s.label))})}),it==="charts"?$e&&$e.length>0&&(0,e.jsxs)("div",{ref:$t,style:{position:"relative",width:"100%",minHeight:ie==="hourly"?aa?`${window.innerHeight}px`:"100vh":void 0,padding:ie==="hourly"?"16px":void 0,boxSizing:"border-box",background:ie==="hourly"?r?"#000":"#f5f5f5":"transparent"},children:[Ga("hourly",$t,[{key:"day",label:"Температура",color:"#ffb36c",icon:(0,e.jsx)(Co,{})},{key:"wind",label:"Вітер",color:"#0099ff",icon:(0,e.jsx)(Bn,{})}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(Oo,{children:(0,e.jsx)(yn,{$width:ie==="hourly"?`max(100%, ${ea}px)`:ea,$height:ie==="hourly"?aa?`${window.innerHeight-90}px`:"calc(100vh - 90px)":Fe,children:(0,e.jsx)(bn,{ref:kt,options:De,data:Ve},`hourly-${ie||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ie==="hourly"?"none":"block"},children:(0,e.jsx)(yn,{$width:ea,$height:Fe,children:(0,e.jsx)(bn,{options:{...De,plugins:{...De.plugins,tooltip:{...De.plugins.tooltip,enabled:!0}}},data:Ve})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ie==="hourly"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:`${ea}px`,height:Fe},children:(0,e.jsx)(yn,{$width:ea,$height:Fe,children:(0,e.jsx)(bn,{options:{...De,plugins:{...De.plugins,tooltip:{...De.plugins.tooltip,enabled:!0}}},data:Ve})})})})]})]}):it==="table"?Pn():ln()]}),he==="daily"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",flexWrap:"wrap",marginBottom:"8px"},children:[(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Прогноз на 16 днів (включаючи 2 минулі дні)"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,e.jsx)(dr,{$isDarkMode:r,style:{borderRadius:"8px",padding:"2px"},children:[{key:"C",label:"°C"},{key:"K",label:"K"},{key:"F",label:"°F"}].map(s=>(0,e.jsx)(tn,{$active:st===s.key,$isDarkMode:r,onClick:()=>ka(s.key),title:`Переключити на ${s.key}`,style:{padding:"3px 8px",fontSize:"12px"},children:s.label},s.key))}),(0,e.jsxs)(dr,{$isDarkMode:r,children:[(0,e.jsx)(tn,{$active:ne==="charts",$isDarkMode:r,onClick:()=>Ie("charts"),title:"Графіки",children:(0,e.jsx)(Zn,{size:18})}),(0,e.jsx)(tn,{$active:ne==="table",$isDarkMode:r,onClick:()=>Ie("table"),title:"Таблиця",children:(0,e.jsx)(vo,{size:18})}),(0,e.jsx)(tn,{$active:ne==="blocks",$isDarkMode:r,onClick:()=>Ie("blocks"),title:"Блоки",children:(0,e.jsx)(yo,{size:18})})]})]})]}),ne==="charts"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"6px 8px",background:r?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(4px)",borderBottom:"1px solid #ffb36c",zIndex:100},children:[na([{key:"day",label:"День",color:"#ffb36c",icon:(0,e.jsx)(Ea,{})},{key:"night",label:"Ніч",color:"#ff1493",icon:(0,e.jsx)(qa,{})},{key:"wind",label:"Вітер",color:"#0099ff",icon:(0,e.jsx)(Bn,{})}]),Kt("daily",Da)]}),(0,e.jsxs)("div",{ref:Da,style:{position:"relative",width:"100%",minHeight:ie==="daily"?aa?`${window.innerHeight}px`:"100vh":void 0,padding:ie==="daily"?"16px":void 0,boxSizing:"border-box",background:ie==="daily"?r?"#000":"#f5f5f5":"transparent"},children:[ie==="daily"&&Ga("daily",Da,[{key:"day",label:"День",color:"#ffb36c",icon:(0,e.jsx)(Ea,{})},{key:"night",label:"Ніч",color:"#ff1493",icon:(0,e.jsx)(qa,{})},{key:"wind",label:"Вітер",color:"#0099ff",icon:(0,e.jsx)(Bn,{})}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(Oo,{ref:It,children:(0,e.jsx)(yn,{$width:ie==="daily"?"max(100%, 900px)":900,$height:ie==="daily"?aa?`${window.innerHeight-120}px`:"calc(100vh - 120px)":Fe,children:(0,e.jsx)(bn,{ref:ja,options:da,data:St},`daily-${ie||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ie==="daily"?"none":"block"},children:(0,e.jsx)(yn,{$width:1300,$height:Fe,children:(0,e.jsx)(bn,{options:{...da,plugins:{...da.plugins,tooltip:{...da.plugins.tooltip,enabled:!0}}},data:St})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:r?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:ie==="daily"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"1300px",height:Fe},children:(0,e.jsx)(yn,{$width:1300,$height:Fe,children:(0,e.jsx)(bn,{options:{...da,plugins:{...da.plugins,tooltip:{...da.plugins.tooltip,enabled:!0}}},data:St})})})})]})]})]}):ne==="table"?xn():Sa()]}),he==="ai"&&(0,e.jsxs)(yp,{$isDarkMode:r,layout:!0,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[(0,e.jsx)("span",{className:"ai-header-text",style:{fontWeight:800,color:r?"#fff":"#000",fontSize:"18px",letterSpacing:"1px"},children:"Прогноз ШІ (Gemini)"}),(0,e.jsx)("button",{className:"ai-edit-btn",onClick:()=>Jt(!Ct),style:{background:"rgba(138, 43, 226, 0.2)",border:"1px solid rgba(138, 43, 226, 0.6)",borderRadius:"6px",cursor:"pointer",fontWeight:600,fontSize:"11px",color:r?"#fff":"#000",padding:"4px 8px",transition:"all 0.2s"},children:Ct?"Повернутися до ШІ Викладу":"Редагувати умову промпту"})]}),Ct?(0,e.jsxs)(kp,{$isDarkMode:r,children:[(0,e.jsx)("label",{style:{fontSize:"11px",fontWeight:"bold"},children:"Своя інструкція до прогнозу:"}),(0,e.jsx)(jp,{$isDarkMode:r,value:_,onChange:s=>me(s.target.value),placeholder:"Наприклад: Дай поради для рибалки на основі вітру та тиску..."}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"10px",marginTop:"6px"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsx)("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Обсяг:"}),(0,e.jsxs)("select",{value:re,onChange:s=>Te(s.target.value),style:{fontSize:"12px",padding:"6px 10px",borderRadius:"6px",background:r?"#252535":"#fff",color:r?"#fff":"#000",border:"1px solid rgba(138, 43, 226, 0.5)",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"concise",children:"Стисло"}),(0,e.jsx)("option",{value:"extensive",children:"Обширно"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsx)("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Стиль:"}),(0,e.jsxs)("select",{value:Ae,onChange:s=>ft(s.target.value),style:{fontSize:"12px",padding:"6px 10px",borderRadius:"6px",background:r?"#252535":"#fff",color:r?"#fff":"#000",border:"1px solid rgba(138, 43, 226, 0.5)",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"friendly",children:"Дружній"}),(0,e.jsx)("option",{value:"scientific",children:"Науковий"}),(0,e.jsx)("option",{value:"sarcastic",children:"Саркастичний"})]})]})]}),(0,e.jsx)("button",{onClick:async()=>{const s=_.trim()!==gt.trim(),p=Date.now(),P=864e5;if(s&&qe&&p-qe<P){const D=Math.ceil((P-(p-qe))/36e5);alert(`Промпт можна змінити знову через ${D} год.`);return}await u.default.setItem(`ai_custom_prompt_${a.id}`,_),await u.default.setItem(`ai_response_length_${a.id}`,re),await u.default.setItem(`ai_style_${a.id}`,Ae),s&&(await u.default.setItem(`ai_custom_prompt_changed_at_${a.id}`,p),Be(_),Nt(p)),Jt(!1),Ra()},style:{background:"linear-gradient(135deg, #8a2be2, #a855f7)",color:"white",border:"none",borderRadius:"8px",padding:"8px 16px",fontSize:"12px",cursor:"pointer",fontWeight:"bold",boxShadow:"0 3px 10px rgba(138, 43, 226, 0.35)",marginTop:"auto"},children:"Зберегти та оновити"})]})]}):ae?(0,e.jsx)("div",{style:{color:"#b362ff",padding:"10px 0",fontSize:"12px"},children:"Генерація прогнозу ШІ..."}):M?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Rt.div,{layout:!0,transition:{duration:.3},children:(0,e.jsx)(wp,{ref:ke,$isExpanded:!1,children:M})}),Tt&&(0,e.jsx)(vp,{onClick:()=>mt(!0),children:"Читати далі..."})]}):(0,e.jsx)("div",{style:{color:r?"#aaa":"#555",padding:"8px 0",fontSize:"12px"},children:'ШІ-аналіз недоступний. Ви можете відредагувати умову промпту вище та натиснути "Зберегти та оновити".'})]})]})]}),(0,e.jsxs)(up,{children:[(0,e.jsx)(sr,{$active:he==="current",$bgImg:Vt||a.cityImage,onClick:()=>ve("current"),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px"},children:a.current?.iconSymbol||(0,e.jsx)(un,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsxs)(ir,{$active:he==="current",children:["Зараз: ",a.current?.temp]}),(0,e.jsxs)(or,{$active:he==="current",children:["Відчувається: ",a.current.feels_like]})]})]})}),(0,e.jsx)(sr,{$active:he==="hourly",$bgImg:j0,onClick:()=>ve("hourly"),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#ffb36c"},children:(0,e.jsx)(Zn,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(ir,{$active:he==="hourly",children:"Годинна(24г)"}),(0,e.jsx)(or,{$active:he==="hourly",children:"Погодинна на 7 днів"})]})]})}),(0,e.jsx)(sr,{$active:he==="daily",onClick:()=>ve("daily"),$bgImg:S0,children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#ff1493"},children:(0,e.jsx)(zo,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(ir,{$active:he==="daily",children:"Прогноз на 16 днів"}),(0,e.jsx)(or,{$active:he==="daily",children:"Бундючий графік"})]})]})}),(0,e.jsx)(sr,{$active:he==="ai",$bgImg:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",onClick:()=>Fa(),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#a855f7"},children:(0,e.jsx)(Mo,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(ir,{$active:he==="ai",children:"ШІ Прогноз"}),(0,e.jsx)(or,{$active:he==="ai",children:"Gemini AI"})]})]})})]})]})}),Lt&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.75)",zIndex:1300,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>mt(!1),children:(0,e.jsxs)("div",{style:{background:r?"#1a1a2e":"#fff",border:"1px solid rgba(138,43,226,0.5)",borderRadius:"12px",padding:"20px",width:"90%",maxWidth:"480px",maxHeight:"80vh",overflowY:"auto",color:r?"#efefff":"#222",fontSize:"13px",lineHeight:1.6,whiteSpace:"pre-line"},onClick:s=>s.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[(0,e.jsx)("span",{style:{fontWeight:800,color:"#b362ff",fontSize:"13px",letterSpacing:"1px"},children:"Прогноз ШІ — повний текст"}),(0,e.jsx)("button",{onClick:()=>mt(!1),style:{background:"none",border:"none",color:"#b362ff",fontSize:"18px",cursor:"pointer"},children:"✕"})]}),M]})}),v&&(0,e.jsx)(Q0,{isDarkMode:r,currentCardId:a.id,onClose:()=>E(!1)}),He&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",zIndex:1300,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>Ge(!1),children:(0,e.jsxs)("div",{ref:s=>{a.isMain&&S&&S("weatherModal",s)},style:{background:r?"#222":"#fff",borderRadius:"10px",padding:"20px",width:"90%",maxWidth:"350px",color:r?"#fff":"#000"},onClick:s=>s.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:"0 0 15px 0"},children:"Налаштування картки"}),(0,e.jsx)("p",{style:{fontSize:"13px",color:r?"#aaa":"#555",marginBottom:"15px"},children:"Картка тепер використовує вкладки: Зараз / Годинна / Місячна / ШІ."}),(0,e.jsx)("button",{onClick:()=>Ge(!1),style:{width:"100%",padding:"10px",background:"#ffb36c",color:"#000",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Закрити"})]})}),Ma&&(0,e.jsx)(hp,{onClick:()=>Le(!1),children:(0,e.jsxs)(mp,{onClick:s=>s.stopPropagation(),children:[(0,e.jsxs)("h2",{style:{margin:0,color:"#ffb36c"},children:["Зміна фону: ",a.locationName]}),(0,e.jsxs)(bp,{children:[(0,e.jsxs)(Po,{$active:Ft==="wiki",onClick:()=>Qt("wiki"),children:[(0,e.jsx)(Ci,{children:"Вікіпедія"}),(0,e.jsx)(No,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png"})]}),kn.filter(s=>!s.src.endsWith(".mp4")).map((s,p)=>(0,e.jsxs)(Po,{$active:Ft===s.src,onClick:()=>Qt(s.src),children:[s.author&&(0,e.jsxs)(Ol,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:s.author}),s.source&&(0,e.jsx)("div",{children:s.source})]}),(0,e.jsx)(Ci,{children:s.name}),(0,e.jsx)(No,{src:s.src})]},p))]}),(0,e.jsx)("button",{onClick:()=>Le(!1),style:{padding:"8px",background:"#ffb36c",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",marginTop:"10px"},children:"Закрити"})]})})]})},Tp=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${t=>t.$isDarkMode?`url(${qn}) center/cover no-repeat, linear-gradient(135deg, #000000 0%, #000000 100%)`:`url(${qn}) center/cover no-repeat, linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`};
  color: ${t=>t.$isDarkMode?"#ffffff":"#333333"};
  font-family: var(--font-family, "Inter", sans-serif);
  text-align: center;
  padding: 20px;
  overflow: hidden;
`,Ap=i(Rt.h1)`
  font-size: 8rem;
  margin: 0;
  font-weight: 900;
  background: ${t=>t.$isDarkMode?"linear-gradient(90deg, #ffb36c, #94fffa)":"linear-gradient(90deg, #ff7e5f, #feb47b)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`,Ip=i(Rt.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 750px;
  background: #0000009b;
  margin-bottom: 40px;
  line-height: 1.5;
`,Mp=i(lc)`
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${t=>t.$isDarkMode?"#000":"#fff"};
  background: ${t=>t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid ${t=>t.$isDarkMode?"transparent":"#333"};
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${t=>t.$isDarkMode?"#ffa149":"#555"};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`,Dp=({isDarkMode:t=!0})=>{const{t:a}=Xd();return(0,e.jsxs)(Tp,{$isDarkMode:t,children:[(0,e.jsx)(Ap,{$isDarkMode:t,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:"404"}),(0,e.jsx)(Ip,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:a("notFound.description")}),(0,e.jsx)(Rt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,e.jsx)(Mp,{to:"/",$isDarkMode:t,children:a("notFound.goHome")})})]})},zp=le`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`,Rp=le`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`,Fp=le`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`,Lp=le`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`,$p=i(Rt.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  text-align: center;
  overflow: hidden;
  font-family: var(--font-family, "Inter", sans-serif);
  background:
    url(${qn}) center / cover no-repeat,
    linear-gradient(135deg, #000 0%, #0a0a0a 100%);
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.15) 3px,
      rgba(0, 0, 0, 0.15) 4px
    );
    animation: ${zp} 8s linear infinite;
    pointer-events: none;
  }
`,Ep=i(Rt.h1)`
  font-weight: 900;
  margin: 6px;
  font-size: 20px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${Fp} 6s infinite;
`,Pp=i(Rt.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 4px;
  max-width: 640px;
  width: 100%;
  box-shadow:
    0 0 0 1px rgba(148, 255, 250, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.6);
`,Np=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`,Op=i.p`
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  color: rgba(0, 253, 248, 1);
  letter-spacing: 0.12em;
`,Vp=i.p`
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 1.65;
  margin: 3px;
`,Bp=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
`,Hp=i.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  box-shadow: 0 0 8px ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  animation: ${Rp} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`,Kp=i.span`
  font-size: 12px;
  color: rgb(255, 255, 255);
`,Up=i.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${Lp} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,Wp=({isDarkMode:t=!0,endTime:a=null,message:r=null})=>{const[c,l]=(0,n.useState)(null),[d,m]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!a)return;let f=null;if(typeof a.toMillis=="function"?f=a.toMillis():a.seconds?f=a.seconds*1e3:f=new Date(a).getTime(),isNaN(f))return;const x=()=>{const N=f-Date.now();if(N<=0){l(null),m(!0),setTimeout(()=>window.location.reload(),6e4);return}const j=Math.floor(N/36e5),A=Math.floor(N%36e5/6e4),F=Math.floor(N%6e4/1e3),L=[];j>0&&L.push(`${j}год`),L.push(`${String(A).padStart(2,"0")}хв`),L.push(`${String(F).padStart(2,"0")}с`),l(L.join(" "))};x();const g=setInterval(x,1e3);return()=>clearInterval(g)},[a]),(0,e.jsx)(wn,{children:(0,e.jsx)($p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},children:(0,e.jsxs)(Pp,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:.55,type:"spring",stiffness:120},children:[(0,e.jsx)(Up,{children:(0,e.jsx)("img",{src:qn,alt:""})}),(0,e.jsx)(Ep,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.5},children:d?"Ми завершили оновлення!":"Технічне обслуговування"}),a&&(0,e.jsx)(Np,{children:(0,e.jsxs)(Op,{children:[d?"Перезавантаження через":"Залишилось часу",": ",d?"~1 хв":c??"Підраховуємо…"]})}),(0,e.jsxs)(Vp,{children:["Причина робіт: ",r??"Планове оновлення системи."]}),d&&(0,e.jsxs)(Bp,{children:[(0,e.jsx)(Hp,{$ok:!0}),(0,e.jsx)(Kp,{children:"Роботи завершено — перезавантаження…"})]})]})},"maintenance-overlay")})},Vl=Ec({apiKey:"AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",authDomain:"stuxia-5b535.firebaseapp.com",projectId:"stuxia-5b535",storageBucket:"stuxia-5b535.firebasestorage.app",messagingSenderId:"801101038904",appId:"1:801101038904:web:70d01ab63f631b74acadcd"}),Ia=Bc(Vl,{experimentalAutoDetectLongPolling:!0}),Vo=nc(Vl),ym=new $d;async function qp(){try{const t=await Wn(Ja(Ia,"config","global"));if(!t.exists())return{isMaintenanceMode:!1,endTime:null,message:null};const a=t.data();return{isMaintenanceMode:!!a.isMaintenanceMode,endTime:a.maintenanceEndTime??null,message:a.maintenanceMessage??null}}catch{return{isMaintenanceMode:!1,endTime:null,message:null}}}var Ti="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",Ai="/assets/dinofroz-BldqOi3Z.webm",Bl=JSON.parse(`[{"id":1,"Режисер":"Орландо Корраді","Актори":"Марко Вівіо, Джулиано Санті, Андреа Уорд, George Castiglia, Даніэль Ди Маттео, Олівьеро Дінеллі, Сільвио Ансельмо, Алессіо Уорд, Леонардо Канева, Патриція Салерно ","Графік серій":"Динофроз - датм виходу серій 2сезону: 26 серія  The Last Secret(Остання таємниця) 2 грудня 2015, 25 серія  Over The Skies Of Rocketown(Над небесами Роктауну) 1 грудня 2015, 24 серія From Father To Son(Від батька до сина) 27 листопада 2015, 23 серія  Unexpected Proposal(Несподівана пропозиція) 26 листопада 2015, 22 серія  The Ive Prison 25 листопада 2015, 21 серія Tower Assault(Штурм вежі) 24 листопада 2015, 20 серія  Mission Incredible(Неймовірна місія) 16 жовтня 2015,  19 серія A New Alliance(Новий союз) 15 жовтня 2015, 18 серія  Face to Face(Віч-на-віч) 14 жовтня 2015, 17 серія  In the Lair of the Enemy(У лігві ворога) 13 жовтня 2015, 16 серія  Acquisition: Triceratops 9 жовтня 2015,  15 серія  The Shadow Of Betrayal(Тінь зради) 8 жовтня 2015,  14 серія  The Day of the Two Stars(День 2 зірок) 7 жовтня 2015, 13 серія  The Power of the DinoWatch 6 жовтня 2015, 12 серія  The Fury of Drakemon 2 жовтня 2015, 11 серія  Codename: Dominion Project 1 жовтня 2015, 10 серія  The Girl With The Jade Eyes(Дівина з Нефритовими очима) 30 вересня 2015,  9 серія  Race Against Time(Гонка проти часу) 29 вересня 2015, 8 серія  The Dragon Slayers 25 вересня 2015, 7 серія  Mystery At The Center Of The Earth(Таємниця в центрі Землі) 24 вересня 2015,  6 серія  The Dragon From The Swamp(Дракон з болота) 23 вересня 2015, 5 серія  The Legend of Firerock 22 вересня 2015, 4 серія  A New Dinofroz 18 вересня 2015, 3 серія  An Island in the Sky(Літаючий острів) 17 вересня 2015, 2 серія The Iron Dinosaur 16 вересня 2015,  1 серія  Return To The Past World(Повернення в доісторичний світ) 15 вересня 2015, 1 сезон 26 серія Все тільки починається(The End of the Beginning) 19 квітня 2014, 1 сезон 25 серія Віч-на-віч(Bare faced) 18 квітня 2014, 1 сезон 24 серія Останнє затемнення(The Last Eclipse) 14 грудня 2012, 1 сезон 23 серія Відчайдушна втеча(Desperate Escape) 13 грудня 2012, 1 сезон 22 серія Mission 'White Dragon' 12 грудня 2012, 1 сезон 21 серія (Тінь ворога)The Shadow of the Enemy 11 грудня 2012, 1 сезон 20 серія Повернення з темряви(Return from the Dark) 17 листопада 2012, 1 сезон 19 серія Зберігач озера(The Guardian of the Lake) 17 листопада 2012, 1 сезон 18 серія The Secret of James 16 листопада 2012, 1 сезон 17 серія Пригоди для шістьох(Adventure for Six) 16 листопада 2012, 1 сезон 16 серія Послання зминулого (Message From the Past) 15 листопада 2012, 1 сезон 15 серія Подвійний обман Double Deception 30 вересня 2012, 1 сезон 14 серія Повстання драконів(The Revolt of the Dragons) 29 вересня 2012,1 сезон 13 серія Hunt for General Treek 28 вересня 2012, 1 сезон 12 серія Місячний острів(The Island of the Moon) 27 вересня 2012, 1 сезон 11 серія Смертельна небезпека(Mortal Danger) 26 вересня 2012, 1 сезон 10 серія Несподівана допомога(An Unexpected Help) 22 вересня 2012, 1 сезон 9 серія Призначення(The Predestined) 21 вересня 2012, 1 сезон 8 серія Занедбаний храм(The Temple of Doom) 20 вересня 2012, 1 сезон 7 серія Жорстокий Ніцерон(Neceron the Mercyless) 19 вересня 2012, 1 сезон 6 серія Землі подрібнених лоз(In the Land of Crushing Liana) 18 вересня 2012, 1 сезон 5 серія Раптовий удар(Surprise Attack) 14 вересня 2012, 1 сезон 4 серія (Новий ворог)A New Enemy 13 вересня 2012, 1 сезон 3 серія The Rockfroz 12 вересня 2012, 1 сезон 2 серія Шаман(The Shaman) 11 вересня 2012, 1 сезон 1 серія Початок(The Origins) 11 вересня 2012 ","Сюжет":"","image":"dinofrozone","audio":"dinofrozAudio","author":"Mondo TV","video":"dinofrozVideo","text":"Динофроз","duration":120,"previewStart":15,"previewDuration":15,"images":["dinofrozone"],"lyrics":[{"time":8,"text":"Динофроз...Динофроз!","voice":"voice1","text_bbkids":"Динофроз...Динофроз!"},{"time":15,"text":"Світять яскраві зірки. Пригод крізь віки.","text_bbkids":"Четверо друзів знайшли дивну гру. В доісторичну пішли давнину."},{"time":21,"text":"В доісторичний світ потрапили ми.","voice":"voice1","text_bbkids":"Там динозаврами стали вони"},{"time":26,"text":"Тут динозаври б'ються в парі з людьми.","text_bbkids":"Тут динозаври б'ються в парі з людьми."},{"time":33,"text":"В битвах з ворогом твердий гартується дух!","text_bbkids":"В цьому карти їм допомогли. "},{"time":38,"text":"Страху немає, упевненим робиться рух!","text_bbkids":"У давнині небезпечні дракони. Та з ними впорались наші герої."},{"time":44,"text":"Бачимемо ціль і до бою рушаєм! Ми батьківшину свою захищаєм!","text_bbkids":"До бою готові всюди і завжди. І утілюють мрiї свої в боротьбі."},{"time":50,"text":"Динофроз! Воїни світла і воїни миру!","text_bbkids":"Динофроз! Дружні, завзяті, зброя в руках. "},{"time":56,"text":"Динофроз! Лиш в боротьбі здобувам довіру!","text_bbkids":"Динофроз! Вони Ніцерону не по зубах."},{"time":62,"text":"Динофроз! Готуємось до бою завзято!","text_bbkids":"Динофроз! Дружні, завзяті, зброя в руках. Вони Ніцерону не по зубах."},{"time":66,"text":"Будь сміливим друже! Переможе дужий!","text_bbkids":"Друзі б'ються завзято. Дракони тікають!"},{"time":72,"text":"Чистимо зброю! Готові до бою!","text_bbkids":"Четверо друзів майбутнє спасають!"},{"time":75,"text":"В битві за волю! Пірна з головою!","text_bbkids":"До бою завжди готові вони."},{"time":77,"text":"Пекло за дух. І мороз усе це динофроз!","text_bbkids":"Ховайтеся, вороги!"}]},{"id":4,"image":"monody","audio":"monodyAudio","author":"TheFatRat","lyrics":[{"time":168,"text":"Літо в пагорбах."},{"time":172,"text":"Ті туманні дні у мене в спогадах."},{"time":175,"text":"Ми все ще бігали."},{"time":179,"text":"Красою світу насолоджувались, як могли."},{"time":182,"text":"Бачачи зміни сезону."},{"time":182,"text":"Нашу дорогу тянуло пригоду."},{"time":185,"text":"Гора на шляху."},{"time":189,"text":"До моря, не наводила на нас страху."},{"time":195,"text":"Ось мы стоїмо з розпростертими обіймами."},{"time":199,"text":"Милуюся нашими краями."},{"time":202,"text":"Завжди сильні у світі, який ми створили."},{"time":209,"text":"Я чую тебе у вітрі. Попри приливи."},{"time":212,"text":"Бачу твої тіні на деревах."},{"time":216,"text":"Не змінюєшся ти у спогадах."},{"time":226,"text":""}],"text":"Monody"},{"id":7,"author":"SayGames - MyLittleUniverse(Estoty)","text":"Dragonora","audio":"dragonoraAudio","image":"dinofroztwo"},{"id":16,"image":"theorytwo","audio":"theorytwoAudio","author":"DJ-Nate","duration":140,"text":"Theory of everything II","images":["theorytwo"]},{"id":18,"image":"theory","audio":"theoryAudio","text":"Theory of everything","author":"DJ-Nate","duration":140,"images":["theory"]},{"id":19,"image":"unity","audio":"unityAudio","text":"Unity","author":"TheFatRat","duration":180,"images":["unity"]},{"id":20,"image":"hunger","audio":"hungerAudio","author":"TheFatRat","text":"Hunger","duration":180,"images":["hunger"],"Не співпадіння по субтитрам":"При додаванні, вони були змінені для рифми. ","lyrics":[{"time":11,"text":"Донечко, не лишай страх на згадку, я подбаю про те, щоб ти була у порядку"},{"time":16,"text":"Донечко, не хвилюйся за мене, все погане мине"},{"time":22,"text":"Віддам все, тобі моє"},{"time":27,"text":"Сподіваюся, ти не помітиш страх голоду, в моїх очах"},{"time":34,"text":"Все, про що ми мріяли"},{"time":39,"text":"Брехню за хмарами нам повіяли"},{"time":44,"text":"Зі страхами, з дощами, сльозами та болями"},{"time":49,"text":"Донечко, не бійся за неньку, я подбаю про твою безпеконьку"},{"time":52,"text":"Я продовжуватиму боротьбу, я продовжуватиму боротьбу"},{"time":66,"text":"Ховайся тут на ходу, поки я йду"},{"time":69,"text":"Ніхто не зашкодить, тобі хочу пообіцять"},{"time":72,"text":"Все буде добре, тут залишайся і мовчи, завдання тобі таке"},{"time":75,"text":"Не йди за мною, я повернуся завтра з тобою"},{"time":78,"text":"Віддам все, тобі моє"},{"time":82,"text":"Сподіваюся, ти не помітиш страх голоду, в моїх очах"},{"time":89,"text":"Все, про що ми мріяли"},{"time":94,"text":"Брехню за хмарами нам повіяли"},{"time":100,"text":"Зі страхами, зі дощами, сльозами та болями"},{"time":104,"text":"Донечко, не бійся за неньку, я подбаю про твою безпеконьку"},{"time":110,"text":"Я продовжуватиму боротьбу, я продовжуватиму боротьбу"},{"time":133,"text":"Не плач, моя айстра. Я повернуся завтра, коли прокинешся"},{"time":145,"text":"Не плач. Я буду сьогодні ввечері та триматиму монстрів подалі"},{"time":155,"text":""},{"time":165,"text":"(Come closer, пошепки) Підійди ближче, підійди ближче."},{"time":175,"text":"Я продовжуватиму боротьбу, бо я їх здолаю"}]}]`),Jp="/assets/horse-DCbtELLC.webp",Gp="/assets/humor-DlTxVxCE.mp4",_p="/assets/unity-F-cBWwIf.webp",Yp="/assets/monody-DBysFOWl.webp",Zp="/assets/turkeysfour-B1peYkuR.webp",Xp="/assets/turkeysfive-B9fezKPV.webp",Qp="/assets/asiumone-DdULW5D8.webp",eu="/assets/hunger-Bja8eIKz.webp",tu="/assets/dinofroz-Bw1EE6sM.mp3",au="/assets/thefatrat-monody-CyyZgIj8.opus",nu="/assets/unity-CzldB0Z5.opus",ru="/assets/thefatrat-hunger-BIsXRocl.opus",iu="/assets/dragon-CPH8-885.mp3",ou="/assets/theoty-of-everything-ll-BVc1Didm.opus",su="/assets/theory-of-everyting-KR1mwsne.opus",vn={faded:Ei,dinofrozVideo:Ai,harmony:qs,horse:Jp,theorytwo:Js,fingerdash:Gs,humorVideo:Gp,electrodynamix:_s,deserttwo:Ys,desertthree:Zs,desertfour:Xs,desertone:Qs,unity:_p,mecha:el,monody:Yp,clubstep:tl,turkeys:jr,chess:al,turkeytwo:nl,turkeythree:rl,turkeyfour:Zp,turkeyfive:Xp,turkeysix:il,turkeysone:ol,turkeyseven:sl,asiumone:Qp,asiumtwo:ll,asiumthree:dl,asiumfour:cl,asiumfive:pl,asiumsix:ul,asiumten:fl,asiumeleven:gl,asiumseven:xl,swamptwo:hl,swampthree:ml,swampsix:bl,swampseven:yl,swampeight:wl,swampnine:vl,theory:kl,deadlocked:jl,horrortwo:Sl,horrorthree:Cl,horrorfour:Tl,horror:Al,horrorsix:Il,horroreight:Ml,dinofrozone:Fi,dinofrozthree:Dl,dinofrozfour:zl,dinofrozfive:Rl,dinofrozsix:Fl,dinofrozseven:Ll,dinofrozeight:$l,dinofroztwo:Li,dinofroznine:El,hunger:eu,mia:Pl,dinofrozAudio:tu,monodyAudio:au,unityAudio:nu,hungerAudio:ru,dragonoraAudio:iu,theorytwoAudio:ou,theoryAudio:su},wm=Bl.map(t=>({...t,image:vn[t.image]||t.image,audio:vn[t.audio]||t.audio,video:vn[t.video]||t.video,images:Array.isArray(t.images)?t.images.map(a=>vn[a]||a):t.images,filters:Array.isArray(t.filters)?t.filters.map(a=>({...a,imageUrl:vn[a.imageUrl]||a.imageUrl})):t.filters})),Vr=[{key:"hero",label:"Головна",path:"hero"},{key:"weather",label:"Погода",path:"weather"},{key:"map",label:"Кліматична мапа",path:"map"},{key:"aihelp",label:"Допомога ШІ",path:"aihelp"},{key:"fanart",label:"Друкарня",path:"fanart"}],nn="/assets/relax-Dn2PcHdb.mp3",lu="/assets/bell-B5cBbKiy.mp3",du="/assets/concierge-ItJSby-8.mp3",Bo=[{id:"none",label:"Вимкнено"},{id:"grayscale",label:"Дальтонізм"},{id:"sepia",label:"Сепія"},{id:"invert",label:"Негатив"},{id:"matrix",label:"Пікселізація"},{id:"uv",label:"УФ-Лампа"},{id:"contrast",label:"Контраст"},{id:"saturate",label:"Насиченість"},{id:"blur",label:"Розмиття"},{id:"hue",label:"Веселка"},{id:"chaos",label:"Хаос"},{id:"ultrachaos",label:"Ультрахаос"}],cu=[{id:"cinema",label:"🎬 Кіно",config:{darkIntensity:15,filterType:"sepia",filterIntensity:20}},{id:"night",label:"🌙 Ніч",config:{darkIntensity:70,filterType:"none",filterIntensity:50}},{id:"retro",label:"📻 Ретро",config:{darkIntensity:5,filterType:"grayscale",filterIntensity:80}},{id:"acid",label:"🌈 Кислота",config:{darkIntensity:0,filterType:"hue",filterIntensity:60}}],Br={darkIntensity:0,filterType:"none",filterIntensity:50};if(typeof document<"u"){const t=document.createElement("style");if(t.id="visual-filters-animations",t.innerHTML=`
    @keyframes ultrachaos-anim {
      0% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(0deg); }
      50% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-max)) saturate(var(--v-saturate-max)) hue-rotate(180deg) blur(var(--v-blur-max)); }
      100% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(360deg); }
    }
    @keyframes rainbow-anim {
      0% { filter: brightness(var(--v-bright)) hue-rotate(0deg); }
      100% { filter: brightness(var(--v-bright)) hue-rotate(360deg); }
    }
  `,document.getElementById(t.id)||document.head.appendChild(t),!document.getElementById("visual-filters-pixelate")){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("aria-hidden","true"),a.setAttribute("width","0"),a.setAttribute("height","0"),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.pointerEvents="none";const r=document.createElementNS("http://www.w3.org/2000/svg","filter");r.setAttribute("id","visual-filters-pixelate"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("width","100%"),r.setAttribute("height","100%");const c=document.createElementNS("http://www.w3.org/2000/svg","feFlood");c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("height","1"),c.setAttribute("width","1");const l=document.createElementNS("http://www.w3.org/2000/svg","feComposite");l.setAttribute("width","2"),l.setAttribute("height","2");const d=document.createElementNS("http://www.w3.org/2000/svg","feTile");d.setAttribute("result","tiles");const m=document.createElementNS("http://www.w3.org/2000/svg","feComposite");m.setAttribute("in","SourceGraphic"),m.setAttribute("in2","tiles"),m.setAttribute("operator","in"),r.appendChild(c),r.appendChild(l),r.appendChild(d),r.appendChild(m),a.appendChild(r),document.body.appendChild(a)}}var Ho=t=>{if(!t)return;document.documentElement.style.transition="filter 0.4s ease-in-out";const a=100-(t.darkIntensity||0)*.6;let r=`brightness(${a}%)`;const{filterType:c,filterIntensity:l=50}=t;if(c==="ultrachaos"){const d=100+l*.6,m=100+l*2,f=100+l*1.6,x=100+l*5,g=l/50;document.documentElement.style.setProperty("--v-bright",`${a}%`),document.documentElement.style.setProperty("--v-contrast-min",`${d}%`),document.documentElement.style.setProperty("--v-contrast-max",`${m}%`),document.documentElement.style.setProperty("--v-saturate-min",`${f}%`),document.documentElement.style.setProperty("--v-saturate-max",`${x}%`),document.documentElement.style.setProperty("--v-blur-max",`${g}px`),document.documentElement.style.animation="ultrachaos-anim 4s infinite linear";return}if(c==="hue"){document.documentElement.style.setProperty("--v-bright",`${a}%`);const d=l>0?200/l:0;d>0?document.documentElement.style.animation=`rainbow-anim ${d}s infinite linear`:(document.documentElement.style.animation="none",document.documentElement.style.filter=`brightness(${a}%) hue-rotate(0deg)`);return}if(document.documentElement.style.animation="none",c==="grayscale")r+=` grayscale(${l}%)`;else if(c==="sepia")r+=` sepia(${l}%)`;else if(c==="invert"){const d=l-50;if(d>0)r+=` invert(${d*2}%)`;else if(d<0){const m=1+Math.abs(d)/50;r+=` contrast(${m*100}%) saturate(${m*100}%)`}}else if(c==="matrix"){const d=Math.max(2,Math.round(10-l/12)),m=document.getElementById("visual-filters-pixelate");if(m){const f=m.querySelector("filter");if(f){const x=f.querySelector("feComposite");x&&(x.setAttribute("width",String(d)),x.setAttribute("height",String(d)))}}r+=` brightness(${a}%) url(#visual-filters-pixelate) contrast(${110+l*.7}%) saturate(${100+l*.8}%)`}else c==="uv"?r+=` hue-rotate(280deg) saturate(${100+l}%)`:c==="contrast"?r+=` contrast(${l*2}%)`:c==="saturate"?r+=` saturate(${l*2}%)`:c==="blur"?r+=` blur(${l/10}px)`:c==="hue"&&(r+=` hue-rotate(${l*3.6}deg)`);document.documentElement.style.filter=r},pu=t=>{const[a,r]=(0,n.useState)(Br),[c,l]=(0,n.useState)([]),d=t?.account?`visualConfig_${t.account}`:"visualConfig_guest",m=t?.account?`customPresets_${t.account}`:"customPresets_guest";(0,n.useEffect)(()=>{u.default.getItem(d).then(F=>{F&&r(F)}),u.default.getItem(m).then(F=>{l(F||[])})},[d,m]),(0,n.useEffect)(()=>{let F;if(a.filterType==="chaos"){const L=()=>{const z=Bo.filter(w=>!["none","chaos","ultrachaos"].includes(w.id)),y=z[Math.floor(Math.random()*z.length)],h=Math.floor(Math.random()*80)+20;Ho({...a,filterType:y.id,filterIntensity:h})};L(),F=setInterval(L,Math.floor(Math.random()*2e3)+1e3)}else Ho(a);return()=>clearInterval(F)},[a]);const f=(0,n.useCallback)(F=>{r(L=>{const z=typeof F=="function"?F(L):F;return u.default.setItem(d,z),z})},[d]),x=(0,n.useCallback)(()=>{f(Br),u.default.setItem(d,Br)},[d,f]),g=(0,n.useCallback)(F=>{if(!F.trim())return;const L={id:`custom_${Date.now()}`,label:`✨ ${F}`,config:{...a}};l(z=>{const y=[...z,L];return u.default.setItem(m,y),y})},[m,a]),N=(0,n.useCallback)(F=>{l(L=>{const z=L.filter(y=>y.id!==F);return u.default.setItem(m,z),z})},[m]),j=(0,n.useCallback)((F,L)=>{L.trim()&&l(z=>{const y=z.map(h=>h.id===F?{...h,label:`✨ ${L}`}:h);return u.default.setItem(m,y),y})},[m]),A=(0,n.useCallback)(F=>{l(F),u.default.setItem(m,F)},[m]);return{visualConfig:a,setVisualConfig:f,resetFilters:x,FILTERS:Bo,PRESETS:cu,customPresets:c,saveCustomPreset:g,deleteCustomPreset:N,updateCustomPresetName:j,reorderCustomPresets:A}},uu=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,fu=le`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,gu=le`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`,xu=i.div`
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${t=>t.$isDarkMode?"white":"#000000"};
  position: fixed;
  background: ${t=>t.$isDarkMode?"rgba(0, 0, 0, 0.45)":"rgba(255, 255, 255, 0.86)"};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: ${t=>t.$isStickyBgMode?"blur(10px)":"none"};
  color: ${t=>t.$isDarkMode?"white":"#000000"};
  top: 0;
  left: 0;
  z-index: 1900;
  transition:
    background-color 0.4s ease,
    backdrop-filter 0.4s ease;
  box-sizing: border-box;
  animation: ${gu} 0.8s ease-out 4.3s both;
  margin: 0;
`,hu=i.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`,va=i.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  align-items: center;
  justify-content: center;
  padding: 2px;
  flex-shrink: 0;
`,La=i.span`
  display: inline-block;
  font-size: 21px;
`;i.span`
  font-size: 12px;
  font-weight: 900;
  max-width: 78%;
  white-space: nowrap;
  text-shadow: 
    -1px -1px 0 #080808,  
     1px -1px 0 #080808,
    -1px  1px 0 #080808,
     1px  1px 0 #080808;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 3px;
  flex-shrink: 2;

  ${t=>t.$uColor?.includes("linear")?rt`
        background: ${t.$uColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 400% 400%;
        animation: ${fu} 5s ease infinite;
      `:`color: ${t.$uColor||"inherit"};`}
`;var Ko=i.img`
  width: 35px;
  height: 35px;
  min-width: 30px;
  margin-right: 0;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  background-image: ${t=>t.$bColor?.includes("linear-gradient")?`linear-gradient(white, white), ${t.$bColor}`:"none"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-color: ${t=>t.$bColor?.includes("linear-gradient")?"transparent":t.$bColor||"transparent"};
`,mu=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,bu=i.button`
  display: flex;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.07)":"rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"};
  color: ${t=>t.$isDarkMode?"#fff":"#111"};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
  }
`,yu=i.div`
  position: absolute;
  top: 42px;
  right: 0;
  z-index: 2001;
  min-width: 290px;
  background: ${t=>t.$isDarkMode?"rgba(14, 14, 14, 0.96)":"rgba(255, 255, 255, 0.96)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.12)"};
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 12px 14px;
  color: ${t=>t.$isDarkMode?"#fff":"#111"};
`,wu=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,vu=i.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`,ku=i.div`
  font-size: 12px;
`,Uo=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  gap: 4px;
    & > * {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`,ju=i.div`
  position: absolute;
  top: 52px;
  right: 10px;
  background: ${t=>t.$isDarkMode?"rgba(18, 18, 18, 0.95)":"rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${t=>t.$isDarkMode?"#444":"#ddd"};
  backdrop-filter: blur(5px);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Hr=i.label`
  font-size: 11px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,Wo=i.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${t=>t.$isDarkMode?"#ffb36c":"#007bff"};
`,Su=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`,Cu=i.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#3e2723":t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 6px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`,ua=({content:t,children:a,placement:r="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,n.useState)(!1),m=(0,n.useRef)(null),{refs:f,floatingStyles:x,context:g}=Rn({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:An,middleware:[zn(8),Fn(),In({padding:5}),Tn({element:m})]}),{isMounted:N,styles:j}=Cn(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),A=Sn(g,{move:!1}),F=$n(g),L=jn(g),z=En(g,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:h}=Dn([A,F,L,z]);if(!t)return a;const w=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...y(),style:{display:"inline-flex"},children:a}),N&&(0,e.jsx)(Mn,{children:(0,e.jsxs)(uu,{ref:f.setFloating,$isDarkMode:c,style:{...x,...j},...h(),children:[t,(0,e.jsx)(Ln,{ref:m,context:g,fill:w,stroke:"#00acb9",strokeWidth:1})]})})]})},Tu=({sfxVolume:t=.2,onOpenLogin:a,onOpenRegister:r,onOpenSettings:c,onOpenVip:l,onOpenShop:d,onOpenHelp:m,onOpenOtherOptions:f,onOpenInfo:x,onOpenAuthorsDirectory:g,isInfoOpen:N,isDarkMode:j,toggleTheme:A,isStickyBgMode:F,setIsStickyBgMode:L,onOpenAchievements:z,currentAvatar:y,onLogout:h,user:w,currentPath:S,setIsFsActive:k,loadingStrategy:K,onSetLoadingStrategy:H})=>{const{registerRef:te}=Gn?.()||{registerRef:()=>{}},[ee,fe]=(0,n.useState)(!1),[Q,M]=(0,n.useState)(!1),O=w?.photoURL||w?.avatar||y||"data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",ae=ne=>{ne.currentTarget.onerror=null,ne.currentTarget.src=Ti},[ge,ce]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!ge)return;const ne=Ie=>{const Fe=document.getElementById("header-profile-modal"),st=document.getElementById("header-profile-button");Fe&&!Fe.contains(Ie.target)&&st&&!st.contains(Ie.target)&&ce(!1)};return document.addEventListener("mousedown",ne),()=>document.removeEventListener("mousedown",ne)},[ge]);const{visualConfig:Y,setVisualConfig:_,resetFilters:me,FILTERS:re,PRESETS:Te,customPresets:Ae,saveCustomPreset:ft,deleteCustomPreset:Ct,updateCustomPresetName:Jt,reorderCustomPresets:gt}=pu(w);(0,n.useEffect)(()=>{const ne=setInterval(()=>fe(Ie=>!Ie),3e3);return()=>clearInterval(ne)},[]);const Be=ne=>{const Ie=new Audio(ne);Ie.volume=t,Ie.play().catch(()=>{})},qe=()=>{Be(lu),A()},Nt=()=>{Be(du),L(ne=>!ne)},Ot=()=>{Be(nn),m&&m()},Je=()=>{Be(nn),d&&d()},Tt=()=>{Be(nn),c&&c()},At=()=>{Be(nn),h&&h()},wt=()=>{Be(nn),a&&a()},xt=()=>{Be(nn),r&&r()},it=ne=>{Be(nn),_(Ie=>({...Ie,filterType:ne}))},Xe=ne=>{Be(nn),_(ne)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(xu,{$isDarkMode:j,$isStickyBgMode:F,"data-decorator-ignore":"true",children:[(0,e.jsx)(hu,{children:w?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(Uo,{ref:ne=>te("headerBgTheme",ne),children:[(0,e.jsx)(ua,{content:"Змінити тему",isDarkMode:j,children:(0,e.jsx)(va,{onClick:qe,$isDarkMode:j,"aria-label":"Змінити тему",children:(0,e.jsx)(La,{style:{fontSize:"19px"},children:j?(0,e.jsx)(Ea,{}):(0,e.jsx)(qa,{})})})}),(0,e.jsx)(ua,{content:"Фон на увесь сайт",isDarkMode:j,children:(0,e.jsx)(va,{onClick:Nt,$isDarkMode:j,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(La,{children:(0,e.jsx)(So,{style:{color:F?"#ff005d":"inherit"}})})})}),(0,e.jsx)(ua,{content:"Допомога з сайтом",isDarkMode:j,children:(0,e.jsx)(va,{onClick:Ot,$isDarkMode:j,"aria-label":"Допомога з сайтом",children:(0,e.jsx)(La,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(ua,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:j,children:(0,e.jsx)(va,{onClick:Je,$isDarkMode:j,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(mo,{})})}),(0,e.jsx)(ua,{content:"Автори та джерела",isDarkMode:j,children:(0,e.jsx)(va,{onClick:()=>g?.(),$isDarkMode:j,"aria-label":"Автори та джерела",children:(0,e.jsx)(La,{style:{fontSize:"18px"},children:(0,e.jsx)(Ao,{})})})}),(0,e.jsx)(ua,{content:"Налаштування",isDarkMode:j,children:(0,e.jsx)(va,{onClick:Tt,$isDarkMode:j,"aria-label":"Налаштування",children:(0,e.jsx)(La,{children:(0,e.jsx)(Bs,{})})})}),(0,e.jsx)(ua,{content:"Вихід з акаунта",isDarkMode:j,children:(0,e.jsx)(va,{onClick:At,$isDarkMode:j,"aria-label":"Вихід з акаунта",children:(0,e.jsx)(La,{children:(0,e.jsx)(Hc,{})})})}),(0,e.jsxs)(mu,{children:[(0,e.jsx)(ua,{content:"Ваш профіль",isDarkMode:j,children:(0,e.jsx)(bu,{id:"header-profile-button",$isDarkMode:j,onClick:()=>ce(ne=>!ne),"aria-label":"Профіль користувача",children:(0,e.jsx)(Ko,{src:O,onError:ae,$bColor:w.borderColor,style:{width:"33px",height:"33px"}})})}),ge&&(0,e.jsx)(yu,{id:"header-profile-modal",$isDarkMode:j,children:(0,e.jsxs)(wu,{children:[(0,e.jsx)(Ko,{src:O,onError:ae,$bColor:w.borderColor,style:{width:"42px",height:"42px"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)(ku,{children:"Профіль"}),(0,e.jsxs)(vu,{children:["Електронна пошта: ",w.email||w.account]})]})]})})]})]})}):(0,e.jsxs)(Uo,{ref:ne=>te("headerBgTheme",ne),children:[(0,e.jsx)(ua,{content:"Змінити тему",isDarkMode:j,children:(0,e.jsx)(va,{onClick:qe,$isDarkMode:j,"aria-label":"Змінити тему",children:(0,e.jsx)(La,{style:{fontSize:"18px"},children:j?(0,e.jsx)(Ea,{}):(0,e.jsx)(qa,{})})})}),(0,e.jsx)(ua,{content:"Фон на увесь сайт",isDarkMode:j,children:(0,e.jsx)(va,{onClick:Nt,$isDarkMode:j,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(La,{children:(0,e.jsx)(So,{style:{color:F?"#ff005d":"inherit"}})})})}),(0,e.jsx)(ua,{content:"Навчання",isDarkMode:j,children:(0,e.jsx)(va,{onClick:Ot,$isDarkMode:j,"aria-label":"Навчання",children:(0,e.jsx)(La,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(ua,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:j,children:(0,e.jsx)(va,{onClick:Je,$isDarkMode:j,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(mo,{})})}),(0,e.jsx)(ua,{content:"Автори та джерела",isDarkMode:j,children:(0,e.jsx)(va,{onClick:()=>g?.(),$isDarkMode:j,"aria-label":"Автори та джерела",children:(0,e.jsx)(La,{style:{fontSize:"18px"},children:(0,e.jsx)(Ao,{})})})}),(0,e.jsx)("button",{onClick:wt,style:{fontSize:"11px",cursor:"pointer",background:"none",border:"none",textDecoration:"underline",display:"none",color:j?"#fff":"#000"},children:"Вхід"}),(0,e.jsx)("button",{onClick:xt,style:{fontSize:"14px",cursor:"pointer",background:"none",border:"none",marginRight:"15px",textDecoration:"underline",color:j?"#fff":"#000"},children:"Акаунт"})]})}),Q&&(0,e.jsxs)(ju,{$isDarkMode:j,children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)(Hr,{$isDarkMode:j,children:["Яскравість ",(0,e.jsxs)("span",{children:[Y.darkIntensity,"%"]})]}),(0,e.jsx)(Wo,{type:"range",min:"0",max:"100",value:Y.darkIntensity,onChange:ne=>_(Ie=>({...Ie,darkIntensity:Number(ne.target.value)})),$isDarkMode:j})]}),(0,e.jsx)(Su,{children:re.map(ne=>(0,e.jsx)(Cu,{$active:Y.filterType===ne.id,$isDarkMode:j,onClick:()=>it(ne.id),children:ne.label},ne.id))}),Y.filterType!=="none"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(Hr,{$isDarkMode:j,children:["Сила ефекту ",(0,e.jsxs)("span",{children:[Y.filterIntensity,"%"]})]}),(0,e.jsx)(Wo,{type:"range",min:"0",max:"100",value:Y.filterIntensity,onChange:ne=>_(Ie=>({...Ie,filterIntensity:Number(ne.target.value)})),$isDarkMode:j})]}),(0,e.jsxs)("div",{style:{marginTop:"5px"},children:[(0,e.jsx)(Hr,{$isDarkMode:j,style:{marginBottom:"8px"},children:"Стилі"}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[Te.map(ne=>(0,e.jsx)("button",{style:{background:"transparent",border:"1px solid #ffb36c",color:j?"#ffb36c":"#333",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer"},onClick:()=>Xe(ne.config),children:ne.label},ne.id)),Ae.map(ne=>(0,e.jsx)("button",{style:{background:"rgba(255, 179, 108, 0.1)",border:"1px solid #7afcff",color:j?"#7afcff":"#006666",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis"},onClick:()=>Xe(ne.config),children:ne.label},ne.id))]})]})]})]})})},qo=[{id:1,author:"Mondo TV",linkkone:"https://megogo.net/ua/view/1813141-dinofroz-sezon-1-seriya-1.html?video_view_tab=description",linknameoneone:"Дивитися",linknameonetwo:"Megogo",Замітка:"Ця студія багато чого цікавого випустила, ми показали лише незначну к-сть, не лише з повагою до автора і українського телеканалу що це показав, але й тому що Стихія хоче показали трохи ностальгії. Посилання на перегляд у Мегого і ютуб канал Малатко ТВ, беззаперечно розмістив. Надіюсь хтось це передивитися.",info:"Mondo TV SpA — італійська компанія з виробництва та розповсюдження телевізійних програм. Заснована Орландо Корраді в 1985 році та розташована в Римі, Mondo TV є публічною компанією, акції якої котируються на сегменті STAR головної італійської фондової біржі Borsa Italiana. Вона самостійно або у співпраці з міжнародними мережами розповсюджує та виробляє мультсеріали та художні фільми для телебачення та кінотеатрів. Mondo TV також працює в інших суміжних секторах, таких як розповсюдження музики та аудіовізуальних матеріалів, експлуатація, медіа, видавнича справа та мерчандайзинг, та є одним з небагатьох відділень італійських компаній або груп з виробництва аудіовізуальних матеріалів, що працюють на ринках за межами Італії."},{id:2,author:"TheFatRat",Замітка:"Особистий респект, за бажання поширення їхніх мелодій безкоштовно.",info:"TheFatRat (справжнє ім'я Крістіан Бюлль) — німецький музичний продюсер та діджей, відомий своїми електронними треками, які часто використовуються в ігрових відео та стрімах. Його музика характеризується енергійними ритмами та мелодійними елементами, що робить її привабливою для геймерів та фанатів електронної музики.",linkkone:"https://www.youtube.com/@TheFatRat",linknameoneone:"Профіль автора",linknameonetwo:"У YouTube"},{id:3,author:"TheTurkeyStudio",info:"Доміно сам цю назву придумав, він хоче щоб було місце де немає поняття, і чому прогноз погоди такий політичний, тому я й придумав Стихію :)"},{id:4,author:"DJ-Nate",Примітка:"Пісні автора з гри Geometry Dash, що є популярною грою на мобільних пристроях.",Замітка:"Лише тому що мій клас у минулому грав безпервно у цю гру.",linkkone:"https://dj-nate.newgrounds.com/",linknameoneone:"Профіль автора",linknameonetwo:"У Newgrounds",info:"DJ-Nate відомий своїми електронними треками, які часто використовуються в ігрових відео та стрімах. Його музика характеризується енергійними ритмами та мелодійними елементами, що робить її привабливою для геймерів та фанатів електронної музики."},{id:5,author:"SayGames - MyLittleUniverse(Estoty)",Примітка:"Усе чудово.",Замітка:"Без заміток",info:"SayGames - це команда розробників, які створювали гру My Little Universe і т.д. коротше ви управляєте маленьким світом, граючи за стікмена."}],Sr=le`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0; 
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1; 
  }
`,Pi=le`
  0% { 
    transform: translateY(0%) scale(1);
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0; 
  }
`,Au=le`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,Iu=le`
  0% { border-color: #ff0000; box-shadow: 0 0 5px #ff0000; }
  50% { border-color: #ff4d4d; box-shadow: 0 0 15px #ff0000; }
  100% { border-color: #ff0000; box-shadow: 0 0 5px #ff0000; }
`,Mu=le`
  0% { opacity: 0.4; }
  100% { opacity: 1; }
`,Du=le`
  0% { background-color: rgba(255, 0, 0, var(--chaos-opacity)); }      /* червоний */
  10% { background-color: rgba(255, 255, 0, var(--chaos-opacity)); }    /* жовтий */
  20% { background-color: rgba(255, 165, 0, var(--chaos-opacity)); }    /* оранжевий */
  30% { background-color: rgba(139, 69, 19, var(--chaos-opacity)); }    /* коричневий */
  40% { background-color: rgba(0, 255, 0, var(--chaos-opacity)); }      /* зелений */
  50% { background-color: rgba(0, 255, 255, var(--chaos-opacity)); }    /* голубий */
  60% { background-color: rgba(0, 0, 255, var(--chaos-opacity)); }      /* синій */
  70% { background-color: rgba(255, 255, 255, var(--chaos-opacity)); }    /* білий */
  80% { background-color: rgba(128, 0, 128, var(--chaos-opacity)); }    /* фіолетовий */
  90% { background-color: rgba(128, 128, 128, var(--chaos-opacity)); }  /* чорнобілий (сірий) */
  100% { background-color: rgba(255, 0, 0, var(--chaos-opacity)); }
`,zu=le`
  0% { background-position: 0% 0%; filter: hue-rotate(0deg) contrast(1.2); }
  25% { background-position: 100% 0%; filter: hue-rotate(90deg) contrast(1.4); }
  50% { background-position: 100% 100%; filter: hue-rotate(180deg) contrast(1.2); }
  75% { background-position: 0% 100%; filter: hue-rotate(270deg) contrast(1.4); }
  100% { background-position: 0% 0%; filter: hue-rotate(360deg) contrast(1.2); }
`,vm=le`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`,km=le`
  0% { transform: translate(0, 0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0, 0); }
`,jm=le`
  from { height: 0; }
  to { height: 12%; }
`,Sm=le`
  from { height: 0; }
  to { height: 12%; }
`,Ru=le`
  0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
  20% { opacity: 0.5; }
  50% { transform: translate(calc(-50% + var(--end-x, 0px)), calc(-50% + var(--end-y, 0px))) scale(var(--pulse-scale, 1)); }
  80% { opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
`,Fu=le`
  0% { 
    transform: translate(-50%, -50%) scale(0.1); 
    opacity: 1; 
  }
  40% { 
    transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(1); 
    opacity: 1;
  }
  70% {
    transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y) + 30px)) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y) + 120px)) scale(0); 
    opacity: 0;
  }
`,Lu=le`
  0% { opacity: 0; background-color: rgba(255, 255, 255, 0); }
  30% { opacity: 1; background-color: rgba(255, 255, 255, 0.1); }
  100% { opacity: 0; background-color: rgba(255, 255, 255, 0); }
`,Cm=i.div`
  position: absolute;
  top: 0;
  ${t=>t.$side==="left"?"left: 0;":"right: 0;"}
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2015;
  pointer-events: none;
  animation: ${Lu} 0.8s ease-out forwards;
  color: white;
  .icon {
    font-size: 36px;
    margin-bottom: 5px;
  }
  .text {
    font-size: 18px;
    font-weight: bold;
  }
`,Tm=i.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  z-index: 2020;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,$u=le`
  0% { opacity: var(--initial-opacity); }
  10% { opacity: 0.05; }
  20% { opacity: var(--initial-opacity); }
  30% { opacity: 0.05; }
  40% { opacity: var(--initial-opacity); }
  50% { opacity: 0.05; }
  60% { opacity: var(--initial-opacity); }
  70% { opacity: 0.05; }
  80% { opacity: var(--initial-opacity); }
  90% { opacity: 0.05; }
  100% { opacity: var(--initial-opacity); }
`,Am=i.div`
  background: ${t=>t.$isDarkMode?"white":"black"};
  border-radius: 20px;
  margin-top: 5px;
  display: none;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  ${t=>t.$isAudioBarActive&&rt`
      height: 55vh;
      max-height: 420px;
      overflow-y: auto;
      width: 98%;
      margin: 10px auto 10px auto;
      border: 3px solid orange;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: ${t.$isDarkMode?"#ffb36c":"orange"};
        border-radius: 10px;
        border: 2px solid ${t.$isDarkMode?"#1a1a1a":"transparent"};
        background-clip: content-box;
      }
    `}
`,Im=i.div`
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`,Mm=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  width: 100%;
  padding: 0 10px;
`,Dm=i.input`
  width: 100%;
  max-width: 250px;
  padding: 6px 10px;
  border-radius: 25px; /* Changed for dark mode */
  border: 2px solid ${t=>t.$isDarkMode?"#555":"#ccc"};
  font-size: 13px;
  outline: none;
  transition: border-color 0.3s;
  background: ${t=>t.$isDarkMode?"#333":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  &:focus {
    border-color: ${t=>t.$isDarkMode?"#ffb36c":"orange"};
  }
`,zm=i.select`
  padding: 6px 10px;
  border-radius: 25px;
  border: 2px solid #ccc;
  font-size: 13px;
  background: ${t=>t.$isDarkMode?"#333":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  font-family: var(--font-family);
  outline: none;
  cursor: pointer; /* Changed for dark mode */
  transition: border-color 0.3s;
  &:focus {
    border-color: orange;
  }
`,Rm=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 285px;
  height: 136px;
  border-radius: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`,Fm=i.div`
  position: relative;
  z-index: 100;
  text-align: center;
  padding: 5px;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  width: 100%;
  color: white;

  h3 {
    margin: 0;
    font-size: 15px;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 5px 0 0 0;
    font-size: 13px;
    opacity: 0.9;
  }
`,Lm=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 278px;
  height: 160px;
  background: #000;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  opacity: ${t=>t.$rating===-1?.6:1};
  border: ${t=>t.$rating===2?"2px solid #ff0000":t.$rating===1?"2px solid orange":"none"};
  animation: ${t=>t.$rating===2?rt`
          ${Iu} 2s infinite
        `:"none"};
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
  &:hover .card-overlay-buttons {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover .card-checkpoint-badge {
    opacity: 1;
    transform: scale(1);
  }
`,$m=i.img`
  width: calc(100% + 20px);
  margin: -10px -10px 15px -10px;
  border-radius: 15px 15px 0 0;
  position: sticky;
  top: -10px;
  z-index: 10;
  background: white;
  display: block; /* Changed for dark mode */
  object-fit: cover;
  max-height: 250px;
`,Em=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: ${t=>t.$isDarkMode?"#444":"#a5a5a5"};
  overflow: hidden;
`,Pm=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.05);
  }
`,Nm=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  text-align: left;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: 600;
  padding: 30px 12px 10px 12px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    transparent 100%
  );
  line-height: 1.4;
  z-index: 5;
  pointer-events: none;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Om=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 0px;
  span {
    font-size: 10px;
    color: rgb(119, 119, 119);
    display: inline-block;
  }
  .icon {
    min-width: 15px;
  }
  .value {
    min-width: 28px;
    text-align: right;
    font-weight: bold;
  }
`,Vm=i.input`
  flex-grow: 1;
  height: 3px;
  -webkit-appearance: none;
  background: linear-gradient(
    to right,
    ${t=>t.$activeColor||"orange"} 0%,
    ${t=>t.$activeColor||"orange"}
      ${t=>t.value*100||0}%,
    #444 ${t=>t.value*100||0}%,
    #444 100%
  );
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    transition: transform 0.1s;
  }
  &:hover::-webkit-slider-thumb {
    transform: scale(1.2);
  }
`,Bm=i.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 20px; /* Changed for dark mode */
  padding: 10px 110px;
  font-size: 19px;
  cursor: pointer;
  margin-top: 5px;
`,Hm=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  transition:
    background-color ${t=>t.$type==="flash"?"0.05s":"0.5s"}
      ease,
    opacity 0.5s ease,
    backdrop-filter 0.5s ease,
    -webkit-backdrop-filter 0.5s ease;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  opacity: 1;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;

  ${t=>t.$active&&rt`
      ${t.$type==="red"&&`background: linear-gradient(to right, rgba(255, 0, 0, ${t.$opacity}), rgba(255, 69, 0, ${t.$opacity}));`}
      ${t.$type==="purple"&&`background: linear-gradient(to right, rgba(255, 20, 147, ${t.$opacity}), rgba(255, 182, 193, ${t.$opacity}));`}
      ${t.$type==="green"&&`background: linear-gradient(to right, rgba(0, 255, 0, ${t.$opacity}), rgba(50, 205, 50, ${t.$opacity}));`}
      ${t.$type==="blue"&&`background: linear-gradient(to right, rgba(0, 0, 255, ${t.$opacity}), rgba(65, 105, 225, ${t.$opacity}));`}
      ${t.$type==="black"&&`background: linear-gradient(to right, rgba(0, 0, 0, ${t.$opacity}), rgba(0, 0, 0, ${t.$opacity}));`}
      ${t.$type==="orange"&&`background: linear-gradient(to right, rgba(230, 149, 0, ${t.$opacity}), rgba(255, 165, 0, ${t.$opacity}));`}
      ${t.$type==="cyan"&&`background: linear-gradient(to right, rgba(0, 255, 255, ${t.$opacity}), rgba(0, 206, 209, ${t.$opacity}));`}
      ${t.$type==="brown"&&`background: linear-gradient(to right, rgba(139, 69, 19, ${t.$opacity}), rgba(160, 82, 45, ${t.$opacity}));`}
      ${t.$type==="white"&&`background: linear-gradient(to right, rgba(255, 255, 255, ${t.$opacity}), rgba(240, 240, 240, ${t.$opacity}));`}
      ${t.$type==="image"&&rt`
          background-image: url(${t.$imageUrl});
          background-size: cover;
          background-position: center;
          background: transparent;
          opacity: ${t.$opacity||1};
        `}
      ${(t.$type==="flash"||t.$type==="flicker"||t.$flicker)&&rt`
          background: rgba(255, 255, 255, ${t.$opacity});
        `}
      ${t.$type==="chaos"&&rt`
          --chaos-opacity: ${t.$opacity||.4};
          animation: ${Du} 1.5s linear infinite;
        `}
      ${t.$type==="ultrachaos"&&rt`
          background: radial-gradient(
            circle at center,
            rgba(255, 0, 150, ${t.$opacity||.5}),
            rgba(0, 204, 255, ${t.$opacity||.5}),
            rgba(255, 255, 0, ${t.$opacity||.5}),
            rgba(0, 255, 0, ${t.$opacity||.5})
          );
          background-size: 300% 300%;
          animation: ${zu} 6s ease-in-out infinite;
          backdrop-filter: blur(2px) saturate(1.5);
        `}
      ${t.$type==="grayscale"&&rt`
          background: rgba(119, 119, 119, ${t.$opacity*.2});
        `}
      ${t.$type==="flicker"&&rt`
          animation: ${Mu} 0.1s infinite alternate;
        `}
    `}
`,Km=i.span`
  position: absolute;
  color: rgba(255, 255, 255, 0.91);
  pointer-events: none;
  user-select: none;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  animation: ${t=>t.$variation==="firework"?rt`
          ${Fu} ${t.$duration}s ease-out forwards
        `:rt`
          ${Ru} ${t.$duration}s ease-in-out infinite, ${$u} 3s ease-in-out ${Math.max(0,t.$duration-3)}s infinite
        `};

  top: ${t=>t.$top}%;
  left: ${t=>t.$left}%;
  font-size: ${t=>t.$size}px;
  opacity: ${t=>t.$opacity};
  --initial-opacity: ${t=>t.$opacity};

  --end-x: ${t=>t.$moveX||0}px;
  --end-y: ${t=>t.$moveY||0}px;
  --pulse-scale: ${t=>1+t.$volume*.4};

  filter: blur(${t=>t.$blur||0}px);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6); /* Стійкість до світлих фонів */
`,Um=i.input`
  flex-grow: 1;
  height: 5px;
  -webkit-appearance: none;
  background: linear-gradient(
    to right,
    /* Changed for dark mode */ orange 0%,
    orange ${t=>t.value/t.max*100||0}%,
    rgba(255, 255, 255, 0.3) ${t=>t.value/t.max*100||0}%,
    rgba(255, 255, 255, 0.3)
      ${t=>(t.$buffered||0)/t.max*100}%,
    rgba(255, 255, 255, 0.1)
      ${t=>(t.$buffered||0)/t.max*100}%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: height 0.1s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    height: 8px;
  }
`,Wm=i.div`
  flex-grow: 1;
  height: 40px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.2)"};
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5px;
  overflow: hidden;
  border-radius: 4px;
  padding: 0 4px;
`,qm=i.div`
  flex: 1;
  height: ${t=>Math.max(15,t.$height*100)}%;
  background: ${t=>t.$active?"orange":"rgba(255, 255, 255, 0.25)"};
  border-radius: 1px;
  transition: background 0.2s ease;
`,Jm=i.input`
  flex-grow: 1;
  height: 3px;
  -webkit-appearance: none;
  background: linear-gradient(
    /* Changed for dark mode */ to right,
    ${t=>t.$activeColor||"orange"} 0%,
    ${t=>t.$activeColor||"orange"}
      ${t=>(t.value-.2)/1.8*100||0}%,
    #ccc ${t=>(t.value-.2)/1.8*100||0}%,
    #ccc 100%
  );
  border-radius: 2px;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px; /* Changed for dark mode */
    height: 10px;
    border-radius: 50%;
    background: #333;
    cursor: pointer;
  }
`,Gm=i.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3000;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 9px;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 14px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.02);
  }
`,_m=i.input`
  flex-grow: 1;
  height: 3px;
  -webkit-appearance: none;
  background: linear-gradient(
    /* Changed for dark mode */ to right,
    orange 0%,
    orange ${t=>(t.value-5)/15*100}%,
    #ccc ${t=>(t.value-5)/15*100}%,
    #ccc 100%
  );
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: orange;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.2);
  }
`,Ym=i.button`
  background: transparent;
  border: none;
  color: ${t=>t.$active?"skyblue":"orange"};
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 5px;
  width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Zm=i.div`
  position: absolute;
  top: 50%;
  left: 11%;
  transform: translate(-50%, -50%) translateY(8px);
  display: flex;
  gap: 6px;
  z-index: 8;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`,Xm=i.button`
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  width: 38px;
  height: 38px;
  padding: 0;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 165, 0, 0.8);
    border-color: rgba(255, 165, 0, 0.6);
    transform: scale(1.12);
  }
  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }
`,Qm=i.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"black":"white"};
  margin-bottom: 10px;
`,eb=i.button`
  background: rgba(0, 0, 0, 0.43);
  backdrop-filter: blur(6px);
  border: none;
  border-radius: 50%;
  color: rgb(0, 204, 255);
  width: 38px;
  height: 38px;
  padding: 0;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    color: rgba(255, 165, 0, 0.8);
    transform: scale(1.12);
  }
  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }
`,Eu=i.div`
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  width: 100vw;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  z-index: 2005;
  animation: ${t=>t.$isClosing?Au:"none"} forwards;
`,tb=i.div`
  background: ${t=>t.$isDarkMode?"#1a1a1a":"white"};
  padding: 5px;
  width: 100%;
  max-width: 320px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: ${t=>t.$isClosing?Pi:Sr} forwards;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  &::-webkit-scrollbar {
    /* Changed for dark mode */
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    /* Changed for dark mode */
    background: ${t=>(t.$isDarkMode,"#ffb36c")};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    /* Changed for dark mode */
    background: ${t=>t.$isDarkMode?"#333":"#f0f0f0"};
  }
`,Pu=i.div`
  background: #e8e8e8;
  padding: 10px;
  border-radius: 15px;
  width: 95%; /* Changed for dark mode */
  max-width: 1800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${t=>t.$isClosing?Pi:Sr} 0.5s ease-out
    forwards;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  &::-webkit-scrollbar {
    /* Changed for dark mode */
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    /* Changed for dark mode */
    background: ${t=>(t.$isDarkMode,"#ffb36c")};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    /* Changed for dark mode */
    background: ${t=>t.$isDarkMode?"#333":"#dcdcdc"};
  }
`,ab=i.button`
  position: absolute;
  top: 0px;
  right: 5px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  &:hover {
    color: #ffb36c;
  }
`,nb=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 2000;
  display: ${t=>t.$closing?"none":"flex"};
  flex-direction: column;
  animation: ${t=>t.$closing?Pi:Sr} 0.3s ease-out
    forwards;

  @media screen and (orientation: portrait) {
    width: 100vh;
    height: 100vw;
    transform: rotate(90deg);
    top: 50%;
    left: 50%;
    transform-origin: center;
    translate: -50% -50%;
    animation: none;
  }
`,rb=i.div`
  position: fixed;
  z-index: 3500;
  background: black;
  border: 2px solid orange;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  min-width: 100px;
  min-height: 80px;
  touch-action: none;
  user-select: none;
`,ib=i.div`
  height: 24px;
  background: #1a1a1a;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  gap: 8px;
`,ob=i.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 12px;
  padding: 1px;
  display: flex;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    color: orange;
  }
`,sb=i.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
  background: linear-gradient(135deg, transparent 50%, orange 50%);
  z-index: 3010;
`,lb=i(Rt.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #111;
  border-top: 2px solid orange;
  z-index: 5000;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 5px;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.5);
  color: white;
  font-family: sans-serif;
  @media (max-width: 768px) {
    height: auto;
    flex-wrap: wrap;
  }
`,db=i.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    color: orange;
  }
`,cb=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2010;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
`,pb=i.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative; /* Ensure stacking context for children */
  align-items: center;
  position: relative;
  background: #000;
  width: 100%;
  height: 100%;
`,ub=i.div`
  width: 100%;
  position: relative; /* Establish stacking context for FilterOverlay */
  z-index: 1; /* Ensure it's below controls but above media */
  height: 100%;
  overflow: hidden;
`,fb=i.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
`,gb=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${t=>t.$animate?rt`
          ${Nu} 1s ease
        `:"none"};
`,Nu=le`
  from { opacity: 0; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1); }
`,xb=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 0px 33px 3px 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2010;
  opacity: ${t=>t.$visible?1:0};
  transform: translateY(${t=>t.$visible?0:"20px"});
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
`,hb=i.div`
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding: 5px 11px;
  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: orange;
  }
`,mb=i.img`
  height: 40px;
  width: 80px;
  object-fit: cover;
  border-radius: 6px;
  opacity: ${t=>t.$active?1:.5};
  border: ${t=>t.$active?"2px solid orange":"none"};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`,bb=i.h2`
  color: white;
  margin: 0;
  font-size: 14px;
  max-width: 60vw;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`,yb=i.div`
  position: absolute;
  bottom: 80px;
  right: 20px;
  background: rgba(30, 30, 30, 0.95);
  padding: 2px;
  border-radius: 12px;
  color: white;
  width: 250px;
  z-index: 2020;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,wb=i.div`
  position: absolute;
  bottom: ${t=>t.$show?t.$controlsVisible?"22%":"0.5%":"22%"};
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 13.5px;
  font-weight: bold;
  text-align: center;
  width: 80%;
  z-index: 2005;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 10px;
  border-radius: 20px;
  opacity: ${t=>t.$show?1:0};
  transition:
    opacity 0.3s,
    bottom 0.3s ease;
`,vb=i.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  z-index: 2030;
  width: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-align: center;
`,Ou=i.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  z-index: 10;
  &:hover {
    color: #ffb36c;
  }
`,kb=i.div`
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.8;
  white-space: pre-wrap;
  word-wrap: break-word;
  border: 1px solid #e0e0e0;
  text-align: left;
  color: #333;
  max-height: 900px;
  overflow-y: auto;
`,jb=i.p`
  margin: 5px 0;
  transition:
    color 0.3s,
    font-weight 0.3s;
  color: ${t=>t.$active?"orange":t.$isDarkMode?"#eee":"#333"};
  font-weight: ${t=>t.$active?"bold":"normal"};
`,Sb=i.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    font-weight: bold;
    font-size: 12px; /* Changed for dark mode */
    color: ${t=>t.$isDarkMode?"#eee":"black"};
  }
  input {
    /* Changed for dark mode */
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: black;
  }
`,Cb=i.div`
  border-radius: 7px; 
  font-size: 11px;
  color: ${t=>t.$isDarkMode?"#aaa":"#555"};
  text-align: left; 
`,Tb=i.div`
  width: 100%;
  height: 6px;
  background: #ddd;
  border: 1px solid #000000;
  border-radius: 3px;
  margin-top: 5px;
  overflow: hidden;
`,Ab=i.div`
  height: 100%;
  background: ${t=>t.$percent>80?"#ff4d4d":"#00bdb3"};
  width: ${t=>t.$percent}%;
  transition: width 0.5s ease;
`,Ib=i.div`
  position: relative;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  &:hover .slider-overlay {
    opacity: 1;
  }
`,Mb=i.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  color: #ffb36c;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 9px;
  font-weight: bold;
  z-index: 10;
  border: 1px solid rgba(255, 179, 108, 0.4);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  user-select: none;
  opacity: 0.8;
  transform: scale(0.9);

  &::before {
    content: "Ви зупинилися тут";
    position: absolute;
    bottom: -170%;
    right: -10%;
    transform: translateX(50%) translateY(10px);
    background: #222;
    color: #ffb36c;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 9px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-out;
    border: 1px solid #ffb36c;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 179, 108, 0.2);
    box-shadow: 0 0 12px rgba(255, 179, 108, 0.6);
    color: #fff;

    &::before {
      opacity: 1;
      visibility: visible;
      transform: translateX(50%) translateY(0);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`,Db=i.div`
  position: absolute;
  bottom: 100%;
  left: ${t=>t.$left}%;
  transform: translateX(-50%);
  font-size: 14px;
  z-index: 10;
  pointer-events: none;
  /* Styles for better visibility in stereogram */
  background: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
  border-radius: 3px;
  padding: 2px 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`,zb=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.2s;
`,Rb=i.button`
  background: #006eff;
  color: white;
  border: none;
  font-size: 10px;
  padding: 1px 4px;
  border-radius: 4px;
  cursor: pointer;
  width: 90%;
  &:hover {
    background: #d46000;
  }
`,Fb=i.div`
  position: absolute;
  bottom: 80px;
  right: 20px;
  background: rgba(30, 30, 30, 0.95);
  padding: 15px;
  border-radius: 12px;
  color: white;
  width: 300px;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 2020;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
`,Lb=i.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  &:hover .seek-tooltip {
    opacity: 1;
    visibility: visible;
  }
`,$b=i.div`
  position: absolute;
  bottom: 25px;
  left: ${t=>t.$left}%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #444;
  padding: 5px;
  border-radius: 5px;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s,
    visibility 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2025;
  white-space: nowrap;

  img {
    width: 100px;
    height: 60px;
    object-fit: cover;
    margin-bottom: 4px;
    border-radius: 4px;
    background: #000;
  }
  video {
    width: 100px;
    height: 60px;
    object-fit: cover;
    margin-bottom: 4px;
    border-radius: 4px;
    background: #000;
    display: block;
  }
  span {
    font-size: 12px;
    color: white;
    font-weight: bold;
  }
`,Eb=i.div`
  position: absolute;
  z-index: 2050;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Pb=i.div`
  width: 200px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;
`,Nb=i.div`
  height: 100%;
  background: #94fffa;
  width: ${t=>t.$progress}%;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px #94fffa;
`,Ob=i.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  color: ${t=>t.$isDarkMode?"white":"#333"};
  background: ${t=>t.$isDarkMode?"#1e1e1e":"#fff"};
`,Vb=i.div`
  flex: 1;
  overflow-y: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${t=>t.$isDarkMode?"#121212":"#f7f7f7"};
`,Bb=i.div`
  max-width: 80%;
  padding: 6px;
  border-radius: 15px;
  font-size: 13.5px;
  background: ${t=>t.$isUser?"#652b0f":t.$isDarkMode?"#333":"#e0e0e0"};
  color: ${t=>t.$isUser?"white":t.$isDarkMode?"#ddd":"#222"};
  align-self: ${t=>t.$isUser?"flex-end":"flex-start"};
`,Hb=i.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid ${t=>t.$isDarkMode?"#333":"#eee"};
  gap: 8px;
  input {
    flex: 1;
    padding: 8px 12px;
    border-radius: 20px;
    border: 1px solid ${t=>t.$isDarkMode?"#444":"#ccc"};
    background: ${t=>t.$isDarkMode?"#2c2c2c":"#fff"};
    color: ${t=>t.$isDarkMode?"#fff":"#000"};
    outline: none;
  }
  button {
    background: orange;
    border: none;
    border-radius: 20px;
    padding: 0 15px;
    color: white;
    cursor: pointer;
  }
`,Kb=i.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;
  background: #0f3460;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: ${Sr} 0.5s ease-out;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 560px;
`,Ub=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    position: relative;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.35;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Градієнт тепер затемнює картинку зліва направо, створюючи плашку під контент */
    background: linear-gradient(
      to right,
      rgba(26, 26, 46, 0.09) 0%,
      rgba(22, 33, 62, 0.11) 100%
    );
    pointer-events: none;

    @media (max-width: 768px) {
      background: linear-gradient(to top, #1a1a2e 0%, transparent 100%);
    }
  }
`,Wb=i.h2`
  position: absolute;
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  z-index: 3; /* Поверх фону */
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,qb=i.div`
  padding: 16px 24px 12px;
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
  z-index: 2;
`,Jb=i.div`
  /* ... (попередні стилі залишаються без змін) ... */
  background: rgba(15, 34, 96, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 10px 14px;
  border-left: 3px solid ${t=>t.$accent||"#667eea"};
  cursor: pointer;
  transition: all 0.2s;

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: rgba(15, 34, 96, 0.85);
    transform: translateX(3px);
  }

  .section-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: ${t=>t.$accent||"#667eea"};
    margin-right: 6px;
    white-space: nowrap; /* Мітка категорії завжди в 1 рядок */
    display: flex;
    align-items: center;
    gap: 4px;

    flex-shrink: 0;
  }

  .section-text {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    line-height: 1.4;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    min-width: 0;
  }
`,Gb=i.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,_b=i.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  line-height: 1;

  ${t=>t.$variant==="back"?rt`
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);

          &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(-2px);
          }
        `:rt`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);

          &:hover {
            box-shadow: 0 4px 14px rgba(102, 126, 234, 0.5);
            transform: translateY(-1px);
          }
        `}
`,Yb=i.div`
  position: relative;
  z-index: 3;
  width: 100%;
  padding: 12px 16px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Vu=({isOpen:t,onClose:a})=>{const[r,c]=(0,n.useState)(qo[0]||null);return t?(0,e.jsx)(Eu,{onClick:a,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,e.jsxs)(Pu,{onClick:l=>l.stopPropagation(),initial:{y:30,opacity:0},animate:{y:0,opacity:1},exit:{y:30,opacity:0},style:{background:"linear-gradient(145deg, rgba(17,18,34,0.97), rgba(20,28,52,0.97))",color:"white",border:"1px solid rgba(255,255,255,0.08)",padding:"18px",borderRadius:"18px",maxWidth:"760px",width:"92%",maxHeight:"78vh",overflow:"hidden",zIndex:2050},children:[(0,e.jsx)(Ou,{onClick:a,style:{color:"white"},children:"×"}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(220px, 260px) minmax(0, 1fr)",gap:"16px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{style:{margin:"0 0 12px",fontSize:"18px",color:"#ffb36c"},children:"Автори та джерела"}),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxHeight:"52vh",overflowY:"auto",paddingRight:"4px"},children:qo.map(l=>(0,e.jsxs)("button",{onClick:()=>c(l),style:{width:"100%",background:r?.author===l.author?"rgba(255,179,108,0.14)":"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",color:"white",padding:"10px 12px",textAlign:"left",cursor:"pointer",transition:"all 0.2s ease"},children:[(0,e.jsx)("div",{style:{fontWeight:700,fontSize:"14px",lineHeight:1.3},children:l.author}),(0,e.jsx)("div",{style:{fontSize:"11px",opacity:.75,marginTop:"2px"},children:l.info?l.info.slice(0,54).trim()+(l.info.length>54?"…":""):"Деталі автора"})]},l.id||l.author))})]}),(0,e.jsx)("div",{style:{minWidth:0,overflowY:"auto",maxHeight:"56vh",paddingRight:"6px"},children:r?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"10px",marginBottom:"12px"},children:[(0,e.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Автор / Компанія"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"22px",lineHeight:1.2,color:"#fff"},children:r.author})]}),(0,e.jsx)("div",{style:{fontSize:"14px",lineHeight:"1.7",color:"rgba(255,255,255,0.9)",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:r.info||"Опис автора відсутній."}),(r.linkkone||r.linknameoneone||r.linknameonetwo)&&(0,e.jsxs)("div",{style:{marginTop:"18px",display:"flex",flexWrap:"wrap",gap:"8px"},children:[r.linkkone&&(0,e.jsx)("a",{href:r.linkkone,target:"_blank",rel:"noreferrer",style:{display:"inline-block",background:"rgba(255,179,108,0.12)",border:"1px solid rgba(255,179,108,0.45)",color:"#ffd39a",padding:"8px 12px",borderRadius:"10px",textDecoration:"none",fontSize:"13px"},children:r.linknameoneone||"Джерело"}),r.linknameonetwo&&r.linkkone&&(0,e.jsx)("span",{style:{color:"rgba(255,255,255,0.7)",fontSize:"12px",alignSelf:"center"},children:r.linknameonetwo})]}),(r.Замітка||r.Примітка)&&(0,e.jsxs)("div",{style:{marginTop:"18px",padding:"12px 14px",borderRadius:"12px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"},children:[r.Замітка&&(0,e.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,e.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Нотатка"}),(0,e.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",lineHeight:"1.6",fontSize:"13px"},children:r.Замітка})]}),r.Примітка&&(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Примітка"}),(0,e.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",lineHeight:"1.6",fontSize:"13px"},children:r.Примітка})]})]})]}):null})]})]})}):null},Cr=Jn(Yc()),Bu="/assets/planes-jETY8OKB.webp",Hu="/assets/meridian-BmSGwtRn.webp",Hl="/assets/castle-DO6W3_-e.webp",Kl="/assets/herotext-e_tt891I.webp",Jo=JSON.parse(`[{"id":1,"title":"Метеофор (Gismeteo)","url":"https://meteofor.com.ua/","snippet":"Популярний український метеосайт.\\nПримітка: Містить новини пов'язані з політикою.\\nПостачальник: Uanet / Gismeteo\\nДата випуску: Грудень 1998 року","buttonText":"Подивитись погоду","images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxYt4fP3qDMhaY8ZMuec1u8XnEAqFuykvaQlICB7TSg&s=10"],"tags":["погода","прогноз","україна"]},{"id":2,"title":"Sinoptik — Погода в Україні","url":"https://sinoptik.ua/","snippet":"Погода на 7 днів, 10 днів та місяць для вашого міста.\\nПостачальник: Ukr.net\\nДата випуску: квітень 2006 року","buttonText":"Подивитись погоду","tags":["погода","синоптик","тиждень"],"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFgFFBCFHEgWc0pOHX3rHIIO9CapUlNIIZa6Ve7gl4A&s=10"]},{"id":3,"title":"YouTube","url":"https://www.youtube.com/","snippet":"Слухайте улюблену музику та дивіться відео під час перегляду погоди. Підпишись на 'SlivkiShow' та 'TheTurkeyStudio', будь ласка :)\\nАвтори: Стів Чен, Чад Герлі та Джавед Карім\\nТеперішній власник: Google / Alphabet Inc.\\nДата випуску: 14 лютого 2005 року(Викуплено Google 9 жовтня 2006 року)","buttonText":"Подивишся відео?","images":["planes"],"tags":["музика","відео"]},{"id":4,"title":"Aurora Hills: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk","snippet":"Ласкаво просимо до Аврора-Гіллз!\\n\\nРозташоване в глибині Аппалачів, містечко Аврора-Гіллз колись славилося своєю розвиненою промисловістю та мальовничими краєвидами. Завдяки багатим природним ресурсам регіону Аврора-Гіллз мало всі шанси стати одним із найзаможніших міст штату.\\n\\nОднак усе не так, як здається на перший погляд. Протягом останніх кількох років регіон сколихнула низка загадкових зникнень місцевих жителів і туристів, що спричинило масовий відтік населення з цього містечка. Тепер, у жовтні 1981 року, Аврора-Гіллз — лише тінь того, чим воно було колись; від колишнього процвітання майже нічого не залишилося.\\n\\nВам, як рейнджеру національного парку, належить розслідувати ці зникнення та знайти відповіді на запитання, що роками не давали спокою місцевим жителям. Чому за останні пів року кількість зникнень зросла? Чому не вдається знайти жодних слідів тих, хто зник безвісти? І, що найважливіше: хто чи що стоїть за всім цим? Саме вам доведеться вирушити вглиб національного парку, щоб розкрити таємниці Аврора-Гіллз...\\nВаші ставки: На основі реальних подій чи неймовірна уява?\\nДата випуску: 16 квітня 2024 року\\nПостачальник: NovaSoft Interactive","buttonText":"Завантажити гру","tags":["гра","горор","пригоди"],"youtubeTrailer":"https://www.youtube.com/embed/NsOV7eBWCfg","images":["https://play-lh.googleusercontent.com/JrzlwlllVs2WSAz3E0MM7fL-sym7E3bWO-c7689e-p1nqLjY6EWjE53zWfwXULleM1qxzDRjls3MNjK6Dhnkjw=w5120-h2880-rw","https://play-lh.googleusercontent.com/cndOTOCfDAHOXq87M-UEi26kPOg522GyHnqSKGnpwuUVTjkVXnBbVxWGjpSH6fAotiGJMPtD8MNwvwXxrEUjbQ=w1052-h592-rw","https://play-lh.googleusercontent.com/88Y_AW0zOqtcsL5fl5Lvv-il_0GPeG1TSk1zccYUfbpVjFvF_Q-MKZShoJohsb5Vmgu9P_V0kcq6aeiXh6hC1KA=w1052-h592-rw"]},{"id":5,"title":"Aurora Hills: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch2&hl=uk","snippet":"Ранок 6 жовтня 1981 року розпочався як і будь-який інший: пробудження від неспокійного сну, підготовка до майбутнього дня та поїздка до станції рейнджерів, де ви працювали останні 11 років. Аврора-Гіллз колись була тихою громадою, розташованою в горах Аппалачів, але серія зникнень майже зруйнувала цю безтурботну атмосферу. Лише відчуття спустошення пронизує навколишнє середовище, коли ви проїжджаєте через нині занедбане маленьке містечко.\\n\\nДжен не була на станції рейнджерів, коли ви прибули того ранку. Будучи єдиним іншим рейнджером парку, вона любить рано вставати, і до того часу, як ви прибули, вона вже поїхала до одного з численних закритих пішохідних маршрутів, щоб розпочати пошуки зниклих безвісти людей. Слідуючи її нотаткам, ви звертаєте з головної стежки, щоб зустрітися з нею та дослідити віддалені частини національного парку. Однак, коли ви знаходите її табір, ваші найгірші побоювання справджуються: місце розграбовано, її спорядження розкидано по всьому табору, її намет розірвано, а Джен ніде не видно.\\n\\nНемає часу повертатися назад, вже полудень, і сонце сідає рано в цю пору року. Єдине, що може бути гірше, ніж блукати лісом на самоті, це незважаючи на те, щоб пройти його вночі. Ви не можете покинути Джен зараз, не тоді, коли слід такий свіжий. Тепер у вас немає іншого вибору, окрім як заглибитися в незвідані частини національного парку, ті частини, які перелякані містяни перетворили на місцеві міські легенди. Вам краще піти швидше, можливо, у вас ніколи не буде кращого шансу розкрити темну історію Аврора-Гіллз...\\nДата випуску: 1 березня 2026 року\\nПостачальник: NovaSoft Interactive","buttonText":"Хто чи що викрадає людей?","youtubeTrailer":"https://www.youtube.com/embed/1ZqB0GZA_9c","tags":["гра","горор","пригоди"],"images":["https://play-lh.googleusercontent.com/lO4JOlv9mQttad-XCiiccy0egm3nJTHgxqoXyxTeN30tx3NxfOlvgSuXqY0sfimQPrh3k3aUySbKxoWsZ_NaYA=w1052-h592-rw","https://play-lh.googleusercontent.com/Aybi7U6MYW9PG314QPC2SDYkpJ5Umzr897Qwv84UygmbPGfclLy_luZxAqSWxJuwVmPSvaE5w_gN2OXIuHZVRQ=w1052-h592-rw","https://play-lh.googleusercontent.com/Evd_zcKkzaz1KOS-2rwqNlXl1k6f43OD_U-pn8amx5o1apN7SyGWa9a-D39cvrPZHfmgLRKR7Czlm4CYz4oXNw=w1052-h592-rw"]},{"id":6,"title":"Prometheus","url":"https://prometheus.org.ua/","snippet":"Найбільша українська платформа масових відкритих онлайн-курсів.\\nПостачальники: Іван Примаченко, Олексій Молчановський\\nДата випуску: 15 жовтня 2014 року","buttonText":"Записатись на курс","tags":["освіта","курси","корисно"]},{"id":7,"title":"Gemini","url":"https://gemini.google.com/","snippet":"Професійний ШІ асистент для аналізу тексту, зображень, відео та аудіо. І може їх створювати.\\nПостачальник: Google\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":8,"title":"DeepL Translator","url":"https://www.deepl.com/","snippet":"Один із найточніших онлайн-перекладачів на основі штучного інтелекту.\\nПостачальник: DeepL SE (Ярослав Кутиловський)\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":9,"title":"Coursera","url":"https://www.coursera.org/","snippet":"Онлайн-курси від найкращих університетів та компаній світу.\\nПостачальники: Ендрю Ин, Дафна Коллер\\nДата випуску: 18 квітня 2012 року","buttonText":"Записатись на курс","tags":["освіта","курси","саморозвиток"]},{"id":10,"title":"Duolingo","url":"https://www.duolingo.com/","snippet":"Опановуйте нові мови з найпопулярнішим навчальним додатком у світі! Duolingo — це безкоштовний додаток для вивчення понад 40 мов за допомогою веселих коротких уроків. Практикуйте говоріння, читання, слухання й письмо та вдосконалюйте свої лексичні й граматичні навички.\\nДодаток Duolingo, розроблений експертами з вивчення мови, люблять сотні мільйонів людей по всьому світу. Він допомагає підготуватися до живого спілкування іспанською, французькою, китайською, італійською, німецькою, англійською та багатьма іншими мовами.\\nХоч би з якою метою ви вивчали мову — для подорожей, навчання, кар’єри, спілкування з близькими чи тренування мозку, — вам неодмінно сподобається робити це з Duolingo.\\nЯкі ж переваги Duolingo?\\n• Опановувати мову з Duolingo цікаво та ефективно. Уроки в ігровій формі та веселі персонажі допоможуть вам навчитися впевнено розмовляти, читати, слухати та писати іноземною.\\n• Duolingo справді працює. Створена експертами з вивчення мови, методика Duolingo розроблена так, щоб вивчене закріплювалося в довготривалій пам’яті.\\n• У вас є змога відстежувати свій прогрес. А досягнути поставлених цілей і зробити навчання щоденною звичкою допоможуть веселі винагороди та досягнення!\\n• Ви навчаєтеся разом із понад 500 мільйонами людей з усього світу. Змагайтеся з іншими за переможні місця на дошках пошани, щоб підтримувати інтерес до навчання.\\n• Усі мовні курси безкоштовні. Вивчайте італійську, португальську, турецьку, нідерландську, ірландську, датську, шведську, українську, есперанто, польську, грецьку, угорську, норвезьку, іврит, валлійську, арабську, латинську, гавайську, шотландську ґельську, в’єтнамську, корейську, японську, англійську й навіть високу валірійську! І це не весь список!\\nОсь що кажуть у світі про Duolingo ⭐️⭐️⭐️⭐️⭐️:\\n«Вибір редакції й “найкращий серед найкращих”», — Google Play\\n«Безперечно, найкращий додаток для вивчення мов», — The Wall Street Journal\\n«Ці безкоштовні додаток і вебсайт — одні з наефективніших способів опановувати мову, які мені траплялися… уроки складаються з коротких цікавих завдань, як-от говоріння, переклад чи вибір правильної відповіді, тому я залюбки повертаюсь до них знов і знов», — The New York Times\\n«Duolingo може стати майбутнім освіти», — TIME Magazine\\n«...Duolingo — це веселий, милий і цікавий додаток», — Forbes\\nЯкщо ви любите Duolingo, спробуйте Super Duolingo протягом 14 днів безкоштовно! Опановуйте мову швидко, без реклами й отримуючи корисні бонуси, як-от необмежені серця та щомісячне відновлення відрізка.\\nНадсилайте свої відгуки на адресу android@duolingo.com\\nВебверсія доступна за адресою https://www.duolingo.com\\nПолітика конфіденційності: https://www.duolingo.com/privacy\\nДоміно: Доктор все погано, додаток чудовий, але мови індиків немає, я людей розумію, а вони мене ні... Доктор: Може це на краще, секрети замку ти не видаси :)\\nПостачальники: Луїс фон Ан, Северин Гакер\\nДата випуску: 29 травня 2013 року","buttonText":"Вчити мови","tags":["освіта","мови","корисно"]},{"id":11,"title":"Wikipedia (Українська)","url":"https://uk.wikipedia.org/","snippet":"Вільна енциклопедія, яку може редагувати кожен.\\nІлон Маск пропонував їм багато грошей, якщо вони перейменуються... Чомусь відмовились...\\nПостачальник: Wikimedia Foundation\\nДата випуску: 30 січня 2004 року","buttonText":"Читати і редагувати","youtubeTrailer":"https://www.youtube.com/watch?v=6UkFHYqVsbc","images":[],"tags":["енциклопедія","знання","довідник"]},{"id":12,"title":"Canva","url":"https://www.canva.com/","snippet":"Простий онлайн-інструмент для створення дизайну, презентацій та графіки.\\nЯкщо відкинути 3тю букву, буде кава :) Рифма від Кейт для пісні Полякової: Буде Кава, яку вип'є леді Гага!\\nПостачальник: Canva Pty Ltd (Мелані Перкінс, Кліфф Обрехт, Камерон Адамс)\\nДата випуску: 1 січня 2013 року","buttonText":"Створити дизайн","tags":["дизайн","інструменти","графіка"]},{"id":13,"title":"Photopea","url":"https://www.photopea.com/","snippet":"Безкоштовний онлайн-редактор зображень, аналог Photoshop.\\nМій перший дизайн: почник, з якого зникає шматок :)\\nПостачальник: Іван Куцкір\\nДата випуску: 14 вересня 2013 року","buttonText":"Редагувати фото","tags":["дизайн","фото","інструменти"]},{"id":14,"title":"Notion","url":"https://www.notion.so/","snippet":"Універсальний робочий простір для нотаток, баз даних та керування проєктами.\\nПостачальник: Notion Labs Inc. (Іван Чжао, Саймон Ласт)\\nДата випуску: березень 2016 року","buttonText":"Організувати роботу","tags":["продуктивність","нотатки","робота"]},{"id":15,"title":"Trello","url":"https://trello.com/","snippet":"Популярний інструмент для управління проєктами на основі канбан-дошок.\\nПостачальник: Atlassian (Джоел Спольскі, Майкл Прайор)\\nДата випуску: 13 вересня 2011 року","buttonText":"Керувати завданнями","tags":["продуктивність","менеджмент","робота"]},{"id":16,"title":"GitHub","url":"https://github.com/","snippet":"Найбільший вебсервіс для спільної розробки програмного забезпечення. До речі, ми теж там :)\\nПостачальник: GitHub Inc. / Microsoft\\nДата випуску: 10 квітня 2008 року","buttonText":"Програмувати","tags":["it","програмування","код"]},{"id":17,"title":"Stack Overflow","url":"https://stackoverflow.com/","snippet":"Спільнота для програмістів, де можна знайти відповіді на технічні питання.\\nПостачальник: Stack Exchange Inc. (Джоел Спольскі, Джефф Атвуд)\\nДата випуску: 15 вересня 2008 року","buttonText":"Знайти рішення","tags":["it","програмування","допомога"]},{"id":18,"title":"Wolfram Alpha","url":"https://www.wolframalpha.com/","snippet":"Обчислювальна система, що видає відповіді на складні математичні та наукові питання. Прикольний калькулятор :)\\nПостачальник: Wolfram Research (Стівен Вольфрам)\\nДата випуску: 18 травня 2009 року","buttonText":"Обчислити","tags":["наука","математика","корисно"]},{"id":19,"title":"Google Scholar","url":"https://scholar.google.com/","snippet":"Пошукова система для наукової літератури та публікацій.\\nПостачальник: Google / Alphabet Inc. (Анураг Ачар'я)\\nДата випуску: 20 листопада 2004 року","buttonText":"Шукати статті","tags":["наука","освіта","пошук"]},{"id":20,"title":"TED","url":"https://www.ted.com/","snippet":"Відеолекції від видатних людей на теми технологій, розваг та дизайну.\\nПочатковий власник: Річард Сол Вурмен та Гаррі Маркс\\nПочатковий автор: TED Conferences LLC / Sapling Foundation (Кріс Андерсон)\\nДата випуску: 23 лютого 1984 року","buttonText":"Дивитись лекції","tags":["освіта","відео","натхнення"]},{"id":21,"title":"Internet Archive","url":"https://archive.org/","snippet":"Некомерційна бібліотека мільйонів безкоштовних книг, фільмів, програм та історії вебсайтів (Wayback Machine).\\nПостачальник: Брюстер Кейл\\nДата випуску: 10 травня 1996 року","buttonText":"Шукати в архіві","tags":["історія","архів","книги"]},{"id":22,"title":"Khan Academy","url":"https://uk.khanacademy.org/","snippet":"Безкоштовні мікролекції з математики, історії, медицини тощо.\\nПостачальник: Салман Хан (Salman Khan)\\nДата випуску: вересень 2006 року","buttonText":"Навчатися","tags":["освіта","школа","корисно"]},{"id":23,"title":"W3Schools","url":"https://www.w3schools.com/","snippet":"Найбільший вебсайт для вивчення веб-технологій (HTML, CSS, JavaScript).\\nПостачальник: Refsnes Data\\nДата випуску: 1998 рік","buttonText":"Вчити код","tags":["it","програмування","навчання"]},{"id":24,"title":"Figma","url":"https://www.figma.com/","snippet":"Онлайн-редактор для створення інтерфейсів та прототипування.\\nУлюблений інструмент дизайнерів (і ні, це не те, про що ви подумали за першими трьома буквами :)\\nПостачальник: Ділан Філд та Еван Воллес (Dylan Field, Evan Wallace)\\nДата випуску: 27 вересня 2016 року","buttonText":"Створювати дизайн","tags":["дизайн","інструменти","it"]},{"id":25,"title":"Miro","url":"https://miro.com/","snippet":"Віртуальна дошка для спільної роботи команд, мозкових штурмів та схем.\\nПостачальник: Андрій Хусид та Олег Шардин\\nДата випуску: 2011 рік","buttonText":"Малювати схеми","tags":["продуктивність","робота","інструменти"]},{"id":26,"title":"Grammarly","url":"https://www.grammarly.com/","snippet":"Онлайн-сервіс для перевірки граматики та стилістики текстів (англійською).\\nПостачальник: Олексій Шевченко, Макс Литвин, Дмитро Лідер\\nДата випуску: 1 липня 2009 року","buttonText":"Перевірити текст","tags":["інструменти","письмо","англійська"]},{"id":27,"title":"Todoist","url":"https://todoist.com/","snippet":"Один із найкращих додатків для ведення списків справ (To-Do list).\\nПостачальник: Doist Ltd. (Amir Salihefendıć)\\nДата випуску: 1 січня 2007 року","buttonText":"Планувати","tags":["продуктивність","планування","корисно"]},{"id":28,"title":"Flightradar24","url":"https://www.flightradar24.com/","snippet":"Сервіс для відстеження авіаперельотів у реальному часі по всьому світу.\\nПостачальник: Мікаель Робертссон та Олов Ліндберг\\nДата випуску: 2006 рік","buttonText":"Відстежувати літаки","tags":["радар","авіація","мапа"]},{"id":29,"title":"Windy","url":"https://www.windy.com/","snippet":"Інтерактивна мапа погоди, вітру, циклонів та опадів. Ми її використовуємо на сайті, і спробуйте її з нашими інструментами у Стихії!\\nПостачальник: Іво Лукачович\\nДата випуску: листопад 2014 року","buttonText":"Дивитися погоду","tags":["погода","мапа","метеорологія"]},{"id":30,"title":"VirusTotal","url":"https://www.virustotal.com/","snippet":"Безкоштовна перевірка файлів та посилань на віруси понад 70 антивірусами.\\nЩось ковіду не зупинило :(\\nПостачальник: Chronicle / Google\\nДата випуску: червень 2004 року","buttonText":"Перевірити на віруси","tags":["безпека","інструменти","корисно"]},{"id":31,"title":"Speedtest by Ookla","url":"https://www.speedtest.net/","snippet":"Найпопулярніший сервіс для перевірки швидкості інтернет-з'єднання.\\nПостачальник: Ookla LLC / Ziff Davis\\nДата випуску: 2006 рік","buttonText":"Тест швидкості","tags":["інструменти","інтернет","тест"]},{"id":32,"title":"AlternativeTo","url":"https://alternativeto.net/","snippet":"Сайт для пошуку аналогів та альтернатив для будь-якого програмного забезпечення.\\nПостачальник: Ола та Маркус\\nДата випуску: березень 2009 року","buttonText":"Знайти альтернативу","tags":["інструменти","софт","пошук"]},{"id":33,"title":"Unsplash","url":"https://unsplash.com/","snippet":"Величезна бібліотека якісних фотографій, вільних для використання.\\nПостачальник: Unsplash / Getty Images (Мікаель Чо)\\nДата випуску: травень 2013 року","buttonText":"Шукати фото","tags":["фото","дизайн","ресурси"]},{"id":34,"title":"Pixabay","url":"https://pixabay.com/","snippet":"Безкоштовні стокові зображення, векторна графіка та відео. Використуємо їх бібліотеку на сайті!\\nПостачальник: Pixabay / Canva (Ганс Браксмайєр, Саймон Штейнбергер)\\nДата випуску: 24 листопада 2010 року","buttonText":"Знайти медіа","tags":["фото","ресурси","дизайн"]},{"id":35,"title":"Medium","url":"https://medium.com/","snippet":"Платформа для публікації статей та блогів на будь-які теми.\\nПостачальник: A Medium Corporation (Ев Вільямс)\\nДата випуску: 15 серпня 2012 року","buttonText":"Читати статті","tags":["статті","блог","читання"]},{"id":36,"title":"Pinterest","url":"https://www.pinterest.com/","snippet":"Соціальна мережа для пошуку та збереження візуальних ідей.\\nПостачальник: Бен Зільберман, Пол Скіарра, Еван Шарп\\nДата випуску: січень 2010 року","buttonText":"Шукати ідеї","tags":["візуал","натхнення","дизайн"]},{"id":37,"title":"Behance","url":"https://www.behance.net/","snippet":"Платформа від Adobe для демонстрації творчих робіт дизайнерів та ілюстраторів.\\nПостачальник: Adobe Inc. (Матіас Корреа, Скотт Бельські)\\nДата випуску: листопад 2005 року","buttonText":"Дивитися портфоліо","tags":["дизайн","портфоліо","мистецтво"]},{"id":38,"title":"Ninite","url":"https://ninite.com/","snippet":"Інструмент для швидкого та автоматичного встановлення популярних програм на Windows.\\nПостачальник: Патрік Свенсковські та Саша Кузінс\\nДата випуску: жовтень 2009 року","buttonText":"Встановити софт","tags":["інструменти","windows","софт"]},{"id":39,"title":"ProtonMail","url":"https://proton.me/mail","snippet":"Захищена електронна пошта з наскрізним шифруванням, розроблена в Швейцарії.\\nПостачальник: Proton AG (Енді Йєн)\\nДата випуску: 16 травня 2014 року","buttonText":"Створити пошту","tags":["безпека","пошта","приватність"]},{"id":40,"title":"1.1.1.1 (Cloudflare)","url":"https://1.1.1.1/","snippet":"Безпечний та швидкий DNS-сервіс для приватного серфінгу в інтернеті.\\nДоміно намагався заблокувати свій власний секретний сайт через 1.1.1.1, але забув, що цього сайту навіть не існує в природі :)\\nПостачальник: Метью Прінс, Мішель Затлін, Лі Голловей\\nДата випуску: 1 квітня 2018 року","buttonText":"Налаштувати DNS","tags":["безпека","інтернет","інструменти"]},{"id":41,"title":"Google Keep","url":"https://keep.google.com/","snippet":"Швидкий та зручний сервіс для створення коротких нотаток та списків від Google.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 20 березня 2013 року","buttonText":"Створити нотатку","tags":["продуктивність","нотатки","google"]},{"id":42,"title":"Codecademy","url":"https://www.codecademy.com/","snippet":"Інтерактивна платформа для вивчення програмування з нуля.\\nПостачальник: Codecademy / Skillsoft (Зач Сімс, Раян Бубінські)\\nДата випуску: серпень 2011 року","buttonText":"Вчити програмування","tags":["освіта","it","код"]},{"id":43,"title":"MDN Web Docs","url":"https://developer.mozilla.org/","snippet":"Найповніша документація для веброзробників від Mozilla.\\nПостачальник: Mozilla Foundation\\nДата випуску: 15 липня 2005 року","buttonText":"Читати документацію","tags":["it","довідник","web"]},{"id":44,"title":"Pocket","url":"https://getpocket.com/","snippet":"Сервіс для збереження статей, відео та сторінок, щоб прочитати їх пізніше.\\nПостачальник: Mozilla Corporation (Нейт Вайнер)\\nДата випуску: серпень 2007 року","buttonText":"Зберегти на потім","tags":["читання","продуктивність","інструменти"]},{"id":45,"title":"Feedly","url":"https://feedly.com/","snippet":"Агрегатор RSS-стрічок для зручного читання новин з улюблених сайтів.\\nПостачальник: DevHD (Ерван Гранжен)\\nДата випуску: 15 червня 2008 року","buttonText":"Читати новини","tags":["новини","інструменти","інформація"]},{"id":46,"title":"Nova Poshta (Нова Пошта)","url":"https://novaposhta.ua/","snippet":"Офіційний сайт найбільшого логістичного оператора України. Відстеження посилок.\\nПостачальник: В'ячеслав Климов, Володимир Поперешнюк\\nДата випуску: 13 лютого 2001 року","buttonText":"Відстежити посилку","tags":["доставка","сервіс","україна"]},{"id":47,"title":"Rozetka","url":"https://rozetka.com.ua/","snippet":"Найбільший онлайн-ритейлер в Україні: електроніка, одяг, товари для дому.\\nПостачальник: ТОВ «Розетка.УА» (Владислав Чечоткін)\\nДата випуску: 2005 рік","buttonText":"Купувати","tags":["магазин","покупки","україна"]},{"id":48,"title":"Ukr.net","url":"https://www.ukr.net/","snippet":"Популярний український вебпортал, стрічка новин та електронна пошта.\\nПостачальник: ТОВ «Укрнет»\\nДата випуску: 1998 рік","buttonText":"Читати новини","tags":["новини","портал","україна"]},{"id":49,"title":"Google Drive","url":"https://drive.google.com/","snippet":"Хмарне сховище для зберігання файлів та спільної роботи над документами.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 24 квітня 2012 року","buttonText":"Відкрити диск","tags":["хмара","файли","робота"]},{"id":50,"title":"ChatGPT","url":"https://chat.openai.com/","snippet":"Штучний інтелект для генерації текстів, програмування та відповідей на запитання.\\nПримітка: 13+ з дозволу батьків, 18+ самостійне використання\\nПостачальник: OpenAI\\nДата випуску: 30 листопада 2022 року","buttonText":"Спілкуватися з ШІ","tags":["ші","інструменти","технології"]},{"id":51,"title":"EdEra","url":"https://www.ed-era.com/","snippet":"Студія онлайн-освіти, що створює інтерактивні курси, підручники та спецпроєкти.\\nПостачальник: Ілля Філіпов (EdEra)\\nДата випуску: 2014 рік","buttonText":"Навчатися","tags":["освіта","курси","україна"]},{"id":52,"title":"Boto Sapiens","url":"https://botosapiens.com/","snippet":"Корисні боти та сервіси для автоматизації рутини в Telegram та не тільки.\\nПостачальник: Boto Sapiens Team\\nДата випуску: 2020 рік","buttonText":"Знайти бота","tags":["інструменти","telegram","корисно"]},{"id":53,"title":"Google Translate","url":"https://translate.google.com.ua/","snippet":"Найвідоміший сервіс машинного перекладу для сотень мов світу.\\nНа жаль як і в Дуолінго, проблему Доміно, з розумінням його мови не вирішили :)\\nПостачальник: Google / Alphabet Inc.\\nДата випуску: 28 квітня 2006 року","buttonText":"Перекласти","tags":["переклад","інструменти","мовлення"]},{"id":54,"title":"OpenStreetMap","url":"https://www.openstreetmap.org/","snippet":"Детальна вільна географічна мапа світу, яку створюють користувачі.\\nДоміно: Я впевнений, що це тактика таємних товариств, наспрвді Земля плоска, Стоїть на 3 слонах, і пливе на черепазі(Дивно, я очікував на Ніцероні, хоча якщо подумати. Ніцерон - символ поганої політики людства у мультиплікаційній формі)\\nПостачальник: OpenStreetMap Foundation (Стів Кост)\\nДата випуску: 9 серпня 2004 року","buttonText":"Відкрити мапу","tags":["мапа","географія","навігація"]},{"id":55,"title":"E-Katalog","url":"https://ek.ua/","snippet":"Каталог описів і цін на побутову і комп'ютерну техніку, допомога у виборі.\\nКейт: я хочу собі 17 айфон про макс. Доміно: давай повчишся користуватися дзьобом на нокіа 3310, через 5 років.\\nПостачальник: E-Katalog Ltd.\\nДата випуску: 2001 рік","buttonText":"Порівняти ціни","tags":["покупки","техніка","порівняння"]},{"id":56,"title":"Словко","url":"https://slovko.zaxid.net/","snippet":"Українська версія популярної гри-головоломки Wordle. Відгадайте слово з 5 літер.\\nДоміно: Я відгадав це індик!\\nПостачальник: Zaxid.net / Назарій Захарія\\nДата випуску: січень 2022 року","buttonText":"Грати","tags":["головоломка","слова","логіка"]},{"id":57,"title":"Web Sudoku","url":"https://www.websudoku.com/","snippet":"Мільярди безкоштовних головоломок Судоку різних рівнів складності онлайн.\\nПостачальник: Web Sudoku Ltd (Гідеон та Елізабет Грін)\\nДата випуску: 2005 рік","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":58,"title":"2048","url":"https://play2048.co/","snippet":"Математична головоломка: зсувайте плитки, щоб утворити число 2048.\\nПостачальник: Габріеле Чіруллі (Gabriele Cirulli)\\nДата випуску: 9 березня 2014 року","buttonText":"Грати","tags":["головоломка","математика","логіка"]},{"id":59,"title":"Lichess","url":"https://lichess.org/","snippet":"Безкоштовна платформа для гри в шахи та розв'язання шахових задач-головоломок.\\nНагадайте: Пішка переміщується по будь якій клітинці як хоче? :)\\nПостачальник: Тібо Дюплессі (Thibault Duplessis)\\nДата випуску: 20 червня 2010 року","buttonText":"Розв'язувати задачі","tags":["головоломка","шахи","логіка"]},{"id":60,"title":"Nonograms.org","url":"https://www.nonograms.org/","snippet":"Японські кросворди (нонограми) — малювання картинок за допомогою чисел.\\nПостачальник: Олег Каштелян\\nДата випуску: 2012 рік","buttonText":"Грати","tags":["головоломка","нонограми","логіка"]},{"id":61,"title":"The New York Times Crossword","url":"https://www.nytimes.com/crosswords","snippet":"Легендарні англомовні кросворди та міні-головоломки щодня.\\nПостачальник: The New York Times Company (Віл Шортс)\\nДата випуску: 15 лютого 1942 року","buttonText":"Розв'язувати","tags":["головоломка","кросворд","слова"]},{"id":62,"title":"Jigsaw Planet","url":"https://www.jigsawplanet.com/","snippet":"Збирайте класичні пазли з тисяч безкоштовних картинок онлайн.\\nПостачальник: Critical Hit Software\\nДата випуску: 2007 рік","buttonText":"Збирати пазли","tags":["головоломка","пазли","відпочинок"]},{"id":63,"title":"Monument Valley","url":"https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley","snippet":"Естетична просторова головоломка про неможливу архітектуру та оптичні ілюзії.\\nПостачальник: ustwo games\\nДата випуску: 3 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","архітектура","інді"]},{"id":64,"title":"The Room","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=h-NdQSeTPfA","snippet":"Ласкаво просимо до Кімнати, фізичної головоломки, загорнутої в таємничу гру, всередині прекрасного тактильного 3D-світу.\\n*****************\\nЯк справи, старий друже? Якщо ти це читаєш, значить, це спрацювало. Сподіваюся, ти все ще можеш мені пробачити.\\nМи ніколи не йшли точкою зору щодо моїх досліджень, але ти мусиш залишити такі речі позаду. Ти єдиний, до кого я можу звернутися. Ти мусиш прийти негайно, бо ми всі у великій небезпеці. Сподіваюся, ти пам'ятаєш будинок? Мій кабінет — найвища кімната.\\nРухайся вперед з душею. Тепер шляху назад немає.\\nЯК.\\n******\\nFireproof Games дуже пишається тим, що представляє вам наше найкраще творіння, захопливу подорож, сповнену краси, небезпеки та таємниці в рівній мірі. Перенесіть себе в унікальний простір, який поєднує захоплюючі візуальні ефекти з інтригуючими проблемами, які потрібно вирішити.\\n• Тривожно реалістична графіка: яскраві візуальні ефекти з природним виглядом, вдосконалені для мобільних дисплеїв.\\n• Моторошне керування одним пальцем: сенсорне керування настільки природне, що ви можете грати однією пальцем, щоб повністю орієнтуватися в цьому таємниче красивому 3D-світі.\\n• Фантастичний дизайн, що дозволяє швидко почати грати: легко почати, важко відірватися, таємниці Кімнати занурять вас ще до того, як ви усвідомите, що граєте.\\n• Захопливі шари таємниці: думаєте, що знаєте, на що дивитеся? Подумайте ще раз.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":65,"title":"Brain It On!","url":"https://play.google.com/store/apps/details?id=com.orbital.brainiton","snippet":"Фізичні головоломки, де треба малювати фігури для вирішення завдань.\\nПостачальник: Orbital Nine Games\\nДата випуску: 15 жовтня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","логіка"]},{"id":67,"title":"Where's My Water?","url":"https://play.google.com/store/apps/details?id=com.disney.WMW","snippet":"Прокладайте шлях воді крізь землю, щоб крокодил Свомпі зміг прийняти душ.\\nДоміно: Я тоді через страх крокодилів, на Марсі(чи куди зараз як найдалі можна) пограю в індика. (Це те саме що гра в крокодила, просто для тих хто їх боїться)\\nПостачальник: Disney Interactive\\nДата випуску: 22 вересня 2011 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","disney"]},{"id":68,"title":"Threes!","url":"https://play.google.com/store/apps/details?id=vo.threes.exclaim","snippet":"Елегантна гра-головоломка, де потрібно з'єднувати плитки, кратні трьом.\\nПостачальник: Sirvo / Asher Vollmer\\nДата випуску: 6 лютого 2014 року","buttonText":"Завантажити гру","tags":["головоломка","числа","логіка"]},{"id":69,"title":"Baba Is You","url":"https://store.steampowered.com/app/736260/Baba_Is_You/","snippet":"Геніальна гра, де ви змінюєте самі правила гри, пересуваючи блоки зі словами.\\nПостачальник: Arvi Teikari (Hempuli)\\nДата випуску: 13 березня 2019 року","buttonText":"Дивитися в Steam","tags":["головоломка","логіка","інді"]},{"id":70,"title":"Mini Metro","url":"https://play.google.com/store/apps/details?id=nz.co.codepoint.minimetro","snippet":"Головоломка-симулятор: проєктуйте лінії метро для міста, що постійно зростає.\\nПостачальник: Dinosaur Polo Club\\nДата випуску: 11 серпня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","симулятор","мінімалізм"]},{"id":72,"title":"Portal 2","url":"https://store.steampowered.com/app/620/Portal_2/","snippet":"Культова просторова головоломка від першої особи з портальною гарматою.\\nПостачальник: Valve Corporation\\nДата випуску: 18 квітня 2011 року","buttonText":"Дивитися в Steam","tags":["головоломка","портали","шедевр"]},{"id":73,"title":"The Witness","url":"https://store.steampowered.com/app/210970/The_Witness/","snippet":"Досліджуйте таємничий острів і розв'язуйте сотні складних лабіринтних головоломок.\\nПостачальник: Thekla, Inc. (Jonathan Blow)\\nДата випуску: 26 січня 2016 року","buttonText":"Дивитися в Steam","tags":["головоломка","відкритий_світ","логіка"]},{"id":74,"title":"Braid","url":"https://store.steampowered.com/app/26800/Braid/","snippet":"Платформер-головоломка, де маніпуляції з часом є ключем до вирішення завдань.\\nПостачальник: Number None (Jonathan Blow)\\nДата випуску: 6 серпня 2008 року","buttonText":"Дивитися в Steam","tags":["головоломка","час","інді"]},{"id":75,"title":"Tetris","url":"https://tetris.com/play-tetris","snippet":"Офіційна онлайн-версія найвідомішої у світі гри-головоломки з падаючими блоками.\\nПостачальник: The Tetris Company (Олексій Пажитнов)\\nДата випуску: 6 червня 1984 року","buttonText":"Грати в Tetris","tags":["головоломка","тетріс","класика"]},{"id":76,"title":"Minesweeper Online","url":"https://minesweeperonline.com/","snippet":"Класичний «Сапер» — відкривайте клітинки, спираючись на логіку та числа мін довкола.\\nПостачальник: Microsoft / Роберт Доннер та Курт Джонсон\\nДата випуску: 8 жовтня 1990 року","buttonText":"Грати","tags":["головоломка","сапер","логіка"]},{"id":77,"title":"Flow Free","url":"https://play.google.com/store/apps/details?id=com.bigduckgames.flow","snippet":"З'єднайте крапки однакового кольору лініями, щоб заповнити все ігрове поле.\\nПостачальник: Big Duck Games\\nДата випуску: 7 червня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","лінії","кольори"]},{"id":78,"title":"Monument Valley 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":79,"title":"Bejeweled Classic","url":"https://play.google.com/store/apps/details?id=com.ea.gp.bej3","snippet":"Класична гра зіставлення дорогоцінних каменів, що породила жанр «три в ряд».\\nПостачальник: PopCap Games / EA (Джейсон Капалка)\\nДата випуску: 30 травня 2001 року","buttonText":"Завантажити гру","tags":["головоломка","три_в_ряд","класика"]},{"id":80,"title":"Two Dots","url":"https://play.google.com/store/apps/details?id=com.weplaydots.twodotsandroid","snippet":"Мінімалістична та стильна гра про з'єднання точок одного кольору.\\nПостачальник: Playdots, Inc. / Take-Two Interactive\\nДата випуску: 29 травня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","точки","дизайн"]},{"id":81,"title":"Monument Valley 3","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":82,"title":"Kami 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":83,"title":"Unblock Me","url":"https://play.google.com/store/apps/details?id=com.kiragames.unblockmefree","snippet":"Проста, але складна гра з блоками — виведіть червоний блок з дошки, пересуваючи інші.\\nПостачальник: Kiragames\\nДата випуску: 25 квітня 2009 року","buttonText":"Завантажити гру","tags":["головоломка","блоки","логіка"]},{"id":84,"title":"Roll the Ball","url":"https://play.google.com/store/apps/details?id=com.bitmango.go.rolltheballunrollme","snippet":"Слайд-головоломка: пересувайте блоки, щоб створити шлях для кульки до фінішу.\\nПостачальник: BitMango\\nДата випуску: 20 квітня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","труби","логіка"]},{"id":85,"title":"Infinity Loop","url":"https://play.google.com/store/apps/details?id=com.balysv.loop","snippet":"Розслаблююча гра, де ви обертаєте фрагменти, створюючи нескінченні візерунки.\\nПостачальник: Infinity Games (Balys Valentukevicius)\\nДата випуску: 17 березня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","релакс","візерунки"]},{"id":86,"title":"Water Sort Puzzle","url":"https://play.google.com/store/apps/details?id=com.gma.water.sort.puzzle","snippet":"Сортуйте кольорову воду у склянках так, щоб кожна склянка містила лише один колір.\\nПостачальник: IEC Global / GMA Games\\nДата випуску: 28 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","сортування","логіка"]},{"id":87,"title":"Happy Glass","url":"https://play.google.com/store/apps/details?id=com.game5mobile.lineandwater","snippet":"Малюйте лінії, щоб спрямувати воду і наповнити сумну склянку, зробивши її щасливою.\\nПостачальник: Lion Studios / Game5Mobile\\nДата випуску: 9 серпня 2018 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","малювання"]},{"id":88,"title":"Brain Out","url":"https://play.google.com/store/apps/details?id=com.mind.quiz.brain.out","snippet":"Гра на нестандартне мислення з купою підступних запитань і задач (trick puzzles).\\nПостачальник: Focus Apps / Eyewind\\nДата випуску: 28 серпня 2019 року","buttonText":"Завантажити гру","tags":["головоломка","хитрощі","IQ"]},{"id":89,"title":"Mekorama","url":"https://play.google.com/store/apps/details?id=com.martinmagni.mekorama","snippet":"Проведіть маленького робота через красиві механічні діорами, вирішуючи просторові загадки.\\nПостачальник: Мартин Магні (Martin Magni)\\nДата випуску: 14 лютого 2016 року","buttonText":"Завантажити гру","tags":["головоломка","роботи","3D"]},{"id":90,"title":"Lara Croft GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.lcgo","snippet":"Покрокова головоломка-пригода у світі Tomb Raider з чудовим візуалом.\\nПостачальник: Square Enix Montréal\\nДата випуску: 27 серпня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","пригоди","покрокова"]},{"id":91,"title":"Hitman GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.hitmango","snippet":"Стилізована під настільну гру покрокова стратегія-головоломка зі стелс-елементами.\\nПостачальник: Square Enix Montréal\\nДата випуску: 17 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","стелс","тактика"]},{"id":93,"title":"The Talos Principle","url":"https://store.steampowered.com/app/257510/The_Talos_Principle/","snippet":"Глибока філософська гра-головоломка від першої особи, де ви вирішуєте завдання зі світлом та лазерами.\\nПостачальник: Croteam / Devolver Digital\\nДата випуску: 11 грудня 2014 року","buttonText":"Дивитися в Steam","tags":["головоломка","філософія","sci-fi"]},{"id":95,"title":"Myst","url":"https://store.steampowered.com/app/1255560/Myst/","snippet":"Класична пригодницька головоломка, де вам потрібно розгадати таємниці загадкового острова.\\nПостачальник: Cyan Worlds (Робін та Ренд Міллер)\\nДата випуску: 24 вересня 1993 року","buttonText":"Дивитися в Steam","tags":["головоломка","квест","класика"]},{"id":96,"title":"Wordscapes","url":"https://play.google.com/store/apps/details?id=com.peoplefun.wordcross","snippet":"Головоломка зі словами, яка поєднує пошук слів та кросворд.\\nПостачальник: PeopleFun\\nДата випуску: 19 червня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","слова","кросворд"]},{"id":97,"title":"CodyCross","url":"https://play.google.com/store/apps/details?id=com.fanatee.cody","snippet":"Новий погляд на кросворди з цікавими фактами та гарним дизайном.\\nПостачальник: Fanatee Games\\nДата випуску: 8 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","кросворд","ерудиція"]},{"id":98,"title":"Darkness and Flame 3: The Dark Side","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":99,"title":"100 Doors Games: Escape from School","url":"https://play.google.com/store/apps/details?id=com.Peaksel.OneHundredDoorsGamesEscapeFromSchool","snippet":"Розв'яжіть головоломку кожної кімнати, щоб знайти прихований ключ та відкрити двері.\\nПостачальник: Peaksel\\nДата випуску: 16 березня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","втеча","двері"]},{"id":100,"title":"Tangle Master 3D","url":"https://play.google.com/store/apps/details?id=com.zynga.tangle","snippet":"Просторова головоломка, у якій потрібно розплутати вузли та мотузки.\\nПостачальник: Rollic Games / Zynga\\nДата випуску: 1 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","вузли","3D"]},{"id":101,"title":"Block Puzzle","url":"https://play.google.com/store/apps/details?id=block.puzzle.game.tetris.classic","snippet":"Класична головоломка з дерев'яними блоками в стилі тетріс, без обмежень у часі.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","блоки","релакс"]},{"id":102,"title":"Sudoku.com","url":"https://sudoku.com/uk","snippet":"Один з найпопулярніших сайтів та додатків для вирішення класичного судоку з підказками.\\nПостачальник: Uanet / Gismeteo","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":103,"title":"Mahjong Solitaire","url":"https://play.google.com/store/apps/details?id=com.mobilityware.MahjongSolitaire","snippet":"Класична головоломка на зіставлення однакових плиток маджонгу, щоб очистити дошку.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","маджонг","настільна"]},{"id":104,"title":"Darkness and Flame 4: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":105,"title":"Knotwords","url":"https://play.google.com/store/apps/details?id=com.noodlecake.knotwords","snippet":"Унікальна комбінація судоку та кросворда, де літери розташовані в блоках.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","слова","логіка"]},{"id":106,"title":"Lost Lands 1: Dark Overlord","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands1.free","snippet":"Щось потягло вашого сина в портал! Рушайте на його пошуки в повні загадок Загублені Землі!\\nЗагублені Землі. Темний Владика - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про незвичайний фентезійний світ, повний незвіданих куточків і таємничих мешканців.\\nМолода мати з сином збиралися їхати з літнього будиночка в лісі. Сьюзан всього на секунду відволіклася на телефонний дзвінок. Тим часом її син, який грав неподалік, почув дивні голоси і відправився шукати джерело звуку. Коли Сьюзан помітила що відбувається, Джиммі вже затягувало в портал. Тепер Сьюзан необхідно знайти прохід в цей дивовижний світ і відшукати сина. Все виявиться набагато складніше і небезпечніше, ніж вона могла припустити. На своєму шляху Сьюзан зіткнеться з безліччю загадок і головоломок, зустріне незвичайних мешканців Загублених Земель, також їй будуть протистояти сили зла. Щоб повернути Джиммі їй доведеться перемогти Темного Владику, який тримає в страху весь світ!\\nЧи зможе відчайдушна мати врятувати сина і звільнити цілий світ від зла?\\nПостачальник: 5bn games\\nДата випуску: 24 вер. 2018 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":107,"title":"Lost Lands 2: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":108,"title":"Darkness and Flame 1: Born of Fire","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf1.free","snippet":"Незвичайна знахідка змінює життя дівчини. З цієї миті Еліс долучається до вічної боротьби Темряви та Полум'я і повинна врятувати свій фентезійний світ від знищення.\\nТемрява та полум'я: Породжений вогнем – пригодницька гра-квест із пошуком предметів, міні-іграми й замороками, що розповідає про незвичайний фентезійний світ – Родючі землі – оазиси у нескінченних пустелях.\\nМолода дівчина Еліс знайшла дивну скриньку з яйцем, з якого з'явився вогненний птах і, ніби, вселився в дівчину, залишивши випалений малюнок на руці, сама ж дівчина при цьому посивіла. Із цієї миті Еліс стає залученою у вічну боротьбу Темряви й Полум'я. За дівчиною почалося полювання – невідомі солдати розшукували її, батько зміг уберегти Еліс від них, але це коштувало йому життя. Дівчині довелося покинути свій будинок і відправитися до єдиної рідної людини – дядька, про існування якого вона тільки що довідалася. Разом їм треба буде пройти безліч випробувань у різних куточках Родючих Земель, зустрітися з незвичайними народами й расами, уникнути небезпеки, що наближається, розв'язати безліч заморок і зіштовхнутися з великим злом, що загрожує всьому їх фентезійному світу. Чи зможе Еліс приборкати силу полум'я, даровану їй долею, і врятувати свої землі від перетворення в пустелю смерті?\\n• Пориньте в дивну пригоду у фентезійному світі\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч заморок\\n• Приборкайте силу Полум'я\\n• Врятуйте мир від нищівної для всього живого погрози\\nДосліджуйте більш за 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігр\\nВиявіть кмітливість в інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення\\nЦя гра оптимізована для планшетів та телефонів!\\n+++ Відкрийте для себе ще більше ігор від FIVE-BN GAMES! +++\\nWWW: https://fivebngames.com/\\nFACEBOOK: https://www.facebook.com/fivebn/\\nTWITTER: https://twitter.com/fivebngames\\nYOUTUBE: https://youtube.com/fivebn\\nPINTEREST: https://pinterest.com/five_bn/\\nINSTAGRAM: https://www.instagram.com/five_bn/\\nПостачальник: 5bn games\\nДата випуску:12 квіт. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":109,"title":"Darkness and Flame 2: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":110,"title":"The Legacy 1: Realm of Retribution","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl1.free","snippet":"Детективний квест-головоломка від 5BN: розгадайте таємницю старовинного майяського артефакту в музеї.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":111,"title":"The Legacy 2: Prisoner","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl2.free","snippet":"Пошук зниклого музейного експоната приводить у зовсім інший світ! Захоплююча подорож в атмосфері прадавньої цивілізації.\\n'Спадщина: Бранець' – пригодницька гра в жанрі 'Пошук предметів', з величезним числом захоплюючих міні-ігор і головоломок, яка захопить вас у незвіданий світ і закрутить у вирі подій!\\nПобачивши силует, що ховається вдалечині, охоронця, який несе найрідший бюст представника цивілізації майя, Діана, молода співробітниця історичного музею, ринулася слідом. У результаті погоні події пішли зовсім не за планом! Дівчина - уже не вперше - виявляється в іншому світі. І шлях назад закритий!.. Довідайтеся, хто допоможе Діані впоратися з усіма випробуваннями, що випали на її долю. Пройдіть із ними весь шлях до кінця! Щоб урятувати в'язня прадавнього храму й вибратися з далекого світу додому, Діані доведеться виконати ряд небезпечних завдань, дослідити храми й підземелля, провести прадавні ритуали й знайти несподіваних друзів, готових прийти їй на допомогу! Вас чекає незабутня подорож!\\nДопоможіть Діані подолати труднощі й знайти вірну дорогу додому!\\nВідкрийте для себе новий, загадковий світ і його мешканців!\\nВипробуйте себе в більш ніж 40 міні-іграх і головоломках.\\nЗберіть безліч колекцій і відшукайте десятки морфінг-об'єктів.\\nНасолоджуйтеся приголомшливими локаціями, чудовою графікою й відмінною музикою.\\nДата випуску: 20 трав. 2019 р.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":112,"title":"New York Mysteries 1: Secrets of the Mafia","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym1.free","snippet":"Смілива журналістка, Лора Джеймс, починає власне розслідування таємничих зникнень босів мафії та пропажі дітей, що послідувала за ними.\\nЗагадки Нью-Йорка. Секрети Мафії – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, що розповідає про містичне детективне розслідування, мафіозні таємниці й загадках Нью-Йорка.\\nНью-Йорк, 1955 рік. У місті стало небезпечно. Мафія намагається захопити владу. Але віднедавна з'явилася нова сила. І вона на багато страшніша. За останні дні, п'ять мафіозних босів зникли при загадкових обставинах. На місцях зникнення знаходили лише дивну рідину й метелика. Але не це налякало жителів... У місті стали зникати діти. Усі вони намалювали таких самих метеликів перед зникненням. Лора Джеймс, журналіст «Дейлі Ньюз», починає власне розслідування. Які похмурі таємниці приховують тунелі метро під містом? Чи зможе героїня здолати усі перешкоди та врятувати зниклих.\\nПостачальник: 5bn games\\nДата випуску:24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":113,"title":"New York Mysteries 2: High Voltage","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym2.free","snippet":"Розслідуйте серію дивних убивств у Нью-Йорку, пов'язаних із загадковими електричними аномаліями.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":114,"title":"New York Mysteries 3: The Lantern of Souls","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym3.free","snippet":"Журналістка Лора Джеймс залучається до розслідування чергового вбивства. Однак звичайна, на перший погляд, справа починає набирати небезпечних обертів.\\nЗагадки Нью-Йорка. Ліхтар душ – пригодницька гра-квест з пошуком предметів, міні-іграми й головоломками, що розповідає про нове, небезпечне, містичне детективне розслідування сміливого журналіста Лори Джеймс.\\nНовий епізод жахливої саги переносить вас у Нью-Йорк кінця 50-х років. У заміському маєтку відбувається жорстоке вбивство вдови впливового адвоката. За завданням таємного ордену журналіст газети «Дейлі Ньюз» Лора Джеймс їде на місце злочину. На перший погляд, все виглядає як звичайний розбійний напад. Однак, обшук у будинку загиблої дає несподіваний результат. Небезпека підстерігає героїню на кожному кроці. Хитромудрі пастки і головоломки, таємниці з минулого й містична Темрява, що охопила місто. Чи зможе героїня опанувати те, що відбувається, і врятувати не тільки Нью-Йорк, але і весь світ від катастрофи, що наближається?\\nПостачальник: 5bn games\\nДата випуску:29 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":116,"title":"New York Mysteries 5: Power of Art","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym5.free","snippet":"Викрадені картини оживають: розгадайте таємницю магічного мистецтва у новій частині серії від 5BN. (Поки що остання...)\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":117,"title":"Tricky Doors","url":"https://play.google.com/store/apps/details?id=com.fivebn.trickydoors","snippet":"Атмосферна гра-головоломка від 5BN Games у жанрі «втеча з кімнати» з різноманітними світами, захоплюючими схованками та складними міні-іграми.","buttonText":"Завантажити гру","tags":["головоломка","втеча","5bn","квест"]},{"id":118,"title":"Tiny Room Stories: Town Mystery","url":"https://play.google.com/store/apps/details?id=com.DrunkData.TinyRoom","snippet":"Чудова 3D-головоломка в стилі «втеча з кімнати»: повертайте деталізовані рівні для пошуку підказок.","buttonText":"Завантажити гру","tags":["головоломка","детектив","3d","втеча"]},{"id":120,"title":"Coolors","url":"https://coolors.co/","snippet":"Сучасний та супершвидкий генератор колірних палітр для розробників і дизайнерів з можливістю підбору гармонійних поєднань та експорту в CSS або SVG.","buttonText":"Згенерувати палітру","tags":["дизайн","інструменти","палітра","веб"]},{"id":121,"title":"Agent A: A puzzle in disguise","url":"https://play.google.com/store/apps/details?id=com.yakandco.agenta","snippet":"Шпигунська головоломка у стилі 60-х: проникніть у таємне лігво ворожого агента і знешкодьте пастки.","buttonText":"Завантажити гру","tags":["головоломка","шпигуни","квест","стиль"]},{"id":122,"title":"Adventure Escape Mysteries","url":"https://play.google.com/store/apps/details?id=com.haiku.adventure.escape.mysteries","snippet":"Збірник інтерактивних детективних історій та головоломок від Haiku Games.","buttonText":"Завантажити гру","tags":["головоломка","детектив","квест","історія"]},{"id":123,"title":"Spot the Difference: Find 5","url":"https://play.google.com/store/apps/details?id=com.easybrain.find.differences","snippet":"Класична головоломка на уважність: знайдіть усі відмінності між двома схожими картинками.","buttonText":"Завантажити гру","tags":["головоломка","уважність","пошук"]},{"id":124,"title":"Sudoku - Brain Puzzle Games","url":"https://play.google.com/store/apps/details?id=com.easybrain.sudoku.android","snippet":"Один із найзручніших мобільних додатків для вирішення класичних судоку будь-якої складності.","buttonText":"Завантажити гру","tags":["головоломка","судоку","числа"]},{"id":125,"title":"Nonogram.com - Picture Cross","url":"https://play.google.com/store/apps/details?id=com.easybrain.nonogram","snippet":"Японські кросворди: розгадуйте зашифровані картинки за допомогою логічних підказок.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","числа"]},{"id":126,"title":"Brain Test: Tricky Puzzles","url":"https://play.google.com/store/apps/details?id=com.unicostudio.braintest","snippet":"Захоплююча головоломка з хитрими завданнями та кумедними нестандартними рішеннями.","buttonText":"Завантажити гру","tags":["головоломка","гумор","iq"]},{"id":127,"title":"Rube's Lab - Physics Puzzle","url":"https://play.google.com/store/apps/details?id=com.bouland.rubeslab","snippet":"Фізична головоломка в стилі машин Руба Ґолдберга: будуйте ланцюгові реакції.","buttonText":"Завантажити гру","tags":["головоломка","фізика","механізми"]},{"id":128,"title":"Human Resource Machine","url":"https://play.google.com/store/apps/details?id=com.tomorrowcorporation.humanresourcemachine","snippet":"Весела головоломка, яка навчає базовим принципам програмування через офісну рутину.","buttonText":"Завантажити гру","tags":["головоломка","програмування","код"]},{"id":129,"title":"Bridge Constructor","url":"https://play.google.com/store/apps/details?id=com.headupgames.bridgeconstructor","snippet":"Станьте інженером: будуйте мости через прірви та перевіряйте їх на міцність.","buttonText":"Завантажити гру","tags":["головоломка","будівництво","фізика"]},{"id":130,"title":"Shadowmatic","url":"https://play.google.com/store/apps/details?id=com.triadaal.shadowmatic","snippet":"Оскароносна головоломка: повертайте абстрактні предмети в променях світла, щоб отримати тінь.","buttonText":"Завантажити гру","tags":["головоломка","3d","тіні","релакс"]},{"id":131,"title":"Unpacking","url":"https://play.google.com/store/apps/details?id=com.humblebundle.unpacking","snippet":"Затишна медитативна головоломка про розпакування коробки та облаштування будинку.","buttonText":"Завантажити гру","tags":["головоломка","затишок","релакс"]},{"id":132,"title":"Layovers: World Map Puzzle","url":"https://geoguessr.com/","snippet":"Перевірте свої географічні знання у формі візуальних загадок та інтерактивних мап.","buttonText":"Грати онлайн","tags":["головоломка","географія","знання"]},{"id":133,"title":"Worldle","url":"https://worldle.teuteuf.fr/","snippet":"Щоденна географічна головоломка: вгадайте країну за її контуром та відстанями.","buttonText":"Грати онлайн","tags":["головоломка","географія","слова"]},{"id":134,"title":"Wordle - Official NYT","url":"https://www.nytimes.com/games/wordle/index.html","snippet":"Оригінальна всесвітньо відома гра: вгадайте англійське слово з 5 літер за 6 спроб.","buttonText":"Грати онлайн","tags":["головоломка","слова","англійська"]},{"id":135,"title":"Picross LUNA","url":"https://play.google.com/store/apps/details?id=com.Floralmind.PicrossLuna","snippet":"Атмосферні та казкові японські кросворди зі зворушливою історією та чудовою музикою.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","казка"]},{"id":136,"title":"Remove.bg","url":"https://www.remove.bg/","snippet":"Безкоштовний онлайн-інструмент для автоматичного видалення фону з будь-якого фото за 5 секунд.","buttonText":"Видалити фон","tags":["інструменти","фото","дизайн"]},{"id":137,"title":"ILovePDF","url":"https://www.ilovepdf.com/uk","snippet":"Повний набір безкоштовних інструментів для роботи з PDF: об'єднання, стиснення, конвертація.","buttonText":"Працювати з PDF","tags":["інструменти","документи","pdf"]},{"id":138,"title":"TinyPNG","url":"https://tinypng.com/","snippet":"Розумне стиснення зображень форматів WEBP, PNG та JPEG без втрати якості.","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":139,"title":"FixMySpeakers","url":"https://fixmyspeakers.com/","snippet":"Відтворює спеціальний звук конкретної частоти, щоб виштовхнути воду з динаміка вашого смартфона.","buttonText":"Очистити динамік","tags":["інструменти","смартфон","звук"]},{"id":140,"title":"Radio Garden","url":"http://radio.garden/","snippet":"Інтерактивний 3D-глобус, який дозволяє слухати тисячі прямих трансляцій радіостанцій по всьому світу.","buttonText":"Слухати радіо","tags":["музика","мапа","радіо"]},{"id":141,"title":"MyRetroTVs","url":"https://www.myretrotvs.com/","snippet":"Віртуальний телевізор, який транслює справжні відеоролики, телешоу та рекламу 60-х, 70-х, 80-х чи 90-х років.","buttonText":"Ввімкнути ТВ","tags":["ностальгія","відео","історія"]},{"id":142,"title":"PDF2Go","url":"https://www.pdf2go.com/uk","snippet":"Онлайн-редактор та конвертер PDF-файлів прямо у вашому браузері.","buttonText":"Редагувати PDF","tags":["інструменти","pdf","документи"]},{"id":143,"title":"MyHeritage Deep Nostalgia","url":"https://www.myheritage.com/deep-nostalgia","snippet":"Сервіс на основі штучного інтелекту, який оживляє обличчя на старих архівних фотографіях.","buttonText":"Оживити фото","tags":["ші","фото","історія"]},{"id":144,"title":"Have I Been Pwned","url":"https://haveibeenpwned.com/","snippet":"Перевірте, чи потрапляла ваша електронна пошта або пароль у відомі бази даних витоків інформації.","buttonText":"Перевірити пошту","tags":["безпека","приватність","інструменти"]},{"id":145,"title":"Privnote","url":"https://privnote.com/","snippet":"Створюйте текстові нотатки, які самознищуються одразу після того, як їх прочитає отримувач.","buttonText":"Створити записку","tags":["безпека","приватність","текст"]},{"id":146,"title":"NaturalReaders","url":"https://www.naturalreaders.com/","snippet":"Перетворення будь-якого тексту на природне озвучення штучним інтелектом.","buttonText":"Озвучити текст","tags":["ші","звук","інструменти"]},{"id":147,"title":"Neko-City (NekoWeb)","url":"https://nekoweb.org/","snippet":"Майданчик для створення та перегляду затишних персональних веб-сайтів у дусі інтернету 2000-х.","buttonText":"Дослідити","tags":["веб","ретро","натхнення"]},{"id":148,"title":"10 Minute Mail","url":"https://10minutemail.com/","snippet":"Тимчасова електронна пошта, яка знищується через 10 хвилин. Ідеально для швидких реєстрацій.","buttonText":"Отримати пошту","tags":["безпека","пошта","інструменти"]},{"id":149,"title":"Befunky","url":"https://www.befunky.com/","snippet":"Простий онлайн-фоторедактор, графічний дизайнер та майстер створення колажів.","buttonText":"Редагувати","tags":["дизайн","фото","колаж"]},{"id":150,"title":"Gridzzly","url":"https://gridzzly.com/","snippet":"Створюйте та роздруковуйте власний сітчастий, лінійний або крапковий папір для нотаток.","buttonText":"Створити аркуш","tags":["інструменти","друк","організація"]},{"id":151,"title":"Ninite Pro & Tools","url":"https://ninite.com/","snippet":"Безпечне встановлення декількох популярних додатків одночасно без рекламного сміття.","buttonText":"Вибрати програми","tags":["софт","windows","інструменти"]},{"id":152,"title":"CleanPNG","url":"https://www.cleanpng.com/","snippet":"Безкоштовна база з мільйонів PNG-зображень із прозорим фоном для дизайну.","buttonText":"Шукати PNG","tags":["дизайн","ресурси","картинки"]},{"id":153,"title":"FutureMe","url":"https://www.futureme.org/","snippet":"Напишіть лист самому собі у майбутнє, який прийде на вашу пошту через 1, 3 або 5 років.\\nНапишеш, що це Доміно заставив тебе це зробити, майбутньому я :)","buttonText":"Написати собі","tags":["розваги","саморозвиток","листя"]},{"id":154,"title":"Asoftmurmur","url":"https://asoftmurmur.com/","snippet":"Генератор фонових звуків природи (дощ, вітер, костер) для концентрації або сну.","buttonText":"Слухати фонограму","tags":["релакс","продуктивність","звуки"]},{"id":155,"title":"Soundraw AI","url":"https://soundraw.io/","snippet":"Генератор фонової музики без авторських прав за допомогою штучного інтелекту.\\nПотап написав для нас безкоштовно пісню, але Кейт не сподобалось. Слухаймо: «Ні-на-не-ну-ла-шу, ко-ла-ві-ка-цу» — за 3 секунди шедевр!","buttonText":"Згенерувати трек","tags":["ші","музика","креатив"]},{"id":156,"title":"Стихія","images":["castle"],"url":"https://stuxia.com/","snippet":"Саморекламування на своєму сайті :) Ви ж вже на найдивнішому сайті серед усіх! Працює із видіння Доміно :)\\nПостачальник: TheTurkeyStudio (Бундюча студія)","buttonText":"Ви ж вже тут :)","tags":["погода","музика","хаос"]},{"id":157,"title":"Ніцерон (Динофроз)","url":"https://megogo.net/ua/view/1812091-dinofroz.html","snippet":"Ми не могли його впустити додаючи нашу базу даних, нашого пошуковика :)\\nЄдиний лінк не на гру і додаток(сайт)\\nПостачальник: Mondo TV","buttonText":"Ностальгія...","tags":["дракони","динозаври","Ніцерон"]},{"id":158,"title":"Dragon Village 3","url":"https://play.google.com/store/apps/details?id=com.highbrow.games.dvo&hl=uk","icon":"https://play-lh.googleusercontent.com/xkwb3p2V6SkaxRq3uC_NM3n_tkw_UOcfe6uw75plux3o-e_XiY5Ixis8HTfjjix0U14HMqIbVNICs8IoVRFs=s48","snippet":"Офіційне продовження Dragon Village через 12 років\\nШкода що Діма Комаров не заїхав в Корею, сувенір пов'яний з грою привіз би :)\\n\\nПостачальник: Highbrow","buttonText":"Збереш усіх драконів? :)","tags":["сюжет","стратегія","дракони"],"images":["village"]},{"id":159,"title":"Меридіан 157: Пролог","youtubeTrailer":"https://www.youtube.com/watch?v=pXW52EZI0vY","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.games.meridian157prologue&hl=uk","icon":"https://play-lh.googleusercontent.com/Rkk66wnDj2v-pe86uw-0GsZuHCBvc8DyeOj53pHHLfC318Shb5m8ebOVIBR6Wt3Jl_GzqcHtPeOQf32zol4Wcw=s48","snippet":"Meridian 157: Розділи 1, 2 та 3 офіційно випущені! Завантажте їх зараз на Google Play! Meridian 157: Prologue – це гра-головоломка типу «вкажи та клацни», що зосереджена на захопливих головоломках, захопливій візуальній складовій та захопливому сюжеті. Це перша частина серії Meridian 157, де ви граєте за детектива Девіда Зандера, який розслідує таємничу погодну аномалію в північній частині Тихого океану. Використовуйте свою кмітливість, щоб розгадувати головоломки та долати перешкоди, щоб знайти шлях глибше на острів, щоб розкрити та знайти таємницю загубленого острова на 157-му меридіані!\\nШкола виживання для любителів закинутих об'єктів та таємничих бункерів :)\\nПостачальник: NovaSoft Interactive","buttonText":"Розгадаєш таємницю об'єкту F.L.A.R.E?","tags":["аномалії","головоломки","хоррор"]},{"id":160,"title":"Excalidraw","url":"https://excalidraw.com/","snippet":"Зручна віртуальна дошка для швидкого створення схем, діаграм та начерків у стилі малюнка від руки.\\nЯ знав, що уроки кресленння, щось від мене приховують :)\\nПостачальник: Uanet / Gismeteo","buttonText":"Малювати схему","tags":["інструменти","дизайн","схеми"]},{"id":161,"title":"Горох (Словник)","url":"https://goroh.pp.ua/","snippet":"Сучасна онлайн-бібліотека українських словників: тлумачний, етимологічний, словозміна та синоніми.\\nЯкий оригінальний по імені постачальник...\\nПостачальник: Проєкт «Горох»","buttonText":"Шукати слово","tags":["мова","словник","освіта"]},{"id":162,"title":"Lost Lands 3: The Golden Curse","url":"https://play.google.com/store/apps/details?id=com.fivebn.ll3.f2p&hl=uk","icon":"https://play-lh.googleusercontent.com/v2xe4z9VMItjJ99omnJZLhQkKRjeL4YXAK29IeQv5uBrcByCPaneCKHVnPfwzF73agm6Xrp6waRN31ttqDdqMQ=s48","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася у фентезійному світі. Їй доведеться боротися проти демонів, які перебули у скам'янілому стані останнє тисячоріччя та й знову відродилися по незрозумілій причині.\\n«Загублені Землі. Прокляте золото» – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, розкиданими на безкрайніх просторах фентезійного світу: від долини вулканів до друїдового лісу, від глибокого підземелля до ширяючих островів.\\nПроста миловидна домогосподарка Сьюзан одного чудового дня, відвідавши музей мистецтв, натикається на стародавнє дзеркало, яке раптом невідомим образом починає вабити Сьюзан до себе. Та доторкається до дзеркала й миттєво переноситься у фентезійний казковий світ Загублених Земель. Отут за свої колишні подвиги вона вже давно відома всім, як Сьюзан-Войовниця.\\nСьюзан зустрічає маленьку дівчинку Фіору, яка відводить її в село до свого прадіда Маарону. У ньому Сьюзан впізнає свого старого знайомого друїда. Маарон розповідає, що на їхнє село напала Гарпія – крилатий демон з легенд. Але саме дивне те, що цей демон останню тисячу років стояв у вигляді кам'яної статуї в одному старому занедбаному форті.\\nРазом зі своїми друзями Сьюзан має бути відправитися в жерло вулкана, спуститися в підземелля й піднятися на ширяючі острови для того, щоб зрозуміти, чому Гарпія, Мінотавр, Нага й Солідус, один за іншим, почали звільнятися з «кам'яного полону» і вчиняти в Загублених Землях хаос. І, звичайно, усіх їх потрібно зупинити...\\nПостачальник: 5bn games\\nДата випуску: 24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":163,"title":"Lost Lands 4: The Wanderer","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":164,"title":"Lost Lands 5: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":165,"title":"Lost Lands 6: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":166,"title":"Lost Lands 7: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":167,"title":"Lost Lands 8: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":168,"title":"Meridian 157: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":169,"title":"Meridian 157: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":170,"title":"Meridian 157: Chapter 3","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":171,"title":"Lost Lands 10","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":172,"title":"Lost Lands 11: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":173,"title":"Dragon Village","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":174,"title":"Dragon Village M","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":175,"title":"Dragon Village Collection","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":176,"title":"Legacy 3: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":177,"title":"The Room 2","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=soyeCXKQ6_Q","snippet":"Ласкаво просимо до The Room Two, фізичної головоломки, загорнутої в таємничу гру, у чудовому тактильному 3D-світі.\\nДовгоочікуване продовження фільму «Кімната», який отримав премію BAFTA, нарешті з’явилося.\\nПройдіть слідом загадкових листів від загадкового вченого, відомого лише як AS, у захоплюючий світ таємниць і досліджень.\\n*******************************************************************************************************************\\n«Неймовірно захоплюючий досвід із розумними головоломками, чудовими візуальними ефектами та моторошною атмосферою; абсолютно переповнений новими ідеями». – Грань\\n«Складно сплетений художній твір, ідеально підходить для свого формату, це та гра, заради якої варто сидіти в темряві». - Кишеньковий гравець\\nЧудова гра, що пропонує великі локації з кількома інтерактивними областями та головоломками. Ідеальна гра для холодної зимової ночі. – Єврогеймер\\n«Змушує вас думати про те, як розв’язувати головоломки, навіть коли ви не граєте; ознака класної гри, якою це безперечно є». – 148 додатків\\nЧудове продовження з приголомшливими візуальними ефектами, рівень складності, який тут представлений, вражає. Друга кімната має бути на першому місці у вашому списку ігор. - GSM Арена\\n*******************************************************************************************************************\\nІНФОРМАЦІЙНИЙ ДИЗАЙН\\nЛегко розпочати, важко відірватися, захоплююче поєднання інтригуючих головоломок із простим інтерфейсом користувача\\nІННОВАЦІЙНЕ СЕНСОРНЕ УПРАВЛІННЯ\\nТактильний досвід настільки природний, що ви можете майже відчути поверхню кожного предмета\\nРЕАЛІСТИЧНІ 3D ЛОКАЦІЇ\\nПориньте в різноманітні приголомшливі середовища, які випробуватимуть вашу майстерність розгадувати головоломки.\\nДЕТАЛІЗОВАНІ 3D ОБ'ЄКТИ\\nВникайте в складні деталі десятків артефактів у пошуках їхніх прихованих секретів.\\nНЕРВУЮЧИЙ АУДІО\\nЗахоплюючий саундтрек і динамічні звукові ефекти створюють звуковий ландшафт, який реагує на вашу гру.\\nТЕПЕР ПІДТРИМУЄТЬСЯ ЗБЕРЕЖЕННЯ В ХМАРІ\\nПоділіться своїм прогресом між кількома пристроями та розблокуйте абсолютно нові досягнення.\\nПІДТРИМКА КІЛЬКОХ МОВ\\nДоступно англійською, французькою, італійською, німецькою, іспанською, бразильською та португальською мовами.\\n*******************************************************************************************************************\\nFireproof Games — це невелика незалежна студія, розташована в Гілфорді у Великобританії.\\nДізнайтеся більше на fireproofgames.com\\nСлідкуйте за нами @Fireproof_Games.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":178,"title":"The Room 3","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","youtubeTrailer":"https://www.youtube.com/watch?v=NaZ2DiDH4i0","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":179,"title":"The Room: Old Sins","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"Увійдіть у The Room: Old Sins і перенесіться в місце, де тактильне дослідження зустрічається зі складними головоломками та захоплюючою історією.\\nРаптове зникнення амбітного інженера та його світської дружини провокує полювання на дорогоцінний артефакт. Стежка веде на горище їхнього дому, де знаходять старий, незвичайний ляльковий будиночок...\\nДосліджуйте тривожні місця, дотримуйтесь незрозумілих підказок і маніпулюйте химерними пристосуваннями, розкриваючи таємниці садиби Волдегрейв.\\nВід себе: Хоч ця серія ігор і платна, але навряд її хтось переплюне...\\nПостачальник: Fireproof Games\\nДата випуску: 18 квітня 2018 рік.","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":180,"title":"Regex101","url":"https://regex101.com/","snippet":"Онлайн-інструмент для тестування, налагодження та аналізу регулярних виразів з детальними поясненнями.\\nПостачальник: Firas Dib\\nДата випуску: 2013 рік","buttonText":"Тестувати Regex","tags":["it","програмування","інструменти"]},{"id":181,"title":"DevDocs","url":"https://devdocs.io/","snippet":"Швидкий та зручний навігатор по документації десятків мов програмування та фреймворків в єдиному інтерфейсі.\\nПостачальник: FreeCodeCamp / Thibaut Courouble\\nДата випуску: 2013 рік","buttonText":"Читати документацію","tags":["it","програмування","довідник"]},{"id":182,"title":"CSS Gradient","url":"https://cssgradient.io/","snippet":"Зручний генератор градієнтів для CSS з візуальним редактором та можливістю копіювання коду в один клік.\\nПостачальник: Designmodo\\nДата випуску: 2017 рік","buttonText":"Створити градієнт","tags":["дизайн","веб","інструменти"]},{"id":183,"title":"Coolors","url":"https://coolors.co/","snippet":"Надшвидкий генератор колірних палітр для дизайнерів та розробників з можливістю збереження та експорту.\\nПостачальник: Fabrizio Bianchi\\nДата випуску: 2014 рік","buttonText":"Підібрати кольори","tags":["дизайн","палітра","інструменти"]},{"id":184,"title":"Carbon","url":"https://carbon.now.sh/","snippet":"Створюйте та поширюйте красиві зображення вашого сирцового коду для презентацій та соціальних мереж.\\nПостачальник: Dawn Labs\\nДата випуску: 2017 рік","buttonText":"Оформити код","tags":["it","дизайн","код"]},{"id":185,"title":"JSON Crack","url":"https://jsoncrack.com/","snippet":"Інструмент для візуалізації складних JSON-структур у вигляді зрозумілих та інтерактивних граф-схем.\\nПостачальник: Aykut Saraç\\nДата випуску: 2022 рік","buttonText":"Візуалізувати JSON","tags":["it","інструменти","json"]},{"id":186,"title":"SVGOMG","url":"https://jakearchibald.github.io/svgomg/","snippet":"Зручний веб-інтерфейс для оптимізації та стиснення векторних SVG-файлів без втрати якості.\\nПостачальник: Jake Archibald\\nДата випуску: 2015 рік","buttonText":"Оптимізувати SVG","tags":["веб","оптимізація","дизайн"]},{"id":187,"title":"CodePen","url":"https://codepen.io/","snippet":"Онлайн-середовище для тестування, демонстрації та обміну HTML, CSS і JavaScript кодом у реальному часі.\\nПостачальник: Alex Vazquez, Tim Sabat, Chris Coyier\\nДата випуску: 2012 рік","buttonText":"Створювати пени","tags":["it","веб","програмування"]},{"id":188,"title":"Supercook","url":"https://www.supercook.com/","snippet":"Генератор рецептів, який підбирає страви на основі списку продуктів, що вже є у вашому холодильнику.\\nПостачальник: Assaf Rozenblatt\\nДата випуску: 2010 рік","buttonText":"Знайти рецепт","tags":["кулінарія","інструменти","корисно"]},{"id":189,"title":"PrintFriendly","url":"https://www.printfriendly.com/","snippet":"Очищає веб-сторінки від реклами та зайвих елементів для зручного друку або збереження в PDF.\\nПостачальник: Taylor Robinson\\nДата випуску: 2009 рік","buttonText":"Підготувати до друку","tags":["інструменти","pdf","друк"]},{"id":190,"title":"Musicca","url":"https://www.musicca.com/uk","snippet":"Безкоштовна платформа для вивчення теорії музики, нотної грамоти та гри на віртуальних інструментах.\\nПостачальник: Musicca International\\nДата випуску: 2019 рік","buttonText":"Вчити музику","tags":["музика","освіта","навчання"]},{"id":191,"title":"Lucide Icons","url":"https://lucide.dev/","snippet":"Красивий, послідовний та відкритий набір іконок для сучасних вебдодатків та інтерфейсів.\\nПостачальник: Lucide Open Source Community\\nДата випуску: 2021 рік","buttonText":"Шукати іконки","tags":["дизайн","веб","іконки"]},{"id":192,"title":"Squoosh","url":"https://squoosh.app/","snippet":"Просунутий онлайн-компресор зображень від Google з можливістю порівняння форматів та якості в реальному часі.\\nПостачальник: Google Chrome Labs\\nДата випуску: 2018 рік","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":193,"title":"Type Lit","url":"https://www.typelit.io/","snippet":"Тренажер сліпого друку, де ви практикуєтеся у швидкості набору, передруковуючи класичні художні книги.\\nПостачальник: TypeLit Team\\nДата випуску: 2020 рік","buttonText":"Тренувати друк","tags":["навчання","тренажер","книги"]},{"id":194,"title":"Ray.so","url":"https://ray.so/","snippet":"Створюйте вражаючі та стильні скріншоти коду з градієнтним фоном для соціальних мереж та портфоліо.\\nПостачальник: Raycast\\nДата випуску: 2021 рік","buttonText":"Згенерувати картку","tags":["it","дизайн","інструменти"]},{"id":195,"title":"Coming Soon","url":"11111Coming Soon11111","snippet":"Дні - білі\\nНочі - чорні\\nСонце - жовте\\nІндичатко - горде\\nОчікуйте оновлень...","buttonText":"Очікуйте","tags":["секрет"]}]`),Ku="/assets/village-card-1x-Dmf4dDu0.webp",Uu="/assets/faded-card-1x-CjN6vsyA.webp",Ul=t=>`https://uk.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(t)}&format=json&origin=*`,Wl=(t="")=>t.replace(/<span class="searchmatch">/g,"").replace(/<\/span>/g,"").trim()||"Без опису",Ii=[{name:"Конотоп",fullName:"Конотоп (Сумська обл., Україна)",lat:51.24,lon:33.2,aliases:["конотоп","конотопі","конотопу","конотопом","konotop"]},{name:"Київ",fullName:"Київ (Україна)",lat:50.45,lon:30.52,aliases:["київ","києві","києва","києвом","kyiv","kiev"]},{name:"Харків",fullName:"Харків (Харківська обл., Україна)",lat:49.99,lon:36.23,aliases:["харків","харкові","харкова","харковом","kharkiv","kharkov"]},{name:"Одеса",fullName:"Одеса (Одеська обл., Україна)",lat:46.48,lon:30.72,aliases:["одеса","одесі","одеси","одесою","odesa","odessa"]},{name:"Дніпро",fullName:"Дніпро (Дніпропетровська обл., Україна)",lat:48.46,lon:35.04,aliases:["дніпро","дніпрі","дніпра","дніпром","dnipro","dnepropetrovsk"]},{name:"Львів",fullName:"Львів (Львівська обл., Україна)",lat:49.84,lon:24.03,aliases:["львів","львові","львова","львовом","lviv","lwo"]},{name:"Запоріжжя",fullName:"Запоріжжя (Запорізька обл., Україна)",lat:47.84,lon:35.14,aliases:["запоріжжя","запоріжжі","zaporizhzhia","zaporozhye"]},{name:"Кривий Ріг",fullName:"Кривий Ріг (Дніпропетровська обл., Україна)",lat:47.91,lon:33.39,aliases:["кривий ріг","кривому розі","кривого рогу","kryvyi rih"]},{name:"Миколаїв",fullName:"Миколаїв (Миколаївська обл., Україна)",lat:46.98,lon:32,aliases:["миколаїв","миколаєві","миколаєва","mykolaiv","nikolaev"]},{name:"Вінниця",fullName:"Вінниця (Вінницька обл., Україна)",lat:49.23,lon:28.48,aliases:["вінниця","вінниці","вінницею","vinnytsia","vinnitsa"]},{name:"Полтава",fullName:"Полтава (Полтавська обл., Україна)",lat:49.59,lon:34.55,aliases:["полтава","полтаві","полтави","poltava"]},{name:"Чернігів",fullName:"Чернігів (Чернігівська обл., Україна)",lat:51.49,lon:31.29,aliases:["чернігів","чернігові","чернігова","chernihiv","chernigov"]},{name:"Черкаси",fullName:"Черкаси (Черкаська обл., Україна)",lat:49.44,lon:32.06,aliases:["черкаси","черкасах","черкасів","cherkasy","cherkassy"]},{name:"Суми",fullName:"Суми (Сумська обл., Україна)",lat:50.91,lon:34.8,aliases:["суми","сумах","сум","sumy"]},{name:"Житомир",fullName:"Житомир (Житомирська обл., Україна)",lat:50.25,lon:28.66,aliases:["житомир","житомирі","житомира","zhytomyr"]},{name:"Хмельницький",fullName:"Хмельницький (Хмельницька обл., Україна)",lat:49.42,lon:27,aliases:["хмельницький","хмельницькому","khmelnytskyi"]},{name:"Рівне",fullName:"Рівне (Рівненська обл., Україна)",lat:50.62,lon:26.25,aliases:["рівне","рівному","rovno","rivne"]},{name:"Чернівці",fullName:"Чернівці (Чернівецька обл., Україна)",lat:48.29,lon:25.93,aliases:["чернівці","чернівцях","chernivtsi"]},{name:"Кременчук",fullName:"Кременчук (Полтавська обл., Україна)",lat:49.07,lon:33.42,aliases:["кременчук","кременчуці","кременчука","kremenchuk"]},{name:"Тернопіль",fullName:"Тернопіль (Тернопільська обл., Україна)",lat:49.55,lon:25.59,aliases:["тернопіль","тернополі","ternopil"]},{name:"Івано-Франківськ",fullName:"Івано-Франківськ (Івано-Франківська обл., Україна)",lat:48.92,lon:24.71,aliases:["івано-франківськ","франківськ","івано-франківську","ivano-frankivsk"]},{name:"Луцьк",fullName:"Луцьк (Волинська обл., Україна)",lat:50.75,lon:25.34,aliases:["луцьк","луцьку","lutsk"]},{name:"Біла Церква",fullName:"Біла Церква (Київська обл., Україна)",lat:49.8,lon:30.12,aliases:["біла церква","білій церкві","bila tserkva"]},{name:"Ужгород",fullName:"Ужгород (Закарпатська обл., Україна)",lat:48.62,lon:22.3,aliases:["ужгород","ужгороді","uzhhorod"]},{name:"Шостка",fullName:"Шостка (Сумська обл., Україна)",lat:51.86,lon:33.47,aliases:["шостка","шостці","shostka"]},{name:"Умань",fullName:"Умань (Черкаська обл., Україна)",lat:48.75,lon:30.22,aliases:["умань","умані","uman"]},{name:"Бердичів",fullName:"Бердичів (Житомирська обл., Україна)",lat:49.89,lon:28.58,aliases:["бердичів","бердичеві","berdychiv"]},{name:"Дрогобич",fullName:"Дрогобич (Львівська обл., Україна)",lat:49.35,lon:23.5,aliases:["дрогобич","дрогобичі","drohobych"]},{name:"Нікополь",fullName:"Нікополь (Дніпропетровська обл., Україна)",lat:47.57,lon:34.4,aliases:["нікополь","нікополі","nikopol"]},{name:"Бровари",fullName:"Бровари (Київська обл., Україна)",lat:50.51,lon:30.79,aliases:["бровари","броварах","brovary"]},{name:"Павлоград",fullName:"Павлоград (Дніпропетровська обл., Україна)",lat:48.52,lon:35.87,aliases:["павлоград","павлограді","pavlohrad"]},{name:"Сєвєродонецьк",fullName:"Сєвєродонецьк (Луганська обл., Україна)",lat:48.95,lon:38.48,aliases:["сєвєродонецьк","северодонецьк","severodonetsk"]},{name:"Бердянськ",fullName:"Бердянськ (Запорізька обл., Україна)",lat:46.76,lon:36.79,aliases:["бердянськ","бердянську","berdyansk"]},{name:"Кам'янець-Подільський",fullName:"Кам'янець-Подільський (Хмельницька обл., Україна)",lat:48.68,lon:26.58,aliases:["кам'янець-подільський","кам'янець","kamianets-podilskyi"]},{name:"Олександрія",fullName:"Олександрія (Кіровоградська обл., Україна)",lat:48.67,lon:33.11,aliases:["олександрія","олександрії","oleksandriia"]},{name:"Мукачево",fullName:"Мукачево (Закарпатська обл., Україна)",lat:48.44,lon:22.72,aliases:["мукачево","мукачеве","mukachevo"]},{name:"Кам'янське",fullName:"Кам'янське (Дніпропетровська обл., Україна)",lat:48.51,lon:34.61,aliases:["кам'янське","дніпродзержинськ","kamianske"]},{name:"Кропивницький",fullName:"Кропивницький (Кіровоградська обл., Україна)",lat:48.51,lon:32.26,aliases:["кропивницький","кіровоград","kropyvnytskyi"]},{name:"Маріуполь",fullName:"Маріуполь (Донецька обл., Україна)",lat:47.1,lon:37.54,aliases:["маріуполь","маріуполі","mariupol"]},{name:"Севастополь",fullName:"Севастополь (Крим, Україна)",lat:44.62,lon:33.53,aliases:["севастополь","севастополі","sevastopol"]},{name:"Сімферополь",fullName:"Сімферополь (Крим, Україна)",lat:44.95,lon:34.1,aliases:["сімферополь","сімферополі","simferopol"]},{name:"Херсон",fullName:"Херсон (Херсонська обл., Україна)",lat:46.64,lon:32.61,aliases:["херсон","херсоні","kherson"]},{name:"Луганськ",fullName:"Луганськ (Луганська обл., Україна)",lat:48.57,lon:39.31,aliases:["луганськ","луганську","луганська","luhansk","lugansk"]},{name:"Донецьк",fullName:"Донецьк (Донецька обл., Україна)",lat:48.01,lon:37.8,aliases:["донецьк","донеччина","донецьку","донецька","donetsk"]},{name:"Макіївка",fullName:"Макіївка (Донецька обл., Україна)",lat:48.04,lon:37.97,aliases:["макіївка","макіївці","макіївку","makiivka","makeevka"]},{name:"Горлівка",fullName:"Горлівка (Донецька обл., Україна)",lat:48.3,lon:38.05,aliases:["горлівка","горлівці","горлівку","horlivka","gorlovka"]},{name:"Краматорськ",fullName:"Краматорськ (Донецька обл., Україна)",lat:48.74,lon:37.58,aliases:["краматорськ","краматорську","краматорська","kramatorsk"]},{name:"Слов'янськ",fullName:"Слов'янськ (Донецька обл., Україна)",lat:48.85,lon:37.61,aliases:["слов'янськ","слов'янську","слов'янська","sloviansk","slavyansk"]},{name:"Мелітополь",fullName:"Мелітополь (Запорізька обл., Україна)",lat:46.85,lon:35.37,aliases:["мелітополь","мелітополі","мелітополя","melitopol"]},{name:"Бахмут",fullName:"Бахмут (Донецька обл., Україна)",lat:48.59,lon:37.99,aliases:["бахмут","бахмуті","бахмуту","артемівськ","bakhmut"]},{name:"Ізмаїл",fullName:"Ізмаїл (Одеська обл., Україна)",lat:45.35,lon:28.83,aliases:["ізмаїл","ізмаїлі","ізмаїлу","izmail"]},{name:"Ніжин",fullName:"Ніжин (Чернігівська обл., Україна)",lat:51.05,lon:31.88,aliases:["ніжин","ніжині","ніжину","nizhyn","nezhin"]},{name:"Бориспіль",fullName:"Бориспіль (Київська обл., Україна)",lat:50.35,lon:30.95,aliases:["бориспіль","борисполі","борисполя","boryspil"]},{name:"Ірпінь",fullName:"Ірпінь (Київська обл., Україна)",lat:50.52,lon:30.24,aliases:["ірпінь","ірпені","ірпеня","irpin"]},{name:"Буча",fullName:"Буча (Київська обл., Україна)",lat:50.55,lon:30.21,aliases:["буча","бучі","бучу","bucha"]},{name:"Фастів",fullName:"Фастів (Київська обл., Україна)",lat:50.08,lon:29.91,aliases:["фастів","фастові","фастова","fastiv"]},{name:"Коломия",fullName:"Коломия (Івано-Франківська обл., Україна)",lat:48.53,lon:25.04,aliases:["коломия","коломиї","коломию","kolomyia"]},{name:"Стрий",fullName:"Стрий (Львівська обл., Україна)",lat:49.26,lon:23.85,aliases:["стрий","стрию","стриї","stryi","stryy"]},{name:"Калуш",fullName:"Калуш (Івано-Франківська обл., Україна)",lat:49.02,lon:24.36,aliases:["калуш","калуші","калуша","kalush"]},{name:"Ковель",fullName:"Ковель (Волинська обл., Україна)",lat:51.22,lon:24.71,aliases:["ковель","ковелі","ковеля","kovel"]},{name:"Коростень",fullName:"Коростень (Житомирська обл., Україна)",lat:50.95,lon:28.64,aliases:["коростень","коростені","коростеня","korosten"]},{name:"Сміла",fullName:"Сміла (Черкаська обл., Україна)",lat:49.22,lon:31.87,aliases:["сміла","смілі","смілу","smila"]},{name:"Первомайськ",fullName:"Первомайськ (Миколаївська обл., Україна)",lat:48.04,lon:30.85,aliases:["первомайськ","первомайську","pervomaisk"]},{name:"Чорноморськ",fullName:"Чорноморськ (Одеська обл., Україна)",lat:46.3,lon:30.66,aliases:["чорноморськ","чорноморську","іллічівськ","chornomorsk"]},{name:"Покровськ",fullName:"Покровськ (Донецька обл., Україна)",lat:48.28,lon:37.18,aliases:["покровськ","покровську","красноармійськ","pokrovsk"]},{name:"Енергодар",fullName:"Енергодар (Запорізька обл., Україна)",lat:47.5,lon:34.65,aliases:["енергодар","енергодарі","енергодару","enerhodar"]},{name:"Керч",fullName:"Керч (Крим, Україна)",lat:45.36,lon:36.47,aliases:["керч","керчі","керчю","kerch"]},{name:"Євпаторія",fullName:"Євпаторія (Крим, Україна)",lat:45.19,lon:33.36,aliases:["євпаторія","євпаторії","yevpatoria","evpatoria"]},{name:"Ялта",fullName:"Ялта (Крим, Україна)",lat:44.49,lon:34.16,aliases:["ялта","ялті","ялту","yalta"]},{name:"Феодосія",fullName:"Феодосія (Крим, Україна)",lat:45.03,lon:35.38,aliases:["феодосія","феодосії","feodosia"]},{name:"Алчевськ",fullName:"Алчевськ (Луганська обл., Україна)",lat:48.47,lon:38.79,aliases:["алчевськ","алчевську","alchevsk"]},{name:"Самар",fullName:"Самар (Дніпропетровська обл., Україна)",lat:48.63,lon:35.26,aliases:["самар","новомосковськ","новомосковську","samar","novomoskovsk"]},{name:"Шептицький",fullName:"Шептицький (Львівська обл., Україна)",lat:50.38,lon:24.23,aliases:["шептицький","червоноград","chervonohrad","sheptytskyi"]},{name:"Лозова",fullName:"Лозова (Харківська обл., Україна)",lat:48.89,lon:36.32,aliases:["лозова","лозовій","lozova"]},{name:"Ізюм",fullName:"Ізюм (Харківська обл., Україна)",lat:49.21,lon:37.26,aliases:["ізюм","ізюмі","ізюму","izium","izyum"]},{name:"Звягель",fullName:"Звягель (Житомирська обл., Україна)",lat:50.58,lon:27.63,aliases:["звягель","звягелі","новоград-волинський","zviahel"]}],ql=t=>{if(!t||typeof t!="string")return null;const a=t.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(!a)return null;for(const r of Ii)if(r.name.toLowerCase()===a||r.aliases.some(c=>c.toLowerCase()===a))return r;for(const r of Ii)if(r.aliases.some(c=>a.includes(c.toLowerCase())))return r;return null},Ni="data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA==",Wu=async t=>{if(!t||!t.trim()||!/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|гроз|сніг|туман|київ|києві|львів|одес|харків|дніпр|запоріж|івано-франк|тернопіль|луцьк|рівне|чернівц|ужгород|суми|чернігів|полтава|черкаси|житомир|вінниц|хмельницьк|кропивницьк|миколаїв|херсон|прогноз|weather|forecast/i.test(t))return"";try{let a="Київ";for(const k of[{name:"Львів",match:/львів/i},{name:"Одеса",match:/одес/i},{name:"Харків",match:/харків/i},{name:"Дніпро",match:/дніпр/i},{name:"Запоріжжя",match:/запоріж/i},{name:"Івано-Франківськ",match:/івано-франк/i},{name:"Тернопіль",match:/тернопіль/i},{name:"Луцьк",match:/луцьк/i},{name:"Рівне",match:/рівн/i},{name:"Чернівці",match:/чернівц/i},{name:"Ужгород",match:/ужгород/i},{name:"Суми",match:/сум/i},{name:"Чернігів",match:/чернігів/i},{name:"Полтава",match:/полтав/i},{name:"Черкаси",match:/черкас/i},{name:"Житомир",match:/житомир/i},{name:"Вінниця",match:/вінниц/i},{name:"Хмельницький",match:/хмельницьк/i},{name:"Кропивницький",match:/кропивницьк/i},{name:"Миколаїв",match:/миколаїв/i},{name:"Херсон",match:/херсон/i},{name:"Київ",match:/київ|києві/i}])if(k.match.test(t)){a=k.name;break}const r=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(a)}&count=1&language=uk`,c=new AbortController,l=setTimeout(()=>c.abort(),6e3),d=await fetch(r,{signal:c.signal});if(clearTimeout(l),!d.ok)return"";const m=await d.json();if(!m.results||m.results.length===0)return"";const{latitude:f,longitude:x,name:g,country:N}=m.results[0],j=`https://api.open-meteo.com/v1/forecast?latitude=${f}&longitude=${x}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,rain_sum,showers_sum,snowfall_sum,sunrise,sunset&timezone=auto&forecast_days=7`,A=new AbortController,F=setTimeout(()=>A.abort(),6e3),L=await fetch(j,{signal:A.signal});if(clearTimeout(F),!L.ok)return"";const z=await L.json(),y=k=>k===0?"☀️ Сонячно / Ясно":k>=1&&k<=3?"⛅ Мінлива хмарність / Частково сонячно":k===45||k===48?"🌫️ Туман":k>=51&&k<=55?"🌧️ Мряка":k>=61&&k<=65?"🌧️ Дощ":k>=71&&k<=75?"❄️ Сніг":k>=80&&k<=82?"🌦️ Злива":k>=95?"⛈️ Гроза":"🌤️ Помірно",h=z.current,w=z.daily;let S=[`[Джерело: Open-Meteo Weather API — ${g}, ${N||"Україна"}]`];return h&&S.push(`• Погода зараз: ${Math.round(h.temperature_2m)}°C (відчувається як ${Math.round(h.apparent_temperature)}°C), ${y(h.weather_code)}, вітер ${Math.round(h.wind_speed_10m)} км/год, вологість ${h.relative_humidity_2m}%.`),w&&w.time&&w.time.length>1&&(S.push(`• Сьогодні (${w.time[0]}): Мін: ${Math.round(w.temperature_2m_min[0])}°C, Макс: ${Math.round(w.temperature_2m_max[0])}°C, Статус: ${y(w.weather_code[0])}, Ймовірність опадів: ${w.precipitation_probability_max[0]}%.`),S.push(`• Завтра (${w.time[1]}): Мін: ${Math.round(w.temperature_2m_min[1])}°C, Макс: ${Math.round(w.temperature_2m_max[1])}°C, Статус: ${y(w.weather_code[1])}, Ймовірність опадів: ${w.precipitation_probability_max[1]}%.`),w.time[2]&&S.push(`• Післязавтра (${w.time[2]}): Мін: ${Math.round(w.temperature_2m_min[2])}°C, Макс: ${Math.round(w.temperature_2m_max[2])}°C, Статус: ${y(w.weather_code[2])}, Ймовірність опадів: ${w.precipitation_probability_max[2]}%.`)),S.join(`
`)}catch(a){return console.warn("Open-Meteo weather fetch error:",a),""}},qu=async t=>{const a=`${t} latest news`,r=`https://news.google.com/rss/search?q=${encodeURIComponent(a)}&hl=uk&gl=UA&ceid=UA:uk`,c=await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(r)}`);if(!c.ok)return"";const l=((await c.json()).items||[]).slice(0,6);return l.length===0?"":`[Джерело: Google News RSS — актуальні результати пошуку]
${l.map((d,m)=>{const f=d.pubDate?new Date(d.pubDate).toLocaleString("uk-UA"):"дата невідома",x=(d.description||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim().slice(0,240);return`${m+1}. ${d.title}
Дата: ${f}
Опис: ${x||"немає"}
Посилання: ${d.link}`}).join(`

`)}`},Ju=async t=>{if(!t||!t.trim())return"";const a=[],r=/новин|новини|news|поді[їй]|сві[тт]|world|останн|актуальн/i.test(t);if(!r||/київ|києві|львів|одес|харків|дніпр|запоріж|міст[оі]|city/i.test(t))try{const c=await Wu(t);c&&a.push(c)}catch(c){console.warn("Weather search error:",c)}if(r)try{const c=await qu(t);c&&a.push(c)}catch(c){console.warn("News search error:",c)}try{const c=`https://api.duckduckgo.com/?q=${encodeURIComponent(t)}&format=json&no_html=1&skip_disambig=1`,l=await fetch(c);if(l.ok){const d=await l.json();if(d.AbstractText)a.push(`[Джерело: DuckDuckGo] ${d.AbstractText}`);else if(d.RelatedTopics&&d.RelatedTopics.length>0){const m=d.RelatedTopics.slice(0,3).map(f=>f.Text).filter(Boolean);m.length>0&&a.push(`[Джерело: DuckDuckGo] ${m.join("; ")}`)}}}catch(c){console.warn("DuckDuckGo search error:",c)}try{const c=Ul(t),l=await fetch(c);if(l.ok){const d=((await l.json())?.query?.search||[]).slice(0,3).map(m=>{const f=Wl(m.snippet);return`• ${m.title}: ${f}`});d.length>0&&a.push(`[Джерело: Вікіпедія]
${d.join(`
`)}`)}}catch(c){console.warn("Wikipedia search error:",c)}return a.length===0?"":`
--- ЗНАЙДЕНА АКТУАЛЬНА ІНФОРМАЦІЯ З ІНТЕРНЕТУ / ПОГОДНОГО API: ---
`+a.join(`

`)+`
-------------------------------------------------------------------
`},Go="/assets/reader-DAjoeGA1.webp",Gu="/assets/readerfour-COZB_3VH.webp",cr="/assets/readertwo-BHOtORgg.webp",Kr="/assets/readerthree-CyIHINAl.webp",_u="/assets/reader-nobg-CHFl1hKC.webm",_o=[Go,Gu,Go,cr,Kr,cr,Kr,cr,Kr,cr],Yu=({interval:t=250,className:a=""})=>{const[r,c]=(0,n.useState)(0),[l,d]=(0,n.useState)(()=>{if(typeof navigator>"u"||!navigator.onLine)return!0;if(navigator.connection){const x=navigator.connection;if(x.saveData||["slow-2g","2g","3g"].includes(x.effectiveType))return!0}return!1}),[m,f]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{const x=()=>{if(!(!(typeof navigator<"u")||navigator.onLine)){d(!0);return}if(typeof navigator<"u"&&navigator.connection){const g=navigator.connection;d(!!g.saveData||["slow-2g","2g","3g"].includes(g.effectiveType))}else d(!1)};return x(),window.addEventListener("online",x),window.addEventListener("offline",x),typeof navigator<"u"&&navigator.connection&&navigator.connection.addEventListener("change",x),()=>{window.removeEventListener("online",x),window.removeEventListener("offline",x),typeof navigator<"u"&&navigator.connection&&navigator.connection.removeEventListener("change",x)}},[]),(0,n.useEffect)(()=>{if(!l&&!m)return;const x=setInterval(()=>{c(g=>(g+1)%_o.length)},t);return()=>clearInterval(x)},[t,l,m]),!l&&!m?(0,e.jsx)("video",{src:_u,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onError:()=>f(!0),className:a,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}}):(0,e.jsx)("img",{src:_o[r],alt:"Анімований помічник",className:a,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}})},Zu=le`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`,Xu=i.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`,Qu=i.div`
  background: ${t=>t.$isDarkMode?"#121316bb":"#fcf7f7d3"};
  color: ${t=>t.$isDarkMode?"#f3f4f6":"#1f2937"};
  width: 100%;
  height: 95vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${t=>t.$isDarkMode?"0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.1)":"0 20px 50px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"};
  animation: ${Zu} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`,ef=i.div`
  padding: 8px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.01)"};
`,tf=i.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    background: linear-gradient(135deg, #ffb36c 0%, #ff8a3d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,af=i.button`
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  border: none;
  color: inherit;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
  }
`,nf=i.div`
  padding: 6px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  position: relative;
  z-index: 10;
`,rf=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`,pr=i.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
`,Ur=i.select`
  padding: 5px 8px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 8px;
  background: ${t=>t.$isDarkMode?"#1c1d22":"#fff"};
  color: inherit;
  font-size: 11px;
`,of=i.div`
  position: relative;
  flex: 1;
  min-width: 0;
`,sf=i.div`
  position: absolute;
  left: 12px;
  bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  color: ${t=>t.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,lf=i.div`
  position: absolute;
  right: 8px;
  bottom: 6px;
  display: flex;
  gap: 4px;
`,Wr=i.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 179, 108, 0.35);
  border-radius: 7px;
  background: ${t=>t.$primary?"linear-gradient(135deg, #ffb36c, #ff8a3d)":"transparent"};
  color: ${t=>t.$primary?"#111":"inherit"};
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,df=i.div`
  margin-top: 6px;
  color: ${t=>t.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,Yo=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`,Zo=i.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px;
  border: 2px solid rgba(255, 179, 108, 0.45);
  border-radius: 9px;
  background: transparent;
  width: 310px;
  font-weight:700;
  color: white;
  cursor: pointer;
  font-size: 14px;
   svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
`,cf=i.div`
  padding: 5px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"};
    border-radius: 10px;
  }
`,pf=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,uf=i.div`
  margin: auto;
  text-align: center;
  max-width: 320px;
  color: ${t=>t.$isDarkMode?"#888":"#666"};
  font-size: 13px;
  line-height: 1.5;

  span {
    font-size: 32px;
    display: block;
    margin-bottom: 8px;
  }
`,Xo=i.div`
  align-self: ${t=>t.$isBot?"flex-start":"flex-end"};
  background: ${t=>t.$isBot?t.$isDarkMode?"#1d1f24":"#f3f4f6":"linear-gradient(135deg, #ffb36c 0%, #ffa040 100%)"};
  color: ${t=>t.$isBot?t.$isDarkMode?"#f3f4f6":"#1f2937":"#000"};
  padding: 12px 16px;
  border-radius: ${t=>t.$isBot?"16px 16px 16px 4px":"16px 16px 4px 16px"};
  max-width: 85%;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid
    ${t=>t.$isBot?t.$isDarkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)":"transparent"};
  box-shadow: ${t=>t.$isBot?"none":"0 4px 12px rgba(255, 179, 108, 0.15)"};

  p { margin: 0 0 8px 0; }
  p:last-child { margin: 0; }

  a {
    color: ${t=>t.$isBot?"#ffb36c":"#000"};
    text-decoration: underline;
  }
`,ff=i.div`
  padding: 5px;
  border-top: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  gap: 10px;
  background: ${t=>t.$isDarkMode?"#16171b":"#fafafa"};
`,gf=i.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 118px 34px 18px;
  border-radius: 14px;
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.12)"};
  background: ${t=>t.$isDarkMode?"#22242a":"#fff"};
  color: inherit;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ffb36c;
  }

  &::placeholder {
    color: ${t=>t.$isDarkMode?"#666":"#aaa"};
  }
`,qr=300,ur="gemini_global_cooldown_until",xf=t=>t==="detailed"?"Відповідай докладно, але структуровано.":t==="concise"?"Відповідай стисло, лише головна суть.":"Відповідай нормально, збалансовано за обсягом.",hf=t=>t==="scientific"?"Використовуй науковий, точний стиль.":t==="standard"?"Використовуй нейтральний стандартний стиль.":"Використовуй дружній, простий стиль.",mf=t=>{const a=/\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/,r=t.match(a);if(!r)return{cleanText:t,questions:[]};const c=r[1].split(`
`).map(l=>l.replace(/^[•\-*\d.\s]+/,"").trim()).filter(Boolean).slice(0,2);return{cleanText:t.replace(a,"").trim(),questions:c}},bf=[{icon:(0,e.jsx)(Ac,{"aria-hidden":"true"}),text:"Поясни головну думку новини."},{icon:(0,e.jsx)(yc,{"aria-hidden":"true"}),text:"Які факти є найцікавішими?"},{icon:(0,e.jsx)(Lc,{"aria-hidden":"true"}),text:"Які можуть бути наслідки?"}];function yf({isOpen:t,onClose:a,newsItem:r,isDarkMode:c}){const[l,d]=(0,n.useState)("normal"),[m,f]=(0,n.useState)("friendly"),[x,g]=(0,n.useState)("0"),[N,j]=(0,n.useState)(!0),[A,F]=(0,n.useState)([]),[L,z]=(0,n.useState)(""),[y,h]=(0,n.useState)(!1),[w,S]=(0,n.useState)(""),[k,K]=(0,n.useState)(0),[H,te]=(0,n.useState)(!1),ee=(0,n.useRef)(null),fe=(0,n.useRef)(null),Q=(0,n.useRef)(0);(0,n.useEffect)(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),(0,n.useEffect)(()=>{if(!t)return;Promise.all([u.default.getItem("gemini_api_key"),u.default.getItem("gemini_google_search_enabled"),u.default.getItem("gemini_suggested_questions_count"),u.default.getItem(ur)]).then(([_,me,re,Te])=>{S(_||""),me!==null&&j(me),["0","1","2"].includes(re)&&g(re),Te&&Te>Date.now()&&(Q.current=Te,K(Math.ceil((Te-Date.now())/1e3)))});const Y=`news_ai_chat_${r?.link||"general"}`;u.default.getItem(Y).then(_=>{_?Date.now()-_.timestamp>864e5?(F([]),u.default.removeItem(Y)):F((_.messages||[]).slice(-10)):F([])})},[t,r]),(0,n.useEffect)(()=>{const Y=setInterval(()=>{u.default.getItem(ur).then(_=>{const me=Math.max(Q.current,Number(_)||0),re=Math.max(0,me-Date.now());Q.current=me,K(Math.ceil(re/1e3)),!re&&me&&(Q.current=0,u.default.removeItem(ur))})},250);return()=>clearInterval(Y)},[]),(0,n.useEffect)(()=>{ee.current?.scrollIntoView({behavior:"smooth"})},[A,y]);const M=Y=>{const _=Y.slice(-10),me=`news_ai_chat_${r?.link||"general"}`;u.default.setItem(me,{timestamp:Date.now(),messages:_}),F(_)},O=Y=>{const _=Date.now()+Y*1e3;Q.current=_,K(Y),u.default.setItem(ur,_)},ae=async()=>{F([]),await u.default.removeItem(`news_ai_chat_${r?.link||"general"}`)},ge=()=>{const Y=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Y)return;if(H&&fe.current){fe.current.stop();return}const _=new Y;fe.current=_,_.lang="uk-UA",_.onstart=()=>te(!0),_.onresult=me=>{z(re=>`${re?`${re} `:""}${me.results[0][0].transcript}`.slice(0,qr))},_.onend=()=>{te(!1),fe.current=null},_.start()},ce=async(Y=null)=>{const _=Y||L;if(!_.trim()||y||Q.current>Date.now())return;if(!w){alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");return}const me={text:_,isBot:!1},re=[...A,me];Y||z(""),F(re),h(!0);try{const Te=new Ns(w).getGenerativeModel({model:"gemini-2.5-flash",...N?{tools:[{googleSearch:{}}]}:{}});let Ae="";N&&(Ae=await Ju(`${r?.title||""} ${_}`));const ft=Number(x),Ct=ft?`Додай рівно ${ft} коротке(их) питання(нь) у блоці [РЕКОМЕНДОВАНІ_ПИТАННЯ].`:"Не додавай блок рекомендованих питань.",Jt=`${`Ти - ШІ-помічник для аналізу новини.
${xf(l)}
${hf(m)}
${Ct}`}
Новина:
Заголовок: ${r?.title||""}
Опис: ${r?.description||""}
Посилання: ${r?.link||""}
${Ae}
Запит користувача: ${_}`,gt=await(await Te.generateContent(Jt)).response,Be=gt.text(),qe=gt.usageMetadata,Nt={text:Be,isBot:!0,usage:qe?{promptTokens:qe.promptTokenCount||0,responseTokens:qe.candidatesTokenCount||0,totalTokens:qe.totalTokenCount||0}:null};M([...re,Nt]),O(Number(x)===0?5:Number(x)===1?10:15)}catch(Te){console.error(Te);const Ae={text:"⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",isBot:!0};M([...re,Ae])}finally{h(!1)}};return t?(0,Cr.createPortal)((0,e.jsx)(Xu,{onClick:a,children:(0,e.jsxs)(Qu,{$isDarkMode:c,onClick:Y=>Y.stopPropagation(),children:[(0,e.jsxs)(ef,{$isDarkMode:c,children:[(0,e.jsx)(tf,{children:(0,e.jsx)("h3",{children:"ШІ Виклад новини"})}),(0,e.jsx)(af,{$isDarkMode:c,onClick:a,title:"Закрити",children:"✕"})]}),(0,e.jsx)(nf,{$isDarkMode:c,children:(0,e.jsxs)(rf,{children:[(0,e.jsxs)(pr,{children:["Обсяг:",(0,e.jsxs)(Ur,{$isDarkMode:c,value:l,onChange:Y=>d(Y.target.value),children:[(0,e.jsx)("option",{value:"concise",children:"Менше"}),(0,e.jsx)("option",{value:"normal",children:"Нормально"}),(0,e.jsx)("option",{value:"detailed",children:"Більше"})]})]}),(0,e.jsxs)(pr,{children:["Стиль:",(0,e.jsxs)(Ur,{$isDarkMode:c,value:m,onChange:Y=>f(Y.target.value),children:[(0,e.jsx)("option",{value:"friendly",children:"Дружньо"}),(0,e.jsx)("option",{value:"standard",children:"Стандартно"}),(0,e.jsx)("option",{value:"scientific",children:"Науково"})]})]}),(0,e.jsxs)(pr,{children:["Пропозиції:",(0,e.jsxs)(Ur,{$isDarkMode:c,value:x,onChange:async Y=>{g(Y.target.value),await u.default.setItem("gemini_suggested_questions_count",Y.target.value)},children:[(0,e.jsx)("option",{value:"0",children:"0 (5 с)"}),(0,e.jsx)("option",{value:"1",children:"1 (10 с)"}),(0,e.jsx)("option",{value:"2",children:"2 (15 с)"})]})]}),(0,e.jsxs)(pr,{children:[(0,e.jsx)("input",{type:"checkbox",checked:N,onChange:async Y=>{j(Y.target.checked),await u.default.setItem("gemini_google_search_enabled",Y.target.checked)}}),"Інтернет-пошук"]})]})}),(0,e.jsx)(cf,{$isDarkMode:c,children:A.length===0&&!y?(0,e.jsxs)(uf,{$isDarkMode:c,children:[(0,e.jsx)(Yu,{interval:250}),(0,e.jsx)("div",{style:{marginTop:"-140px",color:c?"#ffffff":"#080808"},children:"Задайте питання про новину або оберіть питання:"}),(0,e.jsx)(Yo,{children:bf.map(({icon:Y,text:_})=>(0,e.jsxs)(Zo,{onClick:()=>ce(_),children:[Y,_]},_))})]}):(0,e.jsxs)(pf,{children:[A.map((Y,_)=>{const me=Y.isBot?mf(Y.text):{cleanText:Y.text,questions:[]};return(0,e.jsxs)(Xo,{$isBot:Y.isBot,$isDarkMode:c,children:[(0,e.jsx)(Yd,{children:me.cleanText}),Y.usage?.totalTokens>0&&(0,e.jsxs)(df,{$isDarkMode:c,children:["Витрачено токенів: ",Y.usage.totalTokens]}),me.questions.length>0&&(0,e.jsx)(Yo,{children:me.questions.map(re=>(0,e.jsx)(Zo,{onClick:()=>ce(re),children:re},re))})]},_)}),y&&(0,e.jsx)(Xo,{$isBot:!0,$isDarkMode:c,children:"Аналізую та генерую відповідь..."}),(0,e.jsx)("div",{ref:ee})]})}),(0,e.jsx)(ff,{$isDarkMode:c,children:(0,e.jsxs)(of,{children:[(0,e.jsx)(gf,{$isDarkMode:c,value:L,maxLength:qr,onChange:Y=>z(Y.target.value),onKeyDown:Y=>Y.key==="Enter"&&ce(),placeholder:"Задавайте питання...",disabled:y||k>0}),(0,e.jsxs)(sf,{$isDarkMode:c,children:[L.length,"/",qr,k>0&&` Перезарядка: ${k} с`]}),(0,e.jsxs)(lf,{children:[(0,e.jsx)(Wr,{type:"button",onClick:ge,title:H?"Зупинити голосовий ввід":"Голосовий ввід",children:H?(0,e.jsx)("span",{"aria-hidden":"true",children:"■"}):(0,e.jsx)(Bd,{})}),(0,e.jsx)(Wr,{type:"button",onClick:ae,title:"Очистити чат",children:(0,e.jsx)(Fc,{})}),(0,e.jsx)(Wr,{type:"button",$primary:!0,onClick:()=>ce(),disabled:y||k>0||!L.trim(),title:k>0?`Перезарядка: ${k} с`:"Надіслати",children:(0,e.jsx)(tc,{})})]})]})})]})}),document.body):null}var wf=JSON.parse(`[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна! \\n  Погода, безпечні новини, та купа інструментів, чекають на вас!","image":null},{"q":"Угода користувача","a":"Ця Угода є юридично обов'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"preview"},{"q":"Співпраця та поради.","a":"Так! Я можу підказати через email, як отримати доступ до API сайтів та плагінів, які я використовую.","image":"might"},{"q":"Історія власників сайту...Не реальних: Кейт, Доміно, Марти...","a":"Це секрет поки.","image":"might"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок і натисніть Enter або натисніть на кнопку пошуку.\\nКрок 2. Оберіть потрібне місто зі списку підказок (якщо з'явиться кілька варіантів).\\nКрок 3. Ви побачите три блоки прогнозу:\\n  • Зараз — поточна температура, відчуття, вологість, тиск, вітер, УФ-індекс.\\n  • 24-годинний (на 7 днів) — кожна доба окремо, розбита по годинах.\\n  • 16-денний — загальний прогноз на два тижні вперед.\\nКрок 4. Зверніть увагу на кольорові мітки:\\n  🔴 Червоний (!): умови перевищують норму прямо ЗАРАЗ (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7).\\n  🟠 Оранжевий (!): небезпечні умови очікуються хоча б в один із найближчих 3 днів.\\nКрок 5. Натисніть на картку дня, щоб розгорнути погодинний прогноз.\\nКрок 6. Щоб додати кілька міст одночасно — введіть наступне місто в той самий рядок після першого.\\nПорада: якщо прогноз не оновлюється, натисніть кнопку оновлення або перезавантажте сторінку.","image":"hills"},{"q":"🌤 Погода: часті питання","a":"\\n\\nЧому немає прогнозу? — Можливо, проблеми з інтернет-з'єднанням.\\n\\nЯк прибрати місто зі списку? — Натисніть на налаштування і натисніть видалити картку(не працює на головній картці).\\n\\nЧому УФ-індекс = 0 вночі? — Це нормально: УФ-випромінювання відсутнє без сонця.\\n\\nЯк дізнатись вологість ґрунту або атмосферний тиск? — Ці дані відображаються у розгорнутому вигляді картки «Зараз».","image":"hills"},{"q":"🌤 Погода: додаткові відомості","a":"Крім, назви міста ви можете зробити пошук по координатам.\\n Замітки: під логотипом є поле з датою, назвою(до 12символів) і кнопкою додати.\\nЯкщо ви не ввели дату(лише назву), то ви моджете встановити дату, натиснувши пару разів на дату у 16денному прогнозі.\\nДата підсвічується синім кольором у 16денному прогнозі. Для того щоб прибрати натисніть на дату і назву події в фіолетовому полі, під об'єктом встановленням дати.","image":"hills"},{"q":"Бундючий пошук","a":"Тут ми розміщуємо 200-250 цікавих, корисних сайтів та ігор... А також статті з Вікіпедії. При натиску на закріпити, ви можете перейти на сайт не вводячі символів.","image":null},{"q":"Відсутність реклами і підписок.","a":"Це трохи дивно, але логічно. Ми поважаємо ваш час і не хочемо його витрачати на рекламу. Деякі функції обмежені, бо технології Firebase мають безкоштовний ліміт, вони відчутні лише при великій активності. Повірте через 100 спам-ботів можна втратити за місяць 20000грн.","image":"three"},{"q":"📰 Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані безпечні RSS-джерела.\\nКрок 3. Щоб додати власне джерело:\\n  • Натисніть кнопку «+ Додати джерело».\\n  • Вставте посилання на RSS-стрічку сайту (закінчується на .xml, .rss або /feed).\\n  • Натисніть «Додати» — новини завантажаться автоматично.\\nКрок 4. У налаштуваннях новин можна:\\n  • Увімкнути автоскрол при відкритті сайту.\\n  • Приховати заголовок або опис новини.\\nКрок 5. Мітка «НОВЕ» — з'являється на 1 хвилину після того, як ви прокрутили до новини.\\nКрок 6. Для власників Google AI Key — доступна функція «ШІ-виклад»: чат-бот обговорює будь-яку новину. 1 новина = 10 останніх повідомлень. Повне очищення чату через 24 год без активності.\\nФільтрація: Новини з темами насильства, політики, 18+, криміналу, релігії (крім святкових привітань у погодних картках), казино, корупції, сект і теактів — не відображаються автоматично.","image":null},{"q":"📰 Новини: часті питання","a":"Чому деякі RSS не працюють? — Деякі сайти мають «биті» або порожні стрічки. Перевірте посилання через W3C Feed Validator або відкрийте його у браузері.\\n\\nЧи можна додати Facebook чи Twitter? — Ні. Ці платформи не мають RSS. Можна скористатись сторонніми конверторами (наприклад, RSS.app), але вони зазвичай платні.\\n\\nЧому новина не оновлюється? — RSS-стрічки оновлюються з боку самого сайту-джерела. Якщо джерело давно не публікувало — новин не буде.\\n\\nЯк поскаржитись на новину, що проскочила фільтр? — Надішліть скаргу на email: theturkeystudio@gmail.com з посиланням на новину.\\n\\nРекомендовані RSS-джерела:\\n• ScienceDaily: https://www.sciencedaily.com/rss/top/science.xml\\n• NASA: https://www.nasa.gov/rss/dyn/breaking_news.rss\\n• Суспільне: https://suspilne.media/feed/news/rss-uk.xml\\n• BBC World: https://feeds.bbci.co.uk/news/world/rss.xml\\n• TechCrunch: https://techcrunch.com/feed/\\n• The Verge: https://www.theverge.com/rss/index.xml\\n• Укрінформ: https://www.ukrinform.ua/rss\\n• IGN (ігри): https://feeds.feedburner.com/ign/news\\n• TED Talks: https://feeds.feedburner.com/TEDTalks_video","image":null},{"q":"🤖 ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key». Чи зберігаються мої ключі на сервері? — Ні. Ключі зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо. Рекомндуємо щоб ваш пристрій мав пароль для того щоб пристрій не потрапив у чужі руки. А також не прив'язуйте картку до ключа який ви використовуєте.\\n\\nПомилка 503 від Gemini — що робити? — Це тимчасове перевантаження серверів Google. Зачекайте 1-2 хвилини і натисніть «Спробувати ще раз».\\n\\nЧи може ШІ аналізувати сторінку сайту? — Так! Тільки для Gemini: натисніть 📸, а потім запитайте «Що ти бачиш?» або «Що можна покращити?».\\n\\nЧи підтримує ШІ аудіофайли? — Так, Gemini 2.5 Flash аналізує аудіо (mp3, wav, ogg та ін.).\\n\\nЯк скопіювати відповідь? — Натисніть кнопку 📋 у правому верхньому куті повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":null},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Прогортайте трохи нижче карток погоди, ви побачите індичка і карту клімату.\\nКрок 2. Щоб побачити картку натисніть на неї. На карті Ventusky відображаються кліматичні зони, температурні аномалії або погодні дані по регіонах.\\nКрок 3. Клікніть на будь-яку точку карти — з'явиться детальна інформація про клімат цього регіону.\\nКрок 4. Використовуйте жести масштабування (колесо миші або пальці на сенсорному екрані) для наближення/віддалення.\\nКрок 5. Перемикайте шари карти (якщо доступно) для перегляду різних кліматичних параметрів.\\nКрок 6. Карту можна змінити на Windy, а також Карту повітряних тривог і т.д. Щоб зробити це натисніть на текст Налаштування Стихії. \\nКрок 7.Ви можете додати свої фрейми.","image":"texts"},{"q":"🗺 Карта клімату: часті питання","a":"Чому карта не завантажується? — Перевірте інтернет-з'єднання. Карта потребує стабільного підключення.\\n\\nЧи можна зберегти знімок карти? — Використовуйте скріншот браузера.\\n\\nЩо означають кольори на карті? — Зазвичай: синій — холодно, жовтий — тепло, червоний — спека або аномалія. Конкретне пояснення — у легенді на карті.","image":"texts"},{"q":"🎨 Фан-арти: часті питання","a":"Чи можна завантажити фан-арт? — Так. Натисніть іконку завантаження в повноекранному режимі.\\n\\nЧи можна надіслати свій малюнок? — Напишіть на theturkeystudio@gmail.com. Можливо, вашу роботу додадуть до галереї!\\n\\nЩирість важливіша за досконалість.\\n\\nЧи можна використати фан-арти комерційно? - Ні. Всі фан-арти призначені для особистого перегляду та натхнення. Комерційне використання заборонено.","image":"two"},{"q":"🖥 Загальне: часті питання","a":"Що таке Стихія? — Це веб-платформа «погода + музика + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити.\\n\\nЧи є мобільний додаток? — Поки що ні. Але сайт оптимізований для мобільних браузерів.\\n\\nЯк зв'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам.","image":"one"},{"q":"За що відповідає меню?","a":"Перестановнку секцій, зміну темної теми окремо кожної секції, відображення(так ви можете вимкнути її якщо вона непотрібна) Доступ після реєстрації. Та багато чого ще...","image":"logofix"},{"q":"Навіщо реєстрація?","a":"Це необхідно для збереження карток погоди. З метою безпеки ми не підключали до збереження данних Gemini API Key та діалоги з ШІ. Ви це можете побачити у репозиторії на Github. Ми не збираємо ваші данні, і не передаємо їх третім особам. Код ШІ компонента: https://github.com/TheTurkeyProgramist/stuxia/blob/main/src/components/Aihelp/Aihelp.jsx","image":"one"},{"q":"Плани і тематика","a":"Сайту з багатьма відсилками ще ніколи не було. Працюю над поліпшенням теперішнього, та додаванхням відсилок і я відкритий до ваших ідей! The strangest site of all.","image":"two"}]`),vf="/assets/logo-CeE8IWwr.webp",kf="/assets/prewiew-CkyBq-Ws.webp",jf="/assets/what-Dh9YNb09.webp",Qo="/assets/myone-Dyn4Do12.webp",Sf="/assets/mytwo-DY56vL7p.webp",Cf="/assets/soon-Cz5fTUD_.webp",Tf="/assets/mythree-BY2evDkD.webp",Jl=Ps({Tooltip:()=>Mi,default:()=>Yl}),Af=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,If=le`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,Mf=le`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,Gl=le`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,Df=le`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,zf=rt`
  opacity: 0;
  transform-origin: left center;
  animation: ${Df} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:t})=>rt`
    animation-delay: ${.1+(t||0)*.05}s;
  `}
`,Rf=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  transition:
    opacity 0.4s ease,
    pointer-events 0.4s ease;
  opacity: ${t=>t.$isClosing?0:1};
  pointer-events: ${t=>t.$isClosing?"none":"auto"};
  backdrop-filter: blur(5px);
`,Ff=i.div`
  background: ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  padding: 5px;
  border-radius: 10px;
  max-width: 1200px;
  width: 95%;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${t=>t.$isClosing?Mf:If} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,Lf=i.div`
  background:  ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,$f=i.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`,Ef=i.div`
  display: flex;
  justify-content: center;
`,es=i.button`
  background: ${({$active:t,$isDarkMode:a})=>t?"#8a2be2":a?"#0c0c0cbf":"#fdff98"};

  color: ${({$active:t,$isDarkMode:a})=>t?"#ffffff":"#020202"};

  border: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({$active:t,$isDarkMode:a})=>t?"#7b22cc":a?"#1a1a1ce6":"#fbff02"};
  }
`,_l=i.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border: none;
  padding-left: 5px;
  padding-bottom: 5px;
  font-weight: 700;
  padding-right: 9px;
  background: ${t=>t.$isDarkMode?"#27b5b0b1":"#6f6e22c6"};
  color: ${t=>t.$isDarkMode?"#000000b1":"#ffffff"};
  height: 36px;
  font-size: 14px;
  cursor: pointer;
`,ts=i(_l)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${Gl} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,Pf=i.div`
  margin-top: 3px;
`,Nf=i.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${zf}
`,Of=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${({$rating:t,$isDarkMode:a})=>t===1?"#8a2be2":a?"#ffffff":"#111111"};
  opacity: ${t=>t.$rating===-1?.4:1};
  transition: all 0.3s ease;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${({$rating:t,$isDarkMode:a})=>t===-1?a?"#555555":"#cccccc":"#8a2be2"};
    margin-right: 12px;
    display: inline-block;
  }
`,Vf=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`,Bf=i.div`
  flex: 1;
`,as=i.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 1px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 22px;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.2);
  }
`,Hf=i.div`
  display: flex;
  align-items: center;
  gap: 7px;
`,Kf=i.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${t=>t.$isHovered||t.$isPinned?"800px":"10px"};
  opacity: ${t=>t.$isHovered||t.$isPinned?1:.4};

  &:hover {
    transform: scale(1.01);
  }
`,Uf=i.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${Gl} 0.3s ease-out forwards;
`,ns=i.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`,rs=i.button`
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  &:hover {
    background: #a25be2;
  }
`,Wf=i.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.72);
`,qf=i.div`
  position: relative;
  width: min(900px, 100%);
  max-height: 85vh;
  overflow-y: auto;
  padding: 28px;
  border-radius: 14px;
  color: #fff;
  background-color: #17252b;
  background-image: ${({$backgroundImage:t})=>t?`linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.78)), url("${t}")`:"linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.6))"};
  background-position: center;
  background-size: cover;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
`,Jf=i.h2`
  margin: 0 42px 18px 0;
  font-size: 22px;
`,Gf=i.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  white-space: pre-line;
`,_f=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
`,Yf=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,Zf=i.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,Xf=i.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid rgb(50, 215, 0);
  border-bottom-left-radius: 25px;
  background: rgba(2, 2, 2, 0.9);
  color: #fffefe;
  font-size: 13px;
  outline: none;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #f9f9f9;
  }
`,Mi=({content:t,children:a,placement:r="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,n.useState)(!1),m=(0,n.useRef)(null),{refs:f,floatingStyles:x,context:g}=Rn({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:An,middleware:[zn(8),Fn(),In({padding:5}),Tn({element:m})]}),{isMounted:N,styles:j}=Cn(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),A=Sn(g,{move:!1}),F=$n(g),L=jn(g),z=En(g,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:h}=Dn([A,F,L,z]);if(!t)return a;const w=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...y(),style:{display:"inline-flex"},children:a}),N&&(0,e.jsx)(Mn,{children:(0,e.jsxs)(Af,{ref:f.setFloating,$isDarkMode:c,style:{...x,...j},...h(),children:[t,(0,e.jsx)(Ln,{ref:m,context:g,fill:w,stroke:"#00acb9",strokeWidth:1})]})})]})},Yl=({onClose:t,isOpen:a,initialFaqQuestion:r,isDarkMode:c})=>{const[l,d]=(0,n.useState)(!1),m=kr(M=>M.calendar?.customDays||[]),[f,x]=(0,n.useState)(null),[g,N]=(0,n.useState)({}),[j,A]=(0,n.useState)(""),[F,L]=(0,n.useState)("faq"),z=1,y=-1,[h,w]=(0,n.useState)(null),S=(0,n.useCallback)(()=>{if(h){w(null);return}if(f){x(null);return}w(null),d(!0),setTimeout(()=>{d(!1),t()},400)},[t,h,f]),k=M=>{const O=document.createElement("a");O.href=M,O.download=`stykhiya_image_${Date.now()}.png`,document.body.appendChild(O),O.click(),document.body.removeChild(O)},K=M=>{const O=window.open("","_blank");O.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${M}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`),O.document.close()};(0,n.useEffect)(()=>{const M=O=>{O.key==="Escape"&&S()};if(a||l)return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[a,l,S]);const H=(M,O)=>{const ae=(g[M]||0)===O?0:O;N({...g,[M]:ae})},te=n.useMemo(()=>{const M=new Date().toISOString().split("T")[0];return m.filter(O=>O.date<M).sort((O,ae)=>ae.date.localeCompare(O.date)).slice(0,5)},[m]),ee=n.useMemo(()=>{const M={hills:Ri,texts:Ks,logofix:vf,preview:kf,info:jf,one:Qo,two:Sf,soon:Cf,might:Qo,three:Tf},O=wf.map(ae=>({...ae,image:ae.image?M[ae.image]??null:null}));if(te.length>0){const ae=te.map(ge=>`• ${ge.date}: ${ge.reason}`).join(`
`);O.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:

${ae}`,image:null})}return O},[te]);if((0,n.useEffect)(()=>{if(!a){x(null);return}let M=null;if(r){const O=ee.findIndex(ae=>ae.q===r);O>=0&&(M=ee[O],L("faq"))}x(M)},[ee,r,a]),!a&&!l)return null;const fe=M=>M.content&&Array.isArray(M.content)&&M.content.length>0?M.content.map((O,ae)=>{if(O.type==="image"){const ge=O.src||O.image,ce=O.alt||M.q||"FAQ image";return(0,e.jsx)("div",{style:{marginBottom:"10px"},children:(0,e.jsx)(Kf,{src:ge,alt:ce,onClick:()=>w(ge)})},`image-${ae}`)}if(O.type==="text"){const ge=O.value||O.text||"";return(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:String(ge).replace(/\n/g,"<br/>")}},`text-${ae}`)}return null}):(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:(M.a||"").replace(/\n/g,"<br/>")}}),Q=[...ee].map((M,O)=>({...M,originalIndex:O,rating:g[O]||0})).filter(M=>{if(!j)return!0;const O=j.toLowerCase();return M.q?.toLowerCase().includes(O)||M.a?.toLowerCase().includes(O)}).sort((M,O)=>O.rating-M.rating);return(0,e.jsxs)(Rf,{$isClosing:l,onClick:S,children:[(0,e.jsxs)(Ff,{$isDarkMode:c,$isClosing:l,onClick:M=>M.stopPropagation(),children:[(0,e.jsxs)(Lf,{$isDarkMode:c,children:[(0,e.jsx)(_l,{onClick:S,children:"Зрозуміло!"}),(0,e.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:c?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,e.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:c?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"}),(0,e.jsxs)(Ef,{children:[(0,e.jsx)(es,{$active:F==="faq",onClick:()=>L("faq"),style:{borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px",borderRight:"1px solid rgba(0, 0, 0, 0.1)"},children:"Питання (FAQ)"}),(0,e.jsx)(es,{$active:F==="ai",style:{borderBottomRightRadius:"20px",borderTopRightRadius:"20px"},children:"ШІ Асистент"})]})]}),(0,e.jsx)($f,{children:F==="faq"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Xf,{type:"search",placeholder:"Пошук питань...","aria-label":"Пошук питань",value:j,onChange:M=>A(M.target.value)}),(0,e.jsxs)(Pf,{style:{marginTop:0},children:[Q.length===0&&(0,e.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),Q.map((M,O)=>{const ae=M.originalIndex,ge=g[ae]||0;return(0,e.jsx)(Nf,{$index:O+1,children:(0,e.jsx)(Of,{$isDarkMode:c,$rating:ge,onClick:()=>x(M),children:(0,e.jsxs)(Vf,{children:[(0,e.jsx)(Bf,{children:M.q}),(0,e.jsxs)(Hf,{children:[(0,e.jsx)(Mi,{content:"Корисно",isDarkMode:c,children:(0,e.jsx)(as,{onClick:ce=>{ce.stopPropagation(),H(ae,z)},"aria-label":"Корисно",children:ge===z?(0,e.jsx)(Do,{style:{color:"blue"}}):(0,e.jsx)(Do,{})})}),(0,e.jsx)(Mi,{content:"Не корисно",isDarkMode:c,children:(0,e.jsx)(as,{onClick:ce=>{ce.stopPropagation(),H(ae,y)},"aria-label":"Не корисно",children:ge===y?(0,e.jsx)(Io,{}):(0,e.jsx)(Io,{})})})]})]})})},ae)})]})]})})]}),f&&(0,e.jsx)(Wf,{onClick:()=>x(null),children:(0,e.jsxs)(qf,{$backgroundImage:f.image,onClick:M=>M.stopPropagation(),children:[(0,e.jsx)(ts,{onClick:()=>x(null),children:"×"}),(0,e.jsx)(Jf,{children:f.q}),(0,e.jsx)(Gf,{children:fe(f)}),f.image&&(0,e.jsxs)(_f,{children:[(0,e.jsx)(rs,{onClick:()=>k(f.image),children:"Скачати"}),(0,e.jsx)(rs,{onClick:()=>K(f.image),children:"Друкувати"})]})]})}),h&&(0,e.jsxs)(Yf,{onClick:()=>w(null),children:[(0,e.jsx)(ts,{onClick:()=>w(null),children:"×"}),(0,e.jsxs)(Uf,{children:[(0,e.jsx)(ns,{onClick:M=>{M.stopPropagation(),k(h)},children:"Скачати"}),(0,e.jsx)(ns,{onClick:M=>{M.stopPropagation(),K(h)},children:"Друкувати"})]}),(0,e.jsx)(Zf,{src:h,alt:"Прев'ю зображення",onClick:M=>M.stopPropagation()})]})]})},Qf=[/війн(?:а|и|ою|і|нах)/iu,/бойов(?:і|их|им|ий|а|ої)/iu,/конфлікт(?:у|и|ів|ом)?/iu,/(?<!\p{L})фронт(?:у|і|ом)?(?!\p{L})/iu,/атак(?:а|и|у|ою|ам|ах|увал.*)/iu,/обстріл(?:у|и|ів|ом|ами)?/iu,/безпілотник(?:и|ів|ами|ом)?|дрон(?:и|ів|ами)?|(?<!\p{L})бпла(?!\p{L})/iu,/загибл(?:ий|их|і|им|ними)/iu,/поранен(?:ий|их|і|им|ними)/iu,/руйнуванн(?:я|ь|ям)/iu,/військов(?:ий|і|их|им|ними|е|а|ого)/iu,/армі(?:я|ї|ю|єю)/iu,/окупант(?:и|ів|ами)?|агресор(?:и|ів)?/iu,/ракет(?:а|и|ний|них|ами)/iu,/збройн(?:і|их)\s+сил(?:и|)/iu,/(?<!\p{L})(?:тцк|зсу|сбу|дбр|єрдр)(?!\p{L})/iu,/(?<!\p{L})рф(?!\p{L})|росі(?:я|ї|єю|йськ.*)/iu,/політик(?:а|и|ою|і|ів)/iu,/корупці(?:я|ї|ю|єю)/iu,/депутат(?:и|ів|ом|а)?|президент(?:и|ів|а)?/iu,/(?<!\p{L})(?:трамп(?:а|у)?|путін(?:а|у)?|байден(?:а|у)?|зеленськ(?:ий|ого|ому|им))(?!\p{L})/iu,/(?<!\p{L})мит(?:о|а|ам|ами|ах)(?!\p{L})/iu,/уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\p{L})влад(?:а|и|ою)(?!\p{L})/iu,/санкці(?:ї|й|ям|ями)/iu,/домовленість|переговор(?:и|ів|ами)/iu,/кримінал(?:у|ом)?/iu,/поліці(?:я|ї|ю|єю)/iu,/(?<!\p{L})суд(?:у|ом|ів)?(?!\p{L})/iu,/затриман(?:о|ий|і|а)/iu,/вбивств(?:о|а|ом|ах)/iu,/крадіжк(?:а|и|ою|ах)/iu,/вирок(?:у|и|ів|ами|ах)?/iu,/в'?язниц(?:я|і|ю|ею|ях)/iu,/арешт(?:у|и|ів|ами|ах)?/iu,/теракт(?:и|ів|ами|ах|у)?/iu,/вибух(?:и|ів|ами|ах|у)?/iu,/злочин(?:у|и|ів|ом)?/iu,/напад(?:у|і|ом)?|нападник(?:а|и|ів)?/iu,/побої|мордуванн(?:я|ь|ям)/iu,/душивши?|заламав/iu,/порно(?:графі|г| розроб| фільм.*)?/iu,/porno|pornography|\bporn\b|hentai|хентай|nsfw/iu,/еротик(?:а|и|ою|і|чн.*)?|erotic|erotica/iu,/секс(?:у|ом|уальн.*)?(?!\p{L})/iu,/\bsex(?:y|ual)?\b/iu,/onlyfans|онліфанс|онлифанс|only-?fans/iu,/webcam|вебкамер.*|вебка/iu,/(?<!\d)18\+(?!\d)|18plus|adult\s+content/iu,/оголен(?:а|і|ий|о|их|ення)|роздягнен(?:а|і|ий|о)/iu,/без\s+одягу|нагот(?:а|і)|нюдс|nudes?|\bnaked\b/iu,/інтим(?:ний|ні|них|ного|у|ом)?|intimat(?:e|y)/iu,/стриптиз|топлес|topless/iu,/оргі(?:я|ї|ю|ями|й)|оргазм(?:и|ів)?/iu,/пікантн(?:і|ий|ого|е)\s+(?:фото|відео|кадри|знімки|подробиці)/iu,/гаряч(?:і|е)\s+(?:фото|відео|кадри|бікіні)/iu,/без\s+білизни|прозорому\s+вбранні|у\s+бікіні|у\s+купальнику/iu,/(?:онлайн\s*)?казино|casino/iu,/рулетк(?:а|и|у|ою|ці|ок)/iu,/слот(?:и|ів|ами|ах|ам)?|slots?/iu,/покер(?:у|ом|ний|ного)?|poker/iu,/азарт(?:у|ний|ні|них|ою|ість)?/iu,/гральн(?:ий|ого|і|их|им|ними)\s+(?:бізнес|автомат|заклад|сектор)/iu,/ігров(?:і|их|им|ними)\s+автомат/iu,/однорук(?:ий|і)\s+бандит/iu,/(?<!\p{L})(?:краіл|кріаіл)(?!\p{L})/iu,/лотере(?:я|ї|ю|єю|йний|йного|йних)/iu,/джекпот(?:и|ів|ом)?|jackpot/iu,/виграш(?:і|ів|ам)?\s+(?:в|у)\s+(?:казино|слотах|лотерею)/iu,/букмекер(?:и|ів|ського|ських|ська|ський)?/iu,/спортбетт?інг|sports?\s*betting|betting/iu,/gambl(?:e|ing|er)?/iu,/prediction\s+markets?/iu,/ставк(?:а|и|у|ами|ах)\s+(?:онлайн|на|в|у|через)/iu,/зроби(?:ти|в|ла)\s+ставку/iu,/(?<!\p{L})бк\s+(?:букмекер|ставок|казино)(?!\p{L})/iu,/фріспін(?:и|ів)?|freespins?|бездеп(?:озит.*)?/iu,/бонус\s+за\s+реєстрацію|промокод\s+(?:казино|ставок)/iu,/халяв(?:а|и|у|ою)/iu,/favbet|фавбет|favorit|фаворит/iu,/vbet|вбет/iu,/cosmolot|космолот/iu,/slots\s*city|слотс\s*сіт(?:і|и)/iu,/supergra|супер\s*гра|супергра/iu,/first\s*casino|ферст|фірст/iu,/casino\s*ua|казино\s*юа/iu,/champion\s*(?:casino)?|чемпіон\s*(?:казино)?/iu,/ggbet|ггбет/iu,/slotoking|слотокінг|слотокинг/iu,/pin-?up|пінап|пін\s*ап/iu,/slotor|слотор/iu,/777\s*casino|казино\s*777/iu,/parimatch|париматч|паріматч/iu,/1xbet|1хбэт|1хбет|1xslots/iu,/mostbet|мостбет/iu,/vulkan|vulcan|вулкан/iu,/joycasino|джойказино/iu,/casino-x|казино\s*ікс|казино\s*икс/iu,/vavada|вавада/iu,/melbet|мелбет/iu,/betwinner|бетвіннер|бетвиннер/iu,/megapari|мегапарі|мегапари/iu,/catcasino|catbet|кетказино|кетбет/iu,/john\s*bet|джон\s*біт/iu,/ice\s*casino|verde\s*casino|hitnspin/iu,/fonbet|фонбет|marathonbet|марафонбет/iu,/bet365|бет365/iu,/unibet|унібет|унибет/iu,/william\s*hill|вільям\s*хілл/iu,/888\s*(?:casino|poker)?/iu,/pokerstars|покерстарс/iu,/betfair|бетфеір|бетфеар/iu,/bwin|бвін/iu,/stake\s*(?:casino)?|bc\.game|roobet|rollbit/iu,/крипто(?:валюта|валют|гроші|валютні)?|крипт(?:а|і)/iu,/crypto(?:currency)?|bitcoin|\bbtc\b|ethereum|\beth\b|\busdt\b|binance/iu,/аірдроп|airdrop|тапалк(?:а|и)|hamster\s*kombat|хом['’`ʼ]?як/iu,/gallup/iu,/релігі(?:я|ї|ю|єю|йн.*)/iu,/(?<!\p{L})(?:пцу|упц|умп)(?!\p{L})/iu,/церкв(?:а|и|і|ою|ами|ах)|храм(?:и|ів|ом|ах)?|собор(?:и|ів)?/iu,/патріарх|митрополит|священник|папа\s+римськ.*|ватикан/iu,/парафія|єпархія|лавра/iu,/(?<!\p{L})сект(?:а|и|ою|ам|ами|ах)(?!\p{L})|саєнтолог.*|свідки\s+єгови/iu,/(?<!\p{L})культ(?:и|ів|у|ом)?(?!\p{L})/iu,/масон(?:и|ів|ами|ах)?/iu,/жертвопринес.*|жертвопринош.*/iu,/гороскоп(?:и|ів)?|астролог(?:ічна|ічний|ія|и)?/iu,/мольфар(?:и|ів|ами)?|екстрасенс(?:и|ів)?|ворожк(?:а|и|ам)/iu,/карт(?:и|ах)\s+таро|(?<!\p{L})гаданн(?:я|ь)(?!\p{L})|нумеролог/iu,/пророцтв(?:о|а|ення)|передбаченн(?:я|ь)\s+(?:мольфара|астролога|ванг)/iu,/порч(?:а|і)|сглаз|приворо/iu,/(?<!\p{L})(?:набу|сап|бэб)(?!\p{L})/iu,/обшук(?:и|ів|ами|ах)?/iu,/детектив(?:и|ів|ам|ами)?/iu,/слідч(?:і|их|им|ий)\s+дії/iu,/слуг(?:а|и)\s+народу/iu,/фракці(?:я|ї|ю|єю)/iu,/міністр(?:и|ів|ам|ами|а)?/iu,/голосувати|голосуванн(?:я|ь)/iu,/підпал(?:и|ів|ам|ами)?/iu,/вербувати|завербува.*/iu,/аварі(?:я|ї|ю|єю)/iu,/(?<!\p{L})(?:дзп|дтп)(?!\p{L})/iu,/врізавс(?:я|ь)|зіткненн(?:я|ь)/iu,/травмован(?:і|их|ий|о)/iu,/постраждал(?:і|их|и)/iu,/вибор(?:и|ів|ам|ах|чий|чої)/iu,/опозиці(?:я|ї|ю|єю)/iu,/кампані(?:я|ї|ю)/iu,/партій(?:ний|них|ні|я|ї)/iu,/незаконн(?:ий|ого|е)\s+переправленн(?:я|ь)/iu,/схем(?:а|и|ам|ами)\s+(?:виїзду|втечі|переправлення)/iu,/хабар(?:і|ів|ник.*)|хабарництво/iu,/шахрайств(?:о|а|і)|шахраї/iu,/зґвалтува.*|ґвалтівник(?:а|и)?|педофіл/iu,/скандал(?:и|ів)?|розслідуванн(?:я|ь)/iu,/(?<!\p{L})(?:ніцой|ларис(?:а|и|і|у)?\s+ніцой)(?!\p{L})/iu,/(?<!\p{L})(?:євген(?:а|у)?\s+хмар(?:а|и|і|ою)?|хмар(?:а|и)?\s+євген(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:гордон(?:а|у|ом)?|дмитро\s+гордон)(?!\p{L})/iu,/(?<!\p{L})спартак(?:\s+суббот?а|\s+суббот?и)?(?!\p{L})/iu,/(?<!\p{L})(?:алх[іi]м(?:а|у)?|анн(?:а|и)\s+алх[іi]м)(?!\p{L})/iu,/(?<!\p{L})(?:дурнєв(?:а|у)?|кондратюк(?:а|у)?|волошин(?:а|у)?|пренткович)(?!\p{L})/iu,/(?<!\p{L})(?:янін(?:а|и)\s+соколов(?:а|и)|сергі(?:й|я)\s+притул(?:а|и)|олег\s+скрипк(?:а|и))(?!\p{L})/iu,/(?<!\p{L})(?:єрмак(?:а|у)?|татаров(?:а|у)?|залужн(?:ий|ого|ому)|сирськ(?:ий|ого|ому)|буданов(?:а|у)?|резніков(?:а|у)?|безугл(?:а|у|ої)|арахамі(?:я|ї)|гетьманцев(?:а|у)?)(?!\p{L})/iu,/василь\s+малюк/iu,/(?<!\p{L})(?:кадиров(?:а|у)?|пригожин(?:а|у)?|герасимов(?:а|у)?|мішустін(?:а|у)?|соловйов(?:а|у)?|скабєєв(?:а|і|у)|сімоньян|дугін(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:ппо|гур|ова|кмва)(?!\p{L})/iu,/(?<!\p{L})(?:каб(?:и|ів|ами)?|фаб(?:и|ів)?)(?!\p{L})|шахед(?:и|ів|ами)?|геран(?:ь|і)/iu,/повітрян(?:а|і)\s+тривог(?:а|и)|укритт(?:я|ях)|бомбосховищ(?:е|ах)|приліт(?:и|ів)?|контрнаступ/iu,/блек\s*аут|відключенн(?:я|ь)\s+(?:світла|електроенергії)|графік(?:и|ів)\s+відключень/iu,/інфляці(?:я|ї)|дефолт|подорожчанн(?:я|ь)|податк(?:и|ів)|борг(?:и|ів)|дефіцит\s+бюджету/iu,/банкрутств(?:о|а)/iu,/(?<!\p{L})(?:шольц(?:а|у)?|пісторіус(?:а|у)?|фіцо|мелоні|блінкен(?:а|у)?|столтенберг(?:а|у)?|рютте|гросс(?:і|і))(?!\p{L})/iu,/фаріон/iu,/(?<!\p{L})(?:порошенк|ющенк|кучм|кравчук|янукович|шмигал|гройсман|яценюк|тимошенк|кличк|садов|труханов)(?:о|а|у|ом|ові|ий|ого)?(?!\p{L})/iu,/ліндсі\s+ґ?рем|(?<!\p{L})ґ?рем(?!\p{L})/iu,/джей\s*ді\s*венс|(?<!\p{L})венс(?!\p{L})/iu,/(?<!\p{L})(?:байден|обам|буш|стармер|сунак|джонсон|макрон)(?:а|у|ом|и)?(?!\p{L})/iu,/(?<!\p{L})каллас(?!\p{L})/iu,/урсул(?:а|и|у)|фон\s+дер\s+ляєн/iu,/лукашенк(?:о|а|у|ом)/iu,/(?<!\p{L})дуд(?:а|и|і|ою)(?!\p{L})/iu,/(?<!\p{L})(?:туск|коморовськ|качинськ)(?:а|у|ом|ий|ого|им)?(?!\p{L})/iu,/(?<!\p{L})санд(?:у|и|а)(?!\p{L})/iu,/(?<!\p{L})(?:орбан|федоров|лавров|захаров|шойгу|медведєв|пєсков)(?:а|у|ом|и)?(?!\p{L})/iu,/хаменеї|пезешкіан|раїсі/iu,/сі\s*цзіньпін/iu,/кім\s*чен\s*ин/iu,/свастик(?:а|и|у|ою)/iu,/нацизмін?|нацист(?:и|ів|ський|ська)?/iu,/фашизмін?|фашист(?:и|ів|ський|ська)?/iu,/рашизмін?|рашист(?:и|ів|ський|ська)?/iu,/комунізмін?|комуніст(?:и|ів|ський|ська)?/iu,/ґ?геббельс(?:а|у|ом)?/iu,/ґ?гіммлер(?:а|у|ом)?/iu,/ґ?герінг(?:а|у|ом)?/iu,/ґ?гесс(?:а|у|ом)?/iu,/борман(?:а|у|ом)?/iu,/ейхман(?:а|у|ом)?|айхман(?:а|у|ом)?/iu,/ріббентроп(?:а|у|ом)?/iu,/менгеле/iu,/розенберг(?:а|у|ом)?/iu,/кальтенбруннер(?:а|у|ом)?/iu,/коновалець|коновальц(?:я|ю|ем)/iu,/бандер(?:а|и|і|у|ою|івськ.*)/iu,/шухевич(?:а|у|ем)?/iu,/андрі(?:й|я)\s+мельник/iu,/сталін(?:а|у|ом)?/iu,/ленін(?:а|у|ом)?/iu,/берій?(?:я|ї|ю|єю)/iu,/молотов(?:а|у|ом)?/iu,/гітлер(?:а|у|ом)?/iu,/(?<!\p{L})хер(?:а|у|ом|и)?(?!\p{L})/iu,/хуй|хюй|х\*+|залуп(?:а|и|у|ою)|мудак(?:и|а|ів)?/iu,/пизд|пізд|піпєц|пипец/iu,/(?:ви|за|на|під|по|пере|з)?єб(?:ати|ать|ало|аний|ані|уть|учий|ут|анутий)/iu,/(?:ви|за|на|під|по|пере|з)?еб(?:ать|ало|анный|анные|учий|учи)|йоб(?:аний|ані|ний|них)/iu,/бляд(?:ь|і|я|ям|ство)|блять|(?<!\p{L})бля(?!\p{L})/iu,/(?<!\p{L})сук(?:а|и|ою|ам|ами)(?!\p{L})/iu,/гондон(?:и|ів)?|гандон(?:и|ів)?|курв(?:а|и|ою)/iu,/срак(?:а|и|у|ою|ах)|жоп(?:а|и|у|ою|ах)/iu,/(?<!\p{L})гівн(?:о|а|ом)|говно|лайно/iu,/сцяв|засцян.*|сцяк/iu,/х[*#@$]+й|х[*#@$]+р/iu,/п[*#@$]+зд[аяiі]/iu,/б[*#@$]+т[ьi]|б[*#@$]+д[ьi]/iu,/є[*#@$]+б|е[*#@$]+б/iu,/(?<!\p{L})(?:арестович(?:а|у)?|шарі(?:й|я|ю)|тищенк(?:о|а|у)|дубінськ(?:ий|ого)|кив(?:а|и|у)|бойк(?:о|а|у)|мураєв(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:коломойськ(?:ий|ого)|ахметов(?:а|у)?|пінчук(?:а|у)?|фірташ(?:а|у)?)(?!\p{L})/iu,/(?<!\p{L})(?:маск(?:а|у)?|ілон\s*маск|ердоган(?:а|у)?|нетаньягу)(?!\p{L})/iu,/(?<!\p{L})(?:алл(?:а|и|і|у)?\s+мазур|мосейчук|натал(?:ія|і|ією|ію)?\s+мосейчук)(?!\p{L})/iu,/(?<!\p{L})(?:квартал\s*95|95\s*квартал|95-?й?\s*квартал|студі(?:я|ї|ю)\s+квартал)(?!\p{L})/iu,/(?<!\p{L})дизель\s*шоу(?!\p{L})/iu,/(?<!\p{L})(?:драпат(?:ий|ого|ому|им|і))(?!\p{L})/iu,/мобілізаці(?:я|ї|ю|єю)|мобілізува.*/iu,/призов(?:у|на|ний|ників)?|повісток|повістк(?:а|и|у|ами)/iu,/(?<!\p{L})(?:генштаб(?:у|ом)?|гш\s+зсу)(?!\p{L})/iu,/главком(?:а|у)?|командувач(?:а|і|ів)?/iu,/катуванн(?:я|ь|ям)|катува.*/iu,/побит(?:тя|тєм|ті)/iu,/зодіак(?:у|а|и)/iu],eg={a:"а",c:"с",e:"е",i:"і",o:"о",p:"р",x:"х",y:"у",k:"к",z:"з",n:"н"},tg=/[\u00AD\u200B-\u200D\u2060\uFEFF]/g,ag=/[\p{L}\p{M}]+/gu,ng=/[a-z]/i,rg=/[а-яіїєґ]/iu,ig=/(?<=\p{L})[^\p{L}\s\n\r]{0,3}(?=\p{L})|(?<=\p{L})[\s\n\r]+(?=\p{L})/gu,og=/[04513@$]/g,sg={0:"о",4:"а",5:"с",1:"і",3:"е","@":"а",$:"с"},is=new RegExp(Qf.map(({source:t})=>`(?:${t})`).join("|"),"iu"),Zl=t=>t?t.normalize("NFKC").replace(tg,"").toLowerCase().replace(ag,a=>!ng.test(a)||!rg.test(a)?a:a.replace(/[aceiopxykzn]/g,r=>eg[r])):"",lg=t=>Zl(t).replace(og,a=>sg[a]).replace(ig,""),os=t=>is.test(t)||is.test(t.replace(/і/g,"и")),dg=t=>{if(!t)return!1;const a=Zl(t);return os(a)||os(lg(t))},cg=Ps({Tooltip:()=>ug,default:()=>Xl}),pg=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,ug=({content:t,children:a,placement:r="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,n.useState)(!1),m=(0,n.useRef)(null),{refs:f,floatingStyles:x,context:g}=Rn({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:An,middleware:[zn(8),Fn(),In({padding:5}),Tn({element:m})]}),{isMounted:N,styles:j}=Cn(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),A=Sn(g,{move:!1}),F=$n(g),L=jn(g),z=En(g,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:h}=Dn([A,F,L,z]);if(!t)return a;const w=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...y(),style:{display:"inline-flex"},children:a}),N&&(0,e.jsx)(Mn,{children:(0,e.jsxs)(pg,{ref:f.setFloating,$isDarkMode:c,style:{...x,...j},...h(),children:[t,(0,e.jsx)(Ln,{ref:m,context:g,fill:w,stroke:"#00acb9",strokeWidth:1})]})})]})},fg=le`
  from { opacity: 0; }
  to { opacity: 1; }
`,gg=i.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`,wr=[{url:"https://phys.org/rss-feed/biology-news/animals-news/",name:"Phys.org",home:"https://phys.org"},{url:"https://www.sciencedaily.com/rss/top/environment.xml",name:"ScienceDaily",home:"https://www.sciencedaily.com"},{url:"https://www.nature.com/nature.rss",name:"Nature",home:"https://www.nature.com"}],xg=le`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`,hg=le`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`,mg=i.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`,bg=i.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#010101"};
  width: 100%;
  box-sizing: border-box;
`,yg=i.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
`,wg=i.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2px;
  overflow-x: auto;
  min-width: 0; 
  scroll-snap-type: x mandatory;
  padding: 10px 22px 10px;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 479px) {
    justify-content: flex-start; 
  }
`,vg=i.div`
  position: absolute;
  top: 50%;
  left: 5px;
  right: 5px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: auto;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(-50%);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    justify-content: center;
    gap: 75%;
  }
      @media (max-width: 980px) {
    gap: 55%;
  }
      @media (max-width: 767px) {
    gap: 40%;
  }
 @media (max-width: 567px) {
    gap: 20%;
  }
     @media (max-width: 425px) {
    gap: 20%;
  }
`,ss=i.button`
  position: absolute;
  top: 50%;
  ${t=>t.$direction==="previous"?"left: 16px;":"right: 16px;"}
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 501;
  pointer-events: auto;
  
  border: 2px solid #ffaa00;
  border-radius: 6px;
  background: #000;
  color: #ffaa00;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 170, 0, 0.35);
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  /* Підключення анімації левітації */
  animation: ${xg} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${hg} 2.5s ease-in-out infinite;
  }

  /* 1. Задня грань */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 44px;
    height: 40px;
    border-top: 2px solid rgb(255, 170, 0);
    border-left: 2px solid rgb(255, 170, 0);
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 6px;
    z-index: -2;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  /* 2. З'єднувальні лінії */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 54px;
    height: 54px;
    z-index: -1;
    pointer-events: none;
    
    background: 
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 0 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 100% 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgb(255, 170, 0) 42%, rgb(255, 170, 0) 58%, transparent 58%) 0 100% / 14px 14px no-repeat;
    transition: all 0.2s ease;
  }

  &:hover {
    background: #000;
    animation-play-state: paused;
    box-shadow: 0 0 18px rgba(255, 170, 0, 0.99);
    
    &::before {
      border-color: rgba(255, 170, 0, 0.95);
      top: -12px;
      left: -12px;
    }

    &::after {
      top: -12px;
      left: -12px;
      width: 56px;
      height: 56px;
      background-size: 16px 16px;
    }

    & > * { 
      animation-duration: 1.2s;
    }
  }

  &:active {
    transform: translateY(calc(-50% + 2px)) scale(0.96);
  }
`,kg=i.div`
  flex: 0 0 280px;
  width: 280px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  opacity: ${t=>t.$distanceFromCenter===0?1:t.$distanceFromCenter===1?.9:.82};
  transform: scale(${t=>t.$distanceFromCenter===0?1:t.$distanceFromCenter===1?.94:.9});
  transform-origin: center center;
  transition: transform 0.25s ease, opacity 0.25s ease;

  @media (max-width: 479px) {flex: 0 0 calc(100vw - 48px);
    width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    max-width: 320px;
  }

  @media (min-width: 480px) and (max-width: 899px) {
    flex: 0 0 calc(50% - 5px);
    width: calc(50% - 5px);
    min-width: calc(50% - 5px);
  }

  @media (min-width: 900px) {
    flex: 0 0 calc(28% - 4px);
    width: calc(28% - 4px);
    min-width: calc(28% - 4px);
  }
`,Jr=i.a`
  background: #1a1a1a;
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  height: auto;
  min-height: auto;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`,jg=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;
`,Sg=i.span`
  position: absolute;
  top: 4px;
  left: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  width: 110px;
  border-radius: 5px;
  font-size: 14px;
  z-index: 5;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #ffb36c;
  }
  backdrop-filter: blur(4px);
`,Cg=i.span`
  position: absolute;
  top: 83%;
  right: 4px;
  background: #ddff00;
  color: #000;
  width: 80px;
  height: 69px;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 23px;
  font-weight: 900;
  z-index: 6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${fg} 0.5s ease;
`,Tg=i.div`
  position: absolute;
  top: 3px;
  left: 83%;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 7;
`,Ag=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 25px;
  min-width: 25px;
  height: 28px;
  overflow: hidden;
  background: ${t=>t.$background};
  color: ${t=>t.$color||"white"};
  border: none;
  padding: 2px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  transition: width 0.5s ease, background 0.5s ease, transform 0.5s ease;

  svg {
    flex: 0 0 auto;
    font-size: 17px;
  }

  span {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-width 0.5s ease, opacity 0.5s ease;
  }

  &:hover,
  &:focus-visible {
    width: auto;
    transform: scale(1.05);

    span {
      max-width: 100px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`,Ig=i(Ag)`
  background: rgb(8, 8, 8);
  color: #ffffff;
  width: 50px;
  height: 40px;
  &:hover,
  &:focus-visible {
    background: rgb(27, 27, 27);
      width: 50px;
  height: 40px;
  }
`,Mg=i.div`
  position: absolute;
  top: 39px;
  left: -439%;
  background: rgba(30, 30, 30, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 450%;
  height: 145px;
  z-index: 20;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
`,Hn=i.button`
  display: inline-flex;
  align-items: center;
  gap: 13px;
  padding: 3px;
  background: transparent;
  color: ${t=>t.$color||"#fff"};
  font-size: 13px;
  text-align: left;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.15s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  &[disabled] {
    opacity: 0.45;
    cursor: default;
    &:hover {
      background: transparent;
    }
  }
`,ls=i.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: white;
`,Dg=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`,zg=i.div`
  background: #060606;
  color: #fefcfc;
  padding: 5px;
  border-radius: 7px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #ffb36c;
  position: relative;
`,Rg=i(Rt.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  z-index: 100000;
  padding: 5px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`,Fg=i.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  overflow-y: auto;
  padding-right: 8px;
`,Lg=i.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$g=i.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  font-weight: 700;
  color: #ffaa00;
  border-bottom: 1px solid rgba(255, 170, 0, 0.3);
  padding-bottom: 6px;
`,Eg=i.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 10px 4px 16px;
  scrollbar-width: thin;
  scrollbar-color: #ffaa00 #1a1a1a;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffaa00;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  & > div {
    flex: 0 0 280px;
    width: 280px;
  }
`,ds=i.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`,Pg=new Set(wr.map(t=>t.name)),cs=({item:t,$isDarkMode:a,showImage:r,showTitle:c,showDescription:l,onAiSummaryClick:d,onReportClick:m,onMuteClick:f,onUnmuteClick:x})=>{const g=(0,n.useRef)(null),[N,j]=(0,n.useState)(t.isNew),[A,F]=(0,n.useState)(!1),[L,z]=(0,n.useState)(!1),[y,h]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async()=>{const k=await u.default.getItem("gemini_api_key");F(!!k)})();const S=k=>F(!!k.detail);return window.addEventListener("geminiKeyChanged",S),()=>window.removeEventListener("geminiKeyChanged",S)},[]),(0,n.useEffect)(()=>{if(!r)return;const w=new IntersectionObserver(([S])=>{S.isIntersecting&&(w.disconnect(),t.displayImage&&t.displayImage!=="data:image/webp;base64,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"?h(t.displayImage):h(Kg(t.link||t.title||"")))},{rootMargin:"300px",threshold:0});return g.current&&w.observe(g.current),()=>w.disconnect()},[t.displayImage,t.link,r]),(0,n.useEffect)(()=>{if(!t.isNew)return;const w=new IntersectionObserver(([S])=>{if(S.isIntersecting){const k=setTimeout(async()=>{j(!1);try{const K=await u.default.getItem("seen_news_links")||[];K.includes(t.link)||await u.default.setItem("seen_news_links",[...K,t.link])}catch{}},6e4);return w.unobserve(S.target),()=>clearTimeout(k)}},{threshold:.5});return g.current&&w.observe(g.current),()=>w.disconnect()},[t.isNew,t.link]),t.isBlocked?(0,e.jsx)(Jr,{$isDarkMode:a,style:{cursor:"not-allowed",position:"relative"},as:"div",children:(0,e.jsxs)(ls,{children:[(0,e.jsx)("span",{style:{fontSize:"40px",marginBottom:"10px"},children:"🔒"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4"},children:"Дана новина була неправомірна, і ви не можете її переглянути."})]})}):t.isMuted?(0,e.jsx)(Jr,{$isDarkMode:a,style:{position:"relative",minHeight:"190px"},as:"div",children:(0,e.jsxs)(ls,{style:{background:"rgba(128, 128, 128, 0.5)"},children:[(0,e.jsx)("span",{style:{fontSize:"30px",marginBottom:"10px",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"🔇"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"Новину приховано."}),(0,e.jsx)("button",{onClick:w=>{w.preventDefault(),w.stopPropagation(),x&&x(t)},style:{marginTop:"10px",padding:"5px 15px",background:"#3f5959",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"Розглушити"})]})}):(0,e.jsx)(Jr,{ref:g,href:t.link,target:"_blank",rel:"noopener noreferrer",$isDarkMode:a,children:(0,e.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:r?"190px":"auto",minHeight:"auto"},children:[N&&(0,e.jsx)(Cg,{children:"Нове"}),(0,e.jsx)(Sg,{onClick:w=>{w.preventDefault(),w.stopPropagation(),window.open(t.sourceHome,"_blank")},"aria-label":`Перейти на головну сторінку ${t.sourceName}`,children:t.sourceName}),(0,e.jsxs)(Tg,{"aria-label":"Дії з новиною",children:[(0,e.jsx)(Ig,{"aria-label":"Налаштування картки новини",title:"Налаштування",onClick:w=>{w.preventDefault(),w.stopPropagation(),z(S=>!S)},children:(0,e.jsx)(Vs,{"aria-hidden":"true",style:{fontSize:"29px"}})}),L&&(0,e.jsxs)(Mg,{onClick:w=>{w.preventDefault(),w.stopPropagation()},children:[(0,e.jsxs)(Hn,{$color:A?"#ff69b4":"#888",disabled:!A,title:A?"Прикріпити до ШІ-чату":"Додайте Gemini API-ключ",onClick:()=>{if(!A)return;const w=(t.description||t.title).replace(/<[^>]*>?/gm,"").trim();window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`news-${t.link}`,type:"news",title:t.title,details:`Джерело: ${t.sourceName}. Заголовок: "${t.title}". Зміст: "${w}". Посилання: ${t.link}`}})),z(!1)},children:[(0,e.jsx)(Os,{style:{fontSize:"57px"}})," Прикріпити до ШІ"]}),(0,e.jsxs)(Hn,{onClick:()=>{d&&d(t),z(!1)},children:[(0,e.jsx)(kd,{size:34})," ШІ Виклад"]}),(0,e.jsxs)(Hn,{onClick:()=>{navigator.clipboard.writeText(t.link).then(()=>{fn.success("Посилання скопійовано!")}),z(!1)},children:[(0,e.jsx)(Uc,{size:34})," Копіювати шлях"]}),!Pg.has(t.sourceName)&&(0,e.jsxs)(Hn,{$color:"#ff6b6b",onClick:w=>{m&&m(t,w),z(!1)},children:[(0,e.jsx)(zd,{size:34})," Подати скаргу"]}),(0,e.jsxs)(Hn,{$color:"#aaa",onClick:w=>{w.preventDefault(),w.stopPropagation(),f&&f(t,w),z(!1)},children:[(0,e.jsx)(r0,{size:34})," Заглушити"]})]})]}),r&&(0,e.jsx)(jg,{src:y||"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",alt:"",loading:"lazy",decoding:"async",onError:w=>{w.target.onerror=null,w.target.src="data:image/webp;base64,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"}}),(c||l)&&(0,e.jsxs)(Ng,{$isDarkMode:a,$overlay:r,children:[c&&(0,e.jsx)("h2",{style:{margin:"0 0 8px 0",fontSize:"16px",display:"-webkit-box",WebkitLineClamp:2,fontWeight:"700",WebkitBoxOrient:"vertical",overflow:"hidden",lineHeight:"1.3"},children:t.title}),l&&(0,e.jsx)("p",{style:{fontSize:"13px",opacity:.9,margin:0,lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.description})]})]})})},Ng=i.div`
  padding: 8px;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  min-height: auto;
  flex-grow: 0;

  ${t=>t.$overlay?`
    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0, 0, 0, 0.83) 80%, transparent 100%);
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    margin-top: auto;
  `:`
    color: ${t.$isDarkMode?"#ffffff":"#000000"};
  `}
`,ps=i.div`
  display: flex;
  justify-content: center;
  gap: 1px;
  margin-bottom: 3px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  width: 320px;
  box-sizing: border-box;
  @media (min-width: 468px) {
    width: 100%;
    }
`,qt=i.button`
  background: ${t=>t.$active?"#5a3f27":"rgb(26, 49, 56)"};
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: start;
  font-weight: 600;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:disabled {
    opacity: 0.5;
  }
`,Og=i.div`
  width: 300px;
  height: 8px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"};
  border: 1px solid
    ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.1)"};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`,Vg=i.div`
  height: 100%;
  background: ${t=>t.$isError?"#ff4d4d":"#ffb36c"};
  width: ${t=>t.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${t=>t.$isError?"rgba(255, 77, 77, 0.7)":"rgba(255, 179, 108, 0.5)"};
`,Bg=i.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`,us=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},Di=t=>{if(!t)return"rss";const a=t.toLowerCase();return a.includes("youtube.com")||a.includes("youtu.be")?"youtube":a.includes("t.me/")||a.includes("telegram.org")||a.startsWith("@")?"telegram":a.includes("telegra.ph/")?"telegraph":a.includes("facebook.com")?"facebook":a.includes("withhive.com")?"hive":"rss"},Hg=t=>{if(!t)return null;const a=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return a&&a[2].length===11?`https://i.ytimg.com/vi/${a[2]}/hqdefault.jpg`:null},fs=t=>{if(t.enclosure?.link&&t.enclosure.link.match(/\.(jpe?g|png|webp|gif)/i))return t.enclosure.link;if(t.thumbnail&&t.thumbnail.startsWith("http"))return t.thumbnail;const a=(t.content||t.description||"").match(/<img[^>]+src=["']([^"']+)["']/i);return a&&a[1]&&a[1].startsWith("http")?a[1]:null},Gr=kn.filter(t=>/\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(t.src||"")).map(t=>t.src),Kg=t=>{if(!Gr.length)return Ni;let a=0;for(let r=0;r<t.length;r++)a=a*31+t.charCodeAt(r)&4294967295;return Gr[Math.abs(a)%Gr.length]},gn=async t=>{try{const a=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(t)}`);if(!a.ok)throw new Error("AllOrigins error status: "+a.status);const r=await a.json();if(!r.contents)throw new Error("AllOrigins returned empty contents");return r.contents}catch(a){console.warn("AllOrigins failed, trying corsproxy.io fallback...",a);const r=await fetch(`https://corsproxy.io/?${encodeURIComponent(t)}`);if(!r.ok)throw new Error("corsproxy.io error status: "+r.status);return await r.text()}},Ug=async t=>{const a=t.match(/(UC[a-zA-Z0-9_-]{22})/);if(a)return a[1];try{const r=await gn(t),c=r.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i)||r.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i)||r.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);return c?c[1]:null}catch(r){return console.error("Error resolving YouTube channel ID:",r),null}},gs=t=>{if(!t)return"";let a=t.replace(/<br\s*\/?>/gi,`
`);a=a.replace(/<[^>]*>?/gm,"");const r=document.createElement("textarea");return r.innerHTML=a,r.value.trim()},Wg=async t=>{let a="";const r=t.url;if(r.startsWith("@"))a=r.substring(1);else{const c=r.split("/");a=c[c.length-1]||c[c.length-2]}if(a.startsWith("+")||r.includes("joinchat"))try{const c=await gn(r),l=new DOMParser().parseFromString(c,"text/html"),d=l.querySelector(".tgme_page_title")?.textContent?.trim()||"Приватний Telegram",m=l.querySelector(".tgme_page_description")?.textContent?.trim()||"Приватний канал або група.",f=l.querySelector(".tgme_page_photo_image"),x=f?f.getAttribute("src"):"";return{status:"ok",items:[{title:d,description:`${m}

Надіслати контент / Приєднатися:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:x||"",displayImage:x||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}catch{return{status:"ok",items:[{title:"Приватний Telegram Канал",description:`Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:
${r}`,link:r,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Ni,sourceName:t.name,sourceFlag:"🔒",sourceHome:r,sourceUrl:r}]}}try{const c=`https://t.me/s/${a}`,l=await gn(c),d=new DOMParser().parseFromString(l,"text/html"),m=d.querySelector(".tgme_channel_info_header_title span")?.textContent||a,f=d.querySelector(".tgme_page_photo_image img")||d.querySelector(".tgme_page_photo_image"),x=f&&f.getAttribute("src")||"",g=`https://t.me/${a}`,N=d.querySelectorAll(".tgme_widget_message"),j=[];return N.forEach(A=>{const F=A.querySelector(".tgme_widget_message_text"),L=F?F.innerHTML:"",z=F?gs(L).substring(0,100):"Повідомлення",y=A.querySelector(".tgme_widget_message_date"),h=y?y.getAttribute("href"):g,w=A.querySelector("time"),S=w?w.getAttribute("datetime"):new Date().toISOString(),k=A.querySelector(".tgme_widget_message_photo_wrap");let K="";if(k){const H=k.getAttribute("style"),te=H&&H.match(/url\(['"]?([^'"]+)['"]?\)/);te&&(K=te[1])}j.push({title:z||"Новий допис",description:L?gs(L):"Перегляньте допис у Telegram.",link:h,pubDate:S,thumbnail:K||x||"",displayImage:K||x||"data:image/webp;base64,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",sourceName:m,sourceFlag:"📢",sourceHome:g,sourceUrl:r})}),{status:"ok",items:j.reverse()}}catch(c){return console.error("Telegram scraping failed:",c),null}},qg=async t=>{try{const a=await gn(t.url),r=new DOMParser().parseFromString(a,"text/html"),c=r.querySelector("header h1")?.textContent?.trim()||r.querySelector("title")?.textContent||"Telegraph стаття",l=r.querySelector("header address a")?.textContent||"Telegraph",d=r.querySelector("article img"),m=d?d.getAttribute("src"):"",f=m?m.startsWith("http")?m:`https://telegra.ph${m}`:"",x=Array.from(r.querySelectorAll("article p")).map(g=>g.textContent).join(`

`)||"Читати повну статтю на Telegraph.";return{status:"ok",items:[{title:c,description:x.substring(0,300)+(x.length>300?"...":""),link:t.url,pubDate:new Date().toISOString(),thumbnail:f||"",displayImage:f||"data:image/webp;base64,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",sourceName:l,sourceFlag:"📝",sourceHome:"https://telegra.ph",sourceUrl:t.url}]}}catch(a){return console.error("Telegraph load failed:",a),null}},Jg=async t=>{try{const a=await gn(t.url),r=new DOMParser().parseFromString(a,"text/html"),c=r.querySelector('meta[property="og:title"]')?.getAttribute("content")||t.name,l=r.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Переглянути сторінку у Facebook.",d=r.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:c,description:l,link:t.url,pubDate:new Date().toISOString(),thumbnail:d||"",displayImage:d||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}catch(a){return console.error("Facebook OG parsing failed, trying simple card:",a),{status:"ok",items:[{title:t.name,description:"Перегляньте оновлення сторінки у Facebook за цим посиланням.",link:t.url,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Ni,sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}},Gg=t=>{const a=t.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);return a?{gameCode:a[1],lang:a[2]||"en",boardIdx:a[3]}:null},_g=async t=>{const a=t.url;if(a.match(/board\/(\d+)\/(\d+)/))try{const m=await gn(a),f=new DOMParser().parseFromString(m,"text/html"),x=f.querySelector('meta[property="og:title"]')?.getAttribute("content")||f.querySelector(".title_wrap .title")?.textContent?.trim()||"Допис у Hive",g=f.querySelector('meta[property="og:description"]')?.getAttribute("content")||f.querySelector(".post_cont")?.textContent?.trim().substring(0,300)||"Деталі допису у спільноті Hive.",N=f.querySelector('meta[property="og:image"]')?.getAttribute("content")||f.querySelector(".post_cont img")?.getAttribute("src")||"";return{status:"ok",items:[{title:x,description:g.length>=300?g.substring(0,300)+"...":g,link:a,pubDate:new Date().toISOString(),thumbnail:N||"",displayImage:N||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:a.split("/board/")[0],sourceUrl:a}]}}catch(m){console.error("Failed to parse single Hive post:",m)}const r=Gg(a);if(!r)return null;const{gameCode:c,lang:l,boardIdx:d}=r;try{const m=`https://corsproxy.io/?https://community.withhive.com/${c}/board/list/getBoardList`,f=await(await fetch(m,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:new URLSearchParams({page:1,board_idx:d,board_type:1,board_comment:1,boardtype1_preview_image:"1",is_mobile:1,select_type:1,view_type:"list"})})).json();if(!f.list)throw new Error("No dynamic list found");const x=new DOMParser().parseFromString(f.list,"text/html").querySelectorAll("li"),g=[];return x.forEach(N=>{const j=N.querySelector("a");if(!j)return;const A=j.getAttribute("href")||"",F=A.startsWith("http")?A:`https://community.withhive.com${A}`,L=N.querySelector(".title, .subject, p, h3, h4"),z=L?L.textContent.trim():"Hive Post",y=N.querySelector("img");let h="";if(y)h=y.getAttribute("src")||y.getAttribute("data-src")||"";else{const H=N.querySelector(".thumb");if(H){const te=H.getAttribute("style"),ee=te&&te.match(/url\(['"]?([^'"]+)['"]?\)/);ee&&(h=ee[1])}}const w=N.querySelector(".t_date, .date, .time"),S=w?w.textContent.trim():new Date().toISOString(),k=N.querySelector(".desc, .text, .wordcut"),K=k?k.textContent.trim():"";g.push({title:z,description:K||"Перегляньте допис у спільноті Hive.",link:F,pubDate:S,thumbnail:h||"",displayImage:h||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:a})}),{status:"ok",items:g}}catch{console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");try{const f=await gn(a),x=new DOMParser().parseFromString(f,"text/html"),g=x.querySelector('meta[property="og:title"]')?.getAttribute("content")||x.querySelector(".board_cmm .title")?.textContent?.trim()||`Hive Board ${d}`,N=x.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Перегляньте дописи у спільноті Hive.",j=x.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:g,description:N,link:a,pubDate:new Date().toISOString(),thumbnail:j||"",displayImage:j||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:a}]}}catch{return null}}},Yg=async t=>{const a=Di(t.url);return a==="telegram"?await Wg(t):a==="telegraph"?await qg(t):a==="hive"?await _g(t):a==="facebook"?await Jg(t):null},Xl=({isDarkMode:t,isStickyBgMode:a,user:r})=>{const{registerRef:c}=Gn?.()||{registerRef:()=>{}},l=t,[d,m]=(0,n.useState)([]),[f,x]=(0,n.useState)(0),[g,N]=(0,n.useState)(!0),[j,A]=(0,n.useState)(0),[F,L]=(0,n.useState)(!1),[z,y]=(0,n.useState)(["all"]),h=v=>{if(v==="all"){y(["all"]);return}let E=[...z].filter(q=>q!=="all");E.includes(v)?E=E.filter(q=>q!==v):E.push(v),E.length===0&&(E=["all"]),y(E)},[w,S]=(0,n.useState)(null),[k,K]=(0,n.useState)(0),H=async v=>{if(!v||v.length<3)return v;try{const E=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(v)}`);return Je.current?(await E.json())[0].map(q=>q[0]).join(""):v}catch{return v}},[te,ee]=(0,n.useState)(!1),[fe,Q]=(0,n.useState)(null),[M,O]=(0,n.useState)(!1),[ae,ge]=(0,n.useState)(!1),[ce,Y]=(0,n.useState)([]),[_,me]=(0,n.useState)(""),[re,Te]=(0,n.useState)(!1),[,Ae]=(0,n.useState)([]),[ft,Ct]=(0,n.useState)([]),[Jt,gt]=(0,n.useState)(!1),[Be,qe]=(0,n.useState)([]),[Nt,Ot]=(0,n.useState)(!1),Je=(0,n.useRef)(!0),Tt=(0,n.useRef)(null);(0,n.useEffect)(()=>(Je.current=!0,(async()=>{try{const E=await u.default.getItem("custom_news_sources");E&&Y(E)}catch{}})(),()=>{Je.current=!1}),[]),(0,n.useEffect)(()=>{(async()=>{try{const E=await u.default.getItem("filtered_news_stats");E?.date===us()&&Array.isArray(E.links)&&Je.current&&x(E.links.length)}catch{}})()},[]),(0,n.useEffect)(()=>{(async()=>{if(r?.syncMutedNews&&r?.mutedNews)qe(r.mutedNews);else try{const E=await u.default.getItem("muted_news_urls")||[];qe(E)}catch{}})()},[r?.syncMutedNews,r?.mutedNews]),(0,n.useEffect)(()=>{if(r?.newsAutoScroll!==!0)return;const v=window.setTimeout(()=>{Tt.current?.scrollIntoView({behavior:"smooth",block:"start"})},300);return()=>window.clearTimeout(v)},[r?.newsAutoScroll]),(0,n.useEffect)(()=>{const v=()=>{ge(!0),setTimeout(()=>ge(!1),1500)},E=setTimeout(v,2e3),q=setInterval(v,7e3);return()=>{clearTimeout(E),clearInterval(q)}},[]);const At=(0,n.useCallback)(async(v=!1)=>{const E=new AbortController().signal;v&&Je.current&&(N(!0),A(5),L(!1));try{let q=[];const pe=await u.default.getItem("custom_news_sources")||[],He=[...wr,...pe];let Ge=[],he=[];try{const J=await ko(go(Ia,"news_reports")),oe=await ko(go(Ia,"rss_reports")),_e=Date.now(),Ne=864e5;J.forEach(xe=>{(xe.data().reports||[]).filter(Ye=>{const Ke=typeof Ye=="object"?Ye.timestamp:Ye;return _e-Ke<Ne}).length>=10&&Ge.push(xe.id)});const Oe=[];oe.forEach(xe=>{const Ye=xe.data();(Ye.reports||[]).filter(Ke=>{const Ht=typeof Ke=="object"?Ke.timestamp:Ke;return _e-Ht<Ne}).length>=20&&(Oe.push({id:xe.id,url:decodeURIComponent(xe.id),name:Ye.name||"Джерело"}),he.push(decodeURIComponent(xe.id)))}),Je.current&&(Ae(Ge),Ct(Oe))}catch{}for(const J of He)if(!he.includes(J.url))try{const oe=Di(J.url);if(oe!=="rss"&&oe!=="youtube"){const _e=await Yg(J);_e&&_e.items&&_e.items.length>0&&(q=[...q,..._e.items])}else{const _e=await(await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(J.url)}`,{signal:E})).json();if(_e.status==="ok"&&_e.items.length>0){const Ne=_e.items.map(Oe=>{const xe=Hg(Oe.link),Ye=fs(Oe);return{...Oe,thumbnail:xe||Ye||"",displayImage:xe||Ye||"data:image/webp;base64,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",sourceName:J.name,sourceFlag:J.flag,sourceHome:J.home,sourceUrl:J.url}});q=[...q,...Ne]}}}catch{continue}if(q.length===0){Je.current&&(L(!0),A(100),N(!1));return}v&&Je.current&&A(25),q.sort((J,oe)=>new Date(oe.pubDate)-new Date(J.pubDate));const ve=q.filter(J=>{const oe=J.title+" "+(J.description||"");return!dg(oe)}),Lt=q.filter(J=>!ve.includes(J)).map(J=>J.link||`${J.sourceUrl}:${J.title}`),mt=us(),be=await u.default.getItem("filtered_news_stats"),vt=be?.date===mt&&Array.isArray(be.links)?be.links:[],Pe=[...new Set([...vt,...Lt])];await u.default.setItem("filtered_news_stats",{date:mt,links:Pe}),Je.current&&x(Pe.length);const Bt=ve.slice(0,45),ke=new Array(Bt.length),$t=[],kt=[],It=await u.default.getItem("seen_news_links")||[];for(let J=0;J<Bt.length;J++){const oe=Bt[J],_e=`news_trans_${oe.link}`,Ne=await u.default.getItem(_e),Oe=!It.includes(oe.link);if(Ne)ke[J]={...Ne,displayImage:Ne.displayImage&&Ne.displayImage!=="data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA=="?Ne.displayImage:oe.displayImage||"data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA==",sourceName:oe.sourceName,sourceFlag:oe.sourceFlag,sourceHome:oe.sourceHome,sourceUrl:oe.sourceUrl,isNew:Oe,isBlocked:Ge.includes(encodeURIComponent(oe.link))};else{const xe=(oe.description||"").replace(/<[^>]*>?/gm,"").trim().substring(0,170);$t.push(J),kt.push(oe.title),kt.push(xe)}}if(kt.length>0){v&&Je.current&&A(40);let J=[],oe=[],_e=0;const Ne=[];for(let Oe=0;Oe<$t.length;Oe++){const xe=kt[Oe*2],Ye=kt[Oe*2+1],Ke=xe.length+Ye.length+10;_e+Ke>4500&&J.length>0&&(Ne.push({strings:J,indices:oe}),J=[],oe=[],_e=0),J.push(xe,Ye),oe.push($t[Oe]),_e+=Ke}J.length>0&&Ne.push({strings:J,indices:oe});for(const Oe of Ne){const xe=Oe.strings.join(" ___ "),Ye=(await H(xe)).split(/\s*___\s*/);for(let Ke=0;Ke<Oe.indices.length;Ke++){const Ht=Oe.indices[Ke],ct=Bt[Ht],za=fs(ct)||"data:image/webp;base64,UklGRpgPAABXRUJQVlA4IIwPAACQMACdASoLAb0APq1QoE2mJCMiJbY7OMAViWdrScXLUnDoRLym4stfsPm2M5SRqVipSgIVAmssAR64b99mMsfhNpQf3znk9FRAH1G6mb7RPU0TNw/6D/czfougi2FALqEjptnZFu4wIQrSP3RcRLQKjtkYPCRp2SKAIRkoV08H9FBCExcOnWEn9DZkEeICAqkBJcw72MSUtVAORGSrDcxjW1H8aWoJA7fbhfJahQ93RSlt4EM6/POisHm/g09WI9/J4VRo8fpYMvbf4v1fePRno/tBam9c9XkehenrUhNNvcMt14aBxJ6wdQRgC+cUhEckrsb8enzzCAp6R6YDXLEy1Eq3S/22icuujmQgQHa4v4eNis5yI4SIeVkcthDtMjys//C0uYYZ7jyMFt7KJuF6tqsVLJ7++iH2UBdupR2soc7qmjUzcewYrn2Opd1JKmcfOfcJY/7stLwRkTZ0DorleZcSrONR/2wE4IsUkfiFAndOzdyT7eGGMEt/a+GU8OjT02ifQfjWWmz4TgBAAP72GJmwllQcef4pjZgNC1EnIwNw0x3K+TsrW7F1DCRjeTJJye+En166nUVkmg8osxSdqMU7LfFbAYg9Ya0lwA9IdV3oKewMdqz/Z3DsEMPVli1Q5QNFVorDd4m7O7UQV22QU0ruJlb1mOWVZft9fm3cLFn0poCZxJgCXK0kRbKI/CSQqtiENvYfGisyex/5XHjNsQ3biLL/qI7uiKvNdEbkc6k3wRLSwB8NJLhMC7BJsdHxKo9Ig2X4trIcM+gE9M+ZcJY3Pyn3fzn6IKzDD4Y2/At+FgyCgVSMoqKfq8yfzGa8XMHyWiLS+COeBVtTlW1eeYYuzGS6cA90TWlMG6r0+YVdbXi2IaxQH0ekUxjajfsaPL8TdMFCgFfVROEfrakcc8DbuM2TzxyLe5VBLz8Fp4kuQDhRKocdfLPyKiKRINim5noDl6XzS5ikKbRTu9D0le7VoNy+h7juA2XmoB1JU7GE0s5KC46UjyNBSq9pIapwJ1NulTh6NB0gJW0dsXeDtjHTJZvvPpGrmbXEBuoub9dx/jFwDzJsE7Owsmqm7/U6AV5d+SzkFjQfltxzIa7D+PAJcjhnzolYeKKGynOmIcbFE1Vac+alSm7sgEwbwbwh/k/OSCp4ysUuCmthqnDyb84RWMoLcJDoR1zZ4R7oO3tKmLNbInJG3ujmKE+v3A3S2PWKzM4m2sCmSw3yvGsDAw/x+GBSxvdKuEPMPNAVroaRvmh2WzWdUbCTNVXwal7jUs5WsYq9Gbm4wWL9ai7fuOeMftVDF8P6jD25V2jU+OPzl++EjcyqDXfTsMsRyYxJNpRBDnOtcA4QR+jrCwk2vd3VLXmtKt+XDbPhMH+rCrRaNYOts68KCvPVhCqBvnnxZ1MHu9a/H4nY1w7AFu0zaZxuLUpf41nvmnu8+RlUiGSBmT8FxppFJsEbiU2sOfFHu+uh80bgw+lrxLuV2kLJT847a0tM7gWVjreekqsN6bXhKkuOZRdVY8AAHLkBnS7da6BZkHlTycEZMVUm+DH5h2sdpOm4njOfQsPZRmNqg5FdWPbYH9ARhwO8R9xTCEi3JYw0hlCCTRgf0F4wzaYpPLwyHGX6PONLxgsyDtwUjgg+5r0yZ66wjJRulydZNfFbo4gvQBE90uP7l3YKo0O9Q3LMrl5YHLecNHlcaq9leELZOEGZP2IU0ejGtTXz7dMH8pAzrLMQn4wWnGYNwYzlLLOBKmd7LHqSHIeskx5imya6NXaGXhjeDo4/VU2mJF7Pa2/IZ5C6FhxPi6HKdcqANeRTABohLJpigUKRivGOhy9wD8ZgLffVOB8wr2brFPSyq7K6KdHBoJPNfn55XECi7PlGlCnYJF8lBVzrMXz1ora/h7l5J3aDawDq7YXSg6+z/H7VbZCxnPoEfwThhHEIlXa+gvr/WRAEFbDp1rBt50DWMLlrEZ7HZCt8LNYnx22ZNndZPUxX8kO9aPQZIj7GCO2TZIJXck64nKzfSxcVJLHYt6u1yk209sX4UJ6croCnda7ikyNDcSW9e2lLC01kdD4s1aSf8bdvtZbRfPFXqQfzWQS80T8LEOpAz0SuzJFZYK5cL67l3S3nvVI3ORER200LGTcFaRHaMoXOlWOP9qcn3IbG9IA5FCVP7KecdjR148vK05MAkZ1nPHHDwNbDziXiJWxq6IrnxQ0uglbQ41Rt2eNVscWgzP2BN9e/KKjGNF1S+ObFSdL5ctJLHZ+KZaN182TtFMgqfS9jW4wfyeK6eXnSWUr6pZEcypMRfC6FSzDiMbmCVXi224WdJsFrToTs5PFTQY56iKlkkFench0g/OoEv5etYwr8M3x6r3r+VSsuzfgxxmfM7LlMSDgs0aHF/9+Dpf93qL6WFo6GXSDBw2DP0N1a/0DAl9F15rl8dFevkaGqe5zgFC6G6q679issDbvuP+ETt0eOzjN2/qhShjoVSUSTUij9ujToMQgSkmCvXt5xoLC8y2YDTSbF2+aZ0f95d0s5MlbkOiod3uOkH1tS4xrtxEMBYEFxtAzkSsy4AxOXMDCyPgBQcLKArId7TRHmjOjrN8bkuMR8+liCeT29602Dah/29N7Gyr+SznSuOSBXpFLJp4WvUJniUXwJzZBNc7grS0jIjQNYw6rMj4tIjiUMH6Wi/brhXRXaeCUcHiQgDxv09K8kVUmHFuZcKXaWmOrPolRTxliDOjfjLdE639eK9Vmc+WfpJdSfal4t1ZCOXV6wL25OjI1EX3PCTA9ZxxQ5+gFVmEYNe97P0B4tu61+tWRupy5oug5q8foqdKqgjEKUkle8VK7gOwapFMFM8nMsRNegKqcSeJdkOGyL+LmhISAB6BieMfJyM1e3Y2Nie3THtdVHg2BvPlNzJQxex1qcAwNgARdgdof/KoVaCewfj+U29gddnZvLHnJNo6l/VswWZKy1cm6BahxMMVj2HkzsP8bJ07ljIvzzhbv5ZnSpguEaiZ8Vs37RA8yYDumH6LF6yvBpp4fBeO7w2RYmxQrO/gI2c/UKFyrH3Hmr8MbATSNQ5cuUltExrYVy+oCEGBVM50/87+O2ilgFZzN/dt0BlR5JW+RpxWJ1SOFEV5QoPDRFvujplm8hbimNj4esVfLOFKo/b++qkDmPFBV+x1+QezoDFT+BAjIM0OJqP2K/9npiiG6ZF9lAPqLzHCJqr26aR4eKfcVEBb8BxDghbafgony7DsZXq130wpB/vymaRMak8PG5Y9SQC+W5LbNycZiHxeDUOm9x8u8EuAeAgDZ6qZfy0U+XBGcA/LIjT5PfeK9B8FHKl64+2Lu6gymV7+ucsQGBbxNOx3fjz1o3M0RBTs0a0iJtTkpHXue1bLUXwiqMO+3ud9BV0zVti/sYI+ZvHVrDJk2WP6yXsSZ9A1+mrnSIQy9GgGzPdKpvQOA1fyZkSAx/Y5vsNuidF3IVvoMO7cwkITMRlwNa2EWrpfkGnLUBXyu+QkFPFsLWYG3KeopWhvsyAEvRrGt+ro9Pf000dQg7KXxLFp3SrMyjnSz1yc3M2KNGOIJJTHAomXQ/Vfcitvm/5kU+jI21Pl9Sse+1AXZSfL+CH+5Fk8dArgbV/eUtGh//6lOb/zyBqbq+SqG/G+fEGJhIUGzRZ1aUe5wgJ2ShVrFKlNF7u2nxzo/qV1Zzc58008xRe7GQv36ifa3zm15yMbe1Ppu5PH8CTFO8ykOJRbrz4vUVgRwYZ3iKrjNbXJy4ae3fxJC8ZVm7rG2sVRqDEH5RapMTNPlCAofkTfj82l7UfwccT2moLi68O2SvXc2SUq8Z2GNCUdxhZdfnhwNQgUJTDAMdULs5iHXirI2LmVZSdkHeB3/jn4TB1VWnp5IMjwqzvdIaQAwgzy65oT/9recHqxEbJ4Vdf7IXl+Un3Bm5eyIaAeC7K3eJUVRyRFvjncqUJgFaF0AD4P6zmk+jdlRwbdNBm4m/ZDHqB/3dq6X2kozq2DxfhwB4mvlPAynxafdSjMODBZF04sqSo471PGtxxvqVYxVx/23slNA2DuNuaU+K5Gfti0ADPPkqgkY9G/0s4LXbn4zWeYfvKVdrqoQi1Ajt8a6QIvAbBzutHAGmI9fpen0igM1nOT9hVb0Fb0kuigAqV/Uh4+UlEX1vAV7rhxDBDSQWxr3DlApyz42WCK1JRFUMun7u5EGoKWIUFpJ4sTGnD0yR1kaUoluW18x2Os2Ofr8dYhxRs0Yf5kTNjt25KUSDY/OLbkhVf6itFG1+8V95zjkNi78cPIbkt5w2NTs3VOjW/KynPKCgJc3DV4oPH21xN/x4mZhtvYkgIiPjPXBciMhmvZCWzrZ2yKa+OrvbJ0KlaqSDTYB4Q8Y7ifpb3lh2lbb6xlA3520TCTGAlP+qJm7EwY6JbKDY7wSsBDtaWqDxbz7gcbvnkpn1bV7WNOQAVsVPjHs/cT1w1Sie7Czs5Jpetwvq+0XQ36MbT7TakVCKlgEgWc8wPofXCLXFJ7Q+vEznFC956K5GfhylAIxh0z8/zsNFiKGkCEg6cgnNtby3Mxl2RubPu+N1geTSBvVTv501ZaJxjmEAK/oMLsMq60HFllydDhlxhgqUXy/EbVeQA0uVe+or4exMDr/Eq8j1NY6tAGRCLOeStwhKYR7XCtjvz7yS9CIJsy3xB7A02GdVmgoHRc283ZwaNyMgU3pFYjS0HEmOQM0w7xuwCapJUeA90C4kuJF3oOxEyTnq1IH3b/IcwYxPB3EX9zUIT/YKXmqAOWGuFVHPMVNt+mbF0unE5UgIy1/wDjDs4nUjxreo6sR5eFuLFISm6TqAI21dpW8e568D9JorvenGjgE1YL7vjg/SOnsqPiu0kr7c3kLtTaCNs9+qBp5ce4wGCh3LH3nT5rNLa7S+Q8/v0f791wsKBzmu4WvhD0FBEhj3Cdoc/pAz6Hw98yFu5Ekpk9kbYOTkfWniR593wHS68IrNLpBah+LowWb92GhRjKFlmwzM8IECyjxMeNJK86TIQKqxkBJUm7VXOKAMEyEkKjjVBBsqsvC9xyHpZ/sWPMn+S9W8wKfmlWrGsZ0aSCb5TmhWGMDS1DhgmhZbMPJ2/G/eFgaPWjKD3hTfqIQFuo46XKRbRKvI60pv3Hl76LUEVdlRVf+uZKhr6TNWp0cYhrNHMNY9a0+qOtc0e1k8DZIyXlJOrT0LB6jmhA2cwwh/A8RXMGIYCooOr3D8Nc827/J4JP5Q8BgHPiDZbOb0Vd8H9n3SzWflGlzxgkrcEO1YzB+P/bwAMLXm7faDkqm11p1Cm/2XhcAAAA==",Kt={title:Ye[Ke*2]?.trim()||ct.title,description:(Ye[Ke*2+1]?.trim()||"")+"...",link:ct.link,displayImage:za,sourceName:ct.sourceName,sourceFlag:ct.sourceFlag,sourceHome:ct.sourceHome,sourceUrl:ct.sourceUrl,isNew:!It.includes(ct.link),isBlocked:Ge.includes(encodeURIComponent(ct.link))};await u.default.setItem(`news_trans_${ct.link}`,Kt),ke[Ht]=Kt}}}v&&Je.current&&A(100);const Da=await u.default.keys(),ja=Da.filter(J=>J.startsWith("news_trans_")),ie=Da.filter(J=>J.startsWith("og_img_")),dt=Bt.map(J=>`news_trans_${J.link}`),aa=Bt.map(J=>`og_img_${J.link}`);for(const J of ja)dt.includes(J)||await u.default.removeItem(J);for(const J of ie)aa.includes(J)||await u.default.removeItem(J);Je.current&&(m(ke),S(new Date))}catch(q){if(q.name==="AbortError"||q.message?.includes("aborted")){console.log("Запит було скасовано");return}console.error("Справжня помилка завантаження:",q),Je.current&&(L(!0),A(100),v&&(N(!0),await new Promise(pe=>setTimeout(pe,2500))))}finally{Je.current&&N(!1)}},[]),wt=d.filter(v=>z.includes("all")||z.includes(v.sourceName)),xt=wt.slice(0,45).map(v=>({...v,isMuted:Be.includes(v.link)})),it=xt.length>0?[...xt,...xt,...xt]:[],Xe=(0,n.useRef)(null),[ne,Ie]=(0,n.useState)(null),Fe=(0,n.useRef)(!1),st=(0,n.useRef)(null),Gt=(0,n.useCallback)(()=>{const v=Xe.current;if(!v)return;const E=v.getBoundingClientRect().left+v.clientWidth/2;let q=null,pe=1/0;[...v.querySelectorAll("[data-news-slide]")].forEach((He,Ge)=>{const he=He.getBoundingClientRect(),ve=Math.abs(he.left+he.width/2-E);ve<pe&&(pe=ve,q=Ge)}),Ie(q)},[]),Vt=v=>{if(!Xe.current)return;const E=Xe.current,q=(E.querySelector("[data-news-slide]")?.getBoundingClientRect().width||280)+(Number.parseFloat(getComputedStyle(E).gap)||5);Fe.current=!0,E.scrollBy({left:v==="left"?-q:q,behavior:"smooth"}),setTimeout(()=>{Fe.current=!1},600)},_t=()=>{!Xe.current||xt.length===0||(Gt(),!Fe.current&&(st.current&&clearTimeout(st.current),st.current=setTimeout(()=>{const v=Xe.current;if(!v)return;const E=v.scrollWidth/3,q=12,pe=v.style.scrollSnapType;v.scrollLeft<=q?(Fe.current=!0,v.style.scrollSnapType="none",v.scrollLeft+=E,requestAnimationFrame(()=>{v.style.scrollSnapType=pe,Fe.current=!1})):v.scrollLeft>=E*2-q&&(Fe.current=!0,v.style.scrollSnapType="none",v.scrollLeft-=E,requestAnimationFrame(()=>{v.style.scrollSnapType=pe,Fe.current=!1}))},150)))};(0,n.useEffect)(()=>{if(Xe.current&&xt.length>0){const v=Xe.current.scrollWidth/3;Xe.current.scrollLeft=v,requestAnimationFrame(Gt)}},[xt.length,z,Gt]),(0,n.useEffect)(()=>{(async()=>{try{const q=await u.default.getItem("news_refresh_cooldown_end");if(q){const pe=Math.ceil((q-Date.now())/1e3);pe>0&&K(pe)}}catch{}At(!0)})();const E=setInterval(()=>At(!1),36e5);return()=>{clearInterval(E)}},[]),(0,n.useEffect)(()=>{if(k>0){const v=setTimeout(()=>K(k-1),1e3);return()=>clearTimeout(v)}else u.default.removeItem("news_refresh_cooldown_end")},[k]);const Ft=async()=>{let v=_.trim();if(v){if(ce.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}try{let E=v,q="",pe=(0,e.jsx)($r,{}),He="";E.startsWith("@")&&(E=`https://t.me/${E.slice(1)}`),!E.startsWith("http://")&&!E.startsWith("https://")&&(/^[a-zA-Z0-9_]+$/.test(E)?E=`https://t.me/${E}`:E=`https://${E}`);const Ge=new URL(E),he=Ge.hostname.replace("www.","");q=he,He=Ge.origin;const ve=Di(E);if(ve==="youtube"){alert("Здійснюється пошук ID YouTube каналу...");const be=await Ug(E);if(be)E=`https://www.youtube.com/feeds/videos.xml?channel_id=${be}`,q=`YouTube: ${he}`,pe=(0,e.jsx)(Rc,{});else{alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");return}}else if(ve==="telegram"){const be=E.split("/");q=`Telegram: ${be[be.length-1]||be[be.length-2]}`,pe=E.includes("+")||E.includes("joinchat")?"🔒":"📢",He=E}else if(ve==="telegraph")q="Telegraph",pe=(0,e.jsx)($r,{}),He="https://telegra.ph";else if(ve==="facebook"){const be=E.split("/"),vt=be[be.length-1]||be[be.length-2];E=`https://www.facebook.com/${vt}`,q=`Facebook: ${vt}`,pe=(0,e.jsx)(qd,{}),He=E}else if(ve==="hive"){const be=E.match(/withhive\.com\/([a-zA-Z0-9_-]+)/),vt=be?be[1]:"Hive";q=`Hive: ${vt}`,pe=(0,e.jsx)(Sc,{}),He=`https://community.withhive.com/${vt}`}else q=he,pe=(0,e.jsx)($r,{});const Lt={url:E,name:q,flag:pe,home:He,type:ve},mt=await u.default.getItem("custom_news_sources")||[];if(mt.find(be=>be.url===E))alert("Це джерело вже додано.");else{if(mt.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}const be=[...mt,Lt];await u.default.setItem("custom_news_sources",be),Y(be),me(""),Te(!1),At(!0)}}catch(E){console.error(E),alert("Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)")}}},fa=async(v,E)=>{if(E.preventDefault(),E.stopPropagation(),!r){alert("Тільки авторизовані користувачі можуть залишати скарги.");return}if(window.confirm("Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)"))try{const q=Vo.currentUser||(await _d(Vo)).user,pe=r.uid||q.uid,He=encodeURIComponent(v.link),Ge=encodeURIComponent(v.sourceUrl),he=Date.now(),ve={uid:pe,timestamp:he},Lt=Ja(Ia,"news_reports",He),mt=await Wn(Lt);if(mt.exists()){if((mt.data().reports||[]).some(Pe=>Pe.uid===pe&&he-Pe.timestamp<864e5)){alert("Ви вже скаржилися на цю новину сьогодні.");return}await Xn(Lt,{reports:jo(ve)})}else await Kn(Lt,{reports:[ve]});const be=Ja(Ia,"rss_reports",Ge),vt=await Wn(be);vt.exists()?(vt.data().reports||[]).some(Pe=>Pe.uid===pe&&he-Pe.timestamp<864e5)||await Xn(be,{reports:jo(ve)}):await Kn(be,{reports:[ve],name:v.sourceName}),alert("Скаргу прийнято. Дякуємо!"),At(!0)}catch(q){console.warn("Помилка відправки скарги:",q),alert("Помилка відправки скарги.")}},Ma=async(v,E)=>{E&&(E.preventDefault(),E.stopPropagation());const q=[...Be,v.link];if(qe(q),r?.syncMutedNews&&r?.uid)try{await Xn(Ja(Ia,"users",r.uid),{mutedNews:q})}catch(pe){console.warn("Помилка збереження заглушеної новини в Firebase",pe)}else try{await u.default.setItem("muted_news_urls",q)}catch{}},Le=async v=>{const E=Be.filter(q=>q!==v.link);if(qe(E),r?.syncMutedNews&&r?.uid)try{await Xn(Ja(Ia,"users",r.uid),{mutedNews:E})}catch(q){console.warn("Помилка розглушення новини в Firebase",q)}else try{await u.default.setItem("muted_news_urls",E)}catch{}},ot=async v=>{if(window.confirm("Видалити це джерело новин?"))try{const E=await u.default.getItem("custom_news_sources")||[],q=E.filter(He=>He.url!==v);await u.default.setItem("custom_news_sources",q),Y(q);const pe=E.find(He=>He.url===v)?.name;pe&&z.includes(pe)&&y(["all"]),At(!0)}catch(E){console.error("Localforage error:",E),alert("Помилка видалення джерела.")}},Yt=r?.newsLayout||[],Zt=v=>Yt.find(E=>E.key===v)?.visible!==!1,Xt=!0,ht=Zt("title"),Me=Zt("description"),[ka,Se]=(0,n.useState)(!1),tt=xt.reduce((v,E)=>{const q=E.sourceName||"Джерело";return v[q]||(v[q]=[]),v[q].push(E),v},{});return(0,e.jsxs)(mg,{ref:Tt,children:[(0,e.jsxs)(gg,{$isStickyBgMode:a,$isDarkMode:l,children:[(0,e.jsx)(bg,{$isDarkMode:l,children:(0,e.jsx)(qt,{ref:v=>c("newsHeader",v),$isDarkMode:l,onClick:()=>Se(!0),style:{marginLeft:"5px",padding:"2px",fontSize:"15px",fontWeight:"600",background:"none"},children:"Натисніть для додавання стрічки новин"})}),(0,e.jsx)(wn,{children:Nt&&(0,e.jsxs)(Rt.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:[(0,e.jsxs)(ps,{children:[(0,e.jsx)(qt,{$isDarkMode:l,onClick:()=>O(!0),children:"Інструкція"}),(0,e.jsxs)(qt,{$isDarkMode:l,$active:z.includes("all"),onClick:()=>h("all"),children:[z.includes("all")?"☑":"☐"," Усі"]}),wr.map(v=>(0,e.jsxs)(qt,{$isDarkMode:l,$active:z.includes(v.name),onClick:()=>h(v.name),children:[z.includes(v.name)?"☑":"☐"," ",v.name]},v.name)),ce.map(v=>(0,e.jsxs)(qt,{$isDarkMode:l,$active:z.includes(v.name),onClick:()=>h(v.name),children:[z.includes(v.name)?"☑":"☐"," ",v.name,(0,e.jsx)("span",{onClick:E=>{E.stopPropagation(),ot(v.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},v.url)),ce.length<5&&(0,e.jsx)(qt,{$isDarkMode:l,onClick:()=>Te(!re),style:{borderStyle:"dashed"},children:re?"Скасувати":"Додати стрічку"}),(0,e.jsxs)(qt,{$isDarkMode:l,onClick:()=>gt(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",ft.length,")"]})]}),(0,e.jsx)(wn,{children:re&&(0,e.jsx)(Rt.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[(0,e.jsx)("input",{type:"text",value:_,onChange:v=>me(v.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"5px",borderRadius:"5px",border:`1px solid ${l?"rgba(0, 0, 0, 0.98)":"rgb(255, 255, 255)"}`,background:"transparent",color:"#fff",outline:"none",minWidth:"248px",fontFamily:"var(--font-family)",fontSize:"12px","--placeholder-color":"rgba(255, 255, 255, 0.97)"}}),(0,e.jsx)(qt,{$isDarkMode:l,onClick:Ft,style:{background:"#ffb36c",color:"#000"},children:"Додати"})]})})})]})})]}),g?(0,e.jsxs)("div",{style:{textAlign:"center",color:"gray",padding:"60px 20px"},children:[(0,e.jsx)("div",{style:{marginBottom:"15px",fontSize:"14px",background:"rgba(0, 0, 0, 0.71)",color:"#fff",borderRadius:"5px",padding:"10px 15px",borderRadius:"5px",display:"inline-block",fontWeight:"900"},children:F?"Помилка завантаження!":`Шукаємо цікаві новини: ${j}%`}),(0,e.jsx)(Og,{$isDarkMode:l,children:(0,e.jsx)(Vg,{$progress:j,$isError:F})})]}):wt.length>0?(0,e.jsxs)("div",{style:{position:"relative",maxWidth:"1400px",margin:"0 auto"},children:[(0,e.jsx)(wn,{mode:"wait",children:(0,e.jsx)(Rt.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},style:{width:"100%"},children:(0,e.jsxs)(yg,{children:[(0,e.jsx)(wg,{ref:Xe,onScroll:_t,children:it.map((v,E)=>(0,e.jsx)(kg,{"data-news-slide":!0,$distanceFromCenter:ne===null?2:Math.min(Math.abs(ne-E),2),children:(0,e.jsx)(cs,{item:v,$isDarkMode:l,showImage:Xt,showTitle:ht,showDescription:Me,onAiSummaryClick:q=>{Q(q),ee(!0)},onReportClick:fa,onMuteClick:Ma,onUnmuteClick:Le})},`${v.link}-${E}`))}),(0,e.jsxs)(vg,{$visible:ae,children:[(0,e.jsx)(ss,{$direction:"previous",onClick:()=>Vt("left"),children:"◀"}),(0,e.jsx)(ss,{$direction:"next",onClick:()=>Vt("right"),children:"▶"})]})]})},z.join(","))}),(0,e.jsxs)(Bg,{$isDarkMode:l,children:["За сьогодні відфільтровано ",f," небажаних новин."]})]}):(0,e.jsx)("div",{style:{textAlign:"center",color:"white",padding:"14px",background:"#0000009c",marginTop:"20px",fontSize:"12px"},children:"Перевірте інтернет зв'язок. У випадку стабільного зв'язку це означає, що всі новини сайту мали недопустимий характер і ми їх не пропустили."}),fe&&(0,e.jsx)(yf,{isOpen:te,onClose:()=>ee(!1),newsItem:fe,isDarkMode:l}),M&&(0,e.jsx)(Yl,{isOpen:M,onClose:()=>O(!1),initialFaqQuestion:"Навчання по управлінню новинами"}),Jt&&(0,e.jsx)(Dg,{onClick:()=>gt(!1),children:(0,e.jsxs)(zg,{$isDarkMode:l,onClick:v=>v.stopPropagation(),children:[(0,e.jsx)(ds,{onClick:()=>gt(!1),children:"✕"}),(0,e.jsx)("h2",{style:{marginTop:0},children:"Чорний список (карантин 24 год)"}),(0,e.jsx)("p",{style:{fontSize:"13px"},children:"Ці RSS-джерела отримали багато скарг і відключені для всіх користувачів."}),ft.length===0?(0,e.jsx)("p",{children:"Наразі немає заблокованих джерел."}):(0,e.jsx)("ul",{style:{paddingLeft:"20px",marginTop:"15px"},children:ft.map(v=>(0,e.jsxs)("li",{style:{marginBottom:"15px"},children:[(0,e.jsx)("strong",{style:{fontSize:"16px"},children:v.name}),(0,e.jsx)("br",{}),(0,e.jsx)("a",{href:v.url,target:"_blank",rel:"noreferrer",style:{fontSize:"12px",color:"#ffb36c",wordBreak:"break-all"},children:v.url})]},v.id))})]})}),(0,Cr.createPortal)((0,e.jsx)(wn,{children:ka&&(0,e.jsxs)(Rg,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.25},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",zIndex:"3000",margin:"0 auto 16px auto",paddingBottom:"3px",borderBottom:"1px solid rgba(255, 255, 255, 0.2)"},children:[(0,e.jsx)("h2",{style:{margin:0,color:"#ffaa00",fontSize:"15px"},children:"Повноекранні новини та керування стрічками"}),(0,e.jsx)(ds,{onClick:()=>Se(!1),style:{fontSize:"16px",padding:"6px 16px"},children:"Закрити"})]}),(0,e.jsxs)(Fg,{children:[(0,e.jsxs)("div",{style:{background:"rgba(20, 20, 20, 0.8)",padding:"12px",borderRadius:"8px",marginBottom:"20px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[(0,e.jsx)("div",{style:{marginBottom:"10px",fontWeight:"600",fontSize:"14px"},children:"Налаштування та вибір авторів / джерел:"}),(0,e.jsxs)(ps,{style:{justifyContent:"flex",width:"100%",flexDirection:"column"},children:[(0,e.jsx)(qt,{$isDarkMode:l,onClick:()=>O(!0),children:"Інструкція"}),(0,e.jsxs)(qt,{$isDarkMode:l,$active:z.includes("all"),onClick:()=>h("all"),children:[z.includes("all")?"☑":"☐"," Усі"]}),wr.map(v=>(0,e.jsxs)(qt,{$isDarkMode:l,$active:z.includes(v.name),onClick:()=>h(v.name),children:[z.includes(v.name)?"☑":"☐"," ",v.name]},v.name)),ce.map(v=>(0,e.jsxs)(qt,{$isDarkMode:l,$active:z.includes(v.name),onClick:()=>h(v.name),children:[z.includes(v.name)?"☑":"☐"," ",v.name,(0,e.jsx)("span",{onClick:E=>{E.stopPropagation(),ot(v.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},v.url)),ce.length<5&&(0,e.jsx)(qt,{$isDarkMode:l,onClick:()=>Te(!re),style:{borderStyle:"dashed"},children:re?"Скасувати":"Додати стрічку"}),(0,e.jsxs)(qt,{$isDarkMode:l,onClick:()=>gt(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",ft.length,")"]})]}),(0,e.jsx)(wn,{children:re&&(0,e.jsx)(Rt.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden",marginTop:"10px"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",flexWrap:"wrap"},children:[(0,e.jsx)("input",{type:"text",value:_,onChange:v=>me(v.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"6px 10px",borderRadius:"5px",border:"1px solid rgba(255, 255, 255, 0.3)",background:"#111",color:"#fff",outline:"none",minWidth:"280px",fontSize:"13px"}}),(0,e.jsx)(qt,{$isDarkMode:l,onClick:Ft,style:{background:"#ffb36c",color:"#000",padding:"6px 14px"},children:"Додати"})]})})})]}),Object.keys(tt).length===0?(0,e.jsx)("div",{style:{textAlign:"center",padding:"40px",color:"#aaa"},children:"Немає новин для відображення."}):Object.entries(tt).map(([v,E])=>(0,e.jsxs)(Lg,{children:[(0,e.jsxs)($g,{children:[(0,e.jsxs)("span",{children:["Автор/Джерело: ",v]}),(0,e.jsxs)("span",{style:{fontSize:"12px",fontWeight:800},children:["(",E.length," новин)"]})]}),(0,e.jsx)(Eg,{children:E.map((q,pe)=>(0,e.jsx)("div",{children:(0,e.jsx)(cs,{item:q,$isDarkMode:l,showImage:Xt,showTitle:ht,showDescription:Me,onAiSummaryClick:He=>{Q(He),ee(!0)},onReportClick:fa,onMuteClick:Ma,onUnmuteClick:Le})},`${q.link}-${pe}`))})]},v))]})]})}),document.body)]})},Zg={[$i]:{src:Ku},[Ei]:{src:Uu}},Xg=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0ceb":"#fdff98e7"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,xs=(t,a)=>{fn(t,{duration:4e3,style:{backgroundColor:a?"#0c0c0cbf":"#fdff98bb",color:a?"#ffffff":"#1a1a1a",border:"2px solid #00afce",borderRadius:"6px",boxShadow:`0 4px 12px rgba(0, 0, 0, ${a?"0.5":"0.15"})`,fontSize:"13px",fontWeight:"500",zIndex:"10000",padding:"10px 16px",backdropFilter:"blur(4px)"},icon:"⚠️"})},Qg=le`
  from { opacity: 0; }
  to { opacity: 1; }
`,ex=le`
  from { opacity: 1; }
  to { opacity: 0; }
`,tx=le`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,ax=le`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,nx=le`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`,rx=le`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,ix=i.div`
  position: relative;
  width: 100%;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`,ox=i.div`
  display: block;
  width: 192px;
  margin-top: 45px;
  height: 71px;
  background-image: url(${t=>t.$image});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(120px) scale(1.5);
  animation: ${t=>t.$start?rt`
          ${nx} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `:"none"};
`,sx=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${t=>t.$start?rt`
          ${rx} 1s ease-out forwards
        `:"none"};
  animation-delay: ${t=>t.$start?"1.5s":"0s"};
`,lx=le`
  0% { background-position-x: 0%; }
  50% { background-position-x: 100%; }
  100% { background-position-x: 0%; }
`,Un=t=>t?t instanceof Blob?t.type.startsWith("video/"):typeof t!="string"?!1:t.includes(".mp4")||t.includes(".webm")||t.includes(".ogg")||t.includes(".mov")||t.startsWith("data:video/")||t.startsWith("blob:"):!1,hs=async t=>{if(!t)return;const a=typeof t=="string"?t:t.src,r=typeof t=="string"?"background":t.name||"background";if(!a)return;const c=Un(a)?".mp4":".webp",l=r.replace(/[/\\?%*:|"<>]/g,"-").trim()||"background",d=l.toLowerCase().endsWith(c)?l:`${l}${c}`,m=fn.loading("Завантаження файлу...",{id:"bg-download"});try{const f=await fetch(a);if(!f.ok)throw new Error(`HTTP error ${f.status}`);const x=await f.blob(),g=URL.createObjectURL(x),N=document.createElement("a");N.href=g,N.download=d,document.body.appendChild(N),N.click(),document.body.removeChild(N),setTimeout(()=>URL.revokeObjectURL(g),1500),fn.success(`Збережено: ${d}`,{id:m})}catch(f){console.warn("Blob fetch download failed, using direct download:",f);try{const x=document.createElement("a");x.href=a,x.download=d,x.target="_blank",x.rel="noopener noreferrer",document.body.appendChild(x),x.click(),document.body.removeChild(x),fn.success(`Відкрито для скачування: ${d}`,{id:m})}catch{fn.error("Не вдалося скачати файл",{id:m})}}},fr=t=>{const a=[...t];for(let r=a.length-1;r>0;r--){const c=Math.floor(Math.random()*(r+1));[a[r],a[c]]=[a[c],a[r]]}return a},gr=t=>{if(t.author)return t.author;if(!t.snippet)return null;const a=t.snippet.match(/Постачальник(?:и)?:\s*([^\n]+)/);return a?a[1].trim():null},dx=t=>{if(!t)return null;const a=t.images?.[0];return a?ad[a]||a:null},cx=(t="")=>t.includes("play.google.com")?"playmarket":t.includes("store.steampowered.com")?"steam":t.includes("apps.apple.com")||t.includes("itunes.apple.com")?"appstore":null,_r={playmarket:{label:"Play Market",emoji:"🤖",color:"#01875f"},steam:{label:"Steam",emoji:"🎮",color:"#1b2838"},appstore:{label:"App Store",emoji:"🍎",color:"#0071e3"}},Yr=t=>{if(!t)return[];const a=[];if(t.platforms&&Array.isArray(t.platforms))return t.platforms;const r=cx(t.url);if(r&&a.push({type:r,url:t.url}),t.snippet){if(t.snippet.includes("play.google.com")&&!a.some(c=>c.type==="playmarket")){const c=t.snippet.match(/(https:\/\/play\.google\.com\/[^\s\n\)]+)/);c&&a.push({type:"playmarket",url:c[1]})}if(t.snippet.includes("store.steampowered.com")&&!a.some(c=>c.type==="steam")){const c=t.snippet.match(/(https:\/\/store\.steampowered\.com\/[^\s\n\)]+)/);c&&a.push({type:"steam",url:c[1]})}}return a},px=(t=[],a=[])=>{const r=new Set;return[...t||[],...a||[]].filter(c=>{const l=`${c?.lat??""}-${c?.lon??""}-${c?.name??""}-${c?.country??""}`;return!c||r.has(l)?!1:(r.add(l),!0)})},ux=i.div`
  position: ${t=>t.$isStickyBgMode?"fixed":"absolute"} !important;
  width: ${t=>t.$isStickyBgMode?"100vw":"100%"} !important;
  height: ${t=>t.$isStickyBgMode?"100vh":"100%"} !important;
  top: 0;
  left: 0;
  opacity: ${t=>t.$active?1:0};
  transition:
    opacity ${t=>t.$transition}s ease-in-out,
    position 0.5s ease,
    width 0.5s ease,
    height 0.5s ease,
    z-index 0s;
  transform: scale(
      ${t=>(t.$zoom||1)*(t.$rotationScale||1)}
    )
    rotate(${t=>t.$rotation||0}deg);
  transform-origin: ${t=>t.$focalX}% ${t=>t.$focalY}%;
  filter: ${t=>t.$blurType==="pixelated"?t.$pixelation>.5?"url(#pixelate-hero)":"none":`blur(${t.$blur||0}px)`};
  z-index: ${t=>t.$isStickyBgMode?"-10":"-2"} !important;
  animation: ${t=>t.$panEnabled&&t.$zoom>1?rt`
          ${lx} ${t.$panSpeed||6}s infinite linear
        `:"none"};
`,fx=n.memo(({bg:t,onClick:a})=>{const r=(0,n.useRef)(null),[c,l]=(0,n.useState)(null);(0,n.useEffect)(()=>{if(t?.src instanceof Blob){const m=URL.createObjectURL(t.src);return l(m),()=>URL.revokeObjectURL(m)}else l(null)},[t?.src]);const d=t?.src instanceof Blob?c:typeof t?.src=="string"?t.src:void 0;return(0,e.jsx)("video",{ref:r,src:d,preload:"none",muted:!0,playsInline:!0,style:{width:"100%",aspectRatio:"3/2",objectFit:"cover",cursor:"pointer",background:"#111"},onMouseEnter:()=>{if(r.current){r.current.preload!=="auto"&&(r.current.preload="auto");const m=r.current.play();m!==void 0&&m.catch(()=>{})}},onMouseLeave:()=>{r.current&&(r.current.pause(),r.current.currentTime=0)},onClick:a})}),xr=n.memo(t=>{const{$image:a,$active:r,$focalX:c,$focalY:l,$videoStart:d,$videoEnd:m,$videoPlaybackSpeed:f}=t,[x,g]=(0,n.useState)(null),N=(0,n.useRef)(null),j=t.$blurType==="pixelated",A=Un(a);(0,n.useEffect)(()=>{if(!A){g(null);return}if(a instanceof Blob){const y=URL.createObjectURL(a);return g(y),()=>URL.revokeObjectURL(y)}else if(typeof a=="string"&&a){let y=!0;return fetch(a).then(h=>h.blob()).then(h=>{if(y){const w=URL.createObjectURL(h);g(w)}}).catch(()=>{y&&g(null)}),()=>{y=!1}}},[a,A]);const F=a instanceof Blob?x:typeof a=="string"?x||a:"";(0,n.useEffect)(()=>{const y=N.current;if(y)if(r){if(f&&y.playbackRate!==f&&(y.playbackRate=f),d!=null&&y.currentTime<d&&y.paused&&(y.currentTime=d),y.paused){const h=y.play();h!==void 0&&h.catch(()=>{})}}else y.paused||y.pause()},[r,d,f,F]);const L=d??0,z=m??null;return(0,e.jsx)(ux,{...t,children:A?(0,e.jsx)("video",{ref:N,src:F,preload:r?"auto":"none",muted:!0,loop:!0,playsInline:!0,onCanPlay:y=>{if(r){const h=y.target;if(f&&h.playbackRate!==f&&(h.playbackRate=f),h.paused){const w=h.play();w!==void 0&&w.catch(()=>{})}}},onTimeUpdate:y=>{if(!z)return;const h=y.target.currentTime,w=y.target.duration;z>0&&h>=z&&w&&z<w-.5&&(y.target.currentTime=L)},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${c}% ${l}%`,imageRendering:j?"pixelated":"auto"}}):(0,e.jsx)("img",{src:F||"/assets/fog-Cew27ml4.webp",alt:"Геройський фон",fetchPriority:r?"high":"low",loading:r?"eager":"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${c}% ${l}%`,imageRendering:j?"pixelated":"auto",display:"block"}})})}),gx=i.div`
  position: ${t=>t.$isStickyBgMode?"fixed":"absolute"} !important;
  top: 0;
  left: 0;
  width: ${t=>t.$isStickyBgMode?"100vw":"100%"} !important;
  height: ${t=>t.$isStickyBgMode?"100vh":"100%"} !important;
  background: rgba(0, 0, 0, ${t=>t.$opacity});
  z-index: ${t=>t.$isStickyBgMode?"-9":"-1"} !important;
  pointer-events: none;
  transition:
    background 0.5s ease,
    width 0.5s ease,
    height 0.5s ease;
`,xx=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,hx=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 0;
  }
`,mx=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,bx=i.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  width: 300px;
  background: #00000056;
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,yx=i.button`
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease;
`,wx=i.div`
  position: fixed;
  top: 5%;
  left: 0%;
  width: 100vw;
  height: 97vh;
  background: rgba(2, 2, 2, 0.97);
  border-top: 2px solid #ffb36c;
  padding: 0;
  overflow-y: auto;
  z-index: 99999;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,vx=i.button`
  width: 100%;
  background: transparent;
  color: ${t=>t.$selected?"#ffb36c":"#fff"};
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${t=>t.$selected?"#ffb36c":"transparent"};
  padding: 5px 10px;
  cursor: pointer;
  text-align: left;
  font-size: 13px;
  transition: all 0.15s ease;
  font-weight: ${t=>t.$selected?"bold":"normal"};
  background: ${t=>t.$selected?"rgba(255,179,108,0.08)":"transparent"};

  &:hover {
    background: rgba(255, 179, 108, 0.15);
    border-left-color: #ffb36c;
    color: #ffb36c;
  }
`;i.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2000;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.1) 0%,
    transparent 70%
  );
  border: 4px solid rgba(255, 215, 0, 0.15);
  box-shadow: inset 0 0 50px rgba(255, 215, 0, 0.2);
  opacity: ${t=>t.$active?1:0};
  transition: opacity 2s ease;

  &::after {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${t=>t.$color||"gold"};
    font-size: 14px;
    font-weight: 900;
    text-shadow: 0 0 10px black;
  }
`;var kx=i.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`,Zr=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Xr=i.button`
  width: 30px;
  height: 30px;
  border-radius: 10px 0 0 0;
  border: none;
  border-right: 2px solid black;
  background: #1b4b64;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: #353988; }
`,Qr=i.div`
  position: absolute;
  top: 19px;
  left: 30px;
  background: ${t=>t.$isDarkMode?"rgba(10, 10, 20, 0.95)":"rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
  backdrop-filter: blur(12px);
  border-radius: 5px;
  overflow: hidden;
  z-index: 200;
  min-width: 180px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`,Ua=i.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 10px;
  background: ${t=>t.$active?t.$isDarkMode?"rgba(108,255,228,0.15)":"rgba(0, 175, 206, 0.15)":"transparent"};
  border: none;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"};
  color: ${t=>t.$active?t.$isDarkMode?"#6cffe4":"#007b99":t.$isDarkMode?"#fff":"#222"};
  font-size: 15px;
  font-weight: ${t=>t.$active?"700":"500"};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255,179,108,0.15)":"rgba(255,179,108,0.25)"};
    color: #ff8c2b;
  }
`,ms=i.button`
  padding: 14px;
  background: ${t=>t.$active?"#6cffe48b":"rgba(255, 234, 0, 0.5)"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: 1px solid
    ${t=>t.$active?"#ffff00":"rgb(0, 255, 238)"};
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-family);
  font-size: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${t=>t.$active?"#98ff6ca0":"rgba(0, 255, 119, 0.59)"};
  }
`,jx=i.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`,bs=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 120px;
    height: 30px;
    padding: 5px;
    font-size: 10px;
    border-radius: 8px;
    border: 1px solid #ffb36c;
    background: ${t=>t.$isDarkMode?"white":"black"};
    color: #222;
    font-weight: 500;
    &::placeholder {
      color: #303030;
    }
  }
`,Sx=i.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(2, 2, 2, 0.98);
  border-bottom: 2px solid rgba(255, 179, 108, 0.4);
  backdrop-filter: blur(6px);
`,Cx=i.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`,Tx=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb7a00;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background 0.2s;
`,Ax=i.div`
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.3);
`,ys=i.button`
  background: ${t=>t.$active?"#ffb36c":"rgba(255, 179, 108, 0.1)"};
  color: ${t=>t.$active?"#000":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 3px;
  padding: 8px 4px;
  font-size: 12px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background: ${t=>t.$active?"#ffb36c5d":"rgba(255, 179, 108, 0.3)"};
  }
`,Ix=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Mx=i.div`
  position: relative;
  display: flex;
  width: 99.7%;
  justify-content: center;
`,Dx=i.input`
  width: 100%;
  height: 30px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 11px;
  color: #040404;
  padding-left: 8px;
  padding-right: 35px;
  background: #ffffff;
  border-radius: 0;
  border: none;
  border-right: 2px solid black;
  outline: none;
  box-sizing: border-box;
    &::placeholder {
    color: #000000;
  }
`,zx=i.button`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border-left: 3px solid black;
  border-top: 1px solid black;
  cursor: pointer;
  font-size: 30px;
  color: rgb(2, 2, 2);
  background: rgb(183, 101, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  width: 30px;
  transition: all 0.2s;
  &:hover {
    font-weight: bold;
  }
  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`,ei=i.button`
  position: relative;
  border-radius: 0 10px 0px 0;
  width: 30px;
  height: 30px;
  background: ${t=>t.disabled?"#ffffff":"yellow"};
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  border-left: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  font-size: 20px;
  color: black;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  &:hover {
    background: ${t=>t.disabled?"#ccc":"skyblue"};
    color: ${t=>t.disabled?"black":"transparent"};
  }
  ${t=>!t.disabled&&rt`
      &:hover::after {
        content: "+";
        position: absolute;
        color: black;
        font-size: 22px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`,ws=i.div`
  position: absolute;
  top: 100%;
  align-items: center;
  background: ${t=>t.isDarkMode?"#fefefeec":"#000000da"};
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
   width: 99.7%;
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid rgb(0, 0, 0);
`,vs=i.button`
  width: 100%;
  text-align: left;
  padding: 2px;
  border-top: 1px solid #eee;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: ${t=>t.isDarkMode?"#050505fb":"#f4f2f2"};
  &:hover {
    background: skyblue;
    color: white;
  }
`;i.div`
  position: absolute;
  top: 100%;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: ${t=>t.$hasExpanded?"hidden":"auto"};
  border-top: 2px solid rgb(0, 0, 0);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: skyblue;
    border-radius: 10px;
  }
`;i.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;i.div`
  cursor: pointer;
  font-weight: bold;
  color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #205d6e;
  transition: background 0.2s;
  &:hover {
    background: #566fd2;
    color: white;
  }
`;i.div`
  max-height: ${t=>t.$expanded?"220px":"0"};
  overflow-y: ${t=>t.$expanded?"auto":"hidden"};
  transition:
    max-height 0.4s ease-in-out,
    padding 0.4s ease-in-out;
  padding: ${t=>t.$expanded?"3px":"0 15px"};
  background: #00eaff;
  font-size: 13px;
  color: rgb(9, 9, 9);
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;i.span`
  background: #f6ff00;
  color: #000;
    font-weight: 900;
  padding: 1px 5px;
  border-radius: 2px;
  border: 1px solid #000;
  font-size: 12px;
`;var Rx=i.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: ${t=>t.$isDarkMode?"rgba(10,10,20,0.97)":"rgba(245,247,255,0.97)"};
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`,Fx=i.div`
  width: 100%;
  padding: 18px 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
`,Lx=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${t=>t.$isDarkMode?"#1a1a2e":"#fff"};
  border: 2px solid ${t=>t.$isDarkMode?"#3a3a5a":"#ddd"};
  border-radius: 50px;
  margin-top: 20px;
  padding: 8px 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  transition: border-color 0.2s;
  &:focus-within {
    border-color: #ffb36c;
    box-shadow: 0 4px 28px rgba(255,179,108,0.25);
  }
`,$x=i.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 17px;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  &::placeholder { color: ${t=>t.$isDarkMode?"#666":"#aaa"}; }
`,Ex=i.div`
  color: ${t=>t.$isDarkMode?"#ffffff":"#080808"};
  font-size: 12px;
  text-align: center;
`,Px=i.div`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  overflow-y: auto;
  padding: 0 1px 2px;
  display: flex;
  flex-direction: column;
  gap: 6px;`,ti=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 8px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.15s, transform 0.12s;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(255,255,255,0.8)"};
  border: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.06)"};
  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255,179,108,0.1)":"rgba(255,179,108,0.15)"};
    border-color: #ffb36c55;
    transform: translateY(-1px);
  }
`,ai=i.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${t=>t.$bg||"linear-gradient(135deg,#205d6e,#566fd2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  font-weight: bold;
  color: #fff;
  overflow: hidden;
`,ni=new Map,hr=new Map,Nx=t=>{if(!t?.url?.includes("play.google.com/store/apps"))return null;try{const a=new URL(t.url).searchParams.get("id");return a?`https://play.google.com/store/apps/details?id=${encodeURIComponent(a)}&hl=en`:null}catch{return null}},Ox=async t=>{if(!t)return null;if(ni.has(t))return ni.get(t);if(hr.has(t))return hr.get(t);const a=fetch(`https://r.jina.ai/http://${t.replace(/^https?:\/\//,"")}`).then(r=>r.ok?r.text():"").then(r=>{const c=[...new Set([...r.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/[^\s"')]+/g)].map(([l])=>l.replace(/\\u003d/g,"=")).filter(l=>/=s(?:48|96)(?:-rw)?(?:\s|$)/.test(l)))][0]||null;return c&&ni.set(t,c),c}).catch(()=>null).finally(()=>hr.delete(t));return hr.set(t,a),a},Vx=(t,a)=>{const r=[];a&&r.push(a),typeof t?.icon=="string"&&t.icon.trim()&&r.push(t.icon.trim());const c=Array.isArray(t?.images)?t.images.find(d=>typeof d=="string"&&/^https?:\/\//i.test(d)):null,l=t?.url?.includes("play.google.com/store/apps");if(l&&c&&r.push(c),!l)try{const d=new URL(t.url).hostname;r.push(`https://www.google.com/s2/favicons?domain=${d}&sz=64`)}catch{}return[...new Set(r)]},ks=({link:t})=>{const a=Nx(t),[r,c]=(0,n.useState)(null),[l,d]=(0,n.useState)(0);(0,n.useEffect)(()=>{let N=!0;return c(null),d(0),a&&Ox(a).then(j=>{N&&c(j)}),()=>{N=!1}},[t,a]);const m=Vx(t,r),f=t?.title?.charAt(0).toUpperCase()||"?",x=t?.url?.includes("play.google.com/store/apps")?"🎮":f,g=m[l];return g?(0,e.jsx)("img",{src:g,alt:"",width:"28",height:"28",onError:()=>{l<m.length-1?d(N=>N+1):d(m.length)},style:{display:"block",objectFit:"contain"}}):x},ri=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ii=i.div`
  font-size: 15px;
  font-weight: 700;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,oi=i.div`
  font-size: 11px;
  color: ${t=>t.$isDarkMode?"#fdfdfd":"#050505"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,js=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 2px;
`,Ss=i.span`
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 20px;
  background: ${t=>t.$isDarkMode?"rgba(255,183,108,0.15)":"rgba(255,183,108,0.25)"};
  color: ${t=>t.$isDarkMode?"#ffb36c":"#a05000"};
  font-weight: 600;
`,si=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
`,li=i.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  border: none;
  background: ${t=>t.$color||"#333"};
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.15s, transform 0.12s;
  &:hover { opacity: 0.85; transform: scale(1.03); }
`,Cs=i.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${t=>t.$isDarkMode?"#ffb36c99":"#666"};
  text-transform: uppercase;
  padding: 4px 2px 2px;
`,Bx=i.div`
  height: 1px;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.12)"};
  margin: 6px 0;
`,Hx=i.div`
  position: fixed;
  inset: 0;
  z-index: 10100;
  background: rgba(0,0,0,0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`,Kx=i.div`
  background-color: #0e15200a;
  background-image: ${t=>t.$bgImage?`url(${t.$bgImage})`:t.$bg||"none"};
  background-size: cover;
  background-position: center;
  border: 2px solid #ffb36c77;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.95);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.69) 0%,
      rgba(0, 0, 0, 0.73) 50%,
      rgba(0, 0, 0, 0.68) 100%
    );
    z-index: 1;
  }
`,Ux=i.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 22px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
`,Wx=i.div`
  position: relative;
  z-index: 2;
  flex: 1;
  overflow-y: auto;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #ffb36c66; border-radius: 10px; }
`,qx=i.div`
  position: relative;
  z-index: 2;
  padding: 14px 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
`,Jx=i.div`
  position: relative;
  width: 100%;
  min-height: 140px;
  overflow: hidden;
  background: #05080d00;
  cursor: pointer;

  img.main-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0;
    transition: transform 0.25s ease;
  }

  &:hover img.main-image {
    transform: scale(1.02);
  }

`,Gx=i.button`
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: 220px;
  aspect-ratio: 16 / 9;
  padding: 0;
  overflow: hidden;
  border: 2px solid #ff3b30;
  border-radius: 6px;
  background: #000;
  cursor: pointer;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.7);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0.82;
  }

  span {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: 28px;
    text-shadow: 0 1px 5px #000;
  }

  @media (max-width: 600px) {
    right: 8px;
    bottom: 8px;
    width: 145px;
  }
`,Ql=t=>{if(!t)return null;const a=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return a&&a[2].length===11?a[2]:null},_x=({images:t=[],youtubeTrailer:a,setFullscreenImage:r,imageMap:c,setFullscreenVideo:l})=>{const d=a?Ql(a):null,m=d?`https://img.youtube.com/vi/${d}/mqdefault.jpg`:null,f=t.map(x=>c[x]||x).find(Boolean)||m;return(0,e.jsxs)(Jx,{onClick:x=>{x.stopPropagation(),f&&r(f)},children:[f&&(0,e.jsx)("img",{className:"main-image",src:f,alt:""}),m&&a&&(0,e.jsxs)(Gx,{type:"button","aria-label":"Відкрити трейлер",onClick:x=>{x.stopPropagation(),l(a)},children:[(0,e.jsx)("img",{src:m,alt:""}),(0,e.jsx)("span",{children:"▶"})]})]})},Ts=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  cursor: pointer;
`,Yx=i.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`,di=i.button`
  width: 100%;
  padding: 8px;
  background: ${t=>t.isDarkMode?"black":"white"};
  transition: background-color 0.3s ease; 
  color: ${t=>t.isDarkMode?"white":"black"};
  font-weight: bold;
  cursor: ${t=>t.disabled?"default":"pointer"};
  font-size: 13px;
  &:hover {
    background: ${t=>t.isDarkMode?"#220150":"#ffcc00"};
  }
`,Zx=i.button`
  position: absolute;
  top: 43px;
  gap: 9px;
  right: 7px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 110px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s;
  font-size: 18px;
  backdrop-filter: blur(5px);
  &:hover {
    background: #1d5b69;
    transform: scale(1.1);
  }
`,Xx=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 6, 14, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
  animation: ${t=>t.$isClosing?ex:Qg} 0.3s ease-out
    forwards;
`,Qx=i.div`
  background: linear-gradient(145deg, rgba(16, 20, 32, 0.97) 0%, rgba(8, 10, 18, 0.98) 100%);
  padding: 20px;
  border-radius: 18px;
  width: 95%;
  max-width: 1240px;
  max-height: 88vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid rgba(255, 179, 108, 0.35);
  color: white;
  position: relative;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 35px rgba(255, 179, 108, 0.12);
  animation: ${t=>t.$isClosing?ax:tx} 0.4s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ffb36c 0%, #ff8c2b 100%);
    border-radius: 10px;
  }
`,eh=i.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(220, 38, 38, 0.85);
  backdrop-filter: blur(4px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.2s ease;
  &:hover {
    background: #ef4444;
    transform: scale(1.15);
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  }
`,th=i.button`
  position: absolute;
  top: 6px;
  right: 36px;
  background: rgba(255, 179, 108, 0.9);
  backdrop-filter: blur(4px);
  color: black;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.2s ease;
  &:hover {
    background: #ffa852;
    transform: scale(1.15);
    box-shadow: 0 0 10px rgba(255, 179, 108, 0.5);
  }
`,ed=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  color: #ffb36c;
  text-align: center;
  padding: 4px 6px;
  font-size: 11px;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  z-index: 4;
`,td=i.div`
  position: absolute;
  bottom: ${t=>t.$hasSlots?"20px":"0"};
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 70%, transparent 100%);
  color: white;
  font-size: 11px;
  font-weight: 500;
  padding: 6px 8px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 5;
`,$a=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 179, 108, 0.15);
  padding: 8px 10px;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 179, 108, 0.35);
  }

  label {
    font-size: 11px;
    font-weight: 700;
    color: #ffc996;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  input[type="range"] {
    accent-color: #ffb36c;
    cursor: pointer;
  }
`,ah=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: stretch;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;var nh=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
  padding: 2px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`,rh=i.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${t=>t.$active?"#ffb36c":"rgba(255, 255, 255, 0.1)"};
  box-shadow: ${t=>t.$active?"0 0 16px rgba(255, 179, 108, 0.5), inset 0 0 0 1px #ffb36c":"0 4px 12px rgba(0, 0, 0, 0.35)"};
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: #0d0f19;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${t=>t.$active?"#ffb36c":"rgba(255, 179, 108, 0.6)"};
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 179, 108, 0.25);
    ${td}, ${ed} {
      opacity: 1;
    }
  }
`,ih=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
  display: block;
`,oh=i.div`
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`,ci=i.button`
  background: rgba(10, 12, 22, 0.75);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  font-size: 13px;
  color: ${t=>t.$color||"#fff"};
  font-weight: 900;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.15);
    background: rgba(18, 22, 38, 0.95);
    border-color: #ffb36c;
    box-shadow: 0 0 10px rgba(255, 179, 108, 0.3);
  }
`,pi=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(8, 10, 18, 0.85);
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  z-index: 7;
`,Wa=i.button`
  flex: 1;
  background: ${t=>t.$active?"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)":"transparent"};
  color: ${t=>t.$active?"#000":"#ccc"};
  border: none;
  padding: 3px 2px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    color: ${t=>t.$active?"#000":"#fff"};
    background: ${t=>t.$active?"linear-gradient(135deg, #ffc48c 0%, #ffa047 100%)":"rgba(255, 179, 108, 0.2)"};
  }
`,sh=i.div`
  position: relative;
  border: 2px dashed rgba(255, 179, 108, 0.4);
  padding: 16px 20px;
  text-align: center;
  border-radius: 14px;
  cursor: pointer;
  color: #ddd;
  font-size: 13px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: rgba(255, 179, 108, 0.06);
    border-color: #ffb36c;
    color: #fff;
    box-shadow: 0 0 15px rgba(255, 179, 108, 0.15);
  }
`,As=i.button`
  background: rgba(255, 179, 108, 0.1);
  color: ${t=>t.$danger?"#ff6b6b":"#ffb36c"};
  border: 1px solid ${t=>t.$danger?"rgba(255, 107, 107, 0.3)":"rgba(255, 179, 108, 0.3)"};
  border-radius: 8px;
  padding: 5px 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: ${t=>t.$danger?"rgba(255, 107, 107, 0.25)":"rgba(255, 179, 108, 0.25)"};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${t=>t.$danger?"rgba(255, 107, 107, 0.2)":"rgba(255, 179, 108, 0.2)"};
  }
  &:active {
    transform: translateY(0);
  }
`,lh=i.input`
  padding: 7px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 179, 108, 0.3);
  background: rgba(255, 255, 255, 0.04);
  color: white;
  width: 100%;
  max-width: 320px;
  font-size: 12px;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #8a8d9b;
  }
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffb36c;
    box-shadow: 0 0 12px rgba(255, 179, 108, 0.25);
  }
`,ui=i.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 179, 108, 0.35), transparent);
  margin: 8px 0;
  width: 100%;
`,dh=i.h3`
  font-weight: 700;
  color: #ffb36c;
  margin: 4px 0;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.3px;
`,pn=({content:t,children:a,placement:r="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,n.useState)(!1),m=(0,n.useRef)(null),{refs:f,floatingStyles:x,context:g}=Rn({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:An,middleware:[zn(8),Fn(),In({padding:5}),Tn({element:m})]}),{isMounted:N,styles:j}=Cn(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),A=Sn(g,{move:!1}),F=$n(g),L=jn(g),z=En(g,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:h}=Dn([A,F,L,z]);if(!t)return a;const w=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...y(),style:{display:"inline-flex"},children:a}),N&&(0,e.jsx)(Mn,{children:(0,e.jsxs)(Xg,{ref:f.setFloating,$isDarkMode:c,style:{...x,...j},...h(),children:[t,(0,e.jsx)(Ln,{ref:m,context:g,fill:w,stroke:"#00acb9",strokeWidth:1})]})})]})},fi=[{label:"UTC (Всесвітній час)",value:"UTC"},{label:"GMT (Лондон, Дублін)",value:"Europe/London"},{label:"UTC+1 (Берлін, Париж, Рим, Варшава)",value:"Europe/Berlin"},{label:"UTC+2 (Київ, Хельсінкі, Каїр, Бухарест)",value:"Europe/Kyiv"},{label:"UTC+3 (Стамбул, Ер-Ріяд, Найробі)",value:"Europe/Istanbul"},{label:"UTC+4 (Дубай, Баку, Тбілісі)",value:"Asia/Dubai"},{label:"UTC+5 (Ісламабад, Ташкент, Мальдіви)",value:"Asia/Karachi"},{label:"UTC+6 (Астана, Дакка, Алмати)",value:"Asia/Almaty"},{label:"UTC+7 (Бангкок, Джакарта, Ханой)",value:"Asia/Bangkok"},{label:"UTC+8 (Пекін, Сінгапур, Перт)",value:"Asia/Shanghai"},{label:"UTC+9 (Токіо, Сеул, Іркутськ)",value:"Asia/Tokyo"},{label:"UTC+10 (Сідней, Мельбурн, Порт-Морсбі)",value:"Australia/Sydney"},{label:"UTC+11 (Номеа, Соломонові Острови)",value:"Pacific/Noumea"},{label:"UTC+12 (Окленд, Фіджі)",value:"Pacific/Auckland"},{label:"UTC-1 (Азорські острови, Кабо-Верде)",value:"Atlantic/Azores"},{label:"UTC-2 (Південна Джорджія)",value:"Atlantic/South_Georgia"},{label:"UTC-3 (Буенос-Айрес, Бразиліа, Гренландія)",value:"America/Argentina/Buenos_Aires"},{label:"UTC-4 (Сантьяго, Галіфакс, Каракас)",value:"America/Santiago"},{label:"UTC-5 (Нью-Йорк, Торонто, Богота)",value:"America/New_York"},{label:"UTC-6 (Чикаго, Мехіко, Вінніпег)",value:"America/Chicago"},{label:"UTC-7 (Денвер, Едмонтон, Калгарі)",value:"America/Denver"},{label:"UTC-8 (Лос-Анджелес, Ванкувер, Сан-Франциско)",value:"America/Los_Angeles"},{label:"UTC-9 (Аляска, Анкоридж)",value:"America/Anchorage"},{label:"UTC-10 (Гаваї, Гонолулу)",value:"Pacific/Honolulu"},{label:"UTC-11 (Паго-Паго, Алофі)",value:"Pacific/Pago_Pago"},{label:"UTC-12 (Острів Бейкер, Острів Гоуленд)",value:"Etc/GMT+12"},{label:"EST (Північна Америка: Східний час)",value:"America/New_York"},{label:"CST (Північна Америка: Центральний час)",value:"America/Chicago"},{label:"MST (Північна Америка: Гірський час)",value:"America/Denver"},{label:"PST (Північна Америка: Тихоокеанський час)",value:"America/Los_Angeles"},{label:"CET (Центральна Європа: Прага, Мадрид)",value:"Europe/Berlin"},{label:"EET (Східна Європа: Софія, Таллінн)",value:"Europe/Kyiv"},{label:"IST (Індія, Нью-Делі)",value:"Asia/Kolkata"},{label:"JST (Японія, Токіо)",value:"Asia/Tokyo"},{label:"AEST (Східна Австралія, Брісбен)",value:"Australia/Brisbane"},{label:"Інший (ввести вручну)",value:"custom_input"}],ad={planes:Bu,village:$i,herotext:Kl,meridian:Hu,castle:Hl,hills:Ri},gi=({isStickyBgMode:t,heroDateString:a,onAddCity:r,startAnimation:c,user:l,isDarkMode:d,checkWeatherDanger:m,heroBg:f,setHeroBg:x,heroBg2:g,setHeroBg2:N,heroBg3:j,setHeroBg3:A,heroBg4:F,setHeroBg4:L,customHeroBgs:z=[],setCustomHeroBgs:y,heroBgMode:h,setHeroBgMode:w,heroOverlayOpacity:S,setHeroOverlayOpacity:k,bgRatings:K,setBgRatings:H,slideshowInterval:te,setSlideshowInterval:ee,slideshowTransition:fe,setSlideshowTransition:Q,filterCategory:M,setFilterCategory:O,heroBgZoom:ae,setHeroBgZoom:ge,heroBgRotation:ce,setHeroBgRotation:Y,heroBgBlur:_,setHeroBgBlur:me,heroBgPixelation:re,setHeroBgPixelation:Te,heroBgBlurType:Ae,setHeroBgBlurType:ft,heroBgFocal1:Ct,setHeroBgFocal1:Jt,heroBgFocal2:gt,setHeroBgFocal2:Be,heroBgFocal3:qe,setHeroBgFocal3:Nt,heroBgFocal4:Ot,setHeroBgFocal4:Je,heroBgPanEnabled:Tt,setHeroBgPanEnabled:At,heroBgPanSpeed:wt,setHeroBgPanSpeed:xt,videoPlaybackSpeed:it,setVideoPlaybackSpeed:Xe,screenshots:ne=[],selectedTimezone:Ie,setSelectedTimezone:Fe,customHolidayName:st,setCustomHolidayName:Gt})=>{zi();const{registerRef:Vt,isActive:_t}=Gn?.()||{registerRef:()=>{}},Ft=kr(o=>o.calendar?.customDays||[]),[fa,Ma]=(0,n.useState)({date:"",reason:""}),[Le,ot]=(0,n.useState)(""),Yt=(0,n.useRef)(null),[Zt,Xt]=(0,n.useState)(null);(0,n.useEffect)(()=>{const o=()=>{ot("Конотоп"),setTimeout(()=>{r({name:"Конотоп",fullName:"Конотоп (UA)",lat:51.24,lon:33.2})},2e3)};return window.addEventListener("domino-auto-input-konotop",o),()=>window.removeEventListener("domino-auto-input-konotop",o)},[r]),(0,n.useEffect)(()=>{if(Zt!==null&&Yt.current){const o=Yt.current.querySelector(`[data-id="${Zt}"]`);o&&Yt.current.scrollTo({top:o.offsetTop,behavior:"smooth"})}},[Zt]);const[ht,Me]=(0,n.useState)([]),[ka,Se]=(0,n.useState)(3),[tt,v]=(0,n.useState)(!1),[E,q]=(0,n.useState)(""),[pe,He]=(0,n.useState)(300),Ge=1e3,[he,ve]=(0,n.useState)(0);(0,n.useEffect)(()=>{(async()=>{try{const I=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,V=await u.default.getItem(I);ve(Number(V)||0)}catch(I){console.error("Failed to load hero uploaded count:",I)}})()},[l]);const[Lt,mt]=(0,n.useState)(!1),[be,vt]=(0,n.useState)(!1),[Pe,Bt]=(0,n.useState)(null),[ke,$t]=(0,n.useState)(null),[kt,It]=(0,n.useState)(!1),[Da,ja]=(0,n.useState)(!0),[ie,dt]=(0,n.useState)("city");(0,n.useEffect)(()=>(Lt||Pe||kt||ke||ie==="links"?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[Lt,Pe,kt,ke,ie]),(0,n.useEffect)(()=>{const o=I=>{if(I.key==="Escape"){if(ke){$t(null);return}ie==="links"&&(dt("city"),Me([]),v(!1))}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[ke,ie]);const[aa,J]=(0,n.useState)(!1),[oe,_e]=(0,n.useState)(null),[Ne,Oe]=(0,n.useState)(null),[xe,Ye]=(0,n.useState)([]),[Ke,Ht]=(0,n.useState)([]),[ct,za]=(0,n.useState)(!1),[Kt,na]=(0,n.useState)(""),[Ga,Qt]=(0,n.useState)(""),[Pa,Ra]=(0,n.useState)("rating"),[ra,Mt]=(0,n.useState)(1),Fa=1,[Et,rn]=(0,n.useState)("default"),[jt,Na]=(0,n.useState)([]),[ia,ga]=(0,n.useState)(0),[Oa,Va]=(0,n.useState)(!1),[oa,$e]=(0,n.useState)(""),ea=o=>!kn.some(I=>I.src===o),Ve=(0,n.useMemo)(()=>[...kn,...z||[],...(ne||[]).map(o=>({src:o.image,name:`Скріншот: ${o.trackName}`,category:"Скріншоти"}))],[z,ne]),Ue=(0,n.useCallback)((o,I=1)=>{const V=jt.findIndex(Z=>Z.src===o);if(h==="random"){(ra===2?2:1)==2?N(o):x(o),V!==-1&&ga(V);return}I===2?N(o):I===3?A(o):I===4?L(o):x(o)},[ra,h,jt,x,N,A,L]),_a=(0,n.useCallback)(o=>{if(!o||o==="custom_input")return null;try{const I=new Date,V=new Intl.DateTimeFormat("uk",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:o}).format(I),Z=parseInt(V.split(":")[0]);return{timeStr:V,isDay:Z>=6&&Z<20}}catch{return null}},[]),sa=(0,n.useCallback)(o=>{if(o==="UTC")return 0;if(o==="custom_input")return 999;try{const I=new Date,V=I.toLocaleString("en-US",{timeZone:o}),Z=new Date(V),X=I.toLocaleString("en-US",{timeZone:"UTC"});return(Z-new Date(X))/6e4}catch{return 0}},[]),on=(0,n.useMemo)(()=>{let o=[...fi];return Et==="alpha"?o.sort((I,V)=>I.label.localeCompare(V.label)):Et==="offset"&&o.sort((I,V)=>sa(I.value)-sa(V.value)),o},[Et,sa]);(0,n.useEffect)(()=>{if(h==="slideshow-2"&&f&&g){Mt(1);const o=setInterval(()=>{Mt(I=>I===1?2:1)},te*1e3);return()=>clearInterval(o)}else if(h==="slideshow-3"&&f&&g&&j){Mt(1);const o=setInterval(()=>{Mt(I=>I===3?1:I+1)},te*1e3);return()=>clearInterval(o)}else if(h==="slideshow-4"&&f&&g&&j&&F){Mt(1);const o=setInterval(()=>{Mt(I=>I===4?1:I+1)},te*1e3);return()=>clearInterval(o)}else if(h==="random"){if(jt.length===0&&Ve.length>0){const o=fr(Ve);Na(o),ga(0),o[0]&&x(o[0].src);return}if(jt.length>0){const o=setInterval(()=>{ga(I=>{const V=(I+1)%jt.length;return Mt(Z=>{const X=Z===1?2:1;return X===1?x(jt[V].src):N(jt[V].src),X}),V})},te*1e3);return()=>clearInterval(o)}}},[h,Ve,te,jt,x,N]),(0,n.useEffect)(()=>{if(h==="random"&&Ve.length>0&&jt.length!==Ve.length){const o=fr(Ve);Na(o),ga(0),o[0]&&(Ue(o[0].src),Mt(1))}},[Ve.length,h]),(0,n.useEffect)(()=>{fi.some(o=>o.value===Ie)?($e(""),Va(!1)):($e(Ie),Va(!0))},[Ie]);const Ut=()=>{vt(!0),setTimeout(()=>{mt(!1),vt(!1)},350)},la=(0,n.useRef)(null),Ba=[...(Ve||[]).filter(o=>{const I=M==="all"||(M==="custom"?ea(o.src):o.category===M),V=(o.name||"").toLowerCase().includes(E.toLowerCase());return I&&V})].sort((o,I)=>{if(Pa==="az")return o.name.localeCompare(I.name);if(Pa==="za")return I.name.localeCompare(o.name);const V=K[o.src]||0,Z=K[I.src]||0;return V!==Z?Z-V:o.name.localeCompare(I.name)}),St=Ba.slice(0,pe),De=()=>{k(.3),ge(1),Y(0),me(0),Jt({x:50,y:50}),Be({x:50,y:50}),At(!1),xt(6),Xe&&Xe(1)},da=o=>{H(I=>{const V=((I[o]||0)+1)%3;return{...I,[o]:V}})},Ya=(0,n.useRef)(null),Ha=async o=>{if(!o)return;const I=o.type.startsWith("image/"),V=o.type.startsWith("video/");if(!I&&!V)return;try{const X=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`;if(Number(await u.default.getItem(X)||0)>=Ge){alert(`Ліміт досягнуто — не більше ${Ge} карток на добу.`);return}}catch(X){console.error("Failed to check hero daily limit:",X)}if(V){if(o.size>20971520){alert("Відео занадто велике! Максимум 20мб для стабільності.");return}y(X=>[{src:o,name:o.name,category:"Ваші відео"},...X]),x(o);try{const X=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,se=Number(await u.default.getItem(X)||0)+1;await u.default.setItem(X,se),ve(se)}catch(X){console.error("Failed to update hero uploaded count:",X)}return}const Z=new FileReader;Z.onload=X=>{const se=new Image;se.src=X.target.result,se.onload=()=>{const We=document.createElement("canvas"),Qe=1200,Ca=Qe/se.width;We.width=Qe,We.height=se.height*Ca,We.getContext("2d").drawImage(se,0,0,We.width,We.height),We.toBlob(async hn=>{try{const Ta=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,Wt=Number(await u.default.getItem(Ta)||0);if(Wt>=Ge){alert(`Ліміт досягнуто — не більше ${Ge} карток на добу.`);return}const dn=Wt+1;await u.default.setItem(Ta,dn),ve(dn)}catch(Ta){console.error("Failed to update hero uploaded count:",Ta)}y(Ta=>[{src:hn,name:o.name,category:"Ваші картинки"},...Ta]),x(hn)},"image/jpeg",.7)}}},sn=o=>{o.preventDefault()},Pn=o=>{o.preventDefault();const I=o.dataTransfer.files[0];Ha(I)},[ln,Sa]=(0,n.useState)([]),[xn,s]=(0,n.useState)(!1),[p,P]=(0,n.useState)(!1),[D,T]=(0,n.useState)(""),C=(0,n.useRef)(null),de="5104647d3e574f4a3f23c0aa092eb2b9";(0,n.useEffect)(()=>{const o=I=>{I.type==="mousedown"&&I.button!==0||I.target===document.body||I.target===document.documentElement||C.current&&!C.current.contains(I.target)&&v(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]);const je=async(o,I,V=!1)=>{const Z=I.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(Z.length<2){Me([]),v(!1);return}const X=Ii.filter(se=>se.name.toLowerCase().includes(Z)||se.aliases.some(We=>We.toLowerCase().includes(Z))).map(se=>({name:se.name,state:"Україна",country:"UA",lat:se.lat,lon:se.lon,isLocal:!0}));X.length>0&&!V&&(Me(X),v(!0));try{const se=await(await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(Z)}&limit=${o}&appid=${de}`)).json(),We=Array.isArray(se)?se:[];ja(We.length>=o),Me(Qe=>px(V?Qe:X,We)),v(!0)}catch(se){console.error("Помилка API:",se),X.length>0&&(Me(X),v(!0))}};(0,n.useEffect)(()=>{u.default.getItem("pinnedLinks").then(o=>{o&&Ye(o)})},[]);const pt=o=>{Ye(I=>{let V;return I.includes(o)?V=I.filter(Z=>Z!==o):V=[o,...I].slice(0,5),u.default.setItem("pinnedLinks",V),V})},xa=(0,n.useCallback)(async o=>{const I=o.trim();if(!I){Ht([]);return}za(!0);try{const V=await fetch(Ul(I));if(!V.ok)throw new Error(`Wikipedia request failed: ${V.status}`);const Z=((await V.json())?.query?.search||[]).map(X=>({id:X.pageid,title:X.title,snippet:Wl(X.snippet),url:`https://uk.wikipedia.org/wiki/${encodeURIComponent(X.title).replace(/%20/g,"_")}`}));Ht(Z)}catch(V){console.error("Wikipedia search error:",V),Ht([])}finally{za(!1)}},[]);(0,n.useEffect)(()=>{if(ie!=="links"){Ht([]),za(!1);return}const o=setTimeout(()=>{xa(Le)},350);return()=>clearTimeout(o)},[ie,Le,xa]),(0,n.useEffect)(()=>{Se(3),ja(!0);const o=setTimeout(()=>{Le&&je(3,Le,!1)},500);return()=>clearTimeout(o)},[Le]);const at=o=>{o.preventDefault(),o.stopPropagation();const I=ka+3;Se(I),je(I,Le,!0)},ha=async()=>{const o=parseFloat(Kt),I=parseFloat(Ga);if(isNaN(o)||isNaN(I)){alert("Будь ласка, введіть правильні координати");return}if(o<-90||o>90){alert("Широта має бути від -90 до 90");return}if(I<-180||I>180){alert("Довгота має бути від -180 до +180");return}const V={name:"Обрана точка",state:`Широта: ${o}`,country:`Довгота: ${I}`,lat:o,lon:I,isManual:!0};try{T("🔍 Шукаємо за вказаними координатами...");const Z=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${o}&lon=${I}&limit=10&appid=${de}`)).json();if(Z&&Z.length>0){Sa([V,...Z]),s(!0),T("");return}P(!0),s(!0),Sa([V]),T("Нічого не знайшли точно — шукаємо найближче...");const X=1e4,se=Date.now();let We=!1;e:for(let Qe=1;Qe<=15&&!We;Qe++){const Ca=[[o,Math.max(-180,Math.min(180,I+Qe))],[o,Math.max(-180,Math.min(180,I-Qe))],[Math.max(-90,Math.min(90,o+Qe)),I],[Math.max(-90,Math.min(90,o-Qe)),I]];for(const[hn,Ta]of Ca){if(Date.now()-se>=X)break e;T(`🔎 Перевіряємо: ±${Qe}° (шир: ${hn.toFixed(1)}°, довг: ${Ta.toFixed(1)}°)...`);try{const Wt=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${hn}&lon=${Ta}&limit=4&appid=${de}`)).json();if(Wt&&Wt.length>0){Sa([V,...Wt]),T(`✅ Знайдено поруч (відхилення ~${Qe}°)`),We=!0;break e}}catch{}}}if(!We){const Qe=((Date.now()-se)/1e3).toFixed(1);T(`⚠️ Пошук завершено (${Qe}с) — навколо немає населених пунктів. Можна додати точку вручну.`)}}catch(Z){console.error("Помилка при пошуку за координатами:",Z),Sa([V]),s(!0),T("❌ Помилка запиту. Спробуйте ще раз.")}finally{P(!1)}},ut=o=>{r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),na(""),Qt(""),s(!1),Sa([])},Ce=o=>{r({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),ot(""),Me([]),v(!1)},bt=(0,n.useMemo)(()=>{const o=new Date,I=o.toISOString().split("T")[0];if(l?.birthDate){const[,X,se]=l.birthDate.split("-");if(o.getDate()===parseInt(se)&&o.getMonth()+1===parseInt(X))return{active:!0,color:"#ff5252",label:"З ДНЕМ НАРОДЖЕННЯ!"}}const V=Ft.find(X=>X.date===I);if(V)return{active:!0,color:"#fff59d",label:V.reason.toUpperCase()+"! 🎉"};const Z=o.getDay();return Z===0||Z===6?{active:!0,color:"#ffff00"}:{active:!1,color:"#fff59d",label:""}},[Ft,l]).active;return(0,n.useMemo)(()=>bt?Array.from({length:25}).map((o,I)=>({id:I,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,x:`${(Math.random()-.5)*100}px`,y:`${(Math.random()-.5)*100}px`,duration:`${3+Math.random()*4}s`,delay:`${Math.random()*5}s`})):[],[bt]),(0,e.jsxs)(ix,{children:[(0,e.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none",visibility:"hidden"},children:(0,e.jsxs)("filter",{id:"pixelate-hero",x:"0",y:"0",width:"100%",height:"100%",children:[(0,e.jsx)("feFlood",{x:"0",y:"0",height:"1",width:"1"}),(0,e.jsx)("feComposite",{width:Math.max(1,re*2),height:Math.max(1,re*2)}),(0,e.jsx)("feTile",{result:"tiles"}),(0,e.jsx)("feComposite",{in:"SourceGraphic",in2:"tiles",operator:"in"}),(0,e.jsx)("feMorphology",{operator:"dilate",radius:re})]})}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:f,$active:h==="static"||ra===1,$transition:fe,$zoom:ae,$rotation:ce,$rotationScale:Fa,$blur:_,$pixelation:re,$blurType:Ae,$focalX:Ct?.x||50,$focalY:Ct?.y||50,$panEnabled:Tt&&ae>1,$panSpeed:wt,$videoStart:Ve.find(o=>o.src===f)?.start,$videoEnd:Ve.find(o=>o.src===f)?.end,$videoPlaybackSpeed:it}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:g,$active:(h==="slideshow-2"||h==="slideshow-3"||h==="slideshow-4"||h==="random")&&ra===2,$transition:fe,$zoom:ae,$rotation:ce,$rotationScale:Fa,$blur:_,$pixelation:re,$blurType:Ae,$focalX:gt?.x||50,$focalY:gt?.y||50,$panEnabled:Tt&&ae>1,$panSpeed:wt,$videoStart:Ve.find(o=>o.src===g)?.start,$videoEnd:Ve.find(o=>o.src===g)?.end,$videoPlaybackSpeed:it}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:j,$active:(h==="slideshow-3"||h==="slideshow-4")&&ra===3,$transition:fe,$zoom:ae,$rotation:ce,$rotationScale:Fa,$blur:_,$pixelation:re,$blurType:Ae,$focalX:qe?.x||50,$focalY:qe?.y||50,$panEnabled:Tt&&ae>1,$panSpeed:wt,$videoStart:Ve.find(o=>o.src===j)?.start,$videoEnd:Ve.find(o=>o.src===j)?.end,$videoPlaybackSpeed:it}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:F,$active:h==="slideshow-4"&&ra===4,$transition:fe,$zoom:ae,$rotation:ce,$rotationScale:Fa,$blur:_,$pixelation:re,$blurType:Ae,$focalX:Ot?.x||50,$focalY:Ot?.y||50,$panEnabled:Tt&&ae>1,$panSpeed:wt,$videoStart:Ve.find(o=>o.src===F)?.start,$videoEnd:Ve.find(o=>o.src===F)?.end,$videoPlaybackSpeed:it}),(0,e.jsx)(gx,{$opacity:S,$isStickyBgMode:t}),(0,e.jsxs)(Zx,{ref:o=>Vt("changeBgButton",o),onClick:()=>mt(!0),children:[(0,e.jsx)(sc,{}),(0,e.jsx)("p",{style:{fontSize:"11px"},children:"Змінити фон?"})]}),(0,e.jsx)(ox,{$image:Kl,$start:c}),(0,e.jsxs)(sx,{$start:c,children:[(0,e.jsx)(xx,{children:(0,e.jsx)(hx,{children:(0,e.jsx)(mx,{children:(0,e.jsxs)(bx,{ref:la,children:[a,(0,e.jsx)(pn,{content:"Змінити часовий пояс",isDarkMode:d,children:(0,e.jsx)(yx,{ref:o=>Vt("timezoneButton",o),onClick:()=>It(!kt),"aria-label":"Змінити часовий пояс",children:(0,e.jsx)(Bs,{})})}),kt&&(0,Cr.createPortal)((0,e.jsxs)(wx,{children:[(0,e.jsxs)(Sx,{children:[(0,e.jsx)(Tx,{type:"button",onClick:()=>It(!1),"aria-label":"Закрити список часових поясів",children:"×"}),(0,e.jsx)(Cx,{children:"Часовий пояс"})]}),(0,e.jsxs)(Ax,{children:[(0,e.jsx)(ys,{$active:Et==="default",onClick:()=>rn("default"),children:"За замовчуванням"}),(0,e.jsx)(ys,{$active:Et==="offset",onClick:()=>rn("offset"),children:"UTC +/-"})]}),(0,e.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"0 5px 10px"},children:[on.map(o=>{const I=Ie===o.value||o.value==="custom_input"&&Oa,V=_a(o.value);return(0,e.jsx)(vx,{$selected:I,onClick:()=>{o.value==="custom_input"?(Va(!0),fi.some(Z=>Z.value===Ie)?$e(""):$e(Ie)):(Va(!1),Fe(o.value),u.default.setItem("selected_timezone",o.value),It(!1))},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,e.jsx)("span",{children:o.label}),V&&(0,e.jsxs)("span",{style:{fontSize:"16px",opacity:.9,display:"flex",gap:"10px",whiteSpace:"nowrap",marginLeft:"12px",color:V.isDay?"#ffd54f":"#90caf9"},children:[V.isDay?(0,e.jsx)(Ea,{}):(0,e.jsx)(qa,{}),(0,e.jsx)("p",{children:V.timeStr})]})]})},o.value)}),Oa&&(0,e.jsx)("div",{style:{padding:"12px 0"},children:(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)("input",{type:"text",value:oa,onChange:o=>$e(o.target.value),placeholder:"Наприклад: Europe/Warsaw",style:{width:"100%",padding:"10px 110px 10px 10px",borderRadius:"5px",border:"1px solid #ffb36c",background:"#111",color:"#fff",fontSize:"14px",boxSizing:"border-box"}}),(0,e.jsx)("button",{type:"button",onClick:()=>{if(oa.trim())try{Intl.DateTimeFormat("en",{timeZone:oa.trim()}),Fe(oa.trim()),u.default.setItem("selected_timezone",oa.trim()),It(!1)}catch{xs("Невірний формат часового поясу. Спробуйте, наприклад, 'Europe/Kyiv' або 'America/New_York'.",d)}else xs("Будь ласка, введіть часовий пояс.",d)},style:{position:"absolute",right:"4px",top:"4px",bottom:"4px",padding:"0 12px",background:"#ffb36c",border:"none",borderRadius:"3px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",color:"#1e1e1e"},children:"Застосувати"})]})})]})]}),document.body)]})})})}),(0,e.jsx)(kx,{ref:C,children:ie==="city"?(0,e.jsx)(Ix,{children:(0,e.jsxs)(Mx,{children:[(0,e.jsxs)(Zr,{children:[(0,e.jsx)(pn,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(Xr,{onClick:()=>J(o=>!o),"aria-label":"Вибрати режим пошуку",children:(0,e.jsx)(Qn,{})})}),aa&&(0,e.jsxs)(Qr,{$isDarkMode:d,children:[(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="city",onClick:()=>{dt("city"),J(!1),na(""),Qt(""),Me([]),v(!1)},children:[(0,e.jsx)(Qn,{})," За назвою міста"]}),(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="coordinates",onClick:()=>{dt("coordinates"),J(!1),ot(""),Me([]),v(!1)},children:[(0,e.jsx)(er,{})," Координати"]}),(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="links",onClick:()=>{dt("links"),J(!1),ot(""),Me([]),v(!1),Xt(null)},children:[(0,e.jsx)(tr,{}),"  Посилання"]})]})]}),(0,e.jsx)(Dx,{ref:o=>Vt("heroInput",o),value:Le,$isDarkMode:d,onChange:o=>{ot(o.target.value),window.dispatchEvent(new CustomEvent("domino-hero-input-change",{detail:{value:o.target.value}}))},onFocus:()=>ht.length>0&&v(!0),placeholder:"Уведіть місто, село.",type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:!1,name:"hero-city-search",inputMode:"search",enterKeyHint:"search","aria-label":"Пошук міста","data-form-type":"other","data-lpignore":"true"}),tt&&ht.length>0&&(0,e.jsxs)(ws,{children:[ht.map((o,I)=>(0,e.jsxs)(vs,{onMouseDown:V=>{V.preventDefault(),Ce(o)},onTouchEnd:V=>{V.preventDefault(),Ce(o)},onClick:()=>Ce(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#fffcfc"},children:["Широта: ",o.lat.toFixed(2),"°, Довгота: ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${I}`)),Da?(0,e.jsx)(di,{isDarkMode:d,onClick:at,children:"Завантажити ще варіанти"}):(0,e.jsx)(di,{isDarkMode:d,disabled:!0,children:"Кінець списку"})]}),(0,e.jsx)(ei,{onTouchStart:o=>{o.preventDefault(),ht[0]&&Ce(ht[0])},onClick:()=>{ht[0]&&Ce(ht[0])},children:"⌕"})]})}):ie==="links"?null:(0,e.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"5px",position:"relative"},children:[(0,e.jsxs)(jx,{style:{alignItems:"flex-start"},children:[(0,e.jsxs)(Zr,{style:{alignSelf:"flex-start"},children:[(0,e.jsx)(pn,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(Xr,{onClick:()=>J(o=>!o),"aria-label":"Вибрати режим пошуку",style:{borderRadius:"8px 0 0 8px",height:"30px"},children:(0,e.jsx)(er,{})})}),aa&&(0,e.jsxs)(Qr,{$isDarkMode:d,children:[(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="city",onClick:()=>{dt("city"),J(!1),na(""),Qt(""),Me([]),v(!1)},children:[(0,e.jsx)(Qn,{}),"  За назвою міста"]}),(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="coordinates",onClick:()=>{dt("coordinates"),J(!1),ot(""),Me([]),v(!1)},children:[(0,e.jsx)(er,{}),"  Координати"]}),(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="links",onClick:()=>{dt("links"),J(!1),ot(""),Me([]),v(!1),Xt(null)},children:[(0,e.jsx)(tr,{}),"   Посилання"]})]})]}),(0,e.jsx)(bs,{children:(0,e.jsx)("input",{type:"number",value:Kt,onChange:o=>na(o.target.value),placeholder:"Широта: Від -90° до +90°",$isDarkMode:d,disabled:p,min:"-90",max:"90",step:"0.01"})}),(0,e.jsx)(bs,{children:(0,e.jsx)("input",{type:"number",value:Ga,onChange:o=>Qt(o.target.value),$isDarkMode:d,placeholder:"Довгота: Від -180° до +180°",disabled:p,min:"-180",max:"180",step:"0.01"})}),(0,e.jsx)(ei,{onClick:ha,disabled:p,style:{alignSelf:"flex-start"},children:p?"…":"⌕"})]}),D&&(0,e.jsxs)("div",{style:{color:D.startsWith("✅")?"#00e676":D.startsWith("❌")?"#ff5252":D.startsWith("⚠️")?"#ffb36c":"#00eaff",fontSize:"11px",fontWeight:"bold",textAlign:"center",padding:"4px 10px",background:"rgba(0,0,0,0.65)",borderRadius:"6px",maxWidth:"340px",margin:"4px auto 0",backdropFilter:"blur(4px)",lineHeight:1.4},children:[p&&(0,e.jsx)("span",{style:{marginRight:"6px"},children:"⟳"}),D]}),xn&&(0,e.jsxs)(ws,{style:{width:"auto",minWidth:"300px",marginTop:"6px",left:"50%",transform:"translateX(-50%)",position:"absolute"},children:[(0,e.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"6px",textAlign:"center",fontSize:"12px"},children:p?"🔄 Шукаємо поруч…":ln.length>1?"📍 Знайдено поруч з координатами:":"📍 Лише точка за координатами (міст не знайдено)"}),ln.map((o,I)=>(0,e.jsxs)(vs,{onMouseDown:V=>{V.preventDefault(),ut(o)},onClick:()=>ut(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#666"},children:[o.lat.toFixed(2),"°, ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${I}`)),(0,e.jsx)("button",{onClick:()=>{s(!1),Sa([]),T("")},style:{width:"100%",padding:"8px",background:"#f0f0f0",border:"1px solid #ccc",borderRadius:"8px",cursor:"pointer",marginTop:"10px",fontSize:"12px"},children:"✕ Закрити"})]})]})}),(0,e.jsx)("div",{style:{marginTop:"250px",zIndex:90},children:(0,e.jsx)(Xl,{user:l,isDarkMode:d,isStickyBgMode:t})})]}),Lt&&(0,e.jsx)(Xx,{$isClosing:be,onClick:Ut,children:(0,e.jsxs)(Qx,{$isClosing:be,onClick:o=>o.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px",borderBottom:"1px solid rgba(255, 179, 108, 0.2)"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,e.jsx)("div",{style:{background:"linear-gradient(135deg, rgba(255, 179, 108, 0.25), rgba(255, 140, 43, 0.1))",border:"1px solid rgba(255, 179, 108, 0.4)",borderRadius:"10px",padding:"6px 10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"},children:"✨"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{margin:0,fontSize:"16px",fontWeight:"700",background:"linear-gradient(90deg, #ffb36c 0%, #ffe3b8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"0.4px"},children:"Налаштування фону та вигляду"}),(0,e.jsx)("span",{style:{fontSize:"11px",color:"#8a8d9b"},children:"Персоналізуйте теми, слайд-шоу та візуальні ефекти"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,e.jsx)(As,{onClick:De,children:"🔄 Скинути"}),(0,e.jsx)(As,{$danger:!0,onClick:Ut,children:"✖ Закрити"})]})]}),(0,e.jsxs)(ah,{children:[(0,e.jsxs)($a,{children:[(0,e.jsx)("label",{children:"🎞️ Режим фону:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",width:"100%"},children:[(0,e.jsxs)("select",{value:h,onChange:o=>{if(w(o.target.value),o.target.value==="random"){const I=fr(Ve);Na(I),ga(0),I[0]&&Ue(I[0].src)}Mt(1)},style:{background:"rgba(10, 14, 26, 0.95)",color:"#fff",fontSize:"12px",fontWeight:"500",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",padding:"4px 6px",flex:1,outline:"none"},children:[(0,e.jsx)("option",{value:"static",children:"Статичний (1 фото)"}),(0,e.jsx)("option",{value:"slideshow-2",children:"Слайд-шоу (2 фото)"}),(0,e.jsx)("option",{value:"slideshow-3",children:"Слайд-шоу (3 фото)"}),(0,e.jsx)("option",{value:"slideshow-4",children:"Слайд-шоу (4 фото)"}),(0,e.jsx)("option",{value:"random",children:"Випадковий (усі фото)"})]}),h==="random"&&(0,e.jsx)(pn,{content:"Перемішати та скинути чергу",isDarkMode:d,children:(0,e.jsx)("button",{onClick:()=>{const o=fr(Ve);Na(o),ga(0),o[0]&&(Ue(o[0].src),Mt(1))},"aria-label":"Перемішати та скинути чергу",style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",border:"none",borderRadius:"6px",color:"#000",padding:"2px 8px",cursor:"pointer",fontWeight:"bold",fontSize:"11px",whiteSpace:"nowrap"},children:"🔀"})})]})]}),(0,e.jsxs)($a,{children:[(0,e.jsxs)("label",{children:["🌘 Затемнення: ",(S*100).toFixed(0),"%"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:S,onChange:o=>k(parseFloat(o.target.value))})]}),(0,e.jsxs)($a,{children:[(0,e.jsxs)("label",{children:["🔍 Наближення: ",ae.toFixed(2),"x"]}),(0,e.jsx)("input",{type:"range",min:"1",max:"2",step:"0.01",value:ae,onChange:o=>ge(parseFloat(o.target.value))})]}),(0,e.jsxs)($a,{children:[(0,e.jsx)("label",{children:"🎭 Ефект фокусу:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[(0,e.jsx)(ms,{$active:Ae==="smooth",onClick:()=>{ft("smooth"),Te(0)},style:{flex:1,fontSize:"10px",padding:"3px",borderRadius:"6px"},children:"Плавне"}),(0,e.jsx)(ms,{$active:Ae==="pixelated",onClick:()=>ft("pixelated"),style:{flex:1,fontSize:"10px",padding:"3px",borderRadius:"6px"},children:"Піксельне"})]})]}),(0,e.jsxs)($a,{children:[(0,e.jsxs)("label",{children:["🔄 Розворот: ",ce,"°"]}),(0,e.jsx)("input",{type:"range",min:"-180",max:"180",step:"1",value:ce,onChange:o=>Y(parseInt(o.target.value))})]}),(0,e.jsxs)($a,{children:[(0,e.jsxs)("label",{children:["🌫️ Розмиття: ",_.toFixed(1),"px"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.5",value:_,onChange:o=>me(parseFloat(o.target.value))})]}),(0,e.jsxs)($a,{style:{opacity:Ae==="pixelated"?1:.4},children:[(0,e.jsxs)("label",{children:["👾 Пікселізація: ",re.toFixed(1)]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.2",value:re,disabled:Ae!=="pixelated",onChange:o=>Te(parseFloat(o.target.value))})]})]}),(h==="slideshow-2"||h==="slideshow-3"||h==="slideshow-4"||h==="random")&&(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsx)(ui,{}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px"},children:[(0,e.jsxs)($a,{children:[(0,e.jsxs)("label",{children:["⏱️ Інтервал:"," ",te>=60?`${Math.floor(te/60)}хв ${te%60>0?te%60+"с":""}`:`${te}с`]}),(0,e.jsx)("input",{type:"range",min:"4",max:"300",step:"1",value:te,onChange:o=>ee(parseInt(o.target.value))})]}),(0,e.jsxs)($a,{children:[(0,e.jsxs)("label",{children:["✨ Перехід: ",fe,"с"]}),(0,e.jsx)("input",{type:"range",min:"0.5",max:"1",step:"0.1",value:fe,onChange:o=>Q(parseFloat(o.target.value))})]}),(0,e.jsxs)($a,{children:[(0,e.jsxs)("label",{children:["⚡ Швидкість відео: ",it,"x"]}),(0,e.jsx)("input",{type:"range",min:"0.25",max:"2",step:"0.25",value:it,onChange:o=>Xe(parseFloat(o.target.value))})]})]})]}),(0,e.jsx)(ui,{}),(0,e.jsx)(dh,{children:"🎨 Бібліотека зображень"}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[(0,e.jsx)(lh,{placeholder:"🔍 Пошук картин за назвою...",value:E,onChange:o=>{q(o.target.value),He(300)}}),(0,e.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px",color:"#ffc996",fontWeight:"600"},children:"Категорія:"}),(0,e.jsxs)("select",{value:M,onChange:o=>O(o.target.value),style:{background:"rgba(10, 14, 26, 0.95)",fontSize:"12px",color:"#fff",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",padding:"4px 8px",outline:"none",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"all",children:"Усі зображення"}),(0,e.jsx)("option",{value:"Природа та Стихії",children:"Природа та Стихії"}),(0,e.jsx)("option",{value:"Фентезі та Легенди",children:"Фентезі та Легенди"}),(0,e.jsx)("option",{value:"Темрява та Містика",children:"Темрява та Містика"}),(0,e.jsx)("option",{value:"custom",children:"📁 Ваші завантажені"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px",color:"#ffc996",fontWeight:"600"},children:"Сортувати:"}),(0,e.jsxs)("select",{value:Pa,onChange:o=>Ra(o.target.value),style:{background:"rgba(10, 14, 26, 0.95)",color:"#fff",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",fontSize:"12px",padding:"4px 8px",outline:"none",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"rating",children:"⭐ За рейтингом"}),(0,e.jsx)("option",{value:"az",children:"🔤 Назва А-Я"}),(0,e.jsx)("option",{value:"za",children:"🔤 Назва Я-А"})]})]})]})]}),(0,e.jsx)(nh,{children:St.map((o,I)=>{const V=K[o.src]||0,Z=jt.findIndex(se=>se.src===o.src),X=Zg[o.src];return(0,e.jsxs)(rh,{$active:f===o.src||g===o.src,children:[(0,e.jsxs)(oh,{children:[(0,e.jsx)(ci,{$color:V===2?"gold":V===1?"#ff4d4d":"white",onClick:()=>da(o.src),children:V===2?"💛":V===1?"❤️":"🤍"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[o.description&&(0,e.jsx)(pn,{content:"Детальний опис картини",isDarkMode:d,children:(0,e.jsx)(ci,{$color:"#aef","aria-label":"Детальний опис картини",onClick:se=>{se.stopPropagation(),Bt({name:o.name,text:o.description,src:o.src,author:o.author,source:o.source})},children:"❓"})}),(0,e.jsx)(pn,{content:"Скачати файл фону",isDarkMode:d,children:(0,e.jsx)(ci,{$color:"#ffda79","aria-label":"Скачати фон",onClick:se=>{se.stopPropagation(),hs(o)},children:"📥"})})]})]}),ea(o.src)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(th,{onClick:se=>{se.stopPropagation();const We=window.prompt("Введіть нову назву для цих шпалер:",o.name);We&&y(Qe=>Qe.map(Ca=>Ca.src===o.src?{...Ca,name:We}:Ca))},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(eh,{onClick:se=>{se.stopPropagation(),window.confirm(`Видалити шпалери "${o.name}"?`)&&(y(We=>We.filter(Qe=>Qe.src!==o.src)),H(We=>{const Qe={...We};return delete Qe[o.src],Qe}),f===o.src&&x("/assets/fog-Cew27ml4.webp"),g===o.src&&N("/assets/fog-Cew27ml4.webp"))},"aria-label":"Видалити",children:"×"})]}),o.author&&(0,e.jsxs)(ed,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:o.author}),o.source&&(0,e.jsx)("div",{children:o.source})]}),(0,e.jsxs)(td,{$hasSlots:h==="slideshow-2"||h==="slideshow-3"||h==="slideshow-4",children:[h==="random"&&Z!==-1&&(0,e.jsxs)("span",{style:{color:Z===ia?"#6cffe4":"#ffb36c",marginRight:"6px",fontWeight:"bold",textShadow:Z===ia?"0 0 8px #6cffe4":"none"},children:["#",Z+1," ",Z===ia&&"(Зараз)"]}),o.name]}),Un(o.src)?(0,e.jsx)(fx,{bg:o,onClick:()=>Ue(o.src)}):(0,e.jsx)(ih,{src:X?.src||o.src,loading:"lazy",onClick:()=>Ue(o.src),title:o.name}),h==="slideshow-2"&&(0,e.jsxs)(pi,{children:[(0,e.jsx)(Wa,{$active:f===o.src,onClick:()=>Ue(o.src,1),children:"Слот 1"}),(0,e.jsx)(Wa,{$active:g===o.src,onClick:()=>Ue(o.src,2),children:"Слот 2"})]}),h==="slideshow-3"&&(0,e.jsxs)(pi,{children:[(0,e.jsx)(Wa,{$active:f===o.src,onClick:()=>Ue(o.src,1),children:"Слот 1"}),(0,e.jsx)(Wa,{$active:g===o.src,onClick:()=>Ue(o.src,2),children:"Слот 2"}),(0,e.jsx)(Wa,{$active:j===o.src,onClick:()=>Ue(o.src,3),children:"Слот 3"})]}),h==="slideshow-4"&&(0,e.jsxs)(pi,{children:[(0,e.jsx)(Wa,{$active:f===o.src,onClick:()=>Ue(o.src,1),children:"Слот 1"}),(0,e.jsx)(Wa,{$active:g===o.src,onClick:()=>Ue(o.src,2),children:"Слот 2"}),(0,e.jsx)(Wa,{$active:j===o.src,onClick:()=>Ue(o.src,3),children:"Слот 3"}),(0,e.jsx)(Wa,{$active:F===o.src,onClick:()=>Ue(o.src,4),children:"Слот 4"})]})]},I)})}),Ba.length>pe&&(0,e.jsx)(di,{onClick:()=>He(o=>o+300),children:"Завантажити ще"}),(0,e.jsx)(ui,{}),(0,e.jsxs)(sh,{onDragOver:sn,onDrop:Pn,onClick:()=>Ya.current.click(),children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:"📤"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{color:"#ffb36c",fontWeight:"bold"},children:"Перетягніть сюди"})," картинку або відео"]}),(0,e.jsx)("span",{style:{fontSize:"11px",color:"#8a8d9b"},children:"або натисніть для вибору файлу з вашого пристрою"}),(0,e.jsx)("input",{type:"file",ref:Ya,hidden:!0,accept:"image/*,video/*",onChange:o=>Ha(o.target.files[0])})]})]})}),Pe&&(0,e.jsx)("div",{onClick:()=>Bt(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"5px"},children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{background:"#111",border:"2px solid #ffb36c",borderRadius:"14px",width:"90%",maxWidth:"900px",height:"80vh",maxHeight:"650px",color:"#fff",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 50px rgba(0,0,0,0.9)"},children:[Un(Pe.src)?(0,e.jsx)("video",{src:Pe.src,preload:"metadata",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}):(0,e.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${Pe.src})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:1}}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",zIndex:2}}),(0,e.jsxs)("div",{style:{position:"relative",zIndex:3,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",padding:"10px",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[(0,e.jsx)("h3",{style:{color:"#ffb36c",margin:0,fontSize:"20px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.9)"},children:Pe.name}),(0,e.jsx)("button",{onClick:()=>Bt(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"5px",width:"30px",height:"30px",color:"#fff",fontSize:"30px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:o=>{o.currentTarget.style.background="rgba(255,0,0,0.7)",o.currentTarget.style.borderColor="red"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(0,0,0,0.6)",o.currentTarget.style.borderColor="rgba(255,255,255,0.3)"},children:"×"})]}),(0,e.jsx)("div",{style:{flex:1,overflowY:"auto",margin:"5px 0",paddingRight:"5px"},children:(0,e.jsx)("p",{style:{lineHeight:1.8,whiteSpace:"pre-wrap",fontSize:"15px",margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.95)",color:"#f5f5f5",borderRadius:"8px",backdropFilter:"blur(2px)"},children:Pe.text})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"wrap",gap:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Автор: ",Pe.author||"Невідомий"]}),Pe.source&&(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Джерело: ",Pe.source]})]}),(0,e.jsxs)("button",{onClick:()=>hs(Pe),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"8px",padding:"8px 16px",fontSize:"13px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 8px rgba(255, 179, 108, 0.4)",display:"flex",alignItems:"center",gap:"6px",transition:"transform 0.15s ease"},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.05)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)",children:["📥 Скачати ",Un(Pe.src)?"відео":"картинку"]})]})]})]})}),oe&&(0,e.jsx)(Ts,{onClick:()=>_e(null),children:(0,e.jsx)(Yx,{src:oe,alt:"Fullscreen"})}),Ne&&(0,e.jsx)(Ts,{onClick:()=>Oe(null),children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{position:"relative",width:"90%",maxWidth:"800px",aspectRatio:"16/9",background:"#000",borderRadius:"8px",overflow:"hidden",boxShadow:"0 0 20px rgba(255,255,255,0.2)"},children:[(0,e.jsx)("iframe",{src:Ne.includes("embed")?`${Ne}?autoplay=1`:`https://www.youtube.com/embed/${Ql(Ne)}?autoplay=1`,"aria-label":"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}),(0,e.jsx)("button",{onClick:()=>Oe(null),style:{position:"absolute",top:"10px",right:"10px",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:"30px",height:"30px",color:"#fff",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:"×"})]})}),ie==="links"&&(0,e.jsxs)(Rx,{$isDarkMode:d,children:[(0,e.jsxs)(Fx,{$isDarkMode:d,children:[(0,e.jsxs)(Lx,{$isDarkMode:d,children:[(0,e.jsxs)(Zr,{children:[(0,e.jsx)(pn,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(Xr,{onClick:()=>J(o=>!o),"aria-label":"Вибрати режим пошуку",style:{background:"#ffb36c",color:"#000",borderRadius:"50%",width:"34px",height:"34px"},children:(0,e.jsx)(tr,{})})}),aa&&(0,e.jsxs)(Qr,{$isDarkMode:d,children:[(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="city",onClick:()=>{dt("city"),J(!1),na(""),Qt(""),Me([]),v(!1)},children:[(0,e.jsx)(Qn,{})," За назвою міста"]}),(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="coordinates",onClick:()=>{dt("coordinates"),J(!1),ot(""),Me([]),v(!1)},children:[(0,e.jsx)(er,{})," Координати"]}),(0,e.jsxs)(Ua,{$isDarkMode:d,$active:ie==="links",onClick:()=>{dt("links"),J(!1),ot(""),Me([]),v(!1)},children:[(0,e.jsx)(tr,{})," Посилання"]})]})]}),(0,e.jsx)($x,{$isDarkMode:d,value:Le,onChange:o=>ot(o.target.value),placeholder:"Пошук сайтів, ігор, статей, авторів...",type:"text",autoFocus:!0,autoComplete:"off"}),Le&&(0,e.jsx)(zx,{onClick:()=>ot(""),"aria-label":"Очистити",type:"button",style:{position:"static",transform:"none",borderRadius:"50%"},children:"×"}),(0,e.jsx)(ei,{onClick:()=>{Le.trim()&&window.open("https://www.google.com/search?q="+encodeURIComponent(Le),"_blank")},style:{width:"36px",height:"36px",borderRadius:"50%",fontSize:"16px"},children:"⌕"})]}),(0,e.jsx)(Ex,{$isDarkMode:d,children:"Натисніть на картку сайту, щоб відкрити повний опис та галерею • Esc для виходу"})]}),(0,e.jsxs)(Px,{children:[Le.trim()===""&&xe.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Cs,{$isDarkMode:d,children:"📌 Закріплені сайти"}),Jo.filter(o=>xe.includes(o.id)).map(o=>{const I=gr(o),V=Yr(o);return(0,e.jsxs)(ti,{$isDarkMode:d,onClick:()=>$t(o),children:[(0,e.jsx)(ai,{$bg:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",children:(0,e.jsx)(ks,{link:o})}),(0,e.jsxs)(ri,{children:[(0,e.jsx)(ii,{$isDarkMode:d,children:o.title}),I&&(0,e.jsxs)(oi,{$isDarkMode:d,children:[" ",I]}),o.tags&&(0,e.jsx)(js,{children:o.tags.map(Z=>(0,e.jsxs)(Ss,{$isDarkMode:d,children:["#",Z]},Z))})]}),(0,e.jsxs)(si,{onClick:Z=>Z.stopPropagation(),children:[V.map(Z=>{const X=_r[Z.type];return X?(0,e.jsxs)(li,{$color:X.color,onClick:()=>window.open(Z.url,"_blank"),children:[X.emoji," ",X.label]},Z.type):null}),(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"})]})]},`pinned-${o.id}`)}),(0,e.jsx)(Bx,{$isDarkMode:d}),(0,e.jsx)(Cs,{$isDarkMode:d,children:"🌐 Усі сайти та ресурси"})]}),Jo.filter(o=>{if(Le.trim()==="")return!0;const I=Le.toLowerCase(),V=o.title.toLowerCase().includes(I)||o.snippet&&o.snippet.toLowerCase().includes(I),Z=gr(o)?.toLowerCase().includes(I),X=o.tags&&o.tags.some(se=>se.toLowerCase().includes(I));return V||Z||X}).map(o=>{const I=gr(o),V=Yr(o),Z=xe.includes(o.id);return(0,e.jsxs)(ti,{$isDarkMode:d,onClick:()=>$t(o),children:[(0,e.jsx)(ai,{children:(0,e.jsx)(ks,{link:o})}),(0,e.jsxs)(ri,{children:[(0,e.jsx)(ii,{$isDarkMode:d,children:o.title}),I&&(0,e.jsx)(oi,{$isDarkMode:d,children:I}),o.tags&&(0,e.jsx)(js,{children:o.tags.map(X=>(0,e.jsxs)(Ss,{$isDarkMode:d,children:["#",X]},X))})]}),(0,e.jsxs)(si,{onClick:X=>X.stopPropagation(),children:[V.map(X=>{const se=_r[X.type];return se?(0,e.jsxs)(li,{$color:se.color,onClick:()=>window.open(X.url,"_blank"),children:[se.emoji," ",se.label]},X.type):null}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"}),(0,e.jsx)("button",{onClick:()=>pt(o.id),title:Z?"Відкріпити":"Закріпити",style:{background:"transparent",border:"none",cursor:"pointer",fontSize:"16px",color:Z?"#ffb36c":d?"#666":"#aaa"},children:Z?(0,e.jsx)(Ed,{}):(0,e.jsx)(Kc,{})})]})]})]},o.id)}),Ke.map(o=>(0,e.jsxs)(ti,{$isDarkMode:d,onClick:()=>$t({title:o.title,url:o.url,snippet:o.snippet,buttonText:"Читати у Вікіпедії",author:"Вікіпедія (Українська)",tags:["вікіпедія","енциклопедія"]}),children:[(0,e.jsx)(ai,{$bg:"linear-gradient(135deg, #00bfff, #0077ff)",children:"W"}),(0,e.jsxs)(ri,{children:[(0,e.jsx)(ii,{$isDarkMode:d,children:o.title}),(0,e.jsx)(oi,{$isDarkMode:d,children:"🌐 Вікіпедія"})]}),(0,e.jsx)(si,{onClick:I=>I.stopPropagation(),children:(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#00bfff",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:"Вікіпедія"})})]},o.id)),ct&&(0,e.jsx)("div",{style:{padding:"16px",textAlign:"center",color:d?"#aaa":"#555"},children:"⏳ Завантажую результати з Вікіпедії..."})]})]}),ke&&(()=>{const o=dx(ke),I=gr(ke);return(0,e.jsx)(Hx,{onClick:()=>$t(null),children:(0,e.jsxs)(Kx,{$bgImage:o,$bg:ke.bg,onClick:V=>V.stopPropagation(),children:[(0,e.jsxs)(Ux,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{color:"#ffb36c",margin:0,fontSize:"22px",fontWeight:"bold",textShadow:"0 2px 6px rgba(0,0,0,0.9)"},children:ke.title}),I&&(0,e.jsxs)("div",{style:{color:"#f9f6f6",fontSize:"13px",marginTop:"4px"},children:["Автор / Постачальник: ",(0,e.jsx)("b",{children:I})]})]}),(0,e.jsx)("button",{onClick:()=>$t(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"32px",height:"32px",color:"#fff",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]}),(0,e.jsxs)(Wx,{children:[ke.tags&&(0,e.jsx)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:ke.tags.map(V=>(0,e.jsxs)("span",{style:{background:"rgba(255, 179, 108, 0.2)",color:"#ffb36c",border:"1px solid rgba(255, 179, 108, 0.35)",padding:"2px 8px",borderRadius:"12px",fontSize:"12px",fontWeight:"bold"},children:["#",V]},V))}),(ke.images&&ke.images.length>0||ke.youtubeTrailer)&&(0,e.jsx)(_x,{images:ke.images||[],youtubeTrailer:ke.youtubeTrailer,setFullscreenImage:_e,imageMap:ad,setFullscreenVideo:Oe}),(0,e.jsx)("div",{style:{lineHeight:"1.8",whiteSpace:"pre-wrap",color:"#f0f0f0",fontSize:"14px",textShadow:"0 1px 4px rgba(0,0,0,0.9)",background:"rgba(0, 0, 0, 0.35)",padding:"14px",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.07)"},children:ke.snippet})]}),(0,e.jsxs)(qx,{children:[Yr(ke).map(V=>{const Z=_r[V.type];return Z?(0,e.jsxs)(li,{$color:Z.color,onClick:()=>window.open(V.url,"_blank"),style:{padding:"8px 14px",fontSize:"13px"},children:[Z.emoji," Відкрити в ",Z.label]},V.type):null}),(0,e.jsx)("button",{onClick:()=>window.open(ke.url,"_blank"),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"20px",padding:"8px 20px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",marginLeft:"auto"},children:ke.buttonText||"Перейти на сайт"})]})]})})})()]})},nd=(0,n.createContext)(),rd=()=>(0,n.useContext)(nd),ch=t=>{if(!t||!(t instanceof Element))return"";const a=[];let r=t;for(;r&&r.nodeType===Node.ELEMENT_NODE&&r!==document.body&&r!==document.documentElement;){let c=r.nodeName.toLowerCase();if(r.id){c+="#"+r.id,a.unshift(c);break}else{let l=r.previousSibling,d=1;for(;l;)l.nodeType===Node.ELEMENT_NODE&&l.nodeName===r.nodeName&&d++,l=l.previousSibling;c+=`:nth-of-type(${d})`}a.unshift(c),r=r.parentNode}return a.join(" > ")},ph=({children:t,isDarkMode:a})=>{const[r,c]=(0,n.useState)(!1),[l,d]=(0,n.useState)(!1),[m,f]=(0,n.useState)({}),[x,g]=(0,n.useState)([]),[N,j]=(0,n.useState)(!1);(0,n.useEffect)(()=>{a?document.body.classList.add("decorator-dark-mode"):document.body.classList.remove("decorator-dark-mode")},[a]),(0,n.useEffect)(()=>{(async()=>{try{const h=await u.default.getItem("decorator_persistent");if(h!==null&&(d(h),h)){let w=await u.default.getItem("decorator_overrides");const S=await u.default.getItem("decorator_changelog");if(w){const k={};Object.keys(w).forEach(K=>{k[K]={};const H=w[K];H.light_default||H.light_hover||H.dark_default||H.dark_hover?k[K]=H:k[K].light_default={...H}}),f(k)}S&&g(S)}}catch(h){console.error("Error hydrating decorator state",h)}finally{j(!0)}})()},[]),(0,n.useEffect)(()=>{N&&(l?(u.default.setItem("decorator_overrides",m),u.default.setItem("decorator_changelog",x)):(u.default.removeItem("decorator_overrides"),u.default.removeItem("decorator_changelog")),u.default.setItem("decorator_persistent",l))},[m,x,l,N]),(0,n.useEffect)(()=>{let y=document.getElementById("decorator-styles");y||(y=document.createElement("style"),y.id="decorator-styles",document.head.appendChild(y));let h="";Object.entries(m).forEach(([w,S])=>{const k=w.includes(" > ")||w.includes("#")||w.includes(":")?w:`[data-decorator-id="${w}"]`;S.light_default&&Object.keys(S.light_default).length>0&&(h+=`body:not(.decorator-dark-mode) ${k} { `,Object.entries(S.light_default).forEach(([K,H])=>{h+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),h+=`}
`),S.light_hover&&Object.keys(S.light_hover).length>0&&(h+=`body:not(.decorator-dark-mode) ${k}:hover { `,Object.entries(S.light_hover).forEach(([K,H])=>{h+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),h+=`}
`),S.dark_default&&Object.keys(S.dark_default).length>0&&(h+=`body.decorator-dark-mode ${k} { `,Object.entries(S.dark_default).forEach(([K,H])=>{h+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),h+=`}
`),S.dark_hover&&Object.keys(S.dark_hover).length>0&&(h+=`body.decorator-dark-mode ${k}:hover { `,Object.entries(S.dark_hover).forEach(([K,H])=>{h+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),h+=`}
`)}),y.innerHTML=h},[m]);const A=(0,n.useCallback)((y,h,w,S,k,K="light_default")=>{f(H=>{const te=H[y]||{},ee=te[K]||{};return{...H,[y]:{...te,[K]:{...ee,[w]:k}}}}),g(H=>[...H,{id:Date.now()+"-"+Math.random().toString(36).slice(2,7),elementId:y,tagName:h,property:w,originalValue:S,newValue:k,mode:K,timestamp:new Date().toLocaleTimeString("uk-UA")}])},[]),F=(0,n.useCallback)(y=>{g(h=>{const w=h.find(S=>S.id===y);return w?(f(S=>{const k={...S[w.elementId]||{}},K=w.mode||"light_default",H={...k[K]||{}},te=h.filter(ee=>ee.elementId===w.elementId&&ee.property===w.property&&(ee.mode||"light_default")===K&&ee.id!==y);if(te.length>0?H[w.property]=te[te.length-1].newValue:delete H[w.property],k[K]=H,Object.keys(H).length===0&&delete k[K],Object.keys(k).length===0){const ee={...S};return delete ee[w.elementId],ee}return{...S,[w.elementId]:k}}),h.filter(S=>S.id!==y)):h})},[]),L=(0,n.useCallback)(()=>{f({}),g([]),document.querySelectorAll("[data-decorator-id]").forEach(y=>{y.removeAttribute("data-decorator-id")})},[]),z=(0,n.useCallback)(y=>m[y]||{},[m]);return(0,e.jsx)(nd.Provider,{value:{isDecoratorMode:r,setIsDecoratorMode:c,styleOverrides:m,changeLog:x,applyStyle:A,undoChange:F,resetAll:L,getOverridesForElement:z,isPersistent:l,setIsPersistent:d,isDarkMode:a},children:t})},mr=t=>{if(typeof t=="string")return t;if(t&&typeof t=="object"){const a=t.type?.name||"";if(a==="FaSun")return"☀️";if(a==="BsMoonStarsFill")return"🌙";if(a==="FaCloudMoon"||a==="FaSmog")return"☁️";if(a==="IoRainy"||a==="LiaCloudSunRainSolid"||a==="FaCloudMoonRain"||a==="LiaCloudMoonRainSolid")return"🌧️";if(a==="GiSnowing")return"❄️";if(a==="IoThunderstorm")return"⛈️";if(t.props?.children){const r=t.props.children;if(typeof r=="string")return r;if(Array.isArray(r))return r.filter(Boolean).map(String).join("")}}return"☁️"},xi=t=>Array.isArray(t)?t.map(a=>{const r={...a},c=l=>{if(Array.isArray(l))return l.map(d=>c(d));if(l&&typeof l=="object"){if(l.$$typeof&&typeof l.$$typeof=="symbol")return mr(l);const d={};return Object.entries(l).forEach(([m,f])=>{d[m]=c(f)}),d}return l};return Object.entries(r).forEach(([l,d])=>{(l==="current"||l==="hourly"||l==="daily16"||l==="seasonal")&&(r[l]=c(d))}),r.current&&(r.current.iconSymbol=mr(r.current.iconSymbol??r.current.iconPlaceholder),r.current.iconPlaceholder=r.current.iconPlaceholder??r.current.iconSymbol??"☁️"),Array.isArray(r.hourly)&&(r.hourly=r.hourly.map(l=>({...l,iconSymbol:mr(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.daily16)&&(r.daily16=r.daily16.map(l=>({...l,iconSymbol:mr(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(r.seasonal)&&(r.seasonal=r.seasonal.map(l=>({...l}))),r}):[],uh=le`
  from { opacity: 0; }
  to { opacity: 1; }
`,fh=le`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`,gh=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${uh} 0.2s ease-out;
`,xh=i.div`
  background: ${t=>t.$isStickyBgMode?"rgba(30, 30, 46, 0.85)":"#1e1e2e"};
  backdrop-filter: ${t=>t.$isStickyBgMode?"blur(10px)":"none"};
  color: #cdd6f4;
  border-radius: 16px;
  border: 2px solid #ffb36c;
  width: 90%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0;
  animation: ${fh} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,hh=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`,mh=i.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,bh=i.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`,yh=i.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`,wh=i.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,vh=i.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`,Is=i.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 108, 0.3);
`,br=i.button`
  flex: 1;
  background: ${t=>t.$active?"rgba(255, 179, 108, 0.2)":"transparent"};
  color: ${t=>t.$active?"#ffb36c":"#a6adc8"};
  border: none;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 179, 108, 0.1);
  }
`,kh=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  transition: background 0.15s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`,jh=i.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`,hi=i.input`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 179, 108, 0.3);
  color: #cdd6f4;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-family: monospace;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`,Ms=i.input`
  width: 36px;
  height: 30px;
  border: 2px solid rgba(255, 179, 108, 0.4);
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  background: none;
  &::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,Sh=i.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`,id=i.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`,Ch=i(id)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`,Th=i(id)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,Ds=Object.values({color:{label:"Колір тексту",cssProp:"color",type:"color",desc:"Змінює колір шрифту елемента"},backgroundColor:{label:"Колір фону",cssProp:"backgroundColor",type:"color",desc:"Змінює фоновий колір елемента"},border:{label:"Рамка (бордюр)",cssProp:"border",type:"border",desc:"Налаштування межі елемента"},borderRadius:{label:"Заокруглення кутів",cssProp:"borderRadius",type:"text",placeholder:"напр., 8px або 50%",desc:"Радіус заокруглення рамки"},boxShadow:{label:"Тінь елемента",cssProp:"boxShadow",type:"text",placeholder:"напр., 0 4px 10px rgba(0,0,0,0.3)",desc:"Додає ефект тіні навколо елемента"},textShadow:{label:"Тінь тексту",cssProp:"textShadow",type:"text",placeholder:"напр., 1px 1px 2px #000",desc:"Ефект тіні для тексту"},backdropFilter:{label:"Розмиття фону",cssProp:"backdropFilter",type:"text",placeholder:"напр., blur(10px)",desc:"Ефекти для фону (скляний ефект)"},filter:{label:"Фільтри",cssProp:"filter",type:"text",placeholder:"напр., grayscale(50%)",desc:"Ефекти зображення/кольору"},outline:{label:"Контур",cssProp:"outline",type:"text",placeholder:"напр., 2px solid red",desc:"Зовнішня рамка елемента"},textDecoration:{label:"Декорування тексту",cssProp:"textDecoration",type:"text",placeholder:"напр., underline або none",desc:"Підкреслення, закреслення тощо"},cursor:{label:"Курсор миші",cssProp:"cursor",type:"cursor",desc:"Вигляд курсора при наведенні"}}),zs=t=>{if(!t||t==="transparent"||t==="rgba(0, 0, 0, 0)")return"#000000";if(t.startsWith("#"))return t;const a=t.match(/\d+/g);return!a||a.length<3?"#000000":"#"+a.slice(0,3).map(r=>parseInt(r).toString(16).padStart(2,"0")).join("")},Ah=t=>{if(!t||t==="none")return{width:"0px",style:"none",color:"#000000"};const a=t.split(/\s+/);let r="1px",c="solid",l="#000000";return a.forEach(d=>{/^\d+(px|em|rem|%|pt)$/.test(d)||/^\d+$/.test(d)?r=d.includes("px")||d.includes("em")||d.includes("rem")||d.includes("%")||d.includes("pt")?d:d+"px":["solid","double","dashed","dotted","groove","ridge","inset","outset","none"].includes(d)?c=d:(d.startsWith("#")||d.startsWith("rgb")||d.startsWith("hsl")||/^[a-zA-Z]+$/.test(d))&&(l=d)}),{width:r,style:c,color:l}},yr=(t,a,r)=>a==="none"||t==="0px"?"none":`${t} ${a} ${r}`,Ih=({targetElement:t,onClose:a,isStickyBgMode:r})=>{const{applyStyle:c,getOverridesForElement:l,isDarkMode:d}=rd(),[m,f]=(0,n.useState)(d?"dark":"light"),[x,g]=(0,n.useState)("default"),N=`${m}_${x}`,j=t?.tagName?.toLowerCase()||"?",A=t?ch(t):"",[F,L]=(0,n.useState)({});(0,n.useEffect)(()=>{if(A){const k=l(A);L(JSON.parse(JSON.stringify(k)))}},[A,l]);const z=(k,K)=>{L(H=>({...H,[N]:{...H[N]||{},[k]:K}}))},y=()=>{const k=l(A);["light_default","light_hover","dark_default","dark_hover"].forEach(K=>{const H=F[K]||{},te=k[K]||{};Ds.forEach(({cssProp:ee})=>{H[ee]!==te[ee]&&(H[ee]?c(A,j,ee,te[ee],H[ee],K):te[ee]&&c(A,j,ee,te[ee],"",K))})}),a()},h=()=>{a(),setTimeout(()=>{j==="input"||j==="textarea"||j==="select"?t.focus():t.click()},10)};if(!t)return null;const w=F[N]||{};let S="";if(F){const k=A.includes(" > ")||A.includes("#")||A.includes(":")?A:`[data-decorator-id="${A}"]`;F.light_default&&(S+=`body:not(.decorator-dark-mode) ${k} { `,Object.entries(F.light_default).forEach(([K,H])=>{S+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),S+=`}
`),F.light_hover&&(S+=`body:not(.decorator-dark-mode) ${k}:hover { `,Object.entries(F.light_hover).forEach(([K,H])=>{S+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),S+=`}
`),F.dark_default&&(S+=`body.decorator-dark-mode ${k} { `,Object.entries(F.dark_default).forEach(([K,H])=>{S+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),S+=`}
`),F.dark_hover&&(S+=`body.decorator-dark-mode ${k}:hover { `,Object.entries(F.dark_hover).forEach(([K,H])=>{S+=`${K.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),S+=`}
`)}return(0,e.jsxs)(gh,{onClick:k=>{k.target===k.currentTarget&&a()},"data-decorator-ignore":"true",children:[(0,e.jsx)("style",{children:S}),(0,e.jsxs)(xh,{"data-decorator-ignore":"true",onClick:k=>k.stopPropagation(),$isStickyBgMode:r,children:[(0,e.jsxs)(hh,{children:[(0,e.jsxs)(mh,{children:["🎨 Декоратор ",(0,e.jsxs)(bh,{children:["<",j,">"]})]}),(0,e.jsx)(yh,{onClick:a,"data-decorator-ignore":"true",children:"×"})]}),(0,e.jsxs)(wh,{children:[(0,e.jsxs)(vh,{children:[(0,e.jsxs)(Is,{children:[(0,e.jsx)(br,{$active:m==="light",onClick:()=>f("light"),children:"🌞 Денна"}),(0,e.jsx)(br,{$active:m==="dark",onClick:()=>f("dark"),children:"🌙 Темна"})]}),(0,e.jsxs)(Is,{children:[(0,e.jsx)(br,{$active:x==="default",onClick:()=>g("default"),children:"Стандарт"}),(0,e.jsx)(br,{$active:x==="hover",onClick:()=>g("hover"),children:":hover"})]})]}),Ds.map(({cssProp:k,label:K,type:H,placeholder:te,desc:ee})=>{const fe=w[k]||"";return(0,e.jsx)(kh,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"5px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)(jh,{children:K}),(0,e.jsx)("span",{style:{fontSize:"10px",color:"#858da3"},children:ee})]}),H==="color"&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsx)(Ms,{type:"color",value:zs(fe),onChange:Q=>z(k,Q.target.value),"data-decorator-ignore":"true"}),(0,e.jsx)(hi,{value:fe,onChange:Q=>z(k,Q.target.value),placeholder:"напр., #ffb36c або transparent","data-decorator-ignore":"true"})]}),H==="cursor"&&(0,e.jsxs)("select",{value:fe,onChange:Q=>z(k,Q.target.value),"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 10px",borderRadius:"8px",fontSize:"12px",outline:"none",width:"100%"},children:[(0,e.jsx)("option",{value:"",children:"успадковується (default)"}),(0,e.jsx)("option",{value:"default",children:"стрілка (default)"}),(0,e.jsx)("option",{value:"pointer",children:"вказівник / посилання (pointer)"}),(0,e.jsx)("option",{value:"grab",children:"захоплення / рука відкрито (grab)"}),(0,e.jsx)("option",{value:"grabbing",children:"рука стиснута (grabbing)"}),(0,e.jsx)("option",{value:"zoom-in",children:"збільшення (zoom-in)"}),(0,e.jsx)("option",{value:"zoom-out",children:"зменшення (zoom-out)"}),(0,e.jsx)("option",{value:"text",children:"виділення тексту (text)"}),(0,e.jsx)("option",{value:"not-allowed",children:"заборонено (not-allowed)"}),(0,e.jsx)("option",{value:"help",children:"довідка (help)"}),(0,e.jsx)("option",{value:"wait",children:"очікування (wait)"}),(0,e.jsx)("option",{value:"move",children:"переміщення (move)"})]}),H==="border"&&(()=>{const Q=Ah(fe);return(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("select",{value:Q.width,onChange:M=>{const O=yr(M.target.value,Q.style,Q.color);z(k,O)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:1},children:[(0,e.jsx)("option",{value:"0px",children:"0px"}),(0,e.jsx)("option",{value:"1px",children:"1px"}),(0,e.jsx)("option",{value:"2px",children:"2px"}),(0,e.jsx)("option",{value:"3px",children:"3px"}),(0,e.jsx)("option",{value:"4px",children:"4px"}),(0,e.jsx)("option",{value:"5px",children:"5px"}),(0,e.jsx)("option",{value:"8px",children:"8px"}),(0,e.jsx)("option",{value:"10px",children:"10px"})]}),(0,e.jsxs)("select",{value:Q.style,onChange:M=>{const O=yr(Q.width,M.target.value,Q.color);z(k,O)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:2},children:[(0,e.jsx)("option",{value:"none",children:"немає (none)"}),(0,e.jsx)("option",{value:"solid",children:"суцільна (solid)"}),(0,e.jsx)("option",{value:"double",children:"подвійна (double)"}),(0,e.jsx)("option",{value:"dashed",children:"штрихова (dashed)"}),(0,e.jsx)("option",{value:"dotted",children:"пунктирна (dotted)"}),(0,e.jsx)("option",{value:"groove",children:"3D жолоб (groove)"}),(0,e.jsx)("option",{value:"ridge",children:"3D гребінь (ridge)"}),(0,e.jsx)("option",{value:"inset",children:"3D втиснута (inset)"}),(0,e.jsx)("option",{value:"outset",children:"3D витиснута (outset)"})]}),(0,e.jsx)(Ms,{type:"color",value:zs(Q.color),onChange:M=>{const O=yr(Q.width,Q.style,M.target.value);z(k,O)},"data-decorator-ignore":"true"}),(0,e.jsx)(hi,{value:Q.color,onChange:M=>{const O=yr(Q.width,Q.style,M.target.value);z(k,O)},placeholder:"#ffb36c","data-decorator-ignore":"true",style:{flex:2,minWidth:"70px"}})]})})(),H==="text"&&(0,e.jsx)(hi,{value:fe,onChange:Q=>z(k,Q.target.value),placeholder:te||"успадковується","data-decorator-ignore":"true"})]})},k)})]}),(0,e.jsxs)(Sh,{children:[(0,e.jsx)(Th,{onClick:h,"data-decorator-ignore":"true",children:"▶ Виконати дію"}),(0,e.jsx)(Ch,{onClick:y,"data-decorator-ignore":"true",children:"✓ Застосувати"})]})]})]})},mi={outline:"2px dashed #ffb36c",outlineOffset:"2px",cursor:"crosshair"},bi=t=>{if(!t)return!0;let a=t;for(;a&&a!==document.body;){if(a.getAttribute?.("data-decorator-ignore")==="true"||a.tagName==="HEADER"||a.id==="decorator-overlay")return!0;a=a.parentElement}return!1},Mh=({isStickyBgMode:t})=>{const{isDecoratorMode:a}=rd(),[r,c]=(0,n.useState)(null),[l,d]=(0,n.useState)(null),m=(0,n.useCallback)(g=>{!a||bi(g.target)||(r&&r!==g.target&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor=""),g.target.style.outline=mi.outline,g.target.style.outlineOffset=mi.outlineOffset,g.target.style.cursor=mi.cursor,c(g.target))},[a,r]),f=(0,n.useCallback)(g=>{!a||bi(g.target)||(g.target.style.outline="",g.target.style.outlineOffset="",g.target.style.cursor="",r===g.target&&c(null))},[a,r]),x=(0,n.useCallback)(g=>{a&&g.isTrusted&&(bi(g.target)||(g.preventDefault(),g.stopPropagation(),g.target&&(g.target.style.outline="",g.target.style.outlineOffset="",g.target.style.cursor=""),d(g.target)))},[a]);return(0,n.useEffect)(()=>{if(!a){r&&(r.style.outline="",r.style.outlineOffset="",r.style.cursor="",c(null));return}return document.addEventListener("mouseover",m,!0),document.addEventListener("mouseout",f,!0),document.addEventListener("click",x,!0),()=>{document.removeEventListener("mouseover",m,!0),document.removeEventListener("mouseout",f,!0),document.removeEventListener("click",x,!0)}},[a,m,f,x,r]),(0,n.useEffect)(()=>(a?document.body.style.cursor="crosshair":document.body.style.cursor="",()=>{document.body.style.cursor=""}),[a]),!a&&!l?null:(0,e.jsx)(e.Fragment,{children:l&&(0,e.jsx)(Ih,{targetElement:l,onClose:()=>d(null),isStickyBgMode:t})})};function Dh({children:t,isDarkMode:a}){const[r,c]=(0,n.useState)(""),[l,d]=(0,n.useState)(null),[m,f]=(0,n.useState)(null),x=y=>{c(window.getSelection()?.toString().trim()??"");const h=(y.target instanceof Element?y.target:null)?.closest("img, video");h instanceof HTMLImageElement?d({kind:"image",src:h.currentSrc||h.src,alt:h.alt}):h instanceof HTMLVideoElement?d({kind:"video",src:h.currentSrc||h.src||h.querySelector("source")?.src}):d(null)},g=async()=>{try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(r);return}}catch{}const y=document.createElement("textarea");y.value=r,y.style.position="fixed",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()},N=async()=>{if(l){if(l.kind==="video"){await navigator.clipboard.writeText(l.src);return}try{const y=await fetch(l.src),h=await createImageBitmap(await y.blob()),w=document.createElement("canvas");w.width=h.width,w.height=h.height,w.getContext("2d").drawImage(h,0,0);const S=await new Promise(k=>w.toBlob(k,"image/png"));await navigator.clipboard.write([new ClipboardItem({"image/png":S})])}catch{await navigator.clipboard.writeText(l.src)}}},j=async()=>{if(!l)return;const y=document.createElement("a");y.download=new URL(l.src,window.location.href).pathname.split("/").pop()||(l.kind==="image"?"photo":"video");try{const h=await fetch(l.src);y.href=URL.createObjectURL(await h.blob()),y.click(),window.setTimeout(()=>URL.revokeObjectURL(y.href),1e3)}catch{y.href=l.src,y.target="_blank",y.rel="noreferrer",y.click()}},A=()=>{if(l?.kind!=="image")return;const y=window.open("","_blank");if(!y)return;y.document.title=l.alt||"Фото";const h=y.document.createElement("img");h.src=l.src,h.alt=l.alt||"",h.style.cssText="display:block;max-width:100%;max-height:95vh;margin:auto;object-fit:contain",h.onload=()=>y.print(),y.document.body.style.cssText="margin:0;padding:2vh;display:grid;place-items:center",y.document.body.appendChild(h)},F=()=>{const y=document.querySelector("article, [role='article']")??document.querySelector("main")??document.body,h=document.title||"Режим читання",w=y.innerText.trim();f({title:h,text:w})},L=()=>{l?.kind==="image"&&window.open(`https://lens.google.com/uploadbyurl?url=${encodeURIComponent(l.src)}`,"_blank","noopener,noreferrer")},z=()=>{l&&window.open(l.src,"_blank","noopener,noreferrer")};return(0,e.jsxs)(Hd,{children:[(0,e.jsx)(Id,{asChild:!0,children:(0,e.jsx)("div",{className:"site-context-menu-scope",onContextMenuCapture:x,children:t})}),(0,e.jsx)(Od,{children:(0,e.jsxs)(md,{className:"site-context-menu-content","data-theme":a?"dark":"light",collisionPadding:10,sideOffset:5,children:[(0,e.jsxs)(en,{className:"site-context-menu-item",title:"Відкрийте DevTools клавішами F12 або Ctrl+Shift+I",onSelect:()=>fn("Браузер не дозволяє сайту відкрити DevTools. Натисніть F12 або Ctrl+Shift+I."),children:[(0,e.jsx)(Qd,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Перевірити (DevTools · F12)"})]}),(0,e.jsxs)(en,{className:"site-context-menu-item",disabled:!r,onSelect:()=>{g()},children:[(0,e.jsx)(Zd,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Копіювати виділене"})]}),l&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ho,{className:"site-context-menu-separator"}),(0,e.jsxs)(en,{className:"site-context-menu-item",onSelect:()=>{N()},children:[l.kind==="image"?(0,e.jsx)(Ud,{"aria-hidden":"true"}):(0,e.jsx)(rc,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:l.kind==="image"?"Копіювати фото":"Копіювати відео"})]}),(0,e.jsxs)(en,{className:"site-context-menu-item",onSelect:()=>{j()},children:[(0,e.jsx)(vd,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:l.kind==="image"?"Скачати фото":"Скачати відео"})]}),l.kind==="image"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(en,{className:"site-context-menu-item",onSelect:A,children:[(0,e.jsx)(Fd,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Друкувати фото"})]}),(0,e.jsxs)(en,{className:"site-context-menu-item",onSelect:L,children:[(0,e.jsx)(yd,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Шукати фото у Google Об'єктив"})]})]}),(0,e.jsxs)(en,{className:"site-context-menu-item",onSelect:z,children:[(0,e.jsx)(Zc,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Відкрити в новій вкладці"})]})]}),(0,e.jsx)(ho,{className:"site-context-menu-separator"}),(0,e.jsxs)(en,{className:"site-context-menu-item",onSelect:F,children:[(0,e.jsx)(jc,{"aria-hidden":"true"}),(0,e.jsx)("span",{children:"Відкрити в режимі читання"})]})]})}),m&&(0,Cr.createPortal)((0,e.jsx)("div",{className:"site-reader-backdrop",onMouseDown:y=>y.target===y.currentTarget&&f(null),children:(0,e.jsxs)("section",{className:"site-reader",role:"dialog","aria-modal":"true","aria-labelledby":"site-reader-title","data-theme":a?"dark":"light",children:[(0,e.jsxs)("header",{className:"site-reader-header",children:[(0,e.jsx)("h1",{id:"site-reader-title",children:m.title}),(0,e.jsx)("button",{type:"button","aria-label":"Закрити режим читання",onClick:()=>f(null),children:(0,e.jsx)(oc,{"aria-hidden":"true"})})]}),(0,e.jsx)("article",{className:"site-reader-content",children:m.text.split(`
`).filter(Boolean).map((y,h)=>(0,e.jsx)("p",{children:y},`${h}-${y.slice(0,24)}`))})]})}),document.body)]})}var zh=(t="",a="")=>{try{const r=new URLSearchParams(t||window.location.search);let c=r.get("q")||r.get("search")||r.get("city")||r.get("query")||r.get("pohoda")||r.get("s");if(!c&&a){const x=a.indexOf("?");if(x!==-1){const g=new URLSearchParams(a.substring(x));c=g.get("q")||g.get("search")||g.get("city")||g.get("query")||g.get("pohoda")||g.get("s")}}if(!c)return{isSearchEntry:!1,query:"",cityData:null};const l=decodeURIComponent(c).trim();if(!l)return{isSearchEntry:!1,query:"",cityData:null};const d=ql(l);if(d)return{isSearchEntry:!0,query:l,cityName:d.name,cityData:{id:`search-${d.name.toLowerCase()}`,name:d.name,fullName:d.fullName,lat:d.lat,lon:d.lon}};const m=l.replace(/^(погода\s+(в|у)?\s*)/i,"").replace(/(\s*погода)$/i,"").trim(),f=m.charAt(0).toUpperCase()+m.slice(1);return{isSearchEntry:!0,query:l,cityName:f,cityData:{id:`search-${f.toLowerCase()}`,name:f,fullName:`${f} (UA)`,lat:null,lon:null}}}catch(r){return console.error("Помилка аналізу пошукового запиту:",r),{isSearchEntry:!1,query:"",cityData:null}}},Rh=le`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Fh=i.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.17);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`,Lh=i.div`
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 24px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hl}) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;
  animation: ${Rh} 0.3s ease-out;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    max-width: 580px;
    padding: 40px 35px;
    border-radius: 16px;
    border-width: 3px;
  }
`,$h=i.h2`
  margin-top: 0;
  font-size: 22px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 18px;
  }
`,Eh=i.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 30px;
  }
`,Ph=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`,Rs=i.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 20px;
  width: 100%;
  max-width: 450px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255,255,255,0.25);
    transform: translateY(-1px);
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 24px;
    border-width: 2px;
    border-radius: 8px;
  }
`,Nh=i.div`
  position: fixed;
  background: #000;
  color: #fff;
  border: 2px solid #ffb36c;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  z-index: 10002;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  pointer-events: auto;
`,Oh=i.button`
  margin-top: 10px;
  background: #ffb36c;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`,Vh=i.button`
  margin-top: 10px;
  background: transparent;
  color: #999;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  &:hover { color: #fff; border-color: #fff; }
`,Bh=i.div`
  position: fixed;
  border: 3px dashed #ffb36c;
  border-radius: 6px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.65);
`,Hh=({user:t})=>{const{isActive:a,currentStep:r,showInitialModal:c,startTutorial:l,skipTutorialWeek:d,refs:m,nextStep:f,jumpToStep:x,closeTutorial:g}=Gn(),[N,j]=(0,n.useState)({}),[A,F]=(0,n.useState)({display:"none"}),[L,z]=(0,n.useState)(!0),[y,h]=(0,n.useState)(!1),w=(0,n.useRef)(null),S=(0,n.useRef)(null),k=(0,n.useCallback)(M=>{if(!M)return;const O=M.getBoundingClientRect(),ae=Math.max(2,O.top-5),ge=Math.max(2,O.left-5),ce=Math.min(O.width+10,window.innerWidth-ge-2),Y=Math.min(O.height+10,window.innerHeight-ae-2);F({top:ae,left:ge,width:ce,height:Y});const _=300,me=220;let re=O.bottom+15,Te=O.left;re+me>window.innerHeight&&(re=O.top-me-10),re<5&&(re=5),Te+_>window.innerWidth&&(Te=window.innerWidth-_-10),Te<5&&(Te=5),j({top:re,left:Te})},[]);(0,n.useEffect)(()=>{if(!a)return;const M=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=M}},[a]),(0,n.useEffect)(()=>{if(!a)return;const M=K.find(ae=>ae.step===r);if(!M){g();return}z(!0),h(!1),M.onEnter&&M.onEnter(),M.autoAction&&M.autoAction();const O=M.targetName?m.current[M.targetName]:null;if(S.current=O,O){O.scrollIntoView({behavior:"smooth",block:"center"});const ae=setTimeout(()=>k(O),500),ge=()=>k(O);return window.addEventListener("resize",ge),()=>{clearTimeout(ae),window.removeEventListener("resize",ge)}}else F({display:"none"}),j({top:"50%",left:"50%",transform:"translate(-50%, -50%)"})},[r,a]),(0,n.useEffect)(()=>{if(!a||r!==1)return;const M=O=>{O.detail&&O.detail.value&&O.detail.value.trim().length>0?(z(!1),clearTimeout(w.current),w.current=setTimeout(()=>z(!0),5e3)):(clearTimeout(w.current),z(!0))};return window.addEventListener("domino-hero-input-change",M),()=>{window.removeEventListener("domino-hero-input-change",M),clearTimeout(w.current)}},[a,r]),(0,n.useEffect)(()=>{if(!a)return;const M=()=>{r===1&&f()};return window.addEventListener("domino-next-step-auto",M),()=>window.removeEventListener("domino-next-step-auto",M)},[a,r,f]),(0,n.useEffect)(()=>{if(!a)return;const M=()=>{r===3&&f()};return window.addEventListener("domino-weather-gear-clicked",M),()=>window.removeEventListener("domino-weather-gear-clicked",M)},[a,r,f]);const K=[{step:1,targetName:"heroInput",text:"Привіт! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у випадаючому списку."},{step:2,targetName:null,text:"Чудово! А тепер давай спустимось нижче, щоб подивитися прогноз.",autoAction:()=>{setTimeout(()=>{document.body.style.overflow="",window.scrollTo({top:window.innerHeight,behavior:"smooth"}),setTimeout(()=>{document.body.style.overflow="hidden",f()},1500)},2e3)},noSkip:!0},{step:3,targetName:"weatherGear",text:"У цій картці показано детальний прогноз. Натисни на іконку шестерні для налаштувань."},{step:4,targetName:"weatherModal",text:`Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.

• Ліміт: до 8 карток одночасно (до 1000 створень на добу).`},{step:5,targetName:null,text:"Нижче ти знайдеш кліматичну карту Windy.com, чат із Gemini та інструменти для роботи із зображеннями (Стихії, Pixabay...).",onEnter:()=>{window.dispatchEvent(new CustomEvent("domino-close-weather-settings"))}},{step:6,targetName:"newsHeader",text:"Додавай свої джерела новин! Ми автоматично блокуємо казино, 18+, політику та кримінал. Згодом тут можна підключати YouTube, Telegram та інші канали."},{step:7,targetName:"headerBgTheme",text:"Персоналізуй сайт: обирай тематичні фони (Динофроз, природа, кіно) та налаштовуй загальну тему сайту."},{step:8,targetName:null,text:t?"Дякуємо, що ти з нами! Насолоджуйся сайтом.":"Увійди, щоб отримати повний доступ. І пам’ятай: не жартуй з Ніцероном! :)",isLast:!0}],H=(0,n.useCallback)(()=>{if(y)return;h(!0);const M=K.find(O=>O.step===r);if(M){if(M.isLast){g();return}if(r===1){const O=m.current.heroInput;if(!(O&&O.value&&O.value.trim().length>0))window.dispatchEvent(new CustomEvent("domino-auto-input-konotop")),setTimeout(()=>f(),2500);else{setTimeout(()=>h(!1),500);return}}else r===3&&window.dispatchEvent(new CustomEvent("domino-open-weather-settings")),f();setTimeout(()=>h(!1),2e3)}},[y,r,K,g,f,m]),te=(0,n.useCallback)(()=>{y||(window.dispatchEvent(new CustomEvent("domino-close-weather-settings")),x(8))},[y,x]);if(c)return(0,e.jsx)(Fh,{children:(0,e.jsxs)(Lh,{children:[(0,e.jsx)($h,{children:"Отримати навчання?"}),(0,e.jsx)(Eh,{children:"Доміно пропонує вам безкоштовну допомогу, для швидшого опанування сайту"}),(0,e.jsxs)(Ph,{children:[(0,e.jsx)(Rs,{onClick:l,children:"Так, і не нагадувати про це 30 днів"}),(0,e.jsx)(Rs,{onClick:d,children:"Ні, і не нагадувати тиждень!"})]})]})});if(!a)return null;const ee=K.find(M=>M.step===r);if(!ee)return null;const fe=A.display!=="none",Q=!ee.isLast&&!ee.noSkip&&r<=6;return(0,e.jsxs)(e.Fragment,{children:[fe&&(0,e.jsx)(Bh,{style:A}),(0,e.jsxs)(Nh,{style:{...N,opacity:L?1:0,pointerEvents:L?"auto":"none",transition:"opacity 0.3s ease"},children:[(0,e.jsxs)("div",{style:{fontSize:"12px",color:"#ccc",marginBottom:"5px"},children:["Крок ",r,"/8 (Доміно)"]}),(0,e.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:ee.text}),!ee.noSkip&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"10px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsx)(Oh,{onClick:H,disabled:y,children:ee.isLast?"Завершити":"Пропустити"}),Q&&(0,e.jsx)(Vh,{onClick:te,title:"Пропустити до кроку 8",children:"До кінця →"})]})]})]})},Kh=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
`,Uh=({content:t,children:a,placement:r="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,n.useState)(!1),m=(0,n.useRef)(null),{refs:f,floatingStyles:x,context:g}=Rn({open:l,onOpenChange:d,placement:r,strategy:"fixed",transform:!1,whileElementsMounted:An,middleware:[zn(8),Fn(),In({padding:5}),Tn({element:m})]}),{isMounted:N,styles:j}=Cn(g,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),A=Sn(g,{move:!1}),F=$n(g),L=jn(g),z=En(g,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:h}=Dn([A,F,L,z]);if(!t)return a;const w=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:f.setReference,...y(),style:{display:"inline-flex"},children:a}),N&&(0,e.jsx)(Mn,{children:(0,e.jsxs)(Kh,{ref:f.setFloating,$isDarkMode:c,style:{...x,...j},...h(),children:[t,(0,e.jsx)(Ln,{ref:m,context:g,fill:w,stroke:"#00acb9",strokeWidth:1})]})})]})},Wh=(0,n.lazy)(()=>yt(()=>import("./Aihelp-CFi5j59a.js"),__vite__mapDeps([0,1,2]))),qh=(0,n.lazy)(()=>yt(()=>import("./FanArt-wmBmjZLb.js"),__vite__mapDeps([3,1,2]))),Jh=(0,n.lazy)(()=>yt(()=>import("./ShopModal-CrGVQOlK.js"),__vite__mapDeps([4,1,2]))),Gh=(0,n.lazy)(()=>yt(()=>import("./ClimateMap-DnrNBSj5.js"),__vite__mapDeps([5,1,2]))),_h=(0,n.lazy)(()=>yt(()=>import("./Modal-hFxZUSE_.js"),__vite__mapDeps([6,1,2,7]))),Yh=(0,n.lazy)(()=>yt(()=>import("./LoginModal-CLeJlIKK.js"),__vite__mapDeps([8,1,2]))),Zh=(0,n.lazy)(()=>yt(()=>import("./UserSettingsModal-nKgr3Qv6.js"),__vite__mapDeps([9,1,2,7]))),Xh=(0,n.lazy)(()=>yt(()=>import("./WeatherDetailsModal-CsHqlgCU.js"),__vite__mapDeps([10,1,2]))),yi=(0,n.lazy)(()=>yt(()=>Promise.resolve().then(()=>Jl),void 0)),Qh=xc`
  ${t=>t.$locked&&rt`
      html,
      body,
      #root,
      .App {
        filter: none !important;
        backdrop-filter: none !important;
      }
    `}
`,em=le`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`,tm=le`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`,wi=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"#ffffff"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  transition:
    background-color 0.5s ease,
    backdrop-filter 0.5s ease;
  border-radius: 20px;
  margin: 10px 0;
  display: ${t=>t.$isHidden?"none":"block"};
`,Fs=[jr,Fi,Li];Wc.register($c,uc,Nc,Tc,zc,_c,mc,qc);var vi=(t,a=1)=>t===0?a?"☀️ Сонячно":"🌙 Місячно":t>=1&&t<=3?a?"🌤️ Мінлива хмарність":"☁️ Мінлива хмарність":t>=45&&t<=48?"☁️ Туман":t>=51&&t<=55?"🌧️ Мряка":t>=56&&t<=57?"🌧️ Мряка з снігом":t>=61&&t<=65?"🌧️ Дощ":t>=66&&t<=67?"🌧️ Дощ з снігом":t>=71&&t<=75?"❄️ Снігопад":t===77?"❄️ Сніжна крупа":t>=80&&t<=82?"🌦️ Зливовий дощ":t>=85&&t<=86?"❄️ Зливовий сніг":t>=95&&t<=99?"⛈️ Гроза":"☁️ Хмарно",ki=(t,a=1)=>t===0?a?"Сонячно":"Місячно":t>=1&&t<=3?a?"Мінлива хмарність":"Нічна мінлива хмарність":t>=45&&t<=48?"Туманно":t>=51&&t<=55?"Мряка":t>=56&&t<=57?"Мряка з снігом":t>=61&&t<=65?"Дощ":t>=66&&t<=67?"Дощ з снігом":t>=71&&t<=75?"Сніг":t===77?"Сніжна крупа":t>=80&&t<=82?"Зливовий дощ":t>=85&&t<=86?"Зливовий сніг":t>=95&&t<=99?"Гроза":"Хмарно",ji=(t,a=1)=>t===0?a?(0,e.jsx)(Ea,{}):(0,e.jsx)(qa,{}):t>=1&&t<=3?a?(0,e.jsx)(un,{}):(0,e.jsx)(e0,{}):t>=45&&t<=48?(0,e.jsx)(Fo,{}):t>=51&&t<=55?(0,e.jsx)($o,{}):t>=56&&t<=57?(0,e.jsx)($o,{}):t>=61&&t<=65?a?(0,e.jsx)(Nr,{}):(0,e.jsx)(wo,{}):t>=66&&t<=67?a?(0,e.jsx)(Nr,{}):(0,e.jsx)(wo,{}):t>=71&&t<=75?(0,e.jsx)(Lr,{}):t===77?(0,e.jsx)(Lr,{}):t>=80&&t<=82?a?(0,e.jsx)(Nr,{}):(0,e.jsx)(cc,{}):t>=85&&t<=86?(0,e.jsx)(Lr,{}):t>=95&&t<=99?(0,e.jsx)(a0,{}):(0,e.jsx)(Fo,{}),am=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"transparent"};
  color: ${t=>t.$isDarkMode?"#ffffff":"inherit"};
  min-height: 100vh;
  transition:
    background-color 0.5s ease,
    background 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
`,nm=i.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 42px 10px;
  justify-content: flex-start;
  width: 100%;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    scroll-snap-align: center;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
  }
`,rm=i.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  z-index: 9000;
  margin-top: -45px;
`,Ls=i.button`
  position: absolute;
  top: 50%;
  ${t=>t.$direction==="previous"?"left: 42px;":"right: 42px;"}
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  
  border: 2px solid #00ffe5;
  border-radius: 6px;
  background: #000;
  color: #00ffe5;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
  box-shadow: 0 0 12px rgba(0, 255, 229, 0.3);
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  /* Підключення анімації левітації */
  animation: ${em} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${tm} 2.5s ease-in-out infinite;
  }

  /* 1. Задня грань */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 44px;
    height: 40px;
    border-top: 2px solid rgb(0, 255, 229);
    border-left: 2px solid rgb(0, 255, 229);
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 6px;
    z-index: -2;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  /* 2. З'єднувальні лінії */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 54px;
    height: 54px;
    z-index: -1;
    pointer-events: none;
    
    background: 
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 0 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 100% 0 / 14px 14px no-repeat,
      linear-gradient(45deg, transparent 42%, rgba(0, 255, 229, 0.7) 42%, rgba(0, 255, 229, 0.7) 58%, transparent 58%) 0 100% / 14px 14px no-repeat;
    transition: all 0.2s ease;
  }

  &:hover {
    background: #000;
    animation-play-state: paused;
    box-shadow: 0 0 18px rgba(0, 255, 229, 0.6);
    
    &::before {
      border-color: rgba(0, 255, 229, 0.9);
      top: -12px;
      left: -12px;
    }

    &::after {
      top: -12px;
      left: -12px;
      width: 56px;
      height: 56px;
      background-size: 16px 16px;
    }

    & > * { animation-duration: 1.2s;
    }
  }

  &:active {
    transform: translateY(calc(-50% + 2px)) scale(0.96);
  }
`,im=i.button`
  width: 30px;
  height: 30px;
  background: ${t=>t.$active?"#fc7a00":"#00ffe5"};
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  &:hover {
    background: ${t=>t.$active?"#fdd9b6":"#3095b7"};
  }
`,om=i.div`
  position: relative;
  z-index: 1800;
  isolation: isolate;
`,sm=({children:t})=>{const a=(0,n.useRef)(null),[r,c]=(0,n.useState)(0),l=n.Children.toArray(t).length,d=(0,n.useCallback)(f=>{const x=a.current;if(!x)return;const g=x.children[f];g&&x.scrollTo({left:g.offsetLeft,behavior:"smooth"})},[]),m=(0,n.useCallback)(f=>{if(l<2)return;const x=(r+f+l)%l;c(x),d(x)},[r,l,d]);return(0,n.useEffect)(()=>{r>=l&&l>0&&c(l-1)},[l,r]),(0,n.useEffect)(()=>{const f=a.current;if(!f)return;let x;const g=()=>{clearTimeout(x),x=setTimeout(()=>{const N=Array.from(f.children);if(N.length===0)return;const j=N.reduce((A,F,L)=>{const z=Math.abs(N[A].offsetLeft-f.scrollLeft);return Math.abs(F.offsetLeft-f.scrollLeft)<z?L:A},0);c(j)},50)};return f.addEventListener("scroll",g,{passive:!0}),()=>{clearTimeout(x),f.removeEventListener("scroll",g)}},[l]),(0,e.jsxs)(om,{children:[(0,e.jsx)(nm,{ref:a,children:t}),l>1&&(0,e.jsx)(rm,{children:Array.from({length:l},(f,x)=>(0,e.jsx)(im,{$active:x===r,onClick:()=>{c(x),d(x)},children:x+1},`carousel-page-${x}`))}),l>1&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ls,{type:"button",$direction:"previous","aria-label":"Попередня картка",onClick:()=>m(-1),children:"◀"}),(0,e.jsx)(Ls,{type:"button",$direction:"next","aria-label":"Наступна картка",onClick:()=>m(1),children:"▶"})]})]})},$s=["Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.","Доміно, власник сайту і замку!","Ти теж думаєш, що відсилками можна керувати погодою? :)","Погода така сама загадка і т/с 'Ральна містика'","Хто що любить, хто що шукає? :)","Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.","Хочете, щоб ваш трек або відсилка були на сайті? Надсилайте на пошту theturkeystudio@gmail.com","Фан-арти для роздрукування! І плоска 3D-картина краще виглядає на стіні, ніж на екрані. Примітка","0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода, музика і відсилки.","«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...","Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)","Знайди речдок у телешоу «Речдок»","Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?","Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)","Ми вас здивуємо багато чим :)","І що всіх тягне на турецькі серіали?","«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара","Морально підтримайте підпискою на ютуб, рекламою і побажаннями.","Навчання, оцінювання та коментування. І що я написав :)","Чекаю на ваші відсилки, фан-арти та побажання на пошту","Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»","У нас немає сторінки 404 :) Радіовишки, ліси, тумани, сирени...","Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.","Підтримайте, будь ласка, рекламою нас у соцмережах :)","У вас через сім днів буде хороша погода - поганої ж не існує :)","«Теорія неймовірності» (Макс Кідрук) має одну частину :(","Ох, Марта любить, коли ти не тікаєш від долі стати картиною.","Кейт — складна за характером індичка.","Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)","Хто ваш кумир? Зібров чи Винник?","Багато змін клімату, мультиплікації, моди, життя :(","Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)","Місія неможлива - ніде не помилитись","Льодовиковий період чи глобальне потепління через 24 роки.","Правило: дивіться на все під різними кутами.","Попри все, погода не буває поганою - вона буває різною.","Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик в магазині»","Оксану Самойлову з «Україна має талант» хто пам'ятає?","Страху немає, упевненим робиться рух!","Застрягли в минулому :) Але погода - це майбутнє!","Mondo TV - Thanks for legendary cartoons.","Раз, два, три. Погоду нам скажи!","Це початок початку чи початок кінця відсилкам? (Перший варіант)","Вверх - ти летиш! Вниз - ти падаєш! ","Чорний айсберг, потопив ......? ","Доміно тривожить Єллоустон","Я знаю що її звати ......","Цей сайт це реальна містика :)","Доміно бажає гарної погоди :)","Кейт бажає творчого натхнення","Сутінок - не найкраще, що можете побачити...","Драконяче видання...","Марта - і картини...","Відлуння порожнечі","Вам приснилися сни про погоду? Бо ви тут! :)","Вам приснився жах що ...... і ...... програли і...","Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)","Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)"],lm=le`
  0% { opacity: 0; transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.1)) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(1.2); }
`,dm=i.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${t=>t.$isNew?"#94fffa":"#ffb36c"};
  font-size: 14px;
  z-index: 10001;
  animation: ${lm} 3s ease-out infinite;
  animation-delay: ${t=>t.$delay}s;
  --x: ${t=>t.$x}px;
  --y: ${t=>t.$y}px;
`,cm=i.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: ${t=>t.$isDarkMode?"rgba(6, 123, 110, 0.75)":"rgba(98, 112, 8, 0.55)"};
  color: ${t=>t.$isDarkMode?"#00eaff":"#fbff00"};
  padding: 2px 8px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 900;
  z-index: 1998;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(6px);
  border: 2px solid
    ${t=>t.$isDarkMode?"rgba(128, 0, 255, 0.99)":"rgb(255, 170, 0)"};
  pointer-events: auto;
  cursor: pointer;
   text-shadow: 
    -1px -1px 0 #080808,  
     1px -1px 0 #080808,
    -1px  1px 0 #080808,
     1px  1px 0 #080808;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.07);
    background: ${t=>t.$isDarkMode?"rgba(18, 43, 166, 0.69)":"rgba(254, 102, 0, 0.73)"};
  }
  &:active {
    transform: scale(0.95);
  }
`,pm=i.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  ${t=>t.$isNew&&rt`
      color: #94fffa;
      text-shadow: 0 0 12px rgba(148, 255, 250, 0.9);
      font-weight: bold;
      &::before {
        content: "Нове: ";
        font-size: 0.8em;
        color: orange;
      }
    `}
`,Es="siteSectionsOrder",Si=(0,n.memo)(({section:t,isDarkMode:a,isStickyBgMode:r,isLocationEnabled:c,handleRefreshCard:l,handleDeleteCard:d,handleRenameCard:m,moveWeatherCard:f,setIsLocationEnabled:x,user:g,handleOpenRegister:N,onUpdateUser:j,setHeroBg:A,customHeroBgs:F,setCustomHeroBgs:L,setCustomHolidayName:z,customHolidayName:y,weatherCards:h,weatherCardLayout:w,isAnyModalOpen:S,heroDateString:k,isWeatherDetailsOpen:K,setIsWeatherDetailsOpen:H,selectedWeatherCard:te,setSelectedWeatherCard:ee,setIsFsActive:fe})=>t?t.key==="weather"?(0,e.jsxs)("div",{id:"weather",children:[(0,e.jsx)(ip,{$isStickyBgMode:r,$isDarkMode:a,children:"Погода"}),(0,e.jsx)(sm,{children:h.map((Q,M)=>{const O=Q.current.tempNum>30||Q.current.tempNum<-30,ae=Q.current.windNum>10,ge=Q.current.uv_index>7;return(0,e.jsx)("div",{children:(0,e.jsx)(Cp,{isStickyBgMode:r,user:g,card:Q,isDarkMode:a,isLocationEnabled:c,isExtremeTemp:O,isExtremeWind:ae,isExtremeUV:ge,index:M,totalCards:h.length,handleRefreshCard:l,handleDeleteCard:d,handleRenameCard:m,moveWeatherCard:f,setIsLocationEnabled:x,customHolidayName:y,layout:w,onOpenDetails:ce=>{ee({...Q,cityImage:ce||Q.cityImage}),H(!0)},currentTimeString:k})},Q.id)})})]}):(0,e.jsxs)("div",{id:t.key,children:[t.key==="map"&&(0,e.jsx)(Gh,{isDarkMode:a,isStickyBgMode:r}),t.key==="aihelp"&&(0,e.jsx)(Wh,{isDarkMode:a,isStickyBgMode:r}),t.key==="fanart"&&(0,e.jsx)(qh,{isStickyBgMode:r,isDarkMode:a,user:g,setHeroBg:A,customHeroBgs:F,setCustomHeroBgs:L}),t.key==="prison"&&(0,e.jsx)(Prison,{})]}):null),um=()=>{const[t,a]=(0,n.useState)(!0),[r,c]=(0,n.useState)(!1),[l,d]=(0,n.useState)(!1),[m,f]=(0,n.useState)(!1),[x,g]=(0,n.useState)({text:"",isNew:!1}),[N,j]=(0,n.useState)(new Date),[A,F]=(0,n.useState)(!0),[L,z]=(0,n.useState)(!1),[y,h]=(0,n.useState)([]),[w,S]=(0,n.useState)({}),[k,K]=(0,n.useState)(null),H=(0,n.useRef)(null);(0,n.useEffect)(()=>{const b=A?"dark":"light";document.documentElement.dataset.theme=b,document.body.dataset.theme=b},[A]),(0,n.useEffect)(()=>{H.current=k},[k]);const[te,ee]=(0,n.useState)(null),[fe,Q]=(0,n.useState)([]),[M,O]=(0,n.useState)(null),[ae,ge]=(0,n.useState)(null),[ce,Y]=(0,n.useState)(null),[_,me]=(0,n.useState)("static"),[re,Te]=(0,n.useState)(.2),[Ae,ft]=(0,n.useState)({}),[Ct,Jt]=(0,n.useState)(5),[gt,Be]=(0,n.useState)(.8),[qe,Nt]=(0,n.useState)("all"),[Ot,Je]=(0,n.useState)(1),[Tt,At]=(0,n.useState)(0),[wt,xt]=(0,n.useState)(0),[it,Xe]=(0,n.useState)("smooth"),[ne,Ie]=(0,n.useState)(0),[Fe,st]=(0,n.useState)({x:50,y:50}),[Gt,Vt]=(0,n.useState)({x:50,y:50}),[_t,Ft]=(0,n.useState)({x:50,y:50}),[fa,Ma]=(0,n.useState)({x:50,y:50}),[Le,ot]=(0,n.useState)(!1),[Yt,Zt]=(0,n.useState)(6),[Xt,ht]=(0,n.useState)(1),[Me,ka]=(0,n.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),[Se,tt]=(0,n.useState)(""),[v,E]=(0,n.useState)(Ti),[q,pe]=(0,n.useState)(!1),[He,Ge]=(0,n.useState)(!1),[he,ve]=(0,n.useState)(!1),[Lt,mt]=(0,n.useState)(!1),[be,vt]=(0,n.useState)(!1),[Pe,Bt]=(0,n.useState)(!1),[ke,$t]=(0,n.useState)(!1),[kt,It]=(0,n.useState)(!1),[Da,ja]=(0,n.useState)(!1),[ie,dt]=(0,n.useState)(!0),[aa,J]=(0,n.useState)(!1),[oe,_e]=(0,n.useState)(!1),[Ne,Oe]=(0,n.useState)(!0),[xe,Ye]=(0,n.useState)(Ai),[Ke,Ht]=(0,n.useState)("loop"),[ct,za]=(0,n.useState)(!1),[Kt,na]=(0,n.useState)(23),[,Ga]=(0,n.useState)(0),[Qt,Pa]=(0,n.useState)(.2),[Ra,ra]=(0,n.useState)(.2),[Mt,Fa]=(0,n.useState)("eager"),[Et,rn]=(0,n.useState)(1),[jt,Na]=(0,n.useState)([]),[ia,ga]=(0,n.useState)({}),[Oa,Va]=(0,n.useState)(!1),[oa,$e]=(0,n.useState)(!1),[ea,Ve]=(0,n.useState)(!1),[Ue,_a]=(0,n.useState)(null),sa=(0,n.useCallback)(()=>{const b=new Date,R=3600-(b.getMinutes()*60+b.getSeconds());return R<=0?3600:R},[]),[on,Ut]=(0,n.useState)(sa()),la=(0,n.useRef)([]),Ba=(0,n.useRef)(null),St=(0,n.useRef)(null),De=(0,n.useRef)(null),[da,Ya]=(0,n.useState)(0),Ha=(0,n.useRef)(!1),[sn,Pn]=(0,n.useState)(!1),[ln,Sa]=(0,n.useState)(!1),[xn,s]=(0,n.useState)(!1),[p,P]=(0,n.useState)(!1),[D,T]=(0,n.useState)("UTC"),[C,de]=(0,n.useState)(!1),[je,pt]=(0,n.useState)(!1),[xa,at]=(0,n.useState)(null),[ha,ut]=(0,n.useState)(null);(0,n.useEffect)(()=>{let b=!0;const R=async()=>{if(document.visibilityState!=="visible")return;const{isMaintenanceMode:W,endTime:B,message:U}=await qp();b&&(pt(W),at(B),ut(U))};return R(),document.addEventListener("visibilitychange",R),()=>{b=!1,document.removeEventListener("visibilitychange",R)}},[]),(0,n.useEffect)(()=>{(async()=>{try{const R=await u.default.getItem("isDarkMode");R!==null&&F(R);const W=await u.default.getItem("isStickyBgMode");W!==null&&z(W);const B=await u.default.getItem("sectionThemes");B&&S(B);const U=await u.default.getItem("hiddenSections");U&&h(U);const G=await u.default.getItem("active_user");G&&K(G);const ze=await u.default.getItem("currentAvatar");ze&&E(ze);const nt=await u.default.getItem("isRoutingMode");nt!==null&&I(nt);const Pt=await u.default.getItem("selected_timezone");Pt&&T(Pt);const lt=await u.default.getItem("bg_music_enabled");lt!==null&&_e(lt);const Ze=await u.default.getItem("auto_mute_bg_music");Ze!==null&&Oe(Ze);const Dt=await u.default.getItem("lock_filters_in_fs");Dt!==null&&Va(Dt);const $=await u.default.getItem("bg_music_source");$&&Ye($);const Ka=await u.default.getItem("custom_bg_tracks");Ka&&Na(Ka);const mn=await u.default.getItem("bg_music_volume");mn!==null&&Pa(mn);const _n=await u.default.getItem("sfx_volume");_n!==null&&ra(_n);const Za=await u.default.getItem("bg_music_speed");Za!==null&&rn(Za);const Yn=await u.default.getItem("bg_music_position");Yn!==null&&Ya(Yn);const ue=await u.default.getItem("bg_music_mode");ue&&Ht(ue);const et=await u.default.getItem("bg_music_shuffle");et!==null&&za(et);const Ee=await u.default.getItem("active_bg_track_id");Ee&&na(Ee);const we=await u.default.getItem("library_bg_settings");we&&ga(we);const ye=await u.default.getItem("isLocationEnabled");ye!==null&&Z(ye);const Re=await u.default.getItem("weather_cards");Re&&se(xi(Re));const ta=await u.default.getItem("hideDeleteModalUntil");ta&&Ta(parseInt(ta));const zt=await u.default.getItem(Es);zt&&dn(zt);const Xa=await u.default.getItem("hero_background");Xa&&ee(Xa);const Qa=await u.default.getItem("hero_background_2");Qa&&O(Qa);const Vn=await u.default.getItem("hero_background_3");Vn&&ge(Vn);const Hi=await u.default.getItem("hero_background_4");Hi&&Y(Hi);const Ki=await u.default.getItem("custom_hero_backgrounds");Ki&&Q(Ki);const Ui=await u.default.getItem("hero_bg_mode");Ui&&me(Ui);const Wi=await u.default.getItem("hero_slideshow_interval");Wi!==null&&Jt(Wi);const qi=await u.default.getItem("hero_slideshow_transition");qi!==null&&Be(qi);const Ji=await u.default.getItem("hero_bg_filter_category");Ji&&Nt(Ji);const Gi=await u.default.getItem("hero_bg_zoom");Gi!==null&&Je(Gi);const _i=await u.default.getItem("hero_bg_rotation");_i!==null&&Ie(_i);const Yi=await u.default.getItem("hero_bg_blur");Yi!==null&&At(Yi);const Zi=await u.default.getItem("hero_bg_blur_type");Zi&&Xe(Zi);const Xi=await u.default.getItem("hero_bg_pixelation");Xi!==null&&xt(Xi);const Qi=await u.default.getItem("hero_bg_focal1");Qi&&st(Qi);const eo=await u.default.getItem("hero_bg_focal2");eo&&Vt(eo);const to=await u.default.getItem("hero_bg_focal3");to&&Ft(to);const ao=await u.default.getItem("hero_bg_focal4");ao&&Ma(ao);const no=await u.default.getItem("hero_bg_pan_enabled");no!==null&&ot(no);const ro=await u.default.getItem("hero_bg_pan_speed");ro!==null&&Zt(ro);const io=await u.default.getItem("hero_video_playback_speed");io!==null&&ht(io);const oo=await u.default.getItem("custom_holiday_name");oo&&tt(oo);const so=await u.default.getItem("dinofroz_screenshots");so&&Qe(so);const hd=await u.default.getItem("last_deployed_version"),lo=await u.default.getItem("weather_card_layout");lo&&ka(lo);const co=await u.default.getItem("show_update_timer");co!==null&&dt(co);const po={}.REACT_APP_DEPLOY_ID;po&&hd!==po&&Sa(!0),de(!0)}catch(R){console.error("Помилка завантаження з localforage:",R),de(!0)}})()},[]),(0,n.useEffect)(()=>{C&&(u.default.setItem("isStickyBgMode",L),u.default.setItem("bg_music_enabled",oe),u.default.setItem("auto_mute_bg_music",Ne),u.default.setItem("lock_filters_in_fs",Oa),(xe instanceof Blob||typeof xe=="string")&&u.default.setItem("bg_music_source",xe),u.default.setItem("custom_bg_tracks",jt),u.default.setItem("bg_music_volume",Qt),u.default.setItem("sfx_volume",Ra),u.default.setItem("bg_music_speed",Et),u.default.setItem("bg_music_mode",Ke),u.default.setItem("bg_music_shuffle",ct),u.default.setItem("active_bg_track_id",Kt),u.default.setItem("library_bg_settings",ia))},[oe,Ne,Oa,xe,jt,ia,Qt,Ra,Et,Ke,ct,Kt,C]),(0,n.useEffect)(()=>{(async()=>{const R=await u.default.getItem("seen_loading_phrases")||[],W=Math.floor(Math.random()*$s.length),B=$s[W],U=!R.includes(B);if(U){const G=[...R,B];await u.default.setItem("seen_loading_phrases",G.slice(-100))}g({text:B,isNew:U})})()},[]);const Ce=(0,n.useCallback)(async()=>{await Promise.all([yt(()=>import("./Aihelp-CFi5j59a.js"),__vite__mapDeps([0,1,2])),yt(()=>import("./FanArt-wmBmjZLb.js"),__vite__mapDeps([3,1,2])),yt(()=>import("./ShopModal-CrGVQOlK.js"),__vite__mapDeps([4,1,2])),yt(()=>Promise.resolve().then(()=>cg),void 0),yt(()=>import("./ClimateMap-DnrNBSj5.js"),__vite__mapDeps([5,1,2])),yt(()=>import("./Modal-hFxZUSE_.js"),__vite__mapDeps([6,1,2,7])),yt(()=>import("./LoginModal-CLeJlIKK.js"),__vite__mapDeps([8,1,2])),yt(()=>import("./UserSettingsModal-nKgr3Qv6.js"),__vite__mapDeps([9,1,2,7])),yt(()=>import("./WeatherDetailsModal-CsHqlgCU.js"),__vite__mapDeps([10,1,2])),yt(()=>Promise.resolve().then(()=>Jl),void 0)])},[]);(0,n.useEffect)(()=>{C&&Ce().catch(b=>{console.error("Помилка попереднього завантаження модулів:",b)}).finally(()=>d(!0))},[C,Ce]);const bt=(0,n.useMemo)(()=>{const b=x.isNew?12:6;return Array.from({length:b}).map((R,W)=>({id:W,x:(Math.random()-.5)*220,y:(Math.random()-.5)*140,delay:Math.random()*2}))},[x]);(0,n.useEffect)(()=>{const b=setTimeout(()=>s(!0),8e3);return()=>clearTimeout(b)},[]),(0,n.useEffect)(()=>{if(k?.fontFamily){const b=k.fontFamily.trim().replace(/ /g,"+").replace(/['"]/g,""),R="custom-google-font";let W=document.getElementById(R);W||(W=document.createElement("link"),W.id=R,W.rel="stylesheet",document.head.appendChild(W)),W.href=`https://fonts.googleapis.com/css2?family=${b}:wght@400;700;900&display=swap`,document.documentElement.style.setProperty("--font-family",`"${k.fontFamily.replace(/['"]/g,"")}", sans-serif`)}else document.getElementById("custom-google-font")?.remove(),document.documentElement.style.removeProperty("--font-family")},[k?.fontFamily]),(0,n.useEffect)(()=>{const b=()=>{Pn(!0),window.removeEventListener("mousedown",b),window.removeEventListener("scroll",b),window.removeEventListener("touchstart",b)};return window.addEventListener("mousedown",b),window.addEventListener("scroll",b),window.addEventListener("touchstart",b),()=>{window.removeEventListener("mousedown",b),window.removeEventListener("scroll",b),window.removeEventListener("touchstart",b)}},[]);const[o,I]=(0,n.useState)(!1);(0,n.useEffect)(()=>{ln&&xn&&sn&&!p&&(It(!0),Sa(!1),P(!0),u.default.setItem("last_deployed_version",{}.REACT_APP_DEPLOY_ID))},[ln,xn,sn,p]);const[V,Z]=(0,n.useState)(!1),[X,se]=(0,n.useState)([]),[We,Qe]=(0,n.useState)([]),Ca=q||He||he||Lt||be||Pe||ke||kt||p,[hn,Ta]=(0,n.useState)(0);(0,n.useEffect)(()=>{const R=setTimeout(async()=>{const W=[Ai,vr,vr,jr];try{await Promise.all(W.map(B=>fetch(B))),console.log("KatScene assets preloaded in background")}catch(B){console.warn("Failed to preload KatScene assets:",B)}},4e3);return()=>clearTimeout(R)},[]);const[Wt,dn]=(0,n.useState)([...Vr]);(0,n.useEffect)(()=>{if(C){const b=xi(X);if(u.default.setItem("weather_cards",b).catch(R=>{console.error("weather_cards persistence failed:",R)}),H.current?.uid){const R=b.map(B=>({id:B.id,isMain:B.isMain,locationName:B.locationName,lat:B.lat,lon:B.lon})),W=Ja(Ia,"config",H.current.uid);Kn(W,{savedWeatherCards:R},{merge:!0}).catch(console.error)}}},[X,C]),(0,n.useEffect)(()=>{(async()=>{if(H.current?.uid&&C)try{const R=Ja(Ia,"config",H.current.uid),W=await Wn(R);if(W.exists()){const B=W.data();if(B.savedWeatherCards&&B.savedWeatherCards.filter(U=>!la.current.some(G=>G.id===U.id)).forEach(U=>{U.isMain?Nn():ca({id:U.id,fullName:U.locationName,lat:U.lat,lon:U.lon},!1,U.lat,U.lon)}),B.settings){const U=B.settings;U.isDarkMode!==void 0&&F(U.isDarkMode),U.hiddenSections&&h(U.hiddenSections),U.weatherCardLayout&&ka(U.weatherCardLayout),U.isRoutingMode!==void 0&&I(U.isRoutingMode),U.siteSections&&dn(U.siteSections),U.isStickyBgMode!==void 0&&z(U.isStickyBgMode),U.sectionThemes&&S(U.sectionThemes),U.heroBg&&ee(U.heroBg),U.heroBg2&&O(U.heroBg2),U.heroBg3&&ge(U.heroBg3),U.heroBg4&&Y(U.heroBg4),U.heroBgMode&&me(U.heroBgMode),U.customHeroBgs&&Q(U.customHeroBgs),U.heroOverlayOpacity!==void 0&&Te(U.heroOverlayOpacity),U.bgRatings&&ft(U.bgRatings)}}}catch(R){console.error("Error syncing from Firestore:",R)}})()},[k,C]),(0,n.useEffect)(()=>{C&&(async()=>{try{const R=await u.default.getItem("weather_cards");if(R){const W=xi(R);se(W)}}catch(R){console.error("weather_cards hydration failed:",R)}})()},[C]),(0,n.useEffect)(()=>{if(C&&(u.default.setItem("isRoutingMode",o),u.default.setItem("isLocationEnabled",V),u.default.setItem(Es,Wt),u.default.setItem("hiddenSections",y),u.default.setItem("weatherCardLayout",Me),u.default.setItem("isStickyBgMode",L),u.default.setItem("sectionThemes",w),u.default.setItem("isDarkMode",A),u.default.setItem("hero_video_playback_speed",Xt),H.current?.uid)){const b=Ja(Ia,"config",H.current.uid);Kn(b,{settings:{isDarkMode:A,hiddenSections:y,weatherCardLayout:Me,isRoutingMode:o,siteSections:Wt,isStickyBgMode:L,sectionThemes:w,heroBg:te,heroBg2:M,heroBg3:ae,heroBg4:ce,heroBgMode:_,customHeroBgs:fe,heroOverlayOpacity:re,bgRatings:Ae}},{merge:!0}).catch(console.error)}},[o,V,Wt,y,Me,L,w,A,te,M,ae,ce,_,fe,re,Ae,Xt,C]);const[ma,od]=(0,n.useState)("");(0,n.useEffect)(()=>{let b=xe;return xe instanceof Blob&&(b=URL.createObjectURL(xe)),od(b),()=>{xe instanceof Blob&&b&&URL.revokeObjectURL(b)}},[xe]);const Oi=(0,n.useRef)(null);(0,n.useEffect)(()=>{const b=St.current,R=De.current;if(!b||!R)return;Oi.current!==ma&&(Ga(0),Oi.current=ma);const W=oe&&(!oa||!Ne),B=W?Qt:0,U=.02;let G=b,ze=R;b.src&&ma&&b.src.includes(ma)?(G=b,ze=R):R.src&&ma&&R.src.includes(ma)?(G=R,ze=b):(G=b.paused||b.volume===0?b:R,ze=G===b?R:b),W?G.paused||G.src===""||!G.src.includes(ma)?(G.src=ma,!Ha.current&&da>0?(G.currentTime=da,Ha.current=!0):G.currentTime=0,G.volume=0,G.playbackRate=Et,G.play().catch(()=>{})):(G.playbackRate=Et,G.paused&&G.play().catch(()=>{})):W||(b.paused||b.pause(),R.paused||R.pause());const nt=setInterval(()=>{G.volume<B?G.volume=Math.min(B,G.volume+U):G.volume=B,ze.volume>0?ze.volume=Math.max(0,ze.volume-U):ze.pause(),G.volume===B&&ze.volume===0&&clearInterval(nt)},50);return()=>clearInterval(nt)},[oe,oa,Ne,ma,Qt,Et,da]),(0,n.useEffect)(()=>{St.current&&(St.current.playbackRate=Et),De.current&&(De.current.playbackRate=Et)},[Et]),(0,n.useEffect)(()=>{const b=setInterval(()=>{const R=St.current,W=De.current;if(!R||!W)return;const B=R&&!R.paused?R:W&&!W.paused?W:null;B&&B.currentTime>0&&u.default.setItem("bg_music_position",B.currentTime)},5e3);return()=>clearInterval(b)},[]);const sd=(0,n.useCallback)(async()=>{Ya(0),await u.default.setItem("bg_music_position",0),St.current&&(St.current.currentTime=0),De.current&&(De.current.currentTime=0),Ha.current=!1},[]),Vi=(0,n.useCallback)(()=>{const b=St.current,R=De.current;if(!b||!R)return;let W=b;if(R.src&&ma&&R.src.includes(ma)&&(W=R),Ke==="loop"){W.currentTime=0,W.play().catch(()=>{});return}const B=(jt||[]).find(G=>G&&G.file===xe);let U=1;B?U=B.repeats||1:Kt&&(U=ia[Kt]?.repeats||1),Ga(G=>{const ze=G+1;if(ze<U)return W.currentTime=0,W.play().catch(()=>{}),ze;if(Ke==="order"){const nt=Bl.map(Ze=>({id:Ze.id,file:vn[Ze.audio]||turkeysAudio,enabled:ia[Ze.id]?.enabled!==!1})).filter(Ze=>Ze.enabled),Pt=(jt||[]).filter(Ze=>Ze&&Ze.enabled!==!1),lt=[...nt.map(Ze=>({id:Ze.id,file:Ze.file,isCustom:!1})),...Pt.map(Ze=>({id:Ze.id,file:Ze.file,isCustom:!0}))];if(lt.length>0){const Ze=lt.findIndex(Dt=>Dt.file===xe);if(ct){const Dt=lt.filter(Ka=>Ka.file!==xe),$=Dt.length>0?Dt[Math.floor(Math.random()*Dt.length)]:lt[0];Ye($.file),na($.isCustom?null:$.id)}else{const Dt=lt[(Ze+1)%lt.length];Ye(Dt.file),na(Dt.isCustom?null:Dt.id)}}}return 0})},[Ke,xe,jt,ct,Kt,ia,ma]);(0,n.useEffect)(()=>{oe&&(St.current&&!St.current.paused?St.current.currentTime=0:De.current&&!De.current.paused&&(De.current.currentTime=0))},[Ke,oe]),(0,n.useEffect)(()=>{C&&(u.default.setItem("isDarkMode",A),u.default.setItem("sectionThemes",w),u.default.setItem("hiddenSections",y),u.default.setItem("hero_background",te),u.default.setItem("custom_hero_backgrounds",fe),u.default.setItem("hero_background_2",M),u.default.setItem("hero_background_3",ae),u.default.setItem("hero_background_4",ce),u.default.setItem("hero_bg_ratings",Ae),u.default.setItem("hero_bg_mode",_),u.default.setItem("hero_overlay_opacity",re),u.default.setItem("hero_slideshow_interval",Ct),u.default.setItem("hero_slideshow_transition",gt),u.default.setItem("hero_bg_filter_category",qe),u.default.setItem("hero_bg_zoom",Ot),u.default.setItem("hero_bg_rotation",ne),u.default.setItem("hero_bg_blur",Tt),u.default.setItem("hero_bg_blur_type",it),u.default.setItem("hero_bg_pixelation",wt),u.default.setItem("hero_bg_focal1",Fe),u.default.setItem("hero_bg_focal2",Gt),u.default.setItem("hero_bg_focal3",_t),u.default.setItem("hero_bg_focal4",fa),u.default.setItem("hero_bg_pan_enabled",Le),u.default.setItem("hero_bg_pan_speed",Yt),u.default.setItem("custom_holiday_name",Se),u.default.setItem("selected_timezone",D),u.default.setItem("weather_card_layout",Me),u.default.setItem("show_update_timer",ie),u.default.setItem("modal_loading_strategy",Mt))},[te,M,ae,ce,fe,Ae,_,re,Ct,gt,qe,Ot,ne,Tt,it,wt,Fe,Gt,_t,fa,Le,Yt,C,A,w,y,Se,D,Me,ie,Mt]),(0,n.useEffect)(()=>{k?.fastClicks?document.body.classList.add("fast-clicks-enabled"):document.body.classList.remove("fast-clicks-enabled")},[k?.fastClicks]),(0,n.useEffect)(()=>{if(C)if(k){const b=k.photoURL||k.avatar||v;u.default.setItem("active_user",{...k,photoURL:k.photoURL||k.avatar||""}),b&&(E(b),u.default.setItem("currentAvatar",b))}else u.default.removeItem("active_user")},[k,C]),(0,n.useEffect)(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),(0,n.useEffect)(()=>{la.current=X},[X]);const ca=(0,n.useCallback)(async(b,R,W=null,B=null,U=!1)=>{try{let G=W,ze=B,nt=typeof b=="string"?b:b?.fullName||"Ваша локація";if(b&&typeof b=="object"&&b.lat)G=b.lat,ze=b.lon,nt=b.fullName||nt;else if(typeof b=="string"){const ue=ql(b);if(ue)G=ue.lat,ze=ue.lon,nt=ue.fullName,b={id:`search-${ue.name.toLowerCase()}`};else{const et=await ar.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(b)}&count=1&language=uk`,{timeout:8e3});if(et.data.results&&et.data.results[0])G=et.data.results[0].latitude,ze=et.data.results[0].longitude,nt=et.data.results[0].name,b={id:Date.now()};else{alert("Місто не знайдено в базі Open-Meteo");return}}}const Pt=R?"main-card":b?.id||Date.now();if(!R&&!la.current.find(ue=>ue.id===Pt)){if(la.current.filter(ue=>!ue.isMain).length>=4){alert("Можна мати не більше 4 власних карток погоди плюс поточну GPS-картку.");return}if(H.current)try{const ue=Ja(Ia,"config",H.current.uid),et=await Wn(ue);let Ee=et.exists()?et.data():{};const we=new Date().toISOString().split("T")[0];if(Ee.cardAdditionsDate!==we&&(Ee.cardAdditionsCount=0,Ee.cardAdditionsDate=we),Ee.cardAdditionsCount>=10){alert("Ви досягли ліміту в 10 карток на добу.");return}Ee.cardAdditionsCount+=1,await Kn(ue,{cardAdditionsCount:Ee.cardAdditionsCount,cardAdditionsDate:Ee.cardAdditionsDate},{merge:!0})}catch(ue){console.error("Помилка перевірки ліміту Firestore:",ue)}}const lt=`https://api.open-meteo.com/v1/forecast?latitude=${G}&longitude=${ze}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,cloud_cover,visibility,dew_point_2m,temperature_80m,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm&hourly=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant,precipitation_probability_max,rain_sum,precipitation_sum,et0_fao_evapotranspiration,sunrise,sunset&timezone=auto&past_days=1&forecast_days=16`;console.log("Fetching weather from URL:",lt);let Ze,Dt;for(let ue=0;ue<2;ue+=1)try{Ze=await ar.get(lt,{timeout:2e4});break}catch(et){Dt=et,ue===0&&await new Promise(Ee=>setTimeout(Ee,1e3))}if(!Ze)throw Dt;const $=Ze.data;if(console.log("💾 RAW API RESPONSE for",nt,$),console.log("API Response raw data:",{hasResponse:!!$,currentData:$.current,hourlyData:$.hourly?{time:$.hourly.time?.slice(0,2),wind:$.hourly.wind_speed_10m?.slice(0,2)}:null,dailyData:$.daily?{time:$.daily.time?.slice(0,2),uv_index_max:$.daily.uv_index_max?.slice(0,2),wind_speed_10m_max:$.daily.wind_speed_10m_max?.slice(0,2)}:null}),(!$.current||$.current.wind_speed_10m===void 0)&&console.error("❌ Wind speed data missing from current!",{hasCurrentData:!!$.current,currentKeys:$.current?Object.keys($.current):[],windSpeed:$.current?.wind_speed_10m}),(!$.daily?.uv_index_max||$.daily.uv_index_max.length===0)&&console.error("❌ UV index data missing from daily!",{hasDailyData:!!$.daily,dailyKeys:$.daily?Object.keys($.daily):[],uvIndex:$.daily?.uv_index_max,uvLength:$.daily?.uv_index_max?.length}),$.hourly?.wind_speed_10m||console.error("❌ Hourly wind data missing!",{hasHourlyData:!!$.hourly,hourlyKeys:$.hourly?Object.keys($.hourly):[],wind:$.hourly?.wind_speed_10m}),"Notification"in window&&Notification.permission==="granted"){const ue=Date.now();if(ue-Number(window.localStorage.getItem("weatherNotificationLastSentAt")||0)>=36e5){const et=Math.round($.current.temperature_2m),Ee=Math.round($.current.apparent_temperature),we=$.current.wind_speed_10m??0,ye=$.current.relative_humidity_2m??0,Re=ki($.current.weather_code,$.current.is_day),ta=`Температура ${et}°C${Ee!==et?`, відчувається ${Ee}°C`:""}, ${Re}, вітер ${we} м/с, вологість ${ye}%.`;new Notification(`Погода: ${nt}`,{body:ta,icon:"/favicon.ico"}),window.localStorage.setItem("weatherNotificationLastSentAt",String(ue))}}const Ka=new Date;let mn=Ka.getHours();mn>=18&&(mn=18);const _n=`${Ka.getFullYear()}-${String(Ka.getMonth()+1).padStart(2,"0")}-${String(Ka.getDate()).padStart(2,"0")}T${String(mn).padStart(2,"0")}:00`;let Za=($.hourly?.time||[]).findIndex(ue=>ue.startsWith(_n));Za===-1&&(Za=0);const Yn=168;se(ue=>{const et=ue.find(we=>we.id===Pt);console.log(`Creating weather card for ${nt}`,{windSpeedCurrent:$.current?.wind_speed_10m,windSpeedHourly:$.hourly?.wind_speed_10m?.slice(0,3),uvIndexDaily:$.daily?.uv_index_max?.slice(0,3)});const Ee={id:Pt,isMain:R,locationName:R&&!b?.fullName?"Ваша локація":et?et.locationName:nt,lat:G,lon:ze,current:{temp:`${Math.round($.current.temperature_2m)}°C`,tempNum:Math.round($.current.temperature_2m),feels_like:`${Math.round($.current.apparent_temperature)}°C`,humidity:`${$.current.relative_humidity_2m}%`,pressure:`${Math.round($.current.surface_pressure)} hPa`,wind_speed:`${$.current.wind_speed_10m??0} м/с`,windNum:$.current.wind_speed_10m??0,wind_direction_10m:$.current.wind_direction_10m??0,wind_gusts_10m:$.current.wind_gusts_10m??0,uv_index:$.daily?.uv_index_max?.[0]??0,cloud_cover:$.current.cloud_cover??0,visibility:$.current.visibility??0,dew_point_2m:$.current.dew_point_2m??0,temperature_80m:$.current.temperature_80m??0,snow_depth:$.current.snow_depth??0,evapotranspiration:$.current.et0_fao_evapotranspiration??0,freezing_level_height:$.current.freezing_level_height??0,soil_temperature_0cm:$.current.soil_temperature_0cm??0,description:"За кодом: "+$.current.weather_code,iconPlaceholder:vi($.current.weather_code,$.current.is_day),iconSymbol:ji($.current.weather_code,$.current.is_day)},hourly:($.hourly?.time||[]).slice(Za,Za+Yn).map((we,ye)=>{const Re=Za+ye,ta=new Date(we),zt=we.slice(0,10),Xa=($.daily?.time||[]).indexOf(zt);let Qa=1;if(Xa!==-1&&$.daily?.sunrise?.[Xa]&&$.daily?.sunset?.[Xa])Qa=we>=$.daily.sunrise[Xa]&&we<=$.daily.sunset[Xa]?1:0;else{const Vn=ta.getHours();Qa=Vn>=6&&Vn<21?1:0}return{time:`${String(ta.getHours()).padStart(2,"0")}:00`,dateLabel:ta.toLocaleDateString("uk",{day:"2-digit",month:"2-digit"}),fullTime:we,temp:`${Math.round($.hourly?.temperature_2m?.[Re]??0)}°C`,tempNum:Math.round($.hourly?.temperature_2m?.[Re]??0),feels_like:`${Math.round($.hourly?.apparent_temperature?.[Re]??0)}°C`,windNum:$.hourly?.wind_speed_10m?.[Re]??0,wind_direction_10m:$.hourly?.wind_direction_10m?.[Re]??0,wind_gusts_10m:$.hourly?.wind_gusts_10m?.[Re]??0,relative_humidity_2m:$.hourly?.relative_humidity_2m?.[Re]??null,dew_point_2m:$.hourly?.dew_point_2m?.[Re]??0,precipitation:$.hourly?.precipitation?.[Re]??null,rain:$.hourly?.rain?.[Re]??null,pressure_msl:$.hourly?.pressure_msl?.[Re]??null,cloud_cover:$.hourly?.cloud_cover?.[Re]??null,visibility:$.hourly?.visibility?.[Re]??0,snow_depth:$.hourly?.snow_depth?.[Re]??0,evapotranspiration:$.hourly?.et0_fao_evapotranspiration?.[Re]??0,freezing_level_height:$.hourly?.freezing_level_height?.[Re]??0,soil_temperature_0cm:$.hourly?.soil_temperature_0cm?.[Re]??0,iconPlaceholder:vi($.hourly?.weather_code?.[Re]??0,Qa),iconSymbol:ji($.hourly?.weather_code?.[Re]??0,Qa),description:ki($.hourly?.weather_code?.[Re]??0,Qa)}}),daily16:($.daily?.time||[]).map((we,ye)=>({date:new Date(we).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),fullDate:we,day:new Date(we).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round($.daily.temperature_2m_max[ye]??0)}°C`,temp_night:`${Math.round($.daily.temperature_2m_min[ye]??0)}°C`,uv_index:$.daily.uv_index_max?.[ye]??0,wind_speed:`${$.daily.wind_speed_10m_max?.[ye]??0} м/с`,wind_direction_10m:$.daily.wind_direction_10m_dominant?.[ye]??0,precipitation_probability_max:$.daily.precipitation_probability_max?.[ye]??0,rain_sum:$.daily.rain_sum?.[ye]??0,precipitation_sum:$.daily.precipitation_sum?.[ye]??0,evapotranspiration:$.daily.et0_fao_evapotranspiration?.[ye]??0,sunrise:$.daily.sunrise?.[ye]??null,sunset:$.daily.sunset?.[ye]??null,iconPlaceholder:vi($.daily.weather_code[ye]??0,1),iconSymbol:ji($.daily.weather_code[ye]??0,1),description:ki($.daily.weather_code[ye]??0,1)}))};return console.log(`Card data created for ${nt}:`,{windSpeedStored:Ee.current.windNum,uvIndexStored:Ee.current.uv_index,hourlyWindSample:Ee.hourly?.slice(0,2).map(we=>we.windNum),dailyWindSample:Ee.daily16?.slice(0,2).map(we=>we.wind_speed)}),U?[Ee,...ue.filter(we=>we.id!==Pt)]:R?ue.some(we=>we.isMain)?ue.map(we=>we.isMain?Ee:we):[Ee,...ue]:et?ue.map(we=>we.id===Pt?Ee:we):ue.length>=8?ue:[...ue,Ee]});try{const ue=new Date,et=new Date(ue);et.setDate(et.getDate()+210);const Ee=Re=>Re.toISOString().split("T")[0],we=`https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${G}&longitude=${ze}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&start_date=${Ee(ue)}&end_date=${Ee(et)}`,ye=(await ar.get(we,{timeout:8e3})).data;if(ye?.daily?.time?.length){const Re=ye.daily.time.map((ta,zt)=>({fullDate:ta,date:new Date(ta).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),day:new Date(ta).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(Array.isArray(ye.daily.temperature_2m_max?.[0])?ye.daily.temperature_2m_max[0][zt]??0:ye.daily.temperature_2m_max?.[zt]??0)}°C`,temp_night:`${Math.round(Array.isArray(ye.daily.temperature_2m_min?.[0])?ye.daily.temperature_2m_min[0][zt]??0:ye.daily.temperature_2m_min?.[zt]??0)}°C`,wind_speed:`${Math.round(Array.isArray(ye.daily.wind_speed_10m_max?.[0])?ye.daily.wind_speed_10m_max[0][zt]??0:ye.daily.wind_speed_10m_max?.[zt]??0)} м/с`,precipitation_sum:Array.isArray(ye.daily.precipitation_sum?.[0])?ye.daily.precipitation_sum[0][zt]??0:ye.daily.precipitation_sum?.[zt]??0,isSeasonal:!0}));se(ta=>ta.map(zt=>zt.id===Pt?{...zt,seasonal:Re}:zt))}}catch(ue){console.warn("Seasonal forecast unavailable:",ue.message)}}catch(G){console.error("Помилка завантаження погоди",G)}},[]),Tr=(0,n.useCallback)(async(b,R)=>{try{const{current:W,daily:B}=(await ar.get(`https://api.open-meteo.com/v1/forecast?latitude=${b}&longitude=${R}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max&timezone=auto&forecast_days=3`,{timeout:8e3})).data||{};if(!W||!B)return console.warn("Weather danger check: Missing data",{hasCurrent:!!W,hasDaily:!!B}),null;const U=W.wind_speed_10m??0,G=W.temperature_2m??0,ze=B?.uv_index_max?.[0]??0;console.log("Weather danger check data:",{windSpeed:U,currentTemp:G,uvIndex:ze,hasUvData:!!B.uv_index_max});const nt=(Pt,lt,Ze,Dt)=>Pt>30||lt<-30||Ze>10||Dt>7;return nt(B?.temperature_2m_max?.[0]??G,B?.temperature_2m_min?.[0]??G,U,ze)?"red":B?.time?.some((Pt,lt)=>nt(B.temperature_2m_max?.[lt],B.temperature_2m_min?.[lt],B.wind_speed_10m_max?.[lt]||0,B.uv_index_max?.[lt]||0))?"orange":null}catch(W){return console.error("Weather danger check error:",W),null}},[]),Nn=(0,n.useCallback)(()=>{if(!V){ca({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52);return}if("geolocation"in navigator){const b={enableHighAccuracy:!0,timeout:5e3,maximumAge:3e4},R={enableHighAccuracy:!1,timeout:1e4,maximumAge:3e5},W=B=>{console.warn("Geolocation failed on mobile device:",B),ca({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)};navigator.geolocation.getCurrentPosition(B=>{ca({id:"main-card"},!0,B.coords.latitude,B.coords.longitude)},()=>{navigator.geolocation.getCurrentPosition(B=>{ca({id:"main-card"},!0,B.coords.latitude,B.coords.longitude)},W,R)},b)}else ca({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)},[ca,V]),Aa=(0,n.useCallback)(b=>{b.isMain?Nn():ca(b,!1)},[Nn,ca]),ld=(0,n.useCallback)(()=>{console.log("Manual bulk refresh triggered..."),la.current.length>0&&la.current.forEach(b=>Aa(b)),Ut(sa())},[Aa,sa]);(0,n.useEffect)(()=>{Nn()},[Nn]),(0,n.useEffect)(()=>{if(!C)return;const b=zh(window.location.search,window.location.hash);if(b.isSearchEntry&&b.cityName){const R=b.cityData;document.title=`Погода в місті ${b.cityName} — точний прогноз | Стихія`;const W=document.querySelector('meta[name="description"]');W&&W.setAttribute("content",`Точний прогноз погоди в місті ${b.cityName}: температура, вітер, вологість, тиск та графік на 16 днів.`);let B=document.querySelector('link[rel="canonical"]');B&&B.setAttribute("href",`https://stuxia.com/?q=погода+${encodeURIComponent(b.cityName.toLowerCase())}`);let U=document.getElementById("city-jsonld");U||(U=document.createElement("script"),U.id="city-jsonld",U.type="application/ld+json",document.head.appendChild(U)),U.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Place",name:b.cityName,description:`Точний прогноз погоди в місті ${b.cityName}`,address:{"@type":"PostalAddress",addressCountry:"UA",addressLocality:b.cityName}}),ca(R.lat!==null?{id:R.id,fullName:R.fullName,lat:R.lat,lon:R.lon}:R.name,!1,R.lat,R.lon,!0),setTimeout(()=>{const G=document.getElementById("weather");G&&G.scrollIntoView({behavior:"smooth"})},700)}},[C,ca]),(0,n.useEffect)(()=>{if(!C)return;const b=new Date;b.setDate(b.getDate()-1);const R=`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`;X.forEach(W=>{W.daily16?.[0]?.fullDate!==R&&Aa(W)})},[C,X,Aa]),(0,n.useEffect)(()=>{if(!C)return;const b=setInterval(()=>{if(document.visibilityState==="visible"){const R=sa();Ut(W=>(W<=5&&R>3590&&(console.log("Auto-updating weather cards at start of hour..."),la.current.forEach(B=>Aa(B))),R))}},1e3);return()=>clearInterval(b)},[C,Aa,sa]),(0,n.useEffect)(()=>{if(!C)return;const b=()=>{if(document.visibilityState==="hidden"){Ba.current=Date.now();return}const R=Ba.current?Date.now()-Ba.current:0;Ba.current=null,!(R<3e5)&&(la.current.forEach(W=>Aa(W)),Ut(sa()))};return document.addEventListener("visibilitychange",b),()=>document.removeEventListener("visibilitychange",b)},[C,Aa,sa]);const Ar=(0,n.useCallback)(b=>{se(R=>R.filter(W=>W.id!==b))},[]),Ir=(0,n.useCallback)(b=>{if(la.current.filter(R=>!R.isMain).length>=4){alert("Можна мати не більше 4 власних карток погоди плюс поточну GPS-картку.");return}ca(b,!1)},[ca]),Mr=(0,n.useCallback)((b,R)=>{se(W=>W.map(B=>B.id===b?{...B,locationName:R}:B))},[]),Dr=(0,n.useCallback)((b,R)=>{se(W=>{const B=W.findIndex(ze=>ze.id===b);if(B===-1)return W;const U=B+R;if(U<0||U>=W.length)return W;const G=[...W];return[G[B],G[U]]=[G[U],G[B]],G})},[]);(0,n.useEffect)(()=>{const b=setTimeout(()=>f(!0),3500),R=setInterval(()=>j(new Date),1e3);return()=>{clearTimeout(b),clearInterval(R)}},[]),(0,n.useEffect)(()=>{if(!l||!m)return;c(!0);const b=setTimeout(()=>a(!1),1800);return()=>clearTimeout(b)},[l,m]);const dd=()=>{K(null),E(Ti),u.default.removeItem("currentAvatar"),ve(!1)},zr=(0,n.useCallback)(()=>{F(b=>{const R=!b;return S({}),R})},[]),cd=(0,n.useCallback)(b=>{S(R=>({...R,[b]:!R[b]}))},[]),pd=(0,n.useCallback)(()=>{S({})},[]),ud=(0,n.useCallback)(b=>{h(R=>R.includes(b)?R.filter(W=>W!==b):Vr.length-R.length<=2?R:[...R,b])},[]),On=(()=>{const b=k?.showSeconds!==!1,R=k?.dateDisplayMode||"both",W=k?.hour12===!0;try{const B={timeZone:D,hour12:W};(R==="time"||R==="both")&&(B.hour="2-digit",B.minute="2-digit",b&&(B.second="2-digit")),(R==="date"||R==="both")&&(B.weekday="long",B.day="numeric",B.month="2-digit",B.year="numeric");const U=new Intl.DateTimeFormat("uk",B).formatToParts(N),G=Pt=>U.find(lt=>lt.type===Pt)?.value||"",ze=R==="time"||R==="both"?`${G("hour")}:${G("minute")}${b?":"+G("second"):""}${W&&G("dayPeriod")?" "+G("dayPeriod"):""}`:"",nt=R==="date"||R==="both"?`${G("weekday")?G("weekday").charAt(0).toUpperCase()+G("weekday").slice(1):""}${G("day")?`, ${G("day")}.${G("month")}.${G("year")}`:""}`:"";return R==="both"?`${ze} ${nt}`.trim():ze||nt}catch{return`${String(N.getHours()).padStart(2,"0")}:${String(N.getMinutes()).padStart(2,"0")}${k?.showSeconds!==!1?`:${String(N.getSeconds()).padStart(2,"0")}`:""} ${N.toLocaleDateString("uk")}`}})(),Bi=Xc(),Rr=fc();(0,n.useEffect)(()=>{!o&&Rr.pathname!=="/"&&Bi("/")},[o,Bi,Rr.pathname]);const fd=(b,R)=>{dn(W=>{const B=[...W],U=b+R;return U<0||U>=B.length||([B[b],B[U]]=[B[U],B[b]]),B})},Fr=(0,n.useCallback)(()=>pe(!0),[]),gd=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(gi,{heroDateString:On,onAddCity:Ir,startAnimation:!t,user:k,checkWeatherDanger:Tr,heroBg:te,setHeroBg:ee,heroBg2:M,setHeroBg2:O,heroBg3:ae,setHeroBg3:ge,heroBg4:ce,setHeroBg4:Y,isDarkMode:A,customHeroBgs:fe,setCustomHeroBgs:Q,heroBgMode:_,setHeroBgMode:me,heroOverlayOpacity:re,setHeroOverlayOpacity:Te,bgRatings:Ae,setBgRatings:ft,slideshowInterval:Ct,setSlideshowInterval:Jt,slideshowTransition:gt,setSlideshowTransition:Be,filterCategory:qe,setFilterCategory:Nt,heroBgZoom:Ot,setHeroBgZoom:Je,heroBgRotation:ne,setHeroBgRotation:Ie,heroBgBlur:Tt,setHeroBgBlur:At,heroBgBlurType:it,heroBgPixelation:wt,setHeroBgPixelation:xt,setHeroBgBlurType:Xe,heroBgFocal1:Fe,setHeroBgFocal1:st,heroBgFocal2:Gt,setHeroBgFocal2:Vt,heroBgFocal3:_t,setHeroBgFocal3:Ft,heroBgFocal4:fa,setHeroBgFocal4:Ma,heroBgPanEnabled:Le,setHeroBgPanEnabled:ot,heroBgPanSpeed:Yt,setHeroBgPanSpeed:Zt,videoPlaybackSpeed:Xt,setVideoPlaybackSpeed:ht,screenshots:We,selectedTimezone:D,setSelectedTimezone:T,customHolidayName:Se,isStickyBgMode:L,setCustomHolidayName:tt})}),(0,e.jsx)(wi,{className:"weather-section",$isDarkMode:w.weather??A,$isStickyBgMode:L,$isHidden:y.includes("weather"),children:(0,e.jsx)(Si,{section:Wt.find(b=>b.key==="weather"),weatherCards:X,heroDateString:On,isDarkMode:w.weather??A,isLocationEnabled:V,handleRefreshCard:Aa,handleDeleteCard:Ar,handleRenameCard:Mr,moveWeatherCard:Dr,setIsLocationEnabled:Z,user:k,isAnyModalOpen:Ca,onUpdateUser:K,setHeroBg:ee,customHeroBgs:fe,setCustomHeroBgs:Q,handleOpenRegister:Fr,customHolidayName:Se,isStickyBgMode:L,setCustomHolidayName:tt,weatherCardLayout:Me,isWeatherDetailsOpen:ea,setIsWeatherDetailsOpen:Ve,selectedWeatherCard:Ue,setSelectedWeatherCard:_a,setIsFsActive:$e,isStickyBgMode:L})})]}),xd=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(gi,{heroDateString:On,onAddCity:Ir,startAnimation:!t,user:k,isDarkMode:A,checkWeatherDanger:Tr,heroBg:te,setHeroBg:ee,heroBg2:M,setHeroBg2:O,heroBg3:ae,setHeroBg3:ge,heroBg4:ce,setHeroBg4:Y,customHeroBgs:fe,setCustomHeroBgs:Q,heroBgMode:_,setHeroBgMode:me,heroOverlayOpacity:re,setHeroOverlayOpacity:Te,bgRatings:Ae,setBgRatings:ft,slideshowInterval:Ct,setSlideshowInterval:Jt,slideshowTransition:gt,setSlideshowTransition:Be,filterCategory:qe,setFilterCategory:Nt,heroBgZoom:Ot,setHeroBgZoom:Je,heroBgRotation:ne,setHeroBgRotation:Ie,heroBgBlur:Tt,setHeroBgBlur:At,heroBgBlurType:it,heroBgPixelation:wt,setHeroBgPixelation:xt,setHeroBgBlurType:Xe,heroBgFocal1:Fe,setHeroBgFocal1:st,heroBgFocal2:Gt,setHeroBgFocal2:Vt,heroBgFocal3:_t,setHeroBgFocal3:Ft,heroBgFocal4:fa,setHeroBgFocal4:Ma,heroBgPanEnabled:Le,setHeroBgPanEnabled:ot,heroBgPanSpeed:Yt,setHeroBgPanSpeed:Zt,videoPlaybackSpeed:Xt,setVideoPlaybackSpeed:ht,screenshots:We,selectedTimezone:D,setSelectedTimezone:T,customHolidayName:Se,isStickyBgMode:L,setCustomHolidayName:tt})}),(0,e.jsx)("div",{className:"container",children:Wt.map(b=>b.key!=="hero"&&(0,e.jsx)(wi,{$isDarkMode:w[b.key]??A,$isStickyBgMode:L,$isHidden:y.includes(b.key),children:(0,e.jsx)(Si,{section:b,weatherCards:X,isDarkMode:w[b.key]??A,isLocationEnabled:V,handleRefreshCard:Aa,handleDeleteCard:Ar,handleRenameCard:Mr,moveWeatherCard:Dr,setIsLocationEnabled:Z,user:k,isAnyModalOpen:Ca,onUpdateUser:K,setHeroBg:ee,customHeroBgs:fe,setCustomHeroBgs:Q,handleOpenRegister:Fr,customHolidayName:Se,isStickyBgMode:L,setCustomHolidayName:tt,weatherCardLayout:Me,isWeatherDetailsOpen:ea,setIsWeatherDetailsOpen:Ve,selectedWeatherCard:Ue,setSelectedWeatherCard:_a,heroDateString:On,setIsFsActive:$e,isStickyBgMode:L})},b.key))})]});return(0,e.jsx)(ph,{isDarkMode:A,children:(0,e.jsxs)(Dh,{isDarkMode:A,onToggleTheme:zr,children:[(0,e.jsx)(Hh,{user:k}),(0,e.jsx)(Qh,{$locked:oa&&Oa}),(0,e.jsx)(k0,{isLoading:t,isFadingOut:r,randomPhrase:x.text&&(0,e.jsxs)(pm,{$isNew:x.isNew,children:[x.text,bt.map(b=>(0,e.jsx)(dm,{$x:b.x,$y:b.y,$delay:b.delay,$isNew:x.isNew,children:"✧"},b.id))]})}),(0,e.jsx)(am,{$isDarkMode:A,$isStickyBgMode:L,children:(0,e.jsxs)("div",{className:"App",children:[(0,e.jsx)("audio",{ref:St,onEnded:Vi,preload:"auto"}),(0,e.jsx)("audio",{ref:De,onEnded:Vi,preload:"auto"}),(0,e.jsx)("div",{className:"container",children:(0,e.jsx)(Tu,{sfxVolume:Ra,onOpenRegister:()=>pe(!0),onOpenLogin:()=>Ge(!0),onOpenSettings:()=>ve(!0),onOpenVip:()=>mt(!0),onOpenShop:()=>vt(!0),onOpenAchievements:()=>Bt(!0),onOpenHelp:()=>$t(!0),onOpenInfo:()=>It(!0),onOpenAuthorsDirectory:()=>ja(!0),onOpenOtherOptions:()=>ve(!0),onCloseInfo:()=>It(!1),isInfoOpen:kt,user:k,isDarkMode:A,toggleTheme:zr,currentAvatar:v,onLogout:dd,currentPath:Rr.pathname.substring(1),loadingStrategy:Mt,onSetLoadingStrategy:Fa,setIsFsActive:$e,isStickyBgMode:L,setIsStickyBgMode:z})}),(0,e.jsx)("main",{children:(0,e.jsx)(n.Suspense,{fallback:null,children:(0,e.jsxs)(t0,{children:[(0,e.jsx)(Pr,{path:"/",element:xd}),Wt.map(b=>(0,e.jsx)(Pr,{path:`/${b.path}`,element:b.key==="weather"?gd:(0,e.jsx)("div",{className:"container",style:{paddingTop:"40px",minHeight:"80vh"},children:b.key==="hero"?(0,e.jsx)(gi,{heroDateString:On,onAddCity:Ir,startAnimation:!t,user:k,isDarkMode:w.hero??A,checkWeatherDanger:Tr,heroBg:te,setHeroBg:ee,heroBg2:M,setHeroBg2:O,heroBg3:ae,setHeroBg3:ge,heroBg4:ce,setHeroBg4:Y,customHeroBgs:fe,setCustomHeroBgs:Q,heroBgMode:_,setHeroBgMode:me,heroOverlayOpacity:re,setHeroOverlayOpacity:Te,bgRatings:Ae,setBgRatings:ft,slideshowInterval:Ct,setSlideshowInterval:Jt,slideshowTransition:gt,setSlideshowTransition:Be,filterCategory:qe,setFilterCategory:Nt,heroBgZoom:Ot,setHeroBgZoom:Je,heroBgRotation:ne,setHeroBgRotation:Ie,heroBgBlur:Tt,setHeroBgBlur:At,heroBgBlurType:it,heroBgPixelation:wt,setHeroBgPixelation:xt,heroBgFocal1:Fe,setHeroBgFocal1:st,heroBgFocal2:Gt,setHeroBgFocal2:Vt,heroBgFocal3:_t,setHeroBgFocal3:Ft,heroBgFocal4:fa,setHeroBgFocal4:Ma,heroBgPanEnabled:Le,setHeroBgPanEnabled:ot,heroBgPanSpeed:Yt,setHeroBgPanSpeed:Zt,videoPlaybackSpeed:Xt,setVideoPlaybackSpeed:ht,screenshots:We,selectedTimezone:D,setSelectedTimezone:T,customHolidayName:Se,isStickyBgMode:L,setCustomHolidayName:tt}):(0,e.jsx)(wi,{$isDarkMode:w[b.key]??A,$isStickyBgMode:L,$isHidden:!1,children:(0,e.jsx)(Si,{section:b,weatherCards:X,isDarkMode:w[b.key]??A,isLocationEnabled:V,handleRefreshCard:Aa,handleDeleteCard:Ar,handleRenameCard:Mr,moveWeatherCard:Dr,setIsLocationEnabled:Z,user:k,isAnyModalOpen:Ca,onUpdateUser:K,setHeroBg:ee,customHeroBgs:fe,setCustomHeroBgs:Q,handleOpenRegister:Fr,customHolidayName:Se,isStickyBgMode:L,setCustomHolidayName:tt,isWeatherDetailsOpen:ea,setIsWeatherDetailsOpen:Ve,selectedWeatherCard:Ue,setSelectedWeatherCard:_a,setIsFsActive:$e,isStickyBgMode:L})})})},b.key)),(0,e.jsx)(Pr,{path:"*",element:(0,e.jsx)(Dp,{})})]})})}),(0,e.jsxs)(n.Suspense,{fallback:null,children:[q&&(0,e.jsx)(_h,{onClose:()=>pe(!1),onRegister:b=>{K(b),pe(!1)},availableAvatars:Fs,isDarkMode:A}),He&&(0,e.jsx)(Yh,{onClose:()=>Ge(!1),onLogin:b=>{K(b),Ge(!1)}}),(he||aa)&&(0,e.jsx)(Zh,{onClose:()=>{ve(!1),J(!1)},user:k,availableAvatars:Fs,onUpdate:K,weatherCardLayout:Me,onUpdateLayout:ka,showUpdateTimer:ie,setShowUpdateTimer:dt,isDarkMode:A,bgMusicEnabled:oe,setBgMusicEnabled:_e,autoMuteBgMusic:Ne,setAutoMuteBgMusic:Oe,bgMusicSource:xe,setBgMusicSource:Ye,customBgTracks:jt,setCustomBgTracks:Na,bgMusicVolume:Qt,setBgMusicVolume:Pa,bgMusicSpeed:Et,setBgMusicSpeed:rn,bgMusicMode:Ke,setBgMusicMode:Ht,bgMusicShuffle:ct,setBgMusicShuffle:za,libraryBgSettings:ia,setLibraryBgSettings:ga,activeBgTrackId:Kt,setActiveBgTrackId:na,onResetBgPosition:sd,sfxVolume:Ra,setSfxVolume:ra,bgAudioRef:St,bgAudioRef2:De,onToggleTheme:zr,siteSections:Wt,moveSiteSection:fd,resetSiteSections:()=>dn([...Vr]),sectionThemes:w,hiddenSections:y,onToggleSectionVisibility:ud,onToggleSectionTheme:cd,onResetSectionThemes:pd,isRoutingMode:o,setIsRoutingMode:I,loadingStrategy:Mt,onSetLoadingStrategy:Fa,isStickyBgMode:L,onToggleStickyBg:()=>z(!L)}),Lt&&(0,e.jsx)(VipModal,{onClose:()=>mt(!1)}),be&&(0,e.jsx)(Jh,{onClose:()=>vt(!1),hasVip:!!k}),Pe&&(0,e.jsx)(AchivmentsModal,{onClose:()=>Bt(!1),isDarkMode:A}),ke&&(0,e.jsx)(yi,{isDarkMode:A,isOpen:ke,onClose:()=>$t(!1)}),p&&(0,e.jsx)(yi,{isOpen:p,onClose:()=>P(!1)}),kt&&(0,e.jsx)(yi,{onClose:()=>It(!1)}),(0,e.jsx)(Vu,{isOpen:Da,onClose:()=>ja(!1)}),(0,e.jsx)(Xh,{isOpen:ea,onClose:()=>Ve(!1),card:Ue,isDarkMode:A})]}),ie&&(0,e.jsx)(Uh,{content:"Налаштування вигляду",isDarkMode:A,children:(0,e.jsxs)(cm,{$isDarkMode:A,onClick:ld,"aria-label":"Показує час оновлення картки теперішньої погоди і ШІ прогноз.",children:["Оновлення погоди через: ",Math.floor(on/60),":",(on%60).toString().padStart(2,"0")]})}),(0,e.jsx)(Mh,{isStickyBgMode:L})]})}),je&&(0,e.jsx)(Wp,{isDarkMode:A,endTime:xa,message:ha})]})})};function fm(){return(0,e.jsx)(ep,{children:(0,e.jsx)(um,{})})}window.addEventListener("error",t=>{if(t.message.includes("AbortError")||t.message.includes("aborted"))return t.preventDefault(),!1});window.addEventListener("unhandledrejection",t=>{if(t.reason?.name==="AbortError"||t.reason?.message?.includes("aborted"))return t.preventDefault(),!1});i0.createRoot(document.getElementById("root")).render((0,e.jsx)(Oc,{store:l0,children:(0,e.jsxs)(kc,{children:[(0,e.jsx)(fm,{}),(0,e.jsx)(Rd,{position:"bottom-right",reverseOrder:!1})]})}));export{M0 as _,Bo as a,vn as c,ym as d,cn as f,qs as g,Fi as h,Ju as i,Bl as l,Ei as m,dg as n,cu as o,kn as p,Yl as r,pu as s,rd as t,Vo as u,A0 as v,vr as y};
