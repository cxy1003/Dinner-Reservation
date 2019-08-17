//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
//详情页
router.get("/details",function(req,res){
<<<<<<< HEAD
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
=======
	var id=req.query.id
	pool.query("select * from goods_details where id=?",[id],function(err,result){
		if(err)throw err;
		console.log(result);
		res.send(result);
	})
>>>>>>> b875f298b6ce1e56febef219d7fa99e082d4b058
})
//导出路由
module.exports=router;