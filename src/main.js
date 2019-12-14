import Vue from 'vue'
import App from './App.vue'
import './utils/rem'
import * as filters from './filters'
import echarts from 'echarts'
import router from './router'
import * as socketApi from './utils/socket'

Vue.prototype.socketApi = socketApi
Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

window.eventHub = new Vue()         //全局事件中心
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
