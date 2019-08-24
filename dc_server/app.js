//引入express模块
const express=require("express");
//引入路由器模块
const userRouter=require("./routes/user.js")
//引入路由器模块
const myproRouter=require("./routes/mypro.js")
//引入主页面模块
const myindexRouter=require("./routes/myindex.js")
//引入详情页模块
const mydetailsRouter=require("./routes/mydetails.js")
//引入预定模块
const preplotRouter=require("./routes/preplot.js")
// 引入判断客户是否登录模块
const isloginRouter=require("./routes/islogin.js")
// 引入查询订单模块
const selectRouter=require("./routes/selectorder")
// 删除订单模块
const delorderRouter=require("./routes/delorder.js")
//引入中间件
const bodyParser=require("body-parser")
// 跨域
const cors=require("cors");
// session
const session=require("express-session");
// 评分
const startRouter=require("./routes/start.js")
//创建web服务器
var app=express();
//监听端口
app.listen(5050);
app.use(cors({
	origin:["http://localhost:8080","http://127.0.0.1:8080","http://127.0.0.1:5050"], //不能用*
	credentials:true //请求验证
}));
//从此所有响应，自动带Access-Control-Allow-Origin:http://127.0.0.1:5500
//万一客户端浏览器地址发生变化，只改这里origin一处即可！
// 4.配置session模块
app.use(session({
    secret:"128位字符串",  //安全字符串
    resave:true,  //请求时更新数据
    saveUninitialized:true //保存初始的数据
}))
//托管静态资源到dc下
app.use(express.static("public"))
//使用中间件
app.use(bodyParser.urlencoded({
	extended:false
}))

//使用路由器
app.use("/user",userRouter)
//使用路由器
app.use("/mypro",myproRouter)
//使用路由器
app.use("/myindex",myindexRouter)
//使用详情页路由器
app.use("/mydetails",mydetailsRouter)
//使用预定路由器
app.use("/preplot",preplotRouter)
// 使用判断登录状态指定路由
app.use("/islogin",isloginRouter)
// 使用查询订单的路由
app.use("/select",selectRouter)
// 使用删除用户的路由
app.use("/delete",delorderRouter)
// 评分路由
app.use("/start",startRouter)