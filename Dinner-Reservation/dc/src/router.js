import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/Home'
import Index from './views/Index'
import Details from './views/Details'
import Login from './views/Login'
import Install from './views/Install'
import Carousel from './components/Carousel'
import Mine from './views/Mine'
import Reguser from './views/Reguser'
import Userpreplot from './views/Userpreplot'
import Personal from './views/Personal'
import Allorder from './views/Allorder'
import Orderresult from './views/Orderresult'
import Search from './views/Search'
// import Preplot from './views/Preplot'
import Notfound from './views/Notfound'
import imClient from './components/imClient/imClient'
import imServer from './components/imServer/imServer'

Vue.use(Router)

export default new Router({
  //在此处加入
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {path:"/Index",component:Index},
    {path:"/",component:Home},
    {path:"/details",component:Details},
    {path:"/",component:Home},
    {path:"/details/:id",component:Details,props:true},
    {path:"/login",component:Login},
    {path:"/install",component:Install},
    {path:"/mine",component:Mine},
    {path:"/reguser",component:Reguser},
    {path:"/carousel",component:Carousel},
    {path:"/userpreplot/:lid",component:Userpreplot,pid:true},
    {path:"/personal",component:Personal}, 
    {path:"/allorder",component:Allorder},
    {path:"/orderresult",component:Orderresult},
    {path:"/search",component:Search},
    // {path:"/preplot",component:Preplot},
    {path:"*",component:Notfound},
    { path: '/imServer',  component: imServer },
    { path: '/imClient',  component: imClient }
  ]
})
