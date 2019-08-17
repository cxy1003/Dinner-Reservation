//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")

//轮播图接口 
router.get("/carousel",function(req,res){
	var obj=req.query;
	pool.query("select * from dc_index_carouse",function(err,result){
		if(err)throw err;
		console.log(result);
		res.send(result);
	})
})
//商品
router.get("/goods/",function(req,res){
	var obj=req.query;
	pool.query("select * from goods",function(err,result){
		if(err)throw err;
		console.log(result);
		res.send(result);
	})
})

//导出路由
module.exports=router;