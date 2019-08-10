//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//添加路由
//1.用户注册
router.post("/reg",function(req,res){
	//获取post数据
	var obj=req.body;
	//判断是否为空
	var i=400;
	for(var key in obj){
		i++;
		if(!obj[key]){
			res.send({code:i,msg:key+" required"})
			return;
		}
	}
	//执行SQL语句
	pool.query("insert into dc_user set?",[obj],function(err,result){
		if(err)throw err
		console.log(result)
		if(result.affectedRows>0){
			res.send({code:200,msg:"reg success"})
		}
	})
})
//2.用户登录
router.post("/login",function(req,res){
	var obj=req.body;
	//判断是否为空
	if(!obj.uname){
		res.send({code:401,msg:" uname required"})
		return;
	}
	if(!obj.upwd){
		res.send({code:402,msg:"upwd required"})
		return;
	}
	pool.query("select uid from dc_user where uname=? and upwd=?",[obj.uname,obj.upwd],function(err,result){
		if(err)throw err;
		console.log(result);
		if(result.length>0){
			res.send({code:200,msg:"login success"})
		}else{
			res.send({code:301,msg:"login error"})	
		}
	})
})
//3.检索用户
router.get("/detail",function(req,res){
	var obj=req.query;
	if(!obj.uid){
		res.send({code:401,msg:"uid required"})
	}
	pool.query("select * from dc_user where uid=?",[obj.uid],function(err,result){
		if(err)throw err;
		console.log(result);
		if(result.length>0){
			res.send(result)
		}
	})
})
//4.修改用户
router.post("/update",function(req,res){
	var obj=req.body;
	var i=400;
	for(var key in obj){
		i++;
		if(!obj[key]){
			res.send({code:i,msg:key+" required"})
		}
	}
	pool.query("update dc_user set phone=? where uid=?",[obj.phone,obj.uid],function(err,result){
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send({code:200,msg:"update success"})
		}else{
			res.send({code:301,msg:"update error"})
		}
	})
})
//5.用户列表
router.get("/list",function(req,res){
	var obj=req.query;
	//转换成整型
	obj.pno=parseInt(obj.pno)
	obj.size=parseInt(obj.size)
	//判断是否为空
	if(!obj.pno){
		//如果是空设置默认值1
		obj.pno=1;
	}
	if(!obj.size){
		//如果是空设置默认值2
		obj.size=2;
	}
	//计算开始的页面
	var start=(obj.pno-1)*obj.size;
	//执行SQL语句
	pool.query("select * from qy_user limit ?,?",[start,obj.size],function(err,result){
		if(err) throw err;
		res.send(result)
	})
})
//6.删除用户
router.get("/delete",function(req,res){
	var obj=req.query;
	if(!obj.uid){
		res.send({code:401,msg:"uid required"})
	}
	pool.query("delete from qy_user where uid=?",[obj.uid],function(err,result){
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