<template>
	<view class="registerBody">
		<image src="../../image/register/registerBG.png" mode="" class="registerBG"></image>
		<view class="title">
			Hi~
		</view>
		<view class="chooseIdentity">
			请选择您的身份
		</view>
		<view class="">
			<image src="../../image/register/registerTeacher.png" mode="" class="registerTea" @click="register"></image>
		</view>
		<view class="">
			<image src="../../image/register/registerStudent.png" mode="" class="registerStu"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			register(){
				uni.navigateTo({
					url: './register1'
				})
			}
		}
	}
</script>

<style>
	.registerBody{
		width: 100vw;
		height: 100vh;
		/* background-image: url(../../image/register/registerBG.png);
		background-repeat: no-repeat; */
		position: relative;
	}
	.registerBG{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		    z-index: -10000;
	}
	.title{
		color: #FFFFFF;
		font-size: 45rpx;
		font-weight: bold;
		width: 100%;
		text-align: center;
		padding-top: 248rpx;
	}
	.chooseIdentity{
		color: #FFFFFF;
		font-size: 32rpx;
		width: 100%;
		text-align: center;
		margin-top: 35rpx;
	}
	.registerTea{
		width: 429rpx;
		height: 215rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 434rpx;
		margin: auto;
	}
	.registerStu{
		width: 429rpx;
		height: 215rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 680rpx;
		margin: auto;
	}
</style>
