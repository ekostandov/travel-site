!function(n){var r={};function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i,f,d){var o=[],e={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},c=function(){};c.prototype=e,c=new c;var l=[];function p(e,t){return(void 0===e?"undefined":b(e))===t}var m=f.documentElement,h="svg"===m.nodeName.toLowerCase();var t="Moz O ms Webkit",u=e._config.usePrefixes?t.split(" "):[];function g(){return"function"!=typeof f.createElement?f.createElement(arguments[0]):h?f.createElementNS.call(f,"http://www.w3.org/2000/svg",arguments[0]):f.createElement.apply(f,arguments)}e._cssomPrefixes=u;var n={elem:g("modernizr")};c._q.push(function(){delete n.elem});var v={style:n.elem.style};function s(e,t,n,r){var s,i,a,o,c="modernizr",l=g("div"),u=function(){var e=f.body;return e||((e=g(h?"svg":"body")).fake=!0),e}();if(parseInt(n,10))for(;n--;)(a=g("div")).id=r?r[n]:c+(n+1),l.appendChild(a);return(s=g("style")).type="text/css",s.id="s"+c,(u.fake?u:l).appendChild(s),u.appendChild(l),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(f.createTextNode(e)),l.id=c,u.fake&&(u.style.background="",u.style.overflow="hidden",o=m.style.overflow,m.style.overflow="hidden",m.appendChild(u)),i=t(l,e),u.fake?(u.parentNode.removeChild(u),m.style.overflow=o,m.offsetHeight):l.parentNode.removeChild(l),!!i}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function A(e,t){var n=e.length;if("CSS"in i&&"supports"in i.CSS){for(;n--;)if(i.CSS.supports(a(e[n]),t))return!0;return!1}if("CSSSupportsRule"in i){for(var r=[];n--;)r.push("("+a(e[n])+":"+t+")");return s("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,n){var r;if("getComputedStyle"in i){r=getComputedStyle.call(i,e,t);var s=i.console;null!==r?n&&(r=r.getPropertyValue(n)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return d}c._q.unshift(function(){delete v.style});var y=e._config.usePrefixes?t.toLowerCase().split(" "):[];function z(e,t){return function(){return e.apply(t,arguments)}}function r(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+u.join(i+" ")+i).split(" ");return p(t,"string")||p(t,"undefined")?function(e,t,n,r){if(r=!p(r,"undefined")&&r,!p(n,"undefined")){var s=A(e,n);if(!p(s,"undefined"))return s}for(var i,a,o,c,l,u=["modernizr","tspan","samp"];!v.style&&u.length;)i=!0,v.modElem=g(u.shift()),v.style=v.modElem.style;function f(){i&&(delete v.style,delete v.modElem)}for(o=e.length,a=0;a<o;a++)if(c=e[a],l=v.style[c],~(""+c).indexOf("-")&&(c=c.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),v.style[c]!==d){if(r||p(n,"undefined"))return f(),"pfx"!==t||c;try{v.style[c]=n}catch(e){}if(v.style[c]!==l)return f(),"pfx"!==t||c}return f(),!1}(a,t,r,s):function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:p(r=t[e[s]],"function")?z(r,n||t):r;return!1}(a=(e+" "+y.join(i+" ")+i).split(" "),t,n)}function w(e,t,n){return r(e,d,d,t,n)}e._domPrefixes=y,e.testAllProps=r,e.testAllProps=w,c.addTest("flexbox",w("flexBasis","1px",!0)),c.addTest("svg",!!f.createElementNS&&!!f.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,i;for(var a in o)if(o.hasOwnProperty(a)){if(e=[],(t=o[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=p(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?c[i[0]]=r:(!c[i[0]]||c[i[0]]instanceof Boolean||(c[i[0]]=new Boolean(c[i[0]])),c[i[0]][i[1]]=r),l.push((r?"":"no-")+i.join("-"))}}(),function(e){var t=m.className,n=c._config.classPrefix||"";if(h&&(t=t.baseVal),c._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}c._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),h?m.className.baseVal=t:m.className=t)}(l),delete e.addTest,delete e.addAsyncTest;for(var C=0;C<c._q.length;C++)c._q[C]();i.Modernizr=c}(window,document)},function(fe,de,pe){var me,e,t,s,n,r,i,a,o,c;e=window,c=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(s=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=s.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)},s.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i)),function(e,i,l){"use strict";var s,u,a;i.createElement("picture");var y={},o=!1,t=function(){},n=i.createElement("img"),f=n.getAttribute,d=n.setAttribute,p=n.removeAttribute,c=i.documentElement,r={},z={algorithm:""},m="data-pfsrc",h=m+"set",g=navigator.userAgent,w=/rident/.test(g)||/ecko/.test(g)&&g.match(/rv\:(\d+)/)&&35<RegExp.$1,C="currentSrc",v=/\s+\+?\d+(e\d+)?w/,A=/(\([^)]+\))?\s*(.+)/,b=e.picturefillCFG,S="font-size:100%!important;",x=!0,E={},T={},M=e.devicePixelRatio,_={px:1,in:96},P=i.createElement("a"),R=!1,L=/^[ \t\n\r\u000c]+/,N=/^[, \t\n\r\u000c]+/,B=/^[^ \t\n\r\u000c]+/,k=/[,]+$/,W=/^\d+$/,D=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,$=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},I=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function O(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var U,F,H,j,q,Q,G,V,J,K,X,Z,Y,ee,te,ne,re,se,ie,ae=(U=/^([\d\.]+)(em|vw|px)$/,F=I(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in E))if(E[e]=!1,t&&(n=e.match(U)))E[e]=n[1]*_[n[2]];else try{E[e]=new Function("e",F(e))(_)}catch(e){}return E[e]}),oe=function(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ce=function(e){if(o){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=(t=s.elements||y.qsa(s.context||i,s.reevaluate||s.reselect?y.sel:y.selShort)).length){for(y.setupRun(s),R=!0,n=0;n<r;n++)y.fillImg(t[n],s);y.teardownRun(s)}}};function le(e,t){return e.res-t.res}function ue(e,t){var n,r,s;if(e&&t)for(s=y.parseSet(t),e=y.makeUrl(e),n=0;n<s.length;n++)if(e===y.makeUrl(s[n].url)){r=s[n];break}return r}e.console&&console.warn,C in n||(C="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in n,y.supSizes="sizes"in n,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&(H=i.createElement("img"),n.srcset="data:,a",H.src="data:,a",y.supSrcset=n.complete===H.complete,y.supPicture=y.supSrcset&&y.supPicture),y.supSrcset&&!y.supSizes?(j="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",q=i.createElement("img"),Q=function(){2===q.width&&(y.supSizes=!0),u=y.supSrcset&&!y.supSizes,o=!0,setTimeout(ce)},q.onload=Q,q.onerror=Q,q.setAttribute("sizes","9px"),q.srcset=j+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",q.src=j):o=!0,y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=z,y.DPR=M||1,y.u=_,y.types=r,y.setSize=t,y.makeUrl=I(function(e){return P.href=e,P.href}),y.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},y.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?y.matchesMedia=function(e){return!e||matchMedia(e).matches}:y.matchesMedia=y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return!e||ae(e)},y.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},y.supportsType=function(e){return!e||r[e]},y.parseSize=I(function(e){var t=(e||"").match(A);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=function(r,f){function e(e){var t,n=e.exec(r.substring(a));if(n)return t=n[0],a+=t.length,t}var d,p,t,n,s,i=r.length,a=0,m=[];function o(){var e,t,n,r,s,i,a,o,c,l=!1,u={};for(r=0;r<p.length;r++)i=(s=p[r])[s.length-1],a=s.substring(0,s.length-1),o=parseInt(a,10),c=parseFloat(a),W.test(a)&&"w"===i?((e||t)&&(l=!0),0===o?l=!0:e=o):D.test(a)&&"x"===i?((e||t||n)&&(l=!0),c<0?l=!0:t=c):W.test(a)&&"h"===i?((n||t)&&(l=!0),0===o?l=!0:n=o):l=!0;l||(u.url=d,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(f.has1x=!0),u.set=f,m.push(u))}function c(){for(e(L),t="",n="in descriptor";;){if(s=r.charAt(a),"in descriptor"===n)if(O(s))t&&(p.push(t),t="",n="after descriptor");else{if(","===s)return a+=1,t&&p.push(t),void o();if("("===s)t+=s,n="in parens";else{if(""===s)return t&&p.push(t),void o();t+=s}}else if("in parens"===n)if(")"===s)t+=s,n="in descriptor";else{if(""===s)return p.push(t),void o();t+=s}else if("after descriptor"===n)if(O(s));else{if(""===s)return void o();n="in descriptor",a-=1}a+=1}}for(;;){if(e(N),i<=a)return m;d=e(B),p=[],","===d.slice(-1)?(d=d.replace(k,""),o()):c()}}(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!s&&(e=i.body)){var t=i.createElement("div"),n=c.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",c.style.cssText=S,e.style.cssText=S,e.appendChild(t),s=t.offsetWidth,e.removeChild(t),s=parseFloat(s,10),c.style.cssText=n,e.style.cssText=r}return s||16},y.calcListLength=function(e){if(!(e in T)||z.uT){var t=y.calcLength(function(e){var t,n,r,s,i,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],s=[],i=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(s.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),s;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(O(t)){if(e.charAt(a-1)&&O(e.charAt(a-1))||!n){a+=1;continue}if(0===i){c(),a+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<r;t++)if(i=(s=n[t])[s.length-1],o=i,c.test(o)&&0<=parseFloat(o)||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),y.matchesMedia(s))return a}return"100vw"}(e));T[e]=t||_.width}return T[e]},y.setRes=function(e){var t;if(e)for(var n=0,r=(t=y.parseSet(e)).length;n<r;n++)oe(t[n],e.sizes);return t},y.setRes.res=oe,y.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,u,f,d,p,m,h,g,v=t[y.ns],A=y.DPR;if(o=v.curSrc||t[C],(c=v.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[y.ns].sets)&&n[n.length-1]),(r=ue(t,n))&&(t=y.makeUrl(t),e[y.ns].curSrc=t,(e[y.ns].curCan=r).res||oe(r,r.set.sizes)),r}(t,o,e[0].set))&&c.set===e[0].set&&((u=w&&!t.complete&&c.res-.1>A)||(c.cached=!0,c.res>=A&&(a=c))),!a)for(e.sort(le),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=A){a=e[s=r-1]&&(u||o!==y.makeUrl(n.url))&&(f=e[s].res,d=n.res,p=A,m=e[s].cached,g=h=void 0,p<("saveData"===z.algorithm?2.7<f?p+1:(g=(d-p)*(h=Math.pow(f-.6,1.5)),m&&(g+=.1*h),f+g):1<p?Math.sqrt(f*d):f))?e[s]:n;break}a&&(l=y.makeUrl(a.url),v.curSrc=l,v.curCan=a,l!==o&&y.setSrc(t,a),y.setSize(t))}},y.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},y.getSet=function(e){var t,n,r,s=!1,i=e[y.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&y.matchesMedia(n.media)&&(r=y.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},y.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[y.ns];(c.src===l||n.src)&&(c.src=f.call(e,"src"),c.src?d.call(e,m,c.src):p.call(e,m)),(c.srcset===l||n.srcset||!y.supSrcset||e.srcset)&&(r=f.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[y.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:f.call(e,"sizes")},c.sets.push(s),(i=(u||c.src)&&v.test(c.srcset||""))||!c.src||ue(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=l,c.supported=!(o||s&&!y.supSrcset||i&&!y.supSizes),a&&y.supSrcset&&!c.supported&&(r?(d.call(e,h,r),e.srcset=""):p.call(e,h)),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==y.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},y.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),n=e[y.ns],(r||n.evaled!==a)&&(n.parsed&&!t.reevaluate||y.parseSets(e,e.parentNode,t),n.supported?n.evaled=a:function(e){var t,n=y.getSet(e),r=!1;"pending"!==n&&(r=a,n&&(t=y.setRes(n),y.applySetCandidate(t,e))),e[y.ns].evaled=r}(e))},y.setupRun=function(){R&&!x&&M===e.devicePixelRatio||(x=!1,M=e.devicePixelRatio,E={},T={},y.DPR=M||1,_.width=Math.max(e.innerWidth||0,c.clientWidth),_.height=Math.max(e.innerHeight||0,c.clientHeight),_.vw=_.width/100,_.vh=_.height/100,a=[_.height,_.width,M].join("-"),_.em=y.getEmValue(),_.rem=_.em)},y.supPicture?(ce=t,y.fillImg=t):(Y=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=i.readyState||"";te=setTimeout(ee,"loading"===e?200:999),i.body&&(y.fillImgs(),(G=G||Y.test(e))&&clearTimeout(te))},te=setTimeout(ee,i.body?9:99),ne=c.clientHeight,$(e,"resize",(V=function(){x=Math.max(e.innerWidth||0,c.clientWidth)!==_.width||c.clientHeight!==ne,ne=c.clientHeight,x&&y.fillImgs()},J=99,Z=function(){var e=new Date-X;e<J?K=setTimeout(Z,J-e):(K=null,V())},function(){X=new Date,K||(K=setTimeout(Z,J))})),$(i,"readystatechange",ee)),y.picturefill=ce,y.fillImgs=ce,y.teardownRun=t,ce._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(z[t]=e[0],R&&y.fillImgs({reselect:!0}))}};for(;b&&b.length;)e.picturefillCFG.push(b.shift());e.picturefill=ce,"object"==typeof fe&&"object"==typeof fe.exports?fe.exports=ce:(me=function(){return ce}.call(de,pe,de,fe))===l||(fe.exports=me),y.supPicture||(r["image/webp"]=(re="image/webp",se="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ie=new e.Image).onerror=function(){r[re]=!1,ce()},ie.onload=function(){r[re]=1===ie.width,ce()},ie.src=se,"pending"))}(window,document)},function(e,t){var n,r;n=window,r=function(o,B){"use strict";if(!B.getElementsByClassName)return;var k,W,D=B.documentElement,c=o.Date,r=o.HTMLPictureElement,l="addEventListener",$="getAttribute",u=o[l],I=o.setTimeout,f=o.requestAnimationFrame||I,O=o.requestIdleCallback,U=/^picture$/i,s=["load","error","lazyincluded","_lazyloaded"],n={},F=Array.prototype.forEach,H=function(e,t){return n[t]||(n[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),n[t].test(e[$]("class")||"")&&n[t]},j=function(e,t){H(e,t)||e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)},q=function(e,t){var n;(n=H(e,t))&&e.setAttribute("class",(e[$]("class")||"").replace(n," "))},Q=function(t,n,e){var r=e?l:"removeEventListener";e&&Q(t,n),s.forEach(function(e){t[r](e,n)})},G=function(e,t,n,r,s){var i=B.createEvent("Event");return n||(n={}),n.instance=k,i.initEvent(t,!r,!s),i.detail=n,e.dispatchEvent(i),i},V=function(e,t){var n;!r&&(n=o.picturefill||W.pf)?(t&&t.src&&!e[$]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},J=function(e,t){return(getComputedStyle(e,null)||{})[t]},a=function(e,t,n){for(n=n||e.offsetWidth;n<W.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},K=function(){var n,r,t=[],s=[],i=t,a=function(){var e=i;for(i=t.length?s:t,r=!(n=!0);e.length;)e.shift()();n=!1},e=function(e,t){n&&!t?e.apply(this,arguments):(i.push(e),r||(r=!0,(B.hidden?I:f)(a)))};return e._lsFlush=a,e}(),X=function(n,e){return e?function(){K(n)}:function(){var e=this,t=arguments;K(function(){n.apply(e,t)})}},Z=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=c.now()-n;e<99?I(s,99-e):(O||r)(r)};return function(){n=c.now(),t||(t=I(s,99))}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in W=o.lazySizesConfig||o.lazysizesConfig||{},t)e in W||(W[e]=t[e]);o.lazySizesConfig=W,I(function(){W.init&&i()})}();var e=function(){var p,m,f,h,t,g,v,A,y,z,w,C,i=/^img$/i,d=/^iframe$/i,b="onscroll"in o&&!/(gle|ing)bot/.test(navigator.userAgent),S=0,x=0,E=-1,T=function(e){x--,(!e||x<0||!e.target)&&(x=0)},M=function(e){return null==C&&(C="hidden"==J(B.body,"visibility")),C||"hidden"!=J(e.parentNode,"visibility")&&"hidden"!=J(e,"visibility")},_=function(e,t){var n,r=e,s=M(e);for(A-=t,w+=t,y-=t,z+=t;s&&(r=r.offsetParent)&&r!=B.body&&r!=D;)(s=0<(J(r,"opacity")||1))&&"visible"!=J(r,"overflow")&&(n=r.getBoundingClientRect(),s=z>n.left&&y<n.right&&w>n.top-1&&A<n.bottom+1);return s},e=function(){var e,t,n,r,s,i,a,o,c,l,u,f,d=k.elements;if((h=W.loadMode)&&x<8&&(e=d.length)){for(t=0,E++,l=!W.expand||W.expand<1?500<D.clientHeight&&500<D.clientWidth?500:370:W.expand,k._defEx=l,u=l*W.expFactor,f=W.hFac,C=null,S<u&&x<1&&2<E&&2<h&&!B.hidden?(S=u,E=0):S=1<h&&1<E&&x<6?l:0;t<e;t++)if(d[t]&&!d[t]._lazyRace)if(b)if((o=d[t][$]("data-expand"))&&(i=1*o)||(i=S),c!==i&&(g=innerWidth+i*f,v=innerHeight+i,a=-1*i,c=i),n=d[t].getBoundingClientRect(),(w=n.bottom)>=a&&(A=n.top)<=v&&(z=n.right)>=a*f&&(y=n.left)<=g&&(w||z||y||A)&&(W.loadHidden||M(d[t]))&&(m&&x<3&&!o&&(h<3||E<4)||_(d[t],i))){if(N(d[t]),s=!0,9<x)break}else!s&&m&&!r&&x<4&&E<4&&2<h&&(p[0]||W.preloadAfterLoad)&&(p[0]||!o&&(w||z||y||A||"auto"!=d[t][$](W.sizesAttr)))&&(r=p[0]||d[t]);else N(d[t]);r&&!s&&N(r)}},n=function(e){var n,r=0,s=W.throttleDelay,i=W.ricTimeout,t=function(){n=!1,r=c.now(),e()},a=O&&49<i?function(){O(t,{timeout:i}),i!==W.ricTimeout&&(i=W.ricTimeout)}:X(function(){I(t)},!0);return function(e){var t;(e=!0===e)&&(i=33),n||(n=!0,(t=s-(c.now()-r))<0&&(t=0),e||t<9?a():I(a,t))}}(e),P=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(T(e),j(t,W.loadedClass),q(t,W.loadingClass),Q(t,R),G(t,"lazyloaded"))},r=X(P),R=function(e){r({target:e.target})},L=function(e){var t,n=e[$](W.srcsetAttr);(t=W.customMedia[e[$]("data-media")||e[$]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},a=X(function(e,t,n,r,s){var i,a,o,c,l,u;(l=G(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?j(e,W.autosizesClass):e.setAttribute("sizes",r)),a=e[$](W.srcsetAttr),i=e[$](W.srcAttr),s&&(o=e.parentNode,c=o&&U.test(o.nodeName||"")),u=t.firesLoad||"src"in e&&(a||i||c),l={target:e},j(e,W.loadingClass),u&&(clearTimeout(f),f=I(T,2500),Q(e,R,!0)),c&&F.call(o.getElementsByTagName("source"),L),a?e.setAttribute("srcset",a):i&&!c&&(d.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,i):e.src=i),s&&(a||c)&&V(e,{src:i})),e._lazyRace&&delete e._lazyRace,q(e,W.lazyClass),K(function(){(!u||e.complete&&1<e.naturalWidth)&&(P(l),e._lazyCache=!0,I(function(){"_lazyCache"in e&&delete e._lazyCache},9))},!0)}),N=function(e){var t,n=i.test(e.nodeName),r=n&&(e[$](W.sizesAttr)||e[$]("sizes")),s="auto"==r;(!s&&m||!n||!e[$]("src")&&!e.srcset||e.complete||H(e,W.errorClass)||!H(e,W.lazyClass))&&(t=G(e,"lazyunveilread").detail,s&&Y.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,x++,a(e,t,s,r,n))},s=function(){if(!m)if(c.now()-t<999)I(s,999);else{var e=Z(function(){W.loadMode=3,n()});m=!0,W.loadMode=3,n(),u("scroll",function(){3==W.loadMode&&(W.loadMode=2),e()},!0)}};return{_:function(){t=c.now(),k.elements=B.getElementsByClassName(W.lazyClass),p=B.getElementsByClassName(W.lazyClass+" "+W.preloadClass),u("scroll",n,!0),u("resize",n,!0),o.MutationObserver?new MutationObserver(n).observe(D,{childList:!0,subtree:!0,attributes:!0}):(D[l]("DOMNodeInserted",n,!0),D[l]("DOMAttrModified",n,!0),setInterval(n,999)),u("hashchange",n,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){B[l](e,n,!0)}),/d$|^c/.test(B.readyState)?s():(u("load",s),B[l]("DOMContentLoaded",n),I(s,2e4)),k.elements.length?(e(),K._lsFlush()):n()},checkElems:n,unveil:N}}(),Y=function(){var n,i=X(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),U.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||V(e,n.detail)}),r=function(e,t,n){var r,s=e.parentNode;s&&(n=a(e,s,n),(r=G(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&i(e,s,r,n))},e=Z(function(){var e,t=n.length;if(t)for(e=0;e<t;e++)r(n[e])});return{_:function(){n=B.getElementsByClassName(W.autosizesClass),u("resize",e)},checkElems:e,updateElem:r}}(),i=function(){i.i||(i.i=!0,Y._(),e._())};return k={cfg:W,autoSizer:Y,loader:e,init:i,uP:V,aC:j,rC:q,hC:H,fire:G,gW:a,rAF:K}}(n,n.document),n.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}]);