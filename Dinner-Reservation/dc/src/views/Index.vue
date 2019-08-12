<template>
<div id="i-main">
    <!-- 背景轮播图及其上栏 -->
    <div id="i-container">
        <div id="top-img">
            <a class="font_family"  href="javascript:;">上海 </a>
            <!-- icon V 图标 -->
            <img class="icon" src="../img/indexs/icon1.png" alt="">         
            <!-- 文本框 -->
                <!-- 搜索图片 -->
            <img class="search" src="../img/indexs/search.png" alt="">
            <input type="text" class="inputIcon" placeholder="请输入商户名，地点或菜名">           
        </div>
        <!-- 附近############ -->
        <div class="near">
            <img src="../img/indexs/near.png" alt="">
            <p>附近</p>
        </div>          
    </div>
    <!--餐厅预订 -->
    <div class="perplot">
            <img src="../img/indexs/preplot.png" alt="">
            <p class="font">餐厅预订</p>
    </div>
     <!--推荐餐厅  -->
    <div class="recommend">
        <!-- 前面 -->
        <div class="row">
            <p class="rows">|</p>
            <p class="font_family">推荐餐厅</p>
        </div> 
        <!--餐厅介绍  -->
        <div class="info">
            <div class=a>
                <img src="../img/indexs/g1.jpg" alt="">
                <p class="font_family">粤珍轩 土门商厦店</p>
                <div class="font_price">人均:￥60-100</div>
            </div>
            <div class=a>
                <img src="../img/indexs/g1.jpg" alt="">
                <p class="font_family">粤珍轩 土门商厦店</p>
                <div class="font_price">人均:￥60-100</div>
            </div>
            <div class=a>
                <img src="../img/indexs/g1.jpg" alt="">
                <p class="font_family">粤珍轩 土门商厦店</p>
                <div class="font_price">人均:￥60-100</div>
            </div>
            <div class=a>
                <img src="../img/indexs/g1.jpg" alt="">
                <p class="font_family">粤珍轩 土门商厦店</p>
                <div class="font_price">人均:￥60-100</div>
            </div>
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
    @import url("../assets/css/comm.css");
    @import url("../assets/css/index.css");
</style>