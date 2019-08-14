<template>
  <div>
      <!--Home.vue 入口全局组件-->
      <!--3:切换面板列表-->
      <mt-tab-container  v-model="active">
         <mt-tab-container-item id="index">
           <index></index>
         </mt-tab-container-item>
          <mt-tab-container-item id="details">
           <!-- <details></details> -->
         </mt-tab-container-item>
          <mt-tab-container-item id="mine">
           <mine>   </mine>
         </mt-tab-container-item>
      </mt-tab-container>
      <!--底部导航栏  -->
    <!-- 第一个按钮 -->
    <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="index" @click.native="changeState(0)">
         <tablebar
          :selectedImage="require('./assets/succdingcan.png')"
          :normalImage="require('./assets/normaldingcan.png')"
          :focused="currentIndex[0].isSelect">
         </tablebar>
         订餐   
        </mt-tab-item>
        <mt-tab-item id="details" @click.native="changeState(1)">
         <tablebar 
         :selectedImage="require('./assets/succfaxian.png')"
         :normalImage="require('./assets/normalfaxian.png')"
         :focused="currentIndex[1].isSelect">
         </tablebar>
         发现
        </mt-tab-item>
        <mt-tab-item id="mine" @click.native="changeState(2)">
          <tablebar
          :selectedImage="require('./assets/succmine.png')"
          :normalImage="require('./assets/normalmine.png')"
          :focused="currentIndex[2].isSelect">
          </tablebar>
          我的
        </mt-tab-item>
    </mt-tabbar>
    <!-- </mt-tabbar> -->
    <!-- <details></details> -->
  </div>
</template>
<script>
import Index from "../src/views/Index"
import Fond from "../src/views/fond"
import Mine from "../src/views/Mine"
import Tablebar from "../src/views/Tablebar"
import Login from "../src/views/Login"
export default {
    data(){
     return {
       //面板中显示子组件id
      active:"index",
      //创建数组保存图片焦点状态
      currentIndex:[{isSelect:true},{isSelect:false},{isSelect:false}]
       }
    },    
  methods:{
    
    changeState(x){
      console.log(x);
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容var ui=x;
      this.id=x
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       var ui = x;
       if(ui==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
      }
    }
 },
  components:{
    "index":Index,
    "fond":Fond,
    "mine":Mine,
    "tablebar":Tablebar,
    "login":Login
  }
}
</script>
 
<style>

</style>