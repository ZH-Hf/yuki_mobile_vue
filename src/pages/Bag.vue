<template>
	<div>
		<div class="bag_header">
			<router-link to="login">
				<div class="prev_icon"></div>
			</router-link>
			<p>购物袋</p>
			<span>编辑</span>
		</div>
		<ul class='goodList'>
			<li>
				<div class="checkbox" :class="{checkbox_active:active}" @click="change">
				</div>
				<div class="goodInfo">
					<img src="../../static/bag/gooddetail.jpg" alt="" />
					<p class="goodName">埃罗芒阿老师我的妹妹是黄漫和泉沙雾COSt恤短袖夏装上衣服女</p>
					<p class="goodStyle">款式:L</p>
					<p><span class="goodPrice">¥59</span><span class="goodCount">x1</span></p>
				</div>
			</li>
		</ul>
		<guess-goods style="float: left;"/>
		<blank style="float: left;width: 100%;"/>
		<my-footer/>
	</div>

</template>

<script>
	import guessGoods from '../components/guess_goods'
	import blank from '../components/blank'
	
	import myFooter from '../components/myFooter'
	export default {
		components: {
			myFooter,guessGoods,blank
		},
		methods: {
			change() {
				this.active = !this.active;
				console.log(this.active)
			}
		},
		data() {
			return {
				active: false
			}
		}
	}
</script>

<style>
	.bag_header {
		float: left;
	}
	
	.bag_header a {
		float: left;
	}
	
	.prev_icon {
		width: 20px;
		height: 20px;
		background: url(../../static/User/nav_icon_back@3x.png) no-repeat;
		background-size: 100%;
		float: left;
		margin-top: 8px;
		margin-left: 10px;
	}
	
	.bag_header p {
		height: 38px;
		line-height: 38px;
		text-align: center;
		font-size: 15.36px;
		float: left;
		width: 248px;
	}
	
	.bag_header span {
		float: left;
		line-height: 38px;
	}
	
	.goodList {
		float: left;
		width: 100%;
	}
	.goodList li{
		box-sizing: border-box;
		width: 100%;
	}
	.goodList .checkbox {
		width: 17px;
		height: 17px;
		background: url(../../static/bag/common_icon_empty@2x.png) repeat scroll top left;
		-webkit-background-size: 100%;
		background-size: 100%;
		float: left;
		margin: 24px 0 0 0px;
	}
	
	.goodList .goodInfo {
		float: left;
		width: 94%;
	}
	
	.goodInfo p {
		margin-top: 4px;
		width: 179px;
		float: left;
		font-size: 0.28rem;
		color: #333;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.goodStyle {
		font-size: 0.24rem;
		height: .28rem;
		color: #999;
		text-align: left;
		margin-bottom: 0.3rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.goodList .checkbox_active {
		background-image: url(../../static/bag/common_icon_chose@2x.png);
	}
	
	.goodList li {
		padding: 0.24rem 0.32rem;
		float: left;
		width: 100%;
	}
	
	.goodList li img {
		height: 68px;
		width: 68px;
		margin-left: 20px;
		margin-right: 0.32rem;
		float: left;
	}
	.goodPrice{
		float: left;
		color: #e54560;
	}
	.goodCount{
		float: right;
		margin-right: 16px;
	}
	
</style>