<template>
  <v-dialog v-model="this.$store.getters.addReportDialog" persistent width="800">
    <report-create-form></report-create-form>
  </v-dialog>
</template>

<script>
import reportCreateForm from './report-create-form';

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
    this.$store.dispatch('changeAddReportDialog');
  },
};
</script>
