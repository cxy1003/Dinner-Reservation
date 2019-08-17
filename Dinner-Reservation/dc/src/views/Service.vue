<template>
 <div class="service_img">
     <!-- 头部导航 -->
   <mt-header title="小秘客服">
           <mt-button   icon="back" slot="left">返回</mt-button>
   </mt-header>
   <!-- <div class="service_img"> -->
   <!-- 人工客服 -->
    <!-- <div class="service_people">
        <img class="service_people" src="../img/mine/kefu.jpg" alt="">
        客服文本框
        <div class="chart_text">亲，有什么能为您服务的吗？</div>  
    </div> -->
    客服聊天
    <div class="msg" ref="box">
        <div v-for="item of list" :key="item">
        <p>
          {{item.content}}
        </p>
        </div>
    </div>
   <!-- 底部发送框 -->
    <div class="message_send">  
      <input class="user_input" type="text" v-model="contentText">
      <button class="user_send" @click="sendText">发送</button>
    </div>
 </div>
</template>
<script>
export default {
    data(){
        return{
            list:[], //聊天记录数组
            contentText:"",//input输入值
        }
    },
    methods:{
        // 发送聊天信息
        sendText(){
            let that = this;
            this.list = [...this.list,
                       {type:"mine",content:this.contentText}];//通过type字段进行区分是自己还是系统返回的
            this.backText (function(){
              that.contentText = ""; ;//加回调函数得到返数据的时候清除输出框的内容
             });
        },
        backText(callback){
             let that = this;
        if (window.WebSocket) {
          let ws = new WebSocket("ws://192.168.11.169:8001");
          ws.onopen = function (e) {
            console.log("链接服务器成功");
            console.log("that.contentText is", that.contentText);
            ws.send(that.contentText);
            callback();
          };
          ws.onclose = function (e) {
            console.log("服务器关闭")
          };
          ws.onerror = function () {
            console.log("服务器出错")
          };
          ws.onmessage = function (e) {
            that.list = [...that.list, {type: "robot", content: e.data}]
          }
        }
      }
    },
    watch: {
      //监听list,当有修改的时候进行div的屏幕滚动，确保能看到最新的聊天
      list: function () {
        let that = this;
        setTimeout(() => {
          that.$refs.box.scrollTop = that.$refs.box.scrollHeight;
        }, 0);
        //加setTimeout的原因：由于vue采用虚拟dom，我每次生成新的消息时获取到的div的scrollHeight的值是生成新消息之前的值，所以造成每次都是最新的那条消息被隐藏掉了
      }
    },
    mounted() {
    }
  };
</script>

<style scoped>
 .service_img{
     width: 100%;
     height:700px;
      background-image: url(../img/mine/beijing5.jpg); 
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
