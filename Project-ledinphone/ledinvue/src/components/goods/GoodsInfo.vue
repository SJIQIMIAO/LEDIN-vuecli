<template>
    <div class="app_goodsinfo">
        <!-- 第一部分:商品轮播区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swipe-box :list="imagelist"></swipe-box>
					</div>
				</div>
			</div>
        <!-- 第二部分:商品购买区域 -->
        <div class="mui-card">
                <img :src="info.img">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            原价:<del>￥{{info.p_old}}</del>
                            折扣价:<span>￥{{info.p_now}}</span>
                        </p>
                        <p>购买数量:</p>
                            <div class="mui-numbox">
                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
                                <input id="box" class="mui-input-numbox" value=1 type="number" v-model="num"/>
                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
                            </div>
                        
					</div>
				</div>
				<div class="mui-card-footer">
                    <p> 
                        <mt-button type="primary" size="small" id="btn" @click="buy">立即购买</mt-button>
                        <mt-button type="danger" size="small" id="btn" @click="add">加入购物车</mt-button>
                    </p>
                </div>
			</div>
        <!-- 第三部分:商品参数区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{info.p_sn}}</p>
                        <p>商品类型:{{info.p_type}}</p>
                        <p>商品类型:{{info.p_type}}</p>
					</div>
                    
				</div>
				<div class="mui-card-footer">
                </div>
                <img src="../../img/return.png" id="return" @click="ret">
			</div>
    </div>
</template>
<script>
//导入图片轮播组件
import swiper from "../subcomponents/swiper.vue"
import {Toast} from "mint-ui";
export default {
    data(){
        return{
            imagelist:[],
            info:{},
            num:1
        }
    },
    methods:{
        goSub(){
            if(this.num<=1){return;}
            this.num=this.num-1;
        },
        goAdd(){
            this.num=parseInt(this.num)+1;
        },
        add(){
            Toast("加入购物车成功")
        },
        buy(){
            this.$router.push({path:"/shop"})
        },
        //获取当前商品数据
        findDetail(){
            //发送请求获取数据
            this.$http.get("goodslist/find").then(result=>{
                this.info=result.body;

            })
        },
        getImageList(){
            this.$http.get("imagelist/list").then(result=>{
                if(result.body.code==1){
                    
                    this.imagelist=result.body.msg;
                }
            })
        },
        ret(){
            this.$router.push({path:"/home/goodlist"})
        }
    },
    created(){
        // console.log(this.$route.params.id);
        
        this.getImageList();
        this.findDetail();
    },
    components:{//注册子组件
       "swipe-box":swiper,
    }
}
</script>
<style>
    .btn{background-color: #f18989 !important}
    .mui-card>img{max-width:100%}
   #return{width:50px;margin-left:300px}
   .mui-card-footer p{display: flex;}
</style>

