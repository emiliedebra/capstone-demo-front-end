<!-- report-header -->

<template id="report-header">
  <v-card flat>
    <v-card-text class="pb-0 mb-0">
      <div class="pa-0 ma-0 subheading">{{ researchOutput.title }}</div>
    </v-card-text>
    <v-card-text class="mt-0 pt-0 mb-0 pb-0">
      <v-layout row>
        <p class="pa-0 ma-0">{{researchOutput.author }}</p>
        <p class="pa-0 ma-0 ml-2 mr-2 grey--text">|</p>
        <p class="pa-0 ma-0 grey--text">{{ researchOutput.type }}</p>
        <p class="pa-0 ma-0 ml-2 grey--text">|</p>
        <p class="pa-0 ma-0 ml-2 grey--text">{{ researchOutput.publication_year }}</p>
        <p v-if="this.$route.name !== 'Report'" class="pa-0 ma-0 ml-2 grey--text">|</p>
        <v-btn-toggle v-if="this.$route.name !== 'Report'" class="pa-0 ma-0 ml-2" small @click.native="toggleShow"> 
          View Abstract
        </v-btn-toggle>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'report-header',
  props: ['researchOutput'],
  methods: {
    toggleShow() {
      // toggle abstract
      this.$emit('toggleShowMsg', !this.show);
    },
  },
};
</script>
