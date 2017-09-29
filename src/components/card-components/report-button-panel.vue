<!-- report-button-panel -->

<template id="report-button-panel">
<v-card flat>
  <v-layout row>
  <v-card flat class="text-xs-left">
  </v-card>
  <v-spacer></v-spacer>
  <v-card flat class="text-xs-right">
    <v-btn v-show="this.$store.getters.buttonDetails" class="pr-0 mr-0" small flat @click.native="modifyReport">
      Modify</v-btn>
    <v-btn v-show="this.$store.getters.buttonDetails" class="pl-0 ml-0 mr-0 pr-0" small flat @click.native="deleteReport">
      Delete</v-btn>
    <v-btn class="ml-0 pl-0" primary small flat @click.native="changeReportContext">
      View</v-btn>
  </v-card>
  </v-layout>
</v-card>
</template>

<script>
import reportModifyDialog from '../pop-up-dialogs/report-modify-dialog.vue';
import { contextState } from '../../state-machine';

export default {
  name: 'report-button-panel',
  methods: {
    changeReportContext() {
      // change report context to deal with view and push to report page
      this.$emit('changeReportContext', contextState.VIEW);
      this.$router.push('./report');
    },
    deleteReport() {
      // change report context to deal with delete
      this.$emit('changeReportContext', contextState.DELETE);
    },
    modifyReport() {
      // change report context to deal with update
      this.$emit('changeReportContext', contextState.UPDATE);
    },
  },
  components: {
    reportModifyDialog,
  },
};
</script>

