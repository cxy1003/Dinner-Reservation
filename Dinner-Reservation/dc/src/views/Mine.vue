<template>
  <div>
    <div class="top">
      <table></table>
      <div class="install"></div>
      <div class="user"></div>
      <div v-show="!res.uid" class="login">
        <router-link :to="`/login`" class="a_style">登录</router-link>/
        <router-link :to="`/reguser`" class="a_style">注册</router-link>
      </div>
      <div v-show="res.uid" class="login">
        <span class="a_style">欢迎！{{(res.uname)}}</span>
        <button v-show="res.uid" class="button_style" @click="quit">退出登录</button>
      </div>
    </div>
    <!-- 订单状态导航 -->
    <ul class="nav bg mine_nav">
      <li @click="jumporderlist">
        <a>
          <img class="nav_img" src="../img/mine/jinxingzhong.png" />
          <p class="font_family font_mine">进行中</p>
        </a>
      </li>
      <li @click="jumporderlist">
        <a >
          <img class="nav_img" src="../img/mine/daizhifu.png" />
          <p class="font_family font_mine">待支付</p>
        </a>
      </li>
      <li @click="jumporderlist">
        <a>
          <img class="nav_img" src="../img/mine/quanbudingdan.png" />
          <p class="font_family font_mine" @click="look">全部订单</p>
        </a>
      </li>
    </ul>
    <!-- 积分优惠导航 -->
    <ul class="nav_other bg mine_nav">
      <li>
        <a href="#" class="my_prefer">
          <img src="../img/mine/jifen.png" />
          <p class="font_family font_mine">我的积分</p>
        </a>
      </li>
      <li>
        <a href="#" class="my_prefer">
          <img src="../img/mine/wodeyouhui.png" />
          <p class="font_family font_mine">我的优惠</p>
        </a>
      </li>
      <li>
        <a href="#" class="my_prefer">
          <img src="../img/mine/wodeyue.png" />
          <p class="font_family font_mine">我的余额</p>
        </a>
      </li>
      <li>
        <a href="#" class="my_prefer">
          <img src="../img/mine/wodexiaoxi.png" />
          <p class="font_family font_mine">我的消息</p>
        </a>
      </li>
      <li>
        <a href="#" class="my_prefer">
          <img src="../img/mine/heikafanxian.png" />
          <p class="font_family font_mine">黑卡返现</p>
        </a>
      </li>
    </ul>
    <!-- 积分兑换导航 -->
    <div class="bg">
      <table></table>
      <p class="font_family font_title">积分</p>
      <ul class="nav score_nav mine_nav">
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/duihuanlipin.png" />
            <p class="font_family font_mine">兑换礼品</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/jifenchoujiang.png" />
            <p class="font_family font_mine">积分抽奖</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/yahuati.png" />
            <p class="font_family font_mine">押话题</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/jifenguize.png" />
            <p class="font_family font_mine">积分规则</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 推荐餐厅 -->
    <div class="bg">
      <!-- 推荐餐厅文本 -->
      <div class="Recommend_title">
        <i>
          <img class="nav_img" src="../img/mine/tuijian.png" />
        </i>
        <p class="font_family">推荐餐厅</p>
      </div>
      <!-- 推荐餐厅列表 -->
      <ul class="mine_nav">
        <li>
          <a href="#" class="Recommend_img">
            <img src="../img/mine/1.jpg" />
            <p class="font_family font_mine">江粤轩</p>
          </a>
          <input type="button" value="去预定" />
        </li>
        <li>
          <a href="#" class="Recommend_img">
            <img src="../img//mine/2.jpg" />
            <p class="font_family font_mine">海悦荟</p>
          </a>
          <input type="button" value="去预定" />
        </li>
        <li>
          <a href="#" class="Recommend_img">
            <img src="../img//mine/3.jpg" />
            <p class="font_family font_mine">日本料理</p>
          </a>
          <input type="button" value="去预定" />
        </li>
        <li>
          <a href="#" class="Recommend_img">
            <img src="../img//mine/4.jpg" />
            <p class="font_family font_mine">全民牛排</p>
          </a>
          <input type="button" value="去预定" />
        </li>
      </ul>
    </div>
    <!-- 其他 导航栏 -->
    <div class="bg">
      <table></table>
      <p class="font_family font_title">其他</p>
      <ul class="nav_other buttom_nav mine_nav">
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodeshoucang.png" />
            <p class="font_family font_mine">我的收藏</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/liulanlishi.png" />
            <p class="font_family font_mine">浏览历史</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodetuijian.png" />
            <p class="font_family font_mine">我的推荐</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodedianping.png" />
            <p class="font_family font_mine">我的点评</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodexiangce.png" />
            <p class="font_family font_mine">我的相册</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodetianjia.png" />
            <p class="font_family font_mine">添加餐厅</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 其他 导航栏 -->
    <div class="bg">
      <table></table>
      <p class="font_family font_title">其他</p>
      <ul class="nav_other buttom_nav mine_nav">
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodeshoucang.png" />
            <p class="font_family font_mine">我的收藏</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/liulanlishi.png" />
            <p class="font_family font_mine">浏览历史</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodetuijian.png" />
            <p class="font_family font_mine">我的推荐</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodedianping.png" />
            <p class="font_family font_mine">我的点评</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodexiangce.png" />
            <p class="font_family font_mine">我的相册</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="nav_img" src="../img/mine/wodetianjia.png" />
            <p class="font_family font_mine">添加餐厅</p>
          </a>
        </li>
      </ul>
    </div>
    <buttombar></buttombar>
  </div>
</template>

<script>
import Buttombar from "../views/Buttombar"
export default {
  data() {
    return {
      res: {
        uid: localStorage.getItem("uid"),
        uname: localStorage.getItem("uname")
      }
    }
  },
    methods:{
      look(){
            // 发送ajax
            this.axios.get("http://127.0.0.1:5050/islogin").then(res=>{
                if(res.data.code==301){
                    this.$messagebox("请您先登录，再购买商品").then(result=>{
                        this.$router.push("/login")
                        })
                }else{
                    // 获取当前页面上的id,和用户信息
                    // id保存在全局中，通过路由传送过去
                    // 跳转到立即预定页面
                    this.$router.push("/allorder")
                }
            })
    
      },
        jumporderlist(){
          this.$router.push('/allorder')
        },
        go(){
            this.$router.push('/login');
        },
        quit() {
          this.$messagebox.confirm("请确定是否要退出").then(action=>{
            // this.$store.commit("changeUser", { uid: "", uname: "" });
            localStorage.clear();
            // this.$router.push("/mine")
            window.location.reload();
          }).catch(err=>{
            
          })
          
        }
    },
    components:{
        "buttombar":Buttombar
    }
}
</script>

<style scoped>
@import url("../assets/css/mine.css");
.a_style {
  font-size: 16px;
  color: #fff;
}
.button_style {
  margin-left: 50px;
  color: #fff;
  text-decoration: none;
  border-radius: 5%;
  background: rgb(114, 112, 112);
  opacity: 0.8;
}
</style>
