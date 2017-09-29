<!-- UsersView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <!-- <v-expansion-panel class="pa-0 mb-3">
      <v-expansion-panel-content>
        <div slot="header">Create New Account</div>
        <user-create-form></user-create-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-divider></v-divider> -->
    <user-create-dialog></user-create-dialog>
    <div class="pt-3">
      <h6>Existing Users</h6>
      <user-list :outputs="users"></user-list>
    </div>
  </v-card>
</template>

<script>
import userCreateForm from '../components/forms/user-create-form.vue';
import userCreateDialog from '../components/pop-up-dialogs/user-create-dialog.vue';
import userList from '../components/app-components/user-list.vue';
import { getUsers } from '../services/data-access-layer';

export default {
  name: 'user-view',
  data() {
    return {
      users: [],
    };
  },
  components: {
    userCreateForm,
    userCreateDialog,
    userList,
  },
  mounted() {
    // NB: using local data
    // get reports to display in report-list
    getUsers()
      .then((users) => {
        this.users = users;
      });
    this.$store.dispatch('changeToolTip', 'New User');
  },

};
</script>
