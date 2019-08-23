//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//详情页
router.get("/details",function(req,res){
    var id=req.query.id
    var output={
        product:{}
    }
    pool.query("select * from goods_details where id=?",[id],function(err,result){
        if(err)throw err;
        output.product=result[0]
        console.log(output);
        res.send(output);
    })
})
//   订单查询
  router.get("/preplotlist",(req,res)=>{
    //获取uid 并且判断如果没有请求登录
    // var uid = req.session.uid;
    // if(!uid){
    //   res.send({code:-1,msg:"请登录"});
    //   return;
    // }
    var pid=req.query.pid;
    //3:创建sql查询用户订单内容
    var sql = "SELECT * FROM  dc_preplot";
    //4:获取返回结果并且发送客户端
    pool.query(sql,[pid],(err,result)=>{
       if(err)throw err;
       res.send({code:200,msg:"查询成功",data:result});  
    })  
  })
//导出路由
module.exports=router;