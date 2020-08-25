import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SysHome from '../views/SysHome.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SysHome',
    component: SysHome
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/account/login/Login.vue')
  }, {
    path: '/statistical',
    name: 'statistical',
    component: () => import('../views/statistical/Statistical.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
