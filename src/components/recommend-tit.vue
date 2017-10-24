<template>
	<div class="recommend-tit">
		<div class="recommend">
			{{tit}}
		</div>
		<div class="nav-icon"></div>
	</div>
</template>

<script>
	export default {
		props: ['tit'],
		data() {
			return {}
		}
	}
</script>

<style>
	.recommend-tit {
		display: flex;
		height: 0.94rem;
		padding: 0 0.32rem;
		text-align: center;
		line-height: 40px;
		border: 0;
		border-bottom: 0.01rem solid #E5E5E5;
		padding: 0;
		margin: 0 0.32rem;
	}
	
	.recommend {
		flex-grow: 1;
		font-size: 0.36rem;
		font-weight: bold;
	}
	
	.nav-icon {
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
		-webkit-box-lines: single;
		box-lines: single;
		flex-wrap: -webkit-nowrap;
		flex-wrap: -ms-nowrap;
		flex-wrap: nowrap;
		-webkit-box-pack: center;
		-moz-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		text-align: center;
		width: 0.48rem;
		height: 0.48rem;
		background: url(../../static/icon/04479bdc4a1d831b332cd70f26d36e9e_home_icon_next_circle@3x.png) no-repeat center;
		background-size: 100%;
	}
</style>