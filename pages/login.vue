<template>
	<view>
		<image src="../static/img/login_bg.png" mode="widthFix" class="response"></image>
		<!-- 请输入暗号: <input style="margin-top: 30px;" type="password" placeholder="123" name="pwd"> -->
		<view class="input-passwd">
			<text style="width: 10%;" >暗号:</text>
			<view style="padding-top: 20px;">
				<input class="uni-input" password= true  type="text" placeholder="请输入暗号"  v-model="pwd" />
			</view>
			<text class="subYellow" @click="changePWD">修改暗号</text>
			
		</view>
		
		<div class="check">
			<text :class="'cuIcon-square' + [isAgree ? 'check' : '']" @click="checkboxChange()"></text>
			<text class="secret">我同意</text>
			<text class="subRed" @click="secert">&nbsp;使用条款</text>
		</div>
			
			
		</div>
		<button class="login_button" plain="true"  type="primary" @click="login">登录</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				pwd: '',
				isAgree:false,
				
			}
		},
		methods: {
			changePWD:function() {
				uni.navigateTo({
					url: 'password'
				});
			},
			secert:function() {
				uni.navigateTo({
					url: 'secert'
				});
			},
			login: function() {
				if(this.pwd == '') {
					this.toast("🐸：请输入暗号！", "none");
					return;
				}
				if(this.pwd != getApp().globalData.pwd) {
					uni.showToast({
						title:'🐸：错误，你不是自己人！',
						duration:2000,
						icon:'none'
					})
					return;
				}
				if(this.isAgree == '') {
					this.toast("🐸：请同意保密条款", "none");
				}
				else {
					uni.navigateTo({
						url: 'index'
					});
					uni.setStorage({
						key: 'pwd',
						data: this.pwd,
						success: function() {
							that.toast("🐸：登录成功", "success");
							setTimeout(function() {
								uni.navigateBack({
									delta: 1
								})
							}, 1600)
						},
						fail: function() {
							that.toast("🐸：登录失败，请重试", "none");
						}
					});
				}
			},
			toast: function(str, icon) {
				uni.showToast({
					title: str,
					icon: icon,
					duration: 2000,
					mask: true
				})
			},
			checkboxChange: function () {
				this.isAgree=!this.isAgree;
			}
			
		}
	}
</script>

<style>
	input{
		width: 50%;
		height: 70rpx;
		border: 2px solid gray;
		border-radius: 10px;
		padding-left: 20px;
		box-shadow: 0px 0px 5px 1px #eeeeee;
	}
	image {
		margin-top:30rpx;
	}
	.input-passwd {
		color: black;
		width: 80%;
		font-size: 45rpx;
		margin-top:30rpx;
		margin-left: 150px;
	}
	.check {
		margin-top: 200px;
		font-size: 45rpx;
		margin-left: 120px;
		
	}
	.secret{
		font-size: 35rpx;
	}
	.subRed {
		margin-left: 5px;
		font-size: 35rpx;
		text-decoration: underline;
		color: red;
	}
	.subYellow {
		margin-left: 20px;
		font-size: 35rpx;
		color: orange;
	}
	.login_button {
		margin-top: 50px;
		margin-left: auto;
		width: 70%;
	}

</style>
