import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/login',
    name: 'login',component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/documents',
    name: 'documents',component: () => import(/* webpackChunkName: "about" */ '../views/DocumentsListView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router