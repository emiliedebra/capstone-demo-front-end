<!-- login-card.vue -->

<template id="login-card">
  <v-container class="text-xs-center">
    <v-layout column>
      <v-flex>
        <h6>Login</h6>
      </v-flex>
      <v-flex>
        <v-text-field label="Username/Email" v-model="username"></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field label="Password" v-model="password"></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn>Login</v-btn>
    <v-btn>Continue as Guest</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'login-card',
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
