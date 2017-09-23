<!-- report-create-dialog -->

<template>
  <v-dialog v-model="this.$store.getters.addReportDialog" persistent width="800">
    <report-create-form></report-create-form>
  </v-dialog>
</template>

<script>
import reportCreateForm from '../forms/report-create-form.vue';

export default {
  name: 'report-create-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  components: {
    reportCreateForm,
  },
  changeAddReportDialog() {
    // toggle report-create-dialog
    this.$store.dispatch('changeAddReportDialog');
  },
};
</script>
