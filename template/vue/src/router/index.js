/**
 * @author walid
 * @description vue router
 * @date 2016/03/16
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import map from './map'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})
