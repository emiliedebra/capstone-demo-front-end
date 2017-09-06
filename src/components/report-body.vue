<template id="report-body">
  <v-card-text>{{ researchOutput.additional_info }}</v-card-text>
</template>

<script>
import Vue from 'vue';

Vue.component('report-body', {
  template: '#report-body',
});

export default {
  name: 'report-body',
  props: ['researchOutput'],
};
</script>
