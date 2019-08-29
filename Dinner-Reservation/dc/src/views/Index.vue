<template>
<div id="i-main">
        <!-- 背景轮播图及其上栏 -->
            <div id="i-container">              
                <div id="top-img">
                    <a @click="Search" class="font_family">西安 </a>
                    <!-- icon V 图标 -->
                    <img class="icon" src="../../public/img/index/icon1.png" alt="">
                    <!-- 文本框 -->
                    <!-- 搜索图片 -->
                    <img class="search" src="../../public/img/index/search.png" alt="">
                     <input type="text" placeholder="请输入商户名，地点或菜名" v-on:input="inputFunc" v-model='search' class="inputIcon">
                    <ul class="ulText">
                        <li v-show="serch_result_issue" v-for="(item,index) in items" :key="index">
                           <span @click="searchEat" class="name">
                              <img class="nameIcon" src="../../public/img/index/search.png" alt=""> {{item.name}}
                               </span>
                        </li>
                    </ul>         
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
                <li class="perplot-list" @click="dcPreplot">
                        &nbsp;&nbsp;&nbsp;&nbsp;<img class="perplot-img"  src="../../public/img/index/preplot1.png" alt="">
                        <p class="font">餐厅预订</p>
                    </li>
                    <li class="perplot-list"  @click="kefu">
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
                    <div  class="a" v-for="(item,i) of arr" :key="i">
                        <router-link :to="`/details/${++i}`">
                            <img :src="`http://127.0.0.1:5050/img/index/${item.img}`"  alt="" >
                        </router-link>
                        <p class="font_family" v-text="item.store"></p>
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
            search:'',
            list:[
                {name:"粤珍轩 土门商厦店"},
                {name:"德发长 钟鼓楼店宴会厅"},     
                {name:"乾杯烧肉店"},
                {name:"鸣记烤肉 国金店"},
                {name:"阿瓦山寨"},
                {name:"男友的店"},
                {name:"外婆印象"},
                {name:"君乐城堡酒店雅庭西餐厅"}
            ],
            serch_result_issue:false,
            arr:[],
            // p1:"",
            lid:"",
            store:"",
        }
    },
    computed:{
        // 计算属性，当输入内容的时候，下面的方法就会根据输入框的内容来顾虑，search_result数组中的数据
        //过滤方法
        items: function() {
            var _search = this.search;
            if (_search) {
                //不区分大小写处理
                var reg = new RegExp(_search, 'ig')
                //es6 filter过滤匹配，有则返回当前，无则返回所有
                return this.list.filter(function(e) {
                    //匹配所有字段
                    return Object.keys(e).some(function(key) {
                        return e[key].match(reg);
                    })
                    //匹配某个字段
                    //  return e.name.match(reg);
                })
            };
            return this.list;
        }
    },
    methods:{
        // 点击查找想对应的店名
        searchEat(){
           for(var i=0;i<this.arr.length;i++){
               this.store=this.arr[i].store
                //console.log(this.store)
                // 下面提示的文字赋值给文本框

             //获取后台的店名，判断文本框的文字是否含有后台的店名，调到相对应的页面
             if(this.search=="粤珍轩"){
                 this.$router.push("/details/"+`${++i}`)
                  return;
             }else if(this.search=="德"){
                  this.$router.push("/details/"+`${i+=2}`)
                  return;
             }else if(this.search=="乾"){
                 this.$router.push("details/"+`${i+=3}`)
                 return;
             }else if(this.search=="鸣"){
                  this.$router.push("details/"+`${i+=4}`)
                  return;
             }else if(this.search=="阿"){
                  this.$router.push("details/"+`${i+=5}`)
                  return;
             }else if(this.search=="君乐"){
                  this.$roupter.push("details/"+`${i+=6}`)
                  return;
             }else if(this.search=="外"){
                  this.$router.push("details/"+`${i+=7}`)
                  return;
             }else if(this.search=="男"){
                  this.$router.push("details/"+`${i+=8}`)
                  return;
             }
           }
      

     
        },
        // 监听输入事件，当input中有内容时，下面的搜索列表显示出来
        inputFunc(){
            if(this.search.length>0){
                this.serch_result_issue=true;
            }else{
                this.serch_result_issue=false;
            }
        },
        dcPreplot(){
            this.$router.push("/details/"+1) 
        },
       
        Search(){
            this.$router.push("/search")
        },
        kefu(){
            this.$router.push("/main")
        }
    },
    components:{
        "carousel":Carousel,
        "buttombar":Buttombar
    },
    created() {
        this.axios.get("myindex/goods/").then(result=>{
             var arr=result.data;
             this.arr=arr;
             //console.log(arr)
        })
    },
};

</script>
<style scoped>
/* 引入基础样式 */
@import url("../assets/css/index.css");
.name{
    color:#fff;
    position: absolute;
    left:80px;
    
    padding:0;
    border-radius: 5px;
}
.nameIcon{
    width:18px;
    color:#ccc;
     height:15px;
     position: relative;
     top:3px;
}
</style>