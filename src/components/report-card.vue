<!-- report-body.vue -->

<template id="report-card">
  <v-card>
    <report-header :researchOutput="item"></report-header>
    <report-body v-show="show" :body="item.additional_info"></report-body>
    <!-- TODO: Implement report-details -->
    <!-- <report-details></report-details> -->
    <report-button-panel @changeViewID="change" @toggleShowMsg="toggleShow"></report-button-panel>
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
    toggleShow() {
      this.show = !this.show;
    },

    change() {
      this.$store.dispatch('changeViewID', this.item.id);
    },
  },
};
</script>
