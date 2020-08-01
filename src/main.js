import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import './assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// import 'mavon-editor/dist/highlightjs/highlight.min.js'
// import 'mavon-editor/dist/katex/katex'
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
