<template>
   <div class="my_bgcolor">
      <!-- login.vue -->
        <!-- 标题 -->
        <div class="login_title">
          <img @click="go" src="../img/mine/left.png">
          <p>注册</p>
        </div>
        <table></table>
        <!-- 创建输入框 -->
       <mt-field  class="personal_infor" label="用户名" placeholder="请输入用户名" v-model="uname">
         <img slot="icon" src="../img/mine/dianhua.png" width="24" height="24">
       </mt-field>
       <mt-field class="personal_infor" label="手机号" placeholder="请输入手机号" type="email" v-model="phone"></mt-field>
       <mt-field class="personal_infor" label="用户密码" placeholder="请输入密码" type="password" v-modal="upwd"></mt-field>
       <mt-field class="personal_infor" label="确认密码" placeholder="请再次输入密码" type="tel" v-model="reupwd"></mt-field>
        <!-- 登录按钮 -->
        <mt-button size="large" type="danger" @click="userReg">提交</mt-button>
        <div class="point">
           <a href="#">其他方式注册</a>
        </div>
   </div>
</template>
<script>
export default {
 data(){
   return{
     uname:"",
     phone:"",
     opwd:"",
     reupwd:"",
   }
 },
 methods:{
   userReg(){
      var ureg=/^[a-z0-9]{3,6}$/i;
      var preg=/^[a-z0-9]{3,6}$/i;
      var phreg=/^1[3-7]\d{9}$/i;
      var uname=this.uname;
      var upwd=this.upwd;
      var phone=this.phone;
      var reupwd;
    // 用户名验证 如果格式不正确提示错误信息
    if(!ureg.test(uname)){
      this.$messagebox("用户名格式不正确");
      return;
    }else if(!preg.test(upwd)){
      this.$messagebox("密码格式不正确");
      return;
    }else if(!phreg.test(upwd)){
      this.$messagebox("手机格式不正确");
      return;
    }else if(!(upwd==reupwd)){
      this.$messagebox("两次输入密码不一致");
      return;
    }else{
       this.$messagebox("注册成功");
    }
    //发送ajax请求 axios
    var url = "user/reg";
    var obj = {uname:uname,upwd:upwd,phone:phone};
    this.axios.post(url,{params:obj}).then(res=>{
      if(res.data.code==200){
        this.$toast("登陆成功");
        this.$router.push("/Mine");
      }else{
        this.$messagebox("用户名或密码不正确");
      }
    })
   },
   go(){
     this.$router.push("/Login")
   }
 }
}
</script>

<style>
  @import url("../assets/css/login.css");
</style>