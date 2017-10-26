import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Column from '@/pages/Column'
import Bag from '@/pages/Bag'
import My from '@/pages/My'
import Login from '@/pages/Login'

Vue.use(Router)
export default new Router({
	routes: [{
			path: '/',
			name: 'Hello',
			redirect: "/home"
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
		},
		{
			path: '/column',
			name: 'column',
			component: Column,
		},
		{
			path: '/bag',
			name: 'bag',
			component: Bag,
		},
		{
			path: '/my',
			name: 'my',
			component: My,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		}
	]
})