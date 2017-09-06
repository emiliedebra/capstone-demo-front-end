<template id="report-button-panel">
  <v-card flat>
    <v-btn class="mr-0 pa-0" small flat> Abstract </v-btn>
    <v-btn class="mr-0 pa-0" small flat to="/report"> View </v-btn>
  </v-card>
</template>

<script>
import Vue from 'vue';

Vue.component('report-button-panel', {
  template: '#report-button-panel',
});

export default {
  name: 'report-button-panel',
  // props: ['researchOutput'],
};
</script>
