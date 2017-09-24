<!-- node-create-form -->

<template id="user-create-form">
  <v-card flat class="text-xs-center">
    <v-card flat fluid class="ma-3">
      <form ref="nodecreateform" @clearReport="clear">
        <v-text-field label="Name" v-model="name">
        </v-text-field>
        <v-text-field label="Location" v-model="location">
        </v-text-field>
        <v-text-field label="Description" v-model="description">
        </v-text-field>
        <v-select :items="users" item-text="name" item-value="id" v-model="nodeAdmin" label="Node Administrator" autocomplete></v-select>
      </form>
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
import { postNode } from '../../services/data-access';
import { getUsers } from '../../services/data';

export default {

  name: 'node-create-form',
  data() {
    return {
      name: '',
      location: '',
      description: '',
      nodeAdmin: 0,
      users: [],
    };
  },
  components: {
    // reportCreateFormToolbar,
  },
  created() {
    // fetch a list of users for nodeAdmin option
    this.users = getUsers();
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
      postNode(this.data)
        .then(() => {
          this.clear();
        });
    },
  },
};
</script>
