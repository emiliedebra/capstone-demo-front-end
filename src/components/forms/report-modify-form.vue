<!-- report-modify-form -->

<template id="report-modify-form">
  <v-card class="text-xs-center"> 
    <report-modify-confirmation-dialog @modify="modify" @clear="clear"></report-modify-confirmation-dialog>
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
      <v-btn flat class="ma-0 pa-0" @click="confirmClear" v-if="clearButton">clear</v-btn>
    </v-container>

  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { contextState } from '../../state-machine';
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';
import reportModifyConfirmationDialog from '../pop-up-dialogs/report-modify-confirmation-dialog.vue';
import basicInfoExpander from '../expanders/basic-info-expander.vue';
import detailedInfoExpander from '../expanders/detailed-info-expander.vue';
import researchOutputContentExpander from '../expanders/research-output-content-expander.vue';
// import reportCreateFormHeader from './report-create-form-header';

export default {

  name: 'report-modify-form',
  props: ['report'],
  data() {
    return {
      clearButton: false,
    };
  },
  components: {
    reportModifyFormToolbar,
    reportModifyConfirmationDialog,
    basicInfoExpander,
    detailedInfoExpander,
    researchOutputContentExpander,
  },
  computed: {
    ...mapState({
      reportContext: state => state.reportContext,
    }),
  },
  watch: {
    reportContext(state) {
      if (state && state.state === contextState.CREATE) {
        this.clearButton = true;
      } else if (state && state.state === contextState.UPDATE) {
        this.clearButton = false;
      }
    },
  },
  methods: {
    // confirm clear before emitting clear
    confirmClear() {
      this.$store.dispatch('changeConfirmationDialog', contextState.CONFIRMCLEAR);
    },
    submit() {
      this.$emit('submit');
    },
    modify() {
      this.$emit('modify');
    },
    clear() {
      this.$refs.basicinfo.clear();
      this.$refs.detailedinfo.clear();
      this.$refs.researchinfo.clear();
    },
  },
};
</script>
