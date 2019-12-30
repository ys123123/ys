import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect:'/already',
    children:[
      {
        path:'wait',
        name:'wait',
        component: () => import(/* webpackChunkName: "home" */ '../views/Wait.vue') 
      },
      {
        path:'already',
        name:'already',
        component: () => import(/* webpackChunkName: "classify" */ '../views/Already.vue') 
      },
      {
        path:'finish',
        name:'finish',
        component: () => import(/* webpackChunkName: "vip" */ '../views/Finish.vue') 
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
