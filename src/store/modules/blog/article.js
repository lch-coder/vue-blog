/* eslint-disable no-unused-vars */
import services from '../../../services'

const state = {}

const actions = {
    async addArticle({ commit }, options) {
        let res = await services.articel_addArticle(options)
        return res.data
    },
    async articleList({ commit }, query) {
        let res = await services.articel_articleList(query)
        return res.data
    },
    async deleteArticle({ commit }, options) {
        let res = await services.article_delete(options)
        return res.data
    },
    async updateArticle({ commit }, options) {
        let res = await services.article_update(options._id, options)
        return res.data
    },
    async getArticle({ commit }, options) {
        let res = await services.article_findOne(options)
        return res.data
    },
    async get({ commit }, options) {
        let res = await services.get(options)
        return res.data
    },
}

const mutations = {}
export default {
    state,
    actions,
    mutations,
}
