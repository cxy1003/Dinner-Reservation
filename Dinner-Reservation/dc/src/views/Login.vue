<template>
   <div class="my_bgcolor" id="abc">
      <!-- login.vue -->
        <!-- 标题 -->
        <mt-header title="登录">
           <mt-button @click="back" icon="back" slot="left">返回</mt-button>
        </mt-header>
        <!-- 创建输入框 -->
       <mt-field class="personal_infor" label="用户名" placeholder="请输入用户名" type="email" v-model="uname"></mt-field>
       <mt-field class="personal_infor" label="用户密码" placeholder="请输入密码" type="password" v-modal="upwd"></mt-field>
        <!-- 登录按钮 -->
        <mt-button size="large" type="danger" @click="login">登录</mt-button>
        <div class="point">
           <a href="#">其他方式登录</a>
           <a href="#" @click="reg">注册-></a>
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
    var ureg=/^[a-z0-9]{3,6}$/i;
    var preg=/^[a-z0-9]{3,6}$/i;
    var uname=this.uname;
    var upwd=this.upwd;
    // 用户名验证 如果格式不正确提示错误信息
    if(!ureg.test(uname)){
      this.$messagebox("用户名格式不正确");
      return;
    }
    else if(!preg.test(upwd)){
      this.$messagebox("密码格式不正确");
      return;
    }
    //发送ajax请求 axios
    var url = "user/login";
    var obj = {uname:uname,upwd:upwd};
    this.axios.post(url,{params:obj}).then(res=>{
      if(res.data.code==200){
        this.$toast("登陆成功");
        this.$router.push("/Mine");
      }else{
        this.$messagebox("用户名或密码不正确");
      }
    })
    },
    reg(){
      this.$router.push('/Reguser')
    },
    back(){
      this.$router.push('/Mine');
    }
  }
}
</script>

<style>
  /* @import url("../assets/css/comm.css"); */
  @import url("../assets/css/login.css");
</style>