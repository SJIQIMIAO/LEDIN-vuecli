<template>
    <div class="app_member">
        <img src="http://127.0.0.1:3000/img/006.jpg" alt="">
        用户名称：<input type="text" placeholder="请输入用户名" v-model="uname" @blur="isnull1" class="input">
        用户密码：<input type="password" placeholder="请输入密码" v-model="upwd"  @blur="isnull2" class="input">
        用户邮箱：<input type="text" placeholder="请输入邮箱" v-model="email" @blur="isnull3" class="input">
        联系方式：<input type="text" placeholder="请输入电话" v-model="phone"  @blur="isnull4" class="input">
        <mt-button type="primary" size="small" id="btn" @click="reg">注册</mt-button>
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
             phone:"",
             reg1:/^\d{6,8}$/,
             reg2:/^1[34578]\d{9}$/,
             reg3:/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
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
                }else if(!this.reg1.test(this.upwd)){
                    Toast("密码的长度应在6~8位");
                }
            },
           isnull3(){
                if(!this.email){
                    Toast("邮箱不能为空");
                }else if(!this.reg3.test(this.email)){
                    Toast("请输入正确格式的邮箱格式");
                }
            },
            isnull4(){
                if(!this.phone){
                    Toast("电话不能为空");
                }else if(this.reg2.test(this.email)){
                    Toast("请输入正确格式的电话号码");
                }
            },
           reg(){
               if(this.uname&&this.upwd&&this.email&&this.phone){
               var url="http://127.0.0.1:3000/register/reg";
                var obj={uname:this.uname,upwd:this.upwd,email:this.email,phone:this.phone};
                this.$http.post(url,obj).then(result=>{
                    if(result.body=1){
                        Toast("注册成功")
                    this.$router.push({path:"/member"});
                    
                    }
                    
                })
                }
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
