
const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.post("/reg",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var email=req.body.email;
    var phone=req.body.phone;
    var sql="INSERT INTO ld_user VALUES(null,?,?,?,?,null)";
    pool.query(sql,[uname,upwd,email,phone],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==1){
            res.send("1");
        }else{
            res.send("0");
        }
    })
  
});

module.exports=router;