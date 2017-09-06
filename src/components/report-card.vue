<!-- report-body.vue -->

<template id="report-card">
  <v-card>
    <report-header :researchOutput="item"></report-header>
    <report-body v-show="show" :body="item.additional_info"></report-body>
    <!-- TODO: v-on not working -->
    <report-button-panel @toggleShowEvent="toggleShowEvent"></report-button-panel>
  </v-card>
</template>

<script>
export default {
  name: 'report-card',
  props: ['item'],
  data() {
    return {
      show: false,
    };
  },
  components: {
    'report-header': () => import('./report-header.vue'),
    'report-body': () => import('./report-body.vue'),
    'report-button-panel': () => import('./report-button-panel.vue'),
  },
  methods: {
    toggleShowEvent() {
      this.show = !this.show;
    },
  }
};
</script>
