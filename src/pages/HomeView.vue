<!-- Home.vue -->

<template>
  <v-container fluid>
      <v-card style="background-color: transparent" flat fluid class="text-xs-right">
        <v-btn class="ma-0" flat>Generate Report</v-btn>
      </v-card>
      <report-list :outputs="posts.outputs"></report-list>
  </v-container>
</template>

<script>
import axios from 'axios';
import reportList from '../components/report-list.vue';

export default {
  name: 'home',
  data() {
    return {
      posts: [],
    };
  },

  created() {
    axios
      .get('http://localhost:3000')
      .then((response) => {
        this.posts = response.data;
      });
  },

  components: {
    reportList,
  },
};
</script>
