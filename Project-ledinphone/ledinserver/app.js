const express=require('express');
const imageList=require("./router/imageList");
const routerGoodsList=require("./router/goodslist");
const routerCartList=require("./router/cartlist");
const routerlogin=require("./router/login");
const routerregister=require("./router/register");
const bodyParse=require("body-parser");

var app=express();
app.use(bodyParse.urlencoded({extended:false}));
//跨域模块
const cors=require("cors");
//跨域访问
app.use(cors({
    origin:["http://127.0.0.1:3001"],
    credentials:true
}))
var server=app.listen(3000);//因为监听的是3000,所以测试后台的时候要用3000,不要用3001
app.use(express.static(__dirname+"/public"));
app.use("/imageList",imageList);
app.use("/goodslist",routerGoodsList);
app.use("/cartlist",routerCartList);
app.use("/login",routerlogin);
app.use("/register",routerregister);
