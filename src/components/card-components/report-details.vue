<!-- report-details -->

<template id="report-details">
  <v-card flat class="text-xs-right">
    <v-card-text v-show="show" class="pa-0 pr-3 caption">{{ details.proof_verified }}</v-card-text>
    <v-card-text v-show="show" class="pa-0 pr-3 caption">{{ details.proof_link }}</v-card-text>
    <v-card-text v-show="!show" class="pa-0 pr-3 caption">Not verified</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'report-details',
  props: ['details'],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    updateData() {
      // apply logic for verified information view
      if (this.$store.getters.accessLevel > 1) {
        if (this.details.proof_verified === false) {
          this.show = false;
        } else {
          this.show = true;
          this.details.proof_verified = 'Verified';
        }
      }
    },
  },
  mounted() {
    this.updateData();
  },
  watch: {
    details() {
      this.updateData();
    },
  },
};
</script>
