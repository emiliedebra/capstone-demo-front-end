<!-- report-modify-dialog -->

<template>
  <v-dialog v-model="showDialog" persistent width="800">
    <report-modify-form-toolbar @close="close"></report-modify-form-toolbar>
    <report-modify-form :report="report"></report-modify-form>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import reportModifyForm from '../forms/report-modify-form.vue';
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';
import { contextState, modalState } from '../../state-machine';
import { newReport, getReportX } from '../../services/data';

export default {
  name: 'report-modify-dialog',
  data() {
    return {
      report: newReport(),
    };
  },
  components: {
    reportModifyForm,
    reportModifyFormToolbar,
  },
  computed: {
    ...mapState({
      showDialog: state => state.modalDialog === modalState.MODIFY,
      reportContext: state => state.reportContext,
    }),
  },
  watch: {
    reportContext(state) {
      if (state && state.state === contextState.UPDATE) {
        // fetch report when updating
        getReportX(state.id)
          .then((report) => {
            this.report = report;
          });
      } else {
        // set to empty report
        this.report = newReport();
      }
    },
  },
  methods: {
    close() {
      this.$store.dispatch('changeReportContext', null);
    },
  },
  // changeAddReportDialog() {
  //   // toggle report-modify-dialog
  //   this.$store.dispatch('changeAddReportDialog');
  // },
};
</script>
