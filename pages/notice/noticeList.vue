<template>
	<view class="noticeBody">
		<view class="">
			<!-- <u-navbar title="" leftIconSize="40rpx" :autoBack="true" :border="true" :placeholder="true" leftText="我的通知"
				:safeAreaInsetTop="true" @leftClick="leftClick">
			</u-navbar> -->
			<uni-nav-bar left-icon="back" :fixed="true" :statusBar="true" leftWidth="30rpx" color="#2C2C2C">
				<view slot="left" class="backBtn">我的通知</view>
			</uni-nav-bar>
		</view>
		<view class="noticeContent">
			<!-- <u-search height="74rpx" searchIconSize="44" bgColor="#ffffff" shape="square" :clearabled="true" :showAction="false"
				v-model="keyword" class="search"></u-search> -->
				<!-- <uni-search-bar placeholder="自定placeholder" @confirm="search"></uni-search-bar> -->
				<uni-search-bar @confirm="search" @input="" placeholder="搜索" bgColor="#ffffff"/>
				<!-- <button type="default"></button> -->
		</view>
		<view class="noticeTabs">
			<uni-segmented-control style="width: 60%;" :current="current" :values="items" @clickItem="changeTabs" styleType="text" activeColor="#2D8CFF"></uni-segmented-control>
			<!-- <u-tabs :list="list" @click="changeTabs" :activeStyle="{color: '#2D8CFF',fontWeight: 'bold',transform: 'scale(1.05)'}"></u-tabs> -->
		</view>
		<view class="noticeList">
			 <view class="content">
			            <view v-show="current === 0">
			               <view class="noticeListItem" v-for="(item,index) in noticeList" @click="getNoticeDetail(item)">
			               	<view class="noticeListItemTitle">
			               		{{item.noticeTitle}}
			               	</view>
			               	<text class="noticeListItemTime">{{getDate(parseInt(item.startDate))}}</text>
			               	<view class="important" v-if="item.noticeLevel == '0'">
			               		重要
			               	</view>
			               </view>
			            </view>
			            <view v-show="current === 1">
			                <view class="" v-for="(item,index) in noticeList">
			                	<view class="noticeListItem" v-if="item.isRead == '0'" @click="getNoticeDetail(item)">
			                		<view class="noticeListItemTitle">
			                			{{item.noticeTitle}}
			                		</view>
			                		<text class="noticeListItemTime">{{getDate(parseInt(item.startDate))}}</text>
			                		<view class="important" v-if="item.noticeLevel == '0'">
			                			重要
			                		</view>
			                	</view>
			                </view>
			            </view>
			            <view v-show="current === 2">
			                <view class="" v-for="(item,index) in noticeList">
			                	<view class="noticeListItem" v-if="item.isRead == '1'" @click="getNoticeDetail(item)">
			                		<view class="noticeListItemTitle">
			                			{{item.noticeTitle}}
			                		</view>
			                		<text class="noticeListItemTime">{{getDate(parseInt(item.startDate))}}</text>
			                		<view class="important" v-if="item.noticeLevel == '0'">
			                			重要
			                		</view>
			                	</view>
			                </view>
			            </view>
			        </view>
			
		</view>

	</view>
</template>

<script>
	import api from '../../request/api.js'
	export default {
		data() {
			return {
				keyword: '',
				list: [{
					name: '全部'
				}, {
					name: '未读'
				}, {
					name: '已读'
				}],
				items:['全部','未读','已读'],
				current:0,
				currentUserId:'',
				noticeList:[],
			}
		},
		methods: {
			//获取通知列表
			getNoticeList(){
				console.log(this.currentUserId)
				api.getNoticeList({userId:this.currentUserId})
				.then(res => {
					console.log(res);
					if(res.code == 0){
						this.noticeList = res.data;
						uni.stopPullDownRefresh();
					}
				})
				.catch(err => {
					console.log(err);
				})
			},
			leftClick() {

			},
			//切换tabs
			changeTabs(item) {
				console.log(item)
				this.current = item.currentIndex;
			},
			//去通知详情页面
			getNoticeDetail(item){
				console.log(item.noticeId)
				uni.navigateTo({
					url: './noticeDetail?noticeId=' + item.noticeId
				})
			},
			//搜索
			search(){
				
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
		mounted(){
			uni.getStorage({
				key:'currentUserId',
				success:(res) => {
					console.log(res)
					this.currentUserId = res.data;
				}
			})
			this.getNoticeList()
		},
		onPullDownRefresh() {
			this.getNoticeList();
		}
	}
</script>

<style lang="less">
	.noticeBody {
		background: #f8f8fa;
	}

	.noticeContent {
		// margin-top: 68rpx;
	}

	.search {
		width: 90%;
		padding-left: 5%;
		height: 74rpx;
	}

	.noticeTabs {
		width: 90%;
		margin-left: 5%;
		margin-top: 30rpx;
	}
	.noticeList{
		width: 90%;
		margin-left: 5%;
		margin-top: 35rpx;
	}
	.noticeListItem{
		width: 100%;
		height: 154rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: relative;
		margin-bottom: 24rpx;
	}
	.noticeListItemTitle{
		width: 366rpx;
		/* height: 33rpx; */
		font-size: 32rpx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #2C2C2C;
		padding-top: 41rpx;
		margin-left: 44rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.noticeListItemTime{
		width: 101rpx;
		height: 17rpx;
		font-size: 20rpx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #939393;
		padding-top: 22rpx;
		margin-left: 44rpx;
	}
	.important{
		width: 126rpx;
		height: 36rpx;
		color: #FFFFFF;
		text-align: center;
		font-weight: 400;
		font-size: 21rpx;
		position: absolute;
		right: 27rpx;
		top: 94rpx;
		background: linear-gradient(90deg, #ffacaa, #ffd0cf);
		border-radius: 10px;
		line-height: 36rpx;
	}
	/deep/.uni-searchbar__box{
		justify-content:flex-start;
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
