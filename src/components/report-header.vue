<!-- report-header.vue -->

<template id="report-header">
  <v-card flat>
    <v-card-title class="pb-0 mb-0">
      <div>
        <div class="headline">
          <v-layout row>
            <h6 class="pa-0 ma-0">{{ researchOutput.title }}</h6>
          </v-layout>
        </div>
        <p class="pa-0 ma-0">{{ researchOutput.author }}</p>
        <p class="pa-0 ma-0 grey--text">{{ researchOutput.type }}</p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import Vue from 'vue';

Vue.component('report-header', {
  template: '#report-header',
});

export default {
  name: 'report-header',
  props: ['researchOutput'],
};
</script>
