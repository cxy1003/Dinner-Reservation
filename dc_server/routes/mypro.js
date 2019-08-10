//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//添加路由
//1.注册
router.post("/v2/user_reg/",function(req,res){
	//获取数据
	var obj=req.body;
	//判断是否为空
	for(var key in obj){
		if(!obj[key]){
			res.send({"msg":key+"不能为空"})
			return;
		}
	}
	//执行SQL语句
	pool.query("insert into qy_user set?",[obj],function(err,result){
		if(err)throw err;
		res.send("1")
	})
})
//2.登录
router.get("/v2/user_login/:uname&:upwd",function(req,res){
	//获取数据
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	pool.query("select * from qy_user where uname=? and upwd=?",[$uname,$upwd],function(err,result){
		if(err)throw err;
		if(result.length>0){
			res.send("1")
		}else{
			res.send("0")	
		}
	})
})
//3.用户列表
router.get("/v2/user_list/",function(req,res){
	pool.query("select * from qy_user",function(err,result){
		if(err)throw err;
		res.send(result);
	})
})
//4.删除用户
router.delete("/v2/user_delete/:uid",function(req,res){
	var $uid=req.params.uid;
	pool.query("delete from qy_user where uid=?",[$uid],function(err,result){
		if(err)throw err;
		res.send("1")
	})
})
//5.id查询
router.get("/v2/user_query/:uid",function(req,res){
	var $uid=req.params.uid;
	pool.query("select * from qy_user where uid=?",[$uid],function(err,result){
		if(err) throw err;
		res.send(result);
	})
})
//6.修改用户
router.put("/v2/user_update/",function(req,res){
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $phone=req.body.phone;
	if(!$uid){
		alert("uid 不能为空");
		return;
	}
	if(!$uname){
		alert("uname 不能为空");
		return;
	}
	if(!$phone){
		alert("phone 不能为空");
		return;
	}
	pool.query("update qy_user set uname=?,phone=? where uid=?",[$uname,$phone,$uid],function(err,result){
		if (err) throw err;
		res.send("1")
	})
})
//导出路由
module.exports=router;