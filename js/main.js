"use strict";function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _createForOfIteratorHelper(t,e){var n,o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return o&&(t=o),n=0,{s:e=function(){},n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,a=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var l,a={},t=Object.prototype,s=t.hasOwnProperty,u=Object.defineProperty||function(t,e,n){t[e]=n.value},e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(l){i=function(t,e,n){return t[e]=n}}function c(t,e,n,o){var r,i,a,c,e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),o=new G(o||[]);return u(e,"_invoke",{value:(r=t,i=n,a=o,c=d,function(t,e){if(c===m)throw new Error("Generator is already running");if(c===p){if("throw"===t)throw e;return{value:l,done:!0}}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n=n&&function t(e,n){var o=n.method,r=e.iterator[o];return r===l?(n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=l,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),h):"throw"===(o=f(r,e.iterator,n.arg)).type?(n.method="throw",n.arg=o.arg,n.delegate=null,h):(r=o.arg)?r.done?(n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=l),n.delegate=null,h):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}(n,a)){if(n===h)continue;return n}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===d)throw c=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);if(c=m,"normal"===(n=f(r,i,a)).type){if(c=a.done?p:y,n.arg===h)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(c=p,a.method="throw",a.arg=n.arg)}})}),e}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var d="suspendedStart",y="suspendedYield",m="executing",p="completed",h={};function g(){}function b(){}function v(){}i(e={},o,function(){return this});var L=Object.getPrototypeOf,_=((L=L&&L(L(x([]))))&&L!==t&&s.call(L,o)&&(e=L),v.prototype=g.prototype=Object.create(e));function S(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function w(a,c){var e;u(this,"_invoke",{value:function(n,o){function t(){return new c(function(t,e){!function e(t,n,o,r){var i;return"throw"!==(t=f(a[t],a,n)).type?(n=(i=t.arg).value)&&"object"==_typeof(n)&&s.call(n,"__await")?c.resolve(n.__await).then(function(t){e("next",t,o,r)},function(t){e("throw",t,o,r)}):c.resolve(n).then(function(t){i.value=t,o(i)},function(t){return e("throw",t,o,r)}):void r(t.arg)}(n,o,t,e)})}return e=e?e.then(t,t):t()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(e){if(e||""===e){var n,t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(s.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=l,t.done=!0,t}).next=t}throw new TypeError(_typeof(e)+" is not iterable")}return u(_,"constructor",{value:b.prototype=v,configurable:!0}),u(v,"constructor",{value:b,configurable:!0}),b.displayName=i(v,r,"GeneratorFunction"),a.isGeneratorFunction=function(t){return!!(t="function"==typeof t&&t.constructor)&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,i(t,r,"GeneratorFunction")),t.prototype=Object.create(_),t},a.awrap=function(t){return{__await:t}},S(w.prototype),i(w.prototype,n,function(){return this}),a.AsyncIterator=w,a.async=function(t,e,n,o,r){void 0===r&&(r=Promise);var i=new w(c(t,e,n,o),r);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(_),i(_,r,"Generator"),i(_,o,function(){return this}),i(_,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,n=Object(t),o=[];for(e in n)o.push(e);return o.reverse(),function t(){for(;o.length;){var e=o.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=x,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=l)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var o=this;function t(t,e){return i.type="throw",i.arg=n,o.next=t,e&&(o.method="next",o.arg=l),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e],i=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var a=s.call(r,"catchLoc"),c=s.call(r,"finallyLoc");if(a&&c){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&s.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}var i=(r=r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc?null:r)?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,o,r=this.tryEntries[e];if(r.tryLoc===t)return"throw"===(n=r.completion).type&&(o=n.arg,O(r)),o}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=l),h}},a}function asyncGeneratorStep(t,e,n,o,r,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(o,r)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,n){var o=c.apply(t,a);function r(t){asyncGeneratorStep(o,e,n,r,i,"next",t)}function i(t){asyncGeneratorStep(o,e,n,r,i,"throw",t)}r(void 0)})}}document.addEventListener("DOMContentLoaded",function(){function z(t){function e(t){return Array.from(t).reduce(function(t,e){return t+e.offsetWidth},0)}t&&(t=e(document.querySelector("#blog-info > a").children),n=e(document.getElementById("menus").children),o=t+n,W=document.getElementById("nav"));var n,t=window.innerWidth<=768||o>W.offsetWidth-120;W.classList.toggle("hide-menu",t)}function e(n){var o=(window.globalFn||{}).themeChange||{};o&&Object.keys(o).forEach(function(t){var e=o[t];["disqus","disqusjs"].includes(t)?setTimeout(function(){return e(n)},300):e(n)})}function M(t){t.forEach(function(t){var e=t.getAttribute("datetime");t.textContent=btf.diffDate(e,!0),t.style.display="inline"})}function n(){var t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),Y=!1}function U(){a.apply(this,arguments)}var o,W,t,r,i,a,l,Y=!1,c=(l=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)})),a=_asyncToGenerator(_regeneratorRuntime().mark(function t(a){var c,e,n=arguments;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=1<n.length&&void 0!==n[1]&&n[1],e=function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n,o,r,i;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=_createForOfIteratorHelper(a),t.prev=1,e.s();case 3:if((n=e.n()).done){t.next=22;break}if(n=n.value,btf.isHidden(n))return t.abrupt("continue",20);t.next=7;break;case 7:if(c&&n.classList.contains("loaded")&&(n.querySelector(".gallery-items").innerHTML="",o=n.querySelector(":scope > button"),r=n.querySelector(":scope > .loading-container"),o&&o.remove(),r&&r.remove()),o="true"===n.getAttribute("data-button"),r=n.firstElementChild.textContent,n.classList.add("loaded"),"url"===n.getAttribute("data-type"))return t.next=14,function(){return l.apply(this,arguments)}(r);t.next=17;break;case 14:t.t0=t.sent,t.next=18;break;case 17:t.t0=JSON.parse(r);case 18:i=t.t0,function(i,l,t,e){function s(t){return t.replace(/"/g,"&quot;")}function a(c,t){f.append(function(t){for(var e=[],n=(c-1)*t,o=0;o<t;++o){var r=n+o;if(u<=r)break;var i=(r=l[r]).alt?'alt="'.concat(s(r.alt),'"'):"",a=r.title?'title="'.concat(s(r.title),'"'):"";e.push('<div class="item ">\n            <img src="'.concat(r.url,'" data-grid-maintained-target="true" ').concat(i+a," />\n          </div>"))}return e}(t),c)}var c=2<arguments.length&&void 0!==t&&t,t=3<arguments.length?e:void 0,u=l.length,f=new InfiniteGrid.JustifiedInfiniteGrid(i,{gap:5,isConstantSize:!0,sizeRange:[150,600],useResizeObserver:!0,observeChildren:!0,useTransform:!0}),d=(t&&btf.addGlobalFn("igOfTabs",function(){f.destroy()},!1,t),GLOBAL_CONFIG.infinitegrid.buttonText),y=Math.ceil(u/10),n=btf.debounce(function(t){a(t=(+t.groupKey||0)+1,10),t===y&&f.off("requestAppend",n)},300);btf.setLoading.add(i),f.on("renderComplete",function t(e){var n,o=e.updated,r=e.isResize,e=e.mounted;o.length&&e.length&&!r&&(btf.loadLightbox(i.querySelectorAll("img:not(.medium-zoom-image)")),f.getGroups().length===y?(btf.setLoading.remove(i),f.off("renderComplete",t)):c&&(btf.setLoading.remove(i),n=i,(o=document.createElement("button")).textContent=d,o.addEventListener("click",function t(e){e.target.removeEventListener("click",t),e.target.remove(),btf.setLoading.add(n),a(f.getGroups().length+1,10)}),n.insertAdjacentElement("afterend",o)))}),c?a(1,10):(f.on("requestAppend",n),f.renderItems()),btf.addGlobalFn("justifiedGallery",function(){f.destroy()})}(n.lastElementChild,i,o,c);case 20:t.next=3;break;case 22:t.next=27;break;case 24:t.prev=24,t.t1=t.catch(1),e.e(t.t1);case 27:return t.prev=27,e.f(),t.finish(27);case 30:case"end":return t.stop()}},t,null,[[1,24,27,30]])}));return function(){return t.apply(this,arguments)}}(),"function"!=typeof InfiniteGrid){t.next=6;break}e(),t.next=9;break;case 6:return t.next=8,getScript("".concat(GLOBAL_CONFIG.infinitegrid.js));case 8:e();case 9:case"end":return t.stop()}},t)})),{readmode:function(){var e=document.body,n=(e.classList.add("read-mode"),document.createElement("button"));n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)})},darkmode:function(){var t="dark"===document.documentElement.getAttribute("data-theme")?"light":"dark";"dark"==t?(activateDarkMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),saveToLocal.set("theme",t,2),e(t)},"rightside-config":function(t){var e=t.firstElementChild;e.classList.contains("show")&&(e.classList.add("status"),setTimeout(function(){e.classList.remove("status")},300)),e.classList.toggle("show")},"go-up":function(){btf.scrollToDest(0,500)},"hide-aside-btn":function(){var t=document.documentElement.classList,e=t.contains("hide-aside")?"show":"hide";saveToLocal.set("aside-status",e,2),t.toggle("hide-aside")},"mobile-toc-button":function(t){var e=document.getElementById("card-toc");e.style.transition="transform 0.3s ease-in-out",e.classList.toggle("open"),e.addEventListener("transitionend",function(){e.style.transition=""},{once:!0})},"chat-btn":function(){window.chatBtnFn()},translateLink:function(){window.translateFn.translatePage()}});document.getElementById("rightside").addEventListener("click",function(t){(t=t.target.closest("[id]"))&&c[t.id]&&c[t.id](this)}),window.refreshFn=function(){var n,o,r,i,a,c,l,s,u,f,d,y,m,p,h,e,g,b,v,L,_,S,w,j,q,P,D,E,O,G,x;z(!0),W.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(A=(t=GLOBAL_CONFIG.noticeOutdate).limitDay,I=t.messagePrev,C=t.messageNext,t=t.position,A<=(k=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))&&((A=document.createElement("div")).className="post-outdate-notice",A.textContent="".concat(I," ").concat(k," ").concat(C),I=document.getElementById("article-container"),"top"===t?I.insertBefore(A,I.firstChild):I.appendChild(A))),GLOBAL_CONFIG.relativeDate.post&&M(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&M(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(k=document.getElementById("runtimeshow"))&&(C=k.getAttribute("data-publishDate"),k.textContent="".concat(btf.diffDate(C)," ").concat(GLOBAL_CONFIG.runtime)),(t=document.getElementById("last-push-date"))&&(I=t.getAttribute("data-lastPushDate"),t.textContent=btf.diffDate(I,!0)),(A=document.querySelector("#aside-cat-list.expandBtn"))&&btf.addEventListenerPjax(A,"click",function(t){var e=t.target;"I"===e.nodeName&&(t.preventDefault(),e.parentNode.classList.toggle("expand"))},!0)),O=GLOBAL_CONFIG_SITE.isToc,G=GLOBAL_CONFIG.isAnchor,(x=document.getElementById("article-container"))&&(O||G)&&(O&&(S=document.getElementById("card-toc"),j=(w=S.querySelector(".toc-content")).querySelectorAll(".toc-link"),q=S.querySelector(".toc-percentage"),P=w.classList.contains("is-expand"),btf.addEventListenerPjax(w,"click",function(t){var e=t.target.closest(".toc-link");e&&(t.preventDefault(),btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&S.classList.remove("open"))}),_=function(t){var t=t.getBoundingClientRect().top,e=w.scrollTop;t>document.documentElement.clientHeight-100&&(w.scrollTop=e+150),t<100&&(w.scrollTop=e-150)}),D=x.querySelectorAll("h1,h2,h3,h4,h5,h6"),E="",k=btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop,n=(O&&GLOBAL_CONFIG.percent.toc&&(q.textContent=btf.getScrollPercent(t,x)),t);if(0!==n){var o="",r="";if(D.forEach(function(t,e){n>btf.getEleTop(t)-80&&(t=t.id,o=t?"#"+encodeURI(t):"",r=e)}),E!==r&&(G&&btf.updateAnchor(o),E=r,O&&(w.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),""!==o))){var e=j[r];if(e.classList.add("active"),setTimeout(function(){_(e)},0),!P)for(var i=e.parentNode;!i.matches(".toc");i=i.parentNode)i.matches("li")&&i.classList.add("active")}}},100),btf.addEventListenerPjax(window,"scroll",k,{passive:!0})),GLOBAL_CONFIG_SITE.isHome&&(F=document.getElementById("scroll-down"))&&btf.addEventListenerPjax(F,"click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),(C=GLOBAL_CONFIG.highlight)&&(t=C.highlightCopy,s=C.highlightLang,u=C.highlightHeightLimit,C=C.plugin,I=GLOBAL_CONFIG_SITE.isHighlightShrink,f=t||s||void 0!==I,A="highlight.js"===C?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(f||u)&&A.length&&(y=!0===I?"closed":"",m=void 0!==I?'<i class="fas fa-angle-down expand"></i>':"",p=t?'<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>':"",h=function(t,e){var n;void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(e):((n=t.previousElementSibling).textContent=e,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},800))},e=function(t){(e=t.parentNode).classList.add("copy-true");var e,n=window.getSelection(),o=document.createRange();o.selectNodeContents(e.querySelectorAll("".concat(d?"pre code":"table .code pre"))[0]),n.removeAllRanges(),n.addRange(o),o=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),h(o,GLOBAL_CONFIG.copy.success)):h(o,GLOBAL_CONFIG.copy.noSupport),n.removeAllRanges(),e.classList.remove("copy-true")},g=function(t){t.classList.toggle("closed")},b=function(t){(t=t.target.classList).contains("expand")?g(this):t.contains("copy-button")&&e(this)},v=function(){this.classList.toggle("expand-done")},L=function(t,e,n){var o,r=document.createDocumentFragment();f&&((o=document.createElement("div")).className="highlight-tools ".concat(y),o.innerHTML=m+t+p,btf.addEventListenerPjax(o,"click",b),r.appendChild(o)),u&&e.offsetHeight>u+30&&((t=document.createElement("div")).className="code-expand-btn",t.innerHTML='<i class="fas fa-angle-double-down"></i>',btf.addEventListenerPjax(t,"click",v),r.appendChild(t)),"hl"===n?e.insertBefore(r,e.firstChild):e.parentNode.insertBefore(r,e)},(d="prismjs"===C)?A.forEach(function(t){var e;s?(e=t.getAttribute("data-language")||"Code",e='<div class="code-lang">'.concat(e,"</div>"),btf.wrap(t,"figure",{class:"highlight"}),L(e,t)):(btf.wrap(t,"figure",{class:"highlight"}),L("",t))}):A.forEach(function(t){var e;s?(e=t.getAttribute("class").split(" ")[1],e='<div class="code-lang">'.concat(e="plain"!==e&&void 0!==e?e:"Code","</div>"),L(e,t,"hl")):L("",t,"hl")}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.title||t.alt;n&&((e=document.createElement("div")).className="img-alt is-center",e.textContent=n,t.insertAdjacentElement("afterend",e))}),o=document.getElementById("rightside"),r=window.innerHeight+56,i=0,a=document.getElementById("page-header"),c="undefined"!=typeof chatBtn,l=GLOBAL_CONFIG.percent.rightside,document.body.scrollHeight<=r?o.classList.add("rightside-show"):(n="",N=btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop,e=i<t;56<(i=t)?(""===n&&(a.classList.add("nav-fixed"),o.classList.add("rightside-show")),e?"down"!==n&&(a.classList.remove("nav-visible"),c&&window.chatBtn.hide(),n="down"):"up"!==n&&(a.classList.add("nav-visible"),c&&window.chatBtn.show(),n="up")):(n="",0===t&&a.classList.remove("nav-fixed","nav-visible"),o.classList.remove("rightside-show")),l&&(e=t,e=btf.getScrollPercent(e,document.body),t=document.getElementById("go-up"),e<95?(t.classList.add("show-percent"),t.querySelector(".scroll-percent").textContent=e):t.classList.remove("show-percent")),document.body.scrollHeight<=r&&o.classList.add("rightside-show")},300),btf.addEventListenerPjax(window,"scroll",N,{passive:!0})),btf.removeGlobalFnEvent("justifiedGallery");var t,A,I,C,k,R,B,H,N,T,F=document.querySelectorAll("#article-container .gallery-container");F.length&&U(F),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(N=document.querySelectorAll("#article-container table")).length&&N.forEach(function(t){t.closest(".highlight")||btf.wrap(t,"div",{class:"table-wrap"})}),(N=document.querySelectorAll("#article-container .hide-button")).length&&(R=function(t){this.classList.add("open");var e=this.nextElementSibling.querySelectorAll(".gallery-container");e.length&&U(e)},N.forEach(function(t){t.addEventListener("click",R,{once:!0})})),(F=document.querySelectorAll("#article-container .tabs")).length&&(T=function(t,e){Array.from(t).forEach(function(t){t.classList.remove("active"),t!==e&&t.id!==e||t.classList.add("active")})},F.forEach(function(t){var e,n=!!t.querySelectorAll(".gallery-container");btf.addEventListenerPjax(t.firstElementChild,"click",function(t){var e;(t=t.target.closest("button")).classList.contains("active")||(T(this.children,t),this.classList.remove("no-default"),t=t.getAttribute("data-href"),e=this.nextElementSibling,T(e.children,t),n&&(btf.removeGlobalFnEvent("igOfTabs",this),(e=e.querySelectorAll(":scope > #".concat(t," .gallery-container"))).length&&U(e,this)))}),e=t,btf.addEventListenerPjax(e.lastElementChild,"click",function(t){t.target.closest("button")&&btf.scrollToDest(btf.getEleTop(e),300)})})),(N=document.getElementById("switch-btn"))&&(B=!1,H=document.getElementById("post-comment"),btf.addEventListenerPjax(N,"click",function(){H.classList.toggle("move"),B||"function"!=typeof loadOtherComment||(B=!0,loadOtherComment())})),btf.addEventListenerPjax(document.getElementById("toggle-menu"),"click",function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),Y=!0})},refreshFn(),window.addEventListener("resize",function(){z(!1),Y&&btf.isHidden(document.getElementById("toggle-menu"))&&n()}),document.getElementById("menu-mask").addEventListener("click",function(t){n()}),document.querySelector("#sidebar-menus .menus_items").addEventListener("click",function(t){(t=t.target.closest(".site-page.group"))&&t.classList.toggle("hide")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(t=GLOBAL_CONFIG.copyright,r=t.limitCount,i=t.languages,document.body.addEventListener("copy",function(t){t.preventDefault();var e=window.getSelection(0).toString(),n=e;return e.length>r&&(n="".concat(e,"\n\n\n").concat(i.author,"\n").concat(i.link).concat(window.location.href,"\n").concat(i.source,"\n").concat(i.info)),(t.clipboardData?t:window).clipboardData.setData("text",n)})),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(t){void 0===saveToLocal.get("theme")&&(t.matches?e("dark"):e("light"))})});