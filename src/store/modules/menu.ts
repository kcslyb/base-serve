import { RouteConfig } from 'vue-router'
import router from '@/router'

function hasPermission (route: RouteConfig, permissions: string[]): boolean {
  return permissions.includes(route.meta.perm)
}

/**
 * 递归过滤异步路由表
 *
 * @param router
 * @param permissions
 */
function filterRouter (router: RouteConfig[], permissions: string[]): any {
  return router.filter((route) => {
    if (hasPermission(route, permissions)) {
      if (route.children && route.children.length > 0) {
        route.children = filterRouter.call(route.children, route.children, permissions)
      }
    }
    return hasPermission(route, permissions)
  })
}

const menu = {
  state: {
    sysRouters: router.options.routes,
    currentRouters: []
  },
  mutations: {
    SET_ROUTERS: (state: any, accessedRouters: any) => {
      state.currentRouters = accessedRouters
    }
  },
  actions: {
    GenerateRoutes({ commit }: { commit: any }, data: any) {
      return new Promise((resolve) => {
        const permissionList = data.permissions ? data.permissions : []
        const accessedRouters: RouteConfig[] = []
        // @ts-ignore
        menu.state.sysRouters.forEach((route: RouteConfig) => {
          if (route.children) {
            accessedRouters.push(route)
          }
        })
        // 全部菜单判断权限
        const tem = filterRouter(accessedRouters, permissionList)
        const routList = tem ? tem : []
        // 执行设置路由的方法
        commit('SET_ROUTERS', routList)
        resolve()
      })
    }
  }
}
export default menu
