import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Column from '@/pages/Column'
import Bag from '@/pages/Bag'
import My from '@/pages/My'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import GoodDetail from '@/pages/GoodDetail'

Vue.use(Router)
export default new Router({
	routes: [{
			path: '/',
			name: 'Hello',
			component: Home,
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
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
		{
			path: '/good_detail',
			name: 'good_detail',
			component: GoodDetail,
		}
	]
})