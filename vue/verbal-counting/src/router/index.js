import { createRouter, createWebHistory } from 'vue-router'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
