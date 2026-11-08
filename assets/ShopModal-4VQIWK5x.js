import{o as e}from"./rolldown-runtime-C_JJxWoe.js";import{a as t}from"./vendor-i18n-DhRqfqeK.js";import{s as r}from"./vendor-motion-B-5ZsAFi.js";import{i as n,r as i,t as o}from"./styled-components.browser.esm-C9MjP7gd.js";import{F as a,R as s,Xt as l}from"./vendor-ui-DBFQ2jRZ.js";import{t as d}from"./turkey-in-dragon-museum-DM6RlmZm.js";import{A as c,F as u,I as h,L as p,M as f,N as g,P as m,j as x,k as b}from"./main-C2VxEdv8.js";var w,v,y=e(t()),E=Object.defineProperty,k=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&j(e,r,t[r]);if(k)for(var r of k(t))C.call(t,r)&&j(e,r,t[r]);return e},S=(e,t)=>{var r={};for(var n in e)M.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&C.call(e,n)&&(r[n]=e[n]);return r};(e=>{const t=class t{constructor(e,r,n,o){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let a=[];for(let t=0;t<this.size;t++)a.push(!1);for(let t=0;t<this.size;t++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(n);if(this.drawCodewords(s),-1==o){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const r=this.getPenaltyScore();r<e&&(o=t,e=r),this.applyMask(t)}}i(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(r,n){const i=e.QrSegment.makeSegments(r);return t.encodeSegments(i,n)}static encodeBinary(r,n){const i=e.QrSegment.makeBytes(r);return t.encodeSegments([i],n)}static encodeSegments(e,n,o=1,s=40,l=-1,d=!0){if(!(t.MIN_VERSION<=o&&o<=s&&s<=t.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");let c,u;for(c=o;;c++){const r=8*t.getNumDataCodewords(c,n),i=a.getTotalBits(e,c);if(i<=r){u=i;break}if(c>=s)throw new RangeError("Data too long")}for(const r of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])d&&u<=8*t.getNumDataCodewords(c,r)&&(n=r);let h=[];for(const t of e){r(t.mode.modeBits,4,h),r(t.numChars,t.mode.numCharCountBits(c),h);for(const e of t.getData())h.push(e)}i(h.length==u);const p=8*t.getNumDataCodewords(c,n);i(h.length<=p),r(0,Math.min(4,p-h.length),h),r(0,(8-h.length%8)%8,h),i(h.length%8==0);for(let t=236;h.length<p;t^=253)r(t,8,h);let f=[];for(;8*f.length<h.length;)f.push(0);return h.forEach((e,t)=>f[t>>>3]|=e<<7-(7&t)),new t(c,n,f,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)0==r&&0==n||0==r&&n==t-1||r==t-1&&0==n||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let r=t;for(let n=0;n<10;n++)r=r<<1^1335*(r>>>9);const o=21522^(t<<10|r);i(o>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,n(o,i));this.setFunctionModule(8,7,n(o,6)),this.setFunctionModule(8,8,n(o,7)),this.setFunctionModule(7,8,n(o,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,n(o,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,n(o,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,n(o,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;i(t>>>18==0);for(let r=0;r<18;r++){const e=n(t,r),i=this.size-11+r%3,o=Math.floor(r/3);this.setFunctionModule(i,o,e),this.setFunctionModule(o,i,e)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const i=Math.max(Math.abs(n),Math.abs(r)),o=e+n,a=t+r;0<=o&&o<this.size&&0<=a&&a<this.size&&this.setFunctionModule(o,a,2!=i&&4!=i)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){const r=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,n))throw new RangeError("Invalid argument");const o=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],a=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],s=Math.floor(t.getNumRawDataModules(r)/8),l=o-s%o,d=Math.floor(s/o);let c=[];const u=t.reedSolomonComputeDivisor(a);for(let i=0,p=0;i<o;i++){let r=e.slice(p,p+d-a+(i<l?0:1));p+=r.length;const n=t.reedSolomonComputeRemainder(r,u);i<l&&r.push(0),c.push(r.concat(n))}let h=[];for(let t=0;t<c[0].length;t++)c.forEach((e,r)=>{(t!=d-a||r>=l)&&h.push(e[t])});return i(h.length==s),h}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let o=0;o<2;o++){const a=t-o,s=t+1&2?i:this.size-1-i;!this.isFunction[s][a]&&r<8*e.length&&(this.modules[s][a]=n(e[r>>>3],7-(7&r)),r++)}}i(r==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let i=0;i<this.size;i++){let r=!1,n=0,o=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[i][a]==r?(n++,5==n?e+=t.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,o),r||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),r=this.modules[i][a],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,o)*t.PENALTY_N3}for(let i=0;i<this.size;i++){let r=!1,n=0,o=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][i]==r?(n++,5==n?e+=t.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,o),r||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),r=this.modules[a][i],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,o)*t.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let r=0;r<this.size-1;r++){const n=this.modules[i][r];n==this.modules[i][r+1]&&n==this.modules[i+1][r]&&n==this.modules[i+1][r+1]&&(e+=t.PENALTY_N2)}let r=0;for(const t of this.modules)r=t.reduce((e,t)=>e+(t?1:0),r);const n=this.size*this.size,o=Math.ceil(Math.abs(20*r-10*n)/n)-1;return i(0<=o&&o<=9),e+=o*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return i(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let n=1;for(let i=0;i<e;i++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],n),e+1<r.length&&(r[e]^=r[e+1]);n=t.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(e,r){let n=r.map(e=>0);for(const i of e){const e=i^n.shift();n.push(0),r.forEach((r,i)=>n[i]^=t.reedSolomonMultiply(r,e))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^285*(r>>>7),r^=(t>>>n&1)*e;return i(r>>>8==0),r}finderPenaltyCountPatterns(e){const t=e[1];i(t<=3*this.size);const r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function n(e,t){return!!(e>>>t&1)}function i(e){if(!e)throw new Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;const o=class e{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let n=[];for(const e of t)r(e,8,n);return new e(e.Mode.BYTE,t.length,n)}static makeNumeric(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");let n=[];for(let e=0;e<t.length;){const i=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+i),10),3*i+1,n),e+=i}return new e(e.Mode.NUMERIC,t.length,n)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let n,i=[];for(n=0;n+2<=t.length;n+=2){let o=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));o+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),r(o,11,i)}return n<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,i),new e(e.Mode.ALPHANUMERIC,t.length,i)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let n=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)r(t,8,n);else if(t<16384)r(2,2,n),r(t,14,n);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,n),r(t,21,n)}return new e(e.Mode.ECI,0,n)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(const n of e){const e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;r+=4+e+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}};o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=o;e.QrSegment=o})(w||(w={})),(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})((v=w||(w={})).QrCode||(v.QrCode={})),(e=>{(e=>{const t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||(e.QrSegment={}))})(w||(w={}));var $=w,z={L:$.QrCode.Ecc.LOW,M:$.QrCode.Ecc.MEDIUM,Q:$.QrCode.Ecc.QUARTILE,H:$.QrCode.Ecc.HIGH},A=128,N="L",I="#FFFFFF",P="#000000",L=!1,T=1;function O(e,t=0){const r=[];return e.forEach(function(e,n){let i=null;e.forEach(function(o,a){if(!o&&null!==i)return r.push(`M${i+t} ${n+t}h${a-i}v1H${i+t}z`),void(i=null);if(a!==e.length-1)o&&null===i&&(i=a);else{if(!o)return;null===i?r.push(`M${a+t},${n+t} h1v1H${a+t}z`):r.push(`M${i+t},${n+t} h${a+1-i}v1H${i+t}z`)}})}),r.join("")}function _(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function F(e,t,r,n){if(null==n)return null;const i=e.length+2*r,o=Math.floor(.1*t),a=i/t,s=(n.width||o)*a,l=(n.height||o)*a,d=null==n.x?e.length/2-s/2:n.x*a,c=null==n.y?e.length/2-l/2:n.y*a,u=null==n.opacity?1:n.opacity;let h=null;if(n.excavate){let e=Math.floor(d),t=Math.floor(c);h={x:e,y:t,w:Math.ceil(s+d-e),h:Math.ceil(l+c-t)}}return{x:d,y:c,h:l,w:s,excavation:h,opacity:u,crossOrigin:n.crossOrigin}}function U({value:e,level:t,minVersion:r,includeMargin:n,marginSize:i,imageSettings:o,size:a,boostLevel:s}){let l=y.useMemo(()=>{const n=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...$.QrSegment.makeSegments(t)),e),[]);return $.QrCode.encodeSegments(n,z[t],r,void 0,void 0,s)},[e,t,r,s]);const{cells:d,margin:c,numCells:u,calculatedImageSettings:h}=y.useMemo(()=>{let e=l.getModules();const t=function(e,t){return null!=t?Math.max(Math.floor(t),0):e?4:0}(n,i);return{cells:e,margin:t,numCells:e.length+2*t,calculatedImageSettings:F(e,a,t,o)}},[l,a,o,n,i]);return{qrcode:l,margin:c,cells:d,numCells:u,calculatedImageSettings:h}}var D=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();y.forwardRef(function(e,t){const r=e,{value:n,size:i=A,level:o=N,bgColor:a=I,fgColor:s=P,includeMargin:l=L,minVersion:d=T,boostLevel:c,marginSize:u,imageSettings:h}=r,p=S(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:f}=p,g=S(p,["style"]),m=null==h?void 0:h.src,x=y.useRef(null),b=y.useRef(null),w=y.useCallback(e=>{x.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[v,E]=y.useState(!1),{margin:k,cells:M,numCells:C,calculatedImageSettings:j}=U({value:n,level:o,minVersion:d,boostLevel:c,includeMargin:l,marginSize:u,imageSettings:h,size:i});y.useEffect(()=>{if(null!=x.current){const e=x.current,t=e.getContext("2d");if(!t)return;let r=M;const n=b.current,o=null!=j&&null!==n&&n.complete&&0!==n.naturalHeight&&0!==n.naturalWidth;o&&null!=j.excavation&&(r=_(M,j.excavation));const l=window.devicePixelRatio||1;e.height=e.width=i*l;const d=i/C*l;t.scale(d,d),t.fillStyle=a,t.fillRect(0,0,C,C),t.fillStyle=s,D?t.fill(new Path2D(O(r,k))):M.forEach(function(e,r){e.forEach(function(e,n){e&&t.fillRect(n+k,r+k,1,1)})}),j&&(t.globalAlpha=j.opacity),o&&t.drawImage(n,j.x+k,j.y+k,j.w,j.h)}}),y.useEffect(()=>{E(!1)},[m]);const $=R({height:i,width:i},f);let z=null;return null!=m&&(z=y.createElement("img",{src:m,key:m,style:{display:"none"},onLoad:()=>{E(!0)},ref:b,crossOrigin:null==j?void 0:j.crossOrigin})),y.createElement(y.Fragment,null,y.createElement("canvas",R({style:$,height:i,width:i,ref:w,role:"img"},g)),z)}).displayName="QRCodeCanvas";var H=y.forwardRef(function(e,t){const r=e,{value:n,size:i=A,level:o=N,bgColor:a=I,fgColor:s=P,includeMargin:l=L,minVersion:d=T,boostLevel:c,title:u,marginSize:h,imageSettings:p}=r,f=S(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:g,cells:m,numCells:x,calculatedImageSettings:b}=U({value:n,level:o,minVersion:d,boostLevel:c,includeMargin:l,marginSize:h,imageSettings:p,size:i});let w=m,v=null;null!=p&&null!=b&&(null!=b.excavation&&(w=_(m,b.excavation)),v=y.createElement("image",{href:p.src,height:b.h,width:b.w,x:b.x+g,y:b.y+g,preserveAspectRatio:"none",opacity:b.opacity,crossOrigin:b.crossOrigin}));const E=O(w,g);return y.createElement("svg",R({height:i,width:i,viewBox:`0 0 ${x} ${x}`,ref:t,role:"img"},f),!!u&&y.createElement("title",null,u),y.createElement("path",{fill:a,d:`M0,0 h${x}v${x}H0z`,shapeRendering:"crispEdges"}),y.createElement("path",{fill:s,d:E,shapeRendering:"crispEdges"}),v)});H.displayName="QRCodeSVG";var B="/api/support-progress",V=()=>{try{const e=window.location.hostname;return"stuxia.com"===e||e.endsWith(".stuxia.com")||e.endsWith(".pages.dev")?B:`https://stuxia.com${B}`}catch{return`https://stuxia.com${B}`}},Q=(e=new Date)=>{const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Kyiv",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),r=e=>Number(t.find(t=>t.type===e)?.value),n=r("year"),i=r("month"),o=r("day"),a=new Date(n,i,0).getDate();return{key:`${n}-${String(i).padStart(2,"0")}`,year:n,month:i,daysLeft:a-o+1}},Y=r(),X=["січні","лютому","березні","квітні","травні","червні","липні","серпні","вересні","жовтні","листопаді","грудні"],G=e=>{const t=e%10,r=e%100;return 1===t&&11!==r?"день":t>=2&&t<=4&&(r<12||r>14)?"дні":"днів"},W=n.div`
  margin-top: 5px;
  font-size: 11px;
  opacity: 0.65;
`,K=o`
  from { transform: translateX(-100%); }
  to   { transform: translateX(250%); }
`,q=o`
  0%   { box-shadow: 0 0 0 rgba(255, 211, 107, 0); }
  35%  { box-shadow: 0 0 18px rgba(255, 211, 107, 0.85); }
  100% { box-shadow: 0 0 0 rgba(255, 211, 107, 0); }
`,J=o`
  0%   { transform: scale(1); }
  40%  { transform: scale(1.08); color: #fff3c4; }
  100% { transform: scale(1); }
`,Z=(e,t=1200)=>{const[r,n]=(0,y.useState)(0),i=(0,y.useRef)(0);return(0,y.useEffect)(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})())return i.current=e,void n(e);const r=i.current,o=performance.now();let a;const s=l=>{const d=Math.min(1,(l-o)/t),c=1-Math.pow(1-d,3),u=r+(e-r)*c;i.current=u,n(u),d<1&&(a=requestAnimationFrame(s))};return a=requestAnimationFrame(s),()=>cancelAnimationFrame(a)},[e,t]),r},ee=n.section`
  margin: 6px 10px;
  padding: 10px 14px;
  border-radius: 14px;
  background: rgba(10, 4, 4, 0.82);
  border: 1px solid rgba(255, 108, 108, 0.45);
  color: #f6eee8;
  font-size: 13px;
  line-height: 1.45;
`,te=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 24px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`,re=n.h3`
  margin: 0 0 4px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
  letter-spacing: 0.5px;
`,ne=n.p`
  margin: 0 0 6px;
  opacity: 0.85;
`,ie=n.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;

  th, td {
    text-align: left;
    padding: 7px 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    vertical-align: top;
  }
  th {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.6;
    font-weight: 700;
  }
  td:last-child, th:last-child { text-align: right; white-space: nowrap; }
  tfoot td { font-weight: 800; border-bottom: none; }
`,oe=n.a`
  display: block;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  padding: 8px;
  margin: 0 -8px;
  transition: background 0.2s;
  &:hover { background: rgba(255, 255, 255, 0.05); }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`,ae=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-weight: 700;
`,se=n.span`
  display: inline-block;
  font-variant-numeric: tabular-nums;
  ${e=>e.$bump&&i`
      animation: ${J} 0.9s ease;
    `}
`,le=n.div`
  position: relative;
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
`,de=n.div`
  position: relative;
  height: 100%;
  width: ${e=>e.$pct}%;
  min-width: ${e=>e.$pct>0?"12px":"0"};
  border-radius: inherit;
  background: linear-gradient(90deg, #f3a83b 0%, #ffd36b 100%);
  transition: width 1.4s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;

  ${e=>e.$bump&&i`
      animation: ${q} 1.4s ease;
    `}

  /* легкий відблиск, що пробігає по смужці */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 40%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
    animation: ${K} 2.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
    &::after { display: none; }
  }
`,ce=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`,ue=n.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 211, 107, 0.45);
  background: rgba(255, 211, 107, 0.08);
  color: #ffe3a3;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(255, 211, 107, 0.16);
    border-color: rgba(255, 211, 107, 0.7);
  }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`,he=n.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(${e=>e.$open?"90deg":"0deg"});
`,pe=n.span`
  font-weight: 400;
  opacity: 0.7;
`,fe=n.div`
  display: grid;
  grid-template-rows: ${e=>e.$open?"1fr":"0fr"};
  opacity: ${e=>e.$open?1:0};
  transition: grid-template-rows 0.35s ease, opacity 0.3s ease;

  & > div {
    overflow: hidden;
    min-height: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ge=n.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #8ff0b4;
  vertical-align: middle;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #2fbf71;
    box-shadow: 0 0 6px #2fbf71;
  }
`,me=n.p`
  margin: 6px 0 0;
  font-size: 12px;
  opacity: 0.7;
`,xe=n.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 211, 107, 0.06);
  border: 1px dashed rgba(255, 211, 107, 0.35);

  label {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 11px;
    font-weight: 700;
    opacity: 0.9;
  }
  input {
    padding: 6px 8px;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    font-size: 13px;
  }
  input:focus-visible { outline: 2px solid #00afce; outline-offset: 1px; }
`,be=n.button`
  padding: 7px 14px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
  color: #2b1313;
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  &:disabled { opacity: 0.6; cursor: wait; }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`,we=n.p`
  flex-basis: 100%;
  margin: 2px 0 0;
  font-size: 12px;
  color: ${e=>e.$ok?"#8ff0b4":"#ffc2a8"};
`,ve=({user:e,onUserUpdate:t})=>{const[r,n]=(0,y.useState)(""),[i,o]=(0,y.useState)(""),[a,s]=(0,y.useState)({state:"idle",text:""});if(!e)return(0,Y.jsx)(we,{as:"div",style:{marginTop:10},children:"Увійдіть в акаунт (кнопка «Акаунт» угорі), щоб отримати значок «Друг індиків»."});if(h(e))return(0,Y.jsx)(we,{as:"div",$ok:!0,style:{marginTop:10},children:"🦃 Ви — Друг індиків. Дякуємо, що підтримуєте Стихію!"});return(0,Y.jsxs)(xe,{onSubmit:async n=>{n.preventDefault(),s({state:"loading",text:""});const o=await(async({name:e,amount:t})=>{try{const r=await fetch(V(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,amount:Number(String(t).replace(",","."))}),signal:AbortSignal.timeout(15e3)}),n=await r.json().catch(()=>({}));return r.ok?{ok:!0===n.ok}:{ok:!1,error:n.error||"Сервер зараз недоступний. Спробуйте пізніше."}}catch{return{ok:!1,error:"Немає зв'язку з сервером. Спробуйте пізніше."}}})({name:r.trim(),amount:i});o.ok?(p(e.uid),t?.({...e,isSupporter:!0,supporterSince:Date.now()}),s({state:"ok",text:"Готово! Значок 🦃 уже біля вашого акаунта. Дякуємо!"})):s({state:"error",text:o.error||"Не знайшли такого донату. Перевірте ім'я (як на Donatello) і суму. Свіжий донат може з'явитися за 2–3 хвилини."})},children:[(0,Y.jsxs)("label",{children:["Ім'я, яке ви вказали на Donatello",(0,Y.jsx)("input",{value:r,onChange:e=>n(e.target.value),maxLength:80,required:!0,autoComplete:"nickname"})]}),(0,Y.jsxs)("label",{children:["Сума, грн",(0,Y.jsx)("input",{value:i,onChange:e=>o(e.target.value),inputMode:"decimal",pattern:"[0-9]+([.,][0-9]{1,2})?",required:!0,style:{width:90}})]}),(0,Y.jsx)(be,{type:"submit",disabled:"loading"===a.state,children:"loading"===a.state?"Перевіряємо…":"Отримати значок"}),a.text&&(0,Y.jsx)(we,{$ok:"ok"===a.state,role:"status",children:a.text})]})},ye=({user:e,onUserUpdate:t})=>{const[r,n]=(0,y.useState)(!1),[i,o]=(0,y.useState)(!1),{raised:a,target:s,live:l,month:d}=(()=>{const[e,t]=(0,y.useState)(()=>({raised:u(),target:x,month:Q().key,live:!1,loading:!0}));return(0,y.useEffect)(()=>{let e=!1,r=Q().key;const n=async()=>{if("hidden"!==document.visibilityState)try{const r=await fetch(V(),{signal:AbortSignal.timeout(1e4)});if(!r.ok)throw new Error(`HTTP ${r.status}`);const n=await r.json();if(e||"number"!=typeof n.raised)return;t({raised:n.raised,target:n.target||x,month:n.month||Q().key,live:!0,loading:!1})}catch{e||t(e=>({...e,loading:!1}))}};n();const i=setInterval(n,12e4),o=setInterval(()=>{const e=Q().key;e!==r&&(r=e,t(t=>({...t,raised:0,month:e})),n())},6e4);return document.addEventListener("visibilitychange",n),()=>{e=!0,clearInterval(i),clearInterval(o),document.removeEventListener("visibilitychange",n)}},[]),e})(),h=Number(String(d).slice(5,7))-1,p=X[h]??"цьому місяці",{daysLeft:w}=Q(),v=Math.round(100*c),E=Math.min(100,a/s*100),[k,M]=(0,y.useState)(0);(0,y.useEffect)(()=>{const e=requestAnimationFrame(()=>M(E));return()=>cancelAnimationFrame(e)},[E]);const[C,j]=(0,y.useState)(!1),R=(0,y.useRef)(a),S=(0,y.useRef)(l);(0,y.useEffect)(()=>{const e=S.current&&a>R.current;if(R.current=a,S.current=l,!e)return;j(!0);const t=setTimeout(()=>j(!1),1400);return()=>clearTimeout(t)},[a,l]);const $=Z(a);return(0,Y.jsxs)(ee,{"aria-labelledby":"support-costs-title",children:[(0,Y.jsxs)(te,{children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)(re,{id:"support-costs-title",children:"Скільки коштує Стихія"}),(0,Y.jsx)(ne,{children:"Прогноз, кілька точок і новини завжди будуть безкоштовними для всіх. Але сайт живе не з повітря — ось чесні цифри, без «мільйонів розробнику»."}),(0,Y.jsx)(me,{children:"В Україні є важливіші збори, і ми це розуміємо. Якщо хочете допомогти Стихії жити — ось банка. Донатерам дістається хіба що значок «Друг індиків» біля акаунта, функції від цього не змінюються."})]}),(0,Y.jsxs)("div",{children:[(0,Y.jsxs)(oe,{href:b,target:"_blank",rel:"noopener noreferrer","aria-label":`У ${p} зібрано ${a} з ${s} гривень. Відкрити банку на Donatello`,children:[(0,Y.jsxs)(ae,{children:[(0,Y.jsxs)("span",{children:["Зібрано в ",p,l&&(0,Y.jsx)(ge,{title:"Оновлюється автоматично з Donatello",children:"наживо"})]}),(0,Y.jsxs)(se,{$bump:C,children:[m($)," / ",m(s)]},C?"bump":"still")]}),(0,Y.jsx)(le,{role:"progressbar","aria-valuemin":0,"aria-valuemax":s,"aria-valuenow":a,children:(0,Y.jsx)(de,{$pct:k,$bump:C})}),(0,Y.jsxs)(W,{children:["Шкала обнуляється 1-го числа кожного місяця · до кінця місяця ще ",w," ",G(w)]})]}),(0,Y.jsxs)(ce,{children:[(0,Y.jsxs)(ue,{type:"button","aria-expanded":r,"aria-controls":"support-costs-table",title:r?"Згорнути таблицю витрат":"Розгорнути таблицю витрат",onClick:()=>n(e=>!e),children:[(0,Y.jsx)(he,{$open:r,"aria-hidden":"true",children:"▸"}),r?"Згорнути таблицю витрат":"Розгорнути таблицю витрат",(0,Y.jsxs)(pe,{children:["· ≈ ",m(x),"/міс"]})]}),(0,Y.jsxs)(ue,{type:"button","aria-expanded":i,"aria-controls":"support-claim",onClick:()=>o(e=>!e),children:[(0,Y.jsx)(he,{$open:i,"aria-hidden":"true",children:"▸"}),"🦃 Я задонатив — отримати значок"]})]})]})]}),(0,Y.jsx)(fe,{$open:i,id:"support-claim","aria-hidden":!i,children:(0,Y.jsx)("div",{children:(0,Y.jsx)(ve,{user:e,onUserUpdate:t})})}),(0,Y.jsx)(fe,{$open:r,id:"support-costs-table","aria-hidden":!r,children:(0,Y.jsx)("div",{children:(0,Y.jsxs)(ie,{children:[(0,Y.jsx)("thead",{children:(0,Y.jsxs)("tr",{children:[(0,Y.jsx)("th",{scope:"col",children:"Стаття"}),(0,Y.jsx)("th",{scope:"col",children:"Ціна"}),(0,Y.jsx)("th",{scope:"col",children:"На місяць"})]})}),(0,Y.jsxs)("tbody",{children:[g.map(e=>(0,Y.jsxs)("tr",{children:[(0,Y.jsx)("td",{children:e.label}),(0,Y.jsx)("td",{children:e.price}),(0,Y.jsxs)("td",{children:["≈ ",m(e.monthly)]})]},e.id)),(0,Y.jsxs)("tr",{children:[(0,Y.jsx)("td",{children:"Комісія платформи донатів"}),(0,Y.jsxs)("td",{children:[v,"% від донату"]}),(0,Y.jsxs)("td",{children:["≈ ",m(x-f)]})]})]}),(0,Y.jsx)("tfoot",{children:(0,Y.jsxs)("tr",{children:[(0,Y.jsx)("td",{colSpan:2,children:"Разом"}),(0,Y.jsxs)("td",{children:["≈ ",m(x),"/міс"]})]})})]})})})]})},Ee=o`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,ke=o`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`,Me=o`
  from { opacity: 0; }
  to { opacity: 1; }
