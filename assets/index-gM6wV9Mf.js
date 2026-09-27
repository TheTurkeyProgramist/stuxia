const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Aihelp-BUdNmg85.js","assets/rolldown-runtime-BNNRdYrd.js","assets/vendor-react-BrnrJ3qF.js","assets/FanArt-DcLbXh_a.js","assets/ShopModal-BdTDTsYi.js","assets/ClimateMap-CJPB-PGL.js","assets/Modal-D8OBmo47.js","assets/KatSceneModal-u9EmPB7S.js","assets/LoginModal-6SQNeaR8.js","assets/UserSettingsModal-CP2JHJMD.js","assets/bgMusicCatalog-B0iCy7dT.js","assets/WeatherDetailsModal-tQfoa3jp.js","assets/OtherOptionsModal-Ccz9tW2D.js"])))=>i.map(i=>d[i]);
import{o as Ua,r as Ws}from"./rolldown-runtime-BNNRdYrd.js";import{$ as bo,$r as Cd,$t as Mn,A as Td,Ar as yo,Br as Ad,Bt as Id,Cr as Dd,Ct as ca,Dr as _t,Dt as Md,Er as zd,Et as $d,F as wo,Fr as $r,Ft as vo,Gr as et,Gt as Rd,Hr as Ld,Ht as Sn,I as Fd,Ir as Ed,J as vr,Jr as Pd,Jt as Nd,Kr as i,Kt as ko,Lr as Od,Lt as Vd,M as Bd,Mt as Hd,N as La,Nr as _s,Nt as Kd,Or as $a,Ot as jo,Pr as So,Pt as Ud,Q as qa,Qr as Wd,R as _d,Rn as qs,Rr as qd,Rt as Jd,Sr as Gd,St as pa,Tr as Yd,Tt as ua,U as Zd,Un as Xd,Ur as le,Vr as Rr,Vt as Co,W as Ja,Wr as Qd,X as ec,Xr as zi,Xt as To,Y as Ao,Yr as tc,Yt as Js,Z as Ba,Zr as jr,_n as Ga,_r as Da,_t as fa,ai as nc,an as Io,ar as ac,bn as Do,br as rc,bt as ga,ci as ic,cn as oc,cr as sc,dn as lc,dr as Mo,dt as dc,ei as Lr,en as cc,er as zo,et as $o,fn as pc,fr as Gs,ft as xa,gn as uc,gr as fc,gt as ha,hn as gc,hr as Ys,ht as ma,ii as kt,in as Fr,ir as xc,it as hc,j as Er,jr as Ro,jt as mc,kr as bc,kt as yc,ln as Lo,lr as Ya,mn as Fo,mr as wc,mt as ba,ni as vc,nn as kc,nr as Zs,nt as jc,oi as Sc,on as Cc,or as Tc,pn as Eo,pr as Oa,pt as ya,q as Za,qr as Ac,ri as Xs,rn as Po,rr as Ic,rt as Dc,si as Mc,sn as No,sr as Oo,st as zc,ti as $c,tn as Rc,tr as Lc,tt as Wn,un as Fc,ur as Ec,vn as Xa,vr as Pc,vt as wa,wr as Nc,wt as va,xn as Oc,xr as Vc,xt as ka,yn as Bc,yr as Hc,yt as ja,z as Kc}from"./vendor-react-BrnrJ3qF.js";import{n as $i,t as Qs}from"./texts-DkcRWazW.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function a(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(l){if(l.ep)return;l.ep=!0;const d=a(l);fetch(l.href,d)}})();var e=ic(),r=Ua(Mc()),Uc=Ua(nc()),el=Pd({name:"calendar",initialState:{customDays:[]},reducers:{addCustomDay:(t,n)=>{const{id:a,date:c,time:l,reason:d,duration:h,durationUnit:u,cardId:g}=n.payload;t.customDays.push({id:a||Date.now(),date:c,time:l||"00:00",reason:d,duration:h||1,durationUnit:u||"hours",cardId:g||"all"})},removeCustomDay:(t,n)=>{t.customDays=t.customDays.filter(a=>a.id!==n.payload)},updateCustomDay:(t,n)=>{const{date:a,reason:c}=n.payload,l=t.customDays.find(d=>d.date===a);l&&(l.reason=c)},setCustomDays:(t,n)=>{t.customDays=n.payload}}}),{addCustomDay:tl,removeCustomDay:Wc,updateCustomDay:$m,setCustomDays:Rm}=el.actions,_c=el.reducer,qc=Ac({reducer:{calendar:_c}}),f=Ua(Ld()),kr="/assets/fogtwo--KsskB7I.webp",Jc=[{r:1,c:1,delay:"0s"},{r:1,c:2,delay:"0.1s"},{r:1,c:3,delay:"0.2s"},{r:2,c:3,delay:"0.3s"},{r:3,c:3,delay:"0.4s"},{r:3,c:2,delay:"0.5s"},{r:3,c:1,delay:"0.6s"},{r:2,c:1,delay:"0.7s"}],Gc=le`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,Yc=le`
  0% { opacity: 1; }
  12.5% { opacity: 0; }
  62.5% { opacity: 0.25; }
  75% { opacity: 0.5; }
  87.5% { opacity: 0.75; }
  100% { opacity: 1; }
`,Zc=i.div`
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
  transition:
    opacity 0.8s ease-in-out,
    visibility 0.8s ease-in-out;
  overflow: hidden;
  will-change: opacity, visibility;
`,Xc=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Qc=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  animation: ${Gc} 0.8s ease-out forwards;
`,e0=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
  transition: opacity 0.8s ease-in-out;
  opacity: ${t=>t.$active?1:0};
`,t0=i.div`
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
`,n0=i.div`
  margin-top: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  width: 100%;
`,a0=i.div`
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
`,r0=i.p`
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
`,i0=i.div`
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
`,o0=i.span`
  font-size: 12px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: right;
  min-width: 170px;
`,s0=i.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  grid-template-rows: repeat(3, 10px);
  gap: 3px;
`,l0=i.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  animation: ${Yc} 0.8s infinite linear;
  grid-row: ${t=>t.$r};
  grid-column: ${t=>t.$c};
  animation-delay: ${t=>t.$delay};
`;function d0({isLoading:t,isFadingOut:n,randomPhrase:a}){return(0,r.useEffect)(()=>{const c=new Image;c.src=kr},[]),t?(0,e.jsxs)(Zc,{$isFadingOut:n,children:[(0,e.jsxs)(i0,{children:[(0,e.jsx)(o0,{children:"v.1.0.0 | Я в Конотопі :)"}),(0,e.jsx)(s0,{children:Jc.map((c,l)=>(0,e.jsx)(l0,{$r:c.r,$c:c.c,$delay:c.delay},l))})]}),(0,e.jsxs)(Xc,{children:[(0,e.jsx)(Qc,{children:(0,e.jsx)(e0,{src:kr,$active:!0,alt:"Loading..."})}),(0,e.jsx)(t0,{children:(0,e.jsxs)(n0,{children:[a&&(0,e.jsx)(a0,{children:a}),(0,e.jsx)(r0,{children:"2026 Stuxia™. Всі права захищені. Автор: TheTurkeyProgramist"})]})})]})]}):null}var c0="/assets/sunnight-DmKgKNb4.webp",p0="/assets/daysthunders-CVOnKTPo.webp",u0=Ua(fc()),f0=(t,n=0)=>{if(!t)return n===0?"Сьогодні":`День ${n+1}`;const a=String(t).trim(),c=new Date,l=new Date(c);l.setHours(0,0,0,0);const[d,h]=a.split(".").map(u=>Number(u));if(d&&h){const u=new Date(c.getFullYear(),h-1,d),g=Math.round((u-l)/864e5);return g===0?`${a} (Сьогодні)`:g===1?`${a} (Завтра)`:g===2?`${a} (Післязавтра)`:`${a} (${u.toLocaleDateString("uk",{weekday:"short"})})`}return a},g0=(t=[])=>{if(!Array.isArray(t)||t.length===0)return[];const n=[],a=new Map;return t.forEach((c,l)=>{const d=c?.dateLabel||c?.date||"today";a.has(d)||(a.set(d,[]),n.push({label:d,title:f0(d,n.length),items:[]})),a.get(d).push(c)}),n.forEach(c=>{c.items=a.get(c.label)||[]}),n},x0="/assets/prison-BANVSR28.mp4",h0="/assets/hiils-CwRk4ZgD.webp",m0="/assets/studi-DHg_t1il.webp",b0="/assets/penny-BUV12nwB.webp",y0="/assets/fog-DJVy3omR.webm",w0="/assets/nicerone-CfBwIS_m.webm",nl="/assets/asium-B_nRztWf.webp",al="/assets/horse-DCbtELLC.webp",rl="/assets/theorytwo-omR0ZjVQ.webp",v0="/assets/theorytwo-COG3p5Yj.mp4",k0="/assets/theory-DnqpX73C.mp4",il="/assets/fingerdash-DEsolxme.webp",ol="/assets/electrodynamix-lzudItwJ.webp",Ka="/assets/sirenhead-Dh1KPUjM.webp",j0="/assets/backrooms-C_N8r861.webp",sl="/assets/deserttwo-Bpbh89pi.webp",ll="/assets/desertthree-B1yTfM-X.webp",dl="/assets/desertfour-KOc6byy4.webp",cl="/assets/desertone-CTJSVy53.webp",pl="/assets/mechannic-B4qHsIdf.webp",ul="/assets/clubstep-BGgJ_grP.webp",Sr="/assets/ultra-vip-turkeys--dWdDrjz.webp",fl="/assets/chess-DE0SQ6bR.webp",S0="/assets/aurorahills-DmZEChm7.webp",gl="/assets/turkeytwo-DEtUfl4n.webp",xl="/assets/turkeysthree-DWkC9U9r.webp",hl="/assets/turkeysfour-B1peYkuR.webp",ml="/assets/turkeysfive-B9fezKPV.webp",bl="/assets/turkeyssix-C74RJO0D.webp",yl="/assets/turkeysone-ByUfHIKS.webp",wl="/assets/turkeysseven-C_bOyIyj.webp",vl="/assets/asiuntwo-B0HnOhGB.webp",kl="/assets/asiumthree-BHhNiv03.webp",jl="/assets/asiumfour-CleyN5g2.webp",Sl="/assets/asiumfive-DSDp7YH4.webp",Cl="/assets/asiumsix-D7UysOUw.webp",Tl="/assets/asiumeleven-BHmk7Yt4.webp",Al="/assets/asiumtwelve-roupkWdg.webp",Il="/assets/asiumseven-DFmFFiYc.webp",Dl="/assets/swamptwo-8_PhuQBm.webp",Ml="/assets/swampthree-D1x5tDiJ.webp",zl="/assets/swampsix-DzD2OZh6.webp",$l="/assets/seampseven-aw1KjEtN.webp",Rl="/assets/swampeight-Cxl2rbCa.webp",Ll="/assets/swampnine-BGdJXMuv.webp",Fl="/assets/theory-BgbF1Vw-.webp",El="/assets/deadlocked-D6Jzwofg.webp",Pl="/assets/horrortwo-D8aEwkY_.webp",Nl="/assets/horrorthree-BFEovIOX.webp",Ol="/assets/horrorfour-DmgPluVF.webp",Ri="/assets/horror-Bwtso3fm.webp",Vl="/assets/horrorsix-FrdmNrLk.webp",Bl="/assets/horroreight-N8Azt2Lm.webp",Li="/assets/vip-dinofroz-C4DCnog6.webp",Hl="/assets/dinofrozthree-h3bRBpyn.webp",Kl="/assets/dinofrozfour-DkpUmpno.webp",Ul="/assets/dinofrozfive-vsWApnpV.webp",Wl="/assets/dinofrozsix-B2cUeZYK.webp",_l="/assets/dinofrozseven-r29p04F4.webp",ql="/assets/dinofrozeight-D_wKW6F3.webp",Fi="/assets/vip-dragons-B9_gfJz_.webp",Jl="/assets/dinofroznine-Btp0fI_a.webp",C0="/assets/nicerone-w6vAmYap.webp",Gl="/assets/village-mmk5VN8H.webp",T0="/assets/sevendays-D9rpKRGr.mp4",A0="/assets/vladone-D0GzLk2B.mp4",I0="/assets/domino-B2kX1s2n.webp",D0="/assets/shop-CjzVirJw.mp4",Yl="/assets/faded-CfnCTW9-.webp",M0="/assets/faded-B0cqhRG7.mp4",Zl="/assets/miaandme-BLF13Fck.webp",z0="/assets/fire-2pNCSf4p.webp",$0="/assets/clubstep-B4vGowaQ.mp4",R0="/assets/titanic-psUEvksY.webp",L0="/assets/smit-Blk03HJN.webp",F0="/assets/electrodynamix-Pgbof-vP.mp4",E0="/assets/volcano-BtJBGKCf.mp4",P0="/assets/whiteloud-LRq9ym10.mp4",N0="/assets/wall-BZpLy1oe.webp",O0="/assets/slivkishow-CNgttXyQ.webm",V0="/assets/days-BYTNHXwz.mp4",Si="/assets/dinofroz-BldqOi3Z.webm",Fa=[{src:Ka,name:"Щось не так...",category:"Темрява та Містика",author:"Тревор Хендерсон",description:"Навіть ті хто не знають його, починають розуміти ця вишка з сиренами, не така вже вже й не рухома..."},{src:Qs,name:"Єгипетські ієрогліфи",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:`Ця картина має глибоку, містичну та інтроспективну атмосферу. Вона ідеально резонує з певним психологічним профілем і складом особистості:
Глибока інтроверсія та рефлексія: Цей образ обирають люди, які відновлюють енергію в тиші та самотності. Вони схильні до глибокого аналізу власних думок і почуттів, вважаючи за краще спостерігати за світом збоку, аніж бути в центрі уваги.
Філософський склад розуму: Символіка ієрогліфів символізує складність буття. Людина з таким характером не лякається невідомості — її приваблюють таємниці, пошук прихованих сенсів та роздуми над глобальними питаннями.`},{src:V0,name:"Крижана катастрофа",category:"Природа та Стихії",author:"20th Century Fox",source:"Фільм 'Післязавтра'",start:0,end:300,description:"Тут зображено наслідки людської жадібності та безвідповідальності перед природою. Люди, які обирають цей фон, часто мають песимістичний погляд на світ і схильні до глибоких роздумів про майбутнє планети. Вони можуть відчувати тривогу щодо змін клімату та екологічних катастроф, що відображає їхню турботу про навколишнє середовище та бажання знайти рішення для збереження природи."},{src:$i,name:"Туманний ліс",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Це стартовий фон для всіх користувачів :) Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:y0,name:"Туманний ліс (Відео)",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:Yl,name:"Курорт",category:"Природа та Стихії",author:"TheTurkeyStudio",description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:M0,name:"Курорт (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:`Ви на пляжі! Цей фон створює атмосферу відпочинку та свободи. Люди, які обирають його, часто мають схильність до спокійного життя та цікавляться природою. Вони можуть бути відкритими та любити подорожувати.
Використав на сайті як обкладинку до пісні 'Faded' від Alan Walker.`},{src:O0,name:"Політ Кукі у стратосферу",category:"Природа та Стихії",author:"SlivkiShow",start:0,end:78,description:"Тут показано цікавий політ на висоту 30 000 метрів! Приємного перегляду небесних краєвидів!"},{src:m0,name:"Художня студія",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу творчості та натхнення. Люди, які обирають його, часто мають схильність до мистецтва та креативного самовираження. Вони можуть бути відкритими до нових ідей та люблять експериментувати з різними формами мистецтва, що відображає їхню творчу натуру."},{src:F0,name:"Гроза (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:7,description:"Цей фон створює атмосферу енергії та динаміки. Люди, які обирають його, часто мають схильність до активного способу життя та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:h0,name:"Гори",category:"Природа та Стихії",author:"TheTurkeyStudio",description:`По секрету, я планував зробити його фоном сайту у старих версіях, до 'Туманного лісу'. 
Цей фон створює атмосферу величі та спокою. Люди, які обирають його, часто мають схильність до природи та люблять відчувати себе частиною великого світу. Вони можуть бути інтроспективними та цінувати моменти тиші та роздумів, що відображає їхню глибоку натуру.`},{src:z0,name:"Вулкан",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:E0,name:"Вулкан (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу сили та енергії. Люди, які обирають його, часто мають схильність до пригод та цікавляться природними явищами. Вони можуть бути відкритими до нових викликів та люблять відчувати адреналін, що відображає їхню енергійну натуру."},{src:S0,name:"Аврора Гіллс",category:"Темрява та Містика",author:"NovaSoft Interactive",description:"Цей фон взятий з Hidden Object Adventure гри 'Aurora Hills'. Сюжет гри: Ви рейнджер парку у скромному містечку, але люди починають зникати безвісти. Посилання на гру: https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk"},{src:$l,name:"Туман, що дивиться",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Цей фон створює атмосферу таємничості та невизначеності. Люди, які обирають його, часто мають схильність до дослідження невідомого та цікавляться містичними явищами. Вони можуть бути інтроспективними та люблять розгадувати загадки, що відображає їхню цікавість до світу навколо та бажання зрозуміти його глибше."},{src:D0,name:"Магазин Доміно (Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:"Затишна та динамічна атмосфера міського життя. Цей фон підійде тим, хто шукає натхнення у звичайних щоденних моментах, цінує теплі міські локації та комфортний ритм сучасності."},{src:x0,name:"Кришталева в'язниця",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300,description:"Загадковий і холодний фон, що випромінює застережливу красу та напругу. Він приваблює шанувальників гостросюжетних історій, психологічних загадок та атмосфери таємничої небезпеки."},{src:I0,name:"Риболов",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Символ терпіння, витримки та спокійної спостережливості. Цей фон обирають люди, які цінують усамітнення на природі, вміють вичікувати правильний момент та шукають відпочинку від щоденної метушні."},{src:N0,name:"Стиль лофт",category:"Природа та Стихії",author:"TheTurkeyStudio",description:`Сучасний, лаконічний і стильний інтер'єр із духом свободи. Цей фон відображає прагнення до простору, практичності та естетики урбанізму, приваблюючи людей із витонченим смаком.
 Хоча це просто купа цегли :)`},{src:P0,name:"Білий шум",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:"Мінімалістичний фон для повного занурення та концентрації. Він створює нейтральний простір без зайвих подразників, допомагаючи відключитися від зовнішнього хаосу та зосередитися на власних думках."},{src:w0,name:"Імператор Ніцерон (Відео)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:`Цей фон символізує, жагу до небезпек та пригод, і цей дракон вас не зупинить! 
Через нього, мені прийшла в голову ідея, з сайтом погоди у якому купа відсилок ;) Це секретик :) `},{src:A0,name:"Генерал Влад (Відео, сезон 1)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз",start:0,end:300,description:"Головні герои в пастці…. Цей фон символізує жагу до свободи, і командної роботи(герої шукають план втечі…, а дракони, хочуть не допустити цього…)"},{src:Gl,name:"Древніус і Даркніс",category:"Фентезі та Легенди",author:"highbrow",source:"Dragon Village 3",description:`Картина, прекрасна. Ідеальна для тих хто любить шукати плюси і мінуси. 
Лінк на гру:`},{src:Li,name:"Імператор Ніцерон",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Fi,name:"Генерал Влад (2 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Hl,name:"Прев'ю мультфільму",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Kl,name:"Драгемон (2 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Ul,name:"Мелтстон",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Wl,name:"Переміщення у часі",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:_l,name:"Генерал Влад (1 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:ql,name:"Генерал Трік (1 сезон)",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:Jl,name:"Погляд у Рокфроз",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:il,name:"Замок Ніцерона",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:C0,name:"Іще варіант",category:"Фентезі та Легенди",author:"Mondo TV",source:"м/с Динофроз"},{src:al,name:"Кінь",category:"Природа та Стихії",author:"Генерація ШІ(Gemini)"},{src:Sr,name:"Індичка Кейт",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:yl,name:"Мале бундюче стадо",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:gl,name:"Малий, але впевнений",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:xl,name:"Дивись мені в очі!",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:hl,name:"І знову про індиків",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:ml,name:"2 Індики",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:bl,name:"Ми вже виросли!",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:wl,name:"Шукаю друга",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:j0,name:"Нескінченний коридор",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Знайомий, але глибоко тривожний образ 'місця-порогу'. Цей фон викликає ефект 'ценонопсії' — відчуття моторошної порожнечі в місці, яке зазвичай повне людей. Симетрія заспокоює, але ледь помітний силует у темряві змушує постійно перевіряти, чи ви дійсно тут одні. Ідеально для тих, хто любить гострі відчуття та психологічні загадки. Викликає вряжання, ніби це бекрумс... Навіть мені і спокійно і тривожно дивитись на це..."},{src:cl,name:"Кораблі у пустелі",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)",description:"Сюрреалістичний та заворожуючий образ піщаних морів. Він відображає відчуття плину часу, замисленість та схильність шукати неординарні сенси там, де інші бачать лише пустку."},{src:sl,name:"Пустельні міражі",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)",description:"Образ ілюзій, мрій та вислизаючої краси. Цей фон пасує мрійливим натурам із багатою уявою, які прагнуть вийти за межі повсякденної реальності та відшукати власну істину."},{src:ll,name:"Кактуси",category:"Природа та Стихії",author:"Генерація ШІ (Gemini)",description:"Символ витривалості, непохитності та життєвої сили. Цей фон обирають люди з міцним внутрішнім стержнем, які вміють зберігати оптимізм і квітнути навіть у найсуворіших обставинах."},{src:dl,name:"Піраміда",category:"Фентезі та Легенди",author:"Генерація ШІ (Gemini)",description:"Символ монументальності, стабільності та стародавньої мудрості. Цей образ підходить тим, хто цінує структуру, прагне до високих цілей та надихається величчю історії."},{src:Ll,name:"Озеро волі",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Тиха та освіжаюча локація, що випромінює спокій та гармонію. Цей фон підійде тим, хто прагне емоційного перезавантаження, цінує внутрішню свободу та відчуття чистоти."},{src:Dl,name:"Записка",category:"Темрява та Містика",author:"TheTurkeyStudio",description:"Атмосферний та інтимний сюжет, оповитий таємницею. Шанувальники цього фону зазвичай уважні до деталей, схильні до ностальгії та цінують глибокі особисті історії."},{src:Tl,name:"Зимовий ліс",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Атмосфера кришталевої тиші, свіжості та спокою. Цей фон обирають люди, які відновлюють сили у мовчазній споглядальності, цінують чистоту думок та затишок засніженої природи."},{src:Al,name:"Водоспад",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Джерело безперервного руху, відновлення та природної енергії. Фон пасує тим, хто шукає натхнення у динаміці життя, цінує відчуття свіжості та прагне гармонійного розвитку."},{src:vl,name:"Поле і сакури",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Ніжний та естетичний пейзаж, що випромінює гармонію, цвітіння та весняне оновлення. Його обирають романтичні натури, які цінують витончену красу моменту й естетику східної культури."},{src:kl,name:"Печера",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:"Потаємне та захищене місце, сповнене прадавніх загадок. Підходить для допитливих інтровертів, які цінують відчуття затишку, безпеки та люблять відкривати приховані таємниці."},{src:jl,name:"Річка з лави",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Палка, експресивна та стихійна локація. Відображає внутрішній вогонь, сильну енергетику, рішучість та сміливість долати будь-які перешкоди на своєму шляху."},{src:Sl,name:"Спуск з гори",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Захоплюючий краєвид та відчуття руху вперед. Цей фон приваблює цілеспрямованих людей, цінителів пригод та тих, хто любить долати нові вершини й насолоджуватися результатом."},{src:Cl,name:"Скарбниця + Відсилки",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:"Атмосфера багатства, секретів та численних великодок. Ідеально підходить для допитливих та уважних глядачів, які люблять помічати дрібні деталі та розгадувати підтексти."},{src:Il,name:"Японський балкон",category:"Природа та Стихії",author:"TheTurkeyStudio",description:"Затишне та заспокійливе місце з гарним краєвидом. Створює відчуття мовчазного спокою, вечірньої рефлексії та приємної гармонії з навколишнім світом."},{src:nl,name:"Японський храм",category:"Фентезі та Легенди",author:"TheTurkeyStudio",description:"Оселя східної мудрості, медитативності та духовної рівноваги. Цей фон обирають люди, які прагнуть знайти внутрішній баланс, цінують традиції та спокійне споглядання."},{src:Zl,name:"Міа та я",category:"Фентезі та Легенди",author:"Studio 100 Media, Lucky Punch, March Ent.",source:"м/с Mia and Me",description:`Цей яскравий та казковий кадр із Мією та Лірією(ім'я може відрізнятись у різних мовах мультсеріалу) у яскраво-рожевих тонах розкриває ніжний, мрійливий та натхненний психотип:
Яскрава фантазія та творче мислення: Цей образ обирають люди, які живуть багатим внутрішнім світом, люблять казкові всесвіти, вірять у дива та прагнуть додавати барв у сіру буденність.
Емпатія та гармонія з природою: Близькість до чарівних істот і казкових світів відображає добре серце, здатність глибоко співчувати та цінувати щиру дружбу.
Віра у власні перетворення: Сюжет про перехід між реальністю та магічним світом резонує з тими, хто любить змінюватися на краще, шукає свій шлях і не боїться довіряти своїй інтуїції.`},{src:Ri,name:"Бійцівська собака",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Pl,name:"Будинок з пастками",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Nl,name:"Підвал",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Ol,name:"Город зла",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Vl,name:"Втеча",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:T0,name:"Касета, що вбиває",category:"Темрява та Містика",author:"Dreamworks",source:"Фільм 'Дзвінок'",start:0,description:`Цей відеоматеріал має напружену, похмуру та містичну атмосферу, що тримає в постійному психологічному напруженні. Він ідеально резонує з певним психологічним профілем і складом особистості:
Жага до розгадування таємниць і подолання страху: Цей образ обирають люди, яких приваблює психологічна напруга, психологічний трилер та темна естетика. Вони володіють внутрішньою стійкістю та цікавістю, що змушують їх досліджувати складні й лячні теми, долати власні фобії та йти до кінця в пошуках прихованої істини.
Холодний аналітичний розум у кризових ситуаціях: Ситуація жорсткого цейтнолету (відлік семи днів) вимагає максимальної концентрації, холоднокровності та логіки. Людина з таким складом характеру не піддається сліпій паніці перед обличчям невідомого чи невідворотного — вона здатна зберігати тверезість мислення, структурувати хаос навколо себе та рішуче діяти в критичних умовах.`,end:300},{src:Bl,name:"Втеча (фінал)",category:"Темрява та Містика",author:"Генерація ШІ(Gemini)"},{src:Rl,name:"Болотний дракон",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:b0,name:"Пеннівайз",category:"Темрява та Містика",author:""},{src:El,name:"Болото мук",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:rl,name:"Чорна діра",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:v0,name:"Чорна діра(Відео)",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300},{src:ol,name:"Гроза",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:pl,name:"Шестерні",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:$0,name:"Невідоме місце(Відео)",category:"Темрява та Містика",author:"TheTurkeyStudio",start:0,end:300},{src:ul,name:"Невідоме місце",category:"Темрява та Містика",description:"",author:"TheTurkeyStudio"},{src:Fl,name:"Вогнище",category:"Природа та Стихії",description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих.",author:"TheTurkeyStudio"},{src:k0,name:"Вогнище(Відео)",category:"Природа та Стихії",author:"TheTurkeyStudio",start:0,end:300,description:"Цей фон створює атмосферу тепла та безпеки, символізуючи спільність та затишок. Люди, які обирають його, часто мають схильність до соціальної взаємодії, цінують дружбу та сімейні зв'язки. Вони можуть відчувати потребу у підтримці та взаєморозумінні, прагнуть створювати комфортне середовище для себе та оточуючих."},{src:fl,name:"Шахи",category:"Природа та Стихії",author:"TheTurkeyStudio"},{src:Ml,name:"Підказка свічки",category:"Темрява та Містика",author:"TheTurkeyStudio"},{src:zl,name:"Печера кристалів",category:"Фентезі та Легенди",author:"TheTurkeyStudio"},{src:R0,name:"Титанік",category:"Темрява та Містика",author:"Paramount Pictures & 20th Century",source:"Фільм Titanic (1997)",description:"Цей фон відображає трагедію та величність історії, символізуючи людську амбіцію, крихкість життя та силу природи. Люди, які обирають цей фон, часто мають схильність до роздумів про минуле, цінують історичні події та шукають глибокі сенси у житті. Вони можуть відчувати емпатію до людських переживань та прагнуть зрозуміти уроки минулого для формування кращого майбутнього."},{src:L0,name:"Агент Сміт",category:"Темрява та Містика",author:"WarnerBrothers",source:"Фільм 'Матриця'",description:"Цей фон відображає складність та багатогранність сучасного світу, символізуючи боротьбу між реальністю та ілюзією. Люди, які обирають цей фон, часто мають схильність до критичного мислення, цікавляться технологіями та філософськими питаннями. Вони можуть відчувати потребу у глибокому аналізі навколишнього світу та прагнуть зрозуміти сутність людської природи."}],oa=t=>t==null?"—":["Північний","Північно-східний","Східний","Південно-східний","Південний","Південно-західний","Західний","Північно-західний"][Math.floor(t/45+.5)%8],B0=i.div`
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
`,H0=i.div`
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Qa=i.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,er=i.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,Vo=i.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${t=>t.$isDarkMode?"#333":"#f9f9f9"};
  color: ${t=>t.$isDarkMode?"#fff":"#000"};
`,K0=({onClose:t,isDarkMode:n,currentCardId:a})=>{const c=zi(),l=jr(j=>j.calendar?.customDays||[]),[d,h]=(0,r.useState)(""),[u,g]=(0,r.useState)("00:00"),[x,T]=(0,r.useState)(""),[k,P]=(0,r.useState)(1),[z,F]=(0,r.useState)("hours"),[I,y]=(0,r.useState)(a),m=l.filter(j=>j.cardId==="all"||j.cardId===a),v=()=>{if(!d||!x)return alert("Заповніть дату та назву");if(x.length>30)return alert("Назва занадто довга (макс 30)");if(l.length>=3)return alert("Максимум 3 події на користувача");c(tl({id:Date.now(),date:d,time:u,reason:x,duration:Number(k),durationUnit:z,cardId:I})),h(""),T("")};return(0,e.jsx)(B0,{onClick:t,children:(0,e.jsxs)(H0,{$isDarkMode:n,onClick:j=>j.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:0},children:"Встановити дати"}),(0,e.jsxs)(Qa,{children:[(0,e.jsx)("label",{children:"Дата та Час початку"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(er,{type:"date",$isDarkMode:n,value:d,onChange:j=>h(j.target.value)}),(0,e.jsx)(er,{type:"time",$isDarkMode:n,value:u,onChange:j=>g(j.target.value)})]})]}),(0,e.jsxs)(Qa,{children:[(0,e.jsx)("label",{children:"Тривалість"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(er,{type:"number",min:"1",max:"168",$isDarkMode:n,value:k,onChange:j=>P(j.target.value),style:{width:"60px"}}),(0,e.jsxs)(Vo,{$isDarkMode:n,value:z,onChange:j=>F(j.target.value),children:[(0,e.jsx)("option",{value:"hours",children:"Годин"}),(0,e.jsx)("option",{value:"days",children:"Днів"})]})]})]}),(0,e.jsxs)(Qa,{children:[(0,e.jsx)("label",{children:"Застосувати для:"}),(0,e.jsxs)(Vo,{$isDarkMode:n,value:I,onChange:j=>y(j.target.value),children:[(0,e.jsx)("option",{value:"all",children:"Всіх карток"}),(0,e.jsx)("option",{value:a,children:"Цієї картки"})]})]}),(0,e.jsxs)(Qa,{children:[(0,e.jsx)("label",{children:"Назва події (макс 30 симв.)"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(er,{type:"text",placeholder:"Наприклад: Новий Рік",$isDarkMode:n,value:x,onChange:j=>T(j.target.value),maxLength:30,style:{flex:1}}),(0,e.jsx)("button",{onClick:v,style:{background:"#ffb36c",border:"none",borderRadius:"5px",padding:"0 15px",fontWeight:"bold",cursor:"pointer"},children:"+"})]})]}),(0,e.jsx)("hr",{style:{border:"0.5px solid #444",margin:"10px 0"}}),(0,e.jsx)("h4",{style:{margin:0},children:"Наступаючі / триваючі події"}),(0,e.jsxs)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[m.length===0&&(0,e.jsx)("p",{style:{fontSize:"12px",opacity:.7},children:"Немає подій"}),m.map(j=>(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:n?"#333":"#eee",padding:"8px",borderRadius:"5px",fontSize:"12px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("b",{children:j.reason}),(0,e.jsx)("br",{}),j.date," ",j.time," (",j.duration," ",j.durationUnit==="days"?"дн":"год",")"]}),(0,e.jsx)("button",{onClick:()=>c(Wc(j.id)),style:{background:"transparent",border:"none",color:"red",cursor:"pointer"},children:(0,e.jsx)(Gs,{size:18})})]},j.id))]}),(0,e.jsx)("button",{onClick:t,style:{marginTop:"10px",background:"#444",color:"#fff",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer"},children:"Закрити"})]})})},Xl=(0,r.createContext)(),U0=({children:t})=>{const[n,a]=(0,r.useState)(!1),[c,l]=(0,r.useState)(0),[d,h]=(0,r.useState)(!1),u=(0,r.useRef)({}),g=(F,I)=>{I?u.current[F]=I:delete u.current[F]};(0,r.useEffect)(()=>{(async()=>{try{const y=new URLSearchParams(window.location.search);if(y.has("q")||y.has("city")||y.has("search")||y.has("query")||y.has("pohoda")||window.location.search.toLowerCase().includes("погода")){h(!1),a(!1);return}}catch{}const I=await f.default.getItem("domino_tutorial_prompt");(!I||Date.now()>I)&&setTimeout(()=>h(!0),2500)})()},[]);const x=async()=>{await f.default.setItem("domino_tutorial_prompt",Date.now()+2592e6),h(!1),a(!0),l(1)},T=async()=>{await f.default.setItem("domino_tutorial_prompt",Date.now()+6048e5),h(!1)},k=()=>{l(F=>F+1)},P=F=>{l(F)},z=()=>{a(!1),l(0)};return(0,e.jsx)(Xl.Provider,{value:{isActive:n,setIsActive:a,currentStep:c,setCurrentStep:l,refs:u,registerRef:g,nextStep:k,jumpToStep:P,closeTutorial:z,showInitialModal:d,startTutorial:x,skipTutorialWeek:T},children:t})},Wa=()=>(0,r.useContext)(Xl),W0=i.div`
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
`,In=({content:t,children:n,placement:a="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),{refs:u,floatingStyles:g,context:x}=ma({open:l,onOpenChange:d,placement:a,strategy:"fixed",transform:!1,whileElementsMounted:ua,middleware:[ca(8),pa(),va({padding:5}),ka({element:h})]}),{isMounted:T,styles:k}=ga(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=fa(x,{move:!1}),z=ha(x),F=ba(x),I=ja(x,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:m}=wa([P,z,F,I]);if(!t)return n;const v=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:u.setReference,...y(),style:{display:"inline-flex"},children:n}),T&&(0,e.jsx)(ya,{children:(0,e.jsxs)(W0,{ref:u.setFloating,$isDarkMode:c,style:{...g,...k},...m(),children:[t,(0,e.jsx)(xa,{ref:h,context:x,fill:v,stroke:"#00acb9",strokeWidth:1})]})})]})};le`from { opacity: 0; } to { opacity: 1; }`;var _0=({customDays:t,cardId:n})=>{const[a,c]=(0,r.useState)(new Date);(0,r.useEffect)(()=>{const d=setInterval(()=>c(new Date),1e3);return()=>clearInterval(d)},[]);const l=t.filter(d=>d.cardId==="all"||d.cardId===n);return l.length===0?null:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",padding:"10px",marginTop:"10px"},children:l.map(d=>{const h=new Date(`${d.date}T${d.time}:00`),u=new Date(h.getTime());d.durationUnit==="days"?u.setDate(u.getDate()+d.duration):u.setHours(u.getHours()+d.duration);const g=h-a,x=u-a;if(x<=0)return null;const T=k=>{const P=Math.floor(k/864e5),z=Math.floor(k/36e5%24),F=Math.floor(k/1e3/60%60),I=Math.floor(k/1e3%60);return`${P}дні:${String(z).padStart(2,"0")}:${String(F).padStart(2,"0")}:${String(I).padStart(2,"0")}`};return(0,e.jsxs)("div",{style:{background:"rgba(0,0,0,0.4)",color:"#00eaff",padding:"8px",borderRadius:"5px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:[d.reason,": ",g>0?`До події: ${T(g)}`:`Подія триватиме ще: ${T(x)}`]},d.id)})})};le`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;var q0=le`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,J0=le`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
`,G0=i.div`
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
    `,Y0=i.div`
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
`,Z0=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(0, 238, 255);
  h3 {
    margin: 0;
    font-size: 13px;
    color: ${t=>t.$isMain?"#008cff":"skyblue"};
  }
`,X0=i.div`
  display: flex;
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
`,Q0=i.div`
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
`,ep=i.div`
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
`,tp=i.div`
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
`,np=i.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    height: 542px;
  }
`,tr=i.div`
font-size: 17px;
font-weight: 700;
color: ${t=>t.$active?"#00eeff":"#fff"};
`,nr=i.div`
font-size: 15px;
color: ${t=>t.$active?"#00eeff":"#fff"};
`,ar=i.div`
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
`,ap=i.div`
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
`,vn=i.div`
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
`,kn=i.div`
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
`,gn=i.div`
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
`,rr=i.div`
  font-size: ${t=>t.$size||"10px"};
  font-weight: ${t=>t.$weight||"normal"};
  opacity: ${t=>t.$opacity||.8};
   @media (min-width: 1200px) {
    font-size: 14px;
  }
     @media (min-width: 768px) {
    font-size: 12px;
  }
`,rp=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid rgb(0, 238, 255);
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`,ip=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: 100%;
  width: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  align-self: stretch;
`,op=i.div`
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
`,sp=i.div`
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
`,lp=i.div`
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
`,Ql=i.div`
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
`,Bo=i.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${t=>t.$active?"2px solid #ffb36c":"2px solid transparent"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${Ci}, ${Ql} {
      opacity: 1;
    }
  }
`,Ho=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`,Ko=i.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }
`,Ma=i.div`
  width: ${t=>typeof t.$width=="number"?`${t.$width}px`:t.$width};
  height: ${t=>t.$height||"200px"};
`,Pr={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"28px",padding:0,border:"1px solid rgba(0, 190, 235, 0.7)",borderRadius:"4px",background:"rgba(0, 0, 0, 0.35)",color:"#00bfff",cursor:"pointer"},dp=i(_t.div)`
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
`,cp=i.div`
  display: -webkit-box;
  -webkit-line-clamp: ${t=>t.$isExpanded?"none":"5"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-line;
`,pp=i.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  padding: 6px 0 0 0;
  text-decoration: underline;
`,up=i.div`
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
`,fp=i.textarea`
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
`,ir=i.div`
  display: inline-flex;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.06)"};
  padding: 3px;
  gap: 2px;
  border: 2px solid ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.95)":"rgb(255, 253, 253)"};
`,na=i.button`
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
`,gp=i.div`
  position: absolute;
  top: -10px;
  left: -275px;
  width: 100%;
  background: ${t=>t.$isDarkMode?"#222":"#fff"};
  border: 1px solid #ffb36c;
  border-radius: 5px 5px 0 0;
  display: flex;
  min-width: 309px;
  flex-direction: column;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  animation: ${t=>t.$isClosing?J0:q0} 0.2s
    ease-out forwards;
  overflow: hidden;
  max-height: 70vh;
`,xp=({user:t,card:n,isDarkMode:a,isLocationEnabled:c,isExtremeTemp:l,isExtremeWind:d,isExtremeUV:h,index:u,totalCards:g,handleRefreshCard:x,handleDeleteCard:T,handleRenameCard:k,moveWeatherCard:P,setIsLocationEnabled:z,customHolidayName:F,currentTimeString:I,layout:y,onOpenDetails:m})=>{const v=zi(),{registerRef:j}=Wa?.()||{registerRef:()=>{}},C=jr(s=>s.calendar?.customDays||[]),[B,H]=(0,r.useState)(!1),[J,Q]=(0,r.useState)(n.locationName),[he,te]=(0,r.useState)(null),[D,N]=(0,r.useState)(""),[re,xe]=(0,r.useState)(!1),[ce,ee]=(0,r.useState)(!0),[X,me]=(0,r.useState)(""),[oe,Te]=(0,r.useState)("concise"),[Se,ut]=(0,r.useState)("friendly"),[It,Dt]=(0,r.useState)(!1),[ot,st]=(0,r.useState)(""),[Oe,tt]=(0,r.useState)(0),[mt,Ve]=(0,r.useState)(!1),[jt,Lt]=(0,r.useState)(!1),[ft,nt]=(0,r.useState)(0),[Ze,Ue]=(0,r.useState)("charts"),[gt,Ie]=(0,r.useState)("charts"),De=typeof window<"u"&&window.innerWidth<768?"250px":"380px",[at,St]=(0,r.useState)("C"),[bt,Ft]=(0,r.useState)(n.cityImage||""),[yt,Ot]=(0,r.useState)("wiki"),[V,ne]=(0,r.useState)(!1),[pe,Ae]=(0,r.useState)(!1),[de,Me]=(0,r.useState)(!1),[lt,We]=(0,r.useState)(!1);(0,r.useEffect)(()=>{f.default.getItem("temp_unit").then(p=>{p&&St(p)});const s=p=>{p.detail&&St(p.detail)};return window.addEventListener("tempUnitChanged",s),()=>window.removeEventListener("tempUnitChanged",s)},[]);const Cn=s=>{St(s),f.default.setItem("temp_unit",s),window.dispatchEvent(new CustomEvent("tempUnitChanged",{detail:s}))},_e=s=>{if(s==null||s==="—")return"—";const p=parseFloat(s);return isNaN(p)?s:at==="F"?`${Math.round(p*9/5+32)}°F`:at==="K"?`${Math.round((p+273.15)*10)/10}K`:`${Math.round(p*10)/10}°C`};(0,r.useEffect)(()=>{f.default.getItem("gemini_api_key").then(p=>We(!!p));const s=p=>We(!!p.detail);return window.addEventListener("geminiKeyChanged",s),()=>window.removeEventListener("geminiKeyChanged",s)},[]);const Ct=()=>{Me(!0),setTimeout(()=>{Ae(!1),Me(!1)},180)},[w,E]=(0,r.useState)(!1),[q,ge]=(0,r.useState)({date:"",time:"",reason:"",duration:1,durationUnit:"hours",targetCard:"all"}),[qe,rt]=(0,r.useState)(!1),[be,ze]=(0,r.useState)("current"),[qt,Mt]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!n.isMain)return;const s=()=>rt(!0),p=()=>rt(!1);return window.addEventListener("domino-open-weather-settings",s),window.addEventListener("domino-close-weather-settings",p),()=>{window.removeEventListener("domino-open-weather-settings",s),window.removeEventListener("domino-close-weather-settings",p)}},[n.isMain]);const[ye,Et]=(0,r.useState)(!0),[Be,Vt]=(0,r.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),$e=(0,r.useRef)(null),Jt=(0,r.useRef)(null),zt=(0,r.useRef)(null),Xt=(0,r.useRef)(null),zn=(0,r.useRef)(null),$n=(0,r.useRef)(null),[se,Tt]=(0,r.useState)(null),[Bt,G]=(0,r.useState)(!1),[ie,He]=(0,r.useState)({day:1,night:1,wind:1}),[Re,Ke]=(0,r.useState)(12),Le=s=>{He(p=>({...p,[s]:p[s]===1?.3:1}))};(0,r.useEffect)(()=>{const s=()=>{if(!document.fullscreenElement){Tt(null);return}requestAnimationFrame(()=>{const p=se==="hourly"?zt.current:$n.current;p?.resize(),p?.update("none")})};return document.addEventListener("fullscreenchange",s),()=>document.removeEventListener("fullscreenchange",s)},[se]),(0,r.useEffect)(()=>{if(!se)return;const s=setTimeout(()=>{const p=se==="hourly"?zt.current:$n.current;p?.resize(),p?.update("none")},100);return()=>clearTimeout(s)},[se]);const dt=async(s,p)=>{if(document.fullscreenElement){await document.exitFullscreen();return}p.current?.requestFullscreen&&(Tt(s),await p.current.requestFullscreen())},Xe=async(s,p=void 0,O=void 0)=>s.current?(0,u0.default)(s.current,{backgroundColor:a?"#000000":"#f5f5f5",scale:2,useCORS:!0,allowTaint:!0,windowWidth:p||window.innerWidth,windowHeight:O||window.innerHeight}):null,Ht=async(s,p)=>{G(!0);const O=se===s,R=p.current;if(!R)return G(!1),null;let M=null,$=null;if(!O){const Fe=R.getBoundingClientRect();M=R.cloneNode(!0);const Yt=R.querySelectorAll("canvas"),ct=M.querySelectorAll("canvas");Yt.forEach((Ee,Ge)=>{ct[Ge]&&ct[Ge].getContext("2d").drawImage(Ee,0,0)}),M.style.position="fixed",M.style.top=`${Fe.top}px`,M.style.left=`${Fe.left}px`,M.style.width=`${Fe.width}px`,M.style.height=`${Fe.height}px`,M.style.margin="0",M.style.zIndex="99998",M.style.pointerEvents="none",document.body.appendChild(M),$=document.createElement("div"),$.style.width=`${Fe.width}px`,$.style.height=`${Fe.height}px`,R.parentElement.insertBefore($,R),Tt(s),await new Promise(Ee=>setTimeout(Ee,100))}const fe=R.style.cssText,Ce=Math.max(R.scrollWidth,window.innerWidth,s==="hourly"?tn:900),it=Math.max(R.scrollHeight,window.innerHeight,600);O?R.style.cssText+=`
        width: ${Ce}px !important;
        height: ${it}px !important;
        min-height: ${it}px !important;
        max-width: none !important;
        max-height: none !important;
      `:R.style.cssText+=`
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        width: ${Ce}px !important;
        height: ${it}px !important;
        min-height: ${it}px !important;
        max-width: none !important;
        max-height: none !important;
        z-index: -9999 !important;
        background: ${a?"#000":"#f5f5f5"} !important;
      `,await new Promise(Fe=>setTimeout(Fe,100));const bn=await Xe(p,Ce,it);return R.style.cssText=fe,O||Tt(null),G(!1),M&&(await new Promise(Fe=>setTimeout(Fe,100)),M.remove(),$&&$.remove()),bn},Kt=async(s,p)=>{const O=await Ht(s,p);if(!O)return;const R=document.createElement("a");R.download=`${n.locationName}-${s}-chart.png`,R.href=O.toDataURL("image/png"),R.click()},dn=async(s,p)=>{const O=await Ht(s,p);if(!O)return;const R=O.toDataURL("image/png");let M=document.getElementById("chart-print-iframe");M||(M=document.createElement("iframe"),M.id="chart-print-iframe",M.style.position="fixed",M.style.width="0",M.style.height="0",M.style.border="none",M.style.top="-9999px",M.style.left="-9999px",document.body.appendChild(M));const $=M.contentWindow.document;$.open(),$.write(`
      <html><head><title>${n.locationName} - ${s}</title>
      <style>body{margin:0;text-align:center} img{max-width:100%}</style>
      </head>
      <body><img src="${R}" onload="window.focus();window.print();" /></body></html>
    `),$.close()},Tn=(s,p)=>(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center",flexShrink:0},children:[(0,e.jsx)(In,{content:se===s?"Вийти з повного екрана":"На весь екран",isDarkMode:a,children:(0,e.jsx)("button",{type:"button",onClick:()=>dt(s,p),"aria-label":se===s?"Вийти з повного екрана":"На весь екран",style:Pr,children:(0,e.jsx)(Tc,{size:16})})}),(0,e.jsx)(In,{content:"Завантажити скріншот повноекранного графіка",isDarkMode:a,children:(0,e.jsx)("button",{type:"button",onClick:()=>Kt(s,p),"aria-label":"Завантажити скріншот повноекранного графіка",style:Pr,children:(0,e.jsx)(xc,{size:16})})}),(0,e.jsx)(In,{content:"Друкувати скріншот повноекранного графіка",isDarkMode:a,children:(0,e.jsx)("button",{type:"button",onClick:()=>dn(s,p),"aria-label":"Друкувати скріншот повноекранного графіка",style:Pr,children:(0,e.jsx)(Ec,{size:16})})})]}),cn=s=>(0,e.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",fontSize:`${Math.max(10,Re-1)}px`,alignItems:"center"},children:s.map(p=>(0,e.jsx)(In,{content:`Натисніть, щоб ${ie[p.key]===1?"сховати":"показати"} шкалу графіка ${p.label.toLowerCase()}`,isDarkMode:a,children:(0,e.jsxs)("button",{type:"button",onClick:()=>Le(p.key),"aria-label":`Натисніть, щоб ${ie[p.key]===1?"сховати":"показати"} шкалу графіка ${p.label.toLowerCase()}`,style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 6px",border:`1px solid ${p.color}`,borderRadius:"4px",background:a?"#222":"#fff",color:p.color,cursor:"pointer",opacity:ie[p.key],fontSize:"inherit",fontWeight:"bold"},children:[(0,e.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:p.color}}),p.icon&&(0,e.jsx)("span",{style:{display:"inline-flex",alignItems:"center",fontSize:"14px"},children:p.icon}),p.label]},p.key)}))}),_n=(s,p,O)=>(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"nowrap",marginBottom:"4px"},children:[cn(O),Tn(s,p)]});(0,r.useEffect)(()=>{if(Xt.current){const s=setTimeout(()=>{Xt.current&&(Xt.current.scrollLeft=144.44444444444446)},100);return()=>clearTimeout(s)}},[n.id,ye,Be]),(0,r.useEffect)(()=>{(async()=>{const p=await f.default.getItem(`useGlobalLayout_${n.id}`);p!==null&&Et(p);const O=await f.default.getItem(`localLayout_${n.id}`);O&&Vt(O)})()},[n.id]),(0,r.useEffect)(()=>{(async()=>{const p=await f.default.getItem(`bgMode_${n.id}`);p&&Ot(p)})()},[n.id]),(0,r.useEffect)(()=>{(async()=>{const p=await f.default.getItem(`legendFontSize_${n.id}`);p&&Ke(p)})()},[n.id]);const Gt=s=>{Ot(s),f.default.setItem(`bgMode_${n.id}`,s),ne(!1)},On=()=>{z(!c),Ct(),x&&n.isMain&&setTimeout(()=>x(n),50)};(0,r.useEffect)(()=>{let s=!0;return(async()=>{if(yt!=="wiki"){s&&Ft(yt);return}const O=()=>Fa.find(M=>M.name==="Туманний ліс")?.src||Fa[0].src;let R=(n.locationName||n.name||"").trim();if(R==="Ваша локація"&&n.lat&&n.lon)try{const M=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${n.lat}&lon=${n.lon}&format=json&accept-language=uk`)).json();R=M.address?.city||M.address?.town||M.address?.village||M.address?.state||R}catch(M){console.warn("Reverse geocoding failed",M)}if(!R||R==="Ваша локація"){s&&Ft(O());return}try{const M=await(await fetch(`https://uk.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(R)}&pithumbsize=1000&format=json&origin=*`)).json(),$=Object.values(M?.query?.pages||{}).find(fe=>fe.thumbnail?.source)?.thumbnail?.source;$&&s?Ft($):s&&Ft(O())}catch(M){console.warn("City image lookup failed:",M),s&&Ft(O())}})(),()=>{s=!1}},[n.locationName,n.lat,n.lon,n.name,yt]),(0,r.useEffect)(()=>()=>{},[]),(0,r.useEffect)(()=>{Ve(!1),Lt(!1)},[D]),(0,r.useEffect)(()=>{$e.current&&D&&!mt&&$e.current.scrollHeight>$e.current.clientHeight&&Lt(!0)},[D,mt]),(0,r.useEffect)(()=>{(async()=>{const p=await f.default.getItem(`ai_enabled_${n.id}`);p!==null&&ee(p);const O=await f.default.getItem(`ai_custom_prompt_${n.id}`);O&&(me(O),st(O));const R=await f.default.getItem(`ai_custom_prompt_changed_at_${n.id}`);R&&tt(R);const M=await f.default.getItem(`ai_response_length_${n.id}`);M&&Te(M);const $=await f.default.getItem(`ai_style_${n.id}`);$&&ut($)})()},[n.id]);const Qt=(0,r.useCallback)(async()=>{if(re)return;const s=await f.default.getItem("gemini_api_key");if(!s){N("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.");return}xe(!0);try{const p=(s||"").trim().replace(/^["']|["']$/g,""),O=new Ys(p),R=n.current,M=n.daily16||[],$=(n.hourly||[]).slice(0,5).map(Ee=>`${Ee.time}: ${Ee.temp}, вітер ${Ee.windNum}м/с, ${Ee.iconPlaceholder}`).join("; "),fe=oe==="extensive"?"надай розгорнуту відповідь (кілька речень)":"згенеруй лаконічний прогноз одним реченням (макс 25 слів)",Ce=Se==="scientific"?"використовуй науковий стиль":Se==="sarcastic"?"додай дрібку сарказму та іронії":"використовуй дружній та теплий тон",it=`${X.trim()?`Ти метеоролог-асистент. ${Ce}. Виконуй цю інструкцію: ${X}. Критичні попередження (якщо є) виводь на самому початку. Використовуй абзаци для розбиття тексту. Відповідь надай українською мовою.`:`Ти метеоролог-асистент. На основі наданих даних ${fe}. ${Ce}. Згадай про комфортний одяг. КРИТИЧНІ ПОПЕРЕДЖЕННЯ (температура, вітер, УФ) став найвище. Використовуй абзаци для зручності читання. Відповідь виключно українською мовою.`}

Місто: ${n.locationName}. Поточний час на сайті: ${I}.

Поточні показники: ${R.temp}, ${R.description}, вологість ${R.humidity}, вітер ${R.wind_speed}.
Найближчі години: ${$}.
Прогноз на дні: завтра ${M[1]?.temp_day||"н/д"}, післязавтра ${M[2]?.temp_day||"н/д"}.
Тенденція на 2 тижні: 1-й тиждень ~${M[7]?.temp_day||"н/д"}, 2-й тиждень ~${M[14]?.temp_day||"н/д"}.`,bn=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.0-flash"];let Fe=null,Yt=null;for(const Ee of bn)try{if(Fe=await O.getGenerativeModel({model:Ee}).generateContent(it),Fe)break}catch(Ge){Yt=Ge,console.warn(`Weather summary model ${Ee} failed, trying next...`,Ge)}if(!Fe)throw Yt||new Error("Не вдалося отримати прогноз від Gemini");const ct=(await Fe.response).text().trim();N(ct),await f.default.setItem(`ai_weather_summary_${n.id}`,{text:ct,timestamp:Date.now()})}catch(p){console.error("Gemini Weather Error:",p)}finally{xe(!1)}},[n,re,X,oe,Se,I]),pn=(0,r.useCallback)(async()=>{const s=await f.default.getItem(`ai_weather_summary_${n.id}`);!s||Date.now()-s.timestamp>72e5?Qt():N(s.text)},[n.id,Qt]),$t=async()=>{const s=!ce;ee(s),await f.default.setItem(`ai_enabled_${n.id}`,s)},Rn=()=>{ze("ai"),ce&&pn()};(0,r.useEffect)(()=>{const s=p=>{p.detail||N("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.")};return window.addEventListener("geminiKeyChanged",s),()=>window.removeEventListener("geminiKeyChanged",s)},[]);const[un,aa]=(0,r.useState)(!1),[en,qn]=(0,r.useState)("");(0,r.useEffect)(()=>{aa(!1)},[he]);const Ln=(s,p=24,O=null,R=1)=>{let M=s;if(s&&typeof s!="string"){const Ce=s.type?.name||"";Ce==="FaSmog"?M="☁️":Ce==="IoRainy"||Ce==="LiaCloudSunRainSolid"?M="🌧️":Ce==="GiSnowing"?M="❄️":Ce==="IoThunderstorm"?M="⛈️":Ce==="FaSun"?M="☀️":Ce==="BsMoonStarsFill"?M="🌙":Ce==="FaCloudMoon"?M="☁️":Ce==="FaCloudMoonRain"||Ce==="LiaCloudMoonRainSolid"?M="🌧️":M="☁️"}const $=document.createElement("canvas");$.width=p,$.height=p;const fe=$.getContext("2d");return fe.font=`${p-8}px serif`,fe.textAlign="center",fe.textBaseline="middle",fe.fillStyle="rgba(0, 0, 0, 0.72)",fe.globalAlpha=R,fe.beginPath(),fe.arc(p/2,p/2,p*.76,0,Math.PI*2),fe.fill(),fe.globalAlpha=R,fe.fillStyle="#ffffff",fe.fillText(M,p/2,p/2),O&&(fe.fillStyle=O,fe.font=`bold ${p/2}px Arial`,fe.fillText("!",p-5,5)),$},on=(s,p=18,O=1)=>{const R=document.createElement("canvas"),M=p+12;R.width=M,R.height=M;const $=R.getContext("2d"),fe=M/2,Ce=((Number(s)||0)%360+360)%360,it=Math.round(Ce/45)*45*Math.PI/180;return $.translate(fe,fe),$.rotate(it),$.fillStyle="rgba(0, 0, 0, 0.72)",$.globalAlpha=O,$.beginPath(),$.arc(0,0,M*.45,0,Math.PI*2),$.fill(),$.globalAlpha=O,$.fillStyle="#0099ff",$.strokeStyle="#ffffff",$.lineWidth=1.5,$.beginPath(),$.moveTo(0,-p*.43),$.lineTo(p*.2,p*.12),$.lineTo(p*.07,p*.08),$.lineTo(p*.07,p*.4),$.lineTo(-p*.07,p*.4),$.lineTo(-p*.07,p*.08),$.lineTo(-p*.2,p*.12),$.closePath(),$.fill(),$.stroke(),R},Fn=s=>{const p=((Number(s)||0)%360+360)%360,O=Math.round(p/45)*45;return oa(O%360)},hn=()=>{J.trim()&&(k(n.id,J),H(!1))},sn=g0(n.hourly||[]),Je=sn[ft]?.items||[],tn=Math.max(873,(Je?.length||24)*35),Qe={labels:Je?.map(s=>s.time)||[],datasets:[{label:"Температура (°C)",data:Je?.map(s=>s.tempNum??0)||[],fill:!0,backgroundColor:"rgba(255, 179, 108, 0.2)",borderColor:"rgba(255, 179, 108, 1)",pointRadius:12,pointStyle:Je?.map(s=>{let p=null;return(s.tempNum??0)>30?p="#ff0000":(s.tempNum??0)<-30?p="#004cff":(s.windNum??0)>10&&(p="#ff6a00"),Ln(s.iconSymbol??s.iconPlaceholder??"☁️",24,p,ie.day)}),tension:.4,yAxisID:"y"},{label:"Вітер (м/с)",data:Je?.map(s=>s.windNum??0)||[],borderColor:"rgba(0, 190, 235, 1)",backgroundColor:"rgba(0, 190, 235, 0.1)",pointRadius:6,pointBackgroundColor:Je?.map(s=>(s.windNum??0)>10?"#ff6a00":"rgba(0, 190, 235, 1)")||[],pointStyle:Je?.map(s=>on(s.wind_direction_10m,18,ie.wind))||[],tension:.4,yAxisID:"y1"}]},xt=s=>s===0?"Ясно":s>=1&&s<=3?"Частково хмарно":s>=45&&s<=48?"Туман":s>=51&&s<=55?"Дрібна сяка":s>=61&&s<=65?"Дощ":s>=71&&s<=77?"Сніг":s>=80&&s<=82?"Шквальний дощ":s>=95&&s<=99?"Гроза":"Хмарно",fn={"01.01":"Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)","06.01":"Богоявлення / Водохреще (новий стиль)","07.01":"Різдво Христове (старий стиль)","12.01":"1 серія 'Реальної містики'. Ціла епоха розкриття містифікацій у 12 сезонів!","14.01":"Василя / Обрізання Господнє (старий стиль)","19.01":"Богоявлення / Водохреще (старий стиль)","02.02":"Стрітення Господнє (новий стиль)","14.02":"З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!","15.02":"Стрітення Господнє (старий стиль)","08.03":"Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)","20.03":"Весняне рівнодення. Сонце встало на сході, а індики вже на заході :)","25.03":"Благовіщення Пресвятої Богородиці (новий стиль)","01.04":"Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)","07.04":"Благовіщення Пресвятої Богородиці (старий стиль)","23.04":"День святого Юрія / Георгія (новий стиль)","01.05":"День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!","02.05":"З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)","06.05":"День святого Юрія / Георгія (старий стиль)","08.05":"День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм. Один не багатьох випадків коли я кажу про політику добре...","09.05":"День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.","27.05":"Випуск Dragon Village 3. Скачаєш? :)","29.05":"Особисте свято у цей день... Пробач, я теж маю секрети :)","10.06":"Вознесіння Господнє","20.06":"Трійця / П'ятдесятниця","21.06":"Просто літнє сонцестояння. Купив собі ескімо? :)","24.06":"Різдво Івана Хрестителя / Купала (новий стиль)","28.06":"День Конституції України","29.06":"Святих апостолів Петра і Павла (новий стиль)","07.07":"Різдво Івана Хрестителя / Івана Купала (старий стиль)","12.07":"Святих апостолів Петра і Павла (старий стиль)","01.08":"День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(","06.08":"Преображення Господнє / Спас (новий стиль)","15.08":"Успіння Пресвятої Богородиці (новий стиль)","19.08":"Преображення Господнє / Спас (старий стиль)","24.08":"День Незалежності України","28.08":"Успіння Пресвятої Богородиці (старий стиль)","01.09":"День знань. Цей день усі ненавидять, бо термін відпустки закінчився :(","08.09":"Різдво Пресвятої Богородиці (новий стиль)","11.09":"Випуск 1-ї серії м/с 'Динофроз'. Легенда...","14.09":"Воздвиження Хреста Господнього (новий стиль)","20.09":"Всесвітній день прибирання!","21.09":"Різдво Пресвятої Богородиці (старий стиль)","23.09":"Осіннє рівнодення. Древніус = Даркніс :)","27.09":"Воздвиження Хреста Господнього (старий стиль)","01.10":"Покрова Пресвятої Богородиці та День козацтва (новий стиль)","14.10":"Покрова Пресвятої Богородиці та День козацтва (старий стиль)","24.10":"Почався ретроградний Меркурій. Якщо синоптики помилилися з дощем — винні зірки, а не ми! :)","27.10":"День української писемності та мови. Напиши по максимуму каліграфічний лист.","19.11":"Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)","21.11":"Введення в храм Пресвятої Богородиці (новий стиль)","30.11":"День святого Андрія Первозванного (новий стиль)","04.12":"Введення в храм Пресвятої Богородиці (старий стиль)","06.12":"День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","13.12":"День святого Андрія Первозванного (старий стиль)","19.12":"День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)","22.12":"Зимове сонцестояння. Найтемніший день. Як очі Марти...","25.12":"Різдво Христове (новий стиль)"},Pt=s=>{const p=s.toLowerCase();return p.includes("сб")||p.includes("нд")},Ut=s=>{if(!t?.birthDate||!s)return!1;const[,p,O]=t.birthDate.split("-"),[R,M]=s.split(".");return parseInt(O)===parseInt(R)&&parseInt(p)===parseInt(M)},nn=(s,p,O)=>{const R=fn[s],M=Pt(p),$=Ut(s),fe=C.find(Ce=>Ce.date===O);return R?{type:"holiday",color:"#ff6666",label:R+(M?" + Вихідний":"")}:$?{type:"birthday",color:"#e066ff",label:"З Днем Народження! 🎉",isRainbow:!0}:fe?{type:"custom",color:"#00bfff",label:fe.reason}:M?{type:"weekend",color:"#ff9966",label:"Вихідний"}:{type:"regular",color:null,label:""}},Sa=s=>{const p=new Date,O=new Date(s);O.setHours(0,0,0,0);const R=O.getTime()-p.getTime();if(R<=0)return null;const M=Math.floor(R/864e5),$=Math.floor(R%864e5/36e5);return M>0?`⏳ Залишилось: ${M}д ${$}г`:`⏳ Почнеться за ${$}г`},Jn=(s,p,O)=>{const R=C.find(fe=>fe.date===O),M=Sa(O);if(R)return M?[`💙 Ваша подія: ${R.reason}`,`(${M})`]:[`💙 Ваша подія: ${R.reason}`];if(Ut(s))return M?[`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈`,`(${M})`]:[`🎂 Вітаємо, ${t?.firstName}! З Днем Народження! 🌈`];const $=fn[s];return $?M?[`✨ Вітаємо зі святом: ${$}!`,`(${M})`]:[`✨ Вітаємо зі святом: ${$}!`]:null},Gn={labels:n.daily16?.map(s=>`${s.date}
${s.day}`)||[],datasets:[{label:"День (°C)",data:n.daily16?.map(s=>parseInt(s.temp_day))||[],borderColor:`rgba(255, 179, 108, ${ie.day})`,backgroundColor:`rgba(255, 179, 108, ${ie.day*.5})`,pointRadius:12,pointStyle:n.daily16?.map(s=>Ln(s.iconSymbol??s.iconPlaceholder,24,null,ie.day)),pointBorderColor:n.daily16?.map(s=>nn(s.date,s.day,s.fullDate).color||"#ffb36c"),pointBorderWidth:n.daily16?.map(s=>nn(s.date,s.day,s.fullDate).color?3:2),tension:.3,yAxisID:"y"},{label:"Ніч (°C)",data:n.daily16?.map(s=>parseInt(s.temp_night))||[],borderColor:`rgba(255, 20, 147, ${ie.night})`,backgroundColor:`rgba(255, 20, 147, ${ie.night*.2})`,pointStyle:"circle",pointRadius:4,tension:.3,yAxisID:"y"},{label:"Вітер (м/с)",data:n.daily16?.map(s=>parseFloat(s.wind_speed)||0)||[],borderColor:`rgba(0, 153, 255, ${ie.wind})`,backgroundColor:`rgba(0, 153, 255, ${ie.wind*.2})`,pointStyle:n.daily16?.map(s=>on(s.wind_direction_10m,18,ie.wind)),pointRadius:6,pointBorderColor:"#ffffff",pointBorderWidth:1.5,pointBackgroundColor:n.daily16?.map(s=>parseFloat(s.wind_speed)>10?"#ff6a00":"#0099ff"),tension:.3,yAxisID:"y1"}]},Nt={animation:Bt?!1:void 0,responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,external:Yn,callbacks:{title:s=>`⏰ Час: ${s[0].label}`,label:s=>{if(s.datasetIndex===0){const p=s.parsed.y||0;let O=`Температура: ${_e(p)}`,R=[];return p>30&&R.push("СПЕКА ☀️"),p<-30&&R.push("МОРОЗ ❄️"),R.length>0&&(O+=` ⚠️ ${R.join(", ")}`),O}else if(s.datasetIndex===1){const p=s.parsed.y||0;let O=` Вітер: ${p.toFixed(1)} м/с`;p>10&&(O+=" ⚠️ СИЛЬНИЙ ВІТЕР");const R=Je?.[s.dataIndex];return R&&(O+=` | ${Fn(R.wind_direction_10m)} (${Math.round(R.wind_direction_10m||0)}°)`),O}return""}}}},scales:{y:{beginAtZero:!1,title:{display:!0,text:"Температура",color:"#ffb36c"},ticks:{color:a?"#aaa":"#888",font:{size:10}},grid:{color:a?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"rgba(0, 190, 235, 1)"},ticks:{color:"rgba(0, 190, 235, 1)",font:{size:10}},grid:{drawOnChartArea:!1}},x:{offset:!0,ticks:{color:a?"#aaa":"#888",font:{size:10}},grid:{display:!1}}}},mn={...Nt,plugins:{...Nt.plugins,legend:{display:!1},tooltip:{...Nt.plugins.tooltip,enabled:!1,external:Yn,callbacks:{title:s=>{const p=n.daily16?.[s[0].dataIndex];if(!p)return s[0].label;const O=nn(p.date,p.day,p.fullDate),R=Jn(p.date,p.day,p.fullDate),M=`${p.date}${p.day.toLowerCase()}${O.label?` [${O.label}]`:""}`;return R?[...R,M]:M},label:s=>{const p=s.datasetIndex===0,O=s.datasetIndex===1,R=s.datasetIndex===2;if(p)return`☀️ День: ${_e(s.parsed.y)}`;if(O)return`🌙 Ніч: ${_e(s.parsed.y)}`;if(R){const M=n.daily16?.[s.dataIndex]?.wind_direction_10m||0;return`🌬️ Вітер: ${s.parsed.y.toFixed(1)} м/с | ${Fn(M)} (${Math.round(M)}°)`}return""},afterLabel:s=>{const p=n.daily16?.[s.dataIndex];if(!p)return"";const O=[];return s.datasetIndex===0&&O.push(`Описання: ${p.description||"—"}`),O.length?`
${O.join(`
`)}`:""}}}},scales:{...Nt.scales,y:{beginAtZero:!1,title:{display:!0,text:"Температура (°C)",color:"#ffb36c"},ticks:{color:a?"#aaa":"#888",font:{size:10}},grid:{color:a?"rgba(255, 255, 255, 0.1)":"rgba(128, 128, 128, 0.1)"}},y1:{type:"linear",display:!0,position:"right",beginAtZero:!0,title:{display:!0,text:"Вітер (м/с)",color:"#0099ff"},ticks:{color:"#0099ff",font:{size:10}},grid:{drawOnChartArea:!1}},x:{...Nt.scales.x,ticks:{...Nt.scales.x.ticks,color:s=>{if(!n.daily16||s.index>=n.daily16.length)return a?"#aaa":"#888";const p=n.daily16[s.index];return nn(p.date,p.day,p.fullDate).color||(a?"#aaa":"#888")},font:{...Nt.scales.x.ticks.font,weight:s=>{if(!n.daily16||s.index>=n.daily16.length)return"normal";const p=n.daily16[s.index];return nn(p.date,p.day,p.fullDate).color?"bold":"normal"}}}}},onClick:(s,p)=>{if(p.length>0){const O=p[0].index,R=n.daily16[O],M=nn(R.date,R.day,R.fullDate);if(M.type==="holiday"||M.type==="birthday")te(R);else if(M.type==="custom")te(R),qn(M.label);else if(F.trim()){if(F.trim().length>12){alert("Назва свята занадто довга (макс. 12 символів)!");return}v(tl({date:R.fullDate,reason:F.trim()}))}else te(R)}}};function Yn(s){const{chart:p,tooltip:O}=s,R=document.fullscreenElement,M=R||document.body;let $=M.querySelector("#chartjs-external-tooltip");if(!$){const Ee=document.getElementById("chartjs-external-tooltip");Ee&&Ee.remove(),$=document.createElement("div"),$.id="chartjs-external-tooltip",$.style.position="fixed",$.style.zIndex="2147483647",$.style.maxWidth="min(280px, calc(100vw - 24px))",$.style.boxSizing="border-box",$.style.whiteSpace="pre-line",$.style.background="rgba(15, 15, 25, 0.92)",$.style.color="#fff",$.style.borderRadius="8px",$.style.padding="8px 12px",$.style.pointerEvents="none",$.style.transition="all 0.1s ease",$.style.boxShadow="0 8px 20px rgba(0,0,0,0.4)",$.style.border="1px solid rgba(255, 179, 108, 0.4)",$.style.fontSize="12px",$.style.backdropFilter="blur(6px)",$.setAttribute("role","dialog"),M.appendChild($)}if(O.opacity===0||!p.isPointInArea({x:O.caretX,y:O.caretY})){$.style.opacity="0";return}if(O.body){const Ee=O.title||[],Ge=O.body.map(o=>o.lines),yn=O.afterBody||[];let An="";Ee.forEach(o=>{An+=`<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${o}</div>`}),Ge.forEach(o=>{An+=`<div style="margin-bottom: 2px;">${o}</div>`}),yn.forEach(o=>{An+=`<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${o}</div>`}),$.innerHTML=An}const fe=p.canvas.getBoundingClientRect(),Ce=$.offsetWidth,it=$.offsetHeight,bn=R?R.clientWidth:window.innerWidth,Fe=R?R.clientHeight:window.innerHeight,Yt=Math.min(Math.max(12,fe.left+O.caretX+10),bn-Ce-12),ct=Math.min(Math.max(12,fe.top+O.caretY-it-10),Fe-it-12);$.style.opacity="1",$.style.left=`${Yt}px`,$.style.top=`${ct}px`}const[Zn,Ca]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(Zn)return;const s=setInterval(()=>{window.innerWidth>=768&&ze(p=>{const O=["current","hourly","daily","ai"],R=O[(O.indexOf(p)+1)%O.length];return R==="ai"&&!D&&ce&&pn(),R})},6500);return()=>clearInterval(s)},[Zn,D,ce,pn]);const Vn=()=>!Je||Je.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:a?"#aaa":"#666"},children:"Немає даних годинного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"3px",paddingBottom:"10px",minWidth:"min-content"},children:Je.map((s,p)=>{const O=s.wind_direction_10m||0,R=oa(O),M=parseInt(s.temp),$=M>25?"#ff4d4d":M<5?"#4da6ff":"#ffb36c";return(0,e.jsxs)("div",{style:{flex:"0 0 120px",background:a?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:a?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"7px",padding:"4px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",color:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.12)"},children:[(0,e.jsx)("div",{style:{fontSize:"12px",fontWeight:"bold",opacity:.85},children:s.time||s.label||`${p}:00`}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"2px 0"},children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:s.iconSymbol||s.iconPlaceholder||"🌤️"}),(0,e.jsx)(gn,{$size:"11px",$lh:"1.2",children:s.description||xt(s.weather_code)||(s.iconPlaceholder||"").replace(s.iconSymbol||"","").trim()||"Погода"})]}),(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:"800",color:$},children:_e(s.tempNum??s.temp)}),s.feels_like&&(0,e.jsxs)("div",{style:{fontSize:"10px",opacity:.75},children:["Відчувається: ",_e(s.feels_like)]}),(0,e.jsx)("div",{style:{width:"80%",height:"1px",background:a?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,e.jsxs)("div",{style:{fontSize:"10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:["Сила вітру: ",(0,e.jsxs)("span",{children:[s.wind_speed||s.windSpeed||"0"," м/с"]})]}),(0,e.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:["Напрямок: ",(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${O}deg)`,fontSize:"12px"},children:"⬇"})]}),(0,e.jsxs)("div",{style:{fontSize:"9px",opacity:.8},children:[" ",R," (",Math.round(O),"°)"]}),(s.wind_gusts_10m||s.wind_gusts)&&parseFloat(s.wind_gusts_10m||s.wind_gusts)>0&&(0,e.jsxs)("div",{style:{fontSize:"9px",color:"#ff9900",fontWeight:"600"},children:["Пориви: ",s.wind_gusts_10m||s.wind_gusts,"м/с"]})]})]},p)})})}),ra=()=>!Je||Je.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:a?"#aaa":"#666"},children:"Немає даних годинного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"10px",paddingBottom:"10px",minWidth:"min-content"},children:Je.map((s,p)=>{const O=s.wind_direction_10m||0,R=oa(O),M=n.current?.isPolarNight||s.isPolarNight,$=n.current?.isPolarDay||s.isPolarDay;return(0,e.jsxs)("div",{style:{flex:"0 0 200px",background:a?"rgba(20, 20, 30, 0.92)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:a?"1px solid rgba(0, 238, 255, 0.3)":"1px solid rgba(0, 140, 255, 0.3)",borderRadius:"10px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px",color:a?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.2)",fontSize:"11px"},children:[(0,e.jsxs)("div",{style:{fontSize:"13px",fontWeight:"bold",textAlign:"center",color:"#00eeff",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"},children:[(0,e.jsx)(lc,{})," ",s.time||s.label||`${p}:00`]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[(0,e.jsx)("span",{style:{fontSize:"24px"},children:s.iconSymbol||s.iconPlaceholder||"🌤️"}),(0,e.jsx)("span",{style:{fontSize:"11px",fontWeight:"600",opacity:.9},children:s.description||xt(s.weather_code)||(s.iconPlaceholder||"").replace(s.iconSymbol||"","").trim()||"Погода"})]}),(0,e.jsxs)("div",{style:{background:"rgba(255,255,255,0.06)",borderRadius:"6px",padding:"6px"},children:[!M&&(0,e.jsxs)("div",{style:{fontWeight:"700",color:"#ff9d3b"},children:["Температура: ",_e(s.tempNum??s.temp)]}),s.feels_like&&(0,e.jsxs)("div",{style:{fontSize:"10px",opacity:.8},children:["Відчувається: ",_e(s.feels_like)]}),M&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#4da6ff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Mn,{})," Полярна ніч"]}),$&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#ffd700",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Sn,{})," Полярний день"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Oa,{style:{color:"#00eeff"}})," Вітер:"]})," ",s.wind_speed||s.windSpeed||"0"," м/с (",R,")"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Fo,{style:{color:"#4da6ff"}})," Вологість:"]})," ",s.humidity??n.current?.humidity??"—","%"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(yo,{style:{color:"#00ffcc"}})," Точка роси:"]})," ",s.dew_point_2m!==void 0?_e(s.dew_point_2m):"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Eo,{style:{color:"#3399ff"}})," Опади:"]})," ",s.precipitation!==void 0?`${s.precipitation} мм`:"0 мм"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Co,{style:{color:"#80d4ff"}})," Сніг:"]})," ",s.snowfall!==void 0?`${s.snowfall} см`:"0 см"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Ro,{style:{color:"#00cdff"}})," Ґрунт:"]})," ",s.soil_temperature_0cm!==void 0?_e(s.soil_temperature_0cm):"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Io,{style:{color:"#ff9d3b"}})," Рівень 0°C:"]})," ",s.freezing_level_height!==void 0?`${s.freezing_level_height}м`:"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Rr,{style:{color:"#00eeff"}})," Випаровування:"]})," ",s.evapotranspiration!==void 0?`${parseFloat(s.evapotranspiration).toFixed(2)} мм`:"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(ko,{style:{color:"#ffb36c"}})," Тиск:"]})," ",s.pressure??n.current?.pressure??"—"," hPa"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(pc,{style:{color:"#aaa"}})," Хмари:"]})," ",s.cloud_cover??n.current?.cloud_cover??"—","%"]})]})]},p)})})}),an=()=>{const s=n.daily16||n.daily||[];return!s||s.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:a?"#aaa":"#666"},children:"Немає даних 16-денного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"10px",paddingBottom:"10px",minWidth:"min-content"},children:s.map((p,O)=>{const R=nn(p.date,p.day,p.fullDate),M=p.wind_direction_10m||0,$=oa(M),fe=p.isPolarNight||n.current?.isPolarNight,Ce=p.isPolarDay||n.current?.isPolarDay,it=p.isPolarEndDay;return(0,e.jsxs)("div",{style:{flex:"0 0 210px",background:a?"rgba(25, 25, 38, 0.92)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:R.color?`2px solid ${R.color}`:a?"1px solid rgba(255, 255, 255, 0.15)":"1px solid rgba(0,0,0,0.1)",borderRadius:"12px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px",color:a?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",fontSize:"11px"},children:[(0,e.jsxs)("div",{style:{fontSize:"13px",fontWeight:"bold",textAlign:"center",color:R.color||"#ffb36c",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"},children:[(0,e.jsx)(oc,{})," ",p.date," ",p.day]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[(0,e.jsx)("span",{style:{fontSize:"26px"},children:p.iconSymbol||p.iconPlaceholder||"🌤️"}),(0,e.jsx)("span",{style:{fontSize:"11px",fontWeight:"600"},children:p.description||xt(p.weather_code)||(p.iconPlaceholder||"").replace(p.iconSymbol||"","").trim()||"Погода"})]}),(0,e.jsxs)("div",{style:{background:"rgba(255,255,255,0.06)",borderRadius:"6px",padding:"6px",display:"flex",flexDirection:"column",gap:"2px"},children:[!fe&&(0,e.jsxs)("div",{style:{fontWeight:"800",color:"#ff9d3b",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Sn,{})," День: ",_e(p.temp_day||p.temp)]}),!Ce&&(0,e.jsxs)("div",{style:{fontWeight:"700",color:"#ff3399",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Mn,{})," Ніч: ",_e(p.temp_night||p.nightTemp)]}),fe&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#4da6ff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Mn,{})," Полярна ніч (день не показується)"]}),Ce&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#ffd700",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(Sn,{})," Полярний день (ніч не показується)"]}),it&&(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#00eeff",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsx)(mc,{})," Закінчення полярного періоду"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Oa,{style:{color:"#00eeff"}})," Вітер:"]})," ",p.wind_speed||"0"," м/с (",$,")"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Sn,{style:{color:"#ffd700"}})," УФ-індекс:"]})," ",p.uv_index??"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Fo,{style:{color:"#4da6ff"}})," Ймовірність опадів:"]})," ",p.pop!==void 0?`${p.pop}%`:"—"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Eo,{style:{color:"#3399ff"}})," Дощ:"]})," ",p.rain!==void 0?`${p.rain} мм`:"0.0 мм"]}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,e.jsxs)("strong",{children:[(0,e.jsx)(Rr,{style:{color:"#00eeff"}})," Випаровування:"]})," ",p.evapotranspiration!==void 0?`${parseFloat(p.evapotranspiration).toFixed(2)} мм`:"—"]})]})]},O)})})})},Xn=()=>{const s=n.daily16||n.daily||[];return!s||s.length===0?(0,e.jsx)("div",{style:{padding:"20px",textAlign:"center",color:a?"#aaa":"#666"},children:"Немає даних 16-денного прогнозу."}):(0,e.jsx)("div",{style:{marginTop:"12px",width:"100%",overflowX:"auto"},children:(0,e.jsx)("div",{style:{display:"flex",gap:"5px",minWidth:"min-content"},children:s.map((p,O)=>{const R=O<2||p.isPast,M=nn(p.date,p.day,p.fullDate),$=p.day==="Сб"||p.day==="Нд"||M.type==="weekend",fe=p.wind_direction_10m||0,Ce=oa(fe),it=parseInt(p.temp_day||p.temp),bn=parseInt(p.temp_night||p.nightTemp),Fe=p.isPolarNight||n.current?.isPolarNight,Yt=p.isPolarDay||n.current?.isPolarDay;let ct=a?"#fff":"#333",Ee=a?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.1)",Ge=null;return R?(ct="#888",Ee="rgba(140, 140, 140, 0.35)",Ge=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(120,120,120,0.3)",color:"#bbb",padding:"1px 6px",borderRadius:"4px"},children:"Минулі дні"})):M.type==="holiday"?(ct="#ff4d4d",Ee="rgba(255, 77, 77, 0.7)",Ge=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 77, 77, 0.25)",color:"#ff4d4d",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вітаю зі святом!"})):M.type==="custom"?(ct="#00bfff",Ee="rgba(0, 191, 255, 0.7)",Ge=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(0, 191, 255, 0.25)",color:"#00bfff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Ваша подія"})):M.type==="birthday"?(ct="#e066ff",Ee="rgba(224, 102, 255, 0.7)",Ge=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(224, 102, 255, 0.25)",color:"#e066ff",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вітаємо з днем народження!"})):$&&(ct="#ffb36c",Ee="rgba(255, 179, 108, 0.7)",Ge=(0,e.jsx)("span",{style:{fontSize:"9px",background:"rgba(255, 179, 108, 0.25)",color:"#ffb36c",padding:"1px 6px",borderRadius:"4px",fontWeight:"bold"},children:"Вихідний день"})),(0,e.jsxs)("div",{style:{flex:"0 0 125px",background:R?a?"rgba(20, 20, 26, 0.85)":"rgba(230, 230, 235, 0.85)":a?"rgba(25, 25, 35, 0.88)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(8px)",border:R?"1px dashed rgba(140, 140, 140, 0.4)":`2px solid ${Ee}`,borderRadius:"14px",padding:"12px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",textAlign:"center",color:a?"#fff":"#1a1a1a",boxShadow:"0 4px 14px rgba(0,0,0,0.12)",filter:R?"grayscale(85%)":"none",opacity:R?.75:1,transition:"all 0.2s ease"},children:[Ge,(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,e.jsxs)("span",{style:{fontSize:"12px",fontWeight:"bold",color:ct},children:[p.date," ",p.day]})}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[(0,e.jsx)("div",{style:{fontSize:"28px"},children:p.iconSymbol||p.iconPlaceholder||"🌤️"}),(0,e.jsx)("div",{style:{fontSize:"10px",lineHeight:1.3,opacity:.8,color:ct,fontWeight:600},children:p.description||xt(p.weather_code??0)||"Погода"})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px",width:"100%"},children:[!Fe&&(0,e.jsxs)("div",{style:{background:"rgba(255, 179, 108, 0.15)",borderRadius:"6px",padding:"2px 4px",fontSize:"14px",fontWeight:"800",color:"#ff9d3b"},children:["День: ",_e(it)]}),!Yt&&(0,e.jsxs)("div",{style:{background:"rgba(255, 20, 147, 0.12)",borderRadius:"6px",padding:"2px 4px",fontSize:"12px",fontWeight:"700",color:"#ff3399"},children:["Ніч: ",_e(bn)]})]}),(0,e.jsx)("div",{style:{width:"85%",height:"1px",background:a?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",margin:"4px 0"}}),(0,e.jsxs)("div",{style:{fontSize:"11px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontWeight:"700",color:"#0099ff"},children:["Напрямок: ",(0,e.jsx)("span",{style:{display:"inline-block",transform:`rotate(${fe}deg)`,fontSize:"13px"},children:"⬇"})]}),(0,e.jsx)("div",{style:{fontSize:"10px"},children:(0,e.jsxs)("span",{children:["Сила вітру: ",p.wind_speed||"0"]})}),(0,e.jsxs)("div",{style:{fontSize:"10px"},children:[Ce," (",Math.round(fe),"°)"]})]})]},O)})})})};return(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,e.jsx)(Y0,{$isMain:n.isMain,$isDarkMode:a,children:(0,e.jsxs)(ep,{$isDarkMode:a,onMouseEnter:()=>Ca(!0),onMouseLeave:()=>Ca(!1),children:[(0,e.jsxs)(tp,{$image:bt||n.cityImage,children:[(0,e.jsxs)(Z0,{$isMain:n.isMain,style:{position:"relative",zIndex:10,background:a?"#040404":"rgb(246, 246, 246)"},children:[(0,e.jsxs)("div",{children:[B?(0,e.jsxs)(_t.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)("input",{type:"text",value:J,onChange:s=>Q(s.target.value),onKeyDown:s=>{s.key==="Enter"?(s.preventDefault(),hn()):s.key==="Escape"&&H(!1)},autoFocus:!0,style:{padding:"4px 10px",fontSize:"13px",fontWeight:"600",borderRadius:"8px",border:"1.5px solid #00eeff",background:a?"rgba(10, 15, 25, 0.9)":"#ffffff",color:a?"#ffffff":"#1a1a1a",outline:"none",boxShadow:"0 0 12px rgba(0, 238, 255, 0.4)"}}),(0,e.jsx)(_t.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:hn,title:"Зберегти (Enter)","aria-label":"Зберегти",style:{background:"linear-gradient(135deg, #00eeff 0%, #008cff 100%)",color:"#000000",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 238, 255, 0.4)"},children:(0,e.jsx)(Lc,{size:18})}),(0,e.jsx)(_t.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>H(!1),title:"Скасувати (Esc)","aria-label":"Скасувати",style:{background:"linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",color:"#ffffff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(255, 65, 108, 0.4)"},children:(0,e.jsx)(wc,{size:18})})]}):(0,e.jsx)(In,{content:"Двічі клацніть, щоб змінити назву",isDarkMode:a,children:(0,e.jsxs)("h3",{onDoubleClick:()=>H(!0),style:{display:"flex",alignItems:"center",gap:"8px",margin:0,cursor:"pointer",userSelect:"none"},children:[(0,e.jsxs)("span",{style:{color:a?"white":"black",fontWeight:900},children:["#",u]}),(0,e.jsx)("span",{style:{color:a?"white":"black",fontWeight:900},children:n.locationName})]})}),(0,e.jsxs)("p",{style:{fontSize:"10px",color:"#fcfcfc"},children:["Широта: ",n.lat?.toFixed(2),", Довгота: ",n.lon?.toFixed(2)]})]}),(0,e.jsxs)(X0,{style:{position:"relative"},children:[(0,e.jsx)(In,{content:"Налаштування картки",isDarkMode:a,children:(0,e.jsx)("button",{ref:s=>{n.isMain&&j&&j("weatherGear",s)},onClick:()=>{window.dispatchEvent(new CustomEvent("domino-weather-gear-clicked")),pe?Ct():Ae(!0)},"aria-label":"Налаштування картки",style:{padding:"5px",display:"inline-flex",color:`${a?"rgb(251, 251, 251)":"rgb(3, 3, 3)"}`,alignItems:"center",gap:"4px"},children:(0,e.jsx)(Zs,{size:28})})}),(pe||de)&&(0,e.jsxs)(gp,{$isDarkMode:a,$isClosing:de,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 10px",borderBottom:"1px solid #444"},children:[(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"bold",color:a?"#ccc":"#444"},children:"Одиниці:"}),(0,e.jsx)("div",{style:{display:"flex",gap:"4px"},children:[{key:"C",label:"°C (Рекомендовано)"},{key:"K",label:"K (Кельвіни)"},{key:"F",label:"°F (Фаренгейти)"}].map(s=>(0,e.jsx)("button",{onClick:()=>Cn(s.key),title:s.label,style:{padding:"3px 8px",fontSize:"12px",borderRadius:"4px",border:at===s.key?"1px solid #00eeff":"1px solid #555",background:at===s.key?a?"#00eeff":"#008cff":"transparent",color:at===s.key?"#000":a?"#fff":"#000",fontWeight:at===s.key?"bold":"normal",cursor:"pointer"},children:s.key==="C"?"°C":s.key==="K"?"K":"°F"},s.key))}),(0,e.jsx)(In,{content:"Закрити меню",isDarkMode:a,children:(0,e.jsx)("button",{onClick:Ct,style:{background:"transparent",border:"none",color:a?"#ffb36c":"#333",fontSize:"20px",cursor:"pointer",fontWeight:"900",padding:"4px",lineHeight:1},"aria-label":"Закрити меню",children:"✕"})})]}),!B&&(0,e.jsxs)("button",{onClick:()=>{H(!0),Ct()},style:{textAlign:"left",padding:"0px 0px 10px 10px",background:"transparent",color:a?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(ac,{size:16})," Змінити назву"]}),(0,e.jsxs)("button",{onClick:()=>{ne(!0),Ct()},style:{textAlign:"left",padding:"10px",background:"transparent",color:a?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(sc,{size:16})," Змінити фон"]}),(0,e.jsxs)("button",{onClick:()=>{$t(),Ct()},style:{textAlign:"left",padding:"10px",background:"transparent",color:a?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(zo,{size:16})," ",ce?"Вимкнути ШІ":"Увімкнути ШІ"]}),(0,e.jsxs)("button",{onClick:()=>{E(!0),Ct()},style:{textAlign:"left",padding:"10px",background:"transparent",color:a?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Lo,{})," Встановити дати"]}),(0,e.jsxs)("button",{onClick:()=>{m(bt||n.cityImage)},style:{textAlign:"left",padding:"10px",background:"transparent",color:a?"#fff":"#000",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Ya,{size:16})," Детальна погода"]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px",borderBottom:"1px solid #444"},children:[(0,e.jsx)("button",{disabled:u===0,onClick:()=>{Ct(),P(n.id,-1)},style:{flex:1,background:"transparent",color:u===0?"grey":a?"#fff":"#000",fontSize:"13px",cursor:u===0?"default":"pointer"},children:"Зробити вище картку"}),(0,e.jsx)("button",{disabled:u===g-1,onClick:()=>{Ct(),P(n.id,1)},style:{flex:1,background:"transparent",color:u===g-1?"grey":a?"#fff":"#000",fontSize:"13px",cursor:u===g-1?"default":"pointer"},children:"Зробити нижче картку"})]}),n.isMain?(0,e.jsxs)("button",{onClick:On,style:{textAlign:"left",padding:"10px",background:"transparent",color:c?a?"#fff":"#000":"#b300ad",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Ic,{size:14})," ",c?"GPS On":"GPS Off"]}):(0,e.jsxs)("button",{onClick:()=>{T(n.id)},style:{textAlign:"left",padding:"10px",background:"transparent",color:"red",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[(0,e.jsx)(Gs,{size:14})," Видалити"]}),(0,e.jsxs)("button",{onClick:()=>{Ct(),lt&&window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`weather-${n.id}`,type:"weather",title:n.locationName,details:`Місто: ${n.locationName}. Координати: ${n.lat?.toFixed(2)}, ${n.lon?.toFixed(2)}. Температура: ${n.current?.temp}°C, відчувається: ${n.current?.feels_like}°C. Вітер: ${n.current?.wind_speed} м/с. Вологість: ${n.current?.humidity}%. Тиск: ${n.current?.pressure} гПа.`}}))},style:{textAlign:"left",padding:"10px",background:lt?"linear-gradient(135deg, #5c1d3c, #62123d)":"rgba(120,120,120,0.3)",color:"#fff",borderBottom:"1px solid #444",fontSize:"13px",display:"inline-flex",alignItems:"center",gap:"6px",cursor:lt?"pointer":"default"},children:[(0,e.jsx)(qs,{size:16})," Прикріпити до ШІ"]})]})]})]}),(0,e.jsx)(_0,{customDays:C,cardId:n.id}),(0,e.jsx)(rp,{children:[{key:"current",label:"Зараз"},{key:"hourly",label:"Годинна"},{key:"daily",label:"Місячна"},{key:"ai",label:"ШІ"}].map(s=>(0,e.jsx)("button",{onClick:()=>s.key==="ai"?Rn():ze(s.key),style:{padding:"4px 2px",border:"none",borderBottom:be===s.key?"2px solid #00eeff":"2px solid transparent",background:"transparent",color:be===s.key?"#00eeff":a?"#aaa":"#555",fontWeight:be===s.key?700:400,fontSize:"11px",cursor:"pointer",transition:"all 0.2s"},children:s.label},s.key))}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[be==="current"&&(0,e.jsx)(Q0,{style:{borderRadius:0},children:(0,e.jsx)(ip,{style:{position:"relative",borderRadius:0,padding:"2px",background:"rgba(0, 0, 0, 0.43)"},children:(0,e.jsxs)(ap,{children:[(0,e.jsxs)(vn,{"aria-label":n.current.iconPlaceholder,children:[(0,e.jsx)(kn,{$size:"32px",$lh:"1",children:n.current.iconSymbol||"🌤️"}),(0,e.jsx)(gn,{$size:"11px",$lh:"1.2",children:(n.current.iconPlaceholder||"").replace(n.current.iconSymbol||"","").trim()||"Мінлива хмарність"})]}),(0,e.jsxs)(vn,{"aria-label":"Температура / Відчувається як",children:[(0,e.jsx)(kn,{$color:parseFloat(n.current.temp)<5?"#4da6ff":parseFloat(n.current.temp)>25?"#ff4d4d":"inherit",children:parseFloat(n.current.temp)<5?(0,e.jsx)(kc,{}):parseFloat(n.current.temp)>25?(0,e.jsx)(Po,{}):(0,e.jsx)(Io,{})}),(0,e.jsxs)(gn,{$mt:"0px",children:[_e(n.current.temp),(0,e.jsxs)(rr,{$size:"9px",children:["Відчувається: ",_e(n.current.feels_like)]})]})]}),(0,e.jsxs)(vn,{"aria-label":"Відносна вологість",children:[(0,e.jsx)(kn,{$color:parseFloat(n.current.humidity)>70?"#4da6ff":"inherit",children:parseFloat(n.current.humidity)>70?(0,e.jsx)(gc,{}):(0,e.jsx)(uc,{})}),(0,e.jsxs)(gn,{$mt:"10px",children:["Вологість: ",n.current.humidity??"—"]})]}),(0,e.jsxs)(vn,{"aria-label":`Вітер: ${n.current.wind_speed}, Напрямок: ${n.current.wind_direction_10m}° (${oa(n.current.wind_direction_10m)}), Пориви: ${n.current.wind_gusts_10m} м/с`,children:[(0,e.jsx)(kn,{$size:"28px",$rotate:Math.round((n.current.wind_direction_10m||0)/45)*45%360,children:"⬇"}),(0,e.jsxs)(gn,{$mt:"-5px",children:["Швидкість вітру: ",n.current.wind_speed,(0,e.jsxs)(rr,{children:[n.current.wind_direction_10m,"° ",oa(n.current.wind_direction_10m)]}),(0,e.jsxs)(rr,{$weight:"bold",$opacity:.9,style:{color:d?"#ff4d4d":"inherit"},children:["Пориви: ",n.current.wind_gusts_10m,"м/с"]})]})]}),(0,e.jsx)(In,{content:"Точка роси (температура, при якій утворюється роса)",isDarkMode:a,children:(0,e.jsxs)(vn,{"aria-label":"Точка роси (температура, при якій утворюється роса)",children:[(0,e.jsx)(kn,{children:(0,e.jsx)(yo,{})}),(0,e.jsxs)(gn,{children:["Точка роси: ",_e(n.current.dew_point_2m)]})]})}),(0,e.jsxs)(vn,{"aria-label":"Атмосферний тиск",$pad:"10px",children:[(0,e.jsx)(kn,{$color:parseFloat(n.current.pressure)<1e3?"#4da6ff":parseFloat(n.current.pressure)>1020?"#ff4d4d":"inherit",children:(0,e.jsx)(ko,{})}),(0,e.jsxs)(gn,{children:["Атмосферний тиск: ",n.current.pressure]})]}),(0,e.jsxs)(vn,{"aria-label":"Хмарність",children:[(0,e.jsx)(kn,{children:parseFloat(n.current.cloud_cover)<50?(0,e.jsx)($d,{}):(0,e.jsx)(yc,{})}),(0,e.jsxs)(gn,{$size:"11px",children:["Хмарність: ",n.current.cloud_cover,"%"]})]}),(0,e.jsxs)(vn,{"aria-label":"Видимість",$pad:"0px",children:[(0,e.jsx)(kn,{$opacity:Math.min(1,Math.max(.3,(n.current.visibility||1e4)/1e4)),$color:(n.current.visibility||1e4)<2e3?"#ff4d4d":"inherit",children:(0,e.jsx)(Id,{})}),(0,e.jsxs)(gn,{$size:"10px",children:["Видимість:",n.current.visibility!==void 0?(n.current.visibility/1e3).toFixed(1):"—","км"]})]}),(0,e.jsxs)(vn,{"aria-label":"УФ-індекс / Сонячна радіація",$pad:"10px",children:[(0,e.jsx)(kn,{$color:(n.current.uv_index||0)>5?"#ff4d4d":(n.current.uv_index||0)>2?"#ffd700":"inherit",children:(0,e.jsx)(Od,{})}),(0,e.jsxs)(gn,{$size:"10px",children:["УФ-індекс: ",n.current.uv_index??0]})]}),(0,e.jsx)(In,{content:"Товщина снігового покриву (см)",isDarkMode:a,children:(0,e.jsxs)(vn,{"aria-label":"Сніговий покрив",children:[(0,e.jsx)(kn,{$color:n.current.snow_depth>0?"#00eeff":"inherit",children:(0,e.jsx)(Co,{})}),(0,e.jsxs)(gn,{$size:"10px",children:["Сніг: ",n.current.snow_depth?`${(n.current.snow_depth*100).toFixed(1)} см`:"0 см"]})]})}),(0,e.jsx)(In,{content:"Температура ґрунту (0 см) та рівень 0°C ізотерми (висота замерзання)",isDarkMode:a,children:(0,e.jsxs)(vn,{"aria-label":"Замерзання та температура ґрунту",children:[(0,e.jsx)(kn,{$color:n.current.soil_temperature_0cm<=0?"#4da6ff":"inherit",children:(0,e.jsx)(Ro,{})}),(0,e.jsxs)(gn,{$size:"10px",children:["Ґрунт: ",n.current.soil_temperature_0cm!==void 0?_e(n.current.soil_temperature_0cm):"—",(0,e.jsxs)(rr,{$size:"9px",children:["Рівень 0°C: ",n.current.freezing_level_height??"—","м"]})]})]})}),(0,e.jsx)(In,{content:"Випаровування (ET0, мм). Показує швидкість втрати вологи з ґрунту та рослин. Важливо для поливу саду/городу, оцінки висихання білизни та комфорту.",isDarkMode:a,children:(0,e.jsxs)(vn,{"aria-label":"Випаровування",children:[(0,e.jsx)(kn,{$color:n.current.evapotranspiration>3?"#ff9900":"#00eeff",children:(0,e.jsx)(Rr,{})}),(0,e.jsxs)(gn,{$size:"10px",children:["Випаровування: ",n.current.evapotranspiration!==void 0?`${n.current.evapotranspiration.toFixed(2)} мм`:"0 мм"]})]})})]})})}),be==="hourly"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"8px"},children:[(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Годинний прогноз"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,e.jsx)(ir,{$isDarkMode:a,style:{borderRadius:"8px",padding:"2px"},children:[{key:"C",label:"°C"},{key:"K",label:"K"},{key:"F",label:"°F"}].map(s=>(0,e.jsx)(na,{$active:at===s.key,$isDarkMode:a,onClick:()=>Cn(s.key),title:`Переключити на ${s.key}`,style:{padding:"3px 8px",fontSize:"12px"},children:s.label},s.key))}),(0,e.jsxs)(ir,{$isDarkMode:a,children:[(0,e.jsx)(na,{$active:Ze==="charts",$isDarkMode:a,onClick:()=>Ue("charts"),title:"Графіки",children:(0,e.jsx)(Ya,{size:18})}),(0,e.jsx)(na,{$active:Ze==="table",$isDarkMode:a,onClick:()=>Ue("table"),title:"Таблиця",children:(0,e.jsx)(Mo,{size:18})}),(0,e.jsx)(na,{$active:Ze==="blocks",$isDarkMode:a,onClick:()=>Ue("blocks"),title:"Блоки",children:(0,e.jsx)(Oo,{size:18})})]})]})]}),sn.length>1&&(0,e.jsx)("div",{style:{marginTop:"8px",marginBottom:"8px"},children:(0,e.jsx)("select",{value:ft,onChange:s=>nt(Number(s.target.value)),style:{width:"100%",maxWidth:"260px",padding:"8px 10px",borderRadius:"8px",border:a?"1px solid #555":"1px solid #ccc",background:a?"#1f1f1f":"#fff",color:a?"#fff":"#000",fontSize:"13px",fontWeight:"600",cursor:"pointer"},children:sn.map((s,p)=>(0,e.jsx)("option",{value:p,children:s.title||s.label},s.label))})}),Ze==="charts"?Je&&Je.length>0&&(0,e.jsxs)("div",{ref:Jt,style:{position:"relative",width:"100%",minHeight:se==="hourly"?Bt?`${window.innerHeight}px`:"100vh":void 0,padding:se==="hourly"?"16px":void 0,boxSizing:"border-box",background:se==="hourly"?a?"#000":"#f5f5f5":"transparent"},children:[_n("hourly",Jt,[{key:"day",label:"Температура",color:"#ffb36c",icon:(0,e.jsx)(Po,{})},{key:"wind",label:"Вітер",color:"#0099ff",icon:(0,e.jsx)(Oa,{})}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(Ko,{children:(0,e.jsx)(Ma,{$width:se==="hourly"?`max(100%, ${tn}px)`:tn,$height:se==="hourly"?Bt?`${window.innerHeight-90}px`:"calc(100vh - 90px)":De,children:(0,e.jsx)(Da,{ref:zt,options:Nt,data:Qe},`hourly-${se||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:a?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:se==="hourly"?"none":"block"},children:(0,e.jsx)(Ma,{$width:tn,$height:De,children:(0,e.jsx)(Da,{options:{...Nt,plugins:{...Nt.plugins,tooltip:{...Nt.plugins.tooltip,enabled:!0}}},data:Qe})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:a?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:se==="hourly"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:`${tn}px`,height:De},children:(0,e.jsx)(Ma,{$width:tn,$height:De,children:(0,e.jsx)(Da,{options:{...Nt,plugins:{...Nt.plugins,tooltip:{...Nt.plugins.tooltip,enabled:!0}}},data:Qe})})})})]})]}):Ze==="table"?Vn():ra()]}),be==="daily"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",flexWrap:"wrap",marginBottom:"8px"},children:[(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px"},children:"Прогноз на 16 днів (включаючи 2 минулі дні)"}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,e.jsx)(ir,{$isDarkMode:a,style:{borderRadius:"8px",padding:"2px"},children:[{key:"C",label:"°C"},{key:"K",label:"K"},{key:"F",label:"°F"}].map(s=>(0,e.jsx)(na,{$active:at===s.key,$isDarkMode:a,onClick:()=>Cn(s.key),title:`Переключити на ${s.key}`,style:{padding:"3px 8px",fontSize:"12px"},children:s.label},s.key))}),(0,e.jsxs)(ir,{$isDarkMode:a,children:[(0,e.jsx)(na,{$active:gt==="charts",$isDarkMode:a,onClick:()=>Ie("charts"),title:"Графіки",children:(0,e.jsx)(Ya,{size:18})}),(0,e.jsx)(na,{$active:gt==="table",$isDarkMode:a,onClick:()=>Ie("table"),title:"Таблиця",children:(0,e.jsx)(Mo,{size:18})}),(0,e.jsx)(na,{$active:gt==="blocks",$isDarkMode:a,onClick:()=>Ie("blocks"),title:"Блоки",children:(0,e.jsx)(Oo,{size:18})})]})]})]}),gt==="charts"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"6px 8px",background:a?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(4px)",borderBottom:"1px solid #ffb36c",zIndex:100},children:[cn([{key:"day",label:"День",color:"#ffb36c",icon:(0,e.jsx)(Sn,{})},{key:"night",label:"Ніч",color:"#ff1493",icon:(0,e.jsx)(Mn,{})},{key:"wind",label:"Вітер",color:"#0099ff",icon:(0,e.jsx)(Oa,{})}]),Tn("daily",zn)]}),(0,e.jsxs)("div",{ref:zn,style:{position:"relative",width:"100%",minHeight:se==="daily"?Bt?`${window.innerHeight}px`:"100vh":void 0,padding:se==="daily"?"16px":void 0,boxSizing:"border-box",background:se==="daily"?a?"#000":"#f5f5f5":"transparent"},children:[se==="daily"&&_n("daily",zn,[{key:"day",label:"День",color:"#ffb36c",icon:(0,e.jsx)(Sn,{})},{key:"night",label:"Ніч",color:"#ff1493",icon:(0,e.jsx)(Mn,{})},{key:"wind",label:"Вітер",color:"#0099ff",icon:(0,e.jsx)(Oa,{})}]),(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)(Ko,{ref:Xt,children:(0,e.jsx)(Ma,{$width:se==="daily"?"max(100%, 900px)":900,$height:se==="daily"?Bt?`${window.innerHeight-120}px`:"calc(100vh - 120px)":De,children:(0,e.jsx)(Da,{ref:$n,options:mn,data:Gn},`daily-${se||"normal"}`)})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"50px",height:"calc(100% - 29px)",background:a?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:se==="daily"?"none":"block"},children:(0,e.jsx)(Ma,{$width:1300,$height:De,children:(0,e.jsx)(Da,{options:{...mn,plugins:{...mn.plugins,tooltip:{...mn.plugins.tooltip,enabled:!0}}},data:Gn})})}),(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"50px",height:"calc(100% - 29px)",background:a?"#000":"#f5f5f5",overflow:"hidden",pointerEvents:"none",display:se==="daily"?"none":"block"},children:(0,e.jsx)("div",{style:{position:"absolute",top:0,right:0,width:"1300px",height:De},children:(0,e.jsx)(Ma,{$width:1300,$height:De,children:(0,e.jsx)(Da,{options:{...mn,plugins:{...mn.plugins,tooltip:{...mn.plugins.tooltip,enabled:!0}}},data:Gn})})})})]})]})]}):gt==="table"?Xn():an()]}),be==="ai"&&(0,e.jsxs)(dp,{$isDarkMode:a,layout:!0,children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[(0,e.jsx)("span",{className:"ai-header-text",style:{fontWeight:800,color:a?"#fff":"#000",fontSize:"18px",letterSpacing:"1px"},children:"Прогноз ШІ (Gemini)"}),(0,e.jsx)("button",{className:"ai-edit-btn",onClick:()=>Dt(!It),style:{background:"rgba(138, 43, 226, 0.2)",border:"1px solid rgba(138, 43, 226, 0.6)",borderRadius:"6px",cursor:"pointer",fontWeight:600,fontSize:"11px",color:a?"#fff":"#000",padding:"4px 8px",transition:"all 0.2s"},children:It?"Повернутися до ШІ Викладу":"Редагувати умову промпту"})]}),It?(0,e.jsxs)(up,{$isDarkMode:a,children:[(0,e.jsx)("label",{style:{fontSize:"11px",fontWeight:"bold"},children:"Своя інструкція до прогнозу:"}),(0,e.jsx)(fp,{$isDarkMode:a,value:X,onChange:s=>me(s.target.value),placeholder:"Наприклад: Дай поради для рибалки на основі вітру та тиску..."}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"10px",marginTop:"6px"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsx)("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Обсяг:"}),(0,e.jsxs)("select",{value:oe,onChange:s=>Te(s.target.value),style:{fontSize:"12px",padding:"6px 10px",borderRadius:"6px",background:a?"#252535":"#fff",color:a?"#fff":"#000",border:"1px solid rgba(138, 43, 226, 0.5)",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"concise",children:"Стисло"}),(0,e.jsx)("option",{value:"extensive",children:"Обширно"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,e.jsx)("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Стиль:"}),(0,e.jsxs)("select",{value:Se,onChange:s=>ut(s.target.value),style:{fontSize:"12px",padding:"6px 10px",borderRadius:"6px",background:a?"#252535":"#fff",color:a?"#fff":"#000",border:"1px solid rgba(138, 43, 226, 0.5)",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"friendly",children:"Дружній"}),(0,e.jsx)("option",{value:"scientific",children:"Науковий"}),(0,e.jsx)("option",{value:"sarcastic",children:"Саркастичний"})]})]})]}),(0,e.jsx)("button",{onClick:async()=>{const s=X.trim()!==ot.trim(),p=Date.now(),O=864e5;if(s&&Oe&&p-Oe<O){const R=Math.ceil((O-(p-Oe))/36e5);alert(`Промпт можна змінити знову через ${R} год.`);return}await f.default.setItem(`ai_custom_prompt_${n.id}`,X),await f.default.setItem(`ai_response_length_${n.id}`,oe),await f.default.setItem(`ai_style_${n.id}`,Se),s&&(await f.default.setItem(`ai_custom_prompt_changed_at_${n.id}`,p),st(X),tt(p)),Dt(!1),Qt()},style:{background:"linear-gradient(135deg, #8a2be2, #a855f7)",color:"white",border:"none",borderRadius:"8px",padding:"8px 16px",fontSize:"12px",cursor:"pointer",fontWeight:"bold",boxShadow:"0 3px 10px rgba(138, 43, 226, 0.35)",marginTop:"auto"},children:"Зберегти та оновити"})]})]}):re?(0,e.jsx)("div",{style:{color:"#b362ff",padding:"10px 0",fontSize:"12px"},children:"Генерація прогнозу ШІ..."}):D?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_t.div,{layout:!0,transition:{duration:.3},children:(0,e.jsx)(cp,{ref:$e,$isExpanded:!1,children:D})}),jt&&(0,e.jsx)(pp,{onClick:()=>Mt(!0),children:"Читати далі..."})]}):(0,e.jsx)("div",{style:{color:a?"#aaa":"#555",padding:"8px 0",fontSize:"12px"},children:'ШІ-аналіз недоступний. Ви можете відредагувати умову промпту вище та натиснути "Зберегти та оновити".'})]})]})]}),(0,e.jsxs)(np,{children:[(0,e.jsx)(ar,{$active:be==="current",$bgImg:bt||n.cityImage,onClick:()=>ze("current"),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px"},children:n.current?.iconSymbol||"🌤️"}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsxs)(tr,{$active:be==="current",children:["Зараз: ",n.current?.temp]}),(0,e.jsxs)(nr,{$active:be==="current",children:["Відчувається: ",n.current.feels_like]})]})]})}),(0,e.jsx)(ar,{$active:be==="hourly",$bgImg:c0,onClick:()=>ze("hourly"),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#ffb36c"},children:(0,e.jsx)(Ya,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(tr,{$active:be==="hourly",children:"Годинна(24г)"}),(0,e.jsx)(nr,{$active:be==="hourly",children:"Погодинна на 7 днів"})]})]})}),(0,e.jsx)(ar,{$active:be==="daily",onClick:()=>ze("daily"),$bgImg:p0,children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#ff1493"},children:(0,e.jsx)(Lo,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(tr,{$active:be==="daily",children:"Прогноз на 16 днів"}),(0,e.jsx)(nr,{$active:be==="daily",children:"Бундючий графік"})]})]})}),(0,e.jsx)(ar,{$active:be==="ai",$bgImg:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",onClick:()=>Rn(),children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%"},children:[(0,e.jsx)("div",{style:{fontSize:"36px",color:"#a855f7"},children:(0,e.jsx)(zo,{})}),(0,e.jsxs)("div",{style:{color:"#fff",display:"flex",flexDirection:"column"},children:[(0,e.jsx)(tr,{$active:be==="ai",children:"ШІ Прогноз"}),(0,e.jsx)(nr,{$active:be==="ai",children:"Gemini AI"})]})]})})]})]})}),qt&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.75)",zIndex:1300,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>Mt(!1),children:(0,e.jsxs)("div",{style:{background:a?"#1a1a2e":"#fff",border:"1px solid rgba(138,43,226,0.5)",borderRadius:"12px",padding:"20px",width:"90%",maxWidth:"480px",maxHeight:"80vh",overflowY:"auto",color:a?"#efefff":"#222",fontSize:"13px",lineHeight:1.6,whiteSpace:"pre-line"},onClick:s=>s.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[(0,e.jsx)("span",{style:{fontWeight:800,color:"#b362ff",fontSize:"13px",letterSpacing:"1px"},children:"Прогноз ШІ — повний текст"}),(0,e.jsx)("button",{onClick:()=>Mt(!1),style:{background:"none",border:"none",color:"#b362ff",fontSize:"18px",cursor:"pointer"},children:"✕"})]}),D]})}),w&&(0,e.jsx)(K0,{isDarkMode:a,currentCardId:n.id,onClose:()=>E(!1)}),qe&&(0,e.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",zIndex:1300,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>rt(!1),children:(0,e.jsxs)("div",{ref:s=>{n.isMain&&j&&j("weatherModal",s)},style:{background:a?"#222":"#fff",borderRadius:"10px",padding:"20px",width:"90%",maxWidth:"350px",color:a?"#fff":"#000"},onClick:s=>s.stopPropagation(),children:[(0,e.jsx)("h3",{style:{margin:"0 0 15px 0"},children:"Налаштування картки"}),(0,e.jsx)("p",{style:{fontSize:"13px",color:a?"#aaa":"#555",marginBottom:"15px"},children:"Картка тепер використовує вкладки: Зараз / Годинна / Місячна / ШІ."}),(0,e.jsx)("button",{onClick:()=>rt(!1),style:{width:"100%",padding:"10px",background:"#ffb36c",color:"#000",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Закрити"})]})}),V&&(0,e.jsx)(op,{onClick:()=>ne(!1),children:(0,e.jsxs)(sp,{onClick:s=>s.stopPropagation(),children:[(0,e.jsxs)("h2",{style:{margin:0,color:"#ffb36c"},children:["Зміна фону: ",n.locationName]}),(0,e.jsxs)(lp,{children:[(0,e.jsxs)(Bo,{$active:yt==="wiki",onClick:()=>Gt("wiki"),children:[(0,e.jsx)(Ci,{children:"Вікіпедія"}),(0,e.jsx)(Ho,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png"})]}),Fa.filter(s=>!s.src.endsWith(".mp4")).map((s,p)=>(0,e.jsxs)(Bo,{$active:yt===s.src,onClick:()=>Gt(s.src),children:[s.author&&(0,e.jsxs)(Ql,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:s.author}),s.source&&(0,e.jsx)("div",{children:s.source})]}),(0,e.jsx)(Ci,{children:s.name}),(0,e.jsx)(Ho,{src:s.src})]},p))]}),(0,e.jsx)("button",{onClick:()=>ne(!1),style:{padding:"8px",background:"#ffb36c",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",marginTop:"10px"},children:"Закрити"})]})})]})},hp=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${t=>t.$isDarkMode?`url(${Ka}) center/cover no-repeat, linear-gradient(135deg, #000000 0%, #000000 100%)`:`url(${Ka}) center/cover no-repeat, linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`};
  color: ${t=>t.$isDarkMode?"#ffffff":"#333333"};
  font-family: var(--font-family, "Inter", sans-serif);
  text-align: center;
  padding: 20px;
  overflow: hidden;
`,mp=i(_t.h1)`
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
`,bp=i(_t.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 750px;
  background: #0000009b;
  margin-bottom: 40px;
  line-height: 1.5;
`,yp=i(Cd)`
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
`,wp=({isDarkMode:t=!0})=>(0,e.jsxs)(hp,{$isDarkMode:t,children:[(0,e.jsx)(mp,{$isDarkMode:t,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:"404"}),(0,e.jsx)(bp,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:"Уведіть правильну назву сторінки! Треба було Доміно поставити на фото, чи Ніцерона. А хоча воно ніби наказує що ти маєш не залишатися тут довго."}),(0,e.jsx)(_t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,e.jsx)(yp,{to:"/",$isDarkMode:t,children:"Повернутися на головну"})})]}),vp=le`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`,kp=le`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`,jp=le`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`,Sp=le`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`,Cp=i(_t.div)`
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
    url(${Ka}) center / cover no-repeat,
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
    animation: ${vp} 8s linear infinite;
    pointer-events: none;
  }
`,Tp=i(_t.h1)`
  font-weight: 900;
  margin: 6px;
  font-size: 20px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${jp} 6s infinite;
`,Ap=i(_t.div)`
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
`,Ip=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`,Dp=i.p`
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  color: rgba(0, 253, 248, 1);
  letter-spacing: 0.12em;
`,Mp=i.p`
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 1.65;
  margin: 3px;
`,zp=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
`,$p=i.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  box-shadow: 0 0 8px ${({$ok:t})=>t?"#4ade80":"#ffb36c"};
  animation: ${kp} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`,Rp=i.span`
  font-size: 12px;
  color: rgb(255, 255, 255);
`,Lp=i.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${Sp} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,Fp=({isDarkMode:t=!0,endTime:n=null,message:a=null})=>{const[c,l]=(0,r.useState)(null),[d,h]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!n)return;let u=null;if(typeof n.toMillis=="function"?u=n.toMillis():n.seconds?u=n.seconds*1e3:u=new Date(n).getTime(),isNaN(u))return;const g=()=>{const T=u-Date.now();if(T<=0){l(null),h(!0),setTimeout(()=>window.location.reload(),6e4);return}const k=Math.floor(T/36e5),P=Math.floor(T%36e5/6e4),z=Math.floor(T%6e4/1e3),F=[];k>0&&F.push(`${k}год`),F.push(`${String(P).padStart(2,"0")}хв`),F.push(`${String(z).padStart(2,"0")}с`),l(F.join(" "))};g();const x=setInterval(g,1e3);return()=>clearInterval(x)},[n]),(0,e.jsx)($a,{children:(0,e.jsx)(Cp,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},children:(0,e.jsxs)(Ap,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:.55,type:"spring",stiffness:120},children:[(0,e.jsx)(Lp,{children:(0,e.jsx)("img",{src:Ka,alt:""})}),(0,e.jsx)(Tp,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.5},children:d?"Ми завершили оновлення!":"Технічне обслуговування"}),n&&(0,e.jsx)(Ip,{children:(0,e.jsxs)(Dp,{children:[d?"Перезавантаження через":"Залишилось часу",": ",d?"~1 хв":c??"Підраховуємо…"]})}),(0,e.jsxs)(Mp,{children:["Причина робіт: ",a??"Планове оновлення системи."]}),d&&(0,e.jsxs)(zp,{children:[(0,e.jsx)($p,{$ok:!0}),(0,e.jsx)(Rp,{children:"Роботи завершено — перезавантаження…"})]})]})},"maintenance-overlay")})},ed=dc({apiKey:"AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",authDomain:"stuxia-5b535.firebaseapp.com",projectId:"stuxia-5b535",storageBucket:"stuxia-5b535.firebasestorage.app",messagingSenderId:"801101038904",appId:"1:801101038904:web:70d01ab63f631b74acadcd"}),Dn=jc(ed,{experimentalAutoDetectLongPolling:!0}),Uo=hc(ed),Lm=new Dc;function Ep(t){const n=Wn(Dn,"config","global");return ec(n,a=>{if(!a.exists()){t({isMaintenanceMode:!1,endTime:null,message:null});return}const c=a.data();t({isMaintenanceMode:!!c.isMaintenanceMode,endTime:c.maintenanceEndTime??null,message:c.maintenanceMessage??null})},()=>{t({isMaintenanceMode:!1,endTime:null,message:null})})}var Ti="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",Pp="/assets/flame-D00vcfgc.webp",td=JSON.parse(`[{"id":1,"Режисер":"Орландо Корраді","Актори":"Марко Вівіо, Джулиано Санті, Андреа Уорд, George Castiglia, Даніэль Ди Маттео, Олівьеро Дінеллі, Сільвио Ансельмо, Алессіо Уорд, Леонардо Канева, Патриція Салерно ","Графік серій":"Динофроз - датм виходу серій 2сезону: 26 серія  The Last Secret(Остання таємниця) 2 грудня 2015, 25 серія  Over The Skies Of Rocketown(Над небесами Роктауну) 1 грудня 2015, 24 серія From Father To Son(Від батька до сина) 27 листопада 2015, 23 серія  Unexpected Proposal(Несподівана пропозиція) 26 листопада 2015, 22 серія  The Ive Prison 25 листопада 2015, 21 серія Tower Assault(Штурм вежі) 24 листопада 2015, 20 серія  Mission Incredible(Неймовірна місія) 16 жовтня 2015,  19 серія A New Alliance(Новий союз) 15 жовтня 2015, 18 серія  Face to Face(Віч-на-віч) 14 жовтня 2015, 17 серія  In the Lair of the Enemy(У лігві ворога) 13 жовтня 2015, 16 серія  Acquisition: Triceratops 9 жовтня 2015,  15 серія  The Shadow Of Betrayal(Тінь зради) 8 жовтня 2015,  14 серія  The Day of the Two Stars(День 2 зірок) 7 жовтня 2015, 13 серія  The Power of the DinoWatch 6 жовтня 2015, 12 серія  The Fury of Drakemon 2 жовтня 2015, 11 серія  Codename: Dominion Project 1 жовтня 2015, 10 серія  The Girl With The Jade Eyes(Дівина з Нефритовими очима) 30 вересня 2015,  9 серія  Race Against Time(Гонка проти часу) 29 вересня 2015, 8 серія  The Dragon Slayers 25 вересня 2015, 7 серія  Mystery At The Center Of The Earth(Таємниця в центрі Землі) 24 вересня 2015,  6 серія  The Dragon From The Swamp(Дракон з болота) 23 вересня 2015, 5 серія  The Legend of Firerock 22 вересня 2015, 4 серія  A New Dinofroz 18 вересня 2015, 3 серія  An Island in the Sky(Літаючий острів) 17 вересня 2015, 2 серія The Iron Dinosaur 16 вересня 2015,  1 серія  Return To The Past World(Повернення в доісторичний світ) 15 вересня 2015, 1 сезон 26 серія Все тільки починається(The End of the Beginning) 19 квітня 2014, 1 сезон 25 серія Віч-на-віч(Bare faced) 18 квітня 2014, 1 сезон 24 серія Останнє затемнення(The Last Eclipse) 14 грудня 2012, 1 сезон 23 серія Відчайдушна втеча(Desperate Escape) 13 грудня 2012, 1 сезон 22 серія Mission 'White Dragon' 12 грудня 2012, 1 сезон 21 серія (Тінь ворога)The Shadow of the Enemy 11 грудня 2012, 1 сезон 20 серія Повернення з темряви(Return from the Dark) 17 листопада 2012, 1 сезон 19 серія Зберігач озера(The Guardian of the Lake) 17 листопада 2012, 1 сезон 18 серія The Secret of James 16 листопада 2012, 1 сезон 17 серія Пригоди для шістьох(Adventure for Six) 16 листопада 2012, 1 сезон 16 серія Послання зминулого (Message From the Past) 15 листопада 2012, 1 сезон 15 серія Подвійний обман Double Deception 30 вересня 2012, 1 сезон 14 серія Повстання драконів(The Revolt of the Dragons) 29 вересня 2012,1 сезон 13 серія Hunt for General Treek 28 вересня 2012, 1 сезон 12 серія Місячний острів(The Island of the Moon) 27 вересня 2012, 1 сезон 11 серія Смертельна небезпека(Mortal Danger) 26 вересня 2012, 1 сезон 10 серія Несподівана допомога(An Unexpected Help) 22 вересня 2012, 1 сезон 9 серія Призначення(The Predestined) 21 вересня 2012, 1 сезон 8 серія Занедбаний храм(The Temple of Doom) 20 вересня 2012, 1 сезон 7 серія Жорстокий Ніцерон(Neceron the Mercyless) 19 вересня 2012, 1 сезон 6 серія Землі подрібнених лоз(In the Land of Crushing Liana) 18 вересня 2012, 1 сезон 5 серія Раптовий удар(Surprise Attack) 14 вересня 2012, 1 сезон 4 серія (Новий ворог)A New Enemy 13 вересня 2012, 1 сезон 3 серія The Rockfroz 12 вересня 2012, 1 сезон 2 серія Шаман(The Shaman) 11 вересня 2012, 1 сезон 1 серія Початок(The Origins) 11 вересня 2012 ","Сюжет":"","image":"dinofrozone","audio":"dinofrozAudio","author":"Mondo TV","video":"dinofrozVideo","text":"Динофроз","duration":120,"previewStart":15,"previewDuration":15,"images":["dinofrozone"],"lyrics":[{"time":8,"text":"Динофроз...Динофроз!","voice":"voice1","text_bbkids":"Динофроз...Динофроз!"},{"time":15,"text":"Світять яскраві зірки. Пригод крізь віки.","text_bbkids":"Четверо друзів знайшли дивну гру. В доісторичну пішли давнину."},{"time":21,"text":"В доісторичний світ потрапили ми.","voice":"voice1","text_bbkids":"Там динозаврами стали вони"},{"time":26,"text":"Тут динозаври б'ються в парі з людьми.","text_bbkids":"Тут динозаври б'ються в парі з людьми."},{"time":33,"text":"В битвах з ворогом твердий гартується дух!","text_bbkids":"В цьому карти їм допомогли. "},{"time":38,"text":"Страху немає, упевненим робиться рух!","text_bbkids":"У давнині небезпечні дракони. Та з ними впорались наші герої."},{"time":44,"text":"Бачимемо ціль і до бою рушаєм! Ми батьківшину свою захищаєм!","text_bbkids":"До бою готові всюди і завжди. І утілюють мрiї свої в боротьбі."},{"time":50,"text":"Динофроз! Воїни світла і воїни миру!","text_bbkids":"Динофроз! Дружні, завзяті, зброя в руках. "},{"time":56,"text":"Динофроз! Лиш в боротьбі здобувам довіру!","text_bbkids":"Динофроз! Вони Ніцерону не по зубах."},{"time":62,"text":"Динофроз! Готуємось до бою завзято!","text_bbkids":"Динофроз! Дружні, завзяті, зброя в руках. Вони Ніцерону не по зубах."},{"time":66,"text":"Будь сміливим друже! Переможе дужий!","text_bbkids":"Друзі б'ються завзято. Дракони тікають!"},{"time":72,"text":"Чистимо зброю! Готові до бою!","text_bbkids":"Четверо друзів майбутнє спасають!"},{"time":75,"text":"В битві за волю! Пірна з головою!","text_bbkids":"До бою завжди готові вони."},{"time":77,"text":"Пекло за дух. І мороз усе це динофроз!","text_bbkids":"Ховайтеся, вороги!"}]},{"id":4,"image":"monody","audio":"monodyAudio","author":"TheFatRat","lyrics":[{"time":168,"text":"Літо в пагорбах."},{"time":172,"text":"Ті туманні дні у мене в спогадах."},{"time":175,"text":"Ми все ще бігали."},{"time":179,"text":"Красою світу насолоджувались, як могли."},{"time":182,"text":"Бачачи зміни сезону."},{"time":182,"text":"Нашу дорогу тянуло пригоду."},{"time":185,"text":"Гора на шляху."},{"time":189,"text":"До моря, не наводила на нас страху."},{"time":195,"text":"Ось мы стоїмо з розпростертими обіймами."},{"time":199,"text":"Милуюся нашими краями."},{"time":202,"text":"Завжди сильні у світі, який ми створили."},{"time":209,"text":"Я чую тебе у вітрі. Попри приливи."},{"time":212,"text":"Бачу твої тіні на деревах."},{"time":216,"text":"Не змінюєшся ти у спогадах."},{"time":226,"text":""}],"text":"Monody"},{"id":7,"author":"SayGames - MyLittleUniverse(Estoty)","text":"Dragonora","audio":"dragonoraAudio","image":"dinofroztwo"},{"id":16,"image":"theorytwo","audio":"theorytwoAudio","author":"DJ-Nate","duration":140,"text":"Theory of everything II","images":["theorytwo"]},{"id":18,"image":"theory","audio":"theoryAudio","text":"Theory of everything","author":"DJ-Nate","duration":140,"images":["theory"]},{"id":19,"image":"unity","audio":"unityAudio","text":"Unity","author":"TheFatRat","duration":180,"images":["unity"]},{"id":20,"image":"hunger","audio":"hungerAudio","author":"TheFatRat","text":"Hunger","duration":180,"images":["hunger"],"Не співпадіння по субтитрам":"При додаванні, вони були змінені для рифми. ","lyrics":[{"time":11,"text":"Донечко, не лишай страх на згадку, я подбаю про те, щоб ти була у порядку"},{"time":16,"text":"Донечко, не хвилюйся за мене, все погане мине"},{"time":22,"text":"Віддам все, тобі моє"},{"time":27,"text":"Сподіваюся, ти не помітиш страх голоду, в моїх очах"},{"time":34,"text":"Все, про що ми мріяли"},{"time":39,"text":"Брехню за хмарами нам повіяли"},{"time":44,"text":"Зі страхами, з дощами, сльозами та болями"},{"time":49,"text":"Донечко, не бійся за неньку, я подбаю про твою безпеконьку"},{"time":52,"text":"Я продовжуватиму боротьбу, я продовжуватиму боротьбу"},{"time":66,"text":"Ховайся тут на ходу, поки я йду"},{"time":69,"text":"Ніхто не зашкодить, тобі хочу пообіцять"},{"time":72,"text":"Все буде добре, тут залишайся і мовчи, завдання тобі таке"},{"time":75,"text":"Не йди за мною, я повернуся завтра з тобою"},{"time":78,"text":"Віддам все, тобі моє"},{"time":82,"text":"Сподіваюся, ти не помітиш страх голоду, в моїх очах"},{"time":89,"text":"Все, про що ми мріяли"},{"time":94,"text":"Брехню за хмарами нам повіяли"},{"time":100,"text":"Зі страхами, зі дощами, сльозами та болями"},{"time":104,"text":"Донечко, не бійся за неньку, я подбаю про твою безпеконьку"},{"time":110,"text":"Я продовжуватиму боротьбу, я продовжуватиму боротьбу"},{"time":133,"text":"Не плач, моя айстра. Я повернуся завтра, коли прокинешся"},{"time":145,"text":"Не плач. Я буду сьогодні ввечері та триматиму монстрів подалі"},{"time":155,"text":""},{"time":165,"text":"(Come closer, пошепки) Підійди ближче, підійди ближче."},{"time":175,"text":"Я продовжуватиму боротьбу, бо я їх здолаю"}]}]`),Np="/assets/humor-DlTxVxCE.mp4",Op="/assets/unity-F-cBWwIf.webp",Vp="/assets/monody-DBysFOWl.webp",Bp="/assets/asiumone-DdULW5D8.webp",Hp="/assets/hunger-Bja8eIKz.webp",Kp="/assets/dinofroz-Bw1EE6sM.mp3",Up="/assets/thefatrat-monody-Bn_jMkG9.mp3",Wp="/assets/unity-Dfk4ENTo.mp3",_p="/assets/thefatrat-hunger-CL1g_1gU.mp3",qp="/assets/dragon-CPH8-885.mp3",Jp="/assets/harmonic-japan-Dd6wyKZa.mp3",Gp="/assets/electrodynamix-BOk9PXVN.mp3",Yp="/assets/clubstep-C7imHHYw.mp3",Zp="/assets/theoty-of-everything-ll-C8ndIrWQ.mp3",Xp="/assets/theory-of-everyting-DW0SvZ3g.mp3",Qp="/assets/deadlocked-VXA-1jpn.mp3",Ra={faded:Yl,dinofrozVideo:Si,harmony:nl,horse:al,theorytwo:rl,fingerdash:il,humorVideo:Np,electrodynamix:ol,deserttwo:sl,desertthree:ll,desertfour:dl,desertone:cl,unity:Op,mecha:pl,monody:Vp,clubstep:ul,turkeys:Sr,chess:fl,turkeytwo:gl,turkeythree:xl,turkeyfour:hl,turkeyfive:ml,turkeysix:bl,turkeysone:yl,turkeyseven:wl,asiumone:Bp,asiumtwo:vl,asiumthree:kl,asiumfour:jl,asiumfive:Sl,asiumsix:Cl,asiumten:Tl,asiumeleven:Al,asiumseven:Il,swamptwo:Dl,swampthree:Ml,swampsix:zl,swampseven:$l,swampeight:Rl,swampnine:Ll,theory:Fl,deadlocked:El,horrortwo:Pl,horrorthree:Nl,horrorfour:Ol,horror:Ri,horrorsix:Vl,horroreight:Bl,dinofrozone:Li,dinofrozthree:Hl,dinofrozfour:Kl,dinofrozfive:Ul,dinofrozsix:Wl,dinofrozseven:_l,dinofrozeight:ql,dinofroztwo:Fi,dinofroznine:Jl,hunger:Hp,mia:Zl,dinofrozAudio:Kp,monodyAudio:Up,unityAudio:Wp,hungerAudio:_p,dragonoraAudio:qp,harmonyAudio:Jp,electrodynamixAudio:Gp,clubstepAudio:Yp,theorytwoAudio:Zp,theoryAudio:Xp,deadlockedAudio:Qp},Fm=td.map(t=>({...t,image:Ra[t.image]||t.image,audio:Ra[t.audio]||t.audio,video:Ra[t.video]||t.video,images:Array.isArray(t.images)?t.images.map(n=>Ra[n]||n):t.images,filters:Array.isArray(t.filters)?t.filters.map(n=>({...n,imageUrl:Ra[n.imageUrl]||n.imageUrl})):t.filters})),Ai=[{id:"none",label:"Вимкнено"},{id:"grayscale",label:"Дальтонізм"},{id:"sepia",label:"Сепія"},{id:"invert",label:"Негатив"},{id:"matrix",label:"Пікселізація"},{id:"uv",label:"УФ-Лампа"},{id:"contrast",label:"Контраст"},{id:"saturate",label:"Насиченість"},{id:"blur",label:"Розмиття"},{id:"hue",label:"Веселка"},{id:"chaos",label:"Хаос"},{id:"ultrachaos",label:"Ультрахаос"}],nd=[{id:"cinema",label:"🎬 Кіно",config:{darkIntensity:15,filterType:"sepia",filterIntensity:20}},{id:"night",label:"🌙 Ніч",config:{darkIntensity:70,filterType:"none",filterIntensity:50}},{id:"retro",label:"📻 Ретро",config:{darkIntensity:5,filterType:"grayscale",filterIntensity:80}},{id:"acid",label:"🌈 Кислота",config:{darkIntensity:0,filterType:"hue",filterIntensity:60}}],Nr={darkIntensity:0,filterType:"none",filterIntensity:50};if(typeof document<"u"){const t=document.createElement("style");if(t.id="visual-filters-animations",t.innerHTML=`
    @keyframes ultrachaos-anim {
      0% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(0deg); }
      50% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-max)) saturate(var(--v-saturate-max)) hue-rotate(180deg) blur(var(--v-blur-max)); }
      100% { filter: brightness(var(--v-bright)) contrast(var(--v-contrast-min)) saturate(var(--v-saturate-min)) hue-rotate(360deg); }
    }
    @keyframes rainbow-anim {
      0% { filter: brightness(var(--v-bright)) hue-rotate(0deg); }
      100% { filter: brightness(var(--v-bright)) hue-rotate(360deg); }
    }
  `,document.getElementById(t.id)||document.head.appendChild(t),!document.getElementById("visual-filters-pixelate")){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.setAttribute("width","0"),n.setAttribute("height","0"),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.pointerEvents="none";const a=document.createElementNS("http://www.w3.org/2000/svg","filter");a.setAttribute("id","visual-filters-pixelate"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("width","100%"),a.setAttribute("height","100%");const c=document.createElementNS("http://www.w3.org/2000/svg","feFlood");c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("height","1"),c.setAttribute("width","1");const l=document.createElementNS("http://www.w3.org/2000/svg","feComposite");l.setAttribute("width","2"),l.setAttribute("height","2");const d=document.createElementNS("http://www.w3.org/2000/svg","feTile");d.setAttribute("result","tiles");const h=document.createElementNS("http://www.w3.org/2000/svg","feComposite");h.setAttribute("in","SourceGraphic"),h.setAttribute("in2","tiles"),h.setAttribute("operator","in"),a.appendChild(c),a.appendChild(l),a.appendChild(d),a.appendChild(h),n.appendChild(a),document.body.appendChild(n)}}var Wo=t=>{if(!t)return;document.documentElement.style.transition="filter 0.4s ease-in-out";const n=100-(t.darkIntensity||0)*.6;let a=`brightness(${n}%)`;const{filterType:c,filterIntensity:l=50}=t;if(c==="ultrachaos"){const d=100+l*.6,h=100+l*2,u=100+l*1.6,g=100+l*5,x=l/50;document.documentElement.style.setProperty("--v-bright",`${n}%`),document.documentElement.style.setProperty("--v-contrast-min",`${d}%`),document.documentElement.style.setProperty("--v-contrast-max",`${h}%`),document.documentElement.style.setProperty("--v-saturate-min",`${u}%`),document.documentElement.style.setProperty("--v-saturate-max",`${g}%`),document.documentElement.style.setProperty("--v-blur-max",`${x}px`),document.documentElement.style.animation="ultrachaos-anim 4s infinite linear";return}if(c==="hue"){document.documentElement.style.setProperty("--v-bright",`${n}%`);const d=l>0?200/l:0;d>0?document.documentElement.style.animation=`rainbow-anim ${d}s infinite linear`:(document.documentElement.style.animation="none",document.documentElement.style.filter=`brightness(${n}%) hue-rotate(0deg)`);return}if(document.documentElement.style.animation="none",c==="grayscale")a+=` grayscale(${l}%)`;else if(c==="sepia")a+=` sepia(${l}%)`;else if(c==="invert"){const d=l-50;if(d>0)a+=` invert(${d*2}%)`;else if(d<0){const h=1+Math.abs(d)/50;a+=` contrast(${h*100}%) saturate(${h*100}%)`}}else if(c==="matrix"){const d=Math.max(2,Math.round(10-l/12)),h=document.getElementById("visual-filters-pixelate");if(h){const u=h.querySelector("filter");if(u){const g=u.querySelector("feComposite");g&&(g.setAttribute("width",String(d)),g.setAttribute("height",String(d)))}}a+=` brightness(${n}%) url(#visual-filters-pixelate) contrast(${110+l*.7}%) saturate(${100+l*.8}%)`}else c==="uv"?a+=` hue-rotate(280deg) saturate(${100+l}%)`:c==="contrast"?a+=` contrast(${l*2}%)`:c==="saturate"?a+=` saturate(${l*2}%)`:c==="blur"?a+=` blur(${l/10}px)`:c==="hue"&&(a+=` hue-rotate(${l*3.6}deg)`);document.documentElement.style.filter=a},eu=t=>{const[n,a]=(0,r.useState)(Nr),[c,l]=(0,r.useState)([]),d=t?.account?`visualConfig_${t.account}`:"visualConfig_guest",h=t?.account?`customPresets_${t.account}`:"customPresets_guest";(0,r.useEffect)(()=>{f.default.getItem(d).then(z=>{z&&a(z)}),f.default.getItem(h).then(z=>{l(z||[])})},[d,h]),(0,r.useEffect)(()=>{let z;if(n.filterType==="chaos"){const F=()=>{const I=Ai.filter(v=>!["none","chaos","ultrachaos"].includes(v.id)),y=I[Math.floor(Math.random()*I.length)],m=Math.floor(Math.random()*80)+20;Wo({...n,filterType:y.id,filterIntensity:m})};F(),z=setInterval(F,Math.floor(Math.random()*2e3)+1e3)}else Wo(n);return()=>clearInterval(z)},[n]);const u=(0,r.useCallback)(z=>{a(F=>{const I=typeof z=="function"?z(F):z;return f.default.setItem(d,I),I})},[d]),g=(0,r.useCallback)(()=>{u(Nr),f.default.setItem(d,Nr)},[d,u]),x=(0,r.useCallback)(z=>{if(!z.trim())return;const F={id:`custom_${Date.now()}`,label:`✨ ${z}`,config:{...n}};l(I=>{const y=[...I,F];return f.default.setItem(h,y),y})},[h,n]),T=(0,r.useCallback)(z=>{l(F=>{const I=F.filter(y=>y.id!==z);return f.default.setItem(h,I),I})},[h]),k=(0,r.useCallback)((z,F)=>{F.trim()&&l(I=>{const y=I.map(m=>m.id===z?{...m,label:`✨ ${F}`}:m);return f.default.setItem(h,y),y})},[h]),P=(0,r.useCallback)(z=>{l(z),f.default.setItem(h,z)},[h]);return{visualConfig:n,setVisualConfig:u,resetFilters:g,FILTERS:Ai,PRESETS:nd,customPresets:c,saveCustomPreset:x,deleteCustomPreset:T,updateCustomPresetName:k,reorderCustomPresets:P}},ad=(0,r.createContext)(),Ei=()=>(0,r.useContext)(ad),tu=t=>{if(!t||!(t instanceof Element))return"";const n=[];let a=t;for(;a&&a.nodeType===Node.ELEMENT_NODE&&a!==document.body&&a!==document.documentElement;){let c=a.nodeName.toLowerCase();if(a.id){c+="#"+a.id,n.unshift(c);break}else{let l=a.previousSibling,d=1;for(;l;)l.nodeType===Node.ELEMENT_NODE&&l.nodeName===a.nodeName&&d++,l=l.previousSibling;c+=`:nth-of-type(${d})`}n.unshift(c),a=a.parentNode}return n.join(" > ")},nu=({children:t,isDarkMode:n})=>{const[a,c]=(0,r.useState)(!1),[l,d]=(0,r.useState)(!1),[h,u]=(0,r.useState)({}),[g,x]=(0,r.useState)([]),[T,k]=(0,r.useState)(!1);(0,r.useEffect)(()=>{n?document.body.classList.add("decorator-dark-mode"):document.body.classList.remove("decorator-dark-mode")},[n]),(0,r.useEffect)(()=>{(async()=>{try{const m=await f.default.getItem("decorator_persistent");if(m!==null&&(d(m),m)){let v=await f.default.getItem("decorator_overrides");const j=await f.default.getItem("decorator_changelog");if(v){const C={};Object.keys(v).forEach(B=>{C[B]={};const H=v[B];H.light_default||H.light_hover||H.dark_default||H.dark_hover?C[B]=H:C[B].light_default={...H}}),u(C)}j&&x(j)}}catch(m){console.error("Error hydrating decorator state",m)}finally{k(!0)}})()},[]),(0,r.useEffect)(()=>{T&&(l?(f.default.setItem("decorator_overrides",h),f.default.setItem("decorator_changelog",g)):(f.default.removeItem("decorator_overrides"),f.default.removeItem("decorator_changelog")),f.default.setItem("decorator_persistent",l))},[h,g,l,T]),(0,r.useEffect)(()=>{let y=document.getElementById("decorator-styles");y||(y=document.createElement("style"),y.id="decorator-styles",document.head.appendChild(y));let m="";Object.entries(h).forEach(([v,j])=>{const C=v.includes(" > ")||v.includes("#")||v.includes(":")?v:`[data-decorator-id="${v}"]`;j.light_default&&Object.keys(j.light_default).length>0&&(m+=`body:not(.decorator-dark-mode) ${C} { `,Object.entries(j.light_default).forEach(([B,H])=>{m+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),m+=`}
`),j.light_hover&&Object.keys(j.light_hover).length>0&&(m+=`body:not(.decorator-dark-mode) ${C}:hover { `,Object.entries(j.light_hover).forEach(([B,H])=>{m+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),m+=`}
`),j.dark_default&&Object.keys(j.dark_default).length>0&&(m+=`body.decorator-dark-mode ${C} { `,Object.entries(j.dark_default).forEach(([B,H])=>{m+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),m+=`}
`),j.dark_hover&&Object.keys(j.dark_hover).length>0&&(m+=`body.decorator-dark-mode ${C}:hover { `,Object.entries(j.dark_hover).forEach(([B,H])=>{m+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),m+=`}
`)}),y.innerHTML=m},[h]);const P=(0,r.useCallback)((y,m,v,j,C,B="light_default")=>{u(H=>{const J=H[y]||{},Q=J[B]||{};return{...H,[y]:{...J,[B]:{...Q,[v]:C}}}}),x(H=>[...H,{id:Date.now()+"-"+Math.random().toString(36).slice(2,7),elementId:y,tagName:m,property:v,originalValue:j,newValue:C,mode:B,timestamp:new Date().toLocaleTimeString("uk-UA")}])},[]),z=(0,r.useCallback)(y=>{x(m=>{const v=m.find(j=>j.id===y);return v?(u(j=>{const C={...j[v.elementId]||{}},B=v.mode||"light_default",H={...C[B]||{}},J=m.filter(Q=>Q.elementId===v.elementId&&Q.property===v.property&&(Q.mode||"light_default")===B&&Q.id!==y);if(J.length>0?H[v.property]=J[J.length-1].newValue:delete H[v.property],C[B]=H,Object.keys(H).length===0&&delete C[B],Object.keys(C).length===0){const Q={...j};return delete Q[v.elementId],Q}return{...j,[v.elementId]:C}}),m.filter(j=>j.id!==y)):m})},[]),F=(0,r.useCallback)(()=>{u({}),x([]),document.querySelectorAll("[data-decorator-id]").forEach(y=>{y.removeAttribute("data-decorator-id")})},[]),I=(0,r.useCallback)(y=>h[y]||{},[h]);return(0,e.jsx)(ad.Provider,{value:{isDecoratorMode:a,setIsDecoratorMode:c,styleOverrides:h,changeLog:g,applyStyle:P,undoChange:z,resetAll:F,getOverridesForElement:I,isPersistent:l,setIsPersistent:d,isDarkMode:n},children:t})},or=[{key:"hero",label:"Головна",path:"hero"},{key:"weather",label:"Погода",path:"weather"},{key:"map",label:"Кліматична мапа",path:"map"},{key:"aihelp",label:"Допомога ШІ",path:"aihelp"},{key:"fanart",label:"Друкарня",path:"fanart"}],au=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cec":"#fdff98ee"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`,ru=le`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`,iu=le`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`,ou=le`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`,su=le`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,lu=i.div`
  display: flex;
  margin-left: -5px;
  gap: 3px;
`,du=i.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  background: ${t=>t.$isUltra?"rgba(113, 0, 151, 0.05)":"rgba(255, 179, 108, 0.05)"};
  border: 1.5px solid ${t=>t.$isUltra?"#710097":"#ffb36c"};
  padding: 5px 4px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.5s ease;
  text-align: left;

  &:hover {
    background: ${t=>t.$isUltra?"rgba(113, 0, 151, 0.15)":"rgba(255, 179, 108, 0.15)"};
    transform: translateX(5px);
    box-shadow: 0 4px 15px
      ${t=>t.$isUltra?"rgba(113, 0, 151, 0.2)":"rgba(255, 179, 108, 0.2)"};
  }
`,cu=i.div`
  width: 32px;
  height: 32px;
  background: #1a1a1a;
  border: 1px solid ${t=>t.$isUltra?"#710097":"#ffb36c"};
  border-radius: 8px;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,pu=i.div`
  display: grid;
  align-items: center;
  flex-grow: 1;
`,sr=i.span`
  grid-area: 1/1;
  font-weight: 800;
  transition: opacity 0.5s ease-in-out;
  opacity: ${t=>t.$show?1:0};
  font-size: ${t=>t.$isSymbol?"20px":"16px"};

  ${t=>t.$variant==="rainbow"&&et`
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7f00,
        #ffff00,
        #00ff00,
        #0000ff,
        #8b00ff
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}

  ${t=>t.$variant==="ultra"&&et`
      background: linear-gradient(
        270deg,
        #ff7eb3,
        #ff758c,
        #7afcff,
        #feffb7,
        #58e2c2
      );
      background-size: 400% 400%;
      animation: ${su} 3s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,_o=i.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px;
  margin-bottom: 4px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  }
      span {
      font-size: 23px;
      }
`,Or=i.div`
  position: relative;
  width: 36px;
  height: 20px;
  background: ${t=>t.$active?"#ff005d":"#ccc"};
  border-radius: 20px;
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${t=>t.$active?"18px":"2px"};
    transition: 0.3s;
  }
`,uu=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: ${t=>t.$isRendered?"block":"none"};
  opacity: ${t=>t.$isOpen?1:0};
  transition: opacity 0.4s ease;
`,fu=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  background: ${t=>t.$isDarkMode?"#1a1a1a83":"#ffffff8a"};
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  z-index: 1001;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  display: ${t=>t.$isRendered?"block":"none"};
  animation: ${t=>t.$isOpen?ru:iu} 0.4s
    cubic-bezier(0.16, 1, 0.3, 1) forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${t=>t.$isDarkMode?"rgba(255, 179, 108, 0.5)":"rgba(255, 0, 93, 0.5)"};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  scrollbar-width: thin;
  scrollbar-color: ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"}
    transparent;
`,gu=i.button`
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 10px;
    @media (min-width: 768px) {
      top: 5px;
  right: 10px;
  }
`,xu=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,hu=i.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 50;
    background: ${t=>t.$isDarkMode?"#111":"#fff"};
    border-bottom: 2px solid ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"};
    margin-bottom: 3px;
  }
`,qo=i.button`
  flex: 1;
  padding: 2px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  background: ${t=>t.$active?t.$isDarkMode?"#ffb36c":"#ff005d":"transparent"};
  color: ${t=>t.$active?t.$isDarkMode?"#1a1a1a":"#fff":t.$isDarkMode?"#ffb36c":"#ff005d"};
  border-bottom: 3px solid ${t=>t.$active?t.$isDarkMode?"#ffb36c":"#ff005d":"transparent"};
`,Jo=i.div`
  @media (max-width: 767px) {
    display: ${t=>t.$active?"block":"none"};
  }
  @media (min-width: 768px) {
    display: block;
  }
`,Go=i.h3`
  font-size: 18px;
  margin-bottom: 5px;
  border-bottom: 2px solid #ff005d;
  padding-bottom: 5px;
  display: none;
    @media (min-width: 768px) {
    display: inline-block;
  }
`,mu=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,za=i.button`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 5px 6px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.2s ease;
  text-align: left;

  &:hover {
    background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  }

  span.icon {
    font-size: 20px;
  }
`,bu=i.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 8px 5px;
  margin-bottom: 8px;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
`,yu=i.button`
  background: transparent;
  border: none;
  text-align: left;
  color: ${t=>t.$isDarkMode?"#ffb36c":"#ff005d"};
  font-size: 16px;
  font-weight: 600;
  flex-grow: 1;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`,Vr=i.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`,lr=i.button`
  background: ${t=>t.$isDarkMode?"#333":"#eee"};
  border: 1px solid ${t=>t.$isDarkMode?"#444":"#ccc"};
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  border-radius: 6px;
  padding: 0px 10px;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  opacity: ${t=>t.disabled?.3:1};
  font-size: 14px;
  font-weight: bold;

  &:hover:not(:disabled) {
    background: #ff005d;
    color: white;
    border-color: #ff005d;
  }
`,wu=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 3px;
  margin-bottom: 5px;
`,dr=i.button`
  background: ${t=>t.$active?"#ffb36c":"transparent"};
  color: ${t=>t.$active?"#3e2723":t.$isDarkMode?"#ffb36c":"#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`,vu=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 5px;
`,ku=i.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`,ju=i.input`
  flex: 1;
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border: 1px solid #ffb36c;
  border-radius: 8px;
  padding: 6px 10px;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: #888;
  }
`,Su=i.button`
  background: #ffb36c;
  color: #3e2723;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffa04d;
  }
`,Yo=i.button`
  background: ${t=>t.$isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border: 1px solid #ffb36c;
  color: ${t=>t.$isDarkMode?"#ffb36c":"#333"};
  border-radius: 8px;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ffb36c;
    color: #3e2723;
  }
`,Cu=i.div`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
  button:first-child {
    flex: 1;
  }
  animation: ${ou} 0.3s ease-out forwards;
`,Tu=i.button`
  background: transparent;
  border: none;
  color: #ffb36c;
  cursor: pointer;
  font-size: 14px;
  padding: 0 5px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,Au=i.button`
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;
  &:hover {
    color: #ff1a1a;
    transform: scale(1.1);
  }
`,Iu=i.div`
  cursor: grab;
  color: #ffb36c;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
`,Du=i.button`
  width: 100%;
  background: #8a3939;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ff1a1a;
  }
`,sa=({content:t,children:n,placement:a="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),{refs:u,floatingStyles:g,context:x}=ma({open:l,onOpenChange:d,placement:a,strategy:"fixed",transform:!1,whileElementsMounted:ua,middleware:[ca(8),pa(),va({padding:5}),ka({element:h})]}),{isMounted:T,styles:k}=ga(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=fa(x,{move:!1}),z=ha(x),F=ba(x),I=ja(x,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:m}=wa([P,z,F,I]);if(!t)return n;const v=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:u.setReference,...y(),style:{display:"inline-flex"},children:n}),T&&(0,e.jsx)(ya,{children:(0,e.jsxs)(au,{ref:u.setFloating,$isDarkMode:c,style:{...g,...k},...m(),children:[t,(0,e.jsx)(xa,{ref:h,context:x,fill:v,stroke:"#00acb9",strokeWidth:1})]})})]})},Mu=({isOpen:t,onClose:n,isDarkMode:a,siteSections:c,resetSiteSections:l,moveSiteSection:d,sectionThemes:h,hiddenSections:u,onToggleSectionVisibility:g,onToggleSectionTheme:x,onResetSectionThemes:T,onToggleTheme:k,onOpenShop:P,onOpenVip:z,onOpenSettings:F,onOpenHelp:I,onOpenOtherOptions:y,showUltra:m,onOpenInfo:v,onLogout:j,isRoutingMode:C,setIsRoutingMode:B,currentPath:H,visualConfig:J,setVisualConfig:Q,onResetFilters:he,customPresets:te=[],onSavePreset:D,onDeletePreset:N,onUpdatePresetName:re,onReorderPresets:xe,loadingStrategy:ce,onSetLoadingStrategy:ee,isStickyBgMode:X,onToggleStickyBg:me})=>{const{isDecoratorMode:oe,setIsDecoratorMode:Te,changeLog:Se,undoChange:ut,resetAll:It,isPersistent:Dt,setIsPersistent:ot}=Ei(),[st,Oe]=(0,r.useState)(!1),[tt,mt]=(0,r.useState)(""),[Ve,jt]=(0,r.useState)(null),[Lt,ft]=(0,r.useState)(null),[nt,Ze]=(0,r.useState)("nav"),Ue=Xs(),gt=V=>{if(typeof window>"u")return"";const ne=V?`/${V}`.replace(/\/+/g,"/"):"/";return`${`${window.location.origin}${window.location.pathname}`.replace(/\/$/,"")}#${ne}`},Ie=async(V,ne)=>{const pe=gt(ne||V);if(pe)try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(pe);else{const Ae=document.createElement("input");Ae.value=pe,document.body.appendChild(Ae),Ae.select(),document.execCommand("copy"),document.body.removeChild(Ae)}ft(V),window.setTimeout(()=>ft(null),1500)}catch(Ae){console.error("Не вдалося скопіювати посилання секції",Ae)}},De=(V,ne)=>{jt(ne),V.dataTransfer.effectAllowed="move",V.currentTarget.style.opacity="0.5"},at=V=>{V.currentTarget.style.opacity="1",jt(null)},St=(V,ne)=>{if(V.preventDefault(),Ve===null||Ve===ne)return;const pe=[...te],[Ae]=pe.splice(Ve,1);pe.splice(ne,0,Ae),xe(pe)},bt=V=>{Q(ne=>({...ne,filterType:V}))},Ft=V=>{Q(ne=>({...ne,darkIntensity:V}))},yt=V=>{Q(ne=>({...ne,filterIntensity:V}))};(0,r.useEffect)(()=>{if(t)Oe(!0);else{const V=setTimeout(()=>Oe(!1),400);return()=>clearTimeout(V)}},[t]);const Ot=(V,ne)=>{if(n(),C)Ue("/"+ne);else{const pe=document.getElementById(V);pe?pe.scrollIntoView({behavior:"smooth",block:"start"}):V==="hero"&&window.scrollTo({top:0,behavior:"smooth"})}};return st?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(uu,{$isOpen:t,$isRendered:st,onClick:n,"data-decorator-ignore":"true"}),(0,e.jsxs)(fu,{$isOpen:t,$isRendered:st,$isDarkMode:a,"data-decorator-ignore":"true",children:[(0,e.jsx)(gu,{onClick:n,$isDarkMode:a,children:"✕"}),(0,e.jsxs)(hu,{$isDarkMode:a,children:[(0,e.jsx)(qo,{$active:nt==="nav",$isDarkMode:a,onClick:()=>Ze("nav"),children:"Навігація та порядок"}),(0,e.jsx)(qo,{$active:nt==="controls",$isDarkMode:a,onClick:()=>Ze("controls"),children:"Керування"})]}),(0,e.jsxs)(xu,{children:[(0,e.jsxs)(Jo,{$active:nt==="nav",children:[(0,e.jsx)(Go,{children:"Навігація та порядок"}),c&&c.map((V,ne)=>{const pe=gt(V.path||V.key);return(0,e.jsxs)(bu,{$isDarkMode:a,children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,e.jsx)(yu,{$isDarkMode:a,onClick:()=>Ot(V.key,V.path),children:V.label}),(0,e.jsx)(Vr,{children:(0,e.jsx)(sa,{content:u?.includes(V.key)?"Показати секцію":"Приховати секцію",isDarkMode:a,children:(0,e.jsx)(lr,{style:{padding:"4px 10px"},$isDarkMode:a,onClick:()=>g?.(V.key),"aria-label":u?.includes(V.key)?"Показати секцію":"Приховати секцію",disabled:!u?.includes(V.key)&&c.length-(u?.length||0)<=2,children:u?.includes(V.key)?(0,e.jsx)(Kd,{}):(0,e.jsx)(Hd,{})})})}),(0,e.jsx)(Vr,{children:(0,e.jsx)(sa,{content:"Змінити тему секції",isDarkMode:a,children:(0,e.jsx)(lr,{style:{padding:"4px 10px"},$isDarkMode:a,onClick:()=>x?.(V.key),"aria-label":"Змінити тему секції",children:h?.[V.key]??a?(0,e.jsx)(Mn,{}):(0,e.jsx)(Sn,{})})})}),V.key!=="hero"&&(0,e.jsxs)(Vr,{children:[(0,e.jsx)(sa,{content:"Підняти секцію",isDarkMode:a,children:(0,e.jsx)(lr,{$isDarkMode:a,disabled:ne<=1,onClick:()=>d(ne,-1),"aria-label":"Підняти секцію",children:"▲"})}),(0,e.jsx)(sa,{content:"Опустити секцію",isDarkMode:a,children:(0,e.jsx)(lr,{$isDarkMode:a,disabled:ne===c.length-1,onClick:()=>d(ne,1),"aria-label":"Опустити секцію",children:"▼"})})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"6px",width:"100%"},children:[(0,e.jsx)("span",{style:{fontSize:"11px",color:C?"#8a8a8a":a?"#ffb36c":"#ff005d",wordBreak:"break-all",flex:1,minWidth:0},title:pe,children:pe}),(0,e.jsx)("button",{type:"button",onClick:()=>Ie(V.key,V.path),style:{border:"none",borderRadius:"6px",padding:"4px",background:a?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)",color:a?"#fff":"#333",cursor:"pointer",fontSize:"11px",fontWeight:"600"},children:Lt===V.key?"✓ Скопійовано":"Копіювати посилання"})]})]},V.key)}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)("button",{onClick:T,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:a?"#333":"#eee",color:a?"#fff":"#333"},children:"Скинути теми"}),(0,e.jsx)("button",{onClick:l,style:{width:"100%",cursor:"pointer",padding:"2px",borderRadius:"7px",border:"none",fontWeight:"bold",background:"#990038",color:"white"},children:"Скинути порядок"})]}),u?.length>0&&(0,e.jsx)("div",{style:{marginTop:"10px",fontSize:"10px",color:a?"#fcfbfb":"#070707",fontStyle:"italic"},children:'Підказка: Приховані секції доступні через режим "Маршрутизації". Щоб залишити лише одну секцію, натисніть блок в якому зображено якір та є текст маршрутизація.'})]}),(0,e.jsxs)(Jo,{$active:nt==="controls",children:[(0,e.jsx)(Go,{children:"Керування"}),(0,e.jsxs)(mu,{children:[(0,e.jsx)("li",{style:{display:"none"},children:(0,e.jsxs)(du,{$isUltra:m,onClick:()=>{z(),n()},children:[(0,e.jsxs)(cu,{$isUltra:m,children:[(0,e.jsx)(sr,{$show:!m,$variant:"rainbow",$isSymbol:!0,children:"+"}),(0,e.jsx)(sr,{$show:m,$variant:"ultra",$isSymbol:!0,children:"♔"})]}),(0,e.jsxs)(pu,{children:[(0,e.jsx)(sr,{$show:!m,$variant:"rainbow",children:"Стихія+"}),(0,e.jsx)(sr,{$show:m,$variant:"ultra",children:"Стихія Ultra"})]}),(0,e.jsx)("span",{style:{fontSize:"12px",color:m?"#710097":"#ffb36c",fontWeight:"bold"},children:"➔"})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)(_o,{$isDarkMode:a,onClick:()=>B(!C),children:[(0,e.jsx)("span",{className:"icon",children:C?(0,e.jsx)(Bc,{}):(0,e.jsx)(Cc,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:C?"Маршрутизація":"Навігація"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:C?"Зміна URL":"Плавний скрол"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:C?"При натиску ввімкнеться ремим навігації":"При натиску ввімкнеться ремим маршрутизації"})]}),(0,e.jsx)(Or,{$active:C})]})}),(0,e.jsxs)("li",{children:[(0,e.jsxs)(_o,{$isDarkMode:a,onClick:()=>Te(!oe),children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(_s,{})}),(0,e.jsxs)("div",{style:{flexGrow:1},children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold"},children:"Режим Декоратора"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Редагування стилів сторінки"}),(0,e.jsx)("div",{style:{fontSize:"10px",opacity:.85},children:"Необхідні незначні знання CSS"})]}),(0,e.jsx)(Or,{$active:oe})]}),oe&&(0,e.jsxs)("div",{style:{padding:"10px",background:a?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",borderRadius:"10px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"12px",fontWeight:"bold",color:a?"#ffb36c":"#ff005d"},children:"Зберігати після перезавантаження:"}),(0,e.jsx)(Or,{$active:Dt,onClick:()=>ot(!Dt),style:{transform:"scale(0.8)",cursor:"pointer"}})]}),(0,e.jsxs)("div",{style:{fontSize:"12px",fontWeight:"bold",marginBottom:"10px",color:a?"#ffb36c":"#ff005d"},children:["Журнал змін (",Se.length,")"]}),Se.length>0?(0,e.jsx)("div",{style:{maxHeight:"150px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"5px"},children:Se.map(V=>{let ne="";return V.mode==="light_default"?ne="☀️ ":V.mode==="light_hover"?ne="☀️👆 ":V.mode==="dark_default"?ne="🌙 ":V.mode==="dark_hover"&&(ne="🌙👆 "),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px",background:a?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.5)",padding:"5px",borderRadius:"5px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{opacity:.8,marginRight:"4px"},children:ne}),(0,e.jsx)("span",{style:{color:"#ffb36c"},children:V.tagName})," ",V.property,":"," ",(0,e.jsx)("span",{style:{opacity:.7},children:V.originalValue||"none"})," ","➔ ",(0,e.jsx)("b",{children:V.newValue})]}),(0,e.jsx)("button",{onClick:()=>ut(V.id),style:{background:"#ff4d4d",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",padding:"2px 6px",fontSize:"10px",marginLeft:"5px"},children:"Відмінити"})]},V.id)})}):(0,e.jsx)("div",{style:{fontSize:"11px",opacity:.7,fontStyle:"italic"},children:"Змін ще немає"}),Se.length>0&&(0,e.jsx)("button",{onClick:It,style:{width:"100%",background:"transparent",color:"#ff4d4d",border:"1px solid #ff4d4d",borderRadius:"5px",marginTop:"10px",padding:"5px",fontSize:"11px",cursor:"pointer"},children:"Скинути всі зміни"})]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:a?"#ffb36c":"#ff005d",marginBottom:"5px"},children:"Режим завантаження"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,e.jsx)(sa,{content:"Завантажує все відразу при старті сайту",isDarkMode:a,children:(0,e.jsx)(dr,{$active:ce==="eager",$isDarkMode:a,onClick:()=>ee("eager"),"aria-label":"Завантажує все відразу при старті сайту",children:"Повний"})}),(0,e.jsx)(sa,{content:"Завантажує важкі модулі через 8 секунд",isDarkMode:a,children:(0,e.jsx)(dr,{$active:ce==="delayed",$isDarkMode:a,onClick:()=>ee("delayed"),"aria-label":"Завантажує важкі модулі через 8 секунд",children:"Оптимальний"})}),(0,e.jsx)(sa,{content:"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",isDarkMode:a,children:(0,e.jsx)(dr,{$active:ce==="lazy",$isDarkMode:a,onClick:()=>ee("lazy"),"aria-label":"Завантажує спливаюче вікно тільки при натисканні та елемент сайту коли ви до нього догортуєте (економія)",children:"Економний"})})]})]})}),(0,e.jsxs)("li",{style:{display:"flex"},children:[(0,e.jsxs)(za,{$isDarkMode:a,onClick:k,children:["Змінити тему? ",(0,e.jsx)("span",{className:"icon",children:a?(0,e.jsx)(Sn,{}):(0,e.jsx)(Mn,{})})]}),(0,e.jsxs)(za,{$isDarkMode:a,onClick:me,style:{color:X?"#ff005d":void 0},children:[X?"Вимкнути":"Ввімкнути"," липкий фон?"]})]}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:a?"#ffb36c":"#ff005d"},children:"Зменшення Яскравості"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:J.darkIntensity||0,onChange:V=>Ft(Number(V.target.value)),style:{width:"90%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[J.darkIntensity||0,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:a?"#ffb36c":"#ff005d"},children:"Фільтри"}),(0,e.jsx)(wu,{$isDarkMode:a,children:Ai.map(V=>(0,e.jsx)(dr,{$active:J.filterType===V.id,$isDarkMode:a,onClick:()=>bt(V.id),children:V.label},V.id))})]})}),J.filterType!=="none"&&(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:a?"#ffb36c":"#ff005d"},children:"⚡ Сила ефекту"}),(0,e.jsx)("input",{type:"range",min:"0",max:"100",value:J.filterIntensity||50,onChange:V=>yt(Number(V.target.value)),style:{width:"92%",cursor:"pointer"}}),(0,e.jsxs)("div",{style:{fontSize:"12px",textAlign:"right",marginTop:"-25px"},children:[J.filterIntensity||50,"%"]})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",fontWeight:"bold",color:a?"#ffb36c":"#ff005d"},children:"Швидкі стилі"}),(0,e.jsxs)(vu,{children:[nd.map(V=>(0,e.jsx)(Yo,{$isDarkMode:a,onClick:()=>Q(V.config),children:V.label},V.id)),te.map((V,ne)=>(0,e.jsxs)(Cu,{draggable:!0,onDragStart:pe=>De(pe,ne),onDragEnd:at,onDragOver:pe=>pe.preventDefault(),onDrop:pe=>St(pe,ne),children:[(0,e.jsx)(Iu,{"aria-label":"Перетягніть для сортування",children:"⠿"}),(0,e.jsx)(Yo,{$isDarkMode:a,style:{borderColor:"#7afcff",color:a?"#7afcff":"#006666"},onClick:()=>Q(V.config),children:V.label}),(0,e.jsx)(Tu,{onClick:()=>{const pe=V.label.replace("✨ ",""),Ae=window.prompt("Введіть нову назву пресета:",pe);Ae&&re(V.id,Ae)},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(Au,{onClick:()=>N(V.id),"aria-label":"Видалити пресет",children:"×"})]},V.id))]}),(0,e.jsxs)(ku,{children:[(0,e.jsx)(ju,{$isDarkMode:a,placeholder:"Назва пресета...",value:tt,onChange:V=>mt(V.target.value),maxLength:15}),(0,e.jsx)(Su,{onClick:()=>{tt.trim()&&(D(tt),mt(""))},children:"Зберегти"})]})]})}),(0,e.jsx)("li",{children:(0,e.jsx)(Du,{onClick:he,children:"Скинути всі фільтри ↺"})}),(0,e.jsxs)(lu,{children:[(0,e.jsx)("li",{children:(0,e.jsx)(za,{style:{display:"none"},$isDarkMode:a,onClick:()=>{P(),n()},children:"Магазин"})}),(0,e.jsx)("li",{children:(0,e.jsx)(za,{$isDarkMode:a,onClick:()=>{y(),n()},children:"Фонова музика"})}),(0,e.jsx)("li",{children:(0,e.jsx)(za,{$isDarkMode:a,onClick:()=>{F(),n()},children:"Налаштування"})}),(0,e.jsx)("li",{children:(0,e.jsx)(za,{$isDarkMode:a,onClick:()=>{I(),n()},children:"Навчання"})}),(0,e.jsx)("li",{})]})]})]})]})]})]}):null},Hn="/assets/relax-Dn2PcHdb.mp3",zu="/assets/bell-B5cBbKiy.mp3",$u="/assets/concierge-ItJSby-8.mp3",Ru=i.div`
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
`,Lu=le`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Fu=le`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`,Eu=i.div`
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
  animation: ${Fu} 0.8s ease-out 4.3s both;
  margin: 0;
`,Pu=i.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`,jn=i.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${t=>t.$isDarkMode?"#fff":"#1a1a1a"};
  align-items: center;
  justify-content: center;
  padding: 2px;
  flex-shrink: 0;
`,Pn=i.span`
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

  ${t=>t.$uColor?.includes("linear")?et`
        background: ${t.$uColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 400% 400%;
        animation: ${Lu} 5s ease infinite;
      `:`color: ${t.$uColor||"inherit"};`}
`;var Zo=i.img`
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
`,Nu=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ou=i.button`
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
`,Vu=i.div`
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
`,Bu=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Hu=i.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`,Ku=i.div`
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin-bottom: 2px;
`,Xo=i.div`
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
`,Uu=i.div`
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
`,Br=i.label`
  font-size: 11px;
  font-weight: bold;
  color: ${t=>t.$isDarkMode?"#fff":"#333"};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,Qo=i.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${t=>t.$isDarkMode?"#ffb36c":"#007bff"};
`,Wu=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`,_u=i.button`
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
`,xn=({content:t,children:n,placement:a="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),{refs:u,floatingStyles:g,context:x}=ma({open:l,onOpenChange:d,placement:a,strategy:"fixed",transform:!1,whileElementsMounted:ua,middleware:[ca(8),pa(),va({padding:5}),ka({element:h})]}),{isMounted:T,styles:k}=ga(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=fa(x,{move:!1}),z=ha(x),F=ba(x),I=ja(x,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:m}=wa([P,z,F,I]);if(!t)return n;const v=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:u.setReference,...y(),style:{display:"inline-flex"},children:n}),T&&(0,e.jsx)(ya,{children:(0,e.jsxs)(Ru,{ref:u.setFloating,$isDarkMode:c,style:{...g,...k},...m(),children:[t,(0,e.jsx)(xa,{ref:h,context:x,fill:v,stroke:"#00acb9",strokeWidth:1})]})})]})},qu=({sfxVolume:t=.2,onOpenLogin:n,onOpenRegister:a,onOpenSettings:c,onOpenVip:l,onOpenShop:d,onOpenHelp:h,onOpenOtherOptions:u,onOpenInfo:g,onOpenAuthorsDirectory:x,isInfoOpen:T,isDarkMode:k,toggleTheme:P,isStickyBgMode:z,setIsStickyBgMode:F,sectionThemes:I,hiddenSections:y,onToggleSectionVisibility:m,onToggleSectionTheme:v,onResetSectionThemes:j,onOpenAchievements:C,currentAvatar:B,onLogout:H,user:J,siteSections:Q,moveSiteSection:he,resetSiteSections:te,isRoutingMode:D,setIsRoutingMode:N,currentPath:re,setIsFsActive:xe,loadingStrategy:ce,onSetLoadingStrategy:ee})=>{const{registerRef:X}=Wa?.()||{registerRef:()=>{}},[me,oe]=(0,r.useState)(!1),[Te,Se]=(0,r.useState)(!1),[ut,It]=(0,r.useState)(!1),Dt=J?.avatar||B||"data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSAgCAAABkGRbe9s2H0B6KNvpPYtpLgtrUytb6D7eQOo0lsbp0+reI4IC8H9p+n9IK4iICYDVOXTmu/2tINJs9br3Z+AcxuoxvXJI48FqB1U57y73KWIRYe8WfKHKv2ZmUeFr1CU85hiFpTMX4Uw1njFxjJkbqA01viTheOMXTKlqbEVqJbbx7NewjSrGLdQKhy+RSmla4X9z22gYv8CPwkakMjVUhySjmNYxslqkKKSlsdWQc9V/KjBT+YvmRpPo/T94k6nM0RZFwfjSAahuUz0Um0QNedkD6GXVoAAbVeoBbpr6IQtGFdlxbjWPbaiTZYdDmbAjzNI4PrIzZxKbRMvcA8uABRuDdPuGmErkqGNv25BykWT4GSxpAhqx5AkQGmOahGDgoMSAxmbbIkPbL4phq29hY4pCa69rGoqloXltzsRgSMl2v2NrRTegfRqHYuFA1YpJ9uGWbTkpcqRt2bkO7VmRCrDjgM08SXkTgLvESeLNCoB7ngwpKcSUXuJf75h0A2qD6BJR/YPqDrVtoL4NKs5VGPkwjRg2QnMIo+I63AiP9/Gf1AiLhvCf+BEeo2t8jcxNZvEQyPgDNbRTeBcixxraz5iCvsY68zgy11HD6jHHVC5xHh4FK7xkLpP40nuHohVuvGUWiwj7l51H8QqdpX2KRni40kGFsTqH6ftrva0g0mz1unMdOAcrVlA4IBICAACQDACdASoyADIAPsFUoEsnpSohrBgPMUAYCWMAwC9wCRRLH+4gYhzqagfRN9EAhxwGqRv/jmc1BOxEgbrAM605ppyG43D+vnesseUHt5e2YcVRIpfJmz7c4RBIyGxwLT2g8fjgUs3c5+7eI0QAAP73eYP9aVkjEBhBK3pzG1H3+dz6EtyuHz3Ow3mqtJKWZdoha1DoM5XzcG/ZMBEMJVmEOwz+EZMtxXbMLJXyrk1E5C5MqzX/oFXOikmQFqSFMb3fsJ5aYqezfaHhjZ9VwgXGwn2MFAOH57D89AfLZxPSh/PCHdWYh3JQPZIDQd9U9wsxTOEq0KQde/HwQF+miatvObbvXUCAn19qc5BCSg0/JszOe5lC2N+++RriCdHN4/VPxxp7P/ZWDRGeL97b6//7ep5VDl706/E5630FgAMDTt7sx9B4bzHMLmmm0uHA2zzd1NlKRAZFV0jsre40sRAkqLp0/FtdoLHK972vA209h65M1GG0I4GfHNZWKB32MLItej2JWB3sTJAt5MfW8LpmJbnhN/COUCqcAT5qV9UyhLxalC+FkWbkgHJLcypPd5fR0xrctg9ZxFVdY6g5Ekwk8RAs+RXu6pUOTV5u40lH9IwB9UbyC9Z0hcKb8tvdhBtmJ0C+Y//chvikI+nJ43VjWfbTH2xC+3/PxAC+FhaxIkSuzatsM/m5/AmWCw/6FoAAAA==",ot=de=>{de.currentTarget.onerror=null,de.currentTarget.src=Ti},[st,Oe]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!st)return;const de=Me=>{const lt=document.getElementById("header-profile-modal"),We=document.getElementById("header-profile-button");lt&&!lt.contains(Me.target)&&We&&!We.contains(Me.target)&&Oe(!1)};return document.addEventListener("mousedown",de),()=>document.removeEventListener("mousedown",de)},[st]);const{visualConfig:tt,setVisualConfig:mt,resetFilters:Ve,FILTERS:jt,PRESETS:Lt,customPresets:ft,saveCustomPreset:nt,deleteCustomPreset:Ze,updateCustomPresetName:Ue,reorderCustomPresets:gt}=eu(J);(0,r.useEffect)(()=>{const de=setInterval(()=>oe(Me=>!Me),3e3);return()=>clearInterval(de)},[]);const Ie=de=>{const Me=new Audio(de);Me.volume=t,Me.play().catch(()=>{})},De=()=>{Ie(zu),P()},at=()=>{Ie($u),F(de=>!de)},St=()=>{Ie(Hn),h&&h()},bt=()=>{Ie(Hn),d&&d()},Ft=()=>{Ie(Hn),u&&u()},yt=()=>{Ie(Hn),c&&c()},Ot=()=>{Ie(Hn),H&&H()},V=()=>{Ie(Hn),n&&n()},ne=()=>{Ie(Hn),a&&a()},pe=de=>{Ie(Hn),mt(Me=>({...Me,filterType:de}))},Ae=de=>{Ie(Hn),mt(de)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Eu,{$isDarkMode:k,$isStickyBgMode:z,"data-decorator-ignore":"true",children:[(0,e.jsx)(Pu,{children:J?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Xo,{ref:de=>X("headerBgTheme",de),children:[(0,e.jsx)(xn,{content:"Змінити тему",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:De,$isDarkMode:k,"aria-label":"Змінити тему",children:(0,e.jsx)(Pn,{style:{fontSize:"19px"},children:k?(0,e.jsx)(Sn,{}):(0,e.jsx)(Mn,{})})})}),(0,e.jsx)(xn,{content:"Фон на увесь сайт",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:at,$isDarkMode:k,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Pn,{children:(0,e.jsx)(To,{style:{color:z?"#ff005d":"inherit"}})})})}),(0,e.jsx)(xn,{content:"Допомога з сайтом",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:St,$isDarkMode:k,"aria-label":"Допомога з сайтом",children:(0,e.jsx)(Pn,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(xn,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:bt,$isDarkMode:k,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(So,{})})}),(0,e.jsx)(xn,{content:"Автори та джерела",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:()=>x?.(),$isDarkMode:k,"aria-label":"Автори та джерела",children:(0,e.jsx)(Pn,{style:{fontSize:"18px"},children:(0,e.jsx)(No,{})})})}),(0,e.jsx)(xn,{content:"Налаштування",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:yt,$isDarkMode:k,"aria-label":"Налаштування",children:(0,e.jsx)(Pn,{children:(0,e.jsx)(Js,{})})})}),(0,e.jsx)(xn,{content:"Вихід з акаунта",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:Ot,$isDarkMode:k,"aria-label":"Вихід з акаунта",children:(0,e.jsx)(Pn,{children:(0,e.jsx)(bc,{})})})})]}),(0,e.jsxs)(Nu,{children:[(0,e.jsx)(xn,{content:"Ваш профіль",isDarkMode:k,children:(0,e.jsx)(Ou,{id:"header-profile-button",$isDarkMode:k,onClick:()=>Oe(de=>!de),"aria-label":"Профіль користувача",children:(0,e.jsx)(Zo,{src:Dt,onError:ot,$bColor:J.borderColor,style:{width:"33px",height:"33px"}})})}),st&&(0,e.jsx)(Vu,{id:"header-profile-modal",$isDarkMode:k,children:(0,e.jsxs)(Bu,{children:[(0,e.jsx)(Zo,{src:Dt,onError:ot,$bColor:J.borderColor,style:{width:"42px",height:"42px"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)(Ku,{children:"Профіль"}),(0,e.jsxs)(Hu,{children:["Ваше ім'я: ",J.firstName]})]})]})})]})]}):(0,e.jsxs)(Xo,{ref:de=>X("headerBgTheme",de),children:[(0,e.jsx)(xn,{content:"Змінити тему",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:De,$isDarkMode:k,"aria-label":"Змінити тему",children:(0,e.jsx)(Pn,{style:{fontSize:"18px"},children:k?(0,e.jsx)(Sn,{}):(0,e.jsx)(Mn,{})})})}),(0,e.jsx)(xn,{content:"Фон на увесь сайт",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:at,$isDarkMode:k,"aria-label":"Фон на увесь сайт",children:(0,e.jsx)(Pn,{children:(0,e.jsx)(To,{style:{color:z?"#ff005d":"inherit"}})})})}),(0,e.jsx)(xn,{content:"Навчання",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:St,$isDarkMode:k,"aria-label":"Навчання",children:(0,e.jsx)(Pn,{style:{fontWeight:900},children:"?"})})}),(0,e.jsx)(xn,{content:"Станьте нашим спосором, та підтримайте інші екологічні компанії!",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:bt,$isDarkMode:k,"aria-label":"Станьте нашим спосором, та підтримайте інші екологічні компанії!",children:(0,e.jsx)(So,{})})}),(0,e.jsx)(xn,{content:"Автори та джерела",isDarkMode:k,children:(0,e.jsx)(jn,{onClick:()=>x?.(),$isDarkMode:k,"aria-label":"Автори та джерела",children:(0,e.jsx)(Pn,{style:{fontSize:"18px"},children:(0,e.jsx)(No,{})})})}),(0,e.jsx)("button",{onClick:V,style:{fontSize:"11px",cursor:"pointer",background:"none",border:"none",textDecoration:"underline",display:"none",color:k?"#fff":"#000"},children:"Вхід"}),(0,e.jsx)("button",{onClick:ne,style:{fontSize:"14px",cursor:"pointer",background:"none",border:"none",marginRight:"15px",textDecoration:"underline",color:k?"#fff":"#000"},children:"Акаунт"})]})}),ut&&(0,e.jsxs)(Uu,{$isDarkMode:k,children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)(Br,{$isDarkMode:k,children:["Яскравість ",(0,e.jsxs)("span",{children:[tt.darkIntensity,"%"]})]}),(0,e.jsx)(Qo,{type:"range",min:"0",max:"100",value:tt.darkIntensity,onChange:de=>mt(Me=>({...Me,darkIntensity:Number(de.target.value)})),$isDarkMode:k})]}),(0,e.jsx)(Wu,{children:jt.map(de=>(0,e.jsx)(_u,{$active:tt.filterType===de.id,$isDarkMode:k,onClick:()=>pe(de.id),children:de.label},de.id))}),tt.filterType!=="none"&&(0,e.jsxs)("div",{children:[(0,e.jsxs)(Br,{$isDarkMode:k,children:["Сила ефекту ",(0,e.jsxs)("span",{children:[tt.filterIntensity,"%"]})]}),(0,e.jsx)(Qo,{type:"range",min:"0",max:"100",value:tt.filterIntensity,onChange:de=>mt(Me=>({...Me,filterIntensity:Number(de.target.value)})),$isDarkMode:k})]}),(0,e.jsxs)("div",{style:{marginTop:"5px"},children:[(0,e.jsx)(Br,{$isDarkMode:k,style:{marginBottom:"8px"},children:"Стилі"}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[Lt.map(de=>(0,e.jsx)("button",{style:{background:"transparent",border:"1px solid #ffb36c",color:k?"#ffb36c":"#333",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer"},onClick:()=>Ae(de.config),children:de.label},de.id)),ft.map(de=>(0,e.jsx)("button",{style:{background:"rgba(255, 179, 108, 0.1)",border:"1px solid #7afcff",color:k?"#7afcff":"#006666",borderRadius:"6px",padding:"5px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis"},onClick:()=>Ae(de.config),children:de.label},de.id))]})]})]})]}),(0,e.jsx)(Mu,{isOpen:Te,onClose:()=>Se(!1),isDarkMode:k,siteSections:Q,moveSiteSection:he,resetSiteSections:te,sectionThemes:I,hiddenSections:y,onToggleSectionVisibility:m,onToggleSectionTheme:v,onResetSectionThemes:j,onToggleTheme:De,onOpenShop:bt,onOpenVip:l,onOpenAchievements:C,showUltra:me,onOpenSettings:yt,onOpenHelp:St,onOpenInfo:g,onOpenOtherOptions:Ft,onLogout:Ot,isRoutingMode:D,setIsRoutingMode:N,currentPath:re,visualConfig:tt,setVisualConfig:mt,onResetFilters:Ve,customPresets:ft,onSavePreset:nt,onDeletePreset:Ze,onUpdatePresetName:Ue,onReorderPresets:gt,setIsFsActive:xe,loadingStrategy:ce,onSetLoadingStrategy:ee,isStickyBgMode:z,onToggleStickyBg:at})]})},es=[{id:1,author:"Mondo TV",linkkone:"https://megogo.net/ua/view/1813141-dinofroz-sezon-1-seriya-1.html?video_view_tab=description",linknameoneone:"Дивитися",linknameonetwo:"Megogo",Замітка:"Ця студія багато чого цікавого випустила, ми показали лише незначну к-сть, не лише з повагою до автора і українського телеканалу що це показав, але й тому що Стихія хоче показали трохи ностальгії. Посилання на перегляд у Мегого і ютуб канал Малатко ТВ, беззаперечно розмістив. Надіюсь хтось це передивитися.",info:"Mondo TV SpA — італійська компанія з виробництва та розповсюдження телевізійних програм. Заснована Орландо Корраді в 1985 році та розташована в Римі, Mondo TV є публічною компанією, акції якої котируються на сегменті STAR головної італійської фондової біржі Borsa Italiana. Вона самостійно або у співпраці з міжнародними мережами розповсюджує та виробляє мультсеріали та художні фільми для телебачення та кінотеатрів. Mondo TV також працює в інших суміжних секторах, таких як розповсюдження музики та аудіовізуальних матеріалів, експлуатація, медіа, видавнича справа та мерчандайзинг, та є одним з небагатьох відділень італійських компаній або груп з виробництва аудіовізуальних матеріалів, що працюють на ринках за межами Італії."},{id:2,author:"TheFatRat",Замітка:"Особистий респект, за бажання поширення їхніх мелодій безкоштовно.",info:"TheFatRat (справжнє ім'я Крістіан Бюлль) — німецький музичний продюсер та діджей, відомий своїми електронними треками, які часто використовуються в ігрових відео та стрімах. Його музика характеризується енергійними ритмами та мелодійними елементами, що робить її привабливою для геймерів та фанатів електронної музики.",linkkone:"https://www.youtube.com/@TheFatRat",linknameoneone:"Профіль автора",linknameonetwo:"У YouTube"},{id:3,author:"TheTurkeyStudio",info:"Доміно сам цю назву придумав, він хоче щоб було місце де немає поняття, і чому прогноз погоди такий політичний, тому я й придумав Стихію :)"},{id:4,author:"DJ-Nate",Примітка:"Пісні автора з гри Geometry Dash, що є популярною грою на мобільних пристроях.",Замітка:"Лише тому що мій клас у минулому грав безпервно у цю гру.",linkkone:"https://dj-nate.newgrounds.com/",linknameoneone:"Профіль автора",linknameonetwo:"У Newgrounds",info:"DJ-Nate відомий своїми електронними треками, які часто використовуються в ігрових відео та стрімах. Його музика характеризується енергійними ритмами та мелодійними елементами, що робить її привабливою для геймерів та фанатів електронної музики."},{id:5,author:"SayGames - MyLittleUniverse(Estoty)",Примітка:"Усе чудово.",Замітка:"Без заміток",info:"SayGames - це команда розробників, які створювали гру My Little Universe і т.д. коротше ви управляєте маленьким світом, граючи за стікмена."}],Cr=le`
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
`,Ju=le`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,Gu=le`
  0% { border-color: #ff0000; box-shadow: 0 0 5px #ff0000; }
  50% { border-color: #ff4d4d; box-shadow: 0 0 15px #ff0000; }
  100% { border-color: #ff0000; box-shadow: 0 0 5px #ff0000; }
`,Yu=le`
  0% { opacity: 0.4; }
  100% { opacity: 1; }
`,Zu=le`
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
`,Xu=le`
  0% { background-position: 0% 0%; filter: hue-rotate(0deg) contrast(1.2); }
  25% { background-position: 100% 0%; filter: hue-rotate(90deg) contrast(1.4); }
  50% { background-position: 100% 100%; filter: hue-rotate(180deg) contrast(1.2); }
  75% { background-position: 0% 100%; filter: hue-rotate(270deg) contrast(1.4); }
  100% { background-position: 0% 0%; filter: hue-rotate(360deg) contrast(1.2); }
`,Em=le`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`,Pm=le`
  0% { transform: translate(0, 0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0, 0); }
`,Nm=le`
  from { height: 0; }
  to { height: 12%; }
`,Om=le`
  from { height: 0; }
  to { height: 12%; }
`,Qu=le`
  0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
  20% { opacity: 0.5; }
  50% { transform: translate(calc(-50% + var(--end-x, 0px)), calc(-50% + var(--end-y, 0px))) scale(var(--pulse-scale, 1)); }
  80% { opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
`,ef=le`
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
`,tf=le`
  0% { opacity: 0; background-color: rgba(255, 255, 255, 0); }
  30% { opacity: 1; background-color: rgba(255, 255, 255, 0.1); }
  100% { opacity: 0; background-color: rgba(255, 255, 255, 0); }
`,Vm=i.div`
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
  animation: ${tf} 0.8s ease-out forwards;
  color: white;
  .icon {
    font-size: 36px;
    margin-bottom: 5px;
  }
  .text {
    font-size: 18px;
    font-weight: bold;
  }
`,Bm=i.div`
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
`,nf=le`
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
`,Hm=i.div`
  background: ${t=>t.$isDarkMode?"white":"black"};
  border-radius: 20px;
  margin-top: 5px;
  display: none;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  ${t=>t.$isAudioBarActive&&et`
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
`,Km=i.div`
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`,Um=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  width: 100%;
  padding: 0 10px;
`,Wm=i.input`
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
`,_m=i.select`
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
`,qm=i.div`
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
`,Jm=i.div`
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
`,Gm=i.div`
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
  animation: ${t=>t.$rating===2?et`
          ${Gu} 2s infinite
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
`,Ym=i.img`
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
`,Zm=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: ${t=>t.$isDarkMode?"#444":"#a5a5a5"};
  overflow: hidden;
`,Xm=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.05);
  }
`,Qm=i.div`
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
`,eb=i.div`
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
`,tb=i.input`
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
`,nb=i.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 20px; /* Changed for dark mode */
  padding: 10px 110px;
  font-size: 19px;
  cursor: pointer;
  margin-top: 5px;
`,ab=i.div`
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

  ${t=>t.$active&&et`
      ${t.$type==="red"&&`background: linear-gradient(to right, rgba(255, 0, 0, ${t.$opacity}), rgba(255, 69, 0, ${t.$opacity}));`}
      ${t.$type==="purple"&&`background: linear-gradient(to right, rgba(255, 20, 147, ${t.$opacity}), rgba(255, 182, 193, ${t.$opacity}));`}
      ${t.$type==="green"&&`background: linear-gradient(to right, rgba(0, 255, 0, ${t.$opacity}), rgba(50, 205, 50, ${t.$opacity}));`}
      ${t.$type==="blue"&&`background: linear-gradient(to right, rgba(0, 0, 255, ${t.$opacity}), rgba(65, 105, 225, ${t.$opacity}));`}
      ${t.$type==="black"&&`background: linear-gradient(to right, rgba(0, 0, 0, ${t.$opacity}), rgba(0, 0, 0, ${t.$opacity}));`}
      ${t.$type==="orange"&&`background: linear-gradient(to right, rgba(230, 149, 0, ${t.$opacity}), rgba(255, 165, 0, ${t.$opacity}));`}
      ${t.$type==="cyan"&&`background: linear-gradient(to right, rgba(0, 255, 255, ${t.$opacity}), rgba(0, 206, 209, ${t.$opacity}));`}
      ${t.$type==="brown"&&`background: linear-gradient(to right, rgba(139, 69, 19, ${t.$opacity}), rgba(160, 82, 45, ${t.$opacity}));`}
      ${t.$type==="white"&&`background: linear-gradient(to right, rgba(255, 255, 255, ${t.$opacity}), rgba(240, 240, 240, ${t.$opacity}));`}
      ${t.$type==="image"&&et`
          background-image: url(${t.$imageUrl});
          background-size: cover;
          background-position: center;
          background: transparent;
          opacity: ${t.$opacity||1};
        `}
      ${(t.$type==="flash"||t.$type==="flicker"||t.$flicker)&&et`
          background: rgba(255, 255, 255, ${t.$opacity});
        `}
      ${t.$type==="chaos"&&et`
          --chaos-opacity: ${t.$opacity||.4};
          animation: ${Zu} 1.5s linear infinite;
        `}
      ${t.$type==="ultrachaos"&&et`
          background: radial-gradient(
            circle at center,
            rgba(255, 0, 150, ${t.$opacity||.5}),
            rgba(0, 204, 255, ${t.$opacity||.5}),
            rgba(255, 255, 0, ${t.$opacity||.5}),
            rgba(0, 255, 0, ${t.$opacity||.5})
          );
          background-size: 300% 300%;
          animation: ${Xu} 6s ease-in-out infinite;
          backdrop-filter: blur(2px) saturate(1.5);
        `}
      ${t.$type==="grayscale"&&et`
          background: rgba(119, 119, 119, ${t.$opacity*.2});
        `}
      ${t.$type==="flicker"&&et`
          animation: ${Yu} 0.1s infinite alternate;
        `}
    `}
`,rb=i.span`
  position: absolute;
  color: rgba(255, 255, 255, 0.91);
  pointer-events: none;
  user-select: none;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  animation: ${t=>t.$variation==="firework"?et`
          ${ef} ${t.$duration}s ease-out forwards
        `:et`
          ${Qu} ${t.$duration}s ease-in-out infinite, ${nf} 3s ease-in-out ${Math.max(0,t.$duration-3)}s infinite
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
`,ib=i.input`
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
`,ob=i.div`
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
`,sb=i.div`
  flex: 1;
  height: ${t=>Math.max(15,t.$height*100)}%;
  background: ${t=>t.$active?"orange":"rgba(255, 255, 255, 0.25)"};
  border-radius: 1px;
  transition: background 0.2s ease;
`,lb=i.input`
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
`,db=i.div`
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
`,cb=i.input`
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
`,pb=i.button`
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
`,ub=i.div`
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
`,fb=i.button`
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
`,gb=i.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"black":"white"};
  margin-bottom: 10px;
`,xb=i.button`
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
`,af=i.div`
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
  animation: ${t=>t.$isClosing?Ju:"none"} forwards;
`,hb=i.div`
  background: ${t=>t.$isDarkMode?"#1a1a1a":"white"};
  padding: 5px;
  width: 100%;
  max-width: 320px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: ${t=>t.$isClosing?Pi:Cr} forwards;
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
`,rf=i.div`
  background: #e8e8e8;
  padding: 10px;
  border-radius: 15px;
  width: 95%; /* Changed for dark mode */
  max-width: 1800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${t=>t.$isClosing?Pi:Cr} 0.5s ease-out
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
`,mb=i.button`
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
`,bb=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 2000;
  display: ${t=>t.$closing?"none":"flex"};
  flex-direction: column;
  animation: ${t=>t.$closing?Pi:Cr} 0.3s ease-out
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
`,yb=i.div`
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
`,wb=i.div`
  height: 24px;
  background: #1a1a1a;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  gap: 8px;
`,vb=i.button`
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
`,kb=i.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
  background: linear-gradient(135deg, transparent 50%, orange 50%);
  z-index: 3010;
`,jb=i(_t.div)`
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
`,Sb=i.button`
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
`,Cb=i.div`
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
`,Tb=i.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative; /* Ensure stacking context for children */
  align-items: center;
  position: relative;
  background: #000;
  width: 100%;
  height: 100%;
`,Ab=i.div`
  width: 100%;
  position: relative; /* Establish stacking context for FilterOverlay */
  z-index: 1; /* Ensure it's below controls but above media */
  height: 100%;
  overflow: hidden;
`,Ib=i.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
`,Db=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${t=>t.$animate?et`
          ${of} 1s ease
        `:"none"};
`,of=le`
  from { opacity: 0; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1); }
`,Mb=i.div`
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
`,zb=i.div`
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
`,$b=i.img`
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
`,Rb=i.h2`
  color: white;
  margin: 0;
  font-size: 14px;
  max-width: 60vw;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`,Lb=i.div`
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
`,Fb=i.div`
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
`,Eb=i.div`
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
`,sf=i.button`
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
`,Pb=i.div`
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
`,Nb=i.p`
  margin: 5px 0;
  transition:
    color 0.3s,
    font-weight 0.3s;
  color: ${t=>t.$active?"orange":t.$isDarkMode?"#eee":"#333"};
  font-weight: ${t=>t.$active?"bold":"normal"};
`,Ob=i.div`
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
`,Vb=i.div`
  border-radius: 7px; 
  font-size: 11px;
  color: ${t=>t.$isDarkMode?"#aaa":"#555"};
  text-align: left; 
`,Bb=i.div`
  width: 100%;
  height: 6px;
  background: #ddd;
  border: 1px solid #000000;
  border-radius: 3px;
  margin-top: 5px;
  overflow: hidden;
`,Hb=i.div`
  height: 100%;
  background: ${t=>t.$percent>80?"#ff4d4d":"#00bdb3"};
  width: ${t=>t.$percent}%;
  transition: width 0.5s ease;
`,Kb=i.div`
  position: relative;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  &:hover .slider-overlay {
    opacity: 1;
  }
`,Ub=i.div`
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
`,Wb=i.div`
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
`,_b=i.div`
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
`,qb=i.button`
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
`,Jb=i.div`
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
`,Gb=i.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  &:hover .seek-tooltip {
    opacity: 1;
    visibility: visible;
  }
`,Yb=i.div`
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
`,Zb=i.div`
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
`,Xb=i.div`
  width: 200px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;
`,Qb=i.div`
  height: 100%;
  background: #94fffa;
  width: ${t=>t.$progress}%;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px #94fffa;
`,e1=i.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  color: ${t=>t.$isDarkMode?"white":"#333"};
  background: ${t=>t.$isDarkMode?"#1e1e1e":"#fff"};
`,t1=i.div`
  flex: 1;
  overflow-y: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${t=>t.$isDarkMode?"#121212":"#f7f7f7"};
`,n1=i.div`
  max-width: 80%;
  padding: 6px;
  border-radius: 15px;
  font-size: 13.5px;
  background: ${t=>t.$isUser?"#652b0f":t.$isDarkMode?"#333":"#e0e0e0"};
  color: ${t=>t.$isUser?"white":t.$isDarkMode?"#ddd":"#222"};
  align-self: ${t=>t.$isUser?"flex-end":"flex-start"};
`,a1=i.div`
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
`,r1=i.div`
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
  animation: ${Cr} 0.5s ease-out;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 560px;
`,i1=i.div`
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
`,o1=i.h2`
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
`,s1=i.div`
  padding: 16px 24px 12px;
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
  z-index: 2;
`,l1=i.div`
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
`,d1=i.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,c1=i.button`
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

  ${t=>t.$variant==="back"?et`
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);

          &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(-2px);
          }
        `:et`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);

          &:hover {
            box-shadow: 0 4px 14px rgba(102, 126, 234, 0.5);
            transform: translateY(-1px);
          }
        `}
`,p1=i.div`
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
`,lf=({isOpen:t,onClose:n})=>{const[a,c]=(0,r.useState)(es[0]||null);return t?(0,e.jsx)(af,{onClick:n,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,e.jsxs)(rf,{onClick:l=>l.stopPropagation(),initial:{y:30,opacity:0},animate:{y:0,opacity:1},exit:{y:30,opacity:0},style:{background:"linear-gradient(145deg, rgba(17,18,34,0.97), rgba(20,28,52,0.97))",color:"white",border:"1px solid rgba(255,255,255,0.08)",padding:"18px",borderRadius:"18px",maxWidth:"760px",width:"92%",maxHeight:"78vh",overflow:"hidden",zIndex:2050},children:[(0,e.jsx)(sf,{onClick:n,style:{color:"white"},children:"×"}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(220px, 260px) minmax(0, 1fr)",gap:"16px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{style:{margin:"0 0 12px",fontSize:"18px",color:"#ffb36c"},children:"Автори та джерела"}),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxHeight:"52vh",overflowY:"auto",paddingRight:"4px"},children:es.map(l=>(0,e.jsxs)("button",{onClick:()=>c(l),style:{width:"100%",background:a?.author===l.author?"rgba(255,179,108,0.14)":"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",color:"white",padding:"10px 12px",textAlign:"left",cursor:"pointer",transition:"all 0.2s ease"},children:[(0,e.jsx)("div",{style:{fontWeight:700,fontSize:"14px",lineHeight:1.3},children:l.author}),(0,e.jsx)("div",{style:{fontSize:"11px",opacity:.75,marginTop:"2px"},children:l.info?l.info.slice(0,54).trim()+(l.info.length>54?"…":""):"Деталі автора"})]},l.id||l.author))})]}),(0,e.jsx)("div",{style:{minWidth:0,overflowY:"auto",maxHeight:"56vh",paddingRight:"6px"},children:a?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"10px",marginBottom:"12px"},children:[(0,e.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Автор / Компанія"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"22px",lineHeight:1.2,color:"#fff"},children:a.author})]}),(0,e.jsx)("div",{style:{fontSize:"14px",lineHeight:"1.7",color:"rgba(255,255,255,0.9)",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:a.info||"Опис автора відсутній."}),(a.linkkone||a.linknameoneone||a.linknameonetwo)&&(0,e.jsxs)("div",{style:{marginTop:"18px",display:"flex",flexWrap:"wrap",gap:"8px"},children:[a.linkkone&&(0,e.jsx)("a",{href:a.linkkone,target:"_blank",rel:"noreferrer",style:{display:"inline-block",background:"rgba(255,179,108,0.12)",border:"1px solid rgba(255,179,108,0.45)",color:"#ffd39a",padding:"8px 12px",borderRadius:"10px",textDecoration:"none",fontSize:"13px"},children:a.linknameoneone||"Джерело"}),a.linknameonetwo&&a.linkkone&&(0,e.jsx)("span",{style:{color:"rgba(255,255,255,0.7)",fontSize:"12px",alignSelf:"center"},children:a.linknameonetwo})]}),(a.Замітка||a.Примітка)&&(0,e.jsxs)("div",{style:{marginTop:"18px",padding:"12px 14px",borderRadius:"12px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"},children:[a.Замітка&&(0,e.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,e.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Нотатка"}),(0,e.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",lineHeight:"1.6",fontSize:"13px"},children:a.Замітка})]}),a.Примітка&&(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:"6px"},children:"Примітка"}),(0,e.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",lineHeight:"1.6",fontSize:"13px"},children:a.Примітка})]})]})]}):null})]})]})}):null},Ni=Ua(Sc()),df="/assets/planes-jETY8OKB.webp",cf="/assets/meridian-BmSGwtRn.webp",rd="/assets/castle-DO6W3_-e.webp",id="/assets/herotext-e_tt891I.webp",ts=JSON.parse(`[{"id":1,"title":"Метеофор (Gismeteo)","url":"https://meteofor.com.ua/","snippet":"Популярний український метеосайт.\\nПримітка: Містить новини пов'язані з політикою.\\nПостачальник: Uanet / Gismeteo\\nДата випуску: Грудень 1998 року","buttonText":"Подивитись погоду","images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxYt4fP3qDMhaY8ZMuec1u8XnEAqFuykvaQlICB7TSg&s=10"],"tags":["погода","прогноз","україна"]},{"id":2,"title":"Sinoptik — Погода в Україні","url":"https://sinoptik.ua/","snippet":"Погода на 7 днів, 10 днів та місяць для вашого міста.\\nПостачальник: Ukr.net\\nДата випуску: квітень 2006 року","buttonText":"Подивитись погоду","tags":["погода","синоптик","тиждень"],"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFgFFBCFHEgWc0pOHX3rHIIO9CapUlNIIZa6Ve7gl4A&s=10"]},{"id":3,"title":"YouTube","url":"https://www.youtube.com/","snippet":"Слухайте улюблену музику та дивіться відео під час перегляду погоди. Підпишись на 'SlivkiShow' та 'TheTurkeyStudio', будь ласка :)\\nАвтори: Стів Чен, Чад Герлі та Джавед Карім\\nТеперішній власник: Google / Alphabet Inc.\\nДата випуску: 14 лютого 2005 року(Викуплено Google 9 жовтня 2006 року)","buttonText":"Подивишся відео?","images":["planes"],"tags":["музика","відео"]},{"id":4,"title":"Aurora Hills: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch1&hl=uk","snippet":"Ласкаво просимо до Аврора-Гіллз!\\n\\nРозташоване в глибині Аппалачів, містечко Аврора-Гіллз колись славилося своєю розвиненою промисловістю та мальовничими краєвидами. Завдяки багатим природним ресурсам регіону Аврора-Гіллз мало всі шанси стати одним із найзаможніших міст штату.\\n\\nОднак усе не так, як здається на перший погляд. Протягом останніх кількох років регіон сколихнула низка загадкових зникнень місцевих жителів і туристів, що спричинило масовий відтік населення з цього містечка. Тепер, у жовтні 1981 року, Аврора-Гіллз — лише тінь того, чим воно було колись; від колишнього процвітання майже нічого не залишилося.\\n\\nВам, як рейнджеру національного парку, належить розслідувати ці зникнення та знайти відповіді на запитання, що роками не давали спокою місцевим жителям. Чому за останні пів року кількість зникнень зросла? Чому не вдається знайти жодних слідів тих, хто зник безвісти? І, що найважливіше: хто чи що стоїть за всім цим? Саме вам доведеться вирушити вглиб національного парку, щоб розкрити таємниці Аврора-Гіллз...\\nВаші ставки: На основі реальних подій чи неймовірна уява?\\nДата випуску: 16 квітня 2024 року\\nПостачальник: NovaSoft Interactive","buttonText":"Завантажити гру","tags":["гра","горор","пригоди"],"youtubeTrailer":"https://www.youtube.com/embed/NsOV7eBWCfg","images":["https://play-lh.googleusercontent.com/JrzlwlllVs2WSAz3E0MM7fL-sym7E3bWO-c7689e-p1nqLjY6EWjE53zWfwXULleM1qxzDRjls3MNjK6Dhnkjw=w5120-h2880-rw","https://play-lh.googleusercontent.com/cndOTOCfDAHOXq87M-UEi26kPOg522GyHnqSKGnpwuUVTjkVXnBbVxWGjpSH6fAotiGJMPtD8MNwvwXxrEUjbQ=w1052-h592-rw","https://play-lh.googleusercontent.com/88Y_AW0zOqtcsL5fl5Lvv-il_0GPeG1TSk1zccYUfbpVjFvF_Q-MKZShoJohsb5Vmgu9P_V0kcq6aeiXh6hC1KA=w1052-h592-rw"]},{"id":5,"title":"Aurora Hills: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.ahch2&hl=uk","snippet":"Ранок 6 жовтня 1981 року розпочався як і будь-який інший: пробудження від неспокійного сну, підготовка до майбутнього дня та поїздка до станції рейнджерів, де ви працювали останні 11 років. Аврора-Гіллз колись була тихою громадою, розташованою в горах Аппалачів, але серія зникнень майже зруйнувала цю безтурботну атмосферу. Лише відчуття спустошення пронизує навколишнє середовище, коли ви проїжджаєте через нині занедбане маленьке містечко.\\n\\nДжен не була на станції рейнджерів, коли ви прибули того ранку. Будучи єдиним іншим рейнджером парку, вона любить рано вставати, і до того часу, як ви прибули, вона вже поїхала до одного з численних закритих пішохідних маршрутів, щоб розпочати пошуки зниклих безвісти людей. Слідуючи її нотаткам, ви звертаєте з головної стежки, щоб зустрітися з нею та дослідити віддалені частини національного парку. Однак, коли ви знаходите її табір, ваші найгірші побоювання справджуються: місце розграбовано, її спорядження розкидано по всьому табору, її намет розірвано, а Джен ніде не видно.\\n\\nНемає часу повертатися назад, вже полудень, і сонце сідає рано в цю пору року. Єдине, що може бути гірше, ніж блукати лісом на самоті, це незважаючи на те, щоб пройти його вночі. Ви не можете покинути Джен зараз, не тоді, коли слід такий свіжий. Тепер у вас немає іншого вибору, окрім як заглибитися в незвідані частини національного парку, ті частини, які перелякані містяни перетворили на місцеві міські легенди. Вам краще піти швидше, можливо, у вас ніколи не буде кращого шансу розкрити темну історію Аврора-Гіллз...\\nДата випуску: 1 березня 2026 року\\nПостачальник: NovaSoft Interactive","buttonText":"Хто чи що викрадає людей?","youtubeTrailer":"https://www.youtube.com/embed/1ZqB0GZA_9c","tags":["гра","горор","пригоди"],"images":["https://play-lh.googleusercontent.com/lO4JOlv9mQttad-XCiiccy0egm3nJTHgxqoXyxTeN30tx3NxfOlvgSuXqY0sfimQPrh3k3aUySbKxoWsZ_NaYA=w1052-h592-rw","https://play-lh.googleusercontent.com/Aybi7U6MYW9PG314QPC2SDYkpJ5Umzr897Qwv84UygmbPGfclLy_luZxAqSWxJuwVmPSvaE5w_gN2OXIuHZVRQ=w1052-h592-rw","https://play-lh.googleusercontent.com/Evd_zcKkzaz1KOS-2rwqNlXl1k6f43OD_U-pn8amx5o1apN7SyGWa9a-D39cvrPZHfmgLRKR7Czlm4CYz4oXNw=w1052-h592-rw"]},{"id":6,"title":"Prometheus","url":"https://prometheus.org.ua/","snippet":"Найбільша українська платформа масових відкритих онлайн-курсів.\\nПостачальники: Іван Примаченко, Олексій Молчановський\\nДата випуску: 15 жовтня 2014 року","buttonText":"Записатись на курс","tags":["освіта","курси","корисно"]},{"id":7,"title":"Gemini","url":"https://gemini.google.com/","snippet":"Професійний ШІ асистент для аналізу тексту, зображень, відео та аудіо. І може їх створювати.\\nПостачальник: Google\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":8,"title":"DeepL Translator","url":"https://www.deepl.com/","snippet":"Один із найточніших онлайн-перекладачів на основі штучного інтелекту.\\nПостачальник: DeepL SE (Ярослав Кутиловський)\\nДата випуску: 28 серпня 2017 року","buttonText":"Перекласти текст","tags":["інструменти","переклад","ші"]},{"id":9,"title":"Coursera","url":"https://www.coursera.org/","snippet":"Онлайн-курси від найкращих університетів та компаній світу.\\nПостачальники: Ендрю Ин, Дафна Коллер\\nДата випуску: 18 квітня 2012 року","buttonText":"Записатись на курс","tags":["освіта","курси","саморозвиток"]},{"id":10,"title":"Duolingo","url":"https://www.duolingo.com/","snippet":"Опановуйте нові мови з найпопулярнішим навчальним додатком у світі! Duolingo — це безкоштовний додаток для вивчення понад 40 мов за допомогою веселих коротких уроків. Практикуйте говоріння, читання, слухання й письмо та вдосконалюйте свої лексичні й граматичні навички.\\nДодаток Duolingo, розроблений експертами з вивчення мови, люблять сотні мільйонів людей по всьому світу. Він допомагає підготуватися до живого спілкування іспанською, французькою, китайською, італійською, німецькою, англійською та багатьма іншими мовами.\\nХоч би з якою метою ви вивчали мову — для подорожей, навчання, кар’єри, спілкування з близькими чи тренування мозку, — вам неодмінно сподобається робити це з Duolingo.\\nЯкі ж переваги Duolingo?\\n• Опановувати мову з Duolingo цікаво та ефективно. Уроки в ігровій формі та веселі персонажі допоможуть вам навчитися впевнено розмовляти, читати, слухати та писати іноземною.\\n• Duolingo справді працює. Створена експертами з вивчення мови, методика Duolingo розроблена так, щоб вивчене закріплювалося в довготривалій пам’яті.\\n• У вас є змога відстежувати свій прогрес. А досягнути поставлених цілей і зробити навчання щоденною звичкою допоможуть веселі винагороди та досягнення!\\n• Ви навчаєтеся разом із понад 500 мільйонами людей з усього світу. Змагайтеся з іншими за переможні місця на дошках пошани, щоб підтримувати інтерес до навчання.\\n• Усі мовні курси безкоштовні. Вивчайте італійську, португальську, турецьку, нідерландську, ірландську, датську, шведську, українську, есперанто, польську, грецьку, угорську, норвезьку, іврит, валлійську, арабську, латинську, гавайську, шотландську ґельську, в’єтнамську, корейську, японську, англійську й навіть високу валірійську! І це не весь список!\\nОсь що кажуть у світі про Duolingo ⭐️⭐️⭐️⭐️⭐️:\\n«Вибір редакції й “найкращий серед найкращих”», — Google Play\\n«Безперечно, найкращий додаток для вивчення мов», — The Wall Street Journal\\n«Ці безкоштовні додаток і вебсайт — одні з наефективніших способів опановувати мову, які мені траплялися… уроки складаються з коротких цікавих завдань, як-от говоріння, переклад чи вибір правильної відповіді, тому я залюбки повертаюсь до них знов і знов», — The New York Times\\n«Duolingo може стати майбутнім освіти», — TIME Magazine\\n«...Duolingo — це веселий, милий і цікавий додаток», — Forbes\\nЯкщо ви любите Duolingo, спробуйте Super Duolingo протягом 14 днів безкоштовно! Опановуйте мову швидко, без реклами й отримуючи корисні бонуси, як-от необмежені серця та щомісячне відновлення відрізка.\\nНадсилайте свої відгуки на адресу android@duolingo.com\\nВебверсія доступна за адресою https://www.duolingo.com\\nПолітика конфіденційності: https://www.duolingo.com/privacy\\nДоміно: Доктор все погано, додаток чудовий, але мови індиків немає, я людей розумію, а вони мене ні... Доктор: Може це на краще, секрети замку ти не видаси :)\\nПостачальники: Луїс фон Ан, Северин Гакер\\nДата випуску: 29 травня 2013 року","buttonText":"Вчити мови","tags":["освіта","мови","корисно"]},{"id":11,"title":"Wikipedia (Українська)","url":"https://uk.wikipedia.org/","snippet":"Вільна енциклопедія, яку може редагувати кожен.\\nІлон Маск пропонував їм багато грошей, якщо вони перейменуються... Чомусь відмовились...\\nПостачальник: Wikimedia Foundation\\nДата випуску: 30 січня 2004 року","buttonText":"Читати і редагувати","youtubeTrailer":"https://www.youtube.com/watch?v=6UkFHYqVsbc","images":[],"tags":["енциклопедія","знання","довідник"]},{"id":12,"title":"Canva","url":"https://www.canva.com/","snippet":"Простий онлайн-інструмент для створення дизайну, презентацій та графіки.\\nЯкщо відкинути 3тю букву, буде кава :) Рифма від Кейт для пісні Полякової: Буде Кава, яку вип'є леді Гага!\\nПостачальник: Canva Pty Ltd (Мелані Перкінс, Кліфф Обрехт, Камерон Адамс)\\nДата випуску: 1 січня 2013 року","buttonText":"Створити дизайн","tags":["дизайн","інструменти","графіка"]},{"id":13,"title":"Photopea","url":"https://www.photopea.com/","snippet":"Безкоштовний онлайн-редактор зображень, аналог Photoshop.\\nМій перший дизайн: почник, з якого зникає шматок :)\\nПостачальник: Іван Куцкір\\nДата випуску: 14 вересня 2013 року","buttonText":"Редагувати фото","tags":["дизайн","фото","інструменти"]},{"id":14,"title":"Notion","url":"https://www.notion.so/","snippet":"Універсальний робочий простір для нотаток, баз даних та керування проєктами.\\nПостачальник: Notion Labs Inc. (Іван Чжао, Саймон Ласт)\\nДата випуску: березень 2016 року","buttonText":"Організувати роботу","tags":["продуктивність","нотатки","робота"]},{"id":15,"title":"Trello","url":"https://trello.com/","snippet":"Популярний інструмент для управління проєктами на основі канбан-дошок.\\nПостачальник: Atlassian (Джоел Спольскі, Майкл Прайор)\\nДата випуску: 13 вересня 2011 року","buttonText":"Керувати завданнями","tags":["продуктивність","менеджмент","робота"]},{"id":16,"title":"GitHub","url":"https://github.com/","snippet":"Найбільший вебсервіс для спільної розробки програмного забезпечення. До речі, ми теж там :)\\nПостачальник: GitHub Inc. / Microsoft\\nДата випуску: 10 квітня 2008 року","buttonText":"Програмувати","tags":["it","програмування","код"]},{"id":17,"title":"Stack Overflow","url":"https://stackoverflow.com/","snippet":"Спільнота для програмістів, де можна знайти відповіді на технічні питання.\\nПостачальник: Stack Exchange Inc. (Джоел Спольскі, Джефф Атвуд)\\nДата випуску: 15 вересня 2008 року","buttonText":"Знайти рішення","tags":["it","програмування","допомога"]},{"id":18,"title":"Wolfram Alpha","url":"https://www.wolframalpha.com/","snippet":"Обчислювальна система, що видає відповіді на складні математичні та наукові питання. Прикольний калькулятор :)\\nПостачальник: Wolfram Research (Стівен Вольфрам)\\nДата випуску: 18 травня 2009 року","buttonText":"Обчислити","tags":["наука","математика","корисно"]},{"id":19,"title":"Google Scholar","url":"https://scholar.google.com/","snippet":"Пошукова система для наукової літератури та публікацій.\\nПостачальник: Google / Alphabet Inc. (Анураг Ачар'я)\\nДата випуску: 20 листопада 2004 року","buttonText":"Шукати статті","tags":["наука","освіта","пошук"]},{"id":20,"title":"TED","url":"https://www.ted.com/","snippet":"Відеолекції від видатних людей на теми технологій, розваг та дизайну.\\nПочатковий власник: Річард Сол Вурмен та Гаррі Маркс\\nПочатковий автор: TED Conferences LLC / Sapling Foundation (Кріс Андерсон)\\nДата випуску: 23 лютого 1984 року","buttonText":"Дивитись лекції","tags":["освіта","відео","натхнення"]},{"id":21,"title":"Internet Archive","url":"https://archive.org/","snippet":"Некомерційна бібліотека мільйонів безкоштовних книг, фільмів, програм та історії вебсайтів (Wayback Machine).\\nПостачальник: Брюстер Кейл\\nДата випуску: 10 травня 1996 року","buttonText":"Шукати в архіві","tags":["історія","архів","книги"]},{"id":22,"title":"Khan Academy","url":"https://uk.khanacademy.org/","snippet":"Безкоштовні мікролекції з математики, історії, медицини тощо.\\nПостачальник: Салман Хан (Salman Khan)\\nДата випуску: вересень 2006 року","buttonText":"Навчатися","tags":["освіта","школа","корисно"]},{"id":23,"title":"W3Schools","url":"https://www.w3schools.com/","snippet":"Найбільший вебсайт для вивчення веб-технологій (HTML, CSS, JavaScript).\\nПостачальник: Refsnes Data\\nДата випуску: 1998 рік","buttonText":"Вчити код","tags":["it","програмування","навчання"]},{"id":24,"title":"Figma","url":"https://www.figma.com/","snippet":"Онлайн-редактор для створення інтерфейсів та прототипування.\\nУлюблений інструмент дизайнерів (і ні, це не те, про що ви подумали за першими трьома буквами :)\\nПостачальник: Ділан Філд та Еван Воллес (Dylan Field, Evan Wallace)\\nДата випуску: 27 вересня 2016 року","buttonText":"Створювати дизайн","tags":["дизайн","інструменти","it"]},{"id":25,"title":"Miro","url":"https://miro.com/","snippet":"Віртуальна дошка для спільної роботи команд, мозкових штурмів та схем.\\nПостачальник: Андрій Хусид та Олег Шардин\\nДата випуску: 2011 рік","buttonText":"Малювати схеми","tags":["продуктивність","робота","інструменти"]},{"id":26,"title":"Grammarly","url":"https://www.grammarly.com/","snippet":"Онлайн-сервіс для перевірки граматики та стилістики текстів (англійською).\\nПостачальник: Олексій Шевченко, Макс Литвин, Дмитро Лідер\\nДата випуску: 1 липня 2009 року","buttonText":"Перевірити текст","tags":["інструменти","письмо","англійська"]},{"id":27,"title":"Todoist","url":"https://todoist.com/","snippet":"Один із найкращих додатків для ведення списків справ (To-Do list).\\nПостачальник: Doist Ltd. (Amir Salihefendıć)\\nДата випуску: 1 січня 2007 року","buttonText":"Планувати","tags":["продуктивність","планування","корисно"]},{"id":28,"title":"Flightradar24","url":"https://www.flightradar24.com/","snippet":"Сервіс для відстеження авіаперельотів у реальному часі по всьому світу.\\nПостачальник: Мікаель Робертссон та Олов Ліндберг\\nДата випуску: 2006 рік","buttonText":"Відстежувати літаки","tags":["радар","авіація","мапа"]},{"id":29,"title":"Windy","url":"https://www.windy.com/","snippet":"Інтерактивна мапа погоди, вітру, циклонів та опадів. Ми її використовуємо на сайті, і спробуйте її з нашими інструментами у Стихії!\\nПостачальник: Іво Лукачович\\nДата випуску: листопад 2014 року","buttonText":"Дивитися погоду","tags":["погода","мапа","метеорологія"]},{"id":30,"title":"VirusTotal","url":"https://www.virustotal.com/","snippet":"Безкоштовна перевірка файлів та посилань на віруси понад 70 антивірусами.\\nЩось ковіду не зупинило :(\\nПостачальник: Chronicle / Google\\nДата випуску: червень 2004 року","buttonText":"Перевірити на віруси","tags":["безпека","інструменти","корисно"]},{"id":31,"title":"Speedtest by Ookla","url":"https://www.speedtest.net/","snippet":"Найпопулярніший сервіс для перевірки швидкості інтернет-з'єднання.\\nПостачальник: Ookla LLC / Ziff Davis\\nДата випуску: 2006 рік","buttonText":"Тест швидкості","tags":["інструменти","інтернет","тест"]},{"id":32,"title":"AlternativeTo","url":"https://alternativeto.net/","snippet":"Сайт для пошуку аналогів та альтернатив для будь-якого програмного забезпечення.\\nПостачальник: Ола та Маркус\\nДата випуску: березень 2009 року","buttonText":"Знайти альтернативу","tags":["інструменти","софт","пошук"]},{"id":33,"title":"Unsplash","url":"https://unsplash.com/","snippet":"Величезна бібліотека якісних фотографій, вільних для використання.\\nПостачальник: Unsplash / Getty Images (Мікаель Чо)\\nДата випуску: травень 2013 року","buttonText":"Шукати фото","tags":["фото","дизайн","ресурси"]},{"id":34,"title":"Pixabay","url":"https://pixabay.com/","snippet":"Безкоштовні стокові зображення, векторна графіка та відео. Використуємо їх бібліотеку на сайті!\\nПостачальник: Pixabay / Canva (Ганс Браксмайєр, Саймон Штейнбергер)\\nДата випуску: 24 листопада 2010 року","buttonText":"Знайти медіа","tags":["фото","ресурси","дизайн"]},{"id":35,"title":"Medium","url":"https://medium.com/","snippet":"Платформа для публікації статей та блогів на будь-які теми.\\nПостачальник: A Medium Corporation (Ев Вільямс)\\nДата випуску: 15 серпня 2012 року","buttonText":"Читати статті","tags":["статті","блог","читання"]},{"id":36,"title":"Pinterest","url":"https://www.pinterest.com/","snippet":"Соціальна мережа для пошуку та збереження візуальних ідей.\\nПостачальник: Бен Зільберман, Пол Скіарра, Еван Шарп\\nДата випуску: січень 2010 року","buttonText":"Шукати ідеї","tags":["візуал","натхнення","дизайн"]},{"id":37,"title":"Behance","url":"https://www.behance.net/","snippet":"Платформа від Adobe для демонстрації творчих робіт дизайнерів та ілюстраторів.\\nПостачальник: Adobe Inc. (Матіас Корреа, Скотт Бельські)\\nДата випуску: листопад 2005 року","buttonText":"Дивитися портфоліо","tags":["дизайн","портфоліо","мистецтво"]},{"id":38,"title":"Ninite","url":"https://ninite.com/","snippet":"Інструмент для швидкого та автоматичного встановлення популярних програм на Windows.\\nПостачальник: Патрік Свенсковські та Саша Кузінс\\nДата випуску: жовтень 2009 року","buttonText":"Встановити софт","tags":["інструменти","windows","софт"]},{"id":39,"title":"ProtonMail","url":"https://proton.me/mail","snippet":"Захищена електронна пошта з наскрізним шифруванням, розроблена в Швейцарії.\\nПостачальник: Proton AG (Енді Йєн)\\nДата випуску: 16 травня 2014 року","buttonText":"Створити пошту","tags":["безпека","пошта","приватність"]},{"id":40,"title":"1.1.1.1 (Cloudflare)","url":"https://1.1.1.1/","snippet":"Безпечний та швидкий DNS-сервіс для приватного серфінгу в інтернеті.\\nДоміно намагався заблокувати свій власний секретний сайт через 1.1.1.1, але забув, що цього сайту навіть не існує в природі :)\\nПостачальник: Метью Прінс, Мішель Затлін, Лі Голловей\\nДата випуску: 1 квітня 2018 року","buttonText":"Налаштувати DNS","tags":["безпека","інтернет","інструменти"]},{"id":41,"title":"Google Keep","url":"https://keep.google.com/","snippet":"Швидкий та зручний сервіс для створення коротких нотаток та списків від Google.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 20 березня 2013 року","buttonText":"Створити нотатку","tags":["продуктивність","нотатки","google"]},{"id":42,"title":"Codecademy","url":"https://www.codecademy.com/","snippet":"Інтерактивна платформа для вивчення програмування з нуля.\\nПостачальник: Codecademy / Skillsoft (Зач Сімс, Раян Бубінські)\\nДата випуску: серпень 2011 року","buttonText":"Вчити програмування","tags":["освіта","it","код"]},{"id":43,"title":"MDN Web Docs","url":"https://developer.mozilla.org/","snippet":"Найповніша документація для веброзробників від Mozilla.\\nПостачальник: Mozilla Foundation\\nДата випуску: 15 липня 2005 року","buttonText":"Читати документацію","tags":["it","довідник","web"]},{"id":44,"title":"Pocket","url":"https://getpocket.com/","snippet":"Сервіс для збереження статей, відео та сторінок, щоб прочитати їх пізніше.\\nПостачальник: Mozilla Corporation (Нейт Вайнер)\\nДата випуску: серпень 2007 року","buttonText":"Зберегти на потім","tags":["читання","продуктивність","інструменти"]},{"id":45,"title":"Feedly","url":"https://feedly.com/","snippet":"Агрегатор RSS-стрічок для зручного читання новин з улюблених сайтів.\\nПостачальник: DevHD (Ерван Гранжен)\\nДата випуску: 15 червня 2008 року","buttonText":"Читати новини","tags":["новини","інструменти","інформація"]},{"id":46,"title":"Nova Poshta (Нова Пошта)","url":"https://novaposhta.ua/","snippet":"Офіційний сайт найбільшого логістичного оператора України. Відстеження посилок.\\nПостачальник: В'ячеслав Климов, Володимир Поперешнюк\\nДата випуску: 13 лютого 2001 року","buttonText":"Відстежити посилку","tags":["доставка","сервіс","україна"]},{"id":47,"title":"Rozetka","url":"https://rozetka.com.ua/","snippet":"Найбільший онлайн-ритейлер в Україні: електроніка, одяг, товари для дому.\\nПостачальник: ТОВ «Розетка.УА» (Владислав Чечоткін)\\nДата випуску: 2005 рік","buttonText":"Купувати","tags":["магазин","покупки","україна"]},{"id":48,"title":"Ukr.net","url":"https://www.ukr.net/","snippet":"Популярний український вебпортал, стрічка новин та електронна пошта.\\nПостачальник: ТОВ «Укрнет»\\nДата випуску: 1998 рік","buttonText":"Читати новини","tags":["новини","портал","україна"]},{"id":49,"title":"Google Drive","url":"https://drive.google.com/","snippet":"Хмарне сховище для зберігання файлів та спільної роботи над документами.\\nПостачальник: Google / Alphabet Inc\\nДата випуску: 24 квітня 2012 року","buttonText":"Відкрити диск","tags":["хмара","файли","робота"]},{"id":50,"title":"ChatGPT","url":"https://chat.openai.com/","snippet":"Штучний інтелект для генерації текстів, програмування та відповідей на запитання.\\nПримітка: 13+ з дозволу батьків, 18+ самостійне використання\\nПостачальник: OpenAI\\nДата випуску: 30 листопада 2022 року","buttonText":"Спілкуватися з ШІ","tags":["ші","інструменти","технології"]},{"id":51,"title":"EdEra","url":"https://www.ed-era.com/","snippet":"Студія онлайн-освіти, що створює інтерактивні курси, підручники та спецпроєкти.\\nПостачальник: Ілля Філіпов (EdEra)\\nДата випуску: 2014 рік","buttonText":"Навчатися","tags":["освіта","курси","україна"]},{"id":52,"title":"Boto Sapiens","url":"https://botosapiens.com/","snippet":"Корисні боти та сервіси для автоматизації рутини в Telegram та не тільки.\\nПостачальник: Boto Sapiens Team\\nДата випуску: 2020 рік","buttonText":"Знайти бота","tags":["інструменти","telegram","корисно"]},{"id":53,"title":"Google Translate","url":"https://translate.google.com.ua/","snippet":"Найвідоміший сервіс машинного перекладу для сотень мов світу.\\nНа жаль як і в Дуолінго, проблему Доміно, з розумінням його мови не вирішили :)\\nПостачальник: Google / Alphabet Inc.\\nДата випуску: 28 квітня 2006 року","buttonText":"Перекласти","tags":["переклад","інструменти","мовлення"]},{"id":54,"title":"OpenStreetMap","url":"https://www.openstreetmap.org/","snippet":"Детальна вільна географічна мапа світу, яку створюють користувачі.\\nДоміно: Я впевнений, що це тактика таємних товариств, наспрвді Земля плоска, Стоїть на 3 слонах, і пливе на черепазі(Дивно, я очікував на Ніцероні, хоча якщо подумати. Ніцерон - символ поганої політики людства у мультиплікаційній формі)\\nПостачальник: OpenStreetMap Foundation (Стів Кост)\\nДата випуску: 9 серпня 2004 року","buttonText":"Відкрити мапу","tags":["мапа","географія","навігація"]},{"id":55,"title":"E-Katalog","url":"https://ek.ua/","snippet":"Каталог описів і цін на побутову і комп'ютерну техніку, допомога у виборі.\\nКейт: я хочу собі 17 айфон про макс. Доміно: давай повчишся користуватися дзьобом на нокіа 3310, через 5 років.\\nПостачальник: E-Katalog Ltd.\\nДата випуску: 2001 рік","buttonText":"Порівняти ціни","tags":["покупки","техніка","порівняння"]},{"id":56,"title":"Словко","url":"https://slovko.zaxid.net/","snippet":"Українська версія популярної гри-головоломки Wordle. Відгадайте слово з 5 літер.\\nДоміно: Я відгадав це індик!\\nПостачальник: Zaxid.net / Назарій Захарія\\nДата випуску: січень 2022 року","buttonText":"Грати","tags":["головоломка","слова","логіка"]},{"id":57,"title":"Web Sudoku","url":"https://www.websudoku.com/","snippet":"Мільярди безкоштовних головоломок Судоку різних рівнів складності онлайн.\\nПостачальник: Web Sudoku Ltd (Гідеон та Елізабет Грін)\\nДата випуску: 2005 рік","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":58,"title":"2048","url":"https://play2048.co/","snippet":"Математична головоломка: зсувайте плитки, щоб утворити число 2048.\\nПостачальник: Габріеле Чіруллі (Gabriele Cirulli)\\nДата випуску: 9 березня 2014 року","buttonText":"Грати","tags":["головоломка","математика","логіка"]},{"id":59,"title":"Lichess","url":"https://lichess.org/","snippet":"Безкоштовна платформа для гри в шахи та розв'язання шахових задач-головоломок.\\nНагадайте: Пішка переміщується по будь якій клітинці як хоче? :)\\nПостачальник: Тібо Дюплессі (Thibault Duplessis)\\nДата випуску: 20 червня 2010 року","buttonText":"Розв'язувати задачі","tags":["головоломка","шахи","логіка"]},{"id":60,"title":"Nonograms.org","url":"https://www.nonograms.org/","snippet":"Японські кросворди (нонограми) — малювання картинок за допомогою чисел.\\nПостачальник: Олег Каштелян\\nДата випуску: 2012 рік","buttonText":"Грати","tags":["головоломка","нонограми","логіка"]},{"id":61,"title":"The New York Times Crossword","url":"https://www.nytimes.com/crosswords","snippet":"Легендарні англомовні кросворди та міні-головоломки щодня.\\nПостачальник: The New York Times Company (Віл Шортс)\\nДата випуску: 15 лютого 1942 року","buttonText":"Розв'язувати","tags":["головоломка","кросворд","слова"]},{"id":62,"title":"Jigsaw Planet","url":"https://www.jigsawplanet.com/","snippet":"Збирайте класичні пазли з тисяч безкоштовних картинок онлайн.\\nПостачальник: Critical Hit Software\\nДата випуску: 2007 рік","buttonText":"Збирати пазли","tags":["головоломка","пазли","відпочинок"]},{"id":63,"title":"Monument Valley","url":"https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley","snippet":"Естетична просторова головоломка про неможливу архітектуру та оптичні ілюзії.\\nПостачальник: ustwo games\\nДата випуску: 3 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","архітектура","інді"]},{"id":64,"title":"The Room","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=h-NdQSeTPfA","snippet":"Ласкаво просимо до Кімнати, фізичної головоломки, загорнутої в таємничу гру, всередині прекрасного тактильного 3D-світу.\\n*****************\\nЯк справи, старий друже? Якщо ти це читаєш, значить, це спрацювало. Сподіваюся, ти все ще можеш мені пробачити.\\nМи ніколи не йшли точкою зору щодо моїх досліджень, але ти мусиш залишити такі речі позаду. Ти єдиний, до кого я можу звернутися. Ти мусиш прийти негайно, бо ми всі у великій небезпеці. Сподіваюся, ти пам'ятаєш будинок? Мій кабінет — найвища кімната.\\nРухайся вперед з душею. Тепер шляху назад немає.\\nЯК.\\n******\\nFireproof Games дуже пишається тим, що представляє вам наше найкраще творіння, захопливу подорож, сповнену краси, небезпеки та таємниці в рівній мірі. Перенесіть себе в унікальний простір, який поєднує захоплюючі візуальні ефекти з інтригуючими проблемами, які потрібно вирішити.\\n• Тривожно реалістична графіка: яскраві візуальні ефекти з природним виглядом, вдосконалені для мобільних дисплеїв.\\n• Моторошне керування одним пальцем: сенсорне керування настільки природне, що ви можете грати однією пальцем, щоб повністю орієнтуватися в цьому таємниче красивому 3D-світі.\\n• Фантастичний дизайн, що дозволяє швидко почати грати: легко почати, важко відірватися, таємниці Кімнати занурять вас ще до того, як ви усвідомите, що граєте.\\n• Захопливі шари таємниці: думаєте, що знаєте, на що дивитеся? Подумайте ще раз.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":65,"title":"Brain It On!","url":"https://play.google.com/store/apps/details?id=com.orbital.brainiton","snippet":"Фізичні головоломки, де треба малювати фігури для вирішення завдань.\\nПостачальник: Orbital Nine Games\\nДата випуску: 15 жовтня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","логіка"]},{"id":67,"title":"Where's My Water?","url":"https://play.google.com/store/apps/details?id=com.disney.WMW","snippet":"Прокладайте шлях воді крізь землю, щоб крокодил Свомпі зміг прийняти душ.\\nДоміно: Я тоді через страх крокодилів, на Марсі(чи куди зараз як найдалі можна) пограю в індика. (Це те саме що гра в крокодила, просто для тих хто їх боїться)\\nПостачальник: Disney Interactive\\nДата випуску: 22 вересня 2011 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","disney"]},{"id":68,"title":"Threes!","url":"https://play.google.com/store/apps/details?id=vo.threes.exclaim","snippet":"Елегантна гра-головоломка, де потрібно з'єднувати плитки, кратні трьом.\\nПостачальник: Sirvo / Asher Vollmer\\nДата випуску: 6 лютого 2014 року","buttonText":"Завантажити гру","tags":["головоломка","числа","логіка"]},{"id":69,"title":"Baba Is You","url":"https://store.steampowered.com/app/736260/Baba_Is_You/","snippet":"Геніальна гра, де ви змінюєте самі правила гри, пересуваючи блоки зі словами.\\nПостачальник: Arvi Teikari (Hempuli)\\nДата випуску: 13 березня 2019 року","buttonText":"Дивитися в Steam","tags":["головоломка","логіка","інді"]},{"id":70,"title":"Mini Metro","url":"https://play.google.com/store/apps/details?id=nz.co.codepoint.minimetro","snippet":"Головоломка-симулятор: проєктуйте лінії метро для міста, що постійно зростає.\\nПостачальник: Dinosaur Polo Club\\nДата випуску: 11 серпня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","симулятор","мінімалізм"]},{"id":72,"title":"Portal 2","url":"https://store.steampowered.com/app/620/Portal_2/","snippet":"Культова просторова головоломка від першої особи з портальною гарматою.\\nПостачальник: Valve Corporation\\nДата випуску: 18 квітня 2011 року","buttonText":"Дивитися в Steam","tags":["головоломка","портали","шедевр"]},{"id":73,"title":"The Witness","url":"https://store.steampowered.com/app/210970/The_Witness/","snippet":"Досліджуйте таємничий острів і розв'язуйте сотні складних лабіринтних головоломок.\\nПостачальник: Thekla, Inc. (Jonathan Blow)\\nДата випуску: 26 січня 2016 року","buttonText":"Дивитися в Steam","tags":["головоломка","відкритий_світ","логіка"]},{"id":74,"title":"Braid","url":"https://store.steampowered.com/app/26800/Braid/","snippet":"Платформер-головоломка, де маніпуляції з часом є ключем до вирішення завдань.\\nПостачальник: Number None (Jonathan Blow)\\nДата випуску: 6 серпня 2008 року","buttonText":"Дивитися в Steam","tags":["головоломка","час","інді"]},{"id":75,"title":"Tetris","url":"https://tetris.com/play-tetris","snippet":"Офіційна онлайн-версія найвідомішої у світі гри-головоломки з падаючими блоками.\\nПостачальник: The Tetris Company (Олексій Пажитнов)\\nДата випуску: 6 червня 1984 року","buttonText":"Грати в Tetris","tags":["головоломка","тетріс","класика"]},{"id":76,"title":"Minesweeper Online","url":"https://minesweeperonline.com/","snippet":"Класичний «Сапер» — відкривайте клітинки, спираючись на логіку та числа мін довкола.\\nПостачальник: Microsoft / Роберт Доннер та Курт Джонсон\\nДата випуску: 8 жовтня 1990 року","buttonText":"Грати","tags":["головоломка","сапер","логіка"]},{"id":77,"title":"Flow Free","url":"https://play.google.com/store/apps/details?id=com.bigduckgames.flow","snippet":"З'єднайте крапки однакового кольору лініями, щоб заповнити все ігрове поле.\\nПостачальник: Big Duck Games\\nДата випуску: 7 червня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","лінії","кольори"]},{"id":78,"title":"Monument Valley 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":79,"title":"Bejeweled Classic","url":"https://play.google.com/store/apps/details?id=com.ea.gp.bej3","snippet":"Класична гра зіставлення дорогоцінних каменів, що породила жанр «три в ряд».\\nПостачальник: PopCap Games / EA (Джейсон Капалка)\\nДата випуску: 30 травня 2001 року","buttonText":"Завантажити гру","tags":["головоломка","три_в_ряд","класика"]},{"id":80,"title":"Two Dots","url":"https://play.google.com/store/apps/details?id=com.weplaydots.twodotsandroid","snippet":"Мінімалістична та стильна гра про з'єднання точок одного кольору.\\nПостачальник: Playdots, Inc. / Take-Two Interactive\\nДата випуску: 29 травня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","точки","дизайн"]},{"id":81,"title":"Monument Valley 3","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":82,"title":"Kami 2","url":"https://play.google.com/store/apps/details?id=com.stateofplaygames.kami2","snippet":"Захоплююча головоломка з паперовим дизайном, де треба зафарбувати екран одним кольором за мінімум кроків.\\nПостачальник: State of Play Games\\nДата випуску: 30 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","орігамі","логіка"]},{"id":83,"title":"Unblock Me","url":"https://play.google.com/store/apps/details?id=com.kiragames.unblockmefree","snippet":"Проста, але складна гра з блоками — виведіть червоний блок з дошки, пересуваючи інші.\\nПостачальник: Kiragames\\nДата випуску: 25 квітня 2009 року","buttonText":"Завантажити гру","tags":["головоломка","блоки","логіка"]},{"id":84,"title":"Roll the Ball","url":"https://play.google.com/store/apps/details?id=com.bitmango.go.rolltheballunrollme","snippet":"Слайд-головоломка: пересувайте блоки, щоб створити шлях для кульки до фінішу.\\nПостачальник: BitMango\\nДата випуску: 20 квітня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","труби","логіка"]},{"id":85,"title":"Infinity Loop","url":"https://play.google.com/store/apps/details?id=com.balysv.loop","snippet":"Розслаблююча гра, де ви обертаєте фрагменти, створюючи нескінченні візерунки.\\nПостачальник: Infinity Games (Balys Valentukevicius)\\nДата випуску: 17 березня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","релакс","візерунки"]},{"id":86,"title":"Water Sort Puzzle","url":"https://play.google.com/store/apps/details?id=com.gma.water.sort.puzzle","snippet":"Сортуйте кольорову воду у склянках так, щоб кожна склянка містила лише один колір.\\nПостачальник: IEC Global / GMA Games\\nДата випуску: 28 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","сортування","логіка"]},{"id":87,"title":"Happy Glass","url":"https://play.google.com/store/apps/details?id=com.game5mobile.lineandwater","snippet":"Малюйте лінії, щоб спрямувати воду і наповнити сумну склянку, зробивши її щасливою.\\nПостачальник: Lion Studios / Game5Mobile\\nДата випуску: 9 серпня 2018 року","buttonText":"Завантажити гру","tags":["головоломка","фізика","малювання"]},{"id":88,"title":"Brain Out","url":"https://play.google.com/store/apps/details?id=com.mind.quiz.brain.out","snippet":"Гра на нестандартне мислення з купою підступних запитань і задач (trick puzzles).\\nПостачальник: Focus Apps / Eyewind\\nДата випуску: 28 серпня 2019 року","buttonText":"Завантажити гру","tags":["головоломка","хитрощі","IQ"]},{"id":89,"title":"Mekorama","url":"https://play.google.com/store/apps/details?id=com.martinmagni.mekorama","snippet":"Проведіть маленького робота через красиві механічні діорами, вирішуючи просторові загадки.\\nПостачальник: Мартин Магні (Martin Magni)\\nДата випуску: 14 лютого 2016 року","buttonText":"Завантажити гру","tags":["головоломка","роботи","3D"]},{"id":90,"title":"Lara Croft GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.lcgo","snippet":"Покрокова головоломка-пригода у світі Tomb Raider з чудовим візуалом.\\nПостачальник: Square Enix Montréal\\nДата випуску: 27 серпня 2015 року","buttonText":"Завантажити гру","tags":["головоломка","пригоди","покрокова"]},{"id":91,"title":"Hitman GO","url":"https://play.google.com/store/apps/details?id=com.squareenixmontreal.hitmango","snippet":"Стилізована під настільну гру покрокова стратегія-головоломка зі стелс-елементами.\\nПостачальник: Square Enix Montréal\\nДата випуску: 17 квітня 2014 року","buttonText":"Завантажити гру","tags":["головоломка","стелс","тактика"]},{"id":93,"title":"The Talos Principle","url":"https://store.steampowered.com/app/257510/The_Talos_Principle/","snippet":"Глибока філософська гра-головоломка від першої особи, де ви вирішуєте завдання зі світлом та лазерами.\\nПостачальник: Croteam / Devolver Digital\\nДата випуску: 11 грудня 2014 року","buttonText":"Дивитися в Steam","tags":["головоломка","філософія","sci-fi"]},{"id":95,"title":"Myst","url":"https://store.steampowered.com/app/1255560/Myst/","snippet":"Класична пригодницька головоломка, де вам потрібно розгадати таємниці загадкового острова.\\nПостачальник: Cyan Worlds (Робін та Ренд Міллер)\\nДата випуску: 24 вересня 1993 року","buttonText":"Дивитися в Steam","tags":["головоломка","квест","класика"]},{"id":96,"title":"Wordscapes","url":"https://play.google.com/store/apps/details?id=com.peoplefun.wordcross","snippet":"Головоломка зі словами, яка поєднує пошук слів та кросворд.\\nПостачальник: PeopleFun\\nДата випуску: 19 червня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","слова","кросворд"]},{"id":97,"title":"CodyCross","url":"https://play.google.com/store/apps/details?id=com.fanatee.cody","snippet":"Новий погляд на кросворди з цікавими фактами та гарним дизайном.\\nПостачальник: Fanatee Games\\nДата випуску: 8 березня 2017 року","buttonText":"Завантажити гру","tags":["головоломка","кросворд","ерудиція"]},{"id":98,"title":"Darkness and Flame 3: The Dark Side","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":99,"title":"100 Doors Games: Escape from School","url":"https://play.google.com/store/apps/details?id=com.Peaksel.OneHundredDoorsGamesEscapeFromSchool","snippet":"Розв'яжіть головоломку кожної кімнати, щоб знайти прихований ключ та відкрити двері.\\nПостачальник: Peaksel\\nДата випуску: 16 березня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","втеча","двері"]},{"id":100,"title":"Tangle Master 3D","url":"https://play.google.com/store/apps/details?id=com.zynga.tangle","snippet":"Просторова головоломка, у якій потрібно розплутати вузли та мотузки.\\nПостачальник: Rollic Games / Zynga\\nДата випуску: 1 червня 2020 року","buttonText":"Завантажити гру","tags":["головоломка","вузли","3D"]},{"id":101,"title":"Block Puzzle","url":"https://play.google.com/store/apps/details?id=block.puzzle.game.tetris.classic","snippet":"Класична головоломка з дерев'яними блоками в стилі тетріс, без обмежень у часі.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","блоки","релакс"]},{"id":102,"title":"Sudoku.com","url":"https://sudoku.com/uk","snippet":"Один з найпопулярніших сайтів та додатків для вирішення класичного судоку з підказками.\\nПостачальник: Uanet / Gismeteo","buttonText":"Грати в Судоку","tags":["головоломка","судоку","логіка"]},{"id":103,"title":"Mahjong Solitaire","url":"https://play.google.com/store/apps/details?id=com.mobilityware.MahjongSolitaire","snippet":"Класична головоломка на зіставлення однакових плиток маджонгу, щоб очистити дошку.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","маджонг","настільна"]},{"id":104,"title":"Darkness and Flame 4: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":105,"title":"Knotwords","url":"https://play.google.com/store/apps/details?id=com.noodlecake.knotwords","snippet":"Унікальна комбінація судоку та кросворда, де літери розташовані в блоках.\\nПостачальник: Uanet / Gismeteo","buttonText":"Завантажити гру","tags":["головоломка","слова","логіка"]},{"id":106,"title":"Lost Lands 1: Dark Overlord","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands1.free","snippet":"Щось потягло вашого сина в портал! Рушайте на його пошуки в повні загадок Загублені Землі!\\nЗагублені Землі. Темний Владика - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про незвичайний фентезійний світ, повний незвіданих куточків і таємничих мешканців.\\nМолода мати з сином збиралися їхати з літнього будиночка в лісі. Сьюзан всього на секунду відволіклася на телефонний дзвінок. Тим часом її син, який грав неподалік, почув дивні голоси і відправився шукати джерело звуку. Коли Сьюзан помітила що відбувається, Джиммі вже затягувало в портал. Тепер Сьюзан необхідно знайти прохід в цей дивовижний світ і відшукати сина. Все виявиться набагато складніше і небезпечніше, ніж вона могла припустити. На своєму шляху Сьюзан зіткнеться з безліччю загадок і головоломок, зустріне незвичайних мешканців Загублених Земель, також їй будуть протистояти сили зла. Щоб повернути Джиммі їй доведеться перемогти Темного Владику, який тримає в страху весь світ!\\nЧи зможе відчайдушна мати врятувати сина і звільнити цілий світ від зла?\\nПостачальник: 5bn games\\nДата випуску: 24 вер. 2018 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":107,"title":"Lost Lands 2: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":108,"title":"Darkness and Flame 1: Born of Fire","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf1.free","snippet":"Незвичайна знахідка змінює життя дівчини. З цієї миті Еліс долучається до вічної боротьби Темряви та Полум'я і повинна врятувати свій фентезійний світ від знищення.\\nТемрява та полум'я: Породжений вогнем – пригодницька гра-квест із пошуком предметів, міні-іграми й замороками, що розповідає про незвичайний фентезійний світ – Родючі землі – оазиси у нескінченних пустелях.\\nМолода дівчина Еліс знайшла дивну скриньку з яйцем, з якого з'явився вогненний птах і, ніби, вселився в дівчину, залишивши випалений малюнок на руці, сама ж дівчина при цьому посивіла. Із цієї миті Еліс стає залученою у вічну боротьбу Темряви й Полум'я. За дівчиною почалося полювання – невідомі солдати розшукували її, батько зміг уберегти Еліс від них, але це коштувало йому життя. Дівчині довелося покинути свій будинок і відправитися до єдиної рідної людини – дядька, про існування якого вона тільки що довідалася. Разом їм треба буде пройти безліч випробувань у різних куточках Родючих Земель, зустрітися з незвичайними народами й расами, уникнути небезпеки, що наближається, розв'язати безліч заморок і зіштовхнутися з великим злом, що загрожує всьому їх фентезійному світу. Чи зможе Еліс приборкати силу полум'я, даровану їй долею, і врятувати свої землі від перетворення в пустелю смерті?\\n• Пориньте в дивну пригоду у фентезійному світі\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч заморок\\n• Приборкайте силу Полум'я\\n• Врятуйте мир від нищівної для всього живого погрози\\nДосліджуйте більш за 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігр\\nВиявіть кмітливість в інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення\\nЦя гра оптимізована для планшетів та телефонів!\\n+++ Відкрийте для себе ще більше ігор від FIVE-BN GAMES! +++\\nWWW: https://fivebngames.com/\\nFACEBOOK: https://www.facebook.com/fivebn/\\nTWITTER: https://twitter.com/fivebngames\\nYOUTUBE: https://youtube.com/fivebn\\nPINTEREST: https://pinterest.com/five_bn/\\nINSTAGRAM: https://www.instagram.com/five_bn/\\nПостачальник: 5bn games\\nДата випуску:12 квіт. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":109,"title":"Darkness and Flame 2: Missing Memories","url":"https://play.google.com/store/apps/details?id=com.fivebn.daf2.free","snippet":"Відповіді на головні питання завжди зберігаються у самих потаємних куточках нашої пам'яті…\\nЧи допоможе Еліс відновити втрачені спогади свого дядька? І чи впорається юна дівчина із силою полум'я, що вибрала її своїм провідником у світі, якому загрожує небезпека?\\nЗ найперших хвилин пригодницька квест-гра 'Темрява та полум'я: Втрачені спогади' закрутить вас у вирі подій, а міні-ігри й сцени з пошуком предметів не залишать байдужими навіть самих досвідчених гравців!\\nЗненацька молода дівчина Еліс стає залученою у боротьбу між Темрявою й Полум'ям.\\nРазом зі своїм дядьком Еліс змушена відправитися в подорож, повну погроз і несподіваних зустрічей. Увесь цей час дядька Еліс, Коліна, тривожать нічні кошмари, у яких смутно знайома йому жінка молить його про допомогу. Хто ж вона?..\\nАле пам'ять Коліна майже не зберігає спогадів про його дитинство і юності. Усе тому, що у свій час він потрапив у число нещасних, чия свідомість виявилася затуманена Темрявою. На щастя, Коліна змогли вирвати з її чіпкої хватки, але за своє звільнення він розплатився більшістю своїх спогадів.\\nТепер, щоб відновити його пам'ять, ці двоє змушені відправитися в саме серце пустелі, де, говорять, проживає відлюдник, здатний повертати втрачені спогади.\\nЕліс і Коліну доведеться подолати довгий шлях, повний перешкод, і зустрітися віч-на-віч із величезною армією, очолюваною Темним Лицарем. Чи випаде їм шанс перемогти темні сили раз і назавжди?..\\n• Відправтеся в дивну пригоду в постапокаліптичний, але прекрасний світ\\n• Познайомтеся з різними народами Родючих Земель\\n• Розгадайте безліч головоломок\\n• Приборкайте силу Полум'я\\n• Урятуйте світ від загрози, що нищить усе живе\\nДосліджуйте більш 50 приголомшливих локацій\\nПройдіть понад 40 різноманітних міні-ігор\\nПроявить кмітливість у інтерактивних сценах з пошуком предметів\\nЗбирайте колекції, морфінг-об'єкти, отримуйте досягнення!\\nЦя гра оптимізована для планшетів та телефонів\\nПостачальник: 5bn games\\nДата випуску: 3 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":110,"title":"The Legacy 1: Realm of Retribution","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl1.free","snippet":"Детективний квест-головоломка від 5BN: розгадайте таємницю старовинного майяського артефакту в музеї.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":111,"title":"The Legacy 2: Prisoner","url":"https://play.google.com/store/apps/details?id=com.fivebn.tl2.free","snippet":"Пошук зниклого музейного експоната приводить у зовсім інший світ! Захоплююча подорож в атмосфері прадавньої цивілізації.\\n'Спадщина: Бранець' – пригодницька гра в жанрі 'Пошук предметів', з величезним числом захоплюючих міні-ігор і головоломок, яка захопить вас у незвіданий світ і закрутить у вирі подій!\\nПобачивши силует, що ховається вдалечині, охоронця, який несе найрідший бюст представника цивілізації майя, Діана, молода співробітниця історичного музею, ринулася слідом. У результаті погоні події пішли зовсім не за планом! Дівчина - уже не вперше - виявляється в іншому світі. І шлях назад закритий!.. Довідайтеся, хто допоможе Діані впоратися з усіма випробуваннями, що випали на її долю. Пройдіть із ними весь шлях до кінця! Щоб урятувати в'язня прадавнього храму й вибратися з далекого світу додому, Діані доведеться виконати ряд небезпечних завдань, дослідити храми й підземелля, провести прадавні ритуали й знайти несподіваних друзів, готових прийти їй на допомогу! Вас чекає незабутня подорож!\\nДопоможіть Діані подолати труднощі й знайти вірну дорогу додому!\\nВідкрийте для себе новий, загадковий світ і його мешканців!\\nВипробуйте себе в більш ніж 40 міні-іграх і головоломках.\\nЗберіть безліч колекцій і відшукайте десятки морфінг-об'єктів.\\nНасолоджуйтеся приголомшливими локаціями, чудовою графікою й відмінною музикою.\\nДата випуску: 20 трав. 2019 р.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","містика"]},{"id":112,"title":"New York Mysteries 1: Secrets of the Mafia","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym1.free","snippet":"Смілива журналістка, Лора Джеймс, починає власне розслідування таємничих зникнень босів мафії та пропажі дітей, що послідувала за ними.\\nЗагадки Нью-Йорка. Секрети Мафії – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, що розповідає про містичне детективне розслідування, мафіозні таємниці й загадках Нью-Йорка.\\nНью-Йорк, 1955 рік. У місті стало небезпечно. Мафія намагається захопити владу. Але віднедавна з'явилася нова сила. І вона на багато страшніша. За останні дні, п'ять мафіозних босів зникли при загадкових обставинах. На місцях зникнення знаходили лише дивну рідину й метелика. Але не це налякало жителів... У місті стали зникати діти. Усі вони намалювали таких самих метеликів перед зникненням. Лора Джеймс, журналіст «Дейлі Ньюз», починає власне розслідування. Які похмурі таємниці приховують тунелі метро під містом? Чи зможе героїня здолати усі перешкоди та врятувати зниклих.\\nПостачальник: 5bn games\\nДата випуску:24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":113,"title":"New York Mysteries 2: High Voltage","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym2.free","snippet":"Розслідуйте серію дивних убивств у Нью-Йорку, пов'язаних із загадковими електричними аномаліями.\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":114,"title":"New York Mysteries 3: The Lantern of Souls","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym3.free","snippet":"Журналістка Лора Джеймс залучається до розслідування чергового вбивства. Однак звичайна, на перший погляд, справа починає набирати небезпечних обертів.\\nЗагадки Нью-Йорка. Ліхтар душ – пригодницька гра-квест з пошуком предметів, міні-іграми й головоломками, що розповідає про нове, небезпечне, містичне детективне розслідування сміливого журналіста Лори Джеймс.\\nНовий епізод жахливої саги переносить вас у Нью-Йорк кінця 50-х років. У заміському маєтку відбувається жорстоке вбивство вдови впливового адвоката. За завданням таємного ордену журналіст газети «Дейлі Ньюз» Лора Джеймс їде на місце злочину. На перший погляд, все виглядає як звичайний розбійний напад. Однак, обшук у будинку загиблої дає несподіваний результат. Небезпека підстерігає героїню на кожному кроці. Хитромудрі пастки і головоломки, таємниці з минулого й містична Темрява, що охопила місто. Чи зможе героїня опанувати те, що відбувається, і врятувати не тільки Нью-Йорк, але і весь світ від катастрофи, що наближається?\\nПостачальник: 5bn games\\nДата випуску:29 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":116,"title":"New York Mysteries 5: Power of Art","url":"https://play.google.com/store/apps/details?id=com.fivebn.nym5.free","snippet":"Викрадені картини оживають: розгадайте таємницю магічного мистецтва у новій частині серії від 5BN. (Поки що остання...)\\nПостачальник: 5bn games","buttonText":"Завантажити гру","tags":["головоломка","детектив","5bn","квест"]},{"id":117,"title":"Tricky Doors","url":"https://play.google.com/store/apps/details?id=com.fivebn.trickydoors","snippet":"Атмосферна гра-головоломка від 5BN Games у жанрі «втеча з кімнати» з різноманітними світами, захоплюючими схованками та складними міні-іграми.","buttonText":"Завантажити гру","tags":["головоломка","втеча","5bn","квест"]},{"id":118,"title":"Tiny Room Stories: Town Mystery","url":"https://play.google.com/store/apps/details?id=com.DrunkData.TinyRoom","snippet":"Чудова 3D-головоломка в стилі «втеча з кімнати»: повертайте деталізовані рівні для пошуку підказок.","buttonText":"Завантажити гру","tags":["головоломка","детектив","3d","втеча"]},{"id":120,"title":"Coolors","url":"https://coolors.co/","snippet":"Сучасний та супершвидкий генератор колірних палітр для розробників і дизайнерів з можливістю підбору гармонійних поєднань та експорту в CSS або SVG.","buttonText":"Згенерувати палітру","tags":["дизайн","інструменти","палітра","веб"]},{"id":121,"title":"Agent A: A puzzle in disguise","url":"https://play.google.com/store/apps/details?id=com.yakandco.agenta","snippet":"Шпигунська головоломка у стилі 60-х: проникніть у таємне лігво ворожого агента і знешкодьте пастки.","buttonText":"Завантажити гру","tags":["головоломка","шпигуни","квест","стиль"]},{"id":122,"title":"Adventure Escape Mysteries","url":"https://play.google.com/store/apps/details?id=com.haiku.adventure.escape.mysteries","snippet":"Збірник інтерактивних детективних історій та головоломок від Haiku Games.","buttonText":"Завантажити гру","tags":["головоломка","детектив","квест","історія"]},{"id":123,"title":"Spot the Difference: Find 5","url":"https://play.google.com/store/apps/details?id=com.easybrain.find.differences","snippet":"Класична головоломка на уважність: знайдіть усі відмінності між двома схожими картинками.","buttonText":"Завантажити гру","tags":["головоломка","уважність","пошук"]},{"id":124,"title":"Sudoku - Brain Puzzle Games","url":"https://play.google.com/store/apps/details?id=com.easybrain.sudoku.android","snippet":"Один із найзручніших мобільних додатків для вирішення класичних судоку будь-якої складності.","buttonText":"Завантажити гру","tags":["головоломка","судоку","числа"]},{"id":125,"title":"Nonogram.com - Picture Cross","url":"https://play.google.com/store/apps/details?id=com.easybrain.nonogram","snippet":"Японські кросворди: розгадуйте зашифровані картинки за допомогою логічних підказок.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","числа"]},{"id":126,"title":"Brain Test: Tricky Puzzles","url":"https://play.google.com/store/apps/details?id=com.unicostudio.braintest","snippet":"Захоплююча головоломка з хитрими завданнями та кумедними нестандартними рішеннями.","buttonText":"Завантажити гру","tags":["головоломка","гумор","iq"]},{"id":127,"title":"Rube's Lab - Physics Puzzle","url":"https://play.google.com/store/apps/details?id=com.bouland.rubeslab","snippet":"Фізична головоломка в стилі машин Руба Ґолдберга: будуйте ланцюгові реакції.","buttonText":"Завантажити гру","tags":["головоломка","фізика","механізми"]},{"id":128,"title":"Human Resource Machine","url":"https://play.google.com/store/apps/details?id=com.tomorrowcorporation.humanresourcemachine","snippet":"Весела головоломка, яка навчає базовим принципам програмування через офісну рутину.","buttonText":"Завантажити гру","tags":["головоломка","програмування","код"]},{"id":129,"title":"Bridge Constructor","url":"https://play.google.com/store/apps/details?id=com.headupgames.bridgeconstructor","snippet":"Станьте інженером: будуйте мости через прірви та перевіряйте їх на міцність.","buttonText":"Завантажити гру","tags":["головоломка","будівництво","фізика"]},{"id":130,"title":"Shadowmatic","url":"https://play.google.com/store/apps/details?id=com.triadaal.shadowmatic","snippet":"Оскароносна головоломка: повертайте абстрактні предмети в променях світла, щоб отримати тінь.","buttonText":"Завантажити гру","tags":["головоломка","3d","тіні","релакс"]},{"id":131,"title":"Unpacking","url":"https://play.google.com/store/apps/details?id=com.humblebundle.unpacking","snippet":"Затишна медитативна головоломка про розпакування коробки та облаштування будинку.","buttonText":"Завантажити гру","tags":["головоломка","затишок","релакс"]},{"id":132,"title":"Layovers: World Map Puzzle","url":"https://geoguessr.com/","snippet":"Перевірте свої географічні знання у формі візуальних загадок та інтерактивних мап.","buttonText":"Грати онлайн","tags":["головоломка","географія","знання"]},{"id":133,"title":"Worldle","url":"https://worldle.teuteuf.fr/","snippet":"Щоденна географічна головоломка: вгадайте країну за її контуром та відстанями.","buttonText":"Грати онлайн","tags":["головоломка","географія","слова"]},{"id":134,"title":"Wordle - Official NYT","url":"https://www.nytimes.com/games/wordle/index.html","snippet":"Оригінальна всесвітньо відома гра: вгадайте англійське слово з 5 літер за 6 спроб.","buttonText":"Грати онлайн","tags":["головоломка","слова","англійська"]},{"id":135,"title":"Picross LUNA","url":"https://play.google.com/store/apps/details?id=com.Floralmind.PicrossLuna","snippet":"Атмосферні та казкові японські кросворди зі зворушливою історією та чудовою музикою.","buttonText":"Завантажити гру","tags":["головоломка","нонограми","казка"]},{"id":136,"title":"Remove.bg","url":"https://www.remove.bg/","snippet":"Безкоштовний онлайн-інструмент для автоматичного видалення фону з будь-якого фото за 5 секунд.","buttonText":"Видалити фон","tags":["інструменти","фото","дизайн"]},{"id":137,"title":"ILovePDF","url":"https://www.ilovepdf.com/uk","snippet":"Повний набір безкоштовних інструментів для роботи з PDF: об'єднання, стиснення, конвертація.","buttonText":"Працювати з PDF","tags":["інструменти","документи","pdf"]},{"id":138,"title":"TinyPNG","url":"https://tinypng.com/","snippet":"Розумне стиснення зображень форматів WEBP, PNG та JPEG без втрати якості.","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":139,"title":"FixMySpeakers","url":"https://fixmyspeakers.com/","snippet":"Відтворює спеціальний звук конкретної частоти, щоб виштовхнути воду з динаміка вашого смартфона.","buttonText":"Очистити динамік","tags":["інструменти","смартфон","звук"]},{"id":140,"title":"Radio Garden","url":"http://radio.garden/","snippet":"Інтерактивний 3D-глобус, який дозволяє слухати тисячі прямих трансляцій радіостанцій по всьому світу.","buttonText":"Слухати радіо","tags":["музика","мапа","радіо"]},{"id":141,"title":"MyRetroTVs","url":"https://www.myretrotvs.com/","snippet":"Віртуальний телевізор, який транслює справжні відеоролики, телешоу та рекламу 60-х, 70-х, 80-х чи 90-х років.","buttonText":"Ввімкнути ТВ","tags":["ностальгія","відео","історія"]},{"id":142,"title":"PDF2Go","url":"https://www.pdf2go.com/uk","snippet":"Онлайн-редактор та конвертер PDF-файлів прямо у вашому браузері.","buttonText":"Редагувати PDF","tags":["інструменти","pdf","документи"]},{"id":143,"title":"MyHeritage Deep Nostalgia","url":"https://www.myheritage.com/deep-nostalgia","snippet":"Сервіс на основі штучного інтелекту, який оживляє обличчя на старих архівних фотографіях.","buttonText":"Оживити фото","tags":["ші","фото","історія"]},{"id":144,"title":"Have I Been Pwned","url":"https://haveibeenpwned.com/","snippet":"Перевірте, чи потрапляла ваша електронна пошта або пароль у відомі бази даних витоків інформації.","buttonText":"Перевірити пошту","tags":["безпека","приватність","інструменти"]},{"id":145,"title":"Privnote","url":"https://privnote.com/","snippet":"Створюйте текстові нотатки, які самознищуються одразу після того, як їх прочитає отримувач.","buttonText":"Створити записку","tags":["безпека","приватність","текст"]},{"id":146,"title":"NaturalReaders","url":"https://www.naturalreaders.com/","snippet":"Перетворення будь-якого тексту на природне озвучення штучним інтелектом.","buttonText":"Озвучити текст","tags":["ші","звук","інструменти"]},{"id":147,"title":"Neko-City (NekoWeb)","url":"https://nekoweb.org/","snippet":"Майданчик для створення та перегляду затишних персональних веб-сайтів у дусі інтернету 2000-х.","buttonText":"Дослідити","tags":["веб","ретро","натхнення"]},{"id":148,"title":"10 Minute Mail","url":"https://10minutemail.com/","snippet":"Тимчасова електронна пошта, яка знищується через 10 хвилин. Ідеально для швидких реєстрацій.","buttonText":"Отримати пошту","tags":["безпека","пошта","інструменти"]},{"id":149,"title":"Befunky","url":"https://www.befunky.com/","snippet":"Простий онлайн-фоторедактор, графічний дизайнер та майстер створення колажів.","buttonText":"Редагувати","tags":["дизайн","фото","колаж"]},{"id":150,"title":"Gridzzly","url":"https://gridzzly.com/","snippet":"Створюйте та роздруковуйте власний сітчастий, лінійний або крапковий папір для нотаток.","buttonText":"Створити аркуш","tags":["інструменти","друк","організація"]},{"id":151,"title":"Ninite Pro & Tools","url":"https://ninite.com/","snippet":"Безпечне встановлення декількох популярних додатків одночасно без рекламного сміття.","buttonText":"Вибрати програми","tags":["софт","windows","інструменти"]},{"id":152,"title":"CleanPNG","url":"https://www.cleanpng.com/","snippet":"Безкоштовна база з мільйонів PNG-зображень із прозорим фоном для дизайну.","buttonText":"Шукати PNG","tags":["дизайн","ресурси","картинки"]},{"id":153,"title":"FutureMe","url":"https://www.futureme.org/","snippet":"Напишіть лист самому собі у майбутнє, який прийде на вашу пошту через 1, 3 або 5 років.\\nНапишеш, що це Доміно заставив тебе це зробити, майбутньому я :)","buttonText":"Написати собі","tags":["розваги","саморозвиток","листя"]},{"id":154,"title":"Asoftmurmur","url":"https://asoftmurmur.com/","snippet":"Генератор фонових звуків природи (дощ, вітер, костер) для концентрації або сну.","buttonText":"Слухати фонограму","tags":["релакс","продуктивність","звуки"]},{"id":155,"title":"Soundraw AI","url":"https://soundraw.io/","snippet":"Генератор фонової музики без авторських прав за допомогою штучного інтелекту.\\nПотап написав для нас безкоштовно пісню, але Кейт не сподобалось. Слухаймо: «Ні-на-не-ну-ла-шу, ко-ла-ві-ка-цу» — за 3 секунди шедевр!","buttonText":"Згенерувати трек","tags":["ші","музика","креатив"]},{"id":156,"title":"Стихія","images":["castle"],"url":"https://stuxia.com/","snippet":"Саморекламування на своєму сайті :) Ви ж вже на найдивнішому сайті серед усіх! Працює із видіння Доміно :)\\nПостачальник: TheTurkeyStudio (Бундюча студія)","buttonText":"Ви ж вже тут :)","tags":["погода","музика","хаос"]},{"id":157,"title":"Ніцерон (Динофроз)","url":"https://megogo.net/ua/view/1812091-dinofroz.html","snippet":"Ми не могли його впустити додаючи нашу базу даних, нашого пошуковика :)\\nЄдиний лінк не на гру і додаток(сайт)\\nПостачальник: Mondo TV","buttonText":"Ностальгія...","tags":["дракони","динозаври","Ніцерон"]},{"id":158,"title":"Dragon Village 3","url":"https://play.google.com/store/apps/details?id=com.highbrow.games.dvo&hl=uk","icon":"https://play-lh.googleusercontent.com/xkwb3p2V6SkaxRq3uC_NM3n_tkw_UOcfe6uw75plux3o-e_XiY5Ixis8HTfjjix0U14HMqIbVNICs8IoVRFs=s48","snippet":"Офіційне продовження Dragon Village через 12 років\\nШкода що Діма Комаров не заїхав в Корею, сувенір пов'яний з грою привіз би :)\\n\\nПостачальник: Highbrow","buttonText":"Збереш усіх драконів? :)","tags":["сюжет","стратегія","дракони"],"images":["village"]},{"id":159,"title":"Меридіан 157: Пролог","youtubeTrailer":"https://www.youtube.com/watch?v=pXW52EZI0vY","url":"https://play.google.com/store/apps/details?id=com.novasoftinteractive.games.meridian157prologue&hl=uk","icon":"https://play-lh.googleusercontent.com/Rkk66wnDj2v-pe86uw-0GsZuHCBvc8DyeOj53pHHLfC318Shb5m8ebOVIBR6Wt3Jl_GzqcHtPeOQf32zol4Wcw=s48","snippet":"Meridian 157: Розділи 1, 2 та 3 офіційно випущені! Завантажте їх зараз на Google Play! Meridian 157: Prologue – це гра-головоломка типу «вкажи та клацни», що зосереджена на захопливих головоломках, захопливій візуальній складовій та захопливому сюжеті. Це перша частина серії Meridian 157, де ви граєте за детектива Девіда Зандера, який розслідує таємничу погодну аномалію в північній частині Тихого океану. Використовуйте свою кмітливість, щоб розгадувати головоломки та долати перешкоди, щоб знайти шлях глибше на острів, щоб розкрити та знайти таємницю загубленого острова на 157-му меридіані!\\nШкола виживання для любителів закинутих об'єктів та таємничих бункерів :)\\nПостачальник: NovaSoft Interactive","buttonText":"Розгадаєш таємницю об'єкту F.L.A.R.E?","tags":["аномалії","головоломки","хоррор"]},{"id":160,"title":"Excalidraw","url":"https://excalidraw.com/","snippet":"Зручна віртуальна дошка для швидкого створення схем, діаграм та начерків у стилі малюнка від руки.\\nЯ знав, що уроки кресленння, щось від мене приховують :)\\nПостачальник: Uanet / Gismeteo","buttonText":"Малювати схему","tags":["інструменти","дизайн","схеми"]},{"id":161,"title":"Горох (Словник)","url":"https://goroh.pp.ua/","snippet":"Сучасна онлайн-бібліотека українських словників: тлумачний, етимологічний, словозміна та синоніми.\\nЯкий оригінальний по імені постачальник...\\nПостачальник: Проєкт «Горох»","buttonText":"Шукати слово","tags":["мова","словник","освіта"]},{"id":162,"title":"Lost Lands 3: The Golden Curse","url":"https://play.google.com/store/apps/details?id=com.fivebn.ll3.f2p&hl=uk","icon":"https://play-lh.googleusercontent.com/v2xe4z9VMItjJ99omnJZLhQkKRjeL4YXAK29IeQv5uBrcByCPaneCKHVnPfwzF73agm6Xrp6waRN31ttqDdqMQ=s48","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася у фентезійному світі. Їй доведеться боротися проти демонів, які перебули у скам'янілому стані останнє тисячоріччя та й знову відродилися по незрозумілій причині.\\n«Загублені Землі. Прокляте золото» – пригодницька гра-квест із пошуком предметів, міні-іграми й головоломками, розкиданими на безкрайніх просторах фентезійного світу: від долини вулканів до друїдового лісу, від глибокого підземелля до ширяючих островів.\\nПроста миловидна домогосподарка Сьюзан одного чудового дня, відвідавши музей мистецтв, натикається на стародавнє дзеркало, яке раптом невідомим образом починає вабити Сьюзан до себе. Та доторкається до дзеркала й миттєво переноситься у фентезійний казковий світ Загублених Земель. Отут за свої колишні подвиги вона вже давно відома всім, як Сьюзан-Войовниця.\\nСьюзан зустрічає маленьку дівчинку Фіору, яка відводить її в село до свого прадіда Маарону. У ньому Сьюзан впізнає свого старого знайомого друїда. Маарон розповідає, що на їхнє село напала Гарпія – крилатий демон з легенд. Але саме дивне те, що цей демон останню тисячу років стояв у вигляді кам'яної статуї в одному старому занедбаному форті.\\nРазом зі своїми друзями Сьюзан має бути відправитися в жерло вулкана, спуститися в підземелля й піднятися на ширяючі острови для того, щоб зрозуміти, чому Гарпія, Мінотавр, Нага й Солідус, один за іншим, почали звільнятися з «кам'яного полону» і вчиняти в Загублених Землях хаос. І, звичайно, усіх їх потрібно зупинити...\\nПостачальник: 5bn games\\nДата випуску: 24 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":163,"title":"Lost Lands 4: The Wanderer","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":164,"title":"Lost Lands 5: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":165,"title":"Lost Lands 6: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":166,"title":"Lost Lands 7: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":167,"title":"Lost Lands 8: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":168,"title":"Meridian 157: Chapter 1","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":169,"title":"Meridian 157: Chapter 2","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":170,"title":"Meridian 157: Chapter 3","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":171,"title":"Lost Lands 10","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":172,"title":"Lost Lands 11: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":173,"title":"Dragon Village","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":174,"title":"Dragon Village M","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":175,"title":"Dragon Village Collection","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":176,"title":"Legacy 3: The Four Horsemen","url":"https://play.google.com/store/apps/details?id=com.fivebn.lostlands2.free","snippet":"Захоплююча пригода сміливої дівчини, яка опинилася в фентезійному світі. Їй доведеться боротися проти Чорних Вершників, посланих силами Зла для поневолення всього насущного.\\n«Загублені Землі. Чотири Вершника» - пригодницька гра-квест з пошуком предметів, міні-іграми і головоломками, що розповідає про дивний світ, населений безліччю небачених рас, народностей і племен.\\nОдного чудового дня проста миловидна домогосподарка Сьюзан, йдучи по підземній парковці торгового центру, потрапляє в хмару чорного містичного диму, який виявляється міжпросторовим порталом. Сьюзан повертається в фентезійний світ Загублених Земель, в якому колись вже побувала. Тут вже багато років про неї складають легенди і знають її як Сьюзан-войовницю. На цей раз вона була покликана друїдом-відлюдником на ім'я Маарон. Йому було видіння, в якому старець бачив падіння Загублених Земель від гніту чотирьох Чорних Вершників: Спеки, Холода, Смерті і Темряви. Маарон приймає рішення заручитися підтримкою людини з іншого світу, людини, яка вже рятувала одного разу цей світ від сил Зла. Сьюзан відправиться назустріч Вершникам, щоб протистояти їм. Але спочатку їй належить знайти слабкість кожного і спробувати знищити в нерівному бою...\\nПостачальник: 5bn games\\nДата випуску: 4 лип. 2019 р.","buttonText":"Завантажити гру","tags":["головоломка","квест","5bn","пригоди"]},{"id":177,"title":"The Room 2","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","youtubeTrailer":"https://www.youtube.com/watch?v=soyeCXKQ6_Q","snippet":"Ласкаво просимо до The Room Two, фізичної головоломки, загорнутої в таємничу гру, у чудовому тактильному 3D-світі.\\nДовгоочікуване продовження фільму «Кімната», який отримав премію BAFTA, нарешті з’явилося.\\nПройдіть слідом загадкових листів від загадкового вченого, відомого лише як AS, у захоплюючий світ таємниць і досліджень.\\n*******************************************************************************************************************\\n«Неймовірно захоплюючий досвід із розумними головоломками, чудовими візуальними ефектами та моторошною атмосферою; абсолютно переповнений новими ідеями». – Грань\\n«Складно сплетений художній твір, ідеально підходить для свого формату, це та гра, заради якої варто сидіти в темряві». - Кишеньковий гравець\\nЧудова гра, що пропонує великі локації з кількома інтерактивними областями та головоломками. Ідеальна гра для холодної зимової ночі. – Єврогеймер\\n«Змушує вас думати про те, як розв’язувати головоломки, навіть коли ви не граєте; ознака класної гри, якою це безперечно є». – 148 додатків\\nЧудове продовження з приголомшливими візуальними ефектами, рівень складності, який тут представлений, вражає. Друга кімната має бути на першому місці у вашому списку ігор. - GSM Арена\\n*******************************************************************************************************************\\nІНФОРМАЦІЙНИЙ ДИЗАЙН\\nЛегко розпочати, важко відірватися, захоплююче поєднання інтригуючих головоломок із простим інтерфейсом користувача\\nІННОВАЦІЙНЕ СЕНСОРНЕ УПРАВЛІННЯ\\nТактильний досвід настільки природний, що ви можете майже відчути поверхню кожного предмета\\nРЕАЛІСТИЧНІ 3D ЛОКАЦІЇ\\nПориньте в різноманітні приголомшливі середовища, які випробуватимуть вашу майстерність розгадувати головоломки.\\nДЕТАЛІЗОВАНІ 3D ОБ'ЄКТИ\\nВникайте в складні деталі десятків артефактів у пошуках їхніх прихованих секретів.\\nНЕРВУЮЧИЙ АУДІО\\nЗахоплюючий саундтрек і динамічні звукові ефекти створюють звуковий ландшафт, який реагує на вашу гру.\\nТЕПЕР ПІДТРИМУЄТЬСЯ ЗБЕРЕЖЕННЯ В ХМАРІ\\nПоділіться своїм прогресом між кількома пристроями та розблокуйте абсолютно нові досягнення.\\nПІДТРИМКА КІЛЬКОХ МОВ\\nДоступно англійською, французькою, італійською, німецькою, іспанською, бразильською та португальською мовами.\\n*******************************************************************************************************************\\nFireproof Games — це невелика незалежна студія, розташована в Гілфорді у Великобританії.\\nДізнайтеся більше на fireproofgames.com\\nСлідкуйте за нами @Fireproof_Games.\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":178,"title":"The Room 3","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"\\nПостачальник: Fireproof Games\\nДата випуску: 3 вересня 2012 року","youtubeTrailer":"https://www.youtube.com/watch?v=NaZ2DiDH4i0","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":179,"title":"The Room: Old Sins","url":"https://play.google.com/store/apps/details?id=com.FireproofStudios.TheRoom","snippet":"Увійдіть у The Room: Old Sins і перенесіться в місце, де тактильне дослідження зустрічається зі складними головоломками та захоплюючою історією.\\nРаптове зникнення амбітного інженера та його світської дружини провокує полювання на дорогоцінний артефакт. Стежка веде на горище їхнього дому, де знаходять старий, незвичайний ляльковий будиночок...\\nДосліджуйте тривожні місця, дотримуйтесь незрозумілих підказок і маніпулюйте химерними пристосуваннями, розкриваючи таємниці садиби Волдегрейв.\\nВід себе: Хоч ця серія ігор і платна, але навряд її хтось переплюне...\\nПостачальник: Fireproof Games\\nДата випуску: 18 квітня 2018 рік.","buttonText":"Завантажити гру","tags":["головоломка","квест","таємниця"]},{"id":180,"title":"Regex101","url":"https://regex101.com/","snippet":"Онлайн-інструмент для тестування, налагодження та аналізу регулярних виразів з детальними поясненнями.\\nПостачальник: Firas Dib\\nДата випуску: 2013 рік","buttonText":"Тестувати Regex","tags":["it","програмування","інструменти"]},{"id":181,"title":"DevDocs","url":"https://devdocs.io/","snippet":"Швидкий та зручний навігатор по документації десятків мов програмування та фреймворків в єдиному інтерфейсі.\\nПостачальник: FreeCodeCamp / Thibaut Courouble\\nДата випуску: 2013 рік","buttonText":"Читати документацію","tags":["it","програмування","довідник"]},{"id":182,"title":"CSS Gradient","url":"https://cssgradient.io/","snippet":"Зручний генератор градієнтів для CSS з візуальним редактором та можливістю копіювання коду в один клік.\\nПостачальник: Designmodo\\nДата випуску: 2017 рік","buttonText":"Створити градієнт","tags":["дизайн","веб","інструменти"]},{"id":183,"title":"Coolors","url":"https://coolors.co/","snippet":"Надшвидкий генератор колірних палітр для дизайнерів та розробників з можливістю збереження та експорту.\\nПостачальник: Fabrizio Bianchi\\nДата випуску: 2014 рік","buttonText":"Підібрати кольори","tags":["дизайн","палітра","інструменти"]},{"id":184,"title":"Carbon","url":"https://carbon.now.sh/","snippet":"Створюйте та поширюйте красиві зображення вашого сирцового коду для презентацій та соціальних мереж.\\nПостачальник: Dawn Labs\\nДата випуску: 2017 рік","buttonText":"Оформити код","tags":["it","дизайн","код"]},{"id":185,"title":"JSON Crack","url":"https://jsoncrack.com/","snippet":"Інструмент для візуалізації складних JSON-структур у вигляді зрозумілих та інтерактивних граф-схем.\\nПостачальник: Aykut Saraç\\nДата випуску: 2022 рік","buttonText":"Візуалізувати JSON","tags":["it","інструменти","json"]},{"id":186,"title":"SVGOMG","url":"https://jakearchibald.github.io/svgomg/","snippet":"Зручний веб-інтерфейс для оптимізації та стиснення векторних SVG-файлів без втрати якості.\\nПостачальник: Jake Archibald\\nДата випуску: 2015 рік","buttonText":"Оптимізувати SVG","tags":["веб","оптимізація","дизайн"]},{"id":187,"title":"CodePen","url":"https://codepen.io/","snippet":"Онлайн-середовище для тестування, демонстрації та обміну HTML, CSS і JavaScript кодом у реальному часі.\\nПостачальник: Alex Vazquez, Tim Sabat, Chris Coyier\\nДата випуску: 2012 рік","buttonText":"Створювати пени","tags":["it","веб","програмування"]},{"id":188,"title":"Supercook","url":"https://www.supercook.com/","snippet":"Генератор рецептів, який підбирає страви на основі списку продуктів, що вже є у вашому холодильнику.\\nПостачальник: Assaf Rozenblatt\\nДата випуску: 2010 рік","buttonText":"Знайти рецепт","tags":["кулінарія","інструменти","корисно"]},{"id":189,"title":"PrintFriendly","url":"https://www.printfriendly.com/","snippet":"Очищає веб-сторінки від реклами та зайвих елементів для зручного друку або збереження в PDF.\\nПостачальник: Taylor Robinson\\nДата випуску: 2009 рік","buttonText":"Підготувати до друку","tags":["інструменти","pdf","друк"]},{"id":190,"title":"Musicca","url":"https://www.musicca.com/uk","snippet":"Безкоштовна платформа для вивчення теорії музики, нотної грамоти та гри на віртуальних інструментах.\\nПостачальник: Musicca International\\nДата випуску: 2019 рік","buttonText":"Вчити музику","tags":["музика","освіта","навчання"]},{"id":191,"title":"Lucide Icons","url":"https://lucide.dev/","snippet":"Красивий, послідовний та відкритий набір іконок для сучасних вебдодатків та інтерфейсів.\\nПостачальник: Lucide Open Source Community\\nДата випуску: 2021 рік","buttonText":"Шукати іконки","tags":["дизайн","веб","іконки"]},{"id":192,"title":"Squoosh","url":"https://squoosh.app/","snippet":"Просунутий онлайн-компресор зображень від Google з можливістю порівняння форматів та якості в реальному часі.\\nПостачальник: Google Chrome Labs\\nДата випуску: 2018 рік","buttonText":"Стиснути фото","tags":["інструменти","оптимізація","фото"]},{"id":193,"title":"Type Lit","url":"https://www.typelit.io/","snippet":"Тренажер сліпого друку, де ви практикуєтеся у швидкості набору, передруковуючи класичні художні книги.\\nПостачальник: TypeLit Team\\nДата випуску: 2020 рік","buttonText":"Тренувати друк","tags":["навчання","тренажер","книги"]},{"id":194,"title":"Ray.so","url":"https://ray.so/","snippet":"Створюйте вражаючі та стильні скріншоти коду з градієнтним фоном для соціальних мереж та портфоліо.\\nПостачальник: Raycast\\nДата випуску: 2021 рік","buttonText":"Згенерувати картку","tags":["it","дизайн","інструменти"]},{"id":195,"title":"Coming Soon","url":"11111Coming Soon11111","snippet":"Дні - білі\\nНочі - чорні\\nСонце - жовте\\nІндичатко - горде\\nОчікуйте оновлень...","buttonText":"Очікуйте","tags":["секрет"]}]`),od=t=>`https://uk.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(t)}&format=json&origin=*`,sd=(t="")=>t.replace(/<span class="searchmatch">/g,"").replace(/<\/span>/g,"").trim()||"Без опису",Ii=[{name:"Конотоп",fullName:"Конотоп (Сумська обл., Україна)",lat:51.24,lon:33.2,aliases:["конотоп","конотопі","конотопу","конотопом","konotop"]},{name:"Київ",fullName:"Київ (Україна)",lat:50.45,lon:30.52,aliases:["київ","києві","києва","києвом","kyiv","kiev"]},{name:"Харків",fullName:"Харків (Харківська обл., Україна)",lat:49.99,lon:36.23,aliases:["харків","харкові","харкова","харковом","kharkiv","kharkov"]},{name:"Одеса",fullName:"Одеса (Одеська обл., Україна)",lat:46.48,lon:30.72,aliases:["одеса","одесі","одеси","одесою","odesa","odessa"]},{name:"Дніпро",fullName:"Дніпро (Дніпропетровська обл., Україна)",lat:48.46,lon:35.04,aliases:["дніпро","дніпрі","дніпра","дніпром","dnipro","dnepropetrovsk"]},{name:"Львів",fullName:"Львів (Львівська обл., Україна)",lat:49.84,lon:24.03,aliases:["львів","львові","львова","львовом","lviv","lwo"]},{name:"Запоріжжя",fullName:"Запоріжжя (Запорізька обл., Україна)",lat:47.84,lon:35.14,aliases:["запоріжжя","запоріжжі","zaporizhzhia","zaporozhye"]},{name:"Кривий Ріг",fullName:"Кривий Ріг (Дніпропетровська обл., Україна)",lat:47.91,lon:33.39,aliases:["кривий ріг","кривому розі","кривого рогу","kryvyi rih"]},{name:"Миколаїв",fullName:"Миколаїв (Миколаївська обл., Україна)",lat:46.98,lon:32,aliases:["миколаїв","миколаєві","миколаєва","mykolaiv","nikolaev"]},{name:"Вінниця",fullName:"Вінниця (Вінницька обл., Україна)",lat:49.23,lon:28.48,aliases:["вінниця","вінниці","вінницею","vinnytsia","vinnitsa"]},{name:"Полтава",fullName:"Полтава (Полтавська обл., Україна)",lat:49.59,lon:34.55,aliases:["полтава","полтаві","полтави","poltava"]},{name:"Чернігів",fullName:"Чернігів (Чернігівська обл., Україна)",lat:51.49,lon:31.29,aliases:["чернігів","чернігові","чернігова","chernihiv","chernigov"]},{name:"Черкаси",fullName:"Черкаси (Черкаська обл., Україна)",lat:49.44,lon:32.06,aliases:["черкаси","черкасах","черкасів","cherkasy","cherkassy"]},{name:"Суми",fullName:"Суми (Сумська обл., Україна)",lat:50.91,lon:34.8,aliases:["суми","сумах","сум","sumy"]},{name:"Житомир",fullName:"Житомир (Житомирська обл., Україна)",lat:50.25,lon:28.66,aliases:["житомир","житомирі","житомира","zhytomyr"]},{name:"Хмельницький",fullName:"Хмельницький (Хмельницька обл., Україна)",lat:49.42,lon:27,aliases:["хмельницький","хмельницькому","khmelnytskyi"]},{name:"Рівне",fullName:"Рівне (Рівненська обл., Україна)",lat:50.62,lon:26.25,aliases:["рівне","рівному","rovno","rivne"]},{name:"Чернівці",fullName:"Чернівці (Чернівецька обл., Україна)",lat:48.29,lon:25.93,aliases:["чернівці","чернівцях","chernivtsi"]},{name:"Кременчук",fullName:"Кременчук (Полтавська обл., Україна)",lat:49.07,lon:33.42,aliases:["кременчук","кременчуці","кременчука","kremenchuk"]},{name:"Тернопіль",fullName:"Тернопіль (Тернопільська обл., Україна)",lat:49.55,lon:25.59,aliases:["тернопіль","тернополі","ternopil"]},{name:"Івано-Франківськ",fullName:"Івано-Франківськ (Івано-Франківська обл., Україна)",lat:48.92,lon:24.71,aliases:["івано-франківськ","франківськ","івано-франківську","ivano-frankivsk"]},{name:"Луцьк",fullName:"Луцьк (Волинська обл., Україна)",lat:50.75,lon:25.34,aliases:["луцьк","луцьку","lutsk"]},{name:"Біла Церква",fullName:"Біла Церква (Київська обл., Україна)",lat:49.8,lon:30.12,aliases:["біла церква","білій церкві","bila tserkva"]},{name:"Ужгород",fullName:"Ужгород (Закарпатська обл., Україна)",lat:48.62,lon:22.3,aliases:["ужгород","ужгороді","uzhhorod"]},{name:"Шостка",fullName:"Шостка (Сумська обл., Україна)",lat:51.86,lon:33.47,aliases:["шостка","шостці","shostka"]},{name:"Умань",fullName:"Умань (Черкаська обл., Україна)",lat:48.75,lon:30.22,aliases:["умань","умані","uman"]},{name:"Бердичів",fullName:"Бердичів (Житомирська обл., Україна)",lat:49.89,lon:28.58,aliases:["бердичів","бердичеві","berdychiv"]},{name:"Дрогобич",fullName:"Дрогобич (Львівська обл., Україна)",lat:49.35,lon:23.5,aliases:["дрогобич","дрогобичі","drohobych"]},{name:"Нікополь",fullName:"Нікополь (Дніпропетровська обл., Україна)",lat:47.57,lon:34.4,aliases:["нікополь","нікополі","nikopol"]},{name:"Бровари",fullName:"Бровари (Київська обл., Україна)",lat:50.51,lon:30.79,aliases:["бровари","броварах","brovary"]},{name:"Павлоград",fullName:"Павлоград (Дніпропетровська обл., Україна)",lat:48.52,lon:35.87,aliases:["павлоград","павлограді","pavlohrad"]},{name:"Сєвєродонецьк",fullName:"Сєвєродонецьк (Луганська обл., Україна)",lat:48.95,lon:38.48,aliases:["сєвєродонецьк","северодонецьк","severodonetsk"]},{name:"Бердянськ",fullName:"Бердянськ (Запорізька обл., Україна)",lat:46.76,lon:36.79,aliases:["бердянськ","бердянську","berdyansk"]},{name:"Кам'янець-Подільський",fullName:"Кам'янець-Подільський (Хмельницька обл., Україна)",lat:48.68,lon:26.58,aliases:["кам'янець-подільський","кам'янець","kamianets-podilskyi"]},{name:"Олександрія",fullName:"Олександрія (Кіровоградська обл., Україна)",lat:48.67,lon:33.11,aliases:["олександрія","олександрії","oleksandriia"]},{name:"Мукачево",fullName:"Мукачево (Закарпатська обл., Україна)",lat:48.44,lon:22.72,aliases:["мукачево","мукачеве","mukachevo"]},{name:"Кам'янське",fullName:"Кам'янське (Дніпропетровська обл., Україна)",lat:48.51,lon:34.61,aliases:["кам'янське","дніпродзержинськ","kamianske"]},{name:"Кропивницький",fullName:"Кропивницький (Кіровоградська обл., Україна)",lat:48.51,lon:32.26,aliases:["кропивницький","кіровоград","kropyvnytskyi"]},{name:"Маріуполь",fullName:"Маріуполь (Донецька обл., Україна)",lat:47.1,lon:37.54,aliases:["маріуполь","маріуполі","mariupol"]},{name:"Севастополь",fullName:"Севастополь (Крим, Україна)",lat:44.62,lon:33.53,aliases:["севастополь","севастополі","sevastopol"]},{name:"Сімферополь",fullName:"Сімферополь (Крим, Україна)",lat:44.95,lon:34.1,aliases:["сімферополь","сімферополі","simferopol"]},{name:"Херсон",fullName:"Херсон (Херсонська обл., Україна)",lat:46.64,lon:32.61,aliases:["херсон","херсоні","kherson"]},{name:"Луганськ",fullName:"Луганськ (Луганська обл., Україна)",lat:48.57,lon:39.31,aliases:["луганськ","луганську","луганська","luhansk","lugansk"]},{name:"Донецьк",fullName:"Донецьк (Донецька обл., Україна)",lat:48.01,lon:37.8,aliases:["донецьк","донеччина","донецьку","донецька","donetsk"]},{name:"Макіївка",fullName:"Макіївка (Донецька обл., Україна)",lat:48.04,lon:37.97,aliases:["макіївка","макіївці","макіївку","makiivka","makeevka"]},{name:"Горлівка",fullName:"Горлівка (Донецька обл., Україна)",lat:48.3,lon:38.05,aliases:["горлівка","горлівці","горлівку","horlivka","gorlovka"]},{name:"Краматорськ",fullName:"Краматорськ (Донецька обл., Україна)",lat:48.74,lon:37.58,aliases:["краматорськ","краматорську","краматорська","kramatorsk"]},{name:"Слов'янськ",fullName:"Слов'янськ (Донецька обл., Україна)",lat:48.85,lon:37.61,aliases:["слов'янськ","слов'янську","слов'янська","sloviansk","slavyansk"]},{name:"Мелітополь",fullName:"Мелітополь (Запорізька обл., Україна)",lat:46.85,lon:35.37,aliases:["мелітополь","мелітополі","мелітополя","melitopol"]},{name:"Бахмут",fullName:"Бахмут (Донецька обл., Україна)",lat:48.59,lon:37.99,aliases:["бахмут","бахмуті","бахмуту","артемівськ","bakhmut"]},{name:"Ізмаїл",fullName:"Ізмаїл (Одеська обл., Україна)",lat:45.35,lon:28.83,aliases:["ізмаїл","ізмаїлі","ізмаїлу","izmail"]},{name:"Ніжин",fullName:"Ніжин (Чернігівська обл., Україна)",lat:51.05,lon:31.88,aliases:["ніжин","ніжині","ніжину","nizhyn","nezhin"]},{name:"Бориспіль",fullName:"Бориспіль (Київська обл., Україна)",lat:50.35,lon:30.95,aliases:["бориспіль","борисполі","борисполя","boryspil"]},{name:"Ірпінь",fullName:"Ірпінь (Київська обл., Україна)",lat:50.52,lon:30.24,aliases:["ірпінь","ірпені","ірпеня","irpin"]},{name:"Буча",fullName:"Буча (Київська обл., Україна)",lat:50.55,lon:30.21,aliases:["буча","бучі","бучу","bucha"]},{name:"Фастів",fullName:"Фастів (Київська обл., Україна)",lat:50.08,lon:29.91,aliases:["фастів","фастові","фастова","fastiv"]},{name:"Коломия",fullName:"Коломия (Івано-Франківська обл., Україна)",lat:48.53,lon:25.04,aliases:["коломия","коломиї","коломию","kolomyia"]},{name:"Стрий",fullName:"Стрий (Львівська обл., Україна)",lat:49.26,lon:23.85,aliases:["стрий","стрию","стриї","stryi","stryy"]},{name:"Калуш",fullName:"Калуш (Івано-Франківська обл., Україна)",lat:49.02,lon:24.36,aliases:["калуш","калуші","калуша","kalush"]},{name:"Ковель",fullName:"Ковель (Волинська обл., Україна)",lat:51.22,lon:24.71,aliases:["ковель","ковелі","ковеля","kovel"]},{name:"Коростень",fullName:"Коростень (Житомирська обл., Україна)",lat:50.95,lon:28.64,aliases:["коростень","коростені","коростеня","korosten"]},{name:"Сміла",fullName:"Сміла (Черкаська обл., Україна)",lat:49.22,lon:31.87,aliases:["сміла","смілі","смілу","smila"]},{name:"Первомайськ",fullName:"Первомайськ (Миколаївська обл., Україна)",lat:48.04,lon:30.85,aliases:["первомайськ","первомайську","pervomaisk"]},{name:"Чорноморськ",fullName:"Чорноморськ (Одеська обл., Україна)",lat:46.3,lon:30.66,aliases:["чорноморськ","чорноморську","іллічівськ","chornomorsk"]},{name:"Покровськ",fullName:"Покровськ (Донецька обл., Україна)",lat:48.28,lon:37.18,aliases:["покровськ","покровську","красноармійськ","pokrovsk"]},{name:"Енергодар",fullName:"Енергодар (Запорізька обл., Україна)",lat:47.5,lon:34.65,aliases:["енергодар","енергодарі","енергодару","enerhodar"]},{name:"Керч",fullName:"Керч (Крим, Україна)",lat:45.36,lon:36.47,aliases:["керч","керчі","керчю","kerch"]},{name:"Євпаторія",fullName:"Євпаторія (Крим, Україна)",lat:45.19,lon:33.36,aliases:["євпаторія","євпаторії","yevpatoria","evpatoria"]},{name:"Ялта",fullName:"Ялта (Крим, Україна)",lat:44.49,lon:34.16,aliases:["ялта","ялті","ялту","yalta"]},{name:"Феодосія",fullName:"Феодосія (Крим, Україна)",lat:45.03,lon:35.38,aliases:["феодосія","феодосії","feodosia"]},{name:"Алчевськ",fullName:"Алчевськ (Луганська обл., Україна)",lat:48.47,lon:38.79,aliases:["алчевськ","алчевську","alchevsk"]},{name:"Самар",fullName:"Самар (Дніпропетровська обл., Україна)",lat:48.63,lon:35.26,aliases:["самар","новомосковськ","новомосковську","samar","novomoskovsk"]},{name:"Шептицький",fullName:"Шептицький (Львівська обл., Україна)",lat:50.38,lon:24.23,aliases:["шептицький","червоноград","chervonohrad","sheptytskyi"]},{name:"Лозова",fullName:"Лозова (Харківська обл., Україна)",lat:48.89,lon:36.32,aliases:["лозова","лозовій","lozova"]},{name:"Ізюм",fullName:"Ізюм (Харківська обл., Україна)",lat:49.21,lon:37.26,aliases:["ізюм","ізюмі","ізюму","izium","izyum"]},{name:"Звягель",fullName:"Звягель (Житомирська обл., Україна)",lat:50.58,lon:27.63,aliases:["звягель","звягелі","новоград-волинський","zviahel"]}],ld=t=>{if(!t||typeof t!="string")return null;const n=t.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(!n)return null;for(const a of Ii)if(a.name.toLowerCase()===n||a.aliases.some(c=>c.toLowerCase()===n))return a;for(const a of Ii)if(a.aliases.some(c=>n.includes(c.toLowerCase())))return a;return null},Oi="data:image/webp;base64,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",pf=async t=>{if(!t||!t.trim()||!/погод|температур|градус|дощ|опад|сонц|соняч|хмарно|вітер|гроз|сніг|туман|київ|києві|львів|одес|харків|дніпр|запоріж|івано-франк|тернопіль|луцьк|рівне|чернівц|ужгород|суми|чернігів|полтава|черкаси|житомир|вінниц|хмельницьк|кропивницьк|миколаїв|херсон|прогноз|weather|forecast/i.test(t))return"";try{let n="Київ";for(const C of[{name:"Львів",match:/львів/i},{name:"Одеса",match:/одес/i},{name:"Харків",match:/харків/i},{name:"Дніпро",match:/дніпр/i},{name:"Запоріжжя",match:/запоріж/i},{name:"Івано-Франківськ",match:/івано-франк/i},{name:"Тернопіль",match:/тернопіль/i},{name:"Луцьк",match:/луцьк/i},{name:"Рівне",match:/рівн/i},{name:"Чернівці",match:/чернівц/i},{name:"Ужгород",match:/ужгород/i},{name:"Суми",match:/сум/i},{name:"Чернігів",match:/чернігів/i},{name:"Полтава",match:/полтав/i},{name:"Черкаси",match:/черкас/i},{name:"Житомир",match:/житомир/i},{name:"Вінниця",match:/вінниц/i},{name:"Хмельницький",match:/хмельницьк/i},{name:"Кропивницький",match:/кропивницьк/i},{name:"Миколаїв",match:/миколаїв/i},{name:"Херсон",match:/херсон/i},{name:"Київ",match:/київ|києві/i}])if(C.match.test(t)){n=C.name;break}const a=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(n)}&count=1&language=uk`,c=new AbortController,l=setTimeout(()=>c.abort(),6e3),d=await fetch(a,{signal:c.signal});if(clearTimeout(l),!d.ok)return"";const h=await d.json();if(!h.results||h.results.length===0)return"";const{latitude:u,longitude:g,name:x,country:T}=h.results[0],k=`https://api.open-meteo.com/v1/forecast?latitude=${u}&longitude=${g}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,rain_sum,showers_sum,snowfall_sum,sunrise,sunset&timezone=auto&forecast_days=7`,P=new AbortController,z=setTimeout(()=>P.abort(),6e3),F=await fetch(k,{signal:P.signal});if(clearTimeout(z),!F.ok)return"";const I=await F.json(),y=C=>C===0?"☀️ Сонячно / Ясно":C>=1&&C<=3?"⛅ Мінлива хмарність / Частково сонячно":C===45||C===48?"🌫️ Туман":C>=51&&C<=55?"🌧️ Мряка":C>=61&&C<=65?"🌧️ Дощ":C>=71&&C<=75?"❄️ Сніг":C>=80&&C<=82?"🌦️ Злива":C>=95?"⛈️ Гроза":"🌤️ Помірно",m=I.current,v=I.daily;let j=[`[Джерело: Open-Meteo Weather API — ${x}, ${T||"Україна"}]`];return m&&j.push(`• Погода зараз: ${Math.round(m.temperature_2m)}°C (відчувається як ${Math.round(m.apparent_temperature)}°C), ${y(m.weather_code)}, вітер ${Math.round(m.wind_speed_10m)} км/год, вологість ${m.relative_humidity_2m}%.`),v&&v.time&&v.time.length>1&&(j.push(`• Сьогодні (${v.time[0]}): Мін: ${Math.round(v.temperature_2m_min[0])}°C, Макс: ${Math.round(v.temperature_2m_max[0])}°C, Статус: ${y(v.weather_code[0])}, Ймовірність опадів: ${v.precipitation_probability_max[0]}%.`),j.push(`• Завтра (${v.time[1]}): Мін: ${Math.round(v.temperature_2m_min[1])}°C, Макс: ${Math.round(v.temperature_2m_max[1])}°C, Статус: ${y(v.weather_code[1])}, Ймовірність опадів: ${v.precipitation_probability_max[1]}%.`),v.time[2]&&j.push(`• Післязавтра (${v.time[2]}): Мін: ${Math.round(v.temperature_2m_min[2])}°C, Макс: ${Math.round(v.temperature_2m_max[2])}°C, Статус: ${y(v.weather_code[2])}, Ймовірність опадів: ${v.precipitation_probability_max[2]}%.`)),j.join(`
`)}catch(n){return console.warn("Open-Meteo weather fetch error:",n),""}},uf=async t=>{const n=`${t} latest news`,a=`https://news.google.com/rss/search?q=${encodeURIComponent(n)}&hl=uk&gl=UA&ceid=UA:uk`,c=await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(a)}`);if(!c.ok)return"";const l=((await c.json()).items||[]).slice(0,6);return l.length===0?"":`[Джерело: Google News RSS — актуальні результати пошуку]
${l.map((d,h)=>{const u=d.pubDate?new Date(d.pubDate).toLocaleString("uk-UA"):"дата невідома",g=(d.description||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim().slice(0,240);return`${h+1}. ${d.title}
Дата: ${u}
Опис: ${g||"немає"}
Посилання: ${d.link}`}).join(`

`)}`},ff=async t=>{if(!t||!t.trim())return"";const n=[],a=/новин|новини|news|поді[їй]|сві[тт]|world|останн|актуальн/i.test(t);if(!a||/київ|києві|львів|одес|харків|дніпр|запоріж|міст[оі]|city/i.test(t))try{const c=await pf(t);c&&n.push(c)}catch(c){console.warn("Weather search error:",c)}if(a)try{const c=await uf(t);c&&n.push(c)}catch(c){console.warn("News search error:",c)}try{const c=`https://api.duckduckgo.com/?q=${encodeURIComponent(t)}&format=json&no_html=1&skip_disambig=1`,l=await fetch(c);if(l.ok){const d=await l.json();if(d.AbstractText)n.push(`[Джерело: DuckDuckGo] ${d.AbstractText}`);else if(d.RelatedTopics&&d.RelatedTopics.length>0){const h=d.RelatedTopics.slice(0,3).map(u=>u.Text).filter(Boolean);h.length>0&&n.push(`[Джерело: DuckDuckGo] ${h.join("; ")}`)}}}catch(c){console.warn("DuckDuckGo search error:",c)}try{const c=od(t),l=await fetch(c);if(l.ok){const d=((await l.json())?.query?.search||[]).slice(0,3).map(h=>{const u=sd(h.snippet);return`• ${h.title}: ${u}`});d.length>0&&n.push(`[Джерело: Вікіпедія]
${d.join(`
`)}`)}}catch(c){console.warn("Wikipedia search error:",c)}return n.length===0?"":`
--- ЗНАЙДЕНА АКТУАЛЬНА ІНФОРМАЦІЯ З ІНТЕРНЕТУ / ПОГОДНОГО API: ---
`+n.join(`

`)+`
-------------------------------------------------------------------
`},ns="/assets/reader-DAjoeGA1.webp",gf="/assets/readerfour-COZB_3VH.webp",cr="/assets/readertwo-BHOtORgg.webp",Hr="/assets/readerthree-CyIHINAl.webp",xf="/assets/reader-_qYYtuG1.webm",as=[ns,gf,ns,cr,Hr,cr,Hr,cr,Hr,cr],hf=({interval:t=250,className:n=""})=>{const[a,c]=(0,r.useState)(0),[l,d]=(0,r.useState)(()=>{if(typeof navigator>"u"||!navigator.onLine)return!0;if(navigator.connection){const g=navigator.connection;if(g.saveData||["slow-2g","2g","3g"].includes(g.effectiveType))return!0}return!1}),[h,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{const g=()=>{if(!(!(typeof navigator<"u")||navigator.onLine)){d(!0);return}if(typeof navigator<"u"&&navigator.connection){const x=navigator.connection;d(!!x.saveData||["slow-2g","2g","3g"].includes(x.effectiveType))}else d(!1)};return g(),window.addEventListener("online",g),window.addEventListener("offline",g),typeof navigator<"u"&&navigator.connection&&navigator.connection.addEventListener("change",g),()=>{window.removeEventListener("online",g),window.removeEventListener("offline",g),typeof navigator<"u"&&navigator.connection&&navigator.connection.removeEventListener("change",g)}},[]),(0,r.useEffect)(()=>{if(!l&&!h)return;const g=setInterval(()=>{c(x=>(x+1)%as.length)},t);return()=>clearInterval(g)},[t,l,h]),!l&&!h?(0,e.jsx)("video",{src:xf,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onError:()=>u(!0),className:n,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}}):(0,e.jsx)("img",{src:as[a],alt:"Анімований помічник",className:n,style:{width:"442px",height:"442px",marginTop:"-180px",objectFit:"contain",pointerEvents:"none"}})},mf=le`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`,bf=i.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`,yf=i.div`
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
  animation: ${mf} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`,wf=i.div`
  padding: 8px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.01)"};
`,vf=i.div`
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
`,kf=i.button`
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
`,jf=i.div`
  padding: 6px;
  border-bottom: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  position: relative;
  z-index: 10;
`,Sf=i.div`
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
`,Kr=i.select`
  padding: 5px 8px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 8px;
  background: ${t=>t.$isDarkMode?"#1c1d22":"#fff"};
  color: inherit;
  font-size: 11px;
`,Cf=i.div`
  position: relative;
  flex: 1;
  min-width: 0;
`,Tf=i.div`
  position: absolute;
  left: 12px;
  bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  color: ${t=>t.$isDarkMode?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,Af=i.div`
  position: absolute;
  right: 8px;
  bottom: 6px;
  display: flex;
  gap: 4px;
`,Ur=i.button`
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
`,If=i.div`
  margin-top: 6px;
  color: ${t=>t.$isDarkMode?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"};
  font-size: 10px;
`,rs=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`,is=i.button`
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
`,Df=i.div`
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
`,Mf=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,zf=i.div`
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
`,os=i.div`
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
`,$f=i.div`
  padding: 5px;
  border-top: 1px solid ${t=>t.$isDarkMode?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"};
  display: flex;
  gap: 10px;
  background: ${t=>t.$isDarkMode?"#16171b":"#fafafa"};
`,Rf=i.input`
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
`,Wr=300,ur="gemini_global_cooldown_until",Lf=t=>t==="detailed"?"Відповідай докладно, але структуровано.":t==="concise"?"Відповідай стисло, лише головна суть.":"Відповідай нормально, збалансовано за обсягом.",Ff=t=>t==="scientific"?"Використовуй науковий, точний стиль.":t==="standard"?"Використовуй нейтральний стандартний стиль.":"Використовуй дружній, простий стиль.",Ef=t=>{const n=/\[РЕКОМЕНДОВАНІ_ПИТАННЯ\]([\s\S]*?)\[\/РЕКОМЕНДОВАНІ_ПИТАННЯ\]/,a=t.match(n);if(!a)return{cleanText:t,questions:[]};const c=a[1].split(`
`).map(l=>l.replace(/^[•\-*\d.\s]+/,"").trim()).filter(Boolean).slice(0,2);return{cleanText:t.replace(n,"").trim(),questions:c}},Pf=[{icon:(0,e.jsx)(Vd,{"aria-hidden":"true"}),text:"Поясни головну думку новини."},{icon:(0,e.jsx)(Ed,{"aria-hidden":"true"}),text:"Які факти є найцікавішими?"},{icon:(0,e.jsx)(qd,{"aria-hidden":"true"}),text:"Які можуть бути наслідки?"}];function Nf({isOpen:t,onClose:n,newsItem:a,isDarkMode:c}){const[l,d]=(0,r.useState)("normal"),[h,u]=(0,r.useState)("friendly"),[g,x]=(0,r.useState)("0"),[T,k]=(0,r.useState)(!0),[P,z]=(0,r.useState)([]),[F,I]=(0,r.useState)(""),[y,m]=(0,r.useState)(!1),[v,j]=(0,r.useState)(""),[C,B]=(0,r.useState)(0),[H,J]=(0,r.useState)(!1),Q=(0,r.useRef)(null),he=(0,r.useRef)(null),te=(0,r.useRef)(0);(0,r.useEffect)(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),(0,r.useEffect)(()=>{if(!t)return;Promise.all([f.default.getItem("gemini_api_key"),f.default.getItem("gemini_google_search_enabled"),f.default.getItem("gemini_suggested_questions_count"),f.default.getItem(ur)]).then(([X,me,oe,Te])=>{j(X||""),me!==null&&k(me),["0","1","2"].includes(oe)&&x(oe),Te&&Te>Date.now()&&(te.current=Te,B(Math.ceil((Te-Date.now())/1e3)))});const ee=`news_ai_chat_${a?.link||"general"}`;f.default.getItem(ee).then(X=>{X?Date.now()-X.timestamp>864e5?(z([]),f.default.removeItem(ee)):z((X.messages||[]).slice(-10)):z([])})},[t,a]),(0,r.useEffect)(()=>{const ee=setInterval(()=>{f.default.getItem(ur).then(X=>{const me=Math.max(te.current,Number(X)||0),oe=Math.max(0,me-Date.now());te.current=me,B(Math.ceil(oe/1e3)),!oe&&me&&(te.current=0,f.default.removeItem(ur))})},250);return()=>clearInterval(ee)},[]),(0,r.useEffect)(()=>{Q.current?.scrollIntoView({behavior:"smooth"})},[P,y]);const D=ee=>{const X=ee.slice(-10),me=`news_ai_chat_${a?.link||"general"}`;f.default.setItem(me,{timestamp:Date.now(),messages:X}),z(X)},N=ee=>{const X=Date.now()+ee*1e3;te.current=X,B(ee),f.default.setItem(ur,X)},re=async()=>{z([]),await f.default.removeItem(`news_ai_chat_${a?.link||"general"}`)},xe=()=>{const ee=window.SpeechRecognition||window.webkitSpeechRecognition;if(!ee)return;if(H&&he.current){he.current.stop();return}const X=new ee;he.current=X,X.lang="uk-UA",X.onstart=()=>J(!0),X.onresult=me=>{I(oe=>`${oe?`${oe} `:""}${me.results[0][0].transcript}`.slice(0,Wr))},X.onend=()=>{J(!1),he.current=null},X.start()},ce=async(ee=null)=>{const X=ee||F;if(!X.trim()||y||te.current>Date.now())return;if(!v){alert("Не знайдено Gemini API ключ! Додайте його в меню 'Допомога ШІ' внизу сторінки.");return}const me={text:X,isBot:!1},oe=[...P,me];ee||I(""),z(oe),m(!0);try{const Te=new Ys(v).getGenerativeModel({model:"gemini-2.5-flash",...T?{tools:[{googleSearch:{}}]}:{}});let Se="";T&&(Se=await ff(`${a?.title||""} ${X}`));const ut=Number(g),It=ut?`Додай рівно ${ut} коротке(их) питання(нь) у блоці [РЕКОМЕНДОВАНІ_ПИТАННЯ].`:"Не додавай блок рекомендованих питань.",Dt=`${`Ти - ШІ-помічник для аналізу новини.
${Lf(l)}
${Ff(h)}
${It}`}
Новина:
Заголовок: ${a?.title||""}
Опис: ${a?.description||""}
Посилання: ${a?.link||""}
${Se}
Запит користувача: ${X}`,ot=await(await Te.generateContent(Dt)).response,st=ot.text(),Oe=ot.usageMetadata,tt={text:st,isBot:!0,usage:Oe?{promptTokens:Oe.promptTokenCount||0,responseTokens:Oe.candidatesTokenCount||0,totalTokens:Oe.totalTokenCount||0}:null};D([...oe,tt]),N(Number(g)===0?5:Number(g)===1?10:15)}catch(Te){console.error(Te);const Se={text:"⚠️ Помилка при генерації відповіді. Перевірте API-ключ або спробуйте пізніше.",isBot:!0};D([...oe,Se])}finally{m(!1)}};return t?(0,Ni.createPortal)((0,e.jsx)(bf,{onClick:n,children:(0,e.jsxs)(yf,{$isDarkMode:c,onClick:ee=>ee.stopPropagation(),children:[(0,e.jsxs)(wf,{$isDarkMode:c,children:[(0,e.jsx)(vf,{children:(0,e.jsx)("h3",{children:"ШІ Виклад новини"})}),(0,e.jsx)(kf,{$isDarkMode:c,onClick:n,title:"Закрити",children:"✕"})]}),(0,e.jsx)(jf,{$isDarkMode:c,children:(0,e.jsxs)(Sf,{children:[(0,e.jsxs)(pr,{children:["Обсяг:",(0,e.jsxs)(Kr,{$isDarkMode:c,value:l,onChange:ee=>d(ee.target.value),children:[(0,e.jsx)("option",{value:"concise",children:"Менше"}),(0,e.jsx)("option",{value:"normal",children:"Нормально"}),(0,e.jsx)("option",{value:"detailed",children:"Більше"})]})]}),(0,e.jsxs)(pr,{children:["Стиль:",(0,e.jsxs)(Kr,{$isDarkMode:c,value:h,onChange:ee=>u(ee.target.value),children:[(0,e.jsx)("option",{value:"friendly",children:"Дружньо"}),(0,e.jsx)("option",{value:"standard",children:"Стандартно"}),(0,e.jsx)("option",{value:"scientific",children:"Науково"})]})]}),(0,e.jsxs)(pr,{children:["Пропозиції:",(0,e.jsxs)(Kr,{$isDarkMode:c,value:g,onChange:async ee=>{x(ee.target.value),await f.default.setItem("gemini_suggested_questions_count",ee.target.value)},children:[(0,e.jsx)("option",{value:"0",children:"0 (5 с)"}),(0,e.jsx)("option",{value:"1",children:"1 (10 с)"}),(0,e.jsx)("option",{value:"2",children:"2 (15 с)"})]})]}),(0,e.jsxs)(pr,{children:[(0,e.jsx)("input",{type:"checkbox",checked:T,onChange:async ee=>{k(ee.target.checked),await f.default.setItem("gemini_google_search_enabled",ee.target.checked)}}),"Інтернет-пошук"]})]})}),(0,e.jsx)(Df,{$isDarkMode:c,children:P.length===0&&!y?(0,e.jsxs)(zf,{$isDarkMode:c,children:[(0,e.jsx)(hf,{interval:250}),(0,e.jsx)("div",{style:{marginTop:"-160px",color:c?"#ffffff":"#080808"},children:"Задайте питання про новину або оберіть питання:"}),(0,e.jsx)(rs,{children:Pf.map(({icon:ee,text:X})=>(0,e.jsxs)(is,{onClick:()=>ce(X),children:[ee,X]},X))})]}):(0,e.jsxs)(Mf,{children:[P.map((ee,X)=>{const me=ee.isBot?Ef(ee.text):{cleanText:ee.text,questions:[]};return(0,e.jsxs)(os,{$isBot:ee.isBot,$isDarkMode:c,children:[(0,e.jsx)(Kc,{children:me.cleanText}),ee.usage?.totalTokens>0&&(0,e.jsxs)(If,{$isDarkMode:c,children:["Витрачено токенів: ",ee.usage.totalTokens]}),me.questions.length>0&&(0,e.jsx)(rs,{children:me.questions.map(oe=>(0,e.jsx)(is,{onClick:()=>ce(oe),children:oe},oe))})]},X)}),y&&(0,e.jsx)(os,{$isBot:!0,$isDarkMode:c,children:"Аналізую та генерую відповідь..."}),(0,e.jsx)("div",{ref:Q})]})}),(0,e.jsx)($f,{$isDarkMode:c,children:(0,e.jsxs)(Cf,{children:[(0,e.jsx)(Rf,{$isDarkMode:c,value:F,maxLength:Wr,onChange:ee=>I(ee.target.value),onKeyDown:ee=>ee.key==="Enter"&&ce(),placeholder:"Задавайте питання...",disabled:y||C>0}),(0,e.jsxs)(Tf,{$isDarkMode:c,children:[F.length,"/",Wr,C>0&&` Перезарядка: ${C} с`]}),(0,e.jsxs)(Af,{children:[(0,e.jsx)(Ur,{type:"button",onClick:xe,title:H?"Зупинити голосовий ввід":"Голосовий ввід",children:H?(0,e.jsx)("span",{"aria-hidden":"true",children:"■"}):(0,e.jsx)(Jd,{})}),(0,e.jsx)(Ur,{type:"button",onClick:re,title:"Очистити чат",children:(0,e.jsx)(_d,{})}),(0,e.jsx)(Ur,{type:"button",$primary:!0,onClick:()=>ce(),disabled:y||C>0||!F.trim(),title:C>0?`Перезарядка: ${C} с`:"Надіслати",children:(0,e.jsx)(Xd,{})})]})]})})]})}),document.body):null}var Of=JSON.parse(`[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна! \\n  Погода, музика і безпечні новини, та купа інструментів, чекають на вас!","image":null},{"q":"Угода користувача","a":"Ця Угода є юридично обов'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"preview"},{"q":"Про клімат без цензури","a":"Друзі, я не хочу спілкуватись про цю тему. Проте важливо поговорити про це.\\n          Отже погода, є частиною політики, нечасто, але так.\\n          В Америці є станція для вивчення погоди(HARP), яка пливає на магнітне поле і погоду по всьому світу. \\n          На жаль, розвінчати чи підтвердити данну інформацію неможливо, оскільки джерело конспірологічне, але є дуже переконливі докази. \\n     Якщо є докази, що конспірологія не бреше, присилайте на пошту. Для метеоролога це дуже важливо. \\n          Такі досліди становлять загрозу для планети, і життя людей. Словами це не зупинити. Тому прошу, робіть все що можете, щоб зупинити ці досліди.\\n          Прикро що новини, постійно говорять про політику та показують рекламу. Але про погоду рідко, а тим паче про те, що треба це зупинити.","image":"texts"},{"q":"Співпраця та поради. Можливості сайту.","a":"Так! Я можу підказати через email, як отримати доступ до API сайтів та плагінів, які я використовую. А ось можливості сайту: Погода, музика, фан-арти, ШІ і т.д.","image":"might"},{"q":"Історія власників сайту...Не реальних: Кейт, Доміно, Марти...","a":"Це секрет поки.","image":"might"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок і натисніть Enter або натисніть на кнопку пошуку.\\nКрок 2. Оберіть потрібне місто зі списку підказок (якщо з'явиться кілька варіантів).\\nКрок 3. Ви побачите три блоки прогнозу:\\n  • Зараз — поточна температура, відчуття, вологість, тиск, вітер, УФ-індекс.\\n  • 24-годинний (на 7 днів) — кожна доба окремо, розбита по годинах.\\n  • 16-денний — загальний прогноз на два тижні вперед.\\nКрок 4. Зверніть увагу на кольорові мітки:\\n  🔴 Червоний (!): умови перевищують норму прямо ЗАРАЗ (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7).\\n  🟠 Оранжевий (!): небезпечні умови очікуються хоча б в один із найближчих 3 днів.\\nКрок 5. Натисніть на картку дня, щоб розгорнути погодинний прогноз.\\nКрок 6. Щоб додати кілька міст одночасно — введіть наступне місто в той самий рядок після першого.\\nПорада: якщо прогноз не оновлюється, натисніть кнопку оновлення або перезавантажте сторінку.","image":"hills"},{"q":"🌤 Погода: часті питання","a":"Чому показує не те місто? — Введіть повну назву міста або додайте країну через кому, наприклад: «Київ, Україна».\\n\\nЧому немає прогнозу? — Можливо, API-ліміт вичерпано. Зачекайте кілька хвилин і спробуйте знову.\\n\\nЩо означають значки поруч із містом? — Червоний або оранжевий знак оклику попереджає про небезпечні погодні умови (детальніше у розділі «Погода: навчання»).\\n\\nЯк прибрати місто зі списку? — Натисніть хрестик (✕) на картці міста.\\n\\nЧому УФ-індекс = 0 вночі? — Це нормально: УФ-випромінювання відсутнє без сонця.\\n\\nЯк дізнатись вологість ґрунту або атмосферний тиск? — Ці дані відображаються у розгорнутому вигляді картки «Зараз».","image":"hills"},{"q":"🌤 Погода: додаткові відомості","a":"Крім, назви міста ви можете зробити пошук по координатам.\\n Замітки: під логотипом є поле з датою, назвою(до 12символів) і кнопкою додати.\\nЯкщо ви не ввели дату(лише назву), то ви моджете встановити дату, натиснувши пару разів на дату у 16денному прогнозі.\\nДата підсвічується синім кольором у 16денному прогнозі. Для того щоб прибрати натисніть на дату і назву події в фіолетовому полі, під об'єктом встановленням дати.","image":"hills"},{"q":"Бундючий пошук","a":"Тут ми розміщуємо 200-250 цікавих, корисних сайтів та ігор... А також статті з Вікіпедії. При натиску на зірочку, ви можете перейти на сайт не вводячі символів.","image":null},{"q":"Відсутність реклами на музику","a":"Це трохи дивно, але логічно. Ми поважаємо авторське право. Заробляти на чужих піснях — це неправильно.","image":"three"},{"q":"📰 Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані безпечні RSS-джерела.\\nКрок 3. Щоб додати власне джерело:\\n  • Натисніть кнопку «+ Додати джерело».\\n  • Вставте посилання на RSS-стрічку сайту (закінчується на .xml, .rss або /feed).\\n  • Натисніть «Додати» — новини завантажаться автоматично.\\nКрок 4. У налаштуваннях новин можна:\\n  • Увімкнути автоскрол при відкритті сайту.\\n  • Приховати заголовок або опис новини.\\nКрок 5. Мітка «НОВЕ» — з'являється на 1 хвилину після того, як ви прокрутили до новини.\\nКрок 6. Для власників Google AI Key — доступна функція «ШІ-виклад»: чат-бот обговорює будь-яку новину. 1 новина = 10 останніх повідомлень. Повне очищення чату через 24 год без активності.\\nФільтрація: Новини з темами насильства, політики, 18+, криміналу, релігії (крім святкових привітань у погодних картках), казино, корупції, сект і теактів — не відображаються автоматично.","image":null},{"q":"📰 Новини: часті питання","a":"Чому деякі RSS не працюють? — Деякі сайти мають «биті» або порожні стрічки. Перевірте посилання через W3C Feed Validator або відкрийте його у браузері.\\n\\nЧи можна додати Facebook чи Twitter? — Ні. Ці платформи не мають RSS. Можна скористатись сторонніми конверторами (наприклад, RSS.app), але вони зазвичай платні.\\n\\nЧому новина не оновлюється? — RSS-стрічки оновлюються з боку самого сайту-джерела. Якщо джерело давно не публікувало — новин не буде.\\n\\nЯк поскаржитись на новину, що проскочила фільтр? — Надішліть скаргу на email: theturkeystudio@gmail.com з посиланням на новину.\\n\\nРекомендовані RSS-джерела:\\n• ScienceDaily: https://www.sciencedaily.com/rss/top/science.xml\\n• NASA: https://www.nasa.gov/rss/dyn/breaking_news.rss\\n• Суспільне: https://suspilne.media/feed/news/rss-uk.xml\\n• BBC World: https://feeds.bbci.co.uk/news/world/rss.xml\\n• TechCrunch: https://techcrunch.com/feed/\\n• The Verge: https://www.theverge.com/rss/index.xml\\n• Укрінформ: https://www.ukrinform.ua/rss\\n• IGN (ігри): https://feeds.feedburner.com/ign/news\\n• TED Talks: https://feeds.feedburner.com/TEDTalks_video","image":null},{"q":"Навчання по управлінню новинами","a":"У Стихії в розділі новини, ви можете додавати власні новинні сайти: RSS-стрічку. \\n      А у налаштуваннях, ви можете налаштувати автоскрол новин при відкритті сайту, і прибрати заголовок та опис новини\\nПримітка: Новини з елементами: війни, політики, 18+, порно, сексу, еротики, криміналу, суду, затримання, казино, корупції, релігії(виняток привітання зі святом, у погодних картках), таємних товариств(конспірологія або теорії змови), теракту, секти. Не відображаються. У разі якщо сайт показав вище перечислений елемент, ви можете(навіть мусите) надіслати скаргу на email! Ми хочемо щоб користувачі Стихії могли бачити к-ка погодних місць одночасно, ностальгувати, слухати музику без лімітів і реклами, а також щоб новини(більшість з яких погані) не псували вам день. \\nПримітка: Якість RSS: Деякі сайти мають \\"биті\\" або порожні RSS-стрічки. Якщо ви спробуєте додати таку, вам видасться помилка або нічого не покаже.\\nДля перевірки необхідно використати безкоштовні онлайн-валідатори, як-от W3C Feed Validation Service або просто відкрити посилання в браузері.\\nОбмеження, які важливо враховувати:\\nRSS-формат: Якщо сайт просто \\"новинний\\", але не має RSS (наприклад, Facebook або Twitter), ви не зможете його додати. Йому потрібно буде шукати спеціальні сервіси, що конвертують сторінки в RSS (наприклад, RSS.app), але це зазвичай платні послуги.\\nМітка Нове: Видима 1хв після скролу до новини.\\nДля тих хто має Google АІ Key, є функція ШІ виклад, чат-бот в плані новини, 1новина=10останніх повідомлень, повне очищення через 24год відсутності питань.\\n\\nНаука та технології:\\nScienceDaily (Top News): https://www.sciencedaily.com/rss/top/science.xml\\nNature (Research Highlights): https://www.nature.com/nature.rss\\nWired (Technology): https://www.wired.com/feed/category/science/feed/\\nTechCrunch: https://techcrunch.com/feed/\\nNASA (Breaking News): https://www.nasa.gov/rss/dyn/breaking_news.rss\\nThe Verge: https://www.theverge.com/rss/index.xml\\n\\nСвітові новини та аналітика:\\nBBC News (World): https://feeds.bbci.co.uk/news/world/rss.xml\\nReuters (Top News): https://feeds.reuters.com/reuters/topNews\\nAl Jazeera (English): https://www.aljazeera.com/xml/rss/all.xml\\nThe Economist (World): https://www.economist.com/world/rss.xml\\n\\nУкраїна (Українською):\\nУкраїнська правда: https://www.pravda.com.ua/rss/\\nNV.ua: https://nv.ua/rss/all.xml\\nСуспільне Новини: https://suspilne.media/feed/news/rss-uk.xml\\nУкрінформ: https://www.ukrinform.ua/rss\\n\\nБізнес та Економіка:\\nBloomberg (Technology): https://feeds.bloomberg.com/technology/news.rss\\nHarvard Business Review: https://hbr.org/rss/topics/leadership\\n\\nРозваги, Культура та Інше:\\nIGN (Games): https://feeds.feedburner.com/ign/news\\nNational Geographic: https://feeds.feedburner.com/ng/science\\nTED Talks: https://feeds.feedburner.com/TEDTalks_video\\nLifehacker: https://lifehacker.com/rss\\n\\nЯкщо ви помітили, що якась новина не оновлюється або посилання не працює — будь ласка, повідомте нам. Ми постійно оновлюємо список джерел.\\nІще дещо для соцмереж і т.д:\\n1. Telegram (Найпростіше для RSS)\\nRSSHub: Готовий публічний сервіс, який перетворює майже будь-що на RSS. Для Telegram-каналу достатньо посилання:\\n[https://rsshub.app/telegram/channel/ім_я_каналу](https://rsshub.app/telegram/channel/ім_я_каналу)\\nTGStat / Telemetr RSS: Деякі агрегатори надають готові RSS-стрічки публічних каналів.\\nTelegram Bot API (JS Wrapper): Створити безкоштовного бота, додати його в канал (або читати публічний канал через getChatHistory) і пересилати пости у свій React-додаток через REST API.\\n2. YouTube\\nУ YouTube є вбудовані безкоштовні RSS-стрічки для кожного каналу, про які мало хто знає. Всі відео та шортси каналу можна отримувати без жодних ключі API:\\nЗа ID каналу:\\n[https://www.youtube.com/feeds/videos.xml?channel_id=UC](https://www.youtube.com/feeds/videos.xml?channel_id=UC)...\\nЗа назвою каналу (через RSSHub):\\n[https://rsshub.app/youtube/user/ім_я_користувача](https://rsshub.app/youtube/user/ім_я_користувача)\\n\\n3. Facebook, Instagram, TikTok та Hive\\nЦі платформи найжорсткіше блокують прямий доступ. Щоб читати блогерів безкоштовно:\\nRSSHub (Universal Parser): Головний порятунок для фронтендера. Він має готові маршрути для TikTok, Instagram та Facebook:\\n[https://rsshub.app/tiktok/user/@username](https://rsshub.app/tiktok/user/@username)\\n[https://rsshub.app/instagram/user/username](https://rsshub.app/instagram/user/username)\\nRSS.app / Feed43: Безкоштовні веб-сервіси, які парсять HTML-сторінку блогера й видають вам готовий RSS XML/JSON (на безкоштовних тарифах є ліміти на 3-5 джерел, але для декількох затишних блогерів цього вистачає).\\nPuppeteer / Cheerio (Власний micro-scraper): Якщо задеплоїти невеличку безкоштовну Node.js функцію на Vercel чи Render, вона може раз на день заходити на сторінку та зчитувати останні пости.","image":null},{"q":"🤖 ШІ-Допомога: покроковий посібник","a":"Крок 1. Відкрийте розділ «Допомога ШІ» у меню.\\nКрок 2. Оберіть провайдера ШІ:\\n  • Gemini (Google) — потрібен Gemini API Key з aistudio.google.com\\n  Крок 3. Вставте ваш API-ключ у відповідне поле. Ключ зберігається лише на вашому пристрої.\\nКрок 4. Оберіть обсяг відповіді: Менше / Нормально / Більше.\\nКрок 5. Оберіть стиль: Дружньо / Стандартно / Науково.\\nКрок 6. Напишіть запитання у текстовому полі. Натисніть Enter або кнопку ➤.\\nКрок 7 (Gemini). Можна прикріпити: фото, відео або аудіофайл — натисніть іконку 📎. Gemini проаналізує вміст.\\nКрок 8 (Gemini). Кнопка 📸 — робить скріншот поточної сторінки і відправляє Gemini: «Поясни що бачиш» або «Що можна покращити на цій сторінці?»\\nКрок 9. Натисніть на прикріплений файл щоб переглянути його на весь екран.\\nКрок 10. Кнопка 📋 на відповіді бота — копіює текст у буфер обміну.\\nКрок 11. 🎤 — голосовий ввід запитання (підтримує українську мову).\\nКрок 12. 🧹 — очищає всю історію чату.\\nПорада: Shift+Enter = новий рядок у запиті без відправлення.","image":null},{"q":"🤖 ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key». Чи зберігаються мої ключі на сервері? — Ні. Ключі зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо.\\n\\nПомилка 503 від Gemini — що робити? — Це тимчасове перевантаження серверів Google. Зачекайте 1-2 хвилини і натисніть «Спробувати ще раз».\\n\\nЧи може ШІ аналізувати сторінку сайту? — Так! Тільки для Gemini: натисніть 📸, а потім запитайте «Що ти бачиш?» або «Що можна покращити?».\\n\\nЧи підтримує ШІ аудіофайли? — Так, Gemini 2.5 Flash аналізує аудіо (mp3, wav, ogg та ін.).\\n\\nЯк скопіювати відповідь? — Натисніть кнопку 📋 у правому верхньому куті повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":null},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Відкрийте розділ «Карта» або «Клімат» у меню.\\nКрок 2. На карті відображаються кліматичні зони, температурні аномалії або погодні дані по регіонах.\\nКрок 3. Клікніть на будь-яку точку карти — з'явиться детальна інформація про клімат цього регіону.\\nКрок 4. Використовуйте жести масштабування (колесо миші або пальці на сенсорному екрані) для наближення/віддалення.\\nКрок 5. Перемикайте шари карти (якщо доступно) для перегляду різних кліматичних параметрів.","image":"texts"},{"q":"🗺 Карта клімату: часті питання","a":"Чому карта не завантажується? — Перевірте інтернет-з'єднання. Карта потребує стабільного підключення.\\n\\nЧи можна зберегти знімок карти? — Використовуйте скріншот браузера або функцію ШІ 📸.\\n\\nЩо означають кольори на карті? — Зазвичай: синій — холодно, жовтий — тепло, червоний — спека або аномалія. Конкретне пояснення — у легенді на карті.","image":"texts"},{"q":"🎨 Фан-арти: покроковий посібник","a":"Крок 1. Відкрийте розділ «Фан-арти».\\nКрок 2. Перегляньте галерею — зображення відображаються у сітці.\\nКрок 3. Клікніть на зображення, щоб відкрити його у повноекранному режимі.\\nКрок 4. У повноекранному режимі можна:\\n  • Завантажити зображення.\\n  • Поділитися (якщо функція доступна).\\nКрок 5. Усі фан-арти намальовані вручну автором сайту. Права на власні твори залишаються за вами — деталі в Угоді користувача.","image":"two"},{"q":"🎨 Фан-арти: часті питання","a":"Чи можна завантажити фан-арт? — Так. Натисніть іконку завантаження в повноекранному режимі.\\n\\nЧи можна надіслати свій малюнок? — Напишіть на theturkeystudio@gmail.com. Можливо, вашу роботу додадуть до галереї!\\n\\nЩирість важливіша за досконалість.\\n\\nЧи можна використати фан-арти комерційно? — Тільки у роздрукованому вигляді з підписом автора. Докладніше — в Угоді користувача, пункт 3.2.","image":"two"},{"q":"🎬 Декоратор: покроковий посібник","a":"Крок 1. Відкрийте розділ «Декоратор».\\nКрок 2. Оберіть базовий шаблон або зображення.\\nКрок 3. Додавайте декоративні елементи: рамки, стікери, ефекти.\\nКрок 4. Налаштуйте положення, розмір та прозорість кожного елемента.\\nКрок 5. Завантажте готовий результат кнопкою «💾 Зберегти».","image":null},{"q":"🖥 Загальне: навігація та меню","a":"Меню ☰ (гамбургер) — відкриває бокову панель з усіма розділами сайту.\\nКожна кнопка у меню має підказку — наведіть курсор для опису функції.\\nЛого Стихії — три кнопки:\\n  • Зліва — завантажити поточний вигляд.\\n  • Вгорі — друкувати.\\n  • Справа — повноекранний режим.\\nТемна/Світла тема — перемикач у шапці (Header).\\nАдаптивність: сайт повністю адаптований для мобільних пристроїв.","image":"logofix"},{"q":"🖥 Загальне: часті питання","a":"Що таке Стихія? — Це веб-платформа «погода + музика + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити.\\n\\nЧи є мобільний додаток? — Поки що ні. Але сайт оптимізований для мобільних браузерів.\\n\\nЯк зв'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧи є підписка? — Так, деякі функції можуть бути доступні за підпискою. Ціни можуть змінюватись з попередженням за 3 тижні.\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам.","image":"one"},{"q":"За що відповідає меню?","a":"Перестановнку секцій, зміну темної теми окремо кожної секції, відображення(так ви можете вимкнути її якщо вона непотрібна) Доступ після реєстрації. Та багато чого ще...","image":"logofix"},{"q":"Навіщо реєстрація?","a":"Це необхідно для збереження карток погоди, міток на карті та впевненості, що контент використовується за призначенням.","image":"one"},{"q":"Плани і тематика","a":"Сайту з багатьма відсилками ще ніколи не було. Працюю над поліпшенням теперішнього, та додаванхням відсилок і я відкритий до ваших ідей! The strangest site of all.","image":"two"}]`),Vf="/assets/logo-CeE8IWwr.webp",Bf="/assets/prewiew-CkyBq-Ws.webp",Hf="/assets/what-Dh9YNb09.webp",ss="/assets/myone-Dyn4Do12.webp",Kf="/assets/mytwo-DY56vL7p.webp",Uf="/assets/soon-Cz5fTUD_.webp",Wf="/assets/mythree-BY2evDkD.webp",dd=Ws({Tooltip:()=>Di,default:()=>ud}),_f=i.div`
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
`,qf=le`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,Jf=le`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,cd=le`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,Gf=le`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,Yf=et`
  opacity: 0;
  transform-origin: left center;
  animation: ${Gf} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:t})=>et`
    animation-delay: ${.1+(t||0)*.05}s;
  `}
`,Zf=i.div`
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
`,Xf=i.div`
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
  animation: ${t=>t.$isClosing?Jf:qf} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,Qf=i.div`
  background:  ${t=>t.$isDarkMode?"#174348b1":"#ffd001"};
  z-index: 10;
`,eg=i.div`
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
`,tg=i.div`
  display: flex;
  justify-content: center;
`,ls=i.button`
  background: ${({$active:t,$isDarkMode:n})=>t?"#8a2be2":n?"#0c0c0cbf":"#fdff98"};

  color: ${({$active:t,$isDarkMode:n})=>t?"#ffffff":"#020202"};

  border: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({$active:t,$isDarkMode:n})=>t?"#7b22cc":n?"#1a1a1ce6":"#fbff02"};
  }
`,pd=i.button`
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
`,ds=i(pd)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${cd} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,ng=i.div`
  margin-top: 3px;
`,ag=i.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${Yf}
`,rg=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${({$rating:t,$isDarkMode:n})=>t===1?"#8a2be2":n?"#ffffff":"#111111"};
  opacity: ${t=>t.$rating===-1?.4:1};
  transition: all 0.3s ease;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${({$rating:t,$isDarkMode:n})=>t===-1?n?"#555555":"#cccccc":"#8a2be2"};
    margin-right: 12px;
    display: inline-block;
  }
`,ig=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`,og=i.div`
  flex: 1;
`,cs=i.button`
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
`,sg=i.div`
  display: flex;
  align-items: center;
  gap: 7px;
`,lg=i.img`
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
`,dg=i.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${cd} 0.3s ease-out forwards;
`,ps=i.button`
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
`,us=i.button`
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
`,cg=i.div`
  position: fixed;
  inset: 0;
  z-index: 9400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.72);
`,pg=i.div`
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
`,ug=i.h2`
  margin: 0 42px 18px 0;
  font-size: 22px;
`,fg=i.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  white-space: pre-line;
`,gg=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
`,xg=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,hg=i.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,mg=i.input`
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
`,Di=({content:t,children:n,placement:a="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),{refs:u,floatingStyles:g,context:x}=ma({open:l,onOpenChange:d,placement:a,strategy:"fixed",transform:!1,whileElementsMounted:ua,middleware:[ca(8),pa(),va({padding:5}),ka({element:h})]}),{isMounted:T,styles:k}=ga(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=fa(x,{move:!1}),z=ha(x),F=ba(x),I=ja(x,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:m}=wa([P,z,F,I]);if(!t)return n;const v=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:u.setReference,...y(),style:{display:"inline-flex"},children:n}),T&&(0,e.jsx)(ya,{children:(0,e.jsxs)(_f,{ref:u.setFloating,$isDarkMode:c,style:{...g,...k},...m(),children:[t,(0,e.jsx)(xa,{ref:h,context:x,fill:v,stroke:"#00acb9",strokeWidth:1})]})})]})},ud=({onClose:t,isOpen:n,initialFaqQuestion:a,isDarkMode:c})=>{const[l,d]=(0,r.useState)(!1),h=jr(D=>D.calendar?.customDays||[]),[u,g]=(0,r.useState)(null),[x,T]=(0,r.useState)({}),[k,P]=(0,r.useState)(""),[z,F]=(0,r.useState)("faq"),I=1,y=-1,[m,v]=(0,r.useState)(null),j=(0,r.useCallback)(()=>{if(m){v(null);return}if(u){g(null);return}v(null),d(!0),setTimeout(()=>{d(!1),t()},400)},[t,m,u]),C=D=>{const N=document.createElement("a");N.href=D,N.download=`stykhiya_image_${Date.now()}.png`,document.body.appendChild(N),N.click(),document.body.removeChild(N)},B=D=>{const N=window.open("","_blank");N.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${D}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`),N.document.close()};(0,r.useEffect)(()=>{const D=N=>{N.key==="Escape"&&j()};if(n||l)return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[n,l,j]);const H=(D,N)=>{const re=(x[D]||0)===N?0:N;T({...x,[D]:re})},J=r.useMemo(()=>{const D=new Date().toISOString().split("T")[0];return h.filter(N=>N.date<D).sort((N,re)=>re.date.localeCompare(N.date)).slice(0,5)},[h]),Q=r.useMemo(()=>{const D={hills:$i,texts:Qs,logofix:Vf,preview:Bf,info:Hf,one:ss,two:Kf,soon:Uf,might:ss,three:Wf},N=Of.map(re=>({...re,image:re.image?D[re.image]??null:null}));if(J.length>0){const re=J.map(xe=>`• ${xe.date}: ${xe.reason}`).join(`
`);N.unshift({q:"📚 Архів минулих подій (ліміт 5)",a:`Це події, які ви додавали, але їх час уже минув:

${re}`,image:null})}return N},[J]);if((0,r.useEffect)(()=>{if(!n){g(null);return}let D=null;if(a){const N=Q.findIndex(re=>re.q===a);N>=0&&(D=Q[N],F("faq"))}g(D)},[Q,a,n]),!n&&!l)return null;const he=D=>D.content&&Array.isArray(D.content)&&D.content.length>0?D.content.map((N,re)=>{if(N.type==="image"){const xe=N.src||N.image,ce=N.alt||D.q||"FAQ image";return(0,e.jsx)("div",{style:{marginBottom:"10px"},children:(0,e.jsx)(lg,{src:xe,alt:ce,onClick:()=>v(xe)})},`image-${re}`)}if(N.type==="text"){const xe=N.value||N.text||"";return(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:String(xe).replace(/\n/g,"<br/>")}},`text-${re}`)}return null}):(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:(D.a||"").replace(/\n/g,"<br/>")}}),te=[...Q].map((D,N)=>({...D,originalIndex:N,rating:x[N]||0})).filter(D=>{if(!k)return!0;const N=k.toLowerCase();return D.q?.toLowerCase().includes(N)||D.a?.toLowerCase().includes(N)}).sort((D,N)=>N.rating-D.rating);return(0,e.jsxs)(Zf,{$isClosing:l,onClick:j,children:[(0,e.jsxs)(Xf,{$isDarkMode:c,$isClosing:l,onClick:D=>D.stopPropagation(),children:[(0,e.jsxs)(Qf,{$isDarkMode:c,children:[(0,e.jsx)(pd,{onClick:j,children:"Зрозуміло!"}),(0,e.jsx)("h1",{style:{textAlign:"center",fontSize:"26px",color:c?"#ffffff":"#010101",marginTop:"-5px"},children:"Навчання"}),(0,e.jsx)("p",{style:{textAlign:"center",fontSize:"13px",color:c?"#ffffff":"#000000",marginTop:"-8px"},children:"Останнє оновлення: 30 серпня 2026 року"}),(0,e.jsxs)(tg,{children:[(0,e.jsx)(ls,{$active:z==="faq",onClick:()=>F("faq"),style:{borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px",borderRight:"1px solid rgba(0, 0, 0, 0.1)"},children:"Питання (FAQ)"}),(0,e.jsx)(ls,{$active:z==="ai",style:{borderBottomRightRadius:"20px",borderTopRightRadius:"20px"},children:"ШІ Асистент"})]})]}),(0,e.jsx)(eg,{children:z==="faq"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(mg,{type:"search",placeholder:"Пошук питань...","aria-label":"Пошук питань",value:k,onChange:D=>P(D.target.value)}),(0,e.jsxs)(ng,{style:{marginTop:0},children:[te.length===0&&(0,e.jsx)("p",{style:{textAlign:"center",color:"#555"},children:"Питань за цим запитом не знайдено."}),te.map((D,N)=>{const re=D.originalIndex,xe=x[re]||0;return(0,e.jsx)(ag,{$index:N+1,children:(0,e.jsx)(rg,{$isDarkMode:c,$rating:xe,onClick:()=>g(D),children:(0,e.jsxs)(ig,{children:[(0,e.jsx)(og,{children:D.q}),(0,e.jsxs)(sg,{children:[(0,e.jsx)(Di,{content:"Корисно",isDarkMode:c,children:(0,e.jsx)(cs,{onClick:ce=>{ce.stopPropagation(),H(re,I)},"aria-label":"Корисно",children:xe===I?(0,e.jsx)(vo,{style:{color:"blue"}}):(0,e.jsx)(vo,{})})}),(0,e.jsx)(Di,{content:"Не корисно",isDarkMode:c,children:(0,e.jsx)(cs,{onClick:ce=>{ce.stopPropagation(),H(re,y)},"aria-label":"Не корисно",children:xe===y?(0,e.jsx)(wo,{}):(0,e.jsx)(wo,{})})})]})]})})},re)})]})]})})]}),u&&(0,e.jsx)(cg,{onClick:()=>g(null),children:(0,e.jsxs)(pg,{$backgroundImage:u.image,onClick:D=>D.stopPropagation(),children:[(0,e.jsx)(ds,{onClick:()=>g(null),children:"×"}),(0,e.jsx)(ug,{children:u.q}),(0,e.jsx)(fg,{children:he(u)}),u.image&&(0,e.jsxs)(gg,{children:[(0,e.jsx)(us,{onClick:()=>C(u.image),children:"Скачати"}),(0,e.jsx)(us,{onClick:()=>B(u.image),children:"Друкувати"})]})]})}),m&&(0,e.jsxs)(xg,{onClick:()=>v(null),children:[(0,e.jsx)(ds,{onClick:()=>v(null),children:"×"}),(0,e.jsxs)(dg,{children:[(0,e.jsx)(ps,{onClick:D=>{D.stopPropagation(),C(m)},children:"Скачати"}),(0,e.jsx)(ps,{onClick:D=>{D.stopPropagation(),B(m)},children:"Друкувати"})]}),(0,e.jsx)(hg,{src:m,alt:"Прев'ю зображення",onClick:D=>D.stopPropagation()})]})]})},bg=[/війн(?:а|и|ою|і|нах)/iu,/бойов(?:і|их|им|ий|а|ої)/iu,/конфлікт(?:у|и|ів|ом)?/iu,new RegExp("(?<!\\p{L})фронт(?:у|і|ом)?(?!\\p{L})","iu"),/атак(?:а|и|у|ою|ам|ах|увал.*)/iu,/обстріл(?:у|и|ів|ом|ами)?/iu,new RegExp("безпілотник(?:и|ів|ами|ом)?|дрон(?:и|ів|ами)?|(?<!\\p{L})бпла(?!\\p{L})","iu"),/загибл(?:ий|их|і|им|ними)/iu,/поранен(?:ий|их|і|им|ними)/iu,/руйнуванн(?:я|ь|ям)/iu,/військов(?:ий|і|их|им|ними|е|а|ого)/iu,/армі(?:я|ї|ю|єю)/iu,/окупант(?:и|ів|ами)?|агресор(?:и|ів)?/iu,/ракет(?:а|и|ний|них|ами)/iu,/збройн(?:і|их)\s+сил(?:и|)/iu,new RegExp("(?<!\\p{L})(?:тцк|зсу|сбу|дбр|єрдр)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})рф(?!\\p{L})|росі(?:я|ї|єю|йськ.*)","iu"),/політик(?:а|и|ою|і|ів)/iu,/корупці(?:я|ї|ю|єю)/iu,/депутат(?:и|ів|ом|а)?|президент(?:и|ів|а)?/iu,new RegExp("(?<!\\p{L})(?:трамп(?:а|у)?|путін(?:а|у)?|байден(?:а|у)?|зеленськ(?:ий|ого|ому|им))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})мит(?:о|а|ам|ами|ах)(?!\\p{L})","iu"),new RegExp("уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\\p{L})влад(?:а|и|ою)(?!\\p{L})","iu"),/санкці(?:ї|й|ям|ями)/iu,/домовленість|переговор(?:и|ів|ами)/iu,/кримінал(?:у|ом)?/iu,/поліці(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})суд(?:у|ом|ів)?(?!\\p{L})","iu"),/затриман(?:о|ий|і|а)/iu,/вбивств(?:о|а|ом|ах)/iu,/крадіжк(?:а|и|ою|ах)/iu,/вирок(?:у|и|ів|ами|ах)?/iu,/в'?язниц(?:я|і|ю|ею|ях)/iu,/арешт(?:у|и|ів|ами|ах)?/iu,/теракт(?:и|ів|ами|ах|у)?/iu,/вибух(?:и|ів|ами|ах|у)?/iu,/злочин(?:у|и|ів|ом)?/iu,/напад(?:у|і|ом)?|нападник(?:а|и|ів)?/iu,/побої|мордуванн(?:я|ь|ям)/iu,/душивши?|заламав/iu,/порно(?:графі|г| розроб| фільм.*)?/iu,/porno|pornography|\bporn\b|hentai|хентай|nsfw/iu,/еротик(?:а|и|ою|і|чн.*)?|erotic|erotica/iu,new RegExp("секс(?:у|ом|уальн.*)?(?!\\p{L})","iu"),/\bsex(?:y|ual)?\b/iu,/onlyfans|онліфанс|онлифанс|only-?fans/iu,/webcam|вебкамер.*|вебка/iu,/(?<!\d)18\+(?!\d)|18plus|adult\s+content/iu,/оголен(?:а|і|ий|о|их|ення)|роздягнен(?:а|і|ий|о)/iu,/без\s+одягу|нагот(?:а|і)|нюдс|nudes?|\bnaked\b/iu,/інтим(?:ний|ні|них|ного|у|ом)?|intimat(?:e|y)/iu,/стриптиз|топлес|topless/iu,/оргі(?:я|ї|ю|ями|й)|оргазм(?:и|ів)?/iu,/пікантн(?:і|ий|ого|е)\s+(?:фото|відео|кадри|знімки|подробиці)/iu,/гаряч(?:і|е)\s+(?:фото|відео|кадри|бікіні)/iu,/без\s+білизни|прозорому\s+вбранні|у\s+бікіні|у\s+купальнику/iu,/(?:онлайн\s*)?казино|casino/iu,/рулетк(?:а|и|у|ою|ці|ок)/iu,/слот(?:и|ів|ами|ах|ам)?|slots?/iu,/покер(?:у|ом|ний|ного)?|poker/iu,/азарт(?:у|ний|ні|них|ою|ість)?/iu,/гральн(?:ий|ого|і|их|им|ними)\s+(?:бізнес|автомат|заклад|сектор)/iu,/ігров(?:і|их|им|ними)\s+автомат/iu,/однорук(?:ий|і)\s+бандит/iu,new RegExp("(?<!\\p{L})(?:краіл|кріаіл)(?!\\p{L})","iu"),/лотере(?:я|ї|ю|єю|йний|йного|йних)/iu,/джекпот(?:и|ів|ом)?|jackpot/iu,/виграш(?:і|ів|ам)?\s+(?:в|у)\s+(?:казино|слотах|лотерею)/iu,/букмекер(?:и|ів|ського|ських|ська|ський)?/iu,/спортбетт?інг|sports?\s*betting|betting/iu,/gambl(?:e|ing|er)?/iu,/prediction\s+markets?/iu,/ставк(?:а|и|у|ами|ах)\s+(?:онлайн|на|в|у|через)/iu,/зроби(?:ти|в|ла)\s+ставку/iu,new RegExp("(?<!\\p{L})бк\\s+(?:букмекер|ставок|казино)(?!\\p{L})","iu"),/фріспін(?:и|ів)?|freespins?|бездеп(?:озит.*)?/iu,/бонус\s+за\s+реєстрацію|промокод\s+(?:казино|ставок)/iu,/халяв(?:а|и|у|ою)/iu,/favbet|фавбет|favorit|фаворит/iu,/vbet|вбет/iu,/cosmolot|космолот/iu,/slots\s*city|слотс\s*сіт(?:і|и)/iu,/supergra|супер\s*гра|супергра/iu,/first\s*casino|ферст|фірст/iu,/casino\s*ua|казино\s*юа/iu,/champion\s*(?:casino)?|чемпіон\s*(?:казино)?/iu,/ggbet|ггбет/iu,/slotoking|слотокінг|слотокинг/iu,/pin-?up|пінап|пін\s*ап/iu,/slotor|слотор/iu,/777\s*casino|казино\s*777/iu,/parimatch|париматч|паріматч/iu,/1xbet|1хбэт|1хбет|1xslots/iu,/mostbet|мостбет/iu,/vulkan|vulcan|вулкан/iu,/joycasino|джойказино/iu,/casino-x|казино\s*ікс|казино\s*икс/iu,/vavada|вавада/iu,/melbet|мелбет/iu,/betwinner|бетвіннер|бетвиннер/iu,/megapari|мегапарі|мегапари/iu,/catcasino|catbet|кетказино|кетбет/iu,/john\s*bet|джон\s*біт/iu,/ice\s*casino|verde\s*casino|hitnspin/iu,/fonbet|фонбет|marathonbet|марафонбет/iu,/bet365|бет365/iu,/unibet|унібет|унибет/iu,/william\s*hill|вільям\s*хілл/iu,/888\s*(?:casino|poker)?/iu,/pokerstars|покерстарс/iu,/betfair|бетфеір|бетфеар/iu,/bwin|бвін/iu,/stake\s*(?:casino)?|bc\.game|roobet|rollbit/iu,/крипто(?:валюта|валют|гроші|валютні)?|крипт(?:а|і)/iu,/crypto(?:currency)?|bitcoin|\bbtc\b|ethereum|\beth\b|\busdt\b|binance/iu,/аірдроп|airdrop|тапалк(?:а|и)|hamster\s*kombat|хом['’`ʼ]?як/iu,/gallup/iu,/релігі(?:я|ї|ю|єю|йн.*)/iu,new RegExp("(?<!\\p{L})(?:пцу|упц|умп)(?!\\p{L})","iu"),/церкв(?:а|и|і|ою|ами|ах)|храм(?:и|ів|ом|ах)?|собор(?:и|ів)?/iu,/патріарх|митрополит|священник|папа\s+римськ.*|ватикан/iu,/парафія|єпархія|лавра/iu,new RegExp("(?<!\\p{L})сект(?:а|и|ою|ам|ами|ах)(?!\\p{L})|саєнтолог.*|свідки\\s+єгови","iu"),new RegExp("(?<!\\p{L})культ(?:и|ів|у|ом)?(?!\\p{L})","iu"),/масон(?:и|ів|ами|ах)?/iu,/жертвопринес.*|жертвопринош.*/iu,/гороскоп(?:и|ів)?|астролог(?:ічна|ічний|ія|и)?/iu,/мольфар(?:и|ів|ами)?|екстрасенс(?:и|ів)?|ворожк(?:а|и|ам)/iu,new RegExp("карт(?:и|ах)\\s+таро|(?<!\\p{L})гаданн(?:я|ь)(?!\\p{L})|нумеролог","iu"),/пророцтв(?:о|а|ення)|передбаченн(?:я|ь)\s+(?:мольфара|астролога|ванг)/iu,/порч(?:а|і)|сглаз|приворо/iu,new RegExp("(?<!\\p{L})(?:набу|сап|бэб)(?!\\p{L})","iu"),/обшук(?:и|ів|ами|ах)?/iu,/детектив(?:и|ів|ам|ами)?/iu,/слідч(?:і|их|им|ий)\s+дії/iu,/слуг(?:а|и)\s+народу/iu,/фракці(?:я|ї|ю|єю)/iu,/міністр(?:и|ів|ам|ами|а)?/iu,/голосувати|голосуванн(?:я|ь)/iu,/підпал(?:и|ів|ам|ами)?/iu,/вербувати|завербува.*/iu,/аварі(?:я|ї|ю|єю)/iu,new RegExp("(?<!\\p{L})(?:дзп|дтп)(?!\\p{L})","iu"),/врізавс(?:я|ь)|зіткненн(?:я|ь)/iu,/травмован(?:і|их|ий|о)/iu,/постраждал(?:і|их|и)/iu,/вибор(?:и|ів|ам|ах|чий|чої)/iu,/опозиці(?:я|ї|ю|єю)/iu,/кампані(?:я|ї|ю)/iu,/партій(?:ний|них|ні|я|ї)/iu,/незаконн(?:ий|ого|е)\s+переправленн(?:я|ь)/iu,/схем(?:а|и|ам|ами)\s+(?:виїзду|втечі|переправлення)/iu,/хабар(?:і|ів|ник.*)|хабарництво/iu,/шахрайств(?:о|а|і)|шахраї/iu,/зґвалтува.*|ґвалтівник(?:а|и)?|педофіл/iu,/скандал(?:и|ів)?|розслідуванн(?:я|ь)/iu,new RegExp("(?<!\\p{L})(?:ніцой|ларис(?:а|и|і|у)?\\s+ніцой)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:євген(?:а|у)?\\s+хмар(?:а|и|і|ою)?|хмар(?:а|и)?\\s+євген(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:гордон(?:а|у|ом)?|дмитро\\s+гордон)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})спартак(?:\\s+суббот?а|\\s+суббот?и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алх[іi]м(?:а|у)?|анн(?:а|и)\\s+алх[іi]м)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:дурнєв(?:а|у)?|кондратюк(?:а|у)?|волошин(?:а|у)?|пренткович)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:янін(?:а|и)\\s+соколов(?:а|и)|сергі(?:й|я)\\s+притул(?:а|и)|олег\\s+скрипк(?:а|и))(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:єрмак(?:а|у)?|татаров(?:а|у)?|залужн(?:ий|ого|ому)|сирськ(?:ий|ого|ому)|буданов(?:а|у)?|резніков(?:а|у)?|безугл(?:а|у|ої)|арахамі(?:я|ї)|гетьманцев(?:а|у)?)(?!\\p{L})","iu"),/василь\s+малюк/iu,new RegExp("(?<!\\p{L})(?:кадиров(?:а|у)?|пригожин(?:а|у)?|герасимов(?:а|у)?|мішустін(?:а|у)?|соловйов(?:а|у)?|скабєєв(?:а|і|у)|сімоньян|дугін(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:ппо|гур|ова|кмва)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:каб(?:и|ів|ами)?|фаб(?:и|ів)?)(?!\\p{L})|шахед(?:и|ів|ами)?|геран(?:ь|і)","iu"),/повітрян(?:а|і)\s+тривог(?:а|и)|укритт(?:я|ях)|бомбосховищ(?:е|ах)|приліт(?:и|ів)?|контрнаступ/iu,/блек\s*аут|відключенн(?:я|ь)\s+(?:світла|електроенергії)|графік(?:и|ів)\s+відключень/iu,/інфляці(?:я|ї)|дефолт|подорожчанн(?:я|ь)|податк(?:и|ів)|борг(?:и|ів)|дефіцит\s+бюджету/iu,/банкрутств(?:о|а)/iu,new RegExp("(?<!\\p{L})(?:шольц(?:а|у)?|пісторіус(?:а|у)?|фіцо|мелоні|блінкен(?:а|у)?|столтенберг(?:а|у)?|рютте|гросс(?:і|і))(?!\\p{L})","iu"),/фаріон/iu,new RegExp("(?<!\\p{L})(?:порошенк|ющенк|кучм|кравчук|янукович|шмигал|гройсман|яценюк|тимошенк|кличк|садов|труханов)(?:о|а|у|ом|ові|ий|ого)?(?!\\p{L})","iu"),new RegExp("ліндсі\\s+ґ?рем|(?<!\\p{L})ґ?рем(?!\\p{L})","iu"),new RegExp("джей\\s*ді\\s*венс|(?<!\\p{L})венс(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:байден|обам|буш|стармер|сунак|джонсон|макрон)(?:а|у|ом|и)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})каллас(?!\\p{L})","iu"),/урсул(?:а|и|у)|фон\s+дер\s+ляєн/iu,/лукашенк(?:о|а|у|ом)/iu,new RegExp("(?<!\\p{L})дуд(?:а|и|і|ою)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:туск|коморовськ|качинськ)(?:а|у|ом|ий|ого|им)?(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})санд(?:у|и|а)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:орбан|федоров|лавров|захаров|шойгу|медведєв|пєсков)(?:а|у|ом|и)?(?!\\p{L})","iu"),/хаменеї|пезешкіан|раїсі/iu,/сі\s*цзіньпін/iu,/кім\s*чен\s*ин/iu,/свастик(?:а|и|у|ою)/iu,/нацизмін?|нацист(?:и|ів|ський|ська)?/iu,/фашизмін?|фашист(?:и|ів|ський|ська)?/iu,/рашизмін?|рашист(?:и|ів|ський|ська)?/iu,/комунізмін?|комуніст(?:и|ів|ський|ська)?/iu,/ґ?геббельс(?:а|у|ом)?/iu,/ґ?гіммлер(?:а|у|ом)?/iu,/ґ?герінг(?:а|у|ом)?/iu,/ґ?гесс(?:а|у|ом)?/iu,/борман(?:а|у|ом)?/iu,/ейхман(?:а|у|ом)?|айхман(?:а|у|ом)?/iu,/ріббентроп(?:а|у|ом)?/iu,/менгеле/iu,/розенберг(?:а|у|ом)?/iu,/кальтенбруннер(?:а|у|ом)?/iu,/коновалець|коновальц(?:я|ю|ем)/iu,/бандер(?:а|и|і|у|ою|івськ.*)/iu,/шухевич(?:а|у|ем)?/iu,/андрі(?:й|я)\s+мельник/iu,/сталін(?:а|у|ом)?/iu,/ленін(?:а|у|ом)?/iu,/берій?(?:я|ї|ю|єю)/iu,/молотов(?:а|у|ом)?/iu,/гітлер(?:а|у|ом)?/iu,new RegExp("(?<!\\p{L})хер(?:а|у|ом|и)?(?!\\p{L})","iu"),/хуй|хюй|х\*+|залуп(?:а|и|у|ою)|мудак(?:и|а|ів)?/iu,/пизд|пізд|піпєц|пипец/iu,/(?:ви|за|на|під|по|пере|з)?єб(?:ати|ать|ало|аний|ані|уть|учий|ут|анутий)/iu,/(?:ви|за|на|під|по|пере|з)?еб(?:ать|ало|анный|анные|учий|учи)|йоб(?:аний|ані|ний|них)/iu,new RegExp("бляд(?:ь|і|я|ям|ство)|блять|(?<!\\p{L})бля(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})сук(?:а|и|ою|ам|ами)(?!\\p{L})","iu"),/гондон(?:и|ів)?|гандон(?:и|ів)?|курв(?:а|и|ою)/iu,/срак(?:а|и|у|ою|ах)|жоп(?:а|и|у|ою|ах)/iu,new RegExp("(?<!\\p{L})гівн(?:о|а|ом)|говно|лайно","iu"),/сцяв|засцян.*|сцяк/iu,/х[*#@$]+й|х[*#@$]+р/iu,/п[*#@$]+зд[аяiі]/iu,/б[*#@$]+т[ьi]|б[*#@$]+д[ьi]/iu,/є[*#@$]+б|е[*#@$]+б/iu,new RegExp("(?<!\\p{L})(?:арестович(?:а|у)?|шарі(?:й|я|ю)|тищенк(?:о|а|у)|дубінськ(?:ий|ого)|кив(?:а|и|у)|бойк(?:о|а|у)|мураєв(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:коломойськ(?:ий|ого)|ахметов(?:а|у)?|пінчук(?:а|у)?|фірташ(?:а|у)?)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:маск(?:а|у)?|ілон\\s*маск|ердоган(?:а|у)?|нетаньягу)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:алл(?:а|и|і|у)?\\s+мазур|мосейчук|натал(?:ія|і|ією|ію)?\\s+мосейчук)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:квартал\\s*95|95\\s*квартал|95-?й?\\s*квартал|студі(?:я|ї|ю)\\s+квартал)(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})дизель\\s*шоу(?!\\p{L})","iu"),new RegExp("(?<!\\p{L})(?:драпат(?:ий|ого|ому|им|і))(?!\\p{L})","iu"),/мобілізаці(?:я|ї|ю|єю)|мобілізува.*/iu,/призов(?:у|на|ний|ників)?|повісток|повістк(?:а|и|у|ами)/iu,new RegExp("(?<!\\p{L})(?:генштаб(?:у|ом)?|гш\\s+зсу)(?!\\p{L})","iu"),/главком(?:а|у)?|командувач(?:а|і|ів)?/iu,/катуванн(?:я|ь|ям)|катува.*/iu,/побит(?:тя|тєм|ті)/iu,/зодіак(?:у|а|и)/iu],yg={a:"а",c:"с",e:"е",i:"і",o:"о",p:"р",x:"х",y:"у",k:"к",z:"з",n:"н"},wg=/[\u00AD\u200B-\u200D\u2060\uFEFF]/g,vg=/[\p{L}\p{M}]+/gu,kg=/[a-z]/i,jg=/[а-яіїєґ]/iu,Sg=new RegExp("(?<=\\p{L})[^\\p{L}\\s\\n\\r]{0,3}(?=\\p{L})|(?<=\\p{L})[\\s\\n\\r]+(?=\\p{L})","gu"),Cg=/[04513@$]/g,Tg={0:"о",4:"а",5:"с",1:"і",3:"е","@":"а",$:"с"},fs=new RegExp(bg.map(({source:t})=>`(?:${t})`).join("|"),"iu"),fd=t=>t?t.normalize("NFKC").replace(wg,"").toLowerCase().replace(vg,n=>!kg.test(n)||!jg.test(n)?n:n.replace(/[aceiopxykzn]/g,a=>yg[a])):"",Ag=t=>fd(t).replace(Cg,n=>Tg[n]).replace(Sg,""),gs=t=>fs.test(t)||fs.test(t.replace(/і/g,"и")),Ig=t=>{if(!t)return!1;const n=fd(t);return gs(n)||gs(Ag(t))},Dg=Ws({Tooltip:()=>zg,default:()=>gd}),Mg=i.div`
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
`,zg=({content:t,children:n,placement:a="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),{refs:u,floatingStyles:g,context:x}=ma({open:l,onOpenChange:d,placement:a,strategy:"fixed",transform:!1,whileElementsMounted:ua,middleware:[ca(8),pa(),va({padding:5}),ka({element:h})]}),{isMounted:T,styles:k}=ga(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=fa(x,{move:!1}),z=ha(x),F=ba(x),I=ja(x,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:m}=wa([P,z,F,I]);if(!t)return n;const v=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:u.setReference,...y(),style:{display:"inline-flex"},children:n}),T&&(0,e.jsx)(ya,{children:(0,e.jsxs)(Mg,{ref:u.setFloating,$isDarkMode:c,style:{...g,...k},...m(),children:[t,(0,e.jsx)(xa,{ref:h,context:x,fill:v,stroke:"#00acb9",strokeWidth:1})]})})]})},$g=le`
  from { opacity: 0; }
  to { opacity: 1; }
`,Rg=i.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`,wr=[{url:"https://phys.org/rss-feed/biology-news/animals-news/",name:"Phys.org",home:"https://phys.org"},{url:"https://www.sciencedaily.com/rss/top/environment.xml",name:"ScienceDaily",home:"https://www.sciencedaily.com"},{url:"https://www.nature.com/nature.rss",name:"Nature",home:"https://www.nature.com"}],Lg=le`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`,Fg=le`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`,Eg=i.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`,Pg=i.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${t=>t.$isDarkMode?"white":"#010101"};
  width: 100%;
  box-sizing: border-box;
`,Ng=i.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
`,Og=i.div`
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
`,Vg=i.div`
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
`,xs=i.button`
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
  animation: ${Lg} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${Fg} 2.5s ease-in-out infinite;
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
`,Bg=i.div`
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
`,_r=i.a`
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
`,Hg=i.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;
`,Kg=i.span`
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
`,Ug=i.span`
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
  animation: ${$g} 0.5s ease;
`,Wg=i.div`
  position: absolute;
  top: 3px;
  left: 83%;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 7;
`,_g=i.button`
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
`,qg=i(_g)`
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
`,Jg=i.div`
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
`,Va=i.button`
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
`,hs=i.div`
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
`,Gg=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`,Yg=i.div`
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
`,Zg=i(_t.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  z-index: 100000;
  padding: 5px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`,Xg=i.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  overflow-y: auto;
  padding-right: 8px;
`,Qg=i.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ex=i.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  font-weight: 700;
  color: #ffaa00;
  border-bottom: 1px solid rgba(255, 170, 0, 0.3);
  padding-bottom: 6px;
`,tx=i.div`
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
`,ms=i.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`,nx=new Set(wr.map(t=>t.name)),bs=({item:t,$isDarkMode:n,showImage:a,showTitle:c,showDescription:l,onAiSummaryClick:d,onReportClick:h,onMuteClick:u,onUnmuteClick:g})=>{const x=(0,r.useRef)(null),[T,k]=(0,r.useState)(t.isNew),[P,z]=(0,r.useState)(!1),[F,I]=(0,r.useState)(!1),[y,m]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{const C=await f.default.getItem("gemini_api_key");z(!!C)})();const j=C=>z(!!C.detail);return window.addEventListener("geminiKeyChanged",j),()=>window.removeEventListener("geminiKeyChanged",j)},[]),(0,r.useEffect)(()=>{if(!a)return;const v=new IntersectionObserver(([j])=>{j.isIntersecting&&(v.disconnect(),t.displayImage&&t.displayImage!=="data:image/webp;base64,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"?m(t.displayImage):m(lx(t.link||t.title||"")))},{rootMargin:"300px",threshold:0});return x.current&&v.observe(x.current),()=>v.disconnect()},[t.displayImage,t.link,a]),(0,r.useEffect)(()=>{if(!t.isNew)return;const v=new IntersectionObserver(([j])=>{if(j.isIntersecting){const C=setTimeout(async()=>{k(!1);try{const B=await f.default.getItem("seen_news_links")||[];B.includes(t.link)||await f.default.setItem("seen_news_links",[...B,t.link])}catch{}},6e4);return v.unobserve(j.target),()=>clearTimeout(C)}},{threshold:.5});return x.current&&v.observe(x.current),()=>v.disconnect()},[t.isNew,t.link]),t.isBlocked?(0,e.jsx)(_r,{$isDarkMode:n,style:{cursor:"not-allowed",position:"relative"},as:"div",children:(0,e.jsxs)(hs,{children:[(0,e.jsx)("span",{style:{fontSize:"40px",marginBottom:"10px"},children:"🔒"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4"},children:"Дана новина була неправомірна, і ви не можете її переглянути."})]})}):t.isMuted?(0,e.jsx)(_r,{$isDarkMode:n,style:{position:"relative",minHeight:"190px"},as:"div",children:(0,e.jsxs)(hs,{style:{background:"rgba(128, 128, 128, 0.5)"},children:[(0,e.jsx)("span",{style:{fontSize:"30px",marginBottom:"10px",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"🔇"}),(0,e.jsx)("h4",{style:{margin:0,fontSize:"14px",lineHeight:"1.4",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:"5px"},children:"Новину приховано."}),(0,e.jsx)("button",{onClick:v=>{v.preventDefault(),v.stopPropagation(),g&&g(t)},style:{marginTop:"10px",padding:"5px 15px",background:"#3f5959",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"Розглушити"})]})}):(0,e.jsx)(_r,{ref:x,href:t.link,target:"_blank",rel:"noopener noreferrer",$isDarkMode:n,children:(0,e.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:a?"190px":"auto",minHeight:"auto"},children:[T&&(0,e.jsx)(Ug,{children:"Нове"}),(0,e.jsx)(Kg,{onClick:v=>{v.preventDefault(),v.stopPropagation(),window.open(t.sourceHome,"_blank")},"aria-label":`Перейти на головну сторінку ${t.sourceName}`,children:t.sourceName}),(0,e.jsxs)(Wg,{"aria-label":"Дії з новиною",children:[(0,e.jsx)(qg,{"aria-label":"Налаштування картки новини",title:"Налаштування",onClick:v=>{v.preventDefault(),v.stopPropagation(),I(j=>!j)},children:(0,e.jsx)(Zs,{"aria-hidden":"true",style:{fontSize:"29px"}})}),F&&(0,e.jsxs)(Jg,{onClick:v=>{v.preventDefault(),v.stopPropagation()},children:[(0,e.jsxs)(Va,{$color:P?"#ff69b4":"#888",disabled:!P,title:P?"Прикріпити до ШІ-чату":"Додайте Gemini API-ключ",onClick:()=>{if(!P)return;const v=(t.description||t.title).replace(/<[^>]*>?/gm,"").trim();window.dispatchEvent(new CustomEvent("attachCardToAiHelp",{detail:{id:`news-${t.link}`,type:"news",title:t.title,details:`Джерело: ${t.sourceName}. Заголовок: "${t.title}". Зміст: "${v}". Посилання: ${t.link}`}})),I(!1)},children:[(0,e.jsx)(qs,{style:{fontSize:"57px"}})," Прикріпити до ШІ"]}),(0,e.jsxs)(Va,{onClick:()=>{d&&d(t),I(!1)},children:[(0,e.jsx)(Zd,{size:34})," ШІ Виклад"]}),(0,e.jsxs)(Va,{onClick:()=>{navigator.clipboard.writeText(t.link).then(()=>{La.success("Посилання скопійовано!")}),I(!1)},children:[(0,e.jsx)(Fc,{size:34})," Копіювати шлях"]}),!nx.has(t.sourceName)&&(0,e.jsxs)(Va,{$color:"#ff6b6b",onClick:v=>{h&&h(t,v),I(!1)},children:[(0,e.jsx)(Nd,{size:34})," Подати скаргу"]}),(0,e.jsxs)(Va,{$color:"#aaa",onClick:v=>{v.preventDefault(),v.stopPropagation(),u&&u(t,v),I(!1)},children:[(0,e.jsx)(Rd,{size:34})," Заглушити"]})]})]}),a&&(0,e.jsx)(Hg,{src:y||"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",alt:"",loading:"lazy",decoding:"async",onError:v=>{v.target.onerror=null,v.target.src="data:image/webp;base64,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"}}),(c||l)&&(0,e.jsxs)(ax,{$isDarkMode:n,$overlay:a,children:[c&&(0,e.jsx)("h2",{style:{margin:"0 0 8px 0",fontSize:"16px",display:"-webkit-box",WebkitLineClamp:2,fontWeight:"700",WebkitBoxOrient:"vertical",overflow:"hidden",lineHeight:"1.3"},children:t.title}),l&&(0,e.jsx)("p",{style:{fontSize:"13px",opacity:.9,margin:0,lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.description})]})]})})},ax=i.div`
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
`,ys=i.div`
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
`,rn=i.button`
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
`,rx=i.div`
  width: 300px;
  height: 8px;
  background: ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"};
  border: 1px solid
    ${t=>t.$isDarkMode?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.1)"};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`,ix=i.div`
  height: 100%;
  background: ${t=>t.$isError?"#ff4d4d":"#ffb36c"};
  width: ${t=>t.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${t=>t.$isError?"rgba(255, 77, 77, 0.7)":"rgba(255, 179, 108, 0.5)"};
`,ox=i.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`,ws=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},Mi=t=>{if(!t)return"rss";const n=t.toLowerCase();return n.includes("youtube.com")||n.includes("youtu.be")?"youtube":n.includes("t.me/")||n.includes("telegram.org")||n.startsWith("@")?"telegram":n.includes("telegra.ph/")?"telegraph":n.includes("facebook.com")?"facebook":n.includes("withhive.com")?"hive":"rss"},sx=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?`https://i.ytimg.com/vi/${n[2]}/hqdefault.jpg`:null},vs=t=>{if(t.enclosure?.link&&t.enclosure.link.match(/\.(jpe?g|png|webp|gif)/i))return t.enclosure.link;if(t.thumbnail&&t.thumbnail.startsWith("http"))return t.thumbnail;const n=(t.content||t.description||"").match(/<img[^>]+src=["']([^"']+)["']/i);return n&&n[1]&&n[1].startsWith("http")?n[1]:null},qr=Fa.filter(t=>/\.(webp|jpe?g|png|gif)(\?.*)?$/i.test(t.src||"")).map(t=>t.src),lx=t=>{if(!qr.length)return Oi;let n=0;for(let a=0;a<t.length;a++)n=n*31+t.charCodeAt(a)&4294967295;return qr[Math.abs(n)%qr.length]},da=async t=>{try{const n=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(t)}`);if(!n.ok)throw new Error("AllOrigins error status: "+n.status);const a=await n.json();if(!a.contents)throw new Error("AllOrigins returned empty contents");return a.contents}catch(n){console.warn("AllOrigins failed, trying corsproxy.io fallback...",n);const a=await fetch(`https://corsproxy.io/?${encodeURIComponent(t)}`);if(!a.ok)throw new Error("corsproxy.io error status: "+a.status);return await a.text()}},dx=async t=>{const n=t.match(/(UC[a-zA-Z0-9_-]{22})/);if(n)return n[1];try{const a=await da(t),c=a.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i)||a.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i)||a.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i)||a.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);return c?c[1]:null}catch(a){return console.error("Error resolving YouTube channel ID:",a),null}},ks=t=>{if(!t)return"";let n=t.replace(/<br\s*\/?>/gi,`
`);n=n.replace(/<[^>]*>?/gm,"");const a=document.createElement("textarea");return a.innerHTML=n,a.value.trim()},cx=async t=>{let n="";const a=t.url;if(a.startsWith("@"))n=a.substring(1);else{const c=a.split("/");n=c[c.length-1]||c[c.length-2]}if(n.startsWith("+")||a.includes("joinchat"))try{const c=await da(a),l=new DOMParser().parseFromString(c,"text/html"),d=l.querySelector(".tgme_page_title")?.textContent?.trim()||"Приватний Telegram",h=l.querySelector(".tgme_page_description")?.textContent?.trim()||"Приватний канал або група.",u=l.querySelector(".tgme_page_photo_image"),g=u?u.getAttribute("src"):"";return{status:"ok",items:[{title:d,description:`${h}

Надіслати контент / Приєднатися:
${a}`,link:a,pubDate:new Date().toISOString(),thumbnail:g||"",displayImage:g||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🔒",sourceHome:a,sourceUrl:a}]}}catch{return{status:"ok",items:[{title:"Приватний Telegram Канал",description:`Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:
${a}`,link:a,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Oi,sourceName:t.name,sourceFlag:"🔒",sourceHome:a,sourceUrl:a}]}}try{const c=`https://t.me/s/${n}`,l=await da(c),d=new DOMParser().parseFromString(l,"text/html"),h=d.querySelector(".tgme_channel_info_header_title span")?.textContent||n,u=d.querySelector(".tgme_page_photo_image img")||d.querySelector(".tgme_page_photo_image"),g=u&&u.getAttribute("src")||"",x=`https://t.me/${n}`,T=d.querySelectorAll(".tgme_widget_message"),k=[];return T.forEach(P=>{const z=P.querySelector(".tgme_widget_message_text"),F=z?z.innerHTML:"",I=z?ks(F).substring(0,100):"Повідомлення",y=P.querySelector(".tgme_widget_message_date"),m=y?y.getAttribute("href"):x,v=P.querySelector("time"),j=v?v.getAttribute("datetime"):new Date().toISOString(),C=P.querySelector(".tgme_widget_message_photo_wrap");let B="";if(C){const H=C.getAttribute("style"),J=H&&H.match(/url\(['"]?([^'"]+)['"]?\)/);J&&(B=J[1])}k.push({title:I||"Новий допис",description:F?ks(F):"Перегляньте допис у Telegram.",link:m,pubDate:j,thumbnail:B||g||"",displayImage:B||g||"data:image/webp;base64,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",sourceName:h,sourceFlag:"📢",sourceHome:x,sourceUrl:a})}),{status:"ok",items:k.reverse()}}catch(c){return console.error("Telegram scraping failed:",c),null}},px=async t=>{try{const n=await da(t.url),a=new DOMParser().parseFromString(n,"text/html"),c=a.querySelector("header h1")?.textContent?.trim()||a.querySelector("title")?.textContent||"Telegraph стаття",l=a.querySelector("header address a")?.textContent||"Telegraph",d=a.querySelector("article img"),h=d?d.getAttribute("src"):"",u=h?h.startsWith("http")?h:`https://telegra.ph${h}`:"",g=Array.from(a.querySelectorAll("article p")).map(x=>x.textContent).join(`

`)||"Читати повну статтю на Telegraph.";return{status:"ok",items:[{title:c,description:g.substring(0,300)+(g.length>300?"...":""),link:t.url,pubDate:new Date().toISOString(),thumbnail:u||"",displayImage:u||"data:image/webp;base64,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",sourceName:l,sourceFlag:"📝",sourceHome:"https://telegra.ph",sourceUrl:t.url}]}}catch(n){return console.error("Telegraph load failed:",n),null}},ux=async t=>{try{const n=await da(t.url),a=new DOMParser().parseFromString(n,"text/html"),c=a.querySelector('meta[property="og:title"]')?.getAttribute("content")||t.name,l=a.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Переглянути сторінку у Facebook.",d=a.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:c,description:l,link:t.url,pubDate:new Date().toISOString(),thumbnail:d||"",displayImage:d||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}catch(n){return console.error("Facebook OG parsing failed, trying simple card:",n),{status:"ok",items:[{title:t.name,description:"Перегляньте оновлення сторінки у Facebook за цим посиланням.",link:t.url,pubDate:new Date().toISOString(),thumbnail:"",displayImage:Oi,sourceName:t.name,sourceFlag:"📘",sourceHome:t.url,sourceUrl:t.url}]}}},fx=t=>{const n=t.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);return n?{gameCode:n[1],lang:n[2]||"en",boardIdx:n[3]}:null},gx=async t=>{const n=t.url;if(n.match(/board\/(\d+)\/(\d+)/))try{const h=await da(n),u=new DOMParser().parseFromString(h,"text/html"),g=u.querySelector('meta[property="og:title"]')?.getAttribute("content")||u.querySelector(".title_wrap .title")?.textContent?.trim()||"Допис у Hive",x=u.querySelector('meta[property="og:description"]')?.getAttribute("content")||u.querySelector(".post_cont")?.textContent?.trim().substring(0,300)||"Деталі допису у спільноті Hive.",T=u.querySelector('meta[property="og:image"]')?.getAttribute("content")||u.querySelector(".post_cont img")?.getAttribute("src")||"";return{status:"ok",items:[{title:g,description:x.length>=300?x.substring(0,300)+"...":x,link:n,pubDate:new Date().toISOString(),thumbnail:T||"",displayImage:T||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:n.split("/board/")[0],sourceUrl:n}]}}catch(h){console.error("Failed to parse single Hive post:",h)}const a=fx(n);if(!a)return null;const{gameCode:c,lang:l,boardIdx:d}=a;try{const h=`https://corsproxy.io/?https://community.withhive.com/${c}/board/list/getBoardList`,u=await(await fetch(h,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:new URLSearchParams({page:1,board_idx:d,board_type:1,board_comment:1,boardtype1_preview_image:"1",is_mobile:1,select_type:1,view_type:"list"})})).json();if(!u.list)throw new Error("No dynamic list found");const g=new DOMParser().parseFromString(u.list,"text/html").querySelectorAll("li"),x=[];return g.forEach(T=>{const k=T.querySelector("a");if(!k)return;const P=k.getAttribute("href")||"",z=P.startsWith("http")?P:`https://community.withhive.com${P}`,F=T.querySelector(".title, .subject, p, h3, h4"),I=F?F.textContent.trim():"Hive Post",y=T.querySelector("img");let m="";if(y)m=y.getAttribute("src")||y.getAttribute("data-src")||"";else{const H=T.querySelector(".thumb");if(H){const J=H.getAttribute("style"),Q=J&&J.match(/url\(['"]?([^'"]+)['"]?\)/);Q&&(m=Q[1])}}const v=T.querySelector(".t_date, .date, .time"),j=v?v.textContent.trim():new Date().toISOString(),C=T.querySelector(".desc, .text, .wordcut"),B=C?C.textContent.trim():"";x.push({title:I,description:B||"Перегляньте допис у спільноті Hive.",link:z,pubDate:j,thumbnail:m||"",displayImage:m||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:n})}),{status:"ok",items:x}}catch{console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");try{const u=await da(n),g=new DOMParser().parseFromString(u,"text/html"),x=g.querySelector('meta[property="og:title"]')?.getAttribute("content")||g.querySelector(".board_cmm .title")?.textContent?.trim()||`Hive Board ${d}`,T=g.querySelector('meta[property="og:description"]')?.getAttribute("content")||"Перегляньте дописи у спільноті Hive.",k=g.querySelector('meta[property="og:image"]')?.getAttribute("content")||"";return{status:"ok",items:[{title:x,description:T,link:n,pubDate:new Date().toISOString(),thumbnail:k||"",displayImage:k||"data:image/webp;base64,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",sourceName:t.name,sourceFlag:"🐝",sourceHome:`https://community.withhive.com/${c}`,sourceUrl:n}]}}catch{return null}}},xx=async t=>{const n=Mi(t.url);return n==="telegram"?await cx(t):n==="telegraph"?await px(t):n==="hive"?await gx(t):n==="facebook"?await ux(t):null},gd=({isDarkMode:t,isStickyBgMode:n,user:a})=>{const{registerRef:c}=Wa?.()||{registerRef:()=>{}},l=t,[d,h]=(0,r.useState)([]),[u,g]=(0,r.useState)(0),[x,T]=(0,r.useState)(!0),[k,P]=(0,r.useState)(0),[z,F]=(0,r.useState)(!1),[I,y]=(0,r.useState)(["all"]),m=w=>{if(w==="all"){y(["all"]);return}let E=[...I].filter(q=>q!=="all");E.includes(w)?E=E.filter(q=>q!==w):E.push(w),E.length===0&&(E=["all"]),y(E)},[v,j]=(0,r.useState)(null),[C,B]=(0,r.useState)(0),H=async w=>{if(!w||w.length<3)return w;try{const E=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(w)}`);return Ve.current?(await E.json())[0].map(q=>q[0]).join(""):w}catch{return w}},[J,Q]=(0,r.useState)(!1),[he,te]=(0,r.useState)(null),[D,N]=(0,r.useState)(!1),[re,xe]=(0,r.useState)(!1),[ce,ee]=(0,r.useState)([]),[X,me]=(0,r.useState)(""),[oe,Te]=(0,r.useState)(!1),[,Se]=(0,r.useState)([]),[ut,It]=(0,r.useState)([]),[Dt,ot]=(0,r.useState)(!1),[st,Oe]=(0,r.useState)([]),[tt,mt]=(0,r.useState)(!1),Ve=(0,r.useRef)(!0),jt=(0,r.useRef)(null);(0,r.useEffect)(()=>(Ve.current=!0,(async()=>{try{const E=await f.default.getItem("custom_news_sources");E&&ee(E)}catch{}})(),()=>{Ve.current=!1}),[]),(0,r.useEffect)(()=>{(async()=>{try{const E=await f.default.getItem("filtered_news_stats");E?.date===ws()&&Array.isArray(E.links)&&Ve.current&&g(E.links.length)}catch{}})()},[]),(0,r.useEffect)(()=>{(async()=>{if(a?.syncMutedNews&&a?.mutedNews)Oe(a.mutedNews);else try{const E=await f.default.getItem("muted_news_urls")||[];Oe(E)}catch{}})()},[a?.syncMutedNews,a?.mutedNews]),(0,r.useEffect)(()=>{if(a?.newsAutoScroll!==!0)return;const w=window.setTimeout(()=>{jt.current?.scrollIntoView({behavior:"smooth",block:"start"})},300);return()=>window.clearTimeout(w)},[a?.newsAutoScroll]),(0,r.useEffect)(()=>{const w=()=>{xe(!0),setTimeout(()=>xe(!1),1500)},E=setTimeout(w,2e3),q=setInterval(w,7e3);return()=>{clearTimeout(E),clearInterval(q)}},[]);const Lt=(0,r.useCallback)(async(w=!1)=>{const E=new AbortController().signal;w&&Ve.current&&(T(!0),P(5),F(!1));try{let q=[];const ge=await f.default.getItem("custom_news_sources")||[],qe=[...wr,...ge];let rt=[],be=[];try{const G=await Ao($o(Dn,"news_reports")),ie=await Ao($o(Dn,"rss_reports")),He=Date.now(),Re=864e5;G.forEach(Le=>{(Le.data().reports||[]).filter(dt=>{const Xe=typeof dt=="object"?dt.timestamp:dt;return He-Xe<Re}).length>=10&&rt.push(Le.id)});const Ke=[];ie.forEach(Le=>{const dt=Le.data();(dt.reports||[]).filter(Xe=>{const Ht=typeof Xe=="object"?Xe.timestamp:Xe;return He-Ht<Re}).length>=20&&(Ke.push({id:Le.id,url:decodeURIComponent(Le.id),name:dt.name||"Джерело"}),be.push(decodeURIComponent(Le.id)))}),Ve.current&&(Se(rt),It(Ke))}catch{}for(const G of qe)if(!be.includes(G.url))try{const ie=Mi(G.url);if(ie!=="rss"&&ie!=="youtube"){const He=await xx(G);He&&He.items&&He.items.length>0&&(q=[...q,...He.items])}else{const He=await(await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(G.url)}`,{signal:E})).json();if(He.status==="ok"&&He.items.length>0){const Re=He.items.map(Ke=>{const Le=sx(Ke.link),dt=vs(Ke);return{...Ke,thumbnail:Le||dt||"",displayImage:Le||dt||"data:image/webp;base64,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",sourceName:G.name,sourceFlag:G.flag,sourceHome:G.home,sourceUrl:G.url}});q=[...q,...Re]}}}catch{continue}if(q.length===0){Ve.current&&(F(!0),P(100),T(!1));return}w&&Ve.current&&P(25),q.sort((G,ie)=>new Date(ie.pubDate)-new Date(G.pubDate));const ze=q.filter(G=>{const ie=G.title+" "+(G.description||"");return!Ig(ie)}),qt=q.filter(G=>!ze.includes(G)).map(G=>G.link||`${G.sourceUrl}:${G.title}`),Mt=ws(),ye=await f.default.getItem("filtered_news_stats"),Et=ye?.date===Mt&&Array.isArray(ye.links)?ye.links:[],Be=[...new Set([...Et,...qt])];await f.default.setItem("filtered_news_stats",{date:Mt,links:Be}),Ve.current&&g(Be.length);const Vt=ze.slice(0,45),$e=new Array(Vt.length),Jt=[],zt=[],Xt=await f.default.getItem("seen_news_links")||[];for(let G=0;G<Vt.length;G++){const ie=Vt[G],He=`news_trans_${ie.link}`,Re=await f.default.getItem(He),Ke=!Xt.includes(ie.link);if(Re)$e[G]={...Re,displayImage:Re.displayImage&&Re.displayImage!=="data:image/webp;base64,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"?Re.displayImage:ie.displayImage||"data:image/webp;base64,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",sourceName:ie.sourceName,sourceFlag:ie.sourceFlag,sourceHome:ie.sourceHome,sourceUrl:ie.sourceUrl,isNew:Ke,isBlocked:rt.includes(encodeURIComponent(ie.link))};else{const Le=(ie.description||"").replace(/<[^>]*>?/gm,"").trim().substring(0,170);Jt.push(G),zt.push(ie.title),zt.push(Le)}}if(zt.length>0){w&&Ve.current&&P(40);let G=[],ie=[],He=0;const Re=[];for(let Ke=0;Ke<Jt.length;Ke++){const Le=zt[Ke*2],dt=zt[Ke*2+1],Xe=Le.length+dt.length+10;He+Xe>4500&&G.length>0&&(Re.push({strings:G,indices:ie}),G=[],ie=[],He=0),G.push(Le,dt),ie.push(Jt[Ke]),He+=Xe}G.length>0&&Re.push({strings:G,indices:ie});for(const Ke of Re){const Le=Ke.strings.join(" ___ "),dt=(await H(Le)).split(/\s*___\s*/);for(let Xe=0;Xe<Ke.indices.length;Xe++){const Ht=Ke.indices[Xe],Kt=Vt[Ht],dn=vs(Kt)||"data:image/webp;base64,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",Tn={title:dt[Xe*2]?.trim()||Kt.title,description:(dt[Xe*2+1]?.trim()||"")+"...",link:Kt.link,displayImage:dn,sourceName:Kt.sourceName,sourceFlag:Kt.sourceFlag,sourceHome:Kt.sourceHome,sourceUrl:Kt.sourceUrl,isNew:!Xt.includes(Kt.link),isBlocked:rt.includes(encodeURIComponent(Kt.link))};await f.default.setItem(`news_trans_${Kt.link}`,Tn),$e[Ht]=Tn}}}w&&Ve.current&&P(100);const zn=await f.default.keys(),$n=zn.filter(G=>G.startsWith("news_trans_")),se=zn.filter(G=>G.startsWith("og_img_")),Tt=Vt.map(G=>`news_trans_${G.link}`),Bt=Vt.map(G=>`og_img_${G.link}`);for(const G of $n)Tt.includes(G)||await f.default.removeItem(G);for(const G of se)Bt.includes(G)||await f.default.removeItem(G);Ve.current&&(h($e),j(new Date))}catch(q){if(q.name==="AbortError"||q.message?.includes("aborted")){console.log("Запит було скасовано");return}console.error("Справжня помилка завантаження:",q),Ve.current&&(F(!0),P(100),w&&(T(!0),await new Promise(ge=>setTimeout(ge,2500))))}finally{Ve.current&&T(!1)}},[]),ft=d.filter(w=>I.includes("all")||I.includes(w.sourceName)),nt=ft.slice(0,45).map(w=>({...w,isMuted:st.includes(w.link)})),Ze=nt.length>0?[...nt,...nt,...nt]:[],Ue=(0,r.useRef)(null),[gt,Ie]=(0,r.useState)(null),De=(0,r.useRef)(!1),at=(0,r.useRef)(null),St=(0,r.useCallback)(()=>{const w=Ue.current;if(!w)return;const E=w.getBoundingClientRect().left+w.clientWidth/2;let q=null,ge=1/0;[...w.querySelectorAll("[data-news-slide]")].forEach((qe,rt)=>{const be=qe.getBoundingClientRect(),ze=Math.abs(be.left+be.width/2-E);ze<ge&&(ge=ze,q=rt)}),Ie(q)},[]),bt=w=>{if(!Ue.current)return;const E=Ue.current,q=(E.querySelector("[data-news-slide]")?.getBoundingClientRect().width||280)+(Number.parseFloat(getComputedStyle(E).gap)||5);De.current=!0,E.scrollBy({left:w==="left"?-q:q,behavior:"smooth"}),setTimeout(()=>{De.current=!1},600)},Ft=()=>{!Ue.current||nt.length===0||(St(),!De.current&&(at.current&&clearTimeout(at.current),at.current=setTimeout(()=>{const w=Ue.current;if(!w)return;const E=w.scrollWidth/3,q=12,ge=w.style.scrollSnapType;w.scrollLeft<=q?(De.current=!0,w.style.scrollSnapType="none",w.scrollLeft+=E,requestAnimationFrame(()=>{w.style.scrollSnapType=ge,De.current=!1})):w.scrollLeft>=E*2-q&&(De.current=!0,w.style.scrollSnapType="none",w.scrollLeft-=E,requestAnimationFrame(()=>{w.style.scrollSnapType=ge,De.current=!1}))},150)))};(0,r.useEffect)(()=>{if(Ue.current&&nt.length>0){const w=Ue.current.scrollWidth/3;Ue.current.scrollLeft=w,requestAnimationFrame(St)}},[nt.length,I,St]),(0,r.useEffect)(()=>{(async()=>{try{const q=await f.default.getItem("news_refresh_cooldown_end");if(q){const ge=Math.ceil((q-Date.now())/1e3);ge>0&&B(ge)}}catch{}Lt(!0)})();const E=setInterval(()=>Lt(!1),36e5);return()=>{clearInterval(E)}},[]),(0,r.useEffect)(()=>{if(C>0){const w=setTimeout(()=>B(C-1),1e3);return()=>clearTimeout(w)}else f.default.removeItem("news_refresh_cooldown_end")},[C]);const yt=async()=>{let w=X.trim();if(w){if(ce.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}try{let E=w,q="",ge=(0,e.jsx)(Fr,{}),qe="";E.startsWith("@")&&(E=`https://t.me/${E.slice(1)}`),!E.startsWith("http://")&&!E.startsWith("https://")&&(/^[a-zA-Z0-9_]+$/.test(E)?E=`https://t.me/${E}`:E=`https://${E}`);const rt=new URL(E),be=rt.hostname.replace("www.","");q=be,qe=rt.origin;const ze=Mi(E);if(ze==="youtube"){alert("Здійснюється пошук ID YouTube каналу...");const ye=await dx(E);if(ye)E=`https://www.youtube.com/feeds/videos.xml?channel_id=${ye}`,q=`YouTube: ${be}`,ge=(0,e.jsx)(Oc,{});else{alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");return}}else if(ze==="telegram"){const ye=E.split("/");q=`Telegram: ${ye[ye.length-1]||ye[ye.length-2]}`,ge=E.includes("+")||E.includes("joinchat")?"🔒":"📢",qe=E}else if(ze==="telegraph")q="Telegraph",ge=(0,e.jsx)(Fr,{}),qe="https://telegra.ph";else if(ze==="facebook"){const ye=E.split("/"),Et=ye[ye.length-1]||ye[ye.length-2];E=`https://www.facebook.com/${Et}`,q=`Facebook: ${Et}`,ge=(0,e.jsx)(Ud,{}),qe=E}else if(ze==="hive"){const ye=E.match(/withhive\.com\/([a-zA-Z0-9_-]+)/),Et=ye?ye[1]:"Hive";q=`Hive: ${Et}`,ge=(0,e.jsx)(Ad,{}),qe=`https://community.withhive.com/${Et}`}else q=be,ge=(0,e.jsx)(Fr,{});const qt={url:E,name:q,flag:ge,home:qe,type:ze},Mt=await f.default.getItem("custom_news_sources")||[];if(Mt.find(ye=>ye.url===E))alert("Це джерело вже додано.");else{if(Mt.length>=5){alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");return}const ye=[...Mt,qt];await f.default.setItem("custom_news_sources",ye),ee(ye),me(""),Te(!1),Lt(!0)}}catch(E){console.error(E),alert("Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)")}}},Ot=async(w,E)=>{if(E.preventDefault(),E.stopPropagation(),!a){alert("Тільки авторизовані користувачі можуть залишати скарги.");return}if(window.confirm("Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)"))try{const q=Uo.currentUser||(await zc(Uo)).user,ge=a.uid||q.uid,qe=encodeURIComponent(w.link),rt=encodeURIComponent(w.sourceUrl),be=Date.now(),ze={uid:ge,timestamp:be},qt=Wn(Dn,"news_reports",qe),Mt=await vr(qt);if(Mt.exists()){if((Mt.data().reports||[]).some(Be=>Be.uid===ge&&be-Be.timestamp<864e5)){alert("Ви вже скаржилися на цю новину сьогодні.");return}await qa(qt,{reports:bo(ze)})}else await Ba(qt,{reports:[ze]});const ye=Wn(Dn,"rss_reports",rt),Et=await vr(ye);Et.exists()?(Et.data().reports||[]).some(Be=>Be.uid===ge&&be-Be.timestamp<864e5)||await qa(ye,{reports:bo(ze)}):await Ba(ye,{reports:[ze],name:w.sourceName}),alert("Скаргу прийнято. Дякуємо!"),Lt(!0)}catch(q){console.warn("Помилка відправки скарги:",q),alert("Помилка відправки скарги.")}},V=async(w,E)=>{E&&(E.preventDefault(),E.stopPropagation());const q=[...st,w.link];if(Oe(q),a?.syncMutedNews&&a?.uid)try{await qa(Wn(Dn,"users",a.uid),{mutedNews:q})}catch(ge){console.warn("Помилка збереження заглушеної новини в Firebase",ge)}else try{await f.default.setItem("muted_news_urls",q)}catch{}},ne=async w=>{const E=st.filter(q=>q!==w.link);if(Oe(E),a?.syncMutedNews&&a?.uid)try{await qa(Wn(Dn,"users",a.uid),{mutedNews:E})}catch(q){console.warn("Помилка розглушення новини в Firebase",q)}else try{await f.default.setItem("muted_news_urls",E)}catch{}},pe=async w=>{if(window.confirm("Видалити це джерело новин?"))try{const E=await f.default.getItem("custom_news_sources")||[],q=E.filter(qe=>qe.url!==w);await f.default.setItem("custom_news_sources",q),ee(q);const ge=E.find(qe=>qe.url===w)?.name;ge&&I.includes(ge)&&y(["all"]),Lt(!0)}catch(E){console.error("Localforage error:",E),alert("Помилка видалення джерела.")}},Ae=a?.newsLayout||[],de=w=>Ae.find(E=>E.key===w)?.visible!==!1,Me=!0,lt=de("title"),We=de("description"),[Cn,_e]=(0,r.useState)(!1),Ct=nt.reduce((w,E)=>{const q=E.sourceName||"Джерело";return w[q]||(w[q]=[]),w[q].push(E),w},{});return(0,e.jsxs)(Eg,{ref:jt,children:[(0,e.jsxs)(Rg,{$isStickyBgMode:n,$isDarkMode:l,children:[(0,e.jsx)(Pg,{$isDarkMode:l,children:(0,e.jsx)(rn,{ref:w=>c("newsHeader",w),$isDarkMode:l,onClick:()=>_e(!0),style:{marginLeft:"5px",padding:"2px",fontSize:"15px",fontWeight:"600",background:"none"},children:"Натисніть для додавання стрічки новин"})}),(0,e.jsx)($a,{children:tt&&(0,e.jsxs)(_t.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:[(0,e.jsxs)(ys,{children:[(0,e.jsx)(rn,{$isDarkMode:l,onClick:()=>N(!0),children:"Інструкція"}),(0,e.jsxs)(rn,{$isDarkMode:l,$active:I.includes("all"),onClick:()=>m("all"),children:[I.includes("all")?"☑":"☐"," Усі"]}),wr.map(w=>(0,e.jsxs)(rn,{$isDarkMode:l,$active:I.includes(w.name),onClick:()=>m(w.name),children:[I.includes(w.name)?"☑":"☐"," ",w.name]},w.name)),ce.map(w=>(0,e.jsxs)(rn,{$isDarkMode:l,$active:I.includes(w.name),onClick:()=>m(w.name),children:[I.includes(w.name)?"☑":"☐"," ",w.name,(0,e.jsx)("span",{onClick:E=>{E.stopPropagation(),pe(w.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},w.url)),ce.length<5&&(0,e.jsx)(rn,{$isDarkMode:l,onClick:()=>Te(!oe),style:{borderStyle:"dashed"},children:oe?"Скасувати":"Додати стрічку"}),(0,e.jsxs)(rn,{$isDarkMode:l,onClick:()=>ot(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",ut.length,")"]})]}),(0,e.jsx)($a,{children:oe&&(0,e.jsx)(_t.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[(0,e.jsx)("input",{type:"text",value:X,onChange:w=>me(w.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"5px",borderRadius:"5px",border:`1px solid ${l?"rgba(0, 0, 0, 0.98)":"rgb(255, 255, 255)"}`,background:"transparent",color:"#fff",outline:"none",minWidth:"248px",fontFamily:"var(--font-family)",fontSize:"12px","--placeholder-color":"rgba(255, 255, 255, 0.97)"}}),(0,e.jsx)(rn,{$isDarkMode:l,onClick:yt,style:{background:"#ffb36c",color:"#000"},children:"Додати"})]})})})]})})]}),x?(0,e.jsxs)("div",{style:{textAlign:"center",color:"gray",padding:"60px 20px"},children:[(0,e.jsx)("div",{style:{marginBottom:"15px",fontSize:"14px",background:"rgba(0, 0, 0, 0.71)",color:"#fff",borderRadius:"5px",padding:"10px 15px",borderRadius:"5px",display:"inline-block",fontWeight:"900"},children:z?"Помилка завантаження!":`Шукаємо цікаві новини: ${k}%`}),(0,e.jsx)(rx,{$isDarkMode:l,children:(0,e.jsx)(ix,{$progress:k,$isError:z})})]}):ft.length>0?(0,e.jsxs)("div",{style:{position:"relative",maxWidth:"1400px",margin:"0 auto"},children:[(0,e.jsx)($a,{mode:"wait",children:(0,e.jsx)(_t.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},style:{width:"100%"},children:(0,e.jsxs)(Ng,{children:[(0,e.jsx)(Og,{ref:Ue,onScroll:Ft,children:Ze.map((w,E)=>(0,e.jsx)(Bg,{"data-news-slide":!0,$distanceFromCenter:gt===null?2:Math.min(Math.abs(gt-E),2),children:(0,e.jsx)(bs,{item:w,$isDarkMode:l,showImage:Me,showTitle:lt,showDescription:We,onAiSummaryClick:q=>{te(q),Q(!0)},onReportClick:Ot,onMuteClick:V,onUnmuteClick:ne})},`${w.link}-${E}`))}),(0,e.jsxs)(Vg,{$visible:re,children:[(0,e.jsx)(xs,{$direction:"previous",onClick:()=>bt("left"),children:"◀"}),(0,e.jsx)(xs,{$direction:"next",onClick:()=>bt("right"),children:"▶"})]})]})},I.join(","))}),(0,e.jsxs)(ox,{$isDarkMode:l,children:["За сьогодні відфільтровано ",u," небажаних новин."]})]}):(0,e.jsx)("div",{style:{textAlign:"center",color:"white",padding:"14px",background:"#0000009c",marginTop:"20px",fontSize:"12px"},children:"Перевірте інтернет зв'язок. У випадку стабільного зв'язку це означає, що всі новини сайту мали недопустимий характер і ми їх не пропустили."}),he&&(0,e.jsx)(Nf,{isOpen:J,onClose:()=>Q(!1),newsItem:he,isDarkMode:l}),D&&(0,e.jsx)(ud,{isOpen:D,onClose:()=>N(!1),initialFaqQuestion:"Навчання по управлінню новинами"}),Dt&&(0,e.jsx)(Gg,{onClick:()=>ot(!1),children:(0,e.jsxs)(Yg,{$isDarkMode:l,onClick:w=>w.stopPropagation(),children:[(0,e.jsx)(ms,{onClick:()=>ot(!1),children:"✕"}),(0,e.jsx)("h2",{style:{marginTop:0},children:"Чорний список (карантин 24 год)"}),(0,e.jsx)("p",{style:{fontSize:"13px"},children:"Ці RSS-джерела отримали багато скарг і відключені для всіх користувачів."}),ut.length===0?(0,e.jsx)("p",{children:"Наразі немає заблокованих джерел."}):(0,e.jsx)("ul",{style:{paddingLeft:"20px",marginTop:"15px"},children:ut.map(w=>(0,e.jsxs)("li",{style:{marginBottom:"15px"},children:[(0,e.jsx)("strong",{style:{fontSize:"16px"},children:w.name}),(0,e.jsx)("br",{}),(0,e.jsx)("a",{href:w.url,target:"_blank",rel:"noreferrer",style:{fontSize:"12px",color:"#ffb36c",wordBreak:"break-all"},children:w.url})]},w.id))})]})}),(0,Ni.createPortal)((0,e.jsx)($a,{children:Cn&&(0,e.jsxs)(Zg,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.25},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",zIndex:"3000",margin:"0 auto 16px auto",paddingBottom:"3px",borderBottom:"1px solid rgba(255, 255, 255, 0.2)"},children:[(0,e.jsx)("h2",{style:{margin:0,color:"#ffaa00",fontSize:"15px"},children:"Повноекранні новини та керування стрічками"}),(0,e.jsx)(ms,{onClick:()=>_e(!1),style:{fontSize:"16px",padding:"6px 16px"},children:"Закрити"})]}),(0,e.jsxs)(Xg,{children:[(0,e.jsxs)("div",{style:{background:"rgba(20, 20, 20, 0.8)",padding:"12px",borderRadius:"8px",marginBottom:"20px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[(0,e.jsx)("div",{style:{marginBottom:"10px",fontWeight:"600",fontSize:"14px"},children:"Налаштування та вибір авторів / джерел:"}),(0,e.jsxs)(ys,{style:{justifyContent:"flex",width:"100%",flexDirection:"column"},children:[(0,e.jsx)(rn,{$isDarkMode:l,onClick:()=>N(!0),children:"Інструкція"}),(0,e.jsxs)(rn,{$isDarkMode:l,$active:I.includes("all"),onClick:()=>m("all"),children:[I.includes("all")?"☑":"☐"," Усі"]}),wr.map(w=>(0,e.jsxs)(rn,{$isDarkMode:l,$active:I.includes(w.name),onClick:()=>m(w.name),children:[I.includes(w.name)?"☑":"☐"," ",w.name]},w.name)),ce.map(w=>(0,e.jsxs)(rn,{$isDarkMode:l,$active:I.includes(w.name),onClick:()=>m(w.name),children:[I.includes(w.name)?"☑":"☐"," ",w.name,(0,e.jsx)("span",{onClick:E=>{E.stopPropagation(),pe(w.url)},style:{marginLeft:"6px",color:"#ff4d4d",fontWeight:"bold"},"aria-label":"Видалити джерело",children:"×"})]},w.url)),ce.length<5&&(0,e.jsx)(rn,{$isDarkMode:l,onClick:()=>Te(!oe),style:{borderStyle:"dashed"},children:oe?"Скасувати":"Додати стрічку"}),(0,e.jsxs)(rn,{$isDarkMode:l,onClick:()=>ot(!0),style:{background:"rgba(255, 77, 77, 0.2)",borderColor:"#ff4d4d",color:"#ff4d4d"},children:["Чорний список (",ut.length,")"]})]}),(0,e.jsx)($a,{children:oe&&(0,e.jsx)(_t.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{overflow:"hidden",marginTop:"10px"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",flexWrap:"wrap"},children:[(0,e.jsx)("input",{type:"text",value:X,onChange:w=>me(w.target.value),placeholder:"Введіть URL RSS (Н-д: https://rss.com/day)",style:{padding:"6px 10px",borderRadius:"5px",border:"1px solid rgba(255, 255, 255, 0.3)",background:"#111",color:"#fff",outline:"none",minWidth:"280px",fontSize:"13px"}}),(0,e.jsx)(rn,{$isDarkMode:l,onClick:yt,style:{background:"#ffb36c",color:"#000",padding:"6px 14px"},children:"Додати"})]})})})]}),Object.keys(Ct).length===0?(0,e.jsx)("div",{style:{textAlign:"center",padding:"40px",color:"#aaa"},children:"Немає новин для відображення."}):Object.entries(Ct).map(([w,E])=>(0,e.jsxs)(Qg,{children:[(0,e.jsxs)(ex,{children:[(0,e.jsxs)("span",{children:["Автор/Джерело: ",w]}),(0,e.jsxs)("span",{style:{fontSize:"12px",fontWeight:800},children:["(",E.length," новин)"]})]}),(0,e.jsx)(tx,{children:E.map((q,ge)=>(0,e.jsx)("div",{children:(0,e.jsx)(bs,{item:q,$isDarkMode:l,showImage:Me,showTitle:lt,showDescription:We,onAiSummaryClick:qe=>{te(qe),Q(!0)},onReportClick:Ot,onMuteClick:V,onUnmuteClick:ne})},`${q.link}-${ge}`))})]},w))]})]})}),document.body)]})},hx=i.div`
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
`,js=(t,n)=>{La(t,{duration:4e3,style:{backgroundColor:n?"#0c0c0cbf":"#fdff98bb",color:n?"#ffffff":"#1a1a1a",border:"2px solid #00afce",borderRadius:"6px",boxShadow:`0 4px 12px rgba(0, 0, 0, ${n?"0.5":"0.15"})`,fontSize:"13px",fontWeight:"500",zIndex:"10000",padding:"10px 16px",backdropFilter:"blur(4px)"},icon:"⚠️"})},mx=le`
  from { opacity: 0; }
  to { opacity: 1; }
`,bx=le`
  from { opacity: 1; }
  to { opacity: 0; }
`,yx=le`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,wx=le`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,vx=le`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`,kx=le`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,jx=i.div`
  position: relative;
  width: 100%;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`,Sx=i.div`
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
  animation: ${t=>t.$start?et`
          ${vx} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `:"none"};
`,Cx=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${t=>t.$start?et`
          ${kx} 1s ease-out forwards
        `:"none"};
  animation-delay: ${t=>t.$start?"1.5s":"0s"};
`,Tx=le`
  0% { background-position-x: 0%; }
  50% { background-position-x: 100%; }
  100% { background-position-x: 0%; }
`,Ha=t=>t?t instanceof Blob?t.type.startsWith("video/"):typeof t!="string"?!1:t.includes(".mp4")||t.includes(".webm")||t.includes(".ogg")||t.includes(".mov")||t.startsWith("data:video/")||t.startsWith("blob:"):!1,Ss=async t=>{if(!t)return;const n=typeof t=="string"?t:t.src,a=typeof t=="string"?"background":t.name||"background";if(!n)return;const c=Ha(n)?".mp4":".webp",l=a.replace(/[/\\?%*:|"<>]/g,"-").trim()||"background",d=l.toLowerCase().endsWith(c)?l:`${l}${c}`,h=La.loading("Завантаження файлу...",{id:"bg-download"});try{const u=await fetch(n);if(!u.ok)throw new Error(`HTTP error ${u.status}`);const g=await u.blob(),x=URL.createObjectURL(g),T=document.createElement("a");T.href=x,T.download=d,document.body.appendChild(T),T.click(),document.body.removeChild(T),setTimeout(()=>URL.revokeObjectURL(x),1500),La.success(`Збережено: ${d}`,{id:h})}catch(u){console.warn("Blob fetch download failed, using direct download:",u);try{const g=document.createElement("a");g.href=n,g.download=d,g.target="_blank",g.rel="noopener noreferrer",document.body.appendChild(g),g.click(),document.body.removeChild(g),La.success(`Відкрито для скачування: ${d}`,{id:h})}catch{La.error("Не вдалося скачати файл",{id:h})}}},fr=t=>{const n=[...t];for(let a=n.length-1;a>0;a--){const c=Math.floor(Math.random()*(a+1));[n[a],n[c]]=[n[c],n[a]]}return n},gr=t=>{if(t.author)return t.author;if(!t.snippet)return null;const n=t.snippet.match(/Постачальник(?:и)?:\s*([^\n]+)/);return n?n[1].trim():null},Ax=t=>{if(!t)return null;const n=t.images?.[0];return n?bd[n]||n:null},Ix=(t="")=>t.includes("play.google.com")?"playmarket":t.includes("store.steampowered.com")?"steam":t.includes("apps.apple.com")||t.includes("itunes.apple.com")?"appstore":null,Jr={playmarket:{label:"Play Market",emoji:"🤖",color:"#01875f"},steam:{label:"Steam",emoji:"🎮",color:"#1b2838"},appstore:{label:"App Store",emoji:"🍎",color:"#0071e3"}},Gr=t=>{if(!t)return[];const n=[];if(t.platforms&&Array.isArray(t.platforms))return t.platforms;const a=Ix(t.url);if(a&&n.push({type:a,url:t.url}),t.snippet){if(t.snippet.includes("play.google.com")&&!n.some(c=>c.type==="playmarket")){const c=t.snippet.match(/(https:\/\/play\.google\.com\/[^\s\n\)]+)/);c&&n.push({type:"playmarket",url:c[1]})}if(t.snippet.includes("store.steampowered.com")&&!n.some(c=>c.type==="steam")){const c=t.snippet.match(/(https:\/\/store\.steampowered\.com\/[^\s\n\)]+)/);c&&n.push({type:"steam",url:c[1]})}}return n},Dx=(t=[],n=[])=>{const a=new Set;return[...t||[],...n||[]].filter(c=>{const l=`${c?.lat??""}-${c?.lon??""}-${c?.name??""}-${c?.country??""}`;return!c||a.has(l)?!1:(a.add(l),!0)})},Mx=i.div`
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
  animation: ${t=>t.$panEnabled&&t.$zoom>1?et`
          ${Tx} ${t.$panSpeed||6}s infinite linear
        `:"none"};
`,zx=r.memo(({bg:t,onClick:n})=>{const a=(0,r.useRef)(null),[c,l]=(0,r.useState)(null);(0,r.useEffect)(()=>{if(t?.src instanceof Blob){const h=URL.createObjectURL(t.src);return l(h),()=>URL.revokeObjectURL(h)}else l(null)},[t?.src]);const d=t?.src instanceof Blob?c:typeof t?.src=="string"?t.src:void 0;return(0,e.jsx)("video",{ref:a,src:d,preload:"none",muted:!0,playsInline:!0,style:{width:"100%",aspectRatio:"3/2",objectFit:"cover",cursor:"pointer",background:"#111"},onMouseEnter:()=>{if(a.current){a.current.preload!=="auto"&&(a.current.preload="auto");const h=a.current.play();h!==void 0&&h.catch(()=>{})}},onMouseLeave:()=>{a.current&&(a.current.pause(),a.current.currentTime=0)},onClick:n})}),xr=r.memo(t=>{const{$image:n,$active:a,$focalX:c,$focalY:l,$videoStart:d,$videoEnd:h,$videoPlaybackSpeed:u}=t,[g,x]=(0,r.useState)(null),T=(0,r.useRef)(null),k=t.$blurType==="pixelated",P=Ha(n);(0,r.useEffect)(()=>{if(!P){x(null);return}if(n instanceof Blob){const y=URL.createObjectURL(n);return x(y),()=>URL.revokeObjectURL(y)}else if(typeof n=="string"&&n){let y=!0;return fetch(n).then(m=>m.blob()).then(m=>{if(y){const v=URL.createObjectURL(m);x(v)}}).catch(()=>{y&&x(null)}),()=>{y=!1}}},[n,P]);const z=n instanceof Blob?g:typeof n=="string"?g||n:"";(0,r.useEffect)(()=>{const y=T.current;if(y)if(a){if(u&&y.playbackRate!==u&&(y.playbackRate=u),d!=null&&y.currentTime<d&&y.paused&&(y.currentTime=d),y.paused){const m=y.play();m!==void 0&&m.catch(()=>{})}}else y.paused||y.pause()},[a,d,u,z]);const F=d??0,I=h??null;return(0,e.jsx)(Mx,{...t,children:P?(0,e.jsx)("video",{ref:T,src:z,preload:a?"auto":"none",muted:!0,loop:!0,playsInline:!0,onCanPlay:y=>{if(a){const m=y.target;if(u&&m.playbackRate!==u&&(m.playbackRate=u),m.paused){const v=m.play();v!==void 0&&v.catch(()=>{})}}},onTimeUpdate:y=>{if(!I)return;const m=y.target.currentTime,v=y.target.duration;I>0&&m>=I&&v&&I<v-.5&&(y.target.currentTime=F)},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${c}% ${l}%`,imageRendering:k?"pixelated":"auto"}}):(0,e.jsx)("img",{src:z||"/assets/fog-Cew27ml4.webp",alt:"Геройський фон",fetchPriority:a?"high":"low",loading:a?"eager":"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${c}% ${l}%`,imageRendering:k?"pixelated":"auto",display:"block"}})})}),$x=i.div`
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
`,Rx=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,Lx=i.div`
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
`,Fx=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ex=i.div`
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
`,Px=i.button`
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease;
`,Nx=i.div`
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
`,Ox=i.button`
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
`;var Vx=i.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`,Yr=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Zr=i.button`
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
`,Xr=i.div`
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
`,Kn=i.button`
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
`,Cs=i.button`
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
`,Bx=i.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`,Ts=i.div`
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
`,Hx=i.div`
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
`,Kx=i.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`,Ux=i.button`
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
`,Wx=i.div`
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.3);
`,As=i.button`
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
`,_x=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,qx=i.div`
  position: relative;
  display: flex;
  width: 99.7%;
  justify-content: center;
`,Jx=i.input`
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
`,Gx=i.button`
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
`,Qr=i.button`
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
  ${t=>!t.disabled&&et`
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
`,Is=i.div`
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
`,Ds=i.button`
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
`;var Yx=i.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: ${t=>t.$isDarkMode?"rgba(10,10,20,0.97)":"rgba(245,247,255,0.97)"};
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`,Zx=i.div`
  width: 100%;
  padding: 18px 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
`,Xx=i.div`
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
`,Qx=i.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 17px;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  &::placeholder { color: ${t=>t.$isDarkMode?"#666":"#aaa"}; }
`,eh=i.div`
  color: ${t=>t.$isDarkMode?"#ffffff":"#080808"};
  font-size: 12px;
  text-align: center;
`,th=i.div`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  overflow-y: auto;
  padding: 0 1px 2px;
  display: flex;
  flex-direction: column;
  gap: 6px;`,ei=i.div`
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
`,ti=i.div`
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
`,ni=new Map,hr=new Map,nh=t=>{if(!t?.url?.includes("play.google.com/store/apps"))return null;try{const n=new URL(t.url).searchParams.get("id");return n?`https://play.google.com/store/apps/details?id=${encodeURIComponent(n)}&hl=en`:null}catch{return null}},ah=async t=>{if(!t)return null;if(ni.has(t))return ni.get(t);if(hr.has(t))return hr.get(t);const n=fetch(`https://r.jina.ai/http://${t.replace(/^https?:\/\//,"")}`).then(a=>a.ok?a.text():"").then(a=>{const c=[...new Set([...a.matchAll(/https:\/\/play-lh\.googleusercontent\.com\/[^\s"')]+/g)].map(([l])=>l.replace(/\\u003d/g,"=")).filter(l=>/=s(?:48|96)(?:-rw)?(?:\s|$)/.test(l)))][0]||null;return c&&ni.set(t,c),c}).catch(()=>null).finally(()=>hr.delete(t));return hr.set(t,n),n},rh=(t,n)=>{const a=[];n&&a.push(n),typeof t?.icon=="string"&&t.icon.trim()&&a.push(t.icon.trim());const c=Array.isArray(t?.images)?t.images.find(d=>typeof d=="string"&&/^https?:\/\//i.test(d)):null,l=t?.url?.includes("play.google.com/store/apps");if(l&&c&&a.push(c),!l)try{const d=new URL(t.url).hostname;a.push(`https://www.google.com/s2/favicons?domain=${d}&sz=64`)}catch{}return[...new Set(a)]},Ms=({link:t})=>{const n=nh(t),[a,c]=(0,r.useState)(null),[l,d]=(0,r.useState)(0);(0,r.useEffect)(()=>{let T=!0;return c(null),d(0),n&&ah(n).then(k=>{T&&c(k)}),()=>{T=!1}},[t,n]);const h=rh(t,a),u=t?.title?.charAt(0).toUpperCase()||"?",g=t?.url?.includes("play.google.com/store/apps")?"🎮":u,x=h[l];return x?(0,e.jsx)("img",{src:x,alt:"",width:"28",height:"28",onError:()=>{l<h.length-1?d(T=>T+1):d(h.length)},style:{display:"block",objectFit:"contain"}}):g},ai=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ri=i.div`
  font-size: 15px;
  font-weight: 700;
  color: ${t=>t.$isDarkMode?"#f0f0f0":"#111"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ii=i.div`
  font-size: 11px;
  color: ${t=>t.$isDarkMode?"#fdfdfd":"#050505"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zs=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 2px;
`,$s=i.span`
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 20px;
  background: ${t=>t.$isDarkMode?"rgba(255,183,108,0.15)":"rgba(255,183,108,0.25)"};
  color: ${t=>t.$isDarkMode?"#ffb36c":"#a05000"};
  font-weight: 600;
`,oi=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
`,si=i.button`
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
`,Rs=i.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${t=>t.$isDarkMode?"#ffb36c99":"#666"};
  text-transform: uppercase;
  padding: 4px 2px 2px;
`,ih=i.div`
  height: 1px;
  background: ${t=>t.$isDarkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.12)"};
  margin: 6px 0;
`,oh=i.div`
  position: fixed;
  inset: 0;
  z-index: 10100;
  background: rgba(0,0,0,0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`,sh=i.div`
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
`,lh=i.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 22px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
`,dh=i.div`
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
`,ch=i.div`
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
`,ph=i.div`
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

`,uh=i.button`
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
`,xd=t=>{if(!t)return null;const n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return n&&n[2].length===11?n[2]:null},fh=({images:t=[],youtubeTrailer:n,setFullscreenImage:a,imageMap:c,setFullscreenVideo:l})=>{const d=n?xd(n):null,h=d?`https://img.youtube.com/vi/${d}/mqdefault.jpg`:null,u=t.map(g=>c[g]||g).find(Boolean)||h;return(0,e.jsxs)(ph,{onClick:g=>{g.stopPropagation(),u&&a(u)},children:[u&&(0,e.jsx)("img",{className:"main-image",src:u,alt:""}),h&&n&&(0,e.jsxs)(uh,{type:"button","aria-label":"Відкрити трейлер",onClick:g=>{g.stopPropagation(),l(n)},children:[(0,e.jsx)("img",{src:h,alt:""}),(0,e.jsx)("span",{children:"▶"})]})]})},Ls=i.div`
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
`,gh=i.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`,li=i.button`
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
`,xh=i.button`
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
`,hh=i.div`
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
  animation: ${t=>t.$isClosing?bx:mx} 0.3s ease-out
    forwards;
`,mh=i.div`
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
  animation: ${t=>t.$isClosing?wx:yx} 0.4s
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
`,bh=i.button`
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
`,yh=i.button`
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
`,hd=i.div`
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
`,md=i.div`
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
`,Nn=i.div`
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
`,wh=i.div`
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
`;var vh=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
  padding: 2px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`,kh=i.div`
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
    ${md}, ${hd} {
      opacity: 1;
    }
  }
`,jh=i.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  cursor: pointer;
  display: block;
`,Sh=i.div`
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
`,di=i.button`
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
`,ci=i.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(8, 10, 18, 0.85);
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  z-index: 7;
`,Un=i.button`
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
`,Ch=i.div`
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
`,Fs=i.button`
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
`,Th=i.input`
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
`,pi=i.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 179, 108, 0.35), transparent);
  margin: 8px 0;
  width: 100%;
`,Ah=i.h3`
  font-weight: 700;
  color: #ffb36c;
  margin: 4px 0;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.3px;
`,la=({content:t,children:n,placement:a="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),{refs:u,floatingStyles:g,context:x}=ma({open:l,onOpenChange:d,placement:a,strategy:"fixed",transform:!1,whileElementsMounted:ua,middleware:[ca(8),pa(),va({padding:5}),ka({element:h})]}),{isMounted:T,styles:k}=ga(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=fa(x,{move:!1}),z=ha(x),F=ba(x),I=ja(x,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:m}=wa([P,z,F,I]);if(!t)return n;const v=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:u.setReference,...y(),style:{display:"inline-flex"},children:n}),T&&(0,e.jsx)(ya,{children:(0,e.jsxs)(hx,{ref:u.setFloating,$isDarkMode:c,style:{...g,...k},...m(),children:[t,(0,e.jsx)(xa,{ref:h,context:x,fill:v,stroke:"#00acb9",strokeWidth:1})]})})]})},ui=[{label:"UTC (Всесвітній час)",value:"UTC"},{label:"GMT (Лондон, Дублін)",value:"Europe/London"},{label:"UTC+1 (Берлін, Париж, Рим, Варшава)",value:"Europe/Berlin"},{label:"UTC+2 (Київ, Хельсінкі, Каїр, Бухарест)",value:"Europe/Kyiv"},{label:"UTC+3 (Стамбул, Ер-Ріяд, Найробі)",value:"Europe/Istanbul"},{label:"UTC+4 (Дубай, Баку, Тбілісі)",value:"Asia/Dubai"},{label:"UTC+5 (Ісламабад, Ташкент, Мальдіви)",value:"Asia/Karachi"},{label:"UTC+6 (Астана, Дакка, Алмати)",value:"Asia/Almaty"},{label:"UTC+7 (Бангкок, Джакарта, Ханой)",value:"Asia/Bangkok"},{label:"UTC+8 (Пекін, Сінгапур, Перт)",value:"Asia/Shanghai"},{label:"UTC+9 (Токіо, Сеул, Іркутськ)",value:"Asia/Tokyo"},{label:"UTC+10 (Сідней, Мельбурн, Порт-Морсбі)",value:"Australia/Sydney"},{label:"UTC+11 (Номеа, Соломонові Острови)",value:"Pacific/Noumea"},{label:"UTC+12 (Окленд, Фіджі)",value:"Pacific/Auckland"},{label:"UTC-1 (Азорські острови, Кабо-Верде)",value:"Atlantic/Azores"},{label:"UTC-2 (Південна Джорджія)",value:"Atlantic/South_Georgia"},{label:"UTC-3 (Буенос-Айрес, Бразиліа, Гренландія)",value:"America/Argentina/Buenos_Aires"},{label:"UTC-4 (Сантьяго, Галіфакс, Каракас)",value:"America/Santiago"},{label:"UTC-5 (Нью-Йорк, Торонто, Богота)",value:"America/New_York"},{label:"UTC-6 (Чикаго, Мехіко, Вінніпег)",value:"America/Chicago"},{label:"UTC-7 (Денвер, Едмонтон, Калгарі)",value:"America/Denver"},{label:"UTC-8 (Лос-Анджелес, Ванкувер, Сан-Франциско)",value:"America/Los_Angeles"},{label:"UTC-9 (Аляска, Анкоридж)",value:"America/Anchorage"},{label:"UTC-10 (Гаваї, Гонолулу)",value:"Pacific/Honolulu"},{label:"UTC-11 (Паго-Паго, Алофі)",value:"Pacific/Pago_Pago"},{label:"UTC-12 (Острів Бейкер, Острів Гоуленд)",value:"Etc/GMT+12"},{label:"EST (Північна Америка: Східний час)",value:"America/New_York"},{label:"CST (Північна Америка: Центральний час)",value:"America/Chicago"},{label:"MST (Північна Америка: Гірський час)",value:"America/Denver"},{label:"PST (Північна Америка: Тихоокеанський час)",value:"America/Los_Angeles"},{label:"CET (Центральна Європа: Прага, Мадрид)",value:"Europe/Berlin"},{label:"EET (Східна Європа: Софія, Таллінн)",value:"Europe/Kyiv"},{label:"IST (Індія, Нью-Делі)",value:"Asia/Kolkata"},{label:"JST (Японія, Токіо)",value:"Asia/Tokyo"},{label:"AEST (Східна Австралія, Брісбен)",value:"Australia/Brisbane"},{label:"Інший (ввести вручну)",value:"custom_input"}],bd={planes:df,village:Gl,herotext:id,meridian:cf,castle:rd,hills:$i},fi=({isStickyBgMode:t,heroDateString:n,onAddCity:a,startAnimation:c,user:l,isDarkMode:d,checkWeatherDanger:h,heroBg:u,setHeroBg:g,heroBg2:x,setHeroBg2:T,heroBg3:k,setHeroBg3:P,heroBg4:z,setHeroBg4:F,customHeroBgs:I=[],setCustomHeroBgs:y,heroBgMode:m,setHeroBgMode:v,heroOverlayOpacity:j,setHeroOverlayOpacity:C,bgRatings:B,setBgRatings:H,slideshowInterval:J,setSlideshowInterval:Q,slideshowTransition:he,setSlideshowTransition:te,filterCategory:D,setFilterCategory:N,heroBgZoom:re,setHeroBgZoom:xe,heroBgRotation:ce,setHeroBgRotation:ee,heroBgBlur:X,setHeroBgBlur:me,heroBgPixelation:oe,setHeroBgPixelation:Te,heroBgBlurType:Se,setHeroBgBlurType:ut,heroBgFocal1:It,setHeroBgFocal1:Dt,heroBgFocal2:ot,setHeroBgFocal2:st,heroBgFocal3:Oe,setHeroBgFocal3:tt,heroBgFocal4:mt,setHeroBgFocal4:Ve,heroBgPanEnabled:jt,setHeroBgPanEnabled:Lt,heroBgPanSpeed:ft,setHeroBgPanSpeed:nt,videoPlaybackSpeed:Ze,setVideoPlaybackSpeed:Ue,screenshots:gt=[],selectedTimezone:Ie,setSelectedTimezone:De,customHolidayName:at,setCustomHolidayName:St})=>{zi();const{registerRef:bt,isActive:Ft}=Wa?.()||{registerRef:()=>{}},yt=jr(o=>o.calendar?.customDays||[]),[Ot,V]=(0,r.useState)({date:"",reason:""}),[ne,pe]=(0,r.useState)(""),Ae=(0,r.useRef)(null),[de,Me]=(0,r.useState)(null);(0,r.useEffect)(()=>{const o=()=>{pe("Конотоп"),setTimeout(()=>{a({name:"Конотоп",fullName:"Конотоп (UA)",lat:51.24,lon:33.2})},2e3)};return window.addEventListener("domino-auto-input-konotop",o),()=>window.removeEventListener("domino-auto-input-konotop",o)},[a]),(0,r.useEffect)(()=>{if(de!==null&&Ae.current){const o=Ae.current.querySelector(`[data-id="${de}"]`);o&&Ae.current.scrollTo({top:o.offsetTop,behavior:"smooth"})}},[de]);const[lt,We]=(0,r.useState)([]),[Cn,_e]=(0,r.useState)(3),[Ct,w]=(0,r.useState)(!1),[E,q]=(0,r.useState)(""),[ge,qe]=(0,r.useState)(300),rt=1e3,[be,ze]=(0,r.useState)(0);(0,r.useEffect)(()=>{(async()=>{try{const A=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,U=await f.default.getItem(A);ze(Number(U)||0)}catch(A){console.error("Failed to load hero uploaded count:",A)}})()},[l]);const[qt,Mt]=(0,r.useState)(!1),[ye,Et]=(0,r.useState)(!1),[Be,Vt]=(0,r.useState)(null),[$e,Jt]=(0,r.useState)(null),[zt,Xt]=(0,r.useState)(!1),[zn,$n]=(0,r.useState)(!0),[se,Tt]=(0,r.useState)("city");(0,r.useEffect)(()=>(qt||Be||zt||$e||se==="links"?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[qt,Be,zt,$e,se]),(0,r.useEffect)(()=>{const o=A=>{if(A.key==="Escape"){if($e){Jt(null);return}se==="links"&&(Tt("city"),We([]),w(!1))}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[$e,se]);const[Bt,G]=(0,r.useState)(!1),[ie,He]=(0,r.useState)(null),[Re,Ke]=(0,r.useState)(null),[Le,dt]=(0,r.useState)([]),[Xe,Ht]=(0,r.useState)([]),[Kt,dn]=(0,r.useState)(!1),[Tn,cn]=(0,r.useState)(""),[_n,Gt]=(0,r.useState)(""),[On,Qt]=(0,r.useState)("rating"),[pn,$t]=(0,r.useState)(1),Rn=1,[un,aa]=(0,r.useState)("default"),[en,qn]=(0,r.useState)([]),[Ln,on]=(0,r.useState)(0),[Fn,hn]=(0,r.useState)(!1),[sn,Je]=(0,r.useState)(""),tn=o=>!Fa.some(A=>A.src===o),Qe=(0,r.useMemo)(()=>[...Fa,...I||[],...(gt||[]).map(o=>({src:o.image,name:`Скріншот: ${o.trackName}`,category:"Скріншоти"}))],[I,gt]),xt=(0,r.useCallback)((o,A=1)=>{const U=en.findIndex(ae=>ae.src===o);if(m==="random"){(pn===2?2:1)==2?T(o):g(o),U!==-1&&on(U);return}A===2?T(o):A===3?P(o):A===4?F(o):g(o)},[pn,m,en,g,T,P,F]),fn=(0,r.useCallback)(o=>{if(!o||o==="custom_input")return null;try{const A=new Date,U=new Intl.DateTimeFormat("uk",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:o}).format(A),ae=parseInt(U.split(":")[0]);return{timeStr:U,isDay:ae>=6&&ae<20}}catch{return null}},[]),Pt=(0,r.useCallback)(o=>{if(o==="UTC")return 0;if(o==="custom_input")return 999;try{const A=new Date,U=A.toLocaleString("en-US",{timeZone:o}),ae=new Date(U),Y=A.toLocaleString("en-US",{timeZone:"UTC"});return(ae-new Date(Y))/6e4}catch{return 0}},[]),Ut=(0,r.useMemo)(()=>{let o=[...ui];return un==="alpha"?o.sort((A,U)=>A.label.localeCompare(U.label)):un==="offset"&&o.sort((A,U)=>Pt(A.value)-Pt(U.value)),o},[un,Pt]);(0,r.useEffect)(()=>{if(m==="slideshow-2"&&u&&x){$t(1);const o=setInterval(()=>{$t(A=>A===1?2:1)},J*1e3);return()=>clearInterval(o)}else if(m==="slideshow-3"&&u&&x&&k){$t(1);const o=setInterval(()=>{$t(A=>A===3?1:A+1)},J*1e3);return()=>clearInterval(o)}else if(m==="slideshow-4"&&u&&x&&k&&z){$t(1);const o=setInterval(()=>{$t(A=>A===4?1:A+1)},J*1e3);return()=>clearInterval(o)}else if(m==="random"){if(en.length===0&&Qe.length>0){const o=fr(Qe);qn(o),on(0),o[0]&&g(o[0].src);return}if(en.length>0){const o=setInterval(()=>{on(A=>{const U=(A+1)%en.length;return $t(ae=>{const Y=ae===1?2:1;return Y===1?g(en[U].src):T(en[U].src),Y}),U})},J*1e3);return()=>clearInterval(o)}}},[m,Qe,J,en,g,T]),(0,r.useEffect)(()=>{if(m==="random"&&Qe.length>0&&en.length!==Qe.length){const o=fr(Qe);qn(o),on(0),o[0]&&(xt(o[0].src),$t(1))}},[Qe.length,m]),(0,r.useEffect)(()=>{ui.some(o=>o.value===Ie)?(Je(""),hn(!1)):(Je(Ie),hn(!0))},[Ie]);const nn=()=>{Et(!0),setTimeout(()=>{Mt(!1),Et(!1)},350)},Sa=(0,r.useRef)(null),Jn=[...(Qe||[]).filter(o=>{const A=D==="all"||(D==="custom"?tn(o.src):o.category===D),U=(o.name||"").toLowerCase().includes(E.toLowerCase());return A&&U})].sort((o,A)=>{if(On==="az")return o.name.localeCompare(A.name);if(On==="za")return A.name.localeCompare(o.name);const U=B[o.src]||0,ae=B[A.src]||0;return U!==ae?ae-U:o.name.localeCompare(A.name)}),Gn=Jn.slice(0,ge),Nt=()=>{C(.3),xe(1),ee(0),me(0),Dt({x:50,y:50}),st({x:50,y:50}),Lt(!1),nt(6),Ue&&Ue(1)},mn=o=>{H(A=>{const U=((A[o]||0)+1)%3;return{...A,[o]:U}})},Yn=(0,r.useRef)(null),Zn=async o=>{if(!o)return;const A=o.type.startsWith("image/"),U=o.type.startsWith("video/");if(!A&&!U)return;try{const Y=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`;if(Number(await f.default.getItem(Y)||0)>=rt){alert(`Ліміт досягнуто — не більше ${rt} карток на добу.`);return}}catch(Y){console.error("Failed to check hero daily limit:",Y)}if(U){if(o.size>20971520){alert("Відео занадто велике! Максимум 20мб для стабільності.");return}y(Y=>[{src:o,name:o.name,category:"Ваші відео"},...Y]),g(o);try{const Y=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,ue=Number(await f.default.getItem(Y)||0)+1;await f.default.setItem(Y,ue),ze(ue)}catch(Y){console.error("Failed to update hero uploaded count:",Y)}return}const ae=new FileReader;ae.onload=Y=>{const ue=new Image;ue.src=Y.target.result,ue.onload=()=>{const ke=document.createElement("canvas"),wt=1200,Ta=wt/ue.width;ke.width=wt,ke.height=ue.height*Ta,ke.getContext("2d").drawImage(ue,0,0,ke.width,ke.height),ke.toBlob(async ia=>{try{const wn=`hero_cards_${l?.uid||"guest"}_${new Date().toISOString().split("T")[0]}`,At=Number(await f.default.getItem(wn)||0);if(At>=rt){alert(`Ліміт досягнуто — не більше ${rt} карток на добу.`);return}const Aa=At+1;await f.default.setItem(wn,Aa),ze(Aa)}catch(wn){console.error("Failed to update hero uploaded count:",wn)}y(wn=>[{src:ia,name:o.name,category:"Ваші картинки"},...wn]),g(ia)},"image/jpeg",.7)}}},Ca=o=>{o.preventDefault()},Vn=o=>{o.preventDefault();const A=o.dataTransfer.files[0];Zn(A)},[ra,an]=(0,r.useState)([]),[Xn,s]=(0,r.useState)(!1),[p,O]=(0,r.useState)(!1),[R,M]=(0,r.useState)(""),[$,fe]=(0,r.useState)(()=>{const o=localStorage.getItem("hero_cooldown_until");if(o){const A=parseInt(o,10),U=Date.now();return A>U?Math.ceil((A-U)/1e3):0}return 0}),Ce=(0,r.useRef)(null),it="5104647d3e574f4a3f23c0aa092eb2b9";(0,r.useEffect)(()=>{const o=A=>{A.type==="mousedown"&&A.button!==0||A.type==="mousedown"&&(A.target===document.body||A.target===document.documentElement)||Ce.current&&!Ce.current.contains(A.target)&&w(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const bn=async(o,A,U=!1)=>{const ae=A.trim().toLowerCase().replace(/^(погода\s+(в|у)?\s*)/i,"").trim();if(ae.length<2){We([]),w(!1);return}const Y=Ii.filter(ue=>ue.name.toLowerCase().includes(ae)||ue.aliases.some(ke=>ke.toLowerCase().includes(ae))).map(ue=>({name:ue.name,state:"Україна",country:"UA",lat:ue.lat,lon:ue.lon,isLocal:!0}));Y.length>0&&!U&&(We(Y),w(!0));try{const ue=await(await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(ae)}&limit=${o}&appid=${it}`)).json(),ke=Array.isArray(ue)?ue:[];$n(ke.length>=o),We(wt=>Dx(U?wt:Y,ke)),w(!0)}catch(ue){console.error("Помилка API:",ue),Y.length>0&&(We(Y),w(!0))}};(0,r.useEffect)(()=>{f.default.getItem("pinnedLinks").then(o=>{o&&dt(o)})},[]);const Fe=o=>{dt(A=>{let U;return A.includes(o)?U=A.filter(ae=>ae!==o):U=[o,...A].slice(0,5),f.default.setItem("pinnedLinks",U),U})},Yt=(0,r.useCallback)(async o=>{const A=o.trim();if(!A){Ht([]);return}dn(!0);try{const U=await fetch(od(A));if(!U.ok)throw new Error(`Wikipedia request failed: ${U.status}`);const ae=((await U.json())?.query?.search||[]).map(Y=>({id:Y.pageid,title:Y.title,snippet:sd(Y.snippet),url:`https://uk.wikipedia.org/wiki/${encodeURIComponent(Y.title).replace(/%20/g,"_")}`}));Ht(ae)}catch(U){console.error("Wikipedia search error:",U),Ht([])}finally{dn(!1)}},[]);(0,r.useEffect)(()=>{if(se!=="links"){Ht([]),dn(!1);return}const o=setTimeout(()=>{Yt(ne)},350);return()=>clearTimeout(o)},[se,ne,Yt]),(0,r.useEffect)(()=>{_e(3),$n(!0);const o=setTimeout(()=>{ne&&bn(3,ne,!1)},500);return()=>clearTimeout(o)},[ne]);const ct=o=>{o.preventDefault(),o.stopPropagation();const A=Cn+3;_e(A),bn(A,ne,!0)};(0,r.useEffect)(()=>{let o;return $>0&&(o=setInterval(()=>{fe(A=>A<=1?(localStorage.removeItem("hero_cooldown_until"),0):A-1)},1e3)),()=>clearInterval(o)},[$]);const Ee=async()=>{if($>0)return;const o=parseFloat(Tn),A=parseFloat(_n);if(isNaN(o)||isNaN(A)){alert("Будь ласка, введіть правильні координати");return}if(o<-90||o>90){alert("Широта має бути від -90 до 90");return}if(A<-180||A>180){alert("Довгота має бути від -180 до +180");return}const U={name:"Обрана точка",state:`Широта: ${o}`,country:`Довгота: ${A}`,lat:o,lon:A,isManual:!0};try{M("🔍 Шукаємо за вказаними координатами...");const ae=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${o}&lon=${A}&limit=10&appid=${it}`)).json();if(ae&&ae.length>0){an([U,...ae]),s(!0),M("");return}O(!0),s(!0),an([U]),M("Нічого не знайшли точно — шукаємо найближче...");const Y=1e4,ue=Date.now();let ke=!1;e:for(let wt=1;wt<=15&&!ke;wt++){const Ta=[[o,Math.max(-180,Math.min(180,A+wt))],[o,Math.max(-180,Math.min(180,A-wt))],[Math.max(-90,Math.min(90,o+wt)),A],[Math.max(-90,Math.min(90,o-wt)),A]];for(const[ia,wn]of Ta){if(Date.now()-ue>=Y)break e;M(`🔎 Перевіряємо: ±${wt}° (шир: ${ia.toFixed(1)}°, довг: ${wn.toFixed(1)}°)...`);try{const At=await(await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${ia}&lon=${wn}&limit=4&appid=${it}`)).json();if(At&&At.length>0){an([U,...At]),M(`✅ Знайдено поруч (відхилення ~${wt}°)`),ke=!0;break e}}catch{}}}if(!ke){const wt=((Date.now()-ue)/1e3).toFixed(1);M(`⚠️ Пошук завершено (${wt}с) — навколо немає населених пунктів. Можна додати точку вручну.`)}}catch(ae){console.error("Помилка при пошуку за координатами:",ae),an([U]),s(!0),M("❌ Помилка запиту. Спробуйте ще раз.")}finally{O(!1)}},Ge=o=>{$>0||(a({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),fe(10),localStorage.setItem("hero_cooldown_until",Date.now()+1e4),cn(""),Gt(""),s(!1),an([]))},yn=o=>{$>0||(a({name:o.name,fullName:`${o.name}${o.state?`, ${o.state}`:""} (${o.country})`,lat:o.lat,lon:o.lon}),window.dispatchEvent(new CustomEvent("domino-next-step-auto")),fe(9),localStorage.setItem("hero_cooldown_until",Date.now()+9e3),pe(""),We([]),w(!1))},An=(0,r.useMemo)(()=>{const o=new Date,A=o.toISOString().split("T")[0];if(l?.birthDate){const[,Y,ue]=l.birthDate.split("-");if(o.getDate()===parseInt(ue)&&o.getMonth()+1===parseInt(Y))return{active:!0,color:"#ff5252",label:"З ДНЕМ НАРОДЖЕННЯ!"}}const U=yt.find(Y=>Y.date===A);if(U)return{active:!0,color:"#fff59d",label:U.reason.toUpperCase()+"! 🎉"};const ae=o.getDay();return ae===0||ae===6?{active:!0,color:"#ffff00"}:{active:!1,color:"#fff59d",label:""}},[yt,l]).active;return(0,r.useMemo)(()=>An?Array.from({length:25}).map((o,A)=>({id:A,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,x:`${(Math.random()-.5)*100}px`,y:`${(Math.random()-.5)*100}px`,duration:`${3+Math.random()*4}s`,delay:`${Math.random()*5}s`})):[],[An]),(0,e.jsxs)(jx,{children:[(0,e.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none",visibility:"hidden"},children:(0,e.jsxs)("filter",{id:"pixelate-hero",x:"0",y:"0",width:"100%",height:"100%",children:[(0,e.jsx)("feFlood",{x:"0",y:"0",height:"1",width:"1"}),(0,e.jsx)("feComposite",{width:Math.max(1,oe*2),height:Math.max(1,oe*2)}),(0,e.jsx)("feTile",{result:"tiles"}),(0,e.jsx)("feComposite",{in:"SourceGraphic",in2:"tiles",operator:"in"}),(0,e.jsx)("feMorphology",{operator:"dilate",radius:oe})]})}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:u,$active:m==="static"||pn===1,$transition:he,$zoom:re,$rotation:ce,$rotationScale:Rn,$blur:X,$pixelation:oe,$blurType:Se,$focalX:It?.x||50,$focalY:It?.y||50,$panEnabled:jt&&re>1,$panSpeed:ft,$videoStart:Qe.find(o=>o.src===u)?.start,$videoEnd:Qe.find(o=>o.src===u)?.end,$videoPlaybackSpeed:Ze}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:x,$active:(m==="slideshow-2"||m==="slideshow-3"||m==="slideshow-4"||m==="random")&&pn===2,$transition:he,$zoom:re,$rotation:ce,$rotationScale:Rn,$blur:X,$pixelation:oe,$blurType:Se,$focalX:ot?.x||50,$focalY:ot?.y||50,$panEnabled:jt&&re>1,$panSpeed:ft,$videoStart:Qe.find(o=>o.src===x)?.start,$videoEnd:Qe.find(o=>o.src===x)?.end,$videoPlaybackSpeed:Ze}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:k,$active:(m==="slideshow-3"||m==="slideshow-4")&&pn===3,$transition:he,$zoom:re,$rotation:ce,$rotationScale:Rn,$blur:X,$pixelation:oe,$blurType:Se,$focalX:Oe?.x||50,$focalY:Oe?.y||50,$panEnabled:jt&&re>1,$panSpeed:ft,$videoStart:Qe.find(o=>o.src===k)?.start,$videoEnd:Qe.find(o=>o.src===k)?.end,$videoPlaybackSpeed:Ze}),(0,e.jsx)(xr,{$isStickyBgMode:t,$image:z,$active:m==="slideshow-4"&&pn===4,$transition:he,$zoom:re,$rotation:ce,$rotationScale:Rn,$blur:X,$pixelation:oe,$blurType:Se,$focalX:mt?.x||50,$focalY:mt?.y||50,$panEnabled:jt&&re>1,$panSpeed:ft,$videoStart:Qe.find(o=>o.src===z)?.start,$videoEnd:Qe.find(o=>o.src===z)?.end,$videoPlaybackSpeed:Ze}),(0,e.jsx)($x,{$opacity:j,$isStickyBgMode:t}),(0,e.jsxs)(xh,{ref:o=>bt("changeBgButton",o),onClick:()=>Mt(!0),children:[(0,e.jsx)(_s,{}),(0,e.jsx)("p",{style:{fontSize:"11px"},children:"Змінити фон?"})]}),(0,e.jsx)(Sx,{$image:id,$start:c}),(0,e.jsxs)(Cx,{$start:c,children:[(0,e.jsx)(Rx,{children:(0,e.jsx)(Lx,{children:(0,e.jsx)(Fx,{children:(0,e.jsxs)(Ex,{ref:Sa,children:[n,(0,e.jsx)(la,{content:"Змінити часовий пояс",isDarkMode:d,children:(0,e.jsx)(Px,{ref:o=>bt("timezoneButton",o),onClick:()=>Xt(!zt),"aria-label":"Змінити часовий пояс",children:(0,e.jsx)(Js,{})})}),zt&&(0,Ni.createPortal)((0,e.jsxs)(Nx,{children:[(0,e.jsxs)(Hx,{children:[(0,e.jsx)(Ux,{type:"button",onClick:()=>Xt(!1),"aria-label":"Закрити список часових поясів",children:"×"}),(0,e.jsx)(Kx,{children:"Часовий пояс"})]}),(0,e.jsxs)(Wx,{children:[(0,e.jsx)(As,{$active:un==="default",onClick:()=>aa("default"),children:"За замовчуванням"}),(0,e.jsx)(As,{$active:un==="offset",onClick:()=>aa("offset"),children:"UTC +/-"})]}),(0,e.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"0 5px 10px"},children:[Ut.map(o=>{const A=Ie===o.value||o.value==="custom_input"&&Fn,U=fn(o.value);return(0,e.jsx)(Ox,{$selected:A,onClick:()=>{o.value==="custom_input"?(hn(!0),ui.some(ae=>ae.value===Ie)?Je(""):Je(Ie)):(hn(!1),De(o.value),f.default.setItem("selected_timezone",o.value),Xt(!1))},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,e.jsx)("span",{children:o.label}),U&&(0,e.jsxs)("span",{style:{fontSize:"16px",opacity:.9,display:"flex",gap:"10px",whiteSpace:"nowrap",marginLeft:"12px",color:U.isDay?"#ffd54f":"#90caf9"},children:[U.isDay?(0,e.jsx)(Sn,{}):(0,e.jsx)(Mn,{}),(0,e.jsx)("p",{children:U.timeStr})]})]})},o.value)}),Fn&&(0,e.jsx)("div",{style:{padding:"12px 0"},children:(0,e.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,e.jsx)("input",{type:"text",value:sn,onChange:o=>Je(o.target.value),placeholder:"Наприклад: Europe/Warsaw",style:{width:"100%",padding:"10px 110px 10px 10px",borderRadius:"5px",border:"1px solid #ffb36c",background:"#111",color:"#fff",fontSize:"14px",boxSizing:"border-box"}}),(0,e.jsx)("button",{type:"button",onClick:()=>{if(sn.trim())try{Intl.DateTimeFormat("en",{timeZone:sn.trim()}),De(sn.trim()),f.default.setItem("selected_timezone",sn.trim()),Xt(!1)}catch{js("Невірний формат часового поясу. Спробуйте, наприклад, 'Europe/Kyiv' або 'America/New_York'.",d)}else js("Будь ласка, введіть часовий пояс.",d)},style:{position:"absolute",right:"4px",top:"4px",bottom:"4px",padding:"0 12px",background:"#ffb36c",border:"none",borderRadius:"3px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",color:"#1e1e1e"},children:"Застосувати"})]})})]})]}),document.body)]})})})}),(0,e.jsx)(Vx,{ref:Ce,children:se==="city"?(0,e.jsx)(_x,{children:(0,e.jsxs)(qx,{children:[(0,e.jsxs)(Yr,{children:[(0,e.jsx)(la,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(Zr,{onClick:()=>G(o=>!o),"aria-label":"Вибрати режим пошуку",children:(0,e.jsx)(Xa,{})})}),Bt&&(0,e.jsxs)(Xr,{$isDarkMode:d,children:[(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="city",onClick:()=>{Tt("city"),G(!1),cn(""),Gt(""),We([]),w(!1)},children:[(0,e.jsx)(Xa,{})," За назвою міста"]}),(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="coordinates",onClick:()=>{Tt("coordinates"),G(!1),pe(""),We([]),w(!1)},children:[(0,e.jsx)(Ga,{})," Координати"]}),(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="links",onClick:()=>{Tt("links"),G(!1),pe(""),We([]),w(!1),Me(null)},children:[(0,e.jsx)(Ja,{}),"  Посилання"]})]})]}),(0,e.jsx)(Jx,{ref:o=>bt("heroInput",o),value:ne,$isDarkMode:d,onChange:o=>{pe(o.target.value),window.dispatchEvent(new CustomEvent("domino-hero-input-change",{detail:{value:o.target.value}}))},onFocus:()=>lt.length>0&&w(!0),placeholder:$>0?`Зачекайте ${$} сек...`:"Уведіть місто, село.",disabled:$>0,type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:!1,name:"hero-city-search",inputMode:"search",enterKeyHint:"search","aria-label":"Пошук міста","data-form-type":"other","data-lpignore":"true"}),Ct&&lt.length>0&&(0,e.jsxs)(Is,{children:[lt.map((o,A)=>(0,e.jsxs)(Ds,{onClick:()=>yn(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#fffcfc"},children:["Широта: ",o.lat.toFixed(2),"°, Довгота: ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${A}`)),zn?(0,e.jsx)(li,{isDarkMode:d,onClick:ct,children:"Завантажити ще варіанти"}):(0,e.jsx)(li,{isDarkMode:d,disabled:!0,children:"Кінець списку"})]}),(0,e.jsx)(Qr,{onClick:()=>{$===0&&lt[0]&&yn(lt[0])},disabled:$>0,children:$>0?$:"⌕"})]})}):se==="links"?null:(0,e.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"5px",position:"relative"},children:[(0,e.jsxs)(Bx,{style:{alignItems:"flex-start"},children:[(0,e.jsxs)(Yr,{style:{alignSelf:"flex-start"},children:[(0,e.jsx)(la,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(Zr,{onClick:()=>G(o=>!o),"aria-label":"Вибрати режим пошуку",style:{borderRadius:"8px 0 0 8px",height:"30px"},children:(0,e.jsx)(Ga,{})})}),Bt&&(0,e.jsxs)(Xr,{$isDarkMode:d,children:[(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="city",onClick:()=>{Tt("city"),G(!1),cn(""),Gt(""),We([]),w(!1)},children:[(0,e.jsx)(Xa,{}),"  За назвою міста"]}),(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="coordinates",onClick:()=>{Tt("coordinates"),G(!1),pe(""),We([]),w(!1)},children:[(0,e.jsx)(Ga,{}),"  Координати"]}),(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="links",onClick:()=>{Tt("links"),G(!1),pe(""),We([]),w(!1),Me(null)},children:[(0,e.jsx)(Ja,{}),"   Посилання"]})]})]}),(0,e.jsx)(Ts,{children:(0,e.jsx)("input",{type:"number",value:Tn,onChange:o=>cn(o.target.value),placeholder:"Широта: Від -90° до +90°",$isDarkMode:d,disabled:$>0||p,min:"-90",max:"90",step:"0.01"})}),(0,e.jsx)(Ts,{children:(0,e.jsx)("input",{type:"number",value:_n,onChange:o=>Gt(o.target.value),$isDarkMode:d,placeholder:"Довгота: Від -180° до +180°",disabled:$>0||p,min:"-180",max:"180",step:"0.01"})}),(0,e.jsx)(Qr,{onClick:Ee,disabled:$>0||p,style:{alignSelf:"flex-start"},children:$>0?$:p?"…":"⌕"})]}),R&&(0,e.jsxs)("div",{style:{color:R.startsWith("✅")?"#00e676":R.startsWith("❌")?"#ff5252":R.startsWith("⚠️")?"#ffb36c":"#00eaff",fontSize:"11px",fontWeight:"bold",textAlign:"center",padding:"4px 10px",background:"rgba(0,0,0,0.65)",borderRadius:"6px",maxWidth:"340px",margin:"4px auto 0",backdropFilter:"blur(4px)",lineHeight:1.4},children:[p&&(0,e.jsx)("span",{style:{marginRight:"6px"},children:"⟳"}),R]}),Xn&&(0,e.jsxs)(Is,{style:{width:"auto",minWidth:"300px",marginTop:"6px",left:"50%",transform:"translateX(-50%)",position:"absolute"},children:[(0,e.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"6px",textAlign:"center",fontSize:"12px"},children:p?"🔄 Шукаємо поруч…":ra.length>1?"📍 Знайдено поруч з координатами:":"📍 Лише точка за координатами (міст не знайдено)"}),ra.map((o,A)=>(0,e.jsxs)(Ds,{onClick:()=>Ge(o),children:[o.name,o.state?`, ${o.state}`:""," (",o.country,")",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"0.85em",color:"#666"},children:[o.lat.toFixed(2),"°, ",o.lon.toFixed(2),"°"]})]},`${o.lat}-${o.lon}-${A}`)),(0,e.jsx)("button",{onClick:()=>{s(!1),an([]),M("")},style:{width:"100%",padding:"8px",background:"#f0f0f0",border:"1px solid #ccc",borderRadius:"8px",cursor:"pointer",marginTop:"10px",fontSize:"12px"},children:"✕ Закрити"})]})]})}),(0,e.jsx)("div",{style:{marginTop:"250px",zIndex:90},children:(0,e.jsx)(gd,{user:l,isDarkMode:d,isStickyBgMode:t})})]}),qt&&(0,e.jsx)(hh,{$isClosing:ye,onClick:nn,children:(0,e.jsxs)(mh,{$isClosing:ye,onClick:o=>o.stopPropagation(),children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px",borderBottom:"1px solid rgba(255, 179, 108, 0.2)"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,e.jsx)("div",{style:{background:"linear-gradient(135deg, rgba(255, 179, 108, 0.25), rgba(255, 140, 43, 0.1))",border:"1px solid rgba(255, 179, 108, 0.4)",borderRadius:"10px",padding:"6px 10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"},children:"✨"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{margin:0,fontSize:"16px",fontWeight:"700",background:"linear-gradient(90deg, #ffb36c 0%, #ffe3b8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"0.4px"},children:"Налаштування фону та вигляду"}),(0,e.jsx)("span",{style:{fontSize:"11px",color:"#8a8d9b"},children:"Персоналізуйте теми, слайд-шоу та візуальні ефекти"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,e.jsx)(Fs,{onClick:Nt,children:"🔄 Скинути"}),(0,e.jsx)(Fs,{$danger:!0,onClick:nn,children:"✖ Закрити"})]})]}),(0,e.jsxs)(wh,{children:[(0,e.jsxs)(Nn,{children:[(0,e.jsx)("label",{children:"🎞️ Режим фону:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"5px",width:"100%"},children:[(0,e.jsxs)("select",{value:m,onChange:o=>{if(v(o.target.value),o.target.value==="random"){const A=fr(Qe);qn(A),on(0),A[0]&&xt(A[0].src)}$t(1)},style:{background:"rgba(10, 14, 26, 0.95)",color:"#fff",fontSize:"12px",fontWeight:"500",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",padding:"4px 6px",flex:1,outline:"none"},children:[(0,e.jsx)("option",{value:"static",children:"Статичний (1 фото)"}),(0,e.jsx)("option",{value:"slideshow-2",children:"Слайд-шоу (2 фото)"}),(0,e.jsx)("option",{value:"slideshow-3",children:"Слайд-шоу (3 фото)"}),(0,e.jsx)("option",{value:"slideshow-4",children:"Слайд-шоу (4 фото)"}),(0,e.jsx)("option",{value:"random",children:"Випадковий (усі фото)"})]}),m==="random"&&(0,e.jsx)(la,{content:"Перемішати та скинути чергу",isDarkMode:d,children:(0,e.jsx)("button",{onClick:()=>{const o=fr(Qe);qn(o),on(0),o[0]&&(xt(o[0].src),$t(1))},"aria-label":"Перемішати та скинути чергу",style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",border:"none",borderRadius:"6px",color:"#000",padding:"2px 8px",cursor:"pointer",fontWeight:"bold",fontSize:"11px",whiteSpace:"nowrap"},children:"🔀"})})]})]}),(0,e.jsxs)(Nn,{children:[(0,e.jsxs)("label",{children:["🌘 Затемнення: ",(j*100).toFixed(0),"%"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:j,onChange:o=>C(parseFloat(o.target.value))})]}),(0,e.jsxs)(Nn,{children:[(0,e.jsxs)("label",{children:["🔍 Наближення: ",re.toFixed(2),"x"]}),(0,e.jsx)("input",{type:"range",min:"1",max:"2",step:"0.01",value:re,onChange:o=>xe(parseFloat(o.target.value))})]}),(0,e.jsxs)(Nn,{children:[(0,e.jsx)("label",{children:"🎭 Ефект фокусу:"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[(0,e.jsx)(Cs,{$active:Se==="smooth",onClick:()=>{ut("smooth"),Te(0)},style:{flex:1,fontSize:"10px",padding:"3px",borderRadius:"6px"},children:"Плавне"}),(0,e.jsx)(Cs,{$active:Se==="pixelated",onClick:()=>ut("pixelated"),style:{flex:1,fontSize:"10px",padding:"3px",borderRadius:"6px"},children:"Піксельне"})]})]}),(0,e.jsxs)(Nn,{children:[(0,e.jsxs)("label",{children:["🔄 Розворот: ",ce,"°"]}),(0,e.jsx)("input",{type:"range",min:"-180",max:"180",step:"1",value:ce,onChange:o=>ee(parseInt(o.target.value))})]}),(0,e.jsxs)(Nn,{children:[(0,e.jsxs)("label",{children:["🌫️ Розмиття: ",X.toFixed(1),"px"]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.5",value:X,onChange:o=>me(parseFloat(o.target.value))})]}),(0,e.jsxs)(Nn,{style:{opacity:Se==="pixelated"?1:.4},children:[(0,e.jsxs)("label",{children:["👾 Пікселізація: ",oe.toFixed(1)]}),(0,e.jsx)("input",{type:"range",min:"0",max:"20",step:"0.2",value:oe,disabled:Se!=="pixelated",onChange:o=>Te(parseFloat(o.target.value))})]})]}),(m==="slideshow-2"||m==="slideshow-3"||m==="slideshow-4"||m==="random")&&(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsx)(pi,{}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px"},children:[(0,e.jsxs)(Nn,{children:[(0,e.jsxs)("label",{children:["⏱️ Інтервал:"," ",J>=60?`${Math.floor(J/60)}хв ${J%60>0?J%60+"с":""}`:`${J}с`]}),(0,e.jsx)("input",{type:"range",min:"4",max:"300",step:"1",value:J,onChange:o=>Q(parseInt(o.target.value))})]}),(0,e.jsxs)(Nn,{children:[(0,e.jsxs)("label",{children:["✨ Перехід: ",he,"с"]}),(0,e.jsx)("input",{type:"range",min:"0.5",max:"1",step:"0.1",value:he,onChange:o=>te(parseFloat(o.target.value))})]}),(0,e.jsxs)(Nn,{children:[(0,e.jsxs)("label",{children:["⚡ Швидкість відео: ",Ze,"x"]}),(0,e.jsx)("input",{type:"range",min:"0.25",max:"2",step:"0.25",value:Ze,onChange:o=>Ue(parseFloat(o.target.value))})]})]})]}),(0,e.jsx)(pi,{}),(0,e.jsx)(Ah,{children:"🎨 Бібліотека зображень"}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[(0,e.jsx)(Th,{placeholder:"🔍 Пошук картин за назвою...",value:E,onChange:o=>{q(o.target.value),qe(300)}}),(0,e.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px",color:"#ffc996",fontWeight:"600"},children:"Категорія:"}),(0,e.jsxs)("select",{value:D,onChange:o=>N(o.target.value),style:{background:"rgba(10, 14, 26, 0.95)",fontSize:"12px",color:"#fff",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",padding:"4px 8px",outline:"none",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"all",children:"Усі зображення"}),(0,e.jsx)("option",{value:"Природа та Стихії",children:"Природа та Стихії"}),(0,e.jsx)("option",{value:"Фентезі та Легенди",children:"Фентезі та Легенди"}),(0,e.jsx)("option",{value:"Темрява та Містика",children:"Темрява та Містика"}),(0,e.jsx)("option",{value:"custom",children:"📁 Ваші завантажені"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[(0,e.jsx)("label",{style:{fontSize:"12px",color:"#ffc996",fontWeight:"600"},children:"Сортувати:"}),(0,e.jsxs)("select",{value:On,onChange:o=>Qt(o.target.value),style:{background:"rgba(10, 14, 26, 0.95)",color:"#fff",border:"1px solid rgba(255, 179, 108, 0.3)",borderRadius:"6px",fontSize:"12px",padding:"4px 8px",outline:"none",cursor:"pointer"},children:[(0,e.jsx)("option",{value:"rating",children:"⭐ За рейтингом"}),(0,e.jsx)("option",{value:"az",children:"🔤 Назва А-Я"}),(0,e.jsx)("option",{value:"za",children:"🔤 Назва Я-А"})]})]})]})]}),(0,e.jsx)(vh,{children:Gn.map((o,A)=>{const U=B[o.src]||0,ae=en.findIndex(Y=>Y.src===o.src);return(0,e.jsxs)(kh,{$active:u===o.src||x===o.src,children:[(0,e.jsxs)(Sh,{children:[(0,e.jsx)(di,{$color:U===2?"gold":U===1?"#ff4d4d":"white",onClick:()=>mn(o.src),children:U===2?"💛":U===1?"❤️":"🤍"}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[o.description&&(0,e.jsx)(la,{content:"Детальний опис картини",isDarkMode:d,children:(0,e.jsx)(di,{$color:"#aef","aria-label":"Детальний опис картини",onClick:Y=>{Y.stopPropagation(),Vt({name:o.name,text:o.description,src:o.src,author:o.author,source:o.source})},children:"❓"})}),(0,e.jsx)(la,{content:"Скачати файл фону",isDarkMode:d,children:(0,e.jsx)(di,{$color:"#ffda79","aria-label":"Скачати фон",onClick:Y=>{Y.stopPropagation(),Ss(o)},children:"📥"})})]})]}),tn(o.src)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(yh,{onClick:Y=>{Y.stopPropagation();const ue=window.prompt("Введіть нову назву для цих шпалер:",o.name);ue&&y(ke=>ke.map(wt=>wt.src===o.src?{...wt,name:ue}:wt))},"aria-label":"Редагувати назву",children:"✎"}),(0,e.jsx)(bh,{onClick:Y=>{Y.stopPropagation(),window.confirm(`Видалити шпалери "${o.name}"?`)&&(y(ue=>ue.filter(ke=>ke.src!==o.src)),H(ue=>{const ke={...ue};return delete ke[o.src],ke}),u===o.src&&g("/assets/fog-Cew27ml4.webp"),x===o.src&&T("/assets/fog-Cew27ml4.webp"))},"aria-label":"Видалити",children:"×"})]}),o.author&&(0,e.jsxs)(hd,{children:[(0,e.jsx)("div",{style:{fontWeight:"bold"},children:o.author}),o.source&&(0,e.jsx)("div",{children:o.source})]}),(0,e.jsxs)(md,{$hasSlots:m==="slideshow-2"||m==="slideshow-3"||m==="slideshow-4",children:[m==="random"&&ae!==-1&&(0,e.jsxs)("span",{style:{color:ae===Ln?"#6cffe4":"#ffb36c",marginRight:"6px",fontWeight:"bold",textShadow:ae===Ln?"0 0 8px #6cffe4":"none"},children:["#",ae+1," ",ae===Ln&&"(Зараз)"]}),o.name]}),Ha(o.src)?(0,e.jsx)(zx,{bg:o,onClick:()=>xt(o.src)}):(0,e.jsx)(jh,{src:o.src,loading:"lazy",onClick:()=>xt(o.src),title:o.name}),m==="slideshow-2"&&(0,e.jsxs)(ci,{children:[(0,e.jsx)(Un,{$active:u===o.src,onClick:()=>xt(o.src,1),children:"Слот 1"}),(0,e.jsx)(Un,{$active:x===o.src,onClick:()=>xt(o.src,2),children:"Слот 2"})]}),m==="slideshow-3"&&(0,e.jsxs)(ci,{children:[(0,e.jsx)(Un,{$active:u===o.src,onClick:()=>xt(o.src,1),children:"Слот 1"}),(0,e.jsx)(Un,{$active:x===o.src,onClick:()=>xt(o.src,2),children:"Слот 2"}),(0,e.jsx)(Un,{$active:k===o.src,onClick:()=>xt(o.src,3),children:"Слот 3"})]}),m==="slideshow-4"&&(0,e.jsxs)(ci,{children:[(0,e.jsx)(Un,{$active:u===o.src,onClick:()=>xt(o.src,1),children:"Слот 1"}),(0,e.jsx)(Un,{$active:x===o.src,onClick:()=>xt(o.src,2),children:"Слот 2"}),(0,e.jsx)(Un,{$active:k===o.src,onClick:()=>xt(o.src,3),children:"Слот 3"}),(0,e.jsx)(Un,{$active:z===o.src,onClick:()=>xt(o.src,4),children:"Слот 4"})]})]},A)})}),Jn.length>ge&&(0,e.jsx)(li,{onClick:()=>qe(o=>o+300),children:"Завантажити ще"}),(0,e.jsx)(pi,{}),(0,e.jsxs)(Ch,{onDragOver:Ca,onDrop:Vn,onClick:()=>Yn.current.click(),children:[(0,e.jsx)("div",{style:{fontSize:"24px"},children:"📤"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{color:"#ffb36c",fontWeight:"bold"},children:"Перетягніть сюди"})," картинку або відео"]}),(0,e.jsx)("span",{style:{fontSize:"11px",color:"#8a8d9b"},children:"або натисніть для вибору файлу з вашого пристрою"}),(0,e.jsx)("input",{type:"file",ref:Yn,hidden:!0,accept:"image/*,video/*",onChange:o=>Zn(o.target.files[0])})]})]})}),Be&&(0,e.jsx)("div",{onClick:()=>Vt(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"5px"},children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{background:"#111",border:"2px solid #ffb36c",borderRadius:"14px",width:"90%",maxWidth:"900px",height:"80vh",maxHeight:"650px",color:"#fff",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 50px rgba(0,0,0,0.9)"},children:[Ha(Be.src)?(0,e.jsx)("video",{src:Be.src,preload:"metadata",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}):(0,e.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${Be.src})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:1}}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",zIndex:2}}),(0,e.jsxs)("div",{style:{position:"relative",zIndex:3,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",padding:"10px",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[(0,e.jsx)("h3",{style:{color:"#ffb36c",margin:0,fontSize:"20px",fontWeight:"bold",textShadow:"0 2px 4px rgba(0,0,0,0.9)"},children:Be.name}),(0,e.jsx)("button",{onClick:()=>Vt(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"5px",width:"30px",height:"30px",color:"#fff",fontSize:"30px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:o=>{o.currentTarget.style.background="rgba(255,0,0,0.7)",o.currentTarget.style.borderColor="red"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(0,0,0,0.6)",o.currentTarget.style.borderColor="rgba(255,255,255,0.3)"},children:"×"})]}),(0,e.jsx)("div",{style:{flex:1,overflowY:"auto",margin:"5px 0",paddingRight:"5px"},children:(0,e.jsx)("p",{style:{lineHeight:1.8,whiteSpace:"pre-wrap",fontSize:"15px",margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.95)",color:"#f5f5f5",borderRadius:"8px",backdropFilter:"blur(2px)"},children:Be.text})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"wrap",gap:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Автор: ",Be.author||"Невідомий"]}),Be.source&&(0,e.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.75)",padding:"8px 12px",borderRadius:"8px",fontSize:"13px",border:"1px solid rgba(255, 179, 108, 0.4)",color:"#ffb36c",fontWeight:"bold",textShadow:"0 1px 2px rgba(0,0,0,0.6)"},children:["Джерело: ",Be.source]})]}),(0,e.jsxs)("button",{onClick:()=>Ss(Be),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"8px",padding:"8px 16px",fontSize:"13px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 8px rgba(255, 179, 108, 0.4)",display:"flex",alignItems:"center",gap:"6px",transition:"transform 0.15s ease"},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.05)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)",children:["📥 Скачати ",Ha(Be.src)?"відео":"картинку"]})]})]})]})}),ie&&(0,e.jsx)(Ls,{onClick:()=>He(null),children:(0,e.jsx)(gh,{src:ie,alt:"Fullscreen"})}),Re&&(0,e.jsx)(Ls,{onClick:()=>Ke(null),children:(0,e.jsxs)("div",{onClick:o=>o.stopPropagation(),style:{position:"relative",width:"90%",maxWidth:"800px",aspectRatio:"16/9",background:"#000",borderRadius:"8px",overflow:"hidden",boxShadow:"0 0 20px rgba(255,255,255,0.2)"},children:[(0,e.jsx)("iframe",{src:Re.includes("embed")?`${Re}?autoplay=1`:`https://www.youtube.com/embed/${xd(Re)}?autoplay=1`,"aria-label":"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}),(0,e.jsx)("button",{onClick:()=>Ke(null),style:{position:"absolute",top:"10px",right:"10px",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:"30px",height:"30px",color:"#fff",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:"×"})]})}),se==="links"&&(0,e.jsxs)(Yx,{$isDarkMode:d,children:[(0,e.jsxs)(Zx,{$isDarkMode:d,children:[(0,e.jsxs)(Xx,{$isDarkMode:d,children:[(0,e.jsxs)(Yr,{children:[(0,e.jsx)(la,{content:"Вибрати режим пошуку",isDarkMode:d,children:(0,e.jsx)(Zr,{onClick:()=>G(o=>!o),"aria-label":"Вибрати режим пошуку",style:{background:"#ffb36c",color:"#000",borderRadius:"50%",width:"34px",height:"34px"},children:(0,e.jsx)(Ja,{})})}),Bt&&(0,e.jsxs)(Xr,{$isDarkMode:d,children:[(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="city",onClick:()=>{Tt("city"),G(!1),cn(""),Gt(""),We([]),w(!1)},children:[(0,e.jsx)(Xa,{})," За назвою міста"]}),(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="coordinates",onClick:()=>{Tt("coordinates"),G(!1),pe(""),We([]),w(!1)},children:[(0,e.jsx)(Ga,{})," Координати"]}),(0,e.jsxs)(Kn,{$isDarkMode:d,$active:se==="links",onClick:()=>{Tt("links"),G(!1),pe(""),We([]),w(!1)},children:[(0,e.jsx)(Ja,{})," Посилання"]})]})]}),(0,e.jsx)(Qx,{$isDarkMode:d,value:ne,onChange:o=>pe(o.target.value),placeholder:"Пошук сайтів, ігор, статей, авторів...",type:"text",autoFocus:!0,autoComplete:"off"}),ne&&(0,e.jsx)(Gx,{onClick:()=>pe(""),"aria-label":"Очистити",type:"button",style:{position:"static",transform:"none",borderRadius:"50%"},children:"×"}),(0,e.jsx)(Qr,{onClick:()=>{ne.trim()&&window.open("https://www.google.com/search?q="+encodeURIComponent(ne),"_blank")},style:{width:"36px",height:"36px",borderRadius:"50%",fontSize:"16px"},children:"⌕"})]}),(0,e.jsx)(eh,{$isDarkMode:d,children:"Натисніть на картку сайту, щоб відкрити повний опис та галерею • Esc для виходу"})]}),(0,e.jsxs)(th,{children:[ne.trim()===""&&Le.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Rs,{$isDarkMode:d,children:"📌 Закріплені сайти"}),ts.filter(o=>Le.includes(o.id)).map(o=>{const A=gr(o),U=Gr(o);return(0,e.jsxs)(ei,{$isDarkMode:d,onClick:()=>Jt(o),children:[(0,e.jsx)(ti,{$bg:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",children:(0,e.jsx)(Ms,{link:o})}),(0,e.jsxs)(ai,{children:[(0,e.jsx)(ri,{$isDarkMode:d,children:o.title}),A&&(0,e.jsxs)(ii,{$isDarkMode:d,children:[" ",A]}),o.tags&&(0,e.jsx)(zs,{children:o.tags.map(ae=>(0,e.jsxs)($s,{$isDarkMode:d,children:["#",ae]},ae))})]}),(0,e.jsxs)(oi,{onClick:ae=>ae.stopPropagation(),children:[U.map(ae=>{const Y=Jr[ae.type];return Y?(0,e.jsxs)(si,{$color:Y.color,onClick:()=>window.open(ae.url,"_blank"),children:[Y.emoji," ",Y.label]},ae.type):null}),(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"})]})]},`pinned-${o.id}`)}),(0,e.jsx)(ih,{$isDarkMode:d}),(0,e.jsx)(Rs,{$isDarkMode:d,children:"🌐 Усі сайти та ресурси"})]}),ts.filter(o=>{if(ne.trim()==="")return!0;const A=ne.toLowerCase(),U=o.title.toLowerCase().includes(A)||o.snippet&&o.snippet.toLowerCase().includes(A),ae=gr(o)?.toLowerCase().includes(A),Y=o.tags&&o.tags.some(ue=>ue.toLowerCase().includes(A));return U||ae||Y}).map(o=>{const A=gr(o),U=Gr(o),ae=Le.includes(o.id);return(0,e.jsxs)(ei,{$isDarkMode:d,onClick:()=>Jt(o),children:[(0,e.jsx)(ti,{children:(0,e.jsx)(Ms,{link:o})}),(0,e.jsxs)(ai,{children:[(0,e.jsx)(ri,{$isDarkMode:d,children:o.title}),A&&(0,e.jsx)(ii,{$isDarkMode:d,children:A}),o.tags&&(0,e.jsx)(zs,{children:o.tags.map(Y=>(0,e.jsxs)($s,{$isDarkMode:d,children:["#",Y]},Y))})]}),(0,e.jsxs)(oi,{onClick:Y=>Y.stopPropagation(),children:[U.map(Y=>{const ue=Jr[Y.type];return ue?(0,e.jsxs)(si,{$color:ue.color,onClick:()=>window.open(Y.url,"_blank"),children:[ue.emoji," ",ue.label]},Y.type):null}),(0,e.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#ffb36c",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:o.buttonText||"Відкрити"}),(0,e.jsx)("button",{onClick:()=>Fe(o.id),title:ae?"Відкріпити":"Закріпити",style:{background:"transparent",border:"none",cursor:"pointer",fontSize:"16px",color:ae?"#ffb36c":d?"#666":"#aaa"},children:ae?(0,e.jsx)(Rc,{}):(0,e.jsx)(cc,{})})]})]})]},o.id)}),Xe.map(o=>(0,e.jsxs)(ei,{$isDarkMode:d,onClick:()=>Jt({title:o.title,url:o.url,snippet:o.snippet,buttonText:"Читати у Вікіпедії",author:"Вікіпедія (Українська)",tags:["вікіпедія","енциклопедія"]}),children:[(0,e.jsx)(ti,{$bg:"linear-gradient(135deg, #00bfff, #0077ff)",children:"W"}),(0,e.jsxs)(ai,{children:[(0,e.jsx)(ri,{$isDarkMode:d,children:o.title}),(0,e.jsx)(ii,{$isDarkMode:d,children:"🌐 Вікіпедія"})]}),(0,e.jsx)(oi,{onClick:A=>A.stopPropagation(),children:(0,e.jsx)("button",{onClick:()=>window.open(o.url,"_blank"),style:{padding:"4px 10px",background:"#00bfff",border:"none",borderRadius:"20px",fontWeight:"bold",color:"#000",fontSize:"11px",cursor:"pointer"},children:"Вікіпедія"})})]},o.id)),Kt&&(0,e.jsx)("div",{style:{padding:"16px",textAlign:"center",color:d?"#aaa":"#555"},children:"⏳ Завантажую результати з Вікіпедії..."})]})]}),$e&&(()=>{const o=Ax($e),A=gr($e);return(0,e.jsx)(oh,{onClick:()=>Jt(null),children:(0,e.jsxs)(sh,{$bgImage:o,$bg:$e.bg,onClick:U=>U.stopPropagation(),children:[(0,e.jsxs)(lh,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{style:{color:"#ffb36c",margin:0,fontSize:"22px",fontWeight:"bold",textShadow:"0 2px 6px rgba(0,0,0,0.9)"},children:$e.title}),A&&(0,e.jsxs)("div",{style:{color:"#f9f6f6",fontSize:"13px",marginTop:"4px"},children:["Автор / Постачальник: ",(0,e.jsx)("b",{children:A})]})]}),(0,e.jsx)("button",{onClick:()=>Jt(null),style:{background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"50%",width:"32px",height:"32px",color:"#fff",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]}),(0,e.jsxs)(dh,{children:[$e.tags&&(0,e.jsx)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:$e.tags.map(U=>(0,e.jsxs)("span",{style:{background:"rgba(255, 179, 108, 0.2)",color:"#ffb36c",border:"1px solid rgba(255, 179, 108, 0.35)",padding:"2px 8px",borderRadius:"12px",fontSize:"12px",fontWeight:"bold"},children:["#",U]},U))}),($e.images&&$e.images.length>0||$e.youtubeTrailer)&&(0,e.jsx)(fh,{images:$e.images||[],youtubeTrailer:$e.youtubeTrailer,setFullscreenImage:He,imageMap:bd,setFullscreenVideo:Ke}),(0,e.jsx)("div",{style:{lineHeight:"1.8",whiteSpace:"pre-wrap",color:"#f0f0f0",fontSize:"14px",textShadow:"0 1px 4px rgba(0,0,0,0.9)",background:"rgba(0, 0, 0, 0.35)",padding:"14px",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.07)"},children:$e.snippet})]}),(0,e.jsxs)(ch,{children:[Gr($e).map(U=>{const ae=Jr[U.type];return ae?(0,e.jsxs)(si,{$color:ae.color,onClick:()=>window.open(U.url,"_blank"),style:{padding:"8px 14px",fontSize:"13px"},children:[ae.emoji," Відкрити в ",ae.label]},U.type):null}),(0,e.jsx)("button",{onClick:()=>window.open($e.url,"_blank"),style:{background:"linear-gradient(135deg, #ffb36c 0%, #ff8c2b 100%)",color:"#000",border:"none",borderRadius:"20px",padding:"8px 20px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",marginLeft:"auto"},children:$e.buttonText||"Перейти на сайт"})]})]})})})()]})},mr=t=>{if(typeof t=="string")return t;if(t&&typeof t=="object"){const n=t.type?.name||"";if(n==="FaSun")return"☀️";if(n==="BsMoonStarsFill")return"🌙";if(n==="FaCloudMoon"||n==="FaSmog")return"☁️";if(n==="IoRainy"||n==="LiaCloudSunRainSolid"||n==="FaCloudMoonRain"||n==="LiaCloudMoonRainSolid")return"🌧️";if(n==="GiSnowing")return"❄️";if(n==="IoThunderstorm")return"⛈️";if(t.props?.children){const a=t.props.children;if(typeof a=="string")return a;if(Array.isArray(a))return a.filter(Boolean).map(String).join("")}}return"☁️"},gi=t=>Array.isArray(t)?t.map(n=>{const a={...n},c=l=>{if(Array.isArray(l))return l.map(d=>c(d));if(l&&typeof l=="object"){if(l.$$typeof&&typeof l.$$typeof=="symbol")return mr(l);const d={};return Object.entries(l).forEach(([h,u])=>{d[h]=c(u)}),d}return l};return Object.entries(a).forEach(([l,d])=>{(l==="current"||l==="hourly"||l==="daily16"||l==="seasonal")&&(a[l]=c(d))}),a.current&&(a.current.iconSymbol=mr(a.current.iconSymbol??a.current.iconPlaceholder),a.current.iconPlaceholder=a.current.iconPlaceholder??a.current.iconSymbol??"☁️"),Array.isArray(a.hourly)&&(a.hourly=a.hourly.map(l=>({...l,iconSymbol:mr(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(a.daily16)&&(a.daily16=a.daily16.map(l=>({...l,iconSymbol:mr(l.iconSymbol??l.iconPlaceholder),iconPlaceholder:l.iconPlaceholder??l.iconSymbol??"☁️"}))),Array.isArray(a.seasonal)&&(a.seasonal=a.seasonal.map(l=>({...l}))),a}):[],Ih=le`
  from { opacity: 0; }
  to { opacity: 1; }
`,Dh=le`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`,Mh=i.div`
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
  animation: ${Ih} 0.2s ease-out;
`,zh=i.div`
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
  animation: ${Dh} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`,$h=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`,Rh=i.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Lh=i.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`,Fh=i.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`,Eh=i.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ph=i.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`,Es=i.div`
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
`,Nh=i.div`
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
`,Oh=i.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`,xi=i.input`
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
`,Ps=i.input`
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
`,Vh=i.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`,yd=i.button`
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
`,Bh=i(yd)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`,Hh=i(yd)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,Ns=Object.values({color:{label:"Колір тексту",cssProp:"color",type:"color",desc:"Змінює колір шрифту елемента"},backgroundColor:{label:"Колір фону",cssProp:"backgroundColor",type:"color",desc:"Змінює фоновий колір елемента"},border:{label:"Рамка (бордюр)",cssProp:"border",type:"border",desc:"Налаштування межі елемента"},borderRadius:{label:"Заокруглення кутів",cssProp:"borderRadius",type:"text",placeholder:"напр., 8px або 50%",desc:"Радіус заокруглення рамки"},boxShadow:{label:"Тінь елемента",cssProp:"boxShadow",type:"text",placeholder:"напр., 0 4px 10px rgba(0,0,0,0.3)",desc:"Додає ефект тіні навколо елемента"},textShadow:{label:"Тінь тексту",cssProp:"textShadow",type:"text",placeholder:"напр., 1px 1px 2px #000",desc:"Ефект тіні для тексту"},backdropFilter:{label:"Розмиття фону",cssProp:"backdropFilter",type:"text",placeholder:"напр., blur(10px)",desc:"Ефекти для фону (скляний ефект)"},filter:{label:"Фільтри",cssProp:"filter",type:"text",placeholder:"напр., grayscale(50%)",desc:"Ефекти зображення/кольору"},outline:{label:"Контур",cssProp:"outline",type:"text",placeholder:"напр., 2px solid red",desc:"Зовнішня рамка елемента"},textDecoration:{label:"Декорування тексту",cssProp:"textDecoration",type:"text",placeholder:"напр., underline або none",desc:"Підкреслення, закреслення тощо"},cursor:{label:"Курсор миші",cssProp:"cursor",type:"cursor",desc:"Вигляд курсора при наведенні"}}),Os=t=>{if(!t||t==="transparent"||t==="rgba(0, 0, 0, 0)")return"#000000";if(t.startsWith("#"))return t;const n=t.match(/\d+/g);return!n||n.length<3?"#000000":"#"+n.slice(0,3).map(a=>parseInt(a).toString(16).padStart(2,"0")).join("")},Kh=t=>{if(!t||t==="none")return{width:"0px",style:"none",color:"#000000"};const n=t.split(/\s+/);let a="1px",c="solid",l="#000000";return n.forEach(d=>{/^\d+(px|em|rem|%|pt)$/.test(d)||/^\d+$/.test(d)?a=d.includes("px")||d.includes("em")||d.includes("rem")||d.includes("%")||d.includes("pt")?d:d+"px":["solid","double","dashed","dotted","groove","ridge","inset","outset","none"].includes(d)?c=d:(d.startsWith("#")||d.startsWith("rgb")||d.startsWith("hsl")||/^[a-zA-Z]+$/.test(d))&&(l=d)}),{width:a,style:c,color:l}},yr=(t,n,a)=>n==="none"||t==="0px"?"none":`${t} ${n} ${a}`,Uh=({targetElement:t,onClose:n,isStickyBgMode:a})=>{const{applyStyle:c,getOverridesForElement:l,isDarkMode:d}=Ei(),[h,u]=(0,r.useState)(d?"dark":"light"),[g,x]=(0,r.useState)("default"),T=`${h}_${g}`,k=t?.tagName?.toLowerCase()||"?",P=t?tu(t):"",[z,F]=(0,r.useState)({});(0,r.useEffect)(()=>{if(P){const C=l(P);F(JSON.parse(JSON.stringify(C)))}},[P,l]);const I=(C,B)=>{F(H=>({...H,[T]:{...H[T]||{},[C]:B}}))},y=()=>{const C=l(P);["light_default","light_hover","dark_default","dark_hover"].forEach(B=>{const H=z[B]||{},J=C[B]||{};Ns.forEach(({cssProp:Q})=>{H[Q]!==J[Q]&&(H[Q]?c(P,k,Q,J[Q],H[Q],B):J[Q]&&c(P,k,Q,J[Q],"",B))})}),n()},m=()=>{n(),setTimeout(()=>{k==="input"||k==="textarea"||k==="select"?t.focus():t.click()},10)};if(!t)return null;const v=z[T]||{};let j="";if(z){const C=P.includes(" > ")||P.includes("#")||P.includes(":")?P:`[data-decorator-id="${P}"]`;z.light_default&&(j+=`body:not(.decorator-dark-mode) ${C} { `,Object.entries(z.light_default).forEach(([B,H])=>{j+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),j+=`}
`),z.light_hover&&(j+=`body:not(.decorator-dark-mode) ${C}:hover { `,Object.entries(z.light_hover).forEach(([B,H])=>{j+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),j+=`}
`),z.dark_default&&(j+=`body.decorator-dark-mode ${C} { `,Object.entries(z.dark_default).forEach(([B,H])=>{j+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),j+=`}
`),z.dark_hover&&(j+=`body.decorator-dark-mode ${C}:hover { `,Object.entries(z.dark_hover).forEach(([B,H])=>{j+=`${B.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${H} !important; `}),j+=`}
`)}return(0,e.jsxs)(Mh,{onClick:C=>{C.target===C.currentTarget&&n()},"data-decorator-ignore":"true",children:[(0,e.jsx)("style",{children:j}),(0,e.jsxs)(zh,{"data-decorator-ignore":"true",onClick:C=>C.stopPropagation(),$isStickyBgMode:a,children:[(0,e.jsxs)($h,{children:[(0,e.jsxs)(Rh,{children:["🎨 Декоратор ",(0,e.jsxs)(Lh,{children:["<",k,">"]})]}),(0,e.jsx)(Fh,{onClick:n,"data-decorator-ignore":"true",children:"×"})]}),(0,e.jsxs)(Eh,{children:[(0,e.jsxs)(Ph,{children:[(0,e.jsxs)(Es,{children:[(0,e.jsx)(br,{$active:h==="light",onClick:()=>u("light"),children:"🌞 Денна"}),(0,e.jsx)(br,{$active:h==="dark",onClick:()=>u("dark"),children:"🌙 Темна"})]}),(0,e.jsxs)(Es,{children:[(0,e.jsx)(br,{$active:g==="default",onClick:()=>x("default"),children:"Стандарт"}),(0,e.jsx)(br,{$active:g==="hover",onClick:()=>x("hover"),children:":hover"})]})]}),Ns.map(({cssProp:C,label:B,type:H,placeholder:J,desc:Q})=>{const he=v[C]||"";return(0,e.jsx)(Nh,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"5px"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)(Oh,{children:B}),(0,e.jsx)("span",{style:{fontSize:"10px",color:"#858da3"},children:Q})]}),H==="color"&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,e.jsx)(Ps,{type:"color",value:Os(he),onChange:te=>I(C,te.target.value),"data-decorator-ignore":"true"}),(0,e.jsx)(xi,{value:he,onChange:te=>I(C,te.target.value),placeholder:"напр., #ffb36c або transparent","data-decorator-ignore":"true"})]}),H==="cursor"&&(0,e.jsxs)("select",{value:he,onChange:te=>I(C,te.target.value),"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 10px",borderRadius:"8px",fontSize:"12px",outline:"none",width:"100%"},children:[(0,e.jsx)("option",{value:"",children:"успадковується (default)"}),(0,e.jsx)("option",{value:"default",children:"стрілка (default)"}),(0,e.jsx)("option",{value:"pointer",children:"вказівник / посилання (pointer)"}),(0,e.jsx)("option",{value:"grab",children:"захоплення / рука відкрито (grab)"}),(0,e.jsx)("option",{value:"grabbing",children:"рука стиснута (grabbing)"}),(0,e.jsx)("option",{value:"zoom-in",children:"збільшення (zoom-in)"}),(0,e.jsx)("option",{value:"zoom-out",children:"зменшення (zoom-out)"}),(0,e.jsx)("option",{value:"text",children:"виділення тексту (text)"}),(0,e.jsx)("option",{value:"not-allowed",children:"заборонено (not-allowed)"}),(0,e.jsx)("option",{value:"help",children:"довідка (help)"}),(0,e.jsx)("option",{value:"wait",children:"очікування (wait)"}),(0,e.jsx)("option",{value:"move",children:"переміщення (move)"})]}),H==="border"&&(()=>{const te=Kh(he);return(0,e.jsxs)("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsxs)("select",{value:te.width,onChange:D=>{const N=yr(D.target.value,te.style,te.color);I(C,N)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:1},children:[(0,e.jsx)("option",{value:"0px",children:"0px"}),(0,e.jsx)("option",{value:"1px",children:"1px"}),(0,e.jsx)("option",{value:"2px",children:"2px"}),(0,e.jsx)("option",{value:"3px",children:"3px"}),(0,e.jsx)("option",{value:"4px",children:"4px"}),(0,e.jsx)("option",{value:"5px",children:"5px"}),(0,e.jsx)("option",{value:"8px",children:"8px"}),(0,e.jsx)("option",{value:"10px",children:"10px"})]}),(0,e.jsxs)("select",{value:te.style,onChange:D=>{const N=yr(te.width,D.target.value,te.color);I(C,N)},"data-decorator-ignore":"true",style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 179, 108, 0.3)",color:"#cdd6f4",padding:"7px 8px",borderRadius:"8px",fontSize:"12px",outline:"none",flex:2},children:[(0,e.jsx)("option",{value:"none",children:"немає (none)"}),(0,e.jsx)("option",{value:"solid",children:"суцільна (solid)"}),(0,e.jsx)("option",{value:"double",children:"подвійна (double)"}),(0,e.jsx)("option",{value:"dashed",children:"штрихова (dashed)"}),(0,e.jsx)("option",{value:"dotted",children:"пунктирна (dotted)"}),(0,e.jsx)("option",{value:"groove",children:"3D жолоб (groove)"}),(0,e.jsx)("option",{value:"ridge",children:"3D гребінь (ridge)"}),(0,e.jsx)("option",{value:"inset",children:"3D втиснута (inset)"}),(0,e.jsx)("option",{value:"outset",children:"3D витиснута (outset)"})]}),(0,e.jsx)(Ps,{type:"color",value:Os(te.color),onChange:D=>{const N=yr(te.width,te.style,D.target.value);I(C,N)},"data-decorator-ignore":"true"}),(0,e.jsx)(xi,{value:te.color,onChange:D=>{const N=yr(te.width,te.style,D.target.value);I(C,N)},placeholder:"#ffb36c","data-decorator-ignore":"true",style:{flex:2,minWidth:"70px"}})]})})(),H==="text"&&(0,e.jsx)(xi,{value:he,onChange:te=>I(C,te.target.value),placeholder:J||"успадковується","data-decorator-ignore":"true"})]})},C)})]}),(0,e.jsxs)(Vh,{children:[(0,e.jsx)(Hh,{onClick:m,"data-decorator-ignore":"true",children:"▶ Виконати дію"}),(0,e.jsx)(Bh,{onClick:y,"data-decorator-ignore":"true",children:"✓ Застосувати"})]})]})]})},hi={outline:"2px dashed #ffb36c",outlineOffset:"2px",cursor:"crosshair"},mi=t=>{if(!t)return!0;let n=t;for(;n&&n!==document.body;){if(n.getAttribute?.("data-decorator-ignore")==="true"||n.tagName==="HEADER"||n.id==="decorator-overlay")return!0;n=n.parentElement}return!1},Wh=({isStickyBgMode:t})=>{const{isDecoratorMode:n}=Ei(),[a,c]=(0,r.useState)(null),[l,d]=(0,r.useState)(null),h=(0,r.useCallback)(x=>{!n||mi(x.target)||(a&&a!==x.target&&(a.style.outline="",a.style.outlineOffset="",a.style.cursor=""),x.target.style.outline=hi.outline,x.target.style.outlineOffset=hi.outlineOffset,x.target.style.cursor=hi.cursor,c(x.target))},[n,a]),u=(0,r.useCallback)(x=>{!n||mi(x.target)||(x.target.style.outline="",x.target.style.outlineOffset="",x.target.style.cursor="",a===x.target&&c(null))},[n,a]),g=(0,r.useCallback)(x=>{n&&x.isTrusted&&(mi(x.target)||(x.preventDefault(),x.stopPropagation(),x.target&&(x.target.style.outline="",x.target.style.outlineOffset="",x.target.style.cursor=""),d(x.target)))},[n]);return(0,r.useEffect)(()=>{if(!n){a&&(a.style.outline="",a.style.outlineOffset="",a.style.cursor="",c(null));return}return document.addEventListener("mouseover",h,!0),document.addEventListener("mouseout",u,!0),document.addEventListener("click",g,!0),()=>{document.removeEventListener("mouseover",h,!0),document.removeEventListener("mouseout",u,!0),document.removeEventListener("click",g,!0)}},[n,h,u,g,a]),(0,r.useEffect)(()=>(n?document.body.style.cursor="crosshair":document.body.style.cursor="",()=>{document.body.style.cursor=""}),[n]),!n&&!l?null:(0,e.jsx)(e.Fragment,{children:l&&(0,e.jsx)(Uh,{targetElement:l,onClose:()=>d(null),isStickyBgMode:t})})},_h=(t="",n="")=>{try{const a=new URLSearchParams(t||window.location.search);let c=a.get("q")||a.get("search")||a.get("city")||a.get("query")||a.get("pohoda")||a.get("s");if(!c&&n){const g=n.indexOf("?");if(g!==-1){const x=new URLSearchParams(n.substring(g));c=x.get("q")||x.get("search")||x.get("city")||x.get("query")||x.get("pohoda")||x.get("s")}}if(!c)return{isSearchEntry:!1,query:"",cityData:null};const l=decodeURIComponent(c).trim();if(!l)return{isSearchEntry:!1,query:"",cityData:null};const d=ld(l);if(d)return{isSearchEntry:!0,query:l,cityName:d.name,cityData:{id:`search-${d.name.toLowerCase()}`,name:d.name,fullName:d.fullName,lat:d.lat,lon:d.lon}};const h=l.replace(/^(погода\s+(в|у)?\s*)/i,"").replace(/(\s*погода)$/i,"").trim(),u=h.charAt(0).toUpperCase()+h.slice(1);return{isSearchEntry:!0,query:l,cityName:u,cityData:{id:`search-${u.toLowerCase()}`,name:u,fullName:`${u} (UA)`,lat:null,lon:null}}}catch(a){return console.error("Помилка аналізу пошукового запиту:",a),{isSearchEntry:!1,query:"",cityData:null}}},qh=le`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Jh=i.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.17);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`,Gh=i.div`
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 24px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rd}) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;
  animation: ${qh} 0.3s ease-out;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    max-width: 580px;
    padding: 40px 35px;
    border-radius: 16px;
    border-width: 3px;
  }
`,Yh=i.h2`
  margin-top: 0;
  font-size: 22px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 18px;
  }
`,Zh=i.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 30px;
  }
`,Xh=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`,Vs=i.button`
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
`,Qh=i.div`
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
`,em=i.button`
  margin-top: 10px;
  background: #ffb36c;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`,tm=i.button`
  margin-top: 10px;
  background: transparent;
  color: #999;
  border: 1px solid #555;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  &:hover { color: #fff; border-color: #fff; }
`,nm=i.div`
  position: fixed;
  border: 3px dashed #ffb36c;
  border-radius: 6px;
  pointer-events: none;
  z-index: 10001;
  transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.65);
`,am=({user:t})=>{const{isActive:n,currentStep:a,showInitialModal:c,startTutorial:l,skipTutorialWeek:d,refs:h,nextStep:u,jumpToStep:g,closeTutorial:x}=Wa(),[T,k]=(0,r.useState)({}),[P,z]=(0,r.useState)({display:"none"}),[F,I]=(0,r.useState)(!0),[y,m]=(0,r.useState)(!1),v=(0,r.useRef)(null),j=(0,r.useRef)(null),C=(0,r.useCallback)(D=>{if(!D)return;const N=D.getBoundingClientRect(),re=Math.max(2,N.top-5),xe=Math.max(2,N.left-5),ce=Math.min(N.width+10,window.innerWidth-xe-2),ee=Math.min(N.height+10,window.innerHeight-re-2);z({top:re,left:xe,width:ce,height:ee});const X=300,me=220;let oe=N.bottom+15,Te=N.left;oe+me>window.innerHeight&&(oe=N.top-me-10),oe<5&&(oe=5),Te+X>window.innerWidth&&(Te=window.innerWidth-X-10),Te<5&&(Te=5),k({top:oe,left:Te})},[]);(0,r.useEffect)(()=>{if(!n)return;const D=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=D}},[n]),(0,r.useEffect)(()=>{if(!n)return;const D=B.find(re=>re.step===a);if(!D){x();return}I(!0),m(!1),D.onEnter&&D.onEnter(),D.autoAction&&D.autoAction();const N=D.targetName?h.current[D.targetName]:null;if(j.current=N,N){N.scrollIntoView({behavior:"smooth",block:"center"});const re=setTimeout(()=>C(N),500),xe=()=>C(N);return window.addEventListener("resize",xe),()=>{clearTimeout(re),window.removeEventListener("resize",xe)}}else z({display:"none"}),k({top:"50%",left:"50%",transform:"translate(-50%, -50%)"})},[a,n]),(0,r.useEffect)(()=>{if(!n||a!==1)return;const D=N=>{N.detail&&N.detail.value&&N.detail.value.trim().length>0?(I(!1),clearTimeout(v.current),v.current=setTimeout(()=>I(!0),5e3)):(clearTimeout(v.current),I(!0))};return window.addEventListener("domino-hero-input-change",D),()=>{window.removeEventListener("domino-hero-input-change",D),clearTimeout(v.current)}},[n,a]),(0,r.useEffect)(()=>{if(!n)return;const D=()=>{a===1&&u()};return window.addEventListener("domino-next-step-auto",D),()=>window.removeEventListener("domino-next-step-auto",D)},[n,a,u]),(0,r.useEffect)(()=>{if(!n)return;const D=()=>{a===3&&u()};return window.addEventListener("domino-weather-gear-clicked",D),()=>window.removeEventListener("domino-weather-gear-clicked",D)},[n,a,u]);const B=[{step:1,targetName:"heroInput",text:"Привіт! Давай дізнаємось погоду: введи назву свого міста та обери потрібну точку у випадаючому списку."},{step:2,targetName:null,text:"Чудово! А тепер давай спустимось нижче, щоб подивитися прогноз.",autoAction:()=>{setTimeout(()=>{document.body.style.overflow="",window.scrollTo({top:window.innerHeight,behavior:"smooth"}),setTimeout(()=>{document.body.style.overflow="hidden",u()},1500)},2e3)},noSkip:!0},{step:3,targetName:"weatherGear",text:"У цій картці показано детальний прогноз. Натисни на іконку шестерні для налаштувань."},{step:4,targetName:"weatherModal",text:`Тут налаштовуються деталі прогнозу, важливі дати, фони та порядок карток.

• Ліміт: до 8 карток одночасно (до 1000 створень на добу).`},{step:5,targetName:null,text:"Нижче ти знайдеш кліматичну карту Windy.com, чат із Gemini та інструменти для роботи із зображеннями (Стихії, Pixabay...).",onEnter:()=>{window.dispatchEvent(new CustomEvent("domino-close-weather-settings"))}},{step:6,targetName:"newsHeader",text:"Додавай свої джерела новин! Ми автоматично блокуємо казино, 18+, політику та кримінал. Згодом тут можна підключати YouTube, Telegram та інші канали."},{step:7,targetName:"headerBgTheme",text:"Персоналізуй сайт: обирай тематичні фони (Динофроз, природа, кіно) та налаштовуй загальну тему сайту."},{step:8,targetName:null,text:t?"Дякуємо, що ти з нами! Насолоджуйся сайтом.":"Увійди, щоб отримати повний доступ. І пам’ятай: не жартуй з Ніцероном! :)",isLast:!0}],H=(0,r.useCallback)(()=>{if(y)return;m(!0);const D=B.find(N=>N.step===a);if(D){if(D.isLast){x();return}if(a===1){const N=h.current.heroInput;if(!(N&&N.value&&N.value.trim().length>0))window.dispatchEvent(new CustomEvent("domino-auto-input-konotop")),setTimeout(()=>u(),2500);else{setTimeout(()=>m(!1),500);return}}else a===3&&window.dispatchEvent(new CustomEvent("domino-open-weather-settings")),u();setTimeout(()=>m(!1),2e3)}},[y,a,B,x,u,h]),J=(0,r.useCallback)(()=>{y||(window.dispatchEvent(new CustomEvent("domino-close-weather-settings")),g(8))},[y,g]);if(c)return(0,e.jsx)(Jh,{children:(0,e.jsxs)(Gh,{children:[(0,e.jsx)(Yh,{children:"Отримати навчання?"}),(0,e.jsx)(Zh,{children:"Доміно пропонує вам безкоштовну допомогу, для швидшого опанування сайту"}),(0,e.jsxs)(Xh,{children:[(0,e.jsx)(Vs,{onClick:l,children:"Так, і не нагадувати про це 30 днів"}),(0,e.jsx)(Vs,{onClick:d,children:"Ні, і не нагадувати тиждень!"})]})]})});if(!n)return null;const Q=B.find(D=>D.step===a);if(!Q)return null;const he=P.display!=="none",te=!Q.isLast&&!Q.noSkip&&a<=6;return(0,e.jsxs)(e.Fragment,{children:[he&&(0,e.jsx)(nm,{style:P}),(0,e.jsxs)(Qh,{style:{...T,opacity:F?1:0,pointerEvents:F?"auto":"none",transition:"opacity 0.3s ease"},children:[(0,e.jsxs)("div",{style:{fontSize:"12px",color:"#ccc",marginBottom:"5px"},children:["Крок ",a,"/8 (Доміно)"]}),(0,e.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:Q.text}),!Q.noSkip&&(0,e.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"10px",flexWrap:"wrap",alignItems:"center"},children:[(0,e.jsx)(em,{onClick:H,disabled:y,children:Q.isLast?"Завершити":"Пропустити"}),te&&(0,e.jsx)(tm,{onClick:J,title:"Пропустити до кроку 8",children:"До кінця →"})]})]})]})},rm=i.div`
  background-color: ${t=>t.$isDarkMode?"#0c0c0cbf":"#fdff98bb"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#1a1a1a"};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${t=>t.$isDarkMode?"0.5":"0.15"});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
`,im=({content:t,children:n,placement:a="bottom",isDarkMode:c=!0})=>{const[l,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),{refs:u,floatingStyles:g,context:x}=ma({open:l,onOpenChange:d,placement:a,strategy:"fixed",transform:!1,whileElementsMounted:ua,middleware:[ca(8),pa(),va({padding:5}),ka({element:h})]}),{isMounted:T,styles:k}=ga(x,{duration:150,initial:{opacity:0,transform:"scale(0.9)"},open:{opacity:1,transform:"scale(1)"}}),P=fa(x,{move:!1}),z=ha(x),F=ba(x),I=ja(x,{role:"tooltip"}),{getReferenceProps:y,getFloatingProps:m}=wa([P,z,F,I]);if(!t)return n;const v=c?"#111111":"#ffffff";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{ref:u.setReference,...y(),style:{display:"inline-flex"},children:n}),T&&(0,e.jsx)(ya,{children:(0,e.jsxs)(rm,{ref:u.setFloating,$isDarkMode:c,style:{...g,...k},...m(),children:[t,(0,e.jsx)(xa,{ref:h,context:x,fill:v,stroke:"#00acb9",strokeWidth:1})]})})]})},om=(0,r.lazy)(()=>kt(()=>import("./Aihelp-BUdNmg85.js"),__vite__mapDeps([0,1,2]))),sm=(0,r.lazy)(()=>kt(()=>import("./FanArt-DcLbXh_a.js"),__vite__mapDeps([3,1,2]))),lm=(0,r.lazy)(()=>kt(()=>import("./ShopModal-BdTDTsYi.js"),__vite__mapDeps([4,1,2]))),dm=(0,r.lazy)(()=>kt(()=>import("./ClimateMap-CJPB-PGL.js"),__vite__mapDeps([5,1,2]))),cm=(0,r.lazy)(()=>kt(()=>import("./Modal-D8OBmo47.js"),__vite__mapDeps([6,1,2,7]))),pm=(0,r.lazy)(()=>kt(()=>import("./LoginModal-6SQNeaR8.js"),__vite__mapDeps([8,1,2]))),um=(0,r.lazy)(()=>kt(()=>import("./UserSettingsModal-CP2JHJMD.js"),__vite__mapDeps([9,1,2,10,7]))),fm=(0,r.lazy)(()=>kt(()=>import("./WeatherDetailsModal-tQfoa3jp.js"),__vite__mapDeps([11,1,2]))),bi=(0,r.lazy)(()=>kt(()=>Promise.resolve().then(()=>dd),void 0));(0,r.lazy)(()=>kt(()=>import("./OtherOptionsModal-Ccz9tW2D.js"),__vite__mapDeps([12,1,2,10])));var gm=Qd`
  ${t=>t.$locked&&et`
      html,
      body,
      #root,
      .App {
        filter: none !important;
        backdrop-filter: none !important;
      }
    `}
`,xm=le`
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 6px));
  }
`,hm=le`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px rgba(0, 255, 229, 0.4);
  }
  50% {
    opacity: 0.6;
    text-shadow: 0 0 12px rgba(0, 255, 229, 0.9);
  }
`,yi=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"#ffffff"};
  color: ${t=>t.$isDarkMode?"#ffffff":"#000000"};
  transition:
    background-color 0.5s ease,
    backdrop-filter 0.5s ease;
  border-radius: 20px;
  margin: 10px 0;
  display: ${t=>t.$isHidden?"none":"block"};
`,Bs=[Sr,Li,Ri,Fi,Pp];Hc.register(Pc,Vc,Gd,rc,Yd,zd,Nc,Dd);var wi=(t,n=1)=>t===0?n?"☀️ Ясно":"🌙 Ясно":t>=1&&t<=3?n?"🌤️ Мінлива хмарність":"☁️ Мінлива хмарність":t>=45&&t<=48?"☁️ Туман":t>=51&&t<=55?"🌧️ Мряка":t>=56&&t<=57?"🌧️ Мряка з снігом":t>=61&&t<=65?"🌧️ Дощ":t>=66&&t<=67?"🌧️ Дощ з снігом":t>=71&&t<=75?"❄️ Снігопад":t===77?"❄️ Сніжна крупа":t>=80&&t<=82?"🌦️ Зливовий дощ":t>=85&&t<=86?"❄️ Зливовий сніг":t>=95&&t<=99?"⛈️ Гроза":"☁️ Хмарно",vi=(t,n=1)=>t===0?n?"Сонячно":"Місячно":t>=1&&t<=3?n?"Мінлива хмарність":"Нічна мінлива хмарність":t>=45&&t<=48?"Туманно":t>=51&&t<=55?"Мряка":t>=56&&t<=57?"Мряка з снігом":t>=61&&t<=65?"Дощ":t>=66&&t<=67?"Дощ з снігом":t>=71&&t<=75?"Сніг":t===77?"Сніжна крупа":t>=80&&t<=82?"Зливовий дощ":t>=85&&t<=86?"Зливовий сніг":t>=95&&t<=99?"Гроза":"Хмарно",ki=(t,n=1)=>t===0?n?(0,e.jsx)(Sn,{}):(0,e.jsx)(Mn,{}):t>=1&&t<=3?n?"🌤️":(0,e.jsx)(Md,{}):t>=45&&t<=48?(0,e.jsx)(Do,{}):t>=51&&t<=55||t>=56&&t<=57?"🌧️":t>=61&&t<=65?n?(0,e.jsx)(Er,{}):(0,e.jsx)(jo,{}):t>=66&&t<=67?n?(0,e.jsx)(Er,{}):(0,e.jsx)(jo,{}):t>=71&&t<=75?(0,e.jsx)($r,{}):t===77?(0,e.jsx)($r,{}):t>=80&&t<=82?n?(0,e.jsx)(Er,{}):(0,e.jsx)(Td,{}):t>=85&&t<=86?(0,e.jsx)($r,{}):t>=95&&t<=99?(0,e.jsx)(Fd,{}):(0,e.jsx)(Do,{}),mm=i.div`
  background-color: ${t=>t.$isStickyBgMode?"transparent":t.$isDarkMode?"#000000":"transparent"};
  color: ${t=>t.$isDarkMode?"#ffffff":"inherit"};
  min-height: 100vh;
  transition:
    background-color 0.5s ease,
    background 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
`,bm=i.div`
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
`,ym=i.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  z-index: 9000;
  margin-top: -45px;
`,Hs=i.button`
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
  animation: ${xm} 3s ease-in-out infinite;

  /* Пульсація для іконки/тексту всередині кнопки */
  & > * {
    display: inline-block;
    animation: ${hm} 2.5s ease-in-out infinite;
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
`,wm=i.button`
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
`,vm=i.div`
  position: relative;
  z-index: 1800;
  isolation: isolate;
`,km=({children:t})=>{const n=(0,r.useRef)(null),[a,c]=(0,r.useState)(0),l=r.Children.toArray(t).length,d=(0,r.useCallback)(u=>{const g=n.current;if(!g)return;const x=g.children[u];x&&g.scrollTo({left:x.offsetLeft,behavior:"smooth"})},[]),h=(0,r.useCallback)(u=>{if(l<2)return;const g=(a+u+l)%l;c(g),d(g)},[a,l,d]);return(0,r.useEffect)(()=>{a>=l&&l>0&&c(l-1)},[l,a]),(0,r.useEffect)(()=>{const u=n.current;if(!u)return;let g;const x=()=>{clearTimeout(g),g=setTimeout(()=>{const T=Array.from(u.children);if(T.length===0)return;const k=T.reduce((P,z,F)=>{const I=Math.abs(T[P].offsetLeft-u.scrollLeft);return Math.abs(z.offsetLeft-u.scrollLeft)<I?F:P},0);c(k)},50)};return u.addEventListener("scroll",x,{passive:!0}),()=>{clearTimeout(g),u.removeEventListener("scroll",x)}},[l]),(0,e.jsxs)(vm,{children:[(0,e.jsx)(bm,{ref:n,children:t}),l>1&&(0,e.jsx)(ym,{children:Array.from({length:l},(u,g)=>(0,e.jsx)(wm,{$active:g===a,onClick:()=>{c(g),d(g)},children:g+1},`carousel-page-${g}`))}),l>1&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Hs,{type:"button",$direction:"previous","aria-label":"Попередня картка",onClick:()=>h(-1),children:"◀"}),(0,e.jsx)(Hs,{type:"button",$direction:"next","aria-label":"Наступна картка",onClick:()=>h(1),children:"▶"})]})]})},Ks=["Підпишіться на мій ютуб, щоб знати, що буде в наступній версії! TheTurkeyStudio.","Доміно, власник сайту і замку!","Ти теж думаєш, що відсилками можна керувати погодою? :)","Погода така сама загадка і т/с 'Ральна містика'","Хто що любить, хто що шукає? :)","Зворотний зв'язок: фейсбук, ютуб або акаунт theturkeystudio@gmail.com на випадок помилок.","Хочете, щоб ваш трек або відсилка були на сайті? Надсилайте на пошту theturkeystudio@gmail.com","Фан-арти для роздрукування! І плоска 3D-картина краще виглядає на стіні, ніж на екрані. Примітка","0 казино, 0 підписок, 0 політики, 0 насильства, 0 шахрайства. Тільки погода, музика і відсилки.","«SlivkiShow» та «Дизель Шоу» (2015–2020) - це легенди...","Людський будинок для індика - це бекрумс. Він нічого не розуміє. Особистий досвід :)","Знайди речдок у телешоу «Речдок»","Якщо всі собаки потрапляють у рай, то блохи потраплять до іншого місця?","Лише по секрету, 5BN Games — найкращі у створенні сюжетів і загадок («Спадщина» і «Темрява та Полум'я» найвдаліше!)","Ми вас здивуємо багато чим :)","І що всіх тягне на турецькі серіали?","«Дизель Шоу»: В Америці - Сірі, в Ізраїлі - Сара","Морально підтримайте підпискою на ютуб, рекламою і побажаннями.","Навчання, оцінювання та коментування. І що я написав :)","Чекаю на ваші відсилки, фан-арти та побажання на пошту","Чекаємо на «Aurora Hills: Chapter 3» та «Темрява та Полум'я 5»","У нас немає сторінки 404 :) Радіовишки, ліси, тумани, сирени...","Порада: використайте Lively Wallpaper, щоб відсилковий відеофон був на робочому столі.","Підтримайте, будь ласка, рекламою нас у соцмережах :)","У вас через сім днів буде хороша погода - поганої ж не існує :)","«Теорія неймовірності» (Макс Кідрук) має одну частину :(","Ох, Марта любить, коли ти не тікаєш від долі стати картиною.","Кейт — складна за характером індичка.","Можливо, Доміно розмістив відсилки на «Динофроз» і «Dragon Village» через те, що індики схожі на драконів і динозаврів :)","Хто ваш кумир? Зібров чи Винник?","Багато змін клімату, мультиплікації, моди, життя :(","Хто знає, той у нас шукає. Всі сайти так кажуть і ми :)","Місія неможлива - ніде не помилитись","Льодовиковий період чи глобальне потепління через 24 роки.","Правило: дивіться на все під різними кутами.","Попри все, погода не буває поганою - вона буває різною.","Ви: «Цей сайт дивний, тут погода, і відсилки, і старі хіти, зате прикольний індик в магазині»","Оксану Самойлову з «Україна має талант» хто пам'ятає?","Страху немає, упевненим робиться рух!","Застрягли в минулому :) Але погода - це майбутнє!","Mondo TV - Thanks for legendary cartoons.","Раз, два, три. Погоду нам скажи!","Це початок початку чи початок кінця відсилкам? (Перший варіант)","Вверх - ти летиш! Вниз - ти падаєш! ","Чорний айсберг, потопив ......? ","Доміно тривожить Єллоустон","Я знаю що її звати ......","Цей сайт це реальна містика :)","Доміно бажає гарної погоди :)","Кейт бажає творчого натхнення","Сутінок - не найкраще, що можете побачити...","Драконяче видання...","Марта - і картини...","Відлуння порожнечі","Вам приснилися сни про погоду? Бо ви тут! :)","Вам приснився жах що ...... і ...... програли і...","Ти ж знаєш, що відсилки - це не просто картинки і відео, а ще й загадки та сюжети :)","Ліків у нас немає, їх украв доктор Хаус. Але погода лікує від усього :)"],jm=le`
  0% { opacity: 0; transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.1)) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(1.2); }
`,Sm=i.span`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${t=>t.$isNew?"#94fffa":"#ffb36c"};
  font-size: 14px;
  z-index: 10001;
  animation: ${jm} 3s ease-out infinite;
  animation-delay: ${t=>t.$delay}s;
  --x: ${t=>t.$x}px;
  --y: ${t=>t.$y}px;
`,Cm=i.div`
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
`,Tm=i.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  ${t=>t.$isNew&&et`
      color: #94fffa;
      text-shadow: 0 0 12px rgba(148, 255, 250, 0.9);
      font-weight: bold;
      &::before {
        content: "Нове: ";
        font-size: 0.8em;
        color: orange;
      }
    `}
`,Us="siteSectionsOrder",ji=(0,r.memo)(({section:t,isDarkMode:n,isStickyBgMode:a,isLocationEnabled:c,handleRefreshCard:l,handleDeleteCard:d,handleRenameCard:h,moveWeatherCard:u,setIsLocationEnabled:g,user:x,handleOpenRegister:T,onUpdateUser:k,setHeroBg:P,customHeroBgs:z,setCustomHeroBgs:F,setCustomHolidayName:I,customHolidayName:y,weatherCards:m,weatherCardLayout:v,isAnyModalOpen:j,heroDateString:C,isWeatherDetailsOpen:B,setIsWeatherDetailsOpen:H,selectedWeatherCard:J,setSelectedWeatherCard:Q,setIsFsActive:he})=>t?t.key==="weather"?(0,e.jsxs)("div",{id:"weather",children:[(0,e.jsx)(G0,{$isStickyBgMode:a,$isDarkMode:n,children:"Погода"}),(0,e.jsx)(km,{children:m.map((te,D)=>{const N=te.current.tempNum>30||te.current.tempNum<-30,re=te.current.windNum>10,xe=te.current.uv_index>7;return(0,e.jsx)("div",{children:(0,e.jsx)(xp,{isStickyBgMode:a,user:x,card:te,isDarkMode:n,isLocationEnabled:c,isExtremeTemp:N,isExtremeWind:re,isExtremeUV:xe,index:D,totalCards:m.length,handleRefreshCard:l,handleDeleteCard:d,handleRenameCard:h,moveWeatherCard:u,setIsLocationEnabled:g,customHolidayName:y,layout:v,onOpenDetails:ce=>{Q({...te,cityImage:ce||te.cityImage}),H(!0)},currentTimeString:C})},te.id)})})]}):(0,e.jsxs)("div",{id:t.key,children:[t.key==="map"&&(0,e.jsx)(dm,{isDarkMode:n,isStickyBgMode:a}),t.key==="aihelp"&&(0,e.jsx)(om,{isDarkMode:n,isStickyBgMode:a}),t.key==="fanart"&&(0,e.jsx)(sm,{isStickyBgMode:a,isDarkMode:n,user:x,setHeroBg:P,customHeroBgs:z,setCustomHeroBgs:F}),t.key==="prison"&&(0,e.jsx)(Prison,{})]}):null),Am=()=>{const[t,n]=(0,r.useState)(!0),[a,c]=(0,r.useState)(!1),[l,d]=(0,r.useState)({text:"",isNew:!1}),[h,u]=(0,r.useState)(new Date),[g,x]=(0,r.useState)(!0),[T,k]=(0,r.useState)(!1),[P,z]=(0,r.useState)([]),[F,I]=(0,r.useState)({}),[y,m]=(0,r.useState)(null),v=(0,r.useRef)(null);(0,r.useEffect)(()=>{const b=g?"dark":"light";document.documentElement.dataset.theme=b,document.body.dataset.theme=b},[g]),(0,r.useEffect)(()=>{v.current=y},[y]);const[j,C]=(0,r.useState)(null),[B,H]=(0,r.useState)([]),[J,Q]=(0,r.useState)(null),[he,te]=(0,r.useState)(null),[D,N]=(0,r.useState)(null),[re,xe]=(0,r.useState)("static"),[ce,ee]=(0,r.useState)(.2),[X,me]=(0,r.useState)({}),[oe,Te]=(0,r.useState)(5),[Se,ut]=(0,r.useState)(.8),[It,Dt]=(0,r.useState)("all"),[ot,st]=(0,r.useState)(1),[Oe,tt]=(0,r.useState)(0),[mt,Ve]=(0,r.useState)(0),[jt,Lt]=(0,r.useState)("smooth"),[ft,nt]=(0,r.useState)(0),[Ze,Ue]=(0,r.useState)({x:50,y:50}),[gt,Ie]=(0,r.useState)({x:50,y:50}),[De,at]=(0,r.useState)({x:50,y:50}),[St,bt]=(0,r.useState)({x:50,y:50}),[Ft,yt]=(0,r.useState)(!1),[Ot,V]=(0,r.useState)(6),[ne,pe]=(0,r.useState)(1),[Ae,de]=(0,r.useState)([{key:"current",visible:!0},{key:"ai",visible:!0},{key:"hourly",visible:!0},{key:"daily",visible:!0}]),[Me,lt]=(0,r.useState)(""),[We,Cn]=(0,r.useState)(Ti),[_e,Ct]=(0,r.useState)(!1),[w,E]=(0,r.useState)(!1),[q,ge]=(0,r.useState)(!1),[qe,rt]=(0,r.useState)(!1),[be,ze]=(0,r.useState)(!1),[qt,Mt]=(0,r.useState)(!1),[ye,Et]=(0,r.useState)(!1),[Be,Vt]=(0,r.useState)(!1),[$e,Jt]=(0,r.useState)(!1),[zt,Xt]=(0,r.useState)(!0),[zn,$n]=(0,r.useState)(!1),[se,Tt]=(0,r.useState)(!1),[Bt,G]=(0,r.useState)(!0),[ie,He]=(0,r.useState)(Si),[Re,Ke]=(0,r.useState)("loop"),[Le,dt]=(0,r.useState)(!1),[Xe,Ht]=(0,r.useState)(23),[,Kt]=(0,r.useState)(0),[dn,Tn]=(0,r.useState)(.2),[cn,_n]=(0,r.useState)(.2),[Gt,On]=(0,r.useState)("eager"),[Qt,pn]=(0,r.useState)(1),[$t,Rn]=(0,r.useState)([]),[un,aa]=(0,r.useState)({}),[en,qn]=(0,r.useState)(!1),[Ln,on]=(0,r.useState)(!1),[Fn,hn]=(0,r.useState)(!1),[sn,Je]=(0,r.useState)(null),tn=(0,r.useCallback)(()=>{const b=new Date,L=3600-(b.getMinutes()*60+b.getSeconds());return L<=0?3600:L},[]),[Qe,xt]=(0,r.useState)(tn()),fn=(0,r.useRef)([]),Pt=(0,r.useRef)(null),Ut=(0,r.useRef)(null),[nn,Sa]=(0,r.useState)(0),Jn=(0,r.useRef)(!1),[Gn,Nt]=(0,r.useState)(!1),[mn,Yn]=(0,r.useState)(!1),[Zn,Ca]=(0,r.useState)(!1),[Vn,ra]=(0,r.useState)(!1),[an,Xn]=(0,r.useState)("UTC"),[s,p]=(0,r.useState)(!1),[O,R]=(0,r.useState)(!1),[M,$]=(0,r.useState)(null),[fe,Ce]=(0,r.useState)(null);(0,r.useEffect)(()=>Ep(({isMaintenanceMode:b,endTime:L,message:_})=>{R(b),$(L),Ce(_)}),[]),(0,r.useEffect)(()=>{(async()=>{try{const L=await f.default.getItem("isDarkMode");L!==null&&x(L);const _=await f.default.getItem("isStickyBgMode");_!==null&&k(_);const K=await f.default.getItem("sectionThemes");K&&I(K);const W=await f.default.getItem("hiddenSections");W&&z(W);const Z=await f.default.getItem("active_user");Z&&m(Z);const Pe=await f.default.getItem("currentAvatar");Pe&&Cn(Pe);const pt=await f.default.getItem("isRoutingMode");pt!==null&&Yt(pt);const Zt=await f.default.getItem("selected_timezone");Zt&&Xn(Zt);const vt=await f.default.getItem("bg_music_enabled");vt!==null&&Tt(vt);const S=await f.default.getItem("auto_mute_bg_music");S!==null&&G(S);const Rt=await f.default.getItem("lock_filters_in_fs");Rt!==null&&qn(Rt);const En=await f.default.getItem("bg_music_source");En&&He(En);const Ia=await f.default.getItem("custom_bg_tracks");Ia&&Rn(Ia);const Qn=await f.default.getItem("bg_music_volume");Qn!==null&&Tn(Qn);const _a=await f.default.getItem("sfx_volume");_a!==null&&_n(_a);const we=await f.default.getItem("bg_music_speed");we!==null&&pn(we);const ht=await f.default.getItem("bg_music_position");ht!==null&&Sa(ht);const Ye=await f.default.getItem("bg_music_mode");Ye&&Ke(Ye);const je=await f.default.getItem("bg_music_shuffle");je!==null&&dt(je);const ve=await f.default.getItem("active_bg_track_id");ve&&Ht(ve);const Ne=await f.default.getItem("library_bg_settings");Ne&&aa(Ne);const ln=await f.default.getItem("weather_cards");ln&&yn(gi(ln));const Wt=await f.default.getItem("hideDeleteModalUntil");Wt&&ae(parseInt(Wt));const ea=await f.default.getItem(Us);ea&&ue(ea);const ta=await f.default.getItem("hero_background");ta&&C(ta);const Na=await f.default.getItem("hero_background_2");Na&&Q(Na);const _i=await f.default.getItem("hero_background_3");_i&&te(_i);const qi=await f.default.getItem("hero_background_4");qi&&N(qi);const Ji=await f.default.getItem("custom_hero_backgrounds");Ji&&H(Ji);const Gi=await f.default.getItem("hero_bg_mode");Gi&&xe(Gi);const Yi=await f.default.getItem("hero_slideshow_interval");Yi!==null&&Te(Yi);const Zi=await f.default.getItem("hero_slideshow_transition");Zi!==null&&ut(Zi);const Xi=await f.default.getItem("hero_bg_filter_category");Xi&&Dt(Xi);const Qi=await f.default.getItem("hero_bg_zoom");Qi!==null&&st(Qi);const eo=await f.default.getItem("hero_bg_rotation");eo!==null&&nt(eo);const to=await f.default.getItem("hero_bg_blur");to!==null&&tt(to);const no=await f.default.getItem("hero_bg_blur_type");no&&Lt(no);const ao=await f.default.getItem("hero_bg_pixelation");ao!==null&&Ve(ao);const ro=await f.default.getItem("hero_bg_focal1");ro&&Ue(ro);const io=await f.default.getItem("hero_bg_focal2");io&&Ie(io);const oo=await f.default.getItem("hero_bg_focal3");oo&&at(oo);const so=await f.default.getItem("hero_bg_focal4");so&&bt(so);const lo=await f.default.getItem("hero_bg_pan_enabled");lo!==null&&yt(lo);const co=await f.default.getItem("hero_bg_pan_speed");co!==null&&V(co);const po=await f.default.getItem("hero_video_playback_speed");po!==null&&pe(po);const uo=await f.default.getItem("custom_holiday_name");uo&&lt(uo);const fo=await f.default.getItem("dinofroz_screenshots");fo&&o(fo);const Sd=await f.default.getItem("last_deployed_version"),go=await f.default.getItem("weather_card_layout");go&&de(go);const xo=await f.default.getItem("show_update_timer");xo!==null&&Xt(xo);const ho=await f.default.getItem("modal_loading_strategy");ho&&On(ho);const mo={}.REACT_APP_DEPLOY_ID;mo&&Sd!==mo&&Yn(!0),p(!0)}catch(L){console.error("Помилка завантаження з localforage:",L),p(!0)}})()},[]),(0,r.useEffect)(()=>{s&&(f.default.setItem("isStickyBgMode",T),f.default.setItem("bg_music_enabled",se),f.default.setItem("auto_mute_bg_music",Bt),f.default.setItem("lock_filters_in_fs",en),(ie instanceof Blob||typeof ie=="string")&&f.default.setItem("bg_music_source",ie),f.default.setItem("custom_bg_tracks",$t),f.default.setItem("bg_music_volume",dn),f.default.setItem("sfx_volume",cn),f.default.setItem("bg_music_speed",Qt),f.default.setItem("bg_music_mode",Re),f.default.setItem("bg_music_shuffle",Le),f.default.setItem("active_bg_track_id",Xe),f.default.setItem("library_bg_settings",un))},[se,Bt,en,ie,$t,un,dn,cn,Qt,Re,Le,Xe,s]),(0,r.useEffect)(()=>{(async()=>{const L=await f.default.getItem("seen_loading_phrases")||[],_=Math.floor(Math.random()*Ks.length),K=Ks[_],W=!L.includes(K);if(W){const Z=[...L,K];await f.default.setItem("seen_loading_phrases",Z.slice(-100))}d({text:K,isNew:W})})()},[]);const it=(0,r.useCallback)(()=>{kt(()=>import("./Aihelp-BUdNmg85.js"),__vite__mapDeps([0,1,2])),kt(()=>import("./FanArt-DcLbXh_a.js"),__vite__mapDeps([3,1,2])),kt(()=>import("./ShopModal-BdTDTsYi.js"),__vite__mapDeps([4,1,2])),kt(()=>Promise.resolve().then(()=>Dg),void 0),kt(()=>import("./ClimateMap-CJPB-PGL.js"),__vite__mapDeps([5,1,2])),kt(()=>import("./Modal-D8OBmo47.js"),__vite__mapDeps([6,1,2,7])),kt(()=>import("./LoginModal-6SQNeaR8.js"),__vite__mapDeps([8,1,2])),kt(()=>import("./UserSettingsModal-CP2JHJMD.js"),__vite__mapDeps([9,1,2,10,7])),kt(()=>import("./WeatherDetailsModal-tQfoa3jp.js"),__vite__mapDeps([11,1,2])),kt(()=>Promise.resolve().then(()=>dd),void 0),kt(()=>import("./OtherOptionsModal-Ccz9tW2D.js"),__vite__mapDeps([12,1,2,10]))},[]);(0,r.useEffect)(()=>{if(s){if(Gt==="eager")it();else if(Gt==="delayed"){const b=setTimeout(it,8e3);return()=>clearTimeout(b)}}},[s,Gt,it]);const bn=(0,r.useMemo)(()=>{const b=l.isNew?12:6;return Array.from({length:b}).map((L,_)=>({id:_,x:(Math.random()-.5)*220,y:(Math.random()-.5)*140,delay:Math.random()*2}))},[l]);(0,r.useEffect)(()=>{const b=setTimeout(()=>Ca(!0),8e3);return()=>clearTimeout(b)},[]),(0,r.useEffect)(()=>{if(y?.fontFamily){const b=y.fontFamily.trim().replace(/ /g,"+").replace(/['"]/g,""),L="custom-google-font";let _=document.getElementById(L);_||(_=document.createElement("link"),_.id=L,_.rel="stylesheet",document.head.appendChild(_)),_.href=`https://fonts.googleapis.com/css2?family=${b}:wght@400;700;900&display=swap`,document.documentElement.style.setProperty("--font-family",`"${y.fontFamily.replace(/['"]/g,"")}", sans-serif`)}else document.getElementById("custom-google-font")?.remove(),document.documentElement.style.removeProperty("--font-family")},[y?.fontFamily]),(0,r.useEffect)(()=>{const b=()=>{Nt(!0),window.removeEventListener("mousedown",b),window.removeEventListener("scroll",b),window.removeEventListener("touchstart",b)};return window.addEventListener("mousedown",b),window.addEventListener("scroll",b),window.addEventListener("touchstart",b),()=>{window.removeEventListener("mousedown",b),window.removeEventListener("scroll",b),window.removeEventListener("touchstart",b)}},[]);const[Fe,Yt]=(0,r.useState)(!1);(0,r.useEffect)(()=>{mn&&Zn&&Gn&&!Vn&&(Vt(!0),Yn(!1),ra(!0),f.default.setItem("last_deployed_version",{}.REACT_APP_DEPLOY_ID))},[mn,Zn,Gn,Vn]);const[ct,Ee]=(0,r.useState)(!1),[Ge,yn]=(0,r.useState)([]),[An,o]=(0,r.useState)([]),A=_e||w||q||qe||be||qt||ye||Be||Vn,[U,ae]=(0,r.useState)(0);(0,r.useEffect)(()=>{const L=setTimeout(async()=>{const _=[Si,kr,kr,Sr];try{await Promise.all(_.map(K=>fetch(K))),console.log("KatScene assets preloaded in background")}catch(K){console.warn("Failed to preload KatScene assets:",K)}},4e3);return()=>clearTimeout(L)},[]);const[Y,ue]=(0,r.useState)([...or]);(0,r.useEffect)(()=>{if(s){const b=gi(Ge);if(f.default.setItem("weather_cards",b).catch(L=>{console.error("weather_cards persistence failed:",L)}),v.current?.uid){const L=b.map(K=>({id:K.id,isMain:K.isMain,locationName:K.locationName,lat:K.lat,lon:K.lon})),_=Wn(Dn,"config",v.current.uid);Ba(_,{savedWeatherCards:L},{merge:!0}).catch(console.error)}}},[Ge,s]),(0,r.useEffect)(()=>{(async()=>{if(v.current?.uid&&s)try{const L=Wn(Dn,"config",v.current.uid),_=await vr(L);if(_.exists()){const K=_.data();if(K.savedWeatherCards&&K.savedWeatherCards.filter(W=>!fn.current.some(Z=>Z.id===W.id)).forEach(W=>{W.isMain?Ea():At({id:W.id,fullName:W.locationName,lat:W.lat,lon:W.lon},!1,W.lat,W.lon)}),K.settings){const W=K.settings;W.isDarkMode!==void 0&&x(W.isDarkMode),W.hiddenSections&&z(W.hiddenSections),W.weatherCardLayout&&de(W.weatherCardLayout),W.isRoutingMode!==void 0&&Yt(W.isRoutingMode),W.siteSections&&ue(W.siteSections),W.isStickyBgMode!==void 0&&k(W.isStickyBgMode),W.sectionThemes&&I(W.sectionThemes),W.heroBg&&C(W.heroBg),W.heroBg2&&Q(W.heroBg2),W.heroBg3&&te(W.heroBg3),W.heroBg4&&N(W.heroBg4),W.heroBgMode&&xe(W.heroBgMode),W.customHeroBgs&&H(W.customHeroBgs),W.heroOverlayOpacity!==void 0&&ee(W.heroOverlayOpacity),W.bgRatings&&me(W.bgRatings)}}}catch(L){console.error("Error syncing from Firestore:",L)}})()},[y,s]),(0,r.useEffect)(()=>{s&&(async()=>{try{const L=await f.default.getItem("weather_cards");if(L){const _=gi(L);yn(_)}}catch(L){console.error("weather_cards hydration failed:",L)}})()},[s]),(0,r.useEffect)(()=>{if(s&&(f.default.setItem("isRoutingMode",Fe),f.default.setItem(Us,Y),f.default.setItem("hiddenSections",P),f.default.setItem("weatherCardLayout",Ae),f.default.setItem("isStickyBgMode",T),f.default.setItem("sectionThemes",F),f.default.setItem("isDarkMode",g),f.default.setItem("hero_video_playback_speed",ne),v.current?.uid)){const b=Wn(Dn,"config",v.current.uid);Ba(b,{settings:{isDarkMode:g,hiddenSections:P,weatherCardLayout:Ae,isRoutingMode:Fe,siteSections:Y,isStickyBgMode:T,sectionThemes:F,heroBg:j,heroBg2:J,heroBg3:he,heroBg4:D,heroBgMode:re,customHeroBgs:B,heroOverlayOpacity:ce,bgRatings:X}},{merge:!0}).catch(console.error)}},[Fe,Y,P,Ae,T,F,g,j,J,he,D,re,B,ce,X,ne,s]);const[ke,wt]=(0,r.useState)("");(0,r.useEffect)(()=>{let b=ie;return ie instanceof Blob&&(b=URL.createObjectURL(ie)),wt(b),()=>{ie instanceof Blob&&b&&URL.revokeObjectURL(b)}},[ie]);const Ta=(0,r.useRef)(null);(0,r.useEffect)(()=>{const b=Pt.current,L=Ut.current;if(!b||!L)return;Ta.current!==ke&&(Kt(0),Ta.current=ke);const _=se&&(!Ln||!Bt),K=_?dn:0,W=.02;let Z=b,Pe=L;b.src&&ke&&b.src.includes(ke)?(Z=b,Pe=L):L.src&&ke&&L.src.includes(ke)?(Z=L,Pe=b):(Z=b.paused||b.volume===0?b:L,Pe=Z===b?L:b),_?Z.paused||Z.src===""||!Z.src.includes(ke)?(Z.src=ke,!Jn.current&&nn>0?(Z.currentTime=nn,Jn.current=!0):Z.currentTime=0,Z.volume=0,Z.playbackRate=Qt,Z.play().catch(()=>{})):(Z.playbackRate=Qt,Z.paused&&Z.play().catch(()=>{})):_||(b.paused||b.pause(),L.paused||L.pause());const pt=setInterval(()=>{Z.volume<K?Z.volume=Math.min(K,Z.volume+W):Z.volume=K,Pe.volume>0?Pe.volume=Math.max(0,Pe.volume-W):Pe.pause(),Z.volume===K&&Pe.volume===0&&clearInterval(pt)},50);return()=>clearInterval(pt)},[se,Ln,Bt,ke,dn,Qt,nn]),(0,r.useEffect)(()=>{Pt.current&&(Pt.current.playbackRate=Qt),Ut.current&&(Ut.current.playbackRate=Qt)},[Qt]),(0,r.useEffect)(()=>{const b=setInterval(()=>{const L=Pt.current,_=Ut.current;if(!L||!_)return;const K=L&&!L.paused?L:_&&!_.paused?_:null;K&&K.currentTime>0&&f.default.setItem("bg_music_position",K.currentTime)},5e3);return()=>clearInterval(b)},[]);const ia=(0,r.useCallback)(async()=>{Sa(0),await f.default.setItem("bg_music_position",0),Pt.current&&(Pt.current.currentTime=0),Ut.current&&(Ut.current.currentTime=0),Jn.current=!1},[]),wn=(0,r.useCallback)(()=>{const b=Pt.current,L=Ut.current;if(!b||!L)return;let _=b;if(L.src&&ke&&L.src.includes(ke)&&(_=L),Re==="loop"){_.currentTime=0,_.play().catch(()=>{});return}const K=($t||[]).find(Z=>Z&&Z.file===ie);let W=1;K?W=K.repeats||1:Xe&&(W=un[Xe]?.repeats||1),Kt(Z=>{const Pe=Z+1;if(Pe<W)return _.currentTime=0,_.play().catch(()=>{}),Pe;if(Re==="order"){const pt=td.map(S=>({id:S.id,file:Ra[S.audio]||turkeysAudio,enabled:un[S.id]?.enabled!==!1})).filter(S=>S.enabled),Zt=($t||[]).filter(S=>S&&S.enabled!==!1),vt=[...pt.map(S=>({id:S.id,file:S.file,isCustom:!1})),...Zt.map(S=>({id:S.id,file:S.file,isCustom:!0}))];if(vt.length>0){const S=vt.findIndex(Rt=>Rt.file===ie);if(Le){const Rt=vt.filter(Ia=>Ia.file!==ie),En=Rt.length>0?Rt[Math.floor(Math.random()*Rt.length)]:vt[0];He(En.file),Ht(En.isCustom?null:En.id)}else{const Rt=vt[(S+1)%vt.length];He(Rt.file),Ht(Rt.isCustom?null:Rt.id)}}}return 0})},[Re,ie,$t,Le,Xe,un,ke]);(0,r.useEffect)(()=>{se&&(Pt.current&&!Pt.current.paused?Pt.current.currentTime=0:Ut.current&&!Ut.current.paused&&(Ut.current.currentTime=0))},[Re,se]),(0,r.useEffect)(()=>{s&&(f.default.setItem("isDarkMode",g),f.default.setItem("sectionThemes",F),f.default.setItem("hiddenSections",P),f.default.setItem("hero_background",j),f.default.setItem("custom_hero_backgrounds",B),f.default.setItem("hero_background_2",J),f.default.setItem("hero_background_3",he),f.default.setItem("hero_background_4",D),f.default.setItem("hero_bg_ratings",X),f.default.setItem("hero_bg_mode",re),f.default.setItem("hero_overlay_opacity",ce),f.default.setItem("hero_slideshow_interval",oe),f.default.setItem("hero_slideshow_transition",Se),f.default.setItem("hero_bg_filter_category",It),f.default.setItem("hero_bg_zoom",ot),f.default.setItem("hero_bg_rotation",ft),f.default.setItem("hero_bg_blur",Oe),f.default.setItem("hero_bg_blur_type",jt),f.default.setItem("hero_bg_pixelation",mt),f.default.setItem("hero_bg_focal1",Ze),f.default.setItem("hero_bg_focal2",gt),f.default.setItem("hero_bg_focal3",De),f.default.setItem("hero_bg_focal4",St),f.default.setItem("hero_bg_pan_enabled",Ft),f.default.setItem("hero_bg_pan_speed",Ot),f.default.setItem("custom_holiday_name",Me),f.default.setItem("selected_timezone",an),f.default.setItem("weather_card_layout",Ae),f.default.setItem("show_update_timer",zt),f.default.setItem("modal_loading_strategy",Gt))},[j,J,he,D,B,X,re,ce,oe,Se,It,ot,ft,Oe,jt,mt,Ze,gt,De,St,Ft,Ot,s,g,F,P,Me,an,Ae,zt,Gt]),(0,r.useEffect)(()=>{y?.fastClicks?document.body.classList.add("fast-clicks-enabled"):document.body.classList.remove("fast-clicks-enabled")},[y?.fastClicks]),(0,r.useEffect)(()=>{s&&(y?(f.default.setItem("active_user",y),y.avatar&&(Cn(y.avatar),f.default.setItem("currentAvatar",y.avatar))):f.default.removeItem("active_user"))},[y,s]),(0,r.useEffect)(()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()},[]),(0,r.useEffect)(()=>{fn.current=Ge},[Ge]);const At=(0,r.useCallback)(async(b,L,_=null,K=null,W=!1)=>{try{let Z=_,Pe=K,pt=typeof b=="string"?b:b?.fullName||"Ваша локація";if(b&&typeof b=="object"&&b.lat)Z=b.lat,Pe=b.lon,pt=b.fullName||pt;else if(typeof b=="string"){const we=ld(b);if(we)Z=we.lat,Pe=we.lon,pt=we.fullName,b={id:`search-${we.name.toLowerCase()}`};else{const ht=await Za.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(b)}&count=1&language=uk`,{timeout:8e3});if(ht.data.results&&ht.data.results[0])Z=ht.data.results[0].latitude,Pe=ht.data.results[0].longitude,pt=ht.data.results[0].name,b={id:Date.now()};else{alert("Місто не знайдено в базі Open-Meteo");return}}}const Zt=L?"main-card":b?.id||Date.now();if(!L&&!fn.current.find(we=>we.id===Zt)){if(fn.current.filter(we=>!we.isMain).length>=4){alert("Можна мати не більше 4 власних карток погоди плюс поточну GPS-картку.");return}if(v.current)try{const we=Wn(Dn,"config",v.current.uid),ht=await vr(we);let Ye=ht.exists()?ht.data():{};const je=new Date().toISOString().split("T")[0];if(Ye.cardAdditionsDate!==je&&(Ye.cardAdditionsCount=0,Ye.cardAdditionsDate=je),Ye.cardAdditionsCount>=10){alert("Ви досягли ліміту в 10 карток на добу.");return}Ye.cardAdditionsCount+=1,await Ba(we,{cardAdditionsCount:Ye.cardAdditionsCount,cardAdditionsDate:Ye.cardAdditionsDate},{merge:!0})}catch(we){console.error("Помилка перевірки ліміту Firestore:",we)}}const vt=`https://api.open-meteo.com/v1/forecast?latitude=${Z}&longitude=${Pe}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,cloud_cover,visibility,dew_point_2m,temperature_80m,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm&hourly=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,rain,pressure_msl,cloud_cover,visibility,is_day,snow_depth,et0_fao_evapotranspiration,freezing_level_height,soil_temperature_0cm&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max,wind_direction_10m_dominant,precipitation_probability_max,rain_sum,precipitation_sum,et0_fao_evapotranspiration,sunrise,sunset&timezone=auto&past_days=1&forecast_days=16`;console.log("Fetching weather from URL:",vt);const S=(await Za.get(vt,{timeout:8e3})).data;if(console.log("💾 RAW API RESPONSE for",pt,S),console.log("API Response raw data:",{hasResponse:!!S,currentData:S.current,hourlyData:S.hourly?{time:S.hourly.time?.slice(0,2),wind:S.hourly.wind_speed_10m?.slice(0,2)}:null,dailyData:S.daily?{time:S.daily.time?.slice(0,2),uv_index_max:S.daily.uv_index_max?.slice(0,2),wind_speed_10m_max:S.daily.wind_speed_10m_max?.slice(0,2)}:null}),(!S.current||S.current.wind_speed_10m===void 0)&&console.error("❌ Wind speed data missing from current!",{hasCurrentData:!!S.current,currentKeys:S.current?Object.keys(S.current):[],windSpeed:S.current?.wind_speed_10m}),(!S.daily?.uv_index_max||S.daily.uv_index_max.length===0)&&console.error("❌ UV index data missing from daily!",{hasDailyData:!!S.daily,dailyKeys:S.daily?Object.keys(S.daily):[],uvIndex:S.daily?.uv_index_max,uvLength:S.daily?.uv_index_max?.length}),S.hourly?.wind_speed_10m||console.error("❌ Hourly wind data missing!",{hasHourlyData:!!S.hourly,hourlyKeys:S.hourly?Object.keys(S.hourly):[],wind:S.hourly?.wind_speed_10m}),"Notification"in window&&Notification.permission==="granted"){const we=Date.now();if(we-Number(window.localStorage.getItem("weatherNotificationLastSentAt")||0)>=36e5){const ht=Math.round(S.current.temperature_2m),Ye=Math.round(S.current.apparent_temperature),je=S.current.wind_speed_10m??0,ve=S.current.relative_humidity_2m??0,Ne=vi(S.current.weather_code,S.current.is_day),ln=`Температура ${ht}°C${Ye!==ht?`, відчувається ${Ye}°C`:""}, ${Ne}, вітер ${je} м/с, вологість ${ve}%.`;new Notification(`Погода: ${pt}`,{body:ln,icon:"/favicon.ico"}),window.localStorage.setItem("weatherNotificationLastSentAt",String(we))}}const Rt=new Date;let En=Rt.getHours();En>=18&&(En=18);const Ia=`${Rt.getFullYear()}-${String(Rt.getMonth()+1).padStart(2,"0")}-${String(Rt.getDate()).padStart(2,"0")}T${String(En).padStart(2,"0")}:00`;let Qn=(S.hourly?.time||[]).findIndex(we=>we.startsWith(Ia));Qn===-1&&(Qn=0);const _a=168;yn(we=>{const ht=we.find(je=>je.id===Zt);console.log(`Creating weather card for ${pt}`,{windSpeedCurrent:S.current?.wind_speed_10m,windSpeedHourly:S.hourly?.wind_speed_10m?.slice(0,3),uvIndexDaily:S.daily?.uv_index_max?.slice(0,3)});const Ye={id:Zt,isMain:L,locationName:L&&!b?.fullName?"Ваша локація":ht?ht.locationName:pt,lat:Z,lon:Pe,current:{temp:`${Math.round(S.current.temperature_2m)}°C`,tempNum:Math.round(S.current.temperature_2m),feels_like:`${Math.round(S.current.apparent_temperature)}°C`,humidity:`${S.current.relative_humidity_2m}%`,pressure:`${Math.round(S.current.surface_pressure)} hPa`,wind_speed:`${S.current.wind_speed_10m??0} м/с`,windNum:S.current.wind_speed_10m??0,wind_direction_10m:S.current.wind_direction_10m??0,wind_gusts_10m:S.current.wind_gusts_10m??0,uv_index:S.daily?.uv_index_max?.[0]??0,cloud_cover:S.current.cloud_cover??0,visibility:S.current.visibility??0,dew_point_2m:S.current.dew_point_2m??0,temperature_80m:S.current.temperature_80m??0,snow_depth:S.current.snow_depth??0,evapotranspiration:S.current.et0_fao_evapotranspiration??0,freezing_level_height:S.current.freezing_level_height??0,soil_temperature_0cm:S.current.soil_temperature_0cm??0,description:"За кодом: "+S.current.weather_code,iconPlaceholder:wi(S.current.weather_code,S.current.is_day),iconSymbol:ki(S.current.weather_code,S.current.is_day)},hourly:(S.hourly?.time||[]).slice(Qn,Qn+_a).map((je,ve)=>{const Ne=Qn+ve,ln=new Date(je),Wt=je.slice(0,10),ea=(S.daily?.time||[]).indexOf(Wt);let ta=1;if(ea!==-1&&S.daily?.sunrise?.[ea]&&S.daily?.sunset?.[ea])ta=je>=S.daily.sunrise[ea]&&je<=S.daily.sunset[ea]?1:0;else{const Na=ln.getHours();ta=Na>=6&&Na<21?1:0}return{time:`${String(ln.getHours()).padStart(2,"0")}:00`,dateLabel:ln.toLocaleDateString("uk",{day:"2-digit",month:"2-digit"}),fullTime:je,temp:`${Math.round(S.hourly?.temperature_2m?.[Ne]??0)}°C`,tempNum:Math.round(S.hourly?.temperature_2m?.[Ne]??0),feels_like:`${Math.round(S.hourly?.apparent_temperature?.[Ne]??0)}°C`,windNum:S.hourly?.wind_speed_10m?.[Ne]??0,wind_direction_10m:S.hourly?.wind_direction_10m?.[Ne]??0,wind_gusts_10m:S.hourly?.wind_gusts_10m?.[Ne]??0,relative_humidity_2m:S.hourly?.relative_humidity_2m?.[Ne]??null,dew_point_2m:S.hourly?.dew_point_2m?.[Ne]??0,precipitation:S.hourly?.precipitation?.[Ne]??null,rain:S.hourly?.rain?.[Ne]??null,pressure_msl:S.hourly?.pressure_msl?.[Ne]??null,cloud_cover:S.hourly?.cloud_cover?.[Ne]??null,visibility:S.hourly?.visibility?.[Ne]??0,snow_depth:S.hourly?.snow_depth?.[Ne]??0,evapotranspiration:S.hourly?.et0_fao_evapotranspiration?.[Ne]??0,freezing_level_height:S.hourly?.freezing_level_height?.[Ne]??0,soil_temperature_0cm:S.hourly?.soil_temperature_0cm?.[Ne]??0,iconPlaceholder:wi(S.hourly?.weather_code?.[Ne]??0,ta),iconSymbol:ki(S.hourly?.weather_code?.[Ne]??0,ta),description:vi(S.hourly?.weather_code?.[Ne]??0,ta)}}),daily16:(S.daily?.time||[]).map((je,ve)=>({date:new Date(je).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),fullDate:je,day:new Date(je).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(S.daily.temperature_2m_max[ve]??0)}°C`,temp_night:`${Math.round(S.daily.temperature_2m_min[ve]??0)}°C`,uv_index:S.daily.uv_index_max?.[ve]??0,wind_speed:`${S.daily.wind_speed_10m_max?.[ve]??0} м/с`,wind_direction_10m:S.daily.wind_direction_10m_dominant?.[ve]??0,precipitation_probability_max:S.daily.precipitation_probability_max?.[ve]??0,rain_sum:S.daily.rain_sum?.[ve]??0,precipitation_sum:S.daily.precipitation_sum?.[ve]??0,evapotranspiration:S.daily.et0_fao_evapotranspiration?.[ve]??0,sunrise:S.daily.sunrise?.[ve]??null,sunset:S.daily.sunset?.[ve]??null,iconPlaceholder:wi(S.daily.weather_code[ve]??0,1),iconSymbol:ki(S.daily.weather_code[ve]??0,1),description:vi(S.daily.weather_code[ve]??0,1)}))};return console.log(`Card data created for ${pt}:`,{windSpeedStored:Ye.current.windNum,uvIndexStored:Ye.current.uv_index,hourlyWindSample:Ye.hourly?.slice(0,2).map(je=>je.windNum),dailyWindSample:Ye.daily16?.slice(0,2).map(je=>je.wind_speed)}),W?[Ye,...we.filter(je=>je.id!==Zt)]:L?we.some(je=>je.isMain)?we.map(je=>je.isMain?Ye:je):[Ye,...we]:ht?we.map(je=>je.id===Zt?Ye:je):we.length>=8?we:[...we,Ye]});try{const we=new Date,ht=new Date(we);ht.setDate(ht.getDate()+210);const Ye=Ne=>Ne.toISOString().split("T")[0],je=`https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${Z}&longitude=${Pe}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&start_date=${Ye(we)}&end_date=${Ye(ht)}`,ve=(await Za.get(je,{timeout:8e3})).data;if(ve?.daily?.time?.length){const Ne=ve.daily.time.map((ln,Wt)=>({fullDate:ln,date:new Date(ln).toLocaleDateString("uk",{day:"numeric",month:"2-digit"}),day:new Date(ln).toLocaleDateString("uk",{weekday:"short"}),temp_day:`${Math.round(Array.isArray(ve.daily.temperature_2m_max?.[0])?ve.daily.temperature_2m_max[0][Wt]??0:ve.daily.temperature_2m_max?.[Wt]??0)}°C`,temp_night:`${Math.round(Array.isArray(ve.daily.temperature_2m_min?.[0])?ve.daily.temperature_2m_min[0][Wt]??0:ve.daily.temperature_2m_min?.[Wt]??0)}°C`,wind_speed:`${Math.round(Array.isArray(ve.daily.wind_speed_10m_max?.[0])?ve.daily.wind_speed_10m_max[0][Wt]??0:ve.daily.wind_speed_10m_max?.[Wt]??0)} м/с`,precipitation_sum:Array.isArray(ve.daily.precipitation_sum?.[0])?ve.daily.precipitation_sum[0][Wt]??0:ve.daily.precipitation_sum?.[Wt]??0,isSeasonal:!0}));yn(ln=>ln.map(Wt=>Wt.id===Zt?{...Wt,seasonal:Ne}:Wt))}}catch(we){console.warn("Seasonal forecast unavailable:",we.message)}}catch(Z){console.error("Помилка завантаження погоди",Z)}},[]),Aa=(0,r.useCallback)(async(b,L)=>{try{const{current:_,daily:K}=(await Za.get(`https://api.open-meteo.com/v1/forecast?latitude=${b}&longitude=${L}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,wind_speed_10m_max&timezone=auto&forecast_days=3`,{timeout:8e3})).data||{};if(!_||!K)return console.warn("Weather danger check: Missing data",{hasCurrent:!!_,hasDaily:!!K}),null;const W=_.wind_speed_10m??0,Z=_.temperature_2m??0,Pe=K?.uv_index_max?.[0]??0;console.log("Weather danger check data:",{windSpeed:W,currentTemp:Z,uvIndex:Pe,hasUvData:!!K.uv_index_max});const pt=(Zt,vt,S,Rt)=>Zt>30||vt<-30||S>10||Rt>7;return pt(K?.temperature_2m_max?.[0]??Z,K?.temperature_2m_min?.[0]??Z,W,Pe)?"red":K?.time?.some((Zt,vt)=>pt(K.temperature_2m_max?.[vt],K.temperature_2m_min?.[vt],K.wind_speed_10m_max?.[vt]||0,K.uv_index_max?.[vt]||0))?"orange":null}catch(_){return console.error("Weather danger check error:",_),null}},[]),Ea=(0,r.useCallback)(()=>{if(!ct){At({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52);return}"geolocation"in navigator?navigator.geolocation.getCurrentPosition(b=>{At({id:"main-card"},!0,b.coords.latitude,b.coords.longitude)},()=>At({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)):At({fullName:"Київ(Увімкн. у налаштуваннях GPS, щоб бачити вашу локацію)",id:"main-card"},!0,50.45,30.52)},[At,ct]),Bn=(0,r.useCallback)(b=>{b.isMain?Ea():At(b,!1)},[Ea,At]),wd=(0,r.useCallback)(()=>{console.log("Manual bulk refresh triggered..."),fn.current.length>0&&fn.current.forEach(b=>Bn(b)),xt(tn())},[Bn,tn]);(0,r.useEffect)(()=>{Ea()},[Ea]),(0,r.useEffect)(()=>{if(!s)return;const b=_h(window.location.search,window.location.hash);if(b.isSearchEntry&&b.cityName){const L=b.cityData;document.title=`Погода в місті ${b.cityName} — точний прогноз | Стихія`;const _=document.querySelector('meta[name="description"]');_&&_.setAttribute("content",`Точний прогноз погоди в місті ${b.cityName}: температура, вітер, вологість, тиск та графік на 16 днів.`);let K=document.querySelector('link[rel="canonical"]');K&&K.setAttribute("href",`https://stuxia.com/?q=погода+${encodeURIComponent(b.cityName.toLowerCase())}`);let W=document.getElementById("city-jsonld");W||(W=document.createElement("script"),W.id="city-jsonld",W.type="application/ld+json",document.head.appendChild(W)),W.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Place",name:b.cityName,description:`Точний прогноз погоди в місті ${b.cityName}`,address:{"@type":"PostalAddress",addressCountry:"UA",addressLocality:b.cityName}}),At(L.lat!==null?{id:L.id,fullName:L.fullName,lat:L.lat,lon:L.lon}:L.name,!1,L.lat,L.lon,!0),setTimeout(()=>{const Z=document.getElementById("weather");Z&&Z.scrollIntoView({behavior:"smooth"})},700)}},[s,At]),(0,r.useEffect)(()=>{if(!s)return;const b=new Date;b.setDate(b.getDate()-1);const L=`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`;Ge.forEach(_=>{_.daily16?.[0]?.fullDate!==L&&Bn(_)})},[s,Ge,Bn]),(0,r.useEffect)(()=>{if(!s)return;const b=setInterval(()=>{if(document.visibilityState==="visible"){const L=tn();xt(_=>(_<=5&&L>3590&&(console.log("Auto-updating weather cards at start of hour..."),fn.current.forEach(K=>Bn(K))),L))}},1e3);return()=>clearInterval(b)},[s,Bn,tn]);const Tr=(0,r.useCallback)(b=>{yn(L=>L.filter(_=>_.id!==b))},[]),Ar=(0,r.useCallback)(b=>{if(fn.current.filter(L=>!L.isMain).length>=4){alert("Можна мати не більше 4 власних карток погоди плюс поточну GPS-картку.");return}At(b,!1)},[At]),Ir=(0,r.useCallback)((b,L)=>{yn(_=>_.map(K=>K.id===b?{...K,locationName:L}:K))},[]),Dr=(0,r.useCallback)((b,L)=>{yn(_=>{const K=_.findIndex(Pe=>Pe.id===b);if(K===-1)return _;const W=K+L;if(W<0||W>=_.length)return _;const Z=[..._];return[Z[K],Z[W]]=[Z[W],Z[K]],Z})},[]);(0,r.useEffect)(()=>{const b=setTimeout(()=>c(!0),3500),L=setTimeout(()=>n(!1),5300),_=setInterval(()=>u(new Date),1e3);return()=>{clearTimeout(b),clearTimeout(L),clearInterval(_)}},[]);const vd=()=>{m(null),Cn(Ti),f.default.removeItem("currentAvatar"),ge(!1)},Vi=(0,r.useCallback)(()=>{x(b=>{const L=!b;return I({}),L})},[]),Bi=(0,r.useCallback)(b=>{I(L=>({...L,[b]:!L[b]}))},[]),Hi=(0,r.useCallback)(()=>{I({})},[]),Ki=(0,r.useCallback)(b=>{z(L=>L.includes(b)?L.filter(_=>_!==b):or.length-L.length<=2?L:[...L,b])},[]),Pa=(()=>{const b=y?.showSeconds!==!1,L=y?.dateDisplayMode||"both",_=y?.hour12===!0;try{const K={timeZone:an,hour12:_};(L==="time"||L==="both")&&(K.hour="2-digit",K.minute="2-digit",b&&(K.second="2-digit")),(L==="date"||L==="both")&&(K.weekday="long",K.day="numeric",K.month="2-digit",K.year="numeric");const W=new Intl.DateTimeFormat("uk",K).formatToParts(h),Z=Zt=>W.find(vt=>vt.type===Zt)?.value||"",Pe=L==="time"||L==="both"?`${Z("hour")}:${Z("minute")}${b?":"+Z("second"):""}${_&&Z("dayPeriod")?" "+Z("dayPeriod"):""}`:"",pt=L==="date"||L==="both"?`${Z("weekday")?Z("weekday").charAt(0).toUpperCase()+Z("weekday").slice(1):""}${Z("day")?`, ${Z("day")}.${Z("month")}.${Z("year")}`:""}`:"";return L==="both"?`${Pe} ${pt}`.trim():Pe||pt}catch{return`${String(h.getHours()).padStart(2,"0")}:${String(h.getMinutes()).padStart(2,"0")}${y?.showSeconds!==!1?`:${String(h.getSeconds()).padStart(2,"0")}`:""} ${h.toLocaleDateString("uk")}`}})(),Ui=Xs(),Mr=vc();(0,r.useEffect)(()=>{!Fe&&Mr.pathname!=="/"&&Ui("/")},[Fe,Ui,Mr.pathname]);const Wi=(b,L)=>{ue(_=>{const K=[..._],W=b+L;return W<0||W>=K.length||([K[b],K[W]]=[K[W],K[b]]),K})},zr=(0,r.useCallback)(()=>Ct(!0),[]),kd=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(fi,{heroDateString:Pa,onAddCity:Ar,startAnimation:!t,user:y,checkWeatherDanger:Aa,heroBg:j,setHeroBg:C,heroBg2:J,setHeroBg2:Q,heroBg3:he,setHeroBg3:te,heroBg4:D,setHeroBg4:N,isDarkMode:g,customHeroBgs:B,setCustomHeroBgs:H,heroBgMode:re,setHeroBgMode:xe,heroOverlayOpacity:ce,setHeroOverlayOpacity:ee,bgRatings:X,setBgRatings:me,slideshowInterval:oe,setSlideshowInterval:Te,slideshowTransition:Se,setSlideshowTransition:ut,filterCategory:It,setFilterCategory:Dt,heroBgZoom:ot,setHeroBgZoom:st,heroBgRotation:ft,setHeroBgRotation:nt,heroBgBlur:Oe,setHeroBgBlur:tt,heroBgBlurType:jt,heroBgPixelation:mt,setHeroBgPixelation:Ve,setHeroBgBlurType:Lt,heroBgFocal1:Ze,setHeroBgFocal1:Ue,heroBgFocal2:gt,setHeroBgFocal2:Ie,heroBgFocal3:De,setHeroBgFocal3:at,heroBgFocal4:St,setHeroBgFocal4:bt,heroBgPanEnabled:Ft,setHeroBgPanEnabled:yt,heroBgPanSpeed:Ot,setHeroBgPanSpeed:V,videoPlaybackSpeed:ne,setVideoPlaybackSpeed:pe,screenshots:An,selectedTimezone:an,setSelectedTimezone:Xn,customHolidayName:Me,isStickyBgMode:T,setCustomHolidayName:lt})}),(0,e.jsx)(yi,{className:"weather-section",$isDarkMode:F.weather??g,$isStickyBgMode:T,$isHidden:P.includes("weather"),children:(0,e.jsx)(ji,{section:Y.find(b=>b.key==="weather"),weatherCards:Ge,heroDateString:Pa,isDarkMode:F.weather??g,isLocationEnabled:ct,handleRefreshCard:Bn,handleDeleteCard:Tr,handleRenameCard:Ir,moveWeatherCard:Dr,setIsLocationEnabled:Ee,user:y,isAnyModalOpen:A,onUpdateUser:m,setHeroBg:C,customHeroBgs:B,setCustomHeroBgs:H,handleOpenRegister:zr,customHolidayName:Me,isStickyBgMode:T,setCustomHolidayName:lt,weatherCardLayout:Ae,isWeatherDetailsOpen:Fn,setIsWeatherDetailsOpen:hn,selectedWeatherCard:sn,setSelectedWeatherCard:Je,setIsFsActive:on,isStickyBgMode:T})})]}),jd=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{id:"hero",children:(0,e.jsx)(fi,{heroDateString:Pa,onAddCity:Ar,startAnimation:!t,user:y,isDarkMode:g,checkWeatherDanger:Aa,heroBg:j,setHeroBg:C,heroBg2:J,setHeroBg2:Q,heroBg3:he,setHeroBg3:te,heroBg4:D,setHeroBg4:N,customHeroBgs:B,setCustomHeroBgs:H,heroBgMode:re,setHeroBgMode:xe,heroOverlayOpacity:ce,setHeroOverlayOpacity:ee,bgRatings:X,setBgRatings:me,slideshowInterval:oe,setSlideshowInterval:Te,slideshowTransition:Se,setSlideshowTransition:ut,filterCategory:It,setFilterCategory:Dt,heroBgZoom:ot,setHeroBgZoom:st,heroBgRotation:ft,setHeroBgRotation:nt,heroBgBlur:Oe,setHeroBgBlur:tt,heroBgBlurType:jt,heroBgPixelation:mt,setHeroBgPixelation:Ve,setHeroBgBlurType:Lt,heroBgFocal1:Ze,setHeroBgFocal1:Ue,heroBgFocal2:gt,setHeroBgFocal2:Ie,heroBgFocal3:De,setHeroBgFocal3:at,heroBgFocal4:St,setHeroBgFocal4:bt,heroBgPanEnabled:Ft,setHeroBgPanEnabled:yt,heroBgPanSpeed:Ot,setHeroBgPanSpeed:V,videoPlaybackSpeed:ne,setVideoPlaybackSpeed:pe,screenshots:An,selectedTimezone:an,setSelectedTimezone:Xn,customHolidayName:Me,isStickyBgMode:T,setCustomHolidayName:lt})}),(0,e.jsx)("div",{className:"container",children:Y.map(b=>b.key!=="hero"&&(0,e.jsx)(yi,{$isDarkMode:F[b.key]??g,$isStickyBgMode:T,$isHidden:P.includes(b.key),children:(0,e.jsx)(ji,{section:b,weatherCards:Ge,isDarkMode:F[b.key]??g,isLocationEnabled:ct,handleRefreshCard:Bn,handleDeleteCard:Tr,handleRenameCard:Ir,moveWeatherCard:Dr,setIsLocationEnabled:Ee,user:y,isAnyModalOpen:A,onUpdateUser:m,setHeroBg:C,customHeroBgs:B,setCustomHeroBgs:H,handleOpenRegister:zr,customHolidayName:Me,isStickyBgMode:T,setCustomHolidayName:lt,weatherCardLayout:Ae,isWeatherDetailsOpen:Fn,setIsWeatherDetailsOpen:hn,selectedWeatherCard:sn,setSelectedWeatherCard:Je,heroDateString:Pa,setIsFsActive:on,isStickyBgMode:T})},b.key))})]});return(0,e.jsxs)(nu,{isDarkMode:g,children:[(0,e.jsx)(am,{user:y}),(0,e.jsx)(gm,{$locked:Ln&&en}),(0,e.jsx)(d0,{isLoading:t,isFadingOut:a,randomPhrase:l.text&&(0,e.jsxs)(Tm,{$isNew:l.isNew,children:[l.text,bn.map(b=>(0,e.jsx)(Sm,{$x:b.x,$y:b.y,$delay:b.delay,$isNew:l.isNew,children:"✧"},b.id))]})}),(0,e.jsx)(mm,{$isDarkMode:g,$isStickyBgMode:T,children:(0,e.jsxs)("div",{className:"App",children:[(0,e.jsx)("audio",{ref:Pt,onEnded:wn,preload:"auto"}),(0,e.jsx)("audio",{ref:Ut,onEnded:wn,preload:"auto"}),(0,e.jsx)("div",{className:"container",children:(0,e.jsx)(qu,{sfxVolume:cn,onOpenRegister:()=>Ct(!0),onOpenLogin:()=>E(!0),onOpenSettings:()=>ge(!0),onOpenVip:()=>rt(!0),onOpenShop:()=>ze(!0),onOpenAchievements:()=>Mt(!0),onOpenHelp:()=>Et(!0),onOpenInfo:()=>Vt(!0),onOpenAuthorsDirectory:()=>Jt(!0),onOpenOtherOptions:()=>ge(!0),onCloseInfo:()=>Vt(!1),isInfoOpen:Be,user:y,isDarkMode:g,toggleTheme:Vi,sectionThemes:F,hiddenSections:P,onToggleSectionVisibility:Ki,onToggleSectionTheme:Bi,onResetSectionThemes:Hi,currentAvatar:We,onLogout:vd,siteSections:Y,moveSiteSection:Wi,resetSiteSections:()=>ue([...or]),isRoutingMode:Fe,setIsRoutingMode:Yt,currentPath:Mr.pathname.substring(1),loadingStrategy:Gt,onSetLoadingStrategy:On,setIsFsActive:on,isStickyBgMode:T,setIsStickyBgMode:k})}),(0,e.jsx)("main",{children:(0,e.jsx)(r.Suspense,{fallback:null,children:(0,e.jsxs)($c,{children:[(0,e.jsx)(Lr,{path:"/",element:jd}),Y.map(b=>(0,e.jsx)(Lr,{path:`/${b.path}`,element:b.key==="weather"?kd:(0,e.jsx)("div",{className:"container",style:{paddingTop:"40px",minHeight:"80vh"},children:b.key==="hero"?(0,e.jsx)(fi,{heroDateString:Pa,onAddCity:Ar,startAnimation:!t,user:y,isDarkMode:F.hero??g,checkWeatherDanger:Aa,heroBg:j,setHeroBg:C,heroBg2:J,setHeroBg2:Q,heroBg3:he,setHeroBg3:te,heroBg4:D,setHeroBg4:N,customHeroBgs:B,setCustomHeroBgs:H,heroBgMode:re,setHeroBgMode:xe,heroOverlayOpacity:ce,setHeroOverlayOpacity:ee,bgRatings:X,setBgRatings:me,slideshowInterval:oe,setSlideshowInterval:Te,slideshowTransition:Se,setSlideshowTransition:ut,filterCategory:It,setFilterCategory:Dt,heroBgZoom:ot,setHeroBgZoom:st,heroBgRotation:ft,setHeroBgRotation:nt,heroBgBlur:Oe,setHeroBgBlur:tt,heroBgBlurType:jt,heroBgPixelation:mt,setHeroBgPixelation:Ve,heroBgFocal1:Ze,setHeroBgFocal1:Ue,heroBgFocal2:gt,setHeroBgFocal2:Ie,heroBgFocal3:De,setHeroBgFocal3:at,heroBgFocal4:St,setHeroBgFocal4:bt,heroBgPanEnabled:Ft,setHeroBgPanEnabled:yt,heroBgPanSpeed:Ot,setHeroBgPanSpeed:V,videoPlaybackSpeed:ne,setVideoPlaybackSpeed:pe,screenshots:An,selectedTimezone:an,setSelectedTimezone:Xn,customHolidayName:Me,isStickyBgMode:T,setCustomHolidayName:lt}):(0,e.jsx)(yi,{$isDarkMode:F[b.key]??g,$isStickyBgMode:T,$isHidden:!1,children:(0,e.jsx)(ji,{section:b,weatherCards:Ge,isDarkMode:F[b.key]??g,isLocationEnabled:ct,handleRefreshCard:Bn,handleDeleteCard:Tr,handleRenameCard:Ir,moveWeatherCard:Dr,setIsLocationEnabled:Ee,user:y,isAnyModalOpen:A,onUpdateUser:m,setHeroBg:C,customHeroBgs:B,setCustomHeroBgs:H,handleOpenRegister:zr,customHolidayName:Me,isStickyBgMode:T,setCustomHolidayName:lt,isWeatherDetailsOpen:Fn,setIsWeatherDetailsOpen:hn,selectedWeatherCard:sn,setSelectedWeatherCard:Je,setIsFsActive:on,isStickyBgMode:T})})})},b.key)),(0,e.jsx)(Lr,{path:"*",element:(0,e.jsx)(wp,{})})]})})}),(0,e.jsxs)(r.Suspense,{fallback:null,children:[_e&&(0,e.jsx)(cm,{onClose:()=>Ct(!1),onRegister:b=>{m(b),Ct(!1)},availableAvatars:Bs,isDarkMode:g}),w&&(0,e.jsx)(pm,{onClose:()=>E(!1),onLogin:b=>{m(b),E(!1)}}),(q||zn)&&(0,e.jsx)(um,{onClose:()=>{ge(!1),$n(!1)},user:y,availableAvatars:Bs,onUpdate:m,weatherCardLayout:Ae,onUpdateLayout:de,showUpdateTimer:zt,setShowUpdateTimer:Xt,isDarkMode:g,bgMusicEnabled:se,setBgMusicEnabled:Tt,autoMuteBgMusic:Bt,setAutoMuteBgMusic:G,bgMusicSource:ie,setBgMusicSource:He,customBgTracks:$t,setCustomBgTracks:Rn,bgMusicVolume:dn,setBgMusicVolume:Tn,bgMusicSpeed:Qt,setBgMusicSpeed:pn,bgMusicMode:Re,setBgMusicMode:Ke,bgMusicShuffle:Le,setBgMusicShuffle:dt,libraryBgSettings:un,setLibraryBgSettings:aa,activeBgTrackId:Xe,setActiveBgTrackId:Ht,onResetBgPosition:ia,sfxVolume:cn,setSfxVolume:_n,bgAudioRef:Pt,bgAudioRef2:Ut,onToggleTheme:Vi,siteSections:Y,moveSiteSection:Wi,resetSiteSections:()=>ue([...or]),sectionThemes:F,hiddenSections:P,onToggleSectionVisibility:Ki,onToggleSectionTheme:Bi,onResetSectionThemes:Hi,isRoutingMode:Fe,setIsRoutingMode:Yt,loadingStrategy:Gt,onSetLoadingStrategy:On,isStickyBgMode:T,onToggleStickyBg:()=>k(!T)}),qe&&(0,e.jsx)(VipModal,{onClose:()=>rt(!1)}),be&&(0,e.jsx)(lm,{onClose:()=>ze(!1),hasVip:!!y}),qt&&(0,e.jsx)(AchivmentsModal,{onClose:()=>Mt(!1),isDarkMode:g}),ye&&(0,e.jsx)(bi,{isDarkMode:g,isOpen:ye,onClose:()=>Et(!1)}),Vn&&(0,e.jsx)(bi,{isOpen:Vn,onClose:()=>ra(!1)}),Be&&(0,e.jsx)(bi,{onClose:()=>Vt(!1)}),(0,e.jsx)(lf,{isOpen:$e,onClose:()=>Jt(!1)}),(0,e.jsx)(fm,{isOpen:Fn,onClose:()=>hn(!1),card:sn,isDarkMode:g})]}),zt&&(0,e.jsx)(im,{content:"Налаштування вигляду",isDarkMode:g,children:(0,e.jsxs)(Cm,{$isDarkMode:g,onClick:wd,"aria-label":"Показує час оновлення картки теперішньої погоди і ШІ прогноз.",children:["Оновлення погоди через: ",Math.floor(Qe/60),":",(Qe%60).toString().padStart(2,"0")]})}),(0,e.jsx)(Wh,{isStickyBgMode:T})]})}),O&&(0,e.jsx)(Fp,{isDarkMode:g,endTime:M,message:fe})]})};function Im(){return(0,e.jsx)(U0,{children:(0,e.jsx)(Am,{})})}window.location.hostname==="www.stuxia.com"&&window.location.replace("https://stuxia.com"+window.location.pathname+window.location.search);window.addEventListener("error",t=>{if(t.message.includes("AbortError")||t.message.includes("aborted"))return t.preventDefault(),!1});window.addEventListener("unhandledrejection",t=>{if(t.reason?.name==="AbortError"||t.reason?.message?.includes("aborted"))return t.preventDefault(),!1});Uc.createRoot(document.getElementById("root")).render((0,e.jsx)(tc,{store:qc,children:(0,e.jsxs)(Wd,{children:[(0,e.jsx)(Im,{}),(0,e.jsx)(Bd,{position:"bottom-right",reverseOrder:!1})]})}));export{h0 as _,Ai as a,Ra as c,Lm as d,oa as f,nl as g,Li as h,Ei as i,td as l,Yl as m,ud as n,nd as o,Fa as p,ff as r,eu as s,Ig as t,Uo as u,g0 as v,kr as y};
