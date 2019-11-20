import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem'
import * as filters from './filters'
import echarts from 'echarts'
import './assets/css/index.scss'
import Highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import $ from 'jquery'
import animated from 'animate.css' // npm install animate.css --save安装，在引入


Vue.use(animated)

window.jQuery = $
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
highcharts3d(Highcharts)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
