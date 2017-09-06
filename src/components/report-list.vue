<!-- report-list.vue -->

<template id="report-list">
  <v-card>
    <v-card v-for="item in outputs" :key="item.title">
      <report-header :researchOutput="item"></report-header>
      <report-body v-show="show" :body="item.additional_info"></report-body>
      <!-- TODO: v-on not working -->
      <report-button-panel :show="show"></report-button-panel>
    </v-card>
  </v-card>
</template>

<script>
import Vue from 'vue';

Vue.component('report-list', {
  template: '#report-list',
});

export default {
  name: 'report-list',
  props: {
    outputs: {
      type: Array,
    },
  },
  data: () => ({
    show: false,
  }),
  components: {
    'report-header': () => import('./report-header.vue'),
    'report-body': () => import('./report-body.vue'),
    'report-button-panel': () => import('./report-button-panel.vue'),
  },
};
</script>
