/**
 * @author walid
 * @date 2016/03/16
 * @description api 初始化
 */

import api from 'api'
import routerName from 'router/name'

export default function plugin(Vue) {
  Vue.$api = Vue.prototype.$api = api
  Vue.$routerName = Vue.prototype.$routerName = routerName
}
