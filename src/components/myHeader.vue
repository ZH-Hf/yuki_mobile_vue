<template>
	<div class="header">
		<div class="header-nav">
			<div class="header-nav-button-left">
				<div class="icon-left"></div>
				<span class="info-left">优惠券</span>
			</div>
			<div class="search-input">
				<div class="search-icon"></div>
				<div class="search">
					<input type="text" class="to-search" placeholder="日本进口面膜" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style>
	.header {
		width: 100%;
		top: 0;
		background: #ffffff;
		position: fixed;
		z-index: 99;
	}
	
	.header-nav {
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
		padding: 0 0.32rem;
		text-align: center;
	}
	
	.header-nav .header-nav-button-left {
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
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-grow: 1;
		flex-grow: 1;
		width: 100%;
	}
	
	.header-nav .header-nav-button-left .icon-left {
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
		background: url(../../static/icon/b1a978e4a6f5f89260d6e6a7994859ae_home_icon_ticket@3x.png) no-repeat;
		background-size: 100%;
	}
	
	.header-nav .header-nav-button-left .info-left {
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
	
	.header-nav .search-input {
		-webkit-flex-item-align: center;
		-ms-flex-item-align: center;
		flex-item-align: center;
		-webkit-align-self: center;
		-ms-align-self: center;
		align-self: center;
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
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-grow: 1;
		flex-grow: 1;
		margin: 0 0.4rem;
		width: 10.11rem;
		height: 0.64rem;
		border: 0.01rem solid #d4d4d4;
		border-radius: 0.32rem;
		justify-content: left;
		background: #EBEBEB;
	}
	
	.header-nav .search-input .search-icon {
		-webkit-flex-item-align: center;
		-ms-flex-item-align: center;
		flex-item-align: center;
		-webkit-align-self: center;
		-ms-align-self: center;
		align-self: center;
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flex;
		display: inline-flex;
		margin-left: 0.16rem;
		width: 0.32rem;
		height: 0.32rem;
		background: url(../../static/icon/0e1e0423a8f4d42b454ada7f314203f9_nav_icon_search_small@3x.png) no-repeat;
		background-size: 100%;
	}
	
	.header-nav .search-input .search {
		-webkit-flex-item-align: center;
		-ms-flex-item-align: center;
		flex-item-align: center;
		-webkit-align-self: center;
		-ms-align-self: center;
		align-self: center;
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flex;
		display: inline-flex;
		padding-left: 0.08rem;
	}
	
	.header-nav .search-input .search .to-search {
		-webkit-box-pack: center;
		-moz-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-flex-item-align: center;
		-ms-flex-item-align: center;
		flex-item-align: center;
		-webkit-align-self: center;
		-ms-align-self: center;
		align-self: center;
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flex;
		display: inline-flex;
		border: 0;
		font-size: 0.28rem;
		color: #333333;
		background: #EBEBEB;
	}
</style>