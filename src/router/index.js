import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pageOne'
    },
    {
      path: '/pageOne',
      name: 'pageOne',
      component: () => import('@/components/pageOne/home.vue')
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: () => import('@/components/pageTwo/home.vue')
    },
    {
      path: '/pageThree',
      name: 'pageThree',
      component: () => import('@/components/pageThree/home.vue')
    }
  ]
})
