<template>
    <div class="app-goods-list ">
        <div class="app-goods-item" v-for="item in list" :key="item.id" @click="getDetail(item.id)">
            <img :src="item.img_url"/>
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.p_old}}</span>
                    <span class="old">￥{{item.p_now}}</span>
                </p>
                <p class="sell">
                    <span>爆款热卖</span>
                    <span>{{item.sell}}</span>
                </p>
            </div>
        </div>
        <mt-button type="primary" size="large" id="btn" @click="getGoodsList(pno)" :disabled="pno==2?true:false">加载更多</mt-button>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
export default {
    data(){
        return{
            list:[],
            pno:0//在这里定义pno，并且让他的初始值为0
        }
    },
    methods:{//点击商品,跳转到商品详情页
        getDetail(id){
            this.$router.push({path:"/home/goodsinfo/"+id});//并将id传到商品详情页

            
        },
        getGoodsList(pno){
            this.pno=++this.pno;
            this.$http.get("goodslist/list?pno="+this.pno).then(result=>{
                this.list=this.list.concat(result.body.msg);//将结果拼接到原来的结果上面
            });
        },
        
    },
    created(){
        this.getGoodsList(1);//设置pno的初始值为1
    }
}
</script>
<style>
    .app-goods-list{
        display:flex;
        flex-wrap:wrap;
        padding:7px;
        justify-content:space-between;
    }
    .app-goods-list .app-goods-item{
        width:49%;
        height:200px;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin:22px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:200px;
    }
    .app-goods-list img{
        width:100%
    }
    .app-goods-list .app-goods-item .title{
        font-size:15px;
    }
    .app-goods-list .app-goods-item .info{
        background-color: #eee;
    }
    .app-goods-list .app-goods-item .info p{
       margin:0;
       padding:5px;
    }
    .app-goods-list .app-goods-item .info .price .now{
       font-size:16px;
        color:red;
        font-weight:bold;
    }
    .app-goods-list .app-goods-item .info .price .old{
       font-size:12px;
       text-decoration: line-through;
    }
    .app-goods-list .app-goods-item .info .sell{
       display:flex;
       font-size: 12px;
       justify-content: space-between;
    }
    #btn{background-color: #f18989 !important}
</style>
