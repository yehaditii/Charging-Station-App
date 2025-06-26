<template>
  <header class="bg-white dark:bg-gray-900 shadow-md p-4">
    <div class="flex items-center justify-between max-w-7xl mx-auto">
      <router-link to="/" class="text-xl font-bold text-green-600 dark:text-green-400">
        ⚡ Charger
      </router-link>

      <button @click="toggleMenu" class="md:hidden text-2xl text-gray-700 dark:text-gray-300">
        ☰
      </button>

      <nav class="hidden md:flex space-x-6 items-center">
        <router-link to="/stations" class="nav-link">Stations</router-link>
        <router-link to="/add" class="nav-link">Add</router-link>
        <router-link to="/map" class="nav-link">Map</router-link>
        <button @click="toggleDark" class="ml-2 px-3 py-1 text-sm border rounded dark:border-white">🌓</button>
      </nav>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden mt-3 space-y-2 text-center">
      <router-link @click="toggleMenu" to="/stations" class="block nav-link">Stations</router-link>
      <router-link @click="toggleMenu" to="/add" class="block nav-link">Add</router-link>
      <router-link @click="toggleMenu" to="/map" class="block nav-link">Map</router-link>
      <button @click="toggleDark" class="mt-2 px-3 py-1 text-sm border rounded dark:border-white">🌓</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function toggleDark() {
  document.documentElement.classList.toggle('dark')
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-300 hover:underline transition;
}
</style>