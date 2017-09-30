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
import { newUser, getUser, updateUser } from '../../services/data-access-layer';
import userModifyForm from '../forms/user-modify-form.vue';
import userModifyFormToolbar from '../form-components/user-modify-form-toolbar.vue';

export default {
  name: 'user-modify-dialog',
  data() {
    return {
      user: {},
    };
  },
  components: {
    userModifyForm,
    userModifyFormToolbar,
  },
  computed: {
    ...mapState({
      showDialog: state => state.userDialog === modalState.MODIFY,
      userContext: state => state.userContext,
    }),
  },
  watch: {
    userContext(state) {
      if (state && state.state === contextState.UPDATE) {
        // fetch report when updating
        getUser(state.id)
          .then((user) => {
            this.user = user;
            this.user.first_name = user.name.split(' ')[0];
            this.user.last_name = user.name.split(' ')[1];
            this.user.accessLevel = this.user.accessLevel.toString();
          });
      } else {
        // set to empty user
        this.user = newUser();
      }
    },
  },
  methods: {
    submit() {
      const valid = (this.user.email && this.user.first_name && this.user.last_name);
      if (valid && this.user.email !== '' && this.user.first_name !== '' && this.user.last_name !== '') {
        this.$store.dispatch('changeConfirmationDialog', contextState.CONFIRMUSER);
      } else {
        this.$store.dispatch('changeConfirmationDialog', contextState.ERROR);
      }
    },
    modify() {
      const user = {
        name: `${this.user.first_name} ${this.user.last_name}`,
        email: this.user.email,
        accessLevel: parseInt(this.user.accessLevel, [10]), // convert to int
        node: this.user.node,
      };
      if (this.userContext.state === contextState.CREATE) {
        postUser(user)
          .then(() => {
            const state = contextState.CREATEUSER;
            // this.$store.dispatch('changeReportContext', { id: null, state });
            this.$store.commit('changeUserContext', { id: null, state });
            this.clear();
        });
      }
      else {
        updateUser(user)
          .then(() => {
            const state = contextState.CREATEUSER;
            // this.$store.dispatch('changeReportContext', { id: null, state });
            this.$store.commit('changeUserContext', { id: null, state });
            this.clear();
          });
      }
    },
    clear() {
      this.$refs.form.clear();
      this.$store.dispatch('changeConfirmationDialog', null);
    },
  },
};
</script>
