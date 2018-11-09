<template>
<div class="app_shop">
    <div class="mui-card-header" id="head">购物车</div>
    <div class="mui-card" v-for="item in list" :key="item.id">
		
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					{{item.name}}  {{item.price}}
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="setSub(item.id)">-</button>
                        <input id="box" class="mui-input-numbox" :value="item.count" type="number"/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button"  @click="setAdd(item.id)">+</button>
                    </div>
				</div>

			</div>
		
	</div>
    <div class="mui-card-footer">小计:￥{{getsubtotal}}</div>
    <div>
        <ul id="pay">
            <li><img src="../../img/weixin.png" alt=""></li>
            <li><img src="../../img/zfb.png" alt=""></li>
            <li><img src="../../img/card.png" alt=""></li>
        </ul>
    </div>
    
</div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        setSub(id){
            for(var item of this.list){
                if(item.id==id){
                    if(item.count>=2)
                    item.count--;
                }
            }
        },
        setAdd(id){
            // console.log("购物车"+id);
            //根据当前id,对count进行自增
            for(var item of this.list){
                if (item.id==id){
                    item.count++;
                }
            }
        },
        getCartlist(){
            this.$http.get("cartlist/list").then(result=>{
                this.list=result.body.msg;
            })
        }
    
    },
    created(){
        this.getCartlist();
    },
    computed:{
        //小计
        //计算属性:计算多个数据的变化
        getsubtotal:function(){
            var sum=0;
            for(var item of this.list){
                    sum+=item.price*item.count;
                }
                return sum;
        }
    }
}

</script>
<style>
    .mui-card{margin-top:33px !important}
    #head{margin-top:40px;font-size:30px !important;color:brown}
    #pay img{width:50px}
    #pay{display: flex;justify-content: space-around;list-style: none}
</style>