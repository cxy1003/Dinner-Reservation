import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

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
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
