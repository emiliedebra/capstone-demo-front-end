<template>
  <v-dialog persistent v-model="this.$store.getters.logInDialog" width="400">
    <v-card class="text-xs-center pt-3">
      <h5>Welcome to CAIR</h5>
      <v-divider></v-divider>
      <login-card></login-card>
    </v-card>
  </v-dialog>
</template>

<script>
import loginCard from './login-card';

export default {
  name: 'login-dialog',
  components: {
    loginCard,
  },
};
</script>
