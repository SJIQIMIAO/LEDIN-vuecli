import Vue from 'vue'
import Router from 'vue-router'
//src/router.js 配置组件访问路由
//引入自定义组件
import HomeContainer from "./components/tabbar/HomeContainer";
import ShopContainer from "./components/shop/ShopContainer";
import MemberContainer from "./components/member/MemberContainer";
import Register from "./components/member/Register";
import SearchContainer from "./components/search/SearchContainer";
import GoodList from "./components/goods/GoodList";
import GoodsInfo from "./components/goods/GoodsInfo";
Vue.use(Router)
//指定该组件访问路径
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},
    {path:'/home/goodlist',component:GoodList},
    {path:'/home/goodsinfo/:id',component:GoodsInfo},
    {path:'/shop',component:ShopContainer},
    {path:'/member',component:MemberContainer},
    {path:'/home/register',component:Register},
    {path:'/search',component:SearchContainer},
    
  ]
})
