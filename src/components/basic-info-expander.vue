<!-- user-create-form.vue -->

<template id="basic-info-expander">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
      <!-- <v-card-text> -->
      <!-- /<h6 class="text-xs-left">Add New User</h6> -->
      <v-form v-model="valid" ref="basicinfo">
        <v-text-field label="Title" v-model="title">
        </v-text-field>
        <v-text-field label="Author" v-model="author">
        </v-text-field>
        <v-text-field label="Co-author" v-model="coauthor">
        </v-text-field>
      </v-form>
      <!-- </v-card-text> -->
    </v-card>
  </v-card>
</template>

<script>
export default {

  name: 'basic-info-expander',
  data() {
    return {
      valid: false,
      title: '',
      author: '',
      coauthor: '',
    };
  },
  methods: {
    clear() {
      this.$refs.basicinfo.reset();
      this.title = '';
      this.author = '';
      this.coauthor = '';
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
