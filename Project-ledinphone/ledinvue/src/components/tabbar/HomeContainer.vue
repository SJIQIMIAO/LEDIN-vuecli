<template>
    <div id="app">
       <!--主页组件 HomeContainer.vue-->  
       <!--1：轮播--> 
       <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in list" :key="item.id">
                    <img :src="item.img_url">
                </mt-swipe-item>
        </mt-swipe>
       <!--2：六宫格 start--> 
       <ul class="mui-table-view mui-grid-view mui-grid-9" id="swipe">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
                    <img src="../../img/menu2.png">
                    <div class="mui-media-body">衣橱</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/shop">
                    <img src="../../img/menu3.png">
                    <div class="mui-media-body">购物车</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu4.png">
                    <div class="mui-media-body">支付</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu5.png">
                    <div class="mui-media-body">订单</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu6.png">
                    <div class="mui-media-body">更多</div></a></li>

        </ul>
        <!--六宫格-->
    </div>
</template>
<script>
  //加载当前组件需要的第三方的模块
  import {Toast} from "mint-ui";
  export default{
      data(){
          return{
              list:[
                
                 ]
          }
      },
      methods:{
          getImageList(){
              //获取图片轮播数据
          var url="http://127.0.0.1:3000/imageList/list";
          this.$http.get(url).then(result=>{
              //node.js 发送json数据
              //通过vueresource接收自动将json字符串转换
              //js对象
              console.log(result)
              if(result.body.code==1){
                  this.list=result.body.msg;
              }else{
                  //出错提示
                  Toast("加载轮播图片失败.....");
              }
          })
          }
      },
      created(){
          this.getImageList();
      }
  }
</script>
<style>
  #app .mint-swipe{height:200px;margin-top:45px}
  #app .mint-swipe img{width:100%}
  #app .mui-table-view.mui-grid-view{background-color: white;}
  #app .mui-table-view .mui-table-view-cell{border:0}
  #app .mui-table-view .mui-table-view-cell .mui-media-body{font-size: 13px}
  #app .mui-table-view .mui-table-view-cell img{width:60px;height: 60px;}
  #swipe{margin-top:15px !important}
</style>
