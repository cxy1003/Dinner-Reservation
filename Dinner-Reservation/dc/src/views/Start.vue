<template>
<div>
<mt-header title="店名">
<mt-button @click="back" icon="back" slot="left" title="发表">&nbsp;&nbsp;&nbsp;&nbsp;</mt-button>
</mt-header>
<div class="block">
<!-- 总体 -->
<div class="startAll">
<span>总体</span>
<el-rate v-model="all" show-text></el-rate>
</div>
<div class="startAll">
<span>口味</span>
<el-rate v-model="score"></el-rate>
</div>
<div class="startAll">
<span>环境</span>
<el-rate v-model="atmosphere"></el-rate>
</div>
<div class="startAll">
<span>服务</span>
<el-rate v-model="serve"></el-rate>
</div>
<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
</el-input>
</div>
<div class="d_ding">
<button class="btn-proplot" @click="like">提交评论</button>
</div>
</div>
</template>

<script>
export default {
data(){
return{
all:null,
serve:null,
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
this.$router.push("/prepsuccess")
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
