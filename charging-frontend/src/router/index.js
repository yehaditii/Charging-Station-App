import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import MapView from '../components/MapView.vue'; // ✅ Already added

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/map', component: MapView }, // ✅ Already added
];

// ✅ THIS LINE IS MANDATORY!
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // ✅ This fixes the "no matching export" error