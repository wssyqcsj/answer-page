(function(){var e={492:function(){(function(e,t){var n=e.documentElement,i="orientationchange"in window?"orientationchange":"resize",a=function(){var e=n.clientWidth;e&&(n.style.fontSize=e/320*20+"px")};e.addEventListener&&(t.addEventListener(i,a,!1),e.addEventListener("DOMContentLoaded",a,!1))})(document,window)},6030:function(e,t,n){"use strict";var i=n(1106),a=n(5880),r=function(){var e=this,t=e._self._c;return t("div",[t("router-view")],1)},o=[],c={name:"App"},s=c,_=n(2349),d=(0,_.Z)(s,r,o,!1,null,null,null),u=d.exports,p=[{path:"/",component:u,children:[{path:"",component:e=>n.e(177).then((()=>e(n(4617))).bind(null,n))["catch"](n.oe)},{path:"/item",component:e=>n.e(178).then((()=>e(n(1838))).bind(null,n))["catch"](n.oe)},{path:"/score",component:e=>n.e(940).then((()=>e(n(2133))).bind(null,n))["catch"](n.oe)}]}],f=n(4193),l={addNum({commit:e,state:t},n){e("REMBER_ANSWER",n),t.itemNum<t.itemDetail.length&&e("ADD_ITEMNUM",1)},initializeData({commit:e}){e("INITIALIZE_DATA")}};const m="ADD_ITEMNUM",v="REMBER_ANSWER",w="REMBER_TIME",h="INITIALIZE_DATA";var g={[m](e,t){e.itemNum+=t},[v](e,t){e.answerid.push(t)},[w](e){e.timer=setInterval((()=>{e.allTime++}),1e3)},[h](e){e.itemNum=1,e.allTime=0,e.answerid=[]}};i.ZP.use(f.ZP);const y={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"[...'von'];正确的是？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"['von']",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"['v','o','n']",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"[[],'von']",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"[['v','o','n']]",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"const num = parseInt('7*6',10);num的值是什么？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"42",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"'42'",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"7",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"NaN",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"['1','2','3'].map(parseInt);正确的是？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"[1,2,3]",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"[NaN, 1, NaN]",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"[0,1,2]",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"[1, NaN, NaN]",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"[3,15,8,29,102,22].sort();结果为？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"[102, 15, 22, 29, 3, 8]",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"[3, 8, 15, 22, 29, 102]",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"[102, 29, 22, 15, 8, 3]",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"[3, 15, 8, 29, 102, 22]",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"String('11') == new String('11'); 和 String('11') === new String('11');返回值是？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"true true",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"true false",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"false true",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"false false",is_standard_answer:0}]}],answerid:[]};var b=new f.ZP.Store({state:y,actions:l,mutations:g});n(492);i.ZP.config.productionTip=!1,i.ZP.use(a.Z);const E=new a.Z({routes:p});new i.ZP({render:e=>e(u),store:b,router:E}).$mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,r){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],r=e[d][2];for(var c=!0,s=0;s<i.length;s++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(c=!1,r<o&&(o=r));if(c){e.splice(d--,1);var _=a();void 0!==_&&(t=_)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{177:"home",178:"item",940:"score"}[e]+"."+{177:"d366bee2",178:"37b2e331",940:"0db656f1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{177:"home",178:"item",940:"score"}[e]+"."+{177:"9115315d",178:"9115315d",940:"2694f8f8"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="happyfri:";n.l=function(i,a,r,o){if(e[i])e[i].push(a);else{var c,s;if(void 0!==r)for(var _=document.getElementsByTagName("script"),d=0;d<_.length;d++){var u=_[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+r){c=u;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=i),e[i]=[a];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var a=e[i];if(delete e[i],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=c,a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){a=o[i],r=a.getAttribute("data-href");if(r===e||r===t)return a}},i=function(i){return new Promise((function(a,r){var o=n.miniCssF(i),c=n.p+o;if(t(o,c))return a();e(i,c,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={177:1,178:1,940:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=i(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var r=new Promise((function(n,i){a=e[t]=[n,i]}));i.push(a[2]=r);var o=n.p+n.u(t),c=new Error,s=function(i){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}};n.l(o,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,o=i[0],c=i[1],s=i[2],_=0;if(o.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var d=s(n)}for(t&&t(i);_<o.length;_++)r=o[_],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},i=self["webpackChunkhappyfri"]=self["webpackChunkhappyfri"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6030)}));i=n.O(i)})();
//# sourceMappingURL=app.bc2432a5.js.map