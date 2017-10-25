<template>
	<ul class="pop_goods">
		<li v-for="item in poplar_goods" :key="item.goodId">
			<img :src="item.goodPicUrl" :alt="item.goodName" />
			<div class="info">
				<p class="goods_name">{{item.goodName}}</p>
				<p class="goods_price">¥{{item.goodMinPrice/100}}</p>
			</div>
			<div class="icon"></div>
		</li>
	</ul>
</template>

<script>
	import axios from "axios";

	export default {
		created() {
			this.getData(this);
		},
		methods: {
			getData(_this) {
				axios.post("/api/goodsList").then(function(res) {
					const data = res.data.data.popularGoodBeanList;
					_this.poplar_goods = data;
				})
			}

		},
		data() {
			return {
				poplar_goods: []
			}
		}
	}
</script>

<style>
	.pop_goods {
		min-height: 2.64rem;
		padding: 0 0.32rem;
	}
	
	.pop_goods li {
		padding: 12px 0;
		height: 80px;
	}
	
	.pop_goods li img {
		width: 85px;
		height: 85px;
		float: left;
	}
	
	.pop_goods .info {
		margin-top: 11px;
		margin-left: 10px;
		float: left;
		text-align: left;
	}
	
	.pop_goods .goods_name {
		max-width: 4.15rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.28rem;
		color: #333333;
	}
	
	.pop_goods .goods_price {
		color: #e54560;
		margin-top: 30px;
	}
	
	.pop_goods .icon {
		margin-top: 27px;
		float: right;
		/*margin-left: 0.16rem;*/
		width: 0.48rem;
		height: 0.48rem;
		background: url(../../static/icon/94131a9e53b3d8ad6fd116877c6546e6_home_icon_next@3x.png) no-repeat center center;
		background-size: 100%;
	}
</style>