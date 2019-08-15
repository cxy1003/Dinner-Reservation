<template>
   <div class="my_bgcolor">
      <!-- login.vue -->
        <!-- 标题 -->
        <mt-header title="注册">
           <mt-button @click="go" icon="back" slot="left">返回</mt-button>
        </mt-header>
        <table></table>
        <!-- 创建输入框 -->
       <mt-field  class="personal_infor" label="用户名" placeholder="请输入用户名" v-model="uname">
         <img slot="icon" src="../img/mine/dianhua.png" width="24" height="24">
       </mt-field>
       <mt-field class="personal_infor" label="手机号" placeholder="请输入手机号"  v-model="phone"></mt-field>
       <mt-field class="personal_infor" label="用户密码" placeholder="请输入密码" type="password" v-modal="upwd"></mt-field>
       <mt-field class="personal_infor" label="确认密码" placeholder="请再次输入密码" type="password" v-model="reupwd"></mt-field>
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
     upwd:"",
     reupwd:"",
   }
 },
 methods:{
   userReg(){
      var reg=/^[a-z0-9]{3,11}$/i;
      var uname=this.uname;
      var upwd=this.upwd;
      var phone=this.phone;
      var reupwd;
    // 用户名验证 如果格式不正确提示错误信息
    if(!reg.test(uname)){
      this.$messagebox("用户名格式不正确");
      return;
    }else if(reg.test(upwd)){
      this.$messagebox("密码格式不正确");
      return;
    }else if(!reg.test(phone)){
      this.$messagebox("手机格式不正确");
      return;
    }else if(reupwd!=upwd){
      this.$messagebox("两次输入密码不一致");
      return;
    }
    //发送ajax请求 axios
    var url = "user/reg";
    var obj = {uname:uname,upwd:upwd,phone:phone};
    this.axios.post(url,{params:obj}).then(res=>{
      if(res.data.code==200){
        this.$toast("注册成功");
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