`,Ce=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 2000;
`,je=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='64' height='72'><rect width='64' height='72' fill='#6b574d'/><path d='M0 1.5H64M0 37.5H64M32 0V36M0 36V72M64 36V72' fill='none' stroke='#2b1a16' stroke-width='3'/></svg>")}")`,Re="1100px",Se="32px",$e=n.div`
  display: none;
  position: absolute;
  top: ${Se};
  bottom: 0;
  ${e=>e.$side}: 0;
  width: calc((100vw - ${Re}) / 2);
  background-image: ${je};
  background-size: 64px 72px;
  filter: brightness(0.5);
  box-shadow: inset ${e=>"left"===e.$side?"-":""}24px 0 40px rgba(0, 0, 0, 0.6);
  pointer-events: none;

  /* зубці на вершині стіни */
  &::before {
    content: "";
    position: absolute;
    top: -${Se};
    left: 0;
    right: 0;
    height: ${Se};
    background-image: ${je};
    background-size: 64px 72px;
    mask-image: repeating-linear-gradient(90deg, #000 0 40px, transparent 40px 72px);
  }

  /* бійниці */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 16px;
    transform: translateX(-50%);
    background: repeating-linear-gradient(
      180deg,
      transparent 0 120px,
      #1a0c0a 120px 200px,
      transparent 200px 360px
    );
    border-radius: 8px 8px 0 0;
    box-shadow: 0 0 12px rgba(255, 190, 90, 0.35);
  }

  @media (min-width: 1250px) {
    display: block;
  }
