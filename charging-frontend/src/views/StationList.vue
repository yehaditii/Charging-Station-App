<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'

const stations = ref([])
const message = ref('')
const router = useRouter()

const fetchStations = async () => {
  try {
    const res = await api.get('/stations')
    stations.value = res.data
  } catch (err) {
    message.value = 'Error loading stations'
  }
}

const deleteStation = async (id) => {
  try {
    await api.delete(`/stations/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    message.value = '✅ Station deleted!'
    fetchStations()
  } catch (err) {
    message.value = '❌ Error deleting station'
  }
}

const editStation = (id) => {
  router.push(`/edit/${id}`)
}

onMounted(() => fetchStations())
</script>

<template>
  <div class="station-container">
    <h2>Charging Stations</h2>
    <p v-if="message">{{ message }}</p>
    <ul>
      <li v-for="station in stations" :key="station._id" class="station-item">
        <strong>{{ station.name }}</strong> – {{ station.status }}
        <button @click="editStation(station._id)">✏ Edit</button>
        <button @click="deleteStation(station._id)">🗑 Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.station-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 12px;
}

.station-item {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  padding: 0.75rem;
  border-radius: 8px;
}

button {
  margin-left: 8px;
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
}

button:last-child {
  background-color: #ff4d4f;
}
</style>