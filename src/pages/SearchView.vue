<!-- Search.vue -->

<template>
  <v-container fluid>     
  <!-- <v-text-field solo label="Search" append-icon="search" v-model="searchInput"></v-text-field> -->
    <h6>Search Results:</h6>
    <v-spacer></v-spacer>
    <report-list v-if="this.posts.length > 0" :outputs="posts"></report-list>
    <div v-if="this.posts.length === 0">No results.</div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { getResearchOutputsSearch } from '../services/data';
import reportList from '../components/app-components/report-list.vue';

export default {
  name: 'search',
  data() {
    return {
      posts: [],
      failed: false,
    };
  },
  computed: {
    ...mapState({
      searchInput: state => state.searchInput,
    }),
  },
  created() {
    getResearchOutputsSearch(this.searchInput)
      .then((result) => {
        // console.log(result);
        this.posts = result;
      });
  },
  watch: {
    searchInput(state) {
      // console.log('Got to watcher with ', state);
      // this.posts = getDetailedResearchOutputs();
      getResearchOutputsSearch(state)
        .then((result) => {
          // console.log(result);
          this.posts = result;
        });
    },
  },
  methods: {
    getData() {
      // NB: not working and implemented using local data
      // call data search method, check if results, update posts
    },
  },
  components: {
    reportList,
  },
};
</script>
