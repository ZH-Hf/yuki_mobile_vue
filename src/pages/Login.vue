<template>
	<div class="login_box">
		<div class="wel_pic">
		</div>
		<input type="text" placeholder="手机号/邮箱" />
		<input type="password" placeholder="密码" />
		<p class="goToRegister-backPassWord">
			<router-link to="register" class="goToRegister">立即注册</router-link>
			<router-link to="register" class="backPassWord">忘记密码</router-link>
		</p>
		<router-link to="home" class="login_btn">登录</router-link>
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
	input::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #999;
	}
	
	.login_box {
		padding: 0 34px;
	}
	
	.wel_pic {
		width: 84px;
		height: 90px;
		background: url(../../static/User/logo@3x.png) no-repeat;
		background-size: 100%;
		margin: 52px 0 45px 84px;
	}
	
	.login_box input {
		padding-top: 0.4rem;
		width: 100%;
		height: 0.6rem;
		font-size: 0.28rem;
		line-height: 0.6rem;
		color: #333;
		text-align: left;
		border: 0;
		outline: 0;
		border-bottom: 0.01rem solid #E5E5E5;
	}
	
	.goToRegister-backPassWord {
		margin-top: 13px;
	}
	.backPassWord{
		margin-left: 152px;
		color: #4595e5;
	}
	.login_btn{
		margin-top: 38px;
		display: block;
		height: 34px;
		line-height: 34px;
		text-align: center;
		background: #4595e5;
		color: #fff;
		width: 100%;
		border-radius:0.06rem;
	}
</style>