`,ze=n.div`
  background-color: #2b1313;
  background-image: url(${d});
  background-size: cover;
  background-position: center;
  color: #fff;
  width: 100%;
  max-width: ${Re};
  z-index: 1;
  max-height: 95%;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${e=>e.$isClosing?ke:Ee} ${500}ms ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`,Ae=n.button`
  position: absolute;
  top: 10px;
  right: 10px;
  line-height: 1;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background: #000000cd;
  border: none;
  color: #ff6c6c;
  font-size: 15px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`,Ne=n.h2`
  color: #fdfdfd;
  letter-spacing: 2px;
  font-size: 20px;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  background: #000000cd;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,Ie="rgba(20, 8, 8, 0.82)",Pe=128,Le=Math.ceil(8.59375),Te=n.div`
  position: relative;
  height: 26px;
  background: repeating-linear-gradient(
    90deg,
    ${Ie} 0 ${72}px,
    transparent ${72}px ${Pe}px
  );
  border-bottom: 2px solid #ff6c6c;
  display: flex;
  width: 100%;
  min-width: 0;
  overflow-x: clip;
  overflow-y: visible;
  z-index: 2;
  margin-top: 56px;
`,Oe=n.div`
  position: relative;
  flex: 0 0 ${Pe}px;
  width: ${Pe}px;
  height: 100%;
  pointer-events: none;
