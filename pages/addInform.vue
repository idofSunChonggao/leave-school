<template>
	<view>
		<label>你的名字<text class="subRed">*必填</text></label>
		<input placeholder="" v-model="name" />
		<label>请假类型<text class="subRed">*必填</text></label>
		<input placeholder="事假/病假" v-model="type" />
		<label>开始日期/时间<text class="subRed">*必填</text></label>
		<view class="pickerView">
			<picker mode="date" @change="bindStartDate" style="width: 42%;position: absolute;left: 0px;" :value="'2021-' + startDate">
				<view style="line-height: 20px;color: gray;" v-if="startDate == ''">开始日期</view>
				<view style="line-height: 20px;" v-if="startDate != ''">{{startDate}}</view>
			</picker>
			<picker mode="time" @change="bindStartTime" style="width: 42%;position: absolute;right: 0px;" :value="startTime">
				<view style="line-height: 20px;color: gray;" v-if="startTime == ''">开始时间</view>
				<view style="line-height: 20px;" v-if="startTime != ''">{{startTime}}</view>
			</picker>
		</view>
		<label>结束日期/时间<text class="subRed">*必填</text></label>
		<view class="pickerView">
			<picker mode="date" @change="bindEndDate" style="width: 42%;position: absolute;left: 0px;" :value="'2020-' + endDate">
				<view style="line-height: 20px;color: gray;" v-if="endDate == ''">结束日期</view>
				<view style="line-height: 20px;" v-if="endDate != ''">{{endDate}}</view>
			</picker>
			<picker mode="time" @change="bindEndTime" style="width: 42%;position: absolute;right: 0px;" :value="endTime">
				<view style="line-height: 20px;color: gray;" v-if="endTime == ''">结束时间</view>
				<view style="line-height: 20px;" v-if="endTime != ''">{{endTime}}</view>
			</picker>
		</view>
		<!-- <input placeholder="结束时间:10-11 15:00" v-model="endDate" /> -->
