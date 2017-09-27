<!--user-create-dialog-->

<template>
  <v-dialog persistent v-model="showDialog">
    <v-card class="text-xs-center">
      <v-card-text>The user has been added.</v-card-text>
      <v-btn @click.native="close">Ok</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
// import { deleteResearchOutput } from '../../services/data';
import { modalState } from '../../state-machine';

export default {
  name: 'user-create-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  computed: {
    ...mapState({
      showDialog: state => state.modalDialog === modalState.CREATEUSER,
    }),
  },
  methods: {
    close() {
      this.$store.dispatch('changeReportContext', null);
    },
  },
};
</script>
