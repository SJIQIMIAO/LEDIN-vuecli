import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//1.引入Header组件
import {Header,Swipe,SwipeItem,Button,Field} from "mint-ui";
//2.注册Header组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
Vue.component(Field.name, Field);
//3.引入VueResource
import VueResource from "vue-resource";
//4.加载VueResource
Vue.use(VueResource);

Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
   return new Date(datestr).toLocaleString();
})
//6:设置全局ajax访问基础路径
Vue.http.options.root="http://127.0.0.1:3000/";
//7.设置全局的ajax post 访问格式
Vue.http.options.emulateJSON=true;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
