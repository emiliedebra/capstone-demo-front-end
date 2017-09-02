<!-- Home.vue -->

<template>
  <v-card flat class="home">
    <!-- Year Title: Dummy -->
    <v-card-title>
      <h4 class="ma-0 pa-0">2017</h4>
    </v-card-title>
    
    <!-- Report Cards -->
    <v-card v-for="item in reports" :key="item.title">
      <v-card-title>
        <div>
          <div class="headline">
            <v-layout row>
              <h6 class="pa-0 ma-0">{{ item.title }}</h6>
            </v-layout>
          </div>
          <p class="pa-0 ma-0">{{ item.author }}</p>
          <p class="pa-0 ma-0 grey--text">{{ item.coAuthor }}</p>
        </div>
      </v-card-title>
      
      <!-- Abstract Text - Dummy Function -->
      <v-card-text v-show="item.show">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
      </v-card-text>
      
      <!-- Button Panel -->
      <v-btn small flat @click.native="item.show = !item.show">Abstract</v-btn>
      <v-btn small flat to="/page">View</v-btn>
      <v-btn small flat to="/page">Generate Report</v-btn>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      // NB: temporary data for dev purposes
      reports: [
        { title: 'Paper One',
          author: 'Emilie Wood',
          coAuthor: 'Tommie Meyer',
          show: false,
        },
        { title: 'Paper Two',
          author: 'Emilie Wood',
          coAuthor: 'Tommie Meyer',
          show: false,
        },
        { title: 'Paper Three',
          author: 'Emilie Wood',
          coAuthor: 'Tommie Meyer',
          show: false,
        },
      ],
    };
  },
};
</script>
