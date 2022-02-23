<template>
	<view class="registerBody">
		<image src="../../image/background.png" mode="" class="registerBG"></image>
		<view class="registerMid">
			<image src="../../image/register/register.png" mode="" class="register"></image>
			<view class="registerInput">
				<image src="../../image/register/account.png" mode="" class="accountImg"></image>
				<input type="text" value="" placeholder="请输入账号" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" />
			</view>
			<view class="registerInput" style="margin-top: 178rpx;">
				<image src="../../image/register/password.png" mode="" class="accountImg"></image>
				<input type="text" value="" placeholder="请输入密码" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" />
			</view>
			<view class="registerInput" style="margin-top: 292rpx;">
				<image src="../../image/register/password.png" mode="" class="accountImg"></image>
				<input type="text" value="" placeholder="请再次输入密码" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" />
			</view>
			<view class="tips">
				密码要求8-16位，至少包含数字、字母、符号两种元素
			</view>
		</view>
		<view class="registerBottm">
			<button type="default" class="nextStep" style="color: #FFFFFF;" @click="nextStep">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			nextStep() {
				uni.navigateTo({
					url: './register2'
				})
			}
		}
	}
</script>

<style>
	.registerBody {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.registerBG {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		z-index: -100000;
	}

	.register {
		width: 193rpx;
		height: 46rpx;
	}

	.registerMid {
		width: 70%;
		margin-left: 15%;
		padding-top: 420rpx;
	}

	.accountImg {
		width: 27rpx;
		height: 27rpx;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		/* margin-top: 26rpx; */
	}

	/* .accountInput,.accountImg{
		display: inline-block;
	} */
	.accountInput {
		height: 60rpx;
		margin-left: 40rpx;
		border-bottom: 1rpx solid #D4D4D4;
		width: 100%;
	}

	.registerInput {
		display: flex;
		flex-wrap: nowrap;
		height: 60rpx;
		position: absolute;
		margin-top: 62rpx;
		width: 70%;
	}

	.tips {
		font-size: 16rpx;
		color: #9A9A9A;
		font-weight: 400;
		margin-top: 379rpx;
	}

	.registerBottm {
		width: 100%;
		height: 80rpx;
		margin-top: 92rpx;
	}

	.nextStep {
		width: 227rpx;
		height: 74rpx;
		background: linear-gradient(90deg, #46A8F1, #2B71FF);
		border-radius: 12rpx;
		font-size: 27rpx;
		/* color: #FFFFFF; */
		font-weight: bold;
	}
</style>
