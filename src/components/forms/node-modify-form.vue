<!-- node-modify-form -->

<template id="node-modify-form">
  <v-card flat class="text-xs-center">
    <!-- Dialogs -->
    <node-modify-confirmation-dialog @modify="modify" @clear="clear"></node-modify-confirmation-dialog>
    <node-confirm-clear-dialog @clear="clear"></node-confirm-clear-dialog>
    <!-- Form Input -->
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
      <v-btn flat class="ma-0 pa-0" @click="confirmClear" v-if="clearButton">clear</v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { getUsers } from '../../services/data-access-layer';
import { contextState } from '../../state-machine';
import nodeModifyConfirmationDialog from '../pop-up-dialogs/node-modify-confirmation-dialog.vue';
import nodeConfirmClearDialog from '../pop-up-dialogs/node-confirm-clear-dialog.vue';

export default {
  name: 'node-modify-form',
  props: ['node'],
  data() {
    return {
      users: [],
      clearButton: false,
    };
  },
  components: {
    nodeModifyConfirmationDialog,
    nodeConfirmClearDialog,
  },
  created() {
    /*
    ** fetch a list of users for nodeAdmin option
    */
    getUsers()
      .then((users) => {
        this.users = users.map((u) => {
          u.name = `${u.first_name} ${u.last_name}`;
          return u;
        });
      });
  },
  computed: {
    ...mapState({
      nodeContext: state => state.nodeContext,
    }),
  },
  watch: {
    nodeContext(state) {
      /*
      ** Hide or show clear button based on context state
      */
      if (state && state.state === contextState.CREATE) {
        this.clearButton = true;
      } else if (state && state.state === contextState.UPDATE) {
        this.clearButton = false;
      }
    },
  },
  methods: {
    confirmClear() {
      /*
      ** show confirmation clear dialog
      */
      this.$store.dispatch('changeConfirmationDialog', contextState.CONFIRMNODECLEAR);
    },
    clear() {
      /*
      ** clear form data
      ** reset confirmation dialog
      */
      this.$refs.nodecreateform.reset();
      this.$store.dispatch('changeConfirmationDialog', null);
    },
    submit() {
      // fire parent submit
      this.$emit('submit');
    },
    modify() {
      // fire parent submit
      this.$emit('modify');
    },
  },
};
</script>
