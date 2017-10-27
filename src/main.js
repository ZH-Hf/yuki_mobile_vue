// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
//import myFooter from './components/myFooter'
Vue.config.productionTip = false

//轮播插件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);

/* eslint-disable no-new */

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	},
	data: {
		goodsData: {}
	},
	created() {
		(function() {
			var docEl = document.documentElement;
			var resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
			var setRem = function() {
				var screenWidth = docEl.clientWidth || window.screen.width || 360;
				docEl.style.fontSize = (100 * screenWidth / 750) + 'px';
			};
			window.addEventListener('resize', setRem, false);
			setRem();
		})();
	}
})

Vue.directive('toDetail', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})