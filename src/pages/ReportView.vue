<!-- Report View -->

<template>
  <v-container class="report">
    <v-card flat v-for="item in posts.outputs" :key="item.title">
      <v-card-text>
        {{ item.title }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'report',
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
};
</script>
