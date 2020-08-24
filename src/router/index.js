import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/artists',
    name: 'Artistas',
    component: () => import(/* webpackChunkName: "artistas" */ '../views/Artistas.vue')
  },
  {
    path: '/songs',
    name: 'Canciones',
    component: () => import(/* webpackChunkName: "songs" */ '../views/Canciones.vue')
  },
  {
    path: '/albums/:id',
    name: 'albums',
    component: () => import(/* webpackChunkName: "artists" */ '../views/Albums.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
