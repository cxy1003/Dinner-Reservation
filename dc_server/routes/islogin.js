//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//详情页
router.get("/",function(req,res){
    var uid=req.session.uid;
    if(!uid){//2.2如果当前用户没有登录
        res.send({code:301,msg:"请登录"});
        return;
    }
   
})
//导出路由
module.exports=router;