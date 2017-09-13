<!-- user-create-form.vue -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
      <!-- <v-card-text> -->
      <h6 class="text-xs-left">Add New Node</h6>
      <form ref="nodecreateform" @clearReport="clear">
        <v-text-field label="Name" v-model="name">
        </v-text-field>
        <v-text-field label="Area" v-model="area">
        </v-text-field>
        <v-text-field label="Code" required v-model="code">
        </v-text-field>
      </form>
      <!-- </v-card-text> -->
    </v-card>
    <!-- Button Panel -->
    <v-container fixed grid-list-xs text-xs-center>
      <v-btn flat class="ma-0 pa-0" @click="submit">submit</v-btn>
      <v-btn flat class="ma-0 pa-0" @click="clear">clear</v-btn>
    </v-container>
  </v-card>
</template>

<script>
// import reportCreateFormToolbar from './report-create-form-toolbar';
// import { postUser } from '../utils/data-access';

export default {

  name: 'node-create-form',
  data() {
    return {
      name: '',
      area: '',
      code: '',
    };
  },
  components: {
    // reportCreateFormToolbar,
  },
  methods: {
    clear() {
      this.$refs.nodecreateform.reset();
      this.name = '';
      this.code = '';
      this.area = '';
    },
    toggleDialog() {
      this.clear();
    },
    submit() {
      // not yet implemented
      this.clear();
    },
  },
};
</script>
