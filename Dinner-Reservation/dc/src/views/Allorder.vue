<template>
  <div id="allorders">
      <!-- 顶部导航栏 -->
      <div class="nav-top">
          <!-- 三角 -->
          <img src="../../public/img/index/jian.png" alt="">
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
            <img src="../../public/img/index/jian0.png" alt="">
          </span>
      </div>
      <!--商品详情 -->
      <div class="mb bb">
        <mt-cell class="detail" title="御珍轩 土门商厦店" label="预定中">
            <img  slot="icon" src="../../public/img/allorder/preop.png" alt="">
            <img src="../../public/img/allorder/trash.png" alt="">            
        </mt-cell>
        <span class="title font_family">8-13 周二 13:30|5人 大厅</span>
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