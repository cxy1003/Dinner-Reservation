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
       <mt-field class="personal_infor" label="手机号" placeholder="请输入手机号" type="email" v-model="phone"></mt-field>
       <mt-field class="personal_infor" label="用户密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
       <mt-field class="personal_infor" label="确认密码" placeholder="请再次输入密码" type="password" v-model="reupwd"></mt-field>
        <!-- 登录按钮 -->
        <mt-button size="large" type="danger" @click="userReg">提交</mt-button>
        <div class="point">
           <a href="#">其他方式注册</a>
        </div>
   </div>
</template>
<script>
import qs from 'qs'
export default {
 data(){
   return{
     uname:"",
     phone:null,
     reupwd:"",
     upwd:""
   }
 },
 methods:{
   userReg(){
      var ureg=/^[a-z0-9]{3,6}$/i;
      var preg=/^[a-z0-9]{3,6}$/i;
      var phreg=/^1[3-7][0-9]{9}$/;
      var uname=this.uname;
      var upwd=this.upwd;
      var phone=this.phone;
      var reupwd=this.reupwd;
    // 用户名验证 如果格式不正确提示错误信息
    if(!ureg.test(uname)){
      this.$messagebox("用户名格式不正确");
      return;
    }else if(!preg.test(upwd)){
      this.$messagebox("密码格式不正确");
      return;
    }else if(!phreg.test(phone)){
      this.$messagebox("手机格式不正确");
      return;
    }else if(!(upwd==reupwd)){
      this.$messagebox("两次输入密码不一致");
      return;
    }else{
      var url = "http://127.0.0.1:5050/user/reg";
        var obj = {uname:uname,upwd:upwd,phone:phone};
        this.axios.post(url,qs.stringify(obj)).then(res=>{
          console.log(res.data)
          if(res.data.code==200){
            this.$messagebox("注册成功").then(result=>{
              this.$router.push("/login")
            })
          }
        }
      )
    }
  },
  go(){
     this.$router.push("/login")
   }
 }
}
</script>

<style>
@import url("../assets/css/login.css");
</style>