<template>
    <div class="u_preplot bg l_r_padding">
        <!-- 餐厅预订订单页面 -->
        <div class="u_preplot_yu">
            <!-- 导航部分  -->
           <img src="../../public/img/details/return.png" alt="">
            
            <span class="font_family">餐厅详情</span>
        </div>
        <div class="mt u_info bb">
            <div class="bb t_b_padding">
                <span class="font_family u_bg_margin">人数</span>
                  <el-input v-model="people" style="width:50px;">人</el-input>
            </div>
            <div class="t_b_padding ">
                <span class="font_family">请选择就餐时间</span>
                <el-time-select v-model="value" :picker-options="{
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
            <el-switch v-model="isAgree" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
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
            <el-input placeholder="请输入内容" v-model="text" clearable></el-input>
        </div>
        <div class="u_switch bt bb t_b_padding">
            <span>替他人订餐</span>
            <!-- 开关 -->
           <el-switch v-model="isselef" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>

        <div class="u_end  bb">
            <mt-button @click="submit" type="danger" size="small" align="center">确定提交</mt-button>
        </div>
    </div>
    
</template>
<script>
import VueEvent from "../model/VueEvent.js"
export default {
  data() {
    return {
      // 获取页面上的内容，最后将内容传递给数据库
        people:"1",//人数
        value:"",//日期
        isAgree:false,//是否预定包房
        phone:"",//有效的手机号
        text:"",//评论区
        isselef:false,//是否替他人订餐
        msg:"",
       
    };
  },
//   pid:["lid"],
  watch:{
    //   监视人数，判断人数是否数字
//     people(){  
//         var reg=/^\d{2}$/
//         if(reg.test(this.people)==false){
//             this.$toast("请输入有效数字");
//             return;
//         }else{
//            console.log(this.people)
//         }
//     },
//     //   监视手机号
//      phone(){
//           var reg=/^1[3-9]\d{9}$/
//           if(reg.test(this.phone)==false){
//                this.$toast("请您输入有效的手机号");
//                 return; 
//           }else{
//              console.log(this.phone)
//           }
//       }
   },
   mounted(){
    //    console.log(VueEvent.$on('to-news')  )
    
      VueEvent.$on('to-news',function(data){
          console.log(data);
        //   console.log(data.names)
      })
     
   },
  methods: {
      
    //点击按钮获取按钮上的内容
    submit() {
      // 验证手机号是否有效
      var phreg = /^1[3-7][0-9]{9}$/;
      if (!phreg.test(phone)) {
        this.$toast("请您输入有效的手机号");
        reurn;
      } else if (pitch == true) {
        // 如果pitch的状态为true，则value=1
        value = 1;
        return;
      } else if (pitch == false) {
        value = 0;
      } else {
        //否则发送ajax将数据保存到数据库中/发送到订单表中preplot
        var url = "http://127.0.0.1:5050/mydetails/preplot/";
        //获取参数
        var obj = {
          num: num,
          time: time,
          isselect: isselect,
          uname: uname,
          phone: phone,
          value: value,
          str: str,
          isselef: isselef
        };
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
