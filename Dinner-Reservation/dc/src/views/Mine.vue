<template>
   <div>
      <div class="top">
          <table></table>
          <div class="install"></div>
          <div class="user"></div>
          <div class="login" @click="go">登录/注册</div>
      </div>
      <!-- 订单状态导航 -->
      <ul class="nav bg mine_nav">
         <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/jinxingzhong.png">
                <p class="font_family font_mine">进行中</p>
              </a>
         </li>
         <li>
              <a href="#">
                <img  class="nav_img" src="../img/mine/daizhifu.png">
                <p class="font_family font_mine">待支付</p>
              </a>
         </li>
        <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/daidianping.png">
                <p class="font_family font_mine">待点评</p>
              </a>
        </li>
        <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/quanbudingdan.png">
                <p class="font_family font_mine">全部订单</p>
              </a>
        </li>     
      </ul>
      <!-- 积分优惠导航 -->
      <ul class="nav_other bg mine_nav">
         <li>
              <a href="#" class="my_prefer">
                <img src="../img/mine/jifen.png">
                <p class="font_family font_mine">我的积分</p>
              </a>
         </li>
         <li>
              <a href="#" class="my_prefer">
                <img src="../img/mine/wodeyouhui.png">
                <p class="font_family font_mine">我的优惠</p>
              </a>
         </li>
        <li>
              <a href="#" class="my_prefer">
                <img src="../img/mine/wodeyue.png">
                <p class="font_family font_mine">我的余额</p>
              </a>
        </li>
        <li>
              <a href="#" class="my_prefer">
                <img src="../img/mine/wodexiaoxi.png">
                <p class="font_family font_mine">我的消息</p>
              </a>
        </li>   
        <li>
              <a href="#" class="my_prefer">
                <img src="../img/mine/heikafanxian.png">
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
                <img class="nav_img" src="../img/mine/duihuanlipin.png">
                <p class="font_family font_mine">兑换礼品</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/jifenchoujiang.png">
                <p class="font_family font_mine">积分抽奖</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/yahuati.png">
                <p class="font_family font_mine">押话题</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/jifenguize.png">
                <p class="font_family font_mine">积分规则</p>
              </a>
            </li>     
         </ul>
       </div>
       <!-- 推荐餐厅 -->
       <div class="bg">
         <!-- 推荐餐厅文本 -->
         <div class="Recommend_title">
            <i><img class="nav_img" src="../img/mine/tuijian.png"></i>
            <p class="font_family">推荐餐厅</p>
         </div>
         <!-- 推荐餐厅列表 -->
         <ul class="mine_nav">
         <li>
              <a href="#" class="Recommend_img">
                <img src="../img/mine/1.jpg">
                <p class="font_family font_mine">江粤轩</p>
              </a>
              <input type="button" value="去预定">
         </li>
         <li>
              <a href="#" class="Recommend_img">
                <img src="../img//mine/2.jpg">
                <p class="font_family font_mine">海悦荟</p>
              </a>
              <input type="button" value="去预定">
         </li>
        <li>
              <a href="#" class="Recommend_img">
                <img src="../img//mine/3.jpg">
                <p class="font_family font_mine">日本料理</p>
              </a>
              <input type="button" value="去预定">
        </li>
        <li>
              <a href="#" class="Recommend_img">
                <img src="../img//mine/4.jpg">
                <p class="font_family font_mine">全民牛排</p>
              </a>
              <input type="button" value="去预定">
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
                <img class="nav_img" src="../img/mine/wodeshoucang.png">
                <p class="font_family font_mine">我的收藏</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/liulanlishi.png">
                <p class="font_family font_mine">浏览历史</p>
              </a>
           </li>
           <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/wodetuijian.png">
                <p class="font_family font_mine">我的推荐</p>
              </a>
           </li>
           <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/wodedianping.png">
                <p class="font_family font_mine">我的点评</p>
              </a>
           </li>   
           <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/wodexiangce.png">
                <p class="font_family font_mine">我的相册</p>
              </a>
           </li>
           <li>
              <a href="#">
                <img class="nav_img" src="../img/mine/wodetianjia.png">
                <p class="font_family font_mine">添加餐厅</p>
              </a>
           </li>      
       </ul>
     </div>
   </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        go(){
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
@import url("../assets/css/mine.css");
</style>
