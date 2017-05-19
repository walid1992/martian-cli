/**
 * @author walid
 * @date 2017/03/22
 * @description
 */

import {global as types} from './mutationTypes'

// 设置LOGO图标
export default {
  [types.mutations.logo] (state, payload) {
    state.logo = payload
  }
}
