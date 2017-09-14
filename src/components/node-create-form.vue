<!-- user-create-form.vue -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
      <!-- <v-card-text> -->
      <form ref="nodecreateform" @clearReport="clear">
        <v-text-field label="Name" v-model="name">
        </v-text-field>
        <v-text-field label="Location" v-model="location">
        </v-text-field>
        <v-text-field label="Description" v-model="description">
        </v-text-field>
        <!-- TO DO: Change to a list of existing users (same as on research output) -->
        <v-text-field label="Node Administrator" v-model="nodeAdmin">
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
import { postNode } from '../utils/data-access';

export default {

  name: 'node-create-form',
  data() {
    return {
      name: '',
      location: '',
      description: '',
      nodeAdmin: '',
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
      postNode(this)
        .then(() => {
          this.clear();
        });
    },
  },
};
</script>
