<template>
    <div id="allorders">
      <!-- 顶部导航栏 -->
      <div class="nav-top mb">
          <!-- 三角 -->
          <img src="../../public/img/index/jian.png" @click="prepback">
          <span class="font_style_color">点评</span>
          <span @click="prepback" class="font_style_color watchs font_family font_style_color font_span ">查看详情</span>
      </div>
    
      <div class="all-title">
        <img src="../../public/img/allorder/success.png" alt="">
        <p class="prep-s">已提交</p>
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
      prepback(){
        this.$router.push('/')
      }
    }
}
</script>
<style>
    @import url(../assets/css/orderresult.css);
</style>
