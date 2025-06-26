<script>
import api from '../api'; // Adjust the path accordingly

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSignup() {
      try {
        const response = await api.post('/auth/register', {
          email: this.email,
          password: this.password,
        });
        alert(response.data.message);
        this.$router.push('/login');
      } catch (error) {
        alert('Signup failed: ' + (error.response?.data?.message || error.message));
      }
    },
  },
};
</script>