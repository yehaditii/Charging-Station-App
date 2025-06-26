<template>
  <nav class="navbar">
    <router-link to="/stations">Stations</router-link>
    <router-link to="/add">Add Station</router-link>
    <router-link to="/map">Map</router-link>
    <router-link to="/">Logout</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 1rem;
  background-color: #35495e;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}
</style>