<template>
    <div class="bg">
        <!-- 导航部分  -->
        <div class="d_bar">
            <div class="d_img" @click="returnIindex">
                <img src="../../public/img/details/return.png" alt="">
            </div>
            <div class="d_size">餐厅详情</div>
            <div>
                <img class="d_img_two" src="../../public/img/details/share.png" alt="">
                <img :data-id="product.id" src="../../public/img/details/start.png" alt="" @click="startstyle" ref="imgs">
            </div>
        </div>
        <!-- 详情页 -->
        <div class="details font_family">
            <!-- 详情页图片部分 -->
            <div class="details_img">
                <img :src="`${img1}`" alt="">
            </div>
            <!-- 店家详情 -->
            <div class="d_title">
                <p class="d_title_store" v-text="product.d_name"></p>
                <div>
                    <div id="d1">
                        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template=""> </el-rate>
                        <span class="font_span">¥</span>
                        <span class="font_span" v-text="product.price"></span>
                    </div>
                    <div>
                        <span  class="font_span d-mp" v-text="product.subtitle"></span>
                    </div>
                </div>
                <p class="font_span mb mt" v-text="product.intr"></p>
            </div>
            <!-- 地址部分 -->
            <div class="adress">
                <img src="../../public/img/details/ad.png" @click="jumpmap">
                <span class="font_span mr" v-text="product.address" @click="jumpmap"></span>
                <img @click="call" src="../../public/img/details/phone.png" alt="">
            </div>
            <!-- 提示信息 -->
            <div class="d_info mb">
                <img src="../../public/img/details/info.png" alt="">
                <span class="font_span" v-text="product.information"></span>
            </div>
            <!-- 优惠活动 -->
            <div class="d_actity">
                <div class="t_b_padding">
                    <span class="font_price ">|</span><span class="font_span"> 优惠信息</span>
                </div>
                <div>
                    <img src="../../public/img/details/ji.png" alt="">
                    <span class="font_span l_r_padding" v-text="product.activity"></span>
                </div>
            </div>
            <!-- 推荐菜 -->
            <div class="tui bt mt">
                <div class="t_b_padding bb">
                    <span class="font_price ">|</span>
                    <span class="font_span">  推荐菜</span>
                </div>
                <div class="d_more_img">
                    <img src="../../public/img/details/11.jpg" alt="" class="mr_s">
                    <img src="../../public/img/details/22.jpg" alt="">
                    <img src="../../public/img/details/33.jpg" alt="" class="mr_s">
                    <img src="../../public/img/details/44.jpg" alt="">
                </div>
            </div>
            <!-- 餐厅基本信息 -->
            <div class="d_can">
                <div class="t_b_padding">
                    <span class="font_price ">|</span>
                    <span class="font_span">  餐厅基本信息</span>
                </div>
                <!-- 地图部分预留 -->
                <div class="d_map t_b_padding" @click="jumpmap">
                    <img src="../../public/img/details/map.jpg" alt="">
                </div>
                <div class="t_b_padding bb">
                    <span class="font_price font_span">详情介绍:</span>
                    <span class="l_r_padding font_span" v-text="product.d_intr"></span>
                </div>
                <div class="t_b_padding">
                    <span class="font_price font_span">电话：</span>
                    <span class="font_span" v-text="product.d_phone"></span>
                </div>
            </div>
            <!-- 拍照和点评的功能模块 -->
            <div class="d_other t_b_padding">
                <ul>
                    <li>
                        <img src="../../public/img/details/gga.png" alt=""  @click="actionSheet">
                        <p class="p_style">&nbsp;拍照</p>
                    </li>
                    <li>
                        <img src="../../public/img/details/ggb.png" @click="jumpstart">
                        <p class="p_style">&nbsp;点评</p>
                    </li>
                    <li>
                        <img src="../../public/img/details/ggc.png" alt="">
                        <p class="p_style">&nbsp;推荐</p>
                    </li>
                    <li>
                        <img src="../../public/img/details/ggd.png" alt="">
                        <p class="p_style">&nbsp;报错</p>
                    </li>
                </ul>
            </div>
            <!-- 推荐 -->
            <div class="d_recommed">
                <div class="bt bb t_b_padding">
                    <span class="font_price">|</span>
                    <span class="font_span"> 小伙伴们还喜欢</span>
                </div>
            </div>
        </div>
        <!-- 立即预定 -->
        <div class="d_ding">
            <button class="btn-proplot" size="large" @click="reserve">立即预定</button>
        </div>
        <mt-actionsheet
            :actions= "data"
            v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>
<script>
export default {
  data() {
    return {
      product: "",
      img1: "",
      value: 4,
      // 设置一个状态保存是否更换图片
      alive: "true",
      // action sheet 选项内容
      data: [
        {
          name: "拍照",
          method: this.getCamera // 调用methods中的函数
        },
        {
          name: "从相册中选择",
          method: this.getLibrary // 调用methods中的函数
        }
      ],

      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
    };
  },
  // 接受父组件传来的id
  props: ["id"],
  created() {
    if (this.id) {
      this.axios
        .get("http://127.0.0.1:5050/mydetails/details/", {
          params: { id: this.id }
        })
        .then(result => {
          this.img1 =
            "http://127.0.0.1:5050/img/details/" + result.data.product.img;
          var { product } = result.data;
          this.product = product;
        });
    }
  },
  mounted() {
    var imgst = this.$refs.imgs;
    imgst.onclick = function() {
      imgst.src = require("../assets/start2.png");
    };
  },
  methods: {
    jumpmap(){
      console.log(this.id,this.product.d_name)
      this.$router.push("/map/" + this.product.d_name)
    },
    jumpstart(){
        this.$router.push("/start")
    },
    // 点击电话，获取页面上的商家手机号
    call(){
        var phones=this.product.d_phone
        // console.log(phones)
        this.$messagebox(`确定与店家${phones}沟通`).then(result=>{
            this.$toast("请稍等...")
        })
    },
    // 点击按钮跳转事件
    returnIindex: function() {
      this.$router.push("/");
    },
    //   设置店家预定，判断是否登录，如果登录跳转至立即预定页面，否则跳转到登录页面
    reserve() {
      // 发送ajax
      this.axios.get("http://127.0.0.1:5050/islogin").then(res => {
        if (res.data.code == 301) {
          this.$messagebox("请您先登录，再购买商品").then(result => {
            this.$router.push("/login");
          });
        } else {
          // 获取当前页面上的id,和用户信息
          // id保存在全局中，通过路由传送过去
          // 跳转到立即预定页面
          var names = this.product.d_name;
          var id = this.id;
          this.$router.push("/userpreplot/" + id + "," + names);
        }
      });
    },
    // 点击星星实现取消和收藏的功能
    startstyle() {
      this.axios.get("http://127.0.0.1:5050/islogin").then(res => {
        if (res.data.code == 301) {
          this.$messagebox("请先登录,再购买商品").then(result => {
            this.$router.push("/login");
          });
        } else {
          this.$toast("添加成功");
          console.log(res);
        }
      });
    },
    // 拍照传照片的功能
    actionSheet: function() {
      // 打开action sheet
      this.sheetVisible = true;
    },
    getCamera: function() {
      console.log("打开照相机");
    },
    getLibrary: function() {
      console.log("打开相册");
    }
  }
};
</script>
<style scoped>
@import url(../assets/css/details.css);
.block {
  height: 20px;
}
.map {
  width: 100%;
  height: 100%;
}
</style>