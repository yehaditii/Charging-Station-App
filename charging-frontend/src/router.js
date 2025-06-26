import { createRouter, createWebHistory } from 'vue-router'
import AuthView from './views/AuthView.vue'
import StationList from './views/StationList.vue'
import AddStation from './views/AddStation.vue' 
import EditStation from './views/EditStation.vue' // ✅ Import

const routes = [
  { path: '/', component: AuthView },
  { path: '/login', component: AuthView },
  { path: '/stations', component: StationList },
  { path: '/edit/:id', component: EditStation },
]

const routes = [
  { path: '/', component: AuthView },
  { path: '/login', component: AuthView },
  { path: '/stations', component: StationList },
  { path: '/add', component: AddStation }, // ✅ Add route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
