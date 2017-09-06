<!-- Home.vue -->

<template>
  <v-container fluid>
      <v-card flat fluid class="text-xs-right">
        <v-btn flat>Generate Report</v-btn>
      </v-card>
      <report-list :outputs="posts.outputs"></report-list>
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
