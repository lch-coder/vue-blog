import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
Vue.prototype.$moment = moment
moment.locale('zh-cn')

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('./assets/image/loading.jpeg'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/bg.jpg')  //加载失败图片
});

Vue.use(Vuex)
Vue.use(ElementUI)

import Highlight from './utils/highlight'; // from 路径是highlight.js的路径，纯属自定义
Vue.use(Highlight);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
