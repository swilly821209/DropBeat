import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Find from '../pages/Find.vue'
import Charts from '../pages/Charts.vue'
import Active from '../pages/Active.vue'
import ActiveDetail from '../pages/ActiveDetail.vue'
import Funds from '../pages/Funds.vue'
import Member from '../pages/Member.vue'
import Musician from '../pages/Musician.vue'
import ArtistHome from '../pages/ArtistHome.vue'
import ArtistMusic from '../pages/ArtistMusic.vue'

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
  },
  {
    path: '/Active',
    name: 'Active',
    component: Active
  },
  {
    path: '/Active/:id',
    component: ActiveDetail
  },
  {
    path: '/Funds',
    name: 'Funds',
    component: Funds
  },
  {
    path: '/Member',
    name: 'Member',
    component: Member
  },
  {
    path: '/Musician',
    name: 'Musician',
    component: Musician
  },
  {
    path: '/ArtistHome',
    name: 'ArtistHome',
    component: ArtistHome
  },
  {
    path: '/ArtistMusic',
    name: 'ArtistMusic',
    component: ArtistMusic
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
