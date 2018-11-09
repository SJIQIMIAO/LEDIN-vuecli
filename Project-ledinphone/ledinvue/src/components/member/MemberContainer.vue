<template>
    <div class="app_member">
        <img src="http://127.0.0.1:3000/img/005.jpg" alt="">
        用户名称：<input type="text" placeholder="请输入用户名" v-model="uname" @blur="isnull1" class="input">
        用户密码：<input type="text" placeholder="请输入密码" v-model="upwd"  @blur="isnull2" class="input">
        <mt-button type="primary" size="small" id="btn" @click="login">登陆</mt-button>
        <p class="member_p1" @click="register">免费注册</p>
        <p class="member_p2">忘记密码?</p>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default{
        data(){
            return{
             
             res:[],
             uname:"",
             upwd:"",
             email:"",
             phone:""
            }
        },
        methods:{
            getmsg(){
                
            },
            isnull1(){
                if(!this.uname){
                    Toast("用户名不能为空");
                }
            },
            isnull2(){
                if(!this.upwd){
                    Toast("密码不能为空");
                }
            },
           
            login(){
                var url="http://127.0.0.1:3000/login/test";
                var obj={uname:this.uname,upwd:this.upwd};
                this.$http.post(url,obj).then(result=>{
                    console.log(result.body.code)
                    if(result.body.code!=1){
                        Toast("用户名或密码错误")
                    }else{Toast("登陆成功");
                    this.$router.push({path:"/home/"});
                    
                    }
                })
            },
            register(){
                this.$router.push({path:"/home/register"});
            }
        },
        components:{//注册子组件
           
        },
        created(){}
    }
</script>
<style>
    .app_member{margin-top:30px}
    .app_member>.field{padding-top:10px}
    .app_member>.login{width:100%;background-color:#f18989bf;color: white;font-size: 30px}
    .app_member>img{width:100%;margin-bottom:10px}
    .app_member .input{width:280px}
    #btn{width:100%}
    .app_member>.member_p1{margin-top: 15px;width:50%;float: left}
    .app_member>.member_p2{margin-top: 15px;width:50%;float: right;padding-left: 105px}
</style>