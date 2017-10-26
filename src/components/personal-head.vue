<template>
	<div class="person-header">
		<router-link to="/Login" class="touxiang">
			<img src="../../static/User/my_avatar_def@3x.png" alt="" />
		</router-link>
		<p class="to_login"><router-link to="/Login" >请登录</router-link></p>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	.person-header {
		height: 155px;
		background: url(../../static/User/my_avatar_bg@3x.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		overflow: hidden;
	}
	
	.touxiang {
		position: absolute;
		top: 26px;
		left: 126px;
	}
	
	.touxiang img {
		width: 68px;
		height: 68px;
	}
	.to_login{
		margin-top: 108px;
		text-align: center;
		color: #fff;
	}
	.to_login a{
		color: #fff;
	}
</style>