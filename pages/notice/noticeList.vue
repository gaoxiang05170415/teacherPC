<template>
	<view class="noticeBody">
		<view class="">
			<u-navbar title="" leftIconSize="40rpx" :autoBack="true" :border="true" :placeholder="true" leftText="我的通知"
				:safeAreaInsetTop="true" @leftClick="leftClick">
			</u-navbar>
		</view>
		<view class="noticeContent">
			<u-search height="74rpx" searchIconSize="44" bgColor="#ffffff" shape="square" :clearabled="true" :showAction="false"
				v-model="keyword" class="search"></u-search>
		</view>
		<view class="noticeTabs">
			<u-tabs :list="list" @click="changeTabs" :activeStyle="{color: '#2D8CFF',fontWeight: 'bold',transform: 'scale(1.05)'}"></u-tabs>
		</view>
		<view class="noticeList">
			<view class="noticeListItem" @click="getNoticeDetail">
				<view class="noticeListItemTitle">
					浙文互联集团股份有限...
				</view>
				<text class="noticeListItemTime">2022.2.17</text>
				<view class="important">
					重要
				</view>
			</view>
			<view class="noticeListItem">
				<view class="noticeListItemTitle">
					浙文互联集团股份有限...
				</view>
				<text class="noticeListItemTime">2022.2.17</text>
				<view class="important">
					重要
				</view>
			</view>
		</view>

	</view>
</template>

<script>
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
				}]
			}
		},
		methods: {
			leftClick() {

			},
			//切换tabs
			changeTabs(item) {
				console.log(item)
			},
			//去通知详情页面
			getNoticeDetail(){
				uni.navigateTo({
					url: './noticeDetail'
				})
			}
		}
	}
</script>

<style>
	.noticeBody {
		background: #f8f8fa;
	}

	.noticeContent {
		margin-top: 68rpx;
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
</style>
