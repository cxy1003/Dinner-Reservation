import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import Login from './views/Login'
import Mine from './views/Mine'
import Notfound from './views/Notfound'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/details",component:Details},
    {path:"/login",component:Login},
    {path:"/mine",component:Mine},
    {path:"*",component:Notfound}
    
  ]
})
