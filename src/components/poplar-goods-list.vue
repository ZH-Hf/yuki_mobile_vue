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
	export default {
		data() {
			return {
				poplar_goods: [{
					"goodId": 385,
					"goodName": "Apple/苹果 12 英寸 MacBook",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170606150447823871.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 849900
				}, {
					"goodId": 333,
					"goodName": "埃罗芒阿老师我的妹妹是黄漫和泉沙雾COSt恤短袖夏装上衣服女",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170602151837138997.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 5900
				}, {
					"goodId": 807,
					"goodName": "Yuki原创T恤保卫星球男女卡通情侣",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170823154935509512.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 3800
				}]
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