<template>
  <div>
    <h3>{{ station.name }}</h3>
    <p>Status: {{ station.status }}</p>
    <!-- buttons: edit, delete or view -->
  </div>
</template>
<script setup>
defineProps(['station'])
</script>