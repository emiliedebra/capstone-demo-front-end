<!-- user-create-form.vue -->

<template id="research-output-content-expander">
  <v-card flat class="text-xs-center ml-0">
    <!-- Input Form -->
    <v-card flat fluid class="ml-2">
      <!-- <v-card-text> -->
      <!-- /<h6 class="text-xs-left">Add New User</h6> -->
      <v-form v-model="valid" ref="contentform">
        <v-text-field label="Enter Abstract Here" full-width multi-line v-model="abstract">
        </v-text-field>
        <v-divider></v-divider>
        <v-text-field label="Enter Content Here" multi-line full-width v-model="text">
        </v-text-field>
      </v-form>
      <!-- </v-card-text> -->
    </v-card>
  </v-card>
</template>

<script>
export default {

  name: 'research-output-content-expander',
  data() {
    return {
      valid: false,
      text: '',
      abstract: '',
    };
  },
  methods: {
    clear() {
      this.$refs.contentform.reset();
      this.text = '';
      this.abstract = '';
    },
    submit() {
      this.$emit(this.data);
    },
    watch: {
      clearReport() {
        if (this.$store.getters.clearReport === true) {
          this.clear();
        }
      },
    },
  },
};
</script>
