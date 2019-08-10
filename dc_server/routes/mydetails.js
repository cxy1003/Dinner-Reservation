//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//详情页
router.get("/details",function(req,res){
	var obj=req.query;
	pool.query("select * from goods_details",function(err,result){
		if(err)throw err;
		console.log(result);
		res.send(result);
	})
})
//导出路由
module.exports=router;