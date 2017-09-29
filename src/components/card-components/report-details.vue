<!-- report-details -->

<template id="report-details">
  <v-card flat class="text-xs-left">
    <v-card-text class="pa-0 pl-3 caption">{{ details.proof_verified }}</v-card-text>
    <v-card-text class="pa-0 pl-3 caption">{{ details.proof_link }}</v-card-text>
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
};
</script>
