<template>
  <div id="allorders">
    <!-- 顶部导航栏 -->
    <div class="nav-top">
      <!-- 三角 -->
      <img @click="returnMine" src="../../public/img/index/jian.png" alt />
      <span>订单列表</span>
    </div>
    <div style="maigin-top:60px; height:50px;" ></div>
    <!--商品详情 -->
    <div class="info-bg" v-for="(item,i) of order" :key="i">
      <div class="info">
        <div class="divimg">
          <img class="order-img" :src="`http://127.0.0.1:5050/img/index/${item.pimg}`" alt />
        </div>
        <div>
          <p class="order_font first-elem">
            店名：
            <span v-text="item.pname"></span>
          </p>
          <p class="order_font first-elem">
            时间：
            <span v-text="item.pdate"></span>
          </p>
          <p class="order_font">
            姓名：
            <span v-text="item.uname"></span>
          </p>
          <p class="order_font">
            人数：
            <span v-text="item.reserpeople"></span>
          </p>
          <p class="order_font">
            电话：
            <span v-text="item.phone"></span>
          </p>
          <p class="order_font">
            备注：
            <span v-text="item.comment"></span>
          </p>
        </div>
        <img class="del-img"  src="../img/mine/del.png"  @click="delorder" v-if="showView" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: [],
      pimg:"",
      showView: true // 用于点击当前页的router时，刷新当前页
    };
  },
  mounted() {
    this.axios.get("http://127.0.0.1:5050/select").then(res => {
      console.log(res);
      var { order } = res.data;
      this.order = order;
    });
  },
  methods: {
    returnMine() {
      this.$router.push("/mine");
    },
    delorder() {
      this.$messagebox
        .confirm("请确定是否要删除")
        .then(action => {
          this.axios
            .get("http://127.0.0.1:5050/delete", { params: { pid: this.order[0].pid    } })
            .then(res => {
              console.log(res);
              if (res.data.code == 200) {
                this.$toast("删除成功");
                // this.showView = false; // 通过v-if移除router-view节点
                //  this.$nextTick(() => {
                //    this.showView = true; // DOM更新后再通过v-if添加router-view节点
                //  });
                this.$router.go(0)
              } else {
                this.$toast("删除失败，请稍后再试");
              }
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
#allorders{
  background: #eee;
}
.nav-top{
  background: rgb(230, 198, 17)
}
/* 引入基础样式 */
#allorders {
  background: #eee;
  min-height: 668px;
}
.nav-top {
  background: rgb(230, 198, 17);
  z-index: 1; 
}
.nav-top img {
  position: relative;
  top: 10px !important;
  left: -138px !important;
}
.nav-top span {
  position: relative;
  top: 0;
  left: -12px;
}
.orders_list {
  display: flex;
  justify-content: space-around;
  padding: 10px 20px 10px 20px;
  background: pink;
  margin-top: 50px;
}
.order-img {
  width: 130px;
  height: 147px;
}
.del-img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 83%;
  left: 89%;
}
.info {
  display: flex;
  position: relative;
}
.info-bg {
  background: #fff;
  padding:10px 10px 0;
  width: 100%;
  margin-bottom:10px; 
}
.first-elem {
  margin-top: 10px;
}
.order_font {
  font-size: 13px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: rgba(46, 42, 42, 0.8);
  margin-bottom: 6px;
}
.divimg{
  margin-right: 10px;
}
</style>