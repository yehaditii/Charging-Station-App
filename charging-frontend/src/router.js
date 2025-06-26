// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

// Views – full page components
import AuthView from './views/AuthView.vue'
import StationList from './views/StationList.vue'
import AddStation from './views/AddStation.vue'
import EditStation from './views/EditStation.vue'
import StationDetails from './views/StationDetails.vue'
import MapView from './components/MapView.vue' // or move to views if preferred

const routes = [
  { path: '/', component: AuthView }, // default
  { path: '/login', component: AuthView },
  { path: '/stations', component: StationListView },
  { path: '/add', component: AddStation },
  { path: '/edit/:id', component: EditStationView, props: true },
  { path: '/stations/:id', component: StationDetailsView, props: true },
  { path: '/map', component: MapView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🛡️ Route protection
router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const token = localStorage.getItem('token')

  if (authRequired && !token) {
    return next('/login')
  }
  next()
})

export default router