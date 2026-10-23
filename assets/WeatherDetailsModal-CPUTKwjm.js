import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{r}from"./vendor-i18n-4XGuJdvG.js";import{n as a,t as i}from"./vendor-motion-kBML52GK.js";import{n as s}from"./vendor-markdown-ADGh9TTx.js";import{i as n}from"./styled-components.browser.esm-_LeWE6wZ.js";import{G as t,O as o,T as l,V as d,W as c,j as p,k as x}from"./vendor-ui-CaQ2KOJJ.js";import{b as h,h as g,i as b,n as m,r as f}from"./index-YdQqwtry.js";var u=e(r()),j=s(),$=n(i.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 16px;
`,v=n(i.div)`
  background: ${e=>e.$isDarkMode?"linear-gradient(145deg, rgba(20, 20, 32, 0.95), rgba(12, 12, 20, 0.98))":"linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(240, 244, 248, 0.98))"};
  background-image: ${e=>e.$cityImage?`linear-gradient(180deg, rgba(10, 15, 30, 0.78) 0%, rgba(10, 15, 30, 0.92) 100%), url(${e.$cityImage})`:"none"};
  background-size: cover;
  background-position: center;
  color: ${e=>e.$isDarkMode?"#fff":"#1a1a1a"};
  border-radius: 20px;
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.3)":"rgba(0, 140, 255, 0.25)"};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 238, 255, 0.15);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00eeff;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 14px;
    max-height: 95vh;
  }
`,w=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
`,k=n.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(135deg, #00eeff 0%, #ffb36c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`,y=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,N=n(i.button)`
  background: rgba(0, 0, 0, 0.45);
  color: #00eeff;
  border: 1px solid rgba(0, 238, 255, 0.4);
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(6px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 238, 255, 0.2);
    box-shadow: 0 0 12px rgba(0, 238, 255, 0.4);
    color: #fff;
  }
`,D=n(i.button)`
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  color: white;
  border: none;
  padding: 7px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(255, 65, 108, 0.35);

  &:hover {
    box-shadow: 0 6px 20px rgba(255, 65, 108, 0.5);
  }
