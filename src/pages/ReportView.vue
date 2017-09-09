<!-- Report View -->

<template>
  <v-container class="report">
    <report-header :researchOutput="output[0]"></report-header>
    <report-body :body="output[0].additional_info"></report-body>
  </v-container>
</template>

<script>
// import axios from 'axios';
import reportHeader from '../components/report-header';
import reportBody from '../components/report-body';
import { getReport } from '../utils/data-access';

export default {
  name: 'report',
  data() {
    return {
      output: [{
        author: '',
      }],
    };
  },

  created() {
    const id = this.$store.getters.viewID;
    getReport(id)
      .then((output) => {
        this.output = output;
        // hacky because of different table names
        this.output[0].author = `${this.output[0].Author_First_Name} ${this.output[0].Author_Last_Name}`;
      });
  },
  components: {
    reportHeader,
    reportBody,
  },
};
</script>
