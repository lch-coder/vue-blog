import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import './assets/css/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')
