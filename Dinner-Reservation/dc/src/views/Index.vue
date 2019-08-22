<template>
<div id="i-main">
        <!-- 背景轮播图及其上栏 -->
            <div id="i-container">              
                <div id="top-img">
                    <a @click="Search" class="font_family"  href="javascript:;">上海 </a>
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
            <carousel style="z-index:0"></carousel>     
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
                    <li class="perplot-list"  @click="kefu">
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
                <div class="info">  
                    <div @click="detail"   class="a" v-for="(item,i) of arr" :key="i">
                        <p>
                            <img :src="`http://127.0.0.1:5050/img/index/${item.img}`" :data-id="`${item.id}`" :data-name="`${item.store}`" alt="" >
                        </p>
                        <p class="font_family" v-text="item.store" :data-id="`${item.id}`" :data-name="`${item.store}`"></p>
                        <span class="font_price">人均:￥</span>
                        <span class="font_price" v-text="item.price">60-100</span>
                    </div>
                </div>      
            </div>
          <!-- <div style="height:950px;"></div> -->
     <buttombar></buttombar>
 </div>
</template>
<script>
import Carousel from "../components/Carousel"
import Buttombar from "../views/Buttombar"
export default {
    data() {
        return {
            arr:[],
            // p1:"",
            lid:"",
            store:"",
        }
    },
    methods:{
        // jumpdetails(){
        //     this.$router.push("/details")
        // },
        detail(e){
            // 先获取自定义属性
            // console.log(e.target);
           var id=e.target.dataset.id
           var name=e.target.dataset.name
           console.log(id,name)
           this.$router.push("/details/"+id)
        },
        Search(){
            this.$router.push("/search")
        },
        kefu(){
            this.$router.push("/imClient")
        }
    },
    components:{
        "carousel":Carousel,
        "buttombar":Buttombar
    },
    created() {
        this.axios.get("http://127.0.0.1:5050/myindex/goods/").then(result=>{
             var arr=result.data;
             this.arr=arr;
             console.log(arr)
            localStorage.setItem("pid",result.data[0].id)
            localStorage.setItem("store",result.data[0].store)
          
        })
    },
};

</script>
<style scoped>
/* 引入基础样式 */
@import url("../assets/css/index.css");
</style>