<!-- report-modify-dialog -->

<template>
  <v-card>
    <report-modify-confirmation-dialog @modify="modify"></report-modify-confirmation-dialog>
    <v-dialog v-model="showDialog" persistent width="800">
      <report-modify-form-toolbar @close="close"></report-modify-form-toolbar>
      <report-modify-form ref="modifyform" :report="report" @submit="submit"></report-modify-form>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import reportModifyForm from '../forms/report-modify-form.vue';
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';
import reportModifyConfirmationDialog from '../pop-up-dialogs/report-modify-confirmation-dialog.vue';
import { contextState, modalState } from '../../state-machine';
import { newReport, getReport, postResearchOutput, updateResearchOutput } from '../../services/data';


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
    reportModifyConfirmationDialog,
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
        getReport(state.id)
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
    submit() {
      this.$store.dispatch('changeConfirmationDialog', contextState.CONFIRM);
    },
    modify() {
      const report = this.report;
      if (this.reportContext.state === contextState.UPDATE) {
        updateResearchOutput(report)
          .then(() => {
            this.close();
          })
          .catch(error => console.log(error));
      } else {
        postResearchOutput(report)
          .then(() => {
            this.close();
          })
          .catch(error => console.log(error));
      }
    },
    close() {
      this.$refs.modifyform.clear();
      this.$store.dispatch('changeReportContext', null);
    },
  },
};
</script>
