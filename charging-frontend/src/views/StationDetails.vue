<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-xl">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">🔍 Station Details</h2>
      <p><strong>Name:</strong> {{ station.name }}</p>
      <p><strong>Status:</strong> {{ station.status }}</p>
      <p><strong>Output:</strong> {{ station.powerOutput }} kW</p>
      <p><strong>Connector:</strong> {{ station.connectorType }}</p>
      <p><strong>Latitude:</strong> {{ station.location.latitude }}</p>
      <p><strong>Longitude:</strong> {{ station.location.longitude }}</p>
      <router-link :to="`/edit/${station._id}`" class="btn mt-4 inline-block">✏ Edit</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import { useRoute } from 'vue-router'

const station = ref({
  location: { latitude: '', longitude: '' }
})
const route = useRoute()

onMounted(async () => {
  const res = await api.get(`/stations/${route.params.id}`)
  station.value = res.data
})
</script>

<style scoped>
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600;
}
</style>