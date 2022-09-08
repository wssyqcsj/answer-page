import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
//使用Vuex
Vue.use(Vuex)

const state = {
    level: '第一周', //活动周数
    itemNum: 1, // 第几题
    allTime: 0, //总共用时
    timer: '', //定时器
    itemDetail: [{
        "topic_id": 20,
        "active_topic_id": 4,
        "type": "ONE",
        "topic_name": "[...'von'];正确的是？",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 1,
            "topic_id": 20,
            "answer_name": "['von']",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 2,
            "topic_id": 20,
            "answer_name": "['v','o','n']",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 3,
            "topic_id": 20,
            "answer_name": "[[],'von']",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 4,
            "topic_id": 20,
            "answer_name": "[['v','o','n']]",
            "is_standard_answer": 1
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "const num = parseInt('7*6',10);num的值是什么？",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 5,
            "topic_id": 21,
            "answer_name": "42",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 6,
            "topic_id": 21,
            "answer_name": "'42'",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 7,
            "topic_id": 21,
            "answer_name": "7",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 8,
            "topic_id": 21,
            "answer_name": "NaN",
            "is_standard_answer": 0
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "['1','2','3'].map(parseInt);正确的是？",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 9,
            "topic_id": 21,
            "answer_name": "[1,2,3]",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 10,
            "topic_id": 21,
            "answer_name": "[NaN, 1, NaN]",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 11,
            "topic_id": 21,
            "answer_name": "[0,1,2]",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 12,
            "topic_id": 21,
            "answer_name": "[1, NaN, NaN]",
            "is_standard_answer": 0
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "[3,15,8,29,102,22].sort();结果为？",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 13,
            "topic_id": 21,
            "answer_name": "[102, 15, 22, 29, 3, 8]",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 14,
            "topic_id": 21,
            "answer_name": "[3, 8, 15, 22, 29, 102]",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 15,
            "topic_id": 21,
            "answer_name": "[102, 29, 22, 15, 8, 3]",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 16,
            "topic_id": 21,
            "answer_name": "[3, 15, 8, 29, 102, 22]",
            "is_standard_answer": 0
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "String('11') == new String('11'); 和 String('11') === new String('11');返回值是？",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 17,
            "topic_id": 21,
            "answer_name": "true true",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 18,
            "topic_id": 21,
            "answer_name": "true false",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 19,
            "topic_id": 21,
            "answer_name": "false true",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 20,
            "topic_id": 21,
            "answer_name": "false false",
            "is_standard_answer": 0
        }]
    }],
    answerid: [], //答案id
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})