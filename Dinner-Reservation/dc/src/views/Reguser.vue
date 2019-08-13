<template>
   <div class="my_bgcolor">
      <!-- login.vue -->
        <!-- 标题 -->
        <div class="login_title">
          <img src="../img/mine/left.png">
          <p>注册</p>
        </div>
        <table></table>
        <!-- 创建输入框 -->
       <mt-field  class="personal_infor" label="用户名" placeholder="请输入用户名" v-model="uname">
         <img slot="icon" src="../img/mine/dianhua.png" width="24" height="24">
       </mt-field>
       <mt-field class="personal_infor" label="手机号" placeholder="请输入手机号" type="email" v-model="email"></mt-field>
       <mt-field class="personal_infor" label="用户密码" placeholder="请输入密码" type="password" v-modal="password"></mt-field>
       <mt-field class="personal_infor" label="确认密码" placeholder="请再次输入密码" type="tel" v-model="phone"></mt-field>
        <!-- 登录按钮 -->
        <mt-button size="large" type="danger">提交</mt-button>
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
  @import url("../assets/css/login.css");
</style>