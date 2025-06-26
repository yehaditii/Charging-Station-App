<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        ✏️ Edit Station
      </h2>
      <form @submit.prevent="saveChanges" class="space-y-4">
        <input v-model="station.name" class="input" placeholder="Station Name" />
        <input v-model.number="station.powerOutput" class="input" placeholder="Power Output (kW)" type="number" />
        <input v-model="station.connectorType" class="input" placeholder="Connector Type" />
        <button type="submit" class="btn w-full">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const station = ref({})

onMounted(async () => {
  const res = await api.get(`/stations/${route.params.id}`)
  station.value = res.data
})

const saveChanges = async () => {
  await api.put(`/stations/${route.params.id}`, station.value)
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