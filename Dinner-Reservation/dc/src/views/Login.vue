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
      <ul class="nav_middle">
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
       <div class="my_bgcolor">
          <p class="font_family">积分</p>
          <ul class="nav">
            <li>
              <a href="#" class="order">
                <img src="../img/mine/duihuanlipin.png">
                <p class="font_family font_mine">兑换礼品</p>
              </a>
            </li>
            <li>
              <a href="#" class="order">
                <img src="../img/mine/jifenchoujiang.png">
                <p class="font_family font_mine">积分抽奖</p>
              </a>
            </li>
            <li>
              <a href="#" class="order">
                <img src="../img/mine/yahuati.png">
                <p class="font_family font_mine">押话题</p>
              </a>
            </li>
            <li>
              <a href="#" class="order">
                <img src="../img/mine/jifenguize.png">
                <p class="font_family font_mine">积分规则</p>
              </a>
            </li>     
         </ul>
       </div>
       <!-- 推荐餐厅 -->
       <div class="my_bgcolor">
         <!-- 推荐餐厅文本 -->
         <div>
            <img src="" alt="">
            <p class="font_family recom_title">推荐餐厅</p>
         </div>
         <!-- 推荐餐厅列表 -->
         <ul class="nav Recommend_nav">
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
       <div class="my_bgcolor">
          <p class="font_family">其他</p>
           <ul class="nav_middle">
         <li>
              <a href="#" class="order">
                <img src="../img/mine/wodeshoucang.png">
                <p class="font_family font_mine">我的收藏</p>
              </a>
         </li>
         <li>
              <a href="#" class="order">
                <img src="../img/mine/liulanlishi.png">
                <p class="font_family font_mine">浏览历史</p>
              </a>
         </li>
        <li>
              <a href="#" class="order">
                <img src="../img/mine/wodetuijian.png">
                <p class="font_family font_mine">我的推荐</p>
              </a>
        </li>
        <li>
              <a href="#" class="order">
                <img src="../img/mine/wodedianping.png">
                <p class="font_family font_mine">我的点评</p>
              </a>
        </li>   
        <li>
              <a href="#" class="order">
                <img src="../img/mine/wodexiangce.png">
                <p class="font_family font_mine">我的相册</p>
              </a>
        </li>
         <li>
              <a href="#" class="order">
                <img src="../img/mine/wodetianjia.png">
                <p class="font_family font_mine">添加餐厅</p>
              </a>
        </li>      
      </ul>
       </div>
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
 .my_bgcolor{
   background: #ddd;
 }
 .top{
     width: 100%;
     height:180px;
     background-image: url("../img/mine/mine.jpg");
     position: relative;
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
        position: absolute;
        font-size:15px;
        color: aliceblue;
        left:89px;
        top: 128px;
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
        width: 25px;
        height: 25px;
    }
    .nav{
        display: flex;
        justify-content: space-around;
        background: #ddd;
        margin: 0;
        padding:10px;
        margin-bottom: 5px;
    }
    /* 设置导航栏ul为弹性布局 */
    .nav_middle{
        display: flex;
        justify-content:flex-start;
        flex-wrap: wrap;
        background: #ddd;
        padding-top: 20px;
        margin-bottom: 7px;
    }
    /* 设置中间导航栏的每个li之间的间距 */
    .nav_middle li{
        margin-left:40px;
        margin-right:20px;
        margin-bottom: 20px;
    }
    /* 设置我的积分，我的优惠..导航栏图片尺寸 */
    .my_prefer img{
      width:40px;
      height:40px;
    }
    /* 推荐餐厅样式设置 */
    .Recommend_img img{
      width:80px;
      height:60px;
    }
    .Recommend_img+input{
        width: 70px;
        height: 26px;
        line-height: 29px!important;
        font-size: 12px;
        border-radius: 15px;
        padding: 0 35px 0 16px;
        border: 1px solid rgba(248, 16, 16, 0.986);
        background: 0 0;
        box-sizing: border-box;
        color: red;
    }
    .recom_title{
      text-align: center;
    }
    

</style>