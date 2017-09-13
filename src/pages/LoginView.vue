<!-- LoginView.vue -->

<!-- For construction purposes -->
<template>
  <v-card flat class="page">
    <login-card></login-card>
  </v-card>
</template>

<script>
import loginCard from '../components/login-card';

export default {
  name: 'login',
  data() {
    return {
      msg: 'Log In/Out Page Under Construction',
      submsg: 'Check back soon for an updated version - we are working to bring you what you want!',
    };
  },
  components: {
    loginCard,
  },
};
</script>
