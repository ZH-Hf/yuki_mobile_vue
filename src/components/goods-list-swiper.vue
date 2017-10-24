<template>
	<ul class="goods_list" >
		<li v-for="item in goodsList" :key="item.goodId">
			<img :src="item.goodPicUrl" :alt="item.goodName" class="goods_img" />
			<p class="goods_name">{{item.goodName}}</p>
			<p class="goods_price">¥{{item.goodMinPrice/100}}</p>
		</li>
	</ul>
</template>

<script>
	

	export default {
		created() {
			//			console.log("ajax");
		},
		data() {
			return {
				
				goodsList: [{
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
				}, {
					"goodId": 482,
					"goodName": "SOLOVE素乐充电宝超薄便携苹果专用移动电源10000毫安可爱通用",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170616122624623620.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 8900
				}, {
					"goodId": 621,
					"goodName": "二次元动漫周边新世纪福音战士EVA明日香同款猫耳棒球帽毛绒帽子",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170621155837534962.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 2200
				}, {
					"goodId": 749,
					"goodName": "日系软妹夏装女装小清新中长款长袖网纱罩裙连衣裙+长吊带两件套",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170626185154025407.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 5500
				}, {
					"goodId": 444,
					"goodName": "星星月亮毛绒玩具 柔软羽绒棉儿童安抚靠垫睡觉抱枕",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170615154411122662.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 2800
				}, {
					"goodId": 723,
					"goodName": "HEROCROSS 变形金刚5人物形象2寸公仔套装（一套4款角色）",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170623170509998728.JPEG",
					"goodSecondName": "",
					"goodMinPrice": 16800
				}, {
					"goodId": 561,
					"goodName": "日本进口 国誉Campus系列活页纸替芯 方格 笔记本文具活页芯",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170620095721153417.png",
					"goodSecondName": "",
					"goodMinPrice": 1800
				}, {
					"goodId": 845,
					"goodName": "日本象印 儿童吸管杯 粉红胖子宝宝双盖两用保温杯SC-ZT45-RA/PA 450ml",
					"goodPicUrl": "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170928144602081106.JPEG",
					"goodSecondName": "泰国产 ，一杯双盖，保温保冷两用，宝宝优选~",
					"goodMinPrice": 33800
				}]
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