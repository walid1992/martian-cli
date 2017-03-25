/**
 * @author walid
 * @date 2016/03/16
 * @description 程序入口启动配置
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueProgressBar from 'vue-progressbar'

import App from './App'
import globalConfig from 'utils/global-config'
import router from 'router'
import store from 'store'

Vue.use(ElementUI)
Vue.use(globalConfig)

Vue.use(VueProgressBar, {
  thickness: '5px',
  color: '#00bf11',
  autoRevert: true,
  location: 'top',
  inverse: false
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
