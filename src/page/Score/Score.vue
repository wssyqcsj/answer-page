<template>
    <div>
        <div class="your_scores_container">
            <header class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分！</span></header>
            <div class="result_tip">{{scoreTips}}</div>
        </div>
        <div class="share_button" @click="showCover"></div>
        <div class="share_code">
            <header class="share_header">关注von，获取答案。</header>
            <img src="../../../public/img/vx.jpg" height="212" width="212" class="code_img">
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../../public/img/5-2.png" class="share_img">
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name: 'MyScore',
    data(){
        return {
            showHide: false, //是否显示提示
            score: 0, //分数
            scoreTips:'', //分数提示
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，恭喜你！'],
        }
    },
    computed: mapState(['answerid']),
	created(){
        this.computedScore();
        this.getScoreTip();
        document.body.style.backgroundImage = 'url(../../../img/4-1.jpg)';
    },
    methods: {
        //计算分数
        computedScore(){
            this.answerid.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20;
                }
            })
        },
        //是否显示分享提示
        showCover: function (){
            this.showHide = !this.showHide;
        },
        //根据分数显示提示
        getScoreTip: function (){
          let index = Math.ceil(this.score/20)-1;
          this.scoreTips = this.scoreTipsArr[index];
        }
    },
}

</script>

<style lang="less">
    body{
        background-image: url(../../../public/img/4-1.jpg);
        padding-top: 19.2px;
    }
    .your_scores_container{
        width: 250px;
        height: 250px;
        background: url(../../../public/img/4-2.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto 0;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;
            text-indent: 86px;
            top: 130px;
            font-size: 35px;
            font-weight: 900;
            -webkit-text-stroke: 0.8px #412318;
            font-family: 'Microsoft YaHei';
            .score_num{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d31;
            }
            .fenshu{
                color: #a51d31;
            }
        }
        .result_tip{
            position: absolute;
            top: 190px;
            width: 220px;
            left: 20px;
            color: #3e2415;
            font-size: 17px;
            text-align: center;
        }
    }
    .share_button{
        width: 156px;
        height: 62px;
        margin: 20px auto 0;
        background: url(../../../public/img/4-3.png) no-repeat 17px 0;
        background-size: 140px 100%;
    }
    .share_code{
        width: 180px;
        margin: 38px auto 0;
        .share_header{
            color: #664718;
            font-size: 10px;
            font-family: 'Microsoft YaHei';
            width: 180px;
            font-weight: 500;
            text-align: center;
        }
        .code_img{
            height: 180px;
            width: 180px;
            margin-top: 12px;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../../../public/img/5-1.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 175.6px;
        width: 191.2px;
        position: fixed;
        top: 8px;
        left: 50%;
        margin-left: -95.6px;
    }
</style>