`,_e=n.span`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: ${72}px;
  display: flex;
  justify-content: center;
  color: ${Ie};
  font-size: 52px;
  line-height: 0;
`,Fe=e=>(0,Y.jsxs)("svg",{viewBox:"0 0 64 64",width:"1em",height:"1em",fill:"currentColor",...e,children:[(0,Y.jsx)("path",{d:"M24 5.5a5.5 5.5 0 0 0-5 3 5 5 0 0 0-5.500-.5 5 5 0 0 0-3.500 6 5 5 0 0 0-4 5.500 4.500 4.500 0 0 0-1.500 5.500 4 4 0 0 0-1.500 6 6 6 0 0 0 5.500 5.500H26V16c0-5-1.500-8-2-10.500z"}),(0,Y.jsx)("path",{d:"M24 5.500c-2 3-1.500 9 1 14l5 3.500V40l-9 2-1.500 4.500c3 1 8-1 12-2.500V22z"}),(0,Y.jsx)("ellipse",{cx:"40",cy:"32",rx:"19",ry:"14.500"}),(0,Y.jsx)("path",{d:"M52 10c-1 7 5 12 6 22",fill:"none",stroke:"currentColor",strokeWidth:"6.500",strokeLinecap:"round"}),(0,Y.jsx)("circle",{cx:"53",cy:"9",r:"5.800"}),(0,Y.jsx)("path",{d:"M57 8l5.500 3.200-5 1.200z"}),(0,Y.jsx)("path",{d:"M57 13l1.500 3.500 1-3z"}),(0,Y.jsx)("path",{d:"M35 44h1.800v11H35zM41 44h1.800v11H41zM32 55h8v2H32zM39 54.500h8.500l-2 2.500H39z"})]}),Ue=[{Icon:s},{Icon:Fe},{Icon:l},{Icon:Fe},{Icon:a},{Icon:Fe}],De=n.div`
  padding: 10px 16px 8px;
  text-align: center;
  background: rgba(8, 28, 16, 0.88);
  border-bottom: 1px solid rgba(47, 191, 113, 0.6);
  scroll-margin-top: 20px;
