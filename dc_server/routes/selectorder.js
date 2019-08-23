//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//添加路由
//   订单查询
router.get("/",(req,res)=>{
    //获取uid 并且判断如果没有请求登录
    // var uid = req.session.uid;
    // if(!uid){
    //   res.send({code:-1,msg:"请登录"});
    //   return;
    // }
    var pid=req.query;
    var output={
                order:{}
            }
    //3:创建sql查询用户订单内容
    var sql = "SELECT * FROM  dc_preplot";
    //4:获取返回结果并且发送客户端
    pool.query(sql,(err,result)=>{
       if(err)throw err;
        output.order=result
        console.log(output);
        res.send(output); 
    })  
  })
//导出路由
module.exports=router;