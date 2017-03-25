/**
 * @author walid
 * @date 2016/03/16
 * @description 路由配置页
 */

import name from './name'

export default [
  {
    path: '/',
    redirect: {
      path: '/guide-router'
    }
  },
  {
    title: '示例axios',
    path: '/guide-axios',
    name: name.guideRouter,
    component: (resolve) => {
      require(['pages/guide-axios'], resolve)
    }
  },
  {
    title: '示例Router',
    path: '/guide-router',
    name: name.guideRouter,
    component: (resolve) => {
      require(['pages/guide-router'], resolve)
    }
  },
  {
    title: '示例Store',
    path: '/guide-store',
    name: name.guideStore,
    component: (resolve) => {
      require(['pages/guide-store'], resolve)
    }
  },
  {
    title: '二维码',
    path: '/qrcode',
    name: name.qrCode,
    component: (resolve) => {
      require(['pages/qrcode/app'], resolve)
    }
  },
  {
    title: '404',
    path: '*',
    component: (resolve) => {
      require(['pages/404/app'], resolve)
    }
  }
]
