<!-- login-card.vue -->

<template id="login-card">
  <v-container class="text-xs-center">
    <v-layout column>
      <v-flex class="text-xs-left">
        <h6>Login</h6>
      </v-flex>
      <v-flex>
        <v-text-field label="Username/Email" v-model="username"></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field label="Password" v-model="password"></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn @click.native="login">Login</v-btn>
    <v-btn @click.native="guestAccess">Continue as Guest</v-btn>
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
  methods: {
    // currently sets all access levels to observer
    login() {
      // post login details
      // get login results
      // dipatch access level
      // on success change LoggedIn to true
      // push to home page
      this.$store.dispatch('changeAccessLevel', 0);
      this.$store.dispatch('changeLoggedIn', true);
      this.$store.dispatch('changeLogInDialog', false);
      this.$router.push('/');
    },
    guestAccess() {
      // set access level to observer and continue to home
      this.$store.dispatch('changeAccessLevel', 0);
      this.$store.dispatch('changeLogInDialog', false);
      this.$router.push('/');
    },
  },
};
</script>
