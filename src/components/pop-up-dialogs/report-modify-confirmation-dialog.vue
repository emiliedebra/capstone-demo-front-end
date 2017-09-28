<!--report-modify-confirmation-dialog-->

<template>
  <v-dialog persistent v-model="showDialog">
    <v-card class="text-xs-center">
      <v-card-text v-if="confirmDialog">Are you sure you want to submit these changes?</v-card-text>
      <v-card-text v-if="errorDialog">There are missing fields.</v-card-text>
      <v-btn v-if="confirmDialog" @click.native="modifyReport">Yes</v-btn>
      <v-btn v-if="confirmDialog" @click.native="close">No</v-btn>
      <!-- Error Dialog -->
      <v-btn @click.native="close" v-show="errorDialog">Ok</v-btn>
      
      <v-card-text v-if="clearDialog">Are you sure you want to clear these changes?</v-card-text>
      <v-btn v-if="clearDialog" @click.native="clearReport">Yes</v-btn>
      <v-btn v-if="clearDialog" @click.native="close">No</v-btn>

    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
// import { deleteResearchOutput } from '../../services/data';
import { contextState } from '../../state-machine';

export default {

  name: 'report-modify-confirmation-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  computed: {
    ...mapState({
      showDialog: state => state.confirmationDialog === contextState.CONFIRM || state.confirmationDialog === contextState.ERROR || state.confirmationDialog === contextState.CONFIRMCLEAR,
      errorDialog: state => state.confirmationDialog === contextState.ERROR,
      confirmDialog: state => state.confirmationDialog === contextState.CONFIRM,
      clearDialog: state => state.confirmationDialog === contextState.CONFIRMCLEAR,
    }),
  },
  methods: {
    close() {
      this.$store.dispatch('changeConfirmationDialog', null);
    },
    modifyReport() {
      this.$emit('modify');
    },
    clearReport() {
      this.$emit('clear');
    },
  },
};
</script>
