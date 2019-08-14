<template>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
      <div class="slideshow">
        <transition-group tag="ul" name="image">
          <li v-for="(img,index) in imgArray" :key="index">
            <a href="#">
              <img :src="img" alt="">
            </a>
          </li>
        </transition-group>
      </div>
      <div class="bullet">
        <span v-for="(item,index) in imgArray" @click="change(index)" :key="index" :class="{'active':index===mark}"></span>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      mark:0,//比对图片索引的变量
      timer:null,//定时器
      imgArray:[
      "../img/carousel/c1.png",
      "../img/carousel/c2.png",
      "../img/carousel/c3.png",
      "../img/carousel/c4.png",
      "../img/carousel/c5.png",
      "../img/carousel/c6.png"
      ]
    }
  },
  methods:{
    autoPlay(){
      this.mark++;
      // 当遍历到最后一张图片偏置零
      if(this.mark==0){
        this.mark=0;
      }
    },
    play(){
      setInterval(this.autoPlay,2500)
    },
    change(i){
      this.mark=i
    }
  },
  created(){
    this.play();
  }
}
</script>
<style scoped>
    .slide{
      width:100%;
      height:320px;
      margin: 0 auto;
      margin-top:50px;
      overflow: hidden;
      position:relative;
    }
    .slideshow,img{
      width:100%;
      height:320px;
    }
    li{
      position: absolute;
    }
    /* img{
      width:100%;
      height:320px;
    } */
    .bar{
      position: absolute;
      width:100%;
      bottom:10px;
      margin:0 auto;
      z-index:10;
      text-align:center;
    }
    .bar span{
      width:5px;height:5px;
      border:1px solid;
      background:white;
      display:inline-block;
      margin-right:10px;
    }
    .active{
      background:red;
    }
    /* 动画效果 */
    .image-enter-active{
      transform:tranlateX(0);
      transition:all.5s ease;
    }
    .image-leave-active{
      transform:tranlateX(-100%);
      transition:all.5s ease;
    }
    .image-enter{
      transform:tranlateX(100%);
    }
    .image-leave{
      transform:tranlateX(0);
    }
</style>