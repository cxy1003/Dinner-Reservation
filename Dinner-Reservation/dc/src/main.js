import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { imServerStore } from '../src/store/imServerStore.js';
import http from '../src/common/http';
Vue.prototype.$http = http;
import ak from '../src/common/ak';
Vue.prototype.$ak = ak;
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);

// 引入第三方组件
  // mint-ui
  import MintUI from "mint-ui"
  import "mint-ui/lib/style.css"  
  Vue.use(MintUI)
  import "./font/iconfont.css"

  import axios from "axios"
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
  store: {
    // store,
    imServerStore: imServerStore
   },
  
  // axios,
  render: h => h(App)
}).$mount('#app')
