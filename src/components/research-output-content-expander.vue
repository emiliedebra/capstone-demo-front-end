<!-- user-create-form.vue -->

<template id="research-output-content-expander">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
      <!-- <v-card-text> -->
      <!-- /<h6 class="text-xs-left">Add New User</h6> -->
      <v-form v-model="valid" ref="createform" @clearReport="clear">
        <v-text-field label="Abstract" multi-line full-width v-model="abstract">
        </v-text-field>
        <v-text-field label="Research Output Content" multi-line full-width v-model="text">
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
      text: 'Needs Work',
      abstract: 'Needs Work',
    };
  },
  methods: {
    clear() {
      this.$refs.createform.reset();
      this.text = '';
      this.abstract = '';
    },
    submit() {
      this.$emit(this.data);
    },
  },
};
</script>
