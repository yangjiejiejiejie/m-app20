import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import( '../views/Home.vue'),
    children:[
      {
        path: '/home/zuo',
        component: () => import( '../views/zuo.vue'),
      },{
        path: '/home/you',
        component: () => import( '../views/you.vue'),
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
