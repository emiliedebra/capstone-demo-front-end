<!-- UsersView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <v-expansion-panel popout class="pa-0 pb-3">
      <v-expansion-panel-content>
        <div slot="header">Create New Account</div>
        <user-create-form></user-create-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-divider></v-divider>
    <div class="pt-2">
      <h6>Existing Users</h6>
      <user-list :outputs="users"></user-list>
    </div>
  </v-card>
</template>

<script>
import userCreateForm from '../components/forms/user-create-form.vue';
import userList from '../components/app-components/user-list.vue';
import { getUsers } from '../services/data';

export default {
  name: 'users',
  data() {
    return {
      users: [],
    };
  },
  components: {
    userCreateForm,
    userList,
  },
  mounted() {
    // NB: using local data
    // get reports to display in report-list
    getUsers()
      .then((users) => {
        this.users = users;
      });
  },

};
</script>
