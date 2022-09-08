import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import './config/ajax'
import './config/rem'
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
})
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')