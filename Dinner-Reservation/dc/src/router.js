import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/Home'
import Index from './views/Index'
import Details from './views/Details'
import Login from './views/Login'
import Install from './views/Install'
import Carousel from './components/Carousel'
import Mine from './views/Mine'
import fond from './views/fond'
import Reguser from './views/Reguser'
import Userpreplot from './views/Userpreplot'
import Personal from './views/Personal'
import Allorder from './views/Allorder'
import Orderresult from './views/Orderresult'
import Search from './views/Search'
import Buttombar from './views/Buttombar'
import Start from './views/Start'
import imClient from './components/imClient/imClient'
import imServer from './components/imServer/imServer'
import Notfound from './views/Notfound'
import prepsuccess from './views/prepsuccess'

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
    {path:"/index",component:Index},
    {path:"/",component:Home},
    {path:"/details/:id",component:Details,props:true},
    {path:"/login",component:Login},
    {path:"/install",component:Install},
    {path:"/mine",component:Mine},
    {path:"/reguser",component:Reguser},
    {path:"/carousel",component:Carousel},
    {path:"/userpreplot/:arr",component:Userpreplot},
    {path:"/personal",component:Personal}, 
    {path:"/allorder",component:Allorder},
    {path:"/orderresult",component:Orderresult},
    {path:"/fond",component:fond},
    {path:"/search",component:Search},
    {path:"/buttombar",component:Buttombar},
    { path: '/imServer',  component: imServer },
    { path: '/imClient',  component: imClient },
    {path:'/start',component:Start},
    {path:'/prepsuccess',component:prepsuccess},
    {path:"*",component:Notfound}
  ]
})