<!-- 		<label>总时间<text class="subRed">*必填</text></label>
		<input placeholder="共*天*小时" v-model="countDate" /> -->
		<label>紧急联系人<text class="subRed">*必填</text></label>
		<input placeholder="手机号" v-model="phone" />
		<label>请假原因<text class="subRed">*必填</text></label>
		<input placeholder="(不少于10字)" v-model="reason" />
		<label>目的地<text class="subRed">*必填</text></label>
		<input placeholder="福建省/厦门市/集美区/万科云城" v-model="cc" />
		<label>定位位置<text class="subRed">*必填</text></label>
		<input placeholder="福建省厦门市集美区博闻路" v-model="address" />
		<!-- <label>附件<text class="subGray">(可以选择一张图片作为附件)</text></label>
		<input placeholder="点击设置附件图片" :value="imgFile" @click="clickFile"/>

		<label>二级审批人<text class="subGray">(如填此项，二级所有信息必填)</text></label>
		<input placeholder="二级审批人姓名" v-model="twoCheck" />
		<label>二级审批人身份</label>
		<input placeholder="院级管理员" v-model="twoCheckStatus" />
		<label>二级审批意见</label>
		<input placeholder="无" v-model="twoCheckIdea" />
		<label>二级审批通过日期/时间</label>
		<view class="pickerView">
			<picker mode="date" @change="bindTwoCheckDate" style="width: 42%;position: absolute;left: 0px;" :value="'2020-' + twoCheckDate">
				<view style="line-height: 20px;color: gray;" v-if="twoCheckDate == ''">审批日期</view>
				<view style="line-height: 20px;" v-if="twoCheckDate != ''">{{twoCheckDate}}</view>
			</picker>
			<picker mode="time" @change="bindTwoCheckTime" style="width: 42%;position: absolute;right: 0px;" :value="twoCheckTime">
				<view style="line-height: 20px;color: gray;" v-if="twoCheckTime == ''">审批时间</view>
				<view style="line-height: 20px;" v-if="twoCheckTime != ''">{{twoCheckTime}}</view>
			</picker>
		</view>

		<label>三级审批人<text class="subGray">(如填此项，三级所有信息必填)</text></label>
		<input placeholder="三级审批人姓名" v-model="threeCheck" />
		<label>三级审批人身份</label>
		<input placeholder="校级管理员" v-model="threeCheckStatus" />
		<label>三级审批意见</label>
		<input placeholder="无" v-model="threeCheckIdea" />
		<label>三级审批通过日期/时间</label>
		<view class="pickerView">
			<picker mode="date" @change="bindThreeCheckDate" style="width: 42%;position: absolute;left: 0px;" :value="'2020-' + threeCheckDate">
				<view style="line-height: 20px;color: gray;" v-if="threeCheckDate == ''">审批日期</view>
				<view style="line-height: 20px;" v-if="threeCheckDate != ''">{{threeCheckDate}}</view>
			</picker>
			<picker mode="time" @change="bindThreeCheckTime" style="width: 42%;position: absolute;right: 0px;" :value="threeCheckTime">
				<view style="line-height: 20px;color: gray;" v-if="threeCheckTime == ''">审批时间</view>
				<view style="line-height: 20px;" v-if="threeCheckTime != ''">{{threeCheckTime}}</view>
			</picker>
		</view> -->
		
		<view class="sub" @click="sub">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leaves: null,
				name: '',
				startDate: '',
				startTime: '',
				endDate: '',
				endTime: '',
				countDate: '',
				reason: '',
				phone: '',
				address: '福建省厦门市集美区博闻路',
				cc: '许落汀',
				oneCheck: '宋益国',
				oneCheckDate: '',
				oneCheckTime: '',
				oneCheckStatus:'辅导员',
				oneCheckIdea: '无',
				twoCheck: '',
				twoCheckDate: '',
				twoCheckTime: '',
				twoCheckStatus:'',
				twoCheckIdea: '',
				threeCheck: '',
				threeCheckDate: '',
				threeCheckTime: '',
				threeCheckStatus:'',
				threeCheckIdea: '',
				state: '正在休假中',
				type:'',
				colorIndex: 0,
				imgFile:'',
				pwd:'',
			}
		},
		onShow() {
			this.pwd = uni.getStorageSync('pwd');
			if(this.pwd != getApp().globalData.pwd) {
				uni.navigateTo({
					url: 'login'
				});
			}
			this.leaves = uni.getStorageSync('todaySchoolLeaves');
			if (this.leaves == '' || this.leaves == null) {
				this.leaves = [];
			}
			if(this.leaves.length > 0){
				var leave = this.leaves[this.leaves.length - 1];
				this.name = leave.name;
				this.type = leave.type;
				this.reason = leave.reason;
				this.phone = leave.phone;
				this.address = leave.address;
				this.cc = leave.cc;
				this.oneCheck = leave.oneCheck;
				this.twoCheck = leave.twoCheck;
				this.threeCheck = leave.threeCheck;
				this.oneCheckStatus = leave.oneCheckStatus;
				this.twoCheckStatus = leave.twoCheckStatus;
				this.threeCheckStatus = leave.threeCheckStatus;
				this.oneCheckIdea = leave.oneCheckIdea;
				this.twoCheckIdea = leave.twoCheckIdea;
				this.threeCheckIdea = leave.threeCheckIdea;
			}
		},
		methods: {
			difference: function (beginTime, endTime) {
				var userAgent = navigator.userAgent;
				if(userAgent.indexOf("Safari") > -1) {
					beginTime = beginTime.replace(/\-/g, '/');
					endTime = endTime.replace(/\-/g, '/');
				}
				var dateBegin = new Date(beginTime).getTime();
				var dateEnd = new Date(endTime).getTime();
				var dateDiff = dateEnd - dateBegin; //时间差的毫秒数
				var days = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
				var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
				var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
				//计算相差分钟数
				var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
				var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
				var diff = "";
				if(Number(days) != Number(0) && !isNaN(days)) {
					diff = diff + days.toString() + "天";
				}
				if(Number(hours) != Number(0) && !isNaN(hours)) {
					diff = diff + hours.toString() + "小时";
				}
				if(Number(minutes) != Number(0) && !isNaN(minutes)) {
					diff = diff + minutes.toString() + "分钟";
				}
				this.countDate = diff;
				console.log(this.countDate)
			},
			sub: function() {
				var that = this;
				if (this.name == '' || this.type == '' || this.startDate == '' || this.startTime == '' ||
					this.endDate == '' || this.endTime == '' || this.reason == '' || this.address == '' ) {
					this.toast("请将必填信息填写完整", "none");
					return;
				}
				if (this.startDate == this.endDate && this.startTime == this.endTime) {
					this.toast("开始日期不能等于结束日期", "none");
					return;
				}
				if (this.reason.length < 10) {
					this.toast("请假原因不能少于10字", "none");
					return;
				}
				
				this.difference(this.startDate + " " + this.startTime,
				this.endDate + " " + this.endTime);
				var obj = {};
				var date = new Date();
				obj['name'] = this.name;
				obj['type'] = this.type;
				obj['startDate'] = this.startDate + " " + this.startTime;
				obj['endDate'] = this.endDate + " " + this.endTime;
				obj['reason'] = this.reason;
				obj['phone'] = this.phone;
				obj['address'] = this.address;
				obj['cc'] = this.cc;
				obj['oneCheck'] = this.oneCheck;
				obj['oneCheckDate'] = this.oneCheckDate + " " + this.oneCheckTime;
				obj['oneCheckStatus'] = this.oneCheckStatus;
				obj['oneCheckIdea'] = this.oneCheckIdea;
				obj['twoCheck'] = this.twoCheck;
				obj['twoCheckDate'] = this.twoCheckDate + " " + this.twoCheckTime;
				obj['twoCheckStatus'] = this.twoCheckStatus;
				obj['twoCheckIdea'] = this.twoCheckIdea;
				obj['threeCheck'] = this.threeCheck;
				obj['threeCheckDate'] = this.threeCheckDate + " " + this.threeCheckTime;
				obj['threeCheckStatus'] = this.threeCheckStatus;
				obj['threeCheckIdea'] = this.threeCheckIdea;
				obj['state'] = this.state;
				obj['applyDate'] = (Number(date.getMonth() + 1).toString().length <= 1 ? "0" + Number(date.getMonth() + 1) : Number(date.getMonth() +
						1)) + "-" +
					(date.getDate().toString().length <= 1 ? "0" + date.getDate() : date.getDate()) + " " +
					(date.getHours().toString().length <= 1 ? "0" + date.getHours() : date.getHours()) + ":" +
					(date.getMinutes().toString().length <= 1 ? "0" + date.getMinutes() : date.getMinutes());
			
				obj['imgFile'] = this.imgFile;
				obj['countDate'] = this.countDate;
				console.log("this1:" + this.countDate);
				this.leaves.push(obj);
				console.log(this.leaves)
				uni.setStorage({
					key: 'todaySchoolInforms',
					data: that.leaves,
					success: function() {
						that.toast("提交成功", "success");
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							})
						}, 1600)
					},
					fail: function() {
						that.toast("提交失败，请重试", "none");
					}
				})
			},
			
		
			//开始日期选择
			bindStartDate: function(e) {
				console.log(e.detail.value.substring(5, e.detail.value.length))
				this.startDate = e.detail.value.substring(5, e.detail.value.length)
			},
			//开始时间选择
			bindStartTime: function(e) {
				console.log(e.detail.value)
				this.startTime = e.detail.value;
			},
			//结束日期选择
			bindEndDate: function(e) {
				console.log(e.detail.value.substring(5, e.detail.value.length))
				this.endDate = e.detail.value.substring(5, e.detail.value.length)
			},
			//结束时间选择
			bindEndTime: function(e) {
				console.log(e.detail)
				this.endTime = e.detail.value;
			},
			//一级审批日期选择
			bindOneCheckDate: function(e) {
				console.log(e.detail.value.substring(5, e.detail.value.length))
				this.oneCheckDate = e.detail.value.substring(5, e.detail.value.length)
			},
			//一级审批时间选择
			bindOneCheckTime: function(e) {
				console.log(e.detail)
				this.oneCheckTime = e.detail.value;
			},
			// //二级审批日期选择
			// bindTwoCheckDate: function(e) {
			// 	console.log(e.detail.value.substring(5, e.detail.value.length))
			// 	this.twoCheckDate = e.detail.value.substring(5, e.detail.value.length)
			// },
			// //二级审批时间选择
			// bindTwoCheckTime: function(e) {
			// 	console.log(e.detail)
			// 	this.twoCheckTime = e.detail.value;
			// },
			// //三级审批日期选择
			// bindThreeCheckDate: function(e) {
			// 	console.log(e.detail.value.substring(5, e.detail.value.length))
			// 	this.threeCheckDate = e.detail.value.substring(5, e.detail.value.length)
			// },
			// //三级审批时间选择
			// bindThreeCheckTime: function(e) {
			// 	console.log(e.detail)
			// 	this.threeCheckTime = e.detail.value;
			// },
			//实际休假时间颜色选择被单击
			bindColor:function(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.colorIndex = e.target.value;
				this.changColorTitleStyle()
			},
			//实际休假时间颜色标题颜色改变
			changColorTitleStyle:function(){
				if(this.colorIndex == 0){
					return 'line-height: 45px;color:#F79A0D;';
				} else if(this.colorIndex == 1){
					return 'line-height: 45px;color:black;';
				} else if(this.colorIndex == 2){
					return 'line-height: 45px;color:red;';
				}
			},
			// //选择附件单击
			// clickFile:function(){
			// 	var that = this;
			// 	uni.chooseImage({
			// 		count:1,
			// 		sourceType:['album'],
			// 		success(e) {
			// 			var ff = e.tempFilePaths[0];
			// 			console.log(e.tempFilePaths[0])
			// 			that.toast('附件设置成功','sucess')
						
			// 			uni.saveFile({
			// 				tempFilePath:ff,
			// 				success(res) {
			// 					console.log(res.savedFilePath);
			// 					that.imgFile = res.savedFilePath;
			// 				}
			// 			})
			// 		},
			// 	})
				
			// },
			
			toast: function(str, icon) {
				uni.showToast({
					title: str,
					icon: icon,
					duration: 2000,
					mask: true
				})
			}
		}
	}
