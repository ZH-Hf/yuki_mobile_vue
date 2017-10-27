<template>
	<div>
		<wc-swiper class="lunbo2">
			<wc-slide v-for="(slide, key) in slides" :key="key">
				<img :src="slide" />
			</wc-slide>
		</wc-swiper>
		<p class="price">¥{{goods.goodDetailBean.skuList[0].nowPrice/100}}</p>
		<p class="product_name">{{goods.goodDetailBean.goodName}}</p>
		<div class="product_sale">促销：{{goods.onSale?goods.orderSale:无}}</div>
		<div class="select_style">选择款式</div>
		<aside></aside>
		<div class="comment">无评价</div>
		<div class="quick_memu">
			<div class="connect_customer"></div>
			<div class="into-shopping-bag"></div>
			<div class="buy-now">立即购买</div>
			<div class="add-to-shopping-bag">加入购物袋</div>
		</div>
		<my-footer />
	</div>
</template>

<script>
	import $ from "axios";
	import myFooter from '../components/myFooter'
	export default {
		created() {
			var _this = this;
			$.post("/api/goodDetail").then(function(data) {
				console.log(data.data.data.data);
				_this.goods = data.data.data.data
			})
		},
		components: {
			myFooter
		},
		data() {
			return {
				slides: ["http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170627110114040955.JPEG", "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170627110114553111.JPEG", "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170627110114448870.JPEG", "http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20170627110114599420.JPEG", ],
				goods: {}
			}
		}
	}
</script>

<style>
	.lunbo2 img {
		float: left;
		width: 320px;
		height: 270px;
	}
	
	.price {
		font-size: 0.48rem;
		color: #e54560;
		margin: 17px 13px;
	}
	
	.product_name {
		font-size: 0.32rem;
		line-height: 0.4rem;
		margin-top: 0.4rem;
		margin-left: 13px;
	}
	
	.product_sale {
		margin-left: 13px;
		background: #ffffff;
		height: 1rem;
		line-height: 1rem;
		border-top: 0.01rem solid #e5e5e5;
		font-size: 0.28rem;
		color: #4595e5;
	}
	
	.select_style,
	.comment {
		margin-left: 13px;
		background: #ffffff;
		height: 1rem;
		line-height: 1rem;
		border-top: 0.01rem solid #e5e5e5;
		font-size: 0.28rem;
	}
	
	.quick_memu {
		width: 100%;
		height: 43px;
		position: fixed;
		bottom: 40px;
	}
	
	.quick_memu .connect_customer,
	.into-shopping-bag {
		width: 49px;
		height: 42px;
		border-right: 1px solid #d9d9d9;
		background: url(../../static/good_detail/toolbar_icon_kefu@3x.png) no-repeat 10px 10px;
		background-size: 50%;
		float: left;
	}
	
	.into-shopping-bag {
		background-image: url(../../static/good_detail/tabbar_icon_bag_n@3x.png);
	}
	
	.buy-now,.add-to-shopping-bag{
		width: 109px;
		height: 43px;
		float: left;
		border-right: 1px solid #d9d9d9;
		line-height: 42px;
		text-align: center;
	}
	.add-to-shopping-bag{
		background: #4595e5;
		color: #FFFFFF;
	}
</style>