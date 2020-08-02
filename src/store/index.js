import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/blog/user'
import tag from './modules/blog/tag'
import article from './modules/blog/article'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        tag,
        article,
    },
})
