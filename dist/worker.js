var zn="2026-07-27 19:20:00",bt="https://nohello-ai.github.io/edt-pages-pro";var Jn=Math.ceil(10922.666666666666)+4,Nt=16*1024,Ot=16*1024*1024,Dt=4096,lt=32*1024,Qn=512,Ht=0,Se=[(Proxy.name+"IP").toUpperCase(),("Cm"+URL.name[2]+"i"+URL.name[0]).toLowerCase(),String(2407*300-10).split("").reverse().join("")];var er=null,tr=!1,nr=["*tapecontent.net","*cloudatacdn.com","*loadshare.org","*cdn-centaurus.com","scholar.google.com"],rr=2,sr=1,or=!1,qn=null,bn=null,Zn=null,Sn=null;function ar(e){er=e}function xn(){return er}function ir(e){tr=e}function Kt(){return tr}function Tn(e){nr=e}function Je(){return nr}function Cn(e){rr=e}function ft(){return rr}function cr(e){sr=e}function Mt(){return sr}function lr(e){or=e}function Bt(){return or}async function fr(e,t){if(qn===e&&bn)return bn;let n=await t();return qn=e,bn=n,n}async function ur(e,t){let n=e==null?"":String(e);if(Zn===n&&Sn)return Sn;let s=await t();return Zn=n,Sn=s,s}var hr=new TextEncoder,ut=new Map,qr=256;function pr(e){let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return t}async function Pe(e){let t=String(e??""),n=ut.get(t);if(n)return n;let s=(async()=>{let o=new Uint8Array(await crypto.subtle.digest("MD5",hr.encode(t))),r=pr(o),a=new Uint8Array(await crypto.subtle.digest("MD5",hr.encode(r.slice(7,27))));return pr(a)})();ut.set(t,s);try{let o=await s;if(ut.size>qr){let r=ut.keys().next().value;ut.delete(r)}return o}catch(o){throw ut.delete(t),o}}function ht(e){let t=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=(p,i)=>(p>>>i|p<<32-i)>>>0;e=unescape(encodeURIComponent(e));let s=e.length*8;for(e+="";e.length*8%512!==448;)e+="\0";let o=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],r=Math.floor(s/4294967296),a=s&4294967295;e+=String.fromCharCode(r>>>24&255,r>>>16&255,r>>>8&255,r&255,a>>>24&255,a>>>16&255,a>>>8&255,a&255);let c=[];for(let p=0;p<e.length;p+=4)c.push(e.charCodeAt(p)<<24|e.charCodeAt(p+1)<<16|e.charCodeAt(p+2)<<8|e.charCodeAt(p+3));for(let p=0;p<c.length;p+=16){let i=new Array(64).fill(0);for(let E=0;E<16;E++)i[E]=c[p+E];for(let E=16;E<64;E++){let b=n(i[E-15],7)^n(i[E-15],18)^i[E-15]>>>3,U=n(i[E-2],17)^n(i[E-2],19)^i[E-2]>>>10;i[E]=i[E-16]+b+i[E-7]+U>>>0}let[d,T,y,w,l,h,x,P]=o;for(let E=0;E<64;E++){let b=n(l,6)^n(l,11)^n(l,25),U=l&h^~l&x,A=P+b+U+t[E]+i[E]>>>0,u=n(d,2)^n(d,13)^n(d,22),g=d&T^d&y^T&y,S=u+g>>>0;P=x,x=h,h=l,l=w+A>>>0,w=y,y=T,T=d,d=A+S>>>0}for(let E=0;E<8;E++)o[E]=o[E]+(E===0?d:E===1?T:E===2?y:E===3?w:E===4?l:E===5?h:E===6?x:P)>>>0}let f="";for(let p=0;p<7;p++)for(let i=24;i>=0;i-=8)f+=(o[p]>>>i&255).toString(16).padStart(2,"0");return f}function En(e,t){let n=new TextEncoder,s=n.encode(e),o=n.encode(t),r=new Uint8Array(s.length);for(let c=0;c<s.length;c++)r[c]=s[c]^o[c%o.length];let a="";for(let c=0;c<r.length;c++)a+=String.fromCharCode(r[c]);return btoa(a)}function dr(e,t){let n=atob(e),s=new Uint8Array(n.length);for(let f=0;f<n.length;f++)s[f]=n.charCodeAt(f);let r=new TextEncoder().encode(t),a=new Uint8Array(s.length);for(let f=0;f<s.length;f++)a[f]=s[f]^r[f%r.length];return new TextDecoder().decode(a)}function M(...e){Kt()&&console.log(...e)}function St(e,t=3,n=2){if(!e||typeof e!="string"||e.length<=t+n)return e;let s=e.slice(0,t),o=e.slice(-n),r=e.length-t-n;return`${s}${"*".repeat(r)}${o}`}function pt(e="/"){let t=["about","account","acg","act","activity","ad","ads","ajax","album","albums","anime","api","app","apps","archive","archives","article","articles","ask","auth","avatar","bbs","bd","blog","blogs","book","books","bt","buy","cart","category","categories","cb","channel","channels","chat","china","city","class","classify","clip","clips","club","cn","code","collect","collection","comic","comics","community","company","config","contact","content","course","courses","cp","data","detail","details","dh","directory","discount","discuss","dl","dload","doc","docs","document","documents","doujin","download","downloads","drama","edu","en","ep","episode","episodes","event","events","f","faq","favorite","favourites","favs","feedback","file","files","film","films","forum","forums","friend","friends","game","games","gif","go","go.html","go.php","group","groups","help","home","hot","htm","html","image","images","img","index","info","intro","item","items","ja","jp","jump","jump.html","jump.php","jumping","knowledge","lang","lesson","lessons","lib","library","link","links","list","live","lives","m","mag","magnet","mall","manhua","map","member","members","message","messages","mobile","movie","movies","music","my","new","news","note","novel","novels","online","order","out","out.html","out.php","outbound","p","page","pages","pay","payment","pdf","photo","photos","pic","pics","picture","pictures","play","player","playlist","post","posts","product","products","program","programs","project","qa","question","rank","ranking","read","readme","redirect","redirect.html","redirect.php","reg","register","res","resource","retrieve","sale","search","season","seasons","section","seller","series","service","services","setting","settings","share","shop","show","shows","site","soft","sort","source","special","star","stars","static","stock","store","stream","streaming","streams","student","study","tag","tags","task","teacher","team","tech","temp","test","thread","tool","tools","topic","topics","torrent","trade","travel","tv","txt","type","u","upload","uploads","url","urls","user","users","v","version","videos","view","vip","vod","watch","web","wenku","wiki","work","www","zh","zh-cn","zh-tw","zip"],n=Math.floor(Math.random()*3+1),s=t.sort(()=>.5-Math.random()).slice(0,n).join("/");return e==="/"?`/${s}`:`/${s+e.replace("/?","?")}`}function An(e){if(typeof e!="string"||!e.includes("*"))return e;let t="abcdefghijklmnopqrstuvwxyz0123456789";return e.replace(/\*/g,()=>{let n="";for(let s=0;s<Math.floor(Math.random()*14)+3;s++)n+=t[Math.floor(Math.random()*t.length)];return n})}async function $e(e){var t=e.replace(/[	"'\r\n]+/g,",").replace(/,+/g,",");return t.charAt(0)==","&&(t=t.slice(1)),t.charAt(t.length-1)==","&&(t=t.slice(0,t.length-1)),t.split(",")}function Me(e){let t=["speed.cloudflare.com","cp.cloudflare.com"];return e=e.toLowerCase(),t.some(n=>e===n||e.endsWith("."+n))}function xt(e){let t=e?.cf,n={4134:"ct",4809:"ct",4811:"ct",4812:"ct",4815:"ct",4837:"cu",4814:"cu",9929:"cu",17623:"cu",17816:"cu",9808:"cmcc",24400:"cmcc",56040:"cmcc",56041:"cmcc",56044:"cmcc"},s=[{code:"ct",pattern:/chinanet|chinatelecom|china telecom|cn2|shtel/},{code:"cmcc",pattern:/cmi|cmnet|chinamobile|china mobile|cmcc|mobile communications/},{code:"cu",pattern:/china169|china unicom|chinaunicom|cucc|cncgroup|cuii|netcom/}];if(String(t?.country||"").toLowerCase()!=="cn")return"cf";let o=String(t?.asOrganization||"").toLowerCase();return s.find(({pattern:a})=>a.test(o))?.code||n[String(t?.asn||"")]||"cf"}async function jt(e,t=16,n=-1){let s=new URL(e.url),o=String(s.searchParams.get("cnIspCode")||"").toLowerCase(),r=["ct","cu","cmcc","cf"].includes(o)?o:xt(e),a={cmcc:"CF移动优选",cu:"CF联通优选",ct:"CF电信优选",cf:"CF官方优选"},c=r==="cf"?`https://raw.githubusercontent.com/${Se[1]}/${Se[1]}/main/CF-CIDR.txt`:`https://raw.githubusercontent.com/${Se[1]}/${Se[1]}/main/CF-CIDR/${r}.txt`,f=a[r]||"CF官方优选",p=[443,2053,2083,2087,2096,8443],i=[];try{let y=await fetch(c);i=y.ok?await $e(await y.text()):["104.16.0.0/13"]}catch{i=["104.16.0.0/13"]}let d=y=>{let[w,l]=y.split("/"),h=parseInt(l),x=32-h,P=w.split(".").reduce((A,u,g)=>A|parseInt(u)<<24-g*8,0),E=Math.floor(Math.random()*Math.pow(2,x)),b=4294967295<<x>>>0,U=((P&b)>>>0)+E>>>0;return[U>>>24&255,U>>>16&255,U>>>8&255,U&255].join(".")},T=Array.from({length:t},(y,w)=>{let l=d(i[Math.floor(Math.random()*i.length)]),h=n===-1?p[Math.floor(Math.random()*p.length)]:n;return`${l}:${h}#${f}${w+1}`});return[T,T.join(`
`)]}async function Pn(e){let t=[],n="",s=e.replace(/^sub:\/\//i,"https://").split("#")[0].split("?")[0];/^https?:\/\//i.test(s)||(s=`https://${s}`);try{s=new URL(s).origin}catch(r){return t.push(`127.0.0.1:1234#${e}优选订阅生成器格式化异常:${r.message}`),[t,n]}let o=`${s}/sub?host=example.com&uuid=00000000-0000-4000-8000-000000000000`;try{let r=await fetch(o,{headers:{"User-Agent":"v2rayN/edgetunnel (https://github.com/"+Se[1]+"/edgetunnel)"}});if(!r.ok)return t.push(`127.0.0.1:1234#${e}优选订阅生成器异常:${r.statusText}`),[t,n];let a=atob(await r.text()),c=a.includes(`\r
`)?a.split(`\r
`):a.split(`
`);for(let f of c)if(f.trim())if(f.includes("00000000-0000-4000-8000-000000000000")&&f.includes("example.com")){let p=f.match(/:\/\/[^@]+@([^?]+)/);if(p){let i=p[1],d="",T=f.match(/#(.+)$/);T&&(d="#"+decodeURIComponent(T[1])),t.push(i+d)}}else n+=f+`
`}catch(r){t.push(`127.0.0.1:1234#${e}优选订阅生成器异常:${r.message}`)}return[t,n]}async function kn(e,t="443",n=3e3){if(!e?.length)return[[],[],[],[]];let s=new Set,o=new Set,r="",a=[];await Promise.allSettled(e.map(async f=>{let p=f.indexOf("#"),i=p>-1?f.substring(0,p):f,d=p>-1?decodeURIComponent(f.substring(p+1)):null,T=f.toLowerCase().includes("proxyip=true");if(i.toLowerCase().startsWith("sub://")){try{let[y,w]=await Pn(i);if(d)for(let l of y){let h=l.includes("#")?`${l} [${d}]`:`${l}#[${d}]`;s.add(h),T&&o.add(l.split("#")[0])}else for(let l of y)s.add(l),T&&o.add(l.split("#")[0]);if(w&&typeof w=="string"&&d){let l=w.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi,(h,x,P)=>`${x.includes("#")?`${x}${encodeURIComponent(` [${d}]`)}`:`${x}${encodeURIComponent(`#[${d}]`)}`}${P}`);r+=l}else w&&typeof w=="string"&&(r+=w)}catch{}return}try{let y=new AbortController,w=setTimeout(()=>y.abort(),n),l=await fetch(i,{signal:y.signal});clearTimeout(w);let h="";try{let u=await l.arrayBuffer(),S=(l.headers.get("content-type")||"").toLowerCase().match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase()||"",I=["utf-8","gb2312"];(S.includes("gb")||S.includes("gbk")||S.includes("gb2312"))&&(I=["gb2312","utf-8"]);let k=!1;for(let L of I)try{let m=new TextDecoder(L).decode(u);if(m&&m.length>0&&!m.includes("�")){h=m,k=!0;break}else if(m&&m.length>0)continue}catch{continue}if(k||(h=await l.text()),!h||h.trim().length===0)return}catch(u){console.error("Failed to decode response:",u);return}let x=h,P=typeof h=="string"?h.replace(/\s/g,""):"";if(P.length>0&&P.length%4===0&&/^[A-Za-z0-9+/]+={0,2}$/.test(P))try{let u=new Uint8Array(atob(P).split("").map(g=>g.charCodeAt(0)));x=new TextDecoder("utf-8").decode(u)}catch{}if(x.split("#")[0].includes("://")){if(d){let u=x.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi,(g,S,I)=>`${S.includes("#")?`${S}${encodeURIComponent(` [${d}]`)}`:`${S}${encodeURIComponent(`#[${d}]`)}`}${I}`);r+=u+`
`}else r+=x+`
`;return}let E=h.trim().split(`
`).map(u=>u.trim()).filter(u=>u),b=E.length>1&&E[0].includes(","),U=/^[^\[\]]*:[^\[\]]*:[^\[\]]/,A=new URL(i);if(!b)E.forEach(u=>{let g=u.indexOf("#"),[S,I]=g>-1?[u.substring(0,g),u.substring(g)]:[u,""],k=!1;if(S.startsWith("["))k=/\]:(\d+)$/.test(S);else{let C=S.lastIndexOf(":");k=C>-1&&/^\d+$/.test(S.substring(C+1))}let L=A.searchParams.get("port")||t,m=k?u:`${S}:${L}${I}`;if(d){let C=m.includes("#")?`${m} [${d}]`:`${m}#[${d}]`;s.add(C)}else s.add(m);T&&o.add(m.split("#")[0])});else{let u=E[0].split(",").map(S=>S.trim()),g=E.slice(1);if(u.includes("IP地址")&&u.includes("端口")&&u.includes("数据中心")){let S=u.indexOf("IP地址"),I=u.indexOf("端口"),k=u.indexOf("国家")>-1?u.indexOf("国家"):u.indexOf("城市")>-1?u.indexOf("城市"):u.indexOf("数据中心"),L=u.indexOf("TLS");g.forEach(m=>{let C=m.split(",").map(R=>R.trim());if(L!==-1&&C[L]?.toLowerCase()!=="true")return;let v=U.test(C[S])?`[${C[S]}]`:C[S],_=`${v}:${C[I]}#${C[k]}`;if(d){let R=`${_} [${d}]`;s.add(R)}else s.add(_);T&&o.add(`${v}:${C[I]}`)})}else if(u.some(S=>S.includes("IP"))&&u.some(S=>S.includes("延迟"))&&u.some(S=>S.includes("下载速度"))){let S=u.findIndex(m=>m.includes("IP")),I=u.findIndex(m=>m.includes("延迟")),k=u.findIndex(m=>m.includes("下载速度")),L=A.searchParams.get("port")||t;g.forEach(m=>{let C=m.split(",").map(R=>R.trim()),v=U.test(C[S])?`[${C[S]}]`:C[S],_=`${v}:${L}#CF优选 ${C[I]}ms ${C[k]}MB/s`;if(d){let R=`${_} [${d}]`;s.add(R)}else s.add(_);T&&o.add(`${v}:${L}`)})}}}catch{}}));let c=r.trim()?[...new Set(r.split(/\r?\n/).filter(f=>f.trim()!==""))]:[];return[Array.from(s),c,a,Array.from(o)]}function G(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e||0)}function ue(...e){if(!e||e.length===0)return new Uint8Array(0);let t=e.map(G),n=t.reduce((r,a)=>r+a.byteLength,0),s=new Uint8Array(n),o=0;for(let r of t)s.set(r,o),o+=r.byteLength;return s}function le(e){return e?typeof e.byteLength=="number"?e.byteLength:typeof e.length=="number"?e.length:0:0}function Re(e=""){let t=String(e||"").trim();return t.startsWith("[")&&t.endsWith("]")?t.slice(1,-1):t}function Fe(e=""){let t=Re(e);if(/^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/.test(t))return!0;if(!t.includes(":"))return!1;try{return new URL(`http://[${t}]/`),!0}catch{return!1}}function Ge(e){let t=String(e||"").split(".");return t.length===4&&t.every(n=>/^\d{1,3}$/.test(n)&&Number(n)>=0&&Number(n)<=255)}function Qe(e){let n=e?.fetcher;if(!n||typeof n.connect!="function")throw new Error("request.fetcher.connect unavailable");return(s,o)=>o===void 0?n.connect(s):n.connect(s,o)}function me(e){try{(e.readyState===WebSocket.OPEN||e.readyState===WebSocket.CLOSING)&&e.close()}catch{}}async function Ye(e,t){let n=e.send(t);n&&typeof n.then=="function"&&await n}function Tt(e=null){let t=new TextEncoder().encode(`HTTP/1.1 204 No Content\r
Content-Length: 0\r
Connection: close\r
\r
`);if(le(e)===0)return t;let n=G(e),s=new Uint8Array(n.byteLength+t.byteLength);return s.set(n,0),s.set(t,n.byteLength),M(`[TCP转发] 构造本地204响应: ${s.byteLength}B`),s}function gr(e=null){let t=new TextEncoder().encode(`HTTP/1.1 204 No Content\r
Content-Length: 0\r
Connection: keep-alive\r
\r
`);if(le(e)===0)return t;let n=G(e),s=new Uint8Array(n.byteLength+t.byteLength);return s.set(n,0),s.set(t,n.byteLength),s}function yr(e,t=null){let n=lt,s=Qn,o=Math.max(4096,s<<3),r=t,a=new Uint8Array(n),c=0,f=null,p=!1,i=0,d=0,T=0,y=null,w=async P=>{if(e.readyState!==WebSocket.OPEN)throw new Error("ws.readyState is not open");await Ye(e,P)},l=P=>{if(!r)return P;let E=new Uint8Array(r.length+P.byteLength);return E.set(r,0),E.set(P,r.length),r=null,E},h=async()=>{for(;y;)await y;if(f&&clearTimeout(f),f=null,p=!1,!c)return;let P=a.subarray(0,c).slice();return a=new Uint8Array(n),c=0,T=0,y=w(P).finally(()=>{y=null}),y},x=()=>{f||p||(p=!0,d=i,queueMicrotask(()=>{if(p=!1,!(!c||f)){if(n-c<s){h().catch(()=>me(e));return}f=setTimeout(()=>{if(f=null,!!c){if(n-c<s){h().catch(()=>me(e));return}if(T<2&&(i!==d||c<o)){T++,d=i,x();return}h().catch(()=>me(e))}},Math.max(Ht,1))}}))};return{async 直接发送(P){let E=G(P);E.byteLength&&(E=l(E),await w(E))},async 发送(P){let E=G(P);if(!E.byteLength)return;E=l(E);let b=0,U=E.byteLength;for(;b<U;){if(!c&&U-b>=n){let u=Math.min(n,U-b),g=b||u!==U?E.subarray(b,b+u):E;await w(g),b+=u;continue}let A=Math.min(n-c,U-b);a.set(E.subarray(b,b+A),c),c+=A,b+=A,i++,c===n||n-c<s?await h():x()}},flush:h}}async function Ct(e,t,n,s){let o=n,r=!1,a,c=!1,f=64*1024,p=yr(t,o);o=null;try{a=e.readable.getReader({mode:"byob"}),c=!0}catch{a=e.readable.getReader()}try{if(c){let i=new ArrayBuffer(f);for(;;){let{done:d,value:T}=await a.read(new Uint8Array(i,0,f));if(d)break;!T||T.byteLength===0||(r=!0,T.byteLength>=lt?(await p.flush(),await p.直接发送(T),i=new ArrayBuffer(f)):(await p.发送(T),i=T.buffer.byteLength>=f?T.buffer:new ArrayBuffer(f)))}}else for(;;){let{done:i,value:d}=await a.read();if(i)break;!d||d.byteLength===0||(r=!0,await p.发送(d))}await p.flush()}catch{me(t)}finally{try{a.cancel()}catch{}try{a.releaseLock()}catch{}}!r&&s&&await s()}async function Wt(e,t,n,s,o){let{username:r,password:a,hostname:c,port:f}=o||{},p=s({hostname:c,port:f}),i=p.writable.getWriter(),d=p.readable.getReader();try{let T=r&&a?new Uint8Array([5,2,0,2]):new Uint8Array([5,1,0]);await i.write(T);let y=await d.read();if(y.done||y.value.byteLength<2)throw new Error("S5 method selection failed");let w=new Uint8Array(y.value)[1];if(w===2){if(!r||!a)throw new Error("S5 requires authentication");let x=new TextEncoder().encode(r),P=new TextEncoder().encode(a),E=new Uint8Array([1,x.length,...x,P.length,...P]);if(await i.write(E),y=await d.read(),y.done||new Uint8Array(y.value)[1]!==0)throw new Error("S5 authentication failed")}else if(w!==0)throw new Error(`S5 unsupported auth method: ${w}`);let l=new TextEncoder().encode(e),h=new Uint8Array([5,1,0,3,l.length,...l,t>>8,t&255]);if(await i.write(h),y=await d.read(),y.done||new Uint8Array(y.value)[1]!==0)throw new Error("S5 connection failed");return le(n)>0&&await i.write(n),i.releaseLock(),d.releaseLock(),p}catch(T){try{i.releaseLock()}catch{}try{d.releaseLock()}catch{}try{p.close()}catch{}throw T}}async function Et(e,t,n,s=!1,o,r){let{username:a,password:c,hostname:f,port:p}=r||{},i=s?o({hostname:f,port:p},{secureTransport:"on",allowHalfOpen:!1}):o({hostname:f,port:p}),d=i.writable.getWriter(),T=i.readable.getReader(),y=new TextEncoder,w=new TextDecoder;try{s&&await i.opened;let l=a&&c?`Proxy-Authorization: Basic ${btoa(`${a}:${c}`)}\r
`:"",h=`CONNECT ${e}:${t} HTTP/1.1\r
Host: ${e}:${t}\r
${l}User-Agent: Mozilla/5.0\r
Connection: keep-alive\r
\r
`;await d.write(y.encode(h)),d.releaseLock();let x=new Uint8Array(0),P=-1,E=0;for(;P===-1&&E<8192;){let{done:A,value:u}=await T.read();if(A||!u)throw new Error(`${s?"HTTPS":"HTTP"} 代理在返回 CONNECT 响应前关闭连接`);x=new Uint8Array([...x,...u]),E=x.length;let g=x.findIndex((S,I)=>I<x.length-3&&x[I]===13&&x[I+1]===10&&x[I+2]===13&&x[I+3]===10);g!==-1&&(P=g+4)}if(P===-1)throw new Error("代理 CONNECT 响应头过长或无效");let b=w.decode(x.slice(0,P)).split(`\r
`)[0].match(/HTTP\/\d\.\d\s+(\d+)/),U=b?parseInt(b[1],10):NaN;if(!Number.isFinite(U)||U<200||U>=300)throw new Error(`Connection failed: HTTP ${U}`);if(T.releaseLock(),le(n)>0){let A=i.writable.getWriter();await A.write(n),A.releaseLock()}if(E>P){let{readable:A,writable:u}=new TransformStream,g=u.getWriter();return await g.write(x.subarray(P,E)),g.releaseLock(),i.readable.pipeTo(u).catch(()=>{}),{readable:A,writable:i.writable,closed:i.closed,close:()=>i.close()}}return i}catch(l){try{d.releaseLock()}catch{}try{T.releaseLock()}catch{}try{i.close()}catch{}throw l}}var At=e=>e?.[0]===1&&e?.[1]===112,dt=new TextEncoder,Ln=new TextDecoder,He=new Uint8Array(0),mr=new Map([[4865,{id:4865,keyLen:16,ivLen:12,hash:"SHA-256",tls13:!0}],[4866,{id:4866,keyLen:32,ivLen:12,hash:"SHA-384",tls13:!0}],[4867,{id:4867,keyLen:32,ivLen:12,hash:"SHA-256",tls13:!0,chacha:!0}],[49199,{id:49199,keyLen:16,ivLen:4,hash:"SHA-256",kex:"ECDHE"}],[49200,{id:49200,keyLen:32,ivLen:4,hash:"SHA-384",kex:"ECDHE"}],[52392,{id:52392,keyLen:32,ivLen:12,hash:"SHA-256",kex:"ECDHE",chacha:!0}],[49195,{id:49195,keyLen:16,ivLen:4,hash:"SHA-256",kex:"ECDHE"}],[49196,{id:49196,keyLen:32,ivLen:4,hash:"SHA-384",kex:"ECDHE"}],[52393,{id:52393,keyLen:32,ivLen:12,hash:"SHA-256",kex:"ECDHE",chacha:!0}]]),Un=new Map([[29,"X25519"],[23,"P-256"]]),wr=[2052,2053,2054,1025,1281,1537,1027,1283,1539],In=16*1024;var se=(...e)=>{let t=n=>n.flatMap(s=>s instanceof Uint8Array?[...s]:Array.isArray(s)?t(s):typeof s=="number"?[s]:[]);return new Uint8Array(t(e))},J=e=>[e>>8&255,255&e],Ce=(e,t)=>e[t]<<8|e[t+1],Ze=(e,t)=>e[t]<<16|e[t+1]<<8|e[t+2],he=(...e)=>{let t=e.filter((r=>r&&r.length>0)),n=t.reduce(((r,a)=>r+a.length),0),s=new Uint8Array(n),o=0;for(let r of t)s.set(r,o),o+=r.length;return s},vn=e=>crypto.getRandomValues(new Uint8Array(e)),Pt=(e,t)=>{if(!e||!t||e.length!==t.length)return!1;let n=0;for(let s=0;s<e.length;s++)n|=e[s]^t[s];return n===0},Gt=e=>e==="SHA-512"?64:e==="SHA-384"?48:32;async function qe(e,t,n){let s=await crypto.subtle.importKey("raw",t,{name:"HMAC",hash:e},!1,["sign"]);return new Uint8Array(await crypto.subtle.sign("HMAC",s,n))}async function Be(e,t){return new Uint8Array(await crypto.subtle.digest(e,t))}async function kt(e,t,n,s,o="SHA-256"){let r=he(dt.encode(t),n),a=new Uint8Array(0),c=r;for(;a.length<s;){c=await qe(o,e,c);let f=await qe(o,e,he(c,r));a=he(a,f)}return a.slice(0,s)}async function Yt(e,t,n){return t&&t.length||(t=new Uint8Array(Gt(e))),qe(e,t,n)}async function _e(e,t,n,s,o){let r=dt.encode("tls13 "+n);return(async function(a,c,f,p){let i=Gt(a),d=Math.ceil(p/i),T=new Uint8Array(0),y=new Uint8Array(0);for(let w=1;w<=d;w++)y=await qe(a,c,he(y,f,[w])),T=he(T,y);return T.slice(0,p)})(e,t,se(J(o),r.length,r,s.length,s),o)}async function $n(e="P-256"){let t=e==="X25519"?{name:"X25519"}:{name:"ECDH",namedCurve:e},n=await crypto.subtle.generateKey(t,!0,["deriveBits"]),s=await crypto.subtle.exportKey("raw",n.publicKey);return{keyPair:n,publicKeyRaw:new Uint8Array(s)}}async function Rn(e,t,n="P-256"){let s=n==="X25519"?{name:"X25519"}:{name:"ECDH",namedCurve:n},o=await crypto.subtle.importKey("raw",t,s,!1,[]),r=n==="P-384"?384:n==="P-521"?528:256;return new Uint8Array(await crypto.subtle.deriveBits({name:s.name,public:o},e,r))}async function ke(e,t){return crypto.subtle.importKey("raw",e,{name:"AES-GCM"},!1,t)}async function Vt(e,t,n,s){return new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:t,additionalData:s,tagLength:128},e,n))}async function Xt(e,t,n,s){return new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:t,additionalData:s,tagLength:128},e,n))}function Ft(e,t){return(e<<t|e>>>32-t)>>>0}function Ve(e,t,n,s,o){e[t]=e[t]+e[n]>>>0,e[o]=Ft(e[o]^e[t],16),e[s]=e[s]+e[o]>>>0,e[n]=Ft(e[n]^e[s],12),e[t]=e[t]+e[n]>>>0,e[o]=Ft(e[o]^e[t],8),e[s]=e[s]+e[o]>>>0,e[n]=Ft(e[n]^e[s],7)}function _n(e,t,n){let s=new Uint32Array(16);s[0]=1634760805,s[1]=857760878,s[2]=2036477234,s[3]=1797285236;let o=new DataView(e.buffer,e.byteOffset,e.byteLength);for(let c=0;c<8;c++)s[4+c]=o.getUint32(4*c,!0);s[12]=t;let r=new DataView(n.buffer,n.byteOffset,n.byteLength);s[13]=r.getUint32(0,!0),s[14]=r.getUint32(4,!0),s[15]=r.getUint32(8,!0);let a=new Uint32Array(s);for(let c=0;c<10;c++)Ve(a,0,4,8,12),Ve(a,1,5,9,13),Ve(a,2,6,10,14),Ve(a,3,7,11,15),Ve(a,0,5,10,15),Ve(a,1,6,11,12),Ve(a,2,7,8,13),Ve(a,3,4,9,14);for(let c=0;c<16;c++)a[c]=a[c]+s[c]>>>0;return new Uint8Array(a.buffer.slice(0))}function br(e,t,n){let s=new Uint8Array(n.length),o=1;for(let r=0;r<n.length;r+=64){let a=_n(e,o++,t),c=Math.min(64,n.length-r);for(let f=0;f<c;f++)s[r+f]=n[r+f]^a[f]}return s}function Sr(e,t){let n=(function(f){let p=new Uint8Array(f);return p[3]&=15,p[7]&=15,p[11]&=15,p[15]&=15,p[4]&=252,p[8]&=252,p[12]&=252,p})(e.slice(0,16)),s=e.slice(16,32),o=[0n,0n,0n,0n,0n],r=[0x3ffffffn&BigInt(n[0]|n[1]<<8|n[2]<<16|n[3]<<24),0x3ffffffn&BigInt(n[3]>>2|n[4]<<6|n[5]<<14|n[6]<<22),0x3ffffffn&BigInt(n[6]>>4|n[7]<<4|n[8]<<12|n[9]<<20),0x3ffffffn&BigInt(n[9]>>6|n[10]<<2|n[11]<<10|n[12]<<18),0x3ffffffn&BigInt(n[13]|n[14]<<8|n[15]<<16)];for(let f=0;f<t.length;f+=16){let p=t.slice(f,f+16),i=new Uint8Array(17);i.set(p),i[p.length]=1,o[0]+=BigInt(i[0]|i[1]<<8|i[2]<<16|(3&i[3])<<24),o[1]+=BigInt(i[3]>>2|i[4]<<6|i[5]<<14|(15&i[6])<<22),o[2]+=BigInt(i[6]>>4|i[7]<<4|i[8]<<12|(63&i[9])<<20),o[3]+=BigInt(i[9]>>6|i[10]<<2|i[11]<<10|i[12]<<18),o[4]+=BigInt(i[13]|i[14]<<8|i[15]<<16|i[16]<<24);let d=[0n,0n,0n,0n,0n];for(let y=0;y<5;y++)for(let w=0;w<5;w++){let l=y+w;l<5?d[l]+=o[y]*r[w]:d[l-5]+=o[y]*r[w]*5n}let T=0n;for(let y=0;y<5;y++)d[y]+=T,o[y]=0x3ffffffn&d[y],T=d[y]>>26n;o[0]+=5n*T,T=o[0]>>26n,o[0]&=0x3ffffffn,o[1]+=T}let a=o[0]|o[1]<<26n|o[2]<<52n|o[3]<<78n|o[4]<<104n;a=a+s.reduce(((f,p,i)=>f+(BigInt(p)<<BigInt(8*i))),0n)&(1n<<128n)-1n;let c=new Uint8Array(16);for(let f=0;f<16;f++)c[f]=Number(a>>BigInt(8*f)&0xffn);return c}function zt(e,t,n,s){let o=_n(e,0,t).slice(0,32),r=br(e,t,n),a=(16-s.length%16)%16,c=(16-r.length%16)%16,f=new Uint8Array(s.length+a+r.length+c+16);f.set(s,0),f.set(r,s.length+a);let p=new DataView(f.buffer,s.length+a+r.length+c);p.setBigUint64(0,BigInt(s.length),!0),p.setBigUint64(8,BigInt(r.length),!0);let i=Sr(o,f);return he(r,i)}function Jt(e,t,n,s){if(n.length<16)throw new Error("Ciphertext too short");let o=n.slice(-16),r=n.slice(0,-16),a=_n(e,0,t).slice(0,32),c=(16-s.length%16)%16,f=(16-r.length%16)%16,p=new Uint8Array(s.length+c+r.length+f+16);p.set(s,0),p.set(r,s.length+c);let i=new DataView(p.buffer,s.length+c+r.length+f);i.setBigUint64(0,BigInt(s.length),!0),i.setBigUint64(8,BigInt(r.length),!0);let d=Sr(a,p),T=0;for(let y=0;y<16;y++)T|=o[y]^d[y];if(T!==0)throw new Error("ChaCha20-Poly1305 authentication failed");return br(e,t,r)}var Qt=e=>{let t=new Uint8Array(8);return new DataView(t.buffer).setBigUint64(0,e,!1),t},et=(e,t)=>{let n=e.slice(),s=Qt(t);for(let o=0;o<8;o++)n[n.length-8+o]^=s[o];return n},Lt=(e,t,n,s)=>Promise.all([_e(e,t,"key",He,n),_e(e,t,"iv",He,s)]);function nt(e,t,n=771){let s=G(t),o=new Uint8Array(5+s.byteLength);return o[0]=e,o[1]=n>>8&255,o[2]=n&255,o[3]=s.byteLength>>8&255,o[4]=s.byteLength&255,o.set(s,5),o}function gt(e,t){return se(e,(n=>[n>>16&255,n>>8&255,255&n])(t.length),t)}var qt=class{constructor(){this.buffer=new Uint8Array(0)}feed(t){let n=G(t);this.buffer=this.buffer.length?he(this.buffer,n):n}next(){if(this.buffer.length<5)return null;let t=this.buffer[0],n=Ce(this.buffer,1),s=Ce(this.buffer,3);if(this.buffer.length<5+s)return null;let o=this.buffer.subarray(5,5+s);return this.buffer=this.buffer.subarray(5+s),{type:t,version:n,length:s,fragment:o}}},Zt=class{constructor(){this.buffer=new Uint8Array(0)}feed(t){let n=G(t);this.buffer=this.buffer.length?he(this.buffer,n):n}next(){if(this.buffer.length<4)return null;let t=this.buffer[0],n=Ze(this.buffer,1);if(this.buffer.length<4+n)return null;let s=this.buffer.subarray(4,4+n),o=this.buffer.subarray(0,4+n);return this.buffer=this.buffer.subarray(4+n),{type:t,length:n,body:s,raw:o}}};function Tr(e){let t=0,n=Ce(e,t);t+=2;let s=e.slice(t,t+32);t+=32;let o=e[t++],r=e.slice(t,t+o);t+=o;let a=Ce(e,t);t+=2;let c=e[t++],f=n,p=null,i=null;if(t<e.length){let T=Ce(e,t);t+=2;let y=t+T;for(;t+4<=y;){let w=Ce(e,t);t+=2;let l=Ce(e,t);t+=2;let h=e.slice(t,t+l);if(t+=l,w===43&&l>=2)f=Ce(h,0);else if(w===51&&l>=4){let x=Ce(h,0),P=Ce(h,2);p={group:x,key:h.slice(4,4+P)}}else w===16&&l>=3&&(i=Ln.decode(h.slice(3,3+h[2])))}}let d=new Uint8Array([207,33,173,116,229,154,97,17,190,29,140,2,30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,51,156]);return{version:n,serverRandom:s,sessionId:r,cipherSuite:a,compression:c,selectedVersion:f,keyShare:p,alpn:i,isHRR:Pt(s,d),isTls13:f===772}}function Cr(e){let t=1,n=Ce(e,t);t+=2;let s=e[t++];return{namedCurve:n,serverPublicKey:e.slice(t,t+s)}}function Dn(e,t=0){let n=0;if(t){let r=e[n++];n+=r}if(n+3>e.length)return null;let s=Ze(e,n);if(n+=3,!s||n+3>e.length)return null;let o=Ze(e,n);return n+=3,o?e.slice(n,n+o):null}function Er(e){let t={alpn:null},n=2,s=2+Ce(e,0);for(;n+4<=s;){let o=Ce(e,n);n+=2;let r=Ce(e,n);if(n+=2,o===16&&r>=3){let a=e[n+2];a>0&&n+3+a<=n+r&&(t.alpn=Ln.decode(e.slice(n+3,n+3+a)))}n+=r}return t}function Ar(e,t,n,{tls13:s=!0,tls12:o=!0,alpn:r=null,chacha:a=!0}={}){let c=[];s&&c.push(4865,4866,...a?[4867]:[]),o&&c.push(49199,49200,49195,49196,...a?[52392,52393]:[]);let f=se(...c.flatMap(J)),p=[se(255,1,0,1,0)];if(t){let y=dt.encode(t),w=se(0,J(y.length),y);p.push(se(J(0),J(w.length+2),J(w.length),w))}p.push(se(J(11),0,2,1,0)),p.push(se(J(10),0,6,0,4,0,29,0,23));let i=se(...wr.flatMap(J));p.push(se(J(13),J(i.length+2),J(i.length),i));let d=Array.isArray(r)?r.filter(Boolean):r?[r]:[];if(d.length){let y=he(...d.map((w=>{let l=dt.encode(w);return se(l.length,l)})));p.push(se(J(16),J(y.length+2),J(y.length),y))}if(s&&n){let y;if(p.push(o?se(J(43),0,5,4,3,4,3,3):se(J(43),0,3,2,3,4)),p.push(se(J(45),0,2,1,1)),n?.x25519&&n?.p256)y=he(se(0,29,J(n.x25519.length),n.x25519),se(0,23,J(n.p256.length),n.p256));else if(n?.x25519)y=se(0,29,J(n.x25519.length),n.x25519);else if(n?.p256)y=se(0,23,J(n.p256.length),n.p256);else{if(!(n instanceof Uint8Array))throw new Error("Invalid keyShares");y=se(0,23,J(n.length),n)}p.push(se(J(51),J(y.length+2),J(y.length),y))}let T=he(...p);return gt(1,se(J(771),e,0,J(f.length),f,1,0,J(T.length),T))}var mt=class{constructor(t,n={}){if(this.socket=t,this.serverName=n.serverName||"",this.supportTls13=n.tls13!==!1,this.supportTls12=n.tls12!==!1,!this.supportTls13&&!this.supportTls12)throw new Error("At least one TLS version must be enabled");this.alpnProtocols=Array.isArray(n.alpn)?n.alpn:n.alpn?[n.alpn]:null,this.allowChacha=n.allowChacha!==!1,this.timeout=n.timeout??3e4,this.clientRandom=vn(32),this.serverRandom=null,this.handshakeChunks=[],this.handshakeComplete=!1,this.negotiatedAlpn=null,this.cipherSuite=null,this.cipherConfig=null,this.isTls13=!1,this.masterSecret=null,this.handshakeSecret=null,this.clientWriteKey=null,this.serverWriteKey=null,this.clientWriteIv=null,this.serverWriteIv=null,this.clientHandshakeKey=null,this.serverHandshakeKey=null,this.clientHandshakeIv=null,this.serverHandshakeIv=null,this.clientAppKey=null,this.serverAppKey=null,this.clientAppIv=null,this.serverAppIv=null,this.clientWriteCryptoKey=null,this.serverWriteCryptoKey=null,this.clientHandshakeCryptoKey=null,this.serverHandshakeCryptoKey=null,this.clientAppCryptoKey=null,this.serverAppCryptoKey=null,this.clientSeqNum=0n,this.serverSeqNum=0n,this.recordParser=new qt,this.handshakeParser=new Zt,this.keyPairs=new Map,this.ecdhKeyPair=null,this.sawCert=!1}recordHandshake(t){this.handshakeChunks.push(t)}transcript(){return this.handshakeChunks.length===1?this.handshakeChunks[0]:he(...this.handshakeChunks)}getCipherConfig(t){return mr.get(t)||null}async readChunk(t){return this.timeout?Promise.race([t.read(),new Promise(((n,s)=>setTimeout((()=>s(new Error("TLS read timeout"))),this.timeout)))]):t.read()}async readRecordsUntil(t,n,s){for(;;){let o;for(;o=this.recordParser.next();)if(await n(o))return;let{value:r,done:a}=await this.readChunk(t);if(a)throw new Error(s);this.recordParser.feed(r)}}async readHandshakeUntil(t,n,s){for(let o;o=this.handshakeParser.next();)if(await n(o))return;return this.readRecordsUntil(t,(async o=>{if(o.type===21){if(At(o.fragment))return;throw new Error(`TLS Alert: ${o.fragment[1]}`)}if(o.type===22){this.handshakeParser.feed(o.fragment);for(let r;r=this.handshakeParser.next();)if(await n(r))return 1}}),s)}async acceptCertificate(t){if(!t?.length)throw new Error("Empty certificate");this.sawCert=!0}async handshake(){let[t,n]=await Promise.all([$n("P-256"),$n("X25519")]);this.keyPairs=new Map([[23,t],[29,n]]),this.ecdhKeyPair=t.keyPair;let s=this.socket.readable.getReader(),o=this.socket.writable.getWriter();try{let r=Ar(this.clientRandom,this.serverName,{x25519:n.publicKeyRaw,p256:t.publicKeyRaw},{tls13:this.supportTls13,tls12:this.supportTls12,alpn:this.alpnProtocols,chacha:this.allowChacha});this.recordHandshake(r),await o.write(nt(22,r,769));let a=await this.receiveServerHello(s);if(a.isHRR)throw new Error("HelloRetryRequest is not supported by TLSClientMini");if(a.keyShare?.group&&this.keyPairs.has(a.keyShare.group)){let c=this.keyPairs.get(a.keyShare.group);this.ecdhKeyPair=c.keyPair}a.isTls13?await this.handshakeTls13(s,o,a):await this.handshakeTls12(s,o),this.handshakeComplete=!0}finally{s.releaseLock(),o.releaseLock()}}async receiveServerHello(t){for(;;){let{value:n,done:s}=await this.readChunk(t);if(s)throw new Error("Connection closed waiting for ServerHello");let o;for(this.recordParser.feed(n);o=this.recordParser.next();){if(o.type===21){if(At(o.fragment))continue;throw new Error(`TLS Alert: level=${o.fragment[0]}, desc=${o.fragment[1]}`)}if(o.type!==22)continue;let r;for(this.handshakeParser.feed(o.fragment);r=this.handshakeParser.next();){if(r.type!==2)continue;this.recordHandshake(r.raw);let a=Tr(r.body);if(this.serverRandom=a.serverRandom,this.cipherSuite=a.cipherSuite,this.cipherConfig=this.getCipherConfig(a.cipherSuite),this.isTls13=a.isTls13,this.negotiatedAlpn=a.alpn||null,!this.cipherConfig)throw new Error(`Unsupported cipher suite: 0x${a.cipherSuite.toString(16)}`);return a}}}}async handshakeTls12(t,n){let s=null,o=!1;if(await this.readHandshakeUntil(t,(async x=>{switch(x.type){case 11:{this.recordHandshake(x.raw);let P=Dn(x.body,1);if(!P)throw new Error("Missing TLS 1.2 certificate");await this.acceptCertificate(P);break}case 12:this.recordHandshake(x.raw),s=Cr(x.body);break;case 14:return this.recordHandshake(x.raw),o=!0,1;case 13:throw new Error("Client certificate is not supported");default:this.recordHandshake(x.raw)}}),"Connection closed during TLS 1.2 handshake"),!this.sawCert)throw new Error("Missing TLS 1.2 leaf certificate");let r=s;if(!r)throw new Error("Missing TLS 1.2 ServerKeyExchange");let a=Un.get(r.namedCurve);if(!a)throw new Error(`Unsupported named curve: 0x${r.namedCurve.toString(16)}`);let c=this.keyPairs.get(r.namedCurve);if(!c)throw new Error(`Missing key pair for curve: 0x${r.namedCurve.toString(16)}`);let f=await Rn(c.keyPair.privateKey,r.serverPublicKey,a),p=gt(16,se(c.publicKeyRaw.length,c.publicKeyRaw));this.recordHandshake(p);let i=this.cipherConfig.hash;this.masterSecret=await kt(f,"master secret",he(this.clientRandom,this.serverRandom),48,i);let d=this.cipherConfig.keyLen,T=this.cipherConfig.ivLen,y=await kt(this.masterSecret,"key expansion",he(this.serverRandom,this.clientRandom),2*d+2*T,i);this.clientWriteKey=y.slice(0,d),this.serverWriteKey=y.slice(d,2*d),this.clientWriteIv=y.slice(2*d,2*d+T),this.serverWriteIv=y.slice(2*d+T,2*d+2*T),this.cipherConfig.chacha||([this.clientWriteCryptoKey,this.serverWriteCryptoKey]=await Promise.all([ke(this.clientWriteKey,["encrypt"]),ke(this.serverWriteKey,["decrypt"])])),await n.write(nt(22,p)),await n.write(nt(20,se(1)));let w=await kt(this.masterSecret,"client finished",await Be(i,this.transcript()),12,i),l=gt(20,w);this.recordHandshake(l),await n.write(nt(22,await this.encryptTls12(l,22)));let h=!1;await this.readRecordsUntil(t,(async x=>{if(x.type===21){if(At(x.fragment))return;throw new Error(`TLS Alert: ${x.fragment[1]}`)}if(x.type===20)return void(h=!0);if(x.type!==22||!h)return;let P=await this.decryptTls12(x.fragment,22);if(P[0]!==20)return;let E=Ze(P,1),b=P.slice(4,4+E),U=await kt(this.masterSecret,"server finished",await Be(i,this.transcript()),12,i);if(!Pt(b,U))throw new Error("TLS 1.2 server Finished verify failed");return 1}),"Connection closed waiting for TLS 1.2 Finished")}async handshakeTls13(t,n,s){let o=Un.get(s.keyShare?.group);if(!o||!s.keyShare?.key?.length)throw new Error("Missing TLS 1.3 key_share");let r=this.cipherConfig.hash,a=Gt(r),c=this.cipherConfig.keyLen,f=this.cipherConfig.ivLen,p=await Rn(this.ecdhKeyPair.privateKey,s.keyShare.key,o),i=await Yt(r,null,new Uint8Array(a)),d=await _e(r,i,"derived",await Be(r,He),a);this.handshakeSecret=await Yt(r,d,p);let T=await Be(r,this.transcript()),y=await _e(r,this.handshakeSecret,"c hs traffic",T,a),w=await _e(r,this.handshakeSecret,"s hs traffic",T,a);[this.clientHandshakeKey,this.clientHandshakeIv]=await Lt(r,y,c,f),[this.serverHandshakeKey,this.serverHandshakeIv]=await Lt(r,w,c,f),this.cipherConfig.chacha||([this.clientHandshakeCryptoKey,this.serverHandshakeCryptoKey]=await Promise.all([ke(this.clientHandshakeKey,["encrypt"]),ke(this.serverHandshakeKey,["decrypt"])]));let l=await _e(r,w,"finished",He,a),h=!1,x=async I=>{switch(I.type){case 8:{let k=Er(I.body);k.alpn&&(this.negotiatedAlpn=k.alpn),this.recordHandshake(I.raw);break}case 11:{let k=Dn(I.body);if(!k)throw new Error("Missing TLS 1.3 certificate");await this.acceptCertificate(k),this.recordHandshake(I.raw);break}case 13:throw new Error("Client certificate is not supported");case 15:this.recordHandshake(I.raw);break;case 20:{let k=await qe(r,l,await Be(r,this.transcript()));if(!Pt(k,I.body))throw new Error("TLS 1.3 server Finished verify failed");this.recordHandshake(I.raw),h=!0;break}default:this.recordHandshake(I.raw)}};await this.readRecordsUntil(t,(async I=>{if(I.type===20||I.type===22)return;if(I.type===21){if(At(I.fragment))return;throw new Error(`TLS Alert: ${I.fragment[1]}`)}if(I.type!==23)return;let k=await this.decryptTls13Handshake(I.fragment),L=k[k.length-1],m=k.slice(0,-1);if(L===22){this.handshakeParser.feed(m);for(let C;C=this.handshakeParser.next();)if(await x(C),h)return 1}}),"Connection closed during TLS 1.3 handshake");let P=await Be(r,this.transcript()),E=await _e(r,this.handshakeSecret,"derived",await Be(r,He),a),b=await Yt(r,E,new Uint8Array(a)),U=await _e(r,b,"c ap traffic",P,a),A=await _e(r,b,"s ap traffic",P,a);[this.clientAppKey,this.clientAppIv]=await Lt(r,U,c,f),[this.serverAppKey,this.serverAppIv]=await Lt(r,A,c,f),this.cipherConfig.chacha||([this.clientAppCryptoKey,this.serverAppCryptoKey]=await Promise.all([ke(this.clientAppKey,["encrypt"]),ke(this.serverAppKey,["decrypt"])]));let u=await _e(r,y,"finished",He,a),g=await qe(r,u,await Be(r,this.transcript())),S=gt(20,g);this.recordHandshake(S),await n.write(nt(23,await this.encryptTls13Handshake(he(S,[22])))),this.clientSeqNum=0n,this.serverSeqNum=0n}async encryptTls12(t,n){let s=this.clientSeqNum++,o=Qt(s),r=he(o,[n],J(771),J(t.length));if(this.cipherConfig.chacha){let c=et(this.clientWriteIv,s);return zt(this.clientWriteKey,c,t,r)}let a=vn(8);return this.clientWriteCryptoKey||(this.clientWriteCryptoKey=await ke(this.clientWriteKey,["encrypt"])),he(a,await Vt(this.clientWriteCryptoKey,he(this.clientWriteIv,a),t,r))}async decryptTls12(t,n){let s=this.serverSeqNum++,o=Qt(s);if(this.cipherConfig.chacha){let c=et(this.serverWriteIv,s);return Jt(this.serverWriteKey,c,t,he(o,[n],J(771),J(t.length-16)))}let r=t.subarray(0,8),a=t.subarray(8);return this.serverWriteCryptoKey||(this.serverWriteCryptoKey=await ke(this.serverWriteKey,["decrypt"])),Xt(this.serverWriteCryptoKey,he(this.serverWriteIv,r),a,he(o,[n],J(771),J(a.length-16)))}async encryptTls13Handshake(t){let n=et(this.clientHandshakeIv,this.clientSeqNum++),s=se(23,3,3,J(t.length+16));return this.cipherConfig.chacha?zt(this.clientHandshakeKey,n,t,s):(this.clientHandshakeCryptoKey||(this.clientHandshakeCryptoKey=await ke(this.clientHandshakeKey,["encrypt"])),Vt(this.clientHandshakeCryptoKey,n,t,s))}async decryptTls13Handshake(t){let n=et(this.serverHandshakeIv,this.serverSeqNum++),s=se(23,3,3,J(t.length)),o=this.cipherConfig.chacha?await Jt(this.serverHandshakeKey,n,t,s):await Xt(this.serverHandshakeCryptoKey||(this.serverHandshakeCryptoKey=await ke(this.serverHandshakeKey,["decrypt"])),n,t,s),r=o.length-1;for(;r>=0&&!o[r];)r--;return r<0?He:o.slice(0,r+1)}async encryptTls13(t){let n=he(t,[23]),s=et(this.clientAppIv,this.clientSeqNum++),o=se(23,3,3,J(n.length+16));return this.cipherConfig.chacha?zt(this.clientAppKey,s,n,o):(this.clientAppCryptoKey||(this.clientAppCryptoKey=await ke(this.clientAppKey,["encrypt"])),Vt(this.clientAppCryptoKey,s,n,o))}async decryptTls13(t){let n=et(this.serverAppIv,this.serverSeqNum++),s=se(23,3,3,J(t.length)),o=this.cipherConfig.chacha?await Jt(this.serverAppKey,n,t,s):await Xt(this.serverAppCryptoKey||(this.serverAppCryptoKey=await ke(this.serverAppKey,["decrypt"])),n,t,s),r=o.length-1;for(;r>=0&&!o[r];)r--;return r<0?{data:He,type:0}:{data:o.slice(0,r),type:o[r]}}async write(t){if(!this.handshakeComplete)throw new Error("Handshake not complete");let n=G(t);if(!n.byteLength)return;let s=this.socket.writable.getWriter();try{let o=[];for(let r=0;r<n.byteLength;r+=In){let a=n.subarray(r,Math.min(r+In,n.byteLength)),c=this.isTls13?await this.encryptTls13(a):await this.encryptTls12(a,23);o.push(nt(23,c))}await s.write(o.length===1?o[0]:he(...o))}finally{s.releaseLock()}}async read(){for(;;){let t;for(;t=this.recordParser.next();){if(t.type===21){if(t.fragment[1]===0)return null;throw new Error(`TLS Alert: ${t.fragment[1]}`)}if(t.type!==23)continue;if(!this.isTls13)return this.decryptTls12(t.fragment,23);let{data:s,type:o}=await this.decryptTls13(t.fragment);if(o===23)return s;if(o===21){if(s[1]===0)return null;throw new Error(`TLS Alert: ${s[1]}`)}if(o!==22)continue;let r;for(this.handshakeParser.feed(s);r=this.handshakeParser.next();)if(r.type!==4&&r.type===24)throw new Error("TLS 1.3 KeyUpdate is not supported by TLSClientMini")}let n=this.socket.readable.getReader();try{let{value:s,done:o}=await this.readChunk(n);if(o)return null;this.recordParser.feed(s)}finally{n.releaseLock()}}}close(){this.socket.close()}};async function tn(e,t,n,s,o){let{username:r,password:a,hostname:c,port:f}=o||{},p=new TextEncoder,i=new TextDecoder,d=null,T=Fe(c)?"":Re(c),y=async(w=!1)=>{let l=s({hostname:c,port:f});try{await l.opened;let h=new mt(l,{serverName:T,insecure:!0,allowChacha:w});return await h.handshake(),M(`[HTTPS代理] TLS版本: ${h.isTls13?"1.3":"1.2"} | Cipher: 0x${h.cipherSuite.toString(16)}${h.cipherConfig?.chacha?" (ChaCha20)":" (AES-GCM)"}`),h}catch(h){try{l.close()}catch{}throw h}};try{try{d=await y(!1)}catch(C){if(!/cipher|handshake|TLS Alert|ServerHello|Finished|Unsupported|Missing TLS/i.test(C?.message||`${C||""}`))throw C;M(`[HTTPS代理] AES-GCM TLS 握手失败，回退 ChaCha20 兼容模式: ${C?.message||C}`),d=await y(!0)}let w=r&&a?`Proxy-Authorization: Basic ${btoa(`${r}:${a}`)}\r
`:"",l=`CONNECT ${e}:${t} HTTP/1.1\r
Host: ${e}:${t}\r
${w}User-Agent: Mozilla/5.0\r
Connection: keep-alive\r
\r
`;await d.write(p.encode(l));let h=new Uint8Array(0),x=-1,P=0;for(;x===-1&&P<8192;){let C=await d.read();if(!C)throw new Error("HTTPS 代理在返回 CONNECT 响应前关闭连接");h=ue(h,C),P=h.length;let v=h.findIndex((_,R)=>R<h.length-3&&h[R]===13&&h[R+1]===10&&h[R+2]===13&&h[R+3]===10);v!==-1&&(x=v+4)}if(x===-1)throw new Error("HTTPS 代理 CONNECT 响应头过长或无效");let E=i.decode(h.slice(0,x)).split(`\r
`)[0].match(/HTTP\/\d\.\d\s+(\d+)/),b=E?parseInt(E[1],10):NaN;if(!Number.isFinite(b)||b<200||b>=300)throw new Error(`Connection failed: HTTP ${b}`);le(n)>0&&await d.write(G(n));let U=P>x?h.subarray(x,P):null,A=!1,u,g,S=(C,v)=>{A||(A=!0,C(v))},I=new Promise((C,v)=>{u=C,g=v}),k=()=>{try{d.close()}catch{}S(u)},L=new ReadableStream({async start(C){try{for(le(U)>0&&C.enqueue(U);;){let v=await d.read();if(!v)break;v.byteLength>0&&C.enqueue(v)}try{C.close()}catch{}S(u)}catch(v){try{C.error(v)}catch{}S(g,v)}},cancel(){k()}}),m=new WritableStream({async write(C){await d.write(G(C))},close:k,abort(C){k(),C&&S(g,C)}});return{readable:L,writable:m,closed:I,close:k}}catch(w){try{d?.close()}catch{}throw w}}var Xe={},Ur=256,gs={A:1,NS:2,CNAME:5,MX:15,TXT:16,AAAA:28,SRV:33,HTTPS:65};async function Ne(e,t,n="https://cloudflare-dns.com/dns-query"){let s=String(e||"").trim().toLowerCase().replace(/\.$/,""),o=String(t||"").trim().toUpperCase(),r=`${s}:${o}`,a=gs[o]||1,c=Date.now(),f=Xe[r];if(f&&c<f.过期时间)return M(`[DoH查询] 命中缓存 ${e} ${t} via ${n}`),f.data.map(i=>({type:a,data:i}));let p=performance.now();M(`[DoH查询] 开始查询 ${e} ${t} via ${n}`);try{let d=(L=>{let m=L.endsWith(".")?L.slice(0,-1).split("."):L.split("."),C=[];for(let O of m){let $=new TextEncoder().encode(O);C.push(new Uint8Array([$.length]),$)}C.push(new Uint8Array([0]));let v=C.reduce((O,$)=>O+$.length,0),_=new Uint8Array(v),R=0;for(let O of C)_.set(O,R),R+=O.length;return _})(s),T=new Uint8Array(12+d.length+4),y=new DataView(T.buffer);y.setUint16(0,crypto.getRandomValues(new Uint16Array(1))[0]),y.setUint16(2,256),y.setUint16(4,1),T.set(d,12),y.setUint16(12+d.length,a),y.setUint16(12+d.length+2,1),M(`[DoH查询] 发送查询报文 ${e} via ${n} (type=${a}, ${T.length}字节)`);let w=await fetch(n,{method:"POST",headers:{"Content-Type":"application/dns-message",Accept:"application/dns-message"},body:T});if(!w.ok)return console.warn(`[DoH查询] 请求失败 ${e} ${t} via ${n} 响应代码:${w.status}`),[];let l=new Uint8Array(await w.arrayBuffer()),h=new DataView(l.buffer),x=h.getUint16(4),P=h.getUint16(6);M(`[DoH查询] 收到响应 ${e} ${t} via ${n} (${l.length}字节, ${P}条应答)`);let E=L=>{let m=[],C=L,v=!1,_=-1,R=128;for(;C<l.length&&R-- >0;){let O=l[C];if(O===0){v||(_=C+1);break}if((O&192)===192){v||(_=C+2),C=(O&63)<<8|l[C+1],v=!0;continue}m.push(new TextDecoder().decode(l.slice(C+1,C+1+O))),C+=O+1}return _===-1&&(_=C+1),[m.join("."),_]},b=12;for(let L=0;L<x;L++){let[,m]=E(b);b=m+4}let U=[];for(let L=0;L<P&&b<l.length;L++){let[m,C]=E(b);b=C;let v=h.getUint16(b);b+=2,b+=2;let _=h.getUint32(b);b+=4;let R=h.getUint16(b);b+=2;let O=l.slice(b,b+R);b+=R;let $;if(v===1&&R===4)$=`${O[0]}.${O[1]}.${O[2]}.${O[3]}`;else if(v===28&&R===16){let B=[];for(let Y=0;Y<16;Y+=2)B.push((O[Y]<<8|O[Y+1]).toString(16));$=B.join(":")}else if(v===16){let B=0,Y=[];for(;B<R;){let X=O[B++];Y.push(new TextDecoder().decode(O.slice(B,B+X))),B+=X}$=Y.join("")}else if(v===5){let[B]=E(b-R);$=B}else $=Array.from(O).map(B=>B.toString(16).padStart(2,"0")).join("");U.push({name:m,type:v,TTL:_,data:$,rdata:O})}let A=(performance.now()-p).toFixed(2);M(`[DoH查询] 查询完成 ${e} ${t} via ${n} ${A}ms 共${U.length}条结果${U.length>0?`
`+U.map((L,m)=>`  ${m+1}. ${L.name} type=${L.type} TTL=${L.TTL} data=${L.data}`).join(`
`):""}`);let u=U.filter(L=>L.type===a),g=u.length>0?Math.min(...u.map(L=>L.TTL)):0,S=Math.max(g,300),I=Date.now()+S*1e3,k=u.map(L=>L.data);if(k.length>0||U.length===0){if(Object.keys(Xe).length>=Ur){let L=Date.now();for(let[m,C]of Object.entries(Xe))L>=C.过期时间&&delete Xe[m];Object.keys(Xe).length>=Ur&&delete Xe[Object.keys(Xe)[0]]}Xe[r]={data:k,过期时间:I},M(`[DoH查询] 写入缓存 ${e} ${t} TTL=${S}s${k.length===0?"（空结果）":""}`)}return U}catch(i){let d=(performance.now()-p).toFixed(2);return console.error(`[DoH查询] 查询失败 ${e} ${t} via ${n} ${d}ms:`,i),[]}}var Kn=new TextEncoder,ys=new TextDecoder,we=9999,Mn=new Uint8Array([33,18,164,66]),Le={ALLOCATE_REQUEST:3,ALLOCATE_SUCCESS:259,ALLOCATE_ERROR:275,CREATE_PERMISSION_REQUEST:8,CREATE_PERMISSION_SUCCESS:264,CONNECT_REQUEST:10,CONNECT_SUCCESS:266,CONNECTION_BIND_REQUEST:11,CONNECTION_BIND_SUCCESS:267},Ee={USERNAME:6,MESSAGE_INTEGRITY:8,ERROR_CODE:9,XOR_PEER_ADDRESS:18,REALM:20,NONCE:21,REQUESTED_TRANSPORT:25,CONNECTION_ID:42};async function xe(e,t,n){let s;try{return await Promise.race([e,new Promise((o,r)=>{s=setTimeout(()=>r(new Error(n)),t)})])}finally{clearTimeout(s)}}function $r(e){return-e&3}function ze(e,t){let n=G(t),s=new Uint8Array(4+n.byteLength+$r(n.byteLength)),o=new DataView(s.buffer);return o.setUint16(0,e),o.setUint16(2,n.byteLength),s.set(n,4),s}function rt(e,t,n){let s=ue(...n),o=new Uint8Array(20),r=new DataView(o.buffer);return r.setUint16(0,e),r.setUint16(2,s.byteLength),o.set(Mn,4),o.set(t,8),ue(o,s)}function Ir(e){return e?.byteLength>=4?(e[2]&7)*100+e[3]:0}function st(){return crypto.getRandomValues(new Uint8Array(12))}async function vr(e,t){let n=new Uint8Array(e),s=new DataView(n.buffer);s.setUint16(2,s.getUint16(2)+24);let o=await crypto.subtle.importKey("raw",t,{name:"HMAC",hash:"SHA-1"},!1,["sign"]),r=await crypto.subtle.sign("HMAC",o,n);return ue(n,ze(Ee.MESSAGE_INTEGRITY,new Uint8Array(r)))}async function Ut(e,t=null,n="TURN response timed out"){let s=le(t)?G(t):new Uint8Array(0),o=async()=>{let{done:p,value:i}=await xe(e.read(),we,n);if(p)throw new Error("TURN server closed connection");i?.byteLength&&(s=ue(s,i))};for(;s.byteLength<20;)await o();let r=20+(s[2]<<8|s[3]);if(r>65555)throw new Error("TURN response is too large");for(;s.byteLength<r;)await o();let a=s.subarray(0,r);if(Mn.some((p,i)=>a[4+i]!==p))throw new Error("Invalid TURN/STUN response");let c=new DataView(a.buffer,a.byteOffset,a.byteLength),f={};for(let p=20;p+4<=r;){let i=c.getUint16(p),d=c.getUint16(p+2);if(p+4+d>a.byteLength)break;f[i]=a.slice(p+4,p+4+d),p+=4+d+$r(d)}return{message:{type:c.getUint16(0),attributes:f},extraData:s.byteLength>r?s.subarray(r):null}}async function nn(e,t,n){await xe(e.write(t),we,n)}async function rn(e,t,n,s){e={...e,username:e.username??null,password:e.password??null};let o=Re(t),r=Ge(o)?o:null;if(!r){let x=(await Ne(o,"A")).find(P=>P.type===1&&Ge(P.data))?.data;r=typeof x=="string"?x:null}if(!r)throw new Error(`Could not resolve ${t} to an IPv4 address for TURN CONNECT`);let a=Re(e.hostname),c=null,f=null,p=null,i=null,d=null,T=null,y=!1,w=()=>{try{c?.close?.()}catch{}try{f?.close?.()}catch{}},l=()=>{if(!y){y=!0;try{T?.releaseLock?.()}catch{}}};try{c=s({hostname:a,port:e.port}),await xe(c.opened,we,"TURN server connection timed out"),p=c.writable.getWriter(),i=c.readable.getReader();let h=new Uint8Array(8);h[1]=1,new DataView(h.buffer).setUint16(2,n^8466),r.split(".").forEach((k,L)=>{h[4+L]=Number(k)^Mn[L]});let x=ze(Ee.XOR_PEER_ADDRESS,h),P=new Uint8Array([6,0,0,0]);await nn(p,rt(Le.ALLOCATE_REQUEST,st(),[ze(Ee.REQUESTED_TRANSPORT,P)]),"TURN Allocate request timed out");let E=await Ut(i,null,"TURN Allocate response timed out"),b=E.message,U=E.extraData,A=null,u=[],g=k=>A?vr(k,A):Promise.resolve(k);if(b.type===Le.ALLOCATE_ERROR&&e.username!==null&&e.password!==null&&Ir(b.attributes[Ee.ERROR_CODE])===401){let k=b.attributes[Ee.REALM],L=b.attributes[Ee.NONCE];if(!k||!L?.byteLength)throw new Error("TURN authentication challenge is missing realm or nonce");let m=ys.decode(k);A=new Uint8Array(await crypto.subtle.digest("MD5",Kn.encode(`${e.username}:${m}:${e.password}`))),u=[ze(Ee.USERNAME,Kn.encode(e.username)),ze(Ee.REALM,Kn.encode(m)),ze(Ee.NONCE,L)];let C=await vr(rt(Le.ALLOCATE_REQUEST,st(),[ze(Ee.REQUESTED_TRANSPORT,P),...u]),A),v=await Promise.all([g(rt(Le.CREATE_PERMISSION_REQUEST,st(),[x,...u])),g(rt(Le.CONNECT_REQUEST,st(),[x,...u]))]);await nn(p,ue(C,...v),"TURN authenticated Allocate request timed out"),E=await Ut(i,U,"TURN authenticated Allocate response timed out"),b=E.message,U=E.extraData}else if(b.type===Le.ALLOCATE_SUCCESS){let k=await Promise.all([g(rt(Le.CREATE_PERMISSION_REQUEST,st(),[x,...u])),g(rt(Le.CONNECT_REQUEST,st(),[x,...u]))]);k.length&&await nn(p,ue(...k),"TURN pipelined request timed out")}if(b.type!==Le.ALLOCATE_SUCCESS){let k=Ir(b.attributes[Ee.ERROR_CODE]);throw new Error(k?`TURN Allocate failed with ${k}`:"TURN Allocate failed")}if(f=s({hostname:a,port:e.port}),E=await Ut(i,U,"TURN CreatePermission response timed out"),b=E.message,U=E.extraData,b.type!==Le.CREATE_PERMISSION_SUCCESS)throw new Error("TURN CreatePermission failed");if(E=await Ut(i,U,"TURN CONNECT response timed out"),b=E.message,U=E.extraData,b.type!==Le.CONNECT_SUCCESS||!b.attributes[Ee.CONNECTION_ID])throw new Error("TURN CONNECT failed");await xe(f.opened,we,"TURN data connection timed out"),d=f.writable.getWriter(),T=f.readable.getReader(),await nn(d,await g(rt(Le.CONNECTION_BIND_REQUEST,st(),[ze(Ee.CONNECTION_ID,b.attributes[Ee.CONNECTION_ID]),...u])),"TURN ConnectionBind request timed out"),E=await Ut(T,null,"TURN ConnectionBind response timed out"),b=E.message;let S=E.extraData;if(b.type!==Le.CONNECTION_BIND_SUCCESS)throw new Error("TURN ConnectionBind failed");return p.releaseLock(),p=null,i.releaseLock(),i=null,d.releaseLock(),d=null,{readable:new ReadableStream({start(k){S?.byteLength&&k.enqueue(S)},pull(k){return T.read().then(({done:L,value:m})=>{L?(l(),k.close()):m?.byteLength&&k.enqueue(new Uint8Array(m))})},cancel(){try{T?.cancel?.()}catch{}l(),w()}}),writable:f.writable,closed:f.closed,close:w}}catch(h){try{p?.releaseLock?.()}catch{}try{i?.releaseLock?.()}catch{}try{d?.releaseLock?.()}catch{}throw l(),w(),h}}var Bn=new TextEncoder,ms=new TextDecoder,jn=1400,Wn=new Uint8Array(0);function ot(e,t=0){return e[t]<<8|e[t+1]}function Rr(e,t=0){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function _r(){return ot(crypto.getRandomValues(new Uint8Array(2)))}function Nr(e,t,n){let s=0;for(let o=t;o<t+n-1;o+=2)s+=ot(e,o);for(n&1&&(s+=e[t+n-1]<<8);s>>16;)s=(s&65535)+(s>>16);return~s&65535}async function sn(e,t,n,s){e={...e,username:e.username??null,password:e.password??null};let o=Wn,r=1,a=null,c=null,f=null,p=!1,i,d,T=new Promise((u,g)=>{i=u,d=g}),y=(u,g)=>{p||(p=!0,u(g))},w=()=>{try{c?.cancel?.().catch?.(()=>{})}catch{}try{c?.releaseLock?.()}catch{}try{f?.close?.().catch?.(()=>{})}catch{}try{f?.releaseLock?.()}catch{}try{a?.close?.()}catch{}y(i)},l=async()=>{let{value:u,done:g}=await c.read();if(g||!u)throw new Error("SSTP socket closed");return G(u)},h=async u=>{for(;o.byteLength<u;){let S=await l();o=o.byteLength?ue(o,S):S}let g=o.subarray(0,u);return o=o.subarray(u),g},x=async()=>{for(;;){let u=o.indexOf(10);if(u>=0){let S=ms.decode(o.subarray(0,u));return o=o.subarray(u+1),S.replace(/\r$/,"")}let g=await l();o=o.byteLength?ue(o,g):g}},P=async(u=we)=>{let g=await xe(h(4),u,"SSTP read timeout"),S=ot(g,2)&4095;if(S<4)throw new Error("Invalid SSTP packet length");return{isControl:(g[1]&1)!==0,body:S>4?await xe(h(S-4),u,"SSTP packet body read timeout"):Wn}},E=u=>{let g=6+u.byteLength,S=new Uint8Array(g);return S.set([16,0,g>>8&15|128,g&255,255,3]),S.set(u,6),S},b=(u,g,S,I=[])=>{let k=I.reduce((C,v)=>C+2+v.data.byteLength,0),L=new Uint8Array(6+k),m=new DataView(L.buffer);return m.setUint16(0,u),L[2]=g,L[3]=S,m.setUint16(4,4+k),I.reduce((C,v)=>(L[C]=v.type,L[C+1]=2+v.data.byteLength,L.set(v.data,C+2),C+2+v.data.byteLength),6),L},U=u=>{let g=u.byteLength>=2&&u[0]===255&&u[1]===3?2:0;if(u.byteLength-g<4)return null;let S=ot(u,g);return S===33?{protocol:S,ipPacket:u.subarray(g+2)}:u.byteLength-g<6?null:{protocol:S,code:u[g+2],id:u[g+3],payload:u.subarray(g+6),rawPacket:u.subarray(g)}},A=u=>{let g=[];for(let S=0;S+2<=u.byteLength;){let I=u[S],k=u[S+1];if(k<2||S+k>u.byteLength)break;g.push({type:I,data:u.subarray(S+2,S+k)}),S+=k}return g};try{let u=Re(e.hostname),g=e.port;a=s({hostname:u,port:g},{secureTransport:"on",allowHalfOpen:!1}),await xe(a.opened,we,"SSTP server connection timed out"),c=a.readable.getReader(),f=a.writable.getWriter();let S=u.includes(":")?`[${u}]`:u,I=Bn.encode(`SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1\r
Host: ${Number(g)===443?S:`${S}:${g}`}\r
Content-Length: 18446744073709551615\r
SSTPCORRELATIONID: {${crypto.randomUUID()}}\r
\r
`),k=new Uint8Array(2);new DataView(k.buffer).setUint16(0,1);let L=new Uint8Array(2);new DataView(L.buffer).setUint16(0,1500);let m=new Uint8Array(12+k.byteLength),C=new DataView(m.buffer);m[0]=16,m[1]=1,C.setUint16(2,m.byteLength|32768),C.setUint16(4,1),C.setUint16(6,1),m[9]=1,C.setUint16(10,4+k.byteLength),m.set(k,12),await xe(f.write(ue(I,m,E(b(49185,1,r++,[{type:1,data:L}])))),we,"SSTP HTTP handshake request timed out");let v=await xe(x(),we,"SSTP HTTP handshake timed out");for(;await xe(x(),we,"SSTP HTTP header read timed out")!=="";);if(!/HTTP\/\d(?:\.\d)?\s+2\d\d/i.test(v))throw new Error(`SSTP HTTP handshake failed: ${v||"invalid status"}`);let _=!1,R=!1,O=!1,$=!1,B=!1,Y=!1,X=!1,q=null,re=async()=>{if(!_||!R||!O||$)return;if(e.username===null||e.password===null)throw new Error("SSTP server requires PAP authentication");let W=Bn.encode(e.username),N=Bn.encode(e.password);if(W.byteLength>255||N.byteLength>255)throw new Error("SSTP username/password is too long");let H=6+W.byteLength+N.byteLength,F=new Uint8Array(2+H),Z=new DataView(F.buffer);Z.setUint16(0,49187),F[2]=1,F[3]=r++,Z.setUint16(4,H),F[6]=W.byteLength,F.set(W,7),F[7+W.byteLength]=N.byteLength,F.set(N,8+W.byteLength),await xe(f.write(E(F)),we,"SSTP PAP authentication request timed out"),$=!0},V=async()=>{!_||!R||Y||O&&!B||(await xe(f.write(E(b(32801,1,r++,[{type:3,data:new Uint8Array(4)}]))),we,"SSTP IPCP request timed out"),Y=!0)};for(let W=0;W<50&&!X;W++){let N=await P(we);if(N.isControl)continue;let H=U(N.body);if(H){if(H.protocol===49185){if(H.code===1){let F=A(H.payload).find(ye=>ye.type===3);if(F?.data?.byteLength>=2){let ye=ot(F.data);if(ye!==49187)throw new Error(`SSTP unsupported PPP authentication protocol: 0x${ye.toString(16)}`);O=!0}let Z=new Uint8Array(H.rawPacket);Z[2]=2,await xe(f.write(E(Z)),we,"SSTP LCP Configure-Ack timed out"),R=!0,await re(),await V()}else H.code===2&&(_=!0,await re(),await V());continue}if(H.protocol===49187){if(H.code===2)B=!0,await V();else if(H.code===3)throw new Error("SSTP PAP authentication failed");continue}if(H.protocol===32801){if(H.code===1){let F=new Uint8Array(H.rawPacket);F[2]=2,await xe(f.write(E(F)),we,"SSTP IPCP Configure-Ack timed out"),await V()}else if(H.code===3){let F=A(H.payload).find(Z=>Z.type===3);F?.data?.byteLength===4&&(q=[...F.data].join("."),await xe(f.write(E(b(32801,1,r++,[{type:3,data:F.data}]))),we,"SSTP IPCP address request timed out"),Y=!0)}else if(H.code===2){let F=A(H.payload).find(Z=>Z.type===3);F?.data?.byteLength===4&&(q=[...F.data].join(".")),X=!0}}}}if(!q)throw new Error("SSTP did not assign an IPv4 address");let Q=Re(t),oe=Ge(Q)?Q:null;if(!oe){let N=(await Ne(Q,"A")).find(H=>H.type===1&&Ge(H.data))?.data;oe=typeof N=="string"?N:null}if(!oe)throw new Error(`Could not resolve ${t} to an IPv4 address for SSTP`);let D=1e4+_r()%5e4,j=new Uint8Array(String(q||"").split(".").map(Number)),te=new Uint8Array(String(oe||"").split(".").map(Number)),ne=Rr(crypto.getRandomValues(new Uint8Array(4))),ae=0,K=new Uint8Array(20);K.set([69,0,0,0,0,0,64,0,64,6]),K.set(j,12),K.set(te,16);let pe=new Uint8Array(1432);pe.set(j),pe.set(te,4),pe[9]=6;let z=(W,N=Wn)=>{let H=G(N),F=H.byteLength,Z=20+F,ye=20+Z,ee=8+ye,fe=new Uint8Array(ee),be=new DataView(fe.buffer);return fe.set([16,0,ee>>8&15|128,ee&255,255,3,0,33]),fe.set(K,8),be.setUint16(10,ye),be.setUint16(12,_r()),be.setUint16(18,Nr(fe,8,20)),be.setUint16(28,D),be.setUint16(30,n),be.setUint32(32,ne),be.setUint32(36,ae),fe[40]=80,fe[41]=W,be.setUint16(42,65535),F&&fe.set(H,48),pe[10]=Z>>8,pe[11]=Z&255,pe.set(fe.subarray(28,28+Z),12),be.setUint16(44,Nr(pe,0,12+Z)),fe},ie=W=>{if(W.byteLength<40||W[9]!==6)return null;let N=(W[0]&15)*4;return W.byteLength<N+20||ot(W,N)!==n||ot(W,N+2)!==D?null:{flags:W[N+13],sequence:Rr(W,N+4),payloadOffset:N+(W[N+12]>>4&15)*4}};await xe(f.write(z(2)),we,"SSTP TCP SYN write timed out"),ne=ne+1>>>0;let de=!1;for(let W=0;W<30;W++){let N=await P(we);if(N.isControl)continue;let H=U(N.body);if(!H||H.protocol!==33)continue;let F=ie(H.ipPacket);if(!(!F||(F.flags&18)!==18)){ae=F.sequence+1>>>0,await xe(f.write(z(16)),we,"SSTP TCP ACK write timed out"),de=!0;break}}if(!de)throw new Error("TCP handshake through SSTP timed out");let ge=null,ce=new ReadableStream({start(W){ge=W},cancel(){w()}});(async()=>{try{let W=[],N=0,H=()=>{if(N){if(!ge)throw new Error("SSTP readable stream is not ready");ge.enqueue(W.length===1?W[0]:ue(...W)),W=[],N=0,f.write(z(16)).catch(()=>{})}};for(;;){let F=await P(6e4);if(F.isControl)continue;let Z=U(F.body);if(!Z||Z.protocol!==33)continue;let ye=ie(Z.ipPacket);if(ye){if(ye.payloadOffset<Z.ipPacket.byteLength){let ee=Z.ipPacket.subarray(ye.payloadOffset);ee.byteLength&&(ae=ye.sequence+ee.byteLength>>>0,W.push(new Uint8Array(ee)),N+=ee.byteLength)}if(ye.flags&1){H(),ae=ae+1>>>0,f.write(z(17)).catch(()=>{});let ee=ge;if(ee)try{ee.close()}catch{}w();return}(o.byteLength<4||N>=32768)&&H()}}}catch(W){let N=ge;if(N)try{N.error(W)}catch{}y(d,W);try{a?.close?.()}catch{}}})();let Te=new WritableStream({async write(W){let N=G(W);if(!N.byteLength)return;if(N.byteLength<=jn){await f.write(z(24,N)),ne=ne+N.byteLength>>>0;return}let H=[];for(let F=0;F<N.byteLength;F+=jn){let Z=N.subarray(F,Math.min(F+jn,N.byteLength));H.push(z(24,Z)),ne=ne+Z.byteLength>>>0}await f.write(ue(...H))},close(){return f.write(z(17)).catch(()=>{})},abort(W){w(),W&&y(d,W)}});return{readable:ce,writable:Te,closed:T,close:w}}catch(u){throw w(),u}}function wt({获取写入器:e,释放写入器:t,重试连接:n,关闭连接:s,名称:o="上行队列"}){let r=[],a=0,c=0,f=!1,p=!1,i=null,d=[],T=null,y=(A,u=null)=>{if(A)for(let g of A)u?g.reject(u):g.resolve()},w=A=>{for(let u=a;u<r.length;u++){let g=r[u];g?.completions&&y(g.completions,A)}},l=()=>{a>32&&a*2>=r.length&&(r=r.slice(a),a=0)},h=()=>{if(c||f||!d.length)return;let A=d;d=[];for(let u of A)u()},x=(A=null)=>{let u=A||(p?new Error(`${o}: queue closed`):null);u&&(w(u),y(T,u),T=null),r=[],a=0,c=0,h()},P=()=>{if(a>=r.length)return null;let A=r[a];return r[a++]=void 0,c-=A.chunk.byteLength,l(),A},E=()=>{let A=P();if(!A)return null;if(a>=r.length||A.chunk.byteLength>=Nt)return A;let u=A.chunk.byteLength,g=a,S=A.allowRetry,I=A.completions||null;for(;g<r.length;){let m=r[g],C=u+m.chunk.byteLength;if(C>Nt)break;u=C,S=S&&m.allowRetry,m.completions&&(I=I?I.concat(m.completions):m.completions),g++}if(g===a)return A;let k=i||=new Uint8Array(Nt);k.set(A.chunk);let L=A.chunk.byteLength;for(;a<g;){let m=r[a];r[a++]=void 0,c-=m.chunk.byteLength,k.set(m.chunk,L),L+=m.chunk.byteLength}return l(),{chunk:k.subarray(0,u),allowRetry:S,completions:I}},b=async()=>{if(!(f||p)){f=!0;try{for(;!p;){let A=E();if(!A)break;let u=e();if(!u)throw new Error(`${o}: remote writer unavailable`);let g=A.completions||null;T=g;try{try{await u.write(A.chunk)}catch(S){if(t?.(),!A.allowRetry||typeof n!="function"||(await n(),u=e(),!u))throw S;await u.write(A.chunk)}y(g)}catch(S){throw y(g,S),S}finally{T===g&&(T=null)}}}catch(A){p=!0,x(A),M(`[${o}] 写入失败: ${A?.message||A}`);try{s?.(A)}catch{}}finally{f=!1,!p&&a<r.length?queueMicrotask(b):h()}}},U=(A,u=!0,g=!1)=>{if(p||!e())return!1;let S=G(A);if(!S.byteLength)return!0;let I=c+S.byteLength,k=r.length-a+1;if(I>Ot||k>Dt){p=!0;let C=Object.assign(new Error(`${o}: upload queue overflow (${I}B/${k})`),{isQueueOverflow:!0});x(C),M(`[${o}] 队列超限，关闭连接`);try{s?.(C)}catch{}throw C}let L=null,m=null;return g&&(m=[],L=new Promise((C,v)=>m.push({resolve:C,reject:v}))),r.push({chunk:S,allowRetry:u,completions:m}),c=I,f||queueMicrotask(b),g?L.then(()=>!0):!0};return{写入(A,u=!0){return U(A,u,!1)},写入并等待(A,u=!0){return U(A,u,!0)},async 等待空(){!c&&!f||await new Promise(A=>d.push(A))},清空(){p=!0,x()}}}async function Or(e,t="dash.cloudflare.com",n="00000000-0000-4000-8000-000000000000"){e=e.toLowerCase();function s(w){let l=w,h=443;if(w.includes("]:")){let x=w.split("]:");l=x[0]+"]",h=parseInt(x[1],10)||h}else if((w.match(/:/g)||[]).length===1&&!w.startsWith("[")){let x=w.lastIndexOf(":");l=w.slice(0,x),h=parseInt(w.slice(x+1),10)||h}return[l,h]}function o(w){return w.flatMap(l=>(l.startsWith('"')&&l.endsWith('"')&&(l=l.slice(1,-1)),l.replace(/\\010/g,",").replace(/\n/g,",").split(",").map(h=>h.trim()).filter(Boolean))).map(l=>s(l))}let r=await $e(e),a=[],c=/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,f=/^\[?(?:[a-fA-F0-9]{0,4}:){1,7}[a-fA-F0-9]{0,4}\]?$/;for(let w of r){let[l,h]=s(w);if(w.includes(".tp")){let g=w.match(/\.tp(\d+)/);g&&(h=parseInt(g[1],10))}if(c.test(l)||f.test(l)){M(`[反代解析] ${l} 为IP地址，直接使用`),a.push([l,h]);continue}let[x,P]=await Promise.all([Ne(l,"TXT"),Ne(l,"A")]),E=x.filter(g=>g.type===16).map(g=>g.data),b=o(E);if(b.length>0){M(`[反代解析] ${l} 使用TXT记录，共${b.length}个结果`),a.push(...b);continue}let U=P.filter(g=>g.type===1).map(g=>g.data);if(U.length>0){M(`[反代解析] ${l} 未获取到TXT记录，使用A记录，共${U.length}个结果`),a.push(...U.map(g=>[g,h]));continue}let u=(await Ne(l,"AAAA")).filter(g=>g.type===28).map(g=>`[${g.data}]`);u.length>0?(M(`[反代解析] ${l} 未获取到TXT和A记录，使用AAAA记录，共${u.length}个结果`),a.push(...u.map(g=>[g,h]))):(M(`[反代解析] ${l} 未获取到TXT、A和AAAA记录，保留原域名`),a.push([l,h]))}let p=a.sort((w,l)=>w[0].localeCompare(l[0])),i=t.includes(".")?t.split(".").slice(-2).join("."):t,d=[...i+n].reduce((w,l)=>w+l.charCodeAt(0),0);M(`[反代解析] 随机种子: ${d}
目标站点: ${i}`);let y=[...p].sort(()=>(d=d*1103515245+12345&2147483647)/2147483647-.5).slice(0,8);return M(`[反代解析] 解析完成 总数: ${y.length}个
${y.map(([w,l],h)=>`${h+1}. ${w}:${l}`).join(`
`)}`),y}async function Ke(e,t,n,s,o,r,a,c=null,f={},p=!1,i=null){let d=f.反代IP||"",T=f.代理类型!==void 0?f.代理类型:null,y=f.代理全局!==void 0?f.代理全局:!1,w=f.代理参数||{},l=f.反代兜底!==void 0?f.反代兜底:!0,h=0;M(`[TCP转发] 目标: ${e}:${t} | 反代IP: ${d} | 反代兜底: ${l?"是":"否"} | 反代类型: ${T||"proxyip"} | 全局: ${y?"是":"否"}`);let x=1e3,P=!1,E=Qe(c),b=p&&(f.木马反代地址||null),U=b?f.木马反代地址:null,A=b?Dr(i,n):null;async function u(v,_=x){await Promise.race([v.opened,new Promise((R,O)=>setTimeout(()=>O(new Error("连接超时")),_))])}async function g(v,_){let R=E({hostname:v,port:_});try{return await u(R),R}catch(O){try{R?.close?.()}catch{}throw O}}async function S(v,_){if(le(_)<=0)return;let R=v.writable.getWriter();try{await R.write(G(_))}finally{try{R.releaseLock()}catch{}}}async function I(v){if(v.length===1){let O=v[0];return{socket:await g(O.hostname,O.port),candidate:O}}let _=v.map(O=>g(O.hostname,O.port).then($=>({socket:$,candidate:O}))),R=null;try{return R=await Promise.any(_),R}finally{if(R)for(let O of _)O.then(({socket:$})=>{if($!==R.socket)try{$?.close?.()}catch{}}).catch(()=>{})}}async function k(v,_){if(!Bt()||Fe(v))return null;M(`[TCP直连] 预加载竞速拨号开启，开始并发查询 ${v} 的 A/AAAA 记录`);let[R,O]=await Promise.all([Ne(v,"A"),Ne(v,"AAAA")]),$=[...new Set(R.flatMap(V=>{let Q=V.data;return V.type===1&&typeof Q=="string"&&Ge(Q)?[Q]:[]}))],B=[...new Set(O.flatMap(V=>{let Q=V.data;return V.type===28&&typeof Q=="string"&&Fe(Q)?[Q]:[]}))],Y=Math.max(1,ft()|0),X=$.length>=Y?$.slice(0,Y):$.concat(B.slice(0,Y-$.length)),q=$.length>0?X.length>$.length?"A+AAAA":"A":"AAAA";if(X.length===0)return M(`[TCP直连] ${v} 的 A/AAAA 未获得可用解析结果，预加载竞速不可用，回退到原始 hostname 直连。`),null;let re=X;return M(`[TCP直连] ${v} A记录:${$.length} AAAA记录:${B.length}，使用${q}记录，竞速拨号 ${re.length}/${Y}: ${re.join(", ")}`),re.map((V,Q)=>({hostname:V,port:_,attempt:Q,resolvedFrom:v}))}async function L(v,_,R=null,O=!1){let $=O?await k(v,_):null,B=$||Array.from({length:ft()},(X,q)=>({hostname:v,port:_,attempt:q}));M($?`[TCP直连] 并发尝试 ${B.length} 路: ${B.map(X=>`${X.hostname}:${X.port}`).join(", ")}`:`[TCP直连] 并发尝试 ${B.length} 路: ${v}:${_}`);let Y=null;try{let X=await I(B);if(Y=X.socket,$){let q=X.candidate;M(`[TCP直连] 预加载竞速结果: ${q.hostname}:${q.port} 胜出，源域名: ${q.resolvedFrom||v}`)}return await S(Y,R),Y}catch(X){try{Y?.close?.()}catch{}throw $&&M(`[TCP直连] 预加载竞速失败: ${X.message||X}`),X}}async function m(v,_,R=null,O=null,$=!0){if(O&&O.length>0){let B=Math.max(1,Math.floor(Number(Mt())||1));for(let Y=0;Y<O.length;Y+=B){let X=[];for(let V=0;V<B&&Y+V<O.length;V++){let Q=(h+Y+V)%O.length,[oe,D]=O[Q];X.push({hostname:oe,port:D,index:Q})}let q=null,re=null;try{M(`[反代连接] 并发尝试 ${X.length} 路: ${X.map(Q=>`${Q.hostname}:${Q.port}`).join(", ")}`);let V=await I(X);return q=V.socket,re=V.candidate,await S(q,R),M(`[反代连接] 成功连接到: ${re.hostname}:${re.port} (索引: ${re.index})`),h=re.index,q}catch(V){try{q?.close?.()}catch{}M(`[反代连接] 本批连接失败: ${V.message||V}`)}}}if($)return L(v,_,R,!1);throw me(s),new Error("[反代连接] 所有反代连接失败，且未启用反代兜底，连接终止。")}async function C(v=!0){if(r.connectingPromise){await r.connectingPromise;return}let _=!1,R=null;b?v&&!P&&le(i)>0?(R=i,_=le(n)>0):R=A:(_=v&&!P&&le(n)>0,R=_?n:null);let O=(async()=>{let $;if(b)M(`[木马反代] 代理到: ${e}:${t}`),$=await Fn(R,E,U);else if(T==="socks5")M(`[SOCKS5代理] 代理到: ${e}:${t}`),$=await Wt(e,t,R,E,w);else if(T==="http")M(`[HTTP代理] 代理到: ${e}:${t}`),$=await Et(e,t,R,!1,E,w);else if(T==="https")M(`[HTTPS代理] 代理到: ${e}:${t}`),$=Fe(w.hostname)?await tn(e,t,R,E,w):await Et(e,t,R,!0,E,w);else if(T==="turn"){if(M(`[TURN代理] 代理到: ${e}:${t}`),$=await rn(w,e,t,E),le(R)>0){let B=$.writable.getWriter();try{await B.write(G(R))}finally{try{B.releaseLock()}catch{}}}}else if(T==="sstp"){if(M(`[SSTP代理] 代理到: ${e}:${t}`),$=await sn(w,e,t,E),le(R)>0){let B=$.writable.getWriter();try{await B.write(G(R))}finally{try{B.releaseLock()}catch{}}}}else{M(`[反代连接] 代理到: ${e}:${t}`);let B=await Or(d,e,a);$=await m(`${Se[0]}.tp1.${Se[2]}.xyz`,1,R,B,l)}_&&(P=!0),r.socket=$,$.closed.catch(()=>{}).finally(()=>me(s)),Ct($,s,o,null)})();r.connectingPromise=O;try{await O}finally{r.connectingPromise===O&&(r.connectingPromise=null)}}if(r.retryConnect=async()=>C(!P),T&&(y||Je().some(v=>new RegExp(`^${v.replace(/\*/g,".*")}$`,"i").test(e)))){M("[TCP转发] 启用 SOCKS5/HTTP/HTTPS/TURN/SSTP 全局代理");try{await C()}catch(v){throw M(`[TCP转发] SOCKS5/HTTP/HTTPS/TURN/SSTP 代理连接失败: ${v.message}`),v}}else try{M(`[TCP转发] 尝试直连到: ${e}:${t}`);let v=await L(e,t,n,!0);r.socket=v,Ct(v,s,o,async()=>{r.socket===v&&await C()})}catch(v){if(M(`[TCP转发] 直连 ${e}:${t} 失败: ${v.message}`),v instanceof Error&&v.name==="预加载解析为空")throw me(s),v;await C()}}async function Oe(e,t,n,s,o=null){let r=G(e),a=r.byteLength;M(`[UDP转发] 收到 DNS 请求: ${a}B -> 8.8.4.4:53`);try{let f=Qe(s)({hostname:"8.8.4.4",port:53}),p=n,i=f.writable.getWriter();await i.write(r),M(`[UDP转发] DNS 请求已写入上游: ${a}B`),i.releaseLock(),await f.readable.pipeTo(new WritableStream({async write(d){let T=G(d);M(`[UDP转发] 收到 DNS 响应: ${T.byteLength}B`);let y=o?await o(T):T,w=Array.isArray(y)?y:[y];if(w.length&&t.readyState===WebSocket.OPEN)for(let l of w){let h=G(l);if(h.byteLength)if(p){let x=new Uint8Array(p.length+h.byteLength);x.set(p,0),x.set(h,p.length),await Ye(t,x.buffer),p=null}else await Ye(t,h)}}}))}catch(c){M(`[UDP转发] DNS 转发失败: ${c?.message||c}`)}}var ws=new TextDecoder;function Hr(e){let t=String(e||"").trim();if(!t||t.includes("/")||t.includes("@")||t.includes("://"))throw new Error("木马反代仅支持 host:port");let n="",s="";if(t.startsWith("[")){let r=t.match(/^(\[[^\]]+\]):(\d+)$/);if(!r)throw new Error("无效的 IPv6 木马反代地址");n=r[1],s=r[2]}else{let r=t.split(":");if(r.length!==2)throw new Error("木马反代仅支持 host:port");n=r[0],s=r[1]}let o=Number(s);if(!n||!Number.isInteger(o)||o<1||o>65535)throw new Error("无效的木马反代端口");return{hostname:n,port:o}}async function Fn(e,t,n){if(!n)throw new Error("trojan fallback is not configured");let s=t({hostname:Re(n.hostname),port:n.port}),o=null;try{return s.opened&&await s.opened,le(e)>0&&(o=s.writable.getWriter(),await o.write(G(e))),s}catch(r){try{s?.close?.()}catch{}throw r}finally{try{o?.releaseLock()}catch{}}}function Dr(e,t){let n=G(e),s=G(t);if(!s.byteLength)return n;let o=n.byteLength-s.byteLength;if(o<=0)return n;for(let r=0;r<s.byteLength;r++)if(n[o+r]!==s[r])return n;return n.subarray(0,o)}async function bs(e,t,n,s){let o=G(e);if(!n.反代Socket){let a=Qe(s),c=await Fn(o,a,n.反代地址);n.反代Socket=c,c.closed.catch(()=>{}).finally(()=>me(t)),Ct(c,t,null,null);return}if(!o.byteLength)return;let r=n.反代Socket.writable.getWriter();try{await r.write(o)}finally{try{r.releaseLock()}catch{}}}async function Ae(e,t,n,s){let o=G(e);if(n?.反代地址)return bs(o,t,n,s);let r=n?.缓存 instanceof Uint8Array?n.缓存:new Uint8Array(0),a=r.byteLength?ue(r,o):o,c=0;for(;c<a.byteLength;){let f=c,p=a[c],i=c+1,d=0;if(p===1)d=4;else if(p===4)d=16;else if(p===3){if(a.byteLength<i+1)break;d=1+a[i]}else throw new Error(`invalid trojan udp addressType: ${p}`);let T=i+d;if(a.byteLength<T+6)break;let y=a[T]<<8|a[T+1],w=a[T+2]<<8|a[T+3];if(a[T+4]!==13||a[T+5]!==10)throw new Error("invalid trojan udp delimiter");let l=T+6,h=l+w;if(a.byteLength<h)break;let x=a.slice(f,T+2),P=a.slice(l,h);if(c=h,y!==53)throw new Error("UDP is not supported");if(!P.byteLength)continue;let E=P;(P.byteLength<2||(P[0]<<8|P[1])!==P.byteLength-2)&&(E=new Uint8Array(P.byteLength+2),E[0]=P.byteLength>>>8&255,E[1]=P.byteLength&255,E.set(P,2));let b={缓存:new Uint8Array(0)};await Oe(E,t,null,s,U=>{let A=G(U),u=b.缓存.byteLength?ue(b.缓存,A):A,g=[],S=0;for(;S+2<=u.byteLength;){let I=u[S]<<8|u[S+1],k=S+2,L=k+I;if(L>u.byteLength)break;let m=u.slice(k,L),C=new Uint8Array(x.byteLength+4+m.byteLength);C.set(x,0),C[x.byteLength]=m.byteLength>>>8&255,C[x.byteLength+1]=m.byteLength&255,C[x.byteLength+2]=13,C[x.byteLength+3]=10,C.set(m,x.byteLength+4),g.push(C),S=L}return b.缓存=u.slice(S),g.length?g:new Uint8Array(0)})}n&&(n.缓存=a.slice(c))}function on(e,t){let n=G(e),s=ht(t);if(n.byteLength<58)return{hasError:!0,message:"invalid data"};let o=56;if(n[o]!==13||n[o+1]!==10)return{hasError:!0,message:"invalid header format"};for(let w=0;w<o;w++)if(n[w]!==s.charCodeAt(w))return{hasError:!0,message:"invalid password"};let r=o+2;if(n.byteLength<r+6)return{hasError:!0,message:"invalid S5 request data"};let a=n[r];if(a!==1&&a!==3)return{hasError:!0,message:"unsupported command, only TCP/UDP is allowed"};let c=a===3,f=n[r+1],p=0,i=r+2,d="";switch(f){case 1:if(p=4,n.byteLength<i+p+4)return{hasError:!0,message:"invalid S5 request data"};d=`${n[i]}.${n[i+1]}.${n[i+2]}.${n[i+3]}`;break;case 3:if(n.byteLength<i+1)return{hasError:!0,message:"invalid S5 request data"};if(p=n[i],i+=1,n.byteLength<i+p+4)return{hasError:!0,message:"invalid S5 request data"};d=ws.decode(n.subarray(i,i+p));break;case 4:if(p=16,n.byteLength<i+p+4)return{hasError:!0,message:"invalid S5 request data"};let w=[];for(let l=0;l<8;l++){let h=i+l*2;w.push((n[h]<<8|n[h+1]).toString(16))}d=w.join(":");break;default:return{hasError:!0,message:`invalid addressType is ${f}`}}if(!d)return{hasError:!0,message:`address is empty, addressType is ${f}`};let T=i+p;if(n.byteLength<T+4)return{hasError:!0,message:"invalid S5 request data"};let y=n[T]<<8|n[T+1];return{hasError:!1,addressType:f,port:y,hostname:d,isUDP:c,rawClientData:n.subarray(T+4)}}function an(e={}){let t=e.传输协议==="grpc";return{type:t?e.gRPC模式==="multi"?"grpc&mode=multi":"grpc&mode=gun":e.传输协议==="xhttp"?"xhttp&mode=stream-one":"ws",路径字段名:t?"serviceName":"path",域名字段名:t?"authority":"host"}}function cn(e={},t="/",n=!1){let s=n?"/":e.随机路径?pt(t):t;return e.传输协议!=="grpc"?s:s.split("?")[0]||"/"}async function Gn(e,t,n="",s=!0){let{searchParams:o}=e,r=decodeURIComponent(e.pathname),a=r.toLowerCase(),c=n,f=null,p=!1,i="",d={},T=s,y={木马反代地址:null,反代IP:c,代理类型:null,代理账号:"",代理全局:!1,代理参数:{},反代兜底:T},w=()=>{y.反代IP=c,y.代理类型=f,y.代理账号=i,y.代理全局=p,y.代理参数={...d},y.反代兜底=T},l=r.match(/\/video\/(.+)$/i);if(l)try{let U=dr(l[1],t),{type:A,...u}=JSON.parse(U);if(!A||!Kr[String(A).toLowerCase()])throw new Error("链式代理类型无效");if(!u.hostname||!u.port)throw new Error("链式代理地址缺少 hostname 或 port");if(i="",c="链式代理",T=!1,p=!0,f=String(A).toLowerCase(),d={username:u.username,password:u.password,hostname:u.hostname,port:Number(u.port)},isNaN(d.port))throw new Error("链式代理端口无效");return w(),y}catch(U){console.error("解析链式代理参数失败:",U.message)}i=o.get("socks5")||o.get("http")||o.get("https")||o.get("turn")||o.get("sstp")||null,p=o.has("globalproxy"),o.get("socks5")?f="socks5":o.get("http")?f="http":o.get("https")?f="https":o.get("turn")?f="turn":o.get("sstp")&&(f="sstp");let h=(U,A=!0)=>{let u=/^(socks5|http|https|turn|sstp):\/\/(.+)$/i.exec(U||"");return u?(f=u[1].toLowerCase(),i=u[2].split("/")[0],A&&(p=!0),!0):!1},x=U=>{c=U,f=null,T=!1},P=U=>{if(!U.includes("://")){let g=U.indexOf("/");return g>0?U.slice(0,g):U}let A=U.split("://");if(A.length!==2)return U;let u=A[1].indexOf("/");return u>0?`${A[0]}://${A[1].slice(0,u)}`:U},E=/\/trojan=([^?#\s]+)/i.exec(r);if(E)try{y.木马反代地址=Hr(E[1])}catch(U){console.error("解析木马反代地址失败:",U.message),y.木马反代地址=null}let b=o.get("proxyip");if(b!==null){if(!h(b))return x(b),w(),y}else{let U=/\/(socks5?|http|https|turn|sstp):\/?\/?([^/?#\s]+)/i.exec(r);if(U){let A=U[1].toLowerCase();f=A==="sock"||A==="socks"?"socks5":A,i=U[2].split("/")[0],p=!0}else if(U=/\/(g?s5|socks5|g?http|g?https|g?turn|g?sstp)=([^/?#\s]+)/i.exec(r)){let A=U[1].toLowerCase();i=U[2].split("/")[0],f=A.includes("sstp")?"sstp":A.includes("turn")?"turn":A.includes("https")?"https":A.includes("http")?"http":"socks5",A.startsWith("g")&&(p=!0)}else if(U=/\/(proxyip[.=]|pyip=|ip=)([^?#\s]+)/.exec(a)){let A=P(U[2]);if(!h(A))return x(A),w(),y}}if(!i)return f=null,w(),y;try{d=await vt(i,It(f)),o.get("socks5")?f="socks5":o.get("http")?f="http":o.get("https")?f="https":o.get("turn")?f="turn":o.get("sstp")?f="sstp":f=f||"socks5"}catch(U){console.error("解析SOCKS5地址失败:",U.message),f=null}return w(),y}var Kr={socks5:1080,http:80,https:443,turn:3478,sstp:443};function It(e){return Kr[String(e||"").toLowerCase()]||80}var Ss=/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i,xs=/^\[.*\]$/;function vt(e,t=80){e=String(e||"").trim().replace(/^(socks5|http|https|turn|sstp):\/\//i,"").split("#")[0].trim();let n=e.lastIndexOf("@");if(n!==-1){let i=e.slice(0,n).replaceAll("%3D","=");!i.includes(":")&&Ss.test(i)&&(i=atob(i)),e=`${i}@${e.slice(n+1)}`}let s=e.lastIndexOf("@"),o=(s===-1?e:e.slice(s+1)).split("/")[0],r=s===-1?"":e.slice(0,s),[a,c]=r?r.split(":"):[];if(r&&!c)throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');let f=o,p=t;if(o.includes("]:")){let[i,d=""]=o.split("]:");f=i+"]",p=Number(d.replace(/[^\d]/g,""))}else if(!o.startsWith("[")){let i=o.split(":");i.length===2&&(f=i[0],p=Number(i[1].replace(/[^\d]/g,"")))}if(isNaN(p))throw new Error("无效的 SOCKS 地址格式：端口号必须是数字");if(f.includes(":")&&!xs.test(f))throw new Error("无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]");return{username:a,password:c,hostname:f,port:p}}async function ln(e,t,n,s){let o="https://api.cloudflare.com/client/v4",r=c=>c?.reduce((f,p)=>f+(p?.sum?.requests||0),0)||0,a={"Content-Type":"application/json"};try{if(!n&&(!e||!t))return{success:!1,pages:0,workers:0,total:0,max:1e5};if(!n){let h=await fetch(`${o}/accounts`,{method:"GET",headers:{...a,"X-AUTH-EMAIL":e,"X-AUTH-KEY":t}});if(!h.ok)throw new Error(`账户获取失败: ${h.status}`);let x=await h.json();if(!x?.result?.length)throw new Error("未找到账户");let P=x.result.findIndex(E=>E.name?.toLowerCase().startsWith(e.toLowerCase()));n=x.result[P>=0?P:0]?.id}let c=new Date;c.setUTCHours(0,0,0,0);let f=s?{...a,Authorization:`Bearer ${s}`}:{...a,"X-AUTH-EMAIL":e,"X-AUTH-KEY":t},p=await fetch(`${o}/graphql`,{method:"POST",headers:f,body:JSON.stringify({query:`query getBillingMetrics($AccountID: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
					viewer { accounts(filter: {accountTag: $AccountID}) {
						pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) { sum { requests } }
						workersInvocationsAdaptive(limit: 10000, filter: $filter) { sum { requests } }
					} }
				}`,variables:{AccountID:n,filter:{datetime_geq:c.toISOString(),datetime_leq:new Date().toISOString()}}})});if(!p.ok)throw new Error(`查询失败: ${p.status}`);let i=await p.json();if(i.errors?.length)throw new Error(i.errors[0].message);let d=i?.data?.viewer?.accounts?.[0];if(!d)throw new Error("未找到账户数据");let T=r(d.pagesFunctionsInvocationsAdaptiveGroups),y=r(d.workersInvocationsAdaptive),w=T+y,l=1e5;return M(`统计结果 - Pages: ${T}, Workers: ${y}, 总计: ${w}, 上限: 100000`),{success:!0,pages:T,workers:y,total:w,max:l}}catch(c){return console.error("获取使用量错误:",c.message),{success:!1,pages:0,workers:0,total:0,max:1e5}}}async function fn(e,t,n,s="Mozilla/5.0",o=!1){let r,a=Se[0],c=t,f="https://dns.alidns.com/dns-query",p="cloudflare-ech.com",i="{{IP:PORT}}",d=performance.now(),T={TIME:new Date().toISOString(),HOST:c,HOSTS:[t],UUID:n,PATH:"/",协议类型:"vless",传输协议:"ws",gRPC模式:"gun",gRPCUserAgent:s,跳过证书验证:!1,启用0RTT:!1,TLS分片:null,随机路径:!1,ECH:!1,ECHConfig:{DNS:f,SNI:p},SS:{加密方式:"aes-128-gcm",TLS:!0},Fingerprint:"chrome",优选订阅生成:{local:!0,本地IP库:{随机IP:!0,随机数量:16,指定端口:-1},SUB:null,SUBNAME:"edgetunnel",SUBUpdateTime:3,TOKEN:await Pe(t+n)},订阅转换配置:{SUBAPI:`https://SUBAPI.${Se[1]}ssss.net`,SUBCONFIG:`https://raw.githubusercontent.com/${Se[1]}/ACL4SSR/refs/heads/main/Clash/config/ACL4SSR_Online_Mini_MultiMode_CF.ini`,SUBEMOJI:!1,SUBLIST:!1,UDP:!1,XUDP:!1,TLS13:!1,APPEND_TYPE:!1,SORT:!1},反代:{[a]:"auto",SOCKS5:{启用:null,全局:!1,账号:"",白名单:Je()},路径模板:{[a]:"proxyip="+i,SOCKS5:{全局:"socks5://"+i,标准:"socks5="+i},HTTP:{全局:"http://"+i,标准:"http="+i},HTTPS:{全局:"https://"+i,标准:"https="+i},TURN:{全局:"turn://"+i,标准:"turn="+i},SSTP:{全局:"sstp://"+i,标准:"sstp="+i}}},TG:{启用:!1,BotToken:null,ChatID:null},CF:{Email:null,GlobalAPIKey:null,AccountID:null,APIToken:null,UsageAPI:null,Usage:{success:!1,pages:0,workers:0,total:0,max:1e5}}};try{let m=await e.KV.get("config.json");!m||o==!0?(await e.KV.put("config.json",JSON.stringify(T,null,2)),r=T):r=JSON.parse(m)}catch(m){console.error(`读取config_JSON出错: ${m.message}`),r=T}r.订阅转换配置.SUBLIST||(r.订阅转换配置.SUBLIST=!1),r.订阅转换配置.UDP||(r.订阅转换配置.UDP=!1),r.订阅转换配置.XUDP||(r.订阅转换配置.XUDP=!1),r.订阅转换配置.TLS13||(r.订阅转换配置.TLS13=!1),r.订阅转换配置.APPEND_TYPE||(r.订阅转换配置.APPEND_TYPE=!1),r.订阅转换配置.SORT||(r.订阅转换配置.SORT=!1),r.gRPCUserAgent||(r.gRPCUserAgent=s),r.HOST=c,r.HOSTS||(r.HOSTS=[t]),e.HOST&&(r.HOSTS=(await $e(e.HOST)).map(m=>m.toLowerCase().replace(/^https?:\/\//,"").split("/")[0].split(":")[0])),r.UUID=n,r.随机路径||(r.随机路径=!1),r.启用0RTT||(r.启用0RTT=!1),e.PATH?r.PATH=e.PATH.startsWith("/")?e.PATH:"/"+e.PATH:r.PATH||(r.PATH="/"),r.gRPC模式||(r.gRPC模式="gun"),r.SS||(r.SS={加密方式:"aes-128-gcm",TLS:!1}),r.反代.路径模板?.[a]||(r.反代.路径模板={[a]:"proxyip="+i,SOCKS5:{全局:"socks5://"+i,标准:"socks5="+i},HTTP:{全局:"http://"+i,标准:"http="+i},HTTPS:{全局:"https://"+i,标准:"https="+i},TURN:{全局:"turn://"+i,标准:"turn="+i},SSTP:{全局:"sstp://"+i,标准:"sstp="+i}}),r.反代.路径模板.HTTPS||(r.反代.路径模板.HTTPS={全局:"https://"+i,标准:"https="+i}),r.反代.路径模板.TURN||(r.反代.路径模板.TURN={全局:"turn://"+i,标准:"turn="+i}),r.反代.路径模板.SSTP||(r.反代.路径模板.SSTP={全局:"sstp://"+i,标准:"sstp="+i});let y=r.反代.路径模板[r.反代.SOCKS5.启用?.toUpperCase()],w="";y&&r.反代.SOCKS5.账号?w=(r.反代.SOCKS5.全局?y.全局:y.标准).replace(i,r.反代.SOCKS5.账号):r.反代[a]!=="auto"&&(w=r.反代.路径模板[a].replace(i,r.反代[a]));let l="";if(w.includes("?")){let[m,C]=w.split("?");w=m,l=C}r.PATH=r.PATH.replace(w,"").replace("//","/");let h=r.PATH==="/"?"":r.PATH.replace(/\/+(?=\?|$)/,"").replace(/\/+$/,""),[x,...P]=h.split("?"),E=P.length?"?"+P.join("?"):"",b=l?E?E+"&"+l:"?"+l:E;r.完整节点路径=(x||"/")+(x&&w?"/":"")+w+b+(r.启用0RTT?(b?"&":"?")+"ed=2560":""),!r.TLS分片&&r.TLS分片!==null&&(r.TLS分片=null);let U=r.TLS分片=="Shadowrocket"?`&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}`:r.TLS分片=="Happ"?`&fragment=${encodeURIComponent("3,1,tlshello")}`:"";r.Fingerprint||(r.Fingerprint="chrome"),r.ECH||(r.ECH=!1),r.ECHConfig||(r.ECHConfig={DNS:f,SNI:p});let A=r.ECH?`&ech=${encodeURIComponent((r.ECHConfig.SNI?r.ECHConfig.SNI+"+":"")+r.ECHConfig.DNS)}`:"",{type:u,路径字段名:g,域名字段名:S}=an(r),I=cn(r,r.完整节点路径);r.LINK=r.协议类型==="ss"?`${r.协议类型}://${btoa(r.SS.加密方式+":"+n)}@${c}:${r.SS.TLS?"443":"80"}?plugin=v2${encodeURIComponent(`ray-plugin;mode=websocket;host=${c};path=${(r.完整节点路径.includes("?")?r.完整节点路径.replace("?","?enc="+r.SS.加密方式+"&"):r.完整节点路径+"?enc="+r.SS.加密方式)+(r.SS.TLS?";tls":"")};mux=0`)+A}#${encodeURIComponent(r.优选订阅生成.SUBNAME)}`:`${r.协议类型}://${n}@${c}:443?security=tls&type=${u+A}&${S}=${c}&fp=${r.Fingerprint}&sni=${c}&${g}=${encodeURIComponent(I)+U}&encryption=none#${encodeURIComponent(r.优选订阅生成.SUBNAME)}`,r.优选订阅生成.TOKEN=await Pe(t+n);let k={BotToken:null,ChatID:null};r.TG={启用:r.TG.启用?r.TG.启用:!1,...k};try{let m=await e.KV.get("tg.json");if(!m)await e.KV.put("tg.json",JSON.stringify(k,null,2));else{let C=JSON.parse(m);r.TG.ChatID=C.ChatID?C.ChatID:null,r.TG.BotToken=C.BotToken?St(C.BotToken):null}}catch(m){console.error(`读取tg.json出错: ${m.message}`)}let L={Email:null,GlobalAPIKey:null,AccountID:null,APIToken:null,UsageAPI:null};r.CF={...L,Usage:{success:!1,pages:0,workers:0,total:0,max:1e5}};try{let m=await e.KV.get("cf.json");if(!m)await e.KV.put("cf.json",JSON.stringify(L,null,2));else{let C=JSON.parse(m);if(C.UsageAPI)try{let _=await(await fetch(C.UsageAPI)).json();r.CF.Usage=_}catch(v){console.error(`请求 CF_JSON.UsageAPI 失败: ${v.message}`)}else{r.CF.Email=C.Email?C.Email:null,r.CF.GlobalAPIKey=C.GlobalAPIKey?St(C.GlobalAPIKey):null,r.CF.AccountID=C.AccountID?St(C.AccountID):null,r.CF.APIToken=C.APIToken?St(C.APIToken):null,r.CF.UsageAPI=null;let v=await ln(C.Email,C.GlobalAPIKey,C.AccountID,C.APIToken);r.CF.Usage=v}}}catch(m){console.error(`读取cf.json出错: ${m.message}`)}return r.加载时间=(performance.now()-d).toFixed(2)+"ms",r}async function je(e,t,n,s="Get_SUB",o,r=!0){try{let a=new Date,c={TYPE:s,IP:n,ASN:`AS${t.cf.asn||"0"} ${t.cf.asOrganization||"Unknown"}`,CC:`${t.cf.country||"N/A"} ${t.cf.city||"N/A"}`,URL:t.url,UA:t.headers.get("User-Agent")||"Unknown",TIME:a.getTime()};if(o.TG.启用)try{let d=await e.KV.get("tg.json"),T=JSON.parse(d);if(T?.BotToken&&T?.ChatID){let y=new Date(c.TIME).toLocaleString("zh-CN",{timeZone:"Asia/Shanghai"}),w=new URL(c.URL),l=`<b>#${o.优选订阅生成.SUBNAME} 日志通知</b>

📌 <b>类型：</b>#${c.TYPE}
🌐 <b>IP：</b><code>${c.IP}</code>
📍 <b>位置：</b>${c.CC}
🏢 <b>ASN：</b>${c.ASN}
🔗 <b>域名：</b><code>${w.host}</code>
🔍 <b>路径：</b><code>${w.pathname+w.search}</code>
🤖 <b>UA：</b><code>${c.UA}</code>
📅 <b>时间：</b>${y}
${o.CF.Usage.success?`📊 <b>请求用量：</b>${o.CF.Usage.total}/${o.CF.Usage.max} <b>${(o.CF.Usage.total/o.CF.Usage.max*100).toFixed(2)}%</b>
`:""}`;await fetch(`https://api.telegram.org/bot${T.BotToken}/sendMessage?chat_id=${T.ChatID}&parse_mode=HTML&text=${encodeURIComponent(l)}`,{method:"GET",headers:{Accept:"text/html,application/xhtml+xml,application/xml;","Accept-Encoding":"gzip, deflate, br","User-Agent":c.UA||"Unknown"}})}}catch(d){console.error(`读取tg.json出错: ${d.message}`)}if(r=["1","true"].includes(e.OFF_LOG)?!1:r,!r)return;let f=[],p=await e.KV.get("log.json"),i=4;if(p)try{if(f=JSON.parse(p),!Array.isArray(f))f=[c];else if(s!=="Get_SUB"){let d=a.getTime()-18e5;if(f.some(T=>T.TYPE!=="Get_SUB"&&T.IP===n&&T.URL===t.url&&T.UA===(t.headers.get("User-Agent")||"Unknown")&&T.TIME>=d))return;for(f.push(c);JSON.stringify(f,null,2).length>i*1024*1024&&f.length>0;)f.shift()}else for(f.push(c);JSON.stringify(f,null,2).length>i*1024*1024&&f.length>0;)f.shift()}catch{f=[c]}else f=[c];await e.KV.put("log.json",JSON.stringify(f,null,2))}catch(a){console.error(`日志记录失败: ${a.message}`)}}function Mr(e,t={}){let n=t?.UUID||null,s=!!t?.ECH,o=Array.isArray(t?.HOSTS)?[...t.HOSTS]:[],r=t?.ECHConfig?.SNI||null,a=t?.ECHConfig?.DNS,c=!!(n&&s),f=typeof t?.gRPCUserAgent=="string"&&t.gRPCUserAgent.trim()?t.gRPCUserAgent.trim():null,p=t?.传输协议==="grpc"&&!!f,i=f?JSON.stringify(f):null,d=e.replace(/mode:\s*Rule\b/g,"mode: rule"),T=`dns:
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
`,y=g=>g.replace(/grpc-opts:\s*\{([\s\S]*?)\}/i,(S,I)=>{if(/grpc-user-agent\s*:/i.test(I))return S;let k=I.trim();return k.endsWith(",")&&(k=k.slice(0,-1).trim()),`grpc-opts: {${k?`${k}, grpc-user-agent: ${i}`:`grpc-user-agent: ${i}`}}`}),w=g=>/(?:^|[,{])\s*network:\s*(?:"grpc"|'grpc'|grpc)(?=\s*(?:[,}\n#]|$))/mi.test(g),l=g=>g.match(/type:\s*(\w+)/)?.[1]||"vless",h=(g,S)=>{let I=l(g)==="trojan"?"password":"uuid",k=new RegExp(`${I}:\\s*${S?"([^,}\\n]+)":"([^\\n]+)"}`);return g.match(k)?.[1]?.trim()||null},x=(g,S)=>{if(/^\s{2}nameserver-policy:\s*(?:\n|$)/m.test(g))return g.replace(/^(\s{2}nameserver-policy:\s*\n)/m,`$1${S}
`);let I=g.split(`
`),k=-1,L=!1;for(let C=0;C<I.length;C++){let v=I[C];if(/^dns:\s*$/.test(v)){L=!0;continue}if(L&&/^[a-zA-Z]/.test(v)){k=C;break}}let m=`  nameserver-policy:
${S}`;return k!==-1?I.splice(k,0,m):I.push(m),I.join(`
`)},P=g=>!w(g)||/grpc-user-agent\s*:/i.test(g)?g:/grpc-opts:\s*\{/i.test(g)?y(g):g.replace(/\}(\s*)$/,`, grpc-opts: {grpc-user-agent: ${i}}}$1`),E=(g,S)=>{let I=" ".repeat(S),k=-1;for(let _=0;_<g.length;_++){let R=g[_];if(!(!R.trim()||R.search(/\S/)!==S)&&(/^\s*grpc-opts:\s*(?:#.*)?$/.test(R)||/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(R))){k=_;break}}if(k===-1){let _=-1;for(let R=g.length-1;R>=0;R--)if(g[R].trim()){_=R;break}return _>=0&&g.splice(_+1,0,`${I}grpc-opts:`,`${I}  grpc-user-agent: ${i}`),g}let L=g[k];if(/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(L))return/grpc-user-agent\s*:/i.test(L)||(g[k]=y(L)),g;let m=g.length,C=S+2,v=!1;for(let _=k+1;_<g.length;_++){let R=g[_],O=R.trim();if(!O)continue;let $=R.search(/\S/);if($<=S){m=_;break}if($>S&&C===S+2&&(C=$),/^grpc-user-agent\s*:/.test(O)){v=!0;break}}return v||g.splice(m,0,`${" ".repeat(C)}grpc-user-agent: ${i}`),g},b=(g,S)=>{let I=-1;for(let m=g.length-1;m>=0;m--)if(g[m].trim()){I=m;break}if(I<0)return g;let k=" ".repeat(S),L=[`${k}ech-opts:`,`${k}  enable: true`];return r&&L.push(`${k}  query-server-name: ${r}`),g.splice(I+1,0,...L),g};if(/^dns:\s*(?:\n|$)/m.test(d)||(d=T+d),r&&!o.includes(r)&&o.push(r),s&&o.length>0){let g=o.map(S=>`    "${S}": ${a||""}`).join(`
`);d=x(d,g)}if(!c&&!p)return d;let U=d.split(`
`),A=[],u=0;for(;u<U.length;){let g=U[u],S=g.trim();if(S.startsWith("- {")){let I=g,k=(g.match(/\{/g)||[]).length-(g.match(/\}/g)||[]).length;for(;k>0&&u+1<U.length;)u++,I+=`
`+U[u],k+=(U[u].match(/\{/g)||[]).length-(U[u].match(/\}/g)||[]).length;p&&(I=P(I)),c&&h(I,!0)===n.trim()&&(I=I.replace(/\}(\s*)$/,`, ech-opts: {enable: true${r?`, query-server-name: ${r}`:""}}}$1`)),A.push(I),u++}else if(S.startsWith("- name:")){let I=[g],k=g.search(/\S/),L=k+2;for(u++;u<U.length;){let C=U[u],v=C.trim();if(!v){I.push(C),u++;break}let _=C.search(/\S/);if(_<=k&&v.startsWith("- ")||_<k&&v)break;I.push(C),u++}let m=I.join(`
`);p&&w(m)&&(I=E(I,L),m=I.join(`
`)),c&&h(m,!1)===n.trim()&&(I=b(I,L)),A.push(...I)}else A.push(g),u++}return A.join(`
`)}async function Br(e,t={}){let n=t?.UUID||null,s=t?.Fingerprint||"chrome",o=!!t?.ECH,r=t?.ECHConfig?.SNI||"cloudflare-ech.com",a=e.replace("1.1.1.1","8.8.8.8").replace("1.0.0.1","8.8.4.4");try{let c=JSON.parse(a),f=l=>l==null?[]:Array.isArray(l)?l:[l],p=()=>c.route=c.route&&typeof c.route=="object"?c.route:{},i=l=>l&&typeof l=="object"&&!Array.isArray(l)&&typeof l.server=="string"?l.server:null,d=(l,h)=>{if(!h||typeof h!="string")return null;let x=p(),P=`${l}-${h}`,E=Array.isArray(x.rule_set)?x.rule_set:f(x.rule_set);if(!E.some(b=>b?.tag===P)){let b=l==="geoip"?x.geoip:x.geosite;E.push({tag:P,type:"remote",format:"binary",url:`https://raw.githubusercontent.com/SagerNet/sing-${l}/rule-set/${P}.srs`,...b?.download_detour?{download_detour:b.download_detour}:{}}),c.experimental=c.experimental&&typeof c.experimental=="object"?c.experimental:{},c.experimental.cache_file=c.experimental.cache_file&&typeof c.experimental.cache_file=="object"?c.experimental.cache_file:{},c.experimental.cache_file.enabled??=!0}return x.rule_set=E,P},T=l=>{if(!l||typeof l!="object"||Array.isArray(l))return l;if(l.type==="logical"&&Array.isArray(l.rules))return l.rules=l.rules.map(T),l;let h=[];for(let x of f(l.geoip))typeof x=="string"&&(x.toLowerCase()==="private"?l.ip_is_private=!0:h.push(d("geoip",x)));for(let x of f(l.source_geoip))typeof x=="string"&&(h.push(d("geoip",x)),l.rule_set_ip_cidr_match_source=!0);for(let x of f(l.geosite))typeof x=="string"&&h.push(d("geosite",x));return h.length&&(l.rule_set=[...new Set([...f(l.rule_set),...h].filter(Boolean))]),delete l.geoip,delete l.source_geoip,delete l.geosite,l},y=(l,h)=>{if(l=T(l),!l||typeof l!="object"||Array.isArray(l))return l;if(l.type==="logical"&&Array.isArray(l.rules))return l.rules=l.rules.map(P=>y(P,h)),l;let x=i(l);if(x&&h.has(x)){for(let P of["server","strategy","disable_cache","rewrite_ttl","client_subnet","timeout"])delete l[P];l.action="predefined",l.rcode=h.get(x)}else x&&!l.action&&(l.action="route");return l};if(Array.isArray(c.inbounds)){for(let l of c.inbounds)if(!(!l||typeof l!="object"||l.type!=="tun")){for(let h of[{targetKey:"address",sourceKeys:["inet4_address","inet6_address"]},{targetKey:"route_address",sourceKeys:["inet4_route_address","inet6_route_address"]},{targetKey:"route_exclude_address",sourceKeys:["inet4_route_exclude_address","inet6_route_exclude_address"]}]){let x=f(l[h.targetKey]);for(let P of h.sourceKeys)x.push(...f(l[P]));x.length&&(l[h.targetKey]=[...new Set(x)]);for(let P of h.sourceKeys)delete l[P]}if(l.tag){let h=[];if(l.domain_strategy&&h.push({inbound:l.tag,action:"resolve",strategy:l.domain_strategy}),l.sniff){let x={inbound:l.tag,action:"sniff"};l.sniff_timeout&&(x.timeout=l.sniff_timeout),h.push(x)}if(h.length){let x=p();x.rules=[...h,...f(x.rules)]}}delete l.sniff,delete l.sniff_timeout,delete l.domain_strategy}}if(c?.route&&typeof c.route=="object"&&Array.isArray(c.route.rules)){let l=h=>(h=T(h),h?.type==="logical"&&Array.isArray(h.rules)?h.rules=h.rules.map(l):h&&typeof h=="object"&&!Array.isArray(h)&&h.outbound&&!h.action&&(h.action="route"),h);c.route.rules=c.route.rules.map(l)}let w=c?.dns;if(w&&typeof w=="object"){let l=w.fakeip&&typeof w.fakeip=="object"?w.fakeip:null,h=new Map,x={"tcp:":"tcp","udp:":"udp","tls:":"tls","quic:":"quic","https:":"https","h3:":"h3"},P={success:"NOERROR",format_error:"FORMERR",server_failure:"SERVFAIL",name_error:"NXDOMAIN",not_implemented:"NOTIMP",refused:"REFUSED"},E=!1;if(Array.isArray(w.servers)){let b=[];for(let U of w.servers){if(!U||typeof U!="object"||Array.isArray(U)){b.push(U);continue}let A={...U},u=null,g="",S=typeof A.address=="string"?A.address.trim():"";if(S){let I=S.toLowerCase();if(I==="fakeip")u={type:"fakeip"};else if(I==="local")u={type:"local"};else if(I.startsWith("rcode://"))u={type:"rcode"},g=S.slice(8).toLowerCase();else if(I.startsWith("dhcp://")){let k=S.slice(7);u=k&&k.toLowerCase()!=="auto"?{type:"dhcp",interface:k}:{type:"dhcp"}}else{try{let k=new URL(S),L=x[k.protocol.toLowerCase()];if(L){let m=k.hostname?.startsWith("[")&&k.hostname.endsWith("]")?k.hostname.slice(1,-1):k.hostname;u={type:L,server:m||k.host||S,...k.port?{server_port:Number(k.port)}:{},...(L==="https"||L==="h3")&&k.pathname&&k.pathname!=="/dns-query"?{path:k.pathname}:{}}}}catch{}u||(u={type:"udp",server:S})}}if(u?.type==="rcode"){let I=P[g]||"NOERROR";typeof A.tag=="string"&&A.tag&&(h.set(A.tag,I),h.set(A.tag.startsWith("dns_")?A.tag.slice(4):`dns_${A.tag}`,I));continue}if(u&&(delete A.address,Object.assign(A,u)),A.address_resolver!==void 0&&A.domain_resolver===void 0&&(A.domain_resolver=A.address_resolver),A.address_strategy!==void 0&&A.domain_strategy===void 0&&(A.domain_strategy=A.address_strategy),delete A.address_resolver,delete A.address_strategy,A.detour==="DIRECT"&&delete A.detour,A.type==="fakeip"&&(E=!0,l))for(let I of["inet4_range","inet6_range"])l[I]!==void 0&&A[I]===void 0&&(A[I]=l[I]);b.push(A)}w.servers=b}if(l&&!E&&l.enabled!==!1){let b={type:"fakeip",tag:"fakeip"};for(let U of Array.isArray(w.rules)?w.rules:[]){let A=i(U);if(A&&A.toLowerCase().includes("fakeip")){b.tag=A;break}}for(let U of["inet4_range","inet6_range"])l[U]!==void 0&&(b[U]=l[U]);Array.isArray(w.servers)?w.servers.push(b):w.servers=[b]}if(Array.isArray(w.rules)){let b=[];for(let U of w.rules){let A=i(U),u=f(U?.outbound),g=new Set(["outbound","server","action","strategy","disable_cache","rewrite_ttl","client_subnet","timeout"]);if(U&&typeof U=="object"&&!Array.isArray(U)&&U.type!=="logical"&&A&&u.includes("any")&&Object.keys(U).every(I=>g.has(I))){let I=p();if(I.default_domain_resolver===void 0){let k={server:A};for(let L of["strategy","disable_cache","rewrite_ttl","client_subnet","timeout"])U[L]!==void 0&&(k[L]=U[L]);I.default_domain_resolver=Object.keys(k).length===1?k.server:k}continue}b.push(y(U,h))}w.rules=b}delete w.fakeip,delete w.independent_cache}if(c?.route&&typeof c.route=="object"&&(delete c.route.geoip,delete c.route.geosite),c?.ntp?.detour==="DIRECT"&&delete c.ntp.detour,Array.isArray(c.outbounds)){let l=new Set(c.outbounds.map(x=>x?.tag).filter(Boolean)),h=x=>x==="REJECT"||x&&typeof x=="object"&&(Array.isArray(x)?x.some(h):Object.values(x).some(h));!l.has("REJECT")&&h({outbounds:c.outbounds,route:c.route})&&c.outbounds.push({type:"block",tag:"REJECT"})}return n&&c.outbounds?.forEach(l=>{(l.uuid&&l.uuid===n||l.password&&l.password===n)&&(l.tls||(l.tls={enabled:!0}),s&&(l.tls.utls={enabled:!0,fingerprint:s}),o&&(l.tls.ech={enabled:!0,query_server_name:r}))}),JSON.stringify(c,null,2)}catch(c){return console.error("Singbox热补丁执行失败:",c),JSON.stringify(JSON.parse(a),null,2)}}function jr(e,t,n){let s=e.includes(`\r
`)?e.split(`\r
`):e.split(`
`),o=n.随机路径?pt(n.完整节点路径):n.完整节点路径,r="";for(let a of s)if(a.includes("= trojan,")&&!a.includes("ws=true")&&!a.includes("ws-path=")){let c=a.split("sni=")[1].split(",")[0],f=`sni=${c}, skip-cert-verify=${n.跳过证书验证}`,p=`sni=${c}, skip-cert-verify=${n.跳过证书验证}, ws=true, ws-path=${o.replace(/,/g,"%2C")}, ws-headers=Host:"${c}"`;r+=a.replace(new RegExp(f,"g"),p).replace("[","").replace("]","")+`
`}else r+=a+`
`;return r=`#!MANAGED-CONFIG ${t} interval=${n.优选订阅生成.SUBUpdateTime*60*60} strict=false`+r.substring(r.indexOf(`
`)),r}async function Wr(){return`<!DOCTYPE html>
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
`}async function Fr(e,t){let n=new Date,s=n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0")+" "+String(n.getHours()).padStart(2,"0")+":"+String(n.getMinutes()).padStart(2,"0")+":"+String(n.getSeconds()).padStart(2,"0"),o=Array.from(crypto.getRandomValues(new Uint8Array(8))).map(r=>r.toString(16).padStart(2,"0")).join("");return`<!DOCTYPE html>
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
                    <small class="heading-ray-id">Ray ID: ${o} &bull; ${s} UTC</small>
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
      <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold"> ${o}</strong></span>
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
</html>`}var un=new Map,$t=new TextDecoder;function Gr(e){return e>=48&&e<=57?e-48:(e|=32,e>=97&&e<=102?e-87:-1)}function Ts(e){let t=String(e||""),n=un.get(t);if(n)return n;let s=t.replace(/-/g,"");if(s.length!==32)return null;let o=new Uint8Array(16);for(let r=0;r<16;r++){let a=Gr(s.charCodeAt(r*2)),c=Gr(s.charCodeAt(r*2+1));if(a<0||c<0)return null;o[r]=a<<4|c}return un.size>=32&&un.clear(),un.set(t,o),o}function Rt(e,t,n){let s=Ts(n);if(!s||e.byteLength<t+16)return!1;for(let o=0;o<16;o++)if(e[t+o]!==s[o])return!1;return!0}function hn(e,t){let n=G(e),s=n.byteLength;if(s<24)return{hasError:!0,message:"Invalid data"};let o=n[0];if(!Rt(n,1,t))return{hasError:!0,message:"Invalid uuid"};let a=18+n[17];if(s<a+4)return{hasError:!0,message:"Invalid data"};let c=n[a],f=!1;if(c!==1)if(c===2)f=!0;else return{hasError:!0,message:"Invalid command"};let p=a+1,i=n[p]<<8|n[p+1],d=p+3,T=0,y="",w=n[p+2];switch(w){case 1:if(T=4,s<d+T)return{hasError:!0,message:"Invalid IPv4 address length"};y=`${n[d]}.${n[d+1]}.${n[d+2]}.${n[d+3]}`;break;case 2:if(s<d+1)return{hasError:!0,message:"Invalid domain length"};if(T=n[d],d+=1,s<d+T)return{hasError:!0,message:"Invalid domain data"};y=$t.decode(n.subarray(d,d+T));break;case 3:if(T=16,s<d+T)return{hasError:!0,message:"Invalid IPv6 address length"};let h=[];for(let x=0;x<8;x++){let P=d+x*2;h.push((n[P]<<8|n[P+1]).toString(16))}y=h.join(":");break;default:return{hasError:!0,message:`Invalid address type: ${w}`}}if(!y)return{hasError:!0,message:`Invalid address: ${w}`};let l=d+T;return{hasError:!1,addressType:w,port:i,hostname:y,isUDP:f,rawClientData:n.subarray(l),version:o}}var dn={"aes-128-gcm":{method:"aes-128-gcm",keyLen:16,saltLen:16,maxChunk:16383,aesLength:128},"aes-256-gcm":{method:"aes-256-gcm",keyLen:32,saltLen:32,maxChunk:16383,aesLength:256}},gn=16,yn=12,Cs=new TextEncoder().encode("ss-subkey"),Es=new TextEncoder,Yr=new TextDecoder,pn=new Map;function Vr(e){for(let t=0;t<e.length;t++)if(e[t]=e[t]+1&255,e[t]!==0)return}async function Yn(e,t){let n=`${t}:${e}`;if(pn.has(n))return pn.get(n);let s=(async()=>{let o=Es.encode(e||""),r=new Uint8Array(0),a=new Uint8Array(0);for(;a.byteLength<t;){let c=new Uint8Array(r.byteLength+o.byteLength);c.set(r,0),c.set(o,r.byteLength),r=new Uint8Array(await crypto.subtle.digest("MD5",c)),a=ue(a,r)}return a.slice(0,t)})();pn.set(n,s);try{return await s}catch(o){throw pn.delete(n),o}}async function Vn(e,t,n,s){let o={name:"HMAC",hash:"SHA-1"},r=await crypto.subtle.importKey("raw",n,o,!1,["sign"]),a=new Uint8Array(await crypto.subtle.sign("HMAC",r,t)),c=await crypto.subtle.importKey("raw",a,o,!1,["sign"]),f=new Uint8Array(e.keyLen),p=new Uint8Array(0),i=0,d=1;for(;i<e.keyLen;){let T=ue(p,Cs,new Uint8Array([d]));p=new Uint8Array(await crypto.subtle.sign("HMAC",c,T));let y=Math.min(p.byteLength,e.keyLen-i);f.set(p.subarray(0,y),i),i+=y,d+=1}return crypto.subtle.importKey("raw",f,{name:"AES-GCM",length:e.aesLength},!1,s)}async function Xn(e,t,n){let s=t.slice(),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:s,tagLength:128},e,n);return Vr(t),new Uint8Array(o)}async function mn(e,t,n){let s=t.slice(),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:s,tagLength:128},e,n);return Vr(t),new Uint8Array(o)}function Ps(e,t){if(!e?.byteLength)return!1;if(e.byteLength>=18&&Rt(e,1,t))return!0;if(e.byteLength<58||e[56]!==13||e[57]!==10)return!1;let n=ht(t);for(let s=0;s<56;s++)if(e[s]!==n.charCodeAt(s))return!1;return!0}function ks(e,t){if(!e)return null;if(e.length>Jn)throw new Error("early data is too large");let n,s=Uint8Array;if(typeof s.fromBase64=="function")try{n=s.fromBase64(e,{alphabet:"base64url"})}catch{}if(!n){let o=e.replace(/-/g,"+").replace(/_/g,"/"),r=o.length%4;r&&(o+="=".repeat(4-r));let a;try{a=atob(o)}catch{return null}n=new Uint8Array(a.length);for(let c=0;c<a.length;c++)n[c]=a.charCodeAt(c)}if(n.byteLength>8192)throw new Error("early data is too large");return Ps(n,t)?n:null}async function Xr(e,t,n,s={}){let o=new WebSocketPair,[r,a]=Object.values(o);try{a.accept({allowHalfOpen:!0})}catch{a.accept()}a.binaryType="arraybuffer";let c={socket:null,connectingPromise:null,retryConnect:null},f=!1,p=null,i={缓存:new Uint8Array(0),反代地址:s.木马反代地址},d=e.headers.get("sec-websocket-protocol")||"",T=!!n.searchParams.get("enc"),y=null,w=Promise.resolve(),l=!1,h=!1,x=!1,P=0,E=0,b=null,U=null,A=null,u=null,g=null,S=!1,I=null,k=new Uint8Array(0),L=null,m=64*1024,C=async()=>{if(!I)return;let D=L;L=null,await Ye(I,gr(D))},v=D=>{for(let j=0;j<=D.byteLength-4;j++)if(D[j]===13&&D[j+1]===10&&D[j+2]===13&&D[j+3]===10)return j+4;return-1},_=async D=>{let j=G(D);if(j.byteLength){if(k.byteLength+j.byteLength>m)throw new Error("WS local speed-test request is too large");for(k=ue(k,j);k.byteLength;){let te=v(k);if(te===-1)return;let ae=$t.decode(k.subarray(0,te)).match(/(?:^|\r\n)content-length\s*:\s*(\d+)/i),K=ae?Number(ae[1]):0,pe=te+K;if(!Number.isSafeInteger(K)||pe>m)throw new Error("WS local speed-test request body is too large");if(k.byteLength<pe)return;k=k.slice(pe),await C()}}},R=async(D,j=null,te=null)=>{S=!0,I=D,k=new Uint8Array(0),L=j,le(te)>0&&await _(te)},O=()=>{if(A){try{A.releaseLock()}catch{}A=null}U=null},$=y=wt({获取写入器:()=>{let D=c.socket;return D?(D!==U&&(O(),U=D,A=D.writable.getWriter()),A):null},释放写入器:O,重试连接:async()=>{if(typeof c.retryConnect!="function")throw new Error("retry unavailable");await c.retryConnect()},关闭连接:()=>{try{c.socket?.close()}catch{}me(a)},名称:"WS上行"}),B=async(D,j=!0)=>$.写入并等待(D,j),Y=async()=>u||(g||(g=(async()=>{let D=(n.searchParams.get("enc")||"").toLowerCase(),j=dn[D]||dn["aes-128-gcm"],te=[j,...Object.values(dn).filter(N=>N.method!==j.method)],ne=new Map,ae=N=>(ne.has(N.method)||ne.set(N.method,Yn(t,N.keyLen)),ne.get(N.method)),K={buffer:new Uint8Array(0),hasSalt:!1,waitPayloadLength:null,decryptKey:null,nonceCounter:new Uint8Array(yn),加密配置:null},pe=async()=>{let N=2+gn,H=Math.max(...te.map(ee=>ee.saltLen)),F=16,Z=Math.min(F,Math.max(0,K.buffer.byteLength-(N+Math.min(...te.map(ee=>ee.saltLen)))));for(let ee=0;ee<=Z;ee++)for(let fe of te){let be=ee+fe.saltLen+N;if(K.buffer.byteLength<be)continue;let De=K.buffer.subarray(ee,ee+fe.saltLen),ve=K.buffer.subarray(ee+fe.saltLen,be),_t=await ae(fe),at=await Vn(fe,_t,De,["decrypt"]),it=new Uint8Array(yn);try{let We=await mn(at,it,ve);if(We.byteLength!==2)continue;let ct=We[0]<<8|We[1];if(ct<0||ct>fe.maxChunk)continue;return ee>0&&M(`[SS入站] 检测到前导噪声 ${ee}B，已自动对齐`),fe.method!==j.method&&M(`[SS入站] URL enc=${D||j.method} 与实际 ${fe.method} 不一致，已自动切换`),K.buffer=K.buffer.subarray(be),K.decryptKey=at,K.nonceCounter=it,K.waitPayloadLength=ct,K.加密配置=fe,K.hasSalt=!0,!0}catch{}}let ye=H+N+F;if(K.buffer.byteLength>=ye)throw new Error(`SS handshake decrypt failed (enc=${D||"auto"}, candidates=${te.map(ee=>ee.method).join("/")})`);return!1},z={async 输入(N){let H=G(N);if(H.byteLength>0&&(K.buffer=ue(K.buffer,H)),!K.hasSalt&&!await pe())return[];let F=[];for(;;){if(K.waitPayloadLength===null){let fe=2+gn;if(K.buffer.byteLength<fe)break;let be=K.buffer.subarray(0,fe);K.buffer=K.buffer.subarray(fe);let De=await mn(K.decryptKey,K.nonceCounter,be);if(De.byteLength!==2)throw new Error("SS length decrypt failed");let ve=De[0]<<8|De[1];if(ve<0||ve>K.加密配置.maxChunk)throw new Error(`SS payload length invalid: ${ve}`);K.waitPayloadLength=ve}let Z=K.waitPayloadLength+gn;if(K.buffer.byteLength<Z)break;let ye=K.buffer.subarray(0,Z);K.buffer=K.buffer.subarray(Z);let ee=await mn(K.decryptKey,K.nonceCounter,ye);F.push(ee),K.waitPayloadLength=null}return F}},ie=null,de=32*1024,ge=async()=>{if(ie)return ie;if(!K.加密配置)throw new Error("SS cipher is not negotiated");let N=K.加密配置,H=await Yn(t,N.keyLen),F=crypto.getRandomValues(new Uint8Array(N.saltLen)),Z=await Vn(N,H,F,["encrypt"]),ye=new Uint8Array(yn),ee=!1;return ie={async 加密并发送(fe,be){let De=G(fe);if(ee||(await be(F),ee=!0),De.byteLength===0)return;let ve=0;for(;ve<De.byteLength;){let _t=Math.min(ve+N.maxChunk,De.byteLength),at=De.subarray(ve,_t),it=new Uint8Array(2);it[0]=at.byteLength>>>8&255,it[1]=at.byteLength&255;let We=await Xn(Z,ye,it),ct=await Xn(Z,ye,at),wn=new Uint8Array(We.byteLength+ct.byteLength);wn.set(We,0),wn.set(ct,We.byteLength),await be(wn),ve=_t}}},ie},ce=Promise.resolve(),Te=N=>(ce=ce.then(async()=>{if(a.readyState!==WebSocket.OPEN)return;await(await ge()).加密并发送(N,async F=>{F.byteLength>0&&a.readyState===WebSocket.OPEN&&await Ye(a,F.buffer)})}).catch(H=>{M(`[SS发送] 加密失败: ${H?.message||H}`),me(a)}),ce);return u={入站解密器:z,回包Socket:{get readyState(){return a.readyState},send(N){let H=G(N);if(H.byteLength<=de)return Te(H);for(let F=0;F<H.byteLength;F+=de)Te(H.subarray(F,Math.min(F+de,H.byteLength)));return ce},close(){me(a)}},首包已建立:!1,目标主机:"",目标端口:0},u})().finally(()=>{g=null})),g),X=async D=>{let j=await Y(),te=null;try{te=await j.入站解密器.输入(D)}catch(ne){let ae=ne?.message||`${ne}`;if(ae.includes("Decryption failed")||ae.includes("SS handshake decrypt failed")||ae.includes("SS length decrypt failed")){M(`[SS入站] 解密失败，连接关闭: ${ae}`),me(a);return}throw ne}for(let ne of te){if(S){await _(ne);continue}let ae=!1;try{ae=await B(ne,!1)}catch(ce){if(ce?.isQueueOverflow)throw ce;ae=!1}if(ae)continue;if(j.首包已建立&&j.目标主机&&j.目标端口>0){await Ke(j.目标主机,j.目标端口,ne,j.回包Socket,null,c,t,e,s);continue}let K=G(ne);if(K.byteLength<3)throw new Error("invalid ss data");let pe=K[0],z=1,ie="";if(pe===1){if(K.byteLength<z+4+2)throw new Error("invalid ss ipv4 length");ie=`${K[z]}.${K[z+1]}.${K[z+2]}.${K[z+3]}`,z+=4}else if(pe===3){if(K.byteLength<z+1)throw new Error("invalid ss domain length");let ce=K[z];if(z+=1,K.byteLength<z+ce+2)throw new Error("invalid ss domain data");ie=Yr.decode(K.subarray(z,z+ce)),z+=ce}else if(pe===4){if(K.byteLength<z+16+2)throw new Error("invalid ss ipv6 length");let ce=[],Te=new DataView(K.buffer,K.byteOffset+z,16);for(let W=0;W<8;W++)ce.push(Te.getUint16(W*2).toString(16));ie=ce.join(":"),z+=16}else throw new Error(`invalid ss addressType: ${pe}`);if(!ie)throw new Error(`invalid ss address: ${pe}`);let de=K[z]<<8|K[z+1];z+=2;let ge=K.subarray(z);if(Me(ie)){await R(j.回包Socket,null,ge);return}j.首包已建立=!0,j.目标主机=ie,j.目标端口=de,await Ke(ie,de,ge,j.回包Socket,null,c,t,e,s)}},q=async D=>{let j=null;if(f)return p?await Ae(D,a,i,e):await Oe(D,a,null,e);if(b==="ss"){await X(D);return}if(S){await _(D);return}if(!await B(D)){if(b===null){if(n.searchParams.get("enc"))b="ss";else{j=j||G(D);let te=j;b=te.byteLength>=58&&te[56]===13&&te[57]===10?"木马":"魏烈思"}p=b==="木马",M(`[WS转发] 协议类型: ${b} | 来自: ${n.host} | UA: ${e.headers.get("user-agent")||"未知"}`)}if(b==="ss"){await X(D);return}if(!await B(D))if(b==="木马"){let te=on(D,t);if(te?.hasError)throw new Error(te.message||"Invalid trojan request");let{port:ne,hostname:ae,rawClientData:K,isUDP:pe}=te;if(Me(ae)){await R(a,null,K);return}if(pe)return f=!0,i.目标主机=ae,i.目标端口=ne,i.反代地址?Ae(j||G(D),a,i,e):le(K)>0?Ae(K,a,i,e):void 0;await Ke(ae,ne,K,a,null,c,t,e,s,!0,j||G(D))}else{p=!1,j=j||G(D);let ne=hn(j,t);if(ne?.hasError)throw new Error(ne.message||"Invalid 魏烈思 request");let{port:ae,hostname:K,version:pe,isUDP:z,rawClientData:ie}=ne,de=new Uint8Array([pe,0]);if(Me(K)){await R(a,de,ie);return}if(z)if(ae===53)f=!0;else throw new Error("UDP is not supported");let ge=ie;if(f)return p?Ae(ge,a,i,e):Oe(ge,a,de,e);await Ke(K,ae,ge,a,de,c,t,e,s)}}},re=D=>{if(h)return;h=!0,l=!0,P=0,E=0;let j=D?.message||`${D}`;j.includes("Network connection lost")||j.includes("ReadableStream is closed")?M(`[WS转发] 连接结束: ${j}`):M(`[WS转发] 处理失败: ${j}`),$.清空(),O();try{i.反代Socket?.close()}catch{}me(a)},V=D=>(w=w.then(D).catch(re),w),Q=D=>{if(l||h)return;let j=Math.max(0,le(D)),te=P+j,ne=E+1;if(te>Ot||ne>Dt){re(new Error(`[WS显式传输] 队列溢出: ${te}B/${ne}`));return}P=te,E=ne,V(async()=>{P=Math.max(0,P-j),E=Math.max(0,E-1),!h&&await q(D)})},oe=()=>{x||(x=!0,l=!0,V(async()=>{if(!h){await $.等待空(),O();try{i.反代Socket?.close()}catch{}}}))};if(a.addEventListener("message",D=>{Q(D.data)}),a.addEventListener("close",()=>{me(a),oe()}),a.addEventListener("error",D=>{re(D)}),!T&&d)try{let D=ks(d,t);D?.byteLength&&Q(D.buffer)}catch(D){re(D)}return new Response(null,{status:101,webSocket:r,headers:{"Sec-WebSocket-Extensions":""}})}async function zr(e,t,n={}){if(!e.body)return new Response("Bad Request",{status:400});let s=e.body.getReader(),o={socket:null,connectingPromise:null,retryConnect:null},r=!1,a={缓存:new Uint8Array(0),反代地址:n.木马反代地址},c=null,f=null,p=null,i=null,d=new Headers({"Content-Type":"application/grpc","grpc-status":"0","X-Accel-Buffering":"no","Cache-Control":"no-store"}),T=lt,y=Math.max(Ht,1);return new Response(new ReadableStream({async start(w){let l=!1,h=[],x=0,P=null,E=!1,b={readyState:WebSocket.OPEN,send(L){if(l)return;let m=L instanceof Uint8Array?L:new Uint8Array(L),C=[],v=m.byteLength>>>0;for(;v>127;)C.push(v&127|128),v>>>=7;C.push(v);let _=new Uint8Array(C),R=1+_.length+m.byteLength,O=new Uint8Array(5+R);O[0]=0,O[1]=R>>>24&255,O[2]=R>>>16&255,O[3]=R>>>8&255,O[4]=R&255,O[5]=10,O.set(_,6),O.set(m,6+_.length),h.push(O),x+=O.byteLength,A()},close(){if(this.readyState!==WebSocket.CLOSED){U(!0),l=!0,this.readyState=WebSocket.CLOSED;try{w.close()}catch{}}}},U=(L=!1)=>{if(E=!1,P&&(clearTimeout(P),P=null),!L&&l||x===0)return;let m=new Uint8Array(x),C=0;for(let v of h)m.set(v,C),C+=v.byteLength;h=[],x=0;try{w.enqueue(m)}catch{l=!0,b.readyState=WebSocket.CLOSED}},A=()=>{if(x>=T){U();return}E||P||(E=!0,queueMicrotask(()=>{E=!1,!(l||x===0||P)&&(P=setTimeout(U,y))}))},u=()=>{if(!l){if(i?.清空(),U(!0),l=!0,b.readyState=WebSocket.CLOSED,P&&clearTimeout(P),p){try{p.releaseLock()}catch{}p=null}f=null;try{s.releaseLock()}catch{}try{o.socket?.close()}catch{}try{a.反代Socket?.close()}catch{}try{w.close()}catch{}}},g=()=>{if(p){try{p.releaseLock()}catch{}p=null}f=null},S=i=wt({获取写入器:()=>{let L=o.socket;return L?(L!==f&&(g(),f=L,p=L.writable.getWriter()),p):null},释放写入器:g,重试连接:async()=>{if(typeof o.retryConnect!="function")throw new Error("retry unavailable");await o.retryConnect()},关闭连接:u,名称:"gRPC上行"}),I=async(L,m=!0)=>S.写入并等待(L,m),k=!1;try{let L=new Uint8Array(0);for(;;){let{done:m,value:C}=await s.read();if(m)break;if(!C||C.byteLength===0)continue;let v=C instanceof Uint8Array?C:new Uint8Array(C),_=new Uint8Array(L.length+v.length);for(_.set(L,0),_.set(v,L.length),L=_;L.byteLength>=5;){let O=5+(L[1]<<24>>>0|L[2]<<16|L[3]<<8|L[4]);if(L.byteLength<O)break;let $=L.subarray(5,O);if(L=L.slice(O),!$.byteLength)continue;let B=$;if(B.byteLength>=2&&B[0]===10){let Y=0,X=1,q=!1;for(;X<B.length;){if((B[X++]&128)===0){q=!0;break}if(Y+=7,Y>35)break}q&&(B=B.subarray(X))}if(B.byteLength){if(r){c?await Ae(B,b,a,e):await Oe(B,b,null,e);continue}if(o.socket){if(!await I(B))throw new Error("Remote socket is not ready")}else{let Y=G(B);if(c===null&&(c=Y.byteLength>=58&&Y[56]===13&&Y[57]===10),c){let X=on(Y,t);if(X?.hasError)throw new Error(X.message||"Invalid trojan request");let{port:q,hostname:re,rawClientData:V,isUDP:Q}=X;if(M(`[gRPC] 木马首包: ${re}:${q} | UDP: ${Q?"是":"否"}`),Me(re)){b.send(Tt());return}Q?(r=!0,a.目标主机=re,a.目标端口=q,a.反代地址?await Ae(Y,b,a,e):le(V)>0&&await Ae(V,b,a,e)):await Ke(re,q,V,b,null,o,t,e,n,!0,Y)}else{c=!1;let X=hn(Y,t);if(X?.hasError)throw new Error(X.message||"Invalid 魏烈思 request");let{port:q,hostname:re,version:V,isUDP:Q,rawClientData:oe}=X;M(`[gRPC] 魏烈思首包: ${re}:${q} | UDP: ${Q?"是":"否"}`);let D=new Uint8Array([V,0]);if(Me(re)){b.send(Tt(D));return}if(Q){if(q!==53)throw new Error("UDP is not supported");r=!0}b.send(D);let j=oe;r?c?await Ae(j,b,a,e):await Oe(j,b,null,e):await Ke(re,q,j,b,null,o,t,e,n)}}}}U()}await S.等待空()}catch(L){k=!0,M(`[gRPC转发] 处理失败: ${L?.message||L}`)}finally{if(!k&&r&&c&&a.反代地址&&a.反代Socket){S.清空(),g();try{s.releaseLock()}catch{}}else u()}},cancel(){i?.清空();try{o.socket?.close()}catch{}try{a.反代Socket?.close()}catch{}try{s.releaseLock()}catch{}}}),{status:200,headers:d})}async function Jr(e,t,n={}){if(!e.body)return new Response("Bad Request",{status:400});let s=e.body.getReader(),o=await Ls(s,t);if(!o){try{s.releaseLock()}catch{}return new Response("Invalid request",{status:400})}if(Me(o.hostname)){try{s.releaseLock()}catch{}return new Response(Tt(o.respHeader),{status:200,headers:{"Content-Type":"application/octet-stream","X-Accel-Buffering":"no","Cache-Control":"no-store"}})}if(o.isUDP&&o.协议!=="trojan"&&o.port!==53){try{s.releaseLock()}catch{}return new Response("UDP is not supported",{status:400})}let r={socket:null,connectingPromise:null,retryConnect:null},a=null,c=null,f=new Headers({"Content-Type":"application/octet-stream","X-Accel-Buffering":"no","Cache-Control":"no-store"}),p=()=>{if(c){try{c.releaseLock()}catch{}c=null}a=null},i=()=>{let y=r.socket;return y?(y!==a&&(p(),a=y,c=y.writable.getWriter()),c):null},d=null,T={缓存:new Uint8Array(0),反代地址:n.木马反代地址};return new Response(new ReadableStream({async start(y){let w=!1,l=o.respHeader,h={readyState:WebSocket.OPEN,send(b){if(!w)try{let U=b instanceof Uint8Array?b:b instanceof ArrayBuffer?new Uint8Array(b):ArrayBuffer.isView(b)?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(b);y.enqueue(U)}catch{w=!0,this.readyState=WebSocket.CLOSED}},close(){if(!w){w=!0,this.readyState=WebSocket.CLOSED;try{y.close()}catch{}}}},x=d=wt({获取写入器:i,释放写入器:p,重试连接:async()=>{if(typeof r.retryConnect!="function")throw new Error("retry unavailable");await r.retryConnect()},关闭连接:()=>{try{r.socket?.close()}catch{}me(h)},名称:"XHTTP上行"}),P=async(b,U=!0)=>x.写入并等待(b,U),E=!1;try{for(o.isUDP?(o.协议==="trojan"&&(T.目标主机=o.hostname,T.目标端口=o.port,T.反代地址&&await Ae(o.原始数据,h,T,e)),!(o.协议==="trojan"&&T.反代地址)&&o.rawData?.byteLength&&(o.协议==="trojan"?await Ae(o.rawData,h,T,e):await Oe(o.rawData,h,l,e),l=null)):await Ke(o.hostname,o.port,o.rawData,h,o.respHeader,r,t,e,n,o.协议==="trojan",o.原始数据);;){let{done:b,value:U}=await s.read();if(b)break;if(!(!U||U.byteLength===0)){if(o.isUDP)o.协议==="trojan"?await Ae(U,h,T,e):await Oe(U,h,l,e),l=null;else if(!await P(U))throw new Error("Remote socket is not ready")}}if(!o.isUDP){await x.等待空();let b=i();if(b)try{await b.close()}catch{}}}catch(b){E=!0,M(`[XHTTP转发] 处理失败: ${b?.message||b}`),me(h)}finally{let b=!E&&o.isUDP&&o.协议==="trojan"&&T.反代地址&&T.反代Socket;if(x.清空(),p(),!b)try{T.反代Socket?.close()}catch{}try{s.releaseLock()}catch{}}},cancel(){d?.清空();try{r.socket?.close()}catch{}try{T.反代Socket?.close()}catch{}p();try{s.releaseLock()}catch{}}}),{status:200,headers:f})}async function Ls(e,t){let n=$t,s=i=>{let d=i.byteLength;if(d<18)return{状态:"need_more"};if(!Rt(i,1,t))return{状态:"invalid"};let y=18+i[17];if(d<y+1)return{状态:"need_more"};let w=i[y];if(w!==1&&w!==2)return{状态:"invalid"};let l=y+1;if(d<l+3)return{状态:"need_more"};let h=i[l]<<8|i[l+1],x=i[l+2],P=l+3,E=-1,b="";if(x===1){if(d<P+4)return{状态:"need_more"};b=`${i[P]}.${i[P+1]}.${i[P+2]}.${i[P+3]}`,E=P+4}else if(x===2){if(d<P+1)return{状态:"need_more"};let U=i[P];if(d<P+1+U)return{状态:"need_more"};b=n.decode(i.subarray(P+1,P+1+U)),E=P+1+U}else if(x===3){if(d<P+16)return{状态:"need_more"};let U=[];for(let A=0;A<8;A++){let u=P+A*2;U.push((i[u]<<8|i[u+1]).toString(16))}b=U.join(":"),E=P+16}else return{状态:"invalid"};return b?{状态:"ok",结果:{协议:"vless",hostname:b,port:h,isUDP:w===2,rawData:i.subarray(E),respHeader:new Uint8Array([i[0],0]),原始数据:null}}:{状态:"invalid"}},o=i=>{let d=ht(t),T=new TextEncoder().encode(d),y=i.byteLength;if(y<58)return{状态:"need_more"};if(i[56]!==13||i[57]!==10)return{状态:"invalid"};for(let A=0;A<56;A++)if(i[A]!==T[A])return{状态:"invalid"};let w=58;if(y<w+2)return{状态:"need_more"};let l=i[w];if(l!==1&&l!==3)return{状态:"invalid"};let h=l===3,x=i[w+1],P=w+2,E="";if(x===1){if(y<P+4)return{状态:"need_more"};E=`${i[P]}.${i[P+1]}.${i[P+2]}.${i[P+3]}`,P+=4}else if(x===3){if(y<P+1)return{状态:"need_more"};let A=i[P];if(y<P+1+A)return{状态:"need_more"};E=n.decode(i.subarray(P+1,P+1+A)),P+=1+A}else if(x===4){if(y<P+16)return{状态:"need_more"};let A=[];for(let u=0;u<8;u++){let g=P+u*2;A.push((i[g]<<8|i[g+1]).toString(16))}E=A.join(":"),P+=16}else return{状态:"invalid"};if(!E)return{状态:"invalid"};if(y<P+4)return{状态:"need_more"};let b=i[P]<<8|i[P+1];if(i[P+2]!==13||i[P+3]!==10)return{状态:"invalid"};let U=P+4;return{状态:"ok",结果:{协议:"trojan",hostname:E,port:b,isUDP:h,rawData:i.subarray(U),原始数据:i,respHeader:null}}},r=new Uint8Array(1024),a=0;for(;;){let{value:i,done:d}=await e.read();if(d){if(a===0)return null;break}let T=i instanceof Uint8Array?i:new Uint8Array(i);if(a+T.byteLength>r.byteLength){let h=new Uint8Array(Math.max(r.byteLength*2,a+T.byteLength));h.set(r.subarray(0,a)),r=h}r.set(T,a),a+=T.byteLength;let y=r.subarray(0,a),w=o(y);if(w.状态==="ok")return{...w.结果,reader:e};let l=s(y);if(l.状态==="ok")return{...l.结果,reader:e};if(w.状态==="invalid"&&l.状态==="invalid")return null}let c=r.subarray(0,a),f=o(c);if(f.状态==="ok")return{...f.结果,reader:e};let p=s(c);return p.状态==="ok"?{...p.结果,reader:e}:null}async function Qr(e,t){let n=["socks5","http","https","turn","sstp"].find(a=>t.searchParams.has(a))||null;if(!n)return new Response(JSON.stringify({error:"缺少代理参数"}),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}});let s=t.searchParams.get(n),o=Date.now(),r;try{let a=await vt(s,It(n)),{username:c,password:f,hostname:p,port:i}=a,d=c&&f?`${c}:${f}@${p}:${i}`:`${p}:${i}`;try{let T="cloudflare.com",w=new TextEncoder,l=new TextDecoder,h=Qe(e),x=null,P=null;try{if(x=n==="socks5"?await Wt(T,443,new Uint8Array(0),h,a):n==="turn"?await rn(a,T,443,h):n==="sstp"?await sn(a,T,443,h):n==="https"&&Fe(p)?await tn(T,443,new Uint8Array(0),h,a):await Et(T,443,new Uint8Array(0),n==="https",h,a),!x)throw new Error("无法连接到代理服务器");P=new mt(x,{serverName:T,insecure:!0}),await P.handshake(),await P.write(w.encode(`GET /cdn-cgi/trace HTTP/1.1\r
Host: ${T}\r
User-Agent: Mozilla/5.0\r
Connection: close\r
\r
`));let E=new Uint8Array(0),b=-1,U=null,A=!1,u=64*1024;for(;E.length<u;){let k=await P.read();if(!k)break;if(k.byteLength!==0){if(E=ue(E,k),b===-1){let L=E.findIndex((m,C)=>C<E.length-3&&E[C]===13&&E[C+1]===10&&E[C+2]===13&&E[C+3]===10);if(L!==-1){b=L+4;let m=l.decode(E.slice(0,b)),C=m.split(`\r
`)[0]||"",v=C.match(/HTTP\/\d\.\d\s+(\d+)/),_=v?parseInt(v[1],10):NaN;if(!Number.isFinite(_)||_<200||_>=300)throw new Error(`代理检测请求失败: ${C||"无效响应"}`);let R=m.match(/\r\nContent-Length:\s*(\d+)/i);R&&(U=parseInt(R[1],10)),A=/\r\nTransfer-Encoding:\s*chunked/i.test(m)}}if(b!==-1&&U!==null&&E.length>=b+U||b!==-1&&A&&l.decode(E).includes(`\r
0\r
\r
`))break}}if(b===-1)throw new Error("代理检测响应头过长或无效");let g=l.decode(E),S=g.match(/(?:^|\n)ip=(.*)/)?.[1],I=g.match(/(?:^|\n)loc=(.*)/)?.[1];if(!S||!I)throw new Error("代理检测响应无效");r={success:!0,proxy:n+"://"+d,ip:S,loc:I,responseTime:Date.now()-o}}finally{try{P?P.close():await x?.close?.()}catch{}}}catch(T){r={success:!1,error:T.message,proxy:n+"://"+d,responseTime:Date.now()-o}}}catch(a){r={success:!1,error:a.message,proxy:n+"://"+s,responseTime:Date.now()-o}}return new Response(JSON.stringify(r,null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}var uc={async fetch(e,t,n){let s=e.url.replace(/%5[Cc]/g,"").replace(/\\/g,""),o=s.indexOf("#"),r=o===-1?s:s.slice(0,o);if(!r.includes("?")&&/%3f/i.test(r)){let S=o===-1?"":s.slice(o);s=r.replace(/%3f/i,"?")+S}let a=new URL(s),c=e.headers.get("User-Agent")||"null",f=(e.headers.get("Upgrade")||"").toLowerCase(),p=(e.headers.get("content-type")||"").toLowerCase(),i=t.ADMIN||t.admin||t.PASSWORD||t.password||t.pswd||t.TOKEN,d=typeof i=="string"?i.replace(/[\r\n]/g,"").trim():i??"";if(!d)return new Response(JSON.stringify({error:"ADMIN_REQUIRED",message:"请设置环境变量 ADMIN（或 PASSWORD / TOKEN 等密码类变量）作为管理面板登录口令。不可再用 KEY/UUID 顶替。"}),{status:503,headers:{"Content-Type":"application/json;charset=utf-8","Cache-Control":"no-store"}});let T="勿动此默认密钥，有需求请自行通过添加变量KEY进行修改",y=typeof t.KEY=="string"?t.KEY.trim():"";if(!y||y===T||y.length<16)return new Response(JSON.stringify({error:"KEY_REQUIRED",message:"请设置环境变量 KEY：随机字符串，长度至少 16，且勿使用源码中的默认提示文案。未设置 KEY 时服务拒绝启动。"}),{status:503,headers:{"Content-Type":"application/json;charset=utf-8","Cache-Control":"no-store"}});let w=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,l=t.UUID||t.uuid,{userID:h,userIDMD5:x}=await fr(`${d??""}\0${y}\0${l??""}`,async()=>{let S=await Pe(d+y);return{userID:l&&w.test(l)?l.toLowerCase():[S.slice(0,8),S.slice(8,12),"4"+S.slice(13,16),"8"+S.slice(17,20),S.slice(20)].join("-"),userIDMD5:S}}),E=(t.HOST?await ur(t.HOST,async()=>(await $e(t.HOST)).map(S=>S.toLowerCase().replace(/^https?:\/\//,"").split("/")[0].split(":")[0])):[a.hostname])[0],b=a.pathname.slice(1).toLowerCase();ir(["1","true"].includes(t.DEBUG)||Kt()),lr(["1","true"].includes(t.PRELOAD_RACE_DIAL)||Bt()),cr(Math.max(1,Number(t.PROXY_CONCURRENT_DIAL)||Mt())),Cn(Math.max(1,Number(t.TCP_CONCURRENT_DIAL)||ft())),!t.TCP_CONCURRENT_DIAL&&ft()!==1&&xt(e)==="cmcc"&&Cn(1);let U=`${e.cf.colo}.${Se[0]}.${Se[1]}SsSs.nEt`.toLowerCase(),A=!0;if(t.PROXYIP){let S=await $e(t.PROXYIP);U=S[Math.floor(Math.random()*S.length)],A=!1}let u=e.headers.get("CF-Connecting-IP")||e.headers.get("True-Client-IP")||e.headers.get("X-Real-IP")||e.headers.get("X-Forwarded-For")||e.headers.get("Fly-Client-IP")||e.headers.get("X-Appengine-Remote-Addr")||e.headers.get("X-Cluster-Client-IP")||"未知IP";if(xn()===null?(t.GO2SOCKS5&&Tn([...new Set(Je().concat(await $e(t.GO2SOCKS5)))]),ar(Je())):Tn(xn()),b==="version"){let S=(a.searchParams.get("uuid")||"").toLowerCase();if(w.test(S)){let I=String(h).toLowerCase(),k=0,L=0;for(let m=0;m<8;m++){let C=S.charCodeAt(m);k+=C<=57?C-48:C-87;let v=I.charCodeAt(m);L+=v<=57?v-48:v-87}if(k===L&&S.slice(-12)===I.slice(-12))return new Response(JSON.stringify({Version:Number(String(zn).replace(/\D+/g,""))}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}}else if(d&&f==="websocket"){let S=await Gn(a,h,U,A);return M(`[WebSocket] 命中请求: ${a.pathname}${a.search}`),await Xr(e,h,a,S)}else if(d&&!b.startsWith("admin/")&&b!=="login"&&e.method==="POST"){let S=await Gn(a,h,U,A),I=e.headers.get("Referer")||"";return!(I.includes("x_padding",14)||I.includes("x_padding="))&&p.startsWith("application/grpc")?(M(`[gRPC] 命中请求: ${a.pathname}${a.search}`),await zr(e,h,S)):(M(`[XHTTP] 命中请求: ${a.pathname}${a.search}`),await Jr(e,h,S))}else{if(a.protocol==="http:")return Response.redirect(a.href.replace(`http://${a.hostname}`,`https://${a.hostname}`),301);if(!d)return fetch(bt+"/noADMIN").then(S=>{let I=new Headers(S.headers);return I.set("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate"),I.set("Pragma","no-cache"),I.set("Expires","0"),new Response(S.body,{status:404,statusText:S.statusText,headers:I})});if(t.KV&&typeof t.KV.get=="function"){let S=a.pathname.slice(1);if(S===y){let I=new URLSearchParams(a.search);return I.set("token",await Pe(E+h)),new Response("重定向中...",{status:302,headers:{Location:`/sub?${I.toString()}`}})}else if(b==="login"){if((e.headers.get("Cookie")||"").split(";").find(L=>L.trim().startsWith("auth="))?.split("=")[1]===await Pe(c+y+d))return new Response("重定向中...",{status:302,headers:{Location:"/admin"}});if(e.method==="POST"){let L=await e.text();if(new URLSearchParams(L).get("password")===d){let v=new Response(JSON.stringify({success:!0}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}});return v.headers.set("Set-Cookie",`auth=${await Pe(c+y+d)}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`),v}}return fetch(bt+"/login")}else if(b==="admin"||b.startsWith("admin/")){let k=(e.headers.get("Cookie")||"").split(";").find(m=>m.trim().startsWith("auth="))?.split("=")[1];if(!k||k!==await Pe(c+y+d))return new Response("重定向中...",{status:302,headers:{Location:"/login"}});if(b==="admin/log.json"){let m=await t.KV.get("log.json")||"[]";return new Response(m,{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(S==="admin/getCloudflareUsage")try{let m=await ln(a.searchParams.get("Email"),a.searchParams.get("GlobalAPIKey"),a.searchParams.get("AccountID"),a.searchParams.get("APIToken"));return new Response(JSON.stringify(m,null,2),{status:200,headers:{"Content-Type":"application/json"}})}catch(m){let C={msg:"查询请求量失败，失败原因："+m.message,error:m.message};return new Response(JSON.stringify(C,null,2),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(S==="admin/getADDAPI"){if(a.searchParams.get("url")){let m=a.searchParams.get("url");try{new URL(m);let C=await kn([m],a.searchParams.get("port")||"443"),v=C[0].length>0?C[0]:C[1];return v=v.map(_=>_.replace(/#(.+)$/,(R,O)=>"#"+decodeURIComponent(O))),new Response(JSON.stringify({success:!0,data:v},null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(C){let v={msg:"验证优选API失败，失败原因："+C.message,error:C.message};return new Response(JSON.stringify(v,null,2),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}}return new Response(JSON.stringify({success:!1,data:[]},null,2),{status:403,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(b==="admin/check")return await Qr(e,a);let L=await fn(t,E,h,c);if(b==="admin/init")try{L=await fn(t,E,h,c,!0),n.waitUntil(je(t,e,u,"Init_Config",L));let m={...L,init:"配置已重置为默认值"};return new Response(JSON.stringify(m,null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(m){let C={msg:"配置重置失败，失败原因："+m.message,error:m.message};return new Response(JSON.stringify(C,null,2),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(e.method==="POST")if(b==="admin/config.json")try{let m=await e.json();return!m.UUID||!m.HOST?new Response(JSON.stringify({error:"配置不完整"}),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}}):(await t.KV.put("config.json",JSON.stringify(m,null,2)),n.waitUntil(je(t,e,u,"Save_Config",L)),new Response(JSON.stringify({success:!0,message:"配置已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}}))}catch(m){return console.error("保存配置失败:",m),new Response(JSON.stringify({error:"保存配置失败: "+m.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(b==="admin/cf.json")try{let m=await e.json(),C={Email:null,GlobalAPIKey:null,AccountID:null,APIToken:null,UsageAPI:null};if(!m.init||m.init!==!0)if(m.Email&&m.GlobalAPIKey)C.Email=m.Email,C.GlobalAPIKey=m.GlobalAPIKey;else if(m.AccountID&&m.APIToken)C.AccountID=m.AccountID,C.APIToken=m.APIToken;else if(m.UsageAPI)C.UsageAPI=m.UsageAPI;else return new Response(JSON.stringify({error:"配置不完整"}),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}});return await t.KV.put("cf.json",JSON.stringify(C,null,2)),n.waitUntil(je(t,e,u,"Save_Config",L)),new Response(JSON.stringify({success:!0,message:"配置已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(m){return console.error("保存配置失败:",m),new Response(JSON.stringify({error:"保存配置失败: "+m.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(b==="admin/tg.json")try{let m=await e.json();if(m.init&&m.init===!0){let C={BotToken:null,ChatID:null};await t.KV.put("tg.json",JSON.stringify(C,null,2))}else{if(!m.BotToken||!m.ChatID)return new Response(JSON.stringify({error:"配置不完整"}),{status:400,headers:{"Content-Type":"application/json;charset=utf-8"}});await t.KV.put("tg.json",JSON.stringify(m,null,2))}return n.waitUntil(je(t,e,u,"Save_Config",L)),new Response(JSON.stringify({success:!0,message:"配置已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(m){return console.error("保存配置失败:",m),new Response(JSON.stringify({error:"保存配置失败: "+m.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else if(S==="admin/ADD.txt")try{let m=await e.text();return await t.KV.put("ADD.txt",m),n.waitUntil(je(t,e,u,"Save_Custom_IPs",L)),new Response(JSON.stringify({success:!0,message:"自定义IP已保存"}),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}catch(m){return console.error("保存自定义IP失败:",m),new Response(JSON.stringify({error:"保存自定义IP失败: "+m.message}),{status:500,headers:{"Content-Type":"application/json;charset=utf-8"}})}else return new Response(JSON.stringify({error:"不支持的POST请求路径"}),{status:404,headers:{"Content-Type":"application/json;charset=utf-8"}});else{if(b==="admin/config.json")return new Response(JSON.stringify(L,null,2),{status:200,headers:{"Content-Type":"application/json"}});if(S==="admin/ADD.txt"){let m=await t.KV.get("ADD.txt")||"null";return m==="null"&&(m=(await jt(e,L.优选订阅生成.本地IP库.随机数量,L.优选订阅生成.本地IP库.指定端口))[1]),new Response(m,{status:200,headers:{"Content-Type":"text/plain;charset=utf-8",asn:e.cf.asn}})}else if(b==="admin/cf.json")return new Response(JSON.stringify(e.cf,null,2),{status:200,headers:{"Content-Type":"application/json;charset=utf-8"}})}return n.waitUntil(je(t,e,u,"Admin_Login",L)),fetch(bt+"/admin"+a.search)}else if(b==="logout"||w.test(b)){let I=new Response("重定向中...",{status:302,headers:{Location:"/login"}});return I.headers.set("Set-Cookie","auth=; Path=/; Max-Age=0; HttpOnly"),I}else if(b==="sub"){let I=await Pe(E+h),k=["1","true"].includes(t.BEST_SUB)&&a.searchParams.get("host")==="example.com"&&a.searchParams.get("uuid")==="00000000-0000-4000-8000-000000000000"&&c.toLowerCase().includes("tunnel (https://github.com/"+Se[1]+"/edge)"),L=a.searchParams.get("token"),m=L===I,C=Math.floor(Date.now()/864e5),v=En(I,h),[_,R]=await Promise.all([Pe(v+C),Pe(v+(C-1))]);if(m||(L===_||L===R)||k){let $=await fn(t,E,h,c);k?n.waitUntil(je(t,e,u,"Get_Best_SUB",$,!1)):n.waitUntil(je(t,e,u,"Get_SUB",$));let B=c.toLowerCase(),Y={"content-type":"text/plain; charset=utf-8","Profile-Update-Interval":$.优选订阅生成.SUBUpdateTime,"Profile-web-page-url":a.protocol+"//"+a.host+"/admin","Cache-Control":"no-store"};if($.CF.Usage.success){let Q=$.CF.Usage.pages,oe=$.CF.Usage.workers,D=Number.isFinite($.CF.Usage.max)?$.CF.Usage.max/1e3*1024:1024*100;Y["Subscription-Userinfo"]=`upload=${Q}; download=${oe}; total=${D}; expire=4102329600`}let X=a.searchParams.has("b64")||a.searchParams.has("base64")||e.headers.get("subconverter-request")||e.headers.get("subconverter-version")||B.includes("subconverter")||B.includes("CF-Workers-SUB".toLowerCase())||k,q=X?"mixed":a.searchParams.has("target")?a.searchParams.get("target"):a.searchParams.has("clash")||B.includes("clash")||B.includes("meta")||B.includes("mihomo")?"clash":a.searchParams.has("sb")||a.searchParams.has("singbox")||B.includes("singbox")||B.includes("sing-box")?"singbox":a.searchParams.has("surge")||B.includes("surge")?"surge&ver=4":a.searchParams.has("quanx")||B.includes("quantumult")?"quanx":a.searchParams.has("loon")||B.includes("loon")?"loon":"mixed";B.includes("mozilla")||(Y["Content-Disposition"]=`attachment; filename*=utf-8''${encodeURIComponent($.优选订阅生成.SUBNAME)}`);let re=(a.searchParams.has("surge")||B.includes("surge"))&&$.协议类型!=="ss"?"trojan":$.协议类型,V="";if(q==="mixed"){let Q=$.TLS分片=="Shadowrocket"?`&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}`:$.TLS分片=="Happ"?`&fragment=${encodeURIComponent("3,1,tlshello")}`:"",oe=[],D="",j=[];if(!a.searchParams.has("sub")&&$.优选订阅生成.local){let z=$.优选订阅生成.本地IP库.随机IP?(await jt(e,$.优选订阅生成.本地IP库.随机数量,$.优选订阅生成.本地IP库.指定端口))[0]:await t.KV.get("ADD.txt")?await $e(await t.KV.get("ADD.txt")):(await jt(e,$.优选订阅生成.本地IP库.随机数量,$.优选订阅生成.本地IP库.指定端口))[0],ie=[],de=[],ge=[];for(let N of z)if(N.toLowerCase().startsWith("sub://"))ie.push(N);else{let H=N.indexOf("#"),F=H>-1?N.slice(0,H):N,Z=H>-1?N.slice(H):"",ye=N.match(/sub\s*=\s*([^\s&#]+)/i);if(ye&&ye[1].trim().includes("."))N.toLowerCase().includes("proxyip=true")?ie.push("sub://"+ye[1].trim()+"?proxyip=true"+(N.includes("#")?"#"+N.split("#")[1]:"")):ie.push("sub://"+ye[1].trim()+(N.includes("#")?"#"+N.split("#")[1]:""));else if(F.toLowerCase().startsWith("https://"))ie.push(N);else if(F.toLowerCase().includes("://"))if(N.includes("#")){let ee=N.split("#");ge.push(ee[0]+"#"+encodeURIComponent(decodeURIComponent(ee[1])))}else ge.push(N);else F.includes("*")?de.push(An(F)+Z):de.push(N)}let ce=await kn(ie,"443"),Te=[...new Set(ge.concat(ce[1]))];D=Te.length>0?Te.join(`
`)+`
`:"";let W=ce[0];j=ce[3]||[],oe=[...new Set(de.concat(W))]}else{let z=a.searchParams.get("sub")||$.优选订阅生成.SUB,[ie,de]=await Pn(z);oe=oe.concat(ie),D+=de}let te=$.ECH?`&ech=${encodeURIComponent(($.ECHConfig.SNI?$.ECHConfig.SNI+"+":"")+$.ECHConfig.DNS)}`:"",ne=B.includes("loon")||B.includes("surge"),{type:ae,路径字段名:K,域名字段名:pe}=an($);V=D+oe.map(z=>{let ie=/^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/,de=z.match(ie),ge,ce="443",Te;if(de)ge=de[1],ce=de[2]?de[2]:"443",Te=de[3]||ge;else return console.warn(`[订阅内容] 不规范的IP格式已忽略: ${z}`),null;let W=$.完整节点路径,N=Te.match(/\$(socks5|http|https|turn|sstp):\/\/([^#\s]+)/i);if(N)try{let H=N[1].toLowerCase(),F=N[2],Z={type:H,...vt(F,It(H))};W=`/video/${En(JSON.stringify(Z),h)+($.启用0RTT?"?ed=2560":"")}`,Te=Te.replace(N[0],"").trim()||ge}catch(H){console.warn(`[订阅内容] 链式代理解析失败，已忽略该指令: ${N[0]} (${H&&H.message?H.message:H})`)}else if(j.length>0){let H=j.find(F=>F.includes(ge));H&&(W=`${$.PATH}/proxyip=${H}`.replace(/\/\//g,"/")+($.启用0RTT?"?ed=2560":""))}if(ne&&(W=W.replace(/,/g,"%2C")),re==="ss"&&!k)return $.SS.TLS||(ce=String([80,2052,2082,2086,2095,8080][[443,2053,2083,2087,2096,8443].indexOf(Number(ce))]??ce)),W=(W.includes("?")?W.replace("?","?enc="+$.SS.加密方式+"&"):W+"?enc="+$.SS.加密方式).replace(/([=,])/g,"\\$1"),X||(W=W+";mux=0"),`${re}://${btoa($.SS.加密方式+":00000000-0000-4000-8000-000000000000")}@${ge}:${ce}?plugin=v2${encodeURIComponent("ray-plugin;mode=websocket;host=example.com;path="+($.随机路径?pt(W):W)+($.SS.TLS?";tls":""))+te+Q}#${encodeURIComponent(Te)}`;{let H=cn($,W,k);return`${re}://00000000-0000-4000-8000-000000000000@${ge}:${ce}?security=tls&type=${ae+te}&${pe}=example.com&fp=${$.Fingerprint}&sni=example.com&${K}=${encodeURIComponent(H)+Q}&encryption=none#${encodeURIComponent(Te)}`}}).filter(z=>z!==null).join(`
`)}else{let Q=`${$.订阅转换配置.SUBAPI}/sub?target=${q}&url=${encodeURIComponent(a.protocol+"//"+a.host+"/sub?target=mixed&token="+_+"&cnIspCode="+xt(e)+(a.searchParams.has("sub")&&a.searchParams.get("sub")!=""?`&sub=${a.searchParams.get("sub")}`:""))}&config=${encodeURIComponent($.订阅转换配置.SUBCONFIG)}&emoji=${$.订阅转换配置.SUBEMOJI}&list=${$.订阅转换配置.SUBLIST}&scv=${$.跳过证书验证}&xudp=${$.订阅转换配置.XUDP}&udp=${$.订阅转换配置.UDP}&tls13=${$.订阅转换配置.TLS13}&append_type=${$.订阅转换配置.APPEND_TYPE}&sort=${$.订阅转换配置.SORT}`;try{let oe=await fetch(Q,{headers:{"User-Agent":"Subconverter for "+q+" edgetunnel (https://github.com/"+Se[1]+"/edgetunnel)"}});if(oe.ok)V=await oe.text(),(a.searchParams.has("surge")||B.includes("surge"))&&(V=jr(V,a.protocol+"//"+a.host+"/sub?token="+I+"&surge",$));else return new Response("订阅转换后端异常："+oe.statusText,{status:oe.status})}catch(oe){return new Response("订阅转换后端异常："+oe.message,{status:403})}}if(!B.includes("subconverter")&&m){let Q=[...$.HOSTS].sort(()=>Math.random()-.5),oe=0,D=null;V=V.replace(/00000000-0000-4000-8000-000000000000/g,$.UUID).replace(/MDAwMDAwMDAtMDAwMC00MDAwLTgwMDAtMDAwMDAwMDAwMDAw/g,btoa($.UUID)).replace(/example\.com/g,()=>{if(oe%2===0){let j=Q[Math.floor(oe/2)%Q.length];D=An(j)}return oe++,D})}return q==="mixed"&&(!B.includes("mozilla")||a.searchParams.has("b64")||a.searchParams.has("base64"))&&(V=btoa(V)),q==="singbox"?(V=await Br(V,$),Y["content-type"]="application/json; charset=utf-8"):q==="clash"&&(V=Mr(V,$),Y["content-type"]="application/x-yaml; charset=utf-8"),new Response(V,{status:200,headers:Y})}}else if(b==="locations"){let k=(e.headers.get("Cookie")||"").split(";").find(L=>L.trim().startsWith("auth="))?.split("=")[1];if(k&&k===await Pe(c+y+d))return fetch(new Request("https://speed.cloudflare.com/locations",{headers:{Referer:"https://speed.cloudflare.com/"}}))}else if(b==="robots.txt")return new Response(`User-agent: *
Disallow: /`,{status:200,headers:{"Content-Type":"text/plain; charset=UTF-8"}})}else if(!l)return fetch(bt+"/noKV").then(S=>{let I=new Headers(S.headers);return I.set("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate"),I.set("Pragma","no-cache"),I.set("Expires","0"),new Response(S.body,{status:404,statusText:S.statusText,headers:I})})}let g=t.URL||"nginx";if(g&&g!=="nginx"&&g!=="1101"){g=g.trim().replace(/\/$/,""),g.match(/^https?:\/\//i)||(g="https://"+g),g.toLowerCase().startsWith("http://")&&(g="https://"+g.substring(7));try{let S=new URL(g);g=S.protocol+"//"+S.host}catch{g="nginx"}}if(g==="1101")return new Response(await Fr(a.host,u),{status:200,headers:{"Content-Type":"text/html; charset=UTF-8"}});try{let S=new URL(g),I=new Headers(e.headers);I.set("Host",S.host),I.set("Referer",S.origin),I.set("Origin",S.origin),!I.has("User-Agent")&&c&&c!=="null"&&I.set("User-Agent",c);let k=await fetch(S.origin+a.pathname+a.search,{method:e.method,headers:I,body:e.body,cf:e.cf}),L=k.headers.get("content-type")||"";if(/text|javascript|json|xml/.test(L)){let m=(await k.text()).replaceAll(S.host,a.host);return new Response(m,{status:k.status,headers:{...Object.fromEntries(k.headers),"Cache-Control":"no-store"}})}return k}catch(S){M(`[伪装页] 反代失败: ${S?.message||S}`)}return new Response(await Wr(),{status:200,headers:{"Content-Type":"text/html; charset=UTF-8"}})}};export{uc as default};
