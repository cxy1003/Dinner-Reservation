<template>
    <div class="bg">
        <!-- 导航部分  -->
        <div class="d_bar">
            <div class="d_img" @click="returnIindex()">
                <img src="../../public/img/details/return.png" alt="">
            </div>
            <div class="d_size">餐厅详情</div>
            <div>
                <img class="d_img_two" src="../../public/img/details/share.png" alt="">
                <img src="../../public/img/details/start.png" alt="" @click="startstyle()">
            </div>
        </div>
        <!-- 详情页 -->
        <div class="details font_family">
            <!-- 详情页图片部分 -->
            <div class="details_img">
                <img :src="`http://127.0.0.1:5050/img/details/${img}`" alt="">
            </div>
            <!-- 店家详情 -->
            <div class="d_title">
                <p class="d_title_store" v-text="d_name"></p>
                <div>
                    <div id="d1">
                        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template=""> </el-rate>
                        <span class="font_span">¥</span>
                        <span class="font_span" v-text="price"></span>
                    </div>
                    <div>
                        <span  class="font_span d-mp" v-text="subtitle"></span>
                    </div>
                </div>
                <p class="font_span mb mt" v-text="intr"></p>
            </div>
            <!-- 地址部分 -->
            <div class="adress">
                <img src="../../public/img/details/ad.png" alt="">
                <span class="font_span mr" v-text="address"></span>
                <img src="../../public/img/details/phone.png" alt="">
            </div>
            <!-- 提示信息 -->
            <div class="d_info mb">
                <img src="../../public/img/details/info.png" alt="">
                <span class="font_span" v-text="information"></span>
            </div>
            <!-- 优惠活动 -->
            <div class="d_actity">
                <div class="t_b_padding">
                    <span class="font_price ">|</span><span class="font_span"> 优惠信息</span>
                </div>
                <div>
                    <img src="../../public/img/details/ji.png" alt="">
                    <span class="font_span l_r_padding" v-text="activity"></span>
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
                <div class="d_map t_b_padding">地图
                    <img src="" alt="">
                </div>
                <div class="t_b_padding bb">
                    <span class="font_price font_span">详情介绍:</span>
                    <span class="l_r_padding font_span" v-text="d_intr"></span>
                </div>
                <div class="t_b_padding">
                    <span class="font_price font_span">电话：</span>
                    <span class="font_span" v-text="d_phone"></span>
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
                        <img src="../../public/img/details/ggb.png" alt="">
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
            <mt-button type="danger" size="large">立即预定</mt-button>
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
            id:1,
            value:4,
            activity:"",
           address:"",d_intr:"",d_name:"",d_phone:"",img:"",information:"",intr:"",price:"",subtitle:"",score:"",
            // 设置一个状态保存是否更换图片
            alive:"true",
            // action sheet 选项内容
            data: [{
            name: '拍照',
            method : this.getCamera	// 调用methods中的函数
            }, {
            name: '从相册中选择',
            method : this.getLibrary	// 调用methods中的函数
            }],
            // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
            sheetVisible: false
        }
    },
    // 接受父组件传来的lid
    created() {
        if(this.id){
            console.log(this.id)
        this.axios.get("http://127.0.0.1:5050/mydetails/details/",{params:{id:this.id}}).then(result=>{
           var {activity,address,d_intr,d_name,d_phone,img,information,intr,price,subtitle,score}=result.data;
           console.log(result.data)
        //    console.log(p1)
           this.activity=activity;
            this.address=address;
            this.d_intr=d_intr;
            this.d_name=d_name;
            this.d_phone=d_phone;
            this.img=img;
            this.information=information;
            this.intr=intr;
            this.price=price;
            this.subtitle=subtitle;
            this.score=intr;
           console.log(this.activity)
      
        })
    }
    },
    methods: {
        // 点击按钮跳转事件
        returnIindex:function(){
            this.$router.push('/')
        },
        // 点击星星实现取消和收藏的功能
        startstyle(){
            
        },
        // 拍照传照片的功能
        actionSheet: function(){
            // 打开action sheet
            this.sheetVisible = true;
        },
        getCamera: function(){
            console.log("打开照相机")
        },
        getLibrary: function(){
            console.log("打开相册")
        }
    }
}
</script>
<style>
   @import url(../assets/css/details.css); 
   .block{
       height:20px;
   }
</style>