<!-- report-modify-form -->

<template id="report-modify-form">
  <v-card class="text-xs-center">
    <author-create-dialog></author-create-dialog>

    <!-- Input Form -->
    <v-card flat fluid class="mt-0 ml-3 mr-3 pa-0 pt-4">
        <v-card-text class="ma-0 pa-0">
          <v-expansion-panel invert class="ma-0 pa-0">
            <v-expansion-panel-content>
              <div slot="header">Basic Information</div>
              <basic-info-expander ref="basicinfo" :report="report"></basic-info-expander>
            </v-expansion-panel-content>
            <v-expansion-panel-content v-show="this.$store.getters.showDetails">
              <div slot="header">Detailed Information</div>
              <detailed-info-expander ref="detailedinfo" :report="report"></detailed-info-expander>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Research Output Content</div>
              <research-output-content-expander ref="researchinfo" :report="report"></research-output-content-expander>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card-text>
    </v-card>
    <!-- Button Panel -->
    <v-container slot="footer" fixed grid-list-xs text-xs-center>
      <v-btn flat class="ma-0 pa-0" @click="submit">submit</v-btn>
      <v-btn flat class="ma-0 pa-0" @click="clear">clear</v-btn>
    </v-container>

  </v-card>
</template>

<script>
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';
import authorCreateDialog from '../pop-up-dialogs/author-create-dialog.vue';
import basicInfoExpander from '../expanders/basic-info-expander.vue';
import detailedInfoExpander from '../expanders/detailed-info-expander.vue';
import researchOutputContentExpander from '../expanders/research-output-content-expander.vue';
// import reportCreateFormHeader from './report-create-form-header';

export default {

  name: 'report-modify-form',
  props: ['report'],
  data() {
    return {
      // don't need
    };
  },
  components: {
    reportModifyFormToolbar,
    authorCreateDialog,
    basicInfoExpander,
    detailedInfoExpander,
    researchOutputContentExpander,
  },
  methods: {
    clear() {
      // clear form data
      this.$refs.basicinfo.clear();
      this.$refs.detailedinfo.clear();
      this.$refs.researchinfo.clear();
    },
    close() {
      // clear data
      this.clear();
    },
    submit() {
      // NB: an attempt to implement submitting a new report
      this.$emit('submit');
    },
    changeAddAuthorDialog() {
      // NB: not yet implemented
      // toggle author-create-dialog
      this.$store.dispatch('changeAddAuthorDialog');
    },
  },
};
</script>
