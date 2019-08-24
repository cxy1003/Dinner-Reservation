<template>
    <div>
        <mt-header title="店家详情">
            <mt-button @click="back" icon="back" slot="left" title="发表">返回</mt-button>
        </mt-header>
        <div class="block">
            <!-- 总体 -->
            <div class="startAll">
                <span>总体</span>
                <el-rate v-model="alls" show-text></el-rate>
            </div>
            <div class="startAll">
                <span>口味</span>
                <el-rate v-model="score" show-text></el-rate>
            </div>
            <div class="startAll">
                <span>环境</span>
                <el-rate v-model="atmosphere" show-text></el-rate>
            </div>
            <div class="startAll">
                <span>服务</span>
                <el-rate v-model="serves" show-text></el-rate>
            </div>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
            </el-input>
        </div>
        <div class="d_ding">
            <button class="btn-proplot"  @click="like">提交评论</button>
        </div>
</div>
</template>

<script>
import qs from "qs"
export default {
  data(){
      return{
        names:"",
        alls:null,
        serves:null,
        score:null,
        textarea:"",
        atmosphere:null,
      } 
  },
  methods: {
      back(){
          this.$router.push("/")
      },
      like(){
        //   获取页面上的数据
          var uid=this.uid
          var alls=this.alls
          var serves=this.serves
          var score=this.score
          var textarea=this.textarea
          var atmosphere=this.atmosphere
          var obj={alls:alls,serves:serves,score:score,textarea:textarea,atmosphere:atmosphere}
        //   发送请求,将数据插入数据库中
        this.axios.post("http://127.0.0.1:5050/start",qs.stringify(obj)).then(res=>{
            if(res.data.code==200){
                this.$messagebox("提交成功").then(res=>{
                //  跳转到上一页
                this.$router.go(-1)
                })
            }
        })
      }
  },  
}
</script>
<style scoped>
.el-rate {
    height: 20px;
    line-height: 2;
    size:50px;
    position: absolute;
    bottom:23px;
    left:40px;
}
.startAll{
    height:50px;
    position:relative;
    line-height:50px;
    margin-left:5px;
}
.d_ding .btn-proplot{
/* 按钮的位置 */
background-color:#ef4f4f;
width:100%;
height:40px;
position: fixed;
bottom:0;
padding: 0px;
margin: 0px;
color:#fff;
border-radius: 5px;
border:none;
}
</style>
