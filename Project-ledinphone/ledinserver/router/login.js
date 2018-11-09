const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.post("/test",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    
    var sql=`SELECT *FROM ld_user WHERE uname=? AND upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if (result.length>0){res.send({code:1,msg:result})}
        else{res.send({code:0,msg:result})}
        console.log(result)

    })
})
module.exports=router;