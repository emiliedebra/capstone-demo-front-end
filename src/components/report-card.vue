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
import reportHeader from './report-header.vue';
import reportBody from './report-body.vue';
import reportButtonPanel from './report-button-panel.vue';

export default {

  name: 'report-card',
  props: ['item'],
  data() {
    return {
      show: false,
    };
  },
  components: {
    reportHeader,
    reportBody,
    reportButtonPanel,
  },
  methods: {
    toggleShowEvent() {
      this.show = !this.show;
    },
  },
};
</script>