</script>

<style>
	input,
	picker {
		border: 1px solid #ccc;
		margin: 10px;
		margin-top: 2px;
		margin-bottom: 10px;
		padding-left: 5px;
		padding-right: 5px;
		height: 45px;
		border-radius: 5px;
		transition: all .3s ease;
	}

	input:hover {
		border: 1px solid #007AFF;
		box-shadow: 0px 0px 5px 1px #eeeeee;
	}

	picker:hover {
		border: 1px solid #007AFF;
		box-shadow: 0px 0px 5px 1px #eeeeee;
	}

	label {
		margin-left: 10px;
		color: #2c906f;
	}

	.sub {
		background-color: #38b48b;
		margin: 20px;
		color: white;
		text-align: center;
		font-size: 35px;
		height: 75px;
		line-height: 75px;
		border-radius: 10px;
	}

	.pickerView {
		width: 100%;
		position: relative;
		height: 45px;
		margin-bottom: 20px;
		text-align: center;
		z-index: 0 ;
	}

	.pickerView picker {
		z-index: 9999;
		background-color: white;
	}

	.border-center {
		border-top: 1px solid gray;
		width: 50%;
		margin: 0 auto;
		position: relative;
		top: 25px;
	}

	.subRed {
		font-size: 20rpx;
		color: red;
	}
	.subGray{
		font-size: 20rpx;
		color: #ffa400;
	}
</style>
