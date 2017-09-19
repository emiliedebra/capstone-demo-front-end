<!-- user-create-form.vue -->

<template id="detailed-info-expander">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ml-3">
      <v-form v-model="valid" ref="detailedinfo">
        <v-checkbox hide-details class= "ma-0 pa-0" label="Proof of Verification" v-model="proof_verified">
        </v-checkbox>
        <v-text-field class="mt-0 pr-3" label="Proof of Verification Link" v-model="proof_link">
        </v-text-field>
      </v-form>
    </v-card>
  </v-card>
</template>

<script>
export default {

  name: 'detailed-info-expander',
  data() {
    return {
      valid: false,
      proof_verified: false,
      proof_link: '',
    };
  },
  methods: {
    clear() {
      this.$refs.detailedinfo.reset();
      this.proof_link = '';
      this.proof_verified = false;
    },
    submit() {
      this.$emit(this.data);
    },
  },
  watch: {
    clearReport() {
      if (this.$store.getters.clearReport === true) {
        this.clear();
      }
    },
  },
};
</script>
