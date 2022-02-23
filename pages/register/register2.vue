<template>
	<view class="registerBody">
		<image src="../../image/background.png" mode="" class="registerBG"></image>
		<view class="registerMid">
			<view class="registerInput">
				<image src="../../image/register/book.png" mode="" class="accountImg"></image>
				<!-- <input type="text" value="" placeholder="请选择您所申请的教材" class="accountInput"
					placeholder-style="color:#B6B6B6;opacity:0.5" @focus="bindPickerChange" /> -->
					<!-- //@change用于获取下拉框改变的值，:range用于循环遍历array数组将数组内容循环 -->
					<picker @change="bindPickerChange" :range="array" :value="index" :range-key="'label'" class="accountInput">	
						<!-- <label>国籍：</label> -->
						<!-- //循环array数组index为索引 -->
						<label class="" style="color:#B6B6B6;opacity:0.5">{{array[index].label}}</label>		
					</picker>
			</view>
		</view>
		<view class="registerBottm">
			<button type="default" class="nextStep" style="color: #FFFFFF;" @click="nextStep">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				array:[{
					value:'1',
					label:'请选择您所申请的教材'
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
			},
			nextStep(){
				uni.navigateTo({
					url: './register3'
				})
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
	.registerMid{
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
	.registerInput {
		display: flex;
		flex-wrap: nowrap;
		height: 60rpx;
		position: absolute;
		margin-top: 62rpx;
		width: 70%;
	}
	.accountInput {
		height: 60rpx;
		margin-left: 40rpx;
		border-bottom: 1rpx solid #D4D4D4;
		width: 100%;
	}
	.registerBottm {
		width: 100%;
		height: 80rpx;
		margin-top: 200rpx;
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
