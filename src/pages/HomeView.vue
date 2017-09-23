<!-- Home.vue -->

<template ref="home">
  <v-container fluid>
    <v-layout row>
      <v-flex xs10>
        <filter-order-bar></filter-order-bar>
      </v-flex>
      <v-flex xs3>
        <v-card style="background-color: transparent" flat fluid class="text-xs-right">
          <v-btn class="ma-0" flat @click.native="print">Generate Report</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <report-list :outputs="posts"></report-list>
  </v-container>
</template>

<script>
import { printOutputs } from '../utils/print-services';
import { getDetailedResearchOutputs } from '../utils/data';

import reportList from '../components/app-components/report-list.vue';
import filterOrderBar from '../components/app-components/filter-order-bar.vue';

export default {
  name: 'home',
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    // NB: using local data
    // get reports to display in report-list
    this.posts = getDetailedResearchOutputs();
    // getResearchOutputs()
    //   .then((posts) => {
    //     this.posts = posts;
    //   });
  },

  components: {
    reportList,
    filterOrderBar,
  },

  methods: {
    print() {
      // fire print-services method
      printOutputs(this.posts);
    },
  },
};
</script>
