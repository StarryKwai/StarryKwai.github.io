"use strict";function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _createForOfIteratorHelper(t,e){var n,r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return r&&(t=r),n=0,{s:e=function(){},n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);if("object"!=_typeof(n=n.call(t,e||"default")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}var LocalSearch=function(){function r(t){var e=void 0===(e=t.path)?"":e,n=void 0!==(n=t.unescape)&&n,t=void 0===(t=t.top_n_per_article)?1:t;_classCallCheck(this,r),this.path=e,this.unescape=n,this.top_n_per_article=t,this.isfetched=!1,this.datas=null}return _createClass(r,[{key:"getIndexByWord",value:function(t,i){var a=this,l=2<arguments.length&&void 0!==arguments[2]&&arguments[2],c=[],u=new Set;return l||(i=i.toLowerCase()),t.forEach(function(t){a.unescape&&((e=document.createElement("div")).innerText=t,t=e.innerHTML);var e,n=t.length;if(0!==n){var r,o=0;for(l||(t=t.toLowerCase());-1<(r=i.indexOf(t,o));)c.push({position:r,word:t}),u.add(t),o=r+n}}),c.sort(function(t,e){return t.position!==e.position?t.position-e.position:e.word.length-t.word.length}),[c,u]}},{key:"mergeIntoSlice",value:function(t,e,n){for(var r=n[0],o=r.position,i=r.word,a=[],l=new Set;o+i.length<=e&&0!==n.length;){l.add(i),a.push({position:o,length:i.length});var c=o+i.length;for(n.shift();0!==n.length&&(o=(r=n[0]).position,i=r.word,o<c);)n.shift()}return{hits:a,start:t,end:e,count:l.size}}},{key:"highlightKeyword",value:function(t,e){var n,r="",o=e.start,i=_createForOfIteratorHelper(e.hits);try{for(i.s();!(n=i.n()).done;){var a=n.value,l=a.position,c=a.length;r+=t.substring(o,l),o=l+c,r+='<mark class="search-keyword">'.concat(t.substr(l,c),"</mark>")}}catch(t){i.e(t)}finally{i.f()}return r+t.substring(o,e.end)}},{key:"getResultItems",value:function(y){var d=this,h=[];return this.datas.forEach(function(t){var e=t.title,n=t.content,t=t.url,r=(o=_slicedToArray(d.getIndexByWord(y,e),2))[0],o=o[1],i=(a=_slicedToArray(d.getIndexByWord(y,n),2))[0],a=a[1],o=new Set([].concat(_toConsumableArray(o),_toConsumableArray(a))).size;if(0!==(a=r.length+i.length)){for(var l=[],c=(0!==r.length&&l.push(d.mergeIntoSlice(0,e.length,r)),[]);0!==i.length;){var u=i[0].position,s=Math.max(0,u-20),u=Math.min(n.length,u+100);c.push(d.mergeIntoSlice(s,u,i))}c.sort(function(t,e){return t.count!==e.count?e.count-t.count:t.hits.length!==e.hits.length?e.hits.length-t.hits.length:t.start-e.start}),0<=(r=parseInt(d.top_n_per_article,10))&&(c=c.slice(0,r));var f="";(t=new URL(t,location.origin)).searchParams.append("highlight",y.join(" ")),0!==l.length?f+='<div class="local-search-hit-item"><a href="'.concat(t.href,'"><span class="search-result-title">').concat(d.highlightKeyword(e,l[0]),"</span>"):f+='<div class="local-search-hit-item"><a href="'.concat(t.href,'"><span class="search-result-title">').concat(e,"</span>"),c.forEach(function(t){f+='<p class="search-result">'.concat(d.highlightKeyword(n,t),"...</p></a>")}),f+="</div>",h.push({item:f,id:h.length,hitCount:a,includedCount:o})}}),h}},{key:"fetchData",value:function(){var e=this,n=!this.path.endsWith("json");fetch(this.path).then(function(t){return t.text()}).then(function(t){e.isfetched=!0,e.datas=n?_toConsumableArray((new DOMParser).parseFromString(t,"text/xml").querySelectorAll("entry")).map(function(t){return{title:t.querySelector("title").textContent,content:t.querySelector("content").textContent,url:t.querySelector("url").textContent}}):JSON.parse(t),e.datas=e.datas.filter(function(t){return t.title}).map(function(t){return t.title=t.title.trim(),t.content=t.content?t.content.trim().replace(/<[^>]+>/g,""):"",t.url=decodeURIComponent(t.url).replace(/\/{2,}/g,"/"),t}),window.dispatchEvent(new Event("search:loaded"))})}},{key:"highlightText",value:function(e,t,n){var r,o=e.nodeValue,i=t.start,a=[],l=_createForOfIteratorHelper(t.hits);try{for(l.s();!(r=l.n()).done;){var c=r.value,u=c.position,s=c.length,f=document.createTextNode(o.substring(i,u)),i=u+s,y=document.createElement("mark");y.className=n,y.appendChild(document.createTextNode(o.substr(u,s))),a.push(f,y)}}catch(t){l.e(t)}finally{l.f()}e.nodeValue=o.substring(i,t.end),a.forEach(function(t){e.parentNode.insertBefore(t,e)})}},{key:"highlightSearchWords",value:function(t){var n=this,e=new URL(location.href).searchParams.get("highlight"),r=e?e.split(" "):[];if(r.length&&t){for(var o=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null),i=[];o.nextNode();)o.currentNode.parentNode.matches("button, select, textarea, .mermaid")||i.push(o.currentNode);i.forEach(function(t){var e=_slicedToArray(n.getIndexByWord(r,t.nodeValue),1)[0];e.length&&(e=n.mergeIntoSlice(0,t.nodeValue.length,e),n.highlightText(t,e,"search-keyword"))})}}}]),r}();window.addEventListener("load",function(){function t(){var t=document.body.style;t.width="100%",t.overflow="hidden",btf.animateIn(h,"to_show 0.5s"),btf.animateIn(p,"titleScale 0.5s"),setTimeout(function(){c.focus()},300),d||(l.isfetched||l.fetchData(),c.addEventListener("input",y),d=!0),document.addEventListener("keydown",function t(e){"Escape"===e.code&&(b(),document.removeEventListener("keydown",t))}),m(),window.addEventListener("resize",m)}function e(){btf.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",t)}var n=GLOBAL_CONFIG.localSearch,r=n.path,o=n.top_n_per_article,i=n.unescape,a=n.languages,l=new LocalSearch({path:r,top_n_per_article:o,unescape:i}),c=document.querySelector("#local-search-input input"),u=document.getElementById("local-search-stats-wrap"),s=document.getElementById("loading-status"),f=!r.endsWith("json"),y=function(){var t,e,n,r;l.isfetched&&(r=c.value.trim().toLowerCase(),""!==(r=f?r.replace(/</g,"&lt;").replace(/>/g,"&gt;"):r)&&(s.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'),n=r.split(/[-\s]+/),t=document.getElementById("local-search-results"),e=[],0<r.length&&(e=l.getResultItems(n)),1===n.length&&""===n[0]?(t.textContent="",u.textContent=""):0===e.length?(t.textContent="",(n=document.createElement("div")).className="search-result-stats",n.textContent=a.hits_empty.replace(/\$\{query}/,r),u.innerHTML=n.outerHTML):(e.sort(function(t,e){return t.includedCount!==e.includedCount?e.includedCount-t.includedCount:t.hitCount!==e.hitCount?e.hitCount-t.hitCount:e.id-t.id}),r=a.hits_stats.replace(/\$\{hits}/,e.length),t.innerHTML='<div class="search-result-list">'.concat(e.map(function(t){return t.item}).join(""),"</div>"),u.innerHTML='<hr><div class="search-result-stats">'.concat(r,"</div>"),window.pjax&&window.pjax.refresh(t)),s.textContent="")},d=!1,h=document.getElementById("search-mask"),p=document.querySelector("#local-search .search-dialog"),m=function(){window.innerWidth<768&&p.style.setProperty("--search-height",window.innerHeight+"px")},b=function(){var t=document.body.style;t.width="",t.overflow="",btf.animateOut(p,"search_close .5s"),btf.animateOut(h,"to_hide 0.5s"),window.removeEventListener("resize",m)};window.addEventListener("search:loaded",function(){var t=document.getElementById("loading-database");t.nextElementSibling.style.display="block",t.remove()}),e(),document.querySelector("#local-search .search-close-button").addEventListener("click",b),h.addEventListener("click",b),GLOBAL_CONFIG.localSearch.preload&&l.fetchData(),l.highlightSearchWords(document.getElementById("article-container")),window.addEventListener("pjax:complete",function(){btf.isHidden(h)||b(),l.highlightSearchWords(document.getElementById("article-container")),e()})});