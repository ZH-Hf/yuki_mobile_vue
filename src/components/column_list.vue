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
			console.log("created");
			$.post("/api/column", {
				typeId: 0
			}).then(function(res) {
				console.log(res.data.data.data.typeBeanList);
				_this.goodsTwoList = res.data.data.data.typeBeanList
			})
		},
		methods: {
			clk(event) {
				var _this = this;
				var typeId = event.target.className.slice(-1) - 1;
				$.post("/api/column", {
					typeId
				}).then(function(res) {
					console.log(res.data.data.data.typeBeanList);
					_this.goodsTwoList = res.data.data.data.typeBeanList
				})
			}
		},
		data() {
			return {
				goodsTwoList: [],
				typeBeanList: [{
					"typeId": 1,
					"typeName": "Yuki原创",
					"typePicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/yukiicon_20170913175147344903.png",
					"typeTitle": null
				}, {
					"typeId": 6,
					"typeName": "3C数码",
					"typePicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/yukiicon_20170612172626803265.png",
					"typeTitle": null
				}, {
					"typeId": 4,
					"typeName": "品质生活",
					"typePicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/yukiicon_20170612172611544857.png",
					"typeTitle": null
				}, {
					"typeId": 5,
					"typeName": "文具耗材",
					"typePicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/yukiicon_20170612173024022014.png",
					"typeTitle": null
				}, {
					"typeId": 2,
					"typeName": "服鞋箱包",
					"typePicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/yukiicon_20170612172554218421.png",
					"typeTitle": null
				}, {
					"typeId": 3,
					"typeName": "家用电器",
					"typePicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/yukiicon_20170612172605250450.png",
					"typeTitle": null
				}, {
					"typeId": 7,
					"typeName": "影视动漫周边",
					"typePicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/yukiicon_20170612172632149881.png",
					"typeTitle": null
				}]
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