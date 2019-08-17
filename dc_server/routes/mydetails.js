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
//导出路由
module.exports=router;