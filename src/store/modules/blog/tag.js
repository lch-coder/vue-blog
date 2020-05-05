import services from '../../../services'

const state = {
}

const actions = {
  async addTag ({commit}, options) {
    let res = await services.tag_addTag(options)
    return res.data
  },
  async tagList ({commit}, query) {
    let res = await services.tag_query(query)
    return res.data
  },
  async deleteTag ({commit}, options) {
    let res = await services.tag_delete(options)
    return res.data
  }
}

const mutations = {
}
export default {
  state,
  actions,
  mutations
}
