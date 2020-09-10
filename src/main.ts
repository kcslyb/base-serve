import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import startBaseServe from './apps'
import ElementUI from 'element-ui'
import KcsCommon from 'kcs-common/packages/index'
import 'element-ui/lib/theme-chalk/index.css'
import http from '@/config/axios'
import './config/router'

Vue.use(ElementUI)
Vue.use(KcsCommon)
startBaseServe()

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$userInfo = store.state.user.userInfo

new Vue({
  router,
  store,
  render: (h: (arg0: any) => any) => h(App)
}).$mount('#app')
