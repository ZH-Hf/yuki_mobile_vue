<template>
	<div class="long_search">
		<input type="text" placeholder="从这里出发你会发现更多"/>
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		}
	}
</script>

<style>
	html{
		
	}
	*{
		margin: 0;
		padding: 0;
	}
	.long_search{
		width: 292px;
		height: 29px;
		margin: 4px 0 5px 14px;
	}
	.long_search input{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		outline: 0;
		border: 1px solid #d4d4d4;
		background: url(../../static/icon/nav_icon_search_small@3x.png) no-repeat scroll 73px 6px;
		background-size: 15px 15px;
		background-color: #ebebeb;
		padding-left: 96px;
	}
	#app{
		margin: 0;
	}
</style>