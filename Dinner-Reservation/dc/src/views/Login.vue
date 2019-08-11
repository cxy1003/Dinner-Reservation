<template>
   <div>
      <div class="top">
          <table></table>
          <div class="install"></div>
          <div class="user"></div>
          <div class="login">登录/注册</div>
      </div>
      <!-- 订单状态导航 -->
      <ul class="nav">
         <li>
              <a href="#" class="order">
                <img src="../img/mine/jinxingzhong.png">
                <p class="font_family font_mine">进行中</p>
              </a>
         </li>
         <li>
              <a href="#" class="order">
                <img src="../img/mine/daizhifu.png">
                <p class="font_family font_mine">待支付</p>
              </a>
         </li>
        <li>
              <a href="#" class="order">
                <img src="../img/mine/daidianping.png">
                <p class="font_family font_mine">待点评</p>
              </a>
        </li>
        <li>
              <a href="#" class="order">
                <img src="../img/mine/quanbudingdan.png">
                <p class="font_family font_mine">全部订单</p>
              </a>
        </li>     
      </ul>
      <!-- 积分优惠导航 -->
      <ul class="nav nav_middle">
         <li>
              <a href="#" class="order">
                <img src="../img/mine/jinxingzhong.png">
                <p class="font_family font_mine">进行中</p>
              </a>
         </li>
         <li>
              <a href="#" class="order">
                <img src="../img/mine/daizhifu.png">
                <p class="font_family font_mine">待支付</p>
              </a>
         </li>
        <li>
              <a href="#" class="order">
                <img src="../img/mine/daidianping.png">
                <p class="font_family font_mine">待点评</p>
              </a>
        </li>
        <li>
              <a href="#" class="order">
                <img src="../img/mine/quanbudingdan.png">
                <p class="font_family font_mine">全部订单</p>
              </a>
        </li>   
        <li>
              <a href="#" class="order">
                <img src="../img/mine/quanbudingdan.png">
                <p class="font_family font_mine">全部订单</p>
              </a>
        </li>   
      </ul>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("../assets/css/comm.css");
/* @import url("../assets/css/user.css"); */
 /* 设置顶部背景样式 */
 .top{
     width: 100%;
     height:180px;
     background-image: url("../img/mine/mine.jpg");
 }
 /* 设置用户头像上传样式 */
 .user{
     width: 61px;
     height: 61px;
     border-radius: 50%;
     background-color: azure;
     background-image: url("../img/mine/header.png");
     background-size:100%; 
     margin-top:100px;
     margin-left: 15px;
     display: inline-block;
      }
    .login{
        /* display: inline-block */
        float: right;
        font-size:15px;
        color: aliceblue;
        margin-left:20px;
        margin-bottom: 20px;
    }
    .install{
        width:40px;
        height:40px;
        background-image: url("../img/mine/shezhi.png");
        background-size:100%; 
        float:right;
        margin-top:14px;
        margin-right: 15px;
    }
    .order img{
        width: 30px;
        height: 30px;
    }
    .nav{
        display: flex;
        justify-content: space-around;
        background: #ddd;
        margin: 0;
        padding:10px;
        margin-bottom: 20px;
    }
    .nav_middle{
        /* margin-right:50px; */
        flex-wrap: wrap;
    }
    .nav_middle li{
        margin-left:30px;
        margin-right:20px;
        margin-bottom: 10px;
    }
</style>