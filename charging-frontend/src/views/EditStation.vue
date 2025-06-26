<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import { useRoute, useRouter } from 'vue-router'

const name = ref('')
const latitude = ref('')
const longitude = ref('')
const connectorType = ref('')
const powerOutput = ref('')
const status = ref('Active')
const message = ref('')

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const res = await api.get(`/stations`)
  const station = res.data.find(s => s._id === route.params.id)
  name.value = station.name
  latitude.value = station.location.latitude
  longitude.value = station.location.longitude
  connectorType.value = station.connectorType
  powerOutput.value = station.powerOutput
  status.value = station.status
})

const updateStation = async () => {
  try {
    await api.put(`/stations/${route.params.id}`, {
      name: name.value,
      location: { latitude: parseFloat(latitude.value), longitude: parseFloat(longitude.value) },
      connectorType: connectorType.value,
      powerOutput: parseFloat(powerOutput.value),
      status: status.value,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
    message.value = 'Updated!'
    setTimeout(() => router.push('/stations'), 1000)
  } catch (err) {
    message.value = 'Error updating'
  }
}
</script>

<template>
  <div>
    <h2>Edit Station</h2>
    <input v-model="name" placeholder="Name" />
    <input v-model="latitude" placeholder="Latitude" />
    <input v-model="longitude" placeholder="Longitude" />
    <input v-model="connectorType" placeholder="Connector Type" />
    <input v-model="powerOutput" placeholder="Power Output" />
    <select v-model="status">
      <option>Active</option>
      <option>Inactive</option>
    </select>
    <button @click="updateStation">Update</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>