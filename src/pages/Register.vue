<template>
	<div class="register">
		<div class="reg_header">
			<router-link to="login"><div class="prev_icon"></div></router-link>
			<p>注册</p>
		</div>
		<aside></aside>
		<div class="reg_form">
			<div class="number_input">
				<input type="text" placeholder="请输入用户名" class="username" />
				<button>获取验证码</button>
			</div>
			<div class="password_input">
				<input type="text" placeholder="密码" class="pwd" />
			</div>
		</div>
		<button class="next">下一步</button>
	</div>
</template>

<script>
	export default {
		methods:{},
		data() {
			return {}
		}
	}
</script>

<style>
	aside {
		width: 100%;
		height: 0.2rem;
		background: #f0f0f0;
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
	
	.reg_header p {
		height: 38px;
		line-height: 38px;
		text-align: center;
		font-size: 15.36px;
	}
	
	.number_input {
		width: 294px;
		height: 42px;
		padding: 0 12px;
		border-bottom: 1px solid rgb(229, 229, 229);
	}
	
	.number_input input {
		border: 0;
		outline: 0;
		margin-top: 14px;
	}
	
	.number_input button {
		border: 0;
		outline: 0;
		width: 1.6rem;
		height: 0.56rem;
		border-radius: 0.06rem;
		background: #cccccc;
		font-size: 0.26rem;
		line-height: 0.56rem;
		color: #fff;
		text-align: left;
		text-align: center;
		float: right;
		margin-top: 10px;
	}
	
	.password_input {
		width: 294px;
		height: 42px;
		border-bottom: 1px solid rgb(229, 229, 229);
		padding: 0 12px;
	}
	
	.password_input input {
		border: 0;
		outline: 0;
		margin-top: 14px;
	}
	input::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #ccc;
	}
	.next {
		width: 86%;
		margin-left: 20px;
		margin-top:20px ;
		padding: 0 0.32rem;
		text-align: center;
		color: #ffffff;
		font-size: 0.28rem;
		height: 0.8rem;
		border-radius: 0.06rem;
		background-color: #4595e5;
		outline: 0;
		border: 0;
	}
</style>