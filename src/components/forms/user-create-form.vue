<!-- user-create-form -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <user-create-confirmation-dialog></user-create-confirmation-dialog>
    <user-confirm-clear-dialog @clear="clear"></user-confirm-clear-dialog>
    <!-- Input Form -->
    <v-card flat fluid class="ml-3 mr-3">
      <v-form ref="createform">
        <!-- Access Levels -->
        <div class="ma-0 pa-0">
          <v-radio-group hide-details v-model="user.accessLevel" :mandatory="false">
            <v-radio label="Global Administrator" value="3"></v-radio>
            <v-radio label="Node Administrator" value="2"></v-radio>
            <v-radio label="CAIR Member" value="1"></v-radio>
          </v-radio-group>
        </div>
        <!-- Personal Info -->
        <v-text-field label="First Name" required v-model="user.first_name">
        </v-text-field>
        <v-text-field label="Last Name" required v-model="user.last_name">
        </v-text-field>
        <v-text-field label="Email" :rules="emailRules" required type="email" v-model="user.email">
        </v-text-field>
        <v-select v-if="user.accessLevel == 2" required :items="nodes" item-text="name" item-value="id" v-model="user.node" label="Node" autocomplete></v-select>
      </v-form>
    </v-card>
    <!-- Button Panel -->
    <v-container fixed grid-list-xs text-xs-center>
      <v-btn flat class="ma-0 pa-0" @click="submit">submit</v-btn>
      <v-btn flat class="ma-0 pa-0" @click="confirmClear">clear</v-btn>
    </v-container>
  </v-card>
</template>

<script>
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';
import userCreateConfirmationDialog from '../pop-up-dialogs/user-create-confirmation-dialog.vue';
import userConfirmClearDialog from '../pop-up-dialogs/user-confirm-clear-dialog.vue';
import { contextState } from '../../state-machine';
import { postUser, getNodes } from '../../services/data-access-layer';

export default {

  name: 'user-create-form',
  data() {
    return {
      valid: false,
      user: {
        first_name: '',
        last_name: '',
        email: '',
        accessLevel: 0,
      },
      node: null,
      // NB: hard-coded
      nodes: [],
      // RULES
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  components: {
    reportModifyFormToolbar,
    userCreateConfirmationDialog,
    userConfirmClearDialog,
  },
  methods: {
    clear() {
      // clear form data
      this.$refs.createform.reset();
      this.$store.dispatch('changeConfirmationDialog', null);
    },
    submit() {
      // post new user data and on success, clear
      const valid = (this.user.email && this.user.first_name && this.user.last_name);
      if (valid && this.user.email !== '' && this.user.first_name !== '' && this.user.last_name !== '') { // validation
        const user = {
          name: `${this.user.first_name} ${this.user.last_name}`,
          email: this.user.email,
          accessLevel: parseInt(this.user.accessLevel, [10]), // convert to int
          node: this.user.node,
        };
        postUser(user)
          .then(() => {
            const state = contextState.CREATEUSER;
            this.$store.dispatch('changeReportContext', { id: null, state });
            this.$store.commit('changeAddContext', null);
            this.clear();
          });
      } else {
        this.$store.commit('changeConfirmationDialog', contextState.ERROR);
      }
    },
    confirmClear() {
      this.$store.dispatch('changeConfirmationDialog', contextState.CONFIRMUSERCLEAR);
    },
  },
  mounted() {
    getNodes()
      .then((nodes) => { this.nodes = nodes; });
  },
};
</script>
