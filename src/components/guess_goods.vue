<template>
	<div class="guess">
		<p>猜你喜欢</p>
		<ul class="guess_goods">
			<li v-for="item in guess_goods" :key="item.goodId">
				<img :src="item.goodPicUrl" :alt="item.goodName" />
				<p class="goods_name">{{item.goodName}}</p>
				<p class="goods_price">¥{{item.goodMinPrice/100}}</p>
			</li>
		</ul>
	</div>

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
					const data = res.data.data.guessGoodList;
					_this.guess_goods = data;
				})
			}

		},
		data() {
			return {
				guess_goods: []
			}
		}
	}
</script>

<style>
	.guess {
		background: #f0f0f0;
	}
	
	.guess>p {
		height: 40px;
		font-size: 0.32rem;
		background: #f0f0f0;
		line-height: 40px;
	}
	.guess_goods{
		overflow: hidden;
	}
	.guess_goods li {
		float: left;
		width: 147px;
		height: 192px;
		margin-bottom: 9px;
		margin-left: 9px;
	}
	
	.guess_goods li img {
		width: 147px;
		height: 147px;
	}
	
	.guess_goods li p {
		margin-top: 5px;
		float: left;
	}
	
	.guess_goods li .goods_name {
		max-width: 128px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.28rem;
		color: #333333;
	}
	
	.guess_goods .goods_price {
		color: #e54560;
	}
</style>