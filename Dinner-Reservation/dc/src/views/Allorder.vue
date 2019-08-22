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
      <div class="mb bb"  v-for="(item,i) of list" :key="i">
        <mt-cell class="detail" title="御珍轩 土门商厦店" label="预定中">
            <img  slot="icon" src="../../public/img/allorder/preop.png" alt="">
            <img src="../../public/img/allorder/trash.png" alt="">            
        </mt-cell>
        <span class="title font_family">
          <span v-text="item.uname"></span>
          <span v-text="item.phone"></span>
            <!-- 预定时间 -->
          <span v-text="item.preplottime"></span>
          <!-- 订单人数 -->
          <span v-text="item.reserpeople"></span>

            <!-- 客户备注 -->
          <span>{{item.comment}}</span>
           大厅</span>
      </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        loadMore(){
            this.axios.get("http://127.0.0.1:5050/mydetails/preplotlist").then(res=>{
               console.log(123);
               console.log(res)
            //    if(res.data.code==-1){
            //        this.$messagebox("未登录");
            //        this.$router.push("/login");
            //        return;
            //    }else{
                //    获取订单数据

                var list = res.data.data;
                  this.list = list;
                console.log(list);
            //    }
            })
        },
    
    },
    created(){
        this.loadMore();
    }

}
</script>
<style scoped>
/* 引入基础样式 */
@import url("../assets/css/allorder.css");
</style>