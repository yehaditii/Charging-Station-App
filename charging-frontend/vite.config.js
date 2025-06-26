import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174,
    strictPort: true,
  },
  optimizeDeps: {
    include: ['object-assign', 'concaveman'], // ✅ ADD concaveman here
  },
});