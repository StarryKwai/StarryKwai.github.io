"use strict";function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var n,r,i,a,l=[],c=!0,u=!1;try{if(i=(o=o.call(t)).next,0===e){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=i.call(o)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,r=t}finally{try{if(!c&&null!=o.return&&(a=o.return(),Object(a)!==a))return}finally{if(u)throw r}}return l}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _createForOfIteratorHelper(t,e){var o,n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return n&&(t=n),o=0,{s:e=function(){},n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){return"symbol"==_typeof(t=_toPrimitive(t,"string"))?t:String(t)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);if("object"!=_typeof(o=o.call(t,e||"default")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}var LocalSearch=function(){function n(t){var e=void 0===(e=t.path)?"":e,o=void 0!==(o=t.unescape)&&o,t=void 0===(t=t.top_n_per_article)?1:t;_classCallCheck(this,n),this.path=e,this.unescape=o,this.top_n_per_article=t,this.isfetched=!1,this.datas=null}return _createClass(n,[{key:"getIndexByWord",value:function(t,i){var a=this,l=2<arguments.length&&void 0!==arguments[2]&&arguments[2],c=[],u=new Set;return l||(i=i.toLowerCase()),t.forEach(function(t){a.unescape&&((e=document.createElement("div")).innerText=t,t=e.innerHTML);var e,o=t.length;if(0!==o){var n,r=0;for(l||(t=t.toLowerCase());-1<(n=i.indexOf(t,r));)c.push({position:n,word:t}),u.add(t),r=n+o}}),c.sort(function(t,e){return t.position!==e.position?t.position-e.position:e.word.length-t.word.length}),[c,u]}},{key:"mergeIntoSlice",value:function(t,e,o){for(var n=o[0],r=n.position,i=n.word,a=[],l=new Set;r+i.length<=e&&0!==o.length;){l.add(i),a.push({position:r,length:i.length});var c=r+i.length;for(o.shift();0!==o.length&&(r=(n=o[0]).position,i=n.word,r<c);)o.shift()}return{hits:a,start:t,end:e,count:l.size}}},{key:"highlightKeyword",value:function(t,e){var o,n="",r=e.start,i=_createForOfIteratorHelper(e.hits);try{for(i.s();!(o=i.n()).done;){var a=o.value,l=a.position,c=a.length;n+=t.substring(r,l),r=l+c,n+='<mark class="search-keyword">'.concat(t.substr(l,c),"</mark>")}}catch(t){i.e(t)}finally{i.f()}return n+t.substring(r,e.end)}},{key:"getResultItems",value:function(s){var p=this,m=[];return this.datas.forEach(function(t){var e=t.title,o=t.content,t=t.url,n=(r=_slicedToArray(p.getIndexByWord(s,e),2))[0],r=r[1],i=(a=_slicedToArray(p.getIndexByWord(s,o),2))[0],a=a[1],r=new Set([].concat(_toConsumableArray(r),_toConsumableArray(a))).size;if(0!==(a=n.length+i.length)){for(var l=[],c=(0!==n.length&&l.push(p.mergeIntoSlice(0,e.length,n)),[]);0!==i.length;){var u=i[0].position,y=Math.max(0,u-20),u=Math.min(o.length,u+100);c.push(p.mergeIntoSlice(y,u,i))}c.sort(function(t,e){return t.count!==e.count?e.count-t.count:t.hits.length!==e.hits.length?e.hits.length-t.hits.length:t.start-e.start}),0<=(n=parseInt(p.top_n_per_article,10))&&(c=c.slice(0,n));var f="";(t=new URL(t,location.origin)).searchParams.append("highlight",s.join(" ")),0!==l.length?f+='<div class="local-search-hit-item"><a href="'.concat(t.href,'"><span class="search-result-title">').concat(p.highlightKeyword(e,l[0]),"</span>"):f+='<div class="local-search-hit-item"><a href="'.concat(t.href,'"><span class="search-result-title">').concat(e,"</span>"),c.forEach(function(t){f+='<p class="search-result">'.concat(p.highlightKeyword(o,t),"...</p></a>")}),f+="</div>",m.push({item:f,id:m.length,hitCount:a,includedCount:r})}}),m}},{key:"fetchData",value:function(){var e=this,o=!this.path.endsWith("json");fetch(this.path).then(function(t){return t.text()}).then(function(t){e.isfetched=!0,e.datas=o?_toConsumableArray((new DOMParser).parseFromString(t,"text/xml").querySelectorAll("entry")).map(function(t){return{title:t.querySelector("title").textContent,content:t.querySelector("content").textContent,url:t.querySelector("url").textContent}}):JSON.parse(t),e.datas=e.datas.filter(function(t){return t.title}).map(function(t){return t.title=t.title.trim(),t.content=t.content?t.content.trim().replace(/<[^>]+>/g,""):"",t.url=decodeURIComponent(t.url).replace(/\/{2,}/g,"/"),t}),window.dispatchEvent(new Event("search:loaded"))})}},{key:"highlightText",value:function(e,t,o){var n,r=e.nodeValue,i=t.start,a=[],l=_createForOfIteratorHelper(t.hits);try{for(l.s();!(n=l.n()).done;){var c=n.value,u=c.position,y=c.length,f=document.createTextNode(r.substring(i,u)),i=u+y,s=document.createElement("mark");s.className=o,s.appendChild(document.createTextNode(r.substr(u,y))),a.push(f,s)}}catch(t){l.e(t)}finally{l.f()}e.nodeValue=r.substring(i,t.end),a.forEach(function(t){e.parentNode.insertBefore(t,e)})}},{key:"highlightSearchWords",value:function(t){var o=this,e=new URL(location.href).searchParams.get("highlight"),n=e?e.split(" "):[];if(n.length&&t){for(var r=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null),i=[];r.nextNode();)r.currentNode.parentNode.matches("button, select, textarea, .mermaid")||i.push(r.currentNode);i.forEach(function(t){var e=_slicedToArray(o.getIndexByWord(n,t.nodeValue),1)[0];e.length&&(e=o.mergeIntoSlice(0,t.nodeValue.length,e),o.highlightText(t,e,"search-keyword"))})}}}]),n}();window.addEventListener("load",function(){function t(){var t=document.body.style;t.width="100%",t.overflow="hidden",btf.animateIn(m,"to_show 0.5s"),btf.animateIn(d,"titleScale 0.5s"),setTimeout(function(){c.focus()},300),p||(l.isfetched||l.fetchData(),c.addEventListener("input",s),p=!0),document.addEventListener("keydown",function t(e){"Escape"===e.code&&(b(),document.removeEventListener("keydown",t))}),h(),window.addEventListener("resize",h)}function e(){btf.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",t)}var o=GLOBAL_CONFIG.localSearch,n=o.path,r=o.top_n_per_article,i=o.unescape,a=o.languages,l=new LocalSearch({path:n,top_n_per_article:r,unescape:i}),c=document.querySelector("#local-search-input input"),u=document.getElementById("local-search-stats-wrap"),y=document.getElementById("loading-status"),f=!n.endsWith("json"),s=function(){var t,e,o,n;l.isfetched&&(n=c.value.trim().toLowerCase(),""!==(n=f?n.replace(/</g,"&lt;").replace(/>/g,"&gt;"):n)&&(y.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'),o=n.split(/[-\s]+/),t=document.getElementById("local-search-results"),e=[],0<n.length&&(e=l.getResultItems(o)),1===o.length&&""===o[0]?(t.textContent="",u.textContent=""):0===e.length?(t.textContent="",(o=document.createElement("div")).className="search-result-stats",o.textContent=a.hits_empty.replace(/\$\{query}/,n),u.innerHTML=o.outerHTML):(e.sort(function(t,e){return t.includedCount!==e.includedCount?e.includedCount-t.includedCount:t.hitCount!==e.hitCount?e.hitCount-t.hitCount:e.id-t.id}),n=a.hits_stats.replace(/\$\{hits}/,e.length),t.innerHTML='<div class="search-result-list">'.concat(e.map(function(t){return t.item}).join(""),"</div>"),u.innerHTML='<hr><div class="search-result-stats">'.concat(n,"</div>"),window.pjax&&window.pjax.refresh(t)),y.textContent="")},p=!1,m=document.getElementById("search-mask"),d=document.querySelector("#local-search .search-dialog"),h=function(){window.innerWidth<768&&d.style.setProperty("--search-height",window.innerHeight+"px")},b=function(){var t=document.body.style;t.width="",t.overflow="",btf.animateOut(d,"search_close .5s"),btf.animateOut(m,"to_hide 0.5s"),window.removeEventListener("resize",h)};window.addEventListener("search:loaded",function(){var t=document.getElementById("loading-database");t.nextElementSibling.style.display="block",t.remove()}),e(),document.querySelector("#local-search .search-close-button").addEventListener("click",b),m.addEventListener("click",b),GLOBAL_CONFIG.localSearch.preload&&l.fetchData(),l.highlightSearchWords(document.getElementById("article-container")),window.addEventListener("pjax:complete",function(){btf.isHidden(m)||b(),l.highlightSearchWords(document.getElementById("article-container")),e()})});