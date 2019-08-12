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
        <mt-button size="large" type="danger" @click="login">登录</mt-button>
        <div class="point">
           <a href="#">邮件登录</a>
           <a href="#">收不到验证码?</a>
        </div>
   </div>
</template>
<script>
export default {
  data(){
     return{
       uname:"", //用户名
       upwd:"",  //用户密码
     }
  },
  methods:{
    // 完成用户登录操作
    login(){
    //  用户名和密码格式验证
    // 用户名格式为手机号格式
    var ureg = /^1[3-6]\w{9}$/i;
    var preg = /^[a-z0-9]{6-11}$/;
    // 用户名验证 如果格式不正确提示错误信息
    if(!ureg.test(this.uname)){
      this.$messagebox("用户名格式不正确");
      return;
    }else if(!preg.test(this.upwd)){
      // 密码验证 如果格式不正确提示错误信息
      this.$messagebox("用户密码不正确");
      return;
    }else{
      this.$toast("登陆成功");
    }
    //发送ajax请求 axios
    var url = "user/login";
    var obj = {uname:uname,upwd:upwd};
    this.axios.get(url,{params:obj}).then(res=>{
      if(res.data.code==200){
        this.$toast("登陆成功");
        this.$Router.push("/Mine");
      }else{
        this.$$messagebox("用户名或密码不正确");
      }
    })
    
    
    }
  }
}
</script>

<style>
  /* @import url("../assets/css/comm.css"); */
  @import url("../assets/css/login.css");
</style>