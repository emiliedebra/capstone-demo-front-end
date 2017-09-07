<!-- report-button-panel.vue -->

<template id="report-button-panel">
  <v-card flat class="text-xs-right">
    <v-btn small flat @click.native="toggleShow"> Abstract </v-btn>
    <v-btn primary small flat to="/report"> View </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'report-button-panel',
  props: ['show'],

  methods: {
    toggleShow() {
      this.$emit('toggleShowMsg', !this.show);
    },
  },
};
</script>

