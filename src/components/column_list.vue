<template>
	<div>
		<ul class="goodsOneList">
			<li v-for="item in typeBeanList" :key="item.type" @click="clk" :class="'column'+item.typeId">
				{{item.typeName}}
			</li>
		</ul>
		<ul class="goodsTwoList">
			<li v-for="item in goodsTwoList" :key="item.typeId">
				<img :src="item.typePicUrl" alt="" />
				<p>{{item.typeName}}</p>
			</li>
		</ul>
	</div>

</template>

<script>
	import $ from 'axios';
	export default {
		created() {
			var _this = this;
			$.post("/api/column_1", {
				typeId: 0
			}).then(function(res) {
				_this.typeBeanList = res.data.data.data.typeBeanList
			})
			$.post("/api/column_2", {
				typeId: 0
			}).then(function(res) {
				_this.goodsTwoList = res.data.data.data.typeBeanList
			})
		},
		methods: {
			clk(event) {
				var _this = this;
				var typeId = event.target.className.slice(-1) - 1;
				$.post("/api/column_2", {
					typeId
				}).then(function(res) {
					_this.goodsTwoList = res.data.data.data.typeBeanList
				})
			}
		},
		data() {
			return {
				goodsTwoList: [],
				typeBeanList: []
			}
		}
	}
</script>

<style scoped>
	.goodsOneList {
		width: 54px;
		margin-left: 10px;
		border-right: 1px solid #d9d9d9;
		padding-top: 40px;
		float: left;
	}
	
	.goodsOneList li {
		float: left;
		width: 54px;
		margin-bottom: 40px;
	}
	
	.goodsTwoList {
		box-sizing: border-box;
		float: left;
		width: 220px;
		margin: 20px 17px 0 17px;
	}
	
	.goodsTwoList li {
		float: left;
		margin-bottom: 20px;
	}
	
	.goodsTwoList li img {
		width: 68px;
		height: 68px;
	}
</style>