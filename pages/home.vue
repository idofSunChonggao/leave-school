<template name="home">
	<view>
		<scroll-view scroll-y class="page">
			<image src="../static/img/frag.png" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class='none' :url="'/pages/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {
				elements: [{
						title: '请假',
						name: 'leave',
						color: 'cyan',
						cuIcon: 'formfill'
					},
					{
						title: '报备',
						name: 'inform',
						color: 'orange',
						cuIcon: 'check'
						},
				],
					
			};
		},
		methods: {
			
		}
	}
</script>

<style>
	.page {
			height: 100vh;
		}
		
</style>
