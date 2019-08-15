<template>
 <div class="my_bgcolor">
   <!-- 个人信息页面  -->
   <!-- 顶部 -->
    <!-- 点击修改头像 -->
    <mt-header title="个人信息">
           <mt-button  icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="personal_headImg">
        <img src="../img/mine/touxiang.png" @click="actionSheet" alt="">
        <p class="font_family font_mine" @click="actionSheet">点击修改头像</p>
    </div>
    <div class="personal_infor">
        <mt-cell title="昵称" is-link>
           <span>183***3952</span> 
        </mt-cell> 
        <mt-cell title="等级" is-link>
           <span>普通会员</span> 
        </mt-cell> 
        <mt-cell title="1234567"  is-link>
               <img slot="icon" src="../img/mine/dianhua.png" width="24" height="24">
               <span style="color: grey">更换</span>
        </mt-cell>
        
        <mt-cell title="微博" is-link>
              <img slot="icon" src="../img/mine/weibo.png" width="24" height="24">
              <span style="color: red">点击绑定</span>
        </mt-cell>
        
         <mt-cell title="微信" is-link>
             <img slot="icon" src="../img/mine/weixin.png" width="24"  height="24">
             <span style="color: red">点击绑定</span>
        </mt-cell>
        <mt-button size="large" @click="back">退出登录</mt-button>
        <mt-actionsheet
            :actions= "data"
            v-model="sheetVisible">
        </mt-actionsheet>
        
        
    </div>
 </div>
</template>

<script>
export default {
    data(){
    return{
         data: [{
            name: '拍照',
            method : this.getCamera	// 调用methods中的函数
            }, {
            name: '从相册中选择',
            method : this.getLibrary	// 调用methods中的函数
            }],
            // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
            sheetVisible: false
    }
    },
    methods:{
        // 拍照传照片的功能
        actionSheet: function(){
            // 打开action sheet
            this.sheetVisible = true;
        },
        getCamera: function(){
            console.log("打开照相机")
        },
        getLibrary: function(){
            console.log("打开相册")
        },
        back(){
            this.$router.push("/Mine");
        }
    }


}
</script>

<style scoped> 
   /* @import url("../assets/css/personal.css"); */
   @import url("../assets/css/login.css");
  
</style>