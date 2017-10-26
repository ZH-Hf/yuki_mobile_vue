<template>
	<div>
		<blank></blank>
		<my-header/>
		<wc-swiper class="lunbo">
			<wc-slide v-for="(slide, key) in slides" :key="key">
				<img :src="slide.imgSrc" />
			</wc-slide>
		</wc-swiper>
		<recommend tit="新品推荐" />
		<new-goods/>
		<aside></aside>
		<recommend tit="人气推荐" />
		<pop-Goods/>
		<guess-goods/>
		<my-footer/>
		<blank></blank>
	</div>
	

</template>

<script>
	import myFooter from '../components/myFooter'
	import myHeader from '../components/myHeader'
	import recommend from '../components/recommend-tit'
	import newGoods from '../components/goods-list-swiper'
	import popGoods from '../components/poplar-goods-list'
	import guessGoods from '../components/guess_goods'
	import blank from '../components/blank'
	export default {
		components: {
			myFooter,
			myHeader,
			recommend,
			newGoods,
			popGoods,
			guessGoods,
			blank
		},
		data() {
			return {
				slides: [{
					imgSrc: "static/banner/yukiappbanner_20170929131134561483.JPEG"
				}, {
					imgSrc: "static/banner/yukiappbanner_20170929131218693944.JPEG"
				}, {
					imgSrc: "static/banner/yukiappbanner_20171018174337564203.JPEG"
				}]

			}
		}
	}
</script>

<style>
	aside {
		width: 100%;
		height: 0.2rem;
		background: #f0f0f0;
	}
	
	.lunbo img {
		float: left;
		width: 7.5rem;
		height: 4.2rem;
	}
</style>