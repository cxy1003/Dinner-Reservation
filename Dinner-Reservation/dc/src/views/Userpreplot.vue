<template>
  <div class="u_preplot" >
        <!-- 餐厅预订订单页面 -->
        <mt-header title="订餐详情">
            <mt-button icon="back" slot="left"></mt-button>
        </mt-header>
        <div style="max-height:100px">
        <div >
            <div style="padding:8px 0;">
                <span>店名：</span><span>{{arr[1]}}</span>
            </div>
            <div class=" bt bb t_b_padding">
                <span>就餐人数：</span>
                <el-input type="small" v-model="reserpeople" style="width:255px;" placeholder="请填入您的就餐人数"></el-input>
            </div>
            <div class="t_b_padding ">

                <span>就餐时间：</span>
                <el-time-select style="width:70%" v-model="pdate" :picker-options="{ start: '08:30',
                   tep: '00:30',
                    end: '18:30'
                }"
                placeholder="请选择就餐时间">
                        </el-time-select>
                <span class="font_family" ></span>
            </div>
        </div>
        <!-- 用户信息 -->
        <div class="">
            <div class=" bt bb t_b_padding">
                <span>用户姓名：</span>
                <el-input type="small" v-model="uname" style="width:255px;" placeholder="请输入名字"></el-input>
            </div>
            <div class=" bt bb t_b_padding">
                <span>联系方式：</span>
                <el-input type="small" v-model="phone" style="width:255px;" placeholder="请输入有效的手机号"></el-input>
            </div>
        </div>
        <!-- 需求安排 -->
       个人备注：
        <div class="u_anpai bb" style="margin-top:10px;">
            <el-input  type="textarea" style="height:100px;" placeholder="请输入内容" v-model="comment" clearable></el-input>
            
            <mt-button class="submit" type="danger" size="large">确定提交</mt-button>
       
        </div>
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
        reserpeople:"2",//人数
        pdate:"",//日期
        ispreplot:false,//是否预定包房
        phone:"",//有效的手机号
        text:"",//评论区
        // isselef:false,//是否替他人订餐
        arr:"",
       comment:"",
       uname:""
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
        //手机格式验证
         var preg=/^1[3-7][0-9]{9}$/
        //  获取当前的手机号
        var phone=this.phone
        // 判断
        if(!preg.test(phone)){  
            this.$toast("请输入有效手机号");
            return;
        }else{

        
        //否则发送ajax将数据保存到数据库中/发送到订单表中preplot
        var url = "http://127.0.0.1:5050/preplot";
        //获取参数
        var obj = {
          reserpeople: this.reserpeople,
          pdate: this.pdate,
          uname: this.uname,
          phone: this.phone,
          pname:this.arr[1],
          ispreplot: this.ispreplot,
          comment:this.comment
        };
        console.log(obj)
        this.axios.post(url, qs.stringify(obj)).then(res => {
          console.log(res);
            var pid=this.arr[0]
          if (res.data.code == 200) {
            this.$toast("提交成功");
            //跳转到全部订单页
            this.$router.push("/allorder/?pid="+pid);
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
