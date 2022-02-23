<template>
	<view>
		<view class="body">
			<image src="../../image/background.png" mode="" class="backgtoundImage"></image>
			<view class="bodyForm">
				<image src="../../image/logo.png" mode="" style="width: 100%;height: 94rpx;"></image>
				<view class="account">
					<input type="text" value="" v-model="formData.account" placeholder="账号"
						placeholder-style="color:#B6B6B6;opacity:0.5" />
				</view>
				<view class="password">
					<input type="text" value="" v-model="formData.password" placeholder="密码" password="true"
						placeholder-style="color:#B6B6B6;opacity:0.5" />
				</view>
				<view class="login" @click="login">
					登&nbsp;&nbsp;&nbsp;录
				</view>
				<view class="formBottom">
					<text class="register" @click="register">新用户注册</text>
					<text>|</text>
					<text class="forgotPwd">忘记密码</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import api from '../../request/api.js'
	import api from '../../request/api'
	export default {
		data() {
			return {
				formData: {
					account: '',
					password: ''
				},
				account: '',
				password: ''
			}
		},
		methods: {
			//登录
			login() {
				// uni.request({
				// 	url: 'http://outuser.choor.cn/out_login_api/login/doLogin',
				// 	data: {
				// 		"account": this.account,
				// 		"password": this.password
				// 	},
				// 	method: "post",
				// 	success: res => {
				// 		console.log(res);
				// 		if (res.data.code == 0) {
				// 			uni.redirectTo({
				// 				url: '../home/index'
				// 			})
				// 		}
				// 	}
				// })

				api.doLogin(this.formData).then(res => {
						console.log(res);
						if (res.code == 0) {
							uni.navigateTo({
								url: '../home/index'
							})
						}
					})
					.catch(err => {
						console.log(err);
					})
			},
			//注册
			register(){
				uni.navigateTo({
					url: '../register/index'
				})
			}
		}
	}
</script>

<style>
	.body {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.backgtoundImage {
		width: 100%;
		height: 100%;
	}

	.bodyForm {
		width: 70%;
		height: 600rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.account,
	.password {
		width: 100%;
		height: 74rpx;
		margin-top: 54rpx;
		box-shadow: 5px 8px 53px 0px rgba(188, 222, 247, 0.65);
	}

	input {
		width: 100%;
		height: 100%;
	}

	.login {
		width: 100%;
		height: 74rpx;
		background: linear-gradient(90deg, #46A8F1, #2B71FF);
		border-radius: 12rpx;
		font-size: 27rpx;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		line-height: 74rpx;
		margin-top: 45rpx;
	}

	.formBottom {
		width: 100%;
		text-align: center;
		color: #009BFF;
		font-size: 22rpx;
		margin-top: 26rpx;
	}

	.register {
		padding-right: 30rpx;
	}

	.forgotPwd {
		padding-left: 30rpx;
	}
</style>
