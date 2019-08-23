//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
router.get("/",function(req,res){
	var obj=req.query;
	if(!obj.pid){
		res.send({code:401,msg:"pid required"})
	}
	pool.query("delete from dc_preplot where pid=?",[obj.pid],function(err,result){
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"delete success"})
		}else{
			res.send({code:301,msg:"delete error"})	
		}
	})
})
//导出路由
module.exports=router;