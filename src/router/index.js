import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  //Add Credit to the Account
  {
    path: '/credit',
    name: 'CCredit',
    component: () => import('../views/CCredit.vue')
  },
  {
    path: '/accbal',
    name: 'CAccoBal',
    component: () => import('../views/CAccoBal.vue')
  },
  {
    path: '/addcredit',
    name: 'CAddCre',
    component: () => import('../views/CAddCredit.vue')
  },
  {
    path: '/account',
    name: 'EAccount',
    component: () => import('../views/EAccount.vue')
  },
  {
    path: '/reqOt',
    name: 'EReqOt',
    component: () => import('../views/EReqOT.vue')
  },
  {
    path: '/notify',
    name: 'ENotify',
    component: () => import('../views/ENotify.vue')
  },
  {
    path: '/inquary',
    name: 'EInquary',
    component: () => import('../views/EInquary.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
