<!--node-modify-confirmation-dialog-->

<template>
  <v-dialog persistent v-model="showDialog">
    <v-card class="text-xs-center">
      <v-card-text v-if="confirmDialog">Are you sure you want to submit these changes?</v-card-text>
      <v-card-text v-if="errorDialog">There are missing fields.</v-card-text>
      <v-btn v-if="confirmDialog" @click.native="modifyNode">Yes</v-btn>
      <v-btn v-if="confirmDialog" @click.native="close">No</v-btn>
      <!-- Error Dialog -->
      <v-btn @click.native="close" v-show="errorDialog">Ok</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import { modalState, contextState } from '../../state-machine';

export default {
  name: 'node-modify-confirmation-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  computed: {
    ...mapState({
      showDialog: state => state.confirmationDialog === contextState.CONFIRMNODE || state.confirmationDialog === contextState.ERRORNODE,
      errorDialog: state => state.confirmationDialog === contextState.ERRORNODE,
      confirmDialog: state => state.confirmationDialog === contextState.CONFIRMNODE,

    }),
  },
  methods: {
    close() {
      this.$store.dispatch('changeConfirmationDialog', null);
    },
    modifyNode() {
      this.$emit('modify');
    }
  },
};
</script>
