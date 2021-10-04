import Vue from 'vue'
import VueRouter from 'vue-router'
import CCredit from '../views/CCredit.vue'

Vue.use(VueRouter)

const routes = [

   //1
  {
    path: '/',
    name: 'CCredit',
    component: CCredit
  },
  // {
  //   path: '/credit',
  //   name: 'CCredit',
  //   component: () => import('../views/CCredit.vue')
  // },
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

  //3
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
  //2
  {
    path: '/qrcode',
    name: 'DQRCode',
    component: () => import('../views/DqrCode.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes: routes
})

export default router
