/**
 * @author walid
 * @date 2017/03/22
 * @description
 */

import {global as types} from './mutationTypes'

export default {
  [types.getters.logo] (state) {
    return state.logo
  }
}
