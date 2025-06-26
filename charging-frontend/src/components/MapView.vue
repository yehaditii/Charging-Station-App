<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">📍 Charger Locations</h2>

    <div class="rounded-xl overflow-hidden shadow-md">
      <l-map style="height: 500px; width: 100%;" :zoom="13" :center="[28.6139, 77.2090]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <l-marker
          v-for="station in stations"
          :key="station._id"
          :lat-lng="[station.location.latitude, station.location.longitude]"
          @click="selectedStation = station"
        />
        <l-popup
          v-if="selectedStation"
          :lat-lng="[selectedStation.location.latitude, selectedStation.location.longitude]"
        >
          <div>
            <h3 class="font-bold">{{ selectedStation.name }}</h3>
            <p>Status: {{ selectedStation.status }}</p>
            <p>Output: {{ selectedStation.powerOutput }} kW</p>
            <p>Connector: {{ selectedStation.connectorType }}</p>
          </div>
        </l-popup>
      </l-map>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet'
import 'leaflet/dist/leaflet.css'

const stations = ref([])
const selectedStation = ref(null)

onMounted(async () => {
  const res = await api.get('/stations')
  stations.value = res.data
})
</script>

<style>
.leaflet-container {
  border-radius: 1rem;
}
</style>