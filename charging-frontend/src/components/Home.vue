<script>
import api from '../api'; // Adjust the path accordingly

export default {
  data() {
    return {
      stations: []
    };
  },
  async created() {
    try {
      const response = await api.get('/stations');
      this.stations = response.data;
    } catch (error) {
      alert('Failed to load stations: ' + (error.response?.data?.message || error.message));
      this.$router.push('/login');
    }
  }
}
</script>