<template>
  <v-dialog persistent v-model="this.$store.getters.unsuccessfulLogin">
    <v-card class="text-xs-center">
      <v-card-text>You have entered the incorrect email/password combination. 
        Please try again or continue as a guest.</v-card-text>
        <v-btn @click.native="close">OK</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

  name: 'unsuccessful-login-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  methods: {
    close() {
      this.$store.dispatch('toggleUnsuccessfulLogin');
    },
  },
};
</script>
