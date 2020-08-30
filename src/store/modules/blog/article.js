/* eslint-disable no-unused-vars */
import services from '../../../services'

const state = {}

const actions = {
  async articleListApi ({ commit }, query) {
    let res = await services.articel_articleList(query)
    return res.data
  },
  async archiveListApi ({ commit }, query) {
    let res = await services.articel_archiveList()
    return res.data
  },
  async addArticleApi ({ commit }, options) {
    let res = await services.articel_addArticle(options)
    return res.data
  },
  async deleteArticleApi ({ commit }, options) {
    let res = await services.article_delete(options)
    return res.data
  },
  async updateArticleApi ({ commit }, options) {
    let res = await services.article_update(options._id, options)
    return res.data
  },
  async getArticleDetailApi ({ commit }, options) {
    let res = await services.article_findOne(options)
    return res.data
  },
  async getApi ({ commit }, options) {
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
