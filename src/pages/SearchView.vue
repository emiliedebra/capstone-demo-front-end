<!-- Search.vue -->
<!-- Not Yet Implemented -->
<template>

  <v-container fluid>     
  <v-text-field solo label="Search" append-icon="search" v-model="searchInput"></v-text-field>
    <v-spacer></v-spacer>
    <!-- <v-divider></v-divider> -->
    <report-list :outputs="posts"></report-list>
  </v-container>

</template>

<script>
import { getResearchOutputsSearch } from '../utils/data.js';

import reportList from '../components/report-list.vue';

export default {
  name: 'search',
  posts: [],
  data() {
    return {
      searchInput: '',
    };
  },
  watch: {
    searchInput() {
      this.getData(this.searchInput);
      console.log('In searchInput watch');
    },
  },
  methods: {
    getData(search) {
      this.posts = getResearchOutputsSearch(search);
      if (this.posts === null) {
        this.posts = [{ title: 'No results found.' }];
      }
      console.log('In GetData');
    },
  },
  components: {
    reportList,
  },
};
</script>
