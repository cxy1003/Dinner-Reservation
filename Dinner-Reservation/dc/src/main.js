import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'font-awesome/css/font-awesome.min.css'
// 百度地图模块
import BaiduMap from "vue-baidu-map"
Vue.use(BaiduMap,{
  ak:"MLaZHT79pRiOMG6ARzikRz8LGYdkRxGF"
})

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


Vue.use(ElementUI);

// 引入第三方组件
  // mint-ui
  import MintUI from "mint-ui"
  import "mint-ui/lib/style.css"  
  Vue.use(MintUI)
  import "./font/iconfont.css"

  import axios from "axios"
  // 配置axios 基础路径
axios.defaults.baseURL="http://127.0.0.1:5050/"
  axios.defaults.withCredentials=true;
  Vue.prototype.axios=axios
import { Rate } from 'element-ui';

Vue.component(Rate.name, Rate);
Vue.use(Rate)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.config.productionTip = false
import Vuex from "vuex"
Vue.use(Vuex)

new Vue({
  router,
  // 定位顶部
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },
  store: {
    store,
   },
  
  // axios,
  render: h => h(App)
}).$mount('#app')
