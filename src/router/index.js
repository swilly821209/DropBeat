import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import LoginIn from '../pages/LoginIn.vue'
import Register from '../pages/Register.vue'
import AccountManage from '../pages/AccountManage.vue'

import Find from '../pages/Find.vue'
import Charts from '../pages/Charts.vue'

import Active from '../pages/Active.vue'
import ActiveDetail from '../pages/ActiveDetail.vue'

import Funds from '../pages/Funds.vue'
import FundDetail from '../pages/FundDetail.vue'
import FundForm from '../pages/FundForm.vue'

import Member from '../pages/Member.vue'
import Musician from '../pages/Musician.vue'
import MusicianActive from '../pages/MusicianActive.vue'
import MusicianFunds from '../pages/MusicianFunds.vue'
// Artis 頁面
import Artist from '../pages/Artist.vue'
import ArtistHome from '../pages/ArtistHome.vue'
import ArtistMusic from '../pages/ArtistMusic.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LoginIn',
    component: LoginIn
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/AccountManage',
    component: AccountManage
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
    path: '/Funds/:id',
    component: FundDetail
  },
  {
    path: '/Funds/:id/Form',
    component: FundForm
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
    path: '/Artist/:id',
    // redirect: '/Artist/:id/ArtistHome',
    name: 'Artist',
    component: Artist,
    children: [
      { path: 'ArtistHome', component: ArtistHome }, // Artist/:id/ArtistHome
      { path: 'ArtistMusic', component: ArtistMusic } // Artist/:id/ArtistMusic
    ]
  },
  {
    path: '/MusicianActive',
    name: 'MusicianActive',
    component: MusicianActive
  },
  {
    path: '/MusicianFunds',
    name: 'MusicianFunds',
    component: MusicianFunds
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
