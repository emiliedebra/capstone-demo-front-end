<!-- report-body.vue -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
      <!-- <v-card-text> -->
      <h6 class="text-xs-left">New User</h6>
      <form ref="createform" @clearReport="clear">
        <v-text-field label="First Name" v-model="first">
        </v-text-field>
        <v-text-field label="Last Name" v-model="last">
        </v-text-field>
        <v-text-field label="Email" required type="email" v-model="email">
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
import reportCreateFormToolbar from './report-create-form-toolbar';
// import reportCreateFormHeader from './report-create-form-header';
import { postUser } from '../utils/data-access';

export default {

  name: 'user-create-form',
  data() {
    return {
      first: '',
      last: '',
      email: '',
    };
  },
  components: {
    reportCreateFormToolbar,
  },
  methods: {
    clear() {
      this.$refs.createform.reset();
      this.first = '';
      this.last = '';
      this.email = '';
    },
    toggleDialog() {
      this.clear();
      this.$emit('toggle');
    },
    submit() {
      postUser(this)
        .then(() => {
          this.toggleDialog();
        });
    },
  },
};
</script>
