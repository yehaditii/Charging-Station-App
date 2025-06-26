<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-[1.01]">
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-xl font-bold text-green-600 dark:text-green-400">
        {{ station.name }}
      </h3>
      <span class="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
        {{ station.status }}
      </span>
    </div>

    <div class="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
      <p><strong>Power:</strong> {{ station.powerOutput }} kW</p>
      <p><strong>Connector:</strong> {{ station.connectorType }}</p>
    </div>

    <router-link
      :to="`/stations/${station._id}`"
      class="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline text-sm"
    >
      View Details →
    </router-link>
  </div>
</template>

<script setup>
defineProps(['station'])
</script>