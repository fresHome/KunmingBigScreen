import Vue from 'vue'
import Router from 'vue-router'
import home from '../layout/home.vue'
import first from '../layout/main/first/index.vue'
import second from '../layout/main/second/index.vue'
import third from '../layout/main/third/index.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/first',
			component: home,
			children: [
				{
					path: '/first',
					name: 'first',
					component: first
				},
				{
					path: '/second',
					name: 'second',
					component: second
				},
				{
					path: '/third',
					name: 'third',
					component: third
				}
			]
		},
	
	]
})
