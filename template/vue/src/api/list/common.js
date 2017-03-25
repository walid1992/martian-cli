/**
 * @author walid
 * @description commonApi 模块
 * @date 2016/03/16
 */

import Api from '../axios'

const apiURL = {
  // 提交表单信息
  submitForm: 'v1/submit-form',
  // 获取生成及大怒
  getStatus: 'v1/get-status'
}

export default {
  submitForm (obj) {
    return Api.post(apiURL.submitForm, obj)
  },
  getStatus () {
    return Api.get(apiURL.getStatus)
  }
}
