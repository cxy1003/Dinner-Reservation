<template>
  <div id="allorders">
      <!-- 顶部导航栏 -->
      <div class="nav-top">
          <!-- 三角 -->
          <img src="../../public/img/index/jian.png" alt="">
          <span>订单列表</span>
      </div>
      <!-- 订单栏 -->
      <div  class="orders">
          <!-- 文字部分 -->
          <ul class="orders_list font_family">
            <li class="order_font">全部订单</li>
            <li class="order_font">进行中</li>
            <li class="order_font">待支付</li>
            <li class="order_font">待点评</li>
          </ul>
          <span class="spanImg">|
            <img src="../../public/img/index/jian0.png" alt="">
          </span>
      </div>
      <!--商品详情 -->
      <div class="mb bb">
        <mt-cell class="detail" title="御珍轩 土门商厦店" label="预定中">
            <img  slot="icon" src="../../public/img/allorder/preop.png" alt="">
            <img src="../../public/img/allorder/trash.png" @click="delorder" v-if="showView">
        </mt-cell>
        <span class="title font_family">8-13 周二 13:30|5人 大厅</span>
      </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      pid:"4",
      showView: true // 用于点击当前页的router时，刷新当前页
    }
  },
  methods:{
    delorder(){
      console.log("删除")
      this.$messagebox.confirm("请确定是否要删除").then(action=>{
        this.axios.get("http://127.0.0.1:5050/delete",{params:{pid:this.pid}}).then(res=>{
          console.log(res)
          if(res.data.code==200){
            this.$toast("删除成功")
            this.showView = false // 通过v-if移除router-view节点
            this.$nextTick(() => {
              this.showView = true // DOM更新后再通过v-if添加router-view节点
            })
          }else{
            this.$toast("删除失败，请稍后再试")
          }
        })
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
/* 引入基础样式 */
@import url("../assets/css/allorder.css");
</style>