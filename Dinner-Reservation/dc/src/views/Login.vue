<template>
  <div class="my_bgcolor" id="abc">
    <!-- login.vue -->
    <!-- 标题 -->
    <mt-header title="登录">
      <mt-button @click="back" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <!-- 创建输入框 -->
    <!-- 1:用户输入框 -->
    <mt-field label="用户名" placeholder="请输入用户名或者手机号码" v-model="uname"></mt-field>
    <!-- 2：密码输入框 -->
    <div class="bt bb bg">
      <mt-field label="密码" placeholder="请输入密码" v-model="upwd" type="password"></mt-field>
    </div>
    <!-- 登录按钮 -->
    <div class="button_padding bg">
      <mt-button size="large" type="danger" @click="login">登录</mt-button>
    </div>
    <div class="point bg l_r_padding">
      <span class="style_span">其他方式登录</span>
      <span class="style_span" @click="reg">注册-></span>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      uname: "", //用户名
      upwd: "", //用户密码
      msgStatus1: false,
      phone: ""
    };
  },
  methods: {
    // 完成用户登录操作
    login() {
      //  用户名和密码格式验证
      // 用户名格式为手机号格式
      var ureg = /^[a-z0-9]{3,6}$/i;
      var preg = /^[a-z0-9]{3,6}$/i;
      var uname = this.uname;
      var upwd = this.upwd;
      // 用户名验证 如果格式不正确提示错误信息
      if (!ureg.test(uname)) {
        this.$toast("用户名格式不正确");
        return;
      } else if (!preg.test(upwd)) {
        this.$toast("密码格式不正确");
        return;
      } else {
        //发送ajax请求 axios
        var url = "http://127.0.0.1:5050/user/login";
        var obj = { uname: uname, upwd: upwd };
        this.axios.post(url, qs.stringify(obj)).then(res => {
          if (res.data.code == 200) {
            // this.$store.commit("changeUser", {uid: res.data.uid,uname: this.phone});
            console.log(res)
            localStorage.setItem("uid", res.data.uid);
            localStorage.setItem("uname", this.uname);
            console.log(this.uname)
            this.msgStatus1 = true;
            this.$toast("登录成功")
            setTimeout(() => {
              this.$router.go(-1);
            }, 1000);
          } else {
            this.$toast("用户名或密码错误");
          }
        });
      }
      // 登录结束
    },
    reg() {
      this.$router.push("/reguser");
    },
    back() {
      // this.$router.push('/Home/Mine');
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/login.css");
.button_padding {
  padding-top: 50px;
}
.style_span {
  color: rgba(80, 175, 82);
  padding: 0 20px 20px 20px;
}
</style>