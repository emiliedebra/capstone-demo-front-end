<!-- ReportView -->

<template>
  <v-container class="report" fluid>
    <v-btn icon @click.native="back">
      <v-icon>keyboard_backspace</v-icon>
    </v-btn>
    
  <v-card flat fluid class="ma-0 pa-0">
    <v-layout row grid-xs-left>
      <v-flex xs10>
        <report-header :researchOutput="output"></report-header>
      </v-flex>
      <v-flex xs3 mt-3 grid-xs-right>
        <report-details v-if="this.$store.getters.showDetails" :details="output"></report-details>
      </v-flex>
    </v-layout>
  </v-card>
  <report-body :body="output.additional_info"></report-body>
  </v-container>
</template>

<script>
// import axios from 'axios';
import { mapState } from 'vuex';
import reportHeader from '../components/card-components/report-header.vue';
import reportBody from '../components/card-components/report-body.vue';
import reportDetails from '../components/card-components/report-details.vue';
import { getReport, newReport } from '../services/data';
// import { contextState } from '../state-machine';

export default {
  name: 'report',
  data() {
    return {
      output: {
      },
    };
  },
  computed: {
    ...mapState({
      reportContext: state => state.reportContext,
    }),
  },
  created() {
    // NB: using local data
    // set id of report to view
    // get report
    const _this = this;
    if (this.reportContext) {
      getReport(this.reportContext.id)
        .then((output) => {
          _this.output = output;
        });
    } else {
      this.output = newReport();
    }
  },
  methods: {
    back() {
      // return to home-view
      this.$store.dispatch('changeReportContext', null);
      this.$router.push('/');
    },
  },
  components: {
    reportHeader,
    reportBody,
    reportDetails,
  },
};
</script>
