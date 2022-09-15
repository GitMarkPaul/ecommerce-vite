import{_ as _r,c as Q,a as l,b as F,w as k,t as R,F as Se,r as Er,e as yr,o as Y,f as I,d as br}from"./index.9fcd2ebe.js";function wr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qe={exports:{}},pe={exports:{}},Ye=function(r,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return r.apply(t,n)}},Rr=Ye,me=Object.prototype.toString,ve=function(e){return function(r){var t=me.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function S(e){return e=e.toLowerCase(),function(t){return ve(t)===e}}function _e(e){return Array.isArray(e)}function M(e){return typeof e>"u"}function gr(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Ge=S("ArrayBuffer");function Or(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Ge(e.buffer),r}function Sr(e){return typeof e=="string"}function Ar(e){return typeof e=="number"}function Ze(e){return e!==null&&typeof e=="object"}function $(e){if(ve(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var xr=S("Date"),Cr=S("File"),Pr=S("Blob"),Tr=S("FileList");function Ee(e){return me.call(e)==="[object Function]"}function Nr(e){return Ze(e)&&Ee(e.pipe)}function Dr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||me.call(e)===r||Ee(e.toString)&&e.toString()===r)}var Br=S("URLSearchParams");function Ur(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function qr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ye(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),_e(e))for(var t=0,s=e.length;t<s;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function he(){var e={};function r(n,i){$(e[i])&&$(n)?e[i]=he(e[i],n):$(n)?e[i]=he({},n):_e(n)?e[i]=n.slice():e[i]=n}for(var t=0,s=arguments.length;t<s;t++)ye(arguments[t],r);return e}function Lr(e,r,t){return ye(r,function(n,i){t&&typeof n=="function"?e[i]=Rr(n,t):e[i]=n}),e}function Fr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function kr(e,r,t,s){e.prototype=Object.create(r.prototype,s),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function $r(e,r,t){var s,n,i,a={};r=r||{};do{for(s=Object.getOwnPropertyNames(e),n=s.length;n-- >0;)i=s[n],a[i]||(r[i]=e[i],a[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function jr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var s=e.indexOf(r,t);return s!==-1&&s===t}function Ir(e){if(!e)return null;var r=e.length;if(M(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Mr=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:_e,isArrayBuffer:Ge,isBuffer:gr,isFormData:Dr,isArrayBufferView:Or,isString:Sr,isNumber:Ar,isObject:Ze,isPlainObject:$,isUndefined:M,isDate:xr,isFile:Cr,isBlob:Pr,isFunction:Ee,isStream:Nr,isURLSearchParams:Br,isStandardBrowserEnv:qr,forEach:ye,merge:he,extend:Lr,trim:Ur,stripBOM:Fr,inherits:kr,toFlatObject:$r,kindOf:ve,kindOfTest:S,endsWith:jr,toArray:Ir,isTypedArray:Mr,isFileList:Tr},P=v;function Ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var er=function(r,t,s){if(!t)return r;var n;if(s)n=s(t);else if(P.isURLSearchParams(t))n=t.toString();else{var i=[];P.forEach(t,function(c,h){c===null||typeof c>"u"||(P.isArray(c)?h=h+"[]":c=[c],P.forEach(c,function(p){P.isDate(p)?p=p.toISOString():P.isObject(p)&&(p=JSON.stringify(p)),i.push(Ae(h)+"="+Ae(p))}))}),n=i.join("&")}if(n){var a=r.indexOf("#");a!==-1&&(r=r.slice(0,a)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Hr=v;function H(){this.handlers=[]}H.prototype.use=function(r,t,s){return this.handlers.push({fulfilled:r,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};H.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};H.prototype.forEach=function(r){Hr.forEach(this.handlers,function(s){s!==null&&r(s)})};var zr=H,Vr=v,Jr=function(r,t){Vr.forEach(r,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[i])})},rr=v;function N(e,r,t,s,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),s&&(this.request=s),n&&(this.response=n)}rr.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var tr=N.prototype,nr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){nr[e]={value:e}});Object.defineProperties(N,nr);Object.defineProperty(tr,"isAxiosError",{value:!0});N.from=function(e,r,t,s,n,i){var a=Object.create(tr);return rr.toFlatObject(e,a,function(c){return c!==Error.prototype}),N.call(a,e.message,r,t,s,n),a.name=e.name,i&&Object.assign(a,i),a};var B=N,sr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=v;function Wr(e,r){r=r||new FormData;var t=[];function s(i){return i===null?"":w.isDate(i)?i.toISOString():w.isArrayBuffer(i)||w.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,a){if(w.isPlainObject(i)||w.isArray(i)){if(t.indexOf(i)!==-1)throw Error("Circular reference detected in "+a);t.push(i),w.forEach(i,function(c,h){if(!w.isUndefined(c)){var f=a?a+"."+h:h,p;if(c&&!a&&typeof c=="object"){if(w.endsWith(h,"{}"))c=JSON.stringify(c);else if(w.endsWith(h,"[]")&&(p=w.toArray(c))){p.forEach(function(u){!w.isUndefined(u)&&r.append(f,s(u))});return}}n(c,f)}}),t.pop()}else r.append(a,s(i))}return n(e),r}var ir=Wr,G,xe;function Xr(){if(xe)return G;xe=1;var e=B;return G=function(t,s,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):s(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},G}var Z,Ce;function Kr(){if(Ce)return Z;Ce=1;var e=v;return Z=e.isStandardBrowserEnv()?function(){return{write:function(s,n,i,a,o,c){var h=[];h.push(s+"="+encodeURIComponent(n)),e.isNumber(i)&&h.push("expires="+new Date(i).toGMTString()),e.isString(a)&&h.push("path="+a),e.isString(o)&&h.push("domain="+o),c===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(s){var n=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Z}var Qr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Yr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},Gr=Qr,Zr=Yr,ar=function(r,t){return r&&!Gr(t)?Zr(r,t):t},ee,Pe;function et(){if(Pe)return ee;Pe=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return ee=function(s){var n={},i,a,o;return s&&e.forEach(s.split(`
`),function(h){if(o=h.indexOf(":"),i=e.trim(h.substr(0,o)).toLowerCase(),a=e.trim(h.substr(o+1)),i){if(n[i]&&r.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([a]):n[i]=n[i]?n[i]+", "+a:a}}),n},ee}var re,Te;function rt(){if(Te)return re;Te=1;var e=v;return re=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),n;function i(a){var o=a;return t&&(s.setAttribute("href",o),o=s.href),s.setAttribute("href",o),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return n=i(window.location.href),function(o){var c=e.isString(o)?i(o):o;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}(),re}var te,Ne;function z(){if(Ne)return te;Ne=1;var e=B,r=v;function t(s){e.call(this,s==null?"canceled":s,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),te=t,te}var ne,De;function tt(){return De||(De=1,ne=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),ne}var se,Be;function Ue(){if(Be)return se;Be=1;var e=v,r=Xr(),t=Kr(),s=er,n=ar,i=et(),a=rt(),o=sr,c=B,h=z(),f=tt();return se=function(u){return new Promise(function(hr,A){var U=u.data,q=u.headers,L=u.responseType,x;function Re(){u.cancelToken&&u.cancelToken.unsubscribe(x),u.signal&&u.signal.removeEventListener("abort",x)}e.isFormData(U)&&e.isStandardBrowserEnv()&&delete q["Content-Type"];var d=new XMLHttpRequest;if(u.auth){var pr=u.auth.username||"",mr=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";q.Authorization="Basic "+btoa(pr+":"+mr)}var W=n(u.baseURL,u.url);d.open(u.method.toUpperCase(),s(W,u.params,u.paramsSerializer),!0),d.timeout=u.timeout;function ge(){if(!!d){var b="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,C=!L||L==="text"||L==="json"?d.responseText:d.response,O={data:C,status:d.status,statusText:d.statusText,headers:b,config:u,request:d};r(function(K){hr(K),Re()},function(K){A(K),Re()},O),d=null}}if("onloadend"in d?d.onloadend=ge:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(ge)},d.onabort=function(){!d||(A(new c("Request aborted",c.ECONNABORTED,u,d)),d=null)},d.onerror=function(){A(new c("Network Error",c.ERR_NETWORK,u,d,d)),d=null},d.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),A(new c(C,O.clarifyTimeoutError?c.ETIMEDOUT:c.ECONNABORTED,u,d)),d=null},e.isStandardBrowserEnv()){var Oe=(u.withCredentials||a(W))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Oe&&(q[u.xsrfHeaderName]=Oe)}"setRequestHeader"in d&&e.forEach(q,function(C,O){typeof U>"u"&&O.toLowerCase()==="content-type"?delete q[O]:d.setRequestHeader(O,C)}),e.isUndefined(u.withCredentials)||(d.withCredentials=!!u.withCredentials),L&&L!=="json"&&(d.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&d.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(x=function(b){!d||(A(!b||b&&b.type?new h:b),d.abort(),d=null)},u.cancelToken&&u.cancelToken.subscribe(x),u.signal&&(u.signal.aborted?x():u.signal.addEventListener("abort",x))),U||(U=null);var X=f(W);if(X&&["http","https","file"].indexOf(X)===-1){A(new c("Unsupported protocol "+X+":",c.ERR_BAD_REQUEST,u));return}d.send(U)})},se}var ie,qe;function nt(){return qe||(qe=1,ie=null),ie}var m=v,Le=Jr,Fe=B,st=sr,it=ir,at={"Content-Type":"application/x-www-form-urlencoded"};function ke(e,r){!m.isUndefined(e)&&m.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function ot(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Ue()),e}function ut(e,r,t){if(m.isString(e))try{return(r||JSON.parse)(e),m.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(e)}var V={transitional:st,adapter:ot(),transformRequest:[function(r,t){if(Le(t,"Accept"),Le(t,"Content-Type"),m.isFormData(r)||m.isArrayBuffer(r)||m.isBuffer(r)||m.isStream(r)||m.isFile(r)||m.isBlob(r))return r;if(m.isArrayBufferView(r))return r.buffer;if(m.isURLSearchParams(r))return ke(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var s=m.isObject(r),n=t&&t["Content-Type"],i;if((i=m.isFileList(r))||s&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return it(i?{"files[]":r}:r,a&&new a)}else if(s||n==="application/json")return ke(t,"application/json"),ut(r);return r}],transformResponse:[function(r){var t=this.transitional||V.transitional,s=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||n&&m.isString(r)&&r.length)try{return JSON.parse(r)}catch(a){if(i)throw a.name==="SyntaxError"?Fe.from(a,Fe.ERR_BAD_RESPONSE,this,null,this.response):a}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};m.forEach(["delete","get","head"],function(r){V.headers[r]={}});m.forEach(["post","put","patch"],function(r){V.headers[r]=m.merge(at)});var be=V,ct=v,lt=be,dt=function(r,t,s){var n=this||lt;return ct.forEach(s,function(a){r=a.call(n,r,t)}),r},ae,$e;function or(){return $e||($e=1,ae=function(r){return!!(r&&r.__CANCEL__)}),ae}var je=v,oe=dt,ft=or(),ht=be,pt=z();function ue(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pt}var mt=function(r){ue(r),r.headers=r.headers||{},r.data=oe.call(r,r.data,r.headers,r.transformRequest),r.headers=je.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),je.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||ht.adapter;return t(r).then(function(n){return ue(r),n.data=oe.call(r,n.data,n.headers,r.transformResponse),n},function(n){return ft(n)||(ue(r),n&&n.response&&(n.response.data=oe.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},E=v,ur=function(r,t){t=t||{};var s={};function n(f,p){return E.isPlainObject(f)&&E.isPlainObject(p)?E.merge(f,p):E.isPlainObject(p)?E.merge({},p):E.isArray(p)?p.slice():p}function i(f){if(E.isUndefined(t[f])){if(!E.isUndefined(r[f]))return n(void 0,r[f])}else return n(r[f],t[f])}function a(f){if(!E.isUndefined(t[f]))return n(void 0,t[f])}function o(f){if(E.isUndefined(t[f])){if(!E.isUndefined(r[f]))return n(void 0,r[f])}else return n(void 0,t[f])}function c(f){if(f in t)return n(r[f],t[f]);if(f in r)return n(void 0,r[f])}var h={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c};return E.forEach(Object.keys(r).concat(Object.keys(t)),function(p){var u=h[p]||i,y=u(p);E.isUndefined(y)&&u!==c||(s[p]=y)}),s},ce,Ie;function cr(){return Ie||(Ie=1,ce={version:"0.27.2"}),ce}var vt=cr().version,g=B,we={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){we[e]=function(s){return typeof s===e||"a"+(r<1?"n ":" ")+e}});var Me={};we.transitional=function(r,t,s){function n(i,a){return"[Axios v"+vt+"] Transitional option '"+i+"'"+a+(s?". "+s:"")}return function(i,a,o){if(r===!1)throw new g(n(a," has been removed"+(t?" in "+t:"")),g.ERR_DEPRECATED);return t&&!Me[a]&&(Me[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(i,a,o):!0}};function _t(e,r,t){if(typeof e!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(e),n=s.length;n-- >0;){var i=s[n],a=r[i];if(a){var o=e[i],c=o===void 0||a(o,i,e);if(c!==!0)throw new g("option "+i+" must be "+c,g.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new g("Unknown option "+i,g.ERR_BAD_OPTION)}}var Et={assertOptions:_t,validators:we},lr=v,yt=er,He=zr,ze=mt,J=ur,bt=ar,dr=Et,T=dr.validators;function D(e){this.defaults=e,this.interceptors={request:new He,response:new He}}D.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=J(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&dr.assertOptions(s,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(t)===!1||(i=i&&y.synchronous,n.unshift(y.fulfilled,y.rejected))});var a=[];this.interceptors.response.forEach(function(y){a.push(y.fulfilled,y.rejected)});var o;if(!i){var c=[ze,void 0];for(Array.prototype.unshift.apply(c,n),c=c.concat(a),o=Promise.resolve(t);c.length;)o=o.then(c.shift(),c.shift());return o}for(var h=t;n.length;){var f=n.shift(),p=n.shift();try{h=f(h)}catch(u){p(u);break}}try{o=ze(h)}catch(u){return Promise.reject(u)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};D.prototype.getUri=function(r){r=J(this.defaults,r);var t=bt(r.baseURL,r.url);return yt(t,r.params,r.paramsSerializer)};lr.forEach(["delete","get","head","options"],function(r){D.prototype[r]=function(t,s){return this.request(J(s||{},{method:r,url:t,data:(s||{}).data}))}});lr.forEach(["post","put","patch"],function(r){function t(s){return function(i,a,o){return this.request(J(o||{},{method:r,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}D.prototype[r]=t(),D.prototype[r+"Form"]=t(!0)});var wt=D,le,Ve;function Rt(){if(Ve)return le;Ve=1;var e=z();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(a){s=a});var n=this;this.promise.then(function(i){if(!!n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](i);n._listeners=null}}),this.promise.then=function(i){var a,o=new Promise(function(c){n.subscribe(c),a=c}).then(i);return o.cancel=function(){n.unsubscribe(a)},o},t(function(a){n.reason||(n.reason=new e(a),s(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},r.prototype.unsubscribe=function(s){if(!!this._listeners){var n=this._listeners.indexOf(s);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var s,n=new r(function(a){s=a});return{token:n,cancel:s}},le=r,le}var de,Je;function gt(){return Je||(Je=1,de=function(r){return function(s){return r.apply(null,s)}}),de}var fe,We;function Ot(){if(We)return fe;We=1;var e=v;return fe=function(t){return e.isObject(t)&&t.isAxiosError===!0},fe}var Xe=v,St=Ye,j=wt,At=ur,xt=be;function fr(e){var r=new j(e),t=St(j.prototype.request,r);return Xe.extend(t,j.prototype,r),Xe.extend(t,r),t.create=function(n){return fr(At(e,n))},t}var _=fr(xt);_.Axios=j;_.CanceledError=z();_.CancelToken=Rt();_.isCancel=or();_.VERSION=cr().version;_.toFormData=ir;_.AxiosError=B;_.Cancel=_.CanceledError;_.all=function(r){return Promise.all(r)};_.spread=gt();_.isAxiosError=Ot();pe.exports=_;pe.exports.default=_;(function(e){e.exports=pe.exports})(Qe);const Ke=wr(Qe.exports);const Ct={data(){return{product:[],products:[]}},created(){this.getProductSingleById()},methods:{getProductSingleById(){let e=`https://fakestoreapi.com/products/${this.$route.params.id}`,r=this;Ke.get(e).then(t=>{r.product=t.data})}},mounted(){let e=`https://fakestoreapi.com/products/category/${this.$route.params.category}`,r=this;Ke.get(e).then(t=>{r.products=t.data})}},Pt={class:"padding-top-1"},Tt={class:"container-fluid"},Nt={class:"bread"},Dt={class:"bread-menu"},Bt={class:"bread-item"},Ut=I("Home"),qt={class:"bread-item"},Lt=I("Products"),Ft={class:"bread-item"},kt={class:"bread-item"},$t={class:"bread-link","aria-current":"page"},jt={class:"row g-5 pt-3"},It={class:"col-xl-12"},Mt={class:"card background-accent-secondary"},Ht={class:"body"},zt={class:"row g-4"},Vt={class:"col-xl-4"},Jt={class:"thumbnail"},Wt={class:"item w-100 mb-3"},Xt=["src"],Kt={class:"col-xl-8"},Qt={class:"badge round background-accent-tertiary"},Yt={class:"font-size-32 font-weight-600"},Gt={class:"font-size-26 font-weight-600 text-color-danger mt-3"},Zt=l("div",{class:"d-flex gap-3 mt-5"},[l("button",{type:"button",class:"button-warning round md"},"Buy Now"),l("button",{type:"button",class:"button-primary round md"},"Add to Cart")],-1),en={class:"col-xl-12"},rn={class:"card"},tn={class:"body"},nn=l("div",{class:"font-size-24 font-weight-600"},"Product Description",-1),sn={class:"mt-3"},an={class:"padding-top-4 padding-bottom-5"},on={class:"container-fluid"},un=l("div",{class:"d-flex align-items-center justify-content-between"},[l("div",{class:"font-size-26 font-weight-600"},"Product from the same category")],-1),cn={class:"row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 g-3 mt-2"},ln={class:"card round hover-scale-1"},dn=["src"],fn=l("a",{href:"#",class:"button-outline-danger circle position-absolute top-0 right-0 my-2 mx-2"},[l("span",{class:"material-icons-outlined"},"favorite_border")],-1),hn={class:"body d-grid"},pn={class:"badge round background-accent-tertiary"},mn={class:"font-size-18 font-weight-600 text-color-danger mt-2 mb-4"},vn=br('<div class="star-rating"><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star</span><span class="material-icons-outlined">star_border</span><div class="font-size-12 font-weight-500">3.5k Reviews</div></div>',1);function _n(e,r,t,s,n,i){const a=yr("router-link");return Y(),Q(Se,null,[l("section",Pt,[l("div",Tt,[l("div",Nt,[l("ol",Dt,[l("li",Bt,[F(a,{to:"/",class:"bread-link"},{default:k(()=>[Ut]),_:1})]),l("li",qt,[F(a,{to:"/products",class:"bread-link"},{default:k(()=>[Lt]),_:1})]),l("li",Ft,[F(a,{to:"/products",class:"bread-link"},{default:k(()=>[I(R(n.product.category),1)]),_:1})]),l("li",kt,[l("div",$t,R(n.product.title),1)])])]),l("div",jt,[l("div",It,[l("div",Mt,[l("div",Ht,[l("div",zt,[l("div",Vt,[l("div",Jt,[l("div",Wt,[l("img",{class:"product-image round",src:n.product.image,alt:""},null,8,Xt)])])]),l("div",Kt,[l("div",Qt,R(n.product.category),1),l("div",Yt,R(n.product.title),1),l("div",Gt,"\u20B1"+R(n.product.price),1),Zt])])])])]),l("div",en,[l("div",rn,[l("div",tn,[nn,l("div",sn,R(n.product.description),1)])])])])])]),l("section",an,[l("div",on,[un,l("div",cn,[(Y(!0),Q(Se,null,Er(n.products,o=>(Y(),Q("div",{class:"col",key:o.id},[l("div",ln,[F(a,{to:{name:"ProductSingle",params:{category:o.category,id:o.id}}},{default:k(()=>[l("img",{class:"card-product-img",src:o.image,alt:""},null,8,dn)]),_:2},1032,["to"]),fn,l("div",hn,[l("div",pn,R(o.category),1),F(a,{to:{name:"ProductSingle",params:{category:o.category,id:o.id}},class:"font-size-16 font-weight-500 mt-2"},{default:k(()=>[I(R(o.title),1)]),_:2},1032,["to"]),l("div",mn,"\u20B1"+R(o.price),1),vn])])]))),128))])])])],64)}const yn=_r(Ct,[["render",_n]]);export{yn as default};