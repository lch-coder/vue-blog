import services from '../../../services'

const state = {
}

const actions = {
  async userList ({commit}, query) {
    let res = await services.user_query(query)
    return res.data
  },
  async login ({commit}, options) {
    let res = await services.user_login(options)
    return res.data
  },
  async regist ({commit}, options) {
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
