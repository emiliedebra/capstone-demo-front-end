
<!-- Home.vue -->

<template>
  <v-container fluid>
      <v-card style="background-color: transparent" flat fluid class="text-xs-right">
        <v-btn class="ma-0" flat @click.native="print">Generate Report</v-btn>
      </v-card>
      <report-list :outputs="posts.outputs"></report-list>
  </v-container>
</template>

<script>
import { printOutputs } from '../utils/print-services';
import { getResearchOutputs } from '../utils/data-access';

import reportList from '../components/report-list.vue';

export default {
  name: 'home',
  data() {
    return {
      posts: [],
    };
  },

  created() {
    getResearchOutputs()
      .then((posts) => {
        this.posts = posts;
      });
  },

  components: {
    reportList,
  },

  methods: {
    print() {
      printOutputs(this.posts.outputs);
    },
  },
};
</script>
