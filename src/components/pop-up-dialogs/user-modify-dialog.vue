<!-- user-modify-dialog -->

<template>
  <v-card>
    <v-dialog v-model="showDialog" persistent width="800">
      <user-modify-form-toolbar @close="clear"></user-modify-form-toolbar>
      <user-modify-form :user="user" ref="form" @submit="submit" @modify="modify"></user-modify-form>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { contextState, modalState } from '../../state-machine';
import { newUser, getUser, updateUser, postUser } from '../../services/data-access-layer';
import userModifyForm from '../forms/user-modify-form.vue';
import userModifyFormToolbar from '../form-components/user-modify-form-toolbar.vue';

export default {
  name: 'user-modify-dialog',
  data() {
    return {
      user: newUser(),
    };
  },
  components: {
    userModifyForm,
    userModifyFormToolbar,
  },
  computed: {
    ...mapState({
      showDialog: state => state.modalDialog === modalState.MODIFYUSER,
      userContext: state => state.userContext,
    }),
  },
  watch: {
    userContext(state) {
      if (state && state.state === contextState.UPDATE) {
        // fetch user when updating
        getUser(state.id)
          .then((user) => {
            const level = (typeof user.accessLevel !== 'string') ? user.accessLevel.toString(10) : user.accessLevel;
            this.user = user;
            this.user.accessLevel = level;
          });
      } else if (state && state.state === contextState.CREATE) {
        // create new user when creating
        this.user = newUser();
      }
    },
  },
  methods: {
    submit() {
      // check validity before submitting
      const valid = (this.user.email && this.user.first_name && this.user.last_name);
      if (valid && this.user.email !== '' && this.user.first_name !== '' && this.user.last_name !== '') {
        this.$store.dispatch('changeConfirmationDialog', contextState.CONFIRMUSER);
      } else {
        this.$store.dispatch('changeConfirmationDialog', contextState.ERRORUSER);
      }
    },
    modify() {
      if (this.userContext.state === contextState.CREATE) {
        // post user
        postUser(this.user)
          .then(() => {
            this.close();
          });
      } else {
        // update user
        updateUser(this.user)
          .then(() => {
            this.close();
          });
      }
    },
    clear() {
      // close confirmation dialog
      this.$store.dispatch('changeConfirmationDialog', null);
    },
    close() {
      // clear form and close modify dialog
      this.$refs.form.clear();
      this.$store.dispatch('changeUserContext', null);
    },
  },
};
</script>
