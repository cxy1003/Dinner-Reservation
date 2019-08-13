<template>
  <div id="allorder">
      <!-- 顶部导航栏 -->
      <div class="nav-top bb">
          <!-- 三角 -->
          <img src="../img/indexs/jian.png" alt="">
          <span>订单列表</span>
      </div>
      <!-- 订单栏 -->
      <div  class="orders">
          <!-- 文字部分 -->
          <ul class="orders_list font_family">
            <li class="order_font">全部订单</li>
            <li class="order_font">进行中</li>
            <li class="order_font">待支付</li>
            <li class="order_font">待点评</li>
          </ul>
          <span class="spanImg">|
            <img src="../img/indexs/jian0.png" alt="">
          </span>
      </div>
      <!-- 添加商品 -->
      <div class="addgood"> 
        <div class="goods">
          <img src="../img/indexs/g8.jpg" alt="">
          <h4 class="font_family order_font">粤珍轩<br>&nbsp; &nbsp;&nbsp;土门商厦店</h4>         
        </div>
        <div class="add">
          <span class="price font_price">￥60-100</span>
          <span>-</span>
          <input class="Input" value="1">
          <span>+</span>
        </div>
      </div>    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
/* 引入基础样式 */
@import url("../assets/css/allorder.css");
</style>