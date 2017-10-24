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
	export default {
		data() {
			return {
				guess_goods: [

					{
						"goodId": 333,
						"goodName": "埃罗芒阿老师我的妹妹是黄漫和泉沙雾COSt恤短袖夏装上衣服女",
						"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170602151837138997.JPEG",
						"goodSecondName": "",
						"goodMinPrice": 5900
					}, {
						"goodId": 444,
						"goodName": "星星月亮毛绒玩具 柔软羽绒棉儿童安抚靠垫睡觉抱枕",
						"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170615154411122662.JPEG",
						"goodSecondName": "",
						"goodMinPrice": 2800
					}, {
						"goodId": 385,
						"goodName": "Apple/苹果 12 英寸 MacBook",
						"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170606150447823871.JPEG",
						"goodSecondName": "",
						"goodMinPrice": 849900
					}, {
						"goodId": 807,
						"goodName": "Yuki原创T恤保卫星球男女卡通情侣",
						"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170823154935509512.JPEG",
						"goodSecondName": "",
						"goodMinPrice": 3800
					}
				]
			}
		}
	}
</script>

<style>
	.guess{
		float: left;
		background: #f0f0f0;
		
	}
	.guess>p{
		height: 40px;
		font-size: 0.32rem;
		background: #f0f0f0;
		line-height: 40px;
	}
	.guess_goods li{
		float: left;
		width: 147px;
		height: 192px;
		margin-bottom: 9px;
		margin-left: 9px;
	}
	.guess_goods li img{
		width: 147px;
		height: 147px;
	}
	.guess_goods li p{
		margin-top: 5px;
		float: left;
	}
	.guess_goods li .goods_name{
		max-width: 128px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.28rem;
		color: #333333;
	}
	.guess_goods .goods_price{
		
		color: #e54560;
	}
</style>