(()=>{"use strict";var e={921:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(933),o=n.n(r),i=n(476),s=n.n(i)()(o());s.push([e.id,"*{\n    box-sizing: border-box;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nimg{\n    max-width: 100%;\n}\n\n.grid{\n    display: grid;\n    place-content: center;\n}",""]);const a=s},650:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(933),o=n.n(r),i=n(476),s=n.n(i)()(o());s.push([e.id,".footer{\n    padding: 15px;\n}",""]);const a=s},335:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(933),o=n.n(r),i=n(476),s=n.n(i)()(o());s.push([e.id,".main-header{\n    width: 100%;\n    height: auto;\n    /* background-image: linear-gradient(to right, rgba(4, 107, 109, 1), rgba(0, 71, 88, 1)); */\n    background-color: #fff;\n    position: relative;\n    z-index: 1000;\n    transition:all .5s ease-in-out;\n    border-top:8px solid rgb(4, 108, 109);\n}\n.small-topHeader {\n    padding: 10px;\n    display: flex;\n    justify-content: flex-end;\n    width: auto;\n    min-height: 41px;\n    min-width: 1200px;\n    max-width: 1500px;\n    margin: auto;\n}\n\n.header {\n    width: auto;\n    height: auto;\n    margin: auto;\n    position: relative;\n    z-index: 2;\n    min-width: 1200px;\n    max-width: 1500px;\n    padding: 0px 10px;\n}\n\n.header ul {\n    list-style-type: none;\n    float: left;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n}\n\n.navigation a, .navigation span {\n    display: inline-block;\n    text-decoration: none;\n    padding: 30px 15px;\n    position: relative;\n    font-size: 17px;\n}\n\n.header .lang_chooser {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.lang {\n    position: relative;\n    width: auto;\n    float: right;\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo_container{\n    float: left;\n    border-radius: 50%;\n    overflow: hidden;\n    position: absolute;\n    top: -20px;\n    width: 125px;\n    height: 125px;\n    background: #fff;\n    clip-path:polygon(-1px 16%,110% 16% 110% 110%,-50% 110%);\n    z-index:3;\n}\n\n.logo_container a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n.navigation {\n    width: max-content;\n    height: 80px;\n    margin-left: 125px;\n    padding-left: 25px;\n    float: left;\n}\n\n.lang_container.nav {\n    width: max-content;\n    left: 0;\n}\n\n.lang_container {\n    position: absolute;\n    background: rgb(41, 41, 41);\n    /* height: 0; */\n    grid-template-rows: 0fr;\n    overflow: hidden;\n    padding: 0;\n    z-index: 2;\n    right: 0;\n    top: 80px;\n    transition: all .2s ease-in-out;\n    display: grid !important;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.28);\n}\n\n.operator {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    width: 480px;\n    font-size: 12px;\n}\n\n.operator-logo {\n    height: 60px;\n    object-fit: contain;\n    margin-left: 10px;\n}\n\n.trustpilot-review {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    cursor: pointer;\n    color: #7a7a7a;\n}\n\n.trustpilot-review img {\n    width: 8%;\n    margin-left: 10px;\n}",""]);const a=s},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},311:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(892),t=n.n(e),r=n(760),o=n.n(r),i=n(311),s=n.n(i),a=n(192),c=n.n(a),l=n(60),u=n.n(l),d=n(865),f=n.n(d),p=n(921),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const m={dk:{navigation:{timetable:{name:"Sejlplan",type:"dropdown",link:""},price:{name:"Priser",link:"/price"},specialTours:{name:"Specail Tours",type:"dropdown",link:""},services:{name:"Cykelservice & Oplev",type:"dropdown",link:""},about:{name:"Om os",type:"dropdown",link:""}}},de:{navigation:{timetable:{name:"Fahrplan",type:"dropdown",link:""},price:{name:"Preis",link:""},specialTours:{name:"Specail Tours",type:"dropdown",link:""},services:{name:"Radservice & Erkundung",type:"dropdown",link:""},about:{name:"Über uns",type:"dropdown",link:""}}},en:{navigation:{timetable:{name:"Timetable",type:"dropdown",link:""},price:{name:"Price",link:""},specialTours:{name:"Specail Tours",type:"dropdown",link:""},services:{name:"Service & discover",type:"dropdown",link:""},about:{name:"About us",type:"dropdown",link:""}}}};function g(e,t){return function(){return e.apply(t,arguments)}}const{toString:y}=Object.prototype,{getPrototypeOf:b}=Object,w=(E=Object.create(null),e=>{const t=y.call(e);return E[t]||(E[t]=t.slice(8,-1).toLowerCase())});var E;const R=e=>(e=e.toLowerCase(),t=>w(t)===e),v=e=>t=>typeof t===e,{isArray:O}=Array,x=v("undefined"),S=R("ArrayBuffer"),A=v("string"),T=v("function"),N=v("number"),j=e=>null!==e&&"object"==typeof e,C=e=>{if("object"!==w(e))return!1;const t=b(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},P=R("Date"),k=R("File"),_=R("Blob"),F=R("FileList"),D=R("URLSearchParams");function L(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),O(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function U(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,M=e=>!x(e)&&e!==B,I=(z="undefined"!=typeof Uint8Array&&b(Uint8Array),e=>z&&e instanceof z);var z;const q=R("HTMLFormElement"),H=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),J=R("RegExp"),W=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},Z="abcdefghijklmnopqrstuvwxyz",K="0123456789",V={DIGIT:K,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+K},G=R("AsyncFunction"),$={isArray:O,isArrayBuffer:S,isBuffer:function(e){return null!==e&&!x(e)&&null!==e.constructor&&!x(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||T(e.append)&&("formdata"===(t=w(e))||"object"===t&&T(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&S(e.buffer),t},isString:A,isNumber:N,isBoolean:e=>!0===e||!1===e,isObject:j,isPlainObject:C,isUndefined:x,isDate:P,isFile:k,isBlob:_,isRegExp:J,isFunction:T,isStream:e=>j(e)&&T(e.pipe),isURLSearchParams:D,isTypedArray:I,isFileList:F,forEach:L,merge:function e(){const{caseless:t}=M(this)&&this||{},n={},r=(r,o)=>{const i=t&&U(n,o)||o;C(n[i])&&C(r)?n[i]=e(n[i],r):C(r)?n[i]=e({},r):O(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&L(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(L(t,((t,r)=>{n&&T(t)?e[r]=g(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],r&&!r(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&b(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:w,kindOfTest:R,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(O(e))return e;let t=e.length;if(!N(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:q,hasOwnProperty:H,hasOwnProp:H,reduceDescriptors:W,freezeMethods:e=>{W(e,((t,n)=>{if(T(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];T(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return O(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:U,global:B,isContextDefined:M,ALPHABET:V,generateString:(e=16,t=V.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&T(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(j(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=O(e)?[]:{};return L(e,((e,t)=>{const i=n(e,r+1);!x(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:G,isThenable:e=>e&&(j(e)||T(e))&&T(e.then)&&T(e.catch)};function X(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}$.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Q=X.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Y[e]={value:e}})),Object.defineProperties(X,Y),Object.defineProperty(Q,"isAxiosError",{value:!0}),X.from=(e,t,n,r,o,i)=>{const s=Object.create(Q);return $.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),X.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const ee=X;function te(e){return $.isPlainObject(e)||$.isArray(e)}function ne(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,n){return e?e.concat(t).map((function(e,t){return e=ne(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const oe=$.toFlatObject($,{},null,(function(e){return/^is[A-Z]/.test(e)})),ie=function(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!$.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if($.isDate(e))return e.toISOString();if(!a&&$.isBlob(e))throw new ee("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(e)||$.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if($.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if($.isArray(e)&&function(e){return $.isArray(e)&&!e.some(te)}(e)||($.isFileList(e)||$.endsWith(n,"[]"))&&(a=$.toArray(e)))return n=ne(n),a.forEach((function(e,r){!$.isUndefined(e)&&null!==e&&t.append(!0===s?re([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!te(e)||(t.append(re(o,n,i),c(e)),!1)}const u=[],d=Object.assign(oe,{defaultVisitor:l,convertValue:c,isVisitable:te});if(!$.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!$.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),$.forEach(n,(function(n,i){!0===(!($.isUndefined(n)||null===n)&&o.call(t,n,$.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ae(e,t){this._pairs=[],e&&ie(e,this,t)}const ce=ae.prototype;ce.append=function(e,t){this._pairs.push([e,t])},ce.toString=function(e){const t=e?function(t){return e.call(this,t,se)}:se;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const le=ae;function ue(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function de(e,t,n){if(!t)return e;const r=n&&n.encode||ue,o=n&&n.serialize;let i;if(i=o?o(t,n):$.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const fe=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},he={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:le,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},me=function(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&$.isArray(r)?r.length:i,a?($.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&$.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&$.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,((e,r)=>{t(function(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},ge={"Content-Type":void 0},ye={transitional:pe,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=$.isObject(e);if(o&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return r&&r?JSON.stringify(me(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ie(e,new he.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return he.isNode&&$.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=$.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ie(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if($.isString(e))try{return(0,JSON.parse)(e),$.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ye.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&$.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw ee.from(e,ee.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$.forEach(["delete","get","head"],(function(e){ye.headers[e]={}})),$.forEach(["post","put","patch"],(function(e){ye.headers[e]=$.merge(ge)}));const be=ye,we=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ee=Symbol("internals");function Re(e){return e&&String(e).trim().toLowerCase()}function ve(e){return!1===e||null==e?e:$.isArray(e)?e.map(ve):String(e)}function Oe(e,t,n,r,o){return $.isFunction(r)?r.call(this,t,n):(o&&(t=n),$.isString(t)?$.isString(r)?-1!==t.indexOf(r):$.isRegExp(r)?r.test(t):void 0:void 0)}class xe{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Re(t);if(!o)throw new Error("header name must be a non-empty string");const i=$.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=ve(e))}const i=(e,t)=>$.forEach(e,((e,n)=>o(e,n,t)));return $.isPlainObject(e)||e instanceof this.constructor?i(e,t):$.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&we[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=Re(e)){const n=$.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if($.isFunction(t))return t.call(this,e,n);if($.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Re(e)){const n=$.findKey(this,e);return!(!n||void 0===this[n]||t&&!Oe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Re(e)){const o=$.findKey(n,e);!o||t&&!Oe(0,n[o],o,t)||(delete n[o],r=!0)}}return $.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Oe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return $.forEach(this,((r,o)=>{const i=$.findKey(n,o);if(i)return t[i]=ve(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ve(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return $.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&$.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ee]=this[Ee]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Re(e);t[r]||(function(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return $.isArray(e)?e.forEach(r):r(e),this}}xe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),$.freezeMethods(xe.prototype),$.freezeMethods(xe);const Se=xe;function Ae(e,t){const n=this||be,r=t||n,o=Se.from(r.headers);let i=r.data;return $.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Te(e){return!(!e||!e.__CANCEL__)}function Ne(e,t,n){ee.call(this,null==e?"canceled":e,ee.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(Ne,ee,{__CANCEL__:!0});const je=Ne,Ce=he.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(r)&&s.push("path="+r),$.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Pe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ke=he.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=$.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function _e(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[s];o||(o=c),n[i]=a,r[i]=c;let u=s,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Fe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Se.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}$.isFormData(r)&&(he.isStandardBrowserEnv||he.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=Pe(e.baseURL,e.url);function u(){if(!c)return;const r=Se.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),de(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new ee("Request aborted",ee.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new ee("Network Error",ee.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||pe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ee(t,r.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,c)),c=null},he.isStandardBrowserEnv){const t=(e.withCredentials||ke(l))&&e.xsrfCookieName&&Ce.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&$.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),$.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",_e(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",_e(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new je(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);d&&-1===he.protocols.indexOf(d)?n(new ee("Unsupported protocol "+d+":",ee.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};$.forEach(Fe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function De(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new je(null,e)}function Le(e){return De(e),e.headers=Se.from(e.headers),e.data=Ae.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=$.isString(n)?Fe[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new ee(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error($.hasOwnProp(Fe,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!$.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||be.adapter)(e).then((function(t){return De(e),t.data=Ae.call(e,e.transformResponse,t),t.headers=Se.from(t.headers),t}),(function(t){return Te(t)||(De(e),t&&t.response&&(t.response.data=Ae.call(e,e.transformResponse,t.response),t.response.headers=Se.from(t.response.headers))),Promise.reject(t)}))}const Ue=e=>e instanceof Se?e.toJSON():e;function Be(e,t){t=t||{};const n={};function r(e,t,n){return $.isPlainObject(e)&&$.isPlainObject(t)?$.merge.call({caseless:n},e,t):$.isPlainObject(t)?$.merge({},t):$.isArray(t)?t.slice():t}function o(e,t,n){return $.isUndefined(t)?$.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!$.isUndefined(t))return r(void 0,t)}function s(e,t){return $.isUndefined(t)?$.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Ue(e),Ue(t),!0)};return $.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);$.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Me={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Me[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ie={};Me.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new ee(r(o," has been removed"+(t?" in "+t:"")),ee.ERR_DEPRECATED);return t&&!Ie[o]&&(Ie[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const ze={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new ee("option "+i+" must be "+n,ee.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}},validators:Me},qe=ze.validators;class He{constructor(e){this.defaults=e,this.interceptors={request:new fe,response:new fe}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Be(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&ze.assertOptions(n,{silentJSONParsing:qe.transitional(qe.boolean),forcedJSONParsing:qe.transitional(qe.boolean),clarifyTimeoutError:qe.transitional(qe.boolean)},!1),null!=r&&($.isFunction(r)?t.paramsSerializer={serialize:r}:ze.assertOptions(r,{encode:qe.function,serialize:qe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&$.merge(o.common,o[t.method]),i&&$.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Se.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Le.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=s.length;let f=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Le.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return de(Pe((e=Be(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],(function(e){He.prototype[e]=function(t,n){return this.request(Be(n||{},{method:e,url:t,data:(n||{}).data}))}})),$.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Be(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}He.prototype[e]=t(),He.prototype[e+"Form"]=t(!0)}));const Je=He;class We{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new je(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new We((function(t){e=t})),cancel:e}}}const Ze=We,Ke={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ke).forEach((([e,t])=>{Ke[t]=e}));const Ve=Ke,Ge=function e(t){const n=new Je(t),r=g(Je.prototype.request,n);return $.extend(r,Je.prototype,n,{allOwnKeys:!0}),$.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Be(t,n))},r}(be);Ge.Axios=Je,Ge.CanceledError=je,Ge.CancelToken=Ze,Ge.isCancel=Te,Ge.VERSION="1.4.0",Ge.toFormData=ie,Ge.AxiosError=ee,Ge.Cancel=Ge.CanceledError,Ge.all=function(e){return Promise.all(e)},Ge.spread=function(e){return function(t){return e.apply(null,t)}},Ge.isAxiosError=function(e){return $.isObject(e)&&!0===e.isAxiosError},Ge.mergeConfig=Be,Ge.AxiosHeaders=Se,Ge.formToJSON=e=>me($.isHTMLForm(e)?new FormData(e):e),Ge.HttpStatusCode=Ve,Ge.default=Ge;const $e=Ge;var Xe=n(335),Qe={};Qe.styleTagTransform=f(),Qe.setAttributes=c(),Qe.insert=s().bind(null,"head"),Qe.domAPI=o(),Qe.insertStyleElement=u(),t()(Xe.Z,Qe),Xe.Z&&Xe.Z.locals&&Xe.Z.locals;const{useState:Ye,useEffect:et,useRef:tt}=React,nt=window.ReactRouterDOM.NavLink;function rt(){const[e,t]=Ye("dk");return et((()=>{!async function(e){$e.get("https://ipapi.co/json").then((function(t){e(t.data.country.toLowerCase())}))}(t)}),[]),React.createElement(React.Fragment,null,React.createElement("header",{className:"main-header"},React.createElement("section",{className:"small-topHeader"},React.createElement("div",{className:"paymentMethods"}),React.createElement("a",{className:"trustpilot-review",href:"https://dk.trustpilot.com/evaluate/cykelfaergen.info",target:"_blank"},"Bedøm os på ",React.createElement("img",{src:"https://cdn.trustpilot.net/brand-assets/1.8.0/logo-black.svg",alt:"Trustpilot"})),React.createElement("div",{className:"operator"},"Booking via:",React.createElement("img",{className:"operator-logo",src:"https://www.cykelfaergen.info/assets/logo/als-turbaade.png",title:"Als Turbåde",alt:"Als Turbåde"}))),React.createElement("section",{className:"header"},React.createElement("section",{className:"logo_container"},React.createElement(nt,{to:"/"},React.createElement("img",{src:"https://www.cykelfaergen.info/assets/logo/logo.svg",width:"88px",height:"88px",alt:"Cykelfærgen´s Logo"}))),React.createElement("nav",{className:"navigation"},Object.keys(m[e].navigation).map(((t,n)=>React.createElement(nt,{to:m[e].navigation[t].link,style:e=>{let{isActive:t}=e;return{color:t?"greenyellow":"blue"}}},m[e].navigation[t].name))))),React.createElement("section",{className:"header"}),React.createElement("div",{style:{clear:"both"}})))}null===localStorage.getItem("region")||localStorage.getItem("region");var ot=n(650),it={};it.styleTagTransform=f(),it.setAttributes=c(),it.insert=s().bind(null,"head"),it.domAPI=o(),it.insertStyleElement=u(),t()(ot.Z,it),ot.Z&&ot.Z.locals&&ot.Z.locals;const{useState:st,useEffect:at,useRef:ct}=React;function lt(){const e=(new Date).getFullYear();return React.createElement(React.Fragment,null,React.createElement("footer",{className:"footer"},"© ",e," Parkinpeace. All rights reserved."))}function ut(){return React.createElement(React.Fragment,null,React.createElement("p",null,"This website is currently under development"),React.createElement("p",null,"We are working on something special for you!"))}const{useState:dt,useEffect:ft,useRef:pt}=React,ht=window.ReactRouterDOM.BrowserRouter,mt=window.ReactRouterDOM.Route,gt=window.ReactRouterDOM.Switch,yt=window.ReactRouterDOM.Redirect;function bt(){return React.createElement(React.Fragment,null,React.createElement(ht,null,React.createElement(rt,null),React.createElement("div",{className:"grid"},React.createElement(gt,null,React.createElement(mt,{path:"/",exact:!0},React.createElement(ut,null)),React.createElement(mt,{path:"/price",exact:!0}),React.createElement(yt,{to:"/"}))),React.createElement(lt,null)))}(0,window.ReactDOM.createRoot)(document.getElementById("app")).render(React.createElement(bt,null))})()})();