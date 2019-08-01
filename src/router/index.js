import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../page/Msite/Msite.vue'
import Search from '../page/Search/Search.vue'
import Order from '../page/Order/Order.vue'
import Profile from '../page/Profile/Profile.vue'
import Login from '../page/Login/Login.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        FootShow:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        FootShow:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        FootShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        FootShow:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
