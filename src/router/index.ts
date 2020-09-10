import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    meta: { isBasic: true },
    component: () => import('../views/account/login/Login.vue')
  }, {
    path: '/',
    component: () => import('@/components/SysMenu.vue'),
    meta: { isBasic: true, moduleId: 'home', title: '首页', icon: 'el-icon-s-home', perm: 'system-main-manage' },
    children: [
      {
        path: '/home',
        component: () => import('@/components/SysHome.vue'),
        meta: { isBasic: true, moduleId: 'home', title: '通知', perm: 'system-main-manage' }
      }, {
        path: '/home/home',
        component: () => import('@/components/SysHome.vue'),
        meta: { isBasic: true, moduleId: 'homeCopy', title: '统计', perm: 'system-main-manage' }
      }
    ]
  }, {
    path: '/system',
    component: () => import('@/components/SysMenu.vue'),
    meta: { isBasic: true, moduleId: 'system', title: '系统管理', icon: 'el-icon-s-operation', perm: 'system-setting-manage' },
    children: [
      {
        path: '/system/user',
        component: () => import('@/views/account/user/user.vue'),
        meta: { isBasic: true, moduleId: 'system', title: '用户管理', perm: 'system-dict-manage' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
