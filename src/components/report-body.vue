<!-- report-body.vue -->

<template id="report-body">
  <v-card-text>{{ body }}</v-card-text>
</template>

<script>
import Vue from 'vue';

Vue.component('report-body', {
  template: '#report-body',
});

export default {
  name: 'report-body',
  props: ['body'],
};
</script>
