<template>
	<view class="registerBody">
		<image src="../../image/background.png" mode="" class="registerBG"></image>
		<view class="registerMid">
			<image src="../../image/register/personInfo.png" mode="" class="register"></image>
			
			<!-- 姓名 -->
			<view class="registerInput">
				<image src="../../image/register/personName.png" mode="" class="accountImg"></image>
				<input type="text" value="" placeholder="请输入您的真实姓名" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" />
			</view>
			
			<!-- 工号 -->
			<view class="registerInput" style="margin-top: 146rpx;">
				<image src="../../image/register/teacherNum.png" mode="" class="accountImg"></image>
				<input type="text" value="" placeholder="请输入您的教师工号" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" />
			</view>
			
			<!-- 学校 -->
			<view class="registerInput" style="margin-top: 251rpx;">
				<image src="../../image/register/school.png" mode="" class="accountImg"></image>
				<!-- //@change用于获取下拉框改变的值，:range用于循环遍历array数组将数组内容循环 -->
				<picker @change="bindPickerChange" :range="array" :value="index" :range-key="'label'" class="accountInput">	
					<!-- <label>国籍：</label> -->
					<!-- //循环array数组index为索引 -->
					<label class="" style="color:#B6B6B6;opacity:0.5;font-size: 30rpx;">{{array[index].label}}</label>		
				</picker>
			</view>
			
			<!-- 专业 -->
			<view class="registerInput" style="margin-top: 354rpx;">
				<image src="../../image/register/major.png" mode="" class="accountImg"></image>
				<!-- //@change用于获取下拉框改变的值，:range用于循环遍历array数组将数组内容循环 -->
				<picker @change="bindPickerChange" :range="array" :value="index" :range-key="'label'" class="accountInput">	
					<!-- <label>国籍：</label> -->
					<!-- //循环array数组index为索引 -->
					<label class="" style="color:#B6B6B6;opacity:0.5;font-size: 30rpx;">{{array[index].label}}</label>		
				</picker>
			</view>
			
			<!-- 省份 -->
			<view class="registerInput" style="margin-top: 458rpx;">
				<image src="../../image/register/province.png" mode="" class="accountImg"></image>
				<!-- //@change用于获取下拉框改变的值，:range用于循环遍历array数组将数组内容循环 -->
				<picker @change="bindPickerChange" :range="array" :value="index" :range-key="'label'" class="accountInput">	
					<!-- <label>国籍：</label> -->
					<!-- //循环array数组index为索引 -->
					<label class="" style="color:#B6B6B6;opacity:0.5;font-size: 30rpx;">{{array[index].label}}</label>		
				</picker>
			</view>
			
			<!-- 电话 -->
			<view class="registerInput" style="margin-top: 563rpx;">
				<image src="../../image/register/phone.png" mode="" class="accountImg"></image>
				<input type="text" value="" placeholder="请输入您的联系电话" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" />
			</view>
			
			<!-- 邮箱 -->
			<view class="registerInput" style="margin-top: 670rpx;">
				<image src="../../image/register/email.png" mode="" class="accountImg"></image>
				<input type="text" value="" placeholder="请输入您的电子邮箱" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" />
			</view>
		</view>
		<view class="registerBottm">
			<button type="default" class="nextStep" style="color: #FFFFFF;" @click="nextStep">提交审核</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				array:[{
					value:'1',
					label:'请选择您所在的学校'
				},{
					value:'2',
					label:'中国'
				}],
				index:0
			}
		},
		methods:{
			bindPickerChange(e){
				console.log(e)
				this.index = e.target.value;
			}
		}
	}
</script>

<style>
	.registerBody{
		width: 100vw;
		height: 100vh;
		position: relative;
	}
	.registerBG{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		z-index: -100000;
	}
	.registerMid {
		width: 70%;
		margin-left: 15%;
		padding-top: 420rpx;
	}
	.register {
		width: 479rpx;
		height: 46rpx;
	}
	.registerInput {
		display: flex;
		flex-wrap: nowrap;
		height: 60rpx;
		position: absolute;
		margin-top: 52rpx;
		width: 70%;
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
	.registerBottm {
		width: 100%;
		height: 80rpx;
		margin-top: 760rpx;
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
