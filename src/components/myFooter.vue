<template>
	<footer>
		<div class="footer_bar">
			<router-link :to="icon.link" class="footer_item" v-for="icon in Icons" :key="icon.link">
				<img :src="icon.imgSrc" alt="icon.txt" />
				<!--<span>{{icon.imgSrc}}</span>-->
				<span>{{icon.txt}}</span>
			</router-link>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'myFooter',
		data() {
			return {
				Icons: [{
					link: "/home",
					imgSrc: "./static/icon/tabbar_icon_home_n@3x.png",
					txt: "首页"
				}, {
					link: "/column",
					imgSrc: "./static/icon/tabbar_icon_column_n@3x.png",
					txt: "分类"
				}, {
					link: "/bag",
					imgSrc: "./static/icon/tabbar_icon_bag_n@3x.png",
					txt: "购物袋"
				}, {
					link: "/my",
					imgSrc: "./static/icon/tabbar_icon_me_n@3x.png",
					txt: "我的"
				}]
			}
		},
		mounted() {
//			console.log("Footer")
		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
		color: #333;
	}
	footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		background: #ffffff;
	}
	
	.footer_bar {
		-webkit-box-align: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: justify;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-box-lines: single;
		box-lines: single;
		flex-wrap: -webkit-nowrap;
		flex-wrap: -ms-nowrap;
		flex-wrap: nowrap;
		-webkit-box-orient: horizontal;
		-moz-box-orient: horizontal;
		-webkit-box-direction: normal;
		-moz-box-direction: normal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		flex-direction: row;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		padding: 0 0.7rem;
		text-align: center;
		border: 1px solid #D2D2D2;
	}
	
	.footer_item {
		-webkit-box-orient: vertical;
		-moz-box-orient: vertical;
		-webkit-box-direction: normal;
		-moz-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flex;
		display: inline-flex;
		-webkit-box-align: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.footer_item img {
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flex;
		display: inline-flex;
		-webkit-flex-item-align: center;
		-ms-flex-item-align: center;
		flex-item-align: center;
		-webkit-align-self: center;
		-ms-align-self: center;
		align-self: center;
		-webkit-box-lines: multiple;
		box-lines: multiple;
		flex-wrap: -webkit-wrap;
		flex-wrap: -ms-wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-moz-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		text-align: center;
		width: 0.48rem;
		height: 0.48rem;
		/*background: url("../img/tabbar_icon_home_n@3x.png") no-repeat;
		background-size: 100%;*/
	}
	
	.footer_bar span {
		-webkit-box-lines: single;
		box-lines: single;
		flex-wrap: -webkit-nowrap;
		flex-wrap: -ms-nowrap;
		flex-wrap: nowrap;
		-webkit-flex-item-align: center;
		-ms-flex-item-align: center;
		flex-item-align: center;
		-webkit-align-self: center;
		-ms-align-self: center;
		align-self: center;
		-webkit-box-pack: center;
		-moz-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flex;
		display: inline-flex;
		margin: 0.08rem 0;
		font-size: 0.2rem;
	}
	.router-link-active{
		color: red;
	}
</style>