<template>
 <div class="service_img">
   <mt-header title="小秘客服">
           <mt-button   icon="back" slot="left">返回</mt-button>
   </mt-header>
   <div class="service_img">
   <!-- 人工客服 -->
    <div class="service_people">
        <img class="service_people" src="../img/mine/kefu.jpg" alt="">
        <!-- 客服文本框 -->
        <div class="chart_text">亲，有什么能为您服务的吗？</div>  
    </div>
   
   <!-- 底部发送框 -->
    <div class="message_send">  
      <input class="user_input" type="text">
      <button class="user_send">发送</button>
    </div>
   </div>
 </div>
</template>
<script>
export default {

}
</script>

<style scoped>
 .service_img{
     width: 100%;
     height:700px;
      background-image: url(../img/mine/beijing1.jpg); 
     background-size:100%; 

 }
 .user_input{
     width:60%;
     opacity: .3;
     border-radius: 5%;
     margin-right:5px;
    
 }
 .user_send{
     width:68px;
     height:40px;
     border-radius: 20%;
     background-color: rgba(255, 192, 203, 0.555);

 }
 .message_send{
  margin-top: 505px;
  margin-left:37px;
  position: fixed;
 }
 /* 客服头衔样式设置 */
 .service_people{
     margin-top:10px;
     margin-left: 5px;
     float: left;
 }
 .service_people img{
    width: 60px;
    height:60px;
    border-radius: 50%;
 }
 /* 聊天框 */
 .chart_text{
     width: 150px;
     padding: 10px;
   
     background: #fff;
     opacity: .7;
     border-radius: 5%;
     margin-left:75px;
     margin-top:14px;
 }
 
</style>
