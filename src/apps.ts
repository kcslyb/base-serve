import {
  start,
  registerMicroApps,
  addGlobalUncaughtErrorHandler
} from 'qiankun'

function genActiveRule (routerPrefix: string) {
  return (location: { pathname: string }) => location.pathname.startsWith(routerPrefix)
}

// 微应用注册信息
const apps: Array<any> = [
  {
    // 微应用名称，随便取
    name: 'savour',
    // 微应用的地址及端口
    entry: process.env === 'product' ? '//127.0.0.1:8021/savour' : '//127.0.0.1:8021',
    // 微应用的挂载点：微应用会挂载在主应用id为micro-container的标签上
    container: '#micro-container',
    // 微应用匹配规则：url变化会触发该匹规则，匹配到的微应用便会挂载到container
    activeRule: genActiveRule('/savour')
  }
]

/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // 生命周期钩子 - 微应用加载前
  beforeLoad: (app: any) => {
    return Promise.resolve(app)
  },
  // 生命周期钩子 - 微应用挂载后
  afterMount: (app: any) => {
    return Promise.resolve(app)
  }
})

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
  // 加载失败时提示
  if (typeof event !== 'string' && event.type && event.type === 'error') {
    throw new Error(`apps: 捕获子应用全局异常: ${(event as any).message}`)
  }
})

// 导出的启动函数
export default start
