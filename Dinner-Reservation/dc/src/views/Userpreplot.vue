<template>
    <div class="u_preplot bg l_r_padding">
        <!-- 餐厅预订订单页面 -->
        <div class="u_preplot_yu">
            <!-- 导航部分  -->
           <img src="../../public/img/details/return.png" alt="">
            
            <span class="font_family">餐厅详情</span>
        </div>
        <div class="mt u_info bb">
            <span>店名：</span><span>{{arr[1]}}</span>
            <div class="bb t_b_padding">
                <span class="font_family u_bg_margin">人数</span>
                <el-input placeholder="请输入"  v-model="reserpeople" clearable></el-input>
            </div>
            <div class="t_b_padding ">

                <span class="font_family">请选择就餐时间</span>
                <el-time-select v-model="pdate" :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }"
                        placeholder="选择时间">
                        </el-time-select>

                     
                <span class="font_family" ></span>
            </div>
        </div>
        <!-- 预订包房 -->
        <div class="u_switch bt bb t_b_padding">
            <span>我要预订包房</span>
            <!-- 开关 -->
            <el-switch  active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <!-- 用户信息 -->
        <div class="">
            <div class=" bt bb t_b_padding">
                <span>联系方式</span>
                <el-input v-model="phone" style="width:255px;" placeholder="请输入有效的手机号"></el-input>
            </div>
        </div>
        <!-- 需求安排 -->
        <div class="u_anpai bb">
            <el-input placeholder="请输入内容" v-model="comment" clearable></el-input>
        </div>
        <div class="u_switch bt bb t_b_padding">
            <span>替他人订餐</span>
            <!-- 开关 -->
           <el-switch  active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>

        <div class="u_end  bb">
            <mt-button @click="submit" type="danger" size="small" align="center">确定提交</mt-button>
        </div>
    </div>
    
</template>
<script>
import VueEvent from "../model/VueEvent.js"
import qs from "qs"
export default {
  data() {
    return {
      // 获取页面上的内容，最后将内容传递给数据库
        reserpeople:"",//人数
        pdate:"",//日期
        ispreplot:false,//是否预定包房
        phone:"",//有效的手机号
        text:"",//评论区
        // isselef:false,//是否替他人订餐
        arr:"",
       comment:""
    };
  },
  watch:{
  },
   mounted(){
    this.arr=(this.$route.params.arr).split(',');
     
   },
  methods: {
      
    //点击按钮获取按钮上的内容
    submit() {
        //否则发送ajax将数据保存到数据库中/发送到订单表中preplot
        var url = "http://127.0.0.1:5050/preplot";
        //获取参数
        var obj = {
          reserpeople: this.reserpeople,
          pdate: this.pdate,
          // isselect: isselect,
          // uname: uname,
          phone: this.phone,
          // value: value,
          // str: str,
          ispreplot: this.ispreplot,
          comment:this.comment
        };
        console.log(obj)
        this.axios.post(url, qs.stringify(obj)).then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$toast("提交成功");
            //跳转到全部订单页
            this.$router.push("/allorder");
          }
        });
      }
    }
  
};
</script>
<style>
@import url("../assets/css/userpreplot.css");
.t_b_padding{
    display: flex;
    justify-content: space-between;
    line-height:40px;
}
.el-input--small .el-input__icon {
    position: absolute;
    top:-31px;
    left:150px;
}

</style>
