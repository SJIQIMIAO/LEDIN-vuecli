//1.引入模块
const express=require("express");
const pool=require("../pool");
const router=express.Router();
//2.创建路由对象
router.get("/list",(req,res)=>{
    var pno=req.query.pno;
    var offset=(pno-1)*6;
    var sql=`SELECT *FROM ld_product LIMIT ${offset},6`
    pool.query(sql,[],(err,result)=>{
        if(err) throw err
        res.send({code:1,msg:result});
    })
  
});
// 功能二:依据商品的编号查询商品的信息
router.get("/find",(req,res)=>{
    var obj={id:"9",title:"ins宽松复古 港风格纹拼接衬衫",p_old:400,p_now:219,p_sn:"21458425",p_type:"衬衫",img:"http://127.0.0.1:3000/img/001.jpg"};
    res.send(obj);//自己造的,没有去数据库查找
});
//4.导出当前路由模块
module.exports=router;