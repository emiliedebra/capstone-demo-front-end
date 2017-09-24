<!-- Search.vue -->

<template>
  <v-container fluid>     
  <v-text-field solo label="Search" append-icon="search" v-model="searchInput"></v-text-field>
    <v-spacer></v-spacer>
    <report-list :outputs="posts"></report-list>
  </v-container>
</template>

<script>
import { getResearchOutputsSearch } from '../services/data';

import reportList from '../components/app-components/report-list.vue';

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
      // NB: not yet implemented
      // call getData method and update posts
      this.getData(this.searchInput);
    },
  },
  methods: {
    getData(search) {
      // NB: not working and implemented using local data
      // call data search method, check if results, update posts
      this.posts = getResearchOutputsSearch(search);
      if (this.posts === null) {
        this.posts = [{ title: 'No results found.' }];
      }
    },
  },
  components: {
    reportList,
  },
};
</script>
