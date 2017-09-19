<!-- Report View -->

<template>
  <v-container class="report">
    <v-btn icon @click.native="back">
      <v-icon>keyboard_backspace</v-icon>
    </v-btn>
    <report-header :researchOutput="output"></report-header>
    <report-body :body="output.additional_info"></report-body>
    <report-details v-show="detailed" :details="output"></report-details>
  </v-container>
</template>

<script>
// import axios from 'axios';
import reportHeader from '../components/report-header.vue';
import reportBody from '../components/report-body.vue';
import reportDetails from '../components/report-details.vue';
import { getReport } from '../utils/data';

export default {
  name: 'report',
  data() {
    return {
      detailed: false,
      output: [{
      }],
    };
  },

  created() {
    // set id of report to view
    const id = this.$store.getters.viewID;
    // set level of report view
    if (this.$store.getters.accessLevel > 0) {
      this.detailed = true;
    } else {
      this.detailed = false;
    }
    // get report
    this.output = getReport(id);
    // getReport(id)
    //   .then((output) => {
    //     this.output = output[0];
    //   });
  },
  methods: {
    back() {
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
