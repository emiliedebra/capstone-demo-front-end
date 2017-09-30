<!--user-create-confirmation-dialog-->

<template>
  <v-dialog persistent v-model="showDialog">
    <v-card class="text-xs-center">
      <v-card-text>Successfully Executed.</v-card-text>
      <v-btn @click.native="close">Ok</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import { contextState } from '../../state-machine';

export default {
  name: 'user-create-confirmation-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  computed: {
    ...mapState({
      showDialog: state => state.confirmationDialog === contextState.CONFIRMUSER,
    }),
  },
  methods: {
    close() {
      this.$store.dispatch('changeConfirmationDialog', null);
      this.$store.dispatch('changeUserContext', null);
    },
  },
};
</script>
