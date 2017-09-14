<!-- report-header.vue -->

<template id="report-header">
  <v-card flat>
    <v-card-text class="pb-0 mb-0">
      <div class="pa-0 ma-0 subheading">{{ researchOutput.title }}</div>
    </v-card-text>
    <v-card-text class="mt-0 pt-0 mb-0 pb-0">
      <v-layout row>
        <p class="pa-0 ma-0">{{researchOutput.Author_First_Name}} {{researchOutput.Author_Last_Name}}</p>
        <p class="pa-0 ma-0 ml-2 mr-2 grey--text">|</p>
        <p class="pa-0 ma-0 grey--text">{{ researchOutput.type }}</p>
        <p class="pa-0 ma-0 ml-2 grey--text">|</p>
        <p class="pa-0 ma-0 ml-2 grey--text">{{ researchOutput.publication_year }}</p>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'report-header',
  props: ['researchOutput'],
};
</script>
