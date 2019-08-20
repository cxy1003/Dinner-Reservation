<template>
<!-- 底部导航栏组件 -->
  <div class="bottom-tab">
        <div class="tab-item" @click="switchTo('/Index')">
            <img :src="'/Index' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
            <span :class="{on: '/home' === $route.path}">首页</span>
        </div>
        <div class="tab-item" @click="switchTo('/fond')">
            <img :src="'/fond' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="发现">
            <span :class="{on: '/recommend' === $route.path}">发现</span>
        </div>
        <div class="tab-item" @click="switchTo('/imClient')">
            <img :src="'/imClient' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="客服">
            <span :class="{on: '/search' === $route.path}">客服</span>
        </div>
        <div class="tab-item" @click="switchTo('/mine')">
            <img :src="'/mine' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="我的">
            <span :class="{on: '/chat' === $route.path}">我的</span>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     tabBarImgArr:[   //图片切换
        {normal: require('../img/mine/normaldingcan.png'), selected: require('../img/mine/succdingcan.png')},
        {normal: require('../img/mine/normalfaxian.png'), selected: require('../img/mine/succfaxian.png')},
        {normal: require('../img/mine/normalxiaomi.png'), selected: require('../img/mine/succxiaomi.png')},
        {normal: require('../img/mine/normalmine.png'), selected: require('../img/mine/succmine.png')}
      ]
    }
  },
  methods:{
    switchTo(path){
      // console.log(this.$router)
      this.$router.replace(path)
    }
  }
 }
</script>


<style>

.bottom-tab{
    width:100%;
    height: 40px;
    background-color:#fff;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    z-index:999;
    padding: 10px 0;
}
.bottom-tab .tab-item{
      display:flex;
      flex: 1;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      font-size:13px;
      color:#666
}
.bottom-tab .tab-item img{
    width:35%;
    margin-bottom:2px;
}
.bottom-tab .tab-item .on{
    color:red
      }
</style>