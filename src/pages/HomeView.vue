<!-- Home.vue -->

<template>
  <v-container fluid>
      <v-btn flat right class="ma-1" @click.native="toggleShowNav">Generate Report</v-btn>
      <report-list v-show="showNav" :outputs="posts.outputs"></report-list>
  </v-container>
</template>

<script>
import axios from 'axios';

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
    'report-list': () => import('../components/report-list.vue'),
  },
  computed: {
    showNav: () => {
      return this.$store.getters.showNav;
    }
  },
  methods: {
    toggleShowNav: () => {
      this.$store.dispatch('toggleShowNav');
    },
  },
};
</script>
