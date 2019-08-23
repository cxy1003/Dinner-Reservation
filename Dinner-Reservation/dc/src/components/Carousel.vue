<template>
 <div class="carousel">
  <mt-swipe :auto="2000">
   <mt-swipe-item v-for="(p,i) of imgs" :key="i">
      <img :src="`http://127.0.0.1:5050/img/carousel/${p.img}`" class="img"/>
   </mt-swipe-item>
  <!-- <mt-swipe-item>
    <img src="../../public/img/carousel/c2.png" class="img"/>
   </mt-swipe-item>
    <mt-swipe-item>
      <img src="../../public/img/carousel/c3.png" class="img"/>
    </mt-swipe-item>
    <mt-swipe-item>
      <img src="../../public/img/carousel/c4.png" class="img"/>
    </mt-swipe-item> -->
  </mt-swipe>
 </div>
</template>
<script>
 import {Swipe, SwipeItem} from 'mint-ui'
 import 'mint-ui/lib/style.css'
 export default {
  data(){
    return{
      imgs:[],
    }
  },
  created() {
    this.axios.get("http://127.0.0.1:5050/myindex/carousel").then(result=>{
        // console.log(result)
        var imgs=result.data;
        this.imgs=imgs
    })
  },
   components: {
    'mt-swipe': Swipe,
    'mt-swipe-item': SwipeItem
   },
 }
</script>
<style scoped>
.carousel{
  width:100%;
  height:200px;
  position: absolute;
  top:0;
  z-index: 0;
}
.img{width:100%;}
.mint-swipe{height:200px;}
</style>