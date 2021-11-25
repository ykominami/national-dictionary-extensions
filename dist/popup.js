(()=>{"use strict";var e,t={16:(e,t,n)=>{var r=n(294),o=n(935),i=n(283),a=(0,n(770).D)(),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},c=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};o.render(r.createElement(r.StrictMode,null,r.createElement((function(){var e,t=(0,r.useState)(""),n=t[0],o=t[1],s=(0,r.useState)(""),f=s[0],p=s[1],h=(0,i.cI)(),v=h.register,b=h.setValue,d=(0,h.handleSubmit)((function(e){return c(void 0,void 0,void 0,(function(){var t;return l(this,(function(n){switch(n.label){case 0:return[4,m(e.word)];case 1:return t=n.sent(),p(t),[2]}}))}))})),m=function(e){return c(void 0,void 0,void 0,(function(){var t;return l(this,(function(n){switch(n.label){case 0:return[4,fetch("https://www.weblio.jp/content/"+e).then((function(e){return e.text()})).then((function(e){return(new DOMParser).parseFromString(e,"text/html")})).then((function(e){return e.getElementsByClassName("kiji")}))];case 1:return 0!=(t=n.sent()).length?[2,t[0].children[1].innerText]:[2,"用語解説で「"+e+"」に一致する見出し語は見つかりませんでした。"]}}))}))};return chrome.storage.local.get("selectionString",(function(e){var t=e.selectionString;o(t)})),(0,r.useEffect)((function(){b("word",n)}),[n]),r.createElement("main",{style:{minWidth:"700px"}},r.createElement("form",{onSubmit:d},r.createElement("input",u({},v("word"))),r.createElement("button",{type:"submit"},"検索")),r.createElement("text",null,(e=f,a.parse(e).map((function(e){return r.createElement("span",{key:e,style:{display:"inline-block"}},e)})))))}),null)),document.getElementById("root"))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,o,i]=e[s],u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,u,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var s=c(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;return r.O(s)},n=self.webpackChunkchrome_extension=self.webpackChunkchrome_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r(16)));o=r.O(o)})();