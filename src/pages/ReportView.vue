<!-- Report View -->

<template>
  <v-container class="report">
    <report-header :researchOutput="output"></report-header>
    <report-body :body="output.additional_info"></report-body>
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
        this.output = output[0];
        // hacky because of different table names
        this.output.author = `${this.output.Author_First_Name} ${this.output.Author_Last_Name}`;
      });
  },
  components: {
    reportHeader,
    reportBody,
  },
};
</script>