`,He=n.h3`
  margin: 0 0 4px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  letter-spacing: 1px;
  color: #b8f5cf;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
`,Be=n.p`
  margin: 0;
  font-size: 13px;
  color: #e6f7ec;
  opacity: 0.85;
`,Ve=n.div`
  font-size: 12px;
  color: #f1e6e0;
  opacity: 0.85;
  text-align: center;
  max-width: 260px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`,Qe=n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  width: 100%;

  & > h2 {
    margin: 0;
    flex-shrink: 0;
  }
`,Ye=n.button`
  padding: 13px 16px;
  border-radius: 8px;
  border: 1px solid #b8f5cf;
  background: rgba(8, 28, 16, 0.85);
  color: #b8f5cf;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
  &:hover {
    transform: translateY(-1px);
    background: rgba(20, 60, 35, 0.9);
  }
  &:focus-visible { outline: 2px solid #00afce; outline-offset: 2px; }
`,Xe=n.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ge=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  min-height: 0;
  border-bottom: 1px solid rgba(47, 191, 113, 0.45);
  border-right: 1px solid rgba(47, 191, 113, 0.2);
  background-color: ${Ie};
  background-image:
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.06) 0 2px, transparent 2px 32px),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0 2px, transparent 2px 64px);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(20, 8, 8, 0.68);
  }
