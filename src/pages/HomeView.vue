
<!-- Home.vue -->

<template ref="home">
  <v-container fluid>
    <v-layout row>
      <!-- <v-card-text class="ma-1 pa-0 body-2">Order By:</v-card-text> -->
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
    <!-- <v-divider></v-divider> -->
    <report-list :outputs="posts"></report-list>
  </v-container>
</template>

<script>
import { printOutputs } from '../utils/print-services';
import { getDetailedResearchOutputs } from '../utils/data';

import reportList from '../components/report-list.vue';
import filterOrderBar from '../components/filter-order-bar.vue';

export default {
  name: 'home',
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    // if (this.$store.getters.accessLevel > 0) {
    this.posts = getDetailedResearchOutputs();
    // } else {
    //  this.posts = getBasicResearchOutputs();
    // }
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
      printOutputs(this.posts);
    },
  },
};
</script>
