<!-- report-body.vue -->

<template id="report-card">
  <v-card flat>
    <v-container fluid class="ma-0 pa-0">
      <v-layout row grid-xs-left>
        <v-flex xs10>
          <report-header :researchOutput="item"></report-header>
        </v-flex>
        <v-flex xs3 mt-3 grid-xs-right>
          <report-details v-if="this.$store.getters.showDetails" :details="item"></report-details>
        </v-flex>
      </v-layout>
    </v-container>
    <report-body v-show="show" :body="item.additional_info"></report-body>
    <!-- TODO: Implement logic to display this -->
    <report-button-panel @changeViewID="change" @toggleShowMsg="toggleShow"></report-button-panel>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
import reportHeader from './report-header.vue';
import reportBody from './report-body.vue';
import reportButtonPanel from './report-button-panel.vue';
import reportDetails from './report-details.vue';

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
    reportDetails,
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