`,We=n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 8px 10px 4px;
`,Ke=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 1 260px;
`,qe=n.a`
  display: block;
  padding: 8px;
  background: #fff;
  border-radius: 12px;
  line-height: 0;
  align-self: flex-start;
  margin-top: 34px; /* під кнопкою «Закрити» */
  flex-shrink: 0;
`,Je=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,Ze=n.div`
  font-family: Georgia, "Times New Roman", serif;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`,et=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,tt=n.a`
  padding: 8px 16px;
  background: linear-gradient(135deg, #a124db 0%, #7b00ff 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    background: linear-gradient(135deg, #b53ee6 0%, #8f1aff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  ${e=>e.$eco&&i`
      padding: 10px 18px;
      font-size: 14px;
      background: linear-gradient(135deg, #2fbf71 0%, #149a52 100%);
      border-color: #b8f5cf;
      box-shadow: 0 4px 14px rgba(47, 191, 113, 0.35);

      &:hover {
        background: linear-gradient(135deg, #43d684 0%, #1bb362 100%);
        box-shadow: 0 6px 18px rgba(47, 191, 113, 0.5);
      }
    `}

  ${e=>e.$featured&&i`
      padding:13px 16px;
      font-size: 14px;
      color: #2b1313;
      background: linear-gradient(135deg, #ffd36b 0%, #f3a83b 100%);
      border-color: #fff3c4;

      &:hover {
        background: linear-gradient(135deg, #ffe08f 0%, #ffb84d 100%);
      }
    `}
`,rt=n.div`
  color: #f8f1c6;
  font-size: 13px;
  font-style: italic;
  flex: 1 1 280px;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`,nt=n.div`
  display: flex;
  flex-direction: column;
  animation: ${Me} 0.4s ease-out;
`,it=[{id:"uanimals",title:"Допомога тваринам",desc:"Рятують тварин, які постраждали від війни",buttonText:"Підтримати UAnimals",linkUrl:"https://uanimals.org/"},{id:"ecoaction",title:"Захист природи",desc:"Захищають довкілля і клімат України",buttonText:"Підтримати Екодію",linkUrl:"https://ecoaction.org.ua/"},{id:"happypaw",title:"Притулки для тварин",desc:"Допомагають безпритульним тваринам знайти дім",buttonText:"Підтримати Happy Paw",linkUrl:"https://happypaw.ua/"},{id:"tnc",title:"Охорона земель і вод",desc:"Бережуть землі й води по всьому світу",buttonText:"Підтримати Nature Conservancy",linkUrl:"https://www.nature.org/"},{id:"oceana",title:"Захист океанів",desc:"Захищають океани та морське життя",buttonText:"Підтримати Oceana",linkUrl:"https://oceana.org/"},{id:"rainforest",title:"Захист тропічних лісів",desc:"Бережуть тропічні ліси від вирубки",buttonText:"Підтримати Rainforest Trust",linkUrl:"https://rainforesttrust.org/"}];Array.from({length:10},(e,t)=>t),Array.from({length:6},(e,t)=>t);var ot=({onClose:e,user:t,onUserUpdate:r})=>{const[n,i]=(0,y.useState)(!1),o=(0,y.useRef)(null),a=(0,y.useRef)(null),s=(0,y.useCallback)(()=>{o.current||(i(!0),o.current=setTimeout(e,500))},[e]);return(0,y.useEffect)(()=>{const e=e=>{"Escape"===e.key&&s()},t=document.body.style.overflow;return document.body.style.overflow="hidden",window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e),document.body.style.overflow=t}},[s]),(0,y.useEffect)(()=>()=>clearTimeout(o.current),[]),(0,Y.jsxs)(Ce,{onClick:s,children:[(0,Y.jsx)($e,{$side:"left","aria-hidden":"true"}),(0,Y.jsx)($e,{$side:"right","aria-hidden":"true"}),(0,Y.jsxs)(ze,{role:"dialog","aria-modal":"true","aria-label":"Замок Доміно",$isClosing:n,onClick:e=>e.stopPropagation(),children:[(0,Y.jsx)(Ae,{onClick:s,children:"Закрити"}),(0,Y.jsxs)(nt,{children:[(0,Y.jsxs)(We,{children:[(0,Y.jsxs)(Ke,{children:[(0,Y.jsxs)(Qe,{children:[(0,Y.jsx)(Ne,{children:"Древній Замок"}),(0,Y.jsx)(rt,{children:"Мене звати Доміно, я люблю давнє кіно. Стихія завжди буде безкоштовною, а якщо хочете допомогти їй жити — ось банка."})]}),(0,Y.jsxs)(Qe,{children:[(0,Y.jsx)(tt,{href:b,target:"_blank",rel:"noopener noreferrer",$featured:!0,children:"Підтримати Стихію"}),(0,Y.jsx)(Ye,{type:"button",onClick:()=>a.current?.scrollIntoView({behavior:"smooth",block:"start"}),children:"Або допомогти екофондам ↓"})]})]}),(0,Y.jsx)(qe,{href:b,target:"_blank",rel:"noopener noreferrer","aria-label":"QR-код для підтримки автора",children:(0,Y.jsx)(H,{value:b,size:96})})]}),(0,Y.jsx)(ye,{user:t,onUserUpdate:r}),(0,Y.jsx)(Te,{children:Array.from({length:Le},(e,t)=>{const{Icon:r}=Ue[t%Ue.length];return(0,Y.jsx)(Oe,{children:(0,Y.jsx)(_e,{"aria-hidden":"true",children:(0,Y.jsx)(r,{})})},t)})}),(0,Y.jsxs)(De,{ref:a,id:"eco-funds",children:[(0,Y.jsx)(He,{children:"Екологічні фонди"}),(0,Y.jsx)(Be,{children:"Донат іде напряму фонду, не нам. Обирайте те, що вам близьке."})]}),(0,Y.jsx)(Xe,{children:it.map(e=>(0,Y.jsx)(Ge,{children:(0,Y.jsxs)(Je,{children:[(0,Y.jsx)(Ze,{children:e.title}),(0,Y.jsx)(Ve,{children:e.desc}),(0,Y.jsx)(et,{children:(0,Y.jsx)(tt,{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer",$eco:!0,children:e.buttonText})})]})},e.id))})]})]})]})};export{ot as default};