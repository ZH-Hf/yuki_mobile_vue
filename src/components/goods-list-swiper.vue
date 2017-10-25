<template>
	<ul class="goods_list">
		<li v-for="item in goodsList" :key="item.goodId">
			<img :src="item.goodPicUrl" :alt="item.goodName" class="goods_img" />
			<p class="goods_name">{{item.goodName}}</p>
			<p class="goods_price">¥{{item.goodMinPrice/100}}</p>
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
					const data = res.data.data.newGoodBeanList;
					_this.goodsList = data;
				})
			}

		},
		data() {
			return {
				goodsList: []
			}
		}
	}
</script>

<style scoped>
	.goods_list {
		list-style: none;
		display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
		margin-top: 0.2rem;
		padding: 0 0.2rem;
		text-align: center;
	}
	
	.goods_list li {
		float: left;
		height: 4.5rem !important;
	}
	
	.goods_list li img {
		width: 2.6rem;
		height: 2.6rem;
	}
	
	.goods_list p {
		max-width: 2.6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0.2rem 0.16rem;
		font-size: 0.28rem;
		color: #333333;
		font-size: 0.28rem;
	}
	
	.goods_list p.goods_price {
		text-align: left;
		display: flex;
		max-width: 3.12rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.28rem;
		color: #e54560;
		margin: 0 0.16rem;
	}
</style>