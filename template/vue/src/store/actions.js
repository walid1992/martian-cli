/**
 * @author walid
 * @date 2017/03/22
 * @description
 */

import {global as types} from './mutationTypes'

export default {
  [types.actions.updateLogo] ({commit}, payload) {
    commit(types.mutations.logo, payload)
  }
}
