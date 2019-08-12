<template>
   <div class="bg">
      <!-- login.vue -->
        <!-- 标题 -->
        <div class="login_title">
          <img src="../img/mine/left.png">
          <p>登录</p> 
        </div>
        <table></table>
        <!-- 创建输入框 -->
        <div class="my_bgcolor">
          <input class="uname" placeholder="输入手机号" v-model="uname" >
        </div>
        <!-- 密码输入框 -->
        <div class="my_bgcolor">
          <input class="upwd" label="密码"  placeholder="输入密码" type="password"  v-model="upwd">
          <span>|&nbsp;&nbsp;获取验证码</span>
        </div>
        <!-- 登录按钮 -->
        <mt-button size="large" type="danger">登录</mt-button>
        <div class="point">
           <a href="#">邮件登录</a>
           <a href="#">收不到验证码?</a>
        </div>
   </div>
</template>
<script>
export default {

}
</script>

<style>
  @import url("../assets/css/comm.css");
  @import url("../assets/css/login.css");
</style>