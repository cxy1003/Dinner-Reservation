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
import Preplot from './views/Preplot'
import Notfound from './views/Notfound'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Index",component:Index},
    {path:"/",component:Home},
    {path:"/details",component:Details},
    {path:"/login",component:Login},
    {path:"/install",component:Install},
    {path:"/mine",component:Mine},
    {path:"/reguser",component:Reguser},
    {path:"/carousel",component:Carousel},
    {path:"/userpreplot",component:Userpreplot},
    {path:"/personal",component:Personal}, 
    {path:"/allorder",component:Allorder},
    {path:"/orderresult",component:Orderresult},
    {path:"/search",component:Search},
    {path:"/preplot",component:Preplot},
    {path:"*",component:Notfound}
  ]
})
