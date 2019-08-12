import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import Login from './views/Login'
import Install from './views/Install'
import Carousel from './components/Carousel'
import Mine from './views/Mine'
import Reguser from './views/Reguser'
import Notfound from './views/Notfound'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/details",component:Details},
    {path:"/login",component:Login},
    {path:"/install",component:Install},
    {path:"/mine",component:Mine},
    {path:"/reguser",component:Reguser},
    {path:"/carousel",component:Carousel},
    {path:"*",component:Notfound},
    
    
  ]
})
