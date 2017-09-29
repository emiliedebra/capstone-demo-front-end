<!-- report-header -->

<template id="report-header">
  <v-card flat class="pt-2 pb-2 pl-2">
    <!-- <v-card-text class="pb-0 mb-0"> -->
    <div class="subheading">{{ researchOutput.title }}</div>
    <!-- </v-card-text> -->
    <v-container fluid class="ma-0 pa-0">
      <v-layout row>
        <p class="pa-0 ma-0">{{ author_name }}</p>
        <p class="pa-0 ma-0 ml-2 mr-2 grey--text">|</p>
        <p class="pa-0 ma-0 grey--text">{{ publication_type_name }}</p>
        <p class="pa-0 ma-0 ml-2 grey--text">|</p>
        <p class="pa-0 ma-0 ml-2 grey--text">{{ researchOutput.publication_year }}</p>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { getAuthorName, getPublicationType } from '../../services/data';
import { isEmpty } from '../../utils/data-utils';

export default {
  name: 'report-header',
  props: ['researchOutput'],
  data() {
    return {
      author_name: '',
      publication_type_name: '',
    };
  },
  methods: {
    toggleShow() {
      // toggle abstract
      this.$emit('toggleShowMsg', !this.show);
    },
    fetchData() {
      // NOTE: Should this be done on the backend?
      if (this.researchOutput) {
        if (!isEmpty(this.researchOutput.author)) {
          getAuthorName(this.researchOutput.author)
            .then((name) => { this.author_name = name; });
        }
        if (!isEmpty(this.researchOutput.type)) {
          getPublicationType(this.researchOutput.type)
            .then((name) => { this.publication_type_name = name; });
        }
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    researchOutput() {
      this.fetchData();
    },
  },
};
</script>
