<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
    <div class="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <img src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png" alt="EV Icon" class="w-20 h-20 mx-auto mb-4" />
      <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white mb-6">
        {{ isLogin ? 'Login to Continue' : 'Create Your Account' }}
      </h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="email" type="email" placeholder="Email" class="input" required />
        <input v-model="password" type="password" placeholder="Password" class="input" required />
        <button type="submit" class="btn">{{ isLogin ? 'Login' : 'Register' }}</button>
      </form>

      <p class="mt-4 text-center text-sm text-blue-500 cursor-pointer" @click="isLogin = !isLogin">
        {{ isLogin ? 'No account? Register' : 'Already have an account? Login' }}
      </p>

      <p v-if="message" class="mt-2 text-center text-red-500">{{ message }}</p>
    </div>
  </div>
</template>

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
    const res = await api.post(endpoint, { email: email.value, password: password.value })
    localStorage.setItem('token', res.data.token)
    router.push('/stations')
  } catch (err) {
    message.value = err.response?.data?.message || 'Authentication error'
  }
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400;
}
.btn {
  @apply w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition;
}
</style>