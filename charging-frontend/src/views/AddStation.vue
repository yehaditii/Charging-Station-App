<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        ➕ Add Charging Station
      </h2>
      <form @submit.prevent="addStation" class="space-y-4">
        <input v-model="station.name" class="input" placeholder="Station Name" required />
        <input v-model.number="station.powerOutput" class="input" placeholder="Power Output (kW)" type="number" required />
        <input v-model="station.connectorType" class="input" placeholder="Connector Type" required />
        <input v-model.number="station.location.latitude" class="input" placeholder="Latitude" type="number" required />
        <input v-model.number="station.location.longitude" class="input" placeholder="Longitude" type="number" required />
        <button type="submit" class="btn w-full">Add Station</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'

const router = useRouter()
const station = ref({
  name: '',
  powerOutput: 0,
  connectorType: '',
  location: {
    latitude: 0,
    longitude: 0
  }
})

const addStation = async () => {
  await api.post('/stations', station.value)
  router.push('/stations')
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400;
}
.btn {
  @apply bg-green-500 text-white py-2 rounded hover:bg-green-600;
}
</style>