<!-- node-create-form -->

<template id="node-create-form">
  <v-card flat class="text-xs-center">
    <v-card flat fluid class="ml-3 mr-3">
      <v-form ref="nodecreateform" @clearReport="clear">
        <v-text-field label="Name" v-model="node.name" required>
        </v-text-field>
        <v-text-field label="Location" v-model="node.location" required>
        </v-text-field>
        <v-text-field label="Description" v-model="node.description">
        </v-text-field>
        <v-select :items="users" item-text="name" item-value="id" v-model="node.nodeAdmin" label="Node Administrator" autocomplete></v-select>
      </v-form>
    </v-card>
    <!-- Button Panel -->
    <v-container fixed grid-list-xs text-xs-center>
      <v-btn flat class="ma-0 pa-0" @click="submit">submit</v-btn>
      <v-btn flat class="ma-0 pa-0" @click="confirmClear">clear</v-btn>
    </v-container>
    <!-- Success Dialog -->
    <node-create-confirmation-dialog></node-create-confirmation-dialog>
    <node-confirm-clear-dialog @clear="clear"></node-confirm-clear-dialog>
  </v-card>
</template>

<script>
// import reportCreateFormToolbar from './report-create-form-toolbar';
// import { postNode } from '../../services/data-access';
import { getUsers, postNode } from '../../services/data-access-layer';
import { contextState } from '../../state-machine';
import nodeCreateConfirmationDialog from '../pop-up-dialogs/node-create-confirmation-dialog.vue';
import nodeConfirmClearDialog from '../pop-up-dialogs/node-confirm-clear-dialog.vue';

export default {

  name: 'node-create-form',
  data() {
    return {
      node: {
        name: '',
        location: '',
        description: '',
        nodeAdmin: null,
      },
      users: [],
    };
  },
  components: {
    // reportCreateFormToolbar,
    nodeCreateConfirmationDialog,
    nodeConfirmClearDialog,
  },
  created() {
    // fetch a list of users for nodeAdmin option
    getUsers()
      .then((users) => { this.users = users; });
  },
  methods: {
    clear() {
      // clear form data
      this.$refs.nodecreateform.reset();
      this.$store.dispatch('changeConfirmationDialog', null);
    },
    submit() {
      // post node data and on success clear form
      if (this.node.name && this.node.location && this.node.name !== '' && this.node.location !== '') { // checks validity
        postNode(this.node)
          .then(() => {
            const state = contextState.CREATENODE;
            this.$store.dispatch('changeReportContext', { id: null, state });
            this.$store.commit('changeAddContext', null);
            this.clear();
          });
      } else {
        this.$store.commit('changeConfirmationDialog', contextState.ERROR);
      }
    },
    confirmClear() {
      this.$store.dispatch('changeConfirmationDialog', contextState.CONFIRMNODECLEAR);
    },
  },
};
</script>
