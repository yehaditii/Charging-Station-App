<template>
  <l-map style="height: 500px; width: 100%;" :zoom="13" :center="[28.6139, 77.2090]">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <l-marker
      v-for="charger in chargers"
      :key="charger._id"
      :lat-lng="[charger.location.latitude, charger.location.longitude]"
      @click="selectedCharger = charger"
    />

    <l-popup v-if="selectedCharger" :lat-lng="[selectedCharger.location.latitude, selectedCharger.location.longitude]">
      <div>
        <h3>{{ selectedCharger.name }}</h3>
        <p>Status: {{ selectedCharger.status }}</p>
        <p>Power Output: {{ selectedCharger.powerOutput }} kW</p>
        <p>Connector: {{ selectedCharger.connectorType }}</p>
      </div>
    </l-popup>
  </l-map>
</template>

<script>
import { ref, onMounted } from 'vue';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet';
import 'leaflet/dist/leaflet.css';
import api from '../api'; // Make sure you use your api.js

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  setup() {
    const chargers = ref([]);
    const selectedCharger = ref(null);

    onMounted(() => {
  chargers.value = [
    {
      _id: '1',
      name: 'Test Charger',
      location: { latitude: 28.6139, longitude: 77.2090 },
      status: 'Active',
      powerOutput: 50,
      connectorType: 'Type 2',
    }
  ];
});


    return {
      chargers,
      selectedCharger,
    };
  },
};
</script>