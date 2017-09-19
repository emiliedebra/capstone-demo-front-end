<!-- login-card.vue -->

<template id="login-card">
  <v-container class="text-xs-center">
    <v-layout column>
      <v-flex class="text-xs-left">
        <h6>Login</h6>
      </v-flex>
      <v-flex>
        <v-text-field label="Email" v-model="email"></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field label="Password" type="password" v-model="password"></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn @click.native="loginAccess">Login</v-btn>
    <v-btn @click.native="guestAccess">Continue as Guest</v-btn>
  </v-container>
</template>

<script>
// import { loginUser } from '../utils/data-access.js';
import { login } from '../utils/data.js';

export default {
  name: 'login-card',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    loginAccess() {
      const user = login(this);
      if (user === 0) {
        this.$store.dispatch('toggleUnsuccessfulLogin');
      } else {
        this.$store.dispatch('changeAccessLevel', user.accessLevel);
        this.$store.dispatch('changeLoggedInUserID', user.id);
        this.$store.dispatch('changeLoggedIn', true);
        this.$store.dispatch('changeLogInDialog', false);
        this.$router.push('/');
      }
      // .then((response) => {
      //   // should only occur if successful : NB Getting here even if db access fails
      //   this.$store.dispatch('changeAccessLevel', response.access_id);
      //   this.$store.dispatch('changeLoggedIn', true);
      //   this.$store.dispatch('changeLogInDialog', false);
      //   this.$router.push('/');
      // })
      // .catch((response) => {
      //   // open dialog that rejects login
      //   console.log('Cannot Log In');
      // });
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
