import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/components/TestCompo.vue')
    },
    {
      path: '/animateMap',
      name: 'animateMap',
      component: () => import('@/components/animateMap.vue')
    }
  ]
})
