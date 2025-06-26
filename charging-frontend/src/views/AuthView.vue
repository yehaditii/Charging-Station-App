<script setup>
import { ref } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const isLogin = ref(true)
const message = ref('')
const router = useRouter()

const submitForm = async () => {
  try {
    const endpoint = isLogin.value ? '/auth/login' : '/auth/register'
    const res = await api.post(endpoint, {
      email: email.value,
      password: password.value
    })

    // ✅ Save token after login or register
    localStorage.setItem('token', res.data.token)
    router.push('/stations')

  } catch (err) {
    console.error('❌ Auth Error:', err.response || err)
    message.value = err.response?.data?.message || 'Error occurred during authentication'
  }
}
</script>

<template>
  <div>
    <Navbar /> <!-- ⬅️ Add this -->
    <div class="auth-container">
      <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
      <form @submit.prevent="submitForm">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
      </form>
      <p @click="isLogin = !isLogin" style="cursor:pointer; color:blue">
        {{ isLogin ? 'No account? Register' : 'Already have an account? Login' }}
      </p>
      <p v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
}
input {
  display: block;
  margin: 1rem auto;
  padding: 0.5rem;
  width: 90%;
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