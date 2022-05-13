<template name="mine">
	<view>
		<scroll-view scroll-y class="page">
			<view class="cu-card">
				<view class="cu-item bg-img shadow-blur" :style="[{backgroundImage:'url('+item.img+')'}]" @tap="toChild" :data-url="item.url"
				 v-for="(item,index) in list" :key="index">
					<view class="cardTitle">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "mine",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				list: [{
						title: '设置个人信息',
						url: '../plugin/indexes'
					},
				]
			};
		},
		methods: {
			toChild(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.cardTitle {
		color: #000000;
		padding: 90upx 60upx;
		font-size: 40upx;
		font-weight: 300;
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}

	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60upx;
		height: 1upx;
		border-radius: 20upx;
		background-color: #fff;
		display: block;
		top: 60upx;
		left: 50upx;
		transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140upx;
		border-radius: 6upx;
		height: 1upx;
		background-color: #fff;
		display: block;
		bottom: 76upx;
		left: 90upx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
