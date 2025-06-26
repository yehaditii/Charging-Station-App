<script setup>
import { ref } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'

const name = ref('')
const latitude = ref('')
const longitude = ref('')
const connectorType = ref('')
const powerOutput = ref('')
const status = ref('Active')
const message = ref('')
const router = useRouter()

const createStation = async () => {
  try {
    await api.post('/stations', {
      name: name.value,
      location: {
        latitude: parseFloat(latitude.value),
        longitude: parseFloat(longitude.value),
      },
      connectorType: connectorType.value,
      powerOutput: parseFloat(powerOutput.value),
      status: status.value,
    })
    message.value = 'Station added successfully!'
    setTimeout(() => router.push('/stations'), 1000)
  } catch (err) {
    message.value = err.response?.data?.message || 'Error creating station'
  }
}
</script>

<template>
  <div class="form-container">
    <h2>Add Charging Station</h2>
    <form @submit.prevent="createStation">
      <input v-model="name" placeholder="Station Name" required />
      <input v-model="latitude" placeholder="Latitude" required />
      <input v-model="longitude" placeholder="Longitude" required />
      <input v-model="connectorType" placeholder="Connector Type" required />
      <input v-model="powerOutput" placeholder="Power Output (kW)" required />
      <select v-model="status">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit">Add Station</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 60px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 12px;
}
input,
select {
  display: block;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 100%;
}
button {
  padding: 0.5rem 1.5rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
