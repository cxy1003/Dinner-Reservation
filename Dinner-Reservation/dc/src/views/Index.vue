<template>
<div id="i-main">
        <!-- 背景轮播图及其上栏 -->
            <div id="i-container">
                <div id="top-img">
                    <a class="font_family"  href="javascript:;">上海 </a>
                    <!-- icon V 图标 -->
                    <img class="icon" src="../../public/img/index/icon1.png" alt="">         
                    <!-- 文本框 -->
                        <!-- 搜索图片 -->
                    <img class="search" src="../../public/img/index/search.png" alt="">
                    <input type="text" class="inputIcon" placeholder="请输入商户名，地点或菜名">           
                </div>
                <!-- 附近############ -->
                <div class="near">
                    <img src="../../public/img/index/near.png" alt="">
                    <p>附近</p>
                </div>          
            </div>
        <!--餐厅预订 -->
            <ul class="perplot">
                <li class="perplot-list">
                        &nbsp;&nbsp;&nbsp;&nbsp;<img class="perplot-img"  src="../../public/img/index/preplot1.png" alt="">
                        <p class="font">餐厅预订</p>
                    </li>
                    <li class="perplot-list">
                        &nbsp;<img  class="perplot-img" src="../../public/img/index/preplot2.png" alt="">
                        <p class="font">电话预定</p>
                    </li>
                    <li class="perplot-list">
                        &nbsp;<img  class="perplot-img" src="../../public/img/index/preplot.png" alt="">
                        <p class="font">小秘预订</p>
                </li>
            </ul>
        <!--推荐餐厅 123 -->
            <div class="recommend">
                <!-- 前面 -->
                <div class="row">
                    <p class="rows">|</p>
                    <p class="font_family">推荐餐厅</p>
                </div> 
                <!--餐厅介绍 -->
                <div class="info" >
                    <div class="a" v-for="(item,i) of arr" :key="i">
                        <img :src="`img/index/${item.img}`" alt="">
                        <p class="font_family" v-text="item.store"></p>
                        <span class="font_price">人均:￥</span>
                        <span class="font_price" v-text="item.price">60-100</span>
                    </div>
                </div>      
            </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[],
            // p1:"",
        }
    },
    created() {
        this.axios.get("http://127.0.0.1:5050/myindex/goods").then(result=>{
             var arr=result.data;
             this.arr=arr;
             console.log(arr)
        })
    },
};
</script>
<style scoped>
/* 引入基础样式 */
@import url("../assets/css/index.css");
</style>