/* eslint-disable no-unused-vars */
import services from '../../../services'

const state = {}

const actions = {
  async addTagApi ({ commit }, options) {
    let res = await services.tag_addTag(options)
    return res.data
  },
  async getTagListApi ({ commit }, query) {
    let res = await services.tag_query(query)
    return res.data
  },
  async deleteTagApi ({ commit }, options) {
    let res = await services.tag_delete(options)
    return res.data
  },
}

const mutations = {}
export default {
  state,
  actions,
  mutations,
}
