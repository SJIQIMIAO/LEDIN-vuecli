//1.引入模块
const express=require("express");
const pool=require("../pool");
const router=express.Router();
//2.创建路由对象
router.get("/list",(req,res)=>{
  var obj={code:1,msg:[
      {id:1,name:"潮酷连帽 拼接卫衣",price:210,count:1},
      {id:2,name:"鱼尾裙摆，复古潮流",price:210,count:1},
      {id:3,name:"甜美网纱，轻薄飘逸",price:210,count:1} 
    ]
}
  //自己造的假数据,没有去数据库查找
  res.send(obj);
});

//4.导出当前路由模块
module.exports=router;