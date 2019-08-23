//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//添加路由
//1用户预定信息表
router.post("/",function(req,res){
	//获取post数据
	var obj=req.body;
	//判断是否为空
	// var i=400;
	// for(var key in obj){
	// 	i++;
	// 	if(!obj[key]){
	// 		res.send({code:i,msg:key+" required"})
	// 		return;
	// 	}
	// }
	//执行SQL语句
	pool.query("insert into dc_preplot set?",[obj],function(err,result){
		if(err)throw err
		console.log(result)
		if(result.affectedRows>0){
			res.send({code:200,msg:"success"})
		}
	})
})
//导出路由
module.exports=router;