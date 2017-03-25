/**
 * @author walid
 * @date 2017/03/22
 * @description stats 入口管理类
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

let store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  // modules: {
  //   appInfo
  // }
})

Vue.$store = store

export default store
