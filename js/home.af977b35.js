"use strict";(self["webpackChunkhappyfri"]=self["webpackChunkhappyfri"]||[]).push([[177],{597:function(t,e,s){s.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("section",[e("header",{staticClass:"top_tips"},["home"==t.fatherComponent?e("span",{staticClass:"num_tip"},[t._v(t._s(t.level))]):t._e(),"item"==t.fatherComponent?e("span",{staticClass:"num_tip"},[t._v("题目"+t._s(t.itemNum))]):t._e()]),"home"==t.fatherComponent?e("div",[e("div",{staticClass:"home_logo item_container_style"}),e("router-link",{staticClass:"start button_style",attrs:{to:"item"}})],1):t._e(),"item"==t.fatherComponent?e("div",[e("div",{staticClass:"item_back item_container_style"},[t.itemDetail.length>0?e("div",{staticClass:"item_list_container"},[e("header",{staticClass:"item_title"},[t._v(" "+t._s(t.itemDetail[t.itemNum-1].topic_name)+" ")]),e("ul",t._l(t.itemDetail[t.itemNum-1].topic_answer,(function(s,i){return e("li",{key:s.topic_answer_id,staticClass:"item_list",on:{click:function(e){return t.choosed(i,s.topic_answer_id)}}},[e("span",{staticClass:"option_style",class:{has_choosed:t.choosedNum==i}},[t._v(t._s(t.chooseType(i)))]),e("span",{staticClass:"option_detail"},[t._v(t._s(s.answer_name))])])})),0)]):t._e()]),t.itemNum<t.itemDetail.length?e("span",{staticClass:"next_item button_style",on:{click:t.nextItem}}):e("span",{staticClass:"submit_item button_style",on:{click:t.submitAnswer}})]):t._e()])},n=[],a=s(941),o={name:"ItemContainer",data(){return{itemId:null,choosedNum:null,choosedId:null}},props:["fatherComponent"],computed:{...(0,a.rn)(["itemNum","level","itemDetail","timer"])},methods:{...(0,a.nv)(["addNum","initializeData"]),nextItem(){null!==this.choosedNum?(this.choosedNum=null,this.addNum(this.choosedId)):alert("请选择答案")},chooseType:t=>{switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},choosed(t,e){this.choosedNum=t,this.choosedId=e},submitAnswer(){null!==this.choosedNum?(this.addNum(this.choosedId),clearInterval(this.timer),this.$router.push("score")):alert("您还没有选择答案哦")}},created(){"home"==this.fatherComponent&&(this.initializeData(),document.body.style.backgroundImage="url(../../img/1-1.jpg)")}},l=o,r=s(349),c=(0,r.Z)(l,i,n,!1,null,null,null),m=c.exports},617:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home_container"},[e("ItemContainer",{attrs:{"father-component":"home"}})],1)},n=[],a=s(597),o={name:"MyHome",components:{ItemContainer:a.Z}},l=o,r=s(349),c=(0,r.Z)(l,i,n,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=home.af977b35.js.map