<!-- report-modify-dialog -->

<template>
  <v-dialog v-model="showDialog" persistent width="800">
    <report-modify-form-toolbar @close="close"></report-modify-form-toolbar>
    <report-modify-form ref="modifyform" :report="report" @submit="submit"></report-modify-form>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import reportModifyForm from '../forms/report-modify-form.vue';
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';
import { contextState, modalState } from '../../state-machine';
import { newReport, getReportX, postResearchOutput } from '../../services/data';


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
            console.log(report);
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
      console.log(this.report);
      const report = this.report;
      postResearchOutput(report)
        .then(() => {
          this.close();
        })
        .catch(error => console.log(error));
    },
    close() {
      this.$refs.modifyform.clear();
      this.$store.dispatch('changeReportContext', null);
    },
  },
};
</script>
