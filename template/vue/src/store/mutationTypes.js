/**
 * @author walid
 * @date 2017/03/22
 * @description store 常量定义
 */

// global 全局stats
export const global = {
  actions: {
    updateLogo: 'global/actions/updateLogo'
  },
  mutations: {
    logo: 'global/mutations/logo'
  },
  getters: {
    logo: 'global/getters/logo'
  }
}

// 子page module 相关
export const child = {
  actions: {
    updateData: 'child/actions/updateData'
  },
  mutations: {
    data: 'child/mutations/data'
  },
  getters: {
    data: 'child/getters/data'
  }
}
