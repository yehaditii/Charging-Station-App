// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

// Views
import AuthView from './views/AuthView.vue'
import StationList from './views/StationList.vue'
import AddStation from './views/AddStation.vue'
import EditStation from './views/EditStation.vue'
import StationDetails from './views/StationDetails.vue'
import MapView from './views/MapView.vue' // moved to views for consistency

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: AuthView },
  { path: '/stations', component: StationList },
  { path: '/add', component: AddStation },
  { path: '/edit/:id', component: EditStation, props: true },
  { path: '/stations/:id', component: StationDetails, props: true },
  { path: '/map', component: MapView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ Protect routes if not logged in
router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const token = localStorage.getItem('token')

  if (authRequired && !token) {
    return next('/login')
  }
  next