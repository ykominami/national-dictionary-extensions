(()=>{"use strict";var e,t={736:(e,t,n)=>{var r,o=n(294),i=n(935);i.render(o.createElement(o.StrictMode,null,o.createElement((function(){return o.createElement("div",null,o.createElement("main",{style:{minWidth:"700px"}},o.createElement("button",{id:"changeColor",style:{height:"30px",width:"30px"}}),o.createElement("text",{id:"text"},"hoge")))}),null)),document.getElementById("root")),function(){var e=document.getElementById("changeColor");chrome.storage.sync.get("color",(function(t){var n=t.color;e&&(e.style.backgroundColor=n)}));var t=document.getElementById("text");chrome.storage.local.get("selectionString",(function(n){var r=n.selectionString;t&&(t.innerText=r),e.addEventListener("click",(function(){return i=r,e=void 0,t=void 0,o=function(){var e,t,n;return function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(r){switch(r.label){case 0:return[4,fetch("https://www.weblio.jp/content/"+i).then((function(e){return e.text()})).then((function(e){return(new DOMParser).parseFromString(e,"text/html")})).then((function(e){return e.getElementsByClassName("kiji")}))];case 1:return e=r.sent(),(t=document.getElementById("text"))&&(0!=e.length?(n=e[0].children,t.innerText=n[1].innerText):t.innerText="用語解説で「"+i+"」に一致する見出し語は見つかりませんでした。"),[2]}}))},new((n=void 0)||(n=Promise))((function(r,i){function l(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}a((o=o.apply(e,t||[])).next())}));var e,t,n,o,i}))}))}(),r=document.getElementById("text"),chrome.storage.local.get("selectionString",(function(e){var t=e.selectionString;r&&(r.innerText=t)}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,o,i]=e[s],c=!0,a=0;a<n.length;a++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](n[a])))?n.splice(a--,1):(c=!1,i<l&&(l=i));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[l,c,a]=n,u=0;if(l.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var s=a(r)}for(t&&t(n);u<l.length;u++)i=l[u],r.o(e,i)&&e[i]&&e[i][0](),e[l[u]]=0;return r.O(s)},n=self.webpackChunkchrome_extension=self.webpackChunkchrome_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r(736)));o=r.O(o)})();