`,_=n(i.div)`
  background: ${e=>e.$isDarkMode?"rgba(15, 20, 32, 0.75)":"rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
  border-radius: 16px;
  padding: 16px;
  margin-top: 14px;

  h3 {
    margin-top: 0;
    color: #00eeff;
    font-size: 16px;
  }
`,C=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
`,M=n(i.div)`
  background: ${e=>e.$isDarkMode?"linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)":"linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)"};
  border: 1px solid ${e=>e.$borderColor||"rgba(0, 238, 255, 0.25)"};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  .icon {
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: ${e=>e.$iconBg||"rgba(0, 238, 255, 0.15)"};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .label {
    font-size: 11px;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .val {
    font-size: 14px;
    font-weight: 800;
    color: ${e=>e.$valColor||"#fff"};
  }
`,z=n.span`
  color: ${e=>e.$color||"#ff6b6b"};
  font-weight: bold;
  background: ${e=>e.$color||"#ff6b6b"}22;
  padding: 2px 7px;
  border-radius: 6px;
  border: 1px solid ${e=>e.$color||"#ff6b6b"}44;
`,S=n.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;

  button {
    background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
    color: ${e=>e.$isDarkMode?"#aaa":"#555"};
    border: 1px solid transparent;
    padding: 8px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    transition: all 0.25s ease;

    &.active {
      background: linear-gradient(135deg, #00eeff 0%, #008cff 100%);
      color: #000;
      box-shadow: 0 4px 15px rgba(0, 238, 255, 0.4);
    }

    &:hover:not(.active) {
      background: rgba(0, 238, 255, 0.15);
      color: #00eeff;
    }
  }
`,T=n.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;

    th,
    td {
      padding: 10px 8px;
      text-align: center;
      border: 1px solid ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
    }

    th {
      background: ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.15)":"rgba(0, 140, 255, 0.15)"};
      color: ${e=>e.$isDarkMode?"#00eeff":"#0055ff"};
      font-weight: 800;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.5px;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    tbody tr {
      transition: background 0.2s ease;
      &:hover {
        background: ${e=>e.$isDarkMode?"rgba(0, 238, 255, 0.08)":"rgba(0, 140, 255, 0.08)"};
      }
    }

    tbody tr:nth-child(odd) {
      background: ${e=>e.$isDarkMode?"rgba(255, 255, 255, 0.02)":"rgba(0, 0, 0, 0.02)"};
    }
  }
`,H=({isOpen:e,onClose:r,card:i,isDarkMode:s})=>{const[n,H]=(0,u.useState)("hourly"),[F,B]=(0,u.useState)(0);if(!e||!i)return null;const I=i.current||{},E=i.hourly||[],P=i.daily16||[],W=h(E),O=W[F]?.items||[],R=P.find(e=>e.date===W[F]?.label)||P[0],G=e=>{if(!e)return"—";const r=new Date(e);return isNaN(r.getTime())?"—":`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`},V=(e=>{try{const r=new Date(e||Date.now()),a=m(r),s=f(r,i.lat||50.45,i.lon||30.52),n=a.phase;let t="";t=0===n?"🌑 Молодик":n<.25?"🌒 Зростаючий серп":.25===n?"🌓 Перша чверть":n<.5?"🌔 Зростаючий місяць":.5===n?"🌕 Повня":n<.75?"🌖 Спадаючий місяць":.75===n?"🌗 Остання чверть":"🌘 Спадаючий серп";const o=e=>{if(!e||isNaN(new Date(e).getTime()))return"Не сходить";const r=new Date(e);return`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`},l=s.rise?o(s.rise):"Не сходить";return{phaseText:t,rise:l,set:s.set?o(s.set):"Не заходить"}}catch(r){return{phaseText:"—",rise:"—",set:"—"}}})(R?.fullDate),q=(e=>{try{const r=new Date(e||Date.now()),a=b(r,i.lat||50.45,i.lon||30.52),s=e=>{if(!e||isNaN(new Date(e).getTime()))return"—";const r=new Date(e);return`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`};return{civilDawn:s(a.dawn),civilDusk:s(a.dusk),nauticalDawn:s(a.nauticalDawn),nauticalDusk:s(a.nauticalDusk),astroDawn:s(a.nightEnd),astroDusk:s(a.night)}}catch(r){return{civilDawn:"—",civilDusk:"—",nauticalDawn:"—",nauticalDusk:"—",astroDawn:"—",astroDusk:"—"}}})(R?.fullDate),A=((e,r)=>{if(!e||!r)return"—";const a=new Date(e),i=new Date(r);if(isNaN(a.getTime())||isNaN(i.getTime()))return"—";const s=i-a;return s<0?"—":`${Math.floor(s/36e5)}г ${Math.floor(s%36e5/6e4)}хв`})(R?.sunrise,R?.sunset);return(0,j.jsx)(a,{children:(0,j.jsx)($,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:(0,j.jsxs)(v,{$isDarkMode:s,$cityImage:i.cityImage,initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>e.stopPropagation(),children:[(0,j.jsxs)(w,{children:[(0,j.jsxs)(k,{children:["🏙️ Детальний прогноз: ",i.locationName]}),(0,j.jsxs)(y,{children:[i.cityImage&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(N,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{e.stopPropagation();const r=document.createElement("a");r.href=i.cityImage,r.download=`${i.locationName}_фото.jpg`,r.target="_blank",r.click()},children:[(0,j.jsx)(p,{size:12})," Завантажити фото"]}),(0,j.jsxs)(N,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{e.stopPropagation();const r=window.open("");r.document.write(`<img src="${i.cityImage}" style="width:100%"/>`),r.setTimeout(()=>r.print(),500)},children:[(0,j.jsx)(d,{size:12})," Друк"]})]}),(0,j.jsxs)(D,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:r,children:[(0,j.jsx)(t,{size:13})," Закрити"]})]})]}),(0,j.jsxs)(S,{$isDarkMode:s,children:[(0,j.jsxs)("button",{className:"hourly"===n?"active":"",onClick:()=>H("hourly"),children:["По годинам (",E.length,"г)"]}),(0,j.jsx)("button",{className:"daily"===n?"active":"",onClick:()=>H("daily"),children:"По днях (16д)"})]}),"hourly"===n&&E.length>0&&(0,j.jsxs)(_,{$isDarkMode:s,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},children:[(0,j.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:W.length>1&&(0,j.jsx)("select",{value:F,onChange:e=>B(Number(e.target.value)),style:{background:s?"#1f2430":"#ffffff",color:s?"#00eeff":"#0066ff",border:"1.5px solid #00eeff",padding:"6px 14px",borderRadius:"10px",cursor:"pointer",fontSize:"13px",fontWeight:"bold",outline:"none",boxShadow:"0 4px 12px rgba(0, 238, 255, 0.2)"},children:W.map((e,r)=>(0,j.jsxs)("option",{value:r,children:["📅 ",e.title||e.label]},e.label))})}),(0,j.jsxs)(C,{children:[(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(255, 215, 0, 0.4)",$iconBg:"rgba(255, 215, 0, 0.15)",$valColor:"#ffd700",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:(0,j.jsx)(c,{style:{color:"#ffd700"}})}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Схід / Захід сонця"}),(0,j.jsxs)("span",{className:"val",children:[G(R?.sunrise)," — ",G(R?.sunset)]})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(52, 152, 219, 0.4)",$iconBg:"rgba(52, 152, 219, 0.15)",$valColor:"#3498db",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:(0,j.jsx)(l,{style:{color:"#3498db"}})}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Тривалість дня"}),(0,j.jsx)("span",{className:"val",children:A})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(255, 179, 108, 0.4)",$iconBg:"rgba(255, 179, 108, 0.15)",$valColor:"#ffb36c",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:"🏙️"}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Цивільні сутінки"}),(0,j.jsxs)("span",{className:"val",children:[q.civilDawn," — ",q.civilDusk]})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(155, 89, 182, 0.4)",$iconBg:"rgba(155, 89, 182, 0.15)",$valColor:"#be90d4",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:"⚓"}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Навігаційні сутінки"}),(0,j.jsxs)("span",{className:"val",children:[q.nauticalDawn," — ",q.nauticalDusk]})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(75, 0, 130, 0.4)",$iconBg:"rgba(75, 0, 130, 0.15)",$valColor:"#a855f7",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:"🔭"}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Астрономічні сутінки"}),(0,j.jsxs)("span",{className:"val",children:[q.astroDawn," — ",q.astroDusk]})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(236, 240, 241, 0.4)",$iconBg:"rgba(236, 240, 241, 0.15)",$valColor:"#e0e0e0",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:(0,j.jsx)(o,{style:{color:"#ecf0f1"}})}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Схід / Захід місяця"}),(0,j.jsxs)("span",{className:"val",children:[V.rise," — ",V.set]})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(155, 89, 182, 0.4)",$iconBg:"rgba(155, 89, 182, 0.15)",$valColor:"#be90d4",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:(0,j.jsx)(x,{style:{color:"#9b59b6"}})}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Фаза місяця"}),(0,j.jsx)("span",{className:"val",children:V.phaseText})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(0, 238, 255, 0.4)",$iconBg:"rgba(0, 238, 255, 0.15)",$valColor:"#00eeff",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:"❄️"}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Сніг / Замерзання ґрунту"}),(0,j.jsxs)("span",{className:"val",children:[I.snow_depth?`${(100*I.snow_depth).toFixed(1)} см`:"0 см"," | Ґрунт: ",I.soil_temperature_0cm??0,"°C"]})]})]}),(0,j.jsxs)(M,{$isDarkMode:s,$borderColor:"rgba(255, 153, 0, 0.4)",$iconBg:"rgba(255, 153, 0, 0.15)",$valColor:"#ff9900",whileHover:{scale:1.02},children:[(0,j.jsx)("div",{className:"icon",children:"💧"}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("span",{className:"label",children:"Випаровування (ET0)"}),(0,j.jsx)("span",{className:"val",children:I.evapotranspiration?`${I.evapotranspiration.toFixed(2)} мм`:"0 мм"})]})]})]}),(0,j.jsx)(T,{$isDarkMode:s,children:(0,j.jsxs)("table",{children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Час"}),(0,j.jsxs)("th",{children:["Температура",(0,j.jsx)("br",{}),"(Відчувається)"]}),(0,j.jsxs)("th",{children:["Вітер (м/с)",(0,j.jsx)("br",{}),"Напрям"]}),(0,j.jsxs)("th",{children:["Вологість",(0,j.jsx)("br",{}),"Точка роси"]}),(0,j.jsx)("th",{children:"Опади / Сніг"}),(0,j.jsx)("th",{children:"Замерзання 0°C / Ґрунт"}),(0,j.jsx)("th",{children:"Випаровування"}),(0,j.jsx)("th",{children:"Тиск / Хмарність"})]})}),(0,j.jsx)("tbody",{children:O.map((e,r)=>(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:(0,j.jsx)("strong",{children:e.time})}),(0,j.jsxs)("td",{children:[void 0!==e.tempNum&&(e.tempNum>30||e.tempNum<-30)?(0,j.jsxs)(z,{$color:e.tempNum>30?"#ff6b6b":e.tempNum<-30?"#4169e1":"#ffb36c",children:[e.tempNum,"°C"]}):`${void 0!==e.tempNum?e.tempNum:"—"}°C`,(0,j.jsx)("br",{}),(0,j.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["(",void 0!==e.feels_like?e.feels_like:"—",")"]})]}),(0,j.jsxs)("td",{children:[void 0!==e.windNum&&e.windNum>10?(0,j.jsxs)(z,{$color:"#ff9800",children:[e.windNum.toFixed(1)," м/с"]}):`${void 0!==e.windNum?e.windNum.toFixed(1):"—"}`,e.wind_gusts_10m?` (${e.wind_gusts_10m.toFixed(1)})`:"",(0,j.jsx)("br",{}),(0,j.jsx)("span",{style:{fontSize:"10px"},children:g(e.wind_direction_10m)})]}),(0,j.jsxs)("td",{children:[e.relative_humidity_2m??"—","%",(0,j.jsx)("br",{}),(0,j.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["TR: ",void 0!==e.dew_point_2m?`${e.dew_point_2m}°C`:"—"]})]}),(0,j.jsxs)("td",{children:[void 0!==e.precipitation?e.precipitation.toFixed(1):"—"," мм",(0,j.jsx)("br",{}),(0,j.jsx)("span",{style:{fontSize:"10px",opacity:.7},children:e.snow_depth?`Сніг: ${(100*e.snow_depth).toFixed(1)}см`:"Без снігу"})]}),(0,j.jsxs)("td",{children:[e.freezing_level_height?`${e.freezing_level_height}м`:"—",(0,j.jsx)("br",{}),(0,j.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["Ґрунт: ",void 0!==e.soil_temperature_0cm?`${e.soil_temperature_0cm}°C`:"—"]})]}),(0,j.jsx)("td",{children:void 0!==e.evapotranspiration?`${e.evapotranspiration.toFixed(2)} мм`:"0 мм"}),(0,j.jsxs)("td",{children:[e.pressure_msl?Math.round(e.pressure_msl):"—"," hPa",(0,j.jsx)("br",{}),(0,j.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["Хмари: ",e.cloud_cover??"—","%"]})]})]},r))})]})})]}),"daily"===n&&P.length>0&&(0,j.jsx)(_,{$isDarkMode:s,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},children:(0,j.jsx)(T,{$isDarkMode:s,children:(0,j.jsxs)("table",{children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Дата"}),(0,j.jsx)("th",{children:"День"}),(0,j.jsx)("th",{children:"Ніч"}),(0,j.jsx)("th",{children:"Вітер"}),(0,j.jsx)("th",{children:"УФ"}),(0,j.jsx)("th",{children:"Опади %"}),(0,j.jsx)("th",{children:"Дощ (мм)"}),(0,j.jsx)("th",{children:"Випаровування (ET0)"})]})}),(0,j.jsx)("tbody",{children:P.map((e,r)=>(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:(0,j.jsx)("strong",{children:e.date})}),(0,j.jsx)("td",{children:parseInt(e.temp_day)>30||parseInt(e.temp_day)<-30?(0,j.jsx)(z,{$color:parseInt(e.temp_day)>30?"#ff6b6b":"#4169e1",children:e.temp_day}):e.temp_day}),(0,j.jsx)("td",{children:e.temp_night}),(0,j.jsx)("td",{children:parseFloat(e.wind_speed)>10?(0,j.jsx)(z,{$color:"#ff9800",children:e.wind_speed}):e.wind_speed}),(0,j.jsx)("td",{children:e.uv_index>7?(0,j.jsx)(z,{$color:"#ff6b6b",children:e.uv_index}):e.uv_index}),(0,j.jsxs)("td",{children:[e.precipitation_probability_max??"—","%"]}),(0,j.jsx)("td",{children:void 0!==e.rain_sum?e.rain_sum.toFixed(1):"—"}),(0,j.jsx)("td",{children:void 0!==e.evapotranspiration?`${e.evapotranspiration.toFixed(2)} мм`:"—"})]},r))})]})})})]})})})};export{H as default};
//# sourceMappingURL=WeatherDetailsModal-CPUTKwjm.js.map