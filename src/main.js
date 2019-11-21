import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem'
import * as filters from './filters'
import echarts from 'echarts'
import './assets/css/index.scss'
import $ from 'jquery'
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animated)

window.jQuery = $
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

window.eventHub = new Vue();          //全局事件中心

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
