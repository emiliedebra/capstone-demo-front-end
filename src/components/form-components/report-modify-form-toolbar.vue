<!-- report-modify-form-toolbar -->

<template id="report-modify-form-toolbar">

  <v-system-bar card fixed window>
    <div class="subheading">{{ title }}</div>
    <v-spacer></v-spacer> <!-- NB: places close button to the right -->
    <v-btn icon @click.native="close">
      <v-icon class="text-xs-center">close</v-icon>
    </v-btn>
  </v-system-bar>

</template>

<script>
import { mapState } from 'vuex';
import { contextState } from '../../state-machine';

export default {
  name: 'report-modify-form-toolbar',
  data() {
    return {
      title: '',
    };
  },
  computed: {
    ...mapState({
      reportContext: state => state.reportContext,
    }),
  },
  watch: {
    reportContext(state) {
      if (state && state.state === contextState.CREATE) {
        this.title = 'New Research Output';
      } else if (state && state.state === contextState.UPDATE) {
        this.title = 'Modify Research Output';
      }
    },
  },
  methods: {
    close() {
      // fire report-modify-dialog to close
      this.$emit('close');
    },
  },
};
</script>
