/**
 * @author walid
 * @date 2017/03/22
 * @description child 模块示例
 */

import {child as types} from '../mutationTypes'

const state = {
  data: 'default data'
}

const mutations = {
  [types.mutations.data](state, payload) {
    state.data = payload
  }
}

const actions = {
  [types.actions.updateData]({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.mutations.data, payload)
      }, 500)
    })
  }
}

const getters = {
  [types.getters.data](state) {
    return state.data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
