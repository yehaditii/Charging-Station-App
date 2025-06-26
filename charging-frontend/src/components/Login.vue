<script>
import api from '../api'; // Adjust path if needed

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await api.post('/auth/login', {
          email: this.email,
          password: this.password,
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        alert('Login successful');
        this.$router.push('/');
      } catch (error) {
        alert('Login failed: ' + (error.response?.data?.message || error.message));
      }
    },
  },
};
</script>