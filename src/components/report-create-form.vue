<!-- report-body.vue -->

<template id="report-create-form">
<v-card class="text-xs-center">
  
  <author-create-dialog></author-create-dialog>
  <report-create-form-toolbar slot="header" @close="close"></report-create-form-toolbar>
  <!-- Input Form -->
  <!-- REFACTOR to expansion panels rather -->
  <v-card flat fluid class="ma-3 pa-0">
      <h6 class="text-xs-left">New Research Output</h6>
      <v-card-text class="ma-0 pa-0">
        <v-expansion-panel invert class="ma-0 pa-0">
          <v-expansion-panel-content>
            <div slot="header">Basic Information</div>
            <basic-info-expander ref="basicinfo" :clear="clear"></basic-info-expander>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Research Output Content</div>
            <research-output-content-expander ref="researchinfo"></research-output-content-expander>
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
import reportCreateFormToolbar from './report-create-form-toolbar';
import authorCreateDialog from './author-create-dialog';
import basicInfoExpander from './basic-info-expander';
import researchOutputContentExpander from './research-output-content-expander';
// import reportCreateFormHeader from './report-create-form-header';
import { postResearchOutput } from '../utils/data-access';

export default {

  name: 'report-create-form',
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    reportCreateFormToolbar,
    authorCreateDialog,
    basicInfoExpander,
    researchOutputContentExpander,
  },
  methods: {
    clear() {
      this.$refs.basicinfo.clear();
      this.$refs.researchinfo.clear();
    },
    close() {
      this.clear();
      this.changeAddReportDialog();
    },
    submit() {
      postResearchOutput(this)
        .then(() => {
          this.close();
        });
    },
    changeAddReportDialog() {
      this.$store.dispatch('changeAddReportDialog');
    },
    changeAddAuthorDialog() {
      this.$store.dispatch('changeAddAuthorDialog');
    },
  },
};
</script>
