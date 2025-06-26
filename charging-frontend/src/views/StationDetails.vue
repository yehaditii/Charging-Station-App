<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../api.js'

const station = ref({})
const route = useRoute()

onMounted(async () => {
  const res = await api.get(`/stations/${route.params.id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  station.value = res.data
})
</script>

<template>
<h2>{{ station.name }}</h2>
<p>Status: {{ station.status }}</p>
<p>Power: {{ station.powerOutput }} kW</p>
<p>Connector: {{ station.connectorType }}</p>
<p>Lat/Long: {{ station.location.latitude }}, {{ station.location.longitude }}</p>
</template>