<!-- node-create-form -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <v-card flat fluid class="ma-3">
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
      <v-btn flat class="ma-0 pa-0" @click="clear">clear</v-btn>
    </v-container>
    <node-create-dialog></node-create-dialog>
  </v-card>
</template>

<script>
// import reportCreateFormToolbar from './report-create-form-toolbar';
// import { postNode } from '../../services/data-access';
import { getUsers, postNode } from '../../services/data';
import { contextState } from '../../state-machine';
import nodeCreateDialog from '../pop-up-dialogs/node-create-dialog.vue';

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
    nodeCreateDialog,
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
    },
    toggleDialog() {
      // NB: not used
      // fire clear on dialog-toggle
      this.clear();
    },
    submit() {
      // NB: not yet implemented
      // post node data and on success clear form
      if (this.node.name !== '' || this.node.location !== '') {
        postNode(this.node)
          .then(() => {
            const state = contextState.CREATENODE;
            this.$store.dispatch('changeReportContext', { id: null, state });
            this.clear();
          });
      } else {
        this.$store.commit('changeConfirmationDialog', contextState.ERROR);
      }
    },
  },
};
</script>
