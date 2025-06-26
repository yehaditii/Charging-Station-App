import { createRouter, createWebHistory } from 'vue-router'

// ✅ Views – full page screens
import AuthView from './views/AuthView.vue'
import StationList from './views/StationList.vue'
import AddStation from './views/AddStation.vue'
import EditStation from './views/EditStation.vue'
import StationDetails from './views/StationDetails.vue'

// ✅ You can keep MapView in components or move to views
import MapView from './components/MapView.vue'

const routes = [
  { path: '/', component: AuthView },
  { path: '/login', component: AuthView },
  { path: '/stations', component: StationList },
  { path: '/add', component: AddStation },
  { path: '/edit/:id', component: EditStation, props: true },
  { path: '/stations/:id', component: StationDetails, props: true },
  { path: '/map', component: MapView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Route guard for auth-protected pages
router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login']
  const authRequired = !publicPages.includes(to.path)
  const token = localStorage.getItem('token')

  if (authRequired && !token) {
    return next('/login')
  }

  next()
})

export default router