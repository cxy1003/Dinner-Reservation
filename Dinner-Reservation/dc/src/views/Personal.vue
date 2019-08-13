<template>
 <div class="my_bgcolor">
   <!-- 个人信息页面  -->
   <!-- 顶部 -->
    <div class="login_title">
        <img src="../img/mine/left.png">
         <p>个人信息</p> 
    </div>
    <!-- 点击修改头像 -->
    <div class="personal_headImg">
        <img src="../img/mine/touxiang.png" alt="">
        <p class="font_family font_mine">点击修改头像</p>
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
        <mt-button size="large">退出登录</mt-button>
        
        
        
    </div>
 </div>
</template>

<script>
export default {
    data(){
    return{
      
    }
    }

}
</script>

<style scoped> 
   /* @import url("../assets/css/personal.css"); */
   @import url("../assets/css/login.css");
  
</style>