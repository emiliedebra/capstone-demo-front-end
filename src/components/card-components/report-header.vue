<!-- report-header -->

<template id="report-header">
  <v-card flat>
    <v-card-text class="pb-0 mb-0">
      <div class="pa-0 ma-0 subheading">{{ researchOutput.title }}</div>
    </v-card-text>
    <v-card-text class="mt-0 pt-0 mb-0 pb-0">
      <v-layout row>
        <p class="pa-0 ma-0">{{ author_name }}</p>
        <p class="pa-0 ma-0 ml-2 mr-2 grey--text">|</p>
        <p class="pa-0 ma-0 grey--text">{{ publication_type_name }}</p>
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
import { mapState } from 'vuex';
import { getAuthorName, getPublicationType } from '../../services/data';
import { contextState } from '../../state-machine';

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
  },
  computed: {
    ...mapState({
      reportContext: state => state.reportContext,
    }),
  },
  watch: {
    reportContext(state) {
      if (state && state.state === contextState.VIEW) {
        getAuthorName(this.researchOutput.author).then((name) => { this.author_name = name; });
        getPublicationType(this.researchOutput.type).then((name) => { this.publication_type_name = name; });
      }
    },
  },
  created() {
    getAuthorName(this.researchOutput.author).then((name) => { this.author_name = name; });
    getPublicationType(this.researchOutput.type).then((name) => { this.publication_type_name = name; });
  },
};
</script>
