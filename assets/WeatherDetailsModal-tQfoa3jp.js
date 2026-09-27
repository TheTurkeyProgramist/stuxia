import{o as R}from"./rolldown-runtime-BNNRdYrd.js";import{At as W,Dr as b,Dt as G,Ht as L,Kr as l,Or as q,Ot as K,Ut as U,ci as J,j as Q,n as V,r as X,si as Y,t as Z,zt as ee}from"./vendor-react-BrnrJ3qF.js";import{f as ae,v as ie}from"./index-gM6wV9Mf.js";var M=R(Y()),e=J(),re=l(b.div)`
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
`,se=l(b.div)`
  background: ${i=>i.$isDarkMode?"linear-gradient(145deg, rgba(20, 20, 32, 0.95), rgba(12, 12, 20, 0.98))":"linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(240, 244, 248, 0.98))"};
  background-image: ${i=>i.$cityImage?`linear-gradient(180deg, rgba(10, 15, 30, 0.78) 0%, rgba(10, 15, 30, 0.92) 100%), url(${i.$cityImage})`:"none"};
  background-size: cover;
  background-position: center;
  color: ${i=>i.$isDarkMode?"#fff":"#1a1a1a"};
  border-radius: 20px;
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  border: 1px solid ${i=>i.$isDarkMode?"rgba(0, 238, 255, 0.3)":"rgba(0, 140, 255, 0.25)"};
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
`,te=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
`,ne=l.h2`
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
`,oe=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,T=l(b.button)`
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
`,le=l(b.button)`
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
`,z=l(b.div)`
  background: ${i=>i.$isDarkMode?"rgba(15, 20, 32, 0.75)":"rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(10px);
  border: 1px solid ${i=>i.$isDarkMode?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
  border-radius: 16px;
  padding: 16px;
  margin-top: 14px;

  h3 {
    margin-top: 0;
    color: #00eeff;
    font-size: 16px;
  }
`,de=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
`,x=l(b.div)`
  background: ${i=>i.$isDarkMode?"linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)":"linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)"};
  border: 1px solid ${i=>i.$borderColor||"rgba(0, 238, 255, 0.25)"};
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
    background: ${i=>i.$iconBg||"rgba(0, 238, 255, 0.15)"};
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
    color: ${i=>i.$valColor||"#fff"};
  }
`,m=l.span`
  color: ${i=>i.$color||"#ff6b6b"};
  font-weight: bold;
  background: ${i=>i.$color||"#ff6b6b"}22;
  padding: 2px 7px;
  border-radius: 6px;
  border: 1px solid ${i=>i.$color||"#ff6b6b"}44;
`,ce=l.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;

  button {
    background: ${i=>i.$isDarkMode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
    color: ${i=>i.$isDarkMode?"#aaa":"#555"};
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
`,S=l.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${i=>i.$isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;

    th,
    td {
      padding: 10px 8px;
      text-align: center;
      border: 1px solid ${i=>i.$isDarkMode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
    }

    th {
      background: ${i=>i.$isDarkMode?"rgba(0, 238, 255, 0.15)":"rgba(0, 140, 255, 0.15)"};
      color: ${i=>i.$isDarkMode?"#00eeff":"#0055ff"};
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
        background: ${i=>i.$isDarkMode?"rgba(0, 238, 255, 0.08)":"rgba(0, 140, 255, 0.08)"};
      }
    }

    tbody tr:nth-child(odd) {
      background: ${i=>i.$isDarkMode?"rgba(255, 255, 255, 0.02)":"rgba(0, 0, 0, 0.02)"};
    }
  }
`,be=({isOpen:i,onClose:k,card:n,isDarkMode:s})=>{const[u,N]=(0,M.useState)("hourly"),[v,H]=(0,M.useState)(0);if(!i||!n)return null;const h=n.current||{},$=n.hourly||[],f=n.daily16||[],j=ie($),F=j[v]?.items||[],p=f.find(a=>a.date===j[v]?.label)||f[0],D=a=>{if(!a)return"—";const r=new Date(a);return isNaN(r.getTime())?"—":`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`},B=a=>{try{const r=new Date(a||Date.now()),c=Z(r),o=V(r,n.lat||50.45,n.lon||30.52),t=c.phase;let d="";t===0?d="🌑 Молодик":t<.25?d="🌒 Зростаючий серп":t===.25?d="🌓 Перша чверть":t<.5?d="🌔 Зростаючий місяць":t===.5?d="🌕 Повня":t<.75?d="🌖 Спадаючий місяць":t===.75?d="🌗 Остання чверть":d="🌘 Спадаючий серп";const _=w=>{if(!w||isNaN(new Date(w).getTime()))return"Не сходить";const C=new Date(w);return`${String(C.getHours()).padStart(2,"0")}:${String(C.getMinutes()).padStart(2,"0")}`},E=o.rise?_(o.rise):"Не сходить",O=o.set?_(o.set):"Не заходить";return{phaseText:d,rise:E,set:O}}catch{return{phaseText:"—",rise:"—",set:"—"}}},I=a=>{try{const r=new Date(a||Date.now()),c=X(r,n.lat||50.45,n.lon||30.52),o=t=>{if(!t||isNaN(new Date(t).getTime()))return"—";const d=new Date(t);return`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`};return{civilDawn:o(c.dawn),civilDusk:o(c.dusk),nauticalDawn:o(c.nauticalDawn),nauticalDusk:o(c.nauticalDusk),astroDawn:o(c.nightEnd),astroDusk:o(c.night)}}catch{return{civilDawn:"—",civilDusk:"—",nauticalDawn:"—",nauticalDusk:"—",astroDawn:"—",astroDusk:"—"}}},A=(a,r)=>{if(!a||!r)return"—";const c=new Date(a),o=new Date(r);if(isNaN(c.getTime())||isNaN(o.getTime()))return"—";const t=o-c;return t<0?"—":`${Math.floor(t/36e5)}г ${Math.floor(t%36e5/6e4)}хв`},y=B(p?.fullDate),g=I(p?.fullDate),P=A(p?.sunrise,p?.sunset);return(0,e.jsx)(q,{children:(0,e.jsx)(re,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:k,children:(0,e.jsxs)(se,{$isDarkMode:s,$cityImage:n.cityImage,initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},transition:{type:"spring",damping:25,stiffness:300},onClick:a=>a.stopPropagation(),children:[(0,e.jsxs)(te,{children:[(0,e.jsxs)(ne,{children:["🏙️ Детальний прогноз: ",n.locationName]}),(0,e.jsxs)(oe,{children:[n.cityImage&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(T,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:a=>{a.stopPropagation();const r=document.createElement("a");r.href=n.cityImage,r.download=`${n.locationName}_фото.jpg`,r.target="_blank",r.click()},children:[(0,e.jsx)(W,{size:12})," Завантажити фото"]}),(0,e.jsxs)(T,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:a=>{a.stopPropagation();const r=window.open("");r.document.write(`<img src="${n.cityImage}" style="width:100%"/>`),r.setTimeout(()=>r.print(),500)},children:[(0,e.jsx)(ee,{size:12})," Друк"]})]}),(0,e.jsxs)(le,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:k,children:[(0,e.jsx)(U,{size:13})," Закрити"]})]})]}),(0,e.jsxs)(ce,{$isDarkMode:s,children:[(0,e.jsxs)("button",{className:u==="hourly"?"active":"",onClick:()=>N("hourly"),children:["По годинам (",$.length,"г)"]}),(0,e.jsx)("button",{className:u==="daily"?"active":"",onClick:()=>N("daily"),children:"По днях (16д)"})]}),u==="hourly"&&$.length>0&&(0,e.jsxs)(z,{$isDarkMode:s,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:j.length>1&&(0,e.jsx)("select",{value:v,onChange:a=>H(Number(a.target.value)),style:{background:s?"#1f2430":"#ffffff",color:s?"#00eeff":"#0066ff",border:"1.5px solid #00eeff",padding:"6px 14px",borderRadius:"10px",cursor:"pointer",fontSize:"13px",fontWeight:"bold",outline:"none",boxShadow:"0 4px 12px rgba(0, 238, 255, 0.2)"},children:j.map((a,r)=>(0,e.jsxs)("option",{value:r,children:["📅 ",a.title||a.label]},a.label))})}),(0,e.jsxs)(de,{children:[(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(255, 215, 0, 0.4)",$iconBg:"rgba(255, 215, 0, 0.15)",$valColor:"#ffd700",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:(0,e.jsx)(L,{style:{color:"#ffd700"}})}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Схід / Захід сонця"}),(0,e.jsxs)("span",{className:"val",children:[D(p?.sunrise)," — ",D(p?.sunset)]})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(52, 152, 219, 0.4)",$iconBg:"rgba(52, 152, 219, 0.15)",$valColor:"#3498db",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:(0,e.jsx)(Q,{style:{color:"#3498db"}})}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Тривалість дня"}),(0,e.jsx)("span",{className:"val",children:P})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(255, 179, 108, 0.4)",$iconBg:"rgba(255, 179, 108, 0.15)",$valColor:"#ffb36c",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:"🏙️"}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Цивільні сутінки"}),(0,e.jsxs)("span",{className:"val",children:[g.civilDawn," — ",g.civilDusk]})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(155, 89, 182, 0.4)",$iconBg:"rgba(155, 89, 182, 0.15)",$valColor:"#be90d4",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:"⚓"}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Навігаційні сутінки"}),(0,e.jsxs)("span",{className:"val",children:[g.nauticalDawn," — ",g.nauticalDusk]})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(75, 0, 130, 0.4)",$iconBg:"rgba(75, 0, 130, 0.15)",$valColor:"#a855f7",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:"🔭"}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Астрономічні сутінки"}),(0,e.jsxs)("span",{className:"val",children:[g.astroDawn," — ",g.astroDusk]})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(236, 240, 241, 0.4)",$iconBg:"rgba(236, 240, 241, 0.15)",$valColor:"#e0e0e0",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:(0,e.jsx)(G,{style:{color:"#ecf0f1"}})}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Схід / Захід місяця"}),(0,e.jsxs)("span",{className:"val",children:[y.rise," — ",y.set]})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(155, 89, 182, 0.4)",$iconBg:"rgba(155, 89, 182, 0.15)",$valColor:"#be90d4",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:(0,e.jsx)(K,{style:{color:"#9b59b6"}})}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Фаза місяця"}),(0,e.jsx)("span",{className:"val",children:y.phaseText})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(0, 238, 255, 0.4)",$iconBg:"rgba(0, 238, 255, 0.15)",$valColor:"#00eeff",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:"❄️"}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Сніг / Замерзання ґрунту"}),(0,e.jsxs)("span",{className:"val",children:[h.snow_depth?`${(h.snow_depth*100).toFixed(1)} см`:"0 см"," | Ґрунт: ",h.soil_temperature_0cm??0,"°C"]})]})]}),(0,e.jsxs)(x,{$isDarkMode:s,$borderColor:"rgba(255, 153, 0, 0.4)",$iconBg:"rgba(255, 153, 0, 0.15)",$valColor:"#ff9900",whileHover:{scale:1.02},children:[(0,e.jsx)("div",{className:"icon",children:"💧"}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsx)("span",{className:"label",children:"Випаровування (ET0)"}),(0,e.jsx)("span",{className:"val",children:h.evapotranspiration?`${h.evapotranspiration.toFixed(2)} мм`:"0 мм"})]})]})]}),(0,e.jsx)(S,{$isDarkMode:s,children:(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Час"}),(0,e.jsxs)("th",{children:["Температура",(0,e.jsx)("br",{}),"(Відчувається)"]}),(0,e.jsxs)("th",{children:["Вітер (м/с)",(0,e.jsx)("br",{}),"Напрям"]}),(0,e.jsxs)("th",{children:["Вологість",(0,e.jsx)("br",{}),"Точка роси"]}),(0,e.jsx)("th",{children:"Опади / Сніг"}),(0,e.jsx)("th",{children:"Замерзання 0°C / Ґрунт"}),(0,e.jsx)("th",{children:"Випаровування"}),(0,e.jsx)("th",{children:"Тиск / Хмарність"})]})}),(0,e.jsx)("tbody",{children:F.map((a,r)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)("strong",{children:a.time})}),(0,e.jsxs)("td",{children:[a.tempNum!==void 0&&(a.tempNum>30||a.tempNum<-30)?(0,e.jsxs)(m,{$color:a.tempNum>30?"#ff6b6b":a.tempNum<-30?"#4169e1":"#ffb36c",children:[a.tempNum,"°C"]}):`${a.tempNum!==void 0?a.tempNum:"—"}°C`,(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["(",a.feels_like!==void 0?a.feels_like:"—",")"]})]}),(0,e.jsxs)("td",{children:[a.windNum!==void 0&&a.windNum>10?(0,e.jsxs)(m,{$color:"#ff9800",children:[a.windNum.toFixed(1)," м/с"]}):`${a.windNum!==void 0?a.windNum.toFixed(1):"—"}`,a.wind_gusts_10m?` (${a.wind_gusts_10m.toFixed(1)})`:"",(0,e.jsx)("br",{}),(0,e.jsx)("span",{style:{fontSize:"10px"},children:ae(a.wind_direction_10m)})]}),(0,e.jsxs)("td",{children:[a.relative_humidity_2m??"—","%",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["TR: ",a.dew_point_2m!==void 0?`${a.dew_point_2m}°C`:"—"]})]}),(0,e.jsxs)("td",{children:[a.precipitation!==void 0?a.precipitation.toFixed(1):"—"," мм",(0,e.jsx)("br",{}),(0,e.jsx)("span",{style:{fontSize:"10px",opacity:.7},children:a.snow_depth?`Сніг: ${(a.snow_depth*100).toFixed(1)}см`:"Без снігу"})]}),(0,e.jsxs)("td",{children:[a.freezing_level_height?`${a.freezing_level_height}м`:"—",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["Ґрунт: ",a.soil_temperature_0cm!==void 0?`${a.soil_temperature_0cm}°C`:"—"]})]}),(0,e.jsx)("td",{children:a.evapotranspiration!==void 0?`${a.evapotranspiration.toFixed(2)} мм`:"0 мм"}),(0,e.jsxs)("td",{children:[a.pressure_msl?Math.round(a.pressure_msl):"—"," hPa",(0,e.jsx)("br",{}),(0,e.jsxs)("span",{style:{fontSize:"10px",opacity:.7},children:["Хмари: ",a.cloud_cover??"—","%"]})]})]},r))})]})})]}),u==="daily"&&f.length>0&&(0,e.jsx)(z,{$isDarkMode:s,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},children:(0,e.jsx)(S,{$isDarkMode:s,children:(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Дата"}),(0,e.jsx)("th",{children:"День"}),(0,e.jsx)("th",{children:"Ніч"}),(0,e.jsx)("th",{children:"Вітер"}),(0,e.jsx)("th",{children:"УФ"}),(0,e.jsx)("th",{children:"Опади %"}),(0,e.jsx)("th",{children:"Дощ (мм)"}),(0,e.jsx)("th",{children:"Випаровування (ET0)"})]})}),(0,e.jsx)("tbody",{children:f.map((a,r)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)("strong",{children:a.date})}),(0,e.jsx)("td",{children:parseInt(a.temp_day)>30||parseInt(a.temp_day)<-30?(0,e.jsx)(m,{$color:parseInt(a.temp_day)>30?"#ff6b6b":"#4169e1",children:a.temp_day}):a.temp_day}),(0,e.jsx)("td",{children:a.temp_night}),(0,e.jsx)("td",{children:parseFloat(a.wind_speed)>10?(0,e.jsx)(m,{$color:"#ff9800",children:a.wind_speed}):a.wind_speed}),(0,e.jsx)("td",{children:a.uv_index>7?(0,e.jsx)(m,{$color:"#ff6b6b",children:a.uv_index}):a.uv_index}),(0,e.jsxs)("td",{children:[a.precipitation_probability_max??"—","%"]}),(0,e.jsx)("td",{children:a.rain_sum!==void 0?a.rain_sum.toFixed(1):"—"}),(0,e.jsx)("td",{children:a.evapotranspiration!==void 0?`${a.evapotranspiration.toFixed(2)} мм`:"—"})]},r))})]})})})]})})})};export{be as default};
