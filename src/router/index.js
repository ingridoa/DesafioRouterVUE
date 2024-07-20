import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/producto',
    name: 'producto',
   component: () => import(/* webpackChunkName: "about" */ '../views/ProductoVue.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
   component: () => import(/* webpackChunkName: "about" */ '../views/ContactoVue.vue')
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
