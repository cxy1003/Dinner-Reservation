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
      </div>
      <!--商品详情 -->
      <div class="info-bg">
          <!-- <img class="order-img" src="../img/mine/111.png" alt=""><span>111</span> -->
          <div class="info">
            <img class="order-img" src="../img/mine/111.png" alt="">
            <div>
               <p class="order_font first-elem">下单时间：</p>
               <p class="order_font">顾客姓名：</p>
               <p class="order_font">订单人数</p>
               <p class="order_font">备注：</p>
            </div>
          </div>
      </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      list:[],
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
#allorders{
  background: #eee;
}
.nav-top{
  background: rgba(230, 198, 17, 0.555)
}
/* 引入基础样式 */
/* @import url("../assets/css/allorder.css"); */
 .orders_list{
     display: flex;
     justify-content: space-around;
     padding: 10px 20px 10px 20px; 
     background: pink;
     z-index: 1;
     margin-top: 50px;
}
.order-img{
   width:60px;
   height:60px;
   margin-top:10px; 
   margin-left: 20px;
   margin-right: 20px;
}
.info{
  display: flex;
}
.info-bg{
  background: #fff;
  padding: 10px;
  margin-top:10px; 
  border-radius:5%;
  width: 90%; 
  margin-left:10px;
  opacity: 1;
}
.first-elem{
  margin-top:10px; 
}
.order_font{
  font-size:13px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color:rgba(46, 42, 42, 0.8);
  margin-bottom: 6px;
}

</style>