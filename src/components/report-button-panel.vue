<!-- report-button-panel.vue -->

<template id="report-button-panel">
<v-card flat>
  <v-layout row>
  <v-card flat class="text-xs-left">
  <v-btn small flat @click.native="toggleShow"> Abstract </v-btn>
  </v-card>
  <v-spacer></v-spacer>
  <v-card flat class="text-xs-right">
    <v-btn v-if="this.$store.getters.accessLevel > 0" small flat> Modify </v-btn>
    <v-btn v-if="this.$store.getters.accessLevel > 0" small flat> Delete </v-btn>
    <v-btn primary small flat @click.native="changeViewID"> View </v-btn>
  </v-card>
  </v-layout>
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
    changeViewID() {
      this.$emit('changeViewID');
      this.$router.push('./report');
    },
  },
};
</script>

