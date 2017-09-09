<!-- report-header.vue -->

<template id="report-header">
  <v-card flat>
    <v-card-title class="pb-0 mb-0">
      <div>
        <div class="headline">
          <v-layout row>
            <h6 class="pa-0 ma-0">{{ researchOutput.title }}</h6>
          </v-layout>
        </div>
        <p class="pa-0 ma-0">{{ researchOutput.author }}</p>
        <v-layout row>
          <p class="pa-0 ma-0 grey--text">{{ researchOutput.type }}</p>
          <p class="pa-0 ma-0 ml-2 grey--text">|</p>
          <p class="pa-0 ma-0 ml-2 grey--text">{{ researchOutput.publication_year }}</p>
        </v-layout>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'report-header',
  props: ['researchOutput'],
};
</script>
