<!-- report-button-panel -->

<template id="report-button-panel">
  <v-card flat>
    <v-layout row>
      <v-card flat class="text-xs-left">
      </v-card>
      <v-spacer></v-spacer>
      <v-card flat class="text-xs-right">
        <v-btn small flat primary @click.native="deleteUser">
          Delete User</v-btn>
      </v-card>
    </v-layout>
  </v-card>
</template>

<script>
import { contextState } from '../../state-machine';

export default {
  name: 'user-button-panel',
  props: ['userID'],
  methods: {
    deleteUser() {
      // change report context to deal with delete
      this.$store.dispatch('changeUserContext', { id: this.userID, state: contextState.DELETE });
    },
  },
};
</script>

