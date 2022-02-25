<template>
	<view class="noticeDetailBody">
		<view class="">
			<!-- <u-navbar title="" leftIconSize="40rpx" :autoBack="true" :border="true" :placeholder="true" leftText="我的通知"
				:safeAreaInsetTop="true" @leftClick="leftClick">
			</u-navbar> -->
			<uni-nav-bar left-icon="back" :fixed="true" :statusBar="true" leftWidth="30rpx" color="#2C2C2C">
				<view slot="left" class="backBtn">通知详情</view>
			</uni-nav-bar>
		</view>
		<view class="noticeContent">
			<view class="noticeTitle">
				{{noticeContent.noticeTitle}}
			</view>
			<text class="noticeTime">{{getDate(parseInt(noticeContent.startDate))}}</text>
			<view class="important" v-if="noticeContent.noticeLevel == '0'">
				重要
			</view>
			<view class="line">
				
			</view>
			<view class="noticeContentDetail">
				{{noticeContent.noticeContent}}
			</view>
		</view>
		
	</view>
</template>

<script>
	import api from '../../request/api.js'
	export default{
		data(){
			return{
				noticeId:'',
				noticeContent:{},
				schoolClassId:'',
				userId:''
			}
		},
		methods:{
			//获取通知详情
			getNoticeDetail(){
				api.getNoticeDetail({noticeId:this.noticeId})
				.then(res => {
					console.log(res);
					if(res.code == 0){
						this.noticeContent = res.data;
					}
				})
				.catch(err => {
					console.log(err);
				})
			},
			//更新通知已读
			updateIsRead(){
				api.updateIsRead({noticeId:this.noticeId,schoolClassId:this.schoolClassId,userId:this.userId})
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				})
			},
			//时间戳转化时间
			getDate(date){
				let time = new Date(date);
				let YY = time.getFullYear();
				let MM = time.getMonth() + 1;
				let DD = time.getDate();
				return YY + '.' + MM + '.' + DD;
			}
		},
		mounted() {
			uni.getStorage({
				key:'schoolClassId',
				success:(res) => {
					console.log(res);
					this.schoolClassId = res.data;
				}
			})
			uni.getStorage({
				key:'currentUserId',
				success:(res) => {
					console.log(res);
					this.userId = res.data;
				}
			})
			this.getNoticeDetail();
			this.updateIsRead();
		},
		onLoad:function(options){
			console.log(options)
			this.noticeId = options.noticeId;
		}
	}
</script>

<style>
	.noticeContent{
		width: 90%;
		margin-left: 5%;
		margin-top: 41rpx;
		position: relative;
	}
	.noticeTitle{
		font-size: 32rpx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #2C2C2C;
		line-height: 45rpx;
	}
	.noticeTime{
		font-size: 20rpx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #939393;
		margin-top: 22rpx;
	}
	.important{
		width: 126rpx;
		height: 36rpx;
		color: #FFFFFF;
		text-align: center;
		font-weight: 400;
		font-size: 21rpx;
		margin-top: 13rpx;
		float: right;
		background: linear-gradient(90deg, #ffacaa, #ffd0cf);
		border-radius: 10px;
		line-height: 36rpx;
	}
	.line{
		width: 100%;
		border: 1px solid #D4D4D4;
		margin-top: 38px;
	}
	.noticeContentDetail{
		font-size: 25rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #2C2C2C;
		margin-top: 44rpx;
	}
	.backBtn{
		width: 157rpx;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 37rpx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #2C2C2C;
	}
</style>
