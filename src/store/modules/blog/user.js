/* eslint-disable no-unused-vars */
import services from '../../../services'

const state = {
}

const actions = {
  async userListApi ({ commit }, query) {
    let res = await services.user_query(query)
    return res.data
  },
  async loginApi ({ commit }, options) {
    let res = await services.user_login(options)
    return res.data
  },
  async registApi ({ commit }, options) {
    let res = await services.user_regist(options)
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
