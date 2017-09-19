<!-- user-create-form.vue -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
    <div class="ma-0 pa-0">
      <v-radio-group hide-details v-model="accessLevel" :mandatory="false">
        <v-radio label="Node Administrator" value="2"></v-radio>
        <v-radio label="Global Administrator" value="3"></v-radio>
        <v-radio label="CAIR Member" value="1"></v-radio>
      </v-radio-group>
    </div>
      <!-- <v-card-text> -->
      <!-- /<h6 class="text-xs-left">Add New User</h6> -->
      <v-form ref="createform" @clearReport="clear">
        <v-text-field label="First Name" v-model="first_name">
        </v-text-field>
        <v-text-field label="Last Name" v-model="last_name">
        </v-text-field>
        <v-text-field label="Email" :rules="emailRules" required type="email" v-model="email">
        </v-text-field>
        
        <v-select v-if="accessLevel == 2" required :items="nodes" item-text="name" item-value="id" v-model="node" label="Node" autocomplete></v-select>

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
      first_name: '',
      last_name: '',
      email: '',
      accessLevel: '2',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      node: 0,
      nodes: [
        { id: 1, name: 'UCT' },
        { id: 2, name: 'Wits' },
      ],
    };
  },
  components: {
    reportCreateFormToolbar,
  },
  methods: {
    clear() {
      this.$refs.createform.reset();
      this.first_name = '';
      this.last_name = '';
      this.email = '';
      this.accessLevel = 0;
      this.node = 0;
    },
    submit() {
      postUser(this.data)
        .then(() => {
          this.clear();
        });
    },
  },
};
</script>
