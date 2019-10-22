import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/main/Main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path:'/details',
    component:Home,
    children:[
      {
        path:"",
        name:"details",
        component:() =>
            import("../views/Details.vue")
      }
    ]
  },
  {
    path:'/Main',
    component:Home,
    children:[
      {
        path:"",
        name:"Main",
        component: Main
      }
    ]
  },
  {
    path:'/sigin',
    name:'sigin',
    component:()=>import('../views/Sigin.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
