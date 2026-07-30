var Hr="v3.0.1",at="https://edt-pages.github.io";var Kr=Math.ceil(10922.666666666666)+4,sr=1024*1024,Wr=5+sr,ir=1024,ar=1024*1024,cr=1024,Gr=256,St=16*1024,kt=16*1024*1024,Ct=4096,Ve=32*1024,Vr=512,Pt=0,ur="8.8.4.4",se=[(Proxy.name+"IP").toUpperCase(),("Cm"+URL.name[2]+"i"+URL.name[0]).toLowerCase(),String(2407*300-10).split("").reverse().join("")];var Yr=null,Qr=!1,qr=["*tapecontent.net","*cloudatacdn.com","*loadshare.org","*cdn-centaurus.com","scholar.google.com"],en=2,tn=1,rn=!1,Jr=null,lr=null,Xr=null,pr=null;function nn(e){Yr=e}function fr(){return Yr}function on(e){Qr=e}function zt(){return Qr}function dr(e){qr=e}function je(){return qr}function hr(e){en=e}function Je(){return en}function sn(e){tn=e}function Tt(){return tn}function an(e){rn=e}function At(){return rn}async function cn(e,t){if(Jr===e&&lr)return lr;let r=await t();return Jr=e,lr=r,r}async function un(e,t){let r=e==null?"":String(e);if(Xr===r&&pr)return pr;let o=await t();return Xr=r,pr=o,o}var fn=new TextEncoder,Xe=new Map,Ro=256;function ln(e){let t="";for(let r=0;r<e.length;r++)t+=e[r].toString(16).padStart(2,"0");return t}var pn=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Zo=Array.from({length:64},(e,t)=>Math.floor(Math.abs(Math.sin(t+1))*4294967296)>>>0);function Et(e){let t=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength),r=Math.ceil((t.byteLength+9)/64)*64,o=new Uint8Array(r);o.set(t),o[t.byteLength]=128;let i=BigInt(t.byteLength)*8n;for(let p=0;p<8;p++)o[r-8+p]=Number(i>>BigInt(p*8)&0xffn);let s=1732584193,n=4023233417,a=2562383102,l=271733878,f=new Uint32Array(16);for(let p=0;p<r;p+=64){for(let d=0;d<16;d++){let b=p+d*4;f[d]=(o[b]|o[b+1]<<8|o[b+2]<<16|o[b+3]<<24)>>>0}let g=s,h=n,w=a,u=l;for(let d=0;d<64;d++){let b,$;d<16?(b=h&w|~h&u,$=d):d<32?(b=u&h|~u&w,$=(5*d+1)%16):d<48?(b=h^w^u,$=(3*d+5)%16):(b=w^(h|~u),$=7*d%16);let S=g+b+Zo[d]+f[$]>>>0,m=(S<<pn[d]|S>>>32-pn[d])>>>0,v=w;g=u,u=v,w=h,h=h+m>>>0}s=s+g>>>0,n=n+h>>>0,a=a+w>>>0,l=l+u>>>0}let c=new Uint8Array(16);for(let[p,g]of[s,n,a,l].entries())for(let h=0;h<4;h++)c[p*4+h]=g>>>h*8&255;return c}function mr(e){return Et(fn.encode(String(e??"")))}async function ye(e){let t=String(e??""),r=Xe.get(t);if(r)return r;let o=(async()=>{let i=mr(t),s=ln(i),n=Et(fn.encode(s.slice(7,27)));return ln(n)})();Xe.set(t,o);try{let i=await o;if(Xe.size>Ro){let s=Xe.keys().next().value;Xe.delete(s)}return i}catch(i){throw Xe.delete(t),i}}function Ye(e){let t=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],r=(f,c)=>(f>>>c|f<<32-c)>>>0;e=unescape(encodeURIComponent(e));let o=e.length*8;for(e+="";e.length*8%512!==448;)e+="\0";let i=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],s=Math.floor(o/4294967296),n=o&4294967295;e+=String.fromCharCode(s>>>24&255,s>>>16&255,s>>>8&255,s&255,n>>>24&255,n>>>16&255,n>>>8&255,n&255);let a=[];for(let f=0;f<e.length;f+=4)a.push(e.charCodeAt(f)<<24|e.charCodeAt(f+1)<<16|e.charCodeAt(f+2)<<8|e.charCodeAt(f+3));for(let f=0;f<a.length;f+=16){let c=new Array(64).fill(0);for(let S=0;S<16;S++)c[S]=a[f+S];for(let S=16;S<64;S++){let m=r(c[S-15],7)^r(c[S-15],18)^c[S-15]>>>3,v=r(c[S-2],17)^r(c[S-2],19)^c[S-2]>>>10;c[S]=c[S-16]+m+c[S-7]+v>>>0}let[p,g,h,w,u,d,b,$]=i;for(let S=0;S<64;S++){let m=r(u,6)^r(u,11)^r(u,25),v=u&d^~u&b,x=$+m+v+t[S]+c[S]>>>0,y=r(p,2)^r(p,13)^r(p,22),C=p&g^p&h^g&h,k=y+C>>>0;$=b,b=d,d=u,u=w+x>>>0,w=h,h=g,g=p,p=x+k>>>0}for(let S=0;S<8;S++)i[S]=i[S]+(S===0?p:S===1?g:S===2?h:S===3?w:S===4?u:S===5?d:S===6?b:$)>>>0}let l="";for(let f=0;f<7;f++)for(let c=24;c>=0;c-=8)l+=(i[f]>>>c&255).toString(16).padStart(2,"0");return l}function gr(e,t){let r=new TextEncoder,o=r.encode(e),i=r.encode(t),s=new Uint8Array(o.length);for(let a=0;a<o.length;a++)s[a]=o[a]^i[a%i.length];let n="";for(let a=0;a<s.length;a++)n+=String.fromCharCode(s[a]);return btoa(n)}function dn(e,t){let r=atob(e),o=new Uint8Array(r.length);for(let l=0;l<r.length;l++)o[l]=r.charCodeAt(l);let s=new TextEncoder().encode(t),n=new Uint8Array(o.length);for(let l=0;l<o.length;l++)n[l]=o[l]^s[l%s.length];return new TextDecoder().decode(n)}function O(...e){zt()&&console.log(...e)}function ct(e,t=3,r=2){if(!e||typeof e!="string"||e.length<=t+r)return e;let o=e.slice(0,t),i=e.slice(-r),s=e.length-t-r;return`${o}${"*".repeat(s)}${i}`}function Qe(e="/"){let t=["about","account","acg","act","activity","ad","ads","ajax","album","albums","anime","api","app","apps","archive","archives","article","articles","ask","auth","avatar","bbs","bd","blog","blogs","book","books","bt","buy","cart","category","categories","cb","channel","channels","chat","china","city","class","classify","clip","clips","club","cn","code","collect","collection","comic","comics","community","company","config","contact","content","course","courses","cp","data","detail","details","dh","directory","discount","discuss","dl","dload","doc","docs","document","documents","doujin","download","downloads","drama","edu","en","ep","episode","episodes","event","events","f","faq","favorite","favourites","favs","feedback","file","files","film","films","forum","forums","friend","friends","game","games","gif","go","go.html","go.php","group","groups","help","home","hot","htm","html","image","images","img","index","info","intro","item","items","ja","jp","jump","jump.html","jump.php","jumping","knowledge","lang","lesson","lessons","lib","library","link","links","list","live","lives","m","mag","magnet","mall","manhua","map","member","members","message","messages","mobile","movie","movies","music","my","new","news","note","novel","novels","online","order","out","out.html","out.php","outbound","p","page","pages","pay","payment","pdf","photo","photos","pic","pics","picture","pictures","play","player","playlist","post","posts","product","products","program","programs","project","qa","question","rank","ranking","read","readme","redirect","redirect.html","redirect.php","reg","register","res","resource","retrieve","sale","search","season","seasons","section","seller","series","service","services","setting","settings","share","shop","show","shows","site","soft","sort","source","special","star","stars","static","stock","store","stream","streaming","streams","student","study","tag","tags","task","teacher","team","tech","temp","test","thread","tool","tools","topic","topics","torrent","trade","travel","tv","txt","type","u","upload","uploads","url","urls","user","users","v","version","videos","view","vip","vod","watch","web","wenku","wiki","work","www","zh","zh-cn","zh-tw","zip"],r=Math.floor(Math.random()*3+1),o=t.sort(()=>.5-Math.random()).slice(0,r).join("/");return e==="/"?`/${o}`:`/${o+e.replace("/?","?")}`}function yr(e){if(typeof e!="string"||!e.includes("*"))return e;let t="abcdefghijklmnopqrstuvwxyz0123456789";return e.replace(/\*/g,()=>{let r="";for(let o=0;o<Math.floor(Math.random()*14)+3;o++)r+=t[Math.floor(Math.random()*t.length)];return r})}async function _e(e){var t=e.replace(/[	"'\r\n]+/g,",").replace(/,+/g,",");return t.charAt(0)==","&&(t=t.slice(1)),t.charAt(t.length-1)==","&&(t=t.slice(0,t.length-1)),t.split(",")}function ze(e){let t=["speed.cloudflare.com","cp.cloudflare.com"];return e=e.toLowerCase(),t.some(r=>e===r||e.endsWith("."+r))}function ut(e){let t=e?.cf,r={4134:"ct",4809:"ct",4811:"ct",4812:"ct",4815:"ct",4837:"cu",4814:"cu",9929:"cu",17623:"cu",17816:"cu",9808:"cmcc",24400:"cmcc",56040:"cmcc",56041:"cmcc",56044:"cmcc"},o=[{code:"ct",pattern:/chinanet|chinatelecom|china telecom|cn2|shtel/},{code:"cmcc",pattern:/cmi|cmnet|chinamobile|china mobile|cmcc|mobile communications/},{code:"cu",pattern:/china169|china unicom|chinaunicom|cucc|cncgroup|cuii|netcom/}];if(String(t?.country||"").toLowerCase()!=="cn")return"cf";let i=String(t?.asOrganization||"").toLowerCase();return o.find(({pattern:n})=>n.test(i))?.code||r[String(t?.asn||"")]||"cf"}function qe(e=""){let t=String(e||"").trim();return t.startsWith("[")&&t.endsWith("]")?t.slice(1,-1):t}function ve(e=""){let t=String(e??"");try{return decodeURIComponent(t)}catch{return t}}function Re(e,t="端口号"){let r=String(e??"");if(!/^\d{1,5}$/.test(r))throw new Error(`${t}必须是 1 到 65535 的整数`);let o=Number(r);if(o<1||o>65535)throw new Error(`${t}必须是 1 到 65535 的整数`);return o}function lt(e,t=443){let r=String(e??"").trim();if(!r)throw new Error("地址不能为空");let o,i=null,s=r.startsWith("[");if(s){let a=r.match(/^(\[[^\]]+\])(?::(\d+))?$/);if(!a||!It(a[1]))throw new Error("IPv6 地址格式无效");[,o,i=null]=a}else{let a=(r.match(/:/g)||[]).length;if(a>1)throw new Error("IPv6 地址必须使用方括号");a===1?[o,i]=r.split(":"):o=r}if(!o)throw new Error("主机名不能为空");if(!s&&/\s|[/@?#\[\]]/.test(o))throw new Error("主机名格式无效");if(/^[\d.]+$/.test(o)&&!et(o))throw new Error("IPv4 地址格式无效");let n=Re(i===null?t:i);return{hostname:o,port:n}}function It(e=""){let t=qe(e);if(/^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/.test(t))return!0;if(!t.includes(":"))return!1;try{return new URL(`http://[${t}]/`),!0}catch{return!1}}function et(e){let t=String(e||"").split(".");return t.length===4&&t.every(r=>/^\d{1,3}$/.test(r)&&Number(r)>=0&&Number(r)<=255)}async function Lt(e,t=16,r=-1){let o=new URL(e.url),i=String(o.searchParams.get("cnIspCode")||"").toLowerCase(),s=["ct","cu","cmcc","cf"].includes(i)?i:ut(e),n={cmcc:"CF移动优选",cu:"CF联通优选",ct:"CF电信优选",cf:"CF官方优选"},a=s==="cf"?`https://raw.githubusercontent.com/${se[1]}/${se[1]}/main/CF-CIDR.txt`:`https://raw.githubusercontent.com/${se[1]}/${se[1]}/main/CF-CIDR/${s}.txt`,l=n[s]||"CF官方优选",f=[443,2053,2083,2087,2096,8443],c=[];try{let h=await fetch(a);c=h.ok?await _e(await h.text()):["104.16.0.0/13"]}catch{c=["104.16.0.0/13"]}let p=h=>{let[w,u]=h.split("/"),d=parseInt(u),b=32-d,$=w.split(".").reduce((x,y,C)=>x|parseInt(y)<<24-C*8,0),S=Math.floor(Math.random()*Math.pow(2,b)),m=4294967295<<b>>>0,v=(($&m)>>>0)+S>>>0;return[v>>>24&255,v>>>16&255,v>>>8&255,v&255].join(".")},g=Array.from({length:t},(h,w)=>{let u=p(c[Math.floor(Math.random()*c.length)]),d=r===-1?f[Math.floor(Math.random()*f.length)]:r;return`${u}:${d}#${l}${w+1}`});return[g,g.join(`
`)]}async function wr(e){let t=[],r="",o=e.replace(/^sub:\/\//i,"https://").split("#")[0].split("?")[0];/^https?:\/\//i.test(o)||(o=`https://${o}`);try{o=new URL(o).origin}catch(s){return t.push(`127.0.0.1:1234#${e}优选订阅生成器格式化异常:${s.message}`),[t,r]}let i=`${o}/sub?host=example.com&uuid=00000000-0000-4000-8000-000000000000`;try{let s=await fetch(i,{headers:{"User-Agent":"v2rayN/edgetunnel (https://github.com/"+se[1]+"/edgetunnel)"}});if(!s.ok)return t.push(`127.0.0.1:1234#${e}优选订阅生成器异常:${s.statusText}`),[t,r];let n=atob(await s.text()),a=n.includes(`\r
`)?n.split(`\r
`):n.split(`
`);for(let l of a)if(l.trim())if(l.includes("00000000-0000-4000-8000-000000000000")&&l.includes("example.com")){let f=l.match(/:\/\/[^@]+@([^?]+)/);if(f){let c=f[1],p="",g=l.match(/#(.+)$/);g&&(p="#"+ve(g[1])),t.push(c+p)}}else r+=l+`
`}catch(s){t.push(`127.0.0.1:1234#${e}优选订阅生成器异常:${s.message}`)}return[t,r]}async function xr(e,t="443",r=3e3){if(!e?.length)return[[],[],[],[]];let o=new Set,i=new Set,s="",n=[];await Promise.allSettled(e.map(async l=>{let f=l.indexOf("#"),c=f>-1?l.substring(0,f):l,p=f>-1?ve(l.substring(f+1)):null,g=l.toLowerCase().includes("proxyip=true");if(c.toLowerCase().startsWith("sub://")){try{let[h,w]=await wr(c);if(p)for(let u of h){let d=u.includes("#")?`${u} [${p}]`:`${u}#[${p}]`;o.add(d),g&&i.add(u.split("#")[0])}else for(let u of h)o.add(u),g&&i.add(u.split("#")[0]);if(w&&typeof w=="string"&&p){let u=w.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi,(d,b,$)=>`${b.includes("#")?`${b}${encodeURIComponent(` [${p}]`)}`:`${b}${encodeURIComponent(`#[${p}]`)}`}${$}`);s+=u}else w&&typeof w=="string"&&(s+=w)}catch{}return}try{let h=new AbortController,w=setTimeout(()=>h.abort(),r),u=await fetch(c,{signal:h.signal});clearTimeout(w);let d="";try{let y=await u.arrayBuffer(),k=(u.headers.get("content-type")||"").toLowerCase().match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase()||"",E=["utf-8","gb2312"];(k.includes("gb")||k.includes("gbk")||k.includes("gb2312"))&&(E=["gb2312","utf-8"]);let T=!1;for(let P of E)try{let _=new TextDecoder(P).decode(y);if(_&&_.length>0&&!_.includes("�")){d=_,T=!0;break}else if(_&&_.length>0)continue}catch{continue}if(T||(d=await u.text()),!d||d.trim().length===0)return}catch(y){console.error("Failed to decode response:",y);return}let b=d,$=typeof d=="string"?d.replace(/\s/g,""):"";if($.length>0&&$.length%4===0&&/^[A-Za-z0-9+/]+={0,2}$/.test($))try{let y=new Uint8Array(atob($).split("").map(C=>C.charCodeAt(0)));b=new TextDecoder("utf-8").decode(y)}catch{}if(b.split("#")[0].includes("://")){if(p){let y=b.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi,(C,k,E)=>`${k.includes("#")?`${k}${encodeURIComponent(` [${p}]`)}`:`${k}${encodeURIComponent(`#[${p}]`)}`}${E}`);s+=y+`
`}else s+=b+`
`;return}let S=d.trim().split(`
`).map(y=>y.trim()).filter(y=>y),m=S.length>1&&S[0].includes(","),v=/^[^\[\]]*:[^\[\]]*:[^\[\]]/,x=new URL(c);if(!m)S.forEach(y=>{let C=y.indexOf("#"),[k,E]=C>-1?[y.substring(0,C),y.substring(C)]:[y,""],T=!1;if(k.startsWith("["))T=/\]:(\d+)$/.test(k);else{let z=k.lastIndexOf(":");T=z>-1&&/^\d+$/.test(k.substring(z+1))}let P=x.searchParams.get("port")||t,_=T?y:`${k}:${P}${E}`;if(p){let z=_.includes("#")?`${_} [${p}]`:`${_}#[${p}]`;o.add(z)}else o.add(_);g&&i.add(_.split("#")[0])});else{let y=S[0].split(",").map(k=>k.trim()),C=S.slice(1);if(y.includes("IP地址")&&y.includes("端口")&&y.includes("数据中心")){let k=y.indexOf("IP地址"),E=y.indexOf("端口"),T=y.indexOf("国家")>-1?y.indexOf("国家"):y.indexOf("城市")>-1?y.indexOf("城市"):y.indexOf("数据中心"),P=y.indexOf("TLS");C.forEach(_=>{let z=_.split(",").map(U=>U.trim());if(P!==-1&&z[P]?.toLowerCase()!=="true")return;let A=v.test(z[k])?`[${z[k]}]`:z[k],L=`${A}:${z[E]}#${z[T]}`;if(p){let U=`${L} [${p}]`;o.add(U)}else o.add(L);g&&i.add(`${A}:${z[E]}`)})}else if(y.some(k=>k.includes("IP"))&&y.some(k=>k.includes("延迟"))&&y.some(k=>k.includes("下载速度"))){let k=y.findIndex(_=>_.includes("IP")),E=y.findIndex(_=>_.includes("延迟")),T=y.findIndex(_=>_.includes("下载速度")),P=x.searchParams.get("port")||t;C.forEach(_=>{let z=_.split(",").map(U=>U.trim()),A=v.test(z[k])?`[${z[k]}]`:z[k],L=`${A}:${P}#CF优选 ${z[E]}ms ${z[T]}MB/s`;if(p){let U=`${L} [${p}]`;o.add(U)}else o.add(L);g&&i.add(`${A}:${P}`)})}}}catch{}}));let a=s.trim()?[...new Set(s.split(/\r?\n/).filter(l=>l.trim()!==""))]:[];return[Array.from(o),a,n,Array.from(i)]}function M(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e||0)}function ie(...e){if(!e||e.length===0)return new Uint8Array(0);let t=e.map(M),r=t.reduce((s,n)=>s+n.byteLength,0),o=new Uint8Array(r),i=0;for(let s of t)o.set(s,i),i+=s.byteLength;return o}function q(e){return e?typeof e.byteLength=="number"?e.byteLength:typeof e.length=="number"?e.length:0:0}function Fe(e){let r=e?.fetcher;if(!r||typeof r.connect!="function")throw new Error("request.fetcher.connect unavailable");return(o,i)=>i===void 0?r.connect(o):r.connect(o,i)}function ee(e){try{(e.readyState===WebSocket.OPEN||e.readyState===WebSocket.CLOSING)&&e.close()}catch{}}async function Ze(e,t){let r=e.send(t);r&&typeof r.then=="function"&&await r}function pt(e=null){let t=new TextEncoder().encode(`HTTP/1.1 204 No Content\r
Content-Length: 0\r
Connection: close\r
\r
`);if(q(e)===0)return t;let r=M(e),o=new Uint8Array(r.byteLength+t.byteLength);return o.set(r,0),o.set(t,r.byteLength),O(`[TCP转发] 构造本地204响应: ${o.byteLength}B`),o}function hn(e=null){let t=new TextEncoder().encode(`HTTP/1.1 204 No Content\r
Content-Length: 0\r
Connection: keep-alive\r
\r
`);if(q(e)===0)return t;let r=M(e),o=new Uint8Array(r.byteLength+t.byteLength);return o.set(r,0),o.set(t,r.byteLength),o}function mn(e,t=null){let r=Ve,o=Vr,i=Math.max(4096,o<<3),s=t,n=new Uint8Array(r),a=0,l=null,f=!1,c=0,p=0,g=0,h=null,w=async $=>{if(e.readyState!==WebSocket.OPEN)throw new Error("ws.readyState is not open");await Ze(e,$)},u=$=>{if(!s)return $;let S=new Uint8Array(s.length+$.byteLength);return S.set(s,0),S.set($,s.length),s=null,S},d=async()=>{if(await h,l&&clearTimeout(l),l=null,f=!1,!a)return;let $=n.subarray(0,a).slice();return n=new Uint8Array(r),a=0,g=0,h=w($).finally(()=>{h=null}),h},b=()=>{l||f||(f=!0,p=c,queueMicrotask(()=>{if(f=!1,!(!a||l)){if(r-a<o){d().catch(()=>ee(e));return}l=setTimeout(()=>{if(l=null,!!a){if(r-a<o){d().catch(()=>ee(e));return}if(g<2&&(c!==p||a<i)){g++,p=c,b();return}d().catch(()=>ee(e))}},Math.max(Pt,1))}}))};return{async 直接发送($){let S=M($);S.byteLength&&(S=u(S),await w(S))},async 发送($){let S=M($);if(!S.byteLength)return;S=u(S);let m=0,v=S.byteLength;for(;m<v;){if(!a&&v-m>=r){let y=Math.min(r,v-m),C=m||y!==v?S.subarray(m,m+y):S;await w(C),m+=y;continue}let x=Math.min(r-a,v-m);n.set(S.subarray(m,m+x),a),a+=x,m+=x,c++,a===r||r-a<o?await d():b()}},flush:d}}async function ft(e,t,r,o){let i=r,s=!1,n=!1,a,l=!1,f=64*1024,c=mn(t,i);i=null;try{a=e.readable.getReader({mode:"byob"}),l=!0}catch{a=e.readable.getReader()}try{if(l){let p=new ArrayBuffer(f);for(;;){let{done:g,value:h}=await a.read(new Uint8Array(p,0,f));if(g)break;!h||h.byteLength===0||(s=!0,h.byteLength>=Ve?(await c.flush(),await c.直接发送(h),p=new ArrayBuffer(f)):(await c.发送(h),p=h.buffer.byteLength>=f?h.buffer:new ArrayBuffer(f)))}}else for(;;){let{done:p,value:g}=await a.read();if(p)break;!g||g.byteLength===0||(s=!0,await c.发送(g))}await c.flush()}catch{n=!0,ee(t)}finally{try{a.releaseLock()}catch{}try{await a.cancel()}catch{}}!n&&!s&&o&&await o()}var Oo=255;function br(e,t){let r=new TextEncoder().encode(String(e??""));if(r.byteLength>Oo)throw new Error(`S5 ${t} exceeds 255 bytes`);return r}function No(e){let t=new Uint8Array(0);return{async 读取(r,o){if(!Number.isSafeInteger(r)||r<0)throw new Error("Invalid S5 read length");for(;t.byteLength<r;){let{done:s,value:n}=await e.read();if(s||!n)throw new Error(`S5 ${o} response is truncated`);let a=M(n);if(!a.byteLength)continue;let l=new Uint8Array(t.byteLength+a.byteLength);l.set(t,0),l.set(a,t.byteLength),t=l}let i=t.slice(0,r);return t=t.slice(r),i},取出剩余数据(){let r=t;return t=new Uint8Array(0),r}}}function Do(e,t){if(!t.byteLength)return e;let o=e.readable.getReader(),i=!0;return{readable:new ReadableStream({async pull(n){if(i){i=!1,n.enqueue(t);return}try{let{done:a,value:l}=await o.read();if(a){o.releaseLock(),n.close();return}l?.byteLength&&n.enqueue(l)}catch(a){n.error(a);try{o.releaseLock()}catch{}}},cancel(n){return o.cancel(n).finally(()=>{try{o.releaseLock()}catch{}})}}),writable:e.writable,closed:e.closed,close:()=>e.close()}}async function Ut(e,t,r,o,i){let{username:s,password:n,hostname:a,port:l}=i||{};if(s&&!n||!s&&n)throw new Error("S5 username and password must be provided together");if(!Number.isInteger(t)||t<1||t>65535)throw new Error("S5 target port is invalid");let f=s&&n?br(s,"username"):null,c=s&&n?br(n,"password"):null,p=br(e,"hostname");if(!p.byteLength)throw new Error("S5 hostname is empty");let g=o({hostname:a,port:l}),h=g.writable.getWriter(),w=g.readable.getReader(),u=No(w);try{let d=s&&n?new Uint8Array([5,2,0,2]):new Uint8Array([5,1,0]);await h.write(d);let b=await u.读取(2,"method selection");if(b[0]!==5)throw new Error("S5 method selection has invalid version");let $=b[1];if($===2){if(!s||!n)throw new Error("S5 requires authentication");let y=new Uint8Array([1,f.length,...f,c.length,...c]);await h.write(y);let C=await u.读取(2,"authentication");if(C[0]!==1||C[1]!==0)throw new Error("S5 authentication failed")}else if($!==0)throw new Error(`S5 unsupported auth method: ${$}`);let S=new Uint8Array([5,1,0,3,p.length,...p,t>>8,t&255]);await h.write(S);let m=await u.读取(4,"CONNECT header");if(m[0]!==5||m[2]!==0)throw new Error("S5 CONNECT response is invalid");if(m[1]!==0)throw new Error(`S5 connection failed: ${m[1]}`);let v;if(m[3]===1)v=4;else if(m[3]===4)v=16;else if(m[3]===3)v=(await u.读取(1,"CONNECT domain length"))[0];else throw new Error(`S5 CONNECT response has unsupported address type: ${m[3]}`);await u.读取(v+2,"CONNECT address"),q(r)>0&&await h.write(r);let x=u.取出剩余数据();return h.releaseLock(),w.releaseLock(),Do(g,x)}catch(d){try{h.releaseLock()}catch{}try{w.releaseLock()}catch{}try{g.close()}catch{}throw d}}var gn=8*1024;async function Mo(e,t="HTTP"){let r=new Uint8Array(gn),o=0,i=0;for(;;){let{done:s,value:n}=await e.read();if(s||!n)throw new Error(`${t} 代理在返回 CONNECT 响应前关闭连接`);let a=M(n);for(let l=0;l<a.byteLength;l++){if(o>=gn)throw new Error("代理 CONNECT 响应头过长或无效");let f=a[l];r[o++]=f;let c=[13,10,13,10][i];if(f===c?i++:i=f===13?1:0,i===4){let g=new TextDecoder().decode(r.subarray(0,o)).split(`\r
`,1)[0].match(/^HTTP\/\d\.\d\s+(\d{3})(?:\s|$)/),h=g?Number(g[1]):NaN;if(!Number.isFinite(h)||h<200||h>=300)throw new Error(`Connection failed: HTTP ${Number.isFinite(h)?h:"invalid"}`);return{statusCode:h,bufferedData:a.slice(l+1)}}}}}function jo(e,t){if(!t.byteLength)return e;let r=e.readable.getReader(),o=!0;return{readable:new ReadableStream({async pull(s){if(o){o=!1,s.enqueue(t);return}try{let{done:n,value:a}=await r.read();if(n){r.releaseLock(),s.close();return}a?.byteLength&&s.enqueue(a)}catch(n){try{r.releaseLock()}catch{}s.error(n)}},cancel(s){try{return r.cancel(s).catch(()=>{}).finally(()=>{try{r.releaseLock()}catch{}})}catch{try{r.releaseLock()}catch{}}}}),writable:e.writable,closed:e.closed,close:()=>e.close()}}async function dt(e,t,r,o=!1,i,s){let{username:n,password:a,hostname:l,port:f}=s||{},c=o?i({hostname:l,port:f},{secureTransport:"on",allowHalfOpen:!1}):i({hostname:l,port:f}),p=c.writable.getWriter(),g=c.readable.getReader(),h=new TextEncoder;try{o&&await c.opened;let w=n&&a?`Proxy-Authorization: Basic ${btoa(`${n}:${a}`)}\r
`:"",u=`CONNECT ${e}:${t} HTTP/1.1\r
Host: ${e}:${t}\r
${w}User-Agent: Mozilla/5.0\r
Connection: keep-alive\r
\r
`;await p.write(h.encode(u)),p.releaseLock();let{bufferedData:d}=await Mo(g,o?"HTTPS":"HTTP");if(g.releaseLock(),q(r)>0){let b=c.writable.getWriter();try{await b.write(r)}finally{try{b.releaseLock()}catch{}}}return jo(c,d)}catch(w){try{p.releaseLock()}catch{}try{g.releaseLock()}catch{}try{await Promise.resolve(c.close())}catch{}throw w}}var Oe={},yn=256,Fo={A:1,NS:2,CNAME:5,MX:15,TXT:16,AAAA:28,SRV:33,HTTPS:65};async function Te(e,t,r="https://cloudflare-dns.com/dns-query"){let o=String(e||"").trim().toLowerCase().replace(/\.$/,""),i=String(t||"").trim().toUpperCase(),s=`${o}:${i}`,n=Fo[i]||1,a=Date.now(),l=Oe[s];if(l&&a<l.过期时间)return O(`[DoH查询] 命中缓存 ${e} ${t} via ${r}`),l.data.map(c=>({type:n,data:c}));let f=performance.now();O(`[DoH查询] 开始查询 ${e} ${t} via ${r}`);try{let p=(P=>{let _=P.endsWith(".")?P.slice(0,-1).split("."):P.split("."),z=[];for(let R of _){let I=new TextEncoder().encode(R);z.push(new Uint8Array([I.length]),I)}z.push(new Uint8Array([0]));let A=z.reduce((R,I)=>R+I.length,0),L=new Uint8Array(A),U=0;for(let R of z)L.set(R,U),U+=R.length;return L})(o),g=new Uint8Array(12+p.length+4),h=new DataView(g.buffer);h.setUint16(0,crypto.getRandomValues(new Uint16Array(1))[0]),h.setUint16(2,256),h.setUint16(4,1),g.set(p,12),h.setUint16(12+p.length,n),h.setUint16(12+p.length+2,1),O(`[DoH查询] 发送查询报文 ${e} via ${r} (type=${n}, ${g.length}字节)`);let w=await fetch(r,{method:"POST",headers:{"Content-Type":"application/dns-message",Accept:"application/dns-message"},body:g});if(!w.ok)return console.warn(`[DoH查询] 请求失败 ${e} ${t} via ${r} 响应代码:${w.status}`),[];let u=new Uint8Array(await w.arrayBuffer()),d=new DataView(u.buffer),b=d.getUint16(4),$=d.getUint16(6);O(`[DoH查询] 收到响应 ${e} ${t} via ${r} (${u.length}字节, ${$}条应答)`);let S=P=>{let _=[],z=P,A=!1,L=-1,U=128;for(;z<u.length&&U-- >0;){let R=u[z];if(R===0){A||(L=z+1);break}if((R&192)===192){A||(L=z+2),z=(R&63)<<8|u[z+1],A=!0;continue}_.push(new TextDecoder().decode(u.slice(z+1,z+1+R))),z+=R+1}return L===-1&&(L=z+1),[_.join("."),L]},m=12;for(let P=0;P<b;P++){let[,_]=S(m);m=_+4}let v=[];for(let P=0;P<$&&m<u.length;P++){let[_,z]=S(m);m=z;let A=d.getUint16(m);m+=2,m+=2;let L=d.getUint32(m);m+=4;let U=d.getUint16(m);m+=2;let R=u.slice(m,m+U);m+=U;let I;if(A===1&&U===4)I=`${R[0]}.${R[1]}.${R[2]}.${R[3]}`;else if(A===28&&U===16){let N=[];for(let F=0;F<16;F+=2)N.push((R[F]<<8|R[F+1]).toString(16));I=N.join(":")}else if(A===16){let N=0,F=[];for(;N<U;){let H=R[N++];F.push(new TextDecoder().decode(R.slice(N,N+H))),N+=H}I=F.join("")}else if(A===5){let[N]=S(m-U);I=N}else I=Array.from(R).map(N=>N.toString(16).padStart(2,"0")).join("");v.push({name:_,type:A,TTL:L,data:I,rdata:R})}let x=(performance.now()-f).toFixed(2);O(`[DoH查询] 查询完成 ${e} ${t} via ${r} ${x}ms 共${v.length}条结果${v.length>0?`
`+v.map((P,_)=>`  ${_+1}. ${P.name} type=${P.type} TTL=${P.TTL} data=${P.data}`).join(`
`):""}`);let y=v.filter(P=>P.type===n),C=y.length>0?Math.min(...y.map(P=>P.TTL)):0,k=Math.max(C,300),E=Date.now()+k*1e3,T=y.map(P=>P.data);if(T.length>0||v.length===0){if(Object.keys(Oe).length>=yn){let P=Date.now();for(let[_,z]of Object.entries(Oe))P>=z.过期时间&&delete Oe[_];Object.keys(Oe).length>=yn&&delete Oe[Object.keys(Oe)[0]]}Oe[s]={data:T,过期时间:E},O(`[DoH查询] 写入缓存 ${e} ${t} TTL=${k}s${T.length===0?"（空结果）":""}`)}return v}catch(c){let p=(performance.now()-f).toFixed(2);return console.error(`[DoH查询] 查询失败 ${e} ${t} via ${r} ${p}ms:`,c),[]}}var wn=new TextEncoder,Bo=new TextDecoder,Zt=9999,_r=new Uint8Array([33,18,164,66]),we={ALLOCATE_REQUEST:3,ALLOCATE_SUCCESS:259,ALLOCATE_ERROR:275,CREATE_PERMISSION_REQUEST:8,CREATE_PERMISSION_SUCCESS:264,CONNECT_REQUEST:10,CONNECT_SUCCESS:266,CONNECTION_BIND_REQUEST:11,CONNECTION_BIND_SUCCESS:267},de={USERNAME:6,MESSAGE_INTEGRITY:8,ERROR_CODE:9,XOR_PEER_ADDRESS:18,REALM:20,NONCE:21,REQUESTED_TRANSPORT:25,CONNECTION_ID:42};async function Ot(e,t,r){let o;try{return await Promise.race([e,new Promise((i,s)=>{o=setTimeout(()=>s(new Error(r)),t)})])}finally{clearTimeout(o)}}function _n(e){return-e&3}function Ne(e,t){let r=M(t),o=new Uint8Array(4+r.byteLength+_n(r.byteLength)),i=new DataView(o.buffer);return i.setUint16(0,e),i.setUint16(2,r.byteLength),o.set(r,4),o}function Be(e,t,r){let o=ie(...r),i=new Uint8Array(20),s=new DataView(i.buffer);return s.setUint16(0,e),s.setUint16(2,o.byteLength),i.set(_r,4),i.set(t,8),ie(i,o)}function xn(e){return e?.byteLength>=4?(e[2]&7)*100+e[3]:0}function He(){return crypto.getRandomValues(new Uint8Array(12))}async function bn(e,t){let r=new Uint8Array(e),o=new DataView(r.buffer);o.setUint16(2,o.getUint16(2)+24);let i=await crypto.subtle.importKey("raw",t,{name:"HMAC",hash:"SHA-1"},!1,["sign"]),s=await crypto.subtle.sign("HMAC",i,r);return ie(r,Ne(de.MESSAGE_INTEGRITY,new Uint8Array(s)))}async function ht(e,t=null,r="TURN response timed out"){let o=q(t)?M(t):new Uint8Array(0),i=async()=>{let{done:f,value:c}=await Ot(e.read(),Zt,r);if(f)throw new Error("TURN server closed connection");c?.byteLength&&(o=ie(o,c))};for(;o.byteLength<20;)await i();let s=20+(o[2]<<8|o[3]);if(s>65555)throw new Error("TURN response is too large");for(;o.byteLength<s;)await i();let n=o.subarray(0,s);if(_r.some((f,c)=>n[4+c]!==f))throw new Error("Invalid TURN/STUN response");let a=new DataView(n.buffer,n.byteOffset,n.byteLength),l={};for(let f=20;f+4<=s;){let c=a.getUint16(f),p=a.getUint16(f+2);if(f+4+p>n.byteLength)break;l[c]=n.slice(f+4,f+4+p),f+=4+p+_n(p)}return{message:{type:a.getUint16(0),attributes:l},extraData:o.byteLength>s?o.subarray(s):null}}async function Rt(e,t,r){await Ot(e.write(t),Zt,r)}async function Nt(e,t,r,o){e={...e,username:e.username??null,password:e.password??null};let i=qe(t),s=et(i)?i:null;if(!s){let b=(await Te(i,"A")).find($=>$.type===1&&et($.data))?.data;s=typeof b=="string"?b:null}if(!s)throw new Error(`Could not resolve ${t} to an IPv4 address for TURN CONNECT`);let n=qe(e.hostname),a=null,l=null,f=null,c=null,p=null,g=null,h=!1,w=()=>{try{a?.close?.()}catch{}try{l?.close?.()}catch{}},u=()=>{if(!h){h=!0;try{g?.releaseLock?.()}catch{}}};try{a=o({hostname:n,port:e.port}),await Ot(a.opened,Zt,"TURN server connection timed out"),f=a.writable.getWriter(),c=a.readable.getReader();let d=new Uint8Array(8);d[1]=1,new DataView(d.buffer).setUint16(2,r^8466),s.split(".").forEach((T,P)=>{d[4+P]=Number(T)^_r[P]});let b=Ne(de.XOR_PEER_ADDRESS,d),$=new Uint8Array([6,0,0,0]);await Rt(f,Be(we.ALLOCATE_REQUEST,He(),[Ne(de.REQUESTED_TRANSPORT,$)]),"TURN Allocate request timed out");let S=await ht(c,null,"TURN Allocate response timed out"),m=S.message,v=S.extraData,x=null,y=[],C=T=>x?bn(T,x):Promise.resolve(T);if(m.type===we.ALLOCATE_ERROR&&e.username!==null&&e.password!==null&&xn(m.attributes[de.ERROR_CODE])===401){let T=m.attributes[de.REALM],P=m.attributes[de.NONCE];if(!T||!P?.byteLength)throw new Error("TURN authentication challenge is missing realm or nonce");let _=Bo.decode(T);x=mr(`${e.username}:${_}:${e.password}`),y=[Ne(de.USERNAME,wn.encode(e.username)),Ne(de.REALM,wn.encode(_)),Ne(de.NONCE,P)];let z=await bn(Be(we.ALLOCATE_REQUEST,He(),[Ne(de.REQUESTED_TRANSPORT,$),...y]),x),A=await Promise.all([C(Be(we.CREATE_PERMISSION_REQUEST,He(),[b,...y])),C(Be(we.CONNECT_REQUEST,He(),[b,...y]))]);await Rt(f,ie(z,...A),"TURN authenticated Allocate request timed out"),S=await ht(c,v,"TURN authenticated Allocate response timed out"),m=S.message,v=S.extraData}else if(m.type===we.ALLOCATE_SUCCESS){let T=await Promise.all([C(Be(we.CREATE_PERMISSION_REQUEST,He(),[b,...y])),C(Be(we.CONNECT_REQUEST,He(),[b,...y]))]);T.length&&await Rt(f,ie(...T),"TURN pipelined request timed out")}if(m.type!==we.ALLOCATE_SUCCESS){let T=xn(m.attributes[de.ERROR_CODE]);throw new Error(T?`TURN Allocate failed with ${T}`:"TURN Allocate failed")}if(l=o({hostname:n,port:e.port}),S=await ht(c,v,"TURN CreatePermission response timed out"),m=S.message,v=S.extraData,m.type!==we.CREATE_PERMISSION_SUCCESS)throw new Error("TURN CreatePermission failed");if(S=await ht(c,v,"TURN CONNECT response timed out"),m=S.message,v=S.extraData,m.type!==we.CONNECT_SUCCESS||!m.attributes[de.CONNECTION_ID])throw new Error("TURN CONNECT failed");await Ot(l.opened,Zt,"TURN data connection timed out"),p=l.writable.getWriter(),g=l.readable.getReader(),await Rt(p,await C(Be(we.CONNECTION_BIND_REQUEST,He(),[Ne(de.CONNECTION_ID,m.attributes[de.CONNECTION_ID]),...y])),"TURN ConnectionBind request timed out"),S=await ht(g,null,"TURN ConnectionBind response timed out"),m=S.message;let k=S.extraData;if(m.type!==we.CONNECTION_BIND_SUCCESS)throw new Error("TURN ConnectionBind failed");return f.releaseLock(),f=null,c.releaseLock(),c=null,p.releaseLock(),p=null,{readable:new ReadableStream({start(T){k?.byteLength&&T.enqueue(k)},pull(T){return g.read().then(({done:P,value:_})=>{P?(u(),T.close()):_?.byteLength&&T.enqueue(new Uint8Array(_))}).catch(P=>{u(),T.error(P)})},cancel(){try{g?.cancel?.()}catch{}u(),w()}}),writable:l.writable,closed:l.closed,close:w}}catch(d){try{f?.releaseLock?.()}catch{}try{c?.releaseLock?.()}catch{}try{p?.releaseLock?.()}catch{}throw u(),w(),d}}function tt({获取写入器:e,释放写入器:t,重试连接:r,关闭连接:o,名称:i="上行队列"}){let s=[],n=0,a=0,l=!1,f=!1,c=null,p=[],g=null,h=(x,y=null)=>{if(x)for(let C of x)y?C.reject(y):C.resolve()},w=x=>{for(let y=n;y<s.length;y++){let C=s[y];C?.completions&&h(C.completions,x)}},u=()=>{n>32&&n*2>=s.length&&(s=s.slice(n),n=0)},d=()=>{if(a||l||!p.length)return;let x=p;p=[];for(let y of x)y()},b=(x=null)=>{let y=x||(f?new Error(`${i}: queue closed`):null);y&&(w(y),h(g,y),g=null),s=[],n=0,a=0,d()},$=()=>{if(n>=s.length)return null;let x=s[n];return s[n++]=void 0,a-=x.chunk.byteLength,u(),x},S=()=>{let x=$();if(!x)return null;if(n>=s.length||x.chunk.byteLength>=St)return x;let y=x.chunk.byteLength,C=n,k=x.allowRetry,E=x.completions||null;for(;C<s.length;){let _=s[C],z=y+_.chunk.byteLength;if(z>St)break;y=z,k=k&&_.allowRetry,_.completions&&(E=E?E.concat(_.completions):_.completions),C++}if(C===n)return x;let T=c||=new Uint8Array(St);T.set(x.chunk);let P=x.chunk.byteLength;for(;n<C;){let _=s[n];s[n++]=void 0,a-=_.chunk.byteLength,T.set(_.chunk,P),P+=_.chunk.byteLength}return u(),{chunk:T.subarray(0,y),allowRetry:k,completions:E}},m=async()=>{if(!(l||f)){l=!0;try{for(;!f;){let x=S();if(!x)break;let y=e();if(!y)throw new Error(`${i}: remote writer unavailable`);let C=x.completions||null;g=C;try{try{await y.write(x.chunk)}catch(k){if(t?.(),!x.allowRetry||typeof r!="function"||(await r(),y=e(),!y))throw k;await y.write(x.chunk)}h(C)}catch(k){throw h(C,k),k}finally{g===C&&(g=null)}}}catch(x){f=!0,b(x),O(`[${i}] 写入失败: ${x?.message||x}`);try{o?.(x)}catch{}}finally{l=!1,!f&&n<s.length?queueMicrotask(m):d()}}},v=(x,y=!0,C=!1)=>{if(f||!e())return!1;let k=M(x);if(!k.byteLength)return!0;let E=a+k.byteLength,T=s.length-n+1;if(E>kt||T>Ct){f=!0;let z=Object.assign(new Error(`${i}: upload queue overflow (${E}B/${T})`),{isQueueOverflow:!0});b(z),O(`[${i}] 队列超限，关闭连接`);try{o?.(z)}catch{}throw z}let P=null,_=null;return C&&(_=[],P=new Promise((z,A)=>_.push({resolve:z,reject:A}))),s.push({chunk:k,allowRetry:y,completions:_}),a=E,l||queueMicrotask(m),C?P.then(()=>!0):!0};return{写入(x,y=!0){return v(x,y,!1)},写入并等待(x,y=!0){return v(x,y,!0)},async 等待空(){!a&&!l||await new Promise(x=>p.push(x))},清空(){f=!0,b()}}}function $n(e,t=443){let{hostname:r,port:o}=lt(e,t);return[r,o]}async function vn(e,t="dash.cloudflare.com",r="00000000-0000-4000-8000-000000000000"){e=e.toLowerCase();function o(h){return h.flatMap(w=>(w.startsWith('"')&&w.endsWith('"')&&(w=w.slice(1,-1)),w.replace(/\\010/g,",").replace(/\n/g,",").split(",").map(u=>u.trim()).filter(Boolean))).flatMap(w=>{try{return[$n(w)]}catch(u){return O(`[反代解析] 忽略无效 TXT 地址 ${w}: ${u.message}`),[]}})}let i=await _e(e),s=[],n=/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,a=/^\[?(?:[a-fA-F0-9]{0,4}:){1,7}[a-fA-F0-9]{0,4}\]?$/;for(let h of i){let[w,u]=$n(h);if(h.includes(".tp")){let y=h.match(/\.tp(\d+)$/);y&&(u=Re(y[1],"TP 端口"))}if(n.test(w)||a.test(w)){O(`[反代解析] ${w} 为IP地址，直接使用`),s.push([w,u]);continue}let[d,b]=await Promise.all([Te(w,"TXT"),Te(w,"A")]),$=d.filter(y=>y.type===16).map(y=>y.data),S=o($);if(S.length>0){O(`[反代解析] ${w} 使用TXT记录，共${S.length}个结果`),s.push(...S);continue}let m=b.filter(y=>y.type===1).map(y=>y.data);if(m.length>0){O(`[反代解析] ${w} 未获取到TXT记录，使用A记录，共${m.length}个结果`),s.push(...m.map(y=>[y,u]));continue}let x=(await Te(w,"AAAA")).filter(y=>y.type===28).map(y=>`[${y.data}]`);x.length>0?(O(`[反代解析] ${w} 未获取到TXT和A记录，使用AAAA记录，共${x.length}个结果`),s.push(...x.map(y=>[y,u]))):(O(`[反代解析] ${w} 未获取到TXT、A和AAAA记录，保留原域名`),s.push([w,u]))}let l=s.sort((h,w)=>h[0].localeCompare(w[0])),f=t.includes(".")?t.split(".").slice(-2).join("."):t,c=[...f+r].reduce((h,w)=>h+w.charCodeAt(0),0);O(`[反代解析] 随机种子: ${c}
目标站点: ${f}`);let g=[...l].sort(()=>(c=c*1103515245+12345&2147483647)/2147483647-.5).slice(0,8);return O(`[反代解析] 解析完成 总数: ${g.length}个
${g.map(([h,w],u)=>`${u+1}. ${h}:${w}`).join(`
`)}`),g}async function Se(e,t,r,o,i,s,n,a=null,l={},f=!1,c=null){let p=l.反代IP||"",g=l.代理类型!==void 0?l.代理类型:null,h=l.代理全局!==void 0?l.代理全局:!1,w=l.代理参数||{},u=l.反代兜底!==void 0?l.反代兜底:!0,d=0;O(`[TCP转发] 目标: ${e}:${t} | 反代IP: ${p} | 反代兜底: ${u?"是":"否"} | 反代类型: ${g||"proxyip"} | 全局: ${h?"是":"否"}`);let b=1e3,$=!1,S=Fe(a),m=f&&(l.木马反代地址||null),v=m?l.木马反代地址:null,x=m?Sn(c,r):null;async function y(A,L=b){let U;try{await Promise.race([A.opened??new Promise(()=>{}),new Promise((R,I)=>{U=setTimeout(()=>I(new Error("连接超时")),L)})])}finally{clearTimeout(U)}}async function C(A,L){let U=S({hostname:A,port:L});try{return await y(U),U}catch(R){try{U?.close?.()}catch{}throw R}}async function k(A,L){if(q(L)<=0)return;let U=A.writable.getWriter();try{await U.write(M(L))}finally{try{U.releaseLock()}catch{}}}async function E(A){if(A.length===1){let R=A[0];return{socket:await C(R.hostname,R.port),candidate:R}}let L=A.map(R=>C(R.hostname,R.port).then(I=>({socket:I,candidate:R}))),U=null;try{return U=await Promise.any(L),U}finally{if(U)for(let R of L)R.then(({socket:I})=>{if(I!==U.socket)try{I?.close?.()}catch{}}).catch(()=>{})}}async function T(A,L){if(!At()||It(A))return null;O(`[TCP直连] 预加载竞速拨号开启，开始并发查询 ${A} 的 A/AAAA 记录`);let[U,R]=await Promise.all([Te(A,"A"),Te(A,"AAAA")]),I=[...new Set(U.flatMap(j=>{let W=j.data;return j.type===1&&typeof W=="string"&&et(W)?[W]:[]}))],N=[...new Set(R.flatMap(j=>{let W=j.data;return j.type===28&&typeof W=="string"&&It(W)?[W]:[]}))],F=Math.max(1,Je()|0),H=I.length>=F?I.slice(0,F):I.concat(N.slice(0,F-I.length)),X=I.length>0?H.length>I.length?"A+AAAA":"A":"AAAA";if(H.length===0)return O(`[TCP直连] ${A} 的 A/AAAA 未获得可用解析结果，预加载竞速不可用，回退到原始 hostname 直连。`),null;let te=H;return O(`[TCP直连] ${A} A记录:${I.length} AAAA记录:${N.length}，使用${X}记录，竞速拨号 ${te.length}/${F}: ${te.join(", ")}`),te.map((j,W)=>({hostname:j,port:L,attempt:W,resolvedFrom:A}))}async function P(A,L,U=null,R=!1){let I=R?await T(A,L):null,N=I||Array.from({length:Je()},(H,X)=>({hostname:A,port:L,attempt:X}));O(I?`[TCP直连] 并发尝试 ${N.length} 路: ${N.map(H=>`${H.hostname}:${H.port}`).join(", ")}`:`[TCP直连] 并发尝试 ${N.length} 路: ${A}:${L}`);let F=null;try{let H=await E(N);if(F=H.socket,I){let X=H.candidate;O(`[TCP直连] 预加载竞速结果: ${X.hostname}:${X.port} 胜出，源域名: ${X.resolvedFrom||A}`)}return await k(F,U),F}catch(H){try{F?.close?.()}catch{}throw I&&O(`[TCP直连] 预加载竞速失败: ${H.message||H}`),H}}async function _(A,L,U=null,R=null,I=!0){if(R&&R.length>0){let N=Math.max(1,Math.floor(Number(Tt())||1));for(let F=0;F<R.length;F+=N){let H=[];for(let j=0;j<N&&F+j<R.length;j++){let W=(d+F+j)%R.length,[re,Z]=R[W];H.push({hostname:re,port:Z,index:W})}let X=null,te=null;try{O(`[反代连接] 并发尝试 ${H.length} 路: ${H.map(W=>`${W.hostname}:${W.port}`).join(", ")}`);let j=await E(H);return X=j.socket,te=j.candidate,await k(X,U),O(`[反代连接] 成功连接到: ${te.hostname}:${te.port} (索引: ${te.index})`),d=te.index,X}catch(j){try{X?.close?.()}catch{}O(`[反代连接] 本批连接失败: ${j.message||j}`)}}}if(I)return P(A,L,U,!1);throw ee(o),new Error("[反代连接] 所有反代连接失败，且未启用反代兜底，连接终止。")}async function z(A=!0){if(s.connectingPromise){await s.connectingPromise;return}let L=!1,U=null;m?A&&!$&&q(c)>0?(U=c,L=q(r)>0):U=x:(L=A&&!$&&q(r)>0,U=L?r:null);let R=(async()=>{let I;if(m)O(`[木马反代] 代理到: ${e}:${t}`),I=await $r(U,S,v);else if(g==="socks5")O(`[SOCKS5代理] 代理到: ${e}:${t}`),I=await Ut(e,t,U,S,w);else if(g==="http")O(`[HTTP代理] 代理到: ${e}:${t}`),I=await dt(e,t,U,!1,S,w);else if(g==="https")O(`[HTTPS代理] 代理到: ${e}:${t}`),I=await dt(e,t,U,!0,S,w);else if(g==="turn"){if(O(`[TURN代理] 代理到: ${e}:${t}`),I=await Nt(w,e,t,S),q(U)>0){let N=I.writable.getWriter();try{await N.write(M(U))}finally{try{N.releaseLock()}catch{}}}}else{O(`[反代连接] 代理到: ${e}:${t}`);let N=await vn(p,e,n);I=await _(`${se[0]}.tp1.${se[2]}.xyz`,1,U,N,u)}L&&($=!0),s.socket=I,I.closed.catch(()=>{}).finally(()=>ee(o)),ft(I,o,i,null)})();s.connectingPromise=R;try{await R}finally{s.connectingPromise===R&&(s.connectingPromise=null)}}if(s.retryConnect=async()=>z(!$),g&&(h||je().some(A=>new RegExp(`^${A.replace(/\*/g,".*")}$`,"i").test(e)))){O("[TCP转发] 启用 SOCKS5/HTTP/HTTPS/TURN 全局代理");try{await z()}catch(A){throw O(`[TCP转发] SOCKS5/HTTP/HTTPS/TURN 代理连接失败: ${A.message}`),A}}else try{O(`[TCP转发] 尝试直连到: ${e}:${t}`);let A=await P(e,t,r,!0);s.socket=A,ft(A,o,i,async()=>{s.socket===A&&await z()})}catch(A){if(O(`[TCP转发] 直连 ${e}:${t} 失败: ${A.message}`),A instanceof Error&&A.name==="预加载解析为空")throw ee(o),A;await z()}}async function Ho(e){let t=new Uint8Array(2),r=0,o=null,i=0;for(;;){let{done:s,value:n}=await e.read();if(s||!n)throw new Error("DNS over TCP response is truncated");let a=M(n),l=0;if(r<2){let c=Math.min(2-r,a.byteLength);if(t.set(a.subarray(0,c),r),r+=c,l+=c,r<2)continue;let p=t[0]<<8|t[1];if(p===0)throw new Error("DNS over TCP response has empty payload");o=new Uint8Array(2+p),o.set(t,0),i=2}let f=Math.min(o.byteLength-i,a.byteLength-l);if(f>0&&(o.set(a.subarray(l,l+f),i),i+=f),i===o.byteLength)return o}}async function $e(e,t,r,o,i=null,s=null){let n=M(e),a=n.byteLength;O(`[UDP转发] 收到 DNS 请求: ${a}B -> ${ur}:53`);let l=null,f=null,c=null;try{l=(s||Fe(o))({hostname:ur,port:53});let g=r;f=l.writable.getWriter(),await f.write(n),O(`[UDP转发] DNS 请求已写入上游: ${a}B`),f.releaseLock(),f=null,c=l.readable.getReader();let h=await Ho(c);O(`[UDP转发] 收到完整 DNS 响应: ${h.byteLength}B`);let w=i?await i(h):h,u=Array.isArray(w)?w:[w];if(!u.length||t.readyState!==WebSocket.OPEN)return;for(let d of u){let b=M(d);if(b.byteLength)if(g){let $=new Uint8Array(g.length+b.byteLength);$.set(g,0),$.set(b,g.length),await Ze(t,$.buffer),g=null}else await Ze(t,b)}}catch(p){O(`[UDP转发] DNS 转发失败: ${p?.message||p}`)}finally{try{f?.releaseLock()}catch{}try{c?.releaseLock()}catch{}try{await Promise.resolve(l?.close?.())}catch{}}}var Ko=new TextDecoder;function kn(e){let t=String(e||"").trim();if(!t||t.includes("/")||t.includes("@")||t.includes("://"))throw new Error("木马反代仅支持 host:port");let r="",o="";if(t.startsWith("[")){let s=t.match(/^(\[[^\]]+\]):(\d+)$/);if(!s)throw new Error("无效的 IPv6 木马反代地址");r=s[1],o=s[2]}else{let s=t.split(":");if(s.length!==2)throw new Error("木马反代仅支持 host:port");r=s[0],o=s[1]}let i=Number(o);if(!r||!Number.isInteger(i)||i<1||i>65535)throw new Error("无效的木马反代端口");return{hostname:r,port:i}}async function $r(e,t,r){if(!r)throw new Error("trojan fallback is not configured");let o=t({hostname:qe(r.hostname),port:r.port}),i=null;try{return await(o.opened??Promise.resolve()),q(e)>0&&(i=o.writable.getWriter(),await i.write(M(e))),o}catch(s){try{o?.close?.()}catch{}throw s}finally{try{i?.releaseLock()}catch{}}}function Sn(e,t){let r=M(e),o=M(t);if(!o.byteLength)return r;let i=r.byteLength-o.byteLength;if(i<=0)return r;for(let s=0;s<o.byteLength;s++)if(r[i+s]!==o[s])return r;return r.subarray(0,i)}async function Wo(e,t,r,o){let i=M(e);if(!r.反代Socket){let n=Fe(o),a=await $r(i,n,r.反代地址);r.反代Socket=a,a.closed.catch(()=>{}).finally(()=>ee(t)),ft(a,t,null,null);return}if(!i.byteLength)return;let s=r.反代Socket.writable.getWriter();try{await s.write(i)}finally{try{s.releaseLock()}catch{}}}async function he(e,t,r,o){let i=M(e);if(r?.反代地址)return Wo(i,t,r,o);let s=r?.缓存 instanceof Uint8Array?r.缓存:new Uint8Array(0),n=s.byteLength?ie(s,i):i,a=0;for(;a<n.byteLength;){let l=a,f=n[a],c=a+1,p=0;if(f===1)p=4;else if(f===4)p=16;else if(f===3){if(n.byteLength<c+1)break;p=1+n[c]}else throw new Error(`invalid trojan udp addressType: ${f}`);let g=c+p;if(n.byteLength<g+6)break;let h=n[g]<<8|n[g+1],w=n[g+2]<<8|n[g+3];if(n[g+4]!==13||n[g+5]!==10)throw new Error("invalid trojan udp delimiter");let u=g+6,d=u+w;if(n.byteLength<d)break;let b=n.slice(l,g+2),$=n.slice(u,d);if(a=d,h!==53)throw new Error("UDP is not supported");if(!$.byteLength)continue;let S=$;($.byteLength<2||($[0]<<8|$[1])!==$.byteLength-2)&&(S=new Uint8Array($.byteLength+2),S[0]=$.byteLength>>>8&255,S[1]=$.byteLength&255,S.set($,2));let m={缓存:new Uint8Array(0)};await $e(S,t,null,o,v=>{let x=M(v),y=m.缓存.byteLength?ie(m.缓存,x):x,C=[],k=0;for(;k+2<=y.byteLength;){let E=y[k]<<8|y[k+1],T=k+2,P=T+E;if(P>y.byteLength)break;let _=y.slice(T,P),z=new Uint8Array(b.byteLength+4+_.byteLength);z.set(b,0),z[b.byteLength]=_.byteLength>>>8&255,z[b.byteLength+1]=_.byteLength&255,z[b.byteLength+2]=13,z[b.byteLength+3]=10,z.set(_,b.byteLength+4),C.push(z),k=P}return m.缓存=y.slice(k),C.length?C:new Uint8Array(0)})}r&&(r.缓存=n.slice(a))}function Dt(e,t){let r=M(e),o=Ye(t);if(r.byteLength<58)return{hasError:!0,message:"invalid data"};let i=56;if(r[i]!==13||r[i+1]!==10)return{hasError:!0,message:"invalid header format"};for(let w=0;w<i;w++)if(r[w]!==o.charCodeAt(w))return{hasError:!0,message:"invalid password"};let s=i+2;if(r.byteLength<s+6)return{hasError:!0,message:"invalid S5 request data"};let n=r[s];if(n!==1&&n!==3)return{hasError:!0,message:"unsupported command, only TCP/UDP is allowed"};let a=n===3,l=r[s+1],f=0,c=s+2,p="";switch(l){case 1:if(f=4,r.byteLength<c+f+4)return{hasError:!0,message:"invalid S5 request data"};p=`${r[c]}.${r[c+1]}.${r[c+2]}.${r[c+3]}`;break;case 3:if(r.byteLength<c+1)return{hasError:!0,message:"invalid S5 request data"};if(f=r[c],c+=1,r.byteLength<c+f+4)return{hasError:!0,message:"invalid S5 request data"};p=Ko.decode(r.subarray(c,c+f));break;case 4:if(f=16,r.byteLength<c+f+4)return{hasError:!0,message:"invalid S5 request data"};let w=[];for(let u=0;u<8;u++){let d=c+u*2;w.push((r[d]<<8|r[d+1]).toString(16))}p=w.join(":");break;default:return{hasError:!0,message:`invalid addressType is ${l}`}}if(!p)return{hasError:!0,message:`address is empty, addressType is ${l}`};let g=c+f;if(r.byteLength<g+4)return{hasError:!0,message:"invalid S5 request data"};let h=r[g]<<8|r[g+1];return{hasError:!1,addressType:l,port:h,hostname:p,isUDP:a,rawClientData:r.subarray(g+4)}}function Mt(e={}){let t=e.传输协议==="grpc";return{type:t?e.gRPC模式==="multi"?"grpc&mode=multi":"grpc&mode=gun":e.传输协议==="xhttp"?"xhttp&mode=stream-one":"ws",路径字段名:t?"serviceName":"path",域名字段名:t?"authority":"host"}}function jt(e={},t="/",r=!1){let o=r?"/":e.随机路径?Qe(t):t;return e.传输协议!=="grpc"?o:o.split("?")[0]||"/"}async function vr(e,t,r="",o=!0){let{searchParams:i}=e,s=ve(e.pathname),n=s.toLowerCase(),a=r,l=null,f=!1,c="",p={},g=o,h={木马反代地址:null,反代IP:a,代理类型:null,代理账号:"",代理全局:!1,代理参数:{},反代兜底:g},w=()=>{h.反代IP=a,h.代理类型=l,h.代理账号=c,h.代理全局=f,h.代理参数={...p},h.反代兜底=g},u=s.match(/\/video\/(.+)$/i);if(u)try{let v=dn(u[1],t),{type:x,...y}=JSON.parse(v);if(!x||!Cn[String(x).toLowerCase()])throw new Error("链式代理类型无效");if(!y.hostname||!y.port)throw new Error("链式代理地址缺少 hostname 或 port");let C=Re(y.port,"链式代理端口"),{hostname:k}=lt(y.hostname,C);return c="",a="链式代理",g=!1,f=!0,l=String(x).toLowerCase(),p={username:y.username,password:y.password,hostname:k,port:C},w(),h}catch(v){console.error("解析链式代理参数失败:",v.message)}c=i.get("socks5")||i.get("http")||i.get("https")||i.get("turn")||null,f=i.has("globalproxy"),i.get("socks5")?l="socks5":i.get("http")?l="http":i.get("https")?l="https":i.get("turn")&&(l="turn");let d=(v,x=!0)=>{let y=/^(socks5|http|https|turn):\/\/(.+)$/i.exec(v||"");return y?(l=y[1].toLowerCase(),c=y[2].split("/")[0],x&&(f=!0),!0):!1},b=v=>{a=v,l=null,g=!1},$=v=>{if(!v.includes("://")){let C=v.indexOf("/");return C>0?v.slice(0,C):v}let x=v.split("://");if(x.length!==2)return v;let y=x[1].indexOf("/");return y>0?`${x[0]}://${x[1].slice(0,y)}`:v},S=/\/trojan=([^?#\s]+)/i.exec(s);if(S)try{h.木马反代地址=kn(S[1])}catch(v){console.error("解析木马反代地址失败:",v.message),h.木马反代地址=null}let m=i.get("proxyip");if(m!==null){if(!d(m))return b(m),w(),h}else{let v=/\/(socks5?|http|https|turn):\/?\/?([^/?#\s]+)/i.exec(s);if(v){let x=v[1].toLowerCase();l=x==="sock"||x==="socks"?"socks5":x,c=v[2].split("/")[0],f=!0}else if(v=/\/(g?s5|socks5|g?http|g?https|g?turn)=([^/?#\s]+)/i.exec(s)){let x=v[1].toLowerCase();c=v[2].split("/")[0],l=x.includes("turn")?"turn":x.includes("https")?"https":x.includes("http")?"http":"socks5",x.startsWith("g")&&(f=!0)}else if(v=/\/(proxyip[.=]|pyip=|ip=)([^?#\s]+)/.exec(n)){let x=$(v[2]);if(!d(x))return b(x),w(),h}}if(!c)return l=null,w(),h;try{p=await gt(c,mt(l)),i.get("socks5")?l="socks5":i.get("http")?l="http":i.get("https")?l="https":i.get("turn")?l="turn":l=l||"socks5"}catch(v){console.error("解析SOCKS5地址失败:",v.message),l=null}return w(),h}var Cn={socks5:1080,http:80,https:443,turn:3478};function mt(e){return Cn[String(e||"").toLowerCase()]||80}var Go=/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;function gt(e,t=80){e=String(e||"").trim().replace(/^(socks5|http|https|turn):\/\//i,"").split("#")[0].trim();let r=e.lastIndexOf("@");if(r!==-1){let p=e.slice(0,r).replace(/%3D/ig,"=");!p.includes(":")&&Go.test(p)&&(p=atob(p)),e=`${p}@${e.slice(r+1)}`}let o=e.lastIndexOf("@"),i=(o===-1?e:e.slice(o+1)).split("/")[0],s=o===-1?"":e.slice(0,o),n=s.indexOf(":"),a=n===-1?void 0:ve(s.slice(0,n)),l=n===-1?void 0:ve(s.slice(n+1));if(s&&(n<1||!l))throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');let f,c;try{({hostname:f,port:c}=lt(i,t))}catch(p){throw new Error(`无效的 SOCKS 地址格式：${p.message}`)}return{username:a,password:l,hostname:f,port:c}}async function Ft(e,t,r,o){let i="https://api.cloudflare.com/client/v4",s=a=>a?.reduce((l,f)=>l+(f?.sum?.requests||0),0)||0,n={"Content-Type":"application/json"};try{if(!r&&(!e||!t))return{success:!1,pages:0,workers:0,total:0,max:1e5};if(!r){let d=await fetch(`${i}/accounts`,{method:"GET",headers:{...n,"X-AUTH-EMAIL":e,"X-AUTH-KEY":t}});if(!d.ok)throw new Error(`账户获取失败: ${d.status}`);let b=await d.json();if(!b?.result?.length)throw new Error("未找到账户");let $=b.result.findIndex(S=>S.name?.toLowerCase().startsWith(e.toLowerCase()));r=b.result[$>=0?$:0]?.id}let a=new Date;a.setUTCHours(0,0,0,0);let l=o?{...n,Authorization:`Bearer ${o}`}:{...n,"X-AUTH-EMAIL":e,"X-AUTH-KEY":t},f=await fetch(`${i}/graphql`,{method:"POST",headers:l,body:JSON.stringify({query:`query getBillingMetrics($AccountID: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
					viewer { accounts(filter: {accountTag: $AccountID}) {
						pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) { sum { requests } }
						workersInvocationsAdaptive(limit: 10000, filter: $filter) { sum { requests } }
					} }
				}`,variables:{AccountID:r,filter:{datetime_geq:a.toISOString(),datetime_leq:new Date().toISOString()}}})});if(!f.ok)throw new Error(`查询失败: ${f.status}`);let c=await f.json();if(c.errors?.length)throw new Error(c.errors[0].message);let p=c?.data?.viewer?.accounts?.[0];if(!p)throw new Error("未找到账户数据");let g=s(p.pagesFunctionsInvocationsAdaptiveGroups),h=s(p.workersInvocationsAdaptive),w=g+h,u=1e5;return O(`统计结果 - Pages: ${g}, Workers: ${h}, 总计: ${w}, 上限: 100000`),{success:!0,pages:g,workers:h,total:w,max:u}}catch(a){return console.error("获取使用量错误:",a.message),{success:!1,pages:0,workers:0,total:0,max:1e5}}}var Pn;function K(e,t,r){function o(a,l){if(a._zod||Object.defineProperty(a,"_zod",{value:{def:l,constr:n,traits:new Set},enumerable:!1}),a._zod.traits.has(e))return;a._zod.traits.add(e),t(a,l);let f=n.prototype,c=Object.keys(f);for(let p=0;p<c.length;p++){let g=c[p];g in a||(a[g]=f[g].bind(a))}}let i=r?.Parent??Object;class s extends i{}Object.defineProperty(s,"name",{value:e});function n(a){var l;let f=r?.Parent?new s:this;o(f,a),(l=f._zod).deferred??(l.deferred=[]);for(let c of f._zod.deferred)c();return f}return Object.defineProperty(n,"init",{value:o}),Object.defineProperty(n,Symbol.hasInstance,{value:a=>r?.Parent&&a instanceof r.Parent?!0:a?._zod?.traits?.has(e)}),Object.defineProperty(n,"name",{value:e}),n}var ta=Symbol("zod_brand"),Ae=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}};(Pn=globalThis).__zod_globalConfig??(Pn.__zod_globalConfig={});var Sr=globalThis.__zod_globalConfig;function rt(e){return e&&Object.assign(Sr,e),Sr}function Tn(e){let t=Object.values(e).filter(o=>typeof o=="number");return Object.entries(e).filter(([o,i])=>t.indexOf(+o)===-1).map(([o,i])=>i)}function An(e,t){return typeof t=="bigint"?t.toString():t}function En(e){return{get value(){{let r=e();return Object.defineProperty(this,"value",{value:r}),r}throw new Error("cached value already set")}}}function In(e){return e==null}function Ln(e){let t=e.startsWith("^")?1:0,r=e.endsWith("$")?e.length-1:e.length;return e.slice(t,r)}var zn=Symbol("evaluating");function Ee(e,t,r){let o;Object.defineProperty(e,t,{get(){if(o!==zn)return o===void 0&&(o=zn,o=r()),o},set(i){Object.defineProperty(e,t,{value:i})},configurable:!0})}var Cr="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function Un(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var Rn=new Set(["string","number","symbol"]);function Pr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function zr(e,t,r){let o=new e._zod.constr(t??e._zod.def);return(!t||r?.parent)&&(o._zod.parent=e),o}function me(e){let t=e;if(!t)return{};if(typeof t=="string")return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error=="string"?{...t,error:()=>t.error}:t}function Zn(e){return Object.keys(e).filter(t=>e[t]._zod.optin==="optional"&&e[t]._zod.optout==="optional")}var On={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function yt(e,t=0){if(e.aborted===!0)return!0;for(let r=t;r<e.issues.length;r++)if(e.issues[r]?.continue!==!0)return!0;return!1}function Nn(e,t=0){if(e.aborted===!0)return!0;for(let r=t;r<e.issues.length;r++)if(e.issues[r]?.continue===!1)return!0;return!1}function Ht(e,t){return t.map(r=>{var o;return(o=r).path??(o.path=[]),r.path.unshift(e),r})}function Bt(e){return typeof e=="string"?e:e?.message}function nt(e,t,r){let o=e.message?e.message:Bt(e.inst?._zod.def?.error?.(e))??Bt(t?.error?.(e))??Bt(r.customError?.(e))??Bt(r.localeError?.(e))??"Invalid input",{inst:i,continue:s,input:n,...a}=e;return a.path??(a.path=[]),a.message=o,t?.reportInput&&(a.input=n),a}function Dn(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}var Mn=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,An,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},jn=K("$ZodError",Mn),wt=K("$ZodError",Mn,{Parent:Error});var Jo=e=>(t,r,o,i)=>{let s=o?{...o,async:!1}:{async:!1},n=t._zod.run({value:r,issues:[]},s);if(n instanceof Promise)throw new Ae;if(n.issues.length){let a=new(i?.Err??e)(n.issues.map(l=>nt(l,s,rt())));throw Cr(a,i?.callee),a}return n.value},Kt=Jo(wt),Xo=e=>async(t,r,o,i)=>{let s=o?{...o,async:!0}:{async:!0},n=t._zod.run({value:r,issues:[]},s);if(n instanceof Promise&&(n=await n),n.issues.length){let a=new(i?.Err??e)(n.issues.map(l=>nt(l,s,rt())));throw Cr(a,i?.callee),a}return n.value},Wt=Xo(wt),Yo=e=>(t,r,o)=>{let i=o?{...o,async:!1}:{async:!1},s=t._zod.run({value:r,issues:[]},i);if(s instanceof Promise)throw new Ae;return s.issues.length?{success:!1,error:new(e??jn)(s.issues.map(n=>nt(n,i,rt())))}:{success:!0,data:s.value}},xt=Yo(wt),Qo=e=>async(t,r,o)=>{let i=o?{...o,async:!0}:{async:!0},s=t._zod.run({value:r,issues:[]},i);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new e(s.issues.map(n=>nt(n,i,rt())))}:{success:!0,data:s.value}},bt=Qo(wt);var qo="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",es=new RegExp(`^${qo}$`);var Fn=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${t}$`)};var Bn=/^-?\d+$/,Hn=/^-?\d+(?:\.\d+)?$/,Kn=/^(?:true|false)$/i;var Ke=K("$ZodCheck",(e,t)=>{var r;e._zod??(e._zod={}),e._zod.def=t,(r=e._zod).onattach??(r.onattach=[])}),Wn={number:"number",bigint:"bigint",object:"date"},Gn=K("$ZodCheckLessThan",(e,t)=>{Ke.init(e,t);let r=Wn[typeof t.value];e._zod.onattach.push(o=>{let i=o._zod.bag,s=(t.inclusive?i.maximum:i.exclusiveMaximum)??Number.POSITIVE_INFINITY;t.value<s&&(t.inclusive?i.maximum=t.value:i.exclusiveMaximum=t.value)}),e._zod.check=o=>{(t.inclusive?o.value<=t.value:o.value<t.value)||o.issues.push({origin:r,code:"too_big",maximum:typeof t.value=="object"?t.value.getTime():t.value,input:o.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Ar=K("$ZodCheckGreaterThan",(e,t)=>{Ke.init(e,t);let r=Wn[typeof t.value];e._zod.onattach.push(o=>{let i=o._zod.bag,s=(t.inclusive?i.minimum:i.exclusiveMinimum)??Number.NEGATIVE_INFINITY;t.value>s&&(t.inclusive?i.minimum=t.value:i.exclusiveMinimum=t.value)}),e._zod.check=o=>{(t.inclusive?o.value>=t.value:o.value>t.value)||o.issues.push({origin:r,code:"too_small",minimum:typeof t.value=="object"?t.value.getTime():t.value,input:o.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}});var Vn=K("$ZodCheckNumberFormat",(e,t)=>{Ke.init(e,t),t.format=t.format||"float64";let r=t.format?.includes("int"),o=r?"int":"number",[i,s]=On[t.format];e._zod.onattach.push(n=>{let a=n._zod.bag;a.format=t.format,a.minimum=i,a.maximum=s,r&&(a.pattern=Bn)}),e._zod.check=n=>{let a=n.value;if(r){if(!Number.isInteger(a)){n.issues.push({expected:o,format:t.format,code:"invalid_type",continue:!1,input:a,inst:e});return}if(!Number.isSafeInteger(a)){a>0?n.issues.push({input:a,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,inclusive:!0,continue:!t.abort}):n.issues.push({input:a,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,inclusive:!0,continue:!t.abort});return}}a<i&&n.issues.push({origin:"number",input:a,code:"too_small",minimum:i,inclusive:!0,inst:e,continue:!t.abort}),a>s&&n.issues.push({origin:"number",input:a,code:"too_big",maximum:s,inclusive:!0,inst:e,continue:!t.abort})}});var Jn=K("$ZodCheckMinLength",(e,t)=>{var r;Ke.init(e,t),(r=e._zod.def).when??(r.when=o=>{let i=o.value;return!In(i)&&i.length!==void 0}),e._zod.onattach.push(o=>{let i=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;t.minimum>i&&(o._zod.bag.minimum=t.minimum)}),e._zod.check=o=>{let i=o.value;if(i.length>=t.minimum)return;let n=Dn(i);o.issues.push({origin:n,code:"too_small",minimum:t.minimum,inclusive:!0,input:i,inst:e,continue:!t.abort})}});var Yn={major:4,minor:4,patch:3};var ke=K("$ZodType",(e,t)=>{var r;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Yn;let o=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&o.unshift(e);for(let i of o)for(let s of i._zod.onattach)s(e);if(o.length===0)(r=e._zod).deferred??(r.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let i=(n,a,l)=>{let f=yt(n),c;for(let p of a){if(p._zod.def.when){if(Nn(n)||!p._zod.def.when(n))continue}else if(f)continue;let g=n.issues.length,h=p._zod.check(n);if(h instanceof Promise&&l?.async===!1)throw new Ae;if(c||h instanceof Promise)c=(c??Promise.resolve()).then(async()=>{await h,n.issues.length!==g&&(f||(f=yt(n,g)))});else{if(n.issues.length===g)continue;f||(f=yt(n,g))}}return c?c.then(()=>n):n},s=(n,a,l)=>{if(yt(n))return n.aborted=!0,n;let f=i(a,o,l);if(f instanceof Promise){if(l.async===!1)throw new Ae;return f.then(c=>e._zod.parse(c,l))}return e._zod.parse(f,l)};e._zod.run=(n,a)=>{if(a.skipChecks)return e._zod.parse(n,a);if(a.direction==="backward"){let f=e._zod.parse({value:n.value,issues:[]},{...a,skipChecks:!0});return f instanceof Promise?f.then(c=>s(c,n,a)):s(f,n,a)}let l=e._zod.parse(n,a);if(l instanceof Promise){if(a.async===!1)throw new Ae;return l.then(f=>i(f,o,a))}return i(l,o,a)}}Ee(e,"~standard",()=>({validate:i=>{try{let s=xt(e,i);return s.success?{value:s.data}:{issues:s.error?.issues}}catch{return bt(e,i).then(n=>n.success?{value:n.data}:{issues:n.error?.issues})}},vendor:"zod",version:1}))}),qn=K("$ZodString",(e,t)=>{ke.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??Fn(e._zod.bag),e._zod.parse=(r,o)=>{if(t.coerce)try{r.value=String(r.value)}catch{}return typeof r.value=="string"||r.issues.push({expected:"string",code:"invalid_type",input:r.value,inst:e}),r}});var Er=K("$ZodNumber",(e,t)=>{ke.init(e,t),e._zod.pattern=e._zod.bag.pattern??Hn,e._zod.parse=(r,o)=>{if(t.coerce)try{r.value=Number(r.value)}catch{}let i=r.value;if(typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i))return r;let s=typeof i=="number"?Number.isNaN(i)?"NaN":Number.isFinite(i)?void 0:"Infinity":void 0;return r.issues.push({expected:"number",code:"invalid_type",input:i,inst:e,...s?{received:s}:{}}),r}}),eo=K("$ZodNumberFormat",(e,t)=>{Vn.init(e,t),Er.init(e,t)}),to=K("$ZodBoolean",(e,t)=>{ke.init(e,t),e._zod.pattern=Kn,e._zod.parse=(r,o)=>{if(t.coerce)try{r.value=!!r.value}catch{}let i=r.value;return typeof i=="boolean"||r.issues.push({expected:"boolean",code:"invalid_type",input:i,inst:e}),r}});var ro=K("$ZodUnknown",(e,t)=>{ke.init(e,t),e._zod.parse=r=>r});function Qn(e,t,r){e.issues.length&&t.issues.push(...Ht(r,e.issues)),t.value[r]=e.value}var no=K("$ZodArray",(e,t)=>{ke.init(e,t),e._zod.parse=(r,o)=>{let i=r.value;if(!Array.isArray(i))return r.issues.push({expected:"array",code:"invalid_type",input:i,inst:e}),r;r.value=Array(i.length);let s=[];for(let n=0;n<i.length;n++){let a=i[n],l=t.element._zod.run({value:a,issues:[]},o);l instanceof Promise?s.push(l.then(f=>Qn(f,r,n))):Qn(l,r,n)}return s.length?Promise.all(s).then(()=>r):r}});function Gt(e,t,r,o,i,s){let n=r in o;if(e.issues.length){if(i&&s&&!n)return;t.issues.push(...Ht(r,e.issues))}if(!n&&!i){e.issues.length||t.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[r]});return}e.value===void 0?n&&(t.value[r]=void 0):t.value[r]=e.value}function rs(e){let t=Object.keys(e.shape);for(let o of t)if(!e.shape?.[o]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${o}": expected a Zod schema`);let r=Zn(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(r)}}function ns(e,t,r,o,i,s){let n=[],a=i.keySet,l=i.catchall._zod,f=l.def.type,c=l.optin==="optional",p=l.optout==="optional";for(let g in t){if(g==="__proto__"||a.has(g))continue;if(f==="never"){n.push(g);continue}let h=l.run({value:t[g],issues:[]},o);h instanceof Promise?e.push(h.then(w=>Gt(w,r,g,t,c,p))):Gt(h,r,g,t,c,p)}return n.length&&r.issues.push({code:"unrecognized_keys",keys:n,input:t,inst:s}),e.length?Promise.all(e).then(()=>r):r}var oo=K("$ZodObject",(e,t)=>{if(ke.init(e,t),!Object.getOwnPropertyDescriptor(t,"shape")?.get){let a=t.shape;Object.defineProperty(t,"shape",{get:()=>{let l={...a};return Object.defineProperty(t,"shape",{value:l}),l}})}let o=En(()=>rs(t));Ee(e._zod,"propValues",()=>{let a=t.shape,l={};for(let f in a){let c=a[f]._zod;if(c.values){l[f]??(l[f]=new Set);for(let p of c.values)l[f].add(p)}}return l});let i=Un,s=t.catchall,n;e._zod.parse=(a,l)=>{n??(n=o.value);let f=a.value;if(!i(f))return a.issues.push({expected:"object",code:"invalid_type",input:f,inst:e}),a;a.value={};let c=[],p=n.shape;for(let g of n.keys){let h=p[g],w=h._zod.optin==="optional",u=h._zod.optout==="optional",d=h._zod.run({value:f[g],issues:[]},l);d instanceof Promise?c.push(d.then(b=>Gt(b,a,g,f,w,u))):Gt(d,a,g,f,w,u)}return s?ns(c,f,a,l,o.value,e):c.length?Promise.all(c).then(()=>a):a}});var so=K("$ZodEnum",(e,t)=>{ke.init(e,t);let r=Tn(t.entries),o=new Set(r);e._zod.values=o,e._zod.pattern=new RegExp(`^(${r.filter(i=>Rn.has(typeof i)).map(i=>typeof i=="string"?Pr(i):i.toString()).join("|")})$`),e._zod.parse=(i,s)=>{let n=i.value;return o.has(n)||i.issues.push({code:"invalid_value",values:r,input:n,inst:e}),i}});var io=K("$ZodNullable",(e,t)=>{ke.init(e,t),Ee(e._zod,"optin",()=>t.innerType._zod.optin),Ee(e._zod,"optout",()=>t.innerType._zod.optout),Ee(e._zod,"pattern",()=>{let r=t.innerType._zod.pattern;return r?new RegExp(`^(${Ln(r.source)}|null)$`):void 0}),Ee(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(r,o)=>r.value===null?r:t.innerType._zod.run(r,o)});function ao(e,t){return new e({type:"string",...me(t)})}function co(e,t){return new e({type:"number",checks:[],...me(t)})}function uo(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...me(t)})}function lo(e,t){return new e({type:"boolean",...me(t)})}function po(e){return new e({type:"unknown"})}function Vt(e,t){return new Gn({check:"less_than",...me(t),value:e,inclusive:!0})}function fo(e,t){return new Ar({check:"greater_than",...me(t),value:e,inclusive:!1})}function _t(e,t){return new Ar({check:"greater_than",...me(t),value:e,inclusive:!0})}function Ir(e){return fo(0,e)}function Lr(e,t){return new Jn({check:"min_length",...me(t),minimum:e})}var De=K("ZodMiniType",(e,t)=>{if(!e._zod)throw new Error("Uninitialized schema in ZodMiniType.");ke.init(e,t),e.def=t,e.type=t.type,e.parse=(r,o)=>Kt(e,r,o,{callee:e.parse}),e.safeParse=(r,o)=>xt(e,r,o),e.parseAsync=async(r,o)=>Wt(e,r,o,{callee:e.parseAsync}),e.safeParseAsync=async(r,o)=>bt(e,r,o),e.check=(...r)=>e.clone({...t,checks:[...t.checks??[],...r.map(o=>typeof o=="function"?{_zod:{check:o,def:{check:"custom"},onattach:[]}}:o)]},{parent:!0}),e.with=e.check,e.clone=(r,o)=>zr(e,r,o),e.brand=()=>e,e.register=((r,o)=>(r.add(e,o),e)),e.apply=r=>r(e)}),is=K("ZodMiniString",(e,t)=>{qn.init(e,t),De.init(e,t)});function Ie(e){return ao(is,e)}var ho=K("ZodMiniNumber",(e,t)=>{Er.init(e,t),De.init(e,t)});function Me(e){return co(ho,e)}var as=K("ZodMiniNumberFormat",(e,t)=>{eo.init(e,t),ho.init(e,t)});function Ur(e){return uo(as,e)}var cs=K("ZodMiniBoolean",(e,t)=>{to.init(e,t),De.init(e,t)});function ae(e){return lo(cs,e)}var us=K("ZodMiniUnknown",(e,t)=>{ro.init(e,t),De.init(e,t)});function ls(){return po(us)}var ps=K("ZodMiniArray",(e,t)=>{no.init(e,t),De.init(e,t)});function Rr(e,t){return new ps({type:"array",element:e,...me(t)})}var mo=K("ZodMiniObject",(e,t)=>{oo.init(e,t),De.init(e,t),Ee(e,"shape",()=>t.shape)});function Zr(e,t){let r={type:"object",shape:e??{},...me(t)};return new mo(r)}function go(e,t){return new mo({type:"object",shape:e,catchall:ls(),...me(t)})}var fs=K("ZodMiniEnum",(e,t)=>{so.init(e,t),De.init(e,t),e.options=Object.values(t.entries)});function yo(e,t){let r=Array.isArray(e)?Object.fromEntries(e.map(o=>[o,o])):e;return new fs({type:"enum",entries:r,...me(t)})}var ds=K("ZodMiniNullable",(e,t)=>{io.init(e,t),De.init(e,t)});function Jt(e){return new ds({type:"nullable",innerType:e})}var hs=new Set(["__proto__","prototype","constructor"]);function st(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Or(e,t){if(!st(e)||!st(t))return t===void 0?e:t;let r={...e};for(let o of Object.keys(t)){if(hs.has(o))continue;let i=t[o];r[o]=st(e[o])&&st(i)?Or(e[o],i):i}return r}var le=Ie().check(Lr(1)),Ce=Jt(Ie()),wo=["socks5","http","https","turn"],ms=Jt(yo(wo)),gs={全局:Ie(),标准:Ie()};function ys(e,t){return t?go(e):Zr(e)}function xo(e,{保留未知字段:t=!0,持久化:r=!1}={}){let o=a=>ys(a,t),i=o(gs),s={local:ae(),本地IP库:o({随机IP:ae(),随机数量:Me().check(Ur(),_t(0)),指定端口:Me().check(Ur(),_t(-1),Vt(65535))}),SUB:Ce,SUBNAME:le,SUBUpdateTime:Me().check(Ir())};r||(s.TOKEN=le);let n={TIME:Ie(),HOST:le,HOSTS:Rr(le),UUID:le,PATH:le,协议类型:le,传输协议:le,gRPC模式:le,gRPCUserAgent:Ie(),跳过证书验证:ae(),启用0RTT:ae(),TLS分片:Ce,随机路径:ae(),ECH:ae(),ECHConfig:o({DNS:le,SNI:Ce}),SS:o({加密方式:le,TLS:ae()}),Fingerprint:le,优选订阅生成:o(s),订阅转换配置:o({SUBAPI:le,SUBCONFIG:le,SUBEMOJI:ae(),SUBLIST:ae(),UDP:ae(),XUDP:ae(),TLS13:ae(),APPEND_TYPE:ae(),SORT:ae()}),反代:o({[e]:le,SOCKS5:o({启用:ms,全局:ae(),账号:Ie(),白名单:Rr(Ie())}),路径模板:Zr({[e]:le,SOCKS5:i,HTTP:i,HTTPS:i,TURN:i})}),TG:o(r?{启用:ae()}:{启用:ae(),BotToken:Ce,ChatID:Ce})};return r||(n.CF=o({Email:Ce,GlobalAPIKey:Ce,AccountID:Ce,APIToken:Ce,UsageAPI:Ce,Usage:Jt(o({success:ae(),pages:Me(),workers:Me(),total:Me(),max:Me()}))})),o(n)}function bo(e,t,r){if(!st(e))return{success:!1,error:{issues:[{code:"custom",path:[],message:"配置必须是 JSON 对象"}]}};let o=Or(t,e),i=o?.反代?.SOCKS5?.启用;return i!==null&&!wo.includes(i)&&(o.反代.SOCKS5.启用=null),xo(r).safeParse(o)}function _o(e,t,r){return st(e)?xo(r,{保留未知字段:!1,持久化:!0}).safeParse(Or(t,e)):{success:!1,error:{issues:[{code:"custom",path:[],message:"配置必须是 JSON 对象"}]}}}function Xt(e){return e.issues.map(t=>({path:t.path.length?t.path.join("."):"$",message:t.message}))}async function Yt(e,t,r,o="Mozilla/5.0",i=!1){let s,n=se[0],a=t,l="https://dns.alidns.com/dns-query",f="cloudflare-ech.com",c="{{IP:PORT}}",p=performance.now(),g={TIME:new Date().toISOString(),HOST:a,HOSTS:[t],UUID:r,PATH:"/",协议类型:"vless",传输协议:"ws",gRPC模式:"gun",gRPCUserAgent:o,跳过证书验证:!1,启用0RTT:!1,TLS分片:null,随机路径:!1,ECH:!1,ECHConfig:{DNS:l,SNI:f},SS:{加密方式:"aes-128-gcm",TLS:!0},Fingerprint:"chrome",优选订阅生成:{local:!0,本地IP库:{随机IP:!0,随机数量:16,指定端口:-1},SUB:null,SUBNAME:"edgetunnel",SUBUpdateTime:3,TOKEN:await ye(t+r)},订阅转换配置:{SUBAPI:`https://SUBAPI.${se[1]}ssss.net`,SUBCONFIG:`https://raw.githubusercontent.com/${se[1]}/ACL4SSR/refs/heads/main/Clash/config/ACL4SSR_Online_Mini_MultiMode_CF.ini`,SUBEMOJI:!1,SUBLIST:!1,UDP:!1,XUDP:!1,TLS13:!1,APPEND_TYPE:!1,SORT:!1},反代:{[n]:"auto",SOCKS5:{启用:null,全局:!1,账号:"",白名单:je()},路径模板:{[n]:"proxyip="+c,SOCKS5:{全局:"socks5://"+c,标准:"socks5="+c},HTTP:{全局:"http://"+c,标准:"http="+c},HTTPS:{全局:"https://"+c,标准:"https="+c},TURN:{全局:"turn://"+c,标准:"turn="+c}}},TG:{启用:!1,BotToken:null,ChatID:null},CF:{Email:null,GlobalAPIKey:null,AccountID:null,APIToken:null,UsageAPI:null,Usage:{success:!1,pages:0,workers:0,total:0,max:1e5}}};try{let z=await e.KV.get("config.json");!z||i==!0?(await e.KV.put("config.json",JSON.stringify(g,null,2)),s=g):s=JSON.parse(z)}catch(z){console.error(`读取config_JSON出错: ${z.message}`),s=g}let h=bo(s,g,n);h.success?s=h.data:(console.error("config.json 配置校验失败，已回退到默认配置:",JSON.stringify(Xt(h.error))),s=g),s.订阅转换配置.SUBLIST||(s.订阅转换配置.SUBLIST=!1),s.订阅转换配置.UDP||(s.订阅转换配置.UDP=!1),s.订阅转换配置.XUDP||(s.订阅转换配置.XUDP=!1),s.订阅转换配置.TLS13||(s.订阅转换配置.TLS13=!1),s.订阅转换配置.APPEND_TYPE||(s.订阅转换配置.APPEND_TYPE=!1),s.订阅转换配置.SORT||(s.订阅转换配置.SORT=!1),s.gRPCUserAgent||(s.gRPCUserAgent=o),s.HOST=a,s.HOSTS||(s.HOSTS=[t]),e.HOST&&(s.HOSTS=(await _e(e.HOST)).map(z=>z.toLowerCase().replace(/^https?:\/\//,"").split("/")[0].split(":")[0])),s.UUID=r,s.随机路径||(s.随机路径=!1),s.启用0RTT||(s.启用0RTT=!1),e.PATH?s.PATH=e.PATH.startsWith("/")?e.PATH:"/"+e.PATH:s.PATH||(s.PATH="/"),s.gRPC模式||(s.gRPC模式="gun"),s.SS||(s.SS={加密方式:"aes-128-gcm",TLS:!1}),s.反代.路径模板?.[n]||(s.反代.路径模板={[n]:"proxyip="+c,SOCKS5:{全局:"socks5://"+c,标准:"socks5="+c},HTTP:{全局:"http://"+c,标准:"http="+c},HTTPS:{全局:"https://"+c,标准:"https="+c},TURN:{全局:"turn://"+c,标准:"turn="+c}}),s.反代.路径模板.HTTPS||(s.反代.路径模板.HTTPS={全局:"https://"+c,标准:"https="+c}),s.反代.路径模板.TURN||(s.反代.路径模板.TURN={全局:"turn://"+c,标准:"turn="+c});let w=s.反代.路径模板[s.反代.SOCKS5.启用?.toUpperCase()],u="";w&&s.反代.SOCKS5.账号?u=(s.反代.SOCKS5.全局?w.全局:w.标准).replace(c,s.反代.SOCKS5.账号):s.反代[n]!=="auto"&&(u=s.反代.路径模板[n].replace(c,s.反代[n]));let d="";if(u.includes("?")){let[z,A]=u.split("?");u=z,d=A}s.PATH=s.PATH.replace(u,"").replace("//","/");let b=s.PATH==="/"?"":s.PATH.replace(/\/+(?=\?|$)/,"").replace(/\/+$/,""),[$,...S]=b.split("?"),m=S.length?"?"+S.join("?"):"",v=d?m?m+"&"+d:"?"+d:m;s.完整节点路径=($||"/")+($&&u?"/":"")+u+v+(s.启用0RTT?(v?"&":"?")+"ed=2560":""),!s.TLS分片&&s.TLS分片!==null&&(s.TLS分片=null);let x=s.TLS分片=="Shadowrocket"?`&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}`:s.TLS分片=="Happ"?`&fragment=${encodeURIComponent("3,1,tlshello")}`:"";s.Fingerprint||(s.Fingerprint="chrome"),s.ECH||(s.ECH=!1),s.ECHConfig||(s.ECHConfig={DNS:l,SNI:f});let y=s.ECH?`&ech=${encodeURIComponent((s.ECHConfig.SNI?s.ECHConfig.SNI+"+":"")+s.ECHConfig.DNS)}`:"",{type:C,路径字段名:k,域名字段名:E}=Mt(s),T=jt(s,s.完整节点路径);s.LINK=s.协议类型==="ss"?`${s.协议类型}://${btoa(s.SS.加密方式+":"+r)}@${a}:${s.SS.TLS?"443":"80"}?plugin=v2${encodeURIComponent(`ray-plugin;mode=websocket;host=${a};path=${(s.完整节点路径.includes("?")?s.完整节点路径.replace("?","?enc="+s.SS.加密方式+"&"):s.完整节点路径+"?enc="+s.SS.加密方式)+(s.SS.TLS?";tls":"")};mux=0`)+y}#${encodeURIComponent(s.优选订阅生成.SUBNAME)}`:`${s.协议类型}://${r}@${a}:443?security=tls&type=${C+y}&${E}=${a}&fp=${s.Fingerprint}&sni=${a}&${k}=${encodeURIComponent(T)+x}&encryption=none#${encodeURIComponent(s.优选订阅生成.SUBNAME)}`,s.优选订阅生成.TOKEN=await ye(t+r);let P={BotToken:null,ChatID:null};s.TG={启用:s.TG.启用?s.TG.启用:!1,...P};try{let z=await e.KV.get("tg.json");if(!z)await e.KV.put("tg.json",JSON.stringify(P,null,2));else{let A=JSON.parse(z);s.TG.ChatID=A.ChatID?A.ChatID:null,s.TG.BotToken=A.BotToken?ct(A.BotToken):null}}catch(z){console.error(`读取tg.json出错: ${z.message}`)}let _={Email:null,GlobalAPIKey:null,AccountID:null,APIToken:null,UsageAPI:null};s.CF={..._,Usage:{success:!1,pages:0,workers:0,total:0,max:1e5}};try{let z=await e.KV.get("cf.json");if(!z)await e.KV.put("cf.json",JSON.stringify(_,null,2));else{let A=JSON.parse(z);if(A.UsageAPI)try{let U=await(await fetch(A.UsageAPI)).json();s.CF.Usage=U}catch(L){console.error(`请求 CF_JSON.UsageAPI 失败: ${L.message}`)}else{s.CF.Email=A.Email?A.Email:null,s.CF.GlobalAPIKey=A.GlobalAPIKey?ct(A.GlobalAPIKey):null,s.CF.AccountID=A.AccountID?ct(A.AccountID):null,s.CF.APIToken=A.APIToken?ct(A.APIToken):null,s.CF.UsageAPI=null;let L=await Ft(A.Email,A.GlobalAPIKey,A.AccountID,A.APIToken);s.CF.Usage=L}}}catch(z){console.error(`读取cf.json出错: ${z.message}`)}return s.加载时间=(performance.now()-p).toFixed(2)+"ms",s}async function Le(e,t,r,o="Get_SUB",i,s=!0){try{let n=new Date,a={TYPE:o,IP:r,ASN:`AS${t.cf.asn||"0"} ${t.cf.asOrganization||"Unknown"}`,CC:`${t.cf.country||"N/A"} ${t.cf.city||"N/A"}`,URL:t.url,UA:t.headers.get("User-Agent")||"Unknown",TIME:n.getTime()};if(i.TG.启用)try{let p=await e.KV.get("tg.json"),g=JSON.parse(p);if(g?.BotToken&&g?.ChatID){let h=new Date(a.TIME).toLocaleString("zh-CN",{timeZone:"Asia/Shanghai"}),w=new URL(a.URL),u=`<b>#${i.优选订阅生成.SUBNAME} 日志通知</b>

📌 <b>类型：</b>#${a.TYPE}
🌐 <b>IP：</b><code>${a.IP}</code>
📍 <b>位置：</b>${a.CC}
🏢 <b>ASN：</b>${a.ASN}
🔗 <b>域名：</b><code>${w.host}</code>
🔍 <b>路径：</b><code>${w.pathname+w.search}</code>
🤖 <b>UA：</b><code>${a.UA}</code>
📅 <b>时间：</b>${h}
${i.CF.Usage.success?`📊 <b>请求用量：</b>${i.CF.Usage.total}/${i.CF.Usage.max} <b>${(i.CF.Usage.total/i.CF.Usage.max*100).toFixed(2)}%</b>
`:""}`;await fetch(`https://api.telegram.org/bot${g.BotToken}/sendMessage?chat_id=${g.ChatID}&parse_mode=HTML&text=${encodeURIComponent(u)}`,{method:"GET",headers:{Accept:"text/html,application/xhtml+xml,application/xml;","Accept-Encoding":"gzip, deflate, br","User-Agent":a.UA||"Unknown"}})}}catch(p){console.error(`读取tg.json出错: ${p.message}`)}if(s=["1","true"].includes(e.OFF_LOG)?!1:s,!s)return;let l=[],f=await e.KV.get("log.json"),c=4;if(f)try{if(l=JSON.parse(f),!Array.isArray(l))l=[a];else if(o!=="Get_SUB"){let p=n.getTime()-18e5;if(l.some(g=>g.TYPE!=="Get_SUB"&&g.IP===r&&g.URL===t.url&&g.UA===(t.headers.get("User-Agent")||"Unknown")&&g.TIME>=p))return;for(l.push(a);JSON.stringify(l,null,2).length>c*1024*1024&&l.length>0;)l.shift()}else for(l.push(a);JSON.stringify(l,null,2).length>c*1024*1024&&l.length>0;)l.shift()}catch{l=[a]}else l=[a];await e.KV.put("log.json",JSON.stringify(l,null,2))}catch(n){console.error(`日志记录失败: ${n.message}`)}}function $o(e,t={}){let r=t?.UUID||null,o=!!t?.ECH,i=Array.isArray(t?.HOSTS)?[...t.HOSTS]:[],s=t?.ECHConfig?.SNI||null,n=t?.ECHConfig?.DNS,a=!!(r&&o),l=typeof t?.gRPCUserAgent=="string"&&t.gRPCUserAgent.trim()?t.gRPCUserAgent.trim():null,f=t?.传输协议==="grpc"&&!!l,c=l?JSON.stringify(l):null,p=e.replace(/mode:\s*Rule\b/g,"mode: rule"),g=`dns:
  enable: true
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
    - 114.114.114.114
  use-hosts: true
  nameserver:
    - https://sm2.doh.pub/dns-query
    - https://dns.alidns.com/dns-query
  fallback:
    - 8.8.4.4
    - 208.67.220.220
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
      - 127.0.0.1/32
      - 0.0.0.0/32
    domain:
      - '+.google.com'
      - '+.facebook.com'
      - '+.youtube.com'
`,h=C=>C.replace(/grpc-opts:\s*\{([\s\S]*?)\}/i,(k,E)=>{if(/grpc-user-agent\s*:/i.test(E))return k;let T=E.trim();return T.endsWith(",")&&(T=T.slice(0,-1).trim()),`grpc-opts: {${T?`${T}, grpc-user-agent: ${c}`:`grpc-user-agent: ${c}`}}`}),w=C=>/(?:^|[,{])\s*network:\s*(?:"grpc"|'grpc'|grpc)(?=\s*(?:[,}\n#]|$))/mi.test(C),u=C=>C.match(/type:\s*(\w+)/)?.[1]||"vless",d=(C,k)=>{let E=u(C)==="trojan"?"password":"uuid",T=new RegExp(`${E}:\\s*${k?"([^,}\\n]+)":"([^\\n]+)"}`);return C.match(T)?.[1]?.trim()||null},b=(C,k)=>{if(/^\s{2}nameserver-policy:\s*(?:\n|$)/m.test(C))return C.replace(/^(\s{2}nameserver-policy:\s*\n)/m,`$1${k}
`);let E=C.split(`
`),T=-1,P=!1;for(let z=0;z<E.length;z++){let A=E[z];if(/^dns:\s*$/.test(A)){P=!0;continue}if(P&&/^[a-zA-Z]/.test(A)){T=z;break}}let _=`  nameserver-policy:
${k}`;return T!==-1?E.splice(T,0,_):E.push(_),E.join(`
`)},$=C=>!w(C)||/grpc-user-agent\s*:/i.test(C)?C:/grpc-opts:\s*\{/i.test(C)?h(C):C.replace(/\}(\s*)$/,`, grpc-opts: {grpc-user-agent: ${c}}}$1`),S=(C,k)=>{let E=" ".repeat(k),T=-1;for(let L=0;L<C.length;L++){let U=C[L];if(!(!U.trim()||U.search(/\S/)!==k)&&(/^\s*grpc-opts:\s*(?:#.*)?$/.test(U)||/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(U))){T=L;break}}if(T===-1){let L=-1;for(let U=C.length-1;U>=0;U--)if(C[U].trim()){L=U;break}return L>=0&&C.splice(L+1,0,`${E}grpc-opts:`,`${E}  grpc-user-agent: ${c}`),C}let P=C[T];if(/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(P))return/grpc-user-agent\s*:/i.test(P)||(C[T]=h(P)),C;let _=C.length,z=k+2,A=!1;for(let L=T+1;L<C.length;L++){let U=C[L],R=U.trim();if(!R)continue;let I=U.search(/\S/);if(I<=k){_=L;break}if(I>k&&z===k+2&&(z=I),/^grpc-user-agent\s*:/.test(R)){A=!0;break}}return A||C.splice(_,0,`${" ".repeat(z)}grpc-user-agent: ${c}`),C},m=(C,k)=>{let E=-1;for(let _=C.length-1;_>=0;_--)if(C[_].trim()){E=_;break}if(E<0)return C;let T=" ".repeat(k),P=[`${T}ech-opts:`,`${T}  enable: true`];return s&&P.push(`${T}  query-server-name: ${s}`),C.splice(E+1,0,...P),C};if(/^dns:\s*(?:\n|$)/m.test(p)||(p=g+p),s&&!i.includes(s)&&i.push(s),o&&i.length>0){let C=i.map(k=>`    "${k}": ${n||""}`).join(`
`);p=b(p,C)}if(!a&&!f)return p;let v=p.split(`
`),x=[],y=0;for(;y<v.length;){let C=v[y],k=C.trim();if(k.startsWith("- {")){let E=C,T=(C.match(/\{/g)||[]).length-(C.match(/\}/g)||[]).length;for(;T>0&&y+1<v.length;)y++,E+=`
`+v[y],T+=(v[y].match(/\{/g)||[]).length-(v[y].match(/\}/g)||[]).length;f&&(E=$(E)),a&&d(E,!0)===r.trim()&&(E=E.replace(/\}(\s*)$/,`, ech-opts: {enable: true${s?`, query-server-name: ${s}`:""}}}$1`)),x.push(E),y++}else if(k.startsWith("- name:")){let E=[C],T=C.search(/\S/),P=T+2;for(y++;y<v.length;){let z=v[y],A=z.trim();if(!A){E.push(z),y++;break}let L=z.search(/\S/);if(L<=T&&A.startsWith("- ")||L<T&&A)break;E.push(z),y++}let _=E.join(`
`);f&&w(_)&&(E=S(E,P),_=E.join(`
`)),a&&d(_,!1)===r.trim()&&(E=m(E,P)),x.push(...E)}else x.push(C),y++}return x.join(`
`)}async function vo(e,t={}){let r=t?.UUID||null,o=t?.Fingerprint||"chrome",i=!!t?.ECH,s=t?.ECHConfig?.SNI||"cloudflare-ech.com",n=e.replace("1.1.1.1","8.8.8.8").replace("1.0.0.1","8.8.4.4");try{let a=JSON.parse(n),l=u=>u==null?[]:Array.isArray(u)?u:[u],f=()=>a.route=a.route&&typeof a.route=="object"?a.route:{},c=u=>u&&typeof u=="object"&&!Array.isArray(u)&&typeof u.server=="string"?u.server:null,p=(u,d)=>{if(!d||typeof d!="string")return null;let b=f(),$=`${u}-${d}`,S=Array.isArray(b.rule_set)?b.rule_set:l(b.rule_set);if(!S.some(m=>m?.tag===$)){let m=u==="geoip"?b.geoip:b.geosite;S.push({tag:$,type:"remote",format:"binary",url:`https://raw.githubusercontent.com/SagerNet/sing-${u}/rule-set/${$}.srs`,...m?.download_detour?{download_detour:m.download_detour}:{}}),a.experimental=a.experimental&&typeof a.experimental=="object"?a.experimental:{},a.experimental.cache_file=a.experimental.cache_file&&typeof a.experimental.cache_file=="object"?a.experimental.cache_file:{},a.experimental.cache_file.enabled??=!0}return b.rule_set=S,$},g=u=>{if(!u||typeof u!="object"||Array.isArray(u))return u;if(u.type==="logical"&&Array.isArray(u.rules))return u.rules=u.rules.map(g),u;let d=[];for(let b of l(u.geoip))typeof b=="string"&&(b.toLowerCase()==="private"?u.ip_is_private=!0:d.push(p("geoip",b)));for(let b of l(u.source_geoip))typeof b=="string"&&(d.push(p("geoip",b)),u.rule_set_ip_cidr_match_source=!0);for(let b of l(u.geosite))typeof b=="string"&&d.push(p("geosite",b));return d.length&&(u.rule_set=[...new Set([...l(u.rule_set),...d].filter(Boolean))]),delete u.geoip,delete u.source_geoip,delete u.geosite,u},h=(u,d)=>{if(u=g(u),!u||typeof u!="object"||Array.isArray(u))return u;if(u.type==="logical"&&Array.isArray(u.rules))return u.rules=u.rules.map($=>h($,d)),u;let b=c(u);if(b&&d.has(b)){for(let $ of["server","strategy","disable_cache","rewrite_ttl","client_subnet","timeout"])delete u[$];u.action="predefined",u.rcode=d.get(b)}else b&&!u.action&&(u.action="route");return u};if(Array.isArray(a.inbounds)){for(let u of a.inbounds)if(!(!u||typeof u!="object"||u.type!=="tun")){for(let d of[{targetKey:"address",sourceKeys:["inet4_address","inet6_address"]},{targetKey:"route_address",sourceKeys:["inet4_route_address","inet6_route_address"]},{targetKey:"route_exclude_address",sourceKeys:["inet4_route_exclude_address","inet6_route_exclude_address"]}]){let b=l(u[d.targetKey]);for(let $ of d.sourceKeys)b.push(...l(u[$]));b.length&&(u[d.targetKey]=[...new Set(b)]);for(let $ of d.sourceKeys)delete u[$]}if(u.tag){let d=[];if(u.domain_strategy&&d.push({inbound:u.tag,action:"resolve",strategy:u.domain_strategy}),u.sniff){let b={inbound:u.tag,action:"sniff"};u.sniff_timeout&&(b.timeout=u.sniff_timeout),d.push(b)}if(d.length){let b=f();b.rules=[...d,...l(b.rules)]}}delete u.sniff,delete u.sniff_timeout,delete u.domain_strategy}}if(a?.route&&typeof a.route=="object"&&Array.isArray(a.route.rules)){let u=d=>(d=g(d),d?.type==="logical"&&Array.isArray(d.rules)?d.rules=d.rules.map(u):d&&typeof d=="object"&&!Array.isArray(d)&&d.outbound&&!d.action&&(d.action="route"),d);a.route.rules=a.route.rules.map(u)}let w=a?.dns;if(w&&typeof w=="object"){let u=w.fakeip&&typeof w.fakeip=="object"?w.fakeip:null,d=new Map,b={"tcp:":"tcp","udp:":"udp","tls:":"tls","quic:":"quic","https:":"https","h3:":"h3"},$={success:"NOERROR",format_error:"FORMERR",server_failure:"SERVFAIL",name_error:"NXDOMAIN",not_implemented:"NOTIMP",refused:"REFUSED"},S=!1;if(Array.isArray(w.servers)){let m=[];for(let v of w.servers){if(!v||typeof v!="object"||Array.isArray(v)){m.push(v);continue}let x={...v},y=null,C="",k=typeof x.address=="string"?x.address.trim():"";if(k){let E=k.toLowerCase();if(E==="fakeip")y={type:"fakeip"};else if(E==="local")y={type:"local"};else if(E.startsWith("rcode://"))y={type:"rcode"},C=k.slice(8).toLowerCase();else if(E.startsWith("dhcp://")){let T=k.slice(7);y=T&&T.toLowerCase()!=="auto"?{type:"dhcp",interface:T}:{type:"dhcp"}}else{try{let T=new URL(k),P=b[T.protocol.toLowerCase()];if(P){let _=T.hostname?.startsWith("[")&&T.hostname.endsWith("]")?T.hostname.slice(1,-1):T.hostname;y={type:P,server:_||T.host||k,...T.port?{server_port:Number(T.port)}:{},...(P==="https"||P==="h3")&&T.pathname&&T.pathname!=="/dns-query"?{path:T.pathname}:{}}}}catch{}y||(y={type:"udp",server:k})}}if(y?.type==="rcode"){let E=$[C]||"NOERROR";typeof x.tag=="string"&&x.tag&&(d.set(x.tag,E),d.set(x.tag.startsWith("dns_")?x.tag.slice(4):`dns_${x.tag}`,E));continue}if(y&&(delete x.address,Object.assign(x,y)),x.address_resolver!==void 0&&x.domain_resolver===void 0&&(x.domain_resolver=x.address_resolver),x.address_strategy!==void 0&&x.domain_strategy===void 0&&(x.domain_strategy=x.address_strategy),delete x.address_resolver,delete x.address_strategy,x.detour==="DIRECT"&&delete x.detour,x.type==="fakeip"&&(S=!0,u))for(let E of["inet4_range","inet6_range"])u[E]!==void 0&&x[E]===void 0&&(x[E]=u[E]);m.push(x)}w.servers=m}if(u&&!S&&u.enabled!==!1){let m={type:"fakeip",tag:"fakeip"};for(let v of Array.isArray(w.rules)?w.rules:[]){let x=c(v);if(x&&x.toLowerCase().includes("fakeip")){m.tag=x;break}}for(let v of["inet4_range","inet6_range"])u[v]!==void 0&&(m[v]=u[v]);Array.isArray(w.servers)?w.servers.push(m):w.servers=[m]}if(Array.isArray(w.rules)){let m=[];for(let v of w.rules){let x=c(v),y=l(v?.outbound),C=new Set(["outbound","server","action","strategy","disable_cache","rewrite_ttl","client_subnet","timeout"]);if(v&&typeof v=="object"&&!Array.isArray(v)&&v.type!=="logical"&&x&&y.includes("any")&&Object.keys(v).every(E=>C.has(E))){let E=f();if(E.default_domain_resolver===void 0){let T={server:x};for(let P of["strategy","disable_cache","rewrite_ttl","client_subnet","timeout"])v[P]!==void 0&&(T[P]=v[P]);E.default_domain_resolver=Object.keys(T).length===1?T.server:T}continue}m.push(h(v,d))}w.rules=m}delete w.fakeip,delete w.independent_cache}if(a?.route&&typeof a.route=="object"&&(delete a.route.geoip,delete a.route.geosite),a?.ntp?.detour==="DIRECT"&&delete a.ntp.detour,Array.isArray(a.outbounds)){let u=new Set(a.outbounds.map(b=>b?.tag).filter(Boolean)),d=b=>b==="REJECT"||b&&typeof b=="object"&&(Array.isArray(b)?b.some(d):Object.values(b).some(d));!u.has("REJECT")&&d({outbounds:a.outbounds,route:a.route})&&a.outbounds.push({type:"block",tag:"REJECT"})}return r&&a.outbounds?.forEach(u=>{(u.uuid&&u.uuid===r||u.password&&u.password===r)&&(u.tls||(u.tls={enabled:!0}),o&&(u.tls.utls={enabled:!0,fingerprint:o}),i&&(u.tls.ech={enabled:!0,query_server_name:s}))}),JSON.stringify(a,null,2)}catch(a){return console.error("Singbox热补丁执行失败:",a),n}}function So(e,t,r){let o=e.includes(`\r
`)?e.split(`\r
`):e.split(`
`),i=r.随机路径?Qe(r.完整节点路径):r.完整节点路径,s="";for(let n of o)if(n.includes("= trojan,")&&!n.includes("ws=true")&&!n.includes("ws-path=")){let a=(n.split("sni=")[1]??"").split(",")[0],l=`sni=${a}, skip-cert-verify=${r.跳过证书验证}`,f=`sni=${a}, skip-cert-verify=${r.跳过证书验证}, ws=true, ws-path=${i.replace(/,/g,"%2C")}, ws-headers=Host:"${a}"`;s+=n.replace(new RegExp(l,"g"),f).replace("[","").replace("]","")+`
`}else s+=n+`
`;return s=`#!MANAGED-CONFIG ${t} interval=${r.优选订阅生成.SUBUpdateTime*60*60} strict=false`+s.substring(s.indexOf(`
`)),s}async function ko(){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="noindex, nofollow">
	<title>喵呜小站 · 今日也要元气满满</title>
	<style>
		:root {
			--pink: #ff8fab;
			--pink-deep: #ff5d8f;
			--cream: #fff7f3;
			--ink: #3d2c2e;
			--muted: #8a6f73;
			--card: rgba(255, 255, 255, 0.78);
			--shadow: 0 20px 50px -20px rgba(255, 93, 143, 0.35);
		}

		* { margin: 0; padding: 0; box-sizing: border-box; }

		body {
			min-height: 100vh;
			font-family: "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
			color: var(--ink);
			background:
				radial-gradient(900px 500px at 10% 0%, rgba(255, 182, 193, 0.45), transparent 55%),
				radial-gradient(800px 480px at 95% 15%, rgba(186, 230, 253, 0.4), transparent 50%),
				radial-gradient(700px 420px at 50% 100%, rgba(254, 240, 138, 0.35), transparent 55%),
				linear-gradient(165deg, #fff5f8, #f0f7ff 50%, #fff9f0);
			overflow-x: hidden;
			position: relative;
		}

		/* floating paw prints */
		.paws {
			position: fixed;
			inset: 0;
			pointer-events: none;
			z-index: 0;
			overflow: hidden;
		}
		.paw {
			position: absolute;
			font-size: 22px;
			opacity: 0.12;
			animation: floatPaw 12s linear infinite;
		}
		.paw:nth-child(1) { left: 8%; animation-delay: 0s; }
		.paw:nth-child(2) { left: 22%; animation-delay: 2s; font-size: 16px; }
		.paw:nth-child(3) { left: 48%; animation-delay: 4s; }
		.paw:nth-child(4) { left: 68%; animation-delay: 1s; font-size: 18px; }
		.paw:nth-child(5) { left: 85%; animation-delay: 3s; font-size: 14px; }

		@keyframes floatPaw {
			0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
			10% { opacity: 0.15; }
			90% { opacity: 0.12; }
			100% { transform: translateY(-10vh) rotate(30deg); opacity: 0; }
		}

		.wrap {
			position: relative;
			z-index: 1;
			min-height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 28px 16px 40px;
		}

		.card {
			width: min(460px, 100%);
			background: var(--card);
			backdrop-filter: blur(18px) saturate(1.2);
			-webkit-backdrop-filter: blur(18px) saturate(1.2);
			border: 1px solid rgba(255, 255, 255, 0.75);
			border-radius: 28px;
			box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,0.85);
			padding: 28px 26px 24px;
			text-align: center;
			animation: cardIn 0.7s cubic-bezier(.2,.8,.2,1) both;
		}

		@keyframes cardIn {
			from { opacity: 0; transform: translateY(24px) scale(0.96); }
			to { opacity: 1; transform: translateY(0) scale(1); }
		}

		/* ===== CSS Cat ===== */
		.cat-stage {
			height: 150px;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			margin-bottom: 8px;
			position: relative;
		}

		.cat {
			position: relative;
			width: 120px;
			height: 110px;
			animation: bounce 2.4s ease-in-out infinite;
			cursor: pointer;
			user-select: none;
		}

		@keyframes bounce {
			0%, 100% { transform: translateY(0); }
			50% { transform: translateY(-8px); }
		}

		.cat.pet {
			animation: pet 0.45s ease;
		}
		@keyframes pet {
			0% { transform: scale(1) rotate(0); }
			30% { transform: scale(1.08) rotate(-6deg); }
			60% { transform: scale(1.05) rotate(6deg); }
			100% { transform: scale(1) rotate(0); }
		}

		/* body */
		.cat-body {
			position: absolute;
			left: 18px;
			bottom: 8px;
			width: 84px;
			height: 58px;
			background: linear-gradient(160deg, #ffd6e0, #ffb3c6);
			border-radius: 42px 42px 28px 28px;
			box-shadow: inset 0 -8px 0 rgba(255, 93, 143, 0.12);
		}
		.cat-body::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: 10px;
			width: 28px;
			height: 18px;
			transform: translateX(-50%);
			background: #fff6f8;
			border-radius: 50%;
			opacity: 0.9;
		}

		/* head */
		.cat-head {
			position: absolute;
			left: 24px;
			bottom: 48px;
			width: 72px;
			height: 60px;
			background: linear-gradient(160deg, #ffe0e9, #ffc2d1);
			border-radius: 50% 50% 46% 46%;
			z-index: 2;
		}

		/* ears */
		.ear {
			position: absolute;
			top: -10px;
			width: 0;
			height: 0;
			border-left: 12px solid transparent;
			border-right: 12px solid transparent;
			border-bottom: 22px solid #ffb3c6;
			z-index: 1;
		}
		.ear.left { left: 6px; transform: rotate(-18deg); }
		.ear.right { right: 6px; transform: rotate(18deg); }
		.ear::after {
			content: '';
			position: absolute;
			left: -6px;
			top: 8px;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			border-bottom: 12px solid #ff8fab;
		}

		/* face */
		.eye {
			position: absolute;
			top: 24px;
			width: 10px;
			height: 12px;
			background: #3d2c2e;
			border-radius: 50%;
			animation: blink 4.5s infinite;
		}
		.eye.left { left: 18px; }
		.eye.right { right: 18px; }
		.eye::after {
			content: '';
			position: absolute;
			top: 2px;
			left: 2px;
			width: 3px;
			height: 3px;
			background: #fff;
			border-radius: 50%;
		}
		@keyframes blink {
			0%, 92%, 100% { transform: scaleY(1); }
			95% { transform: scaleY(0.1); }
		}

		.nose {
			position: absolute;
			left: 50%;
			top: 34px;
			width: 8px;
			height: 6px;
			background: #ff5d8f;
			border-radius: 50%;
			transform: translateX(-50%);
		}
		.mouth {
			position: absolute;
			left: 50%;
			top: 40px;
			width: 16px;
			height: 8px;
			border: 2px solid #d45d7a;
			border-top: 0;
			border-radius: 0 0 12px 12px;
			transform: translateX(-50%);
			background: transparent;
		}

		.whisker {
			position: absolute;
			top: 36px;
			width: 18px;
			height: 1.5px;
			background: #d45d7a;
			opacity: 0.55;
			border-radius: 2px;
		}
		.whisker.l1 { left: 2px; transform: rotate(12deg); }
		.whisker.l2 { left: 2px; top: 40px; transform: rotate(-8deg); }
		.whisker.r1 { right: 2px; transform: rotate(-12deg); }
		.whisker.r2 { right: 2px; top: 40px; transform: rotate(8deg); }

		/* tail */
		.tail {
			position: absolute;
			right: 2px;
			bottom: 28px;
			width: 36px;
			height: 12px;
			background: linear-gradient(90deg, #ffb3c6, #ff8fab);
			border-radius: 12px;
			transform-origin: left center;
			animation: wag 1.6s ease-in-out infinite;
			z-index: 0;
		}
		@keyframes wag {
			0%, 100% { transform: rotate(15deg); }
			50% { transform: rotate(48deg); }
		}

		/* paws */
		.paw-front {
			position: absolute;
			bottom: 2px;
			width: 16px;
			height: 14px;
			background: #ffc2d1;
			border-radius: 50% 50% 40% 40%;
			z-index: 3;
		}
		.paw-front.left { left: 34px; }
		.paw-front.right { right: 34px; }

		/* speech bubble */
		.meow {
			position: absolute;
			top: 6px;
			right: 18%;
			background: #fff;
			color: var(--pink-deep);
			font-size: 13px;
			font-weight: 700;
			padding: 6px 10px;
			border-radius: 14px 14px 14px 4px;
			box-shadow: 0 6px 16px -8px rgba(255, 93, 143, 0.5);
			opacity: 0;
			transform: translateY(6px) scale(0.9);
			transition: opacity .25s, transform .25s;
			pointer-events: none;
			white-space: nowrap;
		}
		.meow.show {
			opacity: 1;
			transform: translateY(0) scale(1);
		}

		/* hearts when pet */
		.hearts {
			position: absolute;
			inset: 0;
			pointer-events: none;
			overflow: visible;
		}
		.heart {
			position: absolute;
			left: 50%;
			bottom: 70%;
			font-size: 14px;
			animation: heartUp 0.9s ease-out forwards;
		}
		@keyframes heartUp {
			0% { opacity: 1; transform: translate(-50%, 0) scale(0.6); }
			100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), -50px) scale(1.2); }
		}

		h1 {
			font-size: 1.55rem;
			letter-spacing: -0.02em;
			margin: 6px 0 6px;
			background: linear-gradient(120deg, #ff5d8f, #fb923c 55%, #f472b6);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.subtitle {
			color: var(--muted);
			font-size: 0.92rem;
			line-height: 1.55;
			margin-bottom: 18px;
		}

		/* counter */
		.stats {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 10px;
			margin-bottom: 16px;
		}
		.stat {
			background: linear-gradient(160deg, #fff, #fff5f8);
			border: 1px solid rgba(255, 143, 171, 0.25);
			border-radius: 16px;
			padding: 12px 10px;
			box-shadow: 0 6px 16px -12px rgba(255, 93, 143, 0.4);
		}
		.stat-label {
			font-size: 12px;
			color: var(--muted);
			margin-bottom: 4px;
		}
		.stat-value {
			font-size: 1.55rem;
			font-weight: 800;
			font-variant-numeric: tabular-nums;
			letter-spacing: -0.03em;
			background: linear-gradient(135deg, #ff5d8f, #fb7185);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			line-height: 1.1;
		}
		.stat-value.pet-count {
			background: linear-gradient(135deg, #38bdf8, #818cf8);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		.stat-hint {
			font-size: 11px;
			color: #b08a90;
			margin-top: 2px;
		}

		.tip {
			font-size: 12.5px;
			color: var(--muted);
			line-height: 1.5;
			padding: 10px 12px;
			background: rgba(255, 255, 255, 0.55);
			border-radius: 12px;
			border: 1px dashed rgba(255, 143, 171, 0.35);
		}
		.tip strong { color: var(--pink-deep); }

		.footer {
			margin-top: 14px;
			font-size: 11px;
			color: #b8a0a4;
		}
		.footer a {
			color: #ff7a9e;
			text-decoration: none;
		}
		.footer a:hover { text-decoration: underline; }

		/* second little cat peeking */
		.mini-cat {
			position: absolute;
			left: 12px;
			bottom: 10px;
			width: 42px;
			height: 36px;
			opacity: 0.95;
			animation: peek 3.2s ease-in-out infinite;
		}
		@keyframes peek {
			0%, 100% { transform: translateY(8px) rotate(-4deg); }
			50% { transform: translateY(0) rotate(2deg); }
		}
		.mini-cat .m-body {
			position: absolute;
			bottom: 0;
			left: 6px;
			width: 30px;
			height: 20px;
			background: #c4b5fd;
			border-radius: 16px 16px 10px 10px;
		}
		.mini-cat .m-head {
			position: absolute;
			bottom: 12px;
			left: 8px;
			width: 26px;
			height: 22px;
			background: #ddd6fe;
			border-radius: 50%;
		}
		.mini-cat .m-ear {
			position: absolute;
			top: -5px;
			width: 0; height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-bottom: 9px solid #c4b5fd;
		}
		.mini-cat .m-ear.l { left: 2px; transform: rotate(-15deg); }
		.mini-cat .m-ear.r { right: 2px; transform: rotate(15deg); }
		.mini-cat .m-eye {
			position: absolute;
			top: 9px;
			width: 3px; height: 4px;
			background: #4c1d95;
			border-radius: 50%;
		}
		.mini-cat .m-eye.l { left: 7px; }
		.mini-cat .m-eye.r { right: 7px; }

		@media (max-width: 420px) {
			.card { padding: 22px 16px 18px; border-radius: 22px; }
			h1 { font-size: 1.35rem; }
			.stat-value { font-size: 1.35rem; }
		}

		@media (prefers-reduced-motion: reduce) {
			.cat, .tail, .eye, .paw, .mini-cat { animation: none !important; }
		}
	</style>
</head>
<body>
	<div class="paws" aria-hidden="true">
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
	</div>

	<div class="wrap">
		<div class="card">
			<div class="cat-stage">
				<div class="meow" id="meowBubble">喵~</div>
				<div class="hearts" id="hearts"></div>
				<div class="cat" id="cat" title="戳戳小猫" role="button" tabindex="0" aria-label="摸摸小猫">
					<div class="tail"></div>
					<div class="cat-body"></div>
					<div class="paw-front left"></div>
					<div class="paw-front right"></div>
					<div class="cat-head">
						<div class="ear left"></div>
						<div class="ear right"></div>
						<div class="eye left"></div>
						<div class="eye right"></div>
						<div class="nose"></div>
						<div class="mouth"></div>
						<div class="whisker l1"></div>
						<div class="whisker l2"></div>
						<div class="whisker r1"></div>
						<div class="whisker r2"></div>
					</div>
				</div>
				<div class="mini-cat" aria-hidden="true">
					<div class="m-body"></div>
					<div class="m-head">
						<div class="m-ear l"></div>
						<div class="m-ear r"></div>
						<div class="m-eye l"></div>
						<div class="m-eye r"></div>
					</div>
				</div>
			</div>

			<h1>喵呜小站上线啦</h1>
			<p class="subtitle">今天也是元气满满的一天～<br>点一点小猫，给你加好运 ✨</p>

			<div class="stats">
				<div class="stat">
					<div class="stat-label">今日点击</div>
					<div class="stat-value" id="todayClicks">0</div>
					<div class="stat-hint" id="dateLabel">—</div>
				</div>
				<div class="stat">
					<div class="stat-label">摸摸次数</div>
					<div class="stat-value pet-count" id="petCount">0</div>
					<div class="stat-hint">累计撸猫</div>
				</div>
			</div>

			<p class="tip">戳一戳粉红小猫会 <strong>喵</strong> 哦～ 今日点击会按天自动重置。</p>
			<p class="footer">Thank you for visiting · powered by curiosity</p>
		</div>
	</div>

	<script>
	(function () {
		var STORAGE_CLICKS = 'meow_today_clicks_v1';
		var STORAGE_PETS = 'meow_pet_total_v1';
		var STORAGE_DATE = 'meow_today_date_v1';

		var meows = ['喵~', '喵呜！', '摸摸头~', '咕噜咕噜', '爪巴！', '今天也要开心', '想吃小鱼干', '蹭蹭～', '好舒服…', '再点一下！'];

		function todayKey() {
			var d = new Date();
			var m = String(d.getMonth() + 1).padStart(2, '0');
			var day = String(d.getDate()).padStart(2, '0');
			return d.getFullYear() + '-' + m + '-' + day;
		}

		function loadClicks() {
			var today = todayKey();
			var savedDate = localStorage.getItem(STORAGE_DATE);
			var clicks = parseInt(localStorage.getItem(STORAGE_CLICKS) || '0', 10) || 0;
			if (savedDate !== today) {
				clicks = 0;
				localStorage.setItem(STORAGE_DATE, today);
				localStorage.setItem(STORAGE_CLICKS, '0');
			}
			return clicks;
		}

		function saveClicks(n) {
			localStorage.setItem(STORAGE_DATE, todayKey());
			localStorage.setItem(STORAGE_CLICKS, String(n));
		}

		function loadPets() {
			return parseInt(localStorage.getItem(STORAGE_PETS) || '0', 10) || 0;
		}

		function savePets(n) {
			localStorage.setItem(STORAGE_PETS, String(n));
		}

		var clicks = loadClicks();
		var pets = loadPets();

		// first visit of the day / page open counts as a click
		clicks += 1;
		saveClicks(clicks);

		var elClicks = document.getElementById('todayClicks');
		var elPets = document.getElementById('petCount');
		var elDate = document.getElementById('dateLabel');
		var cat = document.getElementById('cat');
		var bubble = document.getElementById('meowBubble');
		var hearts = document.getElementById('hearts');

		elClicks.textContent = clicks;
		elPets.textContent = pets;
		elDate.textContent = todayKey().replace(/-/g, '/');

		var bubbleTimer = null;
		function showMeow(text) {
			bubble.textContent = text || meows[Math.floor(Math.random() * meows.length)];
			bubble.classList.add('show');
			clearTimeout(bubbleTimer);
			bubbleTimer = setTimeout(function () {
				bubble.classList.remove('show');
			}, 1200);
		}

		function spawnHeart() {
			var h = document.createElement('span');
			h.className = 'heart';
			h.textContent = Math.random() > 0.5 ? '💕' : '✨';
			h.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
			hearts.appendChild(h);
			setTimeout(function () { h.remove(); }, 900);
		}

		function petCat() {
			clicks += 1;
			pets += 1;
			saveClicks(clicks);
			savePets(pets);
			elClicks.textContent = clicks;
			elPets.textContent = pets;

			cat.classList.remove('pet');
			void cat.offsetWidth;
			cat.classList.add('pet');

			showMeow();
			spawnHeart();
			if (Math.random() > 0.4) setTimeout(spawnHeart, 80);
		}

		cat.addEventListener('click', petCat);
		cat.addEventListener('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				petCat();
			}
		});

		// idle meow occasionally
		setInterval(function () {
			if (Math.random() > 0.65) showMeow();
		}, 8000);

		// greet
		setTimeout(function () { showMeow('欢迎回来～'); }, 600);
	})();
	</script>
</body>
</html>
`}async function Co(e,t){let r=new Date,o=r.getFullYear()+"-"+String(r.getMonth()+1).padStart(2,"0")+"-"+String(r.getDate()).padStart(2,"0")+" "+String(r.getHours()).padStart(2,"0")+":"+String(r.getMinutes()).padStart(2,"0")+":"+String(r.getSeconds()).padStart(2,"0"),i=Array.from(crypto.getRandomValues(new Uint8Array(8))).map(s=>s.toString(16).padStart(2,"0")).join("");return`<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
<title>Worker threw exception | ${e} | Cloudflare</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/cf.errors.css" />
<!--[if lt IE 9]><link rel="stylesheet" id='cf_styles-ie-css' href="/cdn-cgi/styles/cf.errors.ie.css" /><![endif]-->
<style>body{margin:0;padding:0}</style>


<!--[if gte IE 10]><!-->
<script>
  if (!navigator.cookieEnabled) {
    window.addEventListener('DOMContentLoaded', function () {
      var cookieEl = document.getElementById('cookie-alert');
      cookieEl.style.display = 'block';
    })
  }
</script>
<!--<![endif]-->

</head>
<body>
    <div id="cf-wrapper">
        <div class="cf-alert cf-alert-error cf-cookie-error" id="cookie-alert" data-translate="enable_cookies">Please enable cookies.</div>
        <div id="cf-error-details" class="cf-error-details-wrapper">
            <div class="cf-wrapper cf-header cf-error-overview">
                <h1>
                    <span class="cf-error-type" data-translate="error">Error</span>
                    <span class="cf-error-code">1101</span>
                    <small class="heading-ray-id">Ray ID: ${i} &bull; ${o} UTC</small>
                </h1>
                <h2 class="cf-subheadline" data-translate="error_desc">Worker threw exception</h2>
            </div><!-- /.header -->

            <section></section><!-- spacer -->

            <div class="cf-section cf-wrapper">
                <div class="cf-columns two">
                    <div class="cf-column">
                        <h2 data-translate="what_happened">What happened?</h2>
                            <p>You've requested a page on a website (${e}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=error_100x" target="_blank">Cloudflare</a> network. An unknown error occurred while rendering the page.</p>
                    </div>

                    <div class="cf-column">
                        <h2 data-translate="what_can_i_do">What can I do?</h2>
                            <p><strong>If you are the owner of this website:</strong><br />refer to <a href="https://developers.cloudflare.com/workers/observability/errors/" target="_blank">Workers - Errors and Exceptions</a> and check Workers Logs for ${e}.</p>
                    </div>

                </div>
            </div><!-- /.section -->

            <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
    <p class="text-13">
      <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold"> ${i}</strong></span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
      <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
        Your IP:
        <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
        <span class="hidden" id="cf-footer-ip">${t}</span>
        <span class="cf-footer-separator sm:hidden">&bull;</span>
      </span>
      <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing" id="brand_link" target="_blank">Cloudflare</a></span>

    </p>
    <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
  </div><!-- /.error-footer -->

        </div><!-- /#cf-error-details -->
    </div><!-- /#cf-wrapper -->

     <script>
    window._cf_translation = {};


  </script>
</body>
</html>`}var Qt=new Map,$t=new TextDecoder;function Po(e){return e>=48&&e<=57?e-48:(e|=32,e>=97&&e<=102?e-87:-1)}function ws(e){let t=String(e||""),r=Qt.get(t);if(r)return r;let o=t.replace(/-/g,"");if(o.length!==32)return null;let i=new Uint8Array(16);for(let s=0;s<16;s++){let n=Po(o.charCodeAt(s*2)),a=Po(o.charCodeAt(s*2+1));if(n<0||a<0)return null;i[s]=n<<4|a}return Qt.size>=32&&Qt.clear(),Qt.set(t,i),i}function vt(e,t,r){let o=ws(r);if(!o||e.byteLength<t+16)return!1;for(let i=0;i<16;i++)if(e[t+i]!==o[i])return!1;return!0}function qt(e,t){let r=M(e),o=r.byteLength;if(o<24)return{hasError:!0,message:"Invalid data"};let i=r[0];if(i!==0)return{hasError:!0,message:`Invalid VLESS version: ${i}`};if(!vt(r,1,t))return{hasError:!0,message:"Invalid uuid"};let n=18+r[17];if(o<n+4)return{hasError:!0,message:"Invalid data"};let a=r[n],l=!1;if(a!==1)if(a===2)l=!0;else return{hasError:!0,message:"Invalid command"};let f=n+1,c=r[f]<<8|r[f+1],p=f+3,g=0,h="",w=r[f+2];switch(w){case 1:if(g=4,o<p+g)return{hasError:!0,message:"Invalid IPv4 address length"};h=`${r[p]}.${r[p+1]}.${r[p+2]}.${r[p+3]}`;break;case 2:if(o<p+1)return{hasError:!0,message:"Invalid domain length"};if(g=r[p],p+=1,o<p+g)return{hasError:!0,message:"Invalid domain data"};h=$t.decode(r.subarray(p,p+g));break;case 3:if(g=16,o<p+g)return{hasError:!0,message:"Invalid IPv6 address length"};let d=[];for(let b=0;b<8;b++){let $=p+b*2;d.push((r[$]<<8|r[$+1]).toString(16))}h=d.join(":");break;default:return{hasError:!0,message:`Invalid address type: ${w}`}}if(!h)return{hasError:!0,message:`Invalid address: ${w}`};let u=p+g;return{hasError:!1,addressType:w,port:c,hostname:h,isUDP:l,rawClientData:r.subarray(u),version:i}}var it={"aes-128-gcm":{method:"aes-128-gcm",keyLen:16,saltLen:16,maxChunk:16383,aesLength:128},"aes-256-gcm":{method:"aes-256-gcm",keyLen:32,saltLen:32,maxChunk:16383,aesLength:256}},Nr=16,er=12,xs=new TextEncoder().encode("ss-subkey"),bs=new TextEncoder,_s=new TextDecoder,We=new Map;function zo(e){for(let t=0;t<e.length;t++)if(e[t]=e[t]+1&255,e[t]!==0)return}async function Mr(e,t){let r=`${t}:${e}`;if(We.has(r))return We.get(r);for(;We.size>=Gr;){let i=We.keys().next().value;if(i===void 0)break;We.delete(i)}let o=(async()=>{let i=bs.encode(e||""),s=new Uint8Array(0),n=new Uint8Array(0);for(;n.byteLength<t;){let a=new Uint8Array(s.byteLength+i.byteLength);a.set(s,0),a.set(i,s.byteLength),s=Et(a),n=ie(n,s)}return n.slice(0,t)})();We.set(r,o);try{return await o}catch(i){throw We.delete(r),i}}async function jr(e,t,r,o){let i={name:"HMAC",hash:"SHA-1"},s=await crypto.subtle.importKey("raw",r,i,!1,["sign"]),n=new Uint8Array(await crypto.subtle.sign("HMAC",s,t)),a=await crypto.subtle.importKey("raw",n,i,!1,["sign"]),l=new Uint8Array(e.keyLen),f=new Uint8Array(0),c=0,p=1;for(;c<e.keyLen;){let g=ie(f,xs,new Uint8Array([p]));f=new Uint8Array(await crypto.subtle.sign("HMAC",a,g));let h=Math.min(f.byteLength,e.keyLen-c);l.set(f.subarray(0,h),c),c+=h,p+=1}return crypto.subtle.importKey("raw",l,{name:"AES-GCM",length:e.aesLength},!1,o)}async function Fr(e,t,r){let o=t.slice(),i=await crypto.subtle.encrypt({name:"AES-GCM",iv:o,tagLength:128},e,r);return zo(t),new Uint8Array(i)}async function Dr(e,t,r){let o=t.slice(),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:o,tagLength:128},e,r);return zo(t),new Uint8Array(i)}function To(e){let t=M(e);if(t.byteLength<1)return null;let r=t[0],o=1,i="";if(r===1){if(t.byteLength<o+4+2)return null;i=`${t[o]}.${t[o+1]}.${t[o+2]}.${t[o+3]}`,o+=4}else if(r===3){if(t.byteLength<o+1)return null;let n=t[o];if(n===0)throw new Error("invalid ss domain length");if(o+=1,t.byteLength<o+n+2)return null;i=_s.decode(t.subarray(o,o+n)),o+=n}else if(r===4){if(t.byteLength<o+16+2)return null;let n=[],a=new DataView(t.buffer,t.byteOffset+o,16);for(let l=0;l<8;l++)n.push(a.getUint16(l*2).toString(16));i=n.join(":"),o+=16}else throw new Error(`invalid ss addressType: ${r}`);if(!i)throw new Error(`invalid ss address: ${r}`);let s=t[o]<<8|t[o+1];if(s===0)throw new Error("invalid ss port: 0");return o+=2,{hostname:i,port:s,rawClientData:t.subarray(o)}}function Ao(e,t="",r=()=>{}){let o=it[t]||it["aes-128-gcm"],i=[o,...Object.values(it).filter(p=>p.method!==o.method)],s=new Map,n={buffer:new Uint8Array(0),hasSalt:!1,waitPayloadLength:null,decryptKey:null,nonceCounter:new Uint8Array(er),config:null},a=p=>(s.has(p.method)||s.set(p.method,Mr(e,p.keyLen)),s.get(p.method)),l=p=>{p.byteLength!==0&&(n.buffer=n.buffer.byteLength===0?p:ie(n.buffer,p))},f=()=>{if(n.buffer.byteLength>ar)throw new Error(`SS inbound buffer exceeds ${ar} bytes`)},c=async()=>{let p=2+Nr,g=Math.max(...i.map(u=>u.saltLen)),h=16,w=Math.min(h,Math.max(0,n.buffer.byteLength-(p+Math.min(...i.map(u=>u.saltLen)))));for(let u=0;u<=w;u++)for(let d of i){let b=u+d.saltLen+p;if(n.buffer.byteLength<b)continue;let $=n.buffer.subarray(u,u+d.saltLen),S=n.buffer.subarray(u+d.saltLen,b),m=await jr(d,await a(d),$,["decrypt"]),v=new Uint8Array(er);try{let x=await Dr(m,v,S),y=x[0]<<8|x[1];if(x.byteLength!==2||y>d.maxChunk)continue;return u>0&&r(`[SS入站] 检测到前导噪声 ${u}B，已自动对齐`),d.method!==o.method&&r(`[SS入站] URL enc=${t||o.method} 与实际 ${d.method} 不一致，已自动切换`),n.buffer=n.buffer.subarray(b),n.decryptKey=m,n.nonceCounter=v,n.waitPayloadLength=y,n.config=d,n.hasSalt=!0,!0}catch{}}if(n.buffer.byteLength>=g+p+h)throw new Error(`SS handshake decrypt failed (enc=${t||"auto"}, candidates=${i.map(u=>u.method).join("/")})`);return!1};return{get config(){return n.config},async 输入(p,g){if(l(M(p)),!n.hasSalt&&!await c())return f(),0;let h=0;for(;;){if(n.waitPayloadLength===null){let d=2+Nr;if(n.buffer.byteLength<d)break;let b=await Dr(n.decryptKey,n.nonceCounter,n.buffer.subarray(0,d));n.buffer=n.buffer.subarray(d);let $=b[0]<<8|b[1];if(b.byteLength!==2||$>n.config.maxChunk)throw new Error(`SS payload length invalid: ${$}`);n.waitPayloadLength=$}let w=n.waitPayloadLength+Nr;if(n.buffer.byteLength<w)break;if(h>=cr)throw new Error(`SS records per message exceed ${cr}`);let u=await Dr(n.decryptKey,n.nonceCounter,n.buffer.subarray(0,w));n.buffer=n.buffer.subarray(w),n.waitPayloadLength=null,h+=1,await g(u)}return f(),n.buffer=n.buffer.byteLength===0?new Uint8Array(0):n.buffer.slice(),h}}}function vs(e,t){if(!e?.byteLength)return!1;if(e.byteLength>=18&&vt(e,1,t))return!0;if(e.byteLength<58||e[56]!==13||e[57]!==10)return!1;let r=Ye(t);for(let o=0;o<56;o++)if(e[o]!==r.charCodeAt(o))return!1;return!0}function Ss(e,t){if(!e)return null;if(e.length>Kr)throw new Error("early data is too large");let r,o=Uint8Array;if(typeof o.fromBase64=="function")try{r=o.fromBase64(e,{alphabet:"base64url"})}catch{}if(!r){let i=e.replace(/-/g,"+").replace(/_/g,"/"),s=i.length%4;s&&(i+="=".repeat(4-s));let n;try{n=atob(i)}catch{return null}r=new Uint8Array(n.length);for(let a=0;a<n.length;a++)r[a]=n.charCodeAt(a)}if(r.byteLength>8192)throw new Error("early data is too large");return vs(r,t)?r:null}async function Eo(e,t,r,o={}){let i=new WebSocketPair,[s,n]=Object.values(i);try{n.accept({allowHalfOpen:!0})}catch{n.accept()}n.binaryType="arraybuffer";let a={socket:null,connectingPromise:null,retryConnect:null},l=!1,f=null,c={缓存:new Uint8Array(0),反代地址:o.木马反代地址},p=e.headers.get("sec-websocket-protocol")||"",g=!!r.searchParams.get("enc"),h=null,w=Promise.resolve(),u=!1,d=!1,b=!1,$=0,S=0,m=null,v=null,x=null,y=null,C=null,k=!1,E=null,T=new Uint8Array(0),P=null,_=64*1024,z=async Z=>{E&&await Ze(E,hn(Z))},A=Z=>{for(let D=0;D<=Z.byteLength-4;D++)if(Z[D]===13&&Z[D+1]===10&&Z[D+2]===13&&Z[D+3]===10)return D+4;return-1},L=async Z=>{let D=M(Z);if(D.byteLength){if(T.byteLength+D.byteLength>_)throw new Error("WS local speed-test request is too large");for(T=ie(T,D);T.byteLength;){let B=A(T);if(B===-1)return;let Y=$t.decode(T.subarray(0,B)).match(/(?:^|\r\n)content-length\s*:\s*(\d+)/i),ue=Y?Number(Y[1]):0,pe=B+ue;if(!Number.isSafeInteger(ue)||pe>_)throw new Error("WS local speed-test request body is too large");if(T.byteLength<pe)return;T=T.slice(pe),await z(P),P=null}}},U=async(Z,D=null,B=null)=>{k=!0,E=Z,T=new Uint8Array(0),P=D,q(B)>0&&await L(B)},R=()=>{if(x){try{x.releaseLock()}catch{}x=null}v=null},I=h=tt({获取写入器:()=>{let Z=a.socket;return Z?(Z!==v&&(R(),v=Z,x=Z.writable.getWriter()),x):null},释放写入器:R,重试连接:async()=>{if(typeof a.retryConnect!="function")throw new Error("retry unavailable");await a.retryConnect()},关闭连接:()=>{try{a.socket?.close()}catch{}ee(n)},名称:"WS上行"}),N=async(Z,D=!0)=>I.写入并等待(Z,D),F=async()=>y||(C||(C=(async()=>{let Z=(r.searchParams.get("enc")||"").toLowerCase(),D=it[Z]||it["aes-128-gcm"],B=Ao(t,Z,O),G=null,Y=32*1024,ue=async()=>{if(G)return G;if(!B.config)throw new Error("SS cipher is not negotiated");let Q=B.config,V=await Mr(t,Q.keyLen),ne=crypto.getRandomValues(new Uint8Array(Q.saltLen)),xe=await jr(Q,V,ne,["encrypt"]),ce=new Uint8Array(er),J=!1;return G={async 加密并发送(oe,be){let Ue=M(oe);if(J||(await be(ne),J=!0),Ue.byteLength===0)return;let Pe=0;for(;Pe<Ue.byteLength;){let Ge=Math.min(Pe+Q.maxChunk,Ue.byteLength),tr=Ue.subarray(Pe,Ge),rr=new Uint8Array(2);rr[0]=tr.byteLength>>>8&255,rr[1]=tr.byteLength&255;let nr=await Fr(xe,ce,rr),Br=await Fr(xe,ce,tr),or=new Uint8Array(nr.byteLength+Br.byteLength);or.set(nr,0),or.set(Br,nr.byteLength),await be(or),Pe=Ge}}},G},pe=Promise.resolve(),fe=Q=>(pe=pe.then(async()=>{if(n.readyState!==WebSocket.OPEN)return;await(await ue()).加密并发送(Q,async ne=>{ne.byteLength>0&&n.readyState===WebSocket.OPEN&&await Ze(n,ne.buffer)})}).catch(V=>{O(`[SS发送] 加密失败: ${V?.message||V}`),ee(n)}),pe);return y={入站解密器:B,回包Socket:{get readyState(){return n.readyState},send(Q){let V=M(Q);if(V.byteLength<=Y)return fe(V);for(let ne=0;ne<V.byteLength;ne+=Y)fe(V.subarray(ne,Math.min(ne+Y,V.byteLength)));return pe},close(){ee(n)}},首包已建立:!1,目标主机:"",目标端口:0,目标头缓存:new Uint8Array(0)},y})().finally(()=>{C=null})),C),H=async Z=>{let D=await F();try{await D.入站解密器.输入(Z,async B=>{if(k){await L(B);return}let G=!1;try{G=await N(B,!1)}catch(ue){if(ue?.isQueueOverflow)throw ue;G=!1}if(G)return;if(D.首包已建立&&D.目标主机&&D.目标端口>0){await Se(D.目标主机,D.目标端口,B,D.回包Socket,null,a,t,e,o);return}D.目标头缓存=ie(D.目标头缓存,B);let Y=To(D.目标头缓存);if(!Y){if(D.目标头缓存.byteLength>259)throw new Error("SS target header exceeds 259 bytes");return}if(D.目标头缓存=new Uint8Array(0),ze(Y.hostname)){await U(D.回包Socket,null,Y.rawClientData);return}D.首包已建立=!0,D.目标主机=Y.hostname,D.目标端口=Y.port,await Se(Y.hostname,Y.port,Y.rawClientData,D.回包Socket,null,a,t,e,o)})}catch(B){let G=B?.message||`${B}`;if(B?.name==="OperationError"||G.includes("Decryption failed")||G.includes("SS handshake decrypt failed")){O(`[SS入站] 解密失败，连接关闭: ${G}`),ee(n);return}throw B}},X=async Z=>{let D=null;if(l)return f?await he(Z,n,c,e):await $e(Z,n,null,e);if(m==="ss"){await H(Z);return}if(k){await L(Z);return}if(!await N(Z)){if(m===null){if(r.searchParams.get("enc"))m="ss";else{D=D||M(Z);let B=D;m=B.byteLength>=58&&B[56]===13&&B[57]===10?"木马":"魏烈思"}f=m==="木马",O(`[WS转发] 协议类型: ${m} | 来自: ${r.host} | UA: ${e.headers.get("user-agent")||"未知"}`)}if(m==="ss"){await H(Z);return}if(!await N(Z))if(m==="木马"){let B=Dt(Z,t);if(B?.hasError)throw new Error(B.message||"Invalid trojan request");let{port:G,hostname:Y,rawClientData:ue,isUDP:pe}=B;if(ze(Y)){await U(n,null,ue);return}if(pe)return l=!0,c.目标主机=Y,c.目标端口=G,c.反代地址?he(D||M(Z),n,c,e):q(ue)>0?he(ue,n,c,e):void 0;await Se(Y,G,ue,n,null,a,t,e,o,!0,D||M(Z))}else{f=!1,D=D||M(Z);let G=qt(D,t);if(G?.hasError)throw new Error(G.message||"Invalid 魏烈思 request");let{port:Y,hostname:ue,version:pe,isUDP:fe,rawClientData:ge}=G,Q=new Uint8Array([pe,0]);if(ze(ue)){await U(n,Q,ge);return}if(fe)if(Y===53)l=!0;else throw new Error("UDP is not supported");let V=ge;if(l)return f?he(V,n,c,e):$e(V,n,Q,e);await Se(ue,Y,V,n,Q,a,t,e,o)}}},te=Z=>{if(d)return;d=!0,u=!0,$=0,S=0;let D=Z?.message||`${Z}`;D.includes("Network connection lost")||D.includes("ReadableStream is closed")?O(`[WS转发] 连接结束: ${D}`):O(`[WS转发] 处理失败: ${D}`),I.清空(),R();try{c.反代Socket?.close()}catch{}ee(n)},j=Z=>(w=w.then(Z).catch(te),w),W=Z=>{if(u||d)return;let D=Math.max(0,q(Z)),B=$+D,G=S+1;if(B>kt||G>Ct){te(new Error(`[WS显式传输] 队列溢出: ${B}B/${G}`));return}$=B,S=G,j(async()=>{$=Math.max(0,$-D),S=Math.max(0,S-1),!d&&await X(Z)})},re=()=>{b||(b=!0,u=!0,j(async()=>{if(!d){await I.等待空(),R();try{c.反代Socket?.close()}catch{}}}))};if(n.addEventListener("message",Z=>{W(Z.data)}),n.addEventListener("close",()=>{ee(n),re()}),n.addEventListener("error",Z=>{te(Z)}),!g&&p)try{let Z=Ss(p,t);Z?.byteLength&&W(Z.buffer)}catch(Z){te(Z)}return new Response(null,{status:101,webSocket:s,headers:{"Sec-WebSocket-Extensions":""}})}function ks(){return{header:new Uint8Array(5),headerLength:0,payload:null,payloadLength:0}}function Cs(e,t){if(!e||!(e.header instanceof Uint8Array)||e.header.byteLength!==5)throw new Error("Invalid gRPC parser state");let r=t instanceof Uint8Array?t:new Uint8Array(t||0),o=[],i=0;for(;i<r.byteLength;){if(e.headerLength<5){let n=Math.min(5-e.headerLength,r.byteLength-i);if(e.header.set(r.subarray(i,i+n),e.headerLength),e.headerLength+=n,i+=n,e.headerLength<5)break;if(e.header[0]!==0)throw new Error("gRPC compression is not supported");let a=new DataView(e.header.buffer,e.header.byteOffset,5).getUint32(1);if(a>sr)throw new Error("gRPC frame is too large");if(a+5>Wr)throw new Error("gRPC inbound buffer is too large");if(a===0){if(o.push(new Uint8Array(0)),e.headerLength=0,o.length>ir)throw new Error("Too many gRPC frames in one chunk");continue}e.payload=new Uint8Array(a),e.payloadLength=0}let s=Math.min(e.payload.byteLength-e.payloadLength,r.byteLength-i);if(e.payload.set(r.subarray(i,i+s),e.payloadLength),e.payloadLength+=s,i+=s,e.payloadLength===e.payload.byteLength&&(o.push(e.payload),e.payload=null,e.payloadLength=0,e.headerLength=0,o.length>ir))throw new Error("Too many gRPC frames in one chunk")}return o}function Ps(e){if(e.headerLength!==0||e.payload!==null)throw new Error("Truncated gRPC frame")}async function Io(e,t,r={}){if(!e.body)return new Response("Bad Request",{status:400});let o=e.body.getReader(),i={socket:null,connectingPromise:null,retryConnect:null},s=!1,n={缓存:new Uint8Array(0),反代地址:r.木马反代地址},a=null,l=null,f=null,c=null,p=new Headers({"Content-Type":"application/grpc","grpc-status":"0","X-Accel-Buffering":"no","Cache-Control":"no-store"}),g=Ve,h=Math.max(Pt,1);return new Response(new ReadableStream({async start(w){let u=!1,d=[],b=0,$=null,S=!1,m={readyState:WebSocket.OPEN,send(P){if(u)return;let _=P instanceof Uint8Array?P:new Uint8Array(P),z=[],A=_.byteLength>>>0;for(;A>127;)z.push(A&127|128),A>>>=7;z.push(A);let L=new Uint8Array(z),U=1+L.length+_.byteLength,R=new Uint8Array(5+U);R[0]=0,R[1]=U>>>24&255,R[2]=U>>>16&255,R[3]=U>>>8&255,R[4]=U&255,R[5]=10,R.set(L,6),R.set(_,6+L.length),d.push(R),b+=R.byteLength,x()},close(){if(this.readyState!==WebSocket.CLOSED){v(!0),u=!0,this.readyState=WebSocket.CLOSED;try{w.close()}catch{}}}},v=(P=!1)=>{if(S=!1,$&&(clearTimeout($),$=null),!P&&u||b===0)return;let _=new Uint8Array(b),z=0;for(let A of d)_.set(A,z),z+=A.byteLength;d=[],b=0;try{w.enqueue(_)}catch{u=!0,m.readyState=WebSocket.CLOSED}},x=()=>{if(b>=g){v();return}S||$||(S=!0,queueMicrotask(()=>{S=!1,!(u||b===0||$)&&($=setTimeout(v,h))}))},y=()=>{if(!u){if(c?.清空(),v(!0),u=!0,m.readyState=WebSocket.CLOSED,$&&clearTimeout($),f){try{f.releaseLock()}catch{}f=null}l=null;try{o.releaseLock()}catch{}try{i.socket?.close()}catch{}try{n.反代Socket?.close()}catch{}try{w.close()}catch{}}},C=()=>{if(f){try{f.releaseLock()}catch{}f=null}l=null},k=c=tt({获取写入器:()=>{let P=i.socket;return P?(P!==l&&(C(),l=P,f=P.writable.getWriter()),f):null},释放写入器:C,重试连接:async()=>{if(typeof i.retryConnect!="function")throw new Error("retry unavailable");await i.retryConnect()},关闭连接:y,名称:"gRPC上行"}),E=async(P,_=!0)=>k.写入并等待(P,_),T=!1;try{let P=ks();for(;;){let{done:_,value:z}=await o.read();if(_){Ps(P);break}if(!(!z||z.byteLength===0)){for(let A of Cs(P,z)){if(!A.byteLength)continue;let L=A;if(L.byteLength>=2&&L[0]===10){let U=0,R=1,I=!1;for(;R<L.length;){if((L[R++]&128)===0){I=!0;break}if(U+=7,U>35)break}I&&(L=L.subarray(R))}if(L.byteLength){if(s){a?await he(L,m,n,e):await $e(L,m,null,e);continue}if(i.socket){if(!await E(L))throw new Error("Remote socket is not ready")}else{let U=M(L);if(a===null&&(a=U.byteLength>=58&&U[56]===13&&U[57]===10),a){let R=Dt(U,t);if(R?.hasError)throw new Error(R.message||"Invalid trojan request");let{port:I,hostname:N,rawClientData:F,isUDP:H}=R;if(O(`[gRPC] 木马首包: ${N}:${I} | UDP: ${H?"是":"否"}`),ze(N)){m.send(pt());return}H?(s=!0,n.目标主机=N,n.目标端口=I,n.反代地址?await he(U,m,n,e):q(F)>0&&await he(F,m,n,e)):await Se(N,I,F,m,null,i,t,e,r,!0,U)}else{a=!1;let R=qt(U,t);if(R?.hasError)throw new Error(R.message||"Invalid 魏烈思 request");let{port:I,hostname:N,version:F,isUDP:H,rawClientData:X}=R;O(`[gRPC] 魏烈思首包: ${N}:${I} | UDP: ${H?"是":"否"}`);let te=new Uint8Array([F,0]);if(ze(N)){m.send(pt(te));return}if(H){if(I!==53)throw new Error("UDP is not supported");s=!0}m.send(te);let j=X;s?a?await he(j,m,n,e):await $e(j,m,null,e):await Se(N,I,j,m,null,i,t,e,r)}}}}v()}}await k.等待空()}catch(P){T=!0,O(`[gRPC转发] 处理失败: ${P?.message||P}`)}finally{if(!T&&s&&a&&n.反代地址&&n.反代Socket){k.清空(),C();try{o.releaseLock()}catch{}}else y()}},cancel(){c?.清空();try{i.socket?.close()}catch{}try{n.反代Socket?.close()}catch{}try{o.releaseLock()}catch{}}}),{status:200,headers:p})}async function Lo(e,t,r={}){if(!e.body)return new Response("Bad Request",{status:400});let o=e.body.getReader(),i=await zs(o,t);if(!i){try{o.releaseLock()}catch{}return new Response("Invalid request",{status:400})}if(ze(i.hostname)){try{o.releaseLock()}catch{}return new Response(pt(i.respHeader),{status:200,headers:{"Content-Type":"application/octet-stream","X-Accel-Buffering":"no","Cache-Control":"no-store"}})}if(i.isUDP&&i.协议!=="trojan"&&i.port!==53){try{o.releaseLock()}catch{}return new Response("UDP is not supported",{status:400})}let s={socket:null,connectingPromise:null,retryConnect:null},n=null,a=null,l=new Headers({"Content-Type":"application/octet-stream","X-Accel-Buffering":"no","Cache-Control":"no-store"}),f=()=>{if(a){try{a.releaseLock()}catch{}a=null}n=null},c=()=>{let h=s.socket;return h?(h!==n&&(f(),n=h,a=h.writable.getWriter()),a):null},p=null,g={缓存:new Uint8Array(0),反代地址:r.木马反代地址};return new Response(new ReadableStream({async start(h){let w=!1,u=i.respHeader,d={readyState:WebSocket.OPEN,send(m){if(!w)try{let v=m instanceof Uint8Array?m:m instanceof ArrayBuffer?new Uint8Array(m):ArrayBuffer.isView(m)?new Uint8Array(m.buffer,m.byteOffset,m.byteLength):new Uint8Array(m);h.enqueue(v)}catch{w=!0,this.readyState=WebSocket.CLOSED}},close(){if(!w){w=!0,this.readyState=WebSocket.CLOSED;try{h.close()}catch{}}}},b=p=tt({获取写入器:c,释放写入器:f,重试连接:async()=>{if(typeof s.retryConnect!="function")throw new Error("retry unavailable");await s.retryConnect()},关闭连接:()=>{try{s.socket?.close()}catch{}ee(d)},名称:"XHTTP上行"}),$=async(m,v=!0)=>b.写入并等待(m,v),S=!1;try{for(i.isUDP?(i.协议==="trojan"&&(g.目标主机=i.hostname,g.目标端口=i.port,g.反代地址&&await he(i.原始数据,d,g,e)),!(i.协议==="trojan"&&g.反代地址)&&i.rawData?.byteLength&&(i.协议==="trojan"?await he(i.rawData,d,g,e):await $e(i.rawData,d,u,e),u=null)):await Se(i.hostname,i.port,i.rawData,d,i.respHeader,s,t,e,r,i.协议==="trojan",i.原始数据);;){let{done:m,value:v}=await o.read();if(m)break;if(!(!v||v.byteLength===0)){if(i.isUDP)i.协议==="trojan"?await he(v,d,g,e):await $e(v,d,u,e),u=null;else if(!await $(v))throw new Error("Remote socket is not ready")}}if(!i.isUDP){await b.等待空();let m=c();if(m)try{await m.close()}catch{}}}catch(m){S=!0,O(`[XHTTP转发] 处理失败: ${m?.message||m}`),ee(d)}finally{let m=!S&&i.isUDP&&i.协议==="trojan"&&g.反代地址&&g.反代Socket;if(b.清空(),f(),!m)try{g.反代Socket?.close()}catch{}try{o.releaseLock()}catch{}}},cancel(){p?.清空();try{s.socket?.close()}catch{}try{g.反代Socket?.close()}catch{}f();try{o.releaseLock()}catch{}}}),{status:200,headers:l})}async function zs(e,t){let r=$t,o=c=>{let p=c.byteLength;if(p<18)return{状态:"need_more"};if(c[0]!==0)return{状态:"invalid"};if(!vt(c,1,t))return{状态:"invalid"};let h=18+c[17];if(p<h+1)return{状态:"need_more"};let w=c[h];if(w!==1&&w!==2)return{状态:"invalid"};let u=h+1;if(p<u+3)return{状态:"need_more"};let d=c[u]<<8|c[u+1],b=c[u+2],$=u+3,S=-1,m="";if(b===1){if(p<$+4)return{状态:"need_more"};m=`${c[$]}.${c[$+1]}.${c[$+2]}.${c[$+3]}`,S=$+4}else if(b===2){if(p<$+1)return{状态:"need_more"};let v=c[$];if(p<$+1+v)return{状态:"need_more"};m=r.decode(c.subarray($+1,$+1+v)),S=$+1+v}else if(b===3){if(p<$+16)return{状态:"need_more"};let v=[];for(let x=0;x<8;x++){let y=$+x*2;v.push((c[y]<<8|c[y+1]).toString(16))}m=v.join(":"),S=$+16}else return{状态:"invalid"};return m?{状态:"ok",结果:{协议:"vless",hostname:m,port:d,isUDP:w===2,rawData:c.subarray(S),respHeader:new Uint8Array([c[0],0]),原始数据:null}}:{状态:"invalid"}},i=c=>{let p=Ye(t),g=new TextEncoder().encode(p),h=c.byteLength;if(h<58)return{状态:"need_more"};if(c[56]!==13||c[57]!==10)return{状态:"invalid"};for(let x=0;x<56;x++)if(c[x]!==g[x])return{状态:"invalid"};let w=58;if(h<w+2)return{状态:"need_more"};let u=c[w];if(u!==1&&u!==3)return{状态:"invalid"};let d=u===3,b=c[w+1],$=w+2,S="";if(b===1){if(h<$+4)return{状态:"need_more"};S=`${c[$]}.${c[$+1]}.${c[$+2]}.${c[$+3]}`,$+=4}else if(b===3){if(h<$+1)return{状态:"need_more"};let x=c[$];if(h<$+1+x)return{状态:"need_more"};S=r.decode(c.subarray($+1,$+1+x)),$+=1+x}else if(b===4){if(h<$+16)return{状态:"need_more"};let x=[];for(let y=0;y<8;y++){let C=$+y*2;x.push((c[C]<<8|c[C+1]).toString(16))}S=x.join(":"),$+=16}else return{状态:"invalid"};if(!S)return{状态:"invalid"};if(h<$+4)return{状态:"need_more"};let m=c[$]<<8|c[$+1];if(c[$+2]!==13||c[$+3]!==10)return{状态:"invalid"};let v=$+4;return{状态:"ok",结果:{协议:"trojan",hostname:S,port:m,isUDP:d,rawData:c.subarray(v),原始数据:c,respHeader:null}}},s=new Uint8Array(1024),n=0;for(;;){let{value:c,done:p}=await e.read();if(p){if(n===0)return null;break}let g=c instanceof Uint8Array?c:new Uint8Array(c);if(n+g.byteLength>s.byteLength){let d=new Uint8Array(Math.max(s.byteLength*2,n+g.byteLength));d.set(s.subarray(0,n)),s=d}s.set(g,n),n+=g.byteLength;let h=s.subarray(0,n),w=i(h);if(w.状态==="ok")return{...w.结果,reader:e};let u=o(h);if(u.状态==="ok")return{...u.结果,reader:e};if(w.状态==="invalid"&&u.状态==="invalid")return null}let a=s.subarray(0,n),l=i(a);if(l.状态==="ok")return{...l.结果,reader:e};let f=o(a);return f.状态==="ok"?{...f.结果,reader:e}:null}async function Uo(e,t){let r=["socks5","http","https","turn"].find(n=>t.searchParams.has(n))||null;if(!r)return new Response(JSON.stringify({error:"缺少代理参数"}),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}});let o=t.searchParams.get(r),i=Date.now(),s;try{let n=await gt(o,mt(r)),{username:a,password:l,hostname:f,port:c}=n,p=a&&l?`${a}:${l}@${f}:${c}`:`${f}:${c}`;try{let g="cloudflare.com",w=new TextEncoder,u=new TextDecoder,d=Fe(e),b=null,$=null;try{if(b=r==="socks5"?await Ut(g,80,new Uint8Array(0),d,n):r==="turn"?await Nt(n,g,80,d):await dt(g,80,new Uint8Array(0),r==="https",d,n),!b)throw new Error("无法连接到代理服务器");let S=b.writable.getWriter();try{await S.write(w.encode(`GET /cdn-cgi/trace HTTP/1.1\r
Host: ${g}\r
User-Agent: Mozilla/5.0\r
Connection: close\r
\r
`))}finally{try{S.releaseLock()}catch{}}$=b.readable.getReader();let m=new Uint8Array(0),v=-1,x=null,y=!1,C=64*1024;for(;m.length<C;){let{done:P,value:_}=await $.read();if(P||!_)break;if(_.byteLength!==0){if(m=ie(m,_),v===-1){let z=m.findIndex((A,L)=>L<m.length-3&&m[L]===13&&m[L+1]===10&&m[L+2]===13&&m[L+3]===10);if(z!==-1){v=z+4;let A=u.decode(m.slice(0,v)),L=A.split(`\r
`)[0]||"",U=L.match(/HTTP\/\d\.\d\s+(\d+)/),R=U?parseInt(U[1],10):NaN;if(!Number.isFinite(R)||R<200||R>=300)throw new Error(`代理检测请求失败: ${L||"无效响应"}`);let I=A.match(/\r\nContent-Length:\s*(\d+)/i);I&&(x=parseInt(I[1],10)),y=/\r\nTransfer-Encoding:\s*chunked/i.test(A)}}if(v!==-1&&x!==null&&m.length>=v+x||v!==-1&&y&&u.decode(m).includes(`\r
0\r
\r
`))break}}if(v===-1)throw new Error("代理检测响应头过长或无效");let k=u.decode(m),E=k.match(/(?:^|\n)ip=(.*)/)?.[1],T=k.match(/(?:^|\n)loc=(.*)/)?.[1];if(!E||!T)throw new Error("代理检测响应无效");s={success:!0,proxy:r+"://"+p,ip:E,loc:T,responseTime:Date.now()-i}}finally{try{$?.releaseLock()}catch{}try{await b?.close?.()}catch{}}}catch(g){s={success:!1,error:g.message,proxy:r+"://"+p,responseTime:Date.now()-i}}}catch(n){s={success:!1,error:n.message,proxy:r+"://"+o,responseTime:Date.now()-i}}return new Response(JSON.stringify(s,null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}var zf={async fetch(e,t,r){let o=e.url.replace(/%5[Cc]/g,"").replace(/\\/g,""),i=o.indexOf("#"),s=i===-1?o:o.slice(0,i);if(!s.includes("?")&&/%3f/i.test(s)){let k=i===-1?"":o.slice(i);o=s.replace(/%3f/i,"?")+k}let n=new URL(o),a=e.headers.get("User-Agent")||"null",l=(e.headers.get("Upgrade")||"").toLowerCase(),f=(e.headers.get("content-type")||"").toLowerCase(),c=t.ADMIN||t.admin||t.PASSWORD||t.password||t.pswd||t.TOKEN,p=typeof c=="string"?c.replace(/[\r\n]/g,"").trim():c??"";if(!p)return new Response(JSON.stringify({error:"ADMIN_REQUIRED",message:"请设置环境变量 ADMIN（或 PASSWORD / TOKEN 等密码类变量）作为管理面板登录口令。不可再用 KEY/UUID 顶替。"}),{status:503,headers:{"Content-Type":"application/json;charset=utf-8","Cache-Control":"no-store"}});let g="勿动此默认密钥，有需求请自行通过添加变量KEY进行修改",h=typeof t.KEY=="string"?t.KEY.trim():"";if(!h||h===g||h.length<16)return new Response(JSON.stringify({error:"KEY_REQUIRED",message:"请设置环境变量 KEY：随机字符串，长度至少 16，且勿使用源码中的默认提示文案。未设置 KEY 时服务拒绝启动。"}),{status:503,headers:{"Content-Type":"application/json;charset=utf-8","Cache-Control":"no-store"}});let w=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,u=t.UUID||t.uuid,{userID:d,userIDMD5:b}=await cn(`${p??""}\0${h}\0${u??""}`,async()=>{let k=await ye(p+h);return{userID:u&&w.test(u)?u.toLowerCase():[k.slice(0,8),k.slice(8,12),"4"+k.slice(13,16),"8"+k.slice(17,20),k.slice(20)].join("-"),userIDMD5:k}}),S=(t.HOST?await un(t.HOST,async()=>(await _e(t.HOST)).map(k=>k.toLowerCase().replace(/^https?:\/\//,"").split("/")[0].split(":")[0])):[n.hostname])[0],m=n.pathname.slice(1).toLowerCase();on(["1","true"].includes(t.DEBUG)||zt()),an(["1","true"].includes(t.PRELOAD_RACE_DIAL)||At()),sn(Math.max(1,Number(t.PROXY_CONCURRENT_DIAL)||Tt())),hr(Math.max(1,Number(t.TCP_CONCURRENT_DIAL)||Je())),!t.TCP_CONCURRENT_DIAL&&Je()!==1&&ut(e)==="cmcc"&&hr(1);let v=`${e.cf.colo}.${se[0]}.${se[1]}SsSs.nEt`.toLowerCase(),x=!0;if(t.PROXYIP){let k=await _e(t.PROXYIP);v=k[Math.floor(Math.random()*k.length)],x=!1}let y=e.headers.get("CF-Connecting-IP")||e.headers.get("True-Client-IP")||e.headers.get("X-Real-IP")||e.headers.get("X-Forwarded-For")||e.headers.get("Fly-Client-IP")||e.headers.get("X-Appengine-Remote-Addr")||e.headers.get("X-Cluster-Client-IP")||"未知IP";if(fr()===null?(t.GO2SOCKS5&&dr([...new Set(je().concat(await _e(t.GO2SOCKS5)))]),nn(je())):dr(fr()),m==="version"){let k=(n.searchParams.get("uuid")||"").toLowerCase();if(w.test(k)){let E=String(d).toLowerCase(),T=0,P=0;for(let _=0;_<8;_++){let z=k.charCodeAt(_);T+=z<=57?z-48:z-87;let A=E.charCodeAt(_);P+=A<=57?A-48:A-87}if(T===P&&k.slice(-12)===E.slice(-12))return new Response(JSON.stringify({Version:Number(String(Hr).replace(/\D+/g,""))}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}}else if(p&&l==="websocket"){let k=await vr(n,d,v,x);return O(`[WebSocket] 命中请求: ${n.pathname}${n.search}`),await Eo(e,d,n,k)}else if(p&&!m.startsWith("admin/")&&m!=="login"&&e.method==="POST"){let k=await vr(n,d,v,x),E=e.headers.get("Referer")||"";return!(E.includes("x_padding",14)||E.includes("x_padding="))&&f.startsWith("application/grpc")?(O(`[gRPC] 命中请求: ${n.pathname}${n.search}`),await Io(e,d,k)):(O(`[XHTTP] 命中请求: ${n.pathname}${n.search}`),await Lo(e,d,k))}else{if(n.protocol==="http:")return Response.redirect(n.href.replace(`http://${n.hostname}`,`https://${n.hostname}`),301);if(!p)return fetch(at+"/noADMIN").then(k=>{let E=new Headers(k.headers);return E.set("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate"),E.set("Pragma","no-cache"),E.set("Expires","0"),new Response(k.body,{status:404,statusText:k.statusText,headers:E})}).catch(()=>new Response("Configuration required. Please set the ADMIN environment variable.",{status:503}));if(t.KV&&typeof t.KV.get=="function"){let k=n.pathname.slice(1);if(k===h){let E=new URLSearchParams(n.search);return E.set("token",await ye(S+d)),new Response("重定向中...",{status:302,headers:{Location:`/sub?${E.toString()}`}})}else if(m==="login"){if((e.headers.get("Cookie")||"").split(";").find(P=>P.trim().startsWith("auth="))?.split("=")[1]===await ye(a+h+p))return new Response("重定向中...",{status:302,headers:{Location:"/admin"}});if(e.method==="POST"){let P=await e.text();if(new URLSearchParams(P).get("password")===p){let A=new Response(JSON.stringify({success:!0}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}});return A.headers.set("Set-Cookie",`auth=${await ye(a+h+p)}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`),A}}return fetch(at+"/login").catch(()=>new Response("Login page unavailable",{status:503}))}else if(m==="admin"||m.startsWith("admin/")){let T=(e.headers.get("Cookie")||"").split(";").find(_=>_.trim().startsWith("auth="))?.split("=")[1];if(!T||T!==await ye(a+h+p))return new Response("重定向中...",{status:302,headers:{Location:"/login"}});if(m==="admin/log.json"){let _=await t.KV.get("log.json")||"[]";return new Response(_,{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(k==="admin/getCloudflareUsage")try{let _=await Ft(n.searchParams.get("Email"),n.searchParams.get("GlobalAPIKey"),n.searchParams.get("AccountID"),n.searchParams.get("APIToken"));return new Response(JSON.stringify(_,null,2),{status:200,headers:{"Content-Type":"application/json"}})}catch(_){let z={msg:"查询请求量失败，失败原因："+_.message,error:_.message};return new Response(JSON.stringify(z,null,2),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(k==="admin/getADDAPI"){if(n.searchParams.get("url")){let _=n.searchParams.get("url");try{new URL(_);let z=await xr([_],n.searchParams.get("port")||"443"),A=z[0].length>0?z[0]:z[1];return A=A.map(L=>L.replace(/#(.+)$/,(U,R)=>"#"+ve(R))),new Response(JSON.stringify({success:!0,data:A},null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(z){let A={msg:"验证优选API失败，失败原因："+z.message,error:z.message};return new Response(JSON.stringify(A,null,2),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}}return new Response(JSON.stringify({success:!1,data:[]},null,2),{status:403,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(m==="admin/check")return await Uo(e,n);let P=await Yt(t,S,d,a);if(m==="admin/init")try{P=await Yt(t,S,d,a,!0),r.waitUntil(Le(t,e,y,"Init_Config",P));let _={...P,init:"配置已重置为默认值"};return new Response(JSON.stringify(_,null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(_){let z={msg:"配置重置失败，失败原因："+_.message,error:_.message};return new Response(JSON.stringify(z,null,2),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(e.method==="POST")if(m==="admin/config.json")try{let _=await e.json(),z=_o(_,P,se[0]);return z.success?(await t.KV.put("config.json",JSON.stringify(z.data,null,2)),r.waitUntil(Le(t,e,y,"Save_Config",P)),new Response(JSON.stringify({success:!0,message:"配置已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})):new Response(JSON.stringify({error:"配置格式无效",details:Xt(z.error)},null,2),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(_){return console.error("保存配置失败:",_),new Response(JSON.stringify({error:"保存配置失败: "+_.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(m==="admin/cf.json")try{let _=await e.json(),z={Email:null,GlobalAPIKey:null,AccountID:null,APIToken:null,UsageAPI:null};if(!_.init||_.init!==!0)if(_.Email&&_.GlobalAPIKey)z.Email=_.Email,z.GlobalAPIKey=_.GlobalAPIKey;else if(_.AccountID&&_.APIToken)z.AccountID=_.AccountID,z.APIToken=_.APIToken;else if(_.UsageAPI)z.UsageAPI=_.UsageAPI;else return new Response(JSON.stringify({error:"配置不完整"}),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}});return await t.KV.put("cf.json",JSON.stringify(z,null,2)),r.waitUntil(Le(t,e,y,"Save_Config",P)),new Response(JSON.stringify({success:!0,message:"配置已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(_){return console.error("保存配置失败:",_),new Response(JSON.stringify({error:"保存配置失败: "+_.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(m==="admin/tg.json")try{let _=await e.json();if(_.init&&_.init===!0){let z={BotToken:null,ChatID:null};await t.KV.put("tg.json",JSON.stringify(z,null,2))}else{if(!_.BotToken||!_.ChatID)return new Response(JSON.stringify({error:"配置不完整"}),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}});await t.KV.put("tg.json",JSON.stringify(_,null,2))}return r.waitUntil(Le(t,e,y,"Save_Config",P)),new Response(JSON.stringify({success:!0,message:"配置已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(_){return console.error("保存配置失败:",_),new Response(JSON.stringify({error:"保存配置失败: "+_.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(k==="admin/ADD.txt")try{let _=await e.text();return await t.KV.put("ADD.txt",_),r.waitUntil(Le(t,e,y,"Save_Custom_IPs",P)),new Response(JSON.stringify({success:!0,message:"自定义IP已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(_){return console.error("保存自定义IP失败:",_),new Response(JSON.stringify({error:"保存自定义IP失败: "+_.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else return new Response(JSON.stringify({error:"不支持的POST请求路径"}),{status:404,headers:{"Content-Type":"application/json;charset=utf-8"}});else{if(m==="admin/config.json")return new Response(JSON.stringify(P,null,2),{status:200,headers:{"Content-Type":"application/json"}});if(k==="admin/ADD.txt"){let _=await t.KV.get("ADD.txt")||"null";return _==="null"&&(_=(await Lt(e,P.优选订阅生成.本地IP库.随机数量,P.优选订阅生成.本地IP库.指定端口))[1]),new Response(_,{status:200,headers:{"Content-Type":"text/plain;charset=utf-8",asn:e.cf.asn}})}else if(m==="admin/cf.json")return new Response(JSON.stringify(e.cf,null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}return r.waitUntil(Le(t,e,y,"Admin_Login",P)),fetch(at+"/admin"+n.search)}else if(m==="logout"||w.test(m)){let E=new Response("重定向中...",{status:302,headers:{Location:"/login"}});return E.headers.set("Set-Cookie","auth=; Path=/; Max-Age=0; HttpOnly"),E}else if(m==="sub"){let E=await ye(S+d),T=["1","true"].includes(t.BEST_SUB)&&n.searchParams.get("host")==="example.com"&&n.searchParams.get("uuid")==="00000000-0000-4000-8000-000000000000"&&a.toLowerCase().includes("tunnel (https://github.com/"+se[1]+"/edge)"),P=n.searchParams.get("token"),_=P===E,z=Math.floor(Date.now()/864e5),A=gr(E,d),[L,U]=await Promise.all([ye(A+z),ye(A+(z-1))]);if(_||(P===L||P===U)||T){let I=await Yt(t,S,d,a);T?r.waitUntil(Le(t,e,y,"Get_Best_SUB",I,!1)):r.waitUntil(Le(t,e,y,"Get_SUB",I));let N=a.toLowerCase(),F={"content-type":"text/plain; charset=utf-8","Profile-Update-Interval":I.优选订阅生成.SUBUpdateTime,"Profile-web-page-url":n.protocol+"//"+n.host+"/admin","Cache-Control":"no-store"};if(I.CF.Usage.success){let W=I.CF.Usage.pages,re=I.CF.Usage.workers,Z=Number.isFinite(I.CF.Usage.max)?I.CF.Usage.max/1e3*1024:1024*100;F["Subscription-Userinfo"]=`upload=${W}; download=${re}; total=${Z}; expire=4102329600`}let H=n.searchParams.has("b64")||n.searchParams.has("base64")||e.headers.get("subconverter-request")||e.headers.get("subconverter-version")||N.includes("subconverter")||N.includes("CF-Workers-SUB".toLowerCase())||T,X=H?"mixed":n.searchParams.has("target")?n.searchParams.get("target"):n.searchParams.has("clash")||N.includes("clash")||N.includes("meta")||N.includes("mihomo")?"clash":n.searchParams.has("sb")||n.searchParams.has("singbox")||N.includes("singbox")||N.includes("sing-box")?"singbox":n.searchParams.has("surge")||N.includes("surge")?"surge&ver=4":n.searchParams.has("quanx")||N.includes("quantumult")?"quanx":n.searchParams.has("loon")||N.includes("loon")?"loon":"mixed";N.includes("mozilla")||(F["Content-Disposition"]=`attachment; filename*=utf-8''${encodeURIComponent(I.优选订阅生成.SUBNAME)}`);let te=(n.searchParams.has("surge")||N.includes("surge"))&&I.协议类型!=="ss"?"trojan":I.协议类型,j="";if(X==="mixed"){let W=I.TLS分片=="Shadowrocket"?`&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}`:I.TLS分片=="Happ"?`&fragment=${encodeURIComponent("3,1,tlshello")}`:"",re=[],Z="",D=[];if(!n.searchParams.has("sub")&&I.优选订阅生成.local){let fe=I.优选订阅生成.本地IP库.随机IP?(await Lt(e,I.优选订阅生成.本地IP库.随机数量,I.优选订阅生成.本地IP库.指定端口))[0]:await t.KV.get("ADD.txt")?await _e(await t.KV.get("ADD.txt")):(await Lt(e,I.优选订阅生成.本地IP库.随机数量,I.优选订阅生成.本地IP库.指定端口))[0],ge=[],Q=[],V=[];for(let J of fe)if(J.toLowerCase().startsWith("sub://"))ge.push(J);else{let oe=J.indexOf("#"),be=oe>-1?J.slice(0,oe):J,Ue=oe>-1?J.slice(oe):"",Pe=J.match(/sub\s*=\s*([^\s&#]+)/i);if(Pe&&Pe[1].trim().includes("."))J.toLowerCase().includes("proxyip=true")?ge.push("sub://"+Pe[1].trim()+"?proxyip=true"+(J.includes("#")?"#"+J.split("#")[1]:"")):ge.push("sub://"+Pe[1].trim()+(J.includes("#")?"#"+J.split("#")[1]:""));else if(be.toLowerCase().startsWith("https://"))ge.push(J);else if(be.toLowerCase().includes("://"))if(J.includes("#")){let Ge=J.split("#");V.push(Ge[0]+"#"+encodeURIComponent(ve(Ge[1])))}else V.push(J);else be.includes("*")?Q.push(yr(be)+Ue):Q.push(J)}let ne=await xr(ge,"443"),xe=[...new Set(V.concat(ne[1]))];Z=xe.length>0?xe.join(`
`)+`
`:"";let ce=ne[0];D=ne[3]||[],re=[...new Set(Q.concat(ce))]}else{let fe=n.searchParams.get("sub")||I.优选订阅生成.SUB,[ge,Q]=await wr(fe);re=re.concat(ge),Z+=Q}let B=I.ECH?`&ech=${encodeURIComponent((I.ECHConfig.SNI?I.ECHConfig.SNI+"+":"")+I.ECHConfig.DNS)}`:"",G=N.includes("loon")||N.includes("surge"),{type:Y,路径字段名:ue,域名字段名:pe}=Mt(I);j=Z+re.map(fe=>{let ge=/^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/,Q=fe.match(ge),V,ne="443",xe;if(Q){V=Q[1];try{ne=String(Re(Q[2]||"443"))}catch{return console.warn(`[订阅内容] 非法端口已忽略: ${fe}`),null}xe=Q[3]||V}else return console.warn(`[订阅内容] 不规范的IP格式已忽略: ${fe}`),null;let ce=I.完整节点路径,J=xe.match(/\$(socks5|http|https|turn):\/\/([^#\s]+)/i);if(J)try{let oe=J[1].toLowerCase(),be=J[2],Ue={type:oe,...gt(be,mt(oe))};ce=`/video/${gr(JSON.stringify(Ue),d)+(I.启用0RTT?"?ed=2560":"")}`,xe=xe.replace(J[0],"").trim()||V}catch(oe){console.warn(`[订阅内容] 链式代理解析失败，已忽略该指令: ${J[0]} (${oe&&oe.message?oe.message:oe})`)}else if(D.length>0){let oe=D.find(be=>be.includes(V));oe&&(ce=`${I.PATH}/proxyip=${oe}`.replace(/\/\//g,"/")+(I.启用0RTT?"?ed=2560":""))}if(G&&(ce=ce.replace(/,/g,"%2C")),te==="ss"&&!T)return I.SS.TLS||(ne=String([80,2052,2082,2086,2095,8080][[443,2053,2083,2087,2096,8443].indexOf(Number(ne))]??ne)),ce=(ce.includes("?")?ce.replace("?","?enc="+I.SS.加密方式+"&"):ce+"?enc="+I.SS.加密方式).replace(/([=,])/g,"\\$1"),H||(ce=ce+";mux=0"),`${te}://${btoa(I.SS.加密方式+":00000000-0000-4000-8000-000000000000")}@${V}:${ne}?plugin=v2${encodeURIComponent("ray-plugin;mode=websocket;host=example.com;path="+(I.随机路径?Qe(ce):ce)+(I.SS.TLS?";tls":""))+B+W}#${encodeURIComponent(xe)}`;{let oe=jt(I,ce,T);return`${te}://00000000-0000-4000-8000-000000000000@${V}:${ne}?security=tls&type=${Y+B}&${pe}=example.com&fp=${I.Fingerprint}&sni=example.com&${ue}=${encodeURIComponent(oe)+W}&encryption=none#${encodeURIComponent(xe)}`}}).filter(fe=>fe!==null).join(`
`)}else{let W=`${I.订阅转换配置.SUBAPI}/sub?target=${X}&url=${encodeURIComponent(n.protocol+"//"+n.host+"/sub?target=mixed&token="+L+"&cnIspCode="+ut(e)+(n.searchParams.has("sub")&&n.searchParams.get("sub")!=""?`&sub=${n.searchParams.get("sub")}`:""))}&config=${encodeURIComponent(I.订阅转换配置.SUBCONFIG)}&emoji=${I.订阅转换配置.SUBEMOJI}&list=${I.订阅转换配置.SUBLIST}&scv=${I.跳过证书验证}&xudp=${I.订阅转换配置.XUDP}&udp=${I.订阅转换配置.UDP}&tls13=${I.订阅转换配置.TLS13}&append_type=${I.订阅转换配置.APPEND_TYPE}&sort=${I.订阅转换配置.SORT}`;try{let re=await fetch(W,{headers:{"User-Agent":"Subconverter for "+X+" edgetunnel (https://github.com/"+se[1]+"/edgetunnel)"}});if(re.ok)j=await re.text(),(n.searchParams.has("surge")||N.includes("surge"))&&(j=So(j,n.protocol+"//"+n.host+"/sub?token="+E+"&surge",I));else return new Response("订阅转换后端异常："+re.statusText,{status:re.status})}catch(re){return new Response("订阅转换后端异常："+re.message,{status:403})}}if(!N.includes("subconverter")&&_){let W=[...I.HOSTS].sort(()=>Math.random()-.5),re=0,Z=null;j=j.replace(/00000000-0000-4000-8000-000000000000/g,I.UUID).replace(/MDAwMDAwMDAtMDAwMC00MDAwLTgwMDAtMDAwMDAwMDAwMDAw/g,btoa(I.UUID)).replace(/example\.com/g,()=>{if(re%2===0){let D=W[Math.floor(re/2)%W.length];Z=yr(D)}return re++,Z})}return X==="mixed"&&(!N.includes("mozilla")||n.searchParams.has("b64")||n.searchParams.has("base64"))&&(j=btoa(j)),X==="singbox"?(j=await vo(j,I),F["content-type"]="application/json; charset=utf-8"):X==="clash"&&(j=$o(j,I),F["content-type"]="application/x-yaml; charset=utf-8"),new Response(j,{status:200,headers:F})}}else if(m==="locations"){let T=(e.headers.get("Cookie")||"").split(";").find(P=>P.trim().startsWith("auth="))?.split("=")[1];if(T&&T===await ye(a+h+p))return fetch(new Request("https://speed.cloudflare.com/locations",{headers:{Referer:"https://speed.cloudflare.com/"}}))}else if(m==="robots.txt")return new Response(`User-agent: *
Disallow: /`,{status:200,headers:{"Content-Type":"text/plain; charset=UTF-8"}})}else if(!u)return fetch(at+"/noKV").then(k=>{let E=new Headers(k.headers);return E.set("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate"),E.set("Pragma","no-cache"),E.set("Expires","0"),new Response(k.body,{status:404,statusText:k.statusText,headers:E})}).catch(()=>new Response("KV namespace required. Please bind a KV namespace.",{status:503}))}let C=t.URL||"nginx";if(C&&C!=="nginx"&&C!=="1101"){C=C.trim().replace(/\/$/,""),C.match(/^https?:\/\//i)||(C="https://"+C),C.toLowerCase().startsWith("http://")&&(C="https://"+C.substring(7));try{let k=new URL(C);C=k.protocol+"//"+k.host}catch{C="nginx"}}if(C==="1101")return new Response(await Co(n.host,y),{status:200,headers:{"Content-Type":"text/html; charset=UTF-8"}});try{let k=new URL(C),E=new Headers(e.headers);E.set("Host",k.host),E.set("Referer",k.origin),E.set("Origin",k.origin),!E.has("User-Agent")&&a&&a!=="null"&&E.set("User-Agent",a);let T=await fetch(k.origin+n.pathname+n.search,{method:e.method,headers:E,body:e.body,cf:e.cf}),P=T.headers.get("content-type")||"";if(/text|javascript|json|xml/.test(P)){let _=(await T.text()).replaceAll(k.host,n.host);return new Response(_,{status:T.status,headers:{...Object.fromEntries(T.headers),"Cache-Control":"no-store"}})}return T}catch(k){O(`[伪装页] 反代失败: ${k?.message||k}`)}return new Response(await ko(),{status:200,headers:{"Content-Type":"text/html; charset=UTF-8"}})}};export{zf as default};
