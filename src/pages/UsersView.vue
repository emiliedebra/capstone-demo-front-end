<!-- UsersView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <user-delete-dialog></user-delete-dialog>
    <user-modify-dialog></user-modify-dialog>
    <div class="pt-3">
      <h6>Existing Users</h6>
      <user-list :outputs="users"></user-list>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import userModifyForm from '../components/forms/user-modify-form.vue';
import userModifyDialog from '../components/pop-up-dialogs/user-modify-dialog.vue';
import userDeleteDialog from '../components/pop-up-dialogs/user-delete-dialog.vue';
import userList from '../components/app-components/user-list.vue';
import { getUsers, getNodeName } from '../services/data-access-layer';

export default {
  name: 'user-view',
  data() {
    return {
      users: [],
    };
  },
   computed: {
    ...mapState({
      userContext: state => state.userContext,
    }),
  },
  components: {
    userModifyForm,
    userModifyDialog,
    userDeleteDialog,
    userList,
  },
  watch: {
    userContext(state) {
      if (state === null) {
        getUsers()
          .then((users) => {
            this.users = users.map(user => {
              getNodeName(user.node)
                .then((node) => {
                  user.nodeName = node;
                  user.accessLevelName = this.getAccessLevel(parseInt(user.accessLevel));
              })
              return user;
            })
          });
      }
    },
  },
  mounted() {
    // get reports to display in report-list
    getUsers()
      .then((users) => {
        this.users = users.map(user => {
          getNodeName(user.node)
          .then((node) => {
            user.nodeName = node;
            user.accessLevelName = this.getAccessLevel(parseInt(user.accessLevel));
          })
          return user;
        })
      });
    this.$store.dispatch('changeToolTip', 'New User');
  },
  methods: {
    getAccessLevel(accessLevel) {
      if (accessLevel === 0) {
        return 'Author';
      } else if (accessLevel === 1) {
        return 'CAIR Member';
      } else if (accessLevel === 2) {
        return 'Node Administrator';
      } else if (accessLevel === 3) {
        return 'Global Administrator';
      }
    },
  }
};
</script>
