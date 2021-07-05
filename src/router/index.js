import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Find from '../pages/Find.vue'
import Charts from '../pages/Charts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Find',
    name: 'Find',
    component: Find
  },
  {
    path: '/Charts',
    name: 'Charts',
    component: Charts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
