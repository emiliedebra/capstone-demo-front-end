<!-- user-create-form.vue -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
    <div class="ma-0 pa-0">
      <v-radio-group v-model="admin" :mandatory="false">
        <v-radio label="Node Administrator" value="node"></v-radio>
        <v-radio label="Global Administrator" value="global"></v-radio>
        <v-radio label="CAIR Member" value="cair"></v-radio>
      </v-radio-group>
    </div>
      <!-- <v-card-text> -->
      <!-- /<h6 class="text-xs-left">Add New User</h6> -->
      <v-form ref="createform" @clearReport="clear">
        <v-text-field label="First Name" v-model="first">
        </v-text-field>
        <v-text-field label="Last Name" v-model="last">
        </v-text-field>
        <v-text-field label="Email" :rules="emailRules" required type="email" v-model="email">
        </v-text-field>
      </v-form>
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
import { postUser } from '../utils/data-access';

export default {

  name: 'user-create-form',
  data() {
    return {
      valid: false,
      first: '',
      last: '',
      email: '',
      admin: 'cair',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
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
    submit() {
      postUser(this)
        .then(() => {
          this.clear();
        });
    },
  },
};
</script>
