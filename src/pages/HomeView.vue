<!-- Home.vue -->

<template>
  <v-card flat class="home">
    
    <!-- Year Title: Dummy -->
    <!-- <v-card v-for="year in posts.outputs" :key="year.outputs"> -->
      <!-- <v-card-title>
        <h4 class="ma-0 pa-0">{{ year.year }}</h4>
      </v-card-title>
      <v-divider></v-divider> -->

      <!-- Report Cards -->
      <v-card v-for="item in posts" :key="item.title">
        <v-card-title class="pb-0 mb-0">
          <div>
            <div class="headline">
              <v-layout row>
                <h6 class="pa-0 ma-0">{{ item.title }}</h6>
              </v-layout>
            </div>
            <p class="pa-0 ma-0">{{ item.author }}</p>

            <p class="pa-0 ma-0 grey--text">{{ item.type }}</p>
          </div>
        </v-card-title>

        <!-- Abstract Text - Dummy Function -->
        <v-card-text v-if="item.show">{{ item.additional_info }}</v-card-text>

        <!-- Button Panel -->
        <v-btn class="mr-0 pa-0" small flat @click.native="item.show = !item.show"> Abstract </v-btn>
        <v-btn class="mr-0 pa-0" small flat to="/report"> View </v-btn>
        <v-btn class="mr-0 pa-0" small flat to="/page"> Generate Report </v-btn>
        <v-divider></v-divider>
      </v-card>
    </v-card> 
  <!-- </v-card> -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      posts: [],
      errors: [],
    };
    // return {
    //   // NB: temporary data for dev purposes
    //   reports: [
    //     {
    //       year: 2017,
    //       data: [{
    //         title: 'Paper One',
    //         author: 'Emilie Wood',
    //         coAuthor: 'Tommie Meyer',
    //         abstract: `I'm a thing. But, like most politicians, he promise|d more than he could deliver. 
    //         You won't have time for sleeping, soldier, not with all the bed making you'll be doing. 
    //         Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! 
    //         You're going to do his laundry? I've got to find a way to escape.`,
    //         show: false,
    //       },
    //       ],
    //     },
    //   },
    // };
  },
  created() {
    axios
      .get('http://localhost:3000')
      .then((response) => {
        this.posts = response.data.outputs.map(o => Object.assign(o, { show: false }));
      });
  },
};
</script>
