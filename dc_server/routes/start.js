//引入express模块
const express=require("express")
//创建路由器
var router=express.Router();
//引入连接池
const pool=require("../pool.js")
router.post("/",(req,res)=>{
var obj=req.body
//执行SQL语句starts
console.log(obj)
    pool.query("insert into starts set ? ",[obj],(err,result)=>{
if(err)throw err
if(result.affectedRows>0){
res.send({code:200,msg:"success"})
}
    })
})
//导出路由
module.exports=router;