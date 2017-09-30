<!-- UsersView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <user-delete-dialog></user-delete-dialog>
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
import userDeleteDialog from '../components/pop-up-dialogs/user-delete-dialog.vue';
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
    userDeleteDialog,
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
