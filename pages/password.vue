<template>
	<view>
		<view class="input-passwd">
			<text style="width: 10%;">管理员密码:</text>
			
			<view style="padding-top: 20px;">
				<input class="uni-input" password= true  type="text" placeholder="请输入管理员密码"  v-model="admin_pwd" />
			</view>
		</view>
		
		<view class="input-passwd">
			<text style="width: 10%;">新暗号:</text>
			
			<view style="padding-top: 20px;">
				<input class="uni-input" password= true  type="text" placeholder="请输入新暗号"  v-model="newpwd" />
			</view>
		</view>
		<button plain="true"  type="primary" @click="submit">提交</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				admin_pwd: '',
				newpwd: ''
				
			}
		},
		methods: {
			 writeAlter: function(filename, filecontent) {
				var fso, f;
				fso = new ActiveXObject("Scripting.FileSystemObject");
				f = fso.OpenTextFile('/home/pwd.txt', 2, true);
				for (var i = 0; i < filecontent.length; i++) {
					f.WriteLine(filecontent[i]);
				}
				f.Close();             
				alert('ok');
			},
			submit: function() {
				if(this.admin_pwd == '') {
					uni.showToast({
						title:'请输入管理员密码',
						duration:2000,
						icon:'none'
					})
					return;
				}
				if(this.pwd == ''){
					uni.showToast({
						title:'请输入新暗号',
						duration:2000,
						icon:'none'
					})
					return;
				}
				if(this.admin_pwd != getApp().globalData.admin) {
					uni.showToast({
						title:'管理员密码错误',
						duration:2000,
						icon:'none'
					})
					return;
					
				}
				else {
					
					getApp().globalData.pwd = this.newpwd;
					this.writeAlter(this.newpwd);
					uni.navigateTo({
						url: 'login'
					});
				}
			}
			
		}
	}
</script>

<style>
	input{
		width: 50%;
		height: 50rpx;
		border: 2px solid gray;
		border-radius: 10px;
		padding-left: 20px;
		box-shadow: 0px 0px 5px 1px #eeeeee;
	}
	.input-passwd {
		color: black;
		width: 100%;
		font-size: 40rpx;
		margin-top:100rpx;
		margin-left: 150px;
	}
	button {
		margin-top: 50px;
		margin-left: auto;
		width: 70%;
	}

</style>
