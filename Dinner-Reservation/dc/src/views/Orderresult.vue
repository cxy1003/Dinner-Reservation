<template>
    <div id="allorders">
      <!-- 顶部导航栏 -->
      <div class="nav-top mb">
          <!-- 三角 -->
          <img src="../../public/img/index/jian.png" @click="re_back">
          <span class="font_style_color">下单结果</span>
          <span @click="jumporder" class="font_style_color watchs font_family font_style_color font_span ">查看详情</span>
      </div>
    
      <div class="all-title">
        <img src="../../public/img/allorder/success.png" alt="">
        <p class="prep-s">下单成功</p>
      </div>
    </div>
</template>
<script>
export default {
    data(){
      return{

      }
    },
    methods:{
      re_back(){
        this.$router.go(-1)
      },
      jumporder(){
        this.$router.push("/allorder")
      }
    }
}
</script>
<style>
    @import url(../assets/css/orderresult.css);
</style>
