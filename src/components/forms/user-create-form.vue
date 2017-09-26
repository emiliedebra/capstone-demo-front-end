<!-- user-create-form -->

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
      <v-form ref="createform" @clearReport="clear">
        <v-text-field label="First Name" v-model="user.first_name">
        </v-text-field>
        <v-text-field label="Last Name" v-model="user.last_name">
        </v-text-field>
        <v-text-field label="Email" :rules="emailRules" required type="email" v-model="user.email">
        </v-text-field>
        
        <v-select v-if="accessLevel == 2" required :items="nodes" item-text="name" item-value="id" v-model="node" label="Node" autocomplete></v-select>

      </v-form>
    </v-card>
    <!-- Button Panel -->
    <v-container fixed grid-list-xs text-xs-center>
      <v-btn flat class="ma-0 pa-0" @click="submit">submit</v-btn>
      <v-btn flat class="ma-0 pa-0" @click="clear">clear</v-btn>
    </v-container>
  </v-card>
</template>

<script>
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';
import { postUser } from '../../services/data';

export default {

  name: 'user-create-form',
  data() {
    return {
      valid: false,
      user: {
        first_name: '',
        last_name: '',
        email: '',
      },
      accessLevel: null,
      node: null,
      // NB: hard-coded
      nodes: [
        { id: 1, name: 'UCT' },
        { id: 2, name: 'Wits' },
      ],
      // RULES
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  components: {
    reportModifyFormToolbar,
  },
  methods: {
    clear() {
      // clear form data
      this.$refs.createform.reset();
    },
    submit() {
      // NB: not yet implemented
      // post new user data and on success, clear
      const user = {
        name: `${this.user.first_name} ${this.user.last_name}`,
        email: this.email,
      }
      postUser(user)
        .then(() => {
          this.clear();
        });
    },
  },
};
</script>
