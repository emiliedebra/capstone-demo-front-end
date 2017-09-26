<!-- detailed-info-expander -->

<template id="detailed-info-expander">
  <v-card flat class="text-xs-center">
    <v-card flat fluid class="ml-3">
      <v-form ref="detailedinfo">
        <v-checkbox hide-details class= "ma-0 pa-0" label="Proof of Verification" v-model="report.proof_verified">
        </v-checkbox>
        <v-text-field class="mt-0 pr-3" label="Proof of Verification Link" v-model="report.proof_link">
        </v-text-field>
      </v-form>
    </v-card>
  </v-card>
</template>

<script>
export default {

  name: 'detailed-info-expander',
  props: ['report'],
  data() {
    return {
      proof_verified: false,
      proof_link: '',
    };
  },
  methods: {
    clear() {
      // clear form data
      this.$refs.detailedinfo.reset();
    },
    submit() {
      // send data to report-modify-dialog
      this.$emit(this.data);
    },
  },
  watch: {
    clearReport() {
      // watch global state to call local method
      if (this.$store.getters.clearReport === true) {
        this.clear();
      }
    },
  },
};
</script>
