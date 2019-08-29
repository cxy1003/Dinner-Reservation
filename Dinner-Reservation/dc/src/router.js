import Vue from 'vue'
import Router from 'vue-router'
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
import main from './views/main'
import Map from "./views/Map.vue"



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
    {path:"/",component:Index},
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
    { path: '/main',  component: main},
    {path:'/start',component:Start},
    {path:"/map/:pname",component:Map}
  ]
})
